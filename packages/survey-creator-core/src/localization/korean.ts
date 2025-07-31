import { setupLocale } from "survey-creator-core";

export var koreanStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "편집",
    // [Auto-translated] "Watch and learn how to create surveys"
    externalHelpLink: "설문조사를 만드는 방법을 보고 알아보세요.",
    // [Auto-translated] "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "왼쪽 도구상자에서 질문을 여기에 놓으십시오.",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "설문 조사의 흐름을 사용자 지정하는 규칙을 만듭니다.",
    // "Copy"
    copy: "복사",
    // [Auto-translated] "Duplicate"
    duplicate: "복사하다",
    // "Add to toolbox"
    addToToolbox: "도구상자에 추가",
    // "Delete Panel"
    deletePanel: "패널 삭제",
    // "Delete Question"
    deleteQuestion: "질문 삭제",
    // "Convert to"
    convertTo: "다음으로 변경",
    // "Drag element"
    drag: "항목 끌어오기"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "테스트 설문지",
    // "Themes"
    theme: "테마",
    // "Translations"
    translation: "번역",
    // "Designer"
    designer: "설문지 디자인",
    // "JSON Editor"
    json: "JSON 편집기",
    // [Auto-translated] "Logic"
    logic: "논리학"
  },
  // Question types
  qt: {
    // "Default"
    default: "기본값",
    // "Checkboxes"
    checkbox: "체크박스",
    // "Long Text"
    comment: "설명",
    // [Auto-translated] "Image Picker"
    imagepicker: "이미지 선택기",
    // [Auto-translated] "Ranking"
    ranking: "순위",
    // [Auto-translated] "Image"
    image: "이미지",
    // "Dropdown"
    dropdown: "드롭다운",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "다중 선택 드롭다운",
    // "File Upload"
    file: "파일",
    // "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "행렬 (단일 선택)",
    // "Multi-Select Matrix"
    matrixdropdown: "행렬 (복수 선택)",
    // "Dynamic Matrix"
    matrixdynamic: "행렬 (동적 행)",
    // "Multiple Textboxes"
    multipletext: "텍스트 상자 그룹",
    // "Panel"
    panel: "패널",
    // "Dynamic Panel"
    paneldynamic: "패널 (동적 패널)",
    // "Radio Button Group"
    radiogroup: "라디오 그룹",
    // "Rating Scale"
    rating: "등급",
    // [Auto-translated] "Slider"
    slider: "슬라이더",
    // "Single-Line Input"
    text: "텍스트 상자",
    // "Yes/No (Boolean)"
    boolean: "불린(boolean)",
    // "Expression (read-only)"
    expression: "표현식",
    // [Auto-translated] "Signature"
    signaturepad: "서명",
    // [Auto-translated] "Button Group"
    buttongroup: "단추 그룹"
  },
  toolboxCategories: {
    // "General"
    general: "일반",
    // "Choice Questions"
    choice: "선택 질문",
    // "Text Input Questions"
    text: "텍스트 입력 질문",
    // "Containers"
    containers: "컨테이너",
    // "Matrix Questions"
    matrix: "행렬 질문",
    // "Misc"
    misc: "기타"
  },
  // Strings in SurveyJS Creator
  ed: {
    // [Auto-translated] "Default ({0})"
    defaultLocale: "기본값({0})",
    // "Survey"
    survey: "설문지",
    // "Settings"
    settings: "설정",
    // [Auto-translated] "Open settings"
    settingsTooltip: "설정 열기",
    // [Auto-translated] "Survey Settings"
    surveySettings: "설문조사 설정",
    // [Auto-translated] "Open survey settings"
    surveySettingsTooltip: "설문조사 설정",
    // [Auto-translated] "Theme Settings"
    themeSettings: "테마 설정",
    // [Auto-translated] "Open theme settings"
    themeSettingsTooltip: "테마 설정",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "크리에이터 설정",
    // [Auto-translated] "Show Panel"
    showPanel: "패널 표시",
    // [Auto-translated] "Hide Panel"
    hidePanel: "패널 숨기기",
    // [Auto-translated] "Select previous"
    prevSelected: "이전 선택",
    // [Auto-translated] "Select next"
    nextSelected: "다음을 선택합니다",
    // [Auto-translated] "Focus previous"
    prevFocus: "포커스 이전",
    // [Auto-translated] "Focus next"
    nextFocus: "다음 초점",
    // [Auto-translated] "Survey"
    surveyTypeName: "조사",
    // [Auto-translated] "Page"
    pageTypeName: "페이지",
    // [Auto-translated] "Panel"
    panelTypeName: "패널",
    // [Auto-translated] "Question"
    questionTypeName: "질문",
    // [Auto-translated] "Column"
    columnTypeName: "열",
    // "Add New Page"
    addNewPage: "새 페이지 추가",
    // "Scroll to the Right"
    moveRight: "오른쪽으로 스크롤",
    // "Scroll to the Left"
    moveLeft: "왼쪽으로 스크롤",
    // "Delete Page"
    deletePage: "페이지 삭제",
    // "Edit Page"
    editPage: "페이지 편집",
    // "Edit"
    edit: "편집",
    // "page"
    newPageName: "페이지",
    // "question"
    newQuestionName: "질문",
    // "panel"
    newPanelName: "패널",
    // [Auto-translated] "text"
    newTextItemName: "문자 메시지",
    // [Auto-translated] "Default"
    defaultV2Theme: "기본값",
    // [Auto-translated] "Modern"
    modernTheme: "현대의",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "기본값(레거시)",
    // "Preview Survey Again"
    testSurveyAgain: "테스트 설문지 다시하기",
    // "Survey width: "
    testSurveyWidth: "설문지 너비: ",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "다음으로 이동해야 했습니다.",
    // "Save Survey"
    saveSurvey: "설문지 저장",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "설문조사 저장",
    // [Auto-translated] "Save Theme"
    saveTheme: "테마 저장",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "테마 저장",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "오류 숨기기",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "오류 표시",
    // "Undo"
    undo: "실행 취소",
    // "Redo"
    redo: "복원",
    // [Auto-translated] "Undo last change"
    undoTooltip: "마지막 변경 사항 실행 취소",
    // [Auto-translated] "Redo the change"
    redoTooltip: "변경 내용 다시 실행",
    // [Auto-translated] "Expand"
    expandTooltip: "넓히다",
    // [Auto-translated] "Collapse"
    collapseTooltip: "무너지다",
    // "Expand All"
    expandAllTooltip: "모두 확장",
    // "Collapse All"
    collapseAllTooltip: "모두 축소",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "확대",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "100%로 확대/축소",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "축소",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "질문의 확장/축소 상태 잠금",
    // [Auto-translated] "Show more"
    showMoreChoices: "더 보기",
    // [Auto-translated] "Show less"
    showLessChoices: "간략하게 표시",
    // [Auto-translated] "Copy"
    copy: "복사",
    // [Auto-translated] "Cut"
    cut: "삭감",
    // [Auto-translated] "Paste"
    paste: "붙여넣기",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "클립보드에 선택 항목 복사",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "선택 영역을 클립보드로 잘라내기",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "클립보드에서 붙여넣기",
    // "Options"
    options: "옵션",
    // "Generate Valid JSON"
    generateValidJSON: "JSON 데이터 생성",
    // "Generate Readable JSON"
    generateReadableJSON: "생성 JSON 데이터 읽기",
    // "Toolbox"
    toolbox: "도구상자",
    // [Auto-translated] "Properties"
    "property-grid": "속성",
    // [Auto-translated] "Search"
    toolboxSearch: "검색",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "검색하려면 입력...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "결과를 찾을 수 없습니다.",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "검색하려면 입력...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "결과를 찾을 수 없습니다.",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "양식 구성 시작",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "범주 아이콘을 클릭하여 설문조사 설정을 탐색합니다. 디자인 화면에 설문 조사 요소를 추가하면 추가 설정을 사용할 수 있게 됩니다.",
    // "Please correct JSON."
    correctJSON: "JSON 데이터를 수정하십시오.",
    // "Survey Results "
    surveyResults: "설문 결과: ",
    // [Auto-translated] "As Table"
    surveyResultsTable: "테이블로",
    // [Auto-translated] "As JSON"
    surveyResultsJson: "JSON으로",
    // [Auto-translated] "Question Title"
    resultsTitle: "질문 제목",
    // [Auto-translated] "Question Name"
    resultsName: "질문 이름",
    // [Auto-translated] "Answer Value"
    resultsValue: "답변 값",
    // [Auto-translated] "Display Value"
    resultsDisplayValue: "표시 값",
    // "Modified"
    modified: "수정됨",
    // "Saving"
    saving: "저장중",
    // "Saved"
    saved: "저장됨",
    // [Auto-translated] "Error"
    propertyEditorError: "오류",
    // [Auto-translated] "Error! Editor content is not saved."
    saveError: "오류! 편집기 컨텐츠는 저장되지 않습니다.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "언어 설정",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "테마 설정",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "언어 추가",
    // [Auto-translated] "Languages"
    translationLanguages: "언어들",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "이 언어에 대한 모든 문자열을 삭제하시겠습니까?",
    // [Auto-translated] "Select language to translate"
    translationAddLanguage: "번역할 언어 선택",
    // [Auto-translated] "All Strings"
    translationShowAllStrings: "모든 문자열",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "사용된 문자열만",
    // [Auto-translated] "All Pages"
    translationShowAllPages: "모든 페이지",
    // [Auto-translated] "No strings to translate. Please, change the filter."
    translationNoStrings: "번역할 문자열이 없습니다. 필터를 교체하십시오.",
    // [Auto-translated] "Export to CSV"
    translationExportToSCVButton: "CSV로 내보내기",
    // [Auto-translated] "Import from CSV"
    translationImportFromSCVButton: "CSV에서 가져오기",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "모두 자동 번역",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "언어 선택(원문-번역): ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "번역되지 않은 문자열",
    // [Auto-translated] "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "{0} 기본 로캘과 병합",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "번역...",
    // [Auto-translated] "Source: "
    translationSource: "근원: ",
    // [Auto-translated] "Target: "
    translationTarget: "과녁: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube 링크는 지원되지 않습니다.",
    // [Auto-translated] "Export"
    themeExportButton: "수출",
    // [Auto-translated] "Import"
    themeImportButton: "수입",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "수출",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "수입",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "클립보드에 복사",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "테마 설정을 기본값으로 재설정",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "테마를 재설정 하시겠습니까? 모든 사용자 지정이 손실됩니다.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "예, 테마를 재설정합니다.",
    // [Auto-translated] "Bold"
    bold: "대담한",
    // [Auto-translated] "Italic"
    italic: "이탤릭체",
    // [Auto-translated] "Underline"
    underline: "밑줄",
    // [Auto-translated] "Add Question"
    addNewQuestion: "질문 추가",
    // [Auto-translated] "Select page..."
    selectPage: "페이지 선택...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "선택 항목은 다음에서 복사됩니다.",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "선택 항목은 웹 서비스에서 로드됩니다.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "설정으로 바로 가기",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "로드된 선택 옵션 미리보기",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML 콘텐츠가 여기에 있습니다.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "도구 상자에서 질문을 삭제하세요.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "설문 조사가 비어 있습니다. 도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "페이지가 비어 있습니다. 도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "여기에 이미지를 끌어다 놓거나 아래 버튼을 클릭하고 업로드할 이미지를 선택하세요.",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "아래의 \"질문 추가\" 버튼을 클릭하여 양식 작성을 시작하십시오.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "양식이 비어 있습니다.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "양식이 비어 있습니다.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "도구 상자에서 요소를 드래그하거나 아래 버튼을 클릭합니다.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "미리보기 없음",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "미리보기 없음",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "설문조사에 가시적인 요소가 포함되어 있지 않습니다.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "설문조사에 가시적인 요소가 포함되어 있지 않습니다.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "번역할 문자열이 없습니다.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "번역할 문자열이 없습니다.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "양식에 요소를 추가하거나 도구 모음에서 문자열 필터를 변경합니다.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "양식에 요소를 추가하거나 도구 모음에서 문자열 필터를 변경합니다.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "아래의 \"질문 추가\" 버튼을 클릭하여 페이지에 새 요소를 추가하세요.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "아래의 \"질문 추가\" 버튼을 클릭하여 패널에 새 요소를 추가합니다.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "아래 버튼을 클릭하고 업로드할 이미지를 선택하세요.",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "이미지 선택",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "{0} 추가", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[로고]",
    // [Auto-translated] "Item "
    choices_Item: "항목 ",
    // [Auto-translated] "Select a file"
    selectFile: "파일 선택",
    // [Auto-translated] "Remove the file"
    removeFile: "파일 제거",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "새 규칙 추가",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "설문 조사의 흐름을 사용자 지정하는 규칙을 만듭니다.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "논리적 규칙 없음",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "논리적 규칙 없음",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "설문조사의 흐름을 사용자 지정하는 규칙을 만듭니다.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "설문조사의 흐름을 사용자 지정하는 규칙을 만듭니다.",
      // [Auto-translated] "Show (hide) page"
      page_visibilityName: "페이지 표시(숨기기)",
      // [Auto-translated] "Enable (disable) page"
      page_enableName: "사용(사용 안 함) 페이지",
      // [Auto-translated] "Make page required"
      page_requireName: "페이지를 필수로 설정",
      // [Auto-translated] "Show (hide) panel"
      panel_visibilityName: "표시(숨기기) 패널",
      // [Auto-translated] "Enable (disable) panel"
      panel_enableName: "활성화(비활성화) 패널",
      // [Auto-translated] "Make page required"
      panel_requireName: "페이지를 필수로 설정",
      // [Auto-translated] "Show (hide) question"
      question_visibilityName: "질문 표시(숨기기)",
      // [Auto-translated] "Enable (disable) question"
      question_enableName: "사용(사용 안 함) 질문",
      // [Auto-translated] "Make question required"
      question_requireName: "질문 필수 항목 만들기",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "질문 값 재설정",
      // [Auto-translated] "Set question value"
      question_setValueName: "질문 값 설정",
      // [Auto-translated] "Show (hide) column"
      column_visibilityName: "열 표시(숨기기)",
      // [Auto-translated] "Enable (disable) column"
      column_enableName: "사용(사용 안 함) 열",
      // [Auto-translated] "Make column required"
      column_requireName: "열을 필수로 설정",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "열 값 재설정",
      // [Auto-translated] "Set column value"
      column_setValueName: "열 값 설정",
      // [Auto-translated] "Complete survey"
      trigger_completeName: "설문 조사 완료",
      // [Auto-translated] "Set answer"
      trigger_setvalueName: "정답 설정",
      // [Auto-translated] "Copy answer"
      trigger_copyvalueName: "답변 복사",
      // [Auto-translated] "Skip to question"
      trigger_skipName: "질문으로 건너뛰기",
      // [Auto-translated] "Run expression"
      trigger_runExpressionName: "표현식 실행",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "\"설문조사 완료\" 페이지 마크업 설정",
      // [Auto-translated] "Make the page visible when the logic expression returns true. Otherwise keep it invisible."
      page_visibilityDescription: "논리 표현식이 true를 반환할 때 페이지가 표시되도록 합니다. 그렇지 않으면 보이지 않게 유지하십시오.",
      // [Auto-translated] "Make the panel visible when the logic expression returns true. Otherwise keep it invisible."
      panel_visibilityDescription: "논리 표현식이 true를 반환할 때 패널이 표시되도록 합니다. 그렇지 않으면 보이지 않게 유지하십시오.",
      // [Auto-translated] "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled."
      panel_enableDescription: "패널과 그 안의 모든 요소는 논리 표현식이 true를 반환할 때 활성화됩니다. 그렇지 않으면 비활성화 상태로 유지하십시오.",
      // [Auto-translated] "Make the question visible when the logic expression returns true. Otherwise keep it invisible."
      question_visibilityDescription: "논리 표현식이 true를 반환할 때 질문을 표시합니다. 그렇지 않으면 보이지 않게 유지하십시오.",
      // [Auto-translated] "Make the question enable when the logic expression returns true. Otherwise keep it disabled."
      question_enableDescription: "논리 표현식이 true를 반환할 때 질문을 활성화합니다. 그렇지 않으면 비활성화 상태로 유지하십시오.",
      // [Auto-translated] "Question becomes required when the logic expression returns true."
      question_requireDescription: "논리 표현식이 true를 반환할 때 질문이 필요합니다.",
      // [Auto-translated] "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'."
      trigger_completeDescription: "논리 표현식이 true를 반환하면 설문 조사가 완료되고 최종 사용자에게 '감사 페이지'가 표시됩니다.",
      // [Auto-translated] "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question."
      trigger_setvalueDescription: "논리식에 사용된 질문 값이 변경되고 논리식이 true를 반환하면 값이 선택한 질문으로 설정됩니다.",
      // [Auto-translated] "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question."
      trigger_copyvalueDescription: "논리 표현식에 사용된 질문 값이 변경되고 논리 표현식이 true를 반환하면 선택한 한 질문의 값이 선택한 다른 질문에 복사됩니다.",
      // [Auto-translated] "When the logic expression returns true then the survey skip to / focus the selected question."
      trigger_skipDescription: "논리 표현식이 true를 반환하면 설문 조사는 선택한 질문으로 건너 뜁니다.",
      // [Auto-translated] "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question"
      trigger_runExpressionDescription: "논리 표현식이 true를 반환하면 사용자 지정 표현식이 수행됩니다. 선택적으로 이 표현식 결과를 선택한 질문으로 설정할 수 있습니다",
      // [Auto-translated] "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one."
      completedHtmlOnConditionDescription: "논리 표현식이 true를 반환하면 'Thank you page'의 기본 텍스트가 지정된 텍스트로 변경됩니다.",
      // [Auto-translated] "When expression: '{0}' returns true"
      itemExpressionText: "표현식: '{0}'가 true를 반환하는 경우", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "새 규칙",
      // [Auto-translated] "make page {0} visible"
      page_visibilityText: "페이지 {0} 표시", // {0} page name
      // [Auto-translated] "make panel {0} visible"
      panel_visibilityText: "패널 {0} 표시", // {0} panel name
      // [Auto-translated] "make panel {0} enable"
      panel_enableText: "패널을 활성화{0}", // {0} panel name
      // [Auto-translated] "make question {0} visible"
      question_visibilityText: "질문 {0} 표시", // {0} question name
      // [Auto-translated] "make question {0} enable"
      question_enableText: "질문 {0} 사용 설정", // {0} question name
      // [Auto-translated] "make question {0} required"
      question_requireText: "질문 {0} 필수", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "질문에 대한 재설정 값: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "할당 값: {1} 질문: {0}",
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "질문의 열 {0} {1} 표시", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "질문의 열 {0} {1} 사용하도록 설정", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "질문의 열 {0} {1} 필수", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "열의 셀 값 재설정: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "셀 값 할당 : {1} 열 : {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] " An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: " 결과가 대상 질문에 할당되는 식입니다.",
      // [Auto-translated] "survey becomes completed"
      trigger_completeText: "조사가 완료됩니다",
      // [Auto-translated] "set into question: {0} value {1}"
      trigger_setvalueText: "질문으로 설정: {0} 값 {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "명확한 질문 값: {0}", // {0} question name
      // [Auto-translated] "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "질문으로 복사: 질문 {1}의 {0} 값", // {0} and {1} question names
      // [Auto-translated] "survey skip to the question {0}"
      trigger_skipText: "설문 조사 질문으로 건너 뛰기 {0}", // {0} question name
      // [Auto-translated] "run expression: '{0}'"
      trigger_runExpressionText1: "실행 식: '{0}'", // {0} the expression
      // [Auto-translated] " and set its result into question: {0}"
      trigger_runExpressionText2: " 그 결과에 의문을 제기하십시오 : {0}", // {0} question name
      // [Auto-translated] "show custom text for the 'Thank you page'."
      completedHtmlOnConditionText: "'감사 페이지'에 대한 사용자 지정 텍스트를 표시합니다.",
      // [Auto-translated] "All Questions"
      showAllQuestions: "모든 질문",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "모든 작업 유형",
      // [Auto-translated] "Condition(s)"
      conditions: "조건",
      // [Auto-translated] "Action(s)"
      actions: "작업",
      // [Auto-translated] "Define condition(s)"
      expressionEditorTitle: "조건 정의",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "작업 정의",
      // [Auto-translated] "Delete Action"
      deleteAction: "삭제 작업",
      // [Auto-translated] "Add Action"
      addNewAction: "작업 추가",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "작업 선택...",
      // [Auto-translated] "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "논리 표현식이 비어 있거나 올바르지 않습니다. 수정해 주세요.",
      // [Auto-translated] "Please, add at least one action."
      noActionError: "하나 이상의 작업을 추가하십시오.",
      // [Auto-translated] "Please, fix problems in your action(s)."
      actionInvalid: "귀하의 행동에서 문제를 해결하십시오.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "논리적 규칙이 불완전합니다.",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "일부 논리적 규칙을 완료하지 않았습니다. 지금 탭을 나가면 변경 내용이 손실됩니다. 변경을 완료하지 않고 탭을 종료하시겠습니까?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "예",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "아니요, 규칙을 완료하고 싶습니다."
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "패널 이름",
      // [Auto-translated] "Panel title"
      title: "패널 제목",
      // [Auto-translated] "Panel description"
      description: "패널 설명",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "다음과 같은 경우 패널을 표시합니다.",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "다음과 같은 경우 패널을 필수로 만듭니다.",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "패널 내의 질문 순서",
      // [Auto-translated] "Repositions the panel to the end of a selected page."
      page: "상위 페이지",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "새 줄에 패널 표시",
      // [Auto-translated] "Panel expand state"
      state: "패널 축소 상태",
      // [Auto-translated] "Width (in CSS-accepted values)"
      width: "인라인 패널 너비",
      // [Auto-translated] "Minimum width (in CSS-accepted values)"
      minWidth: "최소 패널 너비",
      // [Auto-translated] "Maximum width (in CSS-accepted values)"
      maxWidth: "최대 패널 너비",
      // [Auto-translated] "Show panel number"
      showNumber: "이 패널에 번호 매기기"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Ex.: 30%"
      effectiveWidth: "유효 폭, %",
      // [Auto-translated] "Question title width"
      questionTitleWidth: "질문 제목 너비, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "패널 이름",
      // [Auto-translated] "Panel title"
      title: "패널 제목",
      // [Auto-translated] "Panel description"
      description: "패널 설명",
      // [Auto-translated] "Entry display mode"
      displayMode: "엔트리 디스플레이 모드",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "다음과 같은 경우 패널을 표시합니다.",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "다음과 같은 경우 패널을 필수로 만듭니다.",
      // [Auto-translated] "Move the panel to page"
      page: "패널을 페이지로 이동",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "새 줄에 패널 표시",
      // [Auto-translated] "Panel collapse state"
      state: "패널 축소 상태",
      // [Auto-translated] "Inline panel width"
      width: "인라인 패널 너비",
      // [Auto-translated] "Minimum panel width"
      minWidth: "최소 패널 너비",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "최대 패널 너비",
      // [Auto-translated] "Confirm row removal"
      confirmDelete: "패널 삭제 확인",
      // [Auto-translated] "Description template"
      templateDescription: "패널 설명 패턴",
      // [Auto-translated] "Title template"
      templateTitle: "패널 제목 패턴",
      // [Auto-translated] "Empty entries text"
      noEntriesText: "빈 패널 텍스트",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "탭 제목 패턴",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "탭 제목 자리 표시자",
      // [Auto-translated] "Make an individual panel visible if"
      templateVisibleIf: "다음과 같은 경우 개별 패널을 표시합니다.",
      // [Auto-translated] "Number the panel"
      showNumber: "패널 번호 매기기",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "패널 제목 정렬",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "패널 설명 정렬",
      // [Auto-translated] "Question title location"
      templateQuestionTitleLocation: "질문 제목 정렬",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "질문 제목 너비",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "오류 메시지 맞춤",
      // [Auto-translated] "New panel location"
      newPanelPosition: "새 패널 위치",
      // [Auto-translated] "Show progress bar"
      showRangeInProgress: "진행률 표시줄 표시",
      // [Auto-translated] "Key column"
      keyName: "다음 질문에서 중복 응답 방지"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "질문 이름",
      // [Auto-translated] "Question title"
      title: "질문 제목",
      // [Auto-translated] "Question description"
      description: "질문 설명",
      // [Auto-translated] "Show the title and description"
      showTitle: "제목 및 설명 표시",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "다음과 같은 경우 질문을 표시합니다.",
      // [Auto-translated] "Make the question required if"
      requiredIf: "다음과 같은 경우 질문을 필수로 만듭니다.",
      // [Auto-translated] "Parent page"
      page: "상위 페이지",
      // [Auto-translated] "Question box collapse state"
      state: "질문 상자 축소 상태",
      // [Auto-translated] "Number this question"
      showNumber: "이 질문에 번호를 매기십시오.",
      // [Auto-translated] "Question title alignment"
      titleLocation: "질문 제목 정렬",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "질문 설명 정렬",
      // [Auto-translated] "Error message alignment"
      errorLocation: "오류 메시지 맞춤",
      // [Auto-translated] "Add indents"
      indent: "내부 들여쓰기 늘리기",
      // [Auto-translated] "Inline question width"
      width: "인라인 질문 너비",
      // [Auto-translated] "Minimum question width"
      minWidth: "최소 질문 너비",
      // [Auto-translated] "Maximum question width"
      maxWidth: "최대 질문 너비",
      // [Auto-translated] "Update text question value"
      textUpdateMode: "입력 필드 값 업데이트"
    },
    signaturepad: {
      // [Auto-translated] "Signature width"
      signatureWidth: "서명 영역 너비",
      // [Auto-translated] "Signature height"
      signatureHeight: "서명 영역 높이",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "서명 영역 자동 크기 조정",
      // [Auto-translated] "Show the placeholder"
      showPlaceholder: "자리 표시자 표시",
      // [Auto-translated] "Placeholder text"
      placeholder: "자리 표시자 텍스트",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "읽기 전용 또는 미리 보기 모드의 자리 표시자 텍스트",
      // [Auto-translated] "Show the Clear button"
      allowClear: "서명 영역 내에 지우기 단추 표시",
      // [Auto-translated] "Minimum pen width"
      penMinWidth: "최소 펜 너비",
      // [Auto-translated] "Maximum pen width"
      penMaxWidth: "최대 펜 너비",
      // [Auto-translated] "Stroke color"
      penColor: "획 색상"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "입력 필드 높이(줄)"
    },
    // "Question numbering"
    showQuestionNumbers: "질문 번호 표시",
    // "Question indexing type"
    questionStartIndex: "질문 시작 색인 (1, 2 또는 'A', 'a')",
    // [Auto-translated] "Expression"
    expression: {
      // [Auto-translated] "Expression name"
      name: "표현식 이름",
      // [Auto-translated] "Expression title"
      title: "표현식 제목",
      // [Auto-translated] "Expression description"
      description: "표현식 설명",
      // [Auto-translated] "Expression"
      expression: "식"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "식"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "식"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Title"
      title: "타이틀",
      // [Auto-translated] "Survey description"
      description: "설문조사 설명",
      // [Auto-translated] "Read-only"
      readOnly: "설문조사를 읽기 전용으로 설정"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "페이지 이름",
      // [Auto-translated] "Title"
      title: "타이틀",
      // [Auto-translated] "Page description"
      description: "페이지 설명",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "다음과 같은 경우 페이지를 표시합니다.",
      // [Auto-translated] "Make the page required if"
      requiredIf: "다음과 같은 경우 페이지를 필수로 만듭니다.",
      // [Auto-translated] "Time limit to finish the page (in seconds)"
      timeLimit: "페이지 완료 시간 제한(초)",
      // [Auto-translated] "Question order on the page"
      questionOrder: "페이지의 질문 순서"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "열 이름",
      // [Auto-translated] "Column title"
      title: "열 제목",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "중복 응답 방지",
      // [Auto-translated] "Column width"
      width: "열 너비",
      // [Auto-translated] "Minimum column width"
      minWidth: "최소 열 너비",
      // [Auto-translated] "Input field height (in lines)"
      rows: "입력 필드 높이(줄)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "다음과 같은 경우 열을 표시합니다.",
      // [Auto-translated] "Make the column required if"
      requiredIf: "다음과 같은 경우 열을 필수로 만듭니다.",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "별도의 열에 있는 각 옵션"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "이름",
      // [Auto-translated] "Title"
      title: "타이틀"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "설문조사 결과에 마스킹된 값 저장"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "값 패턴"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "최솟값",
      // [Auto-translated] "Maximum value"
      max: "최대값"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "음수 값 허용",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "1000 단위 구분 기호",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "소수 구분 기호",
      // [Auto-translated] "Value precision"
      precision: "값 정밀도",
      // [Auto-translated] "Minimum value"
      min: "최솟값",
      // [Auto-translated] "Maximum value"
      max: "최대값"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "통화 접두사",
      // [Auto-translated] "Currency suffix"
      suffix: "통화 접미사"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "선택하면 다른 항목 지우기",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "사용자에게 주석 입력 요구",
    // "Display area height"
    imageHeight: "이미지 높이",
    // "Display area width"
    imageWidth: "이미지 너비",
    // "Join identifier"
    valueName: "값 이름",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "동적 텍스트에 대한 기본 표시 값",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "레이블 정렬",
    // [Auto-translated] "Input field size (in characters)"
    size: "입력 필드 너비(문자 단위)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "셀 오류 메시지 맞춤",
    // [Auto-translated] "Enabled"
    enabled: "사용",
    // [Auto-translated] "Disabled"
    disabled: "비활성화",
    // [Auto-translated] "Inherit"
    inherit: "물려받다",
    // "Apply"
    apply: "적용",
    // "OK"
    ok: "확인",
    // [Auto-translated] "Save"
    save: "구해내다",
    // [Auto-translated] "Clear"
    clear: "맑다",
    // [Auto-translated] "Save"
    saveTooltip: "구해내다",
    // "Cancel"
    cancel: "취소",
    // [Auto-translated] "Set"
    set: "집합",
    // "Reset"
    reset: "재설정",
    // [Auto-translated] "Change"
    change: "잔돈",
    // [Auto-translated] "Refresh"
    refresh: "리프레쉬",
    // "Close"
    close: "닫기",
    // "Delete"
    delete: "삭제",
    // [Auto-translated] "Add"
    add: "더하다",
    // "Add New"
    addNew: "새로 만들기",
    // "Click to add an item..."
    addItem: "항목을 추가하려면 클립하십시오.",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "항목을 제거하려면 클릭하세요...",
    // [Auto-translated] "Drag the item"
    dragItem: "항목을 드래그합니다",
    // [Auto-translated] "Other"
    addOther: "다른",
    // [Auto-translated] "Select All"
    addSelectAll: "모두 선택",
    // [Auto-translated] "None"
    addNone: "없음",
    // "Remove All"
    removeAll: "모두 삭제",
    // "Edit"
    edit: "편집",
    // [Auto-translated] "Return without saving"
    back: "저장하지 않고 반환",
    // [Auto-translated] "Return without saving"
    backTooltip: "저장하지 않고 반환",
    // [Auto-translated] "Save and return"
    saveAndBack: "저장 및 반환",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "저장 및 반환",
    // [Auto-translated] "Done"
    doneEditing: "수행",
    // "Edit Choices"
    editChoices: "선택사항 편집",
    // [Auto-translated] "Show Choices"
    showChoices: "선택 항목 표시",
    // "Move"
    move: "이동",
    // "<empty>"
    empty: "<비어있음>",
    // [Auto-translated] "Value is empty"
    emptyValue: "값이 비어 있습니다.",
    // "Manual Entry"
    fastEntry: "빠른 입력",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "'{0}' 값은 고유하지 않습니다.",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "항목 수를 {0}개에서 {1}개로 제한하십시오.",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "최소 {0} 항목을 입력하십시오.",
    // [Auto-translated] "You can set data in the following format:\nvalue1|text\nvalue2"
    fastEntryPlaceholder: "다음 형식으로 데이터를 설정할 수 있습니다.\nvalue1|텍스트\n값2",
    // "Form Entry"
    formEntry: "양식 입력",
    // "Test the service"
    testService: "서비스 테스트",
    // [Auto-translated] "Please select the element"
    itemSelectorEmpty: "요소를 선택해 주세요",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "작업을 선택하십시오.",
    // "Select a question..."
    conditionSelectQuestion: "질문 선택...",
    // [Auto-translated] "Select page..."
    conditionSelectPage: "페이지 선택...",
    // [Auto-translated] "Select panel..."
    conditionSelectPanel: "패널 선택...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "값을 입력하거나 선택하십시오.",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "ctrl+space를 눌러 완성된 수식에 대한 힌트를 얻으십시오",
    // "Current row"
    aceEditorRowTitle: "현재 행",
    // "Current panel"
    aceEditorPanelTitle: "현재 패널",
    // "For more details please check the documentation"
    showMore: "자세한 내용은 설명서를 확인하십시오.",
    // "Available questions"
    assistantTitle: "유효 질문:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "최소한 하나의 열 또는 행이 있어야 합니다.",
    // [Auto-translated] "Preview answers before submitting the survey"
    showPreviewBeforeComplete: "설문조사를 제출하기 전에 답변 미리 보기",
    // [Auto-translated] "Set by "
    overridingPropertyPrefix: "설정 기준 ",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "재설정",
    // "Please enter a value"
    propertyIsEmpty: "값을 입력하십시오",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "고유한 값을 입력하십시오.",
    // [Auto-translated] "Please enter a unique name"
    propertyNameIsNotUnique: "고유한 이름을 입력하십시오.",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "예약어를 사용하지 마십시오: \"item\", \"choice\", \"panel\", \"row\".",
    // [Auto-translated] "No items have been added yet"
    listIsEmpty: "아직 추가된 항목이 없습니다.",
    // [Auto-translated] "No choices have been added yet"
    "listIsEmpty@choices": "선택 항목이 아직 추가되지 않았습니다",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "아직 열이 없습니다.",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "레이아웃 열이 아직 없습니다.",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "아직 행이 없습니다.",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "아직 유효성 검사 규칙이 없습니다.",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "아직 맞춤 변수가 없습니다.",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "아직 트리거가 없습니다.",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "아직 링크가 없습니다.",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "아직 페이지가 없습니다.",
    // [Auto-translated] "Add a choice"
    "addNew@choices": "선택 항목 추가",
    // [Auto-translated] "Add new column"
    "addNew@columns": "새 열 추가",
    // [Auto-translated] "Add new row"
    "addNew@rows": "새 행 추가",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "새 규칙 추가",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "새 변수 추가",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "새 트리거 추가",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "새 URL 추가",
    // [Auto-translated] "Add new page"
    "addNew@pages": "새 페이지 추가",
    // [Auto-translated] "Expression is empty"
    expressionIsEmpty: "식이 비어 있습니다.",
    // "Value"
    value: "값",
    // "Text"
    text: "텍스트",
    // [Auto-translated] "Row ID"
    rowid: "행 ID",
    // [Auto-translated] "Image or video URL"
    imageLink: "이미지 또는 동영상 URL",
    // "Edit column: {0}"
    columnEdit: "열 편집: {0}",
    // "Edit item: {0}"
    itemEdit: "항목 편집: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "경로",
    choicesbyurl: {
      // [Auto-translated] "Web service's URL"
      url: "웹 서비스의 URL",
      // [Auto-translated] "Get values from the following JSON field"
      valueName: "다음 JSON 필드에서 값 가져오기"
    },
    // "Get value to display from the following property"
    titleName: "제목 이름",
    // [Auto-translated] "Get image URLs from the following JSON field"
    imageLinkName: "다음 JSON 필드에서 이미지 URL을 가져옵니다.",
    // [Auto-translated] "Allow empty response"
    allowEmptyResponse: "빈 응답 허용",
    // [Auto-translated] "Title"
    titlePlaceholder: "타이틀",
    // [Auto-translated] "Survey Title"
    surveyTitlePlaceholder: "설문조사 제목",
    // [Auto-translated] "Page {num}"
    pageTitlePlaceholder: "페이지 {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "시작 페이지",
    // [Auto-translated] "Description"
    descriptionPlaceholder: "묘사",
    // [Auto-translated] "Description"
    surveyDescriptionPlaceholder: "묘사",
    // [Auto-translated] "Description"
    pageDescriptionPlaceholder: "묘사",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "줄 바꿈 선택",
    // "Enable the \"Other\" option"
    showOtherItem: "다른 항목이 있습니다",
    // "Rename the \"Other\" option"
    otherText: "기타 항목 텍스트",
    // [Auto-translated] "Allow the None option"
    showNoneItem: "없음 옵션 허용",
    // [Auto-translated] "Allow the Refuse to Answer option"
    showRefuseItem: "응답 거부 옵션 허용",
    // [Auto-translated] "Allow the Don't Know option"
    showDontKnowItem: "모름 옵션 허용",
    // [Auto-translated] "None option text"
    noneText: "없음 옵션 텍스트",
    // [Auto-translated] "Allow the Select All option"
    showSelectAllItem: "모두 선택 옵션 허용",
    // [Auto-translated] "Select All option text"
    selectAllText: "모두 선택 옵션 텍스트",
    // [Auto-translated] "Minimum value for auto-generated items"
    choicesMin: "자동 생성된 항목의 최소값",
    // [Auto-translated] "Maximum value for auto-generated items"
    choicesMax: "자동 생성된 항목의 최대값",
    // [Auto-translated] "Step for auto-generated items"
    choicesStep: "자동 생성된 항목에 대한 단계",
    // "Name"
    name: "이름",
    // "Title"
    title: "제목",
    // "Cell input type"
    cellType: "셀 유형",
    // "Column count"
    colCount: "열 개수",
    // "Choice order"
    choicesOrder: "항목 순서 선택",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "사용자 지정 선택 허용",
    // "Visible"
    visible: "보입니까??",
    // "Required"
    isRequired: "필수입니까?",
    // [Auto-translated] "Mark as required"
    markRequired: "필요에 따라 표시",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "필요한 표시를 제거하십시오",
    // [Auto-translated] "Require answer for all rows"
    eachRowRequired: "모든 행에 대한 응답 필요",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "행의 중복 응답 방지",
    // "Error message for required questions"
    requiredErrorText: "\"필수\" 오류 메시지",
    // "Display the question on a new line"
    startWithNewLine: "새 줄로 시작하겠습니까?",
    // "Rows"
    rows: "행 수",
    // [Auto-translated] "Columns"
    cols: "열",
    // "Placeholder text within input field"
    placeholder: "입력 자리 표시자 ",
    // "Show preview area"
    showPreview: "이미지 미리보기가 표시됩니까?",
    // "Store file content in JSON result as text"
    storeDataAsText: "파일 내용을 JSON 결과에 텍스트로 저장",
    // "Maximum file size (in bytes)"
    maxSize: "최대 파일 크기(bytes)",
    // "Row count"
    rowCount: "행 수",
    // "Columns layout"
    columnLayout: "열 위치",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "행 버튼 위치 추가",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "행을 열로 바꾸기",
    // "\"Add Row\" button text"
    addRowText: "행 버튼 텍스트 추가",
    // "\"Remove Row\" button text"
    removeRowText: "행 버튼 텍스트 제거",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "입력 필드 제목 패턴",
    // [Auto-translated] "Minimum rate value"
    rateMin: "최소 요금 값",
    // [Auto-translated] "Maximum rate value"
    rateMax: "최대 속도 값",
    // [Auto-translated] "Rate step"
    rateStep: "속도 단계",
    // "Minimum value label"
    minRateDescription: "최소 설명 길이",
    // "Maximum value label"
    maxRateDescription: "최대 설명 길이",
    // "Input type"
    inputType: "입력 유형",
    // "Option placeholder"
    optionsCaption: "옵션 캡션",
    // "Default Answer"
    defaultValue: "기본값",
    // "Default texts"
    cellsDefaultRow: "기본 셀 텍스트",
    // "Edit survey settings"
    surveyEditorTitle: "설문지 설정 편집",
    // "Edit: {0}"
    qEditorTitle: "편집: {0}",
    // [Auto-translated] "Maximum length (in characters)"
    maxLength: "최대 길이(문자)",
    // [Auto-translated] "Build"
    buildExpression: "체격",
    // [Auto-translated] "Edit"
    editExpression: "편집하다",
    // [Auto-translated] "and"
    and: "그리고",
    // [Auto-translated] "or"
    or: "또는",
    // [Auto-translated] "Remove"
    remove: "제거하다",
    // [Auto-translated] "Add Condition"
    addCondition: "조건 추가",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "질문을 선택하여 조건 구성을 시작합니다.",
    // [Auto-translated] "If"
    if: "면",
    // [Auto-translated] "then"
    then: "그러면",
    // [Auto-translated] "Target question"
    setToName: "대상 질문",
    // [Auto-translated] "Question to copy answer from"
    fromName: "답변을 복사할 질문",
    // [Auto-translated] "Question to skip to"
    gotoName: "건너뛸 질문",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "규칙이 올바르지 않습니다.",
    // [Auto-translated] "Include into survey results"
    includeIntoResult: "설문조사 결과에 포함",
    // "Make the title and description visible"
    showTitle: "제목 표시/숨김",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "제목 확장/축소",
    // "Select a survey language"
    locale: "기본 언어",
    // [Auto-translated] "Select device type"
    simulator: "장치 유형 선택",
    // [Auto-translated] "Switch to landscape orientation"
    landscapeOrientation: "가로 방향으로 전환",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "세로 방향으로 전환",
    // "Clear hidden question values"
    clearInvisibleValues: "보이지 않는 값 지우기",
    // "Limit to one response"
    cookieName: "쿠키 이름(로컬에서 설문 조사를 두 번 사용하지 않도록 설정)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "다음 페이지에서 설문 조사 결과 보내기",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "다른 사용자의 값을 별도의 필드에 저장",
    // "Show page titles"
    showPageTitles: "페이지 제목 표시",
    // "Show page numbers"
    showPageNumbers: "페이지 번호 표시",
    // "\"Previous Page\" button text"
    pagePrevText: "이전 페이지 버튼 텍스트",
    // "\"Next Page\" button text"
    pageNextText: "다음 페이지 버튼 텍스트",
    // "\"Complete Survey\" button text"
    completeText: "완료 버튼 텍스트",
    // [Auto-translated] "Preview Answers button text"
    previewText: "답변 미리보기 버튼 텍스트",
    // [Auto-translated] "Edit Answer button text"
    editText: "답변 편집 단추 텍스트",
    // "\"Start Survey\" button text"
    startSurveyText: "시작 버튼 텍스트",
    // "Show navigation buttons"
    showNavigationButtons: "탐색 버튼 표시 (기본 탐색)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "탐색 단추 정렬",
    // "Show the \"Previous Page\" button"
    showPrevButton: "이전 버튼 표시 (사용자가 이전 페이지로 돌아갈 수 있음)",
    // "First page is a start page"
    firstPageIsStartPage: "설문지의 첫 번째 페이지는 시작 페이지입니다",
    // "Show the \"Thank You\" page"
    showCompletePage: "끝 부분에 완료된 페이지 표시 (완료된 HTML)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "모든 질문에 응답 후 자동으로 다음 페이지로 이동",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "설문조사 자동 완성",
    // "Show the progress bar"
    showProgressBar: "진행률 막대 표시",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "진행률 표시줄 맞춤",
    // "Question title alignment"
    questionTitleLocation: "질문 제목 위치",
    // "Question title width"
    questionTitleWidth: "질문 제목 너비",
    // "Required symbol(s)"
    requiredMark: "질문에 필요한 기호",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "질문 제목 템플릿입니다. 기본값: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "질문 위치 오류",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "페이지 변경시 첫 번째 질문에 초점",
    // "Question order"
    questionOrder: "페이지의 요소 순서",
    // "Time limit to complete the survey"
    timeLimit: "설문 조사를 마칠 수있는 최대 시간",
    // "Time limit to complete one page"
    timeLimitPerPage: "설문 조사에서 페이지를 마칠 수있는 최대 시간",
    // [Auto-translated] "Use a timer"
    showTimer: "타이머 사용",
    // "Timer alignment"
    timerLocation: "타이머 패널 표시",
    // "Timer mode"
    timerInfoMode: "타이머 패널 모드 표시",
    // "Panel display mode"
    renderMode: "렌더링 모드",
    // "Enable entry addition"
    allowAddPanel: "패널 추가 허용",
    // "Enable entry removal"
    allowRemovePanel: "패널 제거 허용",
    // "\"Add Entry\" button text"
    addPanelText: "패널 텍스트 추가",
    // "\"Remove Entry\" button text"
    removePanelText: "패널 텍스트 삭제",
    // "Show all elements on one page"
    isSinglePage: "한 페이지에 모든 요소 표시",
    // [Auto-translated] "HTML markup"
    html: "HTML 마크업",
    // [Auto-translated] "Answer"
    setValue: "대답",
    // [Auto-translated] "Image format"
    dataFormat: "이미지 형식",
    // [Auto-translated] "Allow adding rows"
    allowAddRows: "행 추가 허용",
    // [Auto-translated] "Allow removing rows"
    allowRemoveRows: "행 제거 허용",
    // [Auto-translated] "Allow row drag and drop"
    allowRowReorder: "행 끌어서 놓기 허용",
    // [Auto-translated] "Does not apply if you specify the exact image width or height."
    responsiveImageSizeHelp: "정확한 이미지 너비 또는 높이를 지정하는 경우에는 적용되지 않습니다.",
    // [Auto-translated] "Minimum image width"
    minImageWidth: "최소 이미지 너비",
    // [Auto-translated] "Maximum image width"
    maxImageWidth: "최대 이미지 너비",
    // [Auto-translated] "Minimum image height"
    minImageHeight: "최소 이미지 높이",
    // [Auto-translated] "Maximum image height"
    maxImageHeight: "최대 이미지 높이",
    // [Auto-translated] "Minimum value"
    minValue: "최소값",
    // [Auto-translated] "Maximum value"
    maxValue: "최대값",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "대소문자 구분 안 함",
    // [Auto-translated] "Minimum length (in characters)"
    minLength: "최소 길이(문자)",
    // [Auto-translated] "Allow digits"
    allowDigits: "숫자 허용",
    // [Auto-translated] "Minimum count"
    minCount: "최소 개수",
    // [Auto-translated] "Maximum count"
    maxCount: "최대 개수",
    // [Auto-translated] "Regular expression"
    regex: "정규식",
    surveyvalidator: {
      // [Auto-translated] "Error message"
      text: "오류 메시지",
      // [Auto-translated] "Validation expression"
      expression: "유효성 검사 표현식"
    },
    // [Auto-translated] "Total row text"
    totalText: "전체 행 텍스트",
    // [Auto-translated] "Total type"
    totalType: "합계 유형",
    // [Auto-translated] "Total expression"
    totalExpression: "총 표현식",
    // [Auto-translated] "Total value display style"
    totalDisplayStyle: "총액 표시 스타일",
    // [Auto-translated] "Currency"
    totalCurrency: "통화",
    // [Auto-translated] "Formatted string"
    totalFormat: "서식이 지정된 문자열",
    // [Auto-translated] "Logo (URL or base64-encoded string)"
    logo: "로고(URL 또는 base64로 인코딩된 문자열)",
    // [Auto-translated] "Survey structure"
    questionsOnPageMode: "설문조사 구조",
    // [Auto-translated] "Maximum answer length (in characters)"
    maxTextLength: "최대 답변 길이(문자 단위)",
    // [Auto-translated] "Maximum comment length (in characters)"
    maxCommentLength: "최대 주석 길이(문자)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "주석 영역 높이(줄)",
    // [Auto-translated] "Auto-expand comment area if necessary"
    autoGrowComment: "필요한 경우 주석 영역 자동 확장",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "사용자가 텍스트 영역의 크기를 조정할 수 있도록 허용",
    // "Update input field values"
    textUpdateMode: "텍스트 질문 값 업데이트",
    // [Auto-translated] "Input mask type"
    maskType: "입력 마스크 유형",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "첫 번째 오답에 포커스 설정",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "유효성 검사 실행",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "초점이 손실된 빈 필드 유효성 검사",
    // [Auto-translated] "Navigate to URL"
    navigateToUrl: "URL로 이동합니다.",
    // [Auto-translated] "Dynamic URL"
    navigateToUrlOnCondition: "동적 URL",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "사용자가 이미 이 설문조사를 작성했는지 여부를 표시하는 마크업",
    // [Auto-translated] "Survey Complete page markup"
    completedHtml: "설문조사 완료 페이지 마크업",
    // [Auto-translated] "Dynamic Survey Complete page markup"
    completedHtmlOnCondition: "동적 설문조사 완료 페이지 마크업",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "측량 모델이 로드되는 동안 표시할 마크업",
    // [Auto-translated] "Comment area text"
    commentText: "주석 영역 텍스트",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "자동 완성 유형",
    // "Label for \"True\""
    labelTrue: "\"True\" 레이블",
    // "Label for \"False\""
    labelFalse: "\"거짓\" 레이블",
    // "Show the Clear button"
    allowClear: "지우기 단추 표시",
    // [Auto-translated] "Search Mode"
    searchMode: "검색 모드",
    // [Auto-translated] "Value display style"
    displayStyle: "값 표시 스타일",
    // [Auto-translated] "Formatted string"
    format: "서식이 지정된 문자열",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "최대 소수 자릿수",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "최소 소수 자릿수",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "그룹화 구분 기호 표시",
    // [Auto-translated] "Allow multiple files"
    allowMultiple: "여러 파일 허용",
    // [Auto-translated] "Preview images"
    allowImagesPreview: "이미지 미리보기",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "허용되는 파일 형식",
    // [Auto-translated] "Wait for the upload to complete"
    waitForUpload: "업로드가 완료될 때까지 기다리세요",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "파일 삭제 확인",
    // [Auto-translated] "Detail panel location"
    detailPanelMode: "세부 정보 패널 위치",
    // [Auto-translated] "Minimum row count"
    minRowCount: "최소 행 개수",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "최대 행 개수",
    // "Confirm row removal"
    confirmDelete: "행 삭제 확인",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "확인 메시지",
    // [Auto-translated] "Initial panel count"
    panelCount: "초기 패널 수",
    // [Auto-translated] "Minimum panel count"
    minPanelCount: "최소 패널 수",
    // [Auto-translated] "Maximum panel count"
    maxPanelCount: "최대 패널 수",
    // [Auto-translated] "Inner panel expand state"
    panelsState: "내부 패널 확장 상태",
    // [Auto-translated] "Previous Panel button tooltip"
    prevPanelText: "이전 패널 단추 도구 설명",
    // [Auto-translated] "Next Panel button tooltip"
    nextPanelText: "다음 패널 단추 도구 설명",
    // [Auto-translated] "Remove Panel button location"
    removePanelButtonLocation: "패널 단추 위치 제거",
    // [Auto-translated] "Hide the question if there are no rows"
    hideIfRowsEmpty: "행이 없는 경우 질문 숨기기",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "행이 없는 경우 열 숨기기",
    // [Auto-translated] "Custom rate values"
    rateValues: "사용자 지정 요금 값",
    // [Auto-translated] "Rate count"
    rateCount: "비율 개수",
    // [Auto-translated] "How to specify rate values?"
    autoGenerate: "비율 값을 지정하는 방법은 무엇입니까?",
    slider: {
      // [Auto-translated] "Min value"
      min: "최소값",
      // [Auto-translated] "Max value"
      max: "최대값",
      // [Auto-translated] "Step value"
      step: "단계 값",
      // [Auto-translated] "Show scale labels"
      showLabels: "축척 레이블 표시",
      // [Auto-translated] "Show tooltips"
      tooltipVisibilityPG: "툴팁 표시",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "엄지 교차점 허용",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "자동 생성된 레이블의 수",
      // [Auto-translated] "Min value expression"
      minValueExpression: "최소값 표현식",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "최대 값 표현식",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "레이블 구성 크기 조정",
      // [Auto-translated] "Slider type"
      sliderType: "슬라이더 유형",
      // [Auto-translated] "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "최소 범위 길이",
      // [Auto-translated] "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "최대 범위 길이",
      // [Auto-translated] "Custom labels"
      customLabels: "사용자 지정 레이블",
      // [Auto-translated] "Use `{0}` as a placeholder for the actual value."
      labelFormat: "라벨 형식",
      // [Auto-translated] "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "툴팁 형식"
    },
    file: {
      // [Auto-translated] "Adjusts the height of the image in the survey results."
      imageHeight: "이미지 높이",
      // [Auto-translated] "Adjusts the width of the image in the survey results."
      imageWidth: "이미지 너비"
    },
    // [Auto-translated] "Hide the question if it contains no choices"
    hideIfChoicesEmpty: "선택 항목이 없는 경우 질문 숨기기",
    // "Minimum width"
    minWidth: "최소 너비(CSS에서 허용하는 값)",
    // "Maximum width"
    maxWidth: "최대 너비(CSS에서 허용하는 값)",
    // "Width"
    width: "너비(CSS에서 허용하는 값)",
    // [Auto-translated] "Show column headers"
    showHeader: "열 머리글 표시",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "가로 스크롤 막대 표시",
    // [Auto-translated] "Minimum column width (in CSS-accepted values)"
    columnMinWidth: "최소 열 너비(CSS에서 허용하는 값)",
    // [Auto-translated] "Row header width (in CSS-accepted values)"
    rowTitleWidth: "행 머리글 너비(CSS에서 허용하는 값)",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"True\" 값",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"False\" 값",
    // "\"Value is below minimum\" error message"
    minErrorText: "\"값이 최소값 미만입니다.\" 오류 메시지",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"값이 최대값을 초과합니다.\" 오류 메시지",
    // "\"Empty comment\" error message"
    otherErrorText: "'빈 댓글' 오류 메시지",
    // "Error message for duplicate responses"
    keyDuplicationError: "\"고유하지 않은 키 값\" 오류 메시지",
    // [Auto-translated] "Minimum selected choices"
    minSelectedChoices: "선택한 최소 선택 항목",
    // [Auto-translated] "Maximum selected choices"
    maxSelectedChoices: "선택한 최대 선택 항목 수",
    // [Auto-translated] "Logo width (in CSS-accepted values)"
    logoWidth: "로고 너비(CSS에서 허용하는 값)",
    // [Auto-translated] "Logo height (in CSS-accepted values)"
    logoHeight: "로고 높이(CSS에서 허용하는 값)",
    // "Read-only"
    readOnly: "읽기 전용",
    // [Auto-translated] "Editable if"
    enableIf: "다음과 같은 경우 편집 가능",
    // "\"No rows\" message"
    noRowsText: "'행 없음' 메시지",
    // [Auto-translated] "Separate special choices (None, Other, Select All)"
    separateSpecialChoices: "별도의 특수 선택(없음, 기타, 모두 선택)",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "다음 질문에서 선택 항목을 복사합니다.",
    // [Auto-translated] "Which choices to copy?"
    choicesFromQuestionMode: "어떤 선택 항목을 복사해야 합니까?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "다음 행렬 열 또는 패널 질문의 값을 선택 ID로 사용합니다.",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "다음 행렬 열 또는 패널 질문의 값을 선택 텍스트로 사용합니다.",
    // [Auto-translated] "Display page titles in progress bar"
    progressBarShowPageTitles: "진행률 표시줄에 페이지 제목 표시",
    // [Auto-translated] "Display page numbers in progress bar"
    progressBarShowPageNumbers: "진행률 표시줄에 페이지 번호 표시",
    // [Auto-translated] "Show the comment area"
    showCommentArea: "주석 영역 표시",
    // [Auto-translated] "Comment area placeholder"
    commentPlaceholder: "주석 영역 자리 표시자",
    // [Auto-translated] "Display rate descriptions as extreme values"
    displayRateDescriptionsAsExtremeItems: "속도 설명을 극한 값으로 표시",
    // [Auto-translated] "Row order"
    rowOrder: "행 순서",
    // [Auto-translated] "Column layout"
    columnsLayout: "열 레이아웃",
    // [Auto-translated] "Nested column count"
    columnColCount: "중첩된 열 개수",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "정답",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "기본값",
    // [Auto-translated] "Cell Texts"
    cells: "셀 텍스트",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "파일 선택 또는 파일 링크 붙여넣기...",
    // "Prevent duplicate responses in the following column"
    keyName: "키 열",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "다음과 같은 경우 옵션을 표시합니다.",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "다음과 같은 경우 옵션을 선택할 수 있도록 합니다."
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "다음과 같은 경우 행을 표시합니다.",
      // [Auto-translated] "Make the row editable if"
      enableIf: "다음과 같은 경우 행을 편집 가능하게 만듭니다."
    },
    imageitemvalue: {
      // "Alt text"
      text: "대체 텍스트"
    },
    // [Auto-translated] "Logo position"
    logoPosition: "로고 위치",
    // [Auto-translated] "Add logo..."
    addLogo: "로고 추가...",
    // [Auto-translated] "Change logo..."
    changeLogo: "로고 변경...",
    logoPositions: {
      // [Auto-translated] "Remove logo"
      none: "로고 제거",
      // [Auto-translated] "Left"
      left: "왼쪽",
      // [Auto-translated] "Right"
      right: "오른쪽",
      // [Auto-translated] "On the top"
      top: "맨 위에",
      // [Auto-translated] "In the bottom"
      bottom: "하단에"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "미리보기 모드",
    // [Auto-translated] "Enable the grid layout"
    gridLayoutEnabled: "그리드 레이아웃 사용Enable the grid layout",
    // [Auto-translated] "Grid layout columns"
    gridLayoutColumns: "그리드 레이아웃 열",
    // [Auto-translated] "Mask settings"
    maskSettings: "마스크 설정",
    // [Auto-translated] "Row expansion error message alignment"
    detailErrorLocation: "행 확장 오류 메시지 맞춤",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Layout"
        layout: "패널 레이아웃"
      },
      // "General"
      general: "일반",
      // "Options"
      fileOptions: "옵션",
      // "HTML Editor"
      html: "Html 편집기",
      // "Columns"
      columns: "열",
      // "Rows"
      rows: "행",
      // "Choice Options"
      choices: "선택",
      // "Items"
      items: "항목",
      // "Visible If"
      visibleIf: "조건 충족시 보기",
      // "Editable If"
      enableIf: "조건 충족시 허용",
      // [Auto-translated] "Required If"
      requiredIf: "다음과 같은 경우 필수입니다.",
      // "Rating Values"
      rateValues: "길이 값",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "슬라이더 설정",
      // "Choices from a Web Service"
      choicesByUrl: "웹에서 선택",
      // "Default Choices"
      matrixChoices: "기본 선택",
      // "Text Inputs"
      multipleTextItems: "텍스트 입력",
      // [Auto-translated] "Numbering"
      numbering: "번호 매기기",
      // "Validators"
      validators: "유효성 검사기",
      // "Navigation"
      navigation: "탐색",
      // "Question Settings"
      question: "질문",
      // [Auto-translated] "Pages"
      pages: "페이지",
      // "Quiz Mode"
      timer: "타이머 / 퀴즈",
      // [Auto-translated] "Calculated Values"
      calculatedValues: "계산된 값",
      // "Triggers"
      triggers: "트리거",
      // "Title template"
      templateTitle: "템플릿 제목",
      // [Auto-translated] "Totals"
      totals: "합계",
      // "Conditions"
      logic: "논리학",
      // [Auto-translated] "Input Mask Settings"
      mask: "입력 마스크 설정",
      layout: {
        // [Auto-translated] "Layout"
        panel: "레이아웃",
        // [Auto-translated] "Layout"
        question: "레이아웃",
        // [Auto-translated] "Layout"
        base: "레이아웃"
      },
      // [Auto-translated] "Data"
      data: "데이터",
      // [Auto-translated] "Validation"
      validation: "유효성 검사",
      // [Auto-translated] "Cell Texts"
      cells: "셀 텍스트",
      // [Auto-translated] "Survey Complete"
      showOnCompleted: "설문조사 완료",
      // [Auto-translated] "Logo in Survey Title"
      logo: "설문조사 제목의 로고",
      // [Auto-translated] "Slider"
      slider: "슬라이더",
      // [Auto-translated] "Expression"
      expression: "식",
      // [Auto-translated] "Question Settings"
      questionSettings: "질문 설정",
      // "Header"
      header: "머리글",
      // "Background"
      background: "배경",
      // "Appearance"
      appearance: "외관",
      // [Auto-translated] "Accent colors"
      accentColors: "강조 색상",
      // [Auto-translated] "Surface Background"
      surfaceBackground: "표면 배경",
      // [Auto-translated] "Scaling"
      scaling: "스케일링",
      // [Auto-translated] "Others"
      others: "다른"
    },
    // "Edit property '{0}'"
    editProperty: "편집 속성 '{0}'",
    // "Items"
    items: "[ 항목: {0} ]",
    // [Auto-translated] "Choices are visible if"
    choicesVisibleIf: "다음과 같은 경우 선택 항목이 표시됩니다.",
    // [Auto-translated] "Choices are selectable if"
    choicesEnableIf: "다음과 같은 경우 선택 항목을 선택할 수 있습니다.",
    // [Auto-translated] "Columns are visible if"
    columnsEnableIf: "다음과 같은 경우 열이 표시됩니다.",
    // [Auto-translated] "Rows are visible if"
    rowsEnableIf: "다음과 같은 경우 행이 표시됩니다.",
    // [Auto-translated] "Add inner indents"
    innerIndent: "내부 들여쓰기 추가",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "마지막 항목의 답변을 기본값으로 사용",
    // "Please enter a value."
    enterNewValue: "값을 입력하십시오.",
    // "There are no questions in the survey."
    noquestions: "설문 조사에는 어떤 질문도 없습니다.",
    // "Please create a trigger"
    createtrigger: "트리거를 만드십시오",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "Enter 버튼을 눌러 편집합니다.",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "항목을 편집하려면 Enter 버튼을 누르고, 항목을 삭제하려면 삭제 버튼을 누르고, 항목을 이동하려면 alt 더하기 화살표 위쪽 또는 아래쪽 화살표를 누릅니다.",
    // "On "
    triggerOn: "트리거 켜기",
    // "Make pages visible"
    triggerMakePagesVisible: "페이지 표시:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "요소 표시:",
    // "Complete the survey if successful."
    triggerCompleteText: "조건 충족 시 설문 조사를 작성하십시오.",
    // "The trigger is not set"
    triggerNotSet: "트리거가 설정되지 않았습니다.",
    // "Run if"
    triggerRunIf: "다음 조건 충족 시 실행",
    // "Change value of: "
    triggerSetToName: "다음 값 변경: ",
    // [Auto-translated] "Copy value from: "
    triggerFromName: "다음에서 값 복사: ",
    // [Auto-translated] "Run this Expression"
    triggerRunExpression: "이 표현식을 실행합니다.",
    // "to: "
    triggerSetValue: "다음으로 수정: ",
    // [Auto-translated] "Go to the question"
    triggerGotoName: "질문으로 이동",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "변수를 설문 결과에 넣지 마십시오.",
    // [Auto-translated] "Please enter a valid expression"
    triggerRunExpressionEmpty: "올바른 표현식을 입력하십시오.",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "여기에 표현식을 입력하십시오 ...",
    // [Auto-translated] "No file choosen"
    noFile: "선택한 파일 없음",
    // [Auto-translated] "Clear the value if the question becomes hidden"
    clearIfInvisible: "질문이 숨겨지면 값을 지웁니다",
    // [Auto-translated] "Value property name"
    valuePropertyName: "값 속성 이름",
    // [Auto-translated] "Enable search"
    searchEnabled: "검색 사용",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "선택한 항목 숨기기",
    // [Auto-translated] "Close the dropdown after selection"
    closeOnSelect: "선택 후 드롭다운을 닫습니다.",
    // [Auto-translated] "Vertical alignment"
    verticalAlign: "수직 정렬",
    // [Auto-translated] "Alternate rows"
    alternateRows: "대체 행",
    // [Auto-translated] "Columns are visible if"
    columnsVisibleIf: "다음과 같은 경우 열이 표시됩니다.",
    // [Auto-translated] "Rows are visible if"
    rowsVisibleIf: "다음과 같은 경우 행이 표시됩니다.",
    // [Auto-translated] "Comment area placeholder"
    otherPlaceholder: "주석 영역 자리 표시자",
    // [Auto-translated] "File placeholder text"
    filePlaceholder: "파일 자리 표시자 텍스트",
    // [Auto-translated] "Photo placeholder text"
    photoPlaceholder: "사진 자리 표시자 텍스트",
    // [Auto-translated] "File or photo placeholder text"
    fileOrPhotoPlaceholder: "파일 또는 사진 자리 표시자 텍스트",
    // [Auto-translated] "Rate type"
    rateType: "비율 유형",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "예: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "예: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "예: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "예: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "예: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "예: 50%",
    // "auto"
    imageHeight_placeholder: "자동",
    // "auto"
    imageWidth_placeholder: "자동",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "예: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "주제",
      // [Auto-translated] "Question appearance"
      isPanelless: "질문 모양",
      // [Auto-translated] "Input element"
      editorPanel: "배경 및 모서리 반경",
      // [Auto-translated] "Panel background and corner radius"
      questionPanel: "배경 및 모서리 반경",
      // [Auto-translated] "Accent color"
      primaryColor: "강조 색상",
      // [Auto-translated] "Panel background opacity"
      panelBackgroundTransparency: "패널 배경 불투명도",
      // [Auto-translated] "Question background opacity"
      questionBackgroundTransparency: "질문 배경 불투명도",
      // [Auto-translated] "Font size"
      fontSize: "글꼴 크기",
      // [Auto-translated] "Scale"
      scale: "저울",
      // [Auto-translated] "Corner radius"
      cornerRadius: "코너 반경",
      // [Auto-translated] "Advanced mode"
      advancedMode: "어드밴스드 모드",
      // [Auto-translated] "Page title font"
      pageTitle: "제목 글꼴",
      // [Auto-translated] "Page description font"
      pageDescription: "설명 글꼴",
      // [Auto-translated] "Question title font"
      questionTitle: "제목 글꼴",
      // [Auto-translated] "Question description font"
      questionDescription: "설명 글꼴",
      // [Auto-translated] "Input element font"
      editorFont: "글꼴",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "불투명도",
      // [Auto-translated] "Font family"
      "--sjs-font-family": "글꼴 모음",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "배경색",
      // [Auto-translated] "Accent background"
      "--sjs-primary-backcolor": "강조 배경",
      // [Auto-translated] "Accent foreground"
      "--sjs-primary-forecolor": "강조 전경",
      // [Auto-translated] "Error messages"
      "--sjs-special-red": "오류 메시지",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "그림자 효과",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "그림자 효과",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "색상"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "보기",
      // [Auto-translated] "Logo position"
      logoPosition: "로고 위치",
      // [Auto-translated] "Survey title font"
      surveyTitle: "설문조사 제목 글꼴",
      // [Auto-translated] "Survey description font"
      surveyDescription: "설문조사 설명 글꼴",
      // [Auto-translated] "Survey title font"
      headerTitle: "설문조사 제목 글꼴",
      // [Auto-translated] "Survey description font"
      headerDescription: "설문조사 설명 글꼴",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "콘텐츠 영역 너비",
      // [Auto-translated] "Text width"
      textAreaWidth: "텍스트 너비",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "배경색",
      // [Auto-translated] "Background image"
      backgroundImage: "배경 이미지",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "불투명도",
      // [Auto-translated] "Overlap"
      overlapEnabled: "겹침",
      // [Auto-translated] "Logo position"
      logoPositionX: "로고 위치",
      // [Auto-translated] "Title position"
      titlePositionX: "제목 위치",
      // [Auto-translated] "Description position"
      descriptionPositionX: "설명 위치"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "참",
    // [Auto-translated] "false"
    "false": "거짓",
    // [Auto-translated] "Local files"
    file: "로컬 파일",
    // [Auto-translated] "Camera"
    camera: "사진기",
    // [Auto-translated] "Local files or camera"
    "file-camera": "로컬 파일 또는 카메라",
    // "Inherit"
    inherit: "상속",
    // "Visible"
    show: "보기",
    // "Hidden"
    hide: "숨기기",
    // "Inherit"
    default: "기본값",
    // "Initial"
    initial: "초기값",
    // "Random"
    random: "무작위",
    // "Collapsed"
    collapsed: "축소",
    // "Expanded"
    expanded: "확장",
    // "None"
    none: "없음",
    // "Ascending"
    asc: "오름차순",
    // "Descending"
    desc: "내림차순",
    // "Indeterminate"
    indeterminate: "불확정",
    // [Auto-translated] "Selected"
    selected: "선택한",
    // [Auto-translated] "Unselected"
    unselected: "하지 않은",
    // [Auto-translated] "decimal"
    decimal: "십진법",
    // [Auto-translated] "currency"
    currency: "통화",
    // [Auto-translated] "percent"
    percent: "퍼센트",
    // "First panel is expanded"
    firstExpanded: "우선 확장",
    // "Hide question numbers"
    off: "꺼짐",
    // "List"
    list: "목록",
    // [Auto-translated] "Carousel"
    carousel: "회전목마",
    // [Auto-translated] "Tabs"
    tab: "탭",
    // "Panel navigator + Progress bar at the top"
    progressTop: "상단 진행률",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "하단 진행률",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "상하단 진행률",
    // "Horizontal"
    horizontal: "가로",
    // "Vertical"
    vertical: "세로",
    // "Top"
    top: "위",
    // "Bottom"
    bottom: "아래",
    // "Top and bottom"
    topBottom: "위아래",
    // [Auto-translated] "Both"
    both: "둘다",
    // "Left"
    left: "왼쪽",
    // [Auto-translated] "Right"
    right: "오른쪽",
    // [Auto-translated] "Center"
    center: "중",
    // [Auto-translated] "Left and right"
    leftRight: "왼쪽 및 오른쪽",
    // [Auto-translated] "Middle"
    middle: "중간",
    // [Auto-translated] "color"
    color: "색",
    // [Auto-translated] "date"
    date: "날짜",
    // [Auto-translated] "datetime"
    datetime: "날짜/시간",
    // [Auto-translated] "datetime-local"
    "datetime-local": "날짜/시간 로컬",
    // [Auto-translated] "email"
    email: "이메일",
    // [Auto-translated] "month"
    month: "달",
    // [Auto-translated] "number"
    number: "수",
    // [Auto-translated] "password"
    password: "암호",
    // [Auto-translated] "range"
    range: "레인지",
    // [Auto-translated] "tel"
    tel: "전화",
    // [Auto-translated] "text"
    text: "문자 메시지",
    // [Auto-translated] "time"
    time: "시간",
    // [Auto-translated] "url"
    url: "URL (영문)",
    // [Auto-translated] "week"
    week: "주",
    // "Hidden"
    hidden: "숨김",
    // "Editable"
    edit: "편집",
    // "Read-only"
    display: "디스플레이",
    // [Auto-translated] "Contain"
    contain: "포함하다",
    // [Auto-translated] "Cover"
    cover: "표지",
    // [Auto-translated] "Fill"
    fill: "채우다",
    // [Auto-translated] "Next"
    next: "다음",
    // [Auto-translated] "Last"
    last: "지난",
    // "Upon survey completion"
    onComplete: "완료",
    // "When question gets hidden"
    onHidden: "숨김",
    // [Auto-translated] "When the question or its panel/page becomes hidden"
    onHiddenContainer: "질문 또는 해당 패널/페이지가 숨겨지는 경우",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "결코"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "결코"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "라디오 버튼",
    inputType: {
      // [Auto-translated] "Color"
      color: "색",
      // [Auto-translated] "Date"
      date: "날짜",
      // [Auto-translated] "Date and Time"
      "datetime-local": "날짜 및 시간",
      // [Auto-translated] "Email"
      email: "이메일",
      // [Auto-translated] "Month"
      month: "달",
      // [Auto-translated] "Number"
      number: "수",
      // [Auto-translated] "Password"
      password: "암호",
      // [Auto-translated] "Range"
      range: "레인지",
      // [Auto-translated] "Phone Number"
      tel: "전화번호",
      // [Auto-translated] "Text"
      text: "문자 메시지",
      // [Auto-translated] "Time"
      time: "시간",
      // [Auto-translated] "URL"
      url: "URL (영문)",
      // [Auto-translated] "Week"
      week: "주"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "단일 값",
      // [Auto-translated] "Range"
      range: "레인지"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "성명",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "접두사",
      // [Auto-translated] "First Name"
      "given-name": "이름",
      // [Auto-translated] "Middle Name"
      "additional-name": "중간 이름",
      // [Auto-translated] "Last Name"
      "family-name": "성",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "접미사",
      // [Auto-translated] "Nickname"
      nickname: "별명",
      // [Auto-translated] "Job Title"
      "organization-title": "직책",
      // [Auto-translated] "User Name"
      username: "사용자 이름",
      // [Auto-translated] "New Password"
      "new-password": "새 비밀번호",
      // [Auto-translated] "Current Password"
      "current-password": "현재 비밀번호",
      // [Auto-translated] "Organization Name"
      organization: "조직 이름",
      // [Auto-translated] "Full Street Address"
      "street-address": "전체 주소",
      // [Auto-translated] "Address Line 1"
      "address-line1": "주소란 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "주소란 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "주소란 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "레벨 4 주소",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "레벨 3 주소",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "레벨 2 주소",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "레벨 1 주소",
      // [Auto-translated] "Country Code"
      country: "국가 코드",
      // [Auto-translated] "Country Name"
      "country-name": "국가 이름",
      // [Auto-translated] "Postal Code"
      "postal-code": "우편번호",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "카드 소지자 이름",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "카드 소지자 이름",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "카드 소지자 중간 이름",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "카드 소지자의 성",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "신용 카드 번호",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "만료 날짜",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "만료 월",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "만료 연도",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "카드 보안 코드",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "신용 카드 유형",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "거래 통화(Transaction Currency)",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "거래 금액",
      // [Auto-translated] "Preferred Language"
      language: "선호 언어",
      // [Auto-translated] "Birthday"
      bday: "생일",
      // [Auto-translated] "Birthday Day"
      "bday-day": "생일 날",
      // [Auto-translated] "Birthday Month"
      "bday-month": "생일의 달",
      // [Auto-translated] "Birthday Year"
      "bday-year": "생일 연도",
      // [Auto-translated] "Gender"
      sex: "성별",
      // [Auto-translated] "Website URL"
      url: "웹 사이트 URL",
      // [Auto-translated] "Profile Photo"
      photo: "프로필 사진",
      // [Auto-translated] "Telephone Number"
      tel: "전화번호",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "전화의 국가 코드",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "국내 전화번호",
      // [Auto-translated] "Area Code"
      "tel-area-code": "지역 번호",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "현지 전화번호",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "로컬 전화 접두사",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "지역 전화 접미사",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "전화 내선 번호",
      // [Auto-translated] "Email Address"
      email: "이메일 주소",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "인스턴트 메시징 프로토콜"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "없음",
      // [Auto-translated] "Pattern"
      pattern: "무늬",
      // [Auto-translated] "Numeric"
      numeric: "숫자",
      // [Auto-translated] "Date and Time"
      datetime: "날짜 및 시간",
      // [Auto-translated] "Currency"
      currency: "통화"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "자동",
      // [Auto-translated] "Left"
      left: "왼쪽",
      // [Auto-translated] "Right"
      right: "오른쪽"
    },
    // "All"
    all: "모두",
    // "Page"
    page: "페이지",
    // "Survey"
    survey: "설문지",
    // "When switching to the next page"
    onNextPage: "다음 페이지로",
    // "After an answer is changed"
    onValueChanged: "값 변경",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "답변이 변경되기 전에",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "원래 구조",
      // [Auto-translated] "All questions on a single page"
      singlePage: "모든 질문을 한 페이지에 표시",
      // [Auto-translated] "Each question on an individual page"
      questionPerPage: "페이지당 단일 질문 표시",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "페이지당 단일 입력 필드 표시"
    },
    // [Auto-translated] "No preview"
    noPreview: "미리보기 없음",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "모든 질문 표시",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "답변된 질문만 표시",
    // [Auto-translated] "Show all questions"
    allQuestions: "모든 질문 보기",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "답변된 질문만 표시",
    // [Auto-translated] "Completed pages"
    pages: "완성된 페이지",
    // [Auto-translated] "Answered questions"
    questions: "답변된 질문",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "필수 질문에 답변했습니다.",
    // [Auto-translated] "Valid answers"
    correctQuestions: "유효한 답변",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "완성된 페이지(버튼 UI)",
    // [Auto-translated] "Under the input"
    underInput: "입력 아래",
    // [Auto-translated] "Under the title"
    underTitle: "제목 아래",
    // [Auto-translated] "On blur"
    onBlur: "흐림 현상",
    // [Auto-translated] "While typing"
    onTyping: "입력하는 동안",
    // [Auto-translated] "Under the row"
    underRow: "행 아래",
    // [Auto-translated] "Under the row, only one panel is visible"
    underRowSingle: "행 아래에는 하나의 패널만 표시됩니다",
    // "Auto"
    auto: "자동",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "숨겨진"
    },
    timerInfoMode: {
      // "Both"
      combined: "둘다"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Depends on matrix layout"
      default: "행렬 레이아웃에 따라 다름"
    },
    panelsState: {
      // [Auto-translated] "Users cannot expand or collapse panels"
      default: "사용자는 패널을 확장하거나 축소할 수 없습니다.",
      // [Auto-translated] "All panels are collapsed"
      collapsed: "모든 패널이 축소됩니다",
      // [Auto-translated] "All panels are expanded"
      expanded: "모든 패널이 확장됩니다.",
      // [Auto-translated] "First expanded"
      firstExpanded: "첫 번째 확장"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "정적인",
      // [Auto-translated] "Responsive"
      responsive: "반응"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "이미지",
      // [Auto-translated] "Video"
      video: "비디오",
      // [Auto-translated] "YouTube"
      youtube: "유튜브"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "단추",
      // [Auto-translated] "Dropdown"
      dropdown: "드롭다운(Dropdown)"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "기본값",
      // [Auto-translated] "Scale"
      scale: "저울"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "단색",
      // [Auto-translated] "Colored"
      colored: "유색"
    },
    autoGenerate: {
      // [Auto-translated] "Generate"
      "true": "창조하다",
      // [Auto-translated] "Enter manually"
      "false": "수동으로 입력"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "레이블",
      // [Auto-translated] "Stars"
      stars: "별",
      // [Auto-translated] "Smileys"
      smileys: "스마일리"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "잠긴"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "자동 번호 매기기",
      // [Auto-translated] "Auto-numbering"
      on: "자동 번호 매기기",
      // [Auto-translated] "Reset on each page"
      onPage: "각 페이지에서 재설정",
      // [Auto-translated] "Start on each panel"
      onpanel: "각 패널에서 재설정",
      // [Auto-translated] "Reset on each panel"
      onPanel: "각 패널에서 재설정",
      // [Auto-translated] "Recursive numbering"
      recursive: "재귀 번호 매기기",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "설문조사 계속하기",
      // [Auto-translated] "No numbering"
      off: "번호 매기기 없음"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "질문 제목 아래",
      // [Auto-translated] "Under the input field"
      underInput: "입력 필드 아래"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "선택 항목 옆",
      // [Auto-translated] "Above choices"
      vertical: "위의 선택 사항"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "십진법",
      // [Auto-translated] "Currency"
      currency: "통화",
      // [Auto-translated] "Percentage"
      percent: "백분율",
      // [Auto-translated] "Date"
      date: "날짜"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "십진법",
      // [Auto-translated] "Currency"
      currency: "통화",
      // [Auto-translated] "Percentage"
      percent: "백분율",
      // [Auto-translated] "Date"
      date: "날짜"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "원문 언어"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "원문 언어"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "맨 위로",
      // [Auto-translated] "Bottom"
      bottom: "밑바닥",
      // [Auto-translated] "Top and bottom"
      topbottom: "위쪽 및 아래쪽",
      // [Auto-translated] "Above the header"
      aboveheader: "헤더 위",
      // [Auto-translated] "Below the header"
      belowheader: "헤더 아래",
      // [Auto-translated] "Hidden"
      off: "숨겨진"
    },
    // [Auto-translated] "Sum"
    sum: "합계",
    // [Auto-translated] "Count"
    count: "세다",
    // [Auto-translated] "Min"
    min: "분",
    // [Auto-translated] "Max"
    max: "최대",
    // [Auto-translated] "Avg"
    avg: "평균",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "포함",
      // [Auto-translated] "Starts with"
      startsWith: "다음으로 시작"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "자동",
      // [Auto-translated] "Cover"
      cover: "표지",
      // [Auto-translated] "Contain"
      contain: "포함하다",
      // [Auto-translated] "Stretch"
      fill: "뻗다",
      // [Auto-translated] "Tile"
      tile: "타일"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "부정하게 결정된",
      // [Auto-translated] "Scroll"
      scroll: "스크롤"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "기초의",
      // [Auto-translated] "Advanced"
      advanced: "고급"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "설문 조사와 동일",
      // [Auto-translated] "Fit to container"
      container: "컨테이너에 맞추기"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "없음",
      // [Auto-translated] "Accent color"
      accentColor: "강조 색상",
      // [Auto-translated] "Custom"
      custom: "관습"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "광",
      // [Auto-translated] "Dark"
      dark: "어둠"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "기본값",
      // [Auto-translated] "Without Panels"
      "true": "패널 없음"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "설문 조사와 동일",
      // [Auto-translated] "Same as container"
      container: "컨테이너와 동일"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "비어있습니다",
    // "Not empty"
    notempty: "비어있지 않습니다",
    // "Equals"
    equal: "같습니다",
    // "Does not equal"
    notequal: "같지 않습니다",
    // "Contains"
    contains: "포함합니다",
    // "Does not contain"
    notcontains: "포함하지 않습니다",
    // [Auto-translated] "Any of"
    anyof: "다음 중 하나",
    // [Auto-translated] "All of"
    allof: "모든",
    // "Greater than"
    greater: "큰",
    // "Less than"
    less: "작은",
    // "Greater than or equal to"
    greaterorequal: "크거나 같음",
    // "Less than or equal to"
    lessorequal: "작거나 같음",
    // [Auto-translated] "and"
    and: "그리고",
    // [Auto-translated] "or"
    or: "또는"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Angular 버전 사용",
    // "Use jQuery version"
    jquery: "jQuery 버전 사용",
    // "Use Knockout version"
    knockout: "Knockout 버전 사용",
    // "Use React version"
    react: "React 버전 사용",
    // "Use Vue version"
    vue: "Vue 버전 사용",
    // "For bootstrap framework"
    bootstrap: "부트 스트랩 프레임",
    // [Auto-translated] "Modern theme"
    modern: "현대 테마",
    // [Auto-translated] "Default theme"
    default: "기본 테마",
    // [Auto-translated] "Orange theme"
    orange: "오렌지 테마",
    // [Auto-translated] "Darkblue theme"
    darkblue: "진한 파란색 테마",
    // [Auto-translated] "Darkrose theme"
    darkrose: "다크로즈 테마",
    // [Auto-translated] "Stone theme"
    stone: "돌 테마",
    // [Auto-translated] "Winter theme"
    winter: "겨울 테마",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "겨울 돌 테마",
    // "Show survey on a page"
    showOnPage: "페이지에서 설문조사 보기",
    // "Show survey in a window"
    showInWindow: "윈도우 창에서 설문조사 보기",
    // "Load Survey JSON from server"
    loadFromServer: "서버에서 설문조사 JSON 실행",
    // "Scripts and styles"
    titleScript: "스크립트 및 스타일",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "자바스크립트"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "테스트 할 페이지를 선택하십시오:",
    // [Auto-translated] "Show invisible elements"
    showInvisibleElements: "보이지 않는 요소 표시",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "보이지 않는 요소 숨기기",
    // [Auto-translated] "Previous"
    prevPage: "이전의",
    // [Auto-translated] "Next"
    nextPage: "다음"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "답 개수",
    // "Email"
    emailvalidator: "이메일",
    // "Expression"
    expressionvalidator: "표현식",
    // "Number"
    numericvalidator: "숫자",
    // "Regex"
    regexvalidator: "정규식",
    // "Text"
    textvalidator: "텍스트"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "설문 완료",
    // "Set answer"
    setvaluetrigger: "값 설정",
    // [Auto-translated] "Copy answer"
    copyvaluetrigger: "답변 복사",
    // [Auto-translated] "Skip to question"
    skiptrigger: "질문으로 건너뛰기",
    // [Auto-translated] "Run expression"
    runexpressiontrigger: "표현식 실행",
    // "change visibility (deprecated)"
    visibletrigger: "선명도 변경"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "예: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year."
      pattern: "예: mm/dd/yyyy"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "예: $",
      // "Ex.: USD"
      suffix: "예.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "예: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "예: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "예: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "응답자에게 표시되지 않는 패널 ID입니다.",
      // [Auto-translated] "Type a subtitle."
      description: "패널 부제목을 입력합니다.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "마술 지팡이 아이콘을 사용하여 패널 가시성을 결정하는 조건부 규칙을 설정합니다.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "마술 지팡이 아이콘을 사용하여 패널에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다.",
      // [Auto-translated] "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
      questionTitleLocation: "이 패널 내의 모든 질문에 적용됩니다. 이 설정을 재정의하려면 개별 질문에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "질문 제목이 질문 상자의 왼쪽에 정렬될 때 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "패널 내의 모든 질문과 관련된 오류 메시지의 위치를 설정합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정을 적용합니다.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
      questionOrder: "질문의 원래 순서를 유지하거나 무작위화합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정을 적용합니다.",
      // "Repositions the panel to the end of a selected page."
      page: "선택한 페이지의 끝으로 패널의 위치를 변경합니다.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "패널 내용과 패널 상자의 왼쪽 테두리 사이에 공백 또는 여백을 추가합니다.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "이전 질문 또는 패널과 함께 한 줄로 패널을 표시하려면 선택을 취소합니다. 패널이 양식의 첫 번째 요소인 경우에는 설정이 적용되지 않습니다.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "다음 중에서 선택: \"확장\" - 패널이 전체적으로 표시되며 축소할 수 있습니다. \"축소됨\" - 패널에 제목과 설명만 표시되며 확장할 수 있습니다. \"잠김\" - 패널이 완전히 표시되며 축소할 수 없습니다.",
      // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
      width: "패널의 폭을 같은 줄에 있는 다른 측량 요소에 비례하여 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "이 패널 내에 중첩된 질문에 번호를 할당합니다.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "이 패널이 그리드 레이아웃 내에서 확장되는 열의 수를 지정합니다.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "이 테이블에서는 패널 내의 각 그리드 열을 구성할 수 있습니다. 행의 최대 요소 수를 기준으로 각 열의 너비 백분율을 자동으로 설정합니다. 그리드 레이아웃을 사용자 지정하려면 이러한 값을 수동으로 조정하고 각 열의 모든 질문에 대한 제목 너비를 정의하십시오."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "응답자에게 표시되지 않는 패널 ID입니다.",
      // "Type a panel subtitle."
      description: "패널 부제목을 입력합니다.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "마술 지팡이 아이콘을 사용하여 패널 가시성을 결정하는 조건부 규칙을 설정합니다.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "마술 지팡이 아이콘을 사용하여 패널에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "이 패널 내의 모든 질문에 적용됩니다. 이 설정을 재정의하려면 개별 질문에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "질문 제목이 질문 상자의 왼쪽에 정렬될 때 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "패널 내의 모든 질문과 관련된 오류 메시지의 위치를 설정합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정을 적용합니다.",
      // "Repositions the panel to the end of a selected page."
      page: "선택한 페이지의 끝으로 패널의 위치를 변경합니다.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "패널 내용과 패널 상자의 왼쪽 테두리 사이에 공간 또는 여백을 추가합니다.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "이전 질문 또는 패널과 함께 한 줄로 패널을 표시하려면 선택을 취소합니다. 패널이 양식의 첫 번째 요소인 경우에는 설정이 적용되지 않습니다.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "다음 중에서 선택: \"확장\" - 패널이 전체적으로 표시되며 축소할 수 있습니다. \"축소됨\" - 패널에 제목과 설명만 표시되며 확장할 수 있습니다. \"잠김\" - 패널이 완전히 표시되며 축소할 수 없습니다.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "패널의 폭을 같은 줄에 있는 다른 측량 요소에 비례하여 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "동적 패널 제목에 대한 템플릿을 입력합니다. 패널의 일반 위치에는 {panelIndex}를 사용하고 표시되는 패널 간의 순서에는 {visiblePanelIndex}를 사용합니다. 이러한 자리 표시자를 패턴에 삽입하여 자동 번호 매기기를 추가합니다.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "탭 제목에 대한 템플릿을 입력합니다. 패널의 일반적인 위치에는 {panelIndex}를 사용하고 표시되는 패널 간의 순서에는 {visiblePanelIndex}를 사용합니다. 이러한 자리 표시자를 패턴에 삽입하여 자동 번호 매기기를 추가합니다.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "탭 제목 패턴이 의미 있는 값을 생성하지 않을 때 적용되는 탭 제목에 대한 대체 텍스트입니다.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "이 설정을 사용하면 동적 패널 내에서 개별 패널의 가시성을 제어할 수 있습니다. '{panel}' 자리 표시자를 사용하여 표현식의 현재 패널을 참조합니다.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "이 설정은 이 패널 내의 모든 질문에 자동으로 상속됩니다. 이 설정을 재정의하려면 개별 질문에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "\"상속\" 옵션은 페이지 수준(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"패널 제목 아래\")을 적용합니다.",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "새로 추가된 패널의 위치를 정의합니다. 기본적으로 새 패널이 끝에 추가됩니다. \"다음\"을 선택하여 현재 패널 뒤에 새 패널을 삽입합니다.",
      // [Auto-translated] "Duplicates answers from the last panel and assigns them to the next added dynamic panel."
      copyDefaultValueFromLastEntry: "마지막 패널의 답변을 복제하여 다음에 추가된 동적 패널에 할당합니다.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "사용자가 각 패널에서 이 질문에 대해 고유한 응답을 제공하도록 요구하려면 질문 이름을 참조합니다.",
      // [Auto-translated] "Triggers a prompt asking to confirm the row removal."
      confirmDelete: "패널을 제거하기 전에 확인 프롬프트를 트리거합니다."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "행을 제거하기 전에 확인 프롬프트를 트리거합니다.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "행렬에 새 행이 추가될 때 세부 정보 섹션을 자동으로 확장합니다."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "마지막 행의 답변을 복제하여 다음에 추가된 동적 행에 할당합니다.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "이 설정을 사용하면 표현식에 따라 기본 답안 값을 할당할 수 있습니다. 표현식에는 기본 계산('{q1_id} + {q2_id}'), 부울 표현식(예: '{age} > 60') 및 함수 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등이 포함될 수 있습니다. 이 표현식에 의해 결정된 값은 응답자의 수동 입력으로 재정의할 수 있는 초기 기본값으로 사용됩니다.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "마술 지팡이 아이콘을 사용하여 응답자의 입력이 \"기본값 표현식\" 또는 \"설정 값 표현식\" 또는 \"기본 답변\" 값(둘 중 하나가 설정된 경우)에 기반한 값으로 재설정되는 시점을 결정하는 조건부 규칙을 설정합니다.",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "마술 지팡이 아이콘을 사용하여 \"값 설정 표현식\"을 실행할 시기를 결정하는 조건부 규칙을 설정하고 결과 값을 응답으로 동적으로 할당합니다.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "\"Set value if\" 규칙의 조건이 충족될 때 설정할 값을 정의하는 표현식을 지정합니다. 표현식에는 기본 계산('{q1_id} + {q2_id}'), 부울 표현식(예: '{age} > 60') 및 함수 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등이 포함될 수 있습니다. 이 표현식에 의해 결정된 값은 응답자의 수동 입력에 의해 재정의될 수 있습니다.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator를 사용하면 양식 요소의 인라인 너비를 수동으로 조정하여 레이아웃을 제어할 수 있습니다. 이렇게 해도 원하는 결과가 나오지 않으면 열 기반 시스템을 사용하여 요소를 형성하는 구조체인 그리드 레이아웃을 활성화할 수 있습니다. 레이아웃 열을 구성하려면 페이지 또는 패널을 선택하고 \"질문 설정\" → \"그리드 열\" 테이블을 사용합니다. 질문의 열 수를 조정하려면 질문을 선택하고 \"레이아웃\" → \"열 범위\" 입력란에서 원하는 값을 설정합니다.",
    question: {
      // "A question ID that is not visible to respondents."
      name: "응답자에게 표시되지 않는 질문 ID입니다.",
      // "Type a question subtitle."
      description: "질문 부제목을 입력합니다.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "마술 지팡이 아이콘을 사용하여 질문 가시성을 결정하는 조건부 규칙을 설정합니다.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "마술 지팡이 아이콘을 사용하여 질문에 대한 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "마술 지팡이 아이콘을 사용하여 질문에 대한 답변을 받지 않는 한 설문조사 진행 또는 제출을 금지하는 조건부 규칙을 설정합니다.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "질문을 이전 질문 또는 패널과 함께 한 줄로 표시하려면 선택을 취소합니다. 질문이 양식의 첫 번째 요소인 경우에는 설정이 적용되지 않습니다.",
      // "Repositions the question to the end of a selected page."
      page: "선택한 페이지의 끝으로 질문의 위치를 변경합니다.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "다음 중에서 선택: \"확장\" - 질문 상자가 전체적으로 표시되며 축소할 수 있습니다. \"축소됨\" - 질문 상자에는 제목과 설명만 표시되며 확장할 수 있습니다. \"잠김\" - 질문 상자가 완전히 표시되며 축소할 수 없습니다.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "패널, 페이지 또는 설문조사 수준에 정의된 제목 정렬 규칙을 재정의합니다. \"상속\" 옵션은 더 높은 수준의 설정(설정된 경우) 또는 설문조사 수준 설정(기본적으로 \"맨 위\")을 적용합니다.",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "\"상속\" 옵션은 현장조사 수준 설정(기본 설정에 따라 \"질문 제목 아래\")을 적용합니다.",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "질문 콘텐츠와 질문 상자의 왼쪽 테두리 사이에 공백 또는 여백을 추가합니다.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "같은 줄에 있는 다른 설문조사 요소에 비례하여 질문의 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "다음 중에서 선택: \"초점을 잃을 때\" - 입력 필드가 초점을 잃을 때 값이 업데이트됩니다. \"While typing\" - 사용자가 입력할 때 값이 실시간으로 업데이트됩니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"초점 손실 시\")을 적용합니다.",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "모든 웹 서비스를 객관식 질문의 데이터 소스로 사용할 수 있습니다. 선택 항목 값을 채우려면 데이터를 제공하는 서비스의 URL을 입력합니다.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "드롭다운 목록을 필터링하는 데 사용되는 비교 작업입니다.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "선택 옵션의 긴 텍스트는 드롭다운 메뉴에 맞게 줄 바꿈을 자동으로 생성합니다. 텍스트를 자르려면 선택을 취소합니다.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "이 질문이 그리드 레이아웃 내에서 얼마나 많은 열에 걸쳐 있는지 지정합니다."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "마술 지팡이 아이콘을 사용하여 질문의 값이 유효한 것으로 간주되는 시기를 정의합니다."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "표시된 서명 영역과 결과 이미지의 너비를 설정합니다.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "표시된 서명 영역과 결과 이미지의 높이를 설정합니다.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "기본 3:2 종횡비를 유지하면서 서명 영역이 질문 상자 내의 사용 가능한 모든 공간을 채우도록 하려면 선택합니다. 사용자 지정 너비 및 높이 값을 설정하면 설정은 이러한 치수의 가로 세로 비율을 유지합니다."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "미리보기에 업로드된 이미지의 표시 높이와 카메라로 촬영한 이미지의 실제 높이를 지정합니다. 단일 파일 업로드 모드에서는 디스플레이 높이가 미리보기 영역에 의해 제한됩니다. 다중 파일 업로드 모드에서는 썸네일 영역에 의해 제한됩니다.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "미리보기에 업로드된 이미지의 표시 너비와 카메라로 촬영한 이미지의 실제 너비를 지정합니다. 단일 파일 업로드 모드에서는 디스플레이 너비가 미리보기 영역에 의해 제한됩니다. 다중 파일 업로드 모드에서는 썸네일 영역에 의해 제한됩니다.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "가능한 경우 업로드된 파일에 대한 썸네일 미리보기를 표시합니다. 대신 파일 아이콘을 표시하려면 선택을 취소합니다."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "\"자동\" 옵션은 제공된 소스 URL을 기반으로 표시에 적합한 모드(이미지, 비디오 또는 YouTube)를 자동으로 결정합니다."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "최소 및 최대 높이 값을 재정의합니다.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "최소 및 최대 너비 값을 재정의합니다.",
      // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
      choices: "\"Value\"는 조건부 규칙에 사용되는 항목 ID로 사용됩니다. 응답자에게 \"텍스트\"가 표시됩니다.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "\"이미지\"와 \"비디오\" 중에서 선택하여 미디어 선택기의 콘텐츠 모드를 설정합니다. \"이미지\"를 선택한 경우 제공된 모든 옵션이 JPEG, GIF, PNG, APNG, SVG, BMP, ICO 형식의 이미지 파일인지 확인하십시오. 마찬가지로 \"비디오\"를 선택한 경우 모든 옵션이 MP4, MOV, WMV, FLV, AVI, MKV 형식의 비디오 파일에 대한 직접 링크인지 확인하십시오. YouTube 링크는 비디오 옵션에서 지원되지 않습니다."
    },
    text: {
      // [Auto-translated] "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length."
      size: "이 설정은 입력 필드의 크기만 조정하며 질문 상자의 너비에는 영향을 주지 않습니다. 허용되는 입력 길이를 제한하려면 <b>유효성 검사 → 최대 문자 제한</b>으로 이동합니다."
    },
    comment: {
      // [Auto-translated] "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
      rows: "입력 필드에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "응답자가 설문조사를 작성하지 못하도록 하려면 선택합니다.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "진행률 표시줄의 위치를 설정합니다. \"자동\" 값은 설문조사 헤더 위 또는 아래에 진행률 표시줄을 표시합니다."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "응답자에게 표시되지 않는 열 ID입니다.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "열에 대해 활성화된 경우, 응답자는 이 열 내의 각 질문에 대해 고유한 응답을 제공해야 합니다.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "입력 필드에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "마술 지팡이 아이콘을 사용하여 열 표시 유형을 결정하는 조건부 규칙을 설정합니다.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "마술 지팡이 아이콘을 사용하여 열에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "이 옵션을 선택하면 각 선택 옵션에 대한 개별 열이 만들어집니다.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
      colCount: "선택 옵션을 여러 열 레이아웃으로 정렬합니다. 0으로 설정하면 옵션이 한 줄로 표시됩니다. -1로 설정하면 실제 값이 부모 행렬의 \"중첩 열 수\" 속성에서 상속됩니다."
    },
    slider: {
      // "The lowest number that users can select."
      min: "사용자가 선택할 수 있는 가장 낮은 숫자입니다.",
      // "The highest number that users can select."
      max: "사용자가 선택할 수 있는 가장 높은 숫자입니다.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "선택 가능한 배율 값 사이의 간격입니다. 예를 들어 5단계를 통해 사용자는 0, 5, 10 등을 선택할 수 있습니다.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "사용자가 설정할 수 있는 슬라이더 엄지 단추 사이의 최소 거리입니다.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "사용자가 설정할 수 있는 슬라이더 썸 사이의 최대 거리입니다.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "생성할 축척 레이블 수를 지정합니다. 값이 -1이면 숫자가 Min 값과 Max 값을 기준으로 자동으로 계산됩니다.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "'{0}'를 실제 값의 자리 표시자로 사용합니다.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "특정 값에서 사용자 지정 레이블을 정의하고 선택적으로 해당 텍스트를 할당할 수 있습니다(예: 0 = \"나쁨\", 100 = \"우수\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "'{0}'를 실제 값의 자리 표시자로 사용합니다.",
      // "Allows users to move one thumb past the other."
      allowSwap: "사용자가 한 엄지 손가락을 다른 엄지 손가락 뒤로 이동할 수 있습니다.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "선택한 슬라이더 값을 지우고 undefined로 설정하는 버튼을 표시합니다.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "표현식을 사용하여 슬라이더의 최소값을 동적���로 정의합니다. 기본 계산(예: '{q1_id} + {q2_id}'), 부울 논리(예: '{age} > 60') 및 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등과 같은 함수를 지원합니다.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "표현식을 사용하여 슬라이더의 최대값을 동적으로 정의합니다. 기본 계산(예: '{q1_id} + {q2_id}'), 부울 논리(예: '{age} > 60') 및 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등과 같은 함수를 지원합니다."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "이 선택은 배타적입니다. 사용자가 선택하면 질문의 다른 모든 옵션이 자동으로 선택 해제됩니다.",
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "정규식에서 대문자와 소문자를 동등하게 취급해야 하는 경우 선택합니다.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "다음 중에서 선택합니다. \"정적\" - 고정 너비를 설정합니다. \"반응형\" - 설문조사가 화면의 전체 너비를 차지하도록 합니다. \"자동\" - 사용된 질문 유형에 따라 둘 중 하나를 적용합니다.",
    // [Auto-translated] "Cookies prevent users from filling out the same survey twice."
    cookieName: "쿠키는 사용자가 동일한 설문조사를 두 번 작성하는 것을 방지합니다.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "이미지 링크(크기 제한 없음)를 붙여넣거나 폴더 아이콘을 클릭하여 컴퓨터에서 파일을 찾습니다(최대 64KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "로고 너비를 CSS 단위(px, %, in, pt 등)로 설정합니다.",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "로고 높이를 CSS 단위(px, %, in, pt 등)로 설정합니다.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "다음 중에서 선택: \"없음\" - 이미지가 원래 크기를 유지합니다. \"Contain\" - 가로 세로 비율을 유지하면서 이미지의 크기가 조정됩니다. \"표지\" - 이미지가 종횡비를 유지하면서 전체 상자를 채웁니다. \"채우기\" - 가로 세로 비율을 유지하지 않고 상자를 채우기 위해 이미지가 늘어납니다.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "응답자가 현재 페이지의 모든 질문에 답변한 후 설문조사가 다음 페이지로 자동 진행되도록 하려면 선택합니다. 페이지의 마지막 질문이 서술형이거나 여러 답변을 허용하는 경우에는 이 기능이 적용되지 않습니다.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "응답자가 모든 질문에 답변한 후 설문조사가 자동으로 완료되도록 하려면 선택합니다.",
    // [Auto-translated] "Sets the visibility and location of navigation buttons on a page."
    showNavigationButtons: "페이지에서 탐색 단추의 표시 여부와 위치를 설정합니다.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "페이지에서 탐색 단추의 위치를 설정합니다.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "모든 질문 또는 답변된 질문만 있는 미리보기 페이지를 활성화합니다.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "설문조사 내의 모든 질문에 적용됩니다. 이 설정은 하위 수준(패널, 페이지 또는 질문)의 제목 정렬 규칙으로 재정의할 수 있습니다. 낮은 수준의 설정은 더 높은 수준의 설정보다 우선합니다.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "답변이 필요함을 나타내는 기호 또는 일련의 기호입니다.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "번호 매기기를 시작할 숫자 또는 문자를 입력합니다.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "각 페이지의 첫 번째 입력 필드를 텍스트 입력에 사용할 수 있도록 준비하려면 선택합니다.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "질문의 원래 순서를 유지하거나 무작위화합니다. 이 설정의 효과는 미리보기 탭에서만 볼 수 있습니다.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "텍스트 입력 질문에만 해당됩니다.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "질문 댓글에만 해당됩니다.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears."
    commentAreaRows: "질문 주석에 대해 텍스트 영역에 표시되는 줄 수를 설정합니다. 입력이 더 많은 줄을 차지하면 스크롤 막대가 나타납니다.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "질문 댓글과 긴 텍스트 질문의 높이가 입력한 텍스트 길이에 따라 자동으로 커지도록 하려면 선택합니다.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "질문 댓글 및 긴 텍스트 질문에만 해당됩니다.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "사용자 지정 변수는 양식 계산에 사용되는 중간 또는 보조 변수 역할을 합니다. 응답자 입력을 소스 값으로 사용합니다. 각 맞춤 변수에는 고유한 이름과 기준이 되는 표현식이 있습니다.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "표현식의 계산된 값을 현장조사 결과와 함께 저장하려면 선택합니다.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "트리거는 표현식을 기반으로 하는 이벤트 또는 조건입니다. 표현식이 \"true\"로 평가되면 트리거가 작업을 시작합니다. 이러한 작업에는 선택적으로 영향을 미치는 대상 질문이 있을 수 있습니다.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "조건부 논리에 의해 숨겨진 질문의 값을 지울지 여부와 지울 시기를 선택합니다.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "다음 중에서 선택: \"초점을 잃을 때\" - 입력 필드가 초점을 잃을 때 값이 업데이트됩니다. \"While typing\" - 사용자가 입력할 때 값이 실시간으로 업데이트됩니다.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "왼쪽 값은 조건부 규칙에 사용되는 열 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "왼쪽 값은 조건부 규칙에 사용되는 행 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    // [Auto-translated] "Visible only when at least one column has Total type or Total expression."
    totalText: "하나 이상의 열에 Total 유형 또는 Total 표현식이 있는 경우에만 표시됩니다.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "잘못된 입력이 있는 셀과 관련하여 오류 메시지의 위치를 설정합니다. \"상속\" 옵션은 \"오류 메시지 맞춤\" 속성의 설정을 적용합니다.",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "세부 섹션에 중첩된 질문에 대한 오류 메시지의 위치를 설정합니다. \"Inherit\" 옵션은 \"Error message alignment\" 속성의 설정을 적용합니다.",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "\"중복 응답 방지\" 속성이 활성화된 경우, 중복 항목을 제출하려는 응답자는 다음과 같은 오류 메시지를 받게 됩니다.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "표현식을 기준으로 합계 값을 계산할 수 있습니다. 표현식에는 기본 계산('{q1_id} + {q2_id}'), 부울 표현식('{age} > 60') 및 함수('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등)이 포함될 수 있습니다.",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "지정된 열에 동일한 값이 포함되어 있으면 현장조사에서 \"고유하지 않은 키 값\" 오류가 발생합니다.",
    // "Type a subtitle."
    description: "자막을 입력합니다.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "설문조사 만들기를 시작할 언어를 선택합니다. 번역을 추가하려면 새 언어로 전환하고 여기 또는 번역 탭에서 원본 텍스트를 번역합니다.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "행을 기준으로 세부 정보 섹션의 위치를 설정합니다. 다음 중에서 선택: \"없음\" - 확장이 추가되지 않습니다. \"행 아래\" - 행 확장이 행렬의 각 행 아래에 배치됩니다. \"행 아래에 한 행 확장만 표시\" - 확장은 단일 행 아래에만 표시되고 나머지 행 확장은 축소됩니다.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "다음 중에서 선택: \"없음\" - 이미지가 원래 크기를 유지합니다. \"Contain\" - 가로 세로 비율을 유지하면서 이미지의 크기가 조정됩니다. \"표지\" - 이미지가 종횡비를 유지하면서 전체 상자를 채웁니다. \"채우기\" - 가로 세로 비율을 유지하지 않고 상자를 채우기 위해 이미지가 늘어납니다.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "데이터가 입력될 때 입력 필드의 높이를 점진적으로 늘립니다. \"입력 필드 높이(줄 단위)\" 설정을 재정의합니다.",
    // [Auto-translated] "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field."
    allowResize: "크기 조정 핸들(또는 그립)이 모서리에 나타나며 드래그하여 입력 필드의 크기를 변경할 수 있습니다.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the Thank You page."
    timeLimit: "설문조사가 감사 인사 페이지로 자동 전환되기까지의 시간 간격(초)입니다.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page."
    timeLimitPerPage: "설문조사가 다음 페이지로 자동 넘어가는 시간 간격(초)입니다.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "이 옵션을 사용하면 사용자가 빈 입력 필드에 집중한 다음 변경하지 않고 떠날 때 유효성 검사를 트리거합니다.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "응답자에게 표시되지 않는 페이지 ID입니다.",
      // "Type a page subtitle."
      description: "페이지 부제목을 입력합니다.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "진행률 표시줄 또는 목차(TOC)의 탐색 단추에 표시되는 캡션입니다. 이 필드를 비워 두면 탐색 버튼에서 페이지 제목 또는 페이지 이름을 사용합니다. 진행률 표시줄 또는 TOC를 활성화하려면 \"설문 조사\" → \"탐색\"으로 이동합니다.",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "설문조사가 다음 페이지로 자동 넘어가는 시간 간격(초)입니다.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "마술 지팡이 아이콘을 사용하여 페이지 표시 여부를 결정하는 조건부 규칙을 설정할 수 있습니다.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "마술 지팡이 아이콘을 사용하여 페이지에 대해 읽기 전용 모드를 비활성화하는 조건부 규칙을 설정합니다.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "마술 지팡이 아이콘을 사용하여 하나 이상의 중첩된 질문에 답변이 없는 한 설문조사 제출을 금지하는 조건부 규칙을 설정합니다.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "이 페이지 내의 모든 질문에 적용됩니다. 이 설정을 재정의하려면 개별 질문 또는 패널에 대한 제목 정렬 규칙을 정의합니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "질문 제목이 질문 상자의 왼쪽에 정렬될 때 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "잘못된 입력이 있는 질문과 관련된 오류 메시지의 위치를 설정합니다. 다음 중 하나를 선택합니다. \"상단\" - 오류 텍스트가 질문 상자 상단에 배치됩니다. \"하단\" - 오류 텍스트가 질문 상자 하단에 배치됩니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"상단\")을 적용합니다.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "질문의 원래 순서를 유지하거나 무작위화합니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"원본\")을 적용합니다. 이 설정의 효과는 미리보기 탭에서만 볼 수 있습니다.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "페이지에서 탐색 단추의 표시 여부를 설정합니다. \"상속\" 옵션은 설문조사 수준 설정을 적용하며, 기본값은 \"표시\"입니다.",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "이 테이블을 사용하면 페이지의 각 그리드 열을 구성할 수 있습니다. 행의 최대 요소 수를 기준으로 각 열의 너비 백분율을 자동으로 설정합니다. 그리드 레이아웃을 사용자 지정하려면 이러한 값을 수동으로 조정하고 각 열의 모든 질문에 대한 제목 너비를 정의하십시오."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "페이지에서 타이머의 위치를 설정합니다.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "다음 중에서 선택: \"잠김\" - 사용자가 패널을 확장하거나 축소할 수 없습니다. \"모두 축소\" - 모든 패널이 축소된 상태에서 시작됩니다. \"모두 확장\" - 모든 패널이 확장된 상태에서 시작됩니다. \"첫 번째 확장\" - 첫 번째 패널만 처음에 확장됩니다.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "선택 목록에 표시할 이미지 또는 비디오 파일 URL이 포함된 객체 배열 내에 공유 속성 이름을 입력합니다.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "왼쪽 값은 조건부 규칙에 사용되는 항목 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "표시할 사용자에게 친숙한 제목을 입력합니다.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "파일이 업로드될 때까지 사용자가 설문조사를 완료하지 않도록 합니다.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "CSS 값(px, %, in, pt 등)을 허용합니다.",
    // [Auto-translated] "If you do not set this property, the answer will be stored in a field specified by the Name property."
    valueName: "이 속성을 설정하지 않으면 대답이 Name 속성으로 지정된 필드에 저장됩니다.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "HTML 질문과 설문 요소의 동적 제목 및 설명에 표시되는 값으로, 질문 값이 비어 있을 때 표시됩니다.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "단답형 및 다중선택 질문 유형에서 각 선택 옵션에는 ID와 표시 값이 있습니다. 이 설정을 선택하면 HTML 질문과 동적 제목 및 현장조사 요소에 대한 설명에서 ID 값 대신 표시 값이 표시됩니다.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "조건부 논리에 의해 숨겨진 질문 값을 지울지 여부와 지울 시기를 선택합니다. \"상속\" 옵션은 설문조사 수준 설정(기본적으로 \"설문조사 완료 시\")을 적용합니다.",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "다음 중에서 선택: \"모두\" - 선택한 질문의 모든 선택 옵션을 복사합니다. \"선택됨\" - 선택한 선택 옵션만 동적으로 복사합니다. \"선택되지 않음\" - 선택되지 않은 선택 옵션만 동적으로 복사합니다. \"없음\" 및 \"기타\" 옵션은 원본 질문에서 활성화된 경우 기본적으로 복사됩니다.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "단일 선택 및 다중 선택 질문 유형에서 각 선택 옵션에는 ID와 표시 값이 있습니다. 이 설정은 ID를 제공해야 하는 행렬 열 또는 패널 질문을 지정합니다.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "단일 선택 및 다중 선택 질문 유형에서 각 선택 옵션에는 ID와 표시 값이 있습니다. 이 설정은 표시 텍스트를 제공해야 하는 행렬 열 또는 패널 질문을 지정합니다.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "드롭다운에서 원하는 옵션을 사용할 수 없는 경우 응답자가 자신의 선택 항목을 추가할 수 있도록 하려면 선택합니다. 사용자 지정 선택 항목은 현재 브라우저 세션 동안 일시적으로만 저장됩니다.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "이 옵션을 선택하면 사용자가 별도의 주석 상자에 추가 입력을 포함할 수 있습니다.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "각 특수 선택 옵션(\"없음\", \"기타\", \"모두 선택\")을 새 줄에 표시합니다(여러 열 레이아웃을 사용하는 경우에도 마찬가지임).",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "서비스 데이터 세트 내에서 대상 객체 배열이 있는 위치를 지정합니다. URL이 이미 배열을 가리키는 경우 비워 둡니다.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "선택 목록에 표시할 값을 포함하는 객체 배열 내에 균일한 특성 이름을 입력합니다.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "서비스가 빈 응답 또는 배열을 반환하도록 허용하려면 선택합니다.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "마술 지팡이 아이콘을 사용하여 모든 선택 옵션의 표시 유형을 결정하는 조건부 규칙을 설정합니다.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "왼쪽 값은 조건부 규칙에 사용되는 항목 ID 역할을 하며, 오른쪽 값은 응답자에게 표시됩니다.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"자동\"은 사용 가능한 너비에 따라 \"버튼\"과 \"드롭다운\" 모드 중에서 선택합니다. 너비가 부족하여 버튼을 표시할 수 없는 경우 질문에 드롭다운이 표시됩니다."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "다양한 형식의 결과를 생성하는 질문을 연결할 수 있습니다. 이러한 질문이 조인 식별자를 사용하여 서로 연결되면 이 공유 속성은 선택한 질문 값을 저장합니다.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "사용자가 입력 필드에 입력하는 검색어와 일치하도록 드롭다운 메뉴 내용을 업데이트하려면 선택합니다.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "응답자들이 긍정적인 답변을 할 때 설문조사 결과에 저장하는 값입니다.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "응답자들이 부정적인 답변을 할 때 설문조사 결과에 저장하는 값입니다.",
    // [Auto-translated] "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "이 옵션은 미리 보기 이미지를 재정의하고 사용자가 파일이 업로드되었는지 여부를 이해하기 어렵게 만들기 때문에 사용하지 않도록 설정하지 않는 것이 좋습니다.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "파일 삭제를 확인하는 프롬프트를 트리거합니다.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "선택한 선택 항목만 순위를 지정할 수 있습니다. 사용자는 선택 목록에서 선택한 항목을 끌어 순위 영역 내에서 정렬합니다.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "입력 시 응답자에게 제안될 선택 사항 목록을 입력합니다.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "이 설정은 입력 필드의 크기만 조정하며 질문 상자의 너비에는 영향을 주지 않습니다.",
    // [Auto-translated] "Sets consistent width for all item labels in pixels"
    itemTitleWidth: "모든 항목 레이블에 대해 일관된 너비를 설정합니다. CSS 값(px, %, in, pt 등)을 허용합니다.",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "필드 내에서 입력 값을 정렬하는 방법을 선택합니다. 기본 설정인 \"Auto\"는 통화 또는 숫자 마스킹이 적용된 경우 입력 값을 오른쪽에 정렬하고 그렇지 않은 경우 왼쪽에 정렬합니다.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "사용자의 장치에 이미지를 표시할 수 없는 경우 접근성을 위해 대신 사용할 수 있습니다.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "등급 아이콘 유형이 \"스마일리\"로 설정된 경우 선택한 이모티콘의 색상을 정의합니다. 다음 중 하나를 선택합니다. \"기본값\" - 선택한 이모티콘이 기본 설문조사 색상으로 표시됩니다. \"척도\"-선택한 이모티콘은 등급 척도에서 색상을 상속합니다.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "응답자에게 표시되지 않는 표현식 ID입니다.",
      // "Type an expression subtitle."
      description: "표현식 부제목을 입력합니다.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "표현식에는 기본 계산('{q1_id} + {q2_id}'), 조건('{age} > 60') 및 함수('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' 등)가 포함될 수 있습니다."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "\"기타\" 옵션 값을 측량 결과에 별도의 속성으로 저장하려면 선택합니다.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "{0} 실제 값의 자리 표시자로 사용합니다.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "자세한 내용은 [accept](https://www.w3schools.com/tags/att_input_accept.asp) 속성 설명을 참조하십시오.",
    // [Auto-translated] "Applicable only to Radiogroup and Checkbox cell types."
    columnColCount: "Radiogroup 및 Checkbox 셀 유형에만 적용할 수 있습니다.",
    // [Auto-translated] "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information."
    autocomplete: "자세한 내용은 [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) 속성 설명을 참조하십시오.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "\"소스 유형\"이 \"로컬 파일\"이거나 카메라를 사용할 수 없는 경우에 적용됩니다.",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "\"소스 유형\"이 \"카메라\"인 경우에 적용됩니다.",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "\"소스 유형\"이 \"로컬 파일 또는 카메라\"인 경우에 적용됩니다.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "선택 옵션을 다중 열 레이아웃으로 정렬합니다. 0으로 설정하면 옵션이 한 줄로 표시됩니다.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "마스크가 적용된 질문 값을 현장조사 결과에 저장하려면 선택합니다."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "패턴에는 문자열 리터럴과 다음 자리 표시자가 포함될 수 있습니다. '9' - 숫자의 경우; 'a' - 대문자 또는 소문자의 경우; '#' - 숫자 또는 대문자 또는 소문자의 경우. 백슬래시 '\\'를 사용하여 문자를 이스케이프합니다."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "패턴에는 구분 기호와 다음 자리 표시자가 포함될 수 있습니다<br>.'m' - 월 번호입니다.<br>'mm' - 월 숫자 값으로, 한 자리 값의 경우 앞에 0이 옵니다. <br>'d' - 해당 월의 일. <br>'dd' - 한 자리 값의 경우 앞에 0이 오는 월의 일입니다. <br>'yy' - 연도의 마지막 두 자리 숫자입니다. <br>'yyyy' - 4자리 연도입니다. <br>'H' - 24시간 형식의 시간입니다. <br>'HH' - 24시간 형식의 시간으로, 한 자리 값의 경우 앞에 0이 옵니다. <br>'h' - 12시간 형식의 시간입니다. <br>'hh' - 12시간 형식의 시간으로, 한 자리 값의 경우 앞에 0이 옵니다. <br>'MM' - 분. <br>'ss' - 초. <br>'TT' - 대문자로 된 12시간제 기간(AM/PM)입니다. <br>'tt' - 소문자로 된 12시간제 기간(오전/오후)입니다."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "표시된 숫자의 정수 부분에서 소수 부분을 구분하는 데 사용되는 기호입니다.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "큰 숫자의 숫자를 3개의 그룹으로 구분하는 데 사용되는 기호입니다.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "표시된 숫자의 소수점 뒤에 유지할 자릿수를 제한합니다."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "값 앞에 표시할 하나 또는 여러 개의 기호입니다.",
      // "One or several symbols to be displayed after the value."
      suffix: "값 뒤에 표시할 하나 또는 여러 개의 기호입니다."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "이 설정은 패널 외부의 질문에만 적용됩니다.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "주요 측량 요소를 강조하는 보조 색상을 설정합니다.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "설문조사 배경을 기준으로 패널과 질문 상자의 투명도를 조정합니다.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "현장조사 배경에 상대적인 입력 요소의 투명도를 조정합니다.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "모든 직사각형 요소의 구석 반지름을 설정합니다. Advanced Mode(고급 모드)를 활성화하면 입력 요소 또는 패널 및 질문 상자에 대한 개별 모서리 반경 값을 설정할 수 있습니다.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "현장조사의 기본 배경색을 설정합니다."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "\"컨테이너와 동일\" 옵션은 설문조사가 배치된 HTML 요소에 맞게 헤더 콘텐츠 영역 너비를 자동으로 조정합니다.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "설문조사 제목과 설명이 포함된 헤더 영역의 너비로, 픽셀 단위로 측정됩니다.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "활성화하면 설문조사의 상단이 헤더의 하단에 오버레이됩니다.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "0으로 설정하면 헤더의 내용을 수용하기 위해 높이가 자동으로 계산됩니다."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "\"컨테이너와 동일\" 옵션은 설문조사가 배치된 HTML 요소에 맞게 진행률 표시줄 영역 너비를 자동으로 조정합니다.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "'설문조사 레이아웃'이 '페이지당 단일 입력 필드'로 설정된 경우에 사용됩니다. 이 레이아웃에서는 각 입력 필드가 별도의 페이지에 표시되도록 행렬이 분할됩니다. {rowIndex} 자리 표시자를 사용하여 자동 번호 매기기를 삽입하고, {rowTitle} 또는 {rowName}을 사용하여 행의 제목 또는 ID를 참조하고, {row.columnid}를 사용하여 특정 행렬 열의 값을 포함합니다."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "제목",
      // "Leave it empty, if it is the same as 'Name'"
      title: "'이름'과 같은 경우 비워 둡니다."
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "다중 선택 허용",
    // [Auto-translated] "Show image captions"
    showLabel: "이미지 캡션 표시",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "예와 아니요의 순서를 바꿉니다.",
    // [Auto-translated] "Value"
    value: "값",
    // [Auto-translated] "Tab alignment"
    tabAlign: "탭 정렬",
    // [Auto-translated] "Source type"
    sourceType: "소스 유형",
    // [Auto-translated] "Fit to container"
    fitToContainer: "컨테이너에 맞추기",
    // [Auto-translated] "Set value expression"
    setValueExpression: "설정 값 표현식",
    // "Description"
    description: "설명",
    // [Auto-translated] "Logo fit"
    logoFit: "로고 핏",
    // [Auto-translated] "Pages"
    pages: "페이지",
    // [Auto-translated] "Questions"
    questions: "질문",
    // "Triggers"
    triggers: "트리거",
    // [Auto-translated] "Calculated values"
    calculatedValues: "계산된 값",
    // [Auto-translated] "Survey id"
    surveyId: "설문조사 ID",
    // [Auto-translated] "Survey post id"
    surveyPostId: "설문조사 게시물 ID",
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "설문 조사 쇼 데이터 저장",
    // [Auto-translated] "Question description location"
    questionDescriptionLocation: "질문 설명 위치",
    // [Auto-translated] "Progress bar type"
    progressBarType: "진행률 표시줄 유형",
    // [Auto-translated] "Show TOC"
    showTOC: "TOC 표시",
    // [Auto-translated] "Toc location"
    tocLocation: "목차 위치",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "질문 제목 패턴",
    // [Auto-translated] "Width mode"
    widthMode: "폭 모드",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "브랜드 정보 표시",
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "동적 텍스트에서 표시 값 사용Use display values in dynamic texts",
    // "Visible if"
    visibleIf: "조건 충족시 보기",
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "기본값 표현식",
    // [Auto-translated] "Required if"
    requiredIf: "다음과 같은 경우 필수입니다.",
    // [Auto-translated] "Reset value if"
    resetValueIf: "다음과 같은 경우 값을 재설정합니다.",
    // [Auto-translated] "Set value if"
    setValueIf: "다음과 같은 경우 값을 설정합니다.",
    // "Validation rules"
    validators: "유효성 검사기",
    // [Auto-translated] "Bindings"
    bindings: "바인딩",
    // [Auto-translated] "Render as"
    renderAs: "렌더링 형식",
    // [Auto-translated] "Attach original items"
    attachOriginalItems: "원본 항목 첨부",
    // "Choices"
    choices: "선택",
    // "Choices by url"
    choicesByUrl: "URL을 통한 선택",
    // "Currency"
    currency: "화폐",
    // [Auto-translated] "Cell hint"
    cellHint: "셀 힌트",
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "총 최대 자릿수",
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "총 최소 자릿수",
    // "Columns"
    columns: "열",
    // [Auto-translated] "Detail elements"
    detailElements: "세부 요소",
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "적응형 작업 허용",
    // [Auto-translated] "Default row value"
    defaultRowValue: "기본 행 값",
    // [Auto-translated] "Detail panel show on adding"
    detailPanelShowOnAdding: "새 행 세부 정보 자동 확장",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "선택 지연 로드 사용",
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "선택 지연 로드 페이지 크기",
    // [Auto-translated] "Input field component"
    inputFieldComponent: "입력 필드 구성 요소",
    // [Auto-translated] "Item component"
    itemComponent: "항목 구성 요소",
    // [Auto-translated] "Min"
    min: "분",
    // [Auto-translated] "Max"
    max: "최대",
    // [Auto-translated] "Min value expression"
    minValueExpression: "최소값 표현식",
    // [Auto-translated] "Max value expression"
    maxValueExpression: "최대값 표현식",
    // [Auto-translated] "Step"
    step: "걸음",
    // [Auto-translated] "Data list"
    dataList: "데이터 목록",
    // "Input field width (in characters)"
    inputSize: "항목 크기",
    // [Auto-translated] "Item label width (in px)"
    itemTitleWidth: "항목 레이블 너비(px)",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "입력 값 정렬",
    // [Auto-translated] "Elements"
    elements: "요소",
    // [Auto-translated] "Content"
    content: "콘텐츠",
    // [Auto-translated] "Navigation title"
    navigationTitle: "탐색 제목",
    // [Auto-translated] "Navigation description"
    navigationDescription: "탐색 설명",
    // [Auto-translated] "Long tap"
    longTap: "길게 탭하기",
    // [Auto-translated] "Auto grow"
    autoGrow: "자동 성장",
    // [Auto-translated] "Allow resizing"
    allowResize: "크기 조정 허용",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "캐리지 리턴 수락",
    // [Auto-translated] "Display mode"
    displayMode: "디스플레이 모드",
    // [Auto-translated] "Rate type"
    rateType: "비율 유형",
    // "Label"
    label: "라벨",
    // [Auto-translated] "Content mode"
    contentMode: "콘텐츠 모드",
    // [Auto-translated] "Image fit"
    imageFit: "이미지 핏",
    // [Auto-translated] "Alt text"
    altText: "대체 텍스트",
    // [Auto-translated] "Height"
    height: "높이",
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "스마트폰의 높이",
    // [Auto-translated] "Pen color"
    penColor: "펜 색상",
    // [Auto-translated] "Background color"
    backgroundColor: "배경색",
    // [Auto-translated] "Template elements"
    templateElements: "템플릿 요소",
    // [Auto-translated] "Operator"
    operator: "연산자",
    // [Auto-translated] "Is variable"
    isVariable: "가변적이다",
    // [Auto-translated] "Run expression"
    runExpression: "표현식 실행",
    // [Auto-translated] "Show caption"
    showCaption: "캡션 표시",
    // [Auto-translated] "Icon name"
    iconName: "아이콘 이름",
    // [Auto-translated] "Icon size"
    iconSize: "아이콘 크기",
    // [Auto-translated] "Precision"
    precision: "정밀",
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "매트릭스 끌기 핸들 영역",
    // [Auto-translated] "Background image"
    backgroundImage: "배경 이미지",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "배경 이미지 맞춤",
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "배경 이미지 첨부",
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "배경 불투명도",
    // [Auto-translated] "Select to rank enabled"
    selectToRankEnabled: "사용 가능한 순위를 선택하려면 선택합니다.",
    // [Auto-translated] "Select to rank areas layout"
    selectToRankAreasLayout: "영역 레이아웃의 순위를 지정하려면 선택합니다.",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "모든 옵션이 선택된 경우 표시할 텍스트",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "순위 영역의 자리 표시자 텍스트",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "카메라 액세스 허용",
    // [Auto-translated] "Scale color mode"
    scaleColorMode: "스케일 컬러 모드",
    // [Auto-translated] "Rate color mode"
    rateColorMode: "비율 색상 모드",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "표시 값 복사",
    // [Auto-translated] "Column span"
    effectiveColSpan: "열 범위",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "진행률 표시줄 영역 너비"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "어드밴스드 모드",
    // "Page"
    pageTitle: "페이지 제목 글꼴",
    // "Question box"
    questionTitle: "질문 제목 글꼴",
    // "Input element"
    editorPanel: "입력 요소",
    // [Auto-translated] "Lines"
    lines: "라인",
    // [Auto-translated] "Default"
    primaryDefaultColor: "기본값",
    // [Auto-translated] "Hover"
    primaryDarkColor: "호버",
    // [Auto-translated] "Selected"
    primaryLightColor: "선택한",
    // [Auto-translated] "Background color"
    backgroundDimColor: "배경색",
    // "Corner radius"
    cornerRadius: "코너 반경",
    // [Auto-translated] "Default background"
    backcolor: "기본 배경",
    // [Auto-translated] "Hover background"
    hovercolor: "배경 가리키기",
    // [Auto-translated] "Border decoration"
    borderDecoration: "테두리 장식",
    // [Auto-translated] "Font color"
    fontColor: "글꼴 색상",
    // [Auto-translated] "Background color"
    backgroundColor: "배경색",
    // [Auto-translated] "Default color"
    primaryForecolor: "기본 색상",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "비활성화 된 색상",
    // [Auto-translated] "Font"
    font: "글꼴",
    // [Auto-translated] "Darker"
    borderDefault: "어두운",
    // [Auto-translated] "Lighter"
    borderLight: "라이터",
    // [Auto-translated] "Font family"
    fontFamily: "글꼴 모음",
    // [Auto-translated] "Regular"
    fontWeightRegular: "일반",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "무겁다",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "세미 볼드(Semi-bold)",
    // [Auto-translated] "Bold"
    fontWeightBold: "대담한",
    // [Auto-translated] "Color"
    color: "색",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "자리 표시자 색",
    // [Auto-translated] "Size"
    size: "크기",
    // [Auto-translated] "Opacity"
    opacity: "불투명도",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "그림자 효과 추가",
    // [Auto-translated] "Blur"
    boxShadowBlur: "흐리게",
    // [Auto-translated] "Spread"
    boxShadowSpread: "전파",
    // [Auto-translated] "Drop"
    boxShadowDrop: "방울",
    // [Auto-translated] "Inner"
    boxShadowInner: "내부",
    names: {
      // [Auto-translated] "Default"
      default: "기본값",
      // [Auto-translated] "Sharp"
      sharp: "날카로운",
      // [Auto-translated] "Borderless"
      borderless: "국경",
      // [Auto-translated] "Flat"
      flat: "플랫",
      // [Auto-translated] "Plain"
      plain: "평야",
      // [Auto-translated] "Double Border"
      doubleborder: "이중 테두리",
      // [Auto-translated] "Layered"
      layered: "계층",
      // [Auto-translated] "Solid"
      solid: "고체",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "대조"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "청록",
      // [Auto-translated] "Blue"
      blue: "파랑",
      // [Auto-translated] "Purple"
      purple: "보라색",
      // [Auto-translated] "Orchid"
      orchid: "난초",
      // [Auto-translated] "Tulip"
      tulip: "튤립",
      // [Auto-translated] "Brown"
      brown: "갈색",
      // [Auto-translated] "Green"
      green: "녹색",
      // [Auto-translated] "Gray"
      gray: "회색"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "표면 배경",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "본래의",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "보조",
    // [Auto-translated] "Surface"
    surfaceScale: "표면",
    // [Auto-translated] "User interface"
    userInterfaceBaseUnit: "사용자 인터페이스",
    // [Auto-translated] "Font"
    fontScale: "글꼴",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "설문조사 작성기 2020",
      // [Auto-translated] "Light"
      "default-light": "광",
      // [Auto-translated] "Dark"
      "default-dark": "어둠",
      // [Auto-translated] "Contrast"
      "default-contrast": "대조"
    }
  }
};
setupLocale({ localeCode: "ko", strings: koreanStrings });