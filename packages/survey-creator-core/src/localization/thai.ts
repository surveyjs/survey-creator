import { setupLocale } from "survey-creator-core";

export const thStrings = {
  // survey templates
  survey: {
    edit: "แก้ไข",
    externalHelpLink: "ชมและเรียนรู้วิธีสร้างแบบสำรวจ",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "กรุณาวางคำถามที่นี่จากกล่องเครื่องมือ",
    addLogicItem: "สร้างกฎเพื่อปรับแต่งการไหลของแบบสำรวจ",
    copy: "คัดลอก",
    duplicate: "ทำซ้ำ",
    addToToolbox: "เพิ่มลงในกล่องเครื่องมือ",
    deletePanel: "ลบแผง",
    deleteQuestion: "ลบคำถาม",
    convertTo: "แปลงเป็น",
    drag: "ลากองค์ประกอบ",
  },
  // Creator tabs
  tabs: {
    preview: "ดูตัวอย่าง",
    theme: "ธีม",
    translation: "การแปล",
    designer: "นักออกแบบ",
    json: "ตัวแก้ไข JSON",
    logic: "ตรรกะ"
  },
  // Question types
  qt: {
    default: "ค่าเริ่มต้น",
    checkbox: "กล่องเลือก",
    comment: "ข้อความยาว",
    imagepicker: "ตัวเลือกภาพ",
    ranking: "การจัดอันดับ",
    image: "ภาพ",
    dropdown: "เมนูดรอปดาวน์",
    tagbox: "เมนูดรอปดาวน์หลายตัวเลือก",
    file: "อัปโหลดไฟล์",
    html: "HTML",
    matrix: "เมทริกซ์เลือกเดียว",
    matrixdropdown: "เมทริกซ์เลือกหลายตัว",
    matrixdynamic: "เมทริกซ์ไดนามิก",
    multipletext: "กล่องข้อความหลายกล่อง",
    panel: "แผง",
    paneldynamic: "แผงไดนามิก",
    radiogroup: "กลุ่มปุ่มวิทยุ",
    rating: "มาตรวัดคะแนน",
    text: "อินพุตบรรทัดเดียว",
    boolean: "ใช่/ไม่ใช่ (บูลีน)",
    expression: "นิพจน์ (อ่านอย่างเดียว)",
    signaturepad: "แผ่นลายเซ็น",
    buttongroup: "กลุ่มปุ่ม"
  },
  toolboxCategories: {
    general: "ทั่วไป",
    choice: "คำถามตัวเลือก",
    text: "คำถามป้อนข้อความ",
    containers: "ภาชนะ",
    matrix: "คำถามเมทริกซ์",
    misc: "เบ็ดเตล็ด"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "ค่าเริ่มต้น ({0})",
    survey: "แบบสำรวจ",
    settings: "การตั้งค่า",
    settingsTooltip: "เปิดการตั้งค่า",
    surveySettings: "การตั้งค่าแบบสำรวจ",
    surveySettingsTooltip: "การตั้งค่าแบบสำรวจ",
    themeSettings: "การตั้งค่าธีม",
    themeSettingsTooltip: "การตั้งค่าธีม",
    creatorSettingTitle: "การตั้งค่าครีเอเตอร์",
    showPanel: "แสดงแผง",
    hidePanel: "ซ่อนแผง",
    prevSelected: "เลือกก่อนหน้า",
    nextSelected: "เลือกถัดไป",
    prevFocus: "โฟกัสก่อนหน้า",
    nextFocus: "โฟกัสถัดไป",
    surveyTypeName: "แบบสำรวจ",
    pageTypeName: "หน้า",
    panelTypeName: "แผง",
    questionTypeName: "คำถาม",
    columnTypeName: "คอลัมน์",
    addNewPage: "เพิ่มหน้าใหม่",
    moveRight: "เลื่อนไปทางขวา",
    moveLeft: "เลื่อนไปทางซ้าย",
    deletePage: "ลบหน้า",
    editPage: "แก้ไขหน้า",
    edit: "แก้ไข",
    newPageName: "หน้า",
    newQuestionName: "คำถาม",
    newPanelName: "แผง",
    newTextItemName: "ข้อความ",
    defaultV2Theme: "ค่าเริ่มต้น",
    modernTheme: "ทันสมัย",
    defaultTheme: "ค่าเริ่มต้น (เวอร์ชันเก่า)",
    testSurveyAgain: "ดูตัวอย่างแบบสำรวจอีกครั้ง",
    testSurveyWidth: "ความกว้างของแบบสำรวจ: ",
    navigateToMsg: "คุณต้องไปที่",
    saveSurvey: "บันทึกแบบสำรวจ",
    saveSurveyTooltip: "บันทึกแบบสำรวจ",
    saveTheme: "บันทึกธีม",
    saveThemeTooltip: "บันทึกธีม",
    jsonHideErrors: "ซ่อนข้อผิดพลาด",
    jsonShowErrors: "แสดงข้อผิดพลาด",
    undo: "เลิกทำ",
    redo: "ทำซ้ำ",
    undoTooltip: "เลิกทำการเปลี่ยนแปลงครั้งล่าสุด",
    redoTooltip: "ทำซ้ำการเปลี่ยนแปลง",
    expandTooltip: "ขยาย",
    collapseTooltip: "ทรุด",
    expandAllTooltip: "ขยายทั้งหมด",
    collapseAllTooltip: "ยุบทั้งหมด",
    zoomInTooltip: "ซูมเข้า",
    zoom100Tooltip: "ซูมไปที่ 100%",
    zoomOutTooltip: "ซูมออก",
    lockQuestionsTooltip: "ล็อคสถานะขยาย/ยุบสําหรับคําถาม",
    showMoreChoices: "แสดงเพิ่มเติม",
    showLessChoices: "แสดงน้อยลง",
    copy: "คัดลอก",
    cut: "ตัด",
    paste: "วาง",
    copyTooltip: "คัดลอกการเลือกไปยังคลิปบอร์ด",
    cutTooltip: "ตัดการเลือกไปยังคลิปบอร์ด",
    pasteTooltip: "วางจากคลิปบอร์ด",
    options: "ตัวเลือก",
    generateValidJSON: "สร้าง JSON ที่ถูกต้อง",
    generateReadableJSON: "สร้าง JSON ที่อ่านง่าย",
    toolbox: "กล่องเครื่องมือ",
    "property-grid": "คุณสมบัติ",
    toolboxFilteredTextPlaceholder: "พิมพ์เพื่อค้นหา...",
    toolboxNoResultsFound: "ไม่พบผลลัพธ์",
    propertyGridFilteredTextPlaceholder: "พิมพ์เพื่อค้นหา...",
    propertyGridNoResultsFound: "ไม่พบผลลัพธ์",
    propertyGridPlaceholderTitle: "เริ่มกําหนดค่าฟอร์มของคุณ",
    propertyGridPlaceholderDescription: "คลิกไอคอนหมวดหมู่ใดก็ได้เพื่อสํารวจการตั้งค่าแบบสํารวจ การตั้งค่าเพิ่มเติมจะพร้อมใช้งานเมื่อคุณเพิ่มองค์ประกอบแบบสํารวจลงในพื้นผิวการออกแบบ",
    correctJSON: "กรุณาแก้ไข JSON",
    surveyResults: "ผลลัพธ์ของแบบสำรวจ",
    surveyResultsTable: "เป็นตาราง",
    surveyResultsJson: "เป็น JSON",
    resultsTitle: "ชื่อคำถาม",
    resultsName: "ชื่อคำถาม",
    resultsValue: "ค่าคำตอบ",
    resultsDisplayValue: "ค่าการแสดงผล",
    modified: "แก้ไข",
    saving: "กำลังบันทึก",
    saved: "บันทึกแล้ว",
    propertyEditorError: "ข้อผิดพลาด",
    saveError: "ข้อผิดพลาด! เนื้อหาของตัวแก้ไขไม่ได้รับการบันทึก",
    translationPropertyGridTitle: "การตั้งค่าภาษา",
    themePropertyGridTitle: "การตั้งค่าธีม",
    addLanguageTooltip: "เพิ่มภาษา",
    translationLanguages: "ภาษา",
    translationDeleteLanguage: "คุณแน่ใจหรือว่าต้องการลบสตริงทั้งหมดสำหรับภาษานี้?",
    translationAddLanguage: "เลือกภาษาที่จะแปล",
    translationShowAllStrings: "แสดงสตริงทั้งหมด",
    translationShowUsedStringsOnly: "แสดงสตริงที่ใช้เท่านั้น",
    translationShowAllPages: "แสดงทุกหน้า",
    translationNoStrings: "ไม่มีสตริงให้แปล กรุณาเปลี่ยนตัวกรอง",
    translationExportToSCVButton: "ส่งออกเป็น CSV",
    translationImportFromSCVButton: "นำเข้าจาก CSV",
    translateUsigAI: "แปลทั้งหมดอัตโนมัติ",
    translateUsigAIFrom: "แปลจาก: ",
    translationDialogTitle: "สตริงที่ยังไม่ได้แปล",
    translationMergeLocaleWithDefault: "รวม {0} กับโลแคลเริ่มต้น",
    translationPlaceHolder: "การแปล...",
    translationSource: "ต้นทาง: ",
    translationTarget: "ปลายทาง: ",
    translationYouTubeNotSupported: "ไม่รองรับลิงก์ YouTube",
    themeExportButton: "ส่งออก",
    themeImportButton: "นำเข้า",
    surveyJsonExportButton: "ส่งออก",
    surveyJsonImportButton: "นำเข้า",
    surveyJsonCopyButton: "คัดลอกไปยังคลิปบอร์ด",
    themeResetButton: "รีเซ็ตการตั้งค่าธีมเป็นค่าเริ่มต้น",
    themeResetConfirmation: "คุณแน่ใจหรือว่าต้องการรีเซ็ตธีม? การปรับแต่งทั้งหมดของคุณจะหายไป",
    themeResetConfirmationOk: "ใช่ รีเซ็ตธีม",
    bold: "ตัวหนา",
    italic: "ตัวเอียง",
    underline: "ขีดเส้นใต้",
    addNewQuestion: "เพิ่มคำถาม",
    selectPage: "เลือกหน้า...",
    carryForwardChoicesCopied: "ตัวเลือกถูกคัดลอกจาก",
    choicesLoadedFromWebText: "ตัวเลือกถูกโหลดจากบริการเว็บ",
    choicesLoadedFromWebLinkText: "ไปที่การตั้งค่า",
    choicesLoadedFromWebPreviewTitle: "ดูตัวอย่างตัวเลือกที่โหลด",
    htmlPlaceHolder: "เนื้อหา HTML จะอยู่ที่นี่",
    panelPlaceHolder: "วางคำถามจากกล่องเครื่องมือที่นี่",
    surveyPlaceHolder: "แบบสำรวจว่างเปล่า ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง",
    pagePlaceHolder: "หน้านี้ว่างเปล่า ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง",
    imagePlaceHolder: "ลากและวางภาพที่นี่หรือคลิกปุ่มด้านล่างและเลือกภาพที่จะอัปโหลด",
    surveyPlaceHolderMobile: "คลิกปุ่ม \"เพิ่มคำถาม\" ด้านล่างเพื่อเริ่มสร้างฟอร์มของคุณ",
    surveyPlaceholderTitle: "แบบฟอร์มของคุณว่างเปล่า",
    surveyPlaceholderTitleMobile: "แบบฟอร์มของคุณว่างเปล่า",
    surveyPlaceholderDescription: "ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง",
    surveyPlaceholderDescriptionMobile: "ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง",
    previewPlaceholderTitle: "ไม่มีการแสดงตัวอย่าง",
    previewPlaceholderTitleMobile: "ไม่มีการแสดงตัวอย่าง",
    previewPlaceholderDescription: "แบบสํารวจไม่มีองค์ประกอบที่มองเห็นได้",
    previewPlaceholderDescriptionMobile: "แบบสํารวจไม่มีองค์ประกอบที่มองเห็นได้",
    translationsPlaceholderTitle: "ไม่มีข้อผูกมัดให้แปล",
    translationsPlaceholderTitleMobile: "ไม่มีข้อผูกมัดให้แปล",
    translationsPlaceholderDescription: "เพิ่มองค์ประกอบลงในฟอร์มของคุณหรือเปลี่ยนตัวกรองสตริงในแถบเครื่องมือ",
    translationsPlaceholderDescriptionMobile: "เพิ่มองค์ประกอบลงในฟอร์มของคุณหรือเปลี่ยนตัวกรองสตริงในแถบเครื่องมือ",
    pagePlaceHolderMobile: "คลิกปุ่ม \"เพิ่มคำถาม\" ด้านล่างเพื่อเพิ่มองค์ประกอบใหม่ลงในหน้า",
    panelPlaceHolderMobile: "คลิกปุ่ม \"เพิ่มคำถาม\" ด้านล่างเพื่อเพิ่มองค์ประกอบใหม่ลงในแผง",
    imagePlaceHolderMobile: "คลิกปุ่มด้านล่างและเลือกภาพที่จะอัปโหลด",
    imageChooseImage: "เลือกภาพ",
    addNewTypeQuestion: "เพิ่ม {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[โลโก้]",
    choices_Item: "รายการ ",
    selectFile: "เลือกไฟล์",
    removeFile: "ลบไฟล์",
    lg: {
      addNewItem: "เพิ่มกฎใหม่",
      empty_tab: "สร้างกฎเพื่อปรับแต่งการไหลของแบบสำรวจ",
      logicPlaceholderTitle: "ไม่มีกฎตรรกะ",
      logicPlaceholderTitleMobile: "ไม่มีกฎตรรกะ",
      logicPlaceholderDescription: "สร้างกฎเพื่อปรับแต่งโฟลว์ของแบบสํารวจ",
      logicPlaceholderDescriptionMobile: "สร้างกฎเพื่อปรับแต่งโฟลว์ของแบบสํารวจ",
      page_visibilityName: "แสดง/ซ่อนหน้า",
      page_enableName: "เปิดใช้งาน/ปิดใช้งานหน้า",
      page_requireName: "ทำให้หน้าจำเป็น",
      panel_visibilityName: "แสดง/ซ่อนแผง",
      panel_enableName: "เปิดใช้งาน/ปิดใช้งานแผง",
      panel_requireName: "ทำให้แผงจำเป็น",
      question_visibilityName: "แสดง/ซ่อนคำถาม",
      question_enableName: "เปิดใช้งาน/ปิดใช้งานคำถาม",
      question_requireName: "ทำให้คำถามจำเป็น",
      question_resetValueName: "รีเซ็ตค่าคำถาม",
      question_setValueName: "ตั้งค่าคำถาม",
      column_visibilityName: "แสดง/ซ่อนคอลัมน์",
      column_enableName: "เปิดใช้งาน/ปิดใช้งานคอลัมน์",
      column_requireName: "ทำให้คอลัมน์จำเป็น",
      column_resetValueName: "รีเซ็ตค่าคอลัมน์",
      column_setValueName: "ตั้งค่าคอลัมน์",
      trigger_completeName: "เสร็จสิ้นแบบสำรวจ",
      trigger_setvalueName: "ตั้งค่าคำตอบ",
      trigger_copyvalueName: "คัดลอกคำตอบ",
      trigger_skipName: "ข้ามไปยังคำถาม",
      trigger_runExpressionName: "รันนิพจน์",
      completedHtmlOnConditionName: "ตั้งค่ามาร์กอัปหน้า \"ขอบคุณ\"",
      page_visibilityDescription: "ทำให้หน้าแสดงเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บหน้าที่มองไม่เห็น",
      panel_visibilityDescription: "ทำให้แผงแสดงเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บแผงที่มองไม่เห็น",
      panel_enableDescription: "ทำให้แผงและองค์ประกอบทั้งหมดภายในเปิดใช้งานเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บแผงที่ปิดใช้งาน",
      question_visibilityDescription: "ทำให้คำถามแสดงเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บคำถามที่มองไม่เห็น",
      question_enableDescription: "ทำให้คำถามเปิดใช้งานเมื่อการแสดงผลตรรกะเป็นจริง มิฉะนั้นให้เก็บคำถามที่ปิดใช้งาน",
      question_requireDescription: "คำถามจะต้องตอบเมื่อการแสดงผลตรรกะเป็นจริง",
      trigger_completeDescription: "เมื่อการแสดงผลตรรกะเป็นจริง แบบสำรวจจะสิ้นสุดลง และผู้ตอบแบบสำรวจจะเห็นหน้า \"ขอบคุณ\"",
      trigger_setvalueDescription: "เมื่อค่าคำถามที่ใช้ในนิพจน์ตรรกะถูกเปลี่ยนแปลง และนิพจน์เป็นจริง ค่าที่ระบุจะถูกกำหนดให้กับคำถามที่เลือก",
      trigger_copyvalueDescription: "เมื่อค่าคำถามที่ใช้ในนิพจน์ตรรกะถูกเปลี่ยนแปลง และนิพจน์เป็นจริง ค่าของคำถามที่เลือกจะถูกคัดลอกไปยังคำถามอื่น",
      trigger_skipDescription: "เมื่อการแสดงผลตรรกะเป็นจริง แบบสำรวจจะมุ่งเน้น/ข้ามไปยังคำถามที่เลือก",
      trigger_runExpressionDescription: "เมื่อการแสดงผลตรรกะเป็นจริง แบบสำรวจจะประเมินนิพจน์อื่น เป็นทางเลือก ผลลัพธ์ของนิพจน์หลังสามารถกำหนดเป็นค่าของคำถามที่เลือกได้",
      completedHtmlOnConditionDescription: "หากนิพจน์ตรรกะเป็นจริง หน้าขอบคุณจะแสดงเนื้อหาที่ระบุ",
      itemExpressionText: "เมื่อนิพจน์: '{0}' เป็นจริง", //{0} - the expression
      itemEmptyExpressionText: "กฎใหม่",
      page_visibilityText: "ทำให้หน้า {0} แสดง", //{0} page name
      panel_visibilityText: "ทำให้แผง {0} แสดง", //{0} panel name
      panel_enableText: "ทำให้แผง {0} เปิดใช้งาน", //{0} panel name
      question_visibilityText: "ทำให้คำถาม {0} แสดง", //{0} question name
      question_enableText: "ทำให้คำถาม {0} เปิดใช้งาน", //{0} question name
      question_requireText: "ทำให้คำถาม {0} จำเป็น", //{0} question name
      question_resetValueText: "รีเซ็ตค่าคำถาม: {0}", //{0} question name.
      question_setValueText: "กำหนดค่า: {1} ให้คำถาม: {0}",
      column_visibilityText: "ทำให้คอลัมน์ {0} ของคำถาม {1} แสดง", //{0} column name, {1} question name
      column_enableText: "ทำให้คอลัมน์ {0} ของคำถาม {1} เปิดใช้งาน", //{0} column name, {1} question name
      column_requireText: "ทำให้คอลัมน์ {0} ของคำถาม {1} จำเป็น", //{0} column name, {1} question name
      column_resetValueText: "รีเซ็ตค่าคอลัมน์: {0}", //{0} column name
      column_setValueText: "กำหนดค่าคอลัมน์: {1} ให้คอลัมน์: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: "นิพจน์ที่ผลลัพธ์จะถูกกำหนดให้กับคำถามเป้าหมาย",
      trigger_completeText: "แบบสำรวจเสร็จสิ้น",
      trigger_setvalueText: "ตั้งค่าคำถาม: {0} ค่า {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "ล้างค่าคำถาม: {0}", //{0} question name
      trigger_copyvalueText: "คัดลอกคำถาม: {0} ค่า จากคำถาม {1}", //{0} and {1} question names
      trigger_skipText: "แบบสำรวจข้ามไปยังคำถาม {0}", //{0} question name
      trigger_runExpressionText1: "รันนิพจน์: '{0}'", //{0} the expression
      trigger_runExpressionText2: " และตั้งค่าผลลัพธ์ให้กับคำถาม: {0}", //{0} question name
      completedHtmlOnConditionText: "แสดงข้อความที่กำหนดเองสำหรับหน้าขอบคุณ",
      showAllQuestions: "คำถามทั้งหมด",
      showAllActionTypes: "การกระทำทั้งหมด",
      conditions: "เงื่อนไข",
      actions: "การกระทำ",
      expressionEditorTitle: "กำหนดเงื่อนไข",
      actionsEditorTitle: "กำหนดการกระทำ",
      deleteAction: "ลบการกระทำ",
      addNewAction: "เพิ่มการกระทำ",
      selectedActionCaption: "เลือกการกระทำ...",
      expressionInvalid: "นิพจน์ตรรกะว่างเปล่าหรือไม่ถูกต้อง กรุณาแก้ไข",
      noActionError: "กรุณาเพิ่มอย่างน้อยหนึ่งการกระทำ",
      actionInvalid: "กรุณาแก้ไขปัญหาในการกระทำของคุณ",
      uncompletedRule_title: "กฎตรรกะยังไม่สมบูรณ์",
      uncompletedRule_text: "คุณยังไม่ได้เสร็จกฎตรรกะบางข้อ หากคุณออกจากแท็บนี้ตอนนี้ การเปลี่ยนแปลงจะหายไป คุณยังต้องการออกจากแท็บโดยไม่เสร็จสิ้นการเปลี่ยนแปลงหรือไม่?",
      uncompletedRule_apply: "ใช่",
      uncompletedRule_cancel: "ไม่ ฉันต้องการเสร็จสิ้นกฎ"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "ชื่อแผง",
      title: "ชื่อแผง",
      description: "คำอธิบายแผง",
      visibleIf: "ทำให้แผงมองเห็นได้ถ้า",
      requiredIf: "ทำให้แผงจำเป็นถ้า",
      questionOrder: "ลำดับคำถามภายในแผง",
      page: "ย้ายแผงไปที่หน้า",
      startWithNewLine: "แสดงแผงในบรรทัดใหม่",
      state: "สถานะแผงพับ",
      width: "ความกว้างของแผงแบบอินไลน์",
      minWidth: "ความกว้างขั้นต่ำของแผง",
      maxWidth: "ความกว้างสูงสุดของแผง",
      showNumber: "หมายเลขแผงนี้"
    },
    panellayoutcolumn: {
      effectiveWidth: "ความกว้างที่มีประสิทธิภาพ %",
      questionTitleWidth: "ความกว้างของชื่อคําถาม px"
    },
    paneldynamic: {
      name: "ชื่อแผง",
      title: "ชื่อแผง",
      description: "คำอธิบายแผง",
      visibleIf: "ทำให้แผงมองเห็นได้ถ้า",
      requiredIf: "ทำให้แผงจำเป็นถ้า",
      page: "ย้ายแผงไปที่หน้า",
      startWithNewLine: "แสดงแผงในบรรทัดใหม่",
      state: "สถานะแผงพับ",
      width: "ความกว้างของแผงแบบอินไลน์",
      minWidth: "ความกว้างขั้นต่ำของแผง",
      maxWidth: "ความกว้างสูงสุดของแผง",
      confirmDelete: "ยืนยันการลบแผง",
      templateDescription: "รูปแบบคำอธิบายแผง",
      templateTitle: "รูปแบบชื่อแผง",
      noEntriesText: "ข้อความแผงว่าง",
      templateTabTitle: "รูปแบบชื่อแท็บ",
      tabTitlePlaceholder: "ตัวอย่างชื่อแท็บ",
      templateVisibleIf: "ทำให้แผงแต่ละแผงมองเห็นได้ถ้า",
      showNumber: "หมายเลขแผง",
      titleLocation: "การจัดตำแหน่งชื่อแผง",
      descriptionLocation: "การจัดตำแหน่งคำอธิบายแผง",
      templateQuestionTitleLocation: "การจัดตำแหน่งชื่อคำถาม",
      templateQuestionTitleWidth: "ความกว้างของชื่อคําถาม",
      templateErrorLocation: "การจัดตำแหน่งข้อความข้อผิดพลาด",
      newPanelPosition: "ตำแหน่งแผงใหม่",
      showRangeInProgress: "แสดงแถบความคืบหน้า",
      keyName: "ป้องกันการตอบซ้ำในคำถามต่อไปนี้"
    },
    question: {
      name: "ชื่อคำถาม",
      title: "ชื่อคำถาม",
      description: "คำอธิบายคำถาม",
      visibleIf: "ทำให้คำถามมองเห็นได้ถ้า",
      requiredIf: "ทำให้คำถามจำเป็นถ้า",
      page: "ย้ายคำถามไปที่หน้า",
      state: "สถานะกล่องคำถามพับ",
      showNumber: "ใส่หมายเลขคําถามนี้",
      titleLocation: "การจัดตำแหน่งชื่อคำถาม",
      descriptionLocation: "การจัดตำแหน่งคำอธิบายคำถาม",
      errorLocation: "การจัดตำแหน่งข้อความข้อผิดพลาด",
      indent: "เพิ่มการเว้นวรรคภายใน",
      width: "ความกว้างของคำถามแบบอินไลน์",
      minWidth: "ความกว้างขั้นต่ำของคำถาม",
      maxWidth: "ความกว้างสูงสุดของคำถาม",
      textUpdateMode: "อัปเดตค่าช่องป้อนข้อมูล"
    },
    signaturepad: {
      signatureWidth: "ความกว้างของพื้นที่ลายเซ็น",
      signatureHeight: "ความสูงของพื้นที่ลายเซ็น",
      signatureAutoScaleEnabled: "ปรับพื้นที่ลายเซ็นอัตโนมัติ",
      showPlaceholder: "แสดงตัวอย่างภายในพื้นที่ลายเซ็น",
      placeholder: "ข้อความตัวอย่าง",
      placeholderReadOnly: "ข้อความตัวอย่างในโหมดอ่านอย่างเดียวหรือดูตัวอย่าง",
      allowClear: "แสดงปุ่มลบภายในพื้นที่ลายเซ็น",
      penMinWidth: "ความกว้างขั้นต่ำของปากกา",
      penMaxWidth: "ความกว้างสูงสุดของปากกา",
      penColor: "สีของปากกา"
    },
    comment: {
      rows: "ความสูงของช่องป้อนข้อมูล (ในบรรทัด)"
    },
    showQuestionNumbers: "การจัดลำดับคำถาม",
    questionStartIndex: "ประเภทการจัดลำดับคำถาม",
    expression: {
      name: "ชื่อนิพจน์",
      title: "ชื่อนิพจน์",
      description: "คำอธิบายนิพจน์",
      expression: "นิพจน์"
    },
    trigger: {
      expression: "นิพจน์"
    },
    calculatedvalue: {
      expression: "นิพจน์"
    },
    // survey templates
    survey: {
      title: "ชื่อแบบสำรวจ",
      description: "คำอธิบายแบบสำรวจ",
      readOnly: "ทําให้แบบสํารวจเป็นแบบอ่านอย่างเดียว"
    },
    page: {
      name: "ชื่อหน้า",
      title: "ชื่อหน้า",
      description: "คำอธิบายหน้า",
      visibleIf: "ทำให้หน้ามองเห็นได้ถ้า",
      requiredIf: "ทำให้หน้าจำเป็นถ้า",
      timeLimit: "เวลาจำกัดในการทำให้เสร็จ",
      questionOrder: "ลำดับคำถามในหน้า"
    },
    matrixdropdowncolumn: {
      name: "ชื่อคอลัมน์",
      title: "ชื่อคอลัมน์",
      isUnique: "ป้องกันการตอบซ้ำ",
      width: "ความกว้างของคอลัมน์",
      minWidth: "ความกว้างขั้นต่ำของคอลัมน์",
      rows: "ความสูงของช่องป้อนข้อมูล (ในบรรทัด)",
      visibleIf: "ทำให้คอลัมน์มองเห็นได้ถ้า",
      requiredIf: "ทำให้คอลัมน์จำเป็นถ้า",
      showInMultipleColumns: "แต่ละตัวเลือกในคอลัมน์แยกต่างหาก"
    },
    multipletextitem: {
      name: "ชื่อ",
      title: "ชื่อ"
    },
    masksettings: {
      saveMaskedValue: "บันทึกค่าที่ปิดบังในผลลัพธ์แบบสำรวจ"
    },
    patternmask: {
      pattern: "รูปแบบค่า"
    },
    datetimemask: {
      min: "ค่าขั้นต่ำ",
      max: "ค่าสูงสุด"
    },
    numericmask: {
      allowNegativeValues: "อนุญาตให้มีค่าลบ",
      thousandsSeparator: "ตัวคั่นพัน",
      decimalSeparator: "ตัวคั่นทศนิยม",
      precision: "ความแม่นยำของค่า",
      min: "ค่าขั้นต่ำ",
      max: "ค่าสูงสุด"
    },
    currencymask: {
      prefix: "คำนำหน้าสกุลเงิน",
      suffix: "คำต่อท้ายสกุลเงิน"
    },
    imageHeight: "ความสูงของพื้นที่แสดงผล",
    imageWidth: "ความกว้างของพื้นที่แสดงผล",
    valueName: "ตัวระบุที่เชื่อมต่อ",
    defaultDisplayValue: "ค่าที่แสดงดีฟอลต์สําหรับข้อความไดนามิก",
    rateDescriptionLocation: "การจัดตำแหน่งป้าย",
    size: "ความกว้างของช่องป้อนข้อมูล (ในตัวอักษร)",
    cellErrorLocation: "การจัดตำแหน่งข้อความข้อผิดพลาดในเซลล์",
    enabled: "เปิดใช้งาน",
    disabled: "ปิดใช้งาน",
    inherit: "สืบทอด",
    apply: "ใช้",
    ok: "ตกลง",
    save: "บันทึก",
    clear: "ล้าง",
    saveTooltip: "บันทึก",
    cancel: "ยกเลิก",
    set: "ตั้งค่า",
    reset: "รีเซ็ต",
    change: "เปลี่ยน",
    refresh: "รีเฟรช",
    close: "ปิด",
    delete: "ลบ",
    add: "เพิ่ม",
    addNew: "เพิ่มใหม่",
    addItem: "คลิกเพื่อเพิ่มรายการ...",
    removeItem: "คลิกเพื่อลบรายการ...",
    dragItem: "ลากรายการ",
    addOther: "อื่นๆ",
    addSelectAll: "เลือกทั้งหมด",
    addNone: "ไม่มี",
    removeAll: "ลบทั้งหมด",
    edit: "แก้ไข",
    back: "กลับโดยไม่บันทึก",
    backTooltip: "กลับโดยไม่บันทึก",
    saveAndBack: "บันทึกและกลับ",
    saveAndBackTooltip: "บันทึกและกลับ",
    doneEditing: "เสร็จสิ้นการแก้ไข",
    editChoices: "แก้ไขตัวเลือก",
    showChoices: "แสดงตัวเลือก",
    move: "ย้าย",
    empty: "<ว่าง>",
    emptyValue: "ค่าว่างเปล่า",
    fastEntry: "ป้อนข้อมูลด้วยตนเอง",
    fastEntryNonUniqueError: "ค่า '{0}' ไม่ซ้ำกัน",
    fastEntryChoicesCountError: "กรุณาจำกัดจำนวนรายการจาก {0} ถึง {1}",
    fastEntryChoicesMinCountError: "กรุณาป้อนอย่างน้อย {0} รายการ",
    fastEntryPlaceholder: "ป้อนรายการตัวเลือกและ ID ของพวกเขาในรูปแบบต่อไปนี้:\n\nid|option\n\nID ตัวเลือกไม่แสดงต่อผู้ตอบแบบสำรวจและสามารถใช้ในกฎเงื่อนไขได้",
    formEntry: "ป้อนข้อมูลในแบบฟอร์ม",
    testService: "ทดสอบบริการ",
    itemSelectorEmpty: "กรุณาเลือกองค์ประกอบ",
    conditionActionEmpty: "กรุณาเลือกการกระทำ",
    conditionSelectQuestion: "เลือกคำถาม...",
    conditionSelectPage: "เลือกหน้า...",
    conditionSelectPanel: "เลือกแผง...",
    conditionValueQuestionTitle: "กรุณาป้อน/เลือกค่า",
    aceEditorHelp: "กด ctrl+space เพื่อรับคำแนะนำการเติมเต็มนิพจน์",
    aceEditorRowTitle: "แถวปัจจุบัน",
    aceEditorPanelTitle: "แผงปัจจุบัน",
    showMore: "สำหรับรายละเอียดเพิ่มเติมกรุณาตรวจสอบเอกสาร",
    assistantTitle: "คำถามที่มีอยู่",
    cellsEmptyRowsColumns: "ต้องมีอย่างน้อยหนึ่งคอลัมน์หรือแถว",
    showPreviewBeforeComplete: "ตรวจสอบก่อนส่ง",
    overridingPropertyPrefix: "เปิดใช้งานโดยเงื่อนไข",
    resetToDefaultCaption: "รีเซ็ต",
    propertyIsEmpty: "กรุณาป้อนค่า",
    propertyIsNoUnique: "กรุณาป้อนค่าที่ไม่ซ้ำกัน",
    propertyNameIsNotUnique: "กรุณาป้อนชื่อที่ไม่ซ้ำกัน",
    propertyNameIsIncorrect: "ห้ามใช้คำสงวน: \"item\", \"choice\", \"panel\", \"row\"",
    listIsEmpty: "คุณยังไม่มีรายการใดๆ",
    "listIsEmpty@choices": "คุณยังไม่มีตัวเลือกใดๆ",
    "listIsEmpty@columns": "คุณยังไม่มีคอลัมน์ใดๆ",
    "listIsEmpty@gridLayoutColumns": "คุณยังไม่มีคอลัมน์เค้าโครง",
    "listIsEmpty@rows": "คุณยังไม่มีแถวใดๆ",
    "listIsEmpty@validators": "คุณยังไม่มีการตรวจสอบความถูกต้องใดๆ",
    "listIsEmpty@calculatedValues": "คุณยังไม่มีตัวแปรใดๆ",
    "listIsEmpty@triggers": "คุณยังไม่มีทริกเกอร์ใดๆ",
    "listIsEmpty@navigateToUrlOnCondition": "คุณยังไม่มีลิงก์ใดๆ",
    "listIsEmpty@pages": "คุณยังไม่มีหน้าใด ๆ",
    "addNew@choices": "เพิ่มตัวเลือกใหม่",
    "addNew@columns": "เพิ่มคอลัมน์ใหม่",
    "addNew@rows": "เพิ่มแถวใหม่",
    "addNew@validators": "เพิ่มกฎใหม่",
    "addNew@calculatedValues": "เพิ่มตัวแปรใหม่",
    "addNew@triggers": "เพิ่มทริกเกอร์ใหม่",
    "addNew@navigateToUrlOnCondition": "เพิ่ม URL ใหม่",
    "addNew@pages": "เพิ่มหน้าใหม่",
    expressionIsEmpty: "นิพจน์ว่างเปล่า",
    value: "ค่า",
    text: "ข้อความ",
    rowid: "ID แถว",
    imageLink: "URL ไฟล์ภาพหรือวิดีโอ",
    columnEdit: "แก้ไขคอลัมน์: {0}",
    itemEdit: "แก้ไขรายการ: {0}",
    url: "URL",
    path: "เส้นทางข้อมูล",
    choicesbyurl: {
      url: "URL บริการเว็บ",
      valueName: "รับค่าเพื่อจัดเก็บจากคุณสมบัติต่อไปนี้"
    },
    titleName: "รับค่าที่จะแสดงจากคุณสมบัติต่อไปนี้",
    imageLinkName: "รับ URL ไฟล์จากคุณสมบัติต่อไปนี้",
    allowEmptyResponse: "ยอมรับการตอบว่าง",
    titlePlaceholder: "ชื่อเรื่อง",
    surveyTitlePlaceholder: "ชื่อเรื่องแบบสำรวจ",
    pageTitlePlaceholder: "หน้า {num}",
    startPageTitlePlaceholder: "หน้าเริ่มต้น",
    descriptionPlaceholder: "คำอธิบาย",
    surveyDescriptionPlaceholder: "คำอธิบาย",
    pageDescriptionPlaceholder: "คำอธิบาย",
    textWrapEnabled: "ตัวเลือกทำให้ข้อความครอบ",
    showOtherItem: "เปิดใช้งานตัวเลือก \"อื่นๆ\"",
    otherText: "เปลี่ยนชื่อตัวเลือก \"อื่นๆ\"",
    showNoneItem: "เปิดใช้งานตัวเลือก \"ไม่มี\"",
    showRefuseItem: "เปิดใช้งานตัวเลือก \"ปฏิเสธการตอบ\"",
    showDontKnowItem: "เปิดใช้งานตัวเลือก \"ไม่ทราบ\"",
    noneText: "เปลี่ยนชื่อตัวเลือก \"ไม่มี\"",
    showSelectAllItem: "เปิดใช้งานตัวเลือก \"เลือกทั้งหมด\"",
    selectAllText: "เปลี่ยนชื่อตัวเลือก \"เลือกทั้งหมด\"",
    choicesMin: "ค่าขั้นต่ำสำหรับรายการที่สร้างอัตโนมัติ",
    choicesMax: "ค่าสูงสุดสำหรับรายการที่สร้างอัตโนมัติ",
    choicesStep: "ค่าขั้นตอนสำหรับรายการที่สร้างอัตโนมัติ",
    name: "ชื่อ",
    title: "ชื่อเรื่อง",
    cellType: "ประเภทอินพุตเซลล์",
    colCount: "จำนวนคอลัมน์",
    choicesOrder: "ลำดับตัวเลือก",
    allowCustomChoices: "อนุญาตตัวเลือกที่กําหนดเอง",
    visible: "มองเห็นได้",
    isRequired: "จำเป็น",
    markRequired: "ทำเครื่องหมายว่าจำเป็น",
    removeRequiredMark: "ลบเครื่องหมายที่จำเป็น",
    eachRowRequired: "ต้องตอบในแต่ละแถว",
    eachRowUnique: "ป้องกันการตอบซ้ำในแถว",
    requiredErrorText: "ข้อความข้อผิดพลาดสำหรับคำถามที่จำเป็น",
    startWithNewLine: "แสดงคำถามในบรรทัดใหม่",
    rows: "แถว",
    cols: "คอลัมน์",
    placeholder: "ข้อความตัวอย่างภายในช่องป้อนข้อมูล",
    showPreview: "แสดงพื้นที่ดูตัวอย่าง",
    storeDataAsText: "จัดเก็บเนื้อหาไฟล์ในผลลัพธ์ JSON เป็นข้อความ",
    maxSize: "ขนาดไฟล์สูงสุด (เป็นไบต์)",
    rowCount: "จำนวนแถว",
    columnLayout: "เค้าโครงคอลัมน์",
    addRowButtonLocation: "การจัดตำแหน่งปุ่ม \"เพิ่มแถว\"",
    transposeData: "สลับแถวเป็นคอลัมน์",
    addRowText: "ข้อความปุ่ม \"เพิ่มแถว\"",
    removeRowText: "ข้อความปุ่ม \"ลบแถว\"",
    rateMin: "ค่าการให้คะแนนขั้นต่ำ",
    rateMax: "ค่าการให้คะแนนสูงสุด",
    rateStep: "ค่าขั้นตอนการให้คะแนน",
    minRateDescription: "ป้ายกำกับค่าน้อยสุด",
    maxRateDescription: "ป้ายกำกับค่าสูงสุด",
    inputType: "ประเภทอินพุต",
    optionsCaption: "ข้อความตัวอย่างตัวเลือก",
    defaultValue: "คำตอบเริ่มต้น",
    cellsDefaultRow: "ข้อความเริ่มต้น",
    surveyEditorTitle: "แก้ไขการตั้งค่าแบบสำรวจ",
    qEditorTitle: "แก้ไข: {0}",
    maxLength: "ขีดจำกัดอักขระสูงสุด",
    buildExpression: "สร้าง",
    editExpression: "แก้ไข",
    and: "และ",
    or: "หรือ",
    remove: "ลบ",
    addCondition: "เพิ่มเงื่อนไข",
    emptyLogicPopupMessage: "เลือกคำถามเพื่อเริ่มตั้งค่าเงื่อนไข",
    if: "ถ้า",
    then: "แล้ว",
    setToName: "คำถามเป้าหมาย",
    fromName: "คำถามที่คัดลอกคำตอบจาก",
    gotoName: "คำถามที่ข้ามไป",
    ruleIsNotSet: "กฎไม่ถูกต้อง",
    includeIntoResult: "เพิ่มลงในผลลัพธ์แบบสำรวจ",
    showTitle: "ทำให้ชื่อเรื่องและคำอธิบายมองเห็นได้",
    expandCollapseTitle: "ขยาย/ยุบชื่อเรื่อง",
    locale: "เลือกภาษาของแบบสำรวจ",
    simulator: "เลือกประเภทอุปกรณ์",
    landscapeOrientation: "เปลี่ยนเป็นแนวนอน",
    portraitOrientation: "เปลี่ยนเป็นแนวตั้ง",
    clearInvisibleValues: "ล้างค่าคำถามที่ซ่อนอยู่",
    cookieName: "จำกัดการตอบหนึ่งครั้ง",
    partialSendEnabled: "บันทึกความคืบหน้าแบบสำรวจอัตโนมัติเมื่อเปลี่ยนหน้า",
    storeOthersAsComment: "บันทึกค่าตัวเลือก \"อื่นๆ\" เป็นคุณสมบัติแยกต่างหาก",
    showPageTitles: "แสดงชื่อหน้า",
    showPageNumbers: "แสดงหมายเลขหน้า",
    pagePrevText: "ข้อความปุ่ม \"หน้าก่อนหน้า\"",
    pageNextText: "ข้อความปุ่ม \"หน้าถัดไป\"",
    completeText: "ข้อความปุ่ม \"เสร็จสิ้นแบบสำรวจ\"",
    previewText: "ข้อความปุ่ม \"ตรวจสอบคำตอบ\"",
    editText: "ข้อความปุ่ม \"แก้ไขคำตอบ\"",
    startSurveyText: "ข้อความปุ่ม \"เริ่มแบบสำรวจ\"",
    showNavigationButtons: "แสดง/ซ่อนปุ่มนำทาง",
    navigationButtonsLocation: "การจัดตําแหน่งปุ่มนําทาง",
    showPrevButton: "แสดงปุ่ม \"หน้าก่อนหน้า\"",
    firstPageIsStartPage: "หน้าแรกเป็นหน้าที่เริ่ม",
    showCompletePage: "แสดงหน้า \"ขอบคุณ\"",
    autoAdvanceEnabled: "ไปหน้าถัดไปอัตโนมัติ",
    autoAdvanceAllowComplete: "เสร็จสิ้นแบบสำรวจอัตโนมัติ",
    showProgressBar: "การจัดตำแหน่งแถบความคืบหน้า",
    progressBarLocation: "การจัดตําแหน่งแถบความคืบหน้า",
    questionTitleLocation: "การจัดตำแหน่งชื่อคำถาม",
    questionTitleWidth: "ความกว้างของชื่อคำถาม",
    requiredMark: "สัญลักษณ์ที่จำเป็น",
    questionTitleTemplate: "เทมเพลตชื่อคำถาม, ค่าเริ่มต้นคือ: '{no}. {require} {title}'",
    questionErrorLocation: "การจัดตำแหน่งข้อความข้อผิดพลาด",
    autoFocusFirstQuestion: "โฟกัสคำถามแรกในหน้าใหม่",
    questionOrder: "ลำดับคำถาม",
    timeLimit: "เวลาจำกัดในการทำให้เสร็จ",
    timeLimitPerPage: "เวลาจำกัดในการทำหน้าให้เสร็จ",
    showTimer: "ใช้ตัวจับเวลา",
    timerLocation: "การจัดตำแหน่งตัวจับเวลา",
    timerInfoMode: "โหมดตัวจับเวลา",
    renderMode: "โหมดแสดงผลแผง",
    allowAddPanel: "เปิดใช้งานการเพิ่มแผง",
    allowRemovePanel: "เปิดใช้งานการลบแผง",
    addPanelText: "ข้อความปุ่ม \"เพิ่มแผง\"",
    removePanelText: "ข้อความปุ่ม \"ลบแผง\"",
    isSinglePage: "แสดงองค์ประกอบทั้งหมดในหน้าหนึ่ง",
    html: "มาร์กอัป HTML",
    setValue: "คำตอบ",
    dataFormat: "รูปแบบการจัดเก็บ",
    allowAddRows: "เปิดใช้งานการเพิ่มแถว",
    allowRemoveRows: "เปิดใช้งานการลบแถว",
    allowRowReorder: "เปิดใช้งานการเรียงลำดับแถวใหม่",
    responsiveImageSizeHelp: "ไม่ใช้หากคุณระบุความกว้างหรือความสูงของพื้นที่แสดงผลที่แน่นอน",
    minImageWidth: "ความกว้างขั้นต่ำของพื้นที่แสดงผล",
    maxImageWidth: "ความกว้างสูงสุดของพื้นที่แสดงผล",
    minImageHeight: "ความสูงขั้นต่ำของพื้นที่แสดงผล",
    maxImageHeight: "ความสูงสูงสุดของพื้นที่แสดงผล",
    minValue: "ค่าขั้นต่ำ",
    maxValue: "ค่าสูงสุด",
    caseInsensitive: "ไม่คํานึงถึงตัวพิมพ์เล็กและตัวพิมพ์ใหญ่",
    minLength: "ความยาวขั้นต่ำ (ในตัวอักษร)",
    allowDigits: "อนุญาตให้มีตัวเลข",
    minCount: "จำนวนขั้นต่ำ",
    maxCount: "จำนวนสูงสุด",
    regex: "นิพจน์ปกติ",
    surveyvalidator: {
      text: "ข้อความข้อผิดพลาด",
      expression: "นิพจน์การตรวจสอบ"
    },
    totalText: "หัวแถวรวม",
    totalType: "วิธีการรวม",
    totalExpression: "นิพจน์ค่ารวม",
    totalDisplayStyle: "รูปแบบการแสดงผลค่ารวม",
    totalCurrency: "สกุลเงิน",
    totalFormat: "สตริงรูปแบบ",
    logo: "โลโก้แบบสำรวจ",
    questionsOnPageMode: "เค้าโครงแบบสำรวจ",
    maxTextLength: "จำกัดความยาวคำตอบ",
    maxCommentLength: "จำกัดความยาวความคิดเห็น",
    commentAreaRows: "ความสูงพื้นที่ความคิดเห็น (ในบรรทัด)",
    autoGrowComment: "ขยายพื้นที่ข้อความอัตโนมัติ",
    allowResizeComment: "อนุญาตให้ผู้ใช้ปรับขนาดพื้นที่ข้อความ",
    textUpdateMode: "อัปเดตค่าช่องป้อนข้อมูล",
    maskType: "ประเภทหน้ากากอินพุต",
    autoFocusFirstError: "ตั้งโฟกัสที่คำตอบที่ไม่ถูกต้องแรก",
    checkErrorsMode: "รันการตรวจสอบ",
    validateVisitedEmptyFields: "ตรวจสอบฟิลด์ว่างเมื่อเสียโฟกัส",
    navigateToUrl: "เปลี่ยนเส้นทางไปยังลิงก์ภายนอกหลังจากส่ง",
    navigateToUrlOnCondition: "ลิงก์ภายนอกแบบไดนามิก",
    completedBeforeHtml: "มาร์กอัปที่จะแสดงหากผู้ใช้กรอกแบบสำรวจนี้แล้ว",
    completedHtml: "มาร์กอัปหน้าขอบคุณ",
    completedHtmlOnCondition: "มาร์กอัปหน้าขอบคุณแบบไดนามิก",
    loadingHtml: "มาร์กอัปที่จะแสดงในขณะที่โมเดลแบบสำรวจโหลด",
    commentText: "ข้อความพื้นที่ความคิดเห็น",
    autocomplete: "ประเภทการเติมอัตโนมัติ",
    labelTrue: "ป้ายสำหรับ \"จริง\"",
    labelFalse: "ป้ายสำหรับ \"เท็จ\"",
    allowClear: "แสดงปุ่มลบ",
    searchMode: "โหมดการค้นหา",
    displayStyle: "รูปแบบการแสดงผล",
    format: "สตริงรูปแบบ",
    maximumFractionDigits: "จำนวนหลักเศษสูงสุด",
    minimumFractionDigits: "จำนวนหลักเศษขั้นต่ำ",
    useGrouping: "แสดงตัวคั่นกลุ่ม",
    allowMultiple: "เปิดใช้งานการอัปโหลดไฟล์หลายไฟล์",
    allowImagesPreview: "แสดงตัวอย่างรูปภาพที่อัปโหลด",
    acceptedTypes: "ประเภทไฟล์ที่ยอมรับ",
    waitForUpload: "รอให้การอัปโหลดเสร็จสมบูรณ์",
    needConfirmRemoveFile: "ยืนยันการลบไฟล์",
    detailPanelMode: "การจัดตำแหน่งการขยายแถว",
    minRowCount: "จำนวนแถวขั้นต่ำ",
    maxRowCount: "จำนวนแถวสูงสุด",
    confirmDelete: "ยืนยันการลบแถว",
    confirmDeleteText: "ข้อความยืนยัน",
    panelCount: "จำนวนแผงเริ่มต้น",
    minPanelCount: "จำนวนแผงขั้นต่ำ",
    maxPanelCount: "จำนวนแผงสูงสุด",
    panelsState: "สถานะแผงภายใน",
    prevPanelText: "ข้อความปุ่ม \"แผงก่อนหน้า\"",
    nextPanelText: "ข้อความปุ่ม \"แผงถัดไป\"",
    removePanelButtonLocation: "การจัดตำแหน่งปุ่ม \"ลบแผง\"",
    hideIfRowsEmpty: "ซ่อนคำถามหากไม่มีแถว",
    hideColumnsIfEmpty: "ซ่อนคอลัมน์หากไม่มีแถว",
    rateValues: "ค่าการให้คะแนนที่กำหนดเอง",
    rateCount: "จำนวนการให้คะแนน",
    autoGenerate: "การกำหนดค่าการให้คะแนน",
    hideIfChoicesEmpty: "ซ่อนคำถามหากไม่มีตัวเลือก",
    minWidth: "ความกว้างขั้นต่ำ",
    maxWidth: "ความกว้างสูงสุด",
    width: "ความกว้าง",
    showHeader: "แสดงหัวคอลัมน์",
    horizontalScroll: "แสดงแถบเลื่อนแนวนอน",
    columnMinWidth: "ความกว้างขั้นต่ำของคอลัมน์",
    rowTitleWidth: "ความกว้างหัวแถว",
    valueTrue: "ค่าที่จะเก็บเมื่อเลือก \"จริง\"",
    valueFalse: "ค่าที่จะเก็บเมื่อเลือก \"เท็จ\"",
    minErrorText: "ข้อความข้อผิดพลาด \"ค่าต่ำกว่าขั้นต่ำ\"",
    maxErrorText: "ข้อความข้อผิดพลาด \"ค่าสูงกว่าขั้นสูงสุด\"",
    otherErrorText: "ข้อความข้อผิดพลาด \"ความคิดเห็นว่าง\"",
    keyDuplicationError: "ข้อความข้อผิดพลาดสำหรับการตอบซ้ำ",
    minSelectedChoices: "ตัวเลือกขั้นต่ำที่ต้องเลือก",
    maxSelectedChoices: "ตัวเลือกสูงสุดที่ต้องเลือก",
    logoWidth: "ความกว้างของโลโก้",
    logoHeight: "ความสูงของโลโก้",
    readOnly: "อ่านอย่างเดียว",
    enableIf: "ปิดโหมดอ่านอย่างเดียวถ้า",
    noRowsText: "ข้อความ \"ไม่มีแถว\"",
    separateSpecialChoices: "แยกตัวเลือกพิเศษ",
    choicesFromQuestion: "คัดลอกตัวเลือกจากคำถามต่อไปนี้",
    choicesFromQuestionMode: "ตัวเลือกใดที่จะคัดลอก",
    choiceValuesFromQuestion: "ใช้ค่าจากคอลัมน์เมทริกซ์ต่อไปนี้หรือคําถามแผงเป็น ID ตัวเลือก",
    choiceTextsFromQuestion: "ใช้ค่าจากคอลัมน์เมทริกซ์หรือคําถามแผงต่อไปนี้เป็นข้อความตัวเลือก",
    progressBarShowPageTitles: "แสดงชื่อหน้าในแถบความคืบหน้า",
    progressBarShowPageNumbers: "แสดงหมายเลขหน้าในแถบความคืบหน้า",
    showCommentArea: "เพิ่มกล่องความคิดเห็น",
    commentPlaceholder: "ข้อความตัวอย่างสำหรับกล่องความคิดเห็น",
    displayRateDescriptionsAsExtremeItems: "แสดงป้ายกำกับเป็นค่าขั้นสุด",
    rowOrder: "ลำดับแถว",
    columnsLayout: "เค้าโครงคอลัมน์",
    columnColCount: "จำนวนคอลัมน์ซ้อน",
    correctAnswer: "คำตอบที่ถูกต้อง",
    defaultPanelValue: "ค่าดั้งเดิม",
    cells: "ข้อความเซลล์",
    fileInputPlaceholder: "เลือกไฟล์หรือวางลิงก์ไฟล์...",
    keyName: "ป้องกันการตอบซ้ำในคอลัมน์ต่อไปนี้",
    itemvalue: {
      visibleIf: "ทำให้ตัวเลือกมองเห็นได้ถ้า",
      enableIf: "ทำให้ตัวเลือกสามารถเลือกได้ถ้า"
    },
    "itemvalue@rows": {
      visibleIf: "ทำให้แถวมองเห็นได้ถ้า",
      enableIf: "ทำให้แถวสามารถแก้ไขได้ถ้า"
    },
    imageitemvalue: {
      text: "ข้อความ Alt"
    },
    logoPosition: "การจัดตำแหน่งโลโก้",
    addLogo: "เพิ่มโลโก้...",
    changeLogo: "เปลี่ยนโลโก้...",
    logoPositions: {
      none: "ลบโลโก้",
      left: "ซ้าย",
      right: "ขวา",
      top: "ด้านบน",
      bottom: "ด้านล่าง"
    },
    previewMode: "โหมดแสดงตัวอย่าง",
    gridLayoutEnabled: "เปิดใช้งานเค้าโครงกริด",
    gridLayoutColumns: "คอลัมน์เค้าโครงกริด",
    maskSettings: "การตั้งค่าหน้ากาก",
    detailErrorLocation: "การจัดตําแหน่งข้อความแสดงข้อผิดพลาดในการขยายแถว",
    // Creator tabs
    tabs: {
      panel: {
        layout: "เค้าโครงแผง"
      },
      general: "ทั่วไป",
      fileOptions: "ตัวเลือก",
      html: "ตัวแก้ไข HTML",
      columns: "คอลัมน์",
      rows: "แถว",
      choices: "ตัวเลือก",
      items: "รายการ",
      visibleIf: "มองเห็นได้ถ้า",
      enableIf: "สามารถแก้ไขได้ถ้า",
      requiredIf: "จำเป็นถ้า",
      rateValues: "ค่าการให้คะแนน",
      choicesByUrl: "ตัวเลือกจากบริการเว็บ",
      matrixChoices: "ตัวเลือกเริ่มต้น",
      multipleTextItems: "อินพุตข้อความ",
      numbering: "การจัดลำดับ",
      validators: "การตรวจสอบความถูกต้อง",
      navigation: "การนำทาง",
      question: "การตั้งค่าคำถาม",
      pages: "หน้า",
      timer: "โหมดควิซ",
      calculatedValues: "ค่าที่คำนวณ",
      triggers: "ทริกเกอร์",
      templateTitle: "เทมเพลตชื่อ",
      totals: "ยอดรวม",
      logic: "เงื่อนไข",
      mask: "การตั้งค่าหน้ากากอินพุต",
      layout: {
        panel: "เค้าโครงแผง",
        question: "เค้าโครง",
        base: "เค้าโครง"
      },
      data: "ข้อมูล",
      validation: "การตรวจสอบความถูกต้อง",
      cells: "ข้อความเซลล์",
      showOnCompleted: "หน้าขอบคุณ",
      logo: "โลโก้ในหัวเรื่องแบบสำรวจ",
      slider: "ตัวเลื่อน",
      expression: "นิพจน์",
      questionSettings: "การตั้งค่าคำถาม",
      header: "หัวเรื่อง",
      background: "พื้นหลัง",
      appearance: "การปรากฏ",
      accentColors: "สีเน้นเสียง",
      surfaceBackground: "พื้นหลังพื้นผิว",
      scaling: "มาตรา ส่วน",
      others: "อื่นๆ"
    },
    editProperty: "แก้ไขคุณสมบัติ '{0}'",
    items: "รายการ",
    choicesVisibleIf: "ทำให้ตัวเลือกมองเห็นได้ถ้า",
    choicesEnableIf: "ทำให้ตัวเลือกสามารถเลือกได้ถ้า",
    columnsEnableIf: "ทำให้คอลัมน์มองเห็นได้ถ้า",
    rowsEnableIf: "ทำให้แถวมองเห็นได้ถ้า",
    innerIndent: "เพิ่มการเว้นวรรคภายใน",
    copyDefaultValueFromLastEntry: "ใช้คําตอบจากรายการสุดท้ายเป็นค่าเริ่มต้น",
    enterNewValue: "กรุณาป้อนค่า",
    noquestions: "ไม่มีคำถามในแบบสำรวจ",
    createtrigger: "กรุณาสร้างทริกเกอร์",
    titleKeyboardAdornerTip: "กดปุ่ม Enter เพื่อแก้ไข",
    keyboardAdornerTip: "กดปุ่ม Enter เพื่อแก้ไขรายการ, กดปุ่ม Delete เพื่อลบรายการ, กด alt+ลูกศรขึ้นหรือลงเพื่อย้ายรายการ",
    triggerOn: "บน",
    triggerMakePagesVisible: "ทำให้หน้าแสดง",
    triggerMakeQuestionsVisible: "ทำให้องค์ประกอบแสดง",
    triggerCompleteText: "เสร็จสิ้นแบบสำรวจหากสำเร็จ",
    triggerNotSet: "ทริกเกอร์ยังไม่ถูกตั้งค่า",
    triggerRunIf: "รันถ้า",
    triggerSetToName: "เปลี่ยนค่าของ:",
    triggerFromName: "คัดลอกค่าจาก:",
    triggerRunExpression: "รันนิพจน์นี้",
    triggerSetValue: "ไปยัง:",
    triggerGotoName: "ไปยังคำถาม",
    triggerIsVariable: "ไม่ใส่ตัวแปรในผลลัพธ์แบบสำรวจ",
    triggerRunExpressionEmpty: "กรุณาป้อนนิพจน์ที่ถูกต้อง",
    emptyExpressionPlaceHolder: "ป้อนนิพจน์ที่นี่...",
    noFile: "ไม่มีไฟล์ที่เลือก",
    clearIfInvisible: "ล้างค่าคำถามที่ซ่อนอยู่",
    valuePropertyName: "เก็บค่าในคุณสมบัติต่อไปนี้",
    searchEnabled: "เปิดใช้งานการค้นหาขณะพิมพ์",
    hideSelectedItems: "ซ่อนรายการที่เลือก",
    closeOnSelect: "ยุบลงเมื่อเลือก",
    verticalAlign: "การจัดตำแหน่งแนวตั้งในเซลล์",
    alternateRows: "สีแถวสลับ",
    columnsVisibleIf: "ทำให้คอลัมน์มองเห็นได้ถ้า",
    rowsVisibleIf: "ทำให้แถวมองเห็นได้ถ้า",
    otherPlaceholder: "ข้อความตัวอย่างสำหรับกล่องความคิดเห็น",
    filePlaceholder: "ข้อความตัวอย่างสำหรับไฟล์ท้องถิ่น",
    photoPlaceholder: "ข้อความตัวอย่างสำหรับกล้อง",
    fileOrPhotoPlaceholder: "ข้อความตัวอย่างสำหรับไฟล์ท้องถิ่นหรือกล้อง",
    rateType: "ไอคอนการให้คะแนน",
    url_placeholder: "ตัวอย่าง: https://api.example.com/books",
    path_placeholder: "ตัวอย่าง: categories.fiction",
    questionStartIndex_placeholder: "ตัวอย่าง: ก)",
    width_placeholder: "ตัวอย่าง: 6in",
    minWidth_placeholder: "ตัวอย่าง: 600px",
    maxWidth_placeholder: "ตัวอย่าง: 50%",
    imageHeight_placeholder: "อัตโนมัติ",
    imageWidth_placeholder: "อัตโนมัติ",
    itemTitleWidth_placeholder: "ตัวอย่าง: 100px",
    theme: {
      themeName: "ธีม",
      isPanelless: "การปรากฏคำถาม",
      editorPanel: "พื้นหลังและรัศมีมุม",
      questionPanel: "พื้นหลังและรัศมีมุม",
      primaryColor: "สีเน้น",
      panelBackgroundTransparency: "ความทึบของแผงและกล่องคำถาม",
      questionBackgroundTransparency: "ความทึบขององค์ประกอบอินพุต",
      fontSize: "ขนาดฟอนต์ของแบบสำรวจ",
      scale: "ปัจจัยขยายแบบสำรวจ",
      cornerRadius: "รัศมีมุม",
      advancedMode: "โหมดขั้นสูง",
      pageTitle: "ฟอนต์ชื่อเรื่อง",
      pageDescription: "ฟอนต์คำอธิบาย",
      questionTitle: "ฟอนต์ชื่อคำถาม",
      questionDescription: "ฟอนต์คำอธิบายคำถาม",
      editorFont: "ฟอนต์",
      backgroundOpacity: "ความทึบ",
      "--sjs-font-family": "ฟอนต์แบบสำรวจ",
      "--sjs-general-backcolor-dim": "สีพื้นหลัง",
      "--sjs-primary-backcolor": "สีพื้นหลังเน้น",
      "--sjs-primary-forecolor": "สีเน้นพื้นหน้า",
      "--sjs-special-red": "สีข้อความข้อผิดพลาด",
      "--sjs-shadow-small": "เอฟเฟกต์เงา",
      "--sjs-shadow-inner": "เอฟเฟกต์เงา",
      "--sjs-border-default": "สี"
    },
    "header@header": {
      headerView: "มุมมอง",
      logoPosition: "การจัดตำแหน่งโลโก้",
      surveyTitle: "ฟอนต์ชื่อเรื่องแบบสำรวจ",
      surveyDescription: "ฟอนต์คำอธิบายแบบสำรวจ",
      headerTitle: "ฟอนต์ชื่อเรื่องแบบสำรวจ",
      headerDescription: "ฟอนต์คำอธิบายแบบสำรวจ",
      inheritWidthFrom: "ความกว้างพื้นที่เนื้อหา",
      textAreaWidth: "ความกว้างข้อความ",
      backgroundColorSwitch: "สีพื้นหลัง",
      backgroundImage: "ภาพพื้นหลัง",
      backgroundImageOpacity: "ความทึบ",
      overlapEnabled: "ทับซ้อน",
      logoPositionX: "การจัดตำแหน่งโลโก้",
      titlePositionX: "การจัดตำแหน่งชื่อเรื่องแบบสำรวจ",
      descriptionPositionX: "การจัดตำแหน่งคำอธิบายแบบสำรวจ"
    }
  },
  // Property values
  pv: {
    "true": "จริง",
    "false": "เท็จ",
    file: "ไฟล์ท้องถิ่น",
    camera: "กล้อง",
    "file-camera": "ไฟล์ท้องถิ่นหรือกล้อง",
    inherit: "สืบทอด",
    show: "มองเห็นได้",
    hide: "ซ่อน",
    default: "สืบทอด",
    initial: "เริ่มต้น",
    random: "สุ่ม",
    collapsed: "ยุบ",
    expanded: "ขยาย",
    none: "ไม่มี",
    asc: "เพิ่มขึ้น",
    desc: "ลดลง",
    indeterminate: "ไม่แน่นอน",
    selected: "เลือก",
    unselected: "ไม่เลือก",
    decimal: "ทศนิยม",
    currency: "สกุลเงิน",
    percent: "เปอร์เซ็นต์",
    firstExpanded: "แผงแรกขยาย",
    off: "ซ่อนหมายเลขคำถาม",
    list: "รายการ",
    carousel: "ม้าหมุน",
    tab: "แท็บ",
    progressTop: "ตัวนำทางแผง + แถบความคืบหน้าด้านบน",
    progressBottom: "ตัวนำทางแผง + แถบความคืบหน้าด้านล่าง",
    progressTopBottom: "ตัวนำทางแผง + แถบความคืบหน้าด้านบนและล่าง",
    horizontal: "แนวนอน",
    vertical: "แนวตั้ง",
    top: "ด้านบน",
    bottom: "ด้านล่าง",
    topBottom: "ด้านบนและล่าง",
    both: "ทั้งสอง",
    left: "ซ้าย",
    right: "ขวา",
    center: "กลาง",
    leftRight: "ซ้ายและขวา",
    middle: "กลาง",
    color: "สี",
    date: "วันที่",
    datetime: "วันและเวลา",
    "datetime-local": "วันและเวลาท้องถิ่น",
    email: "อีเมล",
    month: "เดือน",
    number: "จำนวน",
    password: "รหัสผ่าน",
    range: "ช่วง",
    tel: "โทรศัพท์",
    text: "ข้อความ",
    time: "เวลา",
    url: "URL",
    week: "สัปดาห์",
    hidden: "ซ่อน",
    edit: "แก้ไขได้",
    display: "อ่านอย่างเดียว",
    contain: "พอดี",
    cover: "ครอบคลุม",
    fill: "เติม",
    next: "ถัดไป",
    last: "สุดท้าย",
    onComplete: "เมื่อเสร็จสิ้นแบบสำรวจ",
    onHidden: "เมื่อคำถามถูกซ่อน",
    onHiddenContainer: "เมื่อคำถามหรือแผง/หน้าถูกซ่อน",
    clearInvisibleValues: {
      none: "ไม่เคย"
    },
    clearIfInvisible: {
      none: "ไม่เคย"
    },
    inputType: {
      color: "สี",
      date: "วันที่",
      "datetime-local": "วันและเวลา",
      email: "อีเมล",
      month: "เดือน",
      number: "จำนวน",
      password: "รหัสผ่าน",
      range: "ช่วง",
      tel: "โทรศัพท์",
      text: "ข้อความ",
      time: "เวลา",
      url: "URL",
      week: "สัปดาห์"
    },
    autocomplete: {
      name: "ชื่อ-นามสกุล",
      "honorific-prefix": "อุปสรรค",
      "given-name": "ชื่อ",
      "additional-name": "ชื่อกลาง",
      "family-name": "นามสกุล",
      "honorific-suffix": "ปัจจัย",
      nickname: "ชื่อเล่น",
      "organization-title": "ตําแหน่งงาน",
      username: "ชื่อผู้ใช้",
      "new-password": "รหัสผ่านใหม่",
      "current-password": "รหัสผ่านปัจจุบัน",
      organization: "ชื่อองค์กร",
      "street-address": "ที่อยู่แบบเต็ม",
      "address-line1": "บรรทัดที่อยู่ 1",
      "address-line2": "บรรทัดที่อยู่ 2",
      "address-line3": "บรรทัดที่อยู่ 3",
      "address-level4": "ที่อยู่ระดับ 4",
      "address-level3": "ที่อยู่ระดับ 3",
      "address-level2": "ที่อยู่ระดับ 2",
      "address-level1": "ที่อยู่ระดับ 1",
      country: "รหัสประเทศ",
      "country-name": "ชื่อประเทศ",
      "postal-code": "รหัสไปรษณีย์",
      "cc-name": "ชื่อผู้ถือบัตร",
      "cc-given-name": "ชื่อผู้ถือบัตร",
      "cc-additional-name": "ชื่อกลางของผู้ถือบัตร",
      "cc-family-name": "นามสกุลของผู้ถือบัตร",
      "cc-number": "หมายเลขบัตรเครดิต",
      "cc-exp": "วันหมดอายุ",
      "cc-exp-month": "เดือนหมดอายุ",
      "cc-exp-year": "ปีหมดอายุ",
      "cc-csc": "รหัสความปลอดภัยของบัตร",
      "cc-type": "ประเภทบัตรเครดิต",
      "transaction-currency": "สกุลเงินของธุรกรรม",
      "transaction-amount": "จํานวนเงินที่ทําธุรกรรม",
      language: "ภาษาที่ต้องการ",
      bday: "วันเกิด",
      "bday-day": "วันเกิด",
      "bday-month": "เดือนเกิด",
      "bday-year": "ปีเกิด",
      sex: "เพศ",
      url: "URL ของเว็บไซต์",
      photo: "รูปโปรไฟล์",
      tel: "หมายเลขโทรศัพท์",
      "tel-country-code": "รหัสประเทศสําหรับโทรศัพท์",
      "tel-national": "หมายเลขโทรศัพท์ในประเทศ",
      "tel-area-code": "รหัสพื้นที่",
      "tel-local": "หมายเลขโทรศัพท์ท้องถิ่น",
      "tel-local-prefix": "คํานําหน้าโทรศัพท์ท้องถิ่น",
      "tel-local-suffix": "คําต่อท้ายโทรศัพท์ท้องถิ่น",
      "tel-extension": "ส่วนขยายโทรศัพท์",
      email: "ที่อยู่อีเมล",
      impp: "โปรโตคอลการส่งข้อความโต้ตอบแบบทันที"
    },
    maskType: {
      none: "ไม่มีใคร",
      pattern: "แบบ",
      numeric: "ตัวเลข",
      datetime: "วันที่และเวลา",
      currency: "เงินตรา"
    },
    inputTextAlignment: {
      auto: "รถ",
      left: "ซ้าย",
      right: "ขวา"
    },
    all: "ทั้งหมด",
    page: "หน้า",
    survey: "แบบสำรวจ",
    onNextPage: "เมื่อเปลี่ยนไปหน้าถัดไป",
    onValueChanged: "หลังจากคำตอบถูกเปลี่ยน",
    onValueChanging: "ก่อนที่คำตอบจะถูกเปลี่ยน",
    questionsOnPageMode: {
      standard: "โครงสร้างดั้งเดิม",
      singlePage: "แสดงคำถามทั้งหมดในหน้าหนึ่ง",
      questionPerPage: "แสดงคำถามเดียวต่อหน้า"
    },
    noPreview: "ไม่มีการแสดงตัวอย่าง",
    showAllQuestions: "แสดงคำถามทั้งหมด",
    showAnsweredQuestions: "แสดงเฉพาะคำถามที่ตอบแล้ว",
    allQuestions: "แสดงคําถามทั้งหมด",
    answeredQuestions: "แสดงเฉพาะคําถามที่ตอบแล้ว",
    pages: "หน้าที่เสร็จสมบูรณ์",
    questions: "คำถามที่ตอบแล้ว",
    requiredQuestions: "คำถามที่จำเป็นที่ตอบแล้ว",
    correctQuestions: "คำตอบที่ถูกต้อง",
    buttons: "หน้าที่เสร็จสมบูรณ์ (UI ปุ่ม)",
    underInput: "ใต้ช่องป้อนข้อมูล",
    underTitle: "ใต้ชื่อคำถาม",
    onBlur: "เมื่อเสียโฟกัส",
    onTyping: "ขณะพิมพ์",
    underRow: "ใต้แถว",
    underRowSingle: "ใต้แถว แสดงการขยายแถวเดียว",
    auto: "อัตโนมัติ",
    showNavigationButtons: {
      none: "ซ่อน"
    },
    timerInfoMode: {
      combined: "ทั้งสอง"
    },
    addRowButtonLocation: {
      default: "ตามเค้าโครงเมทริกซ์"
    },
    panelsState: {
      default: "ล็อก",
      collapsed: "ยุบทั้งหมด",
      expanded: "ขยายทั้งหมด",
      firstExpanded: "แผงแรกขยาย"
    },
    widthMode: {
      static: "คงที่",
      responsive: "ตอบสนอง"
    },
    contentMode: {
      image: "รูปภาพ",
      video: "วิดีโอ",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "ปุ่ม",
      dropdown: "ดรอปดาวน์"
    },
    rateColorMode: {
      default: "ค่าเริ่มต้น",
      scale: "มาตราส่วน"
    },
    scaleColorMode: {
      monochrome: "ขาวดำ",
      colored: "สีสัน"
    },
    autoGenerate: {
      "true": "สร้างอัตโนมัติ",
      "false": "กำหนดเอง"
    },
    rateType: {
      labels: "ป้าย",
      stars: "ดาว",
      smileys: "สไมลีย์"
    },
    state: {
      default: "ล็อก"
    },
    showQuestionNumbers: {
      default: "การจัดลำดับอัตโนมัติ",
      on: "การจัดลำดับอัตโนมัติ",
      onPage: "รีเซ็ตในแต่ละหน้า",
      onpanel: "รีเซ็ตในแต่ละแผง",
      onPanel: "รีเซ็ตในแต่ละแผง",
      recursive: "การกําหนดหมายเลขแบบเรียกซ้ํา",
      onSurvey: "ต่อเนื่องทั่วทั้งแบบสำรวจ",
      off: "ไม่มีการจัดลำดับ"
    },
    descriptionLocation: {
      underTitle: "ใต้ชื่อคำถาม",
      underInput: "ใต้ช่องป้อนข้อมูล"
    },
    selectToRankAreasLayout: {
      horizontal: "ข้างตัวเลือก",
      vertical: "เหนือคำตอบ"
    },
    displayStyle: {
      decimal: "ทศนิยม",
      currency: "สกุลเงิน",
      percent: "เปอร์เซ็นต์",
      date: "วันที่"
    },
    totalDisplayStyle: {
      decimal: "ทศนิยม",
      currency: "สกุลเงิน",
      percent: "เปอร์เซ็นต์",
      date: "วันที่"
    },
    rowOrder: {
      initial: "ดั้งเดิม"
    },
    questionOrder: {
      initial: "ดั้งเดิม"
    },
    progressBarLocation: {
      top: "ด้านบน",
      bottom: "ก้น",
      topbottom: "ด้านบนและด้านล่าง",
      aboveheader: "เหนือส่วนหัว",
      belowheader: "ด้านล่างส่วนหัว",
      off: "ซ่อน"
    },
    sum: "รวม",
    count: "นับ",
    min: "ขั้นต่ำ",
    max: "สูงสุด",
    avg: "เฉลี่ย",
    searchMode: {
      contains: "มี",
      startsWith: "เริ่มต้นด้วย"
    },
    backgroundImageFit: {
      auto: "อัตโนมัติ",
      cover: "ครอบคลุม",
      contain: "พอดี",
      fill: "เติม",
      tile: "กระเบื้อง"
    },
    backgroundImageAttachment: {
      fixed: "คงที่",
      scroll: "เลื่อน"
    },
    headerView: {
      basic: "พื้นฐาน",
      advanced: "ขั้นสูง"
    },
    inheritWidthFrom: {
      survey: "เหมือนแบบสำรวจ",
      container: "เหมือนคอนเทนเนอร์"
    },
    backgroundColorSwitch: {
      none: "ไม่มี",
      accentColor: "สีเน้น",
      custom: "กำหนดเอง"
    },
    colorPalette: {
      light: "แสง",
      dark: "มืด"
    },
    isPanelless: {
      "false": "ค่าเริ่มต้น",
      "true": "ไม่มีแผง"
    },
    progressBarInheritWidthFrom: {
      survey: "เช่นเดียวกับแบบสํารวจ",
      container: "เหมือนกับคอนเทนเนอร์"
    }
  },
  // Operators
  op: {
    empty: "ว่าง",
    notempty: "ไม่ว่าง",
    equal: "เท่ากับ",
    notequal: "ไม่เท่ากับ",
    contains: "มี",
    notcontains: "ไม่มี",
    anyof: "ใดๆ ของ",
    allof: "ทั้งหมดของ",
    greater: "มากกว่า",
    less: "น้อยกว่า",
    greaterorequal: "มากกว่าหรือเท่ากับ",
    lessorequal: "น้อยกว่าหรือเท่ากับ",
    and: "และ",
    or: "หรือ"
  },
  // Embed window
  ew: {
    angular: "ใช้ Angular เวอร์ชัน",
    jquery: "ใช้ jQuery เวอร์ชัน",
    knockout: "ใช้ Knockout เวอร์ชัน",
    react: "ใช้ React เวอร์ชัน",
    vue: "ใช้ Vue เวอร์ชัน",
    bootstrap: "สำหรับกรอบ Bootstrap",
    modern: "ธีมสมัยใหม่",
    default: "ธีมค่าเริ่มต้น",
    orange: "ธีมสีส้ม",
    darkblue: "ธีมสีน้ำเงินเข้ม",
    darkrose: "ธีมสีแดงเข้ม",
    stone: "ธีมหิน",
    winter: "ธีมฤดูหนาว",
    winterstone: "ธีมหินฤดูหนาว",
    showOnPage: "แสดงแบบสำรวจในหน้า",
    showInWindow: "แสดงแบบสำรวจในหน้าต่าง",
    loadFromServer: "โหลด JSON แบบสำรวจจากเซิร์ฟเวอร์",
    titleScript: "สคริปต์และสไตล์",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "เลือกหน้าที่จะทดสอบ",
    showInvisibleElements: "แสดงองค์ประกอบที่ซ่อนอยู่",
    hideInvisibleElements: "ซ่อนองค์ประกอบที่ซ่อนอยู่"
  },
  validators: {
    answercountvalidator: "จำนวนคำตอบ",
    emailvalidator: "อีเมล",
    expressionvalidator: "นิพจน์",
    numericvalidator: "ตัวเลข",
    regexvalidator: "นิพจน์ปกติ",
    textvalidator: "ข้อความ"
  },
  triggers: {
    completetrigger: "เสร็จสิ้นแบบสำรวจ",
    setvaluetrigger: "ตั้งค่าคำตอบ",
    copyvaluetrigger: "คัดลอกคำตอบ",
    skiptrigger: "ข้ามไปยังคำถาม",
    runexpressiontrigger: "รันนิพจน์",
    visibletrigger: "เปลี่ยนการมองเห็น (เลิกใช้แล้ว)"
  },
  peplaceholder: {
    patternmask: {
      pattern: "ตัวอย่าง: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "ตัวอย่าง: mm/dd/yyyy HH:MM:ss"
    },
    currencymask: {
      prefix: "ตัวอย่าง: $",
      suffix: "ตัวอย่าง: USD"
    },
    panelbase: {
      questionTitleWidth: "ตัวอย่าง: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "ตัวอย่าง: 30%",
      questionTitleWidth: "ตัวอย่าง: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "ID แผงที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      description: "พิมพ์คำบรรยายแผง",
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของแผง",
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับแผง",
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการส่งแบบสำรวจถ้าไม่มีคำถามที่ตอบแล้ว",
      questionTitleLocation: "ใช้กับคำถามทั้งหมดในแผงนี้ ถ้าคุณต้องการเปลี่ยนการตั้งค่านี้ให้กำหนดกฎการจัดตำแหน่งชื่อเรื่องสำหรับคำถามเฉพาะ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      questionTitleWidth: "ตั้งความกว้างที่สม่ำเสมอสำหรับชื่อคำถามเมื่อจัดเรียงทางซ้ายของกล่องคำถาม รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      questionErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามทั้งหมดในแผง ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ",
      questionOrder: "รักษาลำดับดั้งเดิมของคำถามหรือตั้งค่าให้สุ่ม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ",
      page: "ย้ายแผงไปที่หน้าที่เลือก",
      innerIndent: "เพิ่มพื้นที่หรือมาร์จิ้นระหว่างเนื้อหาแผงและขอบซ้ายของกล่องแผง",
      startWithNewLine: "ยกเลิกการเลือกเพื่อแสดงแผงในบรรทัดเดียวกับคำถามหรือแผงก่อนหน้า การตั้งค่านี้จะไม่ใช้ถ้าแผงเป็นองค์ประกอบแรกในแบบฟอร์มของคุณ",
      state: "เลือกจาก: \"ขยาย\" - แผงแสดงเต็มและสามารถยุบได้; \"ยุบ\" - แผงแสดงเพียงชื่อเรื่องและคำอธิบายและสามารถขยายได้; \"ล็อก\" - แผงแสดงเต็มและไม่สามารถยุบได้",
      width: "ตั้งความกว้างของแผงให้สัมพันธ์กับองค์ประกอบแบบสำรวจอื่นๆ ในบรรทัดเดียวกัน รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      showQuestionNumbers: "กําหนดตัวเลขให้กับคําถามที่ซ้อนกันภายในแผงนี้",
      effectiveColSpan: "ระบุจํานวนคอลัมน์ที่แผงนี้ครอบคลุมภายในเค้าโครงกริด",
      gridLayoutColumns: "ตารางนี้ให้คุณกําหนดค่าคอลัมน์กริดแต่ละคอลัมน์ภายในแผงควบคุม โดยจะกําหนดเปอร์เซ็นต์ความกว้างสําหรับแต่ละคอลัมน์โดยอัตโนมัติตามจํานวนองค์ประกอบสูงสุดในแถว เมื่อต้องการปรับแต่งเค้าโครงกริด ให้ปรับค่าเหล่านี้ด้วยตนเอง และกําหนดความกว้างของชื่อเรื่องสําหรับคําถามทั้งหมดในแต่ละคอลัมน์"
    },
    paneldynamic: {
      name: "ID แผงที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      description: "พิมพ์คำบรรยายแผง",
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของแผง",
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับแผง",
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการส่งแบบสำรวจถ้าไม่มีคำถามที่ตอบแล้ว",
      templateQuestionTitleLocation: "ใช้กับคำถามทั้งหมดในแผงนี้ ถ้าคุณต้องการเปลี่ยนการตั้งค่านี้ให้กำหนดกฎการจัดตำแหน่งชื่อเรื่องสำหรับคำถามเฉพาะ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      templateQuestionTitleWidth: "ตั้งค่าความกว้างที่สอดคล้องกันสําหรับชื่อคําถามเมื่อจัดตําแหน่งทางด้านซ้ายของกล่องคําถาม ยอมรับค่า CSS (px, %, in, pt เป็นต้น)",
      templateErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามที่มีอินพุตที่ไม่ถูกต้อง เลือกระหว่าง: \"ด้านบน\" - ข้อความข้อผิดพลาดจะวางที่ด้านบนของกล่องคำถาม; \"ด้านล่าง\" - ข้อความข้อผิดพลาดจะวางที่ด้านล่างของกล่องคำถาม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      errorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามทั้งหมดในแผง ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ",
      page: "ย้ายแผงไปที่หน้าที่เลือก",
      innerIndent: "เพิ่มพื้นที่หรือมาร์จิ้นระหว่างเนื้อหาแผงและขอบซ้ายของกล่องแผง",
      startWithNewLine: "ยกเลิกการเลือกเพื่อแสดงแผงในบรรทัดเดียวกับคำถามหรือแผงก่อนหน้า การตั้งค่านี้จะไม่ใช้ถ้าแผงเป็นองค์ประกอบแรกในแบบฟอร์มของคุณ",
      state: "เลือกจาก: \"ขยาย\" - แผงแสดงเต็มและสามารถยุบได้; \"ยุบ\" - แผงแสดงเพียงชื่อเรื่องและคำอธิบายและสามารถขยายได้; \"ล็อก\" - แผงแสดงเต็มและไม่สามารถยุบได้",
      width: "ตั้งความกว้างของแผงให้สัมพันธ์กับองค์ประกอบแบบสำรวจอื่นๆ ในบรรทัดเดียวกัน รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      templateTitle: "พิมพ์ในเทมเพลตสำหรับชื่อแผงไดนามิก ใช้ {panelIndex} สำหรับตำแหน่งทั่วไปของแผงและ {visiblePanelIndex} สำหรับลำดับของแผงที่มองเห็นได้แทรกแทนที่ลงในเทมเพลตเพื่อเพิ่มการนับอัตโนมัติ",
      templateTabTitle: "พิมพ์ในเทมเพลตสำหรับชื่อแท็บ ใช้ {panelIndex} สำหรับตำแหน่งทั่วไปของแผงและ {visiblePanelIndex} สำหรับลำดับของแผงที่มองเห็นได้แทรกแทนที่ลงในเทมเพลตเพื่อเพิ่มการนับอัตโนมัติ",
      tabTitlePlaceholder: "ข้อความสำรองสำหรับชื่อแท็บที่ใช้เมื่อรูปแบบชื่อแท็บไม่สร้างค่า",
      templateVisibleIf: "การตั้งค่านี้ช่วยให้คุณควบคุมการมองเห็นของแผงแต่ละแผงในแผงไดนามิก ใช้ตัวแปร {panel} เพื่ออ้างอิงแผงปัจจุบันในนิพจน์ของคุณ",
      titleLocation: "การตั้งค่านี้จะสืบทอดอัตโนมัติโดยคำถามทั้งหมดในแผงนี้ ถ้าคุณต้องการเปลี่ยนการตั้งค่านี้ให้กำหนดกฎการจัดตำแหน่งชื่อเรื่องสำหรับคำถามเฉพาะ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      descriptionLocation: "ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับหน้า (ถ้ามี) หรือการตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ใต้ชื่อแผง\")",
      newPanelPosition: "กำหนดตำแหน่งของแผงที่เพิ่มใหม่ โดยค่าเริ่มต้นแผงใหม่จะถูกเพิ่มไปที่ท้าย เลือก \"ถัดไป\" เพื่อแทรกแผงใหม่หลังจากแผงปัจจุบัน",
      copyDefaultValueFromLastEntry: "คัดลอกคำตอบจากแผงสุดท้ายและตั้งเป็นค่าเริ่มต้นสำหรับแผงไดนามิกถัดไป",
      keyName: "อ้างอิงชื่อคำถามเพื่อต้องการให้ผู้ใช้ตอบคำถามนี้ที่ไม่ซ้ำกันในแต่ละแผง"
    },
    copyDefaultValueFromLastEntry: "คัดลอกคำตอบจากแถวสุดท้ายและตั้งเป็นค่าเริ่มต้นสำหรับแถวไดนามิกถัดไป",
    defaultValueExpression: "การตั้งค่านี้ช่วยให้คุณตั้งค่าคำตอบเริ่มต้นตามนิพจน์ นิพจน์สามารถประกอบด้วยการคำนวณพื้นฐาน {q1_id} + {q2_id}, นิพจน์บูลีน เช่น {age} > 60, และฟังก์ชัน: iif(), today(), age(), min(), max(), avg() เป็นต้น ค่าที่กำหนดโดยนิพจน์นี้จะเป็นค่าเริ่มต้นที่สามารถถูกแทนที่ได้โดยการป้อนของผู้ตอบ",
    resetValueIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดเมื่อค่าคำตอบของผู้ตอบจะถูกรีเซ็ตตาม \"นิพจน์ค่าเริ่มต้น\" หรือ \"นิพจน์ตั้งค่า\" หรือค่าเริ่มต้นถ้ามีการตั้งค่า",
    setValueIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดเมื่อรัน \"นิพจน์ตั้งค่า\" และตั้งค่าที่ได้เป็นคำตอบ",
    setValueExpression: "ระบุนิพจน์ที่กำหนดค่าที่จะตั้งเมื่อเงื่อนไขในกฎ \"ตั้งค่า\" ถูกตอบสนอง นิพจน์สามารถประกอบด้วยการคำนวณพื้นฐาน {q1_id} + {q2_id}, นิพจน์บูลีน เช่น {age} > 60, และฟังก์ชัน: iif(), today(), age(), min(), max(), avg() เป็นต้น ค่าที่กำหนดโดยนิพจน์นี้สามารถถูกแทนที่ได้โดยการป้อนของผู้ตอบ",
    gridLayoutEnabled: "ตัวสร้างแบบสํารวจช่วยให้คุณสามารถปรับความกว้างแบบอินไลน์ขององค์ประกอบฟอร์มด้วยตนเองเพื่อควบคุมเค้าโครง หากสิ่งนี้ไม่ก่อให้เกิดผลลัพธ์ที่ต้องการ คุณสามารถเปิดใช้งานเค้าโครงกริด ซึ่งโครงสร้างสร้างองค์ประกอบโดยใช้ระบบตามคอลัมน์ หากต้องการกําหนดค่าคอลัมน์เค้าโครง ให้เลือกหน้าหรือแผง แล้วใช้ตาราง \"การตั้งค่าคําถาม\" → \"คอลัมน์กริด\" หากต้องการปรับจํานวนคอลัมน์ของคําถาม ให้เลือกและตั้งค่าที่ต้องการในช่อง \"เค้าโครง\" → \"ช่วงคอลัมน์\"",
    question: {
      name: "ID คำถามที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      description: "พิมพ์คำบรรยายคำถาม",
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของคำถาม",
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับคำถาม",
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการตอบแบบสำรวจหรือการส่งถ้าไม่มีคำถามที่ตอบแล้ว",
      startWithNewLine: "ยกเลิกการเลือกเพื่อแสดงคำถามในบรรทัดเดียวกับคำถามหรือแผงก่อนหน้า การตั้งค่านี้จะไม่ใช้ถ้าคำถามเป็นองค์ประกอบแรกในแบบฟอร์มของคุณ",
      page: "ย้ายคำถามไปที่หน้าที่เลือก",
      state: "เลือกจาก: \"ขยาย\" - กล่องคำถามแสดงเต็มและสามารถยุบได้; \"ยุบ\" - กล่องคำถามแสดงเพียงชื่อเรื่องและคำอธิบายและสามารถขยายได้; \"ล็อก\" - กล่องคำถามแสดงเต็มและไม่สามารถยุบได้",
      titleLocation: "แทนที่กฎการจัดตำแหน่งชื่อเรื่องที่กำหนดไว้ในแผง, หน้า หรือระดับแบบสำรวจ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับสูงกว่าถ้ามี (ค่าเริ่มต้นคือ \"ด้านบน\")",
      descriptionLocation: "ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ใต้ชื่อคำถาม\")",
      errorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามที่มีอินพุตที่ไม่ถูกต้อง เลือกระหว่าง: \"ด้านบน\" - ข้อความข้อผิดพลาดจะวางที่ด้านบนของกล่องคำถาม; \"ด้านล่าง\" - ข้อความข้อผิดพลาดจะวางที่ด้านล่างของกล่องคำถาม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      indent: "เพิ่มพื้นที่หรือมาร์จิ้นระหว่างเนื้อหาคำถามและขอบซ้ายของกล่องคำถาม",
      width: "ตั้งความกว้างของคำถามให้สัมพันธ์กับองค์ประกอบแบบสำรวจอื่นๆ ในบรรทัดเดียวกัน รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      surveyvalidator: {
        expression: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎการตรวจสอบความถูกต้องสำหรับคำถาม"
      },
      textUpdateMode: "เลือกจาก: \"เมื่อเสียโฟกัส\" - ค่าจะถูกอัปเดตเมื่อช่องป้อนข้อมูลเสียโฟกัส; \"ขณะพิมพ์\" - ค่าจะถูกอัปเดตแบบเรียลไทม์เมื่อผู้ใช้กำลังพิมพ์ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"เมื่อเสียโฟกัส\")",
      url: "คุณสามารถใช้บริการเว็บใดก็ได้เป็นแหล่งข้อมูลสำหรับคำถามเลือกหลายตัวเลือก เพื่อเติมค่าตัวเลือกให้ป้อน URL ของบริการที่ให้ข้อมูล",
      searchMode: "การดำเนินการเปรียบเทียบที่ใช้ในการกรองรายการดรอปดาวน์",
      textWrapEnabled: "ข้อความยาวในตัวเลือกจะสร้างการตัดบรรทัดอัตโนมัติเพื่อให้พอดีกับเมนูดรอปดาวน์ ยกเลิกการเลือกถ้าคุณต้องการให้ข้อความถูกตัด",
      effectiveColSpan: "ระบุจํานวนคอลัมน์ที่คําถามนี้ครอบคลุมภายในเค้าโครงกริด"
    },
    signaturepad: {
      signatureWidth: "ตั้งความกว้างของพื้นที่ลายเซ็นที่แสดงและภาพที่ได้",
      signatureHeight: "ตั้งความสูงของพื้นที่ลายเซ็นที่แสดงและภาพที่ได้",
      signatureAutoScaleEnabled: "เลือกถ้าคุณต้องการให้พื้นที่ลายเซ็นเติมพื้นที่ทั้งหมดในกล่องคำถามขณะที่รักษาสัดส่วน 3:2 เมื่อกำหนดค่าความกว้างและความสูงที่กำหนดเองแล้ว การตั้งค่านี้จะรักษาสัดส่วนของขนาดนี้"
    },
    file: {
      imageHeight: "ปรับความสูงของภาพในผลลัพธ์แบบสำรวจ",
      imageWidth: "ปรับความกว้างของภาพในผลลัพธ์แบบสำรวจ",
      allowImagesPreview: "แสดงตัวอย่างภาพขนาดย่อสําหรับไฟล์ที่อัปโหลดเมื่อเป็นไปได้ ยกเลิกการเลือกหากคุณต้องการแสดงไอคอนไฟล์แทน"
    },
    image: {
      contentMode: "ตัวเลือก \"อัตโนมัติ\" จะกำหนดโหมดเนื้อหาที่เหมาะสมโดยอัตโนมัติตาม URL ที่ให้มา"
    },
    imagepicker: {
      imageHeight: "แทนค่าความสูงขั้นต่ำและสูงสุด",
      imageWidth: "แทนค่าความกว้างขั้นต่ำและสูงสุด",
      choices: "\"ค่า\" ทำหน้าที่เป็น ID รายการที่ใช้ในกฎเงื่อนไข; \"ข้อความ\" แสดงให้ผู้ตอบเห็น",
      contentMode: "เลือกจาก \"รูปภาพ\" และ \"วิดีโอ\" เพื่อกำหนดโหมดเนื้อหาของตัวเลือกสื่อ ถ้าเลือก \"รูปภาพ\" ให้แน่ใจว่าตัวเลือกทั้งหมดที่ให้เป็นไฟล์รูปภาพในรูปแบบ JPEG, GIF, PNG, APNG, SVG, BMP, ICO ถ้าเลือก \"วิดีโอ\" ให้แน่ใจว่าตัวเลือกทั้งหมดเป็นลิงก์ตรงไปยังไฟล์วิดีโอในรูปแบบ MP4, MOV, WMV, FLV, AVI, MKV โปรดทราบว่าลิงก์ YouTube ไม่รองรับสำหรับตัวเลือกวิดีโอ"
    },
    text: {
      size: "การตั้งค่านี้เพียงแค่เปลี่ยนขนาดของช่องป้อนข้อมูลและไม่ส่งผลต่อความกว้างของกล่องคำถาม เพื่อจำกัดความยาวของอินพุตที่รับได้ไปที่ <b>การตรวจสอบความถูกต้อง → ขีดจำกัดตัวอักษรสูงสุด</b>"
    },
    comment: {
      rows: "ตั้งจำนวนบรรทัดที่แสดงในช่องป้อนข้อมูล ถ้าอินพุตมีบรรทัดมากขึ้น แถบเลื่อนจะปรากฏ"
    },
    // survey templates
    survey: {
      readOnly: "เลือกว่าคุณต้องการป้องกันไม่ให้ผู้ตอบแบบสอบถามกรอกแบบสํารวจหรือไม่",
      progressBarLocation: "ตั้งค่าตําแหน่งของแถบความคืบหน้า ค่า \"อัตโนมัติ\" จะแสดงแถบความคืบหน้าด้านบนหรือด้านล่างส่วนหัวของแบบสํารวจ"
    },
    matrixdropdowncolumn: {
      name: "ID คอลัมน์ที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      isUnique: "เมื่อเปิดใช้สำหรับคอลัมน์ ผู้ตอบจะต้องให้คำตอบที่ไม่ซ้ำกันสำหรับแต่ละคำถามในคอลัมน์นี้",
      rows: "ตั้งจำนวนบรรทัดที่แสดงในช่องป้อนข้อมูล ถ้าอินพุตมีบรรทัดมากขึ้น แถบเลื่อนจะปรากฏ",
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของคอลัมน์",
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับคอลัมน์",
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการส่งแบบสำรวจถ้าไม่มีคำถามที่ตอบแล้ว",
      showInMultipleColumns: "เมื่อเลือก จะสร้างคอลัมน์แยกสำหรับตัวเลือกแต่ละตัว",
      colCount: "จัดเรียงตัวเลือกตัวเลือกในรูปแบบหลายคอลัมน์ เมื่อตั้งค่าเป็น 0 ตัวเลือกจะแสดงในบรรทัดเดียว เมื่อตั้งค่าเป็น -1 ค่าจริงจะถูกสืบทอดมาจากคุณสมบัติ \"จํานวนคอลัมน์ที่ซ้อนกัน\" ของเมทริกซ์หลัก"
    },
    caseInsensitive: "เลือกว่าตัวพิมพ์ใหญ่และตัวพิมพ์เล็กในนิพจน์ทั่วไปต้องถือว่าเทียบเท่าหรือไม่",
    widthMode: "เลือกจาก: \"คงที่\" - ตั้งค่าความกว้างคงที่; \"ตอบสนอง\" - ทำให้แบบสำรวจเต็มความกว้างของหน้าจอ; \"อัตโนมัติ\" - ใช้ค่าใดค่าหนึ่งในสองค่าตามประเภทคำถามที่ใช้",
    cookieName: "กำหนดค่า cookie ที่ไม่ซ้ำกันสำหรับแบบสำรวจของคุณ Cookie จะถูกตั้งค่าในเบราว์เซอร์ของผู้ตอบเมื่อแบบสำรวจเสร็จสมบูรณ์เพื่อป้องกันการส่งแบบสำรวจซ้ำ",
    logo: "วางลิงก์ภาพ (ไม่มีขนาดจำกัด) หรือคลิกไอคอนโฟลเดอร์เพื่อเลือกไฟล์จากคอมพิวเตอร์ของคุณ (สูงสุด 64KB)",
    logoWidth: "ตั้งค่าความกว้างโลโก้ในหน่วย CSS (px, %, in, pt, ฯลฯ)",
    logoHeight: "ตั้งค่าความสูงโลโก้ในหน่วย CSS (px, %, in, pt, ฯลฯ)",
    logoFit: "เลือกจาก: \"ไม่มี\" - ภาพคงขนาดเดิม; \"พอดี\" - ภาพถูกปรับขนาดให้พอดีขณะที่รักษาสัดส่วน; \"ครอบคลุม\" - ภาพเติมเต็มกล่องทั้งหมดขณะที่รักษาสัดส่วน; \"เติม\" - ภาพถูกยืดให้เต็มกล่องโดยไม่รักษาสัดส่วน",
    autoAdvanceEnabled: "เลือกว่าคุณต้องการให้แบบสํารวจเลื่อนไปยังหน้าถัดไปโดยอัตโนมัติเมื่อผู้ตอบคําถามทั้งหมดในหน้าปัจจุบันแล้ว ฟีเจอร์นี้จะไม่มีผลหากคําถามสุดท้ายในหน้าเป็นคําถามปลายเปิดหรืออนุญาตให้มีคําตอบหลายข้อ",
    autoAdvanceAllowComplete: "เลือกถ้าคุณต้องการให้แบบสำรวจเสร็จสิ้นโดยอัตโนมัติหลังจากผู้ตอบตอบคำถามทั้งหมด",
    showNavigationButtons: "ตั้งการมองเห็นและตำแหน่งของปุ่มนำทางในหน้า",
    navigationButtonsLocation: "ตั้งค่าตําแหน่งของปุ่มนําทางบนหน้า",
    showPreviewBeforeComplete: "เปิดใช้งานหน้าพรีวิวที่มีคำถามทั้งหมดหรือที่ตอบแล้ว",
    questionTitleLocation: "ใช้กับคำถามทั้งหมดในแบบสำรวจ การตั้งค่านี้สามารถถูกแทนที่ได้โดยกฎการจัดตำแหน่งชื่อเรื่องที่ระดับต่ำกว่า: แผง, หน้า หรือคำถาม การตั้งค่าระดับต่ำกว่าจะยกเลิกการตั้งค่าระดับสูง",
    requiredMark: "สัญลักษณ์หรือชุดของสัญลักษณ์ที่ระบุว่าจำเป็นต้องตอบ",
    questionStartIndex: "ป้อนหมายเลขหรือตัวอักษรที่คุณต้องการเริ่มการนับ",
    questionErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามที่มีอินพุตที่ไม่ถูกต้อง เลือกระหว่าง: \"ด้านบน\" - ข้อความข้อผิดพลาดจะวางที่ด้านบนของกล่องคำถาม; \"ด้านล่าง\" - ข้อความข้อผิดพลาดจะวางที่ด้านล่างของกล่องคำถาม",
    autoFocusFirstQuestion: "เลือกถ้าคุณต้องการให้ช่องป้อนข้อมูลแรกในแต่ละหน้าเตรียมพร้อมสำหรับการป้อนข้อความ",
    questionOrder: "รักษาลำดับดั้งเดิมของคำถามหรือตั้งค่าให้สุ่ม ผลของการตั้งค่านี้จะแสดงในแท็บพรีวิวเท่านั้น",
    maxTextLength: "สำหรับคำถามป้อนข้อความเท่านั้น",
    maxCommentLength: "สำหรับความคิดเห็นคำถามเท่านั้น",
    commentAreaRows: "ตั้งค่าจํานวนบรรทัดที่แสดงในพื้นที่ข้อความสําหรับความคิดเห็นของคําถาม หากอินพุตใช้บรรทัดมากขึ้น แถบเลื่อนจะปรากฏขึ้น",
    autoGrowComment: "เลือกถ้าคุณต้องการให้ความคิดเห็นคำถามและคำถามข้อความยาวขยายตัวตามความยาวของข้อความที่ป้อน",
    allowResizeComment: "สำหรับความคิดเห็นคำถามและคำถามข้อความยาวเท่านั้น",
    calculatedValues: "ตัวแปรที่กำหนดเองทำหน้าที่เป็นตัวแปรกลางหรือเสริมที่ใช้ในการคำนวณแบบฟอร์ม พวกมันใช้คำตอบของผู้ตอบเป็นค่าต้นแหล่ง แต่ละตัวแปรที่กำหนดเองมีชื่อที่ไม่ซ้ำกันและนิพจน์ที่อิงตามค่า",
    includeIntoResult: "เลือกถ้าคุณต้องการให้ค่าที่คำนวณถูกบันทึกพร้อมกับผลลัพธ์แบบสำรวจ",
    triggers: "ทริกเกอร์เป็นเหตุการณ์หรือเงื่อนไขที่อิงตามนิพจน์ เมื่อนิพจน์ประเมินเป็น \"จริง\" ทริกเกอร์จะเริ่มการกระทำ การกระทำดังกล่าวสามารถมีคำถามเป้าหมายที่มันมีผลกระทบ",
    clearInvisibleValues: "เลือกว่าจะล้างค่าคำถามที่ซ่อนโดยตรรกะเงื่อนไขหรือไม่และเมื่อใด",
    textUpdateMode: "เลือกจาก: \"เมื่อเสียโฟกัส\" - ค่าจะถูกอัปเดตเมื่อช่องป้อนข้อมูลเสียโฟกัส; \"ขณะพิมพ์\" - ค่าจะถูกอัปเดตแบบเรียลไทม์เมื่อผู้ใช้กำลังพิมพ์",
    columns: "ค่าด้านซ้ายทำหน้าที่เป็น ID คอลัมน์ที่ใช้ในกฎเงื่อนไข ค่าด้านขวาจะแสดงให้ผู้ตอบเห็น",
    rows: "ค่าด้านซ้ายทำหน้าที่เป็น ID แถวที่ใช้ในกฎเงื่อนไข ค่าด้านขวาจะแสดงให้ผู้ตอบเห็น",
    columnMinWidth: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    rowTitleWidth: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    totalText: "แสดงเฉพาะเมื่อมีคอลัมน์ที่แสดงค่ารวมที่ตั้งค่าด้วย \"วิธีการรวม\" หรือ \"นิพจน์ค่ารวม\"",
    cellErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับเซลล์ที่มีอินพุตที่ไม่ถูกต้อง ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าจาก \"การจัดข้อความข้อผิดพลาด\"",
    detailErrorLocation: "ตั้งค่าตําแหน่งของข้อความแสดงข้อผิดพลาดสําหรับคําถามที่ซ้อนกันในส่วนรายละเอียด ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าจากคุณสมบัติ \"การจัดตําแหน่งข้อความแสดงข้อผิดพลาด\"",
    keyDuplicationError: "เมื่อเปิดใช้คุณสมบัติ \"ป้องกันคำตอบซ้ำกัน\" ผู้ตอบที่พยายามส่งการตอบซ้ำจะได้รับข้อความข้อผิดพลาดต่อไปนี้",
    totalExpression: "ช่วยให้คุณคำนวณค่ารวมตามนิพจน์ นิพจน์สามารถประกอบด้วยการคำนวณพื้นฐาน ({q1_id} + {q2_id}), นิพจน์บูลีน ({age} > 60) และฟังก์ชัน ('iif(), today(), age(), min(), max(), avg(), ฯลฯ)",
    confirmDelete: "เรียกใช้งานพร้อมท์เพื่อยืนยันการลบแถว",
    keyName: "อ้างอิง ID คอลัมน์เพื่อต้องการให้ผู้ใช้ตอบคำถามนี้ที่ไม่ซ้ำกันสำหรับแต่ละคำถามในคอลัมน์ที่ระบุ",
    description: "พิมพ์คำบรรยาย",
    locale: "เลือกภาษาสำหรับการสร้างแบบสำรวจของคุณ ในการเพิ่มการแปล สลับไปยังภาษาใหม่และแปลข้อความดั้งเดิมที่นี่หรือในแท็บการแปล",
    detailPanelMode: "ตั้งตำแหน่งของส่วนรายละเอียดเมื่อเทียบกับแถว เลือกจาก: \"ไม่มี\" - ไม่มีการขยาย; \"ใต้แถว\" - การขยายแถวจะวางใต้แต่ละแถวของเมทริกซ์; \"ใต้แถว แสดงการขยายแถวเดียว\" - การขยายจะถูกแสดงใต้แถวเดียวเท่านั้น การขยายแถวที่เหลือจะถูกยุบ",
    imageFit: "เลือกจาก: \"ไม่มี\" - ภาพคงขนาดเดิม; \"พอดี\" - ภาพถูกปรับขนาดให้พอดีขณะที่รักษาสัดส่วน; \"ครอบคลุม\" - ภาพเติมเต็มกล่องทั้งหมดขณะที่รักษาสัดส่วน; \"เติม\" - ภาพถูกยืดให้เต็มกล่องโดยไม่รักษาสัดส่วน",
    autoGrow: "ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ปิดใช้งาน\")",
    allowResize: "ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"เปิดใช้งาน\")",
    timeLimit: "ช่วงเวลาที่กำหนดในวินาทีหลังจากนั้นแบบสำรวจจะเปลี่ยนไปยังหน้าขอบคุณโดยอัตโนมัติ",
    timeLimitPerPage: "ช่วงเวลาที่กำหนดในวินาทีหลังจากนั้นแบบสำรวจจะเปลี่ยนไปยังหน้าถัดไปโดยอัตโนมัติ ซ่อนปุ่มนำทาง \"ก่อนหน้า\"",
    validateVisitedEmptyFields: "เปิดใช้งานตัวเลือกนี้เพื่อทริกเกอร์การตรวจสอบความถูกต้องเมื่อผู้ใช้มุ่งเน้นไปที่ฟิลด์อินพุตที่ว่างเปล่า แล้วปล่อยออกจากฟิลด์โดยไม่ทําการเปลี่ยนแปลงใดๆ",
    page: {
      name: "รหัสหน้าเว็บที่ผู้ตอบแบบสอบถามไม่เห็น",
      description: "พิมพ์คําบรรยายของหน้า",
      navigationTitle: "คําอธิบายภาพที่แสดงบนปุ่มนําทางในแถบความคืบหน้าหรือสารบัญ (TOC) หากคุณปล่อยให้ช่องนี้ว่างไว้ ปุ่มนําทางจะใช้ชื่อหน้าหรือชื่อหน้า หากต้องการเปิดใช้งานแถบความคืบหน้าหรือสารบัญ ให้ไปที่ \"แบบสํารวจ\" → \"การนําทาง\"",
      timeLimit: "ช่วงเวลาที่กำหนดในวินาทีหลังจากนั้นแบบสำรวจจะเปลี่ยนไปยังหน้าถัดไปโดยอัตโนมัติ ซ่อนปุ่มนำทาง \"ก่อนหน้า\"",
      visibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของหน้า",
      enableIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ปิดโหมดอ่านอย่างเดียวสำหรับหน้า",
      requiredIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่ป้องกันการส่งแบบสำรวจถ้าไม่มีคำถามที่ตอบแล้ว",
      questionTitleLocation: "ใช้กับคำถามทั้งหมดในหน้านี้ ถ้าคุณต้องการเปลี่ยนการตั้งค่านี้ให้กำหนดกฎการจัดตำแหน่งชื่อเรื่องสำหรับคำถามหรือแผงเฉพาะ ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      questionTitleWidth: "ตั้งความกว้างที่สม่ำเสมอสำหรับชื่อคำถามเมื่อจัดเรียงทางซ้ายของกล่องคำถาม รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
      questionErrorLocation: "ตั้งตำแหน่งของข้อความข้อผิดพลาดเมื่อเทียบกับคำถามที่มีอินพุตที่ไม่ถูกต้อง เลือกระหว่าง: \"ด้านบน\" - ข้อความข้อผิดพลาดจะวางที่ด้านบนของกล่องคำถาม; \"ด้านล่าง\" - ข้อความข้อผิดพลาดจะวางที่ด้านล่างของกล่องคำถาม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ด้านบน\")",
      questionOrder: "รักษาลำดับดั้งเดิมของคำถามหรือตั้งค่าให้สุ่ม ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"ดั้งเดิม\") ผลของการตั้งค่านี้จะแสดงในแท็บพรีวิวเท่านั้น",
      showNavigationButtons: "ตั้งการมองเห็นของปุ่มนำทางในหน้า ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจซึ่งค่าเริ่มต้นคือ \"มองเห็นได้\"",
      gridLayoutColumns: "ตารางนี้ช่วยให้คุณสามารถกําหนดค่าคอลัมน์กริดแต่ละคอลัมน์บนหน้า โดยจะกําหนดเปอร์เซ็นต์ความกว้างสําหรับแต่ละคอลัมน์โดยอัตโนมัติตามจํานวนองค์ประกอบสูงสุดในแถว เมื่อต้องการปรับแต่งเค้าโครงกริด ให้ปรับค่าเหล่านี้ด้วยตนเอง และกําหนดความกว้างของชื่อเรื่องสําหรับคําถามทั้งหมดในแต่ละคอลัมน์"
    },
    timerLocation: "ตั้งค่าตําแหน่งของตัวจับเวลาบนหน้า",
    panelsState: "เลือกจาก: \"ล็อก\" - ผู้ใช้ไม่สามารถขยายหรือยุบแผง; \"ยุบทั้งหมด\" - แผงทั้งหมดเริ่มในสภาพยุบ; \"ขยายทั้งหมด\" - แผงทั้งหมดเริ่มในสภาพขยาย; \"แผงแรกขยาย\" - เฉพาะแผงแรกเท่านั้นที่ขยายเริ่มต้น ใช้เมื่อ \"โหมดแสดงแผง\" ตั้งเป็น \"รายการ\" และกำหนดคุณสมบัติ \"รูปแบบชื่อแผง\"",
    imageLinkName: "ป้อนชื่อคุณสมบัติร่วมกันในชุดของวัตถุที่มีลิงก์ไฟล์รูปภาพหรือวิดีโอที่คุณต้องการแสดงในรายการตัวเลือก",
    choices: "ค่าด้านซ้ายทำหน้าที่เป็น ID รายการที่ใช้ในกฎเงื่อนไข ค่าด้านขวาจะแสดงให้ผู้ตอบเห็น",
    title: "พิมพ์ชื่อที่เป็นมิตรกับผู้ใช้เพื่อแสดง",
    waitForUpload: "รับรองว่าผู้ใช้จะไม่เสร็จสิ้นแบบสำรวจจนกว่าจะอัปโหลดไฟล์แล้ว",
    minWidth: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    maxWidth: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    width: "รับค่าของ CSS (px, %, in, pt, ฯลฯ)",
    valueName: "ตัวระบุการเข้าร่วมเป็นคีย์กำหนดเองที่คุณสามารถกำหนดให้กับคำถามหลายคำถามเพื่อเชื่อมโยงกันและซิงค์ค่า ค่าที่ซิงค์เหล่านี้จะรวมกันเป็นอาร์เรย์หรือวัตถุเดียวและบันทึกในผลลัพธ์แบบสำรวจโดยใช้คีย์เป็นชื่อคุณสมบัติ",
    defaultDisplayValue: "ค่าที่แสดงในคําถาม HTML และในชื่อแบบไดนามิกและคําอธิบายขององค์ประกอบแบบสํารวจเมื่อค่าคําถามว่างเปล่า",
    useDisplayValuesInDynamicTexts: "ในประเภทคำถามเลือกเดียวและเลือกหลายแต่ละตัวเลือกมี ID และค่าที่แสดง เมื่อเลือก การตั้งค่านี้จะแสดงค่าที่แสดงแทนที่จะเป็นค่า ID ในคำถาม HTML และชื่อเรื่องและคำอธิบายแบบไดนามิกขององค์ประกอบแบบสำรวจ",
    clearIfInvisible: "เลือกว่าจะล้างค่าคำถามที่ซ่อนโดยตรรกะเงื่อนไขหรือไม่และเมื่อใด ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าระดับแบบสำรวจ (ค่าเริ่มต้นคือ \"เมื่อเสร็จสิ้นแบบสำรวจ\")",
    choicesFromQuestionMode: "เลือกจาก: \"ทั้งหมด\" - คัดลอกตัวเลือกทั้งหมดจากคำถามที่เลือก; \"เลือกแล้ว\" - คัดลอกเฉพาะตัวเลือกที่เลือกแบบไดนามิก; \"ไม่ได้เลือก\" - คัดลอกเฉพาะตัวเลือกที่ไม่ได้เลือกแบบไดนามิก ตัวเลือก \"ไม่มี\" และ \"อื่น\" จะคัดลอกตามค่าเริ่มต้นถ้าเปิดในคำถามต้นทาง",
    choiceValuesFromQuestion: "ในประเภทคําถามแบบเลือกเดี่ยวและหลายตัวเลือก แต่ละตัวเลือกจะมีรหัสและค่าที่แสดง การตั้งค่านี้ระบุว่าคอลัมน์เมทริกซ์หรือคําถามแผงใดควรให้รหัส",
    choiceTextsFromQuestion: "ในประเภทคําถามแบบเลือกเดี่ยวและหลายตัวเลือก แต่ละตัวเลือกจะมีรหัสและค่าที่แสดง การตั้งค่านี้ระบุว่าคอลัมน์เมทริกซ์หรือคําถามแผงใดที่ควรให้ข้อความที่แสดง",
    allowCustomChoices: "เลือกเพื่อให้ผู้ตอบแบบสอบถามเพิ่มตัวเลือกของตนเองหากตัวเลือกที่ต้องการไม่พร้อมใช้งานในดรอปดาวน์ ตัวเลือกที่กําหนดเองจะถูกจัดเก็บไว้ชั่วคราวในช่วงเวลาของเซสชันเบราว์เซอร์ปัจจุบันเท่านั้น",
    showOtherItem: "เมื่อเลือก ผู้ใช้สามารถป้อนข้อมูลเพิ่มเติมในกล่องความคิดเห็นแยก",
    separateSpecialChoices: "แสดงตัวเลือกพิเศษแต่ละตัวเลือก (\"ไม่มี\", \"อื่น\", \"เลือกทั้งหมด\") ในบรรทัดใหม่ แม้ว่าจะใช้การจัดเรียงหลายคอลัมน์",
    path: "ระบุที่ตั้งในชุดข้อมูลบริการที่มีอาร์เรย์ของวัตถุเป้าหมาย อยู่ถ้าลิงก์ URL ชี้ไปที่อาร์เรย์",
    choicesbyurl: {
      valueName: "ป้อนชื่อคุณสมบัติร่วมกันในชุดของวัตถุที่ค่าจะถูกบันทึกเป็นคำตอบในผลลัพธ์แบบสำรวจ"
    },
    titleName: "ป้อนชื่อคุณสมบัติร่วมกันในชุดของวัตถุที่มีค่าที่คุณต้องการแสดงในรายการตัวเลือก",
    allowEmptyResponse: "เลือกเพื่ออนุญาตให้บริการตอบกลับว่างเปล่าหรืออาร์เรย์ว่างเปล่า",
    choicesVisibleIf: "ใช้ไอคอนไม้เท้าวิเศษเพื่อตั้งกฎเงื่อนไขที่กำหนดการมองเห็นของตัวเลือกทั้งหมด",
    rateValues: "ค่าด้านซ้ายทำหน้าที่เป็น ID รายการที่ใช้ในกฎเงื่อนไข ค่าด้านขวาจะแสดงให้ผู้ตอบเห็น",
    rating: {
      displayMode: "\"อัตโนมัติ\" เลือกระหว่างโหมด \"ปุ่ม\" และ \"ดรอปดาวน์\" ตามความกว้างที่มีอยู่ เมื่อความกว้างไม่เพียงพอที่จะแสดงปุ่ม คำถามจะแสดงดรอปดาวน์"
    },
    valuePropertyName: "ช่วยให้คุณเชื่อมโยงคำถามที่สร้างผลลัพธ์ในรูปแบบต่างๆ เมื่อคำถามดังกล่าวถูกเชื่อมโยงกันโดยใช้ตัวระบุการเข้าร่วม คุณสมบัติร่วมกันนี้จะเก็บค่าคำถามที่เลือก",
    searchEnabled: "เลือกถ้าคุณต้องการอัปเดตรายการดรอปดาวน์ให้ตรงกับคำค้นหาที่ผู้ใช้พิมพ์ในช่องป้อนข้อมูล",
    valueTrue: "ค่าที่จะบันทึกในผลลัพธ์แบบสำรวจเมื่อผู้ตอบให้คำตอบที่บวก",
    valueFalse: "ค่าที่จะบันทึกในผลลัพธ์แบบสำรวจเมื่อผู้ตอบให้คำตอบที่ลบ",
    showPreview: "ไม่แนะนำให้คุณปิดใช้งานตัวเลือกนี้เนื่องจากจะยกเลิกการพรีวิวภาพและทำให้ผู้ใช้เข้าใจได้ยากว่าไฟล์ได้ถูกอัปโหลดหรือไม่",
    needConfirmRemoveFile: "เรียกใช้งานพร้อมท์เพื่อยืนยันการลบไฟล์",
    selectToRankEnabled: "เปิดใช้งานเพื่อจัดอันดับเฉพาะตัวเลือกที่เลือก ผู้ใช้จะลากรายการที่เลือกจากรายการตัวเลือกเพื่อจัดลำดับในพื้นที่จัดอันดับ",
    dataList: "ป้อนรายการตัวเลือกที่จะเสนอแนะให้ผู้ตอบระหว่างการป้อนข้อมูล",
    inputSize: "การตั้งค่านี้เพียงแค่เปลี่ยนขนาดของช่องป้อนข้อมูลและไม่ส่งผลต่อความกว้างของกล่องคำถาม",
    itemTitleWidth: "ตั้งค่าความกว้างที่สอดคล้องกันสําหรับป้ายชื่อสินค้าทั้งหมด ยอมรับค่า CSS (px, %, in, pt เป็นต้น)",
    inputTextAlignment: "เลือกวิธีจัดตําแหน่งค่าอินพุตภายในฟิลด์ การตั้งค่าเริ่มต้น \"อัตโนมัติ\" จะจัดตําแหน่งค่าอินพุตไปทางขวาหากมีการใช้การปิดบังสกุลเงินหรือตัวเลข และไปทางซ้ายหากไม่ใช้",
    altText: "ใช้เป็นข้อความสำรองเมื่อภาพไม่สามารถแสดงบนอุปกรณ์ของผู้ใช้และเพื่อวัตถุประสงค์ในการเข้าถึง",
    rateColorMode: "กำหนดสีของอีโมจิที่เลือกเมื่อประเภทไอคอนการให้คะแนนตั้งเป็น \"สไมลี่\" เลือกระหว่าง: \"ค่าเริ่มต้น\" - อีโมจิที่เลือกจะแสดงในสีแบบสำรวจเริ่มต้น; \"มาตราส่วน\" - อีโมจิที่เลือกจะสืบทอดสีจากมาตราส่วนการให้คะแนน",
    expression: {
      name: "ID นิพจน์ที่ไม่มองเห็นได้สำหรับผู้ตอบแบบสำรวจ",
      description: "พิมพ์คำบรรยายนิพจน์",
      expression: "นิพจน์สามารถประกอบด้วยการคำนวณพื้นฐาน ({q1_id} + {q2_id}), เงื่อนไข ({age} > 60), และฟังก์ชัน ('iif(), today(), age(), min(), max(), avg(), ฯลฯ)"
    },
    storeOthersAsComment: "เลือกเพื่อบันทึกค่าตัวเลือก \"อื่น\" เป็นคุณสมบัติแยกต่างหากในผลลัพธ์แบบสำรวจ",
    format: "ใช้ {0} เป็นตัวแทนสำหรับค่าจริง",
    acceptedTypes: "ดูคำอธิบายคุณสมบัติ [accept](https://www.w3schools.com/tags/att_input_accept.asp) สำหรับข้อมูลเพิ่มเติม",
    columnColCount: "ใช้เฉพาะเมื่อ \"ประเภทอินพุตเซลล์\" ตั้งเป็นกลุ่มปุ่มวิทยุหรือกล่องเลือก",
    autocomplete: "เลือกประเภทข้อมูลที่เบราว์เซอร์ของผู้ใช้สามารถเรียกได้ ข้อมูลนี้มีแหล่งที่มาจากค่าที่ผ่านมาที่ผู้ใช้ป้อนหรือจากค่าที่ตั้งค่าไว้ล่วงหน้าถ้ามีการบันทึกค่าเหล่านี้โดยผู้ใช้สำหรับการเติมอัตโนมัติ",
    filePlaceholder: "ใช้เมื่อ \"ประเภทแหล่งไฟล์\" เป็น \"ไฟล์ท้องถิ่น\" หรือเมื่อกล้องไม่พร้อมใช้งาน",
    photoPlaceholder: "ใช้เมื่อ \"ประเภทแหล่งไฟล์\" เป็น \"กล้อง\"",
    fileOrPhotoPlaceholder: "ใช้เมื่อ \"ประเภทแหล่งไฟล์\" เป็น \"ไฟล์ท้องถิ่นหรือกล้อง\"",
    colCount: "จัดเรียงตัวเลือกในรูปแบบหลายคอลัมน์ เมื่อตั้งเป็น 0 ตัวเลือกจะแสดงในบรรทัดเดียว",
    masksettings: {
      saveMaskedValue: "เลือกถ้าคุณต้องการบันทึกค่าคำถามพร้อมหน้ากากในผลลัพธ์แบบสำรวจ"
    },
    patternmask: {
      pattern: "รูปแบบสามารถประกอบด้วยอักษรสตริงและตัวแทนต่อไปนี้: 9 - สำหรับตัวเลข; a - สำหรับตัวอักษรตัวใหญ่หรือตัวเล็ก; # - สำหรับตัวเลขหรือตัวอักษรตัวใหญ่หรือตัวเล็ก ใช้ backslash \\ เพื่อหนีตัวอักษร"
    },
    datetimemask: {
      pattern: "รูปแบบสามารถประกอบด้วยอักขระตัวคั่นและตัวแทนต่อไปนี้:<br>m - หมายเลขเดือน.<br>mm - หมายเลขเดือน พร้อมศูนย์นำหน้าสำหรับค่าสองหลัก.<br>d - วันของเดือน.<br>dd - วันของเดือน พร้อมศูนย์นำหน้าสำหรับค่าสองหลัก.<br>yy - สองหลักสุดท้ายของปี.<br>yyyy - ปีสี่หลัก.<br>H - ชั่วโมงในรูปแบบ 24 ชั่วโมง.<br>HH - ชั่วโมงในรูปแบบ 24 ชั่วโมง พร้อมศูนย์นำหน้าสำหรับค่าสองหลัก.<br>h - ชั่วโมงในรูปแบบ 12 ชั่วโมง.<br>hh - ชั่วโมงในรูปแบบ 12 ชั่วโมง พร้อมศูนย์นำหน้าสำหรับค่าสองหลัก.<br>MM - นาที.<br>ss - วินาที.<br>TT - ช่วงเวลานาฬิกา 12 ชั่วโมงในตัวอักษรตัวใหญ่ (AM/PM).<br>tt - ช่วงเวลานาฬิกา 12 ชั่วโมงในตัวอักษรตัวเล็ก (am/pm)"
    },
    numericmask: {
      decimalSeparator: "สัญลักษณ์ที่ใช้แยกส่วนเศษจากส่วนจำนวนเต็มของตัวเลขที่แสดง",
      thousandsSeparator: "สัญลักษณ์ที่ใช้แยกหลักของจำนวนมากเป็นกลุ่มของสาม",
      precision: "จำกัดจำนวนหลักที่คงอยู่หลังจุดทศนิยมสำหรับตัวเลขที่แสดง"
    },
    currencymask: {
      prefix: "หนึ่งหรือหลายสัญลักษณ์ที่จะปรากฏก่อนค่า",
      suffix: "หนึ่งหรือหลายสัญลักษณ์ที่จะปรากฏหลังค่า"
    },
    theme: {
      isPanelless: "การตั้งค่านี้ใช้เฉพาะกับคำถามที่อยู่นอกแผง",
      primaryColor: "ตั้งค่าสีเสริมที่เน้นองค์ประกอบสำคัญของแบบสำรวจ",
      panelBackgroundTransparency: "ปรับความโปร่งใสของแผงและกล่องคำถามเมื่อเทียบกับพื้นหลังแบบสำรวจ",
      questionBackgroundTransparency: "ปรับความโปร่งใสขององค์ประกอบป้อนข้อมูลเมื่อเทียบกับพื้นหลังแบบสำรวจ",
      cornerRadius: "ตั้งรัศมีมุมสำหรับองค์ประกอบสี่เหลี่ยมทั้งหมด เปิดโหมดขั้นสูงถ้าคุณต้องการตั้งค่ารัศมีมุมแต่ละมุมสำหรับองค์ประกอบป้อนข้อมูลหรือแผงและกล่องคำถาม",
      "--sjs-general-backcolor-dim": "ตั้งค่าสีพื้นหลังหลักของแบบสำรวจ"
    },
    header: {
      inheritWidthFrom: "ตัวเลือก \"เช่นเดียวกับคอนเทนเนอร์\" ปรับความกว้างของพื้นที่เนื้อหาหัวเรื่องให้เหมาะสมกับองค์ประกอบ HTML ที่แบบสำรวจอยู่ในนั้น",
      textAreaWidth: "ความกว้างของพื้นที่หัวเรื่องที่มีชื่อแบบสำรวจและคำอธิบาย วัดเป็นพิกเซล",
      overlapEnabled: "เมื่อเปิดใช้งาน ด้านบนของแบบสํารวจจะซ้อนทับด้านล่างของส่วนหัว",
      mobileHeight: "เมื่อตั้งค่าเป็น 0 ความสูงจะถูกคํานวณโดยอัตโนมัติเพื่อรองรับเนื้อหาของส่วนหัว"
    },
    progressBarInheritWidthFrom: "ตัวเลือก \"เหมือนกับคอนเทนเนอร์\" จะปรับความกว้างของพื้นที่แถบความคืบหน้าโดยอัตโนมัติเพื่อให้พอดีกับองค์ประกอบ HTML ที่วางแบบสํารวจ"
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "ทิ้งว่างไว้ถ้าเหมือนกับ 'ชื่อ'"
    },
    multiSelect: "อนุญาตให้เลือกหลายตัวเลือก",
    showLabel: "แสดงคำอธิบายภาพและวิดีโอ",
    swapOrder: "สลับลำดับของ ใช่ และ ไม่ใช่",
    value: "ค่า",
    tabAlign: "การจัดเรียงแท็บ",
    sourceType: "ประเภทแหล่งไฟล์",
    fitToContainer: "พอดีกับคอนเทนเนอร์",
    setValueExpression: "ตั้งค่านิพจน์",
    description: "คำอธิบาย",
    logoFit: "ความพอดีของโลโก้",
    pages: "หน้า",
    questions: "คำถาม",
    triggers: "ทริกเกอร์",
    calculatedValues: "ตัวแปรที่กำหนดเอง",
    surveyId: "ID แบบสำรวจ",
    surveyPostId: "ID โพสต์แบบสำรวจ",
    surveyShowDataSaving: "แสดงการบันทึกข้อมูลแบบสำรวจ",
    questionDescriptionLocation: "การจัดตำแหน่งคำอธิบายคำถาม",
    progressBarType: "ประเภทแถบความคืบหน้า",
    showTOC: "แสดงสารบัญ (TOC)",
    tocLocation: "การจัดตำแหน่ง TOC",
    questionTitlePattern: "รูปแบบชื่อคำถาม",
    widthMode: "โหมดความกว้างแบบสำรวจ",
    showBrandInfo: "แสดงข้อมูลแบรนด์",
    useDisplayValuesInDynamicTexts: "ใช้ค่าที่แสดงในข้อความไดนามิก",
    visibleIf: "มองเห็นถ้า",
    defaultValueExpression: "นิพจน์ค่าเริ่มต้น",
    requiredIf: "จำเป็นถ้า",
    resetValueIf: "รีเซ็ตค่าเมื่อ",
    setValueIf: "ตั้งค่าเมื่อ",
    validators: "กฎการตรวจสอบ",
    bindings: "การผูก",
    renderAs: "แสดงผลเป็น",
    attachOriginalItems: "แนบรายการเดิม",
    choices: "ตัวเลือก",
    choicesByUrl: "ตัวเลือกโดย URL",
    currency: "สกุลเงิน",
    cellHint: "คำแนะนำเซลล์",
    totalMaximumFractionDigits: "จำนวนหลักเศษสูงสุดทั้งหมด",
    totalMinimumFractionDigits: "จำนวนหลักเศษต่ำสุดทั้งหมด",
    columns: "คอลัมน์",
    detailElements: "องค์ประกอบรายละเอียด",
    allowAdaptiveActions: "อนุญาตการดำเนินการที่ปรับตัวได้",
    defaultRowValue: "ค่าเริ่มต้นของแถว",
    detailPanelShowOnAdding: "แสดงแผงรายละเอียดเมื่อเพิ่ม",
    choicesLazyLoadEnabled: "เปิดใช้งานการโหลดตัวเลือกอย่างขี้เกียจ",
    choicesLazyLoadPageSize: "ขนาดหน้าการโหลดตัวเลือกขี้เกียจ",
    inputFieldComponent: "ส่วนประกอบช่องป้อนข้อมูล",
    itemComponent: "ส่วนประกอบรายการ",
    min: "ต่ำสุด",
    max: "สูงสุด",
    minValueExpression: "นิพจน์ค่าน้อยสุด",
    maxValueExpression: "นิพจน์ค่าสูงสุด",
    step: "ขั้นตอน",
    dataList: "รายการสำหรับการเสนอแนะ",
    inputSize: "ความกว้างของช่องป้อนข้อมูล (ในอักขระ)",
    itemTitleWidth: "ความกว้างป้ายชื่อรายการ (ใน px)",
    inputTextAlignment: "การจัดตําแหน่งค่าอินพุต",
    elements: "องค์ประกอบ",
    content: "เนื้อหา",
    navigationTitle: "ชื่อเรื่องนำทาง",
    navigationDescription: "คำอธิบายนำทาง",
    longTap: "แตะค้าง",
    autoGrow: "ขยายช่องป้อนข้อมูลอัตโนมัติ",
    allowResize: "อนุญาตการย่อขยาย",
    acceptCarriageReturn: "ยอมรับการคืนรถเข็น",
    displayMode: "โหมดการแสดงผล",
    rateType: "ประเภทการให้คะแนน",
    label: "ป้ายชื่อ",
    contentMode: "โหมดเนื้อหา",
    imageFit: "ความพอดีของภาพและขนาดย่อ",
    altText: "ข้อความสำรอง",
    height: "ความสูง",
    mobileHeight: "ความสูงบนสมาร์ทโฟน",
    penColor: "สีปากกา",
    backgroundColor: "สีพื้นหลัง",
    templateElements: "องค์ประกอบเทมเพลต",
    operator: "ตัวดำเนินการ",
    isVariable: "เป็นตัวแปร",
    runExpression: "รันนิพจน์",
    showCaption: "แสดงคำบรรยาย",
    iconName: "ชื่อไอคอน",
    iconSize: "ขนาดไอคอน",
    precision: "ความแม่นยำ",
    matrixDragHandleArea: "พื้นที่จับลากเมทริกซ์",
    backgroundImage: "ภาพพื้นหลัง",
    backgroundImageFit: "ความพอดีของภาพพื้นหลัง",
    backgroundImageAttachment: "การแนบภาพพื้นหลัง",
    backgroundOpacity: "ความโปร่งใสของพื้นหลัง",
    selectToRankEnabled: "อนุญาตการจัดอันดับแบบเลือกได้",
    selectToRankAreasLayout: "การจัดตำแหน่งพื้นที่การจัดอันดับ",
    selectToRankEmptyRankedAreaText: "ข้อความที่จะแสดงถ้าตัวเลือกทั้งหมดถูกเลือก",
    selectToRankEmptyUnrankedAreaText: "ข้อความสำรองสำหรับพื้นที่การจัดอันดับ",
    allowCameraAccess: "อนุญาตการเข้าถึงกล้อง",
    scaleColorMode: "โหมดสีไอคอนการให้คะแนน",
    rateColorMode: "โทนสีของสไมลี่",
    copyDisplayValue: "คัดลอกค่าที่แสดง",
    effectiveColSpan: "การขยายคอลัมน์",
    progressBarInheritWidthFrom: "ความกว้างของพื้นที่แถบความคืบหน้า"
  },
  theme: {
    advancedMode: "โหมดขั้นสูง",
    pageTitle: "หน้า",
    questionTitle: "กล่องคำถาม",
    editorPanel: "องค์ประกอบป้อนข้อมูล",
    lines: "เส้น",
    primaryDefaultColor: "ค่าเริ่มต้น",
    primaryDarkColor: "เมื่อชี้เมาส์",
    primaryLightColor: "เมื่อเลือก",
    backgroundDimColor: "สีพื้นหลัง",
    cornerRadius: "รัศมีมุม",
    backcolor: "พื้นหลังค่าเริ่มต้น",
    hovercolor: "พื้นหลังเมื่อชี้เมาส์",
    borderDecoration: "การตกแต่งขอบ",
    fontColor: "สีฟอนต์",
    backgroundColor: "สีพื้นหลัง",
    primaryForecolor: "สีค่าเริ่มต้น",
    primaryForecolorLight: "สีเมื่อปิดใช้งาน",
    font: "ฟอนต์",
    borderDefault: "สีเข้ม",
    borderLight: "สีอ่อน",
    fontFamily: "ครอบครัวฟอนต์",
    fontWeightRegular: "ปกติ",
    fontWeightHeavy: "หนัก",
    fontWeightSemiBold: "กึ่งหนา",
    fontWeightBold: "หนา",
    color: "สี",
    placeholderColor: "สีข้อความสำรอง",
    size: "ขนาด",
    opacity: "ความโปร่งใส",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "เพิ่มเอฟเฟกต์เงา",
    boxShadowBlur: "เบลอ",
    boxShadowSpread: "กระจาย",
    boxShadowDrop: "หล่น",
    boxShadowInner: "ภายใน",
    names: {
      default: "ค่าเริ่มต้น",
      sharp: "คม",
      borderless: "ไม่มีขอบ",
      flat: "แบน",
      plain: "ธรรมดา",
      doubleborder: "ขอบสองชั้น",
      layered: "มีชั้น",
      solid: "ทึบ",
      threedimensional: "3 มิติ",
      contrast: "คอนทราสต์"
    },
    colors: {
      teal: "เขียวอมฟ้า",
      blue: "น้ำเงิน",
      purple: "ม่วง",
      orchid: "กล้วยไม้",
      tulip: "ทิวลิป",
      brown: "น้ำตาล",
      green: "เขียว",
      gray: "เทา"
    }
  },
  creatortheme: {
    "--sjs-special-background": "พื้นหลังพื้นผิว",
    "--sjs-primary-background-500": "ประถม",
    "--sjs-secondary-background-500": "รอง",
    surfaceScale: "พื้นผิว",
    userInterfaceBaseUnit: "ส่วนติดต่อผู้ใช้",
    fontScale: "แบบอักษร",
    names: {
      sc2020: "ผู้สร้างแบบสํารวจ 2020",
      "default-light": "แสง",
      "default-dark": "มืด",
      "default-contrast": "ความแตกต่าง"
    }
  }
};

