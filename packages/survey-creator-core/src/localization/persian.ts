import { editorLocalization } from "survey-creator-core";

var persianStrings = {
  // survey templates
  survey: {
    edit: "ویرایش",
    externalHelpLink: "نگاه کنید و ساختن نظرسنجی را آموزش ببینید",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "لطفا از جعبه ابزار سوالی در اینجا قرار دهید",
    addLogicItem: "برای شخصی سازی نظرسنجی خود، قانونی را ایجاد کنید",
    copy: "کپی",
    duplicate: "کپی کردن",
    addToToolbox: "افزودن به جعبه ابزار",
    deletePanel: "حذف پنل",
    deleteQuestion: "حذف سوال",
    convertTo: "تبدیل به",
    drag: "المان را بکشید",
  },
  // Question types
  qt: {
    default: "پیش فرض",
    checkbox: "چند انتخابی",
    comment: "نظر",
    imagepicker: "انتخاب عکس",
    ranking: "رتبه بندی(رنک)",
    image: "عکس",
    dropdown: "لیست انتخابی",
    tagbox: "چند انتخاب کشویی",
    file: "فایل",
    html: "Html",
    matrix: "ماتریس (تک انتخابی)",
    matrixdropdown: "ماتریس (چند انتخابی)",
    matrixdynamic: "ماتریس (سطرهای داینامیک)",
    multipletext: "متن چند خطی",
    panel: "پنل",
    paneldynamic: "پنل (پنل های داینامیک)",
    radiogroup: "تک انتخابی",
    rating: "رتبه بندی",
    text: "متن تک خطی",
    boolean: "صحیح و غلط",
    expression: "توصیفی",
    signaturepad: "قسمت امضا",
    buttongroup: "گروه دکمه"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "پیش فرض ({0})",
    survey: "نظرسنجی",
    settings: "تنظیمات نظرسنجی",
    settingsTooltip: "باز کردن تنظیمات نظرسنجی",
    surveySettings: "تنظیمات نظرسنجی",
    surveySettingsTooltip: "باز کردن تنظیمات نظرسنجی",
    themeSettings: "تنظیمات تم",
    themeSettingsTooltip: "باز کردن تنظیمات تم",
    showPanel: "نمایش پنل",
    hidePanel: "پنهان سازی پنل",
    prevSelected: "قبلی",
    nextSelected: "بعدی",
    prevFocus: "تمرکز قبلی",
    nextFocus: "تمرکز بعدی",
    surveyTypeName: "نظرسنجی",
    pageTypeName: "صفحه",
    panelTypeName: "پنل",
    questionTypeName: "سوال",
    columnTypeName: "ستون",
    addNewPage: "درج صفحه جدید",
    moveRight: "اسکرول به راست",
    moveLeft: "اسکرول به چپ",
    deletePage: "حذف صفحه",
    editPage: "ویرایش صفحه",
    edit: "ویرایش",
    newPageName: "صفحه",
    newQuestionName: "سوال",
    newPanelName: "پنل",
    newTextItemName: "متن",
    testSurvey: "آزمایش نظرسنجی",
    themeSurvey: "تم",
    defaultV2Theme: "پیش فرض",
    modernTheme: "مدرن",
    defaultTheme: "پیش فرض (legacy)",
    testSurveyAgain: "آزمایش دوباره نظرسنجی",
    testSurveyWidth: "عرض نظرسنجی: ",
    navigateToMsg: "شما باید به موارد زیر بروید:",
    logic: "منطق نظرسنجی",
    embedSurvey: "نظرسنجی توکار",
    translation: "ترجمه",
    saveSurvey: "ذخیره نظرسنجی",
    saveSurveyTooltip: "ذخیره نظرسنجی",
    saveTheme: "ذخیرۀ تم",
    saveThemeTooltip: "ذخیرۀ تم",
    designer: "طراح نظرسنجی",
    jsonEditor: "ویرایشگر JSON",
    jsonHideErrors: "پنهان کردن خطاها",
    jsonShowErrors: "نمایش خطاها",
    undo: "بازگردانی",
    redo: "بازانجام",
    undoTooltip: "بازگرداندن آخرین تغییر",
    redoTooltip: "انجام دادن تغییر",
    showMoreChoices: "نمایش بیشتر",
    showLessChoices: "نمایش کمتر",
    copy: "کپی",
    cut: "برداشتن",
    paste: "چسباندن",
    copyTooltip: "کپی متن انتخاب شده در کلیپ بورد",
    cutTooltip: "متن انتخابی را از کلیپ بورد برش دهید",
    pasteTooltip: "الصاق از کلیپ بورد",
    options: "انتخاب ها",
    generateValidJSON: "تولید کد معتبر JSON",
    generateReadableJSON: "تولید کد خوانا JSON",
    toolbox: "جعبه ابزار",
    "property-grid": "ویژگی ها",
    propertyGridFilteredTextPlaceholder: "جستجو...",
    propertyGridNoResultsFound: "نتیجه ای یافت نشد",
    toolboxGeneralCategory: "عمومی",
    toolboxChoiceCategory: "سوالات انتخاب",
    toolboxTextCategory: "سوالات ورودی متن",
    toolboxContainersCategory: "ظروف",
    toolboxMatrixCategory: "سوالات ماتریکس",
    toolboxMiscCategory: "متفرقه",
    correctJSON: "لطفا JSON را تصحیح کنید.",
    surveyResults: "نتایج نظرسنجی: ",
    surveyResultsTable: "به صورت جدول",
    surveyResultsJson: "به صورت JSON",
    resultsTitle: "عنوان سوال",
    resultsName: "نام سوال",
    resultsValue: "محتوای پاسخ",
    resultsDisplayValue: "محتوای نمایشی",
    modified: "تغییر داده شده",
    saving: "در حال ذخیره",
    saved: "ذخیره شد",
    propertyEditorError: "ارور:",
    saveError: "خطا! محتوای ویرایشگر ذخیره نشده است.",
    translationPropertyGridTitle: "تنظیمات زبان",
    themePropertyGridTitle: "تنظیمات تم",
    translationLanguages: "زبان",
    translationDeleteLanguage: "ایا مطمئن هستید که می خواهید تمام رشته ها را برای این زبان حذف کنید؟",
    translationAddLanguage: "زبانی را برای ترجمه انتخاب کنید",
    translationShowAllStrings: "نمایش تمام عبارات",
    translationShowUsedStringsOnly: "فقط از عبارات استفاده کنید",
    translationShowAllPages: "نمایش تمام صفحات",
    translationNoStrings: "هیچ عبارتی برای ترجمه نیست، لطفا فیلتر را عوض کنید.",
    translationExportToSCVButton: "برون بری به CSV",
    translationImportFromSCVButton: "برون ریزی از CSV",
    translateUsigAI: "ترجمه خودکار همه",
    translationDialogTitle: "رشتههای ترجمهنشده",
    translationMergeLocaleWithDefault: "ادغام {0} با زبان پیش فرض",
    translationPlaceHolder: "در حال ترجمه...",
    themeExportButton: "صادرات",
    themeImportButton: "واردات",
    surveyJsonExportButton: "صادرات",
    surveyJsonImportButton: "واردات",
    surveyJsonCopyButton: "رونوشت در تخته یادداشت",
    themeResetButton: "بازنشانی تنظیمات تم به حالت پیشفرض",
    themeResetConfirmation: "ایا واقعا می خواهید موضوع را دوباره تنظیم کنید؟ تمام سفارشی سازی های شما از دست خواهد رفت.",
    themeResetConfirmationOk: "بله، موضوع را تنظیم مجدد کنید",
    bold: "پررنگ",
    italic: "مورب",
    underline: "پایین خط",
    addNewQuestion: "اضافه کردن سوال",
    selectPage: "انتخاب صفحه ...",
    carryForwardChoicesCopied: "انتخاب ها کپی می شوند از",
    choicesLoadedFromWebText: "انتخاب ها از یک سرویس وب بارگذاری می شوند.",
    choicesLoadedFromWebLinkText: "رفتن به تنظیمات",
    choicesLoadedFromWebPreviewTitle: "پیش نمایش گزینه های انتخاب بار شده",
    htmlPlaceHolder: "محتوای html اینجا خواهد بود",
    panelPlaceHolder: "سوالی را از داخل جعبه ابزار در اینجا قرار دهید",
    surveyPlaceHolder: "نظرسنجی خالی است. یک آیتم را از جعبه ابزار انتخاب یا روی دکمه ی زیر کلیک کنید",
    imagePlaceHolder: "یک تصویر را در اینجا بکشید و رها کنید یا روی دکمه زیر کلیک کنید و تصویری را برای اپلود انتخاب کنید",
    imageChooseImage: "انتخاب تصویر",
    addNewTypeQuestion: "اضافه {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[لوگو]",
    auto: "خودکار",
    choices_Item: "مورد ",
    lg: {
      addNewItem: "اضافه کردن آیتم جدید",
      empty_tab: "یک آیتم را برای سفارشی کردن جریان نظرسنجی انتخاب کنید",
      page_visibilityName: "قابلیت رویت صفحه ",
      page_enableName: "فعال/غیرفعال کردن صفحه",
      page_requireName: "ایجاد صفحه مورد نیاز است",
      panel_visibilityName: "قابلیت رویت پنل",
      panel_enableName: "فعال/غیرفعال کردن پنل ",
      panel_requireName: "ایجاد صفحه مورد نیاز است",
      question_visibilityName: " قابلیت رویت سوال",
      question_enableName: "فعال/غیرفعال کردن سوال ",
      question_requireName: "سوال اختیاری موردنیاز",
      question_resetValueName: "بازنشانی مقدار سؤال",
      question_setValueName: "تنظیم مقدار سؤال",
      column_visibilityName: "نمایش/پنهان کردن ستون",
      column_enableName: "فعال/غیرفعال کردن ستون",
      column_requireName: "ستون مورد نیاز است",
      column_resetValueName: "بازنشانی مقدار ستون",
      column_setValueName: "تنظیم مقدار ستون",
      trigger_completeName: "تکمیل نظرسنجی",
      trigger_setvalueName: "تنظیم عنوان سوال",
      trigger_copyvalueName: "کپی مقدار سوال",
      trigger_skipName: "رد کردن سوال ",
      trigger_runExpressionName: "اجرای متن شفارشی مورد نظر",
      completedHtmlOnConditionName: "متن سفارشی صفحه 'تشکر' ",
      page_visibilityDescription: "زمانی که عبارت منطقی مقدار صحیح برمی گرداند صفحه را قابل مشاهده کنید، در غیراینصورت آن را غیرقابل مشاهده نگه دارید.",
      panel_visibilityDescription: "اگر عبارت منطقی مقدار صحیح بر میگرداند، پنل را فعال کنید، در غیر اینصورت آن را غیرقابل مشاهده نگه دارید.",
      panel_enableDescription: "یک پنل ایجاد کنید و همه المان های داخل آن را در صورتی که عبارت منطقی مقدار صحیح بر می گرداند را فعال کنید، در غیر اینصورت آن ها را غیرفعال نگه دارید.",
      question_visibilityDescription: "زمانی که عبارت منطقی مقدار صحیح را برمی گرداند، سوال را قابل مشاهده کنید، در غیر اینصورت آن را غیرمشاهده نگه دارید.",
      question_enableDescription: "زمانی که عبارت منطقی مقدار صحیح برمی گرداند، سوال را فعال کنید، در غیر اینصورت آن را غیرفعال نگه دارید.",
      question_requireDescription: "زمانی که عبارت منطقی مقدار صحیح را بر می گرداند، سوال اجبار ی می شود.",
      trigger_completeDescription: "زمانی که عبارت منطقی مقدار صحیح را بر می گرداند، و بررسی تکمیل می شود،کاربر نهایی صفحه 'تشکر' را مشاهده می کند.",
      trigger_setvalueDescription: "زمانی که مقدار سوالی که در عبارت منطقی استفاده شده است تغییر می یابد و عبارت منطقی مقدار صحیح را بر می گرداند، آنگاه مقدار برای سوال انتخاب شده تنظیم می شود.",
      trigger_copyvalueDescription: "زمانی که مقدارهای سوال که در عبارت منطقی استفاده شده اند، تغییر می یابد و عبارت منطقی مقدار صحیح را بر می گرداند، سپس مقدار یکی از سوال های انتخاب شده در سوال دیگر انتخاب شده کپی می شود.",
      trigger_skipDescription: "زمانی که عبارت منطقی صحیح برمی گرداند، سپس نظرسنجی به سوال انتخابی می رود.",
      trigger_runExpressionDescription: "اگر عبارت منطقی مقدار صحیح برگرداند، آنگاه عبارت سفارشی اجرا می شود. شما ممکن است به طور اختیاری این نتیجه را به سوال انتخاب شده تبدیل کنید.",
      completedHtmlOnConditionDescription: " اگر عبارت منطقی مقدار صحیح برگرداند متن صفحه 'تشکر' به متن داده شده تغییر می یابد.",
      itemExpressionText: "زمانی که عبارت {0} مقدار صحیح بر می گرداند", //{0} - the expression
      itemEmptyExpressionText: "قانون جدید",
      page_visibilityText: "صفحه {0} را قابل مشاهده کنید.", //{0} page name
      panel_visibilityText: "پنل {0} را قابل مشاهده کنید.", //{0} panel name
      panel_enableText: "فعال کردن پنل {0}", //{0} panel name
      question_visibilityText: "سوال {0} را قابل مشاهده کنید.", //{0} question name
      question_enableText: "فعال کردن سوال {0}", //{0} question name
      question_requireText: "ایجاد سوال {0} اجباری", //{0} question name
      question_resetValueText: "بازنشانی مقدار برای سوال: {0}",
      question_setValueText: "اختصاص مقدار: {1} به سوال: {0}",
      column_visibilityText: "ستون {0} سوال {1} را قابل مشاهده کنید", //{0} column name, {1} question name
      column_enableText: "ستون {0} سوال {1} را فعال کنید", //{0} column name, {1} question name
      column_requireText: "ستون {0} سوال {1} را الزامی کنید", //{0} column name, {1} question name
      column_resetValueText: "تنظیم مجدد مقدار سلول برای ستون: {0}",
      column_setValueText: "اختصاص مقدار سلول: {1} به ستون: {0}",
      setValueExpressionPlaceholder: " یک عبارت که نتیجه ان به سوال هدف اختصاص داده خواهد شد.",
      trigger_completeText: "بررسی نظرسنجی تمام شد",
      trigger_setvalueText: "در سوال {0} مقدار {1} را قرار دهید", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "ارزش سوال روشن: {0}", //{0} question name
      trigger_copyvalueText: "مقدار سوال {0} را از سوال {1} کپی کنید.", //{0} and {1} question names
      trigger_skipText: "رد کردن نظرسنجی برای سوال {0}", //{0} question name
      trigger_runExpressionText1: "اجرای عبارت '{0}' ", //{0} the expression
      trigger_runExpressionText2: "و نتیجه آن را داخل سوال {0} ذخیره کنید", //{0} question name
      completedHtmlOnConditionText: "نمایش متن سفارشی برای صفحه 'تشکر'",
      showAllQuestions: "تمام سوالات",
      showAllActionTypes: "همه انواع اقدام",
      conditions: "شرط(ها)",
      actions: "عملکرد(ها)",
      expressionEditorTitle: "عبارت منطقی را تنظیم کنید",
      actionsEditorTitle: "تعریف کردن عملکرد(ها)",
      deleteAction: "حذف عملکرد",
      addNewAction: "اضافه کردن سوال (های) جدید",
      selectedActionCaption: "یک عملکرد را برای اضافه کردن، انتخاب کنید",
      expressionInvalid: "عبارت منطقی خالی یا نادرست است. لطفا آن را تضحیح کنید",
      noActionError: "لطفا حداقل یک عملکرد را اضافه نمایید",
      actionInvalid: "لطفا مشکلات مربوط به عملکرد(های) خود را برطرف نمایید.",
      uncompletedRule_title: "قوانین منطقی ناقص هستند",
      uncompletedRule_text: "شما برخی از قوانین منطقی را تکمیل نکرده اید. اگر اکنون برگه را ترک کنید، تغییرات از بین خواهند رفت. ایا هنوز هم می خواهید برگه را بدون تکمیل تغییرات ترک کنید؟",
      uncompletedRule_apply: "بله",
      uncompletedRule_cancel: "نه، من می خواهم قوانین را تکمیل کنم"
    }
  },
  // Property Editors
  pe: {
    apply: "اعمال",
    ok: "تایید",
    save: "ذخیره",
    clear: "روشن",
    saveTooltip: "ذخیره",
    cancel: "لغو",
    set: "مجموعه",
    reset: "بازنشانی",
    change: "تغییر",
    refresh: "تازه سازی",
    close: "بستن",
    delete: "حذف",
    add: "اضافه کردن",
    addNew: "افزودن",
    addItem: "برای اضافه کردن یک آیتم کلیک کنید...",
    removeItem: "فشار دهید تا مورد حذف شود...",
    dragItem: "مورد را بکشید",
    addOther: "سایر",
    addSelectAll: "انتخاب همه",
    addNone: "هیچکدام",
    removeAll: "حذف همه",
    edit: "ویرایش",
    back: "بازگشت بدون ذخیره",
    backTooltip: "بازگشت بدون ذخیره",
    saveAndBack: "ذخیره و بازگشت",
    saveAndBackTooltip: "ذخیره و بازگشت",
    doneEditing: "انجام",
    editChoices: "ویرایش انتخاب ها",
    showChoices: "نمایش انتخاب ها",
    move: "جابجایی",
    empty: "<خالی>",
    emptyValue: "مقدار خالی است",
    fastEntry: "تکمیل سریع",
    fastEntryNonUniqueError: "مقدار {0}» منحصر به فرد نیست",
    fastEntryChoicesCountError: "لطفا تعداد موارد را از {0} به {1} محدود کنید",
    fastEntryChoicesMinCountError: "لطفا حداقل {0} مورد را وارد کنید",
    fastEntryPlaceholder: "شما می توانید داده ها را در قالب زیر تنظیم کنید:\nvalue1|متن\nارزش 2",
    formEntry: "تکمیل فرم",
    testService: "بررسی سرویس",
    itemSelectorEmpty: "لطفا یک المان را انتخاب کنید ",
    conditionActionEmpty: "لطفا عملکرد را انتخاب کنید",
    conditionSelectQuestion: "انتخاب سوال...",
    conditionSelectPage: "انتخاب صفحه...",
    conditionSelectPanel: "انتخاب پنل...",
    conditionValueQuestionTitle: "لطفا مقدار را انتخاب / وارد کنید",
    expressionHelp: "لطفا یک عبارت توصیفی را وارد کنید. شما ممکن است از کروشه برای دسترسی به مقدار سوالات استفاده کنید. برای مثال: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
    aceEditorHelp: "برای مشاهده نکات تکمیلی ctrl+space را بفشارید",
    aceEditorRowTitle: "سطر فعلی",
    aceEditorPanelTitle: "پنل فعلی",
    showMore: "برای اطلاعات بیشتر لطفا سند راهنما را مطالعه کنید",
    assistantTitle: "سوالات موجود:",
    cellsEmptyRowsColumns: "حداقل باید یک سطر یا ستون وجود داشته باشد.",
    showPreviewBeforeComplete: "پیش نمایش پاسخ قبل از ارسال نظرسنجی",
    overridingPropertyPrefix: "تنظیم بر اساس ",
    resetToDefaultCaption: "تنظیم مجدد",
    propertyIsEmpty: "لطفا یک مقدار وارد کنید",
    propertyIsNoUnique: "لطفاً یک مقدار منحصر به فرد وارد کنید",
    propertyNameIsNotUnique: "لطفاً یک نام منحصر به فرد وارد کنید",
    propertyNameIsIncorrect: "از کلمات رزرو شده استفاده نکنید: \"item\"، \"choice\"، \"panel\"، \"row\".",
    listIsEmpty: "یک آیتم جدید اضافه کنید",
    "listIsEmpty@choices": "هنوز هیچ انتخابی اضافه نشده است",
    "addNew@choices": "اضافه کردن یک انتخاب",
    expressionIsEmpty: "عبارت خالی است",
    value: "مقدار",
    text: "متن",
    rowid: "شناسه ی سطر",
    imageLink: "لینک تصویر",
    columnEdit: "ویرایش ستون: {0}",
    itemEdit: "ویرایش آیتم: {0}",
    url: "آدرس وب سایت(url)",
    path: "آدرس",
    valueName: "نام مقدار",
    choicesbyurl: {
      valueName: "دریافت مقادیر از فیلد JSON زیر"
    },
    titleName: "نام عنوان",
    imageLinkName: "URL های تصویر را از فیلد JSON زیر دریافت کنید",
    allowEmptyResponse: "اجازه دادن پاسخ خالی",
    titlePlaceholder: "عنوان را اینجا وارد کنید",
    surveyTitlePlaceholder: "عنوان نظرسنجی را اینجا وارد کنید",
    pageTitlePlaceholder: "عنوان صفحه را اینجا وارد کنید",
    descriptionPlaceholder: "توضیحات را وارد کنید",
    surveyDescriptionPlaceholder: "توضیحات نظرسنجی را وارد کنید",
    pageDescriptionPlaceholder: "توضیحات صفحه را وارد کنید",
    showOtherItem: "دارای آیتم دیگر",
    otherText: "سایر آیتم های متن",
    showNoneItem: "هیچ آیتمی ندارد",
    noneText: "هیچ آیتم متنی وجود ندارد",
    showSelectAllItem: "همه موارد انتخاب شده است",
    selectAllText: "انتخاب همه آیتم های متن",
    choicesMin: "حداقل مقدار برای ایجاد خودکار آیتم ها",
    choicesMax: "حداکثر مقدار برای ایجاد خود آیتم ها",
    choicesStep: "تفاوت بین موارد تولید شده خودکار",
    name: "نام",
    title: "عنوان",
    cellType: "نوع سلول",
    colCount: "تعداد ستون",
    choicesOrder: "ترتیب گزینه را انتخاب کنید",
    visible: "نمایش داده شود؟",
    isRequired: "ضروری است؟",
    markRequired: "علامت گذاری به عنوان مورد نیاز",
    removeRequiredMark: "حذف علامت مورد نیاز",
    isAllRowRequired: "نیاز به پاسخ برای همه سطرها",
    eachRowUnique: "جلوگیری از پاسخ های تکراری در ردیف ها",
    requiredErrorText: "متن خطای موردنیاز",
    startWithNewLine: "با سطر جدید شروع شود؟",
    rows: "تعداد سطر",
    cols: "تعداد ستون",
    placeholder: "نگهدارنده متن",
    showPreview: "پیش نمایش تصویر نشان داده شود؟",
    storeDataAsText: "ذخیره کردن محتوای فایل در JSON به عنوان متن",
    maxSize: "حداکثر سایز به بایت",
    imageHeight: "ارتفاع تصویر",
    imageWidth: "عرض تصویر",
    rowCount: "تعداد سطر",
    columnLayout: "قالب ستون ها",
    addRowLocation: "اضافه کردن موقعیت دکمه سطری",
    addRowText: "متن دکمه درج سطر",
    removeRowText: "متن دکمه حذف سطر",
    rateMin: "حداقل میزان",
    rateMax: "حداکثر میزان",
    rateStep: "میزان مراحل",
    minRateDescription: "توضیح حداقل امتیاز",
    maxRateDescription: "توضیح حداکثر امتیاز",
    inputType: "نوع ورودی",
    optionsCaption: "نوشته انتخاب ها",
    defaultValue: "مقدار پیش فرض",
    cellsDefaultRow: "متن پیش فرض سلول ها",
    surveyEditorTitle: "ویرایش نظرسنجی",
    qEditorTitle: "ویرایش سوال: {0}",
    maxLength: "ماکزیمم طول",
    buildExpression: "ساختن",
    editExpression: "ویرایش",
    and: "و",
    or: "یا",
    remove: "حذف",
    addCondition: "اضافه کردن شرط",
    emptyLogicPopupMessage: "یک سؤال برای شروع پیکربندی شرایط انتخاب کنید.",
    if: "اگر",
    then: "سپس",
    setToName: "سوال هدف",
    fromName: "سوال برای کپی کردن پاسخ از",
    gotoName: "سؤال برای پرش به",
    ruleIsNotSet: "قانون نادرست است",
    includeIntoResult: "شامل نتایج نظرسنجی",
    showTitle: "نمایش/پنهان کردن عنوان",
    expandCollapseTitle: "نمایش/پنهان کردن عنوان",
    locale: "زبان پیش فرض",
    simulator: "انتخاب دستگاه",
    landscapeOrientation: "افقی",
    portraitOrientation: "تغییر جهت به جهت تصویر",
    mode: "حالت (ویرایش/خواندن)",
    clearInvisibleValues: "پاکسازی مقادیر پنهان",
    cookieName: "نام کوکی (به منظور جلوگیری از اجرای دوباره نظرسنجی)",
    sendResultOnPageNext: "ارسال نتایج نظرسنجی در صفحه بعدی",
    storeOthersAsComment: "ذخیره مقدار 'سایر' در فیلد جداگانه",
    showPageTitles: "نمایش عنوان صفحات",
    showPageNumbers: "نمایش شماره صفحات",
    pagePrevText: "متن دکمه صفحه قبلی",
    pageNextText: "متن دکمه صفحه بعدی",
    completeText: "متن دکمه تکمیل نظرسنجی",
    previewText: "پیش نمایش متن دکمه",
    editText: "ویرایش متن دکمه",
    startSurveyText: "متن دکمه شروع نظرسنجی",
    showNavigationButtons: "نمایش دکمه های ناوبری (ناوبری پیش فرض)",
    showPrevButton: "نمایش دکمه قبلی (کاربر ممکن است به صفحه قبل برگردد)",
    firstPageIsStarted: "صفحه اول در نظرسنجی نقطه آغازین آن است.",
    showCompletedPage: "نمایش صفحه اتمام نظرسنجی در پایان (completedHtml)",
    goNextPageAutomatic: "با پاسخگویی به تمام سوالات، به صورت اتوماتیک به صفحه بعد برود",
    showProgressBar: "نمایش نشانگر پیشرفت",
    questionTitleLocation: "محل عنوان سوال",
    requiredText: "سوالات نشان دار اجباری هستند",
    questionStartIndex: "نمایه شروع سوالات (۱،۲ یا a و b)",
    showQuestionNumbers: "نمایش شماره های سوالات",
    questionTitleTemplate: "قالب عنوان سوال، به صورت پیش فرض: '{no}. {require} {title}'",
    questionErrorLocation: "محل خطای سوال",
    focusFirstQuestionAutomatic: "تمرکز بر روی اولین سوال با تغییر صفحه",
    questionsOrder: "ترتیب المان ها در صفحه",
    maxTimeToFinish: "نهایت زمان برای اتمام نظرسنجی",
    maxTimeToFinishPage: "نهایت زمان برای اتمام این صفحه نظرسنجی",
    image: {
      imageHeight: "ارتفاع تصویر (در مقادیر پذیرفته شده توسط CSS)",
      imageWidth: "عرض تصویر) در مقادیر پذیرفته شده CSS ("
    },
    // survey templates
    survey: {
      title: "عنوان"
    },
    page: {
      title: "عنوان",
      maxTimeToFinish: "محدودیت زمانی برای تمام کردن صفحه (به ثانیه)"
    },
    question: {
      page: "صفحه اصلی"
    },
    showTimerPanel: "نمایش پنل زمان سنج",
    showTimerPanelMode: "نمایش حالت پنل زمان سنج",
    renderMode: "حالت رندر",
    allowAddPanel: "اجازه افزودن پنل",
    allowRemovePanel: "اجازه حذف پنل",
    noEntriesText: "متن مدخلهای خالی",
    panelAddText: "متن افزودن پنل",
    panelRemoveText: "متن حذف پنل",
    isSinglePage: "نمایش تمام المان ها در یک صفحه",
    html: "Html",
    expression: "عبارت",
    setValue: "پاسخ",
    dataFormat: "قالب تصویر",
    allowAddRows: "اجازه اضافه کردن سطرها",
    allowRemoveRows: "اجازه حذف سطرها",
    allowRowsDragAndDrop: "اجازه دادن به کشیدن و رها کردن ردیف",
    responsiveImageSizeHelp: "اگر عرض یا ارتفاع تصویر دقیق را مشخص کنید اعمال نمی شود.",
    minImageWidth: "حداقل عرض تصویر",
    maxImageWidth: "حداکثر عرض تصویر",
    minImageHeight: "حداقل ارتفاع تصویر",
    maxImageHeight: "حداکثر ارتفاع تصویر",
    minValue: "حداقل مقدار",
    maxValue: "حداکثر مقدار",
    minLength: "حداقل طول",
    allowDigits: "امکان ورود اعداد",
    minCount: "حداقل تعداد ",
    maxCount: "حداکثر مقدار",
    regex: "فرمت صحیح عبارت ",
    surveyvalidator: {
      text: "پیام خطا",
      expression: "عبارت اعتبارسنجی"
    },
    totalText: "متن کامل",
    totalType: "نوع کامل",
    totalExpression: "عبارت کامل",
    totalDisplayStyle: "سبک نمایش کل",
    totalCurrency: "مجموع ارز",
    totalFormat: "مجموع فرمت",
    logo: "لوگو (URL یا رشته کدگذاری شده base64)",
    questionsOnPageMode: "ساختار نظرسنجی",
    maxTextLength: "حداکثر طول پاسخ (در کاراکترها)",
    maxOthersLength: "حداکثر طول توضیحات (در نویسهها)",
    autoGrowComment: "گسترش خودکار منطقه نظر در صورت لزوم",
    allowResizeComment: "اجازه دادن به کاربران برای تغییر اندازه مناطق متن",
    textUpdateMode: "بههنگامسازی مقدار سؤال متن",
    focusOnFirstError: "تنظیم تمرکز روی اولین پاسخ نامعتبر",
    checkErrorsMode: "اجرای اعتبارسنجی",
    navigateToUrl: "حرکت به نشانی وب",
    navigateToUrlOnCondition: "نشانی وب پویا",
    completedBeforeHtml: "نشانهگذاری برای نشان دادن اینکه ایا کاربر قبلا این بررسی را پر کرده است",
    completedHtml: "بررسی نشانه گذاری صفحه کامل",
    completedHtmlOnCondition: "بررسی دینامیکی نشانه گذاری صفحه کامل",
    loadingHtml: "نشانه گذاری برای نشان دادن در حالی که مدل بررسی در حال بارگذاری است",
    commentText: "متن ناحیه نظر",
    autocomplete: "نوع تکمیل خودکار",
    labelTrue: "برچسب \"True\"",
    labelFalse: "برچسب \"غلط\"",
    allowClear: "نشان دادن دکمهی Clear",
    displayStyle: "سبک نمایش ارزش",
    format: "رشتۀ قالببندی شده",
    maximumFractionDigits: "بیشینه رقم کسری",
    minimumFractionDigits: "حداقل رقم کسری",
    useGrouping: "نمایش جداسازهای گروهبندی",
    allowMultiple: "اجازه دادن به چندین پرونده",
    allowImagesPreview: "پیشنمایش تصاویر",
    acceptedTypes: "انواع فایل های پذیرفته شده",
    waitForUpload: "منتظر بمانید تا بارگذاری کامل شود",
    needConfirmRemoveFile: "تایید حذف پرونده",
    detailPanelMode: "جزئیات محل پانل",
    minRowCount: "حداقل تعداد سطرها",
    maxRowCount: "حداکثر تعداد سطرها",
    confirmDelete: "تایید حذف سطر",
    confirmDeleteText: "پیام تایید",
    paneldynamic: {
      confirmDelete: "تایید حذف پانل"
    },
    panelCount: "شمارش اولیه پانل",
    minPanelCount: "حداقل تعداد پانل",
    maxPanelCount: "حداکثر تعداد پانل",
    panelsState: "پانل داخلی گسترش دولت",
    templateDescription: "قالب شرح",
    templateTitle: "قالب عنوان",
    panelPrevText: "قبلی دکمه پنل tooltip",
    panelNextText: "بعدی دکمه پنل tooltip",
    showRangeInProgress: "نمایش نوار پیشرفت",
    templateTitleLocation: "عنوان سوال محل",
    panelRemoveButtonLocation: "حذف محل دکمه پنل",
    hideIfRowsEmpty: "مخفی کردن سؤال اگر سطری وجود نداشته باشد",
    hideColumnsIfEmpty: "مخفی کردن ستونها اگر سطری وجود نداشته باشد",
    rateValues: "مقادیر نرخ سفارشی",
    rateCount: "شمارش نرخ",
    autoGenerate: "چگونه مقادیر نرخ را مشخص کنیم؟",
    hideIfChoicesEmpty: "مخفی کردن سؤال در صورتی که هیچ انتخابی نداشته باشد",
    hideNumber: "مخفی کردن شمارۀ سؤال",
    minWidth: "حداقل عرض (در مقادیر پذیرفته شده CSS)",
    maxWidth: "حداکثر عرض (در مقادیر پذیرفته شده CSS)",
    width: "عرض (در مقادیر پذیرفته شده CSS)",
    showHeader: "نمایش سرایندهای ستون",
    horizontalScroll: "نمایش میله لغزش افقی",
    columnMinWidth: "اس",
    rowTitleWidth: "عرض سرصفحه سطر) در مقادیر پذیرفته شده CSS (",
    valueTrue: "مقدار » درست",
    valueFalse: "مقدار » نادرست",
    minErrorText: "پیام خطای \"مقدار کمتر از حداقل است\"",
    maxErrorText: "\"مقدار بیش از حداکثر\" پیام خطا",
    otherErrorText: "پیام خطای \"نظر خالی\"",
    keyDuplicationError: "پیام خطای \"مقدار کلید غیر منحصر به فرد\"",
    minSelectedChoices: "حداقل انتخاب های انتخاب شده",
    maxSelectedChoices: "حداکثر انتخابهای انتخاب شده",
    showClearButton: "نشان دادن دکمهی Clear",
    showNumber: "نمایش شماره پانل",
    logoWidth: "عرض لوگو (در مقادیر پذیرفته شده CSS)",
    logoHeight: "ارتفاع لوگو (در مقادیر پذیرفته شده CSS)",
    readOnly: "فقط خواندنی",
    enableIf: "قابل ویرایش اگر",
    emptyRowsText: "پیام \"بدون ردیف\"",
    size: "اندازه فیلد ورودی (در نویسه ها)",
    separateSpecialChoices: "انتخاب های ویژه جداگانه (هیچ کدام، دیگر، همه را انتخاب کنید)",
    choicesFromQuestion: "کپی کردن انتخابها از سؤال زیر",
    choicesFromQuestionMode: "کدام گزینه ها را کپی کنید؟",
    showCommentArea: "نمایش ناحیهی نظرات",
    commentPlaceholder: "ذی نفع منطقه نظر",
    displayRateDescriptionsAsExtremeItems: "نمایش توضیحات نرخ به عنوان مقادیر شدید",
    rowsOrder: "سفارش ردیف",
    columnsLayout: "طرحبندی ستون",
    columnColCount: "تعداد ستون های تو در تو",
    state: "پنل گسترش دولت",
    correctAnswer: "پاسخ صحیح",
    defaultPanelValue: "مقادیر پیشفرض",
    cells: "متن سلولی",
    keyName: "ستون کلید",
    itemvalue: {
      text: "متن دگرساز"
    },
    logoPosition: "محل قرارگیری لوگو",
    addLogo: "اضافه کردن لوگو...",
    changeLogo: "تغییر لوگو...",
    logoPositions: {
      none: "حذف لوگو",
      left: "چپ",
      right: "راست",
      top: "بخش بالا",
      bottom: "بخش پایین"
    },
    tabs: {
      general: "عمومی",
      fileOptions: "انتخاب ها",
      html: "ویرایشگر HTML",
      columns: "ستون ها",
      rows: "سطرها",
      choices: "انتخاب ها",
      items: "آیتم ها",
      visibleIf: "نمایش در صورت",
      enableIf: "فعال اگر",
      requiredIf: "مورد نیاز ااگر",
      rateValues: "مقادیر رتبه بندی",
      choicesByUrl: "انتخاب ها از وب",
      matrixChoices: "انتخاب های پیشفرض",
      multipleTextItems: "فیلدهای متنی",
      numbering: "شماره گذاری",
      validators: "اعتبارسنجی ها",
      navigation: "ناوبری",
      question: "سوال",
      pages: "صفحات",
      timer: "زمان سنج/کوئیز",
      calculatedValues: "مقادیر محاسبه شد",
      triggers: "اجرا کننده",
      templateTitle: "عنوان قالب",
      totals: "جمع کل",
      logic: "منطق",
      layout: "چیدمان",
      data: "اطلاعات",
      validation: "اعتبارسنجی",
      cells: "سلول ها",
      showOnCompleted: "نمایش بدهید تکمیل شده",
      logo: "لوگو در عنوان نظرسنجی",
      slider: "اسلایدر",
      expression: "بیان",
      others: "باقی موارد"
    },
    editProperty: "ویرایش خصوصیت '{0}'",
    items: "[ آیتم ها: {0} ]",
    choicesVisibleIf: "انتخاب ها قابل مشاهده هستند اگر",
    choicesEnableIf: "انتخاب ها قابل انتخاب هستند اگر",
    columnsEnableIf: "ستونها مرئی هستند اگر",
    rowsEnableIf: "سطرها مرئی هستند اگر",
    indent: "افزودن تورفتهای",
    panel: {
      indent: "اضافه کردن تورفتات بیرونی"
    },
    innerIndent: "اضافه کردن تورفتات داخلی",
    defaultValueFromLastRow: "گرفتن مقادیر پیشفرض از اخرین سطر",
    defaultValueFromLastPanel: "گرفتن مقادیر پیشفرض از اخرین تابلو",
    enterNewValue: "لطفا یک مقدار وارد کنید",
    noquestions: "سوالی در پرسشنامه درج نشده",
    createtrigger: "اجرا کننده ای بسازید",
    titleKeyboardAdornerTip: "برای ویرایش دکمه ی enter را فشار دهید.",
    keyboardAdornerTip: "برای ویرایش دکمه ی enter را فشار دهید, برای حذف دکمه ی delete را فشار دهید, برای حرکت دادن یک آیتم، دکمه ی  alt + arrow down /  alt + arrow up فشار دهید",
    triggerOn: "در ",
    triggerMakePagesVisible: "صفحات را قابل نمایش کن:",
    triggerMakeQuestionsVisible: "سوالات را قابل نمایش کن:",
    triggerCompleteText: "پرسشنامه را تکمیل کن اگر موفق بود.",
    triggerNotSet: "اجرا کننده تنظیم نشده.",
    triggerRunIf: "اجرا در صورت",
    triggerSetToName: "تعییر مقدار از: ",
    triggerFromName: "کپی مقدار از: ",
    triggerRunExpression: "اجرای این عبارت",
    triggerSetValue: "به: ",
    triggerGotoName: "به سوال بروید:",
    triggerIsVariable: "عدم درج متغییر در نتایج پرسشنامه",
    triggerRunExpressionEmpty: "لطفا عبارت معتبری وارد نمایید",
    emptyExpressionPlaceHolder: "عبارت را در اینجا تایپ کنید...",
    noFile: "هیچ فایلی انتخاب نشده است",
    clearIfInvisible: "پاک کردن مقدار اگر سؤال مخفی شود",
    valuePropertyName: "ارزش نام ملک",
    searchEnabled: "فعالسازی جستجو",
    hideSelectedItems: "مخفی کردن فقرههای انتخاب شده",
    closeOnSelect: "بستن کشویی پس از انتخاب",
    signatureWidth: "عرض امضا",
    signatureHeight: "ارتفاع امضا",
    verticalAlign: "تراز عمودی",
    alternateRows: "ردیفهای جایگزین",
    columnsVisibleIf: "ستونها مرئی هستند اگر",
    rowsVisibleIf: "سطرها مرئی هستند اگر",
    otherPlaceholder: "ذی نفع منطقه نظر",
    signaturepad: {
      showPlaceholder: "نشان دادن نگهدارندهی مکان",
      placeholder: "متن ذی نفع",
      signatureWidth: "عرض منطقه امضا",
      signatureHeight: "ارتفاع منطقه امضا",
      signatureAutoScaleEnabled: "مقیاس خودکار منطقه امضا",
      penMinWidth: "حداقل عرض قلم",
      penMaxWidth: "حداکثر عرض قلم"
    },
    filePlaceholder: "متن نگهدارنده پرونده",
    photoPlaceholder: "متن نگهدارنده عکس",
    fileOrPhotoPlaceholder: "متن جایدار پرونده یا عکس",
    rateType: "نوع نرخ"
  },
  // Property values
  pv: {
    "true": "واقعی",
    "false": "نادرست",
    file: "پروندههای محلی",
    camera: "دوربین",
    "file-camera": "فایل های محلی یا دوربین",
    inherit: "ارث بری",
    show: "آشکار",
    hide: "پنهان",
    default: "پیش فرض",
    initial: "اولیه",
    random: "تصادفی",
    collapsed: "جمع شده",
    expanded: "باز شده",
    none: "هیچ کدام",
    asc: "صعودی",
    desc: "نزولی",
    indeterminate: "نامشخص",
    decimal: "اعشاری",
    currency: "ارز",
    percent: "درصد",
    firstExpanded: "گسترش یافته",
    off: "خاموش",
    onpanel: "شروع در هر پنل",
    onPanel: "روی پنل",
    onSurvey: "روی نظرسنجی",
    list: "لیست",
    progressTop: "نوار پیشرفت  بالا",
    progressBottom: "نوار پیشرفت پایین",
    progressTopBottom: "نوار پیشرفت در بالا و پایین",
    tab: "زبانه",
    horizontal: "افقی",
    vertical: "عمودی",
    top: "بالا",
    bottom: "پایین",
    topBottom: "بالا و پایین",
    both: "هر دو",
    left: "چپ",
    right: "راست",
    leftRight: "چپ و راست",
    color: "رنگ",
    date: "تاریخ",
    datetime: "تاریخ",
    "datetime-local": "تاریخ محلی",
    email: "ایمیل",
    month: "ماه",
    number: "شماره",
    password: "رمز عبور",
    range: "محدوده",
    tel: "تلفن",
    text: "پیامک",
    time: "زمان",
    url: "آدرس",
    week: "هفته",
    hidden: "مخفی",
    on: "روشن",
    onPage: "روی صفحه",
    edit: "ویرایش",
    display: "نمایش",
    onComplete: "به محض تمام شدن",
    onHidden: "به محض مخفی شدن",
    onHiddenContainer: "هنگامی که سوال یا پانل / صفحه ان پنهان می شود",
    clearInvisibleValues: {
      none: "هرگز"
    },
    inputType: {
      color: "رنگ",
      date: "تاریخ",
      "datetime-local": "تاریخ و زمان",
      email: "ایمیل",
      month: "ماه",
      number: "شماره",
      password: "رمز عبور",
      range: "محدوده",
      tel: "شماره تماس",
      text: "پیامک",
      time: "زمان",
      url: "آدرس",
      week: "هفته"
    },
    all: "تمام",
    page: "صفحه",
    survey: "نظرسنجی",
    onNextPage: "به محض صفحه بعدی",
    onValueChanged: "به محض تغییر مقدار",
    onValueChanging: "قبل از اینکه پاسخ تغییر کند",
    standard: "استاندارد",
    singlePage: "تک صفحه ای",
    questionPerPage: "سوال در هر صفحه ی مجزا",
    noPreview: "پیش نمایش ندارد",
    showAllQuestions: "فعال سازی پیش نمایش با تمام سوالات",
    showAnsweredQuestions: "فعال سازی پیش نمایش به سوالات پاسخ داده شده",
    pages: "صفحات تکمیل شده",
    questions: "سوالات پاسخ داده شده",
    requiredQuestions: "پاسخ به سوالات مورد نیاز",
    correctQuestions: "پاسخ های معتبر",
    buttons: "صفحات تکمیل شده(دکمه UI)",
    underInput: "زیر ورودی",
    underTitle: "تحت عنوان",
    onBlur: "در تاری",
    onTyping: "هنگام تایپ",
    underRow: "زیر ردیف",
    underRowSingle: "در زیر ردیف، تنها یک پانل قابل مشاهده است",
    showNavigationButtons: {
      none: "پنهان"
    },
    showProgressBar: {
      off: "پنهان"
    },
    showTimerPanel: {
      none: "پنهان"
    },
    showTimerPanelMode: {
      all: "هر دو"
    },
    detailPanelMode: {
      none: "پنهان"
    },
    addRowLocation: {
      default: "بستگی به طرح ماتریس دارد"
    },
    panelsState: {
      default: "کاربران نمی توانند پانل ها را گسترش یا سقوط کنند",
      collapsed: "تمام پانل ها سقوط می کنند",
      expanded: "تمام پانل ها گسترش یافته اند"
    },
    widthMode: {
      auto: "خودکار",
      static: "استاتیک",
      responsive: "پاسخگو"
    },
    imageFit: {
      none: "هیچ کدام",
      contain: "حاوی",
      cover: "پوشش",
      fill: "پر کردن"
    },
    contentMode: {
      auto: "خودکار",
      image: "تصویر",
      video: "ویدئو",
      youtube: "Youtube"
    },
    displayMode: {
      auto: "خودکار",
      buttons: "دکمه",
      dropdown: "کشویی"
    },
    rateColorMode: {
      default: "پیش فرض"
    },
    autoGenerate: {
      "true": "تولید",
      "false": "به صورت دستی وارد کنید"
    },
    rateType: {
      labels: "برچسب",
      stars: "ستاره",
      smileys: "صورتک"
    }
  },
  // Operators
  op: {
    empty: "خالی باشد",
    notempty: "خالی نباشد",
    equal: "مساوی باشد",
    notequal: "مساوی نباشد",
    contains: "شامل",
    notcontains: "شامل نباشد",
    anyof: "هرکدام",
    allof: "همه",
    greater: "بزرگتر",
    less: "کوچکتر",
    greaterorequal: "بزرگتر یا مساوی",
    lessorequal: "کوچکتر یا مساوی",
    and: "و",
    or: "یا"
  },
  // Embed window
  ew: {
    angular: "استفاده از نسخه Angular",
    jquery: "استفاده از نسخه jQuery",
    knockout: "استفاده از نسخه ناک اوت",
    react: "استفاده از نسخه React",
    vue: "استفاده از نسخه Vue",
    bootstrap: "برای فریم ورک بوتسترپ",
    modern: "تم مدرن",
    default: "تم پیش فرض",
    orange: "تم نارنجی",
    darkblue: "تم آبی تیره",
    darkrose: "تم صورتی",
    stone: "تم سنگی",
    winter: "تم زمستانی",
    winterstone: "تم زمستانی و سنگی",
    showOnPage: "نمایش نظرسنجی در یک صفحه",
    showInWindow: "نمایش نظرسنجی در یک پنجره",
    loadFromServer: "بارگزاری JSON از سرور",
    titleScript: "اسکریپت و شیوه نمایش",
    titleHtml: "HTML",
    titleJavaScript: "جاوااسکریپت"
  },
  // Preview (Survey)
  ts: {
    selectPage: "صفحه ای را برای آزمایش انتخاب کنید:",
    showInvisibleElements: "نمایش المان های مخفی",
    hideInvisibleElements: "مخفی کردن عناصر نامرئی"
  },
  validators: {
    answercountvalidator: "تعداد پاسخ",
    emailvalidator: "ایمیل",
    expressionvalidator: "عبارت",
    numericvalidator: "عدد",
    regexvalidator: "regex",
    textvalidator: "متن"
  },
  triggers: {
    completetrigger: "تکمیل نظرسنجی",
    setvaluetrigger: "تنظیم مقدار",
    copyvaluetrigger: "کپی مقدار",
    skiptrigger: "رد کردن سوال ",
    runexpressiontrigger: "اجرای عبارت",
    visibletrigger: "تغییر وضعیت دیده شدن"
  },
  pehelp: {
    cookieName: "کوکی ها کاربران را از پر کردن همان نظرسنجی دو بار جلوگیری می کند.",
    size: "منطقه قابل مشاهده میدان ورودی را تغییر اندازه می دهد. لطفا از <b>تنظیم حداکثر طول → اعتبار سنجی</b> برای محدود کردن طول ورودی استفاده کنید.",
    format: "از {0} به عنوان نگهدارنده برای ارزش واقعی استفاده کنید.",
    totalText: "تنها زمانی قابل مشاهده است که حداقل یک ستون دارای عبارت Total type یا Total باشد.",
    acceptedTypes: "برای اطلاعات بیشتر به [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description مراجعه کنید.",
    columnColCount: "فقط برای انواع سلول های Radiogroup و Checkbox قابل اجرا است.",
    autocomplete: "برای اطلاعات بیشتر به شرح ویژگی [autocomplete] (https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) مراجعه کنید.",
    valueName: "اگر این ویژگی را تنظیم نکنید، پاسخ در زمینه ای که توسط ویژگی Name مشخص شده است ذخیره می شود.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "اگر ستون مشخص شده حاوی مقادیر یکسان باشد، نظرسنجی خطای \"مقدار کلیدی غیر منحصر به فرد\" را پرتاب می کند.",
    filePlaceholder: "اعمال می شود زمانی که \"نوع منبع\" است \"فایل های محلی\" و یا زمانی که دوربین در دسترس نیست",
    photoPlaceholder: "هنگامی که \"نوع منبع\" \"دوربین\" است، اعمال می شود.",
    fileOrPhotoPlaceholder: "زمانی اعمال می شود که \"نوع منبع\" \"فایل های محلی یا دوربین\" باشد."
  },
  // Properties
  p: {
    title: {
      name: "عنوان",
      title: "اگر خالی باشد مانند نام درج می شود"
    },
    multiSelect: "اجازه دادن به چند گزینش",
    showLabel: "نمایش زیرنویسهای تصویر",
    value: "ارزش",
    tabAlign: "ترازبندی زبانه",
    sourceType: "نوع منبع",
    fitToContainer: "مناسب برای ظرف",
    setValueExpression: "تنظیم عبارت مقدار",
    description: "توضیحات",
    logoFit: "لوگو مناسب است",
    pages: "صفحات",
    questions: "سوالات",
    triggers: "فعال سازی",
    calculatedValues: "مقادیر محاسبه شده",
    surveyId: "شناسه نظرسنجی",
    surveyPostId: "شناسه نظرسنجی",
    surveyShowDataSaving: "نظرسنجی نشان می دهد صرفه جویی در داده ها",
    questionDescriptionLocation: "توضیحات سوال محل",
    progressBarType: "نوع نوار پیشرفت",
    showTOC: "نمایش TOC",
    tocLocation: "محل Toc",
    questionTitlePattern: "الگوی عنوان سوال",
    widthMode: "حالت عرض",
    showBrandInfo: "نمایش اطلاعات برند",
    useDisplayValuesInDynamicTexts: "استفاده از مقادیر نمایش در متون پویا",
    visibleIf: "آشکار اگر",
    titleLocation: "محل قرارگیری عنوان",
    descriptionLocation: "شرح محل",
    defaultValueExpression: "عبارت مقدار پیشفرض",
    requiredIf: "اجبار اگر؟",
    resetValueIf: "بازنشانی مقدار اگر",
    setValueIf: "تنظیم مقدار اگر",
    validators: "اعتبارسنج ها",
    bindings: "پیوندها",
    renderAs: "Render به عنوان",
    attachOriginalItems: "پیوست موارد اصلی",
    choices: "گزینه ها",
    choicesByUrl: "گزینه ها با لینک",
    currency: "ارز",
    cellHint: "راهنمایی سلول",
    isUnique: "منحصر به فرد است",
    showInMultipleColumns: "نمایش در ستونهای چندگانه",
    totalMaximumFractionDigits: "مجموع رقم کسری بیشینه",
    totalMinimumFractionDigits: "مجموع حداقل رقم کسری",
    columns: "ستون ها",
    detailElements: "عناصر جزئیات",
    allowAdaptiveActions: "اجازه دادن به کنشهای انطباقی",
    defaultRowValue: "مقدار پیش فرض سطر",
    detailPanelShowOnAdding: "پانل جزئیات در اضافه کردن نشان می دهد",
    choicesLazyLoadEnabled: "انتخاب بار تنبل فعال است",
    choicesLazyLoadPageSize: "انتخاب تنبل بار اندازه صفحه",
    inputFieldComponent: "مؤلفه فیلد ورودی",
    itemComponent: "مؤلفۀ مورد",
    min: "دقیقه",
    max: "حداکثر",
    minValueExpression: "بیان مقدار مین",
    maxValueExpression: "عبارت بیشینه مقدار",
    step: "گام",
    dataList: "لیست داده ها",
    itemSize: "ابعاد مورد",
    elements: "عناصر",
    content: "محتوای",
    navigationButtonsVisibility: "پدیداری دکمه های ناوبری",
    navigationTitle: "عنوان ناوش",
    navigationDescription: "توضیحات ناوبری",
    longTap: "ضربه طولانی",
    autoGrow: "رشد خودکار",
    allowResize: "اجازه دادن به تغییر اندازه",
    acceptCarriageReturn: "پذیرش بازگشت کالسکه",
    displayMode: "حالت نمایش",
    rateType: "نوع نرخ",
    label: "برچسب",
    contentMode: "حالت محتوا",
    imageFit: "متناسب با تصویر",
    altText: "متن دگرساز",
    height: "ارتفاع",
    penColor: "رنگ قلم",
    backgroundColor: "رنگ پسزمینه",
    templateElements: "عناصر قالب",
    operator: "اپراتور",
    isVariable: "متغیر است",
    runExpression: "اجرای عبارت",
    showCaption: "نمایش عنوان",
    iconName: "نام شمایل",
    iconSize: "اندازه شمایل",
    precision: "دقت",
    matrixDragHandleArea: "ماتریکس منطقه دسته کشیدن",
    backgroundImage: "تصویر زمینه",
    backgroundImageFit: "مناسبسازی تصویر پسزمینه",
    backgroundImageAttachment: "پیوست تصویر پسزمینه",
    backgroundOpacity: "تاری پسزمینه",
    selectToRankEnabled: "انتخاب برای رتبه فعال",
    selectToRankAreasLayout: "انتخاب برای رتبه بندی طرح مناطق",
    allowCameraAccess: "اجازه دسترسی به دوربین",
    scaleColorMode: "مقیاس حالت رنگ",
    rateColorMode: "نرخ حالت رنگ",
    templateTabTitle: "عنوان زبانه قالب",
    templateVisibleIf: "قالب مرئی اگر",
    copyDisplayValue: "رونوشت مقدار نمایش"
  },
  theme: {
    "--background": "رنگ پسزمینه",
    "--background-dim-light": "پس زمینه رنگ نور کم",
    "--primary-foreground": "رنگ پیشزمینه اصلی",
    "--foreground": "رنگ پیشزمینه",
    "--base-unit": "واحد پایه",
    advancedMode: "حالت پیشرفته",
    groupGeneral: "عمومی",
    groupHeader: "هدر",
    groupBackground: "پس زمینه",
    groupAppearance: "ظاهر",
    themeName: "تم",
    themeMode: "ظاهر سوال",
    themeModePanels: "پیش فرض",
    themeModeLightweight: "بدون پانل",
    themePaletteLight: "نور",
    themePaletteDark: "تاریک",
    primaryColor: "رنگ لهجه",
    primaryDefaultColor: "پیش فرض",
    primaryDarkColor: "شناور",
    primaryLightColor: "انتخاب",
    coverTitleForecolor: "پیش زمینه عنوانcolor",
    coverDescriptionForecolor: "توصیف پیشرنگ",
    coverOverlapEnabled: "همپوشانی",
    backgroundDimColor: "رنگ پسزمینه",
    backgroundImage: "تصویر زمینه",
    backgroundImageFitAuto: "خودکار",
    backgroundImageFitCover: "پوشش",
    backgroundImageFitContain: "حاوی",
    backgroundImageFitFill: "کشش",
    backgroundImageFitTile: "کاشی",
    backgroundOpacity: "کدورت",
    backgroundImageAttachmentFixed: "ثابت",
    backgroundImageAttachmentScroll: "حرکت",
    panelBackgroundTransparency: "تاری پسزمینه پانل",
    questionBackgroundTransparency: "تاری پسزمینۀ سؤال",
    questionTitle: "قلم عنوان پرسش",
    editorPanel: "عنصر ورودی",
    backgroundCornerRadius: "پس زمینه و شعاع گوشه",
    backcolor: "پسزمینۀ پیشفرض",
    hovercolor: "پسزمینه شناور",
    borderDecoration: "دکوراسیون مرزی",
    accentBackground: "پسزمینۀ لهجه",
    accentForeground: "پیشزمینه لهجه",
    primaryForecolor: "رنگ پیشفرض",
    primaryForecolorLight: "رنگ غیرفعال",
    colorsTitle: "رنگ",
    font: "فونت",
    lines: "خطوط",
    borderDefault: "تیره تر",
    borderLight: "سبکتر",
    fontFamily: "خانواده قلم",
    fontSize: "اندازه قلم",
    color: "رنگ",
    placeholderColor: "رنگ نگهدارنده",
    size: "اندازه",
    fontWeightRegular: "منظم",
    fontWeightHeavy: "سنگین",
    fontWeightSemiBold: "نیمه جسورانه",
    fontWeightBold: "جسورانه",
    scale: "مقیاس",
    cornerRadius: "شعاع گوشه",
    surveyTitle: "قلم عنوان نظرسنجی",
    surveyDescription: "قلم توصیف نظرسنجی",
    pageTitle: "قلم عنوان صفحه",
    titleFont: "قلم عنوان",
    descriptionFont: "قلم توصیف",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "افزودن جلوهی سایه",
    opacity: "کدورت",
    boxShadowBlur: "تیرگی",
    boxShadowSpread: "گسترش",
    boxShadowDrop: "قطره",
    boxShadowInner: "درونی",
    shadow: "جلوه های سایه",
    headerView: "مشاهده",
    headerViewBasic: "اساسی",
    headerViewAdvanced: "پیشرفته",
    coverInheritWidthFrom: "عرض منطقه محتوا",
    coverInheritWidthFromSurvey: "همانند نظرسنجی",
    coverInheritWidthFromContainer: "مناسب برای ظرف",
    coverTextAreaWidth: "عرض متن",
    coverBackgroundColorSwitch: "رنگ پسزمینه",
    coverBackgroundColorNone: "هیچ کدام",
    coverBackgroundColorAccentColor: "رنگ لهجه",
    coverBackgroundColorCustom: "سفارشی",
    horizontalAlignmentLeft: "چپ",
    horizontalAlignmentCenter: "مرکز",
    horizontalAlignmentRight: "راست",
    verticalAlignmentTop: "بالا",
    verticalAlignmentMiddle: "میانه",
    verticalAlignmentBottom: "پایین",
    logoPosition: "موقعیت لوگو",
    coverTitlePosition: "موقعیت عنوان",
    coverDescriptionPosition: "شرح موقعیت",
    names: {
      default: "پیش فرض",
      sharp: "تیز",
      borderless: "مرز",
      flat: "تخت",
      plain: "ساده",
      doubleborder: "دو لبه",
      layered: "لایه",
      solid: "جامد",
      threedimensional: ".3D",
      contrast: "کنتراست"
    },
    colors: {
      teal: "تیل",
      blue: "آبی",
      purple: "بنفش",
      orchid: "ارکیده",
      tulip: "لاله",
      brown: "قهوه ای",
      green: "سبز"
    }
  }
};

