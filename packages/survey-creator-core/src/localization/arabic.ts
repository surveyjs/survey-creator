import { setupLocale } from "survey-creator-core";

export var arStrings = {
  // survey templates
  survey: {
    edit: "تعديل",
    externalHelpLink: "شاهد وتعلم كيف يتم إنشاء إستبيان",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "الرجاء إفلات السؤال هنا من صندوق الأدوات",
    addLogicItem: ".قم بإنشاء قاعدة لتخصيص تدفق الإستبيان",
    copy: "نسخ",
    duplicate: "نسخة طبق الأصل",
    addToToolbox: "إضافة إلى صندوق الأدوات",
    deletePanel: "حذف لوحة",
    deleteQuestion: "حذف سؤال",
    convertTo: "تحويل إلى",
    drag: "إسحب العنصر",
  },
  // Creator tabs
  tabs: {
    preview: "تجربة الإستبيان",
    theme: "المواضيع",
    translation: "Translation",
    designer: "تصميم الإستبيان",
    json: "JSON Editor",
    logic: "منطق الإستبيان"
  },
  // Question types
  qt: {
    default: "الإفتراضي",
    checkbox: "إختيار من متعدد",
    comment: "تعليق",
    imagepicker: "إنتقاء الصور",
    ranking: "تصنيف",
    image: "صورة",
    dropdown: "قائمة منسدلة",
    tagbox: "قائمة منسدلة متعددة التحديد",
    file: "ملف",
    html: "لغة ترميز النصوص HTML",
    matrix: "مصفوفة (إختيار واحد)",
    matrixdropdown: "مصفوفة (إختيار متعدد)",
    matrixdynamic: "مصفوفة (صفوف ديناميكية)",
    multipletext: "مدخل متعدد",
    panel: "لوحة",
    paneldynamic: "لوحة ديناميكية",
    radiogroup: "إختيار فردي",
    rating: "تقييم",
    text: "مٌدخل فردي",
    boolean: "قيمة منطقية",
    expression: "عملية حسابية (للقرائة فقط)",
    signaturepad: "لوحة توقيع",
    buttongroup: "Button group"
  },
  toolboxCategories: {
    general: "قائمة العام",
    choice: "أسئلة الاختيار",
    text: "أسئلة إدخال النص",
    containers: "حاويات",
    matrix: "أسئلة المصفوفة",
    misc: "متفرقات"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "إفتراضي ({0})",
    survey: "Survey1",
    settings: "Survey Settings",
    settingsTooltip: "Open survey settings",
    surveySettings: "إعدادات الاستطلاع",
    surveySettingsTooltip: "إعدادات الاستطلاع",
    themeSettings: "إعدادات النسق",
    themeSettingsTooltip: "إعدادات النسق",
    creatorSettingTitle: "إعدادات منشئي المحتوى",
    showPanel: "إظهار اللوحة",
    hidePanel: "إخفاء اللوحة",
    prevSelected: "Select previous",
    nextSelected: "Select next",
    prevFocus: "التركيز السابق",
    nextFocus: "التركيز التالي",
    surveyTypeName: "الإستبيان",
    pageTypeName: "الصفحة",
    panelTypeName: "اللوحة",
    questionTypeName: "السؤال",
    columnTypeName: "Column",
    addNewPage: "Add New Page",
    moveRight: "Scroll to the Right",
    moveLeft: "Scroll to the Left",
    deletePage: "Delete Page",
    editPage: "Edit Page",
    edit: "التعديل",
    newPageName: "الصفحة",
    newQuestionName: "السؤال",
    newPanelName: "اللوحة",
    newTextItemName: "text",
    defaultV2Theme: "افتراضي",
    modernTheme: "حديث",
    defaultTheme: "الافتراضي (القديم)",
    testSurveyAgain: "Test Survey Again",
    testSurveyWidth: "Survey width: ",
    navigateToMsg: "You had to navigate to:",
    saveSurvey: "Save Survey",
    saveSurveyTooltip: "Save Survey",
    saveTheme: "حفظ السمة",
    saveThemeTooltip: "حفظ السمة",
    jsonHideErrors: "Hide errors",
    jsonShowErrors: "Show errors",
    undo: "Undo",
    redo: "Redo",
    undoTooltip: "Undo last change",
    redoTooltip: "Redo the change",
    expandTooltip: "ستوسع",
    collapseTooltip: "تقوض",
    expandAllTooltip: "توسيع الكل",
    collapseAllTooltip: "طي الكل",
    zoomInTooltip: "تكبير",
    zoom100Tooltip: "تكبير إلى 100٪",
    zoomOutTooltip: "التصغير",
    lockQuestionsTooltip: "تأمين حالة التوسيع/الطي للأسئلة",
    showMoreChoices: "استعراض المزيد",
    showLessChoices: "عرض أقل",
    copy: "Copy",
    cut: "Cut",
    paste: "Paste",
    copyTooltip: "Copy selection to clipboard",
    cutTooltip: "Cut selection to clipboard",
    pasteTooltip: "Paste from clipboard",
    options: "Options",
    generateValidJSON: "Generate Valid JSON",
    generateReadableJSON: "Generate Readable JSON",
    toolbox: "Toolbox",
    "property-grid": "Properties",
    toolboxFilteredTextPlaceholder: "اكتب للبحث...",
    toolboxNoResultsFound: "لم يتم العثور على نتائج",
    propertyGridFilteredTextPlaceholder: "Type to search...",
    propertyGridNoResultsFound: "لم يتم العثور على نتائج",
    propertyGridPlaceholderTitle: "بدء تكوين النموذج الخاص بك",
    propertyGridPlaceholderDescription: "انقر فوق أي رمز فئة لاستكشاف إعدادات الاستطلاع. ستتوفر إعدادات إضافية بمجرد إضافة عنصر استطلاع إلى سطح التصميم.",
    correctJSON: "Please correct JSON.",
    surveyResults: "Survey Results ",
    surveyResultsTable: "As Table",
    surveyResultsJson: "As JSON",
    resultsTitle: "Question Title",
    resultsName: "Question Name",
    resultsValue: "Answer Value",
    resultsDisplayValue: "Display Value",
    modified: "هناك تعديل جديد",
    saving: "يتم الآن حفظ التغييرات",
    saved: "تم الحفظ",
    propertyEditorError: "خطأ:",
    saveError: "Error! Editor content is not saved.",
    translationPropertyGridTitle: "Language Settings",
    themePropertyGridTitle: "إعدادات النسق",
    addLanguageTooltip: "إضافة لغة",
    translationLanguages: "Languages",
    translationDeleteLanguage: "هل أنت متأكد من أنك ترغب في حذف جميع السلاسل لهذه اللغة؟",
    translationAddLanguage: "Select language to translate",
    translationShowAllStrings: "Show all strings",
    translationShowUsedStringsOnly: "سلاسل مستعملة فقط",
    translationShowAllPages: "Show all pages",
    translationNoStrings: "No strings to translate. Please, change the filter.",
    translationExportToSCVButton: "Export to CSV",
    translationImportFromSCVButton: "Import from CSV",
    translateUsigAI: "ترجمة تلقائية للكل",
    translateUsigAIFrom: "ترجمة من: ",
    translationDialogTitle: "النصوص غير المترجمة",
    translationMergeLocaleWithDefault: "Merge {0} with default locale",
    translationPlaceHolder: "Translation...",
    translationSource: "مصدر: ",
    translationTarget: "هدف: ",
    translationYouTubeNotSupported: "روابط يوتيوب غير مدعومة.",
    themeExportButton: "تصدير",
    themeImportButton: "استورد",
    surveyJsonExportButton: "تصدير",
    surveyJsonImportButton: "استورد",
    surveyJsonCopyButton: "نسخ إلى الحافظة",
    themeResetButton: "إعادة تعيين إعدادات النسق إلى الوضع الافتراضي",
    themeResetConfirmation: "هل تريد حقا إعادة تعيين السمة؟ ستفقد جميع تخصيصاتك.",
    themeResetConfirmationOk: "نعم ، إعادة تعيين السمة",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    addNewQuestion: "Add Question",
    selectPage: "Select page...",
    carryForwardChoicesCopied: "يتم نسخ الاختيارات من",
    choicesLoadedFromWebText: "يتم تحميل الاختيارات من خدمة ويب.",
    choicesLoadedFromWebLinkText: "انتقل إلى الإعدادات",
    choicesLoadedFromWebPreviewTitle: "معاينة خيارات الاختيار المحملة",
    htmlPlaceHolder: "محتوى HTML سيكون هنا",
    panelPlaceHolder: "قم بإسقاط السؤال من صندوق الأدوات إلى هنا",
    surveyPlaceHolder: "الاستطلاع فارغ. اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه.",
    pagePlaceHolder: "الصفحة فارغة. اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه.",
    imagePlaceHolder: "قم بسحب وإسقاط صورة هنا أو انقر فوق الزر أدناه واختر صورة لتحميلها",
    surveyPlaceHolderMobile: "انقر فوق الزر \"إضافة سؤال\" أدناه لبدء إنشاء النموذج الخاص بك.",
    surveyPlaceholderTitle: "النموذج فارغ",
    surveyPlaceholderTitleMobile: "النموذج فارغ",
    surveyPlaceholderDescription: "اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه.",
    surveyPlaceholderDescriptionMobile: "اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه.",
    previewPlaceholderTitle: "لا معاينة",
    previewPlaceholderTitleMobile: "لا معاينة",
    previewPlaceholderDescription: "لا يحتوي الاستطلاع على أي عناصر مرئية.",
    previewPlaceholderDescriptionMobile: "لا يحتوي الاستطلاع على أي عناصر مرئية.",
    translationsPlaceholderTitle: "لا توجد سلاسل للترجمة",
    translationsPlaceholderTitleMobile: "لا توجد سلاسل للترجمة",
    translationsPlaceholderDescription: "أضف عناصر إلى النموذج أو قم بتغيير عامل تصفية السلاسل في شريط الأدوات.",
    translationsPlaceholderDescriptionMobile: "أضف عناصر إلى النموذج أو قم بتغيير عامل تصفية السلاسل في شريط الأدوات.",
    pagePlaceHolderMobile: "انقر فوق الزر \"إضافة سؤال\" أدناه لإضافة عنصر جديد إلى الصفحة.",
    panelPlaceHolderMobile: "انقر فوق الزر \"إضافة سؤال\" أدناه لإضافة عنصر جديد إلى اللوحة.",
    imagePlaceHolderMobile: "انقر فوق الزر أدناه واختر صورة لتحميلها",
    imageChooseImage: "اختر صورة",
    addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[الشعار]",
    choices_Item: "بند ",
    selectFile: "حدد ملفا",
    removeFile: "إزالة الملف",
    lg: {
      addNewItem: "إضافة قاعدة جديدة",
      empty_tab: "قم بإنشاء إرتباط لتخصيص تدفق الإستبيان",
      logicPlaceholderTitle: "لا توجد قواعد منطقية",
      logicPlaceholderTitleMobile: "لا توجد قواعد منطقية",
      logicPlaceholderDescription: "إنشاء قاعدة لتخصيص تدفق الاستطلاع.",
      logicPlaceholderDescriptionMobile: "إنشاء قاعدة لتخصيص تدفق الاستطلاع.",
      page_visibilityName: "إظهار (إخفاء) صفحة",
      page_enableName: "تمكين (تعطيل) الصفحة",
      page_requireName: "اجعل الصفحة مطلوبة",
      panel_visibilityName: "إظهار (إخفاء) لوحة",
      panel_enableName: "تفعيل (تعطيل) لوحة",
      panel_requireName: "اجعل الصفحة مطلوبة",
      question_visibilityName: "إظهار (إخفاء) سؤال",
      question_enableName: "تفعيل (تعطيل) سؤال",
      question_requireName: "جعل السؤال إلزامي",
      question_resetValueName: "إعادة تعيين قيمة السؤال",
      question_setValueName: "تعيين قيمة السؤال",
      column_visibilityName: "إظهار (إخفاء) العمود",
      column_enableName: "تمكين (تعطيل) العمود",
      column_requireName: "جعل العمود مطلوبا",
      column_resetValueName: "إعادة تعيين قيمة العمود",
      column_setValueName: "تعيين قيمة العمود",
      trigger_completeName: "أنهي الإستبيان",
      trigger_setvalueName: "تحديد قيمة السؤال",
      trigger_copyvalueName: "نسخ قيمة السؤال",
      trigger_skipName: "التخطي إلى السؤال",
      trigger_runExpressionName: "تشغيل تعبير رياضي مخصص",
      completedHtmlOnConditionName: "نص رسالة شكر مخصصة",
      page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled.",
      question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible.",
      question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled.",
      question_requireDescription: "Question becomes required when the logic expression returns true.",
      trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'.",
      trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question.",
      trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question.",
      trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",
      itemExpressionText: "عندما التعبير '{0}' رجع قيمة المنطقية صحيح", //{0} - the expression
      itemEmptyExpressionText: "الإرتباط الجديد لم يحدد",
      page_visibilityText: "جعل الصفحة {0} مرئية", //{0} page name
      panel_visibilityText: "جعل اللوحة {0} مرئية", //{0} panel name
      panel_enableText: "جعل اللوحة {0} مفعلة", //{0} panel name
      question_visibilityText: "جعل السؤال {0} مرئي", //{0} question name
      question_enableText: "جعل السؤال {0} مفعل", //{0} question name
      question_requireText: "جعل السؤال {0} إلزامي", //{0} question name
      question_resetValueText: "إعادة تعيين قيمة السؤال: {0}", //{0} question name.
      question_setValueText: "تعيين قيمة: {1} السؤال: {0}",
      column_visibilityText: "جعل العمود {0} السؤال {1} مرئيا", //{0} column name, {1} question name
      column_enableText: "تمكين {0} عمود السؤال {1}", //{0} column name, {1} question name
      column_requireText: "جعل العمود {0} السؤال {1} مطلوبا", //{0} column name, {1} question name
      column_resetValueText: "إعادة تعيين قيمة الخلية للعمود: {0}", //{0} column name
      column_setValueText: "تعيين قيمة الخلية: {1} إلى العمود: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " تعبير سيتم تعيين نتيجته للسؤال الهدف.",
      trigger_completeText: "الإستبيان سيصبح مكتمل",
      trigger_setvalueText: "تثبيت إلى السؤال: {0} القيمة {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "قيمة سؤال واضحة: {0}", //{0} question name
      trigger_copyvalueText: "النسخ إلى السؤال: {0} القيمة القادمة من السؤال {1}", //{0} and {1} question names
      trigger_skipText: "التخطي إلى السؤال {0}", //{0} question name
      trigger_runExpressionText1: "شغل التعبير الرياضي '{0}'", //{0} the expression
      trigger_runExpressionText2: " وثبت نتيجتها إلى السؤال {0}", //{0} question name
      completedHtmlOnConditionText: "عرض نص رسال 'صفحة شكر' مخصصة",
      showAllQuestions: "عرض كل الأسئلة",
      showAllActionTypes: "عرض كل أنواع الإجراءات",
      conditions: "Condition(s)",
      actions: "Action(s)",
      expressionEditorTitle: "تعريف شرط(إشتراطات)",
      actionsEditorTitle: "تعريف إجراء (إجراءات)",
      deleteAction: "حذف الإجراء",
      addNewAction: "إضافة إجراء جديد",
      selectedActionCaption: "حدد الإجراء لأضافته",
      expressionInvalid: "التعبير المنطقي الرياضي فارغ أو غير صحيح، يرجى تصحيحه",
      noActionError: "الرجاء، إضافة إجراء واحد على الأقل",
      actionInvalid: "الرجاء، إصلاح الأخطاء في الإجراء التابع لك",
      uncompletedRule_title: "القواعد المنطقية غير مكتملة",
      uncompletedRule_text: "لم تكمل بعض القواعد المنطقية. إذا تركت علامة التبويب الآن ، فستفقد التغييرات. هل ما زلت تريد مغادرة علامة التبويب دون إكمال التغييرات؟",
      uncompletedRule_apply: "نعم",
      uncompletedRule_cancel: "لا، أريد إكمال القواعد"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "اسم اللوحة",
      title: "عنوان اللوحة",
      description: "وصف اللوحة",
      visibleIf: "اجعل اللوحة مرئية إذا",
      requiredIf: "اجعل اللوحة مطلوبة إذا",
      questionOrder: "ترتيب الأسئلة داخل اللوحة",
      page: "الصفحة الرئيسية",
      startWithNewLine: "عرض اللوحة على سطر جديد",
      state: "حالة انهيار اللوحة",
      width: "عرض اللوحة المضمنة",
      minWidth: "الحد الأدنى لعرض اللوحة",
      maxWidth: "الحد الأقصى لعرض اللوحة",
      showNumber: "رقم هذه اللوحة"
    },
    panellayoutcolumn: {
      effectiveWidth: "العرض الفعال ،٪",
      questionTitleWidth: "عرض عنوان السؤال، بكسل"
    },
    paneldynamic: {
      name: "اسم اللوحة",
      title: "عنوان اللوحة",
      description: "وصف اللوحة",
      visibleIf: "اجعل اللوحة مرئية إذا",
      requiredIf: "اجعل اللوحة مطلوبة إذا",
      page: "نقل اللوحة إلى الصفحة",
      startWithNewLine: "عرض اللوحة على سطر جديد",
      state: "حالة انهيار اللوحة",
      width: "عرض اللوحة المضمنة",
      minWidth: "الحد الأدنى لعرض اللوحة",
      maxWidth: "الحد الأقصى لعرض اللوحة",
      confirmDelete: "تأكيد حذف اللوحة",
      templateDescription: "نمط وصف اللوحة",
      templateTitle: "نمط عنوان اللوحة",
      noEntriesText: "نص لوحة فارغ",
      templateTabTitle: "نمط عنوان علامة التبويب",
      tabTitlePlaceholder: "العنصر النائب لعنوان علامة التبويب",
      templateVisibleIf: "اجعل لوحة فردية مرئية إذا",
      showNumber: "ترقيم اللوحة",
      titleLocation: "محاذاة عنوان اللوحة",
      descriptionLocation: "محاذاة وصف اللوحة",
      templateQuestionTitleLocation: "محاذاة عنوان السؤال",
      templateQuestionTitleWidth: "عرض عنوان السؤال",
      templateErrorLocation: "محاذاة رسالة الخطأ",
      newPanelPosition: "موقع لوحة جديد",
      showRangeInProgress: "إظهار شريط التقدم",
      keyName: "منع تكرار الردود في السؤال التالي"
    },
    question: {
      name: "اسم السؤال",
      title: "عنوان السؤال",
      description: "وصف السؤال",
      visibleIf: "اجعل السؤال مرئيا إذا",
      requiredIf: "اجعل السؤال مطلوبا إذا",
      page: "الصفحة الرئيسية",
      state: "حالة طي مربع الأسئلة",
      showNumber: "رقم هذا السؤال",
      titleLocation: "محاذاة عنوان السؤال",
      descriptionLocation: "محاذاة وصف السؤال",
      errorLocation: "محاذاة رسالة الخطأ",
      indent: "زيادة المسافة البادئة الداخلية",
      width: "عرض السؤال المضمن",
      minWidth: "الحد الأدنى لعرض السؤال",
      maxWidth: "الحد الأقصى لعرض السؤال",
      textUpdateMode: "تحديث قيمة حقل الإدخال"
    },
    signaturepad: {
      signatureWidth: "عرض منطقة التوقيع",
      signatureHeight: "ارتفاع منطقة التوقيع",
      signatureAutoScaleEnabled: "تغيير حجم منطقة التوقيع تلقائيا",
      showPlaceholder: "إظهار العنصر النائب",
      placeholder: "نص العنصر النائب",
      placeholderReadOnly: "نص العنصر النائب في وضع القراءة فقط أو المعاينة",
      allowClear: "إظهار الزر مسح داخل منطقة التوقيع",
      penMinWidth: "الحد الأدنى لعرض القلم",
      penMaxWidth: "الحد الأقصى لعرض القلم",
      penColor: "لون الحد"
    },
    comment: {
      rows: "ارتفاع حقل الإدخال (في الأسطر)"
    },
    showQuestionNumbers: "إظهار أرقام الأسئلة",
    questionStartIndex: "فهرس بداية الأسئلة (1،2 أو 'أ' ، 'ب')",
    expression: {
      name: "اسم التعبير",
      title: "عنوان التعبير",
      description: "وصف التعبير",
      expression: "تعبير"
    },
    trigger: {
      expression: "تعبير"
    },
    calculatedvalue: {
      expression: "تعبير"
    },
    // survey templates
    survey: {
      title: "عنوان",
      description: "وصف المسح",
      readOnly: "جعل الاستطلاع للقراءة فقط"
    },
    page: {
      name: "اسم الصفحة",
      title: "عنوان",
      description: "وصف الصفحة",
      visibleIf: "اجعل الصفحة مرئية إذا",
      requiredIf: "اجعل الصفحة مطلوبة إذا",
      timeLimit: "الحد الزمني لإنهاء الصفحة (بالثواني)",
      questionOrder: "ترتيب الأسئلة على الصفحة"
    },
    matrixdropdowncolumn: {
      name: "اسم العمود",
      title: "عنوان العمود",
      isUnique: "منع الردود المكررة",
      width: "عرض العمود",
      minWidth: "الحد الأدنى لعرض العمود",
      rows: "ارتفاع حقل الإدخال (في الأسطر)",
      visibleIf: "اجعل العمود مرئيا إذا",
      requiredIf: "اجعل العمود مطلوبا إذا",
      showInMultipleColumns: "كل خيار في عمود منفصل"
    },
    multipletextitem: {
      name: "اسم",
      title: "عنوان"
    },
    masksettings: {
      saveMaskedValue: "حفظ القيمة المقنعة في نتائج الاستطلاع"
    },
    patternmask: {
      pattern: "نمط القيمة"
    },
    datetimemask: {
      min: "الحد الأدنى للقيمة",
      max: "القيمة القصوى"
    },
    numericmask: {
      allowNegativeValues: "السماح بالقيم السالبة",
      thousandsSeparator: "فاصل الآلاف",
      decimalSeparator: "فاصل عشري",
      precision: "دقة القيمة",
      min: "الحد الأدنى للقيمة",
      max: "القيمة القصوى"
    },
    currencymask: {
      prefix: "بادئة العملة",
      suffix: "لاحقة العملة"
    },
    imageHeight: "طول الصورة",
    imageWidth: "عرض الصورة",
    valueName: "اسم القيمة",
    defaultDisplayValue: "قيمة العرض الافتراضية للنصوص الديناميكية",
    rateDescriptionLocation: "محاذاة التسمية",
    size: "عرض حقل الإدخال (بالأحرف)",
    cellErrorLocation: "محاذاة رسالة خطأ الخلية",
    enabled: "تمكين",
    disabled: "ذوي الاحتياجات الخاصه",
    inherit: "ورث",
    apply: "تطبيق",
    ok: "موافق",
    save: "حفظ",
    clear: "مسح",
    saveTooltip: "حفظ",
    cancel: "إلغاء",
    set: "تثبيت",
    reset: "Reset",
    change: "تغيير",
    refresh: "Refresh",
    close: "إغلاق",
    delete: "حذف",
    add: "إضافة",
    addNew: "إضافة إرتباط جديد",
    addItem: "Click to add an item...",
    removeItem: "Click to remove the item...",
    dragItem: "Drag the item",
    addOther: "Other",
    addSelectAll: "Select All",
    addNone: "None",
    removeAll: "Remove All",
    edit: "التعديل",
    back: "Return without saving",
    backTooltip: "Return without saving",
    saveAndBack: "Save and return",
    saveAndBackTooltip: "Save and return",
    doneEditing: "إضافة",
    editChoices: "Edit Choices",
    showChoices: "Show Choices",
    move: "Move",
    empty: "<empty>",
    emptyValue: "القيمة فارغة",
    fastEntry: "إدخالات سريعة",
    fastEntryNonUniqueError: "Value '{0}' is not unique",
    fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    fastEntryChoicesMinCountError: "الرجاء إدخال {0} العناصر على الأقل",
    fastEntryPlaceholder: "يمكنك تعيين البيانات بالتنسيق التالي:\nالقيمة1|النص\nقيمة2",
    formEntry: "Form Entry",
    testService: "Test the service",
    itemSelectorEmpty: "Please select the element",
    conditionActionEmpty: "Please select the action",
    conditionSelectQuestion: "إختر السؤال...",
    conditionSelectPage: "Select page...",
    conditionSelectPanel: "Select panel...",
    conditionValueQuestionTitle: "Please enter/select the value",
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    aceEditorRowTitle: "Current row",
    aceEditorPanelTitle: "Current panel",
    showMore: "For more details please check the documentation",
    assistantTitle: "Available questions:",
    cellsEmptyRowsColumns: "There is should be at least one column or row",
    showPreviewBeforeComplete: "معاينة الإجابات قبل إرسال الاستطلاع",
    overridingPropertyPrefix: "تم تعيينه بواسطة ",
    resetToDefaultCaption: "اعاده تعيين",
    propertyIsEmpty: "Please enter a value",
    propertyIsNoUnique: "Please enter a unique value",
    propertyNameIsNotUnique: "Please enter a unique name",
    propertyNameIsIncorrect: "لا تستخدم الكلمات المحجوزة: \"عنصر\" ، \"اختيار\" ، \"لوحة\" ، \"صف\".",
    listIsEmpty: "No items have been added yet",
    "listIsEmpty@choices": "لم تتم إضافة أي خيارات حتى الآن",
    "listIsEmpty@columns": "ليس لديك أي أعمدة حتى الآن",
    "listIsEmpty@gridLayoutColumns": "ليس لديك أعمدة تخطيط حتى الآن",
    "listIsEmpty@rows": "ليس لديك أي صفوف حتى الآن",
    "listIsEmpty@validators": "ليس لديك أي قواعد تحقق حتى الآن",
    "listIsEmpty@calculatedValues": "ليس لديك أي متغيرات مخصصة حتى الآن",
    "listIsEmpty@triggers": "ليس لديك أي محفزات حتى الآن",
    "listIsEmpty@navigateToUrlOnCondition": "ليس لديك أي روابط حتى الآن",
    "listIsEmpty@pages": "ليس لديك أي صفحات حتى الآن",
    "addNew@choices": "إضافة خيار",
    "addNew@columns": "إضافة عمود جديد",
    "addNew@rows": "إضافة صف جديد",
    "addNew@validators": "إضافة قاعدة جديدة",
    "addNew@calculatedValues": "إضافة متغير جديد",
    "addNew@triggers": "إضافة مشغل جديد",
    "addNew@navigateToUrlOnCondition": "إضافة عنوان URL جديد",
    "addNew@pages": "إضافة صفحة جديدة",
    expressionIsEmpty: "Expression is empty",
    value: "القيمة",
    text: "النص",
    rowid: "Row ID",
    imageLink: "رابط الصورة",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",
    url: "رابط إلكتروني URL",
    path: "المسار",
    choicesbyurl: {
      url: "عنوان URL لخدمة الويب",
      valueName: "الحصول على قيم من حقل JSON التالي"
    },
    titleName: "اسم العنوان",
    imageLinkName: "اسم رابط الصورة",
    allowEmptyResponse: "السماح بجواب فارغ",
    titlePlaceholder: "Input title here",
    surveyTitlePlaceholder: "أدخل عنوان الإستبيان هنا",
    pageTitlePlaceholder: "أدخل عنوان الصفحة هنا",
    startPageTitlePlaceholder: "الصفحة الرئيسية",
    descriptionPlaceholder: "Enter a description",
    surveyDescriptionPlaceholder: "أدخل وصف للإستبيان",
    pageDescriptionPlaceholder: "أدخل وصف للصفحة",
    textWrapEnabled: "خيارات الالتفاف",
    showOtherItem: "هل هناك خيار أخرى",
    otherText: "نص خيار أخرى",
    showNoneItem: "هل هناك خيار بلا",
    showRefuseItem: "السماح بخيار رفض الإجابة",
    showDontKnowItem: "السماح بالخيار \"لا أعرف\"",
    noneText: "نص خيار بلا",
    showSelectAllItem: "هل هناك خيار إختيار الكل",
    selectAllText: "نص خيار إختر الكل",
    choicesMin: "Minimum value for auto generated items",
    choicesMax: "Maximum value for auto generated items",
    choicesStep: "The difference between auto generated items",
    name: "الإسم",
    title: "العنوان",
    cellType: "نوع الخلية",
    colCount: "عدد الأعمدة",
    choicesOrder: "إختر ترتيب الإختيارات",
    allowCustomChoices: "السماح بالخيارات المخصصة",
    visible: "مرئي؟",
    isRequired: "مطلوب؟",
    markRequired: "وضع علامة كمطلوب",
    removeRequiredMark: "إزالة العلامة المطلوبة",
    eachRowRequired: "المطالبة بالأجوبة لكل الصفوف",
    eachRowUnique: "منع تكرار الاستجابات في الصفوف",
    requiredErrorText: "نص خطأ إلزامي السؤال",
    startWithNewLine: "إظهار السؤال في صف جديد",
    rows: "عدد الصفوف",
    cols: "عدد الأعمدة",
    placeholder: "نص حامل خانة الإدخال",
    showPreview: "عرض منطقة المعاينة",
    storeDataAsText: "تخزين محتويات ملف JSON كنص",
    maxSize: "أقصى حجم للملف بالبايت",
    rowCount: "عدد الصفوف",
    columnLayout: "تخطيط الأعمدة",
    addRowButtonLocation: "موقع زر إضافة صف",
    transposeData: "تبديل موضع الصفوف إلى أعمدة",
    addRowText: "نص زر إضافة صف",
    removeRowText: "نص زر حذف صف",
    rateMin: "أصغر معدل",
    rateMax: "أكبر معدل",
    rateStep: "خطوات المعدل",
    minRateDescription: "وصف أصغر معدل",
    maxRateDescription: "وصف أكبر معدل",
    inputType: "نوع المدخل",
    optionsCaption: "خيارات الشرح",
    defaultValue: "القيمة الإفتراضية",
    cellsDefaultRow: "Default cells texts",
    surveyEditorTitle: "Edit survey settings",
    qEditorTitle: "Edit: {0}",
    maxLength: "أقصى طول",
    buildExpression: "Build",
    editExpression: "التعديل",
    and: "و",
    or: "أو",
    remove: "إزالة",
    addCondition: "أضف الشرط",
    emptyLogicPopupMessage: "حدد سؤالا لبدء تكوين الشروط.",
    if: "إذا قيمة",
    then: "ثم",
    setToName: "إلى",
    fromName: "from",
    gotoName: "سؤال للتخطي إليه",
    ruleIsNotSet: "Rule is incorrect",
    includeIntoResult: "تضمين نتائج الاستطلاع",
    showTitle: "إظهار/إخفاء العنوان",
    expandCollapseTitle: "Expand/collapse title",
    locale: "اللغة الإفتراضية",
    simulator: "Choose device",
    landscapeOrientation: "Landscape",
    portraitOrientation: "Portrait",
    clearInvisibleValues: "إمسح القيم الغير مرئية",
    cookieName: "أدخل إسم ملف تعريف الإرتباط (لتعطيل المشاركة بالإستبيان أكثر من مرة)",
    partialSendEnabled: "إرسال نتائج الإستبيان على الصفحة التالية",
    storeOthersAsComment: "تخزين قيمة 'أخرى' في حقل منفصل",
    showPageTitles: "عرض عنوان الصفحات",
    showPageNumbers: "عرض أرقام الصفحات",
    pagePrevText: "نص زر الإنتقال للصفحة السابقة",
    pageNextText: "نص زر الإنتقال للصفحة التالية",
    completeText: "نص زر إنهاء الإستبيان",
    previewText: "نص زر المعاينة",
    editText: "نص زر التعديل",
    startSurveyText: "نص زر بدء المشاركة بالإستبيان",
    showNavigationButtons: "إظهار أزرار الإنتقال (التنقل الإفتراضي)",
    navigationButtonsLocation: "محاذاة أزرار التنقل",
    showPrevButton: "إظهار زر التنقل السابق (السماح للمستخدم من العودة للصفحة السابقة في الإستبيان)",
    firstPageIsStartPage: "الصفحة الأولى في الإستبيان هي صفحة البدء",
    showCompletePage: "إظهار الصفحة المكتملة في النهاية (صفحة ويب مكتملة)",
    autoAdvanceEnabled: "عند الإجابة على جميع الأسئلة، إنتقل إلى الصفحة التالية تلقائياً",
    autoAdvanceAllowComplete: "إكمال الاستطلاع تلقائيا",
    showProgressBar: "إظهار شريط التقدم",
    progressBarLocation: "محاذاة شريط التقدم",
    questionTitleLocation: "موقع عنوان السؤال",
    questionTitleWidth: "عرض عنوان السؤال",
    requiredMark: "رمز السؤال مطلوب",
    questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "موقع خطأ في السؤال",
    autoFocusFirstQuestion: "ركز المؤشر على السؤال الأول عند تغير الصفحة",
    questionOrder: "ترتيب العناصر على الصفحة",
    timeLimit: "أقصى وقت لإنهاء الإستبيان",
    timeLimitPerPage: "أقصى وقت لإنهاء الصفحة في الإستبيان",
    showTimer: "استخدام مؤقت",
    timerLocation: "إظهار لوحة المؤقت",
    timerInfoMode: "إظهار نمط لوحة المؤقت",
    renderMode: "نمط العرض",
    allowAddPanel: "السماح بإضافة لوحة",
    allowRemovePanel: "السماح بإزالة لوحة",
    addPanelText: "نص إضافة لوحة",
    removePanelText: "نص إزالة لوحة",
    isSinglePage: "Show all elements on one page",
    html: "صفحة ويب HTML",
    setValue: "جواب",
    dataFormat: "تنسيق الصورة",
    allowAddRows: "السماح بإضافة صفوف",
    allowRemoveRows: "السماح بإزالة الصفوف",
    allowRowReorder: "السماح بسحب الصف وإفلاته",
    responsiveImageSizeHelp: "لا ينطبق إذا قمت بتحديد عرض الصورة أو ارتفاعها بالضبط.",
    minImageWidth: "الحد الأدنى لعرض الصورة",
    maxImageWidth: "الحد الأقصى لعرض الصورة",
    minImageHeight: "الحد الأدنى لارتفاع الصورة",
    maxImageHeight: "الحد الأقصى لارتفاع الصورة",
    minValue: "أقل قيمة",
    maxValue: "أكبر قيمة",
    caseInsensitive: "غير حساس لحالة الأحرف",
    minLength: "Minimum length",
    allowDigits: "Allow digits",
    minCount: "Minimum count",
    maxCount: "Maximum count",
    regex: "Regular expression",
    surveyvalidator: {
      text: "رسالة خطأ",
      expression: "تعبير التحقق من الصحة"
    },
    totalText: "Total text",
    totalType: "Total type",
    totalExpression: "Total expression",
    totalDisplayStyle: "Total display style",
    totalCurrency: "Total currency",
    totalFormat: "Total format",
    logo: "الشعار (عنوان URL أو سلسلة مشفرة base64)",
    questionsOnPageMode: "هيكل المسح",
    maxTextLength: "الحد الأقصى لطول الإجابة (بالأحرف)",
    maxCommentLength: "الحد الأقصى لطول التعليق (بالأحرف)",
    commentAreaRows: "ارتفاع منطقة التعليق (في الأسطر)",
    autoGrowComment: "توسيع منطقة التعليق تلقائيا إذا لزم الأمر",
    allowResizeComment: "السماح للمستخدمين بتغيير حجم مناطق النص",
    textUpdateMode: "تحديث قيمة السؤال النصي",
    maskType: "نوع قناع الإدخال",
    autoFocusFirstError: "تعيين التركيز على أول إجابة غير صالحة",
    checkErrorsMode: "تشغيل التحقق من الصحة",
    validateVisitedEmptyFields: "التحقق من صحة الحقول الفارغة على التركيز المفقود",
    navigateToUrl: "انتقل إلى عنوان URL",
    navigateToUrlOnCondition: "عنوان URL الديناميكي",
    completedBeforeHtml: "الترميز لإظهار ما إذا كان المستخدم قد ملأ هذا الاستطلاع بالفعل",
    completedHtml: "ترميز صفحة الاستطلاع الكامل",
    completedHtmlOnCondition: "الاستطلاع الديناميكي إكمال ترميز الصفحة",
    loadingHtml: "الترميز لإظهاره أثناء تحميل نموذج الاستطلاع",
    commentText: "نص منطقة التعليق",
    autocomplete: "نوع الإكمال التلقائي",
    labelTrue: "تسمية \"صحيح\"",
    labelFalse: "تسمية \"خطأ\"",
    allowClear: "إظهار الزر مسح",
    searchMode: "وضع البحث",
    displayStyle: "نمط عرض القيمة",
    format: "سلسلة منسقة",
    maximumFractionDigits: "الحد الأقصى للأرقام الكسرية",
    minimumFractionDigits: "الحد الأدنى من الأرقام الكسرية",
    useGrouping: "عرض فواصل التجميع",
    allowMultiple: "السماح بملفات متعددة",
    allowImagesPreview: "معاينة الصور",
    acceptedTypes: "أنواع الملفات المقبولة",
    waitForUpload: "انتظر حتى يكتمل التحميل",
    needConfirmRemoveFile: "تأكيد حذف الملف",
    detailPanelMode: "موقع لوحة التفاصيل",
    minRowCount: "الحد الأدنى لعدد الصفوف",
    maxRowCount: "الحد الأقصى لعدد الصفوف",
    confirmDelete: "تأكيد حذف الصف",
    confirmDeleteText: "رسالة تأكيد",
    panelCount: "عدد اللوحات الأولي",
    minPanelCount: "الحد الأدنى لعدد اللوحات",
    maxPanelCount: "الحد الأقصى لعدد اللوحات",
    panelsState: "حالة توسيع اللوحة الداخلية",
    prevPanelText: "تلميح أداة زر اللوحة السابق",
    nextPanelText: "تلميح أداة زر اللوحة التالية",
    removePanelButtonLocation: "إزالة موقع زر اللوحة",
    hideIfRowsEmpty: "إخفاء السؤال إذا لم تكن هناك صفوف",
    hideColumnsIfEmpty: "إخفاء الأعمدة في حالة عدم وجود صفوف",
    rateValues: "قيم الأسعار المخصصة",
    rateCount: "عدد الأسعار",
    autoGenerate: "كيفية تحديد قيم المعدل؟",
    hideIfChoicesEmpty: "إخفاء السؤال إذا لم يكن يحتوي على خيارات",
    minWidth: "الحد الأدنى للعرض (بالقيم المقبولة في CSS)",
    maxWidth: "الحد الأقصى للعرض (بالقيم المقبولة من CSS)",
    width: "العرض (بالقيم المقبولة من CSS)",
    showHeader: "إظهار رؤوس الأعمدة",
    horizontalScroll: "إظهار شريط التمرير الأفقي",
    columnMinWidth: "الحد الأدنى لعرض العمود (بالقيم المقبولة من CSS)",
    rowTitleWidth: "عرض رأس الصف (بالقيم المقبولة من CSS)",
    valueTrue: "القيمة \"الحقيقية\"",
    valueFalse: "قيمة \"خاطئة\"",
    minErrorText: "رسالة الخطأ \"القيمة أقل من الحد الأدنى\"",
    maxErrorText: "رسالة الخطأ \"القيمة تتجاوز الحد الأقصى\"",
    otherErrorText: "رسالة الخطأ \"تعليق فارغ\"",
    keyDuplicationError: "رسالة الخطأ \"قيمة مفتاح غير فريدة\"",
    minSelectedChoices: "الحد الأدنى من الخيارات المحددة",
    maxSelectedChoices: "الحد الأقصى للخيارات المحددة",
    logoWidth: "عرض الشعار (بالقيم المقبولة من CSS)",
    logoHeight: "ارتفاع الشعار (بالقيم المقبولة من CSS)",
    readOnly: "للقراءة فقط",
    enableIf: "قابل للتحرير إذا",
    noRowsText: "رسالة \"بلا صفوف\"",
    separateSpecialChoices: "خيارات خاصة منفصلة (لا شيء، أخرى، تحديد الكل)",
    choicesFromQuestion: "نسخ الاختيارات من السؤال التالي",
    choicesFromQuestionMode: "ما هي الخيارات التي تريد نسخها؟",
    choiceValuesFromQuestion: "استخدم القيم من عمود المصفوفة التالي أو سؤال اللوحة كمعرفات اختيار",
    choiceTextsFromQuestion: "استخدم القيم من عمود المصفوفة التالي أو سؤال اللوحة كنصوص اختيار",
    progressBarShowPageTitles: "عرض عناوين الصفحات في شريط التقدم",
    progressBarShowPageNumbers: "عرض أرقام الصفحات في شريط التقدم",
    showCommentArea: "إظهار منطقة التعليق",
    commentPlaceholder: "العنصر النائب لمنطقة التعليق",
    displayRateDescriptionsAsExtremeItems: "عرض أوصاف المعدل كقيم قصوى",
    rowOrder: "ترتيب الصفوف",
    columnsLayout: "تخطيط العمود",
    columnColCount: "عدد الأعمدة المتداخلة",
    correctAnswer: "الإجابة الصحيحة",
    defaultPanelValue: "القيم الافتراضية",
    cells: "نصوص الخلية",
    fileInputPlaceholder: "حدد ملفا أو الصق رابط ملف...",
    keyName: "عمود المفتاح",
    itemvalue: {
      visibleIf: "اجعل الخيار مرئيا إذا",
      enableIf: "اجعل الخيار قابلا للتحديد إذا"
    },
    "itemvalue@rows": {
      visibleIf: "اجعل الصف مرئيا إذا",
      enableIf: "اجعل الصف قابلا للتحرير إذا"
    },
    imageitemvalue: {
      text: "نص بديل"
    },
    logoPosition: "Logo position",
    addLogo: "Add logo...",
    changeLogo: "Change logo...",
    logoPositions: {
      none: "حذف الشعار",
      left: "يسار",
      right: "يمين",
      top: "في الأعلى",
      bottom: "في الأسفل"
    },
    previewMode: "وضع المعاينة",
    gridLayoutEnabled: "تمكين تخطيط الشبكة",
    gridLayoutColumns: "أعمدة تخطيط الشبكة",
    maskSettings: "إعدادات القناع",
    detailErrorLocation: "محاذاة رسالة خطأ توسيع الصف",
    // Creator tabs
    tabs: {
      panel: {
        layout: "تخطيط اللوحة"
      },
      general: "عام",
      fileOptions: "الخيارات",
      html: "Html Editor",
      columns: "الأعمدة",
      rows: "الصفوف",
      choices: "الخيارات",
      items: "العناصر",
      visibleIf: "مرئي عندما",
      enableIf: "مفعل عندما",
      requiredIf: "مطلوب عندما",
      rateValues: "قيم التقييم",
      choicesByUrl: "خيارات من الإنترنت",
      matrixChoices: "Default Choices",
      multipleTextItems: "Text Inputs",
      numbering: "الترقيم",
      validators: "المدققات",
      navigation: "التنقل",
      question: "السؤال",
      pages: "الصفحات",
      timer: "مؤقت/إختبار قصير",
      calculatedValues: "Calculated Values",
      triggers: "Triggers",
      templateTitle: "عنوان القالب",
      totals: "Totals",
      logic: "المنطق",
      mask: "إعدادات قناع الإدخال",
      layout: {
        panel: "تخطيط",
        question: "تخطيط",
        base: "تخطيط"
      },
      data: "البيانات",
      validation: "التحقق",
      cells: "الخلايا",
      showOnCompleted: "عند الإنتهاء من الإستبيان",
      logo: "الشعار في عنوان الإستبيان",
      slider: "Slider",
      expression: "تعبير",
      questionSettings: "إعدادات السؤال",
      header: "راس",
      background: "خلفية",
      appearance: "مظهر",
      accentColors: "ألوان مميزة",
      surfaceBackground: "خلفية السطح",
      scaling: "القياس",
      others: "غير ذلك"
    },
    editProperty: "Edit property '{0}'",
    items: "Items",
    choicesVisibleIf: "تكون الخيارات مرئية إذا",
    choicesEnableIf: "يمكن تحديد الخيارات إذا",
    columnsEnableIf: "تكون الأعمدة مرئية إذا",
    rowsEnableIf: "تكون الصفوف مرئية إذا",
    innerIndent: "إضافة مسافات بادئة داخلية",
    copyDefaultValueFromLastEntry: "استخدام الإجابات من الإدخال الأخير كإعداد افتراضي",
    enterNewValue: "Please, enter the value.",
    noquestions: "There is no any question in the survey.",
    createtrigger: "Please create a trigger",
    titleKeyboardAdornerTip: "Press enter button to edit",
    keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible:",
    triggerMakeQuestionsVisible: "Make elements visible:",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerFromName: "Copy value from: ",
    triggerRunExpression: "Run this Expression:",
    triggerSetValue: "to: ",
    triggerGotoName: "Go to the question:",
    triggerIsVariable: "Do not put the variable into the survey result.",
    triggerRunExpressionEmpty: "Please enter a valid expression",
    emptyExpressionPlaceHolder: "اكتب التعبير هنا...",
    noFile: "No file choosen",
    clearIfInvisible: "مسح القيمة إذا أصبح السؤال مخفيا",
    valuePropertyName: "اسم خاصية القيمة",
    searchEnabled: "تمكين البحث",
    hideSelectedItems: "إخفاء العناصر المحددة",
    closeOnSelect: "أغلق القائمة المنسدلة بعد التحديد",
    verticalAlign: "المحاذاة الرأسية",
    alternateRows: "صفوف بديلة",
    columnsVisibleIf: "تكون الأعمدة مرئية إذا",
    rowsVisibleIf: "تكون الصفوف مرئية إذا",
    otherPlaceholder: "العنصر النائب لمنطقة التعليق",
    filePlaceholder: "نص العنصر النائب للملف",
    photoPlaceholder: "نص العنصر النائب للصورة",
    fileOrPhotoPlaceholder: "نص العنصر النائب للملف أو الصورة",
    rateType: "نوع السعر",
    url_placeholder: "مثال: https://api.example.com/books",
    path_placeholder: "مثال: فئات.خيال",
    questionStartIndex_placeholder: "مثال: أ)",
    width_placeholder: "مثال: 6 بوصة",
    minWidth_placeholder: "مثال: 600px",
    maxWidth_placeholder: "مثال: 50٪",
    imageHeight_placeholder: "تلقائي",
    imageWidth_placeholder: "تلقائي",
    itemTitleWidth_placeholder: "على سبيل المثال: 100 بكسل",
    theme: {
      themeName: "موضوع",
      isPanelless: "مظهر السؤال",
      editorPanel: "الخلفية ونصف قطر الزاوية",
      questionPanel: "الخلفية ونصف قطر الزاوية",
      primaryColor: "لون التمييز",
      panelBackgroundTransparency: "عتامة خلفية اللوحة",
      questionBackgroundTransparency: "عتامة خلفية السؤال",
      fontSize: "حجم الخط",
      scale: "مِيزَان",
      cornerRadius: "نصف قطر الزاوية",
      advancedMode: "الوضع المتقدم",
      pageTitle: "خط العنوان",
      pageDescription: "خط الوصف",
      questionTitle: "خط العنوان",
      questionDescription: "خط الوصف",
      editorFont: "الخط",
      backgroundOpacity: "العتامه",
      "--sjs-font-family": "عائلة الخط",
      "--sjs-general-backcolor-dim": "لون الخلفية",
      "--sjs-primary-backcolor": "خلفية لهجة",
      "--sjs-primary-forecolor": "لهجة الصدارة",
      "--sjs-special-red": "رسائل الخطأ",
      "--sjs-shadow-small": "تأثيرات الظل",
      "--sjs-shadow-inner": "تأثيرات الظل",
      "--sjs-border-default": "الوان"
    },
    "header@header": {
      headerView: "منظر",
      logoPosition: "موضع الشعار",
      surveyTitle: "خط عنوان الاستطلاع",
      surveyDescription: "خط وصف الاستطلاع",
      headerTitle: "خط عنوان الاستطلاع",
      headerDescription: "خط وصف الاستطلاع",
      inheritWidthFrom: "عرض منطقة المحتوى",
      textAreaWidth: "عرض النص",
      backgroundColorSwitch: "لون الخلفية",
      backgroundImage: "صورة الخلفية",
      backgroundImageOpacity: "العتامه",
      overlapEnabled: "التداخل",
      logoPositionX: "موضع الشعار",
      titlePositionX: "موضع العنوان",
      descriptionPositionX: "موقف الوصف"
    }
  },
  // Property values
  pv: {
    "true": "صحيح",
    "false": "خطأ",
    file: "الملفات المحلية",
    camera: "كاميرا",
    "file-camera": "الملفات المحلية أو الكاميرا",
    inherit: "يَرث",
    show: "إظهار",
    hide: "إخفاء",
    default: "الإفتراضي",
    initial: "مبدئي",
    random: "عشوائي",
    collapsed: "مقلص",
    expanded: "موسع",
    none: "بلا",
    asc: "تصاعدي",
    desc: "تنازلي",
    indeterminate: "غير محدد",
    selected: "المحدد",
    unselected: "محدد",
    decimal: "عشري",
    currency: "عملة",
    percent: "المائه",
    firstExpanded: "توسيع أول لوح",
    off: "إيقاف",
    list: "قائمة",
    carousel: "دائري",
    tab: "علامات التبويب",
    progressTop: "التقدم بالأعلى",
    progressBottom: "التقدم بالأسف",
    progressTopBottom: "التقدم بالأعلى والأسفل معاً",
    horizontal: "عرضي",
    vertical: "عمودي",
    top: "الأعلى",
    bottom: "الأسفل",
    topBottom: "الاعلى والأسفل",
    both: "الكل",
    left: "يسار",
    right: "يمين",
    center: "مركز",
    leftRight: "اليسار واليمين",
    middle: "وسط",
    color: "لون",
    date: "تاريخ",
    datetime: "التاريخ والوقت",
    "datetime-local": "التاريخ والوقت-محلي",
    email: "البريد الإلكتروني",
    month: "شهر",
    number: "رقم",
    password: "شعار",
    range: "نطاق",
    tel: "هاء.",
    text: "نص",
    time: "الوقت",
    url: "الرابط",
    week: "أسبوع",
    hidden: "مخفي",
    edit: "التعديل",
    display: "العرض",
    contain: "احتوى",
    cover: "غطاء",
    fill: "ملء",
    next: "مقبل",
    last: "آخر",
    onComplete: "عند الإنتهاء",
    onHidden: "عند الإخفال",
    onHiddenContainer: "عند إخفاء الحاوية",
    clearInvisibleValues: {
      none: "أبدا"
    },
    clearIfInvisible: {
      none: "أبدا"
    },
    inputType: {
      color: "لون",
      date: "تاريخ",
      "datetime-local": "التاريخ والوقت",
      email: "البريد الإلكتروني",
      month: "شهر",
      number: "رقم",
      password: "شعار",
      range: "نطاق",
      tel: "رقم الهاتف",
      text: "نص",
      time: "الوقت",
      url: "الرابط",
      week: "أسبوع"
    },
    autocomplete: {
      name: "الاسم الكامل",
      "honorific-prefix": "بادئه",
      "given-name": "الاسم الأول",
      "additional-name": "الاسم الأوسط",
      "family-name": "اسم العائلة",
      "honorific-suffix": "لاحقه",
      nickname: "لقب",
      "organization-title": "المسمى الوظيفي",
      username: "اسم المستخدم",
      "new-password": "كلمة مرور جديدة",
      "current-password": "كلمة المرور الحالية",
      organization: "اسم المنظمة",
      "street-address": "عنوان الشارع بالكامل",
      "address-line1": "سطر العنوان 1",
      "address-line2": "سطر العنوان 2",
      "address-line3": "سطر العنوان 3",
      "address-level4": "عنوان المستوى 4",
      "address-level3": "عنوان المستوى 3",
      "address-level2": "عنوان المستوى 2",
      "address-level1": "عنوان المستوى 1",
      country: "رمز البلد",
      "country-name": "اسم البلد",
      "postal-code": "الرمز البريدي",
      "cc-name": "اسم حامل البطاقة",
      "cc-given-name": "الاسم الأول لحامل البطاقة",
      "cc-additional-name": "الاسم الأوسط لحامل البطاقة",
      "cc-family-name": "الاسم الأخير لحامل البطاقة",
      "cc-number": "رقم بطاقة الائتمان",
      "cc-exp": "تاريخ انتهاء الصلاحية",
      "cc-exp-month": "شهر انتهاء الصلاحية",
      "cc-exp-year": "سنة انتهاء الصلاحية",
      "cc-csc": "رمز أمان البطاقة",
      "cc-type": "نوع بطاقة الائتمان",
      "transaction-currency": "عملة المعاملة",
      "transaction-amount": "مبلغ المعاملة",
      language: "اللغة المفضلة",
      bday: "عيد ميلاد",
      "bday-day": "عيد ميلاد",
      "bday-month": "شهر عيد الميلاد",
      "bday-year": "سنة الميلاد",
      sex: "جنس",
      url: "رابط الموقع",
      photo: "صورة الملف الشخصي",
      tel: "رقم الهاتف",
      "tel-country-code": "رمز البلد للهاتف",
      "tel-national": "رقم الهاتف الوطني",
      "tel-area-code": "رمز المنطقة",
      "tel-local": "رقم الهاتف المحلي",
      "tel-local-prefix": "بادئة الهاتف المحلي",
      "tel-local-suffix": "لاحقة الهاتف المحلي",
      "tel-extension": "تحويلة الهاتف",
      email: "عنوان البريد الإلكتروني",
      impp: "بروتوكول المراسلة الفورية"
    },
    maskType: {
      none: "اي",
      pattern: "رسم",
      numeric: "عددي",
      datetime: "التاريخ والوقت",
      currency: "عملة"
    },
    inputTextAlignment: {
      auto: "تلقائي",
      left: "يسار",
      right: "يمين"
    },
    all: "الكل",
    page: "الصفحة",
    survey: "الإستبيان",
    onNextPage: "عند الإنتقال للصفحة التالية",
    onValueChanged: "إذا تغيرت القيمة",
    onValueChanging: "عند تغيير القيمة",
    questionsOnPageMode: {
      standard: "الهيكل الأصلي",
      singlePage: "إظهار جميع الأسئلة في صفحة واحدة",
      questionPerPage: "إظهار سؤال واحد لكل صفحة"
    },
    noPreview: "بلا عرض",
    showAllQuestions: "المعاينة مع جميع الأسئلة",
    showAnsweredQuestions: "المعاينة مع الأسئلة المجٌابة",
    allQuestions: "عرض جميع الأسئلة",
    answeredQuestions: "إظهار الأسئلة التي تمت الإجابة عليها فقط",
    pages: "الصفحات",
    questions: "الأسئلة",
    requiredQuestions: "الأسئلة المطلوبة",
    correctQuestions: "الإجابات الصحيحة",
    buttons: "الأزرار",
    underInput: "أسفل خانة الإدخال",
    underTitle: "أعلى العنوان",
    onBlur: "عند الطمس",
    onTyping: "عند الكتابة",
    underRow: "تحت الصف",
    underRowSingle: "أسفل الصف ، تكون لوحة واحدة فقط مرئية",
    auto: "تلقائي",
    showNavigationButtons: {
      none: "مخفي"
    },
    timerInfoMode: {
      combined: "كلا"
    },
    addRowButtonLocation: {
      default: "يعتمد على تخطيط المصفوفة"
    },
    panelsState: {
      default: "لا يمكن للمستخدمين توسيع اللوحات أو طيها",
      collapsed: "جميع اللوحات مطوية",
      expanded: "يتم توسيع جميع اللوحات",
      firstExpanded: "توسعت لأول مرة"
    },
    widthMode: {
      static: "ثابت",
      responsive: "متجاوب"
    },
    contentMode: {
      image: "صورة",
      video: "فيديو",
      youtube: "يوتيوب"
    },
    displayMode: {
      buttons: "ازرار",
      dropdown: "القائمة المنسدلة"
    },
    rateColorMode: {
      default: "افتراضي",
      scale: "مِيزَان"
    },
    scaleColorMode: {
      monochrome: "أحادي اللون",
      colored: "الملونه"
    },
    autoGenerate: {
      "true": "ولد",
      "false": "أدخل يدويا"
    },
    rateType: {
      labels: "تسميات",
      stars: "النجوم",
      smileys: "الوجوه الضاحكة"
    },
    state: {
      default: "مقفل"
    },
    showQuestionNumbers: {
      default: "الترقيم التلقائي",
      on: "الترقيم التلقائي",
      onPage: "إعادة تعيين على كل صفحة",
      onpanel: "إعادة تعيين على كل لوحة",
      onPanel: "إعادة تعيين على كل لوحة",
      recursive: "الترقيم المتكرر",
      onSurvey: "المتابعة عبر الاستطلاع",
      off: "لا ترقيم"
    },
    descriptionLocation: {
      underTitle: "تحت عنوان السؤال",
      underInput: "ضمن حقل الإدخال"
    },
    selectToRankAreasLayout: {
      horizontal: "بجانب الخيارات",
      vertical: "الخيارات أعلاه"
    },
    displayStyle: {
      decimal: "عشري",
      currency: "عملة",
      percent: "النسبه المئويه",
      date: "تاريخ"
    },
    totalDisplayStyle: {
      decimal: "عشري",
      currency: "عملة",
      percent: "النسبه المئويه",
      date: "تاريخ"
    },
    rowOrder: {
      initial: "اللغة الأصلية"
    },
    questionOrder: {
      initial: "اللغة الأصلية"
    },
    progressBarLocation: {
      top: "أعلى",
      bottom: "قاع",
      topbottom: "أعلى وأسفل",
      aboveheader: "أعلى الرأس",
      belowheader: "أسفل العنوان",
      off: "مخفي"
    },
    sum: "مجموع",
    count: "عد",
    min: "دقيقه",
    max: "ماكس",
    avg: "متوسط",
    searchMode: {
      contains: "يحتوي",
      startsWith: "يبدأ ب"
    },
    backgroundImageFit: {
      auto: "تلقائي",
      cover: "غطاء",
      contain: "احتوى",
      fill: "مد",
      tile: "بلاط"
    },
    backgroundImageAttachment: {
      fixed: "ثابت",
      scroll: "طومار"
    },
    headerView: {
      basic: "أساسي",
      advanced: "متقدم"
    },
    inheritWidthFrom: {
      survey: "نفس المسح",
      container: "يصلح للحاوية"
    },
    backgroundColorSwitch: {
      none: "اي",
      accentColor: "لون التمييز",
      custom: "تقليد"
    },
    colorPalette: {
      light: "ضوء",
      dark: "داكن"
    },
    isPanelless: {
      "false": "افتراضي",
      "true": "بدون لوحات"
    },
    progressBarInheritWidthFrom: {
      survey: "نفس المسح",
      container: "نفس الحاوية"
    }
  },
  // Operators
  op: {
    empty: "فارغة",
    notempty: "ليست فارغة",
    equal: "تساوي",
    notequal: "لا تساوي",
    contains: "تحتوي",
    notcontains: "لا تحتوي",
    anyof: "أي من",
    allof: "كلاً من",
    greater: "أكبر",
    less: "أقل",
    greaterorequal: "أكبر أو يساوي",
    lessorequal: "أقل أو يساوي",
    and: "و",
    or: "أو"
  },
  // Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    modern: "Modern theme",
    default: "Default theme",
    orange: "Orange theme",
    darkblue: "Darkblue theme",
    darkrose: "Darkrose theme",
    stone: "Stone theme",
    winter: "Winter theme",
    winterstone: "Winter-Stone theme",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Select the page to test it:",
    showInvisibleElements: "إظهار العناصر المخفية",
    hideInvisibleElements: "إخفاء العناصر غير المرئية"
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "بريد إلكتروني",
    expressionvalidator: "عملية حسابية",
    numericvalidator: "رقمية",
    regexvalidator: "تعبير رياضي",
    textvalidator: "النص"
  },
  triggers: {
    completetrigger: "إنهاء الإستبيان",
    setvaluetrigger: "تحديد قيمة",
    copyvaluetrigger: "نسخ قيمة",
    skiptrigger: "الإنتقال إلى سؤال",
    runexpressiontrigger: "تشغيل العملية الحسابية",
    visibletrigger: "تغيير الرؤية (مهمل)"
  },
  peplaceholder: {
    patternmask: {
      pattern: "مثال: +1 (999) -999-99-99"
    },
    datetimemask: {
      pattern: "مثال: مم / يوم / سنة"
    },
    currencymask: {
      prefix: "مثال: $",
      suffix: "مثال: الدولار الأمريكي"
    },
    panelbase: {
      questionTitleWidth: "مثال: 200 بكسل"
    },
    panellayoutcolumn: {
      effectiveWidth: "مثال: 30٪",
      questionTitleWidth: "مثال: 200 بكسل"
    }
  },
  pehelp: {
    panel: {
      name: "معرف لوحة غير مرئي للمستجيبين.",
      description: "اكتب عنوانا فرعيا للوحة.",
      visibleIf: "استخدم أيقونة العصا السحرية لضبط قاعدة شرطية تحدد رؤية اللوحة.",
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للوحة.",
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة.",
      questionTitleLocation: "ينطبق على جميع الأسئلة داخل هذه اللجنة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة الفردية. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      questionTitleWidth: "يعين عرضا متناسقا لعناوين الأسئلة عندما تتم محاذاتها إلى يسار مربعات الأسئلة الخاصة بها. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
      questionErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بجميع الأسئلة داخل اللوحة. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع.",
      questionOrder: "يحافظ على الترتيب الأصلي للأسئلة أو يحولها عشوائيا. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع.",
      page: "تغيير موضع اللوحة إلى نهاية الصفحة المحددة.",
      innerIndent: "يضيف مسافة أو هامش بين محتوى اللوحة والحد الأيسر لمربع اللوحة.",
      startWithNewLine: "قم بإلغاء التحديد لعرض اللوحة في سطر واحد مع السؤال أو اللوحة السابقة. لا ينطبق الإعداد إذا كانت اللوحة هي العنصر الأول في النموذج الخاص بك.",
      state: "اختر من بين: \"موسعة\" - يتم عرض اللوحة بالكامل ويمكن طيها ؛ \"مطوي\" - تعرض اللوحة العنوان والوصف فقط ويمكن توسيعها ؛ \"مغلق\" - يتم عرض اللوحة بالكامل ولا يمكن طيها.",
      width: "يضبط عرض اللوحة بما يتناسب مع عناصر الاستطلاع الأخرى في نفس السطر. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
      showQuestionNumbers: "يعين الأرقام للأسئلة المتداخلة داخل هذه اللوحة.",
      effectiveColSpan: "يحدد عدد الأعمدة التي تمتد إليها هذه اللوحة داخل تخطيط الشبكة.",
      gridLayoutColumns: "يتيح لك هذا الجدول تكوين كل عمود شبكة داخل اللوحة. يقوم تلقائيا بتعيين النسبة المئوية للعرض لكل عمود بناء على الحد الأقصى لعدد العناصر في الصف. لتخصيص تخطيط الشبكة، اضبط هذه القيم يدويا وحدد عرض العنوان لكافة الأسئلة في كل عمود."
    },
    paneldynamic: {
      name: "معرف لوحة غير مرئي للمستجيبين.",
      description: "اكتب عنوانا فرعيا للوحة.",
      visibleIf: "استخدم أيقونة العصا السحرية لضبط قاعدة شرطية تحدد رؤية اللوحة.",
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للوحة.",
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة.",
      templateQuestionTitleLocation: "ينطبق على جميع الأسئلة داخل هذه اللجنة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة الفردية. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      templateQuestionTitleWidth: "تعيين عرض متسق لعناوين الأسئلة عند محاذاتها إلى يسار مربعات الأسئلة الخاصة بها. يقبل قيم CSS (بكسل ، ٪ ، في ، pt ، إلخ).",
      templateErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بسؤال بإدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      errorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بجميع الأسئلة داخل اللوحة. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع.",
      page: "تغيير موضع اللوحة إلى نهاية الصفحة المحددة.",
      innerIndent: "يضيف مسافة أو هامش بين محتوى اللوحة والحد الأيسر لمربع اللوحة.",
      startWithNewLine: "قم بإلغاء التحديد لعرض اللوحة في سطر واحد مع السؤال أو اللوحة السابقة. لا ينطبق الإعداد إذا كانت اللوحة هي العنصر الأول في النموذج الخاص بك.",
      state: "اختر من بين: \"موسعة\" - يتم عرض اللوحة بالكامل ويمكن طيها ؛ \"مطوي\" - تعرض اللوحة العنوان والوصف فقط ويمكن توسيعها ؛ \"مغلق\" - يتم عرض اللوحة بالكامل ولا يمكن طيها.",
      width: "يضبط عرض اللوحة بما يتناسب مع عناصر الاستطلاع الأخرى في نفس السطر. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
      templateTitle: "اكتب قالبا لعناوين اللوحات الديناميكية. استخدم {panelIndex} للموضع العام لللوحة و {visiblePanelIndex} لترتيبها بين اللوحات المرئية. قم بإدراج هذه العناصر النائبة في النموذج لإضافة ترقيم تلقائي.",
      templateTabTitle: "اكتب قالبا لعناوين علامات التبويب. استخدم {panelIndex} للموضع العام للوحة و {visiblePanelIndex} لترتيبها بين اللوحات المرئية. قم بإدراج هذه العناصر النائبة في النموذج لإضافة ترقيم تلقائي.",
      tabTitlePlaceholder: "نص احتياطي لعناوين علامات التبويب يتم تطبيقه عندما لا ينتج نمط عنوان علامة التبويب قيمة ذات معنى.",
      templateVisibleIf: "يتيح لك هذا الإعداد التحكم في رؤية اللوحات الفردية داخل اللوحة الديناميكية. استخدم العنصر النائب \"{panel}\" للإشارة إلى اللوحة الحالية في تعبيرك.",
      titleLocation: "يتم توريث هذا الإعداد تلقائيا من خلال جميع الأسئلة داخل هذه اللوحة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة الفردية. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      descriptionLocation: "يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"تحت عنوان اللوحة\" افتراضيا).",
      newPanelPosition: "يحدد موضع اللوحة المضافة حديثا. بشكل افتراضي ، تتم إضافة لوحات جديدة إلى النهاية. حدد \"التالي\" لإدراج لوحة جديدة بعد اللوحة الحالية.",
      copyDefaultValueFromLastEntry: "يضاعف الإجابات من اللوحة الأخيرة ويعينها إلى اللوحة الديناميكية المضافة التالية.",
      keyName: "قم بالإشارة إلى اسم سؤال لمطالبة المستخدم بتقديم إجابة فريدة لهذا السؤال في كل لوحة."
    },
    copyDefaultValueFromLastEntry: "يكرر الإجابات من الصف الأخير ويعينها إلى الصف الديناميكي المضاف التالي.",
    defaultValueExpression: "يسمح لك هذا الإعداد بتعيين قيمة إجابة افتراضية استنادا إلى تعبير. يمكن أن يتضمن التعبير حسابات أساسية - '{q1_id} + {q2_id}' ، والتعبيرات المنطقية ، مثل '{age} > 60' ، والدوالات: 'iif ()' ، 'today ()' ، 'age ()' ، 'min ()' ، 'max ()' ، 'avg ()' ، إلخ. تعمل القيمة التي يحددها هذا التعبير كقيمة افتراضية أولية يمكن تجاوزها بواسطة الإدخال اليدوي للمستجيب.",
    resetValueIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد متى تتم إعادة تعيين إدخال المستجيب إلى القيمة استنادا إلى \"تعبير القيمة الافتراضية\" أو \"تعيين تعبير القيمة\" أو إلى قيمة \"الإجابة الافتراضية\" (إذا تم تعيين أي منهما).",
    setValueIf: "استخدم رمز العصا السحرية لتعيين قاعدة شرطية تحدد وقت تشغيل \"تعيين تعبير القيمة\" وتعيين القيمة الناتجة ديناميكيا كاستجابة.",
    setValueExpression: "حدد تعبيرا يحدد القيمة المراد تعيينها عند استيفاء الشروط الواردة في قاعدة \"تعيين القيمة إذا\". يمكن أن يتضمن التعبير حسابات أساسية - '{q1_id} + {q2_id}' ، والتعبيرات المنطقية ، مثل '{age} > 60' ، والدوالات: 'iif ()' ، 'today ()' ، 'age ()' ، 'min ()' ، 'max ()' ، 'avg ()' ، إلخ. يمكن تجاوز القيمة التي يحددها هذا التعبير بواسطة الإدخال اليدوي للمستجيب.",
    gridLayoutEnabled: "يسمح لك Survey Creator بضبط العروض المضمنة لعناصر النموذج يدويا للتحكم في التخطيط. إذا لم يؤد ذلك إلى النتيجة المرجوة، فيمكنك تمكين تخطيط الشبكة، الذي يقوم ببناء عناصر التشكيل باستخدام نظام قائم على الأعمدة. لتكوين أعمدة التخطيط، حدد صفحة أو لوحة واستخدم جدول \"إعدادات الأسئلة\" → \"أعمدة الشبكة\". لضبط عدد الأعمدة التي يمتد إليها السؤال، حدده وقم بتعيين القيمة المطلوبة في حقل \"التخطيط\" → \"امتداد العمود\".",
    question: {
      name: "معرف سؤال غير مرئي للمستجيبين.",
      description: "اكتب عنوانا فرعيا للسؤال.",
      visibleIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية السؤال.",
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للسؤال.",
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع تقدم الاستطلاع أو إرساله ما لم يتلق السؤال إجابة.",
      startWithNewLine: "قم بإلغاء التحديد لعرض السؤال في سطر واحد مع السؤال أو اللوحة السابقة. لا ينطبق الإعداد إذا كان السؤال هو العنصر الأول في النموذج الخاص بك.",
      page: "تغيير موضع السؤال إلى نهاية الصفحة المحددة.",
      state: "اختر من بين: \"موسع\" - يتم عرض مربع السؤال بالكامل ويمكن طيه ؛ \"مطوي\" - يعرض مربع الأسئلة العنوان والوصف فقط ويمكن توسيعه ؛ \"مقفل\" - يتم عرض مربع الأسئلة بالكامل ولا يمكن طيه.",
      titleLocation: "يتجاوز قواعد محاذاة العنوان المحددة على مستوى اللوحة أو الصفحة أو الاستطلاع. يطبق خيار \"الوراثة\" أي إعدادات ذات مستوى أعلى (إذا تم تعيينها) أو إعداد على مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      descriptionLocation: "يطبق خيار \"الوراثة\" الإعداد على مستوى الاستطلاع (\"ضمن عنوان السؤال\" افتراضيا).",
      errorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بالسؤال مع إدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      indent: "إضافة مسافة أو هامش بين محتوى السؤال والحد الأيسر لمربع السؤال.",
      width: "يضبط عرض السؤال بما يتناسب مع عناصر الاستطلاع الأخرى في نفس السطر. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
      surveyvalidator: {
        expression: "استخدم أيقونة العصا السحرية لتعيين قاعدة التحقق من صحة السؤال."
      },
      textUpdateMode: "اختر من بين: \"عند فقدان التركيز\" - يتم تحديث القيمة عندما يفقد حقل الإدخال التركيز ؛ \"أثناء الكتابة\" - يتم تحديث القيمة في الوقت الفعلي ، حيث يكتب المستخدمون. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"عند فقدان التركيز\" افتراضيا).",
      url: "يمكنك استخدام أي خدمة ويب كمصدر بيانات لأسئلة الاختيار من متعدد. لتعبئة قيم الاختيار، أدخل عنوان URL للخدمة التي توفر البيانات.",
      searchMode: "عملية مقارنة تستخدم لتصفية القائمة المنسدلة.",
      textWrapEnabled: "ستنشئ النصوص الطويلة في خيارات الاختيار فواصل أسطر تلقائيا لتلائم القائمة المنسدلة. قم بإلغاء تحديد ما إذا كنت تريد قص النصوص.",
      effectiveColSpan: "يحدد عدد الأعمدة التي يمتد إليها هذا السؤال داخل تخطيط الشبكة."
    },
    signaturepad: {
      signatureWidth: "يضبط عرض مساحة التوقيع المعروضة والصورة الناتجة.",
      signatureHeight: "يضبط ارتفاع مساحة التوقيع المعروضة والصورة الناتجة.",
      signatureAutoScaleEnabled: "حدد ما إذا كنت تريد أن تملأ منطقة التوقيع كل المساحة المتوفرة داخل مربع السؤال مع الحفاظ على نسبة العرض إلى الارتفاع الافتراضية 3:2. عند تعيين قيم العرض والارتفاع المخصصة، سيحتفظ الإعداد بنسبة العرض إلى الارتفاع لهذه الأبعاد."
    },
    file: {
      imageHeight: "يضبط ارتفاع الصورة في نتائج الاستطلاع.",
      imageWidth: "يضبط عرض الصورة في نتائج الاستطلاع.",
      allowImagesPreview: "يعرض معاينات الصور المصغرة للملفات التي تم تحميلها عندما يكون ذلك ممكنا. قم بإلغاء تحديد ما إذا كنت تريد إظهار رموز الملفات بدلا من ذلك."
    },
    image: {
      contentMode: "يحدد الخيار \"تلقائي\" تلقائيا الوضع المناسب للعرض - الصورة أو الفيديو أو YouTube - بناء على عنوان URL المصدر المقدم."
    },
    imagepicker: {
      imageHeight: "يتخطى قيم الحد الأدنى والحد الأقصى للارتفاع.",
      imageWidth: "يتخطى قيم الحد الأدنى والحد الأقصى للعرض.",
      choices: "تعمل \"القيمة\" كمعرف عنصر مستخدم في القواعد الشرطية ؛ يتم عرض \"النص\" للمستجيبين.",
      contentMode: "اختر بين \"صورة\" و \"فيديو\" لتعيين وضع المحتوى لمحدد الوسائط. إذا تم تحديد \"صورة\" ، فتأكد من أن جميع الخيارات المتوفرة هي ملفات صور بالتنسيقات التالية: JPEG و GIF و PNG و APNG و SVG و BMP و ICO. وبالمثل ، إذا تم تحديد \"فيديو\" ، فتأكد من أن جميع الخيارات هي روابط مباشرة لملفات الفيديو بالتنسيقات التالية: MP4 و MOV و WMV و FLV و AVI و MKV. يرجى ملاحظة أن روابط YouTube غير مدعومة لخيارات الفيديو."
    },
    text: {
      size: "يغير هذا الإعداد حجم حقل الإدخال فقط ولا يؤثر على عرض مربع السؤال. للحد من طول الإدخال المقبول، انتقل إلى <b>التحقق من الصحة → الحد الأقصى لعدد الأحرف</b>."
    },
    comment: {
      rows: "يضبط عدد الأسطر المعروضة في حقل الإدخال. إذا كان الإدخال يشغل المزيد من الأسطر ، فسيظهر شريط التمرير."
    },
    // survey templates
    survey: {
      readOnly: "حدد ما إذا كنت تريد منع المستجيبين من ملء الاستطلاع الخاص بك.",
      progressBarLocation: "لتعيين موقع شريط التقدم. تعرض القيمة \"تلقائي\" شريط التقدم أعلى رأس الاستطلاع أو أسفله."
    },
    matrixdropdowncolumn: {
      name: "معرف عمود غير مرئي للمستجيبين.",
      isUnique: "عند تمكين عمود، يطلب من المستجيب تقديم إجابة فريدة لكل سؤال داخل هذا العمود.",
      rows: "يضبط عدد الأسطر المعروضة في حقل الإدخال. إذا كان الإدخال يشغل المزيد من الأسطر ، فسيظهر شريط التمرير.",
      visibleIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية العمود.",
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للعمود.",
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة.",
      showInMultipleColumns: "عند تحديده، ينشئ عمود منفرد لكل خيار اختيار.",
      colCount: "يرتب خيارات التحديد في تخطيط متعدد الأعمدة. عند التعيين على 0 ، يتم عرض الخيارات في سطر واحد. عند التعيين إلى -1، يتم توريث القيمة الفعلية من خاصية \"عدد الأعمدة المتداخلة\" للمصفوفة الأصل."
    },
    caseInsensitive: "حدد ما إذا كان يجب التعامل مع الأحرف الكبيرة والصغيرة في التعبير العادي على أنها مكافئة.",
    widthMode: "اختر من بين: \"ثابت\" - يحدد عرضا ثابتا ؛ \"متجاوب\" - يجعل الاستطلاع يشغل العرض الكامل للشاشة ؛ \"تلقائي\" - ينطبق على أي من الاثنين اعتمادا على أنواع الأسئلة المستخدمة.",
    cookieName: "تمنع ملفات تعريف الارتباط المستخدمين من ملء نفس الاستبيان مرتين.",
    logo: "الصق رابط صورة (بلا حدود للحجم) أو انقر فوق رمز المجلد لاستعراض ملف من جهاز الكمبيوتر الخاص بك (حتى 64 كيلوبايت).",
    logoWidth: "يضبط عرض الشعار بوحدات CSS (px ، ٪ ، in ، pt ، إلخ).",
    logoHeight: "يضبط ارتفاع الشعار في وحدات CSS (px ، ٪ ، in ، pt ، إلخ).",
    logoFit: "اختر من بين: \"لا شيء\" - تحافظ الصورة على حجمها الأصلي ؛ \"احتواء\" - يتم تغيير حجم الصورة لتلائم مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"الغلاف\" - تملأ الصورة المربع بأكمله مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"تعبئة\" - يتم تمديد الصورة لملء المربع دون الحفاظ على نسبة العرض إلى الارتفاع.",
    autoAdvanceEnabled: "حدد ما إذا كنت تريد أن يتقدم الاستطلاع تلقائيا إلى الصفحة التالية بمجرد إجابة المستجيب على جميع الأسئلة في الصفحة الحالية. لن يتم تطبيق هذه الميزة إذا كان السؤال الأخير على الصفحة مفتوحا أو يسمح بإجابات متعددة.",
    autoAdvanceAllowComplete: "حدد ما إذا كنت تريد إكمال الاستطلاع تلقائيا بعد أن يجيب المستجيب على جميع الأسئلة.",
    showNavigationButtons: "يضبط رؤية وموقع أزرار التنقل على الصفحة.",
    navigationButtonsLocation: "لتعيين موقع أزرار التنقل على الصفحة.",
    showPreviewBeforeComplete: "قم بتمكين صفحة المعاينة مع جميع الأسئلة أو الإجابة عليها فقط.",
    questionTitleLocation: "ينطبق على جميع الأسئلة داخل الاستطلاع. يمكن تجاوز هذا الإعداد من خلال قواعد محاذاة العنوان في المستويات الأدنى: اللوحة أو الصفحة أو السؤال. سيتجاوز إعداد المستوى الأدنى تلك الموجودة في المستوى الأعلى.",
    requiredMark: "رمز أو سلسلة من الرموز تشير إلى أن الإجابة مطلوبة.",
    questionStartIndex: "أدخل رقما أو حرفا تريد بدء الترقيم به.",
    questionErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بالسؤال مع إدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال.",
    autoFocusFirstQuestion: "حدد ما إذا كنت تريد أن يكون حقل الإدخال الأول في كل صفحة جاهزا لإدخال النص.",
    questionOrder: "يحافظ على الترتيب الأصلي للأسئلة أو يحولها عشوائيا. يكون تأثير هذا الإعداد مرئيا فقط في علامة التبويب معاينة.",
    maxTextLength: "لأسئلة إدخال النص فقط.",
    maxCommentLength: "لتعليقات الأسئلة فقط.",
    commentAreaRows: "لتعيين عدد الأسطر المعروضة في مناطق النص لتعليقات الأسئلة. إذا كان الإدخال يشغل المزيد من الأسطر، فسيظهر شريط التمرير.",
    autoGrowComment: "حدد ما إذا كنت تريد زيادة تعليقات الأسئلة وأسئلة النص الطويل تلقائيا في الارتفاع بناء على طول النص الذي تم إدخاله.",
    allowResizeComment: "لتعليقات الأسئلة وأسئلة النص الطويل فقط.",
    calculatedValues: "تعمل المتغيرات المخصصة كمتغيرات وسيطة أو مساعدة تستخدم في حسابات النماذج. يأخذون مدخلات المستجيبين كقيم مصدر. كل متغير مخصص له اسم فريد وتعبير يعتمد عليه.",
    includeIntoResult: "حدد ما إذا كنت ترغب في حفظ القيمة المحسوبة للتعبير مع نتائج الاستطلاع.",
    triggers: "المشغل هو حدث أو شرط يستند إلى تعبير. بمجرد تقييم التعبير إلى \"صواب\" ، يطلق المشغل إجراء. يمكن أن يكون لمثل هذا الإجراء اختياريا سؤال مستهدف يؤثر عليه.",
    clearInvisibleValues: "اختر ما إذا كنت تريد مسح قيم الأسئلة المخفية بواسطة المنطق الشرطي ومتى تريد القيام بذلك أم لا.",
    textUpdateMode: "اختر من بين: \"عند فقدان التركيز\" - يتم تحديث القيمة عندما يفقد حقل الإدخال التركيز ؛ \"أثناء الكتابة\" - يتم تحديث القيمة في الوقت الفعلي ، حيث يكتب المستخدمون.",
    columns: "تعمل القيمة اليسرى كمعرف عمود مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين.",
    rows: "تعمل القيمة اليسرى كمعرف صف مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين.",
    columnMinWidth: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    rowTitleWidth: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    totalText: "تكون مرئية فقط عندما يحتوي عمود واحد على الأقل على نوع الإجمالي أو تعبير الإجمالي.",
    cellErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بخلية ذات إدخال غير صالح. يطبق خيار \"الوراثة\" الإعداد من خاصية \"محاذاة رسالة الخطأ\".",
    detailErrorLocation: "تعيين موقع رسائل الخطأ للأسئلة المتداخلة في أقسام التفاصيل. يطبق خيار \"الوراثة\" الإعداد من خاصية \"محاذاة رسالة الخطأ\".",
    keyDuplicationError: "عند تمكين الخاصية \"منع الاستجابات المكررة\"، سيتلقى مستجيب يحاول إرسال إدخال مكرر رسالة الخطأ التالية.",
    totalExpression: "يسمح لك بحساب القيم الإجمالية استنادا إلى تعبير. يمكن أن يتضمن التعبير العمليات الحسابية الأساسية ('{q1_id} + {q2_id}') والتعبيرات المنطقية ('{age} > 60') والوظائف ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', إلخ).",
    confirmDelete: "يؤدي إلى تشغيل مطالبة تطلب تأكيد حذف الصف.",
    keyName: "إذا كان العمود المحدد يحتوي على قيم متطابقة ، فإن الاستطلاع يلقي الخطأ \"قيمة مفتاح غير فريدة\".",
    description: "اكتب عنوانا فرعيا.",
    locale: "اختر لغة لبدء إنشاء الاستطلاع. لإضافة ترجمة، قم بالتبديل إلى لغة جديدة وترجمة النص الأصلي هنا أو في علامة التبويب الترجمات.",
    detailPanelMode: "يضبط موقع قسم التفاصيل بالنسبة إلى صف. اختر من بين: \"لا شيء\" - لم تتم إضافة أي توسيع ؛ \"تحت الصف\" - يتم وضع توسيع الصف تحت كل صف من المصفوفة ؛ \"أسفل الصف ، اعرض توسيع صف واحد فقط\" - يتم عرض توسيع أسفل صف واحد فقط ، ويتم طي توسعات الصف المتبقية.",
    imageFit: "اختر من بين: \"لا شيء\" - تحافظ الصورة على حجمها الأصلي ؛ \"احتواء\" - يتم تغيير حجم الصورة لتلائم مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"الغلاف\" - تملأ الصورة المربع بأكمله مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"تعبئة\" - يتم تمديد الصورة لملء المربع دون الحفاظ على نسبة العرض إلى الارتفاع.",
    autoGrow: "يزيد تدريجيا من ارتفاع حقل الإدخال أثناء إدخال البيانات. يتجاوز إعداد \"ارتفاع حقل الإدخال (في الأسطر)\".",
    allowResize: "يظهر مقبض تغيير الحجم (أو المقبض) في الزاوية ويمكن سحبه لتغيير حجم حقل الإدخال.",
    timeLimit: "فاصل زمني بالثواني وبعد ذلك يتقدم الاستطلاع تلقائيا إلى صفحة الشكر.",
    timeLimitPerPage: "فاصل زمني بالثواني يتقدم بعده الاستطلاع تلقائيا إلى الصفحة التالية.",
    validateVisitedEmptyFields: "قم بتمكين هذا الخيار لتشغيل التحقق من الصحة عندما يركز المستخدم على حقل إدخال فارغ ثم يتركه دون إجراء أي تغييرات.",
    page: {
      name: "معرف صفحة غير مرئي للمستجيبين.",
      description: "اكتب عنوانا فرعيا للصفحة.",
      navigationTitle: "تسمية توضيحية معروضة على زر التنقل في شريط التقدم أو جدول المحتويات (TOC). إذا تركت هذا الحقل فارغا، فسيستخدم زر التنقل عنوان الصفحة أو اسم الصفحة. لتمكين شريط التقدم أو جدول المحتويات، انتقل إلى \"استطلاع\" → \"التنقل\".",
      timeLimit: "فاصل زمني بالثواني يتقدم بعده الاستطلاع تلقائيا إلى الصفحة التالية.",
      visibleIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية الصفحة.",
      enableIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للصفحة.",
      requiredIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة.",
      questionTitleLocation: "ينطبق على جميع الأسئلة الواردة في هذه الصفحة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة أو اللوحات الفردية. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      questionTitleWidth: "يعين عرضا متناسقا لعناوين الأسئلة عندما تتم محاذاتها إلى يسار مربعات الأسئلة الخاصة بها. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
      questionErrorLocation: "تعيين موقع رسالة خطأ فيما يتعلق بالسؤال مع إدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أعلى\" افتراضيا).",
      questionOrder: "يحافظ على الترتيب الأصلي للأسئلة أو يحولها عشوائيا. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أصلي\" افتراضيا). يكون تأثير هذا الإعداد مرئيا فقط في علامة التبويب معاينة.",
      showNavigationButtons: "يضبط رؤية أزرار التنقل على الصفحة. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع ، والذي يتم تعيينه افتراضيا على \"مرئي\".",
      gridLayoutColumns: "يتيح لك هذا الجدول تكوين كل عمود شبكة على الصفحة. يقوم تلقائيا بتعيين النسبة المئوية للعرض لكل عمود بناء على الحد الأقصى لعدد العناصر في الصف. لتخصيص تخطيط الشبكة، اضبط هذه القيم يدويا وحدد عرض العنوان لكافة الأسئلة في كل عمود."
    },
    timerLocation: "يضبط موقع المؤقت على الصفحة.",
    panelsState: "اختر من بين: \"مقفل\" - لا يمكن للمستخدمين توسيع اللوحات أو طيها ؛ \"طي الكل\" - تبدأ جميع اللوحات في حالة انهيار ؛ \"توسيع الكل\" - تبدأ جميع اللوحات في حالة موسعة ؛ \"تم توسيعه أولا\" - تم توسيع اللوحة الأولى فقط في البداية.",
    imageLinkName: "أدخل اسم خاصية مشتركة ضمن صفيف الكائنات التي تحتوي على عناوين URL لملفات الصور أو الفيديو التي تريد عرضها في قائمة الاختيارات.",
    choices: "تعمل القيمة اليسرى كمعرف عنصر مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين.",
    title: "اكتب عنوانا سهل الاستخدام لعرضه.",
    waitForUpload: "يضمن عدم إكمال المستخدمين للاستطلاع حتى يتم تحميل الملفات.",
    minWidth: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    maxWidth: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    width: "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ).",
    valueName: "إذا لم تقم بتعيين هذه الخاصية، تخزين الإجابة في حقل محدد بواسطة خاصية الاسم.",
    defaultDisplayValue: "قيمة معروضة في أسئلة HTML وفي العناوين الديناميكية وأوصاف عناصر الاستطلاع عندما تكون قيمة السؤال فارغة.",
    useDisplayValuesInDynamicTexts: "في أنواع الأسئلة ذات التحديد الفردي والمتعدد، يكون لكل خيار اختيار معرف وقيمة عرض. عند تحديده، يعرض هذا الإعداد قيمة عرض بدلا من قيمة معرف في أسئلة HTML والعناوين الديناميكية وأوصاف عناصر الاستطلاع.",
    clearIfInvisible: "اختر ما إذا كنت تريد مسح قيم الأسئلة المخفية بواسطة المنطق الشرطي أم لا ومتى تفعل ذلك. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"عند اكتمال الاستطلاع\" افتراضيا).",
    choicesFromQuestionMode: "اختر من بين: \"الكل\" - نسخ جميع خيارات الاختيار من السؤال المحدد ؛ \"محدد\" - ينسخ ديناميكيا خيارات الاختيار المحددة فقط ؛ \"غير محدد\" - ينسخ ديناميكيا خيارات الاختيار غير المحددة فقط. يتم نسخ الخيارين \"بلا\" و \"أخرى\" افتراضيا إذا تم تمكينهما في السؤال المصدر.",
    choiceValuesFromQuestion: "في أنواع أسئلة التحديد الفردي والمتعدد ، يحتوي كل خيار اختيار على معرف وقيمة عرض. يحدد هذا الإعداد عمود المصفوفة أو سؤال اللوحة الذي يجب أن يوفر معرفات.",
    choiceTextsFromQuestion: "في أنواع أسئلة التحديد الفردي والمتعدد ، يحتوي كل خيار اختيار على معرف وقيمة عرض. يحدد هذا الإعداد عمود المصفوفة أو سؤال اللوحة الذي يجب أن يوفر نصوص العرض.",
    allowCustomChoices: "حدد للسماح للمستجيبين بإضافة خياراتهم الخاصة إذا لم يكن الخيار المطلوب متاحا في القائمة المنسدلة. سيتم تخزين الخيارات المخصصة مؤقتا فقط طوال مدة جلسة المتصفح الحالية.",
    showOtherItem: "عند تحديده، يمكن للمستخدمين تضمين مدخلات إضافية في مربع تعليق منفصل.",
    separateSpecialChoices: "يعرض كل خيار اختيار خاص (\"بلا\" ، \"أخرى\" ، \"تحديد الكل\") على سطر جديد ، حتى عند استخدام تخطيط متعدد الأعمدة.",
    path: "حدد الموقع داخل مجموعة بيانات الخدمة حيث يوجد الصفيف الهدف من الكائنات. اتركه فارغا إذا كان عنوان URL يشير بالفعل إلى المصفوفة.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "أدخل اسم خاصية موحد ضمن صفيف الكائنات الذي يحتوي على القيم التي تريد عرضها في قائمة الاختيارات.",
    allowEmptyResponse: "حدد للسماح للخدمة بإرجاع استجابة أو صفيف فارغ.",
    choicesVisibleIf: "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية كل خيارات الاختيار.",
    rateValues: "تعمل القيمة اليسرى كمعرف عنصر مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين.",
    rating: {
      displayMode: "يختار \"تلقائي\" بين وضعي \"الأزرار\" و \"القائمة المنسدلة\" بناء على العرض المتاح. عندما يكون العرض غير كاف لعرض الأزرار، يعرض السؤال قائمة منسدلة."
    },
    valuePropertyName: "يسمح لك بتوصيل الأسئلة التي تنتج نتائج بتنسيقات مختلفة. عندما يتم ربط هذه الأسئلة معا باستخدام معرف صلة، تخزن هذه الخاصية المشتركة قيم الأسئلة المحددة.",
    searchEnabled: "حدد ما إذا كنت تريد تحديث محتويات القائمة المنسدلة لمطابقة استعلام البحث الذي يكتبه المستخدم في حقل الإدخال.",
    valueTrue: "قيمة يجب حفظها في نتائج الاستطلاع عندما يعطي المستجيبون إجابة إيجابية.",
    valueFalse: "قيمة يجب حفظها في نتائج الاستطلاع عندما يعطي المستجيبون إجابة سلبية.",
    showPreview: "لا يوصى بتعطيل هذا الخيار لأنه يتجاوز صورة المعاينة ويجعل من الصعب على المستخدم فهم ما إذا كان قد تم تحميل الملفات أم لا.",
    needConfirmRemoveFile: "تشغيل مطالبة تطلب تأكيد حذف الملف.",
    selectToRankEnabled: "تمكين لترتيب الخيارات المحددة فقط. سيقوم المستخدمون بسحب العناصر المحددة من قائمة الاختيار لترتيبها داخل منطقة الترتيب.",
    dataList: "أدخل قائمة بالخيارات التي سيتم اقتراحها على المستجيب أثناء الإدخال.",
    inputSize: "يغير الإعداد حجم حقول الإدخال فقط ولا يؤثر على عرض مربع السؤال.",
    itemTitleWidth: "لتعيين عرض متسق لجميع تسميات الأصناف. يقبل قيم CSS (بكسل ، ٪ ، في ، pt ، إلخ).",
    inputTextAlignment: "حدد كيفية محاذاة قيمة الإدخال داخل الحقل. يقوم الإعداد الافتراضي \"تلقائي\" بمحاذاة قيمة الإدخال إلى اليمين إذا تم تطبيق إخفاء العملة أو الرقمية وإلى اليسار إذا لم يكن كذلك.",
    altText: "يعمل كبديل عندما يتعذر عرض الصورة على جهاز المستخدم ولأغراض إمكانية الوصول.",
    rateColorMode: "يحدد لون الرموز التعبيرية المحددة عند تعيين نوع رمز التقييم على \"الوجوه الضاحكة\". اختر بين: \"افتراضي\" - يظهر الرمز التعبيري المحدد بلون الاستطلاع الافتراضي ؛ \"مقياس\" - يرث الرمز التعبيري المحدد اللون من مقياس التصنيف.",
    expression: {
      name: "معرف تعبير غير مرئي للمستجيبين.",
      description: "اكتب عنوانا فرعيا للتعبير.",
      expression: "يمكن أن يتضمن التعبير العمليات الحسابية الأساسية ('{q1_id} + {q2_id}') والشروط ('{age} > 60') والدوال ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', إلخ)."
    },
    storeOthersAsComment: "حدد لتخزين قيمة الخيار \"أخرى\" كخاصية منفصلة في نتائج الاستطلاع.",
    format: "استخدم {0} كعنصر نائب للقيمة الفعلية.",
    acceptedTypes: "يرجى الرجوع إلى وصف السمة [قبول] (https://www.w3schools.com/tags/att_input_accept.asp) للحصول على مزيد من المعلومات.",
    columnColCount: "ينطبق فقط على أنواع خلايا المجموعة الراديوية وخانة الاختيار.",
    autocomplete: "راجع وصف السمة [الإكمال التلقائي] (https://developer.mozilla.org/en-US/docs/Web/HTML/السمات/الإكمال التلقائي) للحصول على مزيد من المعلومات.",
    filePlaceholder: "ينطبق عندما يكون \"نوع المصدر\" هو \"ملفات محلية\" أو عندما تكون الكاميرا غير متوفرة",
    photoPlaceholder: "ينطبق عندما يكون \"نوع المصدر\" هو \"الكاميرا\".",
    fileOrPhotoPlaceholder: "ينطبق عندما يكون \"نوع المصدر\" هو \"الملفات المحلية أو الكاميرا\".",
    colCount: "يرتب خيارات التحديد في تخطيط متعدد الأعمدة. عند التعيين على 0 ، يتم عرض الخيارات في سطر واحد.",
    masksettings: {
      saveMaskedValue: "حدد ما إذا كنت تريد تخزين قيمة السؤال باستخدام قناع مطبق في نتائج الاستطلاع."
    },
    patternmask: {
      pattern: "يمكن أن يحتوي النمط على حرفي السلسلة والعناصر النائبة التالية: \"9\" - للرقم ؛ \"a\" - لحرف كبير أو صغير ؛ '#' - لرقم أو حرف كبير أو صغير. استخدم الشرطة المائلة للخلف '\\' للهروب من حرف."
    },
    datetimemask: {
      pattern: "يمكن أن يحتوي النمط على أحرف فاصلة والعناصر النائبة التالية:<br>'m' - رقم الشهر.<br>\"mm\" - رقم الشهر ، مع صفر بادئ للقيم المكونة من رقم واحد. <br>'d' - يوم من الشهر. <br>\"dd\" - يوم من الشهر ، مع صفر بادئ للقيم المكونة من رقم واحد. <br>\"yy\" - آخر رقمين من السنة. <br>\"yyyy\" - سنة مكونة من أربعة أرقام. <br>\"H\" - ساعات بتنسيق 24 ساعة. <br>\"HH\" - ساعات بتنسيق 24 ساعة ، مع صفر بادئ للقيم المكونة من رقم واحد. <br>\"h\" - ساعات بتنسيق 12 ساعة. <br>\"hh\" - ساعات بتنسيق 12 ساعة ، مع صفر بادئ للقيم المكونة من رقم واحد. <br>\"مم\" - دقائق. <br>'ss' - ثواني. <br>\"TT\" - فترة ساعة 12 ساعة بأحرف كبيرة (صباحا / مساء). <br>\"TT\" - فترة ساعة 12 ساعة بأحرف صغيرة (صباحا / مساء)."
    },
    numericmask: {
      decimalSeparator: "رمز يستخدم لفصل الجزء الكسري عن الجزء الصحيح من الرقم المعروض.",
      thousandsSeparator: "رمز يستخدم لفصل أرقام عدد كبير إلى مجموعات من ثلاثة.",
      precision: "يحد من عدد الأرقام التي سيتم الاحتفاظ بها بعد الفاصلة العشرية لرقم معروض."
    },
    currencymask: {
      prefix: "رمز واحد أو عدة رموز ليتم عرضها قبل القيمة.",
      suffix: "رمز واحد أو عدة رموز ليتم عرضها بعد القيمة."
    },
    theme: {
      isPanelless: "ينطبق هذا الإعداد فقط على الأسئلة خارج اللوحة.",
      primaryColor: "يضبط لونا تكميليا يبرز عناصر الاستطلاع الرئيسية.",
      panelBackgroundTransparency: "يضبط شفافية اللوحات ومربعات الأسئلة المتعلقة بخلفية الاستطلاع.",
      questionBackgroundTransparency: "يضبط شفافية عناصر الإدخال بالنسبة لخلفية الاستطلاع.",
      cornerRadius: "يضبط نصف قطر الزاوية لكل العناصر المستطيلة. قم بتمكين الوضع المتقدم إذا كنت تريد تعيين قيم نصف قطر زاوية فردية لعناصر الإدخال أو اللوحات ومربعات الأسئلة.",
      "--sjs-general-backcolor-dim": "يضبط لون الخلفية الرئيسي للاستطلاع."
    },
    header: {
      inheritWidthFrom: "يقوم خيار \"نفس الحاوية\" بضبط عرض منطقة محتوى الرأس تلقائيا ليلائم عنصر HTML الذي يتم وضع الاستطلاع فيه.",
      textAreaWidth: "عرض ناحية الرأس التي تحتوي على عنوان الاستطلاع ووصفه، مقاسا بالبكسل.",
      overlapEnabled: "عند التمكين، يقوم الجزء العلوي من الاستطلاع بتراكب الجزء السفلي من الرأس.",
      mobileHeight: "عند التعيين إلى 0 ، يتم حساب الارتفاع تلقائيا لاستيعاب محتوى الرأس."
    },
    progressBarInheritWidthFrom: "يقوم خيار \"نفس الحاوية\" بضبط عرض منطقة شريط التقدم تلقائيا ليلائم عنصر HTML الذي يتم وضع الاستطلاع فيه."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "Leave it empty, if it is the same as 'Name'"
    },
    multiSelect: "متعدد الإختيار",
    showLabel: "عرض الملصق",
    swapOrder: "مبادلة ترتيب نعم ولا",
    value: "القيمة",
    tabAlign: "محاذاة علامات التبويب",
    sourceType: "نوع المصدر",
    fitToContainer: "يصلح للحاوية",
    setValueExpression: "تعيين تعبير القيمة",
    description: "الوصف",
    logoFit: "تناسب الشعار",
    pages: "الصفحات",
    questions: "الاسئله",
    triggers: "المحفزات",
    calculatedValues: "القيم المحسوبة",
    surveyId: "معرف الاستطلاع",
    surveyPostId: "معرف وظيفة الاستطلاع",
    surveyShowDataSaving: "يظهر الاستطلاع توفير البيانات",
    questionDescriptionLocation: "موقع وصف السؤال",
    progressBarType: "نوع شريط التقدم",
    showTOC: "إظهار جدول المحتويات",
    tocLocation: "موقع جدول المحتويات",
    questionTitlePattern: "تنسيق عنوان السؤال",
    widthMode: "نمط عٌرض الشاشة",
    showBrandInfo: "عرض معلومات العلامة التجارية",
    useDisplayValuesInDynamicTexts: "إستخدم عرض القيم في العنوان",
    visibleIf: "مرئي عندما",
    defaultValueExpression: "العملية الحسابية الإفتراضية",
    requiredIf: "مطلوب عندما",
    resetValueIf: "إعادة تعيين القيمة إذا",
    setValueIf: "تعيين قيمة إذا",
    validators: "المدققات",
    bindings: "الإرتباطات",
    renderAs: "عرض ك",
    attachOriginalItems: "إرفاق العناصر الأصلية",
    choices: "الإختيارات",
    choicesByUrl: "خيار عن طريق رابط إلكتروني URL",
    currency: "currency",
    cellHint: "تلميح الخلية",
    totalMaximumFractionDigits: "إجمالي الحد الأقصى لأرقام الكسور",
    totalMinimumFractionDigits: "إجمالي الحد الأدنى لأرقام الكسور",
    columns: "الأعمدة",
    detailElements: "عناصر التفاصيل",
    allowAdaptiveActions: "السماح بالإجراءات التكيفية",
    defaultRowValue: "قيمة الصف الإفتراضية",
    detailPanelShowOnAdding: "detailPanelShowOnAdding",
    choicesLazyLoadEnabled: "تمكين التحميل البطيء للاختيارات",
    choicesLazyLoadPageSize: "اختيارات كسول تحميل حجم الصفحة",
    inputFieldComponent: "مكون حقل الإدخال",
    itemComponent: "مكون العنصر",
    min: "أقل",
    max: "أكبر",
    minValueExpression: "minValueExpression",
    maxValueExpression: "maxValueExpression",
    step: "step",
    dataList: "قائمة البيانات",
    inputSize: "inputSize",
    itemTitleWidth: "عرض تسمية العنصر (بالبكسل)",
    inputTextAlignment: "محاذاة قيمة الإدخال",
    elements: "عناصر",
    content: "محتوى",
    navigationTitle: "navigationTitle",
    navigationDescription: "navigationDescription",
    longTap: "نقرة طويلة",
    autoGrow: "تمدد تلقائي",
    allowResize: "السماح بتغيير الحجم",
    acceptCarriageReturn: "قبول إرجاع النقل",
    displayMode: "وضع العرض",
    rateType: "نوع السعر",
    label: "المسمى",
    contentMode: "نمط عرض المحتوى",
    imageFit: "إحتواء الصورة",
    altText: "نص بديل",
    height: "height",
    mobileHeight: "الارتفاع على الهواتف الذكية",
    penColor: "لون القلم",
    backgroundColor: "لون الخلفية",
    templateElements: "عناصر القالب",
    operator: "المشغل",
    isVariable: "متغير",
    runExpression: "تشغيل التعبير",
    showCaption: "showCaption",
    iconName: "iconName",
    iconSize: "iconSize",
    precision: "دقة",
    matrixDragHandleArea: "منطقة مقبض سحب المصفوفة",
    backgroundImage: "صورة الخلفية",
    backgroundImageFit: "ملاءمة صورة الخلفية",
    backgroundImageAttachment: "مرفق صورة الخلفية",
    backgroundOpacity: "عتامة الخلفية",
    selectToRankEnabled: "حدد للترتيب ممكن",
    selectToRankAreasLayout: "حدد لترتيب تخطيط المناطق",
    selectToRankEmptyRankedAreaText: "نص لإظهار ما إذا كانت كل الخيارات محددة",
    selectToRankEmptyUnrankedAreaText: "نص العنصر النائب لمنطقة الترتيب",
    allowCameraAccess: "السماح بالوصول إلى الكاميرا",
    scaleColorMode: "مقياس وضع اللون",
    rateColorMode: "معدل وضع اللون",
    copyDisplayValue: "نسخ قيمة العرض",
    effectiveColSpan: "امتداد العمود",
    progressBarInheritWidthFrom: "عرض منطقة شريط التقدم"
  },
  theme: {
    advancedMode: "الوضع المتقدم",
    pageTitle: "خط عنوان الصفحة",
    questionTitle: "خط عنوان السؤال",
    editorPanel: "عنصر الإدخال",
    lines: "اسطر",
    primaryDefaultColor: "افتراضي",
    primaryDarkColor: "حم",
    primaryLightColor: "المحدد",
    backgroundDimColor: "لون الخلفية",
    cornerRadius: "نصف قطر الزاوية",
    backcolor: "الخلفية الافتراضية",
    hovercolor: "خلفية التحويم",
    borderDecoration: "زخرفة الحدود",
    fontColor: "لون الخط",
    backgroundColor: "لون الخلفية",
    primaryForecolor: "اللون الافتراضي",
    primaryForecolorLight: "لون معطل",
    font: "الخط",
    borderDefault: "اظلم",
    borderLight: "أخف",
    fontFamily: "عائلة الخط",
    fontWeightRegular: "منتظم",
    fontWeightHeavy: "ثقيل",
    fontWeightSemiBold: "شبه غامق",
    fontWeightBold: "جريء",
    color: "لون",
    placeholderColor: "لون العنصر النائب",
    size: "حجم",
    opacity: "العتامه",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "إضافة تأثير الظل",
    boxShadowBlur: "طمس",
    boxShadowSpread: "انتشار",
    boxShadowDrop: "قطرة",
    boxShadowInner: "باطن",
    names: {
      default: "افتراضي",
      sharp: "حاد",
      borderless: "بلا حدود",
      flat: "وطيء",
      plain: "واضح",
      doubleborder: "حدود مزدوجة",
      layered: "الطبقات",
      solid: "صلب",
      threedimensional: ".3D",
      contrast: "تباين"
    },
    colors: {
      teal: "البط البري",
      blue: "أزرق",
      purple: "بنفسجي",
      orchid: "السحلب",
      tulip: "توليب",
      brown: "أسمر",
      green: "أخضر",
      gray: "رمادي"
    }
  },
  creatortheme: {
    "--sjs-special-background": "خلفية السطح",
    "--sjs-primary-background-500": "ابتدائي",
    "--sjs-secondary-background-500": "ثانوي",
    surfaceScale: "سطح",
    userInterfaceBaseUnit: "واجهة المستخدم",
    fontScale: "الخط",
    names: {
      sc2020: "منشئ الاستطلاع 2020",
      "default-light": "ضوء",
      "default-dark": "داكن",
      "default-contrast": "تباين"
    }
  }
};