setupLocale({ localeCode: "th", strings: thStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "ตรวจสอบฟิลด์ว่างเมื่อเสียโฟกัส"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "เปิดใช้งานตัวเลือกนี้เพื่อทริกเกอร์การตรวจสอบความถูกต้องเมื่อผู้ใช้มุ่งเน้นไปที่ฟิลด์อินพุตที่ว่างเปล่า แล้วปล่อยออกจากฟิลด์โดยไม่ทําการเปลี่ยนแปลงใดๆ"
// progressBarInheritWidthFrom.survey: "Same as survey" => "เช่นเดียวกับแบบสํารวจ"
// progressBarInheritWidthFrom.container: "Same as container" => "เหมือนกับคอนเทนเนอร์"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "แสดงตัวอย่างภาพขนาดย่อสําหรับไฟล์ที่อัปโหลดเมื่อเป็นไปได้ ยกเลิกการเลือกหากคุณต้องการแสดงไอคอนไฟล์แทน"
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "ตัวเลือก \"เหมือนกับคอนเทนเนอร์\" จะปรับความกว้างของพื้นที่แถบความคืบหน้าโดยอัตโนมัติเพื่อให้พอดีกับองค์ประกอบ HTML ที่วางแบบสํารวจ"
// p.progressBarInheritWidthFrom: "Progress bar area width" => "ความกว้างของพื้นที่แถบความคืบหน้า"
// maskType.none: "None" => "ไม่มีใคร"
// maskType.pattern: "Pattern" => "แบบ"
// maskType.numeric: "Numeric" => "ตัวเลข"
// maskType.datetime: "Date and Time" => "วันที่และเวลา"
// maskType.currency: "Currency" => "เงินตรา"

// inputTextAlignment.auto: "Auto" => "รถ"
// inputTextAlignment.left: "Left" => "ซ้าย"
// inputTextAlignment.right: "Right" => "ขวา"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "เลือกวิธีจัดตําแหน่งค่าอินพุตภายในฟิลด์ การตั้งค่าเริ่มต้น \"อัตโนมัติ\" จะจัดตําแหน่งค่าอินพุตไปทางขวาหากมีการใช้การปิดบังสกุลเงินหรือตัวเลข และไปทางซ้ายหากไม่ใช้"
// p.inputTextAlignment: "Input value alignment" => "การจัดตําแหน่งค่าอินพุต"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "แสดงแถบความคืบหน้า"
// paneldynamic.showProgressBar: "Show the progress bar" => "แสดงแถบความคืบหน้า"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "การจัดตําแหน่งแถบความคืบหน้า"
// pv.carousel: "Carousel" => "ม้าหมุน"
// progressBarLocation.top: "Top" => "ด้านบน"
// progressBarLocation.bottom: "Bottom" => "ก้น"
// progressBarLocation.topBottom: "Top and bottom" => "ด้านบนและด้านล่าง"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "จัดเรียงตัวเลือกตัวเลือกในรูปแบบหลายคอลัมน์ เมื่อตั้งค่าเป็น 0 ตัวเลือกจะแสดงในบรรทัดเดียว เมื่อตั้งค่าเป็น -1 ค่าจริงจะถูกสืบทอดมาจากคุณสมบัติ \"จํานวนคอลัมน์ที่ซ้อนกัน\" ของเมทริกซ์หลัก"
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "ไม่รองรับลิงก์ YouTube"
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "เริ่มกําหนดค่าฟอร์มของคุณ"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "คลิกไอคอนหมวดหมู่ใดก็ได้เพื่อสํารวจการตั้งค่าแบบสํารวจ การตั้งค่าเพิ่มเติมจะพร้อมใช้งานเมื่อคุณเพิ่มองค์ประกอบแบบสํารวจลงในพื้นผิวการออกแบบ"
// pe.caseInsensitive: "Case insensitive" => "ไม่คํานึงถึงตัวพิมพ์เล็กและตัวพิมพ์ใหญ่"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "เลือกว่าตัวพิมพ์ใหญ่และตัวพิมพ์เล็กในนิพจน์ทั่วไปต้องถือว่าเทียบเท่าหรือไม่"

// ed.surveyPlaceholderTitle: "Your form is empty" => "แบบฟอร์มของคุณว่างเปล่า"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "แบบฟอร์มของคุณว่างเปล่า"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง"
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "ลากองค์ประกอบจากกล่องเครื่องมือหรือคลิกปุ่มด้านล่าง"
// ed.previewPlaceholderTitle: "No preview" => "ไม่มีการแสดงตัวอย่าง"
// ed.previewPlaceholderTitleMobile: "No preview" => "ไม่มีการแสดงตัวอย่าง"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "แบบสํารวจไม่มีองค์ประกอบที่มองเห็นได้"
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "แบบสํารวจไม่มีองค์ประกอบที่มองเห็นได้"
// ed.translationsPlaceholderTitle: "No strings to translate" => "ไม่มีข้อผูกมัดให้แปล"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "ไม่มีข้อผูกมัดให้แปล"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "เพิ่มองค์ประกอบลงในฟอร์มของคุณหรือเปลี่ยนตัวกรองสตริงในแถบเครื่องมือ"
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "เพิ่มองค์ประกอบลงในฟอร์มของคุณหรือเปลี่ยนตัวกรองสตริงในแถบเครื่องมือ"
// lg.logicPlaceholderTitle: "No logical rules" => "ไม่มีกฎตรรกะ"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "ไม่มีกฎตรรกะ"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "สร้างกฎเพื่อปรับแต่งโฟลว์ของแบบสํารวจ"
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "สร้างกฎเพื่อปรับแต่งโฟลว์ของแบบสํารวจ"
// pe.showTimer: "Use a timer" => "ใช้ตัวจับเวลา"
// theme.advancedMode: "Advanced mode" => "โหมดขั้นสูง"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "ตั้งค่าตําแหน่งของตัวจับเวลาบนหน้า"
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "เมื่อตั้งค่าเป็น 0 ความสูงจะถูกคํานวณโดยอัตโนมัติเพื่อรองรับเนื้อหาของส่วนหัว"
// p.mobileHeight: "Height on smartphones" => "ความสูงบนสมาร์ทโฟน"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "เมื่อเปิดใช้งาน ด้านบนของแบบสํารวจจะซ้อนทับด้านล่างของส่วนหัว"
// ed.creatorSettingTitle: "Creator Settings" => "การตั้งค่าครีเอเตอร์"
// tabs.accentColors: "Accent colors" => "สีเน้นเสียง"
// tabs.scaling: "Scaling" => "มาตรา ส่วน"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "กําหนดตัวเลขให้กับคําถามที่ซ้อนกันภายในแผงนี้"
// creatortheme.--sjs-special-background: "Surface background" => "พื้นหลังพื้นผิว"
// creatortheme.--sjs-primary-background-500: "Primary" => "ประถม"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "รอง"
// creatortheme.surfaceScale: "Surface" => "พื้นผิว"
// creatortheme.userInterfaceBaseUnit: "User interface" => "ส่วนติดต่อผู้ใช้"
// creatortheme.fontScale: "Font" => "แบบอักษร"
// names.sc2020: "Survey Creator 2020" => "ผู้สร้างแบบสํารวจ 2020"
// names.default-light: "Light" => "แสง"
// names.default-dark: "Dark" => "มืด"
// names.default-contrast: "Contrast" => "ความแตกต่าง"
// panel.showNumber: "Number this panel" => "หมายเลขแผงนี้"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "เลือกว่าคุณต้องการให้แบบสํารวจเลื่อนไปยังหน้าถัดไปโดยอัตโนมัติเมื่อผู้ตอบคําถามทั้งหมดในหน้าปัจจุบันแล้ว ฟีเจอร์นี้จะไม่มีผลหากคําถามสุดท้ายในหน้าเป็นคําถามปลายเปิดหรืออนุญาตให้มีคําตอบหลายข้อ"
// autocomplete.name: "Full Name" => "ชื่อ-นามสกุล"
// autocomplete.honorific-prefix: "Prefix" => "อุปสรรค"
// autocomplete.given-name: "First Name" => "ชื่อ"
// autocomplete.additional-name: "Middle Name" => "ชื่อกลาง"
// autocomplete.family-name: "Last Name" => "นามสกุล"
// autocomplete.honorific-suffix: "Suffix" => "ปัจจัย"
// autocomplete.nickname: "Nickname" => "ชื่อเล่น"
// autocomplete.organization-title: "Job Title" => "ตําแหน่งงาน"
// autocomplete.username: "User Name" => "ชื่อผู้ใช้"
// autocomplete.new-password: "New Password" => "รหัสผ่านใหม่"
// autocomplete.current-password: "Current Password" => "รหัสผ่านปัจจุบัน"
// autocomplete.organization: "Organization Name" => "ชื่อองค์กร"
// autocomplete.street-address: "Full Street Address" => "ที่อยู่แบบเต็ม"
// autocomplete.address-line1: "Address Line 1" => "บรรทัดที่อยู่ 1"
// autocomplete.address-line2: "Address Line 2" => "บรรทัดที่อยู่ 2"
// autocomplete.address-line3: "Address Line 3" => "บรรทัดที่อยู่ 3"
// autocomplete.address-level4: "Level 4 Address" => "ที่อยู่ระดับ 4"
// autocomplete.address-level3: "Level 3 Address" => "ที่อยู่ระดับ 3"
// autocomplete.address-level2: "Level 2 Address" => "ที่อยู่ระดับ 2"
// autocomplete.address-level1: "Level 1 Address" => "ที่อยู่ระดับ 1"
// autocomplete.country: "Country Code" => "รหัสประเทศ"
// autocomplete.country-name: "Country Name" => "ชื่อประเทศ"
// autocomplete.postal-code: "Postal Code" => "รหัสไปรษณีย์"
// autocomplete.cc-name: "Cardholder Name" => "ชื่อผู้ถือบัตร"
// autocomplete.cc-given-name: "Cardholder First Name" => "ชื่อผู้ถือบัตร"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "ชื่อกลางของผู้ถือบัตร"
// autocomplete.cc-family-name: "Cardholder Last Name" => "นามสกุลของผู้ถือบัตร"
// autocomplete.cc-number: "Credit Card Number" => "หมายเลขบัตรเครดิต"
// autocomplete.cc-exp: "Expiration Date" => "วันหมดอายุ"
// autocomplete.cc-exp-month: "Expiration Month" => "เดือนหมดอายุ"
// autocomplete.cc-exp-year: "Expiration Year" => "ปีหมดอายุ"
// autocomplete.cc-csc: "Card Security Code" => "รหัสความปลอดภัยของบัตร"
// autocomplete.cc-type: "Credit Card Type" => "ประเภทบัตรเครดิต"
// autocomplete.transaction-currency: "Transaction Currency" => "สกุลเงินของธุรกรรม"
// autocomplete.transaction-amount: "Transaction Amount" => "จํานวนเงินที่ทําธุรกรรม"
// autocomplete.language: "Preferred Language" => "ภาษาที่ต้องการ"
// autocomplete.bday: "Birthday" => "วันเกิด"
// autocomplete.bday-day: "Birthday Day" => "วันเกิด"
// autocomplete.bday-month: "Birthday Month" => "เดือนเกิด"
// autocomplete.bday-year: "Birthday Year" => "ปีเกิด"
// autocomplete.sex: "Gender" => "เพศ"
// autocomplete.url: "Website URL" => "URL ของเว็บไซต์"
// autocomplete.photo: "Profile Photo" => "รูปโปรไฟล์"
// autocomplete.tel: "Telephone Number" => "หมายเลขโทรศัพท์"
// autocomplete.tel-country-code: "Country Code for Phone" => "รหัสประเทศสําหรับโทรศัพท์"
// autocomplete.tel-national: "National Telephone Number" => "หมายเลขโทรศัพท์ในประเทศ"
// autocomplete.tel-area-code: "Area Code" => "รหัสพื้นที่"
// autocomplete.tel-local: "Local Phone Number" => "หมายเลขโทรศัพท์ท้องถิ่น"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "คํานําหน้าโทรศัพท์ท้องถิ่น"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "คําต่อท้ายโทรศัพท์ท้องถิ่น"
// autocomplete.tel-extension: "Phone Extension" => "ส่วนขยายโทรศัพท์"
// autocomplete.email: "Email Address" => "ที่อยู่อีเมล"
// autocomplete.impp: "Instant Messaging Protocol" => "โปรโตคอลการส่งข้อความโต้ตอบแบบทันที"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "ล็อคสถานะขยาย/ยุบสําหรับคําถาม"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "คุณยังไม่มีหน้าใด ๆ"
// pe.addNew@pages: "Add new page" => "เพิ่มหน้าใหม่"
// ed.zoomInTooltip: "Zoom In" => "ซูมเข้า"
// ed.zoomOutTooltip: "Zoom Out" => "ซูมออก"
// tabs.surfaceBackground: "Surface Background" => "พื้นหลังพื้นผิว"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "ใช้คําตอบจากรายการสุดท้ายเป็นค่าเริ่มต้น"
// colors.gray: "Gray" => "เทา"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "การจัดตําแหน่งปุ่มนําทาง"
// pv.allQuestions: "Show all questions" => "แสดงคําถามทั้งหมด"
// pv.answeredQuestions: "Show answered questions only" => "แสดงเฉพาะคําถามที่ตอบแล้ว"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "ตั้งค่าตําแหน่งของปุ่มนําทางบนหน้า"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "ใช้ค่าจากคอลัมน์เมทริกซ์ต่อไปนี้หรือคําถามแผงเป็น ID ตัวเลือก"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "ใช้ค่าจากคอลัมน์เมทริกซ์หรือคําถามแผงต่อไปนี้เป็นข้อความตัวเลือก"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "ในประเภทคําถามแบบเลือกเดี่ยวและหลายตัวเลือก แต่ละตัวเลือกจะมีรหัสและค่าที่แสดง การตั้งค่านี้ระบุว่าคอลัมน์เมทริกซ์หรือคําถามแผงใดควรให้รหัส"
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "ในประเภทคําถามแบบเลือกเดี่ยวและหลายตัวเลือก แต่ละตัวเลือกจะมีรหัสและค่าที่แสดง การตั้งค่านี้ระบุว่าคอลัมน์เมทริกซ์หรือคําถามแผงใดที่ควรให้ข้อความที่แสดง"
// pe.progressBarLocation: "Progress bar alignment" => "การจัดตําแหน่งแถบความคืบหน้า"
// progressBarLocation.topbottom: "Top and bottom" => "ด้านบนและด้านล่าง"
// progressBarLocation.aboveheader: "Above the header" => "เหนือส่วนหัว"
// progressBarLocation.belowheader: "Below the header" => "ด้านล่างส่วนหัว"
// progressBarLocation.off: "Hidden" => "ซ่อน"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "ตั้งค่าตําแหน่งของแถบความคืบหน้า ค่า \"อัตโนมัติ\" จะแสดงแถบความคืบหน้าด้านบนหรือด้านล่างส่วนหัวของแบบสํารวจ"
// survey.readOnly: "Make the survey read-only" => "ทําให้แบบสํารวจเป็นแบบอ่านอย่างเดียว"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "เลือกว่าคุณต้องการป้องกันไม่ให้ผู้ตอบแบบสอบถามกรอกแบบสํารวจหรือไม่"
// paneldynamic.showNumber: "Number the panel" => "หมายเลขแผง"
// question.showNumber: "Number this question" => "ใส่หมายเลขคําถามนี้"
// pe.previewMode: "Preview mode" => "โหมดแสดงตัวอย่าง"
// pe.gridLayoutEnabled: "Enable the grid layout" => "เปิดใช้งานเค้าโครงกริด"
// pe.maskSettings: "Mask settings" => "การตั้งค่าหน้ากาก"
// pe.detailErrorLocation: "Row expansion error message alignment" => "การจัดตําแหน่งข้อความแสดงข้อผิดพลาดในการขยายแถว"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "ตั้งค่าตําแหน่งของข้อความแสดงข้อผิดพลาดสําหรับคําถามที่ซ้อนกันในส่วนรายละเอียด ตัวเลือก \"สืบทอด\" จะใช้การตั้งค่าจากคุณสมบัติ \"การจัดตําแหน่งข้อความแสดงข้อผิดพลาด\""
// pe.gridLayoutColumns: "Grid layout columns" => "คอลัมน์เค้าโครงกริด"
// pe.startPageTitlePlaceholder: "Start Page" => "หน้าเริ่มต้น"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "ความกว้างที่มีประสิทธิภาพ %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "ความกว้างของชื่อคําถาม px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "คุณยังไม่มีคอลัมน์เค้าโครง"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "ระบุจํานวนคอลัมน์ที่แผงนี้ครอบคลุมภายในเค้าโครงกริด"
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "ตารางนี้ให้คุณกําหนดค่าคอลัมน์กริดแต่ละคอลัมน์ภายในแผงควบคุม โดยจะกําหนดเปอร์เซ็นต์ความกว้างสําหรับแต่ละคอลัมน์โดยอัตโนมัติตามจํานวนองค์ประกอบสูงสุดในแถว เมื่อต้องการปรับแต่งเค้าโครงกริด ให้ปรับค่าเหล่านี้ด้วยตนเอง และกําหนดความกว้างของชื่อเรื่องสําหรับคําถามทั้งหมดในแต่ละคอลัมน์"
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "ตัวสร้างแบบสํารวจช่วยให้คุณสามารถปรับความกว้างแบบอินไลน์ขององค์ประกอบฟอร์มด้วยตนเองเพื่อควบคุมเค้าโครง หากสิ่งนี้ไม่ก่อให้เกิดผลลัพธ์ที่ต้องการ คุณสามารถเปิดใช้งานเค้าโครงกริด ซึ่งโครงสร้างสร้างองค์ประกอบโดยใช้ระบบตามคอลัมน์ หากต้องการกําหนดค่าคอลัมน์เค้าโครง ให้เลือกหน้าหรือแผง แล้วใช้ตาราง \"การตั้งค่าคําถาม\" → \"คอลัมน์กริด\" หากต้องการปรับจํานวนคอลัมน์ของคําถาม ให้เลือกและตั้งค่าที่ต้องการในช่อง \"เค้าโครง\" → \"ช่วงคอลัมน์\""
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "ระบุจํานวนคอลัมน์ที่คําถามนี้ครอบคลุมภายในเค้าโครงกริด"
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "ตารางนี้ช่วยให้คุณสามารถกําหนดค่าคอลัมน์กริดแต่ละคอลัมน์บนหน้า โดยจะกําหนดเปอร์เซ็นต์ความกว้างสําหรับแต่ละคอลัมน์โดยอัตโนมัติตามจํานวนองค์ประกอบสูงสุดในแถว เมื่อต้องการปรับแต่งเค้าโครงกริด ให้ปรับค่าเหล่านี้ด้วยตนเอง และกําหนดความกว้างของชื่อเรื่องสําหรับคําถามทั้งหมดในแต่ละคอลัมน์"

// ed.expandTooltip: "Expand" => "ขยาย"
// ed.collapseTooltip: "Collapse" => "ทรุด"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "ตัวอย่าง: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "ตั้งค่าความกว้างที่สอดคล้องกันสําหรับป้ายชื่อสินค้าทั้งหมด ยอมรับค่า CSS (px, %, in, pt เป็นต้น)"
// ed.zoom100Tooltip: "Zoom to 100%" => "ซูมไปที่ 100%"
// ed.addLanguageTooltip: "Add Language" => "เพิ่มภาษา"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "ตั้งค่าจํานวนบรรทัดที่แสดงในพื้นที่ข้อความสําหรับความคิดเห็นของคําถาม หากอินพุตใช้บรรทัดมากขึ้น แถบเลื่อนจะปรากฏขึ้น"
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "ค่าที่แสดงดีฟอลต์สําหรับข้อความไดนามิก"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "ค่าที่แสดงในคําถาม HTML และในชื่อแบบไดนามิกและคําอธิบายขององค์ประกอบแบบสํารวจเมื่อค่าคําถามว่างเปล่า"
// showQuestionNumbers.recursive: "Recursive numbering" => "การกําหนดหมายเลขแบบเรียกซ้ํา"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "ความกว้างของชื่อคําถาม"
// pe.allowCustomChoices: "Allow custom choices" => "อนุญาตตัวเลือกที่กําหนดเอง"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "ตั้งค่าความกว้างที่สอดคล้องกันสําหรับชื่อคําถามเมื่อจัดตําแหน่งทางด้านซ้ายของกล่องคําถาม ยอมรับค่า CSS (px, %, in, pt เป็นต้น)"
// page.name: "A page ID that is not visible to respondents." => "รหัสหน้าเว็บที่ผู้ตอบแบบสอบถามไม่เห็น"
// page.description: "Type a page subtitle." => "พิมพ์คําบรรยายของหน้า"
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "คําอธิบายภาพที่แสดงบนปุ่มนําทางในแถบความคืบหน้าหรือสารบัญ (TOC) หากคุณปล่อยให้ช่องนี้ว่างไว้ ปุ่มนําทางจะใช้ชื่อหน้าหรือชื่อหน้า หากต้องการเปิดใช้งานแถบความคืบหน้าหรือสารบัญ ให้ไปที่ \"แบบสํารวจ\" → \"การนําทาง\""
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "เลือกเพื่อให้ผู้ตอบแบบสอบถามเพิ่มตัวเลือกของตนเองหากตัวเลือกที่ต้องการไม่พร้อมใช้งานในดรอปดาวน์ ตัวเลือกที่กําหนดเองจะถูกจัดเก็บไว้ชั่วคราวในช่วงเวลาของเซสชันเบราว์เซอร์ปัจจุบันเท่านั้น"