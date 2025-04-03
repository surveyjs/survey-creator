import { setupLocale } from "survey-creator-core";

export var jaStrings = {
  // survey templates
  survey: {
    edit: "編集",
    externalHelpLink: "アンケート作成方法の動画を見る",
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
  // Creator tabs
  tabs: {
    preview: "プレビュー",
    theme: "テーマ",
    translation: "翻訳",
    designer: "編集",
    json: "JSONエディタ",
    logic: "アンケートのロジック"
  },
  // Question types
  qt: {
    default: "デフォルト",
    checkbox: "チェックボックス",
    comment: "コメント",
    imagepicker: "画像選択",
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
    boolean: "二者択一",
    expression: "式（読み取り専用）",
    signaturepad: "署名パッド",
    buttongroup: "ボタングループ"
  },
  toolboxCategories: {
    general: "全体の設定",
    choice: "選択の質問",
    text: "テキスト入力の質問",
    containers: "コンテナー",
    matrix: "マトリックスの質問",
    misc: "その他"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "デフォルト（{0}）",
    survey: "アンケート",
    settings: "アンケートの設定",
    settingsTooltip: "アンケートの設定を開く",
    surveySettings: "アンケート設定",
    surveySettingsTooltip: "アンケート設定",
    themeSettings: "テーマ設定",
    themeSettingsTooltip: "テーマ設定",
    creatorSettingTitle: "クリエイター設定",
    showPanel: "パネルを表示する",
    hidePanel: "パネルを非表示にする",
    prevSelected: "前を選択",
    nextSelected: "[次へ] を選択します。",
    prevFocus: "前にフォーカス",
    nextFocus: "次にフォーカス",
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
    defaultV2Theme: "デフォルト",
    modernTheme: "モダン",
    defaultTheme: "デフォルト (レガシー)",
    testSurveyAgain: "アンケートを再度テストする",
    testSurveyWidth: "アンケートの幅： ",
    navigateToMsg: "次の場所に移動する必要がありました：",
    saveSurvey: "アンケートを保存する",
    saveSurveyTooltip: "アンケートを保存する",
    saveTheme: "テーマを保存",
    saveThemeTooltip: "テーマを保存",
    jsonHideErrors: "エラーを隠す",
    jsonShowErrors: "エラーを表示",
    undo: "元に戻す",
    redo: "やり直す",
    undoTooltip: "最後の変更を元に戻す",
    redoTooltip: "変更をやり直す",
    expandTooltip: "膨らむ",
    collapseTooltip: "倒れる",
    expandAllTooltip: "すべて展開",
    collapseAllTooltip: "すべて折りたたむ",
    zoomInTooltip: "ズームインする",
    zoom100Tooltip: "100%にズーム",
    zoomOutTooltip: "ズームアウト",
    lockQuestionsTooltip: "質問の展開/折りたたみ状態のロック",
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
    toolboxFilteredTextPlaceholder: "「検索」...",
    toolboxNoResultsFound: "結果が見つかりませんでした",
    propertyGridFilteredTextPlaceholder: "検索するタイプ...",
    propertyGridNoResultsFound: "結果が見つかりませんでした",
    propertyGridPlaceholderTitle: "フォームの設定を開始する",
    propertyGridPlaceholderDescription: "任意のカテゴリアイコンをクリックして、アンケート設定を探索します。追加の設定は、デザイン画面にアンケート要素を追加すると使用可能になります。",
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
    addLanguageTooltip: "言語を追加",
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
    translationSource: "源：",
    translationTarget: "ターゲット：",
    translationYouTubeNotSupported: "YouTube リンクはサポートされていません。",
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
    pagePlaceHolder: "ページは空です。ツールボックスから要素をドラッグするか、下のボタンをクリックします。",
    imagePlaceHolder: "ここに画像をドラッグ&ドロップするか、下のボタンをクリックしてアップロードする画像を選択してください",
    surveyPlaceHolderMobile: "下の「質問を追加」ボタンをクリックして、フォームの作成を開始してください。",
    surveyPlaceholderTitle: "フォームが空です",
    surveyPlaceholderTitleMobile: "フォームが空です",
    surveyPlaceholderDescription: "ツールボックスから要素をドラッグするか、下のボタンをクリックします。",
    surveyPlaceholderDescriptionMobile: "ツールボックスから要素をドラッグするか、下のボタンをクリックします。",
    previewPlaceholderTitle: "プレビューなし",
    previewPlaceholderTitleMobile: "プレビューなし",
    previewPlaceholderDescription: "調査には、表示されている要素は含まれていません。",
    previewPlaceholderDescriptionMobile: "調査には、表示されている要素は含まれていません。",
    translationsPlaceholderTitle: "翻訳する文字列はありません",
    translationsPlaceholderTitleMobile: "翻訳する文字列はありません",
    translationsPlaceholderDescription: "フォームに要素を追加するか、ツールバーの文字列フィルターを変更します。",
    translationsPlaceholderDescriptionMobile: "フォームに要素を追加するか、ツールバーの文字列フィルターを変更します。",
    pagePlaceHolderMobile: "下の「質問を追加」ボタンをクリックして、ページに新しい要素を追加します。",
    panelPlaceHolderMobile: "下の「質問を追加」ボタンをクリックして、パネルに新しい要素を追加します。",
    imagePlaceHolderMobile: "下のボタンをクリックして、アップロードする画像を選択してください",
    imageChooseImage: "画像を選択",
    addNewTypeQuestion: "{0}を追加", //{0} is localizable question type
    chooseLogoPlaceholder: "[ロゴ]",
    choices_Item: "アイテム",
    selectFile: "ファイルを選択",
    removeFile: "ファイルを削除する",
    lg: {
      addNewItem: "新しいルールを追加",
      empty_tab: "調査のフローをカスタマイズするルールを作成します。",
      logicPlaceholderTitle: "論理的なルールはありません",
      logicPlaceholderTitleMobile: "論理的なルールはありません",
      logicPlaceholderDescription: "調査のフローをカスタマイズするルールを作成します。",
      logicPlaceholderDescriptionMobile: "調査のフローをカスタマイズするルールを作成します。",
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
      question_resetValueText: "質問のリセット値:{0}", //{0} question name.
      question_setValueText: "値の割り当て: 質問への{1}: {0}",
      column_visibilityText: "質問{1}の列{0}を表示する", //{0} column name, {1} question name
      column_enableText: "質問の列{0}を有効にする{1}", //{0} column name, {1} question name
      column_requireText: "質問{1}の列{0}を必須にする", //{0} column name, {1} question name
      column_resetValueText: "列のセル値をリセット:{0}", //{0} column name
      column_setValueText: "セル値の割り当て:列への{1}:{0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "パネル名",
      title: "パネルタイトル",
      description: "パネルの説明",
      visibleIf: "パネルを表示するのは、次の場合です",
      requiredIf: "次の場合は、パネルを必須にします",
      questionOrder: "パネル内の質問の順序",
      page: "親ページ",
      startWithNewLine: "パネルを新しい行に表示する",
      state: "パネル折りたたみ状態",
      width: "インラインパネルの幅",
      minWidth: "最小パネル幅",
      maxWidth: "最大パネル幅",
      showNumber: "このパネルに番号を付ける"
    },
    panellayoutcolumn: {
      effectiveWidth: "有効幅、%",
      questionTitleWidth: "質問タイトルの幅、px"
    },
    paneldynamic: {
      name: "パネル名",
      title: "パネルタイトル",
      description: "パネルの説明",
      visibleIf: "パネルを表示するのは、次の場合です",
      requiredIf: "次の場合は、パネルを必須にします",
      page: "パネルをページに移動する",
      startWithNewLine: "パネルを新しい行に表示する",
      state: "パネル折りたたみ状態",
      width: "インラインパネルの幅",
      minWidth: "最小パネル幅",
      maxWidth: "最大パネル幅",
      confirmDelete: "パネルの削除を確認する",
      templateDescription: "パネル記述パターン",
      templateTitle: "パネル・タイトル・パターン",
      noEntriesText: "空のパネル・テキスト",
      templateTabTitle: "タブ タイトルのパターン",
      tabTitlePlaceholder: "タブ タイトルのプレースホルダー",
      templateVisibleIf: "個々のパネルを表示するのは、次の場合です",
      showNumber: "パネルに番号を付ける",
      titleLocation: "パネルタイトルの配置",
      descriptionLocation: "パネル記述の位置合わせ",
      templateQuestionTitleLocation: "質問タイトルの配置",
      templateQuestionTitleWidth: "質問タイトルの幅",
      templateErrorLocation: "エラー・メッセージのアライメント",
      newPanelPosition: "新しいパネルの位置",
      showRangeInProgress: "進行状況バーを表示する",
      keyName: "次の質問で回答の重複を防ぐ"
    },
    question: {
      name: "質問名",
      title: "質問のタイトル",
      description: "質問の説明",
      visibleIf: "次の場合に質問を表示します。",
      requiredIf: "次の場合は質問を必須にします",
      page: "親ページ",
      state: "質問ボックスの折りたたみ状態",
      showNumber: "この質問に番号を付ける",
      titleLocation: "質問タイトルの配置",
      descriptionLocation: "質問の説明の配置",
      errorLocation: "エラー・メッセージのアライメント",
      indent: "内側のインデントを増やす",
      width: "インラインの質問の幅",
      minWidth: "質問の最小幅",
      maxWidth: "質問の最大幅",
      textUpdateMode: "入力フィールド値の更新"
    },
    signaturepad: {
      signatureWidth: "署名領域の幅",
      signatureHeight: "署名領域の高さ",
      signatureAutoScaleEnabled: "署名領域の自動スケーリング",
      showPlaceholder: "プレースホルダーを表示する",
      placeholder: "プレースホルダテキスト",
      placeholderReadOnly: "読み取り専用モードまたはプレビューモードのプレースホルダーテキスト",
      allowClear: "署名領域内に [クリア] ボタンを表示する",
      penMinWidth: "最小ペン幅",
      penMaxWidth: "ペンの最大幅",
      penColor: "ストロークの色"
    },
    comment: {
      rows: "入力フィールドの高さ (行単位)"
    },
    showQuestionNumbers: "質問番号を表示する",
    questionStartIndex: "質問開始インデックス（1、2または「A」、「a」）",
    expression: {
      name: "エクスプレッション名",
      title: "エクスプレッションのタイトル",
      description: "式の説明",
      expression: "表現"
    },
    trigger: {
      expression: "表現"
    },
    calculatedvalue: {
      expression: "表現"
    },
    // survey templates
    survey: {
      title: "タイトル",
      description: "調査内容",
      readOnly: "調査を読み取り専用にする"
    },
    page: {
      name: "ページ名",
      title: "タイトル",
      description: "ページの説明",
      visibleIf: "次の場合にページを表示します",
      requiredIf: "次の場合は、ページを必須にします",
      timeLimit: "ページを終了するための制限時間 (秒単位)",
      questionOrder: "ページ上の質問の順序"
    },
    matrixdropdowncolumn: {
      name: "列名",
      title: "列のタイトル",
      isUnique: "回答の重複を防ぐ",
      width: "列幅",
      minWidth: "最小列幅",
      rows: "入力フィールドの高さ (行単位)",
      visibleIf: "次の場合に列を表示します",
      requiredIf: "次の場合は、列を必須にします",
      showInMultipleColumns: "個別の列に各オプション"
    },
    multipletextitem: {
      name: "名前",
      title: "タイトル"
    },
    masksettings: {
      saveMaskedValue: "アンケート結果にマスクされた値を保存する"
    },
    patternmask: {
      pattern: "値パターン"
    },
    datetimemask: {
      min: "最小値",
      max: "最大値"
    },
    numericmask: {
      allowNegativeValues: "負の値を許可する",
      thousandsSeparator: "1000 の位の区切り記号",
      decimalSeparator: "小数点記号",
      precision: "値の精度",
      min: "最小値",
      max: "最大値"
    },
    currencymask: {
      prefix: "通貨接頭辞",
      suffix: "通貨の接尾辞"
    },
    imageHeight: "イメージの高さ",
    imageWidth: "イメージの幅",
    valueName: "値名",
    defaultDisplayValue: "ダイナミックテキストのデフォルトの表示値",
    rateDescriptionLocation: "ラベルの配置",
    size: "入力フィールドの幅 (文字単位)",
    cellErrorLocation: "セル・エラー・メッセージの配置",
    enabled: "有効",
    disabled: "無効",
    inherit: "受け継ぐ",
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
    "listIsEmpty@columns": "まだ列がありません",
    "listIsEmpty@gridLayoutColumns": "レイアウト列がまだありません",
    "listIsEmpty@rows": "まだ行がありません",
    "listIsEmpty@validators": "入力規則はまだありません",
    "listIsEmpty@calculatedValues": "カスタム変数はまだありません",
    "listIsEmpty@triggers": "トリガーはまだありません",
    "listIsEmpty@navigateToUrlOnCondition": "リンクはまだありません",
    "listIsEmpty@pages": "まだページがありません",
    "addNew@choices": "選択肢を追加する",
    "addNew@columns": "新しい列を追加",
    "addNew@rows": "新しい行を追加",
    "addNew@validators": "新しいルールを追加",
    "addNew@calculatedValues": "新しい変数を追加",
    "addNew@triggers": "新しいトリガーを追加する",
    "addNew@navigateToUrlOnCondition": "新しい URL を追加",
    "addNew@pages": "新しいページを追加",
    expressionIsEmpty: "表現が空白です",
    value: "値",
    text: "テキスト",
    rowid: "行ID",
    imageLink: "画像リンク",
    columnEdit: "行編集: {0}",
    itemEdit: "アイテム編集: {0}",
    url: "URL",
    path: "パス",
    choicesbyurl: {
      url: "Web サービスの URL",
      valueName: "次の JSON フィールドから値を取得する"
    },
    titleName: "タイトル名",
    imageLinkName: "次の JSON フィールドから画像の URL を取得する",
    allowEmptyResponse: "空の応答を許可",
    titlePlaceholder: "タイトルを入力",
    surveyTitlePlaceholder: "調査タイトルを入力",
    pageTitlePlaceholder: "ページタイトルを入力",
    startPageTitlePlaceholder: "スタートページ",
    descriptionPlaceholder: "詳細を入力",
    surveyDescriptionPlaceholder: "調査の詳細を入力",
    pageDescriptionPlaceholder: "ページの詳細を入力",
    textWrapEnabled: "ラップの選択肢",
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
    allowCustomChoices: "カスタム選択を許可する",
    visible: "表示",
    isRequired: "必須",
    markRequired: "必須としてマーク",
    removeRequiredMark: "必要なマークを削除する",
    eachRowRequired: "全ての列で回答必須",
    eachRowUnique: "行での回答の重複を防ぐ",
    requiredErrorText: "必要なエラーテキスト",
    startWithNewLine: "ニューラインで開始",
    rows: "列数",
    cols: "行の数",
    placeholder: "プレースホルダの入力",
    showPreview: "プレビューエリア表示",
    storeDataAsText: "ファイルのコンテンツをテキストとしてJSONの結果に保存",
    maxSize: "ファイルの最大サイズ（byte）",
    rowCount: "列数",
    columnLayout: "行のレイアウト",
    addRowButtonLocation: "列ボタンのロケーションを追加",
    transposeData: "行を列に転置する",
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
    clearInvisibleValues: "非表示の値をクリアする",
    cookieName: "Cookie名（ローカルで2回アンケートを実行しないようにするため）",
    partialSendEnabled: "次のページにアンケート結果を送信する",
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
    navigationButtonsLocation: "ナビゲーション ボタンの配置",
    showPrevButton: "「前へ」ボタンを表示する（ユーザーは前のページに戻ることができます）",
    firstPageIsStartPage: "アンケートの最初のページは、開始ページです。",
    showCompletePage: "完了したページを最後に表示する（completedHtml）",
    autoAdvanceEnabled: "すべての質問に回答すると、自動的に次のページに移動します",
    autoAdvanceAllowComplete: "調査に自動的に回答する",
    showProgressBar: "プログレスバーを表示する",
    progressBarLocation: "プログレスバーの配置",
    questionTitleLocation: "質問のタイトルの場所",
    questionTitleWidth: "質問タイトルの幅",
    requiredMark: "質問には記号が必要",
    questionTitleTemplate: "質問タイトルのテンプレート、デフォルトは「{no}. {require} {title}」です",
    questionErrorLocation: "質問エラーの場所",
    autoFocusFirstQuestion: "ページを変える際に最初の質問に焦点を合わせる",
    questionOrder: "ページ上の要素の順序",
    timeLimit: "アンケート終了までの最長時間",
    timeLimitPerPage: "アンケートの1ページを終了するまでの最長時間",
    showTimer: "タイマーを使用する",
    timerLocation: "タイマーパネルを表示する",
    timerInfoMode: "タイマーパネルモードを表示",
    renderMode: "レンダーモード",
    allowAddPanel: "パネルの追加を許可",
    allowRemovePanel: "パネルの削除を許可",
    addPanelText: "パネルテキストを追加しています",
    removePanelText: "パネルテキストを削除しています",
    isSinglePage: "1ページ上にすべてのエレメントを表示",
    html: "HTML",
    setValue: "答える",
    dataFormat: "画像フォーマット",
    allowAddRows: "行の追加を許可する",
    allowRemoveRows: "行の削除を許可する",
    allowRowReorder: "行のドラッグ アンド ドロップを許可する",
    responsiveImageSizeHelp: "正確な画像の幅または高さを指定した場合には適用されません。",
    minImageWidth: "最小画像幅",
    maxImageWidth: "最大画像幅",
    minImageHeight: "最小画像の高さ",
    maxImageHeight: "最大画像の高さ",
    minValue: "最小値",
    maxValue: "最大値",
    caseInsensitive: "大文字と小文字を区別しない",
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
    maxCommentLength: "コメントの最大長 (文字数)",
    commentAreaRows: "コメント領域の高さ (行単位)",
    autoGrowComment: "必要に応じてコメント領域を自動展開する",
    allowResizeComment: "ユーザーがテキスト領域のサイズを変更できるようにする",
    textUpdateMode: "テキストの質問値を更新する",
    maskType: "定型入力の種類",
    autoFocusFirstError: "最初の無効な回答にフォーカスを設定する",
    checkErrorsMode: "検証の実行",
    validateVisitedEmptyFields: "フォーカスを失った空のフィールドの検証",
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
    searchMode: "検索モード",
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
    panelCount: "初期パネル数",
    minPanelCount: "最小パネル数",
    maxPanelCount: "最大パネル数",
    panelsState: "内側パネルの展開状態",
    prevPanelText: "前のパネルボタンのツールチップ",
    nextPanelText: "[次へ] パネル ボタンのツールチップ",
    removePanelButtonLocation: "[パネルを削除] ボタンの位置",
    hideIfRowsEmpty: "行がない場合は質問を非表示にする",
    hideColumnsIfEmpty: "行がない場合は列を非表示にする",
    rateValues: "カスタムレート値",
    rateCount: "レート数",
    autoGenerate: "レート値を指定する方法は?",
    hideIfChoicesEmpty: "選択肢がない場合は質問を非表示にする",
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
    logoWidth: "ロゴの幅 (CSS で受け入れられる値)",
    logoHeight: "ロゴの高さ (CSS で受け入れられる値)",
    readOnly: "読み取り専用",
    enableIf: "次の場合に編集可能",
    noRowsText: "\"行なし\" メッセージ",
    separateSpecialChoices: "個別の特別な選択肢 (なし、その他、すべて選択)",
    choicesFromQuestion: "次の質問から選択肢をコピーする",
    choicesFromQuestionMode: "どの選択肢をコピーするか?",
    choiceValuesFromQuestion: "次の行列列またはパネルの質問の値を選択肢IDとして使用します",
    choiceTextsFromQuestion: "次の行列の列またはパネルの質問の値を選択テキストとして使用します",
    progressBarShowPageTitles: "プログレスバーにページタイトルを表示する",
    progressBarShowPageNumbers: "プログレスバーにページ番号を表示する",
    showCommentArea: "コメント領域を表示する",
    commentPlaceholder: "コメント領域のプレースホルダー",
    displayRateDescriptionsAsExtremeItems: "レートの説明を極値として表示する",
    rowOrder: "行の順序",
    columnsLayout: "列のレイアウト",
    columnColCount: "ネストされた列数",
    correctAnswer: "正解",
    defaultPanelValue: "デフォルト値",
    cells: "セルテキスト",
    fileInputPlaceholder: "ファイルを選択するか、ファイルリンクを貼り付けます...",
    keyName: "キー列",
    itemvalue: {
      visibleIf: "次の場合にオプションを表示します",
      enableIf: "次の場合は、オプションを選択可能にします"
    },
    "itemvalue@rows": {
      visibleIf: "次の場合に行を表示します。",
      enableIf: "次の場合に行を編集可能にします"
    },
    imageitemvalue: {
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
    previewMode: "プレビューモード",
    gridLayoutEnabled: "グリッド レイアウトの有効化",
    gridLayoutColumns: "グリッド レイアウト列",
    maskSettings: "マスク設定",
    detailErrorLocation: "行拡張エラーメッセージの配置",
    // Creator tabs
    tabs: {
      panel: {
        layout: "パネルレイアウト"
      },
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
      mask: "定型入力設定",
      layout: {
        panel: "レイアウト",
        question: "レイアウト",
        base: "レイアウト"
      },
      data: "データ",
      validation: "検証",
      cells: "セル",
      showOnCompleted: "完成したものに表示",
      logo: "アンケートタイトルのロゴ",
      slider: "スライダー",
      expression: "表現",
      questionSettings: "質問設定",
      header: "ヘッダ",
      background: "バックグラウンド",
      appearance: "様子",
      accentColors: "アクセントカラー",
      surfaceBackground: "サーフェスの背景",
      scaling: "スケーリング",
      others: "その他"
    },
    editProperty: "プロパティ'{0}'を編集",
    items: "[ アイテム: {0} ]",
    choicesVisibleIf: "選択肢は次の場合に表示されます。",
    choicesEnableIf: "次の場合に選択肢を選択できます。",
    columnsEnableIf: "列は次の場合に表示されます。",
    rowsEnableIf: "行は次の場合に表示されます。",
    innerIndent: "内側のインデントを追加する",
    copyDefaultValueFromLastEntry: "最後のエントリの回答をデフォルトとして使用する",
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
    verticalAlign: "垂直方向の配置",
    alternateRows: "代替行",
    columnsVisibleIf: "列は次の場合に表示されます。",
    rowsVisibleIf: "行は次の場合に表示されます。",
    otherPlaceholder: "コメント領域のプレースホルダー",
    filePlaceholder: "ファイル プレースホルダー テキスト",
    photoPlaceholder: "写真の代替テキスト",
    fileOrPhotoPlaceholder: "ファイルまたは写真のプレースホルダーテキスト",
    rateType: "レートタイプ",
    url_placeholder: "例:https://api.example.com/books",
    path_placeholder: "例:categories.fiction",
    questionStartIndex_placeholder: "例:a)",
    width_placeholder: "例:6インチ",
    minWidth_placeholder: "例:600px",
    maxWidth_placeholder: "例:50%",
    imageHeight_placeholder: "自動",
    imageWidth_placeholder: "自動",
    itemTitleWidth_placeholder: "例:100px",
    theme: {
      themeName: "テーマ",
      isPanelless: "質問の表示設定",
      editorPanel: "背景と角の半径",
      questionPanel: "背景と角の半径",
      primaryColor: "アクセントカラー",
      panelBackgroundTransparency: "パネル背景の不透明度",
      questionBackgroundTransparency: "質問の背景の不透明度",
      fontSize: "フォントサイズ",
      scale: "規模",
      cornerRadius: "コーナR(Corner Radius)",
      advancedMode: "詳細モード",
      pageTitle: "タイトルのフォント",
      pageDescription: "説明フォント",
      questionTitle: "タイトルのフォント",
      questionDescription: "説明フォント",
      editorFont: "フォント",
      backgroundOpacity: "不透明",
      "--sjs-font-family": "フォントファミリー",
      "--sjs-general-backcolor-dim": "背景色",
      "--sjs-primary-backcolor": "アクセントの背景",
      "--sjs-primary-forecolor": "アクセントの前景",
      "--sjs-special-red": "エラーメッセージ",
      "--sjs-shadow-small": "影の効果",
      "--sjs-shadow-inner": "影の効果",
      "--sjs-border-default": "色"
    },
    "header@header": {
      headerView: "眺める",
      logoPosition: "ロゴの位置",
      surveyTitle: "調査タイトルのフォント",
      surveyDescription: "調査の説明フォント",
      headerTitle: "調査タイトルのフォント",
      headerDescription: "調査の説明フォント",
      inheritWidthFrom: "コンテンツ領域の幅",
      textAreaWidth: "文字幅",
      backgroundColorSwitch: "背景色",
      backgroundImage: "背景画像",
      backgroundImageOpacity: "不透明",
      overlapEnabled: "オーバーラップ",
      logoPositionX: "ロゴの位置",
      titlePositionX: "タイトルの位置",
      descriptionPositionX: "記述の位置"
    }
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
    selected: "入選",
    unselected: "未選択",
    decimal: "小数",
    currency: "通貨",
    percent: "パーセント",
    firstExpanded: "firstExpanded",
    off: "オフ",
    list: "リスト",
    carousel: "回転木馬",
    tab: "タブ",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "水平",
    vertical: "垂直",
    top: "上",
    bottom: "下",
    topBottom: "上と下",
    both: "両方",
    left: "左",
    right: "右",
    center: "センター",
    leftRight: "左右",
    middle: "中央",
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
    edit: "編集",
    display: "表示",
    contain: "含む",
    cover: "覆う",
    fill: "注ぐ",
    next: "次に",
    last: "前の",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "質問またはそのパネル/ページが非表示になったとき",
    clearInvisibleValues: {
      none: "なし"
    },
    clearIfInvisible: {
      none: "一度もない"
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
    autocomplete: {
      name: "フルネーム",
      "honorific-prefix": "接頭辞",
      "given-name": "名前",
      "additional-name": "ミドルネーム",
      "family-name": "名字",
      "honorific-suffix": "接尾辞",
      nickname: "ニックネーム",
      "organization-title": "役職",
      username: "ユーザー名",
      "new-password": "新しいパスワード",
      "current-password": "現在のパスワード",
      organization: "組織名",
      "street-address": "フルストリートアドレス",
      "address-line1": "住所1",
      "address-line2": "住所2",
      "address-line3": "住所3",
      "address-level4": "レベル4アドレス",
      "address-level3": "レベル3アドレス",
      "address-level2": "レベル2アドレス",
      "address-level1": "レベル1アドレス",
      country: "国コード",
      "country-name": "国名",
      "postal-code": "郵便番号",
      "cc-name": "カード名義人氏名",
      "cc-given-name": "カード所有者の名",
      "cc-additional-name": "カード名義人のミドルネーム",
      "cc-family-name": "カード名義人の姓",
      "cc-number": "クレジットカード番号",
      "cc-exp": "有効期限",
      "cc-exp-month": "有効期限月",
      "cc-exp-year": "有効期限",
      "cc-csc": "カードセキュリティコード",
      "cc-type": "クレジットカードの種類",
      "transaction-currency": "取引通貨",
      "transaction-amount": "取引金額",
      language: "優先言語",
      bday: "誕生日",
      "bday-day": "誕生日",
      "bday-month": "誕生日月",
      "bday-year": "誕生日の年",
      sex: "ジェンダー",
      url: "ウェブサイトURL",
      photo: "プロフィール写真",
      tel: "電話番号",
      "tel-country-code": "電話の国番号",
      "tel-national": "国内電話番号",
      "tel-area-code": "市外局番",
      "tel-local": "市内電話番号",
      "tel-local-prefix": "ローカル電話プレフィックス",
      "tel-local-suffix": "ローカル電話サフィックス",
      "tel-extension": "内線",
      email: "アドレス",
      impp: "インスタントメッセージングプロトコル"
    },
    maskType: {
      none: "何一つ",
      pattern: "パターン",
      numeric: "数値",
      datetime: "日付と時刻",
      currency: "通貨"
    },
    inputTextAlignment: {
      auto: "自動",
      left: "左",
      right: "右"
    },
    all: "すべて",
    page: "ページ",
    survey: "アンケート",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "回答が変更される前に",
    questionsOnPageMode: {
      standard: "元の構造",
      singlePage: "すべての質問を 1 ページに表示する",
      questionPerPage: "1ページにつき1つの質問を表示する"
    },
    noPreview: "プレビューなし",
    showAllQuestions: "すべての質問を含むプレビューを表示",
    showAnsweredQuestions: "回答された質問を含むプレビューを表示",
    allQuestions: "すべての質問を表示",
    answeredQuestions: "回答済みの質問のみを表示する",
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
    auto: "自動",
    showNavigationButtons: {
      none: "隠れた"
    },
    timerInfoMode: {
      combined: "両方とも"
    },
    addRowButtonLocation: {
      default: "マトリックスレイアウトに依存"
    },
    panelsState: {
      default: "ユーザーはパネルを展開または折りたたむことはできません",
      collapsed: "すべてのパネルが折りたたまれている",
      expanded: "すべてのパネルが展開されます",
      firstExpanded: "最初の展開"
    },
    widthMode: {
      static: "静的",
      responsive: "応答"
    },
    contentMode: {
      image: "画像",
      video: "ビデオ",
      youtube: "ユーチューブ"
    },
    displayMode: {
      buttons: "ボタン",
      dropdown: "ドロップダウン"
    },
    rateColorMode: {
      default: "デフォルト",
      scale: "規模"
    },
    scaleColorMode: {
      monochrome: "モノクロ",
      colored: "有色"
    },
    autoGenerate: {
      "true": "生成する",
      "false": "手動で入力する"
    },
    rateType: {
      labels: "ラベル",
      stars: "星",
      smileys: "スマイリー"
    },
    state: {
      default: "締まる"
    },
    showQuestionNumbers: {
      default: "自動番号付け",
      on: "自動番号付け",
      onPage: "各ページでリセット",
      onpanel: "各パネルでリセット",
      onPanel: "各パネルでリセット",
      recursive: "再帰的なナンバリング",
      onSurvey: "調査を続ける",
      off: "ナンバリングなし"
    },
    descriptionLocation: {
      underTitle: "質問タイトルの下",
      underInput: "入力欄の下"
    },
    selectToRankAreasLayout: {
      horizontal: "選択肢の横",
      vertical: "上記の選択肢"
    },
    displayStyle: {
      decimal: "小数",
      currency: "通貨",
      percent: "百分率",
      date: "日付"
    },
    totalDisplayStyle: {
      decimal: "小数",
      currency: "通貨",
      percent: "百分率",
      date: "日付"
    },
    rowOrder: {
      initial: "翻訳元"
    },
    questionOrder: {
      initial: "翻訳元"
    },
    progressBarLocation: {
      top: "ページのトップへ",
      bottom: "底",
      topbottom: "上部と下部",
      aboveheader: "ヘッダーの上",
      belowheader: "ヘッダーの下",
      off: "隠れた"
    },
    sum: "和",
    count: "数える",
    min: "分",
    max: "マックス",
    avg: "平均",
    searchMode: {
      contains: "含む",
      startsWith: "次で始まる"
    },
    backgroundImageFit: {
      auto: "自動",
      cover: "覆う",
      contain: "含む",
      fill: "伸ばす",
      tile: "瓦"
    },
    backgroundImageAttachment: {
      fixed: "付け",
      scroll: "スクロール"
    },
    headerView: {
      basic: "基本的な",
      advanced: "アドバンスド"
    },
    inheritWidthFrom: {
      survey: "調査と同じ",
      container: "コンテナにフィット"
    },
    backgroundColorSwitch: {
      none: "何一つ",
      accentColor: "アクセントカラー",
      custom: "習慣"
    },
    colorPalette: {
      light: "光",
      dark: "暗い"
    },
    isPanelless: {
      "false": "デフォルト",
      "true": "パネルなし"
    },
    progressBarInheritWidthFrom: {
      survey: "調査と同じ",
      container: "コンテナと同じ"
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
  peplaceholder: {
    patternmask: {
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Ex.: mm/dd/yyyy"
    },
    currencymask: {
      prefix: "Ex.: $",
      suffix: "Ex.: USD"
    },
    panelbase: {
      questionTitleWidth: "例:200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "例:30%",
      questionTitleWidth: "例:200px"
    }
  },
  pehelp: {
    panel: {
      name: "回答者には表示されないパネルID。",
      description: "パネルのサブタイトルを入力します。",
      visibleIf: "魔法の杖アイコンを使用して、パネルの表示を決定する条件付きルールを設定します。",
      enableIf: "魔法の杖アイコンを使用して、パネルの読み取り専用モードを無効にする条件付きルールを設定します。",
      requiredIf: "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。",
      questionTitleLocation: "このパネル内のすべての質問に適用されます。この設定を上書きする場合は、個々の質問のタイトル配置ルールを定義します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。",
      questionTitleWidth: "質問タイトルが質問ボックスの左側に配置されている場合に、質問タイトルの幅を一定に設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      questionErrorLocation: "パネル内のすべての質問に関連するエラーメッセージの位置を設定します。[継承] オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定を適用します。",
      questionOrder: "質問の元の順序を維持するか、ランダム化します。[継承] オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定を適用します。",
      page: "パネルを選択したページの末尾に再配置します。",
      innerIndent: "パネルの内容とパネルボックスの左の境界線の間にスペースまたは余白を追加します。",
      startWithNewLine: "選択を解除すると、前の質問またはパネルと 1 行でパネルが表示されます。パネルがフォームの最初の要素である場合、この設定は適用されません。",
      state: "次から選択します: 「展開」 - パネルは完全に表示され、折りたたむことができます。「折りたたまれた」 - パネルにはタイトルと説明のみが表示され、展開できます。「ロック」 - パネルは完全に表示され、折りたたむことはできません。",
      width: "パネルの幅を、同じ行内の他の調査要素に比例して設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      showQuestionNumbers: "このパネル内にネストされた質問に番号を割り当てます。",
      effectiveColSpan: "このパネルがグリッドレイアウト内で何列にまたがっているかを指定します。",
      gridLayoutColumns: "このテーブルでは、パネル内の各グリッド列を構成できます。行内の要素の最大数に基づいて、各列の幅の割合が自動的に設定されます。グリッドレイアウトをカスタマイズするには、これらの値を手動で調整し、各列のすべての質問のタイトル幅を定義します。"
    },
    paneldynamic: {
      name: "回答者には表示されないパネルID。",
      description: "パネルのサブタイトルを入力します。",
      visibleIf: "魔法の杖アイコンを使用して、パネルの表示を決定する条件付きルールを設定します。",
      enableIf: "魔法の杖アイコンを使用して、パネルの読み取り専用モードを無効にする条件付きルールを設定します。",
      requiredIf: "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。",
      templateQuestionTitleLocation: "このパネル内のすべての質問に適用されます。この設定を上書きする場合は、個々の質問のタイトル配置ルールを定義します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。",
      templateQuestionTitleWidth: "質問タイトルが問題ボックスの左側に配置されている場合に、質問タイトルの一貫した幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      templateErrorLocation: "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。",
      errorLocation: "パネル内のすべての質問に関連するエラーメッセージの位置を設定します。[継承] オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定を適用します。",
      page: "パネルを選択したページの末尾に再配置します。",
      innerIndent: "パネルの内容とパネルボックスの左の境界線の間にスペースまたは余白を追加します。",
      startWithNewLine: "選択を解除すると、前の質問またはパネルと 1 行でパネルが表示されます。パネルがフォームの最初の要素である場合、この設定は適用されません。",
      state: "次から選択します: 「展開」 - パネルは完全に表示され、折りたたむことができます。「折りたたまれた」 - パネルにはタイトルと説明のみが表示され、展開できます。「ロック」 - パネルは完全に表示され、折りたたむことはできません。",
      width: "パネルの幅を、同じ行内の他の調査要素に比例して設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      templateTitle: "動的パネルタイトルのテンプレートを入力します。パネルの一般的な位置には {panelIndex} を使用し、表示されているパネル間の順序には {visiblePanelIndex} を使用します。これらのプレースホルダーをパターンに挿入して、自動番号付けを追加します。",
      templateTabTitle: "タブタイトルのテンプレートを入力します。パネルの一般的な位置には {panelIndex} を使用し、可視パネル間の順序には {visiblePanelIndex} を使用します。これらのプレースホルダーをパターンに挿入して、自動番号付けを追加します。",
      tabTitlePlaceholder: "タブ タイトル パターンが意味のある値を生成しない場合に適用されるタブ タイトルのフォールバック テキスト。",
      templateVisibleIf: "この設定では、動的パネル内の個々のパネルの表示を制御できます。'{panel}' プレースホルダーを使用して、式で現在のパネルを参照します。",
      titleLocation: "この設定は、このパネル内のすべての質問に自動的に継承されます。この設定を上書きする場合は、個々の質問のタイトル配置ルールを定義します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。",
      descriptionLocation: "「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「パネルタイトルの下」)を適用します。",
      newPanelPosition: "新しく追加されたパネルの位置を定義します。デフォルトでは、新しいパネルが最後に追加されます。「次へ」を選択して、現在のパネルの後に新しいパネルを挿入します。",
      copyDefaultValueFromLastEntry: "最後のパネルから回答を複製し、次に追加された動的パネルに割り当てます。",
      keyName: "質問名を参照して、各パネルでこの質問に対して一意の回答を提供するようユーザーに要求します。"
    },
    copyDefaultValueFromLastEntry: "最後の行から回答を複製し、次に追加された動的行に割り当てます。",
    defaultValueExpression: "この設定では、式に基づいてデフォルトの回答値を割り当てることができます。式には、基本的な計算 - '{q1_id} + {q2_id}'、'{age} > 60' などのブール式、関数 'iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' などを含めることができます。この式によって決定される値は、回答者の手動入力で上書きできる初期デフォルト値として機能します。",
    resetValueIf: "魔法の杖アイコンを使用して、回答者の入力を「デフォルト値式」または「値式の設定」に基づく値、または「デフォルト回答」値(どちらかが設定されている場合)にリセットするタイミングを決定する条件付きルールを設定します。",
    setValueIf: "魔法の杖アイコンを使用して、「値の設定式」をいつ実行するかを決定し、結果の値を応答として動的に割り当てる条件付きルールを設定します。",
    setValueExpression: "「値を設定する条件」ルールの条件が満たされた場合に設定される値を定義する式を指定します。式には、基本的な計算 - '{q1_id} + {q2_id}'、'{age} > 60' などのブール式、関数 'iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' などを含めることができます。この式によって決定される値は、回答者の手動入力によって上書きできます。",
    gridLayoutEnabled: "Survey Creator では、フォーム要素のインライン幅を手動で調整して、レイアウトを制御できます。これで目的の結果が得られない場合は、列ベースのシステムを使用してフォーム要素を構成するグリッドレイアウトを有効にすることができます。レイアウト列を設定するには、ページまたはパネルを選択し、「質問設定」→「グリッド列」テーブルを使用します。質問の列数を調整するには、質問を選択し、「レイアウト」→「列範囲」フィールドで目的の値を設定します。",
    question: {
      name: "回答者に表示されない質問ID。",
      description: "質問のサブタイトルを入力します。",
      visibleIf: "魔法の杖アイコンを使用して、質問の表示を決定する条件付きルールを設定します。",
      enableIf: "魔法の杖アイコンを使用して、質問の読み取り専用モードを無効にする条件付きルールを設定します。",
      requiredIf: "魔法の杖アイコンを使用して、質問に回答がない限り、アンケートの進行や送信を禁止する条件付きルールを設定します。",
      startWithNewLine: "選択を解除すると、前の質問またはパネルと 1 行で質問が表示されます。この設定は、質問がフォームの最初の要素である場合には適用されません。",
      page: "選択したページの最後に質問を再配置します。",
      state: "選択肢: 「展開」 - 質問ボックスは完全に表示され、折りたたむことができます。「折りたたまれた」 - 質問ボックスにはタイトルと説明のみが表示され、展開できます。\"Locked\" - 質問ボックスは完全に表示され、折りたたむことはできません。",
      titleLocation: "パネル、ページ、またはアンケートレベルで定義されたタイトル配置ルールを上書きします。「継承」オプションは、上位レベルの設定(設定されている場合)またはアンケートレベルの設定(デフォルトでは「トップ」)を適用します。",
      descriptionLocation: "「継承」オプションは、アンケートレベルの設定(デフォルトでは「質問タイトルの下」)を適用します。",
      errorLocation: "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。「継承」オプションは、アンケートレベルの設定(デフォルトでは「トップ」)を適用します。",
      indent: "質問の内容と質問ボックスの左の境界線の間にスペースまたは余白を追加します。",
      width: "同じ行内の他のアンケート要素に比例して質問の幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      surveyvalidator: {
        expression: "魔法の杖アイコンを使用して、質問の検証ルールを設定します。"
      },
      textUpdateMode: "次から選択します: \"On lost focus\" - 入力フィールドがフォーカスを失ったときに値が更新されます。「入力中」 - ユーザーが入力しているときに、値がリアルタイムで更新されます。「継承」オプションは、アンケートレベルの設定(デフォルトでは「フォーカスを失ったとき」)を適用します。",
      url: "任意の Web サービスを多肢選択式の質問のデータ ソースとして使用できます。選択肢の値を入力するには、データを提供するサービスの URL を入力します。",
      searchMode: "ドロップダウン リストをフィルター処理するために使用される比較演算。",
      textWrapEnabled: "選択肢オプションのテキスト(長い)は、ドロップダウンメニュー内に収まるように改行を自動的に生成します。テキストをクリップする場合は、選択を解除します。",
      effectiveColSpan: "この質問がグリッドレイアウト内で何列にまたがっているかを指定します。"
    },
    signaturepad: {
      signatureWidth: "表示される署名領域と結果の画像の幅を設定します。",
      signatureHeight: "表示される署名領域と結果の画像の高さを設定します。",
      signatureAutoScaleEnabled: "デフォルトの3:2の縦横比を維持したまま、質問ボックス内の使用可能なすべてのスペースを署名領域に埋める場合に選択します。カスタムの幅と高さの値が設定されている場合、設定ではこれらの寸法の縦横比が維持されます。"
    },
    file: {
      imageHeight: "アンケート結果の画像の高さを調整します。",
      imageWidth: "アンケート結果の画像の幅を調整します。",
      allowImagesPreview: "可能な場合は、アップロードされたファイルのサムネイル プレビューを表示します。代わりにファイルアイコンを表示する場合は、選択を解除します。"
    },
    image: {
      contentMode: "「自動」オプションでは、指定されたソースURLに基づいて、表示に適したモード(画像、動画、YouTube)が自動的に決定されます。"
    },
    imagepicker: {
      imageHeight: "高さの最小値と最大値の値を上書きします。",
      imageWidth: "幅の最小値と最大値を上書きします。",
      choices: "\"Value\" は、条件付きルールで使用される項目 ID として機能します。回答者に「テキスト」が表示されます。",
      contentMode: "「画像」と「動画」のどちらかを選択して、メディアセレクタのコンテンツモードを設定します。「画像」を選択した場合は、提供されるすべてのオプションが、JPEG、GIF、PNG、APNG、SVG、BMP、ICO形式の画像ファイルであることを確認してください。同様に、「ビデオ」を選択した場合は、すべてのオプションがMP4、MOV、WMV、FLV、AVI、MKV形式のビデオファイルへの直接リンクであることを確認してください。YouTubeのリンクは動画オプションではサポートされていませんのでご注意ください。"
    },
    text: {
      size: "この設定では、入力フィールドのサイズが変更されるだけで、質問ボックスの幅には影響しません。許容される入力長を制限するには、<b>検証→最大文字数制限</b>に移動します。"
    },
    comment: {
      rows: "入力欄に表示する行数を設定します。入力の行数が多い場合は、スクロールバーが表示されます。"
    },
    // survey templates
    survey: {
      readOnly: "回答者がアンケートに回答できないようにする場合に選択します。",
      progressBarLocation: "プログレスバーの位置を設定します。「自動」の値は、調査ヘッダーの上または下に進行状況バーを表示します。"
    },
    matrixdropdowncolumn: {
      name: "回答者に表示されない列 ID。",
      isUnique: "列に対して有効にすると、回答者はこの列内の質問ごとに一意の回答を提供する必要があります。",
      rows: "入力欄に表示する行数を設定します。入力の行数が多い場合は、スクロールバーが表示されます。",
      visibleIf: "魔法の杖アイコンを使用して、列の表示を決定する条件付きルールを設定します。",
      enableIf: "魔法の杖アイコンを使用して、列の読み取り専用モードを無効にする条件付きルールを設定します。",
      requiredIf: "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。",
      showInMultipleColumns: "選択すると、選択肢オプションごとに個別の列が作成されます。",
      colCount: "選択オプションを複数列のレイアウトで配置します。0 に設定すると、オプションは 1 行で表示されます。-1 に設定すると、実際の値は親行列の \"Nested column count\" プロパティから継承されます。"
    },
    caseInsensitive: "正規表現の大文字と小文字を同等に扱う必要がある場合に選択します。",
    widthMode: "次から選択します: \"Static\" - 固定幅を設定します。「レスポンシブ」 - アンケートを画面の全幅に表示します。「自動」 - 使用する質問タイプに応じて、2つのいずれかを適用します。",
    cookieName: "Cookieは、ユーザーが同じアンケートに2回記入するのを防ぎます。",
    logo: "画像リンクを貼り付けるか(サイズ制限なし)、フォルダアイコンをクリックして、コンピューターからファイルを参照します(最大64KB)。",
    logoWidth: "ロゴの幅をCSS単位(px、%、in、ptなど)で設定します。",
    logoHeight: "ロゴの高さを CSS 単位 (px、%、in、pt など) で設定します。",
    logoFit: "次から選択: 「なし」 - 画像は元のサイズを維持します。\"Contain\" - 画像はアスペクト比を維持しながらサイズ変更されます。「表紙」-画像は縦横比を維持しながらボックス全体を埋めます。\"Fill\" - 画像は、アスペクト比を維持せずにボックスを埋めるように引き伸ばされます。",
    autoAdvanceEnabled: "回答者が現在のページのすべての質問に答えると、アンケートが自動的に次のページに進むようにする場合に選択します。この機能は、ページの最後の質問が自由回答形式の場合、または複数の回答が許可されている場合には適用されません。",
    autoAdvanceAllowComplete: "回答者がすべての質問に回答した後にアンケートを自動的に完了する場合に選択します。",
    showNavigationButtons: "ページ上のナビゲーションボタンの表示と位置を設定します。",
    navigationButtonsLocation: "ページ上のナビゲーション ボタンの位置を設定します。",
    showPreviewBeforeComplete: "すべての質問または回答済みの質問のみを含むプレビューページを有効にします。",
    questionTitleLocation: "アンケート内のすべての質問に適用されます。この設定は、下位レベル(パネル、ページ、または質問)のタイトル配置ルールによって上書きできます。下位レベルの設定は、上位レベルの設定よりも優先されます。",
    requiredMark: "回答が必要であることを示す記号または記号のシーケンス。",
    questionStartIndex: "番号付けを開始する番号または文字を入力します。",
    questionErrorLocation: "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。",
    autoFocusFirstQuestion: "各ページの最初の入力フィールドをテキスト入力可能にするかどうかを選択します。",
    questionOrder: "質問の元の順序を維持するか、ランダム化します。この設定の効果は、「プレビュー」タブにのみ表示されます。",
    maxTextLength: "テキスト入力の質問専用です。",
    maxCommentLength: "質問コメント専用です。",
    commentAreaRows: "質問コメントのテキストエリアに表示される行数を設定します。入力がより多くの行を占める場合は、スクロールバーが表示されます。",
    autoGrowComment: "質問のコメントと長いテキストの質問の高さを、入力したテキストの長さに基づいて自動的に拡大する場合に選択します。",
    allowResizeComment: "質問コメントとテキスト(長文)の質問のみ。",
    calculatedValues: "カスタム変数は、フォーム計算で使用される中間変数または補助変数として機能します。回答者の入力をソース値として受け取ります。各カスタム変数には、一意の名前と基になる式があります。",
    includeIntoResult: "式の計算値をアンケート結果とともに保存する場合に選択します。",
    triggers: "トリガーは、式に基づくイベントまたは条件です。式が \"true\" と評価されると、トリガーによってアクションが開始されます。このようなアクションには、必要に応じて、影響するターゲットの質問を含めることができます。",
    clearInvisibleValues: "条件付きロジックによって非表示にされた質問の値をクリアするかどうか、およびいつクリアするかを選択します。",
    textUpdateMode: "次から選択します: \"On lost focus\" - 入力フィールドがフォーカスを失ったときに値が更新されます。「入力中」 - ユーザーが入力しているときに、値がリアルタイムで更新されます。",
    columns: "左の値は条件付きルールで使用される列IDとして機能し、右の値は回答者に表示されます。",
    rows: "左の値は条件付きルールで使用される行IDとして機能し、右の値は回答者に表示されます。",
    columnMinWidth: "CSS 値 (px、%、in、pt など) を受け入れます。",
    rowTitleWidth: "CSS 値 (px、%、in、pt など) を受け入れます。",
    totalText: "少なくとも 1 つの列に [合計型] または [合計式] がある場合にのみ表示されます。",
    cellErrorLocation: "無効な入力があるセルに関連するエラーメッセージの位置を設定します。「継承」オプションは、「エラーメッセージの配置」プロパティの設定を適用します。",
    detailErrorLocation: "詳細セクションにネストされた質問のエラーメッセージの場所を設定します。「継承」オプションは、「エラーメッセージの配置」プロパティの設定を適用します。",
    keyDuplicationError: "「重複回答の防止」プロパティが有効な場合、重複したエントリを送信しようとする回答者は、次のエラーメッセージを受け取ります。",
    totalExpression: "式に基づいて合計値を計算できます。式には、基本的な計算 ('{q1_id} + {q2_id}')、ブール式 ('{age} > 60')、関数 ('iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' など) を含めることができます。",
    confirmDelete: "行の削除を確認するプロンプトをトリガーします。",
    keyName: "指定した列に同じ値が含まれている場合、調査は「一意でないキー値」エラーをスローします。",
    description: "字幕を入力します。",
    locale: "言語を選択してアンケートの作成を開始します。翻訳を追加するには、新しい言語に切り替えて、ここまたは [翻訳] タブで元のテキストを翻訳します。",
    detailPanelMode: "行を基準にした詳細セクションの位置を設定します。次から選択します: \"None\" - 展開は追加されません。\"Under the row\" - 行列の各行の下に行展開が配置されます。\"Under the row, display one row expansion only\" - 展開は 1 行の下にのみ表示され、残りの行展開は折りたたまれます。",
    imageFit: "次から選択: 「なし」 - 画像は元のサイズを維持します。\"Contain\" - 画像はアスペクト比を維持しながらサイズ変更されます。「表紙」-画像は縦横比を維持しながらボックス全体を埋めます。\"Fill\" - 画像は、アスペクト比を維持せずにボックスを埋めるように引き伸ばされます。",
    autoGrow: "データの入力中に入力フィールドの高さを徐々に増やします。「入力フィールドの高さ(行単位)」の設定を上書きします。",
    allowResize: "サイズ変更ハンドル(またはグリップ)が隅に表示され、ドラッグして入力フィールドのサイズを変更できます。",
    timeLimit: "アンケートが [ありがとうございます] ページに自動移動するまでの時間間隔 (秒単位)。",
    timeLimitPerPage: "アンケートが次のページに自動進むまでの時間間隔 (秒単位)。",
    validateVisitedEmptyFields: "このオプションを有効にすると、ユーザーが空の入力フィールドに注目し、変更を加えずにそのフィールドを離れたときに検証がトリガーされます。",
    page: {
      name: "回答者に表示されないページID。",
      description: "ページのサブタイトルを入力します。",
      navigationTitle: "進行状況バーまたは目次 (TOC) のナビゲーション ボタンに表示されるキャプション。このフィールドを空のままにすると、ナビゲーション ボタンはページ タイトルまたはページ名を使用します。プログレスバーまたは目次を有効にするには、「アンケート」→「ナビゲーション」に移動します。",
      timeLimit: "アンケートが次のページに自動進むまでの時間間隔 (秒単位)。",
      visibleIf: "魔法の杖アイコンを使用して、ページの表示を決定する条件付きルールを設定します。",
      enableIf: "魔法の杖アイコンを使用して、ページの読み取り専用モードを無効にする条件付きルールを設定します。",
      requiredIf: "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。",
      questionTitleLocation: "このページ内のすべての質問に適用されます。この設定を上書きする場合は、個々の質問またはパネルのタイトル配置ルールを定義します。「継承」オプションは、アンケートレベルの設定(デフォルトでは「トップ」)を適用します。",
      questionTitleWidth: "質問タイトルが質問ボックスの左側に配置されている場合に、質問タイトルの幅を一定に設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
      questionErrorLocation: "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。「継承」オプションは、アンケートレベルの設定(デフォルトでは「トップ」)を適用します。",
      questionOrder: "質問の元の順序を維持するか、ランダム化します。「継承」オプションは、アンケートレベルの設定(デフォルトでは「オリジナル」)を適用します。この設定の効果は、「プレビュー」タブにのみ表示されます。",
      showNavigationButtons: "ページ上のナビゲーションボタンの表示を設定します。「継承」オプションは、アンケートレベルの設定を適用し、デフォルトは「表示」です。",
      gridLayoutColumns: "このテーブルでは、ページ上の各グリッド列を構成できます。行内の要素の最大数に基づいて、各列の幅の割合が自動的に設定されます。グリッドレイアウトをカスタマイズするには、これらの値を手動で調整し、各列のすべての質問のタイトル幅を定義します。"
    },
    timerLocation: "ページ上のタイマーの位置を設定します。",
    panelsState: "次から選択します: 「ロック」 - ユーザーはパネルを展開または折りたたむことはできません。\"Collapse all\" - すべてのパネルが折りたたまれた状態で開始されます。\"Expand all\" - すべてのパネルが展開された状態で開始されます。\"First expanded\" - 最初のパネルのみが最初に展開されます。",
    imageLinkName: "選択リストに表示する画像またはビデオ ファイルの URL を含むオブジェクトの配列内に共有プロパティ名を入力します。",
    choices: "左の値は条件付きルールで使用される項目IDとして機能し、右の値は回答者に表示されます。",
    title: "表示するわかりやすいタイトルを入力します。",
    waitForUpload: "ファイルがアップロードされるまで、ユーザーが調査を完了しないようにします。",
    minWidth: "CSS 値 (px、%、in、pt など) を受け入れます。",
    maxWidth: "CSS 値 (px、%、in、pt など) を受け入れます。",
    width: "CSS 値 (px、%、in、pt など) を受け入れます。",
    valueName: "このプロパティを設定しない場合、回答は Name プロパティで指定されたフィールドに格納されます。",
    defaultDisplayValue: "HTML の質問、および質問の値が空の場合にアンケート要素の動的なタイトルと説明に表示される値。",
    useDisplayValuesInDynamicTexts: "単一選択および複数選択の質問タイプでは、各選択肢にIDと表示値があります。この設定を選択すると、HTML の質問やアンケート エレメントの動的なタイトルと説明に ID 値ではなく表示値が表示されます。",
    clearIfInvisible: "条件付きロジックで非表示にした質問値をクリアするかどうか、およびいつクリアするかを選択します。「継承」オプションは、アンケートレベルの設定(デフォルトでは「アンケート完了時」)を適用します。",
    choicesFromQuestionMode: "選択元: 「すべて」 - 選択した質問からすべての選択肢をコピーします。\"Selected\" - 選択した選択肢オプションのみを動的にコピーします。「未選択」 - 選択されていない選択肢オプションのみを動的にコピーします。「なし」と「その他」のオプションは、ソースの質問で有効になっている場合、デフォルトでコピーされます。",
    choiceValuesFromQuestion: "単一選択問題タイプと複数選択問題タイプでは、各選択肢オプションにIDと表示値があります。この設定では、どの行列列またはパネルの質問がIDを提供するかを指定します。",
    choiceTextsFromQuestion: "単一選択問題タイプと複数選択問題タイプでは、各選択肢オプションにIDと表示値があります。この設定では、表示テキストを提供する行列列またはパネルの質問を指定します。",
    allowCustomChoices: "選択すると、回答者は、目的のオプションがドロップダウンにない場合に、独自の選択肢を追加できます。カスタム選択は、現在のブラウザセッションの期間中のみ一時的に保存されます。",
    showOtherItem: "選択すると、ユーザーは別のコメント ボックスに追加の入力を含めることができます。",
    separateSpecialChoices: "各特殊選択オプション(「なし」、「その他」、「すべて選択」)を、複数列のレイアウトを使用している場合でも、新しい行に表示します。",
    path: "サービス データセット内で、オブジェクトのターゲット配列が配置されている場所を指定します。URL が既に配列を指している場合は、空のままにします。",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "選択リストに表示する値を含むオブジェクトの配列内に、統一プロパティ名を入力します。",
    allowEmptyResponse: "選択すると、サービスが空の応答または配列を返すことができます。",
    choicesVisibleIf: "魔法の杖アイコンを使用して、すべての選択肢オプションの表示を決定する条件付きルールを設定します。",
    rateValues: "左の値は条件付きルールで使用される項目IDとして機能し、右の値は回答者に表示されます。",
    rating: {
      displayMode: "「自動」は、使用可能な幅に基づいて「ボタン」モードと「ドロップダウン」モードのいずれかを選択します。幅がボタンを表示するのに不十分な場合、質問にはドロップダウンが表示されます。"
    },
    valuePropertyName: "さまざまな形式で結果を生成する質問を接続できます。このような質問が結合識別子を使用してリンクされている場合、この共有プロパティには選択された質問値が格納されます。",
    searchEnabled: "ドロップダウンメニューの内容を更新して、ユーザーが入力フィールドに入力している検索クエリに一致させる場合に選択します。",
    valueTrue: "回答者が肯定的な回答をした場合にアンケート結果に保存する値。",
    valueFalse: "回答者が否定的な回答をした場合にアンケート結果に保存する値。",
    showPreview: "このオプションを無効にすると、プレビュー画像が上書きされ、ファイルがアップロードされたかどうかをユーザーが理解しにくくなるため、無効にすることはお勧めしません。",
    needConfirmRemoveFile: "ファイルの削除を確認するプロンプトを表示します。",
    selectToRankEnabled: "選択した選択肢のみをランク付けできるようにします。ユーザーは、選択した項目を選択リストからドラッグして、ランキング領域内で並べ替えます。",
    dataList: "入力時に回答者に提案される選択肢のリストを入力します。",
    inputSize: "この設定では、入力フィールドのサイズが変更されるだけで、質問ボックスの幅には影響しません。",
    itemTitleWidth: "すべてのアイテム ラベルに一貫した幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。",
    inputTextAlignment: "フィールド内で入力値を揃える方法を選択します。デフォルト設定の「自動」では、通貨または数値のマスキングが適用されている場合は入力値が右に、適用されていない場合は左に揃えられます。",
    altText: "ユーザーのデバイスに画像を表示できない場合や、アクセシビリティの目的で代用します。",
    rateColorMode: "レーティングアイコンの種類が「スマイリー」に設定されている場合に選択した絵文字の色を定義します。以下から選択します: \"デフォルト\" - 選択した絵文字はデフォルトのアンケートカラーで表示されます。「スケール」 - 選択した絵文字は、評価スケールから色を継承します。",
    expression: {
      name: "回答者に表示されない式 ID。",
      description: "エクスプレッションのサブタイトルを入力します。",
      expression: "式には、基本的な計算 ('{q1_id} + {q2_id}')、条件 ('{age} > 60')、関数 ('iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' など) を含めることができます。"
    },
    storeOthersAsComment: "「その他」オプションの値をアンケート結果に別のプロパティとして保存する場合に選択します。",
    format: "{0} を実際の値のプレースホルダーとして使用します。",
    acceptedTypes: "詳細については、[accept](https://www.w3schools.com/tags/att_input_accept.asp) 属性の説明を参照してください。",
    columnColCount: "ラジオグループとチェックボックスのセルタイプにのみ適用されます。",
    autocomplete: "詳細については、[オートコンプリート](https://developer.mozilla.org/en-US/docs/Web/HTML/属性/オートコンプリート) 属性の説明を参照してください。",
    filePlaceholder: "「ソースタイプ」が「ローカルファイル」の場合、またはカメラが利用できない場合に適用されます",
    photoPlaceholder: "「ソースタイプ」が「カメラ」の場合に適用されます。",
    fileOrPhotoPlaceholder: "「ソースタイプ」が「ローカルファイルまたはカメラ」の場合に適用されます。",
    colCount: "選択オプションを複数列のレイアウトで配置します。0 に設定すると、オプションは 1 行で表示されます。",
    masksettings: {
      saveMaskedValue: "マスクを適用した質問値をアンケート結果に保存する場合に選択します。"
    },
    patternmask: {
      pattern: "パターンには、文字列リテラルと次のプレースホルダーを含めることができます: '9' - 数字の場合。'a' - 大文字または小文字。'#' - 数字または大文字または小文字。文字をエスケープするには、バックスラッシュ '\\' を使用します。"
    },
    datetimemask: {
      pattern: "パターンには、区切り文字と次のプレースホルダーを含めることができます<br>:'m' - 月番号。<br>'mm' - 月番号 (先頭に 0 を付けて 1 桁の値)。<br>'d' - 日付。<br>'dd' - 日付で、1 桁の値の先頭に 0 が付きます。<br>'yy' - 年の最後の 2 桁。<br>'yyyy' - 4 桁の年。<br>'H' - 24 時間形式の時間。<br>'HH' - 24 時間形式の時間で、1 桁の値の先頭に 0 が付きます。<br>'h' - 12 時間形式の時間。<br>'hh' - 12 時間形式の時間で、1 桁の値の先頭に 0 が付きます。<br>'MM' - 分。<br>'ss' - 秒。<br>'TT' - 大文字の 12 時間制 (AM/PM)。<br>'tt' - 小文字の 12 時間制 (am/pm)。"
    },
    numericmask: {
      decimalSeparator: "表示される数値の小数部と整数部を区切るために使用される記号。",
      thousandsSeparator: "大きな数字を 3 つのグループに区切るために使用される記号。",
      precision: "表示される数値の小数点以下の桁数を制限します。"
    },
    currencymask: {
      prefix: "値の前に表示される 1 つまたは複数のシンボル。",
      suffix: "値の後に表示される 1 つまたは複数の記号。"
    },
    theme: {
      isPanelless: "この設定は、パネル外の質問にのみ適用されます。",
      primaryColor: "主要な調査要素を強調表示する補助色を設定します。",
      panelBackgroundTransparency: "調査の背景に対するパネルと質問ボックスの透明度を調整します。",
      questionBackgroundTransparency: "調査の背景に対する入力エレメントの透過表示を調整します。",
      cornerRadius: "すべての長方形要素のコーナー半径を設定します。詳細モードを有効にするのは、入力要素またはパネルと質問ボックスに個々のコーナー半径値を設定する場合です。",
      "--sjs-general-backcolor-dim": "調査のメインの背景色を設定します。"
    },
    header: {
      inheritWidthFrom: "「コンテナと同じ」オプションは、アンケートが配置されるHTML要素に収まるようにヘッダーコンテンツ領域の幅を自動調整します。",
      textAreaWidth: "調査のタイトルと説明を含むヘッダー領域の幅 (ピクセル単位)。",
      overlapEnabled: "有効にすると、調査の上部がヘッダーの下部に重なります。",
      mobileHeight: "0 に設定すると、ヘッダーのコンテンツに合わせて高さが自動的に計算されます。"
    },
    progressBarInheritWidthFrom: "「コンテナと同じ」オプションは、調査が配置されているHTML要素に収まるようにプログレスバーの領域幅を自動調整します。"
  },
  // Properties
  p: {
    title: {
      name: "タイトル",
      title: "「名前」と同じ場合は空白のままにしてください"
    },
    multiSelect: "複数選択を許可",
    showLabel: "画像のキャプションを表示する",
    swapOrder: "「はい」と「いいえ」の順序を入れ替える",
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
    inputSize: "アイテムサイズ",
    itemTitleWidth: "アイテムラベルの幅 (px)",
    inputTextAlignment: "入力値の配置",
    elements: "元素",
    content: "コンテンツ",
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
    mobileHeight: "スマートフォンでの高さ",
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
    selectToRankEmptyRankedAreaText: "すべてのオプションが選択されている場合に表示されるテキスト",
    selectToRankEmptyUnrankedAreaText: "ランキングエリアのプレースホルダーテキスト",
    allowCameraAccess: "カメラへのアクセスを許可する",
    scaleColorMode: "スケールカラーモード",
    rateColorMode: "レートカラーモード",
    copyDisplayValue: "表示値をコピー",
    effectiveColSpan: "列スパン",
    progressBarInheritWidthFrom: "プログレスバー領域の幅"
  },
  theme: {
    advancedMode: "詳細モード",
    pageTitle: "ページタイトルのフォント",
    questionTitle: "質問タイトルのフォント",
    editorPanel: "入力要素",
    lines: "台詞",
    primaryDefaultColor: "デフォルト",
    primaryDarkColor: "ホバー",
    primaryLightColor: "入選",
    backgroundDimColor: "背景色",
    cornerRadius: "コーナR(Corner Radius)",
    backcolor: "デフォルトの背景",
    hovercolor: "ホバー背景",
    borderDecoration: "ボーダーデコレーション",
    fontColor: "フォントの色",
    backgroundColor: "背景色",
    primaryForecolor: "デフォルトの色",
    primaryForecolorLight: "無効色",
    font: "フォント",
    borderDefault: "暗い",
    borderLight: "ライター",
    fontFamily: "フォントファミリー",
    fontWeightRegular: "レギュラー",
    fontWeightHeavy: "重い",
    fontWeightSemiBold: "半太字",
    fontWeightBold: "ボールド",
    color: "色",
    placeholderColor: "プレースホルダーの色",
    size: "大きさ",
    opacity: "不透明",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "シャドウ効果を追加",
    boxShadowBlur: "滲む",
    boxShadowSpread: "まん延",
    boxShadowDrop: "落とす",
    boxShadowInner: "内的",
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
      green: "緑",
      gray: "灰色"
    }
  },
  creatortheme: {
    "--sjs-special-background": "サーフェスの背景",
    "--sjs-primary-background-500": "原発",
    "--sjs-secondary-background-500": "付帯",
    surfaceScale: "表面",
    userInterfaceBaseUnit: "ユーザーインターフェース",
    fontScale: "フォント",
    names: {
      sc2020: "サーベイクリエーター2020",
      "default-light": "光",
      "default-dark": "暗い",
      "default-contrast": "対照"
    }
  }
};

setupLocale({ localeCode: "ja", strings: jaStrings });

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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "ページを終了するための制限時間 (秒単位)"
// question.page: "Parent page" => "親ページ"
// pe.noEntriesText: "Empty entries text" => "空のエントリのテキスト"
// pe.setValue: "Answer" => "答える"
// pe.dataFormat: "Image format" => "画像フォーマット"
// pe.allowAddRows: "Allow adding rows" => "行の追加を許可する"
// pe.allowRemoveRows: "Allow removing rows" => "行の削除を許可する"
// pe.allowRowReorder: "Allow row drag and drop" => "行のドラッグ アンド ドロップを許可する"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "コメントの最大長 (文字数)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "必要に応じてコメント領域を自動展開する"
// pe.allowResizeComment: "Allow users to resize text areas" => "ユーザーがテキスト領域のサイズを変更できるようにする"
// pe.textUpdateMode: "Update text question value" => "テキストの質問値を更新する"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "最初の無効な回答にフォーカスを設定する"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "前のパネルボタンのツールチップ"
// pe.nextPanelText: "Next Panel button tooltip" => "[次へ] パネル ボタンのツールチップ"
// pe.showRangeInProgress: "Show progress bar" => "進行状況バーを表示する"
// pe.templateQuestionTitleLocation: "Question title location" => "質問タイトルの場所"
// pe.removePanelButtonLocation: "Remove Panel button location" => "[パネルを削除] ボタンの位置"
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
// pe.allowClear: "Show the Clear button" => "[クリア] ボタンを表示する"
// pe.showNumber: "Show panel number" => "パネル番号を表示"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "ロゴの幅 (CSS で受け入れられる値)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "ロゴの高さ (CSS で受け入れられる値)"
// pe.readOnly: "Read-only" => "読み取り専用"
// pe.enableIf: "Editable if" => "次の場合に編集可能"
// pe.noRowsText: "\"No rows\" message" => "\"行なし\" メッセージ"
// pe.size: "Input field size (in characters)" => "入力フィールドのサイズ (文字数)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "個別の特別な選択肢 (なし、その他、すべて選択)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "次の質問から選択肢をコピーする"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "どの選択肢をコピーするか?"
// pe.showCommentArea: "Show the comment area" => "コメント領域を表示する"
// pe.commentPlaceholder: "Comment area placeholder" => "コメント領域のプレースホルダー"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "レートの説明を極値として表示する"
// pe.rowOrder: "Row order" => "行の順序"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "マトリックスレイアウトに依存"
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
// p.inputSize: "Item size" => "アイテムサイズ"
// p.elements: "Elements" => "元素"
// p.content: "Content" => "コンテンツ"
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
// theme.groupAdvanced: "Advanced" => "アドバンスド"
// theme.themeName: "Theme" => "テーマ"
// theme.isPanellessss: "Question appearance" => "質問の外観"
// theme.isPanellessPanels: "Default" => "デフォルト"
// theme.isPanellessLightweight: "Without Panels" => "パネルなし"
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
// theme.surveyTitleFont: "Survey title font" => "アンケートタイトルのフォント"
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
// theme.header: "Header" => "ヘッダ"
// theme.backgroundImageFitFill: "Stretch" => "伸ばす"
// theme.backgroundImageFitTile: "Tile" => "瓦"
// theme.headerView: "View" => "眺める"
// theme.headerViewBasic: "Basic" => "基本的な"
// theme.headerViewAdvanced: "Advanced" => "アドバンスド"
// theme.headerInheritWidthFrom: "Content area width" => "コンテンツ領域の幅"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "調査と同じ"
// theme.headerInheritWidthFromPage: "Fit to page" => "ページに合わせる"
// theme.headerTextAreaWidth: "Text width" => "テキスト幅"
// theme.headerBackgroundColorSwitch: "Background color" => "背景色"
// theme.headerBackgroundColorNone: "None" => "何一つ"
// theme.headerBackgroundColorAccentColor: "Accent color" => "アクセントカラー"
// theme.headerBackgroundColorCustom: "Custom" => "習慣"
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
// theme.background: "Background" => "バックグラウンド"
// theme.appearance: "Appearance" => "様子"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "本当にテーマをリセットしますか?すべてのカスタマイズが失われます。"
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "はい、テーマをリセットします"
// theme.headerInheritWidthFromContainer: "Fit to container" => "コンテナに合わせる"
// signaturepad.showPlaceholder: "Show the placeholder" => "プレースホルダーを表示する"
// signaturepad.placeholder: "Placeholder text" => "プレースホルダテキスト"
// theme.surveyDescriptionFont: "Survey description font" => "調査の説明フォント"
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
// theme.headerTitlePosition: "Title position" => "タイトルの位置"
// theme.headerDescriptionPosition: "Description position" => "記述の位置"
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
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "[回答を拒否] オプションを許可する"
// pe.showDontKnowItem: "Allow the Don't Know option" => "[わからない] オプションを許可する"
// pv.contain: "Contain" => "含む"
// pv.cover: "Cover" => "覆う"
// pv.fill: "Fill" => "注ぐ"

// pe.transposeData: "Transpose rows to columns" => "行を列に転置する"
// layout.panel: "Layout" => "レイアウト"
// layout.question: "Layout" => "レイアウト"
// layout.base: "Layout" => "レイアウト"
// panel.name: "Panel name" => "パネル名"
// panel.title: "Panel title" => "パネルタイトル"
// panel.description: "Panel description" => "パネルの説明"
// panel.visibleIf: "Make the panel visible if" => "パネルを表示するのは、次の場合です"
// panel.requiredIf: "Make the panel required if" => "次の場合は、パネルを必須にします"
// panel.questionOrder: "Question order within the panel" => "パネル内の質問の順序"
// panel.startWithNewLine: "Display the panel on a new line" => "パネルを新しい行に表示する"
// panel.state: "Panel collapse state" => "パネル折りたたみ状態"
// panel.width: "Inline panel width" => "インラインパネルの幅"
// panel.minWidth: "Minimum panel width" => "最小パネル幅"
// panel.maxWidth: "Maximum panel width" => "最大パネル幅"
// paneldynamic.name: "Panel name" => "パネル名"
// paneldynamic.title: "Panel title" => "パネルタイトル"
// paneldynamic.description: "Panel description" => "パネルの説明"
// paneldynamic.visibleIf: "Make the panel visible if" => "パネルを表示するのは、次の場合です"
// paneldynamic.requiredIf: "Make the panel required if" => "次の場合は、パネルを必須にします"
// paneldynamic.page: "Move the panel to page" => "パネルをページに移動する"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "パネルを新しい行に表示する"
// paneldynamic.state: "Panel collapse state" => "パネル折りたたみ状態"
// paneldynamic.width: "Inline panel width" => "インラインパネルの幅"
// paneldynamic.minWidth: "Minimum panel width" => "最小パネル幅"
// paneldynamic.maxWidth: "Maximum panel width" => "最大パネル幅"
// paneldynamic.templateDescription: "Panel description pattern" => "パネル記述パターン"
// paneldynamic.templateTitle: "Panel title pattern" => "パネル・タイトル・パターン"
// paneldynamic.noEntriesText: "Empty panel text" => "空のパネル・テキスト"
// paneldynamic.templateTabTitle: "Tab title pattern" => "タブ タイトルのパターン"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "個々のパネルを表示するのは、次の場合です"
// paneldynamic.hideNumber: "Hide the panel number" => "パネル番号を隠す"
// paneldynamic.titleLocation: "Panel title alignment" => "パネルタイトルの配置"
// paneldynamic.descriptionLocation: "Panel description alignment" => "パネル記述の位置合わせ"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "質問タイトルの配置"
// paneldynamic.templateErrorLocation: "Error message alignment" => "エラー・メッセージのアライメント"
// paneldynamic.newPanelPosition: "New panel location" => "新しいパネルの位置"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "次の質問で回答の重複を防ぐ"
// question.name: "Question name" => "質問名"
// question.title: "Question title" => "質問のタイトル"
// question.description: "Question description" => "質問の説明"
// question.visibleIf: "Make the question visible if" => "次の場合に質問を表示します。"
// question.requiredIf: "Make the question required if" => "次の場合は質問を必須にします"
// question.state: "Question box collapse state" => "質問ボックスの折りたたみ状態"
// question.hideNumber: "Hide the question number" => "質問番号を非表示にする"
// question.titleLocation: "Question title alignment" => "質問タイトルの配置"
// question.descriptionLocation: "Question description alignment" => "質問の説明の配置"
// question.errorLocation: "Error message alignment" => "エラー・メッセージのアライメント"
// question.indent: "Increase the inner indent" => "内側のインデントを増やす"
// question.width: "Inline question width" => "インラインの質問の幅"
// question.minWidth: "Minimum question width" => "質問の最小幅"
// question.maxWidth: "Maximum question width" => "質問の最大幅"
// question.textUpdateMode: "Update input field value" => "入力フィールド値の更新"
// signaturepad.allowClear: "Show the Clear button within signature area" => "署名領域内に [クリア] ボタンを表示する"
// signaturepad.penColor: "Stroke color" => "ストロークの色"
// comment.rows: "Input field height (in lines)" => "入力フィールドの高さ (行単位)"
// expression.name: "Expression name" => "エクスプレッション名"
// expression.title: "Expression title" => "エクスプレッションのタイトル"
// expression.description: "Expression description" => "式の説明"
// expression.expression: "Expression" => "表現"
// trigger.expression: "Expression" => "表現"
// calculatedvalue.expression: "Expression" => "表現"
// survey.description: "Survey description" => "調査内容"
// page.name: "Page name" => "ページ名"
// page.description: "Page description" => "ページの説明"
// page.visibleIf: "Make the page visible if" => "次の場合にページを表示します"
// page.requiredIf: "Make the page required if" => "次の場合は、ページを必須にします"
// page.questionOrder: "Question order on the page" => "ページ上の質問の順序"
// matrixdropdowncolumn.name: "Column name" => "列名"
// matrixdropdowncolumn.title: "Column title" => "列のタイトル"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "回答の重複を防ぐ"
// matrixdropdowncolumn.width: "Column width" => "列幅"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "最小列幅"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "入力フィールドの高さ (行単位)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "次の場合に列を表示します"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "次の場合は、列を必須にします"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "個別の列に各オプション"
// multipletextitem.name: "Name" => "名前"
// multipletextitem.title: "Title" => "タイトル"
// pe.rateDescriptionLocation: "Label alignment" => "ラベルの配置"
// pe.cellErrorLocation: "Cell error message alignment" => "セル・エラー・メッセージの配置"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "まだ列がありません"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "まだ行がありません"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "入力規則はまだありません"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "カスタム変数はまだありません"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "トリガーはまだありません"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "リンクはまだありません"
// pe.addNew@columns: "Add new column" => "新しい列を追加"
// pe.addNew@rows: "Add new row" => "新しい行を追加"
// pe.addNew@validators: "Add new rule" => "新しいルールを追加"
// pe.addNew@calculatedValues: "Add new variable" => "新しい変数を追加"
// pe.addNew@triggers: "Add new trigger" => "新しいトリガーを追加する"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "新しい URL を追加"
// choicesbyurl.url: "Web service's URL" => "Web サービスの URL"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "プログレスバーにページタイトルを表示する"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "プログレスバーにページ番号を表示する"
// itemvalue.visibleIf: "Make the option visible if" => "次の場合にオプションを表示します"
// itemvalue.enableIf: "Make the option selectable if" => "次の場合は、オプションを選択可能にします"
// panel.layout: "Panel Layout" => "パネルレイアウト"
// tabs.questionSettings: "Question Settings" => "質問設定"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "例:https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "例:categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "例:a)"
// pe.width_placeholder: "Ex.: 6in" => "例:6インチ"
// pe.minWidth_placeholder: "Ex.: 600px" => "例:600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "例:50%"
// pv.selected: "Selected" => "入選"
// pv.unselected: "Unselected" => "未選択"
// pv.center: "Center" => "センター"
// pv.middle: "Middle" => "中央"
// pv.next: "Next" => "次に"
// pv.last: "Last" => "前の"
// clearIfInvisible.none: "Never" => "一度もない"
// questionsOnPageMode.standard: "Original structure" => "元の構造"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "すべての質問を 1 ページに表示する"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "1ページにつき1つの質問を表示する"
// pv.auto: "Auto" => "自動"
// panelsState.firstExpanded: "First expanded" => "最初の展開"
// rateColorMode.scale: "Scale" => "規模"
// scaleColorMode.monochrome: "Monochrome" => "モノクロ"
// scaleColorMode.colored: "Colored" => "有色"
// state.default: "Locked" => "締まる"
// showQuestionNumbers.default: "Auto-numbering" => "自動番号付け"
// showQuestionNumbers.on: "Auto-numbering" => "自動番号付け"
// showQuestionNumbers.onPage: "Reset on each page" => "各ページでリセット"
// showQuestionNumbers.onpanel: "Reset on each panel" => "各パネルでリセット"
// showQuestionNumbers.onPanel: "Reset on each panel" => "各パネルでリセット"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "調査を続ける"
// showQuestionNumbers.off: "No numbering" => "ナンバリングなし"
// descriptionLocation.underTitle: "Under the question title" => "質問タイトルの下"
// descriptionLocation.underInput: "Under the input field" => "入力欄の下"
// selectToRankAreasLayout.horizontal: "Next to choices" => "選択肢の横"
// selectToRankAreasLayout.vertical: "Above choices" => "上記の選択肢"
// displayStyle.decimal: "Decimal" => "小数"
// displayStyle.currency: "Currency" => "通貨"
// displayStyle.percent: "Percentage" => "百分率"
// displayStyle.date: "Date" => "日付"
// totalDisplayStyle.decimal: "Decimal" => "小数"
// totalDisplayStyle.currency: "Currency" => "通貨"
// totalDisplayStyle.percent: "Percentage" => "百分率"
// totalDisplayStyle.date: "Date" => "日付"
// rowOrder.initial: "Original" => "翻訳元"
// questionOrder.initial: "Original" => "翻訳元"
// showProgressBar.aboveheader: "Above the header" => "ヘッダーの上"
// showProgressBar.belowheader: "Below the header" => "ヘッダーの下"
// pv.sum: "Sum" => "和"
// pv.count: "Count" => "数える"
// pv.min: "Min" => "分"
// pv.max: "Max" => "マックス"
// pv.avg: "Avg" => "平均"
// searchMode.contains: "Contains" => "含む"
// searchMode.startsWith: "Starts with" => "次で始まる"
// panel.name: "A panel ID that is not visible to respondents." => "回答者には表示されないパネルID。"
// panel.description: "Type a panel subtitle." => "パネルのサブタイトルを入力します。"
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "魔法の杖アイコンを使用して、パネルの表示を決定する条件付きルールを設定します。"
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "魔法の杖アイコンを使用して、パネルの読み取り専用モードを無効にする条件付きルールを設定します。"
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。"
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "このパネル内のすべての質問に適用されます。この設定を上書きする場合は、個々の質問のタイトル配置ルールを定義します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。"
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "パネル内のすべての質問に関連するエラーメッセージの位置を設定します。[継承] オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定を適用します。"
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "質問の元の順序を維持するか、ランダム化します。[継承] オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定を適用します。"
// panel.page: "Repositions the panel to the end of a selected page." => "パネルを選択したページの末尾に再配置します。"
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "パネルの内容とパネルボックスの左の境界線の間にスペースまたは余白を追加します。"
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "選択を解除すると、前の質問またはパネルと 1 行でパネルが表示されます。パネルがフォームの最初の要素である場合、この設定は適用されません。"
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "次から選択します: 「展開」 - パネルは完全に表示され、折りたたむことができます。「折りたたまれた」 - パネルにはタイトルと説明のみが表示され、展開できます。「ロック」 - パネルは完全に表示され、折りたたむことはできません。"
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "パネルの幅を、同じ行内の他の調査要素に比例して設定します。CSS 値 (px、%、in、pt など) を受け入れます。"
// paneldynamic.name: "A panel ID that is not visible to respondents." => "回答者には表示されないパネルID。"
// paneldynamic.description: "Type a panel subtitle." => "パネルのサブタイトルを入力します。"
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "魔法の杖アイコンを使用して、パネルの表示を決定する条件付きルールを設定します。"
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "魔法の杖アイコンを使用して、パネルの読み取り専用モードを無効にする条件付きルールを設定します。"
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。"
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "このパネル内のすべての質問に適用されます。この設定を上書きする場合は、個々の質問のタイトル配置ルールを定義します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。"
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。"
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "パネル内のすべての質問に関連するエラーメッセージの位置を設定します。[継承] オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定を適用します。"
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "パネルを選択したページの末尾に再配置します。"
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "パネルの内容とパネルボックスの左の境界線の間にスペースまたは余白を追加します。"
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "選択を解除すると、前の質問またはパネルと 1 行でパネルが表示されます。パネルがフォームの最初の要素である場合、この設定は適用されません。"
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "次から選択します: 「展開」 - パネルは完全に表示され、折りたたむことができます。「折りたたまれた」 - パネルにはタイトルと説明のみが表示され、展開できます。「ロック」 - パネルは完全に表示され、折りたたむことはできません。"
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "パネルの幅を、同じ行内の他の調査要素に比例して設定します。CSS 値 (px、%、in、pt など) を受け入れます。"
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "動的パネルタイトルのテンプレートを入力します。パネルの一般的な位置には {panelIndex} を使用し、表示されているパネル間の順序には {visiblePanelIndex} を使用します。これらのプレースホルダーをパターンに挿入して、自動番号付けを追加します。"
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "タブタイトルのテンプレートを入力します。パネルの一般的な位置には {panelIndex} を使用し、可視パネル間の順序には {visiblePanelIndex} を使用します。これらのプレースホルダーをパターンに挿入して、自動番号付けを追加します。"
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "この設定では、動的パネル内の個々のパネルの表示を制御できます。'{panel}' プレースホルダーを使用して、式で現在のパネルを参照します。"
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "この設定は、このパネル内のすべての質問に自動的に継承されます。この設定を上書きする場合は、個々の質問のタイトル配置ルールを定義します。「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「上」)を適用します。"
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "「継承」オプションは、ページレベル(設定されている場合)またはアンケートレベルの設定(デフォルトでは「パネルタイトルの下」)を適用します。"
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "新しく追加されたパネルの位置を定義します。デフォルトでは、新しいパネルが最後に追加されます。「次へ」を選択して、現在のパネルの後に新しいパネルを挿入します。"
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "最後のパネルから回答を複製し、次に追加された動的パネルに割り当てます。"
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "質問名を参照して、各パネルでこの質問に対して一意の回答を提供するようユーザーに要求します。"
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "この設定では、式に基づいてデフォルトの回答値を割り当てることができます。式には、基本的な計算 - '{q1_id} + {q2_id}'、'{age} > 60' などのブール式、関数 'iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' などを含めることができます。この式によって決定される値は、回答者の手動入力で上書きできる初期デフォルト値として機能します。"
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "魔法の杖アイコンを使用して、回答者の入力を「デフォルト値式」または「値式の設定」に基づく値、または「デフォルト回答」値(どちらかが設定されている場合)にリセットするタイミングを決定する条件付きルールを設定します。"
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "魔法の杖アイコンを使用して、「値の設定式」をいつ実行するかを決定し、結果の値を応答として動的に割り当てる条件付きルールを設定します。"
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "「値を設定する条件」ルールの条件が満たされた場合に設定される値を定義する式を指定します。式には、基本的な計算 - '{q1_id} + {q2_id}'、'{age} > 60' などのブール式、関数 'iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' などを含めることができます。この式によって決定される値は、回答者の手動入力によって上書きできます。"
// question.name: "A question ID that is not visible to respondents." => "回答者に表示されない質問ID。"
// question.description: "Type a question subtitle." => "質問のサブタイトルを入力します。"
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "魔法の杖アイコンを使用して、質問の表示を決定する条件付きルールを設定します。"
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "魔法の杖アイコンを使用して、質問の読み取り専用モードを無効にする条件付きルールを設定します。"
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "魔法の杖アイコンを使用して、質問に回答がない限り、アンケートの進行や送信を禁止する条件付きルールを設定します。"
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "選択を解除すると、前の質問またはパネルと 1 行で質問が表示されます。この設定は、質問がフォームの最初の要素である場合には適用されません。"
// question.page: "Repositions the question to the end of a selected page." => "選択したページの最後に質問を再配置します。"
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "選択肢: 「展開」 - 質問ボックスは完全に表示され、折りたたむことができます。「折りたたまれた」 - 質問ボックスにはタイトルと説明のみが表示され、展開できます。\"Locked\" - 質問ボックスは完全に表示され、折りたたむことはできません。"
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "パネル、ページ、またはアンケートレベルで定義されたタイトル配置ルールを上書きします。「継承」オプションは、上位レベルの設定(設定されている場合)またはアンケートレベルの設定(デフォルトでは「トップ」)を適用します。"
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "「継承」オプションは、アンケートレベルの設定(デフォルトでは「質問タイトルの下」)を適用します。"
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。「継承」オプションは、アンケートレベルの設定(デフォルトでは「トップ」)を適用します。"
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "質問の内容と質問ボックスの左の境界線の間にスペースまたは余白を追加します。"
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "同じ行内の他のアンケート要素に比例して質問の幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。"
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "魔法の杖アイコンを使用して、質問の検証ルールを設定します。"
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "次から選択します: \"On lost focus\" - 入力フィールドがフォーカスを失ったときに値が更新されます。「入力中」 - ユーザーが入力しているときに、値がリアルタイムで更新されます。「継承」オプションは、アンケートレベルの設定(デフォルトでは「フォーカスを失ったとき」)を適用します。"
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "任意の Web サービスを多肢選択式の質問のデータ ソースとして使用できます。選択肢の値を入力するには、データを提供するサービスの URL を入力します。"
// question.searchMode: "A comparison operation used to filter the drop-down list." => "ドロップダウン リストをフィルター処理するために使用される比較演算。"
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "表示される署名領域と結果の画像の幅を設定します。"
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "表示される署名領域と結果の画像の高さを設定します。"
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "デフォルトの3:2の縦横比を維持したまま、質問ボックス内の使用可能なすべてのスペースを署名領域に埋める場合に選択します。カスタムの幅と高さの値が設定されている場合、設定ではこれらの寸法の縦横比が維持されます。"
// file.imageHeight: "Adjusts the height of the image in the survey results." => "アンケート結果の画像の高さを調整します。"
// file.imageWidth: "Adjusts the width of the image in the survey results." => "アンケート結果の画像の幅を調整します。"
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "高さの最小値と最大値の値を上書きします。"
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "幅の最小値と最大値を上書きします。"
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Value\" は、条件付きルールで使用される項目 ID として機能します。回答者に「テキスト」が表示されます。"
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "この設定では、入力フィールドのサイズが変更されるだけで、質問ボックスの幅には影響しません。許容される入力長を制限するには、<b>検証→最大文字数制限</b>に移動します。"
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "入力欄に表示する行数を設定します。入力の行数が多い場合は、スクロールバーが表示されます。"
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "次から選択します。 「編集可能」 - 回答者がアンケートに回答できるようにします。「読み取り専用」 - フォームの編集を無効にします。"
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "回答者に表示されない列 ID。"
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "列に対して有効にすると、回答者はこの列内の質問ごとに一意の回答を提供する必要があります。"
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "入力欄に表示する行数を設定します。入力の行数が多い場合は、スクロールバーが表示されます。"
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "魔法の杖アイコンを使用して、列の表示を決定する条件付きルールを設定します。"
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "魔法の杖アイコンを使用して、列の読み取り専用モードを無効にする条件付きルールを設定します。"
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。"
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "選択すると、選択肢オプションごとに個別の列が作成されます。"
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "次から選択します: \"Static\" - 固定幅を設定します。「レスポンシブ」 - アンケートを画面の全幅に表示します。「自動」 - 使用する質問タイプに応じて、2つのいずれかを適用します。"
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "画像リンクを貼り付けるか(サイズ制限なし)、フォルダアイコンをクリックして、コンピューターからファイルを参照します(最大64KB)。"
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "ロゴの幅をCSS単位(px、%、in、ptなど)で設定します。"
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "ロゴの高さを CSS 単位 (px、%、in、pt など) で設定します。"
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "次から選択: 「なし」 - 画像は元のサイズを維持します。\"Contain\" - 画像はアスペクト比を維持しながらサイズ変更されます。「表紙」-画像は縦横比を維持しながらボックス全体を埋めます。\"Fill\" - 画像は、アスペクト比を維持せずにボックスを埋めるように引き伸ばされます。"
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "ページ上のナビゲーションボタンの表示と位置を設定します。"
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "プログレスバーの表示と位置を設定します。「自動」の値は、アンケートヘッダーの上または下に進行状況バーを表示します。"
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "すべての質問または回答済みの質問のみを含むプレビューページを有効にします。"
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "アンケート内のすべての質問に適用されます。この設定は、下位レベル(パネル、ページ、または質問)のタイトル配置ルールによって上書きできます。下位レベルの設定は、上位レベルの設定よりも優先されます。"
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "回答が必要であることを示す記号または記号のシーケンス。"
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "番号付けを開始する番号または文字を入力します。"
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。"
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "各ページの最初の入力フィールドをテキスト入力可能にするかどうかを選択します。"
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "質問の元の順序を維持するか、ランダム化します。この設定の効果は、「プレビュー」タブにのみ表示されます。"
// pehelp.maxTextLength: "For text entry questions only." => "テキスト入力の質問専用です。"
// pehelp.maxCommentLength: "For question comments only." => "質問コメント専用です。"
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "質問のコメントと長いテキストの質問の高さを、入力したテキストの長さに基づいて自動的に拡大する場合に選択します。"
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "質問コメントとテキスト(長文)の質問のみ。"
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "カスタム変数は、フォーム計算で使用される中間変数または補助変数として機能します。回答者の入力をソース値として受け取ります。各カスタム変数には、一意の名前と基になる式があります。"
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "式の計算値をアンケート結果とともに保存する場合に選択します。"
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "トリガーは、式に基づくイベントまたは条件です。式が \"true\" と評価されると、トリガーによってアクションが開始されます。このようなアクションには、必要に応じて、影響するターゲットの質問を含めることができます。"
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "条件付きロジックによって非表示にされた質問の値をクリアするかどうか、およびいつクリアするかを選択します。"
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "次から選択します: \"On lost focus\" - 入力フィールドがフォーカスを失ったときに値が更新されます。「入力中」 - ユーザーが入力しているときに、値がリアルタイムで更新されます。"
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "左の値は条件付きルールで使用される列IDとして機能し、右の値は回答者に表示されます。"
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "左の値は条件付きルールで使用される行IDとして機能し、右の値は回答者に表示されます。"
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 値 (px、%、in、pt など) を受け入れます。"
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 値 (px、%、in、pt など) を受け入れます。"
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "無効な入力があるセルに関連するエラーメッセージの位置を設定します。「継承」オプションは、「エラーメッセージの配置」プロパティの設定を適用します。"
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "「重複回答の防止」プロパティが有効な場合、重複したエントリを送信しようとする回答者は、次のエラーメッセージを受け取ります。"
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "式に基づいて合計値を計算できます。式には、基本的な計算 ('{q1_id} + {q2_id}')、ブール式 ('{age} > 60')、関数 ('iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' など) を含めることができます。"
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "行の削除を確認するプロンプトをトリガーします。"
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "最後の行から回答を複製し、次に追加された動的行に割り当てます。"
// pehelp.description: "Type a subtitle." => "字幕を入力します。"
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "言語を選択してアンケートの作成を開始します。翻訳を追加するには、新しい言語に切り替えて、ここまたは [翻訳] タブで元のテキストを翻訳します。"
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "行を基準にした詳細セクションの位置を設定します。次から選択します: \"None\" - 展開は追加されません。\"Under the row\" - 行列の各行の下に行展開が配置されます。\"Under the row, display one row expansion only\" - 展開は 1 行の下にのみ表示され、残りの行展開は折りたたまれます。"
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "次から選択: 「なし」 - 画像は元のサイズを維持します。\"Contain\" - 画像はアスペクト比を維持しながらサイズ変更されます。「表紙」-画像は縦横比を維持しながらボックス全体を埋めます。\"Fill\" - 画像は、アスペクト比を維持せずにボックスを埋めるように引き伸ばされます。"
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "データの入力中に入力フィールドの高さを徐々に増やします。「入力フィールドの高さ(行単位)」の設定を上書きします。"
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "サイズ変更ハンドル(またはグリップ)が隅に表示され、ドラッグして入力フィールドのサイズを変更できます。"
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "アンケートが [ありがとうございます] ページに自動移動するまでの時間間隔 (秒単位)。"
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "アンケートが次のページに自動進むまでの時間間隔 (秒単位)。"
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "アンケートが次のページに自動進むまでの時間間隔 (秒単位)。"
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "魔法の杖アイコンを使用して、ページの表示を決定する条件付きルールを設定します。"
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "魔法の杖アイコンを使用して、ページの読み取り専用モードを無効にする条件付きルールを設定します。"
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "魔法の杖アイコンを使用して、ネストされた質問に回答が少なくとも1つない限り、調査の送信を禁止する条件付きルールを設定します。"
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "このページ内のすべての質問に適用されます。この設定を上書きする場合は、個々の質問またはパネルのタイトル配置ルールを定義します。「継承」オプションは、アンケートレベルの設定(デフォルトでは「トップ」)を適用します。"
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "無効な入力を含む質問に関連するエラーメッセージの場所を設定します。次から選択します: \"Top\" - 質問ボックスの上部にエラーテキストが配置されます。\"Bottom\" - 質問ボックスの下部にエラーテキストが配置されます。「継承」オプションは、アンケートレベルの設定(デフォルトでは「トップ」)を適用します。"
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "質問の元の順序を維持するか、ランダム化します。「継承」オプションは、アンケートレベルの設定(デフォルトでは「オリジナル」)を適用します。この設定の効果は、「プレビュー」タブにのみ表示されます。"
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "ページ上のナビゲーションボタンの表示を設定します。「継承」オプションは、アンケートレベルの設定を適用し、デフォルトは「表示」です。"
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "次から選択します: 「ロック」 - ユーザーはパネルを展開または折りたたむことはできません。\"Collapse all\" - すべてのパネルが折りたたまれた状態で開始されます。\"Expand all\" - すべてのパネルが展開された状態で開始されます。\"First expanded\" - 最初のパネルのみが最初に展開されます。"
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "選択リストに表示する画像またはビデオ ファイルの URL を含むオブジェクトの配列内に共有プロパティ名を入力します。"
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "左の値は条件付きルールで使用される項目IDとして機能し、右の値は回答者に表示されます。"
// pehelp.title: "Type a user-friendly title to display." => "表示するわかりやすいタイトルを入力します。"
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "ファイルがアップロードされるまで、ユーザーが調査を完了しないようにします。"
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 値 (px、%、in、pt など) を受け入れます。"
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 値 (px、%、in、pt など) を受け入れます。"
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 値 (px、%、in、pt など) を受け入れます。"
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "単一選択および複数選択の質問タイプでは、各選択肢にIDと表示値があります。この設定を選択すると、HTML の質問やアンケート エレメントの動的なタイトルと説明に ID 値ではなく表示値が表示されます。"
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "条件付きロジックで非表示にした質問値をクリアするかどうか、およびいつクリアするかを選択します。「継承」オプションは、アンケートレベルの設定(デフォルトでは「アンケート完了時」)を適用します。"
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "選択元: 「すべて」 - 選択した質問からすべての選択肢をコピーします。\"Selected\" - 選択した選択肢オプションのみを動的にコピーします。「未選択」 - 選択されていない選択肢オプションのみを動的にコピーします。「なし」と「その他」のオプションは、ソースの質問で有効になっている場合、デフォルトでコピーされます。"
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "選択すると、ユーザーは別のコメント ボックスに追加の入力を含めることができます。"
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "各特殊選択オプション(「なし」、「その他」、「すべて選択」)を、複数列のレイアウトを使用している場合でも、新しい行に表示します。"
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "サービス データセット内で、オブジェクトのターゲット配列が配置されている場所を指定します。URL が既に配列を指している場合は、空のままにします。"
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "選択リストに表示する値を含むオブジェクトの配列内に、統一プロパティ名を入力します。"
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "選択すると、サービスが空の応答または配列を返すことができます。"
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "魔法の杖アイコンを使用して、すべての選択肢オプションの表示を決定する条件付きルールを設定します。"
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "左の値は条件付きルールで使用される項目IDとして機能し、右の値は回答者に表示されます。"
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "「自動」は、使用可能な幅に基づいて「ボタン」モードと「ドロップダウン」モードのいずれかを選択します。幅がボタンを表示するのに不十分な場合、質問にはドロップダウンが表示されます。"
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "さまざまな形式で結果を生成する質問を接続できます。このような質問が結合識別子を使用してリンクされている場合、この共有プロパティには選択された質問値が格納されます。"
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "ドロップダウンメニューの内容を更新して、ユーザーが入力フィールドに入力している検索クエリに一致させる場合に選択します。"
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "回答者が肯定的な回答をした場合にアンケート結果に保存する値。"
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "回答者が否定的な回答をした場合にアンケート結果に保存する値。"
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "このオプションを無効にすると、プレビュー画像が上書きされ、ファイルがアップロードされたかどうかをユーザーが理解しにくくなるため、無効にすることはお勧めしません。"
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "ファイルの削除を確認するプロンプトを表示します。"
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "選択した選択肢のみをランク付けできるようにします。ユーザーは、選択した項目を選択リストからドラッグして、ランキング領域内で並べ替えます。"
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "入力時に回答者に提案される選択肢のリストを入力します。"
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "この設定では、入力フィールドのサイズが変更されるだけで、質問ボックスの幅には影響しません。"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "すべてのアイテムラベルの幅をピクセル単位で統一します。"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "「自動」オプションでは、指定されたソースURLに基づいて、表示に適したモード(画像、動画、YouTube)が自動的に決定されます。"
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "ユーザーのデバイスに画像を表示できない場合や、アクセシビリティの目的で代用します。"
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "レーティングアイコンの種類が「スマイリー」に設定されている場合に選択した絵文字の色を定義します。以下から選択します: \"デフォルト\" - 選択した絵文字はデフォルトのアンケートカラーで表示されます。「スケール」 - 選択した絵文字は、評価スケールから色を継承します。"
// expression.name: "An expression ID that is not visible to respondents." => "回答者に表示されない式 ID。"
// expression.description: "Type an expression subtitle." => "エクスプレッションのサブタイトルを入力します。"
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "式には、基本的な計算 ('{q1_id} + {q2_id}')、条件 ('{age} > 60')、関数 ('iif()'、'today()'、'age()'、'min()'、'max()'、'avg()' など) を含めることができます。"
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "「その他」オプションの値をアンケート結果に別のプロパティとして保存する場合に選択します。"
// p.swapOrder: "Swap the order of Yes and No" => "「はい」と「いいえ」の順序を入れ替える"
// p.itemTitleWidth: "Item label width (in px)" => "アイテムラベルの幅 (px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "すべてのオプションが選択されている場合に表示されるテキスト"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "ランキングエリアのプレースホルダーテキスト"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "調査に自動的に回答する"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "回答者がすべての質問に回答した後にアンケートを自動的に完了する場合に選択します。"
// masksettings.saveMaskedValue: "Save masked value in survey results" => "アンケート結果にマスクされた値を保存する"
// patternmask.pattern: "Value pattern" => "値パターン"
// datetimemask.min: "Minimum value" => "最小値"
// datetimemask.max: "Maximum value" => "最大値"
// numericmask.allowNegativeValues: "Allow negative values" => "負の値を許可する"
// numericmask.thousandsSeparator: "Thousands separator" => "1000 の位の区切り記号"
// numericmask.decimalSeparator: "Decimal separator" => "小数点記号"
// numericmask.precision: "Value precision" => "値の精度"
// numericmask.min: "Minimum value" => "最小値"
// numericmask.max: "Maximum value" => "最大値"
// currencymask.prefix: "Currency prefix" => "通貨接頭辞"
// currencymask.suffix: "Currency suffix" => "通貨の接尾辞"
// pe.maskType: "Input mask type" => "定型入力の種類"
// maskTypes.patternmask: "Pattern" => "パターン"
// maskTypes.numericmask: "Numeric" => "数値"
// maskTypes.datetimemask: "Date and Time" => "日付と時刻"
// maskTypes.currencymask: "Currency" => "通貨"
// tabs.mask: "Input Mask Settings" => "定型入力設定"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "例:+1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "例:mm/dd/yyyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "例:$"
// pe.currencysuffix_placeholder: "Ex.: USD" => "例:米ドル"
// pv.textWrapEnabled: "Wrap choices" => "ラップの選択肢"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "選択肢オプションのテキスト(長い)は、ドロップダウンメニュー内に収まるように改行を自動的に生成します。テキストをクリップする場合は、選択を解除します。"
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "マスクを適用した質問値をアンケート結果に保存する場合に選択します。"
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "パターンには、文字列リテラルと次のプレースホルダーを含めることができます: '9' - 数字の場合。'a' - 大文字または小文字。'#' - 数字または大文字または小文字。文字をエスケープするには、バックスラッシュ '\\' を使用します。"
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "パターンには、区切り文字と次のプレースホルダーを含めることができます: 'm' - 月番号。'mm' - 月番号、1桁の値の場合は先頭にゼロを付けます。'd' - 日付'dd' - 日付、1桁の値の先頭にゼロを付けます。'yy' - 年の下2桁'yyyy' - 4 桁の年。"
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "表示される数値の小数部と整数部を区切るために使用される記号。"
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "大きな数字を 3 つのグループに区切るために使用される記号。"
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "表示される数値の小数点以下の桁数を制限します。"
// currencymask.prefix: "One or several symbols to be displayed before the value." => "値の前に表示される 1 つまたは複数のシンボル。"
// currencymask.suffix: "One or several symbols to be displayed after the value." => "値の後に表示される 1 つまたは複数の記号。"
// ed.translationSource: "Source: " => "源："
// ed.translationTarget: "Target: " => "ターゲット："
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "ページは空です。ツールボックスから要素をドラッグするか、下のボタンをクリックします。"
// maskTypes.none: "None" => "何一つ"
// itemvalue@rows.visibleIf: "Make the row visible if" => "次の場合に行を表示します。"
// itemvalue@rows.enableIf: "Make the row editable if" => "次の場合に行を編集可能にします"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "読み取り専用モードまたはプレビューモードのプレースホルダーテキスト"
// pe.textWrapEnabled: "Wrap choices" => "ラップの選択肢"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "「自動」オプションでは、指定されたソースURLに基づいて、表示に適したモード(画像、動画、YouTube)が自動的に決定されます。"
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "「画像」と「動画」のどちらかを選択して、メディアセレクタのコンテンツモードを設定します。「画像」を選択した場合は、提供されるすべてのオプションが、JPEG、GIF、PNG、APNG、SVG、BMP、ICO形式の画像ファイルであることを確認してください。同様に、「ビデオ」を選択した場合は、すべてのオプションがMP4、MOV、WMV、FLV、AVI、MKV形式のビデオファイルへの直接リンクであることを確認してください。YouTubeのリンクは動画オプションではサポートされていませんのでご注意ください。"
// ed.selectFile: "Select a file" => "ファイルを選択"
// ed.removeFile: "Remove the file" => "ファイルを削除する"
// pe.searchMode: "Search Mode" => "検索モード"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "下の「質問を追加」ボタンをクリックして、フォームの作成を開始してください。"
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "下の「質問を追加」ボタンをクリックして、ページに新しい要素を追加します。"
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "下の「質問を追加」ボタンをクリックして、パネルに新しい要素を追加します。"
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "下のボタンをクリックして、アップロードする画像を選択してください"
// coloralpha.opacity: "Opacity" => "不透明"
// font.family: "Font family" => "フォントファミリー"
// font.color: "Color" => "色"
// font.placeholderColor: "Placeholder color" => "プレースホルダーの色"
// font.size: "Size" => "大きさ"
// theme.themeName: "Theme" => "テーマ"
// theme.isPanelless: "Question appearance" => "質問の表示設定"
// theme.editorPanel: "Background and corner radius" => "背景と角の半径"
// theme.questionPanel: "Background and corner radius" => "背景と角の半径"
// theme.primaryColor: "Accent color" => "アクセントカラー"
// theme.panelBackgroundTransparency: "Panel background opacity" => "パネル背景の不透明度"
// theme.questionBackgroundTransparency: "Question background opacity" => "質問の背景の不透明度"
// theme.fontSize: "Font size" => "フォントサイズ"
// theme.scale: "Scale" => "規模"
// theme.cornerRadius: "Corner radius" => "コーナR(Corner Radius)"
// theme.pageTitle: "Title font" => "タイトルのフォント"
// theme.pageDescription: "Description font" => "説明フォント"
// theme.questionTitle: "Title font" => "タイトルのフォント"
// theme.questionDescription: "Description font" => "説明フォント"
// theme.editorFont: "Font" => "フォント"
// theme.backgroundOpacity: "Opacity" => "不透明"
// theme.--sjs-font-family: "Font family" => "フォントファミリー"
// theme.--sjs-general-backcolor-dim: "Background color" => "背景色"
// theme.--sjs-primary-backcolor: "Accent background" => "アクセントの背景"
// theme.--sjs-primary-forecolor: "Accent foreground" => "アクセントの前景"
// theme.--sjs-shadow-small: "Shadow effects" => "影の効果"
// theme.--sjs-shadow-inner: "Shadow effects" => "影の効果"
// theme.--sjs-border-default: "Colors" => "色"
// header@header.headerView: "View" => "眺める"
// header@header.logoPosition: "Logo position" => "ロゴの位置"
// header@header.surveyTitle: "Survey title font" => "調査タイトルのフォント"
// header@header.surveyDescription: "Survey description font" => "調査の説明フォント"
// header@header.headerTitle: "Survey title font" => "調査タイトルのフォント"
// header@header.headerDescription: "Survey description font" => "調査の説明フォント"
// header@header.inheritWidthFrom: "Content area width" => "コンテンツ領域の幅"
// header@header.textAreaWidth: "Text width" => "文字幅"
// header@header.backgroundColorSwitch: "Background color" => "背景色"
// header@header.backgroundImage: "Background image" => "背景画像"
// header@header.backgroundImageOpacity: "Opacity" => "不透明"
// header@header.overlapEnabled: "Overlap" => "オーバーラップ"
// header@header.logoPositionX: "Logo position" => "ロゴの位置"
// header@header.titlePositionX: "Title position" => "タイトルの位置"
// header@header.descriptionPositionX: "Description position" => "記述の位置"
// weight.400: "Regular" => "レギュラー"
// weight.600: "Heavy" => "重い"
// weight.700: "Semi-bold" => "半太字"
// weight.800: "Bold" => "ボールド"
// backgroundImageFit.auto: "Auto" => "自動"
// backgroundImageFit.cover: "Cover" => "覆う"
// backgroundImageFit.contain: "Contain" => "含む"
// backgroundImageFit.fill: "Stretch" => "伸ばす"
// backgroundImageFit.tile: "Tile" => "瓦"
// backgroundImageAttachment.fixed: "Fixed" => "付け"
// backgroundImageAttachment.scroll: "Scroll" => "スクロール"
// headerView.basic: "Basic" => "基本的な"
// headerView.advanced: "Advanced" => "アドバンスド"
// inheritWidthFrom.survey: "Same as survey" => "調査と同じ"
// inheritWidthFrom.container: "Fit to container" => "コンテナにフィット"
// backgroundColorSwitch.none: "None" => "何一つ"
// backgroundColorSwitch.accentColor: "Accent color" => "アクセントカラー"
// backgroundColorSwitch.custom: "Custom" => "習慣"
// colorPalette.light: "Light" => "光"
// colorPalette.dark: "Dark" => "暗い"
// isPanelless.false: "Default" => "デフォルト"
// isPanelless.true: "Without Panels" => "パネルなし"
// theme.cornerRadius: "Corner radius" => "コーナR(Corner Radius)"
// theme.fontFamily: "Font family" => "フォントファミリー"
// theme.fontWeightRegular: "Regular" => "レギュラー"
// theme.fontWeightHeavy: "Heavy" => "重い"
// theme.fontWeightSemiBold: "Semi-bold" => "半太字"
// theme.fontWeightBold: "Bold" => "ボールド"
// theme.color: "Color" => "色"
// theme.placeholderColor: "Placeholder color" => "プレースホルダーの色"
// theme.size: "Size" => "大きさ"
// theme.opacity: "Opacity" => "不透明"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "「検索」..."
// ed.toolboxNoResultsFound: "No results found" => "結果が見つかりませんでした"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "タブ タイトルのプレースホルダー"
// theme.--sjs-special-red: "Error messages" => "エラーメッセージ"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "タブ タイトル パターンが意味のある値を生成しない場合に適用されるタブ タイトルのフォールバック テキスト。"
// theme.fontColor: "Font color" => "フォントの色"
// theme.backgroundColor: "Background color" => "背景色"
// pe.questionTitleWidth: "Question title width" => "質問タイトルの幅"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "ファイルを選択するか、ファイルリンクを貼り付けます..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "例:200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "質問タイトルが質問ボックスの左側に配置されている場合に、質問タイトルの幅を一定に設定します。CSS 値 (px、%、in、pt など) を受け入れます。"
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "質問タイトルが質問ボックスの左側に配置されている場合に、質問タイトルの幅を一定に設定します。CSS 値 (px、%、in、pt など) を受け入れます。"
// pe.commentAreaRows: "Comment area height (in lines)" => "コメント領域の高さ (行単位)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "質問コメントのテキスト領域に表示される行数を設定します。入力がより多くの行を占めると、スクロールバーが表示されます。"
// pe.enabled: "Enabled" => "有効"
// pe.disabled: "Disabled" => "無効"
// pe.inherit: "Inherit" => "受け継ぐ"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "フォーカスを失った空のフィールドの検証"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "例:30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "例:200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "このオプションを有効にすると、ユーザーが空の入力フィールドに注目し、変更を加えずにそのフィールドを離れたときに検証がトリガーされます。"
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "選択オプションを複数列のレイアウトで配置します。0 に設定すると、オプションは 1 行で表示されます。"
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "この設定は、パネル外の質問にのみ適用されます。"
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "主要な調査要素を強調表示する補助色を設定します。"
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "調査の背景に対するパネルと質問ボックスの透明度を調整します。"
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "調査の背景に対する入力エレメントの透過表示を調整します。"
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "すべての長方形要素のコーナー半径を設定します。詳細モードを有効にするのは、入力要素またはパネルと質問ボックスに個々のコーナー半径値を設定する場合です。"
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "調査のメインの背景色を設定します。"
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "「コンテナと同じ」オプションは、アンケートが配置されるHTML要素に収まるようにヘッダーコンテンツ領域の幅を自動調整します。"
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "調査のタイトルと説明を含むヘッダー領域の幅 (ピクセル単位)。"
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "値 % を受け入れます。"
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "値 px を受け入れます。"
// p.effectiveColSpan: "Column span" => "列スパン"
// progressBarInheritWidthFrom.survey: "Same as survey" => "調査と同じ"
// progressBarInheritWidthFrom.container: "Same as container" => "コンテナと同じ"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "可能な場合は、アップロードされたファイルのサムネイル プレビューを表示します。代わりにファイルアイコンを表示する場合は、選択を解除します。"
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "「コンテナと同じ」オプションは、調査が配置されているHTML要素に収まるようにプログレスバーの領域幅を自動調整します。"
// p.progressBarInheritWidthFrom: "Progress bar area width" => "プログレスバー領域の幅"
// maskType.none: "None" => "何一つ"
// maskType.pattern: "Pattern" => "パターン"
// maskType.numeric: "Numeric" => "数値"
// maskType.datetime: "Date and Time" => "日付と時刻"
// maskType.currency: "Currency" => "通貨"

// inputTextAlignment.auto: "Auto" => "自動"
// inputTextAlignment.left: "Left" => "左"
// inputTextAlignment.right: "Right" => "右"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "フィールド内で入力値を揃える方法を選択します。デフォルト設定の「自動」では、通貨または数値のマスキングが適用されている場合は入力値が右に、適用されていない場合は左に揃えられます。"
// p.inputTextAlignment: "Input value alignment" => "入力値の配置"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "進行状況バーを表示する"
// paneldynamic.showProgressBar: "Show the progress bar" => "進行状況バーを表示する"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "プログレスバーの配置"
// pv.carousel: "Carousel" => "回転木馬"
// progressBarLocation.top: "Top" => "ページのトップへ"
// progressBarLocation.bottom: "Bottom" => "底"
// progressBarLocation.topBottom: "Top and bottom" => "上部と下部"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "選択オプションを複数列のレイアウトで配置します。0 に設定すると、オプションは 1 行で表示されます。-1 に設定すると、実際の値は親行列の \"Nested column count\" プロパティから継承されます。"
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube リンクはサポートされていません。"
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "フォームの設定を開始する"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "任意のカテゴリアイコンをクリックして、アンケート設定を探索します。追加の設定は、デザイン画面にアンケート要素を追加すると使用可能になります。"
// pe.caseInsensitive: "Case insensitive" => "大文字と小文字を区別しない"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "正規表現の大文字と小文字を同等に扱う必要がある場合に選択します。"

// ed.surveyPlaceholderTitle: "Your form is empty" => "フォームが空です"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "フォームが空です"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "ツールボックスから要素をドラッグするか、下のボタンをクリックします。"
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "ツールボックスから要素をドラッグするか、下のボタンをクリックします。"
// ed.previewPlaceholderTitle: "No preview" => "プレビューなし"
// ed.previewPlaceholderTitleMobile: "No preview" => "プレビューなし"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "調査には、表示されている要素は含まれていません。"
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "調査には、表示されている要素は含まれていません。"
// ed.translationsPlaceholderTitle: "No strings to translate" => "翻訳する文字列はありません"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "翻訳する文字列はありません"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "フォームに要素を追加するか、ツールバーの文字列フィルターを変更します。"
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "フォームに要素を追加するか、ツールバーの文字列フィルターを変更します。"
// lg.logicPlaceholderTitle: "No logical rules" => "論理的なルールはありません"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "論理的なルールはありません"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "調査のフローをカスタマイズするルールを作成します。"
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "調査のフローをカスタマイズするルールを作成します。"
// pe.showTimer: "Use a timer" => "タイマーを使用する"
// theme.advancedMode: "Advanced mode" => "詳細モード"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "ページ上のタイマーの位置を設定します。"
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "0 に設定すると、ヘッダーのコンテンツに合わせて高さが自動的に計算されます。"
// p.mobileHeight: "Height on smartphones" => "スマートフォンでの高さ"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "有効にすると、調査の上部がヘッダーの下部に重なります。"
// ed.creatorSettingTitle: "Creator Settings" => "クリエイター設定"
// tabs.accentColors: "Accent colors" => "アクセントカラー"
// tabs.scaling: "Scaling" => "スケーリング"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "このパネル内にネストされた質問に番号を割り当てます。"
// creatortheme.--sjs-special-background: "Surface background" => "サーフェスの背景"
// creatortheme.--sjs-primary-background-500: "Primary" => "原発"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "付帯"
// creatortheme.surfaceScale: "Surface" => "表面"
// creatortheme.userInterfaceBaseUnit: "User interface" => "ユーザーインターフェース"
// creatortheme.fontScale: "Font" => "フォント"
// names.sc2020: "Survey Creator 2020" => "サーベイクリエーター2020"
// names.default-light: "Light" => "光"
// names.default-dark: "Dark" => "暗い"
// names.default-contrast: "Contrast" => "対照"
// panel.showNumber: "Number this panel" => "このパネルに番号を付ける"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "回答者が現在のページのすべての質問に答えると、アンケートが自動的に次のページに進むようにする場合に選択します。この機能は、ページの最後の質問が自由回答形式の場合、または複数の回答が許可されている場合には適用されません。"
// autocomplete.name: "Full Name" => "フルネーム"
// autocomplete.honorific-prefix: "Prefix" => "接頭辞"
// autocomplete.given-name: "First Name" => "名前"
// autocomplete.additional-name: "Middle Name" => "ミドルネーム"
// autocomplete.family-name: "Last Name" => "名字"
// autocomplete.honorific-suffix: "Suffix" => "接尾辞"
// autocomplete.nickname: "Nickname" => "ニックネーム"
// autocomplete.organization-title: "Job Title" => "役職"
// autocomplete.username: "User Name" => "ユーザー名"
// autocomplete.new-password: "New Password" => "新しいパスワード"
// autocomplete.current-password: "Current Password" => "現在のパスワード"
// autocomplete.organization: "Organization Name" => "組織名"
// autocomplete.street-address: "Full Street Address" => "フルストリートアドレス"
// autocomplete.address-line1: "Address Line 1" => "住所1"
// autocomplete.address-line2: "Address Line 2" => "住所2"
// autocomplete.address-line3: "Address Line 3" => "住所3"
// autocomplete.address-level4: "Level 4 Address" => "レベル4アドレス"
// autocomplete.address-level3: "Level 3 Address" => "レベル3アドレス"
// autocomplete.address-level2: "Level 2 Address" => "レベル2アドレス"
// autocomplete.address-level1: "Level 1 Address" => "レベル1アドレス"
// autocomplete.country: "Country Code" => "国コード"
// autocomplete.country-name: "Country Name" => "国名"
// autocomplete.postal-code: "Postal Code" => "郵便番号"
// autocomplete.cc-name: "Cardholder Name" => "カード名義人氏名"
// autocomplete.cc-given-name: "Cardholder First Name" => "カード所有者の名"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "カード名義人のミドルネーム"
// autocomplete.cc-family-name: "Cardholder Last Name" => "カード名義人の姓"
// autocomplete.cc-number: "Credit Card Number" => "クレジットカード番号"
// autocomplete.cc-exp: "Expiration Date" => "有効期限"
// autocomplete.cc-exp-month: "Expiration Month" => "有効期限月"
// autocomplete.cc-exp-year: "Expiration Year" => "有効期限"
// autocomplete.cc-csc: "Card Security Code" => "カードセキュリティコード"
// autocomplete.cc-type: "Credit Card Type" => "クレジットカードの種類"
// autocomplete.transaction-currency: "Transaction Currency" => "取引通貨"
// autocomplete.transaction-amount: "Transaction Amount" => "取引金額"
// autocomplete.language: "Preferred Language" => "優先言語"
// autocomplete.bday: "Birthday" => "誕生日"
// autocomplete.bday-day: "Birthday Day" => "誕生日"
// autocomplete.bday-month: "Birthday Month" => "誕生日月"
// autocomplete.bday-year: "Birthday Year" => "誕生日の年"
// autocomplete.sex: "Gender" => "ジェンダー"
// autocomplete.url: "Website URL" => "ウェブサイトURL"
// autocomplete.photo: "Profile Photo" => "プロフィール写真"
// autocomplete.tel: "Telephone Number" => "電話番号"
// autocomplete.tel-country-code: "Country Code for Phone" => "電話の国番号"
// autocomplete.tel-national: "National Telephone Number" => "国内電話番号"
// autocomplete.tel-area-code: "Area Code" => "市外局番"
// autocomplete.tel-local: "Local Phone Number" => "市内電話番号"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "ローカル電話プレフィックス"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "ローカル電話サフィックス"
// autocomplete.tel-extension: "Phone Extension" => "内線"
// autocomplete.email: "Email Address" => "アドレス"
// autocomplete.impp: "Instant Messaging Protocol" => "インスタントメッセージングプロトコル"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "質問の展開/折りたたみ状態のロック"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "まだページがありません"
// pe.addNew@pages: "Add new page" => "新しいページを追加"
// ed.zoomInTooltip: "Zoom In" => "ズームインする"
// ed.zoomOutTooltip: "Zoom Out" => "ズームアウト"
// tabs.surfaceBackground: "Surface Background" => "サーフェスの背景"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "最後のエントリの回答をデフォルトとして使用する"
// colors.gray: "Gray" => "灰色"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "ナビゲーション ボタンの配置"
// pv.allQuestions: "Show all questions" => "すべての質問を表示"
// pv.answeredQuestions: "Show answered questions only" => "回答済みの質問のみを表示する"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "ページ上のナビゲーション ボタンの位置を設定します。"
// pe.size: "Input field width (in characters)" => "入力フィールドの幅 (文字単位)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "次の行列列またはパネルの質問の値を選択肢IDとして使用します"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "次の行列の列またはパネルの質問の値を選択テキストとして使用します"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "単一選択問題タイプと複数選択問題タイプでは、各選択肢オプションにIDと表示値があります。この設定では、どの行列列またはパネルの質問がIDを提供するかを指定します。"
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "単一選択問題タイプと複数選択問題タイプでは、各選択肢オプションにIDと表示値があります。この設定では、表示テキストを提供する行列列またはパネルの質問を指定します。"
// pe.progressBarLocation: "Progress bar alignment" => "プログレスバーの配置"
// progressBarLocation.topbottom: "Top and bottom" => "上部と下部"
// progressBarLocation.aboveheader: "Above the header" => "ヘッダーの上"
// progressBarLocation.belowheader: "Below the header" => "ヘッダーの下"
// progressBarLocation.off: "Hidden" => "隠れた"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "プログレスバーの位置を設定します。「自動」の値は、調査ヘッダーの上または下に進行状況バーを表示します。"
// survey.readOnly: "Make the survey read-only" => "調査を読み取り専用にする"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "回答者がアンケートに回答できないようにする場合に選択します。"
// paneldynamic.showNumber: "Number the panel" => "パネルに番号を付ける"
// question.showNumber: "Number this question" => "この質問に番号を付ける"
// pe.previewMode: "Preview mode" => "プレビューモード"
// pe.gridLayoutEnabled: "Enable the grid layout" => "グリッド レイアウトの有効化"
// pe.maskSettings: "Mask settings" => "マスク設定"
// pe.detailErrorLocation: "Row expansion error message alignment" => "行拡張エラーメッセージの配置"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "詳細セクションにネストされた質問のエラーメッセージの場所を設定します。「継承」オプションは、「エラーメッセージの配置」プロパティの設定を適用します。"
// pe.gridLayoutColumns: "Grid layout columns" => "グリッド レイアウト列"
// pe.startPageTitlePlaceholder: "Start Page" => "スタートページ"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "有効幅、%"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "質問タイトルの幅、px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "レイアウト列がまだありません"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "このパネルがグリッドレイアウト内で何列にまたがっているかを指定します。"
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "このテーブルでは、パネル内の各グリッド列を構成できます。行内の要素の最大数に基づいて、各列の幅の割合が自動的に設定されます。グリッドレイアウトをカスタマイズするには、これらの値を手動で調整し、各列のすべての質問のタイトル幅を定義します。"
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator では、フォーム要素のインライン幅を手動で調整して、レイアウトを制御できます。これで目的の結果が得られない場合は、列ベースのシステムを使用してフォーム要素を構成するグリッドレイアウトを有効にすることができます。レイアウト列を設定するには、ページまたはパネルを選択し、「質問設定」→「グリッド列」テーブルを使用します。質問の列数を調整するには、質問を選択し、「レイアウト」→「列範囲」フィールドで目的の値を設定します。"
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "この質問がグリッドレイアウト内で何列にまたがっているかを指定します。"
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "このテーブルでは、ページ上の各グリッド列を構成できます。行内の要素の最大数に基づいて、各列の幅の割合が自動的に設定されます。グリッドレイアウトをカスタマイズするには、これらの値を手動で調整し、各列のすべての質問のタイトル幅を定義します。"

// ed.expandTooltip: "Expand" => "膨らむ"
// ed.collapseTooltip: "Collapse" => "倒れる"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "例:100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "すべてのアイテム ラベルに一貫した幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。"
// ed.zoom100Tooltip: "Zoom to 100%" => "100%にズーム"
// ed.addLanguageTooltip: "Add Language" => "言語を追加"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "質問コメントのテキストエリアに表示される行数を設定します。入力がより多くの行を占める場合は、スクロールバーが表示されます。"
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "ダイナミックテキストのデフォルトの表示値"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "HTML の質問、および質問の値が空の場合にアンケート要素の動的なタイトルと説明に表示される値。"
// showQuestionNumbers.recursive: "Recursive numbering" => "再帰的なナンバリング"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "質問タイトルの幅"
// pe.allowCustomChoices: "Allow custom choices" => "カスタム選択を許可する"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "質問タイトルが問題ボックスの左側に配置されている場合に、質問タイトルの一貫した幅を設定します。CSS 値 (px、%、in、pt など) を受け入れます。"
// page.name: "A page ID that is not visible to respondents." => "回答者に表示されないページID。"
// page.description: "Type a page subtitle." => "ページのサブタイトルを入力します。"
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "進行状況バーまたは目次 (TOC) のナビゲーション ボタンに表示されるキャプション。このフィールドを空のままにすると、ナビゲーション ボタンはページ タイトルまたはページ名を使用します。プログレスバーまたは目次を有効にするには、「アンケート」→「ナビゲーション」に移動します。"
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "選択すると、回答者は、目的のオプションがドロップダウンにない場合に、独自の選択肢を追加できます。カスタム選択は、現在のブラウザセッションの期間中のみ一時的に保存されます。"