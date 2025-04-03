import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "테스트 설문지",
    theme: "테마",
    translation: "번역",
    designer: "설문지 디자인",
    json: "JSON 편집기",
    logic: "논리학"
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
  toolboxCategories: {
    general: "일반",
    choice: "선택 질문",
    text: "텍스트 입력 질문",
    containers: "컨테이너",
    matrix: "행렬 질문",
    misc: "기타"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "기본값({0})",
    survey: "설문지",
    settings: "설정",
    settingsTooltip: "설정 열기",
    surveySettings: "설문조사 설정",
    surveySettingsTooltip: "설문조사 설정",
    themeSettings: "테마 설정",
    themeSettingsTooltip: "테마 설정",
    creatorSettingTitle: "크리에이터 설정",
    showPanel: "패널 표시",
    hidePanel: "패널 숨기기",
    prevSelected: "이전 선택",
    nextSelected: "다음을 선택합니다",
    prevFocus: "포커스 이전",
    nextFocus: "다음 초점",
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
    defaultV2Theme: "기본값",
    modernTheme: "현대의",
    defaultTheme: "기본값(레거시)",
    testSurveyAgain: "테스트 설문지 다시하기",
    testSurveyWidth: "설문지 너비: ",
    navigateToMsg: "다음으로 이동해야 했습니다.",
    saveSurvey: "설문지 저장",
    saveSurveyTooltip: "설문조사 저장",
    saveTheme: "테마 저장",
    saveThemeTooltip: "테마 저장",
    jsonHideErrors: "오류 숨기기",
    jsonShowErrors: "오류 표시",
    undo: "실행 취소",
    redo: "복원",
    undoTooltip: "마지막 변경 사항 실행 취소",
    redoTooltip: "변경 내용 다시 실행",
    expandTooltip: "넓히다",
    collapseTooltip: "무너지다",
    expandAllTooltip: "모두 확장",
    collapseAllTooltip: "모두 축소",
    zoomInTooltip: "확대",
    zoom100Tooltip: "100%로 확대/축소",
    zoomOutTooltip: "축소",
    lockQuestionsTooltip: "질문의 확장/축소 상태 잠금",
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
    toolboxFilteredTextPlaceholder: "검색하려면 입력...",
    toolboxNoResultsFound: "결과를 찾을 수 없습니다.",
    propertyGridFilteredTextPlaceholder: "검색하려면 입력...",
    propertyGridNoResultsFound: "결과를 찾을 수 없습니다.",
    propertyGridPlaceholderTitle: "양식 구성 시작",
    propertyGridPlaceholderDescription: "범주 아이콘을 클릭하여 설문조사 설정을 탐색합니다. 디자인 화면에 설문 조사 요소를 추가하면 추가 설정을 사용할 수 있게 됩니다.",
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
    addLanguageTooltip: "언어 추가",
    translationLanguages: "언어들",
    translationDeleteLanguage: "이 언어에 대한 모든 문자열을 삭제하시겠습니까?",
    translationAddLanguage: "번역할 언어 선택",
    translationShowAllStrings: "모든 문자열",
    translationShowUsedStringsOnly: "사용된 문자열만",
    translationShowAllPages: "모든 페이지",
    translationNoStrings: "번역할 문자열이 없습니다. 필터를 교체하십시오.",
    translationExportToSCVButton: "CSV로 내보내기",
    translationImportFromSCVButton: "CSV에서 가져오기",
    translateUsigAI: "모두 자동 번역",
    translateUsigAIFrom: "언어 선택(원문-번역): ",
    translationDialogTitle: "번역되지 않은 문자열",
    translationMergeLocaleWithDefault: "{0} 기본 로캘과 병합",
    translationPlaceHolder: "번역...",
    translationSource: "근원: ",
    translationTarget: "과녁: ",
    translationYouTubeNotSupported: "YouTube 링크는 지원되지 않습니다.",
    themeExportButton: "수출",
    themeImportButton: "수입",
    surveyJsonExportButton: "수출",
    surveyJsonImportButton: "수입",
    surveyJsonCopyButton: "클립보드에 복사",
    themeResetButton: "테마 설정을 기본값으로 재설정",
    themeResetConfirmation: "테마를 재설정 하시겠습니까? 모든 사용자 지정이 손실됩니다.",
    themeResetConfirmationOk: "예, 테마를 재설정합니다.",
    bold: "대담한",
    italic: "이탤릭체",
    underline: "밑줄",
    addNewQuestion: "질문 추가",
    selectPage: "페이지 선택...",
    carryForwardChoicesCopied: "선택 항목은 다음에서 복사됩니다.",
    choicesLoadedFromWebText: "선택 항목은 웹 서비스에서 로드됩니다.",
    choicesLoadedFromWebLinkText: "설정으로 바로 가기",
    choicesLoadedFromWebPreviewTitle: "로드된 선택 옵션 미리보기",
    htmlPlaceHolder: "HTML 콘텐츠가 여기에 있습니다.",
    panelPlaceHolder: "도구 상자에서 질문을 삭제하세요.",
    surveyPlaceHolder: "설문 조사가 비어 있습니다. 도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다.",
    pagePlaceHolder: "페이지가 비어 있습니다. 도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다.",
    imagePlaceHolder: "여기에 이미지를 끌어다 놓거나 아래 버튼을 클릭하고 업로드할 이미지를 선택하세요.",
    surveyPlaceHolderMobile: "아래의 \"질문 추가\" 버튼을 클릭하여 양식 작성을 시작하십시오.",
    surveyPlaceholderTitle: "양식이 비어 있습니다.",
    surveyPlaceholderTitleMobile: "양식이 비어 있습니다.",
    surveyPlaceholderDescription: "도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다.",
    surveyPlaceholderDescriptionMobile: "도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다.",
    previewPlaceholderTitle: "미리보기 없음",
    previewPlaceholderTitleMobile: "미리보기 없음",
    previewPlaceholderDescription: "설문조사에 가시적인 요소가 포함되어 있지 않습니다.",
    previewPlaceholderDescriptionMobile: "설문조사에 가시적인 요소가 포함되어 있지 않습니다.",
    translationsPlaceholderTitle: "번역할 문자열이 없습니다.",
    translationsPlaceholderTitleMobile: "번역할 문자열이 없습니다.",
    translationsPlaceholderDescription: "양식에 요소를 추가하거나 도구 모음에서 문자열 필터를 변경합니다.",
    translationsPlaceholderDescriptionMobile: "양식에 요소를 추가하거나 도구 모음에서 문자열 필터를 변경합니다.",
    pagePlaceHolderMobile: "아래의 \"질문 추가\" 버튼을 클릭하여 페이지에 새 요소를 추가하세요.",
    panelPlaceHolderMobile: "아래의 \"질문 추가\" 버튼을 클릭하여 패널에 새 요소를 추가합니다.",
    imagePlaceHolderMobile: "아래 버튼을 클릭하고 업로드할 이미지를 선택하세요.",
    imageChooseImage: "이미지 선택",
    addNewTypeQuestion: "{0} 추가", //{0} is localizable question type
    chooseLogoPlaceholder: "[로고]",
    choices_Item: "항목 ",
    selectFile: "파일 선택",
    removeFile: "파일 제거",
    lg: {
      addNewItem: "새 규칙 추가",
      empty_tab: "설문 조사의 흐름을 사용자 지정하는 규칙을 만듭니다.",
      logicPlaceholderTitle: "논리적 규칙 없음",
      logicPlaceholderTitleMobile: "논리적 규칙 없음",
      logicPlaceholderDescription: "설문조사의 흐름을 사용자 지정하는 규칙을 만듭니다.",
      logicPlaceholderDescriptionMobile: "설문조사의 흐름을 사용자 지정하는 규칙을 만듭니다.",
      page_visibilityName: "페이지 표시(숨기기)",
      page_enableName: "사용(사용 안 함) 페이지",
      page_requireName: "페이지를 필수로 설정",
      panel_visibilityName: "표시(숨기기) 패널",
      panel_enableName: "활성화(비활성화) 패널",
      panel_requireName: "페이지를 필수로 설정",
      question_visibilityName: "질문 표시(숨기기)",
      question_enableName: "사용(사용 안 함) 질문",
      question_requireName: "질문 필수 항목 만들기",
      question_resetValueName: "질문 값 재설정",
      question_setValueName: "질문 값 설정",
      column_visibilityName: "열 표시(숨기기)",
      column_enableName: "사용(사용 안 함) 열",
      column_requireName: "열을 필수로 설정",
      column_resetValueName: "열 값 재설정",
      column_setValueName: "열 값 설정",
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
      question_resetValueText: "질문에 대한 재설정 값: {0}", //{0} question name.
      question_setValueText: "할당 값: {1} 질문: {0}",
      column_visibilityText: "질문의 열 {0} {1} 표시", //{0} column name, {1} question name
      column_enableText: "질문의 열 {0} {1} 사용하도록 설정", //{0} column name, {1} question name
      column_requireText: "질문의 열 {0} {1} 필수", //{0} column name, {1} question name
      column_resetValueText: "열의 셀 값 재설정: {0}", //{0} column name
      column_setValueText: "셀 값 할당 : {1} 열 : {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " 결과가 대상 질문에 할당되는 식입니다.",
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
      uncompletedRule_cancel: "아니요, 규칙을 완료하고 싶습니다."
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "패널 이름",
      title: "패널 제목",
      description: "패널 설명",
      visibleIf: "다음과 같은 경우 패널을 표시합니다.",
      requiredIf: "다음과 같은 경우 패널을 필수로 만듭니다.",
      questionOrder: "패널 내의 질문 순서",
      page: "상위 페이지",
      startWithNewLine: "새 줄에 패널 표시",
      state: "패널 축소 상태",
      width: "인라인 패널 너비",
      minWidth: "최소 패널 너비",
      maxWidth: "최대 패널 너비",
      showNumber: "이 패널에 번호 매기기"
    },
    panellayoutcolumn: {
      effectiveWidth: "유효 폭, %",
      questionTitleWidth: "질문 제목 너비, px"
    },
    paneldynamic: {
      name: "패널 이름",
      title: "패널 제목",
      description: "패널 설명",
      visibleIf: "다음과 같은 경우 패널을 표시합니다.",
      requiredIf: "다음과 같은 경우 패널을 필수로 만듭니다.",
      page: "패널을 페이지로 이동",
      startWithNewLine: "새 줄에 패널 표시",
      state: "패널 축소 상태",
      width: "인라인 패널 너비",
      minWidth: "최소 패널 너비",
      maxWidth: "최대 패널 너비",
      confirmDelete: "패널 삭제 확인",
      templateDescription: "패널 설명 패턴",
      templateTitle: "패널 제목 패턴",
      noEntriesText: "빈 패널 텍스트",
      templateTabTitle: "탭 제목 패턴",
      tabTitlePlaceholder: "탭 제목 자리 표시자",
      templateVisibleIf: "다음과 같은 경우 개별 패널을 표시합니다.",
      showNumber: "패널 번호 매기기",
      titleLocation: "패널 제목 정렬",
      descriptionLocation: "패널 설명 정렬",
      templateQuestionTitleLocation: "질문 제목 정렬",
      templateQuestionTitleWidth: "질문 제목 너비",
      templateErrorLocation: "오류 메시지 맞춤",
      newPanelPosition: "새 패널 위치",
      showRangeInProgress: "진행률 표시줄 표시",
      keyName: "다음 질문에서 중복 응답 방지"
    },
    question: {
      name: "질문 이름",
      title: "질문 제목",
      description: "질문 설명",
      visibleIf: "다음과 같은 경우 질문을 표시합니다.",
      requiredIf: "다음과 같은 경우 질문을 필수로 만듭니다.",
      page: "상위 페이지",
      state: "질문 상자 축소 상태",
      showNumber: "이 질문에 번호를 매기십시오.",
      titleLocation: "질문 제목 정렬",
      descriptionLocation: "질문 설명 정렬",
      errorLocation: "오류 메시지 맞춤",
      indent: "내부 들여쓰기 늘리기",
      width: "인라인 질문 너비",
      minWidth: "최소 질문 너비",
      maxWidth: "최대 질문 너비",
      textUpdateMode: "입력 필드 값 업데이트"
    },
    signaturepad: {
      signatureWidth: "서명 영역 너비",
      signatureHeight: "서명 영역 높이",
      signatureAutoScaleEnabled: "서명 영역 자동 크기 조정",
      showPlaceholder: "자리 표시자 표시",
      placeholder: "자리 표시자 텍스트",
      placeholderReadOnly: "읽기 전용 또는 미리 보기 모드의 자리 표시자 텍스트",
      allowClear: "서명 영역 내에 지우기 단추 표시",
      penMinWidth: "최소 펜 너비",
      penMaxWidth: "최대 펜 너비",
      penColor: "획 색상"
    },
    comment: {
      rows: "입력 필드 높이(줄)"
    },
    showQuestionNumbers: "질문 번호 표시",
    questionStartIndex: "질문 시작 색인 (1, 2 또는 'A', 'a')",
    expression: {
      name: "표현식 이름",
      title: "표현식 제목",
      description: "표현식 설명",
      expression: "식"
    },
    trigger: {
      expression: "식"
    },
    calculatedvalue: {
      expression: "식"
    },
    // survey templates
    survey: {
      title: "타이틀",
      description: "설문조사 설명",
      readOnly: "설문조사를 읽기 전용으로 설정"
    },
    page: {
      name: "페이지 이름",
      title: "타이틀",
      description: "페이지 설명",
      visibleIf: "다음과 같은 경우 페이지를 표시합니다.",
      requiredIf: "다음과 같은 경우 페이지를 필수로 만듭니다.",
      timeLimit: "페이지 완료 시간 제한(초)",
      questionOrder: "페이지의 질문 순서"
    },
    matrixdropdowncolumn: {
      name: "열 이름",
      title: "열 제목",
      isUnique: "중복 응답 방지",
      width: "열 너비",
      minWidth: "최소 열 너비",
      rows: "입력 필드 높이(줄)",
      visibleIf: "다음과 같은 경우 열을 표시합니다.",
      requiredIf: "다음과 같은 경우 열을 필수로 만듭니다.",
      showInMultipleColumns: "별도의 열에 있는 각 옵션"
    },
    multipletextitem: {
      name: "이름",
      title: "타이틀"
    },
    masksettings: {
      saveMaskedValue: "설문조사 결과에 마스킹된 값 저장"
    },
    patternmask: {
      pattern: "값 패턴"
    },
    datetimemask: {
      min: "최솟값",
      max: "최대값"
    },
    numericmask: {
      allowNegativeValues: "음수 값 허용",
      thousandsSeparator: "1000 단위 구분 기호",
      decimalSeparator: "소수 구분 기호",
      precision: "값 정밀도",
      min: "최솟값",
      max: "최대값"
    },
    currencymask: {
      prefix: "통화 접두사",
      suffix: "통화 접미사"
    },
    imageHeight: "이미지 높이",
    imageWidth: "이미지 너비",
    valueName: "값 이름",
    defaultDisplayValue: "동적 텍스트에 대한 기본 표시 값",
    rateDescriptionLocation: "레이블 정렬",
    size: "입력 필드 너비(문자 단위)",
    cellErrorLocation: "셀 오류 메시지 맞춤",
    enabled: "사용",
    disabled: "비활성화",
    inherit: "물려받다",
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
    fastEntryChoicesMinCountError: "최소 {0} 항목을 입력하십시오.",
    fastEntryPlaceholder: "다음 형식으로 데이터를 설정할 수 있습니다.\nvalue1|텍스트\n값2",
    formEntry: "양식 입력",
    testService: "서비스 테스트",
    itemSelectorEmpty: "요소를 선택해 주세요",
    conditionActionEmpty: "작업을 선택하십시오.",
    conditionSelectQuestion: "질문 선택...",
    conditionSelectPage: "페이지 선택...",
    conditionSelectPanel: "패널 선택...",
    conditionValueQuestionTitle: "값을 입력하거나 선택하십시오.",
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
    "listIsEmpty@columns": "아직 열이 없습니다.",
    "listIsEmpty@gridLayoutColumns": "레이아웃 열이 아직 없습니다.",
    "listIsEmpty@rows": "아직 행이 없습니다.",
    "listIsEmpty@validators": "아직 유효성 검사 규칙이 없습니다.",
    "listIsEmpty@calculatedValues": "아직 맞춤 변수가 없습니다.",
    "listIsEmpty@triggers": "아직 트리거가 없습니다.",
    "listIsEmpty@navigateToUrlOnCondition": "아직 링크가 없습니다.",
    "listIsEmpty@pages": "아직 페이지가 없습니다.",
    "addNew@choices": "선택 항목 추가",
    "addNew@columns": "새 열 추가",
    "addNew@rows": "새 행 추가",
    "addNew@validators": "새 규칙 추가",
    "addNew@calculatedValues": "새 변수 추가",
    "addNew@triggers": "새 트리거 추가",
    "addNew@navigateToUrlOnCondition": "새 URL 추가",
    "addNew@pages": "새 페이지 추가",
    expressionIsEmpty: "식이 비어 있습니다.",
    value: "값",
    text: "텍스트",
    rowid: "행 ID",
    imageLink: "이미지 또는 동영상 URL",
    columnEdit: "열 편집: {0}",
    itemEdit: "항목 편집: {0}",
    url: "URL",
    path: "경로",
    choicesbyurl: {
      url: "웹 서비스의 URL",
      valueName: "다음 JSON 필드에서 값 가져오기"
    },
    titleName: "제목 이름",
    imageLinkName: "다음 JSON 필드에서 이미지 URL을 가져옵니다.",
    allowEmptyResponse: "빈 응답 허용",
    titlePlaceholder: "타이틀",
    surveyTitlePlaceholder: "설문조사 제목",
    pageTitlePlaceholder: "페이지 {num}",
    startPageTitlePlaceholder: "시작 페이지",
    descriptionPlaceholder: "묘사",
    surveyDescriptionPlaceholder: "묘사",
    pageDescriptionPlaceholder: "묘사",
    textWrapEnabled: "줄 바꿈 선택",
    showOtherItem: "다른 항목이 있습니다",
    otherText: "기타 항목 텍스트",
    showNoneItem: "없음 옵션 허용",
    showRefuseItem: "응답 거부 옵션 허용",
    showDontKnowItem: "모름 옵션 허용",
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
    allowCustomChoices: "사용자 지정 선택 허용",
    visible: "보입니까??",
    isRequired: "필수입니까?",
    markRequired: "필요에 따라 표시",
    removeRequiredMark: "필요한 표시를 제거하십시오",
    eachRowRequired: "모든 행에 대한 응답 필요",
    eachRowUnique: "행의 중복 응답 방지",
    requiredErrorText: "\"필수\" 오류 메시지",
    startWithNewLine: "새 줄로 시작하겠습니까?",
    rows: "행 수",
    cols: "열",
    placeholder: "입력 자리 표시자 ",
    showPreview: "이미지 미리보기가 표시됩니까?",
    storeDataAsText: "파일 내용을 JSON 결과에 텍스트로 저장",
    maxSize: "최대 파일 크기(bytes)",
    rowCount: "행 수",
    columnLayout: "열 위치",
    addRowButtonLocation: "행 버튼 위치 추가",
    transposeData: "행을 열로 바꾸기",
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
    clearInvisibleValues: "보이지 않는 값 지우기",
    cookieName: "쿠키 이름(로컬에서 설문 조사를 두 번 사용하지 않도록 설정)",
    partialSendEnabled: "다음 페이지에서 설문 조사 결과 보내기",
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
    navigationButtonsLocation: "탐색 단추 정렬",
    showPrevButton: "이전 버튼 표시 (사용자가 이전 페이지로 돌아갈 수 있음)",
    firstPageIsStartPage: "설문지의 첫 번째 페이지는 시작 페이지입니다",
    showCompletePage: "끝 부분에 완료된 페이지 표시 (완료된 HTML)",
    autoAdvanceEnabled: "모든 질문에 응답 후 자동으로 다음 페이지로 이동",
    autoAdvanceAllowComplete: "설문조사 자동 완성",
    showProgressBar: "진행률 막대 표시",
    progressBarLocation: "진행률 표시줄 맞춤",
    questionTitleLocation: "질문 제목 위치",
    questionTitleWidth: "질문 제목 너비",
    requiredMark: "질문에 필요한 기호",
    questionTitleTemplate: "질문 제목 템플릿입니다. 기본값: '{no}. {require} {title}'",
    questionErrorLocation: "질문 위치 오류",
    autoFocusFirstQuestion: "페이지 변경시 첫 번째 질문에 초점",
    questionOrder: "페이지의 요소 순서",
    timeLimit: "설문 조사를 마칠 수있는 최대 시간",
    timeLimitPerPage: "설문 조사에서 페이지를 마칠 수있는 최대 시간",
    showTimer: "타이머 사용",
    timerLocation: "타이머 패널 표시",
    timerInfoMode: "타이머 패널 모드 표시",
    renderMode: "렌더링 모드",
    allowAddPanel: "패널 추가 허용",
    allowRemovePanel: "패널 제거 허용",
    addPanelText: "패널 텍스트 추가",
    removePanelText: "패널 텍스트 삭제",
    isSinglePage: "한 페이지에 모든 요소 표시",
    html: "HTML 마크업",
    setValue: "대답",
    dataFormat: "이미지 형식",
    allowAddRows: "행 추가 허용",
    allowRemoveRows: "행 제거 허용",
    allowRowReorder: "행 끌어서 놓기 허용",
    responsiveImageSizeHelp: "정확한 이미지 너비 또는 높이를 지정하는 경우에는 적용되지 않습니다.",
    minImageWidth: "최소 이미지 너비",
    maxImageWidth: "최대 이미지 너비",
    minImageHeight: "최소 이미지 높이",
    maxImageHeight: "최대 이미지 높이",
    minValue: "최소값",
    maxValue: "최대값",
    caseInsensitive: "대소문자 구분 안 함",
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
    maxCommentLength: "최대 주석 길이(문자)",
    commentAreaRows: "주석 영역 높이(줄)",
    autoGrowComment: "필요한 경우 주석 영역 자동 확장",
    allowResizeComment: "사용자가 텍스트 영역의 크기를 조정할 수 있도록 허용",
    textUpdateMode: "텍스트 질문 값 업데이트",
    maskType: "입력 마스크 유형",
    autoFocusFirstError: "첫 번째 오답에 포커스 설정",
    checkErrorsMode: "유효성 검사 실행",
    validateVisitedEmptyFields: "초점이 손실된 빈 필드 유효성 검사",
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
    searchMode: "검색 모드",
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
    panelCount: "초기 패널 수",
    minPanelCount: "최소 패널 수",
    maxPanelCount: "최대 패널 수",
    panelsState: "내부 패널 확장 상태",
    prevPanelText: "이전 패널 단추 도구 설명",
    nextPanelText: "다음 패널 단추 도구 설명",
    removePanelButtonLocation: "패널 단추 위치 제거",
    hideIfRowsEmpty: "행이 없는 경우 질문 숨기기",
    hideColumnsIfEmpty: "행이 없는 경우 열 숨기기",
    rateValues: "사용자 지정 요금 값",
    rateCount: "비율 개수",
    autoGenerate: "비율 값을 지정하는 방법은 무엇입니까?",
    hideIfChoicesEmpty: "선택 항목이 없는 경우 질문 숨기기",
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
    logoWidth: "로고 너비(CSS에서 허용하는 값)",
    logoHeight: "로고 높이(CSS에서 허용하는 값)",
    readOnly: "읽기 전용",
    enableIf: "다음과 같은 경우 편집 가능",
    noRowsText: "'행 없음' 메시지",
    separateSpecialChoices: "별도의 특수 선택(없음, 기타, 모두 선택)",
    choicesFromQuestion: "다음 질문에서 선택 항목을 복사합니다.",
    choicesFromQuestionMode: "어떤 선택 항목을 복사해야 합니까?",
    choiceValuesFromQuestion: "다음 행렬 열 또는 패널 질문의 값을 선택 ID로 사용합니다.",
    choiceTextsFromQuestion: "다음 행렬 열 또는 패널 질문의 값을 선택 텍스트로 사용합니다.",
    progressBarShowPageTitles: "진행률 표시줄에 페이지 제목 표시",
    progressBarShowPageNumbers: "진행률 표시줄에 페이지 번호 표시",
    showCommentArea: "주석 영역 표시",
    commentPlaceholder: "주석 영역 자리 표시자",
    displayRateDescriptionsAsExtremeItems: "속도 설명을 극한 값으로 표시",
    rowOrder: "행 순서",
    columnsLayout: "열 레이아웃",
    columnColCount: "중첩된 열 개수",
    correctAnswer: "정답",
    defaultPanelValue: "기본값",
    cells: "셀 텍스트",
    fileInputPlaceholder: "파일 선택 또는 파일 링크 붙여넣기...",
    keyName: "키 열",
    itemvalue: {
      visibleIf: "다음과 같은 경우 옵션을 표시합니다.",
      enableIf: "다음과 같은 경우 옵션을 선택할 수 있도록 합니다."
    },
    "itemvalue@rows": {
      visibleIf: "다음과 같은 경우 행을 표시합니다.",
      enableIf: "다음과 같은 경우 행을 편집 가능하게 만듭니다."
    },
    imageitemvalue: {
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
    previewMode: "미리보기 모드",
    gridLayoutEnabled: "그리드 레이아웃 사용Enable the grid layout",
    gridLayoutColumns: "그리드 레이아웃 열",
    maskSettings: "마스크 설정",
    detailErrorLocation: "행 확장 오류 메시지 맞춤",
    // Creator tabs
    tabs: {
      panel: {
        layout: "패널 레이아웃"
      },
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
      mask: "입력 마스크 설정",
      layout: {
        panel: "레이아웃",
        question: "레이아웃",
        base: "레이아웃"
      },
      data: "데이터",
      validation: "유효성 검사",
      cells: "셀 텍스트",
      showOnCompleted: "설문조사 완료",
      logo: "설문조사 제목의 로고",
      slider: "슬라이더",
      expression: "식",
      questionSettings: "질문 설정",
      header: "머리글",
      background: "배경",
      appearance: "외관",
      accentColors: "강조 색상",
      surfaceBackground: "표면 배경",
      scaling: "스케일링",
      others: "다른"
    },
    editProperty: "편집 속성 '{0}'",
    items: "[ 항목: {0} ]",
    choicesVisibleIf: "다음과 같은 경우 선택 항목이 표시됩니다.",
    choicesEnableIf: "다음과 같은 경우 선택 항목을 선택할 수 있습니다.",
    columnsEnableIf: "다음과 같은 경우 열이 표시됩니다.",
    rowsEnableIf: "다음과 같은 경우 행이 표시됩니다.",
    innerIndent: "내부 들여쓰기 추가",
    copyDefaultValueFromLastEntry: "마지막 항목의 답변을 기본값으로 사용",
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
    verticalAlign: "수직 정렬",
    alternateRows: "대체 행",
    columnsVisibleIf: "다음과 같은 경우 열이 표시됩니다.",
    rowsVisibleIf: "다음과 같은 경우 행이 표시됩니다.",
    otherPlaceholder: "주석 영역 자리 표시자",
    filePlaceholder: "파일 자리 표시자 텍스트",
    photoPlaceholder: "사진 자리 표시자 텍스트",
    fileOrPhotoPlaceholder: "파일 또는 사진 자리 표시자 텍스트",
    rateType: "비율 유형",
    url_placeholder: "예: https://api.example.com/books",
    path_placeholder: "예: categories.fiction",
    questionStartIndex_placeholder: "예: a)",
    width_placeholder: "예: 6in",
    minWidth_placeholder: "예: 600px",
    maxWidth_placeholder: "예: 50%",
    imageHeight_placeholder: "자동",
    imageWidth_placeholder: "자동",
    itemTitleWidth_placeholder: "예: 100px",
    theme: {
      themeName: "주제",
      isPanelless: "질문 모양",
      editorPanel: "배경 및 모서리 반경",
      questionPanel: "배경 및 모서리 반경",
      primaryColor: "강조 색상",
      panelBackgroundTransparency: "패널 배경 불투명도",
      questionBackgroundTransparency: "질문 배경 불투명도",
      fontSize: "글꼴 크기",
      scale: "저울",
      cornerRadius: "코너 반경",
      advancedMode: "어드밴스드 모드",
      pageTitle: "제목 글꼴",
      pageDescription: "설명 글꼴",
      questionTitle: "제목 글꼴",
      questionDescription: "설명 글꼴",
      editorFont: "글꼴",
      backgroundOpacity: "불투명도",
      "--sjs-font-family": "글꼴 모음",
      "--sjs-general-backcolor-dim": "배경색",
      "--sjs-primary-backcolor": "강조 배경",
      "--sjs-primary-forecolor": "강조 전경",
      "--sjs-special-red": "오류 메시지",
      "--sjs-shadow-small": "그림자 효과",
      "--sjs-shadow-inner": "그림자 효과",
      "--sjs-border-default": "색상"
    },
    "header@header": {
      headerView: "보기",
      logoPosition: "로고 위치",
      surveyTitle: "설문조사 제목 글꼴",
      surveyDescription: "설문조사 설명 글꼴",
      headerTitle: "설문조사 제목 글꼴",
      headerDescription: "설문조사 설명 글꼴",
      inheritWidthFrom: "콘텐츠 영역 너비",
      textAreaWidth: "텍스트 너비",
      backgroundColorSwitch: "배경색",
      backgroundImage: "배경 이미지",
      backgroundImageOpacity: "불투명도",
      overlapEnabled: "겹침",
      logoPositionX: "로고 위치",
      titlePositionX: "제목 위치",
      descriptionPositionX: "설명 위치"
    }
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
    selected: "선택한",
    unselected: "하지 않은",
    decimal: "십진법",
    currency: "통화",
    percent: "퍼센트",
    firstExpanded: "우선 확장",
    off: "꺼짐",
    list: "목록",
    carousel: "회전목마",
    tab: "탭",
    progressTop: "상단 진행률",
    progressBottom: "하단 진행률",
    progressTopBottom: "상하단 진행률",
    horizontal: "가로",
    vertical: "세로",
    top: "위",
    bottom: "아래",
    topBottom: "위아래",
    both: "둘다",
    left: "왼쪽",
    right: "오른쪽",
    center: "중",
    leftRight: "왼쪽 및 오른쪽",
    middle: "중간",
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
    edit: "편집",
    display: "디스플레이",
    contain: "포함하다",
    cover: "표지",
    fill: "채우다",
    next: "다음",
    last: "지난",
    onComplete: "완료",
    onHidden: "숨김",
    onHiddenContainer: "질문 또는 해당 패널/페이지가 숨겨지는 경우",
    clearInvisibleValues: {
      none: "결코"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "성명",
      "honorific-prefix": "접두사",
      "given-name": "이름",
      "additional-name": "중간 이름",
      "family-name": "성",
      "honorific-suffix": "접미사",
      nickname: "별명",
      "organization-title": "직책",
      username: "사용자 이름",
      "new-password": "새 비밀번호",
      "current-password": "현재 비밀번호",
      organization: "조직 이름",
      "street-address": "전체 주소",
      "address-line1": "주소란 1",
      "address-line2": "주소란 2",
      "address-line3": "주소란 3",
      "address-level4": "레벨 4 주소",
      "address-level3": "레벨 3 주소",
      "address-level2": "레벨 2 주소",
      "address-level1": "레벨 1 주소",
      country: "국가 코드",
      "country-name": "국가 이름",
      "postal-code": "우편번호",
      "cc-name": "카드 소지자 이름",
      "cc-given-name": "카드 소지자 이름",
      "cc-additional-name": "카드 소지자 중간 이름",
      "cc-family-name": "카드 소지자의 성",
      "cc-number": "신용 카드 번호",
      "cc-exp": "만료 날짜",
      "cc-exp-month": "만료 월",
      "cc-exp-year": "만료 연도",
      "cc-csc": "카드 보안 코드",
      "cc-type": "신용 카드 유형",
      "transaction-currency": "거래 통화(Transaction Currency)",
      "transaction-amount": "거래 금액",
      language: "선호 언어",
      bday: "생일",
      "bday-day": "생일 날",
      "bday-month": "생일의 달",
      "bday-year": "생일 연도",
      sex: "성별",
      url: "웹 사이트 URL",
      photo: "프로필 사진",
      tel: "전화번호",
      "tel-country-code": "전화의 국가 코드",
      "tel-national": "국내 전화번호",
      "tel-area-code": "지역 번호",
      "tel-local": "현지 전화번호",
      "tel-local-prefix": "로컬 전화 접두사",
      "tel-local-suffix": "지역 전화 접미사",
      "tel-extension": "전화 내선 번호",
      email: "이메일 주소",
      impp: "인스턴트 메시징 프로토콜"
    },
    maskType: {
      none: "없음",
      pattern: "무늬",
      numeric: "숫자",
      datetime: "날짜 및 시간",
      currency: "통화"
    },
    inputTextAlignment: {
      auto: "자동",
      left: "왼쪽",
      right: "오른쪽"
    },
    all: "모두",
    page: "페이지",
    survey: "설문지",
    onNextPage: "다음 페이지로",
    onValueChanged: "값 변경",
    onValueChanging: "답변이 변경되기 전에",
    questionsOnPageMode: {
      standard: "원래 구조",
      singlePage: "모든 질문을 한 페이지에 표시",
      questionPerPage: "페이지당 단일 질문 표시"
    },
    noPreview: "미리보기 없음",
    showAllQuestions: "모든 질문 표시",
    showAnsweredQuestions: "답변된 질문만 표시",
    allQuestions: "모든 질문 보기",
    answeredQuestions: "답변된 질문만 표시",
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
    auto: "자동",
    showNavigationButtons: {
      none: "숨겨진"
    },
    timerInfoMode: {
      combined: "둘다"
    },
    addRowButtonLocation: {
      default: "행렬 레이아웃에 따라 다름"
    },
    panelsState: {
      default: "사용자는 패널을 확장하거나 축소할 수 없습니다.",
      collapsed: "모든 패널이 축소됩니다",
      expanded: "모든 패널이 확장됩니다.",
      firstExpanded: "첫 번째 확장"
    },
    widthMode: {
      static: "정적인",
      responsive: "반응"
    },
    contentMode: {
      image: "이미지",
      video: "비디오",
      youtube: "유튜브"
    },
    displayMode: {
      buttons: "단추",
      dropdown: "드롭다운(Dropdown)"
    },
    rateColorMode: {
      default: "기본값",
      scale: "저울"
    },
    scaleColorMode: {
      monochrome: "단색",
      colored: "유색"
    },
    autoGenerate: {
      "true": "창조하다",
      "false": "수동으로 입력"
    },
    rateType: {
      labels: "레이블",
      stars: "별",
      smileys: "스마일리"
    },
    state: {
      default: "잠긴"
    },
    showQuestionNumbers: {
      default: "자동 번호 매기기",
      on: "자동 번호 매기기",
      onPage: "각 페이지에서 재설정",
      onpanel: "각 패널에서 재설정",
      onPanel: "각 패널에서 재설정",
      recursive: "재귀 번호 매기기",
      onSurvey: "설문조사 계속하기",
      off: "번호 매기기 없음"
    },
    descriptionLocation: {
      underTitle: "질문 제목 아래",
      underInput: "입력 필드 아래"
    },
    selectToRankAreasLayout: {
      horizontal: "선택 항목 옆",
      vertical: "위의 선택 사항"
    },
    displayStyle: {
      decimal: "십진법",
      currency: "통화",
      percent: "백분율",
      date: "날짜"
    },
    totalDisplayStyle: {
      decimal: "십진법",
      currency: "통화",
      percent: "백분율",
      date: "날짜"
    },
    rowOrder: {
      initial: "원문 언어"
    },
    questionOrder: {
      initial: "원문 언어"
    },
    progressBarLocation: {
      top: "맨 위로",
      bottom: "밑바닥",
      topbottom: "위쪽 및 아래쪽",
      aboveheader: "헤더 위",
      belowheader: "헤더 아래",
      off: "숨겨진"
    },
    sum: "합계",
    count: "세다",
    min: "분",
    max: "최대",
    avg: "평균",
    searchMode: {
      contains: "포함",
      startsWith: "다음으로 시작"
    },
    backgroundImageFit: {
      auto: "자동",
      cover: "표지",
      contain: "포함하다",
      fill: "뻗다",
      tile: "타일"
    },
    backgroundImageAttachment: {
      fixed: "부정하게 결정된",
      scroll: "스크롤"
    },
    headerView: {
      basic: "기초의",
      advanced: "고급"
    },
    inheritWidthFrom: {
      survey: "설문 조사와 동일",
      container: "컨테이너에 맞추기"
    },
    backgroundColorSwitch: {
      none: "없음",
      accentColor: "강조 색상",
      custom: "관습"
    },
    colorPalette: {
      light: "광",
      dark: "어둠"
    },
    isPanelless: {
      "false": "기본값",
      "true": "패널 없음"
    },
    progressBarInheritWidthFrom: {
      survey: "설문 조사와 동일",
      container: "컨테이너와 동일"
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
  peplaceholder: {
    patternmask: {
      pattern: "예: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "예: mm/dd/yyyy"
    },
    currencymask: {
      prefix: "예: $",
      suffix: "예.: USD"
    },
    panelbase: {
      questionTitleWidth: "예: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "예: 30%",
      questionTitleWidth: "예: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "응답자에게 표시되지 않는 패널 ID입니다.",
      description: "패널 부제목을 입력합니다.",
      visibleIf: "마술 지팡이 아이콘을 사용하여 패널 가시성을 결정하는 조건부 규칙을 설정합니다.",
      enableIf: "마술 지팡이 아이콘을 사용하여 패널에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      requiredIf: "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다.",
      questionTitleLocation: "이 패널 내의 모든 질문에 적용됩니다. 이 설정을 재정의하려면 개별 질문에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      questionTitleWidth: "질문 제목이 질문 상자의 왼쪽에 정렬될 때 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      questionErrorLocation: "패널 내의 모든 질문과 관련된 오류 메시지의 위치를 설정합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정을 적용합니다.",
      questionOrder: "질문의 원래 순서를 유지하거나 무작위화합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정을 적용합니다.",
      page: "선택한 페이지의 끝으로 패널의 위치를 변경합니다.",
      innerIndent: "패널 내용과 패널 상자의 왼쪽 테두리 사이에 공백 또는 여백을 추가합니다.",
      startWithNewLine: "이전 질문 또는 패널과 함께 한 줄로 패널을 표시하려면 선택을 취소합니다. 패널이 양식의 첫 번째 요소인 경우에는 설정이 적용되지 않습니다.",
      state: "다음 중에서 선택: \"확장\" - 패널이 전체적으로 표시되며 축소할 수 있습니다. \"축소됨\" - 패널에 제목과 설명만 표시되며 확장할 수 있습니다. \"잠김\" - 패널이 완전히 표시되며 축소할 수 없습니다.",
      width: "패널의 폭을 같은 줄에 있는 다른 측량 요소에 비례하여 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      showQuestionNumbers: "이 패널 내에 중첩된 질문에 번호를 할당합니다.",
      effectiveColSpan: "이 패널이 그리드 레이아웃 내에서 확장되는 열의 수를 지정합니다.",
      gridLayoutColumns: "이 테이블에서는 패널 내의 각 그리드 열을 구성할 수 있습니다. 행의 최대 요소 수를 기준으로 각 열의 너비 백분율을 자동으로 설정합니다. 그리드 레이아웃을 사용자 지정하려면 이러한 값을 수동으로 조정하고 각 열의 모든 질문에 대한 제목 너비를 정의하십시오."
    },
    paneldynamic: {
      name: "응답자에게 표시되지 않는 패널 ID입니다.",
      description: "패널 부제목을 입력합니다.",
      visibleIf: "마술 지팡이 아이콘을 사용하여 패널 가시성을 결정하는 조건부 규칙을 설정합니다.",
      enableIf: "마술 지팡이 아이콘을 사용하여 패널에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      requiredIf: "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다.",
      templateQuestionTitleLocation: "이 패널 내의 모든 질문에 적용됩니다. 이 설정을 재정의하려면 개별 질문에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      templateQuestionTitleWidth: "질문 제목이 질문 상자의 왼쪽에 정렬될 때 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      templateErrorLocation: "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      errorLocation: "패널 내의 모든 질문과 관련된 오류 메시지의 위치를 설정합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정을 적용합니다.",
      page: "선택한 페이지의 끝으로 패널의 위치를 변경합니다.",
      innerIndent: "패널 내용과 패널 상자의 왼쪽 테두리 사이에 공백 또는 여백을 추가합니다.",
      startWithNewLine: "이전 질문 또는 패널과 함께 한 줄로 패널을 표시하려면 선택을 취소합니다. 패널이 양식의 첫 번째 요소인 경우에는 설정이 적용되지 않습니다.",
      state: "다음 중에서 선택: \"확장\" - 패널이 전체적으로 표시되며 축소할 수 있습니다. \"축소됨\" - 패널에 제목과 설명만 표시되며 확장할 수 있습니다. \"잠김\" - 패널이 완전히 표시되며 축소할 수 없습니다.",
      width: "패널의 폭을 같은 줄에 있는 다른 측량 요소에 비례하여 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      templateTitle: "동적 패널 제목에 대한 템플릿을 입력합니다. 패널의 일반 위치에는 {panelIndex}를 사용하고 표시되는 패널 간의 순서에는 {visiblePanelIndex}를 사용합니다. 이러한 자리 표시자를 패턴에 삽입하여 자동 번호 매기기를 추가합니다.",
      templateTabTitle: "탭 제목에 대한 템플릿을 입력합니다. 패널의 일반적인 위치에는 {panelIndex}를 사용하고 표시되는 패널 간의 순서에는 {visiblePanelIndex}를 사용합니다. 이러한 자리 표시자를 패턴에 삽입하여 자동 번호 매기기를 추가합니다.",
      tabTitlePlaceholder: "탭 제목 패턴이 의미 있는 값을 생성하지 않을 때 적용되는 탭 제목에 대한 대체 텍스트입니다.",
      templateVisibleIf: "이 설정을 사용하면 동적 패널 내에서 개별 패널의 가시성을 제어할 수 있습니다. '{panel}' 자리 표시자를 사용하여 표현식의 현재 패널을 참조합니다.",
      titleLocation: "이 설정은 이 패널 내의 모든 질문에 자동으로 상속됩니다. 이 설정을 재정의하려면 개별 질문에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      descriptionLocation: "\"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"패널 제목 아래\")을 적용합니다.",
      newPanelPosition: "새로 추가된 패널의 위치를 정의합니다. 기본적으로 새 패널이 끝에 추가됩니다. \"다음\"을 선택하여 현재 패널 뒤에 새 패널을 삽입합니다.",
      copyDefaultValueFromLastEntry: "마지막 패널의 답변을 복제하여 다음에 추가된 동적 패널에 할당합니다.",
      keyName: "사용자가 각 패널에서 이 질문에 대해 고유한 응답을 제공하도록 요구하려면 질문 이름을 참조합니다."
    },
    copyDefaultValueFromLastEntry: "마지막 행의 답변을 복제하여 다음에 추가된 동적 행에 할당합니다.",
    defaultValueExpression: "이 설정을 사용하면 표현식에 따라 기본 답안 값을 할당할 수 있습니다. 표현식에는 기본 계산('{q1_id} + {q2_id}'), 부울 표현식(예: '{age} > 60') 및 함수 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등이 포함될 수 있습니다. 이 표현식에 의해 결정된 값은 응답자의 수동 입력으로 재정의할 수 있는 초기 기본값으로 사용됩니다.",
    resetValueIf: "마술 지팡이 아이콘을 사용하여 응답자의 입력이 \"기본값 표현식\" 또는 \"설정 값 표현식\" 또는 \"기본 답변\" 값(둘 중 하나가 설정된 경우)에 기반한 값으로 재설정되는 시점을 결정하는 조건부 규칙을 설정합니다.",
    setValueIf: "마술 지팡이 아이콘을 사용하여 \"값 설정 표현식\"을 실행할 시기를 결정하는 조건부 규칙을 설정하고 결과 값을 응답으로 동적으로 할당합니다.",
    setValueExpression: "\"Set value if\" 규칙의 조건이 충족될 때 설정할 값을 정의하는 표현식을 지정합니다. 표현식에는 기본 계산('{q1_id} + {q2_id}'), 부울 표현식(예: '{age} > 60') 및 함수 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등이 포함될 수 있습니다. 이 표현식에 의해 결정된 값은 응답자의 수동 입력에 의해 재정의될 수 있습니다.",
    gridLayoutEnabled: "Survey Creator를 사용하면 양식 요소의 인라인 너비를 수동으로 조정하여 레이아웃을 제어할 수 있습니다. 이렇게 해도 원하는 결과가 나오지 않으면 열 기반 시스템을 사용하여 요소를 형성하는 구조체인 그리드 레이아웃을 활성화할 수 있습니다. 레이아웃 열을 구성하려면 페이지 또는 패널을 선택하고 \"질문 설정\" → \"그리드 열\" 테이블을 사용합니다. 질문의 열 수를 조정하려면 질문을 선택하고 \"레이아웃\" → \"열 범위\" 입력란에서 원하는 값을 설정합니다.",
    question: {
      name: "응답자에게 표시되지 않는 질문 ID입니다.",
      description: "질문 부제목을 입력합니다.",
      visibleIf: "마술 지팡이 아이콘을 사용하여 질문 가시성을 결정하는 조건부 규칙을 설정합니다.",
      enableIf: "마술 지팡이 아이콘을 사용하여 질문에 대한 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      requiredIf: "마술 지팡이 아이콘을 사용하여 질문에 대한 답변을 받지 않는 한 설문조사 진행 또는 제출을 금지하는 조건부 규칙을 설정합니다.",
      startWithNewLine: "질문을 이전 질문 또는 패널과 함께 한 줄로 표시하려면 선택을 취소합니다. 질문이 양식의 첫 번째 요소인 경우에는 설정이 적용되지 않습니다.",
      page: "선택한 페이지의 끝으로 질문의 위치를 변경합니다.",
      state: "다음 중에서 선택: \"확장\" - 질문 상자가 전체적으로 표시되며 축소할 수 있습니다. \"축소됨\" - 질문 상자에는 제목과 설명만 표시되며 확장할 수 있습니다. \"잠김\" - 질문 상자가 완전히 표시되며 축소할 수 없습니다.",
      titleLocation: "패널, 페이지 또는 설문조사 수준에 정의된 제목 정렬 규칙을 재정의합니다. \"상속\" 옵션은 더 높은 수준의 설정(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"맨 위\")을 적용합니다.",
      descriptionLocation: "\"상속\" 옵션은 현장조사 수준 설정(기본 설정에 따라 \"질문 제목 아래\")을 적용합니다.",
      errorLocation: "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      indent: "질문 콘텐츠와 질문 상자의 왼쪽 테두리 사이에 공백 또는 여백을 추가합니다.",
      width: "같은 줄에 있는 다른 설문조사 요소에 비례하여 질문의 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      surveyvalidator: {
        expression: "마술 지팡이 아이콘을 사용하여 질문에 대한 유효성 검사 규칙을 설정합니다."
      },
      textUpdateMode: "다음 중에서 선택: \"초점을 잃을 때\" - 입력 필드가 초점을 잃을 때 값이 업데이트됩니다. \"While typing\" - 사용자가 입력할 때 값이 실시간으로 업데이트됩니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"초점 손실 시\")을 적용합니다.",
      url: "모든 웹 서비스를 객관식 질문의 데이터 소스로 사용할 수 있습니다. 선택 항목 값을 채우려면 데이터를 제공하는 서비스의 URL을 입력합니다.",
      searchMode: "드롭다운 목록을 필터링하는 데 사용되는 비교 작업입니다.",
      textWrapEnabled: "선택 옵션의 긴 텍스트는 드롭다운 메뉴에 맞게 줄 바꿈을 자동으로 생성합니다. 텍스트를 자르려면 선택을 취소합니다.",
      effectiveColSpan: "이 질문이 그리드 레이아웃 내에서 얼마나 많은 열에 걸쳐 있는지 지정합니다."
    },
    signaturepad: {
      signatureWidth: "표시된 서명 영역과 결과 이미지의 너비를 설정합니다.",
      signatureHeight: "표시된 서명 영역과 결과 이미지의 높이를 설정합니다.",
      signatureAutoScaleEnabled: "기본 3:2 종횡비를 유지하면서 서명 영역이 질문 상자 내의 사용 가능한 모든 공간을 채우도록 하려면 선택합니다. 사용자 지정 너비 및 높이 값을 설정하면 설정은 이러한 치수의 가로 세로 비율을 유지합니다."
    },
    file: {
      imageHeight: "현장조사 결과에서 이미지의 높이를 조정합니다.",
      imageWidth: "현장조사 결과에서 이미지의 너비를 조정합니다.",
      allowImagesPreview: "가능한 경우 업로드된 파일에 대한 썸네일 미리보기를 표시합니다. 대신 파일 아이콘을 표시하려면 선택을 취소합니다."
    },
    image: {
      contentMode: "\"자동\" 옵션은 제공된 소스 URL을 기반으로 표시에 적합한 모드(이미지, 비디오 또는 YouTube)를 자동으로 결정합니다."
    },
    imagepicker: {
      imageHeight: "최소 및 최대 높이 값을 재정의합니다.",
      imageWidth: "최소 및 최대 너비 값을 재정의합니다.",
      choices: "\"Value\"는 조건부 규칙에 사용되는 항목 ID로 사용됩니다. 응답자에게 \"텍스트\"가 표시됩니다.",
      contentMode: "\"이미지\"와 \"비디오\" 중에서 선택하여 미디어 선택기의 콘텐츠 모드를 설정합니다. \"이미지\"를 선택한 경우 제공된 모든 옵션이 JPEG, GIF, PNG, APNG, SVG, BMP, ICO 형식의 이미지 파일인지 확인하십시오. 마찬가지로 \"비디오\"를 선택한 경우 모든 옵션이 MP4, MOV, WMV, FLV, AVI, MKV 형식의 비디오 파일에 대한 직접 링크인지 확인하십시오. YouTube 링크는 비디오 옵션에서 지원되지 않습니다."
    },
    text: {
      size: "이 설정은 입력 필드의 크기만 조정하며 질문 상자의 너비에는 영향을 주지 않습니다. 허용되는 입력 길이를 제한하려면 <b>유효성 검사 → 최대 문자 제한</b>으로 이동합니다."
    },
    comment: {
      rows: "입력 필드에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다."
    },
    // survey templates
    survey: {
      readOnly: "응답자가 설문조사를 작성하지 못하도록 하려면 선택합니다.",
      progressBarLocation: "진행률 표시줄의 위치를 설정합니다. \"자동\" 값은 설문조사 헤더 위 또는 아래에 진행률 표시줄을 표시합니다."
    },
    matrixdropdowncolumn: {
      name: "응답자에게 표시되지 않는 열 ID입니다.",
      isUnique: "열에 대해 활성화된 경우, 응답자는 이 열 내의 각 질문에 대해 고유한 응답을 제공해야 합니다.",
      rows: "입력 필드에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다.",
      visibleIf: "마술 지팡이 아이콘을 사용하여 열 표시 유형을 결정하는 조건부 규칙을 설정합니다.",
      enableIf: "마술 지팡이 아이콘을 사용하여 열에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      requiredIf: "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다.",
      showInMultipleColumns: "이 옵션을 선택하면 각 선택 옵션에 대한 개별 열이 만들어집니다.",
      colCount: "선택 옵션을 여러 열 레이아웃으로 정렬합니다. 0으로 설정하면 옵션이 한 줄로 표시됩니다. -1로 설정하면 실제 값이 부모 행렬의 \"중첩 열 수\" 속성에서 상속됩니다."
    },
    caseInsensitive: "정규식에서 대문자와 소문자를 동등하게 취급해야 하는 경우 선택합니다.",
    widthMode: "다음 중에서 선택합니다. \"정적\" - 고정 너비를 설정합니다. \"반응형\" - 설문조사가 화면의 전체 너비를 차지하도록 합니다. \"자동\" - 사용된 질문 유형에 따라 둘 중 하나를 적용합니다.",
    cookieName: "쿠키는 사용자가 동일한 설문조사를 두 번 작성하는 것을 방지합니다.",
    logo: "이미지 링크(크기 제한 없음)를 붙여넣거나 폴더 아이콘을 클릭하여 컴퓨터에서 파일을 찾습니다(최대 64KB).",
    logoWidth: "로고 너비를 CSS 단위(px, %, in, pt 등)로 설정합니다.",
    logoHeight: "로고 높이를 CSS 단위(px, %, in, pt 등)로 설정합니다.",
    logoFit: "다음 중에서 선택: \"없음\" - 이미지가 원래 크기를 유지합니다. \"Contain\" - 가로 세로 비율을 유지하면서 이미지의 크기가 조정됩니다. \"표지\" - 이미지가 종횡비를 유지하면서 전체 상자를 채웁니다. \"채우기\" - 가로 세로 비율을 유지하지 않고 상자를 채우기 위해 이미지가 늘어납니다.",
    autoAdvanceEnabled: "응답자가 현재 페이지의 모든 질문에 답변한 후 설문조사가 다음 페이지로 자동 진행되도록 하려면 선택합니다. 페이지의 마지막 질문이 서술형이거나 여러 답변을 허용하는 경우에는 이 기능이 적용되지 않습니다.",
    autoAdvanceAllowComplete: "응답자가 모든 질문에 답변한 후 설문조사가 자동으로 완료되도록 하려면 선택합니다.",
    showNavigationButtons: "페이지에서 탐색 단추의 표시 여부와 위치를 설정합니다.",
    navigationButtonsLocation: "페이지에서 탐색 단추의 위치를 설정합니다.",
    showPreviewBeforeComplete: "모든 질문 또는 답변된 질문만 있는 미리보기 페이지를 활성화합니다.",
    questionTitleLocation: "설문조사 내의 모든 질문에 적용됩니다. 이 설정은 하위 수준(패널, 페이지 또는 질문)의 제목 정렬 규칙으로 재정의할 수 있습니다. 낮은 수준의 설정은 더 높은 수준의 설정보다 우선합니다.",
    requiredMark: "답변이 필요함을 나타내는 기호 또는 일련의 기호입니다.",
    questionStartIndex: "번호 매기기를 시작할 숫자 또는 문자를 입력합니다.",
    questionErrorLocation: "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다.",
    autoFocusFirstQuestion: "각 페이지의 첫 번째 입력 필드를 텍스트 입력에 사용할 수 있도록 준비하려면 선택합니다.",
    questionOrder: "질문의 원래 순서를 유지하거나 무작위화합니다. 이 설정의 효과는 미리보기 탭에서만 볼 수 있습니다.",
    maxTextLength: "텍스트 입력 질문에만 해당됩니다.",
    maxCommentLength: "질문 댓글에만 해당됩니다.",
    commentAreaRows: "질문 주석에 대해 텍스트 영역에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다.",
    autoGrowComment: "질문 댓글과 긴 텍스트 질문의 높이가 입력한 텍스트 길이에 따라 자동으로 커지도록 하려면 선택합니다.",
    allowResizeComment: "질문 댓글 및 긴 텍스트 질문에만 해당됩니다.",
    calculatedValues: "사용자 지정 변수는 양식 계산에 사용되는 중간 또는 보조 변수 역할을 합니다. 응답자 입력을 소스 값으로 사용합니다. 각 맞춤 변수에는 고유한 이름과 기준이 되는 표현식이 있습니다.",
    includeIntoResult: "표현식의 계산된 값을 현장조사 결과와 함께 저장하려면 선택합니다.",
    triggers: "트리거는 표현식을 기반으로 하는 이벤트 또는 조건입니다. 표현식이 \"true\"로 평가되면 트리거가 작업을 시작합니다. 이러한 작업에는 선택적으로 영향을 미치는 대상 질문이 있을 수 있습니다.",
    clearInvisibleValues: "조건부 논리에 의해 숨겨진 질문의 값을 지울지 여부와 지울 시기를 선택합니다.",
    textUpdateMode: "다음 중에서 선택: \"초점을 잃을 때\" - 입력 필드가 초점을 잃을 때 값이 업데이트됩니다. \"While typing\" - 사용자가 입력할 때 값이 실시간으로 업데이트됩니다.",
    columns: "왼쪽 값은 조건부 규칙에 사용되는 열 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다.",
    rows: "왼쪽 값은 조건부 규칙에 사용되는 행 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다.",
    columnMinWidth: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    rowTitleWidth: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    totalText: "하나 이상의 열에 Total 유형 또는 Total 표현식이 있는 경우에만 표시됩니다.",
    cellErrorLocation: "잘못된 입력이 있는 셀과 관련하여 오류 메시지의 위치를 설정합니다. \"상속\" 옵션은 \"오류 메시지 맞춤\" 속성의 설정을 적용합니다.",
    detailErrorLocation: "세부 섹션에 중첩된 질문에 대한 오류 메시지의 위치를 설정합니다. \"Inherit\" 옵션은 \"Error message alignment\" 속성의 설정을 적용합니다.",
    keyDuplicationError: "\"중복 응답 방지\" 속성이 활성화된 경우, 중복 항목을 제출하려는 응답자는 다음과 같은 오류 메시지를 받게 됩니다.",
    totalExpression: "표현식을 기준으로 합계 값을 계산할 수 있습니다. 표현식에는 기본 계산('{q1_id} + {q2_id}'), 부울 표현식('{age} > 60') 및 함수('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등)이 포함될 수 있습니다.",
    confirmDelete: "행 삭제를 확인하라는 프롬프트를 트리거합니다.",
    keyName: "지정된 열에 동일한 값이 포함되어 있으면 현장조사에서 \"고유하지 않은 키 값\" 오류가 발생합니다.",
    description: "자막을 입력합니다.",
    locale: "설문조사 만들기를 시작할 언어를 선택합니다. 번역을 추가하려면 새 언어로 전환하고 여기 또는 번역 탭에서 원본 텍스트를 번역합니다.",
    detailPanelMode: "행을 기준으로 세부 정보 섹션의 위치를 설정합니다. 다음 중에서 선택: \"없음\" - 확장이 추가되지 않습니다. \"행 아래\" - 행 확장이 행렬의 각 행 아래에 배치됩니다. \"행 아래에 한 행 확장만 표시\" - 확장은 단일 행 아래에만 표시되고 나머지 행 확장은 축소됩니다.",
    imageFit: "다음 중에서 선택: \"없음\" - 이미지가 원래 크기를 유지합니다. \"Contain\" - 가로 세로 비율을 유지하면서 이미지의 크기가 조정됩니다. \"표지\" - 이미지가 종횡비를 유지하면서 전체 상자를 채웁니다. \"채우기\" - 가로 세로 비율을 유지하지 않고 상자를 채우기 위해 이미지가 늘어납니다.",
    autoGrow: "데이터가 입력될 때 입력 필드의 높이를 점진적으로 늘립니다. \"입력 필드 높이(줄 단위)\" 설정을 재정의합니다.",
    allowResize: "크기 조정 핸들(또는 그립)이 모서리에 나타나며 드래그하여 입력 필드의 크기를 변경할 수 있습니다.",
    timeLimit: "설문조사가 감사 인사 페이지로 자동 전환되기까지의 시간 간격(초)입니다.",
    timeLimitPerPage: "설문조사가 다음 페이지로 자동 넘어가는 시간 간격(초)입니다.",
    validateVisitedEmptyFields: "이 옵션을 사용하면 사용자가 빈 입력 필드에 집중한 다음 변경하지 않고 떠날 때 유효성 검사를 트리거합니다.",
    page: {
      name: "응답자에게 표시되지 않는 페이지 ID입니다.",
      description: "페이지 부제목을 입력합니다.",
      navigationTitle: "진행률 표시줄 또는 목차(TOC)의 탐색 단추에 표시되는 캡션입니다. 이 필드를 비워 두면 탐색 버튼에서 페이지 제목 또는 페이지 이름을 사용합니다. 진행률 표시줄 또는 TOC를 활성화하려면 \"설문 조사\" → \"탐색\"으로 이동합니다.",
      timeLimit: "설문조사가 다음 페이지로 자동 넘어가는 시간 간격(초)입니다.",
      visibleIf: "마술 지팡이 아이콘을 사용하여 페이지 표시 여부를 결정하는 조건부 규칙을 설정할 수 있습니다.",
      enableIf: "마술 지팡이 아이콘을 사용하여 페이지에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      requiredIf: "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다.",
      questionTitleLocation: "이 페이지 내의 모든 질문에 적용됩니다. 이 설정을 재정의하려면 개별 질문 또는 패널에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      questionTitleWidth: "질문 제목이 질문 상자의 왼쪽에 정렬될 때 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      questionErrorLocation: "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      questionOrder: "질문의 원래 순서를 유지하거나 무작위화합니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"원본\")을 적용합니다. 이 설정의 효과는 미리보기 탭에서만 볼 수 있습니다.",
      showNavigationButtons: "페이지에서 탐색 단추의 표시 여부를 설정합니다. \"상속\" 옵션은 설문조사 수준 설정을 적용하며, 기본값은 \"표시\"입니다.",
      gridLayoutColumns: "이 테이블을 사용하면 페이지의 각 그리드 열을 구성할 수 있습니다. 행의 최대 요소 수를 기준으로 각 열의 너비 백분율을 자동으로 설정합니다. 그리드 레이아웃을 사용자 지정하려면 이러한 값을 수동으로 조정하고 각 열의 모든 질문에 대한 제목 너비를 정의하십시오."
    },
    timerLocation: "페이지에서 타이머의 위치를 설정합니다.",
    panelsState: "다음 중에서 선택: \"잠김\" - 사용자가 패널을 확장하거나 축소할 수 없습니다. \"모두 축소\" - 모든 패널이 축소된 상태에서 시작됩니다. \"모두 확장\" - 모든 패널이 확장된 상태에서 시작됩니다. \"첫 번째 확장\" - 첫 번째 패널만 처음에 확장됩니다.",
    imageLinkName: "선택 목록에 표시할 이미지 또는 비디오 파일 URL이 포함된 객체 배열 내에 공유 속성 이름을 입력합니다.",
    choices: "왼쪽 값은 조건부 규칙에 사용되는 항목 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다.",
    title: "표시할 사용자에게 친숙한 제목을 입력합니다.",
    waitForUpload: "파일이 업로드될 때까지 사용자가 설문조사를 완료하지 않도록 합니다.",
    minWidth: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    maxWidth: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    width: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    valueName: "이 속성을 설정하지 않으면 대답이 Name 속성으로 지정된 필드에 저장됩니다.",
    defaultDisplayValue: "HTML 질문과 설문 요소의 동적 제목 및 설명에 표시되는 값으로, 질문 값이 비어 있을 때 표시됩니다.",
    useDisplayValuesInDynamicTexts: "단답형 및 다중선택 질문 유형에서 각 선택 옵션에는 ID와 표시 값이 있습니다. 이 설정을 선택하면 HTML 질문과 동적 제목 및 현장조사 요소에 대한 설명에서 ID 값 대신 표시 값이 표시됩니다.",
    clearIfInvisible: "조건부 논리에 의해 숨겨진 질문 값을 지울지 여부와 지울 시기를 선택합니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"설문조사 완료 시\")을 적용합니다.",
    choicesFromQuestionMode: "다음 중에서 선택: \"모두\" - 선택한 질문의 모든 선택 옵션을 복사합니다. \"선택됨\" - 선택한 선택 옵션만 동적으로 복사합니다. \"선택되지 않음\" - 선택되지 않은 선택 옵션만 동적으로 복사합니다. \"없음\" 및 \"기타\" 옵션은 원본 질문에서 활성화된 경우 기본적으로 복사됩니다.",
    choiceValuesFromQuestion: "단일 선택 및 다중 선택 질문 유형에서 각 선택 옵션에는 ID와 표시 값이 있습니다. 이 설정은 ID를 제공해야 하는 행렬 열 또는 패널 질문을 지정합니다.",
    choiceTextsFromQuestion: "단일 선택 및 다중 선택 질문 유형에서 각 선택 옵션에는 ID와 표시 값이 있습니다. 이 설정은 표시 텍스트를 제공해야 하는 행렬 열 또는 패널 질문을 지정합니다.",
    allowCustomChoices: "드롭다운에서 원하는 옵션을 사용할 수 없는 경우 응답자가 자신의 선택 항목을 추가할 수 있도록 하려면 선택합니다. 사용자 지정 선택 항목은 현재 브라우저 세션 동안 일시적으로만 저장됩니다.",
    showOtherItem: "이 옵션을 선택하면 사용자가 별도의 주석 상자에 추가 입력을 포함할 수 있습니다.",
    separateSpecialChoices: "각 특수 선택 옵션(\"없음\", \"기타\", \"모두 선택\")을 새 줄에 표시합니다(여러 열 레이아웃을 사용하는 경우에도 마찬가지임).",
    path: "서비스 데이터 세트 내에서 대상 객체 배열이 있는 위치를 지정합니다. URL이 이미 배열을 가리키는 경우 비워 둡니다.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "선택 목록에 표시할 값을 포함하는 객체 배열 내에 균일한 특성 이름을 입력합니다.",
    allowEmptyResponse: "서비스가 빈 응답 또는 배열을 반환하도록 허용하려면 선택합니다.",
    choicesVisibleIf: "마술 지팡이 아이콘을 사용하여 모든 선택 옵션의 표시 유형을 결정하는 조건부 규칙을 설정합니다.",
    rateValues: "왼쪽 값은 조건부 규칙에 사용되는 항목 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다.",
    rating: {
      displayMode: "\"자동\"은 사용 가능한 너비에 따라 \"버튼\"과 \"드롭다운\" 모드 중에서 선택합니다. 너비가 부족하여 버튼을 표시할 수 없는 경우 질문에 드롭다운이 표시됩니다."
    },
    valuePropertyName: "다양한 형식의 결과를 생성하는 질문을 연결할 수 있습니다. 이러한 질문이 조인 식별자를 사용하여 서로 연결되면 이 공유 속성은 선택한 질문 값을 저장합니다.",
    searchEnabled: "사용자가 입력 필드에 입력하는 검색어와 일치하도록 드롭다운 메뉴 내용을 업데이트하려면 선택합니다.",
    valueTrue: "응답자들이 긍정적인 답변을 할 때 설문조사 결과에 저장하는 값입니다.",
    valueFalse: "응답자들이 부정적인 답변을 할 때 설문조사 결과에 저장하는 값입니다.",
    showPreview: "이 옵션은 미리 보기 이미지를 재정의하고 사용자가 파일이 업로드되었는지 여부를 이해하기 어렵게 만들기 때문에 사용하지 않도록 설정하지 않는 것이 좋습니다.",
    needConfirmRemoveFile: "파일 삭제를 확인하는 프롬프트를 트리거합니다.",
    selectToRankEnabled: "선택한 선택 항목만 순위를 지정할 수 있습니다. 사용자는 선택 목록에서 선택한 항목을 끌어 순위 영역 내에서 정렬합니다.",
    dataList: "입력 시 응답자에게 제안될 선택 사항 목록을 입력합니다.",
    inputSize: "이 설정은 입력 필드의 크기만 조정하며 질문 상자의 너비에는 영향을 주지 않습니다.",
    itemTitleWidth: "모든 항목 레이블에 대해 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
    inputTextAlignment: "필드 내에서 입력 값을 정렬하는 방법을 선택합니다. 기본 설정인 \"Auto\"는 통화 또는 숫자 마스킹이 적용된 경우 입력 값을 오른쪽에 정렬하고 그렇지 않은 경우 왼쪽에 정렬합니다.",
    altText: "사용자의 장치에 이미지를 표시할 수 없는 경우 접근성을 위해 대신 사용할 수 있습니다.",
    rateColorMode: "등급 아이콘 유형이 \"스마일리\"로 설정된 경우 선택한 이모티콘의 색상을 정의합니다. 다음 중 하나를 선택합니다. \"기본값\" - 선택한 이모티콘이 기본 설문조사 색상으로 표시됩니다. \"척도\"-선택한 이모티콘은 등급 척도에서 색상을 상속합니다.",
    expression: {
      name: "응답자에게 표시되지 않는 표현식 ID입니다.",
      description: "표현식 부제목을 입력합니다.",
      expression: "표현식에는 기본 계산('{q1_id} + {q2_id}'), 조건('{age} > 60') 및 함수('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등)가 포함될 수 있습니다."
    },
    storeOthersAsComment: "\"기타\" 옵션 값을 측량 결과에 별도의 속성으로 저장하려면 선택합니다.",
    format: "{0} 실제 값의 자리 표시자로 사용합니다.",
    acceptedTypes: "자세한 내용은 [accept](https://www.w3schools.com/tags/att_input_accept.asp) 속성 설명을 참조하십시오.",
    columnColCount: "Radiogroup 및 Checkbox 셀 유형에만 적용할 수 있습니다.",
    autocomplete: "자세한 내용은 [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) 속성 설명을 참조하십시오.",
    filePlaceholder: "\"소스 유형\"이 \"로컬 파일\"이거나 카메라를 사용할 수 없는 경우에 적용됩니다.",
    photoPlaceholder: "\"소스 유형\"이 \"카메라\"인 경우에 적용됩니다.",
    fileOrPhotoPlaceholder: "\"소스 유형\"이 \"로컬 파일 또는 카메라\"인 경우에 적용됩니다.",
    colCount: "선택 옵션을 다중 열 레이아웃으로 정렬합니다. 0으로 설정하면 옵션이 한 줄로 표시됩니다.",
    masksettings: {
      saveMaskedValue: "마스크가 적용된 질문 값을 현장조사 결과에 저장하려면 선택합니다."
    },
    patternmask: {
      pattern: "패턴에는 문자열 리터럴과 다음 자리 표시자가 포함될 수 있습니다. '9' - 숫자의 경우; 'a' - 대문자 또는 소문자의 경우; '#' - 숫자 또는 대문자 또는 소문자의 경우. 백슬래시 '\\'를 사용하여 문자를 이스케이프합니다."
    },
    datetimemask: {
      pattern: "패턴에는 구분 기호와 다음 자리 표시자가 포함될 수 있습니다<br>.'m' - 월 번호입니다.<br>'mm' - 월 숫자 값으로, 한 자리 값의 경우 앞에 0이 옵니다. <br>'d' - 해당 월의 일. <br>'dd' - 한 자리 값의 경우 앞에 0이 오는 월의 일입니다. <br>'yy' - 연도의 마지막 두 자리 숫자입니다. <br>'yyyy' - 4자리 연도입니다. <br>'H' - 24시간 형식의 시간입니다. <br>'HH' - 24시간 형식의 시간으로, 한 자리 값의 경우 앞에 0이 옵니다. <br>'h' - 12시간 형식의 시간입니다. <br>'hh' - 12시간 형식의 시간으로, 한 자리 값의 경우 앞에 0이 옵니다. <br>'MM' - 분. <br>'ss' - 초. <br>'TT' - 대문자로 된 12시간제 기간(AM/PM)입니다. <br>'tt' - 소문자로 된 12시간제 기간(오전/오후)입니다."
    },
    numericmask: {
      decimalSeparator: "표시된 숫자의 정수 부분에서 소수 부분을 구분하는 데 사용되는 기호입니다.",
      thousandsSeparator: "큰 숫자의 숫자를 3개의 그룹으로 구분하는 데 사용되는 기호입니다.",
      precision: "표시된 숫자의 소수점 뒤에 유지할 자릿수를 제한합니다."
    },
    currencymask: {
      prefix: "값 앞에 표시할 하나 또는 여러 개의 기호입니다.",
      suffix: "값 뒤에 표시할 하나 또는 여러 개의 기호입니다."
    },
    theme: {
      isPanelless: "이 설정은 패널 외부의 질문에만 적용됩니다.",
      primaryColor: "주요 측량 요소를 강조하는 보조 색상을 설정합니다.",
      panelBackgroundTransparency: "설문조사 배경을 기준으로 패널과 질문 상자의 투명도를 조정합니다.",
      questionBackgroundTransparency: "현장조사 배경에 상대적인 입력 요소의 투명도를 조정합니다.",
      cornerRadius: "모든 직사각형 요소의 구석 반지름을 설정합니다. Advanced Mode(고급 모드)를 활성화하면 입력 요소 또는 패널 및 질문 상자에 대한 개별 모서리 반경 값을 설정할 수 있습니다.",
      "--sjs-general-backcolor-dim": "현장조사의 기본 배경색을 설정합니다."
    },
    header: {
      inheritWidthFrom: "\"컨테이너와 동일\" 옵션은 설문조사가 배치된 HTML 요소에 맞게 헤더 콘텐츠 영역 너비를 자동으로 조정합니다.",
      textAreaWidth: "설문조사 제목과 설명이 포함된 헤더 영역의 너비로, 픽셀 단위로 측정됩니다.",
      overlapEnabled: "활성화하면 설문조사의 상단이 헤더의 하단에 오버레이됩니다.",
      mobileHeight: "0으로 설정하면 헤더의 내용을 수용하기 위해 높이가 자동으로 계산됩니다."
    },
    progressBarInheritWidthFrom: "\"컨테이너와 동일\" 옵션은 설문조사가 배치된 HTML 요소에 맞게 진행률 표시줄 영역 너비를 자동으로 조정합니다."
  },
  // Properties
  p: {
    title: {
      name: "제목",
      title: "'이름'과 같은 경우 비워 둡니다."
    },
    multiSelect: "다중 선택 허용",
    showLabel: "이미지 캡션 표시",
    swapOrder: "예와 아니요의 순서를 바꿉니다.",
    value: "값",
    tabAlign: "탭 정렬",
    sourceType: "소스 유형",
    fitToContainer: "컨테이너에 맞추기",
    setValueExpression: "설정 값 표현식",
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
    defaultValueExpression: "기본값 표현식",
    requiredIf: "다음과 같은 경우 필수입니다.",
    resetValueIf: "다음과 같은 경우 값을 재설정합니다.",
    setValueIf: "다음과 같은 경우 값을 설정합니다.",
    validators: "유효성 검사기",
    bindings: "바인딩",
    renderAs: "렌더링 형식",
    attachOriginalItems: "원본 항목 첨부",
    choices: "선택",
    choicesByUrl: "URL을 통한 선택",
    currency: "화폐",
    cellHint: "셀 힌트",
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
    inputSize: "항목 크기",
    itemTitleWidth: "항목 레이블 너비(px)",
    inputTextAlignment: "입력 값 정렬",
    elements: "요소",
    content: "콘텐츠",
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
    mobileHeight: "스마트폰의 높이",
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
    selectToRankEmptyRankedAreaText: "모든 옵션이 선택된 경우 표시할 텍스트",
    selectToRankEmptyUnrankedAreaText: "순위 영역의 자리 표시자 텍스트",
    allowCameraAccess: "카메라 액세스 허용",
    scaleColorMode: "스케일 컬러 모드",
    rateColorMode: "비율 색상 모드",
    copyDisplayValue: "표시 값 복사",
    effectiveColSpan: "열 범위",
    progressBarInheritWidthFrom: "진행률 표시줄 영역 너비"
  },
  theme: {
    advancedMode: "어드밴스드 모드",
    pageTitle: "페이지 제목 글꼴",
    questionTitle: "질문 제목 글꼴",
    editorPanel: "입력 요소",
    lines: "라인",
    primaryDefaultColor: "기본값",
    primaryDarkColor: "호버",
    primaryLightColor: "선택한",
    backgroundDimColor: "배경색",
    cornerRadius: "코너 반경",
    backcolor: "기본 배경",
    hovercolor: "배경 가리키기",
    borderDecoration: "테두리 장식",
    fontColor: "글꼴 색상",
    backgroundColor: "배경색",
    primaryForecolor: "기본 색상",
    primaryForecolorLight: "비활성화 된 색상",
    font: "글꼴",
    borderDefault: "어두운",
    borderLight: "라이터",
    fontFamily: "글꼴 모음",
    fontWeightRegular: "일반",
    fontWeightHeavy: "무겁다",
    fontWeightSemiBold: "세미 볼드(Semi-bold)",
    fontWeightBold: "대담한",
    color: "색",
    placeholderColor: "자리 표시자 색",
    size: "크기",
    opacity: "불투명도",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "그림자 효과 추가",
    boxShadowBlur: "흐리게",
    boxShadowSpread: "전파",
    boxShadowDrop: "방울",
    boxShadowInner: "내부",
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
      green: "녹색",
      gray: "회색"
    }
  },
  creatortheme: {
    "--sjs-special-background": "표면 배경",
    "--sjs-primary-background-500": "본래의",
    "--sjs-secondary-background-500": "보조",
    surfaceScale: "표면",
    userInterfaceBaseUnit: "사용자 인터페이스",
    fontScale: "글꼴",
    names: {
      sc2020: "설문조사 작성기 2020",
      "default-light": "광",
      "default-dark": "어둠",
      "default-contrast": "대조"
    }
  }
};
setupLocale({ localeCode: "ko", strings: koreanStrings });

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
// pe.eachRowRequired: "Require answer for all rows" => "모든 행에 대한 응답 필요"
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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "페이지 완료 시간 제한(초)"
// question.page: "Parent page" => "상위 페이지"
// pe.noEntriesText: "Empty entries text" => "빈 항목 텍스트"
// pe.html: "HTML markup" => "HTML 마크업"
// pe.expression: "Expression" => "식"
// pe.setValue: "Answer" => "대답"
// pe.dataFormat: "Image format" => "이미지 형식"
// pe.allowAddRows: "Allow adding rows" => "행 추가 허용"
// pe.allowRemoveRows: "Allow removing rows" => "행 제거 허용"
// pe.allowRowReorder: "Allow row drag and drop" => "행 끌어서 놓기 허용"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "최대 주석 길이(문자)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "필요한 경우 주석 영역 자동 확장"
// pe.allowResizeComment: "Allow users to resize text areas" => "사용자가 텍스트 영역의 크기를 조정할 수 있도록 허용"
// pe.textUpdateMode: "Update text question value" => "텍스트 질문 값 업데이트"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "첫 번째 오답에 포커스 설정"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "이전 패널 단추 도구 설명"
// pe.nextPanelText: "Next Panel button tooltip" => "다음 패널 단추 도구 설명"
// pe.showRangeInProgress: "Show progress bar" => "진행률 표시줄 표시"
// pe.templateQuestionTitleLocation: "Question title location" => "질문 제목 위치"
// pe.removePanelButtonLocation: "Remove Panel button location" => "패널 단추 위치 제거"
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
// pe.showNumber: "Show panel number" => "패널 번호 표시"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "로고 너비(CSS에서 허용하는 값)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "로고 높이(CSS에서 허용하는 값)"
// pe.readOnly: "Read-only" => "읽기 전용"
// pe.enableIf: "Editable if" => "다음과 같은 경우 편집 가능"
// pe.noRowsText: "\"No rows\" message" => "'행 없음' 메시지"
// pe.size: "Input field size (in characters)" => "입력 필드 크기(문자)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "별도의 특수 선택(없음, 기타, 모두 선택)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "다음 질문에서 선택 항목을 복사합니다."
// pe.choicesFromQuestionMode: "Which choices to copy?" => "어떤 선택 항목을 복사해야 합니까?"
// pe.showCommentArea: "Show the comment area" => "주석 영역 표시"
// pe.commentPlaceholder: "Comment area placeholder" => "주석 영역 자리 표시자"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "속도 설명을 극한 값으로 표시"
// pe.rowOrder: "Row order" => "행 순서"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "행렬 레이아웃에 따라 다름"
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
// theme.groupAdvanced: "Advanced" => "고급"
// theme.themeName: "Theme" => "주제"
// theme.isPanellessss: "Question appearance" => "질문 모양"
// theme.isPanellessPanels: "Default" => "기본값"
// theme.isPanellessLightweight: "Without Panels" => "패널 없음"
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
// theme.surveyTitleFont: "Survey title font" => "설문조사 제목 글꼴"
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
// names.sharp: "Sharp" => "날카로운"
// names.borderless: "Borderless" => "국경"
// names.flat: "Flat" => "플랫"
// names.doubleborder: "Double Border" => "이중 테두리"
// names.layered: "Layered" => "계층"
// names.solid: "Solid" => "고체"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "이 언어에 대한 모든 문자열을 삭제하시겠습니까?"
// ed.themeResetButton: "Reset theme settings to default" => "테마 설정을 기본값으로 재설정"
// theme.placeholderColor: "Placeholder color" => "자리 표시자 색"
// ed.themeSettings: "Theme Settings" => "테마 설정"
// ed.themeSettingsTooltip: "Open theme settings" => "테마 설정 열기"
// pe.resetToDefaultCaption: "Reset" => "재설정"
// pv.file: "Local files" => "로컬 파일"
// pv.camera: "Camera" => "사진기"
// pv.file-camera: "Local files or camera" => "로컬 파일 또는 카메라"
// ed.translateUsigAI: "Auto-translate All" => "모두 자동 번역"
// ed.translationDialogTitle: "Untranslated strings" => "번역되지 않은 문자열"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "최소 {0} 항목을 입력하십시오."
// lg.question_resetValueName: "Reset question value" => "질문 값 재설정"
// lg.column_resetValue: "Reset column value" => "열 값 재설정"
// pe.markRequired: "Mark as required" => "필요에 따라 표시"
// pe.removeRequiredMark: "Remove the required mark" => "필요한 표시를 제거하십시오"
// p.resetValueIf: "Reset value if" => "다음과 같은 경우 값을 재설정합니다."

