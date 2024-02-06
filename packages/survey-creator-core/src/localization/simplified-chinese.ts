import { editorLocalization } from "survey-creator-core";

var simplifiedChineseTranslation = {
  // survey templates
  survey: {
    edit: "编辑",
    externalHelpLink: "教学小片",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "从左侧工具箱拖个问题",
    addLogicItem: "创建规则以自定义调查流。",
    copy: "复制",
    duplicate: "重复",
    addToToolbox: "添加到工具箱",
    deletePanel: "删除面板",
    deleteQuestion: "删除题目",
    convertTo: "转变为",
    drag: "拖放元件",
  },
  // Question types
  qt: {
    default: "默认",
    checkbox: "多项选择",
    comment: "多行文本",
    imagepicker: "选图片",
    ranking: "排名",
    image: "图像",
    dropdown: "下拉框",
    tagbox: "多选下拉列表",
    file: "文件上传",
    html: "Html 代码",
    matrix: "矩阵 (单选题)",
    matrixdropdown: "矩阵 (下拉框)",
    matrixdynamic: "矩阵 (动态问题)",
    multipletext: "文本框组",
    panel: "面板",
    paneldynamic: "面板(动态)",
    radiogroup: "单项选择",
    rating: "评分",
    text: "单行文本",
    boolean: "逻辑项",
    expression: "表达式(只读)",
    signaturepad: "签名",
    buttongroup: "按钮组"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "默认语言 ({0})",
    survey: "调查问卷",
    settings: "问卷设置",
    settingsTooltip: "打开设置",
    surveySettings: "调查设置",
    surveySettingsTooltip: "打开调查设置",
    themeSettings: "主题设置",
    themeSettingsTooltip: "打开主题设置",
    showPanel: "显示面板",
    hidePanel: "“隐藏”面板",
    prevSelected: "选择上一个",
    nextSelected: "选择下一步",
    prevFocus: "焦点 上一页",
    nextFocus: "接下来的重点",
    surveyTypeName: "调查",
    pageTypeName: "页",
    panelTypeName: "面板",
    questionTypeName: "问题",
    columnTypeName: "列",
    addNewPage: "添加新页面",
    moveRight: "滚动到右侧",
    moveLeft: "滚动到左侧",
    deletePage: "删除页面",
    editPage: "编辑页面",
    edit: "编辑",
    newPageName: "页面",
    newQuestionName: "问题",
    newPanelName: "面板",
    newTextItemName: "文本",
    testSurvey: "测试问卷",
    themeSurvey: "主题",
    defaultV2Theme: "违约",
    modernTheme: "摩登",
    defaultTheme: "默认（旧版）",
    testSurveyAgain: "再次测试问卷",
    testSurveyWidth: "问卷宽度: ",
    navigateToMsg: "你必须导航到",
    logic: "逻辑",
    embedSurvey: "将问卷嵌入网页",
    translation: "转换",
    saveSurvey: "保存问卷",
    saveSurveyTooltip: "保存调查",
    saveTheme: "保存主题",
    saveThemeTooltip: "保存主题",
    designer: "问卷设计器",
    jsonEditor: "JSON 编辑器",
    jsonHideErrors: "隐藏错误",
    jsonShowErrors: "显示错误",
    undo: "撤销",
    redo: "恢复",
    undoTooltip: "撤消上次更改",
    redoTooltip: "重做更改",
    showMoreChoices: "显示更多",
    showLessChoices: "显示更少",
    copy: "复制",
    cut: "切",
    paste: "糊",
    copyTooltip: "将所选内容复制到剪贴板",
    cutTooltip: "将所选内容剪切到剪贴板",
    pasteTooltip: "从剪贴板粘贴",
    options: "选项",
    generateValidJSON: "生成 JSON 数据",
    generateReadableJSON: "生成易读的 JSON 数据",
    toolbox: "工具箱",
    "property-grid": "性能",
    propertyGridFilteredTextPlaceholder: "键入以搜索...",
    propertyGridNoResultsFound: "未找到结果",
    toolboxGeneralCategory: "一般",
    toolboxChoiceCategory: "选择题",
    toolboxTextCategory: "文本输入问题",
    toolboxContainersCategory: "器皿",
    toolboxMatrixCategory: "矩阵问题",
    toolboxMiscCategory: "杂项",
    correctJSON: "请修正 JSON 数据",
    surveyResults: "问卷结果: ",
    surveyResultsTable: "表格形式",
    surveyResultsJson: "JSON形式",
    resultsTitle: "问题标题",
    resultsName: "问题名称",
    resultsValue: "答案名称",
    resultsDisplayValue: "显示答案",
    modified: "已修改",
    saving: "保存中...",
    saved: "已保存",
    propertyEditorError: "错误",
    saveError: "错误，未保存",
    translationPropertyGridTitle: "语言设置",
    themePropertyGridTitle: "主题设置",
    translationLanguages: "语言",
    translationDeleteLanguage: "您确定要删除此语言的所有字符串吗？",
    translationAddLanguage: "语言选择",
    translationShowAllStrings: "全部名词",
    translationShowUsedStringsOnly: "仅使用的字符串",
    translationShowAllPages: "全部页面",
    translationNoStrings: "未翻译，重新选",
    translationExportToSCVButton: "导出CSV",
    translationImportFromSCVButton: "导入CSV",
    translateUsigAI: "自动翻译全部",
    translateUsigAIFrom: "翻译语言组合：",
    translationDialogTitle: "未翻译的字符串",
    translationMergeLocaleWithDefault: "同默认合并 {0} ",
    translationPlaceHolder: "译本。。。",
    themeExportButton: "出口",
    themeImportButton: "进口",
    surveyJsonExportButton: "出口",
    surveyJsonImportButton: "进口",
    surveyJsonCopyButton: "复制到剪贴板",
    themeResetButton: "将主题设置重置为默认值",
    themeResetConfirmation: "你真的要重置主题吗？您的所有自定义项都将丢失。",
    themeResetConfirmationOk: "是，重置主题",
    bold: "加粗",
    italic: "斜体",
    underline: "下划线",
    addNewQuestion: "添加问题",
    selectPage: "选择页面...",
    carryForwardChoicesCopied: "选择是从",
    choicesLoadedFromWebText: "选项是从 Web 服务加载的。",
    choicesLoadedFromWebLinkText: "前往“设置”",
    choicesLoadedFromWebPreviewTitle: "加载选项的预览",
    htmlPlaceHolder: "HTML内容将在这里。",
    panelPlaceHolder: "在此处从工具箱中删除问题。",
    surveyPlaceHolder: "调查为空。从工具箱中拖动元素或单击下面的按钮。",
    imagePlaceHolder: "将图像拖放到此处或单击下面的按钮并选择要上传的图像",
    imageChooseImage: "选择图像",
    addNewTypeQuestion: "添加{0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[徽标]",
    auto: "自动",
    choices_Item: "项目",
    lg: {
      addNewItem: "添加新规则",
      empty_tab: "创建规则以自定义调查流。",
      page_visibilityName: "显示（隐藏）页面",
      page_enableName: "启用（禁用）页面",
      page_requireName: "将页面设为必填项",
      panel_visibilityName: "“显示（隐藏）”面板",
      panel_enableName: "启用（禁用）面板",
      panel_requireName: "将页面设为必填项",
      question_visibilityName: "显示（隐藏）问题",
      question_enableName: "启用（禁用）问题",
      question_requireName: "提出必填题",
      question_resetValueName: "重置问题值",
      question_setValueName: "设置问题值",
      column_visibilityName: "显示（隐藏）列",
      column_enableName: "启用（禁用）列",
      column_requireName: "使列成为必填项",
      column_resetValueName: "重置列值",
      column_setValueName: "设置列值",
      trigger_completeName: "完成调查",
      trigger_setvalueName: "设置答案",
      trigger_copyvalueName: "复制答案",
      trigger_skipName: "跳至问题",
      trigger_runExpressionName: "运行表达式",
      completedHtmlOnConditionName: "设置“调查完成”页面标记",
      page_visibilityDescription: "使页面在逻辑表达式返回 true 时可见。否则保持不可见。",
      panel_visibilityDescription: "使面板在逻辑表达式返回 true 时可见。否则保持不可见。",
      panel_enableDescription: "使面板及其中的所有元素在逻辑表达式返回 true 时启用。否则，请禁用它们。",
      question_visibilityDescription: "使问题在逻辑表达式返回 true 时可见。否则保持不可见。",
      question_enableDescription: "使问题在逻辑表达式返回 true 时启用。否则将其禁用。",
      question_requireDescription: "当逻辑表达式返回 true 时，问题变为必需。",
      trigger_completeDescription: "当逻辑表达式返回 true 时，调查将完成，最终用户将看到“谢谢页面”。",
      trigger_setvalueDescription: "当逻辑表达式中使用的问题值发生更改并且逻辑表达式返回 true 时，该值将设置为所选问题。",
      trigger_copyvalueDescription: "当逻辑表达式中使用的问题值发生更改并且逻辑表达式返回 true 时，一个选定问题的值将复制到另一个选定问题。",
      trigger_skipDescription: "当逻辑表达式返回 true 时，调查将跳到/聚焦所选问题。",
      trigger_runExpressionDescription: "当逻辑表达式返回 true 时，将执行自定义表达式。您可以选择将此表达式结果设置为所选问题",
      completedHtmlOnConditionDescription: "如果逻辑表达式返回 true，则“感谢页面”的默认文本将更改为给定的文本。",
      itemExpressionText: "当表达式：“{0}”返回 true", //{0} - the expression
      itemEmptyExpressionText: "新规则",
      page_visibilityText: "使页面{0}可见", //{0} page name
      panel_visibilityText: "使面板{0}可见", //{0} panel name
      panel_enableText: "使面板{0}启用", //{0} panel name
      question_visibilityText: "使问题{0}可见", //{0} question name
      question_enableText: "使问题{0}启用", //{0} question name
      question_requireText: "将问题{0}为必填项", //{0} question name
      question_resetValueText: "重置问题的值：{0}",
      question_setValueText: "分配值：{1}问题：{0}",
      column_visibilityText: "使问题{1}的列{0}可见", //{0} column name, {1} question name
      column_enableText: "使问题{1}列{0}启用", //{0} column name, {1} question name
      column_requireText: "{0}将问题{1}列为必填项", //{0} column name, {1} question name
      column_resetValueText: "重置列的单元格值：{0}",
      column_setValueText: "将单元格值：{1}分配给列：{0}",
      setValueExpressionPlaceholder: "其结果将分配给目标问题的表达式。",
      trigger_completeText: "调查完成",
      trigger_setvalueText: "受到质疑：{0}价值{1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "明确问题值：{0}", //{0} question name
      trigger_copyvalueText: "复制到问题：{0}问题 {1} 的值", //{0} and {1} question names
      trigger_skipText: "调查 跳至问题{0}", //{0} question name
      trigger_runExpressionText1: "运行表达式：“{0}”", //{0} the expression
      trigger_runExpressionText2: "并质疑其结果：{0}", //{0} question name
      completedHtmlOnConditionText: "显示“感谢页面”的自定义文本。",
      showAllQuestions: "所有问题",
      showAllActionTypes: "所有操作类型",
      conditions: "条件",
      actions: "操作 （s）",
      expressionEditorTitle: "定义条件",
      actionsEditorTitle: "定义操作",
      deleteAction: "删除操作",
      addNewAction: "添加操作",
      selectedActionCaption: "选择操作...",
      expressionInvalid: "逻辑表达式为空或无效。请更正。",
      noActionError: "请至少添加一个操作。",
      actionInvalid: "请解决操作中的问题。",
      uncompletedRule_title: "逻辑规则不完整",
      uncompletedRule_text: "您尚未完成某些逻辑规则。如果现在离开该选项卡，更改将丢失。是否仍要离开选项卡而不完成更改？",
      uncompletedRule_apply: "是的",
      uncompletedRule_cancel: "不，我想完成规则"
    }
  },
  // Property Editors
  pe: {
    apply: "应用",
    ok: "确定",
    save: "救",
    clear: "清楚",
    saveTooltip: "救",
    cancel: "取消",
    set: "设置",
    reset: "重置",
    change: "改变",
    refresh: "刷新",
    close: "关闭",
    delete: "删除",
    add: "加",
    addNew: "新建",
    addItem: "添加项...",
    removeItem: "单击以删除该项目...",
    dragItem: "拖动项目",
    addOther: "其他",
    addSelectAll: "全选",
    addNone: "无",
    removeAll: "全部删除",
    edit: "编辑器",
    back: "退货而不保存",
    backTooltip: "退货而不保存",
    saveAndBack: "保存并返回",
    saveAndBackTooltip: "保存并返回",
    doneEditing: "做",
    editChoices: "编辑选项",
    showChoices: "显示选项",
    move: "移动",
    empty: "<空>",
    emptyValue: "值为空",
    fastEntry: "快速输入",
    fastEntryNonUniqueError: "值“{0}”不是唯一的",
    fastEntryChoicesCountError: "请将项目数量限制在{0}到{1}",
    fastEntryChoicesMinCountError: "请输入至少{0}项目",
    fastEntryPlaceholder: "您可以按以下格式设置数据：\n值 1|文本\n值2",
    formEntry: "表单输入",
    testService: "测试服务",
    itemSelectorEmpty: "请选择元素",
    conditionActionEmpty: "请选择操作",
    conditionSelectQuestion: "选择问题...",
    conditionSelectPage: "选择页面...",
    conditionSelectPanel: "选择面板...",
    conditionValueQuestionTitle: "选择值",
    expressionHelp: "请输入一项条件判断。当条件判断为真时问题/页面将可见。例如: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
    aceEditorHelp: "trl+space公式补完提示",
    aceEditorRowTitle: "当前行",
    aceEditorPanelTitle: "当前面板",
    showMore: "更多细节请查看文档",
    assistantTitle: "Available questions:",
    cellsEmptyRowsColumns: "至少有1行",
    showPreviewBeforeComplete: "在提交调查之前预览答案",
    overridingPropertyPrefix: "设置者",
    resetToDefaultCaption: "重置",
    propertyIsEmpty: "请为该属性设定一个值",
    propertyIsNoUnique: "请输入唯一值",
    propertyNameIsNotUnique: "请输入唯一名称",
    propertyNameIsIncorrect: "不要使用保留字：“项目”、“选项”、“面板”、“行”。",
    listIsEmpty: "尚未添加任何项目",
    "listIsEmpty@choices": "尚未添加任何选项",
    "addNew@choices": "添加选项",
    expressionIsEmpty: "表达式为空",
    value: "值",
    text: "显示文本",
    rowid: "行号",
    imageLink: "图片链接",
    columnEdit: "编辑列: {0}",
    itemEdit: "编辑选项: {0}",
    url: "URL",
    path: "路径",
    valueName: "值名",
    choicesbyurl: {
      valueName: "从以下 JSON 字段中获取值"
    },
    titleName: "标题名",
    imageLinkName: "从以下 JSON 字段获取图像网址",
    allowEmptyResponse: "允许空响应",
    titlePlaceholder: "标题",
    surveyTitlePlaceholder: "调查标题",
    pageTitlePlaceholder: "页数 {num}",
    descriptionPlaceholder: "描述",
    surveyDescriptionPlaceholder: "描述",
    pageDescriptionPlaceholder: "描述",
    showOtherItem: "可添加其他答案?",
    otherText: "其他答案文本",
    showNoneItem: "无",
    showRefuseItem: "允许“拒绝应答”选项",
    showDontKnowItem: "允许“不知道”选项",
    noneText: "无文本",
    showSelectAllItem: "有全选项",
    selectAllText: "选择全部文本",
    choicesMin: "选项最小值",
    choicesMax: "选项最大值",
    choicesStep: "选项间隔",
    name: "题目名",
    title: "题目文本",
    cellType: "单元格类型",
    colCount: "列数",
    choicesOrder: "设置选项顺序",
    visible: "是否可见?",
    isRequired: "是否为必填项?",
    markRequired: "标记为必填",
    removeRequiredMark: "删除所需的标记",
    isAllRowRequired: "要求所有行都回答",
    eachRowUnique: "防止行中出现重复响应",
    requiredErrorText: "错误文字",
    startWithNewLine: "问题是否新起一行?",
    rows: "文本框行数",
    cols: "列",
    placeholder: "占位文本",
    showPreview: "是否显示图像预览?",
    storeDataAsText: "以 JSON 文本方式存储文件",
    maxSize: "文件最大尺寸 (Bytes)",
    imageHeight: "图片高度",
    imageWidth: "图片宽度",
    rowCount: "默认行数",
    columnLayout: "列布局",
    addRowLocation: "添加行按钮位置",
    addRowText: "添加条目按钮文本",
    removeRowText: "删除条目按钮文本",
    rateMin: "最小评分",
    rateMax: "最大评分",
    rateStep: "评分间隔",
    minRateDescription: "最小值提示",
    maxRateDescription: "最大值提示",
    inputType: "文本框类型",
    optionsCaption: "下拉框提示语",
    defaultValue: "默认值",
    cellsDefaultRow: "Default cells texts",
    surveyEditorTitle: "问卷设置",
    qEditorTitle: "编辑问题: {0}",
    maxLength: "最大长度",
    buildExpression: "建",
    editExpression: "编辑",
    and: "和",
    or: "或",
    remove: "删除",
    addCondition: "添加条件",
    emptyLogicPopupMessage: "选择一个问题以开始配置条件。",
    if: "如果",
    then: "然后",
    setToName: "目标问题",
    fromName: "要从中复制答案的问题",
    gotoName: "要跳到的问题",
    ruleIsNotSet: "规则不正确",
    includeIntoResult: "包含在调查结果中",
    showTitle: "显示/隐藏 标题",
    expandCollapseTitle: "展开/折叠标题",
    locale: "默认语言",
    simulator: "选择设备类型",
    landscapeOrientation: "切换到横向",
    portraitOrientation: "切换到纵向",
    mode: "模式 (编辑/只读)",
    clearInvisibleValues: "清除隐藏值",
    cookieName: "Cookie名，避免多次运行)",
    sendResultOnPageNext: "切换页时保存结果",
    storeOthersAsComment: "其他值单独储存",
    showPageTitles: "显示页面标题",
    showPageNumbers: "显示页数",
    pagePrevText: "前一页按钮文本",
    pageNextText: "后一页按钮文本",
    completeText: "完成按钮文本",
    previewText: "“预览答案”按钮文本",
    editText: "编辑应答按钮文本",
    startSurveyText: "开始按钮文本",
    showNavigationButtons: "显示导航按钮 (默认导航)",
    showPrevButton: "显示前一页按钮 (用户可返回至前一页面)",
    firstPageIsStarted: "调查的第一页面为起始页.",
    showCompletedPage: "结尾展示完成后的页面 (completedHtml)",
    goNextPageAutomatic: "回答本页所有问题后，自动跳转到下一页",
    showProgressBar: "显示进度条",
    questionTitleLocation: "问题的标题位置",
    requiredText: "问题必填标志",
    questionStartIndex: "问题起始标志 (1, 2 or 'A', 'a')",
    showQuestionNumbers: "显示问题编号",
    questionTitleTemplate: "问题标题模板, 默认为: '{no}. {require} {title}'",
    questionErrorLocation: "问题错误定位",
    focusFirstQuestionAutomatic: "改变页面时聚焦在第一个问题",
    questionsOrder: "页内问题顺序",
    maxTimeToFinish: "完成调查的最长时间",
    maxTimeToFinishPage: "完成调查中页面的最长时间",
    image: {
      imageHeight: "图片高度（以 CSS 接受的值为单位）",
      imageWidth: "图像宽度（以 CSS 接受的值为单位）"
    },
    // survey templates
    survey: {
      title: "标题"
    },
    page: {
      title: "标题",
      maxTimeToFinish: "完成页面的时间限制（以秒为单位）"
    },
    question: {
      page: "父页面"
    },
    panel: {
      page: "父页面"
    },
    showTimerPanel: "显示计时器面板",
    showTimerPanelMode: "显示计时器面板模式",
    renderMode: "渲染模式",
    allowAddPanel: "允许添加面板",
    allowRemovePanel: "允许删除面板",
    noEntriesText: "空条目文本",
    panelAddText: "添加面板文本",
    panelRemoveText: "删除面板文本",
    isSinglePage: "在一个页面上展示所有元素",
    html: "Html",
    expression: "公式",
    setValue: "答",
    dataFormat: "图像格式",
    allowAddRows: "允许添加行",
    allowRemoveRows: "允许删除行",
    allowRowsDragAndDrop: "允许行拖放",
    responsiveImageSizeHelp: "如果指定确切的图像宽度或高度，则不适用。",
    minImageWidth: "最小图像宽度",
    maxImageWidth: "最大图像宽度",
    minImageHeight: "最小图像高度",
    maxImageHeight: "最大图像高度",
    minValue: "最小值",
    maxValue: "最大值",
    minLength: "最小长度",
    allowDigits: "允许的位数",
    minCount: "最小数量",
    maxCount: "最大数量",
    regex: "正则表达式",
    surveyvalidator: {
      text: "错误信息",
      expression: "验证表达式"
    },
    totalText: "总文本",
    totalType: "总类型",
    totalExpression: "总公式",
    totalDisplayStyle: "总显示风格",
    totalCurrency: "总currency",
    totalFormat: "总格式",
    logo: "徽标（URL 或 base64 编码的字符串）",
    questionsOnPageMode: "调查结构",
    maxTextLength: "最大答案长度（以字符为单位）",
    maxOthersLength: "最大注释长度（以字符为单位）",
    autoGrowComment: "如有必要，自动展开评论区域",
    allowResizeComment: "允许用户调整文本区域的大小",
    textUpdateMode: "更新文本问题值",
    focusOnFirstError: "将焦点放在第一个无效答案上",
    checkErrorsMode: "运行验证",
    navigateToUrl: "导航到网址",
    navigateToUrlOnCondition: "动态网址",
    completedBeforeHtml: "用于显示用户是否已填写此调查的标记",
    completedHtml: "调查完成页面标记",
    completedHtmlOnCondition: "动态调查完成页面标记",
    loadingHtml: "加载调查模型时要显示的标记",
    commentText: "注释区文本",
    autocomplete: "自动完成类型",
    labelTrue: "“真实”标签",
    labelFalse: "“虚假”标签",
    allowClear: "显示“清除”按钮",
    displayStyle: "值显示样式",
    format: "带格式的字符串",
    maximumFractionDigits: "最大小数位数",
    minimumFractionDigits: "最小小数位数",
    useGrouping: "显示分组分隔符",
    allowMultiple: "允许多个文件",
    allowImagesPreview: "预览图像",
    acceptedTypes: "接受的文件类型",
    waitForUpload: "等待上传完成",
    needConfirmRemoveFile: "确认文件删除",
    detailPanelMode: "详细信息面板位置",
    minRowCount: "最小行数",
    maxRowCount: "最大行数",
    confirmDelete: "确认删除行",
    confirmDeleteText: "确认消息",
    paneldynamic: {
      confirmDelete: "确认面板删除"
    },
    panelCount: "初始面板计数",
    minPanelCount: "最小面板数",
    maxPanelCount: "最大面板数",
    panelsState: "内面板展开状态",
    templateDescription: "描述模板",
    templateTitle: "标题模板",
    panelPrevText: "“上一个面板”按钮工具提示",
    panelNextText: "“下一个面板”按钮工具提示",
    showRangeInProgress: "显示进度条",
    templateTitleLocation: "问题标题位置",
    panelRemoveButtonLocation: "“删除面板”按钮位置",
    hideIfRowsEmpty: "如果没有行，则隐藏问题",
    hideColumnsIfEmpty: "如果没有行，则隐藏列",
    rateValues: "自定义费率值",
    rateCount: "速率计数",
    autoGenerate: "如何指定速率值？",
    hideIfChoicesEmpty: "如果问题不包含任何选项，则隐藏问题",
    hideNumber: "隐藏问题编号",
    minWidth: "最小宽度（以 CSS 接受的值为单位）",
    maxWidth: "最大宽度（以 CSS 接受的值为单位）",
    width: "宽度（以 CSS 接受的值为单位）",
    showHeader: "显示列标题",
    horizontalScroll: "显示水平滚动条",
    columnMinWidth: "最小列宽（以 CSS 接受的值为单位）",
    rowTitleWidth: "行标题宽度（以 CSS 接受的值为单位）",
    valueTrue: "“真”值",
    valueFalse: "“假”值",
    minErrorText: "“值低于最小值”错误消息",
    maxErrorText: "“值超过最大值”错误消息",
    otherErrorText: "“空评论”错误消息",
    keyDuplicationError: "“非唯一键值”错误消息",
    minSelectedChoices: "最少选择的选项",
    maxSelectedChoices: "最大选定选项数",
    showClearButton: "显示“清除”按钮",
    showNumber: "显示面板编号",
    logoWidth: "徽标宽度（以 CSS 接受的值为单位）",
    logoHeight: "徽标高度（以 CSS 接受的值为单位）",
    readOnly: "只读",
    enableIf: "可编辑，如果",
    emptyRowsText: "“无行”消息",
    size: "输入字段大小（以字符为单位）",
    separateSpecialChoices: "单独的特殊选项（无、其他、全选）",
    choicesFromQuestion: "复制以下问题的选项",
    choicesFromQuestionMode: "要复制哪些选项？",
    showCommentArea: "显示评论区域",
    commentPlaceholder: "注释区占位符",
    displayRateDescriptionsAsExtremeItems: "将速率描述显示为极值",
    rowsOrder: "行顺序",
    columnsLayout: "列布局",
    columnColCount: "嵌套列计数",
    state: "面板展开状态",
    correctAnswer: "正确答案",
    defaultPanelValue: "默认值",
    cells: "单元格文本",
    keyName: "键列",
    itemvalue: {
      text: "可选文字"
    },
    logoPosition: "徽标位置",
    addLogo: "添加徽标...",
    changeLogo: "更改徽标...",
    logoPositions: {
      none: "删除徽标",
      left: "左",
      right: "右",
      top: "在顶部",
      bottom: "在底部"
    },
    tabs: {
      general: "一般",
      fileOptions: "选项",
      html: "HTML 编辑器",
      columns: "设置列",
      rows: "设置行",
      choices: "设置选项",
      items: "项目",
      visibleIf: "设置可见条件",
      enableIf: "设置有效条件",
      requiredIf: "如果",
      rateValues: "设置评分值",
      choicesByUrl: "通过 URL 导入选项",
      matrixChoices: "默认选项",
      multipleTextItems: "文本输入",
      numbering: "编号",
      validators: "校验规则",
      navigation: "导航",
      question: "问题",
      pages: "页面",
      timer: "问卷计时器",
      calculatedValues: "计算值",
      triggers: "触发器",
      templateTitle: "标题模板",
      totals: "总数",
      logic: "逻辑",
      layout: "布局",
      data: "数据",
      validation: "验证",
      cells: "单元格文本",
      showOnCompleted: "调查完成",
      logo: "调查标题中的徽标",
      slider: "滑 块",
      expression: "表达",
      others: "别人"
    },
    editProperty: "编辑属性: '{0}'",
    items: "[ 项目数量: {0} ]",
    choicesVisibleIf: "在以下情况下，选项可见",
    choicesEnableIf: "在以下情况下，可以选择选项",
    columnsEnableIf: "在以下情况下，列可见",
    rowsEnableIf: "在以下情况下，行可见",
    indent: "添加缩进",
    panel: {
      indent: "添加外部缩进"
    },
    innerIndent: "添加内部缩进",
    defaultValueFromLastRow: "从最后一行获取默认值",
    defaultValueFromLastPanel: "从最后一个面板中获取默认值",
    enterNewValue: "请设定值",
    noquestions: "问卷中还没有创建任何问题",
    createtrigger: "请创建触发器",
    titleKeyboardAdornerTip: "按回车键编辑",
    keyboardAdornerTip: "按回车键编辑项目，按删除按钮删除项目，按 Alt 加向上箭头或向下箭头移动项目",
    triggerOn: "当 ",
    triggerMakePagesVisible: "使页面可见:",
    triggerMakeQuestionsVisible: "使问题可见:",
    triggerCompleteText: "如果满足条件，则完成问卷",
    triggerNotSet: "触发器尚未设置",
    triggerRunIf: "满足下列条件时执行",
    triggerSetToName: "修改下列问题值: ",
    triggerFromName: "复制值: ",
    triggerRunExpression: "运行公式:",
    triggerSetValue: "修改为: ",
    triggerGotoName: "转到问题",
    triggerIsVariable: "在问卷提交结果中不要包含该变量",
    triggerRunExpressionEmpty: "请输入有效的表达式",
    emptyExpressionPlaceHolder: "在此处键入表达式...",
    noFile: "未选择任何文件",
    clearIfInvisible: "如果问题被隐藏，则清除该值",
    valuePropertyName: "值属性名称",
    searchEnabled: "启用搜索",
    hideSelectedItems: "隐藏所选项目",
    closeOnSelect: "选择后关闭下拉列表",
    signatureWidth: "签名宽度",
    signatureHeight: "标志性高度",
    verticalAlign: "垂直对齐",
    alternateRows: "交替行",
    columnsVisibleIf: "在以下情况下，列可见",
    rowsVisibleIf: "在以下情况下，行可见",
    otherPlaceholder: "注释区占位符",
    signaturepad: {
      showPlaceholder: "显示占位符",
      placeholder: "占位符文本",
      signatureWidth: "签名区域宽度",
      signatureHeight: "签名区域高度",
      signatureAutoScaleEnabled: "自动缩放签名区域",
      penMinWidth: "最小笔宽",
      penMaxWidth: "最大笔宽"
    },
    filePlaceholder: "文件占位符文本",
    photoPlaceholder: "照片占位符文本",
    fileOrPhotoPlaceholder: "文件或照片占位符文本",
    rateType: "费率类型"
  },
  // Property values
  pv: {
    "true": "真",
    "false": "假",
    file: "本地文件",
    camera: "照相机",
    "file-camera": "本地文件或相机",
    inherit: "继承",
    show: "显示",
    hide: "隐藏",
    default: "默认",
    initial: "初始化",
    random: "随机",
    collapsed: "折叠",
    expanded: "扩展",
    none: "无",
    asc: "升序",
    desc: "降序",
    indeterminate: "indeterminate",
    decimal: "十进制",
    currency: "货币",
    percent: "百分之",
    firstExpanded: "firstExpanded",
    off: "关闭",
    onpanel: "在每个面板上开始",
    onPanel: "面板上",
    onSurvey: "问卷上",
    list: "列表",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "制表符",
    horizontal: "水平",
    vertical: "垂直",
    top: "顶",
    bottom: "底",
    topBottom: "顶和底",
    both: "双",
    left: "左",
    right: "右",
    leftRight: "左和右",
    color: "颜色",
    date: "日期",
    datetime: "日期时间",
    "datetime-local": "日期时间-本地",
    email: "电子邮件",
    month: "月",
    number: "数",
    password: "密码",
    range: "范围",
    tel: "电话",
    text: "发短信",
    time: "时间",
    url: "网址",
    week: "周",
    hidden: "隐藏",
    on: "开",
    onPage: "页面上",
    edit: "编辑",
    display: "仅显示",
    onComplete: "完成时",
    onHidden: "隐藏中",
    onHiddenContainer: "当问题或其面板/页面被隐藏时",
    contain: "包含",
    cover: "盖",
    fill: "填补",
    clearInvisibleValues: {
      none: "从不"
    },
    inputType: {
      color: "颜色",
      date: "日期",
      "datetime-local": "日期和时间",
      email: "电子邮件",
      month: "月",
      number: "数",
      password: "密码",
      range: "范围",
      tel: "电话号码",
      text: "发短信",
      time: "时间",
      url: "网址",
      week: "周"
    },
    all: "全部",
    page: "页",
    survey: "问卷",
    onNextPage: "下一页时",
    onValueChanged: "值变动时",
    onValueChanging: "更改答案之前",
    standard: "原始结构",
    singlePage: "所有问题都在一个页面上",
    questionPerPage: "单个页面上的每个问题",
    noPreview: "无预览",
    showAllQuestions: "显示所有问题",
    showAnsweredQuestions: "仅显示已回答的问题",
    pages: "已完成的页面",
    questions: "已回答的问题",
    requiredQuestions: "回答必填问题",
    correctQuestions: "有效答案",
    buttons: "已完成的页面（按钮 UI）",
    underInput: "在输入下",
    underTitle: "在标题下",
    onBlur: "模糊时",
    onTyping: "打字时",
    underRow: "在行下",
    underRowSingle: "在该行下，只有一个面板可见",
    showNavigationButtons: {
      none: "隐藏"
    },
    showProgressBar: {
      off: "隐藏"
    },
    showTimerPanel: {
      none: "隐藏"
    },
    showTimerPanelMode: {
      all: "双"
    },
    detailPanelMode: {
      none: "隐藏"
    },
    addRowLocation: {
      default: "取决于矩阵布局"
    },
    panelsState: {
      default: "用户无法展开或折叠面板",
      collapsed: "所有面板均已折叠",
      expanded: "所有面板均已展开"
    },
    widthMode: {
      auto: "自动",
      static: "静态的",
      responsive: "响应"
    },
    imageFit: {
      none: "没有",
      contain: "包含",
      cover: "盖",
      fill: "填补"
    },
    contentMode: {
      auto: "自动",
      image: "图像",
      video: "视频",
      youtube: "优酷"
    },
    displayMode: {
      auto: "自动",
      buttons: "按钮",
      dropdown: "下拉列表"
    },
    rateColorMode: {
      default: "违约"
    },
    autoGenerate: {
      "true": "生成",
      "false": "手动输入"
    },
    rateType: {
      labels: "标签",
      stars: "星星",
      smileys: "笑脸"
    }
  },
  // Operators
  op: {
    empty: "为空",
    notempty: "不为空",
    equal: "等于",
    notequal: "不等于",
    contains: "包含",
    notcontains: "不包含",
    anyof: "任意",
    allof: "全部",
    greater: "大于",
    less: "小于",
    greaterorequal: "大于等于",
    lessorequal: "小于等于",
    and: "和",
    or: "或"
  },
  // Embed window
  ew: {
    angular: "使用 Angular 时",
    jquery: "使用 JQuery 时",
    knockout: "使用 Knockout 时",
    react: "使用 React 时",
    vue: "使用 Vue 时",
    bootstrap: "使用 Bootstrap 时",
    modern: "现代主题",
    default: "默认主题",
    orange: "橙色主题",
    darkblue: "深蓝色主题",
    darkrose: "“暗玫瑰”主题",
    stone: "“石头”主题",
    winter: "“冬季”主题",
    winterstone: "“冬日之石”主题",
    showOnPage: "嵌入页面显示",
    showInWindow: "使用单独的问卷窗口",
    loadFromServer: "从服务器加载问卷 JSON 数据",
    titleScript: "脚本和样式",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "选择测试页",
    showInvisibleElements: "显示隐藏元件",
    hideInvisibleElements: "隐藏不可见元素"
  },
  validators: {
    answercountvalidator: "数量检查",
    emailvalidator: "Email",
    expressionvalidator: "公式",
    numericvalidator: "数字",
    regexvalidator: "正则表达式",
    textvalidator: "文本"
  },
  triggers: {
    completetrigger: "完成问卷",
    setvaluetrigger: "设置问题值",
    copyvaluetrigger: "复制值",
    skiptrigger: "跳至问题",
    runexpressiontrigger: "运行公式",
    visibletrigger: "修改可见性"
  },
  pehelp: {
    cookieName: "Cookie 可防止用户两次填写同一调查问卷。",
    size: "调整输入字段的可见区域的大小。请使用<b>“验证→最大长度</b>”设置来限制输入长度。",
    format: "使用 {0} 作为实际值的占位符。",
    totalText: "仅当至少一列具有 Total 类型或 Total 表达式时才可见。",
    acceptedTypes: "有关详细信息，请参阅 [accept]（https://www.w3schools.com/tags/att_input_accept.asp） 属性说明。",
    columnColCount: "仅适用于单选组和复选框单元类型。",
    autocomplete: "有关详细信息，请参阅 [autocomplete]（https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete） 属性说明。",
    valueName: "如果未设置此属性，则答案将存储在 Name 属性指定的字段中。",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "如果指定的列包含相同的值，则调查将引发“非唯一键值”错误。",
    filePlaceholder: "当“源类型”为“本地文件”或相机不可用时适用",
    photoPlaceholder: "当“源类型”为“相机”时适用。",
    fileOrPhotoPlaceholder: "当“源类型”为“本地文件或相机”时适用。"
  },
  // Properties
  p: {
    title: {
      name: "标题",
      title: "如果与名字相同，请设置为空值"
    },
    multiSelect: "允许多项选择",
    showLabel: "显示图像标题",
    value: "价值",
    tabAlign: "制表符对齐方式",
    sourceType: "源类型",
    fitToContainer: "适合容器",
    setValueExpression: "设置值表达式",
    description: "说明",
    logoFit: "徽标合身",
    pages: "页面",
    questions: "问题",
    triggers: "触发器",
    calculatedValues: "计算值",
    surveyId: "调查编号",
    surveyPostId: "调查帖子编号",
    surveyShowDataSaving: "调查显示数据保存",
    questionDescriptionLocation: "问题描述位置",
    progressBarType: "进度条类型",
    showTOC: "显示目录",
    tocLocation: "目录位置",
    questionTitlePattern: "问题标题模式",
    widthMode: "宽度模式",
    showBrandInfo: "显示品牌信息",
    useDisplayValuesInDynamicTexts: "在动态文本中使用显示值",
    visibleIf: "条件可见",
    titleLocation: "标题位置",
    descriptionLocation: "描述位置",
    defaultValueExpression: "默认值表达式",
    requiredIf: "是否必选",
    resetValueIf: "如果出现以下情况，则重置值",
    setValueIf: "设置值，如果",
    validators: "有效性",
    bindings: "绑定",
    renderAs: "渲染为",
    attachOriginalItems: "附加原始项目",
    choices: "选项",
    choicesByUrl: "Url选项",
    currency: "货币",
    cellHint: "单元格提示",
    isUnique: "是独一无二的",
    showInMultipleColumns: "在多列中显示",
    totalMaximumFractionDigits: "最大小数位数总数",
    totalMinimumFractionDigits: "最小小数位数总数",
    columns: "columns",
    detailElements: "细节元素",
    allowAdaptiveActions: "允许自适应操作",
    defaultRowValue: "默认行值",
    detailPanelShowOnAdding: "添加时显示的详细信息面板",
    choicesLazyLoadEnabled: "选项延迟加载已启用",
    choicesLazyLoadPageSize: "选择延迟加载页面大小",
    inputFieldComponent: "输入字段组件",
    itemComponent: "项目组件",
    min: "最小值",
    max: "麦克斯",
    minValueExpression: "最小值表达式",
    maxValueExpression: "最大值表达式",
    step: "步",
    dataList: "数据列表",
    itemSize: "itemSize",
    elements: "元素",
    content: "内容",
    navigationButtonsVisibility: "导航按钮可见",
    navigationTitle: "导航标题",
    navigationDescription: "导航说明",
    longTap: "长按",
    autoGrow: "自动增长",
    allowResize: "允许调整大小",
    acceptCarriageReturn: "接受回车",
    displayMode: "显示模式",
    rateType: "费率类型",
    label: "标签",
    contentMode: "内容模式",
    imageFit: "图像贴合",
    altText: "可选文字",
    height: "高度",
    penColor: "笔颜色",
    backgroundColor: "背景色",
    templateElements: "模板元素",
    operator: "算子",
    isVariable: "是可变的",
    runExpression: "运行表达式",
    showCaption: "显示标题",
    iconName: "图标名称",
    iconSize: "图标大小",
    precision: "精度",
    matrixDragHandleArea: "矩阵拖动手柄区域",
    backgroundImage: "背景图片",
    backgroundImageFit: "背景图像适合",
    backgroundImageAttachment: "背景图像附件",
    backgroundOpacity: "背景不透明度",
    selectToRankEnabled: "选择启用排名",
    selectToRankAreasLayout: "选择以对区域布局进行排名",
    allowCameraAccess: "允许摄像头访问",
    scaleColorMode: "缩放颜色模式",
    rateColorMode: "评价颜色模式",
    templateTabTitle: "模板选项卡标题",
    templateVisibleIf: "模板可见，如果",
    copyDisplayValue: "复制显示值"
  },
  theme: {
    "--background": "背景色",
    "--background-dim-light": "背景昏暗的光线颜色",
    "--primary-foreground": "原色前景色",
    "--foreground": "前景色",
    "--base-unit": "基本单元",
    advancedMode: "高级模式",
    groupGeneral: "常规",
    groupHeader: "页眉",
    groupBackground: "背景",
    groupAppearance: "外观",
    themeName: "主题",
    themeMode: "问题外观",
    themeModePanels: "违约",
    themeModeLightweight: "不带面板",
    themePaletteLight: "光",
    themePaletteDark: "黑暗",
    primaryColor: "强调文字颜色",
    primaryDefaultColor: "违约",
    primaryDarkColor: "悬停",
    primaryLightColor: "选择",
    coverTitleForecolor: "标题前彩",
    coverDescriptionForecolor: "描述前彩",
    coverOverlapEnabled: "重叠",
    backgroundDimColor: "背景色",
    backgroundImage: "背景图片",
    backgroundImageFitAuto: "自动",
    backgroundImageFitCover: "盖",
    backgroundImageFitContain: "包含",
    backgroundImageFitFill: "伸展",
    backgroundImageFitTile: "瓦",
    backgroundOpacity: "不透明度",
    backgroundImageAttachmentFixed: "固定",
    backgroundImageAttachmentScroll: "滚动",
    panelBackgroundTransparency: "面板背景不透明度",
    questionBackgroundTransparency: "问题背景不透明度",
    questionTitle: "问题标题字体",
    editorPanel: "输入元素",
    backgroundCornerRadius: "背景和圆角半径",
    backcolor: "默认背景",
    hovercolor: "悬停背景",
    borderDecoration: "边框装饰",
    accentBackground: "强调文字背景",
    accentForeground: "强调文字前景",
    primaryForecolor: "默认颜色",
    primaryForecolorLight: "禁用颜色",
    colorsTitle: "颜色",
    font: "字体",
    lines: "线",
    borderDefault: "暗",
    borderLight: "打火机",
    fontFamily: "字体系列",
    fontSize: "字体大小",
    color: "颜色",
    placeholderColor: "占位符颜色",
    size: "大小",
    fontWeightRegular: "定期",
    fontWeightHeavy: "重",
    fontWeightSemiBold: "半粗体",
    fontWeightBold: "大胆",
    scale: "规模",
    cornerRadius: "拐角半径",
    surveyTitle: "调查标题字体",
    surveyDescription: "调查描述字体",
    pageTitle: "页面标题字体",
    titleFont: "标题字体",
    descriptionFont: "描述字体",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "添加阴影效果",
    opacity: "不透明度",
    boxShadowBlur: "模糊",
    boxShadowSpread: "传播",
    boxShadowDrop: "落",
    boxShadowInner: "内",
    shadow: "阴影效果",
    headerView: "视图",
    headerViewBasic: "基本",
    headerViewAdvanced: "高深",
    coverInheritWidthFrom: "内容区域宽度",
    coverInheritWidthFromSurvey: "与调查相同",
    coverInheritWidthFromContainer: "适合容器",
    coverTextAreaWidth: "文本宽度",
    coverBackgroundColorSwitch: "背景色",
    coverBackgroundColorNone: "没有",
    coverBackgroundColorAccentColor: "强调文字颜色",
    coverBackgroundColorCustom: "习惯",
    horizontalAlignmentLeft: "左",
    horizontalAlignmentCenter: "中心",
    horizontalAlignmentRight: "右",
    verticalAlignmentTop: "返回页首",
    verticalAlignmentMiddle: "中间",
    verticalAlignmentBottom: "底",
    logoPosition: "徽标位置",
    coverTitlePosition: "职称位置",
    coverDescriptionPosition: "描述位置",
    names: {
      default: "违约",
      sharp: "锋利",
      borderless: "无国界",
      flat: "平",
      plain: "平原",
      doubleborder: "双边框",
      layered: "分层的",
      solid: "固体",
      threedimensional: ".3D",
      contrast: "反差"
    },
    colors: {
      teal: "水鸭",
      blue: "蓝",
      purple: "紫色",
      orchid: "兰花",
      tulip: "郁金香",
      brown: "棕色",
      green: "绿"
    }
  }
};