//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
setupLocale({ localeCode: "ar", strings: arStrings });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.tagbox: "Multi-Select Dropdown" => "قائمة منسدلة متعددة التحديد"
// ed.surveySettings: "Survey Settings" => "إعدادات الاستطلاع"
// ed.surveySettingsTooltip: "Open survey settings" => "افتح إعدادات الاستطلاع"
// ed.themeSurvey: "Themes" => "المواضيع"
// ed.defaultV2Theme: "Default" => "افتراضي"
// ed.modernTheme: "Modern" => "حديث"
// ed.defaultTheme: "Default (legacy)" => "الافتراضي (القديم)"
// ed.showMoreChoices: "Show more" => "استعراض المزيد"
// ed.showLessChoices: "Show less" => "عرض أقل"
// ed.toolboxChoiceCategory: "Choice Questions" => "أسئلة الاختيار"
// ed.toolboxTextCategory: "Text Input Questions" => "أسئلة إدخال النص"
// ed.toolboxContainersCategory: "Containers" => "حاويات"
// ed.toolboxMatrixCategory: "Matrix Questions" => "أسئلة المصفوفة"
// ed.toolboxMiscCategory: "Misc" => "متفرقات"
// ed.themePropertyGridTitle: "Theme Settings" => "إعدادات النسق"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "سلاسل مستعملة فقط"
// ed.themeExportButton: "Export" => "تصدير"
// ed.themeImportButton: "Import" => "استورد"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "يتم نسخ الاختيارات من"
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "الاستطلاع فارغ. اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "قم بسحب وإسقاط صورة هنا أو انقر فوق الزر أدناه واختر صورة لتحميلها"
// ed.imageChooseImage: "Choose Image" => "اختر صورة"
// ed.auto: "auto" => "تلقائي"
// ed.choices_Item: "Item " => "بند "
// lg.addNewItem: "Add New Rule" => "إضافة قاعدة جديدة"
// lg.page_enableName: "Enable (disable) page" => "تمكين (تعطيل) الصفحة"
// lg.column_visibilityName: "Show (hide) column" => "إظهار (إخفاء) العمود"
// lg.column_enableName: "Enable (disable) column" => "تمكين (تعطيل) العمود"
// lg.column_requireName: "Make column required" => "جعل العمود مطلوبا"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "جعل العمود {0} السؤال {1} مرئيا"
// lg.column_enableText: "make column {0} of question {1} enable" => "تمكين {0} عمود السؤال {1}"
// lg.column_requireText: "make column {0} of question {1} required" => "جعل العمود {0} السؤال {1} مطلوبا"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "قيمة سؤال واضحة: {0}"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "القواعد المنطقية غير مكتملة"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "لم تكمل بعض القواعد المنطقية. إذا تركت علامة التبويب الآن ، فستفقد التغييرات. هل ما زلت تريد مغادرة علامة التبويب دون إكمال التغييرات؟"
// lg.uncompletedRule_apply: "Yes" => "نعم"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "لا، أريد إكمال القواعد"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "يمكنك تعيين البيانات بالتنسيق التالي:\nالقيمة1|النص\nقيمة2"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "معاينة الإجابات قبل إرسال الاستطلاع"
// pe.overridingPropertyPrefix: "Set by " => "تم تعيينه بواسطة "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "لا تستخدم الكلمات المحجوزة: \"عنصر\" ، \"اختيار\" ، \"لوحة\" ، \"صف\"."
// pe.listIsEmpty@choices: "No choices have been added yet" => "لم تتم إضافة أي خيارات حتى الآن"
// pe.addNew@choices: "Add a choice" => "إضافة خيار"
// choicesbyurl.valueName: "Get values from the following JSON field" => "الحصول على قيم من حقل JSON التالي"
// pe.and: "and" => "و"
// pe.or: "or" => "أو"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "حدد سؤالا لبدء تكوين الشروط."
// pe.then: "then" => "ثم"
// pe.gotoName: "Question to skip to" => "سؤال للتخطي إليه"
// pe.includeIntoResult: "Include into survey results" => "تضمين نتائج الاستطلاع"
// image.imageHeight: "Image height (in CSS-accepted values)" => "ارتفاع الصورة (بالقيم المقبولة من CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "عرض الصورة (بالقيم المقبولة من CSS)"
// page.timeLimit: "Time limit to finish the page (in seconds)" => "الحد الزمني لإنهاء الصفحة (بالثواني)"
// question.page: "Parent page" => "الصفحة الرئيسية"
// pe.noEntriesText: "Empty entries text" => "نص إدخالات فارغ"
// pe.setValue: "Answer" => "جواب"
// pe.dataFormat: "Image format" => "تنسيق الصورة"
// pe.allowAddRows: "Allow adding rows" => "السماح بإضافة صفوف"
// pe.allowRemoveRows: "Allow removing rows" => "السماح بإزالة الصفوف"
// pe.allowRowReorder: "Allow row drag and drop" => "السماح بسحب الصف وإفلاته"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "لا ينطبق إذا قمت بتحديد عرض الصورة أو ارتفاعها بالضبط."
// pe.minImageWidth: "Minimum image width" => "الحد الأدنى لعرض الصورة"
// pe.maxImageWidth: "Maximum image width" => "الحد الأقصى لعرض الصورة"
// pe.minImageHeight: "Minimum image height" => "الحد الأدنى لارتفاع الصورة"
// pe.maxImageHeight: "Maximum image height" => "الحد الأقصى لارتفاع الصورة"
// surveyvalidator.text: "Error message" => "رسالة خطأ"
// surveyvalidator.expression: "Validation expression" => "تعبير التحقق من الصحة"
// pe.logo: "Logo (URL or base64-encoded string)" => "الشعار (عنوان URL أو سلسلة مشفرة base64)"
// pe.questionsOnPageMode: "Survey structure" => "هيكل المسح"
// pe.maxTextLength: "Maximum answer length (in characters)" => "الحد الأقصى لطول الإجابة (بالأحرف)"
// pe.maxCommentLength: "Maximum comment length (in characters)" => "الحد الأقصى لطول التعليق (بالأحرف)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "توسيع منطقة التعليق تلقائيا إذا لزم الأمر"
// pe.allowResizeComment: "Allow users to resize text areas" => "السماح للمستخدمين بتغيير حجم مناطق النص"
// pe.textUpdateMode: "Update text question value" => "تحديث قيمة السؤال النصي"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "تعيين التركيز على أول إجابة غير صالحة"
// pe.checkErrorsMode: "Run validation" => "تشغيل التحقق من الصحة"
// pe.navigateToUrl: "Navigate to URL" => "انتقل إلى عنوان URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "عنوان URL الديناميكي"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "الترميز لإظهار ما إذا كان المستخدم قد ملأ هذا الاستطلاع بالفعل"
// pe.completedHtml: "Survey Complete page markup" => "ترميز صفحة الاستطلاع الكامل"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "الاستطلاع الديناميكي إكمال ترميز الصفحة"
// pe.loadingHtml: "Markup to show while survey model is loading" => "الترميز لإظهاره أثناء تحميل نموذج الاستطلاع"
// pe.commentText: "Comment area text" => "نص منطقة التعليق"
// pe.autocomplete: "Autocomplete type" => "نوع الإكمال التلقائي"
// pe.labelTrue: "\"True\" label" => "تسمية \"صحيح\""
// pe.labelFalse: "\"False\" label" => "تسمية \"خطأ\""
// pe.displayStyle: "Value display style" => "نمط عرض القيمة"
// pe.format: "Formatted string" => "سلسلة منسقة"
// pe.maximumFractionDigits: "Maximum fractional digits" => "الحد الأقصى للأرقام الكسرية"
// pe.minimumFractionDigits: "Minimum fractional digits" => "الحد الأدنى من الأرقام الكسرية"
// pe.useGrouping: "Display grouping separators" => "عرض فواصل التجميع"
// pe.allowMultiple: "Allow multiple files" => "السماح بملفات متعددة"
// pe.allowImagesPreview: "Preview images" => "معاينة الصور"
// pe.acceptedTypes: "Accepted file types" => "أنواع الملفات المقبولة"
// pe.waitForUpload: "Wait for the upload to complete" => "انتظر حتى يكتمل التحميل"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "تأكيد حذف الملف"
// pe.detailPanelMode: "Detail panel location" => "موقع لوحة التفاصيل"
// pe.minRowCount: "Minimum row count" => "الحد الأدنى لعدد الصفوف"
// pe.maxRowCount: "Maximum row count" => "الحد الأقصى لعدد الصفوف"
// pe.confirmDelete: "Confirm row deletion" => "تأكيد حذف الصف"
// pe.confirmDeleteText: "Confirmation message" => "رسالة تأكيد"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "تأكيد حذف اللوحة"
// pe.panelCount: "Initial panel count" => "عدد اللوحات الأولي"
// pe.minPanelCount: "Minimum panel count" => "الحد الأدنى لعدد اللوحات"
// pe.maxPanelCount: "Maximum panel count" => "الحد الأقصى لعدد اللوحات"
// pe.panelsState: "Inner panel expand state" => "حالة توسيع اللوحة الداخلية"
// pe.templateDescription: "Description template" => "قالب الوصف"
// pe.templateTitle: "Title template" => "قالب العنوان"
// pe.prevPanelText: "Previous Panel button tooltip" => "تلميح أداة زر اللوحة السابق"
// pe.nextPanelText: "Next Panel button tooltip" => "تلميح أداة زر اللوحة التالية"
// pe.showRangeInProgress: "Show progress bar" => "إظهار شريط التقدم"
// pe.templateQuestionTitleLocation: "Question title location" => "موقع عنوان السؤال"
// pe.removePanelButtonLocation: "Remove Panel button location" => "إزالة موقع زر اللوحة"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "إخفاء السؤال إذا لم تكن هناك صفوف"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "إخفاء الأعمدة في حالة عدم وجود صفوف"
// pe.rateValues: "Custom rate values" => "قيم الأسعار المخصصة"
// pe.rateCount: "Rate count" => "عدد الأسعار"
// pe.autoGenerate: "How to specify rate values?" => "كيفية تحديد قيم المعدل؟"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "إخفاء السؤال إذا لم يكن يحتوي على خيارات"
// pe.hideNumber: "Hide question number" => "إخفاء رقم السؤال"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "الحد الأدنى للعرض (بالقيم المقبولة في CSS)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "الحد الأقصى للعرض (بالقيم المقبولة من CSS)"
// pe.width: "Width (in CSS-accepted values)" => "العرض (بالقيم المقبولة من CSS)"
// pe.showHeader: "Show column headers" => "إظهار رؤوس الأعمدة"
// pe.horizontalScroll: "Show horizontal scrollbar" => "إظهار شريط التمرير الأفقي"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "الحد الأدنى لعرض العمود (بالقيم المقبولة من CSS)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "عرض رأس الصف (بالقيم المقبولة من CSS)"
// pe.valueTrue: "\"True\" value" => "القيمة \"الحقيقية\""
// pe.valueFalse: "\"False\" value" => "قيمة \"خاطئة\""
// pe.minErrorText: "\"Value is below minimum\" error message" => "رسالة الخطأ \"القيمة أقل من الحد الأدنى\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "رسالة الخطأ \"القيمة تتجاوز الحد الأقصى\""
// pe.otherErrorText: "\"Empty comment\" error message" => "رسالة الخطأ \"تعليق فارغ\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "رسالة الخطأ \"قيمة مفتاح غير فريدة\""
// pe.minSelectedChoices: "Minimum selected choices" => "الحد الأدنى من الخيارات المحددة"
// pe.maxSelectedChoices: "Maximum selected choices" => "الحد الأقصى للخيارات المحددة"
// pe.allowClear: "Show the Clear button" => "إظهار الزر مسح"
// pe.showNumber: "Show panel number" => "إظهار رقم اللوحة"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "عرض الشعار (بالقيم المقبولة من CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "ارتفاع الشعار (بالقيم المقبولة من CSS)"
// pe.readOnly: "Read-only" => "للقراءة فقط"
// pe.enableIf: "Editable if" => "قابل للتحرير إذا"
// pe.noRowsText: "\"No rows\" message" => "رسالة \"بلا صفوف\""
// pe.size: "Input field size (in characters)" => "حجم حقل الإدخال (بالأحرف)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "خيارات خاصة منفصلة (لا شيء، أخرى، تحديد الكل)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "نسخ الاختيارات من السؤال التالي"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "ما هي الخيارات التي تريد نسخها؟"
// pe.showCommentArea: "Show the comment area" => "إظهار منطقة التعليق"
// pe.commentPlaceholder: "Comment area placeholder" => "العنصر النائب لمنطقة التعليق"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "عرض أوصاف المعدل كقيم قصوى"
// pe.rowOrder: "Row order" => "ترتيب الصفوف"
// pe.columnsLayout: "Column layout" => "تخطيط العمود"
// pe.columnColCount: "Nested column count" => "عدد الأعمدة المتداخلة"
// pe.state: "Panel expand state" => "حالة توسيع اللوحة"
// pe.correctAnswer: "Correct Answer" => "الإجابة الصحيحة"
// pe.defaultPanelValue: "Default Values" => "القيم الافتراضية"
// pe.cells: "Cell Texts" => "نصوص الخلية"
// pe.keyName: "Key column" => "عمود المفتاح"
// itemvalue.text: "Alt text" => "نص بديل"
// tabs.expression: "Expression" => "تعبير"
// pe.choicesVisibleIf: "Choices are visible if" => "تكون الخيارات مرئية إذا"
// pe.choicesEnableIf: "Choices are selectable if" => "يمكن تحديد الخيارات إذا"
// pe.columnsEnableIf: "Columns are visible if" => "تكون الأعمدة مرئية إذا"
// pe.rowsEnableIf: "Rows are visible if" => "تكون الصفوف مرئية إذا"
// pe.indent: "Add indents" => "إضافة مسافات بادئة"
// panel.indent: "Add outer indents" => "إضافة مسافات بادئة خارجية"
// pe.innerIndent: "Add inner indents" => "إضافة مسافات بادئة داخلية"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "اكتب التعبير هنا..."
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "مسح القيمة إذا أصبح السؤال مخفيا"
// pe.valuePropertyName: "Value property name" => "اسم خاصية القيمة"
// pe.searchEnabled: "Enable search" => "تمكين البحث"
// pe.hideSelectedItems: "Hide selected items" => "إخفاء العناصر المحددة"
// pe.closeOnSelect: "Close the dropdown after selection" => "أغلق القائمة المنسدلة بعد التحديد"
// pe.signatureWidth: "Signature width" => "عرض التوقيع"
// pe.signatureHeight: "Signature height" => "ارتفاع التوقيع"
// pe.verticalAlign: "Vertical alignment" => "المحاذاة الرأسية"
// pe.alternateRows: "Alternate rows" => "صفوف بديلة"
// pe.columnsVisibleIf: "Columns are visible if" => "تكون الأعمدة مرئية إذا"
// pe.rowsVisibleIf: "Rows are visible if" => "تكون الصفوف مرئية إذا"
// pe.otherPlaceholder: "Comment area placeholder" => "العنصر النائب لمنطقة التعليق"
// pe.rateType: "Rate type" => "نوع السعر"
// pv.true: "true" => "صحيح"
// pv.false: "false" => "خطأ"
// pv.decimal: "decimal" => "عشري"
// pv.currency: "currency" => "عملة"
// pv.percent: "percent" => "المائه"
// pv.onpanel: "Start on each panel" => "ابدأ في كل لوحة"
// pv.tab: "Tabs" => "علامات التبويب"
// pv.color: "color" => "لون"
// pv.date: "date" => "تاريخ"
// pv.datetime: "datetime" => "التاريخ والوقت"
// pv.datetime-local: "datetime-local" => "التاريخ والوقت-محلي"
// pv.email: "email" => "البريد الإلكتروني"
// pv.month: "month" => "شهر"
// pv.number: "number" => "رقم"
// pv.password: "password" => "شعار"
// pv.range: "range" => "نطاق"
// pv.tel: "tel" => "هاء."
// pv.text: "text" => "نص"
// pv.time: "time" => "الوقت"
// pv.url: "url" => "الرابط"
// pv.week: "week" => "أسبوع"
// clearInvisibleValues.none: "Never" => "أبدا"
// inputType.color: "Color" => "لون"
// inputType.date: "Date" => "تاريخ"
// inputType.datetime-local: "Date and Time" => "التاريخ والوقت"
// inputType.email: "Email" => "البريد الإلكتروني"
// inputType.month: "Month" => "شهر"
// inputType.number: "Number" => "رقم"
// inputType.password: "Password" => "شعار"
// inputType.range: "Range" => "نطاق"
// inputType.tel: "Phone Number" => "رقم الهاتف"
// inputType.text: "Text" => "نص"
// inputType.time: "Time" => "الوقت"
// inputType.url: "URL" => "الرابط"
// inputType.week: "Week" => "أسبوع"
// pv.underRow: "Under the row" => "تحت الصف"
// pv.underRowSingle: "Under the row, only one panel is visible" => "أسفل الصف ، تكون لوحة واحدة فقط مرئية"
// showNavigationButtons.none: "Hidden" => "مخفي"
// showProgressBar.off: "Hidden" => "مخفي"
// showTimerPanel.none: "Hidden" => "مخفي"
// showTimerPanelMode.all: "Both" => "كلا"
// detailPanelMode.none: "Hidden" => "مخفي"
// addRowButtonLocation.default: "Depends on matrix layout" => "يعتمد على تخطيط المصفوفة"
// panelsState.default: "Users cannot expand or collapse panels" => "لا يمكن للمستخدمين توسيع اللوحات أو طيها"
// panelsState.collapsed: "All panels are collapsed" => "جميع اللوحات مطوية"
// panelsState.expanded: "All panels are expanded" => "يتم توسيع جميع اللوحات"
// widthMode.auto: "Auto" => "تلقائي"
// widthMode.static: "Static" => "ثابت"
// widthMode.responsive: "Responsive" => "متجاوب"
// imageFit.none: "None" => "اي"
// imageFit.contain: "Contain" => "احتوى"
// imageFit.cover: "Cover" => "غطاء"
// imageFit.fill: "Fill" => "ملء"
// contentMode.auto: "Auto" => "تلقائي"
// contentMode.image: "Image" => "صورة"
// contentMode.video: "Video" => "فيديو"
// contentMode.youtube: "YouTube" => "يوتيوب"
// displayMode.auto: "Auto" => "تلقائي"
// displayMode.buttons: "Buttons" => "ازرار"
// displayMode.dropdown: "Dropdown" => "القائمة المنسدلة"
// rateColorMode.default: "Default" => "افتراضي"
// autoGenerate.true: "Generate" => "ولد"
// autoGenerate.false: "Enter manually" => "أدخل يدويا"
// rateType.labels: "Labels" => "تسميات"
// rateType.stars: "Stars" => "النجوم"
// rateType.smileys: "Smileys" => "الوجوه الضاحكة"
// op.and: "and" => "و"
// op.or: "or" => "أو"
// ts.hideInvisibleElements: "Hide invisible elements" => "إخفاء العناصر غير المرئية"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "تمنع ملفات تعريف الارتباط المستخدمين من ملء نفس الاستبيان مرتين."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "تغيير حجم المنطقة المرئية لحقل الإدخال. الرجاء استخدام إعداد <b>التحقق من الصحة → الحد الأقصى للطول</b> للحد من طول الإدخال."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "استخدم {0} كعنصر نائب للقيمة الفعلية."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "تكون مرئية فقط عندما يحتوي عمود واحد على الأقل على نوع الإجمالي أو تعبير الإجمالي."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "يرجى الرجوع إلى وصف السمة [قبول] (https://www.w3schools.com/tags/att_input_accept.asp) للحصول على مزيد من المعلومات."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "ينطبق فقط على أنواع خلايا المجموعة الراديوية وخانة الاختيار."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "راجع وصف السمة [الإكمال التلقائي] (https://developer.mozilla.org/en-US/docs/Web/HTML/السمات/الإكمال التلقائي) للحصول على مزيد من المعلومات."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "إذا لم تقم بتعيين هذه الخاصية، تخزين الإجابة في حقل محدد بواسطة خاصية الاسم."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "إذا كان العمود المحدد يحتوي على قيم متطابقة ، فإن الاستطلاع يلقي الخطأ \"قيمة مفتاح غير فريدة\"."
// p.tabAlign: "Tab alignment" => "محاذاة علامات التبويب"
// p.questions: "Questions" => "الاسئله"
// p.surveyId: "Survey id" => "معرف الاستطلاع"
// p.surveyPostId: "Survey post id" => "معرف وظيفة الاستطلاع"
// p.surveyShowDataSaving: "Survey show data saving" => "يظهر الاستطلاع توفير البيانات"
// p.showTOC: "Show TOC" => "إظهار جدول المحتويات"
// p.tocLocation: "Toc location" => "موقع جدول المحتويات"
// p.showBrandInfo: "Show brand info" => "عرض معلومات العلامة التجارية"
// p.renderAs: "Render as" => "عرض ك"
// p.attachOriginalItems: "Attach original items" => "إرفاق العناصر الأصلية"
// p.cellHint: "Cell hint" => "تلميح الخلية"
// p.isUnique: "Is unique" => "فريد من نوعه"
// p.showInMultipleColumns: "Show in multiple columns" => "إظهار في أعمدة متعددة"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "إجمالي الحد الأقصى لأرقام الكسور"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "إجمالي الحد الأدنى لأرقام الكسور"
// p.detailElements: "Detail elements" => "عناصر التفاصيل"
// p.allowAdaptiveActions: "Allow adaptive actions" => "السماح بالإجراءات التكيفية"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "تمكين التحميل البطيء للاختيارات"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "اختيارات كسول تحميل حجم الصفحة"
// p.inputFieldComponent: "Input field component" => "مكون حقل الإدخال"
// p.itemComponent: "Item component" => "مكون العنصر"
// p.elements: "Elements" => "عناصر"
// p.content: "Content" => "محتوى"
// p.longTap: "Long tap" => "نقرة طويلة"
// p.allowResize: "Allow resizing" => "السماح بتغيير الحجم"
// p.acceptCarriageReturn: "Accept carriage return" => "قبول إرجاع النقل"
// p.displayMode: "Display mode" => "وضع العرض"
// p.rateType: "Rate type" => "نوع السعر"
// p.altText: "Alt text" => "نص بديل"
// p.templateElements: "Template elements" => "عناصر القالب"
// p.operator: "Operator" => "المشغل"
// p.isVariable: "Is variable" => "متغير"
// p.runExpression: "Run expression" => "تشغيل التعبير"
// p.precision: "Precision" => "دقة"
// p.matrixDragHandleArea: "Matrix drag handle area" => "منطقة مقبض سحب المصفوفة"
// p.backgroundImage: "Background image" => "صورة الخلفية"
// p.backgroundImageFit: "Background image fit" => "ملاءمة صورة الخلفية"
// p.backgroundImageAttachment: "Background image attachment" => "مرفق صورة الخلفية"
// p.backgroundOpacity: "Background opacity" => "عتامة الخلفية"
// p.selectToRankEnabled: "Select to rank enabled" => "حدد للترتيب ممكن"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "حدد لترتيب تخطيط المناطق"
// p.allowCameraAccess: "Allow camera access" => "السماح بالوصول إلى الكاميرا"
// p.scaleColorMode: "Scale color mode" => "مقياس وضع اللون"
// p.rateColorMode: "Rate color mode" => "معدل وضع اللون"
// p.templateTabTitle: "Template tab title" => "عنوان علامة تبويب القالب"
// p.templateVisibleIf: "Template visible if" => "القالب مرئي إذا"
// p.copyDisplayValue: "Copy display value" => "نسخ قيمة العرض"
// theme.--background: "Background color" => "لون الخلفية"
// theme.--background-dim-light: "Background dim light color" => "خلفية لون فاتح قاتم"
// theme.--primary-foreground: "Primary foreground color" => "لون المقدمة الأساسي"
// theme.--foreground: "Foreground color" => "لون المقدمة"
// theme.--base-unit: "Base unit" => "وحدة القاعدة"
// theme.groupAdvanced: "Advanced" => "متقدم"
// theme.themeName: "Theme" => "موضوع"
// theme.isPanellessss: "Question appearance" => "مظهر السؤال"
// theme.isPanellessPanels: "Default" => "افتراضي"
// theme.isPanellessLightweight: "Without Panels" => "بدون لوحات"
// theme.themePaletteLight: "Light" => "ضوء"
// theme.themePaletteDark: "Dark" => "داكن"
// theme.primaryColor: "Accent color" => "لون التمييز"
// theme.primaryDefaultColor: "Default" => "افتراضي"
// theme.primaryDarkColor: "Hover" => "حم"
// theme.primaryLightColor: "Selected" => "المحدد"
// theme.backgroundDimColor: "Background color" => "لون الخلفية"
// theme.backgroundImage: "Background image" => "صورة الخلفية"
// theme.backgroundImageFitAuto: "Auto" => "تلقائي"
// theme.backgroundImageFitCover: "Cover" => "غطاء"
// theme.backgroundImageFitContain: "Contain" => "احتوى"
// theme.backgroundOpacity: "Opacity" => "العتامه"
// theme.backgroundImageAttachmentFixed: "Fixed" => "ثابت"
// theme.backgroundImageAttachmentScroll: "Scroll" => "طومار"
// theme.panelBackgroundTransparency: "Panel background opacity" => "عتامة خلفية اللوحة"
// theme.questionBackgroundTransparency: "Question background opacity" => "عتامة خلفية السؤال"
// theme.questionPanel: "Panel background and corner radius" => "خلفية اللوحة ونصف قطر الزاوية"
// theme.questionTitle: "Question title font" => "خط عنوان السؤال"
// theme.questionDescription: "Question description font" => "خط وصف السؤال"
// theme.editorPanel: "Input element" => "عنصر الإدخال"
// theme.editorFont: "Input element font" => "خط عنصر الإدخال"
// theme.backcolor: "Default background" => "الخلفية الافتراضية"
// theme.hovercolor: "Hover background" => "خلفية التحويم"
// theme.borderDecoration: "Border decoration" => "زخرفة الحدود"
// theme.accentBackground: "Accent background" => "خلفية لهجة"
// theme.accentForeground: "Accent foreground" => "لهجة الصدارة"
// theme.primaryForecolor: "Default color" => "اللون الافتراضي"
// theme.primaryForecolorLight: "Disabled color" => "لون معطل"
// theme.linesColors: "Minor line colors" => "ألوان الخطوط الثانوية"
// theme.borderDefault: "Darker" => "اظلم"
// theme.borderLight: "Lighter" => "أخف"
// theme.fontFamily: "Font family" => "عائلة الخط"
// theme.fontSize: "Font size" => "حجم الخط"
// theme.color: "Color" => "لون"
// theme.size: "Size" => "حجم"
// theme.fontWeightRegular: "Regular" => "منتظم"
// theme.fontWeightHeavy: "Heavy" => "ثقيل"
// theme.fontWeightSemiBold: "Semi-bold" => "شبه غامق"
// theme.fontWeightBold: "Bold" => "جريء"
// theme.scale: "Scale" => "مِيزَان"
// theme.cornerRadius: "Corner radius" => "نصف قطر الزاوية"
// theme.surveyTitleFont: "Survey title font" => "خط عنوان الاستطلاع"
// theme.pageTitle: "Page title font" => "خط عنوان الصفحة"
// theme.pageDescription: "Page description font" => "خط وصف الصفحة"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "إضافة تأثير الظل"
// theme.opacity: "Opacity" => "العتامه"
// theme.boxShadowBlur: "Blur" => "طمس"
// theme.boxShadowSpread: "Spread" => "انتشار"
// theme.boxShadowDrop: "Drop" => "قطرة"
// theme.boxShadowInner: "Inner" => "باطن"
// theme.questionShadow: "Shadow effects" => "تأثيرات الظل"
// theme.editorShadow: "Input element shadow effects" => "تأثيرات ظل عنصر الإدخال"
// names.default: "Default" => "افتراضي"
// names.contrast: "Contrast" => "تباين"
// names.plain: "Plain" => "واضح"
// names.simple: "Simple" => "بسيط"
// names.blank: "Blank" => "خلبي"
// names.double: "Double" => "مزدوج"
// names.bulk: "Bulk" => "جرم"
// names.pseudo-3d: "Pseudo 3D" => "الزائفة 3D"
// names.playful: "Playful" => "لعوب"
// names.ultra: "Ultra" => "الترا"
// colors.teal: "Teal" => "البط البري"
// colors.blue: "Blue" => "أزرق"
// colors.purple: "Purple" => "بنفسجي"
// colors.orchid: "Orchid" => "السحلب"
// colors.tulip: "Tulip" => "توليب"
// colors.brown: "Brown" => "أسمر"
// colors.green: "Green" => "أخضر"
// names.sharp: "Sharp" => "حاد"
// names.borderless: "Borderless" => "بلا حدود"
// names.flat: "Flat" => "وطيء"
// names.doubleborder: "Double Border" => "حدود مزدوجة"
// names.layered: "Layered" => "الطبقات"
// names.solid: "Solid" => "صلب"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "هل أنت متأكد من أنك ترغب في حذف جميع السلاسل لهذه اللغة؟"
// ed.themeResetButton: "Reset theme settings to default" => "إعادة تعيين إعدادات النسق إلى الوضع الافتراضي"
// theme.placeholderColor: "Placeholder color" => "لون العنصر النائب"
// ed.themeSettings: "Theme Settings" => "إعدادات النسق"
// ed.themeSettingsTooltip: "Open theme settings" => "فتح إعدادات النسق"
// pe.resetToDefaultCaption: "Reset" => "اعاده تعيين"
// pv.file: "Local files" => "الملفات المحلية"
// pv.camera: "Camera" => "كاميرا"
// pv.file-camera: "Local files or camera" => "الملفات المحلية أو الكاميرا"
// ed.translateUsigAI: "Auto-translate All" => "ترجمة تلقائية للكل"
// ed.translationDialogTitle: "Untranslated strings" => "النصوص غير المترجمة"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "الرجاء إدخال {0} العناصر على الأقل"
// pe.markRequired: "Mark as required" => "وضع علامة كمطلوب"
// pe.removeRequiredMark: "Remove the required mark" => "إزالة العلامة المطلوبة"
// lg.question_resetValueName: "Reset question value" => "إعادة تعيين قيمة السؤال"
// lg.column_resetValue: "Reset column value" => "إعادة تعيين قيمة العمود"
// p.resetValueIf: "Reset value if" => "إعادة تعيين القيمة إذا"