// lg.question_setValueName: "Set question value" => "질문 값 설정"
// lg.column_resetValueName: "Reset column value" => "열 값 재설정"
// lg.column_setValueName: "Set column value" => "열 값 설정"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " 결과가 대상 질문에 할당되는 식입니다."
// survey.title: "Title" => "타이틀"
// page.title: "Title" => "타이틀"
// p.setValueIf: "Set value if" => "다음과 같은 경우 값을 설정합니다."
// theme.header: "Header" => "머리글"
// theme.backgroundImageFitFill: "Stretch" => "뻗다"
// theme.backgroundImageFitTile: "Tile" => "타일"
// theme.headerView: "View" => "보기"
// theme.headerViewBasic: "Basic" => "기초의"
// theme.headerViewAdvanced: "Advanced" => "고급"
// theme.headerInheritWidthFrom: "Content area width" => "콘텐츠 영역 너비"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "설문조사와 동일"
// theme.headerInheritWidthFromPage: "Fit to page" => "페이지에 맞추기"
// theme.headerTextAreaWidth: "Text width" => "텍스트 너비"
// theme.headerBackgroundColorSwitch: "Background color" => "배경색"
// theme.headerBackgroundColorNone: "None" => "없음"
// theme.headerBackgroundColorAccentColor: "Accent color" => "강조 색상"
// theme.headerBackgroundColorCustom: "Custom" => "관습"
// theme.horizontalAlignmentLeft: "Left" => "왼쪽"
// theme.horizontalAlignmentCenter: "Center" => "중"
// theme.horizontalAlignmentRight: "Right" => "오른쪽"
// theme.verticalAlignmentTop: "Top" => "맨 위로"
// theme.verticalAlignmentMiddle: "Middle" => "중간"
// theme.verticalAlignmentBottom: "Bottom" => "밑바닥"
// theme.logoPosition: "Logo Position" => "로고 위치"
// theme.headerTitlePosition: "Title Position" => "타이틀 포지션"
// theme.headerDescriptionPosition: "Description Position" => "설명 위치"
// lg.question_resetValueText: "reset value for question: {0}" => "질문에 대한 재설정 값: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "할당 값: {1} 질문: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "열의 셀 값 재설정: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "셀 값 할당 : {1} 열 : {0}"
// ed.surveyJsonExportButton: "Export" => "수출"
// ed.surveyJsonImportButton: "Import" => "수입"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "클립보드에 복사"
// pe.filePlaceholder: "File placeholder text" => "파일 자리 표시자 텍스트"
// pe.photoPlaceholder: "Photo placeholder text" => "사진 자리 표시자 텍스트"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "파일 또는 사진 자리 표시자 텍스트"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "\"소스 유형\"이 \"로컬 파일\"이거나 카메라를 사용할 수 없는 경우에 적용됩니다."
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "\"소스 유형\"이 \"카메라\"인 경우에 적용됩니다."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "\"소스 유형\"이 \"로컬 파일 또는 카메라\"인 경우에 적용됩니다."
// theme.background: "Background" => "배경"
// theme.appearance: "Appearance" => "외관"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "테마를 재설정 하시겠습니까? 모든 사용자 지정이 손실됩니다."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "예, 테마를 재설정합니다."
// theme.headerInheritWidthFromContainer: "Fit to container" => "콘테이너에 적합"
// signaturepad.showPlaceholder: "Show the placeholder" => "자리 표시자 표시"
// signaturepad.placeholder: "Placeholder text" => "자리 표시자 텍스트"
// theme.surveyDescriptionFont: "Survey description font" => "설문조사 설명 글꼴"
// ed.prevFocus: "Focus previous" => "포커스 이전"
// ed.nextFocus: "Focus next" => "다음 초점"
// ed.saveTheme: "Save Theme" => "테마 저장"
// ed.saveThemeTooltip: "Save Theme" => "테마 저장"
// lg.page_requireName: "Make page required" => "페이지를 필수로 설정"
// lg.panel_requireName: "Make page required" => "페이지를 필수로 설정"
// signaturepad.signatureWidth: "Signature area width" => "서명 영역 너비"
// signaturepad.signatureHeight: "Signature area height" => "서명 영역 높이"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "서명 영역 자동 크기 조정"
// signaturepad.penMinWidth: "Minimum pen width" => "최소 펜 너비"
// signaturepad.penMaxWidth: "Maximum pen width" => "최대 펜 너비"
// ed.propertyGridNoResultsFound: "No results found" => "결과를 찾을 수 없습니다."
// pv.leftRight: "Left and right" => "왼쪽 및 오른쪽"
// p.sourceType: "Source type" => "소스 유형"
// p.fitToContainer: "Fit to container" => "컨테이너에 맞추기"
// p.setValueExpression: "Set value expression" => "설정 값 표현식"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "선택 항목은 웹 서비스에서 로드됩니다."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "설정으로 바로 가기"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "로드된 선택 옵션 미리보기"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "행의 중복 응답 방지"
// theme.advancedMode: "Advanced mode" => "어드밴스드 모드"
// theme.backgroundCornerRadius: "Background and corner radius" => "배경 및 모서리 반경"
// theme.colorsTitle: "Colors" => "색상"
// theme.font: "Font" => "글꼴"
// theme.lines: "Lines" => "라인"
// theme.titleFont: "Title font" => "제목 글꼴"
// theme.descriptionFont: "Description font" => "설명 글꼴"
// theme.shadow: "Shadow effects" => "그림자 효과"
// ed.translateUsigAIFrom: "Translate from: " => "언어 선택(원문-번역): "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "응답 거부 옵션 허용"
// pe.showDontKnowItem: "Allow the Don't Know option" => "모름 옵션 허용"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "응답 거부 옵션 허용"
// pe.showDontKnowItem: "Allow the Don't Know option" => "모름 옵션 허용"
// pv.contain: "Contain" => "포함하다"
// pv.cover: "Cover" => "표지"
// pv.fill: "Fill" => "채우다"

