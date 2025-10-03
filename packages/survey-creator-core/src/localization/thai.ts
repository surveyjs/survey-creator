import { setupLocale } from "survey-creator-core";

export const thStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "แก้ไข",
    // "Watch and learn how to create surveys"
    externalHelpLink: "ชมและเรียนรู้วิธีสร้างแบบสำรวจ",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "กรุณาวางคำถามที่นี่จากกล่องเครื่องมือ",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "สร้างกฎเพื่อปรับแต่งการไหลของแบบสำรวจ",
    // "Copy"
    copy: "คัดลอก",
    // "Duplicate"
    duplicate: "ทำซ้ำ",
    // "Add to toolbox"
    addToToolbox: "เพิ่มลงในกล่องเครื่องมือ",
    // "Delete Panel"
    deletePanel: "ลบแผง",
    // "Delete Question"
    deleteQuestion: "ลบคำถาม",
    // "Convert to"
    convertTo: "แปลงเป็น",
    // "Drag element"
    drag: "ลากองค์ประกอบ"
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
    // "HTML"
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
    // "Survey"
    survey: "แบบสำรวจ",
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
    // "Panel"
    panelTypeName: "แผง",
    // "Question"
    questionTypeName: "คำถาม",
    // "Column"
    columnTypeName: "คอลัมน์",
    // "Add New Page"
    addNewPage: "เพิ่มหน้าใหม่",
    // "Scroll to the Right"
    moveRight: "เลื่อนไปทางขวา",
    // "Scroll to the Left"
    moveLeft: "เลื่อนไปทางซ้าย",
    // "Delete Page"
    deletePage: "ลบหน้า",
    // "Edit Page"
    editPage: "แก้ไขหน้า",
    // "Edit"
    edit: "แก้ไข",
    // "page"
    newPageName: "หน้า",
    // "question"
    newQuestionName: "คำถาม",
    // "panel"
    newPanelName: "แผง",
    // "text"
    newTextItemName: "ข้อความ",
    // "Default"
    defaultV2Theme: "ค่าเริ่มต้น",
    // "Modern"
    modernTheme: "ทันสมัย",
    // "Default (legacy)"
    defaultTheme: "ค่าเริ่มต้น (เวอร์ชันเก่า)",
    // "Preview Survey Again"
    testSurveyAgain: "ดูตัวอย่างแบบสำรวจอีกครั้ง",
    // "Survey width: "
    testSurveyWidth: "ความกว้างของแบบสำรวจ: ",
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
    // "Undo"
    undo: "เลิกทำ",
    // "Redo"
    redo: "ทำซ้ำ",
    // "Undo last change"
    undoTooltip: "เลิกทำการเปลี่ยนแปลงครั้งล่าสุด",
    // "Redo the change"
    redoTooltip: "ทำซ้ำการเปลี่ยนแปลง",
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
    // "Copy"
    copy: "คัดลอก",
    // "Cut"
    cut: "ตัด",
    // "Paste"
    paste: "วาง",
    // "Copy selection to clipboard"
    copyTooltip: "คัดลอกการเลือกไปยังคลิปบอร์ด",
    // "Cut selection to clipboard"
    cutTooltip: "ตัดการเลือกไปยังคลิปบอร์ด",
    // "Paste from clipboard"
    pasteTooltip: "วางจากคลิปบอร์ด",
    // "Options"
    options: "ตัวเลือก",
    // "Generate Valid JSON"
    generateValidJSON: "สร้าง JSON ที่ถูกต้อง",
    // "Generate Readable JSON"
    generateReadableJSON: "สร้าง JSON ที่อ่านง่าย",
    // "Toolbox"
    toolbox: "กล่องเครื่องมือ",
    // "Properties"
    "property-grid": "คุณสมบัติ",
    // [Auto-translated] "Search"
    toolboxSearch: "ค้น",
    // "Type to search..."
    toolboxFilteredTextPlaceholder: "พิมพ์เพื่อค้นหา...",
    // "No results found"
    toolboxNoResultsFound: "ไม่พบผลลัพธ์",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "พิมพ์เพื่อค้นหา...",
    // "No results found"
    propertyGridNoResultsFound: "ไม่พบผลลัพธ์",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "เริ่มกําหนดค่าฟอร์มของคุณ",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "คลิกไอคอนหมวดหมู่ใดก็ได้เพื่อสํารวจการตั้งค่าแบบสํารวจ การตั้งค่าเพิ่มเติมจะพร้อมใช้งานเมื่อคุณเพิ่มองค์ประกอบแบบสํารวจลงในพื้นผิวการออกแบบ",
    // "Please correct JSON."
    correctJSON: "กรุณาแก้ไข JSON",
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
    // "Error"
    propertyEditorError: "ข้อผิดพลาด",
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
    // "Bold"
    bold: "ตัวหนา",
    // "Italic"
    italic: "ตัวเอียง",
    // "Underline"
    underline: "ขีดเส้นใต้",
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
      // "When expression: '{0}' returns true"
      itemExpressionText: "เมื่อนิพจน์: '{0}' เป็นจริง", // {0} - the expression
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
      // "Define condition(s)"
      expressionEditorTitle: "กำหนดเงื่อนไข",
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
      // "Please add at least one action."
      noActionError: "กรุณาเพิ่มอย่างน้อยหนึ่งการกระทำ",
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
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "แสดงแถบความคืบหน้า",
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
    // survey templates
    survey: {
      // "Survey title"
      title: "ชื่อแบบสำรวจ",
      // "Survey description"
      description: "คำอธิบายแบบสำรวจ",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "ทําให้แบบสํารวจเป็นแบบอ่านอย่างเดียว"
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
      // "Minimum value"
      min: "ค่าขั้นต่ำ",
      // "Maximum value"
      max: "ค่าสูงสุด"
    },
    currencymask: {
      // "Currency prefix"
      prefix: "คำนำหน้าสกุลเงิน",
      // "Currency suffix"
      suffix: "คำต่อท้ายสกุลเงิน"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "ล้างรายการอื่นเมื่อเลือก",
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
    // "Input field width (in characters)"
    size: "ความกว้างของช่องป้อนข้อมูล (ในตัวอักษร)",
    // "Cell error message alignment"
    cellErrorLocation: "การจัดตำแหน่งข้อความข้อผิดพลาดในเซลล์",
    // "Enabled"
    enabled: "เปิดใช้งาน",
    // "Disabled"
    disabled: "ปิดใช้งาน",
    // "Inherit"
    inherit: "สืบทอด",
    // "Apply"
    apply: "ใช้",
    // "OK"
    ok: "ตกลง",
    // "Save"
    save: "บันทึก",
    // "Clear"
    clear: "ล้าง",
    // "Save"
    saveTooltip: "บันทึก",
    // "Cancel"
    cancel: "ยกเลิก",
    // "Set"
    set: "ตั้งค่า",
    // "Reset"
    reset: "รีเซ็ต",
    // "Change"
    change: "เปลี่ยน",
    // "Refresh"
    refresh: "รีเฟรช",
    // "Close"
    close: "ปิด",
    // "Delete"
    delete: "ลบ",
    // "Add"
    add: "เพิ่ม",
    // "Add New"
    addNew: "เพิ่มใหม่",
    // "Click to add an item..."
    addItem: "คลิกเพื่อเพิ่มรายการ...",
    // "Click to remove the item..."
    removeItem: "คลิกเพื่อลบรายการ...",
    // "Drag the item"
    dragItem: "ลากรายการ",
    // "Other"
    addOther: "อื่นๆ",
    // "Select All"
    addSelectAll: "เลือกทั้งหมด",
    // "None"
    addNone: "ไม่มี",
    // "Remove All"
    removeAll: "ลบทั้งหมด",
    // "Edit"
    edit: "แก้ไข",
    // "Return without saving"
    back: "กลับโดยไม่บันทึก",
    // "Return without saving"
    backTooltip: "กลับโดยไม่บันทึก",
    // "Save and return"
    saveAndBack: "บันทึกและกลับ",
    // "Save and return"
    saveAndBackTooltip: "บันทึกและกลับ",
    // "Done"
    doneEditing: "เสร็จสิ้นการแก้ไข",
    // "Edit Choices"
    editChoices: "แก้ไขตัวเลือก",
    // "Show Choices"
    showChoices: "แสดงตัวเลือก",
    // "Move"
    move: "ย้าย",
    // "<empty>"
    empty: "<ว่าง>",
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
    // "Form Entry"
    formEntry: "ป้อนข้อมูลในแบบฟอร์ม",
    // "Test the service"
    testService: "ทดสอบบริการ",
    // "Please select the element"
    itemSelectorEmpty: "กรุณาเลือกองค์ประกอบ",
    // "Please select the action"
    conditionActionEmpty: "กรุณาเลือกการกระทำ",
    // "Select a question..."
    conditionSelectQuestion: "เลือกคำถาม...",
    // "Select a page..."
    conditionSelectPage: "เลือกหน้า...",
    // "Select a panel..."
    conditionSelectPanel: "เลือกแผง...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "กรุณาป้อน/เลือกค่า",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "กด ctrl+space เพื่อรับคำแนะนำการเติมเต็มนิพจน์",
    // "Current row"
    aceEditorRowTitle: "แถวปัจจุบัน",
    // "Current panel"
    aceEditorPanelTitle: "แผงปัจจุบัน",
    // "For more details please check the documentation"
    showMore: "สำหรับรายละเอียดเพิ่มเติมกรุณาตรวจสอบเอกสาร",
    // "Available questions"
    assistantTitle: "คำถามที่มีอยู่",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "ต้องมีอย่างน้อยหนึ่งคอลัมน์หรือแถว",
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
    // "Expression is empty"
    expressionIsEmpty: "นิพจน์ว่างเปล่า",
    // "Value"
    value: "ค่า",
    // "Text"
    text: "ข้อความ",
    // "Row ID"
    rowid: "ID แถว",
    // "Image or video file URL"
    imageLink: "URL ไฟล์ภาพหรือวิดีโอ",
    // "Edit column: {0}"
    columnEdit: "แก้ไขคอลัมน์: {0}",
    // "Edit item: {0}"
    itemEdit: "แก้ไขรายการ: {0}",
    // "URL"
    url: "URL",
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
    // "Title"
    titlePlaceholder: "ชื่อเรื่อง",
    // "Survey Title"
    surveyTitlePlaceholder: "ชื่อเรื่องแบบสำรวจ",
    // "Page {num}"
    pageTitlePlaceholder: "หน้า {num}",
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
    // "Option placeholder"
    optionsCaption: "ข้อความตัวอย่างตัวเลือก",
    // "Default Answer"
    defaultValue: "คำตอบเริ่มต้น",
    // "Default texts"
    cellsDefaultRow: "ข้อความเริ่มต้น",
    // "Edit survey settings"
    surveyEditorTitle: "แก้ไขการตั้งค่าแบบสำรวจ",
    // "Edit: {0}"
    qEditorTitle: "แก้ไข: {0}",
    // "Maximum character limit"
    maxLength: "ขีดจำกัดอักขระสูงสุด",
    // "Build"
    buildExpression: "สร้าง",
    // "Edit"
    editExpression: "แก้ไข",
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
    // "Expand/collapse title"
    expandCollapseTitle: "ขยาย/ยุบชื่อเรื่อง",
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
    // "Panel display mode"
    renderMode: "โหมดแสดงผลแผง",
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
      // [Auto-translated] "Validation message"
      text: "ข้อความการตรวจสอบความถูกต้อง",
      // [Auto-translated] "Validation expression"
      expression: "นิพจน์การตรวจสอบความถูกต้อง",
      // [Auto-translated] "Notification type"
      notificationType: "ประเภทการแจ้งเตือน"
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
    // "Search Mode"
    searchMode: "โหมดการค้นหา",
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
    // "Accepted file types"
    acceptedTypes: "ประเภทไฟล์ที่ยอมรับ",
    // "Wait for upload to complete"
    waitForUpload: "รอให้การอัปโหลดเสร็จสมบูรณ์",
    // "Confirm file deletion"
    needConfirmRemoveFile: "ยืนยันการลบไฟล์",
    // "Row details alignment"
    detailPanelMode: "การจัดตำแหน่งการขยายแถว",
    // "Minimum row count"
    minRowCount: "จำนวนแถวขั้นต่ำ",
    // "Maximum row count"
    maxRowCount: "จำนวนแถวสูงสุด",
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
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "ความสูงของภาพ",
      // [Auto-translated] "Image width"
      imageWidth: "ความกว้างของภาพ"
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
    // "Column layout"
    columnsLayout: "เค้าโครงคอลัมน์",
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
    // "Add logo..."
    addLogo: "เพิ่มโลโก้...",
    // "Change logo..."
    changeLogo: "เปลี่ยนโลโก้...",
    logoPositions: {
      // "Remove logo"
      none: "ลบโลโก้",
      // "Left"
      left: "ซ้าย",
      // "Right"
      right: "ขวา",
      // "On the top"
      top: "ด้านบน",
      // "In the bottom"
      bottom: "ด้านล่าง"
    },
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
      panel: {
        // "Panel Layout"
        layout: "เค้าโครงแผง"
      },
      // "General"
      general: "ทั่วไป",
      // "Options"
      fileOptions: "ตัวเลือก",
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
      // "Default Choices"
      matrixChoices: "ตัวเลือกเริ่มต้น",
      // "Text Inputs"
      multipleTextItems: "อินพุตข้อความ",
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
      // "Slider"
      slider: "ตัวเลื่อน",
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
    // "Edit property '{0}'"
    editProperty: "แก้ไขคุณสมบัติ '{0}'",
    // "Items"
    items: "รายการ",
    // "Make choices visible if"
    choicesVisibleIf: "ทำให้ตัวเลือกมองเห็นได้ถ้า",
    // "Make choices selectable if"
    choicesEnableIf: "ทำให้ตัวเลือกสามารถเลือกได้ถ้า",
    // "Make columns visible if"
    columnsEnableIf: "ทำให้คอลัมน์มองเห็นได้ถ้า",
    // "Make rows visible if"
    rowsEnableIf: "ทำให้แถวมองเห็นได้ถ้า",
    // "Increase the inner indent"
    innerIndent: "เพิ่มการเว้นวรรคภายใน",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "ใช้คําตอบจากรายการสุดท้ายเป็นค่าเริ่มต้น",
    // "Please enter a value."
    enterNewValue: "กรุณาป้อนค่า",
    // "There are no questions in the survey."
    noquestions: "ไม่มีคำถามในแบบสำรวจ",
    // "Please create a trigger"
    createtrigger: "กรุณาสร้างทริกเกอร์",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "กดปุ่ม Enter เพื่อแก้ไข",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "กดปุ่ม Enter เพื่อแก้ไขรายการ, กดปุ่ม Delete เพื่อลบรายการ, กด alt+ลูกศรขึ้นหรือลงเพื่อย้ายรายการ",
    // "On "
    triggerOn: "บน",
    // "Make pages visible"
    triggerMakePagesVisible: "ทำให้หน้าแสดง",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "ทำให้องค์ประกอบแสดง",
    // "Complete the survey if successful."
    triggerCompleteText: "เสร็จสิ้นแบบสำรวจหากสำเร็จ",
    // "The trigger is not set"
    triggerNotSet: "ทริกเกอร์ยังไม่ถูกตั้งค่า",
    // "Run if"
    triggerRunIf: "รันถ้า",
    // "Change value of: "
    triggerSetToName: "เปลี่ยนค่าของ:",
    // "Copy value from: "
    triggerFromName: "คัดลอกค่าจาก:",
    // "Run this Expression"
    triggerRunExpression: "รันนิพจน์นี้",
    // "to: "
    triggerSetValue: "ไปยัง:",
    // "Go to the question"
    triggerGotoName: "ไปยังคำถาม",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "ไม่ใส่ตัวแปรในผลลัพธ์แบบสำรวจ",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "กรุณาป้อนนิพจน์ที่ถูกต้อง",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "ป้อนนิพจน์ที่นี่...",
    // "No file chosen"
    noFile: "ไม่มีไฟล์ที่เลือก",
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
      editorFont: "ฟอนต์",
      // "Opacity"
      backgroundOpacity: "ความทึบ", // Auto-generated string
      // "Survey font family"
      "--sjs-font-family": "ฟอนต์แบบสำรวจ",
      // "Background color"
      "--sjs-general-backcolor-dim": "สีพื้นหลัง",
      // "Accent background colors"
      "--sjs-primary-backcolor": "สีพื้นหลังเน้น",
      // "Accent foreground colors"
      "--sjs-primary-forecolor": "สีเน้นพื้นหน้า",
      // "Error message colors"
      "--sjs-special-red": "สีข้อความข้อผิดพลาด",
      // "Shadow effects"
      "--sjs-shadow-small": "เอฟเฟกต์เงา",
      // "Shadow effects"
      "--sjs-shadow-inner": "เอฟเฟกต์เงา",
      // "Colors"
      "--sjs-border-default": "สี"
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
    // "Visible"
    show: "มองเห็นได้",
    // "Hidden"
    hide: "ซ่อน",
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
    // "Indeterminate"
    indeterminate: "ไม่แน่นอน",
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
    // "Panel navigator + Progress bar at the top"
    progressTop: "ตัวนำทางแผง + แถบความคืบหน้าด้านบน",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "ตัวนำทางแผง + แถบความคืบหน้าด้านล่าง",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "ตัวนำทางแผง + แถบความคืบหน้าด้านบนและล่าง",
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
    // "Both"
    both: "ทั้งสอง",
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
    // "Editable"
    edit: "แก้ไขได้",
    // "Read-only"
    display: "อ่านอย่างเดียว",
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
    // [Auto-translated] "Radio Buttons"
    radio: "ปุ่มตัวเลือก",
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
      // "URL"
      url: "URL",
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
      // [Auto-translated] "Informational note"
      info: "หมายเหตุข้อมูล"
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
    // "Before an answer is changed"
    onValueChanging: "ก่อนที่คำตอบจะถูกเปลี่ยน",
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
    // "No preview"
    noPreview: "ไม่มีการแสดงตัวอย่าง",
    // "Show all questions"
    showAllQuestions: "แสดงคำถามทั้งหมด",
    // "Show answered questions only"
    showAnsweredQuestions: "แสดงเฉพาะคำถามที่ตอบแล้ว",
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
    showNavigationButtons: {
      // "Hidden"
      none: "ซ่อน"
    },
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
      // "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "ปุ่ม",
      // "Dropdown"
      dropdown: "ดรอปดาวน์"
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
      // "Reset on each panel"
      onPanel: "รีเซ็ตในแต่ละแผง",
      // [Auto-translated] "Recursive numbering"
      recursive: "การกําหนดหมายเลขแบบเรียกซ้ํา",
      // "Continue across the survey"
      onSurvey: "ต่อเนื่องทั่วทั้งแบบสำรวจ",
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
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "ใช้ Angular เวอร์ชัน",
    // "Use jQuery version"
    jquery: "ใช้ jQuery เวอร์ชัน",
    // "Use Knockout version"
    knockout: "ใช้ Knockout เวอร์ชัน",
    // "Use React version"
    react: "ใช้ React เวอร์ชัน",
    // "Use Vue version"
    vue: "ใช้ Vue เวอร์ชัน",
    // "For bootstrap framework"
    bootstrap: "สำหรับกรอบ Bootstrap",
    // "Modern theme"
    modern: "ธีมสมัยใหม่",
    // "Default theme"
    default: "ธีมค่าเริ่มต้น",
    // "Orange theme"
    orange: "ธีมสีส้ม",
    // "Darkblue theme"
    darkblue: "ธีมสีน้ำเงินเข้ม",
    // "Darkrose theme"
    darkrose: "ธีมสีแดงเข้ม",
    // "Stone theme"
    stone: "ธีมหิน",
    // "Winter theme"
    winter: "ธีมฤดูหนาว",
    // "Winter-Stone theme"
    winterstone: "ธีมหินฤดูหนาว",
    // "Show survey on a page"
    showOnPage: "แสดงแบบสำรวจในหน้า",
    // "Show survey in a window"
    showInWindow: "แสดงแบบสำรวจในหน้าต่าง",
    // "Load Survey JSON from server"
    loadFromServer: "โหลด JSON แบบสำรวจจากเซิร์ฟเวอร์",
    // "Scripts and styles"
    titleScript: "สคริปต์และสไตล์",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
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
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "ตัวอย่าง: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "ตัวอย่าง: mm/dd/yyyy HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "ตัวอย่าง: $",
      // "Ex.: USD"
      suffix: "ตัวอย่าง: USD"
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
      confirmDelete: "ทริกเกอร์ข้อความแจ้งการยืนยันก่อนลบแผง"
    },
    matrixdynamic: {
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
      allowImagesPreview: "แสดงตัวอย่างภาพขนาดย่อสําหรับไฟล์ที่อัปโหลดเมื่อเป็นไปได้ ยกเลิกการเลือกหากคุณต้องการแสดงไอคอนไฟล์แทน"
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
    text: {
      // "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "การตั้งค่านี้เพียงแค่เปลี่ยนขนาดของช่องป้อนข้อมูลและไม่ส่งผลต่อความกว้างของกล่องคำถาม เพื่อจำกัดความยาวของอินพุตที่รับได้ไปที่ <b>การตรวจสอบความถูกต้อง → ขีดจำกัดตัวอักษรสูงสุด</b>"
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
    // "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "เรียกใช้งานพร้อมท์เพื่อยืนยันการลบไฟล์",
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
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "เลือกถ้าคุณต้องการบันทึกค่าคำถามพร้อมหน้ากากในผลลัพธ์แบบสำรวจ"
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
      precision: "จำกัดจำนวนหลักที่คงอยู่หลังจุดทศนิยมสำหรับตัวเลขที่แสดง"
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "หนึ่งหรือหลายสัญลักษณ์ที่จะปรากฏก่อนค่า",
      // "One or several symbols to be displayed after the value."
      suffix: "หนึ่งหรือหลายสัญลักษณ์ที่จะปรากฏหลังค่า"
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
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "ตั้งค่าสีพื้นหลังหลักของแบบสำรวจ"
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
      // "title"
      name: "title",
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
    attachOriginalItems: "แนบรายการเดิม", // Auto-generated string
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
    // "Background color"
    backgroundDimColor: "สีพื้นหลัง",
    // "Corner radius"
    cornerRadius: "รัศมีมุม",
    // "Default background"
    backcolor: "พื้นหลังค่าเริ่มต้น",
    // "Hover background"
    hovercolor: "พื้นหลังเมื่อชี้เมาส์",
    // "Border decoration"
    borderDecoration: "การตกแต่งขอบ",
    // "Font color"
    fontColor: "สีฟอนต์",
    // "Background color"
    backgroundColor: "สีพื้นหลัง",
    // "Default color"
    primaryForecolor: "สีค่าเริ่มต้น",
    // "Disabled color"
    primaryForecolorLight: "สีเมื่อปิดใช้งาน",
    // "Font"
    font: "ฟอนต์",
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
    // "Opacity"
    opacity: "ความโปร่งใส",
    // "X"
    boxShadowX: "X",
    // "Y"
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
      // "Sharp"
      sharp: "คม",
      // "Borderless"
      borderless: "ไม่มีขอบ",
      // "Flat"
      flat: "แบน",
      // "Plain"
      plain: "ธรรมดา",
      // "Double Border"
      doubleborder: "ขอบสองชั้น",
      // "Layered"
      layered: "มีชั้น",
      // "Solid"
      solid: "ทึบ",
      // "3D"
      threedimensional: "3 มิติ",
      // "Contrast"
      contrast: "คอนทราสต์"
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
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "พื้นหลังพื้นผิว",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "ประถม",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "รอง",
    // [Auto-translated] "Surface"
    surfaceScale: "พื้นผิว",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "องค์ประกอบ UI",
    // [Auto-translated] "Font"
    fontScale: "แบบอักษร",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "ผู้สร้างแบบสํารวจ 2020",
      // [Auto-translated] "Light"
      "default-light": "แสง",
      // [Auto-translated] "Dark"
      "default-dark": "มืด",
      // [Auto-translated] "Contrast"
      "default-contrast": "ความแตกต่าง"
    }
  }
};

setupLocale({ localeCode: "th", strings: thStrings });