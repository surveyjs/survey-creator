import { setupLocale } from "survey-creator-core";

export var jaStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "編集",
    // "Watch and learn how to create surveys"
    externalHelpLink: "アンケート作成方法の動画を見る",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "ツールボックスからここに質問をドロップしてください。",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "アンケートの流れをカスタマイズするルールを作成します。",
    // "Copy"
    copy: "コピー",
    // "Duplicate"
    duplicate: "複製",
    // "Add to toolbox"
    addToToolbox: "ツールボックスに追加する",
    // "Delete Panel"
    deletePanel: "パネルを削除する",
    // "Delete Question"
    deleteQuestion: "質問を削除する",
    // "Convert to"
    convertTo: "に変換する",
    // "Drag element"
    drag: "要素をドラッグする"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "プレビュー",
    // "Themes"
    theme: "テーマ",
    // "Translations"
    translation: "翻訳",
    // "Designer"
    designer: "編集",
    // "JSON Editor"
    json: "JSONエディタ",
    // "Logic"
    logic: "アンケートのロジック"
  },
  // Question types
  qt: {
    // "Default"
    default: "デフォルト",
    // "Checkboxes"
    checkbox: "チェックボックス",
    // "Long Text"
    comment: "コメント",
    // "Image Picker"
    imagepicker: "画像選択",
    // "Ranking"
    ranking: "ランキング",
    // "Image"
    image: "画像",
    // "Dropdown"
    dropdown: "ドロップダウン",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "複数選択ドロップダウン",
    // "File Upload"
    file: "ファイル",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "マトリックス（単一選択）",
    // "Multi-Select Matrix"
    matrixdropdown: "マトリックス（多項選択）",
    // "Dynamic Matrix"
    matrixdynamic: "マトリックス（動的行）",
    // "Multiple Textboxes"
    multipletext: "複数のテキスト",
    // "Panel"
    panel: "パネル",
    // "Dynamic Panel"
    paneldynamic: "パネル（動的パネル）",
    // "Radio Button Group"
    radiogroup: "ラジオグループ",
    // "Rating Scale"
    rating: "評価",
    // [Auto-translated] "Slider"
    slider: "スライダー",
    // "Single-Line Input"
    text: "単一入力",
    // "Yes/No (Boolean)"
    boolean: "二者択一",
    // "Expression (read-only)"
    expression: "式（読み取り専用）",
    // "Signature"
    signaturepad: "署名パッド",
    // [Auto-translated] "Button Group"
    buttongroup: "ボタングループ"
  },
  toolboxCategories: {
    // "General"
    general: "全体の設定",
    // "Choice Questions"
    choice: "選択の質問",
    // "Text Input Questions"
    text: "テキスト入力の質問",
    // "Containers"
    containers: "コンテナー",
    // "Matrix Questions"
    matrix: "マトリックスの質問",
    // "Misc"
    misc: "その他"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "デフォルト（{0}）",
    // "Survey"
    survey: "アンケート",
    // "Settings"
    settings: "アンケートの設定",
    // "Open settings"
    settingsTooltip: "アンケートの設定を開く",
    // [Auto-translated] "Survey Settings"
    surveySettings: "アンケート設定",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "アンケート設定",
    // [Auto-translated] "Theme Settings"
    themeSettings: "テーマ設定",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "テーマ設定",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "クリエイター設定",
    // "Show Panel"
    showPanel: "パネルを表示する",
    // "Hide Panel"
    hidePanel: "パネルを非表示にする",
    // [Auto-translated] "Select previous"
    prevSelected: "前を選択",
    // [Auto-translated] "Select next"
    nextSelected: "[次へ] を選択します。",
    // [Auto-translated] "Focus previous"
    prevFocus: "前にフォーカス",
    // [Auto-translated] "Focus next"
    nextFocus: "次にフォーカス",
    // [Auto-translated] "Survey"
    surveyTypeName: "アンケート",
    // [Auto-translated] "Page"
    pageTypeName: "ページ",
    // [Auto-translated] "Panel"
    panelTypeName: "パネル",
    // [Auto-translated] "Question"
    questionTypeName: "質問",
    // [Auto-translated] "Column"
    columnTypeName: "コラム",
    // "Add New Page"
    addNewPage: "新規ページを追加する",
    // "Scroll to the Right"
    moveRight: "右にスクロールする",
    // "Scroll to the Left"
    moveLeft: "左にスクロールする",
    // "Delete Page"
    deletePage: "ページを削除する",
    // "Edit Page"
    editPage: "ページを編集する",
    // "Edit"
    edit: "編集",
    // "page"
    newPageName: "ページ",
    // "question"
    newQuestionName: "質問",
    // "panel"
    newPanelName: "パネル",
    // "text"
    newTextItemName: "テキスト",
    // [Auto-translated] "Default"
    defaultV2Theme: "デフォルト",
    // [Auto-translated] "Modern"
    modernTheme: "モダン",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "デフォルト (レガシー)",
    // "Preview Survey Again"
    testSurveyAgain: "アンケートを再度テストする",
    // "Survey width: "
    testSurveyWidth: "アンケートの幅： ",
    // "You had to navigate to"
    navigateToMsg: "次の場所に移動する必要がありました：",
    // "Save Survey"
    saveSurvey: "アンケートを保存する",
    // "Save Survey"
    saveSurveyTooltip: "アンケートを保存する",
    // [Auto-translated] "Save Theme"
    saveTheme: "テーマを保存",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "テーマを保存",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "エラーを隠す",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "エラーを表示",
    // "Undo"
    undo: "元に戻す",
    // "Redo"
    redo: "やり直す",
    // "Undo last change"
    undoTooltip: "最後の変更を元に戻す",
    // "Redo the change"
    redoTooltip: "変更をやり直す",
    // [Auto-translated] "Expand"
    expandTooltip: "膨らむ",
    // [Auto-translated] "Collapse"
    collapseTooltip: "倒れる",
    // "Expand All"
    expandAllTooltip: "すべて展開",
    // "Collapse All"
    collapseAllTooltip: "すべて折りたたむ",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "ズームインする",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "100%にズーム",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "ズームアウト",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "質問の展開/折りたたみ状態のロック",
    // [Auto-translated] "Show more"
    showMoreChoices: "さらに表示",
    // [Auto-translated] "Show less"
    showLessChoices: "表示を減らす",
    // "Copy"
    copy: "コピー",
    // "Cut"
    cut: "カット",
    // "Paste"
    paste: "貼り付ける",
    // "Copy selection to clipboard"
    copyTooltip: "選択範囲をクリップボードにコピーする",
    // "Cut selection to clipboard"
    cutTooltip: "選択範囲をクリップボードにカットする",
    // "Paste from clipboard"
    pasteTooltip: "クリップボードから貼り付ける",
    // "Options"
    options: "オプション",
    // "Generate Valid JSON"
    generateValidJSON: "有効なJSONを生成する",
    // "Generate Readable JSON"
    generateReadableJSON: "読み取り可能なJSONを生成する",
    // "Toolbox"
    toolbox: "ツールボックス",
    // "Properties"
    "property-grid": "プロパティ",
    // [Auto-translated] "Search"
    toolboxSearch: "捜索",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "「検索」...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "結果が見つかりませんでした",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "検索するタイプ...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "結果が見つかりませんでした",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "フォームの設定を開始する",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "任意のカテゴリアイコンをクリックして、アンケート設定を探索します。追加の設定は、デザイン画面にアンケート要素を追加すると使用可能になります。",
    // "Please correct JSON."
    correctJSON: "JSONを修正してください。",
    // "Survey Results "
    surveyResults: "アンケート結果： ",
    // "As Table"
    surveyResultsTable: "表として",
    // "As JSON"
    surveyResultsJson: "JSONとして",
    // "Question Title"
    resultsTitle: "質問のタイトル",
    // "Question Name"
    resultsName: "質問名",
    // "Answer Value"
    resultsValue: "回答値",
    // "Display Value"
    resultsDisplayValue: "表示値",
    // "Modified"
    modified: "修正済み",
    // "Saving"
    saving: "保存",
    // "Saved"
    saved: "保存済み",
    // "Error"
    propertyEditorError: "エラー：",
    // "Error! Editor content is not saved."
    saveError: "エラー！ エディタのコンテンツは保存されません。",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "言語設定",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "テーマ設定",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "言語を追加",
    // [Auto-translated] "Languages"
    translationLanguages: "言語",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "この言語のすべての文字列を削除してもよろしいですか?",
    // "Select language to translate"
    translationAddLanguage: "翻訳する言語を選択する",
    // "All Strings"
    translationShowAllStrings: "すべての文字列を表示する",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "使用される文字列のみ",
    // "All Pages"
    translationShowAllPages: "すべてのページを表示する",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "翻訳する文字列がありません。フィルターを変更してください。",
    // "Export to CSV"
    translationExportToSCVButton: "CSVにエクスポートする",
    // "Import from CSV"
    translationImportFromSCVButton: "CSVからインポートする",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "すべて自動翻訳",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "言語の選択：",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "未翻訳の文字列",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "{0}をデフォルトのロケールにマージする",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "翻訳。。。",
    // [Auto-translated] "Source: "
    translationSource: "源：",
    // [Auto-translated] "Target: "
    translationTarget: "ターゲット：",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube リンクはサポートされていません。",
    // [Auto-translated] "Export"
    themeExportButton: "輸出",
    // [Auto-translated] "Import"
    themeImportButton: "輸入",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "輸出",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "輸入",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "クリップボードにコピー",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "テーマ設定をデフォルトにリセットする",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "本当にテーマをリセットしますか?すべてのカスタマイズが失われます。",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "はい、テーマをリセットします",
    // "Bold"
    bold: "太字",
    // "Italic"
    italic: "イタリック",
    // "Underline"
    underline: "下線",
    // "Add Question"
    addNewQuestion: "質問を追加",
    // "Select page..."
    selectPage: "ページを選択...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "選択肢は",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "選択肢は Web サービスから読み込まれます。",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "設定に移動",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "読み込まれた選択肢オプションのプレビュー",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTMLコンテンツはここにあります。",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "ここにツールボックスから質問をドロップします。",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "アンケートは空です。ツールボックスから要素をドラッグするか、下のボタンをクリックします。",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "ページは空です。ツールボックスから要素をドラッグするか、下のボタンをクリックします。",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "ここに画像をドラッグ&ドロップするか、下のボタンをクリックしてアップロードする画像を選択してください",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "下の「質問を追加」ボタンをクリックして、フォームの作成を開始してください。",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "フォームが空です",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "フォームが空です",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "ツールボックスから要素をドラッグするか、下のボタンをクリックします。",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "ツールボックスから要素をドラッグするか、下のボタンをクリックします。",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "プレビューなし",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "プレビューなし",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "調査には、表示されている要素は含まれていません。",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "調査には、表示されている要素は含まれていません。",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "翻訳する文字列はありません",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "翻訳する文字列はありません",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "フォームに要素を追加するか、ツールバーの文字列フィルターを変更します。",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "フォームに要素を追加するか、ツールバーの文字列フィルターを変更します。",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "下の「質問を追加」ボタンをクリックして、ページに新しい要素を追加します。",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "下の「質問を追加」ボタンをクリックして、パネルに新しい要素を追加します。",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "下のボタンをクリックして、アップロードする画像を選択してください",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "画像を選択",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "{0}を追加", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[ロゴ]",
    // [Auto-translated] "Item "
    choices_Item: "アイテム",
    // [Auto-translated] "Select a file"
    selectFile: "ファイルを選択",
    // [Auto-translated] "Remove the file"
    removeFile: "ファイルを削除する",
    lg: {
      // "Add New Rule"
      addNewItem: "新しいルールを追加",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "調査のフローをカスタマイズするルールを作成します。",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "論理的なルールはありません",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "論理的なルールはありません",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "調査のフローをカスタマイズするルールを作成します。",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "調査のフローをカスタマイズするルールを作成します。",
      // "Show/hide page"
      page_visibilityName: "ページの可視性",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "ページの有効化/無効化",
      // [Auto-translated] "Make page required"
      page_requireName: "ページを必須にする",
      // "Show/hide panel"
      panel_visibilityName: "パネルの可視性",
      // "Enable/disable panel"
      panel_enableName: "パネルの有効化/無効化",
      // [Auto-translated] "Make panel required"
      panel_requireName: "パネルを必須にする",
      // "Show/hide question"
      question_visibilityName: "質問の可視性",
      // "Enable/disable question"
      question_enableName: "質問の有効化/無効化",
      // "Make question required"
      question_requireName: "質問オプションが必要",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "質問値のリセット",
      // [Auto-translated] "Set question value"
      question_setValueName: "質問値の設定",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "列の表示/非表示",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "列の有効化/無効化",
      // [Auto-translated] "Make column required"
      column_requireName: "列を必須にする",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "列の値をリセット",
      // [Auto-translated] "Set column value"
      column_setValueName: "列の値を設定する",
      // "Complete survey"
      trigger_completeName: "アンケートを完了する",
      // "Set answer"
      trigger_setvalueName: "質問の値を設定する",
      // "Copy answer"
      trigger_copyvalueName: "質問の値をコピーする",
      // "Skip to question"
      trigger_skipName: "質問にスキップする",
      // "Run expression"
      trigger_runExpressionName: "カスタム式を実行する",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "カスタムの「サンキューページ」テキスト",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "論理式がtrue（真）を返した場合、ページを表示にします。それ以外の場合は、非表示にしておきます。",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "論理式がtrue（真）を返した場合、パネルを表示にします。それ以外の場合は、非表示にしておきます。",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "論理式がtrue（真）を返した場合、パネルとその中のすべての要素を有効にします。それ以外の場合は、無効にしておきます。",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "論理式がtrue（真）を返した場合、質問を表示にします。それ以外の場合は、非表示にしておきます。",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "論理式がtrue（真）を返した場合、質問を有効にします。それ以外の場合は、無効にしておきます。",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "論理式がtrue（真）を返した場合、質問が必須になります。",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "論理式がtrue（真）を返した場合、アンケートが完了し、エンドユーザーに「サンキューページ」が表示されます。",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "論理式で使用される質問の値が変更され、論理式がtrue（真）を返した場合、その値は選択された質問に設定されます。",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "論理式で使用される質問の値が変更され、論理式がtrue（真）を返した場合、選択された1つの質問の値が別の選択された質問にコピーされます。",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "論理式がtrue（真）を返した場合、アンケートは選択された質問にスキップ/フォーカスされます。",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "論理式がtrue（真）を返した場合、カスタム式が実行されます。オプションで、この式の結果を選択した質問に設定することができます。",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "論理式がtrue（真）を返した場合、「サンキューページ」のデフォルトテキストは指定されたものに変更されます。",
      // "When expression: '{0}' returns true"
      itemExpressionText: "式：「{0}」がtrue（真）を返した場合：", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "新しいルール",
      // "make page {0} visible"
      page_visibilityText: "ページ{0}を表示にする", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "パネル{0}を表示にする", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "パネル{0}を有効にする", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "質問{0}を表示にする", // {0} question name
      // "make question {0} enable"
      question_enableText: "質問{0}を有効にする", // {0} question name
      // "make question {0} required"
      question_requireText: "質問{0}を必須にする", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "質問のリセット値:{0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "値の割り当て: 質問への{1}: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "質問{1}の列{0}を表示する", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "質問の列{0}を有効にする{1}", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "質問{1}の列{0}を必須にする", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "列のセル値をリセット:{0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "セル値の割り当て:列への{1}:{0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "結果が対象の質問に割り当てられる式。",
      // "survey becomes completed"
      trigger_completeText: "アンケートが完了する",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "質問：{0}値{1}に設定する", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "明確な質問値:{0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "質問{1}から質問：{0}値にコピーする", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "アンケートは質問{0}にスキップする", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "式：「{0}」を実行する", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " そして、その結果を質問：{0}に設定する", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "「サンキューページ」のカスタムテキストを表示します。",
      // [Auto-translated] "All Questions"
      showAllQuestions: "すべての質問",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "すべてのアクションタイプ",
      // "Condition(s)"
      conditions: "条件",
      // "Action(s)"
      actions: "アクション",
      // "Define condition(s)"
      expressionEditorTitle: "条件を定義する",
      // "Define action(s)"
      actionsEditorTitle: "アクションを定義する",
      // "Delete Action"
      deleteAction: "アクションを削除する",
      // "Add Action"
      addNewAction: "新しいアクションを追加する",
      // "Select action..."
      selectedActionCaption: "追加するアクションを選択…",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "論理式が空または無効です。修正してください。",
      // "Please add at least one action."
      noActionError: "少なくとも1つのアクションを追加してください。",
      // "Please fix issues in your action(s)."
      actionInvalid: "アクションの問題を解決してください。",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "論理ルールが不完全です",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "一部の論理ルールが完了していません。ここでタブを離れると、変更は失われます。変更を完了せずにタブを離れますか?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "はい",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "いいえ、ルールを完成させたい"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "パネル名",
      // [Auto-translated] "Panel title"
      title: "パネルタイトル",
      // [Auto-translated] "Panel description"
      description: "パネルの説明",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "パネルを表示するのは、次の場合です",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "次の場合は、パネルを必須にします",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "パネル内の質問の順序",
      // [Auto-translated] "Move the panel to page"
      page: "パネルをページに移動する",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "パネルを新しい行に表示する",
      // [Auto-translated] "Panel collapse state"
      state: "パネルの折りたたみ状態",
      // [Auto-translated] "Inline panel width"
      width: "インラインパネル幅",
      // [Auto-translated] "Minimum panel width"
      minWidth: "最小パネル幅",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "パネル幅の最大幅",
      // [Auto-translated] "Number this panel"
      showNumber: "このパネルに番号を付ける"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "有効幅、%",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "質問タイトルの幅、px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "パネル名",
      // [Auto-translated] "Panel title"
      title: "パネルタイトル",
      // [Auto-translated] "Panel description"
      description: "パネルの説明",
      // [Auto-translated] "Entry display mode"
      displayMode: "エントリー表示モード",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "パネルを表示するのは、次の場合です",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "次の場合は、パネルを必須にします",
      // [Auto-translated] "Move the panel to page"
      page: "パネルをページに移動する",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "パネルを新しい行に表示する",
      // [Auto-translated] "Panel collapse state"
      state: "パネル折りたたみ状態",
      // [Auto-translated] "Inline panel width"
      width: "インラインパネルの幅",
      // [Auto-translated] "Minimum panel width"
      minWidth: "最小パネル幅",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "最大パネル幅",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "エントリの削除を確認する",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "エントリの説明パターン",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "エントリータイトルパターン",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "空のパネルテキスト",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "タブ タイトルのパターン",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "タブ タイトルのプレースホルダー",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "次の場合、個々のエントリを表示する",
      // [Auto-translated] "Number the panel"
      showNumber: "パネルに番号を付ける",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "パネルタイトルの配置",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "パネル記述の位置合わせ",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "質問タイトルの配置",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "質問タイトルの幅",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "エラー・メッセージのアライメント",
      // [Auto-translated] "New entry location"
      newPanelPosition: "新しいエントリー場所",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "次の質問の重複回答の防止"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "質問名",
      // [Auto-translated] "Question title"
      title: "質問のタイトル",
      // [Auto-translated] "Question description"
      description: "質問の説明",
      // [Auto-translated] "Show the title and description"
      showTitle: "タイトルと説明を表示する",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "次の場合に質問を表示します。",
      // [Auto-translated] "Make the question required if"
      requiredIf: "次の場合は質問を必須にします",
      // [Auto-translated] "Move the question to page"
      page: "質問をページに移動する",
      // [Auto-translated] "Question box collapse state"
      state: "質問ボックスの折りたたみ状態",
      // [Auto-translated] "Number this question"
      showNumber: "この質問に番号を付ける",
      // [Auto-translated] "Question title alignment"
      titleLocation: "質問タイトルの配置",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "質問の説明の配置",
      // [Auto-translated] "Error message alignment"
      errorLocation: "エラー・メッセージのアライメント",
      // [Auto-translated] "Increase the inner indent"
      indent: "内側のインデントを増やす",
      // [Auto-translated] "Inline question width"
      width: "インラインの質問の幅",
      // [Auto-translated] "Minimum question width"
      minWidth: "質問の最小幅",
      // [Auto-translated] "Maximum question width"
      maxWidth: "質問の最大幅",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "入力フィールド値の更新"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "署名領域の幅",
      // [Auto-translated] "Signature area height"
      signatureHeight: "署名領域の高さ",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "署名領域の自動スケーリング",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "署名領域内にプレースホルダーを表示する",
      // [Auto-translated] "Placeholder text"
      placeholder: "プレースホルダテキスト",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "読み取り専用モードまたはプレビューモードのプレースホルダーテキスト",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "署名領域内にクリアボタンを表示する",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "最小ストローク幅",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "最大ストローク幅",
      // [Auto-translated] "Stroke color"
      penColor: "ストロークの色"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "入力フィールドの高さ (行単位)"
    },
    // "Question numbering"
    showQuestionNumbers: "質問番号を表示する",
    // "Question indexing type"
    questionStartIndex: "質問開始インデックス（1、2または「A」、「a」）",
    expression: {
      // [Auto-translated] "Expression name"
      name: "エクスプレッション名",
      // [Auto-translated] "Expression title"
      title: "エクスプレッションのタイトル",
      // [Auto-translated] "Expression description"
      description: "式の説明",
      // [Auto-translated] "Expression"
      expression: "表現"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "表現"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "表現"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "調査タイトル",
      // [Auto-translated] "Survey description"
      description: "調査内容",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "調査を読み取り専用にする"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "ページ名",
      // [Auto-translated] "Page title"
      title: "ページタイトル",
      // [Auto-translated] "Page description"
      description: "ページの説明",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "次の場合にページを表示します",
      // [Auto-translated] "Make the page required if"
      requiredIf: "次の場合は、ページを必須にします",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "ページを完成させるための制限時間",
      // [Auto-translated] "Question order on the page"
      questionOrder: "ページ上の質問の順序"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "列名",
      // [Auto-translated] "Column title"
      title: "列のタイトル",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "回答の重複を防ぐ",
      // [Auto-translated] "Column width"
      width: "列幅",
      // [Auto-translated] "Minimum column width"
      minWidth: "最小列幅",
      // [Auto-translated] "Input field height (in lines)"
      rows: "入力フィールドの高さ (行単位)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "次の場合に列を表示します",
      // [Auto-translated] "Make the column required if"
      requiredIf: "次の場合は、列を必須にします",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "個別の列に各オプション"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "同じ行の他のものをクリアする"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "名前",
      // [Auto-translated] "Title"
      title: "タイトル"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "アンケート結果にマスクされた値を保存する"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "値パターン"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "最小値",
      // [Auto-translated] "Maximum value"
      max: "最大値"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "負の値を許可する",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "1000 の位の区切り記号",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "小数点記号",
      // [Auto-translated] "Value precision"
      precision: "値の精度",
      // [Auto-translated] "Minimum value"
      min: "最小値",
      // [Auto-translated] "Maximum value"
      max: "最大値"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "通貨接頭辞",
      // [Auto-translated] "Currency suffix"
      suffix: "通貨の接尾辞"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "選択時に他のユーザーをクリアする",
    // [Auto-translated] "Display both text and value"
    showValue: "テキストと値の両方を表示する",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "ユーザーにコメントの入力を要求する",
    // "Display area height"
    imageHeight: "イメージの高さ",
    // "Display area width"
    imageWidth: "イメージの幅",
    // "Join identifier"
    valueName: "値名",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "ダイナミックテキストのデフォルトの表示値",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "ラベルの配置",
    // [Auto-translated] "Input field width (in characters)"
    size: "入力フィールド幅 (文字)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "セル・エラー・メッセージの配置",
    // [Auto-translated] "Enabled"
    enabled: "有効",
    // [Auto-translated] "Disabled"
    disabled: "無効",
    // [Auto-translated] "Inherit"
    inherit: "受け継ぐ",
    // "Apply"
    apply: "適用",
    // "OK"
    ok: "OK",
    // "Save"
    save: "保存",
    // [Auto-translated] "Clear"
    clear: "クリア",
    // "Save"
    saveTooltip: "保存",
    // "Cancel"
    cancel: "キャンセル",
    // [Auto-translated] "Set"
    set: "セット",
    // "Reset"
    reset: "リセット",
    // [Auto-translated] "Change"
    change: "変える",
    // "Refresh"
    refresh: "リフレッシュ",
    // [Auto-translated] "Close"
    close: "閉める",
    // "Delete"
    delete: "削除",
    // "Add"
    add: "追加",
    // "Add New"
    addNew: "新規追加:",
    // "Click to add an item..."
    addItem: "クリックしてアイテムを追加…",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "クリックしてアイテムを削除します...",
    // [Auto-translated] "Drag the item"
    dragItem: "アイテムをドラッグする",
    // "Other"
    addOther: "その他",
    // "Select All"
    addSelectAll: "すべて選択",
    // "None"
    addNone: "なし",
    // "Remove All"
    removeAll: "すべて削除",
    // "Edit"
    edit: "編集",
    // "Return without saving"
    back: "保存せずに戻る",
    // "Return without saving"
    backTooltip: "保存せずに戻る",
    // "Save and return"
    saveAndBack: "保存して戻る",
    // "Save and return"
    saveAndBackTooltip: "保存して戻る",
    // [Auto-translated] "Done"
    doneEditing: "完成です",
    // "Edit Choices"
    editChoices: "選択肢を編集",
    // "Show Choices"
    showChoices: "選択肢を表示",
    // "Move"
    move: "移動",
    // [Auto-translated] "<empty>"
    empty: "<empty>",
    // [Auto-translated] "Value is empty"
    emptyValue: "値が空です",
    // "Manual Entry"
    fastEntry: "高速入力",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "値 '{0}' は一意ではありません",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "アイテムの数は{0}から{1}に制限してください",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "{0}項目以上入力してください",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "選択肢のリストとその ID を次の形式で入力します。\n\nid|オプション\n\n選択肢 ID は回答者には表示されず、条件付きルールで使用できます。",
    // "Form Entry"
    formEntry: "フォーム入力",
    // "Test the service"
    testService: "サービスをテスト",
    // "Please select the element"
    itemSelectorEmpty: "エレメントを選択してください",
    // "Please select the action"
    conditionActionEmpty: "アクションを選択してください",
    // "Select a question..."
    conditionSelectQuestion: "質問を選択...",
    // "Select a page..."
    conditionSelectPage: "ページを選択...",
    // "Select a panel..."
    conditionSelectPanel: "パネルを選択...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "値を入力/選択してください",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "表現の補完のヒントを取得するには「ctrl+space」を押してください",
    // "Current row"
    aceEditorRowTitle: "現在の行",
    // "Current panel"
    aceEditorPanelTitle: "現在のパネル",
    // "For more details please check the documentation"
    showMore: "詳細は文書をご確認ください",
    // "Available questions"
    assistantTitle: "利用できる質問:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "少なくとも1つの列または行を含む必要があります",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "提出前に確認する",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "条件によって有効にされる",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "リセット",
    // "Please enter a value"
    propertyIsEmpty: "値を入力してください",
    // "Please enter a unique value"
    propertyIsNoUnique: "固有値を入力してください",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "固有名を入力してください",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "予約語は使用しないでください: \"アイテム\"、 \"選択肢\"、 \"パネル\"、 \"行\"。",
    // "You don't have any items yet"
    listIsEmpty: "新しいアイテムを追加",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "まだ選択肢はありません",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "まだ列がありません",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "レイアウト列がまだありません",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "まだ行がありません",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "入力規則はまだありません",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "カスタム変数はまだありません",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "トリガーはまだありません",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "リンクはまだありません",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "まだページがありません",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "新しい選択肢を追加する",
    // [Auto-translated] "Add new column"
    "addNew@columns": "新しい列を追加",
    // [Auto-translated] "Add new row"
    "addNew@rows": "新しい行を追加",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "新しいルールを追加",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "新しい変数を追加",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "新しいトリガーを追加する",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "新しい URL を追加",
    // [Auto-translated] "Add new page"
    "addNew@pages": "新しいページを追加",
    // "Expression is empty"
    expressionIsEmpty: "表現が空白です",
    // "Value"
    value: "値",
    // "Text"
    text: "テキスト",
    // "Row ID"
    rowid: "行ID",
    // "Image or video file URL"
    imageLink: "画像リンク",
    // "Edit column: {0}"
    columnEdit: "行編集: {0}",
    // "Edit item: {0}"
    itemEdit: "アイテム編集: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "パス",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "Web サービス URL",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "次のプロパティから格納する値を取得します"
    },
    // "Get value to display from the following property"
    titleName: "タイトル名",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "次のプロパティからファイル URL を取得する",
    // "Accept empty response"
    allowEmptyResponse: "空の応答を許可",
    // "Title"
    titlePlaceholder: "タイトルを入力",
    // "Survey Title"
    surveyTitlePlaceholder: "調査タイトルを入力",
    // "Page {num}"
    pageTitlePlaceholder: "ページタイトルを入力",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "スタートページ",
    // "Description"
    descriptionPlaceholder: "詳細を入力",
    // "Description"
    surveyDescriptionPlaceholder: "調査の詳細を入力",
    // "Description"
    pageDescriptionPlaceholder: "ページの詳細を入力",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "ラップの選択肢",
    // "Enable the \"Other\" option"
    showOtherItem: "他のアイテム",
    // "Rename the \"Other\" option"
    otherText: "他のアイテムのテキスト",
    // "Enable the \"None\" option"
    showNoneItem: "ノーアイテム",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "「応答を拒否」オプションを有効にする",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "「わからない」オプションを有効にする",
    // "Rename the \"None\" option"
    noneText: "ノーアイテムのテキスト",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "アイテムを全て選択",
    // "Rename the \"Select All\" option"
    selectAllText: "アイテムを全て選択のテキスト",
    // "Minimum value for auto-generated items"
    choicesMin: "自動生成アイテムの最小値",
    // "Maximum value for auto-generated items"
    choicesMax: "自動生成アイテムの最大値",
    // "Step value for auto-generated items"
    choicesStep: "自動生成アイテムの差",
    // "Name"
    name: "名前",
    // "Title"
    title: "タイトル",
    // "Cell input type"
    cellType: "セルタイプ",
    // "Column count"
    colCount: "行の数",
    // "Choice order"
    choicesOrder: "選択順",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "カスタム選択を許可する",
    // "Visible"
    visible: "表示",
    // "Required"
    isRequired: "必須",
    // [Auto-translated] "Mark as required"
    markRequired: "必須としてマーク",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "必要なマークを削除する",
    // "Require an answer in each row"
    eachRowRequired: "全ての列で回答必須",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "行での回答の重複を防ぐ",
    // "Error message for required questions"
    requiredErrorText: "必要なエラーテキスト",
    // "Display the question on a new line"
    startWithNewLine: "ニューラインで開始",
    // "Rows"
    rows: "列数",
    // "Columns"
    cols: "行の数",
    // "Placeholder text within input field"
    placeholder: "プレースホルダの入力",
    // "Show preview area"
    showPreview: "プレビューエリア表示",
    // "Store file content in JSON result as text"
    storeDataAsText: "ファイルのコンテンツをテキストとしてJSONの結果に保存",
    // "Maximum file size (in bytes)"
    maxSize: "ファイルの最大サイズ（byte）",
    // "Row count"
    rowCount: "列数",
    // "Columns layout"
    columnLayout: "行のレイアウト",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "列ボタンのロケーションを追加",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "行を列に転置する",
    // "\"Add Row\" button text"
    addRowText: "行ボタンのテキストを追加",
    // "\"Remove Row\" button text"
    removeRowText: "行ボタンのテキストを削除",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "入力フィールドのタイトルパターン",
    // "Minimum rating value"
    rateMin: "最小レート",
    // "Maximum rating value"
    rateMax: "最大レート",
    // "Step value"
    rateStep: "レートステップ",
    // "Minimum value label"
    minRateDescription: "最小レートの詳細",
    // "Maximum value label"
    maxRateDescription: "最大レートの説明",
    // "Input type"
    inputType: "入力タイプ",
    // "Default Answer"
    defaultValue: "デフォルト値",
    // "Default texts"
    cellsDefaultRow: "デフォルトのセルテキスト",
    // "Edit survey settings"
    surveyEditorTitle: "アンケート設定を編集する",
    // "Edit: {0}"
    qEditorTitle: "編集： {0}",
    // "Maximum character limit"
    maxLength: "最大長",
    // "Build"
    buildExpression: "構築する",
    // "Edit"
    editExpression: "編集",
    // [Auto-translated] "and"
    and: "そして",
    // [Auto-translated] "or"
    or: "又は",
    // "Remove"
    remove: "削除する",
    // "Add Condition"
    addCondition: "条件を追加する",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "質問を選択して、条件の設定を開始します。",
    // [Auto-translated] "If"
    if: "もし",
    // [Auto-translated] "then"
    then: "そうしたら",
    // [Auto-translated] "Target question"
    setToName: "ターゲットの質問",
    // [Auto-translated] "Question to copy answer from"
    fromName: "回答をコピーする質問",
    // [Auto-translated] "Question to skip to"
    gotoName: "スキップする質問",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "ルールが正しくありません",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "アンケート結果に追加する",
    // "Make the title and description visible"
    showTitle: "タイトルの表示/非表示",
    // "Expand/collapse title"
    expandCollapseTitle: "タイトルを展開/折りたたむ",
    // "Select a survey language"
    locale: "デフォルトの言語",
    // "Select device type"
    simulator: "デバイスを選択する",
    // "Switch to landscape orientation"
    landscapeOrientation: "横向き",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "縦向きに切り替える",
    // "Clear hidden question values"
    clearInvisibleValues: "非表示の値をクリアする",
    // "Limit to one response"
    cookieName: "Cookie名（ローカルで2回アンケートを実行しないようにするため）",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "次のページにアンケート結果を送信する",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "「その他」の値を別のフィールドに保存する",
    // "Show page titles"
    showPageTitles: "ページタイトルを表示する",
    // "Show page numbers"
    showPageNumbers: "ページ番号を表示する",
    // "\"Previous Page\" button text"
    pagePrevText: "「前のページへ」ボタンのテキスト",
    // "\"Next Page\" button text"
    pageNextText: "「次のページへ」ボタンのテキスト",
    // "\"Complete Survey\" button text"
    completeText: "「完了」ボタンのテキスト",
    // "\"Review Answers\" button text"
    previewText: "「プレビュー」ボタンのテキスト",
    // "\"Edit Answer\" button text"
    editText: "「編集」ボタンのテキスト",
    // "\"Start Survey\" button text"
    startSurveyText: "「開始」ボタンのテキスト",
    // "Show navigation buttons"
    showNavigationButtons: "ナビゲーションボタンを表示する（デフォルトのナビゲーション）",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "ナビゲーション ボタンの配置",
    // "Show the \"Previous Page\" button"
    showPrevButton: "「前へ」ボタンを表示する（ユーザーは前のページに戻ることができます）",
    // "First page is a start page"
    firstPageIsStartPage: "アンケートの最初のページは、開始ページです。",
    // "Show the \"Thank You\" page"
    showCompletePage: "完了したページを最後に表示する（completedHtml）",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "すべての質問に回答すると、自動的に次のページに移動します",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "調査に自動的に回答する",
    // "Show the progress bar"
    showProgressBar: "プログレスバーを表示する",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "プログレスバーの配置",
    // "Question title alignment"
    questionTitleLocation: "質問のタイトルの場所",
    // "Question title width"
    questionTitleWidth: "質問タイトルの幅",
    // "Required symbol(s)"
    requiredMark: "質問には記号が必要",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "質問タイトルのテンプレート、デフォルトは「{no}. {require} {title}」です",
    // "Error message alignment"
    questionErrorLocation: "質問エラーの場所",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "ページを変える際に最初の質問に焦点を合わせる",
    // "Question order"
    questionOrder: "ページ上の要素の順序",
    // "Time limit to complete the survey"
    timeLimit: "アンケート終了までの最長時間",
    // "Time limit to complete one page"
    timeLimitPerPage: "アンケートの1ページを終了するまでの最長時間",
    // [Auto-translated] "Use a timer"
    showTimer: "タイマーを使用する",
    // "Timer alignment"
    timerLocation: "タイマーパネルを表示する",
    // "Timer mode"
    timerInfoMode: "タイマーパネルモードを表示",
    // "Enable entry addition"
    allowAddPanel: "パネルの追加を許可",
    // "Enable entry removal"
    allowRemovePanel: "パネルの削除を許可",
    // "\"Add Entry\" button text"
    addPanelText: "パネルテキストを追加しています",
    // "\"Remove Entry\" button text"
    removePanelText: "パネルテキストを削除しています",
    // "Show all elements on one page"
    isSinglePage: "1ページ上にすべてのエレメントを表示",
    // "HTML markup"
    html: "HTML",
    // [Auto-translated] "Answer"
    setValue: "答える",
    // [Auto-translated] "Storage format"
    dataFormat: "ストレージ形式",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "行の追加を有効にする",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "行の削除を有効にする",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "行の並べ替えを有効にする",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "正確な表示領域の幅または高さを指定した場合は適用されません。",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "最小表示領域幅",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "最大表示領域幅",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "最小表示領域の高さ",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "最大表示領域高さ",
    // "Minimum value"
    minValue: "最小値",
    // "Maximum value"
    maxValue: "最大値",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "大文字と小文字を区別しない",
    // "Minimum length (in characters)"
    minLength: "最小長",
    // "Allow digits"
    allowDigits: "数字を許可",
    // "Minimum count"
    minCount: "最小数",
    // "Maximum count"
    maxCount: "最大数",
    // "Regular expression"
    regex: "正規表現",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "検証メッセージ",
      // [Auto-translated] "Validation expression"
      expression: "検証式",
      // [Auto-translated] "Notification type"
      notificationType: "通知タイプ",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "最大長 (文字数)"
    },
    // "Total row header"
    totalText: "テキストの合計",
    // "Aggregation method"
    totalType: "タイプの合計",
    // "Total value expression"
    totalExpression: "表現の合計",
    // "Total value display format"
    totalDisplayStyle: "表示スタイルの合計",
    // "Currency"
    totalCurrency: "通貨の合計",
    // "Formatted string"
    totalFormat: "形式の合計",
    // [Auto-translated] "Survey logo"
    logo: "調査ロゴ",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "調査レイアウト",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "回答の長さを制限する",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "コメントの長さを制限する",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "コメント領域の高さ (行単位)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "テキスト領域の自動展開",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "ユーザーがテキスト領域のサイズを変更できるようにする",
    // "Update input field values"
    textUpdateMode: "テキストの質問値を更新する",
    // [Auto-translated] "Input mask type"
    maskType: "定型入力の種類",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "最初の無効な回答にフォーカスを設定する",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "検証の実行",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "フォーカスを失った空のフィールドの検証",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "送信後に外部リンクにリダイレクトする",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "動的外部リンク",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "ユーザーがこのアンケートに既に記入しているかどうかを示すマークアップ",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "「ありがとう」ページのマークアップ",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "動的な「ありがとう」ページマークアップ",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "アンケートモデルの読み込み中に表示するマークアップ",
    // [Auto-translated] "Comment area text"
    commentText: "コメント領域のテキスト",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "オートコンプリートの種類",
    // "Label for \"True\""
    labelTrue: "「真の」ラベル",
    // "Label for \"False\""
    labelFalse: "「虚偽」ラベル",
    // "Show the Clear button"
    allowClear: "オプションのキャプションを表示する",
    // [Auto-translated] "Search mode"
    searchMode: "検索モード",
    // [Auto-translated] "Display format"
    displayStyle: "表示形式",
    // [Auto-translated] "Formatted string"
    format: "書式設定された文字列",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "小数部の最大数桁数",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "小数部の最小桁数",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "グループ化区切りの表示",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "複数のファイルのアップロードを有効にする",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "アップロードされた画像をプレビューする",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "受け入れられるファイルの種類",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "アップロードが完了するまで待ちます",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "ファイルの削除を確認する",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "行の詳細の配置",
    // [Auto-translated] "Minimum row count"
    minRowCount: "最小行数",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "最大行数",
    // "Confirm row removal"
    confirmDelete: "行の削除を確認する",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "確認メッセージ",
    // [Auto-translated] "Initial number of entries"
    panelCount: "初期エントリー数",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "最小エントリー数",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "最大エントリー数",
    // [Auto-translated] "Initial entry state"
    panelsState: "初期エントリ状態",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "「前のエントリ」ボタンのテキスト",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "「次のエントリ」ボタンのテキスト",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "「エントリを削除」ボタンの配置",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "行がない場合は質問を非表示にする",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "行がない場合は列を非表示にする",
    // [Auto-translated] "Custom rating values"
    rateValues: "カスタム評価値",
    // [Auto-translated] "Rating count"
    rateCount: "評価数",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "評価構成",
    slider: {
      // [Auto-translated] "Min value"
      min: "最小値",
      // [Auto-translated] "Max value"
      max: "最大値",
      // [Auto-translated] "Step value"
      step: "ステップ値",
      // [Auto-translated] "Show scale labels"
      showLabels: "縮尺ラベルの表示",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "ツールチップを表示する",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "親指の交差を許可する",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "自動生成されたラベルの数",
      // [Auto-translated] "Min value expression"
      minValueExpression: "最小値式",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "最大値の式",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "スケール ラベルの構成",
      // [Auto-translated] "Slider type"
      sliderType: "スライダータイプ",
      // [Auto-translated] "Min range length"
      minRangeLength: "最小範囲長",
      // [Auto-translated] "Max range length"
      maxRangeLength: "最大範囲長",
      // [Auto-translated] "Custom labels"
      customLabels: "カスタムラベル",
      // [Auto-translated] "Label format"
      labelFormat: "ラベルの形式",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "ツールチップの形式"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "画像の高さ",
      // [Auto-translated] "Image width"
      imageWidth: "画像幅"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "選択肢がない場合は質問を非表示にする",
    // "Minimum width"
    minWidth: "最小幅 (CSS で受け入れられる値)",
    // "Maximum width"
    maxWidth: "最大幅 (CSS で受け入れられる値)",
    // "Width"
    width: "幅 (CSS で受け入れられる値)",
    // [Auto-translated] "Show column headers"
    showHeader: "列ヘッダーを表示する",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "水平スクロールバーを表示",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "最小列幅",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "行ヘッダーの幅",
    // "Value to store when \"True\" is selected"
    valueTrue: "「真」の値",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"偽\" の値",
    // "\"Value is below minimum\" error message"
    minErrorText: "\"値が最小値を下回っています\" というエラー メッセージ",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"値が最大値を超えています\" というエラー メッセージ",
    // "\"Empty comment\" error message"
    otherErrorText: "「コメントを空にしました」というエラーメッセージ",
    // "Error message for duplicate responses"
    keyDuplicationError: "\"一意でないキー値\" エラー メッセージ",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "選択する最小限の選択肢",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "選択できる最大選択肢",
    // [Auto-translated] "Logo width"
    logoWidth: "ロゴの幅",
    // [Auto-translated] "Logo height"
    logoHeight: "ロゴの高さ",
    // "Read-only"
    readOnly: "読み取り専用",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "次の場合は読み取り専用モードを無効にします。",
    // "\"No rows\" message"
    noRowsText: "\"行なし\" メッセージ",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "個別の特別な選択肢",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "次の質問から選択肢をコピーする",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "コピーする選択肢オプション",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "次の行列列またはパネルの質問の値を選択肢IDとして使用します",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "次の行列の列またはパネルの質問の値を選択テキストとして使用します",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "進行状況バーにページタイトルを表示する",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "進行状況バーにページ番号を表示する",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "コメントボックスを追加する",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "コメントボックスのプレースホルダテキスト",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "ラベルを極値として表示する",
    // [Auto-translated] "Row order"
    rowOrder: "行の順序",
    // [Auto-translated] "Column layout"
    columnsLayout: "列のレイアウト",
    // [Auto-translated] "Nested column count"
    columnColCount: "ネストされた列数",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "正解",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "デフォルト値",
    // [Auto-translated] "Cell Texts"
    cells: "セルテキスト",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "ファイルを選択するか、ファイルリンクを貼り付けます...",
    // "Prevent duplicate responses in the following column"
    keyName: "キー列",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "次の場合にオプションを表示します",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "次の場合は、オプションを選択可能にします"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "次の場合に行を表示します。",
      // [Auto-translated] "Make the row editable if"
      enableIf: "次の場合に行を編集可能にします"
    },
    imageitemvalue: {
      // "Alt text"
      text: "代替テキスト"
    },
    // "Logo alignment"
    logoPosition: "ロゴの位置",
    // "Add logo..."
    addLogo: "ロゴを追加...",
    // "Change logo..."
    changeLogo: "ロゴを変更...",
    logoPositions: {
      // "Remove logo"
      none: "ロゴを削除",
      // "Left"
      left: "左",
      // "Right"
      right: "右",
      // "On the top"
      top: "上に",
      // "In the bottom"
      bottom: "下に"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "プレビューモード",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "グリッドレイアウトを有効にする",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "グリッド列",
    // [Auto-translated] "Mask settings"
    maskSettings: "マスク設定",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "行の詳細エラーメッセージの配置",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "パネルレイアウト"
      },
      // "General"
      general: "一般",
      // "Options"
      fileOptions: "オプション",
      // "HTML Editor"
      html: "HTMLエディター",
      // "Columns"
      columns: "列",
      // "Rows"
      rows: "行",
      // "Choice Options"
      choices: "選択",
      // "Items"
      items: "アイテム",
      // "Visible If"
      visibleIf: "以下の場合、見える：",
      // "Editable If"
      enableIf: "以下の場合、有効にする：",
      // "Required If"
      requiredIf: "以下の場合、必須：",
      // "Rating Values"
      rateValues: "レート値",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "スライダー設定",
      // "Choices from a Web Service"
      choicesByUrl: "ウェブの選択",
      // "Default Choices"
      matrixChoices: "デフォルトの選択",
      // "Text Inputs"
      multipleTextItems: "テキスト入力",
      // "Numbering"
      numbering: "番号付け",
      // "Validators"
      validators: "バリデータ",
      // "Navigation"
      navigation: "ナビゲーション",
      // "Question Settings"
      question: "質問",
      // "Pages"
      pages: "ページ",
      // "Quiz Mode"
      timer: "タイマー/クイズ",
      // "Calculated Values"
      calculatedValues: "算出された値",
      // "Triggers"
      triggers: "トリガー",
      // "Title template"
      templateTitle: "テンプレートタイトル",
      // "Totals"
      totals: "合計",
      // "Conditions"
      logic: "ロジック",
      // [Auto-translated] "Input Mask Settings"
      mask: "定型入力設定",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "パネルレイアウト",
        // [Auto-translated] "Layout"
        question: "レイアウト",
        // [Auto-translated] "Layout"
        base: "レイアウト"
      },
      // "Data"
      data: "データ",
      // "Validation"
      validation: "検証",
      // "Individual Cell Texts"
      cells: "セル",
      // "\"Thank You\" Page"
      showOnCompleted: "完成したものに表示",
      // "Logo in the Survey Header"
      logo: "アンケートタイトルのロゴ",
      // "Slider"
      slider: "スライダー",
      // [Auto-translated] "Expression"
      expression: "表現",
      // [Auto-translated] "Question Settings"
      questionSettings: "質問設定",
      // "Header"
      header: "ヘッダ",
      // "Background"
      background: "バックグラウンド",
      // "Appearance"
      appearance: "様子",
      // [Auto-translated] "Accent colors"
      accentColors: "アクセントカラー",
      // [Auto-translated] "Surface background"
      surfaceBackground: "表面の背景",
      // [Auto-translated] "Scaling"
      scaling: "スケーリング",
      // "Others"
      others: "その他"
    },
    // "Edit property '{0}'"
    editProperty: "プロパティ'{0}'を編集",
    // "Items"
    items: "[ アイテム: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "次の場合に選択肢を表示する",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "次の場合に選択肢を選択可能にする",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "次の場合に列を表示する",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "次の場合に行を表示する",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "内側のインデントを増やす",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "最後のエントリの回答をデフォルトとして使用する",
    // "Please enter a value."
    enterNewValue: "値を入力してください。",
    // "There are no questions in the survey."
    noquestions: "アンケートに質問はありません。",
    // "Please create a trigger"
    createtrigger: "トリガーを作成してください。",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "編集するには「enter」キーを押してください",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "アイテムを編集するには「enter」キーを押してください、アイテムを削除するには「delete」キーを押してください、アイテムを移動するには「alt」+上矢印キーまたは「alt」+下矢印キーを押してください",
    // "On "
    triggerOn: "オン ",
    // "Make pages visible"
    triggerMakePagesVisible: "ページを可視化:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "エレメントを可視化:",
    // "Complete the survey if successful."
    triggerCompleteText: "うまくいけばアンケートが完了します。",
    // "The trigger is not set"
    triggerNotSet: "トリガーが設定されていません",
    // "Run if"
    triggerRunIf: "次の場合、実行",
    // "Change value of: "
    triggerSetToName: "次の値を変更: ",
    // "Copy value from: "
    triggerFromName: "次から値をコピー: ",
    // "Run this Expression"
    triggerRunExpression: "この表現を実行:",
    // "to: "
    triggerSetValue: "宛先: ",
    // "Go to the question"
    triggerGotoName: "質問に移動:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "アンケートの結果に変数を入れないでください。",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "有効な表現を入力してください",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "ここに式を入力してください...",
    // "No file chosen"
    noFile: "ファイルが選択されていません",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "非表示の質問値をクリアする",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "次のプロパティに値を格納します",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "入力時の検索を有効にする",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "選択した項目を非表示にする",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "選択時にドロップダウンを折りたたむ",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "セル内の垂直方向の配置",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "代替行の色",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "次の場合に列を表示する",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "次の場合に行を表示する",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "コメントボックスのプレースホルダテキスト",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "ローカルファイルのプレースホルダテキスト",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "カメラのプレースホルダテキスト",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "ローカルファイルまたはカメラのプレースホルダテキスト",
    // [Auto-translated] "Rating icon"
    rateType: "評価アイコン",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "例:https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "例:categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "例:a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "例:6インチ",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "例:600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "例:50%",
    // "auto"
    imageHeight_placeholder: "自動",
    // "auto"
    imageWidth_placeholder: "自動",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "例:100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "テーマ",
      // [Auto-translated] "Question appearance"
      isPanelless: "質問の表示設定",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "背景とコーナー半径",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "背景とコーナー半径",
      // [Auto-translated] "Accent color"
      primaryColor: "アクセントカラー",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "パネルと質問ボックスの不透明度",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "入力要素の不透明度",
      // [Auto-translated] "Survey font size"
      fontSize: "アンケートのフォントサイズ",
      // [Auto-translated] "Survey scale factor"
      scale: "調査スケールファクター",
      // [Auto-translated] "Corner radius"
      cornerRadius: "コーナR(Corner Radius)",
      // [Auto-translated] "Advanced mode"
      advancedMode: "詳細モード",
      // [Auto-translated] "Title font"
      pageTitle: "タイトルフォント",
      // [Auto-translated] "Description font"
      pageDescription: "説明フォント",
      // [Auto-translated] "Title font"
      questionTitle: "タイトルフォント",
      // [Auto-translated] "Description font"
      questionDescription: "説明フォント",
      // [Auto-translated] "Font"
      editorFont: "フォント",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "不透明", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "調査フォント ファミリ",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "背景色",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "アクセントの背景色",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "前景色のアクセント",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "エラーメッセージの色",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "影の効果",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "影の効果",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "色"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "眺める",
      // [Auto-translated] "Logo alignment"
      logoPosition: "ロゴの配置",
      // [Auto-translated] "Survey title font"
      surveyTitle: "調査タイトルのフォント",
      // [Auto-translated] "Survey description font"
      surveyDescription: "調査の説明フォント",
      // [Auto-translated] "Survey title font"
      headerTitle: "調査タイトルのフォント",
      // [Auto-translated] "Survey description font"
      headerDescription: "調査の説明フォント",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "コンテンツ領域の幅",
      // [Auto-translated] "Text width"
      textAreaWidth: "文字幅",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "背景色",
      // [Auto-translated] "Background image"
      backgroundImage: "背景画像",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "不透明",
      // [Auto-translated] "Overlap"
      overlapEnabled: "オーバーラップ",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "ロゴの配置",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "調査タイトルの配置",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "調査の説明の配置"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "真",
    // [Auto-translated] "false"
    "false": "偽",
    // [Auto-translated] "Local file"
    file: "ローカルファイル",
    // [Auto-translated] "Camera"
    camera: "カメラ",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "ローカルファイルまたはカメラ",
    // "Inherit"
    inherit: "継承する",
    // "Visible"
    show: "表示する",
    // "Hidden"
    hide: "非表示にする",
    // "Inherit"
    default: "デフォルト",
    // "Initial"
    initial: "最初の",
    // "Random"
    random: "ランダム",
    // "Collapsed"
    collapsed: "折り畳んだ",
    // "Expanded"
    expanded: "展開した",
    // "None"
    none: "なし",
    // "Ascending"
    asc: "昇順",
    // "Descending"
    desc: "降順",
    // "Indeterminate"
    indeterminate: "不確定",
    // [Auto-translated] "Selected"
    selected: "入選",
    // [Auto-translated] "Unselected"
    unselected: "未選択",
    // [Auto-translated] "decimal"
    decimal: "小数",
    // [Auto-translated] "currency"
    currency: "通貨",
    // [Auto-translated] "percent"
    percent: "パーセント",
    // "First panel is expanded"
    firstExpanded: "firstExpanded",
    // "Hide question numbers"
    off: "オフ",
    // "List"
    list: "リスト",
    // [Auto-translated] "Carousel"
    carousel: "回転木馬",
    // [Auto-translated] "Tabs"
    tab: "タブ",
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
    top: "上",
    // "Bottom"
    bottom: "下",
    // "Top and bottom"
    topBottom: "上と下",
    // "Both"
    both: "両方",
    // "Left"
    left: "左",
    // [Auto-translated] "Right"
    right: "右",
    // [Auto-translated] "Center"
    center: "センター",
    // [Auto-translated] "Left and right"
    leftRight: "左右",
    // [Auto-translated] "Middle"
    middle: "中央",
    // [Auto-translated] "color"
    color: "色",
    // [Auto-translated] "date"
    date: "日付",
    // [Auto-translated] "datetime"
    datetime: "日時",
    // [Auto-translated] "datetime-local"
    "datetime-local": "日時ローカル",
    // [Auto-translated] "email"
    email: "電子メール",
    // [Auto-translated] "month"
    month: "月",
    // [Auto-translated] "number"
    number: "数",
    // [Auto-translated] "password"
    password: "パスワード",
    // [Auto-translated] "range"
    range: "範囲",
    // [Auto-translated] "tel"
    tel: "電話",
    // [Auto-translated] "text"
    text: "テキスト",
    // [Auto-translated] "time"
    time: "時間",
    // [Auto-translated] "url"
    url: "リンク",
    // [Auto-translated] "week"
    week: "週",
    // "Hidden"
    hidden: "非表示",
    // "Editable"
    edit: "編集",
    // "Read-only"
    display: "表示",
    // [Auto-translated] "Contain"
    contain: "含む",
    // [Auto-translated] "Cover"
    cover: "覆う",
    // [Auto-translated] "Fill"
    fill: "注ぐ",
    // [Auto-translated] "Next"
    next: "次に",
    // [Auto-translated] "Last"
    last: "前の",
    // "Upon survey completion"
    onComplete: "onComplete",
    // "When question gets hidden"
    onHidden: "onHidden",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "質問またはそのパネル/ページが非表示になった場合",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "なし"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "一度もない"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "ラジオボタン",
    inputType: {
      // [Auto-translated] "Color"
      color: "色",
      // [Auto-translated] "Date"
      date: "日付",
      // [Auto-translated] "Date and Time"
      "datetime-local": "日付と時刻",
      // [Auto-translated] "Email"
      email: "電子メール",
      // [Auto-translated] "Month"
      month: "月",
      // [Auto-translated] "Number"
      number: "数",
      // [Auto-translated] "Password"
      password: "パスワード",
      // [Auto-translated] "Range"
      range: "範囲",
      // [Auto-translated] "Phone Number"
      tel: "電話番号",
      // [Auto-translated] "Text"
      text: "テキスト",
      // [Auto-translated] "Time"
      time: "時間",
      // [Auto-translated] "URL"
      url: "リンク",
      // [Auto-translated] "Week"
      week: "週"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "単一値",
      // [Auto-translated] "Range"
      range: "範囲"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "自動",
      // [Auto-translated] "Always"
      always: "いつも",
      // [Auto-translated] "Never"
      never: "一度もない"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "エラー",
      // [Auto-translated] "Warning"
      warning: "警告",
      // [Auto-translated] "Informational"
      info: "情報"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "フルネーム",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "接頭辞",
      // [Auto-translated] "First Name"
      "given-name": "名前",
      // [Auto-translated] "Middle Name"
      "additional-name": "ミドルネーム",
      // [Auto-translated] "Last Name"
      "family-name": "名字",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "接尾辞",
      // [Auto-translated] "Nickname"
      nickname: "ニックネーム",
      // [Auto-translated] "Job Title"
      "organization-title": "役職",
      // [Auto-translated] "User Name"
      username: "ユーザー名",
      // [Auto-translated] "New Password"
      "new-password": "新しいパスワード",
      // [Auto-translated] "Current Password"
      "current-password": "現在のパスワード",
      // [Auto-translated] "Organization Name"
      organization: "組織名",
      // [Auto-translated] "Full Street Address"
      "street-address": "フルストリートアドレス",
      // [Auto-translated] "Address Line 1"
      "address-line1": "住所1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "住所2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "住所3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "レベル4アドレス",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "レベル3アドレス",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "レベル2アドレス",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "レベル1アドレス",
      // [Auto-translated] "Country Code"
      country: "国コード",
      // [Auto-translated] "Country Name"
      "country-name": "国名",
      // [Auto-translated] "Postal Code"
      "postal-code": "郵便番号",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "カード名義人氏名",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "カード所有者の名",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "カード名義人のミドルネーム",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "カード名義人の姓",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "クレジットカード番号",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "有効期限",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "有効期限月",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "有効期限",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "カードセキュリティコード",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "クレジットカードの種類",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "取引通貨",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "取引金額",
      // [Auto-translated] "Preferred Language"
      language: "優先言語",
      // [Auto-translated] "Birthday"
      bday: "誕生日",
      // [Auto-translated] "Birthday Day"
      "bday-day": "誕生日",
      // [Auto-translated] "Birthday Month"
      "bday-month": "誕生日月",
      // [Auto-translated] "Birthday Year"
      "bday-year": "誕生日の年",
      // [Auto-translated] "Gender"
      sex: "ジェンダー",
      // [Auto-translated] "Website URL"
      url: "ウェブサイトURL",
      // [Auto-translated] "Profile Photo"
      photo: "プロフィール写真",
      // [Auto-translated] "Telephone Number"
      tel: "電話番号",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "電話の国番号",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "国内電話番号",
      // [Auto-translated] "Area Code"
      "tel-area-code": "市外局番",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "市内電話番号",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "ローカル電話プレフィックス",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "ローカル電話サフィックス",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "内線",
      // [Auto-translated] "Email Address"
      email: "アドレス",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "インスタントメッセージングプロトコル"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "何一つ",
      // [Auto-translated] "Pattern"
      pattern: "パターン",
      // [Auto-translated] "Numeric"
      numeric: "数値",
      // [Auto-translated] "Date and Time"
      datetime: "日付と時刻",
      // [Auto-translated] "Currency"
      currency: "通貨"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "自動",
      // [Auto-translated] "Left"
      left: "左",
      // [Auto-translated] "Right"
      right: "右"
    },
    // "All"
    all: "すべて",
    // "Page"
    page: "ページ",
    // "Survey"
    survey: "アンケート",
    // "When switching to the next page"
    onNextPage: "onNextPage",
    // "After an answer is changed"
    onValueChanged: "onValueChanged",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "回答が変更される前に",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "元の構造",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "すべての質問を 1 ページに表示する",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "1ページにつき1つの質問を表示する",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "ページごとに 1 つの入力フィールドを表示"
    },
    // "No preview"
    noPreview: "プレビューなし",
    // "Show all questions"
    showAllQuestions: "すべての質問を含むプレビューを表示",
    // "Show answered questions only"
    showAnsweredQuestions: "回答された質問を含むプレビューを表示",
    // [Auto-translated] "Show all questions"
    allQuestions: "すべての質問を表示",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "回答済みの質問のみを表示する",
    // "Completed pages"
    pages: "ページ",
    // "Answered questions"
    questions: "質問",
    // "Answered required questions"
    requiredQuestions: "必須の質問",
    // "Valid answers"
    correctQuestions: "正しい質問",
    // "Completed pages (button UI)"
    buttons: "ボタン",
    // "Under the input field"
    underInput: "インプットの下",
    // "Under the question title"
    underTitle: "タイトルの下",
    // [Auto-translated] "On lost focus"
    onBlur: "焦点の喪失について",
    // [Auto-translated] "While typing"
    onTyping: "入力中",
    // [Auto-translated] "Under the row"
    underRow: "行の下",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "行の下には、1 つのセクションのみを表示します",
    // "Auto"
    auto: "自動",
    timerInfoMode: {
      // "Both"
      combined: "両方とも"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "マトリックスレイアウトに基づく"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "締まる",
      // [Auto-translated] "Collapse all"
      collapsed: "すべて折りたたむ",
      // [Auto-translated] "Expand all"
      expanded: "すべて展開",
      // [Auto-translated] "First expanded"
      firstExpanded: "最初の展開"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "静的",
      // [Auto-translated] "Responsive"
      responsive: "応答"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "画像",
      // [Auto-translated] "Video"
      video: "ビデオ",
      // [Auto-translated] "YouTube"
      youtube: "ユーチューブ"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "ボタン",
      // [Auto-translated] "Dropdown"
      dropdown: "ドロップダウン"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "デフォルト",
      // [Auto-translated] "Scale"
      scale: "規模"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "モノクロ",
      // [Auto-translated] "Colored"
      colored: "有色"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "自動生成",
      // [Auto-translated] "Manual"
      "false": "手動"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "ラベル",
      // [Auto-translated] "Stars"
      stars: "星",
      // [Auto-translated] "Smileys"
      smileys: "スマイリー"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "締まる"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "自動番号付け",
      // [Auto-translated] "Auto-numbering"
      on: "自動番号付け",
      // [Auto-translated] "Reset on each page"
      onPage: "各ページでリセット",
      // [Auto-translated] "Reset on each panel"
      onpanel: "各パネルでリセット",
      // [Auto-translated] "Reset on each panel"
      onPanel: "各パネルでリセット",
      // [Auto-translated] "Recursive numbering"
      recursive: "再帰的なナンバリング",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "調査を続ける",
      // [Auto-translated] "No numbering"
      off: "ナンバリングなし"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "質問タイトルの下",
      // [Auto-translated] "Under the input field"
      underInput: "入力欄の下"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "選択肢の横",
      // [Auto-translated] "Above choices"
      vertical: "上記の選択肢"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "小数",
      // [Auto-translated] "Currency"
      currency: "通貨",
      // [Auto-translated] "Percentage"
      percent: "百分率",
      // [Auto-translated] "Date"
      date: "日付"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "小数",
      // [Auto-translated] "Currency"
      currency: "通貨",
      // [Auto-translated] "Percentage"
      percent: "百分率",
      // [Auto-translated] "Date"
      date: "日付"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "翻訳元"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "翻訳元"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "ページのトップへ",
      // [Auto-translated] "Bottom"
      bottom: "底",
      // [Auto-translated] "Top and bottom"
      topbottom: "上部と下部",
      // [Auto-translated] "Above the header"
      aboveheader: "ヘッダーの上",
      // [Auto-translated] "Below the header"
      belowheader: "ヘッダーの下",
      // [Auto-translated] "Hidden"
      off: "隠れた"
    },
    // [Auto-translated] "Sum"
    sum: "和",
    // [Auto-translated] "Count"
    count: "数える",
    // [Auto-translated] "Min"
    min: "分",
    // [Auto-translated] "Max"
    max: "マックス",
    // [Auto-translated] "Avg"
    avg: "平均",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "含む",
      // [Auto-translated] "Starts with"
      startsWith: "次で始まる"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "自動",
      // [Auto-translated] "Cover"
      cover: "覆う",
      // [Auto-translated] "Contain"
      contain: "含む",
      // [Auto-translated] "Stretch"
      fill: "伸ばす",
      // [Auto-translated] "Tile"
      tile: "瓦"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "付け",
      // [Auto-translated] "Scroll"
      scroll: "スクロール"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "基本的な",
      // [Auto-translated] "Advanced"
      advanced: "アドバンスド"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "調査と同じ",
      // [Auto-translated] "Same as container"
      container: "コンテナと同じ"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "何一つ",
      // [Auto-translated] "Accent color"
      accentColor: "アクセントカラー",
      // [Auto-translated] "Custom"
      custom: "習慣"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "光",
      // [Auto-translated] "Dark"
      dark: "暗い"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "デフォルト",
      // [Auto-translated] "Without Panels"
      "true": "パネルなし"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "調査と同じ",
      // [Auto-translated] "Same as container"
      container: "コンテナと同じ"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "は空白です",
    // "Not empty"
    notempty: "は空白ではありません",
    // "Equals"
    equal: "等しい",
    // "Does not equal"
    notequal: "等しくない",
    // "Contains"
    contains: "含む",
    // "Does not contain"
    notcontains: "含まない",
    // "Any of"
    anyof: "次のいずれか",
    // "All of"
    allof: "次のすべて",
    // "Greater than"
    greater: "より大きい",
    // "Less than"
    less: "より小さい",
    // "Greater than or equal to"
    greaterorequal: "等しいかより大きい",
    // "Less than or equal to"
    lessorequal: "等しいかより小さい",
    // [Auto-translated] "and"
    and: "そして",
    // [Auto-translated] "or"
    or: "又は"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Angularバージョンを使用",
    // "Use jQuery version"
    jquery: "jQueryバージョンを使用",
    // "Use Knockout version"
    knockout: "Knockoutバージョンを使用",
    // "Use React version"
    react: "Reactバージョンを使用",
    // "Use Vue version"
    vue: "Vueバージョンを使用",
    // "For bootstrap framework"
    bootstrap: "Bootstrapフレームワーク向け",
    // "Modern theme"
    modern: "モダンテーマ",
    // "Default theme"
    default: "デフォルトテーマ",
    // "Orange theme"
    orange: "オレンジテーマ",
    // "Darkblue theme"
    darkblue: "ダークブルーテーマ",
    // "Darkrose theme"
    darkrose: "ダークローズテーマ",
    // "Stone theme"
    stone: "ストーンテーマ",
    // "Winter theme"
    winter: "ウィンターテーマ",
    // "Winter-Stone theme"
    winterstone: "ウィンターストーンテーマ",
    // "Show survey on a page"
    showOnPage: "1つのページにアンケートを表示",
    // "Show survey in a window"
    showInWindow: "1つのウィンドウにアンケートを表示",
    // "Load Survey JSON from server"
    loadFromServer: "サーバーからアンケートのJSONファイルを読み込む",
    // "Scripts and styles"
    titleScript: "スクリプトとスタイル",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "それをテストするためのページを選択:",
    // "Show invisible elements"
    showInvisibleElements: "不可視エレメントを表示",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "非表示の要素を非表示にする",
    // [Auto-translated] "Previous"
    prevPage: "先の",
    // [Auto-translated] "Next"
    nextPage: "次に"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "答えの数",
    // "Email"
    emailvalidator: "メール",
    // "Expression"
    expressionvalidator: "表現",
    // "Number"
    numericvalidator: "数字の",
    // "Regex"
    regexvalidator: "正規表現",
    // "Text"
    textvalidator: "テキスト"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "アンケートを完了",
    // "Set answer"
    setvaluetrigger: "値を設定",
    // "Copy answer"
    copyvaluetrigger: "値をコピー",
    // "Skip to question"
    skiptrigger: "質問へスキップ",
    // "Run expression"
    runexpressiontrigger: "数式を実行",
    // "change visibility (deprecated)"
    visibletrigger: "可視性を変更 (非推奨)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "例:mm / dd / yyyy HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Ex.: $",
      // "Ex.: USD"
      suffix: "Ex.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "例:200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "例:30%",
      // "Ex.: 200px"
      questionTitleWidth: "例:200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "回答者には表示されないパネルID。",
      // [Auto-translated] "Type a panel subtitle."
      description: "パネルのサブタイトルを入力します。",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "魔法の杖アイコンを使用して、パネルの表示を決定する条件付きルールを設定します。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "魔法の杖アイコンを使用して、パネルの読み取り専用モードを無効にする条件付きルールを設定します。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "このパネル内のすべての質問に適用されます。「非表示」に設定すると、質問の説明も非表示になります。この設定を上書きする場合は、個々の質問のタイトルの配置ルールを定義します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「トップ」)���適���します。",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "質問タイトルが質問ボックスの左側に配置されている場合に、質問タイトルの幅を一定に設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "パネル内のすべての質問に関連するエラーメッセージの位置を設定します。[継承] オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定を適用します。",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "質問の元の順序を維持するか、ランダム化します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定を適用します。",
      // "Repositions the panel to the end of a selected page."
      page: "パネルを選択したページの末尾に再配置します。",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "パネルの内容とパネルボックスの左の境界線の間にスペースまたは余白を追加します。",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "選択を解除すると、前の質問またはパネルと 1 行でパネルが表示されます。パネルがフォームの最初の要素である場合、この設定は適用されません。",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "次から選択します: 「展開」 - パネルは完全に表示され、折りたたむことができます。「折りたたまれた」 - パネルにはタイトルと説明のみが表示され、展開できます。「ロック」 - パネルは完全に表示され、折りたたむことはできません。",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "同じ線内の他の測量要素に比例してパネルの幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "このパネル内にネストされた質問に番号を割り当てます。",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "このパネルがグリッドレイアウト内で何列にまたがっているかを指定します。",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "このテーブルでは、パネル内の各グリッド列を構成できます。行内の要素の最大数に基づいて、各列の幅の割合が自動的に設定されます。グリッドレイアウトをカスタマイズするには、これらの値を手動で調整し、各列のすべての質問のタイトル幅を定義します。"
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "回答者には表示されないパネルID。",
      // "Type a panel subtitle."
      description: "パネルのサブタイトルを入力します。",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "魔法の杖アイコンを使用して、パネルの表示を決定する条件付きルールを設定します。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "魔法の杖アイコンを使用して、パネルの読み取り専用モードを無効にする条件付きルールを設定します。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "このパネル内のすべての質問に適用されます。この設定を上書きする場合は、個々の質問のタイトル配置ルールを定義します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "質問タイトルが問題ボックスの左側に配置されている場合に、質問タイトルの一貫した幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "パネル内のすべての質問に関連するエラーメッセージの位置を設定します。[継承] オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定を適用します。",
      // "Repositions the panel to the end of a selected page."
      page: "パネルを選択したページの末尾に再配置します。",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "パネルコンテンツとパネルボックスの左境界線の間にスペースまたは余白を追加します。",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "選択を解除すると、前の質問またはパネルと 1 行でパネルが表示されます。パネルがフォームの最初の要素である場合、この設定は適用されません。",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "次から選択します: 「展開」 - パネルは完全に表示され、折りたたむことができます。「折りたたまれた」 - パネルにはタイトルと説明のみが表示され、展開できます。「ロック」 - パネルは完全に表示され、折りたたむことはできません。",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "パネルの幅を、同じ行内の他の調査要素に比例して設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "動的パネルタイトルのテンプレートを入力します。パネルの一般的な位置には {panelIndex} を使用し、表示されているパネル間の順序には {visiblePanelIndex} を使用します。これらのプレースホルダーをパターンに挿入して、自動番号付けを追加します。",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "タブタイトルのテンプレートを入力します。パネルの一般的な位置には {panelIndex} を使用し、可視パネル間の順序には {visiblePanelIndex} を使用します。これらのプレースホルダーをパターンに挿入して、自動番号付けを追加します。",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "タブ タイトル パターンが意味のある値を生成しない場合に適用されるタブ タイトルのフォールバック テキスト。",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "この設定では、動的パネル内の個々のパネルの表示を制御できます。'{panel}' プレースホルダーを使用して、式で現在のパネルを参照します。",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "この設定は、このパネル内のすべての質問に自動的に継承されます。この設定を上書きする場合は、個々の質問のタイトル配置ルールを定義します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「パネルタイトルの下」)を適用します。",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "新しく追加されたパネルの位置を定義します。デフォルトでは、新しいパネルが最後に追加されます。「次へ」を選択して、現在のパネルの後に新しいパネルを挿入します。",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "最後のエントリの回答を複製し、次に追加されたエントリに割り当てます。",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "質問名を参照して、各パネルでこの質問に対して一意の回答を提供するようユーザーに要求します。",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "エントリを削除する前に確認プロンプトをトリガーします。",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "動的パネル内にネストされた質問に番号を割り当てます。"
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "行を削除する前に確認プロンプトをトリガーします。",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "新しい行がマトリックスに追加されると、詳細セクションが自動的に展開されます。"
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "最後の行から回答を複製し、次に追加された動的行に割り当てます。",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "この設定では、式に基づいてデフォルトの回答値を割り当てることができます。式には、基本的な計算 - '{q1_id} + {q2_id}'、'{age} > 60' などのブール式、関数 'iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' などを含めることができます。この式によって決定される値は、回答者の手動入力で上書きできる初期デフォルト値として機能します。",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "魔法の杖アイコンを使用して、回答者の入力を「デフォルト値式」または「値式の設定」に基づく値、または「デフォルト回答」値(どちらかが設定されている場合)にリセットするタイミングを決定する条件付きルールを設定します。",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "魔法の杖アイコンを使用して、「値の設定式」をいつ実行するかを決定し、結果の値を応答として動的に割り当てる条件付きルールを設定します。",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "「値を設定する条件」ルールの条件が満たされた場合に設定される値を定義する式を指定します。式には、基本的な計算 - '{q1_id} + {q2_id}'、'{age} > 60' などのブール式、関数 'iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' などを含めることができます。この式によって決定される値は、回答者の手動入力によって上書きできます。",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator では、フォーム要素のインライン幅を手動で調整して、レイアウトを制御できます。これで目的の結果が得られない場合は、列ベースのシステムを使用してフォーム要素を構成するグリッドレイアウトを有効にすることができます。レイアウト列を設定するには、ページまたはパネルを選択し、「質問設定」→「グリッド列」テーブルを使用します。質問の列数を調整するには、質問を選択し、「レイアウト」→「列範囲」フィールドで目的の値を設定します。",
    question: {
      // "A question ID that is not visible to respondents."
      name: "回答者に表示されない質問ID。",
      // "Type a question subtitle."
      description: "質問のサブタイトルを入力します。",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "魔法の杖アイコンを使用して、質問の表示を決定する条件付きルールを設定します。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "魔法の杖アイコンを使用して、質問の読み取り専用モードを無効にする条件付きルールを設定します。",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "魔法の杖アイコンを使用して、質問に回答がない限り、アンケートの進行や送信を禁止する条件付きルールを設定します。",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "選択を解除すると、前の質問またはパネルと 1 行で質問が表示されます。この設定は、質問がフォームの最初の要素である場合には適用されません。",
      // "Repositions the question to the end of a selected page."
      page: "選択したページの最後に質問を再配置します。",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "選択肢: 「展開」 - 質問ボックスは完全に表示され、折りたたむことができます。「折りたたまれた」 - 質問ボックスにはタイトルと説明のみが表示され、展開できます。\"Locked\" - 質問ボックスは完全に表示され、折りたたむことはできません。",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "パネル、ページ、またはアンケートレベルで定義されたタイトル配置ルールを上書きします。「継承」オプションは、上位レベルの設定(設定されている場合)またはアンケートレベルの設定(デフォルトでは「トップ」)を適用します。",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "「継承」オプションは、アンケートレベルの設定(デフォルトでは「質問タイトルの下」)を適用します。",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。「継承」オプションは、アンケートレベルの設定(デフォルトでは「トップ」)を適用します。",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "質問の内容と質問ボックスの左の境界線の間にスペースまたは余白を追加します。",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "同じ行内の他のアンケート要素に比例して質問の幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "次から選択します: \"On lost focus\" - 入力フィールドがフォーカスを失ったときに値が更新されます。「入力中」 - ユーザーが入力しているときに、値がリアルタイムで更新されます。「継承」オプションは、アンケートレベルの設定(デフォルトでは「フォーカスを失ったとき」)を適用します。",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "任意の Web サービスを多肢選択式の質問のデータ ソースとして使用できます。選択肢の値を入力するには、データを提供するサービスの URL を入力します。",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "ドロップダウン リストをフィルター処理するために使用される比較演算。",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "選択肢オプションのテキスト(長い)は、ドロップダウンメニュー内に収まるように改行を自動的に生成します。テキストをクリップする場合は、選択を解除します。",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "この質問がグリッドレイアウト内で何列にまたがっているかを指定します。"
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "魔法の杖アイコンを使用して、質問の値が有効と見なされるタイミングを定義します。",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "エラーは解決されるまで進行をブロックします。警告は問題を強調表示しますが、続行できます。情報メモは、追加のコンテキストまたは中立的なガイダンスを提供します。警告または情報メモを使用する場合は、「アンケート」→「検証」→「検証の実行」→「回答が変更された後」の即時検証を有効にすることをお勧めします。"
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "表示される署名領域と結果の画像の幅を設定します。",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "表示される署名領域と結果の画像の高さを設定します。",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "デフォルトの3:2の縦横比を維持したまま、質問ボックス内の使用可能なすべてのスペースを署名領域に埋める場合に選択します。カスタムの幅と高さの値が設定されている場合、設定ではこれらの寸法の縦横比が維持されます。"
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "プレビューでアップロードした画像の表示高さと、カメラで撮影した画像の実際の高さを指定します。単一ファイルのアップロード モードでは、表示の高さはプレビュー領域によって制限されます。複数ファイルのアップロードモードでは、サムネイル領域によって制限されます。",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "プレビューでアップロードした画像の表示幅と、カメラで撮影した画像の実際の幅を指定します。単一ファイルのアップロード モードでは、表示幅はプレビュー領域によって制限されます。複数ファイルのアップロードモードでは、サムネイル領域によって制限されます。",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "可能な場合は、アップロードされたファイルのサムネイル プレビューを表示します。代わりにファイルアイコンを表示する場合は、選択を解除します。"
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "「自動」オプションでは、指定されたソースURLに基づいて、表示に適したモード(画像、動画、YouTube)が自動的に決定されます。"
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "高さの最小値と最大値の値を上書きします。",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "幅の最小値と最大値を上書きします。",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "「値」は、条件付きルールで使用されるアイテム ID として機能します。回答者には「テキスト」が表示されます。",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "「画像」と「動画」のどちらかを選択して、メディアセレクタのコンテンツモードを設定します。「画像」を選択した場合は、提供されるすべてのオプションが、JPEG、GIF、PNG、APNG、SVG、BMP、ICO形式の画像ファイルであることを確認してください。同様に、「ビデオ」を選択した場合は、すべてのオプションがMP4、MOV、WMV、FLV、AVI、MKV形式のビデオファイルへの直接リンクであることを確認してください。YouTubeのリンクは動画オプションではサポートされていませんのでご注意ください。"
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "この設定は入力フィールドのサイズを変更するだけで、質問ボックスの幅には影響しません。受け入れられる入力長を制限するには、「検証」→「最大文字数制限」に移動します。"
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "入力欄に表示される行数を設定します。入力がより多くの行を占めると、スクロールバーが表示されます。"
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "回答者がアンケートに回答できないようにする場合に選択します。",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "プログレスバーの位置を設定します。「自動」の値は、調査ヘッダーの上または下に進行状況バーを表示します。"
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "回答者に表示されない列 ID。",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "列に対して有効にすると、回答者はこの列内の質問ごとに一意の回答を提供する必要があります。",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "入力欄に表示する行数を設定します。入力の行数が多い場合は、スクロールバーが表示されます。",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "魔法の杖アイコンを使用して、列の表示を決定する条件付きルールを設定します。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "魔法の杖アイコンを使用して、列の読み取り専用モードを無効にする条件付きルールを設定します。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "選択すると、選択肢オプションごとに個別の列が作成されます。",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "選択肢を複数列のレイアウトに配置します。0 に設定すると、オプションが 1 行に表示されます。-1 に設定すると、実際の値は親行列の \"入れ子になった列数\" プロパティから継承されます。"
    },
    slider: {
      // "The lowest number that users can select."
      min: "ユーザーが選択できる最小の数値。",
      // "The highest number that users can select."
      max: "ユーザーが選択できる最大数。",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "選択可能なスケール値の間隔。たとえば、ステップを 5 にすると、ユーザーは 0、5、10 などを選択できます。",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "ユーザーが設定できるスライダーの親指間の最小距離。",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "ユーザーが設定できるスライダーのつまみ間の最大距離。",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "生成する縮尺ラベルの数を指定します。値 -1 は、数値が [最小] 値と [最大値] に基づいて自動的に計算されることを意味します。",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "実際の値のプレースホルダーとして「{0}」を使用します。",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "特定の値でカスタムラベルを定義し、オプションで対応するテキストを割り当てることができます(例:0 = \"Poor\"、100 = \"Excellent\")。",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "実際の値のプレースホルダーとして「{0}」を使用します。",
      // "Allows users to move one thumb past the other."
      allowSwap: "ユーザーは、一方の親指をもう一方の親指を超えて移動できます。",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "選択したスライダーの値をクリアし、未定義に設定するボタンを表示します。",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "スライダの最小値を式を使用して動的に定義します。基本的な計算 (例: '{q1_id} + {q2_id}')、ブール論理 (例: '{age} > 60')、および 'iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' などの関数をサポートします。",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "スライダの最大値を式を使用して動的に定義します。基本的な計算 (例: '{q1_id} + {q2_id}')、ブール論理 (例: '{age} > 60')、および 'iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' などの関数をサポートします。"
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "この選択肢を排他的にします。ユーザーが選択すると、質問内の他のすべてのオプションの選択が自動的に解除されます。",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "この列のチェックボックスを排他的にします。ユーザーが選択すると、同じ行内の他のすべてのチェックボックスが自動的に選択解除されます。"
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "正規表現の大文字と小文字を同等に扱う必要がある場合に選択します。",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "次から選択します: \"Static\" - 固定幅を設定します。「レスポンシブ」 - アンケートを画面の全幅に表示します。「自動」 - 使用する質問タイプに応じて、2つのいずれかを適用します。",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "アンケートに一意の Cookie 値を割り当てます。Cookieは、アンケートの繰り返し送信を防ぐために、アンケートの完了時に回答者のブラウザに設定されます。",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "画像リンクを貼り付けるか(サイズ制限なし)、フォルダアイコンをクリックして、コンピューターからファイルを参照します(最大64KB)。",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "ロゴの幅をCSS単位(px、%、in、ptなど)で設定します。",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "ロゴの高さを CSS 単位 (px、%、in、pt など) で設定します。",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "次から選択: 「なし」 - 画像は元のサイズを維持します。\"Contain\" - 画像はアスペクト比を維持しながらサイズ変更されます。「表紙」-画像は縦横比を維持しながらボックス全体を埋めます。\"Fill\" - 画像は、アスペクト比を維持せずにボックスを埋めるように引き伸ばされます。",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "回答者が現在のページのすべての質問に答えると、アンケートが自動的に次のページに進むようにする場合に選択します。この機能は、ページの最後の質問が自由回答形式の場合、または複数の回答が許可されている場合には適用されません。",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "回答者がすべての質問に回答した後にアンケートを自動的に完了する場合に選択します。",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "ページ上のナビゲーションボタンの表示設定を設定します。",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "ページ上のナビゲーション ボタンの位置を設定します。",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "すべての質問または回答済みの質問のみを含むプレビューページを有効にします。",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "アンケート内のすべての質問に適用されます。この設定は、下位レベル(パネル、ページ、または質問)のタイトル配置ルールによって上書きできます。下位レベルの設定は、上位レベルの設定よりも優先されます。",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "回答が必要であることを示す記号または記号のシーケンス。",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "番号付けを開始する番号または文字を入力します。",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "各ページの最初の入力フィールドをテキスト入力可能にするかどうかを選択します。",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "質問の元の順序を維持するか、ランダム化します。この設定の効果は、「プレビュー」タブにのみ表示されます。",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "テキスト入力の質問専用です。",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "質問コメント専用です。",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "質問コメントのテキスト領域に表示される行数を設定します。入力がより多くの行を占める場合は、スクロールバーが表示されます。",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "質問のコメントと長いテキストの質問の高さを、入力したテキストの長さに基づいて自動的に拡大する場合に選択します。",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "質問コメントとテキスト(長文)の質問のみ。",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "カスタム変数は、フォーム計算で使用される中間変数または補助変数として機能します。回答者の入力をソース値として受け取ります。各カスタム変数には、一意の名前と基になる式があります。",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "式の計算値をアンケート結果とともに保存する場合に選択します。",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "トリガーは、式に基づくイベントまたは条件です。式が \"true\" と評価されると、トリガーによってアクションが開始されます。このようなアクションには、必要に応じて、影響するターゲットの質問を含めることができます。",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "条件付きロジックによって非表示にされた質問の値をクリアするかどうか、およびいつクリアするかを選択します。",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "次から選択します: \"On lost focus\" - 入力フィールドがフォーカスを失ったときに値が更新されます。「入力中」 - ユーザーが入力しているときに、値がリアルタイムで更新されます。",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "左の値は条件付きルールで使用される列IDとして機能し、右の値は回答者に表示されます。",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "左の値は条件付きルールで使用される行IDとして機能し、右の値は回答者に表示されます。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "CSS 値 (px、%、in、pt など) を受け入れます。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "CSS 値 (px、%、in、pt など) を受け入れます。",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "少なくとも 1 つの列に「集計方法」または「合計値式」で設定された合計値が表示されている場合にのみ表示されます。",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "無効な入力があるセルに関連するエラーメッセージの位置を設定します。「継承」オプションは、「エラーメッセージの配置」プロパティの設定を適用します。",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "詳細セクションにネストされた質問のエラーメッセージの場所を設定します。「継承」オプションは、「エラーメッセージの配置」プロパティの設定を適用します。",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "「重複回答の防止」プロパティが有効な場合、重複したエントリを送信しようとする回答者は、次のエラーメッセージを受け取ります。",
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "マトリックス列に対して「重複応答の防止」プロパティが有効になっている場合、重複エントリを送信しようとすると、回答者に次のエラーメッセージが表示されます。"
    },
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "式に基づいて合計値を計算できます。式には、基本的な計算 ('{q1_id} + {q2_id}')、ブール式 ('{age} > 60')、関数 ('iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' など) を含めることができます。",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "指定した列に同じ値が含まれている場合、調査は「一意でないキー値」エラーをスローします。",
    // "Type a subtitle."
    description: "字幕を入力します。",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "言語を選択してアンケートの作成を開始します。翻訳を追加するには、新しい言語に切り替えて、ここまたは [翻訳] タブで元のテキストを翻訳します。",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "行を基準にした詳細セクションの位置を設定します。次から選択します: \"None\" - 展開は追加されません。\"Under the row\" - 行列の各行の下に行展開が配置されます。\"Under the row, display one row expansion only\" - 展開は 1 行の下にのみ表示され、残りの行展開は折りたたまれます。",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "次から選択: 「なし」 - 画像は元のサイズを維持します。\"Contain\" - 画像はアスペクト比を維持しながらサイズ変更されます。「表紙」-画像は縦横比を維持しながらボックス全体を埋めます。\"Fill\" - 画像は、アスペクト比を維持せずにボックスを埋めるように引き伸ばされます。",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "データの入力中に入力フィールドの高さを徐々に増やします。「入力フィールドの高さ(行単位)」の設定を上書きします。",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "「継承」オプションは、アンケートレベルの設定を適用します(デフォルトでは「有効」)。",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "アンケートが「ありがとう」ページに自動的に進むまでの秒単位の時間間隔。0 に設定すると、アンケートに費やされた時間をカウントします。",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "アンケートが自動的に次のページに進むまでの時間間隔(秒単位)。「前へ」ナビゲーションボタンを非表示にします。0 に設定すると、現在のページで費やされた時間をカウントします。",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "このオプションを有効にすると、ユーザーが空の入力フィールドに注目し、変更を加えずにそのフィールドを離れたときに検証がトリガーされます。",
    page: {
      // "A page ID that is not visible to respondents."
      name: "回答者に表示されないページID。",
      // "Type a page subtitle."
      description: "ページのサブタイトルを入力します。",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "進行状況バーまたは目次 (TOC) のナビゲーション ボタンに表示されるキャプション。このフィールドを空のままにすると、ナビゲーション ボタンはページ タイトルまたはページ名を使用します。プログレスバーまたは目次を有効にするには、「アンケート」→「ナビゲーション」に移動します。",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "アンケートが次のページに自動進むまでの時間間隔 (秒単位)。",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "魔法の杖アイコンを使用して、ページの表示を決定する条件付きルールを設定します。",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "魔法の杖アイコンを使用して、ページの読み取り専用モードを無効にする条件付きルールを設定します。",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "このページ内のすべての質問に適用されます。この設定を上書きする場合は、個々の質問またはパネルのタイトル配置ルールを定義します。「継承」オプションは、アンケートレベルの設定(デフォルトでは「トップ」)を適用します。",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "質問タイトルが質問ボックスの左側に配置されている場合に、質問タイトルの幅を一定に設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。「継承」オプションは、アンケートレベルの設定(デフォルトでは「トップ」)を適用します。",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "質問の元の順序を維持するか、ランダム化します。「継承」オプションは、アンケートレベルの設定(デフォルトでは「オリジナル」)を適用します。この設定の効果は、「プレビュー」タブにのみ表示されます。",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "ページ上のナビゲーションボタンの表示を設定します。「継承」オプションは、アンケートレベルの設定を適用し、デフォルトは「表示」です。",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "このテーブルでは、ページ上の各グリッド列を構成できます。行内の要素の最大数に基づいて、各列の幅の割合が自動的に設定されます。グリッドレイアウトをカスタマイズするには、これらの値を手動で調整し、各列のすべての質問のタイトル幅を定義します。"
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "ページ上のタイマーの位置を設定します。",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "次から選択します: 「ロック」 - ユーザーはパネルを展開または折りたたむことはできません。\"Collapse all\" - すべてのパネルが折りたたまれた状態で開始されます。\"Expand all\" - すべてのパネルが展開された状態で開始されます。\"First expanded\" - 最初のパネルのみが最初に展開されます。",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "選択リストに表示する画像またはビデオ ファイルの URL を含むオブジェクトの配列内に共有プロパティ名を入力します。",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "左の値は条件付きルールで使用される項目IDとして機能し、右の値は回答者に表示されます。",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "表示するわかりやすいタイトルを入力します。",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "ファイルがアップロードされるまで、ユーザーが調査を完了しないようにします。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "CSS 値 (px、%、in、pt など) を受け入れます。",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "CSS 値 (px、%、in、pt など) を受け入れます。",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "CSS 値 (px、%、in、pt など) を受け入れます。",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "結合識別子は、複数の質問に割り当ててリンクし、値を同期できるカスタム キーです。これらの値は 1 つの配列またはオブジェクトにマージされ、キーをプロパティ名として使用して調査結果に格納されます。",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "HTML の質問、および質問の値が空の場合にアンケート要素の動的なタイトルと説明に表示される値。",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "単一選択および複数選択の質問タイプでは、各選択肢にIDと表示値があります。この設定を選択すると、HTML の質問やアンケート エレメントの動的なタイトルと説明に ID 値ではなく表示値が表示されます。",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "条件付きロジックで非表示にした質問値をクリアするかどうか、およびいつクリアするかを選択します。「継承」オプションは、アンケートレベルの設定(デフォルトでは「アンケート完了時」)を適用します。",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "選択元: 「すべて」 - 選択した質問からすべての選択肢をコピーします。\"Selected\" - 選択した選択肢オプションのみを動的にコピーします。「未選択」 - 選択されていない選択肢オプションのみを動的にコピーします。「なし」と「その他」のオプションは、ソースの質問で有効になっている場合、デフォルトでコピーされます。",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "単一選択問題タイプと複数選択問題タイプでは、各選択肢オプションにIDと表示値があります。この設定では、どの行列列またはパネルの質問がIDを提供するかを指定します。",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "単一選択問題タイプと複数選択問題タイプでは、各選択肢オプションにIDと表示値があります。この設定では、表示テキストを提供する行列列またはパネルの質問を指定します。",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "選択すると、回答者は、目的のオプションがドロップダウンにない場合に、独自の選択肢を追加できます。カスタム選択は、現在のブラウザセッションの期間中のみ一時的に保存されます。",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "選択すると、ユーザーは別のコメント ボックスに追加の入力を含めることができます。",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "各特殊選択オプション(「なし」、「その他」、「すべて選択」)を、複数列のレイアウトを使用している場合でも、新しい行に表示します。",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "サービス データセット内で、オブジェクトのターゲット配列が配置されている場所を指定します。URL が既に配列を指している場合は、空のままにします。",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "選択リストに表示する値を含むオブジェクトの配列内に、統一プロパティ名を入力します。",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "選択すると、サービスが空の応答または配列を返すことができます。",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "魔法の杖アイコンを使用して、すべての選択肢オプションの表示を決定する条件付きルールを設定します。",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "左の値は条件付きルールで使用される項目IDとして機能し、右の値は回答者に表示されます。",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "「自動」は、使用可能な幅に基づいて「ボタン」モードと「ドロップダウン」モードのいずれかを選択します。幅がボタンを表示するのに不十分な場合、質問にはドロップダウンが表示されます。"
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "さまざまな形式で結果を生成する質問を接続できます。このような質問が結合識別子を使用してリンクされている場合、この共有プロパティには選択された質問値が格納されます。",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "ドロップダウンメニューの内容を更新して、ユーザーが入力フィールドに入力している検索クエリに一致させる場合に選択します。",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "回答者が肯定的な回答をした場合にアンケート結果に保存する値。",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "回答者が否定的な回答をした場合にアンケート結果に保存する値。",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "このオプションはプレビュー画像を上書きし、ファイルがアップロードされたかどうかをユーザーが理解しにくくなるため、無効にすることはお勧めしません。",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "ファイルの削除を確認するプロンプトを表示します。",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "選択した選択肢のみをランク付けできるようにします。ユーザーは、選択した項目を選択リストからドラッグして、ランキング領域内で並べ替えます。",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "入力時に回答者に提案される選択肢のリストを入力します。",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "この設定では、入力フィールドのサイズが変更されるだけで、質問ボックスの幅には影響しません。",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "すべてのアイテムラベルに一貫した幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "フィールド内で入力値を揃える方法を選択します。デフォルト設定の「自動」では、通貨または数値のマスキングが適用されている場合は入力値が右に、適用されていない場合は左に揃えられます。",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "ユーザーのデバイスに画像を表示できない場合や、アクセシビリティの目的で代用します。",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "レーティングアイコンの種類が「スマイリー」に設定されている場合に選択した絵文字の色を定義します。以下から選択します: \"デフォルト\" - 選択した絵文字はデフォルトのアンケートカラーで表示されます。「スケール」 - 選択した絵文字は、評価スケールから色を継承します。",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "回答者に表示されない式 ID。",
      // "Type an expression subtitle."
      description: "エクスプレッションのサブタイトルを入力します。",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "式には、基本的な計算 ('{q1_id} + {q2_id}')、条件 ('{age} > 60')、関数 ('iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' など) を含めることができます。"
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "「その他」オプションの値をアンケート結果に別のプロパティとして保存する場合に選択します。",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "{0} を実際の値のプレースホルダーとして使用します。",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "詳細については、[accept](https://www.w3schools.com/tags/att_input_accept.asp) 属性の説明を参照してください。",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "選択肢を複数列のレイアウトに配置します。0 に設定すると、オプションが 1 行に表示されます。「���ル���力タイプ」がラジオボタングループまたはチェックボックスに設定されている列にのみ適用されます。",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "ユーザーのブラウザーが取得できるデータ型を選択します。このデータは、ユーザーが入力した過去の値、またはオートコンプリート用にユーザーが保存した事前構成された値から取得されます。",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "「ソースタイプ」が「ローカルファイル」の場合、またはカメラが利用できない場合に適用されます",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "「ソースタイプ」が「カメラ」の場合に適用されます。",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "「ソースタイプ」が「ローカルファイルまたはカメラ」の場合に適用されます。",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "選択オプションを複数列のレイアウトで配置します。0 に設定すると、オプションは 1 行で表示されます。",
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "テキストボックスを複数列レイアウトに配置します。"
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "マスクを適用した質問値をアンケート結果に保存する場合に選択します。"
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "パターンには、文字列リテラルと次のプレースホルダーを含めることができます: '9' - 数字の場合。'a' - 大文字または小文字。'#' - 数字または大文字または小文字。文字をエスケープするには、バックスラッシュ '\\' を使用します。"
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "パターンには、区切り文字と次のプレースホルダーを含めることができます<br>:'m' - 月番号。<br>'mm' - 月番号 (先頭に 0 を付けて 1 桁の値)。<br>'d' - 日付。<br>'dd' - 日付で、1 桁の値の先頭に 0 が付きます。<br>'yy' - 年の最後の 2 桁。<br>'yyyy' - 4 桁の年。<br>'H' - 24 時間形式の時間。<br>'HH' - 24 時間形式の時間で、1 桁の値の先頭に 0 が付きます。<br>'h' - 12 時間形式の時間。<br>'hh' - 12 時間形式の時間で、1 桁の値の先頭に 0 が付きます。<br>'MM' - 分。<br>'ss' - 秒。<br>'TT' - 大文字の 12 時間制 (AM/PM)。<br>'tt' - 小文字の 12 時間制 (am/pm)。"
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "表示される数値の小数部と整数部を区切るために使用される記号。",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "大きな数字を 3 つのグループに区切るために使用される記号。",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "表示される数値の小数点以下の桁数を制限します。"
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "値の前に表示される 1 つまたは複数のシンボル。",
      // "One or several symbols to be displayed after the value."
      suffix: "値の後に表示される 1 つまたは複数の記号。"
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "この設定は、パネル外の質問にのみ適用されます。",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "主要な調査要素を強調表示する補助色を設定します。",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "調査の背景に対するパネルと質問ボックスの透明度を調整します。",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "調査の背景に対する入力エレメントの透過表示を調整します。",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "すべての長方形要素のコーナー半径を設定します。詳細モードを有効にするのは、入力要素またはパネルと質問ボックスに個々のコーナー半径値を設定する場合です。",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "調査のメインの背景色を設定します。"
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "「コンテナと同じ」オプションは、アンケートが配置されるHTML要素に収まるようにヘッダーコンテンツ領域の幅を自動調整します。",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "調査のタイトルと説明を含むヘッダー領域の幅 (ピクセル単位)。",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "有効にすると、調査の上部がヘッダーの下部に重なります。",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "0 に設定すると、ヘッダーのコンテンツに合わせて高さが自動的に計算されます。"
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "「コンテナと同じ」オプションは、調査が配置されているHTML要素に収まるようにプログレスバーの領域幅を自動調整します。",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "「調査レイアウト」が「1ページにつき1つの入力フィールド」に設定されている場合に使用されます。このレイアウトでは、各入力フィールドが別々のページに表示されるようにマトリックスが分割されています。{rowIndex} プレースホルダーを使用して自動番号を挿入し、{rowTitle} または {rowName} を使用して行のタイトルまたは ID を参照し、{row.columnid} を使用して特定の行列列の値を含めます。"
  },
  // Properties
  p: {
    title: {
      // [Auto-translated] "title"
      name: "タイトル",
      // "Leave it empty, if it is the same as 'Name'"
      title: "「名前」と同じ場合は空白のままにしてください"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "複数選択を許可",
    // [Auto-translated] "Show image and video captions"
    showLabel: "画像と動画のキャプションを表示する",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "「はい」と「いいえ」の順序を入れ替える",
    // [Auto-translated] "Value"
    value: "価値",
    // [Auto-translated] "Tab alignment"
    tabAlign: "タブの配置",
    // [Auto-translated] "File source type"
    sourceType: "ファイルソースタイプ",
    // [Auto-translated] "Fit to container"
    fitToContainer: "コンテナにフィット",
    // [Auto-translated] "Set value expression"
    setValueExpression: "設定値式",
    // [Auto-translated] "Description"
    description: "形容", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "ロゴフィット",
    // [Auto-translated] "Pages"
    pages: "ページ", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "問", // Auto-generated string
    // [Auto-translated] "Triggers"
    triggers: "トリガー",
    // [Auto-translated] "Custom variables"
    calculatedValues: "カスタム変数",
    // [Auto-translated] "Survey id"
    surveyId: "アンケート ID", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "アンケート投稿 ID", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "測量ショーのデータ保存", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "質問の説明の配置",
    // [Auto-translated] "Progress bar type"
    progressBarType: "進行状況バーの種類", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "目次 (TOC) を表示",
    // [Auto-translated] "TOC alignment"
    tocLocation: "目次アライメント",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "質問のタイトルパターン", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "測量幅モード",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "ブランド情報を表示する", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "ダイナミックテキストでの表示値の使用",
    // [Auto-translated] "Visible if"
    visibleIf: "次の場合に表示", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "デフォルト値式",
    // [Auto-translated] "Required if"
    requiredIf: "次の場合に必要", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "次の場合に値をリセット",
    // [Auto-translated] "Set value if"
    setValueIf: "次の場合に値を設定します",
    // [Auto-translated] "Validation rules"
    validators: "検証ルール",
    // [Auto-translated] "Bindings"
    bindings: "バインド", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "レンダリング形式", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "オリジナルアイテムを添付する", // Auto-generated string
    // [Auto-translated] "Choices"
    choices: "選択肢",
    // [Auto-translated] "Choices by url"
    choicesByUrl: "URL による選択肢", // Auto-generated string
    // [Auto-translated] "Currency"
    currency: "通貨", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "セルヒント", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "最大小数部の合計桁数", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "最小小数桁の合計", // Auto-generated string
    // [Auto-translated] "Columns"
    columns: "列", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "詳細要素", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "アダプティブアクションを許可する", // Auto-generated string
    // [Auto-translated] "Default row value"
    defaultRowValue: "既定の行の値", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "新しい行の詳細を自動展開する",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "遅延読み込みの選択肢が有効", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "選択肢遅延読み込みページ・サイズ", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "入力フィールドコンポーネント", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "アイテムコンポーネント", // Auto-generated string
    // [Auto-translated] "Min"
    min: "分", // Auto-generated string
    // [Auto-translated] "Max"
    max: "マックス", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "最小値の式", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "最大値式", // Auto-generated string
    // [Auto-translated] "Step"
    step: "歩", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "自動提案の項目",
    // [Auto-translated] "Input field width (in characters)"
    inputSize: "入力フィールド幅 (文字)",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "アイテムラベルの幅",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "入力値の配置",
    // [Auto-translated] "Elements"
    elements: "元素", // Auto-generated string
    // [Auto-translated] "Content"
    content: "コンテンツ", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "ナビゲーション タイトル", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "ナビゲーションの説明", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "ロングタップ", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "入力フィールドを動的に展開する",
    // [Auto-translated] "Enable resize handle"
    allowResize: "サイズ変更ハンドルを有効にする",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "キャリッジリターンを受け入れる", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "表示モード",
    // [Auto-translated] "Rate type"
    rateType: "レートタイプ", // Auto-generated string
    // [Auto-translated] "Label"
    label: "ラベル", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "コンテンツモード",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "画像とサムネイルのフィット感",
    // [Auto-translated] "Alt text"
    altText: "代替テキスト",
    // [Auto-translated] "Height"
    height: "高さ", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "スマートフォンでの高さ",
    // [Auto-translated] "Pen color"
    penColor: "ペンの色", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "背景色",
    // [Auto-translated] "Template elements"
    templateElements: "テンプレート要素", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "演算子", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "可変", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "実行式", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "キャプションを表示", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "アイコン名", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "アイコンのサイズ", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "精度", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "マトリックスドラッグハンドル領域", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "背景画像",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "背景画像のフィット", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "背景画像の添付", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "背景の不透明度", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "選択的ランク付けを許可する",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "ランキングエリアの配置",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "すべてのオプションが選択されている場合に表示されるテキスト",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "ランキングエリアのプレースホルダーテキスト",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "カメラへのアクセスを許可する", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "レーティングアイコンのカラーモード",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "スマイリーの配色",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "表示値をコピー", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "列スパン",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "プログレスバー領域の幅",
    // [Auto-translated] "Theme name"
    themeName: "テーマ名"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "詳細モード",
    // "Page"
    pageTitle: "ページタイトルのフォント",
    // "Question box"
    questionTitle: "質問タイトルのフォント",
    // "Input element"
    editorPanel: "入力要素",
    // [Auto-translated] "Lines"
    lines: "台詞",
    // [Auto-translated] "Default"
    primaryDefaultColor: "デフォルト",
    // [Auto-translated] "Hover"
    primaryDarkColor: "ホバー",
    // [Auto-translated] "Selected"
    primaryLightColor: "入選",
    // [Auto-translated] "Background color"
    backgroundDimColor: "背景色",
    // "Corner radius"
    cornerRadius: "コーナR(Corner Radius)",
    // [Auto-translated] "Default background"
    backcolor: "デフォルトの背景",
    // [Auto-translated] "Hover background"
    hovercolor: "ホバー背景",
    // [Auto-translated] "Border decoration"
    borderDecoration: "ボーダーデコレーション",
    // [Auto-translated] "Font color"
    fontColor: "フォントの色",
    // [Auto-translated] "Background color"
    backgroundColor: "背景色",
    // [Auto-translated] "Default color"
    primaryForecolor: "デフォルトの色",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "無効色",
    // [Auto-translated] "Font"
    font: "フォント",
    // [Auto-translated] "Darker"
    borderDefault: "暗い",
    // [Auto-translated] "Lighter"
    borderLight: "ライター",
    // [Auto-translated] "Font family"
    fontFamily: "フォントファミリー",
    // [Auto-translated] "Regular"
    fontWeightRegular: "レギュラー",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "重い",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "半太字",
    // [Auto-translated] "Bold"
    fontWeightBold: "ボールド",
    // [Auto-translated] "Color"
    color: "色",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "プレースホルダーの色",
    // [Auto-translated] "Size"
    size: "大きさ",
    // [Auto-translated] "Opacity"
    opacity: "不透明",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "シャドウ効果を追加",
    // [Auto-translated] "Blur"
    boxShadowBlur: "滲む",
    // [Auto-translated] "Spread"
    boxShadowSpread: "まん延",
    // [Auto-translated] "Drop"
    boxShadowDrop: "落とす",
    // [Auto-translated] "Inner"
    boxShadowInner: "内的",
    names: {
      // [Auto-translated] "Default"
      default: "デフォルト",
      // [Auto-translated] "Sharp"
      sharp: "鋭い",
      // [Auto-translated] "Borderless"
      borderless: "ボーダレス",
      // [Auto-translated] "Flat"
      flat: "平",
      // [Auto-translated] "Plain"
      plain: "平地",
      // [Auto-translated] "Double Border"
      doubleborder: "二重ボーダー",
      // [Auto-translated] "Layered"
      layered: "層状",
      // [Auto-translated] "Solid"
      solid: "固体",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "対照"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "小鴨",
      // [Auto-translated] "Blue"
      blue: "青い",
      // [Auto-translated] "Purple"
      purple: "紫",
      // [Auto-translated] "Orchid"
      orchid: "蘭",
      // [Auto-translated] "Tulip"
      tulip: "チューリップ",
      // [Auto-translated] "Brown"
      brown: "褐色",
      // [Auto-translated] "Green"
      green: "緑",
      // [Auto-translated] "Gray"
      gray: "灰色"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "サーフェスの背景",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "原発",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "付帯",
    // [Auto-translated] "Surface"
    surfaceScale: "表面",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "UI 要素",
    // [Auto-translated] "Font"
    fontScale: "フォント",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "サーベイクリエーター2020",
      // [Auto-translated] "Light"
      "default-light": "光",
      // [Auto-translated] "Dark"
      "default-dark": "暗い",
      // [Auto-translated] "Contrast"
      "default-contrast": "対照"
    }
  }
};

setupLocale({ localeCode: "ja", strings: jaStrings });