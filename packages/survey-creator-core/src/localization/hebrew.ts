import { editorLocalization } from "survey-creator-core";

export var hebrewStrings = {
  // survey templates
  survey: {
    edit: "עריכה",
    externalHelpLink: "צפו ולמדו כיצד ליצור סקרים",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "אנא הזינו שאלה מארגז הכלים כאן.",
    addLogicItem: "צרו כלל להתאמה אישית של זרימת הסקר.",
    copy: "העתק",
    duplicate: "שכפול",
    addToToolbox: "הוסיפו לכלי הכלים",
    deletePanel: "מחיקת לוח",
    deleteQuestion: "מחיקת שאלה",
    convertTo: "המרה ל",
    drag: "גרירת אלמנט",
  },
  // Question types
  qt: {
    default: "ברירת מחדל",
    checkbox: "תיבות סימון",
    comment: "טקסט ארוך",
    imagepicker: "בורר תמונות",
    ranking: "דירוג",
    image: "תמונה",
    dropdown: "תפריט נפתח",
    tagbox: "תפריט נפתח מרובה בחירה",
    file: "העלאת קובץ",
    html: "HTML",
    matrix: "מטריצת בחירה יחידה",
    matrixdropdown: "מטריצת בחירה מרובה",
    matrixdynamic: "מטריצה דינמית",
    multipletext: "תיבות טקסט מרובות",
    panel: "לוח",
    paneldynamic: "לוח דינמי",
    radiogroup: "קבוצת כפתורי רדיו",
    rating: "סולם דירוג",
    text: "קלט בשורה אחת",
    boolean: "כן/לא (בוליאני)",
    expression: "ביטוי (קריאה בלבד)",
    signaturepad: "חתימה",
    buttongroup: "קבוצת כפתורים"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "ברירת מחדל ({0})",
    survey: "סקר",
    settings: "הגדרות",
    settingsTooltip: "פתח הגדרות",
    surveySettings: "הגדרות הסקר",
    surveySettingsTooltip: "הגדרות סקר",
    themeSettings: "הגדרות ערכת העיצוב",
    themeSettingsTooltip: "הגדרות ערכת נושא",
    showPanel: "הצג לוח",
    hidePanel: "הסתר לוח",
    prevSelected: "בחר קודם",
    nextSelected: "בחר בבא בתור",
    prevFocus: "פוקוס קודם",
    nextFocus: "התמקד הבא",
    surveyTypeName: "סקר",
    pageTypeName: "דף",
    panelTypeName: "לוח",
    questionTypeName: "שאלה",
    columnTypeName: "עמודה",
    addNewPage: "הוסף דף חדש",
    moveRight: "גלול ימינה",
    moveLeft: "גלול שמאלה",
    deletePage: "מחק דף",
    editPage: "ערוך דף",
    edit: "ערוך",
    newPageName: "דף",
    newQuestionName: "שאלה",
    newPanelName: "לוח",
    newTextItemName: "טקסט",
    testSurvey: "תצוגה מקדימה",
    themeSurvey: "ערכות נושא",
    defaultV2Theme: "ברירת מחדל",
    modernTheme: "מודרני",
    defaultTheme: "ברירת מחדל (ירושה)",
    testSurveyAgain: "תצוגה מקדימה שוב",
    testSurveyWidth: "רוחב הסקר: ",
    navigateToMsg: "הייתם צריכים לנווט אל",
    logic: "לוגיקה",
    embedSurvey: "הטמע סקר",
    translation: "תרגום",
    saveSurvey: "שמור סקר",
    saveSurveyTooltip: "שמור סקר",
    saveTheme: "שמור ערכת נושא",
    saveThemeTooltip: "שמור ערכת נושא",
    designer: "מעצב",
    jsonEditor: "עורך JSON",
    jsonHideErrors: "הסתר שגיאות",
    jsonShowErrors: "הצג שגיאות",
    undo: "בטל",
    redo: "בצע מחדש",
    undoTooltip: "בטל שינוי אחרון",
    redoTooltip: "בצע מחדש את השינוי",
    showMoreChoices: "הצג עוד",
    showLessChoices: "הצג פחות",
    copy: "העתק",
    cut: "גזור",
    paste: "הדבק",
    copyTooltip: "העתק את הבחירה ללוח הגזירים",
    cutTooltip: "גזור את הבחירה ללוח הגזירים",
    pasteTooltip: "הדבק מלוח הגזירים",
    options: "אפשרויות",
    generateValidJSON: "צור JSON תקין",
    generateReadableJSON: "צור JSON קריא",
    toolbox: "ארגז הכלים",
    "property-grid": "מאפיינים",
    propertyGridFilteredTextPlaceholder: "הקלד כדי לחפש...",
    propertyGridNoResultsFound: "לא נמצאו תוצאות",
    toolboxGeneralCategory: "כללי",
    toolboxChoiceCategory: "שאלות עם בחירה",
    toolboxTextCategory: "שאלות טקסטואליות",
    toolboxContainersCategory: "מכילים",
    toolboxMatrixCategory: "שאלות מטריצה",
    toolboxMiscCategory: "שונות",
    correctJSON: "אנא תקנו את ה-JSON.",
    surveyResults: "תוצאות הסקר",
    surveyResultsTable: "כטבלה",
    surveyResultsJson: "כ-JSON",
    resultsTitle: "כותרת השאלה",
    resultsName: "שם השאלה",
    resultsValue: "ערך התשובה",
    resultsDisplayValue: "ערך תצוגה",
    modified: "שונה",
    saving: "שומר",
    saved: "נשמר",
    propertyEditorError: "שגיאה",
    saveError: "שגיאה! התוכן של העורך לא נשמר.",
    translationPropertyGridTitle: "הגדרות שפה",
    themePropertyGridTitle: "הגדרות ערכת העיצוב",
    translationLanguages: "שפות",
    translationDeleteLanguage: "האם אתה בטוח שברצונך למחוק את כל המחרוזות לשפה זו?",
    translationAddLanguage: "בחר שפה לתרגום",
    translationShowAllStrings: "כל המחרוזות",
    translationShowUsedStringsOnly: "רק מחרוזות בשימוש",
    translationShowAllPages: "כל הדפים",
    translationNoStrings: "אין מחרוזות לתרגום. אנא שנה את הסינון.",
    translationExportToSCVButton: "ייצא ל-CSV",
    translationImportFromSCVButton: "ייבא מ-CSV",
    translateUsigAI: "תרגום אוטומטי של הכל",
    translateUsigAIFrom: "תרגם מ: ",
    translationDialogTitle: "מחרוזות לא מתורגמות",
    translationMergeLocaleWithDefault: "מזג {0} עם הגדרות ברירת המחדל",
    translationPlaceHolder: "תרגום...",
    themeExportButton: "ייצא",
    themeImportButton: "ייבא",
    surveyJsonExportButton: "ייצא",
    surveyJsonImportButton: "ייבוא",
    surveyJsonCopyButton: "העתק ללוח",
    themeResetButton: "אפס הגדרות ערכת העיצוב לברירת המחדל",
    themeResetConfirmation: "האם אתה באמת רוצה לאפס את ערכת הנושא? כל ההתאמות האישיות שלך יאבדו.",
    themeResetConfirmationOk: "כן, אפס את ערכת הנושא",
    bold: "מודגש",
    italic: "נטוי",
    underline: "קו תחתון",
    addNewQuestion: "הוסף שאלה",
    selectPage: "בחר דף...",
    carryForwardChoicesCopied: "הטענות הועתקו מ",
    choicesLoadedFromWebText: "האפשרויות נטענות משירות אינטרנט.",
    choicesLoadedFromWebLinkText: "עבור אל הגדרות",
    choicesLoadedFromWebPreviewTitle: "תצוגה מקדימה של אפשרויות בחירה שנטענו",
    htmlPlaceHolder: "התוכן של HTML יופיע כאן.",
    panelPlaceHolder: "גרר שאלה מתיק כלי הכלים לכאן.",
    surveyPlaceHolder: "הסקר ריק. גרור אלמנט מארגז הכלים או לחץ על הכפתור למטה.",
    imagePlaceHolder: "גרור ושחרר תמונה לכאן או לחץ על הכפתור למטה ובחר תמונה להעלאה",
    imageChooseImage: "בחר תמונה",
    addNewTypeQuestion: "הוסף {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[לוגו]",
    auto: "אוטומטי",
    choices_Item: "פריט ",
    lg: {
      addNewItem: "הוספת כלל חדש",
      empty_tab: "צור כלל כדי להתאים אישית את זרימת הסקר.",
      page_visibilityName: "הצג (הסתר) עמוד",
      page_enableName: "הפוך דף לזמין (הפוך ללא זמין)",
      page_requireName: "הפיכת הדף לנדרש",
      panel_visibilityName: "הצג (הסתר) החלונית",
      panel_enableName: "הפעל (השבית) את החלונית",
      panel_requireName: "הפיכת הדף לנדרש",
      question_visibilityName: "הצג (הסתר) שאלה",
      question_enableName: "הפיכת שאלה לזמינה (השבתה",
      question_requireName: "הפוך את השאלה לנדרשת",
      question_resetValueName: "איפוס ערך שאלה",
      question_setValueName: "הגדרת ערך שאלה",
      column_visibilityName: "הצג (הסתר) עמודה",
      column_enableName: "הפיכת עמודה לזמינה (ללא זמינה)",
      column_requireName: "הפיכת עמודה לנדרשת",
      column_resetValueName: "איפוס ערך עמודה",
      column_setValueName: "הגדרת ערך עמודה",
      trigger_completeName: "הסקר המלא",
      trigger_setvalueName: "הגדר תשובה",
      trigger_copyvalueName: "העתק תשובה",
      trigger_skipName: "דלג לשאלה",
      trigger_runExpressionName: "הפעל ביטוי",
      completedHtmlOnConditionName: "הגדרת סימון דף \"סקר הושלם\"",
      page_visibilityDescription: "הפוך את הדף לגלוי כאשר ביטוי הלוגיקה מחזיר True. אחרת, שמור אותו בלתי נראה.",
      panel_visibilityDescription: "הפוך את החלונית לגלויה כשביטוי הלוגיקה מחזיר True. אחרת, שמור אותו בלתי נראה.",
      panel_enableDescription: "הפוך את החלונית, ואת כל הרכיבים בתוכה, לזמינים כאשר ביטוי הלוגיקה מחזיר True. אחרת, השאר אותם מושבתים.",
      question_visibilityDescription: "הפוך את השאלה לגלויה כאשר ביטוי הלוגיקה חוזר True. אחרת, שמור אותו בלתי נראה.",
      question_enableDescription: "הפוך את השאלה לזמינה כאשר ביטוי הלוגיקה מחזיר True. אחרת, השאר אותו מושבת.",
      question_requireDescription: "השאלה הופכת לנדרשת כאשר ביטוי הלוגיקה מחזיר True.",
      trigger_completeDescription: "כאשר ביטוי הלוגיקה חוזר True, הסקר הושלם ומשתמש קצה רואה את 'דף התודה'.",
      trigger_setvalueDescription: "כאשר ערכי שאלה, המשמשים בביטוי הלוגי, משתנים וביטוי הלוגיקה מחזיר True, הערך מוגדר לשאלה שנבחרה.",
      trigger_copyvalueDescription: "כאשר ערכי שאלה, המשמשים בביטוי הלוגי, משתנים וביטוי הלוגיקה מחזיר True, הערך של שאלה נבחרת אחת מועתק לשאלה נבחרת אחרת.",
      trigger_skipDescription: "כאשר ביטוי הלוגיקה חוזר True אז הסקר מדלג / ממקד את השאלה שנבחרה.",
      trigger_runExpressionDescription: "כאשר ביטוי הלוגיקה מחזיר true, הביטוי המותאם אישית מתבצע. באפשרותך להגדיר תוצאת ביטוי זו בשאלה שנבחרה",
      completedHtmlOnConditionDescription: "אם ביטוי הלוגיקה מחזיר true, טקסט ברירת המחדל עבור 'דף תודה' משתנה לטקסט הנתון.",
      itemExpressionText: "כאשר expression: '{0}' מחזיר ערך True", //{0} - the expression
      itemEmptyExpressionText: "כלל חדש",
      page_visibilityText: "הפיכת {0} הדף לגלויות", //{0} page name
      panel_visibilityText: "הפיכת {0} החלונית לגלויה", //{0} panel name
      panel_enableText: "הפיכת {0} החלונית לזמינה", //{0} panel name
      question_visibilityText: "הפוך את {0} השאלה לגלויה", //{0} question name
      question_enableText: "הפוך שאלה {0} לזמינה", //{0} question name
      question_requireText: "יש צורך בשאלה {0}", //{0} question name
      question_resetValueText: "אפס ערך עבור שאלה: {0}",
      question_setValueText: "הקצאת ערך: {1} לשאלה: {0}",
      column_visibilityText: "הפוך את {0} העמודות של {1} השאלה לגלויות", //{0} column name, {1} question name
      column_enableText: "הפיכת עמודה {0} של שאלה לזמינה {1}", //{0} column name, {1} question name
      column_requireText: "הפוך את {0} העמודות של השאלה {1} לנדרש", //{0} column name, {1} question name
      column_resetValueText: "איפוס ערך תא עבור עמודה: {0}",
      column_setValueText: "הקצאת ערך תא: {1} לעמודה: {0}",
      setValueExpressionPlaceholder: "ביטוי שתוצאתו תוקצה לשאלת היעד.",
      trigger_completeText: "הסקר הושלם",
      trigger_setvalueText: "העמידו בסימן שאלה: ערך {0} {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "ערך שאלה ברור: {0}", //{0} question name
      trigger_copyvalueText: "העתק לשאלה: ערך {0} משאלה {1}", //{0} and {1} question names
      trigger_skipText: "סקר דלג לשאלה {0}", //{0} question name
      trigger_runExpressionText1: "ביטוי הפעלה: '{0}'", //{0} the expression
      trigger_runExpressionText2: " ולהעמיד את תוצאתו בסימן שאלה: {0}", //{0} question name
      completedHtmlOnConditionText: "הצג טקסט מותאם אישית עבור 'דף תודה'.",
      showAllQuestions: "כל השאלות",
      showAllActionTypes: "כל סוגי הפעולות",
      conditions: "תנאים(ים)",
      actions: "פעולה(ות)",
      expressionEditorTitle: "הגדרת תנאים",
      actionsEditorTitle: "הגדרת פעולות",
      deleteAction: "מחיקת פעולה",
      addNewAction: "הוסף פעולה",
      selectedActionCaption: "בחר פעולה...",
      expressionInvalid: "ביטוי הלוגיקה ריק או לא חוקי. אנא תקן זאת.",
      noActionError: "אנא, הוסף לפחות פעולה אחת.",
      actionInvalid: "אנא, תקן בעיות בפעולות שלך.",
      uncompletedRule_title: "כללים לוגיים אינם שלמים",
      uncompletedRule_text: "לא השלמת חלק מהכללים הלוגיים. אם תעזוב את הכרטיסיה כעת, השינויים יאבדו. האם אתה עדיין רוצה לעזוב את הכרטיסייה מבלי להשלים את השינויים?",
      uncompletedRule_apply: "כן",
      uncompletedRule_cancel: "לא, אני רוצה להשלים את הכללים"
    }
  },
  // Property Editors
  pe: {
    apply: "החל",
    ok: "אוקי",
    save: "שמור",
    clear: "נקה",
    saveTooltip: "שמור",
    cancel: "בטל",
    set: "הגדר",
    reset: "איפוס",
    change: "שנה",
    refresh: "רענן",
    close: "סגור",
    delete: "מחק",
    add: "הוסף",
    addNew: "הוסף חדש",
    addItem: "לחץ להוספת פריט...",
    removeItem: "לחץ להסרת הפריט...",
    dragItem: "גרור את הפריט",
    addOther: "אחר",
    addSelectAll: "בחר הכל",
    addNone: "אף אחד",
    removeAll: "הסר הכל",
    edit: "ערוך",
    back: "חזור ללא שמירה",
    backTooltip: "חזור ללא שמירה",
    saveAndBack: "שמור וחזור",
    saveAndBackTooltip: "שמור וחזור",
    doneEditing: "סיום",
    editChoices: "ערוך ברירות בחירה",
    showChoices: "הצג ברירות בחירה",
    move: "הזז",
    empty: "<ריק>",
    emptyValue: "הערך ריק",
    fastEntry: "הזנה ידנית",
    fastEntryNonUniqueError: "הערך '{0}' אינו ייחודי",
    fastEntryChoicesCountError: "אנא הגבל את מספר הפריטים מ-{0} ל-{1}",
    fastEntryChoicesMinCountError: "אנא הכנס לפחות {0} פריטים",
    fastEntryPlaceholder: "תוכל להזין נתונים בפורמט הבא:\nערך1|טקסט1\nערך2|טקסט2",
    formEntry: "הזנת טופס",
    testService: "בדוק את השירות",
    itemSelectorEmpty: "בחר את האלמנט",
    conditionActionEmpty: "בחר את הפעולה",
    conditionSelectQuestion: "בחר שאלה...",
    conditionSelectPage: "בחר עמוד...",
    conditionSelectPanel: "בחר פאנל...",
    conditionValueQuestionTitle: "אנא הכנס/בחר את הערך",
    expressionHelp: "השתמש בסוגריים מסולסלים כדי לגשת לתשובות: `{שאלה1} + {שאלה2}`. הביטויים תומכים גם בפונקציות: `iif()`, `today()`, `age()`, `min()`, `max()`, `count()`, `avg()`, ואחרות",
    aceEditorHelp: "לחץ על ctrl+space כדי לקבל הצעות להשלמה של הביטוי",
    aceEditorRowTitle: "שורה נוכחית",
    aceEditorPanelTitle: "פאנל נוכחי",
    showMore: "לקבלת פרטים נוספים, אנא בדוק את התיעוד",
    assistantTitle: "שאלות זמינות",
    cellsEmptyRowsColumns: "חייב להיות לפחות עמודה או שורה אחת",
    showPreviewBeforeComplete: "הצג תצוגה מקדימה לפני השלמת הסקר",
    overridingPropertyPrefix: "נקבע על ידי ",
    resetToDefaultCaption: "איפוס",
    propertyIsEmpty: "אנא הכנס ערך",
    propertyIsNoUnique: "אנא הכנס ערך ייחודי",
    propertyNameIsNotUnique: "אנא הכנס שם ייחודי",
    propertyNameIsIncorrect: "אין להשתמש במילים שמורות: \"item\", \"choice\", \"panel\", \"row\".",
    listIsEmpty: "טרם הוספו פריטים",
    "listIsEmpty@choices": "טרם הוספו ברירות בחירה",
    "addNew@choices": "הוסף ברירת בחירה",
    expressionIsEmpty: "הביטוי ריק",
    value: "ערך",
    text: "טקסט",
    rowid: "מזהה שורה",
    imageLink: "קישור לתמונה או וידיאו",
    columnEdit: "ערוך עמודה: {0}",
    itemEdit: "ערוך פריט: {0}",
    url: "כתובת URL של השירות",
    path: "נתיב למידע במקור השירות",
    valueName: "אחסן תשובות בשדה JSON הבא",
    choicesbyurl: {
      valueName: "קבל ערכים משדה JSON הבא"
    },
    titleName: "קבל טקסטים להצגה משדה JSON הבא",
    imageLinkName: "קבל קישורים לתמונות משדה JSON הבא",
    allowEmptyResponse: "אפשר תשובה ריקה",
    titlePlaceholder: "כותרת",
    surveyTitlePlaceholder: "כותרת הסקר",
    pageTitlePlaceholder: "עמוד {num}",
    descriptionPlaceholder: "תיאור",
    surveyDescriptionPlaceholder: "תיאור הסקר",
    pageDescriptionPlaceholder: "תיאור העמוד",
    showOtherItem: "אפשר אפשרות אחרת",
    otherText: "טקסט לאפשרות אחרת",
    showNoneItem: "אפשר אפשרות 'אף אחד'",
    showRefuseItem: "אפשר את האפשרות סרב לענות",
    showDontKnowItem: "אפשר את האפשרות 'לא יודע'",
    noneText: "טקסט לאפשרות 'אף אחד'",
    showSelectAllItem: "אפשר אפשרות 'בחר הכל'",
    selectAllText: "טקסט לאפשרות 'בחר הכל'",
    choicesMin: "ערך מינימלי לפריטים שנוצרים אוטומטית",
    choicesMax: "ערך מקסימלי לפריטים שנוצרים אוטומטית",
    choicesStep: "צעד לפריטים שנוצרים אוטומטית",
    name: "שם",
    title: "כותרת",
    cellType: "סוג התא",
    colCount: "מספר העמודות",
    choicesOrder: "סדר מיון של ברירות הבחירה",
    visible: "נראה",
    isRequired: "נדרש",
    markRequired: "סמן כשדה חובה",
    removeRequiredMark: "הסר את הסימון כשדה חובה",
    isAllRowRequired: "חובה על תשובה בכל השורות",
    eachRowUnique: "מניעת תגובות כפולות בשורות",
    requiredErrorText: "הודעת שגיאה לשדה חובה",
    startWithNewLine: "הצג את השאלה בשורה חדשה",
    rows: "שורות",
    cols: "עמודות",
    placeholder: "מקום להזנה",
    showPreview: "הצג אזור תצוגה מקדימה",
    storeDataAsText: "אחסן תוכן קובץ בתוצאת JSON כטקסט",
    maxSize: "גודל הקובץ המרבי (בבתים)",
    imageHeight: "גובה התמונה",
    imageWidth: "רוחב התמונה",
    rowCount: "כמות השורות",
    columnLayout: "סידור העמודות",
    addRowLocation: "מיקום כפתור הוסף שורה",
    addRowText: "טקסט לכפתור הוסף שורה",
    removeRowText: "טקסט לכפתור הסר שורה",
    rateMin: "ערך מינימלי לדרגה",
    rateMax: "ערך מקסימלי לדרגה",
    rateStep: "צעד דרגה",
    minRateDescription: "תיאור ערך מינימלי לדרגה",
    maxRateDescription: "תיאור ערך מקסימלי לדרגה",
    inputType: "סוג הקלט",
    optionsCaption: "טקסט מציין אפשרויות",
    defaultValue: "תשובת ברירת המחדל",
    cellsDefaultRow: "טקסטים ברירת המחדל",
    surveyEditorTitle: "ערוך הגדרות סקר",
    qEditorTitle: "ערוך: {0}",
    maxLength: "אורך מרבי (בתווים)",
    buildExpression: "בנה",
    editExpression: "ערוך",
    and: "וגם",
    or: "או",
    remove: "הסר",
    addCondition: "הוסף תנאי",
    emptyLogicPopupMessage: "בחר שאלה להתחלת הגדרת תנאים.",
    if: "אם",
    then: "אז",
    setToName: "שאלת יעד",
    fromName: "שאלה להעתיק ממנה את התשובה",
    gotoName: "שאלה לדלג אליה",
    ruleIsNotSet: "הכלל אינו נקבע",
    includeIntoResult: "כלול בתוצאות הסקר",
    showTitle: "הצג את הכותרת",
    expandCollapseTitle: "הרחב/כווץ את הכותרת",
    locale: "שפת הסקר",
    simulator: "בחר סוג מכשיר",
    landscapeOrientation: "עבור לתצוגה אופקית",
    portraitOrientation: "עבור לתצוגה אנכית",
    mode: "עריכה או לקריאה בלבד",
    clearInvisibleValues: "נקה ערכים בלתי נראים",
    cookieName: "שם העוגיה",
    sendResultOnPageNext: "שמור תוצאות סקר חלקיות בתהליך",
    storeOthersAsComment: "אחסן את ערך 'אחר' בשדה נפרד",
    showPageTitles: "הצג כותרות עמוד",
    showPageNumbers: "הצג מספרי עמוד",
    pagePrevText: "טקסט לכפתור 'עמוד קודם'",
    pageNextText: "טקסט לכפתור 'עמוד הבא'",
    completeText: "טקסט לכפתור 'סיום סקר'",
    previewText: "טקסט לכפתור 'תצוגה מקדימה לתשובות'",
    editText: "טקסט לכפתור 'ערוך תשובה'",
    startSurveyText: "טקסט לכפתור 'התחל סקר'",
    showNavigationButtons: "מיקום לכפתורי ניווט",
    showPrevButton: "הצג את לחצן 'עמוד קודם'",
    firstPageIsStarted: "העמוד הראשון הוא עמוד התחלה",
    showCompletedPage: "הצג עמוד 'סקר הושלם'",
    goNextPageAutomatic: "עבור אוטומטית לעמוד הבא",
    showProgressBar: "מיקום שורת ההתקדמות",
    questionTitleLocation: "מיקום כותרת השאלה",
    requiredText: "סמן נדרש(ים)",
    questionStartIndex: "אינדקס התחלה (מספר או אות)",
    showQuestionNumbers: "מספור שאלות",
    questionTitleTemplate: "תבנית כותרת השאלה, ברירת המחדל היא: '{no}. {require} {title}'",
    questionErrorLocation: "מיקום הודעת השגיאה",
    focusFirstQuestionAutomatic: "התמקד על השאלה הראשונה בעמוד חדש",
    questionsOrder: "סדר הרכיבים בעמוד",
    maxTimeToFinish: "גבול זמן לסיום הסקר (בשניות)",
    maxTimeToFinishPage: "גבול זמן לסיום עמוד אחד (בשניות)",
    image: {
      imageHeight: "גובה התמונה (בערכים שמתקבלים ב- CSS)",
      imageWidth: "רוחב התמונה (בערכים שמתקבלים ב- CSS)"
    },
    // survey templates
    survey: {
      title: "כותר"
    },
    page: {
      title: "כותר",
      maxTimeToFinish: "גבול זמן לסיום העמוד (בשניות)"
    },
    question: {
      page: "עמוד הורה"
    },
    panel: {
      page: "עמוד הורה",
      indent: "הוסף כניסות חיצוניות"
    },
    showTimerPanel: "מיקום הטיימר",
    showTimerPanelMode: "מצב הטיימר",
    renderMode: "מצב תצוגת הפאנל",
    allowAddPanel: "אפשר הוספת פאנלים",
    allowRemovePanel: "אפשר הסרת פאנלים",
    noEntriesText: "טקסט ריק ברשומות",
    panelAddText: "טקסט לכפתור 'הוסף פאנל'",
    panelRemoveText: "טקסט לכפתור 'הסר פאנל'",
    isSinglePage: "הצג את כל הרכיבים בעמוד אחד",
    html: "קוד HTML",
    expression: "ביטוי",
    setValue: "תשובה",
    dataFormat: "פורמט תמונה",
    allowAddRows: "אפשר הוספת שורות",
    allowRemoveRows: "אפשר הסרת שורות",
    allowRowsDragAndDrop: "אפשר גרירה ושחרור שורות",
    responsiveImageSizeHelp: "לא יחול אם אתה מציין את רוחב או גובה התמונה באופן ישיר.",
    minImageWidth: "רוחב תמונה מינימלי",
    maxImageWidth: "רוחב תמונה מקסימלי",
    minImageHeight: "גובה תמונה מינימלי",
    maxImageHeight: "גובה תמונה מקסימלי",
    minValue: "ערך מינימלי",
    maxValue: "ערך מקסימלי",
    minLength: "אורך מינימלי (בתווים)",
    allowDigits: "אפשר ספרות",
    minCount: "מינימום כמות",
    maxCount: "מקסימום כמות",
    regex: "ביטוי רגולרי",
    surveyvalidator: {
      text: "הודעת שגיאה",
      expression: "ביטוי אימות"
    },
    totalText: "טקסט לשורת סיכום",
    totalType: "סוג סיכום",
    totalExpression: "ביטוי סיכום",
    totalDisplayStyle: "סגנון תצוגת ערך סיכום",
    totalCurrency: "מטבע",
    totalFormat: "מחרוזת מסוגננת",
    logo: "לוגו (כתובת URL או מחרוזת base64-מוצפנת)",
    questionsOnPageMode: "מבנה הסקר",
    maxTextLength: "אורך מקסימלי לתשובה (בתווים)",
    maxOthersLength: "אורך מקסימלי להערות (בתווים)",
    autoGrowComment: "הרחבה אוטומטית של אזור ההערות כראוי",
    allowResizeComment: "אפשר התאמה ידנית של אזורי טקסט על ידי המשתמש",
    textUpdateMode: "עדכן את ערך הטקסט של השאלה",
    focusOnFirstError: "קפיצה לתשובה השגויה הראשונה",
    checkErrorsMode: "הפעל את האימות",
    navigateToUrl: "נווט לכתובת URL",
    navigateToUrlOnCondition: "כתובת URL דינמית",
    completedBeforeHtml: "קוד HTML להצגה אם המשתמש כבר מילא את הסקר הזה",
    completedHtml: "קוד HTML לעמוד הסקר הושלם",
    completedHtmlOnCondition: "קוד HTML דינמי לעמוד הסקר הושלם",
    loadingHtml: "קוד HTML להצגה בזמן טעינת דגם הסקר",
    commentText: "טקסט אזור הערות",
    autocomplete: "סוג השלמה אוטומטית",
    labelTrue: "תוית 'נכון'",
    labelFalse: "תוית 'לא נכון'",
    allowClear: "הצג את לחצן הניקוי",
    displayStyle: "סגנון תצוגת ערך",
    format: "מחרוזת מסוגננת",
    maximumFractionDigits: "ספרות עשרוניות מקסימליות",
    minimumFractionDigits: "ספרות עשרוניות מינימליות",
    useGrouping: "הצג סימני קבוצה",
    allowMultiple: "אפשר קבצים מרובים",
    allowImagesPreview: "תצוגה מקדימה של תמונות",
    acceptedTypes: "סוגי קבצים מקובלים",
    waitForUpload: "המתן להשלמת ההעלאה",
    needConfirmRemoveFile: "אישור מחיקת הקובץ",
    detailPanelMode: "מקום הפאנל המפרט",
    minRowCount: "מספר שורות מינימלי",
    maxRowCount: "מספר שורות מקסימלי",
    confirmDelete: "אישור מחיקת שורה",
    confirmDeleteText: "הודעת אישור",
    paneldynamic: {
      confirmDelete: "אישור מחיקת פאנל"
    },
    panelCount: "מספר פאנלים ראשוני",
    minPanelCount: "מספר פאנלים מינימלי",
    maxPanelCount: "מספר פאנלים מקסימלי",
    panelsState: "מצב הרחבת הפאנל הפנימי",
    templateDescription: "תיאור התבנית",
    templateTitle: "כותרת התבנית",
    panelPrevText: "טקסט הרחבת הפאנל הקודם",
    panelNextText: "טקסט הרחבת הפאנל הבא",
    showRangeInProgress: "הצג את סרגל ההתקדמות",
    templateTitleLocation: "מיקום כותרת השאלה",
    panelRemoveButtonLocation: "מיקום לחצן 'הסר פאנל'",
    hideIfRowsEmpty: "הסתר את השאלה אם אין שורות",
    hideColumnsIfEmpty: "הסתר עמודות אם אין שורות",
    rateValues: "ערכי דירוג מותאמים אישית",
    rateCount: "כמות הדירוגים",
    autoGenerate: "איך לציין ערכי דירוג?",
    hideIfChoicesEmpty: "הסתר את השאלה אם אין בה בחירות",
    hideNumber: "הסתר מספר שאלה",
    minWidth: "רוחב מינימלי (בערכים שמקובלים ב- CSS)",
    maxWidth: "רוחב מקסימלי (בערכים שמקובלים ב- CSS)",
    width: "רוחב (בערכים שמקובלים ב- CSS)",
    showHeader: "הצג כותרות עמודות",
    horizontalScroll: "הצג את סרגל הגלילה האופקי",
    columnMinWidth: "רוחב עמודה מינימלי (בערכים שמקובלים ב- CSS)",
    rowTitleWidth: "רוחב כותרת השורה (בערכים שמקובלים ב- CSS)",
    valueTrue: "ערך 'נכון'",
    valueFalse: "ערך 'לא נכון'",
    minErrorText: "הודעת שגיאה: 'הערך נמוך מהמינימום'",
    maxErrorText: "הודעת שגיאה: 'הערך חורג מהמקסימום'",
    otherErrorText: "הודעת שגיאה: 'תגובה ריקה'",
    keyDuplicationError: "הודעת שגיאה: 'ערך המפתח אינו ייחודי'",
    minSelectedChoices: "מספר הבחירות המינימלי",
    maxSelectedChoices: "מספר הבחירות המקסימלי",
    showClearButton: "הצג את לחצן הניקוי",
    showNumber: "הצג מספר פאנל",
    logoWidth: "רוחב הלוגו (בערכים שמקובלים ב- CSS)",
    logoHeight: "גובה הלוגו (בערכים שמקובלים ב- CSS)",
    readOnly: "קריאה בלבד",
    enableIf: "ניתן לעריכה אם",
    emptyRowsText: "הודעה: 'אין שורות'",
    size: "גודל שדה הקלט (בתווים)",
    separateSpecialChoices: "הפרד בחירות מיוחדות (אף אחת, אחר, בחר הכול)",
    choicesFromQuestion: "העתק בחירות משאלה זו",
    choicesFromQuestionMode: "אילו בחירות להעתיק?",
    showCommentArea: "הצג את אזור התגובה",
    commentPlaceholder: "טקסט ממלא מקום לאזור התגובה",
    displayRateDescriptionsAsExtremeItems: "הצג תיאורי דירוג כערכים קצה",
    rowsOrder: "סדר השורות",
    columnsLayout: "פריסת עמודות",
    columnColCount: "ספירת עמודות מקוננות",
    state: "מצב הרחבת הפאנל",
    correctAnswer: "תשובה נכונה",
    defaultPanelValue: "ערכים ברירת מחדל",
    cells: "טקסטי תאים",
    keyName: "עמודת מפתח",
    itemvalue: {
      text: "טקסט אלטרנטיבי"
    },
    logoPosition: "מיקום הלוגו",
    addLogo: "הוסף לוגו...",
    changeLogo: "שנה לוגו...",
    logoPositions: {
      none: "הסר לוגו",
      left: "שמאלה",
      right: "ימינה",
      top: "מלמעלה",
      bottom: "מלמטה"
    },
    tabs: {
      general: "כללי",
      fileOptions: "אפשרויות",
      html: "עורך HTML",
      columns: "עמודות",
      rows: "שורות",
      choices: "בחירות",
      items: "פריטים",
      visibleIf: "נראה אם",
      enableIf: "ניתן לערוך אם",
      requiredIf: "חובה אם",
      rateValues: "ערכי דירוג",
      choicesByUrl: "בחירות משירות RESTful",
      matrixChoices: "בחירות דיפולטיות",
      multipleTextItems: "קלטי טקסט",
      numbering: "מספור",
      validators: "אמינות",
      navigation: "ניווט",
      question: "שאלה",
      pages: "עמודים",
      timer: "שעון/חידון",
      calculatedValues: "ערכים מחושבים",
      triggers: "טריגרים",
      templateTitle: "תבנית כותרת",
      totals: "סכומים",
      logic: "לוגיקה",
      layout: "פריסה",
      data: "נתונים",
      validation: "אימות",
      cells: "טקסטי תאים",
      showOnCompleted: "השאלון הושלם",
      logo: "לוגו בכותרת השאלון",
      slider: "מחוון",
      expression: "ביטוי",
      others: "אחרים"
    },
    editProperty: "עריכת מאפיין '{0}'",
    items: "פריטים",
    choicesVisibleIf: "הבחירות יוצגו אם",
    choicesEnableIf: "ניתן לבחור את האפשרויות אם",
    columnsEnableIf: "העמודות יוצגו אם",
    rowsEnableIf: "השורות יוצגו אם",
    indent: "הוסף כניסות",
    innerIndent: "הוסף כניסות פנימיות",
    defaultValueFromLastRow: "קבל ערכי ברירת מחדל מהשורה האחרונה",
    defaultValueFromLastPanel: "קבל ערכי ברירת מחדל מהפאנל האחרון",
    enterNewValue: "נא להזין את הערך.",
    noquestions: "אין שאלות בשאלון.",
    createtrigger: "יש ליצור מפעיל",
    titleKeyboardAdornerTip: "לחץ על כפתור Enter לעריכה",
    keyboardAdornerTip: "לחץ על כפתור Enter לעריכת פריט, לחץ על מקש מחיקה למחיקת פריט, לחץ על Alt + חץ למעלה או חץ למטה להעברת פריט",
    triggerOn: "ב-",
    triggerMakePagesVisible: "הצג עמודים",
    triggerMakeQuestionsVisible: "הצג רכיבים",
    triggerCompleteText: "השלם את השאלון אם הצליח.",
    triggerNotSet: "המפעיל לא הוגדר",
    triggerRunIf: "הפעל אם",
    triggerSetToName: "שנה את הערך של: ",
    triggerFromName: "העתק את הערך מ: ",
    triggerRunExpression: "הפעל ביטוי זה",
    triggerSetValue: "ל: ",
    triggerGotoName: "עבור לשאלה",
    triggerIsVariable: "אל תכלול את המשתנה בתוצאה של השאלון.",
    triggerRunExpressionEmpty: "יש להזין ביטוי חוקי",
    emptyExpressionPlaceHolder: "הקלד ביטוי כאן...",
    noFile: "לא נבחר קובץ",
    clearIfInvisible: "נקה את הערך אם השאלה הופכת חבויה",
    valuePropertyName: "שם מאפיין ערך",
    searchEnabled: "אפשר חיפוש",
    hideSelectedItems: "הסתר פריטים נבחרים",
    closeOnSelect: "סגור את התפריט לאחר בחירה",
    signatureWidth: "רוחב חתימה",
    signatureHeight: "גובה חתימה",
    verticalAlign: "יישור אנכי",
    alternateRows: "שורות חלופיות",
    columnsVisibleIf: "העמודות יוצגו אם",
    rowsVisibleIf: "השורות יוצגו אם",
    otherPlaceholder: "מציין מקום לתגובה",
    signaturepad: {
      showPlaceholder: "הצגת מציין המיקום",
      placeholder: "טקסט מציין מיקום",
      signatureWidth: "רוחב אזור חתימה",
      signatureHeight: "גובה אזור חתימה",
      signatureAutoScaleEnabled: "שינוי גודל אוטומטי של אזור החתימה",
      penMinWidth: "רוחב עט מינימלי",
      penMaxWidth: "רוחב עט מרבי"
    },
    filePlaceholder: "טקסט מציין מיקום קובץ",
    photoPlaceholder: "טקסט מציין מיקום תמונה",
    fileOrPhotoPlaceholder: "טקסט מציין מיקום של קובץ או תמונה",
    rateType: "סוג דירוג"
  },
  // Property values
  pv: {
    "true": "אמת",
    "false": "שקר",
    file: "קבצים מקומיים",
    camera: "מצלמה",
    "file-camera": "קבצים מקומיים או מצלמה",
    inherit: "ירושה",
    show: "נראה",
    hide: "מוסתר",
    default: "ירושה",
    initial: "התחלתי",
    random: "אקראי",
    collapsed: "מכווץ",
    expanded: "מורחב",
    none: "ללא",
    asc: "סדר עולה",
    desc: "סדר יורד",
    indeterminate: "לא קבוע",
    decimal: "עשרוני",
    currency: "מטבע",
    percent: "אחוזים",
    firstExpanded: "הפאנל הראשון מורחב",
    off: "הסתר מספרי שאלות",
    onpanel: "התחל בכל פאנל",
    onPanel: "התחל בכל פאנל",
    onSurvey: "המשך לאורך כל השאלון",
    list: "רשימה",
    progressTop: "ניווט בפאנל + סרגל התקדמות בחלק העליון",
    progressBottom: "ניווט בפאנל + סרגל התקדמות בחלק התחתון",
    progressTopBottom: "ניווט בפאנל + סרגל התקדמות בחלק העליון והתחתון",
    tab: "כרטיסיות",
    horizontal: "אופקי",
    vertical: "אנכי",
    top: "עליון",
    bottom: "תחתון",
    topBottom: "עליון ותחתון",
    both: "שניהם",
    left: "שמאל",
    right: "ימין",
    leftRight: "ימין ושמאל",
    color: "צבע",
    date: "תאריך",
    datetime: "תאריך ושעה",
    "datetime-local": "תאריך ושעה מקומיים",
    email: "אימייל",
    month: "חודש",
    number: "מספר",
    password: "סיסמה",
    range: "טווח",
    tel: "טלפון",
    text: "טקסט",
    time: "שעה",
    url: "קישור",
    week: "שבוע",
    hidden: "מוסתר",
    on: "המשך מהעמוד הקודם",
    onPage: "התחל בכל עמוד",
    edit: "ניתן לעריכה",
    display: "לקריאה בלבד",
    onComplete: "כאשר השאלון הושלם",
    onHidden: "כאשר השאלה הוסתרה",
    onHiddenContainer: "כאשר השאלה או הפאנל/העמוד שלה מוסתרים",
    contain: "להכיל",
    cover: "כריכה",
    fill: "מילוי",
    clearInvisibleValues: {
      none: "לעולם"
    },
    inputType: {
      color: "צבע",
      date: "תאריך",
      "datetime-local": "תאריך ושעה",
      email: "אימייל",
      month: "חודש",
      number: "מספר",
      password: "סיסמה",
      range: "טווח",
      tel: "מספר טלפון",
      text: "טקסט",
      time: "שעה",
      url: "כתובת URL",
      week: "שבוע"
    },
    all: "הכל",
    page: "עמוד",
    survey: "שאלון",
    onNextPage: "כאשר מתבצע מעבר לעמוד הבא",
    onValueChanged: "לאחר שהתשובה השתנתה",
    onValueChanging: "לפני שהתשובה השתנתה",
    standard: "מבנה מקורי",
    singlePage: "כל השאלות בעמוד אחד",
    questionPerPage: "כל שאלה בעמוד יחיד",
    noPreview: "אין תצוגה מקדימה",
    showAllQuestions: "הצג את כל השאלות",
    showAnsweredQuestions: "הצג רק שאלות עם תשובות",
    pages: "עמודים שהושלמו",
    questions: "שאלות שקיבלו תשובה",
    requiredQuestions: "שאלות חובה שקיבלו תשובה",
    correctQuestions: "תשובות נכונות",
    buttons: "עמודים שהושלמו (ממשק כפתורים)",
    underInput: "מתחת לקלט",
    underTitle: "מתחת לכותרת",
    onBlur: "כאשר מאבד פוקוס",
    onTyping: "בזמן הקלדה",
    underRow: "מתחת לשורה",
    underRowSingle: "מתחת לשורה, עם פאנל יחיד בלבד",
    showNavigationButtons: {
      none: "מוסתר"
    },
    showProgressBar: {
      off: "מוסתר"
    },
    showTimerPanel: {
      none: "מוסתר"
    },
    showTimerPanelMode: {
      all: "שני הצדדים"
    },
    detailPanelMode: {
      none: "מוסתר"
    },
    addRowLocation: {
      default: "תלוי בפריסת המטריצה"
    },
    panelsState: {
      default: "המשתמשים לא יכולים להרחיב או לכווץ פאנלים",
      collapsed: "כל הפאנלים מכווצים",
      expanded: "כל הפאנלים מורחבים"
    },
    widthMode: {
      auto: "אוטומטי",
      static: "סטטי",
      responsive: "רספונסיבי"
    },
    imageFit: {
      none: "ללא",
      contain: "התאמה",
      cover: "כיסוי",
      fill: "מילוי"
    },
    contentMode: {
      auto: "אוטומטי",
      image: "תמונה",
      video: "וידאו",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "אוטומטי",
      buttons: "כפתורים",
      dropdown: "רשימה נפתחת"
    },
    rateColorMode: {
      default: "ברירת מחדל"
    },
    autoGenerate: {
      "true": "יצירה אוטומטית",
      "false": "הזנה ידנית"
    },
    rateType: {
      labels: "תווי ניקוד",
      stars: "כוכבים",
      smileys: "סמיילים"
    }
  },
  // Operators
  op: {
    empty: "ריק",
    notempty: "לא ריק",
    equal: "שווה ל",
    notequal: "אינו שווה ל",
    contains: "מכיל",
    notcontains: "אינו מכיל",
    anyof: "כל אחד מתוך",
    allof: "כולם מתוך",
    greater: "גדול מ",
    less: "קטן מ",
    greaterorequal: "גדול או שווה ל",
    lessorequal: "קטן או שווה ל",
    and: "וגם",
    or: "או"
  },
  // Embed window
  ew: {
    angular: "השתמש בגרסת Angular",
    jquery: "השתמש בגרסת jQuery",
    knockout: "השתמש בגרסת Knockout",
    react: "השתמש בגרסת React",
    vue: "השתמש בגרסת Vue",
    bootstrap: "למסגרת Bootstrap",
    modern: "ערכת עיצוב מודרנית",
    default: "ערכת עיצוב ברירת מחדל",
    orange: "ערכת עיצוב כתומה",
    darkblue: "ערכת עיצוב כחולה כהה",
    darkrose: "ערכת עיצוב ורודה כהה",
    stone: "ערכת עיצוב אבן",
    winter: "ערכת עיצוב חורף",
    winterstone: "ערכת עיצוב חורף-אבן",
    showOnPage: "הצג את השאלון בעמוד",
    showInWindow: "הצג את השאלון בחלון",
    loadFromServer: "טען מסגרת JSON מהשרת",
    titleScript: "סקריפטים וסגנונות",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "בחר את העמוד לבדיקה",
    showInvisibleElements: "הצג רכיבים בלתי נראים",
    hideInvisibleElements: "הסתר רכיבים בלתי נראים"
  },
  validators: {
    answercountvalidator: "מספר תשובות",
    emailvalidator: "אימייל",
    expressionvalidator: "ביטוי",
    numericvalidator: "מספר",
    regexvalidator: "ביטוי רגולרי",
    textvalidator: "טקסט"
  },
  triggers: {
    completetrigger: "השלם את הסקר",
    setvaluetrigger: "קבע ערך",
    copyvaluetrigger: "העתק ערך",
    skiptrigger: "דלג לשאלה",
    runexpressiontrigger: "הפעל ביטוי",
    visibletrigger: "שנה נראות (לא מומלץ)"
  },
  pehelp: {
    cookieName: "עוגיות מונעות ממשתמשים למלא את אותו סקר פעמיים.",
    size: "שינוי גודל של תיבת הקלט. יש להשתמש בהגדרת <b>אמיתות → מספר תווים מרבי</b> כדי להגביל את אורך הקלט.",
    format: "השתמש ב-{0} כמציין מקום ריק.",
    totalText: "נראה רק כאשר לפחות עמוד אחד מכיל עמוד סוג או ביטוי סוג.",
    acceptedTypes: "התייחסות ל-[accept](https://www.w3schools.com/tags/att_input_accept.asp) למידע נוסף.",
    columnColCount: "ישומם רק לסוגי תא רדיו וקופסת סימון.",
    autocomplete: "התייחסות לתיאור של [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) למידע נוסף.",
    valueName: "אם אינך מגדיר מאפיין זה, התשובה תאוחסן בשדה המסוים במאפיין השם.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "אם העמודה שצוינה מכילה ערכים זהים, הסקר יזרוק את השגיאה \"ערך מפתח לא ייחודי\".",
    filePlaceholder: "חל כאשר \"סוג מקור\" הוא \"קבצים מקומיים\" או כאשר המצלמה אינה זמינה",
    photoPlaceholder: "חל כאשר \"סוג מקור\" הוא \"מצלמה\".",
    fileOrPhotoPlaceholder: "חל כאשר \"סוג מקור\" הוא \"קבצים מקומיים או מצלמה\"."
  },
  // Properties
  p: {
    title: {
      name: "כותרת",
      title: "השאר ריק אם זה זהה ל'שם'"
    },
    multiSelect: "אפשר בחירה מרובה",
    showLabel: "הצגת כתוביות לתמונות",
    value: "ערך",
    tabAlign: "יישור לשונית",
    sourceType: "סוג מקור",
    fitToContainer: "התאמה למיכל",
    setValueExpression: "הגדרת ביטוי ערך",
    description: "תיאור",
    logoFit: "התאמת הלוגו",
    pages: "עמודים",
    questions: "שאלות",
    triggers: "מפעילים",
    calculatedValues: "ערכים מחושבים",
    surveyId: "מזהה סקר",
    surveyPostId: "מזהה פוסט סקר",
    surveyShowDataSaving: "הצגת שמירת נתונים",
    questionDescriptionLocation: "מיקום תיאור השאלה",
    progressBarType: "סוג סרגל התקדמות",
    showTOC: "הצגת תוכן הקריאה",
    tocLocation: "מיקום תוכן הקריאה",
    questionTitlePattern: "תבנית כותרת השאלה",
    widthMode: "מצב רוחב",
    showBrandInfo: "הצגת מידע על המותג",
    useDisplayValuesInDynamicTexts: "שימוש בערכי תצוגה בטקסטים דינמיים",
    visibleIf: "נראה אם",
    titleLocation: "מיקום הכותרת",
    descriptionLocation: "מיקום התיאור",
    defaultValueExpression: "ביטוי ערך ברירת מחדל",
    requiredIf: "נדרש אם",
    resetValueIf: "איפוס ערך אם",
    setValueIf: "הגדר ערך אם",
    validators: "מאמתים",
    bindings: "קישורים",
    renderAs: "תצוגה כ",
    attachOriginalItems: "צרף פריטים מקוריים",
    choices: "בחירות",
    choicesByUrl: "בחירות דרך URL",
    currency: "מטבע",
    cellHint: "רמז לתא",
    isUnique: "ייחודי",
    showInMultipleColumns: "הצג במספר עמודות",
    totalMaximumFractionDigits: "מספר ספרות עשרוניות מרבי",
    totalMinimumFractionDigits: "מספר ספרות עשרוניות מינימלי",
    columns: "עמודות",
    detailElements: "רכיבי פרטים",
    allowAdaptiveActions: "אפשר פעולות מותאמות",
    defaultRowValue: "ערך ברירת מחדל לשורה",
    detailPanelShowOnAdding: "הצג פאנל פרטים בעת הוספה",
    choicesLazyLoadEnabled: "אפשר טעינת רשימות עם פריטים עצלים",
    choicesLazyLoadPageSize: "גודל עמוד בטעינת רשימות",
    inputFieldComponent: "רכיב שדה קלט",
    itemComponent: "רכיב פריט",
    min: "מינימום",
    max: "מקסימום",
    minValueExpression: "ביטוי ערך מינימלי",
    maxValueExpression: "ביטוי ערך מקסימלי",
    step: "צעד",
    dataList: "רשימת נתונים",
    itemSize: "גודל פריט",
    elements: "רכיבים",
    content: "תוכן",
    navigationButtonsVisibility: "נראות כפתורי ניווט",
    navigationTitle: "כותרת ניווט",
    navigationDescription: "תיאור ניווט",
    longTap: "לחיצה ארוכה",
    autoGrow: "התרחבות אוטומטית",
    allowResize: "אפשר שינוי גודל",
    acceptCarriageReturn: "קבלת Enter",
    displayMode: "מצב תצוגה",
    rateType: "סוג דירוג",
    label: "תווית",
    contentMode: "מצב תוכן",
    imageFit: "התאמת התמונה",
    altText: "טקסט חלופי",
    height: "גובה",
    penColor: "צבע העט",
    backgroundColor: "צבע רקע",
    templateElements: "רכיבי תבנית",
    operator: "אופרטור",
    isVariable: "משתנה",
    runExpression: "הפעל ביטוי",
    showCaption: "הצג כיתוב",
    iconName: "שם סמל",
    iconSize: "גודל סמל",
    precision: "דיוק",
    matrixDragHandleArea: "אזור גרירה במטריצה",
    backgroundImage: "תמונת רקע",
    backgroundImageFit: "התאמת תמונת רקע",
    backgroundImageAttachment: "קשר תמונת רקע",
    backgroundOpacity: "שקיפות רקע",
    selectToRankEnabled: "אפשר בחירה לדירוג",
    selectToRankAreasLayout: "תצוגת אזורי בחירה לדירוג",
    allowCameraAccess: "אפשר גישה למצלמה",
    scaleColorMode: "מצב צבע לסולם",
    rateColorMode: "מצב צבע לדירוג",
    templateTabTitle: "כותרת כרטיסיית תבנית",
    templateVisibleIf: "הצג תבנית אם",
    copyDisplayValue: "העתקת ערך תצוגה"
  },
  theme: {
    "--background": "צבע רקע",
    "--background-dim-light": "צבע רקע אור",
    "--primary-foreground": "צבע ראשי",
    "--foreground": "צבע קדמי",
    "--base-unit": "יחידת בסיס",
    advancedMode: "מצב מתקדם",
    groupGeneral: "כללי",
    groupHeader: "כותרת",
    groupBackground: "רקע",
    groupAppearance: "מראה",
    themeName: "ערכת נושא",
    themeMode: "מצב שאלון",
    themeModePanels: "ברירת מחדל",
    themeModeLightweight: "בלעדי פאנלים",
    themePaletteLight: "בהיר",
    themePaletteDark: "אפל",
    primaryColor: "צבע משנה",
    primaryDefaultColor: "ברירת מחדל",
    primaryDarkColor: "עכבר",
    primaryLightColor: "נבחר",
    coverTitleForecolor: "צביעת כותרת מראש",
    coverDescriptionForecolor: "תיאור צבע קדמי",
    coverOverlapEnabled: "חופפים",
    backgroundDimColor: "צבע רקע",
    backgroundImage: "תמונת רקע",
    backgroundImageFitAuto: "אוטומטי",
    backgroundImageFitCover: "כיסוי",
    backgroundImageFitContain: "התאמה",
    backgroundImageFitFill: "מתיחה",
    backgroundImageFitTile: "אריח",
    backgroundOpacity: "שקיפות רקע",
    backgroundImageAttachmentFixed: "קבוע",
    backgroundImageAttachmentScroll: "גלילה",
    panelBackgroundTransparency: "שקיפות רקע לפאנלים",
    questionBackgroundTransparency: "שקיפות רקע לשאלות",
    questionTitle: "גופן כותרת שאלה",
    editorPanel: "רקע אלמנט קלט",
    backgroundCornerRadius: "רקע ורדיוס פינה",
    backcolor: "רקע ברירת מחדל",
    hovercolor: "רקע העברת עכבר",
    borderDecoration: "קישוט גבול",
    accentBackground: "רקע הדגשה",
    accentForeground: "קדמי הדגשה",
    primaryForecolor: "צבע ברירת מחדל",
    primaryForecolorLight: "צבע כבוי",
    colorsTitle: "צבעים",
    font: "גופן",
    lines: "קווים",
    borderDefault: "כהה",
    borderLight: "בהיר",
    fontFamily: "סוג גופן",
    fontSize: "גודל גופן",
    color: "צבע",
    placeholderColor: "צבע מציין מקום",
    size: "גודל",
    fontWeightRegular: "רגיל",
    fontWeightHeavy: "כבד",
    fontWeightSemiBold: "חצי מודגש",
    fontWeightBold: "מודגש",
    scale: "קנה מידה",
    cornerRadius: "רדיוס פינה",
    surveyTitle: "גופן כותרת שאלון",
    surveyDescription: "גופן תיאור סקר",
    pageTitle: "גופן כותרת עמוד",
    titleFont: "גופן כותרת",
    descriptionFont: "גופן תיאור",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "הוספת אפקט צל",
    opacity: "שקיפות",
    boxShadowBlur: "טשטוש",
    boxShadowSpread: "התפשטות",
    boxShadowDrop: "הטפה",
    boxShadowInner: "פנימי",
    shadow: "אפקטי צל",
    headerView: "נוף",
    headerViewBasic: "בסיסי",
    headerViewAdvanced: "מתקדמים",
    coverInheritWidthFrom: "רוחב אזור תוכן",
    coverInheritWidthFromSurvey: "זהה לסקר",
    coverInheritWidthFromContainer: "התאמה למיכל",
    coverTextAreaWidth: "רוחב טקסט",
    coverBackgroundColorSwitch: "צבע רקע",
    coverBackgroundColorNone: "ללא",
    coverBackgroundColorAccentColor: "צבע הדגשה",
    coverBackgroundColorCustom: "מנהג",
    horizontalAlignmentLeft: "שמאל",
    horizontalAlignmentCenter: "מרכז",
    horizontalAlignmentRight: "ימין",
    verticalAlignmentTop: "סביבון",
    verticalAlignmentMiddle: "אמצע",
    verticalAlignmentBottom: "ישבן",
    logoPosition: "מיקום הלוגו",
    coverTitlePosition: "מיקום בתפקיד",
    coverDescriptionPosition: "תיאור מיקום",
    names: {
      default: "ברירת מחדל",
      sharp: "חד",
      borderless: "ללא גבול",
      flat: "שטוח",
      plain: "פשוט",
      doubleborder: "גבול כפול",
      layered: "בשכבות",
      solid: "מוצק",
      threedimensional: "שלושה מימדים",
      contrast: "ניגודיות"
    },
    colors: {
      teal: "טיל",
      blue: "כחול",
      purple: "סגול",
      orchid: "אורכידיה",
      tulip: "טוליפ",
      brown: "חום",
      green: "ירוק"
    }
  }
};

