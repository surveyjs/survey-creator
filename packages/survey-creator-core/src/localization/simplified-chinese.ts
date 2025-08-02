import { setupLocale } from "survey-creator-core";

export var simplifiedChineseTranslation = {
  // survey templates
  survey: {
    // "Edit"
    edit: "编辑",
    // "Watch and learn how to create surveys"
    externalHelpLink: "教学小片",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "从左侧工具箱拖个问题",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "创建规则以自定义调查流。",
    // "Copy"
    copy: "复制",
    // [Auto-translated] "Duplicate"
    duplicate: "重复",
    // "Add to toolbox"
    addToToolbox: "添加到工具箱",
    // "Delete Panel"
    deletePanel: "删除面板",
    // "Delete Question"
    deleteQuestion: "删除题目",
    // "Convert to"
    convertTo: "转变为",
    // "Drag element"
    drag: "拖放元件"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "测试问卷",
    // "Themes"
    theme: "主题",
    // "Translations"
    translation: "转换",
    // "Designer"
    designer: "问卷设计器",
    // "JSON Editor"
    json: "JSON 编辑器",
    // [Auto-translated] "Logic"
    logic: "逻辑"
  },
  // Question types
  qt: {
    // "Default"
    default: "默认",
    // "Checkboxes"
    checkbox: "多项选择",
    // "Long Text"
    comment: "多行文本",
    // "Image Picker"
    imagepicker: "选图片",
    // [Auto-translated] "Ranking"
    ranking: "排名",
    // [Auto-translated] "Image"
    image: "图像",
    // "Dropdown"
    dropdown: "下拉框",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "多选下拉列表",
    // "File Upload"
    file: "文件上传",
    // "HTML"
    html: "Html 代码",
    // "Single-Select Matrix"
    matrix: "矩阵 (单选题)",
    // "Multi-Select Matrix"
    matrixdropdown: "矩阵 (下拉框)",
    // "Dynamic Matrix"
    matrixdynamic: "矩阵 (动态问题)",
    // "Multiple Textboxes"
    multipletext: "文本框组",
    // "Panel"
    panel: "面板",
    // "Dynamic Panel"
    paneldynamic: "面板(动态)",
    // "Radio Button Group"
    radiogroup: "单项选择",
    // "Rating Scale"
    rating: "评分",
    // [Auto-translated] "Slider"
    slider: "滑 块",
    // "Single-Line Input"
    text: "单行文本",
    // "Yes/No (Boolean)"
    boolean: "逻辑项",
    // "Expression (read-only)"
    expression: "表达式(只读)",
    // [Auto-translated] "Signature"
    signaturepad: "签名",
    // [Auto-translated] "Button Group"
    buttongroup: "按钮组"
  },
  toolboxCategories: {
    // "General"
    general: "一般",
    // "Choice Questions"
    choice: "选择题",
    // "Text Input Questions"
    text: "文本输入问题",
    // "Containers"
    containers: "器皿",
    // "Matrix Questions"
    matrix: "矩阵问题",
    // "Misc"
    misc: "杂项"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "默认语言 ({0})",
    // "Survey"
    survey: "调查问卷",
    // "Settings"
    settings: "问卷设置",
    // [Auto-translated] "Open settings"
    settingsTooltip: "打开设置",
    // [Auto-translated] "Survey Settings"
    surveySettings: "调查设置",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "调查设置",
    // [Auto-translated] "Theme Settings"
    themeSettings: "主题设置",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "主题设置",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Creator 设置",
    // [Auto-translated] "Show Panel"
    showPanel: "显示面板",
    // [Auto-translated] "Hide Panel"
    hidePanel: "“隐藏”面板",
    // [Auto-translated] "Select previous"
    prevSelected: "选择上一个",
    // [Auto-translated] "Select next"
    nextSelected: "选择下一步",
    // [Auto-translated] "Focus previous"
    prevFocus: "焦点 上一页",
    // [Auto-translated] "Focus next"
    nextFocus: "接下来的重点",
    // [Auto-translated] "Survey"
    surveyTypeName: "调查",
    // [Auto-translated] "Page"
    pageTypeName: "页",
    // [Auto-translated] "Panel"
    panelTypeName: "面板",
    // [Auto-translated] "Question"
    questionTypeName: "问题",
    // [Auto-translated] "Column"
    columnTypeName: "列",
    // "Add New Page"
    addNewPage: "添加新页面",
    // "Scroll to the Right"
    moveRight: "滚动到右侧",
    // "Scroll to the Left"
    moveLeft: "滚动到左侧",
    // "Delete Page"
    deletePage: "删除页面",
    // "Edit Page"
    editPage: "编辑页面",
    // "Edit"
    edit: "编辑",
    // "page"
    newPageName: "页面",
    // "question"
    newQuestionName: "问题",
    // "panel"
    newPanelName: "面板",
    // "text"
    newTextItemName: "文本",
    // [Auto-translated] "Default"
    defaultV2Theme: "违约",
    // [Auto-translated] "Modern"
    modernTheme: "摩登",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "默认（旧版）",
    // "Preview Survey Again"
    testSurveyAgain: "再次测试问卷",
    // "Survey width: "
    testSurveyWidth: "问卷宽度: ",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "你必须导航到",
    // "Save Survey"
    saveSurvey: "保存问卷",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "保存调查",
    // [Auto-translated] "Save Theme"
    saveTheme: "保存主题",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "保存主题",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "隐藏错误",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "显示错误",
    // "Undo"
    undo: "撤销",
    // "Redo"
    redo: "恢复",
    // [Auto-translated] "Undo last change"
    undoTooltip: "撤消上次更改",
    // [Auto-translated] "Redo the change"
    redoTooltip: "重做更改",
    // [Auto-translated] "Expand"
    expandTooltip: "扩大",
    // [Auto-translated] "Collapse"
    collapseTooltip: "崩溃",
    // "Expand All"
    expandAllTooltip: "全部展开",
    // "Collapse All"
    collapseAllTooltip: "全部折叠",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "放大",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "缩放到 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "缩小",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "锁定问题的展开/折叠状态",
    // [Auto-translated] "Show more"
    showMoreChoices: "显示更多",
    // [Auto-translated] "Show less"
    showLessChoices: "显示更少",
    // [Auto-translated] "Copy"
    copy: "复制",
    // [Auto-translated] "Cut"
    cut: "切",
    // [Auto-translated] "Paste"
    paste: "糊",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "将所选内容复制到剪贴板",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "将所选内容剪切到剪贴板",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "从剪贴板粘贴",
    // "Options"
    options: "选项",
    // "Generate Valid JSON"
    generateValidJSON: "生成 JSON 数据",
    // "Generate Readable JSON"
    generateReadableJSON: "生成易读的 JSON 数据",
    // "Toolbox"
    toolbox: "工具箱",
    // [Auto-translated] "Properties"
    "property-grid": "性能",
    // [Auto-translated] "Search"
    toolboxSearch: "搜索",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "键入以搜索...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "未找到结果",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "键入以搜索...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "未找到结果",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "开始配置表单",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "单击任何类别图标以浏览调查设置。将测量元素添加到设计图面后，其他设置将变为可用。",
    // "Please correct JSON."
    correctJSON: "请修正 JSON 数据",
    // "Survey Results "
    surveyResults: "问卷结果: ",
    // "As Table"
    surveyResultsTable: "表格形式",
    // "As JSON"
    surveyResultsJson: "JSON形式",
    // "Question Title"
    resultsTitle: "问题标题",
    // "Question Name"
    resultsName: "问题名称",
    // "Answer Value"
    resultsValue: "答案名称",
    // "Display Value"
    resultsDisplayValue: "显示答案",
    // "Modified"
    modified: "已修改",
    // "Saving"
    saving: "保存中...",
    // "Saved"
    saved: "已保存",
    // [Auto-translated] "Error"
    propertyEditorError: "错误",
    // "Error! Editor content is not saved."
    saveError: "错误，未保存",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "语言设置",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "主题设置",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "添加语言",
    // [Auto-translated] "Languages"
    translationLanguages: "语言",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "您确定要删除此语言的所有字符串吗？",
    // "Select language to translate"
    translationAddLanguage: "语言选择",
    // "All Strings"
    translationShowAllStrings: "全部名词",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "仅使用的字符串",
    // "All Pages"
    translationShowAllPages: "全部页面",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "未翻译，重新选",
    // "Export to CSV"
    translationExportToSCVButton: "导出CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "导入CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "自动翻译全部",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "翻译语言组合：",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "未翻译的字符串",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "同默认合并 {0} ",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "译本。。。",
    // [Auto-translated] "Source: "
    translationSource: "源：",
    // [Auto-translated] "Target: "
    translationTarget: "目标：",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "不支持 YouTube 链接。",
    // [Auto-translated] "Export"
    themeExportButton: "出口",
    // [Auto-translated] "Import"
    themeImportButton: "进口",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "出口",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "进口",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "复制到剪贴板",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "将主题设置重置为默认值",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "你真的要重置主题吗？您的所有自定义项都将丢失。",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "是，重置主题",
    // "Bold"
    bold: "加粗",
    // "Italic"
    italic: "斜体",
    // "Underline"
    underline: "下划线",
    // "Add Question"
    addNewQuestion: "添加问题",
    // [Auto-translated] "Select page..."
    selectPage: "选择页面...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "选择是从",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "选项是从 Web 服务加载的。",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "前往“设置”",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "加载选项的预览",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML内容将在这里。",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "在此处从工具箱中删除问题。",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "调查为空。从工具箱中拖动元素或单击下面的按钮。",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "页面为空。从工具箱中拖动元素或单击下面的按钮。",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "将图像拖放到此处或单击下面的按钮并选择要上传的图像",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "单击下面的“添加问题”按钮开始创建表单。",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "您的表单为空",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "您的表单为空",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "从工具箱中拖动元素或单击下面的按钮。",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "从工具箱中拖动元素或单击下面的按钮。",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "无预览",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "无预览",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "调查不包含任何可见元素。",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "调查不包含任何可见元素。",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "无需翻译字符串",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "无需翻译字符串",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "将元素添加到表单或更改工具栏中的字符串筛选器。",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "将元素添加到表单或更改工具栏中的字符串筛选器。",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "单击下面的“添加问题”按钮，向页面添加新元素。",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "单击下面的“添加问题”按钮，将新元素添加到面板中。",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "点击下面的按钮，选择要上传的图片",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "选择图像",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "添加{0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[徽标]",
    // [Auto-translated] "Item "
    choices_Item: "项目",
    // [Auto-translated] "Select a file"
    selectFile: "选择文件",
    // [Auto-translated] "Remove the file"
    removeFile: "删除文件",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "添加新规则",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "创建规则以自定义调查流。",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "无逻辑规则",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "无逻辑规则",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "创建规则以自定义调查流程。",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "创建规则以自定义调查流程。",
      // [Auto-translated] "Show/hide page"
      page_visibilityName: "显示/隐藏页面",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "启用/禁用页面",
      // [Auto-translated] "Make page required"
      page_requireName: "将页面设为必填项",
      // [Auto-translated] "Show/hide panel"
      panel_visibilityName: "显示/隐藏面板",
      // [Auto-translated] "Enable/disable panel"
      panel_enableName: "启用/禁用面板",
      // [Auto-translated] "Make panel required"
      panel_requireName: "使面板成为必填项",
      // [Auto-translated] "Show/hide question"
      question_visibilityName: "显示/隐藏问题",
      // [Auto-translated] "Enable/disable question"
      question_enableName: "启用/禁用问题",
      // [Auto-translated] "Make question required"
      question_requireName: "提出必填题",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "重置问题值",
      // [Auto-translated] "Set question value"
      question_setValueName: "设置问题值",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "显示/隐藏列",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "启用/禁用列",
      // [Auto-translated] "Make column required"
      column_requireName: "使列成为必填项",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "重置列值",
      // [Auto-translated] "Set column value"
      column_setValueName: "设置列值",
      // [Auto-translated] "Complete survey"
      trigger_completeName: "完成调查",
      // [Auto-translated] "Set answer"
      trigger_setvalueName: "设置答案",
      // [Auto-translated] "Copy answer"
      trigger_copyvalueName: "复制答案",
      // [Auto-translated] "Skip to question"
      trigger_skipName: "跳至问题",
      // [Auto-translated] "Run expression"
      trigger_runExpressionName: "运行表达式",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "设置“调查完成”页面标记",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "当逻辑表达式计算结果为 true 时，使页面可见。否则，请保持页面不可见。",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "当逻辑表达式计算结果为 true 时，使页面可见。否则，请保持面板不可见。",
      // [Auto-translated] "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "当逻辑表达式计算结果为 true 时，启用面板及其中的所有元素。否则，请禁用它们。",
      // [Auto-translated] "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "当逻辑表达式的计算结果为 true 时，使问题可见。否则，请保持问题不可见。",
      // [Auto-translated] "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "当逻辑表达式的计算结果为 true 时启用问题。否则，请禁用该问题。",
      // [Auto-translated] "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "当逻辑表达式的计算结果为 true 时，Question 变为必填项。",
      // [Auto-translated] "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "当逻辑表达式的计算结果为 true 时，调查结束，受访者将看到“谢谢”页面。",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "当逻辑表达式中使用的问题值发生更改，并且表达式的计算结果为 true 时，将指定值分配给所选问题。",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "当逻辑表达式中使用的问题值发生更改，并且表达式的计算结果为 true 时，所选问题的值将复制到另一个问题中。",
      // [Auto-translated] "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "当逻辑表达式的计算结果为 true 时，调查将聚焦/跳转到所选问题。",
      // [Auto-translated] "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "当逻辑表达式的计算结果为 true 时，调查将计算另一个表达式。可选地，可以将后一个表达式的结果作为值分配给所选问题",
      // [Auto-translated] "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "如果逻辑表达式的计算结果为 true，则“谢谢”页面将显示指定的内容。",
      // [Auto-translated] "When expression: '{0}' returns true"
      itemExpressionText: "当表达式：“{0}”返回 true", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "新规则",
      // [Auto-translated] "make page {0} visible"
      page_visibilityText: "使页面{0}可见", // {0} page name
      // [Auto-translated] "make panel {0} visible"
      panel_visibilityText: "使面板{0}可见", // {0} panel name
      // [Auto-translated] "make panel {0} enable"
      panel_enableText: "使面板{0}启用", // {0} panel name
      // [Auto-translated] "make question {0} visible"
      question_visibilityText: "使问题{0}可见", // {0} question name
      // [Auto-translated] "make question {0} enable"
      question_enableText: "使问题{0}启用", // {0} question name
      // [Auto-translated] "make question {0} required"
      question_requireText: "将问题{0}为必填项", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "重置问题的值：{0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "分配值：{1}问题：{0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "使问题{1}的列{0}可见", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "使问题{1}列{0}启用", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "{0}将问题{1}列为必填项", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "重置列的单元格值：{0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "将单元格值：{1}分配给列：{0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "一个表达式，其结果将分配给目标问题。",
      // [Auto-translated] "survey becomes completed"
      trigger_completeText: "调查完成",
      // [Auto-translated] "set into question: {0} value {1}"
      trigger_setvalueText: "受到质疑：{0}价值{1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "明确问题值：{0}", // {0} question name
      // [Auto-translated] "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "复制到问题：{0}问题 {1} 的值", // {0} and {1} question names
      // [Auto-translated] "survey skip to the question {0}"
      trigger_skipText: "调查 跳至问题{0}", // {0} question name
      // [Auto-translated] "run expression: '{0}'"
      trigger_runExpressionText1: "运行表达式：“{0}”", // {0} the expression
      // [Auto-translated] " and set its result into question: {0}"
      trigger_runExpressionText2: "并质疑其结果：{0}", // {0} question name
      // [Auto-translated] "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "显示“谢谢”页面的自定义文本。",
      // [Auto-translated] "All Questions"
      showAllQuestions: "所有问题",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "所有操作类型",
      // [Auto-translated] "Condition(s)"
      conditions: "条件",
      // [Auto-translated] "Action(s)"
      actions: "操作 （s）",
      // [Auto-translated] "Define condition(s)"
      expressionEditorTitle: "定义条件",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "定义操作",
      // [Auto-translated] "Delete Action"
      deleteAction: "删除操作",
      // [Auto-translated] "Add Action"
      addNewAction: "添加操作",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "选择操作...",
      // [Auto-translated] "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "逻辑表达式为空或无效。请更正。",
      // [Auto-translated] "Please add at least one action."
      noActionError: "请添加至少一个作。",
      // [Auto-translated] "Please fix issues in your action(s)."
      actionInvalid: "请解决作中的问题。",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "逻辑规则不完整",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "您尚未完成某些逻辑规则。如果现在离开该选项卡，更改将丢失。是否仍要离开选项卡而不完成更改？",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "是的",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "不，我想完成规则"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "面板名称",
      // [Auto-translated] "Panel title"
      title: "面板标题",
      // [Auto-translated] "Panel description"
      description: "面板说明",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "如果出现以下情况，则使面板可见",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "如果出现以下情况，则使面板成为必需的",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "小组内的问题顺序",
      // [Auto-translated] "Move the panel to page"
      page: "将面板移动到页面",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "在新行上显示面板",
      // [Auto-translated] "Panel collapse state"
      state: "面板折叠状态",
      // [Auto-translated] "Inline panel width"
      width: "内联面板宽度",
      // [Auto-translated] "Minimum panel width"
      minWidth: "最小面板宽度",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "最大面板宽度",
      // [Auto-translated] "Number this panel"
      showNumber: "对此面板进行编号"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "有效宽度，%",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "问题标题宽度，像素"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "面板名称",
      // [Auto-translated] "Panel title"
      title: "面板标题",
      // [Auto-translated] "Panel description"
      description: "面板说明",
      // [Auto-translated] "Entry display mode"
      displayMode: "入口显示模式",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "如果出现以下情况，则使面板可见",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "如果出现以下情况，则使面板成为必需的",
      // [Auto-translated] "Move the panel to page"
      page: "将面板移动到页面",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "在新行上显示面板",
      // [Auto-translated] "Panel collapse state"
      state: "面板折叠状态",
      // [Auto-translated] "Inline panel width"
      width: "内嵌面板宽度",
      // [Auto-translated] "Minimum panel width"
      minWidth: "最小面板宽度",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "最大面板宽度",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "确认条目移除",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "条目描述模式",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "条目标题模式",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "空面板文本",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "选项卡标题模式",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "选项卡标题占位符",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "如果出现以下情况，则单个条目可见",
      // [Auto-translated] "Number the panel"
      showNumber: "为面板编号",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "面板标题对齐方式",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "面板描述对齐方式",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "问题标题对齐",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "问题标题宽度",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "错误消息对齐",
      // [Auto-translated] "New entry location"
      newPanelPosition: "新入场地点",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "显示进度条",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "防止以下问题中的重复回答"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "问题名称",
      // [Auto-translated] "Question title"
      title: "问题标题",
      // [Auto-translated] "Question description"
      description: "问题描述",
      // [Auto-translated] "Show the title and description"
      showTitle: "显示标题和描述",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "如果出现以下情况，请使问题可见",
      // [Auto-translated] "Make the question required if"
      requiredIf: "如果出现以下情况，则将问题设为必填项",
      // [Auto-translated] "Move the question to page"
      page: "将问题移至页面",
      // [Auto-translated] "Question box collapse state"
      state: "问题框折叠状态",
      // [Auto-translated] "Number this question"
      showNumber: "为这个问题编号",
      // [Auto-translated] "Question title alignment"
      titleLocation: "问题标题对齐方式",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "问题描述对齐方式",
      // [Auto-translated] "Error message alignment"
      errorLocation: "错误消息对齐",
      // [Auto-translated] "Increase the inner indent"
      indent: "增加内缩进",
      // [Auto-translated] "Inline question width"
      width: "内联问题宽度",
      // [Auto-translated] "Minimum question width"
      minWidth: "最小问题宽度",
      // [Auto-translated] "Maximum question width"
      maxWidth: "最大问题宽度",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "更新输入字段值"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "签名区域宽度",
      // [Auto-translated] "Signature area height"
      signatureHeight: "签名区高度",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "自动缩放签名区域",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "在签名区域内显示占位符",
      // [Auto-translated] "Placeholder text"
      placeholder: "占位符文本",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "只读或预览模式下的占位符文本",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "在签名区域内显示“清除”按钮",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "最小笔画宽度",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "最大行程宽度",
      // [Auto-translated] "Stroke color"
      penColor: "描边颜色"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "输入字段高度（以行为单位）"
    },
    // "Question numbering"
    showQuestionNumbers: "显示问题编号",
    // "Question indexing type"
    questionStartIndex: "问题起始标志 (1, 2 or 'A', 'a')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "表达式名称",
      // [Auto-translated] "Expression title"
      title: "表达式标题",
      // [Auto-translated] "Expression description"
      description: "表达式说明",
      // [Auto-translated] "Expression"
      expression: "表达"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "表达"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "表达"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "调查标题",
      // [Auto-translated] "Survey description"
      description: "调查说明",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "将调查设为只读"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "页面名称",
      // [Auto-translated] "Page title"
      title: "页面标题",
      // [Auto-translated] "Page description"
      description: "页面描述",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "如果出现以下情况，则使页面可见",
      // [Auto-translated] "Make the page required if"
      requiredIf: "如果出现以下情况，则使页面为必填项",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "完成页面的时间限制",
      // [Auto-translated] "Question order on the page"
      questionOrder: "页面上的问题顺序"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "列名称",
      // [Auto-translated] "Column title"
      title: "专栏标题",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "防止重复响应",
      // [Auto-translated] "Column width"
      width: "列宽",
      // [Auto-translated] "Minimum column width"
      minWidth: "最小列宽",
      // [Auto-translated] "Input field height (in lines)"
      rows: "输入字段高度（以行为单位）",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "如果出现以下情况，则使列可见",
      // [Auto-translated] "Make the column required if"
      requiredIf: "如果满足以下条件，则使该列为必填项",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "每个选项都在单独的列中"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "名字",
      // [Auto-translated] "Title"
      title: "标题"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "在调查结果中保存掩码值"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "价值模式"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "最小值",
      // [Auto-translated] "Maximum value"
      max: "最大值"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "允许负值",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "千分隔符",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "小数点分隔符",
      // [Auto-translated] "Value precision"
      precision: "值精度",
      // [Auto-translated] "Minimum value"
      min: "最小值",
      // [Auto-translated] "Maximum value"
      max: "最大值"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "货币前缀",
      // [Auto-translated] "Currency suffix"
      suffix: "货币后缀"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "选中时清除其他",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "要求用户输入注释",
    // "Display area height"
    imageHeight: "图片高度",
    // "Display area width"
    imageWidth: "图片宽度",
    // "Join identifier"
    valueName: "值名",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "动态文本的默认显示值",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "标签对齐",
    // [Auto-translated] "Input field width (in characters)"
    size: "输入字段宽度（以字符为单位）",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "单元格错误消息对齐方式",
    // [Auto-translated] "Enabled"
    enabled: "启用",
    // [Auto-translated] "Disabled"
    disabled: "禁用",
    // [Auto-translated] "Inherit"
    inherit: "继承",
    // "Apply"
    apply: "应用",
    // "OK"
    ok: "确定",
    // [Auto-translated] "Save"
    save: "救",
    // [Auto-translated] "Clear"
    clear: "清楚",
    // [Auto-translated] "Save"
    saveTooltip: "救",
    // "Cancel"
    cancel: "取消",
    // [Auto-translated] "Set"
    set: "设置",
    // "Reset"
    reset: "重置",
    // [Auto-translated] "Change"
    change: "改变",
    // [Auto-translated] "Refresh"
    refresh: "刷新",
    // "Close"
    close: "关闭",
    // "Delete"
    delete: "删除",
    // [Auto-translated] "Add"
    add: "加",
    // "Add New"
    addNew: "新建",
    // "Click to add an item..."
    addItem: "添加项...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "单击以删除该项目...",
    // [Auto-translated] "Drag the item"
    dragItem: "拖动项目",
    // "Other"
    addOther: "其他",
    // "Select All"
    addSelectAll: "全选",
    // "None"
    addNone: "无",
    // "Remove All"
    removeAll: "全部删除",
    // "Edit"
    edit: "编辑器",
    // [Auto-translated] "Return without saving"
    back: "退货而不保存",
    // [Auto-translated] "Return without saving"
    backTooltip: "退货而不保存",
    // [Auto-translated] "Save and return"
    saveAndBack: "保存并返回",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "保存并返回",
    // [Auto-translated] "Done"
    doneEditing: "做",
    // "Edit Choices"
    editChoices: "编辑选项",
    // [Auto-translated] "Show Choices"
    showChoices: "显示选项",
    // "Move"
    move: "移动",
    // "<empty>"
    empty: "<空>",
    // [Auto-translated] "Value is empty"
    emptyValue: "值为空",
    // "Manual Entry"
    fastEntry: "快速输入",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "值“{0}”不是唯一的",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "请将项目数量限制在{0}到{1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "请输入至少{0}项目",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "按以下格式输入选择选项列表及其 ID：\n\nid|选项\n\n选择选项 ID 对受访者不可见，可用于条件规则。",
    // "Form Entry"
    formEntry: "表单输入",
    // "Test the service"
    testService: "测试服务",
    // [Auto-translated] "Please select the element"
    itemSelectorEmpty: "请选择元素",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "请选择操作",
    // "Select a question..."
    conditionSelectQuestion: "选择问题...",
    // [Auto-translated] "Select a page..."
    conditionSelectPage: "选择一个页面...",
    // [Auto-translated] "Select a panel..."
    conditionSelectPanel: "选择面板...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "选择值",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "trl+space公式补完提示",
    // "Current row"
    aceEditorRowTitle: "当前行",
    // "Current panel"
    aceEditorPanelTitle: "当前面板",
    // "For more details please check the documentation"
    showMore: "更多细节请查看文档",
    // "Available questions"
    assistantTitle: "Available questions:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "至少有1行",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "提交前审核",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "由条件启用",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "重置",
    // "Please enter a value"
    propertyIsEmpty: "请为该属性设定一个值",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "请输入唯一值",
    // [Auto-translated] "Please enter a unique name"
    propertyNameIsNotUnique: "请输入唯一名称",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "不要使用保留字：“项目”、“选项”、“面板”、“行”。",
    // [Auto-translated] "You don't have any items yet"
    listIsEmpty: "您还没有任何物品",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "你还没有任何选择",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "您还没有任何列",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "您还没有布局列",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "您还没有任何行",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "尚无任何验证规则",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "您还没有任何自定义变量",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "您还没有任何触发器",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "您还没有任何链接",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "您还没有任何页面",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "添加新选择",
    // [Auto-translated] "Add new column"
    "addNew@columns": "添加新列",
    // [Auto-translated] "Add new row"
    "addNew@rows": "添加新行",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "添加新规则",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "添加新变量",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "添加新触发器",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "添加新 URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "添加新页面",
    // [Auto-translated] "Expression is empty"
    expressionIsEmpty: "表达式为空",
    // "Value"
    value: "值",
    // "Text"
    text: "显示文本",
    // "Row ID"
    rowid: "行号",
    // "Image or video file URL"
    imageLink: "图片链接",
    // "Edit column: {0}"
    columnEdit: "编辑列: {0}",
    // "Edit item: {0}"
    itemEdit: "编辑选项: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "路径",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "Web 服务 URL",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "从以下属性获取要存储的值"
    },
    // "Get value to display from the following property"
    titleName: "标题名",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "从以下属性获取文件 URL",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "接受空响应",
    // [Auto-translated] "Title"
    titlePlaceholder: "标题",
    // [Auto-translated] "Survey Title"
    surveyTitlePlaceholder: "调查标题",
    // [Auto-translated] "Page {num}"
    pageTitlePlaceholder: "页数 {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "起始页",
    // [Auto-translated] "Description"
    descriptionPlaceholder: "描述",
    // [Auto-translated] "Description"
    surveyDescriptionPlaceholder: "描述",
    // [Auto-translated] "Description"
    pageDescriptionPlaceholder: "描述",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "换行选项",
    // "Enable the \"Other\" option"
    showOtherItem: "可添加其他答案?",
    // "Rename the \"Other\" option"
    otherText: "其他答案文本",
    // "Enable the \"None\" option"
    showNoneItem: "无",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "启用“拒绝接听”选项",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "启用“不知道”选项",
    // "Rename the \"None\" option"
    noneText: "无文本",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "有全选项",
    // "Rename the \"Select All\" option"
    selectAllText: "选择全部文本",
    // "Minimum value for auto-generated items"
    choicesMin: "选项最小值",
    // "Maximum value for auto-generated items"
    choicesMax: "选项最大值",
    // "Step value for auto-generated items"
    choicesStep: "选项间隔",
    // "Name"
    name: "题目名",
    // "Title"
    title: "题目文本",
    // "Cell input type"
    cellType: "单元格类型",
    // "Column count"
    colCount: "列数",
    // "Choice order"
    choicesOrder: "设置选项顺序",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "允许自定义选项",
    // "Visible"
    visible: "是否可见?",
    // "Required"
    isRequired: "是否为必填项?",
    // [Auto-translated] "Mark as required"
    markRequired: "标记为必填",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "删除所需的标记",
    // [Auto-translated] "Require an answer in each row"
    eachRowRequired: "要求在每一行中都有答案",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "防止行中出现重复响应",
    // "Error message for required questions"
    requiredErrorText: "错误文字",
    // "Display the question on a new line"
    startWithNewLine: "问题是否新起一行?",
    // "Rows"
    rows: "文本框行数",
    // [Auto-translated] "Columns"
    cols: "列",
    // "Placeholder text within input field"
    placeholder: "占位文本",
    // "Show preview area"
    showPreview: "是否显示图像预览?",
    // "Store file content in JSON result as text"
    storeDataAsText: "以 JSON 文本方式存储文件",
    // "Maximum file size (in bytes)"
    maxSize: "文件最大尺寸 (Bytes)",
    // "Row count"
    rowCount: "默认行数",
    // "Columns layout"
    columnLayout: "列布局",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "添加行按钮位置",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "将行转置为列",
    // "\"Add Row\" button text"
    addRowText: "添加条目按钮文本",
    // "\"Remove Row\" button text"
    removeRowText: "删除条目按钮文本",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "输入字段标题模式",
    // "Minimum rating value"
    rateMin: "最小评分",
    // "Maximum rating value"
    rateMax: "最大评分",
    // "Step value"
    rateStep: "评分间隔",
    // "Minimum value label"
    minRateDescription: "最小值提示",
    // "Maximum value label"
    maxRateDescription: "最大值提示",
    // "Input type"
    inputType: "文本框类型",
    // "Option placeholder"
    optionsCaption: "下拉框提示语",
    // "Default Answer"
    defaultValue: "默认值",
    // "Default texts"
    cellsDefaultRow: "Default cells texts",
    // "Edit survey settings"
    surveyEditorTitle: "问卷设置",
    // "Edit: {0}"
    qEditorTitle: "编辑问题: {0}",
    // "Maximum character limit"
    maxLength: "最大长度",
    // [Auto-translated] "Build"
    buildExpression: "建",
    // [Auto-translated] "Edit"
    editExpression: "编辑",
    // [Auto-translated] "and"
    and: "和",
    // [Auto-translated] "or"
    or: "或",
    // [Auto-translated] "Remove"
    remove: "删除",
    // [Auto-translated] "Add Condition"
    addCondition: "添加条件",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "选择一个问题以开始配置条件。",
    // [Auto-translated] "If"
    if: "如果",
    // [Auto-translated] "then"
    then: "然后",
    // [Auto-translated] "Target question"
    setToName: "目标问题",
    // [Auto-translated] "Question to copy answer from"
    fromName: "要从中复制答案的问题",
    // [Auto-translated] "Question to skip to"
    gotoName: "要跳到的问题",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "规则不正确",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "添加到调查结果",
    // "Make the title and description visible"
    showTitle: "显示/隐藏 标题",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "展开/折叠标题",
    // "Select a survey language"
    locale: "默认语言",
    // [Auto-translated] "Select device type"
    simulator: "选择设备类型",
    // [Auto-translated] "Switch to landscape orientation"
    landscapeOrientation: "切换到横向",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "切换到纵向",
    // "Clear hidden question values"
    clearInvisibleValues: "清除隐藏值",
    // "Limit to one response"
    cookieName: "Cookie名，避免多次运行)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "切换页时保存结果",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "其他值单独储存",
    // "Show page titles"
    showPageTitles: "显示页面标题",
    // "Show page numbers"
    showPageNumbers: "显示页数",
    // "\"Previous Page\" button text"
    pagePrevText: "前一页按钮文本",
    // "\"Next Page\" button text"
    pageNextText: "后一页按钮文本",
    // "\"Complete Survey\" button text"
    completeText: "完成按钮文本",
    // [Auto-translated] "\"Review Answers\" button text"
    previewText: "“查看答案”按钮文本",
    // [Auto-translated] "\"Edit Answer\" button text"
    editText: "“编辑答案”按钮文本",
    // "\"Start Survey\" button text"
    startSurveyText: "开始按钮文本",
    // "Show navigation buttons"
    showNavigationButtons: "显示导航按钮 (默认导航)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "导航按钮对齐",
    // "Show the \"Previous Page\" button"
    showPrevButton: "显示前一页按钮 (用户可返回至前一页面)",
    // "First page is a start page"
    firstPageIsStartPage: "调查的第一页面为起始页.",
    // "Show the \"Thank You\" page"
    showCompletePage: "结尾展示完成后的页面 (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "回答本页所有问题后，自动跳转到下一页",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "自动完成调查",
    // "Show the progress bar"
    showProgressBar: "显示进度条",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "进度条对齐",
    // "Question title alignment"
    questionTitleLocation: "问题的标题位置",
    // "Question title width"
    questionTitleWidth: "问题标题宽度",
    // "Required symbol(s)"
    requiredMark: "问题必填标志",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "问题标题模板, 默认为: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "问题错误定位",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "改变页面时聚焦在第一个问题",
    // "Question order"
    questionOrder: "页内问题顺序",
    // "Time limit to complete the survey"
    timeLimit: "完成调查的最长时间",
    // "Time limit to complete one page"
    timeLimitPerPage: "完成调查中页面的最长时间",
    // [Auto-translated] "Use a timer"
    showTimer: "使用计时器",
    // "Timer alignment"
    timerLocation: "显示计时器面板",
    // "Timer mode"
    timerInfoMode: "显示计时器面板模式",
    // "Panel display mode"
    renderMode: "渲染模式",
    // "Enable entry addition"
    allowAddPanel: "允许添加面板",
    // "Enable entry removal"
    allowRemovePanel: "允许删除面板",
    // "\"Add Entry\" button text"
    addPanelText: "添加面板文本",
    // "\"Remove Entry\" button text"
    removePanelText: "删除面板文本",
    // "Show all elements on one page"
    isSinglePage: "在一个页面上展示所有元素",
    // "HTML markup"
    html: "Html",
    // [Auto-translated] "Answer"
    setValue: "答",
    // [Auto-translated] "Storage format"
    dataFormat: "存储格式",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "启用行添加",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "启用行删除",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "启用行重新排序",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "如果指定了确切的显示区域宽度或高度，则不适用。",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "最小显示区域宽度",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "最大显示区域宽度",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "最小显示区域高度",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "最大显示区域高度",
    // "Minimum value"
    minValue: "最小值",
    // "Maximum value"
    maxValue: "最大值",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "不区分大小写",
    // "Minimum length (in characters)"
    minLength: "最小长度",
    // "Allow digits"
    allowDigits: "允许的位数",
    // "Minimum count"
    minCount: "最小数量",
    // "Maximum count"
    maxCount: "最大数量",
    // "Regular expression"
    regex: "正则表达式",
    surveyvalidator: {
      // [Auto-translated] "Error message"
      text: "错误信息",
      // [Auto-translated] "Validation expression"
      expression: "验证表达式"
    },
    // "Total row header"
    totalText: "总文本",
    // "Aggregation method"
    totalType: "总类型",
    // "Total value expression"
    totalExpression: "总公式",
    // "Total value display format"
    totalDisplayStyle: "总显示风格",
    // "Currency"
    totalCurrency: "总currency",
    // "Formatted string"
    totalFormat: "总格式",
    // [Auto-translated] "Survey logo"
    logo: "调查标志",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "测量布局",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "限制答案长度",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "限制注释长度",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "评论区高度（以行为单位）",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "自动展开文本区域",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "允许用户调整文本区域的大小",
    // "Update input field values"
    textUpdateMode: "更新文本问题值",
    // [Auto-translated] "Input mask type"
    maskType: "输入掩码类型",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "将焦点放在第一个无效答案上",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "运行验证",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "验证失去焦点时的空字段",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "提交后重定向到外部链接",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "动态外部链接",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "用于显示用户是否已填写此调查的标记",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "“谢谢”页面标记",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "动态“谢谢”页面标记",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "加载调查模型时要显示的标记",
    // [Auto-translated] "Comment area text"
    commentText: "注释区文本",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "自动完成类型",
    // "Label for \"True\""
    labelTrue: "“真实”标签",
    // "Label for \"False\""
    labelFalse: "“虚假”标签",
    // "Show the Clear button"
    allowClear: "显示“清除”按钮",
    // [Auto-translated] "Search Mode"
    searchMode: "搜索模式",
    // [Auto-translated] "Display format"
    displayStyle: "显示格式",
    // [Auto-translated] "Formatted string"
    format: "带格式的字符串",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "最大小数位数",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "最小小数位数",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "显示分组分隔符",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "启用多个文件上传",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "预览上传的图片",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "接受的文件类型",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "等待上传完成",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "确认文件删除",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "行详细信息对齐方式",
    // [Auto-translated] "Minimum row count"
    minRowCount: "最小行数",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "最大行数",
    // "Confirm row removal"
    confirmDelete: "确认删除行",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "确认消息",
    // [Auto-translated] "Initial number of entries"
    panelCount: "初始条目数",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "最少参赛作品数量",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "最大条目数",
    // [Auto-translated] "Initial entry state"
    panelsState: "初始进入状态",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "“上一个条目”按钮文本",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "“下一个条目”按钮文本",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "“删除条目”按钮对齐方式",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "如果问题没有行，则隐藏问题",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "如果没有行，则隐藏列",
    // [Auto-translated] "Custom rating values"
    rateValues: "自定义评分值",
    // [Auto-translated] "Rating count"
    rateCount: "评分计数",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "评级配置",
    slider: {
      // [Auto-translated] "Min value"
      min: "最小值",
      // [Auto-translated] "Max value"
      max: "最大值",
      // [Auto-translated] "Step value"
      step: "步长值",
      // [Auto-translated] "Show scale labels"
      showLabels: "显示刻度标签",
      // [Auto-translated] "Show tooltips"
      tooltipVisibilityPG: "显示工具提示",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "允许 Thumb Crossing",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "自动生成的标签数量",
      // [Auto-translated] "Min value expression"
      minValueExpression: "最小值表达式",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "最大值表达式",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "刻度标签配置",
      // [Auto-translated] "Slider type"
      sliderType: "滑块类型",
      // [Auto-translated] "Min range length"
      minRangeLength: "最小范围长度",
      // [Auto-translated] "Max range length"
      maxRangeLength: "最大范围长度",
      // [Auto-translated] "Custom labels"
      customLabels: "自定义标签",
      // [Auto-translated] "Label format"
      labelFormat: "标签格式",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "工具提示格式"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "图像高度",
      // [Auto-translated] "Image width"
      imageWidth: "图像宽度"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "如果没有选择，则隐藏问题",
    // "Minimum width"
    minWidth: "最小宽度（以 CSS 接受的值为单位）",
    // "Maximum width"
    maxWidth: "最大宽度（以 CSS 接受的值为单位）",
    // "Width"
    width: "宽度（以 CSS 接受的值为单位）",
    // [Auto-translated] "Show column headers"
    showHeader: "显示列标题",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "显示水平滚动条",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "最小列宽",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "行标题宽度",
    // "Value to store when \"True\" is selected"
    valueTrue: "“真”值",
    // "Value to store when \"False\" is selected"
    valueFalse: "“假”值",
    // "\"Value is below minimum\" error message"
    minErrorText: "“值低于最小值”错误消息",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "“值超过最大值”错误消息",
    // "\"Empty comment\" error message"
    otherErrorText: "“空评论”错误消息",
    // "Error message for duplicate responses"
    keyDuplicationError: "“非唯一键值”错误消息",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "要选择的最少选项",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "可供选择的最大选择",
    // [Auto-translated] "Logo width"
    logoWidth: "徽标宽度",
    // [Auto-translated] "Logo height"
    logoHeight: "标志高度",
    // "Read-only"
    readOnly: "只读",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "在以下情况下禁用只读模式",
    // "\"No rows\" message"
    noRowsText: "“无行”消息",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "单独的特殊选择",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "复制以下问题的选项",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "要复制哪些选择选项",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "使用以下矩阵、列或面板问题中的值作为选项 ID",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "使用以下矩阵、列或面板问题中的值作为选择文本",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "在进度条中显示页面标题",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "在进度条中显示页码",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "添加注释框",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "注释框的占位符文本",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "将标签显示为极值",
    // [Auto-translated] "Row order"
    rowOrder: "行顺序",
    // [Auto-translated] "Column layout"
    columnsLayout: "列布局",
    // [Auto-translated] "Nested column count"
    columnColCount: "嵌套列计数",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "正确答案",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "默认值",
    // [Auto-translated] "Cell Texts"
    cells: "单元格文本",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "选择文件或粘贴文件链接...",
    // "Prevent duplicate responses in the following column"
    keyName: "键列",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "如果出现以下情况，则使该选项可见",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "如果出现以下情况，则使该选项可选"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "如果出现以下情况，则使行可见",
      // [Auto-translated] "Make the row editable if"
      enableIf: "如果出现以下情况，则使行可编辑"
    },
    imageitemvalue: {
      // "Alt text"
      text: "可选文字"
    },
    // [Auto-translated] "Logo alignment"
    logoPosition: "徽标对齐",
    // [Auto-translated] "Add logo..."
    addLogo: "添加徽标...",
    // [Auto-translated] "Change logo..."
    changeLogo: "更改徽标...",
    logoPositions: {
      // [Auto-translated] "Remove logo"
      none: "删除徽标",
      // [Auto-translated] "Left"
      left: "左",
      // [Auto-translated] "Right"
      right: "右",
      // [Auto-translated] "On the top"
      top: "在顶部",
      // [Auto-translated] "In the bottom"
      bottom: "在底部"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "预览模式",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "启用网格布局",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "网格列",
    // [Auto-translated] "Mask settings"
    maskSettings: "蒙版设置",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "行详细信息错误消息对齐方式",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "面板布局"
      },
      // "General"
      general: "一般",
      // "Options"
      fileOptions: "选项",
      // "HTML Editor"
      html: "HTML 编辑器",
      // "Columns"
      columns: "设置列",
      // "Rows"
      rows: "设置行",
      // "Choice Options"
      choices: "设置选项",
      // [Auto-translated] "Items"
      items: "项目",
      // "Visible If"
      visibleIf: "设置可见条件",
      // "Editable If"
      enableIf: "设置有效条件",
      // [Auto-translated] "Required If"
      requiredIf: "如果",
      // "Rating Values"
      rateValues: "设置评分值",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "滑块设置",
      // "Choices from a Web Service"
      choicesByUrl: "通过 URL 导入选项",
      // "Default Choices"
      matrixChoices: "默认选项",
      // "Text Inputs"
      multipleTextItems: "文本输入",
      // [Auto-translated] "Numbering"
      numbering: "编号",
      // "Validators"
      validators: "校验规则",
      // "Navigation"
      navigation: "导航",
      // "Question Settings"
      question: "问题",
      // [Auto-translated] "Pages"
      pages: "页面",
      // "Quiz Mode"
      timer: "问卷计时器",
      // [Auto-translated] "Calculated Values"
      calculatedValues: "计算值",
      // [Auto-translated] "Triggers"
      triggers: "触发器",
      // [Auto-translated] "Title template"
      templateTitle: "标题模板",
      // [Auto-translated] "Totals"
      totals: "总数",
      // "Conditions"
      logic: "逻辑",
      // [Auto-translated] "Input Mask Settings"
      mask: "输入掩码设置",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "面板布局",
        // [Auto-translated] "Layout"
        question: "布局",
        // [Auto-translated] "Layout"
        base: "布局"
      },
      // [Auto-translated] "Data"
      data: "数据",
      // [Auto-translated] "Validation"
      validation: "验证",
      // [Auto-translated] "Individual Cell Texts"
      cells: "单个单元格文本",
      // [Auto-translated] "\"Thank You\" Page"
      showOnCompleted: "“谢谢”页面",
      // [Auto-translated] "Logo in the Survey Header"
      logo: "调查标题中的徽标",
      // [Auto-translated] "Slider"
      slider: "滑 块",
      // [Auto-translated] "Expression"
      expression: "表达",
      // [Auto-translated] "Question Settings"
      questionSettings: "问题设置",
      // "Header"
      header: "页眉",
      // "Background"
      background: "背景",
      // "Appearance"
      appearance: "外观",
      // [Auto-translated] "Accent colors"
      accentColors: "强调色",
      // [Auto-translated] "Surface background"
      surfaceBackground: "表面背景",
      // [Auto-translated] "Scaling"
      scaling: "缩放",
      // [Auto-translated] "Others"
      others: "别人"
    },
    // "Edit property '{0}'"
    editProperty: "编辑属性: '{0}'",
    // "Items"
    items: "[ 项目数量: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "在以下情况下使选择可见",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "在以下情况下选择选项",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "在以下情况下使列可见",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "在以下情况下使行可见",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "增加内缩进",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "使用最后一个条目中的答案作为默认值",
    // "Please enter a value."
    enterNewValue: "请设定值",
    // "There are no questions in the survey."
    noquestions: "问卷中还没有创建任何问题",
    // "Please create a trigger"
    createtrigger: "请创建触发器",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "按回车键编辑",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "按回车键编辑项目，按删除按钮删除项目，按 Alt 加向上箭头或向下箭头移动项目",
    // "On "
    triggerOn: "当 ",
    // "Make pages visible"
    triggerMakePagesVisible: "使页面可见:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "使问题可见:",
    // "Complete the survey if successful."
    triggerCompleteText: "如果满足条件，则完成问卷",
    // "The trigger is not set"
    triggerNotSet: "触发器尚未设置",
    // "Run if"
    triggerRunIf: "满足下列条件时执行",
    // "Change value of: "
    triggerSetToName: "修改下列问题值: ",
    // "Copy value from: "
    triggerFromName: "复制值: ",
    // "Run this Expression"
    triggerRunExpression: "运行公式:",
    // "to: "
    triggerSetValue: "修改为: ",
    // [Auto-translated] "Go to the question"
    triggerGotoName: "转到问题",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "在问卷提交结果中不要包含该变量",
    // [Auto-translated] "Please enter a valid expression"
    triggerRunExpressionEmpty: "请输入有效的表达式",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "在此处键入表达式...",
    // [Auto-translated] "No file chosen"
    noFile: "未选择文件",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "清除隐藏的问题值",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "在以下属性中存储值",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "启用键入时搜索",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "隐藏所选项目",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "选择时折叠下拉列表",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "单元格内的垂直对齐",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "替代行颜色",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "在以下情况下使列可见",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "在以下情况下使行可见",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "注释框的占位符文本",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "本地文件的占位符文本",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "相机的占位符文本",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "本地文件或相机的占位符文本",
    // [Auto-translated] "Rating icon"
    rateType: "评级图标",
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
    imageHeight_placeholder: "自动",
    // "auto"
    imageWidth_placeholder: "自动",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "例：100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "主题",
      // [Auto-translated] "Question appearance"
      isPanelless: "问题外观",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "背景和角半径",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "背景和角半径",
      // [Auto-translated] "Accent color"
      primaryColor: "强调色",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "面板和问题框的不透明��",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "输入元素不透明度",
      // [Auto-translated] "Survey font size"
      fontSize: "调查字体大小",
      // [Auto-translated] "Survey scale factor"
      scale: "调查比例因子",
      // [Auto-translated] "Corner radius"
      cornerRadius: "拐角半径",
      // [Auto-translated] "Advanced mode"
      advancedMode: "高级模式",
      // [Auto-translated] "Title font"
      pageTitle: "标题字体",
      // [Auto-translated] "Description font"
      pageDescription: "描述字体",
      // [Auto-translated] "Title font"
      questionTitle: "标题字体",
      // [Auto-translated] "Description font"
      questionDescription: "描述字体",
      // [Auto-translated] "Font"
      editorFont: "字体",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "不透明度", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "调查字体系列",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "背景颜色",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "强调背景色",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "强调前景色",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "错误消息颜色",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "阴影效果",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "阴影效果",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "颜色"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "视图",
      // [Auto-translated] "Logo alignment"
      logoPosition: "徽标对齐",
      // [Auto-translated] "Survey title font"
      surveyTitle: "调查标题字体",
      // [Auto-translated] "Survey description font"
      surveyDescription: "调查描述字体",
      // [Auto-translated] "Survey title font"
      headerTitle: "调查标题字体",
      // [Auto-translated] "Survey description font"
      headerDescription: "调查描述字体",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "内容区宽度",
      // [Auto-translated] "Text width"
      textAreaWidth: "文本宽度",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "背景颜色",
      // [Auto-translated] "Background image"
      backgroundImage: "背景图片",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "不透明度",
      // [Auto-translated] "Overlap"
      overlapEnabled: "重叠",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "徽标对齐",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "调查标题对齐",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "调查描述对齐"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "真",
    // [Auto-translated] "false"
    "false": "假",
    // [Auto-translated] "Local file"
    file: "本地文件",
    // [Auto-translated] "Camera"
    camera: "照相机",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "本地文件或摄像机",
    // "Inherit"
    inherit: "继承",
    // "Visible"
    show: "显示",
    // "Hidden"
    hide: "隐藏",
    // "Inherit"
    default: "默认",
    // "Initial"
    initial: "初始化",
    // "Random"
    random: "随机",
    // "Collapsed"
    collapsed: "折叠",
    // "Expanded"
    expanded: "扩展",
    // "None"
    none: "无",
    // "Ascending"
    asc: "升序",
    // "Descending"
    desc: "降序",
    // "Indeterminate"
    indeterminate: "indeterminate",
    // [Auto-translated] "Selected"
    selected: "选择",
    // [Auto-translated] "Unselected"
    unselected: "未选中",
    // [Auto-translated] "decimal"
    decimal: "十进制",
    // [Auto-translated] "currency"
    currency: "货币",
    // [Auto-translated] "percent"
    percent: "百分之",
    // "First panel is expanded"
    firstExpanded: "firstExpanded",
    // "Hide question numbers"
    off: "关闭",
    // "List"
    list: "列表",
    // [Auto-translated] "Carousel"
    carousel: "旋转 木马",
    // [Auto-translated] "Tabs"
    tab: "制表符",
    // "Panel navigator + Progress bar at the top"
    progressTop: "progressTop",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "progressBottom",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "progressTopBottom",
    // "Horizontal"
    horizontal: "水平",
    // "Vertical"
    vertical: "垂直",
    // "Top"
    top: "顶",
    // "Bottom"
    bottom: "底",
    // "Top and bottom"
    topBottom: "顶和底",
    // [Auto-translated] "Both"
    both: "双",
    // "Left"
    left: "左",
    // [Auto-translated] "Right"
    right: "右",
    // [Auto-translated] "Center"
    center: "中心",
    // [Auto-translated] "Left and right"
    leftRight: "左和右",
    // [Auto-translated] "Middle"
    middle: "中间",
    // [Auto-translated] "color"
    color: "颜色",
    // [Auto-translated] "date"
    date: "日期",
    // [Auto-translated] "datetime"
    datetime: "日期时间",
    // [Auto-translated] "datetime-local"
    "datetime-local": "日期时间-本地",
    // [Auto-translated] "email"
    email: "电子邮件",
    // [Auto-translated] "month"
    month: "月",
    // [Auto-translated] "number"
    number: "数",
    // [Auto-translated] "password"
    password: "密码",
    // [Auto-translated] "range"
    range: "范围",
    // [Auto-translated] "tel"
    tel: "电话",
    // [Auto-translated] "text"
    text: "发短信",
    // [Auto-translated] "time"
    time: "时间",
    // [Auto-translated] "url"
    url: "网址",
    // [Auto-translated] "week"
    week: "周",
    // "Hidden"
    hidden: "隐藏",
    // "Editable"
    edit: "编辑",
    // "Read-only"
    display: "仅显示",
    // [Auto-translated] "Contain"
    contain: "包含",
    // [Auto-translated] "Cover"
    cover: "盖",
    // [Auto-translated] "Fill"
    fill: "填补",
    // [Auto-translated] "Next"
    next: "下一个",
    // [Auto-translated] "Last"
    last: "最后",
    // "Upon survey completion"
    onComplete: "完成时",
    // "When question gets hidden"
    onHidden: "隐藏中",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "当问题或其面板/页面被隐藏时",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "从不"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "从不"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "单选按钮",
    inputType: {
      // [Auto-translated] "Color"
      color: "颜色",
      // [Auto-translated] "Date"
      date: "日期",
      // [Auto-translated] "Date and Time"
      "datetime-local": "日期和时间",
      // [Auto-translated] "Email"
      email: "电子邮件",
      // [Auto-translated] "Month"
      month: "月",
      // [Auto-translated] "Number"
      number: "数",
      // [Auto-translated] "Password"
      password: "密码",
      // [Auto-translated] "Range"
      range: "范围",
      // [Auto-translated] "Phone Number"
      tel: "电话号码",
      // [Auto-translated] "Text"
      text: "发短信",
      // [Auto-translated] "Time"
      time: "时间",
      // [Auto-translated] "URL"
      url: "网址",
      // [Auto-translated] "Week"
      week: "周"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "单值",
      // [Auto-translated] "Range"
      range: "范围"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "全名",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "前缀",
      // [Auto-translated] "First Name"
      "given-name": "名字",
      // [Auto-translated] "Middle Name"
      "additional-name": "中间名",
      // [Auto-translated] "Last Name"
      "family-name": "姓",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "后缀",
      // [Auto-translated] "Nickname"
      nickname: "昵称",
      // [Auto-translated] "Job Title"
      "organization-title": "职称",
      // [Auto-translated] "User Name"
      username: "用户名",
      // [Auto-translated] "New Password"
      "new-password": "新密码",
      // [Auto-translated] "Current Password"
      "current-password": "当前密码",
      // [Auto-translated] "Organization Name"
      organization: "组织名称",
      // [Auto-translated] "Full Street Address"
      "street-address": "全街地址",
      // [Auto-translated] "Address Line 1"
      "address-line1": "地址行 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "地址行 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "地址行 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "4 级地址",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "3 级地址",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "2 级地址",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "1 级地址",
      // [Auto-translated] "Country Code"
      country: "国家代码",
      // [Auto-translated] "Country Name"
      "country-name": "国家/地区名称",
      // [Auto-translated] "Postal Code"
      "postal-code": "邮政编码",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "持卡人姓名",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "持卡人名字",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "持卡人中间名",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "持卡人姓氏",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "信用卡号",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "有效期",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "到期月份",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "到期年份",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "卡安全码",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "信用卡类型",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "交易货币",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "交易金额",
      // [Auto-translated] "Preferred Language"
      language: "首选语言",
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
      url: "网站 URL",
      // [Auto-translated] "Profile Photo"
      photo: "个人头像",
      // [Auto-translated] "Telephone Number"
      tel: "电话号码",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "电话的国家代码",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "全国电话号码",
      // [Auto-translated] "Area Code"
      "tel-area-code": "区号",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "本地电话号码",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "本地电话前缀",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "本地电话后缀",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "电话分机",
      // [Auto-translated] "Email Address"
      email: "电子邮件地址",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "即时通讯协议"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "没有",
      // [Auto-translated] "Pattern"
      pattern: "模式",
      // [Auto-translated] "Numeric"
      numeric: "数值的",
      // [Auto-translated] "Date and Time"
      datetime: "日期和时间",
      // [Auto-translated] "Currency"
      currency: "货币"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "自动",
      // [Auto-translated] "Left"
      left: "左",
      // [Auto-translated] "Right"
      right: "右"
    },
    // "All"
    all: "全部",
    // "Page"
    page: "页",
    // "Survey"
    survey: "问卷",
    // "When switching to the next page"
    onNextPage: "下一页时",
    // "After an answer is changed"
    onValueChanged: "值变动时",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "更改答案之前",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "原始结构",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "在一页上显示所有问题",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "每页显示一个问题",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "每页显示单个输入字段"
    },
    // [Auto-translated] "No preview"
    noPreview: "无预览",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "显示所有问题",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "仅显示已回答的问题",
    // [Auto-translated] "Show all questions"
    allQuestions: "显示所有问题",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "仅显示已回答的问题",
    // [Auto-translated] "Completed pages"
    pages: "已完成的页面",
    // [Auto-translated] "Answered questions"
    questions: "已回答的问题",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "回答必填问题",
    // [Auto-translated] "Valid answers"
    correctQuestions: "有效答案",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "已完成的页面（按钮 UI）",
    // [Auto-translated] "Under the input field"
    underInput: "在输入字段下",
    // [Auto-translated] "Under the question title"
    underTitle: "在问题标题下",
    // [Auto-translated] "On lost focus"
    onBlur: "关于失去焦点",
    // [Auto-translated] "While typing"
    onTyping: "打字时",
    // [Auto-translated] "Under the row"
    underRow: "在行下",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "在行下，仅显示一个部分",
    // "Auto"
    auto: "自动",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "隐藏"
    },
    timerInfoMode: {
      // "Both"
      combined: "双"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "基于矩阵布局"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "锁",
      // [Auto-translated] "Collapse all"
      collapsed: "全部折叠",
      // [Auto-translated] "Expand all"
      expanded: "全部展开",
      // [Auto-translated] "First expanded"
      firstExpanded: "首次扩展"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "静态的",
      // [Auto-translated] "Responsive"
      responsive: "响应"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "图像",
      // [Auto-translated] "Video"
      video: "视频",
      // [Auto-translated] "YouTube"
      youtube: "优酷"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "按钮",
      // [Auto-translated] "Dropdown"
      dropdown: "下拉列表"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "违约",
      // [Auto-translated] "Scale"
      scale: "规模"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "单色",
      // [Auto-translated] "Colored"
      colored: "彩色"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "自动生成",
      // [Auto-translated] "Manual"
      "false": "手动"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "标签",
      // [Auto-translated] "Stars"
      stars: "星星",
      // [Auto-translated] "Smileys"
      smileys: "笑脸"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "锁"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "自动编号",
      // [Auto-translated] "Auto-numbering"
      on: "自动编号",
      // [Auto-translated] "Reset on each page"
      onPage: "在每个页面上重置",
      // [Auto-translated] "Reset on each panel"
      onpanel: "在每个面板上重置",
      // [Auto-translated] "Reset on each panel"
      onPanel: "在每个面板上重置",
      // [Auto-translated] "Recursive numbering"
      recursive: "递归编号",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "在整个调查中继续",
      // [Auto-translated] "No numbering"
      off: "无编号"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "在问题标题下",
      // [Auto-translated] "Under the input field"
      underInput: "在输入字段下"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "在选项旁边",
      // [Auto-translated] "Above choices"
      vertical: "以上选择"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "十进制",
      // [Auto-translated] "Currency"
      currency: "货币",
      // [Auto-translated] "Percentage"
      percent: "百分比",
      // [Auto-translated] "Date"
      date: "日期"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "十进制",
      // [Auto-translated] "Currency"
      currency: "货币",
      // [Auto-translated] "Percentage"
      percent: "百分比",
      // [Auto-translated] "Date"
      date: "日期"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "源语言"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "源语言"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "返回页首",
      // [Auto-translated] "Bottom"
      bottom: "底",
      // [Auto-translated] "Top and bottom"
      topbottom: "顶部和底部",
      // [Auto-translated] "Above the header"
      aboveheader: "标题上方",
      // [Auto-translated] "Below the header"
      belowheader: "标题下方",
      // [Auto-translated] "Hidden"
      off: "隐藏"
    },
    // [Auto-translated] "Sum"
    sum: "和",
    // [Auto-translated] "Count"
    count: "计数",
    // [Auto-translated] "Min"
    min: "最小值",
    // [Auto-translated] "Max"
    max: "麦克斯",
    // [Auto-translated] "Avg"
    avg: "平均",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "包含",
      // [Auto-translated] "Starts with"
      startsWith: "开头为"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "自动",
      // [Auto-translated] "Cover"
      cover: "盖",
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
      scroll: "滚动"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "基本",
      // [Auto-translated] "Advanced"
      advanced: "高深"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "与调查相同",
      // [Auto-translated] "Same as container"
      container: "与容器相同"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "没有",
      // [Auto-translated] "Accent color"
      accentColor: "强调色",
      // [Auto-translated] "Custom"
      custom: "习惯"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "光",
      // [Auto-translated] "Dark"
      dark: "黑暗"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "违约",
      // [Auto-translated] "Without Panels"
      "true": "不带面板"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "与调查相同",
      // [Auto-translated] "Same as container"
      container: "与容器相同"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "为空",
    // "Not empty"
    notempty: "不为空",
    // "Equals"
    equal: "等于",
    // "Does not equal"
    notequal: "不等于",
    // "Contains"
    contains: "包含",
    // "Does not contain"
    notcontains: "不包含",
    // "Any of"
    anyof: "任意",
    // "All of"
    allof: "全部",
    // "Greater than"
    greater: "大于",
    // "Less than"
    less: "小于",
    // "Greater than or equal to"
    greaterorequal: "大于等于",
    // "Less than or equal to"
    lessorequal: "小于等于",
    // [Auto-translated] "and"
    and: "和",
    // [Auto-translated] "or"
    or: "或"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "使用 Angular 时",
    // "Use jQuery version"
    jquery: "使用 JQuery 时",
    // "Use Knockout version"
    knockout: "使用 Knockout 时",
    // "Use React version"
    react: "使用 React 时",
    // "Use Vue version"
    vue: "使用 Vue 时",
    // "For bootstrap framework"
    bootstrap: "使用 Bootstrap 时",
    // [Auto-translated] "Modern theme"
    modern: "现代主题",
    // [Auto-translated] "Default theme"
    default: "默认主题",
    // [Auto-translated] "Orange theme"
    orange: "橙色主题",
    // [Auto-translated] "Darkblue theme"
    darkblue: "深蓝色主题",
    // [Auto-translated] "Darkrose theme"
    darkrose: "“暗玫瑰”主题",
    // [Auto-translated] "Stone theme"
    stone: "“石头”主题",
    // [Auto-translated] "Winter theme"
    winter: "“冬季”主题",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "“冬日之石”主题",
    // "Show survey on a page"
    showOnPage: "嵌入页面显示",
    // "Show survey in a window"
    showInWindow: "使用单独的问卷窗口",
    // "Load Survey JSON from server"
    loadFromServer: "从服务器加载问卷 JSON 数据",
    // "Scripts and styles"
    titleScript: "脚本和样式",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "选择测试页",
    // "Show invisible elements"
    showInvisibleElements: "显示隐藏元件",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "隐藏不可见元素",
    // [Auto-translated] "Previous"
    prevPage: "以前",
    // [Auto-translated] "Next"
    nextPage: "下一个"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "数量检查",
    // "Email"
    emailvalidator: "Email",
    // "Expression"
    expressionvalidator: "公式",
    // "Number"
    numericvalidator: "数字",
    // "Regex"
    regexvalidator: "正则表达式",
    // "Text"
    textvalidator: "文本"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "完成问卷",
    // "Set answer"
    setvaluetrigger: "设置问题值",
    // "Copy answer"
    copyvaluetrigger: "复制值",
    // [Auto-translated] "Skip to question"
    skiptrigger: "跳至问题",
    // "Run expression"
    runexpressiontrigger: "运行公式",
    // "change visibility (deprecated)"
    visibletrigger: "修改可见性"
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
      name: "受访者不可见的面板 ID。",
      // [Auto-translated] "Type a panel subtitle."
      description: "键入面板字幕。",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "使用魔棒图标设置确定面板可见性的条件规则。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "使用魔棒图标设置禁用面板只读模式的条件规则。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "适用于此面板中的所有问题。当设置为“隐藏”时，它还会隐藏问题描述。如果要覆盖此设置，请为各个问题定义标题对齐规则。“继承”选项应用页面级别（如果设置）或调查级别设置（默认为“顶部”）。",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "当问题标题与问题框左侧对齐时，为问题标题设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "设置与面板中所有问题相关的错误消息的位置。“继承”选项应用页面级别（如果已设置）或调查级别设置。",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "保留问题的原始顺序或随机化问题。“继承”选项应用页面级（如果已设置）或调查级设置。",
      // "Repositions the panel to the end of a selected page."
      page: "将面板重新定位到所选页面的末尾。",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "在面板内容和面板框的左边框之间添加空格或边距。",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "取消选择以将面板与上一个问题或面板显示在一行中。如果面板是窗体中的第一个元素，则该设置不适用。",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "从中选择：“展开” - 面板完整显示，可以折叠;“已折叠” - 面板仅显示标题和描述，可以展开;“已锁定” - 面板完整显示，无法折叠。",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "设置面板的宽度，与同一条线中的其他测量元素成比例。接受 CSS 值（px、%、in、pt 等）。",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "为嵌套在此面板中的问题分配编号。",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "指定此面板在网格布局中跨越的列数。",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "此表允许您配置面板中的每个网格列。它根据行中的最大元素数自动设置每列的宽度百分比。要自定义网格布局，请手动调整这些值并定义每列中所有问题的标题宽度。"
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "受访者不可见的面板 ID。",
      // "Type a panel subtitle."
      description: "键入面板字幕。",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "使用魔棒图标设置确定面板可见性的条件规则。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "使用魔棒图标设置禁用面板只读模式的条件规则。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "适用于此面板中的所有问题。如果要覆盖此设置，请为单个问题定义标题对齐规则。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "当问题标题与问题框的左侧对齐时，为问题标题设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "设置与面板中所有问题相关的错误消息的位置。“继承”选项应用页面级别（如果已设置）或调查级别设置。",
      // "Repositions the panel to the end of a selected page."
      page: "将面板重新定位到所选页面的末尾。",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "在面板内容和面板框的左边框之间添加空间或边距。",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "取消选择以将面板与上一个问题或面板显示在一行中。如果面板是窗体中的第一个元素，则该设置不适用。",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "从中选择：“展开” - 面板完整显示，可以折叠;“已折叠” - 面板仅显示标题和描述，可以展开;“已锁定” - 面板完整显示，无法折叠。",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "设置面板的宽度，使其与同一行中的其他测量图元成比例。接受 CSS 值（px、%、in、pt 等）。",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "键入动态面板标题的模板。使用 {panelIndex} 作为面板的常规位置，使用 {visiblePanelIndex} 作为其在可见面板中的顺序。将这些占位符插入到图案中以添加自动编号。",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "键入选项卡标题的模板。使用 {panelIndex} 表示面板的大致位置，使用 {visiblePanelIndex} 表示其在可见面板中的顺序。将这些占位符插入到图案中以添加自动编号。",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "选项卡标题的回退文本，当选项卡标题模式未生成有意义的值时应用。",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "此设置允许您控制动态面板中各个面板的可见性。使用“{panel}”占位符在表达式中引用当前面板。",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "此面板中的所有问题都会自动继承此设置。如果要覆盖此设置，请为单个问题定义标题对齐规则。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“在面板标题下”）。",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "定义新添加的面板的位置。默认情况下，新面板将添加到末尾。选择“下一步”以在当前面板之后插入新面板。",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "复制上一个条目的答案，并将它们分配给下一个添加的条目。",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "引用问题名称以要求用户在每个面板中为此问题提供唯一的答案。",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "在删除条目之前触发确认提示。"
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "在删除行之前触发确认提示。",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "在向矩阵添加新行时自动展开详细信息部分。"
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "复制最后一行的答案，并将其分配给下一个添加的动态行。",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "此设置允许您根据表达式分配默认答案值。表达式可以包括基本计算 - '{q1_id} + {q2_id}'、布尔表达式，例如 '{age} > 60'，以及函数：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。此表达式确定的值用作初始默认值，可由响应者的手动输入覆盖。",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "使用魔杖图标设置条件规则，该规则确定何时将受访者的输入重置为基于“默认值表达式”或“设置值表达式”的值，或重置为“默认答案”值（如果设置了其中任何一个）。",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "使用魔杖图标设置条件规则，该规则确定何时运行“设置值表达式”，并将结果值动态分配为响应。",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "指定一个表达式，该表达式定义在满足“如果设置值”规则中的条件时要设置的值。表达式可以包括基本计算 - '{q1_id} + {q2_id}'、布尔表达式，例如 '{age} > 60'，以及函数：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。由此表达式确定的值可以被受访者的手动输入覆盖。",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator 允许您手动调整表单元素的内联宽度以控制布局。如果这没有产生所需的结果，您可以启用网格布局，该布局使用基于列的系统构建表单元素。要配置布局列，请选择一个页面或面板，然后使用 “Question Settings” → “Grid columns” 表格。要调整问题跨越的列数，请选择它并在 “Layout” → “Column span” 字段中设置所需的值。",
    question: {
      // "A question ID that is not visible to respondents."
      name: "受访者不可见的问题 ID。",
      // "Type a question subtitle."
      description: "键入问题副标题。",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "使用魔杖图标设置确定问题可见性的条件规则。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "使用魔杖图标设置条件规则，以禁用问题的只读模式。",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "使用魔杖图标设置条件规则，除非问题得到答案，否则阻止调查推进或提交。",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "取消选择以将问题与上一个问题或面板显示在一行中。如果问题是表单中的第一个元素，则该设置不适用。",
      // "Repositions the question to the end of a selected page."
      page: "将问题重新定位到所选页面的末尾。",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "从以下选项中选择：“展开” - 问题框完整显示，可以折叠;“已折叠” - 问题框仅显示标题和描述，可以展开;“已锁定” - 问题框完整显示，无法折叠。",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "覆盖在面板、页面或调查级别上定义的标题对齐规则。“继承”选项将应用任何更高级别的设置（如果已设置）或调查级别的设置（默认为“顶部”）。",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "“继承”选项应用调查级别设置（默认为“在问题标题下”）。",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。“继承”选项将应用调查级别设置（默认为“顶部”）。",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "在问题内容和问题框的左边框之间添加空格或边距。",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "设置问题的宽度，使其与同一行中的其他调查元素成比例。接受 CSS 值（px、%、in、pt 等）。",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "从中选择：“失焦时” - 当输入字段失去焦点时，该值会更新;“键入时” - 当用户键入时，该值会实时更新。“继承”选项将应用调查级别设置（默认为“失去焦点时”）。",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "您可以使用任何 Web 服务作为多项选择题的数据源。要填充选项值，请输入提供数据的服务的 URL。",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "用于筛选下拉列表的比较操作。",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "选项选项中的长文本将自动生成换行符以适合下拉菜单。如果要剪裁文本，请取消选择。",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "指定此问题在网格布局中跨越多少列。"
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "使用魔杖图标定义问题值何时被视为有效。"
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "设置显示的签名区域和生成的图像的宽度。",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "设置显示的签名区域和生成的图像的高度。",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "选择是否希望签名区域填充问题框中的所有可用空间，同时保持默认的 3：2 纵横比。设置自定义宽度和高度值后，该设置将保留这些尺寸的纵横比。"
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "指定预览中上传图像的显示高度以及使用相机拍摄的图像的实际高度。在单个文件上传模式下，显示高度受预览区域限制;在多文件上传模式下，它受缩略图区域限制。",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "指定预览中上传图像的显示宽度以及使用相机拍摄的图像的实际宽度。在单个文件上传模式下，显示宽度受预览区域限制;在多文件上传模式下，它受缩略图区域限制。",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "尽可能显示已上传文件的缩略图预览。取消选择是否要显示文件图标。"
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "“自动”选项会根据提供的源 URL 自动确定适合的显示模式 - 图像、视频或 YouTube。"
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "覆盖最小和最大高度值。",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "覆盖最小和最大宽度值。",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "“值”用作条件规则中使用的项目 ID;“文本”将显示给受访者。",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "在“图像”和“视频”之间进行选择以设置媒体选择器的内容模式。如果选择“图像”，请确保提供的所有选项都是以下格式的图像文件：JPEG、GIF、PNG、APNG、SVG、BMP、ICO。同样，如果选择“视频”，请确保所有选项都是指向以下格式的视频文件的直接链接：MP4、MOV、WMV、FLV、AVI、MKV。请注意，视频选项不支持 YouTube 链接。"
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "此设置仅调整输入字段的大小，不会影响问题框的宽度。要限制接受的输入长度，请转到“验证”→“最大字符限制”。"
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "设置输入字段中显示的行数。如果输入占用更多行，则会出现滚动条。"
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "选择是否要阻止受访者填写您的调查。",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "设置进度条的位置。“自动”值在调查标题的上方或下方显示进度条。"
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "受访者不可见的列 ID。",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "为列启用后，受访者需要为此列中的每个问题提供唯一的回答。",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "设置输入字段中显示的行数。如果输入占用更多行，则会出现滚动条。",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "使用魔杖图标设置确定列可见性的条件规则。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "使用魔杖图标设置禁用列只读模式的条件规则。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "选中后，为每个选项创建一个单独的列。",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "在多列布局中排列选择选项。设置为 0 时，选项将显示在一行中。当设置为 -1 时，实际值将继承自父矩阵的“嵌套列计数”属性。"
    },
    slider: {
      // "The lowest number that users can select."
      min: "用户可以选择的最小数字。",
      // "The highest number that users can select."
      max: "用户可以选择的最大数字。",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "可选刻度值之间的间隔。例如，步长 5 将允许用户选择 0、5、10 等。",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "用户可以设置的滑块块之间的最小距离。",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "用户可以设置滑块滑块之间的最大距离。",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "指定要生成的刻度标签数量。值 -1 表示该数字是根据 最小值 和 最大值 自动计算的。",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "使用 '{0}' 作为实际值的占位符。",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "允许您定义特定值的自定义标签，并可选择为其分配相应的文本（例如，0 = “差”，100 = “优秀”）。",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "使用 '{0}' 作为实际值的占位符。",
      // "Allows users to move one thumb past the other."
      allowSwap: "允许用户将一个滑块移过另一个滑块。",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "显示一个按钮，用于清除选定的滑块值并将其设置为 undefined。",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "使用表达式动态定义滑块的最小值。支持基本计算（例如 '{q1_id} + {q2_id}'）、布尔逻辑（例如 '{age} > 60'），以及 'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等函数。",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "使用表达式动态定义滑块的最大值。支持基本计算（例如 '{q1_id} + {q2_id}'）、布尔逻辑（例如 '{age} > 60'），以及 'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等函数。"
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "将此选择设为独占。当用户选择时，它将自动取消选择问题中的所有其他选项。",
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "如果必须将正则表达式中的大写字母和小写字母视为等效字母，请选择此项。",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "从以下选项中选择： “静态” - 设置固定宽度;“响应式” - 使调查占据屏幕的整个宽度;“自动” - 根据所使用的问题类型应用两者中的任何一个。",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "为您的调查分配一个唯一的 Cookie 值。调查完成后，Cookie 将在受访者的浏览器中设置，以防止重复提交调查。",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "粘贴图像链接（无大小限制）或单击文件夹图标以浏览计算机中的文件（最大 64KB）。",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "以 CSS 单位（px、%、in、pt 等）设置徽标宽度。",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "以 CSS 单位（px、%、in、pt 等）设置徽标高度。",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "从以下选项中选择：“无” - 图像保持其原始大小;“包含” - 调整图像大小以适应其纵横比;“封面” - 图像填充整个框，同时保持其纵横比;“填充” - 拉伸图像以填充框，而不保持其纵横比。",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "选择是否希望调查在受访者回答了当前页面上的所有问题后自动前进到下一页。如果页面上的最后一个问题是开放式的或允许多个答案，则此功能将不适用。",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "选择是否希望在受访者回答所有问题后自动完成调查。",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "设置页面上导航按钮的可见性。",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "设置页面上导航按钮的位置。",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "启用仅包含所有问题或已回答问题的预览页面。",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "适用于调查中的所有问题。此设置可以被较低级别的标题对齐规则覆盖：面板、页面或问题。较低级别的设置将覆盖较高级别的设置。",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "一个符号或一系列符号，表示需要答案。",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "输入要开始编号的数字或字母。",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "选择是否希望每个页面上的第一个输入字段准备好进行文本输入。",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "保持问题的原始顺序或随机化问题。此设置的效果仅在“预览”选项卡中可见。",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "仅适用于文本输入问题。",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "仅供问题评论。",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "设置问题注释在文本区域中显示的行数。如果输入占用更多行，则会出现滚动条。",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "选择是否希望问题注释和长文本问题根据输入的文本长度自动增加高度。",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "仅适用于问题评论和长文本问题。",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "自定义变量用作表单计算中使用的中间变量或辅助变量。他们将受访者的输入作为源值。每个自定义变量都有一个唯一的名称和它所基于的表达式。",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "选择是否希望将表达式的计算值与调查结果一起保存。",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "触发器是基于表达式的事件或条件。一旦表达式被计算为“true”，触发器就会触发一个操作。这样的操作可以选择性地影响它的目标问题。",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "选择是否清除条件逻辑隐藏的问题的值以及何时清除。",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "从中选择：“失焦时” - 当输入字段失去焦点时，该值会更新;“键入时” - 当用户键入时，该值会实时更新。",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "左边的值用作条件规则中使用的列 ID，右边的值显示给受访者。",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "左边的值用作条件规则中使用的行 ID，右边的值显示给受访者。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "接受 CSS 值（px、%、in、pt 等）。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "接受 CSS 值（px、%、in、pt 等）。",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "仅当至少一列显示使用“聚合方法”或“总值表���式���设置的总计值时才可见。",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "设置与输入无效的单元格相关的错误消息的位置。“继承”选项应用“错误消息对齐”属性中的设置。",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "设置嵌套在详细信息部分中的问题的错误消息的位置。“Inherit” 选项应用“Error message alignment” 属性中的设置。",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "启用“防止重复响应”属性后，尝试提交重复条目的受访者将收到以下错误消息。",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "允许您根据表达式计算总值。表达式可以包括基本计算 （'{q1_id} + {q2_id}'）、布尔表达式 （'{age} > 60'） 和函数 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "如果指定的列包含相同的值，则调查将引发“非唯一键值”错误。",
    // "Type a subtitle."
    description: "键入副标题。",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "选择一种语言以开始创建调查。要添加翻译，请切换到新语言，然后在此处或“翻译”选项卡中翻译原始文本。",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "设置详细信息部分相对于行的位置。从中选择：“无” - 不添加扩展;“Under the row” - 矩阵的每一行下都放置一个行扩展;“在行下，仅显示一行扩展” - 仅在单行下显示扩展，其余行展开将折叠。",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "从以下选项中选择：“无” - 图像保持其原始大小;“包含” - 调整图像大小以适应其纵横比;“封面” - 图像填充整个框，同时保持其纵横比;“填充” - 拉伸图像以填充框，而不保持其纵横比。",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "在输入数据时逐渐增加输入字段的高度。覆盖“输入字段高度（以行为单位）”设置。",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "“继承”选项应用调查级别设置（默认为“启用”）。",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "调查自动前进到“谢谢”页面的时间间隔（以秒为单位）。设置为 0 时，计算在调查上花费的时间。",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "调查自动前进到下一页的时间间隔（以秒为单位）。隐藏“上一个”导航按钮。设置为 0 时，计算在当前页面上花费的时间。",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "启用此选项可在用户将焦点放在空输入字段上，然后离开该字段而不进行任何更改时触发验证。",
    page: {
      // "A page ID that is not visible to respondents."
      name: "受访者不可见的页面 ID。",
      // "Type a page subtitle."
      description: "键入页面副标题。",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "显示在进度条或目录 （TOC） 中的导航按钮上的说明。如果将此字段留空，则导航按钮将使用页面标题或页面名称。要启用进度条或 TOC，请转到“调查”→“导航”。",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "以秒为单位的时间间隔，在此时间间隔之后，调查将自动前进到下一页。",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "使用魔杖图标设置确定页面可见性的条件规则。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "使用魔杖图标设置禁用页面只读模式的条件规则。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "适用于本页中的所有问题。如果要覆盖此设置，请为单个问题或面板定义标题对齐规则。“继承”选项将应用调查级别设置（默认为“顶部”）。",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "当问题标题与问题框左侧对齐时，为问题标题设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。“继承”选项将应用调查级别设置（默认为“顶部”）。",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "保持问题的原始顺序或随机化问题。“继承”选项应用调查级别设置（默认为“原始”）。此设置的效果仅在“预览”选项卡中可见。",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "设置导航按钮在页面上的可见性。“继承”选项应用调查级别设置，默认为“可见”。",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "此表允许您配置页面上的每个网格列。它根据行中的最大元素数自动设置每列的宽度百分比。要自定义网格布局，请手动调整这些值并定义每列中所有问题的标题宽度。"
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "设置计时器在页面上的位置。",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "从以下选项中选择：“锁定” - 用户无法展开或折叠面板;“全部折叠” - 所有面板都以折叠状态启动;“全部展开” - 所有面板都以展开状态启动;“首先展开” - 最初只有第一个面板被展开。",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "在对象数组中输入共享属性名称，该数组包含要在选项列表中显示的图像或视频文件 URL。",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "左边的值用作条件规则中使用的项目 ID，右边的值显示给受访者。",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "键入要显示的用户友好标题。",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "确保用户在上传文件之前不会完成调查。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "接受 CSS 值（px、%、in、pt 等）。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "接受 CSS 值（px、%、in、pt 等）。",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "接受 CSS 值（px、%、in、pt 等）。",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "联接标识符是一个自定义键，您可以将其分配给多个问题以将它们链接在一起并同步其值。这些值将合并到单个数组或对象中，并使用键作为属性名称存储在测量结果中。",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "当问题值为空时，显示在 HTML 问题以及调查元素的动态标题和描述中的值。",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "在单选题和多选题类型中，每个选项都有一个 ID 和显示值。选中此设置后，将在 HTML 问题以及调查元素的动态标题和描述中显示显示值，而不是 ID 值。",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "选择是否清除条件逻辑隐藏的问题值以及何时清除。“继承”选项应用调查级别设置（默认为“完成调查后”）。",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "从以下选项中选择：“全部” - 复制所选问题中的所有选项;“Selected” - 仅动态复制选定的选项选项;“未选择” - 仅动态复制未选择的选项。默认情况下，如果在源问题中启用了“无”和“其他”选项，则会复制该选项。",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "在单选和多选问题类型中，每个选项都有一个 ID 和显示值。此设置指定哪个矩阵、列或面板问题应提供 ID。",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "在单选和多选问题类型中，每个选项都有一个 ID 和显示值。此设置指定哪个矩阵列或面板问题应提供显示文本。",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "如果下拉列表中没有所需的选项，则选择以允许受访者添加自己的选择。自定义选项将仅在当前浏览器会话期间临时存储。",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "选中后，用户可以在单独的注释框中包含其他输入。",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "在新行上显示每个特殊选项（“无”、“其他”、“全选”），即使使用多列布局也是如此。",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "指定服务数据集中目标对象数组所在的位置。如果 URL 已指向数组，则留空。",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "在对象数组中输入一个统一的属性名称，该数组包含要在选项列表中显示的值。",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "选择此选项可允许服务返回空响应或数组。",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "使用魔杖图标设置条件规则，以确定所有选项的可见性。",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "左边的值用作条件规则中使用的项目 ID，右边的值显示给受访者。",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "“自动”根据可用宽度在“按钮”和“下拉”模式之间进行选择。当宽度不足以显示按钮时，问题将显示一个下拉列表。"
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "允许您连接以不同格式生成结果的问题。当使用联接标识符将此类问题链接在一起时，此共享属性将存储选定的问题值。",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "选择是否要更新下拉菜单内容以匹配用户在输入字段中键入的搜索查询。",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "当受访者给出肯定答案时保存在调查结果中的值。",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "当受访者给出否定答案时保存在调查结果中的值。",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "不建议禁用此选项，因为它会覆盖预览图像，并使用户难以了解文件是否已上传。",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "触发提示，要求确认文件删除。",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "启用此选项可仅对选定的选项进行排名。用户将从选项列表中拖动所选项目，以在排名区域内对它们进行排序。",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "输入将在输入期间向受访者建议的选项列表。",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "该设置仅调整输入字段的大小，不会影响问题框的宽度。",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "为所有项目标签设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "选择如何在字段中对齐输入值。默认设置 “Auto” 如果应用了货币或数字掩码，则将输入值向右对齐，如果未应用，则向左对齐。",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "当图像无法在用户设备上显示时，出于辅助功能的目的，可作为替代。",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "定义当评级图标类型设置为“笑脸”时所选表情符号的颜色。选择：“默认” - 所选表情符号以默认调查颜色显示;“比例” - 所选的表情符号继承了评分量表的颜色。",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "受访者不可见的表达式 ID。",
      // "Type an expression subtitle."
      description: "键入表达式副标题。",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "表达式可以包括基本计算 （'{q1_id} + {q2_id}'）、条件 （'{age} > 60'） 和函数 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。"
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "选择此选项可将“其他”选项值作为单独的属性存储在调查结果中。",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "使用 {0} 作为实际值的占位符。",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "有关详细信息，请参阅 [accept]（https://www.w3schools.com/tags/att_input_accept.asp） 属性说明。",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "在多列布局中排列选择选项。设置为 0 时，选项将显示在一行中。仅适用于将“单元格输入类型”设置为单选按钮组或复选框的列。",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "选择用户浏览器可以检索的数据类型。此数据来自用户输入的过去值或预配置值（如果用户已保存用于自动完成）。",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "当“源类型”为“本地文件”或相机不可用时适用",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "当“源类型”为“相机”时适用。",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "当“源类型”为“本地文件或相机”时适用。",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "在多列布局中排列选项。当设置为 0 时，选项将显示在一行中。",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "选择是否要在调查结果中存储带有应用掩码的问题值。"
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "该模式可以包含字符串文字和以下占位符： '9' - 表示数字;“a” - 表示大写或小写字母;'#' - 表示数字或大写或小写字母。使用反斜杠“\\”转义字符。"
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "模式可以包含分隔符和以下占位符：“<br>m”- 月份编号。<br>'mm' - 月份编号，前导零表示个位数值。<br>'d' - 月份中的某一天。<br>'dd' - 月份的某一天，个位数值的前导为零。<br>'yy' - 年份的最后两位数字。<br>'yyyy' - 四位数年份。<br>“H” - 24 小时制的小时数。<br>“HH” - 24 小时制的小时数，个位数值的前导为零。<br>'h' - 以 12 小时为制的小时数。<br>'hh' - 12 小时制的小时数，个位数值的前导为零。<br>'MM' - 分钟。<br>'ss' - 秒。<br>“TT” - 大写 （AM/PM） 的 12 小时制周期。<br>'tt' - 小写 （am/pm） 的 12 小时制周期。"
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "用于将显示数字的小数部分与整数部分分开的符号。",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "用于将大数的数字分成三组的符号。",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "限制显示数字的小数点后要保留的位数。"
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "要在值之前显示的一个或多个符号。",
      // "One or several symbols to be displayed after the value."
      suffix: "要在值后显示的一个或多个符号。"
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "此设置仅适用于面板之外的问题。",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "设置一种补充颜色，用于突出显示关键调查元素。",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "调整面板和问题框相对于调查背景的透明度。",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "调整输入元素相对于调查背景的透明度。",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "设置所有矩形元素的圆角半径。如果要为输入元素或面板和问题框设置单独的角半径值，请启用高级模式。",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "设置调查的主要背景颜色。"
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "“与容器相同”选项会自动调整标题内容区域的宽度，以适应放置调查的 HTML 元素。",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "包含调查标题和描述的标题区域的宽度，以像素为单位。",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "启用后，调查的顶部将覆盖页眉的底部。",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "设置为 0 时，将自动计算高度以适应标题的内容。"
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "“与容器相同”选项会自动调整进度条区域的宽度，以适应放置调查的 HTML 元素。",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "当“调查布局”设置为“每页单个输入字段”时使用。在此布局中，矩阵被拆分，以便每个输入字段都显示在单独的页面上。使用 {rowIndex} 占位符插入自动编号，使用 {rowTitle} 或 {rowName} 引用行的标题或 ID，使用 {row.columnid} 包含特定矩阵列的值。"
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "标题",
      // "Leave it empty, if it is the same as 'Name'"
      title: "如果与名字相同，请设置为空值"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "允许多项选择",
    // [Auto-translated] "Show image and video captions"
    showLabel: "显示图像和视频字幕",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "交换“是”和“否”的顺序",
    // [Auto-translated] "Value"
    value: "价值",
    // [Auto-translated] "Tab alignment"
    tabAlign: "制表符对齐方式",
    // [Auto-translated] "File source type"
    sourceType: "文件源类型",
    // [Auto-translated] "Fit to container"
    fitToContainer: "适合容器",
    // [Auto-translated] "Set value expression"
    setValueExpression: "设置值表达式",
    // "Description"
    description: "说明", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "徽标合身",
    // [Auto-translated] "Pages"
    pages: "页面", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "问题", // Auto-generated string
    // "Triggers"
    triggers: "触发器",
    // [Auto-translated] "Custom variables"
    calculatedValues: "自定义变量",
    // [Auto-translated] "Survey id"
    surveyId: "调查编号", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "调查帖子编号", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "调查显示数据保存", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "问题描述对齐",
    // [Auto-translated] "Progress bar type"
    progressBarType: "进度条类型", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "显示目录 （TOC）",
    // [Auto-translated] "TOC alignment"
    tocLocation: "目录对齐",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "问题标题模式", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "测量宽度模式",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "显示品牌信息", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "在动态文本中使用显示值",
    // "Visible if"
    visibleIf: "条件可见", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "默认值表达式",
    // "Required if"
    requiredIf: "是否必选", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "如果出现以下情况，则重置值",
    // [Auto-translated] "Set value if"
    setValueIf: "设置值，如果",
    // "Validation rules"
    validators: "有效性",
    // [Auto-translated] "Bindings"
    bindings: "绑定", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "渲染为", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "附加原始项目", // Auto-generated string
    // "Choices"
    choices: "选项",
    // "Choices by url"
    choicesByUrl: "Url选项", // Auto-generated string
    // "Currency"
    currency: "货币", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "单元格提示", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "最大小数位数总数", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "最小小数位数总数", // Auto-generated string
    // "Columns"
    columns: "columns", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "细节元素", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "允许自适应操作", // Auto-generated string
    // "Default row value"
    defaultRowValue: "默认行值", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "自动展开新行详细信息",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "选项延迟加载已启用", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "选择延迟加载页面大小", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "输入字段组件", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "项目组件", // Auto-generated string
    // [Auto-translated] "Min"
    min: "最小值", // Auto-generated string
    // [Auto-translated] "Max"
    max: "麦克斯", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "最小值表达式", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "最大值表达式", // Auto-generated string
    // [Auto-translated] "Step"
    step: "步", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "自动建议的项目",
    // "Input field width (in characters)"
    inputSize: "inputSize",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "项目标签宽度",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "输入值对齐",
    // [Auto-translated] "Elements"
    elements: "元素", // Auto-generated string
    // [Auto-translated] "Content"
    content: "内容", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "导航标题", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "导航说明", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "长按", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "动态扩展输入字段",
    // [Auto-translated] "Enable resize handle"
    allowResize: "启用调整大小句柄",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "接受回车", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "显示模式",
    // [Auto-translated] "Rate type"
    rateType: "费率类型", // Auto-generated string
    // "Label"
    label: "标签", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "内容模式",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "图片和缩略图适合",
    // [Auto-translated] "Alt text"
    altText: "可选文字",
    // [Auto-translated] "Height"
    height: "高度", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "智能手机上的身高",
    // [Auto-translated] "Pen color"
    penColor: "笔颜色", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "背景色",
    // [Auto-translated] "Template elements"
    templateElements: "模板元素", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "算子", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "是可变的", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "运行表达式", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "显示标题", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "图标名称", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "图标大小", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "精度", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "矩阵拖动手柄区域", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "背景图片",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "背景图像适合", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "背景图像附件", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "背景不透明度", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "允许选择性排名",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "排名区域对齐",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "显示是否选择了所有选项的文本",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "排名区域的占位符文本",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "允许摄像头访问", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "评级图标颜色模式",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Smileys 配色方案",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "复制显示值", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "柱跨度",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "进度条区域宽度"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "高级模式",
    // "Page"
    pageTitle: "页面标题字体",
    // "Question box"
    questionTitle: "问题标题字体",
    // "Input element"
    editorPanel: "输入元素",
    // [Auto-translated] "Lines"
    lines: "线",
    // [Auto-translated] "Default"
    primaryDefaultColor: "违约",
    // [Auto-translated] "Hover"
    primaryDarkColor: "悬停",
    // [Auto-translated] "Selected"
    primaryLightColor: "选择",
    // [Auto-translated] "Background color"
    backgroundDimColor: "背景色",
    // "Corner radius"
    cornerRadius: "拐角半径",
    // [Auto-translated] "Default background"
    backcolor: "默认背景",
    // [Auto-translated] "Hover background"
    hovercolor: "悬停背景",
    // [Auto-translated] "Border decoration"
    borderDecoration: "边框装饰",
    // [Auto-translated] "Font color"
    fontColor: "字体颜色",
    // [Auto-translated] "Background color"
    backgroundColor: "背景颜色",
    // [Auto-translated] "Default color"
    primaryForecolor: "默认颜色",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "禁用颜色",
    // [Auto-translated] "Font"
    font: "字体",
    // [Auto-translated] "Darker"
    borderDefault: "暗",
    // [Auto-translated] "Lighter"
    borderLight: "打火机",
    // [Auto-translated] "Font family"
    fontFamily: "字体家族",
    // [Auto-translated] "Regular"
    fontWeightRegular: "定期",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "重",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "半粗体",
    // [Auto-translated] "Bold"
    fontWeightBold: "大胆",
    // [Auto-translated] "Color"
    color: "颜色",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "占位符颜色",
    // [Auto-translated] "Size"
    size: "大小",
    // [Auto-translated] "Opacity"
    opacity: "不透明度",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "添加阴影效果",
    // [Auto-translated] "Blur"
    boxShadowBlur: "模糊",
    // [Auto-translated] "Spread"
    boxShadowSpread: "传播",
    // [Auto-translated] "Drop"
    boxShadowDrop: "落",
    // [Auto-translated] "Inner"
    boxShadowInner: "内",
    names: {
      // [Auto-translated] "Default"
      default: "违约",
      // [Auto-translated] "Sharp"
      sharp: "锋利",
      // [Auto-translated] "Borderless"
      borderless: "无国界",
      // [Auto-translated] "Flat"
      flat: "平",
      // [Auto-translated] "Plain"
      plain: "平原",
      // [Auto-translated] "Double Border"
      doubleborder: "双边框",
      // [Auto-translated] "Layered"
      layered: "分层的",
      // [Auto-translated] "Solid"
      solid: "固体",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "反差"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "水鸭",
      // [Auto-translated] "Blue"
      blue: "蓝",
      // [Auto-translated] "Purple"
      purple: "紫色",
      // [Auto-translated] "Orchid"
      orchid: "兰花",
      // [Auto-translated] "Tulip"
      tulip: "郁金香",
      // [Auto-translated] "Brown"
      brown: "棕色",
      // [Auto-translated] "Green"
      green: "绿",
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
    fontScale: "字体",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "调查创建者 2020",
      // [Auto-translated] "Light"
      "default-light": "光",
      // [Auto-translated] "Dark"
      "default-dark": "黑暗",
      // [Auto-translated] "Contrast"
      "default-contrast": "反差"
    }
  }
};

setupLocale({ localeCode: "zh-cn", strings: simplifiedChineseTranslation });