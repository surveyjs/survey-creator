import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "آزمایش نظرسنجی",
    theme: "تم",
    translation: "ترجمه",
    designer: "طراح نظرسنجی",
    json: "ویرایشگر JSON",
    logic: "منطق نظرسنجی"
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
  toolboxCategories: {
    general: "عمومی",
    choice: "سوالات انتخاب",
    text: "سوالات ورودی متن",
    containers: "ظروف",
    matrix: "سوالات ماتریکس",
    misc: "متفرقه"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "پیش فرض ({0})",
    survey: "نظرسنجی",
    settings: "تنظیمات نظرسنجی",
    settingsTooltip: "باز کردن تنظیمات نظرسنجی",
    surveySettings: "تنظیمات نظرسنجی",
    surveySettingsTooltip: "تنظیمات نظرسنجی",
    themeSettings: "تنظیمات تم",
    themeSettingsTooltip: "تنظیمات تم",
    creatorSettingTitle: "تنظیمات سازنده",
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
    defaultV2Theme: "پیش فرض",
    modernTheme: "مدرن",
    defaultTheme: "پیش فرض (legacy)",
    testSurveyAgain: "آزمایش دوباره نظرسنجی",
    testSurveyWidth: "عرض نظرسنجی: ",
    navigateToMsg: "شما باید به موارد زیر بروید:",
    saveSurvey: "ذخیره نظرسنجی",
    saveSurveyTooltip: "ذخیره نظرسنجی",
    saveTheme: "ذخیرۀ تم",
    saveThemeTooltip: "ذخیرۀ تم",
    jsonHideErrors: "پنهان کردن خطاها",
    jsonShowErrors: "نمایش خطاها",
    undo: "بازگردانی",
    redo: "بازانجام",
    undoTooltip: "بازگرداندن آخرین تغییر",
    redoTooltip: "انجام دادن تغییر",
    expandTooltip: "گسترش",
    collapseTooltip: "سقوط",
    expandAllTooltip: "گسترش همه",
    collapseAllTooltip: "جمع کردن همه",
    zoomInTooltip: "بزرگنمایی",
    zoom100Tooltip: "بزرگنمایی تا 100٪",
    zoomOutTooltip: "کوچک نمایی",
    lockQuestionsTooltip: "قفل کردن وضعیت expand/collapse برای سوالات",
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
    toolboxFilteredTextPlaceholder: "تایپ برای جستجو...",
    toolboxNoResultsFound: "نتیجه ای یافت نشد",
    propertyGridFilteredTextPlaceholder: "جستجو...",
    propertyGridNoResultsFound: "نتیجه ای یافت نشد",
    propertyGridPlaceholderTitle: "شروع به پیکربندی فرم خود کنید",
    propertyGridPlaceholderDescription: "برای کاوش در تنظیمات نظرسنجی، روی هر نماد دسته کلیک کنید. پس از افزودن یک عنصر نظرسنجی به سطح طراحی، تنظیمات اضافی در دسترس خواهند بود.",
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
    addLanguageTooltip: "افزودن زبان",
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
    translateUsigAIFrom: "ترجمه از: ",
    translationDialogTitle: "رشتههای ترجمهنشده",
    translationMergeLocaleWithDefault: "ادغام {0} با زبان پیش فرض",
    translationPlaceHolder: "در حال ترجمه...",
    translationSource: "منبع: ",
    translationTarget: "هدف: ",
    translationYouTubeNotSupported: "پیوندهای YouTube پشتیبانی نمی شوند.",
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
    pagePlaceHolder: "صفحه خالی است. یک عنصر را از جعبه ابزار بکشید یا روی دکمه زیر کلیک کنید.",
    imagePlaceHolder: "یک تصویر را در اینجا بکشید و رها کنید یا روی دکمه زیر کلیک کنید و تصویری را برای اپلود انتخاب کنید",
    surveyPlaceHolderMobile: "روی دکمه \"افزودن سؤال\" در زیر کلیک کنید تا شروع به ایجاد فرم خود کنید.",
    surveyPlaceholderTitle: "فرم شما خالی است",
    surveyPlaceholderTitleMobile: "فرم شما خالی است",
    surveyPlaceholderDescription: "یک عنصر را از جعبه ابزار بکشید یا روی دکمه زیر کلیک کنید.",
    surveyPlaceholderDescriptionMobile: "یک عنصر را از جعبه ابزار بکشید یا روی دکمه زیر کلیک کنید.",
    previewPlaceholderTitle: "بدون پیش نمایش",
    previewPlaceholderTitleMobile: "بدون پیش نمایش",
    previewPlaceholderDescription: "این نظرسنجی حاوی هیچ عنصر قابل مشاهده ای نیست.",
    previewPlaceholderDescriptionMobile: "این نظرسنجی حاوی هیچ عنصر قابل مشاهده ای نیست.",
    translationsPlaceholderTitle: "بدون رشته برای ترجمه",
    translationsPlaceholderTitleMobile: "بدون رشته برای ترجمه",
    translationsPlaceholderDescription: "عناصر را به فرم خود اضافه کنید یا فیلتر رشته ها را در نوار ابزار تغییر دهید.",
    translationsPlaceholderDescriptionMobile: "عناصر را به فرم خود اضافه کنید یا فیلتر رشته ها را در نوار ابزار تغییر دهید.",
    pagePlaceHolderMobile: "روی دکمه \"افزودن سؤال\" در زیر کلیک کنید تا عنصر جدیدی به صفحه اضافه شود.",
    panelPlaceHolderMobile: "روی دکمه \"افزودن سؤال\" در زیر کلیک کنید تا یک عنصر جدید به پانل اضافه شود.",
    imagePlaceHolderMobile: "روی دکمه زیر کلیک کنید و تصویری را برای اپلود انتخاب کنید",
    imageChooseImage: "انتخاب تصویر",
    addNewTypeQuestion: "اضافه {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[لوگو]",
    choices_Item: "مورد ",
    selectFile: "یک پرونده انتخاب کنید",
    removeFile: "حذف پرونده",
    lg: {
      addNewItem: "اضافه کردن آیتم جدید",
      empty_tab: "یک آیتم را برای سفارشی کردن جریان نظرسنجی انتخاب کنید",
      logicPlaceholderTitle: "بدون قوانین منطقی",
      logicPlaceholderTitleMobile: "بدون قوانین منطقی",
      logicPlaceholderDescription: "یک قانون برای سفارشی کردن جریان نظرسنجی ایجاد کنید.",
      logicPlaceholderDescriptionMobile: "یک قانون برای سفارشی کردن جریان نظرسنجی ایجاد کنید.",
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
      question_resetValueText: "بازنشانی مقدار برای سوال: {0}", //{0} question name.
      question_setValueText: "اختصاص مقدار: {1} به سوال: {0}",
      column_visibilityText: "ستون {0} سوال {1} را قابل مشاهده کنید", //{0} column name, {1} question name
      column_enableText: "ستون {0} سوال {1} را فعال کنید", //{0} column name, {1} question name
      column_requireText: "ستون {0} سوال {1} را الزامی کنید", //{0} column name, {1} question name
      column_resetValueText: "تنظیم مجدد مقدار سلول برای ستون: {0}", //{0} column name
      column_setValueText: "اختصاص مقدار سلول: {1} به ستون: {0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "نام تابلو",
      title: "عنوان پنل",
      description: "توضیحات پنل",
      visibleIf: "تابلو را مرئی کنید اگر",
      requiredIf: "ایجاد پنل مورد نیاز اگر",
      questionOrder: "سفارش سوال در داخل پنل",
      page: "صفحه اصلی",
      startWithNewLine: "نمایش تابلو در یک خط جدید",
      state: "دولت فروپاشی پانل",
      width: "عرض پانل درون خطی",
      minWidth: "حداقل عرض پانل",
      maxWidth: "حداکثر عرض پانل",
      showNumber: "شماره گذاری این پانل"
    },
    panellayoutcolumn: {
      effectiveWidth: "عرض موثر، ٪",
      questionTitleWidth: "عرض عنوان سوال، px"
    },
    paneldynamic: {
      name: "نام تابلو",
      title: "عنوان پنل",
      description: "توضیحات پنل",
      visibleIf: "تابلو را مرئی کنید اگر",
      requiredIf: "ایجاد پنل مورد نیاز اگر",
      page: "جابهجایی تابلو به صفحه",
      startWithNewLine: "نمایش تابلو در یک خط جدید",
      state: "دولت فروپاشی پانل",
      width: "عرض پانل درون خطی",
      minWidth: "حداقل عرض پانل",
      maxWidth: "حداکثر عرض پانل",
      confirmDelete: "تایید حذف پانل",
      templateDescription: "الگوی توصیف پنل",
      templateTitle: "الگوی عنوان پنل",
      noEntriesText: "متن تابلوی خالی",
      templateTabTitle: "الگوی عنوان زبانه",
      tabTitlePlaceholder: "ذی نفع عنوان تب",
      templateVisibleIf: "ایجاد یک پنل منفرد مرئی اگر",
      showNumber: "شماره گذاری پانل",
      titleLocation: "ترازبندی عنوان پنل",
      descriptionLocation: "ترازبندی توضیحات پنل",
      templateQuestionTitleLocation: "هم ترازی عنوان پرسش",
      templateQuestionTitleWidth: "عرض عنوان سوال",
      templateErrorLocation: "همترازسازی پیام خطا",
      newPanelPosition: "محل جدید پنل",
      showRangeInProgress: "نمایش نوار پیشرفت",
      keyName: "جلوگیری از پاسخ های تکراری در سوال زیر"
    },
    question: {
      name: "نام سوال",
      title: "عنوان سوال",
      description: "توضیحات سوال",
      visibleIf: "سؤال را قابل مشاهده کنید اگر",
      requiredIf: "سؤال مورد نیاز را مطرح کنید اگر",
      page: "صفحه اصلی",
      state: "جعبه سوال دولت فروپاشی",
      showNumber: "این سوال را شماره گذاری کنید",
      titleLocation: "هم ترازی عنوان پرسش",
      descriptionLocation: "هم ترازی توضیحات سؤال",
      errorLocation: "همترازسازی پیام خطا",
      indent: "افزایش تورفتگی داخلی",
      width: "عرض پرسش درون خطی",
      minWidth: "حداقل عرض سوال",
      maxWidth: "حداکثر عرض سؤال",
      textUpdateMode: "بهروزرسانی مقدار فیلد ورودی"
    },
    signaturepad: {
      signatureWidth: "عرض منطقه امضا",
      signatureHeight: "ارتفاع منطقه امضا",
      signatureAutoScaleEnabled: "مقیاس خودکار منطقه امضا",
      showPlaceholder: "نشان دادن نگهدارندهی مکان",
      placeholder: "متن ذی نفع",
      placeholderReadOnly: "متن نگهدارنده در حالت فقط خواندنی یا پیشنمایش",
      allowClear: "نمایش دکمه پاک کردن در منطقه امضا",
      penMinWidth: "حداقل عرض قلم",
      penMaxWidth: "حداکثر عرض قلم",
      penColor: "رنگ سکته مغزی"
    },
    comment: {
      rows: "ارتفاع میدان ورودی (در خطوط)"
    },
    showQuestionNumbers: "نمایش شماره های سوالات",
    questionStartIndex: "نمایه شروع سوالات (۱،۲ یا a و b)",
    expression: {
      name: "نام عبارت",
      title: "عنوان عبارت",
      description: "توصیف عبارت",
      expression: "بیان"
    },
    trigger: {
      expression: "بیان"
    },
    calculatedvalue: {
      expression: "بیان"
    },
    // survey templates
    survey: {
      title: "عنوان",
      description: "توضیحات نظرسنجی",
      readOnly: "نظرسنجی را فقط خواندنی کنید"
    },
    page: {
      name: "نام صفحه",
      title: "عنوان",
      description: "توضیحات صفحه",
      visibleIf: "صفحه را مرئی کنید اگر",
      requiredIf: "ایجاد صفحه مورد نیاز اگر",
      timeLimit: "محدودیت زمانی برای تمام کردن صفحه (به ثانیه)",
      questionOrder: "سفارش سوال در صفحه"
    },
    matrixdropdowncolumn: {
      name: "نام ستون",
      title: "عنوان ستون",
      isUnique: "جلوگیری از پاسخ های تکراری",
      width: "عرض ستون",
      minWidth: "حداقل عرض ستون",
      rows: "ارتفاع میدان ورودی (در خطوط)",
      visibleIf: "ستون را مرئی کنید اگر",
      requiredIf: "ایجاد ستون مورد نیاز اگر",
      showInMultipleColumns: "هر گزینه در یک ستون جداگانه"
    },
    multipletextitem: {
      name: "نام",
      title: "عنوان"
    },
    masksettings: {
      saveMaskedValue: "ذخیره مقدار ماسک در نتایج نظرسنجی"
    },
    patternmask: {
      pattern: "الگوی ارزش"
    },
    datetimemask: {
      min: "حداقل مقدار",
      max: "بیشینه مقدار"
    },
    numericmask: {
      allowNegativeValues: "اجازه دادن مقادیر منفی",
      thousandsSeparator: "هزار جداکننده",
      decimalSeparator: "جداساز دهدهی",
      precision: "دقت ارزش",
      min: "حداقل مقدار",
      max: "بیشینه مقدار"
    },
    currencymask: {
      prefix: "پیشوند ارز",
      suffix: "پسوند ارز"
    },
    imageHeight: "ارتفاع تصویر",
    imageWidth: "عرض تصویر",
    valueName: "نام مقدار",
    defaultDisplayValue: "مقدار نمایش پیش فرض برای متون پویا",
    rateDescriptionLocation: "تراز برچسب",
    size: "اندازه فیلد ورودی (در نویسه ها)",
    cellErrorLocation: "همراستاسازی پیام خطای سلولی",
    enabled: "فعال",
    disabled: "غیر فعال",
    inherit: "به ارث ببرید",
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
    "listIsEmpty@columns": "شما هنوز هیچ ستونی ندارید",
    "listIsEmpty@gridLayoutColumns": "شما هنوز ستون های طرح بندی ندارید",
    "listIsEmpty@rows": "شما هنوز هیچ ردیفی ندارید",
    "listIsEmpty@validators": "شما هنوز هیچ قانون اعتبار سنجی ندارید",
    "listIsEmpty@calculatedValues": "شما هنوز هیچ متغیر سفارشی ندارید",
    "listIsEmpty@triggers": "شما هنوز هیچ محرکی ندارید",
    "listIsEmpty@navigateToUrlOnCondition": "شما هنوز هیچ لینکی ندارید",
    "listIsEmpty@pages": "شما هنوز هیچ صفحه ای ندارید",
    "addNew@choices": "اضافه کردن یک انتخاب",
    "addNew@columns": "افزودن ستون جدید",
    "addNew@rows": "افزودن سطر جدید",
    "addNew@validators": "افزودن قانون جدید",
    "addNew@calculatedValues": "افزودن متغیر جدید",
    "addNew@triggers": "افزودن ماشه جدید",
    "addNew@navigateToUrlOnCondition": "افزودن نشانی وب جدید",
    "addNew@pages": "افزودن صفحه جدید",
    expressionIsEmpty: "عبارت خالی است",
    value: "مقدار",
    text: "متن",
    rowid: "شناسه ی سطر",
    imageLink: "لینک تصویر",
    columnEdit: "ویرایش ستون: {0}",
    itemEdit: "ویرایش آیتم: {0}",
    url: "آدرس وب سایت(url)",
    path: "آدرس",
    choicesbyurl: {
      url: "نشانی وب سرویس",
      valueName: "دریافت مقادیر از فیلد JSON زیر"
    },
    titleName: "نام عنوان",
    imageLinkName: "URL های تصویر را از فیلد JSON زیر دریافت کنید",
    allowEmptyResponse: "اجازه دادن پاسخ خالی",
    titlePlaceholder: "عنوان را اینجا وارد کنید",
    surveyTitlePlaceholder: "عنوان نظرسنجی را اینجا وارد کنید",
    pageTitlePlaceholder: "عنوان صفحه را اینجا وارد کنید",
    startPageTitlePlaceholder: "صفحه شروع",
    descriptionPlaceholder: "توضیحات را وارد کنید",
    surveyDescriptionPlaceholder: "توضیحات نظرسنجی را وارد کنید",
    pageDescriptionPlaceholder: "توضیحات صفحه را وارد کنید",
    textWrapEnabled: "انتخاب های بسته بندی",
    showOtherItem: "دارای آیتم دیگر",
    otherText: "سایر آیتم های متن",
    showNoneItem: "هیچ آیتمی ندارد",
    showRefuseItem: "اجازه دهید گزینه امتناع از پاسخ",
    showDontKnowItem: "گزینه Don't Know را انتخاب کنید",
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
    allowCustomChoices: "اجازه دادن به انتخاب های سفارشی",
    visible: "نمایش داده شود؟",
    isRequired: "ضروری است؟",
    markRequired: "علامت گذاری به عنوان مورد نیاز",
    removeRequiredMark: "حذف علامت مورد نیاز",
    eachRowRequired: "نیاز به پاسخ برای همه سطرها",
    eachRowUnique: "جلوگیری از پاسخ های تکراری در ردیف ها",
    requiredErrorText: "متن خطای موردنیاز",
    startWithNewLine: "با سطر جدید شروع شود؟",
    rows: "تعداد سطر",
    cols: "تعداد ستون",
    placeholder: "نگهدارنده متن",
    showPreview: "پیش نمایش تصویر نشان داده شود؟",
    storeDataAsText: "ذخیره کردن محتوای فایل در JSON به عنوان متن",
    maxSize: "حداکثر سایز به بایت",
    rowCount: "تعداد سطر",
    columnLayout: "قالب ستون ها",
    addRowButtonLocation: "اضافه کردن موقعیت دکمه سطری",
    transposeData: "جابهجا کردن سطرها به ستونها",
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
    clearInvisibleValues: "پاکسازی مقادیر پنهان",
    cookieName: "نام کوکی (به منظور جلوگیری از اجرای دوباره نظرسنجی)",
    partialSendEnabled: "ارسال نتایج نظرسنجی در صفحه بعدی",
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
    navigationButtonsLocation: "تراز کردن دکمه های ناوبری",
    showPrevButton: "نمایش دکمه قبلی (کاربر ممکن است به صفحه قبل برگردد)",
    firstPageIsStartPage: "صفحه اول در نظرسنجی نقطه آغازین آن است.",
    showCompletePage: "نمایش صفحه اتمام نظرسنجی در پایان (completedHtml)",
    autoAdvanceEnabled: "با پاسخگویی به تمام سوالات، به صورت اتوماتیک به صفحه بعد برود",
    autoAdvanceAllowComplete: "بررسی را به طور خودکار تکمیل کنید",
    showProgressBar: "نمایش نشانگر پیشرفت",
    progressBarLocation: "تراز نوار پیشرفت",
    questionTitleLocation: "محل عنوان سوال",
    questionTitleWidth: "عرض عنوان سوال",
    requiredMark: "سوالات نشان دار اجباری هستند",
    questionTitleTemplate: "قالب عنوان سوال، به صورت پیش فرض: '{no}. {require} {title}'",
    questionErrorLocation: "محل خطای سوال",
    autoFocusFirstQuestion: "تمرکز بر روی اولین سوال با تغییر صفحه",
    questionOrder: "ترتیب المان ها در صفحه",
    timeLimit: "نهایت زمان برای اتمام نظرسنجی",
    timeLimitPerPage: "نهایت زمان برای اتمام این صفحه نظرسنجی",
    showTimer: "از تایمر استفاده کنید",
    timerLocation: "نمایش پنل زمان سنج",
    timerInfoMode: "نمایش حالت پنل زمان سنج",
    renderMode: "حالت رندر",
    allowAddPanel: "اجازه افزودن پنل",
    allowRemovePanel: "اجازه حذف پنل",
    addPanelText: "متن افزودن پنل",
    removePanelText: "متن حذف پنل",
    isSinglePage: "نمایش تمام المان ها در یک صفحه",
    html: "Html",
    setValue: "پاسخ",
    dataFormat: "قالب تصویر",
    allowAddRows: "اجازه اضافه کردن سطرها",
    allowRemoveRows: "اجازه حذف سطرها",
    allowRowReorder: "اجازه دادن به کشیدن و رها کردن ردیف",
    responsiveImageSizeHelp: "اگر عرض یا ارتفاع تصویر دقیق را مشخص کنید اعمال نمی شود.",
    minImageWidth: "حداقل عرض تصویر",
    maxImageWidth: "حداکثر عرض تصویر",
    minImageHeight: "حداقل ارتفاع تصویر",
    maxImageHeight: "حداکثر ارتفاع تصویر",
    minValue: "حداقل مقدار",
    maxValue: "حداکثر مقدار",
    caseInsensitive: "غیر حساس به حروف بزرگ",
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
    maxCommentLength: "حداکثر طول توضیحات (در نویسهها)",
    commentAreaRows: "ارتفاع منطقه نظر (در خطوط)",
    autoGrowComment: "گسترش خودکار منطقه نظر در صورت لزوم",
    allowResizeComment: "اجازه دادن به کاربران برای تغییر اندازه مناطق متن",
    textUpdateMode: "بههنگامسازی مقدار سؤال متن",
    maskType: "نوع ماسک ورودی",
    autoFocusFirstError: "تنظیم تمرکز روی اولین پاسخ نامعتبر",
    checkErrorsMode: "اجرای اعتبارسنجی",
    validateVisitedEmptyFields: "اعتبارسنجی فیلدهای خالی در فوکوس از دست رفته",
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
    searchMode: "حالت جستجو",
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
    panelCount: "شمارش اولیه پانل",
    minPanelCount: "حداقل تعداد پانل",
    maxPanelCount: "حداکثر تعداد پانل",
    panelsState: "پانل داخلی گسترش دولت",
    prevPanelText: "قبلی دکمه پنل tooltip",
    nextPanelText: "بعدی دکمه پنل tooltip",
    removePanelButtonLocation: "حذف محل دکمه پنل",
    hideIfRowsEmpty: "مخفی کردن سؤال اگر سطری وجود نداشته باشد",
    hideColumnsIfEmpty: "مخفی کردن ستونها اگر سطری وجود نداشته باشد",
    rateValues: "مقادیر نرخ سفارشی",
    rateCount: "شمارش نرخ",
    autoGenerate: "چگونه مقادیر نرخ را مشخص کنیم؟",
    hideIfChoicesEmpty: "مخفی کردن سؤال در صورتی که هیچ انتخابی نداشته باشد",
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
    logoWidth: "عرض لوگو (در مقادیر پذیرفته شده CSS)",
    logoHeight: "ارتفاع لوگو (در مقادیر پذیرفته شده CSS)",
    readOnly: "فقط خواندنی",
    enableIf: "قابل ویرایش اگر",
    noRowsText: "پیام \"بدون ردیف\"",
    separateSpecialChoices: "انتخاب های ویژه جداگانه (هیچ کدام، دیگر، همه را انتخاب کنید)",
    choicesFromQuestion: "کپی کردن انتخابها از سؤال زیر",
    choicesFromQuestionMode: "کدام گزینه ها را کپی کنید؟",
    choiceValuesFromQuestion: "از مقادیر ستون ماتریس یا سوال پانل زیر به عنوان شناسه های انتخاب استفاده کنید.",
    choiceTextsFromQuestion: "از مقادیر ستون ماتریس یا سوال پانل زیر به عنوان متن انتخابی استفاده کنید",
    progressBarShowPageTitles: "نمایش عناوین صفحه در نوار پیشرفت",
    progressBarShowPageNumbers: "نمایش شمارههای صفحه در نوار پیشرفت",
    showCommentArea: "نمایش ناحیهی نظرات",
    commentPlaceholder: "ذی نفع منطقه نظر",
    displayRateDescriptionsAsExtremeItems: "نمایش توضیحات نرخ به عنوان مقادیر شدید",
    rowOrder: "سفارش ردیف",
    columnsLayout: "طرحبندی ستون",
    columnColCount: "تعداد ستون های تو در تو",
    correctAnswer: "پاسخ صحیح",
    defaultPanelValue: "مقادیر پیشفرض",
    cells: "متن سلولی",
    fileInputPlaceholder: "یک پرونده را انتخاب کنید یا پیوند پرونده را جایگذاری کنید...",
    keyName: "ستون کلید",
    itemvalue: {
      visibleIf: "این گزینه قابل مشاهده است اگر",
      enableIf: "گزینه را انتخاب کنید اگر"
    },
    "itemvalue@rows": {
      visibleIf: "سطر را مرئی کنید اگر",
      enableIf: "ردیف را قابل ویرایش کنید اگر"
    },
    imageitemvalue: {
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
    previewMode: "حالت پیش نمایش",
    gridLayoutEnabled: "طرح بندی شبکه را فعال کنید",
    gridLayoutColumns: "ستون های طرح بندی شبکه ای",
    maskSettings: "تنظیمات ماسک",
    detailErrorLocation: "تراز پیام خطای گسترش ردیف",
    // Creator tabs
    tabs: {
      panel: {
        layout: "چیدمان پنل"
      },
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
      mask: "تنظیمات ماسک ورودی",
      layout: {
        panel: "طرح",
        question: "طرح",
        base: "طرح"
      },
      data: "اطلاعات",
      validation: "اعتبارسنجی",
      cells: "سلول ها",
      showOnCompleted: "نمایش بدهید تکمیل شده",
      logo: "لوگو در عنوان نظرسنجی",
      slider: "اسلایدر",
      expression: "بیان",
      questionSettings: "تنظیمات پرسش",
      header: "هدر",
      background: "پس زمینه",
      appearance: "ظاهر",
      accentColors: "رنگ های تاکیدی",
      surfaceBackground: "زمینه سطح",
      scaling: "توزین",
      others: "باقی موارد"
    },
    editProperty: "ویرایش خصوصیت '{0}'",
    items: "[ آیتم ها: {0} ]",
    choicesVisibleIf: "انتخاب ها قابل مشاهده هستند اگر",
    choicesEnableIf: "انتخاب ها قابل انتخاب هستند اگر",
    columnsEnableIf: "ستونها مرئی هستند اگر",
    rowsEnableIf: "سطرها مرئی هستند اگر",
    innerIndent: "اضافه کردن تورفتات داخلی",
    copyDefaultValueFromLastEntry: "از پاسخ های آخرین ورودی به عنوان پیش فرض استفاده کنید",
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
    verticalAlign: "تراز عمودی",
    alternateRows: "ردیفهای جایگزین",
    columnsVisibleIf: "ستونها مرئی هستند اگر",
    rowsVisibleIf: "سطرها مرئی هستند اگر",
    otherPlaceholder: "ذی نفع منطقه نظر",
    filePlaceholder: "متن نگهدارنده پرونده",
    photoPlaceholder: "متن نگهدارنده عکس",
    fileOrPhotoPlaceholder: "متن جایدار پرونده یا عکس",
    rateType: "نوع نرخ",
    url_placeholder: "سابق: https://api.example.com/books",
    path_placeholder: "سابق: categories.fiction",
    questionStartIndex_placeholder: "سابق: الف)",
    width_placeholder: "سابق: 6in",
    minWidth_placeholder: "سابق: 600 پیکسل",
    maxWidth_placeholder: "سابق: 50٪",
    imageHeight_placeholder: "خودکار",
    imageWidth_placeholder: "خودکار",
    itemTitleWidth_placeholder: "مثال: 100 پیکسل",
    theme: {
      themeName: "تم",
      isPanelless: "ظاهر سوال",
      editorPanel: "پس زمینه و شعاع گوشه",
      questionPanel: "پس زمینه و شعاع گوشه",
      primaryColor: "رنگ لهجه",
      panelBackgroundTransparency: "تاری پسزمینه پانل",
      questionBackgroundTransparency: "تاری پسزمینۀ سؤال",
      fontSize: "اندازه قلم",
      scale: "مقیاس",
      cornerRadius: "شعاع گوشه",
      advancedMode: "حالت پیشرفته",
      pageTitle: "قلم عنوان",
      pageDescription: "قلم توصیف",
      questionTitle: "قلم عنوان",
      questionDescription: "قلم توصیف",
      editorFont: "فونت",
      backgroundOpacity: "کدورت",
      "--sjs-font-family": "خانواده قلم",
      "--sjs-general-backcolor-dim": "رنگ پسزمینه",
      "--sjs-primary-backcolor": "پسزمینۀ لهجه",
      "--sjs-primary-forecolor": "پیشزمینه لهجه",
      "--sjs-special-red": "پیغامهای خطا",
      "--sjs-shadow-small": "جلوه های سایه",
      "--sjs-shadow-inner": "جلوه های سایه",
      "--sjs-border-default": "رنگ"
    },
    "header@header": {
      headerView: "مشاهده",
      logoPosition: "موقعیت لوگو",
      surveyTitle: "قلم عنوان نظرسنجی",
      surveyDescription: "قلم توصیف نظرسنجی",
      headerTitle: "قلم عنوان نظرسنجی",
      headerDescription: "قلم توصیف نظرسنجی",
      inheritWidthFrom: "عرض منطقه محتوا",
      textAreaWidth: "عرض متن",
      backgroundColorSwitch: "رنگ پسزمینه",
      backgroundImage: "تصویر زمینه",
      backgroundImageOpacity: "کدورت",
      overlapEnabled: "همپوشانی",
      logoPositionX: "موقعیت لوگو",
      titlePositionX: "موقعیت عنوان",
      descriptionPositionX: "شرح موقعیت"
    }
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
    selected: "انتخاب",
    unselected: "انتخاب نشده",
    decimal: "اعشاری",
    currency: "ارز",
    percent: "درصد",
    firstExpanded: "گسترش یافته",
    off: "خاموش",
    list: "لیست",
    carousel: "چرخ فلک",
    tab: "زبانه",
    progressTop: "نوار پیشرفت  بالا",
    progressBottom: "نوار پیشرفت پایین",
    progressTopBottom: "نوار پیشرفت در بالا و پایین",
    horizontal: "افقی",
    vertical: "عمودی",
    top: "بالا",
    bottom: "پایین",
    topBottom: "بالا و پایین",
    both: "هر دو",
    left: "چپ",
    right: "راست",
    center: "مرکز",
    leftRight: "چپ و راست",
    middle: "میانه",
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
    edit: "ویرایش",
    display: "نمایش",
    contain: "حاوی",
    cover: "پوشش",
    fill: "پر کردن",
    next: "بعدی",
    last: "آخرین",
    onComplete: "به محض تمام شدن",
    onHidden: "به محض مخفی شدن",
    onHiddenContainer: "هنگامی که سوال یا پانل / صفحه ان پنهان می شود",
    clearInvisibleValues: {
      none: "هرگز"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "نام و نام خانوادگی",
      "honorific-prefix": "پیشوند",
      "given-name": "نام و نام خانوادگی",
      "additional-name": "نام میانی",
      "family-name": "نام خانوادگی",
      "honorific-suffix": "پسوند",
      nickname: "نام مستعار",
      "organization-title": "عنوان شغلی",
      username: "نام کاربری",
      "new-password": "رمز عبور جدید",
      "current-password": "رمز عبور فعلی",
      organization: "نام سازمان",
      "street-address": "آدرس کامل خیابان",
      "address-line1": "خط آدرس 1",
      "address-line2": "خط آدرس 2",
      "address-line3": "خط آدرس 3",
      "address-level4": "آدرس سطح 4",
      "address-level3": "آدرس سطح 3",
      "address-level2": "آدرس سطح 2",
      "address-level1": "آدرس سطح 1",
      country: "کد کشور",
      "country-name": "نام کشور",
      "postal-code": "کد پستی",
      "cc-name": "نام دارنده کارت",
      "cc-given-name": "نام دارنده کارت",
      "cc-additional-name": "نام میانی دارنده کارت",
      "cc-family-name": "نام خانوادگی دارنده کارت",
      "cc-number": "شماره کارت اعتباری",
      "cc-exp": "تاریخ انقضا",
      "cc-exp-month": "ماه انقضا",
      "cc-exp-year": "سال انقضا",
      "cc-csc": "کد امنیتی کارت",
      "cc-type": "نوع کارت اعتباری",
      "transaction-currency": "ارز تراکنش",
      "transaction-amount": "مبلغ تراکنش",
      language: "زبان ترجیحی",
      bday: "تولد",
      "bday-day": "روز تولد",
      "bday-month": "ماه تولد",
      "bday-year": "سال تولد",
      sex: "جنسیت",
      url: "آدرس وب سایت",
      photo: "عکس پروفایل",
      tel: "شماره تلفن",
      "tel-country-code": "کد کشور برای تلفن",
      "tel-national": "شماره تلفن ملی",
      "tel-area-code": "کد منطقه",
      "tel-local": "شماره تلفن محلی",
      "tel-local-prefix": "پیشوند تلفن محلی",
      "tel-local-suffix": "پسوند تلفن محلی",
      "tel-extension": "پسوند تلفن",
      email: "آدرس ایمیل",
      impp: "پروتکل پیام رسانی فوری"
    },
    maskType: {
      none: "هیچ کدام",
      pattern: "الگوی",
      numeric: "عددی",
      datetime: "تاریخ و زمان",
      currency: "ارز"
    },
    inputTextAlignment: {
      auto: "خودکار",
      left: "چپ",
      right: "راست"
    },
    all: "تمام",
    page: "صفحه",
    survey: "نظرسنجی",
    onNextPage: "به محض صفحه بعدی",
    onValueChanged: "به محض تغییر مقدار",
    onValueChanging: "قبل از اینکه پاسخ تغییر کند",
    questionsOnPageMode: {
      standard: "ساختار اصلی",
      singlePage: "نمایش تمام سوالات در یک صفحه",
      questionPerPage: "نمایش یک سؤال در هر صفحه"
    },
    noPreview: "پیش نمایش ندارد",
    showAllQuestions: "فعال سازی پیش نمایش با تمام سوالات",
    showAnsweredQuestions: "فعال سازی پیش نمایش به سوالات پاسخ داده شده",
    allQuestions: "نمایش همه سوالات",
    answeredQuestions: "فقط سوالات پاسخ داده شده را نشان دهید",
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
    auto: "خودکار",
    showNavigationButtons: {
      none: "پنهان"
    },
    timerInfoMode: {
      combined: "هر دو"
    },
    addRowButtonLocation: {
      default: "بستگی به طرح ماتریس دارد"
    },
    panelsState: {
      default: "کاربران نمی توانند پانل ها را گسترش یا سقوط کنند",
      collapsed: "تمام پانل ها سقوط می کنند",
      expanded: "تمام پانل ها گسترش یافته اند",
      firstExpanded: "اولین گسترش"
    },
    widthMode: {
      static: "استاتیک",
      responsive: "پاسخگو"
    },
    contentMode: {
      image: "تصویر",
      video: "ویدئو",
      youtube: "Youtube"
    },
    displayMode: {
      buttons: "دکمه",
      dropdown: "کشویی"
    },
    rateColorMode: {
      default: "پیش فرض",
      scale: "مقیاس"
    },
    scaleColorMode: {
      monochrome: "تک رنگ",
      colored: "رنگی"
    },
    autoGenerate: {
      "true": "تولید",
      "false": "به صورت دستی وارد کنید"
    },
    rateType: {
      labels: "برچسب",
      stars: "ستاره",
      smileys: "صورتک"
    },
    state: {
      default: "قفل"
    },
    showQuestionNumbers: {
      default: "شماره خودکار",
      on: "شماره خودکار",
      onPage: "بازنشانی در هر صفحه",
      onpanel: "بازنشانی در هر پنل",
      onPanel: "بازنشانی در هر پنل",
      recursive: "شماره گذاری بازگشتی",
      onSurvey: "ادامه در سراسر نظرسنجی",
      off: "بدون شماره"
    },
    descriptionLocation: {
      underTitle: "تحت عنوان سوال",
      underInput: "زیر فیلد ورودی"
    },
    selectToRankAreasLayout: {
      horizontal: "در کنار انتخاب ها",
      vertical: "انتخاب های بالا"
    },
    displayStyle: {
      decimal: "اعشاری",
      currency: "ارز",
      percent: "درصد",
      date: "تاریخ"
    },
    totalDisplayStyle: {
      decimal: "اعشاری",
      currency: "ارز",
      percent: "درصد",
      date: "تاریخ"
    },
    rowOrder: {
      initial: "اصلی"
    },
    questionOrder: {
      initial: "اصلی"
    },
    progressBarLocation: {
      top: "بالا",
      bottom: "پایین",
      topbottom: "بالا و پایین",
      aboveheader: "بالای سربرگ",
      belowheader: "در زیر سرصفحه",
      off: "پنهان"
    },
    sum: "مجموع",
    count: "تعداد",
    min: "دقیقه",
    max: "حداکثر",
    avg: "میانگین",
    searchMode: {
      contains: "شامل",
      startsWith: "شروع با"
    },
    backgroundImageFit: {
      auto: "خودکار",
      cover: "پوشش",
      contain: "حاوی",
      fill: "کشش",
      tile: "کاشی"
    },
    backgroundImageAttachment: {
      fixed: "ثابت",
      scroll: "حرکت"
    },
    headerView: {
      basic: "اساسی",
      advanced: "پیشرفته"
    },
    inheritWidthFrom: {
      survey: "همانند نظرسنجی",
      container: "مناسب برای ظرف"
    },
    backgroundColorSwitch: {
      none: "هیچ کدام",
      accentColor: "رنگ لهجه",
      custom: "سفارشی"
    },
    colorPalette: {
      light: "نور",
      dark: "تاریک"
    },
    isPanelless: {
      "false": "پیش فرض",
      "true": "بدون پانل"
    },
    progressBarInheritWidthFrom: {
      survey: "همانند نظرسنجی",
      container: "همانند کانتینر"
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
  peplaceholder: {
    patternmask: {
      pattern: "شماره تماس: +1 (999)-999-99-99"
    },
    datetimemask: {
      pattern: "سابق: mm/dd/yyyyy"
    },
    currencymask: {
      prefix: "سابق: $",
      suffix: "Ex.: دلار امریکا"
    },
    panelbase: {
      questionTitleWidth: "سابق: 200 پیکسل"
    },
    panellayoutcolumn: {
      effectiveWidth: "مثال: 30٪",
      questionTitleWidth: "مثال: 200 پیکسل"
    }
  },
  pehelp: {
    panel: {
      name: "یک شناسه پانل که برای پاسخ دهندگان قابل مشاهده نیست.",
      description: "یک زیرنویس پانل تایپ کنید.",
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی که دید پانل را تعیین می کند استفاده کنید.",
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای پانل غیرفعال می کند.",
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد.",
      questionTitleLocation: "برای تمام سوالات در این پنل اعمال می شود. اگر می خواهید این تنظیم را لغو کنید، قوانین تراز عنوان را برای سوالات فردی تعریف کنید. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند).",
      questionTitleWidth: "عرض ثابت را برای عناوین سؤال تنظیم می کند وقتی که انها در سمت چپ جعبه های سوال خود قرار دارند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
      questionErrorLocation: "مکان یک پیام خطا را در رابطه با تمام سوالات درون پانل تنظیم می کند. گزینه \"Inherit\" شامل تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی است.",
      questionOrder: "ترتیب اصلی سوالات را نگه می دارد یا انها را تصادفی می کند. گزینه \"Inherit\" شامل تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی است.",
      page: "پانل را به انتهای صفحه انتخاب شده تغییر می دهد.",
      innerIndent: "اضافه کردن فضا یا حاشیه بین محتوای پانل و مرز سمت چپ جعبه پانل.",
      startWithNewLine: "عدم انتخاب برای نمایش پانل در یک خط با سوال قبلی یا پانل. تنظیمات اعمال نمی شود اگر پانل اولین عنصر در فرم شما باشد.",
      state: "را انتخاب کنید از: \"گسترش یافته\" - پانل به طور کامل نمایش داده می شود و می تواند سقوط کند؛ \"سقوط\" - پانل تنها عنوان و توضیحات را نمایش می دهد و می تواند گسترش یابد. \"Locked\" - پانل به طور کامل نمایش داده می شود و نمی تواند سقوط کند.",
      width: "عرض پانل را متناسب با سایر عناصر بررسی در همان خط تنظیم می کند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
      showQuestionNumbers: "اعداد را به سؤالات تودرتو در این پانل اختصاص می دهد.",
      effectiveColSpan: "مشخص می کند که این پانل چند ستون در طرح بندی شبکه قرار دارد.",
      gridLayoutColumns: "این جدول به شما امکان می دهد هر ستون شبکه را در پانل پیکربندی کنید. به طور خودکار درصد عرض هر ستون را بر اساس حداکثر تعداد عناصر در یک ردیف تنظیم می کند. برای سفارشی کردن طرح بندی شبکه، این مقادیر را به صورت دستی تنظیم کنید و عرض عنوان را برای همه سوالات در هر ستون تعریف کنید."
    },
    paneldynamic: {
      name: "یک شناسه پانل که برای پاسخ دهندگان قابل مشاهده نیست.",
      description: "یک زیرنویس پانل تایپ کنید.",
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی که دید پانل را تعیین می کند استفاده کنید.",
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای پانل غیرفعال می کند.",
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد.",
      templateQuestionTitleLocation: "برای تمام سوالات در این پنل اعمال می شود. اگر می خواهید این تنظیم را لغو کنید، قوانین تراز عنوان را برای سوالات فردی تعریف کنید. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند).",
      templateQuestionTitleWidth: "عرض ثابتی را برای عناوین سؤال زمانی تنظیم می کند که در سمت چپ کادرهای سؤال آنها تراز شوند. مقادیر CSS (px، ٪، in، pt و غیره) را می پذیرد.",
      templateErrorLocation: "محل یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم میکند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند).",
      errorLocation: "مکان یک پیام خطا را در رابطه با تمام سوالات درون پانل تنظیم می کند. گزینه \"Inherit\" شامل تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی است.",
      page: "پانل را به انتهای صفحه انتخاب شده تغییر می دهد.",
      innerIndent: "اضافه کردن فضا یا حاشیه بین محتوای پانل و مرز سمت چپ جعبه پانل.",
      startWithNewLine: "عدم انتخاب برای نمایش پانل در یک خط با سوال قبلی یا پانل. تنظیمات اعمال نمی شود اگر پانل اولین عنصر در فرم شما باشد.",
      state: "را انتخاب کنید از: \"گسترش یافته\" - پانل به طور کامل نمایش داده می شود و می تواند سقوط کند؛ \"سقوط\" - پانل تنها عنوان و توضیحات را نمایش می دهد و می تواند گسترش یابد. \"Locked\" - پانل به طور کامل نمایش داده می شود و نمی تواند سقوط کند.",
      width: "عرض پانل را متناسب با سایر عناصر بررسی در همان خط تنظیم می کند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
      templateTitle: "قالب را برای عناوین پانل پویا تایپ کنید. از {panelIndex} برای موقعیت عمومی پانل و {visiblePanelIndex} برای سفارش ان در میان پانل های قابل مشاهده استفاده کنید. این نگهدارنده ها را در الگو قرار دهید تا شماره گذاری خودکار اضافه شود.",
      templateTabTitle: "در قالبی برای عناوین زبانه تایپ کنید. از {panelIndex} برای موقعیت عمومی پانل و {visiblePanelIndex} برای سفارش ان در میان پانل های قابل مشاهده استفاده کنید. این نگهدارنده ها را در الگو قرار دهید تا شماره گذاری خودکار اضافه شود.",
      tabTitlePlaceholder: "یک متن جایگزین برای عناوین برگه که زمانی اعمال می شود که الگوی عنوان برگه ارزش معنی داری تولید نمی کند.",
      templateVisibleIf: "این تنظیم به شما اجازه می دهد تا دید پانل های فردی را در پانل پویا کنترل کنید. از نگهدارنده '{panel}' برای ارجاع به پنل فعلی در عبارت خود استفاده کنید.",
      titleLocation: "این تنظیم به طور خودکار توسط تمام سوالات موجود در این پنل به ارث برده می شود. اگر می خواهید این تنظیم را لغو کنید، قوانین تراز عنوان را برای سوالات فردی تعریف کنید. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند).",
      descriptionLocation: "گزینه \"Inherit\" سطح صفحه (در صورت تنظیم) یا تنظیم سطح نظرسنجی (\"زیر عنوان پانل\" به طور پیش فرض) اعمال می شود.",
      newPanelPosition: "موقعیت یک پانل تازه اضافه شده را تعریف می کند. به طور پیش فرض، پانل های جدید به پایان اضافه می شوند. \"Next\" را انتخاب کنید تا یک پانل جدید پس از پانل فعلی وارد شود.",
      copyDefaultValueFromLastEntry: "پاسخ ها را از اخرین پانل تکرار می کند و انها را به پانل پویا اضافه شده بعدی اختصاص می دهد.",
      keyName: "مرجع یک نام سوال نیاز به یک کاربر برای ارائه یک پاسخ منحصر به فرد برای این سوال در هر پانل."
    },
    copyDefaultValueFromLastEntry: "پاسخ ها را از اخرین ردیف تکرار می کند و انها را به ردیف دینامیک بعدی اضافه می کند.",
    defaultValueExpression: "این تنظیم به شما اجازه می دهد تا یک مقدار پاسخ پیش فرض را بر اساس یک عبارت اختصاص دهید. این عبارت می تواند شامل محاسبات اساسی - \"{q1_id} + {q2_id}'، عبارات بولی مانند \"{age} > 60\" و توابع: \"iif()\"، \"today()\"، \"age()\"، \"min()\"، \"max()\"، \"avg()\" و غیره باشد. مقدار تعیین شده توسط این عبارت به عنوان مقدار پیش فرض اولیه عمل می کند که می تواند توسط ورودی دستی پاسخ دهنده لغو شود.",
    resetValueIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که تعیین می کند چه زمانی ورودی پاسخ دهنده به مقدار بر اساس \"بیان مقدار پیش فرض\" یا \"تنظیم مقدار بیان\" یا \"پاسخ پیش فرض\" مقدار (اگر هر کدام تنظیم شده است) تنظیم مجدد شود.",
    setValueIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که تعیین می کند چه زمانی \"Set value expression\" را اجرا کنید و به صورت پویا مقدار حاصل را به عنوان یک پاسخ اختصاص دهید.",
    setValueExpression: "یک عبارت را مشخص کنید که مقدار تعیین شده را هنگامی که شرایط در قانون \"Set value if\" براورده می شود، تعریف می کند. این عبارت می تواند شامل محاسبات اساسی - \"{q1_id} + {q2_id}'، عبارات بولی مانند \"{age} > 60\" و توابع: \"iif()\"، \"today()\"، \"age()\"، \"min()\"، \"max()\"، \"avg()\" و غیره باشد. مقدار تعیین شده توسط این عبارت می تواند توسط ورودی دستی پاسخ دهنده لغو شود.",
    gridLayoutEnabled: "Survey Creator به شما امکان می دهد عرض درون خطی عناصر فرم را به صورت دستی تنظیم کنید تا طرح بندی را کنترل کنید. اگر این نتیجه دلخواه را به همراه نداشت، می توانید طرح بندی شبکه را فعال کنید، که با استفاده از یک سیستم مبتنی بر ستون عناصر را تشکیل می دهد. برای پیکربندی ستون های طرح بندی، یک صفحه یا پانل را انتخاب کنید و از جدول «تنظیمات سوال» → «ستون های شبکه» استفاده کنید. برای تنظیم تعداد ستون های یک سوال، آن را انتخاب کنید و مقدار مورد نظر را در قسمت \"Layout\" → \"Column span\" تنظیم کنید.",
    question: {
      name: "یک شناسه سوال که برای پاسخ دهندگان قابل مشاهده نیست.",
      description: "یک سوال زیر نویس تایپ کنید.",
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که دید سوال را تعیین می کند.",
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای سوال غیرفعال می کند.",
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع پیشرفت یا تسلیم نظرسنجی می شود مگر اینکه سوال پاسخی دریافت کند.",
      startWithNewLine: "عدم انتخاب برای نمایش سوال در یک خط با سوال قبلی یا پانل. تنظیمات اعمال نمی شود اگر سوال اولین عنصر در فرم شما باشد.",
      page: "سؤال را به انتهای صفحه انتخاب شده تغییر می دهد.",
      state: "را انتخاب کنید از: \"گسترش یافته\" - جعبه سوال به طور کامل نمایش داده می شود و می تواند سقوط کند؛ \"سقوط\" - جعبه سوال تنها عنوان و توضیحات را نمایش می دهد و می تواند گسترش یابد. \"Locked\" - جعبه سوال به طور کامل نمایش داده می شود و نمی تواند سقوط کند.",
      titleLocation: "قوانین هم ترازی عنوان تعریف شده در یک پانل، صفحه یا سطح نظرسنجی را لغو می کند. گزینه \"Inherit\" تنظیمات سطح بالاتر (در صورت تنظیم) یا تنظیمات سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند.",
      descriptionLocation: "گزینه \"به ارث بردن\" تنظیم سطح نظرسنجی (\"تحت عنوان سوال\" به طور پیش فرض) اعمال می شود.",
      errorLocation: "مکان یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم می کند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند.",
      indent: "فضای یا حاشیه بین محتوای سوال و مرز سمت چپ جعبه سوال اضافه می کند.",
      width: "عرض سوال را متناسب با سایر عناصر نظرسنجی در همان خط تنظیم می کند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
      surveyvalidator: {
        expression: "از نماد چوب جادویی برای تنظیم یک قانون اعتبار سنجی برای سوال استفاده کنید."
      },
      textUpdateMode: "انتخاب از: \"در تمرکز از دست رفته\" - مقدار به روز شده است زمانی که فیلد ورودی تمرکز خود را از دست می دهد؛ \"در هنگام تایپ\" - مقدار در زمان واقعی به روز می شود، زیرا کاربران تایپ می کنند. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"در تمرکز از دست رفته\" به طور پیش فرض) اعمال می شود.",
      url: "شما می توانید از هر سرویس وب به عنوان منبع داده برای سوالات چند گزینه ای استفاده کنید. برای پر کردن مقادیر انتخاب، URL سرویس ارائه دهنده داده ها را وارد کنید.",
      searchMode: "یک عملیات مقایسه ای که برای فیلتر کردن لیست کشویی استفاده می شود.",
      textWrapEnabled: "متون طولانی در گزینه های انتخاب به طور خودکار شکستن خط را ایجاد می کنند تا در منوی کشویی قرار بگیرند. اگر می خواهید متن ها کلیپ شوند، انتخاب را لغو کنید.",
      effectiveColSpan: "مشخص می کند که این سوال چند ستون در طرح بندی شبکه قرار دارد."
    },
    signaturepad: {
      signatureWidth: "عرض ناحیه امضای نمایش داده شده و تصویر حاصل را تنظیم می کند.",
      signatureHeight: "ارتفاع ناحیه امضای نمایش داده شده و تصویر حاصل را تنظیم میکند.",
      signatureAutoScaleEnabled: "اگر می خواهید منطقه امضا برای پر کردن تمام فضای موجود در جعبه سوال در حالی که حفظ پیش فرض 3: 2 نسبت ابعاد را انتخاب کنید. هنگامی که عرض سفارشی و مقادیر ارتفاع تنظیم می شود، تنظیم نسبت ابعاد این ابعاد را حفظ می کند."
    },
    file: {
      imageHeight: "ارتفاع تصویر را در نتایج نظرسنجی تنظیم می کند.",
      imageWidth: "عرض تصویر را در نتایج نظرسنجی تنظیم می کند.",
      allowImagesPreview: "در صورت امکان، پیش نمایش تصاویر کوچک را برای فایل های آپلود شده نمایش می دهد. اگر می خواهید به جای آن نمادهای فایل را نشان دهید، انتخاب را لغو کنید."
    },
    image: {
      contentMode: "گزینه \"Auto\" به طور خودکار حالت مناسب برای نمایش - تصویر، ویدئو یا یوتیوب - را بر اساس URL منبع ارائه شده تعیین می کند."
    },
    imagepicker: {
      imageHeight: "مقادیر حداقل و حداکثر ارتفاع را نادیده می گیرد.",
      imageWidth: "مقادیر حداقل و حداکثر عرض را نادیده می گیرد.",
      choices: "\"ارزش\" به عنوان یک شناسه مورد استفاده در قوانین شرطی عمل می کند. \"متن\" به پاسخ دهندگان نمایش داده می شود.",
      contentMode: "بین \"تصویر\" و \"ویدئو\" را انتخاب کنید تا حالت محتوا را انتخاب کنید. اگر \"تصویر\" انتخاب شده است، اطمینان حاصل کنید که تمام گزینه های ارائه شده فایل های تصویری در فرمت های زیر هستند: JPEG، GIF، PNG، APNG، SVG، BMP، ICO. به طور مشابه، اگر \"ویدئو\" انتخاب شده است، اطمینان حاصل کنید که تمام گزینه ها لینک مستقیم به فایل های ویدئویی در فرمت های زیر هستند: MP4، MOV، WMV، FLV، AVI، MKV. لطفا توجه داشته باشید که پیوندهای YouTube برای گزینه های ویدیویی پشتیبانی نمی شوند."
    },
    text: {
      size: "این تنظیم فقط فیلد ورودی را تغییر اندازه می دهد و روی عرض جعبه پرسش تاثیر نمی گذارد. برای محدود کردن طول ورودی پذیرفته شده، به <b>Validation → Maximum character limit</b> بروید."
    },
    comment: {
      rows: "تعداد خطوط نمایش داده شده در فیلد ورودی را تنظیم می کند. اگر ورودی خطوط بیشتری را بگیرد، نوار اسکرول ظاهر می شود."
    },
    // survey templates
    survey: {
      readOnly: "اگر می خواهید از پر کردن نظرسنجی پاسخ دهندگان جلوگیری کنید، انتخاب کنید.",
      progressBarLocation: "مکان نوار پیشرفت را تنظیم می کند. مقدار \"خودکار\" نوار پیشرفت را در بالا یا پایین سربرگ نظرسنجی نشان می دهد."
    },
    matrixdropdowncolumn: {
      name: "یک شناسه ستون که برای پاسخ دهندگان قابل مشاهده نیست.",
      isUnique: "هنگامی که برای یک ستون فعال می شود، یک پاسخ دهنده باید یک پاسخ منحصر به فرد برای هر سوال در این ستون ارائه دهد.",
      rows: "تعداد خطوط نمایش داده شده در فیلد ورودی را تنظیم می کند. اگر ورودی خطوط بیشتری را بگیرد، نوار اسکرول ظاهر می شود.",
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی که دید ستون را تعیین می کند استفاده کنید.",
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای ستون غیرفعال می کند.",
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد.",
      showInMultipleColumns: "هنگامی که انتخاب می شود، یک ستون فردی برای هر گزینه انتخاب ایجاد می کند.",
      colCount: "گزینه های انتخاب را در یک طرح چند ستونی مرتب می کند. هنگامی که روی 0 تنظیم می شود، گزینه ها در یک خط نمایش داده می شوند. هنگامی که روی -1 تنظیم می شود، مقدار واقعی از ویژگی \"تعداد ستون های تو در تو\" ماتریس والد به ارث می رسد."
    },
    caseInsensitive: "انتخاب کنید که آیا حروف بزرگ و کوچک در عبارت منظم باید معادل در نظر گرفته شوند.",
    widthMode: "را انتخاب کنید از: \"استاتیک\" - مجموعه عرض ثابت؛ \"پاسخگو\" - باعث می شود نظرسنجی عرض کامل صفحه نمایش را اشغال کند؛ \"Auto\" - هر یک از این دو را بسته به نوع سوال مورد استفاده اعمال می کند.",
    cookieName: "کوکی ها کاربران را از پر کردن همان نظرسنجی دو بار جلوگیری می کند.",
    logo: "چسباندن یک پیوند تصویر (بدون محدودیت اندازه) یا روی نماد پوشه کلیک کنید تا یک فایل را از رایانه خود مرور کنید (تا 64KB).",
    logoWidth: "عرض لوگو را در واحدهای CSS تنظیم می کند (px، ٪، in، pt و غیره).",
    logoHeight: "ارتفاع لوگو را در واحدهای CSS تنظیم می کند (px، ٪، in، pt و غیره).",
    logoFit: "انتخاب از: \"هیچ\" - تصویر اندازه اصلی خود را حفظ می کند؛ \"شامل\" - تصویر تغییر اندازه به جا در حالی که حفظ نسبت ابعاد ان؛ \"Cover\" - تصویر کل جعبه را پر می کند در حالی که نسبت ابعاد ان را حفظ می کند. \"Fill\" - تصویر برای پر کردن جعبه بدون حفظ نسبت ابعاد ان کشیده می شود.",
    autoAdvanceEnabled: "انتخاب کنید که آیا می خواهید نظرسنجی به طور خودکار به صفحه بعدی پیش برود پس از اینکه پاسخ دهنده به همه سؤالات موجود در صفحه فعلی پاسخ داد. اگر آخرین سؤال در صفحه باز باشد یا اجازه پاسخ های متعدد را بدهد، این ویژگی اعمال نمی شود.",
    autoAdvanceAllowComplete: "انتخاب کنید که ایا می خواهید نظرسنجی به طور خودکار پس از پاسخ دادن به تمام سوالات پاسخ دهد.",
    showNavigationButtons: "قابلیت مشاهده و مکان دکمه های پیمایش را در یک صفحه تنظیم می کند.",
    navigationButtonsLocation: "مکان دکمه های پیمایش را در یک صفحه تنظیم می کند.",
    showPreviewBeforeComplete: "صفحه پیش نمایش را فقط با تمام سوالات یا پاسخ داده شده فعال کنید.",
    questionTitleLocation: "به تمام سوالات در نظرسنجی اعمال می شود. این تنظیم را می توان با قوانین هم ترازی عنوان در سطوح پایین تر لغو کرد: پانل، صفحه یا سوال. یک تنظیم سطح پایین تر، کسانی را که در سطح بالاتری قرار دارند، نادیده می گیرد.",
    requiredMark: "یک نماد یا دنباله ای از نمادها نشان می دهد که یک پاسخ مورد نیاز است.",
    questionStartIndex: "یک شماره یا حرف را وارد کنید که می خواهید با ان شروع به شماره گیری کنید.",
    questionErrorLocation: "مکان یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم می کند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد.",
    autoFocusFirstQuestion: "انتخاب کنید که ایا می خواهید اولین فیلد ورودی در هر صفحه اماده برای ورود متن باشد.",
    questionOrder: "ترتیب اصلی سوالات را نگه می دارد یا انها را تصادفی می کند. اثر این تنظیم فقط در تب Preview قابل مشاهده است.",
    maxTextLength: "فقط برای سوالات ورودی متن.",
    maxCommentLength: "فقط برای نظرات سوال.",
    commentAreaRows: "تعداد خطوط نمایش داده شده در قسمت های متنی را برای نظرات سؤال تنظیم می کند. اگر ورودی خطوط بیشتری را اشغال کند، نوار اسکرول ظاهر می شود.",
    autoGrowComment: "انتخاب کنید اگر شما می خواهید نظرات سوال و سوالات متن بلند به رشد خودکار در ارتفاع بر اساس طول متن وارد شده است.",
    allowResizeComment: "برای نظرات سوال و سوالات طولانی متن تنها.",
    calculatedValues: "متغیرهای سفارشی به عنوان متغیرهای متوسط یا کمکی مورد استفاده در محاسبات فرم عمل می کنند. انها ورودی های پاسخ دهنده را به عنوان مقادیر منبع می گیرند. هر متغیر سفارشی دارای یک نام منحصر به فرد و یک عبارت است که بر اساس ان است.",
    includeIntoResult: "اگر میخواهید مقدار محاسبهشده عبارت همراه با نتایج نظرسنجی ذخیره شود ، برگزینید.",
    triggers: "Trigger یک رویداد یا شرایطی است که بر اساس یک عبارت است. هنگامی که عبارت به \"درست\" ارزیابی می شود، یک ماشه یک عمل را تنظیم می کند. چنین اقدامی می تواند به صورت اختیاری یک سوال هدف داشته باشد که بر ان تاثیر می گذارد.",
    clearInvisibleValues: "انتخاب کنید که ایا برای پاک کردن ارزش ها برای سوالات پنهان شده توسط منطق شرطی و زمانی که ان را انجام دهید.",
    textUpdateMode: "انتخاب از: \"در تمرکز از دست رفته\" - مقدار به روز شده است زمانی که فیلد ورودی تمرکز خود را از دست می دهد؛ \"در هنگام تایپ\" - مقدار در زمان واقعی به روز می شود، زیرا کاربران تایپ می کنند.",
    columns: "مقدار چپ به عنوان یک شناسه ستون مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب به پاسخ دهندگان نمایش داده می شود.",
    rows: "مقدار سمت چپ به عنوان یک شناسه ردیف مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب به پاسخ دهندگان نمایش داده می شود.",
    columnMinWidth: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    rowTitleWidth: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    totalText: "تنها زمانی قابل مشاهده است که حداقل یک ستون دارای عبارت Total type یا Total باشد.",
    cellErrorLocation: "محل یک پیام خطا را در رابطه با یک سلول با ورودی نامعتبر تنظیم می کند. گزینه \"Inherit\" تنظیمات را از ویژگی \"Error message alignment\" اعمال می کند.",
    detailErrorLocation: "مکان پیام های خطا را برای سؤالات تودرتو در بخش های جزئیات تنظیم می کند. گزینه \"وراثت\" تنظیمات را از ویژگی \"تراز پیام خطا\" اعمال می کند.",
    keyDuplicationError: "هنگامی که ویژگی \"جلوگیری از پاسخ های تکراری\" فعال می شود، پاسخ دهنده ای که سعی در ارسال یک ورودی تکراری دارد، پیام خطای زیر را دریافت می کند.",
    totalExpression: "به شما اجازه می دهد تا مقادیر کل را بر اساس یک عبارت محاسبه کنید. این عبارت می تواند شامل محاسبات اساسی ('{q1_id} + {q2_id}')، عبارات بولی ('{age} > 60') و توابع ('iif()'، 'today()'، 'age()'، 'min()'، 'max()'، 'avg()'، و غیره باشد.",
    confirmDelete: "یک درخواست فوری برای تایید حذف ردیف ایجاد می کند.",
    keyName: "اگر ستون مشخص شده حاوی مقادیر یکسان باشد، نظرسنجی خطای \"مقدار کلیدی غیر منحصر به فرد\" را پرتاب می کند.",
    description: "یک زیرنویس تایپ کنید.",
    locale: "یک زبان را برای شروع ایجاد نظرسنجی خود انتخاب کنید. برای اضافه کردن ترجمه، به یک زبان جدید بروید و متن اصلی را در اینجا یا در زبانه ترجمه ترجمه ترجمه کنید.",
    detailPanelMode: "مکان یک بخش جزئیات را در رابطه با یک ردیف تنظیم می کند. انتخاب از: \"هیچ\" - هیچ گسترش اضافه شده است؛ \"زیر ردیف\" - گسترش ردیف در زیر هر ردیف ماتریس قرار می گیرد؛ \"زیر ردیف، فقط یک ردیف را نمایش می دهد\" - یک گسترش فقط در زیر یک ردیف نمایش داده می شود، گسترش ردیف باقی مانده سقوط می کند.",
    imageFit: "انتخاب از: \"هیچ\" - تصویر اندازه اصلی خود را حفظ می کند؛ \"شامل\" - تصویر تغییر اندازه به جا در حالی که حفظ نسبت ابعاد ان؛ \"Cover\" - تصویر کل جعبه را پر می کند در حالی که نسبت ابعاد ان را حفظ می کند. \"Fill\" - تصویر برای پر کردن جعبه بدون حفظ نسبت ابعاد ان کشیده می شود.",
    autoGrow: "به تدریج ارتفاع میدان ورودی را افزایش می دهد زیرا داده ها وارد می شوند. تنظیم \"ارتفاع میدان ورودی (در خطوط)\" را لغو می کند.",
    allowResize: "دسته تغییر اندازه (یا گرفتن) در گوشه ظاهر می شود و می تواند برای تغییر اندازه میدان ورودی کشیده شود.",
    timeLimit: "یک فاصله زمانی در ثانیه که پس از ان نظرسنجی به طور خودکار به صفحه تشکر از شما پیش می رود.",
    timeLimitPerPage: "یک فاصله زمانی در ثانیه که پس از ان نظرسنجی به طور خودکار به صفحه بعدی پیش می رود.",
    validateVisitedEmptyFields: "این گزینه را فعال کنید تا زمانی که کاربر روی یک فیلد ورودی خالی تمرکز می کند و سپس بدون ایجاد هیچ تغییری آن را ترک می کند، اعتبارسنجی را فعال کنید.",
    page: {
      name: "شناسه صفحه ای که برای پاسخ دهندگان قابل مشاهده نیست.",
      description: "زیرنویس صفحه را تایپ کنید.",
      navigationTitle: "عنوانی که روی دکمه پیمایش در نوار پیشرفت یا فهرست مطالب (TOC) نمایش داده می شود. اگر این فیلد را خالی بگذارید، دکمه پیمایش از عنوان صفحه یا نام صفحه استفاده می کند. برای فعال کردن نوار پیشرفت یا TOC، به \"نظرسنجی\" → \"ناوبری\" بروید.",
      timeLimit: "یک فاصله زمانی در ثانیه که پس از ان نظرسنجی به طور خودکار به صفحه بعدی پیش می رود.",
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که دید صفحه را تعیین می کند.",
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای صفحه غیرفعال می کند.",
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد.",
      questionTitleLocation: "به تمام سوالات موجود در این صفحه اعمال می شود. اگر می خواهید این تنظیمات را لغو کنید، قوانین تراز عنوان را برای سوالات یا پانل های فردی تعریف کنید. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند.",
      questionTitleWidth: "عرض ثابت را برای عناوین سؤال تنظیم می کند وقتی که انها در سمت چپ جعبه های سوال خود قرار دارند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
      questionErrorLocation: "مکان یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم می کند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند.",
      questionOrder: "ترتیب اصلی سوالات را نگه می دارد یا انها را تصادفی می کند. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"اصلی\" به طور پیش فرض) را اعمال می کند. اثر این تنظیم فقط در تب Preview قابل مشاهده است.",
      showNavigationButtons: "قابلیت مشاهده دکمههای پیمایش را روی صفحه تنظیم میکند. گزینه \"به ارث بردن\" تنظیم سطح نظرسنجی را اعمال می کند که به طور پیش فرض به \"قابل مشاهده\" است.",
      gridLayoutColumns: "این جدول به شما امکان می دهد هر ستون شبکه را در صفحه پیکربندی کنید. به طور خودکار درصد عرض هر ستون را بر اساس حداکثر تعداد عناصر در یک ردیف تنظیم می کند. برای سفارشی کردن طرح بندی شبکه، این مقادیر را به صورت دستی تنظیم کنید و عرض عنوان را برای همه سوالات در هر ستون تعریف کنید."
    },
    timerLocation: "مکان یک تایمر را در یک صفحه تنظیم می کند.",
    panelsState: "انتخاب از: \"قفل شده\" - کاربران نمی توانند پانل ها را گسترش یا سقوط دهند؛ \"سقوط همه\" - تمام پانل ها در یک حالت فروپاشی شروع می شوند؛ \"گسترش همه\" - تمام پانل ها در یک حالت گسترش یافته شروع می شوند؛ \"اولین گسترش\" - تنها پانل اول در ابتدا گسترش یافته است.",
    imageLinkName: "یک نام خصوصیت مشترک را درون ارایۀ اشیایی که حاوی نشانیهای اینترنتی پرونده تصویر یا ویدئویی است که میخواهید در فهرست انتخاب نمایش داده شود، وارد کنید.",
    choices: "مقدار سمت چپ به عنوان یک شناسه مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب برای پاسخ دهندگان نمایش داده می شود.",
    title: "یک عنوان کاربر پسند برای نمایش تایپ کنید.",
    waitForUpload: "اطمینان حاصل می کند که کاربران تا زمانی که فایل ها اپلود نشده اند، نظرسنجی را تکمیل نخواهند کرد.",
    minWidth: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    maxWidth: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    width: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    valueName: "اگر این ویژگی را تنظیم نکنید، پاسخ در زمینه ای که توسط ویژگی Name مشخص شده است ذخیره می شود.",
    defaultDisplayValue: "مقداری که در سؤالات HTML و در عناوین پویا و توضیحات عناصر نظرسنجی زمانی که مقدار سوال خالی است، نمایش داده می شود.",
    useDisplayValuesInDynamicTexts: "در انواع سوالات تک و چند انتخاب، هر گزینه انتخاب دارای یک شناسه و مقدار نمایش است. هنگامی که انتخاب می شود، این تنظیم یک مقدار نمایش را به جای یک مقدار ID در سوالات HTML و عناوین پویا و توصیف عناصر بررسی نشان می دهد.",
    clearIfInvisible: "انتخاب کنید که ایا برای پاک کردن یا نه ارزش سوال پنهان شده توسط منطق شرطی و زمانی که به ان را انجام دهد. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"پس از اتمام نظرسنجی\" به طور پیش فرض) اعمال می شود.",
    choicesFromQuestionMode: "انتخاب از: \"همه\" - کپی تمام گزینه های انتخاب از سوال انتخاب شده؛ \"انتخاب شده\" - به صورت پویا فقط گزینه های انتخاب شده را کپی می کند؛ \"Unselected\" - به صورت پویا تنها گزینه های انتخاب نشده را کپی می کند. گزینه های \"None\" و \"Other\" در صورت فعال شدن در سؤال منبع به طور پیش فرض کپی می شوند.",
    choiceValuesFromQuestion: "در انواع سوالات تک و چند گزینه، هر گزینه انتخابی دارای یک شناسه و مقدار نمایشی است. این تنظیم مشخص می کند که کدام ستون ماتریس یا سوال پانل باید شناسه ها را ارائه دهد.",
    choiceTextsFromQuestion: "در انواع سوالات تک و چند گزینه، هر گزینه انتخابی دارای یک شناسه و مقدار نمایشی است. این تنظیم مشخص می کند که کدام ستون ماتریس یا سوال پانل باید متون نمایش داده شده را ارائه دهد.",
    allowCustomChoices: "انتخاب کنید تا به پاسخ دهندگان اجازه دهید انتخاب های خود را اضافه کنند اگر گزینه مورد نظر در منوی کشویی موجود نیست. گزینه های سفارشی فقط به طور موقت برای مدت زمان جلسه مرورگر فعلی ذخیره می شوند.",
    showOtherItem: "هنگامی که انتخاب می شوند، کاربران می توانند ورودی های اضافی را در یک جعبه نظر جداگانه قرار دهند.",
    separateSpecialChoices: "نمایش هر گزینه انتخاب خاص (\"هیچ\"، \"دیگر\"، \"انتخاب همه\") در یک خط جدید، حتی در هنگام استفاده از یک طرح چند ستون.",
    path: "مشخص کردن محل در مجموعه داده های سرویس که در ان ارایه هدف از اشیاء واقع شده است. ترک خالی اگر URL در حال حاضر به ارایه اشاره می کند.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "یک نام ویژگی یکنواخت را در ارایه اشیایی که حاوی مقادیری است که می خواهید در لیست انتخاب نمایش داده شود وارد کنید.",
    allowEmptyResponse: "انتخاب کنید تا سرویس بتواند یک پاسخ یا ارایه خالی را بازگرداند.",
    choicesVisibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که دید همه گزینه های انتخابی را تعیین می کند.",
    rateValues: "مقدار سمت چپ به عنوان یک شناسه مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب برای پاسخ دهندگان نمایش داده می شود.",
    rating: {
      displayMode: "\"Auto\" بین حالت های \"Buttons\" و \"Dropdown\" بر اساس عرض موجود انتخاب می شود. هنگامی که عرض برای نمایش دکمه ها کافی نیست، سوال یک کشویی را نشان می دهد."
    },
    valuePropertyName: "اجازه می دهد تا شما را به اتصال سوالات است که تولید نتایج در فرمت های مختلف. هنگامی که چنین سوالاتی با استفاده از یک شناسه پیوستن به هم مرتبط می شوند، این ویژگی مشترک مقادیر سوال انتخاب شده را ذخیره می کند.",
    searchEnabled: "انتخاب کنید که ایا می خواهید محتویات منوی کشویی را به روز کنید تا با پرسوجوی جستجویی که کاربر در قسمت ورودی تایپ می کند مطابقت داشته باشد.",
    valueTrue: "ارزش برای صرفه جویی در نتایج نظرسنجی زمانی که پاسخ دهندگان پاسخ مثبت می دهند.",
    valueFalse: "ارزش برای صرفه جویی در نتایج نظرسنجی زمانی که پاسخ دهندگان پاسخ منفی می دهند.",
    showPreview: "توصیه نمی شود این گزینه را غیرفعال کنید زیرا تصویر Preview را نادیده می گیرد و درک اینکه ایا فایل ها اپلود شده اند را برای کاربر دشوار می کند.",
    needConfirmRemoveFile: "یک اعلان برای تایید حذف پرونده ایجاد می کند.",
    selectToRankEnabled: "فقط گزینه های انتخاب شده را رتبه بندی کنید. کاربران موارد انتخاب شده را از لیست انتخاب می کنند تا انها را در منطقه رتبه بندی سفارش دهند.",
    dataList: "لیستی از انتخاب هایی را وارد کنید که در طول ورودی به مخاطب پیشنهاد می شود.",
    inputSize: "تنظیم فقط زمینه های ورودی را تغییر می دهد و بر عرض جعبه سوال تاثیر نمی گذارد.",
    itemTitleWidth: "عرض ثابت را برای همه برچسب های مورد تنظیم می کند. مقادیر CSS (px، ٪، in، pt و غیره) را می پذیرد.",
    inputTextAlignment: "نحوه تراز کردن مقدار ورودی در فیلد را انتخاب کنید. تنظیم پیش فرض \"خودکار\" مقدار ورودی را در صورت اعمال پوشش ارز یا عددی به سمت راست و در صورت عدم اعمال به سمت چپ تراز می کند.",
    altText: "به عنوان یک جایگزین زمانی که تصویر نمی تواند بر روی دستگاه کاربر و برای اهداف دسترسی نمایش داده شود.",
    rateColorMode: "رنگ ایموجی انتخاب شده را هنگامی که نوع نماد رتبه بندی روی \"Smileys\" تنظیم شده است، تعریف می کند. انتخاب بین: \"پیش فرض\" - ایموجی انتخاب شده در رنگ پیش فرض بررسی ظاهر می شود؛ \"Scale\" - ایموجی انتخاب شده رنگ را از مقیاس رتبه بندی به ارث می برد.",
    expression: {
      name: "یک شناسه بیان که برای پاسخ دهندگان قابل مشاهده نیست.",
      description: "زیر نویس عبارت را تایپ کنید.",
      expression: "یک عبارت می تواند شامل محاسبات اساسی ('{q1_id} + {q2_id}')، شرایط ('{age} > 60') و توابع ('iif()'، 'today()'، 'age()'، 'min()'، 'max()'، 'avg()'' و غیره باشد."
    },
    storeOthersAsComment: "انتخاب کنید برای ذخیره \"دیگر\" مقدار گزینه به عنوان یک ملک جداگانه در نتایج نظرسنجی.",
    format: "از {0} به عنوان نگهدارنده برای ارزش واقعی استفاده کنید.",
    acceptedTypes: "برای اطلاعات بیشتر به [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description مراجعه کنید.",
    columnColCount: "فقط برای انواع سلول های Radiogroup و Checkbox قابل اجرا است.",
    autocomplete: "برای اطلاعات بیشتر به شرح ویژگی [autocomplete] (https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) مراجعه کنید.",
    filePlaceholder: "اعمال می شود زمانی که \"نوع منبع\" است \"فایل های محلی\" و یا زمانی که دوربین در دسترس نیست",
    photoPlaceholder: "هنگامی که \"نوع منبع\" \"دوربین\" است، اعمال می شود.",
    fileOrPhotoPlaceholder: "زمانی اعمال می شود که \"نوع منبع\" \"فایل های محلی یا دوربین\" باشد.",
    colCount: "گزینه های انتخاب را در یک طرح چند ستونی مرتب می کند. هنگامی که روی 0 تنظیم می شود، گزینه ها در یک خط نمایش داده می شوند.",
    masksettings: {
      saveMaskedValue: "انتخاب کنید که ایا می خواهید مقدار سؤال را با یک ماسک کاربردی در نتایج نظرسنجی ذخیره کنید."
    },
    patternmask: {
      pattern: "الگو می تواند شامل literals رشته و متغیرهای زیر باشد: '9' - برای یک رقم؛ 'a' - برای یک حرف بزرگ یا کوچک؛ \"#\" - برای یک رقم یا یک حرف بزرگ یا کوچک. استفاده از backslash '\\' برای فرار از یک شخصیت."
    },
    datetimemask: {
      pattern: "این الگو می تواند شامل کاراکترهای جداکننده و متغیرهای زیر باشد: <br>'m' - شماره ماه.<br>'mm' - شماره ماه، با صفر پیشرو برای مقادیر تک رقمی. <br>\"D\" - روز ماه. <br>'dd' - روز ماه، با صفر پیشرو برای مقادیر تک رقمی. <br>'yy' - دو رقم اخر سال. <br>'yyyyy' - سال چهار رقمی. <br>\"H\" - ساعت در فرمت 24 ساعته. <br>'HH' - ساعت در فرمت 24 ساعته، با صفر پیشرو برای مقادیر تک رقمی. <br>'h' - ساعت در فرمت 12 ساعته. <br>'hh' - ساعت در فرمت 12 ساعته، با صفر پیشرو برای مقادیر تک رقمی. <br>\"MM\" - دقیقه. <br>SS ثانیه <br>\"TT\" - دوره ساعت 12 ساعته در حالت بزرگ (AM / PM). <br>'tt' - دوره ساعت 12 ساعته در حروف کوچک (am / pm)."
    },
    numericmask: {
      decimalSeparator: "نمادی که برای جدا کردن قسمت کسری از قسمت صحیح یک عدد نمایش داده شده استفاده می شود.",
      thousandsSeparator: "نمادی که برای جدا کردن ارقام یک عدد بزرگ به گروه های سه نفره استفاده می شود.",
      precision: "محدود کردن تعداد ارقام برای حفظ پس از نقطه اعشار برای یک عدد نمایش داده شده."
    },
    currencymask: {
      prefix: "یک یا چند نماد قبل از مقدار نمایش داده می شود.",
      suffix: "یک یا چند نماد بعد از مقدار نمایش داده می شود."
    },
    theme: {
      isPanelless: "این تنظیم فقط برای سؤالات خارج از پانل اعمال می شود.",
      primaryColor: "یک رنگ تکمیلی تنظیم می کند که عناصر کلیدی نظرسنجی را برجسته می کند.",
      panelBackgroundTransparency: "شفافیت پانل ها و جعبه های سوال را نسبت به پیشینه نظرسنجی تنظیم می کند.",
      questionBackgroundTransparency: "شفافیت عناصر ورودی را نسبت به پیشینه نظرسنجی تنظیم می کند.",
      cornerRadius: "شعاع گوشه را برای همه عناصر مستطیلی تنظیم می کند. اگر می خواهید مقادیر شعاع گوشه جداگانه را برای عناصر ورودی یا پانل ها و جعبه های سؤال تنظیم کنید، حالت پیشرفته را فعال کنید.",
      "--sjs-general-backcolor-dim": "رنگ پس زمینه اصلی نظرسنجی را تنظیم می کند."
    },
    header: {
      inheritWidthFrom: "گزینه \"همان کانتینر\" به طور خودکار عرض ناحیه محتوای هدر را تنظیم می کند تا در عنصر HTML که نظرسنجی در آن قرار می گیرد قرار گیرد.",
      textAreaWidth: "عرض ناحیه سرصفحه که حاوی عنوان و توضیحات نظرسنجی است که بر حسب پیکسل اندازه گیری می شود.",
      overlapEnabled: "هنگامی که فعال باشد، بالای نظرسنجی پایین هدر را همپوشانی می کند.",
      mobileHeight: "هنگامی که روی 0 تنظیم می شود، ارتفاع به طور خودکار محاسبه می شود تا محتوای هدر را در خود جای دهد."
    },
    progressBarInheritWidthFrom: "گزینه \"همان کانتینر\" به طور خودکار عرض ناحیه نوار پیشرفت را تنظیم می کند تا در عنصر HTML که نظرسنجی در آن قرار می گیرد قرار گیرد."
  },
  // Properties
  p: {
    title: {
      name: "عنوان",
      title: "اگر خالی باشد مانند نام درج می شود"
    },
    multiSelect: "اجازه دادن به چند گزینش",
    showLabel: "نمایش زیرنویسهای تصویر",
    swapOrder: "تعویض سفارش بله و خیر",
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
    inputSize: "ابعاد مورد",
    itemTitleWidth: "عرض برچسب مورد (در پیکسل)",
    inputTextAlignment: "تراز مقدار ورودی",
    elements: "عناصر",
    content: "محتوای",
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
    mobileHeight: "ارتفاع در گوشی های هوشمند",
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
    selectToRankEmptyRankedAreaText: "متن برای نشان دادن اینکه ایا همه گزینهها انتخاب شدهاند",
    selectToRankEmptyUnrankedAreaText: "متن نگهدارنده برای منطقه رتبه بندی",
    allowCameraAccess: "اجازه دسترسی به دوربین",
    scaleColorMode: "مقیاس حالت رنگ",
    rateColorMode: "نرخ حالت رنگ",
    copyDisplayValue: "رونوشت مقدار نمایش",
    effectiveColSpan: "دهانه ستون",
    progressBarInheritWidthFrom: "عرض مساحت نوار پیشرفت"
  },
  theme: {
    advancedMode: "حالت پیشرفته",
    pageTitle: "قلم عنوان صفحه",
    questionTitle: "قلم عنوان پرسش",
    editorPanel: "عنصر ورودی",
    lines: "خطوط",
    primaryDefaultColor: "پیش فرض",
    primaryDarkColor: "شناور",
    primaryLightColor: "انتخاب",
    backgroundDimColor: "رنگ پسزمینه",
    cornerRadius: "شعاع گوشه",
    backcolor: "پسزمینۀ پیشفرض",
    hovercolor: "پسزمینه شناور",
    borderDecoration: "دکوراسیون مرزی",
    fontColor: "رنگ قلم",
    backgroundColor: "رنگ پسزمینه",
    primaryForecolor: "رنگ پیشفرض",
    primaryForecolorLight: "رنگ غیرفعال",
    font: "فونت",
    borderDefault: "تیره تر",
    borderLight: "سبکتر",
    fontFamily: "خانواده قلم",
    fontWeightRegular: "منظم",
    fontWeightHeavy: "سنگین",
    fontWeightSemiBold: "نیمه جسورانه",
    fontWeightBold: "جسورانه",
    color: "رنگ",
    placeholderColor: "رنگ نگهدارنده",
    size: "اندازه",
    opacity: "کدورت",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "افزودن جلوهی سایه",
    boxShadowBlur: "تیرگی",
    boxShadowSpread: "گسترش",
    boxShadowDrop: "قطره",
    boxShadowInner: "درونی",
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
      green: "سبز",
      gray: "خاکستری"
    }
  },
  creatortheme: {
    "--sjs-special-background": "زمینه سطح",
    "--sjs-primary-background-500": "اولیه",
    "--sjs-secondary-background-500": "ثانویه",
    surfaceScale: "سطح",
    userInterfaceBaseUnit: "رابط کاربری",
    fontScale: "فونت",
    names: {
      sc2020: "خالق نظرسنجی 2020",
      "default-light": "نور",
      "default-dark": "تاریک",
      "default-contrast": "کنتراست"
    }
  }
};

setupLocale({ localeCode: "fa", strings: persianStrings });

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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "محدودیت زمانی برای تمام کردن صفحه (به ثانیه)"
// question.page: "Parent page" => "صفحه اصلی"
// pe.noEntriesText: "Empty entries text" => "متن مدخلهای خالی"
// pe.setValue: "Answer" => "پاسخ"
// pe.dataFormat: "Image format" => "قالب تصویر"
// pe.allowAddRows: "Allow adding rows" => "اجازه اضافه کردن سطرها"
// pe.allowRemoveRows: "Allow removing rows" => "اجازه حذف سطرها"
// pe.allowRowReorder: "Allow row drag and drop" => "اجازه دادن به کشیدن و رها کردن ردیف"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "حداکثر طول توضیحات (در نویسهها)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "گسترش خودکار منطقه نظر در صورت لزوم"
// pe.allowResizeComment: "Allow users to resize text areas" => "اجازه دادن به کاربران برای تغییر اندازه مناطق متن"
// pe.textUpdateMode: "Update text question value" => "بههنگامسازی مقدار سؤال متن"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "تنظیم تمرکز روی اولین پاسخ نامعتبر"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "قبلی دکمه پنل tooltip"
// pe.nextPanelText: "Next Panel button tooltip" => "بعدی دکمه پنل tooltip"
// pe.showRangeInProgress: "Show progress bar" => "نمایش نوار پیشرفت"
// pe.templateQuestionTitleLocation: "Question title location" => "عنوان سوال محل"
// pe.removePanelButtonLocation: "Remove Panel button location" => "حذف محل دکمه پنل"
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
// pe.showNumber: "Show panel number" => "نمایش شماره پانل"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "عرض لوگو (در مقادیر پذیرفته شده CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "ارتفاع لوگو (در مقادیر پذیرفته شده CSS)"
// pe.readOnly: "Read-only" => "فقط خواندنی"
// pe.enableIf: "Editable if" => "قابل ویرایش اگر"
// pe.noRowsText: "\"No rows\" message" => "پیام \"بدون ردیف\""
// pe.size: "Input field size (in characters)" => "اندازه فیلد ورودی (در نویسه ها)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "انتخاب های ویژه جداگانه (هیچ کدام، دیگر، همه را انتخاب کنید)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "کپی کردن انتخابها از سؤال زیر"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "کدام گزینه ها را کپی کنید؟"
// pe.showCommentArea: "Show the comment area" => "نمایش ناحیهی نظرات"
// pe.commentPlaceholder: "Comment area placeholder" => "ذی نفع منطقه نظر"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "نمایش توضیحات نرخ به عنوان مقادیر شدید"
// pe.rowOrder: "Row order" => "سفارش ردیف"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "بستگی به طرح ماتریس دارد"
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
// theme.groupAdvanced: "Advanced" => "پیشرفته"
// theme.themeName: "Theme" => "تم"
// theme.isPanellessss: "Question appearance" => "ظاهر سوال"
// theme.isPanellessPanels: "Default" => "پیش فرض"
// theme.isPanellessLightweight: "Without Panels" => "بدون پانل"
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
// theme.surveyTitleFont: "Survey title font" => "قلم عنوان نظرسنجی"
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
// theme.header: "Header" => "هدر"
// theme.backgroundImageFitFill: "Stretch" => "کشش"
// theme.backgroundImageFitTile: "Tile" => "کاشی"
// theme.headerView: "View" => "مشاهده"
// theme.headerViewBasic: "Basic" => "اساسی"
// theme.headerViewAdvanced: "Advanced" => "پیشرفته"
// theme.headerInheritWidthFrom: "Content area width" => "عرض منطقه محتوا"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "همانند نظرسنجی"
// theme.headerInheritWidthFromPage: "Fit to page" => "متناسب با صفحه"
// theme.headerTextAreaWidth: "Text width" => "عرض متن"
// theme.headerBackgroundColorSwitch: "Background color" => "رنگ پسزمینه"
// theme.headerBackgroundColorNone: "None" => "هیچ کدام"
// theme.headerBackgroundColorAccentColor: "Accent color" => "رنگ لهجه"
// theme.headerBackgroundColorCustom: "Custom" => "سفارشی"
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
// theme.background: "Background" => "پس زمینه"
// theme.appearance: "Appearance" => "ظاهر"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "ایا واقعا می خواهید موضوع را دوباره تنظیم کنید؟ تمام سفارشی سازی های شما از دست خواهد رفت."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "بله، موضوع را تنظیم مجدد کنید"
// theme.headerInheritWidthFromContainer: "Fit to container" => "مناسب برای ظرف"
// signaturepad.showPlaceholder: "Show the placeholder" => "نشان دادن نگهدارندهی مکان"
// signaturepad.placeholder: "Placeholder text" => "متن ذی نفع"
// theme.surveyDescriptionFont: "Survey description font" => "قلم توصیف نظرسنجی"

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
// theme.headerTitlePosition: "Title position" => "موقعیت عنوان"
// theme.headerDescriptionPosition: "Description position" => "شرح موقعیت"
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
// ed.translateUsigAIFrom: "Translate from: " => "ترجمه از: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "اجازه دهید گزینه امتناع از پاسخ"
// pe.showDontKnowItem: "Allow the Don't Know option" => "گزینه Don't Know را انتخاب کنید"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "اجازه دهید گزینه امتناع از پاسخ"
// pe.showDontKnowItem: "Allow the Don't Know option" => "گزینه Don't Know را انتخاب کنید"
// pv.contain: "Contain" => "حاوی"
// pv.cover: "Cover" => "پوشش"
// pv.fill: "Fill" => "پر کردن"

// pe.transposeData: "Transpose rows to columns" => "جابهجا کردن سطرها به ستونها"
// layout.panel: "Layout" => "طرح"
// layout.question: "Layout" => "طرح"
// layout.base: "Layout" => "طرح"
// panel.name: "Panel name" => "نام تابلو"
// panel.title: "Panel title" => "عنوان پنل"
// panel.description: "Panel description" => "توضیحات پنل"
// panel.visibleIf: "Make the panel visible if" => "تابلو را مرئی کنید اگر"
// panel.requiredIf: "Make the panel required if" => "ایجاد پنل مورد نیاز اگر"
// panel.questionOrder: "Question order within the panel" => "سفارش سوال در داخل پنل"
// panel.startWithNewLine: "Display the panel on a new line" => "نمایش تابلو در یک خط جدید"
// panel.state: "Panel collapse state" => "دولت فروپاشی پانل"
// panel.width: "Inline panel width" => "عرض پانل درون خطی"
// panel.minWidth: "Minimum panel width" => "حداقل عرض پانل"
// panel.maxWidth: "Maximum panel width" => "حداکثر عرض پانل"
// paneldynamic.name: "Panel name" => "نام تابلو"
// paneldynamic.title: "Panel title" => "عنوان پنل"
// paneldynamic.description: "Panel description" => "توضیحات پنل"
// paneldynamic.visibleIf: "Make the panel visible if" => "تابلو را مرئی کنید اگر"
// paneldynamic.requiredIf: "Make the panel required if" => "ایجاد پنل مورد نیاز اگر"
// paneldynamic.page: "Move the panel to page" => "جابهجایی تابلو به صفحه"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "نمایش تابلو در یک خط جدید"
// paneldynamic.state: "Panel collapse state" => "دولت فروپاشی پانل"
// paneldynamic.width: "Inline panel width" => "عرض پانل درون خطی"
// paneldynamic.minWidth: "Minimum panel width" => "حداقل عرض پانل"
// paneldynamic.maxWidth: "Maximum panel width" => "حداکثر عرض پانل"
// paneldynamic.templateDescription: "Panel description pattern" => "الگوی توصیف پنل"
// paneldynamic.templateTitle: "Panel title pattern" => "الگوی عنوان پنل"
// paneldynamic.noEntriesText: "Empty panel text" => "متن تابلوی خالی"
// paneldynamic.templateTabTitle: "Tab title pattern" => "الگوی عنوان زبانه"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "ایجاد یک پنل منفرد مرئی اگر"
// paneldynamic.hideNumber: "Hide the panel number" => "مخفی کردن شمارهی تابلو"
// paneldynamic.titleLocation: "Panel title alignment" => "ترازبندی عنوان پنل"
// paneldynamic.descriptionLocation: "Panel description alignment" => "ترازبندی توضیحات پنل"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "هم ترازی عنوان پرسش"
// paneldynamic.templateErrorLocation: "Error message alignment" => "همترازسازی پیام خطا"
// paneldynamic.newPanelPosition: "New panel location" => "محل جدید پنل"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "جلوگیری از پاسخ های تکراری در سوال زیر"
// question.name: "Question name" => "نام سوال"
// question.title: "Question title" => "عنوان سوال"
// question.description: "Question description" => "توضیحات سوال"
// question.visibleIf: "Make the question visible if" => "سؤال را قابل مشاهده کنید اگر"
// question.requiredIf: "Make the question required if" => "سؤال مورد نیاز را مطرح کنید اگر"
// question.state: "Question box collapse state" => "جعبه سوال دولت فروپاشی"
// question.hideNumber: "Hide the question number" => "مخفی کردن شماره سوال"
// question.titleLocation: "Question title alignment" => "هم ترازی عنوان پرسش"
// question.descriptionLocation: "Question description alignment" => "هم ترازی توضیحات سؤال"
// question.errorLocation: "Error message alignment" => "همترازسازی پیام خطا"
// question.indent: "Increase the inner indent" => "افزایش تورفتگی داخلی"
// question.width: "Inline question width" => "عرض پرسش درون خطی"
// question.minWidth: "Minimum question width" => "حداقل عرض سوال"
// question.maxWidth: "Maximum question width" => "حداکثر عرض سؤال"
// question.textUpdateMode: "Update input field value" => "بهروزرسانی مقدار فیلد ورودی"
// signaturepad.allowClear: "Show the Clear button within signature area" => "نمایش دکمه پاک کردن در منطقه امضا"
// signaturepad.penColor: "Stroke color" => "رنگ سکته مغزی"
// comment.rows: "Input field height (in lines)" => "ارتفاع میدان ورودی (در خطوط)"
// expression.name: "Expression name" => "نام عبارت"
// expression.title: "Expression title" => "عنوان عبارت"
// expression.description: "Expression description" => "توصیف عبارت"
// expression.expression: "Expression" => "بیان"
// trigger.expression: "Expression" => "بیان"
// calculatedvalue.expression: "Expression" => "بیان"
// survey.description: "Survey description" => "توضیحات نظرسنجی"
// page.name: "Page name" => "نام صفحه"
// page.description: "Page description" => "توضیحات صفحه"
// page.visibleIf: "Make the page visible if" => "صفحه را مرئی کنید اگر"
// page.requiredIf: "Make the page required if" => "ایجاد صفحه مورد نیاز اگر"
// page.questionOrder: "Question order on the page" => "سفارش سوال در صفحه"
// matrixdropdowncolumn.name: "Column name" => "نام ستون"
// matrixdropdowncolumn.title: "Column title" => "عنوان ستون"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "جلوگیری از پاسخ های تکراری"
// matrixdropdowncolumn.width: "Column width" => "عرض ستون"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "حداقل عرض ستون"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "ارتفاع میدان ورودی (در خطوط)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "ستون را مرئی کنید اگر"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "ایجاد ستون مورد نیاز اگر"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "هر گزینه در یک ستون جداگانه"
// multipletextitem.name: "Name" => "نام"
// multipletextitem.title: "Title" => "عنوان"
// pe.rateDescriptionLocation: "Label alignment" => "تراز برچسب"
// pe.cellErrorLocation: "Cell error message alignment" => "همراستاسازی پیام خطای سلولی"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "شما هنوز هیچ ستونی ندارید"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "شما هنوز هیچ ردیفی ندارید"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "شما هنوز هیچ قانون اعتبار سنجی ندارید"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "شما هنوز هیچ متغیر سفارشی ندارید"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "شما هنوز هیچ محرکی ندارید"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "شما هنوز هیچ لینکی ندارید"
// pe.addNew@columns: "Add new column" => "افزودن ستون جدید"
// pe.addNew@rows: "Add new row" => "افزودن سطر جدید"
// pe.addNew@validators: "Add new rule" => "افزودن قانون جدید"
// pe.addNew@calculatedValues: "Add new variable" => "افزودن متغیر جدید"
// pe.addNew@triggers: "Add new trigger" => "افزودن ماشه جدید"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "افزودن نشانی وب جدید"
// choicesbyurl.url: "Web service's URL" => "نشانی وب سرویس"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "نمایش عناوین صفحه در نوار پیشرفت"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "نمایش شمارههای صفحه در نوار پیشرفت"
// itemvalue.visibleIf: "Make the option visible if" => "این گزینه قابل مشاهده است اگر"
// itemvalue.enableIf: "Make the option selectable if" => "گزینه را انتخاب کنید اگر"
// panel.layout: "Panel Layout" => "چیدمان پنل"
// tabs.questionSettings: "Question Settings" => "تنظیمات پرسش"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "سابق: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "سابق: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "سابق: الف)"
// pe.width_placeholder: "Ex.: 6in" => "سابق: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "سابق: 600 پیکسل"
// pe.maxWidth_placeholder: "Ex.: 50%" => "سابق: 50٪"
// pv.selected: "Selected" => "انتخاب"
// pv.unselected: "Unselected" => "انتخاب نشده"
// pv.center: "Center" => "مرکز"
// pv.middle: "Middle" => "میانه"
// pv.next: "Next" => "بعدی"
// pv.last: "Last" => "آخرین"
// clearIfInvisible.none: "Never" => "هرگز"
// questionsOnPageMode.standard: "Original structure" => "ساختار اصلی"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "نمایش تمام سوالات در یک صفحه"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "نمایش یک سؤال در هر صفحه"
// pv.auto: "Auto" => "خودکار"
// panelsState.firstExpanded: "First expanded" => "اولین گسترش"
// rateColorMode.scale: "Scale" => "مقیاس"
// scaleColorMode.monochrome: "Monochrome" => "تک رنگ"
// scaleColorMode.colored: "Colored" => "رنگی"
// state.default: "Locked" => "قفل"
// showQuestionNumbers.default: "Auto-numbering" => "شماره خودکار"
// showQuestionNumbers.on: "Auto-numbering" => "شماره خودکار"
// showQuestionNumbers.onPage: "Reset on each page" => "بازنشانی در هر صفحه"
// showQuestionNumbers.onpanel: "Reset on each panel" => "بازنشانی در هر پنل"
// showQuestionNumbers.onPanel: "Reset on each panel" => "بازنشانی در هر پنل"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "ادامه در سراسر نظرسنجی"
// showQuestionNumbers.off: "No numbering" => "بدون شماره"
// descriptionLocation.underTitle: "Under the question title" => "تحت عنوان سوال"
// descriptionLocation.underInput: "Under the input field" => "زیر فیلد ورودی"
// selectToRankAreasLayout.horizontal: "Next to choices" => "در کنار انتخاب ها"
// selectToRankAreasLayout.vertical: "Above choices" => "انتخاب های بالا"
// displayStyle.decimal: "Decimal" => "اعشاری"
// displayStyle.currency: "Currency" => "ارز"
// displayStyle.percent: "Percentage" => "درصد"
// displayStyle.date: "Date" => "تاریخ"
// totalDisplayStyle.decimal: "Decimal" => "اعشاری"
// totalDisplayStyle.currency: "Currency" => "ارز"
// totalDisplayStyle.percent: "Percentage" => "درصد"
// totalDisplayStyle.date: "Date" => "تاریخ"
// rowOrder.initial: "Original" => "اصلی"
// questionOrder.initial: "Original" => "اصلی"
// showProgressBar.aboveheader: "Above the header" => "بالای سرصفحه"
// showProgressBar.belowheader: "Below the header" => "زیر سرایند"
// pv.sum: "Sum" => "مجموع"
// pv.count: "Count" => "تعداد"
// pv.min: "Min" => "دقیقه"
// pv.max: "Max" => "حداکثر"
// pv.avg: "Avg" => "میانگین"
// searchMode.contains: "Contains" => "شامل"
// searchMode.startsWith: "Starts with" => "شروع با"
// panel.name: "A panel ID that is not visible to respondents." => "یک شناسه پانل که برای پاسخ دهندگان قابل مشاهده نیست."
// panel.description: "Type a panel subtitle." => "یک زیرنویس پانل تایپ کنید."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی که دید پانل را تعیین می کند استفاده کنید."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای پانل غیرفعال می کند."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "برای تمام سوالات در این پنل اعمال می شود. اگر می خواهید این تنظیم را لغو کنید، قوانین تراز عنوان را برای سوالات فردی تعریف کنید. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "مکان یک پیام خطا را در رابطه با تمام سوالات درون پانل تنظیم می کند. گزینه \"Inherit\" شامل تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی است."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "ترتیب اصلی سوالات را نگه می دارد یا انها را تصادفی می کند. گزینه \"Inherit\" شامل تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی است."
// panel.page: "Repositions the panel to the end of a selected page." => "پانل را به انتهای صفحه انتخاب شده تغییر می دهد."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "اضافه کردن فضا یا حاشیه بین محتوای پانل و مرز سمت چپ جعبه پانل."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "عدم انتخاب برای نمایش پانل در یک خط با سوال قبلی یا پانل. تنظیمات اعمال نمی شود اگر پانل اولین عنصر در فرم شما باشد."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "را انتخاب کنید از: \"گسترش یافته\" - پانل به طور کامل نمایش داده می شود و می تواند سقوط کند؛ \"سقوط\" - پانل تنها عنوان و توضیحات را نمایش می دهد و می تواند گسترش یابد. \"Locked\" - پانل به طور کامل نمایش داده می شود و نمی تواند سقوط کند."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "عرض پانل را متناسب با سایر عناصر بررسی در همان خط تنظیم می کند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "یک شناسه پانل که برای پاسخ دهندگان قابل مشاهده نیست."
// paneldynamic.description: "Type a panel subtitle." => "یک زیرنویس پانل تایپ کنید."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی که دید پانل را تعیین می کند استفاده کنید."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای پانل غیرفعال می کند."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "برای تمام سوالات در این پنل اعمال می شود. اگر می خواهید این تنظیم را لغو کنید، قوانین تراز عنوان را برای سوالات فردی تعریف کنید. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "محل یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم میکند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "مکان یک پیام خطا را در رابطه با تمام سوالات درون پانل تنظیم می کند. گزینه \"Inherit\" شامل تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی است."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "پانل را به انتهای صفحه انتخاب شده تغییر می دهد."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "اضافه کردن فضا یا حاشیه بین محتوای پانل و مرز سمت چپ جعبه پانل."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "عدم انتخاب برای نمایش پانل در یک خط با سوال قبلی یا پانل. تنظیمات اعمال نمی شود اگر پانل اولین عنصر در فرم شما باشد."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "را انتخاب کنید از: \"گسترش یافته\" - پانل به طور کامل نمایش داده می شود و می تواند سقوط کند؛ \"سقوط\" - پانل تنها عنوان و توضیحات را نمایش می دهد و می تواند گسترش یابد. \"Locked\" - پانل به طور کامل نمایش داده می شود و نمی تواند سقوط کند."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "عرض پانل را متناسب با سایر عناصر بررسی در همان خط تنظیم می کند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "قالب را برای عناوین پانل پویا تایپ کنید. از {panelIndex} برای موقعیت عمومی پانل و {visiblePanelIndex} برای سفارش ان در میان پانل های قابل مشاهده استفاده کنید. این نگهدارنده ها را در الگو قرار دهید تا شماره گذاری خودکار اضافه شود."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "در قالبی برای عناوین زبانه تایپ کنید. از {panelIndex} برای موقعیت عمومی پانل و {visiblePanelIndex} برای سفارش ان در میان پانل های قابل مشاهده استفاده کنید. این نگهدارنده ها را در الگو قرار دهید تا شماره گذاری خودکار اضافه شود."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "این تنظیم به شما اجازه می دهد تا دید پانل های فردی را در پانل پویا کنترل کنید. از نگهدارنده '{panel}' برای ارجاع به پنل فعلی در عبارت خود استفاده کنید."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "این تنظیم به طور خودکار توسط تمام سوالات موجود در این پنل به ارث برده می شود. اگر می خواهید این تنظیم را لغو کنید، قوانین تراز عنوان را برای سوالات فردی تعریف کنید. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "گزینه \"Inherit\" سطح صفحه (در صورت تنظیم) یا تنظیم سطح نظرسنجی (\"زیر عنوان پانل\" به طور پیش فرض) اعمال می شود."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "موقعیت یک پانل تازه اضافه شده را تعریف می کند. به طور پیش فرض، پانل های جدید به پایان اضافه می شوند. \"Next\" را انتخاب کنید تا یک پانل جدید پس از پانل فعلی وارد شود."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "پاسخ ها را از اخرین پانل تکرار می کند و انها را به پانل پویا اضافه شده بعدی اختصاص می دهد."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "مرجع یک نام سوال نیاز به یک کاربر برای ارائه یک پاسخ منحصر به فرد برای این سوال در هر پانل."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "این تنظیم به شما اجازه می دهد تا یک مقدار پاسخ پیش فرض را بر اساس یک عبارت اختصاص دهید. این عبارت می تواند شامل محاسبات اساسی - \"{q1_id} + {q2_id}'، عبارات بولی مانند \"{age} > 60\" و توابع: \"iif()\"، \"today()\"، \"age()\"، \"min()\"، \"max()\"، \"avg()\" و غیره باشد. مقدار تعیین شده توسط این عبارت به عنوان مقدار پیش فرض اولیه عمل می کند که می تواند توسط ورودی دستی پاسخ دهنده لغو شود."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که تعیین می کند چه زمانی ورودی پاسخ دهنده به مقدار بر اساس \"بیان مقدار پیش فرض\" یا \"تنظیم مقدار بیان\" یا \"پاسخ پیش فرض\" مقدار (اگر هر کدام تنظیم شده است) تنظیم مجدد شود."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که تعیین می کند چه زمانی \"Set value expression\" را اجرا کنید و به صورت پویا مقدار حاصل را به عنوان یک پاسخ اختصاص دهید."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "یک عبارت را مشخص کنید که مقدار تعیین شده را هنگامی که شرایط در قانون \"Set value if\" براورده می شود، تعریف می کند. این عبارت می تواند شامل محاسبات اساسی - \"{q1_id} + {q2_id}'، عبارات بولی مانند \"{age} > 60\" و توابع: \"iif()\"، \"today()\"، \"age()\"، \"min()\"، \"max()\"، \"avg()\" و غیره باشد. مقدار تعیین شده توسط این عبارت می تواند توسط ورودی دستی پاسخ دهنده لغو شود."
// question.name: "A question ID that is not visible to respondents." => "یک شناسه سوال که برای پاسخ دهندگان قابل مشاهده نیست."
// question.description: "Type a question subtitle." => "یک سوال زیر نویس تایپ کنید."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که دید سوال را تعیین می کند."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای سوال غیرفعال می کند."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع پیشرفت یا تسلیم نظرسنجی می شود مگر اینکه سوال پاسخی دریافت کند."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "عدم انتخاب برای نمایش سوال در یک خط با سوال قبلی یا پانل. تنظیمات اعمال نمی شود اگر سوال اولین عنصر در فرم شما باشد."
// question.page: "Repositions the question to the end of a selected page." => "سؤال را به انتهای صفحه انتخاب شده تغییر می دهد."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "را انتخاب کنید از: \"گسترش یافته\" - جعبه سوال به طور کامل نمایش داده می شود و می تواند سقوط کند؛ \"سقوط\" - جعبه سوال تنها عنوان و توضیحات را نمایش می دهد و می تواند گسترش یابد. \"Locked\" - جعبه سوال به طور کامل نمایش داده می شود و نمی تواند سقوط کند."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "قوانین هم ترازی عنوان تعریف شده در یک پانل، صفحه یا سطح نظرسنجی را لغو می کند. گزینه \"Inherit\" تنظیمات سطح بالاتر (در صورت تنظیم) یا تنظیمات سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "گزینه \"به ارث بردن\" تنظیم سطح نظرسنجی (\"تحت عنوان سوال\" به طور پیش فرض) اعمال می شود."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "مکان یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم می کند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "فضای یا حاشیه بین محتوای سوال و مرز سمت چپ جعبه سوال اضافه می کند."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "عرض سوال را متناسب با سایر عناصر نظرسنجی در همان خط تنظیم می کند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "از نماد چوب جادویی برای تنظیم یک قانون اعتبار سنجی برای سوال استفاده کنید."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "انتخاب از: \"در تمرکز از دست رفته\" - مقدار به روز شده است زمانی که فیلد ورودی تمرکز خود را از دست می دهد؛ \"در هنگام تایپ\" - مقدار در زمان واقعی به روز می شود، زیرا کاربران تایپ می کنند. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"در تمرکز از دست رفته\" به طور پیش فرض) اعمال می شود."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "شما می توانید از هر سرویس وب به عنوان منبع داده برای سوالات چند گزینه ای استفاده کنید. برای پر کردن مقادیر انتخاب، URL سرویس ارائه دهنده داده ها را وارد کنید."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "یک عملیات مقایسه ای که برای فیلتر کردن لیست کشویی استفاده می شود."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "عرض ناحیه امضای نمایش داده شده و تصویر حاصل را تنظیم می کند."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "ارتفاع ناحیه امضای نمایش داده شده و تصویر حاصل را تنظیم میکند."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "اگر می خواهید منطقه امضا برای پر کردن تمام فضای موجود در جعبه سوال در حالی که حفظ پیش فرض 3: 2 نسبت ابعاد را انتخاب کنید. هنگامی که عرض سفارشی و مقادیر ارتفاع تنظیم می شود، تنظیم نسبت ابعاد این ابعاد را حفظ می کند."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "ارتفاع تصویر را در نتایج نظرسنجی تنظیم می کند."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "عرض تصویر را در نتایج نظرسنجی تنظیم می کند."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "مقادیر حداقل و حداکثر ارتفاع را نادیده می گیرد."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "مقادیر حداقل و حداکثر عرض را نادیده می گیرد."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"ارزش\" به عنوان یک شناسه مورد استفاده در قوانین شرطی عمل می کند. \"متن\" به پاسخ دهندگان نمایش داده می شود."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "این تنظیم فقط فیلد ورودی را تغییر اندازه می دهد و روی عرض جعبه پرسش تاثیر نمی گذارد. برای محدود کردن طول ورودی پذیرفته شده، به <b>Validation → Maximum character limit</b> بروید."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "تعداد خطوط نمایش داده شده در فیلد ورودی را تنظیم می کند. اگر ورودی خطوط بیشتری را بگیرد، نوار اسکرول ظاهر می شود."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "انتخاب بین: \"قابل ویرایش\" - پاسخ دهندگان را قادر می سازد تا نظرسنجی خود را پر کنند. \"فقط خواندنی\" - ویرایش فرم را غیرفعال می کند."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "یک شناسه ستون که برای پاسخ دهندگان قابل مشاهده نیست."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "هنگامی که برای یک ستون فعال می شود، یک پاسخ دهنده باید یک پاسخ منحصر به فرد برای هر سوال در این ستون ارائه دهد."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "تعداد خطوط نمایش داده شده در فیلد ورودی را تنظیم می کند. اگر ورودی خطوط بیشتری را بگیرد، نوار اسکرول ظاهر می شود."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی که دید ستون را تعیین می کند استفاده کنید."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای ستون غیرفعال می کند."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "هنگامی که انتخاب می شود، یک ستون فردی برای هر گزینه انتخاب ایجاد می کند."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "را انتخاب کنید از: \"استاتیک\" - مجموعه عرض ثابت؛ \"پاسخگو\" - باعث می شود نظرسنجی عرض کامل صفحه نمایش را اشغال کند؛ \"Auto\" - هر یک از این دو را بسته به نوع سوال مورد استفاده اعمال می کند."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "چسباندن یک پیوند تصویر (بدون محدودیت اندازه) یا روی نماد پوشه کلیک کنید تا یک فایل را از رایانه خود مرور کنید (تا 64KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "عرض لوگو را در واحدهای CSS تنظیم می کند (px، ٪، in، pt و غیره)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "ارتفاع لوگو را در واحدهای CSS تنظیم می کند (px، ٪، in، pt و غیره)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "انتخاب از: \"هیچ\" - تصویر اندازه اصلی خود را حفظ می کند؛ \"شامل\" - تصویر تغییر اندازه به جا در حالی که حفظ نسبت ابعاد ان؛ \"Cover\" - تصویر کل جعبه را پر می کند در حالی که نسبت ابعاد ان را حفظ می کند. \"Fill\" - تصویر برای پر کردن جعبه بدون حفظ نسبت ابعاد ان کشیده می شود."
// pehelp.: "Select if you want the survey to advance to the next page automatically after a respondent answers all questions on the current page." => "انتخاب کنید که ایا می خواهید نظرسنجی به طور خودکار به صفحه بعدی پیش رود پس از اینکه یک پاسخ دهنده به تمام سوالات در صفحه فعلی پاسخ داد."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "قابلیت مشاهده و مکان دکمه های پیمایش را در یک صفحه تنظیم می کند."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "دید و مکان یک نوار پیشرفت را تنظیم می کند. مقدار \"Auto\" نوار پیشرفت را در بالا یا پایین هدر نظرسنجی نشان می دهد."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "صفحه پیش نمایش را فقط با تمام سوالات یا پاسخ داده شده فعال کنید."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "به تمام سوالات در نظرسنجی اعمال می شود. این تنظیم را می توان با قوانین هم ترازی عنوان در سطوح پایین تر لغو کرد: پانل، صفحه یا سوال. یک تنظیم سطح پایین تر، کسانی را که در سطح بالاتری قرار دارند، نادیده می گیرد."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "یک نماد یا دنباله ای از نمادها نشان می دهد که یک پاسخ مورد نیاز است."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "یک شماره یا حرف را وارد کنید که می خواهید با ان شروع به شماره گیری کنید."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "مکان یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم می کند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "انتخاب کنید که ایا می خواهید اولین فیلد ورودی در هر صفحه اماده برای ورود متن باشد."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "ترتیب اصلی سوالات را نگه می دارد یا انها را تصادفی می کند. اثر این تنظیم فقط در تب Preview قابل مشاهده است."
// pehelp.maxTextLength: "For text entry questions only." => "فقط برای سوالات ورودی متن."
// pehelp.maxCommentLength: "For question comments only." => "فقط برای نظرات سوال."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "انتخاب کنید اگر شما می خواهید نظرات سوال و سوالات متن بلند به رشد خودکار در ارتفاع بر اساس طول متن وارد شده است."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "برای نظرات سوال و سوالات طولانی متن تنها."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "متغیرهای سفارشی به عنوان متغیرهای متوسط یا کمکی مورد استفاده در محاسبات فرم عمل می کنند. انها ورودی های پاسخ دهنده را به عنوان مقادیر منبع می گیرند. هر متغیر سفارشی دارای یک نام منحصر به فرد و یک عبارت است که بر اساس ان است."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "اگر میخواهید مقدار محاسبهشده عبارت همراه با نتایج نظرسنجی ذخیره شود ، برگزینید."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Trigger یک رویداد یا شرایطی است که بر اساس یک عبارت است. هنگامی که عبارت به \"درست\" ارزیابی می شود، یک ماشه یک عمل را تنظیم می کند. چنین اقدامی می تواند به صورت اختیاری یک سوال هدف داشته باشد که بر ان تاثیر می گذارد."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "انتخاب کنید که ایا برای پاک کردن ارزش ها برای سوالات پنهان شده توسط منطق شرطی و زمانی که ان را انجام دهید."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "انتخاب از: \"در تمرکز از دست رفته\" - مقدار به روز شده است زمانی که فیلد ورودی تمرکز خود را از دست می دهد؛ \"در هنگام تایپ\" - مقدار در زمان واقعی به روز می شود، زیرا کاربران تایپ می کنند."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "مقدار چپ به عنوان یک شناسه ستون مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب به پاسخ دهندگان نمایش داده می شود."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "مقدار سمت چپ به عنوان یک شناسه ردیف مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب به پاسخ دهندگان نمایش داده می شود."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "محل یک پیام خطا را در رابطه با یک سلول با ورودی نامعتبر تنظیم می کند. گزینه \"Inherit\" تنظیمات را از ویژگی \"Error message alignment\" اعمال می کند."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "هنگامی که ویژگی \"جلوگیری از پاسخ های تکراری\" فعال می شود، پاسخ دهنده ای که سعی در ارسال یک ورودی تکراری دارد، پیام خطای زیر را دریافت می کند."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "به شما اجازه می دهد تا مقادیر کل را بر اساس یک عبارت محاسبه کنید. این عبارت می تواند شامل محاسبات اساسی ('{q1_id} + {q2_id}')، عبارات بولی ('{age} > 60') و توابع ('iif()'، 'today()'، 'age()'، 'min()'، 'max()'، 'avg()'، و غیره باشد."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "یک درخواست فوری برای تایید حذف ردیف ایجاد می کند."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "پاسخ ها را از اخرین ردیف تکرار می کند و انها را به ردیف دینامیک بعدی اضافه می کند."
// pehelp.description: "Type a subtitle." => "یک زیرنویس تایپ کنید."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "یک زبان را برای شروع ایجاد نظرسنجی خود انتخاب کنید. برای اضافه کردن ترجمه، به یک زبان جدید بروید و متن اصلی را در اینجا یا در زبانه ترجمه ترجمه ترجمه کنید."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "مکان یک بخش جزئیات را در رابطه با یک ردیف تنظیم می کند. انتخاب از: \"هیچ\" - هیچ گسترش اضافه شده است؛ \"زیر ردیف\" - گسترش ردیف در زیر هر ردیف ماتریس قرار می گیرد؛ \"زیر ردیف، فقط یک ردیف را نمایش می دهد\" - یک گسترش فقط در زیر یک ردیف نمایش داده می شود، گسترش ردیف باقی مانده سقوط می کند."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "انتخاب از: \"هیچ\" - تصویر اندازه اصلی خود را حفظ می کند؛ \"شامل\" - تصویر تغییر اندازه به جا در حالی که حفظ نسبت ابعاد ان؛ \"Cover\" - تصویر کل جعبه را پر می کند در حالی که نسبت ابعاد ان را حفظ می کند. \"Fill\" - تصویر برای پر کردن جعبه بدون حفظ نسبت ابعاد ان کشیده می شود."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "به تدریج ارتفاع میدان ورودی را افزایش می دهد زیرا داده ها وارد می شوند. تنظیم \"ارتفاع میدان ورودی (در خطوط)\" را لغو می کند."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "دسته تغییر اندازه (یا گرفتن) در گوشه ظاهر می شود و می تواند برای تغییر اندازه میدان ورودی کشیده شود."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "یک فاصله زمانی در ثانیه که پس از ان نظرسنجی به طور خودکار به صفحه تشکر از شما پیش می رود."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "یک فاصله زمانی در ثانیه که پس از ان نظرسنجی به طور خودکار به صفحه بعدی پیش می رود."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "یک فاصله زمانی در ثانیه که پس از ان نظرسنجی به طور خودکار به صفحه بعدی پیش می رود."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که دید صفحه را تعیین می کند."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای صفحه غیرفعال می کند."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "به تمام سوالات موجود در این صفحه اعمال می شود. اگر می خواهید این تنظیمات را لغو کنید، قوانین تراز عنوان را برای سوالات یا پانل های فردی تعریف کنید. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "مکان یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم می کند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "ترتیب اصلی سوالات را نگه می دارد یا انها را تصادفی می کند. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"اصلی\" به طور پیش فرض) را اعمال می کند. اثر این تنظیم فقط در تب Preview قابل مشاهده است."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "قابلیت مشاهده دکمههای پیمایش را روی صفحه تنظیم میکند. گزینه \"به ارث بردن\" تنظیم سطح نظرسنجی را اعمال می کند که به طور پیش فرض به \"قابل مشاهده\" است."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "انتخاب از: \"قفل شده\" - کاربران نمی توانند پانل ها را گسترش یا سقوط دهند؛ \"سقوط همه\" - تمام پانل ها در یک حالت فروپاشی شروع می شوند؛ \"گسترش همه\" - تمام پانل ها در یک حالت گسترش یافته شروع می شوند؛ \"اولین گسترش\" - تنها پانل اول در ابتدا گسترش یافته است."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "یک نام خصوصیت مشترک را درون ارایۀ اشیایی که حاوی نشانیهای اینترنتی پرونده تصویر یا ویدئویی است که میخواهید در فهرست انتخاب نمایش داده شود، وارد کنید."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "مقدار سمت چپ به عنوان یک شناسه مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب برای پاسخ دهندگان نمایش داده می شود."
// pehelp.title: "Type a user-friendly title to display." => "یک عنوان کاربر پسند برای نمایش تایپ کنید."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "اطمینان حاصل می کند که کاربران تا زمانی که فایل ها اپلود نشده اند، نظرسنجی را تکمیل نخواهند کرد."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "در انواع سوالات تک و چند انتخاب، هر گزینه انتخاب دارای یک شناسه و مقدار نمایش است. هنگامی که انتخاب می شود، این تنظیم یک مقدار نمایش را به جای یک مقدار ID در سوالات HTML و عناوین پویا و توصیف عناصر بررسی نشان می دهد."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "انتخاب کنید که ایا برای پاک کردن یا نه ارزش سوال پنهان شده توسط منطق شرطی و زمانی که به ان را انجام دهد. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"پس از اتمام نظرسنجی\" به طور پیش فرض) اعمال می شود."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "انتخاب از: \"همه\" - کپی تمام گزینه های انتخاب از سوال انتخاب شده؛ \"انتخاب شده\" - به صورت پویا فقط گزینه های انتخاب شده را کپی می کند؛ \"Unselected\" - به صورت پویا تنها گزینه های انتخاب نشده را کپی می کند. گزینه های \"None\" و \"Other\" در صورت فعال شدن در سؤال منبع به طور پیش فرض کپی می شوند."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "هنگامی که انتخاب می شوند، کاربران می توانند ورودی های اضافی را در یک جعبه نظر جداگانه قرار دهند."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "نمایش هر گزینه انتخاب خاص (\"هیچ\"، \"دیگر\"، \"انتخاب همه\") در یک خط جدید، حتی در هنگام استفاده از یک طرح چند ستون."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "مشخص کردن محل در مجموعه داده های سرویس که در ان ارایه هدف از اشیاء واقع شده است. ترک خالی اگر URL در حال حاضر به ارایه اشاره می کند."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "یک نام ویژگی یکنواخت را در ارایه اشیایی که حاوی مقادیری است که می خواهید در لیست انتخاب نمایش داده شود وارد کنید."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "انتخاب کنید تا سرویس بتواند یک پاسخ یا ارایه خالی را بازگرداند."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که دید همه گزینه های انتخابی را تعیین می کند."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "مقدار سمت چپ به عنوان یک شناسه مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب برای پاسخ دهندگان نمایش داده می شود."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" بین حالت های \"Buttons\" و \"Dropdown\" بر اساس عرض موجود انتخاب می شود. هنگامی که عرض برای نمایش دکمه ها کافی نیست، سوال یک کشویی را نشان می دهد."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "اجازه می دهد تا شما را به اتصال سوالات است که تولید نتایج در فرمت های مختلف. هنگامی که چنین سوالاتی با استفاده از یک شناسه پیوستن به هم مرتبط می شوند، این ویژگی مشترک مقادیر سوال انتخاب شده را ذخیره می کند."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "انتخاب کنید که ایا می خواهید محتویات منوی کشویی را به روز کنید تا با پرسوجوی جستجویی که کاربر در قسمت ورودی تایپ می کند مطابقت داشته باشد."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "ارزش برای صرفه جویی در نتایج نظرسنجی زمانی که پاسخ دهندگان پاسخ مثبت می دهند."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "ارزش برای صرفه جویی در نتایج نظرسنجی زمانی که پاسخ دهندگان پاسخ منفی می دهند."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "توصیه نمی شود این گزینه را غیرفعال کنید زیرا تصویر Preview را نادیده می گیرد و درک اینکه ایا فایل ها اپلود شده اند را برای کاربر دشوار می کند."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "یک اعلان برای تایید حذف پرونده ایجاد می کند."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "فقط گزینه های انتخاب شده را رتبه بندی کنید. کاربران موارد انتخاب شده را از لیست انتخاب می کنند تا انها را در منطقه رتبه بندی سفارش دهند."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "لیستی از انتخاب هایی را وارد کنید که در طول ورودی به مخاطب پیشنهاد می شود."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "تنظیم فقط زمینه های ورودی را تغییر می دهد و بر عرض جعبه سوال تاثیر نمی گذارد."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "عرض سازگار را برای همۀ برچسبهای فقره به تصویردانه تنظیم میکند"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "گزینه \"Auto\" به طور خودکار حالت مناسب برای نمایش - تصویر، ویدئو یا یوتیوب - را بر اساس URL منبع ارائه شده تعیین می کند."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "به عنوان یک جایگزین زمانی که تصویر نمی تواند بر روی دستگاه کاربر و برای اهداف دسترسی نمایش داده شود."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "رنگ ایموجی انتخاب شده را هنگامی که نوع نماد رتبه بندی روی \"Smileys\" تنظیم شده است، تعریف می کند. انتخاب بین: \"پیش فرض\" - ایموجی انتخاب شده در رنگ پیش فرض بررسی ظاهر می شود؛ \"Scale\" - ایموجی انتخاب شده رنگ را از مقیاس رتبه بندی به ارث می برد."
// expression.name: "An expression ID that is not visible to respondents." => "یک شناسه بیان که برای پاسخ دهندگان قابل مشاهده نیست."
// expression.description: "Type an expression subtitle." => "زیر نویس عبارت را تایپ کنید."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "یک عبارت می تواند شامل محاسبات اساسی ('{q1_id} + {q2_id}')، شرایط ('{age} > 60') و توابع ('iif()'، 'today()'، 'age()'، 'min()'، 'max()'، 'avg()'' و غیره باشد."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "انتخاب کنید برای ذخیره \"دیگر\" مقدار گزینه به عنوان یک ملک جداگانه در نتایج نظرسنجی."
// p.swapOrder: "Swap the order of Yes and No" => "تعویض سفارش بله و خیر"
// p.itemTitleWidth: "Item label width (in px)" => "عرض برچسب مورد (در پیکسل)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "متن برای نشان دادن اینکه ایا همه گزینهها انتخاب شدهاند"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "متن نگهدارنده برای منطقه رتبه بندی"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "بررسی را به طور خودکار تکمیل کنید"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "انتخاب کنید که ایا می خواهید نظرسنجی به طور خودکار پس از پاسخ دادن به تمام سوالات پاسخ دهد."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "ذخیره مقدار ماسک در نتایج نظرسنجی"
// patternmask.pattern: "Value pattern" => "الگوی ارزش"
// datetimemask.min: "Minimum value" => "حداقل مقدار"
// datetimemask.max: "Maximum value" => "بیشینه مقدار"
// numericmask.allowNegativeValues: "Allow negative values" => "اجازه دادن مقادیر منفی"
// numericmask.thousandsSeparator: "Thousands separator" => "هزار جداکننده"
// numericmask.decimalSeparator: "Decimal separator" => "جداساز دهدهی"
// numericmask.precision: "Value precision" => "دقت ارزش"
// numericmask.min: "Minimum value" => "حداقل مقدار"
// numericmask.max: "Maximum value" => "بیشینه مقدار"
// currencymask.prefix: "Currency prefix" => "پیشوند ارز"
// currencymask.suffix: "Currency suffix" => "پسوند ارز"
// pe.maskType: "Input mask type" => "نوع ماسک ورودی"
// maskTypes.patternmask: "Pattern" => "الگوی"
// maskTypes.numericmask: "Numeric" => "عددی"
// maskTypes.datetimemask: "Date and Time" => "تاریخ و زمان"
// maskTypes.currencymask: "Currency" => "ارز"
// tabs.mask: "Input Mask Settings" => "تنظیمات ماسک ورودی"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "شماره تماس: +1 (999) -999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "سابق: mm / dd / yyyyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "سابق: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Ex.: دلار امریکا"
// pv.textWrapEnabled: "Wrap choices" => "انتخاب های بسته بندی"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "متون طولانی در گزینه های انتخاب به طور خودکار شکستن خط را ایجاد می کنند تا در منوی کشویی قرار بگیرند. اگر می خواهید متن ها کلیپ شوند، انتخاب را لغو کنید."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "انتخاب کنید که ایا می خواهید مقدار سؤال را با یک ماسک کاربردی در نتایج نظرسنجی ذخیره کنید."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "الگو می تواند شامل literals رشته و متغیرهای زیر باشد: '9' - برای یک رقم؛ 'a' - برای یک حرف بزرگ یا کوچک؛ \"#\" - برای یک رقم یا یک حرف بزرگ یا کوچک. استفاده از backslash '\\' برای فرار از یک شخصیت."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "الگو می تواند شامل کاراکترهای جداکننده و متغیرهای زیر باشد: \"m\" - برای شماره ماه؛ 'mm' - برای شماره ماه، با صفر پیشرو برای مقادیر تک رقمی؛ 'd' - برای روز ماه؛ 'dd' - برای روز ماه، با صفر پیشرو برای مقادیر تک رقمی؛ 'yy' - برای دو رقم اخر سال؛ 'yyyyy' - برای یک سال چهار رقمی."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "نمادی که برای جدا کردن قسمت کسری از قسمت صحیح یک عدد نمایش داده شده استفاده می شود."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "نمادی که برای جدا کردن ارقام یک عدد بزرگ به گروه های سه نفره استفاده می شود."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "محدود کردن تعداد ارقام برای حفظ پس از نقطه اعشار برای یک عدد نمایش داده شده."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "یک یا چند نماد قبل از مقدار نمایش داده می شود."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "یک یا چند نماد بعد از مقدار نمایش داده می شود."
// ed.translationSource: "Source: " => "منبع: "
// ed.translationTarget: "Target: " => "هدف: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "صفحه خالی است. یک عنصر را از جعبه ابزار بکشید یا روی دکمه زیر کلیک کنید."
// maskTypes.none: "None" => "هیچ کدام"
// itemvalue@rows.visibleIf: "Make the row visible if" => "سطر را مرئی کنید اگر"
// itemvalue@rows.enableIf: "Make the row editable if" => "ردیف را قابل ویرایش کنید اگر"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "متن نگهدارنده در حالت فقط خواندنی یا پیشنمایش"
// pe.textWrapEnabled: "Wrap choices" => "انتخاب های بسته بندی"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "گزینه \"Auto\" به طور خودکار حالت مناسب برای نمایش - تصویر، ویدئو یا یوتیوب - را بر اساس URL منبع ارائه شده تعیین می کند."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "بین \"تصویر\" و \"ویدئو\" را انتخاب کنید تا حالت محتوا را انتخاب کنید. اگر \"تصویر\" انتخاب شده است، اطمینان حاصل کنید که تمام گزینه های ارائه شده فایل های تصویری در فرمت های زیر هستند: JPEG، GIF، PNG، APNG، SVG، BMP، ICO. به طور مشابه، اگر \"ویدئو\" انتخاب شده است، اطمینان حاصل کنید که تمام گزینه ها لینک مستقیم به فایل های ویدئویی در فرمت های زیر هستند: MP4، MOV، WMV، FLV، AVI، MKV. لطفا توجه داشته باشید که پیوندهای YouTube برای گزینه های ویدیویی پشتیبانی نمی شوند."
// ed.selectFile: "Select a file" => "یک پرونده انتخاب کنید"
// ed.removeFile: "Remove the file" => "حذف پرونده"
// pe.searchMode: "Search Mode" => "حالت جستجو"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "روی دکمه \"افزودن سؤال\" در زیر کلیک کنید تا شروع به ایجاد فرم خود کنید."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "روی دکمه \"افزودن سؤال\" در زیر کلیک کنید تا عنصر جدیدی به صفحه اضافه شود."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "روی دکمه \"افزودن سؤال\" در زیر کلیک کنید تا یک عنصر جدید به پانل اضافه شود."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "روی دکمه زیر کلیک کنید و تصویری را برای اپلود انتخاب کنید"
// coloralpha.opacity: "Opacity" => "کدورت"
// font.family: "Font family" => "خانواده قلم"
// font.color: "Color" => "رنگ"
// font.placeholderColor: "Placeholder color" => "رنگ نگهدارنده"
// font.size: "Size" => "اندازه"
// theme.themeName: "Theme" => "تم"
// theme.isPanelless: "Question appearance" => "ظاهر سوال"
// theme.editorPanel: "Background and corner radius" => "پس زمینه و شعاع گوشه"
// theme.questionPanel: "Background and corner radius" => "پس زمینه و شعاع گوشه"
// theme.primaryColor: "Accent color" => "رنگ لهجه"
// theme.panelBackgroundTransparency: "Panel background opacity" => "تاری پسزمینه پانل"
// theme.questionBackgroundTransparency: "Question background opacity" => "تاری پسزمینۀ سؤال"
// theme.fontSize: "Font size" => "اندازه قلم"
// theme.scale: "Scale" => "مقیاس"
// theme.cornerRadius: "Corner radius" => "شعاع گوشه"
// theme.pageTitle: "Title font" => "قلم عنوان"
// theme.pageDescription: "Description font" => "قلم توصیف"
// theme.questionTitle: "Title font" => "قلم عنوان"
// theme.questionDescription: "Description font" => "قلم توصیف"
// theme.editorFont: "Font" => "فونت"
// theme.backgroundOpacity: "Opacity" => "کدورت"
// theme.--sjs-font-family: "Font family" => "خانواده قلم"
// theme.--sjs-general-backcolor-dim: "Background color" => "رنگ پسزمینه"
// theme.--sjs-primary-backcolor: "Accent background" => "پسزمینۀ لهجه"
// theme.--sjs-primary-forecolor: "Accent foreground" => "پیشزمینه لهجه"
// theme.--sjs-shadow-small: "Shadow effects" => "جلوه های سایه"
// theme.--sjs-shadow-inner: "Shadow effects" => "جلوه های سایه"
// theme.--sjs-border-default: "Colors" => "رنگ"
// header@header.headerView: "View" => "مشاهده"
// header@header.logoPosition: "Logo position" => "موقعیت لوگو"
// header@header.surveyTitle: "Survey title font" => "قلم عنوان نظرسنجی"
// header@header.surveyDescription: "Survey description font" => "قلم توصیف نظرسنجی"
// header@header.headerTitle: "Survey title font" => "قلم عنوان نظرسنجی"
// header@header.headerDescription: "Survey description font" => "قلم توصیف نظرسنجی"
// header@header.inheritWidthFrom: "Content area width" => "عرض منطقه محتوا"
// header@header.textAreaWidth: "Text width" => "عرض متن"
// header@header.backgroundColorSwitch: "Background color" => "رنگ پسزمینه"
// header@header.backgroundImage: "Background image" => "تصویر زمینه"
// header@header.backgroundImageOpacity: "Opacity" => "کدورت"
// header@header.overlapEnabled: "Overlap" => "همپوشانی"
// header@header.logoPositionX: "Logo position" => "موقعیت لوگو"
// header@header.titlePositionX: "Title position" => "موقعیت عنوان"
// header@header.descriptionPositionX: "Description position" => "شرح موقعیت"
// weight.400: "Regular" => "منظم"
// weight.600: "Heavy" => "سنگین"
// weight.700: "Semi-bold" => "نیمه جسورانه"
// weight.800: "Bold" => "جسورانه"
// backgroundImageFit.auto: "Auto" => "خودکار"
// backgroundImageFit.cover: "Cover" => "پوشش"
// backgroundImageFit.contain: "Contain" => "حاوی"
// backgroundImageFit.fill: "Stretch" => "کشش"
// backgroundImageFit.tile: "Tile" => "کاشی"
// backgroundImageAttachment.fixed: "Fixed" => "ثابت"
// backgroundImageAttachment.scroll: "Scroll" => "حرکت"
// headerView.basic: "Basic" => "اساسی"
// headerView.advanced: "Advanced" => "پیشرفته"
// inheritWidthFrom.survey: "Same as survey" => "همانند نظرسنجی"
// inheritWidthFrom.container: "Fit to container" => "مناسب برای ظرف"
// backgroundColorSwitch.none: "None" => "هیچ کدام"
// backgroundColorSwitch.accentColor: "Accent color" => "رنگ لهجه"
// backgroundColorSwitch.custom: "Custom" => "سفارشی"
// colorPalette.light: "Light" => "نور"
// colorPalette.dark: "Dark" => "تاریک"
// isPanelless.false: "Default" => "پیش فرض"
// isPanelless.true: "Without Panels" => "بدون پانل"
// theme.cornerRadius: "Corner radius" => "شعاع گوشه"
// theme.fontFamily: "Font family" => "خانواده قلم"
// theme.fontWeightRegular: "Regular" => "منظم"
// theme.fontWeightHeavy: "Heavy" => "سنگین"
// theme.fontWeightSemiBold: "Semi-bold" => "نیمه جسورانه"
// theme.fontWeightBold: "Bold" => "جسورانه"
// theme.color: "Color" => "رنگ"
// theme.placeholderColor: "Placeholder color" => "رنگ نگهدارنده"
// theme.size: "Size" => "اندازه"
// theme.opacity: "Opacity" => "کدورت"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "تایپ برای جستجو..."
// ed.toolboxNoResultsFound: "No results found" => "نتیجه ای یافت نشد"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "ذی نفع عنوان تب"
// theme.--sjs-special-red: "Error messages" => "پیغامهای خطا"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "یک متن جایگزین برای عناوین برگه که زمانی اعمال می شود که الگوی عنوان برگه ارزش معنی داری تولید نمی کند."
// theme.fontColor: "Font color" => "رنگ قلم"
// theme.backgroundColor: "Background color" => "رنگ پسزمینه"
// pe.questionTitleWidth: "Question title width" => "عرض عنوان سوال"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "یک پرونده را انتخاب کنید یا پیوند پرونده را جایگذاری کنید..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "سابق: 200 پیکسل"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "عرض ثابت را برای عناوین سؤال تنظیم می کند وقتی که انها در سمت چپ جعبه های سوال خود قرار دارند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "عرض ثابت را برای عناوین سؤال تنظیم می کند وقتی که انها در سمت چپ جعبه های سوال خود قرار دارند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره)."
// pe.commentAreaRows: "Comment area height (in lines)" => "ارتفاع منطقه نظر (در خطوط)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "تعداد خطوط نمایش داده شده در ناحیههای متن را برای نظرات سؤال تنظیم میکند. در ورودی طول می کشد تا خطوط بیشتر، نوار اسکرول به نظر می رسد."
// pe.enabled: "Enabled" => "فعال"
// pe.disabled: "Disabled" => "غیر فعال"
// pe.inherit: "Inherit" => "به ارث ببرید"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "اعتبارسنجی فیلدهای خالی در فوکوس از دست رفته"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "مثال: 30٪"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "مثال: 200 پیکسل"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "این گزینه را فعال کنید تا زمانی که کاربر روی یک فیلد ورودی خالی تمرکز می کند و سپس بدون ایجاد هیچ تغییری آن را ترک می کند، اعتبارسنجی را فعال کنید."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "گزینه های انتخاب را در یک طرح چند ستونی مرتب می کند. هنگامی که روی 0 تنظیم می شود، گزینه ها در یک خط نمایش داده می شوند."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "این تنظیم فقط برای سؤالات خارج از پانل اعمال می شود."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "یک رنگ تکمیلی تنظیم می کند که عناصر کلیدی نظرسنجی را برجسته می کند."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "شفافیت پانل ها و جعبه های سوال را نسبت به پیشینه نظرسنجی تنظیم می کند."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "شفافیت عناصر ورودی را نسبت به پیشینه نظرسنجی تنظیم می کند."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "شعاع گوشه را برای همه عناصر مستطیلی تنظیم می کند. اگر می خواهید مقادیر شعاع گوشه جداگانه را برای عناصر ورودی یا پانل ها و جعبه های سؤال تنظیم کنید، حالت پیشرفته را فعال کنید."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "رنگ پس زمینه اصلی نظرسنجی را تنظیم می کند."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "گزینه \"همان کانتینر\" به طور خودکار عرض ناحیه محتوای هدر را تنظیم می کند تا در عنصر HTML که نظرسنجی در آن قرار می گیرد قرار گیرد."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "عرض ناحیه سرصفحه که حاوی عنوان و توضیحات نظرسنجی است که بر حسب پیکسل اندازه گیری می شود."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "مقادیر را می پذیرد."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "مقادیر px را می پذیرد."
// p.effectiveColSpan: "Column span" => "دهانه ستون"
// progressBarInheritWidthFrom.survey: "Same as survey" => "همانند نظرسنجی"
// progressBarInheritWidthFrom.container: "Same as container" => "همانند کانتینر"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "در صورت امکان، پیش نمایش تصاویر کوچک را برای فایل های آپلود شده نمایش می دهد. اگر می خواهید به جای آن نمادهای فایل را نشان دهید، انتخاب را لغو کنید."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "گزینه \"همان کانتینر\" به طور خودکار عرض ناحیه نوار پیشرفت را تنظیم می کند تا در عنصر HTML که نظرسنجی در آن قرار می گیرد قرار گیرد."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "عرض مساحت نوار پیشرفت"
// maskType.none: "None" => "هیچ کدام"
// maskType.pattern: "Pattern" => "الگوی"
// maskType.numeric: "Numeric" => "عددی"
// maskType.datetime: "Date and Time" => "تاریخ و زمان"
// maskType.currency: "Currency" => "ارز"

// inputTextAlignment.auto: "Auto" => "خودکار"
// inputTextAlignment.left: "Left" => "چپ"
// inputTextAlignment.right: "Right" => "راست"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "نحوه تراز کردن مقدار ورودی در فیلد را انتخاب کنید. تنظیم پیش فرض \"خودکار\" مقدار ورودی را در صورت اعمال پوشش ارز یا عددی به سمت راست و در صورت عدم اعمال به سمت چپ تراز می کند."
// p.inputTextAlignment: "Input value alignment" => "تراز مقدار ورودی"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "نمایش نوار پیشرفت"
// paneldynamic.showProgressBar: "Show the progress bar" => "نمایش نوار پیشرفت"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "تراز نوار پیشرفت"
// pv.carousel: "Carousel" => "چرخ فلک"
// progressBarLocation.top: "Top" => "بالا"
// progressBarLocation.bottom: "Bottom" => "پایین"
// progressBarLocation.topBottom: "Top and bottom" => "بالا و پایین"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "گزینه های انتخاب را در یک طرح چند ستونی مرتب می کند. هنگامی که روی 0 تنظیم می شود، گزینه ها در یک خط نمایش داده می شوند. هنگامی که روی -1 تنظیم می شود، مقدار واقعی از ویژگی \"تعداد ستون های تو در تو\" ماتریس والد به ارث می رسد."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "پیوندهای YouTube پشتیبانی نمی شوند."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "شروع به پیکربندی فرم خود کنید"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "برای کاوش در تنظیمات نظرسنجی، روی هر نماد دسته کلیک کنید. پس از افزودن یک عنصر نظرسنجی به سطح طراحی، تنظیمات اضافی در دسترس خواهند بود."
// pe.caseInsensitive: "Case insensitive" => "غیر حساس به حروف بزرگ"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "انتخاب کنید که آیا حروف بزرگ و کوچک در عبارت منظم باید معادل در نظر گرفته شوند."

// ed.surveyPlaceholderTitle: "Your form is empty" => "فرم شما خالی است"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "فرم شما خالی است"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "یک عنصر را از جعبه ابزار بکشید یا روی دکمه زیر کلیک کنید."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "یک عنصر را از جعبه ابزار بکشید یا روی دکمه زیر کلیک کنید."
// ed.previewPlaceholderTitle: "No preview" => "بدون پیش نمایش"
// ed.previewPlaceholderTitleMobile: "No preview" => "بدون پیش نمایش"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "این نظرسنجی حاوی هیچ عنصر قابل مشاهده ای نیست."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "این نظرسنجی حاوی هیچ عنصر قابل مشاهده ای نیست."
// ed.translationsPlaceholderTitle: "No strings to translate" => "بدون رشته برای ترجمه"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "بدون رشته برای ترجمه"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "عناصر را به فرم خود اضافه کنید یا فیلتر رشته ها را در نوار ابزار تغییر دهید."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "عناصر را به فرم خود اضافه کنید یا فیلتر رشته ها را در نوار ابزار تغییر دهید."
// lg.logicPlaceholderTitle: "No logical rules" => "بدون قوانین منطقی"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "بدون قوانین منطقی"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "یک قانون برای سفارشی کردن جریان نظرسنجی ایجاد کنید."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "یک قانون برای سفارشی کردن جریان نظرسنجی ایجاد کنید."
// pe.showTimer: "Use a timer" => "از تایمر استفاده کنید"
// theme.advancedMode: "Advanced mode" => "حالت پیشرفته"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "مکان یک تایمر را در یک صفحه تنظیم می کند."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "هنگامی که روی 0 تنظیم می شود، ارتفاع به طور خودکار محاسبه می شود تا محتوای هدر را در خود جای دهد."
// p.mobileHeight: "Height on smartphones" => "ارتفاع در گوشی های هوشمند"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "هنگامی که فعال باشد، بالای نظرسنجی پایین هدر را همپوشانی می کند."
// ed.creatorSettingTitle: "Creator Settings" => "تنظیمات سازنده"
// tabs.accentColors: "Accent colors" => "رنگ های تاکیدی"
// tabs.scaling: "Scaling" => "توزین"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "اعداد را به سؤالات تودرتو در این پانل اختصاص می دهد."
// creatortheme.--sjs-special-background: "Surface background" => "زمینه سطح"
// creatortheme.--sjs-primary-background-500: "Primary" => "اولیه"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "ثانویه"
// creatortheme.surfaceScale: "Surface" => "سطح"
// creatortheme.userInterfaceBaseUnit: "User interface" => "رابط کاربری"
// creatortheme.fontScale: "Font" => "فونت"
// names.sc2020: "Survey Creator 2020" => "خالق نظرسنجی 2020"
// names.default-light: "Light" => "نور"
// names.default-dark: "Dark" => "تاریک"
// names.default-contrast: "Contrast" => "کنتراست"
// panel.showNumber: "Number this panel" => "شماره گذاری این پانل"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "انتخاب کنید که آیا می خواهید نظرسنجی به طور خودکار به صفحه بعدی پیش برود پس از اینکه پاسخ دهنده به همه سؤالات موجود در صفحه فعلی پاسخ داد. اگر آخرین سؤال در صفحه باز باشد یا اجازه پاسخ های متعدد را بدهد، این ویژگی اعمال نمی شود."
// autocomplete.name: "Full Name" => "نام و نام خانوادگی"
// autocomplete.honorific-prefix: "Prefix" => "پیشوند"
// autocomplete.given-name: "First Name" => "نام و نام خانوادگی"
// autocomplete.additional-name: "Middle Name" => "نام میانی"
// autocomplete.family-name: "Last Name" => "نام خانوادگی"
// autocomplete.honorific-suffix: "Suffix" => "پسوند"
// autocomplete.nickname: "Nickname" => "نام مستعار"
// autocomplete.organization-title: "Job Title" => "عنوان شغلی"
// autocomplete.username: "User Name" => "نام کاربری"
// autocomplete.new-password: "New Password" => "رمز عبور جدید"
// autocomplete.current-password: "Current Password" => "رمز عبور فعلی"
// autocomplete.organization: "Organization Name" => "نام سازمان"
// autocomplete.street-address: "Full Street Address" => "آدرس کامل خیابان"
// autocomplete.address-line1: "Address Line 1" => "خط آدرس 1"
// autocomplete.address-line2: "Address Line 2" => "خط آدرس 2"
// autocomplete.address-line3: "Address Line 3" => "خط آدرس 3"
// autocomplete.address-level4: "Level 4 Address" => "آدرس سطح 4"
// autocomplete.address-level3: "Level 3 Address" => "آدرس سطح 3"
// autocomplete.address-level2: "Level 2 Address" => "آدرس سطح 2"
// autocomplete.address-level1: "Level 1 Address" => "آدرس سطح 1"
// autocomplete.country: "Country Code" => "کد کشور"
// autocomplete.country-name: "Country Name" => "نام کشور"
// autocomplete.postal-code: "Postal Code" => "کد پستی"
// autocomplete.cc-name: "Cardholder Name" => "نام دارنده کارت"
// autocomplete.cc-given-name: "Cardholder First Name" => "نام دارنده کارت"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "نام میانی دارنده کارت"
// autocomplete.cc-family-name: "Cardholder Last Name" => "نام خانوادگی دارنده کارت"
// autocomplete.cc-number: "Credit Card Number" => "شماره کارت اعتباری"
// autocomplete.cc-exp: "Expiration Date" => "تاریخ انقضا"
// autocomplete.cc-exp-month: "Expiration Month" => "ماه انقضا"
// autocomplete.cc-exp-year: "Expiration Year" => "سال انقضا"
// autocomplete.cc-csc: "Card Security Code" => "کد امنیتی کارت"
// autocomplete.cc-type: "Credit Card Type" => "نوع کارت اعتباری"
// autocomplete.transaction-currency: "Transaction Currency" => "ارز تراکنش"
// autocomplete.transaction-amount: "Transaction Amount" => "مبلغ تراکنش"
// autocomplete.language: "Preferred Language" => "زبان ترجیحی"
// autocomplete.bday: "Birthday" => "تولد"
// autocomplete.bday-day: "Birthday Day" => "روز تولد"
// autocomplete.bday-month: "Birthday Month" => "ماه تولد"
// autocomplete.bday-year: "Birthday Year" => "سال تولد"
// autocomplete.sex: "Gender" => "جنسیت"
// autocomplete.url: "Website URL" => "آدرس وب سایت"
// autocomplete.photo: "Profile Photo" => "عکس پروفایل"
// autocomplete.tel: "Telephone Number" => "شماره تلفن"
// autocomplete.tel-country-code: "Country Code for Phone" => "کد کشور برای تلفن"
// autocomplete.tel-national: "National Telephone Number" => "شماره تلفن ملی"
// autocomplete.tel-area-code: "Area Code" => "کد منطقه"
// autocomplete.tel-local: "Local Phone Number" => "شماره تلفن محلی"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "پیشوند تلفن محلی"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "پسوند تلفن محلی"
// autocomplete.tel-extension: "Phone Extension" => "پسوند تلفن"
// autocomplete.email: "Email Address" => "آدرس ایمیل"
// autocomplete.impp: "Instant Messaging Protocol" => "پروتکل پیام رسانی فوری"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "قفل کردن وضعیت expand/collapse برای سوالات"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "شما هنوز هیچ صفحه ای ندارید"
// pe.addNew@pages: "Add new page" => "افزودن صفحه جدید"
// ed.zoomInTooltip: "Zoom In" => "بزرگنمایی"
// ed.zoomOutTooltip: "Zoom Out" => "کوچک نمایی"
// tabs.surfaceBackground: "Surface Background" => "زمینه سطح"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "از پاسخ های آخرین ورودی به عنوان پیش فرض استفاده کنید"
// colors.gray: "Gray" => "خاکستری"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "تراز کردن دکمه های ناوبری"
// pv.allQuestions: "Show all questions" => "نمایش همه سوالات"
// pv.answeredQuestions: "Show answered questions only" => "فقط سوالات پاسخ داده شده را نشان دهید"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "مکان دکمه های پیمایش را در یک صفحه تنظیم می کند."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "از مقادیر ستون ماتریس یا سوال پانل زیر به عنوان شناسه های انتخاب استفاده کنید."
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "از مقادیر ستون ماتریس یا سوال پانل زیر به عنوان متن انتخابی استفاده کنید"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "در انواع سوالات تک و چند گزینه، هر گزینه انتخابی دارای یک شناسه و مقدار نمایشی است. این تنظیم مشخص می کند که کدام ستون ماتریس یا سوال پانل باید شناسه ها را ارائه دهد."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "در انواع سوالات تک و چند گزینه، هر گزینه انتخابی دارای یک شناسه و مقدار نمایشی است. این تنظیم مشخص می کند که کدام ستون ماتریس یا سوال پانل باید متون نمایش داده شده را ارائه دهد."
// pe.progressBarLocation: "Progress bar alignment" => "تراز نوار پیشرفت"
// progressBarLocation.topbottom: "Top and bottom" => "بالا و پایین"
// progressBarLocation.aboveheader: "Above the header" => "بالای سربرگ"
// progressBarLocation.belowheader: "Below the header" => "در زیر سرصفحه"
// progressBarLocation.off: "Hidden" => "پنهان"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "مکان نوار پیشرفت را تنظیم می کند. مقدار \"خودکار\" نوار پیشرفت را در بالا یا پایین سربرگ نظرسنجی نشان می دهد."
// survey.readOnly: "Make the survey read-only" => "نظرسنجی را فقط خواندنی کنید"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "اگر می خواهید از پر کردن نظرسنجی پاسخ دهندگان جلوگیری کنید، انتخاب کنید."
// paneldynamic.showNumber: "Number the panel" => "شماره گذاری پانل"
// question.showNumber: "Number this question" => "این سوال را شماره گذاری کنید"
// pe.previewMode: "Preview mode" => "حالت پیش نمایش"
// pe.gridLayoutEnabled: "Enable the grid layout" => "طرح بندی شبکه را فعال کنید"
// pe.maskSettings: "Mask settings" => "تنظیمات ماسک"
// pe.detailErrorLocation: "Row expansion error message alignment" => "تراز پیام خطای گسترش ردیف"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "مکان پیام های خطا را برای سؤالات تودرتو در بخش های جزئیات تنظیم می کند. گزینه \"وراثت\" تنظیمات را از ویژگی \"تراز پیام خطا\" اعمال می کند."
// pe.gridLayoutColumns: "Grid layout columns" => "ستون های طرح بندی شبکه ای"
// pe.startPageTitlePlaceholder: "Start Page" => "صفحه شروع"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "عرض موثر، ٪"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "عرض عنوان سوال، px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "شما هنوز ستون های طرح بندی ندارید"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "مشخص می کند که این پانل چند ستون در طرح بندی شبکه قرار دارد."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "این جدول به شما امکان می دهد هر ستون شبکه را در پانل پیکربندی کنید. به طور خودکار درصد عرض هر ستون را بر اساس حداکثر تعداد عناصر در یک ردیف تنظیم می کند. برای سفارشی کردن طرح بندی شبکه، این مقادیر را به صورت دستی تنظیم کنید و عرض عنوان را برای همه سوالات در هر ستون تعریف کنید."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator به شما امکان می دهد عرض درون خطی عناصر فرم را به صورت دستی تنظیم کنید تا طرح بندی را کنترل کنید. اگر این نتیجه دلخواه را به همراه نداشت، می توانید طرح بندی شبکه را فعال کنید، که با استفاده از یک سیستم مبتنی بر ستون عناصر را تشکیل می دهد. برای پیکربندی ستون های طرح بندی، یک صفحه یا پانل را انتخاب کنید و از جدول «تنظیمات سوال» → «ستون های شبکه» استفاده کنید. برای تنظیم تعداد ستون های یک سوال، آن را انتخاب کنید و مقدار مورد نظر را در قسمت \"Layout\" → \"Column span\" تنظیم کنید."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "مشخص می کند که این سوال چند ستون در طرح بندی شبکه قرار دارد."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "این جدول به شما امکان می دهد هر ستون شبکه را در صفحه پیکربندی کنید. به طور خودکار درصد عرض هر ستون را بر اساس حداکثر تعداد عناصر در یک ردیف تنظیم می کند. برای سفارشی کردن طرح بندی شبکه، این مقادیر را به صورت دستی تنظیم کنید و عرض عنوان را برای همه سوالات در هر ستون تعریف کنید."

// ed.expandTooltip: "Expand" => "گسترش"
// ed.collapseTooltip: "Collapse" => "سقوط"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "مثال: 100 پیکسل"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "عرض ثابت را برای همه برچسب های مورد تنظیم می کند. مقادیر CSS (px، ٪، in، pt و غیره) را می پذیرد."
// ed.zoom100Tooltip: "Zoom to 100%" => "بزرگنمایی تا 100٪"
// ed.addLanguageTooltip: "Add Language" => "افزودن زبان"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "تعداد خطوط نمایش داده شده در قسمت های متنی را برای نظرات سؤال تنظیم می کند. اگر ورودی خطوط بیشتری را اشغال کند، نوار اسکرول ظاهر می شود."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "مقدار نمایش پیش فرض برای متون پویا"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "مقداری که در سؤالات HTML و در عناوین پویا و توضیحات عناصر نظرسنجی زمانی که مقدار سوال خالی است، نمایش داده می شود."
// showQuestionNumbers.recursive: "Recursive numbering" => "شماره گذاری بازگشتی"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "عرض عنوان سوال"
// pe.allowCustomChoices: "Allow custom choices" => "اجازه دادن به انتخاب های سفارشی"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "عرض ثابتی را برای عناوین سؤال زمانی تنظیم می کند که در سمت چپ کادرهای سؤال آنها تراز شوند. مقادیر CSS (px، ٪، in، pt و غیره) را می پذیرد."
// page.name: "A page ID that is not visible to respondents." => "شناسه صفحه ای که برای پاسخ دهندگان قابل مشاهده نیست."
// page.description: "Type a page subtitle." => "زیرنویس صفحه را تایپ کنید."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "عنوانی که روی دکمه پیمایش در نوار پیشرفت یا فهرست مطالب (TOC) نمایش داده می شود. اگر این فیلد را خالی بگذارید، دکمه پیمایش از عنوان صفحه یا نام صفحه استفاده می کند. برای فعال کردن نوار پیشرفت یا TOC، به \"نظرسنجی\" → \"ناوبری\" بروید."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "انتخاب کنید تا به پاسخ دهندگان اجازه دهید انتخاب های خود را اضافه کنند اگر گزینه مورد نظر در منوی کشویی موجود نیست. گزینه های سفارشی فقط به طور موقت برای مدت زمان جلسه مرورگر فعلی ذخیره می شوند."