// lg.question_setValueName: "Set question value" => "تعيين قيمة السؤال"
// lg.column_resetValueName: "Reset column value" => "إعادة تعيين قيمة العمود"
// lg.column_setValueName: "Set column value" => "تعيين قيمة العمود"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " تعبير سيتم تعيين نتيجته للسؤال الهدف."
// survey.title: "Title" => "عنوان"
// page.title: "Title" => "عنوان"
// p.setValueIf: "Set value if" => "تعيين قيمة إذا"
// theme.header: "Header" => "راس"
// theme.backgroundImageFitFill: "Stretch" => "مد"
// theme.backgroundImageFitTile: "Tile" => "بلاط"
// theme.headerView: "View" => "منظر"
// theme.headerViewBasic: "Basic" => "أساسي"
// theme.headerViewAdvanced: "Advanced" => "متقدم"
// theme.headerInheritWidthFrom: "Content area width" => "عرض منطقة المحتوى"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "نفس المسح"
// theme.headerInheritWidthFromPage: "Fit to page" => "ملائمة للصفحة"
// theme.headerTextAreaWidth: "Text width" => "عرض النص"
// theme.headerBackgroundColorSwitch: "Background color" => "لون الخلفية"
// theme.headerBackgroundColorNone: "None" => "اي"
// theme.headerBackgroundColorAccentColor: "Accent color" => "لون التمييز"
// theme.headerBackgroundColorCustom: "Custom" => "تقليد"
// theme.horizontalAlignmentLeft: "Left" => "يسار"
// theme.horizontalAlignmentCenter: "Center" => "مركز"
// theme.horizontalAlignmentRight: "Right" => "يمين"
// theme.verticalAlignmentTop: "Top" => "أعلى"
// theme.verticalAlignmentMiddle: "Middle" => "وسط"
// theme.verticalAlignmentBottom: "Bottom" => "قاع"
// lg.question_resetValueText: "reset value for question: {0}" => "إعادة تعيين قيمة السؤال: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "تعيين قيمة: {1} السؤال: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "إعادة تعيين قيمة الخلية للعمود: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "تعيين قيمة الخلية: {1} إلى العمود: {0}"
// ed.surveyJsonExportButton: "Export" => "تصدير"
// ed.surveyJsonImportButton: "Import" => "استورد"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "نسخ إلى الحافظة"
// pe.filePlaceholder: "File placeholder text" => "نص العنصر النائب للملف"
// pe.photoPlaceholder: "Photo placeholder text" => "نص العنصر النائب للصورة"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "نص العنصر النائب للملف أو الصورة"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "ينطبق عندما يكون \"نوع المصدر\" هو \"ملفات محلية\" أو عندما تكون الكاميرا غير متوفرة"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "ينطبق عندما يكون \"نوع المصدر\" هو \"الكاميرا\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "ينطبق عندما يكون \"نوع المصدر\" هو \"الملفات المحلية أو الكاميرا\"."
// theme.background: "Background" => "خلفية"
// theme.appearance: "Appearance" => "مظهر"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "هل تريد حقا إعادة تعيين السمة؟ ستفقد جميع تخصيصاتك."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "نعم ، إعادة تعيين السمة"
// theme.headerDescriptionForecolor: "Description forecolor" => "وصف التلوين الأمامي"
// theme.headerInheritWidthFromContainer: "Fit to container" => "يصلح للحاوية"
// signaturepad.showPlaceholder: "Show the placeholder" => "إظهار العنصر النائب"
// signaturepad.placeholder: "Placeholder text" => "نص العنصر النائب"
// theme.surveyDescriptionFont: "Survey description font" => "خط وصف الاستطلاع"
// ed.prevFocus: "Focus previous" => "التركيز السابق"
// ed.nextFocus: "Focus next" => "التركيز التالي"
// ed.saveTheme: "Save Theme" => "حفظ السمة"
// ed.saveThemeTooltip: "Save Theme" => "حفظ السمة"
// lg.page_requireName: "Make page required" => "اجعل الصفحة مطلوبة"
// lg.panel_requireName: "Make page required" => "اجعل الصفحة مطلوبة"
// signaturepad.signatureWidth: "Signature area width" => "عرض منطقة التوقيع"
// signaturepad.signatureHeight: "Signature area height" => "ارتفاع منطقة التوقيع"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "تغيير حجم منطقة التوقيع تلقائيا"
// signaturepad.penMinWidth: "Minimum pen width" => "الحد الأدنى لعرض القلم"
// signaturepad.penMaxWidth: "Maximum pen width" => "الحد الأقصى لعرض القلم"
// theme.logoPosition: "Logo position" => "موضع الشعار"
// theme.headerTitlePosition: "Title position" => "موضع العنوان"
// theme.headerDescriptionPosition: "Description position" => "موقف الوصف"
// ed.propertyGridNoResultsFound: "No results found" => "لم يتم العثور على نتائج"
// pv.leftRight: "Left and right" => "اليسار واليمين"
// p.sourceType: "Source type" => "نوع المصدر"
// p.fitToContainer: "Fit to container" => "يصلح للحاوية"
// p.setValueExpression: "Set value expression" => "تعيين تعبير القيمة"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "يتم تحميل الاختيارات من خدمة ويب."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "انتقل إلى الإعدادات"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "معاينة خيارات الاختيار المحملة"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "منع تكرار الاستجابات في الصفوف"
// theme.advancedMode: "Advanced mode" => "الوضع المتقدم"
// theme.backgroundCornerRadius: "Background and corner radius" => "الخلفية ونصف قطر الزاوية"
// theme.colorsTitle: "Colors" => "الوان"
// theme.font: "Font" => "الخط"
// theme.lines: "Lines" => "اسطر"
// theme.titleFont: "Title font" => "خط العنوان"
// theme.descriptionFont: "Description font" => "خط الوصف"
// theme.shadow: "Shadow effects" => "تأثيرات الظل"
// ed.translateUsigAIFrom: "Translate from: " => "ترجمة من: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "السماح بخيار رفض الإجابة"
// pe.showDontKnowItem: "Allow the Don't Know option" => "السماح بالخيار \"لا أعرف\""
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "السماح بخيار رفض الإجابة"
// pe.showDontKnowItem: "Allow the Don't Know option" => "السماح بالخيار \"لا أعرف\""
// pv.contain: "Contain" => "احتوى"
// pv.cover: "Cover" => "غطاء"
// pv.fill: "Fill" => "ملء"