// pe.transposeData: "Transpose rows to columns" => "행을 열로 바꾸기"
// layout.panel: "Layout" => "레이아웃"
// layout.question: "Layout" => "레이아웃"
// layout.base: "Layout" => "레이아웃"
// panel.name: "Panel name" => "패널 이름"
// panel.title: "Panel title" => "패널 제목"
// panel.description: "Panel description" => "패널 설명"
// panel.visibleIf: "Make the panel visible if" => "다음과 같은 경우 패널을 표시합니다."
// panel.requiredIf: "Make the panel required if" => "다음과 같은 경우 패널을 필수로 만듭니다."
// panel.questionOrder: "Question order within the panel" => "패널 내의 질문 순서"
// panel.startWithNewLine: "Display the panel on a new line" => "새 줄에 패널 표시"
// panel.state: "Panel collapse state" => "패널 축소 상태"
// panel.width: "Inline panel width" => "인라인 패널 너비"
// panel.minWidth: "Minimum panel width" => "최소 패널 너비"
// panel.maxWidth: "Maximum panel width" => "최대 패널 너비"
// paneldynamic.name: "Panel name" => "패널 이름"
// paneldynamic.title: "Panel title" => "패널 제목"
// paneldynamic.description: "Panel description" => "패널 설명"
// paneldynamic.visibleIf: "Make the panel visible if" => "다음과 같은 경우 패널을 표시합니다."
// paneldynamic.requiredIf: "Make the panel required if" => "다음과 같은 경우 패널을 필수로 만듭니다."
// paneldynamic.page: "Move the panel to page" => "패널을 페이지로 이동"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "새 줄에 패널 표시"
// paneldynamic.state: "Panel collapse state" => "패널 축소 상태"
// paneldynamic.width: "Inline panel width" => "인라인 패널 너비"
// paneldynamic.minWidth: "Minimum panel width" => "최소 패널 너비"
// paneldynamic.maxWidth: "Maximum panel width" => "최대 패널 너비"
// paneldynamic.templateDescription: "Panel description pattern" => "패널 설명 패턴"
// paneldynamic.templateTitle: "Panel title pattern" => "패널 제목 패턴"
// paneldynamic.noEntriesText: "Empty panel text" => "빈 패널 텍스트"
// paneldynamic.templateTabTitle: "Tab title pattern" => "탭 제목 패턴"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "다음과 같은 경우 개별 패널을 표시합니다."
// paneldynamic.hideNumber: "Hide the panel number" => "패널 번호 숨기기"
// paneldynamic.titleLocation: "Panel title alignment" => "패널 제목 정렬"
// paneldynamic.descriptionLocation: "Panel description alignment" => "패널 설명 정렬"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "질문 제목 정렬"
// paneldynamic.templateErrorLocation: "Error message alignment" => "오류 메시지 맞춤"
// paneldynamic.newPanelPosition: "New panel location" => "새 패널 위치"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "다음 질문에서 중복 응답 방지"
// question.name: "Question name" => "질문 이름"
// question.title: "Question title" => "질문 제목"
// question.description: "Question description" => "질문 설명"
// question.visibleIf: "Make the question visible if" => "다음과 같은 경우 질문을 표시합니다."
// question.requiredIf: "Make the question required if" => "다음과 같은 경우 질문을 필수로 만듭니다."
// question.state: "Question box collapse state" => "질문 상자 축소 상태"
// question.hideNumber: "Hide the question number" => "질문 번호 숨기기"
// question.titleLocation: "Question title alignment" => "질문 제목 정렬"
// question.descriptionLocation: "Question description alignment" => "질문 설명 정렬"
// question.errorLocation: "Error message alignment" => "오류 메시지 맞춤"
// question.indent: "Increase the inner indent" => "내부 들여쓰기 늘리기"
// question.width: "Inline question width" => "인라인 질문 너비"
// question.minWidth: "Minimum question width" => "최소 질문 너비"
// question.maxWidth: "Maximum question width" => "최대 질문 너비"
// question.textUpdateMode: "Update input field value" => "입력 필드 값 업데이트"
// signaturepad.allowClear: "Show the Clear button within signature area" => "서명 영역 내에 지우기 단추 표시"
// signaturepad.penColor: "Stroke color" => "획 색상"
// comment.rows: "Input field height (in lines)" => "입력 필드 높이(줄)"
// expression.name: "Expression name" => "표현식 이름"
// expression.title: "Expression title" => "표현식 제목"
// expression.description: "Expression description" => "표현식 설명"
// expression.expression: "Expression" => "식"
// trigger.expression: "Expression" => "식"
// calculatedvalue.expression: "Expression" => "식"
// survey.description: "Survey description" => "설문조사 설명"
// page.name: "Page name" => "페이지 이름"
// page.description: "Page description" => "페이지 설명"
// page.visibleIf: "Make the page visible if" => "다음과 같은 경우 페이지를 표시합니다."
// page.requiredIf: "Make the page required if" => "다음과 같은 경우 페이지를 필수로 만듭니다."
// page.questionOrder: "Question order on the page" => "페이지의 질문 순서"
// matrixdropdowncolumn.name: "Column name" => "열 이름"
// matrixdropdowncolumn.title: "Column title" => "열 제목"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "중복 응답 방지"
// matrixdropdowncolumn.width: "Column width" => "열 너비"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "최소 열 너비"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "입력 필드 높이(줄)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "다음과 같은 경우 열을 표시합니다."
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "다음과 같은 경우 열을 필수로 만듭니다."
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "별도의 열에 있는 각 옵션"
// multipletextitem.name: "Name" => "이름"
// multipletextitem.title: "Title" => "타이틀"
// pe.rateDescriptionLocation: "Label alignment" => "레이블 정렬"
// pe.cellErrorLocation: "Cell error message alignment" => "셀 오류 메시지 맞춤"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "아직 열이 없습니다."
// pe.listIsEmpty@rows: "You don't have any rows yet" => "아직 행이 없습니다."
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "아직 유효성 검사 규칙이 없습니다."
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "아직 맞춤 변수가 없습니다."
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "아직 트리거가 없습니다."
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "아직 링크가 없습니다."
// pe.addNew@columns: "Add new column" => "새 열 추가"
// pe.addNew@rows: "Add new row" => "새 행 추가"
// pe.addNew@validators: "Add new rule" => "새 규칙 추가"
// pe.addNew@calculatedValues: "Add new variable" => "새 변수 추가"
// pe.addNew@triggers: "Add new trigger" => "새 트리거 추가"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "새 URL 추가"
// choicesbyurl.url: "Web service's URL" => "웹 서비스의 URL"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "진행률 표시줄에 페이지 제목 표시"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "진행률 표시줄에 페이지 번호 표시"
// itemvalue.visibleIf: "Make the option visible if" => "다음과 같은 경우 옵션을 표시합니다."
// itemvalue.enableIf: "Make the option selectable if" => "다음과 같은 경우 옵션을 선택할 수 있도록 합니다."
// panel.layout: "Panel Layout" => "패널 레이아웃"
// tabs.questionSettings: "Question Settings" => "질문 설정"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "예: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "예: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "예: a)"
// pe.width_placeholder: "Ex.: 6in" => "예: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "예: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "예: 50%"
// pv.selected: "Selected" => "선택한"
// pv.unselected: "Unselected" => "하지 않은"
// pv.center: "Center" => "중"
// pv.middle: "Middle" => "중간"
// pv.next: "Next" => "다음"
// pv.last: "Last" => "지난"
// clearIfInvisible.none: "Never" => "결코"
// questionsOnPageMode.standard: "Original structure" => "원래 구조"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "모든 질문을 한 페이지에 표시"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "페이지당 단일 질문 표시"
// pv.auto: "Auto" => "자동"
// panelsState.firstExpanded: "First expanded" => "첫 번째 확장"
// rateColorMode.scale: "Scale" => "저울"
// scaleColorMode.monochrome: "Monochrome" => "단색"
// scaleColorMode.colored: "Colored" => "유색"
// state.default: "Locked" => "잠긴"
// showQuestionNumbers.default: "Auto-numbering" => "자동 번호 매기기"
// showQuestionNumbers.on: "Auto-numbering" => "자동 번호 매기기"
// showQuestionNumbers.onPage: "Reset on each page" => "각 페이지에서 재설정"
// showQuestionNumbers.onpanel: "Reset on each panel" => "각 패널에서 재설정"
// showQuestionNumbers.onPanel: "Reset on each panel" => "각 패널에서 재설정"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "설문조사 계속하기"
// showQuestionNumbers.off: "No numbering" => "번호 매기기 없음"
// descriptionLocation.underTitle: "Under the question title" => "질문 제목 아래"
// descriptionLocation.underInput: "Under the input field" => "입력 필드 아래"
// selectToRankAreasLayout.horizontal: "Next to choices" => "선택 항목 옆"
// selectToRankAreasLayout.vertical: "Above choices" => "위의 선택 사항"
// displayStyle.decimal: "Decimal" => "십진법"
// displayStyle.currency: "Currency" => "통화"
// displayStyle.percent: "Percentage" => "백분율"
// displayStyle.date: "Date" => "날짜"
// totalDisplayStyle.decimal: "Decimal" => "십진법"
// totalDisplayStyle.currency: "Currency" => "통화"
// totalDisplayStyle.percent: "Percentage" => "백분율"
// totalDisplayStyle.date: "Date" => "날짜"
// rowOrder.initial: "Original" => "원문 언어"
// questionOrder.initial: "Original" => "원문 언어"
// showProgressBar.aboveheader: "Above the header" => "머리글 위"
// showProgressBar.belowheader: "Below the header" => "머리글 아래"
// pv.sum: "Sum" => "합계"
// pv.count: "Count" => "세다"
// pv.min: "Min" => "분"
// pv.max: "Max" => "최대"
// pv.avg: "Avg" => "평균"
// searchMode.contains: "Contains" => "포함"
// searchMode.startsWith: "Starts with" => "다음으로 시작"
// panel.name: "A panel ID that is not visible to respondents." => "응답자에게 표시되지 않는 패널 ID입니다."
// panel.description: "Type a panel subtitle." => "패널 부제목을 입력합니다."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "마술 지팡이 아이콘을 사용하여 패널 가시성을 결정하는 조건부 규칙을 설정합니다."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "마술 지팡이 아이콘을 사용하여 패널에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "이 패널 내의 모든 질문에 적용됩니다. 이 설정을 재정의하려면 개별 질문에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "패널 내의 모든 질문과 관련된 오류 메시지의 위치를 설정합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정을 적용합니다."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "질문의 원래 순서를 유지하거나 무작위화합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정을 적용합니다."
// panel.page: "Repositions the panel to the end of a selected page." => "선택한 페이지의 끝으로 패널의 위치를 변경합니다."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "패널 내용과 패널 상자의 왼쪽 테두리 사이에 공백 또는 여백을 추가합니다."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "이전 질문 또는 패널과 함께 한 줄로 패널을 표시하려면 선택을 취소합니다. 패널이 양식의 첫 번째 요소인 경우에는 설정이 적용되지 않습니다."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "다음 중에서 선택: \"확장\" - 패널이 전체적으로 표시되며 축소할 수 있습니다. \"축소됨\" - 패널에 제목과 설명만 표시되며 확장할 수 있습니다. \"잠김\" - 패널이 완전히 표시되며 축소할 수 없습니다."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "패널의 폭을 같은 줄에 있는 다른 측량 요소에 비례하여 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "응답자에게 표시되지 않는 패널 ID입니다."
// paneldynamic.description: "Type a panel subtitle." => "패널 부제목을 입력합니다."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "마술 지팡이 아이콘을 사용하여 패널 가시성을 결정하는 조건부 규칙을 설정합니다."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "마술 지팡이 아이콘을 사용하여 패널에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "이 패널 내의 모든 질문에 적용됩니다. 이 설정을 재정의하려면 개별 질문에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "패널 내의 모든 질문과 관련된 오류 메시지의 위치를 설정합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정을 적용합니다."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "선택한 페이지의 끝으로 패널의 위치를 변경합니다."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "패널 내용과 패널 상자의 왼쪽 테두리 사이에 공백 또는 여백을 추가합니다."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "이전 질문 또는 패널과 함께 한 줄로 패널을 표시하려면 선택을 취소합니다. 패널이 양식의 첫 번째 요소인 경우에는 설정이 적용되지 않습니다."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "다음 중에서 선택: \"확장\" - 패널이 전체적으로 표시되며 축소할 수 있습니다. \"축소됨\" - 패널에 제목과 설명만 표시되며 확장할 수 있습니다. \"잠김\" - 패널이 완전히 표시되며 축소할 수 없습니다."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "패널의 폭을 같은 줄에 있는 다른 측량 요소에 비례하여 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "동적 패널 제목에 대한 템플릿을 입력합니다. 패널의 일반 위치에는 {panelIndex}를 사용하고 표시되는 패널 간의 순서에는 {visiblePanelIndex}를 사용합니다. 이러한 자리 표시자를 패턴에 삽입하여 자동 번호 매기기를 추가합니다."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "탭 제목에 대한 템플릿을 입력합니다. 패널의 일반적인 위치에는 {panelIndex}를 사용하고 표시되는 패널 간의 순서에는 {visiblePanelIndex}를 사용합니다. 이러한 자리 표시자를 패턴에 삽입하여 자동 번호 매기기를 추가합니다."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "이 설정을 사용하면 동적 패널 내에서 개별 패널의 가시성을 제어할 수 있습니다. '{panel}' 자리 표시자를 사용하여 표현식의 현재 패널을 참조합니다."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "이 설정은 이 패널 내의 모든 질문에 자동으로 상속됩니다. 이 설정을 재정의하려면 개별 질문에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "\"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"패널 제목 아래\")을 적용합니다."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "새로 추가된 패널의 위치를 정의합니다. 기본적으로 새 패널이 끝에 추가됩니다. \"다음\"을 선택하여 현재 패널 뒤에 새 패널을 삽입합니다."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "마지막 패널의 답변을 복제하여 다음에 추가된 동적 패널에 할당합니다."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "사용자가 각 패널에서 이 질문에 대해 고유한 응답을 제공하도록 요구하려면 질문 이름을 참조합니다."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "이 설정을 사용하면 표현식에 따라 기본 답안 값을 할당할 수 있습니다. 표현식에는 기본 계산('{q1_id} + {q2_id}'), 부울 표현식(예: '{age} > 60') 및 함수 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등이 포함될 수 있습니다. 이 표현식에 의해 결정된 값은 응답자의 수동 입력으로 재정의할 수 있는 초기 기본값으로 사용됩니다."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "마술 지팡이 아이콘을 사용하여 응답자의 입력이 \"기본값 표현식\" 또는 \"설정 값 표현식\" 또는 \"기본 답변\" 값(둘 중 하나가 설정된 경우)에 기반한 값으로 재설정되는 시점을 결정하는 조건부 규칙을 설정합니다."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "마술 지팡이 아이콘을 사용하여 \"값 설정 표현식\"을 실행할 시기를 결정하는 조건부 규칙을 설정하고 결과 값을 응답으로 동적으로 할당합니다."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "\"Set value if\" 규칙의 조건이 충족될 때 설정할 값을 정의하는 표현식을 지정합니다. 표현식에는 기본 계산('{q1_id} + {q2_id}'), 부울 표현식(예: '{age} > 60') 및 함수 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등이 포함될 수 있습니다. 이 표현식에 의해 결정된 값은 응답자의 수동 입력에 의해 재정의될 수 있습니다."
// question.name: "A question ID that is not visible to respondents." => "응답자에게 표시되지 않는 질문 ID입니다."
// question.description: "Type a question subtitle." => "질문 부제목을 입력합니다."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "마술 지팡이 아이콘을 사용하여 질문 가시성을 결정하는 조건부 규칙을 설정합니다."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "마술 지팡이 아이콘을 사용하여 질문에 대한 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "마술 지팡이 아이콘을 사용하여 질문에 대한 답변을 받지 않는 한 설문조사 진행 또는 제출을 금지하는 조건부 규칙을 설정합니다."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "질문을 이전 질문 또는 패널과 함께 한 줄로 표시하려면 선택을 취소합니다. 질문이 양식의 첫 번째 요소인 경우에는 설정이 적용되지 않습니다."
// question.page: "Repositions the question to the end of a selected page." => "선택한 페이지의 끝으로 질문의 위치를 변경합니다."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "다음 중에서 선택: \"확장\" - 질문 상자가 전체적으로 표시되며 축소할 수 있습니다. \"축소됨\" - 질문 상자에는 제목과 설명만 표시되며 확장할 수 있습니다. \"잠김\" - 질문 상자가 완전히 표시되며 축소할 수 없습니다."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "패널, 페이지 또는 설문조사 수준에 정의된 제목 정렬 규칙을 재정의합니다. \"상속\" 옵션은 더 높은 수준의 설정(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"맨 위\")을 적용합니다."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "\"상속\" 옵션은 현장조사 수준 설정(기본 설정에 따라 \"질문 제목 아래\")을 적용합니다."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "질문 콘텐츠와 질문 상자의 왼쪽 테두리 사이에 공백 또는 여백을 추가합니다."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "같은 줄에 있는 다른 설문조사 요소에 비례하여 질문의 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "마술 지팡이 아이콘을 사용하여 질문에 대한 유효성 검사 규칙을 설정합니다."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "다음 중에서 선택: \"초점을 잃을 때\" - 입력 필드가 초점을 잃을 때 값이 업데이트됩니다. \"While typing\" - 사용자가 입력할 때 값이 실시간으로 업데이트됩니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"초점 손실 시\")을 적용합니다."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "모든 웹 서비스를 객관식 질문의 데이터 소스로 사용할 수 있습니다. 선택 항목 값을 채우려면 데이터를 제공하는 서비스의 URL을 입력합니다."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "드롭다운 목록을 필터링하는 데 사용되는 비교 작업입니다."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "표시된 서명 영역과 결과 이미지의 너비를 설정합니다."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "표시된 서명 영역과 결과 이미지의 높이를 설정합니다."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "기본 3:2 종횡비를 유지하면서 서명 영역이 질문 상자 내의 사용 가능한 모든 공간을 채우도록 하려면 선택합니다. 사용자 지정 너비 및 높이 값을 설정하면 설정은 이러한 치수의 가로 세로 비율을 유지합니다."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "현장조사 결과에서 이미지의 높이를 조정합니다."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "현장조사 결과에서 이미지의 너비를 조정합니다."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "최소 및 최대 높이 값을 재정의합니다."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "최소 및 최대 너비 값을 재정의합니다."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Value\"는 조건부 규칙에 사용되는 항목 ID로 사용됩니다. 응답자에게 \"텍스트\"가 표시됩니다."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "이 설정은 입력 필드의 크기만 조정하며 질문 상자의 너비에는 영향을 주지 않습니다. 허용되는 입력 길이를 제한하려면 <b>유효성 검사 → 최대 문자 제한</b>으로 이동합니다."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "입력 필드에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "다음 중 하나를 선택합니다. \"수정 가능\" - 응답자가 설문조사를 작성할 수 있습니다. \"읽기 전용\" - 양식 편집을 비활성화합니다."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "응답자에게 표시되지 않는 열 ID입니다."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "열에 대해 활성화된 경우, 응답자는 이 열 내의 각 질문에 대해 고유한 응답을 제공해야 합니다."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "입력 필드에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "마술 지팡이 아이콘을 사용하여 열 표시 유형을 결정하는 조건부 규칙을 설정합니다."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "마술 지팡이 아이콘을 사용하여 열에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "이 옵션을 선택하면 각 선택 옵션에 대한 개별 열이 만들어집니다."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "다음 중에서 선택합니다. \"정적\" - 고정 너비를 설정합니다. \"반응형\" - 설문조사가 화면의 전체 너비를 차지하도록 합니다. \"자동\" - 사용된 질문 유형에 따라 둘 중 하나를 적용합니다."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "이미지 링크(크기 제한 없음)를 붙여넣거나 폴더 아이콘을 클릭하여 컴퓨터에서 파일을 찾습니다(최대 64KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "로고 너비를 CSS 단위(px, %, in, pt 등)로 설정합니다."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "로고 높이를 CSS 단위(px, %, in, pt 등)로 설정합니다."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "다음 중에서 선택: \"없음\" - 이미지가 원래 크기를 유지합니다. \"Contain\" - 가로 세로 비율을 유지하면서 이미지의 크기가 조정됩니다. \"표지\" - 이미지가 종횡비를 유지하면서 전체 상자를 채웁니다. \"채우기\" - 가로 세로 비율을 유지하지 않고 상자를 채우기 위해 이미지가 늘어납니다."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "페이지에서 탐색 단추의 표시 여부와 위치를 설정합니다."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "진행률 표시줄의 표시 여부와 위치를 설정합니다. \"자동\" 값은 설문조사 헤더 위 또는 아래에 진행률 표시줄을 표시합니다."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "모든 질문 또는 답변된 질문만 있는 미리보기 페이지를 활성화합니다."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "설문조사 내의 모든 질문에 적용됩니다. 이 설정은 하위 수준(패널, 페이지 또는 질문)의 제목 정렬 규칙으로 재정의할 수 있습니다. 낮은 수준의 설정은 더 높은 수준의 설정보다 우선합니다."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "답변이 필요함을 나타내는 기호 또는 일련의 기호입니다."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "번호 매기기를 시작할 숫자 또는 문자를 입력합니다."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "각 페이지의 첫 번째 입력 필드를 텍스트 입력에 사용할 수 있도록 준비하려면 선택합니다."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "질문의 원래 순서를 유지하거나 무작위화합니다. 이 설정의 효과는 미리보기 탭에서만 볼 수 있습니다."
// pehelp.maxTextLength: "For text entry questions only." => "텍스트 입력 질문에만 해당됩니다."
// pehelp.maxCommentLength: "For question comments only." => "질문 댓글에만 해당됩니다."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "질문 댓글과 긴 텍스트 질문의 높이가 입력한 텍스트 길이에 따라 자동으로 커지도록 하려면 선택합니다."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "질문 댓글 및 긴 텍스트 질문에만 해당됩니다."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "사용자 지정 변수는 양식 계산에 사용되는 중간 또는 보조 변수 역할을 합니다. 응답자 입력을 소스 값으로 사용합니다. 각 맞춤 변수에는 고유한 이름과 기준이 되는 표현식이 있습니다."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "표현식의 계산된 값을 현장조사 결과와 함께 저장하려면 선택합니다."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "트리거는 표현식을 기반으로 하는 이벤트 또는 조건입니다. 표현식이 \"true\"로 평가되면 트리거가 작업을 시작합니다. 이러한 작업에는 선택적으로 영향을 미치는 대상 질문이 있을 수 있습니다."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "조건부 논리에 의해 숨겨진 질문의 값을 지울지 여부와 지울 시기를 선택합니다."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "다음 중에서 선택: \"초점을 잃을 때\" - 입력 필드가 초점을 잃을 때 값이 업데이트됩니다. \"While typing\" - 사용자가 입력할 때 값이 실시간으로 업데이트됩니다."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "왼쪽 값은 조건부 규칙에 사용되는 열 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "왼쪽 값은 조건부 규칙에 사용되는 행 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 값(px, %, in, pt 등)을 허용합니다."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 값(px, %, in, pt 등)을 허용합니다."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "잘못된 입력이 있는 셀과 관련하여 오류 메시지의 위치를 설정합니다. \"상속\" 옵션은 \"오류 메시지 맞춤\" 속성의 설정을 적용합니다."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "\"중복 응답 방지\" 속성이 활성화된 경우, 중복 항목을 제출하려는 응답자는 다음과 같은 오류 메시지를 받게 됩니다."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "표현식을 기준으로 합계 값을 계산할 수 있습니다. 표현식에는 기본 계산('{q1_id} + {q2_id}'), 부울 표현식('{age} > 60') 및 함수('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등)이 포함될 수 있습니다."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "행 삭제를 확인하라는 프롬프트를 트리거합니다."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "마지막 행의 답변을 복제하여 다음에 추가된 동적 행에 할당합니다."
// pehelp.description: "Type a subtitle." => "자막을 입력합니다."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "설문조사 만들기를 시작할 언어를 선택합니다. 번역을 추가하려면 새 언어로 전환하고 여기 또는 번역 탭에서 원본 텍스트를 번역합니다."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "행을 기준으로 세부 정보 섹션의 위치를 설정합니다. 다음 중에서 선택: \"없음\" - 확장이 추가되지 않습니다. \"행 아래\" - 행 확장이 행렬의 각 행 아래에 배치됩니다. \"행 아래에 한 행 확장만 표시\" - 확장은 단일 행 아래에만 표시되고 나머지 행 확장은 축소됩니다."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "다음 중에서 선택: \"없음\" - 이미지가 원래 크기를 유지합니다. \"Contain\" - 가로 세로 비율을 유지하면서 이미지의 크기가 조정됩니다. \"표지\" - 이미지가 종횡비를 유지하면서 전체 상자를 채웁니다. \"채우기\" - 가로 세로 비율을 유지하지 않고 상자를 채우기 위해 이미지가 늘어납니다."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "데이터가 입력될 때 입력 필드의 높이를 점진적으로 늘립니다. \"입력 필드 높이(줄 단위)\" 설정을 재정의합니다."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "크기 조정 핸들(또는 그립)이 모서리에 나타나며 드래그하여 입력 필드의 크기를 변경할 수 있습니다."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "설문조사가 감사 인사 페이지로 자동 전환되기까지의 시간 간격(초)입니다."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "설문조사가 다음 페이지로 자동 넘어가는 시간 간격(초)입니다."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "설문조사가 다음 페이지로 자동 넘어가는 시간 간격(초)입니다."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "마술 지팡이 아이콘을 사용하여 페이지 표시 여부를 결정하는 조건부 규칙을 설정할 수 있습니다."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "마술 지팡이 아이콘을 사용하여 페이지에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "이 페이지 내의 모든 질문에 적용됩니다. 이 설정을 재정의하려면 개별 질문 또는 패널에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "질문의 원래 순서를 유지하거나 무작위화합니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"원본\")을 적용합니다. 이 설정의 효과는 미리보기 탭에서만 볼 수 있습니다."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "페이지에서 탐색 단추의 표시 여부를 설정합니다. \"상속\" 옵션은 설문조사 수준 설정을 적용하며, 기본값은 \"표시\"입니다."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "다음 중에서 선택: \"잠김\" - 사용자가 패널을 확장하거나 축소할 수 없습니다. \"모두 축소\" - 모든 패널이 축소된 상태에서 시작됩니다. \"모두 확장\" - 모든 패널이 확장된 상태에서 시작됩니다. \"첫 번째 확장\" - 첫 번째 패널만 처음에 확장됩니다."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "선택 목록에 표시할 이미지 또는 비디오 파일 URL이 포함된 객체 배열 내에 공유 속성 이름을 입력합니다."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "왼쪽 값은 조건부 규칙에 사용되는 항목 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다."
// pehelp.title: "Type a user-friendly title to display." => "표시할 사용자에게 친숙한 제목을 입력합니다."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "파일이 업로드될 때까지 사용자가 설문조사를 완료하지 않도록 합니다."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 값(px, %, in, pt 등)을 허용합니다."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 값(px, %, in, pt 등)을 허용합니다."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS 값(px, %, in, pt 등)을 허용합니다."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "단답형 및 다중선택 질문 유형에서 각 선택 옵션에는 ID와 표시 값이 있습니다. 이 설정을 선택하면 HTML 질문과 동적 제목 및 현장조사 요소에 대한 설명에서 ID 값 대신 표시 값이 표시됩니다."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "조건부 논리에 의해 숨겨진 질문 값을 지울지 여부와 지울 시기를 선택합니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"설문조사 완료 시\")을 적용합니다."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "다음 중에서 선택: \"모두\" - 선택한 질문의 모든 선택 옵션을 복사합니다. \"선택됨\" - 선택한 선택 옵션만 동적으로 복사합니다. \"선택되지 않음\" - 선택되지 않은 선택 옵션만 동적으로 복사합니다. \"없음\" 및 \"기타\" 옵션은 원본 질문에서 활성화된 경우 기본적으로 복사됩니다."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "이 옵션을 선택하면 사용자가 별도의 주석 상자에 추가 입력을 포함할 수 있습니다."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "각 특수 선택 옵션(\"없음\", \"기타\", \"모두 선택\")을 새 줄에 표시합니다(여러 열 레이아웃을 사용하는 경우에도 마찬가지임)."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "서비스 데이터 세트 내에서 대상 객체 배열이 있는 위치를 지정합니다. URL이 이미 배열을 가리키는 경우 비워 둡니다."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "선택 목록에 표시할 값을 포함하는 객체 배열 내에 균일한 특성 이름을 입력합니다."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "서비스가 빈 응답 또는 배열을 반환하도록 허용하려면 선택합니다."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "마술 지팡이 아이콘을 사용하여 모든 선택 옵션의 표시 유형을 결정하는 조건부 규칙을 설정합니다."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "왼쪽 값은 조건부 규칙에 사용되는 항목 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"자동\"은 사용 가능한 너비에 따라 \"버튼\"과 \"드롭다운\" 모드 중에서 선택합니다. 너비가 부족하여 버튼을 표시할 수 없는 경우 질문에 드롭다운이 표시됩니다."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "다양한 형식의 결과를 생성하는 질문을 연결할 수 있습니다. 이러한 질문이 조인 식별자를 사용하여 서로 연결되면 이 공유 속성은 선택한 질문 값을 저장합니다."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "사용자가 입력 필드에 입력하는 검색어와 일치하도록 드롭다운 메뉴 내용을 업데이트하려면 선택합니다."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "응답자들이 긍정적인 답변을 할 때 설문조사 결과에 저장하는 값입니다."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "응답자들이 부정적인 답변을 할 때 설문조사 결과에 저장하는 값입니다."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "이 옵션은 미리 보기 이미지를 재정의하고 사용자가 파일이 업로드되었는지 여부를 이해하기 어렵게 만들기 때문에 사용하지 않도록 설정하지 않는 것이 좋습니다."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "파일 삭제를 확인하는 프롬프트를 트리거합니다."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "선택한 선택 항목만 순위를 지정할 수 있습니다. 사용자는 선택 목록에서 선택한 항목을 끌어 순위 영역 내에서 정렬합니다."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "입력 시 응답자에게 제안될 선택 사항 목록을 입력합니다."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "이 설정은 입력 필드의 크기만 조정하며 질문 상자의 너비에는 영향을 주지 않습니다."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "모든 항목 레이블에 대해 일관된 너비를 픽셀 단위로 설정합니다."
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "\"자동\" 옵션은 제공된 소스 URL을 기반으로 표시에 적합한 모드(이미지, 비디오 또는 YouTube)를 자동으로 결정합니다."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "사용자의 장치에 이미지를 표시할 수 없는 경우 접근성을 위해 대신 사용할 수 있습니다."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "등급 아이콘 유형이 \"스마일리\"로 설정된 경우 선택한 이모티콘의 색상을 정의합니다. 다음 중 하나를 선택합니다. \"기본값\" - 선택한 이모티콘이 기본 설문조사 색상으로 표시됩니다. \"척도\"-선택한 이모티콘은 등급 척도에서 색상을 상속합니다."
// expression.name: "An expression ID that is not visible to respondents." => "응답자에게 표시되지 않는 표현식 ID입니다."
// expression.description: "Type an expression subtitle." => "표현식 부제목을 입력합니다."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "표현식에는 기본 계산('{q1_id} + {q2_id}'), 조건('{age} > 60') 및 함수('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등)가 포함될 수 있습니다."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "\"기타\" 옵션 값을 측량 결과에 별도의 속성으로 저장하려면 선택합니다."
// p.swapOrder: "Swap the order of Yes and No" => "예와 아니요의 순서를 바꿉니다."
// p.itemTitleWidth: "Item label width (in px)" => "항목 레이블 너비(px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "모든 옵션이 선택된 경우 표시할 텍스트"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "순위 영역의 자리 표시자 텍스트"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "설문조사 자동 완성"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "응답자가 모든 질문에 답변한 후 설문조사가 자동으로 완료되도록 하려면 선택합니다."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "설문조사 결과에 마스킹된 값 저장"
// patternmask.pattern: "Value pattern" => "값 패턴"
// datetimemask.min: "Minimum value" => "최솟값"
// datetimemask.max: "Maximum value" => "최대값"
// numericmask.allowNegativeValues: "Allow negative values" => "음수 값 허용"
// numericmask.thousandsSeparator: "Thousands separator" => "1000 단위 구분 기호"
// numericmask.decimalSeparator: "Decimal separator" => "소수 구분 기호"
// numericmask.precision: "Value precision" => "값 정밀도"
// numericmask.min: "Minimum value" => "최솟값"
// numericmask.max: "Maximum value" => "최대값"
// currencymask.prefix: "Currency prefix" => "통화 접두사"
// currencymask.suffix: "Currency suffix" => "통화 접미사"
// pe.maskType: "Input mask type" => "입력 마스크 유형"
// maskTypes.patternmask: "Pattern" => "무늬"
// maskTypes.numericmask: "Numeric" => "숫자"
// maskTypes.datetimemask: "Date and Time" => "날짜 및 시간"
// maskTypes.currencymask: "Currency" => "통화"
// tabs.mask: "Input Mask Settings" => "입력 마스크 설정"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "예: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "예: mm/dd/yyyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "예: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "예.: USD"
// pv.textWrapEnabled: "Wrap choices" => "줄 바꿈 선택"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "선택 옵션의 긴 텍스트는 드롭다운 메뉴에 맞게 줄 바꿈을 자동으로 생성합니다. 텍스트를 자르려면 선택을 취소합니다."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "마스크가 적용된 질문 값을 현장조사 결과에 저장하려면 선택합니다."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "패턴에는 문자열 리터럴과 다음 자리 표시자가 포함될 수 있습니다. '9' - 숫자의 경우; 'a' - 대문자 또는 소문자의 경우; '#' - 숫자 또는 대문자 또는 소문자의 경우. 백슬래시 '\\'를 사용하여 문자를 이스케이프합니다."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "패턴에는 구분 기호와 다음 자리 표시자가 포함될 수 있습니다. 'm' - 월 번호; 'mm' - 월 번호의 경우, 한 자리 값의 경우 선행 0이 있습니다. 'd' - 해당 월의 날짜; 'dd' - 한 달 중 일, 한 자리 값의 경우 선행 0이 있습니다. 'yy' - 연도의 마지막 두 자리 숫자; 'yyyy' - 4자리 연도입니다."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "표시된 숫자의 정수 부분에서 소수 부분을 구분하는 데 사용되는 기호입니다."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "큰 숫자의 숫자를 3개의 그룹으로 구분하는 데 사용되는 기호입니다."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "표시된 숫자의 소수점 뒤에 유지할 자릿수를 제한합니다."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "값 앞에 표시할 하나 또는 여러 개의 기호입니다."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "값 뒤에 표시할 하나 또는 여러 개의 기호입니다."
// ed.translationSource: "Source: " => "근원: "
// ed.translationTarget: "Target: " => "과녁: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "페이지가 비어 있습니다. 도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다."
// maskTypes.none: "None" => "없음"
// itemvalue@rows.visibleIf: "Make the row visible if" => "다음과 같은 경우 행을 표시합니다."
// itemvalue@rows.enableIf: "Make the row editable if" => "다음과 같은 경우 행을 편집 가능하게 만듭니다."
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "읽기 전용 또는 미리 보기 모드의 자리 표시자 텍스트"
// pe.textWrapEnabled: "Wrap choices" => "줄 바꿈 선택"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "\"자동\" 옵션은 제공된 소스 URL을 기반으로 표시에 적합한 모드(이미지, 비디오 또는 YouTube)를 자동으로 결정합니다."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "\"이미지\"와 \"비디오\" 중에서 선택하여 미디어 선택기의 콘텐츠 모드를 설정합니다. \"이미지\"를 선택한 경우 제공된 모든 옵션이 JPEG, GIF, PNG, APNG, SVG, BMP, ICO 형식의 이미지 파일인지 확인하십시오. 마찬가지로 \"비디오\"를 선택한 경우 모든 옵션이 MP4, MOV, WMV, FLV, AVI, MKV 형식의 비디오 파일에 대한 직접 링크인지 확인하십시오. YouTube 링크는 비디오 옵션에서 지원되지 않습니다."
// ed.selectFile: "Select a file" => "파일 선택"
// ed.removeFile: "Remove the file" => "파일 제거"
// pe.searchMode: "Search Mode" => "검색 모드"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "아래의 \"질문 추가\" 버튼을 클릭하여 양식 작성을 시작하십시오."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "아래의 \"질문 추가\" 버튼을 클릭하여 페이지에 새 요소를 추가하세요."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "아래의 \"질문 추가\" 버튼을 클릭하여 패널에 새 요소를 추가합니다."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "아래 버튼을 클릭하고 업로드할 이미지를 선택하세요."
// coloralpha.opacity: "Opacity" => "불투명도"
// font.family: "Font family" => "글꼴 모음"
// font.color: "Color" => "색"
// font.placeholderColor: "Placeholder color" => "자리 표시자 색"
// font.size: "Size" => "크기"
// theme.themeName: "Theme" => "주제"
// theme.isPanelless: "Question appearance" => "질문 모양"
// theme.editorPanel: "Background and corner radius" => "배경 및 모서리 반경"
// theme.questionPanel: "Background and corner radius" => "배경 및 모서리 반경"
// theme.primaryColor: "Accent color" => "강조 색상"
// theme.panelBackgroundTransparency: "Panel background opacity" => "패널 배경 불투명도"
// theme.questionBackgroundTransparency: "Question background opacity" => "질문 배경 불투명도"
// theme.fontSize: "Font size" => "글꼴 크기"
// theme.scale: "Scale" => "저울"
// theme.cornerRadius: "Corner radius" => "코너 반경"
// theme.pageTitle: "Title font" => "제목 글꼴"
// theme.pageDescription: "Description font" => "설명 글꼴"
// theme.questionTitle: "Title font" => "제목 글꼴"
// theme.questionDescription: "Description font" => "설명 글꼴"
// theme.editorFont: "Font" => "글꼴"
// theme.backgroundOpacity: "Opacity" => "불투명도"
// theme.--sjs-font-family: "Font family" => "글꼴 모음"
// theme.--sjs-general-backcolor-dim: "Background color" => "배경색"
// theme.--sjs-primary-backcolor: "Accent background" => "강조 배경"
// theme.--sjs-primary-forecolor: "Accent foreground" => "강조 전경"
// theme.--sjs-shadow-small: "Shadow effects" => "그림자 효과"
// theme.--sjs-shadow-inner: "Shadow effects" => "그림자 효과"
// theme.--sjs-border-default: "Colors" => "색상"
// header@header.headerView: "View" => "보기"
// header@header.logoPosition: "Logo position" => "로고 위치"
// header@header.surveyTitle: "Survey title font" => "설문조사 제목 글꼴"
// header@header.surveyDescription: "Survey description font" => "설문조사 설명 글꼴"
// header@header.headerTitle: "Survey title font" => "설문조사 제목 글꼴"
// header@header.headerDescription: "Survey description font" => "설문조사 설명 글꼴"
// header@header.inheritWidthFrom: "Content area width" => "콘텐츠 영역 너비"
// header@header.textAreaWidth: "Text width" => "텍스트 너비"
// header@header.backgroundColorSwitch: "Background color" => "배경색"
// header@header.backgroundImage: "Background image" => "배경 이미지"
// header@header.backgroundImageOpacity: "Opacity" => "불투명도"
// header@header.overlapEnabled: "Overlap" => "겹침"
// header@header.logoPositionX: "Logo position" => "로고 위치"
// header@header.titlePositionX: "Title position" => "제목 위치"
// header@header.descriptionPositionX: "Description position" => "설명 위치"
// weight.400: "Regular" => "일반"
// weight.600: "Heavy" => "무겁다"
// weight.700: "Semi-bold" => "세미 볼드(Semi-bold)"
// weight.800: "Bold" => "대담한"
// backgroundImageFit.auto: "Auto" => "자동"
// backgroundImageFit.cover: "Cover" => "표지"
// backgroundImageFit.contain: "Contain" => "포함하다"
// backgroundImageFit.fill: "Stretch" => "뻗다"
// backgroundImageFit.tile: "Tile" => "타일"
// backgroundImageAttachment.fixed: "Fixed" => "부정하게 결정된"
// backgroundImageAttachment.scroll: "Scroll" => "스크롤"
// headerView.basic: "Basic" => "기초의"
// headerView.advanced: "Advanced" => "고급"
// inheritWidthFrom.survey: "Same as survey" => "설문 조사와 동일"
// inheritWidthFrom.container: "Fit to container" => "컨테이너에 맞추기"
// backgroundColorSwitch.none: "None" => "없음"
// backgroundColorSwitch.accentColor: "Accent color" => "강조 색상"
// backgroundColorSwitch.custom: "Custom" => "관습"
// colorPalette.light: "Light" => "광"
// colorPalette.dark: "Dark" => "어둠"
// isPanelless.false: "Default" => "기본값"
// isPanelless.true: "Without Panels" => "패널 없음"
// theme.cornerRadius: "Corner radius" => "코너 반경"
// theme.fontFamily: "Font family" => "글꼴 모음"
// theme.fontWeightRegular: "Regular" => "일반"
// theme.fontWeightHeavy: "Heavy" => "무겁다"
// theme.fontWeightSemiBold: "Semi-bold" => "세미 볼드(Semi-bold)"
// theme.fontWeightBold: "Bold" => "대담한"
// theme.color: "Color" => "색"
// theme.placeholderColor: "Placeholder color" => "자리 표시자 색"
// theme.size: "Size" => "크기"
// theme.opacity: "Opacity" => "불투명도"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "검색하려면 입력..."
// ed.toolboxNoResultsFound: "No results found" => "결과를 찾을 수 없습니다."
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "탭 제목 자리 표시자"
// theme.--sjs-special-red: "Error messages" => "오류 메시지"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "탭 제목 패턴이 의미 있는 값을 생성하지 않을 때 적용되는 탭 제목에 대한 대체 텍스트입니다."
// theme.fontColor: "Font color" => "글꼴 색상"
// theme.backgroundColor: "Background color" => "배경색"
// pe.questionTitleWidth: "Question title width" => "질문 제목 너비"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "파일 선택 또는 파일 링크 붙여넣기..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "예: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "질문 제목이 질문 상자의 왼쪽에 정렬될 때 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "질문 제목이 질문 상자의 왼쪽에 정렬될 때 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다."
// pe.commentAreaRows: "Comment area height (in lines)" => "주석 영역 높이(줄)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "질문 주석에 대해 텍스트 영역에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다."
// pe.enabled: "Enabled" => "사용"
// pe.disabled: "Disabled" => "비활성화"
// pe.inherit: "Inherit" => "물려받다"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "초점이 손실된 빈 필드 유효성 검사"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "예: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "예: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "이 옵션을 사용하면 사용자가 빈 입력 필드에 집중한 다음 변경하지 않고 떠날 때 유효성 검사를 트리거합니다."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "선택 옵션을 다중 열 레이아웃으로 정렬합니다. 0으로 설정하면 옵션이 한 줄로 표시됩니다."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "이 설정은 패널 외부의 질문에만 적용됩니다."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "주요 측량 요소를 강조하는 보조 색상을 설정합니다."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "설문조사 배경을 기준으로 패널과 질문 상자의 투명도를 조정합니다."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "현장조사 배경에 상대적인 입력 요소의 투명도를 조정합니다."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "모든 직사각형 요소의 구석 반지름을 설정합니다. Advanced Mode(고급 모드)를 활성화하면 입력 요소 또는 패널 및 질문 상자에 대한 개별 모서리 반경 값을 설정할 수 있습니다."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "현장조사의 기본 배경색을 설정합니다."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "\"컨테이너와 동일\" 옵션은 설문조사가 배치된 HTML 요소에 맞게 헤더 콘텐츠 영역 너비를 자동으로 조정합니다."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "설문조사 제목과 설명이 포함된 헤더 영역의 너비로, 픽셀 단위로 측정됩니다."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "% 값을 허용합니다."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "px 값을 허용합니다."
// p.effectiveColSpan: "Column span" => "열 범위"
// progressBarInheritWidthFrom.survey: "Same as survey" => "설문 조사와 동일"
// progressBarInheritWidthFrom.container: "Same as container" => "컨테이너와 동일"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "가능한 경우 업로드된 파일에 대한 썸네일 미리보기를 표시합니다. 대신 파일 아이콘을 표시하려면 선택을 취소합니다."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "\"컨테이너와 동일\" 옵션은 설문조사가 배치된 HTML 요소에 맞게 진행률 표시줄 영역 너비를 자동으로 조정합니다."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "진행률 표시줄 영역 너비"
// maskType.none: "None" => "없음"
// maskType.pattern: "Pattern" => "무늬"
// maskType.numeric: "Numeric" => "숫자"
// maskType.datetime: "Date and Time" => "날짜 및 시간"
// maskType.currency: "Currency" => "통화"

