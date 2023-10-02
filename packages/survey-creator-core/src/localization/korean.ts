import { editorLocalization, defaultStrings } from "survey-creator-core";

export var koreanStrings = {
  // survey templates
  survey: {
    edit: "편집",
    externalHelpLink: "설문조사를 만드는 방법을 보고 알아보세요.",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "왼쪽 도구상자에서 질문을 여기에 놓으십시오.",
    addLogicItem: "설문 조사의 흐름을 사용자 지정하는 규칙을 만듭니다.",
    copy: "복사",
    duplicate: "복사하다",
    addToToolbox: "도구상자에 추가",
    deletePanel: "패널 삭제",
    deleteQuestion: "질문 삭제",
    convertTo: "다음으로 변경",
    drag: "항목 끌어오기",
  },
  // Question types
  qt: {
    default: "기본값",
    checkbox: "체크박스",
    comment: "설명",
    imagepicker: "이미지 선택기",
    ranking: "순위",
    image: "이미지",
    dropdown: "드롭다운",
    tagbox: "다중 선택 드롭다운",
    file: "파일",
    html: "HTML",
    matrix: "행렬 (단일 선택)",
    matrixdropdown: "행렬 (복수 선택)",
    matrixdynamic: "행렬 (동적 행)",
    multipletext: "텍스트 상자 그룹",
    panel: "패널",
    paneldynamic: "패널 (동적 패널)",
    radiogroup: "라디오 그룹",
    rating: "등급",
    text: "텍스트 상자",
    boolean: "불린(boolean)",
    expression: "표현식",
    signaturepad: "서명",
    buttongroup: "단추 그룹"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "기본값({0})",
    survey: "설문지",
    settings: "설정",
    settingsTooltip: "설정 열기",
    surveySettings: "설문조사 설정",
    surveySettingsTooltip: "설문조사 설정 열기",
    themeSettings: "테마 설정",
    themeSettingsTooltip: "테마 설정 열기",
    showPanel: "패널 표시",
    hidePanel: "패널 숨기기",
    prevSelected: "이전 선택",
    nextSelected: "다음을 선택합니다",
    surveyTypeName: "조사",
    pageTypeName: "페이지",
    panelTypeName: "패널",
    questionTypeName: "질문",
    columnTypeName: "열",
    addNewPage: "새 페이지 추가",
    moveRight: "오른쪽으로 스크롤",
    moveLeft: "왼쪽으로 스크롤",
    deletePage: "페이지 삭제",
    editPage: "페이지 편집",
    edit: "편집",
    newPageName: "페이지",
    newQuestionName: "질문",
    newPanelName: "패널",
    newTextItemName: "문자 메시지",
    testSurvey: "테스트 설문지",
    themeSurvey: "테마",
    defaultV2Theme: "기본값",
    modernTheme: "현대의",
    defaultTheme: "기본값(레거시)",
    testSurveyAgain: "테스트 설문지 다시하기",
    testSurveyWidth: "설문지 너비: ",
    navigateToMsg: "다음으로 이동해야 했습니다.",
    logic: "논리학",
    embedSurvey: "내장 설문지",
    translation: "번역",
    saveSurvey: "설문지 저장",
    saveSurveyTooltip: "설문조사 저장",
    designer: "설문지 디자인",
    jsonEditor: "JSON 편집기",
    jsonHideErrors: "오류 숨기기",
    jsonShowErrors: "오류 표시",
    undo: "실행 취소",
    redo: "복원",
    undoTooltip: "마지막 변경 사항 실행 취소",
    redoTooltip: "변경 내용 다시 실행",
    showMoreChoices: "더 보기",
    showLessChoices: "간략하게 표시",
    copy: "복사",
    cut: "삭감",
    paste: "붙여넣기",
    copyTooltip: "클립보드에 선택 항목 복사",
    cutTooltip: "선택 영역을 클립보드로 잘라내기",
    pasteTooltip: "클립보드에서 붙여넣기",
    options: "옵션",
    generateValidJSON: "JSON 데이터 생성",
    generateReadableJSON: "생성 JSON 데이터 읽기",
    toolbox: "도구상자",
    "property-grid": "속성",
    propertyGridFilteredTextPlaceholder: "검색하려면 입력...",
    toolboxGeneralCategory: "일반",
    toolboxChoiceCategory: "선택 질문",
    toolboxTextCategory: "텍스트 입력 질문",
    toolboxContainersCategory: "컨테이너",
    toolboxMatrixCategory: "행렬 질문",
    toolboxMiscCategory: "기타",
    correctJSON: "JSON 데이터를 수정하십시오.",
    surveyResults: "설문 결과: ",
    surveyResultsTable: "테이블로",
    surveyResultsJson: "JSON으로",
    resultsTitle: "질문 제목",
    resultsName: "질문 이름",
    resultsValue: "답변 값",
    resultsDisplayValue: "표시 값",
    modified: "수정됨",
    saving: "저장중",
    saved: "저장됨",
    propertyEditorError: "오류",
    saveError: "오류! 편집기 컨텐츠는 저장되지 않습니다.",
    translationPropertyGridTitle: "언어 설정",
    themePropertyGridTitle: "테마 설정",
    translationLanguages: "언어들",
    translationDeleteLanguage: "이 언어에 대한 모든 문자열을 삭제하시겠습니까?",
    translationAddLanguage: "번역할 언어 선택",
    translationShowAllStrings: "모든 문자열",
    translationShowUsedStringsOnly: "사용된 문자열만",
    translationShowAllPages: "모든 페이지",
    translationNoStrings: "번역할 문자열이 없습니다. 필터를 교체하십시오.",
    translationExportToSCVButton: "CSV로 내보내기",
    translationImportFromSCVButton: "CSV에서 가져오기",
    translationMergeLocaleWithDefault: "{0} 기본 로캘과 병합",
    translationPlaceHolder: "번역...",
    themeExportButton: "수출",
    themeImportButton: "수입",
    themeResetButton: "테마 설정을 기본값으로 재설정",
    bold: "대담한",
    italic: "이탤릭체",
    underline: "밑줄",
    addNewQuestion: "질문 추가",
    selectPage: "페이지 선택...",
    carryForwardChoicesCopied: "선택 항목은 다음에서 복사됩니다.",
    htmlPlaceHolder: "HTML 콘텐츠가 여기에 있습니다.",
    panelPlaceHolder: "도구 상자에서 질문을 삭제하세요.",
    surveyPlaceHolder: "설문 조사가 비어 있습니다. 도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다.",
    imagePlaceHolder: "여기에 이미지를 끌어다 놓거나 아래 버튼을 클릭하고 업로드할 이미지를 선택하세요.",
    imageChooseImage: "이미지 선택",
    addNewTypeQuestion: "{0} 추가", //{0} is localizable question type
    chooseLogoPlaceholder: "[로고]",
    auto: "자동",
    choices_Item: "항목 ",
    lg: {
      addNewItem: "새 규칙 추가",
      empty_tab: "설문 조사의 흐름을 사용자 지정하는 규칙을 만듭니다.",
      page_visibilityName: "페이지 표시(숨기기)",
      page_enableName: "사용(사용 안 함) 페이지",
      panel_visibilityName: "표시(숨기기) 패널",
      panel_enableName: "활성화(비활성화) 패널",
      question_visibilityName: "질문 표시(숨기기)",
      question_enableName: "사용(사용 안 함) 질문",
      question_requireName: "질문 필수 항목 만들기",
      question_resetValue: "질문 값 재설정",
      column_visibilityName: "열 표시(숨기기)",
      column_enableName: "사용(사용 안 함) 열",
      column_requireName: "열을 필수로 설정",
      column_resetValue: "열 값 재설정",
      trigger_completeName: "설문 조사 완료",
      trigger_setvalueName: "정답 설정",
      trigger_copyvalueName: "답변 복사",
      trigger_skipName: "질문으로 건너뛰기",
      trigger_runExpressionName: "표현식 실행",
      completedHtmlOnConditionName: "\"설문조사 완료\" 페이지 마크업 설정",
      page_visibilityDescription: "논리 표현식이 true를 반환할 때 페이지가 표시되도록 합니다. 그렇지 않으면 보이지 않게 유지하십시오.",
      panel_visibilityDescription: "논리 표현식이 true를 반환할 때 패널이 표시되도록 합니다. 그렇지 않으면 보이지 않게 유지하십시오.",
      panel_enableDescription: "패널과 그 안의 모든 요소는 논리 표현식이 true를 반환할 때 활성화됩니다. 그렇지 않으면 비활성화 상태로 유지하십시오.",
      question_visibilityDescription: "논리 표현식이 true를 반환할 때 질문을 표시합니다. 그렇지 않으면 보이지 않게 유지하십시오.",
      question_enableDescription: "논리 표현식이 true를 반환할 때 질문을 활성화합니다. 그렇지 않으면 비활성화 상태로 유지하십시오.",
      question_requireDescription: "논리 표현식이 true를 반환할 때 질문이 필요합니다.",
      trigger_completeDescription: "논리 표현식이 true를 반환하면 설문 조사가 완료되고 최종 사용자에게 '감사 페이지'가 표시됩니다.",
      trigger_setvalueDescription: "논리식에 사용된 질문 값이 변경되고 논리식이 true를 반환하면 값이 선택한 질문으로 설정됩니다.",
      trigger_copyvalueDescription: "논리 표현식에 사용된 질문 값이 변경되고 논리 표현식이 true를 반환하면 선택한 한 질문의 값이 선택한 다른 질문에 복사됩니다.",
      trigger_skipDescription: "논리 표현식이 true를 반환하면 설문 조사는 선택한 질문으로 건너 뜁니다.",
      trigger_runExpressionDescription: "논리 표현식이 true를 반환하면 사용자 지정 표현식이 수행됩니다. 선택적으로 이 표현식 결과를 선택한 질문으로 설정할 수 있습니다",
      completedHtmlOnConditionDescription: "논리 표현식이 true를 반환하면 'Thank you page'의 기본 텍스트가 지정된 텍스트로 변경됩니다.",
      itemExpressionText: "표현식: '{0}'가 true를 반환하는 경우", //{0} - the expression
      itemEmptyExpressionText: "새 규칙",
      page_visibilityText: "페이지 {0} 표시", //{0} page name
      panel_visibilityText: "패널 {0} 표시", //{0} panel name
      panel_enableText: "패널을 활성화{0}", //{0} panel name
      question_visibilityText: "질문 {0} 표시", //{0} question name
      question_enableText: "질문 {0} 사용 설정", //{0} question name
      question_requireText: "질문 {0} 필수", //{0} question name
      column_visibilityText: "질문의 열 {0} {1} 표시", //{0} column name, {1} question name
      column_enableText: "질문의 열 {0} {1} 사용하도록 설정", //{0} column name, {1} question name
      column_requireText: "질문의 열 {0} {1} 필수", //{0} column name, {1} question name
      trigger_completeText: "조사가 완료됩니다",
      trigger_setvalueText: "질문으로 설정: {0} 값 {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "명확한 질문 값: {0}", //{0} question name
      trigger_copyvalueText: "질문으로 복사: 질문 {1}의 {0} 값", //{0} and {1} question names
      trigger_skipText: "설문 조사 질문으로 건너 뛰기 {0}", //{0} question name
      trigger_runExpressionText1: "실행 식: '{0}'", //{0} the expression
      trigger_runExpressionText2: " 그 결과에 의문을 제기하십시오 : {0}", //{0} question name
      completedHtmlOnConditionText: "'감사 페이지'에 대한 사용자 지정 텍스트를 표시합니다.",
      showAllQuestions: "모든 질문",
      showAllActionTypes: "모든 작업 유형",
      conditions: "조건",
      actions: "작업",
      expressionEditorTitle: "조건 정의",
      actionsEditorTitle: "작업 정의",
      deleteAction: "삭제 작업",
      addNewAction: "작업 추가",
      selectedActionCaption: "작업 선택...",
      expressionInvalid: "논리 표현식이 비어 있거나 올바르지 않습니다. 수정해 주세요.",
      noActionError: "하나 이상의 작업을 추가하십시오.",
      actionInvalid: "귀하의 행동에서 문제를 해결하십시오.",
      uncompletedRule_title: "논리적 규칙이 불완전합니다.",
      uncompletedRule_text: "일부 논리적 규칙을 완료하지 않았습니다. 지금 탭을 나가면 변경 내용이 손실됩니다. 변경을 완료하지 않고 탭을 종료하시겠습니까?",
      uncompletedRule_apply: "예",
      uncompletedRule_cancel: "아니요, 규칙을 완료하고 싶습니다.",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "적용",
    ok: "확인",
    save: "구해내다",
    clear: "맑다",
    saveTooltip: "구해내다",
    cancel: "취소",
    set: "집합",
    reset: "재설정",
    change: "잔돈",
    refresh: "리프레쉬",
    close: "닫기",
    delete: "삭제",
    add: "더하다",
    addNew: "새로 만들기",
    addItem: "항목을 추가하려면 클립하십시오.",
    removeItem: "항목을 제거하려면 클릭하세요...",
    dragItem: "항목을 드래그합니다",
    addOther: "다른",
    addSelectAll: "모두 선택",
    addNone: "없음",
    removeAll: "모두 삭제",
    edit: "편집",
    back: "저장하지 않고 반환",
    backTooltip: "저장하지 않고 반환",
    saveAndBack: "저장 및 반환",
    saveAndBackTooltip: "저장 및 반환",
    doneEditing: "수행",
    editChoices: "선택사항 편집",
    showChoices: "선택 항목 표시",
    move: "이동",
    empty: "<비어있음>",
    emptyValue: "값이 비어 있습니다.",
    fastEntry: "빠른 입력",
    fastEntryNonUniqueError: "'{0}' 값은 고유하지 않습니다.",
    fastEntryChoicesCountError: "항목 수를 {0}개에서 {1}개로 제한하십시오.",
    fastEntryPlaceholder: "다음 형식으로 데이터를 설정할 수 있습니다.\nvalue1|텍스트\n값2",
    formEntry: "양식 입력",
    testService: "서비스 테스트",
    itemSelectorEmpty: "요소를 선택해 주세요",
    conditionActionEmpty: "작업을 선택하십시오.",
    conditionSelectQuestion: "질문 선택...",
    conditionSelectPage: "페이지 선택...",
    conditionSelectPanel: "패널 선택...",
    conditionValueQuestionTitle: "값을 입력하거나 선택하십시오.",
    expressionHelp: "식을 입력하십시오. 다음과 같은 질문 값에 접근하려면 중괄호를 이용하십시오: '{질문1} + {질문2}', '({가격}*{수량}) * (100 - {할인})'",
    aceEditorHelp: "ctrl+space를 눌러 완성된 수식에 대한 힌트를 얻으십시오",
    aceEditorRowTitle: "현재 행",
    aceEditorPanelTitle: "현재 패널",
    showMore: "자세한 내용은 설명서를 확인하십시오.",
    assistantTitle: "유효 질문:",
    cellsEmptyRowsColumns: "최소한 하나의 열 또는 행이 있어야 합니다.",
    showPreviewBeforeComplete: "설문조사를 제출하기 전에 답변 미리 보기",
    overridingPropertyPrefix: "설정 기준 ",
    resetToDefaultCaption: "재설정",
    propertyIsEmpty: "값을 입력하십시오",
    propertyIsNoUnique: "고유한 값을 입력하십시오.",
    propertyNameIsNotUnique: "고유한 이름을 입력하십시오.",
    propertyNameIsIncorrect: "예약어를 사용하지 마십시오: \"item\", \"choice\", \"panel\", \"row\".",
    listIsEmpty: "아직 추가된 항목이 없습니다.",
    "listIsEmpty@choices": "선택 항목이 아직 추가되지 않았습니다",
    "addNew@choices": "선택 항목 추가",
    expressionIsEmpty: "식이 비어 있습니다.",
    value: "값",
    text: "텍스트",
    rowid: "행 ID",
    imageLink: "이미지 또는 동영상 URL",
    columnEdit: "열 편집: {0}",
    itemEdit: "항목 편집: {0}",
    url: "URL",
    path: "경로",
    valueName: "값 이름",
    choicesbyurl: {
      valueName: "다음 JSON 필드에서 값 가져오기"
    },
    titleName: "제목 이름",
    imageLinkName: "다음 JSON 필드에서 이미지 URL을 가져옵니다.",
    allowEmptyResponse: "빈 응답 허용",
    titlePlaceholder: "타이틀",
    surveyTitlePlaceholder: "설문조사 제목",
    pageTitlePlaceholder: "페이지 {num}",
    descriptionPlaceholder: "묘사",
    surveyDescriptionPlaceholder: "묘사",
    pageDescriptionPlaceholder: "묘사",
    showOtherItem: "다른 항목이 있습니다",
    otherText: "기타 항목 텍스트",
    showNoneItem: "없음 옵션 허용",
    noneText: "없음 옵션 텍스트",
    showSelectAllItem: "모두 선택 옵션 허용",
    selectAllText: "모두 선택 옵션 텍스트",
    choicesMin: "자동 생성된 항목의 최소값",
    choicesMax: "자동 생성된 항목의 최대값",
    choicesStep: "자동 생성된 항목에 대한 단계",
    name: "이름",
    title: "제목",
    cellType: "셀 유형",
    colCount: "열 개수",
    choicesOrder: "항목 순서 선택",
    visible: "보입니까??",
    isRequired: "필수입니까?",
    markRequired: "필요에 따라 표시",
    removeRequiredMark: "필요한 표시를 제거하십시오",
    isAllRowRequired: "모든 행에 대한 응답 필요",
    requiredErrorText: "\"필수\" 오류 메시지",
    startWithNewLine: "새 줄로 시작하겠습니까?",
    rows: "행 수",
    cols: "열",
    placeholder: "입력 자리 표시자 ",
    showPreview: "이미지 미리보기가 표시됩니까?",
    storeDataAsText: "파일 내용을 JSON 결과에 텍스트로 저장",
    maxSize: "최대 파일 크기(bytes)",
    imageHeight: "이미지 높이",
    imageWidth: "이미지 너비",
    rowCount: "행 수",
    columnLayout: "열 위치",
    addRowLocation: "행 버튼 위치 추가",
    addRowText: "행 버튼 텍스트 추가",
    removeRowText: "행 버튼 텍스트 제거",
    rateMin: "최소 요금 값",
    rateMax: "최대 속도 값",
    rateStep: "속도 단계",
    minRateDescription: "최소 설명 길이",
    maxRateDescription: "최대 설명 길이",
    inputType: "입력 유형",
    optionsCaption: "옵션 캡션",
    defaultValue: "기본값",
    cellsDefaultRow: "기본 셀 텍스트",
    surveyEditorTitle: "설문지 설정 편집",
    qEditorTitle: "편집: {0}",
    maxLength: "최대 길이(문자)",
    buildExpression: "체격",
    editExpression: "편집하다",
    and: "그리고",
    or: "또는",
    remove: "제거하다",
    addCondition: "조건 추가",
    emptyLogicPopupMessage: "질문을 선택하여 조건 구성을 시작합니다.",
    if: "면",
    then: "그러면",
    setToName: "대상 질문",
    fromName: "답변을 복사할 질문",
    gotoName: "건너뛸 질문",
    ruleIsNotSet: "규칙이 올바르지 않습니다.",
    includeIntoResult: "설문조사 결과에 포함",
    showTitle: "제목 표시/숨김",
    expandCollapseTitle: "제목 확장/축소",
    locale: "기본 언어",
    simulator: "장치 유형 선택",
    landscapeOrientation: "가로 방향으로 전환",
    portraitOrientation: "세로 방향으로 전환",
    mode: "모드(편집/읽기전용)",
    clearInvisibleValues: "보이지 않는 값 지우기",
    cookieName: "쿠키 이름(로컬에서 설문 조사를 두 번 사용하지 않도록 설정)",
    sendResultOnPageNext: "다음 페이지에서 설문 조사 결과 보내기",
    storeOthersAsComment: "다른 사용자의 값을 별도의 필드에 저장",
    showPageTitles: "페이지 제목 표시",
    showPageNumbers: "페이지 번호 표시",
    pagePrevText: "이전 페이지 버튼 텍스트",
    pageNextText: "다음 페이지 버튼 텍스트",
    completeText: "완료 버튼 텍스트",
    previewText: "답변 미리보기 버튼 텍스트",
    editText: "답변 편집 단추 텍스트",
    startSurveyText: "시작 버튼 텍스트",
    showNavigationButtons: "탐색 버튼 표시 (기본 탐색)",
    showPrevButton: "이전 버튼 표시 (사용자가 이전 페이지로 돌아갈 수 있음)",
    firstPageIsStarted: "설문지의 첫 번째 페이지는 시작 페이지입니다",
    showCompletedPage: "끝 부분에 완료된 페이지 표시 (완료된 HTML)",
    goNextPageAutomatic: "모든 질문에 응답 후 자동으로 다음 페이지로 이동",
    showProgressBar: "진행률 막대 표시",
    questionTitleLocation: "질문 제목 위치",
    requiredText: "질문에 필요한 기호",
    questionStartIndex: "질문 시작 색인 (1, 2 또는 'A', 'a')",
    showQuestionNumbers: "질문 번호 표시",
    questionTitleTemplate: "질문 제목 템플릿입니다. 기본값: '{no}. {require} {title}'",
    questionErrorLocation: "질문 위치 오류",
    focusFirstQuestionAutomatic: "페이지 변경시 첫 번째 질문에 초점",
    questionsOrder: "페이지의 요소 순서",
    maxTimeToFinish: "설문 조사를 마칠 수있는 최대 시간",
    maxTimeToFinishPage: "설문 조사에서 페이지를 마칠 수있는 최대 시간",
    image: {
      imageHeight: "이미지 높이(CSS에서 허용하는 값)",
      imageWidth: "이미지 너비(CSS에서 허용하는 값)"
    },
    page: {
      maxTimeToFinish: "페이지 완료 시간 제한(초)"
    },
    question: {
      page: "상위 페이지"
    },
    showTimerPanel: "타이머 패널 표시",
    showTimerPanelMode: "타이머 패널 모드 표시",
    renderMode: "렌더링 모드",
    allowAddPanel: "패널 추가 허용",
    allowRemovePanel: "패널 제거 허용",
    noEntriesText: "빈 항목 텍스트",
    panelAddText: "패널 텍스트 추가",
    panelRemoveText: "패널 텍스트 삭제",
    isSinglePage: "한 페이지에 모든 요소 표시",
    html: "HTML 마크업",
    expression: "식",
    setValue: "대답",
    dataFormat: "이미지 형식",
    allowAddRows: "행 추가 허용",
    allowRemoveRows: "행 제거 허용",
    allowRowsDragAndDrop: "행 끌어서 놓기 허용",
    responsiveImageSizeHelp: "정확한 이미지 너비 또는 높이를 지정하는 경우에는 적용되지 않습니다.",
    minImageWidth: "최소 이미지 너비",
    maxImageWidth: "최대 이미지 너비",
    minImageHeight: "최소 이미지 높이",
    maxImageHeight: "최대 이미지 높이",
    minValue: "최소값",
    maxValue: "최대값",
    minLength: "최소 길이(문자)",
    allowDigits: "숫자 허용",
    minCount: "최소 개수",
    maxCount: "최대 개수",
    regex: "정규식",
    surveyvalidator: {
      text: "오류 메시지",
      expression: "유효성 검사 표현식"
    },
    totalText: "전체 행 텍스트",
    totalType: "합계 유형",
    totalExpression: "총 표현식",
    totalDisplayStyle: "총액 표시 스타일",
    totalCurrency: "통화",
    totalFormat: "서식이 지정된 문자열",
    logo: "로고(URL 또는 base64로 인코딩된 문자열)",
    questionsOnPageMode: "설문조사 구조",
    maxTextLength: "최대 답변 길이(문자 단위)",
    maxOthersLength: "최대 주석 길이(문자)",
    autoGrowComment: "필요한 경우 주석 영역 자동 확장",
    allowResizeComment: "사용자가 텍스트 영역의 크기를 조정할 수 있도록 허용",
    textUpdateMode: "텍스트 질문 값 업데이트",
    focusOnFirstError: "첫 번째 오답에 포커스 설정",
    checkErrorsMode: "유효성 검사 실행",
    navigateToUrl: "URL로 이동합니다.",
    navigateToUrlOnCondition: "동적 URL",
    completedBeforeHtml: "사용자가 이미 이 설문조사를 작성했는지 여부를 표시하는 마크업",
    completedHtml: "설문조사 완료 페이지 마크업",
    completedHtmlOnCondition: "동적 설문조사 완료 페이지 마크업",
    loadingHtml: "측량 모델이 로드되는 동안 표시할 마크업",
    commentText: "주석 영역 텍스트",
    autocomplete: "자동 완성 유형",
    labelTrue: "\"True\" 레이블",
    labelFalse: "\"거짓\" 레이블",
    allowClear: "지우기 단추 표시",
    displayStyle: "값 표시 스타일",
    format: "서식이 지정된 문자열",
    maximumFractionDigits: "최대 소수 자릿수",
    minimumFractionDigits: "최소 소수 자릿수",
    useGrouping: "그룹화 구분 기호 표시",
    allowMultiple: "여러 파일 허용",
    allowImagesPreview: "이미지 미리보기",
    acceptedTypes: "허용되는 파일 형식",
    waitForUpload: "업로드가 완료될 때까지 기다리세요",
    needConfirmRemoveFile: "파일 삭제 확인",
    detailPanelMode: "세부 정보 패널 위치",
    minRowCount: "최소 행 개수",
    maxRowCount: "최대 행 개수",
    confirmDelete: "행 삭제 확인",
    confirmDeleteText: "확인 메시지",
    paneldynamic: {
      confirmDelete: "패널 삭제 확인"
    },
    panelCount: "초기 패널 수",
    minPanelCount: "최소 패널 수",
    maxPanelCount: "최대 패널 수",
    panelsState: "내부 패널 확장 상태",
    templateDescription: "설명 템플릿",
    templateTitle: "제목 템플릿",
    panelPrevText: "이전 패널 단추 도구 설명",
    panelNextText: "다음 패널 단추 도구 설명",
    showRangeInProgress: "진행률 표시줄 표시",
    templateTitleLocation: "질문 제목 위치",
    panelRemoveButtonLocation: "패널 단추 위치 제거",
    hideIfRowsEmpty: "행이 없는 경우 질문 숨기기",
    hideColumnsIfEmpty: "행이 없는 경우 열 숨기기",
    rateValues: "사용자 지정 요금 값",
    rateCount: "비율 개수",
    autoGenerate: "비율 값을 지정하는 방법은 무엇입니까?",
    hideIfChoicesEmpty: "선택 항목이 없는 경우 질문 숨기기",
    hideNumber: "질문 번호 숨기기",
    minWidth: "최소 너비(CSS에서 허용하는 값)",
    maxWidth: "최대 너비(CSS에서 허용하는 값)",
    width: "너비(CSS에서 허용하는 값)",
    showHeader: "열 머리글 표시",
    horizontalScroll: "가로 스크롤 막대 표시",
    columnMinWidth: "최소 열 너비(CSS에서 허용하는 값)",
    rowTitleWidth: "행 머리글 너비(CSS에서 허용하는 값)",
    valueTrue: "\"True\" 값",
    valueFalse: "\"False\" 값",
    minErrorText: "\"값이 최소값 미만입니다.\" 오류 메시지",
    maxErrorText: "\"값이 최대값을 초과합니다.\" 오류 메시지",
    otherErrorText: "'빈 댓글' 오류 메시지",
    keyDuplicationError: "\"고유하지 않은 키 값\" 오류 메시지",
    minSelectedChoices: "선택한 최소 선택 항목",
    maxSelectedChoices: "선택한 최대 선택 항목 수",
    showClearButton: "지우기 단추 표시",
    showNumber: "패널 번호 표시",
    logoWidth: "로고 너비(CSS에서 허용하는 값)",
    logoHeight: "로고 높이(CSS에서 허용하는 값)",
    readOnly: "읽기 전용",
    enableIf: "다음과 같은 경우 편집 가능",
    emptyRowsText: "'행 없음' 메시지",
    size: "입력 필드 크기(문자)",
    separateSpecialChoices: "별도의 특수 선택(없음, 기타, 모두 선택)",
    choicesFromQuestion: "다음 질문에서 선택 항목을 복사합니다.",
    choicesFromQuestionMode: "어떤 선택 항목을 복사해야 합니까?",
    showCommentArea: "주석 영역 표시",
    commentPlaceholder: "주석 영역 자리 표시자",
    displayRateDescriptionsAsExtremeItems: "속도 설명을 극한 값으로 표시",
    rowsOrder: "행 순서",
    columnsLayout: "열 레이아웃",
    columnColCount: "중첩된 열 개수",
    state: "패널 확장 상태",
    correctAnswer: "정답",
    defaultPanelValue: "기본값",
    cells: "셀 텍스트",
    keyName: "키 열",
    itemvalue: {
      text: "대체 텍스트"
    },
    logoPosition: "로고 위치",
    addLogo: "로고 추가...",
    changeLogo: "로고 변경...",
    logoPositions: {
      none: "로고 제거",
      left: "왼쪽",
      right: "오른쪽",
      top: "맨 위에",
      bottom: "하단에"
    },
    tabs: {
      general: "일반",
      fileOptions: "옵션",
      html: "Html 편집기",
      columns: "열",
      rows: "행",
      choices: "선택",
      items: "항목",
      visibleIf: "조건 충족시 보기",
      enableIf: "조건 충족시 허용",
      requiredIf: "다음과 같은 경우 필수입니다.",
      rateValues: "길이 값",
      choicesByUrl: "웹에서 선택",
      matrixChoices: "기본 선택",
      multipleTextItems: "텍스트 입력",
      numbering: "번호 매기기",
      validators: "유효성 검사기",
      navigation: "탐색",
      question: "질문",
      pages: "페이지",
      timer: "타이머 / 퀴즈",
      calculatedValues: "계산된 값",
      triggers: "트리거",
      templateTitle: "템플릿 제목",
      totals: "합계",
      logic: "논리학",
      layout: "레이아웃",
      data: "데이터",
      validation: "유효성 검사",
      cells: "셀 텍스트",
      showOnCompleted: "설문조사 완료",
      logo: "설문조사 제목의 로고",
      slider: "슬라이더",
      expression: "식",
      others: "다른"
    },
    editProperty: "편집 속성 '{0}'",
    items: "[ 항목: {0} ]",
    choicesVisibleIf: "다음과 같은 경우 선택 항목이 표시됩니다.",
    choicesEnableIf: "다음과 같은 경우 선택 항목을 선택할 수 있습니다.",
    columnsEnableIf: "다음과 같은 경우 열이 표시됩니다.",
    rowsEnableIf: "다음과 같은 경우 행이 표시됩니다.",
    indent: "들여쓰기 추가",
    panel: {
      indent: "바깥쪽 들여쓰기 추가"
    },
    innerIndent: "내부 들여쓰기 추가",
    defaultValueFromLastRow: "마지막 행에서 기본값 가져오기",
    defaultValueFromLastPanel: "마지막 패널에서 기본값 가져 오기",
    enterNewValue: "값을 입력하십시오.",
    noquestions: "설문 조사에는 어떤 질문도 없습니다.",
    createtrigger: "트리거를 만드십시오",
    titleKeyboardAdornerTip: "Enter 버튼을 눌러 편집합니다.",
    keyboardAdornerTip: "항목을 편집하려면 Enter 버튼을 누르고, 항목을 삭제하려면 삭제 버튼을 누르고, 항목을 이동하려면 alt 더하기 화살표 위쪽 또는 아래쪽 화살표를 누릅니다.",
    triggerOn: "트리거 켜기",
    triggerMakePagesVisible: "페이지 표시:",
    triggerMakeQuestionsVisible: "요소 표시:",
    triggerCompleteText: "조건 충족 시 설문 조사를 작성하십시오.",
    triggerNotSet: "트리거가 설정되지 않았습니다.",
    triggerRunIf: "다음 조건 충족 시 실행",
    triggerSetToName: "다음 값 변경: ",
    triggerFromName: "다음에서 값 복사: ",
    triggerRunExpression: "이 표현식을 실행합니다.",
    triggerSetValue: "다음으로 수정: ",
    triggerGotoName: "질문으로 이동",
    triggerIsVariable: "변수를 설문 결과에 넣지 마십시오.",
    triggerRunExpressionEmpty: "올바른 표현식을 입력하십시오.",
    emptyExpressionPlaceHolder: "여기에 표현식을 입력하십시오 ...",
    noFile: "선택한 파일 없음",
    clearIfInvisible: "질문이 숨겨지면 값을 지웁니다",
    valuePropertyName: "값 속성 이름",
    searchEnabled: "검색 사용",
    hideSelectedItems: "선택한 항목 숨기기",
    closeOnSelect: "선택 후 드롭다운을 닫습니다.",
    signatureWidth: "서명 너비",
    signatureHeight: "서명 높이",
    verticalAlign: "수직 정렬",
    alternateRows: "대체 행",
    columnsVisibleIf: "다음과 같은 경우 열이 표시됩니다.",
    rowsVisibleIf: "다음과 같은 경우 행이 표시됩니다.",
    otherPlaceholder: "주석 영역 자리 표시자",
    rateType: "비율 유형"
  },
  // Property values
  pv: {
    "true": "참",
    "false": "거짓",
    file: "로컬 파일",
    camera: "사진기",
    "file-camera": "로컬 파일 또는 카메라",
    inherit: "상속",
    show: "보기",
    hide: "숨기기",
    default: "기본값",
    initial: "초기값",
    random: "무작위",
    collapsed: "축소",
    expanded: "확장",
    none: "없음",
    asc: "오름차순",
    desc: "내림차순",
    indeterminate: "불확정",
    decimal: "십진법",
    currency: "통화",
    percent: "퍼센트",
    firstExpanded: "우선 확장",
    off: "꺼짐",
    onpanel: "각 패널에서 시작",
    onPanel: "패널에서",
    onSurvey: "설문에서",
    list: "목록",
    progressTop: "상단 진행률",
    progressBottom: "하단 진행률",
    progressTopBottom: "상하단 진행률",
    tab: "탭",
    horizontal: "가로",
    vertical: "세로",
    top: "위",
    bottom: "아래",
    topBottom: "위아래",
    both: "둘다",
    left: "왼쪽",
    right: "오른쪽",
    color: "색",
    date: "날짜",
    datetime: "날짜/시간",
    "datetime-local": "날짜/시간 로컬",
    email: "이메일",
    month: "달",
    number: "수",
    password: "암호",
    range: "레인지",
    tel: "전화",
    text: "문자 메시지",
    time: "시간",
    url: "URL (영문)",
    week: "주",
    hidden: "숨김",
    on: "켜기",
    onPage: "페이지 켜기",
    edit: "편집",
    display: "디스플레이",
    onComplete: "완료",
    onHidden: "숨김",
    onHiddenContainer: "질문 또는 해당 패널/페이지가 숨겨지는 경우",
    clearInvisibleValues: {
      none: "결코"
    },
    inputType: {
      color: "색",
      date: "날짜",
      "datetime-local": "날짜 및 시간",
      email: "이메일",
      month: "달",
      number: "수",
      password: "암호",
      range: "레인지",
      tel: "전화번호",
      text: "문자 메시지",
      time: "시간",
      url: "URL (영문)",
      week: "주"
    },
    all: "모두",
    page: "페이지",
    survey: "설문지",
    onNextPage: "다음 페이지로",
    onValueChanged: "값 변경",
    onValueChanging: "답변이 변경되기 전에",
    standard: "원래 구조",
    singlePage: "한 페이지에 있는 모든 질문",
    questionPerPage: "개별 페이지의 각 질문",
    noPreview: "미리보기 없음",
    showAllQuestions: "모든 질문 표시",
    showAnsweredQuestions: "답변된 질문만 표시",
    pages: "완성된 페이지",
    questions: "답변된 질문",
    requiredQuestions: "필수 질문에 답변했습니다.",
    correctQuestions: "유효한 답변",
    buttons: "완성된 페이지(버튼 UI)",
    underInput: "입력 아래",
    underTitle: "제목 아래",
    onBlur: "흐림 현상",
    onTyping: "입력하는 동안",
    underRow: "행 아래",
    underRowSingle: "행 아래에는 하나의 패널만 표시됩니다",
    showNavigationButtons: {
      none: "숨겨진"
    },
    showProgressBar: {
      off: "숨겨진"
    },
    showTimerPanel: {
      none: "숨겨진"
    },
    showTimerPanelMode: {
      all: "둘다"
    },
    detailPanelMode: {
      none: "숨겨진"
    },
    addRowLocation: {
      default: "행렬 레이아웃에 따라 다름"
    },
    panelsState: {
      default: "사용자는 패널을 확장하거나 축소할 수 없습니다.",
      collapsed: "모든 패널이 축소됩니다",
      expanded: "모든 패널이 확장됩니다."
    },
    widthMode: {
      auto: "자동",
      static: "정적인",
      responsive: "반응"
    },
    imageFit: {
      none: "없음",
      contain: "포함하다",
      cover: "표지",
      fill: "채우다"
    },
    contentMode: {
      auto: "자동",
      image: "이미지",
      video: "비디오",
      youtube: "유튜브"
    },
    displayMode: {
      auto: "자동",
      buttons: "단추",
      dropdown: "드롭다운(Dropdown)"
    },
    rateColorMode: {
      default: "기본값"
    },
    autoGenerate: {
      "true": "창조하다",
      "false": "수동으로 입력"
    },
    rateType: {
      labels: "레이블",
      stars: "별",
      smileys: "스마일리"
    }
  },
  // Operators
  op: {
    empty: "비어있습니다",
    notempty: "비어있지 않습니다",
    equal: "같습니다",
    notequal: "같지 않습니다",
    contains: "포함합니다",
    notcontains: "포함하지 않습니다",
    anyof: "다음 중 하나",
    allof: "모든",
    greater: "큰",
    less: "작은",
    greaterorequal: "크거나 같음",
    lessorequal: "작거나 같음",
    and: "그리고",
    or: "또는"
  },
  // Embed window
  ew: {
    angular: "Angular 버전 사용",
    jquery: "jQuery 버전 사용",
    knockout: "Knockout 버전 사용",
    react: "React 버전 사용",
    vue: "Vue 버전 사용",
    bootstrap: "부트 스트랩 프레임",
    modern: "현대 테마",
    default: "기본 테마",
    orange: "오렌지 테마",
    darkblue: "진한 파란색 테마",
    darkrose: "다크로즈 테마",
    stone: "돌 테마",
    winter: "겨울 테마",
    winterstone: "겨울 돌 테마",
    showOnPage: "페이지에서 설문조사 보기",
    showInWindow: "윈도우 창에서 설문조사 보기",
    loadFromServer: "서버에서 설문조사 JSON 실행",
    titleScript: "스크립트 및 스타일",
    titleHtml: "HTML",
    titleJavaScript: "자바스크립트"
  },
  // Preview (Survey)
  ts: {
    selectPage: "테스트 할 페이지를 선택하십시오:",
    showInvisibleElements: "보이지 않는 요소 표시",
    hideInvisibleElements: "보이지 않는 요소 숨기기"
  },
  validators: {
    answercountvalidator: "답 개수",
    emailvalidator: "이메일",
    expressionvalidator: "표현식",
    numericvalidator: "숫자",
    regexvalidator: "정규식",
    textvalidator: "텍스트"
  },
  triggers: {
    completetrigger: "설문 완료",
    setvaluetrigger: "값 설정",
    copyvaluetrigger: "답변 복사",
    skiptrigger: "질문으로 건너뛰기",
    runexpressiontrigger: "표현식 실행",
    visibletrigger: "선명도 변경"
  },
  pehelp: {
    cookieName: "쿠키는 사용자가 동일한 설문조사를 두 번 작성하는 것을 방지합니다.",
    size: "입력 필드의 표시 영역을 조정합니다. <b>유효성 검사 → 최대 길이</b> 설정을 사용하여 입력 길이를 제한하십시오.",
    format: "{0} 실제 값의 자리 표시자로 사용합니다.",
    totalText: "하나 이상의 열에 Total 유형 또는 Total 표현식이 있는 경우에만 표시됩니다.",
    acceptedTypes: "자세한 내용은 [accept](https://www.w3schools.com/tags/att_input_accept.asp) 속성 설명을 참조하십시오.",
    columnColCount: "Radiogroup 및 Checkbox 셀 유형에만 적용할 수 있습니다.",
    autocomplete: "자세한 내용은 [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) 속성 설명을 참조하십시오.",
    valueName: "이 속성을 설정하지 않으면 대답이 Name 속성으로 지정된 필드에 저장됩니다.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "지정된 열에 동일한 값이 포함되어 있으면 현장조사에서 \"고유하지 않은 키 값\" 오류가 발생합니다."
  },
  // Properties
  p: {
    title: {
      name: "제목",
      title: "'이름'과 같은 경우 비워 둡니다."
    },
    multiSelect: "다중 선택 허용",
    showLabel: "이미지 캡션 표시",
    value: "값",
    tabAlign: "탭 정렬",
    description: "설명",
    logoFit: "로고 핏",
    pages: "페이지",
    questions: "질문",
    triggers: "트리거",
    calculatedValues: "계산된 값",
    surveyId: "설문조사 ID",
    surveyPostId: "설문조사 게시물 ID",
    surveyShowDataSaving: "설문 조사 쇼 데이터 저장",
    questionDescriptionLocation: "질문 설명 위치",
    progressBarType: "진행률 표시줄 유형",
    showTOC: "TOC 표시",
    tocLocation: "목차 위치",
    questionTitlePattern: "질문 제목 패턴",
    widthMode: "폭 모드",
    showBrandInfo: "브랜드 정보 표시",
    useDisplayValuesInDynamicTexts: "동적 텍스트에서 표시 값 사용Use display values in dynamic texts",
    visibleIf: "조건 충족시 보기",
    titleLocation: "제목 위치",
    descriptionLocation: "설명 위치",
    defaultValueExpression: "기본값 표현식",
    requiredIf: "다음과 같은 경우 필수입니다.",
    resetValueIf: "다음과 같은 경우 값을 재설정합니다.",
    validators: "유효성 검사기",
    bindings: "바인딩",
    renderAs: "렌더링 형식",
    attachOriginalItems: "원본 항목 첨부",
    choices: "선택",
    choicesByUrl: "URL을 통한 선택",
    currency: "화폐",
    cellHint: "셀 힌트",
    isUnique: "독특하다.",
    showInMultipleColumns: "여러 열에 표시",
    totalMaximumFractionDigits: "총 최대 자릿수",
    totalMinimumFractionDigits: "총 최소 자릿수",
    columns: "열",
    detailElements: "세부 요소",
    allowAdaptiveActions: "적응형 작업 허용",
    defaultRowValue: "기본 행 값",
    detailPanelShowOnAdding: "추가 시 세부 정보 패널 표시",
    choicesLazyLoadEnabled: "선택 지연 로드 사용",
    choicesLazyLoadPageSize: "선택 지연 로드 페이지 크기",
    inputFieldComponent: "입력 필드 구성 요소",
    itemComponent: "항목 구성 요소",
    min: "분",
    max: "최대",
    minValueExpression: "최소값 표현식",
    maxValueExpression: "최대값 표현식",
    step: "걸음",
    dataList: "데이터 목록",
    itemSize: "항목 크기",
    elements: "요소",
    content: "콘텐츠",
    navigationButtonsVisibility: "탐색 버튼 선명도",
    navigationTitle: "탐색 제목",
    navigationDescription: "탐색 설명",
    longTap: "길게 탭하기",
    autoGrow: "자동 성장",
    allowResize: "크기 조정 허용",
    acceptCarriageReturn: "캐리지 리턴 수락",
    displayMode: "디스플레이 모드",
    rateType: "비율 유형",
    label: "라벨",
    contentMode: "콘텐츠 모드",
    imageFit: "이미지 핏",
    altText: "대체 텍스트",
    height: "높이",
    penColor: "펜 색상",
    backgroundColor: "배경색",
    templateElements: "템플릿 요소",
    operator: "연산자",
    isVariable: "가변적이다",
    runExpression: "표현식 실행",
    showCaption: "캡션 표시",
    iconName: "아이콘 이름",
    iconSize: "아이콘 크기",
    precision: "정밀",
    matrixDragHandleArea: "매트릭스 끌기 핸들 영역",
    backgroundImage: "배경 이미지",
    backgroundImageFit: "배경 이미지 맞춤",
    backgroundImageAttachment: "배경 이미지 첨부",
    backgroundOpacity: "배경 불투명도",
    selectToRankEnabled: "사용 가능한 순위를 선택하려면 선택합니다.",
    selectToRankAreasLayout: "영역 레이아웃의 순위를 지정하려면 선택합니다.",
    allowCameraAccess: "카메라 액세스 허용",
    scaleColorMode: "스케일 컬러 모드",
    rateColorMode: "비율 색상 모드",
    templateTabTitle: "템플릿 탭 제목",
    templateVisibleIf: "다음과 같은 경우 템플릿이 표시됩니다.",
    copyDisplayValue: "표시 값 복사"
  },
  theme: {
    "--background": "배경색",
    "--background-dim-light": "배경 희미한 밝은 색",
    "--primary-foreground": "기본 전경색",
    "--foreground": "전경색",
    "--base-unit": "베이스 유닛",
    groupGeneral: "일반",
    groupAdvanced: "고급",
    themeName: "주제",
    themeMode: "질문 모양",
    themeModePanels: "기본값",
    themeModeLightweight: "패널 없음",
    themePaletteLight: "광",
    themePaletteDark: "어둠",
    primaryColor: "강조 색상",
    primaryDefaultColor: "기본값",
    primaryDarkColor: "호버",
    primaryLightColor: "선택한",
    backgroundDimColor: "배경색",
    backgroundImage: "배경 이미지",
    backgroundImageFitAuto: "자동",
    backgroundImageFitCover: "표지",
    backgroundImageFitContain: "포함하다",
    backgroundOpacity: "불투명도",
    backgroundImageAttachmentFixed: "부정하게 결정된",
    backgroundImageAttachmentScroll: "스크롤",
    panelBackgroundTransparency: "패널 배경 불투명도",
    questionBackgroundTransparency: "질문 배경 불투명도",
    questionPanel: "패널 배경 및 모서리 반경",
    questionTitle: "질문 제목 글꼴",
    questionDescription: "질문 설명 글꼴",
    editorPanel: "입력 요소",
    editorFont: "입력 요소 글꼴",
    backcolor: "기본 배경",
    hovercolor: "배경 가리키기",
    borderDecoration: "테두리 장식",
    accentBackground: "악센트 배경",
    accentForeground: "악센트 전경",
    primaryForecolor: "기본 색상",
    primaryForecolorLight: "비활성화 된 색상",
    linesColors: "보조 선 색상",
    borderDefault: "어두운",
    borderLight: "라이터",
    fontFamily: "글꼴 패밀리",
    fontSize: "글자 크기",
    color: "색",
    placeholderColor: "자리 표시자 색",
    size: "크기",
    fontWeightRegular: "일반",
    fontWeightHeavy: "무겁다",
    fontWeightSemiBold: "세미 굵게",
    fontWeightBold: "대담한",
    scale: "저울",
    cornerRadius: "코너 반경",
    surveyTitle: "설문조사 제목 글꼴",
    pageTitle: "페이지 제목 글꼴",
    pageDescription: "페이지 설명 글꼴",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "그림자 효과 추가",
    opacity: "불투명도",
    boxShadowBlur: "흐리게",
    boxShadowSpread: "전파",
    boxShadowDrop: "방울",
    boxShadowInner: "내부",
    questionShadow: "그림자 효과",
    editorShadow: "입력 요소 그림자 효과",
    names: {
      default: "기본값",
      sharp: "날카로운",
      borderless: "국경",
      flat: "플랫",
      plain: "평야",
      doubleborder: "이중 테두리",
      layered: "계층",
      solid: "고체",
      threedimensional: ".3D",
      contrast: "대조"
    },
    colors: {
      teal: "청록",
      blue: "파랑",
      purple: "보라색",
      orchid: "난초",
      tulip: "튤립",
      brown: "갈색",
      green: "녹색"
    }
  }
};
editorLocalization.locales["ko"] = koreanStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.externalHelpLink: "Watch and learn how to create surveys" => "설문조사를 만드는 방법을 보고 알아보세요."
// survey.externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber" => "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "설문 조사의 흐름을 사용자 지정하는 규칙을 만듭니다."
// survey.duplicate: "Duplicate" => "복사하다"
// qt.imagepicker: "Image Picker" => "이미지 선택기"
// qt.ranking: "Ranking" => "순위"
// qt.image: "Image" => "이미지"
// qt.tagbox: "Multi-Select Dropdown" => "다중 선택 드롭다운"
// qt.signaturepad: "Signature" => "서명"
// qt.buttongroup: "Button Group" => "단추 그룹"
// ed.defaultLocale: "Default ({0})" => "기본값({0})"
// ed.settingsTooltip: "Open settings" => "설정 열기"
// ed.surveySettings: "Survey Settings" => "설문조사 설정"
// ed.surveySettingsTooltip: "Open survey settings" => "설문조사 설정 열기"
// ed.showPanel: "Show Panel" => "패널 표시"
// ed.hidePanel: "Hide Panel" => "패널 숨기기"
// ed.prevSelected: "Select previous" => "이전 선택"
// ed.nextSelected: "Select next" => "다음을 선택합니다"
// ed.surveyTypeName: "Survey" => "조사"
// ed.pageTypeName: "Page" => "페이지"
// ed.panelTypeName: "Panel" => "패널"
// ed.questionTypeName: "Question" => "질문"
// ed.columnTypeName: "Column" => "열"
// ed.newTextItemName: "text" => "문자 메시지"
// ed.themeSurvey: "Themes" => "테마"
// ed.defaultV2Theme: "Default" => "기본값"
// ed.modernTheme: "Modern" => "현대의"
// ed.defaultTheme: "Default (legacy)" => "기본값(레거시)"
// ed.navigateToMsg: "You had to navigate to" => "다음으로 이동해야 했습니다."
// ed.logic: "Logic" => "논리학"
// ed.translation: "Translation" => "번역"
// ed.saveSurveyTooltip: "Save Survey" => "설문조사 저장"
// ed.jsonHideErrors: "Hide errors" => "오류 숨기기"
// ed.jsonShowErrors: "Show errors" => "오류 표시"
// ed.undoTooltip: "Undo last change" => "마지막 변경 사항 실행 취소"
// ed.redoTooltip: "Redo the change" => "변경 내용 다시 실행"
// ed.showMoreChoices: "Show more" => "더 보기"
// ed.showLessChoices: "Show less" => "간략하게 표시"
// ed.copy: "Copy" => "복사"
// ed.cut: "Cut" => "삭감"
// ed.paste: "Paste" => "붙여넣기"
// ed.copyTooltip: "Copy selection to clipboard" => "클립보드에 선택 항목 복사"
// ed.cutTooltip: "Cut selection to clipboard" => "선택 영역을 클립보드로 잘라내기"
// ed.pasteTooltip: "Paste from clipboard" => "클립보드에서 붙여넣기"
// ed.property-grid: "Properties" => "속성"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "검색하려면 입력..."
// ed.toolboxChoiceCategory: "Choice Questions" => "선택 질문"
// ed.toolboxTextCategory: "Text Input Questions" => "텍스트 입력 질문"
// ed.toolboxContainersCategory: "Containers" => "컨테이너"
// ed.toolboxMatrixCategory: "Matrix Questions" => "행렬 질문"
// ed.toolboxMiscCategory: "Misc" => "기타"
// ed.surveyResultsTable: "As Table" => "테이블로"
// ed.surveyResultsJson: "As JSON" => "JSON으로"
// ed.resultsTitle: "Question Title" => "질문 제목"
// ed.resultsName: "Question Name" => "질문 이름"
// ed.resultsValue: "Answer Value" => "답변 값"
// ed.resultsDisplayValue: "Display Value" => "표시 값"
// ed.propertyEditorError: "Error" => "오류"
// ed.saveError: "Error! Editor content is not saved." => "오류! 편집기 컨텐츠는 저장되지 않습니다."
// ed.translationPropertyGridTitle: "Language Settings" => "언어 설정"
// ed.themePropertyGridTitle: "Theme Settings" => "테마 설정"
// ed.translationLanguages: "Languages" => "언어들"
// ed.translationAddLanguage: "Select language to translate" => "번역할 언어 선택"
// ed.translationShowAllStrings: "All Strings" => "모든 문자열"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "사용된 문자열만"
// ed.translationShowAllPages: "All Pages" => "모든 페이지"
// ed.translationNoStrings: "No strings to translate. Please, change the filter." => "번역할 문자열이 없습니다. 필터를 교체하십시오."
// ed.translationExportToSCVButton: "Export to CSV" => "CSV로 내보내기"
// ed.translationImportFromSCVButton: "Import from CSV" => "CSV에서 가져오기"
// ed.translationMergeLocaleWithDefault: "Merge {0} with default locale" => "{0} 기본 로캘과 병합"
// ed.translationPlaceHolder: "Translation..." => "번역..."
// ed.themeExportButton: "Export" => "수출"
// ed.themeImportButton: "Import" => "수입"
// ed.bold: "Bold" => "대담한"
// ed.italic: "Italic" => "이탤릭체"
// ed.underline: "Underline" => "밑줄"
// ed.addNewQuestion: "Add Question" => "질문 추가"
// ed.selectPage: "Select page..." => "페이지 선택..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "선택 항목은 다음에서 복사됩니다."
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML 콘텐츠가 여기에 있습니다."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "도구 상자에서 질문을 삭제하세요."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "설문 조사가 비어 있습니다. 도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "여기에 이미지를 끌어다 놓거나 아래 버튼을 클릭하고 업로드할 이미지를 선택하세요."
// ed.imageChooseImage: "Choose Image" => "이미지 선택"
// ed.addNewTypeQuestion: "Add {0}" => "{0} 추가"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[로고]"
// ed.auto: "auto" => "자동"
// ed.choices_Item: "Item " => "항목 "
// lg.addNewItem: "Add New Rule" => "새 규칙 추가"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "설문 조사의 흐름을 사용자 지정하는 규칙을 만듭니다."
// lg.page_visibilityName: "Show (hide) page" => "페이지 표시(숨기기)"
// lg.page_enableName: "Enable (disable) page" => "사용(사용 안 함) 페이지"
// lg.panel_visibilityName: "Show (hide) panel" => "표시(숨기기) 패널"
// lg.panel_enableName: "Enable (disable) panel" => "활성화(비활성화) 패널"
// lg.question_visibilityName: "Show (hide) question" => "질문 표시(숨기기)"
// lg.question_enableName: "Enable (disable) question" => "사용(사용 안 함) 질문"
// lg.question_requireName: "Make question required" => "질문 필수 항목 만들기"
// lg.column_visibilityName: "Show (hide) column" => "열 표시(숨기기)"
// lg.column_enableName: "Enable (disable) column" => "사용(사용 안 함) 열"
// lg.column_requireName: "Make column required" => "열을 필수로 설정"
// lg.trigger_completeName: "Complete survey" => "설문 조사 완료"
// lg.trigger_setvalueName: "Set answer" => "정답 설정"
// lg.trigger_copyvalueName: "Copy answer" => "답변 복사"
// lg.trigger_skipName: "Skip to question" => "질문으로 건너뛰기"
// lg.trigger_runExpressionName: "Run expression" => "표현식 실행"
// lg.completedHtmlOnConditionName: "Set \"Survey Complete\" page markup" => "\"설문조사 완료\" 페이지 마크업 설정"
// lg.page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible." => "논리 표현식이 true를 반환할 때 페이지가 표시되도록 합니다. 그렇지 않으면 보이지 않게 유지하십시오."
// lg.panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible." => "논리 표현식이 true를 반환할 때 패널이 표시되도록 합니다. 그렇지 않으면 보이지 않게 유지하십시오."
// lg.panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled." => "패널과 그 안의 모든 요소는 논리 표현식이 true를 반환할 때 활성화됩니다. 그렇지 않으면 비활성화 상태로 유지하십시오."
// lg.question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible." => "논리 표현식이 true를 반환할 때 질문을 표시합니다. 그렇지 않으면 보이지 않게 유지하십시오."
// lg.question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled." => "논리 표현식이 true를 반환할 때 질문을 활성화합니다. 그렇지 않으면 비활성화 상태로 유지하십시오."
// lg.question_requireDescription: "Question becomes required when the logic expression returns true." => "논리 표현식이 true를 반환할 때 질문이 필요합니다."
// lg.trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'." => "논리 표현식이 true를 반환하면 설문 조사가 완료되고 최종 사용자에게 '감사 페이지'가 표시됩니다."
// lg.trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question." => "논리식에 사용된 질문 값이 변경되고 논리식이 true를 반환하면 값이 선택한 질문으로 설정됩니다."
// lg.trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question." => "논리 표현식에 사용된 질문 값이 변경되고 논리 표현식이 true를 반환하면 선택한 한 질문의 값이 선택한 다른 질문에 복사됩니다."
// lg.trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question." => "논리 표현식이 true를 반환하면 설문 조사는 선택한 질문으로 건너 뜁니다."
// lg.trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question" => "논리 표현식이 true를 반환하면 사용자 지정 표현식이 수행됩니다. 선택적으로 이 표현식 결과를 선택한 질문으로 설정할 수 있습니다"
// lg.completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one." => "논리 표현식이 true를 반환하면 'Thank you page'의 기본 텍스트가 지정된 텍스트로 변경됩니다."
// lg.itemExpressionText: "When expression: '{0}' returns true" => "표현식: '{0}'가 true를 반환하는 경우"
// lg.itemEmptyExpressionText: "New rule" => "새 규칙"
// lg.page_visibilityText: "make page {0} visible" => "페이지 {0} 표시"
// lg.panel_visibilityText: "make panel {0} visible" => "패널 {0} 표시"
// lg.panel_enableText: "make panel {0} enable" => "패널을 활성화{0}"
// lg.question_visibilityText: "make question {0} visible" => "질문 {0} 표시"
// lg.question_enableText: "make question {0} enable" => "질문 {0} 사용 설정"
// lg.question_requireText: "make question {0} required" => "질문 {0} 필수"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "질문의 열 {0} {1} 표시"
// lg.column_enableText: "make column {0} of question {1} enable" => "질문의 열 {0} {1} 사용하도록 설정"
// lg.column_requireText: "make column {0} of question {1} required" => "질문의 열 {0} {1} 필수"
// lg.trigger_completeText: "survey becomes completed" => "조사가 완료됩니다"
// lg.trigger_setvalueText: "set into question: {0} value {1}" => "질문으로 설정: {0} 값 {1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "명확한 질문 값: {0}"
// lg.trigger_copyvalueText: "copy into question: {0} value from question {1}" => "질문으로 복사: 질문 {1}의 {0} 값"
// lg.trigger_skipText: "survey skip to the question {0}" => "설문 조사 질문으로 건너 뛰기 {0}"
// lg.trigger_runExpressionText1: "run expression: '{0}'" => "실행 식: '{0}'"
// lg.trigger_runExpressionText2: " and set its result into question: {0}" => " 그 결과에 의문을 제기하십시오 : {0}"
// lg.completedHtmlOnConditionText: "show custom text for the 'Thank you page'." => "'감사 페이지'에 대한 사용자 지정 텍스트를 표시합니다."
// lg.showAllQuestions: "All Questions" => "모든 질문"
// lg.showAllActionTypes: "All Action Types" => "모든 작업 유형"
// lg.conditions: "Condition(s)" => "조건"
// lg.actions: "Action(s)" => "작업"
// lg.expressionEditorTitle: "Define condition(s)" => "조건 정의"
// lg.actionsEditorTitle: "Define action(s)" => "작업 정의"
// lg.deleteAction: "Delete Action" => "삭제 작업"
// lg.addNewAction: "Add Action" => "작업 추가"
// lg.selectedActionCaption: "Select action..." => "작업 선택..."
// lg.expressionInvalid: "The logic expression is empty or invalid. Please correct it." => "논리 표현식이 비어 있거나 올바르지 않습니다. 수정해 주세요."
// lg.noActionError: "Please, add at least one action." => "하나 이상의 작업을 추가하십시오."
// lg.actionInvalid: "Please, fix problems in your action(s)." => "귀하의 행동에서 문제를 해결하십시오."
// lg.uncompletedRule_title: "Logical rules are incomplete" => "논리적 규칙이 불완전합니다."
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "일부 논리적 규칙을 완료하지 않았습니다. 지금 탭을 나가면 변경 내용이 손실됩니다. 변경을 완료하지 않고 탭을 종료하시겠습니까?"
// lg.uncompletedRule_apply: "Yes" => "예"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "아니요, 규칙을 완료하고 싶습니다."
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.save: "Save" => "구해내다"
// pe.clear: "Clear" => "맑다"
// pe.saveTooltip: "Save" => "구해내다"
// pe.set: "Set" => "집합"
// pe.change: "Change" => "잔돈"
// pe.refresh: "Refresh" => "리프레쉬"
// pe.add: "Add" => "더하다"
// pe.removeItem: "Click to remove the item..." => "항목을 제거하려면 클릭하세요..."
// pe.dragItem: "Drag the item" => "항목을 드래그합니다"
// pe.addOther: "Other" => "다른"
// pe.addSelectAll: "Select All" => "모두 선택"
// pe.addNone: "None" => "없음"
// pe.back: "Return without saving" => "저장하지 않고 반환"
// pe.backTooltip: "Return without saving" => "저장하지 않고 반환"
// pe.saveAndBack: "Save and return" => "저장 및 반환"
// pe.saveAndBackTooltip: "Save and return" => "저장 및 반환"
// pe.doneEditing: "Done" => "수행"
// pe.showChoices: "Show Choices" => "선택 항목 표시"
// pe.emptyValue: "Value is empty" => "값이 비어 있습니다."
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "'{0}' 값은 고유하지 않습니다."
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "항목 수를 {0}개에서 {1}개로 제한하십시오."
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "다음 형식으로 데이터를 설정할 수 있습니다.\nvalue1|텍스트\n값2"
// pe.itemSelectorEmpty: "Please select the element" => "요소를 선택해 주세요"
// pe.conditionActionEmpty: "Please select the action" => "작업을 선택하십시오."
// pe.conditionSelectPage: "Select page..." => "페이지 선택..."
// pe.conditionSelectPanel: "Select panel..." => "패널 선택..."
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "설문조사를 제출하기 전에 답변 미리 보기"
// pe.overridingPropertyPrefix: "Set by " => "설정 기준 "
// pe.propertyIsNoUnique: "Please enter a unique value" => "고유한 값을 입력하십시오."
// pe.propertyNameIsNotUnique: "Please enter a unique name" => "고유한 이름을 입력하십시오."
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "예약어를 사용하지 마십시오: \"item\", \"choice\", \"panel\", \"row\"."
// pe.listIsEmpty: "No items have been added yet" => "아직 추가된 항목이 없습니다."
// pe.listIsEmpty@choices: "No choices have been added yet" => "선택 항목이 아직 추가되지 않았습니다"
// pe.addNew@choices: "Add a choice" => "선택 항목 추가"
// pe.expressionIsEmpty: "Expression is empty" => "식이 비어 있습니다."
// pe.rowid: "Row ID" => "행 ID"
// pe.imageLink: "Image or video URL" => "이미지 또는 동영상 URL"
// choicesbyurl.valueName: "Get values from the following JSON field" => "다음 JSON 필드에서 값 가져오기"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "다음 JSON 필드에서 이미지 URL을 가져옵니다."
// pe.allowEmptyResponse: "Allow empty response" => "빈 응답 허용"
// pe.titlePlaceholder: "Title" => "타이틀"
// pe.surveyTitlePlaceholder: "Survey Title" => "설문조사 제목"
// pe.pageTitlePlaceholder: "Page {num}" => "페이지 {num}"
// pe.descriptionPlaceholder: "Description" => "묘사"
// pe.surveyDescriptionPlaceholder: "Description" => "묘사"
// pe.pageDescriptionPlaceholder: "Description" => "묘사"
// pe.showNoneItem: "Allow the None option" => "없음 옵션 허용"
// pe.noneText: "None option text" => "없음 옵션 텍스트"
// pe.showSelectAllItem: "Allow the Select All option" => "모두 선택 옵션 허용"
// pe.selectAllText: "Select All option text" => "모두 선택 옵션 텍스트"
// pe.choicesMin: "Minimum value for auto-generated items" => "자동 생성된 항목의 최소값"
// pe.choicesMax: "Maximum value for auto-generated items" => "자동 생성된 항목의 최대값"
// pe.choicesStep: "Step for auto-generated items" => "자동 생성된 항목에 대한 단계"
// pe.isAllRowRequired: "Require answer for all rows" => "모든 행에 대한 응답 필요"
// pe.requiredErrorText: "\"Required\" error message" => "\"필수\" 오류 메시지"
// pe.cols: "Columns" => "열"
// pe.rateMin: "Minimum rate value" => "최소 요금 값"
// pe.rateMax: "Maximum rate value" => "최대 속도 값"
// pe.rateStep: "Rate step" => "속도 단계"
// pe.maxLength: "Maximum length (in characters)" => "최대 길이(문자)"
// pe.buildExpression: "Build" => "체격"
// pe.editExpression: "Edit" => "편집하다"
// pe.and: "and" => "그리고"
// pe.or: "or" => "또는"
// pe.remove: "Remove" => "제거하다"
// pe.addCondition: "Add Condition" => "조건 추가"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "질문을 선택하여 조건 구성을 시작합니다."
// pe.if: "If" => "면"
// pe.then: "then" => "그러면"
// pe.setToName: "Target question" => "대상 질문"
// pe.fromName: "Question to copy answer from" => "답변을 복사할 질문"
// pe.gotoName: "Question to skip to" => "건너뛸 질문"
// pe.ruleIsNotSet: "Rule is incorrect" => "규칙이 올바르지 않습니다."
// pe.includeIntoResult: "Include into survey results" => "설문조사 결과에 포함"
// pe.expandCollapseTitle: "Expand/collapse title" => "제목 확장/축소"
// pe.simulator: "Select device type" => "장치 유형 선택"
// pe.landscapeOrientation: "Switch to landscape orientation" => "가로 방향으로 전환"
// pe.portraitOrientation: "Switch to portrait orientation" => "세로 방향으로 전환"
// pe.previewText: "Preview Answers button text" => "답변 미리보기 버튼 텍스트"
// pe.editText: "Edit Answer button text" => "답변 편집 단추 텍스트"
// image.imageHeight: "Image height (in CSS-accepted values)" => "이미지 높이(CSS에서 허용하는 값)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "이미지 너비(CSS에서 허용하는 값)"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "페이지 완료 시간 제한(초)"
// question.page: "Parent page" => "상위 페이지"
// pe.noEntriesText: "Empty entries text" => "빈 항목 텍스트"
// pe.html: "HTML markup" => "HTML 마크업"
// pe.expression: "Expression" => "식"
// pe.setValue: "Answer" => "대답"
// pe.dataFormat: "Image format" => "이미지 형식"
// pe.allowAddRows: "Allow adding rows" => "행 추가 허용"
// pe.allowRemoveRows: "Allow removing rows" => "행 제거 허용"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "행 끌어서 놓기 허용"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "정확한 이미지 너비 또는 높이를 지정하는 경우에는 적용되지 않습니다."
// pe.minImageWidth: "Minimum image width" => "최소 이미지 너비"
// pe.maxImageWidth: "Maximum image width" => "최대 이미지 너비"
// pe.minImageHeight: "Minimum image height" => "최소 이미지 높이"
// pe.maxImageHeight: "Maximum image height" => "최대 이미지 높이"
// pe.minValue: "Minimum value" => "최소값"
// pe.maxValue: "Maximum value" => "최대값"
// pe.minLength: "Minimum length (in characters)" => "최소 길이(문자)"
// pe.allowDigits: "Allow digits" => "숫자 허용"
// pe.minCount: "Minimum count" => "최소 개수"
// pe.maxCount: "Maximum count" => "최대 개수"
// pe.regex: "Regular expression" => "정규식"
// surveyvalidator.text: "Error message" => "오류 메시지"
// surveyvalidator.expression: "Validation expression" => "유효성 검사 표현식"
// pe.totalText: "Total row text" => "전체 행 텍스트"
// pe.totalType: "Total type" => "합계 유형"
// pe.totalExpression: "Total expression" => "총 표현식"
// pe.totalDisplayStyle: "Total value display style" => "총액 표시 스타일"
// pe.totalCurrency: "Currency" => "통화"
// pe.totalFormat: "Formatted string" => "서식이 지정된 문자열"
// pe.logo: "Logo (URL or base64-encoded string)" => "로고(URL 또는 base64로 인코딩된 문자열)"
// pe.questionsOnPageMode: "Survey structure" => "설문조사 구조"
// pe.maxTextLength: "Maximum answer length (in characters)" => "최대 답변 길이(문자 단위)"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "최대 주석 길이(문자)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "필요한 경우 주석 영역 자동 확장"
// pe.allowResizeComment: "Allow users to resize text areas" => "사용자가 텍스트 영역의 크기를 조정할 수 있도록 허용"
// pe.textUpdateMode: "Update text question value" => "텍스트 질문 값 업데이트"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "첫 번째 오답에 포커스 설정"
// pe.checkErrorsMode: "Run validation" => "유효성 검사 실행"
// pe.navigateToUrl: "Navigate to URL" => "URL로 이동합니다."
// pe.navigateToUrlOnCondition: "Dynamic URL" => "동적 URL"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "사용자가 이미 이 설문조사를 작성했는지 여부를 표시하는 마크업"
// pe.completedHtml: "Survey Complete page markup" => "설문조사 완료 페이지 마크업"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "동적 설문조사 완료 페이지 마크업"
// pe.loadingHtml: "Markup to show while survey model is loading" => "측량 모델이 로드되는 동안 표시할 마크업"
// pe.commentText: "Comment area text" => "주석 영역 텍스트"
// pe.autocomplete: "Autocomplete type" => "자동 완성 유형"
// pe.labelTrue: "\"True\" label" => "\"True\" 레이블"
// pe.labelFalse: "\"False\" label" => "\"거짓\" 레이블"
// pe.allowClear: "Show the Clear button" => "지우기 단추 표시"
// pe.displayStyle: "Value display style" => "값 표시 스타일"
// pe.format: "Formatted string" => "서식이 지정된 문자열"
// pe.maximumFractionDigits: "Maximum fractional digits" => "최대 소수 자릿수"
// pe.minimumFractionDigits: "Minimum fractional digits" => "최소 소수 자릿수"
// pe.useGrouping: "Display grouping separators" => "그룹화 구분 기호 표시"
// pe.allowMultiple: "Allow multiple files" => "여러 파일 허용"
// pe.allowImagesPreview: "Preview images" => "이미지 미리보기"
// pe.acceptedTypes: "Accepted file types" => "허용되는 파일 형식"
// pe.waitForUpload: "Wait for the upload to complete" => "업로드가 완료될 때까지 기다리세요"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "파일 삭제 확인"
// pe.detailPanelMode: "Detail panel location" => "세부 정보 패널 위치"
// pe.minRowCount: "Minimum row count" => "최소 행 개수"
// pe.maxRowCount: "Maximum row count" => "최대 행 개수"
// pe.confirmDelete: "Confirm row deletion" => "행 삭제 확인"
// pe.confirmDeleteText: "Confirmation message" => "확인 메시지"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "패널 삭제 확인"
// pe.panelCount: "Initial panel count" => "초기 패널 수"
// pe.minPanelCount: "Minimum panel count" => "최소 패널 수"
// pe.maxPanelCount: "Maximum panel count" => "최대 패널 수"
// pe.panelsState: "Inner panel expand state" => "내부 패널 확장 상태"
// pe.templateDescription: "Description template" => "설명 템플릿"
// pe.templateTitle: "Title template" => "제목 템플릿"
// pe.panelPrevText: "Previous Panel button tooltip" => "이전 패널 단추 도구 설명"
// pe.panelNextText: "Next Panel button tooltip" => "다음 패널 단추 도구 설명"
// pe.showRangeInProgress: "Show progress bar" => "진행률 표시줄 표시"
// pe.templateTitleLocation: "Question title location" => "질문 제목 위치"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "패널 단추 위치 제거"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "행이 없는 경우 질문 숨기기"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "행이 없는 경우 열 숨기기"
// pe.rateValues: "Custom rate values" => "사용자 지정 요금 값"
// pe.rateCount: "Rate count" => "비율 개수"
// pe.autoGenerate: "How to specify rate values?" => "비율 값을 지정하는 방법은 무엇입니까?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "선택 항목이 없는 경우 질문 숨기기"
// pe.hideNumber: "Hide question number" => "질문 번호 숨기기"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "최소 너비(CSS에서 허용하는 값)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "최대 너비(CSS에서 허용하는 값)"
// pe.width: "Width (in CSS-accepted values)" => "너비(CSS에서 허용하는 값)"
// pe.showHeader: "Show column headers" => "열 머리글 표시"
// pe.horizontalScroll: "Show horizontal scrollbar" => "가로 스크롤 막대 표시"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "최소 열 너비(CSS에서 허용하는 값)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "행 머리글 너비(CSS에서 허용하는 값)"
// pe.valueTrue: "\"True\" value" => "\"True\" 값"
// pe.valueFalse: "\"False\" value" => "\"False\" 값"
// pe.minErrorText: "\"Value is below minimum\" error message" => "\"값이 최소값 미만입니다.\" 오류 메시지"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "\"값이 최대값을 초과합니다.\" 오류 메시지"
// pe.otherErrorText: "\"Empty comment\" error message" => "'빈 댓글' 오류 메시지"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "\"고유하지 않은 키 값\" 오류 메시지"
// pe.minSelectedChoices: "Minimum selected choices" => "선택한 최소 선택 항목"
// pe.maxSelectedChoices: "Maximum selected choices" => "선택한 최대 선택 항목 수"
// pe.showClearButton: "Show the Clear button" => "지우기 단추 표시"
// pe.showNumber: "Show panel number" => "패널 번호 표시"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "로고 너비(CSS에서 허용하는 값)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "로고 높이(CSS에서 허용하는 값)"
// pe.readOnly: "Read-only" => "읽기 전용"
// pe.enableIf: "Editable if" => "다음과 같은 경우 편집 가능"
// pe.emptyRowsText: "\"No rows\" message" => "'행 없음' 메시지"
// pe.size: "Input field size (in characters)" => "입력 필드 크기(문자)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "별도의 특수 선택(없음, 기타, 모두 선택)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "다음 질문에서 선택 항목을 복사합니다."
// pe.choicesFromQuestionMode: "Which choices to copy?" => "어떤 선택 항목을 복사해야 합니까?"
// pe.showCommentArea: "Show the comment area" => "주석 영역 표시"
// pe.commentPlaceholder: "Comment area placeholder" => "주석 영역 자리 표시자"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "속도 설명을 극한 값으로 표시"
// pe.rowsOrder: "Row order" => "행 순서"
// pe.columnsLayout: "Column layout" => "열 레이아웃"
// pe.columnColCount: "Nested column count" => "중첩된 열 개수"
// pe.state: "Panel expand state" => "패널 확장 상태"
// pe.correctAnswer: "Correct Answer" => "정답"
// pe.defaultPanelValue: "Default Values" => "기본값"
// pe.cells: "Cell Texts" => "셀 텍스트"
// pe.keyName: "Key column" => "키 열"
// itemvalue.text: "Alt text" => "대체 텍스트"
// pe.logoPosition: "Logo position" => "로고 위치"
// pe.addLogo: "Add logo..." => "로고 추가..."
// pe.changeLogo: "Change logo..." => "로고 변경..."
// logoPositions.none: "Remove logo" => "로고 제거"
// logoPositions.left: "Left" => "왼쪽"
// logoPositions.right: "Right" => "오른쪽"
// logoPositions.top: "On the top" => "맨 위에"
// logoPositions.bottom: "In the bottom" => "하단에"
// tabs.requiredIf: "Required If" => "다음과 같은 경우 필수입니다."
// tabs.numbering: "Numbering" => "번호 매기기"
// tabs.pages: "Pages" => "페이지"
// tabs.calculatedValues: "Calculated Values" => "계산된 값"
// tabs.totals: "Totals" => "합계"
// tabs.logic: "Logic" => "논리학"
// tabs.layout: "Layout" => "레이아웃"
// tabs.data: "Data" => "데이터"
// tabs.validation: "Validation" => "유효성 검사"
// tabs.cells: "Cell Texts" => "셀 텍스트"
// tabs.showOnCompleted: "Survey Complete" => "설문조사 완료"
// tabs.logo: "Logo in Survey Title" => "설문조사 제목의 로고"
// tabs.slider: "Slider" => "슬라이더"
// tabs.expression: "Expression" => "식"
// tabs.others: "Others" => "다른"
// pe.choicesVisibleIf: "Choices are visible if" => "다음과 같은 경우 선택 항목이 표시됩니다."
// pe.choicesEnableIf: "Choices are selectable if" => "다음과 같은 경우 선택 항목을 선택할 수 있습니다."
// pe.columnsEnableIf: "Columns are visible if" => "다음과 같은 경우 열이 표시됩니다."
// pe.rowsEnableIf: "Rows are visible if" => "다음과 같은 경우 행이 표시됩니다."
// pe.indent: "Add indents" => "들여쓰기 추가"
// panel.indent: "Add outer indents" => "바깥쪽 들여쓰기 추가"
// pe.innerIndent: "Add inner indents" => "내부 들여쓰기 추가"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "마지막 행에서 기본값 가져오기"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "마지막 패널에서 기본값 가져 오기"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "Enter 버튼을 눌러 편집합니다."
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "항목을 편집하려면 Enter 버튼을 누르고, 항목을 삭제하려면 삭제 버튼을 누르고, 항목을 이동하려면 alt 더하기 화살표 위쪽 또는 아래쪽 화살표를 누릅니다."
// pe.triggerFromName: "Copy value from: " => "다음에서 값 복사: "
// pe.triggerRunExpression: "Run this Expression" => "이 표현식을 실행합니다."
// pe.triggerGotoName: "Go to the question" => "질문으로 이동"
// pe.triggerRunExpressionEmpty: "Please enter a valid expression" => "올바른 표현식을 입력하십시오."
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "여기에 표현식을 입력하십시오 ..."
// pe.noFile: "No file choosen" => "선택한 파일 없음"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "질문이 숨겨지면 값을 지웁니다"
// pe.valuePropertyName: "Value property name" => "값 속성 이름"
// pe.searchEnabled: "Enable search" => "검색 사용"
// pe.hideSelectedItems: "Hide selected items" => "선택한 항목 숨기기"
// pe.closeOnSelect: "Close the dropdown after selection" => "선택 후 드롭다운을 닫습니다."
// pe.signatureWidth: "Signature width" => "서명 너비"
// pe.signatureHeight: "Signature height" => "서명 높이"
// pe.verticalAlign: "Vertical alignment" => "수직 정렬"
// pe.alternateRows: "Alternate rows" => "대체 행"
// pe.columnsVisibleIf: "Columns are visible if" => "다음과 같은 경우 열이 표시됩니다."
// pe.rowsVisibleIf: "Rows are visible if" => "다음과 같은 경우 행이 표시됩니다."
// pe.otherPlaceholder: "Comment area placeholder" => "주석 영역 자리 표시자"
// pe.rateType: "Rate type" => "비율 유형"
// pv.true: "true" => "참"
// pv.false: "false" => "거짓"
// pv.decimal: "decimal" => "십진법"
// pv.currency: "currency" => "통화"
// pv.percent: "percent" => "퍼센트"
// pv.onpanel: "Start on each panel" => "각 패널에서 시작"
// pv.tab: "Tabs" => "탭"
// pv.both: "Both" => "둘다"
// pv.right: "Right" => "오른쪽"
// pv.color: "color" => "색"
// pv.date: "date" => "날짜"
// pv.datetime: "datetime" => "날짜/시간"
// pv.datetime-local: "datetime-local" => "날짜/시간 로컬"
// pv.email: "email" => "이메일"
// pv.month: "month" => "달"
// pv.number: "number" => "수"
// pv.password: "password" => "암호"
// pv.range: "range" => "레인지"
// pv.tel: "tel" => "전화"
// pv.text: "text" => "문자 메시지"
// pv.time: "time" => "시간"
// pv.url: "url" => "URL (영문)"
// pv.week: "week" => "주"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "질문 또는 해당 패널/페이지가 숨겨지는 경우"
// clearInvisibleValues.none: "Never" => "결코"
// inputType.color: "Color" => "색"
// inputType.date: "Date" => "날짜"
// inputType.datetime-local: "Date and Time" => "날짜 및 시간"
// inputType.email: "Email" => "이메일"
// inputType.month: "Month" => "달"
// inputType.number: "Number" => "수"
// inputType.password: "Password" => "암호"
// inputType.range: "Range" => "레인지"
// inputType.tel: "Phone Number" => "전화번호"
// inputType.text: "Text" => "문자 메시지"
// inputType.time: "Time" => "시간"
// inputType.url: "URL" => "URL (영문)"
// inputType.week: "Week" => "주"
// pv.onValueChanging: "Before an answer is changed" => "답변이 변경되기 전에"
// pv.standard: "Original structure" => "원래 구조"
// pv.singlePage: "All questions on a single page" => "한 페이지에 있는 모든 질문"
// pv.questionPerPage: "Each question on an individual page" => "개별 페이지의 각 질문"
// pv.noPreview: "No preview" => "미리보기 없음"
// pv.showAllQuestions: "Show all questions" => "모든 질문 표시"
// pv.showAnsweredQuestions: "Show answered questions only" => "답변된 질문만 표시"
// pv.pages: "Completed pages" => "완성된 페이지"
// pv.questions: "Answered questions" => "답변된 질문"
// pv.requiredQuestions: "Answered required questions" => "필수 질문에 답변했습니다."
// pv.correctQuestions: "Valid answers" => "유효한 답변"
// pv.buttons: "Completed pages (button UI)" => "완성된 페이지(버튼 UI)"
// pv.underInput: "Under the input" => "입력 아래"
// pv.underTitle: "Under the title" => "제목 아래"
// pv.onBlur: "On blur" => "흐림 현상"
// pv.onTyping: "While typing" => "입력하는 동안"
// pv.underRow: "Under the row" => "행 아래"
// pv.underRowSingle: "Under the row, only one panel is visible" => "행 아래에는 하나의 패널만 표시됩니다"
// showNavigationButtons.none: "Hidden" => "숨겨진"
// showProgressBar.off: "Hidden" => "숨겨진"
// showTimerPanel.none: "Hidden" => "숨겨진"
// showTimerPanelMode.all: "Both" => "둘다"
// detailPanelMode.none: "Hidden" => "숨겨진"
// addRowLocation.default: "Depends on matrix layout" => "행렬 레이아웃에 따라 다름"
// panelsState.default: "Users cannot expand or collapse panels" => "사용자는 패널을 확장하거나 축소할 수 없습니다."
// panelsState.collapsed: "All panels are collapsed" => "모든 패널이 축소됩니다"
// panelsState.expanded: "All panels are expanded" => "모든 패널이 확장됩니다."
// widthMode.auto: "Auto" => "자동"
// widthMode.static: "Static" => "정적인"
// widthMode.responsive: "Responsive" => "반응"
// imageFit.none: "None" => "없음"
// imageFit.contain: "Contain" => "포함하다"
// imageFit.cover: "Cover" => "표지"
// imageFit.fill: "Fill" => "채우다"
// contentMode.auto: "Auto" => "자동"
// contentMode.image: "Image" => "이미지"
// contentMode.video: "Video" => "비디오"
// contentMode.youtube: "YouTube" => "유튜브"
// displayMode.auto: "Auto" => "자동"
// displayMode.buttons: "Buttons" => "단추"
// displayMode.dropdown: "Dropdown" => "드롭다운(Dropdown)"
// rateColorMode.default: "Default" => "기본값"
// autoGenerate.true: "Generate" => "창조하다"
// autoGenerate.false: "Enter manually" => "수동으로 입력"
// rateType.labels: "Labels" => "레이블"
// rateType.stars: "Stars" => "별"
// rateType.smileys: "Smileys" => "스마일리"
// op.anyof: "Any of" => "다음 중 하나"
// op.allof: "All of" => "모든"
// op.and: "and" => "그리고"
// op.or: "or" => "또는"
// ew.modern: "Modern theme" => "현대 테마"
// ew.default: "Default theme" => "기본 테마"
// ew.orange: "Orange theme" => "오렌지 테마"
// ew.darkblue: "Darkblue theme" => "진한 파란색 테마"
// ew.darkrose: "Darkrose theme" => "다크로즈 테마"
// ew.stone: "Stone theme" => "돌 테마"
// ew.winter: "Winter theme" => "겨울 테마"
// ew.winterstone: "Winter-Stone theme" => "겨울 돌 테마"
// ts.showInvisibleElements: "Show invisible elements" => "보이지 않는 요소 표시"
// ts.hideInvisibleElements: "Hide invisible elements" => "보이지 않는 요소 숨기기"
// triggers.copyvaluetrigger: "Copy answer" => "답변 복사"
// triggers.skiptrigger: "Skip to question" => "질문으로 건너뛰기"
// triggers.runexpressiontrigger: "Run expression" => "표현식 실행"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "쿠키는 사용자가 동일한 설문조사를 두 번 작성하는 것을 방지합니다."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "입력 필드의 표시 영역을 조정합니다. <b>유효성 검사 → 최대 길이</b> 설정을 사용하여 입력 길이를 제한하십시오."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "{0} 실제 값의 자리 표시자로 사용합니다."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "하나 이상의 열에 Total 유형 또는 Total 표현식이 있는 경우에만 표시됩니다."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "자세한 내용은 [accept](https://www.w3schools.com/tags/att_input_accept.asp) 속성 설명을 참조하십시오."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Radiogroup 및 Checkbox 셀 유형에만 적용할 수 있습니다."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "자세한 내용은 [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) 속성 설명을 참조하십시오."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "이 속성을 설정하지 않으면 대답이 Name 속성으로 지정된 필드에 저장됩니다."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "지정된 열에 동일한 값이 포함되어 있으면 현장조사에서 \"고유하지 않은 키 값\" 오류가 발생합니다."
// p.multiSelect: "Allow multiple selection" => "다중 선택 허용"
// p.showLabel: "Show image captions" => "이미지 캡션 표시"
// p.value: "Value" => "값"
// p.tabAlign: "Tab alignment" => "탭 정렬"
// p.logoFit: "Logo fit" => "로고 핏"
// p.pages: "Pages" => "페이지"
// p.questions: "Questions" => "질문"
// p.calculatedValues: "Calculated values" => "계산된 값"
// p.surveyId: "Survey id" => "설문조사 ID"
// p.surveyPostId: "Survey post id" => "설문조사 게시물 ID"
// p.surveyShowDataSaving: "Survey show data saving" => "설문 조사 쇼 데이터 저장"
// p.questionDescriptionLocation: "Question description location" => "질문 설명 위치"
// p.progressBarType: "Progress bar type" => "진행률 표시줄 유형"
// p.showTOC: "Show TOC" => "TOC 표시"
// p.tocLocation: "Toc location" => "목차 위치"
// p.questionTitlePattern: "Question title pattern" => "질문 제목 패턴"
// p.widthMode: "Width mode" => "폭 모드"
// p.showBrandInfo: "Show brand info" => "브랜드 정보 표시"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "동적 텍스트에서 표시 값 사용Use display values in dynamic texts"
// p.descriptionLocation: "Description location" => "설명 위치"
// p.defaultValueExpression: "Default value expression" => "기본값 표현식"
// p.requiredIf: "Required if" => "다음과 같은 경우 필수입니다."
// p.bindings: "Bindings" => "바인딩"
// p.renderAs: "Render as" => "렌더링 형식"
// p.attachOriginalItems: "Attach original items" => "원본 항목 첨부"
// p.cellHint: "Cell hint" => "셀 힌트"
// p.isUnique: "Is unique" => "독특하다."
// p.showInMultipleColumns: "Show in multiple columns" => "여러 열에 표시"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "총 최대 자릿수"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "총 최소 자릿수"
// p.detailElements: "Detail elements" => "세부 요소"
// p.allowAdaptiveActions: "Allow adaptive actions" => "적응형 작업 허용"
// p.defaultRowValue: "Default row value" => "기본 행 값"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "추가 시 세부 정보 패널 표시"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "선택 지연 로드 사용"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "선택 지연 로드 페이지 크기"
// p.inputFieldComponent: "Input field component" => "입력 필드 구성 요소"
// p.itemComponent: "Item component" => "항목 구성 요소"
// p.min: "Min" => "분"
// p.max: "Max" => "최대"
// p.minValueExpression: "Min value expression" => "최소값 표현식"
// p.maxValueExpression: "Max value expression" => "최대값 표현식"
// p.step: "Step" => "걸음"
// p.dataList: "Data list" => "데이터 목록"
// p.elements: "Elements" => "요소"
// p.content: "Content" => "콘텐츠"
// p.navigationTitle: "Navigation title" => "탐색 제목"
// p.navigationDescription: "Navigation description" => "탐색 설명"
// p.longTap: "Long tap" => "길게 탭하기"
// p.autoGrow: "Auto grow" => "자동 성장"
// p.allowResize: "Allow resizing" => "크기 조정 허용"
// p.acceptCarriageReturn: "Accept carriage return" => "캐리지 리턴 수락"
// p.displayMode: "Display mode" => "디스플레이 모드"
// p.rateType: "Rate type" => "비율 유형"
// p.contentMode: "Content mode" => "콘텐츠 모드"
// p.imageFit: "Image fit" => "이미지 핏"
// p.altText: "Alt text" => "대체 텍스트"
// p.height: "Height" => "높이"
// p.penColor: "Pen color" => "펜 색상"
// p.backgroundColor: "Background color" => "배경색"
// p.templateElements: "Template elements" => "템플릿 요소"
// p.operator: "Operator" => "연산자"
// p.isVariable: "Is variable" => "가변적이다"
// p.runExpression: "Run expression" => "표현식 실행"
// p.showCaption: "Show caption" => "캡션 표시"
// p.iconName: "Icon name" => "아이콘 이름"
// p.iconSize: "Icon size" => "아이콘 크기"
// p.precision: "Precision" => "정밀"
// p.matrixDragHandleArea: "Matrix drag handle area" => "매트릭스 끌기 핸들 영역"
// p.backgroundImage: "Background image" => "배경 이미지"
// p.backgroundImageFit: "Background image fit" => "배경 이미지 맞춤"
// p.backgroundImageAttachment: "Background image attachment" => "배경 이미지 첨부"
// p.backgroundOpacity: "Background opacity" => "배경 불투명도"
// p.selectToRankEnabled: "Select to rank enabled" => "사용 가능한 순위를 선택하려면 선택합니다."
// p.selectToRankAreasLayout: "Select to rank areas layout" => "영역 레이아웃의 순위를 지정하려면 선택합니다."
// p.allowCameraAccess: "Allow camera access" => "카메라 액세스 허용"
// p.scaleColorMode: "Scale color mode" => "스케일 컬러 모드"
// p.rateColorMode: "Rate color mode" => "비율 색상 모드"
// p.templateTabTitle: "Template tab title" => "템플릿 탭 제목"
// p.templateVisibleIf: "Template visible if" => "다음과 같은 경우 템플릿이 표시됩니다."
// p.copyDisplayValue: "Copy display value" => "표시 값 복사"
// theme.--background: "Background color" => "배경색"
// theme.--background-dim-light: "Background dim light color" => "배경 희미한 밝은 색"
// theme.--primary-foreground: "Primary foreground color" => "기본 전경색"
// theme.--foreground: "Foreground color" => "전경색"
// theme.--base-unit: "Base unit" => "베이스 유닛"
// theme.groupGeneral: "General" => "일반"
// theme.groupAdvanced: "Advanced" => "고급"
// theme.themeName: "Theme" => "주제"
// theme.themeMode: "Question appearance" => "질문 모양"
// theme.themeModePanels: "Default" => "기본값"
// theme.themeModeLightweight: "Without Panels" => "패널 없음"
// theme.themePaletteLight: "Light" => "광"
// theme.themePaletteDark: "Dark" => "어둠"
// theme.primaryColor: "Accent color" => "강조 색상"
// theme.primaryDefaultColor: "Default" => "기본값"
// theme.primaryDarkColor: "Hover" => "호버"
// theme.primaryLightColor: "Selected" => "선택한"
// theme.backgroundDimColor: "Background color" => "배경색"
// theme.backgroundImage: "Background image" => "배경 이미지"
// theme.backgroundImageFitAuto: "Auto" => "자동"
// theme.backgroundImageFitCover: "Cover" => "표지"
// theme.backgroundImageFitContain: "Contain" => "포함하다"
// theme.backgroundOpacity: "Opacity" => "불투명도"
// theme.backgroundImageAttachmentFixed: "Fixed" => "부정하게 결정된"
// theme.backgroundImageAttachmentScroll: "Scroll" => "스크롤"
// theme.panelBackgroundTransparency: "Panel background opacity" => "패널 배경 불투명도"
// theme.questionBackgroundTransparency: "Question background opacity" => "질문 배경 불투명도"
// theme.questionPanel: "Panel background and corner radius" => "패널 배경 및 모서리 반경"
// theme.questionTitle: "Question title font" => "질문 제목 글꼴"
// theme.questionDescription: "Question description font" => "질문 설명 글꼴"
// theme.editorPanel: "Input element" => "입력 요소"
// theme.editorFont: "Input element font" => "입력 요소 글꼴"
// theme.backcolor: "Default background" => "기본 배경"
// theme.hovercolor: "Hover background" => "배경 가리키기"
// theme.borderDecoration: "Border decoration" => "테두리 장식"
// theme.accentBackground: "Accent background" => "악센트 배경"
// theme.accentForeground: "Accent foreground" => "악센트 전경"
// theme.primaryForecolor: "Default color" => "기본 색상"
// theme.primaryForecolorLight: "Disabled color" => "비활성화 된 색상"
// theme.linesColors: "Minor line colors" => "보조 선 색상"
// theme.borderDefault: "Darker" => "어두운"
// theme.borderLight: "Lighter" => "라이터"
// theme.fontFamily: "Font family" => "글꼴 패밀리"
// theme.fontSize: "Font size" => "글자 크기"
// theme.color: "Color" => "색"
// theme.size: "Size" => "크기"
// theme.fontWeightRegular: "Regular" => "일반"
// theme.fontWeightHeavy: "Heavy" => "무겁다"
// theme.fontWeightSemiBold: "Semi-bold" => "세미 굵게"
// theme.fontWeightBold: "Bold" => "대담한"
// theme.scale: "Scale" => "저울"
// theme.cornerRadius: "Corner radius" => "코너 반경"
// theme.surveyTitle: "Survey title font" => "설문조사 제목 글꼴"
// theme.pageTitle: "Page title font" => "페이지 제목 글꼴"
// theme.pageDescription: "Page description font" => "페이지 설명 글꼴"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "그림자 효과 추가"
// theme.opacity: "Opacity" => "불투명도"
// theme.boxShadowBlur: "Blur" => "흐리게"
// theme.boxShadowSpread: "Spread" => "전파"
// theme.boxShadowDrop: "Drop" => "방울"
// theme.boxShadowInner: "Inner" => "내부"
// theme.questionShadow: "Shadow effects" => "그림자 효과"
// theme.editorShadow: "Input element shadow effects" => "입력 요소 그림자 효과"
// names.default: "Default" => "기본값"
// names.contrast: "Contrast" => "대조"
// names.plain: "Plain" => "평야"
// names.simple: "Simple" => "간단한"
// names.blank: "Blank" => "빈"
// names.double: "Double" => "배"
// names.bulk: "Bulk" => "부피"
// names.pseudo-3d: "Pseudo 3D" => "유사 3D"
// names.playful: "Playful" => "장난이 심"
// names.ultra: "Ultra" => "울트라"
// colors.teal: "Teal" => "청록"
// colors.blue: "Blue" => "파랑"
// colors.purple: "Purple" => "보라색"
// colors.orchid: "Orchid" => "난초"
// colors.tulip: "Tulip" => "튤립"
// colors.brown: "Brown" => "갈색"
// colors.green: "Green" => "녹색"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// names.sharp: "Sharp" => "날카로운"
// names.borderless: "Borderless" => "국경"
// names.flat: "Flat" => "플랫"
// names.doubleborder: "Double Border" => "이중 테두리"
// names.layered: "Layered" => "계층"
// names.solid: "Solid" => "고체"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "이 언어에 대한 모든 문자열을 삭제하시겠습니까?"
// ed.themeResetButton: "Reset theme settings to default" => "테마 설정을 기본값으로 재설정"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// theme.placeholderColor: "Placeholder color" => "자리 표시자 색"
// ed.themeSettings: "Theme Settings" => "테마 설정"
// ed.themeSettingsTooltip: "Open theme settings" => "테마 설정 열기"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.resetToDefaultCaption: "Reset" => "재설정"
// pv.file: "Local files" => "로컬 파일"
// pv.camera: "Camera" => "사진기"
// pv.file-camera: "Local files or camera" => "로컬 파일 또는 카메라"
// lg.question_resetValue: "Reset question value" => "질문 값 재설정"
// lg.column_resetValue: "Reset column value" => "열 값 재설정"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.markRequired: "Mark as required" => "필요에 따라 표시"
// pe.removeRequiredMark: "Remove the required mark" => "필요한 표시를 제거하십시오"
// p.resetValueIf: "Reset value if" => "다음과 같은 경우 값을 재설정합니다."