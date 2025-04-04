import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "測試問卷",
    theme: "主題",
    translation: "譯本",
    designer: "問卷設計器",
    json: "JSON 編輯器",
    logic: "邏輯"
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
  toolboxCategories: {
    general: "常規",
    choice: "選擇題",
    text: "文本輸入問題",
    containers: "器皿",
    matrix: "矩陣問題",
    misc: "雜項"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "預設值 （{0}）",
    survey: "調查問卷",
    settings: "設置",
    settingsTooltip: "打開設置",
    surveySettings: "調查設置",
    surveySettingsTooltip: "調查設置",
    themeSettings: "主題設置",
    themeSettingsTooltip: "主題設置",
    creatorSettingTitle: "Creator 設置",
    showPanel: "顯示面板",
    hidePanel: "“隱藏”面板",
    prevSelected: "選擇上一個",
    nextSelected: "選擇下一步",
    prevFocus: "焦點 上一頁",
    nextFocus: "接下來的重點",
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
    defaultV2Theme: "違約",
    modernTheme: "摩登",
    defaultTheme: "預設（舊版）",
    testSurveyAgain: "再次測試問卷",
    testSurveyWidth: "問卷寬度: ",
    navigateToMsg: "你必須導航到",
    saveSurvey: "保存問卷",
    saveSurveyTooltip: "保存調查",
    saveTheme: "保存主題",
    saveThemeTooltip: "保存主題",
    jsonHideErrors: "隱藏錯誤",
    jsonShowErrors: "顯示錯誤",
    undo: "還原",
    redo: "重做",
    undoTooltip: "恢復上次更改",
    redoTooltip: "重做更改",
    expandTooltip: "擴大",
    collapseTooltip: "崩潰",
    expandAllTooltip: "全部展開",
    collapseAllTooltip: "全部摺疊",
    zoomInTooltip: "放大",
    zoom100Tooltip: "縮放到 100%",
    zoomOutTooltip: "縮小",
    lockQuestionsTooltip: "鎖定問題的展開/摺疊狀態",
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
    toolboxFilteredTextPlaceholder: "鍵入以搜尋...",
    toolboxNoResultsFound: "未找到結果",
    propertyGridFilteredTextPlaceholder: "鍵入以搜尋...",
    propertyGridNoResultsFound: "未找到結果",
    propertyGridPlaceholderTitle: "開始配置表單",
    propertyGridPlaceholderDescription: "按兩下任何類別圖示以瀏覽調查設置。將測量元素添加到設計圖面后，其他設置將變為可用。",
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
    addLanguageTooltip: "添加語言",
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
    translateUsigAIFrom: "翻譯語言組合：",
    translationDialogTitle: "未翻譯的字串",
    translationMergeLocaleWithDefault: "將{0}與預設區域設置合併",
    translationPlaceHolder: "譯本。。。",
    translationSource: "源：",
    translationTarget: "目標：",
    translationYouTubeNotSupported: "不支援YouTube連結。",
    themeExportButton: "出口",
    themeImportButton: "進口",
    surveyJsonExportButton: "出口",
    surveyJsonImportButton: "進口",
    surveyJsonCopyButton: "複製到剪貼板",
    themeResetButton: "將主題設置重置為預設值",
    themeResetConfirmation: "你真的要重置主題嗎？您的所有自定義項都將丟失。",
    themeResetConfirmationOk: "是，重置主題",
    bold: "大膽",
    italic: "斜體的",
    underline: "下劃線",
    addNewQuestion: "添加問題",
    selectPage: "選擇頁面...",
    carryForwardChoicesCopied: "選擇是從",
    choicesLoadedFromWebText: "選項是從 Web 服務載入的。",
    choicesLoadedFromWebLinkText: "前往“設置”",
    choicesLoadedFromWebPreviewTitle: "載入選項的預覽",
    htmlPlaceHolder: "HTML內容將在這裡。",
    panelPlaceHolder: "在此處從工具箱中刪除問題。",
    surveyPlaceHolder: "調查為空。從工具箱中拖動元素或按下下面的按鈕。",
    pagePlaceHolder: "頁面為空。從工具箱中拖動元素或按下下面的按鈕。",
    imagePlaceHolder: "將圖像拖放到此處或按下下面的按鈕並選擇要上傳的圖像",
    surveyPlaceHolderMobile: "按兩下下面的「添加問題」 按鈕開始創建表單。",
    surveyPlaceholderTitle: "您的表單為空",
    surveyPlaceholderTitleMobile: "您的表單為空",
    surveyPlaceholderDescription: "從工具箱中拖動元素或按下下面的按鈕。",
    surveyPlaceholderDescriptionMobile: "從工具箱中拖動元素或按下下面的按鈕。",
    previewPlaceholderTitle: "無預覽",
    previewPlaceholderTitleMobile: "無預覽",
    previewPlaceholderDescription: "調查不包含任何可見元素。",
    previewPlaceholderDescriptionMobile: "調查不包含任何可見元素。",
    translationsPlaceholderTitle: "無需翻譯字串",
    translationsPlaceholderTitleMobile: "無需翻譯字串",
    translationsPlaceholderDescription: "將元素添加到表單或更改工具列中的字串篩選器。",
    translationsPlaceholderDescriptionMobile: "將元素添加到表單或更改工具列中的字串篩選器。",
    pagePlaceHolderMobile: "按兩下下面的「添加問題」 按鈕，向頁面添加新元素。",
    panelPlaceHolderMobile: "按下下面的「添加問題」 按鈕，將新元素添加到面板中。",
    imagePlaceHolderMobile: "點擊下面的按鈕，選擇要上傳的圖片",
    imageChooseImage: "選擇圖像",
    addNewTypeQuestion: "新增{0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[徽標]",
    choices_Item: "專案",
    selectFile: "選擇檔案",
    removeFile: "刪除檔案",
    lg: {
      addNewItem: "添加新規則",
      empty_tab: "創建規則以自定義調查流。",
      logicPlaceholderTitle: "無邏輯規則",
      logicPlaceholderTitleMobile: "無邏輯規則",
      logicPlaceholderDescription: "創建規則以自定義調查流程。",
      logicPlaceholderDescriptionMobile: "創建規則以自定義調查流程。",
      page_visibilityName: "顯示（隱藏）頁面",
      page_enableName: "啟用（禁用）頁面",
      page_requireName: "將頁面設為必填項",
      panel_visibilityName: "“顯示（隱藏）”面板",
      panel_enableName: "啟用（禁用）面板",
      panel_requireName: "將頁面設為必填項",
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
      question_resetValueText: "重置問題的值：{0}", //{0} question name.
      question_setValueText: "分配值：{1}問題：{0}",
      column_visibilityText: "使問題{1}的列{0}可見", //{0} column name, {1} question name
      column_enableText: "使問題{1}列{0}啟用", //{0} column name, {1} question name
      column_requireText: "{0}將問題{1}列為必填項", //{0} column name, {1} question name
      column_resetValueText: "重置列的儲存格值：{0}", //{0} column name
      column_setValueText: "將儲存格值：{1}分配給列：{0}", //{0} column name and {1} setValueExpression
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
      uncompletedRule_cancel: "不，我想完成規則"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "面板名稱",
      title: "面板標題",
      description: "面板說明",
      visibleIf: "如果出現以下情況，則使面板可見",
      requiredIf: "如果出現以下情況，則使面板成為必需的",
      questionOrder: "小組內的問題順序",
      page: "父頁面",
      startWithNewLine: "在新行上顯示面板",
      state: "面板摺疊狀態",
      width: "內嵌面板寬度",
      minWidth: "最小面板寬度",
      maxWidth: "最大面板寬度",
      showNumber: "為此面板編號"
    },
    panellayoutcolumn: {
      effectiveWidth: "有效寬度，%",
      questionTitleWidth: "問題標題寬度，px"
    },
    paneldynamic: {
      name: "面板名稱",
      title: "面板標題",
      description: "面板說明",
      visibleIf: "如果出現以下情況，則使面板可見",
      requiredIf: "如果出現以下情況，則使面板成為必需的",
      page: "將面板移動到頁面",
      startWithNewLine: "在新行上顯示面板",
      state: "面板摺疊狀態",
      width: "內嵌面板寬度",
      minWidth: "最小面板寬度",
      maxWidth: "最大面板寬度",
      confirmDelete: "確認面板刪除",
      templateDescription: "面板描述模式",
      templateTitle: "面板標題模式",
      noEntriesText: "空面板文本",
      templateTabTitle: "選項卡標題模式",
      tabTitlePlaceholder: "選項卡標題佔位元",
      templateVisibleIf: "如果出現以下情況，則使單個面板可見",
      showNumber: "為面板編號",
      titleLocation: "面板標題對齊方式",
      descriptionLocation: "面板描述對齊方式",
      templateQuestionTitleLocation: "問題標題對齊方式",
      templateQuestionTitleWidth: "問題標題寬度",
      templateErrorLocation: "錯誤消息對齊",
      newPanelPosition: "新面板位置",
      showRangeInProgress: "顯示進度條",
      keyName: "防止在以下問題中重複回答"
    },
    question: {
      name: "問題名稱",
      title: "問題標題",
      description: "問題描述",
      visibleIf: "如果出現以下情況，請使問題可見",
      requiredIf: "如果出現以下情況，則將問題設為必填項",
      page: "父頁面",
      state: "問題框摺疊狀態",
      showNumber: "為這個問題編號",
      titleLocation: "問題標題對齊方式",
      descriptionLocation: "問題描述對齊方式",
      errorLocation: "錯誤消息對齊",
      indent: "增加內部縮進",
      width: "內聯問題寬度",
      minWidth: "最小問題寬度",
      maxWidth: "最大問題寬度",
      textUpdateMode: "更新輸入欄位值"
    },
    signaturepad: {
      signatureWidth: "簽名區域寬度",
      signatureHeight: "簽名區域高度",
      signatureAutoScaleEnabled: "自動縮放簽名區域",
      showPlaceholder: "顯示佔位元",
      placeholder: "佔位元文本",
      placeholderReadOnly: "唯讀或預覽模式下的佔位元文本",
      allowClear: "在簽名區域內顯示「清除」 按鈕",
      penMinWidth: "最小筆寬",
      penMaxWidth: "最大筆寬",
      penColor: "描邊顏色"
    },
    comment: {
      rows: "輸入欄位高度（以行為單位）"
    },
    showQuestionNumbers: "顯示問題編號",
    questionStartIndex: "問題起始標誌 (1, 2 or 'A', 'a')",
    expression: {
      name: "表達式名稱",
      title: "表達式標題",
      description: "表達式說明",
      expression: "表達"
    },
    trigger: {
      expression: "表達"
    },
    calculatedvalue: {
      expression: "表達"
    },
    // survey templates
    survey: {
      title: "標題",
      description: "調查說明",
      readOnly: "將調查設為唯讀"
    },
    page: {
      name: "頁面名稱",
      title: "標題",
      description: "頁面描述",
      visibleIf: "如果出現以下情況，則使頁面可見",
      requiredIf: "如果出現以下情況，則使頁面為必填項",
      timeLimit: "完成頁面的時間限制（秒為單位 ）",
      questionOrder: "頁面上的問題順序"
    },
    matrixdropdowncolumn: {
      name: "列名稱",
      title: "專欄標題",
      isUnique: "防止重複回應",
      width: "列寬",
      minWidth: "最小列寬",
      rows: "輸入欄位高度（以行為單位）",
      visibleIf: "如果出現以下情況，則使列可見",
      requiredIf: "如果滿足以下條件，則使該列為必填項",
      showInMultipleColumns: "每個選項都在單獨的列中"
    },
    multipletextitem: {
      name: "名字",
      title: "標題"
    },
    masksettings: {
      saveMaskedValue: "在調查結果中保存掩碼值"
    },
    patternmask: {
      pattern: "價值模式"
    },
    datetimemask: {
      min: "最小值",
      max: "最大值"
    },
    numericmask: {
      allowNegativeValues: "允許負值",
      thousandsSeparator: "千分隔符",
      decimalSeparator: "小數點分隔符",
      precision: "值精度",
      min: "最小值",
      max: "最大值"
    },
    currencymask: {
      prefix: "貨幣前綴",
      suffix: "貨幣後綴"
    },
    imageHeight: "圖片高度",
    imageWidth: "圖片寬度",
    valueName: "Value name",
    defaultDisplayValue: "動態文字的預設顯示值",
    rateDescriptionLocation: "標籤對齊",
    size: "輸入欄位大小（以字元為單位 ）",
    cellErrorLocation: "單元格錯誤消息對齊方式",
    enabled: "啟用",
    disabled: "禁用",
    inherit: "繼承",
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
    "listIsEmpty@columns": "您還沒有任何列",
    "listIsEmpty@gridLayoutColumns": "您還沒有佈局列",
    "listIsEmpty@rows": "您還沒有任何行",
    "listIsEmpty@validators": "尚無任何驗證規則",
    "listIsEmpty@calculatedValues": "您還沒有任何自訂變數",
    "listIsEmpty@triggers": "您還沒有任何觸發器",
    "listIsEmpty@navigateToUrlOnCondition": "您還沒有任何連結",
    "listIsEmpty@pages": "您還沒有任何頁面",
    "addNew@choices": "添加選項",
    "addNew@columns": "添加新列",
    "addNew@rows": "添加新行",
    "addNew@validators": "添加新規則",
    "addNew@calculatedValues": "添加新變數",
    "addNew@triggers": "添加新觸發器",
    "addNew@navigateToUrlOnCondition": "添加新 URL",
    "addNew@pages": "添加新頁面",
    expressionIsEmpty: "表達式為空",
    value: "值",
    text: "顯示文本",
    rowid: "行標識",
    imageLink: "圖片或視頻網址",
    columnEdit: "編輯列: {0}",
    itemEdit: "編輯選項: {0}",
    url: "URL",
    path: "Path",
    choicesbyurl: {
      url: "Web 服務的 URL",
      valueName: "從以下 JSON 欄位中獲取值"
    },
    titleName: "Title name",
    imageLinkName: "從以下 JSON 欄位獲取影像網址",
    allowEmptyResponse: "允許空回應",
    titlePlaceholder: "標題",
    surveyTitlePlaceholder: "調查標題",
    pageTitlePlaceholder: "頁數 {num}",
    startPageTitlePlaceholder: "起始頁",
    descriptionPlaceholder: "描述",
    surveyDescriptionPlaceholder: "描述",
    pageDescriptionPlaceholder: "描述",
    textWrapEnabled: "換行選項",
    showOtherItem: "可添加其他答案?",
    otherText: "其他答案文本",
    showNoneItem: "允許“無”選項",
    showRefuseItem: "允許「拒絕應答」選項",
    showDontKnowItem: "允許“不知道”選項",
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
    allowCustomChoices: "允許自訂選項",
    visible: "是否可見?",
    isRequired: "是否為必填項?",
    markRequired: "標記為必填",
    removeRequiredMark: "刪除所需的標記",
    eachRowRequired: "要求所有行都回答",
    eachRowUnique: "防止行中出現重複回應",
    requiredErrorText: "“必需”錯誤消息",
    startWithNewLine: "問題是否新起一行?",
    rows: "文本框行數",
    cols: "列",
    placeholder: "占位文本",
    showPreview: "是否顯示圖像預覽?",
    storeDataAsText: "以 JSON 文本方式存儲文件",
    maxSize: "文件最大尺寸 (Bytes)",
    rowCount: "默認行數",
    columnLayout: "列佈局",
    addRowButtonLocation: "“添加行”按鈕位置",
    transposeData: "將行轉置為列",
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
    clearInvisibleValues: "清除隱藏值",
    cookieName: "Cookie name (to disable run survey two times locally)",
    partialSendEnabled: "Send survey results on page next",
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
    navigationButtonsLocation: "導航按鈕對齊",
    showPrevButton: "顯示前一頁按鈕 (用戶可返回至前一頁面)",
    firstPageIsStartPage: "調查的第一頁面為起始頁.",
    showCompletePage: "結尾展示完成後的頁面 (completedHtml)",
    autoAdvanceEnabled: "回答本頁所有問題後，自動跳轉到下一頁",
    autoAdvanceAllowComplete: "自動完成調查",
    showProgressBar: "顯示進度條",
    progressBarLocation: "進度條對齊",
    questionTitleLocation: "問題的標題位置",
    questionTitleWidth: "問題標題寬度",
    requiredMark: "The question required symbol(s)",
    questionTitleTemplate: "問題標題模板, 默認為: '{no}. {require} {title}'",
    questionErrorLocation: "問題錯誤定位",
    autoFocusFirstQuestion: "改變頁面時聚焦在第一個問題",
    questionOrder: "Elements order on the page",
    timeLimit: "完成調查的最長時間",
    timeLimitPerPage: "完成調查中頁面的最長時間",
    showTimer: "使用計時器",
    timerLocation: "顯示計時器面板",
    timerInfoMode: "顯示計時器面板模式",
    renderMode: "渲染模式",
    allowAddPanel: "允許添加面板",
    allowRemovePanel: "允許刪除面板",
    addPanelText: "添加面板文本",
    removePanelText: "刪除面板文本",
    isSinglePage: "在一個頁面上展示所有元素",
    html: "網頁標記",
    setValue: "答",
    dataFormat: "圖像格式",
    allowAddRows: "允許添加行",
    allowRemoveRows: "允許刪除行",
    allowRowReorder: "允許行拖放",
    responsiveImageSizeHelp: "如果指定確切的圖像寬度或高度，則不適用。",
    minImageWidth: "最小圖像寬度",
    maxImageWidth: "最大圖像寬度",
    minImageHeight: "最小圖像高度",
    maxImageHeight: "最大圖像高度",
    minValue: "最小值",
    maxValue: "最大值",
    caseInsensitive: "不區分大小寫",
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
    maxCommentLength: "最大註解長度（以字元為單位）",
    commentAreaRows: "評論區高度（以行為單位）",
    autoGrowComment: "如有必要，自動展開評論區域",
    allowResizeComment: "允許用戶調整文字區域的大小",
    textUpdateMode: "更新文字問題值",
    maskType: "輸入掩碼類型",
    autoFocusFirstError: "將焦點放在第一個無效答案上",
    checkErrorsMode: "運行驗證",
    validateVisitedEmptyFields: "驗證失去焦點時的空欄位",
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
    searchMode: "搜索模式",
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
    panelCount: "初始面板計數",
    minPanelCount: "最小面板數",
    maxPanelCount: "最大面板數",
    panelsState: "內面板展開狀態",
    prevPanelText: "“上一個面板”按鈕工具提示",
    nextPanelText: "“下一個面板”按鈕工具提示",
    removePanelButtonLocation: "“刪除面板”按鈕位置",
    hideIfRowsEmpty: "如果沒有行，則隱藏問題",
    hideColumnsIfEmpty: "如果沒有行，則隱藏列",
    rateValues: "自定義費率值",
    rateCount: "速率計數",
    autoGenerate: "如何指定速率值？",
    hideIfChoicesEmpty: "如果問題不包含任何選項，則隱藏問題",
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
    logoWidth: "徽標寬度（以 CSS 接受的值為單位）",
    logoHeight: "徽標高度（以 CSS 接受的值為單位）",
    readOnly: "唯讀",
    enableIf: "可編輯，如果",
    noRowsText: "“無行”消息",
    separateSpecialChoices: "單獨的特殊選項（無、其他、全選）",
    choicesFromQuestion: "複製以下問題的選項",
    choicesFromQuestionMode: "要複製哪些選項？",
    choiceValuesFromQuestion: "使用以下矩陣、列或面板問題中的值作為選項ID",
    choiceTextsFromQuestion: "使用以下矩陣、列或面板問題中的值作為選擇文本",
    progressBarShowPageTitles: "在進度條中顯示頁面標題",
    progressBarShowPageNumbers: "在進度條中顯示頁碼",
    showCommentArea: "顯示評論區域",
    commentPlaceholder: "註釋區佔位元",
    displayRateDescriptionsAsExtremeItems: "將速率描述顯示為極值",
    rowOrder: "行順序",
    columnsLayout: "列佈局",
    columnColCount: "嵌套列計數",
    correctAnswer: "正確答案",
    defaultPanelValue: "預設值",
    cells: "單元格文本",
    fileInputPlaceholder: "選擇檔案或貼上檔案連結...",
    keyName: "鍵列",
    itemvalue: {
      visibleIf: "如果出現以下情況，則使該選項可見",
      enableIf: "如果出現以下情況，則使該選項可選"
    },
    "itemvalue@rows": {
      visibleIf: "如果出現以下情況，則使行可見",
      enableIf: "如果出現以下情況，則使行可編輯"
    },
    imageitemvalue: {
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
    previewMode: "預覽模式",
    gridLayoutEnabled: "啟用網格佈局",
    gridLayoutColumns: "網格佈局列",
    maskSettings: "蒙版設置",
    detailErrorLocation: "行擴展錯誤消息對齊",
    // Creator tabs
    tabs: {
      panel: {
        layout: "面板佈局"
      },
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
      mask: "輸入掩碼設置",
      layout: {
        panel: "佈局",
        question: "佈局",
        base: "佈局"
      },
      data: "數據",
      validation: "驗證",
      cells: "單元格文本",
      showOnCompleted: "調查完成",
      logo: "調查標題中的徽標",
      slider: "滑塊",
      expression: "表達",
      questionSettings: "問題設置",
      header: "頁眉",
      background: "背景",
      appearance: "外觀",
      accentColors: "強調色",
      surfaceBackground: "表面背景",
      scaling: "縮放",
      others: "別人"
    },
    editProperty: "編輯屬性: '{0}'",
    items: "[ 項目數量: {0} ]",
    choicesVisibleIf: "在以下情況下，選項可見",
    choicesEnableIf: "在以下情況下，可以選擇選項",
    columnsEnableIf: "在以下情況下，列可見",
    rowsEnableIf: "在以下情況下，行可見",
    innerIndent: "添加內部縮進",
    copyDefaultValueFromLastEntry: "使用最後一個條目中的答案作為預設值",
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
    verticalAlign: "垂直對齊",
    alternateRows: "交替行",
    columnsVisibleIf: "在以下情況下，列可見",
    rowsVisibleIf: "在以下情況下，行可見",
    otherPlaceholder: "註釋區佔位元",
    filePlaceholder: "檔佔位元文本",
    photoPlaceholder: "照片占位元文本",
    fileOrPhotoPlaceholder: "檔或照片佔位元文字",
    rateType: "費率類型",
    url_placeholder: "例如：https://api.example.com/books",
    path_placeholder: "例如：categories.fiction",
    questionStartIndex_placeholder: "例如：a）",
    width_placeholder: "例：6in",
    minWidth_placeholder: "例如：600px",
    maxWidth_placeholder: "例：50%",
    imageHeight_placeholder: "自動",
    imageWidth_placeholder: "自動",
    itemTitleWidth_placeholder: "例：100px",
    theme: {
      themeName: "主題",
      isPanelless: "問題外觀",
      editorPanel: "背景和拐角半徑",
      questionPanel: "背景和拐角半徑",
      primaryColor: "強調色",
      panelBackgroundTransparency: "面板背景不透明度",
      questionBackgroundTransparency: "問題背景不透明度",
      fontSize: "字體大小",
      scale: "規模",
      cornerRadius: "拐角半徑",
      advancedMode: "高級模式",
      pageTitle: "標題字體",
      pageDescription: "描述字體",
      questionTitle: "標題字體",
      questionDescription: "描述字體",
      editorFont: "字體",
      backgroundOpacity: "不透明度",
      "--sjs-font-family": "字體家族",
      "--sjs-general-backcolor-dim": "背景顏色",
      "--sjs-primary-backcolor": "重音背景",
      "--sjs-primary-forecolor": "重音前景",
      "--sjs-special-red": "錯誤消息",
      "--sjs-shadow-small": "陰影效果",
      "--sjs-shadow-inner": "陰影效果",
      "--sjs-border-default": "顏色"
    },
    "header@header": {
      headerView: "視圖",
      logoPosition: "徽標位置",
      surveyTitle: "調查標題字體",
      surveyDescription: "調查描述字體",
      headerTitle: "調查標題字體",
      headerDescription: "調查描述字體",
      inheritWidthFrom: "內容區寬度",
      textAreaWidth: "文本寬度",
      backgroundColorSwitch: "背景顏色",
      backgroundImage: "背景圖片",
      backgroundImageOpacity: "不透明度",
      overlapEnabled: "重疊",
      logoPositionX: "徽標位置",
      titlePositionX: "標題位置",
      descriptionPositionX: "描述位置"
    }
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
    selected: "選擇",
    unselected: "未選中",
    decimal: "十進位",
    currency: "貨幣",
    percent: "百分之",
    firstExpanded: "第一個面板展開",
    off: "隱藏問題編號",
    list: "清單",
    carousel: "旋轉 木馬",
    tab: "製表元",
    progressTop: "面板導航器 + 頂部的進度條",
    progressBottom: "面板導航器 + 底部的進度條",
    progressTopBottom: "面板導航器 + 頂部和底部的進度條",
    horizontal: "水準",
    vertical: "垂直",
    top: "返回頁首",
    bottom: "底",
    topBottom: "頂部和底部",
    both: "雙",
    left: "左",
    right: "右",
    center: "中心",
    leftRight: "左和右",
    middle: "中間",
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
    edit: "編輯",
    display: "唯讀",
    contain: "包含",
    cover: "蓋",
    fill: "填補",
    next: "下一個",
    last: "最後",
    onComplete: "調查完成時",
    onHidden: "當問題變得隱藏時",
    onHiddenContainer: "當問題或其面板/頁面被隱藏時",
    clearInvisibleValues: {
      none: "從不"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "全名",
      "honorific-prefix": "前綴",
      "given-name": "名字",
      "additional-name": "中間名",
      "family-name": "姓",
      "honorific-suffix": "後綴",
      nickname: "昵稱",
      "organization-title": "職稱",
      username: "使用者名",
      "new-password": "新密碼",
      "current-password": "當前密碼",
      organization: "組織名稱",
      "street-address": "全街位址",
      "address-line1": "位址行 1",
      "address-line2": "位址行 2",
      "address-line3": "位址行 3",
      "address-level4": "4 級位址",
      "address-level3": "3 級位址",
      "address-level2": "2 級位址",
      "address-level1": "1 級位址",
      country: "國家代碼",
      "country-name": "國家/地區名稱",
      "postal-code": "郵遞區號",
      "cc-name": "持卡人姓名",
      "cc-given-name": "持卡人名字",
      "cc-additional-name": "持卡人中間名",
      "cc-family-name": "持卡人姓氏",
      "cc-number": "信用卡號",
      "cc-exp": "有效期",
      "cc-exp-month": "到期月份",
      "cc-exp-year": "到期年份",
      "cc-csc": "卡安全碼",
      "cc-type": "信用卡類型",
      "transaction-currency": "交易貨幣",
      "transaction-amount": "交易金額",
      language: "首選語言",
      bday: "生日",
      "bday-day": "生日",
      "bday-month": "生日月份",
      "bday-year": "生日年份",
      sex: "性",
      url: "網站 URL",
      photo: "個人頭像",
      tel: "電話號碼",
      "tel-country-code": "電話的國家代碼",
      "tel-national": "全國電話號碼",
      "tel-area-code": "區號",
      "tel-local": "本地電話號碼",
      "tel-local-prefix": "本地電話前綴",
      "tel-local-suffix": "本地電話後綴",
      "tel-extension": "電話分機",
      email: "電子郵件位址",
      impp: "即時通訊協定"
    },
    maskType: {
      none: "沒有",
      pattern: "模式",
      numeric: "數值的",
      datetime: "日期和時間",
      currency: "貨幣"
    },
    inputTextAlignment: {
      auto: "自動",
      left: "左",
      right: "右"
    },
    all: "都",
    page: "頁",
    survey: "調查",
    onNextPage: "切換到下一頁時",
    onValueChanged: "更改答案後",
    onValueChanging: "更改答案之前",
    questionsOnPageMode: {
      standard: "原始結構",
      singlePage: "在一個頁面上顯示所有問題",
      questionPerPage: "每頁顯示一個問題"
    },
    noPreview: "無預覽",
    showAllQuestions: "顯示所有問題",
    showAnsweredQuestions: "僅顯示已回答的問題",
    allQuestions: "顯示所有問題",
    answeredQuestions: "僅顯示已回答的問題",
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
    auto: "自動",
    showNavigationButtons: {
      none: "隱藏"
    },
    timerInfoMode: {
      combined: "雙"
    },
    addRowButtonLocation: {
      default: "取決於矩陣佈局"
    },
    panelsState: {
      default: "使用者無法展開或摺疊面板",
      collapsed: "所有面板均已摺疊",
      expanded: "所有面板均已展開",
      firstExpanded: "首次擴展"
    },
    widthMode: {
      static: "靜態的",
      responsive: "回應"
    },
    contentMode: {
      image: "圖像",
      video: "視頻",
      youtube: "優酷"
    },
    displayMode: {
      buttons: "按鈕",
      dropdown: "下拉清單"
    },
    rateColorMode: {
      default: "違約",
      scale: "規模"
    },
    scaleColorMode: {
      monochrome: "單色",
      colored: "彩色"
    },
    autoGenerate: {
      "true": "生成",
      "false": "手動輸入"
    },
    rateType: {
      labels: "標籤",
      stars: "星星",
      smileys: "笑臉"
    },
    state: {
      default: "鎖"
    },
    showQuestionNumbers: {
      default: "自動編號",
      on: "自動編號",
      onPage: "在每個頁面上重置",
      onpanel: "在每個面板上重置",
      onPanel: "在每個面板上重置",
      recursive: "遞歸編號",
      onSurvey: "在整個調查中繼續",
      off: "無編號"
    },
    descriptionLocation: {
      underTitle: "在問題標題下",
      underInput: "在輸入欄位下"
    },
    selectToRankAreasLayout: {
      horizontal: "在選項旁邊",
      vertical: "以上選擇"
    },
    displayStyle: {
      decimal: "十進位",
      currency: "貨幣",
      percent: "百分比",
      date: "日期"
    },
    totalDisplayStyle: {
      decimal: "十進位",
      currency: "貨幣",
      percent: "百分比",
      date: "日期"
    },
    rowOrder: {
      initial: "源語言"
    },
    questionOrder: {
      initial: "源語言"
    },
    progressBarLocation: {
      top: "返回頁首",
      bottom: "底",
      topbottom: "頂部和底部",
      aboveheader: "標題上方",
      belowheader: "標題下方",
      off: "隱藏"
    },
    sum: "和",
    count: "計數",
    min: "最小值",
    max: "麥克斯",
    avg: "平均",
    searchMode: {
      contains: "包含",
      startsWith: "開頭為"
    },
    backgroundImageFit: {
      auto: "自動",
      cover: "蓋",
      contain: "包含",
      fill: "伸展",
      tile: "瓦"
    },
    backgroundImageAttachment: {
      fixed: "固定",
      scroll: "滾動"
    },
    headerView: {
      basic: "基本",
      advanced: "高深"
    },
    inheritWidthFrom: {
      survey: "與調查相同",
      container: "適合容器"
    },
    backgroundColorSwitch: {
      none: "沒有",
      accentColor: "強調色",
      custom: "習慣"
    },
    colorPalette: {
      light: "光",
      dark: "黑暗"
    },
    isPanelless: {
      "false": "違約",
      "true": "不帶面板"
    },
    progressBarInheritWidthFrom: {
      survey: "與調查相同",
      container: "與容器相同"
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
      name: "受訪者不可見的面板ID。",
      description: "鍵入面板字幕。",
      visibleIf: "使用魔棒圖示設置確定面板可見性的條件規則。",
      enableIf: "使用魔棒圖示設置禁用面板唯讀模式的條件規則。",
      requiredIf: "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。",
      questionTitleLocation: "適用於此面板中的所有問題。如果要覆蓋此設置，請為單個問題定義標題對齊規則。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。",
      questionTitleWidth: "當問題標題與問題框左側對齊時，為問題標題設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。",
      questionErrorLocation: "設置與面板中所有問題相關的錯誤消息的位置。“繼承”選項應用頁面級別（如果已設置）或調查級別設置。",
      questionOrder: "保持問題的原始順序或隨機化問題。“繼承”選項應用頁面級別（如果已設置）或調查級別設置。",
      page: "將面板重新置放到選頁面的末尾。",
      innerIndent: "在面板內容和面板框的左邊框之間添加空格或邊距。",
      startWithNewLine: "取消選擇以將面板與上一個問題或面板顯示在一行中。如果面板是表單中的第一個元素，則該設置不適用。",
      state: "從中選擇：「展開」 - 面板完整顯示，可以摺疊;“已摺疊” - 面板僅顯示標題和描述，可以展開;“已鎖定” - 面板完整顯示，無法摺疊。",
      width: "設置面板的寬度，使其與同一行中的其他測量圖元成比例。接受 CSS 值（px、%、in、pt 等）。",
      showQuestionNumbers: "為嵌套在此面板中的問題分配編號。",
      effectiveColSpan: "指定此面板在網格佈局中跨越的列數。",
      gridLayoutColumns: "此表允許您設定面板中的每個網格列。它根據行中的最大元素數自動設置每列的寬度百分比。要自定義網格佈局，請手動調整這些值並定義每列中所有問題的標題寬度。"
    },
    paneldynamic: {
      name: "受訪者不可見的面板ID。",
      description: "鍵入面板字幕。",
      visibleIf: "使用魔棒圖示設置確定面板可見性的條件規則。",
      enableIf: "使用魔棒圖示設置禁用面板唯讀模式的條件規則。",
      requiredIf: "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。",
      templateQuestionTitleLocation: "適用於此面板中的所有問題。如果要覆蓋此設置，請為單個問題定義標題對齊規則。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。",
      templateQuestionTitleWidth: "當問題標題與問題框的左側對齊時，為問題標題設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。",
      templateErrorLocation: "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。",
      errorLocation: "設置與面板中所有問題相關的錯誤消息的位置。“繼承”選項應用頁面級別（如果已設置）或調查級別設置。",
      page: "將面板重新置放到選頁面的末尾。",
      innerIndent: "在面板內容和面板框的左邊框之間添加空格或邊距。",
      startWithNewLine: "取消選擇以將面板與上一個問題或面板顯示在一行中。如果面板是表單中的第一個元素，則該設置不適用。",
      state: "從中選擇：「展開」 - 面板完整顯示，可以摺疊;“已摺疊” - 面板僅顯示標題和描述，可以展開;“已鎖定” - 面板完整顯示，無法摺疊。",
      width: "設置面板的寬度，使其與同一行中的其他測量圖元成比例。接受 CSS 值（px、%、in、pt 等）。",
      templateTitle: "鍵入動態面板標題的範本。使用 {panelIndex} 作為面板的常規位置，使用 {visiblePanelIndex} 作為其在可見面板中的順序。將這些佔位元插入到圖案中以添加自動編號。",
      templateTabTitle: "鍵入選項卡標題的範本。使用 {panelIndex} 表示面板的大致位置，使用 {visiblePanelIndex} 表示其在可見面板中的順序。將這些佔位元插入到圖案中以添加自動編號。",
      tabTitlePlaceholder: "選項卡標題的回退文本，當選項卡標題模式未生成有意義的值時應用。",
      templateVisibleIf: "此設置允許您控制動態面板中各個面板的可見性。使用“{panel}”佔位符在運算式中引用當前面板。",
      titleLocation: "此面板中的所有問題都會自動繼承此設置。如果要覆蓋此設置，請為單個問題定義標題對齊規則。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。",
      descriptionLocation: "“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“在面板標題下”）。",
      newPanelPosition: "定義新添加的面板的位置。默認情況下，新面板將添加到末尾。選擇「下一步」以在當前面板之後插入新面板。",
      copyDefaultValueFromLastEntry: "複製上一個面板中的答案，並將其分配給下一個添加的動態面板。",
      keyName: "引用問題名稱以要求使用者在每個面板中為此問題提供唯一的答案。"
    },
    copyDefaultValueFromLastEntry: "複製最後一行的答案，並將其分配給下一個添加的動態行。",
    defaultValueExpression: "此設定允許您根據表示式分配預設答案值。表達式可以包括基本計算 - '{q1_id} + {q2_id}'、布爾表達式，例如 '{age} > 60'，以及函數：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。此表達式確定的值用作初始預設值，可由回應者的手動輸入覆蓋。",
    resetValueIf: "使用魔杖圖示設置條件規則，該規則確定何時將受訪者的輸入重置為基於“預設值表達式”或“設置值表達式”的值，或重置為“預設答案”值（如果設置了其中任何一個）。",
    setValueIf: "使用魔杖圖示設置條件規則，該規則確定何時運行「設置值表達式」 ，並將結果值動態分配為回應。",
    setValueExpression: "指定一個表達式，該運算式定義在滿足「如果設置值」規則中的條件時要設置的值。表達式可以包括基本計算 - '{q1_id} + {q2_id}'、布爾表達式，例如 '{age} > 60'，以及函數：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。由此表達式確定的值可以被受訪者的手動輸入覆蓋。",
    gridLayoutEnabled: "Survey Creator 允許您手動調整表單元素的內聯寬度以控制佈局。如果這沒有產生所需的結果，您可以啟用網格佈局，該佈局使用基於列的系統構建表單元素。要配置佈局列，請選擇一個頁面或面板，然後使用 “Question Settings” → “Grid columns” 表格。要調整問題跨越的列數，請選擇它並在 「Layout」 → 「Column span」 欄位中設置所需的值。",
    question: {
      name: "受訪者不可見的問題ID。",
      description: "鍵入問題副標題。",
      visibleIf: "使用魔杖圖示設置確定問題可見性的條件規則。",
      enableIf: "使用魔杖圖示設置條件規則，以禁用問題的唯讀模式。",
      requiredIf: "使用魔杖圖標設置條件規則，除非問題得到答案，否則阻止調查推進或提交。",
      startWithNewLine: "取消選擇以將問題與上一個問題或面板顯示在一行中。如果問題是表單中的第一個元素，則該設置不適用。",
      page: "將問題重新置放到選頁面的末尾。",
      state: "從以下選項中選擇：「展開」 - 問題框完整顯示，可以摺疊;“已摺疊” - 問題框僅顯示標題和描述，可以展開;“已鎖定” - 問題框完整顯示，無法摺疊。",
      titleLocation: "覆蓋在面板、頁面或調查級別上定義的標題對齊規則。“繼承”選項將應用任何更高級別的設置（如果已設置）或調查級別的設置（預設為“頂部”）。",
      descriptionLocation: "“繼承”選項應用調查級別設置（預設為“在問題標題下”）。",
      errorLocation: "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。“繼承”選項將應用調查級別設置（預設為“頂部”）。",
      indent: "在問題內容和問題框的左邊框之間添加空格或邊距。",
      width: "設置問題的寬度，使其與同一行中的其他調查元素成比例。接受 CSS 值（px、%、in、pt 等）。",
      surveyvalidator: {
        expression: "使用魔杖圖示為問題設置驗證規則。"
      },
      textUpdateMode: "從中選擇：「失焦時」 - 當輸入字段失去焦點時，該值會更新;“鍵入時” - 當使用者鍵入時，該值會即時更新。“繼承”選項將應用調查級別設置（預設為“失去焦點時”）。",
      url: "您可以使用任何 Web 服務作為多項選擇題的數據來源。要填充選項值，請輸入提供數據的服務的URL。",
      searchMode: "用於篩選下拉清單的比較操作。",
      textWrapEnabled: "選項選項中的長文本將自動生成換行符以適合下拉功能表。如果要剪裁文字，請取消選擇。",
      effectiveColSpan: "指定此問題在網格佈局中跨越多少列。"
    },
    signaturepad: {
      signatureWidth: "設置顯示的簽名區域和生成的圖像的寬度。",
      signatureHeight: "設置顯示的簽名區域和生成的圖像的高度。",
      signatureAutoScaleEnabled: "選擇是否希望簽名區域填充問題框中的所有可用空間，同時保持預設的 3：2 縱橫比。設置自定義寬度和高度值后，該設置將保留這些尺寸的縱橫比。"
    },
    file: {
      imageHeight: "調整調查結果中圖像的高度。",
      imageWidth: "調整調查結果中圖像的寬度。",
      allowImagesPreview: "儘可能顯示已上傳檔的縮圖預覽。取消選擇是否要顯示檔圖示。"
    },
    image: {
      contentMode: "“自動”選項會根據提供的源URL自動確定適合的顯示模式 - 圖像、視頻或YouTube。"
    },
    imagepicker: {
      imageHeight: "覆蓋最小和最大高度值。",
      imageWidth: "覆蓋最小和最大寬度值。",
      choices: "“值”用作條件規則中使用的專案ID;向受訪者顯示“文本”。",
      contentMode: "在「圖像」和「視頻」之間進行選擇以設置媒體選擇器的內容模式。如果選擇「圖像」，請確保提供的所有選項都是以下格式的圖像檔：JPEG、GIF、PNG、APNG、SVG、BMP、ICO。同樣，如果選擇「視頻」，請確保所有選項都是指向以下格式的視頻檔的直接連結：MP4、MOV、WMV、FLV、AVI、MKV。請注意，視頻選項不支援 YouTube 連結。"
    },
    text: {
      size: "此設置僅調整輸入欄位的大小，不會影響問題框的寬度。要限制接受的輸入長度，請轉到<b>驗證→最大字元限制</b>。"
    },
    comment: {
      rows: "設置輸入欄位中顯示的行數。如果輸入佔用更多行，則會出現滾動條。"
    },
    // survey templates
    survey: {
      readOnly: "選擇是否要阻止受訪者填寫您的調查。",
      progressBarLocation: "設置進度條的位置。“自動”值在調查標題的上方或下方顯示進度條。"
    },
    matrixdropdowncolumn: {
      name: "受訪者不可見的列ID。",
      isUnique: "為列啟用后，受訪者需要為此列中的每個問題提供唯一的回答。",
      rows: "設置輸入欄位中顯示的行數。如果輸入佔用更多行，則會出現滾動條。",
      visibleIf: "使用魔杖圖示設置確定列可見性的條件規則。",
      enableIf: "使用魔杖圖示設置禁用列唯讀模式的條件規則。",
      requiredIf: "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。",
      showInMultipleColumns: "選取後，為每個選項創建一個單獨的列。",
      colCount: "在多列佈局中排列選項。設置為 0 時，選項將以單行顯示。當設置為 -1 時，實際值繼承自父矩陣的 “Nested column count” 屬性。"
    },
    caseInsensitive: "如果必須將正則表示式中的大寫字母和小寫字母視為等效字母，請選擇此項。",
    widthMode: "從以下選項中選擇： 「靜態」 - 設置固定寬度;“回應式” - 使調查佔據螢幕的整個寬度;“自動” - 根據所使用的問題類型應用兩者中的任何一個。",
    cookieName: "Cookie 可防止使用者兩次填寫同一調查問卷。",
    logo: "粘貼圖像連結（無大小限制）或按下資料夾圖示以瀏覽電腦中的檔（最大 64KB）。",
    logoWidth: "以 CSS 單位（px、%、in、pt 等）設置徽標寬度。",
    logoHeight: "以 CSS 單位（px、%、in、pt 等）設置徽標高度。",
    logoFit: "從以下選項中選擇：「無」 - 影像保持其原始大小;“包含” - 調整圖像大小以適應其縱橫比;“封面” - 圖像填充整個框，同時保持其縱橫比;“填充” - 拉伸圖像以填充框，而不保持其縱橫比。",
    autoAdvanceEnabled: "選擇是否希望調查在受訪者回答了當前頁面上的所有問題後自動前進到下一頁。如果頁面上的最後一個問題是開放式的或允許多個答案，則此功能將不適用。",
    autoAdvanceAllowComplete: "選擇是否希望在受訪者回答所有問題後自動完成調查。",
    showNavigationButtons: "設置導航按鈕在頁面上的可見性和位置。",
    navigationButtonsLocation: "設置頁面上導航按鈕的位置。",
    showPreviewBeforeComplete: "啟用僅包含所有問題或已回答問題的預覽頁面。",
    questionTitleLocation: "適用於調查中的所有問題。此設置可以被較低級別的標題對齊規則覆蓋：面板、頁面或問題。較低級別的設置將覆蓋較高級別的設置。",
    requiredMark: "一個符號或一系列符號，表示需要答案。",
    questionStartIndex: "輸入要開始編號的數位或字母。",
    questionErrorLocation: "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。",
    autoFocusFirstQuestion: "選擇是否希望每個頁面上的第一個輸入字段準備好進行文本輸入。",
    questionOrder: "保持問題的原始順序或隨機化問題。此設置的效果僅在「預覽」選項卡中可見。",
    maxTextLength: "僅適用於文本輸入問題。",
    maxCommentLength: "僅供問題評論。",
    commentAreaRows: "設置問題註釋的文字區域中顯示的行數。如果輸入佔用更多行，則會顯示滾動條。",
    autoGrowComment: "選擇是否希望問題註釋和長文本問題根據輸入的文字長度自動增加高度。",
    allowResizeComment: "僅適用於問題評論和長文本問題。",
    calculatedValues: "自訂變數用作表單計算中使用的中間變數或輔助變數。他們將受訪者的輸入作為源值。每個自定義變數都有一個唯一的名稱和它所基於的表達式。",
    includeIntoResult: "選擇是否希望將表達式的計算值與調查結果一起保存。",
    triggers: "觸發器是基於表達式的事件或條件。一旦表達式被計算為「true」，觸發器就會觸發一個操作。這樣的操作可以選擇性地影響它的目標問題。",
    clearInvisibleValues: "選擇是否清除條件邏輯隱藏的問題的值以及何時清除。",
    textUpdateMode: "從中選擇：「失焦時」 - 當輸入字段失去焦點時，該值會更新;“鍵入時” - 當使用者鍵入時，該值會即時更新。",
    columns: "左邊的值用作條件規則中使用的列ID，右邊的值顯示給受訪者。",
    rows: "左邊的值用作條件規則中使用的行ID，右邊的值顯示給受訪者。",
    columnMinWidth: "接受 CSS 值（px、%、in、pt 等）。",
    rowTitleWidth: "接受 CSS 值（px、%、in、pt 等）。",
    totalText: "僅當至少一列具有 Total 類型或 Total 運算式時才可見。",
    cellErrorLocation: "設置與輸入無效的儲存格相關的錯誤訊息的位置。“繼承”選項應用“錯誤消息對齊”屬性中的設置。",
    detailErrorLocation: "設置嵌套在詳細資訊部分中的問題的錯誤消息的位置。“Inherit” 選項應用“Error message alignment” 屬性中的設置。",
    keyDuplicationError: "啟用「防止重複響應」屬性後，嘗試提交重複條目的受訪者將收到以下錯誤消息。",
    totalExpression: "允許您根據表達式計算總值。表達式可以包括基本計算 （'{q1_id} + {q2_id}'）、布爾表達式 （'{age} > 60'） 和函數 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。",
    confirmDelete: "觸發提示，要求確認刪除行。",
    keyName: "如果指定的列包含相同的值，則調查將引發「非唯一鍵值」錯誤。",
    description: "鍵入副標題。",
    locale: "選擇一種語言以開始創建調查。要添加翻譯，請切換到新語言，然後在此處或“翻譯”選項卡中翻譯原始文本。",
    detailPanelMode: "設置詳細資訊部分相對於行的位置。從中選擇：「無」 - 不添加擴展;“Under the row” - 矩陣的每一行下都放置一個行擴展;“在行下，僅顯示一行擴展” - 僅在單行下顯示擴展，其餘行展開將摺疊。",
    imageFit: "從以下選項中選擇：「無」 - 影像保持其原始大小;“包含” - 調整圖像大小以適應其縱橫比;“封面” - 圖像填充整個框，同時保持其縱橫比;“填充” - 拉伸圖像以填充框，而不保持其縱橫比。",
    autoGrow: "在輸入數據時逐漸增加輸入欄位的高度。覆蓋「輸入欄位高度（以行為單位）」設置。",
    allowResize: "調整大小的手柄（或手柄）出現在角落，可以拖動以更改輸入字段的大小。",
    timeLimit: "以秒為單位的時間間隔，在此時間間隔之後，調查將自動前進到“感謝”頁面。",
    timeLimitPerPage: "以秒為單位的時間間隔，在此時間間隔之後，調查將自動前進到下一頁。",
    validateVisitedEmptyFields: "啟用此選項可在使用者將焦點放在空輸入欄位上，然後離開該欄位而不進行任何更改時觸發驗證。",
    page: {
      name: "受訪者不可見的頁面ID。",
      description: "鍵入頁面副標題。",
      navigationTitle: "顯示在進度條或目錄 （TOC） 中的導航按鈕上的說明。如果將此欄位留空，則導航按鈕將使用頁面標題或頁面名稱。要啟用進度條或 TOC，請轉到“調查”→“導航”。",
      timeLimit: "以秒為單位的時間間隔，在此時間間隔之後，調查將自動前進到下一頁。",
      visibleIf: "使用魔杖圖示設置確定頁面可見性的條件規則。",
      enableIf: "使用魔杖圖示設置禁用頁面只讀模式的條件規則。",
      requiredIf: "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。",
      questionTitleLocation: "適用於本頁中的所有問題。如果要覆蓋此設置，請為單個問題或面板定義標題對齊規則。“繼承”選項將應用調查級別設置（預設為“頂部”）。",
      questionTitleWidth: "當問題標題與問題框左側對齊時，為問題標題設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。",
      questionErrorLocation: "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。“繼承”選項將應用調查級別設置（預設為“頂部”）。",
      questionOrder: "保持問題的原始順序或隨機化問題。繼承「選項應用調查級別設置（預設為」原始」。）。此設置的效果僅在「預覽」選項卡中可見。",
      showNavigationButtons: "設置導航按鈕在頁面上的可見性。“繼承”選項應用調查級別設置，預設為“可見”。",
      gridLayoutColumns: "此表允許您設定頁面上的每個網格列。它根據行中的最大元素數自動設置每列的寬度百分比。要自定義網格佈局，請手動調整這些值並定義每列中所有問題的標題寬度。"
    },
    timerLocation: "設置計時器在頁面上的位置。",
    panelsState: "從以下選項中選擇：「鎖定」 - 使用者無法展開或摺疊面板;“全部摺疊” - 所有面板都以摺疊狀態啟動;“全部展開” - 所有面板都以展開狀態啟動;“首先展開” - 最初只有第一個面板被展開。",
    imageLinkName: "在物件陣列中輸入共用屬性名稱，該數位包含要在選項清單中顯示的圖像或視頻檔URL。",
    choices: "左邊的值用作條件規則中使用的專案ID，右邊的值顯示給受訪者。",
    title: "鍵入要顯示的使用者友好標題。",
    waitForUpload: "確保使用者在上傳檔之前不會完成調查。",
    minWidth: "接受 CSS 值（px、%、in、pt 等）。",
    maxWidth: "接受 CSS 值（px、%、in、pt 等）。",
    width: "接受 CSS 值（px、%、in、pt 等）。",
    valueName: "如果未設置此屬性，則答案將存儲在 Name 屬性指定的欄位中。",
    defaultDisplayValue: "當問題值為空時，顯示在 HTML 問題以及調查元素的動態標題和描述中的值。",
    useDisplayValuesInDynamicTexts: "在單選題和多選題類型中，每個選項都有一個 ID 和顯示值。選中此設置后，將在 HTML 問題以及調查元素的動態標題和描述中顯示顯示值，而不是 ID 值。",
    clearIfInvisible: "選擇是否清除條件邏輯隱藏的問題值以及何時清除。“繼承”選項應用調查級別設置（預設為“完成調查後”）。",
    choicesFromQuestionMode: "從以下選項中選擇：「全部」 - 複製所選問題中的所有選項;“Selected” - 僅動態複製選定的選項選項;“未選擇” - 僅動態複製未選擇的選項。默認情況下，如果在源問題中啟用了“無”和“其他”選項，則會複製該選項。",
    choiceValuesFromQuestion: "在單選和多選問題類型中，每個選項都有一個ID和顯示值。此設置指定哪個矩陣、列或面板問題應提供ID。",
    choiceTextsFromQuestion: "在單選和多選問題類型中，每個選項都有一個ID和顯示值。此設置指定哪個矩陣列或面板問題應提供顯示文本。",
    allowCustomChoices: "如果下拉清單中沒有所需的選項，則選擇以允許受訪者添加自己的選擇。自訂選項將僅在當前瀏覽器會話期間臨時存儲。",
    showOtherItem: "選取後，使用者可以在單獨的註釋框中包含其他輸入。",
    separateSpecialChoices: "在新行上顯示每個特殊選項（“無”、“其他”、“全選”），即使使用多列佈局也是如此。",
    path: "指定服務數據集中目標物件陣列所在的位置。如果 URL 已指向陣列，則留空。",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "在物件陣列中輸入一個統一的屬性名稱，該陣列包含要在選項清單中顯示的值。",
    allowEmptyResponse: "選擇此選項可允許服務傳回空回應或陣列。",
    choicesVisibleIf: "使用魔杖圖示設置條件規則，以確定所有選項的可見性。",
    rateValues: "左邊的值用作條件規則中使用的專案ID，右邊的值顯示給受訪者。",
    rating: {
      displayMode: "“自動”根據可用寬度在“按鈕”和“下拉”模式之間進行選擇。當寬度不足以顯示按鈕時，問題將顯示一個下拉清單。"
    },
    valuePropertyName: "允許您連接以不同格式生成結果的問題。當使用聯接標識碼將此類問題連結在一起時，此共用屬性將存儲選定的問題值。",
    searchEnabled: "選擇是否要更新下拉功能表內容以匹配使用者在輸入欄位中鍵入的搜索查詢。",
    valueTrue: "當受訪者給出肯定答案時保存在調查結果中的值。",
    valueFalse: "當受訪者給出否定答案時保存在調查結果中的值。",
    showPreview: "不建議禁用此選項，因為它會覆蓋預覽圖像，並使用戶難以了解檔是否已上傳。",
    needConfirmRemoveFile: "觸發提示，要求確認文件刪除。",
    selectToRankEnabled: "啟用此選項可僅對選定的選項進行排名。使用者將從選項清單中拖動所選專案，以在排名區域內對它們進行排序。",
    dataList: "輸入將在輸入期間向受訪者建議的選項清單。",
    inputSize: "該設置僅調整輸入欄位的大小，不會影響問題框的寬度。",
    itemTitleWidth: "為所有項目標籤設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。",
    inputTextAlignment: "選擇如何在欄位中對齊輸入值。默認設置 「Auto」 如果應用了貨幣或數位掩碼，則將輸入值向右對齊，如果未應用，則向左對齊。",
    altText: "當圖像無法在使用者設備上顯示時，出於輔助功能的目的，可作為替代。",
    rateColorMode: "定義當評級圖示類型設置為「笑臉」時所選表情符號的顏色。選擇：「預設」 - 選取表情符號以預設調查顏色顯示;“比例” - 所選的表情符號繼承了評分量表的顏色。",
    expression: {
      name: "受訪者不可見的表達式ID。",
      description: "鍵入表達式副標題。",
      expression: "表達式可以包括基本計算 （'{q1_id} + {q2_id}'）、條件 （'{age} > 60'） 和函數 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。"
    },
    storeOthersAsComment: "選擇此選項可將「其他」選項值作為單獨的屬性存儲在調查結果中。",
    format: "使用 {0} 作為實際值的佔位元。",
    acceptedTypes: "有關詳細資訊，請參閱 [accept]（https://www.w3schools.com/tags/att_input_accept.asp） 屬性說明。",
    columnColCount: "僅適用於單選組和複選框單元類型。",
    autocomplete: "有關詳細資訊，請參閱 [autocomplete]（https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete） 屬性說明。",
    filePlaceholder: "當「源類型」為「本地檔」或相機不可用時適用",
    photoPlaceholder: "當「源類型」為「相機」時適用。",
    fileOrPhotoPlaceholder: "當「源類型」為「本地檔或相機」時適用。",
    colCount: "在多列佈局中排列選項。當設置為 0 時，選項將顯示在一行中。",
    masksettings: {
      saveMaskedValue: "選擇是否要在調查結果中存儲帶有應用掩碼的問題值。"
    },
    patternmask: {
      pattern: "該模式可以包含字串文字和以下佔位元： '9' - 表示數位;“a” - 表示大寫或小寫字母;'#' - 表示數位或大寫或小寫字母。使用反斜杠“\\”轉義字元。"
    },
    datetimemask: {
      pattern: "模式可以包含分隔符和以下佔位元：“<br>m”- 月份編號。<br>'mm' - 月份編號，前導零表示個位數值。<br>'d' - 月份中的某一天。<br>'dd' - 月份的某一天，個位數值的前導為零。<br>'yy' - 年份的最後兩位數位。<br>'yyyy' - 四位數年份。<br>“H” - 24 小時制的小時數。<br>“HH” - 24 小時制的小時數，個位數值的前導為零。<br>'h' - 以 12 小時為制的小時數。<br>'hh' - 12 小時制的小時數，個位數值的前導為零。<br>'MM' - 分鐘。<br>'ss' - 秒。<br>“TT” - 大寫 （AM/PM） 的 12 小時制週期。<br>'tt' - 小寫 （am/pm） 的 12 小時制週期。"
    },
    numericmask: {
      decimalSeparator: "用於將顯示數位的小數部分與整數部分分開的符號。",
      thousandsSeparator: "用於將大數的數位分成三組的符號。",
      precision: "限制顯示數位的小數點後要保留的位數。"
    },
    currencymask: {
      prefix: "要在值之前顯示的一個或多個符號。",
      suffix: "要在值后顯示的一個或多個符號。"
    },
    theme: {
      isPanelless: "此設置僅適用於面板之外的問題。",
      primaryColor: "設置一種補充顏色，用於突出顯示關鍵調查元素。",
      panelBackgroundTransparency: "調整面板和問題框相對於調查背景的透明度。",
      questionBackgroundTransparency: "調整輸入元素相對於調查背景的透明度。",
      cornerRadius: "設置所有矩形元素的圓角半徑。如果要為輸入元素或面板和問題框設置單獨的角半徑值，請啟用高級模式。",
      "--sjs-general-backcolor-dim": "設置調查的主要背景顏色。"
    },
    header: {
      inheritWidthFrom: "“與容器相同”選項會自動調整標題內容區域的寬度，以適應放置調查的 HTML 元素。",
      textAreaWidth: "包含調查標題和描述的標題區域的寬度，以像素為單位。",
      overlapEnabled: "啟用后，調查的頂部將覆蓋頁眉的底部。",
      mobileHeight: "設置為 0 時，將自動計算高度以適應標題的內容。"
    },
    progressBarInheritWidthFrom: "“與容器相同”選項會自動調整進度條區域的寬度，以適應放置調查的 HTML 元素。"
  },
  // Properties
  p: {
    title: {
      name: "標題",
      title: "如果與名字相同，請設置為空值"
    },
    multiSelect: "允許多項選擇",
    showLabel: "顯示圖像標題",
    swapOrder: "交換“是”和“否”的順序",
    value: "價值",
    tabAlign: "製表元對齊方式",
    sourceType: "源類型",
    fitToContainer: "適合容器",
    setValueExpression: "設置值表達式",
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
    inputSize: "專案大小",
    itemTitleWidth: "項目標籤寬度（以 px 為單位）",
    inputTextAlignment: "輸入值對齊",
    elements: "元素",
    content: "內容",
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
    mobileHeight: "智能手機上的身高",
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
    selectToRankEmptyRankedAreaText: "顯示是否選擇了所有選項的文字",
    selectToRankEmptyUnrankedAreaText: "排名區域的佔位元文本",
    allowCameraAccess: "允許攝像頭訪問",
    scaleColorMode: "縮放顏色模式",
    rateColorMode: "評價顏色模式",
    copyDisplayValue: "複製顯示值",
    effectiveColSpan: "柱跨度",
    progressBarInheritWidthFrom: "進度條區域寬度"
  },
  theme: {
    advancedMode: "高級模式",
    pageTitle: "頁面標題字體",
    questionTitle: "問題標題字體",
    editorPanel: "輸入元素",
    lines: "線",
    primaryDefaultColor: "違約",
    primaryDarkColor: "懸停",
    primaryLightColor: "選擇",
    backgroundDimColor: "背景色",
    cornerRadius: "拐角半徑",
    backcolor: "默認背景",
    hovercolor: "懸停背景",
    borderDecoration: "邊框裝飾",
    fontColor: "字體顏色",
    backgroundColor: "背景顏色",
    primaryForecolor: "默認顏色",
    primaryForecolorLight: "禁用顏色",
    font: "字體",
    borderDefault: "暗",
    borderLight: "打火機",
    fontFamily: "字體家族",
    fontWeightRegular: "定期",
    fontWeightHeavy: "重",
    fontWeightSemiBold: "半粗體",
    fontWeightBold: "大膽",
    color: "顏色",
    placeholderColor: "佔位元顏色",
    size: "大小",
    opacity: "不透明度",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "添加陰影效果",
    boxShadowBlur: "模糊",
    boxShadowSpread: "傳播",
    boxShadowDrop: "落",
    boxShadowInner: "內",
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
      green: "綠",
      gray: "灰色"
    }
  },
  creatortheme: {
    "--sjs-special-background": "表面背景",
    "--sjs-primary-background-500": "主要",
    "--sjs-secondary-background-500": "二 次",
    surfaceScale: "表面",
    userInterfaceBaseUnit: "用戶介面",
    fontScale: "字體",
    names: {
      sc2020: "調查建立者 2020",
      "default-light": "光",
      "default-dark": "黑暗",
      "default-contrast": "反差"
    }
  }
};

