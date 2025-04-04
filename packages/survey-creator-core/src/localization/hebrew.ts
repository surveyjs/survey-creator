import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "תצוגה מקדימה",
    theme: "ערכות נושא",
    translation: "תרגום",
    designer: "מעצב",
    json: "עורך JSON",
    logic: "לוגיקה"
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
  toolboxCategories: {
    general: "כללי",
    choice: "שאלות עם בחירה",
    text: "שאלות טקסטואליות",
    containers: "מכילים",
    matrix: "שאלות מטריצה",
    misc: "שונות"
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
    creatorSettingTitle: "הגדרות יוצר",
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
    defaultV2Theme: "ברירת מחדל",
    modernTheme: "מודרני",
    defaultTheme: "ברירת מחדל (ירושה)",
    testSurveyAgain: "תצוגה מקדימה שוב",
    testSurveyWidth: "רוחב הסקר: ",
    navigateToMsg: "הייתם צריכים לנווט אל",
    saveSurvey: "שמור סקר",
    saveSurveyTooltip: "שמור סקר",
    saveTheme: "שמור ערכת נושא",
    saveThemeTooltip: "שמור ערכת נושא",
    jsonHideErrors: "הסתר שגיאות",
    jsonShowErrors: "הצג שגיאות",
    undo: "בטל",
    redo: "בצע מחדש",
    undoTooltip: "בטל שינוי אחרון",
    redoTooltip: "בצע מחדש את השינוי",
    expandTooltip: "להרחיב",
    collapseTooltip: "התמוטטות",
    expandAllTooltip: "הרחב הכל",
    collapseAllTooltip: "כווץ הכל",
    zoomInTooltip: "התקרבות",
    zoom100Tooltip: "שינוי גודל תצוגה ל- 100%",
    zoomOutTooltip: "הקטנת התצוגה",
    lockQuestionsTooltip: "נעילת מצב הרחבה/כיווץ עבור שאלות",
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
    toolboxFilteredTextPlaceholder: "הקלד כדי לחפש...",
    toolboxNoResultsFound: "לא נמצאו תוצאות",
    propertyGridFilteredTextPlaceholder: "הקלד כדי לחפש...",
    propertyGridNoResultsFound: "לא נמצאו תוצאות",
    propertyGridPlaceholderTitle: "התחל לקבוע את תצורת הטופס שלך",
    propertyGridPlaceholderDescription: "לחץ על סמל קטגוריה כלשהו כדי לחקור את הגדרות הסקר. הגדרות נוספות יהיו זמינות לאחר הוספת רכיב סקר למשטח העיצוב.",
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
    addLanguageTooltip: "הוסף שפה",
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
    translationSource: "מקור: ",
    translationTarget: "יעד: ",
    translationYouTubeNotSupported: "קישורי YouTube אינם נתמכים.",
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
    pagePlaceHolder: "הדף ריק. גרור רכיב מארגז הכלים או לחץ על הלחצן למטה.",
    imagePlaceHolder: "גרור ושחרר תמונה לכאן או לחץ על הכפתור למטה ובחר תמונה להעלאה",
    surveyPlaceHolderMobile: "לחץ על הלחצן \"הוסף שאלה\" למטה כדי להתחיל ליצור את הטופס שלך.",
    surveyPlaceholderTitle: "הטופס שלך ריק",
    surveyPlaceholderTitleMobile: "הטופס שלך ריק",
    surveyPlaceholderDescription: "גרור רכיב מארגז הכלים או לחץ על הלחצן למטה.",
    surveyPlaceholderDescriptionMobile: "גרור רכיב מארגז הכלים או לחץ על הלחצן למטה.",
    previewPlaceholderTitle: "ללא תצוגה מקדימה",
    previewPlaceholderTitleMobile: "ללא תצוגה מקדימה",
    previewPlaceholderDescription: "הסקר אינו מכיל רכיבים גלויים.",
    previewPlaceholderDescriptionMobile: "הסקר אינו מכיל רכיבים גלויים.",
    translationsPlaceholderTitle: "אין מחרוזות לתרגם",
    translationsPlaceholderTitleMobile: "אין מחרוזות לתרגם",
    translationsPlaceholderDescription: "הוסף רכיבים לטופס או שנה את מסנן המחרוזות בסרגל הכלים.",
    translationsPlaceholderDescriptionMobile: "הוסף רכיבים לטופס או שנה את מסנן המחרוזות בסרגל הכלים.",
    pagePlaceHolderMobile: "לחץ על כפתור \"הוסף שאלה\" למטה כדי להוסיף אלמנט חדש לדף.",
    panelPlaceHolderMobile: "לחץ על הלחצן \"הוסף שאלה\" למטה כדי להוסיף אלמנט חדש לחלונית.",
    imagePlaceHolderMobile: "לחץ על הלחצן למטה ובחר תמונה להעלאה",
    imageChooseImage: "בחר תמונה",
    addNewTypeQuestion: "הוסף {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[לוגו]",
    choices_Item: "פריט ",
    selectFile: "בחר קובץ",
    removeFile: "הסרת הקובץ",
    lg: {
      addNewItem: "הוספת כלל חדש",
      empty_tab: "צור כלל כדי להתאים אישית את זרימת הסקר.",
      logicPlaceholderTitle: "אין כללים לוגיים",
      logicPlaceholderTitleMobile: "אין כללים לוגיים",
      logicPlaceholderDescription: "צור כלל כדי להתאים אישית את זרימת הסקר.",
      logicPlaceholderDescriptionMobile: "צור כלל כדי להתאים אישית את זרימת הסקר.",
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
      question_resetValueText: "אפס ערך עבור שאלה: {0}", //{0} question name.
      question_setValueText: "הקצאת ערך: {1} לשאלה: {0}",
      column_visibilityText: "הפוך את {0} העמודות של {1} השאלה לגלויות", //{0} column name, {1} question name
      column_enableText: "הפיכת עמודה {0} של שאלה לזמינה {1}", //{0} column name, {1} question name
      column_requireText: "הפוך את {0} העמודות של השאלה {1} לנדרש", //{0} column name, {1} question name
      column_resetValueText: "איפוס ערך תא עבור עמודה: {0}", //{0} column name
      column_setValueText: "הקצאת ערך תא: {1} לעמודה: {0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "שם החלונית",
      title: "כותרת הפאנל",
      description: "תיאור הלוח",
      visibleIf: "הפוך את החלונית לגלויה אם",
      requiredIf: "הפוך את החלונית לנדרשת אם",
      questionOrder: "סדר השאלות בתוך הפאנל",
      page: "עמוד הורה",
      startWithNewLine: "הצגת החלונית בשורה חדשה",
      state: "מצב כיווץ לוח",
      width: "רוחב החלונית בתוך שורה",
      minWidth: "רוחב לוח מינימלי",
      maxWidth: "רוחב לוח מרבי",
      showNumber: "מספר חלונית זו"
    },
    panellayoutcolumn: {
      effectiveWidth: "רוחב אפקטיבי, %",
      questionTitleWidth: "רוחב כותרת השאלה, px"
    },
    paneldynamic: {
      name: "שם החלונית",
      title: "כותרת הפאנל",
      description: "תיאור הלוח",
      visibleIf: "הפוך את החלונית לגלויה אם",
      requiredIf: "הפוך את החלונית לנדרשת אם",
      page: "העברת החלונית לעמוד",
      startWithNewLine: "הצגת החלונית בשורה חדשה",
      state: "מצב כיווץ לוח",
      width: "רוחב החלונית בתוך שורה",
      minWidth: "רוחב לוח מינימלי",
      maxWidth: "רוחב לוח מרבי",
      confirmDelete: "אישור מחיקת פאנל",
      templateDescription: "תבנית תיאור חלונית",
      templateTitle: "תבנית כותרת חלונית",
      noEntriesText: "טקסט ריק בחלונית",
      templateTabTitle: "תבנית כותרת טאב",
      tabTitlePlaceholder: "מציין מיקום של כותרת טאב",
      templateVisibleIf: "הפיכת חלונית בודדת לגלויה אם",
      showNumber: "מספור החלונית",
      titleLocation: "יישור כותרת חלונית",
      descriptionLocation: "יישור תיאור החלונית",
      templateQuestionTitleLocation: "יישור כותרת שאלה",
      templateQuestionTitleWidth: "רוחב כותרת השאלה",
      templateErrorLocation: "יישור הודעת שגיאה",
      newPanelPosition: "מיקום חדש בלוח",
      showRangeInProgress: "הצגת מד ההתקדמות",
      keyName: "מניעת תגובות כפולות בשאלה הבאה"
    },
    question: {
      name: "שם שאלה",
      title: "כותרת השאלה",
      description: "תיאור השאלה",
      visibleIf: "הפוך את השאלה לגלויה אם",
      requiredIf: "הפוך את השאלה לנדרשת אם",
      page: "עמוד הורה",
      state: "מצב כיווץ תיבת שאלה",
      showNumber: "מספר שאלה זו",
      titleLocation: "יישור כותרת שאלה",
      descriptionLocation: "יישור תיאור השאלה",
      errorLocation: "יישור הודעת שגיאה",
      indent: "הגדלת הכניסה הפנימית",
      width: "רוחב שאלה מוטבעת",
      minWidth: "רוחב שאלה מינימלי",
      maxWidth: "רוחב שאלה מרבי",
      textUpdateMode: "עדכון ערך שדה קלט"
    },
    signaturepad: {
      signatureWidth: "רוחב אזור חתימה",
      signatureHeight: "גובה אזור חתימה",
      signatureAutoScaleEnabled: "שינוי גודל אוטומטי של אזור החתימה",
      showPlaceholder: "הצגת מציין המיקום",
      placeholder: "טקסט מציין מיקום",
      placeholderReadOnly: "טקסט מציין מיקום במצב קריאה בלבד או תצוגה מקדימה",
      allowClear: "הצגת לחצן 'נקה' בתוך אזור החתימה",
      penMinWidth: "רוחב עט מינימלי",
      penMaxWidth: "רוחב עט מרבי",
      penColor: "צבע קו"
    },
    comment: {
      rows: "גובה שדה קלט (בקווים)"
    },
    showQuestionNumbers: "מספור שאלות",
    questionStartIndex: "אינדקס התחלה (מספר או אות)",
    expression: {
      name: "שם ביטוי",
      title: "כותרת ביטוי",
      description: "תיאור ביטוי",
      expression: "ביטוי"
    },
    trigger: {
      expression: "ביטוי"
    },
    calculatedvalue: {
      expression: "ביטוי"
    },
    // survey templates
    survey: {
      title: "כותר",
      description: "תיאור הסקר",
      readOnly: "הפוך את הסקר לקריאה בלבד"
    },
    page: {
      name: "שם הדף",
      title: "כותר",
      description: "תיאור הדף",
      visibleIf: "הפוך את הדף לגלוי אם",
      requiredIf: "הפוך את הדף לנדרש אם",
      timeLimit: "גבול זמן לסיום העמוד (בשניות)",
      questionOrder: "סדר השאלות בדף"
    },
    matrixdropdowncolumn: {
      name: "שם עמודה",
      title: "כותרת עמודה",
      isUnique: "מניעת תגובות כפולות",
      width: "רוחב עמודה",
      minWidth: "רוחב עמודה מינימלי",
      rows: "גובה שדה קלט (בקווים)",
      visibleIf: "הפיכת העמודה לגלויה אם",
      requiredIf: "הפוך את העמודה לנדרשת אם",
      showInMultipleColumns: "כל אפשרות בעמודה נפרדת"
    },
    multipletextitem: {
      name: "שם",
      title: "כותר"
    },
    masksettings: {
      saveMaskedValue: "שמירת ערך מוסווה בתוצאות הסקר"
    },
    patternmask: {
      pattern: "תבנית ערך"
    },
    datetimemask: {
      min: "ערך מינימלי",
      max: "ערך מרבי"
    },
    numericmask: {
      allowNegativeValues: "התרת ערכים שליליים",
      thousandsSeparator: "מפריד אלפים",
      decimalSeparator: "מפריד עשרוני",
      precision: "דיוק ערך",
      min: "ערך מינימלי",
      max: "ערך מרבי"
    },
    currencymask: {
      prefix: "קידומת מטבע",
      suffix: "סיומת מטבע"
    },
    imageHeight: "גובה התמונה",
    imageWidth: "רוחב התמונה",
    valueName: "אחסן תשובות בשדה JSON הבא",
    defaultDisplayValue: "ערך תצוגה המוגדר כברירת מחדל לטקסטים דינמיים",
    rateDescriptionLocation: "יישור תוויות",
    size: "רוחב שדה קלט (בתווים)",
    cellErrorLocation: "יישור הודעת שגיאה של תא",
    enabled: "מופעלת",
    disabled: "נכים",
    inherit: "לרשת",
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
    "listIsEmpty@columns": "עדיין אין לך עמודות",
    "listIsEmpty@gridLayoutColumns": "עדיין אין לך עמודות פריסה",
    "listIsEmpty@rows": "עדיין אין לך שורות",
    "listIsEmpty@validators": "עדיין אין לך כללי אימות",
    "listIsEmpty@calculatedValues": "עדיין אין לך משתנים מותאמים אישית",
    "listIsEmpty@triggers": "עדיין אין לך טריגרים",
    "listIsEmpty@navigateToUrlOnCondition": "עדיין אין לך קישורים",
    "listIsEmpty@pages": "עדיין אין לך דפים",
    "addNew@choices": "הוסף ברירת בחירה",
    "addNew@columns": "הוספת עמודה חדשה",
    "addNew@rows": "הוספת שורה חדשה",
    "addNew@validators": "הוספת כלל חדש",
    "addNew@calculatedValues": "הוספת משתנה חדש",
    "addNew@triggers": "הוספת גורם מפעיל חדש",
    "addNew@navigateToUrlOnCondition": "הוספת כתובת URL חדשה",
    "addNew@pages": "הוספת עמוד חדש",
    expressionIsEmpty: "הביטוי ריק",
    value: "ערך",
    text: "טקסט",
    rowid: "מזהה שורה",
    imageLink: "קישור לתמונה או וידיאו",
    columnEdit: "ערוך עמודה: {0}",
    itemEdit: "ערוך פריט: {0}",
    url: "כתובת URL של השירות",
    path: "נתיב למידע במקור השירות",
    choicesbyurl: {
      url: "כתובת URL של שירות אינטרנט",
      valueName: "קבל ערכים משדה JSON הבא"
    },
    titleName: "קבל טקסטים להצגה משדה JSON הבא",
    imageLinkName: "קבל קישורים לתמונות משדה JSON הבא",
    allowEmptyResponse: "אפשר תשובה ריקה",
    titlePlaceholder: "כותרת",
    surveyTitlePlaceholder: "כותרת הסקר",
    pageTitlePlaceholder: "עמוד {num}",
    startPageTitlePlaceholder: "דף פתיחה",
    descriptionPlaceholder: "תיאור",
    surveyDescriptionPlaceholder: "תיאור הסקר",
    pageDescriptionPlaceholder: "תיאור העמוד",
    textWrapEnabled: "אפשרויות גלישה",
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
    allowCustomChoices: "מתן אפשרות לבחירות מותאמות אישית",
    visible: "נראה",
    isRequired: "נדרש",
    markRequired: "סמן כשדה חובה",
    removeRequiredMark: "הסר את הסימון כשדה חובה",
    eachRowRequired: "חובה על תשובה בכל השורות",
    eachRowUnique: "מניעת תגובות כפולות בשורות",
    requiredErrorText: "הודעת שגיאה לשדה חובה",
    startWithNewLine: "הצג את השאלה בשורה חדשה",
    rows: "שורות",
    cols: "עמודות",
    placeholder: "מקום להזנה",
    showPreview: "הצג אזור תצוגה מקדימה",
    storeDataAsText: "אחסן תוכן קובץ בתוצאת JSON כטקסט",
    maxSize: "גודל הקובץ המרבי (בבתים)",
    rowCount: "כמות השורות",
    columnLayout: "סידור העמודות",
    addRowButtonLocation: "מיקום כפתור הוסף שורה",
    transposeData: "ביצוע חילוף שורות לעמודות",
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
    clearInvisibleValues: "נקה ערכים בלתי נראים",
    cookieName: "שם העוגיה",
    partialSendEnabled: "שמור תוצאות סקר חלקיות בתהליך",
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
    navigationButtonsLocation: "יישור לחצני ניווט",
    showPrevButton: "הצג את לחצן 'עמוד קודם'",
    firstPageIsStartPage: "העמוד הראשון הוא עמוד התחלה",
    showCompletePage: "הצג עמוד 'סקר הושלם'",
    autoAdvanceEnabled: "עבור אוטומטית לעמוד הבא",
    autoAdvanceAllowComplete: "השלם את הסקר באופן אוטומטי",
    showProgressBar: "מיקום שורת ההתקדמות",
    progressBarLocation: "יישור מד התקדמות",
    questionTitleLocation: "מיקום כותרת השאלה",
    questionTitleWidth: "רוחב כותרת השאלה",
    requiredMark: "סמן נדרש(ים)",
    questionTitleTemplate: "תבנית כותרת השאלה, ברירת המחדל היא: '{no}. {require} {title}'",
    questionErrorLocation: "מיקום הודעת השגיאה",
    autoFocusFirstQuestion: "התמקד על השאלה הראשונה בעמוד חדש",
    questionOrder: "סדר הרכיבים בעמוד",
    timeLimit: "גבול זמן לסיום הסקר (בשניות)",
    timeLimitPerPage: "גבול זמן לסיום עמוד אחד (בשניות)",
    showTimer: "שימוש בטיימר",
    timerLocation: "מיקום הטיימר",
    timerInfoMode: "מצב הטיימר",
    renderMode: "מצב תצוגת הפאנל",
    allowAddPanel: "אפשר הוספת פאנלים",
    allowRemovePanel: "אפשר הסרת פאנלים",
    addPanelText: "טקסט לכפתור 'הוסף פאנל'",
    removePanelText: "טקסט לכפתור 'הסר פאנל'",
    isSinglePage: "הצג את כל הרכיבים בעמוד אחד",
    html: "קוד HTML",
    setValue: "תשובה",
    dataFormat: "פורמט תמונה",
    allowAddRows: "אפשר הוספת שורות",
    allowRemoveRows: "אפשר הסרת שורות",
    allowRowReorder: "אפשר גרירה ושחרור שורות",
    responsiveImageSizeHelp: "לא יחול אם אתה מציין את רוחב או גובה התמונה באופן ישיר.",
    minImageWidth: "רוחב תמונה מינימלי",
    maxImageWidth: "רוחב תמונה מקסימלי",
    minImageHeight: "גובה תמונה מינימלי",
    maxImageHeight: "גובה תמונה מקסימלי",
    minValue: "ערך מינימלי",
    maxValue: "ערך מקסימלי",
    caseInsensitive: "לא תלוי רישיות",
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
    maxCommentLength: "אורך מקסימלי להערות (בתווים)",
    commentAreaRows: "גובה אזור הערה (בשורות)",
    autoGrowComment: "הרחבה אוטומטית של אזור ההערות כראוי",
    allowResizeComment: "אפשר התאמה ידנית של אזורי טקסט על ידי המשתמש",
    textUpdateMode: "עדכן את ערך הטקסט של השאלה",
    maskType: "סוג מסיכת קלט",
    autoFocusFirstError: "קפיצה לתשובה השגויה הראשונה",
    checkErrorsMode: "הפעל את האימות",
    validateVisitedEmptyFields: "אימות שדות ריקים במיקוד שאבד",
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
    searchMode: "מצב חיפוש",
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
    panelCount: "מספר פאנלים ראשוני",
    minPanelCount: "מספר פאנלים מינימלי",
    maxPanelCount: "מספר פאנלים מקסימלי",
    panelsState: "מצב הרחבת הפאנל הפנימי",
    prevPanelText: "טקסט הרחבת הפאנל הקודם",
    nextPanelText: "טקסט הרחבת הפאנל הבא",
    removePanelButtonLocation: "מיקום לחצן 'הסר פאנל'",
    hideIfRowsEmpty: "הסתר את השאלה אם אין שורות",
    hideColumnsIfEmpty: "הסתר עמודות אם אין שורות",
    rateValues: "ערכי דירוג מותאמים אישית",
    rateCount: "כמות הדירוגים",
    autoGenerate: "איך לציין ערכי דירוג?",
    hideIfChoicesEmpty: "הסתר את השאלה אם אין בה בחירות",
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
    logoWidth: "רוחב הלוגו (בערכים שמקובלים ב- CSS)",
    logoHeight: "גובה הלוגו (בערכים שמקובלים ב- CSS)",
    readOnly: "קריאה בלבד",
    enableIf: "ניתן לעריכה אם",
    noRowsText: "הודעה: 'אין שורות'",
    separateSpecialChoices: "הפרד בחירות מיוחדות (אף אחת, אחר, בחר הכול)",
    choicesFromQuestion: "העתק בחירות משאלה זו",
    choicesFromQuestionMode: "אילו בחירות להעתיק?",
    choiceValuesFromQuestion: "השתמש בערכים משאלת עמודת המטריצה או החלונית הבאה כמזהי בחירה",
    choiceTextsFromQuestion: "השתמש בערכים מעמודת המטריצה או משאלת החלונית הבאה כטקסטים נבחרים",
    progressBarShowPageTitles: "הצגת כותרות עמודים בסרגל ההתקדמות",
    progressBarShowPageNumbers: "הצגת מספרי עמודים במד ההתקדמות",
    showCommentArea: "הצג את אזור התגובה",
    commentPlaceholder: "טקסט ממלא מקום לאזור התגובה",
    displayRateDescriptionsAsExtremeItems: "הצג תיאורי דירוג כערכים קצה",
    rowOrder: "סדר השורות",
    columnsLayout: "פריסת עמודות",
    columnColCount: "ספירת עמודות מקוננות",
    correctAnswer: "תשובה נכונה",
    defaultPanelValue: "ערכים ברירת מחדל",
    cells: "טקסטי תאים",
    fileInputPlaceholder: "בחר קובץ או הדבק קישור לקובץ...",
    keyName: "עמודת מפתח",
    itemvalue: {
      visibleIf: "הפוך את האפשרות לגלויה אם",
      enableIf: "הפוך את האפשרות לניתנת לבחירה אם"
    },
    "itemvalue@rows": {
      visibleIf: "הפיכת השורה לגלויה אם",
      enableIf: "הפיכת השורה לניתנת לעריכה אם"
    },
    imageitemvalue: {
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
    previewMode: "מצב תצוגה מקדימה",
    gridLayoutEnabled: "הפיכת פריסת הרשת לזמינה",
    gridLayoutColumns: "עמודות פריסת רשת",
    maskSettings: "קביעות מסיכה",
    detailErrorLocation: "יישור הודעת שגיאה של הרחבת שורה",
    // Creator tabs
    tabs: {
      panel: {
        layout: "פריסת חלונית"
      },
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
      mask: "הגדרות מסיכת קלט",
      layout: {
        panel: "פריסה",
        question: "פריסה",
        base: "פריסה"
      },
      data: "נתונים",
      validation: "אימות",
      cells: "טקסטי תאים",
      showOnCompleted: "השאלון הושלם",
      logo: "לוגו בכותרת השאלון",
      slider: "מחוון",
      expression: "ביטוי",
      questionSettings: "הגדרות שאלה",
      header: "כותרת",
      background: "רקע",
      appearance: "מראה",
      accentColors: "צבעי הדגשה",
      surfaceBackground: "רקע פני השטח",
      scaling: "שינוי גודל",
      others: "אחרים"
    },
    editProperty: "עריכת מאפיין '{0}'",
    items: "פריטים",
    choicesVisibleIf: "הבחירות יוצגו אם",
    choicesEnableIf: "ניתן לבחור את האפשרויות אם",
    columnsEnableIf: "העמודות יוצגו אם",
    rowsEnableIf: "השורות יוצגו אם",
    innerIndent: "הוסף כניסות פנימיות",
    copyDefaultValueFromLastEntry: "קבל ערכי ברירת מחדל מהפאנל האחרון",
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
    verticalAlign: "יישור אנכי",
    alternateRows: "שורות חלופיות",
    columnsVisibleIf: "העמודות יוצגו אם",
    rowsVisibleIf: "השורות יוצגו אם",
    otherPlaceholder: "מציין מקום לתגובה",
    filePlaceholder: "טקסט מציין מיקום קובץ",
    photoPlaceholder: "טקסט מציין מיקום תמונה",
    fileOrPhotoPlaceholder: "טקסט מציין מיקום של קובץ או תמונה",
    rateType: "סוג דירוג",
    url_placeholder: "לדוגמה: https://api.example.com/books",
    path_placeholder: "לדוגמה: קטגוריות.בדיוני",
    questionStartIndex_placeholder: "לדוגמה: א)",
    width_placeholder: "לדוגמה: 6in",
    minWidth_placeholder: "לדוגמה: 600px",
    maxWidth_placeholder: "לדוגמה: 50%",
    imageHeight_placeholder: "אוטומטי",
    imageWidth_placeholder: "אוטומטי",
    itemTitleWidth_placeholder: "לדוגמה: 100px",
    theme: {
      themeName: "ערכת נושא",
      isPanelless: "מראה השאלה",
      editorPanel: "רקע ורדיוס פינה",
      questionPanel: "רקע ורדיוס פינה",
      primaryColor: "צבע הדגשה",
      panelBackgroundTransparency: "אטימות רקע של החלונית",
      questionBackgroundTransparency: "אטימות רקע השאלה",
      fontSize: "גודל גופן",
      scale: "סולם",
      cornerRadius: "רדיוס פינה",
      advancedMode: "מצב מתקדם",
      pageTitle: "גופן כותרת",
      pageDescription: "גופן תיאור",
      questionTitle: "גופן כותרת",
      questionDescription: "גופן תיאור",
      editorFont: "גופן",
      backgroundOpacity: "אטימות",
      "--sjs-font-family": "משפחת גופנים",
      "--sjs-general-backcolor-dim": "צבע רקע",
      "--sjs-primary-backcolor": "רקע הדגשה",
      "--sjs-primary-forecolor": "הדגשת החזית",
      "--sjs-special-red": "הודעות שגיאה",
      "--sjs-shadow-small": "אפקטי צל",
      "--sjs-shadow-inner": "אפקטי צל",
      "--sjs-border-default": "צבעים"
    },
    "header@header": {
      headerView: "נוף",
      logoPosition: "מיקום הלוגו",
      surveyTitle: "גופן כותרת סקר",
      surveyDescription: "גופן תיאור סקר",
      headerTitle: "גופן כותרת סקר",
      headerDescription: "גופן תיאור סקר",
      inheritWidthFrom: "רוחב אזור תוכן",
      textAreaWidth: "רוחב טקסט",
      backgroundColorSwitch: "צבע רקע",
      backgroundImage: "תמונת רקע",
      backgroundImageOpacity: "אטימות",
      overlapEnabled: "חופפים",
      logoPositionX: "מיקום הלוגו",
      titlePositionX: "מיקום בתפקיד",
      descriptionPositionX: "תיאור מיקום"
    }
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
    selected: "שנבחרו",
    unselected: "לא נבחר",
    decimal: "עשרוני",
    currency: "מטבע",
    percent: "אחוזים",
    firstExpanded: "הפאנל הראשון מורחב",
    off: "הסתר מספרי שאלות",
    list: "רשימה",
    carousel: "קרוסלה",
    tab: "כרטיסיות",
    progressTop: "ניווט בפאנל + סרגל התקדמות בחלק העליון",
    progressBottom: "ניווט בפאנל + סרגל התקדמות בחלק התחתון",
    progressTopBottom: "ניווט בפאנל + סרגל התקדמות בחלק העליון והתחתון",
    horizontal: "אופקי",
    vertical: "אנכי",
    top: "עליון",
    bottom: "תחתון",
    topBottom: "עליון ותחתון",
    both: "שניהם",
    left: "שמאל",
    right: "ימין",
    center: "מרכז",
    leftRight: "ימין ושמאל",
    middle: "אמצע",
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
    edit: "ניתן לעריכה",
    display: "לקריאה בלבד",
    contain: "להכיל",
    cover: "כריכה",
    fill: "מילוי",
    next: "הבא",
    last: "אחרון",
    onComplete: "כאשר השאלון הושלם",
    onHidden: "כאשר השאלה הוסתרה",
    onHiddenContainer: "כאשר השאלה או הפאנל/העמוד שלה מוסתרים",
    clearInvisibleValues: {
      none: "לעולם"
    },
    clearIfInvisible: {
      none: "אף פעם"
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
    autocomplete: {
      name: "שם מלא",
      "honorific-prefix": "קידומת",
      "given-name": "שם פרטי",
      "additional-name": "שם אמצעי",
      "family-name": "שם משפחה",
      "honorific-suffix": "סיומת",
      nickname: "כינוי",
      "organization-title": "תפקיד",
      username: "שם משתמש",
      "new-password": "סיסמה חדשה",
      "current-password": "סיסמה נוכחית",
      organization: "שם הארגון",
      "street-address": "כתובת הרחוב המלאה",
      "address-line1": "כתובת שורה 1",
      "address-line2": "כתובת שורה 2",
      "address-line3": "כתובת שורה 3",
      "address-level4": "כתובת ברמה 4",
      "address-level3": "כתובת ברמה 3",
      "address-level2": "כתובת ברמה 2",
      "address-level1": "כתובת ברמה 1",
      country: "קוד מדינה",
      "country-name": "שם מדינה",
      "postal-code": "מיקוד",
      "cc-name": "שם בעל הכרטיס",
      "cc-given-name": "שם פרטי של בעל הכרטיס",
      "cc-additional-name": "שם אמצעי של בעל הכרטיס",
      "cc-family-name": "שם משפחה של בעל הכרטיס",
      "cc-number": "מספר כרטיס אשראי",
      "cc-exp": "תאריך תפוגה",
      "cc-exp-month": "חודש תפוגה",
      "cc-exp-year": "שנת תפוגה",
      "cc-csc": "קוד אבטחה של כרטיס",
      "cc-type": "סוג כרטיס אשראי",
      "transaction-currency": "מטבע עסקה",
      "transaction-amount": "סכום העסקה",
      language: "שפה מועדפת",
      bday: "יום הולדת",
      "bday-day": "יום הולדת",
      "bday-month": "חודש יום הולדת",
      "bday-year": "שנת יום הולדת",
      sex: "מין",
      url: "כתובת אתר אינטרנט",
      photo: "תמונת פרופיל",
      tel: "מספר טלפון",
      "tel-country-code": "קידומת מדינה לטלפון",
      "tel-national": "מספר טלפון ארצי",
      "tel-area-code": "אזור חיוג",
      "tel-local": "מספר טלפון מקומי",
      "tel-local-prefix": "קידומת טלפון מקומי",
      "tel-local-suffix": "סיומת טלפון מקומי",
      "tel-extension": "שלוחת טלפון",
      email: "כתובת דוא\"ל",
      impp: "פרוטוקול העברת הודעות מיידיות"
    },
    maskType: {
      none: "ללא",
      pattern: "תבנית",
      numeric: "מספריים",
      datetime: "תאריך ושעה",
      currency: "מטבע"
    },
    inputTextAlignment: {
      auto: "אוטומטי",
      left: "שמאל",
      right: "ימין"
    },
    all: "הכל",
    page: "עמוד",
    survey: "שאלון",
    onNextPage: "כאשר מתבצע מעבר לעמוד הבא",
    onValueChanged: "לאחר שהתשובה השתנתה",
    onValueChanging: "לפני שהתשובה השתנתה",
    questionsOnPageMode: {
      standard: "מבנה מקורי",
      singlePage: "הצג את כל השאלות בעמוד אחד",
      questionPerPage: "הצגת שאלה בודדת בכל עמוד"
    },
    noPreview: "אין תצוגה מקדימה",
    showAllQuestions: "הצג את כל השאלות",
    showAnsweredQuestions: "הצג רק שאלות עם תשובות",
    allQuestions: "הצג את כל השאלות",
    answeredQuestions: "הצג שאלות שנענו בלבד",
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
    auto: "אוטומטי",
    showNavigationButtons: {
      none: "מוסתר"
    },
    timerInfoMode: {
      combined: "שני הצדדים"
    },
    addRowButtonLocation: {
      default: "תלוי בפריסת המטריצה"
    },
    panelsState: {
      default: "המשתמשים לא יכולים להרחיב או לכווץ פאנלים",
      collapsed: "כל הפאנלים מכווצים",
      expanded: "כל הפאנלים מורחבים",
      firstExpanded: "הראשון הורחב"
    },
    widthMode: {
      static: "סטטי",
      responsive: "רספונסיבי"
    },
    contentMode: {
      image: "תמונה",
      video: "וידאו",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "כפתורים",
      dropdown: "רשימה נפתחת"
    },
    rateColorMode: {
      default: "ברירת מחדל",
      scale: "סולם"
    },
    scaleColorMode: {
      monochrome: "מונוכרום",
      colored: "צבעוניים"
    },
    autoGenerate: {
      "true": "יצירה אוטומטית",
      "false": "הזנה ידנית"
    },
    rateType: {
      labels: "תווי ניקוד",
      stars: "כוכבים",
      smileys: "סמיילים"
    },
    state: {
      default: "נעול"
    },
    showQuestionNumbers: {
      default: "מספור אוטומטי",
      on: "מספור אוטומטי",
      onPage: "איפוס בכל עמוד",
      onpanel: "איפוס בכל חלונית",
      onPanel: "איפוס בכל חלונית",
      recursive: "מספור רקורסיבי",
      onSurvey: "המשך לאורך הסקר",
      off: "ללא מספור"
    },
    descriptionLocation: {
      underTitle: "תחת כותרת השאלה",
      underInput: "מתחת לשדה הקלט"
    },
    selectToRankAreasLayout: {
      horizontal: "לצד אפשרויות בחירה",
      vertical: "אפשרויות מעל"
    },
    displayStyle: {
      decimal: "עשרוני",
      currency: "מטבע",
      percent: "אחוז",
      date: "תמר"
    },
    totalDisplayStyle: {
      decimal: "עשרוני",
      currency: "מטבע",
      percent: "אחוז",
      date: "תמר"
    },
    rowOrder: {
      initial: "מקורי"
    },
    questionOrder: {
      initial: "מקורי"
    },
    progressBarLocation: {
      top: "סביבון",
      bottom: "ישבן",
      topbottom: "עליון ותחתון",
      aboveheader: "מעל הכותרת העליונה",
      belowheader: "מתחת לכותרת העליונה",
      off: "מוסתרים"
    },
    sum: "סכום",
    count: "מנה",
    min: "דקות",
    max: "מקס",
    avg: "ממוצע",
    searchMode: {
      contains: "מכיל",
      startsWith: "מתחיל ב"
    },
    backgroundImageFit: {
      auto: "אוטומטי",
      cover: "כריכה",
      contain: "להכיל",
      fill: "מתיחה",
      tile: "אריח"
    },
    backgroundImageAttachment: {
      fixed: "קבוע",
      scroll: "לגלול"
    },
    headerView: {
      basic: "בסיסי",
      advanced: "מתקדמים"
    },
    inheritWidthFrom: {
      survey: "זהה לסקר",
      container: "התאמה למיכל"
    },
    backgroundColorSwitch: {
      none: "ללא",
      accentColor: "צבע הדגשה",
      custom: "מנהג"
    },
    colorPalette: {
      light: "אור",
      dark: "חשוך"
    },
    isPanelless: {
      "false": "ברירת מחדל",
      "true": "ללא פאנלים"
    },
    progressBarInheritWidthFrom: {
      survey: "זהה לסקר",
      container: "זהה למיכל"
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
  peplaceholder: {
    patternmask: {
      pattern: "לדוגמה: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "לדוגמה: mm/dd/yyyy"
    },
    currencymask: {
      prefix: "לדוגמה: $",
      suffix: "לדוגמה: USD"
    },
    panelbase: {
      questionTitleWidth: "לדוגמה: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "לדוגמה: 30%",
      questionTitleWidth: "לדוגמה: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "מזהה חלונית שאינו גלוי למשיבים.",
      description: "הקלד כותרת משנה של חלונית.",
      visibleIf: "השתמשו בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את תצוגת החלונית.",
      enableIf: "השתמשו בסמל מטה הקסם כדי להגדיר כלל מותנה שמשבית את מצב הקריאה בלבד של החלונית.",
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה.",
      questionTitleLocation: "חל על כל השאלות בפאנל זה. אם ברצונך לעקוף הגדרה זו, הגדר כללי יישור כותרת עבור שאלות בודדות. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל).",
      questionTitleWidth: "הגדרת רוחב עקבי לכותרות שאלות כאשר הן מיושרות משמאל לתיבות השאלות. מקבל ערכי CSS (px, %, in, pt וכו').",
      questionErrorLocation: "קובע את המיקום של הודעת שגיאה ביחס לכל השאלות בחלונית. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר.",
      questionOrder: "שומר על הסדר המקורי של השאלות או מסדר אותן באופן אקראי. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר.",
      page: "מיקום מחדש של החלונית לסוף עמוד שנבחר.",
      innerIndent: "מוסיף רווח או שוליים בין תוכן החלונית לגבול השמאלי של תיבת החלונית.",
      startWithNewLine: "בטל את הבחירה כדי להציג את החלונית בשורה אחת עם השאלה או החלונית הקודמת. ההגדרה אינה חלה אם החלונית היא הרכיב הראשון בטופס.",
      state: "בחר מתוך: \"מורחב\" - הלוח מוצג במלואו וניתן לכווץ; \"מכווץ\" - הלוח מציג רק את הכותרת והתיאור וניתן להרחיבו; \"נעול\" - הלוח מוצג במלואו ולא ניתן לכווץ.",
      width: "קובע את רוחב החלונית ביחס לרכיבי סקר אחרים באותה שורה. מקבל ערכי CSS (px, %, in, pt וכו').",
      showQuestionNumbers: "מקצה מספרים לשאלות המקוננות בלוח זה.",
      effectiveColSpan: "מציין כמה עמודות תפרוס חלונית זו בפריסת הרשת.",
      gridLayoutColumns: "טבלה זו מאפשרת להגדיר כל עמודת רשת בחלונית. הוא מגדיר באופן אוטומטי את אחוז הרוחב עבור כל עמודה בהתבסס על המספר המרבי של רכיבים בשורה. כדי להתאים אישית את פריסת הרשת, התאם ערכים אלה באופן ידני והגדר את רוחב הכותרת עבור כל השאלות בכל עמודה."
    },
    paneldynamic: {
      name: "מזהה חלונית שאינו גלוי למשיבים.",
      description: "הקלד כותרת משנה של חלונית.",
      visibleIf: "השתמשו בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את תצוגת החלונית.",
      enableIf: "השתמשו בסמל מטה הקסם כדי להגדיר כלל מותנה שמשבית את מצב הקריאה בלבד של החלונית.",
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה.",
      templateQuestionTitleLocation: "חל על כל השאלות בפאנל זה. אם ברצונך לעקוף הגדרה זו, הגדר כללי יישור כותרת עבור שאלות בודדות. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל).",
      templateQuestionTitleWidth: "מגדיר רוחב עקבי לכותרות השאלות כשהן מיושרות לשמאל של תיבות השאלה שלהן. מקבל ערכי CSS (px, %, in, pt וכדומה).",
      templateErrorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל).",
      errorLocation: "קובע את המיקום של הודעת שגיאה ביחס לכל השאלות בחלונית. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר.",
      page: "מיקום מחדש של החלונית לסוף עמוד שנבחר.",
      innerIndent: "מוסיף רווח או שוליים בין תוכן החלונית לגבול השמאלי של תיבת החלונית.",
      startWithNewLine: "בטל את הבחירה כדי להציג את החלונית בשורה אחת עם השאלה או החלונית הקודמת. ההגדרה אינה חלה אם החלונית היא הרכיב הראשון בטופס.",
      state: "בחר מתוך: \"מורחב\" - הלוח מוצג במלואו וניתן לכווץ; \"מכווץ\" - הלוח מציג רק את הכותרת והתיאור וניתן להרחיבו; \"נעול\" - הלוח מוצג במלואו ולא ניתן לכווץ.",
      width: "קובע את רוחב החלונית ביחס לרכיבי סקר אחרים באותה שורה. מקבל ערכי CSS (px, %, in, pt וכו').",
      templateTitle: "הקלד תבנית לכותרות חלוניות דינמיות. השתמש ב- {panelIndex} למיקום הכללי של החלונית וב- {visiblePanelIndex} לסדר שלה בין חלוניות גלויות. הוסף מצייני מיקום אלה לתבנית כדי להוסיף מספור אוטומטי.",
      templateTabTitle: "הקלד תבנית עבור כותרות כרטיסיות. השתמש ב- {panelIndex} למיקום הכללי של חלונית וב- {visiblePanelIndex} לסדר שלה בין חלוניות גלויות. הוסף מצייני מיקום אלה לתבנית כדי להוסיף מספור אוטומטי.",
      tabTitlePlaceholder: "טקסט נסיגה עבור כותרות טאבים שחל כאשר תבנית כותרת הטאב אינה מפיקה ערך בעל משמעות.",
      templateVisibleIf: "קביעה זו מאפשרת לשלוט בתצוגה של חלוניות בודדות בחלונית הדינמית. השתמש במציין המיקום '{panel}' כדי להפנות לחלונית הנוכחית בביטוי שלך.",
      titleLocation: "הגדרה זו עוברת בירושה אוטומטית לכל השאלות בחלונית זו. אם ברצונך לעקוף הגדרה זו, הגדר כללי יישור כותרת עבור שאלות בודדות. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל).",
      descriptionLocation: "האפשרות \"הירושה\" מחילה את ההגדרה ברמת העמוד (אם הוגדרה) או ברמת הסקר (\"תחת כותרת החלונית\" כברירת מחדל).",
      newPanelPosition: "מגדיר את המיקום של חלונית חדשה שנוספה. כברירת מחדל, חלוניות חדשות מתווספות לסוף. בחר \"הבא\" כדי להוסיף חלונית חדשה אחרי הנוכחית.",
      copyDefaultValueFromLastEntry: "משכפל תשובות מהחלונית האחרונה ומקצה אותן לחלונית הדינמית הבאה שנוספה.",
      keyName: "הפנה לשם שאלה כדי לדרוש מהמשתמש לספק תשובה ייחודית לשאלה זו בכל חלונית."
    },
    copyDefaultValueFromLastEntry: "משכפל תשובות מהשורה האחרונה ומקצה אותן לשורה הדינמית הבאה שנוספה.",
    defaultValueExpression: "הגדרה זו מאפשרת לך להקצות ערך ברירת מחדל לתשובה בהתבסס על ביטוי. הביטוי יכול לכלול חישובים בסיסיים - '{q1_id} + {q2_id}', ביטויים בוליאניים, כגון '{age} > 60', ופונקציות: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו'. הערך שנקבע על-ידי ביטוי זה משמש כערך ברירת המחדל הראשוני שניתן לעקוף באמצעות קלט ידני של משיב.",
    resetValueIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע מתי הקלט של המשיב יאופס לערך בהתבסס על \"ביטוי ערך ברירת מחדל\" או \"הגדר ביטוי ערך\" או על הערך \"תשובת ברירת מחדל\" (אם אחד מהם מוגדר).",
    setValueIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע מתי להפעיל את \"Set value expression\" ולהקצות באופן דינמי את הערך המתקבל כתגובה.",
    setValueExpression: "ציין ביטוי המגדיר את הערך שיש להגדיר כשהתנאים בכלל \"הגדר ערך אם\" מתקיימים. הביטוי יכול לכלול חישובים בסיסיים - '{q1_id} + {q2_id}', ביטויים בוליאניים, כגון '{age} > 60', ופונקציות: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו'. הערך שנקבע על ידי ביטוי זה ניתן לדריסת קלט ידני של המשיב.",
    gridLayoutEnabled: "יוצר הסקר מאפשר לך להתאים באופן ידני את רוחב השורה של רכיבי טופס כדי לשלוט בפריסה. אם פעולה זו אינה מפיקה את התוצאה הרצויה, ניתן להפעיל את פריסת הרשת, הבונה רכיבי טופס באמצעות מערכת מבוססת עמודות. כדי להגדיר עמודות פריסה, בחר עמוד או חלונית והשתמש בטבלה \"הגדרות שאלה\" → \"עמודות רשת\". כדי להתאים את מספר העמודות ששאלה משתרעת, בחר אותה והגדר את הערך הרצוי בשדה \"פריסה\" → \"טווח עמודות\".",
    question: {
      name: "מזהה שאלה שאינו גלוי למשיבים.",
      description: "הקלד כותרת משנה של שאלה.",
      visibleIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע את נראות השאלה.",
      enableIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי שמשבית את מצב הקריאה בלבד עבור השאלה.",
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע קידום או שליחה של סקר, אלא אם כן השאלה קיבלה תשובה.",
      startWithNewLine: "בטל את הבחירה כדי להציג את השאלה בשורה אחת עם השאלה או החלונית הקודמת. ההגדרה אינה חלה אם השאלה היא הרכיב הראשון בטופס.",
      page: "מיקום מחדש של השאלה לסוף עמוד שנבחר.",
      state: "בחר מתוך: \"מורחב\" - תיבת השאלה מוצגת במלואה וניתן לכווץ אותה; \"מכווץ\" - תיבת השאלה מציגה רק את הכותרת והתיאור וניתן להרחיבה; \"נעול\" - תיבת השאלה מוצגת במלואה ולא ניתן לכווץ אותה.",
      titleLocation: "דורס כללי יישור כותרות שהוגדרו ברמת חלונית, עמוד או סקר. האפשרות \"ירושה\" מחילה הגדרות ברמה גבוהה יותר (אם הוגדרה) או הגדרה ברמת הסקר (\"עליון\" כברירת מחדל).",
      descriptionLocation: "האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"תחת כותרת השאלה\" כברירת מחדל).",
      errorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"למעלה\" כברירת מחדל).",
      indent: "מוסיף רווח או שוליים בין תוכן השאלה לבין הגבול השמאלי של תיבת השאלה.",
      width: "קובע את רוחב השאלה ביחס לרכיבי סקר אחרים באותה שורה. מקבל ערכי CSS (px, %, in, pt וכו').",
      surveyvalidator: {
        expression: "השתמש בסמל מטה הקסמים כדי להגדיר כלל אימות עבור השאלה."
      },
      textUpdateMode: "בחר מתוך: \"על מיקוד אבוד\" - הערך מתעדכן כאשר שדה הקלט מאבד את המיקוד; \"בעת הקלדה\" - הערך מתעדכן בזמן אמת, כאשר המשתמשים מקלידים. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"מיקוד אבוד\" כברירת מחדל).",
      url: "באפשרותך להשתמש בכל שירות אינטרנט כמקור נתונים לשאלות אמריקאיות. כדי לאכלס ערכי בחירה, הזן את כתובת ה- URL של השירות המספק את הנתונים.",
      searchMode: "פעולת השוואה המשמשת לסינון הרשימה הנפתחת.",
      textWrapEnabled: "טקסטים ארוכים באפשרויות בחירה ייצרו באופן אוטומטי מעברי שורה שיתאימו לתפריט הנפתח. בטל את הבחירה אם ברצונך שהטקסטים ייחתכו.",
      effectiveColSpan: "מציין כמה עמודות שאלה זו משתרעת בתוך פריסת הרשת."
    },
    signaturepad: {
      signatureWidth: "קובע את רוחב אזור החתימה המוצג ואת התמונה שתיווצר.",
      signatureHeight: "קובע את גובה אזור החתימה המוצג ואת התמונה שתיווצר.",
      signatureAutoScaleEnabled: "בחר אם ברצונך שאזור החתימה ימלא את כל השטח הזמין בתיבת השאלה תוך שמירה על יחס הרוחב-גובה המוגדר כברירת מחדל של 3:2. כאשר מוגדרים ערכי רוחב וגובה מותאמים אישית, ההגדרה תשמור על יחס הרוחב-גובה של ממדים אלה."
    },
    file: {
      imageHeight: "התאמת גובה התמונה בתוצאות הסקר.",
      imageWidth: "התאמת רוחב התמונה בתוצאות הסקר.",
      allowImagesPreview: "מציג תצוגות מקדימות של תמונות ממוזערות עבור קבצים שהועלו במידת האפשר. בטל את הבחירה אם ברצונך להציג סמלי קבצים במקום זאת."
    },
    image: {
      contentMode: "האפשרות \"אוטומטי\" קובעת אוטומטית את המצב המתאים לתצוגה - תמונה, וידאו או YouTube - בהתבסס על כתובת האתר המקורית שסופקה."
    },
    imagepicker: {
      imageHeight: "דורס את ערכי הגובה המינימליים והמרביים.",
      imageWidth: "דורס את ערכי הרוחב המינימליים והמרביים.",
      choices: "\"ערך\" משמש כמזהה פריט המשמש בכללים מותנים; \"טקסט\" מוצג למשיבים.",
      contentMode: "בחר בין \"תמונה\" ו\"וידאו\" כדי להגדיר את מצב התוכן של בורר המדיה. אם נבחרה האפשרות \"תמונה\", ודא שכל האפשרויות שסופקו הן קובצי תמונה בתבניות הבאות: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. באופן דומה, אם נבחר \"וידאו\", ודא שכל האפשרויות הן קישורים ישירים לקבצי וידאו בפורמטים הבאים: MP4, MOV, WMV, FLV, AVI, MKV. שים לב שקישורי YouTube אינם נתמכים עבור אפשרויות וידאו."
    },
    text: {
      size: "הגדרה זו משנה את גודל שדה הקלט בלבד ואינה משפיעה על רוחב תיבת השאלה. כדי להגביל את אורך הקלט המקובל, עבור אל <b>אימות → מגבלת תווים מרבית</b>."
    },
    comment: {
      rows: "מגדיר את מספר השורות המוצגות בשדה הקלט. אם הקלט תופס שורות נוספות, פס הגלילה יופיע."
    },
    // survey templates
    survey: {
      readOnly: "בחר אם ברצונך למנוע מהמשיבים למלא את הסקר שלך.",
      progressBarLocation: "מגדיר את המיקום של מד ההתקדמות. הערך \"אוטומטי\" מציג את מד ההתקדמות מעל או מתחת לכותרת הסקר."
    },
    matrixdropdowncolumn: {
      name: "מזהה עמודה שאינו גלוי למשיבים.",
      isUnique: "כאשר אפשרות זו זמינה עבור עמודה, המשיב נדרש לספק תשובה ייחודית לכל שאלה בעמודה זו.",
      rows: "מגדיר את מספר השורות המוצגות בשדה הקלט. אם הקלט תופס שורות נוספות, פס הגלילה יופיע.",
      visibleIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את נראות העמודה.",
      enableIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי שמשבית את מצב הקריאה בלבד עבור העמודה.",
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה.",
      showInMultipleColumns: "כשבוחרים באפשרות זו, יוצר עמודה נפרדת לכל אחת מאפשרויות הבחירה.",
      colCount: "מסדר אפשרויות בחירה בפריסה מרובת עמודות. כאשר הן מוגדרות על 0, האפשרויות מוצגות בשורה אחת. כאשר הוא מוגדר ל- -1, הערך בפועל עובר בירושה מהמאפיין \"ספירת עמודות מקוננת\" של מטריצת האב."
    },
    caseInsensitive: "בחר אם יש להתייחס לאותיות רישיות וקטנות בביטוי הרגיל כשוות ערך.",
    widthMode: "בחר מתוך: \"סטטי\" - קובע רוחב קבוע; \"מגיב\" - עושה את הסקר לתפוס את מלוא רוחב המסך; \"אוטומטי\" - חל על כל אחד מהשניים בהתאם לסוגי השאלות המשמשים.",
    cookieName: "עוגיות מונעות ממשתמשים למלא את אותו סקר פעמיים.",
    logo: "הדבק קישור לתמונה (ללא מגבלות גודל) או לחץ על סמל התיקייה כדי לעיין בקובץ מהמחשב שלך (עד 64KB).",
    logoWidth: "הגדרת רוחב לוגו ביחידות CSS (px, %, in, pt וכו').",
    logoHeight: "הגדרת גובה סמל ביחידות CSS (px, %, in, pt וכו').",
    logoFit: "בחר מתוך: \"ללא\" - התמונה שומרת על גודלה המקורי; \"להכיל\" - גודל התמונה משתנה כדי להתאים תוך שמירה על יחס גובה-רוחב שלה; \"כיסוי\" - התמונה ממלאת את התיבה כולה תוך שמירה על יחס הגובה-רוחב שלה; \"מילוי\" - התמונה נמתחת כדי למלא את התיבה מבלי לשמור על יחס הגובה-רוחב שלה.",
    autoAdvanceEnabled: "בחר אם ברצונך שהסקר יתקדם אוטומטית לדף הבא לאחר שהמשיב ענה על כל השאלות בדף הנוכחי. תכונה זו לא תחול אם השאלה האחרונה בדף פתוחה או מאפשרת תשובות מרובות.",
    autoAdvanceAllowComplete: "בחר אם ברצונך שהסקר יושלם באופן אוטומטי לאחר שמשיב עונה על כל השאלות.",
    showNavigationButtons: "מגדיר את התצוגה והמיקום של לחצני ניווט בעמוד.",
    navigationButtonsLocation: "הגדרת המיקום של לחצני ניווט בעמוד.",
    showPreviewBeforeComplete: "הפעל את דף התצוגה המקדימה עם כל השאלות או שאלות שנענו בלבד.",
    questionTitleLocation: "חל על כל השאלות בסקר. ניתן לדרוס הגדרה זו באמצעות כללי יישור כותרות ברמות נמוכות יותר: חלונית, עמוד או שאלה. הגדרה ברמה נמוכה יותר תעקוף את אלה ברמה גבוהה יותר.",
    requiredMark: "סמל או רצף של סמלים המציינים כי נדרשת תשובה.",
    questionStartIndex: "הזן מספר או אות שבאמצעותם ברצונך להתחיל במספור.",
    questionErrorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה.",
    autoFocusFirstQuestion: "בחר אם ברצונך ששדה הקלט הראשון בכל עמוד יהיה מוכן להזנת טקסט.",
    questionOrder: "שומר על הסדר המקורי של השאלות או מסדר אותן באופן אקראי. ההשפעה של הגדרה זו גלויה רק בכרטיסיה תצוגה מקדימה.",
    maxTextLength: "לשאלות הזנת טקסט בלבד.",
    maxCommentLength: "להערות לשאלה בלבד.",
    commentAreaRows: "מגדיר את מספר השורות המוצגות באזורי טקסט להערות שאלה. אם הקלט תופס שורות נוספות, פס הגלילה מופיע.",
    autoGrowComment: "בחר אם ברצונך שהערות שאלה ושאלות טקסט ארוך יגדלו באופן אוטומטי לגובה בהתבסס על אורך הטקסט שהוזנו.",
    allowResizeComment: "להערות לשאלות ולשאלות טקסט ארוך בלבד.",
    calculatedValues: "משתנים מותאמים אישית משמשים כמשתני ביניים או משתני עזר המשמשים בחישובי טפסים. הם לוקחים תשומות משיבים כערכי מקור. לכל משתנה מותאם אישית יש שם ייחודי וביטוי שעליו הוא מבוסס.",
    includeIntoResult: "בחר אם ברצונך לשמור את הערך המחושב של הביטוי יחד עם תוצאות הסקר.",
    triggers: "גורם מפעיל הוא אירוע או תנאי המבוסס על ביטוי. לאחר הערכת הביטוי כ- \"true\", גורם מפעיל מגדיר פעולה. לפעולה כזו יכולה להיות שאלת יעד שהיא משפיעה עליה.",
    clearInvisibleValues: "בחר אם לנקות ערכים עבור שאלות המוסתרות על-ידי לוגיקה מותנית ומתי לעשות זאת.",
    textUpdateMode: "בחר מתוך: \"על מיקוד אבוד\" - הערך מתעדכן כאשר שדה הקלט מאבד את המיקוד; \"בעת הקלדה\" - הערך מתעדכן בזמן אמת, כאשר המשתמשים מקלידים.",
    columns: "הערך השמאלי משמש כמזהה עמודה המשמש בכללי תנאי, הערך הימני מוצג למשיבים.",
    rows: "הערך השמאלי משמש כמזהה שורה המשמש בכללי תנאי, הערך הימני מוצג למשיבים.",
    columnMinWidth: "מקבל ערכי CSS (px, %, in, pt וכו').",
    rowTitleWidth: "מקבל ערכי CSS (px, %, in, pt וכו').",
    totalText: "נראה רק כאשר לפחות עמוד אחד מכיל עמוד סוג או ביטוי סוג.",
    cellErrorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לתא עם קלט לא חוקי. האפשרות \"ירושה\" מחילה את ההגדרה מהמאפיין \"יישור הודעת שגיאה\".",
    detailErrorLocation: "הגדרת המיקום של הודעות שגיאה עבור שאלות המקוננות במקטעים מפורטים. האפשרות \"ירושה\" מחילה את ההגדרה מהמאפיין \"יישור הודעת שגיאה\".",
    keyDuplicationError: "כאשר המאפיין \"מנע תגובות כפולות\" מופעל, משיב שינסה לשלוח ערך כפול יקבל את הודעת השגיאה הבאה.",
    totalExpression: "מאפשר לחשב ערכים כוללים בהתבסס על ביטוי. הביטוי יכול לכלול חישובים בסיסיים ('{q1_id} + {q2_id}'), ביטויים בוליאניים ('{age} > 60') ופונקציות ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו').",
    confirmDelete: "מפעיל בקשה המבקשת לאשר את מחיקת השורות.",
    keyName: "אם העמודה שצוינה מכילה ערכים זהים, הסקר יזרוק את השגיאה \"ערך מפתח לא ייחודי\".",
    description: "הקלד כותרת משנה.",
    locale: "בחר שפה כדי להתחיל ליצור את הסקר. כדי להוסיף תרגום, עבור לשפה חדשה ותרגם את הטקסט המקורי כאן או בכרטיסיה תרגומים.",
    detailPanelMode: "הגדרת המיקום של מקטע פרטים ביחס לשורה. בחר מתוך: \"ללא\" - לא נוספה הרחבה; \"מתחת לשורה\" - הרחבת שורה ממוקמת מתחת לכל שורה של המטריצה; \"מתחת לשורה, הצג הרחבת שורה אחת בלבד\" - הרחבה מוצגת תחת שורה אחת בלבד, הרחבות השורה הנותרות מכווצות.",
    imageFit: "בחר מתוך: \"ללא\" - התמונה שומרת על גודלה המקורי; \"להכיל\" - גודל התמונה משתנה כדי להתאים תוך שמירה על יחס גובה-רוחב שלה; \"כיסוי\" - התמונה ממלאת את התיבה כולה תוך שמירה על יחס הגובה-רוחב שלה; \"מילוי\" - התמונה נמתחת כדי למלא את התיבה מבלי לשמור על יחס הגובה-רוחב שלה.",
    autoGrow: "מגדיל בהדרגה את גובה שדה הקלט בעת הזנת הנתונים. דורס את ההגדרה \"גובה שדה קלט (בקווים)\".",
    allowResize: "נקודת האחיזה לשינוי גודל (או נקודת האחיזה) מופיעה בפינה וניתן לגרור אותה כדי לשנות את גודל שדה הקלט.",
    timeLimit: "מרווח זמן בשניות שלאחריו הסקר מתקדם אוטומטית לדף התודה.",
    timeLimitPerPage: "מרווח זמן בשניות שלאחריו הסקר מתקדם אוטומטית לעמוד הבא.",
    validateVisitedEmptyFields: "הפעל אפשרות זו כדי להפעיל אימות כאשר משתמש מתמקד בשדה קלט ריק ולאחר מכן עוזב אותו מבלי לבצע שינויים.",
    page: {
      name: "מזהה דף שאינו גלוי למשיבים.",
      description: "הקלד כותרת משנה של דף.",
      navigationTitle: "כיתוב המוצג בלחצן ניווט בסרגל ההתקדמות או בתוכן העניינים (TOC). אם תשאיר שדה זה ריק, לחצן הניווט ישתמש בכותרת הדף או בשם הדף. כדי להפעיל את מד ההתקדמות או תוכן העניינים, עבור אל \"סקר\" →\"ניווט\".",
      timeLimit: "מרווח זמן בשניות שלאחריו הסקר מתקדם אוטומטית לעמוד הבא.",
      visibleIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את תצוגת העמוד.",
      enableIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי שמשבית את מצב הקריאה בלבד של העמוד.",
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה.",
      questionTitleLocation: "חל על כל השאלות בדף זה. אם ברצונך לדרוס הגדרה זו, הגדר כללי יישור כותרת לשאלות או חלוניות בודדות. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"למעלה\" כברירת מחדל).",
      questionTitleWidth: "הגדרת רוחב עקבי לכותרות שאלות כאשר הן מיושרות משמאל לתיבות השאלות. מקבל ערכי CSS (px, %, in, pt וכו').",
      questionErrorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"למעלה\" כברירת מחדל).",
      questionOrder: "שומר על הסדר המקורי של השאלות או מסדר אותן באופן אקראי. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"מקורי\" כברירת מחדל). ההשפעה של הגדרה זו גלויה רק בכרטיסיה תצוגה מקדימה.",
      showNavigationButtons: "מגדיר את התצוגה של לחצני ניווט בעמוד. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר, המוגדרת כברירת מחדל ל\"גלוי\".",
      gridLayoutColumns: "טבלה זו מאפשרת לך לקבוע את התצורה של כל עמודת רשת בעמוד. הוא מגדיר באופן אוטומטי את אחוז הרוחב עבור כל עמודה בהתבסס על המספר המרבי של רכיבים בשורה. כדי להתאים אישית את פריסת הרשת, התאם ערכים אלה באופן ידני והגדר את רוחב הכותרת עבור כל השאלות בכל עמודה."
    },
    timerLocation: "הגדרת המיקום של טיימר בעמוד.",
    panelsState: "בחר מתוך: \"נעול\" - משתמשים אינם יכולים להרחיב או לכווץ חלוניות; \"כווץ הכל\" - כל הלוחות מתחילים במצב מכווץ; \"הרחב הכל\" - כל הלוחות מתחילים במצב מורחב; \"מורחב ראשון\" - רק הלוח הראשון מורחב בתחילה.",
    imageLinkName: "הזן שם מאפיין משותף בתוך מערך האובייקטים המכיל את כתובות ה- URL של תמונות או קבצי וידאו שברצונך להציג ברשימת האפשרויות.",
    choices: "הערך השמאלי משמש כמזהה פריט המשמש בכללי תנאי, הערך הימני מוצג למשיבים.",
    title: "הקלד כותרת ידידותית למשתמש להצגה.",
    waitForUpload: "מבטיח שמשתמשים לא ישלימו את הסקר עד להעלאת קבצים.",
    minWidth: "מקבל ערכי CSS (px, %, in, pt וכו').",
    maxWidth: "מקבל ערכי CSS (px, %, in, pt וכו').",
    width: "מקבל ערכי CSS (px, %, in, pt וכו').",
    valueName: "אם אינך מגדיר מאפיין זה, התשובה תאוחסן בשדה המסוים במאפיין השם.",
    defaultDisplayValue: "ערך המוצג בשאלות HTML ובכותרות ובתיאורים הדינמיים של רכיבי סקר כאשר ערך השאלה ריק.",
    useDisplayValuesInDynamicTexts: "בסוגי שאלות של בחירה בודדת ושאלות מרובות, לכל אפשרות בחירה יש מזהה וערך תצוגה. כשבוחרים באפשרות זו, הגדרה זו מציגה ערך תצוגה במקום ערך מזהה בשאלות HTML ובכותרות דינמיות ובתיאורים של רכיבי סקר.",
    clearIfInvisible: "בחר אם לנקות או לא לנקות ערכי שאלות המוסתרים על-ידי לוגיקה מותנית ומתי לעשות זאת. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"עם השלמת הסקר\" כברירת מחדל).",
    choicesFromQuestionMode: "בחר מתוך: \"הכל\" - מעתיק את כל אפשרויות הבחירה מהשאלה שנבחרה; \"נבחר\" - מעתיק באופן דינמי רק אפשרויות בחירה שנבחרו; \"לא נבחר\" - מעתיק באופן דינמי רק אפשרויות בחירה שלא נבחרו. האפשרויות \"ללא\" ו\"אחר\" מועתקות כברירת מחדל אם הן מופעלות בשאלת המקור.",
    choiceValuesFromQuestion: "בסוגי שאלות של בחירה בודדת ושאלות מרובות, לכל אפשרות בחירה יש מזהה וערך תצוגה. הגדרה זו מציינת איזו עמודת מטריצה או שאלת חלונית יספקו את המזהים.",
    choiceTextsFromQuestion: "בסוגי שאלות של בחירה בודדת ושאלות מרובות, לכל אפשרות בחירה יש מזהה וערך תצוגה. הגדרה זו מציינת איזו שאלת עמודת מטריצה או חלונית תספק את טקסטי התצוגה.",
    allowCustomChoices: "בחר כדי לאפשר למשיבים להוסיף אפשרויות משלהם אם האפשרות הרצויה אינה זמינה ברשימה הנפתחת. אפשרויות מותאמות אישית יאוחסנו באופן זמני בלבד למשך הפעלת הדפדפן הנוכחית.",
    showOtherItem: "כשבוחרים באפשרות זו, משתמשים יכולים לכלול קלט נוסף בתיבת הערות נפרדת.",
    separateSpecialChoices: "מציג כל אפשרות בחירה מיוחדת (\"ללא\", \"אחר\", \"בחר הכל\") בשורה חדשה, גם בשעת שימוש בפריסה מרובת עמודות.",
    path: "ציין את המיקום בתוך ערכת נתוני השירות שבו ממוקם מערך האובייקטים המשמש כיעד. השאר ריק אם כתובת ה- URL כבר מצביעה על המערך.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "הזן שם מאפיין אחיד במערך האובייקטים הכולל את הערכים שברצונך להציג ברשימת הבחירה.",
    allowEmptyResponse: "בחר כדי לאפשר לשירות להחזיר תגובה או מערך ריקים.",
    choicesVisibleIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע את התצוגה של כל אפשרויות הבחירה.",
    rateValues: "הערך השמאלי משמש כמזהה פריט המשמש בכללי תנאי, הערך הימני מוצג למשיבים.",
    rating: {
      displayMode: "\"אוטומטי\" בוחר בין המצבים \"לחצנים\" ו \"נפתח\" מבוסס על הרוחב הזמין. כאשר הרוחב אינו מספיק להצגת לחצנים, השאלה מציגה רשימה נפתחת."
    },
    valuePropertyName: "מאפשר לך לחבר שאלות המייצרות תוצאות בפורמטים שונים. כאשר שאלות כאלה מקושרות יחד באמצעות מזהה צירוף, מאפיין משותף זה מאחסן ערכי שאלות נבחרים.",
    searchEnabled: "בחר אם ברצונך לעדכן את תוכן התפריט הנפתח כך שיתאים לשאילתת החיפוש שמשתמש מקליד בשדה הקלט.",
    valueTrue: "ערך שיש לשמור בתוצאות הסקר כאשר המשיבים נותנים תשובה חיובית.",
    valueFalse: "ערך שיש לשמור בתוצאות הסקר כאשר המשיבים נותנים תשובה שלילית.",
    showPreview: "לא מומלץ להפוך אפשרות זו ללא זמינה מכיוון שהיא דורסת את תמונת התצוגה המקדימה ומקשה על המשתמש להבין אם הקבצים הועלו.",
    needConfirmRemoveFile: "מפעיל בקשה המבקשת לאשר את מחיקת הקובץ.",
    selectToRankEnabled: "אפשר לדרג רק בחירות נבחרות. המשתמשים יגררו פריטים נבחרים מרשימת האפשרויות כדי לסדר אותם באזור הדירוג.",
    dataList: "הזן רשימה של אפשרויות שיוצעו למשיב במהלך הקלט.",
    inputSize: "ההגדרה משנה את גודל שדות הקלט בלבד ואינה משפיעה על רוחב תיבת השאלה.",
    itemTitleWidth: "קובע רוחב עקבי לכל תוויות הפריט. מקבל ערכי CSS (px, %, in, pt וכו').",
    inputTextAlignment: "בחר כיצד ליישר ערך קלט בתוך השדה. הגדרת ברירת המחדל \"אוטומטי\" מיישרת את ערך הקלט ימינה אם מוחלת מסיכה על מטבע או מספר, ושמאלה אם לא.",
    altText: "משמש כתחליף כאשר לא ניתן להציג את התמונה במכשיר המשתמש ולמטרות נגישות.",
    rateColorMode: "מגדיר את צבע האמוג'י שנבחר כשסוג סמל הדירוג מוגדר ל\"סמיילי\". בחר בין: \"ברירת מחדל\" - האמוג'י שנבחר מופיע בצבע סקר ברירת מחדל; \"קנה מידה\" - האמוג'י שנבחר יורש צבע מסולם הדירוג.",
    expression: {
      name: "מזהה ביטוי שאינו גלוי למשיבים.",
      description: "הקלד כותרת משנה של ביטוי.",
      expression: "ביטוי יכול לכלול חישובים בסיסיים ('{q1_id} + {q2_id}'), תנאים ('{age} > 60') ופונקציות ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו')."
    },
    storeOthersAsComment: "בחר כדי לאחסן את ערך האפשרות \"אחר\" כמאפיין נפרד בתוצאות הסקר.",
    format: "השתמש ב-{0} כמציין מקום ריק.",
    acceptedTypes: "התייחסות ל-[accept](https://www.w3schools.com/tags/att_input_accept.asp) למידע נוסף.",
    columnColCount: "ישומם רק לסוגי תא רדיו וקופסת סימון.",
    autocomplete: "התייחסות לתיאור של [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) למידע נוסף.",
    filePlaceholder: "חל כאשר \"סוג מקור\" הוא \"קבצים מקומיים\" או כאשר המצלמה אינה זמינה",
    photoPlaceholder: "חל כאשר \"סוג מקור\" הוא \"מצלמה\".",
    fileOrPhotoPlaceholder: "חל כאשר \"סוג מקור\" הוא \"קבצים מקומיים או מצלמה\".",
    colCount: "מסדר אפשרויות בחירה בפריסה מרובת עמודות. כאשר הן מוגדרות על 0, האפשרויות מוצגות בשורה אחת.",
    masksettings: {
      saveMaskedValue: "בחר אם ברצונך לאחסן את ערך השאלה עם מסיכה שהוחלה בתוצאות הסקר."
    },
    patternmask: {
      pattern: "התבנית יכולה להכיל מילולי מחרוזת ואת מצייני המיקום הבאים: '9' - עבור ספרה; 'a' - עבור אות גדולה או קטנה; '#' - עבור ספרה או אות גדולה או קטנה. השתמש בקו נטוי הפוך '\\' כדי לברוח מתו."
    },
    datetimemask: {
      pattern: "התבנית יכולה להכיל תווים מפרידים ואת מצייני המיקום הבאים:<br>'m' - מספר חודש.<br>'mm' - מספר חודש, עם אפס מוביל עבור ערכים חד-ספרתיים. <br>'ד' - יום בחודש. <br>'dd' - יום בחודש, עם אפס מוביל עבור ערכים חד-ספרתיים. <br>'yy' - שתי הספרות האחרונות של השנה. <br>'yyyy' - שנה בת ארבע ספרות. <br>'H' - שעות בפורמט של 24 שעות. <br>'HH' - שעות בתבנית של 24 שעות, עם אפס מוביל עבור ערכים חד-ספרתיים. <br>'h' - שעות בפורמט של 12 שעות. <br>'hh' - שעות בתבנית של 12 שעות, עם אפס מוביל עבור ערכים חד-ספרתיים. <br>'ממ' - דקות. <br>'ss' - שניות. <br>'TT' - שעון של 12 שעות באותיות גדולות (AM/PM). <br>'tt' - שעון של 12 שעות באותיות קטנות (AM / PM)."
    },
    numericmask: {
      decimalSeparator: "סמל המשמש להפרדת חלק השבר מהחלק השלם של מספר מוצג.",
      thousandsSeparator: "סמל המשמש להפרדת הספרות של מספר גדול לקבוצות של שלושה.",
      precision: "מגביל את מספר הספרות שיש לשמור אחרי הנקודה העשרונית עבור מספר מוצג."
    },
    currencymask: {
      prefix: "סימן אחד או יותר שיוצגו לפני הערך.",
      suffix: "סימן אחד או יותר שיוצגו לאחר הערך."
    },
    theme: {
      isPanelless: "הגדרה זו חלה רק על שאלות מחוץ לחלונית.",
      primaryColor: "הגדרת צבע משלים המדגיש רכיבי סקר מרכזיים.",
      panelBackgroundTransparency: "התאמת השקיפות של חלוניות ותיבות שאלה ביחס לרקע הסקר.",
      questionBackgroundTransparency: "התאמת השקיפות של רכיבי הקלט ביחס לרקע הסקר.",
      cornerRadius: "קובע את רדיוס הפינה לכל הרכיבים המלבניים. הפעילו את 'מצב מתקדם' אם ברצונכם להגדיר ערכי רדיוס פינה בודדים לרכיבי קלט או לחלוניות ולתיבות שאלה.",
      "--sjs-general-backcolor-dim": "מגדיר את צבע הרקע הראשי של הסקר."
    },
    header: {
      inheritWidthFrom: "האפשרות \"זהה לגורם מכיל\" מתאימה אוטומטית את רוחב אזור התוכן של הכותרת העליונה כך שיתאים לרכיב HTML שבו ממוקם הסקר.",
      textAreaWidth: "רוחב אזור הכותרת המכיל את כותרת הסקר ותיאורו, נמדד בפיקסלים.",
      overlapEnabled: "כאשר אפשרות זו מופעלת, החלק העליון של הסקר מכסה את החלק התחתון של הכותרת.",
      mobileHeight: "כאשר הוא מוגדר ל- 0, הגובה מחושב באופן אוטומטי כדי להתאים לתוכן הכותרת."
    },
    progressBarInheritWidthFrom: "האפשרות \"זהה לגורם מכיל\" מתאימה אוטומטית את רוחב אזור מד ההתקדמות כך שיתאים לרכיב HTML שבו ממוקם הסקר."
  },
  // Properties
  p: {
    title: {
      name: "כותרת",
      title: "השאר ריק אם זה זהה ל'שם'"
    },
    multiSelect: "אפשר בחירה מרובה",
    showLabel: "הצגת כתוביות לתמונות",
    swapOrder: "החלפת הסדר של כן ולא",
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
    inputSize: "גודל פריט",
    itemTitleWidth: "רוחב תווית פריט (בפיקסלים)",
    inputTextAlignment: "יישור ערך קלט",
    elements: "רכיבים",
    content: "תוכן",
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
    mobileHeight: "גובה בסמארטפונים",
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
    selectToRankEmptyRankedAreaText: "טקסט שיציג אם כל האפשרויות נבחרו",
    selectToRankEmptyUnrankedAreaText: "טקסט מציין מיקום עבור אזור הדירוג",
    allowCameraAccess: "אפשר גישה למצלמה",
    scaleColorMode: "מצב צבע לסולם",
    rateColorMode: "מצב צבע לדירוג",
    copyDisplayValue: "העתקת ערך תצוגה",
    effectiveColSpan: "טווח עמודות",
    progressBarInheritWidthFrom: "רוחב אזור מד התקדמות"
  },
  theme: {
    advancedMode: "מצב מתקדם",
    pageTitle: "גופן כותרת עמוד",
    questionTitle: "גופן כותרת שאלה",
    editorPanel: "רקע אלמנט קלט",
    lines: "קווים",
    primaryDefaultColor: "ברירת מחדל",
    primaryDarkColor: "עכבר",
    primaryLightColor: "נבחר",
    backgroundDimColor: "צבע רקע",
    cornerRadius: "רדיוס פינה",
    backcolor: "רקע ברירת מחדל",
    hovercolor: "רקע העברת עכבר",
    borderDecoration: "קישוט גבול",
    fontColor: "צבע גופן",
    backgroundColor: "צבע רקע",
    primaryForecolor: "צבע ברירת מחדל",
    primaryForecolorLight: "צבע כבוי",
    font: "גופן",
    borderDefault: "כהה",
    borderLight: "בהיר",
    fontFamily: "משפחת גופנים",
    fontWeightRegular: "רגיל",
    fontWeightHeavy: "כבד",
    fontWeightSemiBold: "חצי נועז",
    fontWeightBold: "נועז",
    color: "צבע",
    placeholderColor: "צבע מציין מיקום",
    size: "גודל",
    opacity: "אטימות",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "הוספת אפקט צל",
    boxShadowBlur: "טשטוש",
    boxShadowSpread: "התפשטות",
    boxShadowDrop: "הטפה",
    boxShadowInner: "פנימי",
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
      green: "ירוק",
      gray: "אפור"
    }
  },
  creatortheme: {
    "--sjs-special-background": "רקע פני השטח",
    "--sjs-primary-background-500": "הראשי",
    "--sjs-secondary-background-500": "משני",
    surfaceScale: "משטח",
    userInterfaceBaseUnit: "ממשק משתמש",
    fontScale: "גופן",
    names: {
      sc2020: "יוצר הסקר 2020",
      "default-light": "אור",
      "default-dark": "חשוך",
      "default-contrast": "ניגוד"
    }
  }
};

setupLocale({ localeCode: "he", strings: hebrewStrings });

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
// theme.header: "Header" => "כותרת"
// theme.background: "Background" => "רקע"
// theme.appearance: "Appearance" => "מראה"
// theme.backgroundImageFitFill: "Stretch" => "מתיחה"
// theme.backgroundImageFitTile: "Tile" => "אריח"
// theme.backgroundCornerRadius: "Background and corner radius" => "רקע ורדיוס פינה"
// theme.colorsTitle: "Colors" => "צבעים"
// theme.font: "Font" => "גופן"
// theme.lines: "Lines" => "קווים"
// theme.surveyDescriptionFont: "Survey description font" => "גופן תיאור סקר"
// theme.titleFont: "Title font" => "גופן כותרת"
// theme.descriptionFont: "Description font" => "גופן תיאור"
// theme.shadow: "Shadow effects" => "אפקטי צל"
// theme.headerView: "View" => "נוף"
// theme.headerViewBasic: "Basic" => "בסיסי"
// theme.headerViewAdvanced: "Advanced" => "מתקדמים"
// theme.headerInheritWidthFrom: "Content area width" => "רוחב אזור תוכן"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "זהה לסקר"
// theme.headerInheritWidthFromContainer: "Fit to container" => "התאמה למיכל"
// theme.headerTextAreaWidth: "Text width" => "רוחב טקסט"
// theme.headerBackgroundColorSwitch: "Background color" => "צבע רקע"
// theme.headerBackgroundColorNone: "None" => "ללא"
// theme.headerBackgroundColorAccentColor: "Accent color" => "צבע הדגשה"
// theme.headerBackgroundColorCustom: "Custom" => "מנהג"
// theme.horizontalAlignmentLeft: "Left" => "שמאל"
// theme.horizontalAlignmentCenter: "Center" => "מרכז"
// theme.horizontalAlignmentRight: "Right" => "ימין"
// theme.verticalAlignmentTop: "Top" => "סביבון"
// theme.verticalAlignmentMiddle: "Middle" => "אמצע"
// theme.verticalAlignmentBottom: "Bottom" => "ישבן"
// theme.logoPosition: "Logo position" => "מיקום הלוגו"
// theme.headerTitlePosition: "Title position" => "מיקום בתפקיד"
// theme.headerDescriptionPosition: "Description position" => "תיאור מיקום"
// ed.translateUsigAIFrom: "Translate from: " => "תרגם מ: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "אפשר את האפשרות סרב לענות"
// pe.showDontKnowItem: "Allow the Don't Know option" => "אפשר את האפשרות 'לא יודע'"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "אפשר את האפשרות סרב לענות"
// pe.showDontKnowItem: "Allow the Don't Know option" => "אפשר את האפשרות 'לא יודע'"
// pv.contain: "Contain" => "להכיל"
// pv.cover: "Cover" => "כריכה"
// pv.fill: "Fill" => "מילוי"

// pe.transposeData: "Transpose rows to columns" => "ביצוע חילוף שורות לעמודות"
// layout.panel: "Layout" => "פריסה"
// layout.question: "Layout" => "פריסה"
// layout.base: "Layout" => "פריסה"
// panel.name: "Panel name" => "שם החלונית"
// panel.title: "Panel title" => "כותרת הפאנל"
// panel.description: "Panel description" => "תיאור הלוח"
// panel.visibleIf: "Make the panel visible if" => "הפוך את החלונית לגלויה אם"
// panel.requiredIf: "Make the panel required if" => "הפוך את החלונית לנדרשת אם"
// panel.questionOrder: "Question order within the panel" => "סדר השאלות בתוך הפאנל"
// panel.startWithNewLine: "Display the panel on a new line" => "הצגת החלונית בשורה חדשה"
// panel.state: "Panel collapse state" => "מצב כיווץ לוח"
// panel.width: "Inline panel width" => "רוחב החלונית בתוך שורה"
// panel.minWidth: "Minimum panel width" => "רוחב לוח מינימלי"
// panel.maxWidth: "Maximum panel width" => "רוחב לוח מרבי"
// paneldynamic.name: "Panel name" => "שם החלונית"
// paneldynamic.title: "Panel title" => "כותרת הפאנל"
// paneldynamic.description: "Panel description" => "תיאור הלוח"
// paneldynamic.visibleIf: "Make the panel visible if" => "הפוך את החלונית לגלויה אם"
// paneldynamic.requiredIf: "Make the panel required if" => "הפוך את החלונית לנדרשת אם"
// paneldynamic.page: "Move the panel to page" => "העברת החלונית לעמוד"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "הצגת החלונית בשורה חדשה"
// paneldynamic.state: "Panel collapse state" => "מצב כיווץ לוח"
// paneldynamic.width: "Inline panel width" => "רוחב החלונית בתוך שורה"
// paneldynamic.minWidth: "Minimum panel width" => "רוחב לוח מינימלי"
// paneldynamic.maxWidth: "Maximum panel width" => "רוחב לוח מרבי"
// paneldynamic.templateDescription: "Panel description pattern" => "תבנית תיאור חלונית"
// paneldynamic.templateTitle: "Panel title pattern" => "תבנית כותרת חלונית"
// paneldynamic.noEntriesText: "Empty panel text" => "טקסט ריק בחלונית"
// paneldynamic.templateTabTitle: "Tab title pattern" => "תבנית כותרת טאב"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "הפיכת חלונית בודדת לגלויה אם"
// paneldynamic.hideNumber: "Hide the panel number" => "הסתרת מספר החלונית"
// paneldynamic.titleLocation: "Panel title alignment" => "יישור כותרת חלונית"
// paneldynamic.descriptionLocation: "Panel description alignment" => "יישור תיאור החלונית"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "יישור כותרת שאלה"
// paneldynamic.templateErrorLocation: "Error message alignment" => "יישור הודעת שגיאה"
// paneldynamic.newPanelPosition: "New panel location" => "מיקום חדש בלוח"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "מניעת תגובות כפולות בשאלה הבאה"
// question.name: "Question name" => "שם שאלה"
// question.title: "Question title" => "כותרת השאלה"
// question.description: "Question description" => "תיאור השאלה"
// question.visibleIf: "Make the question visible if" => "הפוך את השאלה לגלויה אם"
// question.requiredIf: "Make the question required if" => "הפוך את השאלה לנדרשת אם"
// question.state: "Question box collapse state" => "מצב כיווץ תיבת שאלה"
// question.hideNumber: "Hide the question number" => "הסתרת מספר השאלה"
// question.titleLocation: "Question title alignment" => "יישור כותרת שאלה"
// question.descriptionLocation: "Question description alignment" => "יישור תיאור השאלה"
// question.errorLocation: "Error message alignment" => "יישור הודעת שגיאה"
// question.indent: "Increase the inner indent" => "הגדלת הכניסה הפנימית"
// question.width: "Inline question width" => "רוחב שאלה מוטבעת"
// question.minWidth: "Minimum question width" => "רוחב שאלה מינימלי"
// question.maxWidth: "Maximum question width" => "רוחב שאלה מרבי"
// question.textUpdateMode: "Update input field value" => "עדכון ערך שדה קלט"
// signaturepad.allowClear: "Show the Clear button within signature area" => "הצגת לחצן 'נקה' בתוך אזור החתימה"
// signaturepad.penColor: "Stroke color" => "צבע קו"
// comment.rows: "Input field height (in lines)" => "גובה שדה קלט (בקווים)"
// expression.name: "Expression name" => "שם ביטוי"
// expression.title: "Expression title" => "כותרת ביטוי"
// expression.description: "Expression description" => "תיאור ביטוי"
// expression.expression: "Expression" => "ביטוי"
// trigger.expression: "Expression" => "ביטוי"
// calculatedvalue.expression: "Expression" => "ביטוי"
// survey.description: "Survey description" => "תיאור הסקר"
// page.name: "Page name" => "שם הדף"
// page.description: "Page description" => "תיאור הדף"
// page.visibleIf: "Make the page visible if" => "הפוך את הדף לגלוי אם"
// page.requiredIf: "Make the page required if" => "הפוך את הדף לנדרש אם"
// page.questionOrder: "Question order on the page" => "סדר השאלות בדף"
// matrixdropdowncolumn.name: "Column name" => "שם עמודה"
// matrixdropdowncolumn.title: "Column title" => "כותרת עמודה"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "מניעת תגובות כפולות"
// matrixdropdowncolumn.width: "Column width" => "רוחב עמודה"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "רוחב עמודה מינימלי"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "גובה שדה קלט (בקווים)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "הפיכת העמודה לגלויה אם"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "הפוך את העמודה לנדרשת אם"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "כל אפשרות בעמודה נפרדת"
// multipletextitem.name: "Name" => "שם"
// multipletextitem.title: "Title" => "כותר"
// pe.rateDescriptionLocation: "Label alignment" => "יישור תוויות"
// pe.cellErrorLocation: "Cell error message alignment" => "יישור הודעת שגיאה של תא"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "עדיין אין לך עמודות"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "עדיין אין לך שורות"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "עדיין אין לך כללי אימות"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "עדיין אין לך משתנים מותאמים אישית"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "עדיין אין לך טריגרים"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "עדיין אין לך קישורים"
// pe.addNew@columns: "Add new column" => "הוספת עמודה חדשה"
// pe.addNew@rows: "Add new row" => "הוספת שורה חדשה"
// pe.addNew@validators: "Add new rule" => "הוספת כלל חדש"
// pe.addNew@calculatedValues: "Add new variable" => "הוספת משתנה חדש"
// pe.addNew@triggers: "Add new trigger" => "הוספת גורם מפעיל חדש"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "הוספת כתובת URL חדשה"
// choicesbyurl.url: "Web service's URL" => "כתובת URL של שירות אינטרנט"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "הצגת כותרות עמודים בסרגל ההתקדמות"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "הצגת מספרי עמודים במד ההתקדמות"
// itemvalue.visibleIf: "Make the option visible if" => "הפוך את האפשרות לגלויה אם"
// itemvalue.enableIf: "Make the option selectable if" => "הפוך את האפשרות לניתנת לבחירה אם"
// panel.layout: "Panel Layout" => "פריסת חלונית"
// tabs.questionSettings: "Question Settings" => "הגדרות שאלה"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "לדוגמה: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "לדוגמה: קטגוריות.בדיוני"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "לדוגמה: א)"
// pe.width_placeholder: "Ex.: 6in" => "לדוגמה: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "לדוגמה: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "לדוגמה: 50%"
// pv.selected: "Selected" => "שנבחרו"
// pv.unselected: "Unselected" => "לא נבחר"
// pv.center: "Center" => "מרכז"
// pv.middle: "Middle" => "אמצע"
// pv.next: "Next" => "הבא"
// pv.last: "Last" => "אחרון"
// clearIfInvisible.none: "Never" => "אף פעם"
// questionsOnPageMode.standard: "Original structure" => "מבנה מקורי"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "הצג את כל השאלות בעמוד אחד"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "הצגת שאלה בודדת בכל עמוד"
// pv.auto: "Auto" => "אוטומטי"
// panelsState.firstExpanded: "First expanded" => "הראשון הורחב"
// rateColorMode.scale: "Scale" => "סולם"
// scaleColorMode.monochrome: "Monochrome" => "מונוכרום"
// scaleColorMode.colored: "Colored" => "צבעוניים"
// state.default: "Locked" => "נעול"
// showQuestionNumbers.default: "Auto-numbering" => "מספור אוטומטי"
// showQuestionNumbers.on: "Auto-numbering" => "מספור אוטומטי"
// showQuestionNumbers.onPage: "Reset on each page" => "איפוס בכל עמוד"
// showQuestionNumbers.onpanel: "Reset on each panel" => "איפוס בכל חלונית"
// showQuestionNumbers.onPanel: "Reset on each panel" => "איפוס בכל חלונית"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "המשך לאורך הסקר"
// showQuestionNumbers.off: "No numbering" => "ללא מספור"
// descriptionLocation.underTitle: "Under the question title" => "תחת כותרת השאלה"
// descriptionLocation.underInput: "Under the input field" => "מתחת לשדה הקלט"
// selectToRankAreasLayout.horizontal: "Next to choices" => "לצד אפשרויות בחירה"
// selectToRankAreasLayout.vertical: "Above choices" => "אפשרויות מעל"
// displayStyle.decimal: "Decimal" => "עשרוני"
// displayStyle.currency: "Currency" => "מטבע"
// displayStyle.percent: "Percentage" => "אחוז"
// displayStyle.date: "Date" => "תמר"
// totalDisplayStyle.decimal: "Decimal" => "עשרוני"
// totalDisplayStyle.currency: "Currency" => "מטבע"
// totalDisplayStyle.percent: "Percentage" => "אחוז"
// totalDisplayStyle.date: "Date" => "תמר"
// rowOrder.initial: "Original" => "מקורי"
// questionOrder.initial: "Original" => "מקורי"
// showProgressBar.aboveheader: "Above the header" => "מעל הכותרת העליונה"
// showProgressBar.belowheader: "Below the header" => "מתחת לכותרת העליונה"
// pv.sum: "Sum" => "סכום"
// pv.count: "Count" => "מנה"
// pv.min: "Min" => "דקות"
// pv.max: "Max" => "מקס"
// pv.avg: "Avg" => "ממוצע"
// searchMode.contains: "Contains" => "מכיל"
// searchMode.startsWith: "Starts with" => "מתחיל ב"
// panel.name: "A panel ID that is not visible to respondents." => "מזהה חלונית שאינו גלוי למשיבים."
// panel.description: "Type a panel subtitle." => "הקלד כותרת משנה של חלונית."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "השתמשו בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את תצוגת החלונית."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "השתמשו בסמל מטה הקסם כדי להגדיר כלל מותנה שמשבית את מצב הקריאה בלבד של החלונית."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "חל על כל השאלות בפאנל זה. אם ברצונך לעקוף הגדרה זו, הגדר כללי יישור כותרת עבור שאלות בודדות. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "קובע את המיקום של הודעת שגיאה ביחס לכל השאלות בחלונית. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "שומר על הסדר המקורי של השאלות או מסדר אותן באופן אקראי. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר."
// panel.page: "Repositions the panel to the end of a selected page." => "מיקום מחדש של החלונית לסוף עמוד שנבחר."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "מוסיף רווח או שוליים בין תוכן החלונית לגבול השמאלי של תיבת החלונית."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "בטל את הבחירה כדי להציג את החלונית בשורה אחת עם השאלה או החלונית הקודמת. ההגדרה אינה חלה אם החלונית היא הרכיב הראשון בטופס."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "בחר מתוך: \"מורחב\" - הלוח מוצג במלואו וניתן לכווץ; \"מכווץ\" - הלוח מציג רק את הכותרת והתיאור וניתן להרחיבו; \"נעול\" - הלוח מוצג במלואו ולא ניתן לכווץ."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "קובע את רוחב החלונית ביחס לרכיבי סקר אחרים באותה שורה. מקבל ערכי CSS (px, %, in, pt וכו')."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "מזהה חלונית שאינו גלוי למשיבים."
// paneldynamic.description: "Type a panel subtitle." => "הקלד כותרת משנה של חלונית."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "השתמשו בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את תצוגת החלונית."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "השתמשו בסמל מטה הקסם כדי להגדיר כלל מותנה שמשבית את מצב הקריאה בלבד של החלונית."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "חל על כל השאלות בפאנל זה. אם ברצונך לעקוף הגדרה זו, הגדר כללי יישור כותרת עבור שאלות בודדות. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "קובע את המיקום של הודעת שגיאה ביחס לכל השאלות בחלונית. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "מיקום מחדש של החלונית לסוף עמוד שנבחר."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "מוסיף רווח או שוליים בין תוכן החלונית לגבול השמאלי של תיבת החלונית."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "בטל את הבחירה כדי להציג את החלונית בשורה אחת עם השאלה או החלונית הקודמת. ההגדרה אינה חלה אם החלונית היא הרכיב הראשון בטופס."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "בחר מתוך: \"מורחב\" - הלוח מוצג במלואו וניתן לכווץ; \"מכווץ\" - הלוח מציג רק את הכותרת והתיאור וניתן להרחיבו; \"נעול\" - הלוח מוצג במלואו ולא ניתן לכווץ."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "קובע את רוחב החלונית ביחס לרכיבי סקר אחרים באותה שורה. מקבל ערכי CSS (px, %, in, pt וכו')."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "הקלד תבנית לכותרות חלוניות דינמיות. השתמש ב- {panelIndex} למיקום הכללי של החלונית וב- {visiblePanelIndex} לסדר שלה בין חלוניות גלויות. הוסף מצייני מיקום אלה לתבנית כדי להוסיף מספור אוטומטי."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "הקלד תבנית עבור כותרות כרטיסיות. השתמש ב- {panelIndex} למיקום הכללי של חלונית וב- {visiblePanelIndex} לסדר שלה בין חלוניות גלויות. הוסף מצייני מיקום אלה לתבנית כדי להוסיף מספור אוטומטי."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "קביעה זו מאפשרת לשלוט בתצוגה של חלוניות בודדות בחלונית הדינמית. השתמש במציין המיקום '{panel}' כדי להפנות לחלונית הנוכחית בביטוי שלך."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "הגדרה זו עוברת בירושה אוטומטית לכל השאלות בחלונית זו. אם ברצונך לעקוף הגדרה זו, הגדר כללי יישור כותרת עבור שאלות בודדות. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "האפשרות \"הירושה\" מחילה את ההגדרה ברמת העמוד (אם הוגדרה) או ברמת הסקר (\"תחת כותרת החלונית\" כברירת מחדל)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "מגדיר את המיקום של חלונית חדשה שנוספה. כברירת מחדל, חלוניות חדשות מתווספות לסוף. בחר \"הבא\" כדי להוסיף חלונית חדשה אחרי הנוכחית."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "משכפל תשובות מהחלונית האחרונה ומקצה אותן לחלונית הדינמית הבאה שנוספה."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "הפנה לשם שאלה כדי לדרוש מהמשתמש לספק תשובה ייחודית לשאלה זו בכל חלונית."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "הגדרה זו מאפשרת לך להקצות ערך ברירת מחדל לתשובה בהתבסס על ביטוי. הביטוי יכול לכלול חישובים בסיסיים - '{q1_id} + {q2_id}', ביטויים בוליאניים, כגון '{age} > 60', ופונקציות: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו'. הערך שנקבע על-ידי ביטוי זה משמש כערך ברירת המחדל הראשוני שניתן לעקוף באמצעות קלט ידני של משיב."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע מתי הקלט של המשיב יאופס לערך בהתבסס על \"ביטוי ערך ברירת מחדל\" או \"הגדר ביטוי ערך\" או על הערך \"תשובת ברירת מחדל\" (אם אחד מהם מוגדר)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע מתי להפעיל את \"Set value expression\" ולהקצות באופן דינמי את הערך המתקבל כתגובה."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "ציין ביטוי המגדיר את הערך שיש להגדיר כשהתנאים בכלל \"הגדר ערך אם\" מתקיימים. הביטוי יכול לכלול חישובים בסיסיים - '{q1_id} + {q2_id}', ביטויים בוליאניים, כגון '{age} > 60', ופונקציות: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו'. הערך שנקבע על ידי ביטוי זה ניתן לדריסת קלט ידני של המשיב."
// question.name: "A question ID that is not visible to respondents." => "מזהה שאלה שאינו גלוי למשיבים."
// question.description: "Type a question subtitle." => "הקלד כותרת משנה של שאלה."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע את נראות השאלה."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי שמשבית את מצב הקריאה בלבד עבור השאלה."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע קידום או שליחה של סקר, אלא אם כן השאלה קיבלה תשובה."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "בטל את הבחירה כדי להציג את השאלה בשורה אחת עם השאלה או החלונית הקודמת. ההגדרה אינה חלה אם השאלה היא הרכיב הראשון בטופס."
// question.page: "Repositions the question to the end of a selected page." => "מיקום מחדש של השאלה לסוף עמוד שנבחר."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "בחר מתוך: \"מורחב\" - תיבת השאלה מוצגת במלואה וניתן לכווץ אותה; \"מכווץ\" - תיבת השאלה מציגה רק את הכותרת והתיאור וניתן להרחיבה; \"נעול\" - תיבת השאלה מוצגת במלואה ולא ניתן לכווץ אותה."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "דורס כללי יישור כותרות שהוגדרו ברמת חלונית, עמוד או סקר. האפשרות \"ירושה\" מחילה הגדרות ברמה גבוהה יותר (אם הוגדרה) או הגדרה ברמת הסקר (\"עליון\" כברירת מחדל)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"תחת כותרת השאלה\" כברירת מחדל)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"למעלה\" כברירת מחדל)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "מוסיף רווח או שוליים בין תוכן השאלה לבין הגבול השמאלי של תיבת השאלה."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "קובע את רוחב השאלה ביחס לרכיבי סקר אחרים באותה שורה. מקבל ערכי CSS (px, %, in, pt וכו')."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "השתמש בסמל מטה הקסמים כדי להגדיר כלל אימות עבור השאלה."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "בחר מתוך: \"על מיקוד אבוד\" - הערך מתעדכן כאשר שדה הקלט מאבד את המיקוד; \"בעת הקלדה\" - הערך מתעדכן בזמן אמת, כאשר המשתמשים מקלידים. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"מיקוד אבוד\" כברירת מחדל)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "באפשרותך להשתמש בכל שירות אינטרנט כמקור נתונים לשאלות אמריקאיות. כדי לאכלס ערכי בחירה, הזן את כתובת ה- URL של השירות המספק את הנתונים."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "פעולת השוואה המשמשת לסינון הרשימה הנפתחת."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "קובע את רוחב אזור החתימה המוצג ואת התמונה שתיווצר."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "קובע את גובה אזור החתימה המוצג ואת התמונה שתיווצר."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "בחר אם ברצונך שאזור החתימה ימלא את כל השטח הזמין בתיבת השאלה תוך שמירה על יחס הרוחב-גובה המוגדר כברירת מחדל של 3:2. כאשר מוגדרים ערכי רוחב וגובה מותאמים אישית, ההגדרה תשמור על יחס הרוחב-גובה של ממדים אלה."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "התאמת גובה התמונה בתוצאות הסקר."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "התאמת רוחב התמונה בתוצאות הסקר."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "דורס את ערכי הגובה המינימליים והמרביים."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "דורס את ערכי הרוחב המינימליים והמרביים."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"ערך\" משמש כמזהה פריט המשמש בכללים מותנים; \"טקסט\" מוצג למשיבים."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "הגדרה זו משנה את גודל שדה הקלט בלבד ואינה משפיעה על רוחב תיבת השאלה. כדי להגביל את אורך הקלט המקובל, עבור אל <b>אימות → מגבלת תווים מרבית</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "מגדיר את מספר השורות המוצגות בשדה הקלט. אם הקלט תופס שורות נוספות, פס הגלילה יופיע."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "בחר בין: \"ניתן לעריכה\" - מאפשר למשיבים למלא את הסקר שלך; \"לקריאה בלבד\" - משבית עריכת טפסים."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "מזהה עמודה שאינו גלוי למשיבים."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "כאשר אפשרות זו זמינה עבור עמודה, המשיב נדרש לספק תשובה ייחודית לכל שאלה בעמודה זו."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "מגדיר את מספר השורות המוצגות בשדה הקלט. אם הקלט תופס שורות נוספות, פס הגלילה יופיע."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את נראות העמודה."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי שמשבית את מצב הקריאה בלבד עבור העמודה."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "כשבוחרים באפשרות זו, יוצר עמודה נפרדת לכל אחת מאפשרויות הבחירה."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "בחר מתוך: \"סטטי\" - קובע רוחב קבוע; \"מגיב\" - עושה את הסקר לתפוס את מלוא רוחב המסך; \"אוטומטי\" - חל על כל אחד מהשניים בהתאם לסוגי השאלות המשמשים."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "הדבק קישור לתמונה (ללא מגבלות גודל) או לחץ על סמל התיקייה כדי לעיין בקובץ מהמחשב שלך (עד 64KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "הגדרת רוחב לוגו ביחידות CSS (px, %, in, pt וכו')."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "הגדרת גובה סמל ביחידות CSS (px, %, in, pt וכו')."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "בחר מתוך: \"ללא\" - התמונה שומרת על גודלה המקורי; \"להכיל\" - גודל התמונה משתנה כדי להתאים תוך שמירה על יחס גובה-רוחב שלה; \"כיסוי\" - התמונה ממלאת את התיבה כולה תוך שמירה על יחס הגובה-רוחב שלה; \"מילוי\" - התמונה נמתחת כדי למלא את התיבה מבלי לשמור על יחס הגובה-רוחב שלה."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "מגדיר את התצוגה והמיקום של לחצני ניווט בעמוד."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "הגדרת הניראות והמיקום של מד התקדמות. הערך \"אוטומטי\" מציג את מד ההתקדמות מעל או מתחת לכותרת הסקר."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "הפעל את דף התצוגה המקדימה עם כל השאלות או שאלות שנענו בלבד."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "חל על כל השאלות בסקר. ניתן לדרוס הגדרה זו באמצעות כללי יישור כותרות ברמות נמוכות יותר: חלונית, עמוד או שאלה. הגדרה ברמה נמוכה יותר תעקוף את אלה ברמה גבוהה יותר."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "סמל או רצף של סמלים המציינים כי נדרשת תשובה."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "הזן מספר או אות שבאמצעותם ברצונך להתחיל במספור."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "בחר אם ברצונך ששדה הקלט הראשון בכל עמוד יהיה מוכן להזנת טקסט."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "שומר על הסדר המקורי של השאלות או מסדר אותן באופן אקראי. ההשפעה של הגדרה זו גלויה רק בכרטיסיה תצוגה מקדימה."
// pehelp.maxTextLength: "For text entry questions only." => "לשאלות הזנת טקסט בלבד."
// pehelp.maxCommentLength: "For question comments only." => "להערות לשאלה בלבד."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "בחר אם ברצונך שהערות שאלה ושאלות טקסט ארוך יגדלו באופן אוטומטי לגובה בהתבסס על אורך הטקסט שהוזנו."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "להערות לשאלות ולשאלות טקסט ארוך בלבד."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "משתנים מותאמים אישית משמשים כמשתני ביניים או משתני עזר המשמשים בחישובי טפסים. הם לוקחים תשומות משיבים כערכי מקור. לכל משתנה מותאם אישית יש שם ייחודי וביטוי שעליו הוא מבוסס."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "בחר אם ברצונך לשמור את הערך המחושב של הביטוי יחד עם תוצאות הסקר."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "גורם מפעיל הוא אירוע או תנאי המבוסס על ביטוי. לאחר הערכת הביטוי כ- \"true\", גורם מפעיל מגדיר פעולה. לפעולה כזו יכולה להיות שאלת יעד שהיא משפיעה עליה."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "בחר אם לנקות ערכים עבור שאלות המוסתרות על-ידי לוגיקה מותנית ומתי לעשות זאת."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "בחר מתוך: \"על מיקוד אבוד\" - הערך מתעדכן כאשר שדה הקלט מאבד את המיקוד; \"בעת הקלדה\" - הערך מתעדכן בזמן אמת, כאשר המשתמשים מקלידים."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "הערך השמאלי משמש כמזהה עמודה המשמש בכללי תנאי, הערך הימני מוצג למשיבים."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "הערך השמאלי משמש כמזהה שורה המשמש בכללי תנאי, הערך הימני מוצג למשיבים."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "מקבל ערכי CSS (px, %, in, pt וכו')."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "מקבל ערכי CSS (px, %, in, pt וכו')."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "הגדרת המיקום של הודעת שגיאה ביחס לתא עם קלט לא חוקי. האפשרות \"ירושה\" מחילה את ההגדרה מהמאפיין \"יישור הודעת שגיאה\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "כאשר המאפיין \"מנע תגובות כפולות\" מופעל, משיב שינסה לשלוח ערך כפול יקבל את הודעת השגיאה הבאה."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "מאפשר לחשב ערכים כוללים בהתבסס על ביטוי. הביטוי יכול לכלול חישובים בסיסיים ('{q1_id} + {q2_id}'), ביטויים בוליאניים ('{age} > 60') ופונקציות ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו')."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "מפעיל בקשה המבקשת לאשר את מחיקת השורות."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "משכפל תשובות מהשורה האחרונה ומקצה אותן לשורה הדינמית הבאה שנוספה."
// pehelp.description: "Type a subtitle." => "הקלד כותרת משנה."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "בחר שפה כדי להתחיל ליצור את הסקר. כדי להוסיף תרגום, עבור לשפה חדשה ותרגם את הטקסט המקורי כאן או בכרטיסיה תרגומים."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "הגדרת המיקום של מקטע פרטים ביחס לשורה. בחר מתוך: \"ללא\" - לא נוספה הרחבה; \"מתחת לשורה\" - הרחבת שורה ממוקמת מתחת לכל שורה של המטריצה; \"מתחת לשורה, הצג הרחבת שורה אחת בלבד\" - הרחבה מוצגת תחת שורה אחת בלבד, הרחבות השורה הנותרות מכווצות."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "בחר מתוך: \"ללא\" - התמונה שומרת על גודלה המקורי; \"להכיל\" - גודל התמונה משתנה כדי להתאים תוך שמירה על יחס גובה-רוחב שלה; \"כיסוי\" - התמונה ממלאת את התיבה כולה תוך שמירה על יחס הגובה-רוחב שלה; \"מילוי\" - התמונה נמתחת כדי למלא את התיבה מבלי לשמור על יחס הגובה-רוחב שלה."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "מגדיל בהדרגה את גובה שדה הקלט בעת הזנת הנתונים. דורס את ההגדרה \"גובה שדה קלט (בקווים)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "נקודת האחיזה לשינוי גודל (או נקודת האחיזה) מופיעה בפינה וניתן לגרור אותה כדי לשנות את גודל שדה הקלט."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "מרווח זמן בשניות שלאחריו הסקר מתקדם אוטומטית לדף התודה."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "מרווח זמן בשניות שלאחריו הסקר מתקדם אוטומטית לעמוד הבא."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "מרווח זמן בשניות שלאחריו הסקר מתקדם אוטומטית לעמוד הבא."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את תצוגת העמוד."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי שמשבית את מצב הקריאה בלבד של העמוד."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "חל על כל השאלות בדף זה. אם ברצונך לדרוס הגדרה זו, הגדר כללי יישור כותרת לשאלות או חלוניות בודדות. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"למעלה\" כברירת מחדל)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"למעלה\" כברירת מחדל)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "שומר על הסדר המקורי של השאלות או מסדר אותן באופן אקראי. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"מקורי\" כברירת מחדל). ההשפעה של הגדרה זו גלויה רק בכרטיסיה תצוגה מקדימה."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "מגדיר את התצוגה של לחצני ניווט בעמוד. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר, המוגדרת כברירת מחדל ל\"גלוי\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "בחר מתוך: \"נעול\" - משתמשים אינם יכולים להרחיב או לכווץ חלוניות; \"כווץ הכל\" - כל הלוחות מתחילים במצב מכווץ; \"הרחב הכל\" - כל הלוחות מתחילים במצב מורחב; \"מורחב ראשון\" - רק הלוח הראשון מורחב בתחילה."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "הזן שם מאפיין משותף בתוך מערך האובייקטים המכיל את כתובות ה- URL של תמונות או קבצי וידאו שברצונך להציג ברשימת האפשרויות."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "הערך השמאלי משמש כמזהה פריט המשמש בכללי תנאי, הערך הימני מוצג למשיבים."
// pehelp.title: "Type a user-friendly title to display." => "הקלד כותרת ידידותית למשתמש להצגה."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "מבטיח שמשתמשים לא ישלימו את הסקר עד להעלאת קבצים."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "מקבל ערכי CSS (px, %, in, pt וכו')."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "מקבל ערכי CSS (px, %, in, pt וכו')."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "מקבל ערכי CSS (px, %, in, pt וכו')."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "בסוגי שאלות של בחירה בודדת ושאלות מרובות, לכל אפשרות בחירה יש מזהה וערך תצוגה. כשבוחרים באפשרות זו, הגדרה זו מציגה ערך תצוגה במקום ערך מזהה בשאלות HTML ובכותרות דינמיות ובתיאורים של רכיבי סקר."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "בחר אם לנקות או לא לנקות ערכי שאלות המוסתרים על-ידי לוגיקה מותנית ומתי לעשות זאת. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"עם השלמת הסקר\" כברירת מחדל)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "בחר מתוך: \"הכל\" - מעתיק את כל אפשרויות הבחירה מהשאלה שנבחרה; \"נבחר\" - מעתיק באופן דינמי רק אפשרויות בחירה שנבחרו; \"לא נבחר\" - מעתיק באופן דינמי רק אפשרויות בחירה שלא נבחרו. האפשרויות \"ללא\" ו\"אחר\" מועתקות כברירת מחדל אם הן מופעלות בשאלת המקור."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "כשבוחרים באפשרות זו, משתמשים יכולים לכלול קלט נוסף בתיבת הערות נפרדת."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "מציג כל אפשרות בחירה מיוחדת (\"ללא\", \"אחר\", \"בחר הכל\") בשורה חדשה, גם בשעת שימוש בפריסה מרובת עמודות."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "ציין את המיקום בתוך ערכת נתוני השירות שבו ממוקם מערך האובייקטים המשמש כיעד. השאר ריק אם כתובת ה- URL כבר מצביעה על המערך."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "הזן שם מאפיין אחיד במערך האובייקטים הכולל את הערכים שברצונך להציג ברשימת הבחירה."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "בחר כדי לאפשר לשירות להחזיר תגובה או מערך ריקים."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע את התצוגה של כל אפשרויות הבחירה."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "הערך השמאלי משמש כמזהה פריט המשמש בכללי תנאי, הערך הימני מוצג למשיבים."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"אוטומטי\" בוחר בין המצבים \"לחצנים\" ו \"נפתח\" מבוסס על הרוחב הזמין. כאשר הרוחב אינו מספיק להצגת לחצנים, השאלה מציגה רשימה נפתחת."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "מאפשר לך לחבר שאלות המייצרות תוצאות בפורמטים שונים. כאשר שאלות כאלה מקושרות יחד באמצעות מזהה צירוף, מאפיין משותף זה מאחסן ערכי שאלות נבחרים."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "בחר אם ברצונך לעדכן את תוכן התפריט הנפתח כך שיתאים לשאילתת החיפוש שמשתמש מקליד בשדה הקלט."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "ערך שיש לשמור בתוצאות הסקר כאשר המשיבים נותנים תשובה חיובית."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "ערך שיש לשמור בתוצאות הסקר כאשר המשיבים נותנים תשובה שלילית."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "לא מומלץ להפוך אפשרות זו ללא זמינה מכיוון שהיא דורסת את תמונת התצוגה המקדימה ומקשה על המשתמש להבין אם הקבצים הועלו."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "מפעיל בקשה המבקשת לאשר את מחיקת הקובץ."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "אפשר לדרג רק בחירות נבחרות. המשתמשים יגררו פריטים נבחרים מרשימת האפשרויות כדי לסדר אותם באזור הדירוג."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "הזן רשימה של אפשרויות שיוצעו למשיב במהלך הקלט."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "ההגדרה משנה את גודל שדות הקלט בלבד ואינה משפיעה על רוחב תיבת השאלה."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "קובע רוחב עקבי לכל תוויות הפריטים בפיקסלים"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "האפשרות \"אוטומטי\" קובעת אוטומטית את המצב המתאים לתצוגה - תמונה, וידאו או YouTube - בהתבסס על כתובת האתר המקורית שסופקה."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "משמש כתחליף כאשר לא ניתן להציג את התמונה במכשיר המשתמש ולמטרות נגישות."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "מגדיר את צבע האמוג'י שנבחר כשסוג סמל הדירוג מוגדר ל\"סמיילי\". בחר בין: \"ברירת מחדל\" - האמוג'י שנבחר מופיע בצבע סקר ברירת מחדל; \"קנה מידה\" - האמוג'י שנבחר יורש צבע מסולם הדירוג."
// expression.name: "An expression ID that is not visible to respondents." => "מזהה ביטוי שאינו גלוי למשיבים."
// expression.description: "Type an expression subtitle." => "הקלד כותרת משנה של ביטוי."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "ביטוי יכול לכלול חישובים בסיסיים ('{q1_id} + {q2_id}'), תנאים ('{age} > 60') ופונקציות ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו')."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "בחר כדי לאחסן את ערך האפשרות \"אחר\" כמאפיין נפרד בתוצאות הסקר."
// p.swapOrder: "Swap the order of Yes and No" => "החלפת הסדר של כן ולא"
// p.itemTitleWidth: "Item label width (in px)" => "רוחב תווית פריט (בפיקסלים)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "טקסט שיציג אם כל האפשרויות נבחרו"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "טקסט מציין מיקום עבור אזור הדירוג"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "השלם את הסקר באופן אוטומטי"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "בחר אם ברצונך שהסקר יושלם באופן אוטומטי לאחר שמשיב עונה על כל השאלות."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "שמירת ערך מוסווה בתוצאות הסקר"
// patternmask.pattern: "Value pattern" => "תבנית ערך"
// datetimemask.min: "Minimum value" => "ערך מינימלי"
// datetimemask.max: "Maximum value" => "ערך מרבי"
// numericmask.allowNegativeValues: "Allow negative values" => "התרת ערכים שליליים"
// numericmask.thousandsSeparator: "Thousands separator" => "מפריד אלפים"
// numericmask.decimalSeparator: "Decimal separator" => "מפריד עשרוני"
// numericmask.precision: "Value precision" => "דיוק ערך"
// numericmask.min: "Minimum value" => "ערך מינימלי"
// numericmask.max: "Maximum value" => "ערך מרבי"
// currencymask.prefix: "Currency prefix" => "קידומת מטבע"
// currencymask.suffix: "Currency suffix" => "סיומת מטבע"
// pe.maskType: "Input mask type" => "סוג מסיכת קלט"
// maskTypes.patternmask: "Pattern" => "תבנית"
// maskTypes.numericmask: "Numeric" => "מספריים"
// maskTypes.datetimemask: "Date and Time" => "תאריך ושעה"
// maskTypes.currencymask: "Currency" => "מטבע"
// tabs.mask: "Input Mask Settings" => "הגדרות מסיכת קלט"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "לדוגמה: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "לדוגמה: mm/dd/yyyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "לדוגמה: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "לדוגמה: USD"
// pv.textWrapEnabled: "Wrap choices" => "אפשרויות גלישה"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "טקסטים ארוכים באפשרויות בחירה ייצרו באופן אוטומטי מעברי שורה שיתאימו לתפריט הנפתח. בטל את הבחירה אם ברצונך שהטקסטים ייחתכו."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "בחר אם ברצונך לאחסן את ערך השאלה עם מסיכה שהוחלה בתוצאות הסקר."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "התבנית יכולה להכיל מילולי מחרוזת ואת מצייני המיקום הבאים: '9' - עבור ספרה; 'a' - עבור אות גדולה או קטנה; '#' - עבור ספרה או אות גדולה או קטנה. השתמש בקו נטוי הפוך '\\' כדי לברוח מתו."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "התבנית יכולה להכיל תווים מפרידים ואת מצייני המיקום הבאים: 'm' - עבור מספר חודש; 'mm' - עבור מספר חודש, עם אפס מוביל עבור ערכים חד-ספרתיים; 'ד' - ליום בחודש; 'dd' - עבור יום בחודש, עם אפס מוביל עבור ערכים חד-ספרתיים; 'yy' - עבור שתי הספרות האחרונות של השנה; 'yyyy' - לשנה בת ארבע ספרות."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "סמל המשמש להפרדת חלק השבר מהחלק השלם של מספר מוצג."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "סמל המשמש להפרדת הספרות של מספר גדול לקבוצות של שלושה."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "מגביל את מספר הספרות שיש לשמור אחרי הנקודה העשרונית עבור מספר מוצג."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "סימן אחד או יותר שיוצגו לפני הערך."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "סימן אחד או יותר שיוצגו לאחר הערך."
// ed.translationSource: "Source: " => "מקור: "
// ed.translationTarget: "Target: " => "יעד: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "הדף ריק. גרור רכיב מארגז הכלים או לחץ על הלחצן למטה."
// maskTypes.none: "None" => "ללא"
// itemvalue@rows.visibleIf: "Make the row visible if" => "הפיכת השורה לגלויה אם"
// itemvalue@rows.enableIf: "Make the row editable if" => "הפיכת השורה לניתנת לעריכה אם"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "טקסט מציין מיקום במצב קריאה בלבד או תצוגה מקדימה"
// pe.textWrapEnabled: "Wrap choices" => "אפשרויות גלישה"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "האפשרות \"אוטומטי\" קובעת אוטומטית את המצב המתאים לתצוגה - תמונה, וידאו או YouTube - בהתבסס על כתובת האתר המקורית שסופקה."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "בחר בין \"תמונה\" ו\"וידאו\" כדי להגדיר את מצב התוכן של בורר המדיה. אם נבחרה האפשרות \"תמונה\", ודא שכל האפשרויות שסופקו הן קובצי תמונה בתבניות הבאות: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. באופן דומה, אם נבחר \"וידאו\", ודא שכל האפשרויות הן קישורים ישירים לקבצי וידאו בפורמטים הבאים: MP4, MOV, WMV, FLV, AVI, MKV. שים לב שקישורי YouTube אינם נתמכים עבור אפשרויות וידאו."
// ed.selectFile: "Select a file" => "בחר קובץ"
// ed.removeFile: "Remove the file" => "הסרת הקובץ"
// pe.searchMode: "Search Mode" => "מצב חיפוש"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "לחץ על הלחצן \"הוסף שאלה\" למטה כדי להתחיל ליצור את הטופס שלך."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "לחץ על כפתור \"הוסף שאלה\" למטה כדי להוסיף אלמנט חדש לדף."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "לחץ על הלחצן \"הוסף שאלה\" למטה כדי להוסיף אלמנט חדש לחלונית."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "לחץ על הלחצן למטה ובחר תמונה להעלאה"
// coloralpha.opacity: "Opacity" => "אטימות"
// font.family: "Font family" => "משפחת גופנים"
// font.color: "Color" => "צבע"
// font.placeholderColor: "Placeholder color" => "צבע מציין מיקום"
// font.size: "Size" => "גודל"
// theme.themeName: "Theme" => "ערכת נושא"
// theme.isPanelless: "Question appearance" => "מראה השאלה"
// theme.editorPanel: "Background and corner radius" => "רקע ורדיוס פינה"
// theme.questionPanel: "Background and corner radius" => "רקע ורדיוס פינה"
// theme.primaryColor: "Accent color" => "צבע הדגשה"
// theme.panelBackgroundTransparency: "Panel background opacity" => "אטימות רקע של החלונית"
// theme.questionBackgroundTransparency: "Question background opacity" => "אטימות רקע השאלה"
// theme.fontSize: "Font size" => "גודל גופן"
// theme.scale: "Scale" => "סולם"
// theme.cornerRadius: "Corner radius" => "רדיוס פינה"
// theme.pageTitle: "Title font" => "גופן כותרת"
// theme.pageDescription: "Description font" => "גופן תיאור"
// theme.questionTitle: "Title font" => "גופן כותרת"
// theme.questionDescription: "Description font" => "גופן תיאור"
// theme.editorFont: "Font" => "גופן"
// theme.backgroundOpacity: "Opacity" => "אטימות"
// theme.--sjs-font-family: "Font family" => "משפחת גופנים"
// theme.--sjs-general-backcolor-dim: "Background color" => "צבע רקע"
// theme.--sjs-primary-backcolor: "Accent background" => "רקע הדגשה"
// theme.--sjs-primary-forecolor: "Accent foreground" => "הדגשת החזית"
// theme.--sjs-shadow-small: "Shadow effects" => "אפקטי צל"
// theme.--sjs-shadow-inner: "Shadow effects" => "אפקטי צל"
// theme.--sjs-border-default: "Colors" => "צבעים"
// header@header.headerView: "View" => "נוף"
// header@header.logoPosition: "Logo position" => "מיקום הלוגו"
// header@header.surveyTitle: "Survey title font" => "גופן כותרת סקר"
// header@header.surveyDescription: "Survey description font" => "גופן תיאור סקר"
// header@header.headerTitle: "Survey title font" => "גופן כותרת סקר"
// header@header.headerDescription: "Survey description font" => "גופן תיאור סקר"
// header@header.inheritWidthFrom: "Content area width" => "רוחב אזור תוכן"
// header@header.textAreaWidth: "Text width" => "רוחב טקסט"
// header@header.backgroundColorSwitch: "Background color" => "צבע רקע"
// header@header.backgroundImage: "Background image" => "תמונת רקע"
// header@header.backgroundImageOpacity: "Opacity" => "אטימות"
// header@header.overlapEnabled: "Overlap" => "חופפים"
// header@header.logoPositionX: "Logo position" => "מיקום הלוגו"
// header@header.titlePositionX: "Title position" => "מיקום בתפקיד"
// header@header.descriptionPositionX: "Description position" => "תיאור מיקום"
// weight.400: "Regular" => "רגיל"
// weight.600: "Heavy" => "כבד"
// weight.700: "Semi-bold" => "חצי נועז"
// weight.800: "Bold" => "נועז"
// backgroundImageFit.auto: "Auto" => "אוטומטי"
// backgroundImageFit.cover: "Cover" => "כריכה"
// backgroundImageFit.contain: "Contain" => "להכיל"
// backgroundImageFit.fill: "Stretch" => "מתיחה"
// backgroundImageFit.tile: "Tile" => "אריח"
// backgroundImageAttachment.fixed: "Fixed" => "קבוע"
// backgroundImageAttachment.scroll: "Scroll" => "לגלול"
// headerView.basic: "Basic" => "בסיסי"
// headerView.advanced: "Advanced" => "מתקדמים"
// inheritWidthFrom.survey: "Same as survey" => "זהה לסקר"
// inheritWidthFrom.container: "Fit to container" => "התאמה למיכל"
// backgroundColorSwitch.none: "None" => "ללא"
// backgroundColorSwitch.accentColor: "Accent color" => "צבע הדגשה"
// backgroundColorSwitch.custom: "Custom" => "מנהג"
// colorPalette.light: "Light" => "אור"
// colorPalette.dark: "Dark" => "חשוך"
// isPanelless.false: "Default" => "ברירת מחדל"
// isPanelless.true: "Without Panels" => "ללא פאנלים"
// theme.cornerRadius: "Corner radius" => "רדיוס פינה"
// theme.fontFamily: "Font family" => "משפחת גופנים"
// theme.fontWeightRegular: "Regular" => "רגיל"
// theme.fontWeightHeavy: "Heavy" => "כבד"
// theme.fontWeightSemiBold: "Semi-bold" => "חצי נועז"
// theme.fontWeightBold: "Bold" => "נועז"
// theme.color: "Color" => "צבע"
// theme.placeholderColor: "Placeholder color" => "צבע מציין מיקום"
// theme.size: "Size" => "גודל"
// theme.opacity: "Opacity" => "אטימות"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "הקלד כדי לחפש..."
// ed.toolboxNoResultsFound: "No results found" => "לא נמצאו תוצאות"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "מציין מיקום של כותרת טאב"
// theme.--sjs-special-red: "Error messages" => "הודעות שגיאה"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "טקסט נסיגה עבור כותרות טאבים שחל כאשר תבנית כותרת הטאב אינה מפיקה ערך בעל משמעות."
// theme.fontColor: "Font color" => "צבע גופן"
// theme.backgroundColor: "Background color" => "צבע רקע"
// pe.questionTitleWidth: "Question title width" => "רוחב כותרת השאלה"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "בחר קובץ או הדבק קישור לקובץ..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "לדוגמה: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "הגדרת רוחב עקבי לכותרות שאלות כאשר הן מיושרות משמאל לתיבות השאלות. מקבל ערכי CSS (px, %, in, pt וכו')."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "הגדרת רוחב עקבי לכותרות שאלות כאשר הן מיושרות משמאל לתיבות השאלות. מקבל ערכי CSS (px, %, in, pt וכו')."
// pe.commentAreaRows: "Comment area height (in lines)" => "גובה אזור הערה (בשורות)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "מגדיר את מספר השורות המוצגות באזורי טקסט להערות שאלה. בקלט תופס יותר שורות, פס הגלילה מופיע."
// pe.enabled: "Enabled" => "מופעלת"
// pe.disabled: "Disabled" => "נכים"
// pe.inherit: "Inherit" => "לרשת"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "אימות שדות ריקים במיקוד שאבד"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "לדוגמה: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "לדוגמה: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "הפעל אפשרות זו כדי להפעיל אימות כאשר משתמש מתמקד בשדה קלט ריק ולאחר מכן עוזב אותו מבלי לבצע שינויים."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "מסדר אפשרויות בחירה בפריסה מרובת עמודות. כאשר הן מוגדרות על 0, האפשרויות מוצגות בשורה אחת."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "הגדרה זו חלה רק על שאלות מחוץ לחלונית."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "הגדרת צבע משלים המדגיש רכיבי סקר מרכזיים."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "התאמת השקיפות של חלוניות ותיבות שאלה ביחס לרקע הסקר."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "התאמת השקיפות של רכיבי הקלט ביחס לרקע הסקר."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "קובע את רדיוס הפינה לכל הרכיבים המלבניים. הפעילו את 'מצב מתקדם' אם ברצונכם להגדיר ערכי רדיוס פינה בודדים לרכיבי קלט או לחלוניות ולתיבות שאלה."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "מגדיר את צבע הרקע הראשי של הסקר."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "האפשרות \"זהה לגורם מכיל\" מתאימה אוטומטית את רוחב אזור התוכן של הכותרת העליונה כך שיתאים לרכיב HTML שבו ממוקם הסקר."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "רוחב אזור הכותרת המכיל את כותרת הסקר ותיאורו, נמדד בפיקסלים."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "מקבל ערכים %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "מקבל ערכים px."
// p.effectiveColSpan: "Column span" => "טווח עמודות"
// progressBarInheritWidthFrom.survey: "Same as survey" => "זהה לסקר"
// progressBarInheritWidthFrom.container: "Same as container" => "זהה למיכל"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "מציג תצוגות מקדימות של תמונות ממוזערות עבור קבצים שהועלו במידת האפשר. בטל את הבחירה אם ברצונך להציג סמלי קבצים במקום זאת."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "האפשרות \"זהה לגורם מכיל\" מתאימה אוטומטית את רוחב אזור מד ההתקדמות כך שיתאים לרכיב HTML שבו ממוקם הסקר."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "רוחב אזור מד התקדמות"
// maskType.none: "None" => "ללא"
// maskType.pattern: "Pattern" => "תבנית"
// maskType.numeric: "Numeric" => "מספריים"
// maskType.datetime: "Date and Time" => "תאריך ושעה"
// maskType.currency: "Currency" => "מטבע"

// inputTextAlignment.auto: "Auto" => "אוטומטי"
// inputTextAlignment.left: "Left" => "שמאל"
// inputTextAlignment.right: "Right" => "ימין"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "בחר כיצד ליישר ערך קלט בתוך השדה. הגדרת ברירת המחדל \"אוטומטי\" מיישרת את ערך הקלט ימינה אם מוחלת מסיכה על מטבע או מספר, ושמאלה אם לא."
// p.inputTextAlignment: "Input value alignment" => "יישור ערך קלט"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "הצגת מד ההתקדמות"
// paneldynamic.showProgressBar: "Show the progress bar" => "הצגת מד ההתקדמות"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "יישור מד התקדמות"
// pv.carousel: "Carousel" => "קרוסלה"
// progressBarLocation.top: "Top" => "סביבון"
// progressBarLocation.bottom: "Bottom" => "ישבן"
// progressBarLocation.topBottom: "Top and bottom" => "עליון ותחתון"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "מסדר אפשרויות בחירה בפריסה מרובת עמודות. כאשר הן מוגדרות על 0, האפשרויות מוצגות בשורה אחת. כאשר הוא מוגדר ל- -1, הערך בפועל עובר בירושה מהמאפיין \"ספירת עמודות מקוננת\" של מטריצת האב."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "קישורי YouTube אינם נתמכים."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "התחל לקבוע את תצורת הטופס שלך"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "לחץ על סמל קטגוריה כלשהו כדי לחקור את הגדרות הסקר. הגדרות נוספות יהיו זמינות לאחר הוספת רכיב סקר למשטח העיצוב."
// pe.caseInsensitive: "Case insensitive" => "לא תלוי רישיות"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "בחר אם יש להתייחס לאותיות רישיות וקטנות בביטוי הרגיל כשוות ערך."

// ed.surveyPlaceholderTitle: "Your form is empty" => "הטופס שלך ריק"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "הטופס שלך ריק"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "גרור רכיב מארגז הכלים או לחץ על הלחצן למטה."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "גרור רכיב מארגז הכלים או לחץ על הלחצן למטה."
// ed.previewPlaceholderTitle: "No preview" => "ללא תצוגה מקדימה"
// ed.previewPlaceholderTitleMobile: "No preview" => "ללא תצוגה מקדימה"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "הסקר אינו מכיל רכיבים גלויים."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "הסקר אינו מכיל רכיבים גלויים."
// ed.translationsPlaceholderTitle: "No strings to translate" => "אין מחרוזות לתרגם"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "אין מחרוזות לתרגם"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "הוסף רכיבים לטופס או שנה את מסנן המחרוזות בסרגל הכלים."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "הוסף רכיבים לטופס או שנה את מסנן המחרוזות בסרגל הכלים."
// lg.logicPlaceholderTitle: "No logical rules" => "אין כללים לוגיים"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "אין כללים לוגיים"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "צור כלל כדי להתאים אישית את זרימת הסקר."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "צור כלל כדי להתאים אישית את זרימת הסקר."
// pe.showTimer: "Use a timer" => "שימוש בטיימר"
// theme.advancedMode: "Advanced mode" => "מצב מתקדם"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "הגדרת המיקום של טיימר בעמוד."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "כאשר הוא מוגדר ל- 0, הגובה מחושב באופן אוטומטי כדי להתאים לתוכן הכותרת."
// p.mobileHeight: "Height on smartphones" => "גובה בסמארטפונים"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "כאשר אפשרות זו מופעלת, החלק העליון של הסקר מכסה את החלק התחתון של הכותרת."
// ed.creatorSettingTitle: "Creator Settings" => "הגדרות יוצר"
// tabs.accentColors: "Accent colors" => "צבעי הדגשה"
// tabs.scaling: "Scaling" => "שינוי גודל"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "מקצה מספרים לשאלות המקוננות בלוח זה."
// creatortheme.--sjs-special-background: "Surface background" => "רקע פני השטח"
// creatortheme.--sjs-primary-background-500: "Primary" => "הראשי"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "משני"
// creatortheme.surfaceScale: "Surface" => "משטח"
// creatortheme.userInterfaceBaseUnit: "User interface" => "ממשק משתמש"
// creatortheme.fontScale: "Font" => "גופן"
// names.sc2020: "Survey Creator 2020" => "יוצר הסקר 2020"
// names.default-light: "Light" => "אור"
// names.default-dark: "Dark" => "חשוך"
// names.default-contrast: "Contrast" => "ניגוד"
// panel.showNumber: "Number this panel" => "מספר חלונית זו"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "בחר אם ברצונך שהסקר יתקדם אוטומטית לדף הבא לאחר שהמשיב ענה על כל השאלות בדף הנוכחי. תכונה זו לא תחול אם השאלה האחרונה בדף פתוחה או מאפשרת תשובות מרובות."
// autocomplete.name: "Full Name" => "שם מלא"
// autocomplete.honorific-prefix: "Prefix" => "קידומת"
// autocomplete.given-name: "First Name" => "שם פרטי"
// autocomplete.additional-name: "Middle Name" => "שם אמצעי"
// autocomplete.family-name: "Last Name" => "שם משפחה"
// autocomplete.honorific-suffix: "Suffix" => "סיומת"
// autocomplete.nickname: "Nickname" => "כינוי"
// autocomplete.organization-title: "Job Title" => "תפקיד"
// autocomplete.username: "User Name" => "שם משתמש"
// autocomplete.new-password: "New Password" => "סיסמה חדשה"
// autocomplete.current-password: "Current Password" => "סיסמה נוכחית"
// autocomplete.organization: "Organization Name" => "שם הארגון"
// autocomplete.street-address: "Full Street Address" => "כתובת הרחוב המלאה"
// autocomplete.address-line1: "Address Line 1" => "כתובת שורה 1"
// autocomplete.address-line2: "Address Line 2" => "כתובת שורה 2"
// autocomplete.address-line3: "Address Line 3" => "כתובת שורה 3"
// autocomplete.address-level4: "Level 4 Address" => "כתובת ברמה 4"
// autocomplete.address-level3: "Level 3 Address" => "כתובת ברמה 3"
// autocomplete.address-level2: "Level 2 Address" => "כתובת ברמה 2"
// autocomplete.address-level1: "Level 1 Address" => "כתובת ברמה 1"
// autocomplete.country: "Country Code" => "קוד מדינה"
// autocomplete.country-name: "Country Name" => "שם מדינה"
// autocomplete.postal-code: "Postal Code" => "מיקוד"
// autocomplete.cc-name: "Cardholder Name" => "שם בעל הכרטיס"
// autocomplete.cc-given-name: "Cardholder First Name" => "שם פרטי של בעל הכרטיס"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "שם אמצעי של בעל הכרטיס"
// autocomplete.cc-family-name: "Cardholder Last Name" => "שם משפחה של בעל הכרטיס"
// autocomplete.cc-number: "Credit Card Number" => "מספר כרטיס אשראי"
// autocomplete.cc-exp: "Expiration Date" => "תאריך תפוגה"
// autocomplete.cc-exp-month: "Expiration Month" => "חודש תפוגה"
// autocomplete.cc-exp-year: "Expiration Year" => "שנת תפוגה"
// autocomplete.cc-csc: "Card Security Code" => "קוד אבטחה של כרטיס"
// autocomplete.cc-type: "Credit Card Type" => "סוג כרטיס אשראי"
// autocomplete.transaction-currency: "Transaction Currency" => "מטבע עסקה"
// autocomplete.transaction-amount: "Transaction Amount" => "סכום העסקה"
// autocomplete.language: "Preferred Language" => "שפה מועדפת"
// autocomplete.bday: "Birthday" => "יום הולדת"
// autocomplete.bday-day: "Birthday Day" => "יום הולדת"
// autocomplete.bday-month: "Birthday Month" => "חודש יום הולדת"
// autocomplete.bday-year: "Birthday Year" => "שנת יום הולדת"
// autocomplete.sex: "Gender" => "מין"
// autocomplete.url: "Website URL" => "כתובת אתר אינטרנט"
// autocomplete.photo: "Profile Photo" => "תמונת פרופיל"
// autocomplete.tel: "Telephone Number" => "מספר טלפון"
// autocomplete.tel-country-code: "Country Code for Phone" => "קידומת מדינה לטלפון"
// autocomplete.tel-national: "National Telephone Number" => "מספר טלפון ארצי"
// autocomplete.tel-area-code: "Area Code" => "אזור חיוג"
// autocomplete.tel-local: "Local Phone Number" => "מספר טלפון מקומי"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "קידומת טלפון מקומי"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "סיומת טלפון מקומי"
// autocomplete.tel-extension: "Phone Extension" => "שלוחת טלפון"
// autocomplete.email: "Email Address" => "כתובת דוא\"ל"
// autocomplete.impp: "Instant Messaging Protocol" => "פרוטוקול העברת הודעות מיידיות"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "נעילת מצב הרחבה/כיווץ עבור שאלות"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "עדיין אין לך דפים"
// pe.addNew@pages: "Add new page" => "הוספת עמוד חדש"
// ed.zoomInTooltip: "Zoom In" => "התקרבות"
// ed.zoomOutTooltip: "Zoom Out" => "הקטנת התצוגה"
// tabs.surfaceBackground: "Surface Background" => "רקע פני השטח"
// colors.gray: "Gray" => "אפור"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "יישור לחצני ניווט"
// pv.allQuestions: "Show all questions" => "הצג את כל השאלות"
// pv.answeredQuestions: "Show answered questions only" => "הצג שאלות שנענו בלבד"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "הגדרת המיקום של לחצני ניווט בעמוד."
// pe.size: "Input field width (in characters)" => "רוחב שדה קלט (בתווים)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "השתמש בערכים משאלת עמודת המטריצה או החלונית הבאה כמזהי בחירה"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "השתמש בערכים מעמודת המטריצה או משאלת החלונית הבאה כטקסטים נבחרים"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "בסוגי שאלות של בחירה בודדת ושאלות מרובות, לכל אפשרות בחירה יש מזהה וערך תצוגה. הגדרה זו מציינת איזו עמודת מטריצה או שאלת חלונית יספקו את המזהים."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "בסוגי שאלות של בחירה בודדת ושאלות מרובות, לכל אפשרות בחירה יש מזהה וערך תצוגה. הגדרה זו מציינת איזו שאלת עמודת מטריצה או חלונית תספק את טקסטי התצוגה."
// pe.progressBarLocation: "Progress bar alignment" => "יישור מד התקדמות"
// progressBarLocation.topbottom: "Top and bottom" => "עליון ותחתון"
// progressBarLocation.aboveheader: "Above the header" => "מעל הכותרת העליונה"
// progressBarLocation.belowheader: "Below the header" => "מתחת לכותרת העליונה"
// progressBarLocation.off: "Hidden" => "מוסתרים"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "מגדיר את המיקום של מד ההתקדמות. הערך \"אוטומטי\" מציג את מד ההתקדמות מעל או מתחת לכותרת הסקר."
// survey.readOnly: "Make the survey read-only" => "הפוך את הסקר לקריאה בלבד"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "בחר אם ברצונך למנוע מהמשיבים למלא את הסקר שלך."
// paneldynamic.showNumber: "Number the panel" => "מספור החלונית"
// question.showNumber: "Number this question" => "מספר שאלה זו"
// pe.previewMode: "Preview mode" => "מצב תצוגה מקדימה"
// pe.gridLayoutEnabled: "Enable the grid layout" => "הפיכת פריסת הרשת לזמינה"
// pe.maskSettings: "Mask settings" => "קביעות מסיכה"
// pe.detailErrorLocation: "Row expansion error message alignment" => "יישור הודעת שגיאה של הרחבת שורה"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "הגדרת המיקום של הודעות שגיאה עבור שאלות המקוננות במקטעים מפורטים. האפשרות \"ירושה\" מחילה את ההגדרה מהמאפיין \"יישור הודעת שגיאה\"."
// pe.gridLayoutColumns: "Grid layout columns" => "עמודות פריסת רשת"
// pe.startPageTitlePlaceholder: "Start Page" => "דף פתיחה"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "רוחב אפקטיבי, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "רוחב כותרת השאלה, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "עדיין אין לך עמודות פריסה"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "מציין כמה עמודות תפרוס חלונית זו בפריסת הרשת."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "טבלה זו מאפשרת להגדיר כל עמודת רשת בחלונית. הוא מגדיר באופן אוטומטי את אחוז הרוחב עבור כל עמודה בהתבסס על המספר המרבי של רכיבים בשורה. כדי להתאים אישית את פריסת הרשת, התאם ערכים אלה באופן ידני והגדר את רוחב הכותרת עבור כל השאלות בכל עמודה."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "יוצר הסקר מאפשר לך להתאים באופן ידני את רוחב השורה של רכיבי טופס כדי לשלוט בפריסה. אם פעולה זו אינה מפיקה את התוצאה הרצויה, ניתן להפעיל את פריסת הרשת, הבונה רכיבי טופס באמצעות מערכת מבוססת עמודות. כדי להגדיר עמודות פריסה, בחר עמוד או חלונית והשתמש בטבלה \"הגדרות שאלה\" → \"עמודות רשת\". כדי להתאים את מספר העמודות ששאלה משתרעת, בחר אותה והגדר את הערך הרצוי בשדה \"פריסה\" → \"טווח עמודות\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "מציין כמה עמודות שאלה זו משתרעת בתוך פריסת הרשת."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "טבלה זו מאפשרת לך לקבוע את התצורה של כל עמודת רשת בעמוד. הוא מגדיר באופן אוטומטי את אחוז הרוחב עבור כל עמודה בהתבסס על המספר המרבי של רכיבים בשורה. כדי להתאים אישית את פריסת הרשת, התאם ערכים אלה באופן ידני והגדר את רוחב הכותרת עבור כל השאלות בכל עמודה."

// ed.expandTooltip: "Expand" => "להרחיב"
// ed.collapseTooltip: "Collapse" => "התמוטטות"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "לדוגמה: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "קובע רוחב עקבי לכל תוויות הפריט. מקבל ערכי CSS (px, %, in, pt וכו')."
// ed.zoom100Tooltip: "Zoom to 100%" => "שינוי גודל תצוגה ל- 100%"
// ed.addLanguageTooltip: "Add Language" => "הוסף שפה"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "מגדיר את מספר השורות המוצגות באזורי טקסט להערות שאלה. אם הקלט תופס שורות נוספות, פס הגלילה מופיע."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "ערך תצוגה המוגדר כברירת מחדל לטקסטים דינמיים"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "ערך המוצג בשאלות HTML ובכותרות ובתיאורים הדינמיים של רכיבי סקר כאשר ערך השאלה ריק."
// showQuestionNumbers.recursive: "Recursive numbering" => "מספור רקורסיבי"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "רוחב כותרת השאלה"
// pe.allowCustomChoices: "Allow custom choices" => "מתן אפשרות לבחירות מותאמות אישית"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "מגדיר רוחב עקבי לכותרות השאלות כשהן מיושרות לשמאל של תיבות השאלה שלהן. מקבל ערכי CSS (px, %, in, pt וכדומה)."
// page.name: "A page ID that is not visible to respondents." => "מזהה דף שאינו גלוי למשיבים."
// page.description: "Type a page subtitle." => "הקלד כותרת משנה של דף."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "כיתוב המוצג בלחצן ניווט בסרגל ההתקדמות או בתוכן העניינים (TOC). אם תשאיר שדה זה ריק, לחצן הניווט ישתמש בכותרת הדף או בשם הדף. כדי להפעיל את מד ההתקדמות או תוכן העניינים, עבור אל \"סקר\" →\"ניווט\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "בחר כדי לאפשר למשיבים להוסיף אפשרויות משלהם אם האפשרות הרצויה אינה זמינה ברשימה הנפתחת. אפשרויות מותאמות אישית יאוחסנו באופן זמני בלבד למשך הפעלת הדפדפן הנוכחית."