// pe.transposeData: "Transpose rows to columns" => "تبديل موضع الصفوف إلى أعمدة"
// layout.panel: "Layout" => "تخطيط"
// layout.question: "Layout" => "تخطيط"
// layout.base: "Layout" => "تخطيط"
// panel.name: "Panel name" => "اسم اللوحة"
// panel.title: "Panel title" => "عنوان اللوحة"
// panel.description: "Panel description" => "وصف اللوحة"
// panel.visibleIf: "Make the panel visible if" => "اجعل اللوحة مرئية إذا"
// panel.requiredIf: "Make the panel required if" => "اجعل اللوحة مطلوبة إذا"
// panel.questionOrder: "Question order within the panel" => "ترتيب الأسئلة داخل اللوحة"
// panel.startWithNewLine: "Display the panel on a new line" => "عرض اللوحة على سطر جديد"
// panel.state: "Panel collapse state" => "حالة انهيار اللوحة"
// panel.width: "Inline panel width" => "عرض اللوحة المضمنة"
// panel.minWidth: "Minimum panel width" => "الحد الأدنى لعرض اللوحة"
// panel.maxWidth: "Maximum panel width" => "الحد الأقصى لعرض اللوحة"
// paneldynamic.name: "Panel name" => "اسم اللوحة"
// paneldynamic.title: "Panel title" => "عنوان اللوحة"
// paneldynamic.description: "Panel description" => "وصف اللوحة"
// paneldynamic.visibleIf: "Make the panel visible if" => "اجعل اللوحة مرئية إذا"
// paneldynamic.requiredIf: "Make the panel required if" => "اجعل اللوحة مطلوبة إذا"
// paneldynamic.page: "Move the panel to page" => "نقل اللوحة إلى الصفحة"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "عرض اللوحة على سطر جديد"
// paneldynamic.state: "Panel collapse state" => "حالة انهيار اللوحة"
// paneldynamic.width: "Inline panel width" => "عرض اللوحة المضمنة"
// paneldynamic.minWidth: "Minimum panel width" => "الحد الأدنى لعرض اللوحة"
// paneldynamic.maxWidth: "Maximum panel width" => "الحد الأقصى لعرض اللوحة"
// paneldynamic.templateDescription: "Panel description pattern" => "نمط وصف اللوحة"
// paneldynamic.templateTitle: "Panel title pattern" => "نمط عنوان اللوحة"
// paneldynamic.noEntriesText: "Empty panel text" => "نص لوحة فارغ"
// paneldynamic.templateTabTitle: "Tab title pattern" => "نمط عنوان علامة التبويب"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "اجعل لوحة فردية مرئية إذا"
// paneldynamic.hideNumber: "Hide the panel number" => "إخفاء رقم اللوحة"
// paneldynamic.titleLocation: "Panel title alignment" => "محاذاة عنوان اللوحة"
// paneldynamic.descriptionLocation: "Panel description alignment" => "محاذاة وصف اللوحة"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "محاذاة عنوان السؤال"
// paneldynamic.templateErrorLocation: "Error message alignment" => "محاذاة رسالة الخطأ"
// paneldynamic.newPanelPosition: "New panel location" => "موقع لوحة جديد"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "منع تكرار الردود في السؤال التالي"
// question.name: "Question name" => "اسم السؤال"
// question.title: "Question title" => "عنوان السؤال"
// question.description: "Question description" => "وصف السؤال"
// question.visibleIf: "Make the question visible if" => "اجعل السؤال مرئيا إذا"
// question.requiredIf: "Make the question required if" => "اجعل السؤال مطلوبا إذا"
// question.state: "Question box collapse state" => "حالة طي مربع الأسئلة"
// question.hideNumber: "Hide the question number" => "إخفاء رقم السؤال"
// question.titleLocation: "Question title alignment" => "محاذاة عنوان السؤال"
// question.descriptionLocation: "Question description alignment" => "محاذاة وصف السؤال"
// question.errorLocation: "Error message alignment" => "محاذاة رسالة الخطأ"
// question.indent: "Increase the inner indent" => "زيادة المسافة البادئة الداخلية"
// question.width: "Inline question width" => "عرض السؤال المضمن"
// question.minWidth: "Minimum question width" => "الحد الأدنى لعرض السؤال"
// question.maxWidth: "Maximum question width" => "الحد الأقصى لعرض السؤال"
// question.textUpdateMode: "Update input field value" => "تحديث قيمة حقل الإدخال"
// signaturepad.allowClear: "Show the Clear button within signature area" => "إظهار الزر مسح داخل منطقة التوقيع"
// signaturepad.penColor: "Stroke color" => "لون الحد"
// comment.rows: "Input field height (in lines)" => "ارتفاع حقل الإدخال (في الأسطر)"
// expression.name: "Expression name" => "اسم التعبير"
// expression.title: "Expression title" => "عنوان التعبير"
// expression.description: "Expression description" => "وصف التعبير"
// expression.expression: "Expression" => "تعبير"
// trigger.expression: "Expression" => "تعبير"
// calculatedvalue.expression: "Expression" => "تعبير"
// survey.description: "Survey description" => "وصف المسح"
// page.name: "Page name" => "اسم الصفحة"
// page.description: "Page description" => "وصف الصفحة"
// page.visibleIf: "Make the page visible if" => "اجعل الصفحة مرئية إذا"
// page.requiredIf: "Make the page required if" => "اجعل الصفحة مطلوبة إذا"
// page.questionOrder: "Question order on the page" => "ترتيب الأسئلة على الصفحة"
// matrixdropdowncolumn.name: "Column name" => "اسم العمود"
// matrixdropdowncolumn.title: "Column title" => "عنوان العمود"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "منع الردود المكررة"
// matrixdropdowncolumn.width: "Column width" => "عرض العمود"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "الحد الأدنى لعرض العمود"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "ارتفاع حقل الإدخال (في الأسطر)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "اجعل العمود مرئيا إذا"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "اجعل العمود مطلوبا إذا"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "كل خيار في عمود منفصل"
// multipletextitem.name: "Name" => "اسم"
// multipletextitem.title: "Title" => "عنوان"
// pe.rateDescriptionLocation: "Label alignment" => "محاذاة التسمية"
// pe.cellErrorLocation: "Cell error message alignment" => "محاذاة رسالة خطأ الخلية"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "ليس لديك أي أعمدة حتى الآن"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "ليس لديك أي صفوف حتى الآن"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "ليس لديك أي قواعد تحقق حتى الآن"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "ليس لديك أي متغيرات مخصصة حتى الآن"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "ليس لديك أي محفزات حتى الآن"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "ليس لديك أي روابط حتى الآن"
// pe.addNew@columns: "Add new column" => "إضافة عمود جديد"
// pe.addNew@rows: "Add new row" => "إضافة صف جديد"
// pe.addNew@validators: "Add new rule" => "إضافة قاعدة جديدة"
// pe.addNew@calculatedValues: "Add new variable" => "إضافة متغير جديد"
// pe.addNew@triggers: "Add new trigger" => "إضافة مشغل جديد"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "إضافة عنوان URL جديد"
// choicesbyurl.url: "Web service's URL" => "عنوان URL لخدمة الويب"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "عرض عناوين الصفحات في شريط التقدم"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "عرض أرقام الصفحات في شريط التقدم"
// itemvalue.visibleIf: "Make the option visible if" => "اجعل الخيار مرئيا إذا"
// itemvalue.enableIf: "Make the option selectable if" => "اجعل الخيار قابلا للتحديد إذا"
// panel.layout: "Panel Layout" => "تخطيط اللوحة"
// tabs.questionSettings: "Question Settings" => "إعدادات السؤال"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "مثال: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "مثال: فئات.خيال"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "مثال: أ)"
// pe.width_placeholder: "Ex.: 6in" => "مثال: 6 بوصة"
// pe.minWidth_placeholder: "Ex.: 600px" => "مثال: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "مثال: 50٪"
// pv.selected: "Selected" => "المحدد"
// pv.unselected: "Unselected" => "محدد"
// pv.center: "Center" => "مركز"
// pv.middle: "Middle" => "وسط"
// pv.next: "Next" => "مقبل"
// pv.last: "Last" => "آخر"
// clearIfInvisible.none: "Never" => "أبدا"
// questionsOnPageMode.standard: "Original structure" => "الهيكل الأصلي"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "إظهار جميع الأسئلة في صفحة واحدة"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "إظهار سؤال واحد لكل صفحة"
// pv.auto: "Auto" => "تلقائي"
// panelsState.firstExpanded: "First expanded" => "توسعت لأول مرة"
// rateColorMode.scale: "Scale" => "مِيزَان"
// scaleColorMode.monochrome: "Monochrome" => "أحادي اللون"
// scaleColorMode.colored: "Colored" => "الملونه"
// state.default: "Locked" => "مقفل"
// showQuestionNumbers.default: "Auto-numbering" => "الترقيم التلقائي"
// showQuestionNumbers.on: "Auto-numbering" => "الترقيم التلقائي"
// showQuestionNumbers.onPage: "Reset on each page" => "إعادة تعيين على كل صفحة"
// showQuestionNumbers.onpanel: "Reset on each panel" => "إعادة تعيين على كل لوحة"
// showQuestionNumbers.onPanel: "Reset on each panel" => "إعادة تعيين على كل لوحة"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "المتابعة عبر الاستطلاع"
// showQuestionNumbers.off: "No numbering" => "لا ترقيم"
// descriptionLocation.underTitle: "Under the question title" => "تحت عنوان السؤال"
// descriptionLocation.underInput: "Under the input field" => "ضمن حقل الإدخال"
// selectToRankAreasLayout.horizontal: "Next to choices" => "بجانب الخيارات"
// selectToRankAreasLayout.vertical: "Above choices" => "الخيارات أعلاه"
// displayStyle.decimal: "Decimal" => "عشري"
// displayStyle.currency: "Currency" => "عملة"
// displayStyle.percent: "Percentage" => "النسبه المئويه"
// displayStyle.date: "Date" => "تاريخ"
// totalDisplayStyle.decimal: "Decimal" => "عشري"
// totalDisplayStyle.currency: "Currency" => "عملة"
// totalDisplayStyle.percent: "Percentage" => "النسبه المئويه"
// totalDisplayStyle.date: "Date" => "تاريخ"
// rowOrder.initial: "Original" => "اللغة الأصلية"
// questionOrder.initial: "Original" => "اللغة الأصلية"
// showProgressBar.aboveheader: "Above the header" => "فوق الرأس"
// showProgressBar.belowheader: "Below the header" => "أسفل الرأس"
// pv.sum: "Sum" => "مجموع"
// pv.count: "Count" => "عد"
// pv.min: "Min" => "دقيقه"
// pv.max: "Max" => "ماكس"
// pv.avg: "Avg" => "متوسط"
// searchMode.contains: "Contains" => "يحتوي"
// searchMode.startsWith: "Starts with" => "يبدأ ب"
// panel.name: "A panel ID that is not visible to respondents." => "معرف لوحة غير مرئي للمستجيبين."
// panel.description: "Type a panel subtitle." => "اكتب عنوانا فرعيا للوحة."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "استخدم أيقونة العصا السحرية لضبط قاعدة شرطية تحدد رؤية اللوحة."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للوحة."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "ينطبق على جميع الأسئلة داخل هذه اللجنة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة الفردية. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "تعيين موقع رسالة خطأ فيما يتعلق بجميع الأسئلة داخل اللوحة. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "يحافظ على الترتيب الأصلي للأسئلة أو يحولها عشوائيا. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع."
// panel.page: "Repositions the panel to the end of a selected page." => "تغيير موضع اللوحة إلى نهاية الصفحة المحددة."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "يضيف مسافة أو هامش بين محتوى اللوحة والحد الأيسر لمربع اللوحة."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "قم بإلغاء التحديد لعرض اللوحة في سطر واحد مع السؤال أو اللوحة السابقة. لا ينطبق الإعداد إذا كانت اللوحة هي العنصر الأول في النموذج الخاص بك."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "اختر من بين: \"موسعة\" - يتم عرض اللوحة بالكامل ويمكن طيها ؛ \"مطوي\" - تعرض اللوحة العنوان والوصف فقط ويمكن توسيعها ؛ \"مغلق\" - يتم عرض اللوحة بالكامل ولا يمكن طيها."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "يضبط عرض اللوحة بما يتناسب مع عناصر الاستطلاع الأخرى في نفس السطر. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "معرف لوحة غير مرئي للمستجيبين."
// paneldynamic.description: "Type a panel subtitle." => "اكتب عنوانا فرعيا للوحة."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "استخدم أيقونة العصا السحرية لضبط قاعدة شرطية تحدد رؤية اللوحة."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للوحة."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "ينطبق على جميع الأسئلة داخل هذه اللجنة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة الفردية. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "تعيين موقع رسالة خطأ فيما يتعلق بسؤال بإدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "تعيين موقع رسالة خطأ فيما يتعلق بجميع الأسئلة داخل اللوحة. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "تغيير موضع اللوحة إلى نهاية الصفحة المحددة."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "يضيف مسافة أو هامش بين محتوى اللوحة والحد الأيسر لمربع اللوحة."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "قم بإلغاء التحديد لعرض اللوحة في سطر واحد مع السؤال أو اللوحة السابقة. لا ينطبق الإعداد إذا كانت اللوحة هي العنصر الأول في النموذج الخاص بك."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "اختر من بين: \"موسعة\" - يتم عرض اللوحة بالكامل ويمكن طيها ؛ \"مطوي\" - تعرض اللوحة العنوان والوصف فقط ويمكن توسيعها ؛ \"مغلق\" - يتم عرض اللوحة بالكامل ولا يمكن طيها."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "يضبط عرض اللوحة بما يتناسب مع عناصر الاستطلاع الأخرى في نفس السطر. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "اكتب قالبا لعناوين اللوحات الديناميكية. استخدم {panelIndex} للموضع العام لللوحة و {visiblePanelIndex} لترتيبها بين اللوحات المرئية. قم بإدراج هذه العناصر النائبة في النموذج لإضافة ترقيم تلقائي."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "اكتب قالبا لعناوين علامات التبويب. استخدم {panelIndex} للموضع العام للوحة و {visiblePanelIndex} لترتيبها بين اللوحات المرئية. قم بإدراج هذه العناصر النائبة في النموذج لإضافة ترقيم تلقائي."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "يتيح لك هذا الإعداد التحكم في رؤية اللوحات الفردية داخل اللوحة الديناميكية. استخدم العنصر النائب \"{panel}\" للإشارة إلى اللوحة الحالية في تعبيرك."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "يتم توريث هذا الإعداد تلقائيا من خلال جميع الأسئلة داخل هذه اللوحة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة الفردية. يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"أعلى\" افتراضيا)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "يطبق خيار \"الوراثة\" الإعداد على مستوى الصفحة (إذا تم تعيينه) أو على مستوى الاستطلاع (\"تحت عنوان اللوحة\" افتراضيا)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "يحدد موضع اللوحة المضافة حديثا. بشكل افتراضي ، تتم إضافة لوحات جديدة إلى النهاية. حدد \"التالي\" لإدراج لوحة جديدة بعد اللوحة الحالية."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "يضاعف الإجابات من اللوحة الأخيرة ويعينها إلى اللوحة الديناميكية المضافة التالية."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "قم بالإشارة إلى اسم سؤال لمطالبة المستخدم بتقديم إجابة فريدة لهذا السؤال في كل لوحة."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "يسمح لك هذا الإعداد بتعيين قيمة إجابة افتراضية استنادا إلى تعبير. يمكن أن يتضمن التعبير حسابات أساسية - '{q1_id} + {q2_id}' ، والتعبيرات المنطقية ، مثل '{age} > 60' ، والدوالات: 'iif ()' ، 'today ()' ، 'age ()' ، 'min ()' ، 'max ()' ، 'avg ()' ، إلخ. تعمل القيمة التي يحددها هذا التعبير كقيمة افتراضية أولية يمكن تجاوزها بواسطة الإدخال اليدوي للمستجيب."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد متى تتم إعادة تعيين إدخال المستجيب إلى القيمة استنادا إلى \"تعبير القيمة الافتراضية\" أو \"تعيين تعبير القيمة\" أو إلى قيمة \"الإجابة الافتراضية\" (إذا تم تعيين أي منهما)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "استخدم رمز العصا السحرية لتعيين قاعدة شرطية تحدد وقت تشغيل \"تعيين تعبير القيمة\" وتعيين القيمة الناتجة ديناميكيا كاستجابة."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "حدد تعبيرا يحدد القيمة المراد تعيينها عند استيفاء الشروط الواردة في قاعدة \"تعيين القيمة إذا\". يمكن أن يتضمن التعبير حسابات أساسية - '{q1_id} + {q2_id}' ، والتعبيرات المنطقية ، مثل '{age} > 60' ، والدوالات: 'iif ()' ، 'today ()' ، 'age ()' ، 'min ()' ، 'max ()' ، 'avg ()' ، إلخ. يمكن تجاوز القيمة التي يحددها هذا التعبير بواسطة الإدخال اليدوي للمستجيب."
// question.name: "A question ID that is not visible to respondents." => "معرف سؤال غير مرئي للمستجيبين."
// question.description: "Type a question subtitle." => "اكتب عنوانا فرعيا للسؤال."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية السؤال."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للسؤال."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع تقدم الاستطلاع أو إرساله ما لم يتلق السؤال إجابة."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "قم بإلغاء التحديد لعرض السؤال في سطر واحد مع السؤال أو اللوحة السابقة. لا ينطبق الإعداد إذا كان السؤال هو العنصر الأول في النموذج الخاص بك."
// question.page: "Repositions the question to the end of a selected page." => "تغيير موضع السؤال إلى نهاية الصفحة المحددة."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "اختر من بين: \"موسع\" - يتم عرض مربع السؤال بالكامل ويمكن طيه ؛ \"مطوي\" - يعرض مربع الأسئلة العنوان والوصف فقط ويمكن توسيعه ؛ \"مقفل\" - يتم عرض مربع الأسئلة بالكامل ولا يمكن طيه."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "يتجاوز قواعد محاذاة العنوان المحددة على مستوى اللوحة أو الصفحة أو الاستطلاع. يطبق خيار \"الوراثة\" أي إعدادات ذات مستوى أعلى (إذا تم تعيينها) أو إعداد على مستوى الاستطلاع (\"أعلى\" افتراضيا)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "يطبق خيار \"الوراثة\" الإعداد على مستوى الاستطلاع (\"ضمن عنوان السؤال\" افتراضيا)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "تعيين موقع رسالة خطأ فيما يتعلق بالسؤال مع إدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أعلى\" افتراضيا)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "إضافة مسافة أو هامش بين محتوى السؤال والحد الأيسر لمربع السؤال."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "يضبط عرض السؤال بما يتناسب مع عناصر الاستطلاع الأخرى في نفس السطر. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "استخدم أيقونة العصا السحرية لتعيين قاعدة التحقق من صحة السؤال."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "اختر من بين: \"عند فقدان التركيز\" - يتم تحديث القيمة عندما يفقد حقل الإدخال التركيز ؛ \"أثناء الكتابة\" - يتم تحديث القيمة في الوقت الفعلي ، حيث يكتب المستخدمون. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"عند فقدان التركيز\" افتراضيا)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "يمكنك استخدام أي خدمة ويب كمصدر بيانات لأسئلة الاختيار من متعدد. لتعبئة قيم الاختيار، أدخل عنوان URL للخدمة التي توفر البيانات."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "عملية مقارنة تستخدم لتصفية القائمة المنسدلة."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "يضبط عرض مساحة التوقيع المعروضة والصورة الناتجة."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "يضبط ارتفاع مساحة التوقيع المعروضة والصورة الناتجة."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "حدد ما إذا كنت تريد أن تملأ منطقة التوقيع كل المساحة المتوفرة داخل مربع السؤال مع الحفاظ على نسبة العرض إلى الارتفاع الافتراضية 3:2. عند تعيين قيم العرض والارتفاع المخصصة، سيحتفظ الإعداد بنسبة العرض إلى الارتفاع لهذه الأبعاد."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "يضبط ارتفاع الصورة في نتائج الاستطلاع."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "يضبط عرض الصورة في نتائج الاستطلاع."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "يتخطى قيم الحد الأدنى والحد الأقصى للارتفاع."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "يتخطى قيم الحد الأدنى والحد الأقصى للعرض."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "تعمل \"القيمة\" كمعرف عنصر مستخدم في القواعد الشرطية ؛ يتم عرض \"النص\" للمستجيبين."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "يغير هذا الإعداد حجم حقل الإدخال فقط ولا يؤثر على عرض مربع السؤال. للحد من طول الإدخال المقبول، انتقل إلى <b>التحقق من الصحة → الحد الأقصى لعدد الأحرف</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "يضبط عدد الأسطر المعروضة في حقل الإدخال. إذا كان الإدخال يشغل المزيد من الأسطر ، فسيظهر شريط التمرير."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "اختر بين: \"قابل للتحرير\" - يمكن المستجيبين من ملء الاستبيان الخاص بك ؛ \"للقراءة فقط\" - تعطيل تحرير النموذج."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "معرف عمود غير مرئي للمستجيبين."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "عند تمكين عمود، يطلب من المستجيب تقديم إجابة فريدة لكل سؤال داخل هذا العمود."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "يضبط عدد الأسطر المعروضة في حقل الإدخال. إذا كان الإدخال يشغل المزيد من الأسطر ، فسيظهر شريط التمرير."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية العمود."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للعمود."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "عند تحديده، ينشئ عمود منفرد لكل خيار اختيار."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "اختر من بين: \"ثابت\" - يحدد عرضا ثابتا ؛ \"متجاوب\" - يجعل الاستطلاع يشغل العرض الكامل للشاشة ؛ \"تلقائي\" - ينطبق على أي من الاثنين اعتمادا على أنواع الأسئلة المستخدمة."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "الصق رابط صورة (بلا حدود للحجم) أو انقر فوق رمز المجلد لاستعراض ملف من جهاز الكمبيوتر الخاص بك (حتى 64 كيلوبايت)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "يضبط عرض الشعار بوحدات CSS (px ، ٪ ، in ، pt ، إلخ)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "يضبط ارتفاع الشعار في وحدات CSS (px ، ٪ ، in ، pt ، إلخ)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "اختر من بين: \"لا شيء\" - تحافظ الصورة على حجمها الأصلي ؛ \"احتواء\" - يتم تغيير حجم الصورة لتلائم مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"الغلاف\" - تملأ الصورة المربع بأكمله مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"تعبئة\" - يتم تمديد الصورة لملء المربع دون الحفاظ على نسبة العرض إلى الارتفاع."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "يضبط رؤية وموقع أزرار التنقل على الصفحة."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "يضبط رؤية شريط التقدم وموقعه. تعرض القيمة \"تلقائي\" شريط التقدم أعلى رأس الاستطلاع أو أسفله."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "قم بتمكين صفحة المعاينة مع جميع الأسئلة أو الإجابة عليها فقط."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "ينطبق على جميع الأسئلة داخل الاستطلاع. يمكن تجاوز هذا الإعداد من خلال قواعد محاذاة العنوان في المستويات الأدنى: اللوحة أو الصفحة أو السؤال. سيتجاوز إعداد المستوى الأدنى تلك الموجودة في المستوى الأعلى."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "رمز أو سلسلة من الرموز تشير إلى أن الإجابة مطلوبة."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "أدخل رقما أو حرفا تريد بدء الترقيم به."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "تعيين موقع رسالة خطأ فيما يتعلق بالسؤال مع إدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "حدد ما إذا كنت تريد أن يكون حقل الإدخال الأول في كل صفحة جاهزا لإدخال النص."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "يحافظ على الترتيب الأصلي للأسئلة أو يحولها عشوائيا. يكون تأثير هذا الإعداد مرئيا فقط في علامة التبويب معاينة."
// pehelp.maxTextLength: "For text entry questions only." => "لأسئلة إدخال النص فقط."
// pehelp.maxCommentLength: "For question comments only." => "لتعليقات الأسئلة فقط."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "حدد ما إذا كنت تريد زيادة تعليقات الأسئلة وأسئلة النص الطويل تلقائيا في الارتفاع بناء على طول النص الذي تم إدخاله."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "لتعليقات الأسئلة وأسئلة النص الطويل فقط."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "تعمل المتغيرات المخصصة كمتغيرات وسيطة أو مساعدة تستخدم في حسابات النماذج. يأخذون مدخلات المستجيبين كقيم مصدر. كل متغير مخصص له اسم فريد وتعبير يعتمد عليه."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "حدد ما إذا كنت ترغب في حفظ القيمة المحسوبة للتعبير مع نتائج الاستطلاع."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "المشغل هو حدث أو شرط يستند إلى تعبير. بمجرد تقييم التعبير إلى \"صواب\" ، يطلق المشغل إجراء. يمكن أن يكون لمثل هذا الإجراء اختياريا سؤال مستهدف يؤثر عليه."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "اختر ما إذا كنت تريد مسح قيم الأسئلة المخفية بواسطة المنطق الشرطي ومتى تريد القيام بذلك أم لا."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "اختر من بين: \"عند فقدان التركيز\" - يتم تحديث القيمة عندما يفقد حقل الإدخال التركيز ؛ \"أثناء الكتابة\" - يتم تحديث القيمة في الوقت الفعلي ، حيث يكتب المستخدمون."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "تعمل القيمة اليسرى كمعرف عمود مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "تعمل القيمة اليسرى كمعرف صف مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "تعيين موقع رسالة خطأ فيما يتعلق بخلية ذات إدخال غير صالح. يطبق خيار \"الوراثة\" الإعداد من خاصية \"محاذاة رسالة الخطأ\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "عند تمكين الخاصية \"منع الاستجابات المكررة\"، سيتلقى مستجيب يحاول إرسال إدخال مكرر رسالة الخطأ التالية."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "يسمح لك بحساب القيم الإجمالية استنادا إلى تعبير. يمكن أن يتضمن التعبير العمليات الحسابية الأساسية ('{q1_id} + {q2_id}') والتعبيرات المنطقية ('{age} > 60') والوظائف ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', إلخ)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "يؤدي إلى تشغيل مطالبة تطلب تأكيد حذف الصف."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "يكرر الإجابات من الصف الأخير ويعينها إلى الصف الديناميكي المضاف التالي."
// pehelp.description: "Type a subtitle." => "اكتب عنوانا فرعيا."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "اختر لغة لبدء إنشاء الاستطلاع. لإضافة ترجمة، قم بالتبديل إلى لغة جديدة وترجمة النص الأصلي هنا أو في علامة التبويب الترجمات."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "يضبط موقع قسم التفاصيل بالنسبة إلى صف. اختر من بين: \"لا شيء\" - لم تتم إضافة أي توسيع ؛ \"تحت الصف\" - يتم وضع توسيع الصف تحت كل صف من المصفوفة ؛ \"أسفل الصف ، اعرض توسيع صف واحد فقط\" - يتم عرض توسيع أسفل صف واحد فقط ، ويتم طي توسعات الصف المتبقية."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "اختر من بين: \"لا شيء\" - تحافظ الصورة على حجمها الأصلي ؛ \"احتواء\" - يتم تغيير حجم الصورة لتلائم مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"الغلاف\" - تملأ الصورة المربع بأكمله مع الحفاظ على نسبة العرض إلى الارتفاع ؛ \"تعبئة\" - يتم تمديد الصورة لملء المربع دون الحفاظ على نسبة العرض إلى الارتفاع."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "يزيد تدريجيا من ارتفاع حقل الإدخال أثناء إدخال البيانات. يتجاوز إعداد \"ارتفاع حقل الإدخال (في الأسطر)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "يظهر مقبض تغيير الحجم (أو المقبض) في الزاوية ويمكن سحبه لتغيير حجم حقل الإدخال."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "فاصل زمني بالثواني وبعد ذلك يتقدم الاستطلاع تلقائيا إلى صفحة الشكر."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "فاصل زمني بالثواني يتقدم بعده الاستطلاع تلقائيا إلى الصفحة التالية."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "فاصل زمني بالثواني يتقدم بعده الاستطلاع تلقائيا إلى الصفحة التالية."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية الصفحة."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تعطل وضع القراءة فقط للصفحة."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تمنع إرسال الاستطلاع ما لم يكن لسؤال واحد متداخل على الأقل إجابة."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "ينطبق على جميع الأسئلة الواردة في هذه الصفحة. إذا كنت تريد إلغاء هذا الإعداد، فحدد قواعد محاذاة العنوان للأسئلة أو اللوحات الفردية. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أعلى\" افتراضيا)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "تعيين موقع رسالة خطأ فيما يتعلق بالسؤال مع إدخال غير صالح. اختر بين: \"أعلى\" - يتم وضع نص خطأ في أعلى مربع السؤال ؛ \"أسفل\" - يتم وضع نص خطأ في أسفل مربع السؤال. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أعلى\" افتراضيا)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "يحافظ على الترتيب الأصلي للأسئلة أو يحولها عشوائيا. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"أصلي\" افتراضيا). يكون تأثير هذا الإعداد مرئيا فقط في علامة التبويب معاينة."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "اختر من بين: \"مقفل\" - لا يمكن للمستخدمين توسيع اللوحات أو طيها ؛ \"طي الكل\" - تبدأ جميع اللوحات في حالة انهيار ؛ \"توسيع الكل\" - تبدأ جميع اللوحات في حالة موسعة ؛ \"تم توسيعه أولا\" - تم توسيع اللوحة الأولى فقط في البداية."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "أدخل اسم خاصية مشتركة ضمن صفيف الكائنات التي تحتوي على عناوين URL لملفات الصور أو الفيديو التي تريد عرضها في قائمة الاختيارات."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "تعمل القيمة اليسرى كمعرف عنصر مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين."
// pehelp.title: "Type a user-friendly title to display." => "اكتب عنوانا سهل الاستخدام لعرضه."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "يضمن عدم إكمال المستخدمين للاستطلاع حتى يتم تحميل الملفات."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "في أنواع الأسئلة ذات التحديد الفردي والمتعدد، يكون لكل خيار اختيار معرف وقيمة عرض. عند تحديده، يعرض هذا الإعداد قيمة عرض بدلا من قيمة معرف في أسئلة HTML والعناوين الديناميكية وأوصاف عناصر الاستطلاع."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "اختر ما إذا كنت تريد مسح قيم الأسئلة المخفية بواسطة المنطق الشرطي أم لا ومتى تفعل ذلك. يطبق خيار \"الوراثة\" إعداد مستوى الاستطلاع (\"عند اكتمال الاستطلاع\" افتراضيا)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "اختر من بين: \"الكل\" - نسخ جميع خيارات الاختيار من السؤال المحدد ؛ \"محدد\" - ينسخ ديناميكيا خيارات الاختيار المحددة فقط ؛ \"غير محدد\" - ينسخ ديناميكيا خيارات الاختيار غير المحددة فقط. يتم نسخ الخيارين \"بلا\" و \"أخرى\" افتراضيا إذا تم تمكينهما في السؤال المصدر."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "عند تحديده، يمكن للمستخدمين تضمين مدخلات إضافية في مربع تعليق منفصل."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "يعرض كل خيار اختيار خاص (\"بلا\" ، \"أخرى\" ، \"تحديد الكل\") على سطر جديد ، حتى عند استخدام تخطيط متعدد الأعمدة."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "حدد الموقع داخل مجموعة بيانات الخدمة حيث يوجد الصفيف الهدف من الكائنات. اتركه فارغا إذا كان عنوان URL يشير بالفعل إلى المصفوفة."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "أدخل اسم خاصية موحد ضمن صفيف الكائنات الذي يحتوي على القيم التي تريد عرضها في قائمة الاختيارات."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "حدد للسماح للخدمة بإرجاع استجابة أو صفيف فارغ."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "استخدم أيقونة العصا السحرية لتعيين قاعدة شرطية تحدد رؤية كل خيارات الاختيار."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "تعمل القيمة اليسرى كمعرف عنصر مستخدم في القواعد الشرطية ، ويتم عرض القيمة الصحيحة للمستجيبين."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "يختار \"تلقائي\" بين وضعي \"الأزرار\" و \"القائمة المنسدلة\" بناء على العرض المتاح. عندما يكون العرض غير كاف لعرض الأزرار، يعرض السؤال قائمة منسدلة."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "يسمح لك بتوصيل الأسئلة التي تنتج نتائج بتنسيقات مختلفة. عندما يتم ربط هذه الأسئلة معا باستخدام معرف صلة، تخزن هذه الخاصية المشتركة قيم الأسئلة المحددة."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "حدد ما إذا كنت تريد تحديث محتويات القائمة المنسدلة لمطابقة استعلام البحث الذي يكتبه المستخدم في حقل الإدخال."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "قيمة يجب حفظها في نتائج الاستطلاع عندما يعطي المستجيبون إجابة إيجابية."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "قيمة يجب حفظها في نتائج الاستطلاع عندما يعطي المستجيبون إجابة سلبية."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "لا يوصى بتعطيل هذا الخيار لأنه يتجاوز صورة المعاينة ويجعل من الصعب على المستخدم فهم ما إذا كان قد تم تحميل الملفات أم لا."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "تشغيل مطالبة تطلب تأكيد حذف الملف."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "تمكين لترتيب الخيارات المحددة فقط. سيقوم المستخدمون بسحب العناصر المحددة من قائمة الاختيار لترتيبها داخل منطقة الترتيب."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "أدخل قائمة بالخيارات التي سيتم اقتراحها على المستجيب أثناء الإدخال."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "يغير الإعداد حجم حقول الإدخال فقط ولا يؤثر على عرض مربع السؤال."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "يضبط عرضا متناسقا لكل تسميات العناصر بالبكسل"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "يحدد الخيار \"تلقائي\" تلقائيا الوضع المناسب للعرض - الصورة أو الفيديو أو YouTube - بناء على عنوان URL المصدر المقدم."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "يعمل كبديل عندما يتعذر عرض الصورة على جهاز المستخدم ولأغراض إمكانية الوصول."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "يحدد لون الرموز التعبيرية المحددة عند تعيين نوع رمز التقييم على \"الوجوه الضاحكة\". اختر بين: \"افتراضي\" - يظهر الرمز التعبيري المحدد بلون الاستطلاع الافتراضي ؛ \"مقياس\" - يرث الرمز التعبيري المحدد اللون من مقياس التصنيف."
// expression.name: "An expression ID that is not visible to respondents." => "معرف تعبير غير مرئي للمستجيبين."
// expression.description: "Type an expression subtitle." => "اكتب عنوانا فرعيا للتعبير."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "يمكن أن يتضمن التعبير العمليات الحسابية الأساسية ('{q1_id} + {q2_id}') والشروط ('{age} > 60') والدوال ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', إلخ)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "حدد لتخزين قيمة الخيار \"أخرى\" كخاصية منفصلة في نتائج الاستطلاع."
// p.swapOrder: "Swap the order of Yes and No" => "مبادلة ترتيب نعم ولا"
// p.itemTitleWidth: "Item label width (in px)" => "عرض تسمية العنصر (بالبكسل)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "نص لإظهار ما إذا كانت كل الخيارات محددة"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "نص العنصر النائب لمنطقة الترتيب"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "إكمال الاستطلاع تلقائيا"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "حدد ما إذا كنت تريد إكمال الاستطلاع تلقائيا بعد أن يجيب المستجيب على جميع الأسئلة."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "حفظ القيمة المقنعة في نتائج الاستطلاع"
// patternmask.pattern: "Value pattern" => "نمط القيمة"
// datetimemask.min: "Minimum value" => "الحد الأدنى للقيمة"
// datetimemask.max: "Maximum value" => "القيمة القصوى"
// numericmask.allowNegativeValues: "Allow negative values" => "السماح بالقيم السالبة"
// numericmask.thousandsSeparator: "Thousands separator" => "فاصل الآلاف"
// numericmask.decimalSeparator: "Decimal separator" => "فاصل عشري"
// numericmask.precision: "Value precision" => "دقة القيمة"
// numericmask.min: "Minimum value" => "الحد الأدنى للقيمة"
// numericmask.max: "Maximum value" => "القيمة القصوى"
// currencymask.prefix: "Currency prefix" => "بادئة العملة"
// currencymask.suffix: "Currency suffix" => "لاحقة العملة"
// pe.maskType: "Input mask type" => "نوع قناع الإدخال"
// maskTypes.patternmask: "Pattern" => "رسم"
// maskTypes.numericmask: "Numeric" => "عددي"
// maskTypes.datetimemask: "Date and Time" => "التاريخ والوقت"
// maskTypes.currencymask: "Currency" => "عملة"
// tabs.mask: "Input Mask Settings" => "إعدادات قناع الإدخال"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "مثال: +1 (999) -999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "مثال: مم / يوم / سنة"
// pe.currencyprefix_placeholder: "Ex.: $" => "مثال: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "مثال: الدولار الأمريكي"
// pv.textWrapEnabled: "Wrap choices" => "خيارات الالتفاف"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "ستنشئ النصوص الطويلة في خيارات الاختيار فواصل أسطر تلقائيا لتلائم القائمة المنسدلة. قم بإلغاء تحديد ما إذا كنت تريد قص النصوص."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "حدد ما إذا كنت تريد تخزين قيمة السؤال باستخدام قناع مطبق في نتائج الاستطلاع."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "يمكن أن يحتوي النمط على حرفي السلسلة والعناصر النائبة التالية: \"9\" - للرقم ؛ \"a\" - لحرف كبير أو صغير ؛ '#' - لرقم أو حرف كبير أو صغير. استخدم الشرطة المائلة للخلف '\\' للهروب من حرف."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "يمكن أن يحتوي النمط على أحرف فاصلة والعناصر النائبة التالية: \"m\" - لرقم الشهر ؛ \"mm\" - لرقم الشهر ، مع صفر بادئ للقيم المكونة من رقم واحد ؛ \"d\" - ليوم من الشهر ؛ \"dd\" - ليوم من الشهر ، مع صفر بادئ للقيم المكونة من رقم واحد ؛ \"yy\" - لآخر رقمين من السنة ؛ \"YYYY\" - لمدة عام مكون من أربعة أرقام."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "رمز يستخدم لفصل الجزء الكسري عن الجزء الصحيح من الرقم المعروض."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "رمز يستخدم لفصل أرقام عدد كبير إلى مجموعات من ثلاثة."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "يحد من عدد الأرقام التي سيتم الاحتفاظ بها بعد الفاصلة العشرية لرقم معروض."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "رمز واحد أو عدة رموز ليتم عرضها قبل القيمة."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "رمز واحد أو عدة رموز ليتم عرضها بعد القيمة."
// ed.translationSource: "Source: " => "مصدر: "
// ed.translationTarget: "Target: " => "هدف: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "الصفحة فارغة. اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه."
// maskTypes.none: "None" => "اي"
// itemvalue@rows.visibleIf: "Make the row visible if" => "اجعل الصف مرئيا إذا"
// itemvalue@rows.enableIf: "Make the row editable if" => "اجعل الصف قابلا للتحرير إذا"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "نص العنصر النائب في وضع القراءة فقط أو المعاينة"
// pe.textWrapEnabled: "Wrap choices" => "خيارات الالتفاف"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "يحدد الخيار \"تلقائي\" تلقائيا الوضع المناسب للعرض - الصورة أو الفيديو أو YouTube - بناء على عنوان URL المصدر المقدم."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "اختر بين \"صورة\" و \"فيديو\" لتعيين وضع المحتوى لمحدد الوسائط. إذا تم تحديد \"صورة\" ، فتأكد من أن جميع الخيارات المتوفرة هي ملفات صور بالتنسيقات التالية: JPEG و GIF و PNG و APNG و SVG و BMP و ICO. وبالمثل ، إذا تم تحديد \"فيديو\" ، فتأكد من أن جميع الخيارات هي روابط مباشرة لملفات الفيديو بالتنسيقات التالية: MP4 و MOV و WMV و FLV و AVI و MKV. يرجى ملاحظة أن روابط YouTube غير مدعومة لخيارات الفيديو."
// ed.selectFile: "Select a file" => "حدد ملفا"
// ed.removeFile: "Remove the file" => "إزالة الملف"
// pe.searchMode: "Search Mode" => "وضع البحث"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "انقر فوق الزر \"إضافة سؤال\" أدناه لبدء إنشاء النموذج الخاص بك."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "انقر فوق الزر \"إضافة سؤال\" أدناه لإضافة عنصر جديد إلى الصفحة."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "انقر فوق الزر \"إضافة سؤال\" أدناه لإضافة عنصر جديد إلى اللوحة."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "انقر فوق الزر أدناه واختر صورة لتحميلها"
// coloralpha.opacity: "Opacity" => "العتامه"
// font.family: "Font family" => "عائلة الخط"
// font.color: "Color" => "لون"
// font.placeholderColor: "Placeholder color" => "لون العنصر النائب"
// font.size: "Size" => "حجم"
// theme.themeName: "Theme" => "موضوع"
// theme.isPanelless: "Question appearance" => "مظهر السؤال"
// theme.editorPanel: "Background and corner radius" => "الخلفية ونصف قطر الزاوية"
// theme.questionPanel: "Background and corner radius" => "الخلفية ونصف قطر الزاوية"
// theme.primaryColor: "Accent color" => "لون التمييز"
// theme.panelBackgroundTransparency: "Panel background opacity" => "عتامة خلفية اللوحة"
// theme.questionBackgroundTransparency: "Question background opacity" => "عتامة خلفية السؤال"
// theme.fontSize: "Font size" => "حجم الخط"
// theme.scale: "Scale" => "مِيزَان"
// theme.cornerRadius: "Corner radius" => "نصف قطر الزاوية"
// theme.pageTitle: "Title font" => "خط العنوان"
// theme.pageDescription: "Description font" => "خط الوصف"
// theme.questionTitle: "Title font" => "خط العنوان"
// theme.questionDescription: "Description font" => "خط الوصف"
// theme.editorFont: "Font" => "الخط"
// theme.backgroundOpacity: "Opacity" => "العتامه"
// theme.--sjs-font-family: "Font family" => "عائلة الخط"
// theme.--sjs-general-backcolor-dim: "Background color" => "لون الخلفية"
// theme.--sjs-primary-backcolor: "Accent background" => "خلفية لهجة"
// theme.--sjs-primary-forecolor: "Accent foreground" => "لهجة الصدارة"
// theme.--sjs-shadow-small: "Shadow effects" => "تأثيرات الظل"
// theme.--sjs-shadow-inner: "Shadow effects" => "تأثيرات الظل"
// theme.--sjs-border-default: "Colors" => "الوان"
// header@header.headerView: "View" => "منظر"
// header@header.logoPosition: "Logo position" => "موضع الشعار"
// header@header.surveyTitle: "Survey title font" => "خط عنوان الاستطلاع"
// header@header.surveyDescription: "Survey description font" => "خط وصف الاستطلاع"
// header@header.headerTitle: "Survey title font" => "خط عنوان الاستطلاع"
// header@header.headerDescription: "Survey description font" => "خط وصف الاستطلاع"
// header@header.inheritWidthFrom: "Content area width" => "عرض منطقة المحتوى"
// header@header.textAreaWidth: "Text width" => "عرض النص"
// header@header.backgroundColorSwitch: "Background color" => "لون الخلفية"
// header@header.backgroundImage: "Background image" => "صورة الخلفية"
// header@header.backgroundImageOpacity: "Opacity" => "العتامه"
// header@header.overlapEnabled: "Overlap" => "التداخل"
// header@header.logoPositionX: "Logo position" => "موضع الشعار"
// header@header.titlePositionX: "Title position" => "موضع العنوان"
// header@header.descriptionPositionX: "Description position" => "موقف الوصف"
// weight.400: "Regular" => "منتظم"
// weight.600: "Heavy" => "ثقيل"
// weight.700: "Semi-bold" => "شبه غامق"
// weight.800: "Bold" => "جريء"
// backgroundImageFit.auto: "Auto" => "تلقائي"
// backgroundImageFit.cover: "Cover" => "غطاء"
// backgroundImageFit.contain: "Contain" => "احتوى"
// backgroundImageFit.fill: "Stretch" => "مد"
// backgroundImageFit.tile: "Tile" => "بلاط"
// backgroundImageAttachment.fixed: "Fixed" => "ثابت"
// backgroundImageAttachment.scroll: "Scroll" => "طومار"
// headerView.basic: "Basic" => "أساسي"
// headerView.advanced: "Advanced" => "متقدم"
// inheritWidthFrom.survey: "Same as survey" => "نفس المسح"
// inheritWidthFrom.container: "Fit to container" => "يصلح للحاوية"
// backgroundColorSwitch.none: "None" => "اي"
// backgroundColorSwitch.accentColor: "Accent color" => "لون التمييز"
// backgroundColorSwitch.custom: "Custom" => "تقليد"
// colorPalette.light: "Light" => "ضوء"
// colorPalette.dark: "Dark" => "داكن"
// isPanelless.false: "Default" => "افتراضي"
// isPanelless.true: "Without Panels" => "بدون لوحات"
// theme.cornerRadius: "Corner radius" => "نصف قطر الزاوية"
// theme.fontFamily: "Font family" => "عائلة الخط"
// theme.fontWeightRegular: "Regular" => "منتظم"
// theme.fontWeightHeavy: "Heavy" => "ثقيل"
// theme.fontWeightSemiBold: "Semi-bold" => "شبه غامق"
// theme.fontWeightBold: "Bold" => "جريء"
// theme.color: "Color" => "لون"
// theme.placeholderColor: "Placeholder color" => "لون العنصر النائب"
// theme.size: "Size" => "حجم"
// theme.opacity: "Opacity" => "العتامه"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "اكتب للبحث..."
// ed.toolboxNoResultsFound: "No results found" => "لم يتم العثور على نتائج"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "العنصر النائب لعنوان علامة التبويب"
// theme.--sjs-special-red: "Error messages" => "رسائل الخطأ"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "نص احتياطي لعناوين علامات التبويب يتم تطبيقه عندما لا ينتج نمط عنوان علامة التبويب قيمة ذات معنى."
// theme.fontColor: "Font color" => "لون الخط"
// theme.backgroundColor: "Background color" => "لون الخلفية"
// pe.questionTitleWidth: "Question title width" => "عرض عنوان السؤال"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "حدد ملفا أو الصق رابط ملف..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "مثال: 200 بكسل"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "يعين عرضا متناسقا لعناوين الأسئلة عندما تتم محاذاتها إلى يسار مربعات الأسئلة الخاصة بها. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "يعين عرضا متناسقا لعناوين الأسئلة عندما تتم محاذاتها إلى يسار مربعات الأسئلة الخاصة بها. يقبل قيم CSS (px ، ٪ ، in ، pt ، إلخ)."
// pe.commentAreaRows: "Comment area height (in lines)" => "ارتفاع منطقة التعليق (في الأسطر)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "يضبط عدد الأسطر المعروضة في مساحات النص لتعليقات الأسئلة. في الإدخال يأخذ المزيد من الأسطر ، يظهر شريط التمرير."
// pe.enabled: "Enabled" => "تمكين"
// pe.disabled: "Disabled" => "ذوي الاحتياجات الخاصه"
// pe.inherit: "Inherit" => "ورث"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "التحقق من صحة الحقول الفارغة على التركيز المفقود"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "مثال: 30٪"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "مثال: 200 بكسل"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "قم بتمكين هذا الخيار لتشغيل التحقق من الصحة عندما يركز المستخدم على حقل إدخال فارغ ثم يتركه دون إجراء أي تغييرات."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "يرتب خيارات التحديد في تخطيط متعدد الأعمدة. عند التعيين على 0 ، يتم عرض الخيارات في سطر واحد."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "ينطبق هذا الإعداد فقط على الأسئلة خارج اللوحة."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "يضبط لونا تكميليا يبرز عناصر الاستطلاع الرئيسية."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "يضبط شفافية اللوحات ومربعات الأسئلة المتعلقة بخلفية الاستطلاع."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "يضبط شفافية عناصر الإدخال بالنسبة لخلفية الاستطلاع."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "يضبط نصف قطر الزاوية لكل العناصر المستطيلة. قم بتمكين الوضع المتقدم إذا كنت تريد تعيين قيم نصف قطر زاوية فردية لعناصر الإدخال أو اللوحات ومربعات الأسئلة."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "يضبط لون الخلفية الرئيسي للاستطلاع."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "يقوم خيار \"نفس الحاوية\" بضبط عرض منطقة محتوى الرأس تلقائيا ليلائم عنصر HTML الذي يتم وضع الاستطلاع فيه."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "عرض ناحية الرأس التي تحتوي على عنوان الاستطلاع ووصفه، مقاسا بالبكسل."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "يقبل القيم٪"
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "يقبل القيم px."
// p.effectiveColSpan: "Column span" => "امتداد العمود"
// progressBarInheritWidthFrom.survey: "Same as survey" => "نفس المسح"
// progressBarInheritWidthFrom.container: "Same as container" => "نفس الحاوية"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "يعرض معاينات الصور المصغرة للملفات التي تم تحميلها عندما يكون ذلك ممكنا. قم بإلغاء تحديد ما إذا كنت تريد إظهار رموز الملفات بدلا من ذلك."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "يقوم خيار \"نفس الحاوية\" بضبط عرض منطقة شريط التقدم تلقائيا ليلائم عنصر HTML الذي يتم وضع الاستطلاع فيه."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "عرض منطقة شريط التقدم"
// maskType.none: "None" => "اي"
// maskType.pattern: "Pattern" => "رسم"
// maskType.numeric: "Numeric" => "عددي"
// maskType.datetime: "Date and Time" => "التاريخ والوقت"
// maskType.currency: "Currency" => "عملة"