setupLocale({ localeCode: "zh-tw", strings: traditionalChineseTranslation });

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
// pe.eachRowRequired: "Require answer for all rows" => "要求所有行都回答"
// pe.requiredErrorText: "\"Required\" error message" => "“必需”錯誤消息"
// pe.cols: "Columns" => "列"
// pe.columnLayout: "Columns layout" => "列佈局"
// pe.addRowButtonLocation: "Add Row button location" => "“添加行”按鈕位置"
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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "完成頁面的時間限制（秒為單位 ）"
// question.page: "Parent page" => "父頁面"
// pe.noEntriesText: "Empty entries text" => "空條目文本"
// pe.html: "HTML markup" => "網頁標記"
// pe.expression: "Expression" => "表達"
// pe.setValue: "Answer" => "答"
// pe.dataFormat: "Image format" => "圖像格式"
// pe.allowAddRows: "Allow adding rows" => "允許添加行"
// pe.allowRemoveRows: "Allow removing rows" => "允許刪除行"
// pe.allowRowReorder: "Allow row drag and drop" => "允許行拖放"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "最大註解長度（以字元為單位）"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "如有必要，自動展開評論區域"
// pe.allowResizeComment: "Allow users to resize text areas" => "允許用戶調整文字區域的大小"
// pe.textUpdateMode: "Update text question value" => "更新文字問題值"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "將焦點放在第一個無效答案上"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "“上一個面板”按鈕工具提示"
// pe.nextPanelText: "Next Panel button tooltip" => "“下一個面板”按鈕工具提示"
// pe.showRangeInProgress: "Show progress bar" => "顯示進度條"
// pe.templateQuestionTitleLocation: "Question title location" => "問題標題位置"
// pe.removePanelButtonLocation: "Remove Panel button location" => "“刪除面板”按鈕位置"
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
// pe.showNumber: "Show panel number" => "顯示面板編號"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "徽標寬度（以 CSS 接受的值為單位）"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "徽標高度（以 CSS 接受的值為單位）"
// pe.readOnly: "Read-only" => "唯讀"
// pe.enableIf: "Editable if" => "可編輯，如果"
// pe.noRowsText: "\"No rows\" message" => "“無行”消息"
// pe.size: "Input field size (in characters)" => "輸入欄位大小（以字元為單位 ）"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "單獨的特殊選項（無、其他、全選）"
// pe.choicesFromQuestion: "Copy choices from the following question" => "複製以下問題的選項"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "要複製哪些選項？"
// pe.showCommentArea: "Show the comment area" => "顯示評論區域"
// pe.commentPlaceholder: "Comment area placeholder" => "註釋區佔位元"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "將速率描述顯示為極值"
// pe.rowOrder: "Row order" => "行順序"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "取決於矩陣佈局"
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
// p.inputSize: "Item size" => "專案大小"
// p.elements: "Elements" => "元素"
// p.content: "Content" => "內容"
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
// theme.groupAdvanced: "Advanced" => "高深"
// theme.themeName: "Theme" => "主題"
// theme.isPanellessss: "Question appearance" => "問題外觀"
// theme.isPanellessPanels: "Default" => "違約"
// theme.isPanellessLightweight: "Without Panels" => "不帶面板"
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
// theme.surveyTitleFont: "Survey title font" => "調查標題字體"
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
// names.sharp: "Sharp" => "鋒利"
// names.borderless: "Borderless" => "無國界"
// names.flat: "Flat" => "平"
// names.doubleborder: "Double Border" => "雙邊框"
// names.layered: "Layered" => "分層的"
// names.solid: "Solid" => "固體"
// names.threedimensional: "3D" => "。.3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "您確定要刪除此語言的所有字串嗎？"
// ed.themeResetButton: "Reset theme settings to default" => "將主題設置重置為預設值"
// theme.placeholderColor: "Placeholder color" => "佔位元顏色"
// ed.themeSettings: "Theme Settings" => "主題設置"
// ed.themeSettingsTooltip: "Open theme settings" => "打開主題設置"
// pe.resetToDefaultCaption: "Reset" => "重置"
// pv.file: "Local files" => "本地檔"
// pv.camera: "Camera" => "照相機"
// pv.file-camera: "Local files or camera" => "本地檔或相機"
// ed.translateUsigAI: "Auto-translate All" => "自動翻譯全部"
// ed.translationDialogTitle: "Untranslated strings" => "未翻譯的字串"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "請輸入至少{0}專案"
// lg.question_resetValueName: "Reset question value" => "重置問題值"
// lg.column_resetValue: "Reset column value" => "重置列值"
// pe.markRequired: "Mark as required" => "標記為必填"
// pe.removeRequiredMark: "Remove the required mark" => "刪除所需的標記"
// p.resetValueIf: "Reset value if" => "如果出現以下情況，則重置值"
// lg.question_setValueName: "Set question value" => "設置問題值"
// lg.column_resetValueName: "Reset column value" => "重置列值"
// lg.column_setValueName: "Set column value" => "設置列值"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => "其結果將分配給目標問題的表達式。"
// survey.title: "Title" => "標題"
// page.title: "Title" => "標題"
// p.setValueIf: "Set value if" => "設置值，如果"
// theme.header: "Header" => "頁眉"
// theme.backgroundImageFitFill: "Stretch" => "伸展"
// theme.backgroundImageFitTile: "Tile" => "瓦"
// theme.headerView: "View" => "視圖"
// theme.headerViewBasic: "Basic" => "基本"
// theme.headerViewAdvanced: "Advanced" => "高深"
// theme.headerInheritWidthFrom: "Content area width" => "內容區域寬度"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "與調查相同"
// theme.headerInheritWidthFromPage: "Fit to page" => "適合頁面"
// theme.headerTextAreaWidth: "Text width" => "文本寬度"
// theme.headerBackgroundColorSwitch: "Background color" => "背景色"
// theme.headerBackgroundColorNone: "None" => "沒有"
// theme.headerBackgroundColorAccentColor: "Accent color" => "強調文字顏色"
// theme.headerBackgroundColorCustom: "Custom" => "習慣"
// theme.horizontalAlignmentLeft: "Left" => "左"
// theme.horizontalAlignmentCenter: "Center" => "中心"
// theme.horizontalAlignmentRight: "Right" => "右"
// theme.verticalAlignmentTop: "Top" => "返回頁首"
// theme.verticalAlignmentMiddle: "Middle" => "中間"
// theme.verticalAlignmentBottom: "Bottom" => "底"
// lg.question_resetValueText: "reset value for question: {0}" => "重置問題的值：{0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "分配值：{1}問題：{0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "重置列的儲存格值：{0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "將儲存格值：{1}分配給列：{0}"
// ed.surveyJsonExportButton: "Export" => "出口"
// ed.surveyJsonImportButton: "Import" => "進口"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "複製到剪貼板"
// pe.filePlaceholder: "File placeholder text" => "檔佔位元文本"
// pe.photoPlaceholder: "Photo placeholder text" => "照片占位元文本"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "檔或照片佔位元文字"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "當「源類型」為「本地檔」或相機不可用時適用"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "當「源類型」為「相機」時適用。"
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "當「源類型」為「本地檔或相機」時適用。"
// theme.background: "Background" => "背景"
// theme.appearance: "Appearance" => "外觀"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "你真的要重置主題嗎？您的所有自定義項都將丟失。"
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "是，重置主題"
// theme.headerInheritWidthFromContainer: "Fit to container" => "適合容器"
// signaturepad.showPlaceholder: "Show the placeholder" => "顯示佔位元"
// signaturepad.placeholder: "Placeholder text" => "佔位元文本"
// theme.surveyDescriptionFont: "Survey description font" => "調查描述字體"
// ed.prevFocus: "Focus previous" => "焦點 上一頁"
// ed.nextFocus: "Focus next" => "接下來的重點"
// ed.saveTheme: "Save Theme" => "保存主題"
// ed.saveThemeTooltip: "Save Theme" => "保存主題"
// lg.page_requireName: "Make page required" => "將頁面設為必填項"
// lg.panel_requireName: "Make page required" => "將頁面設為必填項"
// signaturepad.signatureWidth: "Signature area width" => "簽名區域寬度"
// signaturepad.signatureHeight: "Signature area height" => "簽名區域高度"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "自動縮放簽名區域"
// signaturepad.penMinWidth: "Minimum pen width" => "最小筆寬"
// signaturepad.penMaxWidth: "Maximum pen width" => "最大筆寬"
// theme.logoPosition: "Logo position" => "徽標位置"
// theme.headerTitlePosition: "Title position" => "職稱位置"
// theme.headerDescriptionPosition: "Description position" => "描述位置"
// ed.propertyGridNoResultsFound: "No results found" => "未找到結果"
// pv.leftRight: "Left and right" => "左和右"
// p.sourceType: "Source type" => "源類型"
// p.fitToContainer: "Fit to container" => "適合容器"
// p.setValueExpression: "Set value expression" => "設置值表達式"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "選項是從 Web 服務載入的。"
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "前往“設置”"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "載入選項的預覽"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "防止行中出現重複回應"
// theme.advancedMode: "Advanced mode" => "高級模式"
// theme.backgroundCornerRadius: "Background and corner radius" => "背景和圓角半徑"
// theme.colorsTitle: "Colors" => "顏色"
// theme.font: "Font" => "字體"
// theme.lines: "Lines" => "線"
// theme.titleFont: "Title font" => "標題字體"
// theme.descriptionFont: "Description font" => "描述字體"
// theme.shadow: "Shadow effects" => "陰影效果"
// ed.translateUsigAIFrom: "Translate from: " => "翻譯語言組合："
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "允許「拒絕應答」選項"
// pe.showDontKnowItem: "Allow the Don't Know option" => "允許“不知道”選項"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "允許「拒絕應答」選項"
// pe.showDontKnowItem: "Allow the Don't Know option" => "允許“不知道”選項"
// pv.contain: "Contain" => "包含"
// pv.cover: "Cover" => "蓋"
// pv.fill: "Fill" => "填補"