// Uncomment the line below if you create a custom dictionary.
// Replace "en" with a custom locale code (for example, "fr" or "de"),
// Replace `enStrings` with the name of the variable that contains the custom dictionary.
editorLocalization.locales["he"] = hebrewStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// ed.prevFocus: "Focus previous" => "פוקוס קודם"
// ed.nextFocus: "Focus next" => "התמקד הבא"
// ed.saveTheme: "Save Theme" => "שמור ערכת נושא"
// ed.saveThemeTooltip: "Save Theme" => "שמור ערכת נושא"
// ed.propertyGridNoResultsFound: "No results found" => "לא נמצאו תוצאות"
// ed.translateUsigAI: "Auto-translate All" => "תרגום אוטומטי של הכל"
// ed.translationDialogTitle: "Untranslated strings" => "מחרוזות לא מתורגמות"
// ed.surveyJsonExportButton: "Export" => "ייצא"
// ed.surveyJsonImportButton: "Import" => "ייבוא"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "העתק ללוח"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "האם אתה באמת רוצה לאפס את ערכת הנושא? כל ההתאמות האישיות שלך יאבדו."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "כן, אפס את ערכת הנושא"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "האפשרויות נטענות משירות אינטרנט."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "עבור אל הגדרות"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "תצוגה מקדימה של אפשרויות בחירה שנטענו"
// lg.addNewItem: "Add New Rule" => "הוספת כלל חדש"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "צור כלל כדי להתאים אישית את זרימת הסקר."
// lg.page_visibilityName: "Show (hide) page" => "הצג (הסתר) עמוד"
// lg.page_enableName: "Enable (disable) page" => "הפוך דף לזמין (הפוך ללא זמין)"
// lg.page_requireName: "Make page required" => "הפיכת הדף לנדרש"
// lg.panel_visibilityName: "Show (hide) panel" => "הצג (הסתר) החלונית"
// lg.panel_enableName: "Enable (disable) panel" => "הפעל (השבית) את החלונית"
// lg.panel_requireName: "Make page required" => "הפיכת הדף לנדרש"
// lg.question_visibilityName: "Show (hide) question" => "הצג (הסתר) שאלה"
// lg.question_enableName: "Enable (disable) question" => "הפיכת שאלה לזמינה (השבתה"
// lg.question_requireName: "Make question required" => "הפוך את השאלה לנדרשת"
// lg.question_resetValueName: "Reset question value" => "איפוס ערך שאלה"
// lg.question_setValueName: "Set question value" => "הגדרת ערך שאלה"
// lg.column_visibilityName: "Show (hide) column" => "הצג (הסתר) עמודה"
// lg.column_enableName: "Enable (disable) column" => "הפיכת עמודה לזמינה (ללא זמינה)"
// lg.column_requireName: "Make column required" => "הפיכת עמודה לנדרשת"
// lg.column_resetValueName: "Reset column value" => "איפוס ערך עמודה"
// lg.column_setValueName: "Set column value" => "הגדרת ערך עמודה"
// lg.trigger_completeName: "Complete survey" => "הסקר המלא"
// lg.trigger_setvalueName: "Set answer" => "הגדר תשובה"
// lg.trigger_copyvalueName: "Copy answer" => "העתק תשובה"
// lg.trigger_skipName: "Skip to question" => "דלג לשאלה"
// lg.trigger_runExpressionName: "Run expression" => "הפעל ביטוי"
// lg.completedHtmlOnConditionName: "Set \"Survey Complete\" page markup" => "הגדרת סימון דף \"סקר הושלם\""
// lg.page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible." => "הפוך את הדף לגלוי כאשר ביטוי הלוגיקה מחזיר True. אחרת, שמור אותו בלתי נראה."
// lg.panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible." => "הפוך את החלונית לגלויה כשביטוי הלוגיקה מחזיר True. אחרת, שמור אותו בלתי נראה."
// lg.panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled." => "הפוך את החלונית, ואת כל הרכיבים בתוכה, לזמינים כאשר ביטוי הלוגיקה מחזיר True. אחרת, השאר אותם מושבתים."
// lg.question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible." => "הפוך את השאלה לגלויה כאשר ביטוי הלוגיקה חוזר True. אחרת, שמור אותו בלתי נראה."
// lg.question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled." => "הפוך את השאלה לזמינה כאשר ביטוי הלוגיקה מחזיר True. אחרת, השאר אותו מושבת."
// lg.question_requireDescription: "Question becomes required when the logic expression returns true." => "השאלה הופכת לנדרשת כאשר ביטוי הלוגיקה מחזיר True."
// lg.trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'." => "כאשר ביטוי הלוגיקה חוזר True, הסקר הושלם ומשתמש קצה רואה את 'דף התודה'."
// lg.trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question." => "כאשר ערכי שאלה, המשמשים בביטוי הלוגי, משתנים וביטוי הלוגיקה מחזיר True, הערך מוגדר לשאלה שנבחרה."
// lg.trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question." => "כאשר ערכי שאלה, המשמשים בביטוי הלוגי, משתנים וביטוי הלוגיקה מחזיר True, הערך של שאלה נבחרת אחת מועתק לשאלה נבחרת אחרת."
// lg.trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question." => "כאשר ביטוי הלוגיקה חוזר True אז הסקר מדלג / ממקד את השאלה שנבחרה."
// lg.trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question" => "כאשר ביטוי הלוגיקה מחזיר true, הביטוי המותאם אישית מתבצע. באפשרותך להגדיר תוצאת ביטוי זו בשאלה שנבחרה"
// lg.completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one." => "אם ביטוי הלוגיקה מחזיר true, טקסט ברירת המחדל עבור 'דף תודה' משתנה לטקסט הנתון."
// lg.itemExpressionText: "When expression: '{0}' returns true" => "כאשר expression: '{0}' מחזיר ערך True"
// lg.itemEmptyExpressionText: "New rule" => "כלל חדש"
// lg.page_visibilityText: "make page {0} visible" => "הפיכת {0} הדף לגלויות"
// lg.panel_visibilityText: "make panel {0} visible" => "הפיכת {0} החלונית לגלויה"
// lg.panel_enableText: "make panel {0} enable" => "הפיכת {0} החלונית לזמינה"
// lg.question_visibilityText: "make question {0} visible" => "הפוך את {0} השאלה לגלויה"
// lg.question_enableText: "make question {0} enable" => "הפוך שאלה {0} לזמינה"
// lg.question_requireText: "make question {0} required" => "יש צורך בשאלה {0}"
// lg.question_resetValueText: "reset value for question: {0}" => "אפס ערך עבור שאלה: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "הקצאת ערך: {1} לשאלה: {0}"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "הפוך את {0} העמודות של {1} השאלה לגלויות"
// lg.column_enableText: "make column {0} of question {1} enable" => "הפיכת עמודה {0} של שאלה לזמינה {1}"
// lg.column_requireText: "make column {0} of question {1} required" => "הפוך את {0} העמודות של השאלה {1} לנדרש"
// lg.column_resetValueText: "reset cell value for column: {0}" => "איפוס ערך תא עבור עמודה: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "הקצאת ערך תא: {1} לעמודה: {0}"
// lg.setValueExpressionPlaceholder: "An expression whose result will be assigned to the target question." => "ביטוי שתוצאתו תוקצה לשאלת היעד."
// lg.trigger_completeText: "survey becomes completed" => "הסקר הושלם"
// lg.trigger_setvalueText: "set into question: {0} value {1}" => "העמידו בסימן שאלה: ערך {0} {1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "ערך שאלה ברור: {0}"
// lg.trigger_copyvalueText: "copy into question: {0} value from question {1}" => "העתק לשאלה: ערך {0} משאלה {1}"
// lg.trigger_skipText: "survey skip to the question {0}" => "סקר דלג לשאלה {0}"
// lg.trigger_runExpressionText1: "run expression: '{0}'" => "ביטוי הפעלה: '{0}'"
// lg.trigger_runExpressionText2: " and set its result into question: {0}" => " ולהעמיד את תוצאתו בסימן שאלה: {0}"
// lg.completedHtmlOnConditionText: "show custom text for the 'Thank you page'." => "הצג טקסט מותאם אישית עבור 'דף תודה'."
// lg.showAllQuestions: "All Questions" => "כל השאלות"
// lg.showAllActionTypes: "All Action Types" => "כל סוגי הפעולות"
// lg.conditions: "Condition(s)" => "תנאים(ים)"
// lg.actions: "Action(s)" => "פעולה(ות)"
// lg.expressionEditorTitle: "Define condition(s)" => "הגדרת תנאים"
// lg.actionsEditorTitle: "Define action(s)" => "הגדרת פעולות"
// lg.deleteAction: "Delete Action" => "מחיקת פעולה"
// lg.addNewAction: "Add Action" => "הוסף פעולה"
// lg.selectedActionCaption: "Select action..." => "בחר פעולה..."
// lg.expressionInvalid: "The logic expression is empty or invalid. Please correct it." => "ביטוי הלוגיקה ריק או לא חוקי. אנא תקן זאת."
// lg.noActionError: "Please, add at least one action." => "אנא, הוסף לפחות פעולה אחת."
// lg.actionInvalid: "Please, fix problems in your action(s)." => "אנא, תקן בעיות בפעולות שלך."
// lg.uncompletedRule_title: "Logical rules are incomplete" => "כללים לוגיים אינם שלמים"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "לא השלמת חלק מהכללים הלוגיים. אם תעזוב את הכרטיסיה כעת, השינויים יאבדו. האם אתה עדיין רוצה לעזוב את הכרטיסייה מבלי להשלים את השינויים?"
// lg.uncompletedRule_apply: "Yes" => "כן"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "לא, אני רוצה להשלים את הכללים"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "אנא הכנס לפחות {0} פריטים"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "מניעת תגובות כפולות בשורות"
// survey.title: "Title" => "כותר"
// page.title: "Title" => "כותר"
// signaturepad.showPlaceholder: "Show the placeholder" => "הצגת מציין המיקום"
// signaturepad.placeholder: "Placeholder text" => "טקסט מציין מיקום"
// signaturepad.signatureWidth: "Signature area width" => "רוחב אזור חתימה"
// signaturepad.signatureHeight: "Signature area height" => "גובה אזור חתימה"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "שינוי גודל אוטומטי של אזור החתימה"
// signaturepad.penMinWidth: "Minimum pen width" => "רוחב עט מינימלי"
// signaturepad.penMaxWidth: "Maximum pen width" => "רוחב עט מרבי"
// pe.filePlaceholder: "File placeholder text" => "טקסט מציין מיקום קובץ"
// pe.photoPlaceholder: "Photo placeholder text" => "טקסט מציין מיקום תמונה"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "טקסט מציין מיקום של קובץ או תמונה"
// pv.leftRight: "Left and right" => "ימין ושמאל"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "חל כאשר \"סוג מקור\" הוא \"קבצים מקומיים\" או כאשר המצלמה אינה זמינה"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "חל כאשר \"סוג מקור\" הוא \"מצלמה\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "חל כאשר \"סוג מקור\" הוא \"קבצים מקומיים או מצלמה\"."
// p.sourceType: "Source type" => "סוג מקור"
// p.fitToContainer: "Fit to container" => "התאמה למיכל"
// p.setValueExpression: "Set value expression" => "הגדרת ביטוי ערך"
// p.resetValueIf: "Reset value if" => "איפוס ערך אם"
// p.setValueIf: "Set value if" => "הגדר ערך אם"
// theme.advancedMode: "Advanced mode" => "מצב מתקדם"
// theme.groupHeader: "Header" => "כותרת"
// theme.groupBackground: "Background" => "רקע"
// theme.groupAppearance: "Appearance" => "מראה"
// theme.coverTitleForecolor: "Title forecolor" => "צביעת כותרת מראש"
// theme.coverDescriptionForecolor: "Description forecolor" => "תיאור צבע קדמי"
// theme.coverOverlapEnabled: "Overlap" => "חופפים"
// theme.backgroundImageFitFill: "Stretch" => "מתיחה"
// theme.backgroundImageFitTile: "Tile" => "אריח"
// theme.backgroundCornerRadius: "Background and corner radius" => "רקע ורדיוס פינה"
// theme.colorsTitle: "Colors" => "צבעים"
// theme.font: "Font" => "גופן"
// theme.lines: "Lines" => "קווים"
// theme.surveyDescription: "Survey description font" => "גופן תיאור סקר"
// theme.titleFont: "Title font" => "גופן כותרת"
// theme.descriptionFont: "Description font" => "גופן תיאור"
// theme.shadow: "Shadow effects" => "אפקטי צל"
// theme.headerView: "View" => "נוף"
// theme.headerViewBasic: "Basic" => "בסיסי"
// theme.headerViewAdvanced: "Advanced" => "מתקדמים"
// theme.coverInheritWidthFrom: "Content area width" => "רוחב אזור תוכן"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "זהה לסקר"
// theme.coverInheritWidthFromContainer: "Fit to container" => "התאמה למיכל"
// theme.coverTextAreaWidth: "Text width" => "רוחב טקסט"
// theme.coverBackgroundColorSwitch: "Background color" => "צבע רקע"
// theme.coverBackgroundColorNone: "None" => "ללא"
// theme.coverBackgroundColorAccentColor: "Accent color" => "צבע הדגשה"
// theme.coverBackgroundColorCustom: "Custom" => "מנהג"
// theme.horizontalAlignmentLeft: "Left" => "שמאל"
// theme.horizontalAlignmentCenter: "Center" => "מרכז"
// theme.horizontalAlignmentRight: "Right" => "ימין"
// theme.verticalAlignmentTop: "Top" => "סביבון"
// theme.verticalAlignmentMiddle: "Middle" => "אמצע"
// theme.verticalAlignmentBottom: "Bottom" => "ישבן"
// theme.logoPosition: "Logo position" => "מיקום הלוגו"
// theme.coverTitlePosition: "Title position" => "מיקום בתפקיד"
// theme.coverDescriptionPosition: "Description position" => "תיאור מיקום"
// ed.translateUsigAIFrom: "Translate from: " => "תרגם מ: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "אפשר את האפשרות סרב לענות"
// pe.showDontKnowItem: "Allow the Don't Know option" => "אפשר את האפשרות 'לא יודע'"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "אפשר את האפשרות סרב לענות"
// pe.showDontKnowItem: "Allow the Don't Know option" => "אפשר את האפשרות 'לא יודע'"
// pv.contain: "Contain" => "להכיל"
// pv.cover: "Cover" => "כריכה"
// pv.fill: "Fill" => "מילוי"