// inputTextAlignment.auto: "Auto" => "자동"
// inputTextAlignment.left: "Left" => "왼쪽"
// inputTextAlignment.right: "Right" => "오른쪽"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "필드 내에서 입력 값을 정렬하는 방법을 선택합니다. 기본 설정인 \"Auto\"는 통화 또는 숫자 마스킹이 적용된 경우 입력 값을 오른쪽에 정렬하고 그렇지 않은 경우 왼쪽에 정렬합니다."
// p.inputTextAlignment: "Input value alignment" => "입력 값 정렬"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "진행률 표시줄 표시"
// paneldynamic.showProgressBar: "Show the progress bar" => "진행률 표시줄 표시"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "진행률 표시줄 맞춤"
// pv.carousel: "Carousel" => "회전목마"
// progressBarLocation.top: "Top" => "맨 위로"
// progressBarLocation.bottom: "Bottom" => "밑바닥"
// progressBarLocation.topBottom: "Top and bottom" => "위쪽 및 아래쪽"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "선택 옵션을 여러 열 레이아웃으로 정렬합니다. 0으로 설정하면 옵션이 한 줄로 표시됩니다. -1로 설정하면 실제 값이 부모 행렬의 \"중첩 열 수\" 속성에서 상속됩니다."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube 링크는 지원되지 않습니다."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "양식 구성 시작"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "범주 아이콘을 클릭하여 설문조사 설정을 탐색합니다. 디자인 화면에 설문 조사 요소를 추가하면 추가 설정을 사용할 수 있게 됩니다."
// pe.caseInsensitive: "Case insensitive" => "대소문자 구분 안 함"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "정규식에서 대문자와 소문자를 동등하게 취급해야 하는 경우 선택합니다."