// pe.transposeData: "Transpose rows to columns" => "將行轉置為列"
// layout.panel: "Layout" => "佈局"
// layout.question: "Layout" => "佈局"
// layout.base: "Layout" => "佈局"
// panel.name: "Panel name" => "面板名稱"
// panel.title: "Panel title" => "面板標題"
// panel.description: "Panel description" => "面板說明"
// panel.visibleIf: "Make the panel visible if" => "如果出現以下情況，則使面板可見"
// panel.requiredIf: "Make the panel required if" => "如果出現以下情況，則使面板成為必需的"
// panel.questionOrder: "Question order within the panel" => "小組內的問題順序"
// panel.startWithNewLine: "Display the panel on a new line" => "在新行上顯示面板"
// panel.state: "Panel collapse state" => "面板摺疊狀態"
// panel.width: "Inline panel width" => "內嵌面板寬度"
// panel.minWidth: "Minimum panel width" => "最小面板寬度"
// panel.maxWidth: "Maximum panel width" => "最大面板寬度"
// paneldynamic.name: "Panel name" => "面板名稱"
// paneldynamic.title: "Panel title" => "面板標題"
// paneldynamic.description: "Panel description" => "面板說明"
// paneldynamic.visibleIf: "Make the panel visible if" => "如果出現以下情況，則使面板可見"
// paneldynamic.requiredIf: "Make the panel required if" => "如果出現以下情況，則使面板成為必需的"
// paneldynamic.page: "Move the panel to page" => "將面板移動到頁面"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "在新行上顯示面板"
// paneldynamic.state: "Panel collapse state" => "面板摺疊狀態"
// paneldynamic.width: "Inline panel width" => "內嵌面板寬度"
// paneldynamic.minWidth: "Minimum panel width" => "最小面板寬度"
// paneldynamic.maxWidth: "Maximum panel width" => "最大面板寬度"
// paneldynamic.templateDescription: "Panel description pattern" => "面板描述模式"
// paneldynamic.templateTitle: "Panel title pattern" => "面板標題模式"
// paneldynamic.noEntriesText: "Empty panel text" => "空面板文本"
// paneldynamic.templateTabTitle: "Tab title pattern" => "選項卡標題模式"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "如果出現以下情況，則使單個面板可見"
// paneldynamic.hideNumber: "Hide the panel number" => "隱藏面板編號"
// paneldynamic.titleLocation: "Panel title alignment" => "面板標題對齊方式"
// paneldynamic.descriptionLocation: "Panel description alignment" => "面板描述對齊方式"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "問題標題對齊方式"
// paneldynamic.templateErrorLocation: "Error message alignment" => "錯誤消息對齊"
// paneldynamic.newPanelPosition: "New panel location" => "新面板位置"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "防止在以下問題中重複回答"
// question.name: "Question name" => "問題名稱"
// question.title: "Question title" => "問題標題"
// question.description: "Question description" => "問題描述"
// question.visibleIf: "Make the question visible if" => "如果出現以下情況，請使問題可見"
// question.requiredIf: "Make the question required if" => "如果出現以下情況，則將問題設為必填項"
// question.state: "Question box collapse state" => "問題框摺疊狀態"
// question.hideNumber: "Hide the question number" => "隱藏問題編號"
// question.titleLocation: "Question title alignment" => "問題標題對齊方式"
// question.descriptionLocation: "Question description alignment" => "問題描述對齊方式"
// question.errorLocation: "Error message alignment" => "錯誤消息對齊"
// question.indent: "Increase the inner indent" => "增加內部縮進"
// question.width: "Inline question width" => "內聯問題寬度"
// question.minWidth: "Minimum question width" => "最小問題寬度"
// question.maxWidth: "Maximum question width" => "最大問題寬度"
// question.textUpdateMode: "Update input field value" => "更新輸入欄位值"
// signaturepad.allowClear: "Show the Clear button within signature area" => "在簽名區域內顯示「清除」 按鈕"
// signaturepad.penColor: "Stroke color" => "描邊顏色"
// comment.rows: "Input field height (in lines)" => "輸入欄位高度（以行為單位）"
// expression.name: "Expression name" => "表達式名稱"
// expression.title: "Expression title" => "表達式標題"
// expression.description: "Expression description" => "表達式說明"
// expression.expression: "Expression" => "表達"
// trigger.expression: "Expression" => "表達"
// calculatedvalue.expression: "Expression" => "表達"
// survey.description: "Survey description" => "調查說明"
// page.name: "Page name" => "頁面名稱"
// page.description: "Page description" => "頁面描述"
// page.visibleIf: "Make the page visible if" => "如果出現以下情況，則使頁面可見"
// page.requiredIf: "Make the page required if" => "如果出現以下情況，則使頁面為必填項"
// page.questionOrder: "Question order on the page" => "頁面上的問題順序"
// matrixdropdowncolumn.name: "Column name" => "列名稱"
// matrixdropdowncolumn.title: "Column title" => "專欄標題"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "防止重複回應"
// matrixdropdowncolumn.width: "Column width" => "列寬"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "最小列寬"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "輸入欄位高度（以行為單位）"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "如果出現以下情況，則使列可見"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "如果滿足以下條件，則使該列為必填項"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "每個選項都在單獨的列中"
// multipletextitem.name: "Name" => "名字"
// multipletextitem.title: "Title" => "標題"
// pe.rateDescriptionLocation: "Label alignment" => "標籤對齊"
// pe.cellErrorLocation: "Cell error message alignment" => "單元格錯誤消息對齊方式"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "您還沒有任何列"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "您還沒有任何行"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "尚無任何驗證規則"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "您還沒有任何自訂變數"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "您還沒有任何觸發器"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "您還沒有任何連結"
// pe.addNew@columns: "Add new column" => "添加新列"
// pe.addNew@rows: "Add new row" => "添加新行"
// pe.addNew@validators: "Add new rule" => "添加新規則"
// pe.addNew@calculatedValues: "Add new variable" => "添加新變數"
// pe.addNew@triggers: "Add new trigger" => "添加新觸發器"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "添加新 URL"
// choicesbyurl.url: "Web service's URL" => "Web 服務的 URL"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "在進度條中顯示頁面標題"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "在進度條中顯示頁碼"
// itemvalue.visibleIf: "Make the option visible if" => "如果出現以下情況，則使該選項可見"
// itemvalue.enableIf: "Make the option selectable if" => "如果出現以下情況，則使該選項可選"
// panel.layout: "Panel Layout" => "面板佈局"
// tabs.questionSettings: "Question Settings" => "問題設置"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "例如：https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "例如：categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "例如：a）"
// pe.width_placeholder: "Ex.: 6in" => "例：6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "例如：600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "例：50%"
// pv.selected: "Selected" => "選擇"
// pv.unselected: "Unselected" => "未選中"
// pv.center: "Center" => "中心"
// pv.middle: "Middle" => "中間"
// pv.next: "Next" => "下一個"
// pv.last: "Last" => "最後"
// clearIfInvisible.none: "Never" => "從不"
// questionsOnPageMode.standard: "Original structure" => "原始結構"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "在一個頁面上顯示所有問題"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "每頁顯示一個問題"
// pv.auto: "Auto" => "自動"
// panelsState.firstExpanded: "First expanded" => "首次擴展"
// rateColorMode.scale: "Scale" => "規模"
// scaleColorMode.monochrome: "Monochrome" => "單色"
// scaleColorMode.colored: "Colored" => "彩色"
// state.default: "Locked" => "鎖"
// showQuestionNumbers.default: "Auto-numbering" => "自動編號"
// showQuestionNumbers.on: "Auto-numbering" => "自動編號"
// showQuestionNumbers.onPage: "Reset on each page" => "在每個頁面上重置"
// showQuestionNumbers.onpanel: "Reset on each panel" => "在每個面板上重置"
// showQuestionNumbers.onPanel: "Reset on each panel" => "在每個面板上重置"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "在整個調查中繼續"
// showQuestionNumbers.off: "No numbering" => "無編號"
// descriptionLocation.underTitle: "Under the question title" => "在問題標題下"
// descriptionLocation.underInput: "Under the input field" => "在輸入欄位下"
// selectToRankAreasLayout.horizontal: "Next to choices" => "在選項旁邊"
// selectToRankAreasLayout.vertical: "Above choices" => "以上選擇"
// displayStyle.decimal: "Decimal" => "十進位"
// displayStyle.currency: "Currency" => "貨幣"
// displayStyle.percent: "Percentage" => "百分比"
// displayStyle.date: "Date" => "日期"
// totalDisplayStyle.decimal: "Decimal" => "十進位"
// totalDisplayStyle.currency: "Currency" => "貨幣"
// totalDisplayStyle.percent: "Percentage" => "百分比"
// totalDisplayStyle.date: "Date" => "日期"
// rowOrder.initial: "Original" => "源語言"
// questionOrder.initial: "Original" => "源語言"
// showProgressBar.aboveheader: "Above the header" => "標題上方"
// showProgressBar.belowheader: "Below the header" => "在標題下方"
// pv.sum: "Sum" => "和"
// pv.count: "Count" => "計數"
// pv.min: "Min" => "最小值"
// pv.max: "Max" => "麥克斯"
// pv.avg: "Avg" => "平均"
// searchMode.contains: "Contains" => "包含"
// searchMode.startsWith: "Starts with" => "開頭為"
// panel.name: "A panel ID that is not visible to respondents." => "受訪者不可見的面板ID。"
// panel.description: "Type a panel subtitle." => "鍵入面板字幕。"
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "使用魔棒圖示設置確定面板可見性的條件規則。"
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "使用魔棒圖示設置禁用面板唯讀模式的條件規則。"
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。"
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "適用於此面板中的所有問題。如果要覆蓋此設置，請為單個問題定義標題對齊規則。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。"
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "設置與面板中所有問題相關的錯誤消息的位置。“繼承”選項應用頁面級別（如果已設置）或調查級別設置。"
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "保持問題的原始順序或隨機化問題。“繼承”選項應用頁面級別（如果已設置）或調查級別設置。"
// panel.page: "Repositions the panel to the end of a selected page." => "將面板重新置放到選頁面的末尾。"
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "在面板內容和面板框的左邊框之間添加空格或邊距。"
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "取消選擇以將面板與上一個問題或面板顯示在一行中。如果面板是表單中的第一個元素，則該設置不適用。"
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "從中選擇：「展開」 - 面板完整顯示，可以摺疊;“已摺疊” - 面板僅顯示標題和描述，可以展開;“已鎖定” - 面板完整顯示，無法摺疊。"
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "設置面板的寬度，使其與同一行中的其他測量圖元成比例。接受 CSS 值（px、%、in、pt 等）。"
// paneldynamic.name: "A panel ID that is not visible to respondents." => "受訪者不可見的面板ID。"
// paneldynamic.description: "Type a panel subtitle." => "鍵入面板字幕。"
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "使用魔棒圖示設置確定面板可見性的條件規則。"
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "使用魔棒圖示設置禁用面板唯讀模式的條件規則。"
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。"
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "適用於此面板中的所有問題。如果要覆蓋此設置，請為單個問題定義標題對齊規則。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。"
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。"
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "設置與面板中所有問題相關的錯誤消息的位置。“繼承”選項應用頁面級別（如果已設置）或調查級別設置。"
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "將面板重新置放到選頁面的末尾。"
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "在面板內容和面板框的左邊框之間添加空格或邊距。"
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "取消選擇以將面板與上一個問題或面板顯示在一行中。如果面板是表單中的第一個元素，則該設置不適用。"
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "從中選擇：「展開」 - 面板完整顯示，可以摺疊;“已摺疊” - 面板僅顯示標題和描述，可以展開;“已鎖定” - 面板完整顯示，無法摺疊。"
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "設置面板的寬度，使其與同一行中的其他測量圖元成比例。接受 CSS 值（px、%、in、pt 等）。"
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "鍵入動態面板標題的範本。使用 {panelIndex} 作為面板的常規位置，使用 {visiblePanelIndex} 作為其在可見面板中的順序。將這些佔位元插入到圖案中以添加自動編號。"
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "鍵入選項卡標題的範本。使用 {panelIndex} 表示面板的大致位置，使用 {visiblePanelIndex} 表示其在可見面板中的順序。將這些佔位元插入到圖案中以添加自動編號。"
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "此設置允許您控制動態面板中各個面板的可見性。使用“{panel}”佔位符在運算式中引用當前面板。"
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "此面板中的所有問題都會自動繼承此設置。如果要覆蓋此設置，請為單個問題定義標題對齊規則。“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“頂部”）。"
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "“繼承”選項應用頁面級別（如果已設置）或調查級別設置（預設為“在面板標題下”）。"
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "定義新添加的面板的位置。默認情況下，新面板將添加到末尾。選擇「下一步」以在當前面板之後插入新面板。"
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "複製上一個面板中的答案，並將其分配給下一個添加的動態面板。"
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "引用問題名稱以要求使用者在每個面板中為此問題提供唯一的答案。"
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "此設定允許您根據表示式分配預設答案值。表達式可以包括基本計算 - '{q1_id} + {q2_id}'、布爾表達式，例如 '{age} > 60'，以及函數：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。此表達式確定的值用作初始預設值，可由回應者的手動輸入覆蓋。"
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "使用魔杖圖示設置條件規則，該規則確定何時將受訪者的輸入重置為基於“預設值表達式”或“設置值表達式”的值，或重置為“預設答案”值（如果設置了其中任何一個）。"
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "使用魔杖圖示設置條件規則，該規則確定何時運行「設置值表達式」 ，並將結果值動態分配為回應。"
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "指定一個表達式，該運算式定義在滿足「如果設置值」規則中的條件時要設置的值。表達式可以包括基本計算 - '{q1_id} + {q2_id}'、布爾表達式，例如 '{age} > 60'，以及函數：'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）'等。由此表達式確定的值可以被受訪者的手動輸入覆蓋。"
// question.name: "A question ID that is not visible to respondents." => "受訪者不可見的問題ID。"
// question.description: "Type a question subtitle." => "鍵入問題副標題。"
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "使用魔杖圖示設置確定問題可見性的條件規則。"
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "使用魔杖圖示設置條件規則，以禁用問題的唯讀模式。"
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "使用魔杖圖標設置條件規則，除非問題得到答案，否則阻止調查推進或提交。"
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "取消選擇以將問題與上一個問題或面板顯示在一行中。如果問題是表單中的第一個元素，則該設置不適用。"
// question.page: "Repositions the question to the end of a selected page." => "將問題重新置放到選頁面的末尾。"
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "從以下選項中選擇：「展開」 - 問題框完整顯示，可以摺疊;“已摺疊” - 問題框僅顯示標題和描述，可以展開;“已鎖定” - 問題框完整顯示，無法摺疊。"
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "覆蓋在面板、頁面或調查級別上定義的標題對齊規則。“繼承”選項將應用任何更高級別的設置（如果已設置）或調查級別的設置（預設為“頂部”）。"
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "“繼承”選項應用調查級別設置（預設為“在問題標題下”）。"
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。“繼承”選項將應用調查級別設置（預設為“頂部”）。"
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "在問題內容和問題框的左邊框之間添加空格或邊距。"
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "設置問題的寬度，使其與同一行中的其他調查元素成比例。接受 CSS 值（px、%、in、pt 等）。"
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "使用魔杖圖示為問題設置驗證規則。"
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "從中選擇：「失焦時」 - 當輸入字段失去焦點時，該值會更新;“鍵入時” - 當使用者鍵入時，該值會即時更新。“繼承”選項將應用調查級別設置（預設為“失去焦點時”）。"
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "您可以使用任何 Web 服務作為多項選擇題的數據來源。要填充選項值，請輸入提供數據的服務的URL。"
// question.searchMode: "A comparison operation used to filter the drop-down list." => "用於篩選下拉清單的比較操作。"
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "設置顯示的簽名區域和生成的圖像的寬度。"
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "設置顯示的簽名區域和生成的圖像的高度。"
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "選擇是否希望簽名區域填充問題框中的所有可用空間，同時保持預設的 3：2 縱橫比。設置自定義寬度和高度值后，該設置將保留這些尺寸的縱橫比。"
// file.imageHeight: "Adjusts the height of the image in the survey results." => "調整調查結果中圖像的高度。"
// file.imageWidth: "Adjusts the width of the image in the survey results." => "調整調查結果中圖像的寬度。"
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "覆蓋最小和最大高度值。"
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "覆蓋最小和最大寬度值。"
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "“值”用作條件規則中使用的專案ID;向受訪者顯示“文本”。"
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "此設置僅調整輸入欄位的大小，不會影響問題框的寬度。要限制接受的輸入長度，請轉到<b>驗證→最大字元限制</b>。"
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "設置輸入欄位中顯示的行數。如果輸入佔用更多行，則會出現滾動條。"
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "選擇：「可編輯」 - 使受訪者能夠填寫您的調查;“只讀” - 禁用表單編輯。"
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "受訪者不可見的列ID。"
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "為列啟用后，受訪者需要為此列中的每個問題提供唯一的回答。"
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "設置輸入欄位中顯示的行數。如果輸入佔用更多行，則會出現滾動條。"
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "使用魔杖圖示設置確定列可見性的條件規則。"
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "使用魔杖圖示設置禁用列唯讀模式的條件規則。"
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。"
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "選取後，為每個選項創建一個單獨的列。"
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "從以下選項中選擇： 「靜態」 - 設置固定寬度;“回應式” - 使調查佔據螢幕的整個寬度;“自動” - 根據所使用的問題類型應用兩者中的任何一個。"
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "粘貼圖像連結（無大小限制）或按下資料夾圖示以瀏覽電腦中的檔（最大 64KB）。"
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "以 CSS 單位（px、%、in、pt 等）設置徽標寬度。"
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "以 CSS 單位（px、%、in、pt 等）設置徽標高度。"
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "從以下選項中選擇：「無」 - 影像保持其原始大小;“包含” - 調整圖像大小以適應其縱橫比;“封面” - 圖像填充整個框，同時保持其縱橫比;“填充” - 拉伸圖像以填充框，而不保持其縱橫比。"
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "設置導航按鈕在頁面上的可見性和位置。"
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "設置進度條的可見性和位置。“自動”值顯示測量標題上方或下方的進度條。"
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "啟用僅包含所有問題或已回答問題的預覽頁面。"
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "適用於調查中的所有問題。此設置可以被較低級別的標題對齊規則覆蓋：面板、頁面或問題。較低級別的設置將覆蓋較高級別的設置。"
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "一個符號或一系列符號，表示需要答案。"
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "輸入要開始編號的數位或字母。"
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。"
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "選擇是否希望每個頁面上的第一個輸入字段準備好進行文本輸入。"
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "保持問題的原始順序或隨機化問題。此設置的效果僅在「預覽」選項卡中可見。"
// pehelp.maxTextLength: "For text entry questions only." => "僅適用於文本輸入問題。"
// pehelp.maxCommentLength: "For question comments only." => "僅供問題評論。"
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "選擇是否希望問題註釋和長文本問題根據輸入的文字長度自動增加高度。"
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "僅適用於問題評論和長文本問題。"
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "自訂變數用作表單計算中使用的中間變數或輔助變數。他們將受訪者的輸入作為源值。每個自定義變數都有一個唯一的名稱和它所基於的表達式。"
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "選擇是否希望將表達式的計算值與調查結果一起保存。"
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "觸發器是基於表達式的事件或條件。一旦表達式被計算為「true」，觸發器就會觸發一個操作。這樣的操作可以選擇性地影響它的目標問題。"
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "選擇是否清除條件邏輯隱藏的問題的值以及何時清除。"
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "從中選擇：「失焦時」 - 當輸入字段失去焦點時，該值會更新;“鍵入時” - 當使用者鍵入時，該值會即時更新。"
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "左邊的值用作條件規則中使用的列ID，右邊的值顯示給受訪者。"
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "左邊的值用作條件規則中使用的行ID，右邊的值顯示給受訪者。"
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "設置與輸入無效的儲存格相關的錯誤訊息的位置。“繼承”選項應用“錯誤消息對齊”屬性中的設置。"
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "啟用「防止重複響應」屬性後，嘗試提交重複條目的受訪者將收到以下錯誤消息。"
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "允許您根據表達式計算總值。表達式可以包括基本計算 （'{q1_id} + {q2_id}'）、布爾表達式 （'{age} > 60'） 和函數 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。"
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "觸發提示，要求確認刪除行。"
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "複製最後一行的答案，並將其分配給下一個添加的動態行。"
// pehelp.description: "Type a subtitle." => "鍵入副標題。"
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "選擇一種語言以開始創建調查。要添加翻譯，請切換到新語言，然後在此處或“翻譯”選項卡中翻譯原始文本。"
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "設置詳細資訊部分相對於行的位置。從中選擇：「無」 - 不添加擴展;“Under the row” - 矩陣的每一行下都放置一個行擴展;“在行下，僅顯示一行擴展” - 僅在單行下顯示擴展，其餘行展開將摺疊。"
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "從以下選項中選擇：「無」 - 影像保持其原始大小;“包含” - 調整圖像大小以適應其縱橫比;“封面” - 圖像填充整個框，同時保持其縱橫比;“填充” - 拉伸圖像以填充框，而不保持其縱橫比。"
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "在輸入數據時逐漸增加輸入欄位的高度。覆蓋「輸入欄位高度（以行為單位）」設置。"
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "調整大小的手柄（或手柄）出現在角落，可以拖動以更改輸入字段的大小。"
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "以秒為單位的時間間隔，在此時間間隔之後，調查將自動前進到“感謝”頁面。"
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "以秒為單位的時間間隔，在此時間間隔之後，調查將自動前進到下一頁。"
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "以秒為單位的時間間隔，在此時間間隔之後，調查將自動前進到下一頁。"
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "使用魔杖圖示設置確定頁面可見性的條件規則。"
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "使用魔杖圖示設置禁用頁面只讀模式的條件規則。"
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "使用魔杖圖示設置條件規則，除非至少有一個嵌套問題有答案，否則該規則將阻止調查提交。"
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "適用於本頁中的所有問題。如果要覆蓋此設置，請為單個問題或面板定義標題對齊規則。“繼承”選項將應用調查級別設置（預設為“頂部”）。"
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "設置與輸入無效的問題相關的錯誤消息的位置。選擇：「頂部」 - 錯誤文本放置在問題框的頂部;“底部” - 錯誤文本放置在問題框的底部。“繼承”選項將應用調查級別設置（預設為“頂部”）。"
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "保持問題的原始順序或隨機化問題。繼承「選項應用調查級別設置（預設為」原始」。）。此設置的效果僅在「預覽」選項卡中可見。"
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "設置導航按鈕在頁面上的可見性。“繼承”選項應用調查級別設置，預設為“可見”。"
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "從以下選項中選擇：「鎖定」 - 使用者無法展開或摺疊面板;“全部摺疊” - 所有面板都以摺疊狀態啟動;“全部展開” - 所有面板都以展開狀態啟動;“首先展開” - 最初只有第一個面板被展開。"
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "在物件陣列中輸入共用屬性名稱，該數位包含要在選項清單中顯示的圖像或視頻檔URL。"
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "左邊的值用作條件規則中使用的專案ID，右邊的值顯示給受訪者。"
// pehelp.title: "Type a user-friendly title to display." => "鍵入要顯示的使用者友好標題。"
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "確保使用者在上傳檔之前不會完成調查。"
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "接受 CSS 值（px、%、in、pt 等）。"
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "在單選題和多選題類型中，每個選項都有一個 ID 和顯示值。選中此設置后，將在 HTML 問題以及調查元素的動態標題和描述中顯示顯示值，而不是 ID 值。"
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "選擇是否清除條件邏輯隱藏的問題值以及何時清除。“繼承”選項應用調查級別設置（預設為“完成調查後”）。"
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "從以下選項中選擇：「全部」 - 複製所選問題中的所有選項;“Selected” - 僅動態複製選定的選項選項;“未選擇” - 僅動態複製未選擇的選項。默認情況下，如果在源問題中啟用了“無”和“其他”選項，則會複製該選項。"
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "選取後，使用者可以在單獨的註釋框中包含其他輸入。"
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "在新行上顯示每個特殊選項（“無”、“其他”、“全選”），即使使用多列佈局也是如此。"
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "指定服務數據集中目標物件陣列所在的位置。如果 URL 已指向陣列，則留空。"
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "在物件陣列中輸入一個統一的屬性名稱，該陣列包含要在選項清單中顯示的值。"
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "選擇此選項可允許服務傳回空回應或陣列。"
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "使用魔杖圖示設置條件規則，以確定所有選項的可見性。"
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "左邊的值用作條件規則中使用的專案ID，右邊的值顯示給受訪者。"
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "“自動”根據可用寬度在“按鈕”和“下拉”模式之間進行選擇。當寬度不足以顯示按鈕時，問題將顯示一個下拉清單。"
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "允許您連接以不同格式生成結果的問題。當使用聯接標識碼將此類問題連結在一起時，此共用屬性將存儲選定的問題值。"
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "選擇是否要更新下拉功能表內容以匹配使用者在輸入欄位中鍵入的搜索查詢。"
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "當受訪者給出肯定答案時保存在調查結果中的值。"
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "當受訪者給出否定答案時保存在調查結果中的值。"
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "不建議禁用此選項，因為它會覆蓋預覽圖像，並使用戶難以了解檔是否已上傳。"
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "觸發提示，要求確認文件刪除。"
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "啟用此選項可僅對選定的選項進行排名。使用者將從選項清單中拖動所選專案，以在排名區域內對它們進行排序。"
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "輸入將在輸入期間向受訪者建議的選項清單。"
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "該設置僅調整輸入欄位的大小，不會影響問題框的寬度。"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "為所有項目標籤設定一致的寬度（以像素為單位）"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "“自動”選項會根據提供的源URL自動確定合適的顯示模式 - 圖像、視頻或YouTube。"
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "當圖像無法在使用者設備上顯示時，出於輔助功能的目的，可作為替代。"
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "定義當評級圖示類型設置為「笑臉」時所選表情符號的顏色。選擇：「預設」 - 選取表情符號以預設調查顏色顯示;“比例” - 所選的表情符號繼承了評分量表的顏色。"
// expression.name: "An expression ID that is not visible to respondents." => "受訪者不可見的表達式ID。"
// expression.description: "Type an expression subtitle." => "鍵入表達式副標題。"
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "表達式可以包括基本計算 （'{q1_id} + {q2_id}'）、條件 （'{age} > 60'） 和函數 （'iif（）'、'today（）'、'age（）'、'min（）'、'max（）'、'avg（）' 等）。"
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "選擇此選項可將「其他」選項值作為單獨的屬性存儲在調查結果中。"
// p.swapOrder: "Swap the order of Yes and No" => "交換“是”和“否”的順序"
// p.itemTitleWidth: "Item label width (in px)" => "項目標籤寬度（以 px 為單位）"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "顯示是否選擇了所有選項的文字"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "排名區域的佔位元文本"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "自動完成調查"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "選擇是否希望在受訪者回答所有問題後自動完成調查。"
// masksettings.saveMaskedValue: "Save masked value in survey results" => "在調查結果中保存掩碼值"
// patternmask.pattern: "Value pattern" => "價值模式"
// datetimemask.min: "Minimum value" => "最小值"
// datetimemask.max: "Maximum value" => "最大值"
// numericmask.allowNegativeValues: "Allow negative values" => "允許負值"
// numericmask.thousandsSeparator: "Thousands separator" => "千分隔符"
// numericmask.decimalSeparator: "Decimal separator" => "小數點分隔符"
// numericmask.precision: "Value precision" => "值精度"
// numericmask.min: "Minimum value" => "最小值"
// numericmask.max: "Maximum value" => "最大值"
// currencymask.prefix: "Currency prefix" => "貨幣前綴"
// currencymask.suffix: "Currency suffix" => "貨幣後綴"
// pe.maskType: "Input mask type" => "輸入掩碼類型"
// maskTypes.patternmask: "Pattern" => "模式"
// maskTypes.numericmask: "Numeric" => "數值的"
// maskTypes.datetimemask: "Date and Time" => "日期和時間"
// maskTypes.currencymask: "Currency" => "貨幣"
// tabs.mask: "Input Mask Settings" => "輸入掩碼設置"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "例如：+1（999）-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "例：mm/dd/yyyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "例：$"
// pe.currencysuffix_placeholder: "Ex.: USD" => "例如：美元"
// pv.textWrapEnabled: "Wrap choices" => "包裝選擇"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "選項選項中的長文本將自動生成換行符以適合下拉功能表。如果要剪裁文字，請取消選擇。"
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "選擇是否要在調查結果中存儲帶有應用掩碼的問題值。"
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "該模式可以包含字串文字和以下佔位元： '9' - 表示數位;“a” - 表示大寫或小寫字母;'#' - 表示數位或大寫或小寫字母。使用反斜杠“\\”轉義字元。"
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "該模式可以包含分隔符和以下佔位元：“m” - 表示月份數;'mm' - 表示月份數位，前導零表示個位數;'d' - 表示月份中的某一天;'dd' - 表示月份中的某一天，前導零表示個位數值;'yy' - 一年的最後兩位數位;'yyyy' - 表示四位數的年份。"
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "用於將顯示數位的小數部分與整數部分分開的符號。"
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "用於將大數的數位分成三組的符號。"
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "限制顯示數位的小數點後要保留的位數。"
// currencymask.prefix: "One or several symbols to be displayed before the value." => "要在值之前顯示的一個或多個符號。"
// currencymask.suffix: "One or several symbols to be displayed after the value." => "要在值后顯示的一個或多個符號。"
// ed.translationSource: "Source: " => "源："
// ed.translationTarget: "Target: " => "目標："
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "頁面為空。從工具箱中拖動元素或按下下面的按鈕。"
// maskTypes.none: "None" => "沒有"
// itemvalue@rows.visibleIf: "Make the row visible if" => "如果出現以下情況，則使行可見"
// itemvalue@rows.enableIf: "Make the row editable if" => "如果出現以下情況，則使行可編輯"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "唯讀或預覽模式下的佔位元文本"
// pe.textWrapEnabled: "Wrap choices" => "換行選項"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "“自動”選項會根據提供的源URL自動確定適合的顯示模式 - 圖像、視頻或YouTube。"
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "在「圖像」和「視頻」之間進行選擇以設置媒體選擇器的內容模式。如果選擇「圖像」，請確保提供的所有選項都是以下格式的圖像檔：JPEG、GIF、PNG、APNG、SVG、BMP、ICO。同樣，如果選擇「視頻」，請確保所有選項都是指向以下格式的視頻檔的直接連結：MP4、MOV、WMV、FLV、AVI、MKV。請注意，視頻選項不支援 YouTube 連結。"
// ed.selectFile: "Select a file" => "選擇檔案"
// ed.removeFile: "Remove the file" => "刪除檔案"
// pe.searchMode: "Search Mode" => "搜索模式"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "按兩下下面的「添加問題」 按鈕開始創建表單。"
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "按兩下下面的「添加問題」 按鈕，向頁面添加新元素。"
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "按下下面的「添加問題」 按鈕，將新元素添加到面板中。"
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "點擊下面的按鈕，選擇要上傳的圖片"
// coloralpha.opacity: "Opacity" => "不透明度"
// font.family: "Font family" => "字體家族"
// font.color: "Color" => "顏色"
// font.placeholderColor: "Placeholder color" => "佔位元顏色"
// font.size: "Size" => "大小"
// theme.themeName: "Theme" => "主題"
// theme.isPanelless: "Question appearance" => "問題外觀"
// theme.editorPanel: "Background and corner radius" => "背景和拐角半徑"
// theme.questionPanel: "Background and corner radius" => "背景和拐角半徑"
// theme.primaryColor: "Accent color" => "強調色"
// theme.panelBackgroundTransparency: "Panel background opacity" => "面板背景不透明度"
// theme.questionBackgroundTransparency: "Question background opacity" => "問題背景不透明度"
// theme.fontSize: "Font size" => "字體大小"
// theme.scale: "Scale" => "規模"
// theme.cornerRadius: "Corner radius" => "拐角半徑"
// theme.pageTitle: "Title font" => "標題字體"
// theme.pageDescription: "Description font" => "描述字體"
// theme.questionTitle: "Title font" => "標題字體"
// theme.questionDescription: "Description font" => "描述字體"
// theme.editorFont: "Font" => "字體"
// theme.backgroundOpacity: "Opacity" => "不透明度"
// theme.--sjs-font-family: "Font family" => "字體家族"
// theme.--sjs-general-backcolor-dim: "Background color" => "背景顏色"
// theme.--sjs-primary-backcolor: "Accent background" => "重音背景"
// theme.--sjs-primary-forecolor: "Accent foreground" => "重音前景"
// theme.--sjs-shadow-small: "Shadow effects" => "陰影效果"
// theme.--sjs-shadow-inner: "Shadow effects" => "陰影效果"
// theme.--sjs-border-default: "Colors" => "顏色"
// header@header.headerView: "View" => "視圖"
// header@header.logoPosition: "Logo position" => "徽標位置"
// header@header.surveyTitle: "Survey title font" => "調查標題字體"
// header@header.surveyDescription: "Survey description font" => "調查描述字體"
// header@header.headerTitle: "Survey title font" => "調查標題字體"
// header@header.headerDescription: "Survey description font" => "調查描述字體"
// header@header.inheritWidthFrom: "Content area width" => "內容區寬度"
// header@header.textAreaWidth: "Text width" => "文本寬度"
// header@header.backgroundColorSwitch: "Background color" => "背景顏色"
// header@header.backgroundImage: "Background image" => "背景圖片"
// header@header.backgroundImageOpacity: "Opacity" => "不透明度"
// header@header.overlapEnabled: "Overlap" => "重疊"
// header@header.logoPositionX: "Logo position" => "徽標位置"
// header@header.titlePositionX: "Title position" => "標題位置"
// header@header.descriptionPositionX: "Description position" => "描述位置"
// weight.400: "Regular" => "定期"
// weight.600: "Heavy" => "重"
// weight.700: "Semi-bold" => "半粗體"
// weight.800: "Bold" => "大膽"
// backgroundImageFit.auto: "Auto" => "自動"
// backgroundImageFit.cover: "Cover" => "蓋"
// backgroundImageFit.contain: "Contain" => "包含"
// backgroundImageFit.fill: "Stretch" => "伸展"
// backgroundImageFit.tile: "Tile" => "瓦"
// backgroundImageAttachment.fixed: "Fixed" => "固定"
// backgroundImageAttachment.scroll: "Scroll" => "滾動"
// headerView.basic: "Basic" => "基本"
// headerView.advanced: "Advanced" => "高深"
// inheritWidthFrom.survey: "Same as survey" => "與調查相同"
// inheritWidthFrom.container: "Fit to container" => "適合容器"
// backgroundColorSwitch.none: "None" => "沒有"
// backgroundColorSwitch.accentColor: "Accent color" => "強調色"
// backgroundColorSwitch.custom: "Custom" => "習慣"
// colorPalette.light: "Light" => "光"
// colorPalette.dark: "Dark" => "黑暗"
// isPanelless.false: "Default" => "違約"
// isPanelless.true: "Without Panels" => "不帶面板"
// theme.cornerRadius: "Corner radius" => "拐角半徑"
// theme.fontFamily: "Font family" => "字體家族"
// theme.fontWeightRegular: "Regular" => "定期"
// theme.fontWeightHeavy: "Heavy" => "重"
// theme.fontWeightSemiBold: "Semi-bold" => "半粗體"
// theme.fontWeightBold: "Bold" => "大膽"
// theme.color: "Color" => "顏色"
// theme.placeholderColor: "Placeholder color" => "佔位元顏色"
// theme.size: "Size" => "大小"
// theme.opacity: "Opacity" => "不透明度"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "鍵入以搜尋..."
// ed.toolboxNoResultsFound: "No results found" => "未找到結果"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "選項卡標題佔位元"
// theme.--sjs-special-red: "Error messages" => "錯誤消息"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "選項卡標題的回退文本，當選項卡標題模式未生成有意義的值時應用。"
// theme.fontColor: "Font color" => "字體顏色"
// theme.backgroundColor: "Background color" => "背景顏色"
// pe.questionTitleWidth: "Question title width" => "問題標題寬度"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "選擇檔案或貼上檔案連結..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "例如：200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "當問題標題與問題框左側對齊時，為問題標題設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。"
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "當問題標題與問題框左側對齊時，為問題標題設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。"
// pe.commentAreaRows: "Comment area height (in lines)" => "評論區高度（以行為單位）"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "設置問題註釋的文字區域中顯示的行數。在輸入佔用更多行時，將出現滾動條。"
// pe.enabled: "Enabled" => "啟用"
// pe.disabled: "Disabled" => "禁用"
// pe.inherit: "Inherit" => "繼承"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "驗證失去焦點時的空欄位"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "例如：30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "例如：200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "啟用此選項可在使用者將焦點放在空輸入欄位上，然後離開該欄位而不進行任何更改時觸發驗證。"
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "在多列佈局中排列選項。當設置為 0 時，選項將顯示在一行中。"
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "此設置僅適用於面板之外的問題。"
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "設置一種補充顏色，用於突出顯示關鍵調查元素。"
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "調整面板和問題框相對於調查背景的透明度。"
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "調整輸入元素相對於調查背景的透明度。"
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "設置所有矩形元素的圓角半徑。如果要為輸入元素或面板和問題框設置單獨的角半徑值，請啟用高級模式。"
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "設置調查的主要背景顏色。"
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "“與容器相同”選項會自動調整標題內容區域的寬度，以適應放置調查的 HTML 元素。"
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "包含調查標題和描述的標題區域的寬度，以像素為單位。"
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "接受值 。"
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "接受值 px。"
// p.effectiveColSpan: "Column span" => "柱跨度"
// progressBarInheritWidthFrom.survey: "Same as survey" => "與調查相同"
// progressBarInheritWidthFrom.container: "Same as container" => "與容器相同"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "儘可能顯示已上傳檔的縮圖預覽。取消選擇是否要顯示檔圖示。"
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "“與容器相同”選項會自動調整進度條區域的寬度，以適應放置調查的 HTML 元素。"
// p.progressBarInheritWidthFrom: "Progress bar area width" => "進度條區域寬度"
// maskType.none: "None" => "沒有"
// maskType.pattern: "Pattern" => "模式"
// maskType.numeric: "Numeric" => "數值的"
// maskType.datetime: "Date and Time" => "日期和時間"
// maskType.currency: "Currency" => "貨幣"