// inputTextAlignment.auto: "Auto" => "تلقائي"
// inputTextAlignment.left: "Left" => "يسار"
// inputTextAlignment.right: "Right" => "يمين"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "حدد كيفية محاذاة قيمة الإدخال داخل الحقل. يقوم الإعداد الافتراضي \"تلقائي\" بمحاذاة قيمة الإدخال إلى اليمين إذا تم تطبيق إخفاء العملة أو الرقمية وإلى اليسار إذا لم يكن كذلك."
// p.inputTextAlignment: "Input value alignment" => "محاذاة قيمة الإدخال"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "إظهار شريط التقدم"
// paneldynamic.showProgressBar: "Show the progress bar" => "إظهار شريط التقدم"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "محاذاة شريط التقدم"
// pv.carousel: "Carousel" => "دائري"
// progressBarLocation.top: "Top" => "أعلى"
// progressBarLocation.bottom: "Bottom" => "قاع"
// progressBarLocation.topBottom: "Top and bottom" => "أعلى وأسفل"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "يرتب خيارات التحديد في تخطيط متعدد الأعمدة. عند التعيين على 0 ، يتم عرض الخيارات في سطر واحد. عند التعيين إلى -1، يتم توريث القيمة الفعلية من خاصية \"عدد الأعمدة المتداخلة\" للمصفوفة الأصل."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "روابط يوتيوب غير مدعومة."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "بدء تكوين النموذج الخاص بك"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "انقر فوق أي رمز فئة لاستكشاف إعدادات الاستطلاع. ستتوفر إعدادات إضافية بمجرد إضافة عنصر استطلاع إلى سطح التصميم."
// pe.caseInsensitive: "Case insensitive" => "غير حساس لحالة الأحرف"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "حدد ما إذا كان يجب التعامل مع الأحرف الكبيرة والصغيرة في التعبير العادي على أنها مكافئة."

