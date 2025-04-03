import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "测试问卷",
    theme: "主题",
    translation: "转换",
    designer: "问卷设计器",
    json: "JSON 编辑器",
    logic: "逻辑"
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
  toolboxCategories: {
    general: "一般",
    choice: "选择题",
    text: "文本输入问题",
    containers: "器皿",
    matrix: "矩阵问题",
    misc: "杂项"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "默认语言 ({0})",
    survey: "调查问卷",
    settings: "问卷设置",
    settingsTooltip: "打开设置",
    surveySettings: "调查设置",
    surveySettingsTooltip: "调查设置",
    themeSettings: "主题设置",
    themeSettingsTooltip: "主题设置",
    creatorSettingTitle: "Creator 设置",
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
    defaultV2Theme: "违约",
    modernTheme: "摩登",
    defaultTheme: "默认（旧版）",
    testSurveyAgain: "再次测试问卷",
    testSurveyWidth: "问卷宽度: ",
    navigateToMsg: "你必须导航到",
    saveSurvey: "保存问卷",
    saveSurveyTooltip: "保存调查",
    saveTheme: "保存主题",
    saveThemeTooltip: "保存主题",
    jsonHideErrors: "隐藏错误",
    jsonShowErrors: "显示错误",
    undo: "撤销",
    redo: "恢复",
    undoTooltip: "撤消上次更改",
    redoTooltip: "重做更改",
    expandTooltip: "扩大",
    collapseTooltip: "崩溃",
    expandAllTooltip: "全部展开",
    collapseAllTooltip: "全部折叠",
    zoomInTooltip: "放大",
    zoom100Tooltip: "缩放到 100%",
    zoomOutTooltip: "缩小",
    lockQuestionsTooltip: "锁定问题的展开/折叠状态",
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
    toolboxFilteredTextPlaceholder: "键入以搜索...",
    toolboxNoResultsFound: "未找到结果",
    propertyGridFilteredTextPlaceholder: "键入以搜索...",
    propertyGridNoResultsFound: "未找到结果",
    propertyGridPlaceholderTitle: "开始配置表单",
    propertyGridPlaceholderDescription: "单击任何类别图标以浏览调查设置。将测量元素添加到设计图面后，其他设置将变为可用。",
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
    addLanguageTooltip: "添加语言",
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
    translationSource: "源：",
    translationTarget: "目标：",
    translationYouTubeNotSupported: "不支持 YouTube 链接。",
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
    pagePlaceHolder: "页面为空。从工具箱中拖动元素或单击下面的按钮。",
    imagePlaceHolder: "将图像拖放到此处或单击下面的按钮并选择要上传的图像",
    surveyPlaceHolderMobile: "单击下面的“添加问题”按钮开始创建表单。",
    surveyPlaceholderTitle: "您的表单为空",
    surveyPlaceholderTitleMobile: "您的表单为空",
    surveyPlaceholderDescription: "从工具箱中拖动元素或单击下面的按钮。",
    surveyPlaceholderDescriptionMobile: "从工具箱中拖动元素或单击下面的按钮。",
    previewPlaceholderTitle: "无预览",
    previewPlaceholderTitleMobile: "无预览",
    previewPlaceholderDescription: "调查不包含任何可见元素。",
    previewPlaceholderDescriptionMobile: "调查不包含任何可见元素。",
    translationsPlaceholderTitle: "无需翻译字符串",
    translationsPlaceholderTitleMobile: "无需翻译字符串",
    translationsPlaceholderDescription: "将元素添加到表单或更改工具栏中的字符串筛选器。",
    translationsPlaceholderDescriptionMobile: "将元素添加到表单或更改工具栏中的字符串筛选器。",
    pagePlaceHolderMobile: "单击下面的“添加问题”按钮，向页面添加新元素。",
    panelPlaceHolderMobile: "单击下面的“添加问题”按钮，将新元素添加到面板中。",
    imagePlaceHolderMobile: "点击下面的按钮，选择要上传的图片",
    imageChooseImage: "选择图像",
    addNewTypeQuestion: "添加{0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[徽标]",
    choices_Item: "项目",
    selectFile: "选择文件",
    removeFile: "删除文件",
    lg: {
      addNewItem: "添加新规则",
      empty_tab: "创建规则以自定义调查流。",
      logicPlaceholderTitle: "无逻辑规则",
      logicPlaceholderTitleMobile: "无逻辑规则",
      logicPlaceholderDescription: "创建规则以自定义调查流程。",
      logicPlaceholderDescriptionMobile: "创建规则以自定义调查流程。",
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
      question_resetValueText: "重置问题的值：{0}", //{0} question name.
      question_setValueText: "分配值：{1}问题：{0}",
      column_visibilityText: "使问题{1}的列{0}可见", //{0} column name, {1} question name
      column_enableText: "使问题{1}列{0}启用", //{0} column name, {1} question name
      column_requireText: "{0}将问题{1}列为必填项", //{0} column name, {1} question name
      column_resetValueText: "重置列的单元格值：{0}", //{0} column name
      column_setValueText: "将单元格值：{1}分配给列：{0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "面板名称",
      title: "面板标题",
      description: "面板说明",
      visibleIf: "如果出现以下情况，则使面板可见",
      requiredIf: "如果出现以下情况，则使面板成为必需的",
      questionOrder: "小组内的问题顺序",
      page: "父页面",
      startWithNewLine: "在新行上显示面板",
      state: "面板折叠状态",
      width: "内嵌面板宽度",
      minWidth: "最小面板宽度",
      maxWidth: "最大面板宽度",
      showNumber: "为此面板编号"
    },
    panellayoutcolumn: {
      effectiveWidth: "有效宽度，%",
      questionTitleWidth: "问题标题宽度，px"
    },
    paneldynamic: {
      name: "面板名称",
      title: "面板标题",
      description: "面板说明",
      visibleIf: "如果出现以下情况，则使面板可见",
      requiredIf: "如果出现以下情况，则使面板成为必需的",
      page: "将面板移动到页面",
      startWithNewLine: "在新行上显示面板",
      state: "面板折叠状态",
      width: "内嵌面板宽度",
      minWidth: "最小面板宽度",
      maxWidth: "最大面板宽度",
      confirmDelete: "确认面板删除",
      templateDescription: "面板描述模式",
      templateTitle: "面板标题模式",
      noEntriesText: "空面板文本",
      templateTabTitle: "选项卡标题模式",
      tabTitlePlaceholder: "选项卡标题占位符",
      templateVisibleIf: "如果出现以下情况，则使单个面板可见",
      showNumber: "为面板编号",
      titleLocation: "面板标题对齐方式",
      descriptionLocation: "面板描述对齐方式",
      templateQuestionTitleLocation: "问题标题对齐方式",
      templateQuestionTitleWidth: "问题标题宽度",
      templateErrorLocation: "错误消息对齐",
      newPanelPosition: "新面板位置",
      showRangeInProgress: "显示进度条",
      keyName: "防止在以下问题中重复回答"
    },
    question: {
      name: "问题名称",
      title: "问题标题",
      description: "问题描述",
      visibleIf: "如果出现以下情况，请使问题可见",
      requiredIf: "如果出现以下情况，则将问题设为必填项",
      page: "父页面",
      state: "问题框折叠状态",
      showNumber: "为这个问题编号",
      titleLocation: "问题标题对齐方式",
      descriptionLocation: "问题描述对齐方式",
      errorLocation: "错误消息对齐",
      indent: "增加内部缩进",
      width: "内联问题宽度",
      minWidth: "最小问题宽度",
      maxWidth: "最大问题宽度",
      textUpdateMode: "更新输入字段值"
    },
    signaturepad: {
      signatureWidth: "签名区域宽度",
      signatureHeight: "签名区域高度",
      signatureAutoScaleEnabled: "自动缩放签名区域",
      showPlaceholder: "显示占位符",
      placeholder: "占位符文本",
      placeholderReadOnly: "只读或预览模式下的占位符文本",
      allowClear: "在签名区域内显示“清除”按钮",
      penMinWidth: "最小笔宽",
      penMaxWidth: "最大笔宽",
      penColor: "描边颜色"
    },
    comment: {
      rows: "输入字段高度（以行为单位）"
    },
    showQuestionNumbers: "显示问题编号",
    questionStartIndex: "问题起始标志 (1, 2 or 'A', 'a')",
    expression: {
      name: "表达式名称",
      title: "表达式标题",
      description: "表达式说明",
      expression: "表达"
    },
    trigger: {
      expression: "表达"
    },
    calculatedvalue: {
      expression: "表达"
    },
    // survey templates
    survey: {
      title: "标题",
      description: "调查说明",
      readOnly: "将调查设为只读"
    },
    page: {
      name: "页面名称",
      title: "标题",
      description: "页面描述",
      visibleIf: "如果出现以下情况，则使页面可见",
      requiredIf: "如果出现以下情况，则使页面为必填项",
      timeLimit: "完成页面的时间限制（以秒为单位）",
      questionOrder: "页面上的问题顺序"
    },
    matrixdropdowncolumn: {
      name: "列名称",
      title: "专栏标题",
      isUnique: "防止重复响应",
      width: "列宽",
      minWidth: "最小列宽",
      rows: "输入字段高度（以行为单位）",
      visibleIf: "如果出现以下情况，则使列可见",
      requiredIf: "如果满足以下条件，则使该列为必填项",
      showInMultipleColumns: "每个选项都在单独的列中"
    },
    multipletextitem: {
      name: "名字",
      title: "标题"
    },
    masksettings: {
      saveMaskedValue: "在调查结果中保存掩码值"
    },
    patternmask: {
      pattern: "价值模式"
    },
    datetimemask: {
      min: "最小值",
      max: "最大值"
    },
    numericmask: {
      allowNegativeValues: "允许负值",
      thousandsSeparator: "千分隔符",
      decimalSeparator: "小数点分隔符",
      precision: "值精度",
      min: "最小值",
      max: "最大值"
    },
    currencymask: {
      prefix: "货币前缀",
      suffix: "货币后缀"
    },
    imageHeight: "图片高度",
    imageWidth: "图片宽度",
    valueName: "值名",
    defaultDisplayValue: "动态文本的默认显示值",
    rateDescriptionLocation: "标签对齐",
    size: "输入字段大小（以字符为单位）",
    cellErrorLocation: "单元格错误消息对齐方式",
    enabled: "启用",
    disabled: "禁用",
    inherit: "继承",
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
    "listIsEmpty@columns": "您还没有任何列",
    "listIsEmpty@gridLayoutColumns": "您还没有布局列",
    "listIsEmpty@rows": "您还没有任何行",
    "listIsEmpty@validators": "尚无任何验证规则",
    "listIsEmpty@calculatedValues": "您还没有任何自定义变量",
    "listIsEmpty@triggers": "您还没有任何触发器",
    "listIsEmpty@navigateToUrlOnCondition": "您还没有任何链接",
    "listIsEmpty@pages": "您还没有任何页面",
    "addNew@choices": "添加选项",
    "addNew@columns": "添加新列",
    "addNew@rows": "添加新行",
    "addNew@validators": "添加新规则",
    "addNew@calculatedValues": "添加新变量",
    "addNew@triggers": "添加新触发器",
    "addNew@navigateToUrlOnCondition": "添加新 URL",
    "addNew@pages": "添加新页面",
    expressionIsEmpty: "表达式为空",
    value: "值",
    text: "显示文本",
    rowid: "行号",
    imageLink: "图片链接",
    columnEdit: "编辑列: {0}",
    itemEdit: "编辑选项: {0}",
    url: "URL",
    path: "路径",
    choicesbyurl: {
      url: "Web 服务的 URL",
      valueName: "从以下 JSON 字段中获取值"
    },
    titleName: "标题名",
    imageLinkName: "从以下 JSON 字段获取图像网址",
    allowEmptyResponse: "允许空响应",
    titlePlaceholder: "标题",
    surveyTitlePlaceholder: "调查标题",
    pageTitlePlaceholder: "页数 {num}",
    startPageTitlePlaceholder: "起始页",
    descriptionPlaceholder: "描述",
    surveyDescriptionPlaceholder: "描述",
    pageDescriptionPlaceholder: "描述",
    textWrapEnabled: "换行选项",
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
    allowCustomChoices: "允许自定义选项",
    visible: "是否可见?",
    isRequired: "是否为必填项?",
    markRequired: "标记为必填",
    removeRequiredMark: "删除所需的标记",
    eachRowRequired: "要求所有行都回答",
    eachRowUnique: "防止行中出现重复响应",
    requiredErrorText: "错误文字",
    startWithNewLine: "问题是否新起一行?",
    rows: "文本框行数",
    cols: "列",
    placeholder: "占位文本",
    showPreview: "是否显示图像预览?",
    storeDataAsText: "以 JSON 文本方式存储文件",
    maxSize: "文件最大尺寸 (Bytes)",
    rowCount: "默认行数",
    columnLayout: "列布局",
    addRowButtonLocation: "添加行按钮位置",
    transposeData: "将行转置为列",
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
    clearInvisibleValues: "清除隐藏值",
    cookieName: "Cookie名，避免多次运行)",
    partialSendEnabled: "切换页时保存结果",
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
    navigationButtonsLocation: "导航按钮对齐",
    showPrevButton: "显示前一页按钮 (用户可返回至前一页面)",
    firstPageIsStartPage: "调查的第一页面为起始页.",
    showCompletePage: "结尾展示完成后的页面 (completedHtml)",
    autoAdvanceEnabled: "回答本页所有问题后，自动跳转到下一页",
    autoAdvanceAllowComplete: "自动完成调查",
    showProgressBar: "显示进度条",
    progressBarLocation: "进度条对齐",
    questionTitleLocation: "问题的标题位置",
    questionTitleWidth: "问题标题宽度",
    requiredMark: "问题必填标志",
    questionTitleTemplate: "问题标题模板, 默认为: '{no}. {require} {title}'",
    questionErrorLocation: "问题错误定位",
    autoFocusFirstQuestion: "改变页面时聚焦在第一个问题",
    questionOrder: "页内问题顺序",
    timeLimit: "完成调查的最长时间",
    timeLimitPerPage: "完成调查中页面的最长时间",
    showTimer: "使用计时器",
    timerLocation: "显示计时器面板",
    timerInfoMode: "显示计时器面板模式",
    renderMode: "渲染模式",
    allowAddPanel: "允许添加面板",
    allowRemovePanel: "允许删除面板",
    addPanelText: "添加面板文本",
    removePanelText: "删除面板文本",
    isSinglePage: "在一个页面上展示所有元素",
    html: "Html",
    setValue: "答",
    dataFormat: "图像格式",
    allowAddRows: "允许添加行",
    allowRemoveRows: "允许删除行",
    allowRowReorder: "允许行拖放",
    responsiveImageSizeHelp: "如果指定确切的图像宽度或高度，则不适用。",
    minImageWidth: "最小图像宽度",
    maxImageWidth: "最大图像宽度",
    minImageHeight: "最小图像高度",
    maxImageHeight: "最大图像高度",
    minValue: "最小值",
    maxValue: "最大值",
    caseInsensitive: "不区分大小写",
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
    maxCommentLength: "最大注释长度（以字符为单位）",
    commentAreaRows: "评论区高度（以行为单位）",
    autoGrowComment: "如有必要，自动展开评论区域",
    allowResizeComment: "允许用户调整文本区域的大小",
    textUpdateMode: "更新文本问题值",
    maskType: "输入掩码类型",
    autoFocusFirstError: "将焦点放在第一个无效答案上",
    checkErrorsMode: "运行验证",
    validateVisitedEmptyFields: "验证失去焦点时的空字段",
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
    searchMode: "搜索模式",
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
    panelCount: "初始面板计数",
    minPanelCount: "最小面板数",
    maxPanelCount: "最大面板数",
    panelsState: "内面板展开状态",
    prevPanelText: "“上一个面板”按钮工具提示",
    nextPanelText: "“下一个面板”按钮工具提示",
    removePanelButtonLocation: "“删除面板”按钮位置",
    hideIfRowsEmpty: "如果没有行，则隐藏问题",
    hideColumnsIfEmpty: "如果没有行，则隐藏列",
    rateValues: "自定义费率值",
    rateCount: "速率计数",
    autoGenerate: "如何指定速率值？",
    hideIfChoicesEmpty: "如果问题不包含任何选项，则隐藏问题",
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
    logoWidth: "徽标宽度（以 CSS 接受的值为单位）",
    logoHeight: "徽标高度（以 CSS 接受的值为单位）",
    readOnly: "只读",
    enableIf: "可编辑，如果",
    noRowsText: "“无行”消息",
    separateSpecialChoices: "单独的特殊选项（无、其他、全选）",
    choicesFromQuestion: "复制以下问题的选项",
    choicesFromQuestionMode: "要复制哪些选项？",
    choiceValuesFromQuestion: "使用以下矩阵、列或面板问题中的值作为选项 ID",
    choiceTextsFromQuestion: "使用以下矩阵、列或面板问题中的值作为选择文本",
    progressBarShowPageTitles: "在进度条中显示页面标题",
    progressBarShowPageNumbers: "在进度条中显示页码",
    showCommentArea: "显示评论区域",
    commentPlaceholder: "注释区占位符",
    displayRateDescriptionsAsExtremeItems: "将速率描述显示为极值",
    rowOrder: "行顺序",
    columnsLayout: "列布局",
    columnColCount: "嵌套列计数",
    correctAnswer: "正确答案",
    defaultPanelValue: "默认值",
    cells: "单元格文本",
    fileInputPlaceholder: "选择文件或粘贴文件链接...",
    keyName: "键列",
    itemvalue: {
      visibleIf: "如果出现以下情况，则使该选项可见",
      enableIf: "如果出现以下情况，则使该选项可选"
    },
    "itemvalue@rows": {
      visibleIf: "如果出现以下情况，则使行可见",
      enableIf: "如果出现以下情况，则使行可编辑"
    },
    imageitemvalue: {
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
    previewMode: "预览模式",
    gridLayoutEnabled: "启用网格布局",
    gridLayoutColumns: "网格布局列",
    maskSettings: "蒙版设置",
    detailErrorLocation: "行扩展错误消息对齐",
    // Creator tabs
    tabs: {
      panel: {
        layout: "面板布局"
      },
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
      mask: "输入掩码设置",
      layout: {
        panel: "布局",
        question: "布局",
        base: "布局"
      },
      data: "数据",
      validation: "验证",
      cells: "单元格文本",
      showOnCompleted: "调查完成",
      logo: "调查标题中的徽标",
      slider: "滑 块",
      expression: "表达",
      questionSettings: "问题设置",
      header: "页眉",
      background: "背景",
      appearance: "外观",
      accentColors: "强调色",
      surfaceBackground: "表面背景",
      scaling: "缩放",
      others: "别人"
    },
    editProperty: "编辑属性: '{0}'",
    items: "[ 项目数量: {0} ]",
    choicesVisibleIf: "在以下情况下，选项可见",
    choicesEnableIf: "在以下情况下，可以选择选项",
    columnsEnableIf: "在以下情况下，列可见",
    rowsEnableIf: "在以下情况下，行可见",
    innerIndent: "添加内部缩进",
    copyDefaultValueFromLastEntry: "使用最后一个条目中的答案作为默认值",
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
    verticalAlign: "垂直对齐",
    alternateRows: "交替行",
    columnsVisibleIf: "在以下情况下，列可见",
    rowsVisibleIf: "在以下情况下，行可见",
    otherPlaceholder: "注释区占位符",
    filePlaceholder: "文件占位符文本",
    photoPlaceholder: "照片占位符文本",
    fileOrPhotoPlaceholder: "文件或照片占位符文本",
    rateType: "费率类型",
    url_placeholder: "例如：https://api.example.com/books",
    path_placeholder: "例如：categories.fiction",
    questionStartIndex_placeholder: "例如：a）",
    width_placeholder: "例：6in",
    minWidth_placeholder: "例如：600px",
    maxWidth_placeholder: "例：50%",
    imageHeight_placeholder: "自动",
    imageWidth_placeholder: "自动",
    itemTitleWidth_placeholder: "例：100px",
    theme: {
      themeName: "主题",
      isPanelless: "问题外观",
      editorPanel: "背景和拐角半径",
      questionPanel: "背景和拐角半径",
      primaryColor: "强调色",
      panelBackgroundTransparency: "面板背景不透明度",
      questionBackgroundTransparency: "问题背景不透明度",
      fontSize: "字体大小",
      scale: "规模",
      cornerRadius: "拐角半径",
      advancedMode: "高级模式",
      pageTitle: "标题字体",
      pageDescription: "描述字体",
      questionTitle: "标题字体",
      questionDescription: "描述字体",
      editorFont: "字体",
      backgroundOpacity: "不透明度",
      "--sjs-font-family": "字体家族",
      "--sjs-general-backcolor-dim": "背景颜色",
      "--sjs-primary-backcolor": "重音背景",
      "--sjs-primary-forecolor": "重音前景",
      "--sjs-special-red": "错误消息",
      "--sjs-shadow-small": "阴影效果",
      "--sjs-shadow-inner": "阴影效果",
      "--sjs-border-default": "颜色"
    },
    "header@header": {
      headerView: "视图",
      logoPosition: "徽标位置",
      surveyTitle: "调查标题字体",
      surveyDescription: "调查描述字体",
      headerTitle: "调查标题字体",
      headerDescription: "调查描述字体",
      inheritWidthFrom: "内容区宽度",
      textAreaWidth: "文本宽度",
      backgroundColorSwitch: "背景颜色",
      backgroundImage: "背景图片",
      backgroundImageOpacity: "不透明度",
      overlapEnabled: "重叠",
      logoPositionX: "徽标位置",
      titlePositionX: "标题位置",
      descriptionPositionX: "描述位置"
    }
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
    selected: "选择",
    unselected: "未选中",
    decimal: "十进制",
    currency: "货币",
    percent: "百分之",
    firstExpanded: "firstExpanded",
    off: "关闭",
    list: "列表",
    carousel: "旋转 木马",
    tab: "制表符",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "水平",
    vertical: "垂直",
    top: "顶",
    bottom: "底",
    topBottom: "顶和底",
    both: "双",
    left: "左",
    right: "右",
    center: "中心",
    leftRight: "左和右",
    middle: "中间",
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
    edit: "编辑",
    display: "仅显示",
    contain: "包含",
    cover: "盖",
    fill: "填补",
    next: "下一个",
    last: "最后",
    onComplete: "完成时",
    onHidden: "隐藏中",
    onHiddenContainer: "当问题或其面板/页面被隐藏时",
    clearInvisibleValues: {
      none: "从不"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "全名",
      "honorific-prefix": "前缀",
      "given-name": "名字",
      "additional-name": "中间名",
      "family-name": "姓",
      "honorific-suffix": "后缀",
      nickname: "昵称",
      "organization-title": "职称",
      username: "用户名",
      "new-password": "新密码",
      "current-password": "当前密码",
      organization: "组织名称",
      "street-address": "全街地址",
      "address-line1": "地址行 1",
      "address-line2": "地址行 2",
      "address-line3": "地址行 3",
      "address-level4": "4 级地址",
      "address-level3": "3 级地址",
      "address-level2": "2 级地址",
      "address-level1": "1 级地址",
      country: "国家代码",
      "country-name": "国家/地区名称",
      "postal-code": "邮政编码",
      "cc-name": "持卡人姓名",
      "cc-given-name": "持卡人名字",
      "cc-additional-name": "持卡人中间名",
      "cc-family-name": "持卡人姓氏",
      "cc-number": "信用卡号",
      "cc-exp": "有效期",
      "cc-exp-month": "到期月份",
      "cc-exp-year": "到期年份",
      "cc-csc": "卡安全码",
      "cc-type": "信用卡类型",
      "transaction-currency": "交易货币",
      "transaction-amount": "交易金额",
      language: "首选语言",
      bday: "生日",
      "bday-day": "生日",
      "bday-month": "生日月份",
      "bday-year": "生日年份",
      sex: "性",
      url: "网站 URL",
      photo: "个人头像",
      tel: "电话号码",
      "tel-country-code": "电话的国家代码",
      "tel-national": "全国电话号码",
      "tel-area-code": "区号",
      "tel-local": "本地电话号码",
      "tel-local-prefix": "本地电话前缀",
      "tel-local-suffix": "本地电话后缀",
      "tel-extension": "电话分机",
      email: "电子邮件地址",
      impp: "即时通讯协议"
    },
    maskType: {
      none: "没有",
      pattern: "模式",
      numeric: "数值的",
      datetime: "日期和时间",
      currency: "货币"
    },
    inputTextAlignment: {
      auto: "自动",
      left: "左",
      right: "右"
    },
    all: "全部",
    page: "页",
    survey: "问卷",
    onNextPage: "下一页时",
    onValueChanged: "值变动时",
    onValueChanging: "更改答案之前",
    questionsOnPageMode: {
      standard: "原始结构",
      singlePage: "在一个页面上显示所有问题",
      questionPerPage: "每页显示一个问题"
    },
    noPreview: "无预览",
    showAllQuestions: "显示所有问题",
    showAnsweredQuestions: "仅显示已回答的问题",
    allQuestions: "显示所有问题",
    answeredQuestions: "仅显示已回答的问题",
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
    auto: "自动",
    showNavigationButtons: {
      none: "隐藏"
    },
    timerInfoMode: {
      combined: "双"
    },
    addRowButtonLocation: {
      default: "取决于矩阵布局"
    },
    panelsState: {
      default: "用户无法展开或折叠面板",
      collapsed: "所有面板均已折叠",
      expanded: "所有面板均已展开",
      firstExpanded: "首次扩展"
    },
    widthMode: {
      static: "静态的",
      responsive: "响应"
    },
    contentMode: {
      image: "图像",
      video: "视频",
      youtube: "优酷"
    },
    displayMode: {
      buttons: "按钮",
      dropdown: "下拉列表"
    },
    rateColorMode: {
      default: "违约",
      scale: "规模"
    },
    scaleColorMode: {
      monochrome: "单色",
      colored: "彩色"
    },
    autoGenerate: {
      "true": "生成",
      "false": "手动输入"
    },
    rateType: {
      labels: "标签",
      stars: "星星",
      smileys: "笑脸"
    },
    state: {
      default: "锁"
    },
    showQuestionNumbers: {
      default: "自动编号",
      on: "自动编号",
      onPage: "在每个页面上重置",
      onpanel: "在每个面板上重置",
      onPanel: "在每个面板上重置",
      recursive: "递归编号",
      onSurvey: "在整个调查中继续",
      off: "无编号"
    },
    descriptionLocation: {
      underTitle: "在问题标题下",
      underInput: "在输入字段下"
    },
    selectToRankAreasLayout: {
      horizontal: "在选项旁边",
      vertical: "以上选择"
    },
    displayStyle: {
      decimal: "十进制",
      currency: "货币",
      percent: "百分比",
      date: "日期"
    },
    totalDisplayStyle: {
      decimal: "十进制",
      currency: "货币",
      percent: "百分比",
      date: "日期"
    },
    rowOrder: {
      initial: "源语言"
    },
    questionOrder: {
      initial: "源语言"
    },
    progressBarLocation: {
      top: "返回页首",
      bottom: "底",
      topbottom: "顶部和底部",
      aboveheader: "标题上方",
      belowheader: "标题下方",
      off: "隐藏"
    },
    sum: "和",
    count: "计数",
    min: "最小值",
    max: "麦克斯",
    avg: "平均",
    searchMode: {
      contains: "包含",
      startsWith: "开头为"
    },
    backgroundImageFit: {
      auto: "自动",
      cover: "盖",
      contain: "包含",
      fill: "伸展",
      tile: "瓦"
    },
    backgroundImageAttachment: {
      fixed: "固定",
      scroll: "滚动"
    },
    headerView: {
      basic: "基本",
      advanced: "高深"
    },
    inheritWidthFrom: {
      survey: "与调查相同",
      container: "适合容器"
    },
    backgroundColorSwitch: {
      none: "没有",
      accentColor: "强调色",
      custom: "习惯"
    },
    colorPalette: {
      light: "光",
      dark: "黑暗"
    },
    isPanelless: {
      "false": "违约",
      "true": "不带面板"
    },
    progressBarInheritWidthFrom: {
      survey: "与调查相同",
      container: "与容器相同"
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
  peplaceholder: {
    patternmask: {
      pattern: "例如：+1（999）-999-99-99"
    },
    datetimemask: {
      pattern: "例：mm/dd/yyyy"
    },
    currencymask: {
      prefix: "例：$",
      suffix: "例如：美元"
    },
    panelbase: {
      questionTitleWidth: "例如：200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "例如：30%",
      questionTitleWidth: "例如：200px"
    }
  },
  pehelp: {
    panel: {
      name: "受访者不可见的面板 ID。",
      description: "键入面板字幕。",
      visibleIf: "使用魔棒图标设置确定面板可见性的条件规则。",
      enableIf: "使用魔棒图标设置禁用面板只读模式的条件规则。",
      requiredIf: "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。",
      questionTitleLocation: "适用于此面板中的所有问题。如果要覆盖此设置，请为单个问题定义标题对齐规则。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。",
      questionTitleWidth: "当问题标题与问题框左侧对齐时，为问题标题设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。",
      questionErrorLocation: "设置与面板中所有问题相关的错误消息的位置。“继承”选项应用页面级别（如果已设置）或调查级别设置。",
      questionOrder: "保持问题的原始顺序或随机化问题。“继承”选项应用页面级别（如果已设置）或调查级别设置。",
      page: "将面板重新定位到所选页面的末尾。",
      innerIndent: "在面板内容和面板框的左边框之间添加空格或边距。",
      startWithNewLine: "取消选择以将面板与上一个问题或面板显示在一行中。如果面板是窗体中的第一个元素，则该设置不适用。",
      state: "从中选择：“展开” - 面板完整显示，可以折叠;“已折叠” - 面板仅显示标题和描述，可以展开;“已锁定” - 面板完整显示，无法折叠。",
      width: "设置面板的宽度，使其与同一行中的其他测量图元成比例。接受 CSS 值（px、%、in、pt 等）。",
      showQuestionNumbers: "为嵌套在此面板中的问题分配编号。",
      effectiveColSpan: "指定此面板在网格布局中跨越的列数。",
      gridLayoutColumns: "此表允许您配置面板中的每个网格列。它根据行中的最大元素数自动设置每列的宽度百分比。要自定义网格布局，请手动调整这些值并定义每列中所有问题的标题宽度。"
    },
    paneldynamic: {
      name: "受访者不可见的面板 ID。",
      description: "键入面板字幕。",
      visibleIf: "使用魔棒图标设置确定面板可见性的条件规则。",
      enableIf: "使用魔棒图标设置禁用面板只读模式的条件规则。",
      requiredIf: "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。",
      templateQuestionTitleLocation: "适用于此面板中的所有问题。如果要覆盖此设置，请为单个问题定义标题对齐规则。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。",
      templateQuestionTitleWidth: "当问题标题与问题框的左侧对齐时，为问题标题设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。",
      templateErrorLocation: "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。",
      errorLocation: "设置与面板中所有问题相关的错误消息的位置。“继承”选项应用页面级别（如果已设置）或调查级别设置。",
      page: "将面板重新定位到所选页面的末尾。",
      innerIndent: "在面板内容和面板框的左边框之间添加空格或边距。",
      startWithNewLine: "取消选择以将面板与上一个问题或面板显示在一行中。如果面板是窗体中的第一个元素，则该设置不适用。",
      state: "从中选择：“展开” - 面板完整显示，可以折叠;“已折叠” - 面板仅显示标题和描述，可以展开;“已锁定” - 面板完整显示，无法折叠。",
      width: "设置面板的宽度，使其与同一行中的其他测量图元成比例。接受 CSS 值（px、%、in、pt 等）。",
      templateTitle: "键入动态面板标题的模板。使用 {panelIndex} 作为面板的常规位置，使用 {visiblePanelIndex} 作为其在可见面板中的顺序。将这些占位符插入到图案中以添加自动编号。",
      templateTabTitle: "键入选项卡标题的模板。使用 {panelIndex} 表示面板的大致位置，使用 {visiblePanelIndex} 表示其在可见面板中的顺序。将这些占位符插入到图案中以添加自动编号。",
      tabTitlePlaceholder: "选项卡标题的回退文本，当选项卡标题模式未生成有意义的值时应用。",
      templateVisibleIf: "此设置允许您控制动态面板中各个面板的可见性。使用“{panel}”占位符在表达式中引用当前面板。",
      titleLocation: "此面板中的所有问题都会自动继承此设置。如果要覆盖此设置，请为单个问题定义标题对齐规则。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。",
      descriptionLocation: "“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“在面板标题下”）。",
      newPanelPosition: "定义新添加的面板的位置。默认情况下，新面板将添加到末尾。选择“下一步”以在当前面板之后插入新面板。",
      copyDefaultValueFromLastEntry: "复制上一个面板中的答案，并将其分配给下一个添加的动态面板。",
      keyName: "引用问题名称以要求用户在每个面板中为此问题提供唯一的答案。"
    },
    copyDefaultValueFromLastEntry: "复制最后一行的答案，并将其分配给下一个添加的动态行。",
    defaultValueExpression: "此设置允许您根据表达式分配默认答案值。表达式可以包括基本计算 - '{q1_id} + {q2_id}'、布尔表达式，例如 '{age} > 60'，以及函数：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。此表达式确定的值用作初始默认值，可由响应者的手动输入覆盖。",
    resetValueIf: "使用魔杖图标设置条件规则，该规则确定何时将受访者的输入重置为基于“默认值表达式”或“设置值表达式”的值，或重置为“默认答案”值（如果设置了其中任何一个）。",
    setValueIf: "使用魔杖图标设置条件规则，该规则确定何时运行“设置值表达式”，并将结果值动态分配为响应。",
    setValueExpression: "指定一个表达式，该表达式定义在满足“如果设置值”规则中的条件时要设置的值。表达式可以包括基本计算 - '{q1_id} + {q2_id}'、布尔表达式，例如 '{age} > 60'，以及函数：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。由此表达式确定的值可以被受访者的手动输入覆盖。",
    gridLayoutEnabled: "Survey Creator 允许您手动调整表单元素的内联宽度以控制布局。如果这没有产生所需的结果，您可以启用网格布局，该布局使用基于列的系统构建表单元素。要配置布局列，请选择一个页面或面板，然后使用 “Question Settings” → “Grid columns” 表格。要调整问题跨越的列数，请选择它并在 “Layout” → “Column span” 字段中设置所需的值。",
    question: {
      name: "受访者不可见的问题 ID。",
      description: "键入问题副标题。",
      visibleIf: "使用魔杖图标设置确定问题可见性的条件规则。",
      enableIf: "使用魔杖图标设置条件规则，以禁用问题的只读模式。",
      requiredIf: "使用魔杖图标设置条件规则，除非问题得到答案，否则阻止调查推进或提交。",
      startWithNewLine: "取消选择以将问题与上一个问题或面板显示在一行中。如果问题是表单中的第一个元素，则该设置不适用。",
      page: "将问题重新定位到所选页面的末尾。",
      state: "从以下选项中选择：“展开” - 问题框完整显示，可以折叠;“已折叠” - 问题框仅显示标题和描述，可以展开;“已锁定” - 问题框完整显示，无法折叠。",
      titleLocation: "覆盖在面板、页面或调查级别上定义的标题对齐规则。“继承”选项将应用任何更高级别的设置（如果已设置）或调查级别的设置（默认为“顶部”）。",
      descriptionLocation: "“继承”选项应用调查级别设置（默认为“在问题标题下”）。",
      errorLocation: "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。“继承”选项将应用调查级别设置（默认为“顶部”）。",
      indent: "在问题内容和问题框的左边框之间添加空格或边距。",
      width: "设置问题的宽度，使其与同一行中的其他调查元素成比例。接受 CSS 值（px、%、in、pt 等）。",
      surveyvalidator: {
        expression: "使用魔杖图标为问题设置验证规则。"
      },
      textUpdateMode: "从中选择：“失焦时” - 当输入字段失去焦点时，该值会更新;“键入时” - 当用户键入时，该值会实时更新。“继承”选项将应用调查级别设置（默认为“失去焦点时”）。",
      url: "您可以使用任何 Web 服务作为多项选择题的数据源。要填充选项值，请输入提供数据的服务的 URL。",
      searchMode: "用于筛选下拉列表的比较操作。",
      textWrapEnabled: "选项选项中的长文本将自动生成换行符以适合下拉菜单。如果要剪裁文本，请取消选择。",
      effectiveColSpan: "指定此问题在网格布局中跨越多少列。"
    },
    signaturepad: {
      signatureWidth: "设置显示的签名区域和生成的图像的宽度。",
      signatureHeight: "设置显示的签名区域和生成的图像的高度。",
      signatureAutoScaleEnabled: "选择是否希望签名区域填充问题框中的所有可用空间，同时保持默认的 3：2 纵横比。设置自定义宽度和高度值后，该设置将保留这些尺寸的纵横比。"
    },
    file: {
      imageHeight: "调整调查结果中图像的高度。",
      imageWidth: "调整调查结果中图像的宽度。",
      allowImagesPreview: "尽可能显示已上传文件的缩略图预览。取消选择是否要显示文件图标。"
    },
    image: {
      contentMode: "“自动”选项会根据提供的源 URL 自动确定适合的显示模式 - 图像、视频或 YouTube。"
    },
    imagepicker: {
      imageHeight: "覆盖最小和最大高度值。",
      imageWidth: "覆盖最小和最大宽度值。",
      choices: "“值”用作条件规则中使用的项目 ID;向受访者显示“文本”。",
      contentMode: "在“图像”和“视频”之间进行选择以设置媒体选择器的内容模式。如果选择“图像”，请确保提供的所有选项都是以下格式的图像文件：JPEG、GIF、PNG、APNG、SVG、BMP、ICO。同样，如果选择“视频”，请确保所有选项都是指向以下格式的视频文件的直接链接：MP4、MOV、WMV、FLV、AVI、MKV。请注意，视频选项不支持 YouTube 链接。"
    },
    text: {
      size: "此设置仅调整输入字段的大小，不会影响问题框的宽度。要限制接受的输入长度，请转到<b>验证→最大字符限制</b>。"
    },
    comment: {
      rows: "设置输入字段中显示的行数。如果输入占用更多行，则会出现滚动条。"
    },
    // survey templates
    survey: {
      readOnly: "选择是否要阻止受访者填写您的调查。",
      progressBarLocation: "设置进度条的位置。“自动”值在调查标题的上方或下方显示进度条。"
    },
    matrixdropdowncolumn: {
      name: "受访者不可见的列 ID。",
      isUnique: "为列启用后，受访者需要为此列中的每个问题提供唯一的回答。",
      rows: "设置输入字段中显示的行数。如果输入占用更多行，则会出现滚动条。",
      visibleIf: "使用魔杖图标设置确定列可见性的条件规则。",
      enableIf: "使用魔杖图标设置禁用列只读模式的条件规则。",
      requiredIf: "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。",
      showInMultipleColumns: "选中后，为每个选项创建一个单独的列。",
      colCount: "在多列布局中排列选项。设置为 0 时，选项将以单行显示。当设置为 -1 时，实际值继承自父矩阵的 “Nested column count” 属性。"
    },
    caseInsensitive: "如果必须将正则表达式中的大写字母和小写字母视为等效字母，请选择此项。",
    widthMode: "从以下选项中选择： “静态” - 设置固定宽度;“响应式” - 使调查占据屏幕的整个宽度;“自动” - 根据所使用的问题类型应用两者中的任何一个。",
    cookieName: "Cookie 可防止用户两次填写同一调查问卷。",
    logo: "粘贴图像链接（无大小限制）或单击文件夹图标以浏览计算机中的文件（最大 64KB）。",
    logoWidth: "以 CSS 单位（px、%、in、pt 等）设置徽标宽度。",
    logoHeight: "以 CSS 单位（px、%、in、pt 等）设置徽标高度。",
    logoFit: "从以下选项中选择：“无” - 图像保持其原始大小;“包含” - 调整图像大小以适应其纵横比;“封面” - 图像填充整个框，同时保持其纵横比;“填充” - 拉伸图像以填充框，而不保持其纵横比。",
    autoAdvanceEnabled: "选择是否希望调查在受访者回答了当前页面上的所有问题后自动前进到下一页。如果页面上的最后一个问题是开放式的或允许多个答案，则此功能将不适用。",
    autoAdvanceAllowComplete: "选择是否希望在受访者回答所有问题后自动完成调查。",
    showNavigationButtons: "设置导航按钮在页面上的可见性和位置。",
    navigationButtonsLocation: "设置页面上导航按钮的位置。",
    showPreviewBeforeComplete: "启用仅包含所有问题或已回答问题的预览页面。",
    questionTitleLocation: "适用于调查中的所有问题。此设置可以被较低级别的标题对齐规则覆盖：面板、页面或问题。较低级别的设置将覆盖较高级别的设置。",
    requiredMark: "一个符号或一系列符号，表示需要答案。",
    questionStartIndex: "输入要开始编号的数字或字母。",
    questionErrorLocation: "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。",
    autoFocusFirstQuestion: "选择是否希望每个页面上的第一个输入字段准备好进行文本输入。",
    questionOrder: "保持问题的原始顺序或随机化问题。此设置的效果仅在“预览”选项卡中可见。",
    maxTextLength: "仅适用于文本输入问题。",
    maxCommentLength: "仅供问题评论。",
    commentAreaRows: "设置问题注释的文本区域中显示的行数。如果输入占用更多行，则会显示滚动条。",
    autoGrowComment: "选择是否希望问题注释和长文本问题根据输入的文本长度自动增加高度。",
    allowResizeComment: "仅适用于问题评论和长文本问题。",
    calculatedValues: "自定义变量用作表单计算中使用的中间变量或辅助变量。他们将受访者的输入作为源值。每个自定义变量都有一个唯一的名称和它所基于的表达式。",
    includeIntoResult: "选择是否希望将表达式的计算值与调查结果一起保存。",
    triggers: "触发器是基于表达式的事件或条件。一旦表达式被计算为“true”，触发器就会触发一个操作。这样的操作可以选择性地影响它的目标问题。",
    clearInvisibleValues: "选择是否清除条件逻辑隐藏的问题的值以及何时清除。",
    textUpdateMode: "从中选择：“失焦时” - 当输入字段失去焦点时，该值会更新;“键入时” - 当用户键入时，该值会实时更新。",
    columns: "左边的值用作条件规则中使用的列 ID，右边的值显示给受访者。",
    rows: "左边的值用作条件规则中使用的行 ID，右边的值显示给受访者。",
    columnMinWidth: "接受 CSS 值（px、%、in、pt 等）。",
    rowTitleWidth: "接受 CSS 值（px、%、in、pt 等）。",
    totalText: "仅当至少一列具有 Total 类型或 Total 表达式时才可见。",
    cellErrorLocation: "设置与输入无效的单元格相关的错误消息的位置。“继承”选项应用“错误消息对齐”属性中的设置。",
    detailErrorLocation: "设置嵌套在详细信息部分中的问题的错误消息的位置。“Inherit” 选项应用“Error message alignment” 属性中的设置。",
    keyDuplicationError: "启用“防止重复响应”属性后，尝试提交重复条目的受访者将收到以下错误消息。",
    totalExpression: "允许您根据表达式计算总值。表达式可以包括基本计算 （'{q1_id} + {q2_id}'）、布尔表达式 （'{age} > 60'） 和函数 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。",
    confirmDelete: "触发提示，要求确认删除行。",
    keyName: "如果指定的列包含相同的值，则调查将引发“非唯一键值”错误。",
    description: "键入副标题。",
    locale: "选择一种语言以开始创建调查。要添加翻译，请切换到新语言，然后在此处或“翻译”选项卡中翻译原始文本。",
    detailPanelMode: "设置详细信息部分相对于行的位置。从中选择：“无” - 不添加扩展;“Under the row” - 矩阵的每一行下都放置一个行扩展;“在行下，仅显示一行扩展” - 仅在单行下显示扩展，其余行展开将折叠。",
    imageFit: "从以下选项中选择：“无” - 图像保持其原始大小;“包含” - 调整图像大小以适应其纵横比;“封面” - 图像填充整个框，同时保持其纵横比;“填充” - 拉伸图像以填充框，而不保持其纵横比。",
    autoGrow: "在输入数据时逐渐增加输入字段的高度。覆盖“输入字段高度（以行为单位）”设置。",
    allowResize: "调整大小的手柄（或手柄）出现在角落，可以拖动以更改输入字段的大小。",
    timeLimit: "以秒为单位的时间间隔，在此时间间隔之后，调查将自动前进到“感谢”页面。",
    timeLimitPerPage: "以秒为单位的时间间隔，在此时间间隔之后，调查将自动前进到下一页。",
    validateVisitedEmptyFields: "启用此选项可在用户将焦点放在空输入字段上，然后离开该字段而不进行任何更改时触发验证。",
    page: {
      name: "受访者不可见的页面 ID。",
      description: "键入页面副标题。",
      navigationTitle: "显示在进度条或目录 （TOC） 中的导航按钮上的说明。如果将此字段留空，则导航按钮将使用页面标题或页面名称。要启用进度条或 TOC，请转到“调查”→“导航”。",
      timeLimit: "以秒为单位的时间间隔，在此时间间隔之后，调查将自动前进到下一页。",
      visibleIf: "使用魔杖图标设置确定页面可见性的条件规则。",
      enableIf: "使用魔杖图标设置禁用页面只读模式的条件规则。",
      requiredIf: "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。",
      questionTitleLocation: "适用于本页中的所有问题。如果要覆盖此设置，请为单个问题或面板定义标题对齐规则。“继承”选项将应用调查级别设置（默认为“顶部”）。",
      questionTitleWidth: "当问题标题与问题框左侧对齐时，为问题标题设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。",
      questionErrorLocation: "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。“继承”选项将应用调查级别设置（默认为“顶部”）。",
      questionOrder: "保持问题的原始顺序或随机化问题。“继承”选项应用调查级别设置（默认为“原始”）。此设置的效果仅在“预览”选项卡中可见。",
      showNavigationButtons: "设置导航按钮在页面上的可见性。“继承”选项应用调查级别设置，默认为“可见”。",
      gridLayoutColumns: "此表允许您配置页面上的每个网格列。它根据行中的最大元素数自动设置每列的宽度百分比。要自定义网格布局，请手动调整这些值并定义每列中所有问题的标题宽度。"
    },
    timerLocation: "设置计时器在页面上的位置。",
    panelsState: "从以下选项中选择：“锁定” - 用户无法展开或折叠面板;“全部折叠” - 所有面板都以折叠状态启动;“全部展开” - 所有面板都以展开状态启动;“首先展开” - 最初只有第一个面板被展开。",
    imageLinkName: "在对象数组中输入共享属性名称，该数组包含要在选项列表中显示的图像或视频文件 URL。",
    choices: "左边的值用作条件规则中使用的项目 ID，右边的值显示给受访者。",
    title: "键入要显示的用户友好标题。",
    waitForUpload: "确保用户在上传文件之前不会完成调查。",
    minWidth: "接受 CSS 值（px、%、in、pt 等）。",
    maxWidth: "接受 CSS 值（px、%、in、pt 等）。",
    width: "接受 CSS 值（px、%、in、pt 等）。",
    valueName: "如果未设置此属性，则答案将存储在 Name 属性指定的字段中。",
    defaultDisplayValue: "当问题值为空时，显示在 HTML 问题以及调查元素的动态标题和描述中的值。",
    useDisplayValuesInDynamicTexts: "在单选题和多选题类型中，每个选项都有一个 ID 和显示值。选中此设置后，将在 HTML 问题以及调查元素的动态标题和描述中显示显示值，而不是 ID 值。",
    clearIfInvisible: "选择是否清除条件逻辑隐藏的问题值以及何时清除。“继承”选项应用调查级别设置（默认为“完成调查后”）。",
    choicesFromQuestionMode: "从以下选项中选择：“全部” - 复制所选问题中的所有选项;“Selected” - 仅动态复制选定的选项选项;“未选择” - 仅动态复制未选择的选项。默认情况下，如果在源问题中启用了“无”和“其他”选项，则会复制该选项。",
    choiceValuesFromQuestion: "在单选和多选问题类型中，每个选项都有一个 ID 和显示值。此设置指定哪个矩阵、列或面板问题应提供 ID。",
    choiceTextsFromQuestion: "在单选和多选问题类型中，每个选项都有一个 ID 和显示值。此设置指定哪个矩阵列或面板问题应提供显示文本。",
    allowCustomChoices: "如果下拉列表中没有所需的选项，则选择以允许受访者添加自己的选择。自定义选项将仅在当前浏览器会话期间临时存储。",
    showOtherItem: "选中后，用户可以在单独的注释框中包含其他输入。",
    separateSpecialChoices: "在新行上显示每个特殊选项（“无”、“其他”、“全选”），即使使用多列布局也是如此。",
    path: "指定服务数据集中目标对象数组所在的位置。如果 URL 已指向数组，则留空。",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "在对象数组中输入一个统一的属性名称，该数组包含要在选项列表中显示的值。",
    allowEmptyResponse: "选择此选项可允许服务返回空响应或数组。",
    choicesVisibleIf: "使用魔杖图标设置条件规则，以确定所有选项的可见性。",
    rateValues: "左边的值用作条件规则中使用的项目 ID，右边的值显示给受访者。",
    rating: {
      displayMode: "“自动”根据可用宽度在“按钮”和“下拉”模式之间进行选择。当宽度不足以显示按钮时，问题将显示一个下拉列表。"
    },
    valuePropertyName: "允许您连接以不同格式生成结果的问题。当使用联接标识符将此类问题链接在一起时，此共享属性将存储选定的问题值。",
    searchEnabled: "选择是否要更新下拉菜单内容以匹配用户在输入字段中键入的搜索查询。",
    valueTrue: "当受访者给出肯定答案时保存在调查结果中的值。",
    valueFalse: "当受访者给出否定答案时保存在调查结果中的值。",
    showPreview: "不建议禁用此选项，因为它会覆盖预览图像，并使用户难以了解文件是否已上传。",
    needConfirmRemoveFile: "触发提示，要求确认文件删除。",
    selectToRankEnabled: "启用此选项可仅对选定的选项进行排名。用户将从选项列表中拖动所选项目，以在排名区域内对它们进行排序。",
    dataList: "输入将在输入期间向受访者建议的选项列表。",
    inputSize: "该设置仅调整输入字段的大小，不会影响问题框的宽度。",
    itemTitleWidth: "为所有项目标签设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。",
    inputTextAlignment: "选择如何在字段中对齐输入值。默认设置 “Auto” 如果应用了货币或数字掩码，则将输入值向右对齐，如果未应用，则向左对齐。",
    altText: "当图像无法在用户设备上显示时，出于辅助功能的目的，可作为替代。",
    rateColorMode: "定义当评级图标类型设置为“笑脸”时所选表情符号的颜色。选择：“默认” - 所选表情符号以默认调查颜色显示;“比例” - 所选的表情符号继承了评分量表的颜色。",
    expression: {
      name: "受访者不可见的表达式 ID。",
      description: "键入表达式副标题。",
      expression: "表达式可以包括基本计算 （'{q1_id} + {q2_id}'）、条件 （'{age} > 60'） 和函数 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。"
    },
    storeOthersAsComment: "选择此选项可将“其他”选项值作为单独的属性存储在调查结果中。",
    format: "使用 {0} 作为实际值的占位符。",
    acceptedTypes: "有关详细信息，请参阅 [accept]（https://www.w3schools.com/tags/att_input_accept.asp） 属性说明。",
    columnColCount: "仅适用于单选组和复选框单元类型。",
    autocomplete: "有关详细信息，请参阅 [autocomplete]（https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete） 属性说明。",
    filePlaceholder: "当“源类型”为“本地文件”或相机不可用时适用",
    photoPlaceholder: "当“源类型”为“相机”时适用。",
    fileOrPhotoPlaceholder: "当“源类型”为“本地文件或相机”时适用。",
    colCount: "在多列布局中排列选项。当设置为 0 时，选项将显示在一行中。",
    masksettings: {
      saveMaskedValue: "选择是否要在调查结果中存储带有应用掩码的问题值。"
    },
    patternmask: {
      pattern: "该模式可以包含字符串文字和以下占位符： '9' - 表示数字;“a” - 表示大写或小写字母;'#' - 表示数字或大写或小写字母。使用反斜杠“\\”转义字符。"
    },
    datetimemask: {
      pattern: "模式可以包含分隔符和以下占位符：“<br>m”- 月份编号。<br>'mm' - 月份编号，前导零表示个位数值。<br>'d' - 月份中的某一天。<br>'dd' - 月份的某一天，个位数值的前导为零。<br>'yy' - 年份的最后两位数字。<br>'yyyy' - 四位数年份。<br>“H” - 24 小时制的小时数。<br>“HH” - 24 小时制的小时数，个位数值的前导为零。<br>'h' - 以 12 小时为制的小时数。<br>'hh' - 12 小时制的小时数，个位数值的前导为零。<br>'MM' - 分钟。<br>'ss' - 秒。<br>“TT” - 大写 （AM/PM） 的 12 小时制周期。<br>'tt' - 小写 （am/pm） 的 12 小时制周期。"
    },
    numericmask: {
      decimalSeparator: "用于将显示数字的小数部分与整数部分分开的符号。",
      thousandsSeparator: "用于将大数的数字分成三组的符号。",
      precision: "限制显示数字的小数点后要保留的位数。"
    },
    currencymask: {
      prefix: "要在值之前显示的一个或多个符号。",
      suffix: "要在值后显示的一个或多个符号。"
    },
    theme: {
      isPanelless: "此设置仅适用于面板之外的问题。",
      primaryColor: "设置一种补充颜色，用于突出显示关键调查元素。",
      panelBackgroundTransparency: "调整面板和问题框相对于调查背景的透明度。",
      questionBackgroundTransparency: "调整输入元素相对于调查背景的透明度。",
      cornerRadius: "设置所有矩形元素的圆角半径。如果要为输入元素或面板和问题框设置单独的角半径值，请启用高级模式。",
      "--sjs-general-backcolor-dim": "设置调查的主要背景颜色。"
    },
    header: {
      inheritWidthFrom: "“与容器相同”选项会自动调整标题内容区域的宽度，以适应放置调查的 HTML 元素。",
      textAreaWidth: "包含调查标题和描述的标题区域的宽度，以像素为单位。",
      overlapEnabled: "启用后，调查的顶部将覆盖页眉的底部。",
      mobileHeight: "设置为 0 时，将自动计算高度以适应标题的内容。"
    },
    progressBarInheritWidthFrom: "“与容器相同”选项会自动调整进度条区域的宽度，以适应放置调查的 HTML 元素。"
  },
  // Properties
  p: {
    title: {
      name: "标题",
      title: "如果与名字相同，请设置为空值"
    },
    multiSelect: "允许多项选择",
    showLabel: "显示图像标题",
    swapOrder: "交换“是”和“否”的顺序",
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
    inputSize: "inputSize",
    itemTitleWidth: "项目标签宽度（以 px 为单位）",
    inputTextAlignment: "输入值对齐",
    elements: "元素",
    content: "内容",
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
    mobileHeight: "智能手机上的身高",
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
    selectToRankEmptyRankedAreaText: "显示是否选择了所有选项的文本",
    selectToRankEmptyUnrankedAreaText: "排名区域的占位符文本",
    allowCameraAccess: "允许摄像头访问",
    scaleColorMode: "缩放颜色模式",
    rateColorMode: "评价颜色模式",
    copyDisplayValue: "复制显示值",
    effectiveColSpan: "柱跨度",
    progressBarInheritWidthFrom: "进度条区域宽度"
  },
  theme: {
    advancedMode: "高级模式",
    pageTitle: "页面标题字体",
    questionTitle: "问题标题字体",
    editorPanel: "输入元素",
    lines: "线",
    primaryDefaultColor: "违约",
    primaryDarkColor: "悬停",
    primaryLightColor: "选择",
    backgroundDimColor: "背景色",
    cornerRadius: "拐角半径",
    backcolor: "默认背景",
    hovercolor: "悬停背景",
    borderDecoration: "边框装饰",
    fontColor: "字体颜色",
    backgroundColor: "背景颜色",
    primaryForecolor: "默认颜色",
    primaryForecolorLight: "禁用颜色",
    font: "字体",
    borderDefault: "暗",
    borderLight: "打火机",
    fontFamily: "字体家族",
    fontWeightRegular: "定期",
    fontWeightHeavy: "重",
    fontWeightSemiBold: "半粗体",
    fontWeightBold: "大胆",
    color: "颜色",
    placeholderColor: "占位符颜色",
    size: "大小",
    opacity: "不透明度",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "添加阴影效果",
    boxShadowBlur: "模糊",
    boxShadowSpread: "传播",
    boxShadowDrop: "落",
    boxShadowInner: "内",
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
      green: "绿",
      gray: "灰色"
    }
  },
  creatortheme: {
    "--sjs-special-background": "表面背景",
    "--sjs-primary-background-500": "主要",
    "--sjs-secondary-background-500": "二 次",
    surfaceScale: "表面",
    userInterfaceBaseUnit: "用户界面",
    fontScale: "字体",
    names: {
      sc2020: "调查创建者 2020",
      "default-light": "光",
      "default-dark": "黑暗",
      "default-contrast": "反差"
    }
  }
};

setupLocale({ localeCode: "zh-cn", strings: simplifiedChineseTranslation });

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
// pe.eachRowRequired: "Require answer for all rows" => "要求所有行都回答"
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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "完成页面的时间限制（以秒为单位）"
// question.page: "Parent page" => "父页面"
// pe.noEntriesText: "Empty entries text" => "空条目文本"
// pe.setValue: "Answer" => "答"
// pe.dataFormat: "Image format" => "图像格式"
// pe.allowAddRows: "Allow adding rows" => "允许添加行"
// pe.allowRemoveRows: "Allow removing rows" => "允许删除行"
// pe.allowRowReorder: "Allow row drag and drop" => "允许行拖放"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "最大注释长度（以字符为单位）"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "如有必要，自动展开评论区域"
// pe.allowResizeComment: "Allow users to resize text areas" => "允许用户调整文本区域的大小"
// pe.textUpdateMode: "Update text question value" => "更新文本问题值"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "将焦点放在第一个无效答案上"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "“上一个面板”按钮工具提示"
// pe.nextPanelText: "Next Panel button tooltip" => "“下一个面板”按钮工具提示"
// pe.showRangeInProgress: "Show progress bar" => "显示进度条"
// pe.templateQuestionTitleLocation: "Question title location" => "问题标题位置"
// pe.removePanelButtonLocation: "Remove Panel button location" => "“删除面板”按钮位置"
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
// pe.showNumber: "Show panel number" => "显示面板编号"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "徽标宽度（以 CSS 接受的值为单位）"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "徽标高度（以 CSS 接受的值为单位）"
// pe.readOnly: "Read-only" => "只读"
// pe.enableIf: "Editable if" => "可编辑，如果"
// pe.noRowsText: "\"No rows\" message" => "“无行”消息"
// pe.size: "Input field size (in characters)" => "输入字段大小（以字符为单位）"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "单独的特殊选项（无、其他、全选）"
// pe.choicesFromQuestion: "Copy choices from the following question" => "复制以下问题的选项"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "要复制哪些选项？"
// pe.showCommentArea: "Show the comment area" => "显示评论区域"
// pe.commentPlaceholder: "Comment area placeholder" => "注释区占位符"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "将速率描述显示为极值"
// pe.rowOrder: "Row order" => "行顺序"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "取决于矩阵布局"
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
// theme.groupAdvanced: "Advanced" => "高深"
// theme.themeName: "Theme" => "主题"
// theme.isPanellessss: "Question appearance" => "问题外观"
// theme.isPanellessPanels: "Default" => "违约"
// theme.isPanellessLightweight: "Without Panels" => "不带面板"
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
// theme.surveyTitleFont: "Survey title font" => "调查标题字体"
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
// theme.header: "Header" => "页眉"
// theme.backgroundImageFitFill: "Stretch" => "伸展"
// theme.backgroundImageFitTile: "Tile" => "瓦"
// theme.headerView: "View" => "视图"
// theme.headerViewBasic: "Basic" => "基本"
// theme.headerViewAdvanced: "Advanced" => "高深"
// theme.headerInheritWidthFrom: "Content area width" => "内容区域宽度"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "与调查相同"
// theme.headerInheritWidthFromPage: "Fit to page" => "适合页面"
// theme.headerTextAreaWidth: "Text width" => "文本宽度"
// theme.headerBackgroundColorSwitch: "Background color" => "背景色"
// theme.headerBackgroundColorNone: "None" => "没有"
// theme.headerBackgroundColorAccentColor: "Accent color" => "强调文字颜色"
// theme.headerBackgroundColorCustom: "Custom" => "习惯"
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
// theme.background: "Background" => "背景"
// theme.appearance: "Appearance" => "外观"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "你真的要重置主题吗？您的所有自定义项都将丢失。"
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "是，重置主题"
// theme.headerInheritWidthFromContainer: "Fit to container" => "适合容器"
// signaturepad.showPlaceholder: "Show the placeholder" => "显示占位符"
// signaturepad.placeholder: "Placeholder text" => "占位符文本"
// theme.surveyDescriptionFont: "Survey description font" => "调查描述字体"
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
// theme.headerTitlePosition: "Title position" => "职称位置"
// theme.headerDescriptionPosition: "Description position" => "描述位置"
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

// pe.transposeData: "Transpose rows to columns" => "将行转置为列"
// layout.panel: "Layout" => "布局"
// layout.question: "Layout" => "布局"
// layout.base: "Layout" => "布局"
// panel.name: "Panel name" => "面板名称"
// panel.title: "Panel title" => "面板标题"
// panel.description: "Panel description" => "面板说明"
// panel.visibleIf: "Make the panel visible if" => "如果出现以下情况，则使面板可见"
// panel.requiredIf: "Make the panel required if" => "如果出现以下情况，则使面板成为必需的"
// panel.questionOrder: "Question order within the panel" => "小组内的问题顺序"
// panel.startWithNewLine: "Display the panel on a new line" => "在新行上显示面板"
// panel.state: "Panel collapse state" => "面板折叠状态"
// panel.width: "Inline panel width" => "内嵌面板宽度"
// panel.minWidth: "Minimum panel width" => "最小面板宽度"
// panel.maxWidth: "Maximum panel width" => "最大面板宽度"
// paneldynamic.name: "Panel name" => "面板名称"
// paneldynamic.title: "Panel title" => "面板标题"
// paneldynamic.description: "Panel description" => "面板说明"
// paneldynamic.visibleIf: "Make the panel visible if" => "如果出现以下情况，则使面板可见"
// paneldynamic.requiredIf: "Make the panel required if" => "如果出现以下情况，则使面板成为必需的"
// paneldynamic.page: "Move the panel to page" => "将面板移动到页面"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "在新行上显示面板"
// paneldynamic.state: "Panel collapse state" => "面板折叠状态"
// paneldynamic.width: "Inline panel width" => "内嵌面板宽度"
// paneldynamic.minWidth: "Minimum panel width" => "最小面板宽度"
// paneldynamic.maxWidth: "Maximum panel width" => "最大面板宽度"
// paneldynamic.templateDescription: "Panel description pattern" => "面板描述模式"
// paneldynamic.templateTitle: "Panel title pattern" => "面板标题模式"
// paneldynamic.noEntriesText: "Empty panel text" => "空面板文本"
// paneldynamic.templateTabTitle: "Tab title pattern" => "选项卡标题模式"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "如果出现以下情况，则使单个面板可见"
// paneldynamic.hideNumber: "Hide the panel number" => "隐藏面板编号"
// paneldynamic.titleLocation: "Panel title alignment" => "面板标题对齐方式"
// paneldynamic.descriptionLocation: "Panel description alignment" => "面板描述对齐方式"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "问题标题对齐方式"
// paneldynamic.templateErrorLocation: "Error message alignment" => "错误消息对齐"
// paneldynamic.newPanelPosition: "New panel location" => "新面板位置"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "防止在以下问题中重复回答"
// question.name: "Question name" => "问题名称"
// question.title: "Question title" => "问题标题"
// question.description: "Question description" => "问题描述"
// question.visibleIf: "Make the question visible if" => "如果出现以下情况，请使问题可见"
// question.requiredIf: "Make the question required if" => "如果出现以下情况，则将问题设为必填项"
// question.state: "Question box collapse state" => "问题框折叠状态"
// question.hideNumber: "Hide the question number" => "隐藏问题编号"
// question.titleLocation: "Question title alignment" => "问题标题对齐方式"
// question.descriptionLocation: "Question description alignment" => "问题描述对齐方式"
// question.errorLocation: "Error message alignment" => "错误消息对齐"
// question.indent: "Increase the inner indent" => "增加内部缩进"
// question.width: "Inline question width" => "内联问题宽度"
// question.minWidth: "Minimum question width" => "最小问题宽度"
// question.maxWidth: "Maximum question width" => "最大问题宽度"
// question.textUpdateMode: "Update input field value" => "更新输入字段值"
// signaturepad.allowClear: "Show the Clear button within signature area" => "在签名区域内显示“清除”按钮"
// signaturepad.penColor: "Stroke color" => "描边颜色"
// comment.rows: "Input field height (in lines)" => "输入字段高度（以行为单位）"
// expression.name: "Expression name" => "表达式名称"
// expression.title: "Expression title" => "表达式标题"
// expression.description: "Expression description" => "表达式说明"
// expression.expression: "Expression" => "表达"
// trigger.expression: "Expression" => "表达"
// calculatedvalue.expression: "Expression" => "表达"
// survey.description: "Survey description" => "调查说明"
// page.name: "Page name" => "页面名称"
// page.description: "Page description" => "页面描述"
// page.visibleIf: "Make the page visible if" => "如果出现以下情况，则使页面可见"
// page.requiredIf: "Make the page required if" => "如果出现以下情况，则使页面为必填项"
// page.questionOrder: "Question order on the page" => "页面上的问题顺序"
// matrixdropdowncolumn.name: "Column name" => "列名称"
// matrixdropdowncolumn.title: "Column title" => "专栏标题"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "防止重复响应"
// matrixdropdowncolumn.width: "Column width" => "列宽"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "最小列宽"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "输入字段高度（以行为单位）"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "如果出现以下情况，则使列可见"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "如果满足以下条件，则使该列为必填项"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "每个选项都在单独的列中"
// multipletextitem.name: "Name" => "名字"
// multipletextitem.title: "Title" => "标题"
// pe.rateDescriptionLocation: "Label alignment" => "标签对齐"
// pe.cellErrorLocation: "Cell error message alignment" => "单元格错误消息对齐方式"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "您还没有任何列"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "您还没有任何行"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "尚无任何验证规则"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "您还没有任何自定义变量"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "您还没有任何触发器"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "您还没有任何链接"
// pe.addNew@columns: "Add new column" => "添加新列"
// pe.addNew@rows: "Add new row" => "添加新行"
// pe.addNew@validators: "Add new rule" => "添加新规则"
// pe.addNew@calculatedValues: "Add new variable" => "添加新变量"
// pe.addNew@triggers: "Add new trigger" => "添加新触发器"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "添加新 URL"
// choicesbyurl.url: "Web service's URL" => "Web 服务的 URL"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "在进度条中显示页面标题"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "在进度条中显示页码"
// itemvalue.visibleIf: "Make the option visible if" => "如果出现以下情况，则使该选项可见"
// itemvalue.enableIf: "Make the option selectable if" => "如果出现以下情况，则使该选项可选"
// panel.layout: "Panel Layout" => "面板布局"
// tabs.questionSettings: "Question Settings" => "问题设置"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "例如：https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "例如：categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "例如：a）"
// pe.width_placeholder: "Ex.: 6in" => "例：6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "例如：600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "例：50%"
// pv.selected: "Selected" => "选择"
// pv.unselected: "Unselected" => "未选中"
// pv.center: "Center" => "中心"
// pv.middle: "Middle" => "中间"
// pv.next: "Next" => "下一个"
// pv.last: "Last" => "最后"
// clearIfInvisible.none: "Never" => "从不"
// questionsOnPageMode.standard: "Original structure" => "原始结构"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "在一个页面上显示所有问题"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "每页显示一个问题"
// pv.auto: "Auto" => "自动"
// panelsState.firstExpanded: "First expanded" => "首次扩展"
// rateColorMode.scale: "Scale" => "规模"
// scaleColorMode.monochrome: "Monochrome" => "单色"
// scaleColorMode.colored: "Colored" => "彩色"
// state.default: "Locked" => "锁"
// showQuestionNumbers.default: "Auto-numbering" => "自动编号"
// showQuestionNumbers.on: "Auto-numbering" => "自动编号"
// showQuestionNumbers.onPage: "Reset on each page" => "在每个页面上重置"
// showQuestionNumbers.onpanel: "Reset on each panel" => "在每个面板上重置"
// showQuestionNumbers.onPanel: "Reset on each panel" => "在每个面板上重置"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "在整个调查中继续"
// showQuestionNumbers.off: "No numbering" => "无编号"
// descriptionLocation.underTitle: "Under the question title" => "在问题标题下"
// descriptionLocation.underInput: "Under the input field" => "在输入字段下"
// selectToRankAreasLayout.horizontal: "Next to choices" => "在选项旁边"
// selectToRankAreasLayout.vertical: "Above choices" => "以上选择"
// displayStyle.decimal: "Decimal" => "十进制"
// displayStyle.currency: "Currency" => "货币"
// displayStyle.percent: "Percentage" => "百分比"
// displayStyle.date: "Date" => "日期"
// totalDisplayStyle.decimal: "Decimal" => "十进制"
// totalDisplayStyle.currency: "Currency" => "货币"
// totalDisplayStyle.percent: "Percentage" => "百分比"
// totalDisplayStyle.date: "Date" => "日期"
// rowOrder.initial: "Original" => "源语言"
// questionOrder.initial: "Original" => "源语言"
// showProgressBar.aboveheader: "Above the header" => "标题上方"
// showProgressBar.belowheader: "Below the header" => "在标题下方"
// pv.sum: "Sum" => "和"
// pv.count: "Count" => "计数"
// pv.min: "Min" => "最小值"
// pv.max: "Max" => "麦克斯"
// pv.avg: "Avg" => "平均"
// searchMode.contains: "Contains" => "包含"
// searchMode.startsWith: "Starts with" => "开头为"
// panel.name: "A panel ID that is not visible to respondents." => "受访者不可见的面板 ID。"
// panel.description: "Type a panel subtitle." => "键入面板字幕。"
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "使用魔棒图标设置确定面板可见性的条件规则。"
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "使用魔棒图标设置禁用面板只读模式的条件规则。"
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。"
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "适用于此面板中的所有问题。如果要覆盖此设置，请为单个问题定义标题对齐规则。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。"
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "设置与面板中所有问题相关的错误消息的位置。“继承”选项应用页面级别（如果已设置）或调查级别设置。"
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "保持问题的原始顺序或随机化问题。“继承”选项应用页面级别（如果已设置）或调查级别设置。"
// panel.page: "Repositions the panel to the end of a selected page." => "将面板重新定位到所选页面的末尾。"
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "在面板内容和面板框的左边框之间添加空格或边距。"
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "取消选择以将面板与上一个问题或面板显示在一行中。如果面板是窗体中的第一个元素，则该设置不适用。"
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "从中选择：“展开” - 面板完整显示，可以折叠;“已折叠” - 面板仅显示标题和描述，可以展开;“已锁定” - 面板完整显示，无法折叠。"
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "设置面板的宽度，使其与同一行中的其他测量图元成比例。接受 CSS 值（px、%、in、pt 等）。"
// paneldynamic.name: "A panel ID that is not visible to respondents." => "受访者不可见的面板 ID。"
// paneldynamic.description: "Type a panel subtitle." => "键入面板字幕。"
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "使用魔棒图标设置确定面板可见性的条件规则。"
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "使用魔棒图标设置禁用面板只读模式的条件规则。"
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。"
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "适用于此面板中的所有问题。如果要覆盖此设置，请为单个问题定义标题对齐规则。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。"
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。"
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "设置与面板中所有问题相关的错误消息的位置。“继承”选项应用页面级别（如果已设置）或调查级别设置。"
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "将面板重新定位到所选页面的末尾。"
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "在面板内容和面板框的左边框之间添加空格或边距。"
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "取消选择以将面板与上一个问题或面板显示在一行中。如果面板是窗体中的第一个元素，则该设置不适用。"
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "从中选择：“展开” - 面板完整显示，可以折叠;“已折叠” - 面板仅显示标题和描述，可以展开;“已锁定” - 面板完整显示，无法折叠。"
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "设置面板的宽度，使其与同一行中的其他测量图元成比例。接受 CSS 值（px、%、in、pt 等）。"
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "键入动态面板标题的模板。使用 {panelIndex} 作为面板的常规位置，使用 {visiblePanelIndex} 作为其在可见面板中的顺序。将这些占位符插入到图案中以添加自动编号。"
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "键入选项卡标题的模板。使用 {panelIndex} 表示面板的大致位置，使用 {visiblePanelIndex} 表示其在可见面板中的顺序。将这些占位符插入到图案中以添加自动编号。"
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "此设置允许您控制动态面板中各个面板的可见性。使用“{panel}”占位符在表达式中引用当前面板。"
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "此面板中的所有问题都会自动继承此设置。如果要覆盖此设置，请为单个问题定义标题对齐规则。“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“顶部”）。"
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "“继承”选项应用页面级别（如果已设置）或调查级别设置（默认为“在面板标题下”）。"
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "定义新添加的面板的位置。默认情况下，新面板将添加到末尾。选择“下一步”以在当前面板之后插入新面板。"
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "复制上一个面板中的答案，并将其分配给下一个添加的动态面板。"
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "引用问题名称以要求用户在每个面板中为此问题提供唯一的答案。"
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "此设置允许您根据表达式分配默认答案值。表达式可以包括基本计算 - '{q1_id} + {q2_id}'、布尔表达式，例如 '{age} > 60'，以及函数：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。此表达式确定的值用作初始默认值，可由响应者的手动输入覆盖。"
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "使用魔杖图标设置条件规则，该规则确定何时将受访者的输入重置为基于“默认值表达式”或“设置值表达式”的值，或重置为“默认答案”值（如果设置了其中任何一个）。"
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "使用魔杖图标设置条件规则，该规则确定何时运行“设置值表达式”，并将结果值动态分配为响应。"
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "指定一个表达式，该表达式定义在满足“如果设置值”规则中的条件时要设置的值。表达式可以包括基本计算 - '{q1_id} + {q2_id}'、布尔表达式，例如 '{age} > 60'，以及函数：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。由此表达式确定的值可以被受访者的手动输入覆盖。"
// question.name: "A question ID that is not visible to respondents." => "受访者不可见的问题 ID。"
// question.description: "Type a question subtitle." => "键入问题副标题。"
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "使用魔杖图标设置确定问题可见性的条件规则。"
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "使用魔杖图标设置条件规则，以禁用问题的只读模式。"
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "使用魔杖图标设置条件规则，除非问题得到答案，否则阻止调查推进或提交。"
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "取消选择以将问题与上一个问题或面板显示在一行中。如果问题是表单中的第一个元素，则该设置不适用。"
// question.page: "Repositions the question to the end of a selected page." => "将问题重新定位到所选页面的末尾。"
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "从以下选项中选择：“展开” - 问题框完整显示，可以折叠;“已折叠” - 问题框仅显示标题和描述，可以展开;“已锁定” - 问题框完整显示，无法折叠。"
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "覆盖在面板、页面或调查级别上定义的标题对齐规则。“继承”选项将应用任何更高级别的设置（如果已设置）或调查级别的设置（默认为“顶部”）。"
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "“继承”选项应用调查级别设置（默认为“在问题标题下”）。"
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。“继承”选项将应用调查级别设置（默认为“顶部”）。"
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "在问题内容和问题框的左边框之间添加空格或边距。"
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "设置问题的宽度，使其与同一行中的其他调查元素成比例。接受 CSS 值（px、%、in、pt 等）。"
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "使用魔杖图标为问题设置验证规则。"
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "从中选择：“失焦时” - 当输入字段失去焦点时，该值会更新;“键入时” - 当用户键入时，该值会实时更新。“继承”选项将应用调查级别设置（默认为“失去焦点时”）。"
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "您可以使用任何 Web 服务作为多项选择题的数据源。要填充选项值，请输入提供数据的服务的 URL。"
// question.searchMode: "A comparison operation used to filter the drop-down list." => "用于筛选下拉列表的比较操作。"
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "设置显示的签名区域和生成的图像的宽度。"
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "设置显示的签名区域和生成的图像的高度。"
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "选择是否希望签名区域填充问题框中的所有可用空间，同时保持默认的 3：2 纵横比。设置自定义宽度和高度值后，该设置将保留这些尺寸的纵横比。"
// file.imageHeight: "Adjusts the height of the image in the survey results." => "调整调查结果中图像的高度。"
// file.imageWidth: "Adjusts the width of the image in the survey results." => "调整调查结果中图像的宽度。"
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "覆盖最小和最大高度值。"
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "覆盖最小和最大宽度值。"
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "“值”用作条件规则中使用的项目 ID;向受访者显示“文本”。"
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "此设置仅调整输入字段的大小，不会影响问题框的宽度。要限制接受的输入长度，请转到<b>验证→最大字符限制</b>。"
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "设置输入字段中显示的行数。如果输入占用更多行，则会出现滚动条。"
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "选择：“可编辑” - 使受访者能够填写您的调查;“只读” - 禁用表单编辑。"
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "受访者不可见的列 ID。"
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "为列启用后，受访者需要为此列中的每个问题提供唯一的回答。"
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "设置输入字段中显示的行数。如果输入占用更多行，则会出现滚动条。"
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "使用魔杖图标设置确定列可见性的条件规则。"
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "使用魔杖图标设置禁用列只读模式的条件规则。"
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。"
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "选中后，为每个选项创建一个单独的列。"
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "从以下选项中选择： “静态” - 设置固定宽度;“响应式” - 使调查占据屏幕的整个宽度;“自动” - 根据所使用的问题类型应用两者中的任何一个。"
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "粘贴图像链接（无大小限制）或单击文件夹图标以浏览计算机中的文件（最大 64KB）。"
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "以 CSS 单位（px、%、in、pt 等）设置徽标宽度。"
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "以 CSS 单位（px、%、in、pt 等）设置徽标高度。"
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "从以下选项中选择：“无” - 图像保持其原始大小;“包含” - 调整图像大小以适应其纵横比;“封面” - 图像填充整个框，同时保持其纵横比;“填充” - 拉伸图像以填充框，而不保持其纵横比。"
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "设置导航按钮在页面上的可见性和位置。"
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "设置进度条的可见性和位置。“自动”值显示测量标题上方或下方的进度条。"
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "启用仅包含所有问题或已回答问题的预览页面。"
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "适用于调查中的所有问题。此设置可以被较低级别的标题对齐规则覆盖：面板、页面或问题。较低级别的设置将覆盖较高级别的设置。"
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "一个符号或一系列符号，表示需要答案。"
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "输入要开始编号的数字或字母。"
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。"
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "选择是否希望每个页面上的第一个输入字段准备好进行文本输入。"
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "保持问题的原始顺序或随机化问题。此设置的效果仅在“预览”选项卡中可见。"
// pehelp.maxTextLength: "For text entry questions only." => "仅适用于文本输入问题。"
// pehelp.maxCommentLength: "For question comments only." => "仅供问题评论。"
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "选择是否希望问题注释和长文本问题根据输入的文本长度自动增加高度。"
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "仅适用于问题评论和长文本问题。"
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "自定义变量用作表单计算中使用的中间变量或辅助变量。他们将受访者的输入作为源值。每个自定义变量都有一个唯一的名称和它所基于的表达式。"
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "选择是否希望将表达式的计算值与调查结果一起保存。"
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "触发器是基于表达式的事件或条件。一旦表达式被计算为“true”，触发器就会触发一个操作。这样的操作可以选择性地影响它的目标问题。"
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "选择是否清除条件逻辑隐藏的问题的值以及何时清除。"
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "从中选择：“失焦时” - 当输入字段失去焦点时，该值会更新;“键入时” - 当用户键入时，该值会实时更新。"
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "左边的值用作条件规则中使用的列 ID，右边的值显示给受访者。"
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "左边的值用作条件规则中使用的行 ID，右边的值显示给受访者。"
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "设置与输入无效的单元格相关的错误消息的位置。“继承”选项应用“错误消息对齐”属性中的设置。"
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "启用“防止重复响应”属性后，尝试提交重复条目的受访者将收到以下错误消息。"
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "允许您根据表达式计算总值。表达式可以包括基本计算 （'{q1_id} + {q2_id}'）、布尔表达式 （'{age} > 60'） 和函数 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。"
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "触发提示，要求确认删除行。"
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "复制最后一行的答案，并将其分配给下一个添加的动态行。"
// pehelp.description: "Type a subtitle." => "键入副标题。"
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "选择一种语言以开始创建调查。要添加翻译，请切换到新语言，然后在此处或“翻译”选项卡中翻译原始文本。"
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "设置详细信息部分相对于行的位置。从中选择：“无” - 不添加扩展;“Under the row” - 矩阵的每一行下都放置一个行扩展;“在行下，仅显示一行扩展” - 仅在单行下显示扩展，其余行展开将折叠。"
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "从以下选项中选择：“无” - 图像保持其原始大小;“包含” - 调整图像大小以适应其纵横比;“封面” - 图像填充整个框，同时保持其纵横比;“填充” - 拉伸图像以填充框，而不保持其纵横比。"
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "在输入数据时逐渐增加输入字段的高度。覆盖“输入字段高度（以行为单位）”设置。"
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "调整大小的手柄（或手柄）出现在角落，可以拖动以更改输入字段的大小。"
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "以秒为单位的时间间隔，在此时间间隔之后，调查将自动前进到“感谢”页面。"
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "以秒为单位的时间间隔，在此时间间隔之后，调查将自动前进到下一页。"
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "以秒为单位的时间间隔，在此时间间隔之后，调查将自动前进到下一页。"
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "使用魔杖图标设置确定页面可见性的条件规则。"
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "使用魔杖图标设置禁用页面只读模式的条件规则。"
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "使用魔杖图标设置条件规则，除非至少有一个嵌套问题有答案，否则该规则将阻止调查提交。"
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "适用于本页中的所有问题。如果要覆盖此设置，请为单个问题或面板定义标题对齐规则。“继承”选项将应用调查级别设置（默认为“顶部”）。"
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "设置与输入无效的问题相关的错误消息的位置。选择：“顶部” - 错误文本放置在问题框的顶部;“底部” - 错误文本放置在问题框的底部。“继承”选项将应用调查级别设置（默认为“顶部”）。"
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "保持问题的原始顺序或随机化问题。“继承”选项应用调查级别设置（默认为“原始”）。此设置的效果仅在“预览”选项卡中可见。"
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "设置导航按钮在页面上的可见性。“继承”选项应用调查级别设置，默认为“可见”。"
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "从以下选项中选择：“锁定” - 用户无法展开或折叠面板;“全部折叠” - 所有面板都以折叠状态启动;“全部展开” - 所有面板都以展开状态启动;“首先展开” - 最初只有第一个面板被展开。"
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "在对象数组中输入共享属性名称，该数组包含要在选项列表中显示的图像或视频文件 URL。"
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "左边的值用作条件规则中使用的项目 ID，右边的值显示给受访者。"
// pehelp.title: "Type a user-friendly title to display." => "键入要显示的用户友好标题。"
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "确保用户在上传文件之前不会完成调查。"
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "在单选题和多选题类型中，每个选项都有一个 ID 和显示值。选中此设置后，将在 HTML 问题以及调查元素的动态标题和描述中显示显示值，而不是 ID 值。"
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "选择是否清除条件逻辑隐藏的问题值以及何时清除。“继承”选项应用调查级别设置（默认为“完成调查后”）。"
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "从以下选项中选择：“全部” - 复制所选问题中的所有选项;“Selected” - 仅动态复制选定的选项选项;“未选择” - 仅动态复制未选择的选项。默认情况下，如果在源问题中启用了“无”和“其他”选项，则会复制该选项。"
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "选中后，用户可以在单独的注释框中包含其他输入。"
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "在新行上显示每个特殊选项（“无”、“其他”、“全选”），即使使用多列布局也是如此。"
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "指定服务数据集中目标对象数组所在的位置。如果 URL 已指向数组，则留空。"
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "在对象数组中输入一个统一的属性名称，该数组包含要在选项列表中显示的值。"
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "选择此选项可允许服务返回空响应或数组。"
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "使用魔杖图标设置条件规则，以确定所有选项的可见性。"
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "左边的值用作条件规则中使用的项目 ID，右边的值显示给受访者。"
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "“自动”根据可用宽度在“按钮”和“下拉”模式之间进行选择。当宽度不足以显示按钮时，问题将显示一个下拉列表。"
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "允许您连接以不同格式生成结果的问题。当使用联接标识符将此类问题链接在一起时，此共享属性将存储选定的问题值。"
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "选择是否要更新下拉菜单内容以匹配用户在输入字段中键入的搜索查询。"
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "当受访者给出肯定答案时保存在调查结果中的值。"
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "当受访者给出否定答案时保存在调查结果中的值。"
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "不建议禁用此选项，因为它会覆盖预览图像，并使用户难以了解文件是否已上传。"
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "触发提示，要求确认文件删除。"
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "启用此选项可仅对选定的选项进行排名。用户将从选项列表中拖动所选项目，以在排名区域内对它们进行排序。"
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "输入将在输入期间向受访者建议的选项列表。"
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "该设置仅调整输入字段的大小，不会影响问题框的宽度。"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "为所有项目标签设置一致的宽度（以像素为单位）"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "“自动”选项会根据提供的源 URL 自动确定合适的显示模式 - 图像、视频或 YouTube。"
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "当图像无法在用户设备上显示时，出于辅助功能的目的，可作为替代。"
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "定义当评级图标类型设置为“笑脸”时所选表情符号的颜色。选择：“默认” - 所选表情符号以默认调查颜色显示;“比例” - 所选的表情符号继承了评分量表的颜色。"
// expression.name: "An expression ID that is not visible to respondents." => "受访者不可见的表达式 ID。"
// expression.description: "Type an expression subtitle." => "键入表达式副标题。"
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "表达式可以包括基本计算 （'{q1_id} + {q2_id}'）、条件 （'{age} > 60'） 和函数 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。"
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "选择此选项可将“其他”选项值作为单独的属性存储在调查结果中。"
// p.swapOrder: "Swap the order of Yes and No" => "交换“是”和“否”的顺序"
// p.itemTitleWidth: "Item label width (in px)" => "项目标签宽度（以 px 为单位）"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "显示是否选择了所有选项的文本"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "排名区域的占位符文本"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "自动完成调查"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "选择是否希望在受访者回答所有问题后自动完成调查。"
// masksettings.saveMaskedValue: "Save masked value in survey results" => "在调查结果中保存掩码值"
// patternmask.pattern: "Value pattern" => "价值模式"
// datetimemask.min: "Minimum value" => "最小值"
// datetimemask.max: "Maximum value" => "最大值"
// numericmask.allowNegativeValues: "Allow negative values" => "允许负值"
// numericmask.thousandsSeparator: "Thousands separator" => "千分隔符"
// numericmask.decimalSeparator: "Decimal separator" => "小数点分隔符"
// numericmask.precision: "Value precision" => "值精度"
// numericmask.min: "Minimum value" => "最小值"
// numericmask.max: "Maximum value" => "最大值"
// currencymask.prefix: "Currency prefix" => "货币前缀"
// currencymask.suffix: "Currency suffix" => "货币后缀"
// pe.maskType: "Input mask type" => "输入掩码类型"
// maskTypes.patternmask: "Pattern" => "模式"
// maskTypes.numericmask: "Numeric" => "数值的"
// maskTypes.datetimemask: "Date and Time" => "日期和时间"
// maskTypes.currencymask: "Currency" => "货币"
// tabs.mask: "Input Mask Settings" => "输入掩码设置"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "例如：+1（999）-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "例：mm/dd/yyyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "例：$"
// pe.currencysuffix_placeholder: "Ex.: USD" => "例如：美元"
// pv.textWrapEnabled: "Wrap choices" => "包装选择"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "选项选项中的长文本将自动生成换行符以适合下拉菜单。如果要剪裁文本，请取消选择。"
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "选择是否要在调查结果中存储带有应用掩码的问题值。"
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "该模式可以包含字符串文字和以下占位符： '9' - 表示数字;“a” - 表示大写或小写字母;'#' - 表示数字或大写或小写字母。使用反斜杠“\\”转义字符。"
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "该模式可以包含分隔符和以下占位符：“m” - 表示月份数;'mm' - 表示月份数字，前导零表示个位数;'d' - 表示月份中的某一天;'dd' - 表示月份中的某一天，前导零表示个位数值;'yy' - 一年的最后两位数字;'yyyy' - 表示四位数的年份。"
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "用于将显示数字的小数部分与整数部分分开的符号。"
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "用于将大数的数字分成三组的符号。"
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "限制显示数字的小数点后要保留的位数。"
// currencymask.prefix: "One or several symbols to be displayed before the value." => "要在值之前显示的一个或多个符号。"
// currencymask.suffix: "One or several symbols to be displayed after the value." => "要在值后显示的一个或多个符号。"
// ed.translationSource: "Source: " => "源："
// ed.translationTarget: "Target: " => "目标："
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "页面为空。从工具箱中拖动元素或单击下面的按钮。"
// maskTypes.none: "None" => "没有"
// itemvalue@rows.visibleIf: "Make the row visible if" => "如果出现以下情况，则使行可见"
// itemvalue@rows.enableIf: "Make the row editable if" => "如果出现以下情况，则使行可编辑"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "只读或预览模式下的占位符文本"
// pe.textWrapEnabled: "Wrap choices" => "换行选项"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "“自动”选项会根据提供的源 URL 自动确定适合的显示模式 - 图像、视频或 YouTube。"
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "在“图像”和“视频”之间进行选择以设置媒体选择器的内容模式。如果选择“图像”，请确保提供的所有选项都是以下格式的图像文件：JPEG、GIF、PNG、APNG、SVG、BMP、ICO。同样，如果选择“视频”，请确保所有选项都是指向以下格式的视频文件的直接链接：MP4、MOV、WMV、FLV、AVI、MKV。请注意，视频选项不支持 YouTube 链接。"
// ed.selectFile: "Select a file" => "选择文件"
// ed.removeFile: "Remove the file" => "删除文件"
// pe.searchMode: "Search Mode" => "搜索模式"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "单击下面的“添加问题”按钮开始创建表单。"
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "单击下面的“添加问题”按钮，向页面添加新元素。"
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "单击下面的“添加问题”按钮，将新元素添加到面板中。"
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "点击下面的按钮，选择要上传的图片"
// coloralpha.opacity: "Opacity" => "不透明度"
// font.family: "Font family" => "字体家族"
// font.color: "Color" => "颜色"
// font.placeholderColor: "Placeholder color" => "占位符颜色"
// font.size: "Size" => "大小"
// theme.themeName: "Theme" => "主题"
// theme.isPanelless: "Question appearance" => "问题外观"
// theme.editorPanel: "Background and corner radius" => "背景和拐角半径"
// theme.questionPanel: "Background and corner radius" => "背景和拐角半径"
// theme.primaryColor: "Accent color" => "强调色"
// theme.panelBackgroundTransparency: "Panel background opacity" => "面板背景不透明度"
// theme.questionBackgroundTransparency: "Question background opacity" => "问题背景不透明度"
// theme.fontSize: "Font size" => "字体大小"
// theme.scale: "Scale" => "规模"
// theme.cornerRadius: "Corner radius" => "拐角半径"
// theme.pageTitle: "Title font" => "标题字体"
// theme.pageDescription: "Description font" => "描述字体"
// theme.questionTitle: "Title font" => "标题字体"
// theme.questionDescription: "Description font" => "描述字体"
// theme.editorFont: "Font" => "字体"
// theme.backgroundOpacity: "Opacity" => "不透明度"
// theme.--sjs-font-family: "Font family" => "字体家族"
// theme.--sjs-general-backcolor-dim: "Background color" => "背景颜色"
// theme.--sjs-primary-backcolor: "Accent background" => "重音背景"
// theme.--sjs-primary-forecolor: "Accent foreground" => "重音前景"
// theme.--sjs-shadow-small: "Shadow effects" => "阴影效果"
// theme.--sjs-shadow-inner: "Shadow effects" => "阴影效果"
// theme.--sjs-border-default: "Colors" => "颜色"
// header@header.headerView: "View" => "视图"
// header@header.logoPosition: "Logo position" => "徽标位置"
// header@header.surveyTitle: "Survey title font" => "调查标题字体"
// header@header.surveyDescription: "Survey description font" => "调查描述字体"
// header@header.headerTitle: "Survey title font" => "调查标题字体"
// header@header.headerDescription: "Survey description font" => "调查描述字体"
// header@header.inheritWidthFrom: "Content area width" => "内容区宽度"
// header@header.textAreaWidth: "Text width" => "文本宽度"
// header@header.backgroundColorSwitch: "Background color" => "背景颜色"
// header@header.backgroundImage: "Background image" => "背景图片"
// header@header.backgroundImageOpacity: "Opacity" => "不透明度"
// header@header.overlapEnabled: "Overlap" => "重叠"
// header@header.logoPositionX: "Logo position" => "徽标位置"
// header@header.titlePositionX: "Title position" => "标题位置"
// header@header.descriptionPositionX: "Description position" => "描述位置"
// weight.400: "Regular" => "定期"
// weight.600: "Heavy" => "重"
// weight.700: "Semi-bold" => "半粗体"
// weight.800: "Bold" => "大胆"
// backgroundImageFit.auto: "Auto" => "自动"
// backgroundImageFit.cover: "Cover" => "盖"
// backgroundImageFit.contain: "Contain" => "包含"
// backgroundImageFit.fill: "Stretch" => "伸展"
// backgroundImageFit.tile: "Tile" => "瓦"
// backgroundImageAttachment.fixed: "Fixed" => "固定"
// backgroundImageAttachment.scroll: "Scroll" => "滚动"
// headerView.basic: "Basic" => "基本"
// headerView.advanced: "Advanced" => "高深"
// inheritWidthFrom.survey: "Same as survey" => "与调查相同"
// inheritWidthFrom.container: "Fit to container" => "适合容器"
// backgroundColorSwitch.none: "None" => "没有"
// backgroundColorSwitch.accentColor: "Accent color" => "强调色"
// backgroundColorSwitch.custom: "Custom" => "习惯"
// colorPalette.light: "Light" => "光"
// colorPalette.dark: "Dark" => "黑暗"
// isPanelless.false: "Default" => "违约"
// isPanelless.true: "Without Panels" => "不带面板"
// theme.cornerRadius: "Corner radius" => "拐角半径"
// theme.fontFamily: "Font family" => "字体家族"
// theme.fontWeightRegular: "Regular" => "定期"
// theme.fontWeightHeavy: "Heavy" => "重"
// theme.fontWeightSemiBold: "Semi-bold" => "半粗体"
// theme.fontWeightBold: "Bold" => "大胆"
// theme.color: "Color" => "颜色"
// theme.placeholderColor: "Placeholder color" => "占位符颜色"
// theme.size: "Size" => "大小"
// theme.opacity: "Opacity" => "不透明度"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "键入以搜索..."
// ed.toolboxNoResultsFound: "No results found" => "未找到结果"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "选项卡标题占位符"
// theme.--sjs-special-red: "Error messages" => "错误消息"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "选项卡标题的回退文本，当选项卡标题模式未生成有意义的值时应用。"
// theme.fontColor: "Font color" => "字体颜色"
// theme.backgroundColor: "Background color" => "背景颜色"
// pe.questionTitleWidth: "Question title width" => "问题标题宽度"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "选择文件或粘贴文件链接..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "例如：200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "当问题标题与问题框左侧对齐时，为问题标题设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。"
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "当问题标题与问题框左侧对齐时，为问题标题设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。"
// pe.commentAreaRows: "Comment area height (in lines)" => "评论区高度（以行为单位）"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "设置问题注释的文本区域中显示的行数。在输入占用更多行时，将出现滚动条。"
// pe.enabled: "Enabled" => "启用"
// pe.disabled: "Disabled" => "禁用"
// pe.inherit: "Inherit" => "继承"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "验证失去焦点时的空字段"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "例如：30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "例如：200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "启用此选项可在用户将焦点放在空输入字段上，然后离开该字段而不进行任何更改时触发验证。"
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "在多列布局中排列选项。当设置为 0 时，选项将显示在一行中。"
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "此设置仅适用于面板之外的问题。"
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "设置一种补充颜色，用于突出显示关键调查元素。"
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "调整面板和问题框相对于调查背景的透明度。"
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "调整输入元素相对于调查背景的透明度。"
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "设置所有矩形元素的圆角半径。如果要为输入元素或面板和问题框设置单独的角半径值，请启用高级模式。"
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "设置调查的主要背景颜色。"
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "“与容器相同”选项会自动调整标题内容区域的宽度，以适应放置调查的 HTML 元素。"
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "包含调查标题和描述的标题区域的宽度，以像素为单位。"
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "接受值 %。"
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "接受值 px。"
// p.effectiveColSpan: "Column span" => "柱跨度"
// progressBarInheritWidthFrom.survey: "Same as survey" => "与调查相同"
// progressBarInheritWidthFrom.container: "Same as container" => "与容器相同"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "尽可能显示已上传文件的缩略图预览。取消选择是否要显示文件图标。"
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "“与容器相同”选项会自动调整进度条区域的宽度，以适应放置调查的 HTML 元素。"
// p.progressBarInheritWidthFrom: "Progress bar area width" => "进度条区域宽度"
// maskType.none: "None" => "没有"
// maskType.pattern: "Pattern" => "模式"
// maskType.numeric: "Numeric" => "数值的"
// maskType.datetime: "Date and Time" => "日期和时间"
// maskType.currency: "Currency" => "货币"

// inputTextAlignment.auto: "Auto" => "自动"
// inputTextAlignment.left: "Left" => "左"
// inputTextAlignment.right: "Right" => "右"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "选择如何在字段中对齐输入值。默认设置 “Auto” 如果应用了货币或数字掩码，则将输入值向右对齐，如果未应用，则向左对齐。"
// p.inputTextAlignment: "Input value alignment" => "输入值对齐"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "显示进度条"
// paneldynamic.showProgressBar: "Show the progress bar" => "显示进度条"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "进度条对齐"
// pv.carousel: "Carousel" => "旋转 木马"
// progressBarLocation.top: "Top" => "返回页首"
// progressBarLocation.bottom: "Bottom" => "底"
// progressBarLocation.topBottom: "Top and bottom" => "顶部和底部"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "在多列布局中排列选项。设置为 0 时，选项将以单行显示。当设置为 -1 时，实际值继承自父矩阵的 “Nested column count” 属性。"
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "不支持 YouTube 链接。"
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "开始配置表单"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "单击任何类别图标以浏览调查设置。将测量元素添加到设计图面后，其他设置将变为可用。"
// pe.caseInsensitive: "Case insensitive" => "不区分大小写"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "如果必须将正则表达式中的大写字母和小写字母视为等效字母，请选择此项。"

// ed.surveyPlaceholderTitle: "Your form is empty" => "您的表单为空"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "您的表单为空"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "从工具箱中拖动元素或单击下面的按钮。"
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "从工具箱中拖动元素或单击下面的按钮。"
// ed.previewPlaceholderTitle: "No preview" => "无预览"
// ed.previewPlaceholderTitleMobile: "No preview" => "无预览"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "调查不包含任何可见元素。"
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "调查不包含任何可见元素。"
// ed.translationsPlaceholderTitle: "No strings to translate" => "无需翻译字符串"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "无需翻译字符串"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "将元素添加到表单或更改工具栏中的字符串筛选器。"
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "将元素添加到表单或更改工具栏中的字符串筛选器。"
// lg.logicPlaceholderTitle: "No logical rules" => "无逻辑规则"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "无逻辑规则"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "创建规则以自定义调查流程。"
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "创建规则以自定义调查流程。"
// pe.showTimer: "Use a timer" => "使用计时器"
// theme.advancedMode: "Advanced mode" => "高级模式"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "设置计时器在页面上的位置。"
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "设置为 0 时，将自动计算高度以适应标题的内容。"
// p.mobileHeight: "Height on smartphones" => "智能手机上的身高"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "启用后，调查的顶部将覆盖页眉的底部。"
// ed.creatorSettingTitle: "Creator Settings" => "Creator 设置"
// tabs.accentColors: "Accent colors" => "强调色"
// tabs.scaling: "Scaling" => "缩放"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "为嵌套在此面板中的问题分配编号。"
// creatortheme.--sjs-special-background: "Surface background" => "表面背景"
// creatortheme.--sjs-primary-background-500: "Primary" => "主要"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "二 次"
// creatortheme.surfaceScale: "Surface" => "表面"
// creatortheme.userInterfaceBaseUnit: "User interface" => "用户界面"
// creatortheme.fontScale: "Font" => "字体"
// names.sc2020: "Survey Creator 2020" => "调查创建者 2020"
// names.default-light: "Light" => "光"
// names.default-dark: "Dark" => "黑暗"
// names.default-contrast: "Contrast" => "反差"
// panel.showNumber: "Number this panel" => "为此面板编号"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "选择是否希望调查在受访者回答了当前页面上的所有问题后自动前进到下一页。如果页面上的最后一个问题是开放式的或允许多个答案，则此功能将不适用。"
// autocomplete.name: "Full Name" => "全名"
// autocomplete.honorific-prefix: "Prefix" => "前缀"
// autocomplete.given-name: "First Name" => "名字"
// autocomplete.additional-name: "Middle Name" => "中间名"
// autocomplete.family-name: "Last Name" => "姓"
// autocomplete.honorific-suffix: "Suffix" => "后缀"
// autocomplete.nickname: "Nickname" => "昵称"
// autocomplete.organization-title: "Job Title" => "职称"
// autocomplete.username: "User Name" => "用户名"
// autocomplete.new-password: "New Password" => "新密码"
// autocomplete.current-password: "Current Password" => "当前密码"
// autocomplete.organization: "Organization Name" => "组织名称"
// autocomplete.street-address: "Full Street Address" => "全街地址"
// autocomplete.address-line1: "Address Line 1" => "地址行 1"
// autocomplete.address-line2: "Address Line 2" => "地址行 2"
// autocomplete.address-line3: "Address Line 3" => "地址行 3"
// autocomplete.address-level4: "Level 4 Address" => "4 级地址"
// autocomplete.address-level3: "Level 3 Address" => "3 级地址"
// autocomplete.address-level2: "Level 2 Address" => "2 级地址"
// autocomplete.address-level1: "Level 1 Address" => "1 级地址"
// autocomplete.country: "Country Code" => "国家代码"
// autocomplete.country-name: "Country Name" => "国家/地区名称"
// autocomplete.postal-code: "Postal Code" => "邮政编码"
// autocomplete.cc-name: "Cardholder Name" => "持卡人姓名"
// autocomplete.cc-given-name: "Cardholder First Name" => "持卡人名字"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "持卡人中间名"
// autocomplete.cc-family-name: "Cardholder Last Name" => "持卡人姓氏"
// autocomplete.cc-number: "Credit Card Number" => "信用卡号"
// autocomplete.cc-exp: "Expiration Date" => "有效期"
// autocomplete.cc-exp-month: "Expiration Month" => "到期月份"
// autocomplete.cc-exp-year: "Expiration Year" => "到期年份"
// autocomplete.cc-csc: "Card Security Code" => "卡安全码"
// autocomplete.cc-type: "Credit Card Type" => "信用卡类型"
// autocomplete.transaction-currency: "Transaction Currency" => "交易货币"
// autocomplete.transaction-amount: "Transaction Amount" => "交易金额"
// autocomplete.language: "Preferred Language" => "首选语言"
// autocomplete.bday: "Birthday" => "生日"
// autocomplete.bday-day: "Birthday Day" => "生日"
// autocomplete.bday-month: "Birthday Month" => "生日月份"
// autocomplete.bday-year: "Birthday Year" => "生日年份"
// autocomplete.sex: "Gender" => "性"
// autocomplete.url: "Website URL" => "网站 URL"
// autocomplete.photo: "Profile Photo" => "个人头像"
// autocomplete.tel: "Telephone Number" => "电话号码"
// autocomplete.tel-country-code: "Country Code for Phone" => "电话的国家代码"
// autocomplete.tel-national: "National Telephone Number" => "全国电话号码"
// autocomplete.tel-area-code: "Area Code" => "区号"
// autocomplete.tel-local: "Local Phone Number" => "本地电话号码"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "本地电话前缀"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "本地电话后缀"
// autocomplete.tel-extension: "Phone Extension" => "电话分机"
// autocomplete.email: "Email Address" => "电子邮件地址"
// autocomplete.impp: "Instant Messaging Protocol" => "即时通讯协议"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "锁定问题的展开/折叠状态"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "您还没有任何页面"
// pe.addNew@pages: "Add new page" => "添加新页面"
// ed.zoomInTooltip: "Zoom In" => "放大"
// ed.zoomOutTooltip: "Zoom Out" => "缩小"
// tabs.surfaceBackground: "Surface Background" => "表面背景"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "使用最后一个条目中的答案作为默认值"
// colors.gray: "Gray" => "灰色"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "导航按钮对齐"
// pv.allQuestions: "Show all questions" => "显示所有问题"
// pv.answeredQuestions: "Show answered questions only" => "仅显示已回答的问题"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "设置页面上导航按钮的位置。"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "使用以下矩阵、列或面板问题中的值作为选项 ID"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "使用以下矩阵、列或面板问题中的值作为选择文本"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "在单选和多选问题类型中，每个选项都有一个 ID 和显示值。此设置指定哪个矩阵、列或面板问题应提供 ID。"
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "在单选和多选问题类型中，每个选项都有一个 ID 和显示值。此设置指定哪个矩阵列或面板问题应提供显示文本。"
// pe.progressBarLocation: "Progress bar alignment" => "进度条对齐"
// progressBarLocation.topbottom: "Top and bottom" => "顶部和底部"
// progressBarLocation.aboveheader: "Above the header" => "标题上方"
// progressBarLocation.belowheader: "Below the header" => "标题下方"
// progressBarLocation.off: "Hidden" => "隐藏"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "设置进度条的位置。“自动”值在调查标题的上方或下方显示进度条。"
// survey.readOnly: "Make the survey read-only" => "将调查设为只读"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "选择是否要阻止受访者填写您的调查。"
// paneldynamic.showNumber: "Number the panel" => "为面板编号"
// question.showNumber: "Number this question" => "为这个问题编号"
// pe.previewMode: "Preview mode" => "预览模式"
// pe.gridLayoutEnabled: "Enable the grid layout" => "启用网格布局"
// pe.maskSettings: "Mask settings" => "蒙版设置"
// pe.detailErrorLocation: "Row expansion error message alignment" => "行扩展错误消息对齐"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "设置嵌套在详细信息部分中的问题的错误消息的位置。“Inherit” 选项应用“Error message alignment” 属性中的设置。"
// pe.gridLayoutColumns: "Grid layout columns" => "网格布局列"
// pe.startPageTitlePlaceholder: "Start Page" => "起始页"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "有效宽度，%"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "问题标题宽度，px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "您还没有布局列"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "指定此面板在网格布局中跨越的列数。"
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "此表允许您配置面板中的每个网格列。它根据行中的最大元素数自动设置每列的宽度百分比。要自定义网格布局，请手动调整这些值并定义每列中所有问题的标题宽度。"
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator 允许您手动调整表单元素的内联宽度以控制布局。如果这没有产生所需的结果，您可以启用网格布局，该布局使用基于列的系统构建表单元素。要配置布局列，请选择一个页面或面板，然后使用 “Question Settings” → “Grid columns” 表格。要调整问题跨越的列数，请选择它并在 “Layout” → “Column span” 字段中设置所需的值。"
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "指定此问题在网格布局中跨越多少列。"
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "此表允许您配置页面上的每个网格列。它根据行中的最大元素数自动设置每列的宽度百分比。要自定义网格布局，请手动调整这些值并定义每列中所有问题的标题宽度。"

// ed.expandTooltip: "Expand" => "扩大"
// ed.collapseTooltip: "Collapse" => "崩溃"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "例：100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "为所有项目标签设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。"
// ed.zoom100Tooltip: "Zoom to 100%" => "缩放到 100%"
// ed.addLanguageTooltip: "Add Language" => "添加语言"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "设置问题注释的文本区域中显示的行数。如果输入占用更多行，则会显示滚动条。"
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "动态文本的默认显示值"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "当问题值为空时，显示在 HTML 问题以及调查元素的动态标题和描述中的值。"
// showQuestionNumbers.recursive: "Recursive numbering" => "递归编号"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "问题标题宽度"
// pe.allowCustomChoices: "Allow custom choices" => "允许自定义选项"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "当问题标题与问题框的左侧对齐时，为问题标题设置一致的宽度。接受 CSS 值（px、%、in、pt 等）。"
// page.name: "A page ID that is not visible to respondents." => "受访者不可见的页面 ID。"
// page.description: "Type a page subtitle." => "键入页面副标题。"
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "显示在进度条或目录 （TOC） 中的导航按钮上的说明。如果将此字段留空，则导航按钮将使用页面标题或页面名称。要启用进度条或 TOC，请转到“调查”→“导航”。"
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "如果下拉列表中没有所需的选项，则选择以允许受访者添加自己的选择。自定义选项将仅在当前浏览器会话期间临时存储。"