// inputTextAlignment.auto: "Auto" => "自動"
// inputTextAlignment.left: "Left" => "左"
// inputTextAlignment.right: "Right" => "右"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "選擇如何在欄位中對齊輸入值。默認設置 「Auto」 如果應用了貨幣或數位掩碼，則將輸入值向右對齊，如果未應用，則向左對齊。"
// p.inputTextAlignment: "Input value alignment" => "輸入值對齊"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "顯示進度條"
// paneldynamic.showProgressBar: "Show the progress bar" => "顯示進度條"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "進度條對齊"
// pv.carousel: "Carousel" => "旋轉 木馬"
// progressBarLocation.top: "Top" => "返回頁首"
// progressBarLocation.bottom: "Bottom" => "底"
// progressBarLocation.topBottom: "Top and bottom" => "頂部和底部"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "在多列佈局中排列選項。設置為 0 時，選項將以單行顯示。當設置為 -1 時，實際值繼承自父矩陣的 “Nested column count” 屬性。"
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "不支援YouTube連結。"
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "開始配置表單"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "按兩下任何類別圖示以瀏覽調查設置。將測量元素添加到設計圖面后，其他設置將變為可用。"
// pe.caseInsensitive: "Case insensitive" => "不區分大小寫"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "如果必須將正則表示式中的大寫字母和小寫字母視為等效字母，請選擇此項。"