// ed.surveyPlaceholderTitle: "Your form is empty" => "النموذج فارغ"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "النموذج فارغ"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "اسحب عنصرا من صندوق الأدوات أو انقر فوق الزر أدناه."
// ed.previewPlaceholderTitle: "No preview" => "لا معاينة"
// ed.previewPlaceholderTitleMobile: "No preview" => "لا معاينة"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "لا يحتوي الاستطلاع على أي عناصر مرئية."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "لا يحتوي الاستطلاع على أي عناصر مرئية."
// ed.translationsPlaceholderTitle: "No strings to translate" => "لا توجد سلاسل للترجمة"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "لا توجد سلاسل للترجمة"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "أضف عناصر إلى النموذج أو قم بتغيير عامل تصفية السلاسل في شريط الأدوات."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "أضف عناصر إلى النموذج أو قم بتغيير عامل تصفية السلاسل في شريط الأدوات."
// lg.logicPlaceholderTitle: "No logical rules" => "لا توجد قواعد منطقية"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "لا توجد قواعد منطقية"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "إنشاء قاعدة لتخصيص تدفق الاستطلاع."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "إنشاء قاعدة لتخصيص تدفق الاستطلاع."
// pe.showTimer: "Use a timer" => "استخدام مؤقت"
// theme.advancedMode: "Advanced mode" => "الوضع المتقدم"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "يضبط موقع المؤقت على الصفحة."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "عند التعيين إلى 0 ، يتم حساب الارتفاع تلقائيا لاستيعاب محتوى الرأس."
// p.mobileHeight: "Height on smartphones" => "الارتفاع على الهواتف الذكية"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "عند التمكين، يقوم الجزء العلوي من الاستطلاع بتراكب الجزء السفلي من الرأس."
// ed.creatorSettingTitle: "Creator Settings" => "إعدادات منشئي المحتوى"
// tabs.accentColors: "Accent colors" => "ألوان مميزة"
// tabs.scaling: "Scaling" => "القياس"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "يعين الأرقام للأسئلة المتداخلة داخل هذه اللوحة."
// creatortheme.--sjs-special-background: "Surface background" => "خلفية السطح"
// creatortheme.--sjs-primary-background-500: "Primary" => "ابتدائي"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "ثانوي"
// creatortheme.surfaceScale: "Surface" => "سطح"
// creatortheme.userInterfaceBaseUnit: "User interface" => "واجهة المستخدم"
// creatortheme.fontScale: "Font" => "الخط"
// names.sc2020: "Survey Creator 2020" => "منشئ الاستطلاع 2020"
// names.default-light: "Light" => "ضوء"
// names.default-dark: "Dark" => "داكن"
// names.default-contrast: "Contrast" => "تباين"
// panel.showNumber: "Number this panel" => "رقم هذه اللوحة"
// ed.creatorSettingTitle: "Creator Settings" => "إعدادات منشئي المحتوى"
// tabs.accentColors: "Accent colors" => "ألوان مميزة"
// tabs.scaling: "Scaling" => "القياس"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "حدد ما إذا كنت تريد أن يتقدم الاستطلاع تلقائيا إلى الصفحة التالية بمجرد إجابة المستجيب على جميع الأسئلة في الصفحة الحالية. لن يتم تطبيق هذه الميزة إذا كان السؤال الأخير على الصفحة مفتوحا أو يسمح بإجابات متعددة."
// autocomplete.name: "Full Name" => "الاسم الكامل"
// autocomplete.honorific-prefix: "Prefix" => "بادئه"
// autocomplete.given-name: "First Name" => "الاسم الأول"
// autocomplete.additional-name: "Middle Name" => "الاسم الأوسط"
// autocomplete.family-name: "Last Name" => "اسم العائلة"
// autocomplete.honorific-suffix: "Suffix" => "لاحقه"
// autocomplete.nickname: "Nickname" => "لقب"
// autocomplete.organization-title: "Job Title" => "المسمى الوظيفي"
// autocomplete.username: "User Name" => "اسم المستخدم"
// autocomplete.new-password: "New Password" => "كلمة مرور جديدة"
// autocomplete.current-password: "Current Password" => "كلمة المرور الحالية"
// autocomplete.organization: "Organization Name" => "اسم المنظمة"
// autocomplete.street-address: "Full Street Address" => "عنوان الشارع بالكامل"
// autocomplete.address-line1: "Address Line 1" => "سطر العنوان 1"
// autocomplete.address-line2: "Address Line 2" => "سطر العنوان 2"
// autocomplete.address-line3: "Address Line 3" => "سطر العنوان 3"
// autocomplete.address-level4: "Level 4 Address" => "عنوان المستوى 4"
// autocomplete.address-level3: "Level 3 Address" => "عنوان المستوى 3"
// autocomplete.address-level2: "Level 2 Address" => "عنوان المستوى 2"
// autocomplete.address-level1: "Level 1 Address" => "عنوان المستوى 1"
// autocomplete.country: "Country Code" => "رمز البلد"
// autocomplete.country-name: "Country Name" => "اسم البلد"
// autocomplete.postal-code: "Postal Code" => "الرمز البريدي"
// autocomplete.cc-name: "Cardholder Name" => "اسم حامل البطاقة"
// autocomplete.cc-given-name: "Cardholder First Name" => "الاسم الأول لحامل البطاقة"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "الاسم الأوسط لحامل البطاقة"
// autocomplete.cc-family-name: "Cardholder Last Name" => "الاسم الأخير لحامل البطاقة"
// autocomplete.cc-number: "Credit Card Number" => "رقم بطاقة الائتمان"
// autocomplete.cc-exp: "Expiration Date" => "تاريخ انتهاء الصلاحية"
// autocomplete.cc-exp-month: "Expiration Month" => "شهر انتهاء الصلاحية"
// autocomplete.cc-exp-year: "Expiration Year" => "سنة انتهاء الصلاحية"
// autocomplete.cc-csc: "Card Security Code" => "رمز أمان البطاقة"
// autocomplete.cc-type: "Credit Card Type" => "نوع بطاقة الائتمان"
// autocomplete.transaction-currency: "Transaction Currency" => "عملة المعاملة"
// autocomplete.transaction-amount: "Transaction Amount" => "مبلغ المعاملة"
// autocomplete.language: "Preferred Language" => "اللغة المفضلة"
// autocomplete.bday: "Birthday" => "عيد ميلاد"
// autocomplete.bday-day: "Birthday Day" => "عيد ميلاد"
// autocomplete.bday-month: "Birthday Month" => "شهر عيد الميلاد"
// autocomplete.bday-year: "Birthday Year" => "سنة الميلاد"
// autocomplete.sex: "Gender" => "جنس"
// autocomplete.url: "Website URL" => "رابط الموقع"
// autocomplete.photo: "Profile Photo" => "صورة الملف الشخصي"
// autocomplete.tel: "Telephone Number" => "رقم الهاتف"
// autocomplete.tel-country-code: "Country Code for Phone" => "رمز البلد للهاتف"
// autocomplete.tel-national: "National Telephone Number" => "رقم الهاتف الوطني"
// autocomplete.tel-area-code: "Area Code" => "رمز المنطقة"
// autocomplete.tel-local: "Local Phone Number" => "رقم الهاتف المحلي"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "بادئة الهاتف المحلي"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "لاحقة الهاتف المحلي"
// autocomplete.tel-extension: "Phone Extension" => "تحويلة الهاتف"
// autocomplete.email: "Email Address" => "عنوان البريد الإلكتروني"
// autocomplete.impp: "Instant Messaging Protocol" => "بروتوكول المراسلة الفورية"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "تأمين حالة التوسيع/الطي للأسئلة"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "ليس لديك أي صفحات حتى الآن"
// pe.addNew@pages: "Add new page" => "إضافة صفحة جديدة"
// ed.zoomInTooltip: "Zoom In" => "تكبير"
// ed.zoomOutTooltip: "Zoom Out" => "التصغير"
// tabs.surfaceBackground: "Surface Background" => "خلفية السطح"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "استخدام الإجابات من الإدخال الأخير كإعداد افتراضي"
// colors.gray: "Gray" => "رمادي"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "محاذاة أزرار التنقل"
// pv.allQuestions: "Show all questions" => "عرض جميع الأسئلة"
// pv.answeredQuestions: "Show answered questions only" => "إظهار الأسئلة التي تمت الإجابة عليها فقط"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "لتعيين موقع أزرار التنقل على الصفحة."
// pe.size: "Input field width (in characters)" => "عرض حقل الإدخال (بالأحرف)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "استخدم القيم من عمود المصفوفة التالي أو سؤال اللوحة كمعرفات اختيار"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "استخدم القيم من عمود المصفوفة التالي أو سؤال اللوحة كنصوص اختيار"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "في أنواع أسئلة التحديد الفردي والمتعدد ، يحتوي كل خيار اختيار على معرف وقيمة عرض. يحدد هذا الإعداد عمود المصفوفة أو سؤال اللوحة الذي يجب أن يوفر معرفات."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "في أنواع أسئلة التحديد الفردي والمتعدد ، يحتوي كل خيار اختيار على معرف وقيمة عرض. يحدد هذا الإعداد عمود المصفوفة أو سؤال اللوحة الذي يجب أن يوفر نصوص العرض."
// pe.progressBarLocation: "Progress bar alignment" => "محاذاة شريط التقدم"
// progressBarLocation.topbottom: "Top and bottom" => "أعلى وأسفل"
// progressBarLocation.aboveheader: "Above the header" => "أعلى الرأس"
// progressBarLocation.belowheader: "Below the header" => "أسفل العنوان"
// progressBarLocation.off: "Hidden" => "مخفي"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "لتعيين موقع شريط التقدم. تعرض القيمة \"تلقائي\" شريط التقدم أعلى رأس الاستطلاع أو أسفله."
// survey.readOnly: "Make the survey read-only" => "جعل الاستطلاع للقراءة فقط"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "حدد ما إذا كنت تريد منع المستجيبين من ملء الاستطلاع الخاص بك."
// paneldynamic.showNumber: "Number the panel" => "ترقيم اللوحة"
// question.showNumber: "Number this question" => "رقم هذا السؤال"
// pe.previewMode: "Preview mode" => "وضع المعاينة"
// pe.gridLayoutEnabled: "Enable the grid layout" => "تمكين تخطيط الشبكة"
// pe.maskSettings: "Mask settings" => "إعدادات القناع"
// pe.detailErrorLocation: "Row expansion error message alignment" => "محاذاة رسالة خطأ توسيع الصف"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "تعيين موقع رسائل الخطأ للأسئلة المتداخلة في أقسام التفاصيل. يطبق خيار \"الوراثة\" الإعداد من خاصية \"محاذاة رسالة الخطأ\"."
// pe.gridLayoutColumns: "Grid layout columns" => "أعمدة تخطيط الشبكة"
// pe.startPageTitlePlaceholder: "Start Page" => "الصفحة الرئيسية"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "العرض الفعال ،٪"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "عرض عنوان السؤال، بكسل"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "ليس لديك أعمدة تخطيط حتى الآن"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "يحدد عدد الأعمدة التي تمتد إليها هذه اللوحة داخل تخطيط الشبكة."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "يتيح لك هذا الجدول تكوين كل عمود شبكة داخل اللوحة. يقوم تلقائيا بتعيين النسبة المئوية للعرض لكل عمود بناء على الحد الأقصى لعدد العناصر في الصف. لتخصيص تخطيط الشبكة، اضبط هذه القيم يدويا وحدد عرض العنوان لكافة الأسئلة في كل عمود."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "يسمح لك Survey Creator بضبط العروض المضمنة لعناصر النموذج يدويا للتحكم في التخطيط. إذا لم يؤد ذلك إلى النتيجة المرجوة، فيمكنك تمكين تخطيط الشبكة، الذي يقوم ببناء عناصر التشكيل باستخدام نظام قائم على الأعمدة. لتكوين أعمدة التخطيط، حدد صفحة أو لوحة واستخدم جدول \"إعدادات الأسئلة\" → \"أعمدة الشبكة\". لضبط عدد الأعمدة التي يمتد إليها السؤال، حدده وقم بتعيين القيمة المطلوبة في حقل \"التخطيط\" → \"امتداد العمود\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "يحدد عدد الأعمدة التي يمتد إليها هذا السؤال داخل تخطيط الشبكة."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "يتيح لك هذا الجدول تكوين كل عمود شبكة على الصفحة. يقوم تلقائيا بتعيين النسبة المئوية للعرض لكل عمود بناء على الحد الأقصى لعدد العناصر في الصف. لتخصيص تخطيط الشبكة، اضبط هذه القيم يدويا وحدد عرض العنوان لكافة الأسئلة في كل عمود."

