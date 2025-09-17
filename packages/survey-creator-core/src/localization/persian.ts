import { setupLocale } from "survey-creator-core";

export var persianStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "ویرایش",
    // "Watch and learn how to create surveys"
    externalHelpLink: "نگاه کنید و ساختن نظرسنجی را آموزش ببینید",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "لطفا از جعبه ابزار سوالی در اینجا قرار دهید",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "برای شخصی سازی نظرسنجی خود، قانونی را ایجاد کنید",
    // "Copy"
    copy: "کپی",
    // "Duplicate"
    duplicate: "کپی کردن",
    // "Add to toolbox"
    addToToolbox: "افزودن به جعبه ابزار",
    // "Delete Panel"
    deletePanel: "حذف پنل",
    // "Delete Question"
    deleteQuestion: "حذف سوال",
    // "Convert to"
    convertTo: "تبدیل به",
    // "Drag element"
    drag: "المان را بکشید"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "آزمایش نظرسنجی",
    // "Themes"
    theme: "تم",
    // "Translations"
    translation: "ترجمه",
    // "Designer"
    designer: "طراح نظرسنجی",
    // "JSON Editor"
    json: "ویرایشگر JSON",
    // "Logic"
    logic: "منطق نظرسنجی"
  },
  // Question types
  qt: {
    // "Default"
    default: "پیش فرض",
    // "Checkboxes"
    checkbox: "چند انتخابی",
    // "Long Text"
    comment: "نظر",
    // "Image Picker"
    imagepicker: "انتخاب عکس",
    // "Ranking"
    ranking: "رتبه بندی(رنک)",
    // "Image"
    image: "عکس",
    // "Dropdown"
    dropdown: "لیست انتخابی",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "چند انتخاب کشویی",
    // "File Upload"
    file: "فایل",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "ماتریس (تک انتخابی)",
    // "Multi-Select Matrix"
    matrixdropdown: "ماتریس (چند انتخابی)",
    // "Dynamic Matrix"
    matrixdynamic: "ماتریس (سطرهای داینامیک)",
    // "Multiple Textboxes"
    multipletext: "متن چند خطی",
    // "Panel"
    panel: "پنل",
    // "Dynamic Panel"
    paneldynamic: "پنل (پنل های داینامیک)",
    // "Radio Button Group"
    radiogroup: "تک انتخابی",
    // "Rating Scale"
    rating: "رتبه بندی",
    // [Auto-translated] "Slider"
    slider: "لغزنده",
    // "Single-Line Input"
    text: "متن تک خطی",
    // "Yes/No (Boolean)"
    boolean: "صحیح و غلط",
    // "Expression (read-only)"
    expression: "توصیفی",
    // "Signature"
    signaturepad: "قسمت امضا",
    // "Button Group"
    buttongroup: "گروه دکمه"
  },
  toolboxCategories: {
    // "General"
    general: "عمومی",
    // "Choice Questions"
    choice: "سوالات انتخاب",
    // "Text Input Questions"
    text: "سوالات ورودی متن",
    // "Containers"
    containers: "ظروف",
    // "Matrix Questions"
    matrix: "سوالات ماتریکس",
    // "Misc"
    misc: "متفرقه"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "پیش فرض ({0})",
    // "Survey"
    survey: "نظرسنجی",
    // "Settings"
    settings: "تنظیمات نظرسنجی",
    // "Open settings"
    settingsTooltip: "باز کردن تنظیمات نظرسنجی",
    // [Auto-translated] "Survey Settings"
    surveySettings: "تنظیمات نظرسنجی",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "تنظیمات نظرسنجی",
    // [Auto-translated] "Theme Settings"
    themeSettings: "تنظیمات تم",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "تنظیمات قالب",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "تنظیمات سازنده",
    // "Show Panel"
    showPanel: "نمایش پنل",
    // "Hide Panel"
    hidePanel: "پنهان سازی پنل",
    // "Select previous"
    prevSelected: "قبلی",
    // "Select next"
    nextSelected: "بعدی",
    // [Auto-translated] "Focus previous"
    prevFocus: "تمرکز قبلی",
    // [Auto-translated] "Focus next"
    nextFocus: "تمرکز بعدی",
    // "Survey"
    surveyTypeName: "نظرسنجی",
    // "Page"
    pageTypeName: "صفحه",
    // "Panel"
    panelTypeName: "پنل",
    // "Question"
    questionTypeName: "سوال",
    // "Column"
    columnTypeName: "ستون",
    // "Add New Page"
    addNewPage: "درج صفحه جدید",
    // "Scroll to the Right"
    moveRight: "اسکرول به راست",
    // "Scroll to the Left"
    moveLeft: "اسکرول به چپ",
    // "Delete Page"
    deletePage: "حذف صفحه",
    // "Edit Page"
    editPage: "ویرایش صفحه",
    // "Edit"
    edit: "ویرایش",
    // "page"
    newPageName: "صفحه",
    // "question"
    newQuestionName: "سوال",
    // "panel"
    newPanelName: "پنل",
    // "text"
    newTextItemName: "متن",
    // "Default"
    defaultV2Theme: "پیش فرض",
    // "Modern"
    modernTheme: "مدرن",
    // "Default (legacy)"
    defaultTheme: "پیش فرض (legacy)",
    // "Preview Survey Again"
    testSurveyAgain: "آزمایش دوباره نظرسنجی",
    // "Survey width: "
    testSurveyWidth: "عرض نظرسنجی: ",
    // "You had to navigate to"
    navigateToMsg: "شما باید به موارد زیر بروید:",
    // "Save Survey"
    saveSurvey: "ذخیره نظرسنجی",
    // "Save Survey"
    saveSurveyTooltip: "ذخیره نظرسنجی",
    // [Auto-translated] "Save Theme"
    saveTheme: "ذخیرۀ تم",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "ذخیرۀ تم",
    // "Hide errors"
    jsonHideErrors: "پنهان کردن خطاها",
    // "Show errors"
    jsonShowErrors: "نمایش خطاها",
    // "Undo"
    undo: "بازگردانی",
    // "Redo"
    redo: "بازانجام",
    // "Undo last change"
    undoTooltip: "بازگرداندن آخرین تغییر",
    // "Redo the change"
    redoTooltip: "انجام دادن تغییر",
    // [Auto-translated] "Expand"
    expandTooltip: "باز کردن",
    // [Auto-translated] "Collapse"
    collapseTooltip: "جمع کردن",
    // "Expand All"
    expandAllTooltip: "باز کردن همه",
    // "Collapse All"
    collapseAllTooltip: "جمع کردن همه",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "بزرگنمایی",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "بزرگنمایی تا 100٪",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "کوچک نمایی",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "قفل کردن وضعیت باز/بست برای سوالات",
    // "Show more"
    showMoreChoices: "نمایش بیشتر",
    // "Show less"
    showLessChoices: "نمایش کمتر",
    // "Copy"
    copy: "کپی",
    // "Cut"
    cut: "برداشتن",
    // "Paste"
    paste: "چسباندن",
    // "Copy selection to clipboard"
    copyTooltip: "کپی متن انتخاب شده در کلیپ بورد",
    // "Cut selection to clipboard"
    cutTooltip: "متن انتخابی را از کلیپ بورد برش دهید",
    // "Paste from clipboard"
    pasteTooltip: "الصاق از کلیپ بورد",
    // "Options"
    options: "انتخاب ها",
    // "Generate Valid JSON"
    generateValidJSON: "تولید کد معتبر JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "تولید کد خوانا JSON",
    // "Toolbox"
    toolbox: "جعبه ابزار",
    // "Properties"
    "property-grid": "ویژگی ها",
    // [Auto-translated] "Search"
    toolboxSearch: "جستجو",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "تایپ برای جستجو...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "نتیجه ای یافت نشد",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "جستجو...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "نتیجه ای یافت نشد",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "شروع به پیکربندی فرم خود کنید",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "برای کاوش در تنظیمات نظرسنجی، روی هر نماد دسته کلیک کنید. پس از افزودن یک عنصر نظرسنجی به سطح طراحی، تنظیمات اضافی در دسترس خواهند بود.",
    // "Please correct JSON."
    correctJSON: "لطفا JSON را تصحیح کنید.",
    // "Survey Results "
    surveyResults: "نتایج نظرسنجی: ",
    // "As Table"
    surveyResultsTable: "به صورت جدول",
    // "As JSON"
    surveyResultsJson: "به صورت JSON",
    // "Question Title"
    resultsTitle: "عنوان سوال",
    // "Question Name"
    resultsName: "نام سوال",
    // "Answer Value"
    resultsValue: "محتوای پاسخ",
    // "Display Value"
    resultsDisplayValue: "محتوای نمایشی",
    // "Modified"
    modified: "تغییر داده شده",
    // "Saving"
    saving: "در حال ذخیره",
    // "Saved"
    saved: "ذخیره شد",
    // "Error"
    propertyEditorError: "ارور:",
    // "Error! Editor content is not saved."
    saveError: "خطا! محتوای ویرایشگر ذخیره نشده است.",
    // "Language Settings"
    translationPropertyGridTitle: "تنظیمات زبان",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "تنظیمات تم",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "افزودن زبان",
    // "Languages"
    translationLanguages: "زبان",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "ایا مطمئن هستید که می خواهید تمام رشته ها را برای این زبان حذف کنید؟",
    // "Select language to translate"
    translationAddLanguage: "زبانی را برای ترجمه انتخاب کنید",
    // "All Strings"
    translationShowAllStrings: "نمایش تمام عبارات",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "فقط از عبارات استفاده کنید",
    // "All Pages"
    translationShowAllPages: "نمایش تمام صفحات",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "هیچ عبارتی برای ترجمه نیست، لطفا فیلتر را عوض کنید.",
    // "Export to CSV"
    translationExportToSCVButton: "برون بری به CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "برون ریزی از CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "ترجمه خودکار همه",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "ترجمه از: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "رشتههای ترجمهنشده",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "ادغام {0} با زبان پیش فرض",
    // "Translation..."
    translationPlaceHolder: "در حال ترجمه...",
    // [Auto-translated] "Source: "
    translationSource: "منبع: ",
    // [Auto-translated] "Target: "
    translationTarget: "هدف: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "پیوندهای YouTube پشتیبانی نمی شوند.",
    // [Auto-translated] "Export"
    themeExportButton: "صادرات",
    // [Auto-translated] "Import"
    themeImportButton: "واردات",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "صادرات",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "واردات",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "رونوشت در تخته یادداشت",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "بازنشانی تنظیمات تم به حالت پیشفرض",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "ایا واقعا می خواهید موضوع را دوباره تنظیم کنید؟ تمام سفارشی سازی های شما از دست خواهد رفت.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "بله، موضوع را تنظیم مجدد کنید",
    // "Bold"
    bold: "پررنگ",
    // "Italic"
    italic: "مورب",
    // "Underline"
    underline: "پایین خط",
    // "Add Question"
    addNewQuestion: "اضافه کردن سوال",
    // "Select page..."
    selectPage: "انتخاب صفحه ...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "انتخاب ها کپی می شوند از",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "انتخاب ها از یک سرویس وب بارگذاری می شوند.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "رفتن به تنظیمات",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "پیش نمایش گزینه های انتخاب بار شده",
    // "HTML content will be here."
    htmlPlaceHolder: "محتوای html اینجا خواهد بود",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "سوالی را از داخل جعبه ابزار در اینجا قرار دهید",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "نظرسنجی خالی است. یک آیتم را از جعبه ابزار انتخاب یا روی دکمه ی زیر کلیک کنید",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "صفحه خالی است. یک عنصر را از جعبه ابزار بکشید یا روی دکمه زیر کلیک کنید.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "یک تصویر را در اینجا بکشید و رها کنید یا روی دکمه زیر کلیک کنید و تصویری را برای اپلود انتخاب کنید",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "روی دکمه \"افزودن سؤال\" در زیر کلیک کنید تا شروع به ایجاد فرم خود کنید.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "فرم شما خالی است",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "فرم شما خالی است",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "یک عنصر را از جعبه ابزار بکشید یا روی دکمه زیر کلیک کنید.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "یک عنصر را از جعبه ابزار بکشید یا روی دکمه زیر کلیک کنید.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "بدون پیش نمایش",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "بدون پیش نمایش",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "این نظرسنجی حاوی هیچ عنصر قابل مشاهده ای نیست.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "این نظرسنجی حاوی هیچ عنصر قابل مشاهده ای نیست.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "بدون رشته برای ترجمه",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "بدون رشته برای ترجمه",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "عناصر را به فرم خود اضافه کنید یا فیلتر رشته ها را در نوار ابزار تغییر دهید.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "عناصر را به فرم خود اضافه کنید یا فیلتر رشته ها را در نوار ابزار تغییر دهید.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "روی دکمه \"افزودن سؤال\" در زیر کلیک کنید تا عنصر جدیدی به صفحه اضافه شود.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "روی دکمه \"افزودن سؤال\" در زیر کلیک کنید تا یک عنصر جدید به پانل اضافه شود.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "روی دکمه زیر کلیک کنید و تصویری را برای اپلود انتخاب کنید",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "انتخاب تصویر",
    // "Add {0}"
    addNewTypeQuestion: "اضافه {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[لوگو]",
    // [Auto-translated] "Item "
    choices_Item: "مورد ",
    // [Auto-translated] "Select a file"
    selectFile: "یک پرونده انتخاب کنید",
    // [Auto-translated] "Remove the file"
    removeFile: "حذف پرونده",
    lg: {
      // "Add New Rule"
      addNewItem: "اضافه کردن آیتم جدید",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "یک آیتم را برای سفارشی کردن جریان نظرسنجی انتخاب کنید",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "بدون قوانین منطقی",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "بدون قوانین منطقی",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "یک قانون برای سفارشی کردن جریان نظرسنجی ایجاد کنید.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "یک قانون برای سفارشی کردن جریان نظرسنجی ایجاد کنید.",
      // "Show/hide page"
      page_visibilityName: "قابلیت رویت صفحه ",
      // "Enable/disable page"
      page_enableName: "فعال/غیرفعال کردن صفحه",
      // [Auto-translated] "Make page required"
      page_requireName: "ایجاد صفحه مورد نیاز است",
      // "Show/hide panel"
      panel_visibilityName: "قابلیت رویت پنل",
      // "Enable/disable panel"
      panel_enableName: "فعال/غیرفعال کردن پنل ",
      // [Auto-translated] "Make panel required"
      panel_requireName: "پانل مورد نیاز است",
      // "Show/hide question"
      question_visibilityName: " قابلیت رویت سوال",
      // "Enable/disable question"
      question_enableName: "فعال/غیرفعال کردن سوال ",
      // "Make question required"
      question_requireName: "سوال اختیاری موردنیاز",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "بازنشانی مقدار سؤال",
      // [Auto-translated] "Set question value"
      question_setValueName: "تنظیم مقدار سؤال",
      // "Show/hide column"
      column_visibilityName: "نمایش/پنهان کردن ستون",
      // "Enable/disable column"
      column_enableName: "فعال/غیرفعال کردن ستون",
      // "Make column required"
      column_requireName: "ستون مورد نیاز است",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "بازنشانی مقدار ستون",
      // [Auto-translated] "Set column value"
      column_setValueName: "تنظیم مقدار ستون",
      // "Complete survey"
      trigger_completeName: "تکمیل نظرسنجی",
      // "Set answer"
      trigger_setvalueName: "تنظیم عنوان سوال",
      // "Copy answer"
      trigger_copyvalueName: "کپی مقدار سوال",
      // "Skip to question"
      trigger_skipName: "رد کردن سوال ",
      // "Run expression"
      trigger_runExpressionName: "اجرای متن شفارشی مورد نظر",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "متن سفارشی صفحه 'تشکر' ",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "زمانی که عبارت منطقی مقدار صحیح برمی گرداند صفحه را قابل مشاهده کنید، در غیراینصورت آن را غیرقابل مشاهده نگه دارید.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "اگر عبارت منطقی مقدار صحیح بر میگرداند، پنل را فعال کنید، در غیر اینصورت آن را غیرقابل مشاهده نگه دارید.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "یک پنل ایجاد کنید و همه المان های داخل آن را در صورتی که عبارت منطقی مقدار صحیح بر می گرداند را فعال کنید، در غیر اینصورت آن ها را غیرفعال نگه دارید.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "زمانی که عبارت منطقی مقدار صحیح را برمی گرداند، سوال را قابل مشاهده کنید، در غیر اینصورت آن را غیرمشاهده نگه دارید.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "زمانی که عبارت منطقی مقدار صحیح برمی گرداند، سوال را فعال کنید، در غیر اینصورت آن را غیرفعال نگه دارید.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "زمانی که عبارت منطقی مقدار صحیح را بر می گرداند، سوال اجبار ی می شود.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "زمانی که عبارت منطقی مقدار صحیح را بر می گرداند، و بررسی تکمیل می شود،کاربر نهایی صفحه 'تشکر' را مشاهده می کند.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "زمانی که مقدار سوالی که در عبارت منطقی استفاده شده است تغییر می یابد و عبارت منطقی مقدار صحیح را بر می گرداند، آنگاه مقدار برای سوال انتخاب شده تنظیم می شود.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "زمانی که مقدارهای سوال که در عبارت منطقی استفاده شده اند، تغییر می یابد و عبارت منطقی مقدار صحیح را بر می گرداند، سپس مقدار یکی از سوال های انتخاب شده در سوال دیگر انتخاب شده کپی می شود.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "زمانی که عبارت منطقی صحیح برمی گرداند، سپس نظرسنجی به سوال انتخابی می رود.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "اگر عبارت منطقی مقدار صحیح برگرداند، آنگاه عبارت سفارشی اجرا می شود. شما ممکن است به طور اختیاری این نتیجه را به سوال انتخاب شده تبدیل کنید.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: " اگر عبارت منطقی مقدار صحیح برگرداند متن صفحه 'تشکر' به متن داده شده تغییر می یابد.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "زمانی که عبارت {0} مقدار صحیح بر می گرداند", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "قانون جدید",
      // "make page {0} visible"
      page_visibilityText: "صفحه {0} را قابل مشاهده کنید.", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "پنل {0} را قابل مشاهده کنید.", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "فعال کردن پنل {0}", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "سوال {0} را قابل مشاهده کنید.", // {0} question name
      // "make question {0} enable"
      question_enableText: "فعال کردن سوال {0}", // {0} question name
      // "make question {0} required"
      question_requireText: "ایجاد سوال {0} اجباری", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "بازنشانی مقدار برای سوال: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "اختصاص مقدار: {1} به سوال: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "ستون {0} سوال {1} را قابل مشاهده کنید", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "ستون {0} سوال {1} را فعال کنید", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "ستون {0} سوال {1} را الزامی کنید", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "تنظیم مجدد مقدار سلول برای ستون: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "اختصاص مقدار سلول: {1} به ستون: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "عبارتی که نتیجه آن به سوال هدف اختصاص داده می شود.",
      // "survey becomes completed"
      trigger_completeText: "بررسی نظرسنجی تمام شد",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "در سوال {0} مقدار {1} را قرار دهید", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "ارزش سوال روشن: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "مقدار سوال {0} را از سوال {1} کپی کنید.", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "رد کردن نظرسنجی برای سوال {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "اجرای عبارت '{0}' ", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: "و نتیجه آن را داخل سوال {0} ذخیره کنید", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "نمایش متن سفارشی برای صفحه 'تشکر'",
      // "All Questions"
      showAllQuestions: "تمام سوالات",
      // "All Action Types"
      showAllActionTypes: "همه انواع اقدام",
      // "Condition(s)"
      conditions: "شرط(ها)",
      // "Action(s)"
      actions: "عملکرد(ها)",
      // "Define condition(s)"
      expressionEditorTitle: "عبارت منطقی را تنظیم کنید",
      // "Define action(s)"
      actionsEditorTitle: "تعریف کردن عملکرد(ها)",
      // "Delete Action"
      deleteAction: "حذف عملکرد",
      // "Add Action"
      addNewAction: "اضافه کردن سوال (های) جدید",
      // "Select action..."
      selectedActionCaption: "یک عملکرد را برای اضافه کردن، انتخاب کنید",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "عبارت منطقی خالی یا نادرست است. لطفا آن را تضحیح کنید",
      // "Please add at least one action."
      noActionError: "لطفا حداقل یک عملکرد را اضافه نمایید",
      // "Please fix issues in your action(s)."
      actionInvalid: "لطفا مشکلات مربوط به عملکرد(های) خود را برطرف نمایید.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "قوانین منطقی ناقص هستند",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "شما برخی از قوانین منطقی را تکمیل نکرده اید. اگر اکنون برگه را ترک کنید، تغییرات از بین خواهند رفت. ایا هنوز هم می خواهید برگه را بدون تکمیل تغییرات ترک کنید؟",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "بله",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "نه، من می خواهم قوانین را تکمیل کنم"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "نام تابلو",
      // [Auto-translated] "Panel title"
      title: "عنوان پنل",
      // [Auto-translated] "Panel description"
      description: "توضیحات پنل",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "تابلو را مرئی کنید اگر",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "ایجاد پنل مورد نیاز اگر",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "سفارش سوال در داخل پنل",
      // [Auto-translated] "Move the panel to page"
      page: "انتقال پانل به صفحه",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "نمایش تابلو در یک خط جدید",
      // [Auto-translated] "Panel collapse state"
      state: "حالت فروپاشی پنل",
      // [Auto-translated] "Inline panel width"
      width: "عرض پانل درون خطی",
      // [Auto-translated] "Minimum panel width"
      minWidth: "حداقل عرض پانل",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "حداکثر عرض پانل",
      // [Auto-translated] "Number this panel"
      showNumber: "شماره گذاری این پانل"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "عرض موثر، ٪",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "عرض عنوان سوال، px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "نام تابلو",
      // [Auto-translated] "Panel title"
      title: "عنوان پنل",
      // [Auto-translated] "Panel description"
      description: "توضیحات پنل",
      // [Auto-translated] "Entry display mode"
      displayMode: "حالت نمایش ورودی",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "تابلو را مرئی کنید اگر",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "ایجاد پنل مورد نیاز اگر",
      // [Auto-translated] "Move the panel to page"
      page: "جابهجایی تابلو به صفحه",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "نمایش تابلو در یک خط جدید",
      // [Auto-translated] "Panel collapse state"
      state: "دولت فروپاشی پانل",
      // [Auto-translated] "Inline panel width"
      width: "عرض پانل درون خطی",
      // [Auto-translated] "Minimum panel width"
      minWidth: "حداقل عرض پانل",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "حداکثر عرض پانل",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "حذف ورود را تأیید کنید",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "الگوی توضیحات ورودی",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "الگوی عنوان ورودی",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "متن پانل خالی",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "الگوی عنوان زبانه",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "ذی نفع عنوان تب",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "یک ورودی فردی را قابل مشاهده کنید اگر",
      // [Auto-translated] "Number the panel"
      showNumber: "شماره گذاری پانل",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "ترازبندی عنوان پنل",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "ترازبندی توضیحات پنل",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "تراز عنوان سوال",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "عرض عنوان سوال",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "همترازسازی پیام خطا",
      // [Auto-translated] "New entry location"
      newPanelPosition: "محل ورود جدید",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "نمایش نوار پیشرفت",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "از پاسخ های تکراری در سوال زیر جلوگیری کنید"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "نام سوال",
      // [Auto-translated] "Question title"
      title: "عنوان سوال",
      // [Auto-translated] "Question description"
      description: "توضیحات سوال",
      // [Auto-translated] "Show the title and description"
      showTitle: "نمایش عنوان و توضیحات",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "سؤال را قابل مشاهده کنید اگر",
      // [Auto-translated] "Make the question required if"
      requiredIf: "سؤال مورد نیاز را مطرح کنید اگر",
      // [Auto-translated] "Move the question to page"
      page: "انتقال سوال به صفحه",
      // [Auto-translated] "Question box collapse state"
      state: "جعبه سوال دولت فروپاشی",
      // [Auto-translated] "Number this question"
      showNumber: "این سوال را شماره گذاری کنید",
      // [Auto-translated] "Question title alignment"
      titleLocation: "هم ترازی عنوان پرسش",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "هم ترازی توضیحات سؤال",
      // [Auto-translated] "Error message alignment"
      errorLocation: "همترازسازی پیام خطا",
      // [Auto-translated] "Increase the inner indent"
      indent: "تورفتگی داخلی را افزایش دهید",
      // [Auto-translated] "Inline question width"
      width: "عرض پرسش درون خطی",
      // [Auto-translated] "Minimum question width"
      minWidth: "حداقل عرض سوال",
      // [Auto-translated] "Maximum question width"
      maxWidth: "حداکثر عرض سؤال",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "به روز رسانی مقدار فیلد ورودی"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "عرض منطقه امضا",
      // [Auto-translated] "Signature area height"
      signatureHeight: "ارتفاع منطقه امضا",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "مقیاس خودکار منطقه امضا",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "نمایش یک مکان نگهدارنده در ناحیه امضا",
      // [Auto-translated] "Placeholder text"
      placeholder: "متن ذی نفع",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "متن نگهدارنده در حالت فقط خواندنی یا پیشنمایش",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "نمایش دکمه پاک کردن در ناحیه امضا",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "حداقل عرض سکته مغزی",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "حداکثر عرض سکته مغزی",
      // [Auto-translated] "Stroke color"
      penColor: "رنگ سکته مغزی"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "ارتفاع میدان ورودی (در خطوط)"
    },
    // "Question numbering"
    showQuestionNumbers: "نمایش شماره های سوالات",
    // "Question indexing type"
    questionStartIndex: "نمایه شروع سوالات (۱،۲ یا a و b)",
    expression: {
      // [Auto-translated] "Expression name"
      name: "نام عبارت",
      // [Auto-translated] "Expression title"
      title: "عنوان عبارت",
      // [Auto-translated] "Expression description"
      description: "توصیف عبارت",
      // [Auto-translated] "Expression"
      expression: "بیان"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "بیان"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "بیان"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "عنوان نظرسنجی",
      // [Auto-translated] "Survey description"
      description: "توضیحات نظرسنجی",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "نظرسنجی را فقط خواندنی کنید"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "نام صفحه",
      // [Auto-translated] "Page title"
      title: "عنوان صفحه",
      // [Auto-translated] "Page description"
      description: "توضیحات صفحه",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "صفحه را مرئی کنید اگر",
      // [Auto-translated] "Make the page required if"
      requiredIf: "ایجاد صفحه مورد نیاز اگر",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "محدودیت زمانی برای تکمیل صفحه",
      // [Auto-translated] "Question order on the page"
      questionOrder: "سفارش سوال در صفحه"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "نام ستون",
      // [Auto-translated] "Column title"
      title: "عنوان ستون",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "جلوگیری از پاسخ های تکراری",
      // [Auto-translated] "Column width"
      width: "عرض ستون",
      // [Auto-translated] "Minimum column width"
      minWidth: "حداقل عرض ستون",
      // [Auto-translated] "Input field height (in lines)"
      rows: "ارتفاع میدان ورودی (در خطوط)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "ستون را مرئی کنید اگر",
      // [Auto-translated] "Make the column required if"
      requiredIf: "ایجاد ستون مورد نیاز اگر",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "هر گزینه در یک ستون جداگانه"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "پاک کردن دیگران در همان ردیف"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "نام",
      // [Auto-translated] "Title"
      title: "عنوان"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "ذخیره مقدار ماسک در نتایج نظرسنجی"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "الگوی ارزش"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "حداقل مقدار",
      // [Auto-translated] "Maximum value"
      max: "بیشینه مقدار"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "اجازه دادن مقادیر منفی",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "هزار جداکننده",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "جداساز دهدهی",
      // [Auto-translated] "Value precision"
      precision: "دقت ارزش",
      // [Auto-translated] "Minimum value"
      min: "حداقل مقدار",
      // [Auto-translated] "Maximum value"
      max: "بیشینه مقدار"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "پیشوند ارز",
      // [Auto-translated] "Currency suffix"
      suffix: "پسوند ارز"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "هنگام انتخاب دیگران را پاک کنید",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "نیاز به وارد کردن نظر کاربر",
    // "Display area height"
    imageHeight: "ارتفاع تصویر",
    // "Display area width"
    imageWidth: "عرض تصویر",
    // "Join identifier"
    valueName: "نام مقدار",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "مقدار نمایش پیش فرض برای متون پویا",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "تراز برچسب",
    // [Auto-translated] "Input field width (in characters)"
    size: "عرض فیلد ورودی (به نویسه)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "همراستاسازی پیام خطای سلولی",
    // [Auto-translated] "Enabled"
    enabled: "فعال",
    // [Auto-translated] "Disabled"
    disabled: "غیر فعال",
    // [Auto-translated] "Inherit"
    inherit: "به ارث ببرید",
    // "Apply"
    apply: "اعمال",
    // "OK"
    ok: "تایید",
    // "Save"
    save: "ذخیره",
    // [Auto-translated] "Clear"
    clear: "روشن",
    // "Save"
    saveTooltip: "ذخیره",
    // "Cancel"
    cancel: "لغو",
    // [Auto-translated] "Set"
    set: "مجموعه",
    // "Reset"
    reset: "بازنشانی",
    // [Auto-translated] "Change"
    change: "تغییر",
    // "Refresh"
    refresh: "تازه سازی",
    // "Close"
    close: "بستن",
    // "Delete"
    delete: "حذف",
    // "Add"
    add: "اضافه کردن",
    // "Add New"
    addNew: "افزودن",
    // "Click to add an item..."
    addItem: "برای اضافه کردن یک آیتم کلیک کنید...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "فشار دهید تا مورد حذف شود...",
    // [Auto-translated] "Drag the item"
    dragItem: "مورد را بکشید",
    // "Other"
    addOther: "سایر",
    // "Select All"
    addSelectAll: "انتخاب همه",
    // "None"
    addNone: "هیچکدام",
    // "Remove All"
    removeAll: "حذف همه",
    // "Edit"
    edit: "ویرایش",
    // "Return without saving"
    back: "بازگشت بدون ذخیره",
    // "Return without saving"
    backTooltip: "بازگشت بدون ذخیره",
    // "Save and return"
    saveAndBack: "ذخیره و بازگشت",
    // "Save and return"
    saveAndBackTooltip: "ذخیره و بازگشت",
    // [Auto-translated] "Done"
    doneEditing: "انجام",
    // "Edit Choices"
    editChoices: "ویرایش انتخاب ها",
    // "Show Choices"
    showChoices: "نمایش انتخاب ها",
    // "Move"
    move: "جابجایی",
    // "<empty>"
    empty: "<خالی>",
    // "Value is empty"
    emptyValue: "مقدار خالی است",
    // "Manual Entry"
    fastEntry: "تکمیل سریع",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "مقدار {0}» منحصر به فرد نیست",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "لطفا تعداد موارد را از {0} به {1} محدود کنید",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "لطفا حداقل {0} مورد را وارد کنید",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "لیست گزینه های انتخابی و شناسه آنها را در قالب زیر وارد کنید:\n\nid|گزینه\n\nشناسه گزینه انتخاب برای پاسخ دهندگان قابل مشاهده نیست و می تواند در قوانین شرطی استفاده شود.",
    // "Form Entry"
    formEntry: "تکمیل فرم",
    // "Test the service"
    testService: "بررسی سرویس",
    // "Please select the element"
    itemSelectorEmpty: "لطفا یک المان را انتخاب کنید ",
    // "Please select the action"
    conditionActionEmpty: "لطفا عملکرد را انتخاب کنید",
    // "Select a question..."
    conditionSelectQuestion: "انتخاب سوال...",
    // "Select a page..."
    conditionSelectPage: "انتخاب صفحه...",
    // "Select a panel..."
    conditionSelectPanel: "انتخاب پنل...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "لطفا مقدار را انتخاب / وارد کنید",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "برای مشاهده نکات تکمیلی ctrl+space را بفشارید",
    // "Current row"
    aceEditorRowTitle: "سطر فعلی",
    // "Current panel"
    aceEditorPanelTitle: "پنل فعلی",
    // "For more details please check the documentation"
    showMore: "برای اطلاعات بیشتر لطفا سند راهنما را مطالعه کنید",
    // "Available questions"
    assistantTitle: "سوالات موجود:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "حداقل باید یک سطر یا ستون وجود داشته باشد.",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "قبل از ارسال مرور کنید",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "فعال شده توسط یک شرط",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "تنظیم مجدد",
    // "Please enter a value"
    propertyIsEmpty: "لطفا یک مقدار وارد کنید",
    // "Please enter a unique value"
    propertyIsNoUnique: "لطفاً یک مقدار منحصر به فرد وارد کنید",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "لطفاً یک نام منحصر به فرد وارد کنید",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "از کلمات رزرو شده استفاده نکنید: \"item\"، \"choice\"، \"panel\"، \"row\".",
    // "You don't have any items yet"
    listIsEmpty: "یک آیتم جدید اضافه کنید",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "شما هنوز هیچ انتخابی ندارید",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "شما هنوز هیچ ستونی ندارید",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "شما هنوز ستون های طرح بندی ندارید",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "شما هنوز هیچ ردیفی ندارید",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "شما هنوز هیچ قانون اعتبار سنجی ندارید",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "شما هنوز هیچ متغیر سفارشی ندارید",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "شما هنوز هیچ محرکی ندارید",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "شما هنوز هیچ لینکی ندارید",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "شما هنوز هیچ صفحه ای ندارید",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "اضافه کردن انتخاب جدید",
    // [Auto-translated] "Add new column"
    "addNew@columns": "افزودن ستون جدید",
    // [Auto-translated] "Add new row"
    "addNew@rows": "افزودن سطر جدید",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "افزودن قانون جدید",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "افزودن متغیر جدید",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "افزودن ماشه جدید",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "افزودن نشانی وب جدید",
    // [Auto-translated] "Add new page"
    "addNew@pages": "افزودن صفحه جدید",
    // "Expression is empty"
    expressionIsEmpty: "عبارت خالی است",
    // "Value"
    value: "مقدار",
    // "Text"
    text: "متن",
    // "Row ID"
    rowid: "شناسه ی سطر",
    // "Image or video file URL"
    imageLink: "لینک تصویر",
    // "Edit column: {0}"
    columnEdit: "ویرایش ستون: {0}",
    // "Edit item: {0}"
    itemEdit: "ویرایش آیتم: {0}",
    // "URL"
    url: "آدرس وب سایت(url)",
    // "Path to data"
    path: "آدرس",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL وب سرویس",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "از ملک زیر ارزش ذخیره را دریافت کنید"
    },
    // "Get value to display from the following property"
    titleName: "نام عنوان",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "URL های فایل را از ویژگی زیر دریافت کنید",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "پاسخ خالی را بپذیرید",
    // "Title"
    titlePlaceholder: "عنوان را اینجا وارد کنید",
    // "Survey Title"
    surveyTitlePlaceholder: "عنوان نظرسنجی را اینجا وارد کنید",
    // "Page {num}"
    pageTitlePlaceholder: "عنوان صفحه را اینجا وارد کنید",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "صفحه شروع",
    // "Description"
    descriptionPlaceholder: "توضیحات را وارد کنید",
    // "Description"
    surveyDescriptionPlaceholder: "توضیحات نظرسنجی را وارد کنید",
    // "Description"
    pageDescriptionPlaceholder: "توضیحات صفحه را وارد کنید",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "انتخاب های بسته بندی",
    // "Enable the \"Other\" option"
    showOtherItem: "دارای آیتم دیگر",
    // "Rename the \"Other\" option"
    otherText: "سایر آیتم های متن",
    // "Enable the \"None\" option"
    showNoneItem: "هیچ آیتمی ندارد",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "گزینه \"امتناع از پاسخ\" را فعال کنید",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "گزینه \"نمی دانم\" را فعال کنید",
    // "Rename the \"None\" option"
    noneText: "هیچ آیتم متنی وجود ندارد",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "همه موارد انتخاب شده است",
    // "Rename the \"Select All\" option"
    selectAllText: "انتخاب همه آیتم های متن",
    // "Minimum value for auto-generated items"
    choicesMin: "حداقل مقدار برای ایجاد خودکار آیتم ها",
    // "Maximum value for auto-generated items"
    choicesMax: "حداکثر مقدار برای ایجاد خود آیتم ها",
    // "Step value for auto-generated items"
    choicesStep: "تفاوت بین موارد تولید شده خودکار",
    // "Name"
    name: "نام",
    // "Title"
    title: "عنوان",
    // "Cell input type"
    cellType: "نوع سلول",
    // "Column count"
    colCount: "تعداد ستون",
    // "Choice order"
    choicesOrder: "ترتیب گزینه را انتخاب کنید",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "اجازه دادن به انتخاب های سفارشی",
    // "Visible"
    visible: "نمایش داده شود؟",
    // "Required"
    isRequired: "ضروری است؟",
    // [Auto-translated] "Mark as required"
    markRequired: "علامت گذاری به عنوان مورد نیاز",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "حذف علامت مورد نیاز",
    // "Require an answer in each row"
    eachRowRequired: "نیاز به پاسخ برای همه سطرها",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "جلوگیری از پاسخ های تکراری در ردیف ها",
    // "Error message for required questions"
    requiredErrorText: "متن خطای موردنیاز",
    // "Display the question on a new line"
    startWithNewLine: "با سطر جدید شروع شود؟",
    // "Rows"
    rows: "تعداد سطر",
    // "Columns"
    cols: "تعداد ستون",
    // "Placeholder text within input field"
    placeholder: "نگهدارنده متن",
    // "Show preview area"
    showPreview: "پیش نمایش تصویر نشان داده شود؟",
    // "Store file content in JSON result as text"
    storeDataAsText: "ذخیره کردن محتوای فایل در JSON به عنوان متن",
    // "Maximum file size (in bytes)"
    maxSize: "حداکثر سایز به بایت",
    // "Row count"
    rowCount: "تعداد سطر",
    // "Columns layout"
    columnLayout: "قالب ستون ها",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "اضافه کردن موقعیت دکمه سطری",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "جابهجا کردن سطرها به ستونها",
    // "\"Add Row\" button text"
    addRowText: "متن دکمه درج سطر",
    // "\"Remove Row\" button text"
    removeRowText: "متن دکمه حذف سطر",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "الگوی عنوان فیلد ورودی",
    // "Minimum rating value"
    rateMin: "حداقل میزان",
    // "Maximum rating value"
    rateMax: "حداکثر میزان",
    // "Step value"
    rateStep: "میزان مراحل",
    // "Minimum value label"
    minRateDescription: "توضیح حداقل امتیاز",
    // "Maximum value label"
    maxRateDescription: "توضیح حداکثر امتیاز",
    // "Input type"
    inputType: "نوع ورودی",
    // "Option placeholder"
    optionsCaption: "نوشته انتخاب ها",
    // "Default Answer"
    defaultValue: "مقدار پیش فرض",
    // "Default texts"
    cellsDefaultRow: "متن پیش فرض سلول ها",
    // "Edit survey settings"
    surveyEditorTitle: "ویرایش نظرسنجی",
    // "Edit: {0}"
    qEditorTitle: "ویرایش سوال: {0}",
    // "Maximum character limit"
    maxLength: "ماکزیمم طول",
    // "Build"
    buildExpression: "ساختن",
    // "Edit"
    editExpression: "ویرایش",
    // [Auto-translated] "and"
    and: "و",
    // [Auto-translated] "or"
    or: "یا",
    // "Remove"
    remove: "حذف",
    // "Add Condition"
    addCondition: "اضافه کردن شرط",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "یک سؤال برای شروع پیکربندی شرایط انتخاب کنید.",
    // [Auto-translated] "If"
    if: "اگر",
    // [Auto-translated] "then"
    then: "سپس",
    // [Auto-translated] "Target question"
    setToName: "سوال هدف",
    // [Auto-translated] "Question to copy answer from"
    fromName: "سوال برای کپی کردن پاسخ از",
    // [Auto-translated] "Question to skip to"
    gotoName: "سؤال برای پرش به",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "قانون نادرست است",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "به نتایج نظرسنجی اضافه کنید",
    // "Make the title and description visible"
    showTitle: "نمایش/پنهان کردن عنوان",
    // "Expand/collapse title"
    expandCollapseTitle: "نمایش/پنهان کردن عنوان",
    // "Select a survey language"
    locale: "زبان پیش فرض",
    // "Select device type"
    simulator: "انتخاب دستگاه",
    // "Switch to landscape orientation"
    landscapeOrientation: "افقی",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "تغییر جهت به جهت تصویر",
    // "Clear hidden question values"
    clearInvisibleValues: "پاکسازی مقادیر پنهان",
    // "Limit to one response"
    cookieName: "نام کوکی (به منظور جلوگیری از اجرای دوباره نظرسنجی)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "ارسال نتایج نظرسنجی در صفحه بعدی",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "ذخیره مقدار 'سایر' در فیلد جداگانه",
    // "Show page titles"
    showPageTitles: "نمایش عنوان صفحات",
    // "Show page numbers"
    showPageNumbers: "نمایش شماره صفحات",
    // "\"Previous Page\" button text"
    pagePrevText: "متن دکمه صفحه قبلی",
    // "\"Next Page\" button text"
    pageNextText: "متن دکمه صفحه بعدی",
    // "\"Complete Survey\" button text"
    completeText: "متن دکمه تکمیل نظرسنجی",
    // "\"Review Answers\" button text"
    previewText: "پیش نمایش متن دکمه",
    // "\"Edit Answer\" button text"
    editText: "ویرایش متن دکمه",
    // "\"Start Survey\" button text"
    startSurveyText: "متن دکمه شروع نظرسنجی",
    // "Show navigation buttons"
    showNavigationButtons: "نمایش دکمه های ناوبری (ناوبری پیش فرض)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "تراز کردن دکمه های ناوبری",
    // "Show the \"Previous Page\" button"
    showPrevButton: "نمایش دکمه قبلی (کاربر ممکن است به صفحه قبل برگردد)",
    // "First page is a start page"
    firstPageIsStartPage: "صفحه اول در نظرسنجی نقطه آغازین آن است.",
    // "Show the \"Thank You\" page"
    showCompletePage: "نمایش صفحه اتمام نظرسنجی در پایان (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "با پاسخگویی به تمام سوالات، به صورت اتوماتیک به صفحه بعد برود",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "بررسی را به طور خودکار تکمیل کنید",
    // "Show the progress bar"
    showProgressBar: "نمایش نشانگر پیشرفت",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "تراز نوار پیشرفت",
    // "Question title alignment"
    questionTitleLocation: "محل عنوان سوال",
    // "Question title width"
    questionTitleWidth: "عرض عنوان سوال",
    // "Required symbol(s)"
    requiredMark: "سوالات نشان دار اجباری هستند",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "قالب عنوان سوال، به صورت پیش فرض: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "محل خطای سوال",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "تمرکز بر روی اولین سوال با تغییر صفحه",
    // "Question order"
    questionOrder: "ترتیب المان ها در صفحه",
    // "Time limit to complete the survey"
    timeLimit: "نهایت زمان برای اتمام نظرسنجی",
    // "Time limit to complete one page"
    timeLimitPerPage: "نهایت زمان برای اتمام این صفحه نظرسنجی",
    // [Auto-translated] "Use a timer"
    showTimer: "از تایمر استفاده کنید",
    // "Timer alignment"
    timerLocation: "نمایش پنل زمان سنج",
    // "Timer mode"
    timerInfoMode: "نمایش حالت پنل زمان سنج",
    // "Panel display mode"
    renderMode: "حالت رندر",
    // "Enable entry addition"
    allowAddPanel: "اجازه افزودن پنل",
    // "Enable entry removal"
    allowRemovePanel: "اجازه حذف پنل",
    // "\"Add Entry\" button text"
    addPanelText: "متن افزودن پنل",
    // "\"Remove Entry\" button text"
    removePanelText: "متن حذف پنل",
    // "Show all elements on one page"
    isSinglePage: "نمایش تمام المان ها در یک صفحه",
    // "HTML markup"
    html: "Html",
    // [Auto-translated] "Answer"
    setValue: "پاسخ",
    // [Auto-translated] "Storage format"
    dataFormat: "فرمت ذخیره سازی",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "افزودن ردیف را فعال کنید",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "حذف ردیف را فعال کنید",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "مرتب سازی مجدد ردیف را فعال کنید",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "اگر عرض یا ارتفاع دقیق ناحیه نمایش را مشخص کنید، اعمال نمی شود.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "حداقل عرض منطقه نمایش",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "حداکثر عرض منطقه نمایش",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "حداقل ارتفاع مساحت نمایش",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "حداکثر ارتفاع منطقه نمایش",
    // "Minimum value"
    minValue: "حداقل مقدار",
    // "Maximum value"
    maxValue: "حداکثر مقدار",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "غیر حساس به حروف بزرگ",
    // "Minimum length (in characters)"
    minLength: "حداقل طول",
    // "Allow digits"
    allowDigits: "امکان ورود اعداد",
    // "Minimum count"
    minCount: "حداقل تعداد ",
    // "Maximum count"
    maxCount: "حداکثر مقدار",
    // "Regular expression"
    regex: "فرمت صحیح عبارت ",
    surveyvalidator: {
      // [Auto-translated] "Error message"
      text: "پیام خطا",
      // [Auto-translated] "Validation expression"
      expression: "عبارت اعتبارسنجی"
    },
    // "Total row header"
    totalText: "متن کامل",
    // "Aggregation method"
    totalType: "نوع کامل",
    // "Total value expression"
    totalExpression: "عبارت کامل",
    // "Total value display format"
    totalDisplayStyle: "سبک نمایش کل",
    // "Currency"
    totalCurrency: "مجموع ارز",
    // "Formatted string"
    totalFormat: "مجموع فرمت",
    // [Auto-translated] "Survey logo"
    logo: "لوگوی نظرسنجی",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "طرح نظرسنجی",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "محدود کردن طول پاسخ",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "محدود کردن طول نظر",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "ارتفاع منطقه نظر (در خطوط)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "گسترش خودکار نواحی متن",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "اجازه دادن به کاربران برای تغییر اندازه مناطق متن",
    // "Update input field values"
    textUpdateMode: "بههنگامسازی مقدار سؤال متن",
    // [Auto-translated] "Input mask type"
    maskType: "نوع ماسک ورودی",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "تنظیم تمرکز روی اولین پاسخ نامعتبر",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "اجرای اعتبارسنجی",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "اعتبارسنجی فیلدهای خالی در فوکوس از دست رفته",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "پس از ارسال به یک پیوند خارجی تغییر مسیر دهید",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "پیوند خارجی پویا",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "نشانهگذاری برای نشان دادن اینکه ایا کاربر قبلا این بررسی را پر کرده است",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "نشانه گذاری صفحه \"متشکرم\"",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "نشانه گذاری پویا صفحه \"متشکرم\"",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "نشانه گذاری برای نشان دادن در حالی که مدل بررسی در حال بارگذاری است",
    // [Auto-translated] "Comment area text"
    commentText: "متن ناحیه نظر",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "نوع تکمیل خودکار",
    // "Label for \"True\""
    labelTrue: "برچسب \"True\"",
    // "Label for \"False\""
    labelFalse: "برچسب \"غلط\"",
    // "Show the Clear button"
    allowClear: "نشان دادن دکمهی Clear",
    // [Auto-translated] "Search Mode"
    searchMode: "حالت جستجو",
    // [Auto-translated] "Display format"
    displayStyle: "فرمت نمایش",
    // [Auto-translated] "Formatted string"
    format: "رشتۀ قالببندی شده",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "بیشینه رقم کسری",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "حداقل رقم کسری",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "نمایش جداسازهای گروهبندی",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "فعال کردن آپلود چند فایل",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "پیش نمایش تصاویر آپلود شده",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "انواع فایل های پذیرفته شده",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "منتظر بمانید تا آپلود کامل شود",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "تایید حذف پرونده",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "تراز جزئیات ردیف",
    // [Auto-translated] "Minimum row count"
    minRowCount: "حداقل تعداد سطرها",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "حداکثر تعداد سطرها",
    // "Confirm row removal"
    confirmDelete: "تایید حذف سطر",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "پیام تایید",
    // [Auto-translated] "Initial number of entries"
    panelCount: "تعداد اولیه ورودی ها",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "حداقل تعداد ورودی ها",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "حداکثر تعداد ورودی ها",
    // [Auto-translated] "Initial entry state"
    panelsState: "حالت ورود اولیه",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "متن دکمه \"ورودی قبلی\"",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "متن دکمه \"ورودی بعدی\"",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "تراز دکمه \"حذف ورود\"",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "اگر سؤال بدون ردیف است پنهان کنید",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "مخفی کردن ستونها اگر سطری وجود نداشته باشد",
    // [Auto-translated] "Custom rating values"
    rateValues: "مقادیر رتبه بندی سفارشی",
    // [Auto-translated] "Rating count"
    rateCount: "تعداد رتبه بندی",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "پیکربندی رتبه بندی",
    slider: {
      // [Auto-translated] "Min value"
      min: "حداقل مقدار",
      // [Auto-translated] "Max value"
      max: "حداکثر مقدار",
      // [Auto-translated] "Step value"
      step: "ارزش گام",
      // [Auto-translated] "Show scale labels"
      showLabels: "نمایش برچسب های مقیاس",
      // [Auto-translated] "Show tooltips"
      tooltipVisibilityPG: "نمایش نکات ابزار",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "اجازه عبور از انگشت شست",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "تعداد برچسب های تولید شده به صورت خودکار",
      // [Auto-translated] "Min value expression"
      minValueExpression: "بیان حداقل مقدار",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "بیان حداکثر مقدار",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "پیکربندی برچسب های مقیاس بندی",
      // [Auto-translated] "Slider type"
      sliderType: "نوع کشویی",
      // [Auto-translated] "Min range length"
      minRangeLength: "حداقل طول محدوده",
      // [Auto-translated] "Max range length"
      maxRangeLength: "حداکثر طول برد",
      // [Auto-translated] "Custom labels"
      customLabels: "برچسب های سفارشی",
      // [Auto-translated] "Label format"
      labelFormat: "فرمت برچسب",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "فرمت راهنمای ابزار"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "ارتفاع تصویر",
      // [Auto-translated] "Image width"
      imageWidth: "عرض تصویر"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "اگر گزینه ای ندارد سوال را پنهان کنید",
    // "Minimum width"
    minWidth: "حداقل عرض (در مقادیر پذیرفته شده CSS)",
    // "Maximum width"
    maxWidth: "حداکثر عرض (در مقادیر پذیرفته شده CSS)",
    // "Width"
    width: "عرض (در مقادیر پذیرفته شده CSS)",
    // [Auto-translated] "Show column headers"
    showHeader: "نمایش سرایندهای ستون",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "نمایش میله لغزش افقی",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "حداقل عرض ستون",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "عرض هدر ردیف",
    // "Value to store when \"True\" is selected"
    valueTrue: "مقدار » درست",
    // "Value to store when \"False\" is selected"
    valueFalse: "مقدار » نادرست",
    // "\"Value is below minimum\" error message"
    minErrorText: "پیام خطای \"مقدار کمتر از حداقل است\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"مقدار بیش از حداکثر\" پیام خطا",
    // "\"Empty comment\" error message"
    otherErrorText: "پیام خطای \"نظر خالی\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "پیام خطای \"مقدار کلید غیر منحصر به فرد\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "حداقل انتخاب ها برای انتخاب",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "حداکثر انتخاب ها برای انتخاب",
    // [Auto-translated] "Logo width"
    logoWidth: "عرض لوگو",
    // [Auto-translated] "Logo height"
    logoHeight: "ارتفاع لوگو",
    // "Read-only"
    readOnly: "فقط خواندنی",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "حالت فقط خواندنی را غیرفعال کنید اگر",
    // "\"No rows\" message"
    noRowsText: "پیام \"بدون ردیف\"",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "انتخاب های ویژه جداگانه",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "کپی کردن انتخابها از سؤال زیر",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "کدام گزینه های انتخابی را کپی کنید",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "از مقادیر ستون ماتریس یا سوال پانل زیر به عنوان شناسه های انتخاب استفاده کنید.",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "از مقادیر ستون ماتریس یا سوال پانل زیر به عنوان متن انتخابی استفاده کنید",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "نمایش عناوین صفحه در نوار پیشرفت",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "نمایش شماره صفحات در نوار پیشرفت",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "یک کادر نظر اضافه کنید",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "متن نگهدارنده مکان برای کادر نظر",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "نمایش برچسب ها به عنوان مقادیر شدید",
    // [Auto-translated] "Row order"
    rowOrder: "سفارش ردیف",
    // [Auto-translated] "Column layout"
    columnsLayout: "طرحبندی ستون",
    // [Auto-translated] "Nested column count"
    columnColCount: "تعداد ستون های تو در تو",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "پاسخ صحیح",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "مقادیر پیشفرض",
    // [Auto-translated] "Cell Texts"
    cells: "متن سلولی",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "یک پرونده را انتخاب کنید یا پیوند پرونده را جایگذاری کنید...",
    // "Prevent duplicate responses in the following column"
    keyName: "ستون کلید",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "این گزینه قابل مشاهده است اگر",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "گزینه را انتخاب کنید اگر"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "سطر را مرئی کنید اگر",
      // [Auto-translated] "Make the row editable if"
      enableIf: "ردیف را قابل ویرایش کنید اگر"
    },
    imageitemvalue: {
      // "Alt text"
      text: "متن دگرساز"
    },
    // "Logo alignment"
    logoPosition: "محل قرارگیری لوگو",
    // "Add logo..."
    addLogo: "اضافه کردن لوگو...",
    // "Change logo..."
    changeLogo: "تغییر لوگو...",
    logoPositions: {
      // "Remove logo"
      none: "حذف لوگو",
      // "Left"
      left: "چپ",
      // "Right"
      right: "راست",
      // "On the top"
      top: "بخش بالا",
      // "In the bottom"
      bottom: "بخش پایین"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "حالت پیش نمایش",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "طرح بندی شبکه را فعال کنید",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "ستون های شبکه ای",
    // [Auto-translated] "Mask settings"
    maskSettings: "تنظیمات ماسک",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "جزئیات ردیف تراز پیام خطا",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "چیدمان پنل"
      },
      // "General"
      general: "عمومی",
      // "Options"
      fileOptions: "انتخاب ها",
      // "HTML Editor"
      html: "ویرایشگر HTML",
      // "Columns"
      columns: "ستون ها",
      // "Rows"
      rows: "سطرها",
      // "Choice Options"
      choices: "انتخاب ها",
      // "Items"
      items: "آیتم ها",
      // "Visible If"
      visibleIf: "نمایش در صورت",
      // "Editable If"
      enableIf: "فعال اگر",
      // "Required If"
      requiredIf: "مورد نیاز ااگر",
      // "Rating Values"
      rateValues: "مقادیر رتبه بندی",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "تنظیمات نوار لغزنده",
      // "Choices from a Web Service"
      choicesByUrl: "انتخاب ها از وب",
      // "Default Choices"
      matrixChoices: "انتخاب های پیشفرض",
      // "Text Inputs"
      multipleTextItems: "فیلدهای متنی",
      // "Numbering"
      numbering: "شماره گذاری",
      // "Validators"
      validators: "اعتبارسنجی ها",
      // "Navigation"
      navigation: "ناوبری",
      // "Question Settings"
      question: "سوال",
      // "Pages"
      pages: "صفحات",
      // "Quiz Mode"
      timer: "زمان سنج/کوئیز",
      // "Calculated Values"
      calculatedValues: "مقادیر محاسبه شد",
      // "Triggers"
      triggers: "اجرا کننده",
      // "Title template"
      templateTitle: "عنوان قالب",
      // "Totals"
      totals: "جمع کل",
      // "Conditions"
      logic: "منطق",
      // [Auto-translated] "Input Mask Settings"
      mask: "تنظیمات ماسک ورودی",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "چیدمان پنل",
        // [Auto-translated] "Layout"
        question: "طرح",
        // [Auto-translated] "Layout"
        base: "طرح"
      },
      // "Data"
      data: "اطلاعات",
      // "Validation"
      validation: "اعتبارسنجی",
      // "Individual Cell Texts"
      cells: "سلول ها",
      // "\"Thank You\" Page"
      showOnCompleted: "نمایش بدهید تکمیل شده",
      // "Logo in the Survey Header"
      logo: "لوگو در عنوان نظرسنجی",
      // "Slider"
      slider: "اسلایدر",
      // [Auto-translated] "Expression"
      expression: "بیان",
      // [Auto-translated] "Question Settings"
      questionSettings: "تنظیمات پرسش",
      // "Header"
      header: "هدر",
      // "Background"
      background: "پس زمینه",
      // "Appearance"
      appearance: "ظاهر",
      // [Auto-translated] "Accent colors"
      accentColors: "رنگ های تاکیدی",
      // [Auto-translated] "Surface background"
      surfaceBackground: "زمینه سطح",
      // [Auto-translated] "Scaling"
      scaling: "توزین",
      // "Others"
      others: "باقی موارد"
    },
    // "Edit property '{0}'"
    editProperty: "ویرایش خصوصیت '{0}'",
    // "Items"
    items: "[ آیتم ها: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "انتخاب ها را قابل مشاهده کنید اگر",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "انتخاب ها را قابل انتخاب کنید اگر",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "ستون ها را قابل مشاهده کنید اگر",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "ردیف ها را قابل مشاهده کنید اگر",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "تورفتگی داخلی را افزایش دهید",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "از پاسخ های آخرین ورودی به عنوان پیش فرض استفاده کنید",
    // "Please enter a value."
    enterNewValue: "لطفا یک مقدار وارد کنید",
    // "There are no questions in the survey."
    noquestions: "سوالی در پرسشنامه درج نشده",
    // "Please create a trigger"
    createtrigger: "اجرا کننده ای بسازید",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "برای ویرایش دکمه ی enter را فشار دهید.",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "برای ویرایش دکمه ی enter را فشار دهید, برای حذف دکمه ی delete را فشار دهید, برای حرکت دادن یک آیتم، دکمه ی  alt + arrow down /  alt + arrow up فشار دهید",
    // "On "
    triggerOn: "در ",
    // "Make pages visible"
    triggerMakePagesVisible: "صفحات را قابل نمایش کن:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "سوالات را قابل نمایش کن:",
    // "Complete the survey if successful."
    triggerCompleteText: "پرسشنامه را تکمیل کن اگر موفق بود.",
    // "The trigger is not set"
    triggerNotSet: "اجرا کننده تنظیم نشده.",
    // "Run if"
    triggerRunIf: "اجرا در صورت",
    // "Change value of: "
    triggerSetToName: "تعییر مقدار از: ",
    // "Copy value from: "
    triggerFromName: "کپی مقدار از: ",
    // "Run this Expression"
    triggerRunExpression: "اجرای این عبارت",
    // "to: "
    triggerSetValue: "به: ",
    // "Go to the question"
    triggerGotoName: "به سوال بروید:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "عدم درج متغییر در نتایج پرسشنامه",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "لطفا عبارت معتبری وارد نمایید",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "عبارت را در اینجا تایپ کنید...",
    // "No file chosen"
    noFile: "هیچ فایلی انتخاب نشده است",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "مقادیر سوال پنهان را پاک کنید",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "مقادیر را در ویژگی زیر ذخیره کنید",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "فعال کردن جستجو همانطور که تایپ می کنید",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "مخفی کردن فقرههای انتخاب شده",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "جمع کردن منوی کشویی پس از انتخاب",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "تراز عمودی در سلول ها",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "رنگ های ردیف جایگزین",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "ستون ها را قابل مشاهده کنید اگر",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "ردیف ها را قابل مشاهده کنید اگر",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "متن نگهدارنده مکان برای کادر نظر",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "متن نگهدارنده مکان برای فایل محلی",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "متن نگهدارنده مکان برای دوربین",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "متن نگهدارنده مکان برای فایل محلی یا دوربین",
    // [Auto-translated] "Rating icon"
    rateType: "نماد رتبه بندی",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "سابق: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "سابق: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "سابق: الف)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "سابق: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "سابق: 600 پیکسل",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "سابق: 50٪",
    // "auto"
    imageHeight_placeholder: "خودکار",
    // "auto"
    imageWidth_placeholder: "خودکار",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "مثال: 100 پیکسل",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "تم",
      // [Auto-translated] "Question appearance"
      isPanelless: "ظاهر سوال",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "شعاع زمینه و گوشه",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "شعاع زمینه و گوشه",
      // [Auto-translated] "Accent color"
      primaryColor: "رنگ لهجه",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "کدورت پانل و جعبه سوال",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "کدورت عنصر ورودی",
      // [Auto-translated] "Survey font size"
      fontSize: "اندازه فونت نظرسنجی",
      // [Auto-translated] "Survey scale factor"
      scale: "عامل مقیاس پیمایشی",
      // [Auto-translated] "Corner radius"
      cornerRadius: "شعاع گوشه",
      // [Auto-translated] "Advanced mode"
      advancedMode: "حالت پیشرفته",
      // [Auto-translated] "Title font"
      pageTitle: "فونت عنوان",
      // [Auto-translated] "Description font"
      pageDescription: "توضیحات فونت",
      // [Auto-translated] "Title font"
      questionTitle: "فونت عنوان",
      // [Auto-translated] "Description font"
      questionDescription: "توضیحات فونت",
      // [Auto-translated] "Font"
      editorFont: "فونت",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "کدورت", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "خانواده فونت نظرسنجی",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "رنگ پسزمینه",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "رنگ های پس زمینه برجسته",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "رنگ های پیش زمینه لهجه",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "رنگ های پیام خطا",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "جلوه های سایه",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "جلوه های سایه",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "رنگ"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "مشاهده",
      // [Auto-translated] "Logo alignment"
      logoPosition: "تراز لوگو",
      // [Auto-translated] "Survey title font"
      surveyTitle: "قلم عنوان نظرسنجی",
      // [Auto-translated] "Survey description font"
      surveyDescription: "قلم توصیف نظرسنجی",
      // [Auto-translated] "Survey title font"
      headerTitle: "قلم عنوان نظرسنجی",
      // [Auto-translated] "Survey description font"
      headerDescription: "قلم توصیف نظرسنجی",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "عرض منطقه محتوا",
      // [Auto-translated] "Text width"
      textAreaWidth: "عرض متن",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "رنگ پسزمینه",
      // [Auto-translated] "Background image"
      backgroundImage: "تصویر زمینه",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "کدورت",
      // [Auto-translated] "Overlap"
      overlapEnabled: "همپوشانی",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "تراز لوگو",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "تراز عنوان نظرسنجی",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "همسویی توضیحات نظرسنجی"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "واقعی",
    // [Auto-translated] "false"
    "false": "نادرست",
    // [Auto-translated] "Local file"
    file: "فایل محلی",
    // [Auto-translated] "Camera"
    camera: "دوربین",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "فایل محلی یا دوربین",
    // "Inherit"
    inherit: "ارث بری",
    // "Visible"
    show: "آشکار",
    // "Hidden"
    hide: "پنهان",
    // "Inherit"
    default: "پیش فرض",
    // "Initial"
    initial: "اولیه",
    // "Random"
    random: "تصادفی",
    // "Collapsed"
    collapsed: "جمع شده",
    // "Expanded"
    expanded: "باز شده",
    // "None"
    none: "هیچ کدام",
    // "Ascending"
    asc: "صعودی",
    // "Descending"
    desc: "نزولی",
    // "Indeterminate"
    indeterminate: "نامشخص",
    // [Auto-translated] "Selected"
    selected: "انتخاب",
    // [Auto-translated] "Unselected"
    unselected: "انتخاب نشده",
    // [Auto-translated] "decimal"
    decimal: "اعشاری",
    // [Auto-translated] "currency"
    currency: "ارز",
    // [Auto-translated] "percent"
    percent: "درصد",
    // "First panel is expanded"
    firstExpanded: "گسترش یافته",
    // "Hide question numbers"
    off: "خاموش",
    // "List"
    list: "لیست",
    // [Auto-translated] "Carousel"
    carousel: "چرخ فلک",
    // [Auto-translated] "Tabs"
    tab: "زبانه",
    // "Panel navigator + Progress bar at the top"
    progressTop: "نوار پیشرفت  بالا",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "نوار پیشرفت پایین",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "نوار پیشرفت در بالا و پایین",
    // "Horizontal"
    horizontal: "افقی",
    // "Vertical"
    vertical: "عمودی",
    // "Top"
    top: "بالا",
    // "Bottom"
    bottom: "پایین",
    // "Top and bottom"
    topBottom: "بالا و پایین",
    // "Both"
    both: "هر دو",
    // "Left"
    left: "چپ",
    // [Auto-translated] "Right"
    right: "راست",
    // [Auto-translated] "Center"
    center: "مرکز",
    // [Auto-translated] "Left and right"
    leftRight: "چپ و راست",
    // [Auto-translated] "Middle"
    middle: "میانه",
    // [Auto-translated] "color"
    color: "رنگ",
    // [Auto-translated] "date"
    date: "تاریخ",
    // [Auto-translated] "datetime"
    datetime: "تاریخ",
    // [Auto-translated] "datetime-local"
    "datetime-local": "تاریخ محلی",
    // [Auto-translated] "email"
    email: "ایمیل",
    // [Auto-translated] "month"
    month: "ماه",
    // [Auto-translated] "number"
    number: "شماره",
    // [Auto-translated] "password"
    password: "رمز عبور",
    // [Auto-translated] "range"
    range: "محدوده",
    // [Auto-translated] "tel"
    tel: "تلفن",
    // [Auto-translated] "text"
    text: "پیامک",
    // [Auto-translated] "time"
    time: "زمان",
    // [Auto-translated] "url"
    url: "آدرس",
    // [Auto-translated] "week"
    week: "هفته",
    // "Hidden"
    hidden: "مخفی",
    // "Editable"
    edit: "ویرایش",
    // "Read-only"
    display: "نمایش",
    // [Auto-translated] "Contain"
    contain: "حاوی",
    // [Auto-translated] "Cover"
    cover: "پوشش",
    // [Auto-translated] "Fill"
    fill: "پر کردن",
    // [Auto-translated] "Next"
    next: "بعدی",
    // [Auto-translated] "Last"
    last: "آخرین",
    // "Upon survey completion"
    onComplete: "به محض تمام شدن",
    // "When question gets hidden"
    onHidden: "به محض مخفی شدن",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "وقتی سوال یا پانل/صفحه آن پنهان می شود",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "هرگز"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "هرگز"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "دکمه های رادیویی",
    inputType: {
      // [Auto-translated] "Color"
      color: "رنگ",
      // [Auto-translated] "Date"
      date: "تاریخ",
      // [Auto-translated] "Date and Time"
      "datetime-local": "تاریخ و زمان",
      // [Auto-translated] "Email"
      email: "ایمیل",
      // [Auto-translated] "Month"
      month: "ماه",
      // [Auto-translated] "Number"
      number: "شماره",
      // [Auto-translated] "Password"
      password: "رمز عبور",
      // [Auto-translated] "Range"
      range: "محدوده",
      // [Auto-translated] "Phone Number"
      tel: "شماره تماس",
      // [Auto-translated] "Text"
      text: "پیامک",
      // [Auto-translated] "Time"
      time: "زمان",
      // [Auto-translated] "URL"
      url: "آدرس",
      // [Auto-translated] "Week"
      week: "هفته"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "تک مقدار",
      // [Auto-translated] "Range"
      range: "محدوده"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "نام و نام خانوادگی",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "پیشوند",
      // [Auto-translated] "First Name"
      "given-name": "نام و نام خانوادگی",
      // [Auto-translated] "Middle Name"
      "additional-name": "نام میانی",
      // [Auto-translated] "Last Name"
      "family-name": "نام خانوادگی",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "پسوند",
      // [Auto-translated] "Nickname"
      nickname: "نام مستعار",
      // [Auto-translated] "Job Title"
      "organization-title": "عنوان شغلی",
      // [Auto-translated] "User Name"
      username: "نام کاربری",
      // [Auto-translated] "New Password"
      "new-password": "رمز عبور جدید",
      // [Auto-translated] "Current Password"
      "current-password": "رمز عبور فعلی",
      // [Auto-translated] "Organization Name"
      organization: "نام سازمان",
      // [Auto-translated] "Full Street Address"
      "street-address": "آدرس کامل خیابان",
      // [Auto-translated] "Address Line 1"
      "address-line1": "خط آدرس 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "خط آدرس 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "خط آدرس 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "آدرس سطح 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "آدرس سطح 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "آدرس سطح 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "آدرس سطح 1",
      // [Auto-translated] "Country Code"
      country: "کد کشور",
      // [Auto-translated] "Country Name"
      "country-name": "نام کشور",
      // [Auto-translated] "Postal Code"
      "postal-code": "کد پستی",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "نام دارنده کارت",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "نام دارنده کارت",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "نام میانی دارنده کارت",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "نام خانوادگی دارنده کارت",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "شماره کارت اعتباری",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "تاریخ انقضا",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "ماه انقضا",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "سال انقضا",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "کد امنیتی کارت",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "نوع کارت اعتباری",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "ارز تراکنش",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "مبلغ تراکنش",
      // [Auto-translated] "Preferred Language"
      language: "زبان ترجیحی",
      // [Auto-translated] "Birthday"
      bday: "تولد",
      // [Auto-translated] "Birthday Day"
      "bday-day": "روز تولد",
      // [Auto-translated] "Birthday Month"
      "bday-month": "ماه تولد",
      // [Auto-translated] "Birthday Year"
      "bday-year": "سال تولد",
      // [Auto-translated] "Gender"
      sex: "جنسیت",
      // [Auto-translated] "Website URL"
      url: "آدرس وب سایت",
      // [Auto-translated] "Profile Photo"
      photo: "عکس پروفایل",
      // [Auto-translated] "Telephone Number"
      tel: "شماره تلفن",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "کد کشور برای تلفن",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "شماره تلفن ملی",
      // [Auto-translated] "Area Code"
      "tel-area-code": "کد منطقه",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "شماره تلفن محلی",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "پیشوند تلفن محلی",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "پسوند تلفن محلی",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "پسوند تلفن",
      // [Auto-translated] "Email Address"
      email: "آدرس ایمیل",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "پروتکل پیام رسانی فوری"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "هیچ کدام",
      // [Auto-translated] "Pattern"
      pattern: "الگوی",
      // [Auto-translated] "Numeric"
      numeric: "عددی",
      // [Auto-translated] "Date and Time"
      datetime: "تاریخ و زمان",
      // [Auto-translated] "Currency"
      currency: "ارز"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "خودکار",
      // [Auto-translated] "Left"
      left: "چپ",
      // [Auto-translated] "Right"
      right: "راست"
    },
    // "All"
    all: "تمام",
    // "Page"
    page: "صفحه",
    // "Survey"
    survey: "نظرسنجی",
    // "When switching to the next page"
    onNextPage: "به محض صفحه بعدی",
    // "After an answer is changed"
    onValueChanged: "به محض تغییر مقدار",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "قبل از اینکه پاسخ تغییر کند",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "ساختار اصلی",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "نمایش تمام سوالات در یک صفحه",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "نمایش یک سؤال در هر صفحه",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "نمایش یک فیلد ورودی در هر صفحه"
    },
    // "No preview"
    noPreview: "پیش نمایش ندارد",
    // "Show all questions"
    showAllQuestions: "فعال سازی پیش نمایش با تمام سوالات",
    // "Show answered questions only"
    showAnsweredQuestions: "فعال سازی پیش نمایش به سوالات پاسخ داده شده",
    // [Auto-translated] "Show all questions"
    allQuestions: "نمایش همه سوالات",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "فقط سوالات پاسخ داده شده را نشان دهید",
    // [Auto-translated] "Completed pages"
    pages: "صفحات تکمیل شده",
    // [Auto-translated] "Answered questions"
    questions: "سوالات پاسخ داده شده",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "پاسخ به سوالات مورد نیاز",
    // [Auto-translated] "Valid answers"
    correctQuestions: "پاسخ های معتبر",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "صفحات تکمیل شده(دکمه UI)",
    // [Auto-translated] "Under the input field"
    underInput: "در زیر فیلد ورودی",
    // [Auto-translated] "Under the question title"
    underTitle: "زیر عنوان سوال",
    // [Auto-translated] "On lost focus"
    onBlur: "در فوکوس از دست رفته",
    // [Auto-translated] "While typing"
    onTyping: "هنگام تایپ",
    // [Auto-translated] "Under the row"
    underRow: "زیر ردیف",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "در زیر ردیف، فقط یک بخش نمایش داده می شود",
    // "Auto"
    auto: "خودکار",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "پنهان"
    },
    timerInfoMode: {
      // "Both"
      combined: "هر دو"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "بر اساس چیدمان ماتریس"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "قفل",
      // [Auto-translated] "Collapse all"
      collapsed: "جمع کردن همه",
      // [Auto-translated] "Expand all"
      expanded: "گسترش همه",
      // [Auto-translated] "First expanded"
      firstExpanded: "اولین گسترش"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "استاتیک",
      // [Auto-translated] "Responsive"
      responsive: "پاسخگو"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "تصویر",
      // [Auto-translated] "Video"
      video: "ویدئو",
      // [Auto-translated] "YouTube"
      youtube: "Youtube"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "دکمه",
      // [Auto-translated] "Dropdown"
      dropdown: "کشویی"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "پیش فرض",
      // [Auto-translated] "Scale"
      scale: "مقیاس"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "تک رنگ",
      // [Auto-translated] "Colored"
      colored: "رنگی"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "تولید خودکار",
      // [Auto-translated] "Manual"
      "false": "دستی"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "برچسب",
      // [Auto-translated] "Stars"
      stars: "ستاره",
      // [Auto-translated] "Smileys"
      smileys: "صورتک"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "قفل"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "شماره خودکار",
      // [Auto-translated] "Auto-numbering"
      on: "شماره خودکار",
      // [Auto-translated] "Reset on each page"
      onPage: "بازنشانی در هر صفحه",
      // [Auto-translated] "Reset on each panel"
      onpanel: "تنظیم مجدد در هر پنل",
      // [Auto-translated] "Reset on each panel"
      onPanel: "بازنشانی در هر پنل",
      // [Auto-translated] "Recursive numbering"
      recursive: "شماره گذاری بازگشتی",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "ادامه در سراسر نظرسنجی",
      // [Auto-translated] "No numbering"
      off: "بدون شماره"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "تحت عنوان سوال",
      // [Auto-translated] "Under the input field"
      underInput: "زیر فیلد ورودی"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "در کنار انتخاب ها",
      // [Auto-translated] "Above choices"
      vertical: "انتخاب های بالا"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "اعشاری",
      // [Auto-translated] "Currency"
      currency: "ارز",
      // [Auto-translated] "Percentage"
      percent: "درصد",
      // [Auto-translated] "Date"
      date: "تاریخ"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "اعشاری",
      // [Auto-translated] "Currency"
      currency: "ارز",
      // [Auto-translated] "Percentage"
      percent: "درصد",
      // [Auto-translated] "Date"
      date: "تاریخ"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "اصلی"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "اصلی"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "بالا",
      // [Auto-translated] "Bottom"
      bottom: "پایین",
      // [Auto-translated] "Top and bottom"
      topbottom: "بالا و پایین",
      // [Auto-translated] "Above the header"
      aboveheader: "بالای سربرگ",
      // [Auto-translated] "Below the header"
      belowheader: "در زیر سرصفحه",
      // [Auto-translated] "Hidden"
      off: "پنهان"
    },
    // [Auto-translated] "Sum"
    sum: "مجموع",
    // [Auto-translated] "Count"
    count: "تعداد",
    // [Auto-translated] "Min"
    min: "دقیقه",
    // [Auto-translated] "Max"
    max: "حداکثر",
    // [Auto-translated] "Avg"
    avg: "میانگین",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "شامل",
      // [Auto-translated] "Starts with"
      startsWith: "شروع با"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "خودکار",
      // [Auto-translated] "Cover"
      cover: "پوشش",
      // [Auto-translated] "Contain"
      contain: "حاوی",
      // [Auto-translated] "Stretch"
      fill: "کشش",
      // [Auto-translated] "Tile"
      tile: "کاشی"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "ثابت",
      // [Auto-translated] "Scroll"
      scroll: "حرکت"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "اساسی",
      // [Auto-translated] "Advanced"
      advanced: "پیشرفته"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "همانند نظرسنجی",
      // [Auto-translated] "Same as container"
      container: "همانند کانتینر"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "هیچ کدام",
      // [Auto-translated] "Accent color"
      accentColor: "رنگ لهجه",
      // [Auto-translated] "Custom"
      custom: "سفارشی"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "نور",
      // [Auto-translated] "Dark"
      dark: "تاریک"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "پیش فرض",
      // [Auto-translated] "Without Panels"
      "true": "بدون پانل"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "همانند نظرسنجی",
      // [Auto-translated] "Same as container"
      container: "همانند کانتینر"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "خالی باشد",
    // "Not empty"
    notempty: "خالی نباشد",
    // "Equals"
    equal: "مساوی باشد",
    // "Does not equal"
    notequal: "مساوی نباشد",
    // "Contains"
    contains: "شامل",
    // "Does not contain"
    notcontains: "شامل نباشد",
    // "Any of"
    anyof: "هرکدام",
    // "All of"
    allof: "همه",
    // "Greater than"
    greater: "بزرگتر",
    // "Less than"
    less: "کوچکتر",
    // "Greater than or equal to"
    greaterorequal: "بزرگتر یا مساوی",
    // "Less than or equal to"
    lessorequal: "کوچکتر یا مساوی",
    // [Auto-translated] "and"
    and: "و",
    // [Auto-translated] "or"
    or: "یا"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "استفاده از نسخه Angular",
    // "Use jQuery version"
    jquery: "استفاده از نسخه jQuery",
    // "Use Knockout version"
    knockout: "استفاده از نسخه ناک اوت",
    // "Use React version"
    react: "استفاده از نسخه React",
    // "Use Vue version"
    vue: "استفاده از نسخه Vue",
    // "For bootstrap framework"
    bootstrap: "برای فریم ورک بوتسترپ",
    // "Modern theme"
    modern: "تم مدرن",
    // "Default theme"
    default: "تم پیش فرض",
    // "Orange theme"
    orange: "تم نارنجی",
    // "Darkblue theme"
    darkblue: "تم آبی تیره",
    // "Darkrose theme"
    darkrose: "تم صورتی",
    // "Stone theme"
    stone: "تم سنگی",
    // "Winter theme"
    winter: "تم زمستانی",
    // "Winter-Stone theme"
    winterstone: "تم زمستانی و سنگی",
    // "Show survey on a page"
    showOnPage: "نمایش نظرسنجی در یک صفحه",
    // "Show survey in a window"
    showInWindow: "نمایش نظرسنجی در یک پنجره",
    // "Load Survey JSON from server"
    loadFromServer: "بارگزاری JSON از سرور",
    // "Scripts and styles"
    titleScript: "اسکریپت و شیوه نمایش",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "جاوااسکریپت"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "صفحه ای را برای آزمایش انتخاب کنید:",
    // "Show invisible elements"
    showInvisibleElements: "نمایش المان های مخفی",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "مخفی کردن عناصر نامرئی",
    // [Auto-translated] "Previous"
    prevPage: "قبلی",
    // [Auto-translated] "Next"
    nextPage: "بعدی"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "تعداد پاسخ",
    // "Email"
    emailvalidator: "ایمیل",
    // "Expression"
    expressionvalidator: "عبارت",
    // "Number"
    numericvalidator: "عدد",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "متن"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "تکمیل نظرسنجی",
    // "Set answer"
    setvaluetrigger: "تنظیم مقدار",
    // "Copy answer"
    copyvaluetrigger: "کپی مقدار",
    // "Skip to question"
    skiptrigger: "رد کردن سوال ",
    // "Run expression"
    runexpressiontrigger: "اجرای عبارت",
    // "change visibility (deprecated)"
    visibletrigger: "تغییر وضعیت دیده شدن"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "شماره تماس: +1 (999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "سابق: mm/dd/yyyyy"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "سابق: $",
      // "Ex.: USD"
      suffix: "Ex.: دلار امریکا"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "سابق: 200 پیکسل"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "مثال: 30٪",
      // "Ex.: 200px"
      questionTitleWidth: "مثال: 200 پیکسل"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "یک شناسه پانل که برای پاسخ دهندگان قابل مشاهده نیست.",
      // [Auto-translated] "Type a panel subtitle."
      description: "زیرنویس پانل را تایپ کنید.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی که دید پانل را تعیین می کند استفاده کنید.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای پانل غیرفعال می کند.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "برای تمام سوالات موجود در این پانل اعمال می شود. هنگامی که روی \"Hidden\" تنظیم می شود، توضیحات سؤال را نیز پنهان می کند. اگر می خواهید این تنظیم را لغو کنید، قوانین تراز عنوان را برای سؤالات فردی تعریف کنید. گزینه \"وراثت\" تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (به طور پیش فرض \"بالا\" را اعمال می کند). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "عرض ثابت را برای عناوین سؤال تنظیم می کند وقتی که انها در سمت چپ جعبه های سوال خود قرار دارند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "مکان یک پیام خطا را در رابطه با تمام سوالات درون پانل تنظیم می کند. گزینه \"Inherit\" شامل تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی است.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "ترتیب اصلی سوالات را حفظ می کند یا آنها را تصادفی می کند. گزینه \"وراثت\" تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی را اعمال می کند.",
      // "Repositions the panel to the end of a selected page."
      page: "پانل را به انتهای صفحه انتخاب شده تغییر می دهد.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "اضافه کردن فضا یا حاشیه بین محتوای پانل و مرز سمت چپ جعبه پانل.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "عدم انتخاب برای نمایش پانل در یک خط با سوال قبلی یا پانل. تنظیمات اعمال نمی شود اگر پانل اولین عنصر در فرم شما باشد.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "را انتخاب کنید از: \"گسترش یافته\" - پانل به طور کامل نمایش داده می شود و می تواند سقوط کند؛ \"سقوط\" - پانل تنها عنوان و توضیحات را نمایش می دهد و می تواند گسترش یابد. \"Locked\" - پانل به طور کامل نمایش داده می شود و نمی تواند سقوط کند.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "عرض پانل را متناسب با سایر عناصر نظرسنجی در همان خط تنظیم می کند. مقادیر CSS (px، ٪، in، pt و غیره) را می پذیرد.",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "اعداد را به سؤالات تودرتو در این پانل اختصاص می دهد.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "مشخص می کند که این پانل چند ستون در طرح بندی شبکه قرار دارد.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "این جدول به شما امکان می دهد هر ستون شبکه را در پانل پیکربندی کنید. به طور خودکار درصد عرض هر ستون را بر اساس حداکثر تعداد عناصر در یک ردیف تنظیم می کند. برای سفارشی کردن طرح بندی شبکه، این مقادیر را به صورت دستی تنظیم کنید و عرض عنوان را برای همه سوالات در هر ستون تعریف کنید."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "یک شناسه پانل که برای پاسخ دهندگان قابل مشاهده نیست.",
      // "Type a panel subtitle."
      description: "یک زیرنویس پانل تایپ کنید.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی که دید پانل را تعیین می کند استفاده کنید.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای پانل غیرفعال می کند.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "برای تمام سوالات در این پنل اعمال می شود. اگر می خواهید این تنظیم را لغو کنید، قوانین تراز عنوان را برای سوالات فردی تعریف کنید. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "عرض ثابتی را برای عناوین سؤال زمانی تنظیم می کند که در سمت چپ کادرهای سؤال آنها تراز شوند. مقادیر CSS (px، ٪، in، pt و غیره) را می پذیرد.",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "محل یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم میکند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "مکان یک پیام خطا را در رابطه با تمام سوالات درون پانل تنظیم می کند. گزینه \"Inherit\" شامل تنظیمات سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی است.",
      // "Repositions the panel to the end of a selected page."
      page: "پانل را به انتهای صفحه انتخاب شده تغییر می دهد.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "فاصله یا حاشیه بین محتوای پانل و حاشیه سمت چپ کادر پانل اضافه می کند.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "عدم انتخاب برای نمایش پانل در یک خط با سوال قبلی یا پانل. تنظیمات اعمال نمی شود اگر پانل اولین عنصر در فرم شما باشد.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "را انتخاب کنید از: \"گسترش یافته\" - پانل به طور کامل نمایش داده می شود و می تواند سقوط کند؛ \"سقوط\" - پانل تنها عنوان و توضیحات را نمایش می دهد و می تواند گسترش یابد. \"Locked\" - پانل به طور کامل نمایش داده می شود و نمی تواند سقوط کند.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "عرض پانل را متناسب با سایر عناصر بررسی در همان خط تنظیم می کند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "قالب را برای عناوین پانل پویا تایپ کنید. از {panelIndex} برای موقعیت عمومی پانل و {visiblePanelIndex} برای سفارش ان در میان پانل های قابل مشاهده استفاده کنید. این نگهدارنده ها را در الگو قرار دهید تا شماره گذاری خودکار اضافه شود.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "در قالبی برای عناوین زبانه تایپ کنید. از {panelIndex} برای موقعیت عمومی پانل و {visiblePanelIndex} برای سفارش ان در میان پانل های قابل مشاهده استفاده کنید. این نگهدارنده ها را در الگو قرار دهید تا شماره گذاری خودکار اضافه شود.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "یک متن جایگزین برای عناوین برگه که زمانی اعمال می شود که الگوی عنوان برگه ارزش معنی داری تولید نمی کند.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "این تنظیم به شما اجازه می دهد تا دید پانل های فردی را در پانل پویا کنترل کنید. از نگهدارنده '{panel}' برای ارجاع به پنل فعلی در عبارت خود استفاده کنید.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "این تنظیم به طور خودکار توسط تمام سوالات موجود در این پنل به ارث برده می شود. اگر می خواهید این تنظیم را لغو کنید، قوانین تراز عنوان را برای سوالات فردی تعریف کنید. گزینه \"Inherit\" به طور پیش فرض تنظیم سطح صفحه (در صورت تنظیم) یا سطح نظرسنجی (\"بالا\" را اعمال می کند).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "گزینه \"Inherit\" سطح صفحه (در صورت تنظیم) یا تنظیم سطح نظرسنجی (\"زیر عنوان پانل\" به طور پیش فرض) اعمال می شود.",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "موقعیت یک پانل تازه اضافه شده را تعریف می کند. به طور پیش فرض، پانل های جدید به پایان اضافه می شوند. \"Next\" را انتخاب کنید تا یک پانل جدید پس از پانل فعلی وارد شود.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "پاسخ های آخرین ورودی را تکراری می کند و آنها را به ورودی اضافه شده بعدی اختصاص می دهد.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "مرجع یک نام سوال نیاز به یک کاربر برای ارائه یک پاسخ منحصر به فرد برای این سوال در هر پانل.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "قبل از حذف یک ورودی، یک اعلان تأیید را فعال می کند."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "قبل از حذف ردیف، یک اعلان تأیید را فعال می کند.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "هنگامی که یک ردیف جدید به ماتریس اضافه می شود، به طور خودکار بخش جزئیات را گسترش می دهد."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "پاسخ ها را از اخرین ردیف تکرار می کند و انها را به ردیف دینامیک بعدی اضافه می کند.",
    // "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "این تنظیم به شما اجازه می دهد تا یک مقدار پاسخ پیش فرض را بر اساس یک عبارت اختصاص دهید. این عبارت می تواند شامل محاسبات اساسی - \"{q1_id} + {q2_id}'، عبارات بولی مانند \"{age} > 60\" و توابع: \"iif()\"، \"today()\"، \"age()\"، \"min()\"، \"max()\"، \"avg()\" و غیره باشد. مقدار تعیین شده توسط این عبارت به عنوان مقدار پیش فرض اولیه عمل می کند که می تواند توسط ورودی دستی پاسخ دهنده لغو شود.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که تعیین می کند چه زمانی ورودی پاسخ دهنده به مقدار بر اساس \"بیان مقدار پیش فرض\" یا \"تنظیم مقدار بیان\" یا \"پاسخ پیش فرض\" مقدار (اگر هر کدام تنظیم شده است) تنظیم مجدد شود.",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که تعیین می کند چه زمانی \"Set value expression\" را اجرا کنید و به صورت پویا مقدار حاصل را به عنوان یک پاسخ اختصاص دهید.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "یک عبارت را مشخص کنید که مقدار تعیین شده را هنگامی که شرایط در قانون \"Set value if\" براورده می شود، تعریف می کند. این عبارت می تواند شامل محاسبات اساسی - \"{q1_id} + {q2_id}'، عبارات بولی مانند \"{age} > 60\" و توابع: \"iif()\"، \"today()\"، \"age()\"، \"min()\"، \"max()\"، \"avg()\" و غیره باشد. مقدار تعیین شده توسط این عبارت می تواند توسط ورودی دستی پاسخ دهنده لغو شود.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator به شما امکان می دهد عرض درون خطی عناصر فرم را به صورت دستی تنظیم کنید تا طرح بندی را کنترل کنید. اگر این نتیجه دلخواه را به همراه نداشت، می توانید طرح بندی شبکه را فعال کنید، که با استفاده از یک سیستم مبتنی بر ستون عناصر را تشکیل می دهد. برای پیکربندی ستون های طرح بندی، یک صفحه یا پانل را انتخاب کنید و از جدول «تنظیمات سوال» → «ستون های شبکه» استفاده کنید. برای تنظیم تعداد ستون های یک سوال، آن را انتخاب کنید و مقدار مورد نظر را در قسمت \"Layout\" → \"Column span\" تنظیم کنید.",
    question: {
      // "A question ID that is not visible to respondents."
      name: "یک شناسه سوال که برای پاسخ دهندگان قابل مشاهده نیست.",
      // "Type a question subtitle."
      description: "یک سوال زیر نویس تایپ کنید.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که دید سوال را تعیین می کند.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای سوال غیرفعال می کند.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع پیشرفت یا تسلیم نظرسنجی می شود مگر اینکه سوال پاسخی دریافت کند.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "عدم انتخاب برای نمایش سوال در یک خط با سوال قبلی یا پانل. تنظیمات اعمال نمی شود اگر سوال اولین عنصر در فرم شما باشد.",
      // "Repositions the question to the end of a selected page."
      page: "سؤال را به انتهای صفحه انتخاب شده تغییر می دهد.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "را انتخاب کنید از: \"گسترش یافته\" - جعبه سوال به طور کامل نمایش داده می شود و می تواند سقوط کند؛ \"سقوط\" - جعبه سوال تنها عنوان و توضیحات را نمایش می دهد و می تواند گسترش یابد. \"Locked\" - جعبه سوال به طور کامل نمایش داده می شود و نمی تواند سقوط کند.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "قوانین هم ترازی عنوان تعریف شده در یک پانل، صفحه یا سطح نظرسنجی را لغو می کند. گزینه \"Inherit\" تنظیمات سطح بالاتر (در صورت تنظیم) یا تنظیمات سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند.",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "گزینه \"به ارث بردن\" تنظیم سطح نظرسنجی (\"تحت عنوان سوال\" به طور پیش فرض) اعمال می شود.",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "مکان یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم می کند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند.",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "فضای یا حاشیه بین محتوای سوال و مرز سمت چپ جعبه سوال اضافه می کند.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "عرض سوال را متناسب با سایر عناصر نظرسنجی در همان خط تنظیم می کند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "انتخاب از: \"در تمرکز از دست رفته\" - مقدار به روز شده است زمانی که فیلد ورودی تمرکز خود را از دست می دهد؛ \"در هنگام تایپ\" - مقدار در زمان واقعی به روز می شود، زیرا کاربران تایپ می کنند. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"در تمرکز از دست رفته\" به طور پیش فرض) اعمال می شود.",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "شما می توانید از هر سرویس وب به عنوان منبع داده برای سوالات چند گزینه ای استفاده کنید. برای پر کردن مقادیر انتخاب، URL سرویس ارائه دهنده داده ها را وارد کنید.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "یک عملیات مقایسه ای که برای فیلتر کردن لیست کشویی استفاده می شود.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "متون طولانی در گزینه های انتخاب به طور خودکار شکستن خط را ایجاد می کنند تا در منوی کشویی قرار بگیرند. اگر می خواهید متن ها کلیپ شوند، انتخاب را لغو کنید.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "مشخص می کند که این سوال چند ستون در طرح بندی شبکه قرار دارد."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "از نماد عصای جادویی برای تعیین زمان معتبر بودن مقدار سوال استفاده کنید."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "عرض ناحیه امضای نمایش داده شده و تصویر حاصل را تنظیم می کند.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "ارتفاع ناحیه امضای نمایش داده شده و تصویر حاصل را تنظیم میکند.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "اگر می خواهید منطقه امضا برای پر کردن تمام فضای موجود در جعبه سوال در حالی که حفظ پیش فرض 3: 2 نسبت ابعاد را انتخاب کنید. هنگامی که عرض سفارشی و مقادیر ارتفاع تنظیم می شود، تنظیم نسبت ابعاد این ابعاد را حفظ می کند."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "ارتفاع نمایش تصاویر آپلود شده در پیش نمایش و ارتفاع واقعی تصاویر گرفته شده با دوربین را مشخص می کند. در حالت آپلود تک فایل، ارتفاع صفحه نمایش توسط ناحیه پیش نمایش محدود می شود. در حالت آپلود چند فایل، توسط ناحیه تصویر کوچک محدود می شود.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "عرض نمایش تصاویر آپلود شده در پیش نمایش و عرض واقعی تصاویر گرفته شده با دوربین را مشخص می کند. در حالت آپلود تک فایل، عرض نمایشگر توسط ناحیه پیش نمایش محدود می شود. در حالت آپلود چند فایل، توسط ناحیه تصویر کوچک محدود می شود.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "در صورت امکان، پیش نمایش تصاویر کوچک را برای فایل های آپلود شده نمایش می دهد. اگر می خواهید به جای آن نمادهای فایل را نشان دهید، انتخاب را لغو کنید."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "گزینه \"Auto\" به طور خودکار حالت مناسب برای نمایش - تصویر، ویدئو یا یوتیوب - را بر اساس URL منبع ارائه شده تعیین می کند."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "مقادیر حداقل و حداکثر ارتفاع را نادیده می گیرد.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "مقادیر حداقل و حداکثر عرض را نادیده می گیرد.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"مقدار\" به عنوان شناسه مورد استفاده در قوانین شرطی عمل می کند. \"متن\" برای پاسخ دهندگان نمایش داده می شود.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "بین \"تصویر\" و \"ویدئو\" را انتخاب کنید تا حالت محتوا را انتخاب کنید. اگر \"تصویر\" انتخاب شده است، اطمینان حاصل کنید که تمام گزینه های ارائه شده فایل های تصویری در فرمت های زیر هستند: JPEG، GIF، PNG، APNG، SVG، BMP، ICO. به طور مشابه، اگر \"ویدئو\" انتخاب شده است، اطمینان حاصل کنید که تمام گزینه ها لینک مستقیم به فایل های ویدئویی در فرمت های زیر هستند: MP4، MOV، WMV، FLV، AVI، MKV. لطفا توجه داشته باشید که پیوندهای YouTube برای گزینه های ویدیویی پشتیبانی نمی شوند."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "این تنظیم فقط اندازه فیلد ورودی را تغییر می دهد و بر عرض کادر سوال تأثیر نمی گذارد. برای محدود کردن طول ورودی پذیرفته شده، به «اعتبارسنجی» → «حداکثر محدودیت کاراکتر» بروید."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "تعداد خطوط نمایش داده شده را در قسمت ورودی تنظیم می کند. اگر ورودی خطوط بیشتری را اشغال کند، نوار اسکرول ظاهر می شود."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "اگر می خواهید از پر کردن نظرسنجی پاسخ دهندگان جلوگیری کنید، انتخاب کنید.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "مکان نوار پیشرفت را تنظیم می کند. مقدار \"خودکار\" نوار پیشرفت را در بالا یا پایین سربرگ نظرسنجی نشان می دهد."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "یک شناسه ستون که برای پاسخ دهندگان قابل مشاهده نیست.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "هنگامی که برای یک ستون فعال می شود، یک پاسخ دهنده باید یک پاسخ منحصر به فرد برای هر سوال در این ستون ارائه دهد.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "تعداد خطوط نمایش داده شده در فیلد ورودی را تنظیم می کند. اگر ورودی خطوط بیشتری را بگیرد، نوار اسکرول ظاهر می شود.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی که دید ستون را تعیین می کند استفاده کنید.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای ستون غیرفعال می کند.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "هنگامی که انتخاب می شود، یک ستون فردی برای هر گزینه انتخاب ایجاد می کند.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "گزینه های انتخاب را در یک طرح چند ستونی مرتب می کند. هنگامی که روی 0 تنظیم می شود، گزینه ها در یک خط نمایش داده می شوند. هنگامی که روی -1 تنظیم می شود، مقدار واقعی از ویژگی \"تعداد ستون های تو در تو\" ماتریس والد به ارث می رسد."
    },
    slider: {
      // "The lowest number that users can select."
      min: "کمترین عددی که کاربران می توانند انتخاب کنند.",
      // "The highest number that users can select."
      max: "بالاترین عددی که کاربران می توانند انتخاب کنند.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "فاصله بین مقادیر مقیاس قابل انتخاب. به عنوان مثال، یک مرحله 5 به کاربران اجازه می دهد 0، 5، 10 و غیره را انتخاب کنند.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "حداقل فاصله بین انگشت شست لغزنده که کاربر می تواند تنظیم کند.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "حداکثر فاصله بین انگشت شست لغزنده که کاربر می تواند تنظیم کند.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "مشخص می کند که چند برچسب مقیاس برای تولید ایجاد شود. مقدار -1 به این معنی است که عدد به طور خودکار بر اساس مقدار حداقل و مقدار حداکثر محاسبه می شود.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "از «{0}» به عنوان مکان نگهدارنده برای مقدار واقعی استفاده کنید.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "به شما امکان می دهد برچسب های سفارشی را در مقادیر خاص تعریف کنید و به صورت اختیاری متن مربوطه را به آنها اختصاص دهید (به عنوان مثال، 0 = \"ضعیف\"، 100 = \"عالی\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "از «{0}» به عنوان مکان نگهدارنده برای مقدار واقعی استفاده کنید.",
      // "Allows users to move one thumb past the other."
      allowSwap: "به کاربران اجازه می دهد تا یک انگشت شست را از انگشت دیگر عبور دهند.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "دکمه ای را نمایش می دهد که مقدار نوار لغزنده انتخاب شده را پاک می کند و آن را روی undefined تنظیم می کند.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "حداقل مقدار نوار لغزنده را به صورت پویا با استفاده از یک عبارت تعریف می کند. از محاسبات اولیه (به عنوان مثال، '{q1_id} + {q2_id}')، منطق بولین (به عنوان مثال، '{age} > 60') و توابعی مانند 'iif()'، 'today()'، 'age()'، 'min()'، 'max()'، 'avg()' و موارد دیگر پشتیبانی م�� کند.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "حداکثر مقدا�� نوار لغزنده را به صورت پویا با استفاده از یک عبارت تعریف می کند. از محاسبات اولیه (به عنوان مثال، '{q1_id} + {q2_id}')، منطق بولین (به عنوان مثال، '{age} > 60') و توابعی مانند 'iif()'، 'today()'، 'age()'، 'min()'، 'max()'، 'avg()' و موارد دیگر پشتیبانی می کند."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "این انتخاب را منحصر به فرد می کند. هنگامی که توسط یک کاربر انتخاب می شود، به طور خودکار همه گزینه های دیگر در سوال را لغو انتخاب می کند.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "چک باکس های موجود در این ستون را انحصاری می کند. هنگامی که یک کاربر انتخاب می کند، به طور خودکار تمام کادرهای دیگر را در همان ردیف لغو انتخاب می کند."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "انتخاب کنید که آیا حروف بزرگ و کوچک در عبارت منظم باید معادل در نظر گرفته شوند.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "را انتخاب کنید از: \"استاتیک\" - مجموعه عرض ثابت؛ \"پاسخگو\" - باعث می شود نظرسنجی عرض کامل صفحه نمایش را اشغال کند؛ \"Auto\" - هر یک از این دو را بسته به نوع سوال مورد استفاده اعمال می کند.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "یک مقدار کوکی منحصر به فرد برای نظرسنجی خود اختصاص دهید. کوکی پس از اتمام نظرسنجی در مرورگر پاسخ دهنده تنظیم می شود تا از ارسال نظرسنجی های تکراری جلوگیری شود.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "چسباندن یک پیوند تصویر (بدون محدودیت اندازه) یا روی نماد پوشه کلیک کنید تا یک فایل را از رایانه خود مرور کنید (تا 64KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "عرض لوگو را در واحدهای CSS تنظیم می کند (px، ٪، in، pt و غیره).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "ارتفاع لوگو را در واحدهای CSS تنظیم می کند (px، ٪، in، pt و غیره).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "انتخاب از: \"هیچ\" - تصویر اندازه اصلی خود را حفظ می کند؛ \"شامل\" - تصویر تغییر اندازه به جا در حالی که حفظ نسبت ابعاد ان؛ \"Cover\" - تصویر کل جعبه را پر می کند در حالی که نسبت ابعاد ان را حفظ می کند. \"Fill\" - تصویر برای پر کردن جعبه بدون حفظ نسبت ابعاد ان کشیده می شود.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "انتخاب کنید که آیا می خواهید نظرسنجی به طور خودکار به صفحه بعدی پیش برود پس از اینکه پاسخ دهنده به همه سؤالات موجود در صفحه فعلی پاسخ داد. اگر آخرین سؤال در صفحه باز باشد یا اجازه پاسخ های متعدد را بدهد، این ویژگی اعمال نمی شود.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "انتخاب کنید که ایا می خواهید نظرسنجی به طور خودکار پس از پاسخ دادن به تمام سوالات پاسخ دهد.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "قابلیت مشاهده دکمه های پیمایش را در یک صفحه تنظیم می کند.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "مکان دکمه های پیمایش را در یک صفحه تنظیم می کند.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "صفحه پیش نمایش را فقط با تمام سوالات یا پاسخ داده شده فعال کنید.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "به تمام سوالات در نظرسنجی اعمال می شود. این تنظیم را می توان با قوانین هم ترازی عنوان در سطوح پایین تر لغو کرد: پانل، صفحه یا سوال. یک تنظیم سطح پایین تر، کسانی را که در سطح بالاتری قرار دارند، نادیده می گیرد.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "یک نماد یا دنباله ای از نمادها نشان می دهد که یک پاسخ مورد نیاز است.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "یک شماره یا حرف را وارد کنید که می خواهید با ان شروع به شماره گیری کنید.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "مکان یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم می کند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "انتخاب کنید که ایا می خواهید اولین فیلد ورودی در هر صفحه اماده برای ورود متن باشد.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "ترتیب اصلی سوالات را نگه می دارد یا انها را تصادفی می کند. اثر این تنظیم فقط در تب Preview قابل مشاهده است.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "فقط برای سوالات ورودی متن.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "فقط برای نظرات سوال.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "تعداد خطوط نمایش داده شده در قسمت های متنی را برای نظرات سؤال تنظیم می کند. اگر ورودی خطوط بیشتر�� را اشغال کند، نوار اسکرول ظاهر می شود.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "انتخاب کنید اگر شما می خواهید نظرات سوال و سوالات متن بلند به رشد خودکار در ارتفاع بر اساس طول متن وارد شده است.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "برای نظرات سوال و سوالات طولانی متن تنها.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "متغیرهای سفارشی به عنوان متغیرهای متوسط یا کمکی مورد استفاده در محاسبات فرم عمل می کنند. انها ورودی های پاسخ دهنده را به عنوان مقادیر منبع می گیرند. هر متغیر سفارشی دارای یک نام منحصر به فرد و یک عبارت است که بر اساس ان است.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "اگر میخواهید مقدار محاسبهشده عبارت همراه با نتایج نظرسنجی ذخیره شود ، برگزینید.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Trigger یک رویداد یا شرایطی است که بر اساس یک عبارت است. هنگامی که عبارت به \"درست\" ارزیابی می شود، یک ماشه یک عمل را تنظیم می کند. چنین اقدامی می تواند به صورت اختیاری یک سوال هدف داشته باشد که بر ان تاثیر می گذارد.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "انتخاب کنید که ایا برای پاک کردن ارزش ها برای سوالات پنهان شده توسط منطق شرطی و زمانی که ان را انجام دهید.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "انتخاب از: \"در تمرکز از دست رفته\" - مقدار به روز شده است زمانی که فیلد ورودی تمرکز خود را از دست می دهد؛ \"در هنگام تایپ\" - مقدار در زمان واقعی به روز می شود، زیرا کاربران تایپ می کنند.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "مقدار چپ به عنوان یک شناسه ستون مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب به پاسخ دهندگان نمایش داده می شود.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "مقدار سمت چپ به عنوان یک شناسه ردیف مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب به پاسخ دهندگان نمایش داده می شود.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "فقط در صورتی قابل مشاهده است که حداقل یک ستون مقادیر کل تنظیم شده با \"روش تجمیع\" یا \"عبارت مقدار کل\" را نشان دهد.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "محل یک پیام خطا را در رابطه با یک سلول با ورودی نامعتبر تنظیم می کند. گزینه \"Inherit\" تنظیمات را از ویژگی \"Error message alignment\" اعمال می کند.",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "مکان پیام های خطا را برای سؤالات تودرتو در بخش های جزئیات تنظیم می کند. گزینه \"وراثت\" تنظیمات را از ویژگی \"تراز پیام خطا\" اعمال می کند.",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "هنگامی که ویژگی \"جلوگیری از پاسخ های تکراری\" فعال می شود، پاسخ دهنده ای که سعی در ارسال یک ورودی تکراری دارد، پیام خطای زیر را دریافت می کند.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "به شما اجازه می دهد تا مقادیر کل را بر اساس یک عبارت محاسبه کنید. این عبارت می تواند شامل محاسبات اساسی ('{q1_id} + {q2_id}')، عبارات بولی ('{age} > 60') و توابع ('iif()'، 'today()'، 'age()'، 'min()'، 'max()'، 'avg()'، و غیره باشد.",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "اگر ستون مشخص شده حاوی مقادیر یکسان باشد، نظرسنجی خطای \"مقدار کلیدی غیر منحصر به فرد\" را پرتاب می کند.",
    // "Type a subtitle."
    description: "یک زیرنویس تایپ کنید.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "یک زبان را برای شروع ایجاد نظرسنجی خود انتخاب کنید. برای اضافه کردن ترجمه، به یک زبان جدید بروید و متن اصلی را در اینجا یا در زبانه ترجمه ترجمه ترجمه کنید.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "مکان یک بخش جزئیات را در رابطه با یک ردیف تنظیم می کند. انتخاب از: \"هیچ\" - هیچ گسترش اضافه شده است؛ \"زیر ردیف\" - گسترش ردیف در زیر هر ردیف ماتریس قرار می گیرد؛ \"زیر ردیف، فقط یک ردیف را نمایش می دهد\" - یک گسترش فقط در زیر یک ردیف نمایش داده می شود، گسترش ردیف باقی مانده سقوط می کند.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "انتخاب از: \"هیچ\" - تصویر اندازه اصلی خود را حفظ می کند؛ \"شامل\" - تصویر تغییر اندازه به جا در حالی که حفظ نسبت ابعاد ان؛ \"Cover\" - تصویر کل جعبه را پر می کند در حالی که نسبت ابعاد ان را حفظ می کند. \"Fill\" - تصویر برای پر کردن جعبه بدون حفظ نسبت ابعاد ان کشیده می شود.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "به تدریج ارتفاع میدان ورودی را افزایش می دهد زیرا داده ها وارد می شوند. تنظیم \"ارتفاع میدان ورودی (در خطوط)\" را لغو می کند.",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "گزینه \"وراثت\" یک تنظیم در سطح نظرسنجی را اعمال می کند (به طور پیش فرض \"Enabled\").",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "یک فاصله زمانی در ثانیه که پس از آن نظرسنجی به طور خودکار به صفحه \"متشکرم\" پیش می رود. وقتی روی 0 تنظیم می شود، زمان صرف شده برای نظرسنجی را می شمارد.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "یک فاصله زمانی در ثانیه که پس از آن نظرسنجی به طور خودکار به صفحه بعدی پیش می رود. دکمه پیمایش \"قبلی\" را پنهان می کند. وقتی روی 0 تنظیم شود، زمان صرف شده در صفحه فعلی را می شمارد.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "این گزینه را فعال کنید تا زمانی که کاربر روی یک فیلد ورودی خالی تمرکز می کند و سپس بدون ایجاد هیچ تغییری آن را ترک می کند، اعتبارسنجی را فعال کنید.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "شناسه صفحه ای که برای پاسخ دهندگان قابل مشاهده نیست.",
      // "Type a page subtitle."
      description: "زیرنویس صفحه را تایپ کنید.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "عنوانی که روی دکمه پیمایش در نوار پیشرفت یا فهرست مطالب (TOC) نمایش داده می شود. اگر این فیلد را خالی بگذارید، دکمه پیمایش از عنوان صفحه یا نام صفحه استفاده می کند. برای فعال کردن نوار پیشرفت یا TOC، به \"نظرسنجی\" → \"ناوبری\" بروید.",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "یک فاصله زمانی در ثانیه که پس از ان نظرسنجی به طور خودکار به صفحه بعدی پیش می رود.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که دید صفحه را تعیین می کند.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که حالت فقط خواندنی را برای صفحه غیرفعال می کند.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که مانع از ارسال نظرسنجی می شود مگر اینکه حداقل یک سوال تو در تو پاسخ داشته باشد.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "به تمام سوالات موجود در این صفحه اعمال می شود. اگر می خواهید این تنظیمات را لغو کنید، قوانین تراز عنوان را برای سوالات یا پانل های فردی تعریف کنید. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند.",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "عرض ثابت را برای عناوین سؤال تنظیم می کند وقتی که انها در سمت چپ جعبه های سوال خود قرار دارند. مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "مکان یک پیام خطا را در رابطه با سؤال با ورودی نامعتبر تنظیم می کند. انتخاب بین: \"بالا\" - یک متن خطا در بالای جعبه سوال قرار می گیرد؛ \"پایین\" - یک متن خطا در پایین جعبه سوال قرار می گیرد. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"بالا\" به طور پیش فرض) را اعمال می کند.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "ترتیب اصلی سوالات را نگه می دارد یا انها را تصادفی می کند. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"اصلی\" به طور پیش فرض) را اعمال می کند. اثر این تنظیم فقط در تب Preview قابل مشاهده است.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "قابلیت مشاهده دکمههای پیمایش را روی صفحه تنظیم میکند. گزینه \"به ارث بردن\" تنظیم سطح نظرسنجی را اعمال می کند که به طور پیش فرض به \"قابل مشاهده\" است.",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "این جدول به شما امکان می دهد هر ستون شبکه را در صفحه پیکربندی کنید. به طور خودکار درصد عرض هر ستون را بر اساس حداکثر تعداد عناصر در یک ردیف تنظیم می کند. برای سفارشی کردن طرح بندی شبکه، این مقادیر را به صورت دستی تنظیم کنید و عرض عنوان را برای همه سوالات در هر ستون تعریف کنید."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "مکان یک تایمر را در یک صفحه تنظیم می کند.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "انتخاب از: \"قفل شده\" - کاربران نمی توانند پانل ها را گسترش یا سقوط دهند؛ \"سقوط همه\" - تمام پانل ها در یک حالت فروپاشی شروع می شوند؛ \"گسترش همه\" - تمام پانل ها در یک حالت گسترش یافته شروع می شوند؛ \"اولین گسترش\" - تنها پانل اول در ابتدا گسترش یافته است.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "یک نام خصوصیت مشترک را درون ارایۀ اشیایی که حاوی نشانیهای اینترنتی پرونده تصویر یا ویدئویی است که میخواهید در فهرست انتخاب نمایش داده شود، وارد کنید.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "مقدار سمت چپ به عنوان یک شناسه مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب برای پاسخ دهندگان نمایش داده می شود.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "یک عنوان کاربر پسند برای نمایش تایپ کنید.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "اطمینان حاصل می کند که کاربران تا زمانی که فایل ها اپلود نشده اند، نظرسنجی را تکمیل نخواهند کرد.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "مقادیر CSS را می پذیرد (px، ٪، in، pt و غیره).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "شناسه join یک کلید سفارشی است که می توانید به چندین سؤال اختصاص دهید تا آن ها را به هم پیوند دهید و مقادیر آن ها را همگام سازی کنید. این مقادیر در یک آرایه یا شی ادغام می شوند و با استفاده از کلید به عنوان نام ویژگی در نتایج نظرسنجی ذخیره می شوند.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "مقداری که در سؤالات HTML و در عناوین پویا و توضیحات عناصر نظرسنجی زمانی که مقدار سوال خالی است، نمایش داده می شود.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "در انواع سوالات تک و چند انتخاب، هر گزینه انتخاب دارای یک شناسه و مقدار نمایش است. هنگامی که انتخاب می شود، این تنظیم یک مقدار نمایش را به جای یک مقدار ID در سوالات HTML و عناوین پویا و توصیف عناصر بررسی نشان می دهد.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "انتخاب کنید که ایا برای پاک کردن یا نه ارزش سوال پنهان شده توسط منطق شرطی و زمانی که به ان را انجام دهد. گزینه \"ارث\" تنظیم سطح نظرسنجی (\"پس از اتمام نظرسنجی\" به طور پیش فرض) اعمال می شود.",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "انتخاب از: \"همه\" - کپی تمام گزینه های انتخاب از سوال انتخاب شده؛ \"انتخاب شده\" - به صورت پویا فقط گزینه های انتخاب شده را کپی می کند؛ \"Unselected\" - به صورت پویا تنها گزینه های انتخاب نشده را کپی می کند. گزینه های \"None\" و \"Other\" در صورت فعال شدن در سؤال منبع به طور پیش فرض کپی می شوند.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "در انواع سوالات تک و چند گزینه، هر گزینه انتخابی دارای یک شناسه و مقدار نمایشی است. این تنظیم مشخص می کند که کدام ستون ماتریس یا سوال پانل باید شناسه ها را ارائه دهد.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "در انواع سوالات تک و چند گزینه، هر گزینه انتخابی دارای یک شناسه و مقدار نمایشی است. این تنظیم مشخص می کند که کدام ستون ماتریس یا سوال پانل باید متون نمایش داده شده را ارائه دهد.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "انتخاب کنید تا به پاسخ دهندگان اجازه دهید انتخاب های خود را اضافه کنند اگر گزینه مورد نظر در منوی کشویی موجود نیست. گزینه های سفارشی فقط به طور موقت برای مدت زمان جلسه مرورگر فعلی ذخیره می شوند.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "هنگامی که انتخاب می شوند، کاربران می توانند ورودی های اضافی را در یک جعبه نظر جداگانه قرار دهند.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "نمایش هر گزینه انتخاب خاص (\"هیچ\"، \"دیگر\"، \"انتخاب همه\") در یک خط جدید، حتی در هنگام استفاده از یک طرح چند ستون.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "مشخص کردن محل در مجموعه داده های سرویس که در ان ارایه هدف از اشیاء واقع شده است. ترک خالی اگر URL در حال حاضر به ارایه اشاره می کند.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "یک نام ویژگی یکنواخت را در ارایه اشیایی که حاوی مقادیری است که می خواهید در لیست انتخاب نمایش داده شود وارد کنید.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "انتخاب کنید تا سرویس بتواند یک پاسخ یا ارایه خالی را بازگرداند.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "از نماد چوب جادویی برای تنظیم یک قانون شرطی استفاده کنید که دید همه گزینه های انتخابی را تعیین می کند.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "مقدار سمت چپ به عنوان یک شناسه مورد استفاده در قوانین شرطی عمل می کند، مقدار مناسب برای پاسخ دهندگان نمایش داده می شود.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" بین حالت های \"Buttons\" و \"Dropdown\" بر اساس عرض موجود انتخاب می شود. هنگامی که عرض برای نمایش دکمه ها کافی نیست، سوال یک کشویی را نشان می دهد."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "اجازه می دهد تا شما را به اتصال سوالات است که تولید نتایج در فرمت های مختلف. هنگامی که چنین سوالاتی با استفاده از یک شناسه پیوستن به هم مرتبط می شوند، این ویژگی مشترک مقادیر سوال انتخاب شده را ذخیره می کند.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "انتخاب کنید که ایا می خواهید محتویات منوی کشویی را به روز کنید تا با پرسوجوی جستجویی که کاربر در قسمت ورودی تایپ می کند مطابقت داشته باشد.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "ارزش برای صرفه جویی در نتایج نظرسنجی زمانی که پاسخ دهندگان پاسخ مثبت می دهند.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "ارزش برای صرفه جویی در نتایج نظرسنجی زمانی که پاسخ دهندگان پاسخ منفی می دهند.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "توصیه نمی شود که این گزینه را غیرفعال کنید زیرا تصویر پیش نمایش را لغو می کند و درک اینکه آیا فایل ها آپلود شده اند یا خیر را برای کاربر دشوار می کند.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "یک اعلان برای تایید حذف پرونده ایجاد می کند.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "فقط گزینه های انتخاب شده را رتبه بندی کنید. کاربران موارد انتخاب شده را از لیست انتخاب می کنند تا انها را در منطقه رتبه بندی سفارش دهند.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "لیستی از انتخاب هایی را وارد کنید که در طول ورودی به مخاطب پیشنهاد می شود.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "تنظیم فقط زمینه های ورودی را تغییر می دهد و بر عرض جعبه سوال تاثیر نمی گذارد.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "عرض ثابت را برای همه برچسب های مورد تنظیم می کند. مقادیر CSS (px، ٪، in، pt و غیره) را می پذیرد.",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "نحوه تراز کردن مقدار ورودی در فیلد را انتخاب کنید. تنظیم پیش فرض \"خودکار\" مقدار ورودی را در صورت اعمال پوشش ارز یا عددی به سمت راست و در صورت عدم اعمال به سمت چپ تراز می کند.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "به عنوان یک جایگزین زمانی که تصویر نمی تواند بر روی دستگاه کاربر و برای اهداف دسترسی نمایش داده شود.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "رنگ ایموجی انتخاب شده را هنگامی که نوع نماد رتبه بندی روی \"Smileys\" تنظیم شده است، تعریف می کند. انتخاب بین: \"پیش فرض\" - ایموجی انتخاب شده در رنگ پیش فرض بررسی ظاهر می شود؛ \"Scale\" - ایموجی انتخاب شده رنگ را از مقیاس رتبه بندی به ارث می برد.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "یک شناسه بیان که برای پاسخ دهندگان قابل مشاهده نیست.",
      // "Type an expression subtitle."
      description: "زیر نویس عبارت را تایپ کنید.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "یک عبارت می تواند شامل محاسبات اساسی ('{q1_id} + {q2_id}')، شرایط ('{age} > 60') و توابع ('iif()'، 'today()'، 'age()'، 'min()'، 'max()'، 'avg()'' و غیره باشد."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "انتخاب کنید برای ذخیره \"دیگر\" مقدار گزینه به عنوان یک ملک جداگانه در نتایج نظرسنجی.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "از {0} به عنوان نگهدارنده برای ارزش واقعی استفاده کنید.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "برای اطلاعات بیشتر به [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description مراجعه کنید.",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "گزینه های انتخاب را در یک طرح چند ستونی مرتب می کند. هنگامی که روی 0 تنظیم می شود، گزینه ها در یک خط نمایش داده می شوند. فقط برای ستون هایی اعمال می شود که \"نوع ورودی سلولی\" روی گروه دکمه های رادیویی یا کادرهای تأیید تنظیم شده است.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "نوع داده ای را که مرورگر کاربر می تواند بازیابی کند انتخاب کنید. این داده ها یا از مقادیر گذشته وارد شده توسط کاربر یا از مقادیر از پیش پیکربندی شده در صورت ذخیره توسط کاربر برای تکمیل خودکار تهیه می شوند.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "اعمال می شود زمانی که \"نوع منبع\" است \"فایل های محلی\" و یا زمانی که دوربین در دسترس نیست",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "هنگامی که \"نوع منبع\" \"دوربین\" است، اعمال می شود.",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "زمانی اعمال می شود که \"نوع منبع\" \"فایل های محلی یا دوربین\" باشد.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "گزینه های انتخاب را در یک طرح چند ستونی مرتب می کند. هنگامی که روی 0 تنظیم می شود، گزینه ها در یک خط نمایش داده می شوند.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "انتخاب کنید که ایا می خواهید مقدار سؤال را با یک ماسک کاربردی در نتایج نظرسنجی ذخیره کنید."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "الگو می تواند شامل literals رشته و متغیرهای زیر باشد: '9' - برای یک رقم؛ 'a' - برای یک حرف بزرگ یا کوچک؛ \"#\" - برای یک رقم یا یک حرف بزرگ یا کوچک. استفاده از backslash '\\' برای فرار از یک شخصیت."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "این الگو می تواند شامل کاراکترهای جداکننده و متغیرهای زیر باشد: <br>'m' - شماره ماه.<br>'mm' - شماره ماه، با صفر پیشرو برای مقادیر تک رقمی. <br>\"D\" - روز ماه. <br>'dd' - روز ماه، با صفر پیشرو برای مقادیر تک رقمی. <br>'yy' - دو رقم اخر سال. <br>'yyyyy' - سال چهار رقمی. <br>\"H\" - ساعت در فرمت 24 ساعته. <br>'HH' - ساعت در فرمت 24 ساعته، با صفر پیشرو برای مقادیر تک رقمی. <br>'h' - ساعت در فرمت 12 ساعته. <br>'hh' - ساعت در فرمت 12 ساعته، با صفر پیشرو برای مقادیر تک رقمی. <br>\"MM\" - دقیقه. <br>SS ثانیه <br>\"TT\" - دوره ساعت 12 ساعته در حالت بزرگ (AM / PM). <br>'tt' - دوره ساعت 12 ساعته در حروف کوچک (am / pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "نمادی که برای جدا کردن قسمت کسری از قسمت صحیح یک عدد نمایش داده شده استفاده می شود.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "نمادی که برای جدا کردن ارقام یک عدد بزرگ به گروه های سه نفره استفاده می شود.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "محدود کردن تعداد ارقام برای حفظ پس از نقطه اعشار برای یک عدد نمایش داده شده."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "یک یا چند نماد قبل از مقدار نمایش داده می شود.",
      // "One or several symbols to be displayed after the value."
      suffix: "یک یا چند نماد بعد از مقدار نمایش داده می شود."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "این تنظیم فقط برای سؤالات خارج از پانل اعمال می شود.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "یک رنگ تکمیلی تنظیم می کند که عناصر کلیدی نظرسنجی را برجسته می کند.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "شفافیت پانل ها و جعبه های سوال را نسبت به پیشینه نظرسنجی تنظیم می کند.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "شفافیت عناصر ورودی را نسبت به پیشینه نظرسنجی تنظیم می کند.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "شعاع گوشه را برای همه عناصر مستطیلی تنظیم می کند. اگر می خواهید مقادیر شعاع گوشه جداگانه را برای عناصر ورودی یا پانل ها و جعبه های سؤال تنظیم کنید، حالت پیشرفته را فعال کنید.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "رنگ پس زمینه اصلی نظرسنجی را تنظیم می کند."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "گزینه \"همان کانتینر\" به طور خودکار عرض ناحیه محتوای هدر را تنظیم می کند تا در عنصر HTML که نظرسنجی در آن قرار می گیرد قرار گیرد.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "عرض ناحیه سرصفحه که حاوی عنوان و توضیحات نظرسنجی است که بر حسب پیکسل اندازه گیری می شود.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "هنگامی که فعال باشد، بالای نظرسنجی پایین هدر را همپوشانی می کند.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "هنگامی که روی 0 تنظیم می شود، ارتفاع به طور خودکار محاسبه می شود تا محتوای هدر را در خود جای دهد."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "گزینه \"همان کانتینر\" به طور خودکار عرض ناحیه نوار پیشرفت را تنظیم می کند تا در عنصر HTML که نظرسنجی در آن قرار می گیرد قرار گیرد.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "زمانی استفاده می شود که \"طرح نظرسنجی\" روی \"فیلد ورودی واحد در هر صفحه\" تنظیم شده باشد. در این چیدمان، ماتریس تقسیم می شود تا هر فیلد ورودی در یک صفحه جداگانه ظاهر شود. از مکان نگهدارنده {rowIndex} برای درج شماره گذاری خودکار، {rowTitle} یا {rowName} برای ارجاع به عنوان یا شناسه ردیف و {row.columnid} برای درج مقدار یک ستون ماتریس خاص استفاده کنید."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "عنوان",
      // "Leave it empty, if it is the same as 'Name'"
      title: "اگر خالی باشد مانند نام درج می شود"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "اجازه دادن به چند گزینش",
    // [Auto-translated] "Show image and video captions"
    showLabel: "نمایش زیرنویس تصویر و ویدیو",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "تعویض سفارش بله و خیر",
    // [Auto-translated] "Value"
    value: "ارزش",
    // [Auto-translated] "Tab alignment"
    tabAlign: "ترازبندی زبانه",
    // [Auto-translated] "File source type"
    sourceType: "نوع منبع فایل",
    // [Auto-translated] "Fit to container"
    fitToContainer: "مناسب برای ظرف",
    // [Auto-translated] "Set value expression"
    setValueExpression: "تنظیم عبارت مقدار",
    // "Description"
    description: "توضیحات", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "لوگو مناسب است",
    // [Auto-translated] "Pages"
    pages: "صفحات", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "سوالات", // Auto-generated string
    // "Triggers"
    triggers: "فعال سازی",
    // [Auto-translated] "Custom variables"
    calculatedValues: "متغیرهای سفارشی",
    // [Auto-translated] "Survey id"
    surveyId: "شناسه نظرسنجی", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "شناسه نظرسنجی", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "نظرسنجی نشان می دهد صرفه جویی در داده ها", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "هم ترازی توضیحات سوال",
    // [Auto-translated] "Progress bar type"
    progressBarType: "نوع نوار پیشرفت", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "نمایش فهرست مطالب (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "تراز TOC",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "الگوی عنوان سوال", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "حالت عرض نظرسنجی",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "نمایش اطلاعات برند", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "استفاده از مقادیر نمایش در متون پویا",
    // "Visible if"
    visibleIf: "آشکار اگر", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "عبارت مقدار پیشفرض",
    // "Required if"
    requiredIf: "اجبار اگر؟", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "بازنشانی مقدار اگر",
    // [Auto-translated] "Set value if"
    setValueIf: "تنظیم مقدار اگر",
    // "Validation rules"
    validators: "اعتبارسنج ها",
    // [Auto-translated] "Bindings"
    bindings: "پیوندها", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Render به عنوان", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "پیوست موارد اصلی", // Auto-generated string
    // "Choices"
    choices: "گزینه ها",
    // "Choices by url"
    choicesByUrl: "گزینه ها با لینک", // Auto-generated string
    // "Currency"
    currency: "ارز", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "راهنمایی سلول", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "مجموع رقم کسری بیشینه", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "مجموع حداقل رقم کسری", // Auto-generated string
    // "Columns"
    columns: "ستون ها", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "عناصر جزئیات", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "اجازه دادن به کنشهای انطباقی", // Auto-generated string
    // "Default row value"
    defaultRowValue: "مقدار پیش فرض سطر", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "گسترش خودکار جزئیات ردیف جدید",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "انتخاب بار تنبل فعال است", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "انتخاب تنبل بار اندازه صفحه", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "مؤلفه فیلد ورودی", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "مؤلفۀ مورد", // Auto-generated string
    // [Auto-translated] "Min"
    min: "دقیقه", // Auto-generated string
    // [Auto-translated] "Max"
    max: "حداکثر", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "بیان مقدار مین", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "عبارت بیشینه مقدار", // Auto-generated string
    // [Auto-translated] "Step"
    step: "گام", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "موارد برای پیشنهاد خودکار",
    // "Input field width (in characters)"
    inputSize: "ابعاد مورد",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "عرض برچسب مورد",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "تراز مقدار ورودی",
    // [Auto-translated] "Elements"
    elements: "عناصر", // Auto-generated string
    // [Auto-translated] "Content"
    content: "محتوای", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "عنوان ناوش", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "توضیحات ناوبری", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "ضربه طولانی", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "فیلد ورودی را به صورت پویا گسترش دهید",
    // [Auto-translated] "Enable resize handle"
    allowResize: "دسته تغییر اندازه را فعال کنید",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "پذیرش بازگشت کالسکه", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "حالت نمایش",
    // [Auto-translated] "Rate type"
    rateType: "نوع نرخ", // Auto-generated string
    // "Label"
    label: "برچسب", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "حالت محتوا",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "تناسب تصویر و تصویر کوچک",
    // [Auto-translated] "Alt text"
    altText: "متن دگرساز",
    // [Auto-translated] "Height"
    height: "ارتفاع", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "ارتفاع در گوشی های هوشمند",
    // [Auto-translated] "Pen color"
    penColor: "رنگ قلم", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "رنگ پسزمینه",
    // [Auto-translated] "Template elements"
    templateElements: "عناصر قالب", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "اپراتور", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "متغیر است", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "اجرای عبارت", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "نمایش عنوان", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "نام شمایل", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "اندازه شمایل", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "دقت", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "ماتریکس منطقه دسته کشیدن", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "تصویر زمینه",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "مناسبسازی تصویر پسزمینه", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "پیوست تصویر پسزمینه", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "تاری پسزمینه", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "اجازه رتبه ��ندی انتخابی",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "تراز منطقه رتبه بندی",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "متن برای نشان دادن اینکه ایا همه گزینهها انتخاب شدهاند",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "متن نگهدارنده برای منطقه رتبه بندی",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "اجازه دسترسی به دوربین", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "حالت رنگ نماد رتبه بندی",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "طرح رنگ شکلک",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "رونوشت مقدار نمایش", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "دهانه ستون",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "عرض مساحت نوار پیشرفت",
    // [Auto-translated] "Theme name"
    themeName: "نام قالب"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "حالت پیشرفته",
    // "Page"
    pageTitle: "قلم عنوان صفحه",
    // "Question box"
    questionTitle: "قلم عنوان پرسش",
    // "Input element"
    editorPanel: "عنصر ورودی",
    // [Auto-translated] "Lines"
    lines: "خطوط",
    // [Auto-translated] "Default"
    primaryDefaultColor: "پیش فرض",
    // [Auto-translated] "Hover"
    primaryDarkColor: "شناور",
    // [Auto-translated] "Selected"
    primaryLightColor: "انتخاب",
    // [Auto-translated] "Background color"
    backgroundDimColor: "رنگ پسزمینه",
    // "Corner radius"
    cornerRadius: "شعاع گوشه",
    // [Auto-translated] "Default background"
    backcolor: "پسزمینۀ پیشفرض",
    // [Auto-translated] "Hover background"
    hovercolor: "پسزمینه شناور",
    // [Auto-translated] "Border decoration"
    borderDecoration: "دکوراسیون مرزی",
    // [Auto-translated] "Font color"
    fontColor: "رنگ قلم",
    // [Auto-translated] "Background color"
    backgroundColor: "رنگ پسزمینه",
    // [Auto-translated] "Default color"
    primaryForecolor: "رنگ پیشفرض",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "رنگ غیرفعال",
    // [Auto-translated] "Font"
    font: "فونت",
    // [Auto-translated] "Darker"
    borderDefault: "تیره تر",
    // [Auto-translated] "Lighter"
    borderLight: "سبکتر",
    // [Auto-translated] "Font family"
    fontFamily: "خانواده قلم",
    // [Auto-translated] "Regular"
    fontWeightRegular: "منظم",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "سنگین",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "نیمه جسورانه",
    // [Auto-translated] "Bold"
    fontWeightBold: "جسورانه",
    // [Auto-translated] "Color"
    color: "رنگ",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "رنگ نگهدارنده",
    // [Auto-translated] "Size"
    size: "اندازه",
    // [Auto-translated] "Opacity"
    opacity: "کدورت",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "افزودن جلوهی سایه",
    // [Auto-translated] "Blur"
    boxShadowBlur: "تیرگی",
    // [Auto-translated] "Spread"
    boxShadowSpread: "گسترش",
    // [Auto-translated] "Drop"
    boxShadowDrop: "قطره",
    // [Auto-translated] "Inner"
    boxShadowInner: "درونی",
    names: {
      // [Auto-translated] "Default"
      default: "پیش فرض",
      // [Auto-translated] "Sharp"
      sharp: "تیز",
      // [Auto-translated] "Borderless"
      borderless: "مرز",
      // [Auto-translated] "Flat"
      flat: "تخت",
      // [Auto-translated] "Plain"
      plain: "ساده",
      // [Auto-translated] "Double Border"
      doubleborder: "دو لبه",
      // [Auto-translated] "Layered"
      layered: "لایه",
      // [Auto-translated] "Solid"
      solid: "جامد",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "کنتراست"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "تیل",
      // [Auto-translated] "Blue"
      blue: "آبی",
      // [Auto-translated] "Purple"
      purple: "بنفش",
      // [Auto-translated] "Orchid"
      orchid: "ارکیده",
      // [Auto-translated] "Tulip"
      tulip: "لاله",
      // [Auto-translated] "Brown"
      brown: "قهوه ای",
      // [Auto-translated] "Green"
      green: "سبز",
      // [Auto-translated] "Gray"
      gray: "خاکستری"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "زمینه سطح",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "اولیه",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "ثانویه",
    // [Auto-translated] "Surface"
    surfaceScale: "سطح",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "عناصر رابط کاربری",
    // [Auto-translated] "Font"
    fontScale: "فونت",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "خالق نظرسنجی 2020",
      // [Auto-translated] "Light"
      "default-light": "نور",
      // [Auto-translated] "Dark"
      "default-dark": "تاریک",
      // [Auto-translated] "Contrast"
      "default-contrast": "کنتراست"
    }
  }
};

setupLocale({ localeCode: "fa", strings: persianStrings });