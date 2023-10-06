import { editorLocalization } from "survey-creator-core";

var traditionalChineseTranslation = {
  // survey templates
  survey: {
    edit: "編輯",
    externalHelpLink: "觀看並瞭解如何創建調查",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "請將問題放置於此",
    addLogicItem: "創建規則以自定義調查流。",
    copy: "複製",
    duplicate: "重複",
    addToToolbox: "添加到工具箱",
    deletePanel: "刪除面板",
    deleteQuestion: "刪除題目",
    convertTo: "轉變為",
    drag: "拖動元素",
  },
  // Question types
  qt: {
    default: "違約",
    checkbox: "多項選擇",
    comment: "多行文本框",
    imagepicker: "圖像選取器",
    ranking: "排名",
    image: "圖像",
    dropdown: "下拉框",
    tagbox: "多選下拉清單",
    file: "文件上傳",
    html: "Html 代碼",
    matrix: "矩陣 (單選題)",
    matrixdropdown: "矩陣 (下拉框)",
    matrixdynamic: "矩陣 (動態問題)",
    multipletext: "文本框組",
    panel: "面板",
    paneldynamic: "面板(動態)",
    radiogroup: "單項選擇",
    rating: "評分",
    text: "文本框",
    boolean: "布林選項",
    expression: "表達式",
    signaturepad: "簽名",
    buttongroup: "按鈕組"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "預設值 （{0}）",
    survey: "調查問卷",
    settings: "設置",
    settingsTooltip: "打開設置",
    surveySettings: "調查設置",
    surveySettingsTooltip: "打開調查設置",
    themeSettings: "主題設置",
    themeSettingsTooltip: "打開主題設置",
    showPanel: "顯示面板",
    hidePanel: "“隱藏”面板",
    prevSelected: "選擇上一個",
    nextSelected: "選擇下一步",
    surveyTypeName: "調查",
    pageTypeName: "頁",
    panelTypeName: "面板",
    questionTypeName: "問題",
    columnTypeName: "列",
    addNewPage: "添加新頁面",
    moveRight: "向右滾動",
    moveLeft: "向左滾動",
    deletePage: "刪除頁面",
    editPage: "編輯頁面",
    edit: "編輯",
    newPageName: "頁面",
    newQuestionName: "問題",
    newPanelName: "面板",
    newTextItemName: "發簡訊",
    testSurvey: "測試問卷",
    themeSurvey: "主題",
    defaultV2Theme: "違約",
    modernTheme: "摩登",
    defaultTheme: "預設（舊版）",
    testSurveyAgain: "再次測試問卷",
    testSurveyWidth: "問卷寬度: ",
    navigateToMsg: "你必須導航到",
    logic: "邏輯",
    embedSurvey: "將問卷嵌入網頁",
    translation: "譯本",
    saveSurvey: "保存問卷",
    saveSurveyTooltip: "保存調查",
    designer: "問卷設計器",
    jsonEditor: "JSON 編輯器",
    jsonHideErrors: "隱藏錯誤",
    jsonShowErrors: "顯示錯誤",
    undo: "還原",
    redo: "重做",
    undoTooltip: "恢復上次更改",
    redoTooltip: "重做更改",
    showMoreChoices: "顯示更多",
    showLessChoices: "顯示更少",
    copy: "複製",
    cut: "切",
    paste: "糊",
    copyTooltip: "將選取內容複製到剪貼簿",
    cutTooltip: "將所選取內容剪下剪貼簿",
    pasteTooltip: "從剪貼簿粘貼",
    options: "選項",
    generateValidJSON: "生成 JSON",
    generateReadableJSON: "生成易讀的 JSON",
    toolbox: "工具箱",
    "property-grid": "性能",
    propertyGridFilteredTextPlaceholder: "鍵入以搜尋...",
    toolboxGeneralCategory: "常規",
    toolboxChoiceCategory: "選擇題",
    toolboxTextCategory: "文本輸入問題",
    toolboxContainersCategory: "器皿",
    toolboxMatrixCategory: "矩陣問題",
    toolboxMiscCategory: "雜項",
    correctJSON: "修正 JSON",
    surveyResults: "問卷結果: ",
    surveyResultsTable: "如表",
    surveyResultsJson: "作為 JSON",
    resultsTitle: "問題標題",
    resultsName: "問題名稱",
    resultsValue: "答案值",
    resultsDisplayValue: "顯示值",
    modified: "已修改",
    saving: "保存中...",
    saved: "已保存",
    propertyEditorError: "錯誤",
    saveError: "錯誤！不保存編輯器內容。",
    translationPropertyGridTitle: "語言設置",
    themePropertyGridTitle: "主題設置",
    translationLanguages: "語言",
    translationDeleteLanguage: "您確定要刪除此語言的所有字串嗎？",
    translationAddLanguage: "選擇要翻譯的語言",
    translationShowAllStrings: "所有字串",
    translationShowUsedStringsOnly: "僅使用的字串",
    translationShowAllPages: "所有頁面",
    translationNoStrings: "沒有要翻譯的字串。請更換過濾器。",
    translationExportToSCVButton: "匯出為CSV",
    translationImportFromSCVButton: "從 CSV 導入",
    translateUsigAI: "自動翻譯全部",
    translationDialogTitle: "未翻譯的字串",
    translationMergeLocaleWithDefault: "將{0}與預設區域設置合併",
    translationPlaceHolder: "譯本。。。",
    themeExportButton: "出口",
    themeImportButton: "進口",
    themeResetButton: "將主題設置重置為預設值",
    bold: "大膽",
    italic: "斜體的",
    underline: "下劃線",
    addNewQuestion: "添加問題",
    selectPage: "選擇頁面...",
    carryForwardChoicesCopied: "選擇是從",
    htmlPlaceHolder: "HTML內容將在這裡。",
    panelPlaceHolder: "在此處從工具箱中刪除問題。",
    surveyPlaceHolder: "調查為空。從工具箱中拖動元素或按下下面的按鈕。",
    imagePlaceHolder: "將圖像拖放到此處或按下下面的按鈕並選擇要上傳的圖像",
    imageChooseImage: "選擇圖像",
    addNewTypeQuestion: "新增{0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[徽標]",
    auto: "自動",
    choices_Item: "專案",
    lg: {
      addNewItem: "添加新規則",
      empty_tab: "創建規則以自定義調查流。",
      page_visibilityName: "顯示（隱藏）頁面",
      page_enableName: "啟用（禁用）頁面",
      panel_visibilityName: "“顯示（隱藏）”面板",
      panel_enableName: "啟用（禁用）面板",
      question_visibilityName: "顯示（隱藏）問題",
      question_enableName: "啟用（禁用）問題",
      question_requireName: "提出必填題",
      question_resetValueName: "重置問題值",
      question_setValueName: "設置問題值",
      column_visibilityName: "顯示（隱藏）列",
      column_enableName: "啟用（禁用）列",
      column_requireName: "使列成為必填項",
      column_resetValueName: "重置列值",
      column_setValueName: "設置列值",
      trigger_completeName: "完成調查",
      trigger_setvalueName: "設置答案",
      trigger_copyvalueName: "複製答案",
      trigger_skipName: "跳至問題",
      trigger_runExpressionName: "運行表達式",
      completedHtmlOnConditionName: "設置「調查完成」頁面標記",
      page_visibilityDescription: "使頁面在邏輯表示式返回 true 時可見。否則保持不可見。",
      panel_visibilityDescription: "使面板在邏輯表達式返回 true 時可見。否則保持不可見。",
      panel_enableDescription: "使面板及其中的所有元素在邏輯表達式返回 true 時啟用。否則，請禁用它們。",
      question_visibilityDescription: "使問題在邏輯表達式返回 true 時可見。否則保持不可見。",
      question_enableDescription: "使問題在邏輯表達式返回 true 時啟用。否則將其禁用。",
      question_requireDescription: "當邏輯表達式返回 true 時，問題變為必需。",
      trigger_completeDescription: "當邏輯表達式返回 true 時，調查將完成，最終使用者將看到“謝謝頁面”。",
      trigger_setvalueDescription: "當邏輯表達式中使用的問題值發生更改並且邏輯表達式返回 true 時，該值將設置為所選問題。",
      trigger_copyvalueDescription: "當邏輯表達式中使用的問題值發生更改並且邏輯表達式返回 true 時，一個選定問題的值將複製到另一個選定問題。",
      trigger_skipDescription: "當邏輯表達式返回 true 時，調查將跳到/聚焦所選問題。",
      trigger_runExpressionDescription: "當邏輯表達式返回 true 時，將執行自定義表示式。您可以選擇將此表示式結果設置為選取問題",
      completedHtmlOnConditionDescription: "如果邏輯表達式返回 true，則「感謝頁面」的預設文本將更改為給定的文本。",
      itemExpressionText: "當表達式：「{0}」返回 true", //{0} - the expression
      itemEmptyExpressionText: "新規則",
      page_visibilityText: "使頁面{0}可見", //{0} page name
      panel_visibilityText: "使面板{0}可見", //{0} panel name
      panel_enableText: "使面板{0}啟用", //{0} panel name
      question_visibilityText: "使問題{0}可見", //{0} question name
      question_enableText: "使問題{0}啟用", //{0} question name
      question_requireText: "將問題{0}為必填項", //{0} question name
      column_visibilityText: "使問題{1}的列{0}可見", //{0} column name, {1} question name
      column_enableText: "使問題{1}列{0}啟用", //{0} column name, {1} question name
      column_requireText: "{0}將問題{1}列為必填項", //{0} column name, {1} question name
      setValueExpressionPlaceholder: "其結果將分配給目標問題的表達式。",
      trigger_completeText: "調查完成",
      trigger_setvalueText: "受到質疑：{0}價值{1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "明確問題值：{0}", //{0} question name
      trigger_copyvalueText: "複製到問題：{0}問題 {1} 的值", //{0} and {1} question names
      trigger_skipText: "調查 跳至問題{0}", //{0} question name
      trigger_runExpressionText1: "運行表達式：“{0}”", //{0} the expression
      trigger_runExpressionText2: "並質疑其結果：{0}", //{0} question name
      completedHtmlOnConditionText: "顯示「感謝頁面」的自定義文字。",
      showAllQuestions: "所有問題",
      showAllActionTypes: "所有操作類型",
      conditions: "條件",
      actions: "操作 （s）",
      expressionEditorTitle: "定義條件",
      actionsEditorTitle: "定義操作",
      deleteAction: "刪除操作",
      addNewAction: "添加操作",
      selectedActionCaption: "選擇操作...",
      expressionInvalid: "邏輯表達式為空或無效。請更正。",
      noActionError: "請至少添加一個操作。",
      actionInvalid: "請解決操作中的問題。",
      uncompletedRule_title: "邏輯規則不完整",
      uncompletedRule_text: "您尚未完成某些邏輯規則。如果現在離開該選項卡，更改將丟失。是否仍要離開選項卡而不完成更改？",
      uncompletedRule_apply: "是的",
      uncompletedRule_cancel: "不，我想完成規則",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "應用",
    ok: "確定",
    save: "救",
    clear: "清楚",
    saveTooltip: "救",
    cancel: "取消",
    set: "設置",
    reset: "重置",
    change: "改變",
    refresh: "刷新",
    close: "關閉",
    delete: "刪除",
    add: "加",
    addNew: "新建",
    addItem: "點選以新增專案...",
    removeItem: "按下以刪除該專案...",
    dragItem: "拖動專案",
    addOther: "其他",
    addSelectAll: "全選",
    addNone: "沒有",
    removeAll: "全部刪除",
    edit: "編輯器",
    back: "退貨而不保存",
    backTooltip: "退貨而不保存",
    saveAndBack: "保存並返回",
    saveAndBackTooltip: "保存並返回",
    doneEditing: "做",
    editChoices: "編輯選項",
    showChoices: "顯示選項",
    move: "移動",
    empty: "<空>",
    emptyValue: "值為空",
    fastEntry: "快速輸入",
    fastEntryNonUniqueError: "值“{0}”不是唯一的",
    fastEntryChoicesCountError: "請將項目數量限制在{0}到{1}",
    fastEntryChoicesMinCountError: "請輸入至少{0}專案",
    fastEntryPlaceholder: "您可以按以下格式設定資料：\n值 1|文本\n值2",
    formEntry: "表單輸入",
    testService: "測試服務",
    itemSelectorEmpty: "請選擇元素",
    conditionActionEmpty: "請選擇操作",
    conditionSelectQuestion: "選擇問題...",
    conditionSelectPage: "選擇頁面...",
    conditionSelectPanel: "選擇面板...",
    conditionValueQuestionTitle: "請輸入/選擇值",
    expressionHelp: "請輸入一項條件判斷。當條件判斷為真時問題/頁面將可見。例如: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
    aceEditorHelp: "按 ctrl+空格鍵獲取表達式完成提示",
    aceEditorRowTitle: "當前行",
    aceEditorPanelTitle: "當前面板",
    showMore: "更多細節...",
    assistantTitle: "可用問題",
    cellsEmptyRowsColumns: "至少應該有一列或一行",
    showPreviewBeforeComplete: "在提交調查之前預覽答案",
    overridingPropertyPrefix: "設置者",
    resetToDefaultCaption: "重置",
    propertyIsEmpty: "請為該屬性設定一個值",
    propertyIsNoUnique: "請輸入唯一值",
    propertyNameIsNotUnique: "請輸入唯一名稱",
    propertyNameIsIncorrect: "不要使用保留字：「專案」、「選項」、「面板」、“行”。",
    listIsEmpty: "尚未添加任何專案",
    "listIsEmpty@choices": "尚未添加任何選項",
    "addNew@choices": "添加選項",
    expressionIsEmpty: "表達式為空",
    value: "值",
    text: "顯示文本",
    rowid: "行標識",
    imageLink: "圖片或視頻網址",
    columnEdit: "編輯列: {0}",
    itemEdit: "編輯選項: {0}",
    url: "URL",
    path: "Path",
    valueName: "Value name",
    choicesbyurl: {
      valueName: "從以下 JSON 欄位中獲取值"
    },
    titleName: "Title name",
    imageLinkName: "從以下 JSON 欄位獲取影像網址",
    allowEmptyResponse: "允許空回應",
    titlePlaceholder: "標題",
    surveyTitlePlaceholder: "調查標題",
    pageTitlePlaceholder: "頁數 {num}",
    descriptionPlaceholder: "描述",
    surveyDescriptionPlaceholder: "描述",
    pageDescriptionPlaceholder: "描述",
    showOtherItem: "可添加其他答案?",
    otherText: "其他答案文本",
    showNoneItem: "允許“無”選項",
    noneText: "無選項文字",
    showSelectAllItem: "允許「全選」選項",
    selectAllText: "全選選項文本",
    choicesMin: "自動生成項的最小值",
    choicesMax: "自動生成項的最大值",
    choicesStep: "自動生成項的步驟",
    name: "題目名",
    title: "題目文本",
    cellType: "單元格類型",
    colCount: "列數",
    choicesOrder: "設置選項順序",
    visible: "是否可見?",
    isRequired: "是否為必填項?",
    markRequired: "標記為必填",
    removeRequiredMark: "刪除所需的標記",
    isAllRowRequired: "要求所有行都回答",
    requiredErrorText: "“必需”錯誤消息",
    startWithNewLine: "問題是否新起一行?",
    rows: "文本框行數",
    cols: "列",
    placeholder: "占位文本",
    showPreview: "是否顯示圖像預覽?",
    storeDataAsText: "以 JSON 文本方式存儲文件",
    maxSize: "文件最大尺寸 (Bytes)",
    imageHeight: "圖片高度",
    imageWidth: "圖片寬度",
    rowCount: "默認行數",
    columnLayout: "列佈局",
    addRowLocation: "“添加行”按鈕位置",
    addRowText: "添加條目按鈕文本",
    removeRowText: "刪除條目按鈕文本",
    rateMin: "最低速率值",
    rateMax: "最大速率值",
    rateStep: "速率步長",
    minRateDescription: "最小值提示",
    maxRateDescription: "最大值提示",
    inputType: "文本框類型",
    optionsCaption: "下拉框提示語",
    defaultValue: "默認答案",
    cellsDefaultRow: "預設文字",
    surveyEditorTitle: "編輯調查設置",
    qEditorTitle: "編輯問題: {0}",
    maxLength: "最大長度（字元）",
    buildExpression: "建",
    editExpression: "編輯",
    and: "和",
    or: "或",
    remove: "刪除",
    addCondition: "添加條件",
    emptyLogicPopupMessage: "選擇一個問題以開始配置條件。",
    if: "如果",
    then: "然後",
    setToName: "目標問題",
    fromName: "要從中複製答案的問題",
    gotoName: "要跳到的問題",
    ruleIsNotSet: "規則不正確",
    includeIntoResult: "包含在調查結果中",
    showTitle: "顯示/隱藏 標題",
    expandCollapseTitle: "展開/摺疊標題",
    locale: "默認語言",
    simulator: "選擇設備類型",
    landscapeOrientation: "切換到橫向",
    portraitOrientation: "切換到縱向",
    mode: "模式 (編輯/只讀)",
    clearInvisibleValues: "清除隱藏值",
    cookieName: "Cookie name (to disable run survey two times locally)",
    sendResultOnPageNext: "Send survey results on page next",
    storeOthersAsComment: "Store 'others' value in separate field",
    showPageTitles: "顯示頁面標題",
    showPageNumbers: "顯示頁數",
    pagePrevText: "前一頁按鈕文本",
    pageNextText: "後一頁按鈕文本",
    completeText: "完成按鈕文本",
    previewText: "「預覽答案」按鈕文本",
    editText: "編輯應答按鈕文本",
    startSurveyText: "開始按鈕文本",
    showNavigationButtons: "顯示導航按鈕 (默認導航)",
    showPrevButton: "顯示前一頁按鈕 (用戶可返回至前一頁面)",
    firstPageIsStarted: "調查的第一頁面為起始頁.",
    showCompletedPage: "結尾展示完成後的頁面 (completedHtml)",
    goNextPageAutomatic: "回答本頁所有問題後，自動跳轉到下一頁",
    showProgressBar: "顯示進度條",
    questionTitleLocation: "問題的標題位置",
    requiredText: "The question required symbol(s)",
    questionStartIndex: "問題起始標誌 (1, 2 or 'A', 'a')",
    showQuestionNumbers: "顯示問題編號",
    questionTitleTemplate: "問題標題模板, 默認為: '{no}. {require} {title}'",
    questionErrorLocation: "問題錯誤定位",
    focusFirstQuestionAutomatic: "改變頁面時聚焦在第一個問題",
    questionsOrder: "Elements order on the page",
    maxTimeToFinish: "完成調查的最長時間",
    maxTimeToFinishPage: "完成調查中頁面的最長時間",
    image: {
      imageHeight: "圖片高度（以 CSS 接受的值為單位）",
      imageWidth: "影像寬度（以 CSS 接受的值為單位）"
    },
    // survey templates
    survey: {
      title: "標題"
    },
    page: {
      title: "標題",
      maxTimeToFinish: "完成頁面的時間限制（秒為單位 ）"
    },
    question: {
      page: "父頁面"
    },
    showTimerPanel: "顯示計時器面板",
    showTimerPanelMode: "顯示計時器面板模式",
    renderMode: "渲染模式",
    allowAddPanel: "允許添加面板",
    allowRemovePanel: "允許刪除面板",
    noEntriesText: "空條目文本",
    panelAddText: "添加面板文本",
    panelRemoveText: "刪除面板文本",
    isSinglePage: "在一個頁面上展示所有元素",
    html: "網頁標記",
    expression: "表達",
    setValue: "答",
    dataFormat: "圖像格式",
    allowAddRows: "允許添加行",
    allowRemoveRows: "允許刪除行",
    allowRowsDragAndDrop: "允許行拖放",
    responsiveImageSizeHelp: "如果指定確切的圖像寬度或高度，則不適用。",
    minImageWidth: "最小圖像寬度",
    maxImageWidth: "最大圖像寬度",
    minImageHeight: "最小圖像高度",
    maxImageHeight: "最大圖像高度",
    minValue: "最小值",
    maxValue: "最大值",
    minLength: "最小長度（以字元為單位）",
    allowDigits: "允許數位",
    minCount: "最小計數",
    maxCount: "最大計數",
    regex: "正則表達式",
    surveyvalidator: {
      text: "錯誤資訊",
      expression: "驗證表達式"
    },
    totalText: "總計行文本",
    totalType: "總類型",
    totalExpression: "總表達",
    totalDisplayStyle: "總值顯示樣式",
    totalCurrency: "貨幣",
    totalFormat: "帶格式的字串",
    logo: "徽標（URL 或base64 編碼的字串）",
    questionsOnPageMode: "調查結構",
    maxTextLength: "最大答案長度（以字元為單位）",
    maxOthersLength: "最大註解長度（以字元為單位）",
    autoGrowComment: "如有必要，自動展開評論區域",
    allowResizeComment: "允許用戶調整文字區域的大小",
    textUpdateMode: "更新文字問題值",
    focusOnFirstError: "將焦點放在第一個無效答案上",
    checkErrorsMode: "運行驗證",
    navigateToUrl: "導航到網址",
    navigateToUrlOnCondition: "動態網址",
    completedBeforeHtml: "用於顯示使用者是否已填寫此調查的標記",
    completedHtml: "調查完成頁面標記",
    completedHtmlOnCondition: "動態調查完成頁面標記",
    loadingHtml: "載入調查模型時要顯示的標記",
    commentText: "註釋區文本",
    autocomplete: "自動完成類型",
    labelTrue: "“真實”標籤",
    labelFalse: "“虛假”標籤",
    allowClear: "顯示“清除”按鈕",
    displayStyle: "值顯示樣式",
    format: "帶格式的字串",
    maximumFractionDigits: "最大小數位數",
    minimumFractionDigits: "最小小數位數",
    useGrouping: "顯示分組分隔符",
    allowMultiple: "允許多個檔",
    allowImagesPreview: "預覽圖像",
    acceptedTypes: "接受的文件類型",
    waitForUpload: "等待上傳完成",
    needConfirmRemoveFile: "確認文件刪除",
    detailPanelMode: "詳細資訊面板位置",
    minRowCount: "最小行數",
    maxRowCount: "最大行數",
    confirmDelete: "確認刪除行",
    confirmDeleteText: "確認消息",
    paneldynamic: {
      confirmDelete: "確認面板刪除"
    },
    panelCount: "初始面板計數",
    minPanelCount: "最小面板數",
    maxPanelCount: "最大面板數",
    panelsState: "內面板展開狀態",
    templateDescription: "描述範本",
    templateTitle: "標題範本",
    panelPrevText: "“上一個面板”按鈕工具提示",
    panelNextText: "“下一個面板”按鈕工具提示",
    showRangeInProgress: "顯示進度條",
    templateTitleLocation: "問題標題位置",
    panelRemoveButtonLocation: "“刪除面板”按鈕位置",
    hideIfRowsEmpty: "如果沒有行，則隱藏問題",
    hideColumnsIfEmpty: "如果沒有行，則隱藏列",
    rateValues: "自定義費率值",
    rateCount: "速率計數",
    autoGenerate: "如何指定速率值？",
    hideIfChoicesEmpty: "如果問題不包含任何選項，則隱藏問題",
    hideNumber: "隱藏問題編號",
    minWidth: "最小寬度（以 CSS 接受的值為單位）",
    maxWidth: "最大寬度（以 CSS 接受的值為單位）",
    width: "寬度（以 CSS 接受的值為單位）",
    showHeader: "顯示列標題",
    horizontalScroll: "顯示水平滾動條",
    columnMinWidth: "最小列寬（以 CSS 接受的值為單位）",
    rowTitleWidth: "行標題寬度（以 CSS 接受的值為單位）",
    valueTrue: "“真”值",
    valueFalse: "“假”值",
    minErrorText: "“值低於最小值”錯誤消息",
    maxErrorText: "“值超過最大值”錯誤消息",
    otherErrorText: "“空評論”錯誤消息",
    keyDuplicationError: "“非唯一鍵值”錯誤消息",
    minSelectedChoices: "最少選擇的選項",
    maxSelectedChoices: "最大選定選項數",
    showClearButton: "顯示“清除”按鈕",
    showNumber: "顯示面板編號",
    logoWidth: "徽標寬度（以 CSS 接受的值為單位）",
    logoHeight: "徽標高度（以 CSS 接受的值為單位）",
    readOnly: "唯讀",
    enableIf: "可編輯，如果",
    emptyRowsText: "“無行”消息",
    size: "輸入欄位大小（以字元為單位 ）",
    separateSpecialChoices: "單獨的特殊選項（無、其他、全選）",
    choicesFromQuestion: "複製以下問題的選項",
    choicesFromQuestionMode: "要複製哪些選項？",
    showCommentArea: "顯示評論區域",
    commentPlaceholder: "註釋區佔位元",
    displayRateDescriptionsAsExtremeItems: "將速率描述顯示為極值",
    rowsOrder: "行順序",
    columnsLayout: "列佈局",
    columnColCount: "嵌套列計數",
    state: "面板展開狀態",
    correctAnswer: "正確答案",
    defaultPanelValue: "預設值",
    cells: "單元格文本",
    keyName: "鍵列",
    itemvalue: {
      text: "可選文字"
    },
    logoPosition: "徽標位置",
    addLogo: "新增徽標...",
    changeLogo: "變更徽標...",
    logoPositions: {
      none: "刪除徽標",
      left: "左",
      right: "右",
      top: "在頂部",
      bottom: "在底部"
    },
    tabs: {
      general: "通用項",
      fileOptions: "選項",
      html: "HTML 編輯器",
      columns: "設置列",
      rows: "設置行",
      choices: "設置選項",
      items: "專案",
      visibleIf: "設置可見條件",
      enableIf: "Enable If",
      requiredIf: "如果",
      rateValues: "設置評分值",
      choicesByUrl: "通過 URL 導入選項",
      matrixChoices: "默認選項",
      multipleTextItems: "文本輸入",
      numbering: "編號",
      validators: "校驗規則",
      navigation: "導航",
      question: "問題",
      pages: "頁面",
      timer: "問卷計時器",
      calculatedValues: "計算值",
      triggers: "觸發器",
      templateTitle: "標題範本",
      totals: "總數",
      logic: "邏輯",
      layout: "佈局",
      data: "數據",
      validation: "驗證",
      cells: "單元格文本",
      showOnCompleted: "調查完成",
      logo: "調查標題中的徽標",
      slider: "滑塊",
      expression: "表達",
      others: "別人"
    },
    editProperty: "編輯屬性: '{0}'",
    items: "[ 項目數量: {0} ]",
    choicesVisibleIf: "在以下情況下，選項可見",
    choicesEnableIf: "在以下情況下，可以選擇選項",
    columnsEnableIf: "在以下情況下，列可見",
    rowsEnableIf: "在以下情況下，行可見",
    indent: "添加縮進",
    panel: {
      indent: "添加外部縮進"
    },
    innerIndent: "添加內部縮進",
    defaultValueFromLastRow: "從最後一行獲取預設值",
    defaultValueFromLastPanel: "從最後一個面板中獲取預設值",
    enterNewValue: "請設定值",
    noquestions: "問卷中還沒有創建任何問題",
    createtrigger: "請創建觸發器",
    titleKeyboardAdornerTip: "按回車鍵編輯",
    keyboardAdornerTip: "按回車鍵編輯專案，按刪除按鈕刪除專案，按Alt加向上箭頭或向下箭頭移動專案",
    triggerOn: "當 ",
    triggerMakePagesVisible: "使頁面可見:",
    triggerMakeQuestionsVisible: "使問題可見:",
    triggerCompleteText: "如果滿足條件，則完成問卷",
    triggerNotSet: "觸發器尚未設置",
    triggerRunIf: "滿足下列條件時執行",
    triggerSetToName: "修改下列問題值: ",
    triggerFromName: "從以下位置複製值：",
    triggerRunExpression: "運行此表達式",
    triggerSetValue: "修改為: ",
    triggerGotoName: "轉到問題",
    triggerIsVariable: "在問卷提交結果中不要包含該變量",
    triggerRunExpressionEmpty: "請輸入有效的表達式",
    emptyExpressionPlaceHolder: "在這裡鍵入表示式...",
    noFile: "未選擇任何檔",
    clearIfInvisible: "如果問題被隱藏，則清除該值",
    valuePropertyName: "值屬性名稱",
    searchEnabled: "啟用搜索",
    hideSelectedItems: "隱藏選取選取專案",
    closeOnSelect: "選擇後關閉下拉清單",
    signatureWidth: "簽名寬度",
    signatureHeight: "標誌性高度",
    verticalAlign: "垂直對齊",
    alternateRows: "交替行",
    columnsVisibleIf: "在以下情況下，列可見",
    rowsVisibleIf: "在以下情況下，行可見",
    otherPlaceholder: "註釋區佔位元",
    rateType: "費率類型"
  },
  // Property values
  pv: {
    "true": "真",
    "false": "假",
    file: "本地檔",
    camera: "照相機",
    "file-camera": "本地檔或相機",
    inherit: "繼承",
    show: "可見",
    hide: "隱藏",
    default: "繼承",
    initial: "初",
    random: "隨機",
    collapsed: "倒塌",
    expanded: "擴大",
    none: "沒有",
    asc: "上升",
    desc: "降",
    indeterminate: "定",
    decimal: "十進位",
    currency: "貨幣",
    percent: "百分之",
    firstExpanded: "第一個面板展開",
    off: "隱藏問題編號",
    onpanel: "在每個面板上開始",
    onPanel: "在每個面板上開始",
    onSurvey: "在整個調查過程中繼續",
    list: "清單",
    progressTop: "面板導航器 + 頂部的進度條",
    progressBottom: "面板導航器 + 底部的進度條",
    progressTopBottom: "面板導航器 + 頂部和底部的進度條",
    tab: "製表元",
    horizontal: "水準",
    vertical: "垂直",
    top: "返回頁首",
    bottom: "底",
    topBottom: "頂部和底部",
    both: "雙",
    left: "左",
    right: "右",
    color: "顏色",
    date: "日期",
    datetime: "日期時間",
    "datetime-local": "日期時間-本地",
    email: "電子郵件",
    month: "月",
    number: "數",
    password: "密碼",
    range: "範圍",
    tel: "電話",
    text: "發簡訊",
    time: "時間",
    url: "網址",
    week: "周",
    hidden: "隱藏",
    on: "從上一頁繼續",
    onPage: "從每個頁面開始",
    edit: "編輯",
    display: "唯讀",
    onComplete: "調查完成時",
    onHidden: "當問題變得隱藏時",
    onHiddenContainer: "當問題或其面板/頁面被隱藏時",
    clearInvisibleValues: {
      none: "從不"
    },
    inputType: {
      color: "顏色",
      date: "日期",
      "datetime-local": "日期和時間",
      email: "電子郵件",
      month: "月",
      number: "數",
      password: "密碼",
      range: "範圍",
      tel: "電話號碼",
      text: "發簡訊",
      time: "時間",
      url: "網址",
      week: "周"
    },
    all: "都",
    page: "頁",
    survey: "調查",
    onNextPage: "切換到下一頁時",
    onValueChanged: "更改答案後",
    onValueChanging: "更改答案之前",
    standard: "原始結構",
    singlePage: "所有問題都在一個頁面上",
    questionPerPage: "單個頁面上的每個問題",
    noPreview: "無預覽",
    showAllQuestions: "顯示所有問題",
    showAnsweredQuestions: "僅顯示已回答的問題",
    pages: "已完成的頁面",
    questions: "已回答的問題",
    requiredQuestions: "回答必填問題",
    correctQuestions: "有效答案",
    buttons: "已完成的頁面（按鈕 UI）",
    underInput: "在輸入下",
    underTitle: "在標題下",
    onBlur: "模糊時",
    onTyping: "打字時",
    underRow: "在行下",
    underRowSingle: "在該行下，只有一個面板可見",
    showNavigationButtons: {
      none: "隱藏"
    },
    showProgressBar: {
      off: "隱藏"
    },
    showTimerPanel: {
      none: "隱藏"
    },
    showTimerPanelMode: {
      all: "雙"
    },
    detailPanelMode: {
      none: "隱藏"
    },
    addRowLocation: {
      default: "取決於矩陣佈局"
    },
    panelsState: {
      default: "使用者無法展開或摺疊面板",
      collapsed: "所有面板均已摺疊",
      expanded: "所有面板均已展開"
    },
    widthMode: {
      auto: "自動",
      static: "靜態的",
      responsive: "回應"
    },
    imageFit: {
      none: "沒有",
      contain: "包含",
      cover: "蓋",
      fill: "填補"
    },
    contentMode: {
      auto: "自動",
      image: "圖像",
      video: "視頻",
      youtube: "優酷"
    },
    displayMode: {
      auto: "自動",
      buttons: "按鈕",
      dropdown: "下拉清單"
    },
    rateColorMode: {
      default: "違約"
    },
    autoGenerate: {
      "true": "生成",
      "false": "手動輸入"
    },
    rateType: {
      labels: "標籤",
      stars: "星星",
      smileys: "笑臉"
    }
  },
  // Operators
  op: {
    empty: "為空",
    notempty: "不為空",
    equal: "等於",
    notequal: "不等於",
    contains: "包含",
    notcontains: "不包含",
    anyof: "任何",
    allof: "全部",
    greater: "大於",
    less: "小於",
    greaterorequal: "大於等於",
    lessorequal: "小於等於",
    and: "和",
    or: "或"
  },
  // Embed window
  ew: {
    angular: "使用 Angular 時",
    jquery: "使用 JQuery 時",
    knockout: "使用 Knockout 時",
    react: "使用 React 時",
    vue: "使用 Vue 時",
    bootstrap: "使用 Bootstrap 時",
    modern: "現代主題",
    default: "默認主題",
    orange: "橙色主題",
    darkblue: "深藍色主題",
    darkrose: "“暗玫瑰”主題",
    stone: "“石頭”主題",
    winter: "“冬季”主題",
    winterstone: "“冬日之石”主題",
    showOnPage: "嵌入頁面顯示",
    showInWindow: "使用單獨的問卷視窗",
    loadFromServer: "從服務器加載問卷 JSON 數據",
    titleScript: "腳本和樣式",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "選擇要測試的頁面",
    showInvisibleElements: "顯示不可見元素",
    hideInvisibleElements: "隱藏不可見元素"
  },
  validators: {
    answercountvalidator: "數量檢查",
    emailvalidator: "Email",
    expressionvalidator: "表達",
    numericvalidator: "數字",
    regexvalidator: "正則表達式",
    textvalidator: "文本"
  },
  triggers: {
    completetrigger: "完成問卷",
    setvaluetrigger: "設置問題值",
    copyvaluetrigger: "複製答案",
    skiptrigger: "跳至問題",
    runexpressiontrigger: "運行表達式",
    visibletrigger: "修改可見性"
  },
  pehelp: {
    cookieName: "Cookie 可防止使用者兩次填寫同一調查問卷。",
    size: "調整輸入欄位的可見區域的大小。請使用<b>「驗證→最大長度</b>」設置來限制輸入長度。",
    format: "使用 {0} 作為實際值的佔位元。",
    totalText: "僅當至少一列具有 Total 類型或 Total 運算式時才可見。",
    acceptedTypes: "有關詳細資訊，請參閱 [accept]（https://www.w3schools.com/tags/att_input_accept.asp） 屬性說明。",
    columnColCount: "僅適用於單選組和複選框單元類型。",
    autocomplete: "有關詳細資訊，請參閱 [autocomplete]（https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete） 屬性說明。",
    valueName: "如果未設置此屬性，則答案將存儲在 Name 屬性指定的欄位中。",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "如果指定的列包含相同的值，則調查將引發「非唯一鍵值」錯誤。"
  },
  // Properties
  p: {
    title: {
      name: "標題",
      title: "如果與名字相同，請設置為空值"
    },
    multiSelect: "允許多項選擇",
    showLabel: "顯示圖像標題",
    value: "價值",
    tabAlign: "製表元對齊方式",
    description: "說明",
    logoFit: "徽標合身",
    pages: "頁面",
    questions: "問題",
    triggers: "觸發器",
    calculatedValues: "計算值",
    surveyId: "調查編號",
    surveyPostId: "調查帖子編號",
    surveyShowDataSaving: "調查顯示數據保存",
    questionDescriptionLocation: "問題描述位置",
    progressBarType: "進度條類型",
    showTOC: "顯示目錄",
    tocLocation: "目錄位置",
    questionTitlePattern: "問題標題模式",
    widthMode: "寬度模式",
    showBrandInfo: "顯示品牌資訊",
    useDisplayValuesInDynamicTexts: "在動態文字中使用顯示值",
    visibleIf: "可見，如果",
    titleLocation: "標題位置",
    descriptionLocation: "描述位置",
    defaultValueExpression: "預設值表達式",
    requiredIf: "在以下情況下是必需的",
    resetValueIf: "如果出現以下情況，則重置值",
    setValueIf: "設置值，如果",
    validators: "驗證者",
    bindings: "綁定",
    renderAs: "渲染為",
    attachOriginalItems: "附加原始專案",
    choices: "選項",
    choicesByUrl: "Url選項",
    currency: "貨幣",
    cellHint: "單元格提示",
    isUnique: "是獨一無二的",
    showInMultipleColumns: "在多列中顯示",
    totalMaximumFractionDigits: "最大小數位數總數",
    totalMinimumFractionDigits: "最小小數位數總數",
    columns: "列",
    detailElements: "細節元素",
    allowAdaptiveActions: "允許自適應操作",
    defaultRowValue: "預設行值",
    detailPanelShowOnAdding: "添加時顯示的詳細資訊面板",
    choicesLazyLoadEnabled: "選項延遲載入已啟用",
    choicesLazyLoadPageSize: "選擇延遲載入頁面大小",
    inputFieldComponent: "輸入欄位元件",
    itemComponent: "項目元件",
    min: "最小值",
    max: "麥克斯",
    minValueExpression: "最小值表達式",
    maxValueExpression: "最大值表達式",
    step: "步",
    dataList: "數據清單",
    itemSize: "專案大小",
    elements: "元素",
    content: "內容",
    navigationButtonsVisibility: "導航按鈕可見性",
    navigationTitle: "導航標題",
    navigationDescription: "導航說明",
    longTap: "長按",
    autoGrow: "自動增長",
    allowResize: "允許調整大小",
    acceptCarriageReturn: "接受回車",
    displayMode: "顯示模式",
    rateType: "費率類型",
    label: "標籤",
    contentMode: "內容模式",
    imageFit: "圖像貼合",
    altText: "可選文字",
    height: "高度",
    penColor: "筆顏色",
    backgroundColor: "背景色",
    templateElements: "範本元素",
    operator: "算子",
    isVariable: "是可變的",
    runExpression: "運行表達式",
    showCaption: "顯示標題",
    iconName: "圖示名稱",
    iconSize: "圖示大小",
    precision: "精度",
    matrixDragHandleArea: "矩陣拖動手柄區域",
    backgroundImage: "背景圖片",
    backgroundImageFit: "背景圖像適合",
    backgroundImageAttachment: "背景圖像附件",
    backgroundOpacity: "背景不透明度",
    selectToRankEnabled: "選擇啟用排名",
    selectToRankAreasLayout: "選擇以對區域佈局進行排名",
    allowCameraAccess: "允許攝像頭訪問",
    scaleColorMode: "縮放顏色模式",
    rateColorMode: "評價顏色模式",
    templateTabTitle: "範本選項卡標題",
    templateVisibleIf: "範本可見，如果",
    copyDisplayValue: "複製顯示值"
  },
  theme: {
    "--background": "背景色",
    "--background-dim-light": "背景昏暗的光線顏色",
    "--primary-foreground": "原色前景色",
    "--foreground": "前景色",
    "--base-unit": "基本單元",
    groupGeneral: "常規",
    groupAdvanced: "高深",
    groupHeader: "頁眉",
    themeName: "主題",
    themeMode: "問題外觀",
    themeModePanels: "違約",
    themeModeLightweight: "不帶面板",
    themePaletteLight: "光",
    themePaletteDark: "黑暗",
    primaryColor: "強調文字顏色",
    primaryDefaultColor: "違約",
    primaryDarkColor: "懸停",
    primaryLightColor: "選擇",
    coverTitleForecolor: "標題前彩",
    coverOverlapEnabled: "重疊",
    backgroundDimColor: "背景色",
    backgroundImage: "背景圖片",
    backgroundImageFitAuto: "自動",
    backgroundImageFitCover: "蓋",
    backgroundImageFitContain: "包含",
    backgroundImageFitFill: "伸展",
    backgroundImageFitTile: "瓦",
    backgroundOpacity: "不透明度",
    backgroundImageAttachmentFixed: "固定",
    backgroundImageAttachmentScroll: "滾動",
    panelBackgroundTransparency: "面板背景不透明度",
    questionBackgroundTransparency: "問題背景不透明度",
    questionPanel: "面板背景和角半徑",
    questionTitle: "問題標題字體",
    questionDescription: "問題描述字體",
    editorPanel: "輸入元素",
    editorFont: "輸入元素字體",
    backcolor: "默認背景",
    hovercolor: "懸停背景",
    borderDecoration: "邊框裝飾",
    accentBackground: "強調文字背景",
    accentForeground: "強調文字前景",
    primaryForecolor: "默認顏色",
    primaryForecolorLight: "禁用顏色",
    linesColors: "次要線條顏色",
    borderDefault: "暗",
    borderLight: "打火機",
    fontFamily: "字體系列",
    fontSize: "字體大小",
    color: "顏色",
    placeholderColor: "佔位元顏色",
    size: "大小",
    fontWeightRegular: "定期",
    fontWeightHeavy: "重",
    fontWeightSemiBold: "半粗體",
    fontWeightBold: "大膽",
    scale: "規模",
    cornerRadius: "拐角半徑",
    surveyTitle: "調查標題字體",
    pageTitle: "頁面標題字體",
    pageDescription: "頁面描述字體",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "添加陰影效果",
    opacity: "不透明度",
    boxShadowBlur: "模糊",
    boxShadowSpread: "傳播",
    boxShadowDrop: "落",
    boxShadowInner: "內",
    questionShadow: "陰影效果",
    editorShadow: "輸入元素陰影效果",
    headerView: "視圖",
    headerViewBasic: "基本",
    headerViewAdvanced: "高深",
    coverInheritWidthFrom: "內容區域寬度",
    coverInheritWidthFromSurvey: "與調查相同",
    coverInheritWidthFromPage: "適合頁面",
    coverTextAreaWidth: "文本寬度",
    coverBackgroundColorSwitch: "背景色",
    coverBackgroundColorNone: "沒有",
    coverBackgroundColorAccentColor: "強調文字顏色",
    coverBackgroundColorCustom: "習慣",
    horizontalAlignmentLeft: "左",
    horizontalAlignmentCenter: "中心",
    horizontalAlignmentRight: "右",
    verticalAlignmentTop: "返回頁首",
    verticalAlignmentMiddle: "中間",
    verticalAlignmentBottom: "底",
    logoPosition: "徽標位置",
    coverTitlePosition: "標題位置",
    coverDescriptionPosition: "描述位置",
    names: {
      default: "違約",
      sharp: "鋒利",
      borderless: "無國界",
      flat: "平",
      plain: "平原",
      doubleborder: "雙邊框",
      layered: "分層的",
      solid: "固體",
      threedimensional: "。.3D",
      contrast: "反差"
    },
    colors: {
      teal: "水鴨",
      blue: "藍",
      purple: "紫色",
      orchid: "蘭花",
      tulip: "鬱金香",
      brown: "棕色",
      green: "綠"
    }
  }
};

editorLocalization.locales["zh-tw"] = traditionalChineseTranslation;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.externalHelpLink: "Watch and learn how to create surveys" => "觀看並瞭解如何創建調查"
// survey.externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber" => "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "創建規則以自定義調查流。"
// survey.duplicate: "Duplicate" => "重複"
// survey.drag: "Drag element" => "拖動元素"
// qt.default: "Default" => "違約"
// qt.imagepicker: "Image Picker" => "圖像選取器"
// qt.ranking: "Ranking" => "排名"
// qt.image: "Image" => "圖像"
// qt.tagbox: "Multi-Select Dropdown" => "多選下拉清單"
// qt.signaturepad: "Signature" => "簽名"
// qt.buttongroup: "Button Group" => "按鈕組"
// ed.defaultLocale: "Default ({0})" => "預設值 （{0}）"
// ed.settings: "Settings" => "設置"
// ed.settingsTooltip: "Open settings" => "打開設置"
// ed.surveySettings: "Survey Settings" => "調查設置"
// ed.surveySettingsTooltip: "Open survey settings" => "打開調查設置"
// ed.showPanel: "Show Panel" => "顯示面板"
// ed.hidePanel: "Hide Panel" => "“隱藏”面板"
// ed.prevSelected: "Select previous" => "選擇上一個"
// ed.nextSelected: "Select next" => "選擇下一步"
// ed.surveyTypeName: "Survey" => "調查"
// ed.pageTypeName: "Page" => "頁"
// ed.panelTypeName: "Panel" => "面板"
// ed.questionTypeName: "Question" => "問題"
// ed.columnTypeName: "Column" => "列"
// ed.moveRight: "Scroll to the Right" => "向右滾動"
// ed.moveLeft: "Scroll to the Left" => "向左滾動"
// ed.edit: "Edit" => "編輯"
// ed.newTextItemName: "text" => "發簡訊"
// ed.themeSurvey: "Themes" => "主題"
// ed.defaultV2Theme: "Default" => "違約"
// ed.modernTheme: "Modern" => "摩登"
// ed.defaultTheme: "Default (legacy)" => "預設（舊版）"
// ed.navigateToMsg: "You had to navigate to" => "你必須導航到"
// ed.logic: "Logic" => "邏輯"
// ed.translation: "Translation" => "譯本"
// ed.saveSurveyTooltip: "Save Survey" => "保存調查"
// ed.jsonHideErrors: "Hide errors" => "隱藏錯誤"
// ed.jsonShowErrors: "Show errors" => "顯示錯誤"
// ed.undoTooltip: "Undo last change" => "恢復上次更改"
// ed.redoTooltip: "Redo the change" => "重做更改"
// ed.showMoreChoices: "Show more" => "顯示更多"
// ed.showLessChoices: "Show less" => "顯示更少"
// ed.copy: "Copy" => "複製"
// ed.cut: "Cut" => "切"
// ed.paste: "Paste" => "糊"
// ed.copyTooltip: "Copy selection to clipboard" => "將選取內容複製到剪貼簿"
// ed.cutTooltip: "Cut selection to clipboard" => "將所選取內容剪下剪貼簿"
// ed.pasteTooltip: "Paste from clipboard" => "從剪貼簿粘貼"
// ed.property-grid: "Properties" => "性能"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "鍵入以搜尋..."
// ed.toolboxGeneralCategory: "General" => "常規"
// ed.toolboxChoiceCategory: "Choice Questions" => "選擇題"
// ed.toolboxTextCategory: "Text Input Questions" => "文本輸入問題"
// ed.toolboxContainersCategory: "Containers" => "器皿"
// ed.toolboxMatrixCategory: "Matrix Questions" => "矩陣問題"
// ed.toolboxMiscCategory: "Misc" => "雜項"
// ed.surveyResultsTable: "As Table" => "如表"
// ed.surveyResultsJson: "As JSON" => "作為 JSON"
// ed.resultsTitle: "Question Title" => "問題標題"
// ed.resultsName: "Question Name" => "問題名稱"
// ed.resultsValue: "Answer Value" => "答案值"
// ed.resultsDisplayValue: "Display Value" => "顯示值"
// ed.propertyEditorError: "Error" => "錯誤"
// ed.saveError: "Error! Editor content is not saved." => "錯誤！不保存編輯器內容。"
// ed.translationPropertyGridTitle: "Language Settings" => "語言設置"
// ed.themePropertyGridTitle: "Theme Settings" => "主題設置"
// ed.translationLanguages: "Languages" => "語言"
// ed.translationAddLanguage: "Select language to translate" => "選擇要翻譯的語言"
// ed.translationShowAllStrings: "All Strings" => "所有字串"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "僅使用的字串"
// ed.translationShowAllPages: "All Pages" => "所有頁面"
// ed.translationNoStrings: "No strings to translate. Please, change the filter." => "沒有要翻譯的字串。請更換過濾器。"
// ed.translationExportToSCVButton: "Export to CSV" => "匯出為CSV"
// ed.translationImportFromSCVButton: "Import from CSV" => "從 CSV 導入"
// ed.translationMergeLocaleWithDefault: "Merge {0} with default locale" => "將{0}與預設區域設置合併"
// ed.translationPlaceHolder: "Translation..." => "譯本。。。"
// ed.themeExportButton: "Export" => "出口"
// ed.themeImportButton: "Import" => "進口"
// ed.bold: "Bold" => "大膽"
// ed.italic: "Italic" => "斜體的"
// ed.underline: "Underline" => "下劃線"
// ed.addNewQuestion: "Add Question" => "添加問題"
// ed.selectPage: "Select page..." => "選擇頁面..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "選擇是從"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML內容將在這裡。"
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "在此處從工具箱中刪除問題。"
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "調查為空。從工具箱中拖動元素或按下下面的按鈕。"
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "將圖像拖放到此處或按下下面的按鈕並選擇要上傳的圖像"
// ed.imageChooseImage: "Choose Image" => "選擇圖像"
// ed.addNewTypeQuestion: "Add {0}" => "新增{0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[徽標]"
// ed.auto: "auto" => "自動"
// ed.choices_Item: "Item " => "專案"
// lg.addNewItem: "Add New Rule" => "添加新規則"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "創建規則以自定義調查流。"
// lg.page_visibilityName: "Show (hide) page" => "顯示（隱藏）頁面"
// lg.page_enableName: "Enable (disable) page" => "啟用（禁用）頁面"
// lg.panel_visibilityName: "Show (hide) panel" => "“顯示（隱藏）”面板"
// lg.panel_enableName: "Enable (disable) panel" => "啟用（禁用）面板"
// lg.question_visibilityName: "Show (hide) question" => "顯示（隱藏）問題"
// lg.question_enableName: "Enable (disable) question" => "啟用（禁用）問題"
// lg.question_requireName: "Make question required" => "提出必填題"
// lg.column_visibilityName: "Show (hide) column" => "顯示（隱藏）列"
// lg.column_enableName: "Enable (disable) column" => "啟用（禁用）列"
// lg.column_requireName: "Make column required" => "使列成為必填項"
// lg.trigger_completeName: "Complete survey" => "完成調查"
// lg.trigger_setvalueName: "Set answer" => "設置答案"
// lg.trigger_copyvalueName: "Copy answer" => "複製答案"
// lg.trigger_skipName: "Skip to question" => "跳至問題"
// lg.trigger_runExpressionName: "Run expression" => "運行表達式"
// lg.completedHtmlOnConditionName: "Set \"Survey Complete\" page markup" => "設置「調查完成」頁面標記"
// lg.page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible." => "使頁面在邏輯表示式返回 true 時可見。否則保持不可見。"
// lg.panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible." => "使面板在邏輯表達式返回 true 時可見。否則保持不可見。"
// lg.panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled." => "使面板及其中的所有元素在邏輯表達式返回 true 時啟用。否則，請禁用它們。"
// lg.question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible." => "使問題在邏輯表達式返回 true 時可見。否則保持不可見。"
// lg.question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled." => "使問題在邏輯表達式返回 true 時啟用。否則將其禁用。"
// lg.question_requireDescription: "Question becomes required when the logic expression returns true." => "當邏輯表達式返回 true 時，問題變為必需。"
// lg.trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'." => "當邏輯表達式返回 true 時，調查將完成，最終使用者將看到“謝謝頁面”。"
// lg.trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question." => "當邏輯表達式中使用的問題值發生更改並且邏輯表達式返回 true 時，該值將設置為所選問題。"
// lg.trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question." => "當邏輯表達式中使用的問題值發生更改並且邏輯表達式返回 true 時，一個選定問題的值將複製到另一個選定問題。"
// lg.trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question." => "當邏輯表達式返回 true 時，調查將跳到/聚焦所選問題。"
// lg.trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question" => "當邏輯表達式返回 true 時，將執行自定義表示式。您可以選擇將此表示式結果設置為選取問題"
// lg.completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one." => "如果邏輯表達式返回 true，則「感謝頁面」的預設文本將更改為給定的文本。"
// lg.itemExpressionText: "When expression: '{0}' returns true" => "當表達式：「{0}」返回 true"
// lg.itemEmptyExpressionText: "New rule" => "新規則"
// lg.page_visibilityText: "make page {0} visible" => "使頁面{0}可見"
// lg.panel_visibilityText: "make panel {0} visible" => "使面板{0}可見"
// lg.panel_enableText: "make panel {0} enable" => "使面板{0}啟用"
// lg.question_visibilityText: "make question {0} visible" => "使問題{0}可見"
// lg.question_enableText: "make question {0} enable" => "使問題{0}啟用"
// lg.question_requireText: "make question {0} required" => "將問題{0}為必填項"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "使問題{1}的列{0}可見"
// lg.column_enableText: "make column {0} of question {1} enable" => "使問題{1}列{0}啟用"
// lg.column_requireText: "make column {0} of question {1} required" => "{0}將問題{1}列為必填項"
// lg.trigger_completeText: "survey becomes completed" => "調查完成"
// lg.trigger_setvalueText: "set into question: {0} value {1}" => "受到質疑：{0}價值{1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "明確問題值：{0}"
// lg.trigger_copyvalueText: "copy into question: {0} value from question {1}" => "複製到問題：{0}問題 {1} 的值"
// lg.trigger_skipText: "survey skip to the question {0}" => "調查 跳至問題{0}"
// lg.trigger_runExpressionText1: "run expression: '{0}'" => "運行表達式：“{0}”"
// lg.trigger_runExpressionText2: " and set its result into question: {0}" => "並質疑其結果：{0}"
// lg.completedHtmlOnConditionText: "show custom text for the 'Thank you page'." => "顯示「感謝頁面」的自定義文字。"
// lg.showAllQuestions: "All Questions" => "所有問題"
// lg.showAllActionTypes: "All Action Types" => "所有操作類型"
// lg.conditions: "Condition(s)" => "條件"
// lg.actions: "Action(s)" => "操作 （s）"
// lg.expressionEditorTitle: "Define condition(s)" => "定義條件"
// lg.actionsEditorTitle: "Define action(s)" => "定義操作"
// lg.deleteAction: "Delete Action" => "刪除操作"
// lg.addNewAction: "Add Action" => "添加操作"
// lg.selectedActionCaption: "Select action..." => "選擇操作..."
// lg.expressionInvalid: "The logic expression is empty or invalid. Please correct it." => "邏輯表達式為空或無效。請更正。"
// lg.noActionError: "Please, add at least one action." => "請至少添加一個操作。"
// lg.actionInvalid: "Please, fix problems in your action(s)." => "請解決操作中的問題。"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "邏輯規則不完整"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "您尚未完成某些邏輯規則。如果現在離開該選項卡，更改將丟失。是否仍要離開選項卡而不完成更改？"
// lg.uncompletedRule_apply: "Yes" => "是的"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "不，我想完成規則"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.save: "Save" => "救"
// pe.clear: "Clear" => "清楚"
// pe.saveTooltip: "Save" => "救"
// pe.set: "Set" => "設置"
// pe.change: "Change" => "改變"
// pe.refresh: "Refresh" => "刷新"
// pe.add: "Add" => "加"
// pe.addItem: "Click to add an item..." => "點選以新增專案..."
// pe.removeItem: "Click to remove the item..." => "按下以刪除該專案..."
// pe.dragItem: "Drag the item" => "拖動專案"
// pe.addOther: "Other" => "其他"
// pe.addSelectAll: "Select All" => "全選"
// pe.addNone: "None" => "沒有"
// pe.back: "Return without saving" => "退貨而不保存"
// pe.backTooltip: "Return without saving" => "退貨而不保存"
// pe.saveAndBack: "Save and return" => "保存並返回"
// pe.saveAndBackTooltip: "Save and return" => "保存並返回"
// pe.doneEditing: "Done" => "做"
// pe.editChoices: "Edit Choices" => "編輯選項"
// pe.showChoices: "Show Choices" => "顯示選項"
// pe.move: "Move" => "移動"
// pe.emptyValue: "Value is empty" => "值為空"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "值“{0}”不是唯一的"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "請將項目數量限制在{0}到{1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "您可以按以下格式設定資料：\n值 1|文本\n值2"
// pe.itemSelectorEmpty: "Please select the element" => "請選擇元素"
// pe.conditionActionEmpty: "Please select the action" => "請選擇操作"
// pe.conditionSelectQuestion: "Select question..." => "選擇問題..."
// pe.conditionSelectPage: "Select page..." => "選擇頁面..."
// pe.conditionSelectPanel: "Select panel..." => "選擇面板..."
// pe.conditionValueQuestionTitle: "Please enter/select the value" => "請輸入/選擇值"
// pe.aceEditorHelp: "Press ctrl+space to get expression completion hint" => "按 ctrl+空格鍵獲取表達式完成提示"
// pe.aceEditorRowTitle: "Current row" => "當前行"
// pe.aceEditorPanelTitle: "Current panel" => "當前面板"
// pe.assistantTitle: "Available questions" => "可用問題"
// pe.cellsEmptyRowsColumns: "There is should be at least one column or row" => "至少應該有一列或一行"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "在提交調查之前預覽答案"
// pe.overridingPropertyPrefix: "Set by " => "設置者"
// pe.propertyIsNoUnique: "Please enter a unique value" => "請輸入唯一值"
// pe.propertyNameIsNotUnique: "Please enter a unique name" => "請輸入唯一名稱"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "不要使用保留字：「專案」、「選項」、「面板」、“行”。"
// pe.listIsEmpty: "No items have been added yet" => "尚未添加任何專案"
// pe.listIsEmpty@choices: "No choices have been added yet" => "尚未添加任何選項"
// pe.addNew@choices: "Add a choice" => "添加選項"
// pe.expressionIsEmpty: "Expression is empty" => "表達式為空"
// pe.rowid: "Row ID" => "行標識"
// pe.imageLink: "Image or video URL" => "圖片或視頻網址"
// choicesbyurl.valueName: "Get values from the following JSON field" => "從以下 JSON 欄位中獲取值"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "從以下 JSON 欄位獲取影像網址"
// pe.allowEmptyResponse: "Allow empty response" => "允許空回應"
// pe.titlePlaceholder: "Title" => "標題"
// pe.surveyTitlePlaceholder: "Survey Title" => "調查標題"
// pe.pageTitlePlaceholder: "Page {num}" => "頁數 {num}"
// pe.descriptionPlaceholder: "Description" => "描述"
// pe.surveyDescriptionPlaceholder: "Description" => "描述"
// pe.pageDescriptionPlaceholder: "Description" => "描述"
// pe.showNoneItem: "Allow the None option" => "允許“無”選項"
// pe.noneText: "None option text" => "無選項文字"
// pe.showSelectAllItem: "Allow the Select All option" => "允許「全選」選項"
// pe.selectAllText: "Select All option text" => "全選選項文本"
// pe.choicesMin: "Minimum value for auto-generated items" => "自動生成項的最小值"
// pe.choicesMax: "Maximum value for auto-generated items" => "自動生成項的最大值"
// pe.choicesStep: "Step for auto-generated items" => "自動生成項的步驟"
// pe.isAllRowRequired: "Require answer for all rows" => "要求所有行都回答"
// pe.requiredErrorText: "\"Required\" error message" => "“必需”錯誤消息"
// pe.cols: "Columns" => "列"
// pe.columnLayout: "Columns layout" => "列佈局"
// pe.addRowLocation: "Add Row button location" => "“添加行”按鈕位置"
// pe.rateMin: "Minimum rate value" => "最低速率值"
// pe.rateMax: "Maximum rate value" => "最大速率值"
// pe.rateStep: "Rate step" => "速率步長"
// pe.defaultValue: "Default Answer" => "默認答案"
// pe.cellsDefaultRow: "Default texts" => "預設文字"
// pe.surveyEditorTitle: "Edit survey settings" => "編輯調查設置"
// pe.maxLength: "Maximum length (in characters)" => "最大長度（字元）"
// pe.buildExpression: "Build" => "建"
// pe.editExpression: "Edit" => "編輯"
// pe.and: "and" => "和"
// pe.or: "or" => "或"
// pe.remove: "Remove" => "刪除"
// pe.addCondition: "Add Condition" => "添加條件"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "選擇一個問題以開始配置條件。"
// pe.if: "If" => "如果"
// pe.then: "then" => "然後"
// pe.setToName: "Target question" => "目標問題"
// pe.fromName: "Question to copy answer from" => "要從中複製答案的問題"
// pe.gotoName: "Question to skip to" => "要跳到的問題"
// pe.ruleIsNotSet: "Rule is incorrect" => "規則不正確"
// pe.includeIntoResult: "Include into survey results" => "包含在調查結果中"
// pe.expandCollapseTitle: "Expand/collapse title" => "展開/摺疊標題"
// pe.simulator: "Select device type" => "選擇設備類型"
// pe.landscapeOrientation: "Switch to landscape orientation" => "切換到橫向"
// pe.portraitOrientation: "Switch to portrait orientation" => "切換到縱向"
// pe.previewText: "Preview Answers button text" => "「預覽答案」按鈕文本"
// pe.editText: "Edit Answer button text" => "編輯應答按鈕文本"
// image.imageHeight: "Image height (in CSS-accepted values)" => "圖片高度（以 CSS 接受的值為單位）"
// image.imageWidth: "Image width (in CSS-accepted values)" => "影像寬度（以 CSS 接受的值為單位）"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "完成頁面的時間限制（秒為單位 ）"
// question.page: "Parent page" => "父頁面"
// pe.noEntriesText: "Empty entries text" => "空條目文本"
// pe.html: "HTML markup" => "網頁標記"
// pe.expression: "Expression" => "表達"
// pe.setValue: "Answer" => "答"
// pe.dataFormat: "Image format" => "圖像格式"
// pe.allowAddRows: "Allow adding rows" => "允許添加行"
// pe.allowRemoveRows: "Allow removing rows" => "允許刪除行"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "允許行拖放"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "如果指定確切的圖像寬度或高度，則不適用。"
// pe.minImageWidth: "Minimum image width" => "最小圖像寬度"
// pe.maxImageWidth: "Maximum image width" => "最大圖像寬度"
// pe.minImageHeight: "Minimum image height" => "最小圖像高度"
// pe.maxImageHeight: "Maximum image height" => "最大圖像高度"
// pe.minValue: "Minimum value" => "最小值"
// pe.maxValue: "Maximum value" => "最大值"
// pe.minLength: "Minimum length (in characters)" => "最小長度（以字元為單位）"
// pe.allowDigits: "Allow digits" => "允許數位"
// pe.minCount: "Minimum count" => "最小計數"
// pe.maxCount: "Maximum count" => "最大計數"
// pe.regex: "Regular expression" => "正則表達式"
// surveyvalidator.text: "Error message" => "錯誤資訊"
// surveyvalidator.expression: "Validation expression" => "驗證表達式"
// pe.totalText: "Total row text" => "總計行文本"
// pe.totalType: "Total type" => "總類型"
// pe.totalExpression: "Total expression" => "總表達"
// pe.totalDisplayStyle: "Total value display style" => "總值顯示樣式"
// pe.totalCurrency: "Currency" => "貨幣"
// pe.totalFormat: "Formatted string" => "帶格式的字串"
// pe.logo: "Logo (URL or base64-encoded string)" => "徽標（URL 或base64 編碼的字串）"
// pe.questionsOnPageMode: "Survey structure" => "調查結構"
// pe.maxTextLength: "Maximum answer length (in characters)" => "最大答案長度（以字元為單位）"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "最大註解長度（以字元為單位）"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "如有必要，自動展開評論區域"
// pe.allowResizeComment: "Allow users to resize text areas" => "允許用戶調整文字區域的大小"
// pe.textUpdateMode: "Update text question value" => "更新文字問題值"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "將焦點放在第一個無效答案上"
// pe.checkErrorsMode: "Run validation" => "運行驗證"
// pe.navigateToUrl: "Navigate to URL" => "導航到網址"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "動態網址"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "用於顯示使用者是否已填寫此調查的標記"
// pe.completedHtml: "Survey Complete page markup" => "調查完成頁面標記"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "動態調查完成頁面標記"
// pe.loadingHtml: "Markup to show while survey model is loading" => "載入調查模型時要顯示的標記"
// pe.commentText: "Comment area text" => "註釋區文本"
// pe.autocomplete: "Autocomplete type" => "自動完成類型"
// pe.labelTrue: "\"True\" label" => "“真實”標籤"
// pe.labelFalse: "\"False\" label" => "“虛假”標籤"
// pe.allowClear: "Show the Clear button" => "顯示“清除”按鈕"
// pe.displayStyle: "Value display style" => "值顯示樣式"
// pe.format: "Formatted string" => "帶格式的字串"
// pe.maximumFractionDigits: "Maximum fractional digits" => "最大小數位數"
// pe.minimumFractionDigits: "Minimum fractional digits" => "最小小數位數"
// pe.useGrouping: "Display grouping separators" => "顯示分組分隔符"
// pe.allowMultiple: "Allow multiple files" => "允許多個檔"
// pe.allowImagesPreview: "Preview images" => "預覽圖像"
// pe.acceptedTypes: "Accepted file types" => "接受的文件類型"
// pe.waitForUpload: "Wait for the upload to complete" => "等待上傳完成"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "確認文件刪除"
// pe.detailPanelMode: "Detail panel location" => "詳細資訊面板位置"
// pe.minRowCount: "Minimum row count" => "最小行數"
// pe.maxRowCount: "Maximum row count" => "最大行數"
// pe.confirmDelete: "Confirm row deletion" => "確認刪除行"
// pe.confirmDeleteText: "Confirmation message" => "確認消息"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "確認面板刪除"
// pe.panelCount: "Initial panel count" => "初始面板計數"
// pe.minPanelCount: "Minimum panel count" => "最小面板數"
// pe.maxPanelCount: "Maximum panel count" => "最大面板數"
// pe.panelsState: "Inner panel expand state" => "內面板展開狀態"
// pe.templateDescription: "Description template" => "描述範本"
// pe.templateTitle: "Title template" => "標題範本"
// pe.panelPrevText: "Previous Panel button tooltip" => "“上一個面板”按鈕工具提示"
// pe.panelNextText: "Next Panel button tooltip" => "“下一個面板”按鈕工具提示"
// pe.showRangeInProgress: "Show progress bar" => "顯示進度條"
// pe.templateTitleLocation: "Question title location" => "問題標題位置"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "“刪除面板”按鈕位置"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "如果沒有行，則隱藏問題"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "如果沒有行，則隱藏列"
// pe.rateValues: "Custom rate values" => "自定義費率值"
// pe.rateCount: "Rate count" => "速率計數"
// pe.autoGenerate: "How to specify rate values?" => "如何指定速率值？"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "如果問題不包含任何選項，則隱藏問題"
// pe.hideNumber: "Hide question number" => "隱藏問題編號"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "最小寬度（以 CSS 接受的值為單位）"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "最大寬度（以 CSS 接受的值為單位）"
// pe.width: "Width (in CSS-accepted values)" => "寬度（以 CSS 接受的值為單位）"
// pe.showHeader: "Show column headers" => "顯示列標題"
// pe.horizontalScroll: "Show horizontal scrollbar" => "顯示水平滾動條"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "最小列寬（以 CSS 接受的值為單位）"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "行標題寬度（以 CSS 接受的值為單位）"
// pe.valueTrue: "\"True\" value" => "“真”值"
// pe.valueFalse: "\"False\" value" => "“假”值"
// pe.minErrorText: "\"Value is below minimum\" error message" => "“值低於最小值”錯誤消息"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "“值超過最大值”錯誤消息"
// pe.otherErrorText: "\"Empty comment\" error message" => "“空評論”錯誤消息"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "“非唯一鍵值”錯誤消息"
// pe.minSelectedChoices: "Minimum selected choices" => "最少選擇的選項"
// pe.maxSelectedChoices: "Maximum selected choices" => "最大選定選項數"
// pe.showClearButton: "Show the Clear button" => "顯示“清除”按鈕"
// pe.showNumber: "Show panel number" => "顯示面板編號"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "徽標寬度（以 CSS 接受的值為單位）"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "徽標高度（以 CSS 接受的值為單位）"
// pe.readOnly: "Read-only" => "唯讀"
// pe.enableIf: "Editable if" => "可編輯，如果"
// pe.emptyRowsText: "\"No rows\" message" => "“無行”消息"
// pe.size: "Input field size (in characters)" => "輸入欄位大小（以字元為單位 ）"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "單獨的特殊選項（無、其他、全選）"
// pe.choicesFromQuestion: "Copy choices from the following question" => "複製以下問題的選項"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "要複製哪些選項？"
// pe.showCommentArea: "Show the comment area" => "顯示評論區域"
// pe.commentPlaceholder: "Comment area placeholder" => "註釋區佔位元"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "將速率描述顯示為極值"
// pe.rowsOrder: "Row order" => "行順序"
// pe.columnsLayout: "Column layout" => "列佈局"
// pe.columnColCount: "Nested column count" => "嵌套列計數"
// pe.state: "Panel expand state" => "面板展開狀態"
// pe.correctAnswer: "Correct Answer" => "正確答案"
// pe.defaultPanelValue: "Default Values" => "預設值"
// pe.cells: "Cell Texts" => "單元格文本"
// pe.keyName: "Key column" => "鍵列"
// itemvalue.text: "Alt text" => "可選文字"
// pe.logoPosition: "Logo position" => "徽標位置"
// pe.addLogo: "Add logo..." => "新增徽標..."
// pe.changeLogo: "Change logo..." => "變更徽標..."
// logoPositions.none: "Remove logo" => "刪除徽標"
// logoPositions.left: "Left" => "左"
// logoPositions.right: "Right" => "右"
// logoPositions.top: "On the top" => "在頂部"
// logoPositions.bottom: "In the bottom" => "在底部"
// tabs.items: "Items" => "專案"
// tabs.requiredIf: "Required If" => "如果"
// tabs.numbering: "Numbering" => "編號"
// tabs.pages: "Pages" => "頁面"
// tabs.calculatedValues: "Calculated Values" => "計算值"
// tabs.triggers: "Triggers" => "觸發器"
// tabs.templateTitle: "Title template" => "標題範本"
// tabs.totals: "Totals" => "總數"
// tabs.logic: "Logic" => "邏輯"
// tabs.layout: "Layout" => "佈局"
// tabs.data: "Data" => "數據"
// tabs.validation: "Validation" => "驗證"
// tabs.cells: "Cell Texts" => "單元格文本"
// tabs.showOnCompleted: "Survey Complete" => "調查完成"
// tabs.logo: "Logo in Survey Title" => "調查標題中的徽標"
// tabs.slider: "Slider" => "滑塊"
// tabs.expression: "Expression" => "表達"
// tabs.others: "Others" => "別人"
// pe.choicesVisibleIf: "Choices are visible if" => "在以下情況下，選項可見"
// pe.choicesEnableIf: "Choices are selectable if" => "在以下情況下，可以選擇選項"
// pe.columnsEnableIf: "Columns are visible if" => "在以下情況下，列可見"
// pe.rowsEnableIf: "Rows are visible if" => "在以下情況下，行可見"
// pe.indent: "Add indents" => "添加縮進"
// panel.indent: "Add outer indents" => "添加外部縮進"
// pe.innerIndent: "Add inner indents" => "添加內部縮進"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "從最後一行獲取預設值"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "從最後一個面板中獲取預設值"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "按回車鍵編輯"
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "按回車鍵編輯專案，按刪除按鈕刪除專案，按Alt加向上箭頭或向下箭頭移動專案"
// pe.triggerFromName: "Copy value from: " => "從以下位置複製值："
// pe.triggerRunExpression: "Run this Expression" => "運行此表達式"
// pe.triggerGotoName: "Go to the question" => "轉到問題"
// pe.triggerRunExpressionEmpty: "Please enter a valid expression" => "請輸入有效的表達式"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "在這裡鍵入表示式..."
// pe.noFile: "No file choosen" => "未選擇任何檔"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "如果問題被隱藏，則清除該值"
// pe.valuePropertyName: "Value property name" => "值屬性名稱"
// pe.searchEnabled: "Enable search" => "啟用搜索"
// pe.hideSelectedItems: "Hide selected items" => "隱藏選取選取專案"
// pe.closeOnSelect: "Close the dropdown after selection" => "選擇後關閉下拉清單"
// pe.signatureWidth: "Signature width" => "簽名寬度"
// pe.signatureHeight: "Signature height" => "標誌性高度"
// pe.verticalAlign: "Vertical alignment" => "垂直對齊"
// pe.alternateRows: "Alternate rows" => "交替行"
// pe.columnsVisibleIf: "Columns are visible if" => "在以下情況下，列可見"
// pe.rowsVisibleIf: "Rows are visible if" => "在以下情況下，行可見"
// pe.otherPlaceholder: "Comment area placeholder" => "註釋區佔位元"
// pe.rateType: "Rate type" => "費率類型"
// pv.true: "true" => "真"
// pv.false: "false" => "假"
// pv.inherit: "Inherit" => "繼承"
// pv.show: "Visible" => "可見"
// pv.hide: "Hidden" => "隱藏"
// pv.default: "Inherit" => "繼承"
// pv.initial: "Initial" => "初"
// pv.random: "Random" => "隨機"
// pv.collapsed: "Collapsed" => "倒塌"
// pv.expanded: "Expanded" => "擴大"
// pv.none: "None" => "沒有"
// pv.asc: "Ascending" => "上升"
// pv.desc: "Descending" => "降"
// pv.indeterminate: "Indeterminate" => "定"
// pv.decimal: "decimal" => "十進位"
// pv.currency: "currency" => "貨幣"
// pv.percent: "percent" => "百分之"
// pv.firstExpanded: "First panel is expanded" => "第一個面板展開"
// pv.off: "Hide question numbers" => "隱藏問題編號"
// pv.onpanel: "Start on each panel" => "在每個面板上開始"
// pv.onPanel: "Start on each panel" => "在每個面板上開始"
// pv.onSurvey: "Continue throughout the survey" => "在整個調查過程中繼續"
// pv.list: "List" => "清單"
// pv.progressTop: "Panel navigator + Progress bar at the top" => "面板導航器 + 頂部的進度條"
// pv.progressBottom: "Panel navigator + Progress bar at the bottom" => "面板導航器 + 底部的進度條"
// pv.progressTopBottom: "Panel navigator + Progress bar at the top and bottom" => "面板導航器 + 頂部和底部的進度條"
// pv.tab: "Tabs" => "製表元"
// pv.horizontal: "Horizontal" => "水準"
// pv.vertical: "Vertical" => "垂直"
// pv.top: "Top" => "返回頁首"
// pv.bottom: "Bottom" => "底"
// pv.topBottom: "Top and bottom" => "頂部和底部"
// pv.both: "Both" => "雙"
// pv.left: "Left" => "左"
// pv.right: "Right" => "右"
// pv.color: "color" => "顏色"
// pv.date: "date" => "日期"
// pv.datetime: "datetime" => "日期時間"
// pv.datetime-local: "datetime-local" => "日期時間-本地"
// pv.email: "email" => "電子郵件"
// pv.month: "month" => "月"
// pv.number: "number" => "數"
// pv.password: "password" => "密碼"
// pv.range: "range" => "範圍"
// pv.tel: "tel" => "電話"
// pv.text: "text" => "發簡訊"
// pv.time: "time" => "時間"
// pv.url: "url" => "網址"
// pv.week: "week" => "周"
// pv.hidden: "Hidden" => "隱藏"
// pv.on: "Continue from the previous page" => "從上一頁繼續"
// pv.onPage: "Start on each page" => "從每個頁面開始"
// pv.edit: "Editable" => "編輯"
// pv.display: "Read-only" => "唯讀"
// pv.onComplete: "When the survey is completed" => "調查完成時"
// pv.onHidden: "When the question becomes hidden" => "當問題變得隱藏時"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "當問題或其面板/頁面被隱藏時"
// clearInvisibleValues.none: "Never" => "從不"
// inputType.color: "Color" => "顏色"
// inputType.date: "Date" => "日期"
// inputType.datetime-local: "Date and Time" => "日期和時間"
// inputType.email: "Email" => "電子郵件"
// inputType.month: "Month" => "月"
// inputType.number: "Number" => "數"
// inputType.password: "Password" => "密碼"
// inputType.range: "Range" => "範圍"
// inputType.tel: "Phone Number" => "電話號碼"
// inputType.text: "Text" => "發簡訊"
// inputType.time: "Time" => "時間"
// inputType.url: "URL" => "網址"
// inputType.week: "Week" => "周"
// pv.all: "All" => "都"
// pv.page: "Page" => "頁"
// pv.survey: "Survey" => "調查"
// pv.onNextPage: "When switching to the next page" => "切換到下一頁時"
// pv.onValueChanged: "After an answer is changed" => "更改答案後"
// pv.onValueChanging: "Before an answer is changed" => "更改答案之前"
// pv.standard: "Original structure" => "原始結構"
// pv.singlePage: "All questions on a single page" => "所有問題都在一個頁面上"
// pv.questionPerPage: "Each question on an individual page" => "單個頁面上的每個問題"
// pv.noPreview: "No preview" => "無預覽"
// pv.showAllQuestions: "Show all questions" => "顯示所有問題"
// pv.showAnsweredQuestions: "Show answered questions only" => "僅顯示已回答的問題"
// pv.pages: "Completed pages" => "已完成的頁面"
// pv.questions: "Answered questions" => "已回答的問題"
// pv.requiredQuestions: "Answered required questions" => "回答必填問題"
// pv.correctQuestions: "Valid answers" => "有效答案"
// pv.buttons: "Completed pages (button UI)" => "已完成的頁面（按鈕 UI）"
// pv.underInput: "Under the input" => "在輸入下"
// pv.underTitle: "Under the title" => "在標題下"
// pv.onBlur: "On blur" => "模糊時"
// pv.onTyping: "While typing" => "打字時"
// pv.underRow: "Under the row" => "在行下"
// pv.underRowSingle: "Under the row, only one panel is visible" => "在該行下，只有一個面板可見"
// showNavigationButtons.none: "Hidden" => "隱藏"
// showProgressBar.off: "Hidden" => "隱藏"
// showTimerPanel.none: "Hidden" => "隱藏"
// showTimerPanelMode.all: "Both" => "雙"
// detailPanelMode.none: "Hidden" => "隱藏"
// addRowLocation.default: "Depends on matrix layout" => "取決於矩陣佈局"
// panelsState.default: "Users cannot expand or collapse panels" => "使用者無法展開或摺疊面板"
// panelsState.collapsed: "All panels are collapsed" => "所有面板均已摺疊"
// panelsState.expanded: "All panels are expanded" => "所有面板均已展開"
// widthMode.auto: "Auto" => "自動"
// widthMode.static: "Static" => "靜態的"
// widthMode.responsive: "Responsive" => "回應"
// imageFit.none: "None" => "沒有"
// imageFit.contain: "Contain" => "包含"
// imageFit.cover: "Cover" => "蓋"
// imageFit.fill: "Fill" => "填補"
// contentMode.auto: "Auto" => "自動"
// contentMode.image: "Image" => "圖像"
// contentMode.video: "Video" => "視頻"
// contentMode.youtube: "YouTube" => "優酷"
// displayMode.auto: "Auto" => "自動"
// displayMode.buttons: "Buttons" => "按鈕"
// displayMode.dropdown: "Dropdown" => "下拉清單"
// rateColorMode.default: "Default" => "違約"
// autoGenerate.true: "Generate" => "生成"
// autoGenerate.false: "Enter manually" => "手動輸入"
// rateType.labels: "Labels" => "標籤"
// rateType.stars: "Stars" => "星星"
// rateType.smileys: "Smileys" => "笑臉"
// op.anyof: "Any of" => "任何"
// op.allof: "All of" => "全部"
// op.and: "and" => "和"
// op.or: "or" => "或"
// ew.modern: "Modern theme" => "現代主題"
// ew.default: "Default theme" => "默認主題"
// ew.orange: "Orange theme" => "橙色主題"
// ew.darkblue: "Darkblue theme" => "深藍色主題"
// ew.darkrose: "Darkrose theme" => "“暗玫瑰”主題"
// ew.stone: "Stone theme" => "“石頭”主題"
// ew.winter: "Winter theme" => "“冬季”主題"
// ew.winterstone: "Winter-Stone theme" => "“冬日之石”主題"
// ts.selectPage: "Select the page to test it" => "選擇要測試的頁面"
// ts.showInvisibleElements: "Show invisible elements" => "顯示不可見元素"
// ts.hideInvisibleElements: "Hide invisible elements" => "隱藏不可見元素"
// validators.expressionvalidator: "Expression" => "表達"
// triggers.copyvaluetrigger: "Copy answer" => "複製答案"
// triggers.skiptrigger: "Skip to question" => "跳至問題"
// triggers.runexpressiontrigger: "Run expression" => "運行表達式"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Cookie 可防止使用者兩次填寫同一調查問卷。"
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "調整輸入欄位的可見區域的大小。請使用<b>「驗證→最大長度</b>」設置來限制輸入長度。"
// pehelp.format: "Use {0} as a placeholder for the actual value." => "使用 {0} 作為實際值的佔位元。"
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "僅當至少一列具有 Total 類型或 Total 運算式時才可見。"
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "有關詳細資訊，請參閱 [accept]（https://www.w3schools.com/tags/att_input_accept.asp） 屬性說明。"
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "僅適用於單選組和複選框單元類型。"
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "有關詳細資訊，請參閱 [autocomplete]（https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete） 屬性說明。"
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "如果未設置此屬性，則答案將存儲在 Name 屬性指定的欄位中。"
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "如果指定的列包含相同的值，則調查將引發「非唯一鍵值」錯誤。"
// p.multiSelect: "Allow multiple selection" => "允許多項選擇"
// p.showLabel: "Show image captions" => "顯示圖像標題"
// p.value: "Value" => "價值"
// p.tabAlign: "Tab alignment" => "製表元對齊方式"
// p.logoFit: "Logo fit" => "徽標合身"
// p.pages: "Pages" => "頁面"
// p.questions: "Questions" => "問題"
// p.triggers: "Triggers" => "觸發器"
// p.calculatedValues: "Calculated values" => "計算值"
// p.surveyId: "Survey id" => "調查編號"
// p.surveyPostId: "Survey post id" => "調查帖子編號"
// p.surveyShowDataSaving: "Survey show data saving" => "調查顯示數據保存"
// p.questionDescriptionLocation: "Question description location" => "問題描述位置"
// p.progressBarType: "Progress bar type" => "進度條類型"
// p.showTOC: "Show TOC" => "顯示目錄"
// p.tocLocation: "Toc location" => "目錄位置"
// p.questionTitlePattern: "Question title pattern" => "問題標題模式"
// p.widthMode: "Width mode" => "寬度模式"
// p.showBrandInfo: "Show brand info" => "顯示品牌資訊"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "在動態文字中使用顯示值"
// p.visibleIf: "Visible if" => "可見，如果"
// p.titleLocation: "Title location" => "標題位置"
// p.descriptionLocation: "Description location" => "描述位置"
// p.defaultValueExpression: "Default value expression" => "預設值表達式"
// p.requiredIf: "Required if" => "在以下情況下是必需的"
// p.validators: "Validators" => "驗證者"
// p.bindings: "Bindings" => "綁定"
// p.renderAs: "Render as" => "渲染為"
// p.attachOriginalItems: "Attach original items" => "附加原始專案"
// p.currency: "Currency" => "貨幣"
// p.cellHint: "Cell hint" => "單元格提示"
// p.isUnique: "Is unique" => "是獨一無二的"
// p.showInMultipleColumns: "Show in multiple columns" => "在多列中顯示"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "最大小數位數總數"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "最小小數位數總數"
// p.columns: "Columns" => "列"
// p.detailElements: "Detail elements" => "細節元素"
// p.allowAdaptiveActions: "Allow adaptive actions" => "允許自適應操作"
// p.defaultRowValue: "Default row value" => "預設行值"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "添加時顯示的詳細資訊面板"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "選項延遲載入已啟用"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "選擇延遲載入頁面大小"
// p.inputFieldComponent: "Input field component" => "輸入欄位元件"
// p.itemComponent: "Item component" => "項目元件"
// p.min: "Min" => "最小值"
// p.max: "Max" => "麥克斯"
// p.minValueExpression: "Min value expression" => "最小值表達式"
// p.maxValueExpression: "Max value expression" => "最大值表達式"
// p.step: "Step" => "步"
// p.dataList: "Data list" => "數據清單"
// p.itemSize: "Item size" => "專案大小"
// p.elements: "Elements" => "元素"
// p.content: "Content" => "內容"
// p.navigationButtonsVisibility: "Navigation buttons visibility" => "導航按鈕可見性"
// p.navigationTitle: "Navigation title" => "導航標題"
// p.navigationDescription: "Navigation description" => "導航說明"
// p.longTap: "Long tap" => "長按"
// p.autoGrow: "Auto grow" => "自動增長"
// p.allowResize: "Allow resizing" => "允許調整大小"
// p.acceptCarriageReturn: "Accept carriage return" => "接受回車"
// p.displayMode: "Display mode" => "顯示模式"
// p.rateType: "Rate type" => "費率類型"
// p.label: "Label" => "標籤"
// p.contentMode: "Content mode" => "內容模式"
// p.imageFit: "Image fit" => "圖像貼合"
// p.altText: "Alt text" => "可選文字"
// p.height: "Height" => "高度"
// p.penColor: "Pen color" => "筆顏色"
// p.backgroundColor: "Background color" => "背景色"
// p.templateElements: "Template elements" => "範本元素"
// p.operator: "Operator" => "算子"
// p.isVariable: "Is variable" => "是可變的"
// p.runExpression: "Run expression" => "運行表達式"
// p.showCaption: "Show caption" => "顯示標題"
// p.iconName: "Icon name" => "圖示名稱"
// p.iconSize: "Icon size" => "圖示大小"
// p.precision: "Precision" => "精度"
// p.matrixDragHandleArea: "Matrix drag handle area" => "矩陣拖動手柄區域"
// p.backgroundImage: "Background image" => "背景圖片"
// p.backgroundImageFit: "Background image fit" => "背景圖像適合"
// p.backgroundImageAttachment: "Background image attachment" => "背景圖像附件"
// p.backgroundOpacity: "Background opacity" => "背景不透明度"
// p.selectToRankEnabled: "Select to rank enabled" => "選擇啟用排名"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "選擇以對區域佈局進行排名"
// p.allowCameraAccess: "Allow camera access" => "允許攝像頭訪問"
// p.scaleColorMode: "Scale color mode" => "縮放顏色模式"
// p.rateColorMode: "Rate color mode" => "評價顏色模式"
// p.templateTabTitle: "Template tab title" => "範本選項卡標題"
// p.templateVisibleIf: "Template visible if" => "範本可見，如果"
// p.copyDisplayValue: "Copy display value" => "複製顯示值"
// theme.--background: "Background color" => "背景色"
// theme.--background-dim-light: "Background dim light color" => "背景昏暗的光線顏色"
// theme.--primary-foreground: "Primary foreground color" => "原色前景色"
// theme.--foreground: "Foreground color" => "前景色"
// theme.--base-unit: "Base unit" => "基本單元"
// theme.groupGeneral: "General" => "常規"
// theme.groupAdvanced: "Advanced" => "高深"
// theme.themeName: "Theme" => "主題"
// theme.themeMode: "Question appearance" => "問題外觀"
// theme.themeModePanels: "Default" => "違約"
// theme.themeModeLightweight: "Without Panels" => "不帶面板"
// theme.themePaletteLight: "Light" => "光"
// theme.themePaletteDark: "Dark" => "黑暗"
// theme.primaryColor: "Accent color" => "強調文字顏色"
// theme.primaryDefaultColor: "Default" => "違約"
// theme.primaryDarkColor: "Hover" => "懸停"
// theme.primaryLightColor: "Selected" => "選擇"
// theme.backgroundDimColor: "Background color" => "背景色"
// theme.backgroundImage: "Background image" => "背景圖片"
// theme.backgroundImageFitAuto: "Auto" => "自動"
// theme.backgroundImageFitCover: "Cover" => "蓋"
// theme.backgroundImageFitContain: "Contain" => "包含"
// theme.backgroundOpacity: "Opacity" => "不透明度"
// theme.backgroundImageAttachmentFixed: "Fixed" => "固定"
// theme.backgroundImageAttachmentScroll: "Scroll" => "滾動"
// theme.panelBackgroundTransparency: "Panel background opacity" => "面板背景不透明度"
// theme.questionBackgroundTransparency: "Question background opacity" => "問題背景不透明度"
// theme.questionPanel: "Panel background and corner radius" => "面板背景和角半徑"
// theme.questionTitle: "Question title font" => "問題標題字體"
// theme.questionDescription: "Question description font" => "問題描述字體"
// theme.editorPanel: "Input element" => "輸入元素"
// theme.editorFont: "Input element font" => "輸入元素字體"
// theme.backcolor: "Default background" => "默認背景"
// theme.hovercolor: "Hover background" => "懸停背景"
// theme.borderDecoration: "Border decoration" => "邊框裝飾"
// theme.accentBackground: "Accent background" => "強調文字背景"
// theme.accentForeground: "Accent foreground" => "強調文字前景"
// theme.primaryForecolor: "Default color" => "默認顏色"
// theme.primaryForecolorLight: "Disabled color" => "禁用顏色"
// theme.linesColors: "Minor line colors" => "次要線條顏色"
// theme.borderDefault: "Darker" => "暗"
// theme.borderLight: "Lighter" => "打火機"
// theme.fontFamily: "Font family" => "字體系列"
// theme.fontSize: "Font size" => "字體大小"
// theme.color: "Color" => "顏色"
// theme.size: "Size" => "大小"
// theme.fontWeightRegular: "Regular" => "定期"
// theme.fontWeightHeavy: "Heavy" => "重"
// theme.fontWeightSemiBold: "Semi-bold" => "半粗體"
// theme.fontWeightBold: "Bold" => "大膽"
// theme.scale: "Scale" => "規模"
// theme.cornerRadius: "Corner radius" => "拐角半徑"
// theme.surveyTitle: "Survey title font" => "調查標題字體"
// theme.pageTitle: "Page title font" => "頁面標題字體"
// theme.pageDescription: "Page description font" => "頁面描述字體"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "添加陰影效果"
// theme.opacity: "Opacity" => "不透明度"
// theme.boxShadowBlur: "Blur" => "模糊"
// theme.boxShadowSpread: "Spread" => "傳播"
// theme.boxShadowDrop: "Drop" => "落"
// theme.boxShadowInner: "Inner" => "內"
// theme.questionShadow: "Shadow effects" => "陰影效果"
// theme.editorShadow: "Input element shadow effects" => "輸入元素陰影效果"
// names.default: "Default" => "違約"
// names.contrast: "Contrast" => "反差"
// names.plain: "Plain" => "平原"
// names.simple: "Simple" => "簡單"
// names.blank: "Blank" => "空白"
// names.double: "Double" => "雙"
// names.bulk: "Bulk" => "散裝"
// names.pseudo-3d: "Pseudo 3D" => "偽 3D"
// names.playful: "Playful" => "好玩"
// names.ultra: "Ultra" => "超"
// colors.teal: "Teal" => "水鴨"
// colors.blue: "Blue" => "藍"
// colors.purple: "Purple" => "紫色"
// colors.orchid: "Orchid" => "蘭花"
// colors.tulip: "Tulip" => "鬱金香"
// colors.brown: "Brown" => "棕色"
// colors.green: "Green" => "綠"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// names.sharp: "Sharp" => "鋒利"
// names.borderless: "Borderless" => "無國界"
// names.flat: "Flat" => "平"
// names.doubleborder: "Double Border" => "雙邊框"
// names.layered: "Layered" => "分層的"
// names.solid: "Solid" => "固體"
// names.threedimensional: "3D" => "。.3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "您確定要刪除此語言的所有字串嗎？"
// ed.themeResetButton: "Reset theme settings to default" => "將主題設置重置為預設值"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// theme.placeholderColor: "Placeholder color" => "佔位元顏色"
// ed.themeSettings: "Theme Settings" => "主題設置"
// ed.themeSettingsTooltip: "Open theme settings" => "打開主題設置"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.resetToDefaultCaption: "Reset" => "重置"
// pv.file: "Local files" => "本地檔"
// pv.camera: "Camera" => "照相機"
// pv.file-camera: "Local files or camera" => "本地檔或相機"
// ed.translateUsigAI: "Auto-translate All" => "自動翻譯全部"
// ed.translationDialogTitle: "Untranslated strings" => "未翻譯的字串"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "請輸入至少{0}專案"
// lg.question_resetValueName: "Reset question value" => "重置問題值"
// lg.column_resetValue: "Reset column value" => "重置列值"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.markRequired: "Mark as required" => "標記為必填"
// pe.removeRequiredMark: "Remove the required mark" => "刪除所需的標記"
// p.resetValueIf: "Reset value if" => "如果出現以下情況，則重置值"
// lg.question_setValueName: "Set question value" => "設置問題值"
// lg.column_resetValueName: "Reset column value" => "重置列值"
// lg.column_setValueName: "Set column value" => "設置列值"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => "其結果將分配給目標問題的表達式。"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// survey.title: "Title" => "標題"
// page.title: "Title" => "標題"
// p.setValueIf: "Set value if" => "設置值，如果"
// theme.groupHeader: "Header" => "頁眉"
// theme.coverTitleForecolor: "Title forecolor" => "標題前彩"
// theme.coverOverlapEnabled: "Overlap" => "重疊"
// theme.backgroundImageFitFill: "Stretch" => "伸展"
// theme.backgroundImageFitTile: "Tile" => "瓦"
// theme.headerView: "View" => "視圖"
// theme.headerViewBasic: "Basic" => "基本"
// theme.headerViewAdvanced: "Advanced" => "高深"
// theme.coverInheritWidthFrom: "Content area width" => "內容區域寬度"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "與調查相同"
// theme.coverInheritWidthFromPage: "Fit to page" => "適合頁面"
// theme.coverTextAreaWidth: "Text width" => "文本寬度"
// theme.coverBackgroundColorSwitch: "Background color" => "背景色"
// theme.coverBackgroundColorNone: "None" => "沒有"
// theme.coverBackgroundColorAccentColor: "Accent color" => "強調文字顏色"
// theme.coverBackgroundColorCustom: "Custom" => "習慣"
// theme.horizontalAlignmentLeft: "Left" => "左"
// theme.horizontalAlignmentCenter: "Center" => "中心"
// theme.horizontalAlignmentRight: "Right" => "右"
// theme.verticalAlignmentTop: "Top" => "返回頁首"
// theme.verticalAlignmentMiddle: "Middle" => "中間"
// theme.verticalAlignmentBottom: "Bottom" => "底"
// theme.logoPosition: "Logo Position" => "徽標位置"
// theme.coverTitlePosition: "Title Position" => "標題位置"
// theme.coverDescriptionPosition: "Description Position" => "描述位置"