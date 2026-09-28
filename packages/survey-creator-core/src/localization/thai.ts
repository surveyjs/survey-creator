import { setupLocale } from "survey-creator-core";

export const thStrings = {
  // survey templates
  survey: {
    // "Duplicate"
    duplicate: "ทำซ้ำ"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "ดูตัวอย่าง",
    // "Themes"
    theme: "ธีม",
    // "Translations"
    translation: "การแปล",
    // "Designer"
    designer: "นักออกแบบ",
    // "JSON Editor"
    json: "ตัวแก้ไข JSON",
    // "Logic"
    logic: "ตรรกะ"
  },
  // Question types
  qt: {
    // "Default"
    default: "ค่าเริ่มต้น",
    // "Checkboxes"
    checkbox: "กล่องเลือก",
    // "Long Text"
    comment: "ข้อความยาว",
    // "Image Picker"
    imagepicker: "ตัวเลือกภาพ",
    // "Ranking"
    ranking: "การจัดอันดับ",
    // "Image"
    image: "ภาพ",
    // "Dropdown"
    dropdown: "เมนูดรอปดาวน์",
    // "Multi-Select Dropdown"
    tagbox: "เมนูดรอปดาวน์หลายตัวเลือก",
    // "File Upload"
    file: "อัปโหลดไฟล์",
    // [Auto-translated] "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "เมทริกซ์เลือกเดียว",
    // "Multi-Select Matrix"
    matrixdropdown: "เมทริกซ์เลือกหลายตัว",
    // "Dynamic Matrix"
    matrixdynamic: "เมทริกซ์ไดนามิก",
    // "Multiple Textboxes"
    multipletext: "กล่องข้อความหลายกล่อง",
    // "Panel"
    panel: "แผง",
    // "Dynamic Panel"
    paneldynamic: "แผงไดนามิก",
    // "Radio Button Group"
    radiogroup: "กลุ่มปุ่มวิทยุ",
    // "Rating Scale"
    rating: "มาตรวัดคะแนน",
    // [Auto-translated] "Slider"
    slider: "แถบ เลื่อน",
    // "Single-Line Input"
    text: "อินพุตบรรทัดเดียว",
    // "Yes/No (Boolean)"
    boolean: "ใช่/ไม่ใช่ (บูลีน)",
    // "Expression (read-only)"
    expression: "นิพจน์ (อ่านอย่างเดียว)",
    // "Signature"
    signaturepad: "แผ่นลายเซ็น",
    // "Button Group"
    buttongroup: "กลุ่มปุ่ม"
  },
  toolboxCategories: {
    // "General"
    general: "ทั่วไป",
    // "Choice Questions"
    choice: "คำถามตัวเลือก",
    // "Text Input Questions"
    text: "คำถามป้อนข้อความ",
    // "Containers"
    containers: "ภาชนะ",
    // "Matrix Questions"
    matrix: "คำถามเมทริกซ์",
    // "Misc"
    misc: "เบ็ดเตล็ด"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "ค่าเริ่มต้น ({0})",
    // "Settings"
    settings: "การตั้งค่า",
    // "Open settings"
    settingsTooltip: "เปิดการตั้งค่า",
    // "Survey Settings"
    surveySettings: "การตั้งค่าแบบสำรวจ",
    // "Survey settings"
    surveySettingsTooltip: "การตั้งค่าแบบสำรวจ",
    // "Theme Settings"
    themeSettings: "การตั้งค่าธีม",
    // "Theme settings"
    themeSettingsTooltip: "การตั้งค่าธีม",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "การตั้งค่าครีเอเตอร์",
    // "Show Panel"
    showPanel: "แสดงแผง",
    // "Hide Panel"
    hidePanel: "ซ่อนแผง",
    // "Select previous"
    prevSelected: "เลือกก่อนหน้า",
    // "Select next"
    nextSelected: "เลือกถัดไป",
    // "Focus previous"
    prevFocus: "โฟกัสก่อนหน้า",
    // "Focus next"
    nextFocus: "โฟกัสถัดไป",
    // "Survey"
    surveyTypeName: "แบบสำรวจ",
    // "Page"
    pageTypeName: "หน้า",
    // "page"
    newPageName: "หน้า",
    // "question"
    newQuestionName: "คำถาม",
    // "panel"
    newPanelName: "แผง",
    // "Preview Survey Again"
    testSurveyAgain: "ดูตัวอย่างแบบสำรวจอีกครั้ง",
    // "You had to navigate to"
    navigateToMsg: "คุณต้องไปที่",
    // "Save Survey"
    saveSurvey: "บันทึกแบบสำรวจ",
    // "Save Survey"
    saveSurveyTooltip: "บันทึกแบบสำรวจ",
    // "Save Theme"
    saveTheme: "บันทึกธีม",
    // "Save Theme"
    saveThemeTooltip: "บันทึกธีม",
    // "Hide errors"
    jsonHideErrors: "ซ่อนข้อผิดพลาด",
    // "Show errors"
    jsonShowErrors: "แสดงข้อผิดพลาด",
    // [Auto-translated] "Fix error"
    jsonFixError: "แก้ไขข้อผิดพลาด",
    // [Auto-translated] "The survey JSON must be an object."
    jsonRootNotObject: "JSON แบบสํารวจต้องเป็นวัตถุ",
    // "Undo"
    undo: "เลิกทำ",
    // "Redo"
    redo: "ทำซ้ำ",
    // [Auto-translated] "Expand"
    expandTooltip: "ขยาย",
    // [Auto-translated] "Collapse"
    collapseTooltip: "ทรุด",
    // "Expand All"
    expandAllTooltip: "ขยายทั้งหมด",
    // "Collapse All"
    collapseAllTooltip: "ยุบทั้งหมด",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "ซูมเข้า",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "ซูมไปที่ 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "ซูมออก",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "ล็อคสถานะขยาย/ยุบสําหรับคําถาม",
    // "Show more"
    showMoreChoices: "แสดงเพิ่มเติม",
    // "Show less"
    showLessChoices: "แสดงน้อยลง",
    // [Auto-translated] "Unknown function: \"{0}\"."
    expressionUnknownFunction: "ฟังก์ชันที่ไม่รู้จัก: \"{0}\"",
    // [Auto-translated] "Unknown functions: \"{0}\"."
    expressionUnknownFunctions: "ฟังก์ชันที่ไม่รู้จัก: \"{0}\"",
    // [Auto-translated] "Unknown variable: \"{0}\"."
    expressionUnknownVariable: "ตัวแปรที่ไม่รู้จัก: \"{0}\"",
    // [Auto-translated] "Unknown variables: \"{0}\"."
    expressionUnknownVariables: "ตัวแปรที่ไม่รู้จัก: \"{0}\"",
    // [Auto-translated] "Syntax error."
    expressionSyntaxError: "ข้อผิดพลาดทางไวยากรณ์",
    // [Auto-translated] "Semantic error."
    expressionSemanticsError: "ข้อผิดพลาดทางความหมาย",
    // "Toolbox"
    toolbox: "กล่องเครื่องมือ",
    // [Auto-translated] "Search"
    toolboxSearch: "ค้น",
    // "Type to search..."
    toolboxFilteredTextPlaceholder: "พิมพ์เพื่อค้นหา...",
    // "No results found"
    toolboxNoResultsFound: "ไม่พบผลลัพธ์",
    // [Auto-translated] "No properties to display"
    propertyGridEmptySurveyText: "ไม่มีคุณสมบัติให้แสดง",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "พิมพ์เพื่อค้นหา...",
    // "No results found"
    propertyGridNoResultsFound: "ไม่พบผลลัพธ์",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "เริ่มกําหนดค่าฟอร์มของคุณ",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "คลิกไอคอนหมวดหมู่ใดก็ได้เพื่อสํารวจการตั้งค่าแบบสํารวจ การตั้งค่าเพิ่มเติมจะพร้อมใช้งานเมื่อคุณเพิ่มองค์ประกอบแบบสํารวจลงในพื้นผิวการออกแบบ",
    // "Survey Results "
    surveyResults: "ผลลัพธ์ของแบบสำรวจ",
    // "As Table"
    surveyResultsTable: "เป็นตาราง",
    // "As JSON"
    surveyResultsJson: "เป็น JSON",
    // "Question Title"
    resultsTitle: "ชื่อคำถาม",
    // "Question Name"
    resultsName: "ชื่อคำถาม",
    // "Answer Value"
    resultsValue: "ค่าคำตอบ",
    // "Display Value"
    resultsDisplayValue: "ค่าการแสดงผล",
    // "Modified"
    modified: "แก้ไข",
    // "Saving"
    saving: "กำลังบันทึก",
    // "Saved"
    saved: "บันทึกแล้ว",
    // "Error! Editor content is not saved."
    saveError: "ข้อผิดพลาด! เนื้อหาของตัวแก้ไขไม่ได้รับการบันทึก",
    // "Language Settings"
    translationPropertyGridTitle: "การตั้งค่าภาษา",
    // "Theme Settings"
    themePropertyGridTitle: "การตั้งค่าธีม",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "เพิ่มภาษา",
    // "Languages"
    translationLanguages: "ภาษา",
    // "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "คุณแน่ใจหรือว่าต้องการลบสตริงทั้งหมดสำหรับภาษานี้?",
    // "Select language to translate"
    translationAddLanguage: "เลือกภาษาที่จะแปล",
    // "All Strings"
    translationShowAllStrings: "แสดงสตริงทั้งหมด",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "แสดงสตริงที่ใช้เท่านั้น",
    // "All Pages"
    translationShowAllPages: "แสดงทุกหน้า",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "ไม่มีสตริงให้แปล กรุณาเปลี่ยนตัวกรอง",
    // "Export to CSV"
    translationExportToSCVButton: "ส่งออกเป็น CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "นำเข้าจาก CSV",
    // "Auto-translate All"
    translateUsigAI: "แปลทั้งหมดอัตโนมัติ",
    // "Translate from: "
    translateUsigAIFrom: "แปลจาก: ",
    // [Auto-translated] "Translate remaining strings"
    translateRemainingStrings: "แปลงสตริงที่เหลือ",
    // "Untranslated strings"
    translationDialogTitle: "สตริงที่ยังไม่ได้แปล",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "รวม {0} กับโลแคลเริ่มต้น",
    // "Translation..."
    translationPlaceHolder: "การแปล...",
    // "Source: "
    translationSource: "ต้นทาง: ",
    // "Target: "
    translationTarget: "ปลายทาง: ",
    // [Auto-translated] "Source language"
    translationSourceLanguage: "ภาษาต้นทาง",
    // [Auto-translated] "Target language"
    translationTargetLanguage: "ภาษาปลายทาง",
    // [Auto-translated] "{0} of {1} strings translated"
    translationProgress: "{0}สตริง{1}ที่แปลแล้ว",
    // [Auto-translated] "Are you certain you wish to delete all translated strings for the selected language?"
    translationClearProgress: "คุณแน่ใจหรือไม่ว่าต้องการลบสตริงที่แปลทั้งหมดสําหรับภาษาที่เลือก?",
    // [Auto-translated] "Form View"
    translationSideBySideViewForm: "มุมมองฟอร์ม",
    // [Auto-translated] "Grid View"
    translationSideBySideViewGrid: "มุมมองกริด",
    // [Auto-translated] "Translate strings"
    translateStrings: "แปลสตริง",
    // [Auto-translated] "Survey Strings"
    translationSurveyStrings: "สายสํารวจ",
    // [Auto-translated] "No strings to translate"
    translationStateNothingToTranslate: "ไม่มีสตริงให้แปล",
    // [Auto-translated] "All strings are translated"
    translationStateAllTranslated: "สตริงทั้งหมดจะถูกแปล",
    // [Auto-translated] "{0} strings are not translated"
    translationStateUntranslated: "สตริง{0}ไม่ได้รับการแปล",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "ไม่รองรับลิงก์ YouTube",
    // "Export"
    themeExportButton: "ส่งออก",
    // "Import"
    themeImportButton: "นำเข้า",
    // "Export"
    surveyJsonExportButton: "ส่งออก",
    // "Import"
    surveyJsonImportButton: "นำเข้า",
    // "Copy to clipboard"
    surveyJsonCopyButton: "คัดลอกไปยังคลิปบอร์ด",
    // "Reset theme settings to default"
    themeResetButton: "รีเซ็ตการตั้งค่าธีมเป็นค่าเริ่มต้น",
    // "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "คุณแน่ใจหรือว่าต้องการรีเซ็ตธีม? การปรับแต่งทั้งหมดของคุณจะหายไป",
    // "Yes, reset the theme"
    themeResetConfirmationOk: "ใช่ รีเซ็ตธีม",
    // "Add Question"
    addNewQuestion: "เพิ่มคำถาม",
    // "Select page..."
    selectPage: "เลือกหน้า...",
    // "Choices are copied from"
    carryForwardChoicesCopied: "ตัวเลือกถูกคัดลอกจาก",
    // "Choices are loaded from a web service."
    choicesLoadedFromWebText: "ตัวเลือกถูกโหลดจากบริการเว็บ",
    // "Go to settings"
    choicesLoadedFromWebLinkText: "ไปที่การตั้งค่า",
    // "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "ดูตัวอย่างตัวเลือกที่โหลด",
    // "HTML content will be here."
    htmlPlaceHolder: "เนื้อหา HTML จะอยู่ที่นี่",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "วางคำถามจากกล่องเครื่องมือที่นี่",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "แบบสำรวจว่างเปล่า ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง",
    // "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "หน้านี้ว่างเปล่า ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "ลากและวางภาพที่นี่หรือคลิกปุ่มด้านล่างและเลือกภาพที่จะอัปโหลด",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "คลิกปุ่ม \"เพิ่มคำถาม\" ด้านล่างเพื่อเริ่มสร้างฟอร์มของคุณ",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "แบบฟอร์มของคุณว่างเปล่า",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "แบบฟอร์มของคุณว่างเปล่า",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "ไม่มีการแสดงตัวอย่าง",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "ไม่มีการแสดงตัวอย่าง",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "แบบสํารวจไม่มีองค์ประกอบที่มองเห็นได้",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "แบบสํารวจไม่มีองค์ประกอบที่มองเห็นได้",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "ไม่มีข้อผูกมัดให้แปล",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "ไม่มีข้อผูกมัดให้แปล",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "เพิ่มองค์ประกอบลงในฟอร์มของคุณหรือเปลี่ยนตัวกรองสตริงในแถบเครื่องมือ",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "เพิ่มองค์ประกอบลงในฟอร์มของคุณหรือเปลี่ยนตัวกรองสตริงในแถบเครื่องมือ",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "คลิกปุ่ม \"เพิ่มคำถาม\" ด้านล่างเพื่อเพิ่มองค์ประกอบใหม่ลงในหน้า",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "คลิกปุ่ม \"เพิ่มคำถาม\" ด้านล่างเพื่อเพิ่มองค์ประกอบใหม่ลงในแผง",
    // "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "คลิกปุ่มด้านล่างและเลือกภาพที่จะอัปโหลด",
    // "Choose Image"
    imageChooseImage: "เลือกภาพ",
    // "Add {0}"
    addNewTypeQuestion: "เพิ่ม {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[โลโก้]",
    // "Item "
    choices_Item: "รายการ ",
    // "Select a file"
    selectFile: "เลือกไฟล์",
    // "Remove the file"
    removeFile: "ลบไฟล์",
    lg: {
      // "Add New Rule"
      addNewItem: "เพิ่มกฎใหม่",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "สร้างกฎเพื่อปรับแต่งการไหลของแบบสำรวจ",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "ไม่มีกฎตรรกะ",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "ไม่มีกฎตรรกะ",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "สร้างกฎเพื่อปรับแต่งโฟลว์ของแบบสํารวจ",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "สร้างกฎเพื่อปรับแต่งโฟลว์ของแบบสํารวจ",
      // "Show/hide page"
      page_visibilityName: "แสดง/ซ่อนหน้า",
      // "Enable/disable page"
      page_enableName: "เปิดใช้งาน/ปิดใช้งานหน้า",
      // "Make page required"
      page_requireName: "ทำให้หน้าจำเป็น",
      // "Show/hide panel"
      panel_visibilityName: "แสดง/ซ่อนแผง",
      // "Enable/disable panel"
      panel_enableName: "เปิดใช้งาน/ปิดใช้งานแผง",
      // "Make panel required"
      panel_requireName: "ทำให้แผงจำเป็น",
      // "Show/hide question"
      question_visibilityName: "แสดง/ซ่อนคำถาม",
      // "Enable/disable question"
      question_enableName: "เปิดใช้งาน/ปิดใช้งานคำถาม",
      // "Make question required"
      question_requireName: "ทำให้คำถามจำเป็น",
      // "Reset question value"
      question_resetValueName: "รีเซ็ตค่าคำถาม",
      // "Set question value"
      question_setValueName: "ตั้งค่าคำถาม",
      // "Show/hide column"
      column_visibilityName: "แสดง/ซ่อนคอลัมน์",
      // "Enable/disable column"
      column_enableName: "เปิดใช้งาน/ปิดใช้งานคอลัมน์",
      // "Make column required"
      column_requireName: "ทำให้คอลัมน์จำเป็น",
      // "Reset column value"
      column_resetValueName: "รีเซ็ตค่าคอลัมน์",
      // "Set column value"
      column_setValueName: "ตั้งค่าคอลัมน์",
      // "Complete survey"
      trigger_completeName: "เสร็จสิ้นแบบสำรวจ",
      // "Set answer"
      trigger_setvalueName: "ตั้งค่าคำตอบ",
      // "Copy answer"
      trigger_copyvalueName: "คัดลอกคำตอบ",
      // "Skip to question"
      trigger_skipName: "ข้ามไปยังคำถาม",
      // "Run expression"
      trigger_runExpressionName: "รันนิพจน์",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "ตั้งค่ามาร์กอัปหน้า \"ขอบคุณ\"",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "ทำให้หน้าแสดงเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บหน้าที่มองไม่เห็น",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "ทำให้แผงแสดงเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บแผงที่มองไม่เห็น",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "ทำให้แผงและองค์ประกอบทั้งหมดภายในเปิดใช้งานเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บแผงที่ปิดใช้งาน",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "ทำให้คำถามแสดงเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บคำถามที่มองไม่เห็น",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "ทำให้คำถามเปิดใช้งานเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บคำถามที่ปิดใช้งาน",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "คำถามจะต้องตอบเมื่อการแสดงผลตรรกะเป็นจริง",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "เมื่อการแสดงผลตรรกะเป็นจริง แบบสำรวจจะสิ้นสุดลง และผู้ตอบแบบสำรวจจะเห็นหน้า \"ขอบคุณ\"",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "เมื่อค่าคำถามที่ใช้ในนิพจน์ตรรกะถูกเปลี่ยนแปลง และนิพจน์เป็นจริง ค่าที่ระบุจะถูกกำหนดให้กับคำถามที่เลือก",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "เมื่อค่าคำถามที่ใช้ในนิพจน์ตรรกะถูกเปลี่ยนแปลง และนิพจน์เป็นจริง ค่าของคำถามที่เลือกจะถูกคัดลอกไปยังคำถามอื่น",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "เมื่อการแสดงผลตรรกะเป็นจริง แบบสำรวจจะมุ่งเน้น/ข้ามไปยังคำถามที่เลือก",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "เมื่อการแสดงผลตรรกะเป็นจริง แบบสำรวจจะประเมินนิพจน์อื่น เป็นทางเลือก ผลลัพธ์ของนิพจน์หลังสามารถกำหนดเป็นค่าของคำถามที่เลือกได้",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "หากนิพจน์ตรรกะเป็นจริง หน้าขอบคุณจะแสดงเนื้อหาที่ระบุ",
      // "New rule"
      itemEmptyExpressionText: "กฎใหม่",
      // "make page {0} visible"
      page_visibilityText: "ทำให้หน้า {0} แสดง", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "ทำให้แผง {0} แสดง", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "ทำให้แผง {0} เปิดใช้งาน", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "ทำให้คำถาม {0} แสดง", // {0} question name
      // "make question {0} enable"
      question_enableText: "ทำให้คำถาม {0} เปิดใช้งาน", // {0} question name
      // "make question {0} required"
      question_requireText: "ทำให้คำถาม {0} จำเป็น", // {0} question name
      // "reset value for question: {0}"
      question_resetValueText: "รีเซ็ตค่าคำถาม: {0}", // {0} question name.
      // "assign value: {1} to question: {0}"
      question_setValueText: "กำหนดค่า: {1} ให้คำถาม: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "ทำให้คอลัมน์ {0} ของคำถาม {1} แสดง", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "ทำให้คอลัมน์ {0} ของคำถาม {1} เปิดใช้งาน", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "ทำให้คอลัมน์ {0} ของคำถาม {1} จำเป็น", // {0} column name, {1} question name
      // "reset cell value for column: {0}"
      column_resetValueText: "รีเซ็ตค่าคอลัมน์: {0}", // {0} column name
      // "assign cell value: {1} to column: {0}"
      column_setValueText: "กำหนดค่าคอลัมน์: {1} ให้คอลัมน์: {0}", // {0} column name and {1} setValueExpression
      // "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "นิพจน์ที่ผลลัพธ์จะถูกกำหนดให้กับคำถามเป้าหมาย",
      // [Auto-translated] "Enter a value..."
      calculatedValuePlaceholder: "ป้อนค่า...",
      // "survey becomes completed"
      trigger_completeText: "แบบสำรวจเสร็จสิ้น",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "ตั้งค่าคำถาม: {0} ค่า {1}", // {0} question name, {1} setValue
      // "clear question value: {0}"
      trigger_setvalueEmptyText: "ล้างค่าคำถาม: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "คัดลอกคำถาม: {0} ค่า จากคำถาม {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "แบบสำรวจข้ามไปยังคำถาม {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "รันนิพจน์: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " และตั้งค่าผลลัพธ์ให้กับคำถาม: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "แสดงข้อความที่กำหนดเองสำหรับหน้าขอบคุณ",
      // "All Questions"
      showAllQuestions: "คำถามทั้งหมด",
      // "All Action Types"
      showAllActionTypes: "การกระทำทั้งหมด",
      // "Condition(s)"
      conditions: "เงื่อนไข",
      // "Action(s)"
      actions: "การกระทำ",
      // "Define action(s)"
      actionsEditorTitle: "กำหนดการกระทำ",
      // "Delete Action"
      deleteAction: "ลบการกระทำ",
      // "Add Action"
      addNewAction: "เพิ่มการกระทำ",
      // "Select action..."
      selectedActionCaption: "เลือกการกระทำ...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "นิพจน์ตรรกะว่างเปล่าหรือไม่ถูกต้อง กรุณาแก้ไข",
      // "Please fix issues in your action(s)."
      actionInvalid: "กรุณาแก้ไขปัญหาในการกระทำของคุณ",
      // "Logical rules are incomplete"
      uncompletedRule_title: "กฎตรรกะยังไม่สมบูรณ์",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "คุณยังไม่ได้เสร็จกฎตรรกะบางข้อ หากคุณออกจากแท็บนี้ตอนนี้ การเปลี่ยนแปลงจะหายไป คุณยังต้องการออกจากแท็บโดยไม่เสร็จสิ้นการเปลี่ยนแปลงหรือไม่?",
      // "Yes"
      uncompletedRule_apply: "ใช่",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "ไม่ ฉันต้องการเสร็จสิ้นกฎ"
    }
  },
  // Host application variables
  vp: {
    // [Auto-translated] "Variable preset"
    selectorTitle: "การตั้งค่าตัวแปรล่วงหน้า",
    // [Auto-translated] "None"
    noPreset: "ไม่มี",
    // [Auto-translated] "View variable values"
    view: "ดูค่าตัวแปร",
    // [Auto-translated] "Variable values"
    viewTitle: "ค่าตัวแปร",
    // [Auto-translated] "Manage presets"
    edit: "จัดการพรีเซ็ต",
    // [Auto-translated] "Variable Presets"
    editorTitle: "การตั้งค่าล่วงหน้าแบบแปรผัน",
    // [Auto-translated] "Preset"
    presetName: "พรีเซ็ต",
    // [Auto-translated] "Description"
    presetDescription: "คําอธิบาย",
    // [Auto-translated] "Add preset"
    addPreset: "เพิ่มการตั้งค่าล่วงหน้า",
    // [Auto-translated] "New preset"
    newPresetName: "พรีเซ็ตใหม่",
    // [Auto-translated] "Delete preset"
    deletePreset: "ลบการตั้งค่าล่วงหน้า",
    // [Auto-translated] "Back"
    back: "ย้อนกลับ",
    // [Auto-translated] "A preset with this name already exists"
    presetNameIsNotUnique: "มีพรีเซ็ตที่ใช้ชื่อนี้อยู่แล้ว",
    // [Auto-translated] "Enter a preset name"
    presetNameIsEmpty: "ป้อนชื่อที่ตั้งไว้ล่วงหน้า",
    // [Auto-translated] "Preset"
    listNameColumn: "พรีเซ็ต",
    // [Auto-translated] "Description"
    listDescriptionColumn: "คําอธิบาย"
  },
  // Property Editors
  pe: {
    panel: {
      // "Panel name"
      name: "ชื่อแผง",
      // "Panel title"
      title: "ชื่อแผง",
      // "Panel description"
      description: "คำอธิบายแผง",
      // "Make the panel visible if"
      visibleIf: "ทำให้แผงมองเห็นได้ถ้า",
      // "Make the panel required if"
      requiredIf: "ทำให้แผงจำเป็นถ้า",
      // "Question order within the panel"
      questionOrder: "ลำดับคำถามภายในแผง",
      // "Move the panel to page"
      page: "ย้ายแผงไปที่หน้า",
      // "Display the panel on a new line"
      startWithNewLine: "แสดงแผงในบรรทัดใหม่",
      // "Panel collapse state"
      state: "สถานะแผงพับ",
      // "Inline panel width"
      width: "ความกว้างของแผงแบบอินไลน์",
      // "Minimum panel width"
      minWidth: "ความกว้างขั้นต่ำของแผง",
      // "Maximum panel width"
      maxWidth: "ความกว้างสูงสุดของแผง",
      // [Auto-translated] "Number this panel"
      showNumber: "หมายเลขแผงนี้"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "ความกว้างที่มีประสิทธิภาพ %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "ความกว้างของชื่อคําถาม px"
    },
    paneldynamic: {
      // "Panel name"
      name: "ชื่อแผง",
      // "Panel title"
      title: "ชื่อแผง",
      // "Panel description"
      description: "คำอธิบายแผง",
      // [Auto-translated] "Entry display mode"
      displayMode: "โหมดแสดงรายการ",
      // "Make the panel visible if"
      visibleIf: "ทำให้แผงมองเห็นได้ถ้า",
      // "Make the panel required if"
      requiredIf: "ทำให้แผงจำเป็นถ้า",
      // "Move the panel to page"
      page: "ย้ายแผงไปที่หน้า",
      // "Display the panel on a new line"
      startWithNewLine: "แสดงแผงในบรรทัดใหม่",
      // "Panel collapse state"
      state: "สถานะแผงพับ",
      // "Inline panel width"
      width: "ความกว้างของแผงแบบอินไลน์",
      // "Minimum panel width"
      minWidth: "ความกว้างขั้นต่ำของแผง",
      // "Maximum panel width"
      maxWidth: "ความกว้างสูงสุดของแผง",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "ยืนยันการลบรายการ",
      // "Entry description pattern"
      templateDescription: "รูปแบบคำอธิบายแผง",
      // "Entry title pattern"
      templateTitle: "รูปแบบชื่อแผง",
      // "Empty panel text"
      noEntriesText: "ข้อความแผงว่าง",
      // "Tab title pattern"
      templateTabTitle: "รูปแบบชื่อแท็บ",
      // "Tab title placeholder"
      tabTitlePlaceholder: "ตัวอย่างชื่อแท็บ",
      // "Make an individual entry visible if"
      templateVisibleIf: "ทำให้แผงแต่ละแผงมองเห็นได้ถ้า",
      // [Auto-translated] "Number the panel"
      showNumber: "หมายเลขแผง",
      // "Panel title alignment"
      titleLocation: "การจัดตำแหน่งชื่อแผง",
      // "Panel description alignment"
      descriptionLocation: "การจัดตำแหน่งคำอธิบายแผง",
      // "Question title alignment"
      templateQuestionTitleLocation: "การจัดตำแหน่งชื่อคำถาม",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "ความกว้างของชื่อคําถาม",
      // "Error message alignment"
      templateErrorLocation: "การจัดตำแหน่งข้อความข้อผิดพลาด",
      // "New entry location"
      newPanelPosition: "ตำแหน่งแผงใหม่",
      // "Prevent duplicate responses in the following question"
      keyName: "ป้องกันการตอบซ้ำในคำถามต่อไปนี้"
    },
    question: {
      // "Question name"
      name: "ชื่อคำถาม",
      // "Question title"
      title: "ชื่อคำถาม",
      // "Question description"
      description: "คำอธิบายคำถาม",
      // [Auto-translated] "Show the title and description"
      showTitle: "แสดงชื่อและคําอธิบาย",
      // "Make the question visible if"
      visibleIf: "ทำให้คำถามมองเห็นได้ถ้า",
      // "Make the question required if"
      requiredIf: "ทำให้คำถามจำเป็นถ้า",
      // "Move the question to page"
      page: "ย้ายคำถามไปที่หน้า",
      // "Question box collapse state"
      state: "สถานะกล่องคำถามพับ",
      // [Auto-translated] "Number this question"
      showNumber: "ใส่หมายเลขคําถามนี้",
      // "Question title alignment"
      titleLocation: "การจัดตำแหน่งชื่อคำถาม",
      // "Question description alignment"
      descriptionLocation: "การจัดตำแหน่งคำอธิบายคำถาม",
      // "Error message alignment"
      errorLocation: "การจัดตำแหน่งข้อความข้อผิดพลาด",
      // "Increase the inner indent"
      indent: "เพิ่มการเว้นวรรคภายใน",
      // "Inline question width"
      width: "ความกว้างของคำถามแบบอินไลน์",
      // "Minimum question width"
      minWidth: "ความกว้างขั้นต่ำของคำถาม",
      // "Maximum question width"
      maxWidth: "ความกว้างสูงสุดของคำถาม",
      // "Update input field value"
      textUpdateMode: "อัปเดตค่าช่องป้อนข้อมูล"
    },
    signaturepad: {
      // "Signature area width"
      signatureWidth: "ความกว้างของพื้นที่ลายเซ็น",
      // "Signature area height"
      signatureHeight: "ความสูงของพื้นที่ลายเซ็น",
      // "Auto-scale the signature area"
      signatureAutoScaleEnabled: "ปรับพื้นที่ลายเซ็นอัตโนมัติ",
      // "Show a placeholder within signature area"
      showPlaceholder: "แสดงตัวอย่างภายในพื้นที่ลายเซ็น",
      // "Placeholder text"
      placeholder: "ข้อความตัวอย่าง",
      // "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "ข้อความตัวอย่างในโหมดอ่านอย่างเดียวหรือดูตัวอย่าง",
      // "Show the Clear button within signature area"
      allowClear: "แสดงปุ่มลบภายในพื้นที่ลายเซ็น",
      // "Minimum stroke width"
      penMinWidth: "ความกว้างขั้นต่ำของปากกา",
      // "Maximum stroke width"
      penMaxWidth: "ความกว้างสูงสุดของปากกา",
      // "Stroke color"
      penColor: "สีของปากกา"
    },
    comment: {
      // "Input field height (in lines)"
      rows: "ความสูงของช่องป้อนข้อมูล (ในบรรทัด)"
    },
    // "Question numbering"
    showQuestionNumbers: "การจัดลำดับคำถาม",
    // "Question indexing type"
    questionStartIndex: "ประเภทการจัดลำดับคำถาม",
    expression: {
      // "Expression name"
      name: "ชื่อนิพจน์",
      // "Expression title"
      title: "ชื่อนิพจน์",
      // "Expression description"
      description: "คำอธิบายนิพจน์",
      // "Expression"
      expression: "นิพจน์"
    },
    trigger: {
      // "Expression"
      expression: "นิพจน์"
    },
    calculatedvalue: {
      // "Expression"
      expression: "นิพจน์"
    },
    urlconditionitem: {
      // [Auto-translated] "Expression"
      expression: "การแสดงออก"
    },
    htmlconditionitem: {
      // [Auto-translated] "Expression"
      expression: "การแสดงออก"
    },
    // survey templates
    survey: {
      // "Survey title"
      title: "ชื่อแบบสำรวจ",
      // "Survey description"
      description: "คำอธิบายแบบสำรวจ",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "ทําให้แบบสํารวจเป็นแบบอ่านอย่างเดียว",
      // [Auto-translated] "Regional formats"
      regionalFormat: "รูปแบบภูมิภาค"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "ชื่อหน้า",
      // "Page title"
      title: "ชื่อหน้า",
      // [Auto-translated] "Page description"
      description: "คําอธิบายหน้า",
      // "Make the page visible if"
      visibleIf: "ทำให้หน้ามองเห็นได้ถ้า",
      // "Make the page required if"
      requiredIf: "ทำให้หน้าจำเป็นถ้า",
      // "Time limit to complete the page"
      timeLimit: "เวลาจำกัดในการทำให้เสร็จ",
      // "Question order on the page"
      questionOrder: "ลำดับคำถามในหน้า"
    },
    matrixdropdowncolumn: {
      // "Column name"
      name: "ชื่อคอลัมน์",
      // "Column title"
      title: "ชื่อคอลัมน์",
      // "Prevent duplicate responses"
      isUnique: "ป้องกันการตอบซ้ำ",
      // "Column width"
      width: "ความกว้างของคอลัมน์",
      // "Minimum column width"
      minWidth: "ความกว้างขั้นต่ำของคอลัมน์",
      // "Input field height (in lines)"
      rows: "ความสูงของช่องป้อนข้อมูล (ในบรรทัด)",
      // "Make the column visible if"
      visibleIf: "ทำให้คอลัมน์มองเห็นได้ถ้า",
      // "Make the column required if"
      requiredIf: "ทำให้คอลัมน์จำเป็นถ้า",
      // "Each option in a separate column"
      showInMultipleColumns: "แต่ละตัวเลือกในคอลัมน์แยกต่างหาก"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "ล้างคนอื่นในแถวเดียวกัน"
    },
    multipletextitem: {
      // "Name"
      name: "ชื่อ",
      // "Title"
      title: "ชื่อ"
    },
    masksettings: {
      // "Save masked value in survey results"
      saveMaskedValue: "บันทึกค่าที่ปิดบังในผลลัพธ์แบบสำรวจ"
    },
    regionalformat: {
      // [Auto-translated] "Region"
      locale: "ภูมิภาค",
      // [Auto-translated] "Date pattern"
      datePattern: "รูปแบบวันที่",
      // [Auto-translated] "Time pattern"
      timePattern: "รูปแบบเวลา",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "ตัวคั่นทศนิยม",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "เครื่องแยกพัน",
      // [Auto-translated] "Currency symbol"
      currencySymbol: "สัญลักษณ์สกุลเงิน",
      // [Auto-translated] "Currency pattern"
      currencyPattern: "รูปแบบสกุลเงิน"
    },
    patternmask: {
      // "Value pattern"
      pattern: "รูปแบบค่า"
    },
    datetimemask: {
      // "Minimum value"
      min: "ค่าขั้นต่ำ",
      // "Maximum value"
      max: "ค่าสูงสุด"
    },
    numericmask: {
      // "Allow negative values"
      allowNegativeValues: "อนุญาตให้มีค่าลบ",
      // "Thousands separator"
      thousandsSeparator: "ตัวคั่นพัน",
      // "Decimal separator"
      decimalSeparator: "ตัวคั่นทศนิยม",
      // "Value precision"
      precision: "ความแม่นยำของค่า",
      // [Auto-translated] "Show trailing zeros"
      showTrailingZeros: "แสดงเลขศูนย์ท้ายสุด",
      // "Minimum value"
      min: "ค่าขั้นต่ำ",
      // "Maximum value"
      max: "ค่าสูงสุด"
    },
    currencymask: {
      // [Auto-translated] "Currency symbol"
      currencySymbol: "สัญลักษณ์สกุลเงิน",
      // [Auto-translated] "Currency pattern"
      currencyPattern: "รูปแบบสกุลเงิน"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "ล้างรายการอื่นเมื่อเลือก",
    // [Auto-translated] "Display both text and value"
    showValue: "แสดงทั้งข้อความและค่า",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "กําหนดให้ผู้ใช้ป้อนความคิดเห็น",
    // "Display area height"
    imageHeight: "ความสูงของพื้นที่แสดงผล",
    // "Display area width"
    imageWidth: "ความกว้างของพื้นที่แสดงผล",
    // "Join identifier"
    valueName: "ตัวระบุที่เชื่อมต่อ",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "ค่าที่แสดงดีฟอลต์สําหรับข้อความไดนามิก",
    // "Label alignment"
    rateDescriptionLocation: "การจัดตำแหน่งป้าย",
    // "Cell error message alignment"
    cellErrorLocation: "การจัดตำแหน่งข้อความข้อผิดพลาดในเซลล์",
    // "Enabled"
    enabled: "เปิดใช้งาน",
    // "Disabled"
    disabled: "ปิดใช้งาน",
    // "Inherit"
    inherit: "สืบทอด",
    // "Clear"
    clear: "ล้าง",
    // "Set"
    set: "ตั้งค่า",
    // "Change"
    change: "เปลี่ยน",
    // "Close"
    close: "ปิด",
    // "Delete"
    delete: "ลบ",
    // "Add New"
    addNew: "เพิ่มใหม่",
    // "Click to add an item..."
    addItem: "คลิกเพื่อเพิ่มรายการ...",
    // "Click to remove the item..."
    removeItem: "คลิกเพื่อลบรายการ...",
    // "Drag the item"
    dragItem: "ลากรายการ",
    // [Auto-translated] "Expand nested choices"
    expandNestedChoices: "ขยายตัวเลือกซ้อน",
    // [Auto-translated] "Collapse nested choices"
    collapseNestedChoices: "ยุบตัวเลือกซ้อน",
    // "Edit"
    edit: "แก้ไข",
    // "Done"
    doneEditing: "เสร็จสิ้นการแก้ไข",
    // "Value is empty"
    emptyValue: "ค่าว่างเปล่า",
    // "Manual Entry"
    fastEntry: "ป้อนข้อมูลด้วยตนเอง",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "ค่า '{0}' ไม่ซ้ำกัน",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "กรุณาจำกัดจำนวนรายการจาก {0} ถึง {1}",
    // "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "กรุณาป้อนอย่างน้อย {0} รายการ",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "ป้อนรายการตัวเลือกและ ID ของพวกเขาในรูปแบบต่อไปนี้:\n\nid|option\n\nID ตัวเลือกไม่แสดงต่อผู้ตอบแบบสำรวจและสามารถใช้ในกฎเงื่อนไขได้",
    // "Please select the action"
    conditionActionEmpty: "กรุณาเลือกการกระทำ",
    // "Select a question..."
    conditionSelectQuestion: "เลือกคำถาม...",
    // "Select a page..."
    conditionSelectPage: "เลือกหน้า...",
    // "Select a panel..."
    conditionSelectPanel: "เลือกแผง...",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "กด ctrl+space เพื่อรับคำแนะนำการเติมเต็มนิพจน์",
    // "Review before submit"
    showPreviewBeforeComplete: "ตรวจสอบก่อนส่ง",
    // "Enabled by a condition"
    overridingPropertyPrefix: "เปิดใช้งานโดยเงื่อนไข",
    // "Reset"
    resetToDefaultCaption: "รีเซ็ต",
    // "Please enter a value"
    propertyIsEmpty: "กรุณาป้อนค่า",
    // "Please enter a unique value"
    propertyIsNoUnique: "กรุณาป้อนค่าที่ไม่ซ้ำกัน",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "กรุณาป้อนชื่อที่ไม่ซ้ำกัน",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "ห้ามใช้คำสงวน: \"item\", \"choice\", \"panel\", \"row\"",
    // "You don't have any items yet"
    listIsEmpty: "คุณยังไม่มีรายการใดๆ",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "คุณยังไม่มีตัวเลือกใดๆ",
    // "You don't have any columns yet"
    "listIsEmpty@columns": "คุณยังไม่มีคอลัมน์ใดๆ",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "คุณยังไม่มีคอลัมน์เค้าโครง",
    // "You don't have any rows yet"
    "listIsEmpty@rows": "คุณยังไม่มีแถวใดๆ",
    // "You don't have any validation rules yet"
    "listIsEmpty@validators": "คุณยังไม่มีการตรวจสอบความถูกต้องใดๆ",
    // "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "คุณยังไม่มีตัวแปรใดๆ",
    // "You don't have any triggers yet"
    "listIsEmpty@triggers": "คุณยังไม่มีทริกเกอร์ใดๆ",
    // "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "คุณยังไม่มีลิงก์ใดๆ",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "คุณยังไม่มีหน้าใด ๆ",
    // "Add new choice"
    "addNew@choices": "เพิ่มตัวเลือกใหม่",
    // "Add new column"
    "addNew@columns": "เพิ่มคอลัมน์ใหม่",
    // "Add new row"
    "addNew@rows": "เพิ่มแถวใหม่",
    // "Add new rule"
    "addNew@validators": "เพิ่มกฎใหม่",
    // "Add new variable"
    "addNew@calculatedValues": "เพิ่มตัวแปรใหม่",
    // "Add new trigger"
    "addNew@triggers": "เพิ่มทริกเกอร์ใหม่",
    // "Add new URL"
    "addNew@navigateToUrlOnCondition": "เพิ่ม URL ใหม่",
    // [Auto-translated] "Add new page"
    "addNew@pages": "เพิ่มหน้าใหม่",
    // "Value"
    value: "ค่า",
    // "Text"
    text: "ข้อความ",
    // "Image or video file URL"
    imageLink: "URL ไฟล์ภาพหรือวิดีโอ",
    // [Auto-translated] "URL"
    url: "เว็บไซต์",
    // "Path to data"
    path: "เส้นทางข้อมูล",
    choicesbyurl: {
      // "Web service URL"
      url: "URL บริการเว็บ",
      // "Get value to store from the following property"
      valueName: "รับค่าเพื่อจัดเก็บจากคุณสมบัติต่อไปนี้"
    },
    // "Get value to display from the following property"
    titleName: "รับค่าที่จะแสดงจากคุณสมบัติต่อไปนี้",
    // "Get file URLs from the following property"
    imageLinkName: "รับ URL ไฟล์จากคุณสมบัติต่อไปนี้",
    // "Accept empty response"
    allowEmptyResponse: "ยอมรับการตอบว่าง",
    // "Survey Title"
    surveyTitlePlaceholder: "ชื่อเรื่องแบบสำรวจ",
    // "Page {num}"
    pageTitlePlaceholder: "หน้า {num}",
    // [Auto-translated] "Panel Title"
    panelTitlePlaceholder: "ชื่อแผง",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "หน้าเริ่มต้น",
    // "Description"
    descriptionPlaceholder: "คำอธิบาย",
    // "Description"
    surveyDescriptionPlaceholder: "คำอธิบาย",
    // "Description"
    pageDescriptionPlaceholder: "คำอธิบาย",
    // "Wrap choices"
    textWrapEnabled: "ตัวเลือกทำให้ข้อความครอบ",
    // "Enable the \"Other\" option"
    showOtherItem: "เปิดใช้งานตัวเลือก \"อื่นๆ\"",
    // "Rename the \"Other\" option"
    otherText: "เปลี่ยนชื่อตัวเลือก \"อื่นๆ\"",
    // "Enable the \"None\" option"
    showNoneItem: "เปิดใช้งานตัวเลือก \"ไม่มี\"",
    // "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "เปิดใช้งานตัวเลือก \"ปฏิเสธการตอบ\"",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "เปิดใช้งานตัวเลือก \"ไม่ทราบ\"",
    // "Rename the \"None\" option"
    noneText: "เปลี่ยนชื่อตัวเลือก \"ไม่มี\"",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "เปิดใช้งานตัวเลือก \"เลือกทั้งหมด\"",
    // "Rename the \"Select All\" option"
    selectAllText: "เปลี่ยนชื่อตัวเลือก \"เลือกทั้งหมด\"",
    // "Minimum value for auto-generated items"
    choicesMin: "ค่าขั้นต่ำสำหรับรายการที่สร้างอัตโนมัติ",
    // "Maximum value for auto-generated items"
    choicesMax: "ค่าสูงสุดสำหรับรายการที่สร้างอัตโนมัติ",
    // "Step value for auto-generated items"
    choicesStep: "ค่าขั้นตอนสำหรับรายการที่สร้างอัตโนมัติ",
    // "Name"
    name: "ชื่อ",
    // "Title"
    title: "ชื่อเรื่อง",
    // "Cell input type"
    cellType: "ประเภทอินพุตเซลล์",
    // "Column count"
    colCount: "จำนวนคอลัมน์",
    // "Choice order"
    choicesOrder: "ลำดับตัวเลือก",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "อนุญาตตัวเลือกที่กําหนดเอง",
    // [Auto-translated] "\"Create Custom Choice\" command text"
    createCustomChoiceText: "ข้อความคําสั่ง \"สร้างตัวเลือกที่กําหนดเอง\"",
    // "Visible"
    visible: "มองเห็นได้",
    // "Required"
    isRequired: "จำเป็น",
    // "Mark as required"
    markRequired: "ทำเครื่องหมายว่าจำเป็น",
    // "Remove the required mark"
    removeRequiredMark: "ลบเครื่องหมายที่จำเป็น",
    // "Require an answer in each row"
    eachRowRequired: "ต้องตอบในแต่ละแถว",
    // "Prevent duplicate responses in rows"
    eachRowUnique: "ป้องกันการตอบซ้ำในแถว",
    // "Error message for required questions"
    requiredErrorText: "ข้อความข้อผิดพลาดสำหรับคำถามที่จำเป็น",
    // "Display the question on a new line"
    startWithNewLine: "แสดงคำถามในบรรทัดใหม่",
    // "Rows"
    rows: "แถว",
    // "Columns"
    cols: "คอลัมน์",
    // "Placeholder text within input field"
    placeholder: "ข้อความตัวอย่างภายในช่องป้อนข้อมูล",
    // "Show preview area"
    showPreview: "แสดงพื้นที่ดูตัวอย่าง",
    // "Store file content in JSON result as text"
    storeDataAsText: "จัดเก็บเนื้อหาไฟล์ในผลลัพธ์ JSON เป็นข้อความ",
    // "Maximum file size (in bytes)"
    maxSize: "ขนาดไฟล์สูงสุด (เป็นไบต์)",
    // [Auto-translated] "Maximum number of files"
    maxFiles: "จํานวนไฟล์สูงสุด",
    // "Row count"
    rowCount: "จำนวนแถว",
    // "Columns layout"
    columnLayout: "เค้าโครงคอลัมน์",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "การจัดตำแหน่งปุ่ม \"เพิ่มแถว\"",
    // "Transpose rows to columns"
    transposeData: "สลับแถวเป็นคอลัมน์",
    // "\"Add Row\" button text"
    addRowText: "ข้อความปุ่ม \"เพิ่มแถว\"",
    // "\"Remove Row\" button text"
    removeRowText: "ข้อความปุ่ม \"ลบแถว\"",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "รูปแบบชื่อฟิลด์อินพุต",
    // "Minimum rating value"
    rateMin: "ค่าการให้คะแนนขั้นต่ำ",
    // "Maximum rating value"
    rateMax: "ค่าการให้คะแนนสูงสุด",
    // "Step value"
    rateStep: "ค่าขั้นตอนการให้คะแนน",
    // "Minimum value label"
    minRateDescription: "ป้ายกำกับค่าน้อยสุด",
    // "Maximum value label"
    maxRateDescription: "ป้ายกำกับค่าสูงสุด",
    // "Input type"
    inputType: "ประเภทอินพุต",
    // "Default Answer"
    defaultValue: "คำตอบเริ่มต้น",
    // "Default texts"
    cellsDefaultRow: "ข้อความเริ่มต้น",
    // "Maximum character limit"
    maxLength: "ขีดจำกัดอักขระสูงสุด",
    // "and"
    and: "และ",
    // "or"
    or: "หรือ",
    // "Remove"
    remove: "ลบ",
    // "Add Condition"
    addCondition: "เพิ่มเงื่อนไข",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "เลือกคำถามเพื่อเริ่มตั้งค่าเงื่อนไข",
    // "If"
    if: "ถ้า",
    // "then"
    then: "แล้ว",
    // "Target question"
    setToName: "คำถามเป้าหมาย",
    // "Question to copy answer from"
    fromName: "คำถามที่คัดลอกคำตอบจาก",
    // "Question to skip to"
    gotoName: "คำถามที่ข้ามไป",
    // "Rule is incorrect"
    ruleIsNotSet: "กฎไม่ถูกต้อง",
    // "Add to the survey results"
    includeIntoResult: "เพิ่มลงในผลลัพธ์แบบสำรวจ",
    // "Make the title and description visible"
    showTitle: "ทำให้ชื่อเรื่องและคำอธิบายมองเห็นได้",
    // "Select a survey language"
    locale: "เลือกภาษาของแบบสำรวจ",
    // "Select device type"
    simulator: "เลือกประเภทอุปกรณ์",
    // "Switch to landscape orientation"
    landscapeOrientation: "เปลี่ยนเป็นแนวนอน",
    // "Switch to portrait orientation"
    portraitOrientation: "เปลี่ยนเป็นแนวตั้ง",
    // "Clear hidden question values"
    clearInvisibleValues: "ล้างค่าคำถามที่ซ่อนอยู่",
    // "Limit to one response"
    cookieName: "จำกัดการตอบหนึ่งครั้ง",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "บันทึกความคืบหน้าแบบสำรวจอัตโนมัติเมื่อเปลี่ยนหน้า",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "บันทึกค่าตัวเลือก \"อื่นๆ\" เป็นคุณสมบัติแยกต่างหาก",
    // "Show page titles"
    showPageTitles: "แสดงชื่อหน้า",
    // "Show page numbers"
    showPageNumbers: "แสดงหมายเลขหน้า",
    // "\"Previous Page\" button text"
    pagePrevText: "ข้อความปุ่ม \"หน้าก่อนหน้า\"",
    // "\"Next Page\" button text"
    pageNextText: "ข้อความปุ่ม \"หน้าถัดไป\"",
    // "\"Complete Survey\" button text"
    completeText: "ข้อความปุ่ม \"เสร็จสิ้นแบบสำรวจ\"",
    // "\"Review Answers\" button text"
    previewText: "ข้อความปุ่ม \"ตรวจสอบคำตอบ\"",
    // "\"Edit Answer\" button text"
    editText: "ข้อความปุ่ม \"แก้ไขคำตอบ\"",
    // "\"Start Survey\" button text"
    startSurveyText: "ข้อความปุ่ม \"เริ่มแบบสำรวจ\"",
    // "Show navigation buttons"
    showNavigationButtons: "แสดง/ซ่อนปุ่มนำทาง",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "การจัดตําแหน่งปุ่มนําทาง",
    // "Show the \"Previous Page\" button"
    showPrevButton: "แสดงปุ่ม \"หน้าก่อนหน้า\"",
    // "First page is a start page"
    firstPageIsStartPage: "หน้าแรกเป็นหน้าที่เริ่ม",
    // "Show the \"Thank You\" page"
    showCompletePage: "แสดงหน้า \"ขอบคุณ\"",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "ไปหน้าถัดไปอัตโนมัติ",
    // "Complete the survey automatically"
    autoAdvanceAllowComplete: "เสร็จสิ้นแบบสำรวจอัตโนมัติ",
    // "Show the progress bar"
    showProgressBar: "การจัดตำแหน่งแถบความคืบหน้า",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "การจัดตําแหน่งแถบความคืบหน้า",
    // "Question title alignment"
    questionTitleLocation: "การจัดตำแหน่งชื่อคำถาม",
    // "Question title width"
    questionTitleWidth: "ความกว้างของชื่อคำถาม",
    // "Required symbol(s)"
    requiredMark: "สัญลักษณ์ที่จำเป็น",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "เทมเพลตชื่อคำถาม, ค่าเริ่มต้นคือ: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "การจัดตำแหน่งข้อความข้อผิดพลาด",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "โฟกัสคำถามแรกในหน้าใหม่",
    // "Question order"
    questionOrder: "ลำดับคำถาม",
    // "Time limit to complete the survey"
    timeLimit: "เวลาจำกัดในการทำให้เสร็จ",
    // "Time limit to complete one page"
    timeLimitPerPage: "เวลาจำกัดในการทำหน้าให้เสร็จ",
    // [Auto-translated] "Use a timer"
    showTimer: "ใช้ตัวจับเวลา",
    // "Timer alignment"
    timerLocation: "การจัดตำแหน่งตัวจับเวลา",
    // "Timer mode"
    timerInfoMode: "โหมดตัวจับเวลา",
    // "Enable entry addition"
    allowAddPanel: "เปิดใช้งานการเพิ่มแผง",
    // "Enable entry removal"
    allowRemovePanel: "เปิดใช้งานการลบแผง",
    // "\"Add Entry\" button text"
    addPanelText: "ข้อความปุ่ม \"เพิ่มแผง\"",
    // "\"Remove Entry\" button text"
    removePanelText: "ข้อความปุ่ม \"ลบแผง\"",
    // "Show all elements on one page"
    isSinglePage: "แสดงองค์ประกอบทั้งหมดในหน้าหนึ่ง",
    // "HTML markup"
    html: "มาร์กอัป HTML",
    // "Answer"
    setValue: "คำตอบ",
    // "Storage format"
    dataFormat: "รูปแบบการจัดเก็บ",
    // "Enable row addition"
    allowAddRows: "เปิดใช้งานการเพิ่มแถว",
    // "Enable row removal"
    allowRemoveRows: "เปิดใช้งานการลบแถว",
    // "Enable row reordering"
    allowRowReorder: "เปิดใช้งานการเรียงลำดับแถวใหม่",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "ไม่ใช้หากคุณระบุความกว้างหรือความสูงของพื้นที่แสดงผลที่แน่นอน",
    // "Minimum display area width"
    minImageWidth: "ความกว้างขั้นต่ำของพื้นที่แสดงผล",
    // "Maximum display area width"
    maxImageWidth: "ความกว้างสูงสุดของพื้นที่แสดงผล",
    // "Minimum display area height"
    minImageHeight: "ความสูงขั้นต่ำของพื้นที่แสดงผล",
    // "Maximum display area height"
    maxImageHeight: "ความสูงสูงสุดของพื้นที่แสดงผล",
    // "Minimum value"
    minValue: "ค่าขั้นต่ำ",
    // "Maximum value"
    maxValue: "ค่าสูงสุด",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "ไม่คํานึงถึงตัวพิมพ์เล็กและตัวพิมพ์ใหญ่",
    // "Minimum length (in characters)"
    minLength: "ความยาวขั้นต่ำ (ในตัวอักษร)",
    // "Allow digits"
    allowDigits: "อนุญาตให้มีตัวเลข",
    // "Minimum count"
    minCount: "จำนวนขั้นต่ำ",
    // "Maximum count"
    maxCount: "จำนวนสูงสุด",
    // "Regular expression"
    regex: "นิพจน์ปกติ",
    surveyvalidator: {
      // [Auto-translated] "Notification message for invalid input"
      text: "ข้อความแจ้งเตือนสําหรับการป้อนข้อมูลที่ไม่ถูกต้อง",
      // [Auto-translated] "Valid when"
      expression: "ใช้ได้เมื่อ",
      // [Auto-translated] "Notification type"
      notificationType: "ประเภทการแจ้งเตือน",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "ความยาวสูงสุด (เป็นอักขระ)"
    },
    // "Total row header"
    totalText: "หัวแถวรวม",
    // "Aggregation method"
    totalType: "วิธีการรวม",
    // "Total value expression"
    totalExpression: "นิพจน์ค่ารวม",
    // "Total value display format"
    totalDisplayStyle: "รูปแบบการแสดงผลค่ารวม",
    // "Currency"
    totalCurrency: "สกุลเงิน",
    // "Formatted string"
    totalFormat: "สตริงรูปแบบ",
    // "Survey logo"
    logo: "โลโก้แบบสำรวจ",
    // "Survey layout"
    questionsOnPageMode: "เค้าโครงแบบสำรวจ",
    // "Restrict answer length"
    maxTextLength: "จำกัดความยาวคำตอบ",
    // "Restrict comment length"
    maxCommentLength: "จำกัดความยาวความคิดเห็น",
    // "Comment area height (in lines)"
    commentAreaRows: "ความสูงพื้นที่ความคิดเห็น (ในบรรทัด)",
    // "Auto-expand text areas"
    autoGrowComment: "ขยายพื้นที่ข้อความอัตโนมัติ",
    // "Allow users to resize text areas"
    allowResizeComment: "อนุญาตให้ผู้ใช้ปรับขนาดพื้นที่ข้อความ",
    // "Update input field values"
    textUpdateMode: "อัปเดตค่าช่องป้อนข้อมูล",
    // "Input mask type"
    maskType: "ประเภทหน้ากากอินพุต",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "ตั้งโฟกัสที่คำตอบที่ไม่ถูกต้องแรก",
    // "Run validation"
    checkErrorsMode: "รันการตรวจสอบ",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "ตรวจสอบฟิลด์ว่างเมื่อเสียโฟกัส",
    // "Redirect to an external link after submission"
    navigateToUrl: "เปลี่ยนเส้นทางไปยังลิงก์ภายนอกหลังจากส่ง",
    // "Dynamic external link"
    navigateToUrlOnCondition: "ลิงก์ภายนอกแบบไดนามิก",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "มาร์กอัปที่จะแสดงหากผู้ใช้กรอกแบบสำรวจนี้แล้ว",
    // "\"Thank You\" page markup"
    completedHtml: "มาร์กอัปหน้าขอบคุณ",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "มาร์กอัปหน้าขอบคุณแบบไดนามิก",
    // "Markup to show while survey model is loading"
    loadingHtml: "มาร์กอัปที่จะแสดงในขณะที่โมเดลแบบสำรวจโหลด",
    // "Comment area text"
    commentText: "ข้อความพื้นที่ความคิดเห็น",
    // "Autocomplete type"
    autocomplete: "ประเภทการเติมอัตโนมัติ",
    // "Label for \"True\""
    labelTrue: "ป้ายสำหรับ \"จริง\"",
    // "Label for \"False\""
    labelFalse: "ป้ายสำหรับ \"เท็จ\"",
    // "Show the Clear button"
    allowClear: "แสดงปุ่มลบ",
    // [Auto-translated] "Search mode"
    searchMode: "โหมดค้นหา",
    // "Display format"
    displayStyle: "รูปแบบการแสดงผล",
    // "Formatted string"
    format: "สตริงรูปแบบ",
    // "Maximum fractional digits"
    maximumFractionDigits: "จำนวนหลักเศษสูงสุด",
    // "Minimum fractional digits"
    minimumFractionDigits: "จำนวนหลักเศษขั้นต่ำ",
    // "Display grouping separators"
    useGrouping: "แสดงตัวคั่นกลุ่ม",
    // "Enable multiple file upload"
    allowMultiple: "เปิดใช้งานการอัปโหลดไฟล์หลายไฟล์",
    // "Preview uploaded images"
    allowImagesPreview: "แสดงตัวอย่างรูปภาพที่อัปโหลด",
    // [Auto-translated] "Accepted file categories"
    acceptedCategories: "ประเภทไฟล์ที่ยอมรับ",
    // "Accepted file types"
    acceptedTypes: "ประเภทไฟล์ที่ยอมรับ",
    // "Wait for upload to complete"
    waitForUpload: "รอให้การอัปโหลดเสร็จสมบูรณ์",
    // "Row details alignment"
    detailPanelMode: "การจัดตำแหน่งการขยายแถว",
    // "Minimum row count"
    minRowCount: "จำนวนแถวขั้นต่ำ",
    // "Maximum row count"
    maxRowCount: "จำนวนแถวสูงสุด",
    // [Auto-translated] "Row count expression"
    rowCountExpression: "นิพจน์จํานวนแถว",
    // "Confirm row removal"
    confirmDelete: "ยืนยันการลบแถว",
    // "Confirmation message"
    confirmDeleteText: "ข้อความยืนยัน",
    // "Initial number of entries"
    panelCount: "จำนวนแผงเริ่มต้น",
    // "Minimum number of entries"
    minPanelCount: "จำนวนแผงขั้นต่ำ",
    // "Maximum number of entries"
    maxPanelCount: "จำนวนแผงสูงสุด",
    // [Auto-translated] "Entry count expression"
    panelCountExpression: "นิพจน์จํานวนรายการ",
    // "Initial entry state"
    panelsState: "สถานะแผงภายใน",
    // "\"Previous Entry\" button text"
    prevPanelText: "ข้อความปุ่ม \"แผงก่อนหน้า\"",
    // "\"Next Entry\" button text"
    nextPanelText: "ข้อความปุ่ม \"แผงถัดไป\"",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "การจัดตำแหน่งปุ่ม \"ลบแผง\"",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "ซ่อนคำถามหากไม่มีแถว",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "ซ่อนคอลัมน์หากไม่มีแถว",
    // "Custom rating values"
    rateValues: "ค่าการให้คะแนนที่กำหนดเอง",
    // "Rating count"
    rateCount: "จำนวนการให้คะแนน",
    // "Rating configuration"
    autoGenerate: "การกำหนดค่าการให้คะแนน",
    slider: {
      // [Auto-translated] "Min value"
      min: "ค่าต่ําสุด",
      // [Auto-translated] "Max value"
      max: "ค่าสูงสุด",
      // [Auto-translated] "Step value"
      step: "ค่าขั้นตอน",
      // [Auto-translated] "Show scale labels"
      showLabels: "แสดงป้ายชื่อมาตราส่วน",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "แสดงคําแนะนําเครื่องมือ",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "อนุญาตให้ข้ามนิ้วหัวแม่มือ",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "จํานวนป้ายกํากับที่สร้างขึ้นโดยอัตโนมัติ",
      // [Auto-translated] "Min value expression"
      minValueExpression: "นิพจน์ค่าต่ําสุด",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "นิพจน์ค่าสูงสุด",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "การกําหนดค่าป้ายชื่อมาตราส่วน",
      // [Auto-translated] "Slider type"
      sliderType: "ประเภทตัวเลื่อน",
      // [Auto-translated] "Min range length"
      minRangeLength: "ความยาวช่วงต่ําสุด",
      // [Auto-translated] "Max range length"
      maxRangeLength: "ความยาวช่วงสูงสุด",
      // [Auto-translated] "Custom labels"
      customLabels: "ป้ายกํากับที่กําหนดเอง",
      // [Auto-translated] "Label format"
      labelFormat: "รูปแบบฉลาก",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "รูปแบบคําแนะนําเครื่องมือ"
    },
    imagemap: {
      // [Auto-translated] "Image URL"
      imageLink: "URL ของรูปภาพ",
      // [Auto-translated] "Areas"
      areas: "พื้นที่",
      // [Auto-translated] "Allow multiple selections"
      multiSelect: "อนุญาตให้เลือกได้หลายรายการ",
      // [Auto-translated] "Value property name"
      valuePropertyName: "ชื่อคุณสมบัติค่า",
      // [Auto-translated] "Shape"
      shape: "รูปร่าง",
      // [Auto-translated] "Idle fill color"
      idleFillColor: "สีเติมที่ไม่ได้ใช้งาน",
      // [Auto-translated] "Idle stroke color"
      idleStrokeColor: "สีจังหวะที่ไม่ได้ใช้งาน",
      // [Auto-translated] "Idle stroke width"
      idleStrokeWidth: "ความกว้างของจังหวะเดินเบา",
      // [Auto-translated] "Hover fill color"
      hoverFillColor: "โฮเวอร์สีเติม",
      // [Auto-translated] "Hover stroke color"
      hoverStrokeColor: "โฮเวอร์สีจังหวะ",
      // [Auto-translated] "Hover stroke width"
      hoverStrokeWidth: "ความกว้างของจังหวะโฮเวอร์",
      // [Auto-translated] "Selected fill color"
      selectedFillColor: "สีเติมที่เลือก",
      // [Auto-translated] "Selected stroke color"
      selectedStrokeColor: "สีจังหวะที่เลือก",
      // [Auto-translated] "Selected stroke width"
      selectedStrokeWidth: "ความกว้างของจังหวะที่เลือก",
      // [Auto-translated] "Maximum selected areas"
      maxSelectedAreas: "พื้นที่ที่เลือกสูงสุด",
      // [Auto-translated] "Minimum selected areas"
      minSelectedAreas: "พื้นที่ขั้นต่ําที่เลือก"
    },
    imagemaparea: {
      // [Auto-translated] "Value"
      value: "ความคุ้มค่า",
      // [Auto-translated] "Shape"
      shape: "รูปร่าง",
      // [Auto-translated] "Coordinates"
      coords: "พิกัด",
      // [Auto-translated] "Idle fill color"
      idleFillColor: "สีเติมที่ไม่ได้ใช้งาน",
      // [Auto-translated] "Idle stroke color"
      idleStrokeColor: "สีจังหวะที่ไม่ได้ใช้งาน",
      // [Auto-translated] "Idle stroke width"
      idleStrokeWidth: "ความกว้างของจังหวะเดินเบา",
      // [Auto-translated] "Hover fill color"
      hoverFillColor: "โฮเวอร์สีเติม",
      // [Auto-translated] "Hover stroke color"
      hoverStrokeColor: "โฮเวอร์สีจังหวะ",
      // [Auto-translated] "Hover stroke width"
      hoverStrokeWidth: "ความกว้างของจังหวะโฮเวอร์",
      // [Auto-translated] "Selected fill color"
      selectedFillColor: "สีเติมที่เลือก",
      // [Auto-translated] "Selected stroke color"
      selectedStrokeColor: "สีจังหวะที่เลือก",
      // [Auto-translated] "Selected stroke width"
      selectedStrokeWidth: "ความกว้างของจังหวะที่เลือก"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "ความสูงของภาพ",
      // [Auto-translated] "Image width"
      imageWidth: "ความกว้างของภาพ",
      // [Auto-translated] "Confirm file deletion"
      confirmDelete: "ยืนยันการลบไฟล์"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "ซ่อนคำถามหากไม่มีตัวเลือก",
    // "Minimum width"
    minWidth: "ความกว้างขั้นต่ำ",
    // "Maximum width"
    maxWidth: "ความกว้างสูงสุด",
    // "Width"
    width: "ความกว้าง",
    // "Show column headers"
    showHeader: "แสดงหัวคอลัมน์",
    // "Show horizontal scrollbar"
    horizontalScroll: "แสดงแถบเลื่อนแนวนอน",
    // "Minimum column width"
    columnMinWidth: "ความกว้างขั้นต่ำของคอลัมน์",
    // "Row header width"
    rowTitleWidth: "ความกว้างหัวแถว",
    // "Value to store when \"True\" is selected"
    valueTrue: "ค่าที่จะเก็บเมื่อเลือก \"จริง\"",
    // "Value to store when \"False\" is selected"
    valueFalse: "ค่าที่จะเก็บเมื่อเลือก \"เท็จ\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "ข้อความข้อผิดพลาด \"ค่าต่ำกว่าขั้นต่ำ\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "ข้อความข้อผิดพลาด \"ค่าสูงกว่าขั้นสูงสุด\"",
    // [Auto-translated] "\"Value does not match step size\" error message"
    stepErrorText: "ข้อความแสดงข้อผิดพลาด \"ค่าไม่ตรงกับขนาดขั้นตอน\"",
    // "\"Empty comment\" error message"
    otherErrorText: "ข้อความข้อผิดพลาด \"ความคิดเห็นว่าง\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "ข้อความข้อผิดพลาดสำหรับการตอบซ้ำ",
    // "Minimum choices to select"
    minSelectedChoices: "ตัวเลือกขั้นต่ำที่ต้องเลือก",
    // "Maximum choices to select"
    maxSelectedChoices: "ตัวเลือกสูงสุดที่ต้องเลือก",
    // "Logo width"
    logoWidth: "ความกว้างของโลโก้",
    // "Logo height"
    logoHeight: "ความสูงของโลโก้",
    // "Read-only"
    readOnly: "อ่านอย่างเดียว",
    // "Disable the read-only mode if"
    enableIf: "ปิดโหมดอ่านอย่างเดียวถ้า",
    // "\"No rows\" message"
    noRowsText: "ข้อความ \"ไม่มีแถว\"",
    // "Separate special choices"
    separateSpecialChoices: "แยกตัวเลือกพิเศษ",
    // "Copy choices from the following question"
    choicesFromQuestion: "คัดลอกตัวเลือกจากคำถามต่อไปนี้",
    // "Which choice options to copy"
    choicesFromQuestionMode: "ตัวเลือกใดที่จะคัดลอก",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "ใช้ค่าจากคอลัมน์เมทริกซ์ต่อไปนี้หรือคําถามแผงเป็น ID ตัวเลือก",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "ใช้ค่าจากคอลัมน์เมทริกซ์หรือคําถามแผงต่อไปนี้เป็นข้อความตัวเลือก",
    // "Display page titles in the progress bar"
    progressBarShowPageTitles: "แสดงชื่อหน้าในแถบความคืบหน้า",
    // [Auto-translated] "Display navigation text in the progress bar"
    progressBarShowNavigationText: "แสดงข้อความนําทางในแถบความคืบหน้า",
    // [Auto-translated] "Navigation text alignment"
    progressBarNavigationTextLocation: "การจัดตําแหน่งข้อความการนําทาง",
    // "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "แสดงหมายเลขหน้าในแถบความคืบหน้า",
    // "Add a comment box"
    showCommentArea: "เพิ่มกล่องความคิดเห็น",
    // "Placeholder text for the comment box"
    commentPlaceholder: "ข้อความตัวอย่างสำหรับกล่องความคิดเห็น",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "แสดงป้ายกำกับเป็นค่าขั้นสุด",
    // "Row order"
    rowOrder: "ลำดับแถว",
    // "Nested column count"
    columnColCount: "จำนวนคอลัมน์ซ้อน",
    // "Correct Answer"
    correctAnswer: "คำตอบที่ถูกต้อง",
    // "Default Values"
    defaultPanelValue: "ค่าดั้งเดิม",
    // "Cell Texts"
    cells: "ข้อความเซลล์",
    // "Select a file or paste a file link..."
    fileInputPlaceholder: "เลือกไฟล์หรือวางลิงก์ไฟล์...",
    // "Prevent duplicate responses in the following column"
    keyName: "ป้องกันการตอบซ้ำในคอลัมน์ต่อไปนี้",
    itemvalue: {
      // "Make the option visible if"
      visibleIf: "ทำให้ตัวเลือกมองเห็นได้ถ้า",
      // "Make the option selectable if"
      enableIf: "ทำให้ตัวเลือกสามารถเลือกได้ถ้า"
    },
    "itemvalue@rows": {
      // "Make the row visible if"
      visibleIf: "ทำให้แถวมองเห็นได้ถ้า",
      // "Make the row editable if"
      enableIf: "ทำให้แถวสามารถแก้ไขได้ถ้า"
    },
    imageitemvalue: {
      // "Alt text"
      text: "ข้อความ Alt"
    },
    // "Logo alignment"
    logoPosition: "การจัดตำแหน่งโลโก้",
    // [Auto-translated] "Preview mode"
    previewMode: "โหมดแสดงตัวอย่าง",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "เปิดใช้งานเค้าโครงกริด",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "คอลัมน์กริด",
    // [Auto-translated] "Mask settings"
    maskSettings: "การตั้งค่าหน้ากาก",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "การจัดตําแหน่งข้อความแสดงข้อผิดพลาดรายละเอียดแถว",
    // Creator tabs
    tabs: {
      // "General"
      general: "ทั่วไป",
      // "HTML Editor"
      html: "ตัวแก้ไข HTML",
      // "Columns"
      columns: "คอลัมน์",
      // "Rows"
      rows: "แถว",
      // "Choice Options"
      choices: "ตัวเลือก",
      // "Items"
      items: "รายการ",
      // "Visible If"
      visibleIf: "มองเห็นได้ถ้า",
      // "Editable If"
      enableIf: "สามารถแก้ไขได้ถ้า",
      // "Required If"
      requiredIf: "จำเป็นถ้า",
      // "Rating Values"
      rateValues: "ค่าการให้คะแนน",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "การตั้งค่าตัวเลื่อน",
      // "Choices from a Web Service"
      choicesByUrl: "ตัวเลือกจากบริการเว็บ",
      // "Numbering"
      numbering: "การจัดลำดับ",
      // "Validators"
      validators: "การตรวจสอบความถูกต้อง",
      // "Navigation"
      navigation: "การนำทาง",
      // "Question Settings"
      question: "การตั้งค่าคำถาม",
      // "Pages"
      pages: "หน้า",
      // [Auto-translated] "Regional Formats"
      regionalFormat: "รูปแบบภูมิภาค",
      // "Quiz Mode"
      timer: "โหมดควิซ",
      // "Calculated Values"
      calculatedValues: "ค่าที่คำนวณ",
      // "Triggers"
      triggers: "ทริกเกอร์",
      // "Title template"
      templateTitle: "เทมเพลตชื่อ",
      // "Totals"
      totals: "ยอดรวม",
      // "Conditions"
      logic: "เงื่อนไข",
      // "Input Mask Settings"
      mask: "การตั้งค่าหน้ากากอินพุต",
      layout: {
        // "Panel Layout"
        panel: "เค้าโครงแผง",
        // "Layout"
        question: "เค้าโครง",
        // "Layout"
        base: "เค้าโครง"
      },
      // "Data"
      data: "ข้อมูล",
      // "Validation"
      validation: "การตรวจสอบความถูกต้อง",
      // "Individual Cell Texts"
      cells: "ข้อความเซลล์",
      // "\"Thank You\" Page"
      showOnCompleted: "หน้าขอบคุณ",
      // "Logo in the Survey Header"
      logo: "โลโก้ในหัวเรื่องแบบสำรวจ",
      // "Expression"
      expression: "นิพจน์",
      // "Question Settings"
      questionSettings: "การตั้งค่าคำถาม",
      // "Header"
      header: "หัวเรื่อง",
      // "Background"
      background: "พื้นหลัง",
      // "Appearance"
      appearance: "การปรากฏ",
      // [Auto-translated] "Accent colors"
      accentColors: "สีเน้นเสียง",
      // [Auto-translated] "Surface background"
      surfaceBackground: "พื้นหลังพื้นผิว",
      // [Auto-translated] "Scaling"
      scaling: "มาตรา ส่วน",
      // "Others"
      others: "อื่นๆ"
    },
    // "Items"
    items: "รายการ",
    // "Make choices visible if"
    choicesVisibleIf: "ทำให้ตัวเลือกมองเห็นได้ถ้า",
    // "Make choices selectable if"
    choicesEnableIf: "ทำให้ตัวเลือกสามารถเลือกได้ถ้า",
    // "Increase the inner indent"
    innerIndent: "เพิ่มการเว้นวรรคภายใน",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "ใช้คําตอบจากรายการสุดท้ายเป็นค่าเริ่มต้น",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "ป้อนนิพจน์ที่นี่...",
    // "Clear hidden question values"
    clearIfInvisible: "ล้างค่าคำถามที่ซ่อนอยู่",
    // "Store values in the following property"
    valuePropertyName: "เก็บค่าในคุณสมบัติต่อไปนี้",
    // "Enable search-as-you-type"
    searchEnabled: "เปิดใช้งานการค้นหาขณะพิมพ์",
    // "Hide selected items"
    hideSelectedItems: "ซ่อนรายการที่เลือก",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "ยุบลงเมื่อเลือก",
    // "Vertical alignment within cells"
    verticalAlign: "การจัดตำแหน่งแนวตั้งในเซลล์",
    // "Alternate row colors"
    alternateRows: "สีแถวสลับ",
    // "Make columns visible if"
    columnsVisibleIf: "ทำให้คอลัมน์มองเห็นได้ถ้า",
    // "Make rows visible if"
    rowsVisibleIf: "ทำให้แถวมองเห็นได้ถ้า",
    // "Placeholder text for the comment box"
    otherPlaceholder: "ข้อความตัวอย่างสำหรับกล่องความคิดเห็น",
    // "Placeholder text for Local file"
    filePlaceholder: "ข้อความตัวอย่างสำหรับไฟล์ท้องถิ่น",
    // "Placeholder text for Camera"
    photoPlaceholder: "ข้อความตัวอย่างสำหรับกล้อง",
    // "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "ข้อความตัวอย่างสำหรับไฟล์ท้องถิ่นหรือกล้อง",
    // "Rating icon"
    rateType: "ไอคอนการให้คะแนน",
    // "Ex.: https://api.example.com/books"
    url_placeholder: "ตัวอย่าง: https://api.example.com/books",
    // "Ex.: categories.fiction"
    path_placeholder: "ตัวอย่าง: categories.fiction",
    // "Ex.: a)"
    questionStartIndex_placeholder: "ตัวอย่าง: ก)",
    // "Ex.: 6in"
    width_placeholder: "ตัวอย่าง: 6in",
    // "Ex.: 600px"
    minWidth_placeholder: "ตัวอย่าง: 600px",
    // "Ex.: 50%"
    maxWidth_placeholder: "ตัวอย่าง: 50%",
    // "auto"
    imageHeight_placeholder: "อัตโนมัติ",
    // "auto"
    imageWidth_placeholder: "อัตโนมัติ",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "ตัวอย่าง: 100px",
    theme: {
      // "Theme"
      themeName: "ธีม",
      // "Question appearance"
      isPanelless: "การปรากฏคำถาม",
      // "Background and corner radius"
      editorPanel: "พื้นหลังและรัศมีมุม",
      // "Background and corner radius"
      questionPanel: "พื้นหลังและรัศมีมุม",
      // "Accent color"
      primaryColor: "สีเน้น",
      // "Panel and question box opacity"
      panelBackgroundTransparency: "ความทึบของแผงและกล่องคำถาม",
      // "Input element opacity"
      questionBackgroundTransparency: "ความทึบขององค์ประกอบอินพุต",
      // "Survey font size"
      fontSize: "ขนาดฟอนต์ของแบบสำรวจ",
      // "Survey scale factor"
      scale: "ปัจจัยขยายแบบสำรวจ",
      // "Corner radius"
      cornerRadius: "รัศมีมุม",
      // [Auto-translated] "Advanced mode"
      advancedMode: "โหมดขั้นสูง",
      // "Title font"
      pageTitle: "ฟอนต์ชื่อเรื่อง",
      // "Description font"
      pageDescription: "ฟอนต์คำอธิบาย",
      // "Title font"
      questionTitle: "ฟอนต์ชื่อคำถาม",
      // "Description font"
      questionDescription: "ฟอนต์คำอธิบายคำถาม",
      // "Font"
      inputContent: "ฟอนต์",
      // "Opacity"
      backgroundOpacity: "ความทึบ", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs2-typography-font-family-text": "ตระกูลฟอนต์แบบสํารวจ",
      // [Auto-translated] "Background color"
      "--sjs2-color-utility-surface-survey": "สีพื้นหลัง",
      // [Auto-translated] "Accent background colors"
      "--sjs2-color-project-brand-600": "สีพื้นหลังเน้นเสียง",
      // [Auto-translated] "Accent foreground colors"
      "--sjs2-color-fg-brand-on-primary": "เน้นสีพื้นหน้า",
      // [Auto-translated] "Error message colors"
      "--sjs2-color-bg-alert-primary": "สีของข้อความแสดงข้อผิดพลาด",
      // [Auto-translated] "Shadow effects"
      "--sjs2-border-effect-surface-default": "เอฟเฟกต์เงา",
      // [Auto-translated] "Shadow effects"
      "--sjs2-border-effect-component-formbox-default": "เอฟเฟกต์เงา",
      // [Auto-translated] "Colors"
      "--sjs2-color-component-input-default-line": "สี"
    },
    "header@header": {
      // "View"
      headerView: "มุมมอง",
      // "Logo alignment"
      logoPosition: "การจัดตำแหน่งโลโก้",
      // "Survey title font"
      surveyTitle: "ฟอนต์ชื่อเรื่องแบบสำรวจ",
      // "Survey description font"
      surveyDescription: "ฟอนต์คำอธิบายแบบสำรวจ",
      // "Survey title font"
      headerTitle: "ฟอนต์ชื่อเรื่องแบบสำรวจ",
      // "Survey description font"
      headerDescription: "ฟอนต์คำอธิบายแบบสำรวจ",
      // "Content area width"
      inheritWidthFrom: "ความกว้างพื้นที่เนื้อหา",
      // "Text width"
      textAreaWidth: "ความกว้างข้อความ",
      // "Background color"
      backgroundColorSwitch: "สีพื้นหลัง",
      // "Background image"
      backgroundImage: "ภาพพื้นหลัง",
      // "Opacity"
      backgroundImageOpacity: "ความทึบ",
      // "Overlap"
      overlapEnabled: "ทับซ้อน",
      // "Logo alignment"
      logoPositionX: "การจัดตำแหน่งโลโก้",
      // "Survey title alignment"
      titlePositionX: "การจัดตำแหน่งชื่อเรื่องแบบสำรวจ",
      // "Survey description alignment"
      descriptionPositionX: "การจัดตำแหน่งคำอธิบายแบบสำรวจ"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "จริง",
    // "false"
    "false": "เท็จ",
    // "Local file"
    file: "ไฟล์ท้องถิ่น",
    // "Camera"
    camera: "กล้อง",
    // "Local file or Camera"
    "file-camera": "ไฟล์ท้องถิ่นหรือกล้อง",
    // "Inherit"
    inherit: "สืบทอด",
    // "Inherit"
    default: "สืบทอด",
    // "Initial"
    initial: "เริ่มต้น",
    // "Random"
    random: "สุ่ม",
    // "Collapsed"
    collapsed: "ยุบ",
    // "Expanded"
    expanded: "ขยาย",
    // "None"
    none: "ไม่มี",
    // "Ascending"
    asc: "เพิ่มขึ้น",
    // "Descending"
    desc: "ลดลง",
    // "Selected"
    selected: "เลือก",
    // "Unselected"
    unselected: "ไม่เลือก",
    // "decimal"
    decimal: "ทศนิยม",
    // "currency"
    currency: "สกุลเงิน",
    // "percent"
    percent: "เปอร์เซ็นต์",
    // "First panel is expanded"
    firstExpanded: "แผงแรกขยาย",
    // "Hide question numbers"
    off: "ซ่อนหมายเลขคำถาม",
    // "List"
    list: "รายการ",
    // [Auto-translated] "Carousel"
    carousel: "ม้าหมุน",
    // "Tabs"
    tab: "แท็บ",
    // "Horizontal"
    horizontal: "แนวนอน",
    // "Vertical"
    vertical: "แนวตั้ง",
    // "Top"
    top: "ด้านบน",
    // "Bottom"
    bottom: "ด้านล่าง",
    // "Top and bottom"
    topBottom: "ด้านบนและล่าง",
    // "Left"
    left: "ซ้าย",
    // "Right"
    right: "ขวา",
    // "Center"
    center: "กลาง",
    // "Left and right"
    leftRight: "ซ้ายและขวา",
    // "Middle"
    middle: "กลาง",
    // "color"
    color: "สี",
    // "date"
    date: "วันที่",
    // "datetime"
    datetime: "วันและเวลา",
    // "datetime-local"
    "datetime-local": "วันและเวลาท้องถิ่น",
    // "email"
    email: "อีเมล",
    // "month"
    month: "เดือน",
    // "number"
    number: "จำนวน",
    // "password"
    password: "รหัสผ่าน",
    // "range"
    range: "ช่วง",
    // "tel"
    tel: "โทรศัพท์",
    // "text"
    text: "ข้อความ",
    // "time"
    time: "เวลา",
    // "url"
    url: "URL",
    // "week"
    week: "สัปดาห์",
    // "Hidden"
    hidden: "ซ่อน",
    // "Contain"
    contain: "พอดี",
    // "Cover"
    cover: "ครอบคลุม",
    // "Fill"
    fill: "เติม",
    // "Next"
    next: "ถัดไป",
    // "Last"
    last: "สุดท้าย",
    // "Upon survey completion"
    onComplete: "เมื่อเสร็จสิ้นแบบสำรวจ",
    // "When question gets hidden"
    onHidden: "เมื่อคำถามถูกซ่อน",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "เมื่อคำถามหรือแผง/หน้าถูกซ่อน",
    clearInvisibleValues: {
      // "Never"
      none: "ไม่เคย"
    },
    clearIfInvisible: {
      // "Never"
      none: "ไม่เคย"
    },
    // [Auto-translated] "Radio buttons"
    radio: "ปุ่มวิทยุ",
    inputType: {
      // "Color"
      color: "สี",
      // "Date"
      date: "วันที่",
      // "Date and Time"
      "datetime-local": "วันและเวลา",
      // "Email"
      email: "อีเมล",
      // "Month"
      month: "เดือน",
      // "Number"
      number: "จำนวน",
      // "Password"
      password: "รหัสผ่าน",
      // "Range"
      range: "ช่วง",
      // "Phone Number"
      tel: "โทรศัพท์",
      // "Text"
      text: "ข้อความ",
      // "Time"
      time: "เวลา",
      // [Auto-translated] "URL"
      url: "เว็บไซต์",
      // "Week"
      week: "สัปดาห์"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "ค่าเดียว",
      // [Auto-translated] "Range"
      range: "เทือก"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "รถ",
      // [Auto-translated] "Always"
      always: "เสมอ",
      // [Auto-translated] "Never"
      never: "ไม่เคย"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "ความผิดพลาด",
      // [Auto-translated] "Warning"
      warning: "คำเตือน",
      // [Auto-translated] "Informational"
      info: "ข้อมูล"
    },
    cameraFacingMode: {
      // [Auto-translated] "Front"
      user: "ด้านหน้า",
      // [Auto-translated] "Rear"
      environment: "ด้านหลัง"
    },
    acceptedCategories: {
      // [Auto-translated] "Images"
      image: "ภาพ",
      // [Auto-translated] "Videos"
      video: "วิดีโอ",
      // [Auto-translated] "Audio"
      audio: "��สียง",
      // [Auto-translated] "Documents"
      document: "เอกสาร",
      // [Auto-translated] "Archives"
      archive: "หอจดหมายเหตุ",
      // [Auto-translated] "Custom"
      custom: "กําหนดเอง"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "ชื่อ-นามสกุล",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "อุปสรรค",
      // [Auto-translated] "First Name"
      "given-name": "ชื่อ",
      // [Auto-translated] "Middle Name"
      "additional-name": "ชื่อกลาง",
      // [Auto-translated] "Last Name"
      "family-name": "นามสกุล",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "ปัจจัย",
      // [Auto-translated] "Nickname"
      nickname: "ชื่อเล่น",
      // [Auto-translated] "Job Title"
      "organization-title": "ตําแหน่งงาน",
      // [Auto-translated] "User Name"
      username: "ชื่อผู้ใช้",
      // [Auto-translated] "New Password"
      "new-password": "รหัสผ่านใหม่",
      // [Auto-translated] "Current Password"
      "current-password": "รหัสผ่านปัจจุบัน",
      // [Auto-translated] "Organization Name"
      organization: "ชื่อองค์กร",
      // [Auto-translated] "Full Street Address"
      "street-address": "ที่อยู่แบบเต็ม",
      // [Auto-translated] "Address Line 1"
      "address-line1": "บรรทัดที่อยู่ 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "บรรทัดที่อยู่ 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "บรรทัดที่อยู่ 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "ที่อยู่ระดับ 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "ที่อยู่ระดับ 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "ที่อยู่ระดับ 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "ที่อยู่ระดับ 1",
      // [Auto-translated] "Country Code"
      country: "รหัสประเทศ",
      // [Auto-translated] "Country Name"
      "country-name": "ชื่อประเทศ",
      // [Auto-translated] "Postal Code"
      "postal-code": "รหัสไปรษณีย์",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "ชื่อผู้ถือบัตร",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "ชื่อผู้ถือบัตร",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "ชื่อกลางของผู้ถือบัตร",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "นามสกุลของผู้ถือบัตร",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "หมายเลขบัตรเครดิต",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "วันหมดอายุ",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "เดือนหมดอายุ",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "ปีหมดอายุ",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "รหัสความปลอดภัยของบัตร",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "ประเภทบัตรเครดิต",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "สกุลเงินของธุรกรรม",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "จํานวนเงินที่ทําธุรกรรม",
      // [Auto-translated] "Preferred Language"
      language: "ภาษาที่ต้องการ",
      // [Auto-translated] "Birthday"
      bday: "วันเกิด",
      // [Auto-translated] "Birthday Day"
      "bday-day": "วันเกิด",
      // [Auto-translated] "Birthday Month"
      "bday-month": "เดือนเกิด",
      // [Auto-translated] "Birthday Year"
      "bday-year": "ปีเกิด",
      // [Auto-translated] "Gender"
      sex: "เพศ",
      // [Auto-translated] "Website URL"
      url: "URL ของเว็บไซต์",
      // [Auto-translated] "Profile Photo"
      photo: "รูปโปรไฟล์",
      // [Auto-translated] "Telephone Number"
      tel: "หมายเลขโทรศัพท์",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "รหัสประเทศสําหรับโทรศัพท์",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "หมายเลขโทรศัพท์ในประเทศ",
      // [Auto-translated] "Area Code"
      "tel-area-code": "รหัสพื้นที่",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "หมายเลขโทรศัพท์ท้องถิ่น",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "คํานําหน้าโทรศัพท์ท้องถิ่น",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "คําต่อท้ายโทรศัพท์ท้องถิ่น",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "ส่วนขยายโทรศัพท์",
      // [Auto-translated] "Email Address"
      email: "ที่อยู่อีเมล",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "โปรโตคอลการส่งข้อความโต้ตอบแบบทันที"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "ไม่มีใคร",
      // [Auto-translated] "Pattern"
      pattern: "แบบ",
      // [Auto-translated] "Numeric"
      numeric: "ตัวเลข",
      // [Auto-translated] "Date and Time"
      datetime: "วันที่และเวลา",
      // [Auto-translated] "Currency"
      currency: "เงินตรา"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "รถ",
      // [Auto-translated] "Left"
      left: "ซ้าย",
      // [Auto-translated] "Right"
      right: "ขวา"
    },
    // "All"
    all: "ทั้งหมด",
    // "Page"
    page: "หน้า",
    // "Survey"
    survey: "แบบสำรวจ",
    // "When switching to the next page"
    onNextPage: "เมื่อเปลี่ยนไปหน้าถัดไป",
    // "After an answer is changed"
    onValueChanged: "หลังจากคำตอบถูกเปลี่ยน",
    questionsOnPageMode: {
      // "Original structure"
      standard: "โครงสร้างดั้งเดิม",
      // "Show all questions on one page"
      singlePage: "แสดงคำถามทั้งหมดในหน้าหนึ่ง",
      // "Show single question per page"
      questionPerPage: "แสดงคำถามเดียวต่อหน้า",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "แสดงช่องป้อนข้อมูลเดียวต่อหน้า"
    },
    // [Auto-translated] "Show all questions"
    allQuestions: "แสดงคําถามทั้งหมด",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "แสดงเฉพาะคําถามที่ตอบแล้ว",
    // "Completed pages"
    pages: "หน้าที่เสร็จสมบูรณ์",
    // "Answered questions"
    questions: "คำถามที่ตอบแล้ว",
    // "Answered required questions"
    requiredQuestions: "คำถามที่จำเป็นที่ตอบแล้ว",
    // "Valid answers"
    correctQuestions: "คำตอบที่ถูกต้อง",
    // "Completed pages (button UI)"
    buttons: "หน้าที่เสร็จสมบูรณ์ (UI ปุ่ม)",
    // "Under the input field"
    underInput: "ใต้ช่องป้อนข้อมูล",
    // "Under the question title"
    underTitle: "ใต้ชื่อคำถาม",
    // "On lost focus"
    onBlur: "เมื่อเสียโฟกัส",
    // "While typing"
    onTyping: "ขณะพิมพ์",
    // "Under the row"
    underRow: "ใต้แถว",
    // "Under the row, display one section only"
    underRowSingle: "ใต้แถว แสดงการขยายแถวเดียว",
    // "Auto"
    auto: "อัตโนมัติ",
    timerInfoMode: {
      // "Both"
      combined: "ทั้งสอง"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "ตามเค้าโครงเมทริกซ์"
    },
    panelsState: {
      // "Locked"
      default: "ล็อก",
      // "Collapse all"
      collapsed: "ยุบทั้งหมด",
      // "Expand all"
      expanded: "ขยายทั้งหมด",
      // "First expanded"
      firstExpanded: "แผงแรกขยาย"
    },
    widthMode: {
      // "Static"
      static: "คงที่",
      // "Responsive"
      responsive: "ตอบสนอง"
    },
    contentMode: {
      // "Image"
      image: "รูปภาพ",
      // "Video"
      video: "วิดีโอ",
      // [Auto-translated] "YouTube"
      youtube: "ยูทูบ"
    },
    displayMode: {
      // "Buttons"
      buttons: "ปุ่ม",
      // "Dropdown"
      dropdown: "ดรอปดาวน์",
      // [Auto-translated] "Segmented toggle"
      segmented: "สวิตช์แบบแบ่งส่วน",
      // [Auto-translated] "Radio buttons"
      radio: "ปุ่มวิทยุ",
      // [Auto-translated] "Checkbox"
      checkbox: "ช่องทําเครื่องหมาย",
      // [Auto-translated] "Switch"
      switch: "สวิตซ์",
      // [Auto-translated] "Custom"
      custom: "กําหนดเอง"
    },
    rateColorMode: {
      // "Default"
      default: "ค่าเริ่มต้น",
      // "Scale"
      scale: "มาตราส่วน"
    },
    scaleColorMode: {
      // "Monochrome"
      monochrome: "ขาวดำ",
      // "Colored"
      colored: "สีสัน"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "สร้างอัตโนมัติ",
      // "Manual"
      "false": "กำหนดเอง"
    },
    rateType: {
      // "Labels"
      labels: "ป้าย",
      // "Stars"
      stars: "ดาว",
      // "Smileys"
      smileys: "สไมลีย์"
    },
    state: {
      // "Locked"
      default: "ล็อก"
    },
    showQuestionNumbers: {
      // "Auto-numbering"
      default: "การจัดลำดับอัตโนมัติ",
      // "Auto-numbering"
      on: "การจัดลำดับอัตโนมัติ",
      // "Reset on each page"
      onPage: "รีเซ็ตในแต่ละหน้า",
      // "Reset on each panel"
      onpanel: "รีเซ็ตในแต่ละแผง",
      // [Auto-translated] "Recursive numbering"
      recursive: "การกําหนดหมายเลขแบบเรียกซ้ํา",
      // "No numbering"
      off: "ไม่มีการจัดลำดับ"
    },
    descriptionLocation: {
      // "Under the question title"
      underTitle: "ใต้ชื่อคำถาม",
      // "Under the input field"
      underInput: "ใต้ช่องป้อนข้อมูล"
    },
    selectToRankAreasLayout: {
      // "Next to choices"
      horizontal: "ข้างตัวเลือก",
      // "Above choices"
      vertical: "เหนือคำตอบ"
    },
    displayStyle: {
      // "Decimal"
      decimal: "ทศนิยม",
      // "Currency"
      currency: "สกุลเงิน",
      // "Percentage"
      percent: "เปอร์เซ็นต์",
      // "Date"
      date: "วันที่"
    },
    totalDisplayStyle: {
      // "Decimal"
      decimal: "ทศนิยม",
      // "Currency"
      currency: "สกุลเงิน",
      // "Percentage"
      percent: "เปอร์เซ็นต์",
      // "Date"
      date: "วันที่"
    },
    rowOrder: {
      // "Original"
      initial: "ดั้งเดิม"
    },
    questionOrder: {
      // "Original"
      initial: "ดั้งเดิม"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "ด้านบน",
      // [Auto-translated] "Bottom"
      bottom: "ก้น",
      // [Auto-translated] "Top and bottom"
      topbottom: "ด้านบนและด้านล่าง",
      // [Auto-translated] "Above the header"
      aboveheader: "เหนือส่วนหัว",
      // [Auto-translated] "Below the header"
      belowheader: "ด้านล่างส่วนหัว",
      // [Auto-translated] "Hidden"
      off: "ซ่อน"
    },
    // "Sum"
    sum: "รวม",
    // "Count"
    count: "นับ",
    // "Min"
    min: "ขั้นต่ำ",
    // "Max"
    max: "สูงสุด",
    // "Avg"
    avg: "เฉลี่ย",
    searchMode: {
      // "Contains"
      contains: "มี",
      // "Starts with"
      startsWith: "เริ่มต้นด้วย"
    },
    backgroundImageFit: {
      // "Auto"
      auto: "อัตโนมัติ",
      // "Cover"
      cover: "ครอบคลุม",
      // "Contain"
      contain: "พอดี",
      // "Stretch"
      fill: "เติม",
      // "Tile"
      tile: "กระเบื้อง"
    },
    backgroundImageAttachment: {
      // "Fixed"
      fixed: "คงที่",
      // "Scroll"
      scroll: "เลื่อน"
    },
    headerView: {
      // "Basic"
      basic: "พื้นฐาน",
      // "Advanced"
      advanced: "ขั้นสูง"
    },
    inheritWidthFrom: {
      // "Same as survey"
      survey: "เหมือนแบบสำรวจ",
      // "Same as container"
      container: "เหมือนคอนเทนเนอร์"
    },
    backgroundColorSwitch: {
      // "None"
      none: "ไม่มี",
      // "Accent color"
      accentColor: "สีเน้น",
      // "Custom"
      custom: "กำหนดเอง"
    },
    colorPalette: {
      // "Light"
      light: "แสง",
      // "Dark"
      dark: "มืด"
    },
    isPanelless: {
      // "Default"
      "false": "ค่าเริ่มต้น",
      // "Without Panels"
      "true": "ไม่มีแผง"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "เช่นเดียวกับแบบสํารวจ",
      // [Auto-translated] "Same as container"
      container: "เหมือนกับคอนเทนเนอร์"
    }
  },
  // Regions of the "Regional Formats" category. Unlike survey languages, a region can be
  regionLocales: {
    // [Auto-translated] "Arabic"
    ar: "ภาษาอาหรับ",
    // [Auto-translated] "Bulgarian"
    bg: "บัลแกเรีย",
    // [Auto-translated] "Catalan"
    ca: "คาตาลัน",
    // [Auto-translated] "Czech"
    cs: "เช็ก",
    // [Auto-translated] "Welsh"
    cy: "เวลส์",
    // [Auto-translated] "Danish"
    da: "ภาษาเดนมาร์ก",
    // [Auto-translated] "German"
    de: "เยอรมัน",
    // [Auto-translated] "Greek"
    el: "กรีก",
    // [Auto-translated] "English"
    en: "อังกฤษ",
    // [Auto-translated] "English (Australia)"
    "en-AU": "ภาษาอังกฤษ (ออสเตรเลีย)",
    // [Auto-translated] "English (Canada)"
    "en-CA": "ภาษาอังกฤษ (แคนาดา)",
    // [Auto-translated] "English (United Kingdom)"
    "en-GB": "ภาษาอังกฤษ (สหราชอาณาจักร)",
    // [Auto-translated] "English (Ireland)"
    "en-IE": "ภาษาอังกฤษ (ไอร์แลนด์)",
    // [Auto-translated] "English (India)"
    "en-IN": "ภาษาอังกฤษ (อินเดีย)",
    // [Auto-translated] "English (New Zealand)"
    "en-NZ": "ภาษาอังกฤษ (นิวซีแลนด์)",
    // [Auto-translated] "English (South Africa)"
    "en-ZA": "ภาษาอังกฤษ (แอฟริกาใต้)",
    // [Auto-translated] "Spanish"
    es: "ภาษาสเปน",
    // [Auto-translated] "Estonian"
    et: "ชาวเอสโตเนีย",
    // [Auto-translated] "Basque"
    eu: "บาสก์",
    // [Auto-translated] "Persian"
    fa: "เปอร์เซีย",
    // [Auto-translated] "Finnish"
    fi: "ฟินแลนด์",
    // [Auto-translated] "Filipino"
    fil: "ฟิลิปปินส์",
    // [Auto-translated] "French"
    fr: "ภาษาฝรั่งเศส",
    // [Auto-translated] "French (Canada)"
    "fr-CA": "ภาษาฝรั่งเศส (แคนาดา)",
    // [Auto-translated] "French (Switzerland)"
    "fr-CH": "ภาษาฝรั่งเศส (สวิตเซอร์แลนด์)",
    // [Auto-translated] "Hebrew"
    he: "ภาษาฮีบรู",
    // [Auto-translated] "Hindi"
    hi: "ภาษาฮินดี",
    // [Auto-translated] "Croatian"
    hr: "โครเอเชีย",
    // [Auto-translated] "Haitian Creole"
    ht: "ชาวเฮติ",
    // [Auto-translated] "Hungarian"
    hu: "ฮังการี",
    // [Auto-translated] "Indonesian"
    id: "อินโดนีเซีย",
    // [Auto-translated] "Icelandic"
    is: "ไอซ์แลนด์",
    // [Auto-translated] "Italian"
    it: "อิตาลี",
    // [Auto-translated] "Japanese"
    ja: "ภาษาญี่ปุ่น",
    // [Auto-translated] "Georgian"
    ka: "จอร์เจีย",
    // [Auto-translated] "Kazakh"
    kk: "คาซัค",
    // [Auto-translated] "Korean"
    ko: "เกาหลี",
    // [Auto-translated] "Lithuanian"
    lt: "ลิทัวเนีย",
    // [Auto-translated] "Latvian"
    lv: "ลัตเวีย",
    // [Auto-translated] "Macedonian"
    mk: "มาซิโดเนีย",
    // [Auto-translated] "Burmese"
    mm: "ชาวพม่า",
    // [Auto-translated] "Malay"
    ms: "มลายู",
    // [Auto-translated] "Dutch"
    nl: "ดัตช์",
    // [Auto-translated] "Dutch (Belgium)"
    "nl-BE": "ดัตช์ (เบลเยียม)",
    // [Auto-translated] "Norwegian"
    no: "นอร์เวย์",
    // [Auto-translated] "Polish"
    pl: "โปแลนด์",
    // [Auto-translated] "Portuguese"
    pt: "โปรตุเกส",
    // [Auto-translated] "Portuguese (Brazil)"
    "pt-BR": "โปรตุเกส (บราซิล)",
    // [Auto-translated] "Romanian"
    ro: "โรมาเนีย",
    // [Auto-translated] "Russian"
    ru: "รัสเซีย",
    // [Auto-translated] "Slovak"
    sk: "สโลวัก",
    // [Auto-translated] "Slovenian"
    sl: "ชาวสโลวีเนีย",
    // [Auto-translated] "Serbian"
    sr: "เซอร์เบีย",
    // [Auto-translated] "Swedish"
    sv: "ภาษาสวีเดน",
    // [Auto-translated] "Swahili"
    sw: "สวาฮิลี",
    // [Auto-translated] "Telugu"
    tel: "เตลูกู",
    // [Auto-translated] "Tajik"
    tg: "ทาจิก",
    // [Auto-translated] "Thai"
    th: "ภาษาไทย",
    // [Auto-translated] "Turkish"
    tr: "ตุรกี",
    // [Auto-translated] "Ukrainian"
    uk: "ยูเครน",
    // [Auto-translated] "Urdu"
    ur: "อูรดู",
    // [Auto-translated] "Vietnamese"
    vi: "เวียดนาม",
    // [Auto-translated] "Chinese"
    zh: "ภาษาจีน",
    // [Auto-translated] "Chinese (Simplified)"
    "zh-CN": "ภาษาจีน (ตัวย่อ)",
    // [Auto-translated] "Chinese (Traditional)"
    "zh-TW": "ภาษาจีน (ตัวเต็ม)"
  },
  // Operators
  op: {
    // "Empty"
    empty: "ว่าง",
    // "Not empty"
    notempty: "ไม่ว่าง",
    // "Equals"
    equal: "เท่ากับ",
    // "Does not equal"
    notequal: "ไม่เท่ากับ",
    // "Contains"
    contains: "มี",
    // "Does not contain"
    notcontains: "ไม่มี",
    // "Any of"
    anyof: "ใดๆ ของ",
    // [Auto-translated] "None of"
    noneof: "ไม่มี",
    // "All of"
    allof: "ทั้งหมดของ",
    // "Greater than"
    greater: "มากกว่า",
    // "Less than"
    less: "น้อยกว่า",
    // "Greater than or equal to"
    greaterorequal: "มากกว่าหรือเท่ากับ",
    // "Less than or equal to"
    lessorequal: "น้อยกว่าหรือเท่ากับ",
    // "and"
    and: "และ",
    // "or"
    or: "หรือ"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "เลือกหน้าที่จะทดสอบ",
    // "Show invisible elements"
    showInvisibleElements: "แสดงองค์ประกอบที่ซ่อนอยู่",
    // "Hide invisible elements"
    hideInvisibleElements: "ซ่อนองค์ประกอบที่ซ่อนอยู่",
    // [Auto-translated] "Previous"
    prevPage: "ก่อน",
    // [Auto-translated] "Next"
    nextPage: "ต่อไป"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "จำนวนคำตอบ",
    // "Email"
    emailvalidator: "อีเมล",
    // "Expression"
    expressionvalidator: "นิพจน์",
    // "Number"
    numericvalidator: "ตัวเลข",
    // "Regex"
    regexvalidator: "นิพจน์ปกติ",
    // "Text"
    textvalidator: "ข้อความ"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "เสร็จสิ้นแบบสำรวจ",
    // "Set answer"
    setvaluetrigger: "ตั้งค่าคำตอบ",
    // "Copy answer"
    copyvaluetrigger: "คัดลอกคำตอบ",
    // "Skip to question"
    skiptrigger: "ข้ามไปยังคำถาม",
    // "Run expression"
    runexpressiontrigger: "รันนิพจน์",
    // "change visibility (deprecated)"
    visibletrigger: "เปลี่ยนการมองเห็น (เลิกใช้แล้ว)"
  },
  peplaceholder: {
    regionalformat: {
      // [Auto-translated] "Same as survey language"
      locale: "เหมือนกับภาษาสํารวจ"
    },
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "ตัวอย่าง: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "ตัวอย่าง: mm/dd/yyyy HH:MM:ss"
    },
    panelbase: {
      // "Ex.: 200px"
      questionTitleWidth: "ตัวอย่าง: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "ตัวอย่าง: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "ตัวอย่าง: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "ID แผงที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      // "Type a panel subtitle."
      description: "พิมพ์คำบรรยายแผง",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของแผง",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับแผง",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการส่งแบบสำรวจถ้าไม่มีคำถามที่ตอบแล้ว",
      // "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "ใช้กับคำถามทั้งหมดในแผงนี้ ถ้าคุณต้องการเปลี่ยนการตั้งค่านี้ให้กำหนดกฎการจัดตำแหน่งชื่อเรื่องสำหรับคำถามเฉพาะ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "ตั้งความกว้างที่สม่ำเสมอสำหรับชื่อคำถามเมื่อจัดเรียงทางซ้ายของกล่องคำถาม รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามทั้งหมดในแผง ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "รักษาลำดับดั้งเดิมของคำถามหรือตั้งค่าให้สุ่ม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ",
      // "Repositions the panel to the end of a selected page."
      page: "ย้ายแผงไปที่หน้าที่เลือก",
      // "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "เพิ่มพื้นที่หรือมาร์จิ้นระหว่างเนื้อหาแผงและขอบซ้ายของกล่องแผง",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "ยกเลิกการเลือกเพื่อแสดงแผงในบรรทัดเดียวกับคำถามหรือแผงก่อนหน้า การตั้งค่านี้จะไม่ใช้ถ้าแผงเป็นองค์ประกอบแรกในแบบฟอร์มของคุณ",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "เลือกจาก: \"ขยาย\" - แผงแสดงเต็มและสามารถยุบได้; \"ยุบ\" - แผงแสดงเพียงชื่อเรื่องและคำอธิบายและสามารถขยายได้; \"ล็อก\" - แผงแสดงเต็มและไม่สามารถยุบได้",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "ตั้งความกว้างของแผงให้สัมพันธ์กับองค์ประกอบแบบสำรวจอื่นๆ ในบรรทัดเดียวกัน รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "กําหนดตัวเลขให้กับคําถามที่ซ้อนกันภายในแผงนี้",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "ระบุจํานวนคอลัมน์ที่แผงนี้ครอบคลุมภายในเค้าโครงกริด",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "ตารางนี้ให้คุณกําหนดค่าคอลัมน์กริดแต่ละคอลัมน์ภายในแผงควบคุม โดยจะกําหนดเปอร์เซ็นต์ความกว้างสําหรับแต่ละคอลัมน์โดยอัตโนมัติตามจํานวนองค์ประกอบสูงสุดในแถว เมื่อต้องการปรับแต่งเค้าโครงกริด ให้ปรับค่าเหล่านี้ด้วยตนเอง และกําหนดความกว้างของชื่อเรื่องสําหรับคําถามทั้งหมดในแต่ละคอลัมน์"
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "ID แผงที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      // "Type a panel subtitle."
      description: "พิมพ์คำบรรยายแผง",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของแผง",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับแผง",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการส่งแบบสำรวจถ้าไม่มีคำถามที่ตอบแล้ว",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "ใช้กับคำถามทั้งหมดในแผงนี้ ถ้าคุณต้องการเปลี่ยนการตั้งค่านี้ให้กำหนดกฎการจัดตำแหน่งชื่อเรื่องสำหรับคำถามเฉพาะ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "ตั้งค่าความกว้างที่สอดคล้องกันสําหรับชื่อคําถามเมื่อจัดตําแหน่งทางด้านซ้ายของกล่องคําถาม ยอมรับค่า CSS (px, %, in, pt เป็นต้น)",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามที่มีอินพุตที่ไม่ถูกต้อง เลือกระหว่าง: \"ด้านบน\" - ข้อความข้อผิดพลาดจะวางที่ด้านบนของกล่องคำถาม; \"ด้านล่าง\" - ข้อความข้อผิดพลาดจะวางที่ด้านล่างของกล่องคำถาม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามทั้งหมดในแผง ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ",
      // "Repositions the panel to the end of a selected page."
      page: "ย้ายแผงไปที่หน้าที่เลือก",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "เพิ่มช่องว่างหรือระยะขอบระหว่างเนื้อหาของแผงและเส้นขอบด้านซ้ายของกล่องแผง",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "ยกเลิกการเลือกเพื่อแสดงแผงในบรรทัดเดียวกับคำถามหรือแผงก่อนหน้า การตั้งค่านี้จะไม่ใช้ถ้าแผงเป็นองค์ประกอบแรกในแบบฟอร์มของคุณ",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "เลือกจาก: \"ขยาย\" - แผงแสดงเต็มและสามารถยุบได้; \"ยุบ\" - แผงแสดงเพียงชื่อเรื่องและคำอธิบายและสามารถขยายได้; \"ล็อก\" - แผงแสดงเต็มและไม่สามารถยุบได้",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "ตั้งความกว้างของแผงให้สัมพันธ์กับองค์ประกอบแบบสำรวจอื่นๆ ในบรรทัดเดียวกัน รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "พิมพ์ในเทมเพลตสำหรับชื่อแผงไดนามิก ใช้ {panelIndex} สำหรับตำแหน่งทั่วไปของแผงและ {visiblePanelIndex} สำหรับลำดับของแผงที่มองเห็นได้แทรกแทนที่ลงในเทมเพลตเพื่อเพิ่มการนับอัตโนมัติ",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "พิมพ์ในเทมเพลตสำหรับชื่อแท็บ ใช้ {panelIndex} สำหรับตำแหน่งทั่วไปของแผงและ {visiblePanelIndex} สำหรับลำดับของแผงที่มองเห็นได้แทรกแทนที่ลงในเทมเพลตเพื่อเพิ่มการนับอัตโนมัติ",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "ข้อความสำรองสำหรับชื่อแท็บที่ใช้เมื่อรูปแบบชื่อแท็บไม่สร้างค่า",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "การตั้งค่านี้ช่วยให้คุณควบคุมการมองเห็นของแผงแต่ละแผงในแผงไดนามิก ใช้ตัวแปร {panel} เพื่ออ้างอิงแผงปัจจุบันในนิพจน์ของคุณ",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "การตั้งค่านี้จะสืบทอดอัตโนมัติโดยคำถามทั้งหมดในแผงนี้ ถ้าคุณต้องการเปลี่ยนการตั้งค่านี้ให้กำหนดกฎการจัดตำแหน่งชื่อเรื่องสำหรับคำถามเฉพาะ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ใต้ชื่อแผง\")",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "กำหนดตำแหน่งของแผงที่เพิ่มใหม่ โดยค่าเริ่มต้นแผงใหม่จะถูกเพิ่มไปที่ท้าย เลือก \"ถัดไป\" เพื่อแทรกแผงใหม่หลังจากแผงปัจจุบัน",
      // "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "คัดลอกคำตอบจากแผงสุดท้ายและตั้งเป็นค่าเริ่มต้นสำหรับแผงไดนามิกถัดไป",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "อ้างอิงชื่อคำถามเพื่อต้องการให้ผู้ใช้ตอบคำถามนี้ที่ไม่ซ้ำกันในแต่ละแผง",
      // "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "ทริกเกอร์ข้อความแจ้งการยืนยันก่อนลบแผง",
      // [Auto-translated] "Specify an expression that calculates the number of entries. This expression overrides the \"Initial number of entries\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum number of entries\" and \"Maximum number of entries\" settings. While this expression is set, respondents cannot add or remove entries manually."
      panelCountExpression: "ระบุนิพจน์ที่คํานวณจํานวนรายการนิพจน์นี้จะมีผลเหนือการตั้งค่า \"จํานวนรายการเริ่มต้น\" และจะถูกประเมินใหม่ทุกครั้งที่ค่าที่อ้างอิงเปลี่ยนแปลงผลลัพธ์จะถูกจํากัดด้วยการตั้งค่า \"จํานวนรายการขั้นต่ํา\" และ \"จํานวนรายการสูงสุด\"ในขณะที่นิพจน์นี้ถูกตั้งค่า ผู้ตอบไม่สามารถเพิ่มหรือลบรายการด้วยตนเองได้",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "กําหนดตัวเลขให้กับคําถามที่ซ้อนกันภายในแผงแบบไดนามิก"
    },
    matrixdynamic: {
      // [Auto-translated] "Specify an expression that calculates the number of rows. This expression overrides the \"Row count\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum row count\" and \"Maximum row count\" settings. While this expression is set, respondents cannot add or remove rows manually."
      rowCountExpression: "ระบุนิพจน์ที่คํานวณจํานวนแถวนิพจน์นี้จะมีผลเหนือการตั้งค่า \"จํานวนแถว\" และจะถูกประเมินใหม่ทุกครั้งที่ค่าที่อ้างอิงเปลี่ยนแปลงผลลัพธ์จะถูกจํากัดโดยการตั้งค่า \"จํานวนแถวขั้นต่ํา\" และ \"จํานวนแถวสูงสุด\"ในขณะที่นิพจน์นี้ถูกตั้งค่า ผู้ตอบแบบสอบถามไม่สามารถเพิ่มหรือลบแถวด้วยตนเองได้",
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "ทริกเกอร์ข้อความแจ้งการยืนยันก่อนที่จะลบแถว",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "ขยายส่วนรายละเอียดโดยอัตโนมัติเมื่อมีการเพิ่มแถวใหม่ลงในเมทริส"
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "คัดลอกคำตอบจากแถวสุดท้ายและตั้งเป็นค่าเริ่มต้นสำหรับแถวไดนามิกถัดไป",
    // "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "การตั้งค่านี้ช่วยให้คุณตั้งค่าคำตอบเริ่มต้นตามนิพจน์ นิพจน์สามารถประกอบด้วยการคำนวณพื้นฐาน {q1_id} + {q2_id}, นิพจน์บูลีน เช่น {age} > 60, และฟังก์ชัน: iif(), today(), age(), min(), max(), avg() เป็นต้น ค่าที่กำหนดโดยนิพจน์นี้จะเป็นค่าเริ่มต้นที่สามารถถูกแทนที่ได้โดยการป้อนของผู้ตอบ",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดเมื่อค่าคำตอบของผู้ตอบจะถูกรีเซ็ตตาม \"นิพจน์ค่าเริ่มต้น\" หรือ \"นิพจน์ตั้งค่า\" หรือค่าเริ่มต้นถ้ามีการตั้งค่า",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดเมื่อรัน \"นิพจน์ตั้งค่า\" และตั้งค่าที่ได้เป็นคำตอบ",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "ระบุนิพจน์ที่กำหนดค่าที่จะตั้งเมื่อเงื่อนไขในกฎ \"ตั้งค่า\" ถูกตอบสนอง นิพจน์สามารถประกอบด้วยการคำนวณพื้นฐาน {q1_id} + {q2_id}, นิพจน์บูลีน เช่น {age} > 60, และฟังก์ชัน: iif(), today(), age(), min(), max(), avg() เป็นต้น ค่าที่กำหนดโดยนิพจน์นี้สามารถถูกแทนที่ได้โดยการป้อนของผู้ตอบ",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "ตัวสร้างแบบสํารวจช่วยให้คุณสามารถปรับความกว้างแบบอินไลน์ขององค์ประกอบฟอร์มด้วยตนเองเพื่อควบคุมเค้าโครง หากสิ่งนี้ไม่ก่อให้เกิดผลลัพธ์ที่ต้องการ คุณสามารถเปิดใช้งานเค้าโครงกริด ซึ่งโครงสร้างสร้างองค์ประกอบโดยใช้ระบบตามคอลัมน์ หากต้องการกําหนดค่าคอลัมน์เค้าโครง ให้เลือกหน้าหรือแผง แล้วใช้ตาราง \"การตั้งค่าคําถาม\" → \"คอลัมน์กริด\" หากต้องการปรับจํานวนคอลัมน์ของคําถาม ให้เลือกและตั้งค่าที่ต้องการในช่อง \"เค้าโครง\" → \"ช่วงคอลัมน์\"",
    question: {
      // "A question ID that is not visible to respondents."
      name: "ID คำถามที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      // "Type a question subtitle."
      description: "พิมพ์คำบรรยายคำถาม",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของคำถาม",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับคำถาม",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการตอบแบบสำรวจหรือการส่งถ้าไม่มีคำถามที่ตอบแล้ว",
      // "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "ยกเลิกการเลือกเพื่อแสดงคำถามในบรรทัดเดียวกับคำถามหรือแผงก่อนหน้า การตั้งค่านี้จะไม่ใช้ถ้าคำถามเป็นองค์ประกอบแรกในแบบฟอร์มของคุณ",
      // "Repositions the question to the end of a selected page."
      page: "ย้ายคำถามไปที่หน้าที่เลือก",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "เลือกจาก: \"ขยาย\" - กล่องคำถามแสดงเต็มและสามารถยุบได้; \"ยุบ\" - กล่องคำถามแสดงเพียงชื่อเรื่องและคำอธิบายและสามารถขยายได้; \"ล็อก\" - กล่องคำถามแสดงเต็มและไม่สามารถยุบได้",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "แทนที่กฎการจัดตำแหน่งชื่อเรื่องที่กำหนดไว้ในแผง, หน้า หรือระดับแบบสำรวจ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับสูงกว่าถ้ามี (ค่าเริ่มต้นคือ \"ด้านบน\")",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ใต้ชื่อคำถาม\")",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามที่มีอินพุตที่ไม่ถูกต้อง เลือกระหว่าง: \"ด้านบน\" - ข้อความข้อผิดพลาดจะวางที่ด้านบนของกล่องคำถาม; \"ด้านล่าง\" - ข้อความข้อผิดพลาดจะวางที่ด้านล่างของกล่องคำถาม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "เพิ่มพื้นที่หรือมาร์จิ้นระหว่างเนื้อหาคำถามและขอบซ้ายของกล่องคำถาม",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "ตั้งความกว้างของคำถามให้สัมพันธ์กับองค์ประกอบแบบสำรวจอื่นๆ ในบรรทัดเดียวกัน รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "เลือกจาก: \"เมื่อเสียโฟกัส\" - ค่าจะถูกอัปเดตเมื่อช่องป้อนข้อมูลเสียโฟกัส; \"ขณะพิมพ์\" - ค่าจะถูกอัปเดตแบบเรียลไทม์เมื่อผู้ใช้กำลังพิมพ์ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"เมื่อเสียโฟกัส\")",
      // "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "คุณสามารถใช้บริการเว็บใดก็ได้เป็นแหล่งข้อมูลสำหรับคำถามเลือกหลายตัวเลือก เพื่อเติมค่าตัวเลือกให้ป้อน URL ของบริการที่ให้ข้อมูล",
      // "A comparison operation used to filter the drop-down list."
      searchMode: "การดำเนินการเปรียบเทียบที่ใช้ในการกรองรายการดรอปดาวน์",
      // "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "ข้อความยาวในตัวเลือกจะสร้างการตัดบรรทัดอัตโนมัติเพื่อให้พอดีกับเมนูดรอปดาวน์ ยกเลิกการเลือกถ้าคุณต้องการให้ข้อความถูกตัด",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "ระบุจํานวนคอลัมน์ที่คําถามนี้ครอบคลุมภายในเค้าโครงกริด"
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "ใช้ไอคอนไม้กายสิทธิ์เพื่อกําหนดว่าค่าของคําถามถือว่าถูกต้องเมื่อใด",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "ข้อผิดพลาดจะบล็อกความคืบหน้าจนกว่าจะได้รับการแก้ไข คําเตือนจะเน้นปัญหาแต่อนุญาตให้ดําเนินการต่อ บันทึกข้อมูลเสนอบริบทเพิ่มเติมหรือคําแนะนําที่เป็นกลาง เมื่อใช้คําเตือนหรือบันทึกข้อมูล เราขอแนะนําให้เปิดใช้งานการตรวจสอบทันที: \"แบบสํารวจ\" → \"การตรวจสอบความถูกต้อง\" → \"เรียกใช้การตรวจสอบความถูกต้อง\" → \"หลังจากคําตอบมีการเปลี่ยนแปลง\""
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "ตั้งความกว้างของพื้นที่ลายเซ็นที่แสดงและภาพที่ได้",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "ตั้งความสูงของพื้นที่ลายเซ็นที่แสดงและภาพที่ได้",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "เลือกถ้าคุณต้องการให้พื้นที่ลายเซ็นเติมพื้นที่ทั้งหมดในกล่องคำถามขณะที่รักษาสัดส่วน 3:2 เมื่อกำหนดค่าความกว้างและความสูงที่กำหนดเองแล้ว การตั้งค่านี้จะรักษาสัดส่วนของขนาดนี้"
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "ระบุความสูงที่แสดงของภาพที่อัปโหลดในการแสดงตัวอย่างและความสูงจริงของภาพที่ถ่ายด้วยกล้อง ในโหมดอัปโหลดไฟล์เดียว ความสูงของการแสดงผลจะถูกจํากัดโดยพื้นที่แสดงตัวอย่าง ในโหมดอัปโหลดไฟล์หลายไฟล์ จะถูกจํากัดด้วยพื้นที่ภาพขนาดย่อ",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "ระบุความกว้างที่แสดงของภาพที่อัปโหลดในการแสดงตัวอย่างและความกว้างจริงของภาพที่ถ่ายด้วยกล้อง ในโหมดอัปโหลดไฟล์เดียว ความกว้างของการแสดงผลจะถูกจํากัดโดยพื้นที่แสดงตัวอย่าง ในโหมดอัปโหลดไฟล์หลายไฟล์ จะถูกจํากัดด้วยพื้นที่ภาพขนาดย่อ",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "แสดงตัวอย่างภาพขนาดย่อสําหรับไฟล์ที่อัปโหลดเมื่อเป็นไปได้ ยกเลิกการเลือกหากคุณต้องการแสดงไอคอนไฟล์แทน",
      // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
      confirmDelete: "ทริกเกอร์ข้อความแจ้งเพื่อขอให้ยืนยันการลบไฟล์"
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "ตัวเลือก \"อัตโนมัติ\" จะกำหนดโหมดเนื้อหาที่เหมาะสมโดยอัตโนมัติตาม URL ที่ให้มา"
    },
    imagepicker: {
      // "Overrides the minimum and maximum height values."
      imageHeight: "แทนค่าความสูงขั้นต่ำและสูงสุด",
      // "Overrides the minimum and maximum width values."
      imageWidth: "แทนค่าความกว้างขั้นต่ำและสูงสุด",
      // "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"ค่า\" ทำหน้าที่เป็น ID รายการที่ใช้ในกฎเงื่อนไข; \"ข้อความ\" แสดงให้ผู้ตอบเห็น",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "เลือกจาก \"รูปภาพ\" และ \"วิดีโอ\" เพื่อกำหนดโหมดเนื้อหาของตัวเลือกสื่อ ถ้าเลือก \"รูปภาพ\" ให้แน่ใจว่าตัวเลือกทั้งหมดที่ให้เป็นไฟล์รูปภาพในรูปแบบ JPEG, GIF, PNG, APNG, SVG, BMP, ICO ถ้าเลือก \"วิดีโอ\" ให้แน่ใจว่าตัวเลือกทั้งหมดเป็นลิงก์ตรงไปยังไฟล์วิดีโอในรูปแบบ MP4, MOV, WMV, FLV, AVI, MKV โปรดทราบว่าลิงก์ YouTube ไม่รองรับสำหรับตัวเลือกวิดีโอ"
    },
    comment: {
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "ตั้งจำนวนบรรทัดที่แสดงในช่องป้อนข้อมูล ถ้าอินพุตมีบรรทัดมากขึ้น แถบเลื่อนจะปรากฏ"
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "เลือกว่าคุณต้องการป้องกันไม่ให้ผู้ตอบแบบสอบถามกรอกแบบสํารวจหรือไม่",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "ตั้งค่าตําแหน่งของแถบความคืบหน้า ค่า \"อัตโนมัติ\" จะแสดงแถบความคืบหน้าด้านบนหรือด้านล่างส่วนหัวของแบบสํารวจ"
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "ID คอลัมน์ที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "เมื่อเปิดใช้สำหรับคอลัมน์ ผู้ตอบจะต้องให้คำตอบที่ไม่ซ้ำกันสำหรับแต่ละคำถามในคอลัมน์นี้",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "ตั้งจำนวนบรรทัดที่แสดงในช่องป้อนข้อมูล ถ้าอินพุตมีบรรทัดมากขึ้น แถบเลื่อนจะปรากฏ",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของคอลัมน์",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับคอลัมน์",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการส่งแบบสำรวจถ้าไม่มีคำถามที่ตอบแล้ว",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "เมื่อเลือก จะสร้างคอลัมน์แยกสำหรับตัวเลือกแต่ละตัว",
      // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "จัดเรียงตัวเลือกตัวเลือกในรูปแบบหลายคอลัมน์ เมื่อตั้งค่าเป็น 0 ตัวเลือกจะแสดงในบรรทัดเดียว เมื่อตั้งค่าเป็น -1 ค่าจริงจะถูกสืบทอดมาจากคุณสมบัติ \"จํานวนคอลัมน์ที่ซ้อนกัน\" ของเมทริกซ์หลัก"
    },
    slider: {
      // "The lowest number that users can select."
      min: "จํานวนต่ําสุดที่ผู้ใช้สามารถเลือกได้",
      // "The highest number that users can select."
      max: "จํานวนสูงสุดที่ผู้ใช้สามารถเลือกได้",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "ช่วงเวลาระหว่างค่ามาตราส่วนที่เลือกได้ ตัวอย่างเช่น ขั้นตอน 5 จะอนุญาตให้ผู้ใช้เลือก 0, 5, 10 เป็นต้น",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "ระยะห่างขั้นต่ําระหว่างนิ้วหัวแม่มือของแถบเลื่อนที่ผู้ใช้สามารถตั้งค่าได้",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "ระยะห่างสูงสุดระหว่างนิ้วหัวแม่มือของแถบเลื่อนที่ผู้ใช้สามารถตั้งค่าได้",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "ระบุจํานวนป้ายชื่อมาตราส่วนที่จะสร้าง ค่า -1 หมายความว่าตัวเลขจะถูกคํานวณโดยอัตโนมัติตามค่าต่ําสุดและค่าสูงสุด",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "ใช้ \"{0}\" เป็นตัวยึดสําหรับค่าจริง",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "ให้คุณกําหนดป้ายกํากับที่กําหนดเองตามค่าที่เฉพาะเจาะจงและเลือกกําหนดข้อความที่สอดคล้องกัน (เช่น 0 = \"แย่\", 100 = \"ยอดเยี่ยม\")",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "ใช้ \"{0}\" เป็นต��วยึดสําหรับค่าจริง",
      // "Allows users to move one thumb past the other."
      allowSwap: "อนุญาตให้ผู้ใช้เลื่อนนิ้วหัวแม่มือข้างหนึ่งผ่านอีกนิ้วหนึ่ง",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "แสดงปุ่มที่ล้างค่าแถบเลื่อนที่เลือกและตั้งค่าเป็น undefined",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "กําหนดค่าต่ําสุดของแถบเลื่อนแบบไดนามิกโดยใช้นิพจน์ รองรับการคํานวณพื้นฐาน (เช่น '{q1_id} + {q2_id}') ตรรกะบูลีน (เช่น '{age} > 60') และฟังก์ชันต่างๆ เช่น 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' และอื่นๆ",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "กําหนดค่าสูงสุดของแถบเลื่อนแบบไดนามิกโดยใช้นิพจน์ รองรับการคํานวณพื้นฐาน (เช่น '{q1_id} + {q2_id}') ตรรกะบูลีน (เช่น '{age} > 60') และฟังก์ชันต่างๆ เช่น 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' และอื่นๆ"
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "ทําให้ตัวเลือกนี้พิเศษ เมื่อเลือกโดยผู้ใช้ ระบบจะยกเลิกการเลือกตัวเลือกอื่นๆ ทั้งหมดในคําถามโดยอัตโนมัติ",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "ทําให้ช่องทําเครื่องหมายในคอลัมน์นี้เป็นเอกสิทธิ์เฉพาะบุคคล เมื่อผู้ใช้เลือก ผู้ใช้จะยกเลิกการเลือกช่องทําเครื่องหมายอื่นๆ ทั้งหมดในแถวเดียวกันโดยอัตโนมัติ"
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "เลือกว่าตัวพิมพ์ใหญ่และตัวพิมพ์เล็กในนิพจน์ทั่วไปต้องถือว่าเทียบเท่าหรือไม่",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "เลือกจาก: \"คงที่\" - ตั้งค่าความกว้างคงที่; \"ตอบสนอง\" - ทำให้แบบสำรวจเต็มความกว้างของหน้าจอ; \"อัตโนมัติ\" - ใช้ค่าใดค่าหนึ่งในสองค่าตามประเภทคำถามที่ใช้",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "กำหนดค่า cookie ที่ไม่ซ้ำกันสำหรับแบบสำรวจของคุณ Cookie จะถูกตั้งค่าในเบราว์เซอร์ของผู้ตอบเมื่อแบบสำรวจเสร็จสมบูรณ์เพื่อป้องกันการส่งแบบสำรวจซ้ำ",
    // "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "วางลิงก์ภาพ (ไม่มีขนาดจำกัด) หรือคลิกไอคอนโฟลเดอร์เพื่อเลือกไฟล์จากคอมพิวเตอร์ของคุณ (สูงสุด 64KB)",
    // "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "ตั้งค่าความกว้างโลโก้ในหน่วย CSS (px, %, in, pt, ฯลฯ)",
    // "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "ตั้งค่าความสูงโลโก้ในหน่วย CSS (px, %, in, pt, ฯลฯ)",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "เลือกจาก: \"ไม่มี\" - ภาพคงขนาดเดิม; \"พอดี\" - ภาพถูกปรับขนาดให้พอดีขณะที่รักษาสัดส่วน; \"ครอบคลุม\" - ภาพเติมเต็มกล่องทั้งหมดขณะที่รักษาสัดส่วน; \"เติม\" - ภาพถูกยืดให้เต็มกล่องโดยไม่รักษาสัดส่วน",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "เลือกว่าคุณต้องการให้แบบสํารวจเลื่อนไปยังหน้าถัดไปโดยอัตโนมัติเมื่อผู้ตอบคําถามทั้งหมดในหน้าปัจจุบันแล้ว ฟีเจอร์นี้จะไม่มีผลหากคําถามสุดท้ายในหน้าเป็นคําถามปลายเปิดหรืออนุญาตให้มีคําตอบหลายข้อ",
    // "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "เลือกถ้าคุณต้องการให้แบบสำรวจเสร็จสิ้นโดยอัตโนมัติหลังจากผู้ตอบตอบคำถามทั้งหมด",
    // "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "ตั้งการมองเห็นและตำแหน่งของปุ่มนำทางในหน้า",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "ตั้งค่าตําแหน่งของปุ่มนําทางบนหน้า",
    // "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "เปิดใช้งานหน้าพรีวิวที่มีคำถามทั้งหมดหรือที่ตอบแล้ว",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "ใช้กับคำถามทั้งหมดในแบบสำรวจ การตั้งค่านี้สามารถถูกแทนที่ได้โดยกฎการจัดตำแหน่งชื่อเรื่องที่ระดับต่ำกว่า: แผง, หน้า หรือคำถาม การตั้งค่าระดับต่ำกว่าจะยกเลิกการตั้งค่าระดับสูง",
    // "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "สัญลักษณ์หรือชุดของสัญลักษณ์ที่ระบุว่าจำเป็นต้องตอบ",
    // "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "ป้อนหมายเลขหรือตัวอักษรที่คุณต้องการเริ่มการนับ",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามที่มีอินพุตที่ไม่ถูกต้อง เลือกระหว่าง: \"ด้านบน\" - ข้อความข้อผิดพลาดจะวางที่ด้านบนของกล่องคำถาม; \"ด้านล่าง\" - ข้อความข้อผิดพลาดจะวางที่ด้านล่างของกล่องคำถาม",
    // "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "เลือกถ้าคุณต้องการให้ช่องป้อนข้อมูลแรกในแต่ละหน้าเตรียมพร้อมสำหรับการป้อนข้อความ",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "รักษาลำดับดั้งเดิมของคำถามหรือตั้งค่าให้สุ่ม ผลของการตั้งค่านี้จะแสดงในแท็บพรีวิวเท่านั้น",
    // "For text entry questions only."
    maxTextLength: "สำหรับคำถามป้อนข้อความเท่านั้น",
    // "For question comments only."
    maxCommentLength: "สำหรับความคิดเห็นคำถามเท่านั้น",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "ตั้งค่าจํานวนบรรทัดที่แสดงในพื้นที่ข้อความสําหรับความคิดเห็นของคําถาม หากอินพุตใช้บรรทัดมากขึ้น แถบเลื่อนจะปรากฏขึ้น",
    // "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "เลือกถ้าคุณต้องการให้ความคิดเห็นคำถามและคำถามข้อความยาวขยายตัวตามความยาวของข้อความที่ป้อน",
    // "For question comments and Long Text questions only."
    allowResizeComment: "สำหรับความคิดเห็นคำถามและคำถามข้อความยาวเท่านั้น",
    // "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "ตัวแปรที่กำหนดเองทำหน้าที่เป็นตัวแปรกลางหรือเสริมที่ใช้ในการคำนวณแบบฟอร์ม พวกมันใช้คำตอบของผู้ตอบเป็นค่าต้นแหล่ง แต่ละตัวแปรที่กำหนดเองมีชื่อที่ไม่ซ้ำกันและนิพจน์ที่อิงตามค่า",
    // "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "เลือกถ้าคุณต้องการให้ค่าที่คำนวณถูกบันทึกพร้อมกับผลลัพธ์แบบสำรวจ",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "ทริกเกอร์เป็นเหตุการณ์หรือเงื่อนไขที่อิงตามนิพจน์ เมื่อนิพจน์ประเมินเป็น \"จริง\" ทริกเกอร์จะเริ่มการกระทำ การกระทำดังกล่าวสามารถมีคำถามเป้าหมายที่มันมีผลกระทบ",
    // "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "เลือกว่าจะล้างค่าคำถามที่ซ่อนโดยตรรกะเงื่อนไขหรือไม่และเมื่อใด",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "เลือกจาก: \"เมื่อเสียโฟกัส\" - ค่าจะถูกอัปเดตเมื่อช่องป้อนข้อมูลเสียโฟกัส; \"ขณะพิมพ์\" - ค่าจะถูกอัปเดตแบบเรียลไทม์เมื่อผู้ใช้กำลังพิมพ์",
    // "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "ค่าด้านซ้ายทำหน้าที่เป็น ID คอลัมน์ที่ใช้ในกฎเงื่อนไข ค่าด้านขวาจะแสดงให้ผู้ตอบเห็น",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "ค่าด้านซ้ายทำหน้าที่เป็น ID แถวที่ใช้ในกฎเงื่อนไข ค่าด้านขวาจะแสดงให้ผู้ตอบเห็น",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "แสดงเฉพาะเมื่อมีคอลัมน์ที่แสดงค่ารวมที่ตั้งค่าด้วย \"วิธีการรวม\" หรือ \"นิพจน์ค่ารวม\"",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับเซลล์ที่มีอินพุตที่ไม่ถูกต้อง ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าจาก \"การจัดข้อความข้อผิดพลาด\"",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "ตั้งค่าตําแหน่งของข้อความแสดงข้อผิดพลาดสําหรับคําถามที่ซ้อนกันในส่วนรายละเอียด ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าจากคุณสมบัติ \"การจัดตําแหน่งข้อความแสดงข้อผิดพลาด\"",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "เมื่อเปิดใช้คุณสมบัติ \"ป้องกันคำตอบซ้ำกัน\" ผู้ตอบที่พยายามส่งการตอบซ้ำจะได้รับข้อความข้อผิดพลาดต่อไปนี้",
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "เมื่อเปิดใช้งานคุณสมบัติ \"ป้องกันการตอบสนองที่ซ้ํากัน\" สําหรับคอลัมน์เมทริกซ์ ผู้ตอบที่พยายามส่งรายการที่ซ้ํากันจะได้รับข้อความแสดงข้อผิดพลาดต่อไปนี้"
    },
    // "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "ช่วยให้คุณคำนวณค่ารวมตามนิพจน์ นิพจน์สามารถประกอบด้วยการคำนวณพื้นฐาน ({q1_id} + {q2_id}), นิพจน์บูลีน ({age} > 60) และฟังก์ชัน ('iif(), today(), age(), min(), max(), avg(), ฯลฯ)",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "อ้างอิง ID คอลัมน์เพื่อต้องการให้ผู้ใช้ตอบคำถามนี้ที่ไม่ซ้ำกันสำหรับแต่ละคำถามในคอลัมน์ที่ระบุ",
    // "Type a subtitle."
    description: "พิมพ์คำบรรยาย",
    // "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "เลือกภาษาสำหรับการสร้างแบบสำรวจของคุณ ในการเพิ่มการแปล สลับไปยังภาษาใหม่และแปลข้อความดั้งเดิมที่นี่หรือในแท็บการแปล",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "ตั้งตำแหน่งของส่วนรายละเอียดเมื่อเทียบกับแถว เลือกจาก: \"ไม่มี\" - ไม่มีการขยาย; \"ใต้แถว\" - การขยายแถวจะวางใต้แต่ละแถวของเมทริกซ์; \"ใต้แถว แสดงการขยายแถวเดียว\" - การขยายจะถูกแสดงใต้แถวเดียวเท่านั้น การขยายแถวที่เหลือจะถูกยุบ",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "เลือกจาก: \"ไม่มี\" - ภาพคงขนาดเดิม; \"พอดี\" - ภาพถูกปรับขนาดให้พอดีขณะที่รักษาสัดส่วน; \"ครอบคลุม\" - ภาพเติมเต็มกล่องทั้งหมดขณะที่รักษาสัดส่วน; \"เติม\" - ภาพถูกยืดให้เต็มกล่องโดยไม่รักษาสัดส่วน",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ปิดใช้งาน\")",
    // "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"เปิดใช้งาน\")",
    // "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "ช่วงเวลาที่กำหนดในวินาทีหลังจากนั้นแบบสำรวจจะเปลี่ยนไปยังหน้าขอบคุณโดยอัตโนมัติ",
    // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "ช่วงเวลาที่กำหนดในวินาทีหลังจากนั้นแบบสำรวจจะเปลี่ยนไปยังหน้าถัดไปโดยอัตโนมัติ ซ่อนปุ่มนำทาง \"ก่อนหน้า\"",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "เปิดใช้งานตัวเลือกนี้เพื่อทริกเกอร์การตรวจสอบความถูกต้องเมื่อผู้ใช้มุ่งเน้นไปที่ฟิลด์อินพุตที่ว่างเปล่า แล้วปล่อยออกจากฟิลด์โดยไม่ทําการเปลี่ยนแปลงใดๆ",
    page: {
      // "A page ID that is not visible to respondents."
      name: "รหัสหน้าเว็บที่ผู้ตอบแบบสอบถามไม่เห็น",
      // "Type a page subtitle."
      description: "พิมพ์คําบรรยายของหน้า",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "คําอธิบายภาพที่แสดงบนปุ่มนําทางในแถบความคืบหน้าหรือสารบัญ (TOC) หากคุณปล่อยให้ช่องนี้ว่างไว้ ปุ่มนําทางจะใช้ชื่อหน้าหรือชื่อหน้า หากต้องการเปิดใช้งานแถบความคืบหน้าหรือสารบัญ ให้ไปที่ \"แบบสํารวจ\" → \"การนําทาง\"",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "ช่วงเวลาที่กำหนดในวินาทีหลังจากนั้นแบบสำรวจจะเปลี่ยนไปยังหน้าถัดไปโดยอัตโนมัติ ซ่อนปุ่มนำทาง \"ก่อนหน้า\"",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของหน้า",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับหน้า",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการส่งแบบสำรวจถ้าไม่มีคำถามที่ตอบแล้ว",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "ใช้กับคำถามทั้งหมดในหน้านี้ ถ้าคุณต้องการเปลี่ยนการตั้งค่านี้ให้กำหนดกฎการจัดตำแหน่งชื่อเรื่องสำหรับคำถามหรือแผงเฉพาะ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "ตั้งความกว้างที่สม่ำเสมอสำหรับชื่อคำถามเมื่อจัดเรียงทางซ้ายของกล่องคำถาม รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามที่มีอินพุตที่ไม่ถูกต้อง เลือกระหว่าง: \"ด้านบน\" - ข้อความข้อผิดพลาดจะวางที่ด้านบนของกล่องคำถาม; \"ด้านล่าง\" - ข้อความข้อผิดพลาดจะวางที่ด้านล่างของกล่องคำถาม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "รักษาลำดับดั้งเดิมของคำถามหรือตั้งค่าให้สุ่ม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ดั้งเดิม\") ผลของการตั้งค่านี้จะแสดงในแท็บพรีวิวเท่านั้น",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "ตั้งการมองเห็นของปุ่มนำทางในหน้า ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจซึ่งค่าเริ่มต้นคือ \"มองเห็นได้\"",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "ตารางนี้ช่วยให้คุณสามารถกําหนดค่าคอลัมน์กริดแต่ละคอลัมน์บนหน้า โดยจะกําหนดเปอร์เซ็นต์ความกว้างสําหรับแต่ละคอลัมน์โดยอัตโนมัติตามจํานวนองค์ประกอบสูงสุดในแถว เมื่อต้องการปรับแต่งเค้าโครงกริด ให้ปรับค่าเหล่านี้ด้วยตนเอง และกําหนดความกว้างของชื่อเรื่องสําหรับคําถามทั้งหมดในแต่ละคอลัมน์"
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "ตั้งค่าตําแหน่งของตัวจับเวลาบนหน้า",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "เลือกจาก: \"ล็อก\" - ผู้ใช้ไม่สามารถขยายหรือยุบแผง; \"ยุบทั้งหมด\" - แผงทั้งหมดเริ่มในสภาพยุบ; \"ขยายทั้งหมด\" - แผงทั้งหมดเริ่มในสภาพขยาย; \"แผงแรกขยาย\" - เฉพาะแผงแรกเท่านั้นที่ขยายเริ่มต้น ใช้เมื่อ \"โหมดแสดงแผง\" ตั้งเป็น \"รายการ\" และกำหนดคุณสมบัติ \"รูปแบบชื่อแผง\"",
    // "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "ป้อนชื่อคุณสมบัติร่วมกันในชุดของวัตถุที่มีลิงก์ไฟล์รูปภาพหรือวิดีโอที่คุณต้องการแสดงในรายการตัวเลือก",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "ค่าด้านซ้ายทำหน้าที่เป็น ID รายการที่ใช้ในกฎเงื่อนไข ค่าด้านขวาจะแสดงให้ผู้ตอบเห็น",
    // "Type a user-friendly title to display."
    title: "พิมพ์ชื่อที่เป็นมิตรกับผู้ใช้เพื่อแสดง",
    // "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "รับรองว่าผู้ใช้จะไม่เสร็จสิ้นแบบสำรวจจนกว่าจะอัปโหลดไฟล์แล้ว",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "ตัวระบุการเข้าร่วมเป็นคีย์กำหนดเองที่คุณสามารถกำหนดให้กับคำถามหลายคำถามเพื่อเชื่อมโยงกันและซิงค์ค่า ค่าที่ซิงค์เหล่านี้จะรวมกันเป็นอาร์เรย์หรือวัตถุเดียวและบันทึกในผลลัพธ์แบบสำรวจโดยใช้คีย์เป็นชื่อคุณสมบัติ",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "ค่าที่แสดงในคําถาม HTML และในชื่อแบบไดนามิกและคําอธิบายขององค์ประกอบแบบสํารวจเมื่อค่าคําถามว่างเปล่า",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "ในประเภทคำถามเลือกเดียวและเลือกหลายแต่ละตัวเลือกมี ID และค่าที่แสดง เมื่อเลือก การตั้งค่านี้จะแสดงค่าที่แสดงแทนที่จะเป็นค่า ID ในคำถาม HTML และชื่อเรื่องและคำอธิบายแบบไดนามิกขององค์ประกอบแบบสำรวจ",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "เลือกว่าจะล้างค่าคำถามที่ซ่อนโดยตรรกะเงื่อนไขหรือไม่และเมื่อใด ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"เมื่อเสร็จสิ้นแบบสำรวจ\")",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "เลือกจาก: \"ทั้งหมด\" - คัดลอกตัวเลือกทั้งหมดจากคำถามที่เลือก; \"เลือกแล้ว\" - คัดลอกเฉพาะตัวเลือกที่เลือกแบบไดนามิก; \"ไม่ได้เลือก\" - คัดลอกเฉพาะตัวเลือกที่ไม่ได้เลือกแบบไดนามิก ตัวเลือก \"ไม่มี\" และ \"อื่น\" จะคัดลอกตามค่าเริ่มต้นถ้าเปิดในคำถามต้นทาง",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "ในประเภทคําถามแบบเลือกเดี่ยวและหลายตัวเลือก แต่ละตัวเลือกจะมีรหัสและค่าที่แสดง การตั้งค่านี้ระบุว่าคอลัมน์เมทริกซ์หรือคําถามแผงใดควรให้รหัส",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "ในประเภทคําถามแบบเลือกเดี่ยวและหลายตัวเลือก แต่ละตัวเลือกจะมีรหัสและค่าที่แสดง การตั้งค่านี้ระบุว่าคอลัมน์เมทริกซ์หรือคําถามแผงใดที่ควรให้ข้อความที่แสดง",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "เลือกเพื่อให้ผู้ตอบแบบสอบถามเพิ่มตัวเลือกของตนเองหากตัวเลือกที่ต้องการไม่พร้อมใช้งานในดรอปดาวน์ ตัวเลือกที่กําหนดเองจะถูกจัดเก็บไว้ชั่วคราวในช่วงเวลาของเซสชันเบราว์เซอร์ปัจจุบันเท่านั้น",
    // "When selected, users can include additional input in a separate comment box."
    showOtherItem: "เมื่อเลือก ผู้ใช้สามารถป้อนข้อมูลเพิ่มเติมในกล่องความคิดเห็นแยก",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "แสดงตัวเลือกพิเศษแต่ละตัวเลือก (\"ไม่มี\", \"อื่น\", \"เลือกทั้งหมด\") ในบรรทัดใหม่ แม้ว่าจะใช้การจัดเรียงหลายคอลัมน์",
    // "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "ระบุที่ตั้งในชุดข้อมูลบริการที่มีอาร์เรย์ของวัตถุเป้าหมาย อยู่ถ้าลิงก์ URL ชี้ไปที่อาร์เรย์",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: "ป้อนชื่อคุณสมบัติร่วมกันในชุดของวัตถุที่ค่าจะถูกบันทึกเป็นคำตอบในผลลัพธ์แบบสำรวจ"
    },
    // "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "ป้อนชื่อคุณสมบัติร่วมกันในชุดของวัตถุที่มีค่าที่คุณต้องการแสดงในรายการตัวเลือก",
    // "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "เลือกเพื่ออนุญาตให้บริการตอบกลับว่างเปล่าหรืออาร์เรย์ว่างเปล่า",
    // "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของตัวเลือกทั้งหมด",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "ค่าด้านซ้ายทำหน้าที่เป็น ID รายการที่ใช้ในกฎเงื่อนไข ค่าด้านขวาจะแสดงให้ผู้ตอบเห็น",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"อัตโนมัติ\" เลือกระหว่างโหมด \"ปุ่ม\" และ \"ดรอปดาวน์\" ตามความกว้างที่มีอยู่ เมื่อความกว้างไม่เพียงพอที่จะแสดงปุ่ม คำถามจะแสดงดรอปดาวน์"
    },
    // "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "ช่วยให้คุณเชื่อมโยงคำถามที่สร้างผลลัพธ์ในรูปแบบต่างๆ เมื่อคำถามดังกล่าวถูกเชื่อมโยงกันโดยใช้ตัวระบุการเข้าร่วม คุณสมบัติร่วมกันนี้จะเก็บค่าคำถามที่เลือก",
    // "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "เลือกถ้าคุณต้องการอัปเดตรายการดรอปดาวน์ให้ตรงกับคำค้นหาที่ผู้ใช้พิมพ์ในช่องป้อนข้อมูล",
    // "A value to save in survey results when respondents give a positive answer."
    valueTrue: "ค่าที่จะบันทึกในผลลัพธ์แบบสำรวจเมื่อผู้ตอบให้คำตอบที่บวก",
    // "A value to save in survey results when respondents give a negative answer."
    valueFalse: "ค่าที่จะบันทึกในผลลัพธ์แบบสำรวจเมื่อผู้ตอบให้คำตอบที่ลบ",
    // "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "ไม่แนะนำให้คุณปิดใช้งานตัวเลือกนี้เนื่องจากจะยกเลิกการพรีวิวภาพและทำให้ผู้ใช้เข้าใจได้ยากว่าไฟล์ได้ถูกอัปโหลดหรือไม่",
    // "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "เปิดใช้งานเพื่อจัดอันดับเฉพาะตัวเลือกที่เลือก ผู้ใช้จะลากรายการที่เลือกจากรายการตัวเลือกเพื่อจัดลำดับในพื้นที่จัดอันดับ",
    // "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "ป้อนรายการตัวเลือกที่จะเสนอแนะให้ผู้ตอบระหว่างการป้อนข้อมูล",
    // "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "การตั้งค่านี้เพียงแค่เปลี่ยนขนาดของช่องป้อนข้อมูลและไม่ส่งผลต่อความกว้างของกล่องคำถาม",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "ตั้งค่าความกว้างที่สอดคล้องกันสําหรับป้ายชื่อสินค้าทั้งหมด ยอมรับค่า CSS (px, %, in, pt เป็นต้น)",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "เลือกวิธีจัดตําแหน่งค่าอินพุตภายในฟิลด์ การตั้งค่าเริ่มต้น \"อัตโนมัติ\" จะจัดตําแหน่งค่าอินพุตไปทางขวาหากมีการใช้การปิดบังสกุลเงินหรือตัวเลข และไปทางซ้ายหากไม่ใช้",
    // "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "ใช้เป็นข้อความสำรองเมื่อภาพไม่สามารถแสดงบนอุปกรณ์ของผู้ใช้และเพื่อวัตถุประสงค์ในการเข้าถึง",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "กำหนดสีของอีโมจิที่เลือกเมื่อประเภทไอคอนการให้คะแนนตั้งเป็น \"สไมลี่\" เลือกระหว่าง: \"ค่าเริ่มต้น\" - อีโมจิที่เลือกจะแสดงในสีแบบสำรวจเริ่มต้น; \"มาตราส่วน\" - อีโมจิที่เลือกจะสืบทอดสีจากมาตราส่วนการให้คะแนน",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "ID นิพจน์ที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      // "Type an expression subtitle."
      description: "พิมพ์คำบรรยายนิพจน์",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "นิพจน์สามารถประกอบด้วยการคำนวณพื้นฐาน ({q1_id} + {q2_id}), เงื่อนไข ({age} > 60), และฟังก์ชัน ('iif(), today(), age(), min(), max(), avg(), ฯลฯ)"
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "เลือกเพื่อบันทึกค่าตัวเลือก \"อื่น\" เป็นคุณสมบัติแยกต่างหากในผลลัพธ์แบบสำรวจ",
    // "Use {0} as a placeholder for the actual value."
    format: "ใช้ {0} เป็นตัวแทนสำหรับค่าจริง",
    // [Auto-translated] "Select \"Custom\" to add your own file extensions on top of the predefined categories."
    acceptedCategories: "เลือก \"กําหนดเอง\" เพื่อเพิ่มนามสกุลไฟล์ของคุณเองที่ด้านบนของหมวดหมู่ที่กําหนดไว้ล่วงหน้า",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "ดูคำอธิบายคุณสมบัติ [accept](https://www.w3schools.com/tags/att_input_accept.asp) สำหรับข้อมูลเพิ่มเติม",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "ใช้เฉพาะเมื่อ \"ประเภทอินพุตเซลล์\" ตั้งเป็นกลุ่มปุ่มวิทยุหรือกล่องเลือก",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "เลือกประเภทข้อมูลที่เบราว์เซอร์ของผู้ใช้สามารถเรียกได้ ข้อมูลนี้มีแหล่งที่มาจากค่าที่ผ่านมาที่ผู้ใช้ป้อนหรือจากค่าที่ตั้งค่าไว้ล่วงหน้าถ้ามีการบันทึกค่าเหล่านี้โดยผู้ใช้สำหรับการเติมอัตโนมัติ",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "ใช้เมื่อ \"ประเภทแหล่งไฟล์\" เป็น \"ไฟล์ท้องถิ่น\" หรือเมื่อกล้องไม่พร้อมใช้งาน",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "ใช้เมื่อ \"ประเภทแหล่งไฟล์\" เป็น \"กล้อง\"",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "ใช้เมื่อ \"ประเภทแหล่งไฟล์\" เป็น \"ไฟล์ท้องถิ่นหรือกล้อง\"",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "จัดเรียงตัวเลือกในรูปแบบหลายคอลัมน์ เมื่อตั้งเป็น 0 ตัวเลือกจะแสดงในบรรทัดเดียว",
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "จัดเรียงกล่องข้อความในเค้าโครงแบบหลายคอลัมน์"
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "เลือกถ้าคุณต้องการบันทึกค่าคำถามพร้อมหน้ากากในผลลัพธ์แบบสำรวจ"
    },
    regionalformat: {
      // [Auto-translated] "A region whose formats apply to date-time, numeric, and currency input masks. If not specified, the survey language is used."
      locale: "ภูมิภาคที่รูปแบบใช้กับหน้ากากป้อนข้อมูลวันที่-เวลา ตัวเลข และสกุลเงินหากไม่ได้ระบุ จะใช้ภาษาสํารวจ",
      // [Auto-translated] "Overrides the region's date format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with a leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with a leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year."
      datePattern: "แทนที่รูปแบบวันที่ของภูมิภาคที่ใช้ในหน้ากากอินพุตรูปแบบนี้สามารถประกอบด้วยอักขระคั่นและตัวแทนดังนี้:<br>'m' - หมายเลขเดือน<br>'mm' - หมายเลขเดือน โดยมีเลขศูนย์นําหน้าสําหรับค่าหลักเดียว<br>'d' - วันของเดือน<br>'dd' - วันของเดือน โดยมีเลขศูนย์นําหน้าสําหรับค่าเลขหลักเดียว<br>'yy' - สองหลักสุดท้ายของปี<br>'yyyy' - ปีสี่หลัก",
      // [Auto-translated] "Overrides the region's time format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with a leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with a leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in uppercase (AM/PM).<br>`tt` - 12-hour clock period in lowercase (am/pm)."
      timePattern: "แทนที่รูปแบบเวลาของภูมิภาคที่ใช้ในหน้ากากอินพุตรูปแบบนี้สามารถประกอบด้วยตัวคั่นและตัวแทนดังนี้:<br>'H' - ชั่วโมงในรูปแบบ 24 ชั่วโมง<br>'HH' - ชั่วโมงในรูปแบบ 24 ชั่วโมง โดยมีศูนย์นําหน้าสําหรับค่าหลักเดียว<br>'h' - ชั่วโมงในรูปแบบ 12 ชั่วโมง<br>'hh' - ชั่วโมงในรูปแบบ 12 ชั่วโมง โดยมีศูนย์นําหน้าสําหรับค่าหลักเดียว<br>'MM' - นาที<br>'ss' - วินาที<br>'TT' - รอบนาฬิกา 12 ชั่วโมงในตัวพิมพ์ใหญ่ (AM/PM)<br>'tt' - ช่วงเวลานาฬิกา 12 ชั่วโมงในตัวพิมพ์เล็ก (am/pm)",
      // [Auto-translated] "Overrides the symbol the region uses to separate the fractional part from the integer part of a displayed number in input masks."
      decimalSeparator: "แทนที่สัญลักษณ์ที่ภูมิภาคใช้แยกส่วนเศษส่วนออกจากส่วนจํานวนเต็มของตัวเลขที่แสดงในหน้ากากอินพุต",
      // [Auto-translated] "Overrides the symbol the region uses to separate the digits of a large number into groups of three in input masks."
      thousandsSeparator: "แทนที่สัญลักษณ์ที่ภูมิภาคใช้แยกตัวเลขจํานวนมากออกเป็นกลุ่มละสามตัวในหน้ากากอินพุต",
      // [Auto-translated] "Overrides the region's currency symbol or code used in input masks."
      currencySymbol: "แทนที่สัญลักษณ์สกุลเงินหรือรหัสของภูมิภาคที่ใช้ในหน้ากากอินพุต",
      // [Auto-translated] "Overrides the region's currency pattern used in input masks. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "แทนที่รูปแบบสกุลเงินของภูมิภาคที่ใช้ในหน้ากากอินพุตรูปแบบนี้สามารถมีตัวแทนดังนี้:<br>'@' - สัญลักษณ์สกุลเงินหรือรหัส<br>'#' - ตัวเลข<br>'-' - ตําแหน่งของเครื่องหมายลบในค่าลบ (ถ้าไม่ใส่ เครื่องหมายลบจะวางไว้ที่จุดเริ่มต้น)"
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "รูปแบบสามารถประกอบด้วยอักษรสตริงและตัวแทนต่อไปนี้: 9 - สำหรับตัวเลข; a - สำหรับตัวอักษรตัวใหญ่หรือตัวเล็ก; # - สำหรับตัวเลขหรือตัวอักษรตัวใหญ่หรือตัวเล็ก ใช้ backslash \\ เพื่อหนีตัวอักษร"
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "รูปแบบสามารถประกอบด้วยอักขระตัวคั่นและตัวแทนต่อไปนี้:<br>m - หมายเลขเดือน.<br>mm - หมายเลขเดือน พร้อมศูนย์นำหน้าสำหรับค่าสองหลัก.<br>d - วันของเดือน.<br>dd - วันของเดือน พร้อมศูนย์นำหน้าสำหรับค่าสองหลัก.<br>yy - สองหลักสุดท้ายของปี.<br>yyyy - ปีสี่หลัก.<br>H - ชั่วโมงในรูปแบบ 24 ชั่วโมง.<br>HH - ชั่วโมงในรูปแบบ 24 ชั่วโมง พร้อมศูนย์นำหน้าสำหรับค่าสองหลัก.<br>h - ชั่วโมงในรูปแบบ 12 ชั่วโมง.<br>hh - ชั่วโมงในรูปแบบ 12 ชั่วโมง พร้อมศูนย์นำหน้าสำหรับค่าสองหลัก.<br>MM - นาที.<br>ss - วินาที.<br>TT - ช่วงเวลานาฬิกา 12 ชั่วโมงในตัวอักษรตัวใหญ่ (AM/PM).<br>tt - ช่วงเวลานาฬิกา 12 ชั่วโมงในตัวอักษรตัวเล็ก (am/pm)"
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "สัญลักษณ์ที่ใช้แยกส่วนเศษจากส่วนจำนวนเต็มของตัวเลขที่แสดง",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "สัญลักษณ์ที่ใช้แยกหลักของจำนวนมากเป็นกลุ่มของสาม",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "จำกัดจำนวนหลักที่คงอยู่หลังจุดทศนิยมสำหรับตัวเลขที่แสดง",
      // [Auto-translated] "Displays trailing zeros in the fractional part up to the specified precision. For example, with a precision of 2, an input value of 1.2 is displayed as 1.20."
      showTrailingZeros: "แสดงศูนย์ท้ายในส่วนเศษส่วนจนถึงความแม่นยําที่กําหนดตัวอย่างเช่น ด้วยความแม่นยํา 2 ค่าอินพุต 1.2 จะแสดงเป็น 1.20"
    },
    currencymask: {
      // [Auto-translated] "A currency symbol or code displayed with the value. The region's symbol is used by default. Clear this property to display no symbol."
      currencySymbol: "สัญลักษณ์สกุลเงินหรือรหัสที่แสดงพร้อมค่าดังกล่าวสัญลักษณ์ของภูมิภาคจะถูกใช้โดยค่าเริ่มต้นล้างคุณสมบัตินี้เพื่อไม่ให้แสดงสัญลักษณ์",
      // [Auto-translated] "Specifies the positions of the number, currency symbol, and minus sign. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "ระบุตําแหน่งของตัวเลข สัญลักษณ์สกุลเงิน และเครื่องหมายลบรูปแบบนี้สามารถมีตัวแทนตําแหน่งดังนี้:<br>'@' - สัญลักษณ์สกุลเงินหรือรหัส<br>'#' - ตัวเลข<br>'-' - ตําแหน่งของเครื่องหมายลบในค่าลบ (ถ้าไม่ใส่ เครื่องหมายลบจะวางไว้ที่จุดเริ่มต้น)"
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "การตั้งค่านี้ใช้เฉพาะกับคำถามที่อยู่นอกแผง",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "ตั้งค่าสีเสริมที่เน้นองค์ประกอบสำคัญของแบบสำรวจ",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "ปรับความโปร่งใสของแผงและกล่องคำถามเมื่อเทียบกับพื้นหลังแบบสำรวจ",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "ปรับความโปร่งใสขององค์ประกอบป้อนข้อมูลเมื่อเทียบกับพื้นหลังแบบสำรวจ",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "ตั้งรัศมีมุมสำหรับองค์ประกอบสี่เหลี่ยมทั้งหมด เปิดโหมดขั้นสูงถ้าคุณต้องการตั้งค่ารัศมีมุมแต่ละมุมสำหรับองค์ประกอบป้อนข้อมูลหรือแผงและกล่องคำถาม",
      // [Auto-translated] "Sets the main background color of the survey."
      "--sjs2-color-utility-surface-survey": "ตั้งค่าสีพื้นหลังหลักของแบบสํารวจ"
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "ตัวเลือก \"เช่นเดียวกับคอนเทนเนอร์\" ปรับความกว้างของพื้นที่เนื้อหาหัวเรื่องให้เหมาะสมกับองค์ประกอบ HTML ที่แบบสำรวจอยู่ในนั้น",
      // "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "ความกว้างของพื้นที่หัวเรื่องที่มีชื่อแบบสำรวจและคำอธิบาย วัดเป็นพิกเซล",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "เมื่อเปิดใช้งาน ด้านบนของแบบสํารวจจะซ้อนทับด้านล่างของส่วนหัว",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "เมื่อตั้งค่าเป็น 0 ความสูงจะถูกคํานวณโดยอัตโนมัติเพื่อรองรับเนื้อหาของส่วนหัว"
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "ตัวเลือก \"เหมือนกับคอนเทนเนอร์\" จะปรับความกว้างของพื้นที่แถบความคืบหน้าโดยอัตโนมัติเพื่อให้พอดีกับองค์ประกอบ HTML ที่วางแบบสํารวจ",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "ใช้เมื่อตั้งค่า 'เค้าโครงแบบสํารวจ' เป็น 'ช่องป้อนข้อมูลเดียวต่อหน้า' ในเค้าโครงนี้ เมทริกซ์จะถูกแยกเพื่อให้แต่ละฟิลด์อินพุตปรากฏบนหน้าแยกต่างหาก ใช้ตัวยึด {rowIndex} เพื่อแทรกการกําหนดหมายเลขอัตโนมัติ {rowTitle} หรือ {rowName} เพื่ออ้างอิงชื่อหรือรหัสของแถว และ {row.columnid} เพื่อรวมค่าของคอลัมน์เมทริกซ์ที่เฉพาะเจาะจง"
  },
  // Properties
  p: {
    title: {
      // [Auto-translated] "title"
      name: "ชื่อเรื่อง",
      // "Leave it empty, if it is the same as 'Name'"
      title: "ทิ้งว่างไว้ถ้าเหมือนกับ 'ชื่อ'"
    },
    // "Allow multiple selection"
    multiSelect: "อนุญาตให้เลือกหลายตัวเลือก",
    // "Show image and video captions"
    showLabel: "แสดงคำอธิบายภาพและวิดีโอ",
    // "Swap the order of Yes and No"
    swapOrder: "สลับลำดับของ ใช่ และ ไม่ใช่",
    // "Value"
    value: "ค่า",
    // "Tab alignment"
    tabAlign: "การจัดเรียงแท็บ",
    // "File source type"
    sourceType: "ประเภทแหล่งไฟล์",
    // [Auto-translated] "Default camera"
    cameraFacingMode: "กล้องเริ่มต้น",
    // "Fit to container"
    fitToContainer: "พอดีกับคอนเทนเนอร์",
    // "Set value expression"
    setValueExpression: "ตั้งค่านิพจน์",
    // "Description"
    description: "คำอธิบาย", // Auto-generated string
    // "Logo fit"
    logoFit: "ความพอดีของโลโก้",
    // "Pages"
    pages: "หน้า", // Auto-generated string
    // "Questions"
    questions: "คำถาม", // Auto-generated string
    // "Triggers"
    triggers: "ทริกเกอร์",
    // "Custom variables"
    calculatedValues: "ตัวแปรที่กำหนดเอง",
    // "Survey id"
    surveyId: "ID แบบสำรวจ", // Auto-generated string
    // "Survey post id"
    surveyPostId: "ID โพสต์แบบสำรวจ", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "แสดงการบันทึกข้อมูลแบบสำรวจ", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "การจัดตำแหน่งคำอธิบายคำถาม",
    // "Progress bar type"
    progressBarType: "ประเภทแถบความคืบหน้า", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "แสดงสารบัญ (TOC)",
    // "TOC alignment"
    tocLocation: "การจัดตำแหน่ง TOC",
    // "Question title pattern"
    questionTitlePattern: "รูปแบบชื่อคำถาม", // Auto-generated string
    // "Survey width mode"
    widthMode: "โหมดความกว้างแบบสำรวจ",
    // "Show brand info"
    showBrandInfo: "แสดงข้อมูลแบรนด์", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "ใช้ค่าที่แสดงในข้อความไดนามิก",
    // "Visible if"
    visibleIf: "มองเห็นถ้า", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "นิพจน์ค่าเริ่มต้น",
    // "Required if"
    requiredIf: "จำเป็นถ้า", // Auto-generated string
    // "Reset value if"
    resetValueIf: "รีเซ็ตค่าเมื่อ",
    // "Set value if"
    setValueIf: "ตั้งค่าเมื่อ",
    // "Validation rules"
    validators: "กฎการตรวจสอบ",
    // "Bindings"
    bindings: "การผูก", // Auto-generated string
    // "Render as"
    renderAs: "แสดงผลเป็น", // Auto-generated string
    // "Attach original items"
    attachData: "แนบรายการเดิม", // Auto-generated string
    // "Choices"
    choices: "ตัวเลือก",
    // "Choices by url"
    choicesByUrl: "ตัวเลือกโดย URL", // Auto-generated string
    // "Currency"
    currency: "สกุลเงิน", // Auto-generated string
    // "Cell hint"
    cellHint: "คำแนะนำเซลล์", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "จำนวนหลักเศษสูงสุดทั้งหมด", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "จำนวนหลักเศษต่ำสุดทั้งหมด", // Auto-generated string
    // "Columns"
    columns: "คอลัมน์", // Auto-generated string
    // "Detail elements"
    detailElements: "องค์ประกอบรายละเอียด", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "อนุญาตการดำเนินการที่ปรับตัวได้", // Auto-generated string
    // "Default row value"
    defaultRowValue: "ค่าเริ่มต้นของแถว", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "ขยายรายละเอียดแถวใหม่โดยอัตโนมัติ",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "เปิดใช้งานการโหลดตัวเลือกอย่างขี้เกียจ", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "ขนาดหน้าการโหลดตัวเลือกขี้เกียจ", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "ส่วนประกอบช่องป้อนข้อมูล", // Auto-generated string
    // "Item component"
    itemComponent: "ส่วนประกอบรายการ", // Auto-generated string
    // "Min"
    min: "ต่ำสุด", // Auto-generated string
    // "Max"
    max: "สูงสุด", // Auto-generated string
    // "Min value expression"
    minValueExpression: "นิพจน์ค่าน้อยสุด", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "นิพจน์ค่าสูงสุด", // Auto-generated string
    // "Step"
    step: "ขั้นตอน", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "รายการสำหรับการเสนอแนะ",
    // "Input field width (in characters)"
    inputSize: "ความกว้างของช่องป้อนข้อมูล (ในอักขระ)",
    // "Item label width"
    itemTitleWidth: "ความกว้างป้ายชื่อรายการ (ใน px)",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "การจัดตําแหน่งค่าอินพุต",
    // "Elements"
    elements: "องค์ประกอบ", // Auto-generated string
    // "Content"
    content: "เนื้อหา", // Auto-generated string
    // "Navigation title"
    navigationTitle: "ชื่อเรื่องนำทาง", // Auto-generated string
    // "Navigation description"
    navigationDescription: "คำอธิบายนำทาง", // Auto-generated string
    // "Long tap"
    longTap: "แตะค้าง", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "ขยายช่องป้อนข้อมูลอัตโนมัติ",
    // "Enable resize handle"
    allowResize: "อนุญาตการย่อขยาย",
    // "Accept carriage return"
    acceptCarriageReturn: "ยอมรับการคืนรถเข็น", // Auto-generated string
    // "Display mode"
    displayMode: "โหมดการแสดงผล",
    // "Rate type"
    rateType: "ประเภทการให้คะแนน", // Auto-generated string
    // "Label"
    label: "ป้ายชื่อ", // Auto-generated string
    // "Content mode"
    contentMode: "โหมดเนื้อหา",
    // "Image and thumbnail fit"
    imageFit: "ความพอดีของภาพและขนาดย่อ",
    // "Alt text"
    altText: "ข้อความสำรอง",
    // "Height"
    height: "ความสูง", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "ความสูงบนสมาร์ทโฟน",
    // "Pen color"
    penColor: "สีปากกา", // Auto-generated string
    // "Background color"
    backgroundColor: "สีพื้นหลัง",
    // "Template elements"
    templateElements: "องค์ประกอบเทมเพลต", // Auto-generated string
    // "Operator"
    operator: "ตัวดำเนินการ", // Auto-generated string
    // "Is variable"
    isVariable: "เป็นตัวแปร", // Auto-generated string
    // "Run expression"
    runExpression: "รันนิพจน์", // Auto-generated string
    // "Show caption"
    showCaption: "แสดงคำบรรยาย", // Auto-generated string
    // "Icon name"
    iconName: "ชื่อไอคอน", // Auto-generated string
    // "Icon size"
    iconSize: "ขนาดไอคอน", // Auto-generated string
    // "Precision"
    precision: "ความแม่นยำ", // Auto-generated string
    // "Matrix drag handle area"
    matrixDragHandleArea: "พื้นที่จับลากเมทริกซ์", // Auto-generated string
    // "Background image"
    backgroundImage: "ภาพพื้นหลัง",
    // "Background image fit"
    backgroundImageFit: "ความพอดีของภาพพื้นหลัง", // Auto-generated string
    // "Background image attachment"
    backgroundImageAttachment: "การแนบภาพพื้นหลัง", // Auto-generated string
    // "Background opacity"
    backgroundOpacity: "ความโปร่งใสของพื้นหลัง", // Auto-generated string
    // "Allow selective ranking"
    selectToRankEnabled: "อนุญาตการจัดอันดับแบบเลือกได้",
    // "Ranking area alignment"
    selectToRankAreasLayout: "การจัดตำแหน่งพื้นที่การจัดอันดับ",
    // "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "ข้อความที่จะแสดงถ้าตัวเลือกทั้งหมดถูกเลือก",
    // "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "ข้อความสำรองสำหรับพื้นที่การจัดอันดับ",
    // "Allow camera access"
    allowCameraAccess: "อนุญาตการเข้าถึงกล้อง", // Auto-generated string
    // "Rating icon color mode"
    scaleColorMode: "โหมดสีไอคอนการให้คะแนน",
    // "Smileys color scheme"
    rateColorMode: "โทนสีของสไมลี่",
    // "Copy display value"
    copyDisplayValue: "คัดลอกค่าที่แสดง", // Auto-generated string
    // "Column span"
    effectiveColSpan: "การขยายคอลัมน์",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "ความกว้างของพื้นที่แถบความคืบหน้า",
    // [Auto-translated] "Theme name"
    themeName: "ชื่อธีม"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "โหมดขั้นสูง",
    // "Page"
    pageTitle: "หน้า",
    // "Question box"
    questionTitle: "กล่องคำถาม",
    // "Input element"
    editorPanel: "องค์ประกอบป้อนข้อมูล",
    // "Lines"
    lines: "เส้น",
    // "Default"
    primaryDefaultColor: "ค่าเริ่มต้น",
    // "Hover"
    primaryDarkColor: "เมื่อชี้เมาส์",
    // "Selected"
    primaryLightColor: "เมื่อเลือก",
    // "Corner radius"
    cornerRadius: "รัศมีมุม",
    // "Default background"
    backcolor: "พื้นหลังค่าเริ่มต้น",
    // "Hover background"
    hovercolor: "พื้นหลังเมื่อชี้เมาส์",
    // "Font color"
    fontColor: "สีฟอนต์",
    // "Background color"
    backgroundColor: "สีพื้นหลัง",
    // "Default color"
    primaryForecolor: "สีค่าเริ่มต้น",
    // "Disabled color"
    primaryForecolorLight: "สีเมื่อปิดใช้งาน",
    // "Darker"
    borderDefault: "สีเข้ม",
    // "Lighter"
    borderLight: "สีอ่อน",
    // "Font family"
    fontFamily: "ครอบครัวฟอนต์",
    // "Regular"
    fontWeightRegular: "ปกติ",
    // "Heavy"
    fontWeightHeavy: "หนัก",
    // "Semi-bold"
    fontWeightSemiBold: "กึ่งหนา",
    // "Bold"
    fontWeightBold: "หนา",
    // "Color"
    color: "สี",
    // "Placeholder color"
    placeholderColor: "สีข้อความสำรอง",
    // "Size"
    size: "ขนาด",
    // [Auto-translated] "Line height"
    lineHeight: "ความสูงของเส้น",
    // "Opacity"
    opacity: "ความโปร่งใส",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // "Add Shadow Effect"
    boxShadowAddRule: "เพิ่มเอฟเฟกต์เงา",
    // "Blur"
    boxShadowBlur: "เบลอ",
    // "Spread"
    boxShadowSpread: "กระจาย",
    // "Drop"
    boxShadowDrop: "หล่น",
    // "Inner"
    boxShadowInner: "ภายใน",
    names: {
      // "Default"
      default: "ค่าเริ่มต้น",
      // "Contrast"
      contrast: "คอนทราสต์",
      // "Borderless"
      borderless: "ไม่มีขอบ",
      // "Flat"
      flat: "แบน",
      // "Plain"
      plain: "ธรรมดา",
      // [Auto-translated] "Soft"
      soft: "นุ่มนวล",
      // "3D"
      threedimensional: "3 มิติ",
      // [Auto-translated] "Monochrome"
      monochrome: "ขาวดํา"
    },
    colors: {
      // "Teal"
      teal: "เขียวอมฟ้า",
      // "Blue"
      blue: "น้ำเงิน",
      // "Purple"
      purple: "ม่วง",
      // "Orchid"
      orchid: "กล้วยไม้",
      // "Tulip"
      tulip: "ทิวลิป",
      // "Brown"
      brown: "น้ำตาล",
      // "Green"
      green: "เขียว",
      // [Auto-translated] "Gray"
      gray: "เทา"
    }
  },
  creatortheme: {
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "ประถม",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "รอง",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "องค์ประกอบ UI",
    // [Auto-translated] "Font"
    fontScale: "แบบอักษร",
    names: {

    }
  },
  preset: {
    names: {
      // [Auto-translated] "Basic"
      basic: "พื้นฐาน",
      // [Auto-translated] "Advanced"
      advanced: "ขั้นสูง",
      // [Auto-translated] "Expert"
      expert: "ผู้เชี่ยวชาญ"
    },
    // [Auto-translated] "Preset applied"
    presetApplied: "ใช้ค่าที่ตั้งไว้ล่วงหน้า"
  },
  // Results of survey-core/linter, shown in the JSON tab. A message key is composed as
  linter: {
    // [Auto-translated] "Line: {0}. "
    lineNumber: "สาย: {0}", // {0} 1-based line number, prefixes an entry of the error list
    fixes: {
      "choices/dead-source": {
        // [Auto-translated] "Use the suggested name"
        setName: "ใช้ชื่อที่แนะนํา"
      },
      "choices/duplicate": {
        // [Auto-translated] "Remove the repeated item"
        removeItem: "ลบรายการซ้ํา"
      },
      "element/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "ใช้ประเภทที่แนะนํา"
      },
      "expression/unknown-function": {
        // [Auto-translated] "Use the suggested function"
        renameFunction: "ใช้ฟังก์ชันที่แนะนํา"
      },
      "mask/mismatch": {
        // [Auto-translated] "Use the suggested mask"
        setMaskType: "ใช้หน้ากากที่แนะนํา"
      },
      "name/duplicate": {
        // [Auto-translated] "Give the element a free name"
        renameElement: "ตั้งชื่อให้ธาตุฟรี"
      },
      "name/reserved": {
        // [Auto-translated] "Give the element a free name"
        renameElement: "ตั้งชื่อให้ธาตุฟรี"
      },
      "property/dead": {
        // [Auto-translated] "Remove the property"
        removeKey: "ลบคุณสมบัติ"
      },
      "property/invalid-value": {
        // [Auto-translated] "Use the nearest allowed value"
        clampToRange: "ใช้ค่าที่ใกล้เคียงที่สุดที่อนุญาต",
        // [Auto-translated] "Remove the property"
        removeKey: "ลบคุณสมบัติ",
        // [Auto-translated] "Use the suggested value"
        useAllowedValue: "ใช้ค่าที่แนะนํา"
      },
      "property/not-an-array": {
        // [Auto-translated] "Turn the value into a list"
        wrapInArray: "เปลี่ยนค่าเป็นรายการ"
      },
      "property/required": {
        // [Auto-translated] "Give the element a name"
        setName: "ตั้งชื่อให้กับองค์ประกอบ"
      },
      "property/unknown": {
        // [Auto-translated] "Remove the property"
        removeKey: "ลบคุณสมบัติ",
        // [Auto-translated] "Rename the property"
        renameKey: "เปลี่ยนชื่อคุณสมบัติ"
      },
      "reference/unknown": {
        // [Auto-translated] "Use the suggested name"
        renameReference: "ใช้ชื่อที่แนะนํา",
        // [Auto-translated] "Use the suggested name"
        setKeyName: "ใช้ชื่อที่แนะนํา"
      },
      "trigger/unknown-target": {
        // [Auto-translated] "Use the suggested name"
        setName: "ใช้ชื่อที่แนะนํา"
      },
      "trigger/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "ใช้ประเภทที่แนะนํา"
      },
      "validator/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "ใช้ประเภทที่แนะนํา"
      }
    },
    messages: {
      "expression/syntax": {
        // [Auto-translated] "The expression \"{expression}\" cannot be parsed."
        unparsable: "ไม่สามารถแยกวิเคราะห์นิพจน์ \"{expression}\" ได้"
      },
      "reference/unknown": {
        // [Auto-translated] "\"{name}\" is not found - no question, panel, page, calculated value, or variable with that name exists."
        notFound: "ไม่พบ \"{name}\" - ไม่มีคําถาม แผง หน้า ค่าคํานวณ หรือตัวแปรที่มีชื่อเดียวกัน",
        // [Auto-translated] "\"{segment}\" is not found in {containerType} \"{root}\" (reference: {name})."
        inContainer: "\"{segment}\" ไม่พบใน {containerType} \"{root}\" (อ้างอิง: {name})",
        // [Auto-translated] "\"{segment}\" is not found in the \"{scopePrefix}\" scope (reference: {name})."
        scopedUnknown: "\"{segment}\" ไม่พบในขอบเขต \"{scopePrefix}\" (อ้างอิง: {name})",
        // [Auto-translated] "The keyName of \"{name}\" names \"{key}\" - \"{name}\" has no {keyNoun} with that name, so duplicate-key validation never runs."
        keyNameNotFound: "keyName ของ \"{name}\" ชื่อ \"{key}\" - \"{name}\" ไม่มี {keyNoun} กับชื่อนั้น ดังนั้นการตรวจสอบ duplicate-key จึงไม่ทํางาน",
        // [Auto-translated] "\"{name}\" is not found."
        functionArgNotFound: "ไม่พบ \"{name}\""
      },
      "reference/self": {
        // [Auto-translated] "The {prop} of \"{name}\" references the element itself (reference: {reference})."
        selfReference: "{prop} ของ \"{name}\" อ้างอิงถึงองค์ประกอบเอง (อ้างอิง: {reference})"
      },
      "name/duplicate": {
        // [Auto-translated] "The name \"{name}\" is duplicated."
        elementNames: "ชื่อ \"{name}\" ถูกซ้ําซ้อน",
        // [Auto-translated] "The calculated value name \"{name}\" is already used by another calculated value."
        calculatedValueNames: "ชื่อค่าที่คํานวณได้ \"{name}\" ถูกใช้โดยค่าที่คํานวณได้อีกค่าหนึ่งแล้ว",
        // [Auto-translated] "The calculated value \"{name}\" shares its name with another element, so one of them shadows the other."
        calculatedValueShadowsElement: "ค่าที่คํานวณได้ \"{name}\" จะใช้ชื่อเดียวกันกับองค์ประกอบอื่น ดังนั้นหนึ่งในนั้นจะเงาอีกองค์ประกอบหนึ่ง"
      },
      "name/shadowing": {
        // [Auto-translated] "The {nameKindText} \"{name}\" of this {ownerText} is also the built-in survey variable {{builtIn}} - the survey answers {{name}} first, so this one is unreachable in expressions."
        builtInVariable: "{nameKindText} \"{name}\" ของ {ownerText} นี้ก็เป็นตัวแปรสํารวจในตัว {{builtIn}} เช่นกัน - แบบสํารวจจะตอบ {{name}} ก่อน ดังนั้นแบบสํารวจนี้จึงไม่สามารถเข้าถึงได้ในนิพจน์",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" is also the name of question \"{otherName}\" - both store their answer under the data key \"{valueName}\"."
        valueNameShadowsElement: "valueName \"{valueName}\" ของ \"{name}\" ก็เป็นชื่อของคําถาม \"{otherName}\" เช่นกัน - ทั้งสองจะเก็บคําตอบไว้ใต้คีย์ข้อมูล \"{valueName}\"",
        // [Auto-translated] "The data key \"{dataName}\" is also the comment key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        commentKeyCollision: "คีย์ข้อมูล \"{dataName}\" ยังเป็นคีย์ความคิดเห็นของ \"{base}\" (คีย์ข้อมูลของมันบวกกับ \"{suffix}\") - การเขียนหนึ่งจะเขียนทับอีกอันโดยไม่เขียน",
        // [Auto-translated] "The data key \"{dataName}\" is also the totals key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        totalKeyCollision: "คีย์ข้อมูล \"{dataName}\" ยังเป็นคีย์รวมของ \"{base}\" (คีย์ข้อมูลของมันบวกกับ \"{suffix}\") - การเขียนหนึ่งจะเขียนทับอีกอันแบบเงียบ ๆ",
        // [Auto-translated] "The {trigger} trigger sets the variable \"{name}\", which is also the data key of question \"{questionName}\" - the variable answers {{name}} from then on, not the question."
        variableShadowsQuestion: "ทริกเกอร์ {trigger} จะตั้งค่าตัวแปร \"{name}\" ซึ่งเป็นคีย์ข้อมูลของคําถาม \"{questionName}\" ด้วย - ตัวแปรจะตอบ {{name}} หลังจากนั้น ไม่ใช่คําถาม"
      },
      "name/reserved": {
        // [Auto-translated] "The name \"{name}\" is reserved - a member of Object.prototype."
        questionName: "ชื่อ \"{name}\" ถูกสงวนไว้ - เป็นสมาชิกของ Object.prototype",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" is reserved - a member of Object.prototype."
        valueName: "valueName \"{valueName}\" ของ \"{name}\" ถูกสงวนไว้ - เป็นสมาชิกของ Object.prototype",
        // [Auto-translated] "The column \"{name}\" of \"{matrixName}\" is reserved - a member of Object.prototype."
        columnName: "คอลัมน์ \"{name}\" ของ \"{matrixName}\" ถูกสงวนไว้ - เป็นสมาชิกของ Object.prototype",
        // [Auto-translated] "The item \"{name}\" of \"{questionName}\" is reserved - a member of Object.prototype."
        itemName: "รายการ \"{name}\" ของ \"{questionName}\" ถูกสงวนไว้ - เป็นสมาชิกของ Object.prototype",
        // [Auto-translated] "The row \"{rowValue}\" of \"{name}\" is reserved - a member of Object.prototype."
        rowValue: "แถว \"{rowValue}\" ของ \"{name}\" ถูกสงวนไว้ - เป็นสมาชิกของ Object.prototype",
        // [Auto-translated] "The calculated value \"{name}\" is reserved - a member of Object.prototype."
        calculatedValueName: "ค่าที่คํานวณได้ \"{name}\" ถูกสงวนไว้ - สมาชิกของ Object.prototype"
      },
      "element/unknown-type": {
        // [Auto-translated] "\"{name}\" has an unknown type \"{type}\"."
        unknownType: "\"{name}\" มีชนิดที่ไม่ทราบชื่อ \"{type}\"",
        // [Auto-translated] "\"{name}\" has no type - an element without a type is dropped."
        missingType: "\"{name}\" ไม่มีชนิดข้อมูล - องค์ประกอบที่ไม่มีชนิดจะถูกทิ้ง"
      },
      "property/unknown": {
        // [Auto-translated] "\"{key}\" is not a property of {ownerText} ({className})."
        unknownProperty: "\"{key}\" ไม่ใช่คุณสมบัติของ {ownerText} ({className})"
      },
      "property/dead": {
        // [Auto-translated] "\"{key}\" of {ownerText} is not serializable - it takes effect on load, and is dropped from the JSON whenever the survey is saved again."
        notSerializable: "\"{key}\" ของ {ownerText} ไม่สามารถ serializable ได้ - จะมีผลเมื่อโหลด และจะถูกลบออกจาก JSON ทุกครั้งที่สํารวจถูกบันทึกอีกครั้ง",
        // [Auto-translated] "\"{key}\" and \"{aliasKey}\" of {ownerText} are two names of one property - the run time applies them in the order the JSON writes them, so \"{winner}\" wins."
        aliasDuplicate: "\"{key}\" และ \"{aliasKey}\" ของ {ownerText} เป็นชื่อสองชื่อของคุณสมบัติเดียวกัน - เวลาทํางานจะนําไปใช้ตามลําดับที่ JSON เขียน ดังนั้น \"{winner}\" จึงชนะ",
        // [Auto-translated] "\"{key}\" is set on \"{name}\", but inputType \"{inputType}\" has no bounds - the run time ignores it."
        inertMinMax: "\"{key}\" ถูกตั้งค่าเป็น \"{name}\" แต่ inputType \"{inputType}\" ไม่มีขอบเขต - เวลารันจะไม่สนใจ"
      },
      "property/invalid-value": {
        // [Auto-translated] "The {key} of {ownerText} is {valueText} - not one of the allowed values ({allowedText})."
        notInChoices: "{key} ของ {ownerText} คือ {valueText} - ไม่ใช่หนึ่งในค่าที่อนุญาต ({allowedText})",
        // [Auto-translated] "The {key} of {ownerText} is {value}, outside its allowed range {rangeText}."
        outOfRange: "{key} ของ {ownerText} คือ {value} อยู่นอกช่วงที่อนุญาต {rangeText}",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" contains a \".\" - expressions read {{valueName}} as a path into \"{rootKey}\", so the data key itself can never be addressed."
        valueNameDotted: "valueName \"{valueName}\" ของ \"{name}\" มี \".\" - expressions จะอ่าน {{valueName}} เป็นเส้นทางเข้าสู่ \"{rootKey}\" ดังนั้นคีย์ข้อมูลเองจึงไม่สามารถระบุที่อยู่ได้"
      },
      "property/required": {
        // [Auto-translated] "{ownerText} has no \"{key}\" - the property is required for a {className}."
        missing: "{ownerText} ไม่มี \"{key}\" - คุณสมบัตินี้จําเป็นสําหรับ {className}",
        // [Auto-translated] "The name of the {className} is {valueText}, not a string - the survey cannot load it."
        notAString: "ชื่อของ {className} คือ {valueText} ไม่ใช่สตริง - แบบสํารวจไม่สามารถโหลดได้"
      },
      "property/not-an-array": {
        // [Auto-translated] "The \"{key}\" of {ownerText} is not an array - the property holds a list, and the run time wraps the value into a one-item array."
        notAnArray: "\"{key}\" ของ {ownerText} ไม่ใช่อาร์เรย์ - คุณสมบัตินี้จะเก็บรายการไว้ และเวลารันจะห่อค่านั้นเป็นอาร์เรย์แบบรายการเดียว"
      },
      "variable/collision": {
        // [Auto-translated] "The variable definition declares \"{variable}\", which is also the data key of question \"{name}\" - setting the variable deletes the answer stored under that key, and {{name}} answers the host value from then on."
        questionShadowed: "คํานิยามตัวแปรจะประกาศ \"{variable}\" ซึ่งเป็นคีย์ข้อมูลของคําถาม \"{name}\" ด้วย - การตั้งค่าตัวแปรจะลบคําตอบที่เก็บไว้ในคีย์นั้น และ {{name}} จะตอบค่าโฮสต์ตั้งแต่นั้นเป็นต้นไป",
        // [Auto-translated] "The variable definition declares \"{variable}\", which is also the name of calculated value \"{name}\" - both write the same slot, and whichever runs last wins."
        calculatedValueShadowed: "คํานิยามตัวแปรประกาศ \"{variable}\" ซึ่งเป็นชื่อของค่าที่คํานวณได้ \"{name}\" — ทั้งสองจะเขียนช่องเดียวกัน และใครรันสุดท้ายจะชนะ"
      },
      "variable/preset": {
        // [Auto-translated] "variablePresets.definition is not a survey JSON object, so no variable is declared and no preset value can be checked."
        definitionNotAnObject: "variablePresets.definition ไม่ใช่วัตถุ JSON แบบสํารวจ ดังนั้นจึงไม่มีการประกาศตัวแปรและไม่สามารถตรวจสอบค่าที่ตั้งไว้ล่วงหน้าได้",
        // [Auto-translated] "variablePresets.presets is not an array, so no preset is declared."
        presetsNotAnArray: "variablePresets.presets ไม่ใช่อาร์เรย์ ดังนั้นจึงไม่มีการประกาศพรีเซ็ต",
        // [Auto-translated] "Preset #{index} is not an object."
        presetNotAnObject: "การตั้งค่าล่วงหน้า #{index} ไม่ใช่วัตถุ",
        // [Auto-translated] "Preset #{index} has no name, so nothing can reference it."
        presetNameMissing: "preset #{index} ไม่มีชื่อ ดังนั้นไม่มีอะไรสามารถอ้างอิงได้",
        // [Auto-translated] "Preset \"{preset}\" carries no variables object, so it sets nothing."
        presetVariablesNotAnObject: "preset \"{preset}\" ไม่มีอ็อบเจ็กต์ variables ดังนั้นมันจึงไม่ตั้งค่าอะไรเลย",
        // [Auto-translated] "Preset \"{preset}\" is declared twice - a lookup by that name answers with the first one."
        duplicateName: "พรีเซ็ต \"{preset}\" จะถูกประกาศสองครั้ง - การค้นหาด้วยชื่อนี้จะตอบด้วยตัวแรก",
        // [Auto-translated] "Preset \"{preset}\" sets \"{variable}\", which the variable definition does not declare."
        unknownVariable: "ค่าพรีเซ็ต \"{preset}\" กําหนด \"{variable}\" ซึ่งคําจํากัดความของตัวแปรไม่ได้ประกาศ",
        // [Auto-translated] "Preset \"{preset}\" sets \"{variable}\" to a value the variable definition rejects: {errors}"
        invalidValue: "พรีเซ็ต \"{preset}\" ตั้งค่า \"{variable}\" เป็นค่าที่คําจํากัดความตัวแปรปฏิเสธ: {errors}"
      },
      "expression/unknown-function": {
        // [Auto-translated] "The function \"{functionName}\" is not registered."
        notRegistered: "ฟังก์ชัน \"{functionName}\" ไม่ได้ลงทะเบียน"
      },
      "cycle/calculated-value": {
        // [Auto-translated] "The calculated value \"{names}\" references itself in its own expression."
        self: "ค่าที่คํานวณได้ \"{names}\" จะอ้างอิงตัวเองในนิพจน์ของตัวเอง",
        // [Auto-translated] "Calculated values {names} depend on each other."
        loop: "ค่าที่คํานวณได้ {names} ขึ้นอยู่กับกันและกัน"
      },
      "cycle/trigger": {
        // [Auto-translated] "The trigger reacts to the value it sets itself (\"{setToName}\")."
        self: "ทริกเกอร์จะตอบสนองต่อค่าที่ตั้งไว้เอง (\"{setToName}\")",
        // [Auto-translated] "Triggers form a loop through the values they set: {setRoots}."
        loop: "ทริกเกอร์จะสร้างลูปผ่านค่าที่ตั้งไว้: {setRoots}"
      },
      "cycle/value-write": {
        // [Auto-translated] "The {label} reads the value it writes itself - it runs only when another value changes, so it never runs at all."
        self: "{label} จะอ่านค่าที่มันเขียนเอง - มันจะทํางานเฉพาะเมื่อมีค่าอื่นเปลี่ยนเท่านั้น ดังนั้นมันจึงไม่ทํางานเลย",
        // [Auto-translated] "Values are written in a loop: {chain}. Each write reruns the expressions that read it, so the final values depend on the order the questions are answered in."
        loop: "ค่าจะถูกเขียนเป็นลูป: {chain}แต่ละครั้งที่เขียนจะรันนิพจน์ที่อ่านค่านั้นซ้ํา ดังนั้นค่าสุดท้ายจะขึ้นอยู่กับลําดับการตอบคําถาม"
      },
      "expression/unknown-choice": {
        // [Auto-translated] "The condition compares \"{name}\" to {values} - not among its choices. Available: {available}."
        notAmongChoices: "เงื่อนไขเปรียบเทียบ \"{name}\" กับ {values} - ไม่อยู่ในตัวเลือกของเงื่อนไขนี้พร้อมใช้งาน: {available}",
        // [Auto-translated] "The condition compares \"{name}\" to {values} - no choice value contains it. Available: {available}."
        noChoiceContains: "เงื่อนไขเปรียบเทียบ \"{name}\" กับ {values} - ไม่มีค่าตัวเลือกใดที่มีเงื่อนไขนี้พร้อมใช้งาน: {available}"
      },
      "expression/type-mismatch": {
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" ({questionType}) has no value to compare."
        "no-value": "เงื่อนไขนี้นํา \"{operator}\" มาใช้กับ \"{name}\": \"{recordName}\" ({questionType}) ไม่มีค่าให้เปรียบเทียบ",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds {valueShapeText} - ordering and arithmetic operators do not apply to it."
        "non-scalar": "เงื่อนไขนี้ใช้ \"{operator}\" กับ \"{name}\": \"{recordName}\" ถือเป็น {valueShapeText} - โอเปอเรเตอร์การจัดลําดับและเลขคณิตไม่สามารถใช้กับเงื่อนไขนี้ได้",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - ordering operators do not apply to it."
        "boolean-ordering": "เงื่อนไขนี้นํา \"{operator}\" มาใช้กับ \"{name}\": \"{recordName}\" เป็นคําถามแบบบูลีน - ตัวดําเนินการลําดับจะไม่ใช้กับเงื่อนไขนี้",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a text question - its value is a string, so numeric comparison relies on implicit conversion."
        "text-ordering": "เงื่อนไขนี้นํา \"{operator}\" มาใช้กับ \"{name}\": \"{recordName}\" เป็นคําถามแบบข้อความ - ค่าของมันเป็นสตริง ดังนั้นการเปรียบเทียบเชิงตัวเลขจึงขึ้นอยู่กับการแปลงโดยนัย",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds a date string - comparing it to the number {constValue} cannot hold."
        "date-vs-number": "เงื่อนไขนี้ใช้ \"{operator}\" กับ \"{name}\": \"{recordName}\" จะเก็บสตริงวันที่ - เมื่อเปรียบเทียบกับตัวเลข {constValue} ที่ไม่สามารถใช้ได้",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is numeric - comparing it to the string \"{constValue}\" cannot hold."
        "number-vs-string": "เงื่อนไขนี้ใช้ \"{operator}\" กับ \"{name}\": \"{recordName}\" เป็นตัวเลข - การเปรียบเทียบกับสตริง \"{constValue}\" จะไม่เป็นจริง",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds an array of selected values, so \"=\" compares the whole array."
        "array-vs-scalar": "เงื่อนไขนี้ใช้ \"{operator}\" กับ \"{name}\": \"{recordName}\" จะเก็บค่าที่เลือกไว้เป็นอาร์เรย์ ดังนั้น \"=\" จะเปรียบเทียบทั้งอาร์เรย์",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - comparing it to {constValue} cannot hold."
        "boolean-vs-const": "เงื่อนไขนี้นํา \"{operator}\" มาใช้กับ \"{name}\": \"{recordName}\" เป็นคําถามบูลีน - การเปรียบเทียบกับ {constValue} ไม่สามารถใช้ได้"
      },
      "expression/contradiction": {
        // [Auto-translated] "The {prop} \"{expression}\" is always false, so \"{name}\" is never shown."
        alwaysFalse: "{prop} \"{expression}\" จะเป็นเท็จเสมอ ดังนั้น \"{name}\" จะไม่ปรากฏ",
        // [Auto-translated] "The {prop} \"{expression}\" never holds, because {facts}."
        alwaysFalseViaConstants: "{prop} \"{expression}\" ไม่เคยเป็นจริง เพราะ {facts}",
        // [Auto-translated] "The {prop} \"{expression}\" never holds - no allowed value satisfies it: {facts}."
        outOfRange: "{prop} \"{expression}\" ไม่เคยเป็นจริง - ไม่มีค่าที่อนุญาตใดที่เป็นไปตามมัน: {facts}",
        // [Auto-translated] "The {prop} \"{expression}\" contradicts itself: {facts}."
        unsatisfiable: "{prop} \"{expression}\" ขัดแย้งกับตัวเอง: {facts}"
      },
      "expression/meaningless-condition": {
        // [Auto-translated] "The {prop} \"{expression}\" is always true, so it decides nothing."
        alwaysTrue: "{prop} \"{expression}\" เป็นจริงเสมอ ดังนั้นจึงไม่ตัดสินใจอะไร",
        // [Auto-translated] "The {prop} \"{expression}\" is arithmetic, not a comparison, so it never gives a yes or no."
        notABoolean: "{prop} \"{expression}\" เป็นคณิตศาสตร์ ไม่ใช่การเปรียบเทียบ ดังนั้นจึงไม่เคยให้คําตอบว่าใช่หรือไม่ใช่",
        // [Auto-translated] "Part of the {prop} \"{expression}\" has a result that is known upfront."
        meaninglessFragment: "ส่วนหนึ่งของ {prop} \"{expression}\" มีผลลัพธ์ที่ทราบล่วงหน้า",
        // [Auto-translated] "The {prop} \"{expression}\" always holds, because {facts} - it decides nothing."
        alwaysTrueViaConstants: "{prop} \"{expression}\" เป็นจริงเสมอ เพราะ {facts} - มันไม่ได้ตัดสินใจอะไรเลย"
      },
      "value/not-a-choice": {
        // [Auto-translated] "The default value of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultValue: "ค่าเริ่มต้นของ \"{name}\" คือ {valuesText} ซึ่งไม่สามารถถือไว้ได้อนุญาต: {availableText}",
        // [Auto-translated] "The correct answer of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        correctAnswer: "คําตอบที่ถูกต้องของ \"{name}\" คือ {valuesText} ซึ่งไม่สามารถถือไว้ได้อนุญาต: {availableText}",
        // [Auto-translated] "The trigger sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        triggerSetValue: "ทริกเกอร์จะตั้งค่า \"{name}\" เป็น {valuesText} ซึ่งไม่สามารถถือไว้ได้เลยอนุญาต: {availableText}",
        // [Auto-translated] "The default row value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultRowValue: "ค่าแถวเริ่มต้นจะตั้งค่า \"{name}\" เป็น {valuesText} ซึ่งไม่สามารถถือไว้ได้อนุญาต: {availableText}",
        // [Auto-translated] "The default panel value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultPanelValue: "ค่าแผงเริ่มต้นตั้งค่า \"{name}\" เป็น {valuesText} ซึ่งไม่สามารถถือไว้ได้อนุญาต: {availableText}",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such row. Available: {availableText}."
        unknownRowKey: "{prop} ของ \"{name}\" จะตั้งชื่อว่า \"{key}\" - ไม่มีแถวดังกล่าวพร้อมใช้งาน: {availableText}",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such column. Available: {availableText}."
        unknownColumnKey: "{prop} ของ \"{name}\" ตั้งชื่อว่า \"{key}\" - ไม่มีคอลัมน์ดังกล่าวพร้อมใช้งาน: {availableText}",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such template question. Available: {availableText}."
        unknownQuestionKey: "{prop} ของ \"{name}\" หมายถึง \"{key}\" - ไม่มีคําถามในเทมเพลตดังกล่าวมีให้ใช้งาน: {availableText}",
        // [Auto-translated] "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but \"{fromName}\" holds {sourceShapeText} and \"{setToName}\" holds {targetShapeText}."
        copyValueShape: "ทริกเกอร์ copyvalue จะคัดลอก \"{fromName}\" ไปยัง \"{setToName}\" แต่ \"{fromName}\" จะเก็บ {sourceShapeText} และ \"{setToName}\" จะเก็บ {targetShapeText}",
        // [Auto-translated] "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but no value of \"{fromName}\" is among the values \"{setToName}\" can hold. Allowed: {availableText}."
        copyValueNoOverlap: "ทริกเกอร์ copyvalue จะคัดลอก \"{fromName}\" ไปยัง \"{setToName}\" แต่ไม่มีค่าใด ๆ ของ \"{fromName}\" อยู่ในค่าที่ \"{setToName}\" สามารถถือได้อนุญาต: {availableText}"
      },
      "choices/dead-source": {
        // [Auto-translated] "\"{name}\" copies its choices from \"{source}\", but no question with that name exists."
        missing: "\"{name}\" คัดลอกตัวเลือกจาก \"{source}\" แต่ไม่มีคําถามที่มีชื่อนั้นอยู่จริง",
        // [Auto-translated] "\"{name}\" copies its choices from itself."
        self: "\"{name}\" คัดลอกตัวเลือกของมันจากตัวเอง",
        // [Auto-translated] "\"{name}\" copies its choices from \"{source}\" ({sourceType}), which provides neither choices nor an array of values."
        "not-a-source": "\"{name}\" คัดลอกตัวเลือกจาก \"{source}\" ({sourceType}) ซึ่งไม่มีตัวเลือกหรืออาร์เรย์ของค่า",
        // [Auto-translated] "\"{name}\" reads {prop} \"{field}\" from \"{source}\", but {sourceType} \"{source}\" has no such {fieldNoun}."
        "missing-field": "\"{name}\" อ่านเป็น {prop} \"{field}\" จาก \"{source}\" แต่ {sourceType} \"{source}\" ไม่มี {fieldNoun} แบบนั้น"
      },
      "choices/duplicate": {
        // [Auto-translated] "Another item of the {prop} of \"{name}\" already has the value {valueText} - the run time keeps both items."
        duplicateValue: "อีกรายการหนึ่งของ {prop} ใน \"{name}\" มีค่า {valueText} อยู่แล้ว - เวลารันจะเก็บทั้งสองรายการไว้",
        // [Auto-translated] "The choices of \"{name}\" contain {valueText} while {toggleProp} is on - it collides with the built-in {specialItemText} item."
        specialItemCollision: "ตัวเลือกของ \"{name}\" จะมี {valueText} ขณะที่ {toggleProp} เปิดอยู่ - มันจะชนกับรายการ {specialItemText} ที่มีอยู่ในตัว"
      },
      "trigger/unknown-target": {
        // [Auto-translated] "The {trigger} trigger targets page \"{name}\", which does not exist."
        pageNotFound: "หน้าเป้าหมายทริกเกอร์ {ทริกเกอร์} \"{name}\" ซึ่งไม่มีอยู่จริง",
        // [Auto-translated] "The {trigger} trigger targets \"{name}\", but {containerType} \"{root}\" has no {segmentNoun} \"{segment}\"."
        segmentNotFound: "ทริกเกอร์ {trigger} จะเลือก \"{name}\" แต่ {containerType} \"{root}\" ไม่มี {segmentNoun} \"{segment}\"",
        // [Auto-translated] "The {trigger} trigger {verb} \"{name}\", but no {kindText} with that name exists."
        rootNotFound: "ทริกเกอร์ {trigger} คือ {verb} \"{name}\" แต่ไม่มี {kindText} ที่มีชื่อดังกล่าว"
      },
      "trigger/unknown-type": {
        // [Auto-translated] "The trigger type \"{type}\" is not known."
        unknownType: "ประเภททริกเกอร์ \"{type}\" ไม่เป็นที่ทราบแน่ชัด",
        // [Auto-translated] "The trigger has no type."
        noType: "ทริกเกอร์ไม่มีชนิด"
      },
      "validator/unknown-type": {
        // [Auto-translated] "The validator type \"{type}\" of \"{name}\" is not known."
        unknownType: "ประเภทตัวตรวจสอบ \"{type}\" ของ \"{name}\" ไม่เป็นที่ทราบแน่ชัด",
        // [Auto-translated] "A validator of \"{name}\" has no type."
        noType: "ตัวตรวจสอบของ \"{name}\" ไม่มีชนิดข้อมูล"
      },
      "validator/dead": {
        // [Auto-translated] "The {validatorType} validator of \"{name}\" {effectText}: {causeText} ({questionType})."
        wrongValueShape: "ตัวตรวจสอบ {validatorType} ของ \"{name}\" {effectText}: {causeText} ({questionType})",
        // [Auto-translated] "The {validatorType} validator of \"{name}\" requires at least {min} and at most {max} - no answer satisfies it."
        minAboveMax: "ตัวตรวจสอบ {validatorType} ของ \"{name}\" ต้องการอย่างน้อย {min} และสูงสุด {max} - ไม่มีคําตอบใดที่ตรงตามเงื่อนไขนี้",
        // [Auto-translated] "The answercount validator of \"{name}\" requires at least {minCount} answers, above the {selectable} choices that can be selected together."
        minCountAboveChoices: "ตัวตรวจสอบจํานวนคําตอบของ \"{name}\" ต้องการคําตอบอย่างน้อย {minCount} มากกว่าตัวเลือก {selectable} ที่สามารถเลือกพร้อมกันได้",
        // [Auto-translated] "The regex validator of \"{name}\" has a pattern the engine rejects: {error}."
        invalidRegex: "ตัวตรวจสอบ regex ของ \"{name}\" มีรูปแบบที่เอนจินปฏิเสธ: {error}",
        // [Auto-translated] "The expression validator of \"{name}\" has no expression, so it always passes."
        emptyExpression: "ตัวตรวจสอบนิพจน์ของ \"{name}\" ไม่มีนิพจน์ ดังนั้นมันจึงถูกส่งผ่านเสมอ"
      },
      "element/count-contradiction": {
        // [Auto-translated] "The {minProp} of \"{name}\" is {min}, above its {maxProp} of {max} - the run time silently adjusts one of them."
        minAboveMax: "{minProp} ของ \"{name}\" คือ {min} เหนือ {maxProp} ของ {max} - เวลารันจะปรับค่าใดค่าหนึ่งอย่างเงียบ ๆ",
        // [Auto-translated] "The {countProp} of \"{name}\" is {count}, {direction} its {boundProp} of {bound} - the run time clamps it."
        countOutOfBounds: "{countProp} ของ \"{name}\" คือ {count}, {direction} เป็น {boundProp} ของ {bound} - เวลารันจะจํากัดมันไว้",
        // [Auto-translated] "The {stepProp} of \"{name}\" is {step}, but the range it steps through ({minProp}..{maxProp}) spans only {range} - the run time clamps it."
        stepAboveRange: "{stepProp} ของ \"{name}\" คือ {step} แต่ช่วงที่มันก้าวผ่าน ({minProp}..{maxProp})ครอบคลุมเฉพาะ {range} เท่านั้น - เวลารันจะจํากัดมันไว้",
        // [Auto-translated] "The minSelectedChoices of \"{name}\" is {min}, above the {selectable} choices that can be selected together - the question can never be answered."
        minAboveChoicesCount: "minSelectedChoices ของ \"{name}\" คือ {min} อยู่เหนือตัวเลือก {selectable} ที่สามารถเลือกพร้อมกันได้ - คําถามนี้ไม่มีวันได้รับคําตอบ"
      },
      "element/never-visible": {
        // [Auto-translated] "\"{name}\" can never become visible: its visibleIf reads {reads}, which {deadClause}, so the condition never holds."
        dependsOnDeadValue: "\"{name}\" จะไม่มีวันปรากฏ: มันมองเห็นได้ถ้าอ่าน {reads} ซึ่ง {deadClause} ดังนั้นเงื่อนไขนี้จึงไม่เป็นจริง"
      },
      "mask/mismatch": {
        // [Auto-translated] "The maskType \"{maskType}\" of \"{name}\" is not a known mask - the run time falls back to no mask at all."
        unknownMaskType: "maskType \"{maskType}\" ของ \"{name}\" ไม่ใช่ mask ที่รู้จัก - เวลารันจะกลับไปที่ไม่มี mask เลย",
        // [Auto-translated] "The maskSettings of \"{name}\" set \"{key}\", which is not a property of the \"{maskType}\" mask - the run time drops it silently."
        unknownSettingsKey: "การตั้งค่าหน้ากากของ \"{name}\" ตั้งค่า \"{key}\" ซึ่งไม่ใช่คุณสมบัติของหน้ากาก \"{maskType}\" - เวลารันจะตัดมันออกอย่างเงียบ ๆ",
        // [Auto-translated] "The maskSettings of \"{name}\" are set without a maskType - the run time keeps only \"saveMaskedValue\" and drops the rest."
        settingsWithoutMask: "การตั้งค่า mask ของ \"{name}\" ถูกตั้งค่าโดยไม่มี maskType - เวลารันจะเก็บไว้เฉพาะ \"saveMaskedValue\" และตัดส่วนที่เหลือออก",
        // [Auto-translated] "The {maskType} mask of \"{name}\" applies to no input: inputType \"{inputType}\" is masked only for text and tel."
        maskInertForInputType: "หน้ากาก {maskType} ของ \"{name}\" ใช้กับการไม่มีอินพุต: inputType \"{inputType}\" จะถูกปิดเฉพาะข้อความและโทรศัพท์เท่านั้น",
        // [Auto-translated] "The datetime mask of \"{name}\" sets min/max without a pattern - the bounds apply to the pattern's date parts, so without one they do nothing."
        minMaxWithoutPattern: "หน้ากาก datetime ของ \"{name}\" ตั้งค่า min/max โดยไม่มีแพทเทิร์น - ขอบเขตนี้ใช้กับส่วนวันที่ของแพทเทิร์น ดังนั้นถ้าไม่มีก็จะไม่ทําอะไร",
        // [Auto-translated] "The {maskType} mask of \"{name}\" allows at least {min} and at most {max} - no value satisfies it."
        minAboveMax: "หน้ากาก {maskType} ของ \"{name}\" อนุญาตให้มีค่าอย่างน้อย {min} และสูงสุด {max} - ไม่มีค่าใดที่ตรงตามเงื่อนไขนี้"
      },
      "page/empty": {
        // [Auto-translated] "The dynamic panel \"{name}\" has an empty template - its panels have nothing to render."
        emptyTemplate: "แผงไดนามิก \"{name}\" มีเทมเพลตว่างเปล่า - แผงของมันไม่มีอะไรให้แสดงผล",
        // [Auto-translated] "The {kindText} \"{name}\" has no elements."
        noElements: "{name} ของ {kindText} ไม่มีองค์ประกอบใด ๆ",
        // [Auto-translated] "The {kindText} \"{name}\" has no elements that can ever render - every element is hidden, guarded by a condition that never holds, or empty."
        noRenderableElements: "{name}\" ของ {kindText} ไม่มีองค์ประกอบใดที่สามารถแสดงผลได้เลย - ทุกองค์ประกอบถูกซ่อนไว้ ถูกปกป้องด้วยเงื่อนไขที่ไม่เคยเป็นจริง หรือว่างเปล่า",
        // [Auto-translated] "The detail elements of \"{name}\" are never shown: its detailPanelMode is \"none\", which is the default."
        detailElementsHidden: "องค์ประกอบรายละเอียดของ \"{name}\" จะไม่แสดง: detailPanelMode ของมันคือ \"none\" ซึ่งเป็นค่าเริ่มต้น"
      }
    },
    // Clauses appended to a base message, in this order
    suffixes: {
      // [Auto-translated] "Position: {0}."
      atPosition: "ตําแหน่ง: {0}", // {0} character offset
      // [Auto-translated] "It was built from the legacy name, operator and value properties of the trigger."
      fromLegacyTrigger: "มันถูกสร้างขึ้นจากชื่อเดิม โอเปอเรเตอร์ และคุณสมบัติค่าของทริกเกอร์",
      // [Auto-translated] "Inside: {0}."
      inScope: "ข้างใน: {0}", // {0} name of the namespace
      // [Auto-translated] "Did you mean \"{0}\"?"
      didYouMean: "คุณหมายถึง \"{0}\" ใช่ไหม?",
      // [Auto-translated] "If it is a custom component, pass its definition to the linter to enable full analysis."
      customComponentHint: "ถ้าเป็นคอมโพเนนต์แบบกําหนดเอง ให้ส่งนิยามของมันไปยัง linter เพื่อให้สามารถวิเคราะห์ได้เต็มรูปแบบ",
      // [Auto-translated] "Register the function before linting, or list it in the linter options."
      registerFunctionHint: "ลงทะเบียนฟังก์ชันก่อน linting หรือแสดงรายการในตัวเลือก linter",
      // [Auto-translated] "A misspelled type is silently dropped at run time, and a custom trigger is not covered by the target and cycle checks."
      triggerTypeDroppedHint: "ประเภทที่สะกดผิดจะถูกตัดออกอย่างเงียบ ๆ ขณะรัน และทริกเกอร์แบบกําหนดเองจะไม่ถูกครอบคลุมโดยการตรวจสอบเป้าหมายและรอบ",
      // [Auto-translated] "If it is a variable set at run time, list it in the linter options."
      knownVariablesHint: "ถ้าเป็นชุดตัวแปรขณะรันไทม์ ให้แสดงในตัวเลือก linter",
      // [Auto-translated] "The loop may be unreachable if the trigger conditions never hold together - verify the expressions."
      loopMayBeUnreachable: "ลูปอาจไม่สามารถเข้าถึงได้หากเงื่อนไขทริกเกอร์ไม่ตรงกัน - ตรวจสอบนิพจน์",
      // [Auto-translated] "A defaultValueExpression applies only until its question is answered."
      defaultValueExpressionNote: "defaultValueExpression จะใช้ได้เฉพาะจนกว่าคําถามของมันจะได้รับคําตอบ",
      // [Auto-translated] "In expression: {0}"
      inExpression: "ในการแสดงออก: {0}", // {0} the expression the defect was found in
      // [Auto-translated] "Referenced in bindings."
      inBindings: "อ้างอิงในชุดผูก",
      // [Auto-translated] "Referenced in the choicesByUrl {0}."
      inChoicesByUrl: "อ้างอิงใน {0} choicesByUrl", // {0} the url or the path property
      // [Auto-translated] "Referenced in the \"{0}\" text."
      inText: "อ้างอิงในข้อความ \"{0}\"", // {0} the localizable property the text belongs to
      // [Auto-translated] "{0}() reads that name from every entry of {1} \"{2}\"."
      functionArgInContainer: "{0}() อ่านชื่อนั้นจากทุกรายการของ{1} \"{2}\"",
      // [Auto-translated] "The {0}() argument names no question, panel or page."
      functionArgStandalone: "อาร์กิวเมนต์ {0}() จะไม่ระบุคําถาม แผง หรือหน้า",
      // [Auto-translated] "The deserializer drops a key it does not know."
      deserializerDropsKey: "ตัวถอดรหัสจะดรอปกุญแจที่ไม่รู้จัก",
      // [Auto-translated] "The deserializer drops a validator it cannot resolve, so nothing validates."
      validatorDroppedHint: "ตัว deserializer จะทิ้งตัวตรวจสอบที่ไม่สามารถแก้ไขได้ ดังนั้นจึงไม่มีอะไรตรวจสอบได้",
      // [Auto-translated] "The inputType is \"{0}\"."
      validatorInputType: "inputType คือ \"{0}\"",
      // [Auto-translated] "It is the data key of \"{0}\"."
      dataKeyOwner: "มันคือคีย์ข้อมูลของ \"{0}\"" // {0} the element that answers under it
    },
    // The facts a contradiction rests on. {ref} is a reference as an expression writes it,
    facts: {
      // [Auto-translated] ", "
      separator: ",",
      // [Auto-translated] " and "
      and: "และ",
      // [Auto-translated] "{ref} is always {value}"
      constant: "{ref} จะเป็น {value} เสมอ",
      // [Auto-translated] "{ref} is {bounds}"
      range: "{ref} คือ {bounds}",
      // [Auto-translated] "at least {0}"
      atLeast: "อย่างน้อยก็{0}",
      // [Auto-translated] "at most {0}"
      atMost: "อย่างมาก{0}",
      conflict: {
        // [Auto-translated] "{ref} cannot be both {values}"
        equalValues: "{ref} ไม่สามารถเป็นทั้งสอง {values} ได้",
        // [Auto-translated] "{ref} cannot be {value} and not be it"
        equalAndNotEqual: "{ref} ไม่สามารถเป็น {value} และไม่ใช่ it ได้",
        // [Auto-translated] "{ref} cannot be empty and be {value}"
        emptyAndValue: "{ref} ไม่สามารถเป็น empty และเป็น {value} ได้",
        // [Auto-translated] "{ref} cannot be empty and not empty"
        emptyAndNotEmpty: "{ref} ไม่สามารถเป็น empty แ���ะไม่ empty ได้",
        // [Auto-translated] "{ref} cannot be above {min} and below {max}"
        impossibleBounds: "{ref} ไม่สามารถอยู่เหนือ {min} และต่ํากว่า {max} ได้",
        // [Auto-translated] "{ref} is asked to be one of no value at all"
        emptySet: "{ref} ถูกขอให้เป็นหนึ่งที่ไม่มีค่าเลย"
      }
    },
    // Scope hints of reference/unknown. {0} is the expression variable the hint is about.
    hints: {
      // [Auto-translated] "\"{0}.\" references are only available inside a matrix cell or a matrix detail panel."
      rowScopePrefix: "การอ้างอิง \"{0}.\" มีให้เฉพาะภายในเซลล์เมทริกซ์หรือแผงรายละเอียดเมทริกซ์เท่านั้น",
      // [Auto-translated] "\"{0}\" is only available inside a matrix cell or a matrix detail panel."
      rowScopeStandalone: "\"{0}\" มีให้เฉพาะในเซลล์เมทริกซ์หรือแผงรายละเอียดเมทริกซ์เท่านั้น",
      // [Auto-translated] "\"{0}.\" references are only available inside a dynamic panel or a panel container."
      panelScopePrefix: "การอ้างอิง \"{0}.\" มีให้เฉพาะภายในแผงไดนามิกหรือภาชนะแผงเท่านั้น",
      // [Auto-translated] "\"{0}.\" references are only available inside a dynamic panel."
      panelSiblingPrefix: "การอ้างอิง \"{0}.\" จะมีให้เฉพาะภายในแผงไดนามิกเท่านั้น",
      // [Auto-translated] "\"{0}\" is only available inside a dynamic panel."
      panelStandalone: "\"{0}\" มีให้ใช้งานเฉพาะในแผงไดนามิกเท่านั้น",
      // [Auto-translated] "\"{0}\" is only available inside choice, row and column conditions."
      itemScope: "\"{0}\" มีให้เฉพาะในเงื่อนไขเลือก แถว และคอลัมน์เท่านั้น",
      // [Auto-translated] "\"{0}.\" references are only available inside a composite question."
      compositeScopePrefix: "\"{0}.\" อ้างอิงจะมีเฉพาะในคําถามประกอบเท่านั้น",
      // [Auto-translated] "\"{0}\" is a column of this matrix - reference it with the row prefix."
      matrixColumn: "\"{0}\" คือคอลัมน์ของเมทริกซ์นี้ - อ้างอิงด้วยคํานําหน้าแถว",
      // [Auto-translated] "\"{0}\" is a question of this dynamic panel - reference it with the panel prefix."
      panelQuestion: "\"{0}\" เป็นคําถามเกี่ยวกับแผงไดนามิกนี้ - อ้างอิงด้วยคํานําหน้าแผง"
    },
    // Prose the linter reports as a "suggestion" instead of an identifier
    suggestions: {
      // [Auto-translated] "Set inputType: \"number\" on \"{0}\" if it collects numbers."
      setNumberInputType: "ตั้งค่า inputType: \"number\" บน \"{0}\" หากมันเก็บตัวเลข",
      // [Auto-translated] "Use \"contains\" or \"anyof\" for multi-select values."
      useContainsOrAnyof: "ใช้ \"contains\" หรือ \"anyof\" สําหรับค่าที่เลือกหลายครั้ง"
    },
    // Terms the linter splices into a message as a raw code identifier
    terms: {
      containerKind: {
        // [Auto-translated] "page"
        page: "หน้า",
        // [Auto-translated] "panel"
        panel: "แผง"
      },
      // which of the three name properties shadows a built-in variable
      nameKind: {
        // [Auto-translated] "name"
        name: "ชื่อ",
        // [Auto-translated] "valueName"
        valueName: "valueName",
        // [Auto-translated] "name"
        calculatedValue: "ชื่อ"
      },
      // the owner of a shadowed name, when the finding carries no element type
      nameOwner: {
        // [Auto-translated] "calculated value"
        calculatedValue: "ค่าที่คํานวณได้",
        // [Auto-translated] "element"
        default: "ธาตุ"
      },
      // the owner of a property, when the JSON gives it no name of its own
      owner: {
        // [Auto-translated] "the survey"
        survey: "การสํารวจ",
        // [Auto-translated] "the {0}"
        className: "{0}"
      },
      specialItem: {
        // [Auto-translated] "Other"
        other: "อื่น ๆ",
        // [Auto-translated] "None"
        none: "ไม่มี",
        // [Auto-translated] "Refuse to answer"
        refuse: "ปฏิเสธที่จะตอบ",
        // [Auto-translated] "Don't know"
        dontknow: "ไม่รู้"
      },
      deadValidatorEffect: {
        // [Auto-translated] "never fires"
        neverFires: "ไม่เคยยิง",
        // [Auto-translated] "rejects every answer"
        rejectsEveryAnswer: "ปฏิเสธทุกคําตอบ",
        // [Auto-translated] "cannot validate"
        default: "ไม่สามารถตรวจสอบความถูกต้องได้"
      },
      // what the answer's shape does to the validator
      deadValidatorCause: {
        // [Auto-translated] "the question holds no answer to validate"
        noAnswer: "คําถามนี้ไม่มีคําตอบเพื่อยืนยัน",
        // [Auto-translated] "a length is read off a text value, and this answer has none"
        textLength: "ความยาวจะถูกอ่านจากค่าข้อความ และคําตอบนี้ไม่มีความยาว",
        // [Auto-translated] "the answer is not a number and never can be"
        notANumber: "คําตอบไม่ใช่ตัวเลขและไม่มีวันเป็นได้",
        // [Auto-translated] "a number never matches an e-mail address"
        numberVsEmail: "ตัวเลขไม่เคยตรงกับที่อยู่อีเมล",
        // [Auto-translated] "the answer is not a list of values"
        notAList: "คําตอบไม่ใช่รายการค่า",
        // [Auto-translated] "the answer is not a value it can check"
        default: "คําตอบไม่ใช่ค่าที่มันสามารถตรวจสอบได้"
      },
      valueShape: {
        // [Auto-translated] "an array"
        array: "อาร์เรย์",
        // [Auto-translated] "an object"
        object: "วัตถุ"
      },
      // the shapes the two ends of a copyvalue trigger hold
      copyShape: {
        // [Auto-translated] "an array of selected values"
        array: "อาร์เรย์ของค่าที่เลือก",
        // [Auto-translated] "a single value"
        scalar: "ค่าหนึ่งเดียว",
        // [Auto-translated] "a value"
        default: "ค่า"
      },
      // whether a row/panel count falls below its minimum or above its maximum
      countDirection: {
        // [Auto-translated] "below"
        below: "ด้านล่าง",
        // [Auto-translated] "above"
        above: "เหนือ"
      },
      // the verb of element/never-visible, by the number of questions the condition reads
      deadValueClause: {
        // [Auto-translated] "is never visible and never receives a value"
        one: "ไม่เคยแสดงผลและไม่ได้รับค่าใด ๆ",
        // [Auto-translated] "are never visible and never receive a value"
        many: "ไม่เคยแสดงผลและไม่ได้รับค่าใด ๆ"
      },
      targetKind: {
        // [Auto-translated] "question"
        question: "คําถาม",
        // [Auto-translated] "question or variable"
        questionvalue: "คําถามหรือตัวแปร",
        // [Auto-translated] "page"
        page: "หน้า"
      },
      triggerVerb: {
        // [Auto-translated] "reads"
        fromName: "อ่าน",
        // [Auto-translated] "navigates to"
        gotoName: "นําทางไปยัง",
        // [Auto-translated] "sets"
        default: "ชุด"
      },
      // no "operator" table on purpose: an operator stays the identifier the JSON spells,
      sourceField: {
        // [Auto-translated] "template question"
        paneldynamic: "คําถามแบบแม่แบบ",
        // [Auto-translated] "column"
        default: "เสา"
      },
      // the noun for the container level an unknown trigger-target segment belongs to
      segmentNoun: {
        // [Auto-translated] "template question"
        paneldynamic: "คําถามแบบแม่แบบ",
        // [Auto-translated] "column"
        matrixdynamic: "เสา",
        // [Auto-translated] "item"
        multipletext: "รายการ",
        // [Auto-translated] "row"
        matrix: "แถว",
        // [Auto-translated] "row"
        matrixdropdownRow: "แถว",
        // [Auto-translated] "column"
        matrixdropdownColumn: "เสา",
        // [Auto-translated] "field"
        default: "ทุ่ง"
      }
    }
  },
  // Localized default JSON for new questions (see settings.toolbox.defaultJSON)
  defaultJson: {
    choices: [
      {
        value: "item1",
        // "Item 1"
        text: "รายการ 1"
      },
      {
        value: "item2",
        // "Item 2"
        text: "รายการ 2"
      },
      {
        value: "item3",
        // "Item 3"
        text: "รายการ 3"
      }
    ],
    columns: [
      {
        value: "column1",
        // "Column 1"
        text: "คอลัมน์ 1"
      },
      {
        value: "column2",
        // "Column 2"
        text: "คอลัมน์ 2"
      },
      {
        value: "column3",
        // "Column 3"
        text: "คอลัมน์ 3"
      }
    ],
    rows: [
      {
        value: "row1",
        // "Row 1"
        text: "แถว 1"
      },
      {
        value: "row2",
        // "Row 2"
        text: "แถว 2"
      }
    ],
    matrixColumns: [
      {
        name: "column1",
        // "Column 1"
        title: "คอลัมน์ 1"
      },
      {
        name: "column2",
        // "Column 2"
        title: "คอลัมน์ 2"
      },
      {
        name: "column3",
        // "Column 3"
        title: "คอลัมน์ 3"
      }
    ]
  }
};

setupLocale({ localeCode: "th", strings: thStrings });