// ed.surveyPlaceholderTitle: "Your form is empty" => "양식이 비어 있습니다."
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "양식이 비어 있습니다."
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다."
// ed.previewPlaceholderTitle: "No preview" => "미리보기 없음"
// ed.previewPlaceholderTitleMobile: "No preview" => "미리보기 없음"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "설문조사에 가시적인 요소가 포함되어 있지 않습니다."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "설문조사에 가시적인 요소가 포함되어 있지 않습니다."
// ed.translationsPlaceholderTitle: "No strings to translate" => "번역할 문자열이 없습니다."
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "번역할 문자열이 없습니다."
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "양식에 요소를 추가하거나 도구 모음에서 문자열 필터를 변경합니다."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "양식에 요소를 추가하거나 도구 모음에서 문자열 필터를 변경합니다."
// lg.logicPlaceholderTitle: "No logical rules" => "논리적 규칙 없음"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "논리적 규칙 없음"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "설문조사의 흐름을 사용자 지정하는 규칙을 만듭니다."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "설문조사의 흐름을 사용자 지정하는 규칙을 만듭니다."
// pe.showTimer: "Use a timer" => "타이머 사용"
// theme.advancedMode: "Advanced mode" => "어드밴스드 모드"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "페이지에서 타이머의 위치를 설정합니다."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "0으로 설정하면 헤더의 내용을 수용하기 위해 높이가 자동으로 계산됩니다."
// p.mobileHeight: "Height on smartphones" => "스마트폰의 높이"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "활성화하면 설문조사의 상단이 헤더의 하단에 오버레이됩니다."
// ed.creatorSettingTitle: "Creator Settings" => "크리에이터 설정"
// tabs.accentColors: "Accent colors" => "강조 색상"
// tabs.scaling: "Scaling" => "스케일링"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "이 패널 내에 중첩된 질문에 번호를 할당합니다."
// creatortheme.--sjs-special-background: "Surface background" => "표면 배경"
// creatortheme.--sjs-primary-background-500: "Primary" => "본래의"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "보조"
// creatortheme.surfaceScale: "Surface" => "표면"
// creatortheme.userInterfaceBaseUnit: "User interface" => "사용자 인터페이스"
// creatortheme.fontScale: "Font" => "글꼴"
// names.sc2020: "Survey Creator 2020" => "설문조사 작성기 2020"
// names.default-light: "Light" => "광"
// names.default-dark: "Dark" => "어둠"
// names.default-contrast: "Contrast" => "대조"
// panel.showNumber: "Number this panel" => "이 패널에 번호 매기기"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "응답자가 현재 페이지의 모든 질문에 답변한 후 설문조사가 다음 페이지로 자동 진행되도록 하려면 선택합니다. 페이지의 마지막 질문이 서술형이거나 여러 답변을 허용하는 경우에는 이 기능이 적용되지 않습니다."
// autocomplete.name: "Full Name" => "성명"
// autocomplete.honorific-prefix: "Prefix" => "접두사"
// autocomplete.given-name: "First Name" => "이름"
// autocomplete.additional-name: "Middle Name" => "중간 이름"
// autocomplete.family-name: "Last Name" => "성"
// autocomplete.honorific-suffix: "Suffix" => "접미사"
// autocomplete.nickname: "Nickname" => "별명"
// autocomplete.organization-title: "Job Title" => "직책"
// autocomplete.username: "User Name" => "사용자 이름"
// autocomplete.new-password: "New Password" => "새 비밀번호"
// autocomplete.current-password: "Current Password" => "현재 비밀번호"
// autocomplete.organization: "Organization Name" => "조직 이름"
// autocomplete.street-address: "Full Street Address" => "전체 주소"
// autocomplete.address-line1: "Address Line 1" => "주소란 1"
// autocomplete.address-line2: "Address Line 2" => "주소란 2"
// autocomplete.address-line3: "Address Line 3" => "주소란 3"
// autocomplete.address-level4: "Level 4 Address" => "레벨 4 주소"
// autocomplete.address-level3: "Level 3 Address" => "레벨 3 주소"
// autocomplete.address-level2: "Level 2 Address" => "레벨 2 주소"
// autocomplete.address-level1: "Level 1 Address" => "레벨 1 주소"
// autocomplete.country: "Country Code" => "국가 코드"
// autocomplete.country-name: "Country Name" => "국가 이름"
// autocomplete.postal-code: "Postal Code" => "우편번호"
// autocomplete.cc-name: "Cardholder Name" => "카드 소지자 이름"
// autocomplete.cc-given-name: "Cardholder First Name" => "카드 소지자 이름"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "카드 소지자 중간 이름"
// autocomplete.cc-family-name: "Cardholder Last Name" => "카드 소지자의 성"
// autocomplete.cc-number: "Credit Card Number" => "신용 카드 번호"
// autocomplete.cc-exp: "Expiration Date" => "만료 날짜"
// autocomplete.cc-exp-month: "Expiration Month" => "만료 월"
// autocomplete.cc-exp-year: "Expiration Year" => "만료 연도"
// autocomplete.cc-csc: "Card Security Code" => "카드 보안 코드"
// autocomplete.cc-type: "Credit Card Type" => "신용 카드 유형"
// autocomplete.transaction-currency: "Transaction Currency" => "거래 통화(Transaction Currency)"
// autocomplete.transaction-amount: "Transaction Amount" => "거래 금액"
// autocomplete.language: "Preferred Language" => "선호 언어"
// autocomplete.bday: "Birthday" => "생일"
// autocomplete.bday-day: "Birthday Day" => "생일 날"
// autocomplete.bday-month: "Birthday Month" => "생일의 달"
// autocomplete.bday-year: "Birthday Year" => "생일 연도"
// autocomplete.sex: "Gender" => "성별"
// autocomplete.url: "Website URL" => "웹 사이트 URL"
// autocomplete.photo: "Profile Photo" => "프로필 사진"
// autocomplete.tel: "Telephone Number" => "전화번호"
// autocomplete.tel-country-code: "Country Code for Phone" => "전화의 국가 코드"
// autocomplete.tel-national: "National Telephone Number" => "국내 전화번호"
// autocomplete.tel-area-code: "Area Code" => "지역 번호"
// autocomplete.tel-local: "Local Phone Number" => "현지 전화번호"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "로컬 전화 접두사"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "지역 전화 접미사"
// autocomplete.tel-extension: "Phone Extension" => "전화 내선 번호"
// autocomplete.email: "Email Address" => "이메일 주소"
// autocomplete.impp: "Instant Messaging Protocol" => "인스턴트 메시징 프로토콜"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "질문의 확장/축소 상태 잠금"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "아직 페이지가 없습니다."
// pe.addNew@pages: "Add new page" => "새 페이지 추가"
// ed.zoomInTooltip: "Zoom In" => "확대"
// ed.zoomOutTooltip: "Zoom Out" => "축소"
// tabs.surfaceBackground: "Surface Background" => "표면 배경"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "마지막 항목의 답변을 기본값으로 사용"
// colors.gray: "Gray" => "회색"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "탐색 단추 정렬"
// pv.allQuestions: "Show all questions" => "모든 질문 보기"
// pv.answeredQuestions: "Show answered questions only" => "답변된 질문만 표시"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "페이지에서 탐색 단추의 위치를 설정합니다."
// pe.size: "Input field width (in characters)" => "입력 필드 너비(문자 단위)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "다음 행렬 열 또는 패널 질문의 값을 선택 ID로 사용합니다."
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "다음 행렬 열 또는 패널 질문의 값을 선택 텍스트로 사용합니다."
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "단일 선택 및 다중 선택 질문 유형에서 각 선택 옵션에는 ID와 표시 값이 있습니다. 이 설정은 ID를 제공해야 하는 행렬 열 또는 패널 질문을 지정합니다."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "단일 선택 및 다중 선택 질문 유형에서 각 선택 옵션에는 ID와 표시 값이 있습니다. 이 설정은 표시 텍스트를 제공해야 하는 행렬 열 또는 패널 질문을 지정합니다."
// pe.progressBarLocation: "Progress bar alignment" => "진행률 표시줄 맞춤"
// progressBarLocation.topbottom: "Top and bottom" => "위쪽 및 아래쪽"
// progressBarLocation.aboveheader: "Above the header" => "헤더 위"
// progressBarLocation.belowheader: "Below the header" => "헤더 아래"
// progressBarLocation.off: "Hidden" => "숨겨진"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "진행률 표시줄의 위치를 설정합니다. \"자동\" 값은 설문조사 헤더 위 또는 아래에 진행률 표시줄을 표시합니다."
// survey.readOnly: "Make the survey read-only" => "설문조사를 읽기 전용으로 설정"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "응답자가 설문조사를 작성하지 못하도록 하려면 선택합니다."
// paneldynamic.showNumber: "Number the panel" => "패널 번호 매기기"
// question.showNumber: "Number this question" => "이 질문에 번호를 매기십시오."
// pe.previewMode: "Preview mode" => "미리보기 모드"
// pe.gridLayoutEnabled: "Enable the grid layout" => "그리드 레이아웃 사용Enable the grid layout"
// pe.maskSettings: "Mask settings" => "마스크 설정"
// pe.detailErrorLocation: "Row expansion error message alignment" => "행 확장 오류 메시지 맞춤"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "세부 섹션에 중첩된 질문에 대한 오류 메시지의 위치를 설정합니다. \"Inherit\" 옵션은 \"Error message alignment\" 속성의 설정을 적용합니다."
// pe.gridLayoutColumns: "Grid layout columns" => "그리드 레이아웃 열"
// pe.startPageTitlePlaceholder: "Start Page" => "시작 페이지"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "유효 폭, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "질문 제목 너비, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "레이아웃 열이 아직 없습니다."
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "이 패널이 그리드 레이아웃 내에서 확장되는 열의 수를 지정합니다."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "이 테이블에서는 패널 내의 각 그리드 열을 구성할 수 있습니다. 행의 최대 요소 수를 기준으로 각 열의 너비 백분율을 자동으로 설정합니다. 그리드 레이아웃을 사용자 지정하려면 이러한 값을 수동으로 조정하고 각 열의 모든 질문에 대한 제목 너비를 정의하십시오."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator를 사용하면 양식 요소의 인라인 너비를 수동으로 조정하여 레이아웃을 제어할 수 있습니다. 이렇게 해도 원하는 결과가 나오지 않으면 열 기반 시스템을 사용하여 요소를 형성하는 구조체인 그리드 레이아웃을 활성화할 수 있습니다. 레이아웃 열을 구성하려면 페이지 또는 패널을 선택하고 \"질문 설정\" → \"그리드 열\" 테이블을 사용합니다. 질문의 열 수를 조정하려면 질문을 선택하고 \"레이아웃\" → \"열 범위\" 입력란에서 원하는 값을 설정합니다."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "이 질문이 그리드 레이아웃 내에서 얼마나 많은 열에 걸쳐 있는지 지정합니다."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "이 테이블을 사용하면 페이지의 각 그리드 열을 구성할 수 있습니다. 행의 최대 요소 수를 기준으로 각 열의 너비 백분율을 자동으로 설정합니다. 그리드 레이아웃을 사용자 지정하려면 이러한 값을 수동으로 조정하고 각 열의 모든 질문에 대한 제목 너비를 정의하십시오."