editorLocalization.locales["fa"] = persianStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.tagbox: "Multi-Select Dropdown" => "چند انتخاب کشویی"
// ed.surveySettings: "Survey Settings" => "تنظیمات نظرسنجی"
// ed.surveySettingsTooltip: "Open survey settings" => "باز کردن تنظیمات نظرسنجی"
// ed.themeSurvey: "Themes" => "تم"
// ed.toolboxChoiceCategory: "Choice Questions" => "سوالات انتخاب"
// ed.toolboxTextCategory: "Text Input Questions" => "سوالات ورودی متن"
// ed.toolboxContainersCategory: "Containers" => "ظروف"
// ed.toolboxMatrixCategory: "Matrix Questions" => "سوالات ماتریکس"
// ed.toolboxMiscCategory: "Misc" => "متفرقه"
// ed.themePropertyGridTitle: "Theme Settings" => "تنظیمات تم"
// ed.themeExportButton: "Export" => "صادرات"
// ed.themeImportButton: "Import" => "واردات"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "انتخاب ها کپی می شوند از"
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "یک تصویر را در اینجا بکشید و رها کنید یا روی دکمه زیر کلیک کنید و تصویری را برای اپلود انتخاب کنید"
// ed.imageChooseImage: "Choose Image" => "انتخاب تصویر"
// ed.auto: "auto" => "خودکار"
// ed.choices_Item: "Item " => "مورد "
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "ارزش سوال روشن: {0}"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "قوانین منطقی ناقص هستند"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "شما برخی از قوانین منطقی را تکمیل نکرده اید. اگر اکنون برگه را ترک کنید، تغییرات از بین خواهند رفت. ایا هنوز هم می خواهید برگه را بدون تکمیل تغییرات ترک کنید؟"
// lg.uncompletedRule_apply: "Yes" => "بله"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "نه، من می خواهم قوانین را تکمیل کنم"
// pe.clear: "Clear" => "روشن"
// pe.set: "Set" => "مجموعه"
// pe.change: "Change" => "تغییر"
// pe.removeItem: "Click to remove the item..." => "فشار دهید تا مورد حذف شود..."
// pe.dragItem: "Drag the item" => "مورد را بکشید"
// pe.doneEditing: "Done" => "انجام"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "مقدار {0}» منحصر به فرد نیست"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "لطفا تعداد موارد را از {0} به {1} محدود کنید"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "شما می توانید داده ها را در قالب زیر تنظیم کنید:\nvalue1|متن\nارزش 2"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "پیش نمایش پاسخ قبل از ارسال نظرسنجی"
// pe.overridingPropertyPrefix: "Set by " => "تنظیم بر اساس "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "از کلمات رزرو شده استفاده نکنید: \"item\"، \"choice\"، \"panel\"، \"row\"."
// pe.listIsEmpty@choices: "No choices have been added yet" => "هنوز هیچ انتخابی اضافه نشده است"
// pe.addNew@choices: "Add a choice" => "اضافه کردن یک انتخاب"
// choicesbyurl.valueName: "Get values from the following JSON field" => "دریافت مقادیر از فیلد JSON زیر"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "URL های تصویر را از فیلد JSON زیر دریافت کنید"
// pe.allowEmptyResponse: "Allow empty response" => "اجازه دادن پاسخ خالی"
// pe.and: "and" => "و"
// pe.or: "or" => "یا"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "یک سؤال برای شروع پیکربندی شرایط انتخاب کنید."
// pe.if: "If" => "اگر"
// pe.then: "then" => "سپس"
// pe.setToName: "Target question" => "سوال هدف"
// pe.fromName: "Question to copy answer from" => "سوال برای کپی کردن پاسخ از"
// pe.gotoName: "Question to skip to" => "سؤال برای پرش به"
// pe.ruleIsNotSet: "Rule is incorrect" => "قانون نادرست است"
// pe.includeIntoResult: "Include into survey results" => "شامل نتایج نظرسنجی"
// pe.portraitOrientation: "Switch to portrait orientation" => "تغییر جهت به جهت تصویر"
// image.imageHeight: "Image height (in CSS-accepted values)" => "ارتفاع تصویر (در مقادیر پذیرفته شده توسط CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "عرض تصویر) در مقادیر پذیرفته شده CSS ("
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "محدودیت زمانی برای تمام کردن صفحه (به ثانیه)"
// question.page: "Parent page" => "صفحه اصلی"
// pe.noEntriesText: "Empty entries text" => "متن مدخلهای خالی"
// pe.setValue: "Answer" => "پاسخ"
// pe.dataFormat: "Image format" => "قالب تصویر"
// pe.allowAddRows: "Allow adding rows" => "اجازه اضافه کردن سطرها"
// pe.allowRemoveRows: "Allow removing rows" => "اجازه حذف سطرها"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "اجازه دادن به کشیدن و رها کردن ردیف"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "اگر عرض یا ارتفاع تصویر دقیق را مشخص کنید اعمال نمی شود."
// pe.minImageWidth: "Minimum image width" => "حداقل عرض تصویر"
// pe.maxImageWidth: "Maximum image width" => "حداکثر عرض تصویر"
// pe.minImageHeight: "Minimum image height" => "حداقل ارتفاع تصویر"
// pe.maxImageHeight: "Maximum image height" => "حداکثر ارتفاع تصویر"
// surveyvalidator.text: "Error message" => "پیام خطا"
// surveyvalidator.expression: "Validation expression" => "عبارت اعتبارسنجی"
// pe.logo: "Logo (URL or base64-encoded string)" => "لوگو (URL یا رشته کدگذاری شده base64)"
// pe.questionsOnPageMode: "Survey structure" => "ساختار نظرسنجی"
// pe.maxTextLength: "Maximum answer length (in characters)" => "حداکثر طول پاسخ (در کاراکترها)"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "حداکثر طول توضیحات (در نویسهها)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "گسترش خودکار منطقه نظر در صورت لزوم"
// pe.allowResizeComment: "Allow users to resize text areas" => "اجازه دادن به کاربران برای تغییر اندازه مناطق متن"
// pe.textUpdateMode: "Update text question value" => "بههنگامسازی مقدار سؤال متن"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "تنظیم تمرکز روی اولین پاسخ نامعتبر"
// pe.checkErrorsMode: "Run validation" => "اجرای اعتبارسنجی"
// pe.navigateToUrl: "Navigate to URL" => "حرکت به نشانی وب"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "نشانی وب پویا"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "نشانهگذاری برای نشان دادن اینکه ایا کاربر قبلا این بررسی را پر کرده است"
// pe.completedHtml: "Survey Complete page markup" => "بررسی نشانه گذاری صفحه کامل"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "بررسی دینامیکی نشانه گذاری صفحه کامل"
// pe.loadingHtml: "Markup to show while survey model is loading" => "نشانه گذاری برای نشان دادن در حالی که مدل بررسی در حال بارگذاری است"
// pe.commentText: "Comment area text" => "متن ناحیه نظر"
// pe.autocomplete: "Autocomplete type" => "نوع تکمیل خودکار"
// pe.labelTrue: "\"True\" label" => "برچسب \"True\""
// pe.labelFalse: "\"False\" label" => "برچسب \"غلط\""
// pe.allowClear: "Show the Clear button" => "نشان دادن دکمهی Clear"
// pe.displayStyle: "Value display style" => "سبک نمایش ارزش"
// pe.format: "Formatted string" => "رشتۀ قالببندی شده"
// pe.maximumFractionDigits: "Maximum fractional digits" => "بیشینه رقم کسری"
// pe.minimumFractionDigits: "Minimum fractional digits" => "حداقل رقم کسری"
// pe.useGrouping: "Display grouping separators" => "نمایش جداسازهای گروهبندی"
// pe.allowMultiple: "Allow multiple files" => "اجازه دادن به چندین پرونده"
// pe.allowImagesPreview: "Preview images" => "پیشنمایش تصاویر"
// pe.acceptedTypes: "Accepted file types" => "انواع فایل های پذیرفته شده"
// pe.waitForUpload: "Wait for the upload to complete" => "منتظر بمانید تا بارگذاری کامل شود"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "تایید حذف پرونده"
// pe.detailPanelMode: "Detail panel location" => "جزئیات محل پانل"
// pe.minRowCount: "Minimum row count" => "حداقل تعداد سطرها"
// pe.maxRowCount: "Maximum row count" => "حداکثر تعداد سطرها"
// pe.confirmDelete: "Confirm row deletion" => "تایید حذف سطر"
// pe.confirmDeleteText: "Confirmation message" => "پیام تایید"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "تایید حذف پانل"
// pe.panelCount: "Initial panel count" => "شمارش اولیه پانل"
// pe.minPanelCount: "Minimum panel count" => "حداقل تعداد پانل"
// pe.maxPanelCount: "Maximum panel count" => "حداکثر تعداد پانل"
// pe.panelsState: "Inner panel expand state" => "پانل داخلی گسترش دولت"
// pe.templateDescription: "Description template" => "قالب شرح"
// pe.templateTitle: "Title template" => "قالب عنوان"
// pe.panelPrevText: "Previous Panel button tooltip" => "قبلی دکمه پنل tooltip"
// pe.panelNextText: "Next Panel button tooltip" => "بعدی دکمه پنل tooltip"
// pe.showRangeInProgress: "Show progress bar" => "نمایش نوار پیشرفت"
// pe.templateTitleLocation: "Question title location" => "عنوان سوال محل"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "حذف محل دکمه پنل"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "مخفی کردن سؤال اگر سطری وجود نداشته باشد"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "مخفی کردن ستونها اگر سطری وجود نداشته باشد"
// pe.rateValues: "Custom rate values" => "مقادیر نرخ سفارشی"
// pe.rateCount: "Rate count" => "شمارش نرخ"
// pe.autoGenerate: "How to specify rate values?" => "چگونه مقادیر نرخ را مشخص کنیم؟"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "مخفی کردن سؤال در صورتی که هیچ انتخابی نداشته باشد"
// pe.hideNumber: "Hide question number" => "مخفی کردن شمارۀ سؤال"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "حداقل عرض (در مقادیر پذیرفته شده CSS)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "حداکثر عرض (در مقادیر پذیرفته شده CSS)"
// pe.width: "Width (in CSS-accepted values)" => "عرض (در مقادیر پذیرفته شده CSS)"
// pe.showHeader: "Show column headers" => "نمایش سرایندهای ستون"
// pe.horizontalScroll: "Show horizontal scrollbar" => "نمایش میله لغزش افقی"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "اس"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "عرض سرصفحه سطر) در مقادیر پذیرفته شده CSS ("
// pe.valueTrue: "\"True\" value" => "مقدار » درست"
// pe.valueFalse: "\"False\" value" => "مقدار » نادرست"
// pe.minErrorText: "\"Value is below minimum\" error message" => "پیام خطای \"مقدار کمتر از حداقل است\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "\"مقدار بیش از حداکثر\" پیام خطا"
// pe.otherErrorText: "\"Empty comment\" error message" => "پیام خطای \"نظر خالی\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "پیام خطای \"مقدار کلید غیر منحصر به فرد\""
// pe.minSelectedChoices: "Minimum selected choices" => "حداقل انتخاب های انتخاب شده"
// pe.maxSelectedChoices: "Maximum selected choices" => "حداکثر انتخابهای انتخاب شده"
// pe.showClearButton: "Show the Clear button" => "نشان دادن دکمهی Clear"
// pe.showNumber: "Show panel number" => "نمایش شماره پانل"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "عرض لوگو (در مقادیر پذیرفته شده CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "ارتفاع لوگو (در مقادیر پذیرفته شده CSS)"
// pe.readOnly: "Read-only" => "فقط خواندنی"
// pe.enableIf: "Editable if" => "قابل ویرایش اگر"
// pe.emptyRowsText: "\"No rows\" message" => "پیام \"بدون ردیف\""
// pe.size: "Input field size (in characters)" => "اندازه فیلد ورودی (در نویسه ها)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "انتخاب های ویژه جداگانه (هیچ کدام، دیگر، همه را انتخاب کنید)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "کپی کردن انتخابها از سؤال زیر"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "کدام گزینه ها را کپی کنید؟"
// pe.showCommentArea: "Show the comment area" => "نمایش ناحیهی نظرات"
// pe.commentPlaceholder: "Comment area placeholder" => "ذی نفع منطقه نظر"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "نمایش توضیحات نرخ به عنوان مقادیر شدید"
// pe.rowsOrder: "Row order" => "سفارش ردیف"
// pe.columnsLayout: "Column layout" => "طرحبندی ستون"
// pe.columnColCount: "Nested column count" => "تعداد ستون های تو در تو"
// pe.state: "Panel expand state" => "پنل گسترش دولت"
// pe.correctAnswer: "Correct Answer" => "پاسخ صحیح"
// pe.defaultPanelValue: "Default Values" => "مقادیر پیشفرض"
// pe.cells: "Cell Texts" => "متن سلولی"
// pe.keyName: "Key column" => "ستون کلید"
// itemvalue.text: "Alt text" => "متن دگرساز"
// tabs.expression: "Expression" => "بیان"
// pe.choicesVisibleIf: "Choices are visible if" => "انتخاب ها قابل مشاهده هستند اگر"
// pe.choicesEnableIf: "Choices are selectable if" => "انتخاب ها قابل انتخاب هستند اگر"
// pe.columnsEnableIf: "Columns are visible if" => "ستونها مرئی هستند اگر"
// pe.rowsEnableIf: "Rows are visible if" => "سطرها مرئی هستند اگر"
// pe.indent: "Add indents" => "افزودن تورفتهای"
// panel.indent: "Add outer indents" => "اضافه کردن تورفتات بیرونی"
// pe.innerIndent: "Add inner indents" => "اضافه کردن تورفتات داخلی"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "گرفتن مقادیر پیشفرض از اخرین سطر"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "گرفتن مقادیر پیشفرض از اخرین تابلو"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "عبارت را در اینجا تایپ کنید..."
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "پاک کردن مقدار اگر سؤال مخفی شود"
// pe.valuePropertyName: "Value property name" => "ارزش نام ملک"
// pe.searchEnabled: "Enable search" => "فعالسازی جستجو"
// pe.hideSelectedItems: "Hide selected items" => "مخفی کردن فقرههای انتخاب شده"
// pe.closeOnSelect: "Close the dropdown after selection" => "بستن کشویی پس از انتخاب"
// pe.signatureWidth: "Signature width" => "عرض امضا"
// pe.signatureHeight: "Signature height" => "ارتفاع امضا"
// pe.verticalAlign: "Vertical alignment" => "تراز عمودی"
// pe.alternateRows: "Alternate rows" => "ردیفهای جایگزین"
// pe.columnsVisibleIf: "Columns are visible if" => "ستونها مرئی هستند اگر"
// pe.rowsVisibleIf: "Rows are visible if" => "سطرها مرئی هستند اگر"
// pe.otherPlaceholder: "Comment area placeholder" => "ذی نفع منطقه نظر"
// pe.rateType: "Rate type" => "نوع نرخ"
// pv.true: "true" => "واقعی"
// pv.false: "false" => "نادرست"
// pv.decimal: "decimal" => "اعشاری"
// pv.currency: "currency" => "ارز"
// pv.percent: "percent" => "درصد"
// pv.onpanel: "Start on each panel" => "شروع در هر پنل"
// pv.tab: "Tabs" => "زبانه"
// pv.right: "Right" => "راست"
// pv.color: "color" => "رنگ"
// pv.date: "date" => "تاریخ"
// pv.datetime: "datetime" => "تاریخ"
// pv.datetime-local: "datetime-local" => "تاریخ محلی"
// pv.email: "email" => "ایمیل"
// pv.month: "month" => "ماه"
// pv.number: "number" => "شماره"
// pv.password: "password" => "رمز عبور"
// pv.range: "range" => "محدوده"
// pv.tel: "tel" => "تلفن"
// pv.text: "text" => "پیامک"
// pv.time: "time" => "زمان"
// pv.url: "url" => "آدرس"
// pv.week: "week" => "هفته"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "هنگامی که سوال یا پانل / صفحه ان پنهان می شود"
// clearInvisibleValues.none: "Never" => "هرگز"
// inputType.color: "Color" => "رنگ"
// inputType.date: "Date" => "تاریخ"
// inputType.datetime-local: "Date and Time" => "تاریخ و زمان"
// inputType.email: "Email" => "ایمیل"
// inputType.month: "Month" => "ماه"
// inputType.number: "Number" => "شماره"
// inputType.password: "Password" => "رمز عبور"
// inputType.range: "Range" => "محدوده"
// inputType.tel: "Phone Number" => "شماره تماس"
// inputType.text: "Text" => "پیامک"
// inputType.time: "Time" => "زمان"
// inputType.url: "URL" => "آدرس"
// inputType.week: "Week" => "هفته"
// pv.onValueChanging: "Before an answer is changed" => "قبل از اینکه پاسخ تغییر کند"
// pv.pages: "Completed pages" => "صفحات تکمیل شده"
// pv.questions: "Answered questions" => "سوالات پاسخ داده شده"
// pv.requiredQuestions: "Answered required questions" => "پاسخ به سوالات مورد نیاز"
// pv.correctQuestions: "Valid answers" => "پاسخ های معتبر"
// pv.buttons: "Completed pages (button UI)" => "صفحات تکمیل شده(دکمه UI)"
// pv.underInput: "Under the input" => "زیر ورودی"
// pv.underTitle: "Under the title" => "تحت عنوان"
// pv.onBlur: "On blur" => "در تاری"
// pv.onTyping: "While typing" => "هنگام تایپ"
// pv.underRow: "Under the row" => "زیر ردیف"
// pv.underRowSingle: "Under the row, only one panel is visible" => "در زیر ردیف، تنها یک پانل قابل مشاهده است"
// showNavigationButtons.none: "Hidden" => "پنهان"
// showProgressBar.off: "Hidden" => "پنهان"
// showTimerPanel.none: "Hidden" => "پنهان"
// showTimerPanelMode.all: "Both" => "هر دو"
// detailPanelMode.none: "Hidden" => "پنهان"
// addRowLocation.default: "Depends on matrix layout" => "بستگی به طرح ماتریس دارد"
// panelsState.default: "Users cannot expand or collapse panels" => "کاربران نمی توانند پانل ها را گسترش یا سقوط کنند"
// panelsState.collapsed: "All panels are collapsed" => "تمام پانل ها سقوط می کنند"
// panelsState.expanded: "All panels are expanded" => "تمام پانل ها گسترش یافته اند"
// widthMode.auto: "Auto" => "خودکار"
// widthMode.static: "Static" => "استاتیک"
// widthMode.responsive: "Responsive" => "پاسخگو"
// imageFit.none: "None" => "هیچ کدام"
// imageFit.contain: "Contain" => "حاوی"
// imageFit.cover: "Cover" => "پوشش"
// imageFit.fill: "Fill" => "پر کردن"
// contentMode.auto: "Auto" => "خودکار"
// contentMode.image: "Image" => "تصویر"
// contentMode.video: "Video" => "ویدئو"
// contentMode.youtube: "YouTube" => "Youtube"
// displayMode.auto: "Auto" => "خودکار"
// displayMode.buttons: "Buttons" => "دکمه"
// displayMode.dropdown: "Dropdown" => "کشویی"
// rateColorMode.default: "Default" => "پیش فرض"
// autoGenerate.true: "Generate" => "تولید"
// autoGenerate.false: "Enter manually" => "به صورت دستی وارد کنید"
// rateType.labels: "Labels" => "برچسب"
// rateType.stars: "Stars" => "ستاره"
// rateType.smileys: "Smileys" => "صورتک"
// op.and: "and" => "و"
// op.or: "or" => "یا"
// ts.hideInvisibleElements: "Hide invisible elements" => "مخفی کردن عناصر نامرئی"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "کوکی ها کاربران را از پر کردن همان نظرسنجی دو بار جلوگیری می کند."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "منطقه قابل مشاهده میدان ورودی را تغییر اندازه می دهد. لطفا از <b>تنظیم حداکثر طول → اعتبار سنجی</b> برای محدود کردن طول ورودی استفاده کنید."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "از {0} به عنوان نگهدارنده برای ارزش واقعی استفاده کنید."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "تنها زمانی قابل مشاهده است که حداقل یک ستون دارای عبارت Total type یا Total باشد."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "برای اطلاعات بیشتر به [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description مراجعه کنید."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "فقط برای انواع سلول های Radiogroup و Checkbox قابل اجرا است."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "برای اطلاعات بیشتر به شرح ویژگی [autocomplete] (https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) مراجعه کنید."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "اگر این ویژگی را تنظیم نکنید، پاسخ در زمینه ای که توسط ویژگی Name مشخص شده است ذخیره می شود."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "اگر ستون مشخص شده حاوی مقادیر یکسان باشد، نظرسنجی خطای \"مقدار کلیدی غیر منحصر به فرد\" را پرتاب می کند."
// p.multiSelect: "Allow multiple selection" => "اجازه دادن به چند گزینش"
// p.showLabel: "Show image captions" => "نمایش زیرنویسهای تصویر"
// p.value: "Value" => "ارزش"
// p.tabAlign: "Tab alignment" => "ترازبندی زبانه"
// p.logoFit: "Logo fit" => "لوگو مناسب است"
// p.pages: "Pages" => "صفحات"
// p.questions: "Questions" => "سوالات"
// p.calculatedValues: "Calculated values" => "مقادیر محاسبه شده"
// p.surveyId: "Survey id" => "شناسه نظرسنجی"
// p.surveyPostId: "Survey post id" => "شناسه نظرسنجی"
// p.surveyShowDataSaving: "Survey show data saving" => "نظرسنجی نشان می دهد صرفه جویی در داده ها"
// p.questionDescriptionLocation: "Question description location" => "توضیحات سوال محل"
// p.progressBarType: "Progress bar type" => "نوع نوار پیشرفت"
// p.showTOC: "Show TOC" => "نمایش TOC"
// p.tocLocation: "Toc location" => "محل Toc"
// p.questionTitlePattern: "Question title pattern" => "الگوی عنوان سوال"
// p.widthMode: "Width mode" => "حالت عرض"
// p.showBrandInfo: "Show brand info" => "نمایش اطلاعات برند"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "استفاده از مقادیر نمایش در متون پویا"
// p.descriptionLocation: "Description location" => "شرح محل"
// p.defaultValueExpression: "Default value expression" => "عبارت مقدار پیشفرض"
// p.bindings: "Bindings" => "پیوندها"
// p.renderAs: "Render as" => "Render به عنوان"
// p.attachOriginalItems: "Attach original items" => "پیوست موارد اصلی"
// p.cellHint: "Cell hint" => "راهنمایی سلول"
// p.isUnique: "Is unique" => "منحصر به فرد است"
// p.showInMultipleColumns: "Show in multiple columns" => "نمایش در ستونهای چندگانه"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "مجموع رقم کسری بیشینه"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "مجموع حداقل رقم کسری"
// p.detailElements: "Detail elements" => "عناصر جزئیات"
// p.allowAdaptiveActions: "Allow adaptive actions" => "اجازه دادن به کنشهای انطباقی"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "پانل جزئیات در اضافه کردن نشان می دهد"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "انتخاب بار تنبل فعال است"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "انتخاب تنبل بار اندازه صفحه"
// p.inputFieldComponent: "Input field component" => "مؤلفه فیلد ورودی"
// p.itemComponent: "Item component" => "مؤلفۀ مورد"
// p.min: "Min" => "دقیقه"
// p.max: "Max" => "حداکثر"
// p.minValueExpression: "Min value expression" => "بیان مقدار مین"
// p.maxValueExpression: "Max value expression" => "عبارت بیشینه مقدار"
// p.step: "Step" => "گام"
// p.dataList: "Data list" => "لیست داده ها"
// p.elements: "Elements" => "عناصر"
// p.content: "Content" => "محتوای"
// p.navigationTitle: "Navigation title" => "عنوان ناوش"
// p.navigationDescription: "Navigation description" => "توضیحات ناوبری"
// p.longTap: "Long tap" => "ضربه طولانی"
// p.autoGrow: "Auto grow" => "رشد خودکار"
// p.allowResize: "Allow resizing" => "اجازه دادن به تغییر اندازه"
// p.acceptCarriageReturn: "Accept carriage return" => "پذیرش بازگشت کالسکه"
// p.displayMode: "Display mode" => "حالت نمایش"
// p.rateType: "Rate type" => "نوع نرخ"
// p.contentMode: "Content mode" => "حالت محتوا"
// p.imageFit: "Image fit" => "متناسب با تصویر"
// p.altText: "Alt text" => "متن دگرساز"
// p.height: "Height" => "ارتفاع"
// p.penColor: "Pen color" => "رنگ قلم"
// p.backgroundColor: "Background color" => "رنگ پسزمینه"
// p.templateElements: "Template elements" => "عناصر قالب"
// p.operator: "Operator" => "اپراتور"
// p.isVariable: "Is variable" => "متغیر است"
// p.runExpression: "Run expression" => "اجرای عبارت"
// p.showCaption: "Show caption" => "نمایش عنوان"
// p.iconName: "Icon name" => "نام شمایل"
// p.iconSize: "Icon size" => "اندازه شمایل"
// p.precision: "Precision" => "دقت"
// p.matrixDragHandleArea: "Matrix drag handle area" => "ماتریکس منطقه دسته کشیدن"
// p.backgroundImage: "Background image" => "تصویر زمینه"
// p.backgroundImageFit: "Background image fit" => "مناسبسازی تصویر پسزمینه"
// p.backgroundImageAttachment: "Background image attachment" => "پیوست تصویر پسزمینه"
// p.backgroundOpacity: "Background opacity" => "تاری پسزمینه"
// p.selectToRankEnabled: "Select to rank enabled" => "انتخاب برای رتبه فعال"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "انتخاب برای رتبه بندی طرح مناطق"
// p.allowCameraAccess: "Allow camera access" => "اجازه دسترسی به دوربین"
// p.scaleColorMode: "Scale color mode" => "مقیاس حالت رنگ"
// p.rateColorMode: "Rate color mode" => "نرخ حالت رنگ"
// p.templateTabTitle: "Template tab title" => "عنوان زبانه قالب"
// p.templateVisibleIf: "Template visible if" => "قالب مرئی اگر"
// p.copyDisplayValue: "Copy display value" => "رونوشت مقدار نمایش"
// theme.--background: "Background color" => "رنگ پسزمینه"
// theme.--background-dim-light: "Background dim light color" => "پس زمینه رنگ نور کم"
// theme.--primary-foreground: "Primary foreground color" => "رنگ پیشزمینه اصلی"
// theme.--foreground: "Foreground color" => "رنگ پیشزمینه"
// theme.--base-unit: "Base unit" => "واحد پایه"
// theme.groupGeneral: "General" => "عمومی"
// theme.groupAdvanced: "Advanced" => "پیشرفته"
// theme.themeName: "Theme" => "تم"
// theme.themeMode: "Question appearance" => "ظاهر سوال"
// theme.themeModePanels: "Default" => "پیش فرض"
// theme.themeModeLightweight: "Without Panels" => "بدون پانل"
// theme.themePaletteLight: "Light" => "نور"
// theme.themePaletteDark: "Dark" => "تاریک"
// theme.primaryColor: "Accent color" => "رنگ لهجه"
// theme.primaryDefaultColor: "Default" => "پیش فرض"
// theme.primaryDarkColor: "Hover" => "شناور"
// theme.primaryLightColor: "Selected" => "انتخاب"
// theme.backgroundDimColor: "Background color" => "رنگ پسزمینه"
// theme.backgroundImage: "Background image" => "تصویر زمینه"
// theme.backgroundImageFitAuto: "Auto" => "خودکار"
// theme.backgroundImageFitCover: "Cover" => "پوشش"
// theme.backgroundImageFitContain: "Contain" => "حاوی"
// theme.backgroundOpacity: "Opacity" => "کدورت"
// theme.backgroundImageAttachmentFixed: "Fixed" => "ثابت"
// theme.backgroundImageAttachmentScroll: "Scroll" => "حرکت"
// theme.panelBackgroundTransparency: "Panel background opacity" => "تاری پسزمینه پانل"
// theme.questionBackgroundTransparency: "Question background opacity" => "تاری پسزمینۀ سؤال"
// theme.questionPanel: "Panel background and corner radius" => "پس زمینه پنل و شعاع گوشه"
// theme.questionTitle: "Question title font" => "قلم عنوان پرسش"
// theme.questionDescription: "Question description font" => "قلم شرح سؤال"
// theme.editorPanel: "Input element" => "عنصر ورودی"
// theme.editorFont: "Input element font" => "قلم عنصر ورودی"
// theme.backcolor: "Default background" => "پسزمینۀ پیشفرض"
// theme.hovercolor: "Hover background" => "پسزمینه شناور"
// theme.borderDecoration: "Border decoration" => "دکوراسیون مرزی"
// theme.accentBackground: "Accent background" => "پسزمینۀ لهجه"
// theme.accentForeground: "Accent foreground" => "پیشزمینه لهجه"
// theme.primaryForecolor: "Default color" => "رنگ پیشفرض"
// theme.primaryForecolorLight: "Disabled color" => "رنگ غیرفعال"
// theme.linesColors: "Minor line colors" => "رنگهای خط فرعی"
// theme.borderDefault: "Darker" => "تیره تر"
// theme.borderLight: "Lighter" => "سبکتر"
// theme.fontFamily: "Font family" => "خانواده قلم"
// theme.fontSize: "Font size" => "اندازه قلم"
// theme.color: "Color" => "رنگ"
// theme.size: "Size" => "اندازه"
// theme.fontWeightRegular: "Regular" => "منظم"
// theme.fontWeightHeavy: "Heavy" => "سنگین"
// theme.fontWeightSemiBold: "Semi-bold" => "نیمه جسورانه"
// theme.fontWeightBold: "Bold" => "جسورانه"
// theme.scale: "Scale" => "مقیاس"
// theme.cornerRadius: "Corner radius" => "شعاع گوشه"
// theme.surveyTitle: "Survey title font" => "قلم عنوان نظرسنجی"
// theme.pageTitle: "Page title font" => "قلم عنوان صفحه"
// theme.pageDescription: "Page description font" => "قلم توصیف صفحه"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "افزودن جلوهی سایه"
// theme.opacity: "Opacity" => "کدورت"
// theme.boxShadowBlur: "Blur" => "تیرگی"
// theme.boxShadowSpread: "Spread" => "گسترش"
// theme.boxShadowDrop: "Drop" => "قطره"
// theme.boxShadowInner: "Inner" => "درونی"
// theme.questionShadow: "Shadow effects" => "جلوه های سایه"
// theme.editorShadow: "Input element shadow effects" => "عناصر ورودی اثرات سایه"
// names.default: "Default" => "پیش فرض"
// names.contrast: "Contrast" => "کنتراست"
// names.plain: "Plain" => "ساده"
// names.simple: "Simple" => "ساده"
// names.blank: "Blank" => "خالی"
// names.double: "Double" => "دو"
// names.bulk: "Bulk" => "فله"
// names.pseudo-3d: "Pseudo 3D" => "شبه 3D"
// names.playful: "Playful" => "بازیگوش"
// names.ultra: "Ultra" => "فوق العاده"
// colors.teal: "Teal" => "تیل"
// colors.blue: "Blue" => "آبی"
// colors.purple: "Purple" => "بنفش"
// colors.orchid: "Orchid" => "ارکیده"
// colors.tulip: "Tulip" => "لاله"
// colors.brown: "Brown" => "قهوه ای"
// colors.green: "Green" => "سبز"
// names.sharp: "Sharp" => "تیز"
// names.borderless: "Borderless" => "مرز"
// names.flat: "Flat" => "تخت"
// names.doubleborder: "Double Border" => "دو لبه"
// names.layered: "Layered" => "لایه"
// names.solid: "Solid" => "جامد"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "ایا مطمئن هستید که می خواهید تمام رشته ها را برای این زبان حذف کنید؟"
// ed.themeResetButton: "Reset theme settings to default" => "بازنشانی تنظیمات تم به حالت پیشفرض"
// theme.placeholderColor: "Placeholder color" => "رنگ نگهدارنده"
// ed.themeSettings: "Theme Settings" => "تنظیمات تم"
// ed.themeSettingsTooltip: "Open theme settings" => "باز کردن تنظیمات تم"
// pe.resetToDefaultCaption: "Reset" => "تنظیم مجدد"
// pv.file: "Local files" => "پروندههای محلی"
// pv.camera: "Camera" => "دوربین"
// pv.file-camera: "Local files or camera" => "فایل های محلی یا دوربین"
// ed.translateUsigAI: "Auto-translate All" => "ترجمه خودکار همه"
// ed.translationDialogTitle: "Untranslated strings" => "رشتههای ترجمهنشده"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "لطفا حداقل {0} مورد را وارد کنید"
// lg.question_resetValueName: "Reset question value" => "بازنشانی مقدار سؤال"
// lg.column_resetValue: "Reset column value" => "بازنشانی مقدار ستون"
// pe.markRequired: "Mark as required" => "علامت گذاری به عنوان مورد نیاز"
// pe.removeRequiredMark: "Remove the required mark" => "حذف علامت مورد نیاز"
// p.resetValueIf: "Reset value if" => "بازنشانی مقدار اگر"
// lg.question_setValueName: "Set question value" => "تنظیم مقدار سؤال"
// lg.column_resetValueName: "Reset column value" => "بازنشانی مقدار ستون"
// lg.column_setValueName: "Set column value" => "تنظیم مقدار ستون"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " یک عبارت که نتیجه ان به سوال هدف اختصاص داده خواهد شد."
// survey.title: "Title" => "عنوان"
// page.title: "Title" => "عنوان"
// p.setValueIf: "Set value if" => "تنظیم مقدار اگر"
// theme.groupHeader: "Header" => "هدر"
// theme.coverTitleForecolor: "Title forecolor" => "پیش زمینه عنوانcolor"
// theme.coverOverlapEnabled: "Overlap" => "همپوشانی"
// theme.backgroundImageFitFill: "Stretch" => "کشش"
// theme.backgroundImageFitTile: "Tile" => "کاشی"
// theme.headerView: "View" => "مشاهده"
// theme.headerViewBasic: "Basic" => "اساسی"
// theme.headerViewAdvanced: "Advanced" => "پیشرفته"
// theme.coverInheritWidthFrom: "Content area width" => "عرض منطقه محتوا"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "همانند نظرسنجی"
// theme.coverInheritWidthFromPage: "Fit to page" => "متناسب با صفحه"
// theme.coverTextAreaWidth: "Text width" => "عرض متن"
// theme.coverBackgroundColorSwitch: "Background color" => "رنگ پسزمینه"
// theme.coverBackgroundColorNone: "None" => "هیچ کدام"
// theme.coverBackgroundColorAccentColor: "Accent color" => "رنگ لهجه"
// theme.coverBackgroundColorCustom: "Custom" => "سفارشی"
// theme.horizontalAlignmentLeft: "Left" => "چپ"
// theme.horizontalAlignmentCenter: "Center" => "مرکز"
// theme.horizontalAlignmentRight: "Right" => "راست"
// theme.verticalAlignmentTop: "Top" => "بالا"
// theme.verticalAlignmentMiddle: "Middle" => "میانه"
// theme.verticalAlignmentBottom: "Bottom" => "پایین"
// lg.question_resetValueText: "reset value for question: {0}" => "بازنشانی مقدار برای سوال: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "اختصاص مقدار: {1} به سوال: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "تنظیم مجدد مقدار سلول برای ستون: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "اختصاص مقدار سلول: {1} به ستون: {0}"
// ed.surveyJsonExportButton: "Export" => "صادرات"
// ed.surveyJsonImportButton: "Import" => "واردات"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "رونوشت در تخته یادداشت"
// pe.filePlaceholder: "File placeholder text" => "متن نگهدارنده پرونده"
// pe.photoPlaceholder: "Photo placeholder text" => "متن نگهدارنده عکس"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "متن جایدار پرونده یا عکس"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "اعمال می شود زمانی که \"نوع منبع\" است \"فایل های محلی\" و یا زمانی که دوربین در دسترس نیست"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "هنگامی که \"نوع منبع\" \"دوربین\" است، اعمال می شود."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "زمانی اعمال می شود که \"نوع منبع\" \"فایل های محلی یا دوربین\" باشد."
// theme.groupBackground: "Background" => "پس زمینه"
// theme.groupAppearance: "Appearance" => "ظاهر"
// theme.coverDescriptionForecolor: "Description forecolor" => "توصیف پیشرنگ"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "ایا واقعا می خواهید موضوع را دوباره تنظیم کنید؟ تمام سفارشی سازی های شما از دست خواهد رفت."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "بله، موضوع را تنظیم مجدد کنید"
// theme.groupBackground: "Background" => "پس زمینه"
// theme.groupAppearance: "Appearance" => "ظاهر"
// theme.coverDescriptionForecolor: "Description forecolor" => "توصیف پیشرنگ"
// theme.coverInheritWidthFromContainer: "Fit to container" => "مناسب برای ظرف"
// signaturepad.showPlaceholder: "Show the placeholder" => "نشان دادن نگهدارندهی مکان"
// signaturepad.placeholder: "Placeholder text" => "متن ذی نفع"
// theme.surveyDescription: "Survey description font" => "قلم توصیف نظرسنجی"

