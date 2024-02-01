import { editorLocalization } from "survey-creator-core";

export var jaStrings = {
  // survey templates
  survey: {
    edit: "編集",
    externalHelpLink: "アンケートの作成方法を見て学ぶ",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "ツールボックスからここに質問をドロップしてください。",
    addLogicItem: "アンケートの流れをカスタマイズするルールを作成します。",
    copy: "コピー",
    duplicate: "複製",
    addToToolbox: "ツールボックスに追加する",
    deletePanel: "パネルを削除する",
    deleteQuestion: "質問を削除する",
    convertTo: "に変換する",
    drag: "要素をドラッグする",
  },
  // Question types
  qt: {
    default: "デフォルト",
    checkbox: "チェックボックス",
    comment: "コメント",
    imagepicker: "画像ピッカー",
    ranking: "ランキング",
    image: "画像",
    dropdown: "ドロップダウン",
    tagbox: "複数選択ドロップダウン",
    file: "ファイル",
    html: "HTML",
    matrix: "マトリックス（単一選択）",
    matrixdropdown: "マトリックス（多項選択）",
    matrixdynamic: "マトリックス（動的行）",
    multipletext: "複数のテキスト",
    panel: "パネル",
    paneldynamic: "パネル（動的パネル）",
    radiogroup: "ラジオグループ",
    rating: "評価",
    text: "単一入力",
    boolean: "ブール",
    expression: "式（読み取り専用）",
    signaturepad: "署名パッド",
    buttongroup: "ボタングループ"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "デフォルト（{0}）",
    survey: "アンケート",
    settings: "アンケートの設定",
    settingsTooltip: "アンケートの設定を開く",
    surveySettings: "アンケート設定",
    surveySettingsTooltip: "アンケート設定を開く",
    themeSettings: "テーマ設定",
    themeSettingsTooltip: "テーマ設定を開く",
    showPanel: "パネルを表示する",
    hidePanel: "パネルを非表示にする",
    prevSelected: "前を選択",
    nextSelected: "[次へ] を選択します。",
    prevFocus: "前に焦点を合わせる",
    nextFocus: "次の焦点",
    surveyTypeName: "アンケート",
    pageTypeName: "ページ",
    panelTypeName: "パネル",
    questionTypeName: "質問",
    columnTypeName: "コラム",
    addNewPage: "新規ページを追加する",
    moveRight: "右にスクロールする",
    moveLeft: "左にスクロールする",
    deletePage: "ページを削除する",
    editPage: "ページを編集する",
    edit: "編集",
    newPageName: "ページ",
    newQuestionName: "質問",
    newPanelName: "パネル",
    newTextItemName: "テキスト",
    testSurvey: "アンケートをテストする",
    themeSurvey: "テーマ",
    defaultV2Theme: "デフォルト",
    modernTheme: "モダン",
    defaultTheme: "デフォルト (レガシー)",
    testSurveyAgain: "アンケートを再度テストする",
    testSurveyWidth: "アンケートの幅： ",
    navigateToMsg: "次の場所に移動する必要がありました：",
    logic: "アンケートのロジック",
    embedSurvey: "アンケートを埋め込む",
    translation: "翻訳",
    saveSurvey: "アンケートを保存する",
    saveSurveyTooltip: "アンケートを保存する",
    saveTheme: "テーマを保存",
    saveThemeTooltip: "テーマを保存",
    designer: "アンケートの設計者",
    jsonEditor: "JSONエディタ",
    jsonHideErrors: "エラーを隠す",
    jsonShowErrors: "エラーを表示",
    undo: "元に戻す",
    redo: "やり直す",
    undoTooltip: "最後の変更を元に戻す",
    redoTooltip: "変更をやり直す",
    showMoreChoices: "さらに表示",
    showLessChoices: "表示を減らす",
    copy: "コピー",
    cut: "カット",
    paste: "貼り付ける",
    copyTooltip: "選択範囲をクリップボードにコピーする",
    cutTooltip: "選択範囲をクリップボードにカットする",
    pasteTooltip: "クリップボードから貼り付ける",
    options: "オプション",
    generateValidJSON: "有効なJSONを生成する",
    generateReadableJSON: "読み取り可能なJSONを生成する",
    toolbox: "ツールボックス",
    "property-grid": "プロパティ",
    propertyGridFilteredTextPlaceholder: "検索するタイプ...",
    propertyGridNoResultsFound: "結果が見つかりませんでした",
    toolboxGeneralCategory: "一般",
    toolboxChoiceCategory: "選択の質問",
    toolboxTextCategory: "テキスト入力の質問",
    toolboxContainersCategory: "コンテナー",
    toolboxMatrixCategory: "マトリックスの質問",
    toolboxMiscCategory: "雑貨",
    correctJSON: "JSONを修正してください。",
    surveyResults: "アンケート結果： ",
    surveyResultsTable: "表として",
    surveyResultsJson: "JSONとして",
    resultsTitle: "質問のタイトル",
    resultsName: "質問名",
    resultsValue: "回答値",
    resultsDisplayValue: "表示値",
    modified: "修正済み",
    saving: "保存",
    saved: "保存済み",
    propertyEditorError: "エラー：",
    saveError: "エラー！ エディタのコンテンツは保存されません。",
    translationPropertyGridTitle: "言語設定",
    themePropertyGridTitle: "テーマ設定",
    translationLanguages: "言語",
    translationDeleteLanguage: "この言語のすべての文字列を削除してもよろしいですか?",
    translationAddLanguage: "翻訳する言語を選択する",
    translationShowAllStrings: "すべての文字列を表示する",
    translationShowUsedStringsOnly: "使用される文字列のみ",
    translationShowAllPages: "すべてのページを表示する",
    translationNoStrings: "翻訳する文字列がありません。フィルターを変更してください。",
    translationExportToSCVButton: "CSVにエクスポートする",
    translationImportFromSCVButton: "CSVからインポートする",
    translateUsigAI: "すべて自動翻訳",
    translateUsigAIFrom: "言語の選択：",
    translationDialogTitle: "未翻訳の文字列",
    translationMergeLocaleWithDefault: "{0}をデフォルトのロケールにマージする",
    translationPlaceHolder: "翻訳。。。",
    themeExportButton: "輸出",
    themeImportButton: "輸入",
    surveyJsonExportButton: "輸出",
    surveyJsonImportButton: "輸入",
    surveyJsonCopyButton: "クリップボードにコピー",
    themeResetButton: "テーマ設定をデフォルトにリセットする",
    themeResetConfirmation: "本当にテーマをリセットしますか?すべてのカスタマイズが失われます。",
    themeResetConfirmationOk: "はい、テーマをリセットします",
    bold: "太字",
    italic: "イタリック",
    underline: "下線",
    addNewQuestion: "質問を追加",
    selectPage: "ページを選択...",
    carryForwardChoicesCopied: "選択肢は",
    choicesLoadedFromWebText: "選択肢は Web サービスから読み込まれます。",
    choicesLoadedFromWebLinkText: "設定に移動",
    choicesLoadedFromWebPreviewTitle: "読み込まれた選択肢オプションのプレビュー",
    htmlPlaceHolder: "HTMLコンテンツはここにあります。",
    panelPlaceHolder: "ここにツールボックスから質問をドロップします。",
    surveyPlaceHolder: "アンケートは空です。ツールボックスから要素をドラッグするか、下のボタンをクリックします。",
    imagePlaceHolder: "ここに画像をドラッグ&ドロップするか、下のボタンをクリックしてアップロードする画像を選択してください",
    imageChooseImage: "画像を選択",
    addNewTypeQuestion: "{0}を追加", //{0} is localizable question type
    chooseLogoPlaceholder: "[ロゴ]",
    auto: "自動",
    choices_Item: "アイテム",
    lg: {
      addNewItem: "新しいルールを追加",
      empty_tab: "調査のフローをカスタマイズするルールを作成します。",
      page_visibilityName: "ページの可視性",
      page_enableName: "有効 (無効) ページ",
      page_requireName: "ページを必須にする",
      panel_visibilityName: "パネルの可視性",
      panel_enableName: "パネルの有効化/無効化",
      panel_requireName: "ページを必須にする",
      question_visibilityName: "質問の可視性",
      question_enableName: "質問の有効化/無効化",
      question_requireName: "質問オプションが必要",
      question_resetValueName: "質問値のリセット",
      question_setValueName: "質問値の設定",
      column_visibilityName: "列を表示 (非表示)",
      column_enableName: "有効 (無効) 列",
      column_requireName: "列を必須にする",
      column_resetValueName: "列の値をリセット",
      column_setValueName: "列の値を設定する",
      trigger_completeName: "アンケートを完了する",
      trigger_setvalueName: "質問の値を設定する",
      trigger_copyvalueName: "質問の値をコピーする",
      trigger_skipName: "質問にスキップする",
      trigger_runExpressionName: "カスタム式を実行する",
      completedHtmlOnConditionName: "カスタムの「サンキューページ」テキスト",
      page_visibilityDescription: "論理式がtrue（真）を返した場合、ページを表示にします。それ以外の場合は、非表示にしておきます。",
      panel_visibilityDescription: "論理式がtrue（真）を返した場合、パネルを表示にします。それ以外の場合は、非表示にしておきます。",
      panel_enableDescription: "論理式がtrue（真）を返した場合、パネルとその中のすべての要素を有効にします。それ以外の場合は、無効にしておきます。",
      question_visibilityDescription: "論理式がtrue（真）を返した場合、質問を表示にします。それ以外の場合は、非表示にしておきます。",
      question_enableDescription: "論理式がtrue（真）を返した場合、質問を有効にします。それ以外の場合は、無効にしておきます。",
      question_requireDescription: "論理式がtrue（真）を返した場合、質問が必須になります。",
      trigger_completeDescription: "論理式がtrue（真）を返した場合、アンケートが完了し、エンドユーザーに「サンキューページ」が表示されます。",
      trigger_setvalueDescription: "論理式で使用される質問の値が変更され、論理式がtrue（真）を返した場合、その値は選択された質問に設定されます。",
      trigger_copyvalueDescription: "論理式で使用される質問の値が変更され、論理式がtrue（真）を返した場合、選択された1つの質問の値が別の選択された質問にコピーされます。",
      trigger_skipDescription: "論理式がtrue（真）を返した場合、アンケートは選択された質問にスキップ/フォーカスされます。",
      trigger_runExpressionDescription: "論理式がtrue（真）を返した場合、カスタム式が実行されます。オプションで、この式の結果を選択した質問に設定することができます。",
      completedHtmlOnConditionDescription: "論理式がtrue（真）を返した場合、「サンキューページ」のデフォルトテキストは指定されたものに変更されます。",
      itemExpressionText: "式：「{0}」がtrue（真）を返した場合：", //{0} - the expression
      itemEmptyExpressionText: "新しいルール",
      page_visibilityText: "ページ{0}を表示にする", //{0} page name
      panel_visibilityText: "パネル{0}を表示にする", //{0} panel name
      panel_enableText: "パネル{0}を有効にする", //{0} panel name
      question_visibilityText: "質問{0}を表示にする", //{0} question name
      question_enableText: "質問{0}を有効にする", //{0} question name
      question_requireText: "質問{0}を必須にする", //{0} question name
      question_resetValueText: "質問のリセット値:{0}",
      question_setValueText: "値の割り当て: 質問への{1}: {0}",
      column_visibilityText: "質問{1}の列{0}を表示する", //{0} column name, {1} question name
      column_enableText: "質問の列{0}を有効にする{1}", //{0} column name, {1} question name
      column_requireText: "質問{1}の列{0}を必須にする", //{0} column name, {1} question name
      column_resetValueText: "列のセル値をリセット:{0}",
      column_setValueText: "セル値の割り当て:列への{1}:{0}",
      setValueExpressionPlaceholder: "結果が対象の質問に割り当てられる式。",
      trigger_completeText: "アンケートが完了する",
      trigger_setvalueText: "質問：{0}値{1}に設定する", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "明確な質問値:{0}", //{0} question name
      trigger_copyvalueText: "質問{1}から質問：{0}値にコピーする", //{0} and {1} question names
      trigger_skipText: "アンケートは質問{0}にスキップする", //{0} question name
      trigger_runExpressionText1: "式：「{0}」を実行する", //{0} the expression
      trigger_runExpressionText2: " そして、その結果を質問：{0}に設定する", //{0} question name
      completedHtmlOnConditionText: "「サンキューページ」のカスタムテキストを表示します。",
      showAllQuestions: "すべての質問",
      showAllActionTypes: "すべてのアクションタイプ",
      conditions: "条件",
      actions: "アクション",
      expressionEditorTitle: "条件を定義する",
      actionsEditorTitle: "アクションを定義する",
      deleteAction: "アクションを削除する",
      addNewAction: "新しいアクションを追加する",
      selectedActionCaption: "追加するアクションを選択…",
      expressionInvalid: "論理式が空または無効です。修正してください。",
      noActionError: "少なくとも1つのアクションを追加してください。",
      actionInvalid: "アクションの問題を解決してください。",
      uncompletedRule_title: "論理ルールが不完全です",
      uncompletedRule_text: "一部の論理ルールが完了していません。ここでタブを離れると、変更は失われます。変更を完了せずにタブを離れますか?",
      uncompletedRule_apply: "はい",
      uncompletedRule_cancel: "いいえ、ルールを完成させたい"
    }
  },
  // Property Editors
  pe: {
    apply: "適用",
    ok: "OK",
    save: "保存",
    clear: "クリア",
    saveTooltip: "保存",
    cancel: "キャンセル",
    set: "セット",
    reset: "リセット",
    change: "変える",
    refresh: "リフレッシュ",
    close: "閉める",
    delete: "削除",
    add: "追加",
    addNew: "新規追加:",
    addItem: "クリックしてアイテムを追加…",
    removeItem: "クリックしてアイテムを削除します...",
    dragItem: "アイテムをドラッグする",
    addOther: "その他",
    addSelectAll: "すべて選択",
    addNone: "なし",
    removeAll: "すべて削除",
    edit: "編集",
    back: "保存せずに戻る",
    backTooltip: "保存せずに戻る",
    saveAndBack: "保存して戻る",
    saveAndBackTooltip: "保存して戻る",
    doneEditing: "完成です",
    editChoices: "選択肢を編集",
    showChoices: "選択肢を表示",
    move: "移動",
    empty: "<empty>",
    emptyValue: "値が空です",
    fastEntry: "高速入力",
    fastEntryNonUniqueError: "値 '{0}' は一意ではありません",
    fastEntryChoicesCountError: "アイテムの数は{0}から{1}に制限してください",
    fastEntryChoicesMinCountError: "{0}項目以上入力してください",
    fastEntryPlaceholder: "次の形式でデータを設定できます。\n値 1|テキスト\n値 2",
    formEntry: "フォーム入力",
    testService: "サービスをテスト",
    itemSelectorEmpty: "エレメントを選択してください",
    conditionActionEmpty: "アクションを選択してください",
    conditionSelectQuestion: "質問を選択...",
    conditionSelectPage: "ページを選択...",
    conditionSelectPanel: "パネルを選択...",
    conditionValueQuestionTitle: "値を入力/選択してください",
    expressionHelp: "波括弧を使用して質問の値にアクセスできます: {質問1} + {質問2}, ({値段}*{数量}) * (100 - {割引})。iif(), today(), age(), min(), max(), count(), avg() およびその他の関数を使用できます。",
    aceEditorHelp: "表現の補完のヒントを取得するには「ctrl+space」を押してください",
    aceEditorRowTitle: "現在の行",
    aceEditorPanelTitle: "現在のパネル",
    showMore: "詳細は文書をご確認ください",
    assistantTitle: "利用できる質問:",
    cellsEmptyRowsColumns: "少なくとも1つの列または行を含む必要があります",
    showPreviewBeforeComplete: "アンケートを送信する前に回答をプレビューする",
    overridingPropertyPrefix: "設定者",
    resetToDefaultCaption: "リセット",
    propertyIsEmpty: "値を入力してください",
    propertyIsNoUnique: "固有値を入力してください",
    propertyNameIsNotUnique: "固有名を入力してください",
    propertyNameIsIncorrect: "予約語は使用しないでください: \"アイテム\"、 \"選択肢\"、 \"パネル\"、 \"行\"。",
    listIsEmpty: "新しいアイテムを追加",
    "listIsEmpty@choices": "選択肢はまだ追加されていません",
    "addNew@choices": "選択肢を追加する",
    expressionIsEmpty: "表現が空白です",
    value: "値",
    text: "テキスト",
    rowid: "行ID",
    imageLink: "画像リンク",
    columnEdit: "行編集: {0}",
    itemEdit: "アイテム編集: {0}",
    url: "URL",
    path: "パス",
    valueName: "値名",
    choicesbyurl: {
      valueName: "次の JSON フィールドから値を取得する"
    },
    titleName: "タイトル名",
    imageLinkName: "次の JSON フィールドから画像の URL を取得する",
    allowEmptyResponse: "空の応答を許可",
    titlePlaceholder: "タイトルを入力",
    surveyTitlePlaceholder: "調査タイトルを入力",
    pageTitlePlaceholder: "ページタイトルを入力",
    descriptionPlaceholder: "詳細を入力",
    surveyDescriptionPlaceholder: "調査の詳細を入力",
    pageDescriptionPlaceholder: "ページの詳細を入力",
    showOtherItem: "他のアイテム",
    otherText: "他のアイテムのテキスト",
    showNoneItem: "ノーアイテム",
    showRefuseItem: "[回答を拒否] オプションを許可する",
    showDontKnowItem: "[わからない] オプションを許可する",
    noneText: "ノーアイテムのテキスト",
    showSelectAllItem: "アイテムを全て選択",
    selectAllText: "アイテムを全て選択のテキスト",
    choicesMin: "自動生成アイテムの最小値",
    choicesMax: "自動生成アイテムの最大値",
    choicesStep: "自動生成アイテムの差",
    name: "名前",
    title: "タイトル",
    cellType: "セルタイプ",
    colCount: "行の数",
    choicesOrder: "選択順",
    visible: "表示",
    isRequired: "必須",
    markRequired: "必須としてマーク",
    removeRequiredMark: "必要なマークを削除する",
    isAllRowRequired: "全ての列で回答必須",
    eachRowUnique: "行での回答の重複を防ぐ",
    requiredErrorText: "必要なエラーテキスト",
    startWithNewLine: "ニューラインで開始",
    rows: "列数",
    cols: "行の数",
    placeholder: "プレースホルダの入力",
    showPreview: "プレビューエリア表示",
    storeDataAsText: "ファイルのコンテンツをテキストとしてJSONの結果に保存",
    maxSize: "ファイルの最大サイズ（byte）",
    imageHeight: "イメージの高さ",
    imageWidth: "イメージの幅",
    rowCount: "列数",
    columnLayout: "行のレイアウト",
    addRowLocation: "列ボタンのロケーションを追加",
    addRowText: "行ボタンのテキストを追加",
    removeRowText: "行ボタンのテキストを削除",
    rateMin: "最小レート",
    rateMax: "最大レート",
    rateStep: "レートステップ",
    minRateDescription: "最小レートの詳細",
    maxRateDescription: "最大レートの説明",
    inputType: "入力タイプ",
    optionsCaption: "オプションのキャプション",
    defaultValue: "デフォルト値",
    cellsDefaultRow: "デフォルトのセルテキスト",
    surveyEditorTitle: "アンケート設定を編集する",
    qEditorTitle: "編集： {0}",
    maxLength: "最大長",
    buildExpression: "構築する",
    editExpression: "編集",
    and: "そして",
    or: "又は",
    remove: "削除する",
    addCondition: "条件を追加する",
    emptyLogicPopupMessage: "質問を選択して、条件の設定を開始します。",
    if: "もし",
    then: "そうしたら",
    setToName: "ターゲットの質問",
    fromName: "回答をコピーする質問",
    gotoName: "スキップする質問",
    ruleIsNotSet: "ルールが正しくありません",
    includeIntoResult: "アンケート結果に含める",
    showTitle: "タイトルの表示/非表示",
    expandCollapseTitle: "タイトルを展開/折りたたむ",
    locale: "デフォルトの言語",
    simulator: "デバイスを選択する",
    landscapeOrientation: "横向き",
    portraitOrientation: "縦向きに切り替える",
    mode: "モード（編集/読み取り専用）",
    clearInvisibleValues: "非表示の値をクリアする",
    cookieName: "Cookie名（ローカルで2回アンケートを実行しないようにするため）",
    sendResultOnPageNext: "次のページにアンケート結果を送信する",
    storeOthersAsComment: "「その他」の値を別のフィールドに保存する",
    showPageTitles: "ページタイトルを表示する",
    showPageNumbers: "ページ番号を表示する",
    pagePrevText: "「前のページへ」ボタンのテキスト",
    pageNextText: "「次のページへ」ボタンのテキスト",
    completeText: "「完了」ボタンのテキスト",
    previewText: "「プレビュー」ボタンのテキスト",
    editText: "「編集」ボタンのテキスト",
    startSurveyText: "「開始」ボタンのテキスト",
    showNavigationButtons: "ナビゲーションボタンを表示する（デフォルトのナビゲーション）",
    showPrevButton: "「前へ」ボタンを表示する（ユーザーは前のページに戻ることができます）",
    firstPageIsStarted: "アンケートの最初のページは、開始ページです。",
    showCompletedPage: "完了したページを最後に表示する（completedHtml）",
    goNextPageAutomatic: "すべての質問に回答すると、自動的に次のページに移動します",
    showProgressBar: "プログレスバーを表示する",
    questionTitleLocation: "質問のタイトルの場所",
    requiredText: "質問には記号が必要",
    questionStartIndex: "質問開始インデックス（1、2または「A」、「a」）",
    showQuestionNumbers: "質問番号を表示する",
    questionTitleTemplate: "質問タイトルのテンプレート、デフォルトは「{no}. {require} {title}」です",
    questionErrorLocation: "質問エラーの場所",
    focusFirstQuestionAutomatic: "ページを変える際に最初の質問に焦点を合わせる",
    questionsOrder: "ページ上の要素の順序",
    maxTimeToFinish: "アンケート終了までの最長時間",
    maxTimeToFinishPage: "アンケートの1ページを終了するまでの最長時間",
    image: {
      imageHeight: "画像の高さ (CSS で受け入れられる値)",
      imageWidth: "画像の幅 (CSS で受け入れられる値)"
    },
    // survey templates
    survey: {
      title: "タイトル"
    },
    page: {
      title: "タイトル",
      maxTimeToFinish: "ページを終了するための制限時間 (秒単位)"
    },
    question: {
      page: "親ページ"
    },
    showTimerPanel: "タイマーパネルを表示する",
    showTimerPanelMode: "タイマーパネルモードを表示",
    renderMode: "レンダーモード",
    allowAddPanel: "パネルの追加を許可",
    allowRemovePanel: "パネルの削除を許可",
    noEntriesText: "空のエントリのテキスト",
    panelAddText: "パネルテキストを追加しています",
    panelRemoveText: "パネルテキストを削除しています",
    isSinglePage: "1ページ上にすべてのエレメントを表示",
    html: "HTML",
    expression: "表現",
    setValue: "答える",
    dataFormat: "画像フォーマット",
    allowAddRows: "行の追加を許可する",
    allowRemoveRows: "行の削除を許可する",
    allowRowsDragAndDrop: "行のドラッグ アンド ドロップを許可する",
    responsiveImageSizeHelp: "正確な画像の幅または高さを指定した場合には適用されません。",
    minImageWidth: "最小画像幅",
    maxImageWidth: "最大画像幅",
    minImageHeight: "最小画像の高さ",
    maxImageHeight: "最大画像の高さ",
    minValue: "最小値",
    maxValue: "最大値",
    minLength: "最小長",
    allowDigits: "数字を許可",
    minCount: "最小数",
    maxCount: "最大数",
    regex: "正規表現",
    surveyvalidator: {
      text: "エラーメッセージ",
      expression: "検証式"
    },
    totalText: "テキストの合計",
    totalType: "タイプの合計",
    totalExpression: "表現の合計",
    totalDisplayStyle: "表示スタイルの合計",
    totalCurrency: "通貨の合計",
    totalFormat: "形式の合計",
    logo: "ロゴ (URL または base64 でエンコードされた文字列)",
    questionsOnPageMode: "調査体制",
    maxTextLength: "回答の最大長 (文字数)",
    maxOthersLength: "コメントの最大長 (文字数)",
    autoGrowComment: "必要に応じてコメント領域を自動展開する",
    allowResizeComment: "ユーザーがテキスト領域のサイズを変更できるようにする",
    textUpdateMode: "テキストの質問値を更新する",
    focusOnFirstError: "最初の無効な回答にフォーカスを設定する",
    checkErrorsMode: "検証の実行",
    navigateToUrl: "URL に移動します。",
    navigateToUrlOnCondition: "ダイナミック URL",
    completedBeforeHtml: "ユーザーがこのアンケートに既に記入しているかどうかを示すマークアップ",
    completedHtml: "アンケート完了ページのマークアップ",
    completedHtmlOnCondition: "動的調査 完全なページ マークアップ",
    loadingHtml: "アンケートモデルの読み込み中に表示するマークアップ",
    commentText: "コメント領域のテキスト",
    autocomplete: "オートコンプリートの種類",
    labelTrue: "「真の」ラベル",
    labelFalse: "「虚偽」ラベル",
    allowClear: "オプションのキャプションを表示する",
    displayStyle: "値の表示スタイル",
    format: "書式設定された文字列",
    maximumFractionDigits: "小数部の最大数桁数",
    minimumFractionDigits: "小数部の最小桁数",
    useGrouping: "グループ化区切りの表示",
    allowMultiple: "複数のファイルを許可する",
    allowImagesPreview: "プレビュー画像",
    acceptedTypes: "受け入れられるファイルの種類",
    waitForUpload: "アップロードが完了するのを待ちます",
    needConfirmRemoveFile: "ファイルの削除を確認する",
    detailPanelMode: "詳細パネルの位置",
    minRowCount: "最小行数",
    maxRowCount: "最大行数",
    confirmDelete: "行の削除を確認する",
    confirmDeleteText: "確認メッセージ",
    paneldynamic: {
      confirmDelete: "パネルの削除を確認する"
    },
    panelCount: "初期パネル数",
    minPanelCount: "最小パネル数",
    maxPanelCount: "最大パネル数",
    panelsState: "内側パネルの展開状態",
    templateDescription: "説明テンプレート",
    templateTitle: "タイトルテンプレート",
    panelPrevText: "前のパネルボタンのツールチップ",
    panelNextText: "[次へ] パネル ボタンのツールチップ",
    showRangeInProgress: "進行状況バーを表示する",
    templateTitleLocation: "質問タイトルの場所",
    panelRemoveButtonLocation: "[パネルを削除] ボタンの位置",
    hideIfRowsEmpty: "行がない場合は質問を非表示にする",
    hideColumnsIfEmpty: "行がない場合は列を非表示にする",
    rateValues: "カスタムレート値",
    rateCount: "レート数",
    autoGenerate: "レート値を指定する方法は?",
    hideIfChoicesEmpty: "選択肢がない場合は質問を非表示にする",
    hideNumber: "質問番号を隠す",
    minWidth: "最小幅 (CSS で受け入れられる値)",
    maxWidth: "最大幅 (CSS で受け入れられる値)",
    width: "幅 (CSS で受け入れられる値)",
    showHeader: "列ヘッダーを表示する",
    horizontalScroll: "水平スクロールバーを表示",
    columnMinWidth: "最小列幅 (CSS で受け入れられる値)",
    rowTitleWidth: "行ヘッダーの幅 (CSS で受け入れられる値)",
    valueTrue: "「真」の値",
    valueFalse: "\"偽\" の値",
    minErrorText: "\"値が最小値を下回っています\" というエラー メッセージ",
    maxErrorText: "\"値が最大値を超えています\" というエラー メッセージ",
    otherErrorText: "「コメントを空にしました」というエラーメッセージ",
    keyDuplicationError: "\"一意でないキー値\" エラー メッセージ",
    minSelectedChoices: "選択される最小選択肢",
    maxSelectedChoices: "最大選択選択肢数",
    showClearButton: "[クリア] ボタンを表示する",
    showNumber: "パネル番号を表示",
    logoWidth: "ロゴの幅 (CSS で受け入れられる値)",
    logoHeight: "ロゴの高さ (CSS で受け入れられる値)",
    readOnly: "読み取り専用",
    enableIf: "次の場合に編集可能",
    emptyRowsText: "\"行なし\" メッセージ",
    size: "入力フィールドのサイズ (文字数)",
    separateSpecialChoices: "個別の特別な選択肢 (なし、その他、すべて選択)",
    choicesFromQuestion: "次の質問から選択肢をコピーする",
    choicesFromQuestionMode: "どの選択肢をコピーするか?",
    showCommentArea: "コメント領域を表示する",
    commentPlaceholder: "コメント領域のプレースホルダー",
    displayRateDescriptionsAsExtremeItems: "レートの説明を極値として表示する",
    rowsOrder: "行の順序",
    columnsLayout: "列のレイアウト",
    columnColCount: "ネストされた列数",
    state: "パネル展開状態",
    correctAnswer: "正解",
    defaultPanelValue: "デフォルト値",
    cells: "セルテキスト",
    keyName: "キー列",
    itemvalue: {
      text: "代替テキスト"
    },
    logoPosition: "ロゴの位置",
    addLogo: "ロゴを追加...",
    changeLogo: "ロゴを変更...",
    logoPositions: {
      none: "ロゴを削除",
      left: "左",
      right: "右",
      top: "上に",
      bottom: "下に"
    },
    tabs: {
      general: "一般",
      fileOptions: "オプション",
      html: "HTMLエディター",
      columns: "列",
      rows: "行",
      choices: "選択",
      items: "アイテム",
      visibleIf: "以下の場合、見える：",
      enableIf: "以下の場合、有効にする：",
      requiredIf: "以下の場合、必須：",
      rateValues: "レート値",
      choicesByUrl: "ウェブの選択",
      matrixChoices: "デフォルトの選択",
      multipleTextItems: "テキスト入力",
      numbering: "番号付け",
      validators: "バリデータ",
      navigation: "ナビゲーション",
      question: "質問",
      pages: "ページ",
      timer: "タイマー/クイズ",
      calculatedValues: "算出された値",
      triggers: "トリガー",
      templateTitle: "テンプレートタイトル",
      totals: "合計",
      logic: "ロジック",
      layout: "レイアウト",
      data: "データ",
      validation: "検証",
      cells: "セル",
      showOnCompleted: "完成したものに表示",
      logo: "アンケートタイトルのロゴ",
      slider: "スライダー",
      expression: "表現",
      others: "その他"
    },
    editProperty: "プロパティ'{0}'を編集",
    items: "[ アイテム: {0} ]",
    choicesVisibleIf: "選択肢は次の場合に表示されます。",
    choicesEnableIf: "次の場合に選択肢を選択できます。",
    columnsEnableIf: "列は次の場合に表示されます。",
    rowsEnableIf: "行は次の場合に表示されます。",
    indent: "インデントを追加する",
    panel: {
      indent: "外側のインデントを追加する"
    },
    innerIndent: "内側のインデントを追加する",
    defaultValueFromLastRow: "最後の行からデフォルト値を取得する",
    defaultValueFromLastPanel: "最後のパネルからデフォルト値を取得する",
    enterNewValue: "値を入力してください。",
    noquestions: "アンケートに質問はありません。",
    createtrigger: "トリガーを作成してください。",
    titleKeyboardAdornerTip: "編集するには「enter」キーを押してください",
    keyboardAdornerTip: "アイテムを編集するには「enter」キーを押してください、アイテムを削除するには「delete」キーを押してください、アイテムを移動するには「alt」+上矢印キーまたは「alt」+下矢印キーを押してください",
    triggerOn: "オン ",
    triggerMakePagesVisible: "ページを可視化:",
    triggerMakeQuestionsVisible: "エレメントを可視化:",
    triggerCompleteText: "うまくいけばアンケートが完了します。",
    triggerNotSet: "トリガーが設定されていません",
    triggerRunIf: "次の場合、実行",
    triggerSetToName: "次の値を変更: ",
    triggerFromName: "次から値をコピー: ",
    triggerRunExpression: "この表現を実行:",
    triggerSetValue: "宛先: ",
    triggerGotoName: "質問に移動:",
    triggerIsVariable: "アンケートの結果に変数を入れないでください。",
    triggerRunExpressionEmpty: "有効な表現を入力してください",
    emptyExpressionPlaceHolder: "ここに式を入力してください...",
    noFile: "ファイルが選択されていません",
    clearIfInvisible: "質問が非表示になった場合は値をクリアする",
    valuePropertyName: "値プロパティ名",
    searchEnabled: "検索を有効にする",
    hideSelectedItems: "選択した項目を非表示にする",
    closeOnSelect: "選択後にドロップダウンを閉じる",
    signatureWidth: "署名の幅",
    signatureHeight: "署名の高さ",
    verticalAlign: "垂直方向の配置",
    alternateRows: "代替行",
    columnsVisibleIf: "列は次の場合に表示されます。",
    rowsVisibleIf: "行は次の場合に表示されます。",
    otherPlaceholder: "コメント領域のプレースホルダー",
    signaturepad: {
      showPlaceholder: "プレースホルダーを表示する",
      placeholder: "プレースホルダテキスト",
      signatureWidth: "署名領域の幅",
      signatureHeight: "署名領域の高さ",
      signatureAutoScaleEnabled: "署名領域の自動スケーリング",
      penMinWidth: "最小ペン幅",
      penMaxWidth: "ペンの最大幅"
    },
    filePlaceholder: "ファイル プレースホルダー テキスト",
    photoPlaceholder: "写真の代替テキスト",
    fileOrPhotoPlaceholder: "ファイルまたは写真のプレースホルダーテキスト",
    rateType: "レートタイプ"
  },
  // Property values
  pv: {
    "true": "真",
    "false": "偽",
    file: "ローカルファイル",
    camera: "カメラ",
    "file-camera": "ローカルファイルまたはカメラ",
    inherit: "継承する",
    show: "表示する",
    hide: "非表示にする",
    default: "デフォルト",
    initial: "最初の",
    random: "ランダム",
    collapsed: "折り畳んだ",
    expanded: "展開した",
    none: "なし",
    asc: "昇順",
    desc: "降順",
    indeterminate: "不確定",
    decimal: "小数",
    currency: "通貨",
    percent: "パーセント",
    firstExpanded: "firstExpanded",
    off: "オフ",
    onpanel: "各パネルから開始",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "リスト",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "タブ",
    horizontal: "水平",
    vertical: "垂直",
    top: "上",
    bottom: "下",
    topBottom: "上と下",
    both: "両方",
    left: "左",
    right: "右",
    leftRight: "左右",
    color: "色",
    date: "日付",
    datetime: "日時",
    "datetime-local": "日時ローカル",
    email: "電子メール",
    month: "月",
    number: "数",
    password: "パスワード",
    range: "範囲",
    tel: "電話",
    text: "テキスト",
    time: "時間",
    url: "リンク",
    week: "週",
    hidden: "非表示",
    on: "オン",
    onPage: "onPage",
    edit: "編集",
    display: "表示",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "質問またはそのパネル/ページが非表示になったとき",
    clearInvisibleValues: {
      none: "なし"
    },
    inputType: {
      color: "色",
      date: "日付",
      "datetime-local": "日付と時刻",
      email: "電子メール",
      month: "月",
      number: "数",
      password: "パスワード",
      range: "範囲",
      tel: "電話番号",
      text: "テキスト",
      time: "時間",
      url: "リンク",
      week: "週"
    },
    all: "すべて",
    page: "ページ",
    survey: "アンケート",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "回答が変更される前に",
    standard: "スタンダード",
    singlePage: "シングルページ",
    questionPerPage: "ページあたりの質問",
    noPreview: "プレビューなし",
    showAllQuestions: "すべての質問を含むプレビューを表示",
    showAnsweredQuestions: "回答された質問を含むプレビューを表示",
    pages: "ページ",
    questions: "質問",
    requiredQuestions: "必須の質問",
    correctQuestions: "正しい質問",
    buttons: "ボタン",
    underInput: "インプットの下",
    underTitle: "タイトルの下",
    onBlur: "ぼかし時",
    onTyping: "入力中",
    underRow: "行の下",
    underRowSingle: "行の下には、1つのパネルのみが表示されます",
    showNavigationButtons: {
      none: "隠れた"
    },
    showProgressBar: {
      off: "隠れた"
    },
    showTimerPanel: {
      none: "隠れた"
    },
    showTimerPanelMode: {
      all: "両方とも"
    },
    detailPanelMode: {
      none: "隠れた"
    },
    addRowLocation: {
      default: "マトリックスレイアウトに依存"
    },
    panelsState: {
      default: "ユーザーはパネルを展開または折りたたむことはできません",
      collapsed: "すべてのパネルが折りたたまれている",
      expanded: "すべてのパネルが展開されます"
    },
    widthMode: {
      auto: "自動",
      static: "静的",
      responsive: "応答"
    },
    imageFit: {
      none: "何一つ",
      contain: "含む",
      cover: "覆う",
      fill: "注ぐ"
    },
    contentMode: {
      auto: "自動",
      image: "画像",
      video: "ビデオ",
      youtube: "ユーチューブ"
    },
    displayMode: {
      auto: "自動",
      buttons: "ボタン",
      dropdown: "ドロップダウン"
    },
    rateColorMode: {
      default: "デフォルト"
    },
    autoGenerate: {
      "true": "生成する",
      "false": "手動で入力する"
    },
    rateType: {
      labels: "ラベル",
      stars: "星",
      smileys: "スマイリー"
    }
  },
  // Operators
  op: {
    empty: "は空白です",
    notempty: "は空白ではありません",
    equal: "等しい",
    notequal: "等しくない",
    contains: "含む",
    notcontains: "含まない",
    anyof: "次のいずれか",
    allof: "次のすべて",
    greater: "より大きい",
    less: "より小さい",
    greaterorequal: "等しいかより大きい",
    lessorequal: "等しいかより小さい",
    and: "そして",
    or: "又は"
  },
  // Embed window
  ew: {
    angular: "Angularバージョンを使用",
    jquery: "jQueryバージョンを使用",
    knockout: "Knockoutバージョンを使用",
    react: "Reactバージョンを使用",
    vue: "Vueバージョンを使用",
    bootstrap: "Bootstrapフレームワーク向け",
    modern: "モダンテーマ",
    default: "デフォルトテーマ",
    orange: "オレンジテーマ",
    darkblue: "ダークブルーテーマ",
    darkrose: "ダークローズテーマ",
    stone: "ストーンテーマ",
    winter: "ウィンターテーマ",
    winterstone: "ウィンターストーンテーマ",
    showOnPage: "1つのページにアンケートを表示",
    showInWindow: "1つのウィンドウにアンケートを表示",
    loadFromServer: "サーバーからアンケートのJSONファイルを読み込む",
    titleScript: "スクリプトとスタイル",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "それをテストするためのページを選択:",
    showInvisibleElements: "不可視エレメントを表示",
    hideInvisibleElements: "非表示の要素を非表示にする"
  },
  validators: {
    answercountvalidator: "答えの数",
    emailvalidator: "メール",
    expressionvalidator: "表現",
    numericvalidator: "数字の",
    regexvalidator: "正規表現",
    textvalidator: "テキスト"
  },
  triggers: {
    completetrigger: "アンケートを完了",
    setvaluetrigger: "値を設定",
    copyvaluetrigger: "値をコピー",
    skiptrigger: "質問へスキップ",
    runexpressiontrigger: "数式を実行",
    visibletrigger: "可視性を変更 (非推奨)"
  },
  pehelp: {
    cookieName: "Cookieは、ユーザーが同じアンケートに2回記入するのを防ぎます。",
    size: "入力フィールドの表示領域のサイズを変更します。入力長を制限するには<b>、[検証→最大長</b>] 設定を使用してください。",
    format: "{0} を実際の値のプレースホルダーとして使用します。",
    totalText: "少なくとも 1 つの列に [合計型] または [合計式] がある場合にのみ表示されます。",
    acceptedTypes: "詳細については、[accept](https://www.w3schools.com/tags/att_input_accept.asp) 属性の説明を参照してください。",
    columnColCount: "ラジオグループとチェックボックスのセルタイプにのみ適用されます。",
    autocomplete: "詳細については、[オートコンプリート](https://developer.mozilla.org/en-US/docs/Web/HTML/属性/オートコンプリート) 属性の説明を参照してください。",
    valueName: "このプロパティを設定しない場合、回答は Name プロパティで指定されたフィールドに格納されます。",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "指定した列に同じ値が含まれている場合、調査は「一意でないキー値」エラーをスローします。",
    filePlaceholder: "「ソースタイプ」が「ローカルファイル」の場合、またはカメラが利用できない場合に適用されます",
    photoPlaceholder: "「ソースタイプ」が「カメラ」の場合に適用されます。",
    fileOrPhotoPlaceholder: "「ソースタイプ」が「ローカルファイルまたはカメラ」の場合に適用されます。"
  },
  // Properties
  p: {
    title: {
      name: "タイトル",
      title: "「名前」と同じ場合は空白のままにしてください"
    },
    multiSelect: "複数選択を許可",
    showLabel: "画像のキャプションを表示する",
    value: "価値",
    tabAlign: "タブの配置",
    sourceType: "ソースの種類",
    fitToContainer: "コンテナにフィット",
    setValueExpression: "設定値式",
    description: "形容",
    logoFit: "ロゴフィット",
    pages: "ページ",
    questions: "問",
    triggers: "トリガー",
    calculatedValues: "計算値",
    surveyId: "アンケート ID",
    surveyPostId: "アンケート投稿 ID",
    surveyShowDataSaving: "測量ショーのデータ保存",
    questionDescriptionLocation: "質問の説明の場所",
    progressBarType: "進行状況バーの種類",
    showTOC: "目次を表示",
    tocLocation: "目次 場所",
    questionTitlePattern: "質問のタイトルパターン",
    widthMode: "幅モード",
    showBrandInfo: "ブランド情報を表示する",
    useDisplayValuesInDynamicTexts: "ダイナミックテキストでの表示値の使用",
    visibleIf: "次の場合に表示",
    titleLocation: "タイトルの場所",
    descriptionLocation: "説明の場所",
    defaultValueExpression: "デフォルト値式",
    requiredIf: "次の場合に必要",
    resetValueIf: "次の場合に値をリセット",
    setValueIf: "次の場合に値を設定します",
    validators: "バリデータ",
    bindings: "バインド",
    renderAs: "レンダリング形式",
    attachOriginalItems: "オリジナルアイテムを添付する",
    choices: "選択肢",
    choicesByUrl: "URL による選択肢",
    currency: "通貨",
    cellHint: "セルヒント",
    isUnique: "ユニークです",
    showInMultipleColumns: "複数の列に表示",
    totalMaximumFractionDigits: "最大小数部の合計桁数",
    totalMinimumFractionDigits: "最小小数桁の合計",
    columns: "列",
    detailElements: "詳細要素",
    allowAdaptiveActions: "アダプティブアクションを許可する",
    defaultRowValue: "既定の行の値",
    detailPanelShowOnAdding: "追加時の詳細パネル表示",
    choicesLazyLoadEnabled: "遅延読み込みの選択肢が有効",
    choicesLazyLoadPageSize: "選択肢遅延読み込みページ・サイズ",
    inputFieldComponent: "入力フィールドコンポーネント",
    itemComponent: "アイテムコンポーネント",
    min: "分",
    max: "マックス",
    minValueExpression: "最小値の式",
    maxValueExpression: "最大値式",
    step: "歩",
    dataList: "データ一覧",
    itemSize: "アイテムサイズ",
    elements: "元素",
    content: "コンテンツ",
    navigationButtonsVisibility: "ナビゲーションボタンの可視性",
    navigationTitle: "ナビゲーション タイトル",
    navigationDescription: "ナビゲーションの説明",
    longTap: "ロングタップ",
    autoGrow: "自動拡張",
    allowResize: "サイズ変更を許可する",
    acceptCarriageReturn: "キャリッジリターンを受け入れる",
    displayMode: "表示モード",
    rateType: "レートタイプ",
    label: "ラベル",
    contentMode: "コンテンツモード",
    imageFit: "画像のフィット",
    altText: "代替テキスト",
    height: "高さ",
    penColor: "ペンの色",
    backgroundColor: "背景色",
    templateElements: "テンプレート要素",
    operator: "演算子",
    isVariable: "可変",
    runExpression: "実行式",
    showCaption: "キャプションを表示",
    iconName: "アイコン名",
    iconSize: "アイコンのサイズ",
    precision: "精度",
    matrixDragHandleArea: "マトリックスドラッグハンドル領域",
    backgroundImage: "背景画像",
    backgroundImageFit: "背景画像のフィット",
    backgroundImageAttachment: "背景画像の添付",
    backgroundOpacity: "背景の不透明度",
    selectToRankEnabled: "選択してランク付けを有効にする",
    selectToRankAreasLayout: "エリアレイアウトをランク付けするために選択する",
    allowCameraAccess: "カメラへのアクセスを許可する",
    scaleColorMode: "スケールカラーモード",
    rateColorMode: "レートカラーモード",
    templateTabTitle: "テンプレートタブのタイトル",
    templateVisibleIf: "次の場合に表示されるテンプレート",
    copyDisplayValue: "表示値をコピー"
  },
  theme: {
    "--background": "背景色",
    "--background-dim-light": "背景の薄暗い明るい色",
    "--primary-foreground": "原色の前景色",
    "--foreground": "景色",
    "--base-unit": "ベースユニット",
    advancedMode: "詳細モード",
    groupGeneral: "全般",
    groupHeader: "ヘッダ",
    groupBackground: "バックグラウンド",
    groupAppearance: "様子",
    themeName: "テーマ",
    themeMode: "質問の外観",
    themeModePanels: "デフォルト",
    themeModeLightweight: "パネルなし",
    themePaletteLight: "光",
    themePaletteDark: "暗い",
    primaryColor: "アクセントカラー",
    primaryDefaultColor: "デフォルト",
    primaryDarkColor: "ホバー",
    primaryLightColor: "入選",
    coverTitleForecolor: "タイトル前色",
    coverDescriptionForecolor: "説明前色",
    coverOverlapEnabled: "オーバーラップ",
    backgroundDimColor: "背景色",
    backgroundImage: "背景画像",
    backgroundImageFitAuto: "自動",
    backgroundImageFitCover: "覆う",
    backgroundImageFitContain: "含む",
    backgroundImageFitFill: "伸ばす",
    backgroundImageFitTile: "瓦",
    backgroundOpacity: "不透明",
    backgroundImageAttachmentFixed: "付け",
    backgroundImageAttachmentScroll: "スクロール",
    panelBackgroundTransparency: "パネルの背景の不透明度",
    questionBackgroundTransparency: "質問の背景の不透明度",
    questionTitle: "質問タイトルのフォント",
    editorPanel: "入力要素",
    backgroundCornerRadius: "背景と角の半径",
    backcolor: "デフォルトの背景",
    hovercolor: "ホバー背景",
    borderDecoration: "ボーダーデコレーション",
    accentBackground: "アクセントの背景",
    accentForeground: "アクセントの前景",
    primaryForecolor: "デフォルトの色",
    primaryForecolorLight: "無効色",
    colorsTitle: "色",
    font: "フォント",
    lines: "台詞",
    borderDefault: "暗い",
    borderLight: "ライター",
    fontFamily: "フォントファミリ",
    fontSize: "文字サイズ",
    color: "色",
    placeholderColor: "プレースホルダの色",
    size: "大きさ",
    fontWeightRegular: "レギュラー",
    fontWeightHeavy: "重い",
    fontWeightSemiBold: "半太字",
    fontWeightBold: "ボールド",
    scale: "規模",
    cornerRadius: "コーナー半径",
    surveyTitle: "アンケートタイトルのフォント",
    surveyDescription: "調査の説明フォント",
    pageTitle: "ページタイトルのフォント",
    titleFont: "タイトルのフォント",
    descriptionFont: "説明フォント",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "シャドウ効果を追加",
    opacity: "不透明",
    boxShadowBlur: "滲む",
    boxShadowSpread: "まん延",
    boxShadowDrop: "落とす",
    boxShadowInner: "内的",
    shadow: "影の効果",
    headerView: "眺める",
    headerViewBasic: "基本的な",
    headerViewAdvanced: "アドバンスド",
    coverInheritWidthFrom: "コンテンツ領域の幅",
    coverInheritWidthFromSurvey: "調査と同じ",
    coverInheritWidthFromContainer: "コンテナに合わせる",
    coverTextAreaWidth: "テキスト幅",
    coverBackgroundColorSwitch: "背景色",
    coverBackgroundColorNone: "何一つ",
    coverBackgroundColorAccentColor: "アクセントカラー",
    coverBackgroundColorCustom: "習慣",
    horizontalAlignmentLeft: "左",
    horizontalAlignmentCenter: "センター",
    horizontalAlignmentRight: "右",
    verticalAlignmentTop: "ページのトップへ",
    verticalAlignmentMiddle: "中央",
    verticalAlignmentBottom: "底",
    logoPosition: "ロゴの位置",
    coverTitlePosition: "タイトルの位置",
    coverDescriptionPosition: "記述の位置",
    names: {
      default: "デフォルト",
      sharp: "鋭い",
      borderless: "ボーダレス",
      flat: "平",
      plain: "平地",
      doubleborder: "二重ボーダー",
      layered: "層状",
      solid: "固体",
      threedimensional: ".3D",
      contrast: "対照"
    },
    colors: {
      teal: "小鴨",
      blue: "青い",
      purple: "紫",
      orchid: "蘭",
      tulip: "チューリップ",
      brown: "褐色",
      green: "緑"
    }
  }
};

