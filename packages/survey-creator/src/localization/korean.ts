import { editorLocalization, defaultStrings } from "../editorLocalization";

export var koreanStrings = {
  //survey templates
  survey: {
    edit: "편집",
    dropQuestion: "왼쪽 도구상자에서 질문을 여기에 놓으십시오.",
    copy: "복사",
    addToToolbox: "도구상자에 추가",
    deletePanel: "패널 삭제",
    deleteQuestion: "질문 삭제",
    convertTo: "다음으로 변경",
    drag: "항목 끌어오기"
  },
  //questionTypes
  qt: {
    default: "기본값",
    checkbox: "체크박스",
    comment: "설명",
    dropdown: "드롭다운",
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
    expression: "표현식"
  },
  //Strings in Editor
  ed: {
    survey: "설문지",
    settings: "설정",
    editSurvey: "설문지 편집",
    addNewPage: "새 페이지 추가",
    moveRight: "오른쪽으로 스크롤",
    moveLeft: "왼쪽으로 스크롤",
    deletePage: "페이지 삭제",
    editPage: "페이지 편집",
    edit: "편집",
    newPageName: "페이지",
    newQuestionName: "질문",
    newPanelName: "패널",
    testSurvey: "테스트 설문지",
    testSurveyAgain: "테스트 설문지 다시하기",
    testSurveyWidth: "설문지 너비: ",
    embedSurvey: "내장 설문지",
    saveSurvey: "설문지 저장",
    designer: "설문지 디자인",
    jsonEditor: "JSON 편집기",
    undo: "실행 취소",
    redo: "복원",
    options: "옵션",
    generateValidJSON: "JSON 데이터 생성",
    generateReadableJSON: "생성 JSON 데이터 읽기",
    toolbox: "도구상자",
    toolboxGeneralCategory: "일반",
    delSelObject: "선택한 객체 삭제",
    editSelObject: "선택한 객체 편집",
    correctJSON: "JSON 데이터를 수정하십시오.",
    surveyResults: "설문 결과: ",
    modified: "수정됨",
    saving: "저장중",
    saved: "저장됨"
  },
  //Property names in table headers
  pel: {
    isRequired: "필수입니까?"
  },
  //Property Editors
  pe: {
    apply: "적용",
    ok: "확인",
    cancel: "취소",
    reset: "재설정",
    close: "닫기",
    delete: "삭제",
    addNew: "새로 만들기",
    addItem: "항목을 추가하려면 클립하십시오.",
    removeAll: "모두 삭제",
    edit: "편집",
    itemValueEdit: "조건 충족 시 보기",
    editChoices: "선택사항 편집",
    move: "이동",
    empty: "<비어있음>",
    notEmpty: "<편집 값>",
    fastEntry: "빠른 입력",
    formEntry: "양식 입력",
    testService: "서비스 테스트",
    conditionSelectQuestion: "질문 선택...",
    conditionValueQuestionTitle: "값을 입력하거나 선택하십시오.",
    conditionButtonAdd: "추가",
    conditionButtonReplace: "바꾸기",
    conditionHelp:
      "불린 식을 입력하십시오. 질문 혹은 페이지를 계속 볼 수 있게 하려면 참값을 반환해야 합니다. 예를 들면: {질문1} = '값1' or ({질문2} * {질문4}  > 20 and {질문3} < 5)",
    expressionHelp:
      "식을 입력하십시오. 다음과 같은 질문 값에 접근하려면 중괄호를 이용하십시오: '{질문1} + {질문2}', '({가격}*{수량}) * (100 - {할인})'",
    aceEditorHelp: "ctrl+space를 눌러 완성된 수식에 대한 힌트를 얻으십시오",
    aceEditorRowTitle: "현재 행",
    aceEditorPanelTitle: "현재 패널",
    showMore: "자세한 내용은 설명서를 확인하십시오.",
    conditionShowMoreUrl:
      "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "유효 질문:",
    cellsEmptyRowsColumns: "최소한 하나의 열 또는 행이 있어야 합니다.",

    propertyIsEmpty: "값을 입력하십시오",
    value: "값",
    text: "텍스트",
    columnEdit: "열 편집: {0}",
    itemEdit: "항목 편집: {0}",

    url: "URL",
    path: "경로",
    valueName: "값 이름",
    titleName: "제목 이름",

    hasOther: "다른 항목이 있습니다",
    otherText: "기타 항목 텍스트",
    name: "이름",
    title: "제목",
    cellType: "셀 유형",
    colCount: "열 개수",
    choicesOrder: "항목 순서 선택",
    visible: "보입니까??",
    isRequired: "필수입니까?",
    startWithNewLine: "새 줄로 시작하겠습니까?",
    rows: "행 수",
    placeholder: "입력 자리 표시자 ",
    showPreview: "이미지 미리보기가 표시됩니까?",
    storeDataAsText: "파일 내용을 JSON 결과에 텍스트로 저장",
    maxSize: "최대 파일 크기(bytes)",
    imageHeight: "이미지 높이",
    imageWidth: "이미지 너비",
    rowCount: "행 수",
    columnsLocation: "열 위치",
    addRowLocation: "행 버튼 위치 추가",
    addRowText: "행 버튼 텍스트 추가",
    removeRowText: "행 버튼 텍스트 제거",
    minRateDescription: "최소 설명 길이",
    maxRateDescription: "최대 설명 길이",
    inputType: "입력 유형",
    optionsCaption: "옵션 캡션",
    defaultValue: "기본값",
    cellsDefaultRow: "기본 셀 텍스트",

    surveyEditorTitle: "설문지 설정 편집",
    qEditorTitle: "편집: {0}",

    //survey
    showTitle: "제목 표시/숨김",
    locale: "기본 언어",
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
    questionTitleTemplate:
      "질문 제목 템플릿입니다. 기본값: '{no}. {require} {title}'",
    questionErrorLocation: "질문 위치 오류",
    focusFirstQuestionAutomatic: "페이지 변경시 첫 번째 질문에 초점",
    questionsOrder: "페이지의 요소 순서",
    maxTimeToFinish: "설문 조사를 마칠 수있는 최대 시간",
    maxTimeToFinishPage: "설문 조사에서 페이지를 마칠 수있는 최대 시간",
    showTimerPanel: "타이머 패널 표시",
    showTimerPanelMode: "타이머 패널 모드 표시",
    renderMode: "렌더링 모드",
    allowAddPanel: "패널 추가 허용",
    allowRemovePanel: "패널 제거 허용",
    panelAddText: "패널 텍스트 추가",
    panelRemoveText: "패널 텍스트 삭제",
    isSinglePage: "한 페이지에 모든 요소 표시",

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
      rateValues: "길이 값",
      choicesByUrl: "웹에서 선택",
      matrixChoices: "기본 선택",
      multipleTextItems: "텍스트 입력",
      validators: "유효성 검사기",
      navigation: "탐색",
      question: "질문",
      completedHtml: "완료된 HTML",
      loadingHtml: "HTML 로드 중",
      timer: "타이머 / 퀴즈",
      triggers: "트리거",
      templateTitle: "템플릿 제목"
    },
    editProperty: "편집 속성 '{0}'",
    items: "[ 항목: {0} ]",

    enterNewValue: "값을 입력하십시오.",
    noquestions: "설문 조사에는 어떤 질문도 없습니다.",
    createtrigger: "트리거를 만드십시오",
    triggerOn: "트리거 켜기",
    triggerMakePagesVisible: "페이지 표시:",
    triggerMakeQuestionsVisible: "요소 표시:",
    triggerCompleteText: "조건 충족 시 설문 조사를 작성하십시오.",
    triggerNotSet: "트리거가 설정되지 않았습니다.",
    triggerRunIf: "다음 조건 충족 시 실행",
    triggerSetToName: "다음 값 변경: ",
    triggerSetValue: "다음으로 수정: ",
    triggerIsVariable: "변수를 설문 결과에 넣지 마십시오."
  },
  //Property values
  pv: {
    true: "참",
    false: "거짓",
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
    decimal: "진수",
    currency: "화폐",
    percent: "퍼센트",
    firstExpanded: "우선 확장",
    off: "꺼짐",
    onPanel: "패널에서",
    onSurvey: "설문에서",
    list: "목록",
    progressTop: "상단 진행률",
    progressBottom: "하단 진행률",
    progressTopBottom: "상하단 진행률",
    horizontal: "가로",
    vertical: "세로",
    top: "위",
    bottom: "아래",
    topBottom: "위아래",
    left: "왼쪽",
    color: "색상",
    date: "날짜",
    datetime: "날짜/시간",
    "datetime-local": "현지 날짜/시간",
    email: "이메일",
    month: "월",
    number: "숫자",
    password: "패스워드",
    range: "범위",
    tel: "tel",
    text: "텍스트",
    time: "시간",
    url: "URL",
    week: "주",
    hidden: "숨김",
    on: "켜기",
    onPage: "페이지 켜기",
    edit: "편집",
    display: "디스플레이",
    onComplete: "완료",
    onHidden: "숨김",
    all: "모두",
    page: "페이지",
    survey: "설문지",
    onNextPage: "다음 페이지로",
    onValueChanged: "값 변경"
  },
  //Operators
  op: {
    empty: "비어있습니다",
    notempty: "비어있지 않습니다",
    equal: "같습니다",
    notequal: "같지 않습니다",
    contains: "포함합니다",
    notcontains: "포함하지 않습니다",
    greater: "큰",
    less: "작은",
    greaterorequal: "크거나 같음",
    lessorequal: "작거나 같음"
  },
  //Embed window
  ew: {
    angular: "Angular 버전 사용",
    jquery: "jQuery 버전 사용",
    knockout: "Knockout 버전 사용",
    react: "React 버전 사용",
    vue: "Vue 버전 사용",
    bootstrap: "부트 스트랩 프레임",
    standard: "부트 스트랩 없음",
    showOnPage: "페이지에서 설문조사 보기",
    showInWindow: "윈도우 창에서 설문조사 보기",
    loadFromServer: "서버에서 설문조사 JSON 실행",
    titleScript: "스크립트 및 스타일",
    titleHtml: "HTML",
    titleJavaScript: "자바스크립트"
  },
  //Test Survey
  ts: {
    selectPage: "테스트 할 페이지를 선택하십시오:"
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
    visibletrigger: "선명도 변경"
  },
  //Properties
  p: {
    name: "이름",
    title: {
      name: "제목",
      title: "'이름'과 같은 경우 비워 둡니다."
    },

    navigationButtonsVisibility: "탐색 버튼 선명도",
    questionsOrder: "질문 순서",
    maxTimeToFinish: "최대 완료 시간",

    visible: "보기",
    visibleIf: "조건 충족시 보기",
    questionTitleLocation: "질문 제목 위치",
    description: "설명",
    state: "state",
    isRequired: "필수",
    indent: "들여쓰기",
    requiredErrorText: "필수 오류 텍스트",
    startWithNewLine: "새 줄로 시작",
    innerIndent: "안으로 들여쓰기",
    page: "페이지",

    width: "너비",

    commentText: "메모 텍스트",
    valueName: "이름값",
    enableIf: "조건 충족시 허가",
    defaultValue: "기본값",
    correctAnswer: "답안 수정",
    readOnly: "읽기 전용",
    validators: "유효성 검사기",
    titleLocation: "제목 위치",

    hasComment: "답변",
    hasOther: "다른 답변 허용",
    choices: "선택",
    choicesOrder: "기타 선택",
    choicesByUrl: "URL을 통한 선택",
    otherText: "기타 텍스트",
    otherErrorText: "기타 오류 텍스트",
    storeOthersAsComment: "기타 답변 저장",

    label: "라벨",
    showTitle: "제목 표시",
    valueTrue: "참값",
    valueFalse: "거짓값",

    cols: "열",
    rows: "행",
    placeholder: "자리 표시자",

    optionsCaption: "옵션 캡션",

    expression: "표현식",
    format: "포맷",
    displayStyle: "디스플레이 스타일",
    currency: "화폐",
    useGrouping: "그룹 사용",

    showPreview: "미리보기 보기",
    allowMultiple: "다수 허용",
    imageHeight: "이미지 높이",
    imageWidth: "이미지 너비",
    storeDataAsText: "텍스트로 데이터 저장",
    maxSize: "최대 크기",

    html: "HTML",

    columns: "열",
    cells: "셀",
    isAllRowRequired: "모두 필수 행입니까",

    horizontalScroll: "가로 스크롤바",
    cellType: "셀 유형",
    columnsLocation: "열 위치",
    columnColCount: "열 개수",
    columnMinWidth: "열 최소 너비",

    rowCount: "행 수",
    minRowCount: "최소 행 개수",
    maxRowCount: "최대 행 개수",
    keyName: "keyName",
    keyDuplicationError: "주요 복제 에러",
    confirmDelete: "삭제 확인",
    confirmDeleteText: "텍스트 삭제 확인",
    addRowLocation: "행 위치 추가",
    addRowText: "행 텍스트 추가",
    removeRowText: "행 텍스트 제거",

    items: "항목",
    itemSize: "항목 크기",
    colCount: "열 개수",

    templateTitle: "템플릿 이름",
    templateDescription: "템플릿 설명",
    allowAddPanel: "패널 추가 허용",
    allowRemovePanel: "패널 제거 허용",
    panelCount: "패널 개수",
    minPanelCount: "최소 패널 개수",
    maxPanelCount: "최대 패널 개수",
    panelsState: "panelsState",
    panelAddText: "패널 텍스트 추가",
    panelRemoveText: "패널 텍스트 제거",
    panelPrevText: "이전 패널 텍스트",
    panelNextText: "다음 패널 텍스트",
    showQuestionNumbers: "질문 개수 보기",
    showRangeInProgress: "진행중인 범위 보기",
    renderMode: "renderMode",
    templateTitleLocation: "템플릿 이름 위치",

    rateValues: "길이값",
    rateMin: "최소 길이",
    rateMax: "최대 길이",
    rateStep: "rateStep",
    minRateDescription: "최소 설명 길이",
    maxRateDescription: "최대 설명 길이",

    inputType: "입력 유형",
    size: "크기",

    locale: "로컬",
    focusFirstQuestionAutomatic: "첫 질문 자동 초점",
    completedHtml: "완료된 HTML",
    completedBeforeHtml: "완료된 이전 HTML",
    loadingHtml: "HTML 로드",
    triggers: "트리거",
    cookieName: "쿠키 이름",
    sendResultOnPageNext: "현 페이지로 결과 전송",
    showNavigationButtons: "탐색 버튼 보기",
    showPrevButton: "뒤로가기 버튼 보기",
    showPageTitles: "페이지 제목 보기",
    showCompletedPage: "완료 페이지 보기",
    showPageNumbers: "페이지 수 보기",
    questionErrorLocation: "질문 오류 위치",
    showProgressBar: "진행 상태바 보기",
    mode: "모드",
    goNextPageAutomatic: "다음 페이지로 자동으로 넘어가기",
    checkErrorsMode: "오류 모드 확인",
    clearInvisibleValues: "보이지 않는 변수 제거",
    startSurveyText: "설문 테스트 시작",
    pagePrevText: "이전 텍스트 페이지",
    pageNextText: "다음 텍스트 페이지",
    completeText: "완료 텍스트",
    requiredText: "필수 텍스트",
    questionStartIndex: "질문 시작 색인",
    questionTitleTemplate: "질문 제목 템플릿",
    firstPageIsStarted: "첫 페이지에서 시작",
    isSinglePage: "단일 페이지",
    maxTimeToFinishPage: "페이지 종료 최대 시간",
    showTimerPanel: "타이머 패널 보기",
    showTimerPanelMode: "타이머 패널 모드 보기",

    text: "텍스트",
    minValue: "최소값",
    maxValue: "최대값",
    minLength: "최소 길이",
    maxLength: "최대 길이",
    allowDigits: "숫자 허용",
    minCount: "최소 개수",
    maxCount: "최대 개수",
    regex: "정규 표현식"
  }
};
editorLocalization.locales["ko"] = koreanStrings;