// ed.surveyPlaceholderTitle: "Your form is empty" => "您的表單為空"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "您的表單為空"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "從工具箱中拖動元素或按下下面的按鈕。"
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "從工具箱中拖動元素或按下下面的按鈕。"
// ed.previewPlaceholderTitle: "No preview" => "無預覽"
// ed.previewPlaceholderTitleMobile: "No preview" => "無預覽"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "調查不包含任何可見元素。"
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "調查不包含任何可見元素。"
// ed.translationsPlaceholderTitle: "No strings to translate" => "無需翻譯字串"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "無需翻譯字串"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "將元素添加到表單或更改工具列中的字串篩選器。"
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "將元素添加到表單或更改工具列中的字串篩選器。"
// lg.logicPlaceholderTitle: "No logical rules" => "無邏輯規則"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "無邏輯規則"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "創建規則以自定義調查流程。"
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "創建規則以自定義調查流程。"
// pe.showTimer: "Use a timer" => "使用計時器"
// theme.advancedMode: "Advanced mode" => "高級模式"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "設置計時器在頁面上的位置。"
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "設置為 0 時，將自動計算高度以適應標題的內容。"
// p.mobileHeight: "Height on smartphones" => "智能手機上的身高"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "啟用后，調查的頂部將覆蓋頁眉的底部。"
// ed.creatorSettingTitle: "Creator Settings" => "Creator 設置"
// tabs.accentColors: "Accent colors" => "強調色"
// tabs.scaling: "Scaling" => "縮放"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "為嵌套在此面板中的問題分配編號。"
// creatortheme.--sjs-special-background: "Surface background" => "表面背景"
// creatortheme.--sjs-primary-background-500: "Primary" => "主要"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "二 次"
// creatortheme.surfaceScale: "Surface" => "表面"
// creatortheme.userInterfaceBaseUnit: "User interface" => "用戶介面"
// creatortheme.fontScale: "Font" => "字體"
// names.sc2020: "Survey Creator 2020" => "調查建立者 2020"
// names.default-light: "Light" => "光"
// names.default-dark: "Dark" => "黑暗"
// names.default-contrast: "Contrast" => "反差"
// panel.showNumber: "Number this panel" => "為此面板編號"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "選擇是否希望調查在受訪者回答了當前頁面上的所有問題後自動前進到下一頁。如果頁面上的最後一個問題是開放式的或允許多個答案，則此功能將不適用。"
// autocomplete.name: "Full Name" => "全名"
// autocomplete.honorific-prefix: "Prefix" => "前綴"
// autocomplete.given-name: "First Name" => "名字"
// autocomplete.additional-name: "Middle Name" => "中間名"
// autocomplete.family-name: "Last Name" => "姓"
// autocomplete.honorific-suffix: "Suffix" => "後綴"
// autocomplete.nickname: "Nickname" => "昵稱"
// autocomplete.organization-title: "Job Title" => "職稱"
// autocomplete.username: "User Name" => "使用者名"
// autocomplete.new-password: "New Password" => "新密碼"
// autocomplete.current-password: "Current Password" => "當前密碼"
// autocomplete.organization: "Organization Name" => "組織名稱"
// autocomplete.street-address: "Full Street Address" => "全街位址"
// autocomplete.address-line1: "Address Line 1" => "位址行 1"
// autocomplete.address-line2: "Address Line 2" => "位址行 2"
// autocomplete.address-line3: "Address Line 3" => "位址行 3"
// autocomplete.address-level4: "Level 4 Address" => "4 級位址"
// autocomplete.address-level3: "Level 3 Address" => "3 級位址"
// autocomplete.address-level2: "Level 2 Address" => "2 級位址"
// autocomplete.address-level1: "Level 1 Address" => "1 級位址"
// autocomplete.country: "Country Code" => "國家代碼"
// autocomplete.country-name: "Country Name" => "國家/地區名稱"
// autocomplete.postal-code: "Postal Code" => "郵遞區號"
// autocomplete.cc-name: "Cardholder Name" => "持卡人姓名"
// autocomplete.cc-given-name: "Cardholder First Name" => "持卡人名字"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "持卡人中間名"
// autocomplete.cc-family-name: "Cardholder Last Name" => "持卡人姓氏"
// autocomplete.cc-number: "Credit Card Number" => "信用卡號"
// autocomplete.cc-exp: "Expiration Date" => "有效期"
// autocomplete.cc-exp-month: "Expiration Month" => "到期月份"
// autocomplete.cc-exp-year: "Expiration Year" => "到期年份"
// autocomplete.cc-csc: "Card Security Code" => "卡安全碼"
// autocomplete.cc-type: "Credit Card Type" => "信用卡類型"
// autocomplete.transaction-currency: "Transaction Currency" => "交易貨幣"
// autocomplete.transaction-amount: "Transaction Amount" => "交易金額"
// autocomplete.language: "Preferred Language" => "首選語言"
// autocomplete.bday: "Birthday" => "生日"
// autocomplete.bday-day: "Birthday Day" => "生日"
// autocomplete.bday-month: "Birthday Month" => "生日月份"
// autocomplete.bday-year: "Birthday Year" => "生日年份"
// autocomplete.sex: "Gender" => "性"
// autocomplete.url: "Website URL" => "網站 URL"
// autocomplete.photo: "Profile Photo" => "個人頭像"
// autocomplete.tel: "Telephone Number" => "電話號碼"
// autocomplete.tel-country-code: "Country Code for Phone" => "電話的國家代碼"
// autocomplete.tel-national: "National Telephone Number" => "全國電話號碼"
// autocomplete.tel-area-code: "Area Code" => "區號"
// autocomplete.tel-local: "Local Phone Number" => "本地電話號碼"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "本地電話前綴"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "本地電話後綴"
// autocomplete.tel-extension: "Phone Extension" => "電話分機"
// autocomplete.email: "Email Address" => "電子郵件位址"
// autocomplete.impp: "Instant Messaging Protocol" => "即時通訊協定"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "鎖定問題的展開/摺疊狀態"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "您還沒有任何頁面"
// pe.addNew@pages: "Add new page" => "添加新頁面"
// ed.zoomInTooltip: "Zoom In" => "放大"
// ed.zoomOutTooltip: "Zoom Out" => "縮小"
// tabs.surfaceBackground: "Surface Background" => "表面背景"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "使用最後一個條目中的答案作為預設值"
// colors.gray: "Gray" => "灰色"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "導航按鈕對齊"
// pv.allQuestions: "Show all questions" => "顯示所有問題"
// pv.answeredQuestions: "Show answered questions only" => "僅顯示已回答的問題"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "設置頁面上導航按鈕的位置。"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "使用以下矩陣、列或面板問題中的值作為選項ID"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "使用以下矩陣、列或面板問題中的值作為選擇文本"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "在單選和多選問題類型中，每個選項都有一個ID和顯示值。此設置指定哪個矩陣、列或面板問題應提供ID。"
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "在單選和多選問題類型中，每個選項都有一個ID和顯示值。此設置指定哪個矩陣列或面板問題應提供顯示文本。"
// pe.progressBarLocation: "Progress bar alignment" => "進度條對齊"
// progressBarLocation.topbottom: "Top and bottom" => "頂部和底部"
// progressBarLocation.aboveheader: "Above the header" => "標題上方"
// progressBarLocation.belowheader: "Below the header" => "標題下方"
// progressBarLocation.off: "Hidden" => "隱藏"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "設置進度條的位置。“自動”值在調查標題的上方或下方顯示進度條。"
// survey.readOnly: "Make the survey read-only" => "將調查設為唯讀"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "選擇是否要阻止受訪者填寫您的調查。"
// paneldynamic.showNumber: "Number the panel" => "為面板編號"
// question.showNumber: "Number this question" => "為這個問題編號"
// pe.previewMode: "Preview mode" => "預覽模式"
// pe.gridLayoutEnabled: "Enable the grid layout" => "啟用網格佈局"
// pe.maskSettings: "Mask settings" => "蒙版設置"
// pe.detailErrorLocation: "Row expansion error message alignment" => "行擴展錯誤消息對齊"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "設置嵌套在詳細資訊部分中的問題的錯誤消息的位置。“Inherit” 選項應用“Error message alignment” 屬性中的設置。"
// pe.gridLayoutColumns: "Grid layout columns" => "網格佈局列"
// pe.startPageTitlePlaceholder: "Start Page" => "起始頁"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "有效寬度，%"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "問題標題寬度，px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "您還沒有佈局列"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "指定此面板在網格佈局中跨越的列數。"
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "此表允許您設定面板中的每個網格列。它根據行中的最大元素數自動設置每列的寬度百分比。要自定義網格佈局，請手動調整這些值並定義每列中所有問題的標題寬度。"
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator 允許您手動調整表單元素的內聯寬度以控制佈局。如果這沒有產生所需的結果，您可以啟用網格佈局，該佈局使用基於列的系統構建表單元素。要配置佈局列，請選擇一個頁面或面板，然後使用 “Question Settings” → “Grid columns” 表格。要調整問題跨越的列數，請選擇它並在 「Layout」 → 「Column span」 欄位中設置所需的值。"
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "指定此問題在網格佈局中跨越多少列。"
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "此表允許您設定頁面上的每個網格列。它根據行中的最大元素數自動設置每列的寬度百分比。要自定義網格佈局，請手動調整這些值並定義每列中所有問題的標題寬度。"