editorLocalization.locales["ja"] = jaStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.tagbox: "Multi-Select Dropdown" => "複数選択ドロップダウン"
// qt.buttongroup: "Button Group" => "ボタングループ"
// ed.surveySettings: "Survey Settings" => "アンケート設定"
// ed.surveySettingsTooltip: "Open survey settings" => "アンケート設定を開く"
// ed.prevSelected: "Select previous" => "前を選択"
// ed.nextSelected: "Select next" => "[次へ] を選択します。"
// ed.surveyTypeName: "Survey" => "アンケート"
// ed.pageTypeName: "Page" => "ページ"
// ed.panelTypeName: "Panel" => "パネル"
// ed.questionTypeName: "Question" => "質問"
// ed.columnTypeName: "Column" => "コラム"
// ed.themeSurvey: "Themes" => "テーマ"
// ed.defaultV2Theme: "Default" => "デフォルト"
// ed.modernTheme: "Modern" => "モダン"
// ed.defaultTheme: "Default (legacy)" => "デフォルト (レガシー)"
// ed.jsonHideErrors: "Hide errors" => "エラーを隠す"
// ed.jsonShowErrors: "Show errors" => "エラーを表示"
// ed.showMoreChoices: "Show more" => "さらに表示"
// ed.showLessChoices: "Show less" => "表示を減らす"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "検索するタイプ..."
// ed.toolboxChoiceCategory: "Choice Questions" => "選択の質問"
// ed.toolboxTextCategory: "Text Input Questions" => "テキスト入力の質問"
// ed.toolboxContainersCategory: "Containers" => "コンテナー"
// ed.toolboxMatrixCategory: "Matrix Questions" => "マトリックスの質問"
// ed.toolboxMiscCategory: "Misc" => "雑貨"
// ed.translationPropertyGridTitle: "Language Settings" => "言語設定"
// ed.themePropertyGridTitle: "Theme Settings" => "テーマ設定"
// ed.translationLanguages: "Languages" => "言語"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "使用される文字列のみ"
// ed.translationPlaceHolder: "Translation..." => "翻訳。。。"
// ed.themeExportButton: "Export" => "輸出"
// ed.themeImportButton: "Import" => "輸入"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "選択肢は"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTMLコンテンツはここにあります。"
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "ここにツールボックスから質問をドロップします。"
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "アンケートは空です。ツールボックスから要素をドラッグするか、下のボタンをクリックします。"
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "ここに画像をドラッグ&ドロップするか、下のボタンをクリックしてアップロードする画像を選択してください"
// ed.imageChooseImage: "Choose Image" => "画像を選択"
// ed.addNewTypeQuestion: "Add {0}" => "{0}を追加"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[ロゴ]"
// ed.auto: "auto" => "自動"
// ed.choices_Item: "Item " => "アイテム"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "調査のフローをカスタマイズするルールを作成します。"
// lg.page_enableName: "Enable (disable) page" => "有効 (無効) ページ"
// lg.column_visibilityName: "Show (hide) column" => "列を表示 (非表示)"
// lg.column_enableName: "Enable (disable) column" => "有効 (無効) 列"
// lg.column_requireName: "Make column required" => "列を必須にする"
// lg.itemEmptyExpressionText: "New rule" => "新しいルール"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "質問{1}の列{0}を表示する"
// lg.column_enableText: "make column {0} of question {1} enable" => "質問の列{0}を有効にする{1}"
// lg.column_requireText: "make column {0} of question {1} required" => "質問{1}の列{0}を必須にする"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "明確な質問値:{0}"
// lg.showAllQuestions: "All Questions" => "すべての質問"
// lg.showAllActionTypes: "All Action Types" => "すべてのアクションタイプ"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "論理ルールが不完全です"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "一部の論理ルールが完了していません。ここでタブを離れると、変更は失われます。変更を完了せずにタブを離れますか?"
// lg.uncompletedRule_apply: "Yes" => "はい"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "いいえ、ルールを完成させたい"
// pe.clear: "Clear" => "クリア"
// pe.set: "Set" => "セット"
// pe.change: "Change" => "変える"
// pe.close: "Close" => "閉める"
// pe.removeItem: "Click to remove the item..." => "クリックしてアイテムを削除します..."
// pe.dragItem: "Drag the item" => "アイテムをドラッグする"
// pe.doneEditing: "Done" => "完成です"
// pe.empty: "<empty>" => "<empty>"
// pe.emptyValue: "Value is empty" => "値が空です"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "値 '{0}' は一意ではありません"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "アイテムの数は{0}から{1}に制限してください"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "次の形式でデータを設定できます。\n値 1|テキスト\n値 2"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "アンケートを送信する前に回答をプレビューする"
// pe.overridingPropertyPrefix: "Set by " => "設定者"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "予約語は使用しないでください: \"アイテム\"、 \"選択肢\"、 \"パネル\"、 \"行\"。"
// pe.listIsEmpty@choices: "No choices have been added yet" => "選択肢はまだ追加されていません"
// pe.addNew@choices: "Add a choice" => "選択肢を追加する"
// choicesbyurl.valueName: "Get values from the following JSON field" => "次の JSON フィールドから値を取得する"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "次の JSON フィールドから画像の URL を取得する"
// pe.and: "and" => "そして"
// pe.or: "or" => "又は"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "質問を選択して、条件の設定を開始します。"
// pe.if: "If" => "もし"
// pe.then: "then" => "そうしたら"
// pe.setToName: "Target question" => "ターゲットの質問"
// pe.fromName: "Question to copy answer from" => "回答をコピーする質問"
// pe.gotoName: "Question to skip to" => "スキップする質問"
// pe.ruleIsNotSet: "Rule is incorrect" => "ルールが正しくありません"
// pe.includeIntoResult: "Include into survey results" => "アンケート結果に含める"
// pe.portraitOrientation: "Switch to portrait orientation" => "縦向きに切り替える"
// image.imageHeight: "Image height (in CSS-accepted values)" => "画像の高さ (CSS で受け入れられる値)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "画像の幅 (CSS で受け入れられる値)"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "ページを終了するための制限時間 (秒単位)"
// question.page: "Parent page" => "親ページ"
// pe.noEntriesText: "Empty entries text" => "空のエントリのテキスト"
// pe.setValue: "Answer" => "答える"
// pe.dataFormat: "Image format" => "画像フォーマット"
// pe.allowAddRows: "Allow adding rows" => "行の追加を許可する"
// pe.allowRemoveRows: "Allow removing rows" => "行の削除を許可する"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "行のドラッグ アンド ドロップを許可する"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "正確な画像の幅または高さを指定した場合には適用されません。"
// pe.minImageWidth: "Minimum image width" => "最小画像幅"
// pe.maxImageWidth: "Maximum image width" => "最大画像幅"
// pe.minImageHeight: "Minimum image height" => "最小画像の高さ"
// pe.maxImageHeight: "Maximum image height" => "最大画像の高さ"
// surveyvalidator.text: "Error message" => "エラーメッセージ"
// surveyvalidator.expression: "Validation expression" => "検証式"
// pe.logo: "Logo (URL or base64-encoded string)" => "ロゴ (URL または base64 でエンコードされた文字列)"
// pe.questionsOnPageMode: "Survey structure" => "調査体制"
// pe.maxTextLength: "Maximum answer length (in characters)" => "回答の最大長 (文字数)"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "コメントの最大長 (文字数)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "必要に応じてコメント領域を自動展開する"
// pe.allowResizeComment: "Allow users to resize text areas" => "ユーザーがテキスト領域のサイズを変更できるようにする"
// pe.textUpdateMode: "Update text question value" => "テキストの質問値を更新する"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "最初の無効な回答にフォーカスを設定する"
// pe.checkErrorsMode: "Run validation" => "検証の実行"
// pe.navigateToUrl: "Navigate to URL" => "URL に移動します。"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "ダイナミック URL"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "ユーザーがこのアンケートに既に記入しているかどうかを示すマークアップ"
// pe.completedHtml: "Survey Complete page markup" => "アンケート完了ページのマークアップ"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "動的調査 完全なページ マークアップ"
// pe.loadingHtml: "Markup to show while survey model is loading" => "アンケートモデルの読み込み中に表示するマークアップ"
// pe.commentText: "Comment area text" => "コメント領域のテキスト"
// pe.autocomplete: "Autocomplete type" => "オートコンプリートの種類"
// pe.labelTrue: "\"True\" label" => "「真の」ラベル"
// pe.labelFalse: "\"False\" label" => "「虚偽」ラベル"
// pe.displayStyle: "Value display style" => "値の表示スタイル"
// pe.format: "Formatted string" => "書式設定された文字列"
// pe.maximumFractionDigits: "Maximum fractional digits" => "小数部の最大数桁数"
// pe.minimumFractionDigits: "Minimum fractional digits" => "小数部の最小桁数"
// pe.useGrouping: "Display grouping separators" => "グループ化区切りの表示"
// pe.allowMultiple: "Allow multiple files" => "複数のファイルを許可する"
// pe.allowImagesPreview: "Preview images" => "プレビュー画像"
// pe.acceptedTypes: "Accepted file types" => "受け入れられるファイルの種類"
// pe.waitForUpload: "Wait for the upload to complete" => "アップロードが完了するのを待ちます"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "ファイルの削除を確認する"
// pe.detailPanelMode: "Detail panel location" => "詳細パネルの位置"
// pe.minRowCount: "Minimum row count" => "最小行数"
// pe.maxRowCount: "Maximum row count" => "最大行数"
// pe.confirmDelete: "Confirm row deletion" => "行の削除を確認する"
// pe.confirmDeleteText: "Confirmation message" => "確認メッセージ"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "パネルの削除を確認する"
// pe.panelCount: "Initial panel count" => "初期パネル数"
// pe.minPanelCount: "Minimum panel count" => "最小パネル数"
// pe.maxPanelCount: "Maximum panel count" => "最大パネル数"
// pe.panelsState: "Inner panel expand state" => "内側パネルの展開状態"
// pe.templateDescription: "Description template" => "説明テンプレート"
// pe.templateTitle: "Title template" => "タイトルテンプレート"
// pe.panelPrevText: "Previous Panel button tooltip" => "前のパネルボタンのツールチップ"
// pe.panelNextText: "Next Panel button tooltip" => "[次へ] パネル ボタンのツールチップ"
// pe.showRangeInProgress: "Show progress bar" => "進行状況バーを表示する"
// pe.templateTitleLocation: "Question title location" => "質問タイトルの場所"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "[パネルを削除] ボタンの位置"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "行がない場合は質問を非表示にする"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "行がない場合は列を非表示にする"
// pe.rateValues: "Custom rate values" => "カスタムレート値"
// pe.rateCount: "Rate count" => "レート数"
// pe.autoGenerate: "How to specify rate values?" => "レート値を指定する方法は?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "選択肢がない場合は質問を非表示にする"
// pe.hideNumber: "Hide question number" => "質問番号を隠す"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "最小幅 (CSS で受け入れられる値)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "最大幅 (CSS で受け入れられる値)"
// pe.width: "Width (in CSS-accepted values)" => "幅 (CSS で受け入れられる値)"
// pe.showHeader: "Show column headers" => "列ヘッダーを表示する"
// pe.horizontalScroll: "Show horizontal scrollbar" => "水平スクロールバーを表示"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "最小列幅 (CSS で受け入れられる値)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "行ヘッダーの幅 (CSS で受け入れられる値)"
// pe.valueTrue: "\"True\" value" => "「真」の値"
// pe.valueFalse: "\"False\" value" => "\"偽\" の値"
// pe.minErrorText: "\"Value is below minimum\" error message" => "\"値が最小値を下回っています\" というエラー メッセージ"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "\"値が最大値を超えています\" というエラー メッセージ"
// pe.otherErrorText: "\"Empty comment\" error message" => "「コメントを空にしました」というエラーメッセージ"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "\"一意でないキー値\" エラー メッセージ"
// pe.minSelectedChoices: "Minimum selected choices" => "選択される最小選択肢"
// pe.maxSelectedChoices: "Maximum selected choices" => "最大選択選択肢数"
// pe.showClearButton: "Show the Clear button" => "[クリア] ボタンを表示する"
// pe.showNumber: "Show panel number" => "パネル番号を表示"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "ロゴの幅 (CSS で受け入れられる値)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "ロゴの高さ (CSS で受け入れられる値)"
// pe.readOnly: "Read-only" => "読み取り専用"
// pe.enableIf: "Editable if" => "次の場合に編集可能"
// pe.emptyRowsText: "\"No rows\" message" => "\"行なし\" メッセージ"
// pe.size: "Input field size (in characters)" => "入力フィールドのサイズ (文字数)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "個別の特別な選択肢 (なし、その他、すべて選択)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "次の質問から選択肢をコピーする"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "どの選択肢をコピーするか?"
// pe.showCommentArea: "Show the comment area" => "コメント領域を表示する"
// pe.commentPlaceholder: "Comment area placeholder" => "コメント領域のプレースホルダー"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "レートの説明を極値として表示する"
// pe.rowsOrder: "Row order" => "行の順序"
// pe.columnsLayout: "Column layout" => "列のレイアウト"
// pe.columnColCount: "Nested column count" => "ネストされた列数"
// pe.state: "Panel expand state" => "パネル展開状態"
// pe.correctAnswer: "Correct Answer" => "正解"
// pe.defaultPanelValue: "Default Values" => "デフォルト値"
// pe.cells: "Cell Texts" => "セルテキスト"
// pe.keyName: "Key column" => "キー列"
// itemvalue.text: "Alt text" => "代替テキスト"
// tabs.expression: "Expression" => "表現"
// pe.choicesVisibleIf: "Choices are visible if" => "選択肢は次の場合に表示されます。"
// pe.choicesEnableIf: "Choices are selectable if" => "次の場合に選択肢を選択できます。"
// pe.columnsEnableIf: "Columns are visible if" => "列は次の場合に表示されます。"
// pe.rowsEnableIf: "Rows are visible if" => "行は次の場合に表示されます。"
// pe.indent: "Add indents" => "インデントを追加する"
// panel.indent: "Add outer indents" => "外側のインデントを追加する"
// pe.innerIndent: "Add inner indents" => "内側のインデントを追加する"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "最後の行からデフォルト値を取得する"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "最後のパネルからデフォルト値を取得する"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "ここに式を入力してください..."
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "質問が非表示になった場合は値をクリアする"
// pe.valuePropertyName: "Value property name" => "値プロパティ名"
// pe.searchEnabled: "Enable search" => "検索を有効にする"
// pe.hideSelectedItems: "Hide selected items" => "選択した項目を非表示にする"
// pe.closeOnSelect: "Close the dropdown after selection" => "選択後にドロップダウンを閉じる"
// pe.signatureWidth: "Signature width" => "署名の幅"
// pe.signatureHeight: "Signature height" => "署名の高さ"
// pe.verticalAlign: "Vertical alignment" => "垂直方向の配置"
// pe.alternateRows: "Alternate rows" => "代替行"
// pe.columnsVisibleIf: "Columns are visible if" => "列は次の場合に表示されます。"
// pe.rowsVisibleIf: "Rows are visible if" => "行は次の場合に表示されます。"
// pe.otherPlaceholder: "Comment area placeholder" => "コメント領域のプレースホルダー"
// pe.rateType: "Rate type" => "レートタイプ"
// pv.true: "true" => "真"
// pv.false: "false" => "偽"
// pv.decimal: "decimal" => "小数"
// pv.currency: "currency" => "通貨"
// pv.percent: "percent" => "パーセント"
// pv.onpanel: "Start on each panel" => "各パネルから開始"
// pv.tab: "Tabs" => "タブ"
// pv.right: "Right" => "右"
// pv.color: "color" => "色"
// pv.date: "date" => "日付"
// pv.datetime: "datetime" => "日時"
// pv.datetime-local: "datetime-local" => "日時ローカル"
// pv.email: "email" => "電子メール"
// pv.month: "month" => "月"
// pv.number: "number" => "数"
// pv.password: "password" => "パスワード"
// pv.range: "range" => "範囲"
// pv.tel: "tel" => "電話"
// pv.text: "text" => "テキスト"
// pv.time: "time" => "時間"
// pv.url: "url" => "リンク"
// pv.week: "week" => "週"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "質問またはそのパネル/ページが非表示になったとき"
// clearInvisibleValues.none: "Never" => "なし"
// inputType.color: "Color" => "色"
// inputType.date: "Date" => "日付"
// inputType.datetime-local: "Date and Time" => "日付と時刻"
// inputType.email: "Email" => "電子メール"
// inputType.month: "Month" => "月"
// inputType.number: "Number" => "数"
// inputType.password: "Password" => "パスワード"
// inputType.range: "Range" => "範囲"
// inputType.tel: "Phone Number" => "電話番号"
// inputType.text: "Text" => "テキスト"
// inputType.time: "Time" => "時間"
// inputType.url: "URL" => "リンク"
// inputType.week: "Week" => "週"
// pv.onValueChanging: "Before an answer is changed" => "回答が変更される前に"
// pv.onBlur: "On blur" => "ぼかし時"
// pv.onTyping: "While typing" => "入力中"
// pv.underRow: "Under the row" => "行の下"
// pv.underRowSingle: "Under the row, only one panel is visible" => "行の下には、1つのパネルのみが表示されます"
// showNavigationButtons.none: "Hidden" => "隠れた"
// showProgressBar.off: "Hidden" => "隠れた"
// showTimerPanel.none: "Hidden" => "隠れた"
// showTimerPanelMode.all: "Both" => "両方とも"
// detailPanelMode.none: "Hidden" => "隠れた"
// addRowLocation.default: "Depends on matrix layout" => "マトリックスレイアウトに依存"
// panelsState.default: "Users cannot expand or collapse panels" => "ユーザーはパネルを展開または折りたたむことはできません"
// panelsState.collapsed: "All panels are collapsed" => "すべてのパネルが折りたたまれている"
// panelsState.expanded: "All panels are expanded" => "すべてのパネルが展開されます"
// widthMode.auto: "Auto" => "自動"
// widthMode.static: "Static" => "静的"
// widthMode.responsive: "Responsive" => "応答"
// imageFit.none: "None" => "何一つ"
// imageFit.contain: "Contain" => "含む"
// imageFit.cover: "Cover" => "覆う"
// imageFit.fill: "Fill" => "注ぐ"
// contentMode.auto: "Auto" => "自動"
// contentMode.image: "Image" => "画像"
// contentMode.video: "Video" => "ビデオ"
// contentMode.youtube: "YouTube" => "ユーチューブ"
// displayMode.auto: "Auto" => "自動"
// displayMode.buttons: "Buttons" => "ボタン"
// displayMode.dropdown: "Dropdown" => "ドロップダウン"
// rateColorMode.default: "Default" => "デフォルト"
// autoGenerate.true: "Generate" => "生成する"
// autoGenerate.false: "Enter manually" => "手動で入力する"
// rateType.labels: "Labels" => "ラベル"
// rateType.stars: "Stars" => "星"
// rateType.smileys: "Smileys" => "スマイリー"
// op.and: "and" => "そして"
// op.or: "or" => "又は"
// ts.hideInvisibleElements: "Hide invisible elements" => "非表示の要素を非表示にする"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Cookieは、ユーザーが同じアンケートに2回記入するのを防ぎます。"
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "入力フィールドの表示領域のサイズを変更します。入力長を制限するには<b>、[検証→最大長</b>] 設定を使用してください。"
// pehelp.format: "Use {0} as a placeholder for the actual value." => "{0} を実際の値のプレースホルダーとして使用します。"
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "少なくとも 1 つの列に [合計型] または [合計式] がある場合にのみ表示されます。"
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "詳細については、[accept](https://www.w3schools.com/tags/att_input_accept.asp) 属性の説明を参照してください。"
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "ラジオグループとチェックボックスのセルタイプにのみ適用されます。"
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "詳細については、[オートコンプリート](https://developer.mozilla.org/en-US/docs/Web/HTML/属性/オートコンプリート) 属性の説明を参照してください。"
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "このプロパティを設定しない場合、回答は Name プロパティで指定されたフィールドに格納されます。"
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "指定した列に同じ値が含まれている場合、調査は「一意でないキー値」エラーをスローします。"
// title.name: "title" => "タイトル"
// p.multiSelect: "Allow multiple selection" => "複数選択を許可"
// p.showLabel: "Show image captions" => "画像のキャプションを表示する"
// p.value: "Value" => "価値"
// p.tabAlign: "Tab alignment" => "タブの配置"
// p.description: "Description" => "形容"
// p.logoFit: "Logo fit" => "ロゴフィット"
// p.pages: "Pages" => "ページ"
// p.questions: "Questions" => "問"
// p.triggers: "Triggers" => "トリガー"
// p.calculatedValues: "Calculated values" => "計算値"
// p.surveyId: "Survey id" => "アンケート ID"
// p.surveyPostId: "Survey post id" => "アンケート投稿 ID"
// p.surveyShowDataSaving: "Survey show data saving" => "測量ショーのデータ保存"
// p.questionDescriptionLocation: "Question description location" => "質問の説明の場所"
// p.progressBarType: "Progress bar type" => "進行状況バーの種類"
// p.showTOC: "Show TOC" => "目次を表示"
// p.tocLocation: "Toc location" => "目次 場所"
// p.questionTitlePattern: "Question title pattern" => "質問のタイトルパターン"
// p.widthMode: "Width mode" => "幅モード"
// p.showBrandInfo: "Show brand info" => "ブランド情報を表示する"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "ダイナミックテキストでの表示値の使用"
// p.visibleIf: "Visible if" => "次の場合に表示"
// p.titleLocation: "Title location" => "タイトルの場所"
// p.descriptionLocation: "Description location" => "説明の場所"
// p.defaultValueExpression: "Default value expression" => "デフォルト値式"
// p.requiredIf: "Required if" => "次の場合に必要"
// p.validators: "Validators" => "バリデータ"
// p.bindings: "Bindings" => "バインド"
// p.renderAs: "Render as" => "レンダリング形式"
// p.attachOriginalItems: "Attach original items" => "オリジナルアイテムを添付する"
// p.choices: "Choices" => "選択肢"
// p.choicesByUrl: "Choices by url" => "URL による選択肢"
// p.currency: "Currency" => "通貨"
// p.cellHint: "Cell hint" => "セルヒント"
// p.isUnique: "Is unique" => "ユニークです"
// p.showInMultipleColumns: "Show in multiple columns" => "複数の列に表示"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "最大小数部の合計桁数"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "最小小数桁の合計"
// p.columns: "Columns" => "列"
// p.detailElements: "Detail elements" => "詳細要素"
// p.allowAdaptiveActions: "Allow adaptive actions" => "アダプティブアクションを許可する"
// p.defaultRowValue: "Default row value" => "既定の行の値"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "追加時の詳細パネル表示"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "遅延読み込みの選択肢が有効"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "選択肢遅延読み込みページ・サイズ"
// p.inputFieldComponent: "Input field component" => "入力フィールドコンポーネント"
// p.itemComponent: "Item component" => "アイテムコンポーネント"
// p.min: "Min" => "分"
// p.max: "Max" => "マックス"
// p.minValueExpression: "Min value expression" => "最小値の式"
// p.maxValueExpression: "Max value expression" => "最大値式"
// p.step: "Step" => "歩"
// p.dataList: "Data list" => "データ一覧"
// p.itemSize: "Item size" => "アイテムサイズ"
// p.elements: "Elements" => "元素"
// p.content: "Content" => "コンテンツ"
// p.navigationButtonsVisibility: "Navigation buttons visibility" => "ナビゲーションボタンの可視性"
// p.navigationTitle: "Navigation title" => "ナビゲーション タイトル"
// p.navigationDescription: "Navigation description" => "ナビゲーションの説明"
// p.longTap: "Long tap" => "ロングタップ"
// p.autoGrow: "Auto grow" => "自動拡張"
// p.allowResize: "Allow resizing" => "サイズ変更を許可する"
// p.acceptCarriageReturn: "Accept carriage return" => "キャリッジリターンを受け入れる"
// p.displayMode: "Display mode" => "表示モード"
// p.rateType: "Rate type" => "レートタイプ"
// p.label: "Label" => "ラベル"
// p.contentMode: "Content mode" => "コンテンツモード"
// p.imageFit: "Image fit" => "画像のフィット"
// p.altText: "Alt text" => "代替テキスト"
// p.height: "Height" => "高さ"
// p.penColor: "Pen color" => "ペンの色"
// p.backgroundColor: "Background color" => "背景色"
// p.templateElements: "Template elements" => "テンプレート要素"
// p.operator: "Operator" => "演算子"
// p.isVariable: "Is variable" => "可変"
// p.runExpression: "Run expression" => "実行式"
// p.showCaption: "Show caption" => "キャプションを表示"
// p.iconName: "Icon name" => "アイコン名"
// p.iconSize: "Icon size" => "アイコンのサイズ"
// p.precision: "Precision" => "精度"
// p.matrixDragHandleArea: "Matrix drag handle area" => "マトリックスドラッグハンドル領域"
// p.backgroundImage: "Background image" => "背景画像"
// p.backgroundImageFit: "Background image fit" => "背景画像のフィット"
// p.backgroundImageAttachment: "Background image attachment" => "背景画像の添付"
// p.backgroundOpacity: "Background opacity" => "背景の不透明度"
// p.selectToRankEnabled: "Select to rank enabled" => "選択してランク付けを有効にする"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "エリアレイアウトをランク付けするために選択する"
// p.allowCameraAccess: "Allow camera access" => "カメラへのアクセスを許可する"
// p.scaleColorMode: "Scale color mode" => "スケールカラーモード"
// p.rateColorMode: "Rate color mode" => "レートカラーモード"
// p.templateTabTitle: "Template tab title" => "テンプレートタブのタイトル"
// p.templateVisibleIf: "Template visible if" => "次の場合に表示されるテンプレート"
// p.copyDisplayValue: "Copy display value" => "表示値をコピー"
// theme.--background: "Background color" => "背景色"
// theme.--background-dim-light: "Background dim light color" => "背景の薄暗い明るい色"
// theme.--primary-foreground: "Primary foreground color" => "原色の前景色"
// theme.--foreground: "Foreground color" => "景色"
// theme.--base-unit: "Base unit" => "ベースユニット"
// theme.groupGeneral: "General" => "全般"
// theme.groupAdvanced: "Advanced" => "アドバンスド"
// theme.themeName: "Theme" => "テーマ"
// theme.themeMode: "Question appearance" => "質問の外観"
// theme.themeModePanels: "Default" => "デフォルト"
// theme.themeModeLightweight: "Without Panels" => "パネルなし"
// theme.themePaletteLight: "Light" => "光"
// theme.themePaletteDark: "Dark" => "暗い"
// theme.primaryColor: "Accent color" => "アクセントカラー"
// theme.primaryDefaultColor: "Default" => "デフォルト"
// theme.primaryDarkColor: "Hover" => "ホバー"
// theme.primaryLightColor: "Selected" => "入選"
// theme.backgroundDimColor: "Background color" => "背景色"
// theme.backgroundImage: "Background image" => "背景画像"
// theme.backgroundImageFitAuto: "Auto" => "自動"
// theme.backgroundImageFitCover: "Cover" => "覆う"
// theme.backgroundImageFitContain: "Contain" => "含む"
// theme.backgroundOpacity: "Opacity" => "不透明"
// theme.backgroundImageAttachmentFixed: "Fixed" => "付け"
// theme.backgroundImageAttachmentScroll: "Scroll" => "スクロール"
// theme.panelBackgroundTransparency: "Panel background opacity" => "パネルの背景の不透明度"
// theme.questionBackgroundTransparency: "Question background opacity" => "質問の背景の不透明度"
// theme.questionPanel: "Panel background and corner radius" => "パネルの背景と角の半径"
// theme.questionTitle: "Question title font" => "質問タイトルのフォント"
// theme.questionDescription: "Question description font" => "質問の説明フォント"
// theme.editorPanel: "Input element" => "入力要素"
// theme.editorFont: "Input element font" => "入力要素のフォント"
// theme.backcolor: "Default background" => "デフォルトの背景"
// theme.hovercolor: "Hover background" => "ホバー背景"
// theme.borderDecoration: "Border decoration" => "ボーダーデコレーション"
// theme.accentBackground: "Accent background" => "アクセントの背景"
// theme.accentForeground: "Accent foreground" => "アクセントの前景"
// theme.primaryForecolor: "Default color" => "デフォルトの色"
// theme.primaryForecolorLight: "Disabled color" => "無効色"
// theme.linesColors: "Minor line colors" => "マイナーラインカラー"
// theme.borderDefault: "Darker" => "暗い"
// theme.borderLight: "Lighter" => "ライター"
// theme.fontFamily: "Font family" => "フォントファミリ"
// theme.fontSize: "Font size" => "文字サイズ"
// theme.color: "Color" => "色"
// theme.size: "Size" => "大きさ"
// theme.fontWeightRegular: "Regular" => "レギュラー"
// theme.fontWeightHeavy: "Heavy" => "重い"
// theme.fontWeightSemiBold: "Semi-bold" => "半太字"
// theme.fontWeightBold: "Bold" => "ボールド"
// theme.scale: "Scale" => "規模"
// theme.cornerRadius: "Corner radius" => "コーナー半径"
// theme.surveyTitle: "Survey title font" => "アンケートタイトルのフォント"
// theme.pageTitle: "Page title font" => "ページタイトルのフォント"
// theme.pageDescription: "Page description font" => "ページ記述フォント"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "シャドウ効果を追加"
// theme.opacity: "Opacity" => "不透明"
// theme.boxShadowBlur: "Blur" => "滲む"
// theme.boxShadowSpread: "Spread" => "まん延"
// theme.boxShadowDrop: "Drop" => "落とす"
// theme.boxShadowInner: "Inner" => "内的"
// theme.questionShadow: "Shadow effects" => "シャドウ効果"
// theme.editorShadow: "Input element shadow effects" => "入力要素の影の効果"
// names.default: "Default" => "デフォルト"
// names.contrast: "Contrast" => "対照"
// names.plain: "Plain" => "平地"
// names.simple: "Simple" => "簡単"
// names.blank: "Blank" => "空砲"
// names.double: "Double" => "複"
// names.bulk: "Bulk" => "嵩"
// names.pseudo-3d: "Pseudo 3D" => "擬似 3D"
// names.playful: "Playful" => "遊戯的"
// names.ultra: "Ultra" => "ウルトラ"
// colors.teal: "Teal" => "小鴨"
// colors.blue: "Blue" => "青い"
// colors.purple: "Purple" => "紫"
// colors.orchid: "Orchid" => "蘭"
// colors.tulip: "Tulip" => "チューリップ"
// colors.brown: "Brown" => "褐色"
// colors.green: "Green" => "緑"
// names.sharp: "Sharp" => "鋭い"
// names.borderless: "Borderless" => "ボーダレス"
// names.flat: "Flat" => "平"
// names.doubleborder: "Double Border" => "二重ボーダー"
// names.layered: "Layered" => "層状"
// names.solid: "Solid" => "固体"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "この言語のすべての文字列を削除してもよろしいですか?"
// ed.themeResetButton: "Reset theme settings to default" => "テーマ設定をデフォルトにリセットする"
// theme.placeholderColor: "Placeholder color" => "プレースホルダの色"
// ed.themeSettings: "Theme Settings" => "テーマ設定"
// ed.themeSettingsTooltip: "Open theme settings" => "テーマ設定を開く"
// pe.resetToDefaultCaption: "Reset" => "リセット"
// pv.file: "Local files" => "ローカルファイル"
// pv.camera: "Camera" => "カメラ"
// pv.file-camera: "Local files or camera" => "ローカルファイルまたはカメラ"
// ed.translateUsigAI: "Auto-translate All" => "すべて自動翻訳"
// ed.translationDialogTitle: "Untranslated strings" => "未翻訳の文字列"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "{0}項目以上入力してください"
// lg.question_resetValueName: "Reset question value" => "質問値のリセット"
// lg.column_resetValue: "Reset column value" => "列の値をリセット"
// pe.markRequired: "Mark as required" => "必須としてマーク"
// pe.removeRequiredMark: "Remove the required mark" => "必要なマークを削除する"
// p.resetValueIf: "Reset value if" => "次の場合に値をリセット"
// lg.question_setValueName: "Set question value" => "質問値の設定"
// lg.column_resetValueName: "Reset column value" => "列の値をリセット"
// lg.column_setValueName: "Set column value" => "列の値を設定する"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => "結果が対象の質問に割り当てられる式。"
// survey.title: "Title" => "タイトル"
// page.title: "Title" => "タイトル"
// p.setValueIf: "Set value if" => "次の場合に値を設定します"
// theme.groupHeader: "Header" => "ヘッダ"
// theme.coverTitleForecolor: "Title forecolor" => "タイトル前色"
// theme.coverOverlapEnabled: "Overlap" => "オーバーラップ"
// theme.backgroundImageFitFill: "Stretch" => "伸ばす"
// theme.backgroundImageFitTile: "Tile" => "瓦"
// theme.headerView: "View" => "眺める"
// theme.headerViewBasic: "Basic" => "基本的な"
// theme.headerViewAdvanced: "Advanced" => "アドバンスド"
// theme.coverInheritWidthFrom: "Content area width" => "コンテンツ領域の幅"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "調査と同じ"
// theme.coverInheritWidthFromPage: "Fit to page" => "ページに合わせる"
// theme.coverTextAreaWidth: "Text width" => "テキスト幅"
// theme.coverBackgroundColorSwitch: "Background color" => "背景色"
// theme.coverBackgroundColorNone: "None" => "何一つ"
// theme.coverBackgroundColorAccentColor: "Accent color" => "アクセントカラー"
// theme.coverBackgroundColorCustom: "Custom" => "習慣"
// theme.horizontalAlignmentLeft: "Left" => "左"
// theme.horizontalAlignmentCenter: "Center" => "センター"
// theme.horizontalAlignmentRight: "Right" => "右"
// theme.verticalAlignmentTop: "Top" => "ページのトップへ"
// theme.verticalAlignmentMiddle: "Middle" => "中央"
// theme.verticalAlignmentBottom: "Bottom" => "底"
// lg.question_resetValueText: "reset value for question: {0}" => "質問のリセット値:{0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "値の割り当て: 質問への{1}: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "列のセル値をリセット:{0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "セル値の割り当て:列への{1}:{0}"
// ed.surveyJsonExportButton: "Export" => "輸出"
// ed.surveyJsonImportButton: "Import" => "輸入"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "クリップボードにコピー"
// pe.filePlaceholder: "File placeholder text" => "ファイル プレースホルダー テキスト"
// pe.photoPlaceholder: "Photo placeholder text" => "写真の代替テキスト"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "ファイルまたは写真のプレースホルダーテキスト"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "「ソースタイプ」が「ローカルファイル」の場合、またはカメラが利用できない場合に適用されます"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "「ソースタイプ」が「カメラ」の場合に適用されます。"
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "「ソースタイプ」が「ローカルファイルまたはカメラ」の場合に適用されます。"
// theme.groupBackground: "Background" => "バックグラウンド"
// theme.groupAppearance: "Appearance" => "様子"
// theme.coverDescriptionForecolor: "Description forecolor" => "説明前色"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "本当にテーマをリセットしますか?すべてのカスタマイズが失われます。"
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "はい、テーマをリセットします"
// theme.groupBackground: "Background" => "バックグラウンド"
// theme.groupAppearance: "Appearance" => "様子"
// theme.coverDescriptionForecolor: "Description forecolor" => "説明前色"
// theme.coverInheritWidthFromContainer: "Fit to container" => "コンテナに合わせる"
// signaturepad.showPlaceholder: "Show the placeholder" => "プレースホルダーを表示する"
// signaturepad.placeholder: "Placeholder text" => "プレースホルダテキスト"
// theme.surveyDescription: "Survey description font" => "調査の説明フォント"
// ed.prevFocus: "Focus previous" => "前に焦点を合わせる"
// ed.nextFocus: "Focus next" => "次の焦点"
// ed.saveTheme: "Save Theme" => "テーマを保存"
// ed.saveThemeTooltip: "Save Theme" => "テーマを保存"
// lg.page_requireName: "Make page required" => "ページを必須にする"
// lg.panel_requireName: "Make page required" => "ページを必須にする"
// signaturepad.signatureWidth: "Signature area width" => "署名領域の幅"
// signaturepad.signatureHeight: "Signature area height" => "署名領域の高さ"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "署名領域の自動スケーリング"
// signaturepad.penMinWidth: "Minimum pen width" => "最小ペン幅"
// signaturepad.penMaxWidth: "Maximum pen width" => "ペンの最大幅"
// theme.logoPosition: "Logo position" => "ロゴの位置"
// theme.coverTitlePosition: "Title position" => "タイトルの位置"
// theme.coverDescriptionPosition: "Description position" => "記述の位置"
// ed.propertyGridNoResultsFound: "No results found" => "結果が見つかりませんでした"
// pv.leftRight: "Left and right" => "左右"
// p.sourceType: "Source type" => "ソースの種類"
// p.fitToContainer: "Fit to container" => "コンテナにフィット"
// p.setValueExpression: "Set value expression" => "設定値式"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "選択肢は Web サービスから読み込まれます。"
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "設定に移動"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "読み込まれた選択肢オプションのプレビュー"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "行での回答の重複を防ぐ"
// theme.advancedMode: "Advanced mode" => "詳細モード"
// theme.backgroundCornerRadius: "Background and corner radius" => "背景と角の半径"
// theme.colorsTitle: "Colors" => "色"
// theme.font: "Font" => "フォント"
// theme.lines: "Lines" => "台詞"
// theme.titleFont: "Title font" => "タイトルのフォント"
// theme.descriptionFont: "Description font" => "説明フォント"
// theme.shadow: "Shadow effects" => "影の効果"
// ed.translateUsigAIFrom: "Translate from: " => "言語の選択："
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "[回答を拒否] オプションを許可する"
// pe.showDontKnowItem: "Allow the Don't Know option" => "[わからない] オプションを許可する"