editorLocalization.locales["zh-cn"] = simplifiedChineseTranslation;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "创建规则以自定义调查流。"
// survey.duplicate: "Duplicate" => "重复"
// qt.ranking: "Ranking" => "排名"
// qt.image: "Image" => "图像"
// qt.tagbox: "Multi-Select Dropdown" => "多选下拉列表"
// qt.signaturepad: "Signature" => "签名"
// qt.buttongroup: "Button Group" => "按钮组"
// ed.settingsTooltip: "Open settings" => "打开设置"
// ed.surveySettings: "Survey Settings" => "调查设置"
// ed.surveySettingsTooltip: "Open survey settings" => "打开调查设置"
// ed.showPanel: "Show Panel" => "显示面板"
// ed.hidePanel: "Hide Panel" => "“隐藏”面板"
// ed.prevSelected: "Select previous" => "选择上一个"
// ed.nextSelected: "Select next" => "选择下一步"
// ed.surveyTypeName: "Survey" => "调查"
// ed.pageTypeName: "Page" => "页"
// ed.panelTypeName: "Panel" => "面板"
// ed.questionTypeName: "Question" => "问题"
// ed.columnTypeName: "Column" => "列"
// ed.themeSurvey: "Themes" => "主题"
// ed.defaultV2Theme: "Default" => "违约"
// ed.modernTheme: "Modern" => "摩登"
// ed.defaultTheme: "Default (legacy)" => "默认（旧版）"
// ed.navigateToMsg: "You had to navigate to" => "你必须导航到"
// ed.logic: "Logic" => "逻辑"
// ed.saveSurveyTooltip: "Save Survey" => "保存调查"
// ed.jsonHideErrors: "Hide errors" => "隐藏错误"
// ed.jsonShowErrors: "Show errors" => "显示错误"
// ed.undoTooltip: "Undo last change" => "撤消上次更改"
// ed.redoTooltip: "Redo the change" => "重做更改"
// ed.showMoreChoices: "Show more" => "显示更多"
// ed.showLessChoices: "Show less" => "显示更少"
// ed.copy: "Copy" => "复制"
// ed.cut: "Cut" => "切"
// ed.paste: "Paste" => "糊"
// ed.copyTooltip: "Copy selection to clipboard" => "将所选内容复制到剪贴板"
// ed.cutTooltip: "Cut selection to clipboard" => "将所选内容剪切到剪贴板"
// ed.pasteTooltip: "Paste from clipboard" => "从剪贴板粘贴"
// ed.property-grid: "Properties" => "性能"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "键入以搜索..."
// ed.toolboxChoiceCategory: "Choice Questions" => "选择题"
// ed.toolboxTextCategory: "Text Input Questions" => "文本输入问题"
// ed.toolboxContainersCategory: "Containers" => "器皿"
// ed.toolboxMatrixCategory: "Matrix Questions" => "矩阵问题"
// ed.toolboxMiscCategory: "Misc" => "杂项"
// ed.propertyEditorError: "Error" => "错误"
// ed.translationPropertyGridTitle: "Language Settings" => "语言设置"
// ed.themePropertyGridTitle: "Theme Settings" => "主题设置"
// ed.translationLanguages: "Languages" => "语言"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "仅使用的字符串"
// ed.translationPlaceHolder: "Translation..." => "译本。。。"
// ed.themeExportButton: "Export" => "出口"
// ed.themeImportButton: "Import" => "进口"
// ed.selectPage: "Select page..." => "选择页面..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "选择是从"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML内容将在这里。"
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "在此处从工具箱中删除问题。"
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "调查为空。从工具箱中拖动元素或单击下面的按钮。"
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "将图像拖放到此处或单击下面的按钮并选择要上传的图像"
// ed.imageChooseImage: "Choose Image" => "选择图像"
// ed.addNewTypeQuestion: "Add {0}" => "添加{0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[徽标]"
// ed.auto: "auto" => "自动"
// ed.choices_Item: "Item " => "项目"
// lg.addNewItem: "Add New Rule" => "添加新规则"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "创建规则以自定义调查流。"
// lg.page_visibilityName: "Show (hide) page" => "显示（隐藏）页面"
// lg.page_enableName: "Enable (disable) page" => "启用（禁用）页面"
// lg.panel_visibilityName: "Show (hide) panel" => "“显示（隐藏）”面板"
// lg.panel_enableName: "Enable (disable) panel" => "启用（禁用）面板"
// lg.question_visibilityName: "Show (hide) question" => "显示（隐藏）问题"
// lg.question_enableName: "Enable (disable) question" => "启用（禁用）问题"
// lg.question_requireName: "Make question required" => "提出必填题"
// lg.column_visibilityName: "Show (hide) column" => "显示（隐藏）列"
// lg.column_enableName: "Enable (disable) column" => "启用（禁用）列"
// lg.column_requireName: "Make column required" => "使列成为必填项"
// lg.trigger_completeName: "Complete survey" => "完成调查"
// lg.trigger_setvalueName: "Set answer" => "设置答案"
// lg.trigger_copyvalueName: "Copy answer" => "复制答案"
// lg.trigger_skipName: "Skip to question" => "跳至问题"
// lg.trigger_runExpressionName: "Run expression" => "运行表达式"
// lg.completedHtmlOnConditionName: "Set \"Survey Complete\" page markup" => "设置“调查完成”页面标记"
// lg.page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible." => "使页面在逻辑表达式返回 true 时可见。否则保持不可见。"
// lg.panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible." => "使面板在逻辑表达式返回 true 时可见。否则保持不可见。"
// lg.panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled." => "使面板及其中的所有元素在逻辑表达式返回 true 时启用。否则，请禁用它们。"
// lg.question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible." => "使问题在逻辑表达式返回 true 时可见。否则保持不可见。"
// lg.question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled." => "使问题在逻辑表达式返回 true 时启用。否则将其禁用。"
// lg.question_requireDescription: "Question becomes required when the logic expression returns true." => "当逻辑表达式返回 true 时，问题变为必需。"
// lg.trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'." => "当逻辑表达式返回 true 时，调查将完成，最终用户将看到“谢谢页面”。"
// lg.trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question." => "当逻辑表达式中使用的问题值发生更改并且逻辑表达式返回 true 时，该值将设置为所选问题。"
// lg.trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question." => "当逻辑表达式中使用的问题值发生更改并且逻辑表达式返回 true 时，一个选定问题的值将复制到另一个选定问题。"
// lg.trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question." => "当逻辑表达式返回 true 时，调查将跳到/聚焦所选问题。"
// lg.trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question" => "当逻辑表达式返回 true 时，将执行自定义表达式。您可以选择将此表达式结果设置为所选问题"
// lg.completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one." => "如果逻辑表达式返回 true，则“感谢页面”的默认文本将更改为给定的文本。"
// lg.itemExpressionText: "When expression: '{0}' returns true" => "当表达式：“{0}”返回 true"
// lg.itemEmptyExpressionText: "New rule" => "新规则"
// lg.page_visibilityText: "make page {0} visible" => "使页面{0}可见"
// lg.panel_visibilityText: "make panel {0} visible" => "使面板{0}可见"
// lg.panel_enableText: "make panel {0} enable" => "使面板{0}启用"
// lg.question_visibilityText: "make question {0} visible" => "使问题{0}可见"
// lg.question_enableText: "make question {0} enable" => "使问题{0}启用"
// lg.question_requireText: "make question {0} required" => "将问题{0}为必填项"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "使问题{1}的列{0}可见"
// lg.column_enableText: "make column {0} of question {1} enable" => "使问题{1}列{0}启用"
// lg.column_requireText: "make column {0} of question {1} required" => "{0}将问题{1}列为必填项"
// lg.trigger_completeText: "survey becomes completed" => "调查完成"
// lg.trigger_setvalueText: "set into question: {0} value {1}" => "受到质疑：{0}价值{1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "明确问题值：{0}"
// lg.trigger_copyvalueText: "copy into question: {0} value from question {1}" => "复制到问题：{0}问题 {1} 的值"
// lg.trigger_skipText: "survey skip to the question {0}" => "调查 跳至问题{0}"
// lg.trigger_runExpressionText1: "run expression: '{0}'" => "运行表达式：“{0}”"
// lg.trigger_runExpressionText2: " and set its result into question: {0}" => "并质疑其结果：{0}"
// lg.completedHtmlOnConditionText: "show custom text for the 'Thank you page'." => "显示“感谢页面”的自定义文本。"
// lg.showAllQuestions: "All Questions" => "所有问题"
// lg.showAllActionTypes: "All Action Types" => "所有操作类型"
// lg.conditions: "Condition(s)" => "条件"
// lg.actions: "Action(s)" => "操作 （s）"
// lg.expressionEditorTitle: "Define condition(s)" => "定义条件"
// lg.actionsEditorTitle: "Define action(s)" => "定义操作"
// lg.deleteAction: "Delete Action" => "删除操作"
// lg.addNewAction: "Add Action" => "添加操作"
// lg.selectedActionCaption: "Select action..." => "选择操作..."
// lg.expressionInvalid: "The logic expression is empty or invalid. Please correct it." => "逻辑表达式为空或无效。请更正。"
// lg.noActionError: "Please, add at least one action." => "请至少添加一个操作。"
// lg.actionInvalid: "Please, fix problems in your action(s)." => "请解决操作中的问题。"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "逻辑规则不完整"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "您尚未完成某些逻辑规则。如果现在离开该选项卡，更改将丢失。是否仍要离开选项卡而不完成更改？"
// lg.uncompletedRule_apply: "Yes" => "是的"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "不，我想完成规则"
// pe.save: "Save" => "救"
// pe.clear: "Clear" => "清楚"
// pe.saveTooltip: "Save" => "救"
// pe.set: "Set" => "设置"
// pe.change: "Change" => "改变"
// pe.refresh: "Refresh" => "刷新"
// pe.add: "Add" => "加"
// pe.removeItem: "Click to remove the item..." => "单击以删除该项目..."
// pe.dragItem: "Drag the item" => "拖动项目"
// pe.back: "Return without saving" => "退货而不保存"
// pe.backTooltip: "Return without saving" => "退货而不保存"
// pe.saveAndBack: "Save and return" => "保存并返回"
// pe.saveAndBackTooltip: "Save and return" => "保存并返回"
// pe.doneEditing: "Done" => "做"
// pe.showChoices: "Show Choices" => "显示选项"
// pe.emptyValue: "Value is empty" => "值为空"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "值“{0}”不是唯一的"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "请将项目数量限制在{0}到{1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "您可以按以下格式设置数据：\n值 1|文本\n值2"
// pe.itemSelectorEmpty: "Please select the element" => "请选择元素"
// pe.conditionActionEmpty: "Please select the action" => "请选择操作"
// pe.conditionSelectPage: "Select page..." => "选择页面..."
// pe.conditionSelectPanel: "Select panel..." => "选择面板..."
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "在提交调查之前预览答案"
// pe.overridingPropertyPrefix: "Set by " => "设置者"
// pe.propertyIsNoUnique: "Please enter a unique value" => "请输入唯一值"
// pe.propertyNameIsNotUnique: "Please enter a unique name" => "请输入唯一名称"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "不要使用保留字：“项目”、“选项”、“面板”、“行”。"
// pe.listIsEmpty: "No items have been added yet" => "尚未添加任何项目"
// pe.listIsEmpty@choices: "No choices have been added yet" => "尚未添加任何选项"
// pe.addNew@choices: "Add a choice" => "添加选项"
// pe.expressionIsEmpty: "Expression is empty" => "表达式为空"
// choicesbyurl.valueName: "Get values from the following JSON field" => "从以下 JSON 字段中获取值"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "从以下 JSON 字段获取图像网址"
// pe.allowEmptyResponse: "Allow empty response" => "允许空响应"
// pe.titlePlaceholder: "Title" => "标题"
// pe.surveyTitlePlaceholder: "Survey Title" => "调查标题"
// pe.pageTitlePlaceholder: "Page {num}" => "页数 {num}"
// pe.descriptionPlaceholder: "Description" => "描述"
// pe.surveyDescriptionPlaceholder: "Description" => "描述"
// pe.pageDescriptionPlaceholder: "Description" => "描述"
// pe.isAllRowRequired: "Require answer for all rows" => "要求所有行都回答"
// pe.cols: "Columns" => "列"
// pe.buildExpression: "Build" => "建"
// pe.editExpression: "Edit" => "编辑"
// pe.and: "and" => "和"
// pe.or: "or" => "或"
// pe.remove: "Remove" => "删除"
// pe.addCondition: "Add Condition" => "添加条件"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "选择一个问题以开始配置条件。"
// pe.if: "If" => "如果"
// pe.then: "then" => "然后"
// pe.setToName: "Target question" => "目标问题"
// pe.fromName: "Question to copy answer from" => "要从中复制答案的问题"
// pe.gotoName: "Question to skip to" => "要跳到的问题"
// pe.ruleIsNotSet: "Rule is incorrect" => "规则不正确"
// pe.includeIntoResult: "Include into survey results" => "包含在调查结果中"
// pe.expandCollapseTitle: "Expand/collapse title" => "展开/折叠标题"
// pe.simulator: "Select device type" => "选择设备类型"
// pe.landscapeOrientation: "Switch to landscape orientation" => "切换到横向"
// pe.portraitOrientation: "Switch to portrait orientation" => "切换到纵向"
// pe.previewText: "Preview Answers button text" => "“预览答案”按钮文本"
// pe.editText: "Edit Answer button text" => "编辑应答按钮文本"
// image.imageHeight: "Image height (in CSS-accepted values)" => "图片高度（以 CSS 接受的值为单位）"
// image.imageWidth: "Image width (in CSS-accepted values)" => "图像宽度（以 CSS 接受的值为单位）"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "完成页面的时间限制（以秒为单位）"
// question.page: "Parent page" => "父页面"
// pe.noEntriesText: "Empty entries text" => "空条目文本"
// pe.setValue: "Answer" => "答"
// pe.dataFormat: "Image format" => "图像格式"
// pe.allowAddRows: "Allow adding rows" => "允许添加行"
// pe.allowRemoveRows: "Allow removing rows" => "允许删除行"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "允许行拖放"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "如果指定确切的图像宽度或高度，则不适用。"
// pe.minImageWidth: "Minimum image width" => "最小图像宽度"
// pe.maxImageWidth: "Maximum image width" => "最大图像宽度"
// pe.minImageHeight: "Minimum image height" => "最小图像高度"
// pe.maxImageHeight: "Maximum image height" => "最大图像高度"
// surveyvalidator.text: "Error message" => "错误信息"
// surveyvalidator.expression: "Validation expression" => "验证表达式"
// pe.logo: "Logo (URL or base64-encoded string)" => "徽标（URL 或 base64 编码的字符串）"
// pe.questionsOnPageMode: "Survey structure" => "调查结构"
// pe.maxTextLength: "Maximum answer length (in characters)" => "最大答案长度（以字符为单位）"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "最大注释长度（以字符为单位）"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "如有必要，自动展开评论区域"
// pe.allowResizeComment: "Allow users to resize text areas" => "允许用户调整文本区域的大小"
// pe.textUpdateMode: "Update text question value" => "更新文本问题值"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "将焦点放在第一个无效答案上"
// pe.checkErrorsMode: "Run validation" => "运行验证"
// pe.navigateToUrl: "Navigate to URL" => "导航到网址"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "动态网址"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "用于显示用户是否已填写此调查的标记"
// pe.completedHtml: "Survey Complete page markup" => "调查完成页面标记"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "动态调查完成页面标记"
// pe.loadingHtml: "Markup to show while survey model is loading" => "加载调查模型时要显示的标记"
// pe.commentText: "Comment area text" => "注释区文本"
// pe.autocomplete: "Autocomplete type" => "自动完成类型"
// pe.labelTrue: "\"True\" label" => "“真实”标签"
// pe.labelFalse: "\"False\" label" => "“虚假”标签"
// pe.allowClear: "Show the Clear button" => "显示“清除”按钮"
// pe.displayStyle: "Value display style" => "值显示样式"
// pe.format: "Formatted string" => "带格式的字符串"
// pe.maximumFractionDigits: "Maximum fractional digits" => "最大小数位数"
// pe.minimumFractionDigits: "Minimum fractional digits" => "最小小数位数"
// pe.useGrouping: "Display grouping separators" => "显示分组分隔符"
// pe.allowMultiple: "Allow multiple files" => "允许多个文件"
// pe.allowImagesPreview: "Preview images" => "预览图像"
// pe.acceptedTypes: "Accepted file types" => "接受的文件类型"
// pe.waitForUpload: "Wait for the upload to complete" => "等待上传完成"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "确认文件删除"
// pe.detailPanelMode: "Detail panel location" => "详细信息面板位置"
// pe.minRowCount: "Minimum row count" => "最小行数"
// pe.maxRowCount: "Maximum row count" => "最大行数"
// pe.confirmDelete: "Confirm row deletion" => "确认删除行"
// pe.confirmDeleteText: "Confirmation message" => "确认消息"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "确认面板删除"
// pe.panelCount: "Initial panel count" => "初始面板计数"
// pe.minPanelCount: "Minimum panel count" => "最小面板数"
// pe.maxPanelCount: "Maximum panel count" => "最大面板数"
// pe.panelsState: "Inner panel expand state" => "内面板展开状态"
// pe.templateDescription: "Description template" => "描述模板"
// pe.templateTitle: "Title template" => "标题模板"
// pe.panelPrevText: "Previous Panel button tooltip" => "“上一个面板”按钮工具提示"
// pe.panelNextText: "Next Panel button tooltip" => "“下一个面板”按钮工具提示"
// pe.showRangeInProgress: "Show progress bar" => "显示进度条"
// pe.templateTitleLocation: "Question title location" => "问题标题位置"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "“删除面板”按钮位置"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "如果没有行，则隐藏问题"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "如果没有行，则隐藏列"
// pe.rateValues: "Custom rate values" => "自定义费率值"
// pe.rateCount: "Rate count" => "速率计数"
// pe.autoGenerate: "How to specify rate values?" => "如何指定速率值？"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "如果问题不包含任何选项，则隐藏问题"
// pe.hideNumber: "Hide question number" => "隐藏问题编号"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "最小宽度（以 CSS 接受的值为单位）"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "最大宽度（以 CSS 接受的值为单位）"
// pe.width: "Width (in CSS-accepted values)" => "宽度（以 CSS 接受的值为单位）"
// pe.showHeader: "Show column headers" => "显示列标题"
// pe.horizontalScroll: "Show horizontal scrollbar" => "显示水平滚动条"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "最小列宽（以 CSS 接受的值为单位）"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "行标题宽度（以 CSS 接受的值为单位）"
// pe.valueTrue: "\"True\" value" => "“真”值"
// pe.valueFalse: "\"False\" value" => "“假”值"
// pe.minErrorText: "\"Value is below minimum\" error message" => "“值低于最小值”错误消息"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "“值超过最大值”错误消息"
// pe.otherErrorText: "\"Empty comment\" error message" => "“空评论”错误消息"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "“非唯一键值”错误消息"
// pe.minSelectedChoices: "Minimum selected choices" => "最少选择的选项"
// pe.maxSelectedChoices: "Maximum selected choices" => "最大选定选项数"
// pe.showClearButton: "Show the Clear button" => "显示“清除”按钮"
// pe.showNumber: "Show panel number" => "显示面板编号"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "徽标宽度（以 CSS 接受的值为单位）"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "徽标高度（以 CSS 接受的值为单位）"
// pe.readOnly: "Read-only" => "只读"
// pe.enableIf: "Editable if" => "可编辑，如果"
// pe.emptyRowsText: "\"No rows\" message" => "“无行”消息"
// pe.size: "Input field size (in characters)" => "输入字段大小（以字符为单位）"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "单独的特殊选项（无、其他、全选）"
// pe.choicesFromQuestion: "Copy choices from the following question" => "复制以下问题的选项"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "要复制哪些选项？"
// pe.showCommentArea: "Show the comment area" => "显示评论区域"
// pe.commentPlaceholder: "Comment area placeholder" => "注释区占位符"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "将速率描述显示为极值"
// pe.rowsOrder: "Row order" => "行顺序"
// pe.columnsLayout: "Column layout" => "列布局"
// pe.columnColCount: "Nested column count" => "嵌套列计数"
// pe.state: "Panel expand state" => "面板展开状态"
// pe.correctAnswer: "Correct Answer" => "正确答案"
// pe.defaultPanelValue: "Default Values" => "默认值"
// pe.cells: "Cell Texts" => "单元格文本"
// pe.keyName: "Key column" => "键列"
// itemvalue.text: "Alt text" => "可选文字"
// pe.logoPosition: "Logo position" => "徽标位置"
// pe.addLogo: "Add logo..." => "添加徽标..."
// pe.changeLogo: "Change logo..." => "更改徽标..."
// logoPositions.none: "Remove logo" => "删除徽标"
// logoPositions.left: "Left" => "左"
// logoPositions.right: "Right" => "右"
// logoPositions.top: "On the top" => "在顶部"
// logoPositions.bottom: "In the bottom" => "在底部"
// tabs.items: "Items" => "项目"
// tabs.requiredIf: "Required If" => "如果"
// tabs.numbering: "Numbering" => "编号"
// tabs.pages: "Pages" => "页面"
// tabs.calculatedValues: "Calculated Values" => "计算值"
// tabs.triggers: "Triggers" => "触发器"
// tabs.templateTitle: "Title template" => "标题模板"
// tabs.totals: "Totals" => "总数"
// tabs.logic: "Logic" => "逻辑"
// tabs.layout: "Layout" => "布局"
// tabs.data: "Data" => "数据"
// tabs.validation: "Validation" => "验证"
// tabs.cells: "Cell Texts" => "单元格文本"
// tabs.showOnCompleted: "Survey Complete" => "调查完成"
// tabs.logo: "Logo in Survey Title" => "调查标题中的徽标"
// tabs.slider: "Slider" => "滑 块"
// tabs.expression: "Expression" => "表达"
// tabs.others: "Others" => "别人"
// pe.choicesVisibleIf: "Choices are visible if" => "在以下情况下，选项可见"
// pe.choicesEnableIf: "Choices are selectable if" => "在以下情况下，可以选择选项"
// pe.columnsEnableIf: "Columns are visible if" => "在以下情况下，列可见"
// pe.rowsEnableIf: "Rows are visible if" => "在以下情况下，行可见"
// pe.indent: "Add indents" => "添加缩进"
// panel.indent: "Add outer indents" => "添加外部缩进"
// pe.innerIndent: "Add inner indents" => "添加内部缩进"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "从最后一行获取默认值"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "从最后一个面板中获取默认值"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "按回车键编辑"
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "按回车键编辑项目，按删除按钮删除项目，按 Alt 加向上箭头或向下箭头移动项目"
// pe.triggerGotoName: "Go to the question" => "转到问题"
// pe.triggerRunExpressionEmpty: "Please enter a valid expression" => "请输入有效的表达式"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "在此处键入表达式..."
// pe.noFile: "No file choosen" => "未选择任何文件"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "如果问题被隐藏，则清除该值"
// pe.valuePropertyName: "Value property name" => "值属性名称"
// pe.searchEnabled: "Enable search" => "启用搜索"
// pe.hideSelectedItems: "Hide selected items" => "隐藏所选项目"
// pe.closeOnSelect: "Close the dropdown after selection" => "选择后关闭下拉列表"
// pe.signatureWidth: "Signature width" => "签名宽度"
// pe.signatureHeight: "Signature height" => "标志性高度"
// pe.verticalAlign: "Vertical alignment" => "垂直对齐"
// pe.alternateRows: "Alternate rows" => "交替行"
// pe.columnsVisibleIf: "Columns are visible if" => "在以下情况下，列可见"
// pe.rowsVisibleIf: "Rows are visible if" => "在以下情况下，行可见"
// pe.otherPlaceholder: "Comment area placeholder" => "注释区占位符"
// pe.rateType: "Rate type" => "费率类型"
// pv.true: "true" => "真"
// pv.false: "false" => "假"
// pv.decimal: "decimal" => "十进制"
// pv.currency: "currency" => "货币"
// pv.percent: "percent" => "百分之"
// pv.onpanel: "Start on each panel" => "在每个面板上开始"
// pv.tab: "Tabs" => "制表符"
// pv.both: "Both" => "双"
// pv.right: "Right" => "右"
// pv.color: "color" => "颜色"
// pv.date: "date" => "日期"
// pv.datetime: "datetime" => "日期时间"
// pv.datetime-local: "datetime-local" => "日期时间-本地"
// pv.email: "email" => "电子邮件"
// pv.month: "month" => "月"
// pv.number: "number" => "数"
// pv.password: "password" => "密码"
// pv.range: "range" => "范围"
// pv.tel: "tel" => "电话"
// pv.text: "text" => "发短信"
// pv.time: "time" => "时间"
// pv.url: "url" => "网址"
// pv.week: "week" => "周"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "当问题或其面板/页面被隐藏时"
// clearInvisibleValues.none: "Never" => "从不"
// inputType.color: "Color" => "颜色"
// inputType.date: "Date" => "日期"
// inputType.datetime-local: "Date and Time" => "日期和时间"
// inputType.email: "Email" => "电子邮件"
// inputType.month: "Month" => "月"
// inputType.number: "Number" => "数"
// inputType.password: "Password" => "密码"
// inputType.range: "Range" => "范围"
// inputType.tel: "Phone Number" => "电话号码"
// inputType.text: "Text" => "发短信"
// inputType.time: "Time" => "时间"
// inputType.url: "URL" => "网址"
// inputType.week: "Week" => "周"
// pv.onValueChanging: "Before an answer is changed" => "更改答案之前"
// pv.standard: "Original structure" => "原始结构"
// pv.singlePage: "All questions on a single page" => "所有问题都在一个页面上"
// pv.questionPerPage: "Each question on an individual page" => "单个页面上的每个问题"
// pv.noPreview: "No preview" => "无预览"
// pv.showAllQuestions: "Show all questions" => "显示所有问题"
// pv.showAnsweredQuestions: "Show answered questions only" => "仅显示已回答的问题"
// pv.pages: "Completed pages" => "已完成的页面"
// pv.questions: "Answered questions" => "已回答的问题"
// pv.requiredQuestions: "Answered required questions" => "回答必填问题"
// pv.correctQuestions: "Valid answers" => "有效答案"
// pv.buttons: "Completed pages (button UI)" => "已完成的页面（按钮 UI）"
// pv.underInput: "Under the input" => "在输入下"
// pv.underTitle: "Under the title" => "在标题下"
// pv.onBlur: "On blur" => "模糊时"
// pv.onTyping: "While typing" => "打字时"
// pv.underRow: "Under the row" => "在行下"
// pv.underRowSingle: "Under the row, only one panel is visible" => "在该行下，只有一个面板可见"
// showNavigationButtons.none: "Hidden" => "隐藏"
// showProgressBar.off: "Hidden" => "隐藏"
// showTimerPanel.none: "Hidden" => "隐藏"
// showTimerPanelMode.all: "Both" => "双"
// detailPanelMode.none: "Hidden" => "隐藏"
// addRowLocation.default: "Depends on matrix layout" => "取决于矩阵布局"
// panelsState.default: "Users cannot expand or collapse panels" => "用户无法展开或折叠面板"
// panelsState.collapsed: "All panels are collapsed" => "所有面板均已折叠"
// panelsState.expanded: "All panels are expanded" => "所有面板均已展开"
// widthMode.auto: "Auto" => "自动"
// widthMode.static: "Static" => "静态的"
// widthMode.responsive: "Responsive" => "响应"
// imageFit.none: "None" => "没有"
// imageFit.contain: "Contain" => "包含"
// imageFit.cover: "Cover" => "盖"
// imageFit.fill: "Fill" => "填补"
// contentMode.auto: "Auto" => "自动"
// contentMode.image: "Image" => "图像"
// contentMode.video: "Video" => "视频"
// contentMode.youtube: "YouTube" => "优酷"
// displayMode.auto: "Auto" => "自动"
// displayMode.buttons: "Buttons" => "按钮"
// displayMode.dropdown: "Dropdown" => "下拉列表"
// rateColorMode.default: "Default" => "违约"
// autoGenerate.true: "Generate" => "生成"
// autoGenerate.false: "Enter manually" => "手动输入"
// rateType.labels: "Labels" => "标签"
// rateType.stars: "Stars" => "星星"
// rateType.smileys: "Smileys" => "笑脸"
// op.and: "and" => "和"
// op.or: "or" => "或"
// ew.modern: "Modern theme" => "现代主题"
// ew.default: "Default theme" => "默认主题"
// ew.orange: "Orange theme" => "橙色主题"
// ew.darkblue: "Darkblue theme" => "深蓝色主题"
// ew.darkrose: "Darkrose theme" => "“暗玫瑰”主题"
// ew.stone: "Stone theme" => "“石头”主题"
// ew.winter: "Winter theme" => "“冬季”主题"
// ew.winterstone: "Winter-Stone theme" => "“冬日之石”主题"
// ts.hideInvisibleElements: "Hide invisible elements" => "隐藏不可见元素"
// triggers.skiptrigger: "Skip to question" => "跳至问题"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Cookie 可防止用户两次填写同一调查问卷。"
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "调整输入字段的可见区域的大小。请使用<b>“验证→最大长度</b>”设置来限制输入长度。"
// pehelp.format: "Use {0} as a placeholder for the actual value." => "使用 {0} 作为实际值的占位符。"
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "仅当至少一列具有 Total 类型或 Total 表达式时才可见。"
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "有关详细信息，请参阅 [accept]（https://www.w3schools.com/tags/att_input_accept.asp） 属性说明。"
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "仅适用于单选组和复选框单元类型。"
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "有关详细信息，请参阅 [autocomplete]（https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete） 属性说明。"
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "如果未设置此属性，则答案将存储在 Name 属性指定的字段中。"
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "如果指定的列包含相同的值，则调查将引发“非唯一键值”错误。"
// p.multiSelect: "Allow multiple selection" => "允许多项选择"
// p.showLabel: "Show image captions" => "显示图像标题"
// p.value: "Value" => "价值"
// p.tabAlign: "Tab alignment" => "制表符对齐方式"
// p.logoFit: "Logo fit" => "徽标合身"
// p.pages: "Pages" => "页面"
// p.questions: "Questions" => "问题"
// p.calculatedValues: "Calculated values" => "计算值"
// p.surveyId: "Survey id" => "调查编号"
// p.surveyPostId: "Survey post id" => "调查帖子编号"
// p.surveyShowDataSaving: "Survey show data saving" => "调查显示数据保存"
// p.questionDescriptionLocation: "Question description location" => "问题描述位置"
// p.progressBarType: "Progress bar type" => "进度条类型"
// p.showTOC: "Show TOC" => "显示目录"
// p.tocLocation: "Toc location" => "目录位置"
// p.questionTitlePattern: "Question title pattern" => "问题标题模式"
// p.widthMode: "Width mode" => "宽度模式"
// p.showBrandInfo: "Show brand info" => "显示品牌信息"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "在动态文本中使用显示值"
// p.descriptionLocation: "Description location" => "描述位置"
// p.defaultValueExpression: "Default value expression" => "默认值表达式"
// p.bindings: "Bindings" => "绑定"
// p.renderAs: "Render as" => "渲染为"
// p.attachOriginalItems: "Attach original items" => "附加原始项目"
// p.cellHint: "Cell hint" => "单元格提示"
// p.isUnique: "Is unique" => "是独一无二的"
// p.showInMultipleColumns: "Show in multiple columns" => "在多列中显示"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "最大小数位数总数"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "最小小数位数总数"
// p.detailElements: "Detail elements" => "细节元素"
// p.allowAdaptiveActions: "Allow adaptive actions" => "允许自适应操作"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "添加时显示的详细信息面板"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "选项延迟加载已启用"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "选择延迟加载页面大小"
// p.inputFieldComponent: "Input field component" => "输入字段组件"
// p.itemComponent: "Item component" => "项目组件"
// p.min: "Min" => "最小值"
// p.max: "Max" => "麦克斯"
// p.minValueExpression: "Min value expression" => "最小值表达式"
// p.maxValueExpression: "Max value expression" => "最大值表达式"
// p.step: "Step" => "步"
// p.dataList: "Data list" => "数据列表"
// p.elements: "Elements" => "元素"
// p.content: "Content" => "内容"
// p.navigationTitle: "Navigation title" => "导航标题"
// p.navigationDescription: "Navigation description" => "导航说明"
// p.longTap: "Long tap" => "长按"
// p.autoGrow: "Auto grow" => "自动增长"
// p.allowResize: "Allow resizing" => "允许调整大小"
// p.acceptCarriageReturn: "Accept carriage return" => "接受回车"
// p.displayMode: "Display mode" => "显示模式"
// p.rateType: "Rate type" => "费率类型"
// p.contentMode: "Content mode" => "内容模式"
// p.imageFit: "Image fit" => "图像贴合"
// p.altText: "Alt text" => "可选文字"
// p.height: "Height" => "高度"
// p.penColor: "Pen color" => "笔颜色"
// p.backgroundColor: "Background color" => "背景色"
// p.templateElements: "Template elements" => "模板元素"
// p.operator: "Operator" => "算子"
// p.isVariable: "Is variable" => "是可变的"
// p.runExpression: "Run expression" => "运行表达式"
// p.showCaption: "Show caption" => "显示标题"
// p.iconName: "Icon name" => "图标名称"
// p.iconSize: "Icon size" => "图标大小"
// p.precision: "Precision" => "精度"
// p.matrixDragHandleArea: "Matrix drag handle area" => "矩阵拖动手柄区域"
// p.backgroundImage: "Background image" => "背景图片"
// p.backgroundImageFit: "Background image fit" => "背景图像适合"
// p.backgroundImageAttachment: "Background image attachment" => "背景图像附件"
// p.backgroundOpacity: "Background opacity" => "背景不透明度"
// p.selectToRankEnabled: "Select to rank enabled" => "选择启用排名"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "选择以对区域布局进行排名"
// p.allowCameraAccess: "Allow camera access" => "允许摄像头访问"
// p.scaleColorMode: "Scale color mode" => "缩放颜色模式"
// p.rateColorMode: "Rate color mode" => "评价颜色模式"
// p.templateTabTitle: "Template tab title" => "模板选项卡标题"
// p.templateVisibleIf: "Template visible if" => "模板可见，如果"
// p.copyDisplayValue: "Copy display value" => "复制显示值"
// theme.--background: "Background color" => "背景色"
// theme.--background-dim-light: "Background dim light color" => "背景昏暗的光线颜色"
// theme.--primary-foreground: "Primary foreground color" => "原色前景色"
// theme.--foreground: "Foreground color" => "前景色"
// theme.--base-unit: "Base unit" => "基本单元"
// theme.groupGeneral: "General" => "常规"
// theme.groupAdvanced: "Advanced" => "高深"
// theme.themeName: "Theme" => "主题"
// theme.themeMode: "Question appearance" => "问题外观"
// theme.themeModePanels: "Default" => "违约"
// theme.themeModeLightweight: "Without Panels" => "不带面板"
// theme.themePaletteLight: "Light" => "光"
// theme.themePaletteDark: "Dark" => "黑暗"
// theme.primaryColor: "Accent color" => "强调文字颜色"
// theme.primaryDefaultColor: "Default" => "违约"
// theme.primaryDarkColor: "Hover" => "悬停"
// theme.primaryLightColor: "Selected" => "选择"
// theme.backgroundDimColor: "Background color" => "背景色"
// theme.backgroundImage: "Background image" => "背景图片"
// theme.backgroundImageFitAuto: "Auto" => "自动"
// theme.backgroundImageFitCover: "Cover" => "盖"
// theme.backgroundImageFitContain: "Contain" => "包含"
// theme.backgroundOpacity: "Opacity" => "不透明度"
// theme.backgroundImageAttachmentFixed: "Fixed" => "固定"
// theme.backgroundImageAttachmentScroll: "Scroll" => "滚动"
// theme.panelBackgroundTransparency: "Panel background opacity" => "面板背景不透明度"
// theme.questionBackgroundTransparency: "Question background opacity" => "问题背景不透明度"
// theme.questionPanel: "Panel background and corner radius" => "面板背景和角半径"
// theme.questionTitle: "Question title font" => "问题标题字体"
// theme.questionDescription: "Question description font" => "问题描述字体"
// theme.editorPanel: "Input element" => "输入元素"
// theme.editorFont: "Input element font" => "输入元素字体"
// theme.backcolor: "Default background" => "默认背景"
// theme.hovercolor: "Hover background" => "悬停背景"
// theme.borderDecoration: "Border decoration" => "边框装饰"
// theme.accentBackground: "Accent background" => "强调文字背景"
// theme.accentForeground: "Accent foreground" => "强调文字前景"
// theme.primaryForecolor: "Default color" => "默认颜色"
// theme.primaryForecolorLight: "Disabled color" => "禁用颜色"
// theme.linesColors: "Minor line colors" => "次要线条颜色"
// theme.borderDefault: "Darker" => "暗"
// theme.borderLight: "Lighter" => "打火机"
// theme.fontFamily: "Font family" => "字体系列"
// theme.fontSize: "Font size" => "字体大小"
// theme.color: "Color" => "颜色"
// theme.size: "Size" => "大小"
// theme.fontWeightRegular: "Regular" => "定期"
// theme.fontWeightHeavy: "Heavy" => "重"
// theme.fontWeightSemiBold: "Semi-bold" => "半粗体"
// theme.fontWeightBold: "Bold" => "大胆"
// theme.scale: "Scale" => "规模"
// theme.cornerRadius: "Corner radius" => "拐角半径"
// theme.surveyTitle: "Survey title font" => "调查标题字体"
// theme.pageTitle: "Page title font" => "页面标题字体"
// theme.pageDescription: "Page description font" => "页面描述字体"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "添加阴影效果"
// theme.opacity: "Opacity" => "不透明度"
// theme.boxShadowBlur: "Blur" => "模糊"
// theme.boxShadowSpread: "Spread" => "传播"
// theme.boxShadowDrop: "Drop" => "落"
// theme.boxShadowInner: "Inner" => "内"
// theme.questionShadow: "Shadow effects" => "阴影效果"
// theme.editorShadow: "Input element shadow effects" => "输入元素阴影效果"
// names.default: "Default" => "违约"
// names.contrast: "Contrast" => "反差"
// names.plain: "Plain" => "平原"
// names.simple: "Simple" => "简单"
// names.blank: "Blank" => "空白"
// names.double: "Double" => "双"
// names.bulk: "Bulk" => "散装"
// names.pseudo-3d: "Pseudo 3D" => "伪 3D"
// names.playful: "Playful" => "好玩"
// names.ultra: "Ultra" => "超"
// colors.teal: "Teal" => "水鸭"
// colors.blue: "Blue" => "蓝"
// colors.purple: "Purple" => "紫色"
// colors.orchid: "Orchid" => "兰花"
// colors.tulip: "Tulip" => "郁金香"
// colors.brown: "Brown" => "棕色"
// colors.green: "Green" => "绿"
// names.sharp: "Sharp" => "锋利"
// names.borderless: "Borderless" => "无国界"
// names.flat: "Flat" => "平"
// names.doubleborder: "Double Border" => "双边框"
// names.layered: "Layered" => "分层的"
// names.solid: "Solid" => "固体"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "您确定要删除此语言的所有字符串吗？"
// ed.themeResetButton: "Reset theme settings to default" => "将主题设置重置为默认值"
// theme.placeholderColor: "Placeholder color" => "占位符颜色"
// ed.themeSettings: "Theme Settings" => "主题设置"
// ed.themeSettingsTooltip: "Open theme settings" => "打开主题设置"
// pe.resetToDefaultCaption: "Reset" => "重置"
// pv.file: "Local files" => "本地文件"
// pv.camera: "Camera" => "照相机"
// pv.file-camera: "Local files or camera" => "本地文件或相机"
// ed.translateUsigAI: "Auto-translate All" => "自动翻译全部"
// ed.translationDialogTitle: "Untranslated strings" => "未翻译的字符串"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "请输入至少{0}项目"
// lg.question_resetValueName: "Reset question value" => "重置问题值"
// lg.column_resetValue: "Reset column value" => "重置列值"
// pe.markRequired: "Mark as required" => "标记为必填"
// pe.removeRequiredMark: "Remove the required mark" => "删除所需的标记"
// p.resetValueIf: "Reset value if" => "如果出现以下情况，则重置值"
// lg.question_setValueName: "Set question value" => "设置问题值"
// lg.column_resetValueName: "Reset column value" => "重置列值"
// lg.column_setValueName: "Set column value" => "设置列值"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => "其结果将分配给目标问题的表达式。"
// survey.title: "Title" => "标题"
// page.title: "Title" => "标题"
// p.setValueIf: "Set value if" => "设置值，如果"
// theme.groupHeader: "Header" => "页眉"
// theme.coverTitleForecolor: "Title forecolor" => "标题前彩"
// theme.coverOverlapEnabled: "Overlap" => "重叠"
// theme.backgroundImageFitFill: "Stretch" => "伸展"
// theme.backgroundImageFitTile: "Tile" => "瓦"
// theme.headerView: "View" => "视图"
// theme.headerViewBasic: "Basic" => "基本"
// theme.headerViewAdvanced: "Advanced" => "高深"
// theme.coverInheritWidthFrom: "Content area width" => "内容区域宽度"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "与调查相同"
// theme.coverInheritWidthFromPage: "Fit to page" => "适合页面"
// theme.coverTextAreaWidth: "Text width" => "文本宽度"
// theme.coverBackgroundColorSwitch: "Background color" => "背景色"
// theme.coverBackgroundColorNone: "None" => "没有"
// theme.coverBackgroundColorAccentColor: "Accent color" => "强调文字颜色"
// theme.coverBackgroundColorCustom: "Custom" => "习惯"
// theme.horizontalAlignmentLeft: "Left" => "左"
// theme.horizontalAlignmentCenter: "Center" => "中心"
// theme.horizontalAlignmentRight: "Right" => "右"
// theme.verticalAlignmentTop: "Top" => "返回页首"
// theme.verticalAlignmentMiddle: "Middle" => "中间"
// theme.verticalAlignmentBottom: "Bottom" => "底"
// lg.question_resetValueText: "reset value for question: {0}" => "重置问题的值：{0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "分配值：{1}问题：{0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "重置列的单元格值：{0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "将单元格值：{1}分配给列：{0}"
// ed.surveyJsonExportButton: "Export" => "出口"
// ed.surveyJsonImportButton: "Import" => "进口"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "复制到剪贴板"
// pe.filePlaceholder: "File placeholder text" => "文件占位符文本"
// pe.photoPlaceholder: "Photo placeholder text" => "照片占位符文本"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "文件或照片占位符文本"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "当“源类型”为“本地文件”或相机不可用时适用"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "当“源类型”为“相机”时适用。"
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "当“源类型”为“本地文件或相机”时适用。"
// theme.groupBackground: "Background" => "背景"
// theme.groupAppearance: "Appearance" => "外观"
// theme.coverDescriptionForecolor: "Description forecolor" => "描述前彩"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "你真的要重置主题吗？您的所有自定义项都将丢失。"
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "是，重置主题"
// theme.groupBackground: "Background" => "背景"
// theme.groupAppearance: "Appearance" => "外观"
// theme.coverDescriptionForecolor: "Description forecolor" => "描述前彩"
// theme.coverInheritWidthFromContainer: "Fit to container" => "适合容器"
// signaturepad.showPlaceholder: "Show the placeholder" => "显示占位符"
// signaturepad.placeholder: "Placeholder text" => "占位符文本"
// theme.surveyDescription: "Survey description font" => "调查描述字体"
// ed.prevFocus: "Focus previous" => "焦点 上一页"
// ed.nextFocus: "Focus next" => "接下来的重点"
// ed.saveTheme: "Save Theme" => "保存主题"
// ed.saveThemeTooltip: "Save Theme" => "保存主题"
// lg.page_requireName: "Make page required" => "将页面设为必填项"
// lg.panel_requireName: "Make page required" => "将页面设为必填项"
// signaturepad.signatureWidth: "Signature area width" => "签名区域宽度"
// signaturepad.signatureHeight: "Signature area height" => "签名区域高度"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "自动缩放签名区域"
// signaturepad.penMinWidth: "Minimum pen width" => "最小笔宽"
// signaturepad.penMaxWidth: "Maximum pen width" => "最大笔宽"
// theme.logoPosition: "Logo position" => "徽标位置"
// theme.coverTitlePosition: "Title position" => "职称位置"
// theme.coverDescriptionPosition: "Description position" => "描述位置"
// ed.propertyGridNoResultsFound: "No results found" => "未找到结果"
// pv.leftRight: "Left and right" => "左和右"
// p.sourceType: "Source type" => "源类型"
// p.fitToContainer: "Fit to container" => "适合容器"
// p.setValueExpression: "Set value expression" => "设置值表达式"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "选项是从 Web 服务加载的。"
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "前往“设置”"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "加载选项的预览"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "防止行中出现重复响应"
// theme.advancedMode: "Advanced mode" => "高级模式"
// theme.backgroundCornerRadius: "Background and corner radius" => "背景和圆角半径"
// theme.colorsTitle: "Colors" => "颜色"
// theme.font: "Font" => "字体"
// theme.lines: "Lines" => "线"
// theme.titleFont: "Title font" => "标题字体"
// theme.descriptionFont: "Description font" => "描述字体"
// theme.shadow: "Shadow effects" => "阴影效果"
// ed.translateUsigAIFrom: "Translate from: " => "翻译语言组合："
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "允许“拒绝应答”选项"
// pe.showDontKnowItem: "Allow the Don't Know option" => "允许“不知道”选项"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "允许“拒绝应答”选项"
// pe.showDontKnowItem: "Allow the Don't Know option" => "允许“不知道”选项"
// pv.contain: "Contain" => "包含"
// pv.cover: "Cover" => "盖"
// pv.fill: "Fill" => "填补"