// ed.expandTooltip: "Expand" => "ستوسع"
// ed.collapseTooltip: "Collapse" => "تقوض"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "على سبيل المثال: 100 بكسل"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "لتعيين عرض متسق لجميع تسميات الأصناف. يقبل قيم CSS (بكسل ، ٪ ، في ، pt ، إلخ)."
// ed.zoom100Tooltip: "Zoom to 100%" => "تكبير إلى 100٪"
// ed.addLanguageTooltip: "Add Language" => "إضافة لغة"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "لتعيين عدد الأسطر المعروضة في مناطق النص لتعليقات الأسئلة. إذا كان الإدخال يشغل المزيد من الأسطر، فسيظهر شريط التمرير."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "قيمة العرض الافتراضية للنصوص الديناميكية"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "قيمة معروضة في أسئلة HTML وفي العناوين الديناميكية وأوصاف عناصر الاستطلاع عندما تكون قيمة السؤال فارغة."
// showQuestionNumbers.recursive: "Recursive numbering" => "الترقيم المتكرر"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "عرض عنوان السؤال"
// pe.allowCustomChoices: "Allow custom choices" => "السماح بالخيارات المخصصة"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "تعيين عرض متسق لعناوين الأسئلة عند محاذاتها إلى يسار مربعات الأسئلة الخاصة بها. يقبل قيم CSS (بكسل ، ٪ ، في ، pt ، إلخ)."
// page.name: "A page ID that is not visible to respondents." => "معرف صفحة غير مرئي للمستجيبين."
// page.description: "Type a page subtitle." => "اكتب عنوانا فرعيا للصفحة."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "تسمية توضيحية معروضة على زر التنقل في شريط التقدم أو جدول المحتويات (TOC). إذا تركت هذا الحقل فارغا، فسيستخدم زر التنقل عنوان الصفحة أو اسم الصفحة. لتمكين شريط التقدم أو جدول المحتويات، انتقل إلى \"استطلاع\" → \"التنقل\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "حدد للسماح للمستجيبين بإضافة خياراتهم الخاصة إذا لم يكن الخيار المطلوب متاحا في القائمة المنسدلة. سيتم تخزين الخيارات المخصصة مؤقتا فقط طوال مدة جلسة المتصفح الحالية."