// ed.expandTooltip: "Expand" => "넓히다"
// ed.collapseTooltip: "Collapse" => "무너지다"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "예: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "모든 항목 레이블에 대해 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다."
// ed.zoom100Tooltip: "Zoom to 100%" => "100%로 확대/축소"
// ed.addLanguageTooltip: "Add Language" => "언어 추가"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "질문 주석에 대해 텍스트 영역에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "동적 텍스트에 대한 기본 표시 값"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "HTML 질문과 설문 요소의 동적 제목 및 설명에 표시되는 값으로, 질문 값이 비어 있을 때 표시됩니다."
// showQuestionNumbers.recursive: "Recursive numbering" => "재귀 번호 매기기"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "질문 제목 너비"
// pe.allowCustomChoices: "Allow custom choices" => "사용자 지정 선택 허용"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "질문 제목이 질문 상자의 왼쪽에 정렬될 때 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다."
// page.name: "A page ID that is not visible to respondents." => "응답자에게 표시되지 않는 페이지 ID입니다."
// page.description: "Type a page subtitle." => "페이지 부제목을 입력합니다."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "진행률 표시줄 또는 목차(TOC)의 탐색 단추에 표시되는 캡션입니다. 이 필드를 비워 두면 탐색 버튼에서 페이지 제목 또는 페이지 이름을 사용합니다. 진행률 표시줄 또는 TOC를 활성화하려면 \"설문 조사\" → \"탐색\"으로 이동합니다."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "드롭다운에서 원하는 옵션을 사용할 수 없는 경우 응답자가 자신의 선택 항목을 추가할 수 있도록 하려면 선택합니다. 사용자 지정 선택 항목은 현재 브라우저 세션 동안 일시적으로만 저장됩니다."