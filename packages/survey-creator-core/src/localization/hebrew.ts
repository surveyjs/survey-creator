import { setupLocale } from "survey-creator-core";

export var hebrewStrings = {
  // survey templates
  survey: {
    // "Duplicate"
    duplicate: "שכפול"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "תצוגה מקדימה",
    // "Themes"
    theme: "ערכות נושא",
    // "Translations"
    translation: "תרגום",
    // "Designer"
    designer: "מעצב",
    // "JSON Editor"
    json: "עורך JSON",
    // "Logic"
    logic: "לוגיקה"
  },
  // Question types
  qt: {
    // "Default"
    default: "ברירת מחדל",
    // "Checkboxes"
    checkbox: "תיבות סימון",
    // "Long Text"
    comment: "טקסט ארוך",
    // "Image Picker"
    imagepicker: "בורר תמונות",
    // "Ranking"
    ranking: "דירוג",
    // "Image"
    image: "תמונה",
    // "Dropdown"
    dropdown: "תפריט נפתח",
    // "Multi-Select Dropdown"
    tagbox: "תפריט נפתח מרובה בחירה",
    // "File Upload"
    file: "העלאת קובץ",
    // [Auto-translated] "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "מטריצת בחירה יחידה",
    // "Multi-Select Matrix"
    matrixdropdown: "מטריצת בחירה מרובה",
    // "Dynamic Matrix"
    matrixdynamic: "מטריצה דינמית",
    // "Multiple Textboxes"
    multipletext: "תיבות טקסט מרובות",
    // "Panel"
    panel: "לוח",
    // "Dynamic Panel"
    paneldynamic: "לוח דינמי",
    // "Radio Button Group"
    radiogroup: "קבוצת כפתורי רדיו",
    // "Rating Scale"
    rating: "סולם דירוג",
    // [Auto-translated] "Slider"
    slider: "המחוון",
    // "Single-Line Input"
    text: "קלט בשורה אחת",
    // "Yes/No (Boolean)"
    boolean: "כן/לא (בוליאני)",
    // "Expression (read-only)"
    expression: "ביטוי (קריאה בלבד)",
    // "Signature"
    signaturepad: "חתימה",
    // "Button Group"
    buttongroup: "קבוצת כפתורים"
  },
  toolboxCategories: {
    // "General"
    general: "כללי",
    // "Choice Questions"
    choice: "שאלות עם בחירה",
    // "Text Input Questions"
    text: "שאלות טקסטואליות",
    // "Containers"
    containers: "מכילים",
    // "Matrix Questions"
    matrix: "שאלות מטריצה",
    // "Misc"
    misc: "שונות"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "ברירת מחדל ({0})",
    // "Settings"
    settings: "הגדרות",
    // "Open settings"
    settingsTooltip: "פתח הגדרות",
    // "Survey Settings"
    surveySettings: "הגדרות הסקר",
    // "Survey settings"
    surveySettingsTooltip: "הגדרות סקר",
    // "Theme Settings"
    themeSettings: "הגדרות ערכת העיצוב",
    // "Theme settings"
    themeSettingsTooltip: "הגדרות ערכת נושא",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "הגדרות יוצר",
    // "Show Panel"
    showPanel: "הצג לוח",
    // "Hide Panel"
    hidePanel: "הסתר לוח",
    // "Select previous"
    prevSelected: "בחר קודם",
    // "Select next"
    nextSelected: "בחר בבא בתור",
    // [Auto-translated] "Focus previous"
    prevFocus: "פוקוס קודם",
    // [Auto-translated] "Focus next"
    nextFocus: "התמקד הבא",
    // "Survey"
    surveyTypeName: "סקר",
    // "Page"
    pageTypeName: "דף",
    // "page"
    newPageName: "דף",
    // "question"
    newQuestionName: "שאלה",
    // "panel"
    newPanelName: "לוח",
    // "Preview Survey Again"
    testSurveyAgain: "תצוגה מקדימה שוב",
    // "You had to navigate to"
    navigateToMsg: "הייתם צריכים לנווט אל",
    // "Save Survey"
    saveSurvey: "שמור סקר",
    // "Save Survey"
    saveSurveyTooltip: "שמור סקר",
    // [Auto-translated] "Save Theme"
    saveTheme: "שמור ערכת נושא",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "שמור ערכת נושא",
    // "Hide errors"
    jsonHideErrors: "הסתר שגיאות",
    // "Show errors"
    jsonShowErrors: "הצג שגיאות",
    // [Auto-translated] "Fix error"
    jsonFixError: "שגיאת תיקון",
    // [Auto-translated] "The survey JSON must be an object."
    jsonRootNotObject: "ה-JSON של הסקר חייב להיות אובייקט.",
    // "Undo"
    undo: "בטל",
    // "Redo"
    redo: "בצע מחדש",
    // [Auto-translated] "Expand"
    expandTooltip: "להרחיב",
    // [Auto-translated] "Collapse"
    collapseTooltip: "התמוטטות",
    // "Expand All"
    expandAllTooltip: "הרחב הכל",
    // "Collapse All"
    collapseAllTooltip: "כווץ הכל",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "התקרבות",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "שינוי גודל תצוגה ל- 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "הקטנת התצוגה",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "נעילת מצב הרחבה/כיווץ עבור שאלות",
    // "Show more"
    showMoreChoices: "הצג עוד",
    // "Show less"
    showLessChoices: "הצג פחות",
    // [Auto-translated] "Unknown function: \"{0}\"."
    expressionUnknownFunction: "פונקציה לא ידועה: \"{0}\".",
    // [Auto-translated] "Unknown functions: \"{0}\"."
    expressionUnknownFunctions: "פונקציות לא ידועות: \"{0}\".",
    // [Auto-translated] "Unknown variable: \"{0}\"."
    expressionUnknownVariable: "משתנה לא ידוע: \"{0}\".",
    // [Auto-translated] "Unknown variables: \"{0}\"."
    expressionUnknownVariables: "משתנים לא ידועים: \"{0}\".",
    // [Auto-translated] "Syntax error."
    expressionSyntaxError: "שגיאת תחביר.",
    // [Auto-translated] "Semantic error."
    expressionSemanticsError: "טעות סמנטית.",
    // "Toolbox"
    toolbox: "ארגז הכלים",
    // [Auto-translated] "Search"
    toolboxSearch: "חיפוש",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "הקלד כדי לחפש...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "לא נמצאו תוצאות",
    // [Auto-translated] "No properties to display"
    propertyGridEmptySurveyText: "אין תכונות להצגה",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "הקלד כדי לחפש...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "לא נמצאו תוצאות",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "התחל לקבוע את תצורת הטופס שלך",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "לחץ על סמל קטגוריה כלשהו כדי לחקור את הגדרות הסקר. הגדרות נוספות יהיו זמינות לאחר הוספת רכיב סקר למשטח העיצוב.",
    // "Survey Results "
    surveyResults: "תוצאות הסקר",
    // "As Table"
    surveyResultsTable: "כטבלה",
    // "As JSON"
    surveyResultsJson: "כ-JSON",
    // "Question Title"
    resultsTitle: "כותרת השאלה",
    // "Question Name"
    resultsName: "שם השאלה",
    // "Answer Value"
    resultsValue: "ערך התשובה",
    // "Display Value"
    resultsDisplayValue: "ערך תצוגה",
    // "Modified"
    modified: "שונה",
    // "Saving"
    saving: "שומר",
    // "Saved"
    saved: "נשמר",
    // "Error! Editor content is not saved."
    saveError: "שגיאה! התוכן של העורך לא נשמר.",
    // "Language Settings"
    translationPropertyGridTitle: "הגדרות שפה",
    // "Theme Settings"
    themePropertyGridTitle: "הגדרות ערכת העיצוב",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "הוסף שפה",
    // "Languages"
    translationLanguages: "שפות",
    // "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "האם אתה בטוח שברצונך למחוק את כל המחרוזות לשפה זו?",
    // "Select language to translate"
    translationAddLanguage: "בחר שפה לתרגום",
    // "All Strings"
    translationShowAllStrings: "כל המחרוזות",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "רק מחרוזות בשימוש",
    // "All Pages"
    translationShowAllPages: "כל הדפים",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "אין מחרוזות לתרגום. אנא שנה את הסינון.",
    // "Export to CSV"
    translationExportToSCVButton: "ייצא ל-CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "ייבא מ-CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "תרגום אוטומטי של הכל",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "תרגם מ: ",
    // [Auto-translated] "Translate remaining strings"
    translateRemainingStrings: "תרגום מחרוזות שנותרו",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "מחרוזות לא מתורגמות",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "מזג {0} עם הגדרות ברירת המחדל",
    // "Translation..."
    translationPlaceHolder: "תרגום...",
    // [Auto-translated] "Source: "
    translationSource: "מקור: ",
    // [Auto-translated] "Target: "
    translationTarget: "יעד: ",
    // [Auto-translated] "Source language"
    translationSourceLanguage: "שפת המקור",
    // [Auto-translated] "Target language"
    translationTargetLanguage: "שפת היעד",
    // [Auto-translated] "{0} of {1} strings translated"
    translationProgress: "{0} המיתרים {1} מתורגמים",
    // [Auto-translated] "Are you certain you wish to delete all translated strings for the selected language?"
    translationClearProgress: "האם אתה בטוח שאתה רוצה למחוק את כל המחרוזות המתורגמות לשפה שנבחרה?",
    // [Auto-translated] "Form View"
    translationSideBySideViewForm: "תצוגת טופס",
    // [Auto-translated] "Grid View"
    translationSideBySideViewGrid: "תצוגת רשת",
    // [Auto-translated] "Translate strings"
    translateStrings: "תרגם מחרוזות",
    // [Auto-translated] "Survey Strings"
    translationSurveyStrings: "מחרוזות סקר",
    // [Auto-translated] "No strings to translate"
    translationStateNothingToTranslate: "אין מחרוזות לתרגום",
    // [Auto-translated] "All strings are translated"
    translationStateAllTranslated: "כל המחרוזות מתורגמות",
    // [Auto-translated] "{0} strings are not translated"
    translationStateUntranslated: "מחרוזות {0} אינן מתורגמות",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "קישורי YouTube אינם נתמכים.",
    // "Export"
    themeExportButton: "ייצא",
    // "Import"
    themeImportButton: "ייבא",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "ייצא",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "ייבוא",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "העתק ללוח",
    // "Reset theme settings to default"
    themeResetButton: "אפס הגדרות ערכת העיצוב לברירת המחדל",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "האם אתה באמת רוצה לאפס את ערכת הנושא? כל ההתאמות האישיות שלך יאבדו.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "כן, אפס את ערכת הנושא",
    // "Add Question"
    addNewQuestion: "הוסף שאלה",
    // "Select page..."
    selectPage: "בחר דף...",
    // "Choices are copied from"
    carryForwardChoicesCopied: "הטענות הועתקו מ",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "האפשרויות נטענות משירות אינטרנט.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "עבור אל הגדרות",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "תצוגה מקדימה של אפשרויות בחירה שנטענו",
    // "HTML content will be here."
    htmlPlaceHolder: "התוכן של HTML יופיע כאן.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "גרר שאלה מתיק כלי הכלים לכאן.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "הסקר ריק. גרור אלמנט מארגז הכלים או לחץ על הכפתור למטה.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "הדף ריק. גרור רכיב מארגז הכלים או לחץ על הלחצן למטה.",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "גרור ושחרר תמונה לכאן או לחץ על הכפתור למטה ובחר תמונה להעלאה",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "לחץ על הלחצן \"הוסף שאלה\" למטה כדי להתחיל ליצור את הטופס שלך.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "הטופס שלך ריק",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "הטופס שלך ריק",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "גרור רכיב מארגז הכלים או לחץ על הלחצן למטה.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "גרור רכיב מארגז הכלים או לחץ על הלחצן למטה.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "ללא תצוגה מקדימה",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "ללא תצוגה מקדימה",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "הסקר אינו מכיל רכיבים גלויים.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "הסקר אינו מכיל רכיבים גלויים.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "אין מחרוזות לתרגם",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "אין מחרוזות לתרגם",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "הוסף רכיבים לטופס או שנה את מסנן המחרוזות בסרגל הכלים.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "הוסף רכיבים לטופס או שנה את מסנן המחרוזות בסרגל הכלים.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "לחץ על כפתור \"הוסף שאלה\" למטה כדי להוסיף אלמנט חדש לדף.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "לחץ על הלחצן \"הוסף שאלה\" למטה כדי להוסיף אלמנט חדש לחלונית.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "לחץ על הלחצן למטה ובחר תמונה להעלאה",
    // "Choose Image"
    imageChooseImage: "בחר תמונה",
    // "Add {0}"
    addNewTypeQuestion: "הוסף {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[לוגו]",
    // "Item "
    choices_Item: "פריט ",
    // [Auto-translated] "Select a file"
    selectFile: "בחר קובץ",
    // [Auto-translated] "Remove the file"
    removeFile: "הסרת הקובץ",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "הוספת כלל חדש",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "צור כלל כדי להתאים אישית את זרימת הסקר.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "אין כללים לוגיים",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "אין כללים לוגיים",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "צור כלל כדי להתאים אישית את זרימת הסקר.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "צור כלל כדי להתאים אישית את זרימת הסקר.",
      // [Auto-translated] "Show/hide page"
      page_visibilityName: "הצגה/הסתרה של עמוד",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "הפעלה/השבתה של דף",
      // [Auto-translated] "Make page required"
      page_requireName: "הפיכת הדף לנדרש",
      // [Auto-translated] "Show/hide panel"
      panel_visibilityName: "הצגה/הסתרה של החלונית",
      // [Auto-translated] "Enable/disable panel"
      panel_enableName: "הפעלה/השבתה של החלונית",
      // [Auto-translated] "Make panel required"
      panel_requireName: "הפיכת החלונית לחובה",
      // [Auto-translated] "Show/hide question"
      question_visibilityName: "הצג/הסתר שאלה",
      // [Auto-translated] "Enable/disable question"
      question_enableName: "הפעל/השבת את השאלה",
      // [Auto-translated] "Make question required"
      question_requireName: "הפוך את השאלה לנדרשת",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "איפוס ערך שאלה",
      // [Auto-translated] "Set question value"
      question_setValueName: "הגדרת ערך שאלה",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "הצגה/הסתרה של עמודה",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "הפעלה/השבתה של העמודה",
      // [Auto-translated] "Make column required"
      column_requireName: "הפיכת עמודה לנדרשת",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "איפוס ערך עמודה",
      // [Auto-translated] "Set column value"
      column_setValueName: "הגדרת ערך עמודה",
      // [Auto-translated] "Complete survey"
      trigger_completeName: "הסקר המלא",
      // [Auto-translated] "Set answer"
      trigger_setvalueName: "הגדר תשובה",
      // [Auto-translated] "Copy answer"
      trigger_copyvalueName: "העתק תשובה",
      // [Auto-translated] "Skip to question"
      trigger_skipName: "דלג לשאלה",
      // [Auto-translated] "Run expression"
      trigger_runExpressionName: "הפעל ביטוי",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "הגדרת סימון דף \"סקר הושלם\"",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "הפוך את העמוד לגלוי כאשר הביטוי הלוגי מוערך כ- true. אחרת, השאר את הדף בלתי נראה.",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "הפוך את העמוד לגלוי כאשר הביטוי הלוגי מוערך כ- true. אחרת, השאר את החלונית בלתי נראית.",
      // [Auto-translated] "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "הפוך את החלונית וכל הרכיבים שבתוכה לזמינים כאשר הביטוי הלוגי מוערך כ- true. אחרת, השאר אותם מושבתים.",
      // [Auto-translated] "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "הפוך את השאלה לגלויה כאשר הביטוי הלוגי מוערך כנכון. אחרת, שמור את השאלה בלתי נראית.",
      // [Auto-translated] "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "הפוך את השאלה לזמינה כאשר הביטוי הלוגי מוערך כ- true. אחרת, השאר את השאלה מושבתת.",
      // [Auto-translated] "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "השאלה הופכת לנדרשת כאשר הביטוי הלוגי מוערך כנכון.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "כאשר הביטוי הלוגי מוערך כ- true, הסקר מסתיים והמשיב רואה את הדף \"תודה\".",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "כאשר ערכי השאלה המשמשים בביטוי הלוגי משתנים, והביטוי מוערך כ- true, הערך שצוין מוקצה לשאלה שנבחרה.",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "כאשר ערכי השאלה המשמשים בביטוי הלוגי משתנים, והביטוי מוערך כ- true, הערך של השאלה שנבחרה מועתק לשאלה אחרת.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "כאשר הביטוי הלוגי מוערך כ- true, הסקר מתמקד/קופץ לשאלה שנבחרה.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "כאשר הביטוי הלוגי מוערך כ- true, הסקר מעריך ביטוי אחר. לחלופין, ניתן להקצות את התוצאה של הביטוי האחרון כערך לשאלה שנבחרה",
      // [Auto-translated] "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "אם הביטוי הלוגי מוערך כ- true, הדף \"תודה\" מציג את התוכן שצוין.",
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "כלל חדש",
      // [Auto-translated] "make page {0} visible"
      page_visibilityText: "הפיכת {0} הדף לגלויות", // {0} page name
      // [Auto-translated] "make panel {0} visible"
      panel_visibilityText: "הפיכת {0} החלונית לגלויה", // {0} panel name
      // [Auto-translated] "make panel {0} enable"
      panel_enableText: "הפיכת {0} החלונית לזמינה", // {0} panel name
      // [Auto-translated] "make question {0} visible"
      question_visibilityText: "הפוך את {0} השאלה לגלויה", // {0} question name
      // [Auto-translated] "make question {0} enable"
      question_enableText: "הפוך שאלה {0} לזמינה", // {0} question name
      // [Auto-translated] "make question {0} required"
      question_requireText: "יש צורך בשאלה {0}", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "אפס ערך עבור שאלה: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "הקצאת ערך: {1} לשאלה: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "הפוך את {0} העמודות של {1} השאלה לגלויות", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "הפיכת עמודה {0} של שאלה לזמינה {1}", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "הפוך את {0} העמודות של השאלה {1} לנדרש", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "איפוס ערך תא עבור עמודה: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "הקצאת ערך תא: {1} לעמודה: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "ביטוי שתוצאתו תוקצה לשאלת היעד.",
      // [Auto-translated] "Enter a value..."
      calculatedValuePlaceholder: "הכנס ערך...",
      // [Auto-translated] "survey becomes completed"
      trigger_completeText: "הסקר הושלם",
      // [Auto-translated] "set into question: {0} value {1}"
      trigger_setvalueText: "העמידו בסימן שאלה: ערך {0} {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "ערך שאלה ברור: {0}", // {0} question name
      // [Auto-translated] "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "העתק לשאלה: ערך {0} משאלה {1}", // {0} and {1} question names
      // [Auto-translated] "survey skip to the question {0}"
      trigger_skipText: "סקר דלג לשאלה {0}", // {0} question name
      // [Auto-translated] "run expression: '{0}'"
      trigger_runExpressionText1: "ביטוי הפעלה: '{0}'", // {0} the expression
      // [Auto-translated] " and set its result into question: {0}"
      trigger_runExpressionText2: " ולהעמיד את תוצאתו בסימן שאלה: {0}", // {0} question name
      // [Auto-translated] "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "הצג טקסט מותאם אישית עבור הדף \"תודה\".",
      // [Auto-translated] "All Questions"
      showAllQuestions: "כל השאלות",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "כל סוגי הפעולות",
      // [Auto-translated] "Condition(s)"
      conditions: "תנאים(ים)",
      // [Auto-translated] "Action(s)"
      actions: "פעולה(ות)",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "הגדרת פעולות",
      // [Auto-translated] "Delete Action"
      deleteAction: "מחיקת פעולה",
      // [Auto-translated] "Add Action"
      addNewAction: "הוסף פעולה",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "בחר פעולה...",
      // [Auto-translated] "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "ביטוי הלוגיקה ריק או לא חוקי. אנא תקן זאת.",
      // [Auto-translated] "Please fix issues in your action(s)."
      actionInvalid: "אנא תקן בעיות בפעולות שלך.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "כללים לוגיים אינם שלמים",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "לא השלמת חלק מהכללים הלוגיים. אם תעזוב את הכרטיסיה כעת, השינויים יאבדו. האם אתה עדיין רוצה לעזוב את הכרטיסייה מבלי להשלים את השינויים?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "כן",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "לא, אני רוצה להשלים את הכללים"
    }
  },
  // Host application variables
  vp: {
    // [Auto-translated] "Variable preset"
    selectorTitle: "פריסט משתנה",
    // [Auto-translated] "None"
    noPreset: "אין",
    // [Auto-translated] "View variable values"
    view: "הצג ערכי משתנה",
    // [Auto-translated] "Variable values"
    viewTitle: "ערכי משתנים",
    // [Auto-translated] "Manage presets"
    edit: "ניהול פריסטים",
    // [Auto-translated] "Variable Presets"
    editorTitle: "פריסטים משתנים",
    // [Auto-translated] "Preset"
    presetName: "פריסט",
    // [Auto-translated] "Description"
    presetDescription: "תיאור",
    // [Auto-translated] "Add preset"
    addPreset: "הוספת פריסט",
    // [Auto-translated] "New preset"
    newPresetName: "פריסט חדש",
    // [Auto-translated] "Delete preset"
    deletePreset: "מחיקת פריסט",
    // [Auto-translated] "Back"
    back: "חזרה",
    // [Auto-translated] "A preset with this name already exists"
    presetNameIsNotUnique: "כבר קיימת פריסט בשם זה",
    // [Auto-translated] "Enter a preset name"
    presetNameIsEmpty: "הכנס שם מוגדר מראש",
    // [Auto-translated] "Preset"
    listNameColumn: "פריסט",
    // [Auto-translated] "Description"
    listDescriptionColumn: "תיאור"
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "שם החלונית",
      // [Auto-translated] "Panel title"
      title: "כותרת הפאנל",
      // [Auto-translated] "Panel description"
      description: "תיאור הלוח",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "הפוך את החלונית לגלויה אם",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "הפוך את החלונית לנדרשת אם",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "סדר השאלות בתוך הפאנל",
      // [Auto-translated] "Move the panel to page"
      page: "הזזת החלונית לעמוד",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "הצגת החלונית בשורה חדשה",
      // [Auto-translated] "Panel collapse state"
      state: "מצב כיווץ לוח",
      // [Auto-translated] "Inline panel width"
      width: "רוחב החלונית בתוך שורה",
      // [Auto-translated] "Minimum panel width"
      minWidth: "רוחב לוח מינימלי",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "רוחב לוח מרבי",
      // [Auto-translated] "Number this panel"
      showNumber: "מספר חלונית זו"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "רוחב אפקטיבי, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "רוחב כותרת השאלה, פיקסלים"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "שם החלונית",
      // [Auto-translated] "Panel title"
      title: "כותרת הפאנל",
      // [Auto-translated] "Panel description"
      description: "תיאור הלוח",
      // [Auto-translated] "Entry display mode"
      displayMode: "מצב תצוגת כניסה",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "הפוך את החלונית לגלויה אם",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "הפוך את החלונית לנדרשת אם",
      // [Auto-translated] "Move the panel to page"
      page: "העברת החלונית לעמוד",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "הצגת החלונית בשורה חדשה",
      // [Auto-translated] "Panel collapse state"
      state: "מצב כיווץ לוח",
      // [Auto-translated] "Inline panel width"
      width: "רוחב החלונית בתוך שורה",
      // [Auto-translated] "Minimum panel width"
      minWidth: "רוחב לוח מינימלי",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "רוחב לוח מרבי",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "אישור הסרת הכניסה",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "תבנית תיאור הערך",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "תבנית כות��ת ערך",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "טקסט ריק בחלונית",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "תבנית כותרת טאב",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "מציין מיקום של כותרת טאב",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "הפיכת ער�� בודד לגלוי אם",
      // [Auto-translated] "Number the panel"
      showNumber: "מספור החלונית",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "יישור כותרת חלונית",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "יישור תיאור החלונית",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "יישור כותרת שאלה",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "רוחב כותרת השאלה",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "יישור הודעת שגיאה",
      // [Auto-translated] "New entry location"
      newPanelPosition: "מיקום כניסה חדש",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "מניעת תגובות כפולות בשאלה הבאה"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "שם שאלה",
      // [Auto-translated] "Question title"
      title: "כותרת השאלה",
      // [Auto-translated] "Question description"
      description: "תיאור השאלה",
      // [Auto-translated] "Show the title and description"
      showTitle: "הצגת הכותרת והתיאור",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "הפוך את השאלה לגלויה אם",
      // [Auto-translated] "Make the question required if"
      requiredIf: "הפוך את השאלה לנדרשת אם",
      // [Auto-translated] "Move the question to page"
      page: "העברת השאלה לדף",
      // [Auto-translated] "Question box collapse state"
      state: "מצב כיווץ תיבת שאלה",
      // [Auto-translated] "Number this question"
      showNumber: "מספר שאלה זו",
      // [Auto-translated] "Question title alignment"
      titleLocation: "יישור כותרת שאלה",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "יישור תיאור השאלה",
      // [Auto-translated] "Error message alignment"
      errorLocation: "יישור הודעת שגיאה",
      // [Auto-translated] "Increase the inner indent"
      indent: "הגדלת הכניסה הפנימית",
      // [Auto-translated] "Inline question width"
      width: "רוחב שאלה מוטבעת",
      // [Auto-translated] "Minimum question width"
      minWidth: "רוחב שאלה מינימלי",
      // [Auto-translated] "Maximum question width"
      maxWidth: "רוחב שאלה מרבי",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "עדכון ערך שדה קלט"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "רוחב אזור חתימה",
      // [Auto-translated] "Signature area height"
      signatureHeight: "גובה אזור חתימה",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "שינוי גודל אוטומטי של אזור החתימה",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "הצגת מציין מיקום בתוך אזור החתימה",
      // [Auto-translated] "Placeholder text"
      placeholder: "טקסט מציין מיקום",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "טקסט מציין מיקום במצב קריאה בלבד או תצוגה מקדימה",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "הצגת לחצן 'נקה' בתוך אזור החתימה",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "רוחב קו מינימלי",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "רוחב קו מרבי",
      // [Auto-translated] "Stroke color"
      penColor: "צבע קו"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "גובה שדה קלט (בקווים)"
    },
    // "Question numbering"
    showQuestionNumbers: "מספור שאלות",
    // "Question indexing type"
    questionStartIndex: "אינדקס התחלה (מספר או אות)",
    expression: {
      // [Auto-translated] "Expression name"
      name: "שם ביטוי",
      // [Auto-translated] "Expression title"
      title: "כותרת ביטוי",
      // [Auto-translated] "Expression description"
      description: "תיאור ביטוי",
      // [Auto-translated] "Expression"
      expression: "ביטוי"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "ביטוי"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "ביטוי"
    },
    urlconditionitem: {
      // [Auto-translated] "Expression"
      expression: "ביטוי"
    },
    htmlconditionitem: {
      // [Auto-translated] "Expression"
      expression: "ביטוי"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "כותרת הסקר",
      // [Auto-translated] "Survey description"
      description: "תיאור הסקר",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "הפוך את הסקר לקריאה בלבד",
      // [Auto-translated] "Regional formats"
      regionalFormat: "פורמטים אזוריים"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "שם הדף",
      // [Auto-translated] "Page title"
      title: "כותרת הדף",
      // [Auto-translated] "Page description"
      description: "תיאור הדף",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "הפוך את הדף לגלוי אם",
      // [Auto-translated] "Make the page required if"
      requiredIf: "הפוך את הדף לנדרש אם",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "מגבלת זמן להשלמת הדף",
      // [Auto-translated] "Question order on the page"
      questionOrder: "סדר השאלות בדף"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "שם עמודה",
      // [Auto-translated] "Column title"
      title: "כותרת עמודה",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "מניעת תגובות כפולות",
      // [Auto-translated] "Column width"
      width: "רוחב עמודה",
      // [Auto-translated] "Minimum column width"
      minWidth: "רוחב עמודה מינימלי",
      // [Auto-translated] "Input field height (in lines)"
      rows: "גובה שדה קלט (בקווים)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "הפיכת העמודה לגלויה אם",
      // [Auto-translated] "Make the column required if"
      requiredIf: "הפוך את העמודה לנדרשת אם",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "כל אפשרות בעמודה נפרדת"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "ניקוי אחרים באותה שורה"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "שם",
      // [Auto-translated] "Title"
      title: "כותר"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "שמירת ערך מוסווה בתוצאות הסקר"
    },
    regionalformat: {
      // [Auto-translated] "Region"
      locale: "אזור",
      // [Auto-translated] "Date pattern"
      datePattern: "דפוס תאריך",
      // [Auto-translated] "Time pattern"
      timePattern: "תבנית זמן",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "מפריד עשרוני",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "מפריד אלפים",
      // [Auto-translated] "Currency symbol"
      currencySymbol: "סמל מטבע",
      // [Auto-translated] "Currency pattern"
      currencyPattern: "דפוס המטבע"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "תבנית ערך"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "ערך מינימלי",
      // [Auto-translated] "Maximum value"
      max: "ערך מרבי"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "התרת ערכים שליליים",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "מפריד אלפים",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "מפריד עשרוני",
      // [Auto-translated] "Value precision"
      precision: "דיוק ערך",
      // [Auto-translated] "Show trailing zeros"
      showTrailingZeros: "הצגת אפסים עוקבים",
      // [Auto-translated] "Minimum value"
      min: "ערך מינימלי",
      // [Auto-translated] "Maximum value"
      max: "ערך מרבי"
    },
    currencymask: {
      // [Auto-translated] "Currency symbol"
      currencySymbol: "סמל מטבע",
      // [Auto-translated] "Currency pattern"
      currencyPattern: "דפוס המטבע"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "נקה אחרים כאשר בוחרים באפשרות זו",
    // [Auto-translated] "Display both text and value"
    showValue: "הצגת טקסט וערך",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "דרישת המשתמש להזין הערה",
    // "Display area height"
    imageHeight: "גובה התמונה",
    // "Display area width"
    imageWidth: "רוחב התמונה",
    // "Join identifier"
    valueName: "אחסן תשובות בשדה JSON הבא",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "ערך תצוגה המוגדר כברירת מחדל לטקסטים דינמיים",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "יישור תוויות",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "יישור הודעת שגיאה של תא",
    // [Auto-translated] "Enabled"
    enabled: "מופעלת",
    // [Auto-translated] "Disabled"
    disabled: "נכים",
    // [Auto-translated] "Inherit"
    inherit: "לרשת",
    // "Clear"
    clear: "נקה",
    // "Set"
    set: "הגדר",
    // "Change"
    change: "שנה",
    // "Close"
    close: "סגור",
    // "Delete"
    delete: "מחק",
    // "Add New"
    addNew: "הוסף חדש",
    // "Click to add an item..."
    addItem: "לחץ להוספת פריט...",
    // "Click to remove the item..."
    removeItem: "לחץ להסרת הפריט...",
    // "Drag the item"
    dragItem: "גרור את הפריט",
    // [Auto-translated] "Expand nested choices"
    expandNestedChoices: "הרחבת אפשרויות מקוננות",
    // [Auto-translated] "Collapse nested choices"
    collapseNestedChoices: "קריסת בחירות מקוננות",
    // "Edit"
    edit: "ערוך",
    // "Done"
    doneEditing: "סיום",
    // "Value is empty"
    emptyValue: "הערך ריק",
    // "Manual Entry"
    fastEntry: "הזנה ידנית",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "הערך '{0}' אינו ייחודי",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "אנא הגבל את מספר הפריטים מ-{0} ל-{1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "אנא הכנס לפחות {0} פריטים",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "תוכל להזין נתונים בפורמט הבא:\nערך1|טקסט1\nערך2|טקסט2",
    // "Please select the action"
    conditionActionEmpty: "בחר את הפעולה",
    // "Select a question..."
    conditionSelectQuestion: "בחר שאלה...",
    // "Select a page..."
    conditionSelectPage: "בחר עמוד...",
    // "Select a panel..."
    conditionSelectPanel: "בחר פאנל...",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "לחץ על ctrl+space כדי לקבל הצעות להשלמה של הביטוי",
    // "Review before submit"
    showPreviewBeforeComplete: "הצג תצוגה מקדימה לפני השלמת הסקר",
    // "Enabled by a condition"
    overridingPropertyPrefix: "נקבע על ידי ",
    // "Reset"
    resetToDefaultCaption: "איפוס",
    // "Please enter a value"
    propertyIsEmpty: "אנא הכנס ערך",
    // "Please enter a unique value"
    propertyIsNoUnique: "אנא הכנס ערך ייחודי",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "אנא הכנס שם ייחודי",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "אין להשתמש במילים שמורות: \"item\", \"choice\", \"panel\", \"row\".",
    // "You don't have any items yet"
    listIsEmpty: "טרם הוספו פריטים",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "טרם הוספו ברירות בחירה",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "עדיין אין לך עמודות",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "עדיין אין לך עמודות פריסה",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "עדיין אין לך שורות",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "עדיין אין לך כללי אימות",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "עדיין אין לך משתנים מותאמים אישית",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "עדיין אין לך טריגרים",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "עדיין אין לך קישורים",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "עדיין אין לך דפים",
    // "Add new choice"
    "addNew@choices": "הוסף ברירת בחירה",
    // [Auto-translated] "Add new column"
    "addNew@columns": "הוספת עמודה חדשה",
    // [Auto-translated] "Add new row"
    "addNew@rows": "הוספת שורה חדשה",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "הוספת כלל חדש",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "הוספת משתנה חדש",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "הוספת גורם מפעיל חדש",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "הוספת כתובת URL חדשה",
    // [Auto-translated] "Add new page"
    "addNew@pages": "הוספת עמוד חדש",
    // "Value"
    value: "ערך",
    // "Text"
    text: "טקסט",
    // "Image or video file URL"
    imageLink: "קישור לתמונה או וידיאו",
    // "URL"
    url: "כתובת URL של השירות",
    // "Path to data"
    path: "נתיב למידע במקור השירות",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "כתובת URL של שירות אינטרנט",
      // "Get value to store from the following property"
      valueName: "קבל ערכים משדה JSON הבא"
    },
    // "Get value to display from the following property"
    titleName: "קבל טקסטים להצגה משדה JSON הבא",
    // "Get file URLs from the following property"
    imageLinkName: "קבל קישורים לתמונות משדה JSON הבא",
    // "Accept empty response"
    allowEmptyResponse: "אפשר תשובה ריקה",
    // "Survey Title"
    surveyTitlePlaceholder: "כותרת הסקר",
    // "Page {num}"
    pageTitlePlaceholder: "עמוד {num}",
    // [Auto-translated] "Panel Title"
    panelTitlePlaceholder: "כותרת הפאנל",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "דף פתיחה",
    // "Description"
    descriptionPlaceholder: "תיאור",
    // "Description"
    surveyDescriptionPlaceholder: "תיאור הסקר",
    // "Description"
    pageDescriptionPlaceholder: "תיאור העמוד",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "אפשרויות גלישה",
    // "Enable the \"Other\" option"
    showOtherItem: "אפשר אפשרות אחרת",
    // "Rename the \"Other\" option"
    otherText: "טקסט לאפשרות אחרת",
    // "Enable the \"None\" option"
    showNoneItem: "אפשר אפשרות 'אף אחד'",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "הפעל את האפשרות \"סירוב לענות\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "הפעל את האפשרות \"לא יודע\"",
    // "Rename the \"None\" option"
    noneText: "טקסט לאפשרות 'אף אחד'",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "אפשר אפשרות 'בחר הכל'",
    // "Rename the \"Select All\" option"
    selectAllText: "טקסט לאפשרות 'בחר הכל'",
    // "Minimum value for auto-generated items"
    choicesMin: "ערך מינימלי לפריטים שנוצרים אוטומטית",
    // "Maximum value for auto-generated items"
    choicesMax: "ערך מקסימלי לפריטים שנוצרים אוטומטית",
    // "Step value for auto-generated items"
    choicesStep: "צעד לפריטים שנוצרים אוטומטית",
    // "Name"
    name: "שם",
    // "Title"
    title: "כותרת",
    // "Cell input type"
    cellType: "סוג התא",
    // "Column count"
    colCount: "מספר העמודות",
    // "Choice order"
    choicesOrder: "סדר מיון של ברירות הבחירה",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "מתן אפשרות לבחירות מותאמות אישית",
    // [Auto-translated] "\"Create Custom Choice\" command text"
    createCustomChoiceText: "טקסט הפקודה \"Create Custom Choice\"",
    // "Visible"
    visible: "נראה",
    // "Required"
    isRequired: "נדרש",
    // "Mark as required"
    markRequired: "סמן כשדה חובה",
    // "Remove the required mark"
    removeRequiredMark: "הסר את הסימון כשדה חובה",
    // "Require an answer in each row"
    eachRowRequired: "חובה על תשובה בכל השורות",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "מניעת תגובות כפולות בשורות",
    // "Error message for required questions"
    requiredErrorText: "הודעת שגיאה לשדה חובה",
    // "Display the question on a new line"
    startWithNewLine: "הצג את השאלה בשורה חדשה",
    // "Rows"
    rows: "שורות",
    // "Columns"
    cols: "עמודות",
    // "Placeholder text within input field"
    placeholder: "מקום להזנה",
    // "Show preview area"
    showPreview: "הצג אזור תצוגה מקדימה",
    // "Store file content in JSON result as text"
    storeDataAsText: "אחסן תוכן קובץ בתוצאת JSON כטקסט",
    // "Maximum file size (in bytes)"
    maxSize: "גודל הקובץ המרבי (בבתים)",
    // [Auto-translated] "Maximum number of files"
    maxFiles: "מספר מקסימלי של קבצים",
    // "Row count"
    rowCount: "כמות השורות",
    // "Columns layout"
    columnLayout: "סידור העמודות",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "מיקום כפתור הוסף שורה",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "ביצוע חילוף שורות לעמודות",
    // "\"Add Row\" button text"
    addRowText: "טקסט לכפתור הוסף שורה",
    // "\"Remove Row\" button text"
    removeRowText: "טקסט לכפתור הסר שורה",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "תבנית כותרת של שדה קלט",
    // "Minimum rating value"
    rateMin: "ערך מינימלי לדרגה",
    // "Maximum rating value"
    rateMax: "ערך מקסימלי לדרגה",
    // "Step value"
    rateStep: "צעד דרגה",
    // "Minimum value label"
    minRateDescription: "תיאור ערך מינימלי לדרגה",
    // "Maximum value label"
    maxRateDescription: "תיאור ערך מקסימלי לדרגה",
    // "Input type"
    inputType: "סוג הקלט",
    // "Default Answer"
    defaultValue: "תשובת ברירת המחדל",
    // "Default texts"
    cellsDefaultRow: "טקסטים ברירת המחדל",
    // "Maximum character limit"
    maxLength: "אורך מרבי (בתווים)",
    // "and"
    and: "וגם",
    // "or"
    or: "או",
    // "Remove"
    remove: "הסר",
    // "Add Condition"
    addCondition: "הוסף תנאי",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "בחר שאלה להתחלת הגדרת תנאים.",
    // "If"
    if: "אם",
    // "then"
    then: "אז",
    // "Target question"
    setToName: "שאלת יעד",
    // "Question to copy answer from"
    fromName: "שאלה להעתיק ממנה את התשובה",
    // "Question to skip to"
    gotoName: "שאלה לדלג אליה",
    // "Rule is incorrect"
    ruleIsNotSet: "הכלל אינו נקבע",
    // "Add to the survey results"
    includeIntoResult: "כלול בתוצאות הסקר",
    // "Make the title and description visible"
    showTitle: "הצג את הכותרת",
    // "Select a survey language"
    locale: "שפת הסקר",
    // "Select device type"
    simulator: "בחר סוג מכשיר",
    // "Switch to landscape orientation"
    landscapeOrientation: "עבור לתצוגה אופקית",
    // "Switch to portrait orientation"
    portraitOrientation: "עבור לתצוגה אנכית",
    // "Clear hidden question values"
    clearInvisibleValues: "נקה ערכים בלתי נראים",
    // "Limit to one response"
    cookieName: "שם העוגיה",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "שמור תוצאות סקר חלקיות בתהליך",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "אחסן את ערך 'אחר' בשדה נפרד",
    // "Show page titles"
    showPageTitles: "הצג כותרות עמוד",
    // "Show page numbers"
    showPageNumbers: "הצג מספרי עמוד",
    // "\"Previous Page\" button text"
    pagePrevText: "טקסט לכפתור 'עמוד קודם'",
    // "\"Next Page\" button text"
    pageNextText: "טקסט לכפתור 'עמוד הבא'",
    // "\"Complete Survey\" button text"
    completeText: "טקסט לכפתור 'סיום סקר'",
    // "\"Review Answers\" button text"
    previewText: "טקסט לכפתור 'תצוגה מקדימה לתשובות'",
    // "\"Edit Answer\" button text"
    editText: "טקסט לכפתור 'ערוך תשובה'",
    // "\"Start Survey\" button text"
    startSurveyText: "טקסט לכפתור 'התחל סקר'",
    // "Show navigation buttons"
    showNavigationButtons: "מיקום לכפתורי ניווט",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "יישור לחצני ניווט",
    // "Show the \"Previous Page\" button"
    showPrevButton: "הצג את לחצן 'עמוד קודם'",
    // "First page is a start page"
    firstPageIsStartPage: "העמוד הראשון הוא עמוד התחלה",
    // "Show the \"Thank You\" page"
    showCompletePage: "הצג עמוד 'סקר הושלם'",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "עבור אוטומטית לעמוד הבא",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "השלם את הסקר באופן אוטומטי",
    // "Show the progress bar"
    showProgressBar: "מיקום שורת ההתקדמות",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "יישור מד התקדמות",
    // "Question title alignment"
    questionTitleLocation: "מיקום כותרת השאלה",
    // "Question title width"
    questionTitleWidth: "רוחב כותרת השאלה",
    // "Required symbol(s)"
    requiredMark: "סמן נדרש(ים)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "תבנית כותרת השאלה, ברירת המחדל היא: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "מיקום הודעת השגיאה",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "התמקד על השאלה הראשונה בעמוד חדש",
    // "Question order"
    questionOrder: "סדר הרכיבים בעמוד",
    // "Time limit to complete the survey"
    timeLimit: "גבול זמן לסיום הסקר (בשניות)",
    // "Time limit to complete one page"
    timeLimitPerPage: "גבול זמן לסיום עמוד אחד (בשניות)",
    // [Auto-translated] "Use a timer"
    showTimer: "שימוש בטיימר",
    // "Timer alignment"
    timerLocation: "מיקום הטיימר",
    // "Timer mode"
    timerInfoMode: "מצב הטיימר",
    // "Enable entry addition"
    allowAddPanel: "אפשר הוספת פאנלים",
    // "Enable entry removal"
    allowRemovePanel: "אפשר הסרת פאנלים",
    // "\"Add Entry\" button text"
    addPanelText: "טקסט לכפתור 'הוסף פאנל'",
    // "\"Remove Entry\" button text"
    removePanelText: "טקסט לכפתור 'הסר פאנל'",
    // "Show all elements on one page"
    isSinglePage: "הצג את כל הרכיבים בעמוד אחד",
    // "HTML markup"
    html: "קוד HTML",
    // "Answer"
    setValue: "תשובה",
    // "Storage format"
    dataFormat: "פורמט תמונה",
    // "Enable row addition"
    allowAddRows: "אפשר הוספת שורות",
    // "Enable row removal"
    allowRemoveRows: "אפשר הסרת שורות",
    // "Enable row reordering"
    allowRowReorder: "אפשר גרירה ושחרור שורות",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "לא יחול אם אתה מציין את רוחב או גובה התמונה באופן ישיר.",
    // "Minimum display area width"
    minImageWidth: "רוחב תמונה מינימלי",
    // "Maximum display area width"
    maxImageWidth: "רוחב תמונה מקסימלי",
    // "Minimum display area height"
    minImageHeight: "גובה תמונה מינימלי",
    // "Maximum display area height"
    maxImageHeight: "גובה תמונה מקסימלי",
    // "Minimum value"
    minValue: "ערך מינימלי",
    // "Maximum value"
    maxValue: "ערך מקסימלי",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "לא תלוי רישיות",
    // "Minimum length (in characters)"
    minLength: "אורך מינימלי (בתווים)",
    // "Allow digits"
    allowDigits: "אפשר ספרות",
    // "Minimum count"
    minCount: "מינימום כמות",
    // "Maximum count"
    maxCount: "מקסימום כמות",
    // "Regular expression"
    regex: "ביטוי רגולרי",
    surveyvalidator: {
      // [Auto-translated] "Notification message for invalid input"
      text: "הודעת התראה על קלט שגוי",
      // [Auto-translated] "Valid when"
      expression: "תקף כאשר",
      // [Auto-translated] "Notification type"
      notificationType: "סוג הודעה",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "אורך מרבי (בתווים)"
    },
    // "Total row header"
    totalText: "טקסט לשורת סיכום",
    // "Aggregation method"
    totalType: "סוג סיכום",
    // "Total value expression"
    totalExpression: "ביטוי סיכום",
    // "Total value display format"
    totalDisplayStyle: "סגנון תצוגת ערך סיכום",
    // "Currency"
    totalCurrency: "מטבע",
    // "Formatted string"
    totalFormat: "מחרוזת מסוגננת",
    // "Survey logo"
    logo: "לוגו (כתובת URL או מחרוזת base64-מוצפנת)",
    // "Survey layout"
    questionsOnPageMode: "מבנה הסקר",
    // "Restrict answer length"
    maxTextLength: "אורך מקסימלי לתשובה (בתווים)",
    // "Restrict comment length"
    maxCommentLength: "אורך מקסימלי להערות (בתווים)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "גובה אזור הערה (בשורות)",
    // "Auto-expand text areas"
    autoGrowComment: "הרחבה אוטומטית של אזור ההערות כראוי",
    // "Allow users to resize text areas"
    allowResizeComment: "אפשר התאמה ידנית של אזורי טקסט על ידי המשתמש",
    // "Update input field values"
    textUpdateMode: "עדכן את ערך הטקסט של השאלה",
    // [Auto-translated] "Input mask type"
    maskType: "סוג מסיכת קלט",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "קפיצה לתשובה השגויה הראשונה",
    // "Run validation"
    checkErrorsMode: "הפעל את האימות",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "אימות שדות ריקים במיקוד שאבד",
    // "Redirect to an external link after submission"
    navigateToUrl: "נווט לכתובת URL",
    // "Dynamic external link"
    navigateToUrlOnCondition: "כתובת URL דינמית",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "קוד HTML להצגה אם המשתמש כבר מילא את הסקר הזה",
    // "\"Thank You\" page markup"
    completedHtml: "קוד HTML לעמוד הסקר הושלם",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "קוד HTML דינמי לעמוד הסקר הושלם",
    // "Markup to show while survey model is loading"
    loadingHtml: "קוד HTML להצגה בזמן טעינת דגם הסקר",
    // "Comment area text"
    commentText: "טקסט אזור הערות",
    // "Autocomplete type"
    autocomplete: "סוג השלמה אוטומטית",
    // "Label for \"True\""
    labelTrue: "תוית 'נכון'",
    // "Label for \"False\""
    labelFalse: "תוית 'לא נכון'",
    // "Show the Clear button"
    allowClear: "הצג את לחצן הניקוי",
    // [Auto-translated] "Search mode"
    searchMode: "מצב חיפוש",
    // "Display format"
    displayStyle: "סגנון תצוגת ערך",
    // "Formatted string"
    format: "מחרוזת מסוגננת",
    // "Maximum fractional digits"
    maximumFractionDigits: "ספרות עשרוניות מקסימליות",
    // "Minimum fractional digits"
    minimumFractionDigits: "ספרות עשרוניות מינימליות",
    // "Display grouping separators"
    useGrouping: "הצג סימני קבוצה",
    // "Enable multiple file upload"
    allowMultiple: "אפשר קבצים מרובים",
    // "Preview uploaded images"
    allowImagesPreview: "תצוגה מקדימה של תמונות",
    // [Auto-translated] "Accepted file categories"
    acceptedCategories: "קטגוריות קבצים שהתקבלו",
    // "Accepted file types"
    acceptedTypes: "סוגי קבצים מקובלים",
    // "Wait for upload to complete"
    waitForUpload: "המתן להשלמת ההעלאה",
    // "Row details alignment"
    detailPanelMode: "מקום הפאנל המפרט",
    // "Minimum row count"
    minRowCount: "מספר שורות מינימלי",
    // "Maximum row count"
    maxRowCount: "מספר שורות מקסימלי",
    // [Auto-translated] "Row count expression"
    rowCountExpression: "ביטוי ספירת שורות",
    // "Confirm row removal"
    confirmDelete: "אישור מחיקת שורה",
    // "Confirmation message"
    confirmDeleteText: "הודעת אישור",
    // "Initial number of entries"
    panelCount: "מספר פאנלים ראשוני",
    // "Minimum number of entries"
    minPanelCount: "מספר פאנלים מינימלי",
    // "Maximum number of entries"
    maxPanelCount: "מספר פאנלים מקסימלי",
    // [Auto-translated] "Entry count expression"
    panelCountExpression: "ביטוי ספירת כניסות",
    // "Initial entry state"
    panelsState: "מצב הרחבת הפאנל הפנימי",
    // "\"Previous Entry\" button text"
    prevPanelText: "טקסט הרחבת הפאנל הקודם",
    // "\"Next Entry\" button text"
    nextPanelText: "טקסט הרחבת הפאנל הבא",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "מיקום לחצן 'הסר פאנל'",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "הסתר את השאלה אם אין שורות",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "הסתר עמודות אם אין שורות",
    // "Custom rating values"
    rateValues: "ערכי דירוג מותאמים אישית",
    // "Rating count"
    rateCount: "כמות הדירוגים",
    // "Rating configuration"
    autoGenerate: "איך לציין ערכי דירוג?",
    slider: {
      // [Auto-translated] "Min value"
      min: "ערך מינימלי",
      // [Auto-translated] "Max value"
      max: "ערך מקסימלי",
      // [Auto-translated] "Step value"
      step: "ערך שלב",
      // [Auto-translated] "Show scale labels"
      showLabels: "הצגת תוויות קנה מידה",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "הצגת תיאורי כלים",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "אפשר חציית אגודל",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "מספר התוויות שנוצרו באופן אוטומטי",
      // [Auto-translated] "Min value expression"
      minValueExpression: "ביטוי ערך מינימלי",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "ביטוי ערך מקסימלי",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "שינוי קנה מידה של תצורת תוויות",
      // [Auto-translated] "Slider type"
      sliderType: "סוג מחוון",
      // [Auto-translated] "Min range length"
      minRangeLength: "אורך טווח מינימלי",
      // [Auto-translated] "Max range length"
      maxRangeLength: "אורך טווח מקסימלי",
      // [Auto-translated] "Custom labels"
      customLabels: "תוויות מותאמות אישית",
      // [Auto-translated] "Label format"
      labelFormat: "תבנית תווית",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "תבנית תיאור כלי"
    },
    imagemap: {
      // [Auto-translated] "Image URL"
      imageLink: "כתובת התמונה",
      // [Auto-translated] "Areas"
      areas: "אזורים",
      // [Auto-translated] "Allow multiple selections"
      multiSelect: "אפשר בחירות מרובות",
      // [Auto-translated] "Value property name"
      valuePropertyName: "שם נכס ערך",
      // [Auto-translated] "Shape"
      shape: "צורה",
      // [Auto-translated] "Idle fill color"
      idleFillColor: "צבע מילוי סרק",
      // [Auto-translated] "Idle stroke color"
      idleStrokeColor: "צבע קו סרק",
      // [Auto-translated] "Idle stroke width"
      idleStrokeWidth: "רוחב מהלך סרק",
      // [Auto-translated] "Hover fill color"
      hoverFillColor: "צבע מילוי ריחוף",
      // [Auto-translated] "Hover stroke color"
      hoverStrokeColor: "צבע קו ריחוף",
      // [Auto-translated] "Hover stroke width"
      hoverStrokeWidth: "רוחב מהלך ריחוף",
      // [Auto-translated] "Selected fill color"
      selectedFillColor: "צבע מילוי נבחר",
      // [Auto-translated] "Selected stroke color"
      selectedStrokeColor: "צבע קו נבחר",
      // [Auto-translated] "Selected stroke width"
      selectedStrokeWidth: "רוחב קו נבחר",
      // [Auto-translated] "Maximum selected areas"
      maxSelectedAreas: "אזורים נבחרים מקסימום",
      // [Auto-translated] "Minimum selected areas"
      minSelectedAreas: "אזורים נבחרים מינימום"
    },
    imagemaparea: {
      // [Auto-translated] "Value"
      value: "ערך",
      // [Auto-translated] "Shape"
      shape: "צורה",
      // [Auto-translated] "Coordinates"
      coords: "קואורדינטות",
      // [Auto-translated] "Idle fill color"
      idleFillColor: "צבע מילוי סרק",
      // [Auto-translated] "Idle stroke color"
      idleStrokeColor: "צבע קו סרק",
      // [Auto-translated] "Idle stroke width"
      idleStrokeWidth: "רוחב מהלך סרק",
      // [Auto-translated] "Hover fill color"
      hoverFillColor: "צבע מילוי ריחוף",
      // [Auto-translated] "Hover stroke color"
      hoverStrokeColor: "צבע קו ריחוף",
      // [Auto-translated] "Hover stroke width"
      hoverStrokeWidth: "רוחב מהלך ריחוף",
      // [Auto-translated] "Selected fill color"
      selectedFillColor: "צבע מילוי נבחר",
      // [Auto-translated] "Selected stroke color"
      selectedStrokeColor: "צבע קו נבחר",
      // [Auto-translated] "Selected stroke width"
      selectedStrokeWidth: "רוחב קו נבחר"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "גובה תמונה",
      // [Auto-translated] "Image width"
      imageWidth: "רוחב תמונה",
      // [Auto-translated] "Confirm file deletion"
      confirmDelete: "אשר מחיקת קובץ"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "הסתר את השאלה אם אין בה בחירות",
    // "Minimum width"
    minWidth: "רוחב מינימלי (בערכים שמקובלים ב- CSS)",
    // "Maximum width"
    maxWidth: "רוחב מקסימלי (בערכים שמקובלים ב- CSS)",
    // "Width"
    width: "רוחב (בערכים שמקובלים ב- CSS)",
    // "Show column headers"
    showHeader: "הצג כותרות עמודות",
    // "Show horizontal scrollbar"
    horizontalScroll: "הצג את סרגל הגלילה האופקי",
    // "Minimum column width"
    columnMinWidth: "רוחב עמודה מינימלי (בערכים שמקובלים ב- CSS)",
    // "Row header width"
    rowTitleWidth: "רוחב כותרת השורה (בערכים שמקובלים ב- CSS)",
    // "Value to store when \"True\" is selected"
    valueTrue: "ערך 'נכון'",
    // "Value to store when \"False\" is selected"
    valueFalse: "ערך 'לא נכון'",
    // "\"Value is below minimum\" error message"
    minErrorText: "הודעת שגיאה: 'הערך נמוך מהמינימום'",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "הודעת שגיאה: 'הערך חורג מהמקסימום'",
    // [Auto-translated] "\"Value does not match step size\" error message"
    stepErrorText: "הודעת שגיאה \"הערך אינו תואם את גודל הצעד\"",
    // "\"Empty comment\" error message"
    otherErrorText: "הודעת שגיאה: 'תגובה ריקה'",
    // "Error message for duplicate responses"
    keyDuplicationError: "הודעת שגיאה: 'ערך המפתח אינו ייחודי'",
    // "Minimum choices to select"
    minSelectedChoices: "מספר הבחירות המינימלי",
    // "Maximum choices to select"
    maxSelectedChoices: "מספר הבחירות המקסימלי",
    // "Logo width"
    logoWidth: "רוחב הלוגו (בערכים שמקובלים ב- CSS)",
    // "Logo height"
    logoHeight: "גובה הלוגו (בערכים שמקובלים ב- CSS)",
    // "Read-only"
    readOnly: "קריאה בלבד",
    // "Disable the read-only mode if"
    enableIf: "ניתן לעריכה אם",
    // "\"No rows\" message"
    noRowsText: "הודעה: 'אין שורות'",
    // "Separate special choices"
    separateSpecialChoices: "הפרד בחירות מיוחדות (אף אחת, אחר, בחר הכול)",
    // "Copy choices from the following question"
    choicesFromQuestion: "העתק בחירות משאלה זו",
    // "Which choice options to copy"
    choicesFromQuestionMode: "אילו בחירות להעתיק?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "השתמש בערכים משאלת עמודת המטריצה או החלונית הבאה כמזהי בחירה",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "השתמש בערכים מעמודת המטריצה או משאלת החלונית הבאה כטקסטים נבחרים",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "הצגת כותרות עמודים בסרגל ההתקדמות",
    // [Auto-translated] "Display navigation text in the progress bar"
    progressBarShowNavigationText: "הצג טקסט ניווט בסרגל ההתקדמות",
    // [Auto-translated] "Navigation text alignment"
    progressBarNavigationTextLocation: "יישור טקסט בניווט",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "הצגת מספרי עמודים בסרגל ההתקדמות",
    // "Add a comment box"
    showCommentArea: "הצג את אזור התגובה",
    // "Placeholder text for the comment box"
    commentPlaceholder: "טקסט ממלא מקום לאזור התגובה",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "הצג תיאורי דירוג כערכים קצה",
    // "Row order"
    rowOrder: "סדר השורות",
    // "Nested column count"
    columnColCount: "ספירת עמודות מקוננות",
    // "Correct Answer"
    correctAnswer: "תשובה נכונה",
    // "Default Values"
    defaultPanelValue: "ערכים ברירת מחדל",
    // "Cell Texts"
    cells: "טקסטי תאים",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "בחר קובץ או הדבק קישור לקובץ...",
    // "Prevent duplicate responses in the following column"
    keyName: "עמודת מפתח",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "הפוך את האפשרות לגלויה אם",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "הפוך את האפשרות לניתנת לבחירה אם"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "הפיכת השורה לגלויה אם",
      // [Auto-translated] "Make the row editable if"
      enableIf: "הפיכת השורה לניתנת לעריכה אם"
    },
    imageitemvalue: {
      // "Alt text"
      text: "טקסט אלטרנטיבי"
    },
    // "Logo alignment"
    logoPosition: "מיקום הלוגו",
    // [Auto-translated] "Preview mode"
    previewMode: "מצב תצוגה מקדימה",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "הפיכת פריסת רשת לזמינה",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "עמודות רשת",
    // [Auto-translated] "Mask settings"
    maskSettings: "קביעות מסיכה",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "יישור הודעת שגיאה של פרטי שורה",
    // Creator tabs
    tabs: {
      // "General"
      general: "כללי",
      // "HTML Editor"
      html: "עורך HTML",
      // "Columns"
      columns: "עמודות",
      // "Rows"
      rows: "שורות",
      // "Choice Options"
      choices: "בחירות",
      // "Items"
      items: "פריטים",
      // "Visible If"
      visibleIf: "נראה אם",
      // "Editable If"
      enableIf: "ניתן לערוך אם",
      // "Required If"
      requiredIf: "חובה אם",
      // "Rating Values"
      rateValues: "ערכי דירוג",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "הגדרות מחוון",
      // "Choices from a Web Service"
      choicesByUrl: "בחירות משירות RESTful",
      // "Numbering"
      numbering: "מספור",
      // "Validators"
      validators: "אמינות",
      // "Navigation"
      navigation: "ניווט",
      // "Question Settings"
      question: "שאלה",
      // "Pages"
      pages: "עמודים",
      // [Auto-translated] "Regional Formats"
      regionalFormat: "פורמטים אזוריים",
      // "Quiz Mode"
      timer: "שעון/חידון",
      // "Calculated Values"
      calculatedValues: "ערכים מחושבים",
      // "Triggers"
      triggers: "טריגרים",
      // "Title template"
      templateTitle: "תבנית כותרת",
      // "Totals"
      totals: "סכומים",
      // "Conditions"
      logic: "לוגיקה",
      // [Auto-translated] "Input Mask Settings"
      mask: "הגדרות מסיכת קלט",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "פריסת חלונית",
        // [Auto-translated] "Layout"
        question: "פריסה",
        // [Auto-translated] "Layout"
        base: "פריסה"
      },
      // "Data"
      data: "נתונים",
      // "Validation"
      validation: "אימות",
      // "Individual Cell Texts"
      cells: "טקסטי תאים",
      // "\"Thank You\" Page"
      showOnCompleted: "השאלון הושלם",
      // "Logo in the Survey Header"
      logo: "לוגו בכותרת השאלון",
      // "Expression"
      expression: "ביטוי",
      // [Auto-translated] "Question Settings"
      questionSettings: "הגדרות שאלה",
      // "Header"
      header: "כותרת",
      // "Background"
      background: "רקע",
      // "Appearance"
      appearance: "מראה",
      // [Auto-translated] "Accent colors"
      accentColors: "צבעי הדגשה",
      // [Auto-translated] "Surface background"
      surfaceBackground: "רקע פני השטח",
      // [Auto-translated] "Scaling"
      scaling: "שינוי גודל",
      // "Others"
      others: "אחרים"
    },
    // "Items"
    items: "פריטים",
    // "Make choices visible if"
    choicesVisibleIf: "הבחירות יוצגו אם",
    // "Make choices selectable if"
    choicesEnableIf: "ניתן לבחור את האפשרויות אם",
    // "Increase the inner indent"
    innerIndent: "הוסף כניסות פנימיות",
    // "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "קבל ערכי ברירת מחדל מהפאנל האחרון",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "הקלד ביטוי כאן...",
    // "Clear hidden question values"
    clearIfInvisible: "נקה את הערך אם השאלה הופכת חבויה",
    // "Store values in the following property"
    valuePropertyName: "שם מאפיין ערך",
    // "Enable search-as-you-type"
    searchEnabled: "אפשר חיפוש",
    // "Hide selected items"
    hideSelectedItems: "הסתר פריטים נבחרים",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "סגור את התפריט לאחר בחירה",
    // "Vertical alignment within cells"
    verticalAlign: "יישור אנכי",
    // "Alternate row colors"
    alternateRows: "שורות חלופיות",
    // "Make columns visible if"
    columnsVisibleIf: "העמודות יוצגו אם",
    // "Make rows visible if"
    rowsVisibleIf: "השורות יוצגו אם",
    // "Placeholder text for the comment box"
    otherPlaceholder: "מציין מקום לתגובה",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "טקסט מציין מיקום עבור קובץ מקומי",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "טקסט מציין מיקום עבור מצלמה",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "טקסט מציין מיקום עבור קובץ מקומי או מצלמה",
    // "Rating icon"
    rateType: "סוג דירוג",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "לדוגמה: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "לדוגמה: קטגוריות.בדיוני",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "לדוגמה: א)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "לדוגמה: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "לדוגמה: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "לדוגמה: 50%",
    // "auto"
    imageHeight_placeholder: "אוטומטי",
    // "auto"
    imageWidth_placeholder: "אוטומטי",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "לדוגמה: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "ערכת נושא",
      // [Auto-translated] "Question appearance"
      isPanelless: "מראה השאלה",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "רקע ורדיוס פינה",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "רקע ורדיוס פינה",
      // [Auto-translated] "Accent color"
      primaryColor: "צבע הדגשה",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "אטימות פאנל ותיבת שאלות",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "אטימות רכיב קלט",
      // [Auto-translated] "Survey font size"
      fontSize: "גודל גופן סקר",
      // [Auto-translated] "Survey scale factor"
      scale: "גורם קנה המידה של הסקר",
      // [Auto-translated] "Corner radius"
      cornerRadius: "רדיוס פינה",
      // [Auto-translated] "Advanced mode"
      advancedMode: "מצב מתקדם",
      // [Auto-translated] "Title font"
      pageTitle: "גופן כותרת",
      // [Auto-translated] "Description font"
      pageDescription: "גופן תיאור",
      // [Auto-translated] "Title font"
      questionTitle: "גופן כותרת",
      // [Auto-translated] "Description font"
      questionDescription: "גופן תיאור",
      // [Auto-translated] "Font"
      inputContent: "גופן",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "אטימות", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs2-typography-font-family-text": "משפחת גופני הסקר",
      // [Auto-translated] "Background color"
      "--sjs2-color-utility-surface-survey": "צבע רקע",
      // [Auto-translated] "Accent background colors"
      "--sjs2-color-project-brand-600": "צבעי רקע דגש",
      // [Auto-translated] "Accent foreground colors"
      "--sjs2-color-fg-brand-on-primary": "צבעי הדגשה בקדמת התמונה",
      // [Auto-translated] "Error message colors"
      "--sjs2-color-bg-alert-primary": "צבעי הודעות שגיאה",
      // [Auto-translated] "Shadow effects"
      "--sjs2-border-effect-surface-default": "אפקטי צל",
      // [Auto-translated] "Shadow effects"
      "--sjs2-border-effect-component-formbox-default": "אפקטי צל",
      // [Auto-translated] "Colors"
      "--sjs2-color-component-input-default-line": "צבעים"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "נוף",
      // [Auto-translated] "Logo alignment"
      logoPosition: "יישור לוגו",
      // [Auto-translated] "Survey title font"
      surveyTitle: "גופן כותרת סקר",
      // [Auto-translated] "Survey description font"
      surveyDescription: "גופן תיאור סקר",
      // [Auto-translated] "Survey title font"
      headerTitle: "גופן כותרת סקר",
      // [Auto-translated] "Survey description font"
      headerDescription: "גופן תיאור סקר",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "רוחב אזור תוכן",
      // [Auto-translated] "Text width"
      textAreaWidth: "רוחב טקסט",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "צבע רקע",
      // [Auto-translated] "Background image"
      backgroundImage: "תמונת רקע",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "אטימות",
      // [Auto-translated] "Overlap"
      overlapEnabled: "חופפים",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "יישור לוגו",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "יישור כותרת הסקר",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "יישור תיאור הסקר"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "אמת",
    // "false"
    "false": "שקר",
    // "Local file"
    file: "קבצים מקומיים",
    // "Camera"
    camera: "מצלמה",
    // "Local file or Camera"
    "file-camera": "קבצים מקומיים או מצלמה",
    // "Inherit"
    inherit: "ירושה",
    // "Inherit"
    default: "ירושה",
    // "Initial"
    initial: "התחלתי",
    // "Random"
    random: "אקראי",
    // "Collapsed"
    collapsed: "מכווץ",
    // "Expanded"
    expanded: "מורחב",
    // "None"
    none: "ללא",
    // "Ascending"
    asc: "סדר עולה",
    // "Descending"
    desc: "סדר יורד",
    // [Auto-translated] "Selected"
    selected: "שנבחרו",
    // [Auto-translated] "Unselected"
    unselected: "לא נבחר",
    // "decimal"
    decimal: "עשרוני",
    // "currency"
    currency: "מטבע",
    // "percent"
    percent: "אחוזים",
    // "First panel is expanded"
    firstExpanded: "הפאנל הראשון מורחב",
    // "Hide question numbers"
    off: "הסתר מספרי שאלות",
    // "List"
    list: "רשימה",
    // [Auto-translated] "Carousel"
    carousel: "קרוסלה",
    // "Tabs"
    tab: "כרטיסיות",
    // "Horizontal"
    horizontal: "אופקי",
    // "Vertical"
    vertical: "אנכי",
    // "Top"
    top: "עליון",
    // "Bottom"
    bottom: "תחתון",
    // "Top and bottom"
    topBottom: "עליון ותחתון",
    // "Left"
    left: "שמאל",
    // "Right"
    right: "ימין",
    // [Auto-translated] "Center"
    center: "מרכז",
    // [Auto-translated] "Left and right"
    leftRight: "ימין ושמאל",
    // [Auto-translated] "Middle"
    middle: "אמצע",
    // "color"
    color: "צבע",
    // "date"
    date: "תאריך",
    // "datetime"
    datetime: "תאריך ושעה",
    // "datetime-local"
    "datetime-local": "תאריך ושעה מקומיים",
    // "email"
    email: "אימייל",
    // "month"
    month: "חודש",
    // "number"
    number: "מספר",
    // "password"
    password: "סיסמה",
    // "range"
    range: "טווח",
    // "tel"
    tel: "טלפון",
    // "text"
    text: "טקסט",
    // "time"
    time: "שעה",
    // "url"
    url: "קישור",
    // "week"
    week: "שבוע",
    // "Hidden"
    hidden: "מוסתר",
    // [Auto-translated] "Contain"
    contain: "להכיל",
    // [Auto-translated] "Cover"
    cover: "כריכה",
    // [Auto-translated] "Fill"
    fill: "מילוי",
    // [Auto-translated] "Next"
    next: "הבא",
    // [Auto-translated] "Last"
    last: "אחרון",
    // "Upon survey completion"
    onComplete: "כאשר השאלון הושלם",
    // "When question gets hidden"
    onHidden: "כאשר השאלה הוסתרה",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "כאשר השאלה או הפאנל/העמוד שלה מוסתרים",
    clearInvisibleValues: {
      // "Never"
      none: "לעולם"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "אף פעם"
    },
    // [Auto-translated] "Radio buttons"
    radio: "כפתורי רדיו",
    inputType: {
      // "Color"
      color: "צבע",
      // "Date"
      date: "תאריך",
      // "Date and Time"
      "datetime-local": "תאריך ושעה",
      // "Email"
      email: "אימייל",
      // "Month"
      month: "חודש",
      // "Number"
      number: "מספר",
      // "Password"
      password: "סיסמה",
      // "Range"
      range: "טווח",
      // "Phone Number"
      tel: "מספר טלפון",
      // "Text"
      text: "טקסט",
      // "Time"
      time: "שעה",
      // "URL"
      url: "כתובת URL",
      // "Week"
      week: "שבוע"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "ערך יחיד",
      // [Auto-translated] "Range"
      range: "טווח"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "אוטומטי",
      // [Auto-translated] "Always"
      always: "תמיד",
      // [Auto-translated] "Never"
      never: "אף פעם"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "שגיאה",
      // [Auto-translated] "Warning"
      warning: "אזהרה",
      // [Auto-translated] "Informational"
      info: "אינפורמטיבי"
    },
    cameraFacingMode: {
      // [Auto-translated] "Front"
      user: "חזית",
      // [Auto-translated] "Rear"
      environment: "אחורי"
    },
    acceptedCategories: {
      // [Auto-translated] "Images"
      image: "תמונות",
      // [Auto-translated] "Videos"
      video: "סרטונים",
      // [Auto-translated] "Audio"
      audio: "אודיו",
      // [Auto-translated] "Documents"
      document: "מסמכים",
      // [Auto-translated] "Archives"
      archive: "ארכיונים",
      // [Auto-translated] "Custom"
      custom: "מנהג"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "שם מלא",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "קידומת",
      // [Auto-translated] "First Name"
      "given-name": "שם פרטי",
      // [Auto-translated] "Middle Name"
      "additional-name": "שם אמצעי",
      // [Auto-translated] "Last Name"
      "family-name": "שם משפחה",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "סיומת",
      // [Auto-translated] "Nickname"
      nickname: "כינוי",
      // [Auto-translated] "Job Title"
      "organization-title": "תפקיד",
      // [Auto-translated] "User Name"
      username: "שם משתמש",
      // [Auto-translated] "New Password"
      "new-password": "סיסמה חדשה",
      // [Auto-translated] "Current Password"
      "current-password": "סיסמה נוכחית",
      // [Auto-translated] "Organization Name"
      organization: "שם הארגון",
      // [Auto-translated] "Full Street Address"
      "street-address": "כתובת הרחוב המלאה",
      // [Auto-translated] "Address Line 1"
      "address-line1": "כתובת שורה 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "כתובת שורה 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "כתובת שורה 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "כתובת ברמה 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "כתובת ברמה 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "כתובת ברמה 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "כתובת ברמה 1",
      // [Auto-translated] "Country Code"
      country: "קוד מדינה",
      // [Auto-translated] "Country Name"
      "country-name": "שם מדינה",
      // [Auto-translated] "Postal Code"
      "postal-code": "מיקוד",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "שם בעל הכרטיס",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "שם פרטי של בעל הכרטיס",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "שם אמצעי של בעל הכרטיס",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "שם משפחה של בעל הכרטיס",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "מספר כרטיס אשראי",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "תאריך תפוגה",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "חודש תפוגה",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "שנת תפוגה",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "קוד אבטחה של כרטיס",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "סוג כרטיס אשראי",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "מטבע עסקה",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "סכום העסקה",
      // [Auto-translated] "Preferred Language"
      language: "שפה מועדפת",
      // [Auto-translated] "Birthday"
      bday: "יום הולדת",
      // [Auto-translated] "Birthday Day"
      "bday-day": "יום הולדת",
      // [Auto-translated] "Birthday Month"
      "bday-month": "חודש יום הולדת",
      // [Auto-translated] "Birthday Year"
      "bday-year": "שנת יום הולדת",
      // [Auto-translated] "Gender"
      sex: "מין",
      // [Auto-translated] "Website URL"
      url: "כתובת אתר אינטרנט",
      // [Auto-translated] "Profile Photo"
      photo: "תמונת פרופיל",
      // [Auto-translated] "Telephone Number"
      tel: "מספר טלפון",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "קידומת מדינה לטלפון",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "מספר טלפון ארצי",
      // [Auto-translated] "Area Code"
      "tel-area-code": "אזור חיוג",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "מספר טלפון מקומי",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "קידומת טלפון מקומי",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "סיומת טלפון מקומי",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "שלוחת טלפון",
      // "Email Address"
      email: "כתובת דוא\"ל",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "פרוטוקול העברת הודעות מיידיות"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "ללא",
      // [Auto-translated] "Pattern"
      pattern: "תבנית",
      // [Auto-translated] "Numeric"
      numeric: "מספריים",
      // [Auto-translated] "Date and Time"
      datetime: "תאריך ושעה",
      // [Auto-translated] "Currency"
      currency: "מטבע"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "אוטומטי",
      // [Auto-translated] "Left"
      left: "שמאל",
      // [Auto-translated] "Right"
      right: "ימין"
    },
    // "All"
    all: "הכל",
    // "Page"
    page: "עמוד",
    // "Survey"
    survey: "שאלון",
    // "When switching to the next page"
    onNextPage: "כאשר מתבצע מעבר לעמוד הבא",
    // "After an answer is changed"
    onValueChanged: "לאחר שהתשובה השתנתה",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "מבנה מקורי",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "הצג את כל השאלות בעמוד אחד",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "הצגת שאלה בודדת בכל עמוד",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "הצגת שדה קלט יחיד בכל עמוד"
    },
    // [Auto-translated] "Show all questions"
    allQuestions: "הצג את כל השאלות",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "הצג שאלות שנענו בלבד",
    // "Completed pages"
    pages: "עמודים שהושלמו",
    // "Answered questions"
    questions: "שאלות שקיבלו תשובה",
    // "Answered required questions"
    requiredQuestions: "שאלות חובה שקיבלו תשובה",
    // "Valid answers"
    correctQuestions: "תשובות נכונות",
    // "Completed pages (button UI)"
    buttons: "עמודים שהושלמו (ממשק כפתורים)",
    // "Under the input field"
    underInput: "מתחת לקלט",
    // "Under the question title"
    underTitle: "מתחת לכותרת",
    // "On lost focus"
    onBlur: "כאשר מאבד פוקוס",
    // "While typing"
    onTyping: "בזמן הקלדה",
    // "Under the row"
    underRow: "מתחת לשורה",
    // "Under the row, display one section only"
    underRowSingle: "מתחת לשורה, עם פאנל יחיד בלבד",
    // "Auto"
    auto: "אוטומטי",
    timerInfoMode: {
      // "Both"
      combined: "שני הצדדים"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "תלוי בפריסת המטריצה"
    },
    panelsState: {
      // "Locked"
      default: "המשתמשים לא יכולים להרחיב או לכווץ פאנלים",
      // "Collapse all"
      collapsed: "כל הפאנלים מכווצים",
      // "Expand all"
      expanded: "כל הפאנלים מורחבים",
      // [Auto-translated] "First expanded"
      firstExpanded: "הראשון הורחב"
    },
    widthMode: {
      // "Static"
      static: "סטטי",
      // "Responsive"
      responsive: "רספונסיבי"
    },
    contentMode: {
      // "Image"
      image: "תמונה",
      // "Video"
      video: "וידאו",
      // [Auto-translated] "YouTube"
      youtube: "יוטיוב"
    },
    displayMode: {
      // "Buttons"
      buttons: "כפתורים",
      // "Dropdown"
      dropdown: "רשימה נפתחת",
      // [Auto-translated] "Segmented toggle"
      segmented: "מתג מקוטע",
      // [Auto-translated] "Radio buttons"
      radio: "כפתורי רדיו",
      // [Auto-translated] "Checkbox"
      checkbox: "תיבת סימון",
      // [Auto-translated] "Switch"
      switch: "מתג",
      // [Auto-translated] "Custom"
      custom: "מנהג"
    },
    rateColorMode: {
      // "Default"
      default: "ברירת מחדל",
      // [Auto-translated] "Scale"
      scale: "סולם"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "מונוכרום",
      // [Auto-translated] "Colored"
      colored: "צבעוניים"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "יצירה אוטומטית",
      // "Manual"
      "false": "הזנה ידנית"
    },
    rateType: {
      // "Labels"
      labels: "תווי ניקוד",
      // "Stars"
      stars: "כוכבים",
      // "Smileys"
      smileys: "סמיילים"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "נעול"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "מספור אוטומטי",
      // [Auto-translated] "Auto-numbering"
      on: "מספור אוטומטי",
      // [Auto-translated] "Reset on each page"
      onPage: "איפוס בכל עמוד",
      // [Auto-translated] "Reset on each panel"
      onpanel: "איפוס בכל חלונית",
      // [Auto-translated] "Recursive numbering"
      recursive: "מספור רקורסיבי",
      // [Auto-translated] "No numbering"
      off: "ללא מספור"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "תחת כותרת השאלה",
      // [Auto-translated] "Under the input field"
      underInput: "מתחת לשדה הקלט"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "לצד אפשרויות בחירה",
      // [Auto-translated] "Above choices"
      vertical: "אפשרויות מעל"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "עשרוני",
      // [Auto-translated] "Currency"
      currency: "מטבע",
      // [Auto-translated] "Percentage"
      percent: "אחוז",
      // [Auto-translated] "Date"
      date: "תמר"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "עשרוני",
      // [Auto-translated] "Currency"
      currency: "מטבע",
      // [Auto-translated] "Percentage"
      percent: "אחוז",
      // [Auto-translated] "Date"
      date: "תמר"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "מקורי"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "מקורי"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "סביבון",
      // [Auto-translated] "Bottom"
      bottom: "ישבן",
      // [Auto-translated] "Top and bottom"
      topbottom: "עליון ותחתון",
      // [Auto-translated] "Above the header"
      aboveheader: "מעל הכותרת העליונה",
      // [Auto-translated] "Below the header"
      belowheader: "מתחת לכותרת העליונה",
      // [Auto-translated] "Hidden"
      off: "מוסתרים"
    },
    // [Auto-translated] "Sum"
    sum: "סכום",
    // [Auto-translated] "Count"
    count: "מנה",
    // [Auto-translated] "Min"
    min: "דקות",
    // [Auto-translated] "Max"
    max: "מקס",
    // [Auto-translated] "Avg"
    avg: "ממוצע",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "מכיל",
      // [Auto-translated] "Starts with"
      startsWith: "מתחיל ב"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "אוטומטי",
      // [Auto-translated] "Cover"
      cover: "כריכה",
      // [Auto-translated] "Contain"
      contain: "להכיל",
      // [Auto-translated] "Stretch"
      fill: "מתיחה",
      // [Auto-translated] "Tile"
      tile: "אריח"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "קבוע",
      // [Auto-translated] "Scroll"
      scroll: "לגלול"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "בסיסי",
      // [Auto-translated] "Advanced"
      advanced: "מתקדמים"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "זהה לסקר",
      // [Auto-translated] "Same as container"
      container: "זהה למיכל"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "ללא",
      // [Auto-translated] "Accent color"
      accentColor: "צבע הדגשה",
      // [Auto-translated] "Custom"
      custom: "מנהג"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "אור",
      // [Auto-translated] "Dark"
      dark: "חשוך"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "ברירת מחדל",
      // [Auto-translated] "Without Panels"
      "true": "ללא פאנלים"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "זהה לסקר",
      // [Auto-translated] "Same as container"
      container: "זהה למיכל"
    }
  },
  // Regions of the "Regional Formats" category. Unlike survey languages, a region can be
  regionLocales: {
    // [Auto-translated] "Arabic"
    ar: "ערבית",
    // [Auto-translated] "Bulgarian"
    bg: "בולגרית",
    // [Auto-translated] "Catalan"
    ca: "קטלאנית",
    // [Auto-translated] "Czech"
    cs: "צ'כית",
    // [Auto-translated] "Welsh"
    cy: "וולשית",
    // [Auto-translated] "Danish"
    da: "דנית",
    // [Auto-translated] "German"
    de: "גרמנית",
    // [Auto-translated] "Greek"
    el: "יוונית",
    // [Auto-translated] "English"
    en: "אנגלית",
    // [Auto-translated] "English (Australia)"
    "en-AU": "אנגלית (אוסטרליה)",
    // [Auto-translated] "English (Canada)"
    "en-CA": "אנגלית (קנדה)",
    // [Auto-translated] "English (United Kingdom)"
    "en-GB": "אנגלית (הממלכה המאוחדת)",
    // [Auto-translated] "English (Ireland)"
    "en-IE": "אנגלית (אירלנד)",
    // [Auto-translated] "English (India)"
    "en-IN": "אנגלית (הודו)",
    // [Auto-translated] "English (New Zealand)"
    "en-NZ": "אנגלית (ניו זילנד)",
    // [Auto-translated] "English (South Africa)"
    "en-ZA": "אנגלית (דרום אפריקה)",
    // [Auto-translated] "Spanish"
    es: "ספרדית",
    // [Auto-translated] "Estonian"
    et: "אסטונית",
    // [Auto-translated] "Basque"
    eu: "בסקית",
    // [Auto-translated] "Persian"
    fa: "פרסית",
    // [Auto-translated] "Finnish"
    fi: "פינית",
    // [Auto-translated] "Filipino"
    fil: "פיליפינית",
    // [Auto-translated] "French"
    fr: "צרפתית",
    // [Auto-translated] "French (Canada)"
    "fr-CA": "צרפתית (קנדה)",
    // [Auto-translated] "French (Switzerland)"
    "fr-CH": "צרפתית (שווייץ)",
    // [Auto-translated] "Hebrew"
    he: "עברית",
    // [Auto-translated] "Hindi"
    hi: "הינדי",
    // [Auto-translated] "Croatian"
    hr: "קרואטית",
    // [Auto-translated] "Haitian Creole"
    ht: "קריאולית האיטית",
    // [Auto-translated] "Hungarian"
    hu: "הונגרית",
    // [Auto-translated] "Indonesian"
    id: "אינדונזי",
    // [Auto-translated] "Icelandic"
    is: "איסלנדית",
    // [Auto-translated] "Italian"
    it: "איטלקית",
    // [Auto-translated] "Japanese"
    ja: "יפנית",
    // [Auto-translated] "Georgian"
    ka: "גאורגית",
    // [Auto-translated] "Kazakh"
    kk: "קזחית",
    // [Auto-translated] "Korean"
    ko: "קוריאנית",
    // [Auto-translated] "Lithuanian"
    lt: "ליטאית",
    // [Auto-translated] "Latvian"
    lv: "לטבית",
    // [Auto-translated] "Macedonian"
    mk: "מקדוני",
    // [Auto-translated] "Burmese"
    mm: "בורמזית",
    // [Auto-translated] "Malay"
    ms: "מלאית",
    // [Auto-translated] "Dutch"
    nl: "הולנדי",
    // [Auto-translated] "Dutch (Belgium)"
    "nl-BE": "הולנדית (בלגיה)",
    // [Auto-translated] "Norwegian"
    no: "נורווגית",
    // [Auto-translated] "Polish"
    pl: "פולנית",
    // [Auto-translated] "Portuguese"
    pt: "פורטוגזית",
    // [Auto-translated] "Portuguese (Brazil)"
    "pt-BR": "פורטוגזית (ברזיל)",
    // [Auto-translated] "Romanian"
    ro: "רומני",
    // [Auto-translated] "Russian"
    ru: "רוסית",
    // [Auto-translated] "Slovak"
    sk: "סלובקית",
    // [Auto-translated] "Slovenian"
    sl: "סלובנית",
    // [Auto-translated] "Serbian"
    sr: "סרבי",
    // [Auto-translated] "Swedish"
    sv: "שוודית",
    // [Auto-translated] "Swahili"
    sw: "סווהילית",
    // [Auto-translated] "Telugu"
    tel: "טלוגו",
    // [Auto-translated] "Tajik"
    tg: "טג'יקית",
    // [Auto-translated] "Thai"
    th: "תאילנדי",
    // [Auto-translated] "Turkish"
    tr: "טורקית",
    // [Auto-translated] "Ukrainian"
    uk: "אוקראינית",
    // [Auto-translated] "Urdu"
    ur: "אורדו",
    // [Auto-translated] "Vietnamese"
    vi: "וייטנאמים",
    // [Auto-translated] "Chinese"
    zh: "סינית",
    // [Auto-translated] "Chinese (Simplified)"
    "zh-CN": "סינית (מפושטת)",
    // [Auto-translated] "Chinese (Traditional)"
    "zh-TW": "סינית (מסורתית)"
  },
  // Operators
  op: {
    // "Empty"
    empty: "ריק",
    // "Not empty"
    notempty: "לא ריק",
    // "Equals"
    equal: "שווה ל",
    // "Does not equal"
    notequal: "אינו שווה ל",
    // "Contains"
    contains: "מכיל",
    // "Does not contain"
    notcontains: "אינו מכיל",
    // "Any of"
    anyof: "כל אחד מתוך",
    // [Auto-translated] "None of"
    noneof: "אף אחד מזה",
    // "All of"
    allof: "כולם מתוך",
    // "Greater than"
    greater: "גדול מ",
    // "Less than"
    less: "קטן מ",
    // "Greater than or equal to"
    greaterorequal: "גדול או שווה ל",
    // "Less than or equal to"
    lessorequal: "קטן או שווה ל",
    // "and"
    and: "וגם",
    // "or"
    or: "או"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "בחר את העמוד לבדיקה",
    // "Show invisible elements"
    showInvisibleElements: "הצג רכיבים בלתי נראים",
    // "Hide invisible elements"
    hideInvisibleElements: "הסתר רכיבים בלתי נראים",
    // [Auto-translated] "Previous"
    prevPage: "הקודמת",
    // [Auto-translated] "Next"
    nextPage: "הבא"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "מספר תשובות",
    // "Email"
    emailvalidator: "אימייל",
    // "Expression"
    expressionvalidator: "ביטוי",
    // "Number"
    numericvalidator: "מספר",
    // "Regex"
    regexvalidator: "ביטוי רגולרי",
    // "Text"
    textvalidator: "טקסט"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "השלם את הסקר",
    // "Set answer"
    setvaluetrigger: "קבע ערך",
    // "Copy answer"
    copyvaluetrigger: "העתק ערך",
    // "Skip to question"
    skiptrigger: "דלג לשאלה",
    // "Run expression"
    runexpressiontrigger: "הפעל ביטוי",
    // "change visibility (deprecated)"
    visibletrigger: "שנה נראות (לא מומלץ)"
  },
  peplaceholder: {
    regionalformat: {
      // [Auto-translated] "Same as survey language"
      locale: "אותו דבר כמו שפת הסקר"
    },
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "לדוגמה: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "לדוגמה: mm/dd/yyyy HH:MM:ss"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "לדוגמה: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "לדוגמה: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "לדוגמה: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "מזהה חלונית שאינו גלוי למשיבים.",
      // [Auto-translated] "Type a panel subtitle."
      description: "הקלד כותרת משנה בחלונית.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "השתמשו בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את תצוגת החלונית.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "השתמשו בסמל מטה הקסם כדי להגדיר כלל מותנה שמשבית את מצב הקריאה בלבד של החלונית.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "חל על כל השאלות בפאנל זה. כאשר הוא מוגדר ל\"מוסתר\", הוא גם מסתיר תיאורי שאלות. אם ברצונך לעקוף הגדרה זו, הגדר כללי יישור כותרות עבור שאלות בודדות. האפשרות \"קבל בירושה\" מחילה את ההגדרה ברמת הדף (אם מוגדרת) או ברמת הסקר (\"עליון\" כברירת מחדל). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "הגדרת רוחב עקבי לכותרות שאלות כאשר הן מיושרות משמאל לתיבות השאלות. מקבל ערכי CSS (px, %, in, pt וכו').",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "קובע את המיקום של הודעת שגיאה ביחס לכל השאלות בחלונית. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "שומר על הסדר המקורי של השאלות או מסדר אותן באופן אקראי. האפשרות \"קבל בירושה\" מחילה את ההגדרה ברמת הדף (אם מוגדרת) או ברמת הסקר.",
      // "Repositions the panel to the end of a selected page."
      page: "מיקום מחדש של החלונית לסוף עמוד שנבחר.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "מוסיף רווח או שוליים בין תוכן החלונית לגבול השמאלי של תיבת החלונית.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "בטל את הבחירה כדי להציג את החלונית בשורה אחת עם השאלה או החלונית הקודמת. ההגדרה אינה חלה אם החלונית היא הרכיב הראשון בטופס.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "בחר מתוך: \"מורחב\" - הלוח מוצג במלואו וניתן לכווץ; \"מכווץ\" - הלוח מציג רק את הכותרת והתיאור וניתן להרחיבו; \"נעול\" - הלוח מוצג במלואו ולא ניתן לכווץ.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "מגדיר את רוחב החלונית ביחס לרכיבי סקר אחרים באותה שורה. מקבל ערכי CSS (px, %, in, pt וכדומה).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "מקצה מספרים לשאלות המקוננות בלוח זה.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "מציין כמה עמודות תפרוס חלונית זו בפריסת הרשת.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "טבלה זו מאפשרת להגדיר כל עמודת רשת בחלונית. הוא מגדיר באופן אוטומטי את אחוז הרוחב עבור כל עמודה בהתבסס על המספר המרבי של רכיבים בשורה. כדי להתאים אישית את פריסת הרשת, התאם ערכים אלה באופן ידני והגדר את רוחב הכותרת עבור כל השאלות בכל עמודה."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "מזהה חלונית שאינו גלוי למשיבים.",
      // "Type a panel subtitle."
      description: "הקלד כותרת משנה של חלונית.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "השתמשו בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את תצוגת החלונית.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "השתמשו בסמל מטה הקסם כדי להגדיר כלל מותנה שמשבית את מצב הקריאה בלבד של החלונית.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "חל על כל השאלות בפאנל זה. אם ברצונך לעקוף הגדרה זו, הגדר כללי יישור כותרת עבור שאלות בודדות. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "מגדיר רוחב עקבי לכותרות השאלות כשהן מיושרות לשמאל של תיבות השאלה שלהן. מקבל ערכי CSS (px, %, in, pt וכדומה).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "קובע את המיקום של הודעת שגיאה ביחס לכל השאלות בחלונית. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר.",
      // "Repositions the panel to the end of a selected page."
      page: "מיקום מחדש של החלונית לסוף עמוד שנבחר.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "מוסיף רווח או שוליים בין תוכן החלונית לגבול השמאלי של תיבת החלונית.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "בטל את הבחירה כדי להציג את החלונית בשורה אחת עם השאלה או החלונית הקודמת. ההגדרה אינה חלה אם החלונית היא הרכיב הראשון בטופס.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "בחר מתוך: \"מורחב\" - הלוח מוצג במלואו וניתן לכווץ; \"מכווץ\" - הלוח מציג רק את הכותרת והתיאור וניתן להרחיבו; \"נעול\" - הלוח מוצג במלואו ולא ניתן לכווץ.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "קובע את רוחב החלונית ביחס לרכיבי סקר אחרים באותה שורה. מקבל ערכי CSS (px, %, in, pt וכו').",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "הקלד תבנית לכותרות חלוניות דינמיות. השתמש ב- {panelIndex} למיקום הכללי של החלונית וב- {visiblePanelIndex} לסדר שלה בין חלוניות גלויות. הוסף מצייני מיקום אלה לתבנית כדי להוסיף מספור אוטומטי.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "הקלד תבנית עבור כותרות כרטיסיות. השתמש ב- {panelIndex} למיקום הכללי של חלונית וב- {visiblePanelIndex} לסדר שלה בין חלוניות גלויות. הוסף מצייני מיקום אלה לתבנית כדי להוסיף מספור אוטומטי.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "טקסט נסיגה עבור כותרות טאבים שחל כאשר תבנית כותרת הטאב אינה מפיקה ערך בעל משמעות.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "קביעה זו מאפשרת לשלוט בתצוגה של חלוניות בודדות בחלונית הדינמית. השתמש במציין המיקום '{panel}' כדי להפנות לחלונית הנוכחית בביטוי שלך.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "הגדרה זו עוברת בירושה אוטומטית לכל השאלות בחלונית זו. אם ברצונך לעקוף הגדרה זו, הגדר כללי יישור כותרת עבור שאלות בודדות. האפשרות \"הירושה\" מחילה את ההגדרה ברמת הדף (אם הוגדרה) או ברמת הסקר (\"למעלה\" כברירת מחדל).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "האפשרות \"הירושה\" מחילה את ההגדרה ברמת העמוד (אם הוגדרה) או ברמת הסקר (\"תחת כותרת החלונית\" כברירת מחדל).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "מגדיר את המיקום של חלונית חדשה שנוספה. כברירת מחדל, חלוניות חדשות מתווספות לסוף. בחר \"הבא\" כדי להוסיף חלונית חדשה אחרי הנוכחית.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "שכפול תשובות מהערך האחרון והקצאתן לערך הבא שנוסף.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "הפנה לשם שאלה כדי לדרוש מהמשתמש לספק תשובה ייחודית לשאלה זו בכל חלונית.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "מפעיל בקשת אישור לפני הסרת ערך.",
      // [Auto-translated] "Specify an expression that calculates the number of entries. This expression overrides the \"Initial number of entries\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum number of entries\" and \"Maximum number of entries\" settings. While this expression is set, respondents cannot add or remove entries manually."
      panelCountExpression: "יש לציין ביטוי שמחשב את מספר הערכים. ביטוי זה גובר על הגדרת \"מספר הרשומות ההתחלתי\" ומוערך מחדש בכל פעם שהערכים אליהם מתייחס משתנים. התוצאה מוגבלת על ידי הגדרות \"מספר מינימלי של רשומות\" ו\"מספר מקסימלי של כניסות\". בעוד שהביטוי הזה מוגדר, המשיבים אינם יכולים להוסיף או להסיר רשומות ידנית.",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "מקצה מספרים לשאלות המקוננות בחלונית הדינמית."
    },
    matrixdynamic: {
      // [Auto-translated] "Specify an expression that calculates the number of rows. This expression overrides the \"Row count\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum row count\" and \"Maximum row count\" settings. While this expression is set, respondents cannot add or remove rows manually."
      rowCountExpression: "ציין ביטוי שמחשב את מספר השורות. ביטוי זה מחליף את הגדרת \"ספירת שורות\" ומוערך מחדש בכל פעם שהערכים אליהם הוא מתייחס משתנים. התוצאה מוגבלת על ידי הגדרות \"מספר השורות המינימלי\" ו\"מספר השורות המקסימלי\". בזמן שהביטוי מוגדר, המשיבים אינם יכולים להוסיף או להסיר שורות ידנית.",
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "מפעיל בקשת אישור לפני הסרת שורה.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "מרחיב אוטומטית את מקטע הפירוט בעת הוספת שורה חדשה למטריצה."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "משכפל תשובות מהשורה האחרונה ומקצה אותן לשורה הדינמית הבאה שנוספה.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "הגדרה זו מאפשרת לך להקצות ערך ברירת מחדל לתשובה בהתבסס על ביטוי. הביטוי יכול לכלול חישובים בסיסיים - '{q1_id} + {q2_id}', ביטויים בוליאניים, כגון '{age} > 60', ופונקציות: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו'. הערך שנקבע על-ידי ביטוי זה משמש כערך ברירת המחדל הראשוני שניתן לעקוף באמצעות קלט ידני של משיב.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע מתי הקלט של המשיב יאופס לערך בהתבסס על \"ביטוי ערך ברירת מחדל\" או \"הגדר ביטוי ערך\" או על הערך \"תשובת ברירת מחדל\" (אם אחד מהם מוגדר).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע מתי להפעיל את \"Set value expression\" ולהקצות באופן דינמי את הערך המתקבל כתגובה.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "ציין ביטוי המגדיר את הערך שיש להגדיר כשהתנאים בכלל \"הגדר ערך אם\" מתקיימים. הביטוי יכול לכלול חישובים בסיסיים - '{q1_id} + {q2_id}', ביטויים בוליאניים, כגון '{age} > 60', ופונקציות: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו'. הערך שנקבע על ידי ביטוי זה ניתן לדריסת קלט ידני של המשיב.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "יוצר הסקר מאפשר לך להתאים באופן ידני את רוחב השורה של רכיבי טופס כדי לשלוט בפריסה. אם פעולה זו אינה מפיקה את התוצאה הרצויה, ניתן להפעיל את פריסת הרשת, הבונה רכיבי טופס באמצעות מערכת מבוססת עמודות. כדי להגדיר עמודות פריסה, בחר עמוד או חלונית והשתמש בטבלה \"הגדרות שאלה\" → \"עמודות רשת\". כדי להתאים את מספר העמודות ששאלה משתרעת, בחר אותה והגדר את הערך הרצוי בשדה \"פריסה\" → \"טווח עמודות\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "מזהה שאלה שאינו גלוי למשיבים.",
      // "Type a question subtitle."
      description: "הקלד כותרת משנה של שאלה.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע את נראות השאלה.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי שמשבית את מצב הקריאה בלבד עבור השאלה.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע קידום או שליחה של סקר, אלא אם כן השאלה קיבלה תשובה.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "בטל את הבחירה כדי להציג את השאלה בשורה אחת עם השאלה או החלונית הקודמת. ההגדרה אינה חלה אם השאלה היא הרכיב הראשון בטופס.",
      // "Repositions the question to the end of a selected page."
      page: "מיקום מחדש של השאלה לסוף עמוד שנבחר.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "בחר מתוך: \"מורחב\" - תיבת השאלה מוצגת במלואה וניתן לכווץ אותה; \"מכווץ\" - תיבת השאלה מציגה רק את הכותרת והתיאור וניתן להרחיבה; \"נעול\" - תיבת השאלה מוצגת במלואה ולא ניתן לכווץ אותה.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "דורס כללי יישור כותרות שהוגדרו ברמת חלונית, עמוד או סקר. האפשרות \"ירושה\" מחילה הגדרות ברמה גבוהה יותר (אם הוגדרה) או הגדרה ברמת הסקר (\"עליון\" כברירת מחדל).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"תחת כותרת השאלה\" כברירת מחדל).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"למעלה\" כברירת מחדל).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "מוסיף רווח או שוליים בין תוכן השאלה לבין הגבול השמאלי של תיבת השאלה.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "קובע את רוחב השאלה ביחס לרכיבי סקר אחרים באותה שורה. מקבל ערכי CSS (px, %, in, pt וכו').",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "בחר מתוך: \"על מיקוד אבוד\" - הערך מתעדכן כאשר שדה הקלט מאבד את המיקוד; \"בעת הקלדה\" - הערך מתעדכן בזמן אמת, כאשר המשתמשים מקלידים. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"מיקוד אבוד\" כברירת מחדל).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "באפשרותך להשתמש בכל שירות אינטרנט כמקור נתונים לשאלות אמריקאיות. כדי לאכלס ערכי בחירה, הזן את כתובת ה- URL של השירות המספק את הנתונים.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "פעולת השוואה המשמשת לסינון הרשימה הנפתחת.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "טקסטים ארוכים באפשרויות בחירה ייצרו באופן אוטומטי מעברי שורה שיתאימו לתפריט הנפתח. בטל את הבחירה אם ברצונך שהטקסטים ייחתכו.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "מציין כמה עמודות שאלה זו משתרעת בתוך פריסת הרשת."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "השתמש בסמל שרביט הקסמים כדי להגדיר מתי ערך השאלה נחשב חוקי.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "שגיאות חוסמות את ההתקדמות עד לפתרון. אזהרות מדגישות בעיות אך מאפשרות להמשיך. הערות מידע מציעות הקשר נוסף או הדרכה ניטרלית. בעת שימוש באזהרות או הערות מידע, אנו ממליצים להפעיל אימות מיידי: \"סקר\" → \"אימות\" → \"הפעל אימות\" →\"לאחר שינוי תשובה\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "קובע את רוחב אזור החתימה המוצג ואת התמונה שתיווצר.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "קובע את גובה אזור החתימה המוצג ואת התמונה שתיווצר.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "בחר אם ברצונך שאזור החתימה ימלא את כל השטח הזמין בתיבת השאלה תוך שמירה על יחס הרוחב-גובה המוגדר כברירת מחדל של 3:2. כאשר מוגדרים ערכי רוחב וגובה מותאמים אישית, ההגדרה תשמור על יחס הרוחב-גובה של ממדים אלה."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "מציין את גובה התצוגה של תמונות שהועלו בתצוגה המקדימה ואת הגובה בפועל של תמונות שצולמו במצלמה. במצב העלאת קובץ יחיד, גובה התצוגה מוגבל על ידי אזור התצוגה המקדימה; במצב העלאת קבצים מרובים, הוא מוגבל על ידי אזור התמונות הממוזערות.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "מציין את רוחב התצוגה של תמונות שהועלו בתצוגה המקדימה ואת הרוחב בפועל של תמונות שצולמו במצלמה. במצב העלאת קובץ יחיד, רוחב התצוגה מוגבל על ידי אזור התצוגה המקדימה; במצב העלאת קבצים מרובים, הוא מוגבל על ידי אזור התמונות הממוזערות.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "מציג תצוגות מקדימות של תמונות ממוזערות עבור קבצים שהועלו במידת האפשר. בטל את הבחירה אם ברצונך להציג סמלי קבצים במקום זאת.",
      // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
      confirmDelete: "מפעיל הודעה שמבקשת לאשר את מחיקת הקבצים."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "האפשרות \"אוטומטי\" קובעת אוטומטית את המצב המתאים לתצוגה - תמונה, וידאו או YouTube - בהתבסס על כתובת האתר המקורית שסופקה."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "דורס את ערכי הגובה המינימליים והמרביים.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "דורס את ערכי הרוחב המינימליים והמרביים.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"ערך\" משמש כמזהה פריט המשמש בכללים מותנים; \"טקסט\" מוצג למשיבים.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "בחר בין \"תמונה\" ו\"וידאו\" כדי להגדיר את מצב התוכן של בורר המדיה. אם נבחרה האפשרות \"תמונה\", ודא שכל האפשרויות שסופקו הן קובצי תמונה בתבניות הבאות: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. באופן דומה, אם נבחר \"וידאו\", ודא שכל האפשרויות הן קישורים ישירים לקבצי וידאו בפורמטים הבאים: MP4, MOV, WMV, FLV, AVI, MKV. שים לב שקישורי YouTube אינם נתמכים עבור אפשרויות וידאו."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "מגדיר את מספר השורות המוצגות בשדה הקלט. אם הקלט תופס יותר שורות, פס הגלילה יופיע."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "בחר אם ברצונך למנוע מהמשיבים למלא את הסקר שלך.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "מגדיר את המיקום של מד ההתקדמות. הערך \"אוטומטי\" מציג את מד ההתקדמות מעל או מתחת לכותרת הסקר."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "מזהה עמודה שאינו גלוי למשיבים.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "כאשר אפשרות זו זמינה עבור עמודה, המשיב נדרש לספק תשובה ייחודית לכל שאלה בעמודה זו.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "מגדיר את מספר השורות המוצגות בשדה הקלט. אם הקלט תופס שורות נוספות, פס הגלילה יופיע.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את נראות העמודה.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי שמשבית את מצב הקריאה בלבד עבור העמודה.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "כשבוחרים באפשרות זו, יוצר עמודה נפרדת לכל אחת מאפשרויות הבחירה.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "סידור אפשרויות בחירה בפריסה מרובת עמודות. כאשר האפשרויות מוגדרות ל- 0, האפשרויות מוצגות בשורה אחת. כאשר הוא מוגדר ל- -1, הערך בפועל עובר בירושה מהמאפיין \"ספירת עמודות מקוננות\" של מטריצת האב."
    },
    slider: {
      // "The lowest number that users can select."
      min: "המספר הנמוך ביותר שמשתמשים יכולים לבחור.",
      // "The highest number that users can select."
      max: "המספר הגבוה ביותר שמשתמשים יכולים לבחור.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "המרווח בין ערכי קנה המידה הניתנים לבחירה. לדוגמה, שלב של 5 יאפשר למשתמשים לבחור 0, 5, 10 וכו'.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "המרחק המינימלי בין אגודלי המחוון שמשתמש יכול להגדיר.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "המרחק המרבי בין אגודלי המחוון שמשתמש יכול להגדיר.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "מציין כמה תוויות קנה מידה יש ליצור. ערך של -1 פירושו שהמספר מחושב באופן אוטומטי בהתבסס על ערך המינימום והערך המקסימלי.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "השתמש ב-'{0}' כמציין מיקום עבור הערך בפועל.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "מאפשר לך להגדיר תוויות מותאמות אישית בערכים ספציפיים ולהקצות להן טקסט מתאים (לדוגמה, 0 = \"גרוע\", 100 = \"מצוין\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "השתמש ב-'{0}' כמציין מיקום עבור הערך בפועל.",
      // "Allows users to move one thumb past the other."
      allowSwap: "מאפשר למשתמשים להזיז אגודל אחד מעבר לשני.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "מציג לחצן שמנקה את ערך המחוון שנבחר ומגדיר אותו כלא מוגדר.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "מגדיר את הערך המינימלי של המחוון באופן דינמי באמצעות ביטוי. תומך בחישובים בסיסיים (למשל, '{q1_id} + {q2_id}'), לוגיקה בוליאנית (למשל, '{age} > 60'), ופונקציות כמו 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' ועוד.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "מגדיר את הערך המרבי של המחוון באופן דינמי באמצעות ביטוי. תומך בחישובים בסיסיים (למשל, '{q1_id} + {q2_id}'), לוגיקה בוליאנית (למשל, '{age} > 60'), ופונקציות כמו 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' ועוד."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "הופך את הבחירה הזו לבלעדית. כאשר הוא נבחר על ידי משתמש, הוא יבטל אוטומטית את הבחירה בכל האפשרויות האחרות בשאלה.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "הפיכת תיבות הסימון בעמודה זו לבלעדיות. כאשר הוא נבחר על-ידי משתמש, הוא יבטל באופן אוטומטי את הבחירה בכל תיבות הסימון האחרות באותה שורה."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "בחר אם יש להתייחס לאותיות רישיות וקטנות בביטוי הרגיל כשוות ערך.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "בחר מתוך: \"סטטי\" - קובע רוחב קבוע; \"מגיב\" - עושה את הסקר לתפוס את מלוא רוחב המסך; \"אוטומטי\" - חל על כל אחד מהשניים בהתאם לסוגי השאלות המשמשים.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "עוגיות מונעות ממשתמשים למלא את אותו סקר פעמיים.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "הדבק קישור לתמונה (ללא מגבלות גודל) או לחץ על סמל התיקייה כדי לעיין בקובץ מהמחשב שלך (עד 64KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "הגדרת רוחב לוגו ביחידות CSS (px, %, in, pt וכו').",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "הגדרת גובה סמל ביחידות CSS (px, %, in, pt וכו').",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "בחר מתוך: \"ללא\" - התמונה שומרת על גודלה המקורי; \"להכיל\" - גודל התמונה משתנה כדי להתאים תוך שמירה על יחס גובה-רוחב שלה; \"כיסוי\" - התמונה ממלאת את התיבה כולה תוך שמירה על יחס הגובה-רוחב שלה; \"מילוי\" - התמונה נמתחת כדי למלא את התיבה מבלי לשמור על יחס הגובה-רוחב שלה.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "בחר אם ברצונך שהסקר יתקדם אוטומטית לדף הבא לאחר שהמשיב ענה על כל השאלות בדף הנוכחי. תכונה זו לא תחול אם השאלה האחרונה בדף פתוחה או מאפשרת תשובות מרובות.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "בחר אם ברצונך שהסקר יושלם באופן אוטומטי לאחר שמשיב עונה על כל השאלות.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "מגדיר את הניראות של לחצני ניווט בדף.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "הגדרת המיקום של לחצני ניווט בעמוד.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "הפעל את דף התצוגה המקדימה עם כל השאלות או שאלות שנענו בלבד.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "חל על כל השאלות בסקר. ניתן לדרוס הגדרה זו באמצעות כללי יישור כותרות ברמות נמוכות יותר: חלונית, עמוד או שאלה. הגדרה ברמה נמוכה יותר תעקוף את אלה ברמה גבוהה יותר.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "סמל או רצף של סמלים המציינים כי נדרשת תשובה.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "הזן מספר או אות שבאמצעותם ברצונך להתחיל במספור.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "בחר אם ברצונך ששדה הקלט הראשון בכל עמוד יהיה מוכן להזנת טקסט.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "שומר על הסדר המקורי של השאלות או מסדר אותן באופן אקראי. ההשפעה של הגדרה זו גלויה רק בכרטיסיה תצוגה מקדימה.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "לשאלות הזנת טקסט בלבד.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "להערות לשאלה בלבד.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "מגדיר את מספר השורות המוצגות באזורי טקסט עבור הערות לשאלה. אם הקלט תופס יותר שורות, פס הגלילה מופיע.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "בחר אם ברצונך שהערות שאלה ושאלות טקסט ארוך יגדלו באופן אוטומטי לגובה בהתבסס על אורך הטקסט שהוזנו.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "להערות לשאלות ולשאלות טקסט ארוך בלבד.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "משתנים מותאמים אישית משמשים כמשתני ביניים או משתני עזר המשמשים בחישובי טפסים. הם לוקחים תשומות משיבים כערכי מקור. לכל משתנה מותאם אישית יש שם ייחודי וביטוי שעליו הוא מבוסס.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "בחר אם ברצונך לשמור את הערך המחושב של הביטוי יחד עם תוצאות הסקר.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "גורם מפעיל הוא אירוע או תנאי המבוסס על ביטוי. לאחר הערכת הביטוי כ- \"true\", גורם מפעיל מגדיר פעולה. לפעולה כזו יכולה להיות שאלת יעד שהיא משפיעה עליה.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "בחר אם לנקות ערכים עבור שאלות המוסתרות על-ידי לוגיקה מותנית ומתי לעשות זאת.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "בחר מתוך: \"על מיקוד אבוד\" - הערך מתעדכן כאשר שדה הקלט מאבד את המיקוד; \"בעת הקלדה\" - הערך מתעדכן בזמן אמת, כאשר המשתמשים מקלידים.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "הערך השמאלי משמש כמזהה עמודה המשמש בכללי תנאי, הערך הימני מוצג למשיבים.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "הערך השמאלי משמש כמזהה שורה המשמש בכללי תנאי, הערך הימני מוצג למשיבים.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "מקבל ערכי CSS (px, %, in, pt וכו').",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "מקבל ערכי CSS (px, %, in, pt וכו').",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "נראה רק כאשר לפחות עמוד אחד מכיל עמוד סוג או ביטוי סוג.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לתא עם קלט לא חוקי. האפשרות \"ירושה\" מחילה את ההגדרה מהמאפיין \"יישור הודעת שגיאה\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "הגדרת המיקום של הודעות שגיאה עבור שאלות המקוננות במקטעים מפורטים. האפשרות \"ירושה\" מחילה את ההגדרה מהמאפיין \"יישור הודעת שגיאה\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "כאשר המאפיין \"מנע תגובות כפולות\" מופעל, משיב שינסה לשלוח ערך כפול יקבל את הודעת השגיאה הבאה.",
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "כאשר המאפיין \"מנע תגובות כפולות\" זמין עבור עמודת מטריצה, משיב המנסה לשלוח ערך כפול יקבל את הודעת השגיאה הבאה."
    },
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "מאפשר לחשב ערכים כוללים בהתבסס על ביטוי. הביטוי יכול לכלול חישובים בסיסיים ('{q1_id} + {q2_id}'), ביטויים בוליאניים ('{age} > 60') ופונקציות ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו').",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "אם העמודה שצוינה מכילה ערכים זהים, הסקר יזרוק את השגיאה \"ערך מפתח לא ייחודי\".",
    // "Type a subtitle."
    description: "הקלד כותרת משנה.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "בחר שפה כדי להתחיל ליצור את הסקר. כדי להוסיף תרגום, עבור לשפה חדשה ותרגם את הטקסט המקורי כאן או בכרטיסיה תרגומים.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "הגדרת המיקום של מקטע פרטים ביחס לשורה. בחר מתוך: \"ללא\" - לא נוספה הרחבה; \"מתחת לשורה\" - הרחבת שורה ממוקמת מתחת לכל שורה של המטריצה; \"מתחת לשורה, הצג הרחבת שורה אחת בלבד\" - הרחבה מוצגת תחת שורה אחת בלבד, הרחבות השורה הנותרות מכווצות.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "בחר מתוך: \"ללא\" - התמונה שומרת על גודלה המקורי; \"להכיל\" - גודל התמונה משתנה כדי להתאים תוך שמירה על יחס גובה-רוחב שלה; \"כיסוי\" - התמונה ממלאת את התיבה כולה תוך שמירה על יחס הגובה-רוחב שלה; \"מילוי\" - התמונה נמתחת כדי למלא את התיבה מבלי לשמור על יחס הגובה-רוחב שלה.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "מגדיל בהדרגה את גובה שדה הקלט בעת הזנת הנתונים. דורס את ההגדרה \"גובה שדה קלט (בקווים)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "האפשרות \"קבל בירושה\" מחילה הגדרה ברמת הסקר (\"זמין\" כברירת מחדל).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "מרווח זמן בשניות שלאחריו הסקר מתקדם אוטומטית לדף \"תודה\". כאשר הוא מוגדר ל- 0, סופר את הזמן שהוקדש לסקר.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "מרווח זמן בשניות שלאחריו הסקר מתקדם אוטומטית לדף הבא. מסתיר את כפתור הניווט \"הקודם\". כאשר היא מוגדרת ל- 0, סופרת את הזמן שהוקדש לדף הנוכחי.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "הפעל אפשרות זו כדי להפעיל אימות כאשר משתמש מתמקד בשדה קלט ריק ולאחר מכן עוזב אותו מבלי לבצע שינויים.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "מזהה דף שאינו גלוי למשיבים.",
      // "Type a page subtitle."
      description: "הקלד כותרת משנה של דף.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "כיתוב המוצג בלחצן ניווט בסרגל ההתקדמות או בתוכן העניינים (TOC). אם תשאיר שדה זה ריק, לחצן הניווט ישתמש בכותרת הדף או בשם הדף. כדי להפעיל את מד ההתקדמות או תוכן העניינים, עבור אל \"סקר\" →\"ניווט\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "מרווח זמן בשניות שלאחריו הסקר מתקדם אוטומטית לעמוד הבא.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי הקובע את תצוגת העמוד.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי שמשבית את מצב הקריאה בלבד של העמוד.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל תנאי המונע שליחת סקר, אלא אם לשאלה מקוננת אחת לפחות יש תשובה.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "חל על כל השאלות בדף זה. אם ברצונך לדרוס הגדרה זו, הגדר כללי יישור כותרת לשאלות או חלוניות בודדות. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"למעלה\" כברירת מחדל).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "הגדרת רוחב עקבי לכותרות שאלות כאשר הן מיושרות משמאל לתיבות השאלות. מקבל ערכי CSS (px, %, in, pt וכו').",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "הגדרת המיקום של הודעת שגיאה ביחס לשאלה עם קלט לא חוקי. בחר בין: \"למעלה\" - טקסט שגיאה ממוקם בחלק העליון של תיבת השאלה; \"תחתית\" - טקסט שגיאה ממוקם בחלק התחתון של תיבת השאלה. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"למעלה\" כברירת מחדל).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "שומר על הסדר המקורי של השאלות או מסדר אותן באופן אקראי. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"מקורי\" כברירת מחדל). ההשפעה של הגדרה זו גלויה רק בכרטיסיה תצוגה מקדימה.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "מגדיר את התצוגה של לחצני ניווט בעמוד. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר, המוגדרת כברירת מחדל ל\"גלוי\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "טבלה זו מאפשרת לך לקבוע את התצורה של כל עמודת רשת בעמוד. הוא מגדיר באופן אוטומטי את אחוז הרוחב עבור כל עמודה בהתבסס על המספר המרבי של רכיבים בשורה. כדי להתאים אישית את פריסת הרשת, התאם ערכים אלה באופן ידני והגדר את רוחב הכותרת עבור כל השאלות בכל עמודה."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "הגדרת המיקום של טיימר בעמוד.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "בחר מתוך: \"נעול\" - משתמשים אינם יכולים להרחיב או לכווץ חלוניות; \"כווץ הכל\" - כל הלוחות מתחילים במצב מכווץ; \"הרחב הכל\" - כל הלוחות מתחילים במצב מורחב; \"מורחב ראשון\" - רק הלוח הראשון מורחב בתחילה.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "הזן שם מאפיין משותף בתוך מערך האובייקטים המכיל את כתובות ה- URL של תמונות או קבצי וידאו שברצונך להציג ברשימת האפשרויות.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "הערך השמאלי משמש כמזהה פריט המשמש בכללי תנאי, הערך הימני מוצג למשיבים.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "הקלד כותרת ידידותית למשתמש להצגה.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "מבטיח שמשתמשים לא ישלימו את הסקר עד להעלאת קבצים.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "מקבל ערכי CSS (px, %, in, pt וכו').",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "מקבל ערכי CSS (px, %, in, pt וכו').",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "מקבל ערכי CSS (px, %, in, pt וכו').",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "אם אינך מגדיר מאפיין זה, התשובה תאוחסן בשדה המסוים במאפיין השם.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "ערך המוצג בשאלות HTML ובכותרות ובתיאורים הדינמיים של רכיבי סקר כאשר ערך השאלה ריק.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "בסוגי שאלות של בחירה בודדת ושאלות מרובות, לכל אפשרות בחירה יש מזהה וערך תצוגה. כשבוחרים באפשרות זו, הגדרה זו מציגה ערך תצוגה במקום ערך מזהה בשאלות HTML ובכותרות דינמיות ובתיאורים של רכיבי סקר.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "בחר אם לנקות או לא לנקות ערכי שאלות המוסתרים על-ידי לוגיקה מותנית ומתי לעשות זאת. האפשרות \"ירושה\" מחילה את ההגדרה ברמת הסקר (\"עם השלמת הסקר\" כברירת מחדל).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "בחר מתוך: \"הכל\" - מעתיק את כל אפשרויות הבחירה מהשאלה שנבחרה; \"נבחר\" - מעתיק באופן דינמי רק אפשרויות בחירה שנבחרו; \"לא נבחר\" - מעתיק באופן דינמי רק אפשרויות בחירה שלא נבחרו. האפשרויות \"ללא\" ו\"אחר\" מועתקות כברירת מחדל אם הן מופעלות בשאלת המקור.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "בסוגי שאלות של בחירה בודדת ושאלות מרובות, לכל אפשרות בחירה יש מזהה וערך תצוגה. הגדרה זו מציינת איזו עמודת מטריצה או שאלת חלונית יספקו את המזהים.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "בסוגי שאלות של בחירה בודדת ושאלות מרובות, לכל אפשרות בחירה יש מזהה וערך תצוגה. הגדרה זו מציינת איזו שאלת עמודת מטריצה או חלונית תספק את טקסטי התצוגה.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "בחר כדי לאפשר למשיבים להוסיף אפשרויות משלהם אם האפשרות הרצויה אינה זמינה ברשימה הנפתחת. אפשרויות מותאמות אישית יאוחסנו באופן זמני בלבד למשך הפעלת הדפדפן הנוכחית.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "כשבוחרים באפשרות זו, משתמשים יכולים לכלול קלט נוסף בתיבת הערות נפרדת.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "מציג כל אפשרות בחירה מיוחדת (\"ללא\", \"אחר\", \"בחר הכל\") בשורה חדשה, גם בשעת שימוש בפריסה מרובת עמודות.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "ציין את המיקום בתוך ערכת נתוני השירות שבו ממוקם מערך האובייקטים המשמש כיעד. השאר ריק אם כתובת ה- URL כבר מצביעה על המערך.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "הזן שם מאפיין אחיד במערך האובייקטים הכולל את הערכים שברצונך להציג ברשימת הבחירה.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "בחר כדי לאפשר לשירות להחזיר תגובה או מערך ריקים.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "השתמש בסמל מטה הקסם כדי להגדיר כלל מותנה הקובע את התצוגה של כל אפשרויות הבחירה.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "הערך השמאלי משמש כמזהה פריט המשמש בכללי תנאי, הערך הימני מוצג למשיבים.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"אוטומטי\" בוחר בין המצבים \"לחצנים\" ו \"נפתח\" מבוסס על הרוחב הזמין. כאשר הרוחב אינו מספיק להצגת לחצנים, השאלה מציגה רשימה נפתחת."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "מאפשר לך לחבר שאלות המייצרות תוצאות בפורמטים שונים. כאשר שאלות כאלה מקושרות יחד באמצעות מזהה צירוף, מאפיין משותף זה מאחסן ערכי שאלות נבחרים.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "בחר אם ברצונך לעדכן את תוכן התפריט הנפתח כך שיתאים לשאילתת החיפוש שמשתמש מקליד בשדה הקלט.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "ערך שיש לשמור בתוצאות הסקר כאשר המשיבים נותנים תשובה חיובית.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "ערך שיש לשמור בתוצאות הסקר כאשר המשיבים נותנים תשובה שלילית.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "לא מומלץ להשבית אפשרות זו מכיוון שהיא עוקפת את תמונת התצוגה המקדימה ומקשה על המשתמש להבין אם הקבצים הועלו.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "אפשר לדרג רק בחירות נבחרות. המשתמשים יגררו פריטים נבחרים מרשימת האפשרויות כדי לסדר אותם באזור הדירוג.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "הזן רשימה של אפשרויות שיוצעו למשיב במהלך הקלט.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "ההגדרה משנה את גודל שדות הקלט בלבד ואינה משפיעה על רוחב תיבת השאלה.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "מגדיר רוחב עקבי עבור כל תוויות הפריטים. מקבל ערכי CSS (px, %, in, pt וכדומה).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "בחר כיצד ליישר ערך קלט בתוך השדה. הגדרת ברירת המחדל \"אוטומטי\" מיישרת את ערך הקלט ימינה אם מוחלת מסיכה על מטבע או מספר, ושמאלה אם לא.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "משמש כתחליף כאשר לא ניתן להציג את התמונה במכשיר המשתמש ולמטרות נגישות.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "מגדיר את צבע האמוג'י שנבחר כשסוג סמל הדירוג מוגדר ל\"סמיילי\". בחר בין: \"ברירת מחדל\" - האמוג'י שנבחר מופיע בצבע סקר ברירת מחדל; \"קנה מידה\" - האמוג'י שנבחר יורש צבע מסולם הדירוג.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "מזהה ביטוי שאינו גלוי למשיבים.",
      // "Type an expression subtitle."
      description: "הקלד כותרת משנה של ביטוי.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "ביטוי יכול לכלול חישובים בסיסיים ('{q1_id} + {q2_id}'), תנאים ('{age} > 60') ופונקציות ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' וכו')."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "בחר כדי לאחסן את ערך האפשרות \"אחר\" כמאפיין נפרד בתוצאות הסקר.",
    // "Use {0} as a placeholder for the actual value."
    format: "השתמש ב-{0} כמציין מקום ריק.",
    // [Auto-translated] "Select \"Custom\" to add your own file extensions on top of the predefined categories."
    acceptedCategories: "בחר \"מותאם אישית\" כדי להוסיף סיומות קבצים משלך מעל הקטגוריות המוגדרות מראש.",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "התייחסות ל-[accept](https://www.w3schools.com/tags/att_input_accept.asp) למידע נוסף.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "ישומם רק לסוגי תא רדיו וקופסת סימון.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "התייחסות לתיאור של [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) למידע נוסף.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "חל כאשר \"סוג מקור\" הוא \"קבצים מקומיים\" או כאשר המצלמה אינה זמינה",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "חל כאשר \"סוג מקור\" הוא \"מצלמה\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "חל כאשר \"סוג מקור\" הוא \"קבצים מקומיים או מצלמה\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "מסדר אפשרויות בחירה בפריסה מרובת עמודות. כאשר הן מוגדרות על 0, האפשרויות מוצגות בשורה אחת.",
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "סידור תיבות טקסט בפריסה מרובת עמודות."
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "בחר אם ברצונך לאחסן את ערך השאלה עם מסיכה שהוחלה בתוצאות הסקר."
    },
    regionalformat: {
      // [Auto-translated] "A region whose formats apply to date-time, numeric, and currency input masks. If not specified, the survey language is used."
      locale: "אזור שהפורמטים שלו חלים על מסכות קלט של זמן-תאריך, מספרי ומטבע. אם לא צוין, משתמשים בשפת הסקר.",
      // [Auto-translated] "Overrides the region's date format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with a leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with a leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year."
      datePattern: "מחליף את פורמט התאריך של האזור המשמש במסכות קלט. התבנית יכולה להכיל תווי מפריד ואת המשאבים הבאים: <br>'m' - מספר חודש.<br> 'mm' - מספר חודש, עם אפס מוביל לערכים חד-ספרתיים. <br>'d' - יום החודש. <br>'dd' - יום החודש, עם אפס מוביל לערכים חד-ספרתיים. <br>'yy' - שתי הספרות האחרונות של השנה. <br>'yyyy' - שנה בת ארבע ספרות.",
      // [Auto-translated] "Overrides the region's time format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with a leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with a leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in uppercase (AM/PM).<br>`tt` - 12-hour clock period in lowercase (am/pm)."
      timePattern: "מחליף את פורמט הזמן של האזור המשמש במסכות קלט. התבנית יכולה להכיל תווי מפריד ואת המקומות הבאים: <br>'H' - שעות בפורמט 24 שעות.<br> 'HH' - שעות בפורמט 24 שעות, עם אפס מוביל לערכים חד-ספרתיים. <br>'h' - שעות בפורמט של 12 שעות. <br>'hh' - שעות בפורמט של 12 שעות, עם אפס מוביל לערכים חד-ספרתיים. <br>'MM' - דקות. <br>'ss' - שניות. <br>'TT' - תקופת שעון של 12 שעות באותיות גדולות (AM/PM). <br>'tt' - תקופת שעון של 12 שעות באותיות קטנות (AM/PM).",
      // [Auto-translated] "Overrides the symbol the region uses to separate the fractional part from the integer part of a displayed number in input masks."
      decimalSeparator: "עוקף את הסמל שבו האזור משתמש כדי להפריד בין החלק השברירי לחלק השלם של מספר מוצג במסכות קלט.",
      // [Auto-translated] "Overrides the symbol the region uses to separate the digits of a large number into groups of three in input masks."
      thousandsSeparator: "עוקף את הסמל שבו האזור משתמש כדי להפריד את הספרות של מספר גדול לקבוצות של שלושה במסכות קלט.",
      // [Auto-translated] "Overrides the region's currency symbol or code used in input masks."
      currencySymbol: "עוקף את סמל המטבע או הקוד של האזור המשמש במסכות קלט.",
      // [Auto-translated] "Overrides the region's currency pattern used in input masks. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "עוקף את דפוס המטבע של האזור המשמש במסכות קלט. התבנית יכולה להכיל את המשאבים הבאים: <br>'@' - סמל או קוד מטבע.<br> '#' - מספר. <br>'-' - מיקום סימן מינוס בערכים שליליים (אם מושמט, סימן מינוס ממוקם בתחילת הסימן)."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "התבנית יכולה להכיל מילולי מחרוזת ואת מצייני המיקום הבאים: '9' - עבור ספרה; 'a' - עבור אות גדולה או קטנה; '#' - עבור ספרה או אות גדולה או קטנה. השתמש בקו נטוי הפוך '\\' כדי לברוח מתו."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "התבנית יכולה להכיל תווים מפרידים ואת מצייני המיקום הבאים:<br>'m' - מספר חודש.<br>'mm' - מספר חודש, עם אפס מוביל עבור ערכים חד-ספרתיים. <br>'ד' - יום בחודש. <br>'dd' - יום בחודש, עם אפס מוביל עבור ערכים חד-ספרתיים. <br>'yy' - שתי הספרות האחרונות של השנה. <br>'yyyy' - שנה בת ארבע ספרות. <br>'H' - שעות בפורמט של 24 שעות. <br>'HH' - שעות בתבנית של 24 שעות, עם אפס מוביל עבור ערכים חד-ספרתיים. <br>'h' - שעות בפורמט של 12 שעות. <br>'hh' - שעות בתבנית של 12 שעות, עם אפס מוביל עבור ערכים חד-ספרתיים. <br>'ממ' - דקות. <br>'ss' - שניות. <br>'TT' - שעון של 12 שעות באותיות גדולות (AM/PM). <br>'tt' - שעון של 12 שעות באותיות קטנות (AM / PM)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "סמל המשמש להפרדת חלק השבר מהחלק השלם של מספר מוצג.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "סמל המשמש להפרדת הספרות של מספר גדול לקבוצות של שלושה.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "מגביל את מספר הספרות שיש לשמור אחרי הנקודה העשרונית עבור מספר מוצג.",
      // [Auto-translated] "Displays trailing zeros in the fractional part up to the specified precision. For example, with a precision of 2, an input value of 1.2 is displayed as 1.20."
      showTrailingZeros: "מציג אפסים עוקבים בחלק השברירי עד לדיוק שנקבע. לדוגמה, עם דיוק של 2, ערך קלט של 1.2 מוצג כ-1.20."
    },
    currencymask: {
      // [Auto-translated] "A currency symbol or code displayed with the value. The region's symbol is used by default. Clear this property to display no symbol."
      currencySymbol: "סמל מטבע או קוד שמוצג עם הערך. סמל האזור משמש כברירת מחדל. נקה תכונה זו כדי שלא יופיע סמל.",
      // [Auto-translated] "Specifies the positions of the number, currency symbol, and minus sign. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "מציין את מיקומי המספר, סמל המטבע וסימן המינוס. הדפוס יכול להכיל את המקומות הבאים: <br>'@' - סמל מטבע או קוד.<br> '#' - מספר. <br>'-' - מיקום סימן מינוס בערכים שליליים (אם מושמט, סימן מינוס ממוקם בתחילת הדרך)."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "הגדרה זו חלה רק על שאלות מחוץ לחלונית.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "הגדרת צבע משלים המדגיש רכיבי סקר מרכזיים.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "התאמת השקיפות של חלוניות ותיבות שאלה ביחס לרקע הסקר.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "התאמת השקיפות של רכיבי הקלט ביחס לרקע הסקר.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "קובע את רדיוס הפינה לכל הרכיבים המלבניים. הפעילו את 'מצב מתקדם' אם ברצונכם להגדיר ערכי רדיוס פינה בודדים לרכיבי קלט או לחלוניות ולתיבות שאלה.",
      // [Auto-translated] "Sets the main background color of the survey."
      "--sjs2-color-utility-surface-survey": "מגדיר את צבע הרקע הראשי של הסקר."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "האפשרות \"זהה לגורם מכיל\" מתאימה אוטומטית את רוחב אזור התוכן של הכותרת העליונה כך שיתאים לרכיב HTML שבו ממוקם הסקר.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "רוחב אזור הכותרת המכיל את כותרת הסקר ותיאורו, נמדד בפיקסלים.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "כאשר אפשרות זו מופעלת, החלק העליון של הסקר מכסה את החלק התחתון של הכותרת.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "כאשר הוא מוגדר ל- 0, הגובה מחושב באופן אוטומטי כדי להתאים לתוכן הכותרת."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "האפשרות \"זהה לגורם מכיל\" מתאימה אוטומטית את רוחב אזור מד ההתקדמות כך שיתאים לרכיב HTML שבו ממוקם הסקר.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "משמש כאשר 'פריסת הסקר' מוגדרת ל'שדה קלט יחיד לכל עמוד'. בפריסה זו, המטריצה מפוצלת כך שכל שדה קלט מופיע בעמוד נפרד. השתמש במציין המיקום {rowIndex} כדי להוסיף מספור אוטומטי, ב- {rowTitle} או ב- {rowName} כדי להפנות לכותרת או למזהה של השורה, וב- {row.columnid} כדי לכלול את הערך של עמודת מטריצה ספציפית."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "כותרת",
      // "Leave it empty, if it is the same as 'Name'"
      title: "השאר ריק אם זה זהה ל'שם'"
    },
    // "Allow multiple selection"
    multiSelect: "אפשר בחירה מרובה",
    // "Show image and video captions"
    showLabel: "הצגת כתוביות לתמונות",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "החלפת הסדר של כן ולא",
    // "Value"
    value: "ערך",
    // "Tab alignment"
    tabAlign: "יישור לשונית",
    // [Auto-translated] "File source type"
    sourceType: "סוג מקור הקובץ",
    // [Auto-translated] "Default camera"
    cameraFacingMode: "מצלמה ברירת מחדל",
    // [Auto-translated] "Fit to container"
    fitToContainer: "התאמה למיכל",
    // [Auto-translated] "Set value expression"
    setValueExpression: "הגדרת ביטוי ערך",
    // "Description"
    description: "תיאור", // Auto-generated string
    // "Logo fit"
    logoFit: "התאמת הלוגו",
    // "Pages"
    pages: "עמודים", // Auto-generated string
    // "Questions"
    questions: "שאלות", // Auto-generated string
    // "Triggers"
    triggers: "מפעילים",
    // "Custom variables"
    calculatedValues: "ערכים מחושבים",
    // "Survey id"
    surveyId: "מזהה סקר", // Auto-generated string
    // "Survey post id"
    surveyPostId: "מזהה פוסט סקר", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "הצגת שמירת נתונים", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "מיקום תיאור השאלה",
    // "Progress bar type"
    progressBarType: "סוג סרגל התקדמות", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "הצגת תוכן הקריאה",
    // "TOC alignment"
    tocLocation: "מיקום תוכן הקריאה",
    // "Question title pattern"
    questionTitlePattern: "תבנית כותרת השאלה", // Auto-generated string
    // "Survey width mode"
    widthMode: "מצב רוחב",
    // "Show brand info"
    showBrandInfo: "הצגת מידע על המותג", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "שימוש בערכי תצוגה בטקסטים דינמיים",
    // "Visible if"
    visibleIf: "נראה אם", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "ביטוי ערך ברירת מחדל",
    // "Required if"
    requiredIf: "נדרש אם", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "איפוס ערך אם",
    // [Auto-translated] "Set value if"
    setValueIf: "הגדר ערך אם",
    // "Validation rules"
    validators: "מאמתים",
    // "Bindings"
    bindings: "קישורים", // Auto-generated string
    // "Render as"
    renderAs: "תצוגה כ", // Auto-generated string
    // "Attach original items"
    attachData: "צרף פריטים מקוריים", // Auto-generated string
    // "Choices"
    choices: "בחירות",
    // "Choices by url"
    choicesByUrl: "בחירות דרך URL", // Auto-generated string
    // "Currency"
    currency: "מטבע", // Auto-generated string
    // "Cell hint"
    cellHint: "רמז לתא", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "מספר ספרות עשרוניות מרבי", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "מספר ספרות עשרוניות מינימלי", // Auto-generated string
    // "Columns"
    columns: "עמודות", // Auto-generated string
    // "Detail elements"
    detailElements: "רכיבי פרטים", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "אפשר פעולות מותאמות", // Auto-generated string
    // "Default row value"
    defaultRowValue: "ערך ברירת מחדל לשורה", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "הרחבה אוטומטית של פרטי שורה חדשה",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "אפשר טעינת רשימות עם פריטים עצלים", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "גודל עמוד בטעינת רשימות", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "רכיב שדה קלט", // Auto-generated string
    // "Item component"
    itemComponent: "רכיב פריט", // Auto-generated string
    // "Min"
    min: "מינימום", // Auto-generated string
    // "Max"
    max: "מקסימום", // Auto-generated string
    // "Min value expression"
    minValueExpression: "ביטוי ערך מינימלי", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "ביטוי ערך מקסימלי", // Auto-generated string
    // "Step"
    step: "צעד", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "רשימת נתונים",
    // "Input field width (in characters)"
    inputSize: "גודל פריט",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "רוחב תווית הפריט",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "יישור ערך קלט",
    // "Elements"
    elements: "רכיבים", // Auto-generated string
    // "Content"
    content: "תוכן", // Auto-generated string
    // "Navigation title"
    navigationTitle: "כותרת ניווט", // Auto-generated string
    // "Navigation description"
    navigationDescription: "תיאור ניווט", // Auto-generated string
    // "Long tap"
    longTap: "לחיצה ארוכה", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "התרחבות אוטומטית",
    // "Enable resize handle"
    allowResize: "אפשר שינוי גודל",
    // "Accept carriage return"
    acceptCarriageReturn: "קבלת Enter", // Auto-generated string
    // "Display mode"
    displayMode: "מצב תצוגה",
    // "Rate type"
    rateType: "סוג דירוג", // Auto-generated string
    // "Label"
    label: "תווית", // Auto-generated string
    // "Content mode"
    contentMode: "מצב תוכן",
    // "Image and thumbnail fit"
    imageFit: "התאמת התמונה",
    // "Alt text"
    altText: "טקסט חלופי",
    // "Height"
    height: "גובה", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "גובה בסמארטפונים",
    // "Pen color"
    penColor: "צבע העט", // Auto-generated string
    // "Background color"
    backgroundColor: "צבע רקע",
    // "Template elements"
    templateElements: "רכיבי תבנית", // Auto-generated string
    // "Operator"
    operator: "אופרטור", // Auto-generated string
    // "Is variable"
    isVariable: "משתנה", // Auto-generated string
    // "Run expression"
    runExpression: "הפעל ביטוי", // Auto-generated string
    // "Show caption"
    showCaption: "הצג כיתוב", // Auto-generated string
    // "Icon name"
    iconName: "שם סמל", // Auto-generated string
    // "Icon size"
    iconSize: "גודל סמל", // Auto-generated string
    // "Precision"
    precision: "דיוק", // Auto-generated string
    // "Matrix drag handle area"
    matrixDragHandleArea: "אזור גרירה במטריצה", // Auto-generated string
    // "Background image"
    backgroundImage: "תמונת רקע",
    // "Background image fit"
    backgroundImageFit: "התאמת תמונת רקע", // Auto-generated string
    // "Background image attachment"
    backgroundImageAttachment: "קשר תמונת רקע", // Auto-generated string
    // "Background opacity"
    backgroundOpacity: "שקיפות רקע", // Auto-generated string
    // "Allow selective ranking"
    selectToRankEnabled: "אפשר בחירה לדירוג",
    // "Ranking area alignment"
    selectToRankAreasLayout: "תצוגת אזורי בחירה לדירוג",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "טקסט שיציג אם כל האפשרויות נבחרו",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "טקסט מציין מיקום עבור אזור הדירוג",
    // "Allow camera access"
    allowCameraAccess: "אפשר גישה למצלמה", // Auto-generated string
    // "Rating icon color mode"
    scaleColorMode: "מצב צבע לסולם",
    // "Smileys color scheme"
    rateColorMode: "מצב צבע לדירוג",
    // "Copy display value"
    copyDisplayValue: "העתקת ערך תצוגה", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "טווח עמודות",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "רוחב אזור מד התקדמות",
    // [Auto-translated] "Theme name"
    themeName: "שם ערכת נושא"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "מצב מתקדם",
    // "Page"
    pageTitle: "גופן כותרת עמוד",
    // "Question box"
    questionTitle: "גופן כותרת שאלה",
    // "Input element"
    editorPanel: "רקע אלמנט קלט",
    // [Auto-translated] "Lines"
    lines: "קווים",
    // "Default"
    primaryDefaultColor: "ברירת מחדל",
    // "Hover"
    primaryDarkColor: "עכבר",
    // "Selected"
    primaryLightColor: "נבחר",
    // "Corner radius"
    cornerRadius: "רדיוס פינה",
    // "Default background"
    backcolor: "רקע ברירת מחדל",
    // "Hover background"
    hovercolor: "רקע העברת עכבר",
    // [Auto-translated] "Font color"
    fontColor: "צבע גופן",
    // [Auto-translated] "Background color"
    backgroundColor: "צבע רקע",
    // "Default color"
    primaryForecolor: "צבע ברירת מחדל",
    // "Disabled color"
    primaryForecolorLight: "צבע כבוי",
    // "Darker"
    borderDefault: "כהה",
    // "Lighter"
    borderLight: "בהיר",
    // [Auto-translated] "Font family"
    fontFamily: "משפחת גופנים",
    // [Auto-translated] "Regular"
    fontWeightRegular: "רגיל",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "כבד",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "חצי נועז",
    // [Auto-translated] "Bold"
    fontWeightBold: "נועז",
    // [Auto-translated] "Color"
    color: "צבע",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "צבע מציין מיקום",
    // [Auto-translated] "Size"
    size: "גודל",
    // [Auto-translated] "Line height"
    lineHeight: "גובה הקו",
    // [Auto-translated] "Opacity"
    opacity: "אטימות",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // "Add Shadow Effect"
    boxShadowAddRule: "הוספת אפקט צל",
    // "Blur"
    boxShadowBlur: "טשטוש",
    // "Spread"
    boxShadowSpread: "התפשטות",
    // "Drop"
    boxShadowDrop: "הטפה",
    // "Inner"
    boxShadowInner: "פנימי",
    names: {
      // "Default"
      default: "ברירת מחדל",
      // "Contrast"
      contrast: "ניגודיות",
      // "Borderless"
      borderless: "ללא גבול",
      // "Flat"
      flat: "שטוח",
      // "Plain"
      plain: "פשוט",
      // [Auto-translated] "Soft"
      soft: "רך",
      // "3D"
      threedimensional: "שלושה מימדים",
      // [Auto-translated] "Monochrome"
      monochrome: "מונוכרום"
    },
    colors: {
      // "Teal"
      teal: "טיל",
      // "Blue"
      blue: "כחול",
      // "Purple"
      purple: "סגול",
      // "Orchid"
      orchid: "אורכידיה",
      // "Tulip"
      tulip: "טוליפ",
      // "Brown"
      brown: "חום",
      // "Green"
      green: "ירוק",
      // [Auto-translated] "Gray"
      gray: "אפור"
    }
  },
  creatortheme: {
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "הראשי",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "משני",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "רכיבי ממשק משתמש",
    // [Auto-translated] "Font"
    fontScale: "גופן",
    names: {

    }
  },
  preset: {
    names: {
      // [Auto-translated] "Basic"
      basic: "בסיסי",
      // [Auto-translated] "Advanced"
      advanced: "מתקדם",
      // [Auto-translated] "Expert"
      expert: "מומחה"
    },
    // [Auto-translated] "Preset applied"
    presetApplied: "פריסט מוחל"
  },
  // Results of survey-core/linter, shown in the JSON tab. A message key is composed as
  linter: {
    // [Auto-translated] "Line: {0}. "
    lineNumber: "שורה: {0}.", // {0} 1-based line number, prefixes an entry of the error list
    fixes: {
      "choices/dead-source": {
        // [Auto-translated] "Use the suggested name"
        setName: "השתמש בשם המומלץ"
      },
      "choices/duplicate": {
        // [Auto-translated] "Remove the repeated item"
        removeItem: "הסר את הפריט החוזר"
      },
      "element/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "השתמש בסוג המומלץ"
      },
      "expression/unknown-function": {
        // [Auto-translated] "Use the suggested function"
        renameFunction: "השתמש בפונקציה המוצעת"
      },
      "mask/mismatch": {
        // [Auto-translated] "Use the suggested mask"
        setMaskType: "השתמשו במסכה המומלצת"
      },
      "name/duplicate": {
        // [Auto-translated] "Give the element a free name"
        renameElement: "תן לאלמנט שם חופשי"
      },
      "name/reserved": {
        // [Auto-translated] "Give the element a free name"
        renameElement: "תן לאלמנט שם חופשי"
      },
      "property/dead": {
        // [Auto-translated] "Remove the property"
        removeKey: "הסרת הנכס"
      },
      "property/invalid-value": {
        // [Auto-translated] "Use the nearest allowed value"
        clampToRange: "השתמש בערך המותר הקרוב ביותר",
        // [Auto-translated] "Remove the property"
        removeKey: "הסרת הנכס",
        // [Auto-translated] "Use the suggested value"
        useAllowedValue: "השתמש בערך המוצע"
      },
      "property/not-an-array": {
        // [Auto-translated] "Turn the value into a list"
        wrapInArray: "הפוך את הערך לרשימה"
      },
      "property/required": {
        // [Auto-translated] "Give the element a name"
        setName: "תן לאלמנט שם"
      },
      "property/unknown": {
        // [Auto-translated] "Remove the property"
        removeKey: "הסרת הנכס",
        // [Auto-translated] "Rename the property"
        renameKey: "שינוי שם הנכס"
      },
      "reference/unknown": {
        // [Auto-translated] "Use the suggested name"
        renameReference: "השתמש בשם המומלץ",
        // [Auto-translated] "Use the suggested name"
        setKeyName: "השתמש בשם המומלץ"
      },
      "trigger/unknown-target": {
        // [Auto-translated] "Use the suggested name"
        setName: "השתמש בשם המומלץ"
      },
      "trigger/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "השתמש בסוג המומלץ"
      },
      "validator/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "השתמש בסוג המומלץ"
      }
    },
    messages: {
      "expression/syntax": {
        // [Auto-translated] "The expression \"{expression}\" cannot be parsed."
        unparsable: "הביטוי \"{expression}\" אינו ניתן לניתוח."
      },
      "reference/unknown": {
        // [Auto-translated] "\"{name}\" is not found - no question, panel, page, calculated value, or variable with that name exists."
        notFound: "\"{name}\" לא נמצא - אין שאלה, פאנל, עמוד, ערך מחושב או משתנה בשם הזה.",
        // [Auto-translated] "\"{segment}\" is not found in {containerType} \"{root}\" (reference: {name})."
        inContainer: "\"{segment}\" אינו נמצא ב-{containerType} \"{root}\" (הפניה: {name}).",
        // [Auto-translated] "\"{segment}\" is not found in the \"{scopePrefix}\" scope (reference: {name})."
        scopedUnknown: "\"{segment}\" אינו נמצא בטווח \"{scopePrefix}\" (הפניה: {name}).",
        // [Auto-translated] "The keyName of \"{name}\" names \"{key}\" - \"{name}\" has no {keyNoun} with that name, so duplicate-key validation never runs."
        keyNameNotFound: "ה-keyName של \"{name}\" קורא ל-\"{key}\" - \"{name}\" אין {keyNoun} עם השם הזה, ולכן אימות מפתח כפול לעולם לא רץ.",
        // [Auto-translated] "\"{name}\" is not found."
        functionArgNotFound: "\"{name}\" לא נמצא."
      },
      "reference/self": {
        // [Auto-translated] "The {prop} of \"{name}\" references the element itself (reference: {reference})."
        selfReference: "ה-{prop} של \"{name}\" מתייחס לאלמנט עצמו (הפניה: {reference})."
      },
      "name/duplicate": {
        // [Auto-translated] "The name \"{name}\" is duplicated."
        elementNames: "השם \"{name}\" משוכפל.",
        // [Auto-translated] "The calculated value name \"{name}\" is already used by another calculated value."
        calculatedValueNames: "שם הערך המחושב \"{name}\" כבר משמש ערך מחושב אחר.",
        // [Auto-translated] "The calculated value \"{name}\" shares its name with another element, so one of them shadows the other."
        calculatedValueShadowsElement: "הערך המחושב \"{name}\" חולק את שמו עם אלמנט אחר, כך שאחד מהם מצלל על השני."
      },
      "name/shadowing": {
        // [Auto-translated] "The {nameKindText} \"{name}\" of this {ownerText} is also the built-in survey variable {{builtIn}} - the survey answers {{name}} first, so this one is unreachable in expressions."
        builtInVariable: "ה-{nameKindText} \"{name}\" של {ownerText} הזה הוא גם משתנה סקר מובנה {{builtIn}} - הסקר עונה ראשון על {{name}}, ולכן זה לא נגיש בביטויים.",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" is also the name of question \"{otherName}\" - both store their answer under the data key \"{valueName}\"."
        valueNameShadowsElement: "ה-valueName \"{valueName}\" של \"{name}\" הוא גם שם השאלה \"{otherName}\" - שניהם שומרים את התשובה תחת מפתח הנתונים \"{valueName}\".",
        // [Auto-translated] "The data key \"{dataName}\" is also the comment key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        commentKeyCollision: "מפתח הנתונים \"{dataName}\" הוא גם מפתח התגובה של \"{base}\" (מפתח הנתונים שלו בתוספת \"{סיומת}\") - כתיבה אחת מחליפה את השנייה בשקט.",
        // [Auto-translated] "The data key \"{dataName}\" is also the totals key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        totalKeyCollision: "מפתח הנתונים \"{dataName}\" הוא גם מפתח הסכומים של \"{base}\" (מפתח הנתונים שלו בתוספת \"{סיומת}\") - כתיבה אחת מחליפה את השנייה בשקט.",
        // [Auto-translated] "The {trigger} trigger sets the variable \"{name}\", which is also the data key of question \"{questionName}\" - the variable answers {{name}} from then on, not the question."
        variableShadowsQuestion: "הטריגר {trigger} מגדיר את המשתנה \"{name}\", שהוא גם מפתח הנתונים של השאלה \"{questionName}\" - המשתנה עונה על {{name}} מאז, לא על השאלה."
      },
      "name/reserved": {
        // [Auto-translated] "The name \"{name}\" is reserved - a member of Object.prototype."
        questionName: "השם \"{name}\" שמור - חבר ב-Object.prototype.",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" is reserved - a member of Object.prototype."
        valueName: "ה-valueName \"{valueName}\" של \"{name}\" שמור - חבר ב-Object.prototype.",
        // [Auto-translated] "The column \"{name}\" of \"{matrixName}\" is reserved - a member of Object.prototype."
        columnName: "העמודה \"{name}\" של \"{matrixName}\" שמורה - חברה ב-Object.prototype.",
        // [Auto-translated] "The item \"{name}\" of \"{questionName}\" is reserved - a member of Object.prototype."
        itemName: "הפריט \"{name}\" של \"{questionName}\" שמור - חבר ב-Object.prototype.",
        // [Auto-translated] "The row \"{rowValue}\" of \"{name}\" is reserved - a member of Object.prototype."
        rowValue: "השורה \"{rowValue}\" של \"{name}\" שמורה - חברה ב-Object.prototype.",
        // [Auto-translated] "The calculated value \"{name}\" is reserved - a member of Object.prototype."
        calculatedValueName: "הערך המחושב \"{name}\" שמור - חבר ב-Object.prototype."
      },
      "element/unknown-type": {
        // [Auto-translated] "\"{name}\" has an unknown type \"{type}\"."
        unknownType: "ל\"{name}\" יש סוג לא ידוע \"{type}\".",
        // [Auto-translated] "\"{name}\" has no type - an element without a type is dropped."
        missingType: "ל\"{name}\" אין טיפוס - אלמנט ללא טיפוס נופל."
      },
      "property/unknown": {
        // [Auto-translated] "\"{key}\" is not a property of {ownerText} ({className})."
        unknownProperty: "\"{key}\" אינה תכונה של {ownerText} ({className})."
      },
      "property/dead": {
        // [Auto-translated] "\"{key}\" of {ownerText} is not serializable - it takes effect on load, and is dropped from the JSON whenever the survey is saved again."
        notSerializable: "\"{key}\" של {ownerText} אינו ניתן לסריאליזציה - הוא נכנס לתוקף בעת טעינה, ונמחק מה-JSON בכל פעם שהסקר נשמר שוב.",
        // [Auto-translated] "\"{key}\" and \"{aliasKey}\" of {ownerText} are two names of one property - the run time applies them in the order the JSON writes them, so \"{winner}\" wins."
        aliasDuplicate: "\"{key}\" ו-\"{aliasKey}\" של {ownerText} הם שני שמות של תכונה אחת - זמן הריצה מיישם אותם לפי הסדר שבו JSON כותב אותם, כך ש\"{winner}\" מנצח.",
        // [Auto-translated] "\"{key}\" is set on \"{name}\", but inputType \"{inputType}\" has no bounds - the run time ignores it."
        inertMinMax: "\"{key}\" מוגדר על \"{name}\", אבל ל-inputType \"{inputType}\" אין גבולות - זמן הריצה מתעלם ממנו."
      },
      "property/invalid-value": {
        // [Auto-translated] "The {key} of {ownerText} is {valueText} - not one of the allowed values ({allowedText})."
        notInChoices: "ה-{key} של {ownerText} הוא {valueText} - לא אחד מהערכים המותרים ({allowedText}).",
        // [Auto-translated] "The {key} of {ownerText} is {value}, outside its allowed range {rangeText}."
        outOfRange: "ה-{key} של {ownerText} הוא {value}, מחוץ לטווח המותר שלו {rangeText}.",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" contains a \".\" - expressions read {{valueName}} as a path into \"{rootKey}\", so the data key itself can never be addressed."
        valueNameDotted: "ה-valueName \"{valueName}\" של \"{name}\" מכיל \".\" - ביטויים קוראים {{valueName}} כנתיב ל-\"{rootKey}\", כך שמפתח הנתונים עצמו לעולם לא יכול להיות מושפע."
      },
      "property/required": {
        // [Auto-translated] "{ownerText} has no \"{key}\" - the property is required for a {className}."
        missing: "ל-{ownerText} אין \"{key}\" - התכונה נדרשת עבור {className}.",
        // [Auto-translated] "The name of the {className} is {valueText}, not a string - the survey cannot load it."
        notAString: "שם ה-{className} הוא {valueText}, לא מחרוזת - הסקר לא יכול לטעון אותו."
      },
      "property/not-an-array": {
        // [Auto-translated] "The \"{key}\" of {ownerText} is not an array - the property holds a list, and the run time wraps the value into a one-item array."
        notAnArray: "ה\"{key}\" של {ownerText} אינו מערך - התכונה מחזיקה רשימה, וזמן הריצה עוטף את הערך למערך של פריט אחד."
      },
      "variable/collision": {
        // [Auto-translated] "The variable definition declares \"{variable}\", which is also the data key of question \"{name}\" - setting the variable deletes the answer stored under that key, and {{name}} answers the host value from then on."
        questionShadowed: "הגדרת המשתנה מכריזה על \"{variable}\", שהוא גם מפתח הנתונים של השאלה \"{name}\" - הגדרת המשתנה מוחקת את התשובה המאוחסנת תחת אותו מפתח, ו-{{name}} עונה על ערך המארח מאז.",
        // [Auto-translated] "The variable definition declares \"{variable}\", which is also the name of calculated value \"{name}\" - both write the same slot, and whichever runs last wins."
        calculatedValueShadowed: "הגדרת המשתנה מכריזה על \"{variable}\", שהוא גם שם הערך המחושב \"{name}\" - שניהם כותבים את אותו חריץ, והמשתנה שרץ אחרון מנצח."
      },
      "variable/preset": {
        // [Auto-translated] "variablePresets.definition is not a survey JSON object, so no variable is declared and no preset value can be checked."
        definitionNotAnObject: "variablePresets.definition אינו אובייקט JSON לסקר, ולכן לא מוכרז משתנה ואין ערך פריסט שניתן לבדוק.",
        // [Auto-translated] "variablePresets.presets is not an array, so no preset is declared."
        presetsNotAnArray: "variablePresets.presets אינו מערך, ולכן לא מוכרז פריסט.",
        // [Auto-translated] "Preset #{index} is not an object."
        presetNotAnObject: "פריסט #{index} אינו אובייקט.",
        // [Auto-translated] "Preset #{index} has no name, so nothing can reference it."
        presetNameMissing: "לפריסט #{index} אין שם, אז שום דבר לא יכול להתייחס אליו.",
        // [Auto-translated] "Preset \"{preset}\" carries no variables object, so it sets nothing."
        presetVariablesNotAnObject: "הפריסט \"{preset}\" אינו נושא אובייקט משתנים, ולכן הוא לא קובע כלום.",
        // [Auto-translated] "Preset \"{preset}\" is declared twice - a lookup by that name answers with the first one."
        duplicateName: "ההגדרה המוקדמת \"{preset}\" מוצהרת פעמיים - חיפוש בשם זה עונה עם הראשון.",
        // [Auto-translated] "Preset \"{preset}\" sets \"{variable}\", which the variable definition does not declare."
        unknownVariable: "הגדרה מוקדמת \"{preset}\" אוספת \"{variable}\", שהגדרת המשתנה אינה מכריזה.",
        // [Auto-translated] "Preset \"{preset}\" sets \"{variable}\" to a value the variable definition rejects: {errors}"
        invalidValue: "פריסט \"{preset}\" מגדיר את \"{variable}\" לערך שההגדרה של המשתנה דוחה: {errors}"
      },
      "expression/unknown-function": {
        // [Auto-translated] "The function \"{functionName}\" is not registered."
        notRegistered: "הפונקציה \"{functionName}\" אינה רשומה."
      },
      "cycle/calculated-value": {
        // [Auto-translated] "The calculated value \"{names}\" references itself in its own expression."
        self: "הערך המחושב \"{names}\" מתייחס לעצמו בביטוי משלו.",
        // [Auto-translated] "Calculated values {names} depend on each other."
        loop: "ערכים מחושבים {שמות} תלויים זה בזה."
      },
      "cycle/trigger": {
        // [Auto-translated] "The trigger reacts to the value it sets itself (\"{setToName}\")."
        self: "הטריגר מגיב לערך שהוא מגדיר לעצמו (\"{setToName}\").",
        // [Auto-translated] "Triggers form a loop through the values they set: {setRoots}."
        loop: "הטריגרים יוצרים לולאה דרך הערכים שהם מגדירים: {setRoots}."
      },
      "cycle/value-write": {
        // [Auto-translated] "The {label} reads the value it writes itself - it runs only when another value changes, so it never runs at all."
        self: "ה-{label} קורא את הערך שהוא כותב בעצמו - הוא רץ רק כשערך אחר משתנה, כך שהוא אף פעם לא רץ בכלל.",
        // [Auto-translated] "Values are written in a loop: {chain}. Each write reruns the expressions that read it, so the final values depend on the order the questions are answered in."
        loop: "הערכים נכתבים בלולאה: {chain}. כל כתיבה מריצה מחדש את הביטויים שקוראים אותה, כך שהערכים הסופיים תלויים בסדר שבו נענות השאלות."
      },
      "expression/unknown-choice": {
        // [Auto-translated] "The condition compares \"{name}\" to {values} - not among its choices. Available: {available}."
        notAmongChoices: "התנאי משווה את \"{name}\" ל-{values} - לא בין הבחירות שלו. זמין: {available}.",
        // [Auto-translated] "The condition compares \"{name}\" to {values} - no choice value contains it. Available: {available}."
        noChoiceContains: "התנאי משווה את \"{name}\" ל-{values} - אין ערך בחירה שמכיל אותו. זמין: {available}."
      },
      "expression/type-mismatch": {
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" ({questionType}) has no value to compare."
        "no-value": "התנאי חל על \"{operator}\" על \"{name}\": \"{recordName}\" ({questionType}) אין לו ערך להשוואה.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds {valueShapeText} - ordering and arithmetic operators do not apply to it."
        "non-scalar": "התנאי חל על \"{operator}\" על \"{name}\": \"{recordName}\" מחזיק את {valueShapeText} - אופרטורי סדר ואריתמטיקה אינם חלים עליו.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - ordering operators do not apply to it."
        "boolean-ordering": "התנאי חל על \"{operator}\" על \"{name}\": \"{recordName}\" היא שאלה בוליאנית - אופרטורי הסדר אינם חלים עליה.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a text question - its value is a string, so numeric comparison relies on implicit conversion."
        "text-ordering": "התנאי מתייחס ל\"{operator}\" על \"{name}\": \"{recordName}\" היא שאלה טקסטואלית - ערכה הוא מחרוזת, ולכן השוואה מספרית מתבססת על המרה מרומזת.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds a date string - comparing it to the number {constValue} cannot hold."
        "date-vs-number": "התנאי חל את \"{operator}\" על \"{name}\": \"{recordName}\" מחזיק מחרוזת תאריך - בהשוואה למספר ש{constValue} לא יכול להחזיק.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is numeric - comparing it to the string \"{constValue}\" cannot hold."
        "number-vs-string": "התנאי מתייחס ל-\"{operator}\" על \"{name}\": \"{recordName}\" הוא מספרי - השוואה למחרוזת \"{constValue}\" אינה מתאימה.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds an array of selected values, so \"=\" compares the whole array."
        "array-vs-scalar": "התנאי מיישם \"{operator}\" על \"{name}\": \"{recordName}\" מחזיק מערך של ערכים נבחרים, ולכן \"=\" משווה את כל המערך.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - comparing it to {constValue} cannot hold."
        "boolean-vs-const": "התנאי חל על \"{operator}\" על \"{name}\": \"{recordName}\" היא שאלה בוליאנית - השוואה ל-{constValue} אינה מתאימה."
      },
      "expression/contradiction": {
        // [Auto-translated] "The {prop} \"{expression}\" is always false, so \"{name}\" is never shown."
        alwaysFalse: "ה-{prop} \"{expression}\" תמיד שגוי, ולכן \"{name}\" לעולם לא מוצג.",
        // [Auto-translated] "The {prop} \"{expression}\" never holds, because {facts}."
        alwaysFalseViaConstants: "המונח {prop} \"{ביטוי} לעולם לא מתקיים, כי {facts}.",
        // [Auto-translated] "The {prop} \"{expression}\" never holds - no allowed value satisfies it: {facts}."
        outOfRange: "ה-{prop} \"{expression}\" לעולם לא מתקיים - אין ערך מותר שמקיים אותו: {facts}.",
        // [Auto-translated] "The {prop} \"{expression}\" contradicts itself: {facts}."
        unsatisfiable: "ה-{prop} \"{ביטוי} סותר את עצמו: {facts}."
      },
      "expression/meaningless-condition": {
        // [Auto-translated] "The {prop} \"{expression}\" is always true, so it decides nothing."
        alwaysTrue: "ה-{prop} \"{expression} תמיד נכון, ולכן הוא לא מחליט כלום.",
        // [Auto-translated] "The {prop} \"{expression}\" is arithmetic, not a comparison, so it never gives a yes or no."
        notABoolean: "ה-{prop} '{expression} הוא אריתמטי, לא השוואה, ולכן הוא אף פעם לא נותן כן או לא.",
        // [Auto-translated] "Part of the {prop} \"{expression}\" has a result that is known upfront."
        meaninglessFragment: "חלק מה-{prop} \"{expression}\" יש לו תוצאה שידועה מראש.",
        // [Auto-translated] "The {prop} \"{expression}\" always holds, because {facts} - it decides nothing."
        alwaysTrueViaConstants: "ה-{prop} \"{expression} תמיד תקף, כי {facts} - הוא לא מחליט כלום."
      },
      "value/not-a-choice": {
        // [Auto-translated] "The default value of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultValue: "הערך ברירת המחדל של \"{name}\" הוא {valuesText}, שהוא לעולם לא יכול להחזיק. מותר: {availableText}.",
        // [Auto-translated] "The correct answer of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        correctAnswer: "התשובה הנכונה של \"{name}\" היא {valuesText}, שלעולם לא תוכל להחזיק. מותר: {availableText}.",
        // [Auto-translated] "The trigger sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        triggerSetValue: "הטריגר מגדיר את \"{name}\" ל-{valuesText}, שהוא לעולם לא יכול להחזיק. מותר: {availableText}.",
        // [Auto-translated] "The default row value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultRowValue: "ערך השורה ברירת המחדל מגדיר את \"{name}\" ל-{valuesText}, שהוא לעולם לא יכול להחזיק. מותר: {availableText}.",
        // [Auto-translated] "The default panel value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultPanelValue: "ערך הפאנל ברירת המחדל מגדיר את \"{name}\" ל-{valuesText}, שלעולם לא יוכל להחזיק. מותר: {availableText}.",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such row. Available: {availableText}."
        unknownRowKey: "ה-{prop} של \"{name}\" שמות \"{key}\" - אין שורה כזו. זמין: {availableText}.",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such column. Available: {availableText}."
        unknownColumnKey: "ה-{prop} של \"{name}\" שם \"{key}\" - אין עמודה כזו. זמין: {availableText}.",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such template question. Available: {availableText}."
        unknownQuestionKey: "ה-{prop} של \"{name}\" שמות \"{key}\" - אין שאלה כזו על תבנית. זמין: {availableText}.",
        // [Auto-translated] "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but \"{fromName}\" holds {sourceShapeText} and \"{setToName}\" holds {targetShapeText}."
        copyValueShape: "טריגר ה-copyvalue מעתיק את \"{fromName}\" ל-\"{setToName}\", אך \"{fromName}\" מחזיק את {sourceShapeText} ו-\"{setToName}\" מחזיק את {targetShapeText}.",
        // [Auto-translated] "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but no value of \"{fromName}\" is among the values \"{setToName}\" can hold. Allowed: {availableText}."
        copyValueNoOverlap: "טריגר ערך ההעתקה מעתיק את \"{fromName}\" ל\"{setToName}\", אך אין ערך של \"{fromName}\" בין הערכים ש\"{setToName}\" יכול להחזיק. מותר: {availableText}."
      },
      "choices/dead-source": {
        // [Auto-translated] "\"{name}\" copies its choices from \"{source}\", but no question with that name exists."
        missing: "\"{name}\" מעתיק את הבחירות שלו מ-\"{source}\", אבל אין ספק בשם הזה.",
        // [Auto-translated] "\"{name}\" copies its choices from itself."
        self: "\"{name}\" מעתיק את הבחירות שלו מעצמו.",
        // [Auto-translated] "\"{name}\" copies its choices from \"{source}\" ({sourceType}), which provides neither choices nor an array of values."
        "not-a-source": "\"{name}\" מעתיק את הבחירות שלו מ-\"{source}\" ({sourceType}), שאינו מספק בחירות או מערך ערכים.",
        // [Auto-translated] "\"{name}\" reads {prop} \"{field}\" from \"{source}\", but {sourceType} \"{source}\" has no such {fieldNoun}."
        "missing-field": "\"{name}\" קורא {prop} \"{field}\" מ-\"{source}\", אך {sourceType} \"{source}\" אין כזה {fieldNoun}."
      },
      "choices/duplicate": {
        // [Auto-translated] "Another item of the {prop} of \"{name}\" already has the value {valueText} - the run time keeps both items."
        duplicateValue: "פריט נוסף ב-{prop} של \"{name}\" כבר מחזיק בערך {valueText} - זמן הריצה שומר על שני הפריטים.",
        // [Auto-translated] "The choices of \"{name}\" contain {valueText} while {toggleProp} is on - it collides with the built-in {specialItemText} item."
        specialItemCollision: "הבחירות של \"{name}\" מכילות את {valueText} בזמן ש-{toggleProp} מופעל – הוא מתנגש עם הפריט המובנה {specialItemText}."
      },
      "trigger/unknown-target": {
        // [Auto-translated] "The {trigger} trigger targets page \"{name}\", which does not exist."
        pageNotFound: "הטריגר {טריגר} מכוון לעמוד \"{name}\", שאינו קיים.",
        // [Auto-translated] "The {trigger} trigger targets \"{name}\", but {containerType} \"{root}\" has no {segmentNoun} \"{segment}\"."
        segmentNotFound: "הטריגר {trigger} מכוון ל-\"{name}\", אך {containerType} \"{root}\" אינו מכיל {segmentNoun} \"{segment}\".",
        // [Auto-translated] "The {trigger} trigger {verb} \"{name}\", but no {kindText} with that name exists."
        rootNotFound: "הטריגר {trigger} {verb} \"{name}\", אבל אין {kindText} עם השם הזה."
      },
      "trigger/unknown-type": {
        // [Auto-translated] "The trigger type \"{type}\" is not known."
        unknownType: "סוג הטריגר \"{type}\" אינו ידוע.",
        // [Auto-translated] "The trigger has no type."
        noType: "לטריגר אין סוג."
      },
      "validator/unknown-type": {
        // [Auto-translated] "The validator type \"{type}\" of \"{name}\" is not known."
        unknownType: "סוג האימות \"{type}\" של \"{name}\" אינו ידוע.",
        // [Auto-translated] "A validator of \"{name}\" has no type."
        noType: "למאמת של \"{name}\" אין סוג."
      },
      "validator/dead": {
        // [Auto-translated] "The {validatorType} validator of \"{name}\" {effectText}: {causeText} ({questionType})."
        wrongValueShape: "המאמת {validatorType} של \"{name}\" {effectText}: {causeText} ({questionType}).",
        // [Auto-translated] "The {validatorType} validator of \"{name}\" requires at least {min} and at most {max} - no answer satisfies it."
        minAboveMax: "המאמת {validatorType} של \"{name}\" דורש לפחות {min} ולכל היותר {max} - אף תשובה לא עונה עליו.",
        // [Auto-translated] "The answercount validator of \"{name}\" requires at least {minCount} answers, above the {selectable} choices that can be selected together."
        minCountAboveChoices: "מאמת מספר התשובות של \"{name}\" דורש לפחות {minCount} תשובות, מעל הבחירות {הניתנות לבחירה} שניתן לבחור יחד.",
        // [Auto-translated] "The regex validator of \"{name}\" has a pattern the engine rejects: {error}."
        invalidRegex: "למאמת רגקס של \"{name}\" יש דפוס שהמנוע דוחה: {error}.",
        // [Auto-translated] "The expression validator of \"{name}\" has no expression, so it always passes."
        emptyExpression: "לאימות הביטוי של \"{name}\" אין ביטוי, ולכן הוא תמיד עובר."
      },
      "element/count-contradiction": {
        // [Auto-translated] "The {minProp} of \"{name}\" is {min}, above its {maxProp} of {max} - the run time silently adjusts one of them."
        minAboveMax: "ה-{minProp} של \"{name}\" הוא {min}, מעל ה-{maxProp} של {max} - זמן הריצה מתאים בשקט אחד מהם.",
        // [Auto-translated] "The {countProp} of \"{name}\" is {count}, {direction} its {boundProp} of {bound} - the run time clamps it."
        countOutOfBounds: "ה-{countProp} של \"{name}\" הוא {count}, {direction} ה-{boundProp} של {bound} - זמן הריצה עוצר אותו.",
        // [Auto-translated] "The {stepProp} of \"{name}\" is {step}, but the range it steps through ({minProp}..{maxProp}) spans only {range} - the run time clamps it."
        stepAboveRange: "ה-{stepProp} של \"{name}\" הוא {step}, אבל הטווח שהוא עובר דרכו ({minProp}.. {maxProp}}) משתרע רק על {range} - זמן הריצה מגדיר אותו.",
        // [Auto-translated] "The minSelectedChoices of \"{name}\" is {min}, above the {selectable} choices that can be selected together - the question can never be answered."
        minAboveChoicesCount: "ה-minSelectedChoices של \"{name}\" הוא {min}, מעל הבחירות {selectable} שניתן לבחור יחד – השאלה לעולם לא ניתנת לתשובה."
      },
      "element/never-visible": {
        // [Auto-translated] "\"{name}\" can never become visible: its visibleIf reads {reads}, which {deadClause}, so the condition never holds."
        dependsOnDeadValue: "\"{name}\" לעולם לא יכול להפוך לגלוי: הוא visibleIf קורא {reads}, שזה {deadClause}, ולכן התנאי לעולם לא מתקיים."
      },
      "mask/mismatch": {
        // [Auto-translated] "The maskType \"{maskType}\" of \"{name}\" is not a known mask - the run time falls back to no mask at all."
        unknownMaskType: "סוג המסכה \"{maskType}\" של \"{name}\" אינו מסכה ידועה - זמן הריצה חוזר ל-0 mask כלל.",
        // [Auto-translated] "The maskSettings of \"{name}\" set \"{key}\", which is not a property of the \"{maskType}\" mask - the run time drops it silently."
        unknownSettingsKey: "הגדרות ה-mask של \"{name}\" מגדירות את \"{key}\", שאינה תכונה של המסכה \"{maskType}\" - זמן הריצה יורד אותה בשקט.",
        // [Auto-translated] "The maskSettings of \"{name}\" are set without a maskType - the run time keeps only \"saveMaskedValue\" and drops the rest."
        settingsWithoutMask: "הגדרות ה-mask של \"{name}\" מוגדרות ללא סוג מסקה - זמן הריצה שומר רק על \"saveMaskedValue\" ומשאיר את השאר.",
        // [Auto-translated] "The {maskType} mask of \"{name}\" applies to no input: inputType \"{inputType}\" is masked only for text and tel."
        maskInertForInputType: "המסכה {maskType} של \"{name}\" חלה על אף קלט: inputType \"{inputType}\" מוסווה רק לטקסט ו-tel.",
        // [Auto-translated] "The datetime mask of \"{name}\" sets min/max without a pattern - the bounds apply to the pattern's date parts, so without one they do nothing."
        minMaxWithoutPattern: "מסכת datetime של \"{name}\" קובעת מינימום/מקסימום ללא תבנית - הגבולות חלים על חלקי התאריך של התבנית, כך שבלעדיו הם לא עושים כלום.",
        // [Auto-translated] "The {maskType} mask of \"{name}\" allows at least {min} and at most {max} - no value satisfies it."
        minAboveMax: "המסכה {maskType} של \"{name}\" מאפשרת לפחות {min} ולכל היותר {max} - אין ערך שמספק אותה."
      },
      "page/empty": {
        // [Auto-translated] "The dynamic panel \"{name}\" has an empty template - its panels have nothing to render."
        emptyTemplate: "הפאנל הדינמי \"{name}\" כולל תבנית ריקה - הפאנלים שלו לא מציגים כלום.",
        // [Auto-translated] "The {kindText} \"{name}\" has no elements."
        noElements: "ל-{kindText} \"{name}\" אין אלמנטים.",
        // [Auto-translated] "The {kindText} \"{name}\" has no elements that can ever render - every element is hidden, guarded by a condition that never holds, or empty."
        noRenderableElements: "ה-{kindText} \"{name}\" אינו מכיל אלמנטים שיכולים להציג אי פעם – כל אלמנט מוסתר, מוגן על ידי תנאי שלעולם לא מתקיים, או ריק.",
        // [Auto-translated] "The detail elements of \"{name}\" are never shown: its detailPanelMode is \"none\", which is the default."
        detailElementsHidden: "אלמנטים של הפרטים ב-\"{name}\" לעולם לא מוצגים: ה-detailPanelMode שלו הוא \"none\", שהוא ברירת המחדל."
      }
    },
    // Clauses appended to a base message, in this order
    suffixes: {
      // [Auto-translated] "Position: {0}."
      atPosition: "מיקום: {0}.", // {0} character offset
      // [Auto-translated] "It was built from the legacy name, operator and value properties of the trigger."
      fromLegacyTrigger: "היא נבנתה על שם הישן, תכונות האופרטור והערך של הטריגר.",
      // [Auto-translated] "Inside: {0}."
      inScope: "בפנים: {0}.", // {0} name of the namespace
      // [Auto-translated] "Did you mean \"{0}\"?"
      didYouMean: "התכוונת ל\"{0}\"?",
      // [Auto-translated] "If it is a custom component, pass its definition to the linter to enable full analysis."
      customComponentHint: "אם מדובר ברכיב מותאם אישית, העבר את ההגדרה שלו לליינטר כדי לאפשר ניתוח מלא.",
      // [Auto-translated] "Register the function before linting, or list it in the linter options."
      registerFunctionHint: "רשמו את הפונקציה לפני הפיזור, או רשמו אותה באפשרויות הלינטר.",
      // [Auto-translated] "A misspelled type is silently dropped at run time, and a custom trigger is not covered by the target and cycle checks."
      triggerTypeDroppedHint: "סוג שנכון באיות נופל בשקט בזמן הריצה, וטריגר מותאם אישית לא מכוסה על ידי בדיקות המטרה והמחזור.",
      // [Auto-translated] "If it is a variable set at run time, list it in the linter options."
      knownVariablesHint: "אם זה משתנה שמוגדר בזמן ריצה, רשום אותו באפשרויות הלינט.",
      // [Auto-translated] "The loop may be unreachable if the trigger conditions never hold together - verify the expressions."
      loopMayBeUnreachable: "הלולאה עלולה להיות בלתי ניתנת להשגה אם תנאי הטריגר לעולם לא יחזיקו יחד - בדוק את הביטויים.",
      // [Auto-translated] "A defaultValueExpression applies only until its question is answered."
      defaultValueExpressionNote: "ValueExpression ברירת מחדל חל רק עד שהשאלה שלו נענתה.",
      // [Auto-translated] "In expression: {0}"
      inExpression: "בביטוי: {0}", // {0} the expression the defect was found in
      // [Auto-translated] "Referenced in bindings."
      inBindings: "מוזכר ב-bindings.",
      // [Auto-translated] "Referenced in the choicesByUrl {0}."
      inChoicesByUrl: "מוזכר ב-choicesByUrl {0}.", // {0} the url or the path property
      // [Auto-translated] "Referenced in the \"{0}\" text."
      inText: "מוזכר בטקסט \"{0}\".", // {0} the localizable property the text belongs to
      // [Auto-translated] "{0}() reads that name from every entry of {1} \"{2}\"."
      functionArgInContainer: "{0} () קורא את השם הזה מכל רשומה של {1} \"{2}\".",
      // [Auto-translated] "The {0}() argument names no question, panel or page."
      functionArgStandalone: "הטיעון {0}() אינו מזכיר שאלה, פאנל או עמוד.",
      // [Auto-translated] "The deserializer drops a key it does not know."
      deserializerDropsKey: "הדסריאלייזר מפיל מפתח שהוא לא מכיר.",
      // [Auto-translated] "The deserializer drops a validator it cannot resolve, so nothing validates."
      validatorDroppedHint: "הדהסריאלייזר מפיל מאמת שהוא לא יכול לפתור, אז שום דבר לא מאמת.",
      // [Auto-translated] "The inputType is \"{0}\"."
      validatorInputType: "ה-inputType הוא \"{0}\".",
      // [Auto-translated] "It is the data key of \"{0}\"."
      dataKeyOwner: "זהו מפתח הנתונים של \"{0}\"." // {0} the element that answers under it
    },
    // The facts a contradiction rests on. {ref} is a reference as an expression writes it,
    facts: {
      // [Auto-translated] ", "
      separator: ",",
      // [Auto-translated] " and "
      and: "ו",
      // [Auto-translated] "{ref} is always {value}"
      constant: "{ref} הוא תמיד {value}",
      // [Auto-translated] "{ref} is {bounds}"
      range: "{ref} הוא {bounds}",
      // [Auto-translated] "at least {0}"
      atLeast: "לפחות {0}",
      // [Auto-translated] "at most {0}"
      atMost: "לכל היותר {0}",
      conflict: {
        // [Auto-translated] "{ref} cannot be both {values}"
        equalValues: "{ref} לא יכולים להיות שני {ערכים}",
        // [Auto-translated] "{ref} cannot be {value} and not be it"
        equalAndNotEqual: "{ref} לא יכול להיות {value} ולא להיות זה",
        // [Auto-translated] "{ref} cannot be empty and be {value}"
        emptyAndValue: "{ref} לא יכול להיות ריק ולהיות {value}",
        // [Auto-translated] "{ref} cannot be empty and not empty"
        emptyAndNotEmpty: "{ref} לא יכול להיות ריק ולא ריק",
        // [Auto-translated] "{ref} cannot be above {min} and below {max}"
        impossibleBounds: "{ref} לא יכול להיות מעל {min} ומתחת ל-{max}",
        // [Auto-translated] "{ref} is asked to be one of no value at all"
        emptySet: "{ref} מתבקש להיות אחד חסר ערך כלל"
      }
    },
    // Scope hints of reference/unknown. {0} is the expression variable the hint is about.
    hints: {
      // [Auto-translated] "\"{0}.\" references are only available inside a matrix cell or a matrix detail panel."
      rowScopePrefix: "הפניות \"{0}.\" זמינות רק בתוך תא מטריצה או לוח פרטי מטריצה.",
      // [Auto-translated] "\"{0}\" is only available inside a matrix cell or a matrix detail panel."
      rowScopeStandalone: "\"{0}\" זמין רק בתוך תא מטריצה או פאנל פרטי מטריצה.",
      // [Auto-translated] "\"{0}.\" references are only available inside a dynamic panel or a panel container."
      panelScopePrefix: "הפניות ל\"{0}.\" זמינות רק בתוך לוח דינמי או מיכל פאנל.",
      // [Auto-translated] "\"{0}.\" references are only available inside a dynamic panel."
      panelSiblingPrefix: "הפניות \"{0}.\" זמינות רק בתוך פאנל דינמי.",
      // [Auto-translated] "\"{0}\" is only available inside a dynamic panel."
      panelStandalone: "\"{0}\" זמין רק בתוך לוח דינמי.",
      // [Auto-translated] "\"{0}\" is only available inside choice, row and column conditions."
      itemScope: "\"{0}\" זמין רק בתוך תנאי בחירה, שורה ועמודה.",
      // [Auto-translated] "\"{0}.\" references are only available inside a composite question."
      compositeScopePrefix: "הפניות \"{0}.\" זמינות רק בתוך שאלה מורכבת.",
      // [Auto-translated] "\"{0}\" is a column of this matrix - reference it with the row prefix."
      matrixColumn: "\"{0}\" היא עמודה במטריצה זו - יש להתייחס אליה עם קידומת השורה.",
      // [Auto-translated] "\"{0}\" is a question of this dynamic panel - reference it with the panel prefix."
      panelQuestion: "\"{0}\" היא שאלה של הפאנל הדינמי הזה - התייחס אליו עם קידומת הפאנל."
    },
    // Prose the linter reports as a "suggestion" instead of an identifier
    suggestions: {
      // [Auto-translated] "Set inputType: \"number\" on \"{0}\" if it collects numbers."
      setNumberInputType: "הגדר סוג input: \"number\" על \"{0}\" אם הוא אוסף מספרים.",
      // [Auto-translated] "Use \"contains\" or \"anyof\" for multi-select values."
      useContainsOrAnyof: "השתמשו ב\"contains\" או \"anyof\" לערכים עם בחירה מרובה."
    },
    // Terms the linter splices into a message as a raw code identifier
    terms: {
      containerKind: {
        // [Auto-translated] "page"
        page: "עמוד",
        // [Auto-translated] "panel"
        panel: "פאנל"
      },
      // which of the three name properties shadows a built-in variable
      nameKind: {
        // [Auto-translated] "name"
        name: "שם",
        // [Auto-translated] "valueName"
        valueName: "valueName",
        // [Auto-translated] "name"
        calculatedValue: "שם"
      },
      // the owner of a shadowed name, when the finding carries no element type
      nameOwner: {
        // [Auto-translated] "calculated value"
        calculatedValue: "ערך מחושב",
        // [Auto-translated] "element"
        default: "יסוד"
      },
      // the owner of a property, when the JSON gives it no name of its own
      owner: {
        // [Auto-translated] "the survey"
        survey: "הסקר",
        // [Auto-translated] "the {0}"
        className: "{0}"
      },
      specialItem: {
        // [Auto-translated] "Other"
        other: "אחר",
        // [Auto-translated] "None"
        none: "אין",
        // [Auto-translated] "Refuse to answer"
        refuse: "לסרב לענות",
        // [Auto-translated] "Don't know"
        dontknow: "לא יודע"
      },
      deadValidatorEffect: {
        // [Auto-translated] "never fires"
        neverFires: "לעולם לא אש",
        // [Auto-translated] "rejects every answer"
        rejectsEveryAnswer: "דוחה כל תשובה",
        // [Auto-translated] "cannot validate"
        default: "לא ניתן לאמת"
      },
      // what the answer's shape does to the validator
      deadValidatorCause: {
        // [Auto-translated] "the question holds no answer to validate"
        noAnswer: "השאלה אינה נושאת תשובה כדי לאמת",
        // [Auto-translated] "a length is read off a text value, and this answer has none"
        textLength: "אורך נקרא מתוך ערך טקסט, ולתשובה זו אין ערך",
        // [Auto-translated] "the answer is not a number and never can be"
        notANumber: "התשובה אינה מספר ולעולם לא יכולה להיות",
        // [Auto-translated] "a number never matches an e-mail address"
        numberVsEmail: "מספר לעולם לא תואם כתובת דוא\"ל",
        // [Auto-translated] "the answer is not a list of values"
        notAList: "התשובה אינה רשימת ערכים",
        // [Auto-translated] "the answer is not a value it can check"
        default: "התשובה אינה ערך שהוא יכול לבדוק"
      },
      valueShape: {
        // [Auto-translated] "an array"
        array: "מערך",
        // [Auto-translated] "an object"
        object: "אובייקט"
      },
      // the shapes the two ends of a copyvalue trigger hold
      copyShape: {
        // [Auto-translated] "an array of selected values"
        array: "מערך של ערכים נבחרים",
        // [Auto-translated] "a single value"
        scalar: "ערך יחיד",
        // [Auto-translated] "a value"
        default: "ערך"
      },
      // whether a row/panel count falls below its minimum or above its maximum
      countDirection: {
        // [Auto-translated] "below"
        below: "להלן",
        // [Auto-translated] "above"
        above: "למעלה"
      },
      // the verb of element/never-visible, by the number of questions the condition reads
      deadValueClause: {
        // [Auto-translated] "is never visible and never receives a value"
        one: "לעולם אינה נראית ואינה מקבלת ערך",
        // [Auto-translated] "are never visible and never receive a value"
        many: "לעולם לא נראים ואף פעם לא מקבלים ערך"
      },
      targetKind: {
        // [Auto-translated] "question"
        question: "שאלה",
        // [Auto-translated] "question or variable"
        questionvalue: "שאלה או משתנה",
        // [Auto-translated] "page"
        page: "עמוד"
      },
      triggerVerb: {
        // [Auto-translated] "reads"
        fromName: "קריאה",
        // [Auto-translated] "navigates to"
        gotoName: "מנווט ל",
        // [Auto-translated] "sets"
        default: "קבוצות"
      },
      // no "operator" table on purpose: an operator stays the identifier the JSON spells,
      sourceField: {
        // [Auto-translated] "template question"
        paneldynamic: "שאלה על התבנית",
        // [Auto-translated] "column"
        default: "עמודה"
      },
      // the noun for the container level an unknown trigger-target segment belongs to
      segmentNoun: {
        // [Auto-translated] "template question"
        paneldynamic: "שאלה על התבנית",
        // [Auto-translated] "column"
        matrixdynamic: "עמודה",
        // [Auto-translated] "item"
        multipletext: "פריט",
        // [Auto-translated] "row"
        matrix: "שורה",
        // [Auto-translated] "row"
        matrixdropdownRow: "שורה",
        // [Auto-translated] "column"
        matrixdropdownColumn: "עמודה",
        // [Auto-translated] "field"
        default: "שדה"
      }
    }
  },
  // Localized default JSON for new questions (see settings.toolbox.defaultJSON)
  defaultJson: {
    choices: [
      {
        value: "item1",
        // "Item 1"
        text: "פריט 1"
      },
      {
        value: "item2",
        // "Item 2"
        text: "פריט 2"
      },
      {
        value: "item3",
        // "Item 3"
        text: "פריט 3"
      }
    ],
    columns: [
      {
        value: "column1",
        // "Column 1"
        text: "טור 1"
      },
      {
        value: "column2",
        // "Column 2"
        text: "טור 2"
      },
      {
        value: "column3",
        // "Column 3"
        text: "טור 3"
      }
    ],
    rows: [
      {
        value: "row1",
        // "Row 1"
        text: "שׁוּרָה 1"
      },
      {
        value: "row2",
        // "Row 2"
        text: "שׁוּרָה 2"
      }
    ],
    matrixColumns: [
      {
        name: "column1",
        // "Column 1"
        title: "טור 1"
      },
      {
        name: "column2",
        // "Column 2"
        title: "טור 2"
      },
      {
        name: "column3",
        // "Column 3"
        title: "טור 3"
      }
    ]
  }
};

setupLocale({ localeCode: "he", strings: hebrewStrings });