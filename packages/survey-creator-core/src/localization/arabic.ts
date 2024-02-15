import { editorLocalization, defaultStrings } from "survey-creator-core";

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
    testSurvey: "تجربة الإستبيان",
    themeSurvey: "المواضيع",
    defaultV2Theme: "افتراضي",
    modernTheme: "حديث",
    defaultTheme: "الافتراضي (القديم)",
    testSurveyAgain: "Test Survey Again",
    testSurveyWidth: "Survey width: ",
    navigateToMsg: "You had to navigate to:",
    logic: "منطق الإستبيان",
    embedSurvey: "Embed Survey",
    translation: "Translation",
    saveSurvey: "Save Survey",
    saveSurveyTooltip: "Save Survey",
    saveTheme: "حفظ السمة",
    saveThemeTooltip: "حفظ السمة",
    designer: "تصميم الإستبيان",
    jsonEditor: "JSON Editor",
    jsonHideErrors: "Hide errors",
    jsonShowErrors: "Show errors",
    undo: "Undo",
    redo: "Redo",
    undoTooltip: "Undo last change",
    redoTooltip: "Redo the change",
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
    propertyGridFilteredTextPlaceholder: "Type to search...",
    propertyGridNoResultsFound: "لم يتم العثور على نتائج",
    toolboxGeneralCategory: "قائمة العام",
    toolboxChoiceCategory: "أسئلة الاختيار",
    toolboxTextCategory: "أسئلة إدخال النص",
    toolboxContainersCategory: "حاويات",
    toolboxMatrixCategory: "أسئلة المصفوفة",
    toolboxMiscCategory: "متفرقات",
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
    imagePlaceHolder: "قم بسحب وإسقاط صورة هنا أو انقر فوق الزر أدناه واختر صورة لتحميلها",
    imageChooseImage: "اختر صورة",
    addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[الشعار]",
    auto: "تلقائي",
    choices_Item: "بند ",
    lg: {
      addNewItem: "إضافة قاعدة جديدة",
      empty_tab: "قم بإنشاء إرتباط لتخصيص تدفق الإستبيان",
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
      question_resetValueText: "إعادة تعيين قيمة السؤال: {0}",
      question_setValueText: "تعيين قيمة: {1} السؤال: {0}",
      column_visibilityText: "جعل العمود {0} السؤال {1} مرئيا", //{0} column name, {1} question name
      column_enableText: "تمكين {0} عمود السؤال {1}", //{0} column name, {1} question name
      column_requireText: "جعل العمود {0} السؤال {1} مطلوبا", //{0} column name, {1} question name
      column_resetValueText: "إعادة تعيين قيمة الخلية للعمود: {0}",
      column_setValueText: "تعيين قيمة الخلية: {1} إلى العمود: {0}",
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
    expressionHelp: "You can use curly brackets to get access to the question values: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). You can use functions as: iif(), today(), age(), min(), max(), count(), avg() and others.",
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
    "addNew@choices": "إضافة خيار",
    expressionIsEmpty: "Expression is empty",
    value: "القيمة",
    text: "النص",
    rowid: "Row ID",
    imageLink: "رابط الصورة",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",
    url: "رابط إلكتروني URL",
    path: "المسار",
    valueName: "اسم القيمة",
    choicesbyurl: {
      valueName: "الحصول على قيم من حقل JSON التالي"
    },
    titleName: "اسم العنوان",
    imageLinkName: "اسم رابط الصورة",
    allowEmptyResponse: "السماح بجواب فارغ",
    titlePlaceholder: "Input title here",
    surveyTitlePlaceholder: "أدخل عنوان الإستبيان هنا",
    pageTitlePlaceholder: "أدخل عنوان الصفحة هنا",
    descriptionPlaceholder: "Enter a description",
    surveyDescriptionPlaceholder: "أدخل وصف للإستبيان",
    pageDescriptionPlaceholder: "أدخل وصف للصفحة",
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
    visible: "مرئي؟",
    isRequired: "مطلوب؟",
    markRequired: "وضع علامة كمطلوب",
    removeRequiredMark: "إزالة العلامة المطلوبة",
    isAllRowRequired: "المطالبة بالأجوبة لكل الصفوف",
    eachRowUnique: "منع تكرار الاستجابات في الصفوف",
    requiredErrorText: "نص خطأ إلزامي السؤال",
    startWithNewLine: "إظهار السؤال في صف جديد",
    rows: "عدد الصفوف",
    cols: "عدد الأعمدة",
    placeholder: "نص حامل خانة الإدخال",
    showPreview: "عرض منطقة المعاينة",
    storeDataAsText: "تخزين محتويات ملف JSON كنص",
    maxSize: "أقصى حجم للملف بالبايت",
    imageHeight: "طول الصورة",
    imageWidth: "عرض الصورة",
    rowCount: "عدد الصفوف",
    columnLayout: "تخطيط الأعمدة",
    transposeData: "تبديل موضع الصفوف إلى أعمدة",
    addRowLocation: "موقع زر إضافة صف",
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
    mode: "النمط (التعديل، القرائة فقط)",
    clearInvisibleValues: "إمسح القيم الغير مرئية",
    cookieName: "أدخل إسم ملف تعريف الإرتباط (لتعطيل المشاركة بالإستبيان أكثر من مرة)",
    sendResultOnPageNext: "إرسال نتائج الإستبيان على الصفحة التالية",
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
    showPrevButton: "إظهار زر التنقل السابق (السماح للمستخدم من العودة للصفحة السابقة في الإستبيان)",
    firstPageIsStarted: "الصفحة الأولى في الإستبيان هي صفحة البدء",
    showCompletedPage: "إظهار الصفحة المكتملة في النهاية (صفحة ويب مكتملة)",
    goNextPageAutomatic: "عند الإجابة على جميع الأسئلة، إنتقل إلى الصفحة التالية تلقائياً",
    showProgressBar: "إظهار شريط التقدم",
    questionTitleLocation: "موقع عنوان السؤال",
    requiredText: "رمز السؤال مطلوب",
    questionStartIndex: "فهرس بداية الأسئلة (1،2 أو 'أ' ، 'ب')",
    showQuestionNumbers: "إظهار أرقام الأسئلة",
    questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "موقع خطأ في السؤال",
    focusFirstQuestionAutomatic: "ركز المؤشر على السؤال الأول عند تغير الصفحة",
    questionsOrder: "ترتيب العناصر على الصفحة",
    maxTimeToFinish: "أقصى وقت لإنهاء الإستبيان",
    maxTimeToFinishPage: "أقصى وقت لإنهاء الصفحة في الإستبيان",
    image: {
      imageHeight: "ارتفاع الصورة (بالقيم المقبولة من CSS)",
      imageWidth: "عرض الصورة (بالقيم المقبولة من CSS)"
    },
    // survey templates
    survey: {
      title: "عنوان"
    },
    page: {
      title: "عنوان",
      maxTimeToFinish: "الحد الزمني لإنهاء الصفحة (بالثواني)"
    },
    question: {
      page: "الصفحة الرئيسية"
    },
    panel: {
      page: "الصفحة الرئيسية",
      indent: "إضافة مسافات بادئة خارجية"
    },
    showTimerPanel: "إظهار لوحة المؤقت",
    showTimerPanelMode: "إظهار نمط لوحة المؤقت",
    renderMode: "نمط العرض",
    allowAddPanel: "السماح بإضافة لوحة",
    allowRemovePanel: "السماح بإزالة لوحة",
    noEntriesText: "نص إدخالات فارغ",
    panelAddText: "نص إضافة لوحة",
    panelRemoveText: "نص إزالة لوحة",
    isSinglePage: "Show all elements on one page",
    html: "صفحة ويب HTML",
    expression: "عملية حسابية",
    setValue: "جواب",
    dataFormat: "تنسيق الصورة",
    allowAddRows: "السماح بإضافة صفوف",
    allowRemoveRows: "السماح بإزالة الصفوف",
    allowRowsDragAndDrop: "السماح بسحب الصف وإفلاته",
    responsiveImageSizeHelp: "لا ينطبق إذا قمت بتحديد عرض الصورة أو ارتفاعها بالضبط.",
    minImageWidth: "الحد الأدنى لعرض الصورة",
    maxImageWidth: "الحد الأقصى لعرض الصورة",
    minImageHeight: "الحد الأدنى لارتفاع الصورة",
    maxImageHeight: "الحد الأقصى لارتفاع الصورة",
    minValue: "أقل قيمة",
    maxValue: "أكبر قيمة",
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
    maxOthersLength: "الحد الأقصى لطول التعليق (بالأحرف)",
    autoGrowComment: "توسيع منطقة التعليق تلقائيا إذا لزم الأمر",
    allowResizeComment: "السماح للمستخدمين بتغيير حجم مناطق النص",
    textUpdateMode: "تحديث قيمة السؤال النصي",
    focusOnFirstError: "تعيين التركيز على أول إجابة غير صالحة",
    checkErrorsMode: "تشغيل التحقق من الصحة",
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
    allowClear: "Show options caption",
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
    paneldynamic: {
      confirmDelete: "تأكيد حذف اللوحة"
    },
    panelCount: "عدد اللوحات الأولي",
    minPanelCount: "الحد الأدنى لعدد اللوحات",
    maxPanelCount: "الحد الأقصى لعدد اللوحات",
    panelsState: "حالة توسيع اللوحة الداخلية",
    templateDescription: "قالب الوصف",
    templateTitle: "قالب العنوان",
    panelPrevText: "تلميح أداة زر اللوحة السابق",
    panelNextText: "تلميح أداة زر اللوحة التالية",
    showRangeInProgress: "إظهار شريط التقدم",
    templateTitleLocation: "موقع عنوان السؤال",
    panelRemoveButtonLocation: "إزالة موقع زر اللوحة",
    hideIfRowsEmpty: "إخفاء السؤال إذا لم تكن هناك صفوف",
    hideColumnsIfEmpty: "إخفاء الأعمدة في حالة عدم وجود صفوف",
    rateValues: "قيم الأسعار المخصصة",
    rateCount: "عدد الأسعار",
    autoGenerate: "كيفية تحديد قيم المعدل؟",
    hideIfChoicesEmpty: "إخفاء السؤال إذا لم يكن يحتوي على خيارات",
    hideNumber: "إخفاء رقم السؤال",
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
    showClearButton: "إظهار الزر مسح",
    showNumber: "إظهار رقم اللوحة",
    logoWidth: "عرض الشعار (بالقيم المقبولة من CSS)",
    logoHeight: "ارتفاع الشعار (بالقيم المقبولة من CSS)",
    readOnly: "للقراءة فقط",
    enableIf: "قابل للتحرير إذا",
    emptyRowsText: "رسالة \"بلا صفوف\"",
    size: "حجم حقل الإدخال (بالأحرف)",
    separateSpecialChoices: "خيارات خاصة منفصلة (لا شيء، أخرى، تحديد الكل)",
    choicesFromQuestion: "نسخ الاختيارات من السؤال التالي",
    choicesFromQuestionMode: "ما هي الخيارات التي تريد نسخها؟",
    showCommentArea: "إظهار منطقة التعليق",
    commentPlaceholder: "العنصر النائب لمنطقة التعليق",
    displayRateDescriptionsAsExtremeItems: "عرض أوصاف المعدل كقيم قصوى",
    rowsOrder: "ترتيب الصفوف",
    columnsLayout: "تخطيط العمود",
    columnColCount: "عدد الأعمدة المتداخلة",
    state: "حالة توسيع اللوحة",
    correctAnswer: "الإجابة الصحيحة",
    defaultPanelValue: "القيم الافتراضية",
    cells: "نصوص الخلية",
    keyName: "عمود المفتاح",
    itemvalue: {
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
    tabs: {
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
      others: "غير ذلك"
    },
    editProperty: "Edit property '{0}'",
    items: "Items",
    choicesVisibleIf: "تكون الخيارات مرئية إذا",
    choicesEnableIf: "يمكن تحديد الخيارات إذا",
    columnsEnableIf: "تكون الأعمدة مرئية إذا",
    rowsEnableIf: "تكون الصفوف مرئية إذا",
    indent: "إضافة مسافات بادئة",
    innerIndent: "إضافة مسافات بادئة داخلية",
    defaultValueFromLastRow: "خذ القيم الافتراضية من الصف الأخير",
    defaultValueFromLastPanel: "خذ القيم الافتراضية من اللوحة الأخيرة",
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
    signatureWidth: "عرض التوقيع",
    signatureHeight: "ارتفاع التوقيع",
    verticalAlign: "المحاذاة الرأسية",
    alternateRows: "صفوف بديلة",
    columnsVisibleIf: "تكون الأعمدة مرئية إذا",
    rowsVisibleIf: "تكون الصفوف مرئية إذا",
    otherPlaceholder: "العنصر النائب لمنطقة التعليق",
    signaturepad: {
      showPlaceholder: "إظهار العنصر النائب",
      placeholder: "نص العنصر النائب",
      signatureWidth: "عرض منطقة التوقيع",
      signatureHeight: "ارتفاع منطقة التوقيع",
      signatureAutoScaleEnabled: "تغيير حجم منطقة التوقيع تلقائيا",
      penMinWidth: "الحد الأدنى لعرض القلم",
      penMaxWidth: "الحد الأقصى لعرض القلم"
    },
    filePlaceholder: "نص العنصر النائب للملف",
    photoPlaceholder: "نص العنصر النائب للصورة",
    fileOrPhotoPlaceholder: "نص العنصر النائب للملف أو الصورة",
    rateType: "نوع السعر"
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
    decimal: "عشري",
    currency: "عملة",
    percent: "المائه",
    firstExpanded: "توسيع أول لوح",
    off: "إيقاف",
    onpanel: "ابدأ في كل لوحة",
    onPanel: "على اللوحة",
    onSurvey: "على الإستبيان",
    list: "قائمة",
    progressTop: "التقدم بالأعلى",
    progressBottom: "التقدم بالأسف",
    progressTopBottom: "التقدم بالأعلى والأسفل معاً",
    tab: "علامات التبويب",
    horizontal: "عرضي",
    vertical: "عمودي",
    top: "الأعلى",
    bottom: "الأسفل",
    topBottom: "الاعلى والأسفل",
    both: "الكل",
    left: "يسار",
    right: "يمين",
    leftRight: "اليسار واليمين",
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
    on: "تشغيل",
    onPage: "على الصفحة",
    edit: "التعديل",
    display: "العرض",
    onComplete: "عند الإنتهاء",
    onHidden: "عند الإخفال",
    onHiddenContainer: "عند إخفاء الحاوية",
    contain: "احتوى",
    cover: "غطاء",
    fill: "ملء",
    clearInvisibleValues: {
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
    all: "الكل",
    page: "الصفحة",
    survey: "الإستبيان",
    onNextPage: "عند الإنتقال للصفحة التالية",
    onValueChanged: "إذا تغيرت القيمة",
    onValueChanging: "عند تغيير القيمة",
    standard: "أساسي",
    singlePage: "صفحة واحدة",
    questionPerPage: "سؤال لكل صفحة",
    noPreview: "بلا عرض",
    showAllQuestions: "المعاينة مع جميع الأسئلة",
    showAnsweredQuestions: "المعاينة مع الأسئلة المجٌابة",
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
    showNavigationButtons: {
      none: "مخفي"
    },
    showProgressBar: {
      off: "مخفي"
    },
    showTimerPanel: {
      none: "مخفي"
    },
    showTimerPanelMode: {
      all: "كلا"
    },
    detailPanelMode: {
      none: "مخفي"
    },
    addRowLocation: {
      default: "يعتمد على تخطيط المصفوفة"
    },
    panelsState: {
      default: "لا يمكن للمستخدمين توسيع اللوحات أو طيها",
      collapsed: "جميع اللوحات مطوية",
      expanded: "يتم توسيع جميع اللوحات"
    },
    widthMode: {
      auto: "تلقائي",
      static: "ثابت",
      responsive: "متجاوب"
    },
    imageFit: {
      none: "اي",
      contain: "احتوى",
      cover: "غطاء",
      fill: "ملء"
    },
    contentMode: {
      auto: "تلقائي",
      image: "صورة",
      video: "فيديو",
      youtube: "يوتيوب"
    },
    displayMode: {
      auto: "تلقائي",
      buttons: "ازرار",
      dropdown: "القائمة المنسدلة"
    },
    rateColorMode: {
      default: "افتراضي"
    },
    autoGenerate: {
      "true": "ولد",
      "false": "أدخل يدويا"
    },
    rateType: {
      labels: "تسميات",
      stars: "النجوم",
      smileys: "الوجوه الضاحكة"
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
  pehelp: {
    cookieName: "تمنع ملفات تعريف الارتباط المستخدمين من ملء نفس الاستبيان مرتين.",
    size: "تغيير حجم المنطقة المرئية لحقل الإدخال. الرجاء استخدام إعداد <b>التحقق من الصحة → الحد الأقصى للطول</b> للحد من طول الإدخال.",
    format: "استخدم {0} كعنصر نائب للقيمة الفعلية.",
    totalText: "تكون مرئية فقط عندما يحتوي عمود واحد على الأقل على نوع الإجمالي أو تعبير الإجمالي.",
    acceptedTypes: "يرجى الرجوع إلى وصف السمة [قبول] (https://www.w3schools.com/tags/att_input_accept.asp) للحصول على مزيد من المعلومات.",
    columnColCount: "ينطبق فقط على أنواع خلايا المجموعة الراديوية وخانة الاختيار.",
    autocomplete: "راجع وصف السمة [الإكمال التلقائي] (https://developer.mozilla.org/en-US/docs/Web/HTML/السمات/الإكمال التلقائي) للحصول على مزيد من المعلومات.",
    valueName: "إذا لم تقم بتعيين هذه الخاصية، تخزين الإجابة في حقل محدد بواسطة خاصية الاسم.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "إذا كان العمود المحدد يحتوي على قيم متطابقة ، فإن الاستطلاع يلقي الخطأ \"قيمة مفتاح غير فريدة\".",
    filePlaceholder: "ينطبق عندما يكون \"نوع المصدر\" هو \"ملفات محلية\" أو عندما تكون الكاميرا غير متوفرة",
    photoPlaceholder: "ينطبق عندما يكون \"نوع المصدر\" هو \"الكاميرا\".",
    fileOrPhotoPlaceholder: "ينطبق عندما يكون \"نوع المصدر\" هو \"الملفات المحلية أو الكاميرا\"."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "Leave it empty, if it is the same as 'Name'"
    },
    multiSelect: "متعدد الإختيار",
    showLabel: "عرض الملصق",
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
    titleLocation: "موقع عنوان السؤال",
    descriptionLocation: "موقع وصف السؤال",
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
    isUnique: "فريد من نوعه",
    showInMultipleColumns: "إظهار في أعمدة متعددة",
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
    itemSize: "itemSize",
    elements: "عناصر",
    content: "محتوى",
    navigationButtonsVisibility: "رؤية أزرار التنقل",
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
    allowCameraAccess: "السماح بالوصول إلى الكاميرا",
    scaleColorMode: "مقياس وضع اللون",
    rateColorMode: "معدل وضع اللون",
    templateTabTitle: "عنوان علامة تبويب القالب",
    templateVisibleIf: "القالب مرئي إذا",
    copyDisplayValue: "نسخ قيمة العرض"
  },
  theme: {
    "--background": "لون الخلفية",
    "--background-dim-light": "خلفية لون فاتح قاتم",
    "--primary-foreground": "لون المقدمة الأساسي",
    "--foreground": "لون المقدمة",
    "--base-unit": "وحدة القاعدة",
    advancedMode: "الوضع المتقدم",
    groupGeneral: "عام",
    groupHeader: "راس",
    groupBackground: "خلفية",
    groupAppearance: "مظهر",
    themeName: "موضوع",
    themeMode: "مظهر السؤال",
    themeModePanels: "افتراضي",
    themeModeLightweight: "بدون لوحات",
    themePaletteLight: "ضوء",
    themePaletteDark: "داكن",
    primaryColor: "لون التمييز",
    primaryDefaultColor: "افتراضي",
    primaryDarkColor: "حم",
    primaryLightColor: "المحدد",
    coverTitleForecolor: "اللون الأمامي للعنوان",
    coverDescriptionForecolor: "وصف التلوين الأمامي",
    coverOverlapEnabled: "التداخل",
    backgroundDimColor: "لون الخلفية",
    backgroundImage: "صورة الخلفية",
    backgroundImageFitAuto: "تلقائي",
    backgroundImageFitCover: "غطاء",
    backgroundImageFitContain: "احتوى",
    backgroundImageFitFill: "مد",
    backgroundImageFitTile: "بلاط",
    backgroundOpacity: "العتامه",
    backgroundImageAttachmentFixed: "ثابت",
    backgroundImageAttachmentScroll: "طومار",
    panelBackgroundTransparency: "عتامة خلفية اللوحة",
    questionBackgroundTransparency: "عتامة خلفية السؤال",
    questionTitle: "خط عنوان السؤال",
    editorPanel: "عنصر الإدخال",
    backgroundCornerRadius: "الخلفية ونصف قطر الزاوية",
    backcolor: "الخلفية الافتراضية",
    hovercolor: "خلفية التحويم",
    borderDecoration: "زخرفة الحدود",
    accentBackground: "خلفية لهجة",
    accentForeground: "لهجة الصدارة",
    primaryForecolor: "اللون الافتراضي",
    primaryForecolorLight: "لون معطل",
    colorsTitle: "الوان",
    font: "الخط",
    lines: "اسطر",
    borderDefault: "اظلم",
    borderLight: "أخف",
    fontFamily: "عائلة الخط",
    fontSize: "حجم الخط",
    color: "لون",
    placeholderColor: "لون العنصر النائب",
    size: "حجم",
    fontWeightRegular: "منتظم",
    fontWeightHeavy: "ثقيل",
    fontWeightSemiBold: "شبه غامق",
    fontWeightBold: "جريء",
    scale: "مِيزَان",
    cornerRadius: "نصف قطر الزاوية",
    surveyTitle: "خط عنوان الاستطلاع",
    surveyDescription: "خط وصف الاستطلاع",
    pageTitle: "خط عنوان الصفحة",
    titleFont: "خط العنوان",
    descriptionFont: "خط الوصف",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "إضافة تأثير الظل",
    opacity: "العتامه",
    boxShadowBlur: "طمس",
    boxShadowSpread: "انتشار",
    boxShadowDrop: "قطرة",
    boxShadowInner: "باطن",
    shadow: "تأثيرات الظل",
    headerView: "منظر",
    headerViewBasic: "أساسي",
    headerViewAdvanced: "متقدم",
    coverInheritWidthFrom: "عرض منطقة المحتوى",
    coverInheritWidthFromSurvey: "نفس المسح",
    coverInheritWidthFromContainer: "يصلح للحاوية",
    coverTextAreaWidth: "عرض النص",
    coverBackgroundColorSwitch: "لون الخلفية",
    coverBackgroundColorNone: "اي",
    coverBackgroundColorAccentColor: "لون التمييز",
    coverBackgroundColorCustom: "تقليد",
    horizontalAlignmentLeft: "يسار",
    horizontalAlignmentCenter: "مركز",
    horizontalAlignmentRight: "يمين",
    verticalAlignmentTop: "أعلى",
    verticalAlignmentMiddle: "وسط",
    verticalAlignmentBottom: "قاع",
    logoPosition: "موضع الشعار",
    coverTitlePosition: "موضع العنوان",
    coverDescriptionPosition: "موقف الوصف",
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
      green: "أخضر"
    }
  }
};

//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["ar"] = arStrings;
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
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "الحد الزمني لإنهاء الصفحة (بالثواني)"
// question.page: "Parent page" => "الصفحة الرئيسية"
// pe.noEntriesText: "Empty entries text" => "نص إدخالات فارغ"
// pe.setValue: "Answer" => "جواب"
// pe.dataFormat: "Image format" => "تنسيق الصورة"
// pe.allowAddRows: "Allow adding rows" => "السماح بإضافة صفوف"
// pe.allowRemoveRows: "Allow removing rows" => "السماح بإزالة الصفوف"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "السماح بسحب الصف وإفلاته"
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
// pe.maxOthersLength: "Maximum comment length (in characters)" => "الحد الأقصى لطول التعليق (بالأحرف)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "توسيع منطقة التعليق تلقائيا إذا لزم الأمر"
// pe.allowResizeComment: "Allow users to resize text areas" => "السماح للمستخدمين بتغيير حجم مناطق النص"
// pe.textUpdateMode: "Update text question value" => "تحديث قيمة السؤال النصي"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "تعيين التركيز على أول إجابة غير صالحة"
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
// pe.panelPrevText: "Previous Panel button tooltip" => "تلميح أداة زر اللوحة السابق"
// pe.panelNextText: "Next Panel button tooltip" => "تلميح أداة زر اللوحة التالية"
// pe.showRangeInProgress: "Show progress bar" => "إظهار شريط التقدم"
// pe.templateTitleLocation: "Question title location" => "موقع عنوان السؤال"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "إزالة موقع زر اللوحة"
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
// pe.showClearButton: "Show the Clear button" => "إظهار الزر مسح"
// pe.showNumber: "Show panel number" => "إظهار رقم اللوحة"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "عرض الشعار (بالقيم المقبولة من CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "ارتفاع الشعار (بالقيم المقبولة من CSS)"
// pe.readOnly: "Read-only" => "للقراءة فقط"
// pe.enableIf: "Editable if" => "قابل للتحرير إذا"
// pe.emptyRowsText: "\"No rows\" message" => "رسالة \"بلا صفوف\""
// pe.size: "Input field size (in characters)" => "حجم حقل الإدخال (بالأحرف)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "خيارات خاصة منفصلة (لا شيء، أخرى، تحديد الكل)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "نسخ الاختيارات من السؤال التالي"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "ما هي الخيارات التي تريد نسخها؟"
// pe.showCommentArea: "Show the comment area" => "إظهار منطقة التعليق"
// pe.commentPlaceholder: "Comment area placeholder" => "العنصر النائب لمنطقة التعليق"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "عرض أوصاف المعدل كقيم قصوى"
// pe.rowsOrder: "Row order" => "ترتيب الصفوف"
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
// pe.defaultValueFromLastRow: "Take default values from the last row" => "خذ القيم الافتراضية من الصف الأخير"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "خذ القيم الافتراضية من اللوحة الأخيرة"
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
// addRowLocation.default: "Depends on matrix layout" => "يعتمد على تخطيط المصفوفة"
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
// theme.groupGeneral: "General" => "عام"
// theme.groupAdvanced: "Advanced" => "متقدم"
// theme.themeName: "Theme" => "موضوع"
// theme.themeMode: "Question appearance" => "مظهر السؤال"
// theme.themeModePanels: "Default" => "افتراضي"
// theme.themeModeLightweight: "Without Panels" => "بدون لوحات"
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
// theme.surveyTitle: "Survey title font" => "خط عنوان الاستطلاع"
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
// theme.groupHeader: "Header" => "راس"
// theme.coverTitleForecolor: "Title forecolor" => "اللون الأمامي للعنوان"
// theme.coverOverlapEnabled: "Overlap" => "التداخل"
// theme.backgroundImageFitFill: "Stretch" => "مد"
// theme.backgroundImageFitTile: "Tile" => "بلاط"
// theme.headerView: "View" => "منظر"
// theme.headerViewBasic: "Basic" => "أساسي"
// theme.headerViewAdvanced: "Advanced" => "متقدم"
// theme.coverInheritWidthFrom: "Content area width" => "عرض منطقة المحتوى"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "نفس المسح"
// theme.coverInheritWidthFromPage: "Fit to page" => "ملائمة للصفحة"
// theme.coverTextAreaWidth: "Text width" => "عرض النص"
// theme.coverBackgroundColorSwitch: "Background color" => "لون الخلفية"
// theme.coverBackgroundColorNone: "None" => "اي"
// theme.coverBackgroundColorAccentColor: "Accent color" => "لون التمييز"
// theme.coverBackgroundColorCustom: "Custom" => "تقليد"
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
// theme.groupBackground: "Background" => "خلفية"
// theme.groupAppearance: "Appearance" => "مظهر"
// theme.coverDescriptionForecolor: "Description forecolor" => "وصف التلوين الأمامي"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "هل تريد حقا إعادة تعيين السمة؟ ستفقد جميع تخصيصاتك."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "نعم ، إعادة تعيين السمة"
// theme.groupBackground: "Background" => "خلفية"
// theme.groupAppearance: "Appearance" => "مظهر"
// theme.coverDescriptionForecolor: "Description forecolor" => "وصف التلوين الأمامي"
// theme.coverInheritWidthFromContainer: "Fit to container" => "يصلح للحاوية"
// signaturepad.showPlaceholder: "Show the placeholder" => "إظهار العنصر النائب"
// signaturepad.placeholder: "Placeholder text" => "نص العنصر النائب"
// theme.surveyDescription: "Survey description font" => "خط وصف الاستطلاع"
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
// theme.coverTitlePosition: "Title position" => "موضع العنوان"
// theme.coverDescriptionPosition: "Description position" => "موقف الوصف"
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