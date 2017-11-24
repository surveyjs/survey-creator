import { editorLocalization } from "../editorLocalization";

var simplifiedChineseTranslation = {
  // strings for survey templates
  survey: {
    dropQuestion: "请将问题放置于此",
    copy: "复制",
    addToToolbox: "添加到工具箱",
    deletePanel: "删除面板",
    deleteQuestion: "删除题目"
  },
  // strings for question types
  qt: {
    checkbox: "多项选择",
    comment: "多行文本框",
    dropdown: "下拉框",
    file: "文件上传",
    html: "Html 代码",
    matrix: "矩阵 (单选题)",
    matrixdropdown: "矩阵 (下拉框)",
    matrixdynamic: "矩阵 (动态问题)",
    multipletext: "文本框组",
    panel: "面板",
    radiogroup: "单项选择",
    rating: "评分",
    text: "文本框"
  },
  // strings for editor
  ed: {
    addNewPage: "添加新页面",
    newPageName: "页面",
    newQuestionName: "问题",
    newPanelName: "面板",
    testSurvey: "测试问卷",
    testSurveyAgain: "再次测试问卷",
    testSurveyWidth: "问卷宽度: ",
    embedSurvey: "将问卷嵌入网页",
    saveSurvey: "保存问卷",
    designer: "问卷设计器",
    jsonEditor: "JSON 编辑器",
    undo: "撤销",
    redo: "恢复",
    options: "选项",
    generateValidJSON: "生成 JSON 数据",
    generateReadableJSON: "生成易读的 JSON 数据",
    toolbox: "工具箱",
    delSelObject: "删除所选对象",
    correctJSON: "请修正 JSON 数据",
    surveyResults: "问卷结果: "
  },
  // strings for property editors
  pe: {
    apply: "应用",
    ok: "确定",
    cancel: "取消",
    reset: "重置",
    close: "关闭",
    delete: "删除",
    addNew: "新建",
    removeAll: "全部删除",
    edit: "编辑器",
    empty: "<空>",
    fastEntry: "快速输入",
    formEntry: "表单输入",
    testService: "测试服务",
    expressionHelp:
      "请输入一项条件判断。当条件判断为真时问题/页面将可见。例如: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
    propertyIsEmpty: "请为该属性设定一个值",
    value: "值",
    text: "显示文本",
    required: "是否为必填项?",
    columnEdit: "编辑列: {0}",
    itemEdit: "编辑选项: {0}",
    hasOther: "可添加其他答案?",
    name: "题目名",
    title: "题目文本",
    cellType: "单元格类型",
    colCount: "列数",
    choicesOrder: "设置选项顺序",
    visible: "是否可见?",
    isRequired: "是否为必填项?",
    startWithNewLine: "问题是否新起一行?",
    rows: "文本框行数",
    placeHolder: "占位文本",
    showPreview: "是否显示图像预览?",
    storeDataAsText: "以 JSON 文本方式存储文件",
    maxSize: "文件最大尺寸 (Bytes)",
    imageHeight: "图片高度",
    imageWidth: "图片宽度",
    rowCount: "默认行数",
    addRowText: "添加条目按钮文本",
    removeRowText: "删除条目按钮文本",
    minRateDescription: "最小值提示",
    maxRateDescription: "最大值提示",
    inputType: "文本框类型",
    optionsCaption: "下拉框提示语",
    qEditorTitle: "编辑问题: {0}",
    tabs: {
      general: "通用项",
      fileOptions: "选项",
      html: "HTML 编辑器",
      columns: "设置列",
      rows: "设置行",
      choices: "设置选项",
      visibleIf: "设置可见条件",
      rateValues: "设置评分值",
      choicesByUrl: "通过 URL 导入选项",
      matrixChoices: "默认选项",
      multipleTextItems: "文本输入",
      validators: "校验规则"
    },
    editProperty: "编辑属性: '{0}'",
    items: "[ 项目数量: {0} ]",
    enterNewValue: "请设定值",
    noquestions: "问卷中还没有创建任何问题",
    createtrigger: "请创建触发器",
    triggerOn: "当 ",
    triggerMakePagesVisible: "使页面可见:",
    triggerMakeQuestionsVisible: "使问题可见:",
    triggerCompleteText: "如果满足条件，则完成问卷",
    triggerNotSet: "触发器尚未设置",
    triggerRunIf: "满足下列条件时执行",
    triggerSetToName: "修改下列问题值: ",
    triggerSetValue: "修改为: ",
    triggerIsVariable: "在问卷提交结果中不要包含该变量",
    verbChangeType: "编辑类型 ",
    verbChangePage: "编辑页面 "
  },
  // strings for operators
  op: {
    empty: "为空",
    notempty: "不为空",
    equal: "等于",
    notequal: "不等于",
    contains: "包含",
    notcontains: "不包含",
    greater: "大于",
    less: "小于",
    greaterorequal: "大于等于",
    lessorequal: "小于等于"
  },
  // strings for embed window
  ew: {
    angular: "使用 Angular 时",
    jquery: "使用 JQuery 时",
    knockout: "使用 Knockout 时",
    react: "使用 React 时",
    vue: "使用 Vue 时",
    bootstrap: "使用 Bootstrap 时",
    standard: "不使用 Bootstrap 时",
    showOnPage: "嵌入页面显示",
    showInWindow: "使用单独的问卷窗口",
    loadFromServer: "从服务器加载问卷 JSON 数据",
    titleScript: "脚本和样式",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  validators: {
    answercountvalidator: "数量检查",
    emailvalidator: "Email",
    numericvalidator: "数字",
    regexvalidator: "正则表达式",
    textvalidator: "文本"
  },
  triggers: {
    completetrigger: "完成问卷",
    setvaluetrigger: "设置问题值",
    visibletrigger: "修改可见性"
  },
  // strings of properties
  p: {
    name: "名字",
    title: {
      name: "标题",
      title: "如果与名字相同，请设置为空值"
    },
    survey_title: {
      name: "标题",
      title: "问卷标题在每页上都会显示"
    },
    page_title: {
      name: "标题",
      title: "页面标题"
    }
  }
};

editorLocalization.locales["zh-cn"] = simplifiedChineseTranslation;