// ed.expandTooltip: "Expand" => "擴大"
// ed.collapseTooltip: "Collapse" => "崩潰"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "例：100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "為所有項目標籤設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。"
// ed.zoom100Tooltip: "Zoom to 100%" => "縮放到 100%"
// ed.addLanguageTooltip: "Add Language" => "添加語言"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "設置問題註釋的文字區域中顯示的行數。如果輸入佔用更多行，則會顯示滾動條。"
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "動態文字的預設顯示值"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "當問題值為空時，顯示在 HTML 問題以及調查元素的動態標題和描述中的值。"
// showQuestionNumbers.recursive: "Recursive numbering" => "遞歸編號"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "問題標題寬度"
// pe.allowCustomChoices: "Allow custom choices" => "允許自訂選項"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "當問題標題與問題框的左側對齊時，為問題標題設置一致的寬度。接受 CSS 值（px、%、in、pt 等）。"
// page.name: "A page ID that is not visible to respondents." => "受訪者不可見的頁面ID。"
// page.description: "Type a page subtitle." => "鍵入頁面副標題。"
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "顯示在進度條或目錄 （TOC） 中的導航按鈕上的說明。如果將此欄位留空，則導航按鈕將使用頁面標題或頁面名稱。要啟用進度條或 TOC，請轉到“調查”→“導航”。"
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "如果下拉清單中沒有所需的選項，則選擇以允許受訪者添加自己的選擇。自訂選項將僅在當前瀏覽器會話期間臨時存儲。"