// ed.prevFocus: "Focus previous" => "تمرکز قبلی"
// ed.nextFocus: "Focus next" => "تمرکز بعدی"
// ed.saveTheme: "Save Theme" => "ذخیرۀ تم"
// ed.saveThemeTooltip: "Save Theme" => "ذخیرۀ تم"
// lg.page_requireName: "Make page required" => "ایجاد صفحه مورد نیاز است"
// lg.panel_requireName: "Make page required" => "ایجاد صفحه مورد نیاز است"
// signaturepad.signatureWidth: "Signature area width" => "عرض منطقه امضا"
// signaturepad.signatureHeight: "Signature area height" => "ارتفاع منطقه امضا"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "مقیاس خودکار منطقه امضا"
// signaturepad.penMinWidth: "Minimum pen width" => "حداقل عرض قلم"
// signaturepad.penMaxWidth: "Maximum pen width" => "حداکثر عرض قلم"
// theme.logoPosition: "Logo position" => "موقعیت لوگو"
// theme.coverTitlePosition: "Title position" => "موقعیت عنوان"
// theme.coverDescriptionPosition: "Description position" => "شرح موقعیت"
// ed.propertyGridNoResultsFound: "No results found" => "نتیجه ای یافت نشد"
// pv.leftRight: "Left and right" => "چپ و راست"
// p.sourceType: "Source type" => "نوع منبع"
// p.fitToContainer: "Fit to container" => "مناسب برای ظرف"
// p.setValueExpression: "Set value expression" => "تنظیم عبارت مقدار"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "انتخاب ها از یک سرویس وب بارگذاری می شوند."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "رفتن به تنظیمات"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "پیش نمایش گزینه های انتخاب بار شده"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "جلوگیری از پاسخ های تکراری در ردیف ها"
// theme.advancedMode: "Advanced mode" => "حالت پیشرفته"
// theme.backgroundCornerRadius: "Background and corner radius" => "پس زمینه و شعاع گوشه"
// theme.colorsTitle: "Colors" => "رنگ"
// theme.font: "Font" => "فونت"
// theme.lines: "Lines" => "خطوط"
// theme.titleFont: "Title font" => "قلم عنوان"
// theme.descriptionFont: "Description font" => "قلم توصیف"
// theme.shadow: "Shadow effects" => "جلوه های سایه"