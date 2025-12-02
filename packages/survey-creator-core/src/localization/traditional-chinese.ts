import { setupLocale } from "survey-creator-core";

export var traditionalChineseTranslation = {
  // survey templates
  survey: {
    // "Edit"
    edit: "編輯",
    // [Auto-translated] "Watch and learn how to create surveys"
    externalHelpLink: "觀看並瞭解如何創建調查",
    // [Auto-translated] "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "請將問題放置於此",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "創建規則以自定義調查流。",
    // "Copy"
    copy: "複製",
    // [Auto-translated] "Duplicate"
    duplicate: "重複",
    // "Add to toolbox"
    addToToolbox: "添加到工具箱",
    // "Delete Panel"
    deletePanel: "刪除面板",
    // "Delete Question"
    deleteQuestion: "刪除題目",
    // "Convert to"
    convertTo: "轉變為",
    // [Auto-translated] "Drag element"
    drag: "拖動元素"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "測試問卷",
    // "Themes"
    theme: "主題",
    // "Translations"
    translation: "譯本",
    // "Designer"
    designer: "問卷設計器",
    // "JSON Editor"
    json: "JSON 編輯器",
    // [Auto-translated] "Logic"
    logic: "邏輯"
  },
  // Question types
  qt: {
    // [Auto-translated] "Default"
    default: "違約",
    // "Checkboxes"
    checkbox: "多項選擇",
    // "Long Text"
    comment: "多行文本框",
    // [Auto-translated] "Image Picker"
    imagepicker: "圖像選取器",
    // [Auto-translated] "Ranking"
    ranking: "排名",
    // [Auto-translated] "Image"
    image: "圖像",
    // "Dropdown"
    dropdown: "下拉框",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "多選下拉清單",
    // "File Upload"
    file: "文件上傳",
    // "HTML"
    html: "Html 代碼",
    // "Single-Select Matrix"
    matrix: "矩陣 (單選題)",
    // "Multi-Select Matrix"
    matrixdropdown: "矩陣 (下拉框)",
    // "Dynamic Matrix"
    matrixdynamic: "矩陣 (動態問題)",
    // "Multiple Textboxes"
    multipletext: "文本框組",
    // "Panel"
    panel: "面板",
    // "Dynamic Panel"
    paneldynamic: "面板(動態)",
    // "Radio Button Group"
    radiogroup: "單項選擇",
    // "Rating Scale"
    rating: "評分",
    // [Auto-translated] "Slider"
    slider: "滑塊",
    // "Single-Line Input"
    text: "文本框",
    // "Yes/No (Boolean)"
    boolean: "布林選項",
    // "Expression (read-only)"
    expression: "表達式",
    // [Auto-translated] "Signature"
    signaturepad: "簽名",
    // [Auto-translated] "Button Group"
    buttongroup: "按鈕組"
  },
  toolboxCategories: {
    // "General"
    general: "常規",
    // "Choice Questions"
    choice: "選擇題",
    // "Text Input Questions"
    text: "文本輸入問題",
    // "Containers"
    containers: "器皿",
    // "Matrix Questions"
    matrix: "矩陣問題",
    // "Misc"
    misc: "雜項"
  },
  // Strings in SurveyJS Creator
  ed: {
    // [Auto-translated] "Default ({0})"
    defaultLocale: "預設值 （{0}）",
    // "Survey"
    survey: "調查問卷",
    // [Auto-translated] "Settings"
    settings: "設置",
    // [Auto-translated] "Open settings"
    settingsTooltip: "打開設置",
    // [Auto-translated] "Survey Settings"
    surveySettings: "調查設置",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "調查設置",
    // [Auto-translated] "Theme Settings"
    themeSettings: "主題設置",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "主題設置",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Creator 設置",
    // [Auto-translated] "Show Panel"
    showPanel: "顯示面板",
    // [Auto-translated] "Hide Panel"
    hidePanel: "“隱藏”面板",
    // [Auto-translated] "Select previous"
    prevSelected: "選擇上一個",
    // [Auto-translated] "Select next"
    nextSelected: "選擇下一步",
    // [Auto-translated] "Focus previous"
    prevFocus: "焦點 上一頁",
    // [Auto-translated] "Focus next"
    nextFocus: "接下來的重點",
    // [Auto-translated] "Survey"
    surveyTypeName: "調查",
    // [Auto-translated] "Page"
    pageTypeName: "頁",
    // [Auto-translated] "Panel"
    panelTypeName: "面板",
    // [Auto-translated] "Question"
    questionTypeName: "問題",
    // [Auto-translated] "Column"
    columnTypeName: "列",
    // "Add New Page"
    addNewPage: "添加新頁面",
    // [Auto-translated] "Scroll to the Right"
    moveRight: "向右滾動",
    // [Auto-translated] "Scroll to the Left"
    moveLeft: "向左滾動",
    // "Delete Page"
    deletePage: "刪除頁面",
    // "Edit Page"
    editPage: "編輯頁面",
    // [Auto-translated] "Edit"
    edit: "編輯",
    // "page"
    newPageName: "頁面",
    // "question"
    newQuestionName: "問題",
    // "panel"
    newPanelName: "面板",
    // [Auto-translated] "text"
    newTextItemName: "發簡訊",
    // [Auto-translated] "Default"
    defaultV2Theme: "違約",
    // [Auto-translated] "Modern"
    modernTheme: "摩登",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "預設（舊版）",
    // "Preview Survey Again"
    testSurveyAgain: "再次測試問卷",
    // "Survey width: "
    testSurveyWidth: "問卷寬度: ",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "你必須導航到",
    // "Save Survey"
    saveSurvey: "保存問卷",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "保存調查",
    // [Auto-translated] "Save Theme"
    saveTheme: "保存主題",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "保存主題",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "隱藏錯誤",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "顯示錯誤",
    // "Undo"
    undo: "還原",
    // "Redo"
    redo: "重做",
    // [Auto-translated] "Undo last change"
    undoTooltip: "恢復上次更改",
    // [Auto-translated] "Redo the change"
    redoTooltip: "重做更改",
    // [Auto-translated] "Expand"
    expandTooltip: "擴大",
    // [Auto-translated] "Collapse"
    collapseTooltip: "崩潰",
    // "Expand All"
    expandAllTooltip: "全部展開",
    // "Collapse All"
    collapseAllTooltip: "全部摺疊",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "放大",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "縮放到 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "縮小",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "鎖定問題的展開/摺疊狀態",
    // [Auto-translated] "Show more"
    showMoreChoices: "顯示更多",
    // [Auto-translated] "Show less"
    showLessChoices: "顯示更少",
    // [Auto-translated] "Copy"
    copy: "複製",
    // [Auto-translated] "Cut"
    cut: "切",
    // [Auto-translated] "Paste"
    paste: "糊",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "將選取內容複製到剪貼簿",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "將所選取內容剪下剪貼簿",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "從剪貼簿粘貼",
    // "Options"
    options: "選項",
    // "Generate Valid JSON"
    generateValidJSON: "生成 JSON",
    // "Generate Readable JSON"
    generateReadableJSON: "生成易讀的 JSON",
    // "Toolbox"
    toolbox: "工具箱",
    // [Auto-translated] "Properties"
    "property-grid": "性能",
    // [Auto-translated] "Search"
    toolboxSearch: "搜索",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "鍵入以搜尋...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "未找到結果",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "鍵入以搜尋...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "未找到結果",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "開始配置表單",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "按兩下任何類別圖示以瀏覽調查設置。將測量元素添加到設計圖面后，其他設置將變為可用。",
    // "Please correct JSON."
    correctJSON: "修正 JSON",
    // "Survey Results "
    surveyResults: "問卷結果: ",
    // [Auto-translated] "As Table"
    surveyResultsTable: "如表",
    // [Auto-translated] "As JSON"
    surveyResultsJson: "作為 JSON",
    // [Auto-translated] "Question Title"
    resultsTitle: "問題標題",
    // [Auto-translated] "Question Name"
    resultsName: "問題名稱",
    // [Auto-translated] "Answer Value"
    resultsValue: "答案值",
    // [Auto-translated] "Display Value"
    resultsDisplayValue: "顯示值",
    // "Modified"
    modified: "已修改",
    // "Saving"
    saving: "保存中...",
    // "Saved"
    saved: "已保存",
    // [Auto-translated] "Error"
    propertyEditorError: "錯誤",
    // [Auto-translated] "Error! Editor content is not saved."
    saveError: "錯誤！不保存編輯器內容。",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "語言設置",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "主題設置",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "添加語言",
    // [Auto-translated] "Languages"
    translationLanguages: "語言",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "您確定要刪除此語言的所有字串嗎？",
    // [Auto-translated] "Select language to translate"
    translationAddLanguage: "選擇要翻譯的語言",
    // [Auto-translated] "All Strings"
    translationShowAllStrings: "所有字串",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "僅使用的字串",
    // [Auto-translated] "All Pages"
    translationShowAllPages: "所有頁面",
    // [Auto-translated] "No strings to translate. Please change the filter."
    translationNoStrings: "無需翻譯字串。請更換過濾器。",
    // [Auto-translated] "Export to CSV"
    translationExportToSCVButton: "匯出為CSV",
    // [Auto-translated] "Import from CSV"
    translationImportFromSCVButton: "從 CSV 導入",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "自動翻譯全部",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "翻譯語言組合：",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "未翻譯的字串",
    // [Auto-translated] "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "將{0}與預設區域設置合併",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "譯本。。。",
    // [Auto-translated] "Source: "
    translationSource: "源：",
    // [Auto-translated] "Target: "
    translationTarget: "目標：",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "不支援YouTube連結。",
    // [Auto-translated] "Export"
    themeExportButton: "出口",
    // [Auto-translated] "Import"
    themeImportButton: "進口",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "出口",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "進口",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "複製到剪貼板",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "將主題設置重置為預設值",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "你真的要重置主題嗎？您的所有自定義項都將丟失。",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "是，重置主題",
    // [Auto-translated] "Bold"
    bold: "大膽",
    // [Auto-translated] "Italic"
    italic: "斜體的",
    // [Auto-translated] "Underline"
    underline: "下劃線",
    // [Auto-translated] "Add Question"
    addNewQuestion: "添加問題",
    // [Auto-translated] "Select page..."
    selectPage: "選擇頁面...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "選擇是從",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "選項是從 Web 服務載入的。",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "前往“設置”",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "載入選項的預覽",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML內容將在這裡。",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "在此處從工具箱中刪除問題。",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "調查為空。從工具箱中拖動元素或按下下面的按鈕。",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "頁面為空。從工具箱中拖動元素或按下下面的按鈕。",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "將圖像拖放到此處或按下下面的按鈕並選擇要上傳的圖像",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "按兩下下面的「添加問題」 按鈕開始創建表單。",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "您的表單為空",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "您的表單為空",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "從工具箱中拖動元素或按下下面的按鈕。",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "從工具箱中拖動元素或按下下面的按鈕。",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "無預覽",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "無預覽",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "調查不包含任何可見元素。",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "調查不包含任何可見元素。",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "無需翻譯字串",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "無需翻譯字串",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "將元素添加到表單或更改工具列中的字串篩選器。",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "將元素添加到表單或更改工具列中的字串篩選器。",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "按兩下下面的「添加問題」 按鈕，向頁面添加新元素。",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "按下下面的「添加問題」 按鈕，將新元素添加到面板中。",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "點擊下面的按鈕，選擇要上傳的圖片",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "選擇圖像",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "新增{0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[徽標]",
    // [Auto-translated] "Item "
    choices_Item: "專案",
    // [Auto-translated] "Select a file"
    selectFile: "選擇檔案",
    // [Auto-translated] "Remove the file"
    removeFile: "刪除檔案",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "添加新規則",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "創建規則以自定義調查流。",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "無邏輯規則",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "無邏輯規則",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "創建規則以自定義調查流程。",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "創建規則以自定義調查流程。",
      // [Auto-translated] "Show/hide page"
      page_visibilityName: "顯示/隱藏頁面",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "啟用/禁用頁面",
      // [Auto-translated] "Make page required"
      page_requireName: "將頁面設為必填項",
      // [Auto-translated] "Show/hide panel"
      panel_visibilityName: "顯示/隱藏面板",
      // [Auto-translated] "Enable/disable panel"
      panel_enableName: "啟用/禁用面板",
      // [Auto-translated] "Make panel required"
      panel_requireName: "使面板成為必填項",
      // [Auto-translated] "Show/hide question"
      question_visibilityName: "顯示/隱藏問題",
      // [Auto-translated] "Enable/disable question"
      question_enableName: "啟用/禁用問題",
      // [Auto-translated] "Make question required"
      question_requireName: "提出必填題",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "重置問題值",
      // [Auto-translated] "Set question value"
      question_setValueName: "設置問題值",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "顯示/隱藏列",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "啟用/禁用列",
      // [Auto-translated] "Make column required"
      column_requireName: "使列成為必填項",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "重置列值",
      // [Auto-translated] "Set column value"
      column_setValueName: "設置列值",
      // [Auto-translated] "Complete survey"
      trigger_completeName: "完成調查",
      // [Auto-translated] "Set answer"
      trigger_setvalueName: "設置答案",
      // [Auto-translated] "Copy answer"
      trigger_copyvalueName: "複製答案",
      // [Auto-translated] "Skip to question"
      trigger_skipName: "跳至問題",
      // [Auto-translated] "Run expression"
      trigger_runExpressionName: "運行表達式",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "設置「調查完成」頁面標記",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "當邏輯表達式計算結果為 true 時，使頁面可見。否則，請保持頁面不可見。",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "當邏輯表達式計算結果為 true 時，使頁面可見。否則，請保持面板不可見。",
      // [Auto-translated] "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "當邏輯表達式計算結果為 true 時，啟用面板及其中的所有元素。否則，請禁用它們。",
      // [Auto-translated] "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "當邏輯表達式的計算結果為 true 時，使問題可見。否則，請保持問題不可見。",
      // [Auto-translated] "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "當邏輯表達式的計算結果為 true 時啟用問題。否則，請禁用該問題。",
      // [Auto-translated] "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "當邏輯表達式的計算結果為 true 時，Question 變為必填項。",
      // [Auto-translated] "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "當邏輯表達式的計算結果為 true 時，調查結束，受訪者將看到「謝謝」頁面。",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "當邏輯表達式中使用的問題值發生更改，並且表達式的計算結果為 true 時，將指定值分配給所選問題。",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "當邏輯表達式中使用的問題值發生更改，並且表達式的計算結果為 true 時，所選問題的值將複製到另一個問題中。",
      // [Auto-translated] "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "當邏輯表達式的計算結果為 true 時，調查將聚焦/跳轉到所選問題。",
      // [Auto-translated] "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "當邏輯表達式的計算結果為 true 時，調查將計算另一個運算式。可選地，可以將後一個表達式的結果作為值分配給所選問題",
      // [Auto-translated] "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "如果邏輯表達式的計算結果為 true，則「謝謝」頁面將顯示指定的內容。",
      // [Auto-translated] "When expression: '{0}' returns true"
      itemExpressionText: "當表達式：「{0}」返回 true", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "新規則",
      // [Auto-translated] "make page {0} visible"
      page_visibilityText: "使頁面{0}可見", // {0} page name
      // [Auto-translated] "make panel {0} visible"
      panel_visibilityText: "使面板{0}可見", // {0} panel name
      // [Auto-translated] "make panel {0} enable"
      panel_enableText: "使面板{0}啟用", // {0} panel name
      // [Auto-translated] "make question {0} visible"
      question_visibilityText: "使問題{0}可見", // {0} question name
      // [Auto-translated] "make question {0} enable"
      question_enableText: "使問題{0}啟用", // {0} question name
      // [Auto-translated] "make question {0} required"
      question_requireText: "將問題{0}為必填項", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "重置問題的值：{0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "分配值：{1}問題：{0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "使問題{1}的列{0}可見", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "使問題{1}列{0}啟用", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "{0}將問題{1}列為必填項", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "重置列的儲存格值：{0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "將儲存格值：{1}分配給列：{0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "一個表達式，其結果將分配給目標問題。",
      // [Auto-translated] "survey becomes completed"
      trigger_completeText: "調查完成",
      // [Auto-translated] "set into question: {0} value {1}"
      trigger_setvalueText: "受到質疑：{0}價值{1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "明確問題值：{0}", // {0} question name
      // [Auto-translated] "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "複製到問題：{0}問題 {1} 的值", // {0} and {1} question names
      // [Auto-translated] "survey skip to the question {0}"
      trigger_skipText: "調查 跳至問題{0}", // {0} question name
      // [Auto-translated] "run expression: '{0}'"
      trigger_runExpressionText1: "運行表達式：“{0}”", // {0} the expression
      // [Auto-translated] " and set its result into question: {0}"
      trigger_runExpressionText2: "並質疑其結果：{0}", // {0} question name
      // [Auto-translated] "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "顯示「謝謝」頁面的自定義文字。",
      // [Auto-translated] "All Questions"
      showAllQuestions: "所有問題",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "所有操作類型",
      // [Auto-translated] "Condition(s)"
      conditions: "條件",
      // [Auto-translated] "Action(s)"
      actions: "操作 （s）",
      // [Auto-translated] "Define condition(s)"
      expressionEditorTitle: "定義條件",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "定義操作",
      // [Auto-translated] "Delete Action"
      deleteAction: "刪除操作",
      // [Auto-translated] "Add Action"
      addNewAction: "添加操作",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "選擇操作...",
      // [Auto-translated] "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "邏輯表達式為空或無效。請更正。",
      // [Auto-translated] "Please add at least one action."
      noActionError: "請添加至少一個作。",
      // [Auto-translated] "Please fix issues in your action(s)."
      actionInvalid: "請解決作中的問題。",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "邏輯規則不完整",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "您尚未完成某些邏輯規則。如果現在離開該選項卡，更改將丟失。是否仍要離開選項卡而不完成更改？",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "是的",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "不，我想完成規則"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "面板名稱",
      // [Auto-translated] "Panel title"
      title: "面板標題",
      // [Auto-translated] "Panel description"
      description: "面板說明",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "如果出現以下情況，則使面板可見",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "如果出現以下情況，則使面板成為必需的",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "小組內的問題順序",
      // [Auto-translated] "Move the panel to page"
      page: "將面板移動到頁面",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "在新行上顯示面板",
      // [Auto-translated] "Panel collapse state"
      state: "面板摺疊狀態",
      // [Auto-translated] "Inline panel width"
      width: "內聯面板寬度",
      // [Auto-translated] "Minimum panel width"
      minWidth: "最小面板寬度",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "最大面板寬度",
      // [Auto-translated] "Number this panel"
      showNumber: "對此面板進行編號"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "有效寬度，%",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "問題標題寬度，圖元"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "面板名稱",
      // [Auto-translated] "Panel title"
      title: "面板標題",
      // [Auto-translated] "Panel description"
      description: "面板說明",
      // [Auto-translated] "Entry display mode"
      displayMode: "進入顯示模式",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "如果出現以下情況，則使面板可見",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "如果出現以下情況，則使面板成為必需的",
      // [Auto-translated] "Move the panel to page"
      page: "將面板移動到頁面",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "在新行上顯示面板",
      // [Auto-translated] "Panel collapse state"
      state: "面板摺疊狀態",
      // [Auto-translated] "Inline panel width"
      width: "內嵌面板寬度",
      // [Auto-translated] "Minimum panel width"
      minWidth: "最小面板寬度",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "最大面板寬度",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "確認條目移除",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "條目描述模���",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "條目標題模式",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "空面板文本",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "選項卡標題模式",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "選項卡標題佔位元",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "如果出現以下情況，則單個條目可見",
      // [Auto-translated] "Number the panel"
      showNumber: "為面板編號",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "面板標題對齊方式",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "面板描述對齊方式",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "問題標題對齊",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "問題標題寬度",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "錯誤消息對齊",
      // [Auto-translated] "New entry location"
      newPanelPosition: "新入場地點",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "防止以下問題中的重複回答"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "問題名稱",
      // [Auto-translated] "Question title"
      title: "問題標題",
      // [Auto-translated] "Question description"
      description: "問題描述",
      // [Auto-translated] "Show the title and description"
      showTitle: "顯示標題和描述",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "如果出現以下情況，請使問題可見",
      // [Auto-translated] "Make the question required if"
      requiredIf: "如果出現以下情況，則將問題設為必填項",
      // [Auto-translated] "Move the question to page"
      page: "將問題移至頁面",
      // [Auto-translated] "Question box collapse state"
      state: "問題框摺疊狀態",
      // [Auto-translated] "Number this question"
      showNumber: "為這個問題編號",
      // [Auto-translated] "Question title alignment"
      titleLocation: "問題標題對齊方式",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "問題描述對齊方式",
      // [Auto-translated] "Error message alignment"
      errorLocation: "錯誤消息對齊",
      // [Auto-translated] "Increase the inner indent"
      indent: "增加內縮進",
      // [Auto-translated] "Inline question width"
      width: "內聯問題寬度",
      // [Auto-translated] "Minimum question width"
      minWidth: "最小問題寬度",
      // [Auto-translated] "Maximum question width"
      maxWidth: "最大問題寬度",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "更新輸入欄位值"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "簽名區域寬度",
      // [Auto-translated] "Signature area height"
      signatureHeight: "簽名區高度",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "自動縮放簽名區域",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "在簽名區域內顯示佔位元",
      // [Auto-translated] "Placeholder text"
      placeholder: "佔位元文本",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "唯讀或預覽模式下的佔位元文本",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "在簽名區域內顯示「清除」 按鈕",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "最小筆畫寬度",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "最大行程寬度",
      // [Auto-translated] "Stroke color"
      penColor: "描邊顏色"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "輸入欄位高度（以行為單位）"
    },
    // "Question numbering"
    showQuestionNumbers: "顯示問題編號",
    // "Question indexing type"
    questionStartIndex: "問題起始標誌 (1, 2 or 'A', 'a')",
    // [Auto-translated] "Expression"
    expression: {
      // [Auto-translated] "Expression name"
      name: "表達式名稱",
      // [Auto-translated] "Expression title"
      title: "表達式標題",
      // [Auto-translated] "Expression description"
      description: "表達式說明",
      // [Auto-translated] "Expression"
      expression: "表達"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "表達"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "表達"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "調查標題",
      // [Auto-translated] "Survey description"
      description: "調查說明",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "將調查設為唯讀"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "頁面名稱",
      // [Auto-translated] "Page title"
      title: "頁面標題",
      // [Auto-translated] "Page description"
      description: "頁面描述",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "如果出現以下情況，則使頁面可見",
      // [Auto-translated] "Make the page required if"
      requiredIf: "如果出現以下情況，則使頁面為必填項",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "完成頁面的時間限制",
      // [Auto-translated] "Question order on the page"
      questionOrder: "頁面上的問題順序"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "列名稱",
      // [Auto-translated] "Column title"
      title: "專欄標題",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "防止重複回應",
      // [Auto-translated] "Column width"
      width: "列寬",
      // [Auto-translated] "Minimum column width"
      minWidth: "最小列寬",
      // [Auto-translated] "Input field height (in lines)"
      rows: "輸入欄位高度（以行為單位）",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "如果出現以下情況，則使列可見",
      // [Auto-translated] "Make the column required if"
      requiredIf: "如果滿足以下條件，則使該列為必填項",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "每個選項都在單獨的列中"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "清除同一列中的其他人"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "名字",
      // [Auto-translated] "Title"
      title: "標題"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "在調查結果中保存掩碼值"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "價值模式"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "最小值",
      // [Auto-translated] "Maximum value"
      max: "最大值"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "允許負值",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "千分隔符",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "小數點分隔符",
      // [Auto-translated] "Value precision"
      precision: "值精度",
      // [Auto-translated] "Minimum value"
      min: "最小值",
      // [Auto-translated] "Maximum value"
      max: "最大值"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "貨幣前綴",
      // [Auto-translated] "Currency suffix"
      suffix: "貨幣後綴"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "選中時清除其他",
    // [Auto-translated] "Display both text and value"
    showValue: "同時顯示文字和值",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "要求使用者輸入註釋",
    // "Display area height"
    imageHeight: "圖片高度",
    // "Display area width"
    imageWidth: "圖片寬度",
    // "Join identifier"
    valueName: "Value name",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "動態文字的預設顯示值",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "標籤對齊",
    // [Auto-translated] "Input field width (in characters)"
    size: "輸入欄位寬度（以字元為單位）",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "單元格錯誤消息對齊方式",
    // [Auto-translated] "Enabled"
    enabled: "啟用",
    // [Auto-translated] "Disabled"
    disabled: "禁用",
    // [Auto-translated] "Inherit"
    inherit: "繼承",
    // "Apply"
    apply: "應用",
    // "OK"
    ok: "確定",
    // [Auto-translated] "Save"
    save: "救",
    // [Auto-translated] "Clear"
    clear: "清楚",
    // [Auto-translated] "Save"
    saveTooltip: "救",
    // "Cancel"
    cancel: "取消",
    // [Auto-translated] "Set"
    set: "設置",
    // "Reset"
    reset: "重置",
    // [Auto-translated] "Change"
    change: "改變",
    // [Auto-translated] "Refresh"
    refresh: "刷新",
    // "Close"
    close: "關閉",
    // "Delete"
    delete: "刪除",
    // [Auto-translated] "Add"
    add: "加",
    // "Add New"
    addNew: "新建",
    // [Auto-translated] "Click to add an item..."
    addItem: "點選以新增專案...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "按下以刪除該專案...",
    // [Auto-translated] "Drag the item"
    dragItem: "拖動專案",
    // [Auto-translated] "Other"
    addOther: "其他",
    // [Auto-translated] "Select All"
    addSelectAll: "全選",
    // [Auto-translated] "None"
    addNone: "沒有",
    // "Remove All"
    removeAll: "全部刪除",
    // "Edit"
    edit: "編輯器",
    // [Auto-translated] "Return without saving"
    back: "退貨而不保存",
    // [Auto-translated] "Return without saving"
    backTooltip: "退貨而不保存",
    // [Auto-translated] "Save and return"
    saveAndBack: "保存並返回",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "保存並返回",
    // [Auto-translated] "Done"
    doneEditing: "做",
    // [Auto-translated] "Edit Choices"
    editChoices: "編輯選項",
    // [Auto-translated] "Show Choices"
    showChoices: "顯示選項",
    // [Auto-translated] "Move"
    move: "移動",
    // "<empty>"
    empty: "<空>",
    // [Auto-translated] "Value is empty"
    emptyValue: "值為空",
    // "Manual Entry"
    fastEntry: "快速輸入",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "值“{0}”不是唯一的",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "請將項目數量限制在{0}到{1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "請輸入至少{0}專案",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "依以下格式輸入選擇選項清單及其 ID：\n\nid|選項\n\n選擇選項 ID 對受訪者不可見，可用於條件規則。",
    // "Form Entry"
    formEntry: "表單輸入",
    // "Test the service"
    testService: "測試服務",
    // [Auto-translated] "Please select the element"
    itemSelectorEmpty: "請選擇元素",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "請選擇操作",
    // [Auto-translated] "Select a question..."
    conditionSelectQuestion: "選擇一個問題...",
    // [Auto-translated] "Select a page..."
    conditionSelectPage: "選擇一個頁面...",
    // [Auto-translated] "Select a panel..."
    conditionSelectPanel: "選擇面板...",
    // [Auto-translated] "Please enter/select the value"
    conditionValueQuestionTitle: "請輸入/選擇值",
    // [Auto-translated] "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "按 ctrl+空格鍵獲取表達式完成提示",
    // [Auto-translated] "Current row"
    aceEditorRowTitle: "當前行",
    // [Auto-translated] "Current panel"
    aceEditorPanelTitle: "當前面板",
    // "For more details please check the documentation"
    showMore: "更多細節...",
    // [Auto-translated] "Available questions"
    assistantTitle: "可用問題",
    // [Auto-translated] "There is should be at least one column or row"
    cellsEmptyRowsColumns: "至少應該有一列或一行",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "提交前審核",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "由條件啟用",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "重置",
    // "Please enter a value"
    propertyIsEmpty: "請為該屬性設定一個值",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "請輸入唯一值",
    // [Auto-translated] "Please enter a unique name"
    propertyNameIsNotUnique: "請輸入唯一名稱",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "不要使用保留字：「專案」、「選項」、「面板」、“行”。",
    // [Auto-translated] "You don't have any items yet"
    listIsEmpty: "您還沒有任何物品",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "你還沒有任何選擇",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "您還沒有任何列",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "您還沒有佈局列",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "您還沒有任何行",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "尚無任何驗證規則",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "您還沒有任何自訂變數",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "您還沒有任何觸發器",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "您還沒有任何連結",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "您還沒有任何頁面",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "添加新選擇",
    // [Auto-translated] "Add new column"
    "addNew@columns": "添加新列",
    // [Auto-translated] "Add new row"
    "addNew@rows": "添加新行",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "添加新規則",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "添加新變數",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "添加新觸發器",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "添加新 URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "添加新頁面",
    // [Auto-translated] "Expression is empty"
    expressionIsEmpty: "表達式為空",
    // "Value"
    value: "值",
    // "Text"
    text: "顯示文本",
    // [Auto-translated] "Row ID"
    rowid: "行標識",
    // [Auto-translated] "Image or video file URL"
    imageLink: "圖片或視頻檔網址",
    // "Edit column: {0}"
    columnEdit: "編輯列: {0}",
    // "Edit item: {0}"
    itemEdit: "編輯選項: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Path",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "Web 服務 URL",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "從以下屬性獲取要存儲的值"
    },
    // "Get value to display from the following property"
    titleName: "Title name",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "從以下屬性獲取檔URL",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "接受空回應",
    // [Auto-translated] "Title"
    titlePlaceholder: "標題",
    // [Auto-translated] "Survey Title"
    surveyTitlePlaceholder: "調查標題",
    // [Auto-translated] "Page {num}"
    pageTitlePlaceholder: "頁數 {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "起始頁",
    // [Auto-translated] "Description"
    descriptionPlaceholder: "描述",
    // [Auto-translated] "Description"
    surveyDescriptionPlaceholder: "描述",
    // [Auto-translated] "Description"
    pageDescriptionPlaceholder: "描述",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "換行選項",
    // "Enable the \"Other\" option"
    showOtherItem: "可添加其他答案?",
    // "Rename the \"Other\" option"
    otherText: "其他答案文本",
    // [Auto-translated] "Enable the \"None\" option"
    showNoneItem: "啟用「無」選項",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "啟用「拒絕接聽」選項",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "啟用“不知道”選項",
    // [Auto-translated] "Rename the \"None\" option"
    noneText: "重新命名“無”選項",
    // [Auto-translated] "Enable the \"Select All\" option"
    showSelectAllItem: "啟用「全選」選項",
    // [Auto-translated] "Rename the \"Select All\" option"
    selectAllText: "重新命名「全選」選項",
    // [Auto-translated] "Minimum value for auto-generated items"
    choicesMin: "自動生成項的最小值",
    // [Auto-translated] "Maximum value for auto-generated items"
    choicesMax: "自動生成項的最大值",
    // [Auto-translated] "Step value for auto-generated items"
    choicesStep: "自動生成項的步進值",
    // "Name"
    name: "題目名",
    // "Title"
    title: "題目文本",
    // "Cell input type"
    cellType: "單元格類型",
    // "Column count"
    colCount: "列數",
    // "Choice order"
    choicesOrder: "設置選項順序",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "允許自訂選項",
    // "Visible"
    visible: "是否可見?",
    // "Required"
    isRequired: "是否為必填項?",
    // [Auto-translated] "Mark as required"
    markRequired: "標記為必填",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "刪除所需的標記",
    // [Auto-translated] "Require an answer in each row"
    eachRowRequired: "要求在每一行中都有答案",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "防止行中出現重複回應",
    // "Error message for required questions"
    requiredErrorText: "“必需”錯誤消息",
    // "Display the question on a new line"
    startWithNewLine: "問題是否新起一行?",
    // "Rows"
    rows: "文本框行數",
    // [Auto-translated] "Columns"
    cols: "列",
    // "Placeholder text within input field"
    placeholder: "占位文本",
    // "Show preview area"
    showPreview: "是否顯示圖像預覽?",
    // "Store file content in JSON result as text"
    storeDataAsText: "以 JSON 文本方式存儲文件",
    // "Maximum file size (in bytes)"
    maxSize: "文件最大尺寸 (Bytes)",
    // "Row count"
    rowCount: "默認行數",
    // [Auto-translated] "Columns layout"
    columnLayout: "列佈局",
    // [Auto-translated] "\"Add Row\" button alignment"
    addRowButtonLocation: "“添加行”按鈕對齊方式",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "將行轉置為列",
    // "\"Add Row\" button text"
    addRowText: "添加條目按鈕文本",
    // "\"Remove Row\" button text"
    removeRowText: "刪除條目按鈕文本",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "輸入欄位標題模式",
    // [Auto-translated] "Minimum rating value"
    rateMin: "最小額定值",
    // [Auto-translated] "Maximum rating value"
    rateMax: "最大評級值",
    // [Auto-translated] "Step value"
    rateStep: "步進值",
    // "Minimum value label"
    minRateDescription: "最小值提示",
    // "Maximum value label"
    maxRateDescription: "最大值提示",
    // "Input type"
    inputType: "文本框類型",
    // [Auto-translated] "Default Answer"
    defaultValue: "默認答案",
    // [Auto-translated] "Default texts"
    cellsDefaultRow: "預設文字",
    // [Auto-translated] "Edit survey settings"
    surveyEditorTitle: "編輯調查設置",
    // "Edit: {0}"
    qEditorTitle: "編輯問題: {0}",
    // [Auto-translated] "Maximum character limit"
    maxLength: "最大字元數限制",
    // [Auto-translated] "Build"
    buildExpression: "建",
    // [Auto-translated] "Edit"
    editExpression: "編輯",
    // [Auto-translated] "and"
    and: "和",
    // [Auto-translated] "or"
    or: "或",
    // [Auto-translated] "Remove"
    remove: "刪除",
    // [Auto-translated] "Add Condition"
    addCondition: "添加條件",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "選擇一個問題以開始配置條件。",
    // [Auto-translated] "If"
    if: "如果",
    // [Auto-translated] "then"
    then: "然後",
    // [Auto-translated] "Target question"
    setToName: "目標問題",
    // [Auto-translated] "Question to copy answer from"
    fromName: "要從中複製答案的問題",
    // [Auto-translated] "Question to skip to"
    gotoName: "要跳到的問題",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "規則不正確",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "添加到調查結果",
    // "Make the title and description visible"
    showTitle: "顯示/隱藏 標題",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "展開/摺疊標題",
    // "Select a survey language"
    locale: "默認語言",
    // [Auto-translated] "Select device type"
    simulator: "選擇設備類型",
    // [Auto-translated] "Switch to landscape orientation"
    landscapeOrientation: "切換到橫向",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "切換到縱向",
    // "Clear hidden question values"
    clearInvisibleValues: "清除隱藏值",
    // "Limit to one response"
    cookieName: "Cookie name (to disable run survey two times locally)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Send survey results on page next",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Store 'others' value in separate field",
    // "Show page titles"
    showPageTitles: "顯示頁面標題",
    // "Show page numbers"
    showPageNumbers: "顯示頁數",
    // "\"Previous Page\" button text"
    pagePrevText: "前一頁按鈕文本",
    // "\"Next Page\" button text"
    pageNextText: "後一頁按鈕文本",
    // "\"Complete Survey\" button text"
    completeText: "完成按鈕文本",
    // [Auto-translated] "\"Review Answers\" button text"
    previewText: "“查看答案”按鈕文本",
    // [Auto-translated] "\"Edit Answer\" button text"
    editText: "“編輯答案”按鈕文本",
    // "\"Start Survey\" button text"
    startSurveyText: "開始按鈕文本",
    // "Show navigation buttons"
    showNavigationButtons: "顯示導航按鈕 (默認導航)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "導航按鈕對齊",
    // "Show the \"Previous Page\" button"
    showPrevButton: "顯示前一頁按鈕 (用戶可返回至前一頁面)",
    // "First page is a start page"
    firstPageIsStartPage: "調查的第一頁面為起始頁.",
    // "Show the \"Thank You\" page"
    showCompletePage: "結尾展示完成後的頁面 (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "回答本頁所有問題後，自動跳轉到下一頁",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "自動完成調查",
    // "Show the progress bar"
    showProgressBar: "顯示進度條",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "進度條對齊",
    // "Question title alignment"
    questionTitleLocation: "問題的標題位置",
    // "Question title width"
    questionTitleWidth: "問題標題寬度",
    // "Required symbol(s)"
    requiredMark: "The question required symbol(s)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "問題標題模板, 默認為: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "問題錯誤定位",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "改變頁面時聚焦在第一個問題",
    // "Question order"
    questionOrder: "Elements order on the page",
    // "Time limit to complete the survey"
    timeLimit: "完成調查的最長時間",
    // "Time limit to complete one page"
    timeLimitPerPage: "完成調查中頁面的最長時間",
    // [Auto-translated] "Use a timer"
    showTimer: "使用計時器",
    // "Timer alignment"
    timerLocation: "顯示計時器面板",
    // "Timer mode"
    timerInfoMode: "顯示計時器面板模式",
    // "Enable entry addition"
    allowAddPanel: "允許添加面板",
    // "Enable entry removal"
    allowRemovePanel: "允許刪除面板",
    // "\"Add Entry\" button text"
    addPanelText: "添加面板文本",
    // "\"Remove Entry\" button text"
    removePanelText: "刪除面板文本",
    // "Show all elements on one page"
    isSinglePage: "在一個頁面上展示所有元素",
    // [Auto-translated] "HTML markup"
    html: "網頁標記",
    // [Auto-translated] "Answer"
    setValue: "答",
    // [Auto-translated] "Storage format"
    dataFormat: "存儲格式",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "啟用行添加",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "啟用行刪除",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "啟用行重新排序",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "如果指定了確切的顯示區域寬度或高度，則不適用。",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "最小顯示區域寬度",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "最大顯示區域寬度",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "最小顯示區域高度",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "最大顯示區域高度",
    // [Auto-translated] "Minimum value"
    minValue: "最小值",
    // [Auto-translated] "Maximum value"
    maxValue: "最大值",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "不區分大小寫",
    // [Auto-translated] "Minimum length (in characters)"
    minLength: "最小長度（以字元為單位）",
    // [Auto-translated] "Allow digits"
    allowDigits: "允許數位",
    // [Auto-translated] "Minimum count"
    minCount: "最小計數",
    // [Auto-translated] "Maximum count"
    maxCount: "最大計數",
    // [Auto-translated] "Regular expression"
    regex: "正則表達式",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "驗證訊息",
      // [Auto-translated] "Validation expression"
      expression: "驗證表達式",
      // [Auto-translated] "Notification type"
      notificationType: "通知類型",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "長度上限 （以字元為單位）"
    },
    // [Auto-translated] "Total row header"
    totalText: "總行標題",
    // [Auto-translated] "Aggregation method"
    totalType: "聚合方法",
    // [Auto-translated] "Total value expression"
    totalExpression: "總值表達式",
    // [Auto-translated] "Total value display format"
    totalDisplayStyle: "總值顯示格式",
    // [Auto-translated] "Currency"
    totalCurrency: "貨幣",
    // [Auto-translated] "Formatted string"
    totalFormat: "帶格式的字串",
    // [Auto-translated] "Survey logo"
    logo: "調查標誌",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "測量佈局",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "限制答案長度",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "限制註釋長度",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "評論區高度（以行為單位）",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "自動展開文字區域",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "允許用戶調整文字區域的大小",
    // "Update input field values"
    textUpdateMode: "更新文字問題值",
    // [Auto-translated] "Input mask type"
    maskType: "輸入掩碼類型",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "將焦點放在第一個無效答案上",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "運行驗證",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "驗證失去焦點時的空欄位",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "提交后重定向到外部連結",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "動態外部連結",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "用於顯示使用者是否已填寫此調查的標記",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "“謝謝”頁面標記",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "動態「謝謝」頁面標記",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "載入調查模型時要顯示的標記",
    // [Auto-translated] "Comment area text"
    commentText: "註釋區文本",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "自動完成類型",
    // "Label for \"True\""
    labelTrue: "“真實”標籤",
    // "Label for \"False\""
    labelFalse: "“虛假”標籤",
    // "Show the Clear button"
    allowClear: "顯示“清除”按鈕",
    // [Auto-translated] "Search mode"
    searchMode: "搜尋模式",
    // [Auto-translated] "Display format"
    displayStyle: "顯示格式",
    // [Auto-translated] "Formatted string"
    format: "帶格式的字串",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "最大小數位數",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "最小小數位數",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "顯示分組分隔符",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "啟用多個檔上傳",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "預覽上傳的圖片",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "接受的文件類型",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "等待上傳完成",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "確認文件刪除",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "行詳細資訊對齊方式",
    // [Auto-translated] "Minimum row count"
    minRowCount: "最小行數",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "最大行數",
    // "Confirm row removal"
    confirmDelete: "確認刪除行",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "確認消息",
    // [Auto-translated] "Initial number of entries"
    panelCount: "初始條目數",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "最少參賽作品數量",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "最大條目數",
    // [Auto-translated] "Initial entry state"
    panelsState: "初始進入狀態",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "“上一個條目”按鈕文本",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "“下一個條目”按鈕文本",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "“刪除條目”按鈕對齊方式",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "如果問題沒有行，則隱藏問題",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "如果沒有行，則隱藏列",
    // [Auto-translated] "Custom rating values"
    rateValues: "自訂評分值",
    // [Auto-translated] "Rating count"
    rateCount: "評分計數",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "評級配置",
    slider: {
      // [Auto-translated] "Min value"
      min: "最小值",
      // [Auto-translated] "Max value"
      max: "最大值",
      // [Auto-translated] "Step value"
      step: "步長值",
      // [Auto-translated] "Show scale labels"
      showLabels: "顯示刻度標籤",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "顯示工具提示",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "允許 Thumb Crossing",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "自動生成的標籤數量",
      // [Auto-translated] "Min value expression"
      minValueExpression: "最小值表達式",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "最大值表達式",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "刻度標籤配置",
      // [Auto-translated] "Slider type"
      sliderType: "滑塊類型",
      // [Auto-translated] "Min range length"
      minRangeLength: "最小範圍長度",
      // [Auto-translated] "Max range length"
      maxRangeLength: "最大範圍長度",
      // [Auto-translated] "Custom labels"
      customLabels: "自訂標籤",
      // [Auto-translated] "Label format"
      labelFormat: "標籤格式",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "工具提示格式"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "圖像高度",
      // [Auto-translated] "Image width"
      imageWidth: "圖像寬度"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "如果沒有選擇，則隱藏問題",
    // "Minimum width"
    minWidth: "最小寬度（以 CSS 接受的值為單位）",
    // "Maximum width"
    maxWidth: "最大寬度（以 CSS 接受的值為單位）",
    // "Width"
    width: "寬度（以 CSS 接受的值為單位）",
    // [Auto-translated] "Show column headers"
    showHeader: "顯示列標題",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "顯示水平滾動條",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "最小列寬",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "行標題寬度",
    // "Value to store when \"True\" is selected"
    valueTrue: "“真”值",
    // "Value to store when \"False\" is selected"
    valueFalse: "“假”值",
    // "\"Value is below minimum\" error message"
    minErrorText: "“值低於最小值”錯誤消息",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "“值超過最大值”錯誤消息",
    // "\"Empty comment\" error message"
    otherErrorText: "“空評論”錯誤消息",
    // "Error message for duplicate responses"
    keyDuplicationError: "“非唯一鍵值”錯誤消息",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "要選擇的最少選項",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "可供選擇的最大選擇",
    // [Auto-translated] "Logo width"
    logoWidth: "徽標寬度",
    // [Auto-translated] "Logo height"
    logoHeight: "標誌高度",
    // "Read-only"
    readOnly: "唯讀",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "在以下情況下禁用唯讀模式",
    // "\"No rows\" message"
    noRowsText: "“無行”消息",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "單獨的特殊選擇",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "複製以下問題的選項",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "要複製哪些選擇選項",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "使用以下矩陣、列或面板問題中的值作為選項ID",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "使用以下矩陣、列或面板問題中的值作為選擇文本",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "在進度條中顯示頁面標題",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "在進度條中顯示頁碼",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "添加註釋框",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "註釋框的佔位元文字",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "將標籤顯示為極值",
    // [Auto-translated] "Row order"
    rowOrder: "行順序",
    // [Auto-translated] "Column layout"
    columnsLayout: "列佈局",
    // [Auto-translated] "Nested column count"
    columnColCount: "嵌套列計數",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "正確答案",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "預設值",
    // [Auto-translated] "Cell Texts"
    cells: "單元格文本",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "選擇檔案或貼上檔案連結...",
    // "Prevent duplicate responses in the following column"
    keyName: "鍵列",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "如果出現以下情況，則使該選項可見",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "如果出現以下情況，則使該選項可選"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "如果出現以下情況，則使行可見",
      // [Auto-translated] "Make the row editable if"
      enableIf: "如果出現以下情況，則使行可編輯"
    },
    imageitemvalue: {
      // "Alt text"
      text: "可選文字"
    },
    // [Auto-translated] "Logo alignment"
    logoPosition: "徽標對齊",
    // [Auto-translated] "Add logo..."
    addLogo: "新增徽標...",
    // [Auto-translated] "Change logo..."
    changeLogo: "變更徽標...",
    logoPositions: {
      // [Auto-translated] "Remove logo"
      none: "刪除徽標",
      // [Auto-translated] "Left"
      left: "左",
      // [Auto-translated] "Right"
      right: "右",
      // [Auto-translated] "On the top"
      top: "在頂部",
      // [Auto-translated] "In the bottom"
      bottom: "在底部"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "預覽模式",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "啟用網格佈局",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "網格列",
    // [Auto-translated] "Mask settings"
    maskSettings: "蒙版設置",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "行詳細資訊錯誤消息對齊方式",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "面板佈局"
      },
      // "General"
      general: "通用項",
      // "Options"
      fileOptions: "選項",
      // "HTML Editor"
      html: "HTML 編輯器",
      // "Columns"
      columns: "設置列",
      // "Rows"
      rows: "設置行",
      // "Choice Options"
      choices: "設置選項",
      // [Auto-translated] "Items"
      items: "專案",
      // "Visible If"
      visibleIf: "設置可見條件",
      // "Editable If"
      enableIf: "Enable If",
      // [Auto-translated] "Required If"
      requiredIf: "如果",
      // "Rating Values"
      rateValues: "設置評分值",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "滑塊設置",
      // "Choices from a Web Service"
      choicesByUrl: "通過 URL 導入選項",
      // "Default Choices"
      matrixChoices: "默認選項",
      // "Text Inputs"
      multipleTextItems: "文本輸入",
      // [Auto-translated] "Numbering"
      numbering: "編號",
      // "Validators"
      validators: "校驗規則",
      // "Navigation"
      navigation: "導航",
      // "Question Settings"
      question: "問題",
      // [Auto-translated] "Pages"
      pages: "頁面",
      // "Quiz Mode"
      timer: "問卷計時器",
      // [Auto-translated] "Calculated Values"
      calculatedValues: "計算值",
      // [Auto-translated] "Triggers"
      triggers: "觸發器",
      // [Auto-translated] "Title template"
      templateTitle: "標題範本",
      // [Auto-translated] "Totals"
      totals: "總數",
      // "Conditions"
      logic: "邏輯",
      // [Auto-translated] "Input Mask Settings"
      mask: "輸入掩碼設置",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "面板佈局",
        // [Auto-translated] "Layout"
        question: "佈局",
        // [Auto-translated] "Layout"
        base: "佈局"
      },
      // [Auto-translated] "Data"
      data: "數據",
      // [Auto-translated] "Validation"
      validation: "驗證",
      // [Auto-translated] "Individual Cell Texts"
      cells: "單個儲存格文本",
      // [Auto-translated] "\"Thank You\" Page"
      showOnCompleted: "“謝謝”頁面",
      // [Auto-translated] "Logo in the Survey Header"
      logo: "調查標題中的徽標",
      // [Auto-translated] "Slider"
      slider: "滑塊",
      // [Auto-translated] "Expression"
      expression: "表達",
      // [Auto-translated] "Question Settings"
      questionSettings: "問題設置",
      // "Header"
      header: "頁眉",
      // "Background"
      background: "背景",
      // "Appearance"
      appearance: "外觀",
      // [Auto-translated] "Accent colors"
      accentColors: "強調色",
      // [Auto-translated] "Surface background"
      surfaceBackground: "表面背景",
      // [Auto-translated] "Scaling"
      scaling: "縮放",
      // [Auto-translated] "Others"
      others: "別人"
    },
    // "Edit property '{0}'"
    editProperty: "編輯屬性: '{0}'",
    // "Items"
    items: "[ 項目數量: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "在以下情況下使選擇可���",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "在以下情況下選擇選項",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "在以下情況下使列可見",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "在以下情況下使行可見",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "增加內縮進",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "使用最後一個條目中的答案作為預設值",
    // "Please enter a value."
    enterNewValue: "請設定值",
    // "There are no questions in the survey."
    noquestions: "問卷中還沒有創建任何問題",
    // "Please create a trigger"
    createtrigger: "請創建觸發器",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "按回車鍵編輯",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "按回車鍵編輯專案，按刪除按鈕刪除專案，按Alt加向上箭頭或向下箭頭移動專案",
    // "On "
    triggerOn: "當 ",
    // "Make pages visible"
    triggerMakePagesVisible: "使頁面可見:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "使問題可見:",
    // "Complete the survey if successful."
    triggerCompleteText: "如果滿足條件，則完成問卷",
    // "The trigger is not set"
    triggerNotSet: "觸發器尚未設置",
    // "Run if"
    triggerRunIf: "滿足下列條件時執行",
    // "Change value of: "
    triggerSetToName: "修改下列問題值: ",
    // [Auto-translated] "Copy value from: "
    triggerFromName: "從以下位置複製值：",
    // [Auto-translated] "Run this Expression"
    triggerRunExpression: "運行此表達式",
    // "to: "
    triggerSetValue: "修改為: ",
    // [Auto-translated] "Go to the question"
    triggerGotoName: "轉到問題",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "在問卷提交結果中不要包含該變量",
    // [Auto-translated] "Please enter a valid expression"
    triggerRunExpressionEmpty: "請輸入有效的表達式",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "在這裡鍵入表示式...",
    // [Auto-translated] "No file chosen"
    noFile: "未選擇檔案",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "清除隱藏的問題值",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "在以下屬性中儲存值",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "啟用鍵入時搜索",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "隱藏選取選取專案",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "選擇時摺疊下拉清單",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "單元格內的垂直對齊",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "替代行顏色",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "在以下情況下使列可見",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "在以下情況下使行可見",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "註釋框的佔位元文字",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "本地檔的佔位元文字",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "相機的佔位元文本",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "本地檔或相機的佔位元文字",
    // [Auto-translated] "Rating icon"
    rateType: "評級圖示",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "例如：https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "例如：categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "例如：a）",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "例：6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "例如：600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "例：50%",
    // "auto"
    imageHeight_placeholder: "自動",
    // "auto"
    imageWidth_placeholder: "自動",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "例：100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "主題",
      // [Auto-translated] "Question appearance"
      isPanelless: "問題外觀",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "背景和角半徑",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "背景和角半徑",
      // [Auto-translated] "Accent color"
      primaryColor: "強調色",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "面板和問題框的不透明度",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "輸入元素不透明度",
      // [Auto-translated] "Survey font size"
      fontSize: "調查字體大小",
      // [Auto-translated] "Survey scale factor"
      scale: "調查比例因數",
      // [Auto-translated] "Corner radius"
      cornerRadius: "拐角半徑",
      // [Auto-translated] "Advanced mode"
      advancedMode: "高級模式",
      // [Auto-translated] "Title font"
      pageTitle: "標題字體",
      // [Auto-translated] "Description font"
      pageDescription: "描述字體",
      // [Auto-translated] "Title font"
      questionTitle: "標題字體",
      // [Auto-translated] "Description font"
      questionDescription: "描述字體",
      // [Auto-translated] "Font"
      editorFont: "字體",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "不透明度", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "調查字體系列",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "背景顏色",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "強調背景色",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "強調前景色",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "錯誤訊息顏色",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "陰影效果",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "陰影效果",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "顏色"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "視圖",
      // [Auto-translated] "Logo alignment"
      logoPosition: "徽標對齊",
      // [Auto-translated] "Survey title font"
      surveyTitle: "調查標題字體",
      // [Auto-translated] "Survey description font"
      surveyDescription: "調查描述字體",
      // [Auto-translated] "Survey title font"
      headerTitle: "調查標題字體",
      // [Auto-translated] "Survey description font"
      headerDescription: "調查描述字體",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "內容區寬度",
      // [Auto-translated] "Text width"
      textAreaWidth: "文本寬度",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "背景顏色",
      // [Auto-translated] "Background image"
      backgroundImage: "背景圖片",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "不透明度",
      // [Auto-translated] "Overlap"
      overlapEnabled: "重疊",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "徽標對齊",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "調查標題對齊",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "調查描述對齊"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "真",
    // [Auto-translated] "false"
    "false": "假",
    // [Auto-translated] "Local file"
    file: "本地檔",
    // [Auto-translated] "Camera"
    camera: "照相機",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "本地檔或攝像機",
    // [Auto-translated] "Inherit"
    inherit: "繼承",
    // [Auto-translated] "Visible"
    show: "可見",
    // [Auto-translated] "Hidden"
    hide: "隱藏",
    // [Auto-translated] "Inherit"
    default: "繼承",
    // [Auto-translated] "Initial"
    initial: "初",
    // [Auto-translated] "Random"
    random: "隨機",
    // [Auto-translated] "Collapsed"
    collapsed: "倒塌",
    // [Auto-translated] "Expanded"
    expanded: "擴大",
    // [Auto-translated] "None"
    none: "沒有",
    // [Auto-translated] "Ascending"
    asc: "上升",
    // [Auto-translated] "Descending"
    desc: "降",
    // [Auto-translated] "Indeterminate"
    indeterminate: "定",
    // [Auto-translated] "Selected"
    selected: "選擇",
    // [Auto-translated] "Unselected"
    unselected: "未選中",
    // [Auto-translated] "decimal"
    decimal: "十進位",
    // [Auto-translated] "currency"
    currency: "貨幣",
    // [Auto-translated] "percent"
    percent: "百分之",
    // [Auto-translated] "First panel is expanded"
    firstExpanded: "第一個面板展開",
    // [Auto-translated] "Hide question numbers"
    off: "隱藏問題編號",
    // [Auto-translated] "List"
    list: "清單",
    // [Auto-translated] "Carousel"
    carousel: "旋轉 木馬",
    // [Auto-translated] "Tabs"
    tab: "製表元",
    // [Auto-translated] "Panel navigator + Progress bar at the top"
    progressTop: "面板導航器 + 頂部的進度條",
    // [Auto-translated] "Panel navigator + Progress bar at the bottom"
    progressBottom: "面板導航器 + 底部的進度條",
    // [Auto-translated] "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "面板導航器 + 頂部和底部的進度條",
    // [Auto-translated] "Horizontal"
    horizontal: "水準",
    // [Auto-translated] "Vertical"
    vertical: "垂直",
    // [Auto-translated] "Top"
    top: "返回頁首",
    // [Auto-translated] "Bottom"
    bottom: "底",
    // [Auto-translated] "Top and bottom"
    topBottom: "頂部和底部",
    // [Auto-translated] "Both"
    both: "雙",
    // [Auto-translated] "Left"
    left: "左",
    // [Auto-translated] "Right"
    right: "右",
    // [Auto-translated] "Center"
    center: "中心",
    // [Auto-translated] "Left and right"
    leftRight: "左和右",
    // [Auto-translated] "Middle"
    middle: "中間",
    // [Auto-translated] "color"
    color: "顏色",
    // [Auto-translated] "date"
    date: "日期",
    // [Auto-translated] "datetime"
    datetime: "日期時間",
    // [Auto-translated] "datetime-local"
    "datetime-local": "日期時間-本地",
    // [Auto-translated] "email"
    email: "電子郵件",
    // [Auto-translated] "month"
    month: "月",
    // [Auto-translated] "number"
    number: "數",
    // [Auto-translated] "password"
    password: "密碼",
    // [Auto-translated] "range"
    range: "範圍",
    // [Auto-translated] "tel"
    tel: "電話",
    // [Auto-translated] "text"
    text: "發簡訊",
    // [Auto-translated] "time"
    time: "時間",
    // [Auto-translated] "url"
    url: "網址",
    // [Auto-translated] "week"
    week: "周",
    // [Auto-translated] "Hidden"
    hidden: "隱藏",
    // [Auto-translated] "Editable"
    edit: "編輯",
    // [Auto-translated] "Read-only"
    display: "唯讀",
    // [Auto-translated] "Contain"
    contain: "包含",
    // [Auto-translated] "Cover"
    cover: "蓋",
    // [Auto-translated] "Fill"
    fill: "填補",
    // [Auto-translated] "Next"
    next: "下一個",
    // [Auto-translated] "Last"
    last: "最後",
    // [Auto-translated] "Upon survey completion"
    onComplete: "調查完成後",
    // [Auto-translated] "When question gets hidden"
    onHidden: "當問題被隱藏時",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "當問題或其面板/頁面被隱藏時",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "從不"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "從不"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "單選按鈕",
    inputType: {
      // [Auto-translated] "Color"
      color: "顏色",
      // [Auto-translated] "Date"
      date: "日期",
      // [Auto-translated] "Date and Time"
      "datetime-local": "日期和時間",
      // [Auto-translated] "Email"
      email: "電子郵件",
      // [Auto-translated] "Month"
      month: "月",
      // [Auto-translated] "Number"
      number: "數",
      // [Auto-translated] "Password"
      password: "密碼",
      // [Auto-translated] "Range"
      range: "範圍",
      // [Auto-translated] "Phone Number"
      tel: "電話號碼",
      // [Auto-translated] "Text"
      text: "發簡訊",
      // [Auto-translated] "Time"
      time: "時間",
      // [Auto-translated] "URL"
      url: "網址",
      // [Auto-translated] "Week"
      week: "周"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "單值",
      // [Auto-translated] "Range"
      range: "範圍"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "汽車",
      // [Auto-translated] "Always"
      always: "總",
      // [Auto-translated] "Never"
      never: "勿"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "錯",
      // [Auto-translated] "Warning"
      warning: "儆",
      // [Auto-translated] "Informational"
      info: "資訊"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "全名",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "前綴",
      // [Auto-translated] "First Name"
      "given-name": "名字",
      // [Auto-translated] "Middle Name"
      "additional-name": "中間名",
      // [Auto-translated] "Last Name"
      "family-name": "姓",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "後綴",
      // [Auto-translated] "Nickname"
      nickname: "昵稱",
      // [Auto-translated] "Job Title"
      "organization-title": "職稱",
      // [Auto-translated] "User Name"
      username: "使用者名",
      // [Auto-translated] "New Password"
      "new-password": "新密碼",
      // [Auto-translated] "Current Password"
      "current-password": "當前密碼",
      // [Auto-translated] "Organization Name"
      organization: "組織名稱",
      // [Auto-translated] "Full Street Address"
      "street-address": "全街位址",
      // [Auto-translated] "Address Line 1"
      "address-line1": "位址行 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "位址行 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "位址行 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "4 級位址",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "3 級位址",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "2 級位址",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "1 級位址",
      // [Auto-translated] "Country Code"
      country: "國家代碼",
      // [Auto-translated] "Country Name"
      "country-name": "國家/地區名稱",
      // [Auto-translated] "Postal Code"
      "postal-code": "郵遞區號",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "持卡人姓名",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "持卡人名字",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "持卡人中間名",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "持卡人姓氏",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "信用卡號",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "有效期",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "到期月份",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "到期年份",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "卡安全碼",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "信用卡類型",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "交易貨幣",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "交易金額",
      // [Auto-translated] "Preferred Language"
      language: "首選語言",
      // [Auto-translated] "Birthday"
      bday: "生日",
      // [Auto-translated] "Birthday Day"
      "bday-day": "生日",
      // [Auto-translated] "Birthday Month"
      "bday-month": "生日月份",
      // [Auto-translated] "Birthday Year"
      "bday-year": "生日年份",
      // [Auto-translated] "Gender"
      sex: "性",
      // [Auto-translated] "Website URL"
      url: "網站 URL",
      // [Auto-translated] "Profile Photo"
      photo: "個人頭像",
      // [Auto-translated] "Telephone Number"
      tel: "電話號碼",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "電話的國家代碼",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "全國電話號碼",
      // [Auto-translated] "Area Code"
      "tel-area-code": "區號",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "本地電話號碼",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "本地電話前綴",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "本地電話後綴",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "電話分機",
      // [Auto-translated] "Email Address"
      email: "電子郵件位址",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "即時通訊協定"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "沒有",
      // [Auto-translated] "Pattern"
      pattern: "模式",
      // [Auto-translated] "Numeric"
      numeric: "數值的",
      // [Auto-translated] "Date and Time"
      datetime: "日期和時間",
      // [Auto-translated] "Currency"
      currency: "貨幣"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "自動",
      // [Auto-translated] "Left"
      left: "左",
      // [Auto-translated] "Right"
      right: "右"
    },
    // [Auto-translated] "All"
    all: "都",
    // [Auto-translated] "Page"
    page: "頁",
    // [Auto-translated] "Survey"
    survey: "調查",
    // [Auto-translated] "When switching to the next page"
    onNextPage: "切換到下一頁時",
    // [Auto-translated] "After an answer is changed"
    onValueChanged: "更改答案後",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "更改答案之前",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "原始結構",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "在一頁上顯示所有問題",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "每頁顯示一個問題",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "每頁顯示單個輸入欄位"
    },
    // [Auto-translated] "No preview"
    noPreview: "無預覽",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "顯示所有問題",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "僅顯示已回答的問題",
    // [Auto-translated] "Show all questions"
    allQuestions: "顯示所有問題",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "僅顯示已回答的問題",
    // [Auto-translated] "Completed pages"
    pages: "已完成的頁面",
    // [Auto-translated] "Answered questions"
    questions: "已回答的問題",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "回答必填問題",
    // [Auto-translated] "Valid answers"
    correctQuestions: "有效答案",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "已完成的頁面（按鈕 UI）",
    // [Auto-translated] "Under the input field"
    underInput: "在輸入欄位下",
    // [Auto-translated] "Under the question title"
    underTitle: "在問題標題下",
    // [Auto-translated] "On lost focus"
    onBlur: "關於失去焦點",
    // [Auto-translated] "While typing"
    onTyping: "打字時",
    // [Auto-translated] "Under the row"
    underRow: "在行下",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "在行下，僅顯示一個部分",
    // "Auto"
    auto: "自動",
    timerInfoMode: {
      // "Both"
      combined: "雙"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "基於矩陣佈局"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "鎖",
      // [Auto-translated] "Collapse all"
      collapsed: "全部摺疊",
      // [Auto-translated] "Expand all"
      expanded: "全部展開",
      // [Auto-translated] "First expanded"
      firstExpanded: "首次擴展"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "靜態的",
      // [Auto-translated] "Responsive"
      responsive: "回應"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "圖像",
      // [Auto-translated] "Video"
      video: "視頻",
      // [Auto-translated] "YouTube"
      youtube: "優酷"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "按鈕",
      // [Auto-translated] "Dropdown"
      dropdown: "下拉清單"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "違約",
      // [Auto-translated] "Scale"
      scale: "規模"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "單色",
      // [Auto-translated] "Colored"
      colored: "彩色"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "自動生成",
      // [Auto-translated] "Manual"
      "false": "手動"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "標籤",
      // [Auto-translated] "Stars"
      stars: "星星",
      // [Auto-translated] "Smileys"
      smileys: "笑臉"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "鎖"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "自動編號",
      // [Auto-translated] "Auto-numbering"
      on: "自動編號",
      // [Auto-translated] "Reset on each page"
      onPage: "在每個頁面上重置",
      // [Auto-translated] "Reset on each panel"
      onpanel: "在每個面板上重置",
      // [Auto-translated] "Reset on each panel"
      onPanel: "在每個面板上重置",
      // [Auto-translated] "Recursive numbering"
      recursive: "遞歸編號",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "繼續完成調查",
      // [Auto-translated] "No numbering"
      off: "無編號"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "在問題標題下",
      // [Auto-translated] "Under the input field"
      underInput: "在輸入欄位下"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "在選項旁邊",
      // [Auto-translated] "Above choices"
      vertical: "以上選擇"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "十進位",
      // [Auto-translated] "Currency"
      currency: "貨幣",
      // [Auto-translated] "Percentage"
      percent: "百分比",
      // [Auto-translated] "Date"
      date: "日期"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "十進位",
      // [Auto-translated] "Currency"
      currency: "貨幣",
      // [Auto-translated] "Percentage"
      percent: "百分比",
      // [Auto-translated] "Date"
      date: "日期"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "源語言"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "源語言"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "返回頁首",
      // [Auto-translated] "Bottom"
      bottom: "底",
      // [Auto-translated] "Top and bottom"
      topbottom: "頂部和底部",
      // [Auto-translated] "Above the header"
      aboveheader: "標題上方",
      // [Auto-translated] "Below the header"
      belowheader: "標題下方",
      // [Auto-translated] "Hidden"
      off: "隱藏"
    },
    // [Auto-translated] "Sum"
    sum: "和",
    // [Auto-translated] "Count"
    count: "計數",
    // [Auto-translated] "Min"
    min: "最小值",
    // [Auto-translated] "Max"
    max: "麥克斯",
    // [Auto-translated] "Avg"
    avg: "平均",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "包含",
      // [Auto-translated] "Starts with"
      startsWith: "開頭為"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "自動",
      // [Auto-translated] "Cover"
      cover: "蓋",
      // [Auto-translated] "Contain"
      contain: "包含",
      // [Auto-translated] "Stretch"
      fill: "伸展",
      // [Auto-translated] "Tile"
      tile: "瓦"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "固定",
      // [Auto-translated] "Scroll"
      scroll: "滾動"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "基本",
      // [Auto-translated] "Advanced"
      advanced: "高深"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "與調查相同",
      // [Auto-translated] "Same as container"
      container: "與容器相同"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "沒有",
      // [Auto-translated] "Accent color"
      accentColor: "強調色",
      // [Auto-translated] "Custom"
      custom: "習慣"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "光",
      // [Auto-translated] "Dark"
      dark: "黑暗"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "違約",
      // [Auto-translated] "Without Panels"
      "true": "不帶面板"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "與調查相同",
      // [Auto-translated] "Same as container"
      container: "與容器相同"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "為空",
    // "Not empty"
    notempty: "不為空",
    // "Equals"
    equal: "等於",
    // "Does not equal"
    notequal: "不等於",
    // "Contains"
    contains: "包含",
    // "Does not contain"
    notcontains: "不包含",
    // [Auto-translated] "Any of"
    anyof: "任何",
    // [Auto-translated] "All of"
    allof: "全部",
    // "Greater than"
    greater: "大於",
    // "Less than"
    less: "小於",
    // "Greater than or equal to"
    greaterorequal: "大於等於",
    // "Less than or equal to"
    lessorequal: "小於等於",
    // [Auto-translated] "and"
    and: "和",
    // [Auto-translated] "or"
    or: "或"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "使用 Angular 時",
    // "Use jQuery version"
    jquery: "使用 JQuery 時",
    // "Use Knockout version"
    knockout: "使用 Knockout 時",
    // "Use React version"
    react: "使用 React 時",
    // "Use Vue version"
    vue: "使用 Vue 時",
    // "For bootstrap framework"
    bootstrap: "使用 Bootstrap 時",
    // [Auto-translated] "Modern theme"
    modern: "現代主題",
    // [Auto-translated] "Default theme"
    default: "默認主題",
    // [Auto-translated] "Orange theme"
    orange: "橙色主題",
    // [Auto-translated] "Darkblue theme"
    darkblue: "深藍色主題",
    // [Auto-translated] "Darkrose theme"
    darkrose: "“暗玫瑰”主題",
    // [Auto-translated] "Stone theme"
    stone: "“石頭”主題",
    // [Auto-translated] "Winter theme"
    winter: "“冬季”主題",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "“冬日之石”主題",
    // "Show survey on a page"
    showOnPage: "嵌入頁面顯示",
    // "Show survey in a window"
    showInWindow: "使用單獨的問卷視窗",
    // "Load Survey JSON from server"
    loadFromServer: "從服務器加載問卷 JSON 數據",
    // "Scripts and styles"
    titleScript: "腳本和樣式",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // [Auto-translated] "Select the page to test it"
    selectPage: "選擇要測試的頁面",
    // [Auto-translated] "Show invisible elements"
    showInvisibleElements: "顯示不可見元素",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "隱藏不可見元素",
    // [Auto-translated] "Previous"
    prevPage: "以前",
    // [Auto-translated] "Next"
    nextPage: "下一個"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "數量檢查",
    // "Email"
    emailvalidator: "Email",
    // [Auto-translated] "Expression"
    expressionvalidator: "表達",
    // "Number"
    numericvalidator: "數字",
    // "Regex"
    regexvalidator: "正則表達式",
    // "Text"
    textvalidator: "文本"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "完成問卷",
    // "Set answer"
    setvaluetrigger: "設置問題值",
    // [Auto-translated] "Copy answer"
    copyvaluetrigger: "複製答案",
    // [Auto-translated] "Skip to question"
    skiptrigger: "跳至問題",
    // [Auto-translated] "Run expression"
    runexpressiontrigger: "運行表達式",
    // "change visibility (deprecated)"
    visibletrigger: "修改可見性"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "例如：+1（999）-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "例如：mm/dd/yyyy HH：MM：ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "例：$",
      // "Ex.: USD"
      suffix: "例如：美元"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "例如：200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "例如：30%",
      // "Ex.: 200px"
      questionTitleWidth: "例如：200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "受訪者不可見的面板ID。",
      // [Auto-translated] "Type a panel subtitle."
      description: "鍵入面板字幕。",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "使用魔棒圖示設置確定面板可見性的條件規則。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "使用魔棒圖示設置禁用面板唯讀模式的條件規則。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "適用於此面板中的所有問題。當設置為「隱藏」 時，它還會隱藏問題描述。如果要覆蓋此設置，請為各個問題定義標題對齊規則。“繼承”選項應用頁面級別（如果設置）或調查級別設置（預設為“頂部”）。",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "當問題標題與問題框左側對齊時，為問題標題設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "設置與面板中所有問題相關的錯誤消息的位置。“繼承”選項應用頁面級別（如果已設置）或調查級別設置。",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "保留問題的原始順序或隨機化問題。“繼承”選項應用頁面級（如果已設置）或調查級設置。",
      // "Repositions the panel to the end of a selected page."
      page: "將面板重新置放到選頁面的末尾。",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "在面板內容和面板框的左邊框之間添加空格或邊距。",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "取消選擇以將面板與上一個問題或面板顯示在一行中。如果面板是表單中的第一個元素，則該設置不適用。",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "從中選擇：「展開」 - 面板完整顯示，可以摺疊;“已摺疊” - 面板僅顯示標題和描述，可以展開;“已鎖定” - 面板完整顯示，無法摺疊。",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "設置面板的寬度，與同一條線中的其他測量元素成比例。接受 CSS 值（px、%、in、pt 等）。",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "為嵌套在此面板中的問題分配編號。",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "指定此面板在網格佈局中跨越的列數。",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "此表允許您設定面板中的每個網格列。它根據行中的最大元素數自動設置每列的寬度百分比。要自定義網格佈局，請手動調整這些值並定義每列中所有問題的標題寬度。"
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "受訪者不可見的面板ID。",
      // "Type a panel subtitle."
      description: "鍵入面板字幕。",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "使用魔棒圖示設置確定面板可見性的條件規則。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "使用魔棒圖示設置禁用面板唯讀模式的條件規則。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "適用於此面板中的所有問題。如果要覆蓋此設置，請為單個問題定義標題對齊規則。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "當問題標題與問題框的左側對齊時，為問題標題設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "設置與面板中所有問題相關的錯誤消息的位置。“繼承”選項應用頁面級別（如果已設置）或調查級別設置。",
      // "Repositions the panel to the end of a selected page."
      page: "將面板重新置放到選頁面的末尾。",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "在面板內容與面板框的左邊框之間新增空間或邊界。",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "取消選擇以將面板與上一個問題或面板顯示在一行中。如果面板是表單中的第一個元素，則該設置不適用。",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "從中選擇：「展開」 - 面板完整顯示，可以摺疊;“已摺疊” - 面板僅顯示標題和描述，可以展開;“已鎖定” - 面板完整顯示，無法摺疊。",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "設置面板的寬度，使其與同一行中的其他測量圖元成比例。接受 CSS 值（px、%、in、pt 等）。",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "鍵入動態面板標題的範本。使用 {panelIndex} 作為面板的常規位置，使用 {visiblePanelIndex} 作為其在可見面板中的順序。將這些佔位元插入到圖案中以添加自動編號。",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "鍵入選項卡標題的範本。使用 {panelIndex} 表示面板的大致位置，使用 {visiblePanelIndex} 表示其在可見面板中的順序。將這些佔位元插入到圖案中以添加自動編號。",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "選項卡標題的回退文本，當選項卡標題模式未生成有意義的值時應用。",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "此設置允許您控制動態面板中各個面板的可見性。使用“{panel}”佔位符在運算式中引用當前面板。",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "此面板中的所有問題都會自動繼承此設置。如果要覆蓋此設置，請為單個問題定義標題對齊規則。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“在面板標題下”）。",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "定義新添加的面板的位置。默認情況下，新面板將添加到末尾。選擇「下一步」以在當前面板之後插入新面板。",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "複製上一個條目的答案，並將它們分配給下一個添加的條目。",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "引用問題名稱以要求使用者在每個面板中為此問題提供唯一的答案。",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "在刪除條目之前觸發確認提示。",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "將編號指派給巢狀在動態面板中的問題。"
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "在刪除行之前觸發確認提示。",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "在向矩陣添加新行時自動展開詳細資訊部分。"
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "複製最後一行的答案，並將其分配給下一個添加的動態行。",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "此設定允許您根據表示式分配預設答案值。表達式可以包括基本計算 - '{q1_id} + {q2_id}'、布爾表達式，例如 '{age} > 60'，以及函數：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。此表達式確定的值用作初始預設值，可由回應者的手動輸入覆蓋。",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "使用魔杖圖示設置條件規則，該規則確定何時將受訪者的輸入重置為基於“預設值表達式”或“設置值表達式”的值，或重置為“預設答案”值（如果設置了其中任何一個）。",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "使用魔杖圖示設置條件規則，該規則確定何時運行「設置值表達式」 ，並將結果值動態分配為回應。",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "指定一個表達式，該運算式定義在滿足「如果設置值」規則中的條件時要設置的值。表達式可以包括基本計算 - '{q1_id} + {q2_id}'、布爾表達式，例如 '{age} > 60'，以及函數：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。由此表達式確定的值可以被受訪者的手動輸入覆蓋。",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator 允許您手動調整表單元素的內聯寬度以控制佈局。如果這沒有產生所需的結果，您可以啟用網格佈局，該佈局使用基於列的系統構建表單元素。要配置佈局列，請選擇一個頁面或面板，然後使用 “Question Settings” → “Grid columns” 表格。要調整問題跨越的列數，請選擇它並在 「Layout」 → 「Column span」 欄位中設置所需的值。",
    question: {
      // "A question ID that is not visible to respondents."
      name: "受訪者不可見的問題ID。",
      // "Type a question subtitle."
      description: "鍵入問題副標題。",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "使用魔杖圖示設置確定問題可見性的條件規則。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "使用魔杖圖示設置條件規則，以禁用問題的唯讀模式。",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "使用魔杖圖標設置條件規則，除非問題得到答案，否則阻止調查推進或提交。",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "取消選擇以將問題與上一個問題或面板顯示在一行中。如果問題是表單中的第一個元素，則該設置不適用。",
      // "Repositions the question to the end of a selected page."
      page: "將問題重新置放到選頁面的末尾。",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "從以下選項中選擇：「展開」 - 問題框完整顯示，可以摺疊;“已摺疊” - 問題框僅顯示標題和描述，可以展開;“已鎖定” - 問題框完整顯示，無法摺疊。",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "覆蓋在面板、頁面或調查級別上定義的標題對齊規則。“繼承”選項將應用任何更高級別的設置（如果已設置）或調查級別的設置（預設為“頂部”）。",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "“繼承”選項應用調查級別設置（預設為“在問題標題下”）。",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。“繼承”選項將應用調查級別設置（預設為“頂部”）。",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "在問題內容和問題框的左邊框之間添加空格或邊距。",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "設置問題的寬度，使其與同一行中的其他調查元素成比例。接受 CSS 值（px、%、in、pt 等）。",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "從中選擇：「失焦時」 - 當輸入字段失去焦點時，該值會更新;“鍵入時” - 當使用者鍵入時，該值會即時更新。“繼承”選項將應用調查級別設置（預設為“失去焦點時”）。",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "您可以使用任何 Web 服務作為多項選擇題的數據來源。要填充選項值，請輸入提供數據的服務的URL。",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "用於篩選下拉清單的比較操作。",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "選項選項中的長文本將自動生成換行符以適合下拉功能表。如果要剪裁文字，請取消選擇。",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "指定此問題在網格佈局中跨越多少列。"
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "使用魔術棒圖示來定義問題值何時被視為有效。",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "錯誤會阻止進度，直到解決為止。警告會突出顯示問題，但允許繼續。資訊說明提供額外的背景資訊或中立的指導。使用警告或資訊附註時，建議您啟用立即驗證：「調查」→「驗證」→「執行驗證」→「答案變更後」。"
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "設置顯示的簽名區域和生成的圖像的寬度。",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "設置顯示的簽名區域和生成的圖像的高度。",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "選擇是否希望簽名區域填充問題框中的所有可用空間，同時保持預設的 3：2 縱橫比。設置自定義寬度和高度值后，該設置將保留這些尺寸的縱橫比。"
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "指定預覽中上傳圖像的顯示高度以及使用相機拍攝的圖像的實際高度。在單個檔上傳模式下，顯示高度受預覽區域限制;在多檔上傳模式下，它受縮圖區域限制。",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "指定預覽中上傳圖像的顯示寬度以及使用相機拍攝的圖像的實際寬度。在單個檔上傳模式下，顯示寬度受預覽區域限制;在多檔上傳模式下，它受縮圖區域限制。",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "儘可能顯示已上傳檔的縮圖預覽。取消選擇是否要顯示檔圖示。"
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "“自動”選項會根據提供的源URL自動確定適合的顯示模式 - 圖像、視頻或YouTube。"
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "覆蓋最小和最大高度值。",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "覆蓋最小和最大寬度值。",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "“值”用作條件規則中使用的專案ID;“文本”將顯示給受訪者。",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "在「圖像」和「視頻」之間進行選擇以設置媒體選擇器的內容模式。如果選擇「圖像」，請確保提供的所有選項都是以下格式的圖像檔：JPEG、GIF、PNG、APNG、SVG、BMP、ICO。同樣，如果選擇「視頻」，請確保所有選項都是指向以下格式的視頻檔的直接連結：MP4、MOV、WMV、FLV、AVI、MKV。請注意，視頻選項不支援 YouTube 連結。"
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "此設置僅調整輸入欄位的大小，不會影響問題框的寬度。要限制接受的輸入長度，請轉到“驗證”→“最大字元限制”。"
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "設置輸入欄位中顯示的行數。如果輸入佔用更多行，則會出現滾動條。"
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "選擇是否要阻止受訪者填寫您的調查。",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "設置進度條的位置。“自動”值在調查標題的上方或下方顯示進度條。"
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "受訪者不可見的列ID。",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "為列啟用后，受訪者需要為此列中的每個問題提供唯一的回答。",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "設置輸入欄位中顯示的行數。如果輸入佔用更多行，則會出現滾動條。",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "使用魔杖圖示設置確定列可見性的條件規則。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "使用魔杖圖示設置禁用列唯讀模式的條件規則。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "選取後，為每個選項創建一個單獨的列。",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "在多列佈局中排列選擇選項。設置為 0 時，選項將顯示在一行中。當設置為 -1 時，實際值將繼承自父矩陣的“嵌套列計數”屬性。"
    },
    slider: {
      // "The lowest number that users can select."
      min: "用戶可以選擇的最小數位。",
      // "The highest number that users can select."
      max: "用戶可以選擇的最大數位。",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "可選刻度值之間的間隔。例如，步長 5 將允許使用者選擇 0、5、10 等。",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "用戶可以設置的滑塊塊之間的最小距離。",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "用戶可以設置滑塊滑塊之間的最大距離。",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "指定要生成的刻度標籤數量。值 -1 表示該數位是根據 最小值 和 最大值 自動計算的。",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "使用 『{0}』 作為實際值的佔位元。",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "允許您定義特定值的自定義標籤，並可選擇為其分配相應的文本（例如，0 = “差”，100 = “優秀”）。",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "使用 『{0}』 作為實際值的佔位元。",
      // "Allows users to move one thumb past the other."
      allowSwap: "允許使用者將一個滑塊移過另一個滑塊。",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "顯示一個按鈕，用於清除選定的滑塊值並將其設置為 undefined。",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "使用表達式動態定義滑塊的最小值。支援基本計算（例如 '{q1_id} + {q2_id}'）、布爾邏輯（例如 '{age} > 60'），以及 'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等函數。",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "使用表達式動態定義滑塊的最大值。支援基本計算（例如 '{q1_id} + {q2_id}'）、布爾邏輯（例如 '{age} > 60'），以及 'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等函數。"
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "將此選擇設為獨佔。當用戶選擇時，它將自動取消選擇問題中的所有其他選項。",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "使此欄中的核取方塊成為獨佔的。當使用者選取時，他們會自動取消選取同一列中的所有其他核取方塊。"
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "如果必須將正則表示式中的大寫字母和小寫字母視為等效字母，請選擇此項。",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "從以下選項中選擇： 「靜態」 - 設置固定寬度;“回應式” - 使調查佔據螢幕的整個寬度;“自動” - 根據所使用的問題類型應用兩者中的任何一個。",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "為您的調查分配一個唯一的 Cookie 值。調查完成後，Cookie 將在受訪者的瀏覽器中設置，以防止重複提交調查。",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "粘貼圖像連結（無大小限制）或按下資料夾圖示以瀏覽電腦中的檔（最大 64KB）。",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "以 CSS 單位（px、%、in、pt 等）設置徽標寬度。",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "以 CSS 單位（px、%、in、pt 等）設置徽標高度。",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "從以下選項中選擇：「無」 - 影像保持其原始大小;“包含” - 調整圖像大小以適應其縱橫比;“封面” - 圖像填充整個框，同時保持其縱橫比;“填充” - 拉伸圖像以填充框，而不保持其縱橫比。",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "選擇是否希望調查在受訪者回答了當前頁面上的所有問題後自動前進到下一頁。如果頁面上的最後一個問題是開放式的或允許多個答案，則此功能將不適用。",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "選擇是否希望在受訪者回答所有問題後自動完成調查。",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "設置頁面上導航按鈕的可見性。",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "設置頁面上導航按鈕的位置。",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "啟用僅包含所有問題或已回答問題的預覽頁面。",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "適用於調查中的所有問題。此設置可以被較低級別的標題對齊規則覆蓋：面板、頁面或問題。較低級別的設置將覆蓋較高級別的設置。",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "一個符號或一系列符號，表示需要答案。",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "輸入要開始編號的數位或字母。",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "選擇是否希望每個頁面上的第一個輸入字段準備好進行文本輸入。",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "保持問題的原始順序或隨機化問題。此設置的效果僅在「預覽」選項卡中可見。",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "僅適用於文本輸入問題。",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "僅供問題評論。",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "設置問題註釋在文字區域中顯示的行數。如果輸入佔用更多行，則會出現滾動條。",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "選擇是否希望問題註釋和長文本問題根據輸入的文字長度自動增加高度。",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "僅適用於問題評論和長文本問題。",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "自訂變數用作表單計算中使用的中間變數或輔助變數。他們將受訪者的輸入作為源值。每個自定義變數都有一個唯一的名稱和它所基於的表達式。",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "選擇是否希望將表達式的計算值與調查結果一起保存。",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "觸發器是基於表達式的事件或條件。一旦表達式被計算為「true」，觸發器就會觸發一個操作。這樣的操作可以選擇性地影響它的目標問題。",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "選擇是否清除條件邏輯隱藏的問題的值以及何時清除。",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "從中選擇：「失焦時」 - 當輸入字段失去焦點時，該值會更新;“鍵入時” - 當使用者鍵入時，該值會即時更新。",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "左邊的值用作條件規則中使用的列ID，右邊的值顯示給受訪者。",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "左邊的值用作條件規則中使用的行ID，右邊的值顯示給受訪者。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "接受 CSS 值（px、%、in、pt 等）。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "接受 CSS 值（px、%、in、pt 等）。",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "僅當至少一列顯示使用「聚合方法」或「總值表達式」設置的總計值時才可見。",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "設置與輸入無效的儲存格相關的錯誤訊息的位置。“繼承”選項應用“錯誤消息對齊”屬性中的設置。",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "設置嵌套在詳細資訊部分中的問題的錯誤消息的位置。“Inherit” 選項應用“Error message alignment” 屬性中的設置。",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "啟用「防止重複響應」屬性後，嘗試提交重複條目的受訪者將收到以下錯誤消息。",
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "當矩陣欄啟用「防止重複回應」屬性時，嘗試提交重複項目的受訪者將收到以下錯誤訊息。"
    },
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "允許您根據表達式計算總值。表達式可以包括基本計算 （'{q1_id} + {q2_id}'）、布爾表達式 （'{age} > 60'） 和函數 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "如果指定的列包含相同的值，則調查將引發「非唯一鍵值」錯誤。",
    // "Type a subtitle."
    description: "鍵入副標題。",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "選擇一種語言以開始創建調查。要添加翻譯，請切換到新語言，然後在此處或“翻譯”選項卡中翻譯原始文本。",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "設置詳細資訊部分相對於行的位置。從中選擇：「無」 - 不添加擴展;“Under the row” - 矩陣的每一行下都放置一個行擴展;“在行下，僅顯示一行擴展” - 僅在單行下顯示擴展，其餘行展開將摺疊。",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "從以下選項中選擇：「無」 - 影像保持其原始大小;“包含” - 調整圖像大小以適應其縱橫比;“封面” - 圖像填充整個框，同時保持其縱橫比;“填充” - 拉伸圖像以填充框，而不保持其縱橫比。",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "在輸入數據時逐漸增加輸入欄位的高度。覆蓋「輸入欄位高度（以行為單位）」設置。",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "“繼承”選項應用調查級別設置（預設為“啟用”）。",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "調查自動前進到「謝謝」頁面的時間間隔（以秒為單位）。設置為 0 時，計算在調查上花費的時間。",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "調查自動前進到下一頁的時間間隔（以秒為單位）。隱藏「上一個」導航按鈕。設置為 0 時，計算在當前頁面上花費的時間。",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "啟用此選項可在使用者將焦點放在空輸入欄位上，然後離開該欄位而不進行任何更改時觸發驗證。",
    page: {
      // "A page ID that is not visible to respondents."
      name: "受訪者不可見的頁面ID。",
      // "Type a page subtitle."
      description: "鍵入頁面副標題。",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "顯示在進度條或目錄 （TOC） 中的導航按鈕上的說明。如果將此欄位留空，則導航按鈕將使用頁面標題或頁面名稱。要啟用進度條或 TOC，請轉到“調查”→“導航”。",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "以秒為單位的時間間隔，在此時間間隔之後，調查將自動前進到下一頁。",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "使用魔杖圖示設置確定頁面可見性的條件規則。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "使用魔杖圖示設置禁用頁面只讀模式的條件規則。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "適用於本頁中的所有問題。如果要覆蓋此設置，請為單個問題或面板定義標題對齊規則。“繼承”選項將應用調查級別設置（預設為“頂部”）。",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "當問題標題與問題框左側對齊時，為問題標題設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。“繼承”選項將應用調查級別設置（預設為“頂部”）。",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "保持問題的原始順序或隨機化問題。繼承「選項應用調查級別設置（預設為」原始」。）。此設置的效果僅在「預覽」選項卡中可見。",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "設置導航按鈕在頁面上的可見性。“繼承”選項應用調查級別設置，預設為“可見”。",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "此表允許您設定頁面上的每個網格列。它根據行中的最大元素數自動設置每列的寬度百分比。要自定義網格佈局，請手動調整這些值並定義每列中所有問題的標題寬度。"
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "設置計時器在頁面上的位置。",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "從以下選項中選擇：「鎖定」 - 使用者無法展開或摺疊面板;“全部摺疊” - 所有面板都以摺疊狀態啟動;“全部展開” - 所有面板都以展開狀態啟動;“首先展開” - 最初只有第一個面板被展開。",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "在物件陣列中輸入共用屬性名稱，該數位包含要在選項清單中顯示的圖像或視頻檔URL。",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "左邊的值用作條件規則中使用的專案ID，右邊的值顯示給受訪者。",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "鍵入要顯示的使用者友好標題。",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "確保使用者在上傳檔之前不會完成調查。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "接受 CSS 值（px、%、in、pt 等）。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "接受 CSS 值（px、%、in、pt 等）。",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "接受 CSS 值（px、%、in、pt 等）。",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "聯接標識碼是一個自定義鍵，您可以將其分配給多個問題以將它們連結在一起並同步其值。這些值將合併到單個數位或物件中，並使用鍵作為屬性名稱存儲在測量結果中。",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "當問題值為空時，顯示在 HTML 問題以及調查元素的動態標題和描述中的值。",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "在單選題和多選題類型中，每個選項都有一個 ID 和顯示值。選中此設置后，將在 HTML 問題以及調查元素的動態標題和描述中顯示顯示值，而不是 ID 值。",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "選擇是否清除條件邏輯隱藏的問題值以及何時清除。“繼承”選項應用調查級別設置（預設為“完成調查後”）。",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "從以下選項中選擇：「全部」 - 複製所選問題中的所有選項;“Selected” - 僅動態複製選定的選項選項;“未選擇” - 僅動態複製未選擇的選項。默認情況下，如果在源問題中啟用了“無”和“其他”選項，則會複製該選項。",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "在單選和多選問題類型中，每個選項都有一個ID和顯示值。此設置指定哪個矩陣、列或面板問題應提供ID。",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "在單選和多選問題類型中，每個選項都有一個ID和顯示值。此設置指定哪個矩陣列或面板問題應提供顯示文本。",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "如果下拉清單中沒有所需的選項，則選擇以允許受訪者添加自己的選擇。自訂選項將僅在當前瀏覽器會話期間臨時存儲。",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "選取後，使用者可以在單獨的註釋框中包含其他輸入。",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "在新行上顯示每個特殊選項（“無”、“其他”、“全選”），即使使用多列佈局也是如此。",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "指定服務數據集中目標物件陣列所在的位置。如果 URL 已指向陣列，則留空。",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "在物件陣列中輸入一個統一的屬性名稱，該陣列包含要在選項清單中顯示的值。",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "選擇此選項可允許服務傳回空回應或陣列。",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "使用魔杖圖示設置條件規則，以確定所有選項的可見性。",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "左邊的值用作條件規則中使用的專案ID，右邊的值顯示給受訪者。",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "“自動”根據可用寬度在“按鈕”和“下拉”模式之間進行選擇。當寬度不足以顯示按鈕時，問題將顯示一個下拉清單。"
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "允許您連接以不同格式生成結果的問題。當使用聯接標識碼將此類問題連結在一起時，此共用屬性將存儲選定的問題值。",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "選擇是否要更新下拉功能表內容以匹配使用者在輸入欄位中鍵入的搜索查詢。",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "當受訪者給出肯定答案時保存在調查結果中的值。",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "當受訪者給出否定答案時保存在調查結果中的值。",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "不建議禁用此選項，因為它會覆蓋預覽圖像，並使用戶難以了解檔是否已上傳。",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "觸發提示，要求確認文件刪除。",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "啟用此選項可僅對選定的選項進行排名。使用者將從選項清單中拖動所選專案，以在排名區域內對它們進行排序。",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "輸入將在輸入期間向受訪者建議的選項清單。",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "該設置僅調整輸入欄位的大小，不會影響問題框的寬度。",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "為所有項目標籤設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "選擇如何在欄位中對齊輸入值。默認設置 「Auto」 如果應用了貨幣或數位掩碼，則將輸入值向右對齊，如果未應用，則向左對齊。",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "當圖像無法在使用者設備上顯示時，出於輔助功能的目的，可作為替代。",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "定義當評級圖示類型設置為「笑臉」時所選表情符號的顏色。選擇：「預設」 - 選取表情符號以預設調查顏色顯示;“比例” - 所選的表情符號繼承了評分量表的顏色。",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "受訪者不可見的表達式ID。",
      // "Type an expression subtitle."
      description: "鍵入表達式副標題。",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "表達式可以包括基本計算 （'{q1_id} + {q2_id}'）、條件 （'{age} > 60'） 和函數 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。"
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "選擇此選項可將「其他」選項值作為單獨的屬性存儲在調查結果中。",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "使用 {0} 作為實際值的佔位元。",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "有關詳細資訊，請參閱 [accept]（https://www.w3schools.com/tags/att_input_accept.asp） 屬性說明。",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "在多列佈局中排列選擇選項。設置為 0 時，選項將顯示在一行中。僅適用於將「儲存格輸入類型」設定為單選按鈕組或複選框的列。",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "選擇使用者瀏覽器可以檢索的數據類型。此資料來自使用者輸入的過去值或預配置值（如果使用者已保存用於自動完成）。",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "當「源類型」為「本地檔」或相機不可用時適用",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "當「源類型」為「相機」時適用。",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "當「源類型」為「本地檔或相機」時適用。",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "在多列佈局中排列選項。當設置為 0 時，選項將顯示在一行中。",
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "以多欄版面配置排列文字方塊。"
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "選擇是否要在調查結果中存儲帶有應用掩碼的問題值。"
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "該模式可以包含字串文字和以下佔位元： '9' - 表示數位;“a” - 表示大寫或小寫字母;'#' - 表示數位或大寫或小寫字母。使用反斜杠“\\”轉義字元。"
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "模式可以包含分隔符和以下佔位元：“<br>m”- 月份編號。<br>'mm' - 月份編號，前導零表示個位數值。<br>'d' - 月份中的某一天。<br>'dd' - 月份的某一天，個位數值的前導為零。<br>'yy' - 年份的最後兩位數位。<br>'yyyy' - 四位數年份。<br>“H” - 24 小時制的小時數。<br>“HH” - 24 小時制的小時數，個位數值的前導為零。<br>'h' - 以 12 小時為制的小時數。<br>'hh' - 12 小時制的小時數，個位數值的前導為零。<br>'MM' - 分鐘。<br>'ss' - 秒。<br>“TT” - 大寫 （AM/PM） 的 12 小時制週期。<br>'tt' - 小寫 （am/pm） 的 12 小時制週期。"
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "用於將顯示數位的小數部分與整數部分分開的符號。",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "用於將大數的數位分成三組的符號。",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "限制顯示數位的小數點後要保留的位數。"
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "要在值之前顯示的一個或多個符號。",
      // "One or several symbols to be displayed after the value."
      suffix: "要在值后顯示的一個或多個符號。"
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "此設置僅適用於面板之外的問題。",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "設置一種補充顏色，用於突出顯示關鍵調查元素。",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "調整面板和問題框相對於調查背景的透明度。",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "調整輸入元素相對於調查背景的透明度。",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "設置所有矩形元素的圓角半徑。如果要為輸入元素或面板和問題框設置單獨的角半徑值，請啟用高級模式。",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "設置調查的主要背景顏色。"
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "“與容器相同”選項會自動調整標題內容區域的寬度，以適應放置調查的 HTML 元素。",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "包含調查標題和描述的標題區域的寬度，以像素為單位。",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "啟用后，調查的頂部將覆蓋頁眉的底部。",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "設置為 0 時，將自動計算高度以適應標題的內容。"
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "“與容器相同”選項會自動調整進度條區域的寬度，以適應放置調查的 HTML 元素。",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "當「調查佈局」設置為「每頁單個輸入欄位」時使用。在此佈局中，矩陣被拆分，以便每個輸入欄位都顯示在單獨的頁面上。使用 {rowIndex} 占位符插入自動編號，使用 {rowTitle} 或 {rowName} 引用行的標題或 ID，使用 {row.columnid} 包含特定矩陣列的值。"
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "標題",
      // "Leave it empty, if it is the same as 'Name'"
      title: "如果與名字相同，請設置為空值"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "允許多項選擇",
    // [Auto-translated] "Show image and video captions"
    showLabel: "顯示圖像和視頻字幕",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "交換“是”和“否”的順序",
    // [Auto-translated] "Value"
    value: "價值",
    // [Auto-translated] "Tab alignment"
    tabAlign: "製表元對齊方式",
    // [Auto-translated] "File source type"
    sourceType: "檔源類型",
    // [Auto-translated] "Fit to container"
    fitToContainer: "適合容器",
    // [Auto-translated] "Set value expression"
    setValueExpression: "設置值表達式",
    // "Description"
    description: "說明", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "徽標合身",
    // [Auto-translated] "Pages"
    pages: "頁面", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "問題", // Auto-generated string
    // [Auto-translated] "Triggers"
    triggers: "觸發器",
    // [Auto-translated] "Custom variables"
    calculatedValues: "自訂變數",
    // [Auto-translated] "Survey id"
    surveyId: "調查編號", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "調查帖子編號", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "調查顯示數據保存", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "問題描述對齊",
    // [Auto-translated] "Progress bar type"
    progressBarType: "進度條類型", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "顯示目錄 （TOC）",
    // [Auto-translated] "TOC alignment"
    tocLocation: "目錄對齊",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "問題標題模式", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "測量寬度模式",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "顯示品牌資訊", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "在動態文字中使用顯示值",
    // [Auto-translated] "Visible if"
    visibleIf: "可見，如果", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "預設值表達式",
    // [Auto-translated] "Required if"
    requiredIf: "在以下情況下是必需的", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "如果出現以下情況，則重置值",
    // [Auto-translated] "Set value if"
    setValueIf: "設置值，如果",
    // [Auto-translated] "Validation rules"
    validators: "驗證規則",
    // [Auto-translated] "Bindings"
    bindings: "綁定", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "渲染為", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "附加原始專案", // Auto-generated string
    // "Choices"
    choices: "選項",
    // "Choices by url"
    choicesByUrl: "Url選項", // Auto-generated string
    // [Auto-translated] "Currency"
    currency: "貨幣", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "單元格提示", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "最大小數位數總數", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "最小小數位數總數", // Auto-generated string
    // [Auto-translated] "Columns"
    columns: "列", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "細節元素", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "允許自適應操作", // Auto-generated string
    // [Auto-translated] "Default row value"
    defaultRowValue: "預設行值", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "自動展開新行詳細資訊",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "選項延遲載入已啟用", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "選擇延遲載入頁面大小", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "輸入欄位元件", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "項目元件", // Auto-generated string
    // [Auto-translated] "Min"
    min: "最小值", // Auto-generated string
    // [Auto-translated] "Max"
    max: "麥克斯", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "最小值表達式", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "最大值表達式", // Auto-generated string
    // [Auto-translated] "Step"
    step: "步", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "自動建議的專案",
    // [Auto-translated] "Input field width (in characters)"
    inputSize: "輸入欄位寬度（以字元為單位）",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "項目標籤寬度",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "輸入值對齊",
    // [Auto-translated] "Elements"
    elements: "元素", // Auto-generated string
    // [Auto-translated] "Content"
    content: "內容", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "導航標題", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "導航說明", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "長按", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "動態擴展輸入欄位",
    // [Auto-translated] "Enable resize handle"
    allowResize: "啟用調整大小句柄",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "接受回車", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "顯示模式",
    // [Auto-translated] "Rate type"
    rateType: "費率類型", // Auto-generated string
    // [Auto-translated] "Label"
    label: "標籤", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "內容模式",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "圖片和縮圖適合",
    // [Auto-translated] "Alt text"
    altText: "可選文字",
    // [Auto-translated] "Height"
    height: "高度", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "智能手機上的身高",
    // [Auto-translated] "Pen color"
    penColor: "筆顏色", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "背景色",
    // [Auto-translated] "Template elements"
    templateElements: "範本元素", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "算子", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "是可變的", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "運行表達式", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "顯示標題", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "圖示名稱", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "圖示大小", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "精度", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "矩陣拖動手柄區域", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "背景圖片",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "背景圖像適合", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "背景圖像附件", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "背景不透明度", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "允許選擇性排名",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "排名區域對齊",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "顯示是否選擇了所有選項的文字",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "排名區域的佔位元文本",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "允許攝像頭訪問", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "評級圖示顏色模式",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Smileys 配色方案",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "複製顯示值", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "柱跨度",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "進度條區域寬度",
    // [Auto-translated] "Theme name"
    themeName: "主題名稱"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "高級模式",
    // "Page"
    pageTitle: "頁面標題字體",
    // "Question box"
    questionTitle: "問題標題字體",
    // "Input element"
    editorPanel: "輸入元素",
    // [Auto-translated] "Lines"
    lines: "線",
    // [Auto-translated] "Default"
    primaryDefaultColor: "違約",
    // [Auto-translated] "Hover"
    primaryDarkColor: "懸停",
    // [Auto-translated] "Selected"
    primaryLightColor: "選擇",
    // [Auto-translated] "Background color"
    backgroundDimColor: "背景色",
    // "Corner radius"
    cornerRadius: "拐角半徑",
    // [Auto-translated] "Default background"
    backcolor: "默認背景",
    // [Auto-translated] "Hover background"
    hovercolor: "懸停背景",
    // [Auto-translated] "Border decoration"
    borderDecoration: "邊框裝飾",
    // [Auto-translated] "Font color"
    fontColor: "字體顏色",
    // [Auto-translated] "Background color"
    backgroundColor: "背景顏色",
    // [Auto-translated] "Default color"
    primaryForecolor: "默認顏色",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "禁用顏色",
    // [Auto-translated] "Font"
    font: "字體",
    // [Auto-translated] "Darker"
    borderDefault: "暗",
    // [Auto-translated] "Lighter"
    borderLight: "打火機",
    // [Auto-translated] "Font family"
    fontFamily: "字體家族",
    // [Auto-translated] "Regular"
    fontWeightRegular: "定期",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "重",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "半粗體",
    // [Auto-translated] "Bold"
    fontWeightBold: "大膽",
    // [Auto-translated] "Color"
    color: "顏色",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "佔位元顏色",
    // [Auto-translated] "Size"
    size: "大小",
    // [Auto-translated] "Opacity"
    opacity: "不透明度",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "添加陰影效果",
    // [Auto-translated] "Blur"
    boxShadowBlur: "模糊",
    // [Auto-translated] "Spread"
    boxShadowSpread: "傳播",
    // [Auto-translated] "Drop"
    boxShadowDrop: "落",
    // [Auto-translated] "Inner"
    boxShadowInner: "內",
    names: {
      // [Auto-translated] "Default"
      default: "違約",
      // [Auto-translated] "Sharp"
      sharp: "鋒利",
      // [Auto-translated] "Borderless"
      borderless: "無國界",
      // [Auto-translated] "Flat"
      flat: "平",
      // [Auto-translated] "Plain"
      plain: "平原",
      // [Auto-translated] "Double Border"
      doubleborder: "雙邊框",
      // [Auto-translated] "Layered"
      layered: "分層的",
      // [Auto-translated] "Solid"
      solid: "固體",
      // [Auto-translated] "3D"
      threedimensional: "。.3D",
      // [Auto-translated] "Contrast"
      contrast: "反差"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "水鴨",
      // [Auto-translated] "Blue"
      blue: "藍",
      // [Auto-translated] "Purple"
      purple: "紫色",
      // [Auto-translated] "Orchid"
      orchid: "蘭花",
      // [Auto-translated] "Tulip"
      tulip: "鬱金香",
      // [Auto-translated] "Brown"
      brown: "棕色",
      // [Auto-translated] "Green"
      green: "綠",
      // [Auto-translated] "Gray"
      gray: "灰色"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "表面背景",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "主要",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "二 次",
    // [Auto-translated] "Surface"
    surfaceScale: "表面",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "UI 元素",
    // [Auto-translated] "Font"
    fontScale: "字體",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "調查建立者 2020",
      // [Auto-translated] "Light"
      "default-light": "光",
      // [Auto-translated] "Dark"
      "default-dark": "黑暗",
      // [Auto-translated] "Contrast"
      "default-contrast": "反差"
    }
  }
};

setupLocale({ localeCode: "zh-tw", strings: traditionalChineseTranslation });