import { setupLocale } from "survey-creator-core";

export var mmStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "တည်းဖြတ်ပါ",
    // "Watch and learn how to create surveys"
    externalHelpLink: "စစ်တမ်းများကိုဘယ်လိုဖန်တီးရမည်ကိုကြည့်ရှုပါ",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "ကျေးဇူးပြု၍ Toolbox မှမေးခွန်းတစ်ခုကိုဤနေရာတွင်ချပါ။",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "စစ်တမ်း၏လည်ပတ်မှုကိုစိတ်ကြိုက်ပြုလုပ်ရန်စည်းမျဉ်းတစ်ခုဖန်တီးပါ။",
    // "Copy"
    copy: "ကူးယူပါ",
    // "Duplicate"
    duplicate: "မိတ္တူပြုလုပ်ပါ",
    // "Add to toolbox"
    addToToolbox: "Toolbox သို့ထည့်ပါ",
    // "Delete Panel"
    deletePanel: "Panel ကိုဖျက်ပါ",
    // "Delete Question"
    deleteQuestion: "မေးခွန်းကိုဖျက်ပါ",
    // "Convert to"
    convertTo: "သို့ပြောင်းပါ",
    // "Drag element"
    drag: "အရာဝတ္ထုကိုဆွဲပါ"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "အစီအစဉ်",
    // "Themes"
    theme: "အပိုဒ်",
    // "Translations"
    translation: "ဘာသာစကား",
    // "Designer"
    designer: "ပံ့ပိုးသူ",
    // "JSON Editor"
    json: "တည်းဖြတ်သူ",
    // "Logic"
    logic: "စစ်တမ်း"
  },
  // Question types
  qt: {
    // "Default"
    default: "ပုံမှန်",
    // "Checkboxes"
    checkbox: "အမှန်ခြစ်များ",
    // "Long Text"
    comment: "ရှည်လျားသောစာသား",
    // "Image Picker"
    imagepicker: "ပုံရွေးချယ်မှု",
    // "Ranking"
    ranking: "အဆင့်သတ်မှတ်မှု",
    // "Image"
    image: "ပုံ",
    // "Dropdown"
    dropdown: "ချိုင့်ကျစွာရွေးချယ်ခြင်း",
    // "Multi-Select Dropdown"
    tagbox: "အများဆုံးရွေးချယ်မှုများ",
    // "File Upload"
    file: "ဖိုင်တင်ပို့မှု",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "တစ်ခုသာရွေးချယ်နိုင်သော Matrix",
    // "Multi-Select Matrix"
    matrixdropdown: "အများဆုံးရွေးချယ်နိုင်သော Matrix",
    // "Dynamic Matrix"
    matrixdynamic: "Dynamic Matrix",
    // "Multiple Textboxes"
    multipletext: "စာသားသေတ္တာများ",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Dynamic Panel",
    // "Radio Button Group"
    radiogroup: "Radio Button Group",
    // "Rating Scale"
    rating: "အဆင့်သတ်မှတ်ခြင်း",
    // slider: "Slider",
    text: "တစ်ကြောင်းစာသားသွင်း",
    // "Yes/No (Boolean)"
    boolean: "ဟုတ်/မဟုတ် (Boolean)",
    // "Expression (read-only)"
    expression: "စကားရပ် (ဖတ်ရုံသာလျှင်)",
    // "Signature"
    signaturepad: "လက်မှတ်ပုံစံ",
    // "Button Group"
    buttongroup: "Button Group"
  },
  toolboxCategories: {
    // "General"
    general: "အထွေထွေ",
    // "Choice Questions"
    choice: "ရွေးချယ်မေးခွန်းများ",
    // "Text Input Questions"
    text: "စာသားမေးခွန်းများ",
    // "Containers"
    containers: "ကွန်တိန်နာများ",
    // "Matrix Questions"
    matrix: "Matrix မေးခွန်းများ",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "ပုံမှန် ({0})",
    // "Survey"
    survey: "စစ်တမ်း",
    // "Settings"
    settings: "ဆက်တင်များ",
    // "Open settings"
    settingsTooltip: "ဆက်တင်ဖွင့်ရန်",
    // "Survey Settings"
    surveySettings: "စစ်တမ်းဆက်တင်များ",
    // "Survey settings"
    surveySettingsTooltip: "စစ်တမ်းဆက်တင်များ",
    // "Theme Settings"
    themeSettings: "အကြောင်းအရာဆက်တင်များ",
    // "Theme settings"
    themeSettingsTooltip: "အကြောင်းအရာဆက်တင်များ",
    // "Creator Settings"
    creatorSettingTitle: "ဖန်တီးသူဆက်တင်များ",
    // "Show Panel"
    showPanel: "Panel ပြရန်",
    // "Hide Panel"
    hidePanel: "Panel ဖျောက်ရန်",
    // "Select previous"
    prevSelected: "ယခင်ကိုရွေးချယ်ပါ",
    // "Select next"
    nextSelected: "နောက်တစ်ခုကိုရွေးချယ်ပါ",
    // "Focus previous"
    prevFocus: "ယခင်ကိုအာရုံစိုက်ပါ",
    // "Focus next"
    nextFocus: "နောက်တစ်ခုကိုအာရုံစိုက်ပါ",
    // "Survey"
    surveyTypeName: "စစ်တမ်း",
    // "Page"
    pageTypeName: "စာမျက်နှာ",
    // "Panel"
    panelTypeName: "Panel",
    // "Question"
    questionTypeName: "မေးခွန်း",
    // "Column"
    columnTypeName: "ကော်လံ",
    // "Add New Page"
    addNewPage: "စာမျက်နှာအသစ်ထည့်ရန်",
    // "Scroll to the Right"
    moveRight: "ညာဘက်သို့ရွေ့ရန်",
    // "Scroll to the Left"
    moveLeft: "ဘယ်ဘက်သို့ရွေ့ရန်",
    // "Delete Page"
    deletePage: "စာမျက်နှာဖျက်ရန်",
    // "Edit Page"
    editPage: "စာမျက်နှာတည်းဖြတ်ရန်",
    // "Edit"
    edit: "တည်းဖြတ်ရန်",
    // "page"
    newPageName: "စာမျက်နှာ",
    // "question"
    newQuestionName: "မေးခွန်း",
    // "panel"
    newPanelName: "Panel",
    // "text"
    newTextItemName: "စာသား",
    // "Default"
    defaultV2Theme: "ပုံမှန်",
    // "Modern"
    modernTheme: "ခေတ်မီ",
    // "Default (legacy)"
    defaultTheme: "ပုံမှန် (ရှေးဟောင်း)",
    // "Preview Survey Again"
    testSurveyAgain: "စစ်တမ်းပြန်လည်ကြည့်ရှုရန်",
    // "Survey width: "
    testSurveyWidth: "စစ်တမ်းအကျယ်: ",
    // "You had to navigate to"
    navigateToMsg: "သင်သည်သွားရမည့်နေရာ",
    // "Save Survey"
    saveSurvey: "စစ်တမ်းကိုသိမ်းရန်",
    // "Save Survey"
    saveSurveyTooltip: "စစ်တမ်းကိုသိမ်းရန်",
    // "Save Theme"
    saveTheme: "အကြောင်းအရာကိုသိမ်းရန်",
    // "Save Theme"
    saveThemeTooltip: "အကြောင်းအရာကိုသိမ်းရန်",
    // "Hide errors"
    jsonHideErrors: "အမှားများကိုဖျောက်ပါ",
    // "Show errors"
    jsonShowErrors: "အမှားများကိုပြပါ",
    // "Undo"
    undo: "မလုပ်မှားခဲ့သည်",
    // "Redo"
    redo: "ပြန်လုပ်ရန်",
    // "Undo last change"
    undoTooltip: "နောက်ဆုံးပြောင်းလဲမှုကိုဖျက်ပယ်ပါ",
    // "Redo the change"
    redoTooltip: "ပြောင်းလဲမှုကိုပြန်လုပ်ပါ",
    // collapseTooltip: "Collapse",
    expandAllTooltip: "အားလုံးဖွင့်ပါ",
    // "Collapse All"
    collapseAllTooltip: "အားလုံးဖုံးရန်",
    // "Zoom In"
    zoomInTooltip: "ချဲ့သည်",
    // zoom100Tooltip: "Zoom to 100%",
    zoomOutTooltip: "ကျဉ်းစေသည်",
    // "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "မေးခွန်းများ၏ဖွင့်/ပိတ်အခြေအနေကိုသော့ထားပါ",
    // "Show more"
    showMoreChoices: "ပိုမိုပြရန်",
    // "Show less"
    showLessChoices: "ပိုမိုပိတ်ရန်",
    // "Copy"
    copy: "ကူးရန်",
    // "Cut"
    cut: "ဖြတ်ပါ",
    // "Paste"
    paste: "ကပ်ပါ",
    // "Copy selection to clipboard"
    copyTooltip: "Clipboard သို့ရွေးချယ်မှုကိုကူးပါ",
    // "Cut selection to clipboard"
    cutTooltip: "Clipboard သို့ရွေးချယ်မှုကိုဖြတ်ပါ",
    // "Paste from clipboard"
    pasteTooltip: "Clipboard မှကပ်ပါ",
    // "Options"
    options: "ရွေးချယ်မှုများ",
    // "Generate Valid JSON"
    generateValidJSON: "မှန်ကန်သော JSON ဖန်တီးပါ",
    // "Generate Readable JSON"
    generateReadableJSON: "ဖတ်ရန်လွယ်ကူသော JSON ဖန်တီးပါ",
    // "Toolbox"
    toolbox: "Toolbox",
    // "Properties"
    "property-grid": "Properties",
    // toolboxSearch: "Search",
    toolboxFilteredTextPlaceholder: "ရှာဖွေရန်ရိုက်ပါ...",
    // "No results found"
    toolboxNoResultsFound: "ရလဒ်မရှိပါ",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "ရှာဖွေရန်ရိုက်ပါ...",
    // "No results found"
    propertyGridNoResultsFound: "ရလဒ်မရှိပါ",
    // "Start configuring your form"
    propertyGridPlaceholderTitle: "သင့်ပုံစံကိုပြင်ဆင်စတင်ပါ",
    // "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "စစ်တမ်းဆက်တင်များကိုစူးစမ်းရန်အမျိုးအစားအိုင်ကွန်ကိုနှိပ်ပါ။ ဒီဇိုင်းမျက်နှာပြင်တွင်စစ်တမ်းအချက်အလက်တစ်ခုကိုထည့်ပြီးနောက်ထပ်ဆက်တင်များရနိုင်ပါမည်။",
    // "Please correct JSON."
    correctJSON: "JSON ကိုပြင်ပါ။",
    // "Survey Results "
    surveyResults: "စစ်တမ်းရလဒ်များ ",
    // "As Table"
    surveyResultsTable: "ဇယားအဖြစ်",
    // "As JSON"
    surveyResultsJson: "JSON အဖြစ်",
    // "Question Title"
    resultsTitle: "မေးခွန်းခေါင်းစဉ်",
    // "Question Name"
    resultsName: "မေးခွန်းအမည်",
    // "Answer Value"
    resultsValue: "အဖြေတန်ဖိုး",
    // "Display Value"
    resultsDisplayValue: "ပြသသောတန်ဖိုး",
    // "Modified"
    modified: "ပြောင်းလဲခဲ့သည်",
    // "Saving"
    saving: "သိမ်းဆည်းနေသည်",
    // "Saved"
    saved: "သိမ်းဆည်းပြီး",
    // "Error"
    propertyEditorError: "အမှား",
    // "Error! Editor content is not saved."
    saveError: "အမှား! တည်းဖြတ်မှုမရှိသိမ်းဆည်းပါ။",
    // "Language Settings"
    translationPropertyGridTitle: "ဘာသာစကားဆက်တင်များ",
    // "Theme Settings"
    themePropertyGridTitle: "အကြောင်းအရာဆက်တင်များ",
    // addLanguageTooltip: "Add Language",
    translationLanguages: "ဘာသာစကားများ",
    // "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "ဒီဘာသာစကားအတွက် string အားလုံးကိုဖျက်ရန်သေချာပါသလား?",
    // "Select language to translate"
    translationAddLanguage: "ဘာသာစကားရွေးရန်",
    // "All Strings"
    translationShowAllStrings: "အားလုံး string",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "အသုံးပြုထားသော string များ",
    // "All Pages"
    translationShowAllPages: "စာမျက်နှာအားလုံး",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "ဘာသာပြန်ရန် string မရှိပါ။ စစ်တမ်းအချက်အလက်ကိုပြောင်းပါ။",
    // "Export to CSV"
    translationExportToSCVButton: "CSV သို့တင်ပို့ပါ",
    // "Import from CSV"
    translationImportFromSCVButton: "CSV မှတင်သွင်းပါ",
    // "Auto-translate All"
    translateUsigAI: "အားလုံးကိုအလိုအလျောက်ဘာသာပြန်ပါ",
    // "Translate from: "
    translateUsigAIFrom: "မှဘာသာပြန်ရန်: ",
    // "Untranslated strings"
    translationDialogTitle: "ဘာသာပြန်ခြင်းမရှိသော string",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "{0} ကိုပုံမှန် locale နှင့်ပေါင်းစည်းပါ",
    // "Translation..."
    translationPlaceHolder: "ဘာသာပြန်ခြင်း...",
    // "Source: "
    translationSource: "မူရင်း: ",
    // "Target: "
    translationTarget: "ဦးတည်ချက်: ",
    // "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube လင့်များအားထောက်ပံ့မထားပါ။",
    // "Export"
    themeExportButton: "တင်ပို့ပါ",
    // "Import"
    themeImportButton: "တင်သွင်းပါ",
    // "Export"
    surveyJsonExportButton: "တင်ပို့ပါ",
    // "Import"
    surveyJsonImportButton: "တင်သွင်းပါ",
    // "Copy to clipboard"
    surveyJsonCopyButton: "Clipboard သို့ကူးပါ",
    // "Reset theme settings to default"
    themeResetButton: "အကြောင်းအရာဆက်တင်များကိုပုံမှန်သို့ပြန်သတ်မှတ်ပါ",
    // "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "အကြောင်းအရာကိုပြန်သတ်မှတ်လိုပါသလား? သင်၏စိတ်ကြိုက်ပြုပြင်မှုအားလုံးကိုဆုံးရှုံးပါမည်။",
    // "Yes, reset the theme"
    themeResetConfirmationOk: "ဟုတ်ကဲ့၊ အကြောင်းအရာကိုပြန်သတ်မှတ်ပါ",
    // "Bold"
    bold: "အထူ",
    // "Italic"
    italic: "စောင်း",
    // "Underline"
    underline: "အောက်ကြောင်းချ",
    // "Add Question"
    addNewQuestion: "မေးခွန်းထည့်ရန်",
    // "Select page..."
    selectPage: "စာမျက်နှာရွေးပါ...",
    // "Choices are copied from"
    carryForwardChoicesCopied: "ရွေးချယ်မှုများကိုကူးခဲ့သည်",
    // "Choices are loaded from a web service."
    choicesLoadedFromWebText: "ရွေးချယ်မှုများကိုဝဘ်ဆာဗာမှတင်ခဲ့သည်။",
    // "Go to settings"
    choicesLoadedFromWebLinkText: "ဆက်တင်များသို့သွားပါ",
    // "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "ရွေးချယ်မှုများ၏ကြိုတင်ကြည့်ရှုမှု",
    // "HTML content will be here."
    htmlPlaceHolder: "HTML အကြောင်းအရာဒီမှာရှိမည်။",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Toolbox မှမေးခွန်းတစ်ခုကိုဒီမှာလဲထည့်ပါ။",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "စစ်တမ်းမှာအချို့သောအရာများမရှိပါ။ Toolbox မှအရာတစ်ခုကိုဆွဲယူပါ။",
    // "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "စာမျက်နှာမှာအချို့သောအရာများမရှိပါ။ Toolbox မှအရာတစ်ခုကိုဆွဲယူပါ။",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "ပုံကိုဒီမှာဆွဲယူရန်...",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "ပုံစံဖန်တီးရန် \"မေးခွန်းထည့်ပါ\" ခလုတ်ကိုနှိပ်ပါ။",
    // "Your form is empty"
    surveyPlaceholderTitle: "ပုံစံအဘယ်သူမျှမ",
    // "Your form is empty"
    surveyPlaceholderTitleMobile: "ပုံစံအဘယ်သူမျှမ",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Toolbox မှအရာတစ်ခုကိုဆွဲယူပါ။",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Toolbox မှအရာတစ်ခုကိုဆွဲယူပါ။",
    // "No preview"
    previewPlaceholderTitle: "ကြိုတင်ကြည့်ရှုရန်မရှိပါ",
    // "No preview"
    previewPlaceholderTitleMobile: "ကြိုတင်ကြည့်ရှုရန်မရှိပါ",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "စစ်တမ်းတွင်မည်သည့်အရာမှမပါဝင်ပါ။",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "စစ်တမ်းတွင်မည်သည့်အရာမှမပါဝင်ပါ။",
    // "No strings to translate"
    translationsPlaceholderTitle: "ဘာသာပြန်ရန် string မရှိပါ",
    // "No strings to translate"
    translationsPlaceholderTitleMobile: "ဘာသာပြန်ရန် string မရှိပါ",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "သင့်ပုံစံတွင်အရာများကိုထည့်ပါ။",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "သင့်ပုံစံတွင်အရာများကိုထည့်ပါ။",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "\"မေးခွန်းထည့်ပါ\" ခလုတ်ကိုနှိပ်ပြီးစာမျက်နှာသို့အရာထည့်ပါ။",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "\"မေးခွန်းထည့်ပါ\" ခလုတ်ကိုနှိပ်ပြီး panel သို့အရာထည့်ပါ။",
    // "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "ပုံတစ်ခုကိုလွှင့်ပါ...",
    // "Choose Image"
    imageChooseImage: "ပုံရွေးပါ",
    // "Add {0}"
    addNewTypeQuestion: "{0} ထည့်ပါ", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // "Item "
    choices_Item: "အရာ ",
    // "Select a file"
    selectFile: "ဖိုင်ကိုရွေးပါ",
    // "Remove the file"
    removeFile: "ဖိုင်ကိုဖျက်ပါ",
    lg: {
      // "Add New Rule"
      addNewItem: "သစ်သောစည်းမျဉ်းထည့်ပါ",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "စစ်တမ်း၏လှုပ်ရှားမှုကိုစိတ်ကြိုက်ပြုလုပ်ရန်စည်းမျဉ်းတစ်ခုဖန်တီးပါ။",
      // "No logical rules"
      logicPlaceholderTitle: "နိယာမဆိုင်ရာစည်းမျဉ်းမရှိပါ",
      // "No logical rules"
      logicPlaceholderTitleMobile: "နိယာမဆိုင်ရာစည်းမျဉ်းမရှိပါ",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "စစ်တမ်း၏လှုပ်ရှားမှုကိုစိတ်ကြိုက်ပြုလုပ်ရန်စည်းမျဉ်းတစ်ခုဖန်တီးပါ။",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "စစ်တမ်း၏လှုပ်ရှားမှုကိုစိတ်ကြိုက်ပြုလုပ်ရန်စည်းမျဉ်းတစ်ခုဖန်တီးပါ။",
      // "Show/hide page"
      page_visibilityName: "စာမျက်နှာကို ပြ/ဖျောက်",
      // "Enable/disable page"
      page_enableName: "စာမျက်နှာကို ဖွင့်/ပိတ်",
      // "Make page required"
      page_requireName: "စာမျက်နှာကိုလိုအပ်အဖြစ်ပြုလုပ်ပါ",
      // "Show/hide panel"
      panel_visibilityName: "Panel ကို ပြ/ဖျောက်",
      // "Enable/disable panel"
      panel_enableName: "Panel ကို ဖွင့်/ပိတ်",
      // "Make panel required"
      panel_requireName: "Panel ကိုလိုအပ်အဖြစ်ပြုလုပ်ပါ",
      // "Show/hide question"
      question_visibilityName: "မေးခွန်းကို ပြ/ဖျောက်",
      // "Enable/disable question"
      question_enableName: "မေးခွန်းကို ဖွင့်/ပိတ်",
      // "Make question required"
      question_requireName: "မေးခွန်းကိုလိုအပ်အဖြစ်ပြုလုပ်ပါ",
      // "Reset question value"
      question_resetValueName: "မေးခွန်းတန်ဖိုးကိုပြန်စဉ်ဆင်ပါ",
      // "Set question value"
      question_setValueName: "မေးခွန်းတန်ဖိုးကိုသတ်မှတ်ပါ",
      // "Show/hide column"
      column_visibilityName: "ကော်လံကို ပြ/ဖျောက်",
      // "Enable/disable column"
      column_enableName: "ကော်လံကို ဖွင့်/ပိတ်",
      // "Make column required"
      column_requireName: "ကော်လံကိုလိုအပ်အဖြစ်ပြုလုပ်ပါ",
      // "Reset column value"
      column_resetValueName: "ကော်လံတန်ဖိုးကိုပြန်စဉ်ဆင်ပါ",
      // "Set column value"
      column_setValueName: "ကော်လံတန်ဖိုးကိုသတ်မှတ်ပါ",
      // "Complete survey"
      trigger_completeName: "စစ်တမ်းပြီးစီး",
      // "Set answer"
      trigger_setvalueName: "အဖြေကိုသတ်မှတ်ပါ",
      // "Copy answer"
      trigger_copyvalueName: "အဖြေကိုကူးပါ",
      // "Skip to question"
      trigger_skipName: "မေးခွန်းသို့ကျော်သွားပါ",
      // "Run expression"
      trigger_runExpressionName: "ဖော်ပြချက်ကိုလုပ်ဆောင်ပါ",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "\"ကျေးဇူးတင်\" စာမျက်နှာကိုသတ်မှတ်ပါ",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ စာမျက်နှာကိုမြင်နိုင်စေပါ။ သို့မဟုတ် စာမျက်နှာကိုဖျောက်ထားပါ။",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ Panel ကိုမြင်နိုင်စေပါ။ သို့မဟုတ် Panel ကိုဖျောက်ထားပါ။",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ Panel နှင့်၎င်းတွင်းရှိအရာများကိုဖွင့်ထားပါ။ သို့မဟုတ် ပိတ်ထားပါ။",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ မေးခွန်းကိုမြင်နိုင်စေပါ။ သို့မဟုတ် ဖျောက်ထားပါ။",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ မေးခွန်းကိုဖွင့်ထားပါ။ သို့မဟုတ် ပိတ်ထားပါ။",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ မေးခွန်းကိုလိုအပ်အဖြစ်ပြုလုပ်ပါ။",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ စစ်တမ်းပြီးစီးပြီး \"ကျေးဇူးတင်\" စာမျက်နှာကိုပြပါ။",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ သတ်မှတ်ထားသောတန်ဖိုးကိုရွေးချယ်ထားသောမေးခွန်းသို့ထည့်ပါ။",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ တန်ဖိုးကိုတစ်မေးခွန်းမှတစ်မေးခွန်းသို့ကူးပါ။",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ စစ်တမ်းသည်ရွေးချယ်ထားသောမေးခွန်းသို့သွားသည်။",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ အခြားဖော်ပြချက်တစ်ခုကိုအကဲဖြတ်ပါ။ ၎င်း၏ရလဒ်ကိုမေးခွန်းတစ်ခုသို့ထည့်ရန်ရွေးချယ်နိုင်သည်။",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "နိယာမဖော်ပြချက်မှ true အဖြစ်အကဲဖြတ်သောအခါ \"ကျေးဇူးတင်\" စာမျက်နှာတွင် သတ်မှတ်ထားသောအကြောင်းအရာကိုပြပါ။",
      // "When expression: '{0}' returns true"
      itemExpressionText: "ဖော်ပြချက်: '{0}' မှ true ပြန်လာသည့်အခါ", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "သစ်သောစည်းမျဉ်း",
      // "make page {0} visible"
      page_visibilityText: "စာမျက်နှာ {0} ကိုမြင်နိုင်စေပါ", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Panel {0} ကိုမြင်နိုင်စေပါ", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Panel {0} ကိုဖွင့်ထားပါ", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "မေးခွန်း {0} ကိုမြင်နိုင်စေပါ", // {0} question name
      // "make question {0} enable"
      question_enableText: "မေးခွန်း {0} ကိုဖွင့်ထားပါ", // {0} question name
      // "make question {0} required"
      question_requireText: "မေးခွန်း {0} ကိုလိုအပ်အဖြစ်ပြုလုပ်ပါ", // {0} question name
      // "reset value for question: {0}"
      question_resetValueText: "မေးခွန်း: {0} အတွက်တန်ဖိုးကိုပြန်စဉ်ဆင်ပါ", // {0} question name.
      // "assign value: {1} to question: {0}"
      question_setValueText: "မေးခွန်း: {0} သို့တန်ဖိုး: {1} ကိုထည့်ပါ", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "မေးခွန်း {1} ၏ကော်လံ {0} ကိုမြင်နိုင်စေပါ", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "မေးခွန်း {1} ၏ကော်လံ {0} ကိုဖွင့်ထားပါ", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "မေးခွန်း {1} ၏ကော်လံ {0} ကိုလိုအပ်အဖြစ်ပြုလုပ်ပါ", // {0} column name, {1} question name
      // "reset cell value for column: {0}"
      column_resetValueText: "ကော်လံ: {0} အတွက်တန်ဖိုးကိုပြန်စဉ်ဆင်ပါ", // {0} column name
      // "assign cell value: {1} to column: {0}"
      column_setValueText: "ကော်လံ: {0} သို့တန်ဖိုး: {1} ကိုထည့်ပါ", // {0} column name and {1} setValueExpression
      // "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "ရလဒ်ကိုရွေးချယ်ထားသောမေးခွန်းသို့ထည့်ရန်ဖော်ပြချက်။",
      // "survey becomes completed"
      trigger_completeText: "စစ်တမ်းသည်ပြီးစီးသွားသည်",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "မေးခွန်း: {0} ထဲသို့တန်ဖိုး {1} ကိုထည့်ပါ", // {0} question name, {1} setValue
      // "clear question value: {0}"
      trigger_setvalueEmptyText: "မေးခွန်း: {0} ၏တန်ဖိုးကိုရှင်းလင်းပါ", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "မေးခွန်း {0} ထဲသို့ မေးခွန်း {1} မှတန်ဖိုးကိုကူးပါ", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "မေးခွန်း {0} သို့စစ်တမ်းကျော်သွားပါ", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "ဖော်ပြချက်: '{0}' ကိုလုပ်ဆောင်ပါ", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " နှင့်၎င်း၏ရလဒ်ကိုမေးခွန်း: {0} ထဲသို့ထည့်ပါ", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "\"ကျေးဇူးတင်\" စာမျက်နှာအတွက်စိတ်ကြိုက်စာသားကိုပြပါ။",
      // "All Questions"
      showAllQuestions: "မေးခွန်းအားလုံး",
      // "All Action Types"
      showAllActionTypes: "လုပ်ဆောင်ချက်အမျိုးအစားအားလုံး",
      // "Condition(s)"
      conditions: "အခြေအနေ(များ)",
      // "Action(s)"
      actions: "လုပ်ဆောင်ချက်(များ)",
      // "Define condition(s)"
      expressionEditorTitle: "အခြေအနေ(များ) သတ်မှတ်ပါ",
      // "Define action(s)"
      actionsEditorTitle: "လုပ်ဆောင်ချက်(များ) သတ်မှတ်ပါ",
      // "Delete Action"
      deleteAction: "လုပ်ဆောင်ချက်ကိုဖျက်ပါ",
      // "Add Action"
      addNewAction: "လုပ်ဆောင်ချက်ထည့်ပါ",
      // "Select action..."
      selectedActionCaption: "လုပ်ဆောင်ချက်ရွေးပါ...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "နိယာမဖော်ပြချက်သည်လွတ်လပ်နေသည် သို့မဟုတ်မမှန်ကန်ပါ။ ဦးစွာပြုပြင်ပါ။",
      // "Please add at least one action."
      noActionError: "လုပ်ဆောင်ချက်အနည်းဆုံးတစ်ခုထည့်ပါ။",
      // "Please fix issues in your action(s)."
      actionInvalid: "လုပ်ဆောင်ချက်(များ) တွင်ပြဿနာကိုပြင်ပါ။",
      // "Logical rules are incomplete"
      uncompletedRule_title: "နိယာမစည်းမျဉ်းများမပြီးစီးပါ",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "သင်၏နိယာမစည်းမျဉ်းများအချို့မပြီးစီးပါသေးပါ။ အခုပုံစံမှထွက်ပါက ပြောင်းလဲမှုများပျက်ကွက်မည်။ ပြောင်းလဲမှုများမပြီးစီးဘဲ ထွက်လိုပါသလား?",
      // "Yes"
      uncompletedRule_apply: "ဟုတ်ပါသည်",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "မဟုတ်ပါ၊ စည်းမျဉ်းများကိုပြီးစီးချင်ပါသည်"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // "Panel name"
      name: "ပန်းနယ်အမည်",
      // "Panel title"
      title: "ပန်းနယ်ခေါင်းစဉ်",
      // "Panel description"
      description: "ပန်းနယ်ဖော်ပြချက်",
      // "Make the panel visible if"
      visibleIf: "ပန်းနယ်ကိုမြင်သာစေပါ",
      // "Make the panel required if"
      requiredIf: "ပန်းနယ်လိုအပ်မှုအခြေအနေ",
      // questionOrder: "Question order within the panel",
      page: "ပန်းနယ်ကိုစာမျက်နှာသို့ရွှေ့ပါ",
      // "Display the panel on a new line"
      startWithNewLine: "ပန်းနယ်ကိုလိုင်းအသစ်တွင်ပြသပါ",
      // "Panel collapse state"
      state: "ပန်းနယ်အတိုးအကျိုးအခြေအနေ",
      // "Inline panel width"
      width: "ပန်းနယ်အကျယ်",
      // "Minimum panel width"
      minWidth: "အနည်းဆုံးပန်းနယ်အကျယ်",
      // "Maximum panel width"
      maxWidth: "အများဆုံးပန်းနယ်အကျယ်",
      // "Number this panel"
      showNumber: "ပန်းနယ်နံပါတ်ကိုပြပါ"
    },
    panellayoutcolumn: {

    },
    paneldynamic: {
      // "Panel name"
      name: "ပန်းနယ်အမည်",
      // "Panel title"
      title: "ပန်းနယ်ခေါင်းစဉ်",
      // "Panel description"
      description: "ပန်းနယ်ဖော်ပြချက်",
      // displayMode: "Entry display mode",
      visibleIf: "ပန်းနယ်ကိုမြင်သာစေပါ",
      // "Make the panel required if"
      requiredIf: "ပန်းနယ်လိုအပ်မှုအခြေအနေ",
      // "Move the panel to page"
      page: "ပန်းနယ်ကိုစာမျက်နှာသို့ရွှေ့ပါ",
      // "Display the panel on a new line"
      startWithNewLine: "ပန်းနယ်ကိုလိုင်းအသစ်တွင်ပြသပါ",
      // "Panel collapse state"
      state: "ပန်းနယ်အတိုးအကျိုးအခြေအနေ",
      // "Inline panel width"
      width: "ပန်းနယ်အကျယ်",
      // "Minimum panel width"
      minWidth: "အနည်းဆုံးပန်းနယ်အကျယ်",
      // "Maximum panel width"
      maxWidth: "အများဆုံးပန်းနယ်အကျယ်",
      // "Confirm entry removal"
      confirmDelete: "ပန်းနယ်ဖျက်မှုအတည်ပြုပါ",
      // "Entry description pattern"
      templateDescription: "ပန်းနယ်ဖော်ပြချက်နမူနာ",
      // "Entry title pattern"
      templateTitle: "ပန်းနယ်ခေါင်းစဉ်နမူနာ",
      // "Empty panel text"
      noEntriesText: "ပန်းနယ်အကြောင်းအရာမရှိပါ",
      // "Tab title pattern"
      templateTabTitle: "Tab ခေါင်းစဉ်နမူနာ",
      // "Tab title placeholder"
      tabTitlePlaceholder: "Tab ခေါင်းစဉ်အစားထိုး",
      // "Make an individual entry visible if"
      templateVisibleIf: "ပန်းနယ်တစ်ခုချင်းစီကိုမြင်သာစေပါ",
      // showNumber: "Number the panel",
      titleLocation: "ပန်းနယ်ခေါင်းစဉ်တည်နေရာ",
      // "Panel description alignment"
      descriptionLocation: "ပန်းနယ်ဖော်ပြချက်တည်နေရာ",
      // templateQuestionTitleWidth: "Question title width",
      templateErrorLocation: "အမှားစာစောင်တည်နေရာ",
      // "New entry location"
      newPanelPosition: "ပန်းနယ်အသစ်တည်နေရာ",
      // "Prevent duplicate responses in the following question"
      keyName: "ထပ်တူဖြေဆိုမှုကိုတားဆီးပါ"
    },
    question: {
      // "Question name"
      name: "မေးခွန်းအမည်",
      // "Question title"
      title: "မေးခွန်းခေါင်းစဉ်",
      // "Question description"
      description: "မေးခွန်းဖော်ပြချက်",
      // showTitle: "Show the title and description",
      visibleIf: "မေးခွန်းကိုမြင်သာစေပါ",
      // "Make the question required if"
      requiredIf: "မေးခွန်းလိုအပ်မှုအခြေအနေ",
      // "Move the question to page"
      page: "မေးခွန်းကိုစာမျက်နှာသို့ရွှေ့ပါ",
      // "Question box collapse state"
      state: "မေးခွန်းဘောက်စ်အတိုးအကျိုးအခြေအနေ",
      // showNumber: "Number this question",
      titleLocation: "မေးခွန်းခေါင်းစဉ်တည်နေရာ",
      // "Question description alignment"
      descriptionLocation: "မေးခွန်းဖော်ပြချက်တည်နေရာ",
      // "Error message alignment"
      errorLocation: "အမှားစာတည်နေရာ",
      // "Increase the inner indent"
      indent: "အတွင်းအကွာအဝေးတိုးရန်",
      // "Inline question width"
      width: "မေးခွန်းအကျယ်",
      // "Minimum question width"
      minWidth: "မေးခွန်းအနည်းဆုံးအကျယ်",
      // "Maximum question width"
      maxWidth: "မေးခွန်းအများဆုံးအကျယ်",
      // "Update input field value"
      textUpdateMode: "အကွက်တန်ဖိုးကိုမွမ်းမံပါ"
    },
    signaturepad: {
      // "Signature area width"
      signatureWidth: "လက်မှတ်ဧရိယာအကျယ်",
      // "Signature area height"
      signatureHeight: "လက်မှတ်ဧရိယာအမြင့်",
      // "Auto-scale the signature area"
      signatureAutoScaleEnabled: "လက်မှတ်ဧရိယာကိုအလိုအလျောက်ချဲ့ရန်",
      // "Show a placeholder within signature area"
      showPlaceholder: "လက်မှတ်ဧရိယာတွင် placeholder ကိုပြပါ",
      // "Placeholder text"
      placeholder: "Placeholder စာသား",
      // "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "ဖတ်ရုံသာ/ကြိုတင်ကြည့်ရန်အခြေအနေအတွက် Placeholder စာသား",
      // "Show the Clear button within signature area"
      allowClear: "လက်မှတ်ဧရိယာတွင်ရှင်း button ကိုပြပါ",
      // "Minimum stroke width"
      penMinWidth: "အနည်းဆုံးstroke အကျယ်",
      // "Maximum stroke width"
      penMaxWidth: "အများဆုံးstroke အကျယ်",
      // "Stroke color"
      penColor: "stroke အရောင်"
    },
    comment: {
      // "Input field height (in lines)"
      rows: "အကွက်အမြင့် (လိုင်းများဖြင့်)"
    },
    // "Question numbering"
    showQuestionNumbers: "မေးခွန်းနံပါတ်ပြခြင်း",
    // "Question indexing type"
    questionStartIndex: "မေးခွန်းအညွှန်းအမျိုးအစား",
    expression: {
      // "Expression name"
      name: "ဖော်ပြချက်အမည်",
      // "Expression title"
      title: "ဖော်ပြချက်ခေါင်းစဉ်",
      // "Expression description"
      description: "ဖော်ပြချက်ဖော်ပြချက်",
      // "Expression"
      expression: "ဖော်ပြချက်"
    },
    trigger: {
      // "Expression"
      expression: "ဖော်ပြချက်"
    },
    calculatedvalue: {
      // "Expression"
      expression: "ဖော်ပြချက်"
    },
    // survey templates
    survey: {
      // "Survey title"
      title: "စစ်တမ်းခေါင်းစဉ်",
      // "Survey description"
      description: "စစ်တမ်းဖော်ပြချက်"
    },
    page: {
      // "Page name"
      name: "စာမျက်နှာအမည်",
      // "Page title"
      title: "စာမျက်နှာခေါင်းစဉ်",
      // "Page description"
      description: "စာမျက်နှာဖော်ပြချက်",
      // "Make the page visible if"
      visibleIf: "စာမျက်နှာကိုမြင်သာစေပါ",
      // "Make the page required if"
      requiredIf: "စာမျက်နှာလိုအပ်မှုအခြေအနေ",
      // "Time limit to complete the page"
      timeLimit: "စာမျက်နှာကိုပြီးစီးရန်အချိန်ကန့်သတ်"
    },
    matrixdropdowncolumn: {
      // "Column name"
      name: "ကော်လံအမည်",
      // "Column title"
      title: "ကော်လံခေါင်းစဉ်",
      // "Prevent duplicate responses"
      isUnique: "ထပ်တူဖြေဆိုမှုကိုတားဆီးပါ",
      // "Column width"
      width: "ကော်လံအကျယ်",
      // "Minimum column width"
      minWidth: "ကော်လံအနည်းဆုံးအကျယ်",
      // "Input field height (in lines)"
      rows: "အကွက်အမြင့် (လိုင်းများဖြင့်)",
      // "Make the column visible if"
      visibleIf: "ကော်လံကိုမြင်သာစေပါ",
      // "Make the column required if"
      requiredIf: "ကော်လံလိုအပ်မှုအခြေအနေ",
      // "Each option in a separate column"
      showInMultipleColumns: "ရွေးချယ်မှုတိုင်းကိုကော်လံတစ်ခုစီတွင်ပြပါ"
    },
    multipletextitem: {
      // "Name"
      name: "အမည်",
      // "Title"
      title: "ခေါင်းစဉ်"
    },
    masksettings: {
      // "Save masked value in survey results"
      saveMaskedValue: "စစ်တမ်းရလဒ်တွင် masked တန်ဖိုးကိုသိမ်းဆည်းပါ"
    },
    patternmask: {
      // "Value pattern"
      pattern: "တန်ဖိုးနမူနာ"
    },
    datetimemask: {
      // "Minimum value"
      min: "အနည်းဆုံးတန်ဖိုး",
      // "Maximum value"
      max: "အများဆုံးတန်ဖိုး"
    },
    numericmask: {
      // "Allow negative values"
      allowNegativeValues: "အနုတ်တန်ဖိုးများကိုခွင့်ပြုပါ",
      // "Thousands separator"
      thousandsSeparator: "ထောင်ကျော်ကွာခြားစရာ",
      // "Decimal separator"
      decimalSeparator: "ဒသမကွာခြားစရာ",
      // "Value precision"
      precision: "တန်ဖိုးတိကျမှု",
      // "Minimum value"
      min: "အနည်းဆုံးတန်ဖိုး",
      // "Maximum value"
      max: "အများဆုံးတန်ဖိုး"
    },
    currencymask: {
      // "Currency prefix"
      prefix: "ငွေကြေးစနစ်နာမည်",
      // "Currency suffix"
      suffix: "ငွေကြေးနောက်ဆက်"
    },
    // isCommentRequired: "Require user to enter a comment",
    imageHeight: "ပုံအမြင့်",
    // "Display area width"
    imageWidth: "ပုံအကျယ်",
    // "Join identifier"
    valueName: "တန်ဖိုးအမည်",
    // defaultDisplayValue: "Default display value for dynamic texts",
    rateDescriptionLocation: "အချက်အလက်ဖော်ပြချက်တည်နေရာ",
    // size: "Input field width (in characters)",
    cellErrorLocation: "အကွက်အမှားစာတန်းတည်နေရာ",
    // "Enabled"
    enabled: "ဖွင့်ထားသည်",
    // "Disabled"
    disabled: "ပိတ်ထားသည်",
    // "Inherit"
    inherit: "အမွေဆက်ခံသည်",
    // "Apply"
    apply: "လက်ခံပါ",
    // "OK"
    ok: "အိုကေ",
    // "Save"
    save: "သိမ်းဆည်းပါ",
    // "Clear"
    clear: "ရှင်းလင်းပါ",
    // "Save"
    saveTooltip: "သိမ်းဆည်းပါ",
    // "Cancel"
    cancel: "မလုပ်တော့ပါ",
    // "Set"
    set: "သတ်မှတ်ပါ",
    // "Reset"
    reset: "ပြန်လည်သတ်မှတ်ပါ",
    // "Change"
    change: "ပြောင်းလဲပါ",
    // "Refresh"
    refresh: "နောက်ဆုံးသတ်မှတ်မှု",
    // "Close"
    close: "ပိတ်ပါ",
    // "Delete"
    delete: "ဖျက်ပါ",
    // "Add"
    add: "ထည့်ပါ",
    // "Add New"
    addNew: "အသစ်ထည့်ပါ",
    // "Click to add an item..."
    addItem: "အရာတစ်ခုထည့်ရန်နှိပ်ပါ...",
    // "Click to remove the item..."
    removeItem: "အရာကိုဖျက်ရန်နှိပ်ပါ...",
    // "Drag the item"
    dragItem: "အရာကိုဆွဲပါ",
    // "Other"
    addOther: "အခြား",
    // "Select All"
    addSelectAll: "အားလုံးရွေးပါ",
    // "None"
    addNone: "မရှိပါ",
    // "Remove All"
    removeAll: "အားလုံးဖျက်ပါ",
    // "Edit"
    edit: "တည်းဖြတ်ပါ",
    // "Return without saving"
    back: "သိမ်းဆည်းမှုမရှိဘဲပြန်သွားပါ",
    // "Return without saving"
    backTooltip: "သိမ်းဆည်းမှုမရှိဘဲပြန်သွားပါ",
    // "Save and return"
    saveAndBack: "သိမ်းဆည်းပြီးပြန်သွားပါ",
    // "Save and return"
    saveAndBackTooltip: "သိမ်းဆည်းပြီးပြန်သွားပါ",
    // "Done"
    doneEditing: "ပြီးသွားသည်",
    // "Edit Choices"
    editChoices: "ရွေးချယ်မှုများကိုတည်းဖြတ်ပါ",
    // "Show Choices"
    showChoices: "ရွေးချယ်မှုများကိုပြပါ",
    // "Move"
    move: "ရွှေ့ပါ",
    // "<empty>"
    empty: "<ဗလာ>",
    // "Value is empty"
    emptyValue: "တန်ဖိုးသည်ဗလာဖြစ်သည်",
    // "Manual Entry"
    fastEntry: "ကိုယ်တိုင်ရိုက်ထည့်သည်",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "တန်ဖိုး '{0}' သည်ထူးခြားမှုမရှိပါ",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "{0} မှ {1} အထိအရာအရေအတွက်ကိုကန့်သတ်ပါ",
    // "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "{0} အရာအနည်းဆုံးရိုက်ထည့်ပါ",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "ရွေးချယ်မှုများနှင့်၎င်းတို့၏ ID များကိုအောက်ပါပုံစံဖြင့်ရိုက်ထည့်ပါ:\n\nid|option\n\nရွေးချယ်မှု ID သည်ဖြေဆိုသူများကိုမမြင်နိုင်ပါ၊ စည်းမျဉ်းများတွင်အသုံးပြုနိုင်သည်။",
    // "Form Entry"
    formEntry: "ပုံစံရိုက်ထည့်ခြင်း",
    // "Test the service"
    testService: "ဝန်ဆောင်မှုကိုစမ်းသပ်ပါ",
    // "Please select the element"
    itemSelectorEmpty: "အရာကိုရွေးချယ်ပါ",
    // "Please select the action"
    conditionActionEmpty: "လုပ်ဆောင်ချက်ကိုရွေးချယ်ပါ",
    // "Select a question..."
    conditionSelectQuestion: "မေးခွန်းကိုရွေးပါ...",
    // "Select a page..."
    conditionSelectPage: "စာမျက်နှာကိုရွေးပါ...",
    // "Select a panel..."
    conditionSelectPanel: "ပန်းနယ်ကိုရွေးပါ...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "တန်ဖိုးကိုရိုက်ထည့်/ရွေးချယ်ပါ",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "ဖော်ပြချက်အတွက်အကြံပြုချက်ရရန် ctrl+space နှိပ်ပါ",
    // "Current row"
    aceEditorRowTitle: "လက်ရှိအတန်း",
    // "Current panel"
    aceEditorPanelTitle: "လက်ရှိပန်းနယ်",
    // "For more details please check the documentation"
    showMore: "အသေးစိတ်အချက်အလက်များအတွက်စာရွက်ကိုကြည့်ပါ",
    // "Available questions"
    assistantTitle: "ရရှိနိုင်သောမေးခွန်းများ",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "အနည်းဆုံးကော်လံတစ်ခု သို့မဟုတ်အတန်းတစ်ခုရှိရမည်",
    // "Review before submit"
    showPreviewBeforeComplete: "ဖြေဆိုမှုမပေးမီကြည့်ရှုပါ",
    // "Enabled by a condition"
    overridingPropertyPrefix: "အခြေအနေအရဖွင့်ထားသည်",
    // "Reset"
    resetToDefaultCaption: "မူလအတိုင်းပြန်ထားပါ",
    // "Please enter a value"
    propertyIsEmpty: "တန်ဖိုးတစ်ခုရိုက်ထည့်ပါ",
    // "Please enter a unique value"
    propertyIsNoUnique: "ထူးခြားမှုရှိသောတန်ဖိုးတစ်ခုရိုက်ထည့်ပါ",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "ထူးခြားသောအမည်ရိုက်ထည့်ပါ",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "\"item\", \"choice\", \"panel\", \"row\" စသည့်အသုံးချထားသောစကားလုံးများကိုမသုံးပါနှင့်။",
    // "You don't have any items yet"
    listIsEmpty: "သင်တွင်မည်သည့်အရာမျှမရှိသေးပါ",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "သင်တွင်မည်သည့်ရွေးချယ်မှုမျှမရှိသေးပါ",
    // "You don't have any columns yet"
    "listIsEmpty@columns": "သင်တွင်မည်သည့်ကော်လံမျှမရှိသေးပါ",
    // "listIsEmpty@gridLayoutColumns": "You don't have layout columns yet",
    "listIsEmpty@rows": "သင်တွင်မည်သည့်အတန်းမျှမရှိသေးပါ",
    // "You don't have any validation rules yet"
    "listIsEmpty@validators": "သင်တွင်မည်သည့်စစ်မှန်မှုစည်းမျဉ်းမရှိသေးပါ",
    // "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "သင်တွင်မည်သည့်စိတ်ကြိုက် variable မျှမရှိသေးပါ",
    // "You don't have any triggers yet"
    "listIsEmpty@triggers": "သင်တွင်မည်သည့် trigger မျှမရှိသေးပါ",
    // "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "သင်တွင်မည်သည့်လင့်မျှမရှိသေးပါ",
    // "You don't have any pages yet"
    "listIsEmpty@pages": "သင်တွင်မည်သည့်စာမျက်နှာမျှမရှိသေးပါ",
    // "Add new choice"
    "addNew@choices": "ရွေးချယ်မှုအသစ်ထည့်ပါ",
    // "Add new column"
    "addNew@columns": "ကော်လံအသစ်ထည့်ပါ",
    // "Add new row"
    "addNew@rows": "အတန်းအသစ်ထည့်ပါ",
    // "Add new rule"
    "addNew@validators": "စည်းမျဉ်းအသစ်ထည့်ပါ",
    // "Add new variable"
    "addNew@calculatedValues": "variable အသစ်ထည့်ပါ",
    // "Add new trigger"
    "addNew@triggers": "trigger အသစ်ထည့်ပါ",
    // "Add new URL"
    "addNew@navigateToUrlOnCondition": "URL အသစ်ထည့်ပါ",
    // "Add new page"
    "addNew@pages": "စာမျက်နှာအသစ်ထည့်ပါ",
    // "Expression is empty"
    expressionIsEmpty: "ဖော်ပြချက်သည်ဗလာဖြစ်သည်",
    // "Value"
    value: "တန်ဖိုး",
    // "Text"
    text: "စာသား",
    // "Row ID"
    rowid: "အတန်း ID",
    // "Image or video file URL"
    imageLink: "ပုံ သို့မဟုတ် ဗီဒီယိုဖိုင် URL",
    // "Edit column: {0}"
    columnEdit: "ကော်လံကိုတည်းဖြတ်ပါ: {0}",
    // "Edit item: {0}"
    itemEdit: "အရာကိုတည်းဖြတ်ပါ: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "ဒေတာသို့ခရီးကြောင်း",
    choicesbyurl: {
      // "Web service URL"
      url: "ဝဘ်ဝန်ဆောင်မှု URL",
      // "Get value to store from the following property"
      valueName: "သိမ်းဆည်းရန်တန်ဖိုးကိုအောက်ပါပိုင်ဆိုင်မှုမှရယူပါ"
    },
    // "Get value to display from the following property"
    titleName: "ပြသရန်တန်ဖိုးကိုအောက်ပါပိုင်ဆိုင်မှုမှရယူပါ",
    // "Get file URLs from the following property"
    imageLinkName: "ဖိုင် URL များကိုအောက်ပါပိုင်ဆိုင်မှုမှရယူပါ",
    // "Accept empty response"
    allowEmptyResponse: "ဗလာဖြေဆိုမှုကိုလက်ခံပါ",
    // "Title"
    titlePlaceholder: "ခေါင်းစဉ်",
    // "Survey Title"
    surveyTitlePlaceholder: "စစ်တမ်းခေါင်းစဉ်",
    // "Page {num}"
    pageTitlePlaceholder: "စာမျက်နှာ {num}",
    // startPageTitlePlaceholder: "Start Page",
    descriptionPlaceholder: "ဖော်ပြချက်",
    // "Description"
    surveyDescriptionPlaceholder: "ဖော်ပြချက်",
    // "Description"
    pageDescriptionPlaceholder: "ဖော်ပြချက်",
    // "Wrap choices"
    textWrapEnabled: "ရွေးချယ်မှုများကိုထုပ်ပိုးပါ",
    // "Enable the \"Other\" option"
    showOtherItem: "\"အခြား\" ရွေးချယ်မှုကိုဖွင့်ပါ",
    // "Rename the \"Other\" option"
    otherText: "\"အခြား\" ရွေးချယ်မှုကိုအမည်ပြောင်းပါ",
    // "Enable the \"None\" option"
    showNoneItem: "\"မရှိ\" ရွေးချယ်မှုကိုဖွင့်ပါ",
    // "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "\"မဖြေဆိုလိုပါ\" ရွေးချယ်မှုကိုဖွင့်ပါ",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "\"မသိပါ\" ရွေးချယ်မှုကိုဖွင့်ပါ",
    // "Rename the \"None\" option"
    noneText: "\"မရှိ\" ရွေးချယ်မှုကိုအမည်ပြောင်းပါ",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "\"အားလုံးရွေးချယ်ပါ\" ရွေးချယ်မှုကိုဖွင့်ပါ",
    // "Rename the \"Select All\" option"
    selectAllText: "\"အားလုံးရွေးချယ်ပါ\" ရွေးချယ်မှုကိုအမည်ပြောင်းပါ",
    // "Minimum value for auto-generated items"
    choicesMin: "အလိုအလျောက်ဖန်တီးထားသောအရာများအတွက်အနည်းဆုံးတန်ဖိုး",
    // "Maximum value for auto-generated items"
    choicesMax: "အလိုအလျောက်ဖန်တီးထားသောအရာများအတွက်အများဆုံးတန်ဖိုး",
    // "Step value for auto-generated items"
    choicesStep: "အလိုအလျောက်ဖန်တီးထားသောအရာများအတွက်အဆင့်တန်ဖိုး",
    // "Name"
    name: "အမည်",
    // "Title"
    title: "ခေါင်းစဉ်",
    // "Cell input type"
    cellType: "အကွက်အမျိုးအစား",
    // "Column count"
    colCount: "ကော်လံအရေအတွက်",
    // "Choice order"
    choicesOrder: "ရွေးချယ်မှုအစီအစဉ်",
    // allowCustomChoices: "Allow custom choices",
    visible: "မြင်သာမှု",
    // "Required"
    isRequired: "လိုအပ်သည်",
    // "Mark as required"
    markRequired: "လိုအပ်သည်ဟုအမှတ်အသားပြုရန်",
    // "Remove the required mark"
    removeRequiredMark: "လိုအပ်သည်အမှတ်အသားကိုဖယ်ရှားပါ",
    // "Require an answer in each row"
    eachRowRequired: "အတန်းတိုင်းတွင်ဖြေဆိုမှုလိုအပ်သည်",
    // "Prevent duplicate responses in rows"
    eachRowUnique: "အတန်းများတွင်ထပ်တူဖြေဆိုမှုကိုတားဆီးပါ",
    // "Error message for required questions"
    requiredErrorText: "လိုအပ်သောမေးခွန်းများအတွက်အမှားစာသား",
    // "Display the question on a new line"
    startWithNewLine: "မေးခွန်းကိုလိုင်းအသစ်တွင်ပြသပါ",
    // "Rows"
    rows: "အတန်းများ",
    // "Columns"
    cols: "ကော်လံများ",
    // "Placeholder text within input field"
    placeholder: "အကွက်အတွင်း placeholder စာသား",
    // "Show preview area"
    showPreview: "ကြိုတင်ကြည့်ရှုဧရိယာပြရန်",
    // "Store file content in JSON result as text"
    storeDataAsText: "ဖိုင်အကြောင်းအရာကို JSON ရလဒ်အနေဖြင့်စာသားအဖြစ်သိမ်းဆည်းပါ",
    // "Maximum file size (in bytes)"
    maxSize: "ဖိုင်အရွယ်အစားအများဆုံး (bytes)",
    // "Row count"
    rowCount: "အတန်းအရေအတွက်",
    // "Columns layout"
    columnLayout: "ကော်လံအစီအစဉ်",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "\"အတန်းထည့်ပါ\" ခလုတ်တည်နေရာ",
    // "Transpose rows to columns"
    transposeData: "အတန်းများကိုကော်လံများသို့ပြောင်းလဲပါ",
    // "\"Add Row\" button text"
    addRowText: "\"အတန်းထည့်ပါ\" ခလုတ်စာသား",
    // "\"Remove Row\" button text"
    removeRowText: "\"အတန်းဖျက်ပါ\" ခလုတ်စာသား",
    // singleInputTitleTemplate: "Input field title pattern",
    rateMin: "အနည်းဆုံးအဆင့်သတ်မှတ်တန်ဖိုး",
    // "Maximum rating value"
    rateMax: "အများဆုံးအဆင့်သတ်မှတ်တန်ဖိုး",
    // "Step value"
    rateStep: "အဆင့်တန်ဖိုး",
    // "Minimum value label"
    minRateDescription: "အနည်းဆုံးတန်ဖိုးတန်းလုံး",
    // "Maximum value label"
    maxRateDescription: "အများဆုံးတန်ဖိုးတန်းလုံး",
    // "Input type"
    inputType: "အဝင်အမျိုးအစား",
    // "Default Answer"
    defaultValue: "ပုံမှန်ဖြေဆိုမှု",
    // "Default texts"
    cellsDefaultRow: "ပုံမှန်စာသားများ",
    // "Edit survey settings"
    surveyEditorTitle: "စစ်တမ်းဆက်တင်များကိုတည်းဖြတ်ပါ",
    // "Edit: {0}"
    qEditorTitle: "တည်းဖြတ်ပါ: {0}",
    // "Maximum character limit"
    maxLength: "အက္ခရာအများဆုံးကန့်သတ်ချက်",
    // "Build"
    buildExpression: "ဖန်တီးပါ",
    // "Edit"
    editExpression: "တည်းဖြတ်ပါ",
    // "and"
    and: "နှင့်",
    // "or"
    or: "သို့မဟုတ်",
    // "Remove"
    remove: "ဖယ်ရှားပါ",
    // "Add Condition"
    addCondition: "အခြေအနေထည့်ပါ",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "အခြေအနေများကိုဖန်တီးရန်မေးခွန်းတစ်ခုကိုရွေးပါ။",
    // "If"
    if: "ထိုအခါ",
    // "then"
    then: "ပြီးနောက်",
    // "Target question"
    setToName: "ရည်မှန်းမေးခွန်း",
    // "Question to copy answer from"
    fromName: "ဖြေဆိုမှုကိုကူးယူမည့်မေးခွန်း",
    // "Question to skip to"
    gotoName: "ကျော်သွားမည့်မေးခွန်း",
    // "Rule is incorrect"
    ruleIsNotSet: "စည်းမျဉ်းမမှန်ကန်ပါ",
    // "Add to the survey results"
    includeIntoResult: "စစ်တမ်းရလဒ်တွင်ထည့်ပါ",
    // "Make the title and description visible"
    showTitle: "ခေါင်းစဉ်နှင့်ဖော်ပြချက်ကိုမြင်သာစေပါ",
    // "Expand/collapse title"
    expandCollapseTitle: "ခေါင်းစဉ်ကိုချဲ့/ကျယ်အောင်ပြုလုပ်ပါ",
    // "Select a survey language"
    locale: "စစ်တမ်းဘာသာစကားရွေးပါ",
    // "Select device type"
    simulator: "စက်ပစ္စည်းအမျိုးအစားရွေးချယ်ပါ",
    // "Switch to landscape orientation"
    landscapeOrientation: "လျှာအနေအထားသို့ပြောင်းပါ",
    // "Switch to portrait orientation"
    portraitOrientation: "ရုပ်ပုံအနေအထားသို့ပြောင်းပါ",
    // "Clear hidden question values"
    clearInvisibleValues: "မမြင်သာသောမေးခွန်းတန်ဖိုးများကိုရှင်းလင်းပါ",
    // "Limit to one response"
    cookieName: "တစ်ဖြေဆိုသူအပေါ်ကန့်သတ်",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "စာမျက်နှာပြောင်းလဲမှုတွင်စစ်တမ်းတိုးတက်မှုကိုအလိုအလျောက်သိမ်းဆည်းပါ",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "\"အခြား\" ရွေးချယ်မှုတန်ဖိုးကိုအခြား property အနေဖြင့်သိမ်းဆည်းပါ",
    // "Show page titles"
    showPageTitles: "စာမျက်နှာခေါင်းစဉ်များကိုပြပါ",
    // "Show page numbers"
    showPageNumbers: "စာမျက်နှာနံပါတ်များကိုပြပါ",
    // "\"Previous Page\" button text"
    pagePrevText: "\"ယခင်စာမျက်နှာ\" ခလုတ်စာသား",
    // "\"Next Page\" button text"
    pageNextText: "\"နောက်စာမျက်နှာ\" ခလုတ်စာသား",
    // "\"Complete Survey\" button text"
    completeText: "\"စစ်တမ်းပြီးစီးပါ\" ခလုတ်စာသား",
    // "\"Review Answers\" button text"
    previewText: "\"ဖြေဆိုမှုများကိုကြည့်ရှုပါ\" ခလုတ်စာသား",
    // "\"Edit Answer\" button text"
    editText: "\"ဖြေဆိုမှုကိုတည်းဖြတ်ပါ\" ခလုတ်စာသား",
    // "\"Start Survey\" button text"
    startSurveyText: "\"စစ်တမ်းစတင်ပါ\" ခလုတ်စာသား",
    // "Show navigation buttons"
    showNavigationButtons: "တည်ဆောင်ခလုတ်များကိုပြ/ဖျောက်ပါ",
    // navigationButtonsLocation: "Navigation buttons alignment",
    showPrevButton: "\"ယခင်စာမျက်နှာ\" ခလုတ်ကိုပြပါ",
    // "First page is a start page"
    firstPageIsStartPage: "ပထမစာမျက်နှာသည်စတင်စာမျက်နှာဖြစ်သည်",
    // "Show the \"Thank You\" page"
    showCompletePage: "\"ကျေးဇူးတင်\" စာမျက်နှာကိုပြပါ",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "နောက်စာမျက်နှာသို့အလိုအလျောက်ဆက်လက်သွားပါ",
    // "Complete the survey automatically"
    autoAdvanceAllowComplete: "စစ်တမ်းကိုအလိုအလျောက်ပြီးစီးစေပါ",
    // "Show the progress bar"
    showProgressBar: "တိုးတက်မှုဘားတည်နေရာ",
    // progressBarLocation: "Progress bar alignment",
    questionTitleLocation: "မေးခွန်းခေါင်းစဉ်တည်နေရာ",
    // "Question title width"
    questionTitleWidth: "မေးခွန်းခေါင်းစဉ်အကျယ်",
    // "Required symbol(s)"
    requiredMark: "လိုအပ်သည့်အမှတ်အသားများ",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "မေးခွန်းခေါင်းစဉ်ပုံစံ, ပုံမှန်မှာ: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "အမှားစာတန်းတည်နေရာ",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "စာမျက်နှာအသစ်တွင်ပထမဆုံးမေးခွန်းကိုအာရုံစိုက်ပါ",
    // "Question order"
    questionOrder: "မေးခွန်းအစီအစဉ်",
    // "Time limit to complete the survey"
    timeLimit: "စစ်တမ်းပြီးစီးရန်အချိန်ကန့်သတ်",
    // "Time limit to complete one page"
    timeLimitPerPage: "စာမျက်နှာတစ်ခုပြီးစီးရန်အချိန်ကန့်သတ်",
    // "Use a timer"
    showTimer: "အချိန်တိုင်းကိရိယာကိုအသုံးပြုပါ",
    // "Timer alignment"
    timerLocation: "အချိန်တိုင်းကိရိယာတည်နေရာ",
    // "Timer mode"
    timerInfoMode: "အချိန် mode",
    // "Enable entry addition"
    allowAddPanel: "ပန်းနယ်ထည့်ရန်ဖွင့်ပါ",
    // "Enable entry removal"
    allowRemovePanel: "ပန်းနယ်ဖျက်ရန်ဖွင့်ပါ",
    // "\"Add Entry\" button text"
    addPanelText: "\"ပန်းနယ်ထည့်ပါ\" ခလုတ်စာသား",
    // "\"Remove Entry\" button text"
    removePanelText: "\"ပန်းနယ်ဖျက်ပါ\" ခလုတ်စာသား",
    // "Show all elements on one page"
    isSinglePage: "အရာအားလုံးကိုတစ်စာမျက်နှာတွင်ပြပါ",
    // "HTML markup"
    html: "HTML ဖွဲ့စည်းမှု",
    // "Answer"
    setValue: "ဖြေဆိုမှု",
    // "Storage format"
    dataFormat: "သိမ်းဆည်းမှုပုံစံ",
    // "Enable row addition"
    allowAddRows: "အတန်းထည့်ရန်ဖွင့်ပါ",
    // "Enable row removal"
    allowRemoveRows: "အတန်းဖျက်ရန်ဖွင့်ပါ",
    // "Enable row reordering"
    allowRowReorder: "အတန်းများကိုပြောင်းရွှေ့နိုင်သည်",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "သင့်တိတိအကျယ် သို့မဟုတ်အမြင့်ကိုသတ်မှတ်မထားလျှင်လက်ခံမည်မဟုတ်ပါ။",
    // "Minimum display area width"
    minImageWidth: "အနည်းဆုံးပုံအကျယ်",
    // "Maximum display area width"
    maxImageWidth: "အများဆုံးပုံအကျယ်",
    // "Minimum display area height"
    minImageHeight: "အနည်းဆုံးပုံအမြင့်",
    // "Maximum display area height"
    maxImageHeight: "အများဆုံးပုံအမြင့်",
    // "Minimum value"
    minValue: "အနည်းဆုံးတန်ဖိုး",
    // "Maximum value"
    maxValue: "အများဆုံးတန်ဖိုး",
    // "Case insensitive"
    caseInsensitive: "အရေးအသားမလိုအပ်ပါ",
    // "Minimum length (in characters)"
    minLength: "အနည်းဆုံးအရှည် (အက္ခရာဖြင့်)",
    // "Allow digits"
    allowDigits: "ဂဏန်းများကိုခွင့်ပြုပါ",
    // "Minimum count"
    minCount: "အနည်းဆုံးအရေအတွက်",
    // "Maximum count"
    maxCount: "အများဆုံးအရေအတွက်",
    // "Regular expression"
    regex: "ပုံမှန်ဖော်ပြချက်",
    surveyvalidator: {
      // "Error message"
      text: "အမှားစာတန်း",
      // "Validation expression"
      expression: "စစ်မှန်မှုဖော်ပြချက်"
    },
    // "Total row header"
    totalText: "စုစုပေါင်းအတန်းခေါင်းစဉ်",
    // "Aggregation method"
    totalType: "စုစုပေါင်းနည်းလမ်း",
    // "Total value expression"
    totalExpression: "စုစုပေါင်းတန်ဖိုးဖော်ပြချက်",
    // "Total value display format"
    totalDisplayStyle: "စုစုပေါင်းတန်ဖိုးပြသမှုပုံစံ",
    // "Currency"
    totalCurrency: "ငွေကြေး",
    // "Formatted string"
    totalFormat: "ဖော်မတ်ထားသော string",
    // "Survey logo"
    logo: "စစ်တမ်းလိုဂို",
    // "Survey layout"
    questionsOnPageMode: "စစ်တမ်းအကွာအဝေး",
    // "Restrict answer length"
    maxTextLength: "ဖြေဆိုမှုအရှည်ကိုကန့်သတ်ပါ",
    // "Restrict comment length"
    maxCommentLength: "မှတ်ချက်အရှည်ကိုကန့်သတ်ပါ",
    // "Comment area height (in lines)"
    commentAreaRows: "မှတ်ချက်ဧရိယာအမြင့် (လိုင်းများဖြင့်)",
    // "Auto-expand text areas"
    autoGrowComment: "မှတ်ချက်ဧရိယာကိုအလိုအလျောက်ချဲ့ပါ",
    // "Allow users to resize text areas"
    allowResizeComment: "အသုံးပြုသူများအားမှတ်ချက်ဧရိယာအရွယ်အစားပြောင်းနိုင်ခွင့်ပြုပါ",
    // "Update input field values"
    textUpdateMode: "အကွက်တန်ဖိုးများကိုမွမ်းမံပါ",
    // "Input mask type"
    maskType: "အဝင် mask အမျိုးအစား",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "ပထမဆုံးမမှန်ကန်သောဖြေဆိုမှုကိုအာရုံစိုက်ပါ",
    // "Run validation"
    checkErrorsMode: "စစ်မှန်မှုပြုလုပ်ပါ",
    // "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "လွတ်လပ်သောအကွက်များကိုအာရုံစိုက်မှုဆုံးရှုံးပြီးနောက်စစ်ဆေးပါ",
    // "Redirect to an external link after submission"
    navigateToUrl: "တင်သွင်းပြီးနောက်ပြင်ပလင့်သို့ပြောင်းရွှေ့ပါ",
    // "Dynamic external link"
    navigateToUrlOnCondition: "ဒိုင်နမစ်ပြင်ပလင့်",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "စစ်တမ်းကိုအပြီးသတ်ပြီးဖြစ်ပါကပြသရန်အမှတ်အသား",
    // "\"Thank You\" page markup"
    completedHtml: "\"ကျေးဇူးတင်\" စာမျက်နှာအမှတ်အသား",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "ဒိုင်နမစ် \"ကျေးဇူးတင်\" စာမျက်နှာအမှတ်အသား",
    // "Markup to show while survey model is loading"
    loadingHtml: "စစ်တမ်းမော်ဒယ်တင်နေစဉ်ပြသရန်အမှတ်အသား",
    // "Comment area text"
    commentText: "မှတ်ချက်ဧရိယာစာသား",
    // "Autocomplete type"
    autocomplete: "အလိုအလျောက်ပြည့်စုံမှုအမျိုးအစား",
    // "Label for \"True\""
    labelTrue: "\"မှန်\" အတွက်တံဆိပ်",
    // "Label for \"False\""
    labelFalse: "\"မှား\" အတွက်တံဆိပ်",
    // "Show the Clear button"
    allowClear: "ရှင်းလင်းမှုခလုတ်ကိုပြပါ",
    // "Search Mode"
    searchMode: "ရှာဖွေမှု Mode",
    // "Display format"
    displayStyle: "ပြသမှုပုံစံ",
    // "Formatted string"
    format: "ဖော်မတ်ထားသော string",
    // "Maximum fractional digits"
    maximumFractionDigits: "အများဆုံးဒသမအခန်းကဏ္ဍ",
    // "Minimum fractional digits"
    minimumFractionDigits: "အနည်းဆုံးဒသမအခန်းကဏ္ဍ",
    // "Display grouping separators"
    useGrouping: "အုပ်စုခွဲရန်ကွာခြားစရာပြသပါ",
    // "Enable multiple file upload"
    allowMultiple: "မည်သည့်ဖိုင်များကိုတင်နိုင်ရန်ခွင့်ပြုပါ",
    // "Preview uploaded images"
    allowImagesPreview: "တင်ထားသောပုံများကိုကြိုတင်ကြည့်ရှုပါ",
    // "Accepted file types"
    acceptedTypes: "လက်ခံနိုင်သောဖိုင်အမျိုးအစားများ",
    // "Wait for upload to complete"
    waitForUpload: "တင်ပို့မှုပြီးစီးရန်စောင့်ပါ",
    // "Confirm file deletion"
    needConfirmRemoveFile: "ဖိုင်ဖျက်မှုကိုအတည်ပြုပါ",
    // "Row details alignment"
    detailPanelMode: "အတန်းချဲ့မှုတည်နေရာ",
    // "Minimum row count"
    minRowCount: "အနည်းဆုံးအတန်းအရေအတွက်",
    // "Maximum row count"
    maxRowCount: "အများဆုံးအတန်းအရေအတွက်",
    // "Confirm row removal"
    confirmDelete: "အတန်းဖျက်ခြင်းကိုအတည်ပြုပါ",
    // "Confirmation message"
    confirmDeleteText: "အတည်ပြုစာသား",
    // "Initial number of entries"
    panelCount: "အစပိုင်းပန်းနယ်အရေအတွက်",
    // "Minimum number of entries"
    minPanelCount: "အနည်းဆုံးပန်းနယ်အရေအတွက်",
    // "Maximum number of entries"
    maxPanelCount: "အများဆုံးပန်းနယ်အရေအတွက်",
    // "Initial entry state"
    panelsState: "အတွင်းပိုင်းပန်းနယ်အတိုးအကျိုးအခြေအနေ",
    // "\"Previous Entry\" button text"
    prevPanelText: "\"ယခင်ပန်းနယ်\" ခလုတ်စာသား",
    // "\"Next Entry\" button text"
    nextPanelText: "\"နောက်ပန်းနယ်\" ခလုတ်စာသား",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "\"ပန်းနယ်ဖျက်ပါ\" ခလုတ်တည်နေရာ",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "အတန်းများမရှိပါကမေးခွန်းကိုဖျောက်ပါ",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "အတန်းများမရှိပါကကော်လံများကိုဖျောက်ပါ",
    // "Custom rating values"
    rateValues: "စိတ်ကြိုက်အဆင့်သတ်မှတ်တန်ဖိုးများ",
    // "Rating count"
    rateCount: "အဆင့်သတ်မှတ်တန်ဖိုးအရေအတွက်",
    // "Rating configuration"
    autoGenerate: "အဆင့်သတ်မှတ်ဖွဲ့စည်းမှု",
    slider: {

    },
    file: {

    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "ရွေးချယ်မှုများမရှိပါကမေးခွန်းကိုဖျောက်ပါ",
    // "Minimum width"
    minWidth: "အနည်းဆုံးအကျယ်",
    // "Maximum width"
    maxWidth: "အများဆုံးအကျယ်",
    // "Width"
    width: "အကျယ်",
    // "Show column headers"
    showHeader: "ကော်လံခေါင်းစဉ်များကိုပြပါ",
    // "Show horizontal scrollbar"
    horizontalScroll: "အလျားလိုက် scroll bar ကိုပြပါ",
    // "Minimum column width"
    columnMinWidth: "အနည်းဆုံးကော်လံအကျယ်",
    // "Row header width"
    rowTitleWidth: "အတန်းခေါင်းစဉ်အကျယ်",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"မှန်\" ကိုရွေးချယ်သည့်အခါသိမ်းဆည်းရန်တန်ဖိုး",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"မှား\" ကိုရွေးချယ်သည့်အခါသိမ်းဆည်းရန်တန်ဖိုး",
    // "\"Value is below minimum\" error message"
    minErrorText: "\"တန်ဖိုးသည်အနည်းဆုံးမီမနေပါ\" အမှားစာသား",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"တန်ဖိုးသည်အများဆုံးကျော်လွန်နေသည်\" အမှားစာသား",
    // "\"Empty comment\" error message"
    otherErrorText: "\"မှတ်ချက်ဗလာ\" အမှားစာသား",
    // "Error message for duplicate responses"
    keyDuplicationError: "ထပ်တူဖြေဆိုမှုအတွက်အမှားစာသား",
    // "Minimum choices to select"
    minSelectedChoices: "ရွေးချယ်မှုအနည်းဆုံးအရေအတွက်",
    // "Maximum choices to select"
    maxSelectedChoices: "ရွေးချယ်မှုအများဆုံးအရေအတွက်",
    // "Logo width"
    logoWidth: "လိုဂိုအကျယ်",
    // "Logo height"
    logoHeight: "လိုဂိုအမြင့်",
    // "Read-only"
    readOnly: "ဖတ်ရုံသာ",
    // "Disable the read-only mode if"
    enableIf: "ဖတ်ရုံသာ mode ကိုပိတ်ပါ",
    // "\"No rows\" message"
    noRowsText: "\"အတန်းမရှိ\" စာသား",
    // "Separate special choices"
    separateSpecialChoices: "အထူးရွေးချယ်မှုများကိုခွဲခြားပါ",
    // "Copy choices from the following question"
    choicesFromQuestion: "အောက်ပါမေးခွန်းမှရွေးချယ်မှုများကိုကူးပါ",
    // "Which choice options to copy"
    choicesFromQuestionMode: "မည်သည့်ရွေးချယ်မှုများကိုကူးမည်",
    // choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts",
    progressBarShowPageTitles: "တိုးတက်မှုဘားတွင်စာမျက်နှာခေါင်းစဉ်များကိုပြပါ",
    // "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "တိုးတက်မှုဘားတွင်စာမျက်နှာနံပါတ်များကိုပြပါ",
    // "Add a comment box"
    showCommentArea: "မှတ်ချက်ဘူးထည့်ပါ",
    // "Placeholder text for the comment box"
    commentPlaceholder: "မှတ်ချက်ဘူးအတွက် placeholder စာသား",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "တန်းလုံးများကိုအဆုံးဆုံးတန်ဖိုးအဖြစ်ပြပါ",
    // "Row order"
    rowOrder: "အတန်းအစီအစဉ်",
    // "Column layout"
    columnsLayout: "ကော်လံအစီအစဉ်",
    // "Nested column count"
    columnColCount: "nested ကော်လံအရေအတွက်",
    // "Correct Answer"
    correctAnswer: "မှန်ကန်သောဖြေဆိုမှု",
    // "Default Values"
    defaultPanelValue: "ပုံမှန်တန်ဖိုးများ",
    // "Cell Texts"
    cells: "အကွက်စာသားများ",
    // "Select a file or paste a file link..."
    fileInputPlaceholder: "ဖိုင်ကိုရွေးချယ်ပါ သို့မဟုတ် ဖိုင်လင့်ကိုကူးထည့်ပါ...",
    // "Prevent duplicate responses in the following column"
    keyName: "အောက်ပါကော်လံတွင်ထပ်တူဖြေဆိုမှုကိုတားဆီးပါ",
    itemvalue: {
      // "Make the option visible if"
      visibleIf: "ရွေးချယ်မှုကိုမြင်သာစေပါ",
      // "Make the option selectable if"
      enableIf: "ရွေးချယ်မှုကိုရွေးနိုင်စေပါ"
    },
    "itemvalue@rows": {
      // "Make the row visible if"
      visibleIf: "အတန်းကိုမြင်သာစေပါ",
      // "Make the row editable if"
      enableIf: "အတန်းကိုတည်းဖြတ်နိုင်စေပါ"
    },
    imageitemvalue: {
      // "Alt text"
      text: "ပုံဆိုင်ရာစာသား (Alt text)"
    },
    // "Logo alignment"
    logoPosition: "လိုဂိုတည်နေရာ",
    // "Add logo..."
    addLogo: "လိုဂိုထည့်ပါ...",
    // "Change logo..."
    changeLogo: "လိုဂိုပြောင်းပါ...",
    logoPositions: {
      // "Remove logo"
      none: "လိုဂိုဖျက်ပါ",
      // "Left"
      left: "ဘယ်",
      // "Right"
      right: "ညာ",
      // "On the top"
      top: "အပေါ်တွင်",
      // "In the bottom"
      bottom: "အောက်တွင်"
    },
    // Creator tabs
    tabs: {
      panel: {
        // "Panel Layout"
        layout: "ပန်းနယ်ပုံစံ"
      },
      // "General"
      general: "အထွေထွေ",
      // "Options"
      fileOptions: "ရွေးချယ်မှုများ",
      // "HTML Editor"
      html: "HTML တည်းဖြတ်ကိရိယာ",
      // "Columns"
      columns: "ကော်လံများ",
      // "Rows"
      rows: "အတန်းများ",
      // "Choice Options"
      choices: "ရွေးချယ်မှုများ",
      // "Items"
      items: "အရာများ",
      // "Visible If"
      visibleIf: "မြင်သာမှု အခြေအနေ",
      // "Editable If"
      enableIf: "ရွေးနိုင်မှု အခြေအနေ",
      // "Required If"
      requiredIf: "လိုအပ်မှု အခြေအနေ",
      // "Rating Values"
      rateValues: "အဆင့်သတ်မှတ်တန်ဖိုးများ",
      // sliderSettings: "Slider Settings",
      choicesByUrl: "ဝဘ်ဝန်ဆောင်မှုမှရွေးချယ်မှုများ",
      // "Default Choices"
      matrixChoices: "ပုံမှန်ရွေးချယ်မှုများ",
      // "Text Inputs"
      multipleTextItems: "စာအဝင်များ",
      // "Numbering"
      numbering: "နံပါတ်ပေးခြင်း",
      // "Validators"
      validators: "စစ်မှန်မှုစီမံခြင်း",
      // "Navigation"
      navigation: "အတန်းဖြတ်သန်းမှု",
      // "Question Settings"
      question: "မေးခွန်းဆက်တင်များ",
      // "Pages"
      pages: "စာမျက်နှာများ",
      // "Quiz Mode"
      timer: "ကွစ်ပြုလုပ်မှု",
      // "Calculated Values"
      calculatedValues: "တွက်ချက်ထားသောတန်ဖိုးများ",
      // "Triggers"
      triggers: "လှုံ့ဆော်မှုများ",
      // "Title template"
      templateTitle: "ခေါင်းစဉ်ပုံစံ",
      // "Totals"
      totals: "စုစုပေါင်းများ",
      // "Conditions"
      logic: "အခြေအနေများ",
      // "Input Mask Settings"
      mask: "အဝင် mask ဆက်တင်များ",
      layout: {
        // "Panel Layout"
        panel: "ပန်းနယ်ပုံစံ",
        // "Layout"
        question: "ပုံစံ",
        // "Layout"
        base: "အခြေခံပုံစံ"
      },
      // "Data"
      data: "ဒေတာ",
      // "Validation"
      validation: "စစ်မှန်မှု",
      // "Individual Cell Texts"
      cells: "အကွက်စာသားများ",
      // "\"Thank You\" Page"
      showOnCompleted: "\"ကျေးဇူးတင်\" စာမျက်နှာ",
      // "Logo in the Survey Header"
      logo: "စစ်တမ်းခေါင်းစဉ်တွင်လိုဂို",
      // "Slider"
      slider: "ဆလိုက်ဒါ",
      // "Expression"
      expression: "ဖော်ပြချက်",
      // "Question Settings"
      questionSettings: "မေးခွန်းဆက်တင်များ",
      // "Header"
      header: "ခေါင်းစီး",
      // "Background"
      background: "နောက်ခံ",
      // "Appearance"
      appearance: "အသွင်အပြင်",
      // "Accent colors"
      accentColors: "အထင်ကျန်အရောင်များ",
      // "Surface background"
      surfaceBackground: "မျက်နှာပြင်နောက်ခံ",
      // "Scaling"
      scaling: "အရွယ်အစားချိန်ညှိခြင်း",
      // "Others"
      others: "အခြား"
    },
    // "Edit property '{0}'"
    editProperty: "ပိုင်ဆိုင်မှု '{0}' ကိုတည်းဖြတ်ပါ",
    // "Items"
    items: "အရာများ",
    // "Make choices visible if"
    choicesVisibleIf: "ရွေးချယ်မှုများကိုမြင်သာစေပါ",
    // "Make choices selectable if"
    choicesEnableIf: "ရွေးချယ်မှုများကိုရွေးနိုင်စေပါ",
    // "Make columns visible if"
    columnsEnableIf: "ကော်လံများကိုမြင်သာစေပါ",
    // "Make rows visible if"
    rowsEnableIf: "အတန်းများကိုမြင်သာစေပါ",
    // "Increase the inner indent"
    innerIndent: "အတွင်းအကွာအဝေးတိုးရန်",
    // "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "နောက်ဆုံးအတန်းမှဖြေဆိုမှုများကိုပုံမှန်အဖြေနှုန်းထားပါ",
    // "Please enter a value."
    enterNewValue: "တန်ဖိုးအသစ်ရိုက်ထည့်ပါ။",
    // "There are no questions in the survey."
    noquestions: "စစ်တမ်းတွင်မေးခွန်းမရှိပါ။",
    // "Please create a trigger"
    createtrigger: "လှုံ့ဆော်မှုတစ်ခုဖန်တီးပါ",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "တည်းဖြတ်ရန် enter ခလုတ်ကိုနှိပ်ပါ",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "အရာတစ်ခုကိုတည်းဖြတ်ရန် enter ကိုနှိပ်ပါ၊ ဖျက်ရန် delete ကိုနှိပ်ပါ၊ အထက်သို့/အောက်သို့ရွှေ့ရန် alt+arrow ကိုနှိပ်ပါ",
    // "On "
    triggerOn: "On",
    // "Make pages visible"
    triggerMakePagesVisible: "စာမျက်နှာများကိုမြင်သာစေပါ",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "အရာများကိုမြင်သာစေပါ",
    // "Complete the survey if successful."
    triggerCompleteText: "စစ်တမ်းကိုအောင်မြင်ပါကပြီးစီးပါ။",
    // "The trigger is not set"
    triggerNotSet: "လှုံ့ဆော်မှုကိုသတ်မှတ်မထားပါ",
    // "Run if"
    triggerRunIf: "အကယ်၍",
    // "Change value of: "
    triggerSetToName: "တန်ဖိုးပြောင်းရန်: ",
    // "Copy value from: "
    triggerFromName: "တန်ဖိုးကိုကူးယူရန်: ",
    // "Run this Expression"
    triggerRunExpression: "ဤဖော်ပြချက်ကို run ပြုလုပ်ပါ",
    // "to: "
    triggerSetValue: "သို့: ",
    // "Go to the question"
    triggerGotoName: "မေးခွန်းသို့သွားပါ",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "variable ကိုစစ်တမ်းရလဒ်တွင်မထည့်ပါနှင့်။",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "တရားဝင်သောဖော်ပြချက်ကိုရိုက်ထည့်ပါ",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "ဖော်ပြချက်ကိုဒီမှာရိုက်ထည့်ပါ...",
    // "No file chosen"
    noFile: "ရွေးချယ်ထားသောဖိုင်မရှိပါ",
    // "Clear hidden question values"
    clearIfInvisible: "မြင်သာမဖြစ်သောမေးခွန်းတန်ဖိုးများကိုရှင်းလင်းပါ",
    // "Store values in the following property"
    valuePropertyName: "အောက်ပါပိုင်ဆိုင်မှုတွင်တန်ဖိုးများကိုသိမ်းဆည်းပါ",
    // "Enable search-as-you-type"
    searchEnabled: "ရှာဖွေရန်ကိုခွင့်ပြုပါ",
    // "Hide selected items"
    hideSelectedItems: "ရွေးချယ်ထားသောအရာများကိုဖျောက်ပါ",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "ရွေးချယ်မှုအပြီး dropdown ကိုပိတ်ပါ",
    // "Vertical alignment within cells"
    verticalAlign: "အကွက်များအတွင်းလိုက်လျောညီထွေ",
    // "Alternate row colors"
    alternateRows: "အတန်းအလှည့်အပြောင်းအလှန်အရောင်",
    // "Make columns visible if"
    columnsVisibleIf: "ကော်လံများကိုမြင်သာစေပါ",
    // "Make rows visible if"
    rowsVisibleIf: "အတန်းများကိုမြင်သာစေပါ",
    // "Placeholder text for the comment box"
    otherPlaceholder: "မှတ်ချက်ဘူးအတွက် placeholder စာသား",
    // "Placeholder text for Local file"
    filePlaceholder: "ဒေသဖိုင်အတွက် placeholder စာသား",
    // "Placeholder text for Camera"
    photoPlaceholder: "ကင်မရာအတွက် placeholder စာသား",
    // "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "ဒေသဖိုင် သို့မဟုတ် ကင်မရာအတွက် placeholder စာသား",
    // "Rating icon"
    rateType: "အဆင့်သတ်မှတ်အိုင်ကွန်",
    // "Ex.: https://api.example.com/books"
    url_placeholder: "ဥပမာ: https://api.example.com/books",
    // "Ex.: categories.fiction"
    path_placeholder: "ဥပမာ: categories.fiction",
    // "Ex.: a)"
    questionStartIndex_placeholder: "ဥပမာ: a)",
    // "Ex.: 6in"
    width_placeholder: "ဥပမာ: 6in",
    // "Ex.: 600px"
    minWidth_placeholder: "ဥပမာ: 600px",
    // "Ex.: 50%"
    maxWidth_placeholder: "ဥပမာ: 50%",
    // "auto"
    imageHeight_placeholder: "auto",
    // "auto"
    imageWidth_placeholder: "auto",
    // itemTitleWidth_placeholder: "Ex.: 100px",
    theme: {
      // "Theme"
      themeName: "အဖွဲ့အစည်း",
      // "Question appearance"
      isPanelless: "မေးခွန်းအသွင်အပြင်",
      // "Background and corner radius"
      editorPanel: "နောက်ခံနှင့်မူးယစ်ထောင့်",
      // "Background and corner radius"
      questionPanel: "နောက်ခံနှင့်မူးယစ်ထောင့်",
      // "Accent color"
      primaryColor: "အထင်ကြီးသောအရောင်",
      // "Panel and question box opacity"
      panelBackgroundTransparency: "ပန်းနယ်နှင့်မေးခွန်းဘောက်စ် transparency",
      // "Input element opacity"
      questionBackgroundTransparency: "အဝင်အကွက် transparency",
      // "Survey font size"
      fontSize: "စစ်တမ်းအကြောင်းအရာ font အရွယ်အစား",
      // "Survey scale factor"
      scale: "စစ်တမ်းအရွယ်အစားချိန်ညှိခြင်း",
      // "Corner radius"
      cornerRadius: "ထောင့်ဝိုင်းဆ",
      // "Advanced mode"
      advancedMode: "အဆင့်မြင့် mode",
      // "Title font"
      pageTitle: "ခေါင်းစဉ် font",
      // "Description font"
      pageDescription: "ဖော်ပြချက် font",
      // "Title font"
      questionTitle: "မေးခွန်းခေါင်းစဉ် font",
      // "Description font"
      questionDescription: "မေးခွန်းဖော်ပြချက် font",
      // "Font"
      editorFont: "Font",
      // "Opacity"
      backgroundOpacity: "Transparency", // Auto-generated string
      // "Survey font family"
      "--sjs-font-family": "စစ်တမ်း font မျိုးစုံ",
      // "Background color"
      "--sjs-general-backcolor-dim": "နောက်ခံအရောင်",
      // "Accent background colors"
      "--sjs-primary-backcolor": "အထင်ကြီးသောနောက်ခံအရောင်များ",
      // "Accent foreground colors"
      "--sjs-primary-forecolor": "အထင်ကြီးသောနောက်ဆုံးအရောင်များ",
      // "Error message colors"
      "--sjs-special-red": "အမှားစာတန်းအရောင်များ",
      // "Shadow effects"
      "--sjs-shadow-small": "အရိပ်သက်ရောက်မှုများ",
      // "Shadow effects"
      "--sjs-shadow-inner": "အရိပ်သက်ရောက်မှုများ",
      // "Colors"
      "--sjs-border-default": "အရောင်များ"
    },
    "header@header": {
      // "View"
      headerView: "ကြည့်ရှုမှု",
      // "Logo alignment"
      logoPosition: "လိုဂိုတည်နေရာ",
      // "Survey title font"
      surveyTitle: "စစ်တမ်းခေါင်းစဉ် font",
      // "Survey description font"
      surveyDescription: "စစ်တမ်းဖော်ပြချက် font",
      // "Survey title font"
      headerTitle: "စစ်တမ်းခေါင်းစဉ် font",
      // "Survey description font"
      headerDescription: "စစ်တမ်းဖော်ပြချက် font",
      // "Content area width"
      inheritWidthFrom: "အကြောင်းအရာဧရိယာအကျယ်",
      // "Text width"
      textAreaWidth: "စာသားအကျယ်",
      // "Background color"
      backgroundColorSwitch: "နောက်ခံအရောင်",
      // "Background image"
      backgroundImage: "နောက်ခံပုံ",
      // "Opacity"
      backgroundImageOpacity: "Transparency",
      // "Overlap"
      overlapEnabled: "ကျော်ဖြတ်",
      // "Logo alignment"
      logoPositionX: "လိုဂိုတည်နေရာ",
      // "Survey title alignment"
      titlePositionX: "စစ်တမ်းခေါင်းစဉ်တည်နေရာ",
      // "Survey description alignment"
      descriptionPositionX: "စစ်တမ်းဖော်ပြချက်တည်နေရာ"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "မှန်",
    // "false"
    "false": "မမှန်",
    // "Local file"
    file: "ဒေသဖိုင်",
    // "Camera"
    camera: "ကင်မရာ",
    // "Local file or Camera"
    "file-camera": "ဒေသဖိုင် သို့မဟုတ် ကင်မရာ",
    // "Inherit"
    inherit: "အမွေဆက်ခံပါ",
    // "Visible"
    show: "မြင်သာသော",
    // "Hidden"
    hide: "ဖျောက်ထားသော",
    // "Inherit"
    default: "အမွေခံပါ",
    // "Initial"
    initial: "အစပိုင်း",
    // "Random"
    random: "ဆန့်ကျင်မှုမရှိ",
    // "Collapsed"
    collapsed: "ချုံ့ထားသည်",
    // "Expanded"
    expanded: "ချဲ့ထားသည်",
    // "None"
    none: "မရှိပါ",
    // "Ascending"
    asc: "အဆင့်စဉ်သည့်",
    // "Descending"
    desc: "အဆင့်လျော့သည့်",
    // "Indeterminate"
    indeterminate: "မသတ်မှတ်ရသေးသော",
    // "Selected"
    selected: "ရွေးချယ်ထားသော",
    // "Unselected"
    unselected: "မရွေးချယ်ထားသော",
    // "decimal"
    decimal: "ဒသမ",
    // "currency"
    currency: "ငွေကြေး",
    // "percent"
    percent: "ရာခိုင်နှုန်း",
    // "First panel is expanded"
    firstExpanded: "ပထမပန်းနယ်ကိုချဲ့ထားသည်",
    // "Hide question numbers"
    off: "မေးခွန်းနံပါတ်များကိုဖျောက်ထားပါ",
    // "List"
    list: "စာရင်း",
    // "Carousel"
    carousel: "ကာရုဆဲလ်",
    // "Tabs"
    tab: "Tabs",
    // "Panel navigator + Progress bar at the top"
    progressTop: "ပန်းနယ်နာဗီဂေတာ + တိုးတက်မှုဘားအပေါ်တွင်",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "ပန်းနယ်နာဗီဂေတာ + တိုးတက်မှုဘားအောက်တွင်",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "ပန်းနယ်နာဗီဂေတာ + တိုးတက်မှုဘားအပေါ်နှင့်အောက်တွင်",
    // "Horizontal"
    horizontal: "အလျားလိုက်",
    // "Vertical"
    vertical: "ဒေါင်လိုက်",
    // "Top"
    top: "အပေါ်",
    // "Bottom"
    bottom: "အောက်",
    // "Top and bottom"
    topBottom: "အပေါ်နှင့်အောက်",
    // "Both"
    both: "နှစ်ခုလုံး",
    // "Left"
    left: "ဘယ်",
    // "Right"
    right: "ညာ",
    // "Center"
    center: "အလယ်",
    // "Left and right"
    leftRight: "ဘယ်နှင့်ညာ",
    // "Middle"
    middle: "အလယ်အလတ်",
    // "color"
    color: "အရောင်",
    // "date"
    date: "ရက်စွဲ",
    // "datetime"
    datetime: "ရက်စွဲနှင့်အချိန်",
    // "datetime-local"
    "datetime-local": "ဒေသဆိုင်ရာရက်စွဲနှင့်အချိန်",
    // "email"
    email: "အီးမေးလ်",
    // "month"
    month: "လ",
    // "number"
    number: "နံပါတ်",
    // "password"
    password: "စကားဝှက်",
    // "range"
    range: "အကွာအဝေး",
    // "tel"
    tel: "ဖုန်းနံပါတ်",
    // "text"
    text: "စာသား",
    // "time"
    time: "အချိန်",
    // "url"
    url: "URL",
    // "week"
    week: "အပတ်",
    // "Hidden"
    hidden: "ဖျောက်ထားသည်",
    // "Editable"
    edit: "တည်းဖြတ်နိုင်သော",
    // "Read-only"
    display: "ဖတ်ရုံသာ",
    // "Contain"
    contain: "ပါဝင်ပါ",
    // "Cover"
    cover: "အုပ်ထားပါ",
    // "Fill"
    fill: "ဖြည့်ပါ",
    // "Next"
    next: "နောက်တစ်ခု",
    // "Last"
    last: "နောက်ဆုံး",
    // "Upon survey completion"
    onComplete: "စစ်တမ်းပြီးစီးသောအခါ",
    // "When question gets hidden"
    onHidden: "မေးခွန်းကိုဖျောက်သောအခါ",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "မေးခွန်း သို့မဟုတ် ၎င်း၏ပန်းနယ်/စာမျက်နှာကိုဖျောက်သောအခါ",
    clearInvisibleValues: {
      // "Never"
      none: "ဘယ်တော့မှမလုပ်ပါ"
    },
    clearIfInvisible: {
      // "Never"
      none: "ဘယ်တော့မှမလုပ်ပါ"
    },
    // radio: "Radio Buttons",
    inputType: {
      // "Color"
      color: "အရောင်",
      // "Date"
      date: "ရက်စွဲ",
      // "Date and Time"
      "datetime-local": "ရက်စွဲနှင့်အချိန်",
      // "Email"
      email: "အီးမေးလ်",
      // "Month"
      month: "လ",
      // "Number"
      number: "နံပါတ်",
      // "Password"
      password: "စကားဝှက်",
      // "Range"
      range: "အကွာအဝေး",
      // "Phone Number"
      tel: "ဖုန်းနံပါတ်",
      // "Text"
      text: "စာသား",
      // "Time"
      time: "အချိန်",
      // "URL"
      url: "URL",
      // "Week"
      week: "အပတ်"
    },
    sliderType: {

    },
    autocomplete: {
      // "Full Name"
      name: "အမည်အပြည့်အစုံ",
      // "Prefix"
      "honorific-prefix": "ဆက်ဆံကိန်း (Prefix)",
      // "First Name"
      "given-name": "နာမည်",
      // "Middle Name"
      "additional-name": "အလယ်နာမည်",
      // "Last Name"
      "family-name": "မျိုးနွယ်နာမည်",
      // "Suffix"
      "honorific-suffix": "ဆက်ဆံကိန်း (Suffix)",
      // "Nickname"
      nickname: "အခေါ်အမည်",
      // "Job Title"
      "organization-title": "အလုပ်အကိုင်",
      // "User Name"
      username: "အသုံးပြုသူအမည်",
      // "New Password"
      "new-password": "စကားဝှက်အသစ်",
      // "Current Password"
      "current-password": "လက်ရှိစကားဝှက်",
      // "Organization Name"
      organization: "အဖွဲ့အစည်းအမည်",
      // "Full Street Address"
      "street-address": "လမ်းလိပ်စာအပြည့်အစုံ",
      // "Address Line 1"
      "address-line1": "လိပ်စာလိုင်း ၁",
      // "Address Line 2"
      "address-line2": "လိပ်စာလိုင်း ၂",
      // "Address Line 3"
      "address-line3": "လိပ်စာလိုင်း ၃",
      // "Level 4 Address"
      "address-level4": "အဆင့် ၄ လိပ်စာ",
      // "Level 3 Address"
      "address-level3": "အဆင့် ၃ လိပ်စာ",
      // "Level 2 Address"
      "address-level2": "အဆင့် ၂ လိပ်စာ",
      // "Level 1 Address"
      "address-level1": "အဆင့် ၁ လိပ်စာ",
      // "Country Code"
      country: "နိုင်ငံကုဒ်",
      // "Country Name"
      "country-name": "နိုင်ငံအမည်",
      // "Postal Code"
      "postal-code": "စာတိုက်ကုဒ်",
      // "Cardholder Name"
      "cc-name": "ကတ်ကိုင်ရှင်အမည်",
      // "Cardholder First Name"
      "cc-given-name": "ကတ်ကိုင်ရှင်နာမည်",
      // "Cardholder Middle Name"
      "cc-additional-name": "ကတ်ကိုင်ရှင်အလယ်နာမည်",
      // "Cardholder Last Name"
      "cc-family-name": "ကတ်ကိုင်ရှင်မျိုးနွယ်နာမည်",
      // "Credit Card Number"
      "cc-number": "ခရက်ဒစ်ကတ်နံပါတ်",
      // "Expiration Date"
      "cc-exp": "သက်တမ်းကုန်ဆုံးရက်",
      // "Expiration Month"
      "cc-exp-month": "သက်တမ်းကုန်ဆုံးလ",
      // "Expiration Year"
      "cc-exp-year": "သက်တမ်းကုန်ဆုံးနှစ်",
      // "Card Security Code"
      "cc-csc": "ကတ်လုံခြုံရေးကုဒ်",
      // "Credit Card Type"
      "cc-type": "ခရက်ဒစ်ကတ်အမျိုးအစား",
      // "Transaction Currency"
      "transaction-currency": "ငွေလဲနှုန်း",
      // "Transaction Amount"
      "transaction-amount": "ငွေပမာဏ",
      // "Preferred Language"
      language: "နှစ်သက်သောဘာသာစကား",
      // "Birthday"
      bday: "မွေးနေ့",
      // "Birthday Day"
      "bday-day": "မွေးနေ့ရက်",
      // "Birthday Month"
      "bday-month": "မွေးနေ့လ",
      // "Birthday Year"
      "bday-year": "မွေးနေ့နှစ်",
      // "Gender"
      sex: "ကျား/မ",
      // "Website URL"
      url: "ဝဘ်ဆိုက် URL",
      // "Profile Photo"
      photo: "ပရိုဖိုင်ပုံ",
      // "Telephone Number"
      tel: "တယ်လီဖုန်းနံပါတ်",
      // "Country Code for Phone"
      "tel-country-code": "နိုင်ငံကုဒ်",
      // "National Telephone Number"
      "tel-national": "နိုင်ငံရေးတယ်လီဖုန်းနံပါတ်",
      // "Area Code"
      "tel-area-code": "ဒေသကုဒ်",
      // "Local Phone Number"
      "tel-local": "ဒေသတယ်လီဖုန်းနံပါတ်",
      // "Local Phone Prefix"
      "tel-local-prefix": "ဒေသကုဒ် Prefix",
      // "Local Phone Suffix"
      "tel-local-suffix": "ဒေသကုဒ် Suffix",
      // "Phone Extension"
      "tel-extension": "တယ်လီဖုန်း Extension",
      // "Email Address"
      email: "အီးမေးလ်လိပ်စာ",
      // "Instant Messaging Protocol"
      impp: "ယာယီမက်ဆေ့ချ်ပို့စနစ်"
    },
    maskType: {
      // "None"
      none: "မရှိ",
      // "Pattern"
      pattern: "ပုံစံ",
      // "Numeric"
      numeric: "ဂဏန်း",
      // "Date and Time"
      datetime: "ရက်စွဲနှင့်အချိန်",
      // "Currency"
      currency: "ငွေကြေး"
    },
    inputTextAlignment: {
      // "Auto"
      auto: "အလိုအလျောက်",
      // "Left"
      left: "ဘယ်",
      // "Right"
      right: "ညာ"
    },
    // "All"
    all: "အားလုံး",
    // "Page"
    page: "စာမျက်နှာ",
    // "Survey"
    survey: "စစ်တမ်း",
    // "When switching to the next page"
    onNextPage: "နောက်စာမျက်နှာသို့ပြောင်းသောအခါ",
    // "After an answer is changed"
    onValueChanged: "ဖြေဆိုမှုပြောင်းလဲပြီးနောက်",
    // "Before an answer is changed"
    onValueChanging: "ဖြေဆိုမှုပြောင်းမီ",
    questionsOnPageMode: {
      // "Original structure"
      standard: "မူလပုံစံ",
      // "Show all questions on one page"
      singlePage: "မေးခွန်းအားလုံးကိုတစ်စာမျက်နှာမှာပြပါ",
      // "Show single question per page"
      questionPerPage: "စာမျက်နှာတစ်ခုလျှင်မေးခွန်းတစ်ခုပြပါ"
    },
    // "No preview"
    noPreview: "ကြိုတင်ကြည့်ရှုမှုမရှိပါ",
    // "Show all questions"
    showAllQuestions: "မေးခွန်းအားလုံးကိုပြပါ",
    // "Show answered questions only"
    showAnsweredQuestions: "ဖြေဆိုထားသောမေးခွန်းများကိုသာပြပါ",
    // answeredQuestions: "Show answered questions only",
    pages: "ပြီးစီးသောစာမျက်နှာများ",
    // "Answered questions"
    questions: "ဖြေဆိုထားသောမေးခွန်းများ",
    // "Answered required questions"
    requiredQuestions: "လိုအပ်သောမေးခွန်းများကိုဖြေဆိုထားသည်",
    // "Valid answers"
    correctQuestions: "မှန်ကန်သောဖြေဆိုမှုများ",
    // "Completed pages (button UI)"
    buttons: "ပြီးစီးသောစာမျက်နှာများ (ခလုတ် UI)",
    // "Under the input field"
    underInput: "အဝင်အကွက်အောက်တွင်",
    // "Under the question title"
    underTitle: "မေးခွန်းခေါင်းစဉ်အောက်တွင်",
    // "On lost focus"
    onBlur: "အာရုံလျော့သောအခါ",
    // "While typing"
    onTyping: "ရိုက်နေစဉ်",
    // "Under the row"
    underRow: "အတန်းအောက်တွင်",
    // "Under the row, display one section only"
    underRowSingle: "အတန်းအောက်တွင်၊ တစ်တန်းတည်းချဲ့ထားမှုကိုသာပြပါ",
    // "Auto"
    auto: "အလိုအလျောက်",
    showNavigationButtons: {
      // "Hidden"
      none: "ဖျောက်ထားသည်"
    },
    timerInfoMode: {
      // "Both"
      combined: "နှစ်ခုလုံး"
    },
    addRowButtonLocation: {

    },
    panelsState: {
      // "Locked"
      default: "ချုပ်ထားသည်",
      // "Collapse all"
      collapsed: "အားလုံးချုံ့ထားသည်",
      // "Expand all"
      expanded: "အားလုံးချဲ့ထားသည်",
      // "First expanded"
      firstExpanded: "ပထမပန်းနယ်ကိုချဲ့ထားသည်"
    },
    widthMode: {
      // "Static"
      static: "အတိအကျ",
      // "Responsive"
      responsive: "တုံ့ပြန်မှု"
    },
    contentMode: {
      // "Image"
      image: "ပုံ",
      // "Video"
      video: "ဗီဒီယို",
      // "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "ခလုတ်များ",
      // "Dropdown"
      dropdown: "Dropdown"
    },
    rateColorMode: {
      // "Default"
      default: "ပုံမှန်",
      // "Scale"
      scale: "အဆင့်ကိန်း"
    },
    scaleColorMode: {
      // "Monochrome"
      monochrome: "တစ်ရောင်တည်း",
      // "Colored"
      colored: "အရောင်စုံ"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "အလိုအလျောက်ဖန်တီးပါ",
      // "Manual"
      "false": "ကိုယ်တိုင်ဖန်တီးပါ"
    },
    rateType: {
      // "Labels"
      labels: "တန်းလုံးများ",
      // "Stars"
      stars: "ကြယ်များ",
      // "Smileys"
      smileys: "အပြုံးများ"
    },
    state: {
      // "Locked"
      default: "ချုပ်ထားသည်"
    },
    showQuestionNumbers: {
      // "Auto-numbering"
      default: "အလိုအလျောက်နံပါတ်ပေးခြင်း",
      // "Auto-numbering"
      on: "အလိုအလျောက်နံပါတ်ပေးခြင်း",
      // "Reset on each page"
      onPage: "စာမျက်နှာတစ်ခုစီ reset လုပ်ပါ",
      // "Reset on each panel"
      onpanel: "ပန်းနယ်တစ်ခုစီ reset လုပ်ပါ",
      // "Reset on each panel"
      onPanel: "ပန်းနယ်တစ်ခုစီ reset လုပ်ပါ",
      // recursive: "Recursive numbering",
      onSurvey: "စစ်တမ်းတစ်ခုလုံးဆက်လက်လုပ်ဆောင်ပါ",
      // "No numbering"
      off: "နံပါတ်မပေးပါ"
    },
    descriptionLocation: {
      // "Under the question title"
      underTitle: "မေးခွန်းခေါင်းစဉ်အောက်တွင်",
      // "Under the input field"
      underInput: "အဝင်အကွက်အောက်တွင်"
    },
    selectToRankAreasLayout: {
      // "Next to choices"
      horizontal: "ရွေးချယ်မှုများ၏နောက်တွင်",
      // "Above choices"
      vertical: "ရွေးချယ်မှုများ၏အပေါ်တွင်"
    },
    displayStyle: {
      // "Decimal"
      decimal: "ဒသမ",
      // "Currency"
      currency: "ငွေကြေး",
      // "Percentage"
      percent: "ရာခိုင်နှုန်း",
      // "Date"
      date: "ရက်စွဲ"
    },
    totalDisplayStyle: {
      // "Decimal"
      decimal: "ဒသမ",
      // "Currency"
      currency: "ငွေကြေး",
      // "Percentage"
      percent: "ရာခိုင်နှုန်း",
      // "Date"
      date: "ရက်စွဲ"
    },
    rowOrder: {

    },
    questionOrder: {

    },
    progressBarLocation: {
      // "Top"
      top: "အပေါ်",
      // "Bottom"
      bottom: "အောက်"
    },
    // "Sum"
    sum: "ပေါင်း",
    // "Count"
    count: "ရေတွက်",
    // "Min"
    min: "အနည်းဆုံး",
    // "Max"
    max: "အများဆုံး",
    // "Avg"
    avg: "ပျမ်းမျှ",
    searchMode: {
      // "Contains"
      contains: "ပါဝင်သည်",
      // "Starts with"
      startsWith: "ဖြင့်စတင်သည်"
    },
    backgroundImageFit: {
      // "Auto"
      auto: "အလိုအလျောက်",
      // "Cover"
      cover: "အုပ်ထားသည်",
      // "Contain"
      contain: "ပါဝင်သည်",
      // "Stretch"
      fill: "ဖြည့်သည်",
      // "Tile"
      tile: "Tile"
    },
    backgroundImageAttachment: {
      // "Fixed"
      fixed: "တည်ငြိမ်",
      // "Scroll"
      scroll: "လှိမ့်ပါ"
    },
    headerView: {
      // "Basic"
      basic: "အခြေခံ",
      // "Advanced"
      advanced: "အဆင့်မြင့်"
    },
    inheritWidthFrom: {
      // "Same as survey"
      survey: "စစ်တမ်းနှင့်တူညီသည်",
      // "Same as container"
      container: "ကွန်တိန်နာနှင့်တူညီသည်"
    },
    backgroundColorSwitch: {
      // "None"
      none: "မရှိ",
      // "Accent color"
      accentColor: "အထင်ကြီးသောအရောင်",
      // "Custom"
      custom: "စိတ်ကြိုက်"
    },
    colorPalette: {
      // "Light"
      light: "အလင်း",
      // "Dark"
      dark: "အမည်း"
    },
    isPanelless: {
      // "Default"
      "false": "ပုံမှန်",
      // "Without Panels"
      "true": "ပန်းနယ်မပါဘဲ"
    },
    progressBarInheritWidthFrom: {
      // "Same as survey"
      survey: "စစ်တမ်းနှင့်တူညီသည်",
      // "Same as container"
      container: "ကွန်တိန်နာနှင့်တူညီသည်"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "ဗလာ",
    // "Not empty"
    notempty: "ဗလာမဟုတ်",
    // "Equals"
    equal: "တူညီသည်",
    // "Does not equal"
    notequal: "တူညီမည်မဟုတ်",
    // "Contains"
    contains: "ပါဝင်သည်",
    // "Does not contain"
    notcontains: "မပါဝင်ပါ",
    // "Any of"
    anyof: "မည်သည့်အရာမှ",
    // "All of"
    allof: "အားလုံး",
    // "Greater than"
    greater: "ပိုကြီးသော",
    // "Less than"
    less: "ပိုသေးသော",
    // "Greater than or equal to"
    greaterorequal: "ပိုကြီး သို့မဟုတ် တူညီသော",
    // "Less than or equal to"
    lessorequal: "ပိုသေး သို့မဟုတ် တူညီသော",
    // "and"
    and: "နှင့်",
    // "or"
    or: "သို့မဟုတ်"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Angular ဗားရှင်းကိုအသုံးပြုပါ",
    // "Use jQuery version"
    jquery: "jQuery ဗားရှင်းကိုအသုံးပြုပါ",
    // "Use Knockout version"
    knockout: "Knockout ဗားရှင်းကိုအသုံးပြုပါ",
    // "Use React version"
    react: "React ဗားရှင်းကိုအသုံးပြုပါ",
    // "Use Vue version"
    vue: "Vue ဗားရှင်းကိုအသုံးပြုပါ",
    // "For bootstrap framework"
    bootstrap: "Bootstrap ဖရိမ်းဝေါ့ကိုအတွက်",
    // "Modern theme"
    modern: "ခေတ်မီအထူးအင်္ဂါရပ်",
    // "Default theme"
    default: "ပုံမှန်အထူးအင်္ဂါရပ်",
    // "Orange theme"
    orange: "လိမ္မော်ရောင်အထူးအင်္ဂါရပ်",
    // "Darkblue theme"
    darkblue: "Darkblue အထူးအင်္ဂါရပ်",
    // "Darkrose theme"
    darkrose: "Darkrose အထူးအင်္ဂါရပ်",
    // "Stone theme"
    stone: "Stone အထူးအင်္ဂါရပ်",
    // "Winter theme"
    winter: "Winter အထူးအင်္ဂါရပ်",
    // "Winter-Stone theme"
    winterstone: "Winter-Stone အထူးအင်္ဂါရပ်",
    // "Show survey on a page"
    showOnPage: "စစ်တမ်းကိုစာမျက်နှာပေါ်တွင်ပြပါ",
    // "Show survey in a window"
    showInWindow: "စစ်တမ်းကိုဝင်းဒိုးတွင်ပြပါ",
    // "Load Survey JSON from server"
    loadFromServer: "Server မှစစ်တမ်း JSON ကိုသွင်းပါ",
    // "Scripts and styles"
    titleScript: "Script များနှင့်ပုံစံများ",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "စမ်းသပ်ရန်စာမျက်နှာကိုရွေးချယ်ပါ",
    // "Show invisible elements"
    showInvisibleElements: "မြင်မရသောအရာများကိုပြပါ",
    // "Hide invisible elements"
    hideInvisibleElements: "မြင်မရသောအရာများကိုဖျောက်ပါ"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "ဖြေဆိုမှုအရေအတွက်",
    // "Email"
    emailvalidator: "အီးမေးလ်",
    // "Expression"
    expressionvalidator: "ဖော်ပြချက်",
    // "Number"
    numericvalidator: "နံပါတ်",
    // "Regex"
    regexvalidator: "Regex",
    // "Text"
    textvalidator: "စာသား"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "စစ်တမ်းကိုပြီးစီးပါ",
    // "Set answer"
    setvaluetrigger: "ဖြေဆိုမှုကိုသတ်မှတ်ပါ",
    // "Copy answer"
    copyvaluetrigger: "ဖြေဆိုမှုကိုကူးယူပါ",
    // "Skip to question"
    skiptrigger: "မေးခွန်းသို့ဆွဲကြိုး",
    // "Run expression"
    runexpressiontrigger: "ဖော်ပြချက်ကို run ပြုလုပ်ပါ",
    // "change visibility (deprecated)"
    visibletrigger: "မြင်သာမှုကိုပြောင်းလဲပါ (မသုံးတော့ပါ)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "ဥပမာ: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "ဥပမာ: mm/dd/yyyy HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "ဥပမာ: $",
      // "Ex.: USD"
      suffix: "ဥပမာ: USD"
    },
    panelbase: {
      // "Ex.: 200px"
      questionTitleWidth: "ဥပမာ: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "ဥပမာ: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "ဥပမာ: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "တုံ့ပြန်သူများအနေဖြင့်မြင်မရသော Panel ID",
      // "Type a panel subtitle."
      description: "Panel အခေါင်းစဉ်ခွဲစာသားကိုရိုက်ထည့်ပါ",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Panel မြင်သာမှုကိုသတ်မှတ်သည့်အခြေအနေစည်းကမ်းကို Magic Wand နိုင်ငံကိစ္စပုံစံကိုအသုံးပြုပါ",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Panel ကို Read-only mode မဟုတ်စေရန်အခြေအနေစည်းကမ်းကို Magic Wand နိုင်ငံကိစ္စပုံစံကိုအသုံးပြုပါ",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Nested မေးခွန်းများတွင်ဖြေဆိုမှုမရှိပါက စစ်တမ်းတင်သွင်းမှုကိုတားဆီးရန်အခြေအနေစည်းကမ်းကို Magic Wand နိုင်ငံကိစ္စပုံစံကိုအသုံးပြုပါ",
      // "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "ဒီ Panel အတွင်းမေးခွန်းများအတွက်ပြဿနာတစ်ခုဖြစ်သည်",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "CSS တန်ဖိုး (px, %, in, pt, စသည်ဖြင့်) များကိုလက်ခံပါ",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Panel အတွင်းမေးခွန်းများနှင့်ဆက်စပ်သောအမှားစာသားတည်နေရာကိုသတ်မှတ်ပါ",
      // questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting.",
      page: "ရွေးချယ်ထားသောစာမျက်နှာ၏အဆုံးသို့ Panel ကိုပြောင်းသွားပါ",
      // "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Panel content နှင့် Panel box ဘောင်ဘေးကြားတွင် Margin ထည့်ပါ",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "မေးခွန်းတစ်ခုသို့မဟုတ် Panel တစ်ခုနှင့်တစ်လိုင်းအတွင်းတွဲဖက်ပြပါ",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "\"ချဲ့ထားသည်\" - Panel ကိုအပြည့်အဝပြပြီးချုံ့နိုင်သည်၊ \"ချုံ့ထားသည်\" - Panel ကိုခေါင်းစဉ်နှင့်ဖော်ပြချက်သာပြပြီးချဲ့နိုင်သည်၊ \"ချုပ်ထားသည်\" - Panel ကိုအပြည့်အဝပြပြီးချုံ့လို့မရပါ",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Panel ၏အကျယ်ကိုပုံစံ Element အခြားတစ်ခုနှင့်ချိန်ညှိပါ",
      // "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Panel ၏ Nested မေးခွန်းများကိုနံပါတ်ပေးပါ"
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "တုံ့ပြန်သူများအနေဖြင့်မြင်မရသော Panel ID",
      // "Type a panel subtitle."
      description: "Panel အခေါင်းစဉ်ခွဲစာသားကိုရိုက်ထည့်ပါ",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Panel မြင်သာမှုကိုသတ်မှတ်သည့်အခြေအနေစည်းကမ်းကို Magic Wand နိုင်ငံကိစ္စပုံစံကိုအသုံးပြုပါ",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Panel ကို Read-only mode မဟုတ်စေရန်အခြေအနေစည်းကမ်းကို Magic Wand နိုင်ငံကိစ္စပုံစံကိုအသုံးပြုပါ",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Nested မေးခွန်းများတွင်ဖြေဆိုမှုမရှိပါက စစ်တမ်းတင်သွင်းမှုကိုတားဆီးရန်အခြေအနေစည်းကမ်းကို Magic Wand နိုင်ငံကိစ္စပုံစံကိုအသုံးပြုပါ",
      // templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.).",
      templateErrorLocation: "မမှန်သောအဝင်ရှိသောမေးခွန်းနှင့်ဆက်စပ်သော အမှားစာသားတည်နေရာကို သတ်မှတ်ပါ။",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Panel အတွင်းမေးခွန်းများနှင့်ဆက်စပ်သော အမှားစာသားတည်နေရာကို သတ်မှတ်ပါ။",
      // "Repositions the panel to the end of a selected page."
      page: "ရွေးချယ်ထားသောစာမျက်နှာ၏ အဆုံးသို့ Panel ကိုပြောင်းသွားပါ",
      // indent: "Adds space or margin between the panel content and the left border of the panel box.",
      startWithNewLine: "Panel ကိုတစ်လိုင်းတည်းတွင် ဖော်ပြရန် unselect လုပ်ပါ",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "\"Expanded\" - Panel ကိုအပြည့်အဝပြပြီး ချုံ့နိုင်သည်၊ \"Collapsed\" - Panel ကို ခေါင်းစဉ်နှင့် ဖော်ပြချက်သာပြပြီး ချဲ့နိုင်သည်၊ \"Locked\" - Panel ကိုအပြည့်အဝပြပြီး ချုံ့လို့မရပါ",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Panel ၏အကျယ်ကို CSS တန်ဖိုး (px, %, in, pt, စသည်ဖြင့်) အသုံးပြု၍ သတ်မှတ်ပါ",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Dynamic Panel ခေါင်းစဉ်များအတွက် Template တစ်ခု ရိုက်ထည့်ပါ",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Tab ခေါင်းစဉ်များအတွက် Template တစ်ခု ရိုက်ထည့်ပါ",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Tab ခေါင်းစဉ်များတွင် မတည်ငြိမ်သောအခါ fallback စာသားကိုသတ်မှတ်ပါ",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Dynamic Panel အတွင်းရှိ တစ်ခုချင်း panel တွေကို visibility ကိုထိန်းချုပ်နိုင်သည်။",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "ဒီ Panel အတွင်းရှိမေးခွန်းအားလုံးအတွက် title alignment ကိုအလိုအလျောက် သက်ဆိုင်သည်။",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Page-level သို့မဟုတ် Survey-level သတ်မှတ်ချက်ကို သက်ဆိုင်သည်",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "အသစ်ထည့်သွင်းထားသော panel ၏တည်နေရာကို သတ်မှတ်ပါ",
      // copyDefaultValueFromLastEntry: "Duplicates answers from the last entry and assigns them to the next added entry.",
      keyName: "အသုံးပြုသူကို တစ်ခုချင်း panel တွင် unique ဖြေဆိုမှုပေးရန် ပြုလုပ်ရန် question name ကိုဖော်ပြပါ"
    },
    matrixdynamic: {

    },
    // copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row.",
    defaultValueExpression: "Expression အရ default ဖြေဆိုမှုတန်ဖိုးကို သတ်မှတ်နိုင်သည်။",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Reset value ချိန်ညှိမှုကို Magic Wand icon ဖြင့်သတ်မှတ်ပါ။",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Magic Wand icon ကိုအသုံးပြု၍ စည်းမျဉ်းချမှတ်ပါ။",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "စည်းမျဉ်းတွေ့ရှိပါက ဖြေဆိုမှုတန်ဖိုးကို dynamically သတ်မှတ်ရန် Expression တစ်ခုဖော်ပြပါ။",
    // gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field.",
    question: {
      // "A question ID that is not visible to respondents."
      name: "တုံ့ပြန်သူများအနေဖြင့် မမြင်ရသော မေးခွန်း ID",
      // "Type a question subtitle."
      description: "မေးခွန်းခေါင်းစဉ်ခွဲစာသားကို ရိုက်ထည့်ပါ",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "မေးခွန်းမြင်သာမှုကို သတ်မှတ်ရန် Magic Wand icon ကိုအသုံးပြုပါ",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "မေးခွန်းကို Read-only mode မဟုတ်စေရန် Magic Wand icon ကို အသုံးပြုပါ",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "မေးခွန်းဖြေဆိုမှုမရှိပါက စစ်တမ်းတင်သွင်းမှုကိုတားဆီးရန် စည်းမျဉ်းချမှတ်ပါ",
      // "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "မေးခွန်းကိုတစ်လိုင်းတည်းတွင် ဖော်ပြရန် unselect လုပ်ပါ",
      // "Repositions the question to the end of a selected page."
      page: "မေးခွန်းကို ရွေးချယ်ထားသော စာမျက်နှာ၏ အဆုံးသို့ ပြောင်းသွားပါ",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "\"Expanded\" - မေးခွန်း box ကို အပြည့်အဝပြပြီး ချုံ့နိုင်သည်၊ \"Collapsed\" - ခေါင်းစဉ်နှင့်ဖော်ပြချက်သာ ပြပြီး ချဲ့နိုင်သည်၊ \"Locked\" - မေးခွန်း box ကို အပြည့်အဝပြပြီး ချုံ့လို့မရပါ",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Panel, page, သို့မဟုတ် survey-level သတ်မှတ်ချက်များကို override လုပ်ပါ",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Survey-level သတ်မှတ်ချက် (\"မေးခွန်းခေါင်းစဉ်အောက်တွင်\" တန်းမှစတင်)",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "မေးခွန်းအမှားတည်နေရာကို သတ်မှတ်ပါ",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "မေးခွန်း content နှင့် box ဘောင်ဘေးကြား Margin ထည့်ပါ",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "မေးခွန်း box ၏ အကျယ်ကို သတ်မှတ်ပါ",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "\"On lost focus\" - input field focus ပြောင်းလဲသည့်အချိန်၊ \"While typing\" - အသုံးပြုသူရိုက်နေစဉ် Value ကို real-time update ပြုလုပ်ပါ",
      // "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Multi-choice မေးခွန်းများအတွက် Web service URL ကို သတ်မှတ်ပါ",
      // "A comparison operation used to filter the drop-down list."
      searchMode: "Drop-down list ကို filter ပြုလုပ်ရန် Operation တစ်ခုကိုရွေးချယ်ပါ",
      // "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Long text ကို drop-down menu အတွင်းမှ line break များဖြင့် ဖော်ပြပါ"
    },
    surveyvalidator: {

    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "ထိုးထွင်းရယူထားသော ပုံရိပ်၏ အကျယ်ကို သတ်မှတ်ပါ",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "ထိုးထွင်းရယူထားသော ပုံရိပ်၏ အမြင့်ကို သတ်မှတ်ပါ",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Signature နယ်ပယ်ကို အလိုအလျောက် တိုးချဲ့နိုင်စေရန် ရွေးချယ်ပါ"
    },
    file: {
      // imageWidth: "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area.",
      allowImagesPreview: "တင်ထားသော ဖိုင်များအတွက် thumbnail preview ကို ပြပါ"
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "URL မှာ ထည့်သွင်းထားသော အချက်အလက်အပေါ်မူတည်၍ \"Auto\" ကို အသုံးပြုပါ"
    },
    imagepicker: {
      // "Overrides the minimum and maximum height values."
      imageHeight: "အနည်းဆုံးနှင့် အများဆုံး Height အတောအတွင်း Override လုပ်ပါ",
      // "Overrides the minimum and maximum width values."
      imageWidth: "အနည်းဆုံးနှင့် အများဆုံး Width အတောအတွင်း Override လုပ်ပါ",
      // "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Value\" သည် Conditional rules အတွက် Item ID ဖြစ်သည်၊ \"Text\" သည် တုံ့ပြန်သူများထံ ပြထားသော စာသားဖြစ်သည်",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Media selector အတွက် Content mode ကိုရွေးချယ်ပါ။"
    },
    text: {
      // "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Input field ၏ အရွယ်အစားကိုသာ ချိန်ညှိသည်"
    },
    comment: {
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Input field အတွင်း ဖော်ပြထားသည့် Line အရေအတွက်ကို သတ်မှတ်ပါ"
    },
    // survey templates
    survey: {

    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "တုံ့ပြန်သူများအနေဖြင့် မမြင်ရသော ကော်လံ ID",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "ကော်လံအတွက် ဖွင့်ထားပါက တုံ့ပြန်သူသည် ကော်လံထဲရှိ မေးခွန်းများအတွက် တန်ဖိုးအထူးဖြစ်စေရန်လိုအပ်သည်။",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Input field အတွင်း ဖော်ပြထားသည့် Line အရေအတွက်ကို သတ်မှတ်ပါ။",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "ကော်လံ မြင်သာမှုကိုသတ်မှတ်ရန် Magic Wand icon ကို အသုံးပြုပါ။",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "ကော်လံကို Read-only mode မဟုတ်စေရန် Magic Wand icon ကိုအသုံးပြုပါ။",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Nested မေးခွန်းများတွင် ဖြေဆိုမှုမရှိပါက စစ်တမ်းတင်သွင်းမှုကို တားဆီးရန် Magic Wand icon ကိုအသုံးပြုပါ။",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "ရွေးချယ်မှုများအတွက် တစ်ခုချင်း ကော်လံများကို ဖန်တီးပါ။",
      // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "ရွေးချယ်မှုများကို စတုရန်း စီစဉ်ပါ။"
    },
    slider: {

    },
    // isExclusive: "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question.",
    caseInsensitive: "Regular expression တွင် အကြီးစာလုံးနဲ့ အငယ်စာလုံးကို တူညီသည်ဟုဆက်ဆံစေရန် ရွေးချယ်ပါ။",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "တည်ငြိမ်အကျယ်၊ ပြောင်းလွယ်ပြင်လွယ်အကျယ်၊ သို့မဟုတ် အလိုအလျောက်အကျယ်ထဲမှရွေးချယ်ပါ။",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "စစ်တမ်းတွင် ထပ်ခါတလဲလဲ ဖြေဆိုမှုကို တားဆီးရန်အတွက် ထူးခြားသော Cookie Value တစ်ခု သတ်မှတ်ပါ။",
    // "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "ပုံလင့်ခ်ကို ထည့်ပါ (အရွယ်အစားကန့်သတ်ချက်မရှိ) သို့မဟုတ် 64KB အထိ PC မှ ဖိုင်ရှာရန် Folder icon ကိုနှိပ်ပါ။",
    // "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "CSS တန်ဖိုးများဖြင့် Logo ၏အကျယ်ကို သတ်မှတ်ပါ (px, %, in, pt, စသည်ဖြင့်)။",
    // "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "CSS တန်ဖိုးများဖြင့် Logo ၏အမြင့်ကို သတ်မှတ်ပါ (px, %, in, pt, စသည်ဖြင့်)။",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "\"None\", \"Contain\", \"Cover\", \"Fill\" တို့ထဲမှ Logo ၏ မည်သည့်တပ်ဆင်မှုကို ရွေးချယ်ပါ။",
    // autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions.",
    showNavigationButtons: "စာမျက်နှာတစ်ခုတွင် Navigation Buttons ၏ မြင်သာမှုနှင့် တည်နေရာကို သတ်မှတ်ပါ။",
    // navigationButtonsLocation: "Sets the location of navigation buttons on a page.",
    showPreviewBeforeComplete: "တုံ့ပြန်မှုအားလုံး သို့မဟုတ် ဖြေဆိုပြီးသော မေးခွန်းများကို Preview စာမျက်နှာပေါ်တွင်ပြပါ။",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Survey အတွင်းမေးခွန်းများအားလုံးအတွက် Title Alignment ကို သတ်မှတ်ပါ။",
    // requiredMark: "A symbol or a sequence of symbols indicating that an answer is required.",
    questionStartIndex: "နံပါတ် သို့မဟုတ် စာလုံးတစ်ခုကို ရိုက်ထည့်ပါ။",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "မေးခွန်း၏ အမှားစာသားတည်နေရာကို သတ်မှတ်ပါ။",
    // questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab.",
    maxTextLength: "Text Entry မေးခွန်းများအတွက်သာဖြစ်သည်။",
    // commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears.",
    autoGrowComment: "Comment များနှင့် Long Text မေးခွန်းများအတွက် Auto-Grow Feature ကို ဖွင့်ပါ။",
    // "For question comments and Long Text questions only."
    allowResizeComment: "Comment များနှင့် Long Text မေးခွန်းများအတွက် အရွယ်အစားကို ပြောင်းလဲနိုင်ရန် ဖွင့်ပါ။",
    // "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Form Calculations အတွက် Custom Variable များကို ဖန်တီးပါ။",
    // "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Calculated Value ကို Survey Results တွင် ထည့်သွင်းရန် ရွေးချယ်ပါ။",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Expression တစ်ခု အပေါ်မူတည်ပြီး Survey မှာ Action တစ်ခုလှုံ့ဆော်ရန် Trigger များကို သတ်မှတ်ပါ။",
    // "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Conditional Logic ဖြင့် ဖျောက်ထားသော မေးခွန်းတန်ဖိုးများကို ဖျက်စီးမည်၊ မဖျက်စီးမည်ကို ရွေးချယ်ပါ။",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "\"On lost focus\" သို့မဟုတ် \"While typing\" တို့ထဲမှ ရွေးချယ်ပါ။",
    // "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "ဘယ်ဘက်တန်ဖိုးသည် Conditional Rules တွင် အသုံးပြုသော Column ID ဖြစ်သည်၊ ညာဘက်တန်ဖိုးကို တုံ့ပြန်သူများအနေဖြင့် မြင်နိုင်သည်။",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "ဘယ်ဘက်တန်ဖိုးသည် Conditional Rules တွင် အသုံးပြုသော Row ID ဖြစ်သည်၊ ညာဘက်တန်ဖိုးကို တုံ့ပြန်သူများအနေဖြင့် မြင်နိုင်သည်။",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "CSS တန်ဖိုးများကို လက်ခံသည် (px, %, in, pt, စသည်ဖြင့်)။",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "CSS တန်ဖိုးများကို လက်ခံသည် (px, %, in, pt, စသည်ဖြင့်)။",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "\"Aggregation Method\" သို့မဟုတ် \"Total Value Expression\" ဖြင့် Total Values များကို ပြသသည်။",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Cell Input မှာ အမှားစာသားတည်နေရာကို သတ်မှတ်ပါ။",
    // detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property.",
    keyDuplicationError: "\"Prevent Duplicate Responses\" သတ်မှတ်ချက် ဖွင့်ထားပါက Duplicate Entries အတွက် အမှားစာသားကို ဖော်ပြပါ။",
    // "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Expression တစ်ခုအပေါ်မူတည်ပြီး Total Values ကိုတွက်ချက်ပါ။",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "ရပ်ဆိုင်းထားသော Column ID ကို သုံးပြီး တူညီသောဖြေဆိုမှုများကို တားဆီးပါ။",
    // "Type a subtitle."
    description: "အခေါင်းစဉ်ခွဲစာသားကို ရိုက်ထည့်ပါ။",
    // "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Survey Language ကို ရွေးချယ်ပြီး သင့် Survey ကိုစတင်ဖန်တီးပါ။",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "\"None\", \"Under the row\", \"Under the row, display one row expansion only\" တို့ထဲမှရွေးချယ်ပါ။",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "\"None\", \"Contain\", \"Cover\", \"Fill\" တို့ထဲမှ ရွေးချယ်ပါ။",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "\"Inherit\" သည် Survey-level သတ်မှတ်ချက် (\"Disabled\" ပုံမှန်ဖြစ်သည်) ကို သက်ဆိုင်ပါသည်။",
    // "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "\"Inherit\" သည် Survey-level သတ်မှတ်ချက် (\"Enabled\" ပုံမှန်ဖြစ်သည်) ကို သက်ဆိုင်ပါသည်။",
    // "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "စစ်တမ်းအားပြီးဆုံးရန် သတ်မှတ်အချိန်တစ်ခု (စက္ကန့်) ပြုလုပ်ပါ။",
    // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "စာမျက်နှာတစ်ခုစီအတွက် အချိန်ကန့်သတ်ချက်ကို စက္ကန့်အနေနဲ့သတ်မှတ်ပါ။",
    // "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "User များ empty input field ကို focus လုပ်ပြီး ပြန်ထွက်သွားတဲ့အခါ Validation Trigger ဖြစ်စေပါ။",
    page: {
      // navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\".",
      timeLimit: "စာမျက်နှာတစ်ခုစီအတွက် အချိန်ကန့်သတ်ချက်ကို စက္ကန့်အနေနဲ့သတ်မှတ်ပါ။",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "စာမျက်နှာမြင်သာမှုကို သတ်မှတ်ရန် Magic Wand icon ကို အသုံးပြုပါ။",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "စာမျက်နှာကို Read-only mode မဟုတ်စေရန် Magic Wand icon ကို အသုံးပြုပါ။",
      // requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer.",
      questionTitleLocation: "စာမျက်နှာတွင်း မေးခွန်းများအတွက် Title Alignment ကို သတ်မှတ်ပါ။",
      // questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab.",
      showNavigationButtons: "စာမျက်နှာပေါ်တွင် Navigation Buttons ၏ မြင်သာမှုကို သတ်မှတ်ပါ။"
    },
    // "Sets the location of a timer on a page."
    timerLocation: "စာမျက်နှာတစ်ခုအတွင်း Timer ၏ တည်နေရာကို သတ်မှတ်ပါ။",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "\"Locked\", \"Collapse all\", \"Expand all\", \"First expanded\" တို့ထဲမှ Panel State ကိုရွေးချယ်ပါ။",
    // "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "ရွေးချယ်မှုစာရင်းတွင် ပြသရန်ပုံ သို့မဟုတ် ဗီဒီယိုဖိုင် URL များပါရှိသော အရာများ array အတွင်းရှိ ပိုင်ဆိုင်မှုတူသော property နာမည်ကိုထည့်ပါ။",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "ဘယ်ဘက်တန်ဖိုးသည် Conditional Rules တွင် အသုံးပြုသော Item ID ဖြစ်ပြီး၊ ညာဘက်တန်ဖိုးသည် တုံ့ပြန်သူများအတွက် ပြသရန်ဖြစ်သည်။",
    // "Type a user-friendly title to display."
    title: "ပြသရန်အသုံးပြုသူရင်းနှီးမှုရှိသော ခေါင်းစဉ်ကို ရိုက်ထည့်ပါ။",
    // "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "ဖိုင်များတင်ပြီးမချင်း စစ်တမ်းကို ပြီးစီးခြင်းမရှိစေရန် သေချာစေပါသည်။",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "CSS တန်ဖိုးများကို လက်ခံသည် (px, %, in, pt, စသည်ဖြင့်)။",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "CSS တန်ဖိုးများကို လက်ခံသည် (px, %, in, pt, စသည်ဖြင့်)။",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "CSS တန်ဖိုးများကို လက်ခံသည် (px, %, in, pt, စသည်ဖြင့်)။",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "တန်ဖိုးများကို ချိတ်ဆက်ထားသော မေးခွန်းများနှင့် သက်ဆိုင်သော array သို့မဟုတ် object အတွက် custom key ဖြစ်သော Join Identifier ကို သတ်မှတ်ပါ။",
    // defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty.",
    useDisplayValuesInDynamicTexts: "Single- နှင့် Multiple-Selection မေးခွန်းအမျိုးအစားများတွင် ID နှင့် Display Value ပါရှိသည့်ရွေးချယ်မှုများအတွက် ID Value အစား Display Value ကို ပြသရန် ရွေးချယ်ပါ။",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Conditional Logic ဖြင့်ဖျောက်ထားသော မေးခွန်းတန်ဖိုးများကို ဖျက်စီးရန် သို့မဟုတ်မဖျက်စီးရန်ရွေးချယ်ပါ။ \"Inherit\" သည် စစ်တမ်းအဆင့်သတ်မှတ်ချက်ကို သက်ဆိုင်ပါသည်။",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "ရွေးချယ်မှုများအားလုံး၊ ရွေးချယ်ထားသောရွေးချယ်မှုများ၊ သို့မဟုတ် မရွေးချယ်ထားသောရွေးချယ်မှုများကို dynamic သတ်မှတ်ပါ။",
    // allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session.",
    showOtherItem: "ရွေးချယ်ပါက သီးခြား Comment Box မှာ ထပ်ထည့်နိုင်သောရွေးချယ်မှုများကို လွှင့်ပေးပါ။",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Special Choice Option (\"None\", \"Other\", \"Select All\") တစ်ခုချင်းစီကို အတန်းအသစ်တစ်ခုတွင် ပြသပါ။",
    // "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Target Array ကို Dataset အတွင်းမည်သည့်နေရာတွင်ရှိသည်ကို သတ်မှတ်ပါ။ URL သည် Array ကိုညွှန်ပြသောအခါ ရှင်းလင်းထားပါ။",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: "Survey Results တွင် ဖြေဆိုမှုတန်ဖိုးအဖြစ် သိမ်းဆည်းမည့် Uniform Property Name ကို ထည့်သွင်းပါ။"
    },
    // "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Choices List တွင် ပြသရန် တန်ဖိုးများပါရှိသော အရာများ array အတွင်းရှိ Uniform Property Name ကို ထည့်သွင်းပါ။",
    // "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Service သည် Response သို့မဟုတ် Array အချည်းနှီးကို ပြန်ပေးနိုင်စေရန် ရွေးချယ်ပါ။",
    // "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "ရွေးချယ်မှုများအားလုံး၏ မြင်သာမှုကို သတ်မှတ်ရန် Magic Wand Icon ကို အသုံးပြုပါ။",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "ဘယ်ဘက်တန်ဖိုးသည် Conditional Rules တွင် အသုံးပြုသော Item ID ဖြစ်ပြီး ညာဘက်တန်ဖိုးသည် တုံ့ပြန်သူများအတွက် ပြသရန်ဖြစ်သည်။",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" သည် ရွေးချယ်မှုများကို Display Width အပေါ်မူတည်ပြီး \"Buttons\" နှင့် \"Dropdown\" Modes အကြားရွေးချယ်ပေးသည်။"
    },
    // "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Results များကို Format မတူညီသော မေးခွန်းများကိုချိတ်ဆက်ရာတွင် အသုံးပြုနိုင်သော Shared Property Name ကို ထည့်သွင်းပါ။",
    // "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "တုံ့ပြန်သူများ Input Field တွင် ရိုက်သည့် Search Query နှင့်ကိုက်ညီရန် Dropdown Menu အကြောင်းအရာများကို Update ပြုလုပ်ရန် ရွေးချယ်ပါ။",
    // "A value to save in survey results when respondents give a positive answer."
    valueTrue: "တုံ့ပြန်သူများ Positive ဖြေဆိုမှုအတွက် Results တွင် သိမ်းဆည်းရန်တန်ဖိုးကို ထည့်သွင်းပါ။",
    // "A value to save in survey results when respondents give a negative answer."
    valueFalse: "တုံ့ပြန်သူများ Negative ဖြေဆိုမှုအတွက် Results တွင် သိမ်းဆည်းရန်တန်ဖိုးကို ထည့်သွင်းပါ။",
    // "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Preview Image ကို Override လုပ်ပြီး Files မတင်ရသေးမူကို ခွဲခြားရန်မလွယ်ကူစေပါ။",
    // "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "ဖိုင်ဖျက်ပစ်မှုကို အတည်ပြုရန် Prompt ကို ဖော်ပြပါ။",
    // "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "ရွေးချယ်ထားသောရွေးချယ်မှုများကိုသာ Rank ပြုလုပ်ရန် Enable လုပ်ပါ။",
    // "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Input များတွင် ပြသမည့် Choices စာရင်းကို ထည့်သွင်းပါ။",
    // itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.).",
    inputTextAlignment: "Input Field အတွင်း Input Value ကို Alignment လုပ်ရန် ရွေးချယ်ပါ။",
    // "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Image မမြင်ရသောအခါသို့မဟုတ် Accessibility အတွက် Substitute အဖြစ် အသုံးပြုပါ။",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Rating Icon Type ကို \"Smileys\" သတ်မှတ်ထားသောအခါ Emoji ၏အရောင်ကို သတ်မှတ်ပါ။",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "တုံ့ပြန်သူများအနေဖြင့် မမြင်ရသော Expression ID",
      // "Type an expression subtitle."
      description: "Expression အတွက် Subtitle ကို ရိုက်ထည့်ပါ။",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Expression တွင် အခြေခံတွက်ချက်မှုများ (`{q1_id} + {q2_id}`), Conditions (`{age} > 60`), နှင့် Functions ('iif()', `today()`, `age()`, `min()`, `max()`, `avg()` စသည်တို့) ပါဝင်နိုင်သည်။"
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "\"Other\" ရွေးချယ်မှုတန်ဖိုးကို စစ်တမ်းရလဒ်များတွင် သီးခြား property အဖြစ် သိမ်းဆည်းရန် ရွေးချယ်ပါ။",
    // "Use {0} as a placeholder for the actual value."
    format: "{0} ကို placeholder အဖြစ်အသုံးပြုပါ။",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "[accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute အကြောင်း အသေးစိတ်ကို ကိုးကားပါ။",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "ရွေးချယ်မှုများကို မူလတန်းကိန်းအလိုက် ကော်လံတန်းများအဖြစ် စီစဉ်ပါ။ \"Cell input type\" ကို Radio Button Group သို့မဟုတ် Checkboxes အဖြစ် သတ်မှတ်ထားသောကော်လံများတွင်သာ သက်ဆိုင်ပါသည်။",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "အသုံးပြုသူ၏ browser မှ ပြန်လည်ယူဆောင်နိုင်သော ဒေတာအမျိုးအစားကို ရွေးချယ်ပါ။",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "\"File source type\" သည် \"Local file\" ဖြစ်သောအခါ သို့မဟုတ် Camera မရရှိနိုင်သောအခါ သက်ဆိုင်ပါသည်။",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "\"File source type\" သည် \"Camera\" ဖြစ်သောအခါ သက်ဆိုင်ပါသည်။",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "\"File source type\" သည် \"Local file or camera\" ဖြစ်သောအခါ သက်ဆိုင်ပါသည်။",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "ရွေးချယ်မှုများကို မူလတန်းကိန်းအလိုက် ကော်လံတန်းများအဖြစ် စီစဉ်ပါ။",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "မေးခွန်းတန်ဖိုးကို Mask ဖြင့် ထည့်သွင်းထားသောအတိုင်း စစ်တမ်းရလဒ်များတွင် သိမ်းဆည်းလိုပါက ရွေးချယ်ပါ။"
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Pattern တွင် String Literals နှင့် Placeholder အများအတွက် အောက်ပါများ ပါရှိနိုင်သည် - `9`: Digit, `a`: Upper- သို့မဟုတ် Lower-case Letter, `#`: Digit သို့မဟုတ် Upper- သို့မဟုတ် Lower-case Letter. Backslash `\\` ဖြင့် Character ကို Escaping ပြုလုပ်ပါ။"
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Separator Characters နှင့် အောက်ပါ Placeholder များပါရှိနိုင်သည် -<br>`m`: လရက်အမှတ်, `mm`: လရက်အမှတ် (Leading Zero ဖြင့်), `d`: နေ့ရက်, `dd`: နေ့ရက် (Leading Zero ဖြင့်), `yy`: နှစ်၏နောက်ဆုံး နှစ်လုံး, `yyyy`: နှစ်လုံးနှစ်, `H`: 24 နာရီစနစ်ဖြင့် နာရီ, `h`: 12 နာရီစနစ်ဖြင့် နာရီ, `MM`: မိနစ်, `ss`: စက္ကန့်."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Fractional Part ကို Integer Part ထံမှ ခွဲထုတ်ရန်သုံးသော အခြေအားဖြစ်သော သင်္ကေတ။",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "ကြီးမားသောနံပါတ်များကို သုံးခုစီခွဲထုတ်ရန် သုံးသော သင်္ကေတ။",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "ထင်ဟပ်အမှတ်များကို Decimal Point အောက်တွင် တိကျစွာ ထားရှိပါ။"
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "တန်ဖိုးအရှေ့တွင် ပြသရန် သင်္ကေတတစ်ခု သို့မဟုတ် သင်္ကေတအများကို ထည့်သွင်းပါ။",
      // "One or several symbols to be displayed after the value."
      suffix: "တန်ဖိုးအနောက်တွင် ပြသရန် သင်္ကေတတစ်ခု သို့မဟုတ် သင်္ကေတအများကို ထည့်သွင်းပါ။"
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "ဤဆက်တင်သည် Panel မရှိသည့် မေးခွန်းများတွင်သာ သက်ဆိုင်ပါသည်။",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "စစ်တမ်းအရေးပါသော အချက်အလက်များကို အလင်းပြထားသည့် အရောင်ကို သတ်မှတ်ပါ။",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "စစ်တမ်းနောက်ခံနှင့် Panel များ၏ Transparency ကိုညှိပါ။",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Input Element များ၏ Transparency ကို စစ်တမ်းနောက်ခံနှင့်ညှိပါ။",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "လျားရိုးပုံစံအတွက် အနားအလျားကို သတ်မှတ်ပါ။"
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "\"Same as container\" သည် စစ်တမ်းထားရှိသည့် HTML Element နှင့် ကိုက်ညီသော Header Content အကျယ်ကို အလိုအလျောက်ညှိပေးသည်။",
      // "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "စစ်တမ်းခေါင်းစဉ်နှင့် ဖော်ပြချက်ကို ပါဝင်သော Header Area ၏အကျယ်။",
      // "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Enabled ဖြစ်ပါက စစ်တမ်း၏ ထိပ်ပိုင်းသည် Header ၏ အောက်ပိုင်းကို အောက်ကျသည်။",
      // "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "0 အဖြစ် သတ်မှတ်ပါက Header Content ကိုလိုက်နာ၍ အမြင့်ကို အလိုအလျောက်တွက်ချက်ပေးသည်။"
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "\"Same as container\" သည် Progress Bar Area ၏ အကျယ်ကို HTML Element နှင့် ကိုက်ညီစေပါသည်။"
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "ခေါင်းစဉ်",
      // "Leave it empty, if it is the same as 'Name'"
      title: "'နာမည်' နှင့်တူပါက အလွတ်ထားပါ"
    },
    // "Allow multiple selection"
    multiSelect: "အများကြီးရွေးချယ်ခွင့်ပြုပါ",
    // "Show image and video captions"
    showLabel: "ပုံနှင့် ဗီဒီယိုအကြောင်းပြချက်များပြပါ",
    // "Swap the order of Yes and No"
    swapOrder: "ဟုတ်/မဟုတ် အစီအစဉ်ကိုပြောင်းပါ",
    // "Value"
    value: "တန်ဖိုး",
    // "Tab alignment"
    tabAlign: "တဘ် alignment",
    // "File source type"
    sourceType: "ဖိုင်အရင်းအမြစ်အမျိုးအစား",
    // "Fit to container"
    fitToContainer: "ကွန်တိန်နာကိုက်ညီမှု",
    // "Set value expression"
    setValueExpression: "တန်ဖိုးဖော်ပြချက်ကိုသတ်မှတ်ပါ",
    // "Description"
    description: "ဖော်ပြချက်", // Auto-generated string
    // "Logo fit"
    logoFit: "လိုဂိုကိုက်ညီမှု",
    // "Pages"
    pages: "စာမျက်နှာများ", // Auto-generated string
    // "Questions"
    questions: "မေးခွန်းများ", // Auto-generated string
    // "Triggers"
    triggers: "ထိန်းချုပ်မှုများ",
    // "Custom variables"
    calculatedValues: "စိတ်ကြိုက်အပြောင်းအလဲများ",
    // "Survey id"
    surveyId: "စစ်တမ်း ID", // Auto-generated string
    // "Survey post id"
    surveyPostId: "စစ်တမ်း Post ID", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "စစ်တမ်းဒေတာသိမ်းဆည်းမှုပြပါ", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "မေးခွန်းဖော်ပြချက်တည်နေရာ",
    // "Progress bar type"
    progressBarType: "တိုးတက်မှုဘားအမျိုးအစား", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "အကြောင်းအရာဇယား (TOC) ပြပါ",
    // "TOC alignment"
    tocLocation: "TOC တည်နေရာ",
    // "Question title pattern"
    questionTitlePattern: "မေးခွန်းခေါင်းစဉ်ပုံစံ", // Auto-generated string
    // "Survey width mode"
    widthMode: "စစ်တမ်းအကျယ်အဝန်း",
    // "Show brand info"
    showBrandInfo: "အမှတ်တံဆိပ်အချက်အလက်ပြပါ", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "ဒိုင်နမစ်စာသားများတွင် ပြသထားသောတန်ဖိုးများကိုသုံးပါ",
    // "Visible if"
    visibleIf: "မြင်နိုင်ပါက", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "ပုံမှန်တန်ဖိုးဖော်ပြချက်",
    // "Required if"
    requiredIf: "လိုအပ်ပါက", // Auto-generated string
    // "Reset value if"
    resetValueIf: "တန်ဖိုးပြန်သတ်မှတ်ပါက",
    // "Set value if"
    setValueIf: "တန်ဖိုးသတ်မှတ်ပါက",
    // "Validation rules"
    validators: "အတည်ပြုချက်များ",
    // "Bindings"
    bindings: "ချိတ်ဆက်မှုများ", // Auto-generated string
    // "Render as"
    renderAs: "အဖြစ်ဖော်ပြပါ", // Auto-generated string
    // "Attach original items"
    attachData: "မူရင်းအချက်အလက်များကိုထည့်ပါ", // Auto-generated string
    // "Choices"
    choices: "ရွေးချယ်မှုများ",
    // "Choices by url"
    choicesByUrl: "URL ဖြင့်ရွေးချယ်မှုများ", // Auto-generated string
    // "Currency"
    currency: "ငွေကြေး", // Auto-generated string
    // "Cell hint"
    cellHint: "ဆဲလ်အကြံပြုချက်", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "စုစုပေါင်းအများဆုံးဒစ်ဂျစ်များ", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "စုစုပေါင်းအနည်းဆုံးဒစ်ဂျစ်များ", // Auto-generated string
    // "Columns"
    columns: "ကော်လံများ", // Auto-generated string
    // "Detail elements"
    detailElements: "အသေးစိတ်အချက်အလက်များ", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "အလိုက်သင့်ပြုလုပ်ချက်များကိုခွင့်ပြုပါ", // Auto-generated string
    // "Default row value"
    defaultRowValue: "ပုံမှန်တန်းတန်ဖိုး", // Auto-generated string
    // detailPanelShowOnAdding: "Auto-expand new row details",
    choicesLazyLoadEnabled: "ရွေးချယ်မှုများကိုအလေးချိန်ဖြင့်တင်ပါ", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "ရွေးချယ်မှုများအရွယ်အစား", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "အဝင်အကွက်အစိတ်အပိုင်း", // Auto-generated string
    // "Item component"
    itemComponent: "အချက်အလက်အစိတ်အပိုင်း", // Auto-generated string
    // "Min"
    min: "အနည်းဆုံး", // Auto-generated string
    // "Max"
    max: "အများဆုံး", // Auto-generated string
    // "Min value expression"
    minValueExpression: "အနည်းဆုံးတန်ဖိုးဖော်ပြချက်", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "အများဆုံးတန်ဖိုးဖော်ပြချက်", // Auto-generated string
    // "Step"
    step: "အဆင့်", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "အလိုအလျောက်အကြံပြုချက်များ",
    // inputSize: "Input field width (in characters)",
    itemTitleWidth: "အချက်အလက်ခေါင်းစဉ်အကျယ် (px)",
    // "Input value alignment"
    inputTextAlignment: "အဝင်တန်ဖိုး alignment",
    // "Elements"
    elements: "အချက်အလက်များ", // Auto-generated string
    // "Content"
    content: "အကြောင်းအရာ", // Auto-generated string
    // "Navigation title"
    navigationTitle: "လမ်းညွှန်ခေါင်းစဉ်", // Auto-generated string
    // "Navigation description"
    navigationDescription: "လမ်းညွှန်ဖော်ပြချက်", // Auto-generated string
    // "Long tap"
    longTap: "ကြာရှည်ထိပါ", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "အဝင်အကွက်ကိုအလိုအလျောက်ချဲ့ပါ",
    // "Enable resize handle"
    allowResize: "ပြန်လည်ချဲ့နိုင်မှုကိုခွင့်ပြုပါ",
    // "Accept carriage return"
    acceptCarriageReturn: "Carriage return ကိုလက်ခံပါ", // Auto-generated string
    // "Display mode"
    displayMode: "ပြသမှု mode",
    // "Rate type"
    rateType: "အဆင့်သတ်မှတ်မှုအမျိုးအစား", // Auto-generated string
    // "Label"
    label: "တံဆိပ်", // Auto-generated string
    // "Content mode"
    contentMode: "အကြောင်းအရာ mode",
    // "Image and thumbnail fit"
    imageFit: "ပုံနှင့် thumbnail ကိုက်ညီမှု",
    // "Alt text"
    altText: "အခြားစာသား",
    // "Height"
    height: "အမြင့်", // Auto-generated string
    // "Height on smartphones"
    mobileHeight: "မိုဘိုင်းအမြင့်",
    // "Pen color"
    penColor: "ခဲတံအရောင်", // Auto-generated string
    // "Background color"
    backgroundColor: "နောက်ခံအရောင်",
    // "Template elements"
    templateElements: "နမူနာအချက်အလက်များ", // Auto-generated string
    // "Operator"
    operator: "စစ်ဆင်ရေး", // Auto-generated string
    // "Is variable"
    isVariable: "အပြောင်းအလဲဖြစ်ပါသလား", // Auto-generated string
    // "Run expression"
    runExpression: "ဖော်ပြချက်ကိုပြေးပါ", // Auto-generated string
    // "Show caption"
    showCaption: "အကြောင်းပြချက်ကိုပြပါ", // Auto-generated string
    // "Icon name"
    iconName: "အိုင်ကွန်နာမည်", // Auto-generated string
    // "Icon size"
    iconSize: "အိုင်ကွန်အရွယ်အစား", // Auto-generated string
    // "Precision"
    precision: "တိကျမှု", // Auto-generated string
    // "Matrix drag handle area"
    matrixDragHandleArea: "Matrix ဆွဲယူမှု handle အကျယ်", // Auto-generated string
    // "Background image"
    backgroundImage: "နောက်ခံပုံ",
    // "Background image fit"
    backgroundImageFit: "နောက်ခံပုံကိုက်ညီမှု", // Auto-generated string
    // "Background image attachment"
    backgroundImageAttachment: "နောက်ခံပုံဆက်စပ်မှု", // Auto-generated string
    // "Background opacity"
    backgroundOpacity: "နောက်ခံ opacity", // Auto-generated string
    // "Allow selective ranking"
    selectToRankEnabled: "ရွေးချယ်မှုအဆင့်သတ်မှတ်မှုကိုခွင့်ပြုပါ",
    // "Ranking area alignment"
    selectToRankAreasLayout: "အဆင့်သတ်မှတ်မှုနေရာ alignment",
    // "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "ရွေးချယ်မှုအားလုံးကိုရွေးချယ်ပါကပြသရန်စာသား",
    // "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "အဆင့်သတ်မှတ်မှုနေရာအတွက် placeholder စာသား",
    // "Allow camera access"
    allowCameraAccess: "ကင်မရာဝင်ရောက်ခွင့်ပြုပါ", // Auto-generated string
    // "Rating icon color mode"
    scaleColorMode: "အဆင့်သတ်မှတ်မှုအိုင်ကွန်အရောင် mode",
    // "Smileys color scheme"
    rateColorMode: "အပြုံးအရောင်စနစ်",
    // "Copy display value"
    copyDisplayValue: "ပြသမှုတန်ဖိုးကိုကူးယူပါ", // Auto-generated string
    // "Column span"
    effectiveColSpan: "အကျိုးရှိသောကော်လံ span",
    // "Progress bar area width"
    progressBarInheritWidthFrom: "တိုးတက်မှုဘားအကျယ်"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "အဆင့်မြင့် mode",
    // "Page"
    pageTitle: "စာမျက်နှာ",
    // "Question box"
    questionTitle: "မေးခွန်း box",
    // "Input element"
    editorPanel: "အဝင်အချက်အလက်",
    // "Lines"
    lines: "လိုင်းများ",
    // "Default"
    primaryDefaultColor: "ပုံမှန်",
    // "Hover"
    primaryDarkColor: "Hover",
    // "Selected"
    primaryLightColor: "ရွေးချယ်ထားသော",
    // "Background color"
    backgroundDimColor: "နောက်ခံအရောင်",
    // "Corner radius"
    cornerRadius: "ထောင့်အချိုး",
    // "Default background"
    backcolor: "ပုံမှန်နောက်ခံ",
    // "Hover background"
    hovercolor: "Hover နောက်ခံ",
    // "Border decoration"
    borderDecoration: "စက်ဝိုင်းအလှဆင်မှု",
    // "Font color"
    fontColor: "ဖောင့်အရောင်",
    // "Background color"
    backgroundColor: "နောက်ခံအရောင်",
    // "Default color"
    primaryForecolor: "ပုံမှန်အရောင်",
    // "Disabled color"
    primaryForecolorLight: "ပိတ်ထားသောအရောင်",
    // "Font"
    font: "ဖောင့်",
    // "Darker"
    borderDefault: "မှောင်သော",
    // "Lighter"
    borderLight: "အလင်းသော",
    // "Font family"
    fontFamily: "ဖောင့်မိသားစု",
    // "Regular"
    fontWeightRegular: "ပုံမှန်",
    // "Heavy"
    fontWeightHeavy: "ထူသော",
    // "Semi-bold"
    fontWeightSemiBold: "Semi-bold",
    // "Bold"
    fontWeightBold: "ထူထဲသော",
    // "Color"
    color: "အရောင်",
    // "Placeholder color"
    placeholderColor: "Placeholder အရောင်",
    // "Size"
    size: "အရွယ်အစား",
    // "Opacity"
    opacity: "Opacity",
    // "X"
    boxShadowX: "X",
    // "Y"
    boxShadowY: "Y",
    // "Add Shadow Effect"
    boxShadowAddRule: "အရိပ်အကျိုးသက်ရောက်မှုထည့်ပါ",
    // "Blur"
    boxShadowBlur: "Blur",
    // "Spread"
    boxShadowSpread: "ပြန့်",
    // "Drop"
    boxShadowDrop: "Drop",
    // "Inner"
    boxShadowInner: "Inner",
    names: {
      // "Default"
      default: "ပုံမှန်",
      // "Sharp"
      sharp: "ထက်သော",
      // "Borderless"
      borderless: "Borderless",
      // "Flat"
      flat: "Flat",
      // "Plain"
      plain: "ရိုးရိုး",
      // "Double Border"
      doubleborder: "Double Border",
      // "Layered"
      layered: "Layered",
      // "Solid"
      solid: "Solid",
      // "3D"
      threedimensional: "3D",
      // "Contrast"
      contrast: "Contrast"
    },
    colors: {
      // "Teal"
      teal: "Teal",
      // "Blue"
      blue: "အပြာရောင်",
      // "Purple"
      purple: "ခရမ်းရောင်",
      // "Orchid"
      orchid: "Orchid",
      // "Tulip"
      tulip: "Tulip",
      // "Brown"
      brown: "အညိုရောင်",
      // "Green"
      green: "အစိမ်းရောင်",
      // "Gray"
      gray: "မီးခိုးရောင်"
    }
  },
  creatortheme: {
    // "Surface background"
    "--sjs-special-background": "မျက်နှာပြင်နောက်ခံ",
    // "Primary"
    "--sjs-primary-background-500": "Primary",
    // "Secondary"
    "--sjs-secondary-background-500": "Secondary",
    // "Surface"
    surfaceScale: "မျက်နှာပြင်",
    // "UI elements"
    userInterfaceBaseUnit: "UI အချက်အလက်များ",
    // "Font"
    fontScale: "ဖောင့်",
    names: {
      // "Survey Creator 2020"
      sc2020: "Survey Creator 2020",
      // "Light"
      "default-light": "အလင်း",
      // "Dark"
      "default-dark": "မှောင်",
      // "Contrast"
      "default-contrast": "Contrast"
    }
  }
};

setupLocale({ localeCode: "mm", strings: mmStrings });