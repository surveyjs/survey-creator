import { setupLocale } from "survey-creator-core";

export var grStrings = {
  // survey templates
  survey: {
    // "Duplicate"
    duplicate: "Διπλασιασμός"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Προεπισκόπηση",
    // "Themes"
    theme: "Θέματα",
    // "Translations"
    translation: "Μεταφράσεις",
    // "Designer"
    designer: "Σχεδίαση",
    // "JSON Editor"
    json: "Επεξεργασία JSON",
    // "Logic"
    logic: "Λογική"
  },
  // Question types
  qt: {
    // "Default"
    default: "Προεπιλογή",
    // "Checkboxes"
    checkbox: "Πολλαπλές Επιλογές",
    // "Long Text"
    comment: "Κείμενο Πολλών Γραμμών",
    // "Image Picker"
    imagepicker: "Επιλογή Εικόνας",
    // "Ranking"
    ranking: "Κατάταξη",
    // "Image"
    image: "Εικόνα",
    // "Dropdown"
    dropdown: "Αναδυόμενο Μενού",
    // "Multi-Select Dropdown"
    tagbox: "Πολλαπλή επίλογή (Dropdown)",
    // "File Upload"
    file: "Μεταφόρτωση Αρχείου",
    // [Auto-translated] "HTML"
    html: "HTML",
    // "Single-Select Matrix"
    matrix: "Μήτρα Μονής Επιλογής",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrix Πολλαπλής Επιλογής",
    // "Dynamic Matrix"
    matrixdynamic: "Δυναμικό Matrix",
    // "Multiple Textboxes"
    multipletext: "Πολλαπλά Πεδία Κειμένου",
    // "Panel"
    panel: "Πίνακας",
    // "Dynamic Panel"
    paneldynamic: "Δυναμικός Πίνακας",
    // "Radio Button Group"
    radiogroup: "Ομάδα Επιλογών (Radio)",
    // "Rating Scale"
    rating: "Κλίμακα Αξιολόγησης",
    // [Auto-translated] "Slider"
    slider: "Ρυθμιστικό",
    // "Single-Line Input"
    text: "Μονής Γραμμής",
    // "Yes/No (Boolean)"
    boolean: "Ναι/Όχι (Boolean)",
    // "Expression (read-only)"
    expression: "Έκφραση (μόνο για ανάγνωση)",
    // "Signature"
    signaturepad: "Υπογραφή",
    // "Button Group"
    buttongroup: "Ομάδα Κουμπιών"
  },
  toolboxCategories: {
    // "General"
    general: "Γενικά",
    // "Choice Questions"
    choice: "Ερωτήσεις Επιλογής",
    // "Text Input Questions"
    text: "Ερωτήσεις Κειμένου",
    // "Containers"
    containers: "Ομαδοποιήσεις",
    // "Matrix Questions"
    matrix: "Ερωτήσεις Πίνακα",
    // "Misc"
    misc: "Διάφορα"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Προεπιλογή ({0})",
    // "Settings"
    settings: "Ρυθμίσεις",
    // "Open settings"
    settingsTooltip: "Άνοιγμα ρυθμίσεων",
    // "Survey Settings"
    surveySettings: "Ρυθμίσεις Έρευνας",
    // "Survey settings"
    surveySettingsTooltip: "Ρυθμίσεις έρευνας",
    // "Theme Settings"
    themeSettings: "Ρυθμίσεις Θέματος",
    // "Theme settings"
    themeSettingsTooltip: "Ρυθμίσεις θέματος",
    // "Creator Settings"
    creatorSettingTitle: "Ρυθμίσεις Δημιουργού",
    // "Show Panel"
    showPanel: "Εμφάνιση Πίνακα",
    // "Hide Panel"
    hidePanel: "Απόκρυψη Πίνακα",
    // "Select previous"
    prevSelected: "Επιλογή προηγούμενου",
    // "Select next"
    nextSelected: "Επιλογή επόμενου",
    // "Focus previous"
    prevFocus: "Εστίαση στο προηγούμενο",
    // "Focus next"
    nextFocus: "Εστίαση στο επόμενο",
    // "Survey"
    surveyTypeName: "Έρευνα",
    // "Page"
    pageTypeName: "Σελίδα",
    // "page"
    newPageName: "σελίδα",
    // "question"
    newQuestionName: "ερώτηση",
    // "panel"
    newPanelName: "πίνακας",
    // "Preview Survey Again"
    testSurveyAgain: "Ξαναπροεπισκόπηση Έρευνας",
    // "You had to navigate to"
    navigateToMsg: "Έπρεπε να μεταβείτε στο",
    // "Save Survey"
    saveSurvey: "Αποθήκευση Έρευνας",
    // "Save Survey"
    saveSurveyTooltip: "Αποθήκευση Έρευνας",
    // "Save Theme"
    saveTheme: "Αποθήκευση Θέματος",
    // "Save Theme"
    saveThemeTooltip: "Αποθήκευση Θέματος",
    // "Hide errors"
    jsonHideErrors: "Απόκρυψη σφαλμάτων",
    // "Show errors"
    jsonShowErrors: "Εμφάνιση σφαλμάτων",
    // [Auto-translated] "Fix error"
    jsonFixError: "Διόρθωση σφάλματος",
    // [Auto-translated] "The survey JSON must be an object."
    jsonRootNotObject: "Το JSON της έρευνας πρέπει να είναι αντικείμενο.",
    // "Undo"
    undo: "Αναίρεση",
    // "Redo"
    redo: "Επανάληψη",
    // "Expand"
    expandTooltip: "Ανάπτυξη",
    // "Collapse"
    collapseTooltip: "Σύμπτυξη",
    // "Expand All"
    expandAllTooltip: "Ανάπτυξη Όλων",
    // "Collapse All"
    collapseAllTooltip: "Σύμπτυξη Όλων",
    // "Zoom In"
    zoomInTooltip: "Μεγέθυνση",
    // "Zoom to 100%"
    zoom100Tooltip: "Ζουμ στο 100%",
    // "Zoom Out"
    zoomOutTooltip: "Σμίκρυνση",
    // "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Κλείδωμα κατάστασης ανάπτυξης/σύμπτυξης ερωτήσεων",
    // "Show more"
    showMoreChoices: "Περισσότερες επιλογές",
    // "Show less"
    showLessChoices: "Λιγότερες επιλογές",
    // [Auto-translated] "Unknown function: \"{0}\"."
    expressionUnknownFunction: "Άγνωστη λειτουργία: \"{0}\".",
    // [Auto-translated] "Unknown functions: \"{0}\"."
    expressionUnknownFunctions: "Άγνωστες λειτουργίες: \"{0}\".",
    // [Auto-translated] "Unknown variable: \"{0}\"."
    expressionUnknownVariable: "Άγνωστη μεταβλητή: \"{0}\".",
    // [Auto-translated] "Unknown variables: \"{0}\"."
    expressionUnknownVariables: "Άγνωστες μεταβλητές: \"{0}\".",
    // [Auto-translated] "Syntax error."
    expressionSyntaxError: "Συντακτικό σφάλμα.",
    // [Auto-translated] "Semantic error."
    expressionSemanticsError: "Σημασιολογικό σφάλμα.",
    // "Toolbox"
    toolbox: "Εργαλειοθήκη",
    // [Auto-translated] "Search"
    toolboxSearch: "Αναζήτηση",
    // "Type to search..."
    toolboxFilteredTextPlaceholder: "Πληκτρολογήστε για αναζήτηση...",
    // "No results found"
    toolboxNoResultsFound: "Δεν βρέθηκαν αποτελέσματα",
    // [Auto-translated] "No properties to display"
    propertyGridEmptySurveyText: "Δεν υπάρχουν ιδιότητες για εμφάνιση",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Πληκτρολογήστε για αναζήτηση...",
    // "No results found"
    propertyGridNoResultsFound: "Δεν βρέθηκαν αποτελέσματα",
    // "Start configuring your form"
    propertyGridPlaceholderTitle: "Ξεκινήστε να ρυθμίζετε τη φόρμα σας",
    // "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Κάντε κλικ σε ένα εικονίδιο κατηγορίας για να εξερευνήσετε τις ρυθμίσεις της έρευνας. Περισσότερες ρυθμίσεις θα είναι διαθέσιμες αφού προσθέσετε ένα στοιχείο έρευνας.",
    // "Survey Results "
    surveyResults: "Αποτελέσματα Έρευνας",
    // "As Table"
    surveyResultsTable: "Ως Πίνακας",
    // "As JSON"
    surveyResultsJson: "Ως JSON",
    // "Question Title"
    resultsTitle: "Τίτλος Ερώτησης",
    // "Question Name"
    resultsName: "Όνομα Ερώτησης",
    // "Answer Value"
    resultsValue: "Τιμή Απάντησης",
    // "Display Value"
    resultsDisplayValue: "Εμφανιζόμενη Τιμή",
    // "Modified"
    modified: "Τροποποιήθηκε",
    // "Saving"
    saving: "Αποθήκευση",
    // "Saved"
    saved: "Αποθηκεύτηκε",
    // "Error! Editor content is not saved."
    saveError: "Σφάλμα! Το περιεχόμενο δεν αποθηκεύτηκε.",
    // "Language Settings"
    translationPropertyGridTitle: "Ρυθμίσεις Γλώσσας",
    // "Theme Settings"
    themePropertyGridTitle: "Ρυθμίσεις Θέματος",
    // "Add Language"
    addLanguageTooltip: "Προσθήκη Γλώσσας",
    // "Languages"
    translationLanguages: "Γλώσσες",
    // "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Είστε σίγουροι ότι θέλετε να διαγράψετε όλες τις συμβολοσειρές για αυτή τη γλώσσα;",
    // "Select language to translate"
    translationAddLanguage: "Επιλογή γλώσσας για μετάφραση",
    // "All Strings"
    translationShowAllStrings: "Όλες οι Συμβολοσειρές",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Μόνο Χρησιμοποιούμενες Συμβολοσειρές",
    // "All Pages"
    translationShowAllPages: "Όλες οι Σελίδες",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Δεν υπάρχουν συμβολοσειρές προς μετάφραση. Αλλάξτε το φίλτρο.",
    // "Export to CSV"
    translationExportToSCVButton: "Εξαγωγή σε CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Εισαγωγή από CSV",
    // "Auto-translate All"
    translateUsigAI: "Αυτόματη μετάφραση όλων",
    // "Translate from: "
    translateUsigAIFrom: "Μετάφραση από: ",
    // [Auto-translated] "Translate remaining strings"
    translateRemainingStrings: "Μετάφραση υπόλοιπων συμβολοσειρών",
    // "Untranslated strings"
    translationDialogTitle: "Αμετάφραστες συμβολοσειρές",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Συγχώνευση {0} με την προεπιλεγμένη γλώσσα",
    // "Translation..."
    translationPlaceHolder: "Μετάφραση...",
    // "Source: "
    translationSource: "Πηγή: ",
    // "Target: "
    translationTarget: "Προορισμός: ",
    // [Auto-translated] "Source language"
    translationSourceLanguage: "Γλώσσα-πηγή",
    // [Auto-translated] "Target language"
    translationTargetLanguage: "Γλώσσα-στόχος",
    // [Auto-translated] "{0} of {1} strings translated"
    translationProgress: "{0} μεταφρασμένων συμβολοσειρών {1}",
    // [Auto-translated] "Are you certain you wish to delete all translated strings for the selected language?"
    translationClearProgress: "Είστε βέβαιοι ότι θέλετε να διαγράψετε όλες τις μεταφρασμένες συμβολοσειρές για την επιλεγμένη γλώσσα;",
    // [Auto-translated] "Form View"
    translationSideBySideViewForm: "Προβολή φόρμας",
    // [Auto-translated] "Grid View"
    translationSideBySideViewGrid: "Προβολή πλέγματος",
    // [Auto-translated] "Translate strings"
    translateStrings: "Μετάφραση συμβολοσειρών",
    // [Auto-translated] "Survey Strings"
    translationSurveyStrings: "Συμβολοσειρές έρευνας",
    // [Auto-translated] "No strings to translate"
    translationStateNothingToTranslate: "Δεν υπάρχουν συμβολοσειρές για μετάφραση",
    // [Auto-translated] "All strings are translated"
    translationStateAllTranslated: "Όλες οι συμβολοσειρές μεταφράζονται",
    // [Auto-translated] "{0} strings are not translated"
    translationStateUntranslated: "{0} συμβολοσειρές δεν μεταφράζονται",
    // "YouTube links are not supported."
    translationYouTubeNotSupported: "Οι συνδέσεις YouTube δεν υποστηρίζονται.",
    // "Export"
    themeExportButton: "Εξαγωγή",
    // "Import"
    themeImportButton: "Εισαγωγή",
    // "Export"
    surveyJsonExportButton: "Εξαγωγή",
    // "Import"
    surveyJsonImportButton: "Εισαγωγή",
    // "Copy to clipboard"
    surveyJsonCopyButton: "Αντιγραφή στο πρόχειρο",
    // "Reset theme settings to default"
    themeResetButton: "Επαναφορά θέματος",
    // "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Θέλετε σίγουρα να επαναφέρετε το θέμα; Όλες οι προσαρμογές θα χαθούν.",
    // "Yes, reset the theme"
    themeResetConfirmationOk: "Ναι, επαναφορά θέματος",
    // "Add Question"
    addNewQuestion: "Προσθήκη Ερώτησης",
    // "Select page..."
    selectPage: "Επιλέξτε σελίδα...",
    // "Choices are copied from"
    carryForwardChoicesCopied: "Οι επιλογές αντιγράφηκαν από",
    // "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Οι επιλογές φορτώθηκαν από υπηρεσία ιστού.",
    // "Go to settings"
    choicesLoadedFromWebLinkText: "Μετάβαση στις ρυθμίσεις",
    // "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Προεπισκόπηση επιλογών",
    // "HTML content will be here."
    htmlPlaceHolder: "Το περιεχόμενο HTML θα εμφανιστεί εδώ.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Σύρετε μια ερώτηση εδώ από την εργαλειοθήκη.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Η έρευνα είναι κενή. Σύρετε ένα στοιχείο ή πατήστε το παρακάτω κουμπί.",
    // "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Η σελίδα είναι κενή. Σύρετε ένα στοιχείο ή πατήστε το παρακάτω κουμπί.",
    // "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Σύρετε ή ανεβάστε μια εικόνα πατώντας παρακάτω.",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Πατήστε το κουμπί «Προσθήκη Ερώτησης» για να ξεκινήσετε.",
    // "Your form is empty"
    surveyPlaceholderTitle: "Η φόρμα σας είναι κενή",
    // "Your form is empty"
    surveyPlaceholderTitleMobile: "Η φόρμα σας είναι κενή",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Σύρετε ένα στοιχείο ή πατήστε το παρακάτω κουμπί.",
    // "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Σύρετε ένα στοιχείο ή πατήστε το παρακάτω κουμπί.",
    // "No preview"
    previewPlaceholderTitle: "Δεν υπάρχει προεπισκόπηση",
    // "No preview"
    previewPlaceholderTitleMobile: "Δεν υπάρχει προεπισκόπηση",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Η έρευνα δεν περιέχει ορατά στοιχεία.",
    // "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Η έρευνα δεν περιέχει ορατά στοιχεία.",
    // "No strings to translate"
    translationsPlaceholderTitle: "Δεν υπάρχουν συμβολοσειρές προς μετάφραση",
    // "No strings to translate"
    translationsPlaceholderTitleMobile: "Δεν υπάρχουν συμβολοσειρές προς μετάφραση",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Προσθέστε στοιχεία ή αλλάξτε το φίλτρο συμβολοσειρών.",
    // "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Προσθέστε στοιχεία ή αλλάξτε το φίλτρο συμβολοσειρών.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Πατήστε το κουμπί «Προσθήκη Ερώτησης» για να προσθέσετε νέο στοιχείο.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Πατήστε το κουμπί «Προσθήκη Ερώτησης» για να προσθέσετε νέο στοιχείο στον πίνακα.",
    // "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Πατήστε το παρακάτω κουμπί και επιλέξτε εικόνα προς αποστολή",
    // "Choose Image"
    imageChooseImage: "Επιλογή Εικόνας",
    // "Add {0}"
    addNewTypeQuestion: "Προσθήκη {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[ΛΟΓΟΤΥΠΟ]",
    // "Item "
    choices_Item: "Στοιχείο ",
    // "Select a file"
    selectFile: "Επιλέξτε αρχείο",
    // "Remove the file"
    removeFile: "Αφαίρεση αρχείου",
    lg: {
      // "Add New Rule"
      addNewItem: "Προσθήκη νέου κανόνα",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Δημιουργήστε έναν κανόνα για να προσαρμόσετε τη ροή του ερωτηματολογίου.",
      // "No logical rules"
      logicPlaceholderTitle: "Δεν υπάρχουν λογικοί κανόνες",
      // "No logical rules"
      logicPlaceholderTitleMobile: "Δεν υπάρχουν λογικοί κανόνες",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Δημιουργήστε έναν κανόνα για να προσαρμόσετε τη ροή του ερωτηματολογίου.",
      // "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Δημιουργήστε έναν κανόνα για να προσαρμόσετε τη ροή του ερωτηματολογίου.",
      // "Show/hide page"
      page_visibilityName: "Εμφάνιση/Απόκρυψη σελίδας",
      // "Enable/disable page"
      page_enableName: "Ενεργοποίηση/Απενεργοποίηση σελίδας",
      // "Make page required"
      page_requireName: "Η σελίδα να είναι υποχρεωτική",
      // "Show/hide panel"
      panel_visibilityName: "Εμφάνιση/Απόκρυψη πλαισίου",
      // "Enable/disable panel"
      panel_enableName: "Ενεργοποίηση/Απενεργοποίηση πλαισίου",
      // "Make panel required"
      panel_requireName: "Το πλαίσιο να είναι υποχρεωτικό",
      // "Show/hide question"
      question_visibilityName: "Εμφάνιση/Απόκρυψη ερώτησης",
      // "Enable/disable question"
      question_enableName: "Ενεργοποίηση/Απενεργοποίηση ερώτησης",
      // "Make question required"
      question_requireName: "Η ερώτηση να είναι υποχρεωτική",
      // "Reset question value"
      question_resetValueName: "Επαναφορά τιμής ερώτησης",
      // "Set question value"
      question_setValueName: "Ορισμός τιμής ερώτησης",
      // "Show/hide column"
      column_visibilityName: "Εμφάνιση/Απόκρυψη στήλης",
      // "Enable/disable column"
      column_enableName: "Ενεργοποίηση/Απενεργοποίηση στήλης",
      // "Make column required"
      column_requireName: "Η στήλη να είναι υποχρεωτική",
      // "Reset column value"
      column_resetValueName: "Επαναφορά τιμής στήλης",
      // "Set column value"
      column_setValueName: "Ορισμός τιμής στήλης",
      // "Complete survey"
      trigger_completeName: "Ολοκλήρωση ερωτηματολογίου",
      // "Set answer"
      trigger_setvalueName: "Ορισμός απάντησης",
      // "Copy answer"
      trigger_copyvalueName: "Αντιγραφή απάντησης",
      // "Skip to question"
      trigger_skipName: "Μετάβαση σε ερώτηση",
      // "Run expression"
      trigger_runExpressionName: "Εκτέλεση έκφρασης",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Ορισμός περιεχομένου σελίδας \"Ευχαριστούμε\"",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Η σελίδα γίνεται ορατή όταν η λογική έκφραση είναι αληθής. Διαφορετικά παραμένει κρυφή.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Το πλαίσιο γίνεται ορατό όταν η λογική έκφραση είναι αληθής. Διαφορετικά παραμένει κρυφό.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Το πλαίσιο και όλα τα στοιχεία του ενεργοποιούνται όταν η λογική έκφραση είναι αληθής. Διαφορετικά παραμένουν ανενεργά.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Η ερώτηση γίνεται ορατή όταν η λογική έκφραση είναι αληθής. Διαφορετικά παραμένει κρυφή.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Η ερώτηση ενεργοποιείται όταν η λογική έκφραση είναι αληθής. Διαφορετικά παραμένει ανενεργή.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Η ερώτηση γίνεται υποχρεωτική όταν η λογική έκφραση είναι αληθής.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Όταν η λογική έκφραση είναι αληθής, το ερωτηματολόγιο ολοκληρώνεται και εμφανίζεται η σελίδα \"Ευχαριστούμε\".",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Όταν οι τιμές των ερωτήσεων αλλάξουν και η έκφραση είναι αληθής, ορίζεται η τιμή στην επιλεγμένη ερώτηση.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Όταν η έκφραση είναι αληθής, αντιγράφεται η τιμή της επιλεγμένης ερώτησης σε μια άλλη.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Όταν η λογική έκφραση είναι αληθής, η φόρμα μεταβαίνει στην καθορισμένη ερώτηση.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Όταν η λογική έκφραση είναι αληθής, εκτελείται μια άλλη έκφραση και προαιρετικά η τιμή της μπορεί να αποδοθεί σε μια ερώτηση.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Εάν η λογική έκφραση είναι αληθής, η σελίδα \"Ευχαριστούμε\" εμφανίζει το καθορισμένο περιεχόμενο.",
      // "New rule"
      itemEmptyExpressionText: "Νέος κανόνας",
      // "make page {0} visible"
      page_visibilityText: "κάνε τη σελίδα {0} ορατή", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "κάνε το πλαίσιο {0} ορατό", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "κάνε το πλαίσιο {0} ενεργό", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "κάνε την ερώτηση {0} ορατή", // {0} question name
      // "make question {0} enable"
      question_enableText: "κάνε την ερώτηση {0} ενεργή", // {0} question name
      // "make question {0} required"
      question_requireText: "κάνε την ερώτηση {0} υποχρεωτική", // {0} question name
      // "reset value for question: {0}"
      question_resetValueText: "επαναφορά τιμής για την ερώτηση: {0}", // {0} question name.
      // "assign value: {1} to question: {0}"
      question_setValueText: "ορισμός τιμής: {1} στην ερώτηση: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "κάνε τη στήλη {0} της ερώτησης {1} ορατή", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "κάνε τη στήλη {0} της ερώτησης {1} ενεργή", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "κάνε τη στήλη {0} της ερώτησης {1} υποχρεωτική", // {0} column name, {1} question name
      // "reset cell value for column: {0}"
      column_resetValueText: "επαναφορά τιμής για τη στήλη: {0}", // {0} column name
      // "assign cell value: {1} to column: {0}"
      column_setValueText: "ορισμός τιμής: {1} για τη στήλη: {0}", // {0} column name and {1} setValueExpression
      // "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Μια έκφραση της οποίας το αποτέλεσμα θα αποδοθεί στην επιλεγμένη ερώτηση.",
      // [Auto-translated] "Enter a value..."
      calculatedValuePlaceholder: "Εισαγάγετε μια τιμή...",
      // "survey becomes completed"
      trigger_completeText: "το ερωτηματολόγιο ολοκληρώνεται",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "ορισμός τιμής {1} στην ερώτηση: {0}", // {0} question name, {1} setValue
      // "clear question value: {0}"
      trigger_setvalueEmptyText: "εκκαθάριση τιμής για την ερώτηση: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "αντιγραφή τιμής από την ερώτηση {1} στην ερώτηση: {0}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "μετάβαση στην ερώτηση {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "εκτέλεση έκφρασης: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " και απόδοση του αποτελέσματος στην ερώτηση: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "εμφάνιση προσαρμοσμένου κειμένου στη σελίδα \"Ευχαριστούμε\"",
      // "All Questions"
      showAllQuestions: "Όλες οι Ερωτήσεις",
      // "All Action Types"
      showAllActionTypes: "Όλοι οι Τύποι Ενεργειών",
      // "Condition(s)"
      conditions: "Συνθήκη(ες)",
      // "Action(s)"
      actions: "Ενέργεια(ες)",
      // "Define action(s)"
      actionsEditorTitle: "Ορισμός ενεργειών",
      // "Delete Action"
      deleteAction: "Διαγραφή ενέργειας",
      // "Add Action"
      addNewAction: "Προσθήκη ενέργειας",
      // "Select action..."
      selectedActionCaption: "Επιλέξτε ενέργεια...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Η έκφραση είναι κενή ή μη έγκυρη. Παρακαλώ διορθώστε την.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Παρακαλώ διορθώστε τα προβλήματα στις ενέργειες.",
      // "Logical rules are incomplete"
      uncompletedRule_title: "Οι λογικοί κανόνες είναι ημιτελείς",
      // "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Δεν έχετε ολοκληρώσει κάποιους από τους λογικούς κανόνες. Αν φύγετε τώρα, οι αλλαγές θα χαθούν. Θέλετε να φύγετε χωρίς να αποθηκεύσετε;",
      // "Yes"
      uncompletedRule_apply: "Ναι",
      // "No, I want to complete the rules"
      uncompletedRule_cancel: "Όχι, θέλω να ολοκληρώσω τους κανόνες"
    }
  },
  // Host application variables
  vp: {
    // [Auto-translated] "Variable preset"
    selectorTitle: "Μεταβλητή προεπιλογή",
    // [Auto-translated] "None"
    noPreset: "Κανένας",
    // [Auto-translated] "View variable values"
    view: "Προβολή τιμών μεταβλητών",
    // [Auto-translated] "Variable values"
    viewTitle: "Μεταβλητές τιμές",
    // [Auto-translated] "Manage presets"
    edit: "Διαχείριση προεπιλογών",
    // [Auto-translated] "Variable Presets"
    editorTitle: "Μεταβλητές προεπιλογές",
    // [Auto-translated] "Preset"
    presetName: "Προεπιλογή",
    // [Auto-translated] "Description"
    presetDescription: "Περιγραφή",
    // [Auto-translated] "Add preset"
    addPreset: "Προσθήκη προεπιλογής",
    // [Auto-translated] "New preset"
    newPresetName: "Νέα προεπιλογή",
    // [Auto-translated] "Delete preset"
    deletePreset: "Διαγραφή προεπιλογής",
    // [Auto-translated] "Back"
    back: "Πίσω",
    // [Auto-translated] "A preset with this name already exists"
    presetNameIsNotUnique: "Υπάρχει ήδη μια προεπιλογή με αυτό το όνομα",
    // [Auto-translated] "Enter a preset name"
    presetNameIsEmpty: "Εισαγάγετε ένα προκαθορισμένο όνομα",
    // [Auto-translated] "Preset"
    listNameColumn: "Προεπιλογή",
    // [Auto-translated] "Description"
    listDescriptionColumn: "Περιγραφή"
  },
  // Property Editors
  pe: {
    panel: {
      // "Panel name"
      name: "Όνομα πλαισίου",
      // "Panel title"
      title: "Τίτλος πλαισίου",
      // "Panel description"
      description: "Περιγραφή πλαισίου",
      // "Make the panel visible if"
      visibleIf: "Εμφάνιση πλαισίου εάν",
      // "Make the panel required if"
      requiredIf: "Υποχρεωτικό πλαίσιο εάν",
      // "Question order within the panel"
      questionOrder: "Σειρά ερωτήσεων στο πλαίσιο",
      // "Move the panel to page"
      page: "Μετακίνηση πλαισίου στη σελίδα",
      // "Display the panel on a new line"
      startWithNewLine: "Εμφάνιση πλαισίου σε νέα γραμμή",
      // "Panel collapse state"
      state: "Κατάσταση σύμπτυξης πλαισίου",
      // "Inline panel width"
      width: "Πλάτος πλαισίου σε σειρά",
      // "Minimum panel width"
      minWidth: "Ελάχιστο πλάτος πλαισίου",
      // "Maximum panel width"
      maxWidth: "Μέγιστο πλάτος πλαισίου",
      // "Number this panel"
      showNumber: "Αρίθμηση πλαισίου"
    },
    panellayoutcolumn: {
      // "Effective width, %"
      effectiveWidth: "Πραγματικό πλάτος, %",
      // "Question title width, px"
      questionTitleWidth: "Πλάτος τίτλου ερώτησης, px"
    },
    paneldynamic: {
      // "Panel name"
      name: "Όνομα πλαισίου",
      // "Panel title"
      title: "Τίτλος πλαισίου",
      // "Panel description"
      description: "Περιγραφή πλαισίου",
      // [Auto-translated] "Entry display mode"
      displayMode: "Λειτουργία εμφάνισης εισόδου",
      // "Make the panel visible if"
      visibleIf: "Εμφάνιση πλαισίου εάν",
      // "Make the panel required if"
      requiredIf: "Υποχρεωτικό πλαίσιο εάν",
      // "Move the panel to page"
      page: "Μετακίνηση πλαισίου στη σελίδα",
      // "Display the panel on a new line"
      startWithNewLine: "Εμφάνιση πλαισίου σε νέα γραμμή",
      // "Panel collapse state"
      state: "Κατάσταση σύμπτυξης πλαισίου",
      // "Inline panel width"
      width: "Πλάτος πλαισίου σε σειρά",
      // "Minimum panel width"
      minWidth: "Ελάχιστο πλάτος πλαισίου",
      // "Maximum panel width"
      maxWidth: "Μέγιστο πλάτος πλαισίου",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Επιβεβαίωση κατάργησης καταχώρισης",
      // "Entry description pattern"
      templateDescription: "Πρότυπο περιγραφής πλαισίου",
      // "Entry title pattern"
      templateTitle: "Πρότυπο τίτλου πλαισίου",
      // "Empty panel text"
      noEntriesText: "Κείμενο κενού πλαισίου",
      // "Tab title pattern"
      templateTabTitle: "Πρότυπο τίτλου καρτέλας",
      // "Tab title placeholder"
      tabTitlePlaceholder: "Υπόδειγμα τίτλου καρτέλας",
      // "Make an individual entry visible if"
      templateVisibleIf: "Εμφάνιση μεμονωμένου πλαισίου εάν",
      // "Number the panel"
      showNumber: "Αρίθμηση πλαισίου",
      // "Panel title alignment"
      titleLocation: "Στοίχιση τίτλου πλαισίου",
      // "Panel description alignment"
      descriptionLocation: "Στοίχιση περιγραφής πλαισίου",
      // "Question title alignment"
      templateQuestionTitleLocation: "Στοίχιση τίτλου ερώτησης",
      // "Question title width"
      templateQuestionTitleWidth: "Πλάτος τίτλου ερώτησης",
      // "Error message alignment"
      templateErrorLocation: "Στοίχιση μηνύματος σφάλματος",
      // "New entry location"
      newPanelPosition: "Θέση νέου πλαισίου",
      // "Prevent duplicate responses in the following question"
      keyName: "Αποτροπή διπλών απαντήσεων στην εξής ερώτηση"
    },
    question: {
      // "Question name"
      name: "Όνομα ερώτησης",
      // "Question title"
      title: "Τίτλος ερώτησης",
      // "Question description"
      description: "Περιγραφή ερώτησης",
      // [Auto-translated] "Show the title and description"
      showTitle: "Εμφάνιση του τίτλου και της περιγραφής",
      // "Make the question visible if"
      visibleIf: "Εμφάνιση ερώτησης εάν",
      // "Make the question required if"
      requiredIf: "Υποχρεωτική ερώτηση εάν",
      // "Move the question to page"
      page: "Μετακίνηση ερώτησης στη σελίδα",
      // "Question box collapse state"
      state: "Κατάσταση σύμπτυξης ερώτησης",
      // "Number this question"
      showNumber: "Αρίθμηση ερώτησης",
      // "Question title alignment"
      titleLocation: "Στοίχιση τίτλου ερώτησης",
      // "Question description alignment"
      descriptionLocation: "Στοίχιση περιγραφής ερώτησης",
      // "Error message alignment"
      errorLocation: "Στοίχιση μηνύματος σφάλματος",
      // "Increase the inner indent"
      indent: "Αύξηση εσοχής",
      // "Inline question width"
      width: "Πλάτος ερώτησης σε σειρά",
      // "Minimum question width"
      minWidth: "Ελάχιστο πλάτος ερώτησης",
      // "Maximum question width"
      maxWidth: "Μέγιστο πλάτος ερώτησης",
      // "Update input field value"
      textUpdateMode: "Λειτουργία ενημέρωσης πεδίου εισόδου"
    },
    signaturepad: {
      // "Signature area width"
      signatureWidth: "Πλάτος περιοχής υπογραφής",
      // "Signature area height"
      signatureHeight: "Ύψος περιοχής υπογραφής",
      // "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Αυτόματη προσαρμογή περιοχής υπογραφής",
      // "Show a placeholder within signature area"
      showPlaceholder: "Εμφάνιση υπόδειξης μέσα στην περιοχή υπογραφής",
      // "Placeholder text"
      placeholder: "Κείμενο υπόδειξης",
      // "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Κείμενο υπόδειξης σε λειτουργία μόνο για ανάγνωση ή προεπισκόπηση",
      // "Show the Clear button within signature area"
      allowClear: "Εμφάνιση κουμπιού Εκκαθάρισης στην περιοχή υπογραφής",
      // "Minimum stroke width"
      penMinWidth: "Ελάχιστο πάχος γραμμής",
      // "Maximum stroke width"
      penMaxWidth: "Μέγιστο πάχος γραμμής",
      // "Stroke color"
      penColor: "Χρώμα γραφής"
    },
    comment: {
      // "Input field height (in lines)"
      rows: "Ύψος πεδίου εισόδου (σε γραμμές)"
    },
    // "Question numbering"
    showQuestionNumbers: "Αρίθμηση ερωτήσεων",
    // "Question indexing type"
    questionStartIndex: "Τύπος ευρετηρίου ερωτήσεων",
    expression: {
      // "Expression name"
      name: "Όνομα έκφρασης",
      // "Expression title"
      title: "Τίτλος έκφρασης",
      // "Expression description"
      description: "Περιγραφή έκφρασης",
      // "Expression"
      expression: "Έκφραση"
    },
    trigger: {
      // "Expression"
      expression: "Έκφραση"
    },
    calculatedvalue: {
      // "Expression"
      expression: "Έκφραση"
    },
    urlconditionitem: {
      // [Auto-translated] "Expression"
      expression: "Έκφραση"
    },
    htmlconditionitem: {
      // [Auto-translated] "Expression"
      expression: "Έκφραση"
    },
    // survey templates
    survey: {
      // "Survey title"
      title: "Τίτλος ερωτηματολογίου",
      // "Survey description"
      description: "Περιγραφή ερωτηματολογίου",
      // "Make the survey read-only"
      readOnly: "Κάνε το ερωτηματολόγιο μόνο για ανάγνωση",
      // [Auto-translated] "Regional formats"
      regionalFormat: "Τοπικές μορφές"
    },
    page: {
      // "Page name"
      name: "Όνομα σελίδας",
      // "Page title"
      title: "Τίτλος σελίδας",
      // "Page description"
      description: "Περιγραφή σελίδας",
      // "Make the page visible if"
      visibleIf: "Εμφάνιση σελίδας εάν",
      // "Make the page required if"
      requiredIf: "Υποχρεωτική σελίδα εάν",
      // "Time limit to complete the page"
      timeLimit: "Χρονικό όριο για την ολοκλήρωση της σελίδας",
      // "Question order on the page"
      questionOrder: "Σειρά ερωτήσεων στη σελίδα"
    },
    matrixdropdowncolumn: {
      // "Column name"
      name: "Όνομα στήλης",
      // "Column title"
      title: "Τίτλος στήλης",
      // "Prevent duplicate responses"
      isUnique: "Αποτροπή διπλών απαντήσεων",
      // "Column width"
      width: "Πλάτος στήλης",
      // "Minimum column width"
      minWidth: "Ελάχιστο πλάτος στήλης",
      // "Input field height (in lines)"
      rows: "Ύψος πεδίου εισόδου (σε γραμμές)",
      // "Make the column visible if"
      visibleIf: "Εμφάνιση στήλης εάν",
      // "Make the column required if"
      requiredIf: "Υποχρεωτική στήλη εάν",
      // "Each option in a separate column"
      showInMultipleColumns: "Κάθε επιλογή σε ξεχωριστή στήλη"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Διαγράψτε τους άλλους στην ίδια σειρά"
    },
    multipletextitem: {
      // "Name"
      name: "Όνομα",
      // "Title"
      title: "Τίτλος"
    },
    masksettings: {
      // "Save masked value in survey results"
      saveMaskedValue: "Αποθήκευση τιμής με μάσκα στα αποτελέσματα του ερωτηματολογίου"
    },
    regionalformat: {
      // [Auto-translated] "Region"
      locale: "Περιοχή",
      // [Auto-translated] "Date pattern"
      datePattern: "Μοτίβο ημερομηνίας",
      // [Auto-translated] "Time pattern"
      timePattern: "Μοτίβο χρόνου",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Διαχωριστικό δεκαδικών ψηφίων",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Διαχωριστικό χιλιάδων",
      // [Auto-translated] "Currency symbol"
      currencySymbol: "Σύμβολο νομίσματος",
      // [Auto-translated] "Currency pattern"
      currencyPattern: "Μοτίβο νομίσματος"
    },
    patternmask: {
      // "Value pattern"
      pattern: "Μοτίβο τιμής"
    },
    datetimemask: {
      // "Minimum value"
      min: "Ελάχιστη τιμή",
      // "Maximum value"
      max: "Μέγιστη τιμή"
    },
    numericmask: {
      // "Allow negative values"
      allowNegativeValues: "Να επιτρέπονται αρνητικές τιμές",
      // "Thousands separator"
      thousandsSeparator: "Διαχωριστικό χιλιάδων",
      // "Decimal separator"
      decimalSeparator: "Διαχωριστικό δεκαδικών",
      // "Value precision"
      precision: "Ακρίβεια τιμής",
      // [Auto-translated] "Show trailing zeros"
      showTrailingZeros: "Εμφάνιση μηδενικών στο τέλος",
      // "Minimum value"
      min: "Ελάχιστη τιμή",
      // "Maximum value"
      max: "Μέγιστη τιμή"
    },
    currencymask: {
      // [Auto-translated] "Currency symbol"
      currencySymbol: "Σύμβολο νομίσματος",
      // [Auto-translated] "Currency pattern"
      currencyPattern: "Μοτίβο νομίσματος"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Απαλοιφή άλλων όταν είναι επιλεγμένο",
    // [Auto-translated] "Display both text and value"
    showValue: "Εμφάνιση κειμένου και τιμής",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Απαίτηση από το χρήστη να εισαγάγει ένα σχόλιο",
    // "Display area height"
    imageHeight: "Ύψος περιοχής εμφάνισης",
    // "Display area width"
    imageWidth: "Πλάτος περιοχής εμφάνισης",
    // "Join identifier"
    valueName: "Αναγνωριστικό συσχέτισης",
    // "Default display value for dynamic texts"
    defaultDisplayValue: "Προεπιλεγμένη τιμή για δυναμικά κείμενα",
    // "Label alignment"
    rateDescriptionLocation: "Στοίχιση ετικέτας",
    // "Cell error message alignment"
    cellErrorLocation: "Στοίχιση μηνύματος σφάλματος κελιού",
    // "Enabled"
    enabled: "Ενεργό",
    // "Disabled"
    disabled: "Ανενεργό",
    // "Inherit"
    inherit: "Κληρονομιά",
    // "Clear"
    clear: "Καθαρισμός",
    // "Set"
    set: "Ορισμός",
    // "Change"
    change: "Αλλαγή",
    // "Close"
    close: "Κλείσιμο",
    // "Delete"
    delete: "Διαγραφή",
    // "Add New"
    addNew: "Νέα προσθήκη",
    // "Click to add an item..."
    addItem: "Κλικ για προσθήκη στοιχείου...",
    // "Click to remove the item..."
    removeItem: "Κλικ για διαγραφή του στοιχείου...",
    // "Drag the item"
    dragItem: "Σύρετε το στοιχείο",
    // [Auto-translated] "Expand nested choices"
    expandNestedChoices: "Ανάπτυξη ένθετων επιλογών",
    // [Auto-translated] "Collapse nested choices"
    collapseNestedChoices: "Σύμπτυξη ένθετων επιλογών",
    // "Edit"
    edit: "Επεξεργασία",
    // "Done"
    doneEditing: "Ολοκληρώθηκε",
    // "Value is empty"
    emptyValue: "Η τιμή είναι κενή",
    // "Manual Entry"
    fastEntry: "Χειροκίνητη εισαγωγή",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Η τιμή '{0}' δεν είναι μοναδική",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Περιορίστε τον αριθμό στοιχείων από {0} έως {1}",
    // "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Παρακαλώ εισάγετε τουλάχιστον {0} στοιχεία",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Εισάγετε τη λίστα επιλογών και τα ID τους με τη μορφή:\n\nid|επιλογή\n\nΤο ID της επιλογής δεν εμφανίζεται στους συμμετέχοντες και μπορεί να χρησιμοποιηθεί σε κανόνες.",
    // "Please select the action"
    conditionActionEmpty: "Επιλέξτε ενέργεια",
    // "Select a question..."
    conditionSelectQuestion: "Επιλέξτε ερώτηση...",
    // "Select a page..."
    conditionSelectPage: "Επιλέξτε σελίδα...",
    // "Select a panel..."
    conditionSelectPanel: "Επιλέξτε πίνακα...",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Πατήστε ctrl+space για προτάσεις σύνταξης",
    // "Review before submit"
    showPreviewBeforeComplete: "Προεπισκόπηση πριν την υποβολή",
    // "Enabled by a condition"
    overridingPropertyPrefix: "Ενεργοποιείται υπό προϋπόθεση",
    // "Reset"
    resetToDefaultCaption: "Επαναφορά",
    // "Please enter a value"
    propertyIsEmpty: "Παρακαλώ εισάγετε μια τιμή",
    // "Please enter a unique value"
    propertyIsNoUnique: "Παρακαλώ εισάγετε μια μοναδική τιμή",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Παρακαλώ εισάγετε μοναδικό όνομα",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Μην χρησιμοποιείτε δεσμευμένες λέξεις: \"item\", \"choice\", \"panel\", \"row\".",
    // "You don't have any items yet"
    listIsEmpty: "Δεν έχετε προσθέσει ακόμα στοιχεία",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Δεν έχετε προσθέσει επιλογές",
    // "You don't have any columns yet"
    "listIsEmpty@columns": "Δεν έχετε προσθέσει στήλες",
    // "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Δεν έχετε προσθέσει στήλες διάταξης",
    // "You don't have any rows yet"
    "listIsEmpty@rows": "Δεν έχετε προσθέσει γραμμές",
    // "You don't have any validation rules yet"
    "listIsEmpty@validators": "Δεν έχετε προσθέσει κανόνες επικύρωσης",
    // "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Δεν έχετε προσθέσει μεταβλητές",
    // "You don't have any triggers yet"
    "listIsEmpty@triggers": "Δεν έχετε προσθέσει triggers",
    // "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Δεν έχετε προσθέσει συνδέσμους",
    // "You don't have any pages yet"
    "listIsEmpty@pages": "Δεν έχετε προσθέσει σελίδες",
    // "Add new choice"
    "addNew@choices": "Προσθήκη νέας επιλογής",
    // "Add new column"
    "addNew@columns": "Προσθήκη νέας στήλης",
    // "Add new row"
    "addNew@rows": "Προσθήκη νέας γραμμής",
    // "Add new rule"
    "addNew@validators": "Προσθήκη νέου κανόνα",
    // "Add new variable"
    "addNew@calculatedValues": "Προσθήκη νέας μεταβλητής",
    // "Add new trigger"
    "addNew@triggers": "Προσθήκη νέου trigger",
    // "Add new URL"
    "addNew@navigateToUrlOnCondition": "Προσθήκη νέου URL",
    // "Add new page"
    "addNew@pages": "Προσθήκη νέας σελίδας",
    // "Value"
    value: "Τιμή",
    // "Text"
    text: "Κείμενο",
    // "Image or video file URL"
    imageLink: "URL εικόνας ή βίντεο",
    // [Auto-translated] "URL"
    url: "Διεύθυνση URL",
    // "Path to data"
    path: "Διαδρομή προς τα δεδομένα",
    choicesbyurl: {
      // "Web service URL"
      url: "URL υπηρεσίας Web",
      // "Get value to store from the following property"
      valueName: "Ιδιότητα από την οποία αποθηκεύεται η τιμή"
    },
    // "Get value to display from the following property"
    titleName: "Ιδιότητα από την οποία προβάλλεται η τιμή",
    // "Get file URLs from the following property"
    imageLinkName: "Ιδιότητα από την οποία λαμβάνονται οι σύνδεσμοι αρχείων",
    // "Accept empty response"
    allowEmptyResponse: "Αποδοχή κενής απάντησης",
    // "Survey Title"
    surveyTitlePlaceholder: "Τίτλος Ερωτηματολογίου",
    // "Page {num}"
    pageTitlePlaceholder: "Σελίδα {num}",
    // [Auto-translated] "Panel Title"
    panelTitlePlaceholder: "Τίτλος Πάνελ",
    // "Start Page"
    startPageTitlePlaceholder: "Αρχική Σελίδα",
    // "Description"
    descriptionPlaceholder: "Περιγραφή",
    // "Description"
    surveyDescriptionPlaceholder: "Περιγραφή",
    // "Description"
    pageDescriptionPlaceholder: "Περιγραφή",
    // "Wrap choices"
    textWrapEnabled: "Αναδίπλωση επιλογών",
    // "Enable the \"Other\" option"
    showOtherItem: "Ενεργοποίηση επιλογής \"Άλλο\"",
    // "Rename the \"Other\" option"
    otherText: "Μετονομασία επιλογής \"Άλλο\"",
    // "Enable the \"None\" option"
    showNoneItem: "Ενεργοποίηση επιλογής \"Καμία\"",
    // "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Ενεργοποίηση επιλογής \"Άρνηση απάντησης\"",
    // "Enable the \"Don't Know\" option"
    showDontKnowItem: "Ενεργοποίηση επιλογής \"Δεν γνωρίζω\"",
    // "Rename the \"None\" option"
    noneText: "Μετονομασία επιλογής \"Καμία\"",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Ενεργοποίηση επιλογής \"Επιλογή όλων\"",
    // "Rename the \"Select All\" option"
    selectAllText: "Μετονομασία επιλογής \"Επιλογή όλων\"",
    // "Minimum value for auto-generated items"
    choicesMin: "Ελάχιστη τιμή για αυτόματα δημιουργημένα στοιχεία",
    // "Maximum value for auto-generated items"
    choicesMax: "Μέγιστη τιμή για αυτόματα δημιουργημένα στοιχεία",
    // "Step value for auto-generated items"
    choicesStep: "Βήμα τιμής για αυτόματα δημιουργημένα στοιχεία",
    // "Name"
    name: "Όνομα",
    // "Title"
    title: "Τίτλος",
    // "Cell input type"
    cellType: "Τύπος εισόδου κελιού",
    // "Column count"
    colCount: "Αριθμός στηλών",
    // "Choice order"
    choicesOrder: "Σειρά επιλογών",
    // "Allow custom choices"
    allowCustomChoices: "Επιτρέπονται προσαρμοσμένες επιλογές",
    // [Auto-translated] "\"Create Custom Choice\" command text"
    createCustomChoiceText: "Κείμενο εντολής \"Δημιουργία προσαρμοσμένης επιλογής\"",
    // "Visible"
    visible: "Ορατό",
    // "Required"
    isRequired: "Υποχρεωτικό",
    // "Mark as required"
    markRequired: "Σήμανση ως υποχρεωτικό",
    // "Remove the required mark"
    removeRequiredMark: "Αφαίρεση σήμανσης υποχρεωτικού",
    // "Require an answer in each row"
    eachRowRequired: "Απαίτηση απάντησης σε κάθε γραμμή",
    // "Prevent duplicate responses in rows"
    eachRowUnique: "Αποτροπή διπλών απαντήσεων σε γραμμές",
    // "Error message for required questions"
    requiredErrorText: "Μήνυμα σφάλματος για υποχρεωτικές ερωτήσεις",
    // "Display the question on a new line"
    startWithNewLine: "Εμφάνιση ερώτησης σε νέα γραμμή",
    // "Rows"
    rows: "Γραμμές",
    // "Columns"
    cols: "Στήλες",
    // "Placeholder text within input field"
    placeholder: "Κείμενο υπόδειξης μέσα στο πεδίο εισόδου",
    // "Show preview area"
    showPreview: "Προβολή προεπισκόπησης",
    // "Store file content in JSON result as text"
    storeDataAsText: "Αποθήκευση περιεχομένου αρχείου στο JSON ως κείμενο",
    // "Maximum file size (in bytes)"
    maxSize: "Μέγιστο μέγεθος αρχείου (σε bytes)",
    // [Auto-translated] "Maximum number of files"
    maxFiles: "Μέγιστος αριθμός αρχείων",
    // "Row count"
    rowCount: "Αριθμός γραμμών",
    // "Columns layout"
    columnLayout: "Διάταξη στηλών",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Στοίχιση κουμπιού \"Προσθήκη γραμμής\"",
    // "Transpose rows to columns"
    transposeData: "Αντιστροφή γραμμών σε στήλες",
    // "\"Add Row\" button text"
    addRowText: "Κείμενο κουμπιού \"Προσθήκη γραμμής\"",
    // "\"Remove Row\" button text"
    removeRowText: "Κείμενο κουμπιού \"Αφαίρεση γραμμής\"",
    // "Input field title pattern"
    singleInputTitleTemplate: "Πρότυπο τίτλου πεδίου εισόδου",
    // "Minimum rating value"
    rateMin: "Ελάχιστη τιμή αξιολόγησης",
    // "Maximum rating value"
    rateMax: "Μέγιστη τιμή αξιολόγησης",
    // "Step value"
    rateStep: "Βήμα τιμής",
    // "Minimum value label"
    minRateDescription: "Ετικέτα ελάχιστης τιμής",
    // "Maximum value label"
    maxRateDescription: "Ετικέτα μέγιστης τιμής",
    // "Input type"
    inputType: "Τύπος εισόδου",
    // "Default Answer"
    defaultValue: "Προεπιλεγμένη Απάντηση",
    // "Default texts"
    cellsDefaultRow: "Προεπιλεγμένα κείμενα",
    // "Maximum character limit"
    maxLength: "Μέγιστο όριο χαρακτήρων",
    // "and"
    and: "και",
    // "or"
    or: "ή",
    // "Remove"
    remove: "Αφαίρεση",
    // "Add Condition"
    addCondition: "Προσθήκη Συνθήκης",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Επιλέξτε μια ερώτηση για να ξεκινήσετε τη διαμόρφωση συνθηκών.",
    // "If"
    if: "Εάν",
    // "then"
    then: "τότε",
    // "Target question"
    setToName: "Στόχος ερώτησης",
    // "Question to copy answer from"
    fromName: "Ερώτηση από την οποία αντιγράφεται η απάντηση",
    // "Question to skip to"
    gotoName: "Ερώτηση που θα παραλείψετε",
    // "Rule is incorrect"
    ruleIsNotSet: "Ο κανόνας είναι λανθασμένος",
    // "Add to the survey results"
    includeIntoResult: "Προσθήκη στα αποτελέσματα έρευνας",
    // "Make the title and description visible"
    showTitle: "Εμφάνιση τίτλου και περιγραφής",
    // "Select a survey language"
    locale: "Επιλέξτε γλώσσα έρευνας",
    // "Select device type"
    simulator: "Επιλέξτε τύπο συσκευής",
    // "Switch to landscape orientation"
    landscapeOrientation: "Μετάβαση σε οριζόντια προσανατολισμό",
    // "Switch to portrait orientation"
    portraitOrientation: "Μετάβαση σε κατακόρυφο προσανατολισμό",
    // "Clear hidden question values"
    clearInvisibleValues: "Καθαρισμός κρυφών τιμών ερώτησης",
    // "Limit to one response"
    cookieName: "Περιορισμός σε μία απάντηση",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Αυτόματη αποθήκευση προόδου έρευνας κατά την αλλαγή σελίδας",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Αποθήκευση της τιμής της επιλογής \"Άλλο\" ως ξεχωριστό πεδίο",
    // "Show page titles"
    showPageTitles: "Εμφάνιση τίτλων σελίδων",
    // "Show page numbers"
    showPageNumbers: "Εμφάνιση αριθμών σελίδων",
    // "\"Previous Page\" button text"
    pagePrevText: "Κείμενο κουμπιού \"Προηγούμενη Σελίδα\"",
    // "\"Next Page\" button text"
    pageNextText: "Κείμενο κουμπιού \"Επόμενη Σελίδα\"",
    // "\"Complete Survey\" button text"
    completeText: "Κείμενο κουμπιού \"Ολοκλήρωση Έρευνας\"",
    // "\"Review Answers\" button text"
    previewText: "Κείμενο κουμπιού \"Ανασκόπηση Απαντήσεων\"",
    // "\"Edit Answer\" button text"
    editText: "Κείμενο κουμπιού \"Επεξεργασία Απάντησης\"",
    // "\"Start Survey\" button text"
    startSurveyText: "Κείμενο κουμπιού \"Ξεκίνα Έρευνα\"",
    // "Show navigation buttons"
    showNavigationButtons: "Εμφάνιση κουμπιών πλοήγησης",
    // "Navigation buttons alignment"
    navigationButtonsLocation: "Στοίχιση κουμπιών πλοήγησης",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Εμφάνιση κουμπιού \"Προηγούμενη Σελίδα\"",
    // "First page is a start page"
    firstPageIsStartPage: "Η πρώτη σελίδα είναι σελίδα εκκίνησης",
    // "Show the \"Thank You\" page"
    showCompletePage: "Εμφάνιση σελίδας \"Ευχαριστούμε\"",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Αυτόματη προώθηση στην επόμενη σελίδα",
    // "Complete the survey automatically"
    autoAdvanceAllowComplete: "Ολοκλήρωση της έρευνας αυτόματα",
    // "Show the progress bar"
    showProgressBar: "Εμφάνιση γραμμής προόδου",
    // "Progress bar alignment"
    progressBarLocation: "Στοίχιση γραμμής προόδου",
    // "Question title alignment"
    questionTitleLocation: "Στοίχιση τίτλου ερώτησης",
    // "Question title width"
    questionTitleWidth: "Πλάτος τίτλου ερώτησης",
    // "Required symbol(s)"
    requiredMark: "Σύμβολο υποχρεωτικότητας",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Πρότυπο τίτλου ερώτησης, προεπιλογή: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Στοίχιση μηνύματος σφάλματος",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Εστίαση στην πρώτη ερώτηση της νέας σελίδας",
    // "Question order"
    questionOrder: "Σειρά ερωτήσεων",
    // "Time limit to complete the survey"
    timeLimit: "Όριο χρόνου για την ολοκλήρωση της έρευνας",
    // "Time limit to complete one page"
    timeLimitPerPage: "Όριο χρόνου για την ολοκλήρωση μίας σελίδας",
    // "Use a timer"
    showTimer: "Χρήση χρονομέτρου",
    // "Timer alignment"
    timerLocation: "Στοίχιση χρονομέτρου",
    // "Timer mode"
    timerInfoMode: "Κατάσταση χρονομέτρου",
    // "Enable entry addition"
    allowAddPanel: "Ενεργοποίηση προσθήκης πάνελ",
    // "Enable entry removal"
    allowRemovePanel: "Ενεργοποίηση αφαίρεσης πάνελ",
    // "\"Add Entry\" button text"
    addPanelText: "Κείμενο κουμπιού \"Προσθήκη Πάνελ\"",
    // "\"Remove Entry\" button text"
    removePanelText: "Κείμενο κουμπιού \"Αφαίρεση Πάνελ\"",
    // "Show all elements on one page"
    isSinglePage: "Εμφάνιση όλων των στοιχείων σε μία σελίδα",
    // "HTML markup"
    html: "HTML",
    // "Answer"
    setValue: "Απάντηση",
    // "Storage format"
    dataFormat: "Μορφή αποθήκευσης",
    // "Enable row addition"
    allowAddRows: "Ενεργοποίηση προσθήκης σειρών",
    // "Enable row removal"
    allowRemoveRows: "Ενεργοποίηση αφαίρεσης σειρών",
    // "Enable row reordering"
    allowRowReorder: "Ενεργοποίηση αναδιάταξης σειρών",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Δεν εφαρμόζεται αν ορίσετε ακριβές πλάτος ή ύψος περιοχής εμφάνισης.",
    // "Minimum display area width"
    minImageWidth: "Ελάχιστο πλάτος περιοχής εμφάνισης",
    // "Maximum display area width"
    maxImageWidth: "Μέγιστο πλάτος περιοχής εμφάνισης",
    // "Minimum display area height"
    minImageHeight: "Ελάχιστο ύψος περιοχής εμφάνισης",
    // "Maximum display area height"
    maxImageHeight: "Μέγιστο ύψος περιοχής εμφάνισης",
    // "Minimum value"
    minValue: "Ελάχιστη τιμή",
    // "Maximum value"
    maxValue: "Μέγιστη τιμή",
    // "Case insensitive"
    caseInsensitive: "Μη διακρίνει πεζά και κεφαλαία",
    // "Minimum length (in characters)"
    minLength: "Ελάχιστο μήκος (σε χαρακτήρες)",
    // "Allow digits"
    allowDigits: "Επιτρέπει αριθμούς",
    // "Minimum count"
    minCount: "Ελάχιστος αριθμός",
    // "Maximum count"
    maxCount: "Μέγιστος αριθμός",
    // "Regular expression"
    regex: "Κανονική έκφραση",
    surveyvalidator: {
      // [Auto-translated] "Notification message for invalid input"
      text: "Μήνυμα ειδοποίησης για μη έγκυρη εισαγωγή",
      // [Auto-translated] "Valid when"
      expression: "Ισχύει όταν",
      // [Auto-translated] "Notification type"
      notificationType: "Τύπος ειδοποίησης",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Μέγιστο μήκος (σε χαρακτήρες)"
    },
    // "Total row header"
    totalText: "Επικεφαλίδα συνολικής σειράς",
    // "Aggregation method"
    totalType: "Μέθοδος συγκέντρωσης",
    // "Total value expression"
    totalExpression: "Έκφραση συνολικής τιμής",
    // "Total value display format"
    totalDisplayStyle: "Μορφή εμφάνισης συνολικής τιμής",
    // "Currency"
    totalCurrency: "Νόμισμα",
    // "Formatted string"
    totalFormat: "Μορφοποιημένη συμβολοσειρά",
    // "Survey logo"
    logo: "Λογότυπο έρευνας",
    // "Survey layout"
    questionsOnPageMode: "Διάταξη έρευνας",
    // "Restrict answer length"
    maxTextLength: "Περιορισμός μήκους απάντησης",
    // "Restrict comment length"
    maxCommentLength: "Περιορισμός μήκους σχολίου",
    // "Comment area height (in lines)"
    commentAreaRows: "Ύψος περιοχής σχολίου (σε γραμμές)",
    // "Auto-expand text areas"
    autoGrowComment: "Αυτόματη επέκταση περιοχών κειμένου",
    // "Allow users to resize text areas"
    allowResizeComment: "Επιτρέψτε στους χρήστες να αλλάξουν το μέγεθος των περιοχών κειμένου",
    // "Update input field values"
    textUpdateMode: "Ενημέρωση τιμών πεδίων εισαγωγής",
    // "Input mask type"
    maskType: "Τύπος μάσκας εισαγωγής",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Ορισμός εστίασης στην πρώτη μη έγκυρη απάντηση",
    // "Run validation"
    checkErrorsMode: "Εκτέλεση επικύρωσης",
    // "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Επικύρωση κενών πεδίων όταν χάσουν τη εστίαση",
    // "Redirect to an external link after submission"
    navigateToUrl: "Ανακατεύθυνση σε εξωτερικό σύνδεσμο μετά την υποβολή",
    // "Dynamic external link"
    navigateToUrlOnCondition: "Δυναμικός εξωτερικός σύνδεσμος",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Markup για όταν ο χρήστης έχει ήδη συμπληρώσει αυτή την έρευνα",
    // "\"Thank You\" page markup"
    completedHtml: "Markup για τη σελίδα \"Ευχαριστούμε\"",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Δυναμικό markup για τη σελίδα \"Ευχαριστούμε\"",
    // "Markup to show while survey model is loading"
    loadingHtml: "Markup για όταν το μοντέλο έρευνας φορτώνει",
    // "Comment area text"
    commentText: "Κείμενο περιοχής σχολίου",
    // "Autocomplete type"
    autocomplete: "Τύπος αυτόματης συμπλήρωσης",
    // "Label for \"True\""
    labelTrue: "Ετικέτα για \"Σωστό\"",
    // "Label for \"False\""
    labelFalse: "Ετικέτα για \"Λάθος\"",
    // "Show the Clear button"
    allowClear: "Εμφάνιση κουμπιού Εκκαθάριση",
    // [Auto-translated] "Search mode"
    searchMode: "Λειτουργία αναζήτησης",
    // "Display format"
    displayStyle: "Μορφή εμφάνισης",
    // "Formatted string"
    format: "Μορφοποιημένη συμβολοσειρά",
    // "Maximum fractional digits"
    maximumFractionDigits: "Μέγιστος αριθμός δεκαδικών ψηφίων",
    // "Minimum fractional digits"
    minimumFractionDigits: "Ελάχιστος αριθμός δεκαδικών ψηφίων",
    // "Display grouping separators"
    useGrouping: "Εμφάνιση διαχωριστικών ομάδων",
    // "Enable multiple file upload"
    allowMultiple: "Επιτρέπει πολλαπλή αποστολή αρχείων",
    // "Preview uploaded images"
    allowImagesPreview: "Προεπισκόπηση ανεβασμένων εικόνων",
    // [Auto-translated] "Accepted file categories"
    acceptedCategories: "Αποδεκτές κατηγορίες αρχείων",
    // [Auto-translated] "Additional file extensions"
    acceptedTypes: "Πρόσθετες επεκτάσεις αρχείων",
    // "Wait for upload to complete"
    waitForUpload: "Περιμένετε για να ολοκληρωθεί η αποστολή",
    // "Row details alignment"
    detailPanelMode: "Στοίχιση επέκτασης σειράς",
    // "Minimum row count"
    minRowCount: "Ελάχιστος αριθμός σειρών",
    // "Maximum row count"
    maxRowCount: "Μέγιστος αριθμός σειρών",
    // [Auto-translated] "Row count expression"
    rowCountExpression: "Παράσταση πλήθους γραμμών",
    // "Confirm row removal"
    confirmDelete: "Επιβεβαίωση διαγραφής σειράς",
    // "Confirmation message"
    confirmDeleteText: "Μήνυμα επιβεβαίωσης",
    // "Initial number of entries"
    panelCount: "Αρχικός αριθμός πάνελ",
    // "Minimum number of entries"
    minPanelCount: "Ελάχιστος αριθμός πάνελ",
    // "Maximum number of entries"
    maxPanelCount: "Μέγιστος αριθμός πάνελ",
    // [Auto-translated] "Entry count expression"
    panelCountExpression: "Παράσταση πλήθους καταχωρήσεων",
    // "Initial entry state"
    panelsState: "Κατάσταση κατάρρευσης εσωτερικών πάνελ",
    // "\"Previous Entry\" button text"
    prevPanelText: "Κείμενο κουμπιού \"Προηγούμενο Πάνελ\"",
    // "\"Next Entry\" button text"
    nextPanelText: "Κείμενο κουμπιού \"Επόμενο Πάνελ\"",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Στοίχιση κουμπιού \"Αφαίρεση Πάνελ\"",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Απόκρυψη ερώτησης αν δεν υπάρχουν σειρές",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Απόκρυψη στηλών αν δεν υπάρχουν σειρές",
    // "Custom rating values"
    rateValues: "Προσαρμοσμένες τιμές αξιολόγησης",
    // "Rating count"
    rateCount: "Αριθμός αξιολογήσεων",
    // "Rating configuration"
    autoGenerate: "Διαμόρφωση αξιολόγησης",
    slider: {
      // [Auto-translated] "Min value"
      min: "Ελάχιστη τιμή",
      // [Auto-translated] "Max value"
      max: "Μέγιστη τιμή",
      // [Auto-translated] "Step value"
      step: "Τιμή βήματος",
      // [Auto-translated] "Show scale labels"
      showLabels: "Εμφάνιση ετικετών κλίμακας",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Εμφάνιση συμβουλών εργαλείων",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Να επιτρέπεται η διέλευση του αντίχειρα",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Αριθμός ετικετών που δημιουργούνται αυτόματα",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Παράσταση ελάχιστης τιμής",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Έκφραση μέγιστης τιμής",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Διαμόρφωση ετικετών κλίμακας",
      // [Auto-translated] "Slider type"
      sliderType: "Τύπος ρυθμιστικού",
      // [Auto-translated] "Min range length"
      minRangeLength: "Ελάχιστο μήκος εύρους",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Μέγιστο μήκος εύρους",
      // [Auto-translated] "Custom labels"
      customLabels: "Προσαρμοσμένες ετικέτες",
      // [Auto-translated] "Label format"
      labelFormat: "Μορφή ετικέτας",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Μορφή συμβουλής εργαλείου"
    },
    imagemap: {
      // [Auto-translated] "Image URL"
      imageLink: "URL εικόνας",
      // [Auto-translated] "Areas"
      areas: "Περιοχές",
      // [Auto-translated] "Allow multiple selections"
      multiSelect: "Να επιτρέπονται πολλές επιλογές",
      // [Auto-translated] "Value property name"
      valuePropertyName: "Όνομα ιδιότητας τιμής",
      // [Auto-translated] "Shape"
      shape: "Σχήμα",
      // [Auto-translated] "Idle fill color"
      idleFillColor: "Χρώμα γεμίσματος ρελαντί",
      // [Auto-translated] "Idle stroke color"
      idleStrokeColor: "Χρώμα περιγράμματος αδράνειας",
      // [Auto-translated] "Idle stroke width"
      idleStrokeWidth: "Πλάτος διαδρομής ρελαντί",
      // [Auto-translated] "Hover fill color"
      hoverFillColor: "Χρώμα γεμίσματος αιώρησης",
      // [Auto-translated] "Hover stroke color"
      hoverStrokeColor: "Χρώμα περιγράμματος κατάδειξης",
      // [Auto-translated] "Hover stroke width"
      hoverStrokeWidth: "Πλάτος περιγράμματος αιώρησης",
      // [Auto-translated] "Selected fill color"
      selectedFillColor: "Επιλεγμένο χρώμα γεμίσματος",
      // [Auto-translated] "Selected stroke color"
      selectedStrokeColor: "Επιλεγμένο χρώμα περιγράμματος",
      // [Auto-translated] "Selected stroke width"
      selectedStrokeWidth: "Επιλεγμένο πλάτος περιγράμματος",
      // [Auto-translated] "Maximum selected areas"
      maxSelectedAreas: "Μέγιστες επιλεγμένες περιοχές",
      // [Auto-translated] "Minimum selected areas"
      minSelectedAreas: "Ελάχιστες επιλεγμένες περιοχές"
    },
    imagemaparea: {
      // [Auto-translated] "Value"
      value: "Αξία",
      // [Auto-translated] "Shape"
      shape: "Σχήμα",
      // [Auto-translated] "Coordinates"
      coords: "Συντεταγμένες",
      // [Auto-translated] "Idle fill color"
      idleFillColor: "Χρώμα γεμίσματος ρελαντί",
      // [Auto-translated] "Idle stroke color"
      idleStrokeColor: "Χρώμα περιγράμματος αδράνειας",
      // [Auto-translated] "Idle stroke width"
      idleStrokeWidth: "Πλάτος διαδρομής ρελαντί",
      // [Auto-translated] "Hover fill color"
      hoverFillColor: "Χρώμα γεμίσματος αιώρησης",
      // [Auto-translated] "Hover stroke color"
      hoverStrokeColor: "Χρώμα περιγράμματος κατάδειξης",
      // [Auto-translated] "Hover stroke width"
      hoverStrokeWidth: "Πλάτος περιγράμματος αιώρησης",
      // [Auto-translated] "Selected fill color"
      selectedFillColor: "Επιλεγμένο χρώμα γεμίσματος",
      // [Auto-translated] "Selected stroke color"
      selectedStrokeColor: "Επιλεγμένο χρώμα περιγράμματος",
      // [Auto-translated] "Selected stroke width"
      selectedStrokeWidth: "Επιλεγμένο πλάτος περιγράμματος"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Ύψος εικόνας",
      // [Auto-translated] "Image width"
      imageWidth: "Πλάτος εικόνας",
      // [Auto-translated] "Confirm file deletion"
      confirmDelete: "Επιβεβαιώστε τη διαγραφή του αρχείου"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Απόκρυψη ερώτησης αν δεν υπάρχουν επιλογές",
    // "Minimum width"
    minWidth: "Ελάχιστο πλάτος",
    // "Maximum width"
    maxWidth: "Μέγιστο πλάτος",
    // "Width"
    width: "Πλάτος",
    // "Show column headers"
    showHeader: "Εμφάνιση επικεφαλίδων στηλών",
    // "Show horizontal scrollbar"
    horizontalScroll: "Εμφάνιση οριζόντιου κύλισης",
    // "Minimum column width"
    columnMinWidth: "Ελάχιστο πλάτος στήλης",
    // "Row header width"
    rowTitleWidth: "Πλάτος επικεφαλίδας σειράς",
    // "Value to store when \"True\" is selected"
    valueTrue: "Τιμή που θα αποθηκευτεί όταν επιλεγεί το \"Σωστό\"",
    // "Value to store when \"False\" is selected"
    valueFalse: "Τιμή που θα αποθηκευτεί όταν επιλεγεί το \"Λάθος\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "Μήνυμα σφάλματος \"Η τιμή είναι κάτω από το ελάχιστο\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Μήνυμα σφάλματος \"Η τιμή υπερβαίνει το μέγιστο\"",
    // [Auto-translated] "\"Value does not match step size\" error message"
    stepErrorText: "Μήνυμα λάθους \"Η τιμή δεν ταιριάζει με το μέγεθος του βήματος\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Μήνυμα σφάλματος \"Άδειο σχόλιο\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Μήνυμα σφάλματος για διπλότυπες απαντήσεις",
    // "Minimum choices to select"
    minSelectedChoices: "Ελάχιστος αριθμός επιλογών για επιλογή",
    // "Maximum choices to select"
    maxSelectedChoices: "Μέγιστος αριθμός επιλογών για επιλογή",
    // "Logo width"
    logoWidth: "Πλάτος λογότυπου",
    // "Logo height"
    logoHeight: "Ύψος λογότυπου",
    // "Read-only"
    readOnly: "Μόνο ανάγνωση",
    // "Disable the read-only mode if"
    enableIf: "Απενεργοποίηση λειτουργίας μόνο για ανάγνωση αν",
    // "\"No rows\" message"
    noRowsText: "Μήνυμα \"Δεν υπάρχουν σειρές\"",
    // "Separate special choices"
    separateSpecialChoices: "Διαχωρισμός ειδικών επιλογών",
    // "Copy choices from the following question"
    choicesFromQuestion: "Αντιγραφή επιλογών από την εξής ερώτηση",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Ποιες επιλογές να αντιγραφούν",
    // "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Χρήση τιμών από την εξής στήλη πίνακα ή ερώτηση πάνελ ως ταυτοποιητικά επιλογής",
    // "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Χρήση τιμών από την εξής στήλη πίνακα ή ερώτηση πάνελ ως κείμενα επιλογών",
    // "Display page titles in the progress bar"
    progressBarShowPageTitles: "Εμφάνιση τίτλων σελίδων στη γραμμή προόδου",
    // [Auto-translated] "Display navigation text in the progress bar"
    progressBarShowNavigationText: "Εμφάνιση κειμένου περιήγησης στη γραμμή προόδου",
    // [Auto-translated] "Navigation text alignment"
    progressBarNavigationTextLocation: "Στοίχιση κειμένου πλοήγησης",
    // "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Εμφάνιση αριθμών σελίδων στη γραμμή προόδου",
    // "Add a comment box"
    showCommentArea: "Προσθήκη περιοχής σχολίου",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Κείμενο αναγνώρισης για την περιοχή σχολίου",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Εμφάνιση ετικετών ως ακραίων τιμών",
    // "Row order"
    rowOrder: "Σειρά σειράς",
    // "Nested column count"
    columnColCount: "Αριθμός εισχωρημένων στηλών",
    // "Correct Answer"
    correctAnswer: "Σωστή Απάντηση",
    // "Default Values"
    defaultPanelValue: "Προεπιλεγμένες Τιμές",
    // "Cell Texts"
    cells: "Κείμενα Κυττάρων",
    // "Select a file or paste a file link..."
    fileInputPlaceholder: "Επιλέξτε αρχείο ή επικολλήστε σύνδεσμο αρχείου...",
    // "Prevent duplicate responses in the following column"
    keyName: "Απαγόρευση διπλότυπων απαντήσεων στην εξής στήλη",
    itemvalue: {
      // "Make the option visible if"
      visibleIf: "Κάντε την επιλογή ορατή αν",
      // "Make the option selectable if"
      enableIf: "Κάντε την επιλογή επιλέξιμη αν"
    },
    "itemvalue@rows": {
      // "Make the row visible if"
      visibleIf: "Κάντε τη σειρά ορατή αν",
      // "Make the row editable if"
      enableIf: "Κάντε τη σειρά επεξεργάσιμη αν"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Εναλλακτικό κείμενο"
    },
    // "Logo alignment"
    logoPosition: "Στοίχιση λογότυπου",
    // "Preview mode"
    previewMode: "Λειτουργία προεπισκόπησης",
    // "Enable grid layout"
    gridLayoutEnabled: "Ενεργοποίηση διάταξης πλέγματος",
    // "Grid columns"
    gridLayoutColumns: "Στήλες πλέγματος",
    // "Mask settings"
    maskSettings: "Ρυθμίσεις μάσκας",
    // "Row details error message alignment"
    detailErrorLocation: "Στοίχιση μηνύματος σφάλματος επέκτασης σειράς",
    // Creator tabs
    tabs: {
      // "General"
      general: "Γενικά",
      // "HTML Editor"
      html: "Επεξεργαστής HTML",
      // "Columns"
      columns: "Στήλες",
      // "Rows"
      rows: "Σειρές",
      // "Choice Options"
      choices: "Επιλογές Επιλογής",
      // "Items"
      items: "Στοιχεία",
      // "Visible If"
      visibleIf: "Ορατό αν",
      // "Editable If"
      enableIf: "Επεξεργάσιμο αν",
      // "Required If"
      requiredIf: "Υποχρεωτικό αν",
      // "Rating Values"
      rateValues: "Τιμές Αξιολόγησης",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Ρυθμίσεις ρυθμιστικού",
      // "Choices from a Web Service"
      choicesByUrl: "Επιλογές από Web Service",
      // "Numbering"
      numbering: "Αρίθμηση",
      // "Validators"
      validators: "Επαληθευτές",
      // "Navigation"
      navigation: "Πλοήγηση",
      // "Question Settings"
      question: "Ρυθμίσεις Ερώτησης",
      // "Pages"
      pages: "Σελίδες",
      // [Auto-translated] "Regional Formats"
      regionalFormat: "Τοπικές μορφές",
      // "Quiz Mode"
      timer: "Λειτουργία Κουίζ",
      // "Calculated Values"
      calculatedValues: "Υπολογισμένες Τιμές",
      // "Triggers"
      triggers: "Ενεργοποιητές",
      // "Title template"
      templateTitle: "Πρότυπο τίτλου",
      // "Totals"
      totals: "Σύνολα",
      // "Conditions"
      logic: "Συνθήκες",
      // "Input Mask Settings"
      mask: "Ρυθμίσεις Μάσκας Εισαγωγής",
      layout: {
        // "Panel Layout"
        panel: "Διάταξη Πάνελ",
        // "Layout"
        question: "Διάταξη",
        // "Layout"
        base: "Διάταξη"
      },
      // "Data"
      data: "Δεδομένα",
      // "Validation"
      validation: "Επικύρωση",
      // "Individual Cell Texts"
      cells: "Κείμενα Ατομικών Κυττάρων",
      // "\"Thank You\" Page"
      showOnCompleted: "Σελίδα \"Ευχαριστούμε\"",
      // "Logo in the Survey Header"
      logo: "Λογότυπο στην Κεφαλίδα Έρευνας",
      // "Expression"
      expression: "Έκφραση",
      // "Question Settings"
      questionSettings: "Ρυθμίσεις Ερώτησης",
      // "Header"
      header: "Κεφαλίδα",
      // "Background"
      background: "Φόντο",
      // "Appearance"
      appearance: "Εμφάνιση",
      // "Accent colors"
      accentColors: "Χρώματα Αντίθεσης",
      // "Surface background"
      surfaceBackground: "Φόντο Επιφάνειας",
      // "Scaling"
      scaling: "Κλιμάκωση",
      // "Others"
      others: "Άλλα"
    },
    // "Items"
    items: "Στοιχεία",
    // "Make choices visible if"
    choicesVisibleIf: "Κάντε τις επιλογές ορατές αν",
    // "Make choices selectable if"
    choicesEnableIf: "Κάντε τις επιλογές επιλέξιμες αν",
    // "Increase the inner indent"
    innerIndent: "Αύξηση του εσωτερικού εσοχής",
    // "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Χρησιμοποιήστε τις απαντήσεις από την τελευταία καταχώρηση ως προεπιλογή",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Πληκτρολογήστε την έκφραση εδώ...",
    // "Clear hidden question values"
    clearIfInvisible: "Καθαρισμός κρυφών τιμών ερώτησης",
    // "Store values in the following property"
    valuePropertyName: "Αποθήκευση τιμών στην εξής ιδιότητα",
    // "Enable search-as-you-type"
    searchEnabled: "Ενεργοποίηση αναζήτησης κατά την πληκτρολόγηση",
    // "Hide selected items"
    hideSelectedItems: "Απόκρυψη επιλεγμένων στοιχείων",
    // "Collapse the dropdown upon selection"
    closeOnSelect: "Σύμπτυξη του αναπτυσσόμενου μενού κατά την επιλογή",
    // "Vertical alignment within cells"
    verticalAlign: "Κάθετη στοίχιση μέσα στα κελιά",
    // "Alternate row colors"
    alternateRows: "Εναλλαγή χρωμάτων σειρών",
    // "Make columns visible if"
    columnsVisibleIf: "Κάντε τις στήλες ορατές αν",
    // "Make rows visible if"
    rowsVisibleIf: "Κάντε τις σειρές ορατές αν",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Κείμενο αναγνώρισης για την περιοχή σχολίου",
    // "Placeholder text for Local file"
    filePlaceholder: "Κείμενο αναγνώρισης για το Τοπικό αρχείο",
    // "Placeholder text for Camera"
    photoPlaceholder: "Κείμενο αναγνώρισης για την Κάμερα",
    // "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Κείμενο αναγνώρισης για Τοπικό αρχείο ή Κάμερα",
    // "Rating icon"
    rateType: "Εικονίδιο αξιολόγησης",
    // "Ex.: https://api.example.com/books"
    url_placeholder: "π.χ.: https://api.example.com/books",
    // "Ex.: categories.fiction"
    path_placeholder: "π.χ.: categories.fiction",
    // "Ex.: a)"
    questionStartIndex_placeholder: "π.χ.: a)",
    // "Ex.: 6in"
    width_placeholder: "π.χ.: 6in",
    // "Ex.: 600px"
    minWidth_placeholder: "π.χ.: 600px",
    // "Ex.: 50%"
    maxWidth_placeholder: "π.χ.: 50%",
    // "auto"
    imageHeight_placeholder: "αυτόματα",
    // "auto"
    imageWidth_placeholder: "αυτόματα",
    // "Ex.: 100px"
    itemTitleWidth_placeholder: "π.χ.: 100px",
    theme: {
      // "Theme"
      themeName: "Θέμα",
      // "Question appearance"
      isPanelless: "Εμφάνιση ερώτησης",
      // "Background and corner radius"
      editorPanel: "Φόντο και ακτίνα γωνίας",
      // "Background and corner radius"
      questionPanel: "Φόντο και ακτίνα γωνίας",
      // "Accent color"
      primaryColor: "Χρώμα αντίθεσης",
      // "Panel and question box opacity"
      panelBackgroundTransparency: "Διαφάνεια πάνελ και κουτιού ερώτησης",
      // "Input element opacity"
      questionBackgroundTransparency: "Διαφάνεια στοιχείου εισαγωγής",
      // "Survey font size"
      fontSize: "Μέγεθος γραμματοσειράς έρευνας",
      // "Survey scale factor"
      scale: "Παράγοντας κλιμάκωσης έρευνας",
      // "Corner radius"
      cornerRadius: "Ακτίνα γωνίας",
      // "Advanced mode"
      advancedMode: "Προηγμένη λειτουργία",
      // "Title font"
      pageTitle: "Γραμματοσειρά τίτλου σελίδας",
      // "Description font"
      pageDescription: "Γραμματοσειρά περιγραφής σελίδας",
      // "Title font"
      questionTitle: "Γραμματοσειρά τίτλου ερώτησης",
      // "Description font"
      questionDescription: "Γραμματοσειρά περιγραφής ερώτησης",
      // "Font"
      inputContent: "Γραμματοσειρά επεξεργαστή",
      // "Opacity"
      backgroundOpacity: "Διαφάνεια", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs2-typography-font-family-text": "Οικογένεια γραμματοσειρών έρευνας",
      // [Auto-translated] "Background color"
      "--sjs2-color-utility-surface-survey": "Χρώμα φόντου",
      // [Auto-translated] "Accent background colors"
      "--sjs2-color-project-brand-600": "Χρώματα φόντου έμφασης",
      // [Auto-translated] "Accent foreground colors"
      "--sjs2-color-fg-brand-on-primary": "Έμφαση στα χρώματα προσκηνίου",
      // [Auto-translated] "Error message colors"
      "--sjs2-color-bg-alert-primary": "Χρώματα μηνύματος σφάλματος",
      // [Auto-translated] "Shadow effects"
      "--sjs2-border-effect-surface-default": "Εφέ σκιάς",
      // [Auto-translated] "Shadow effects"
      "--sjs2-border-effect-component-formbox-default": "Εφέ σκιάς",
      // [Auto-translated] "Colors"
      "--sjs2-color-component-input-default-line": "Χρωματιστά"
    },
    "header@header": {
      // "View"
      headerView: "Προβολή",
      // "Logo alignment"
      logoPosition: "Στοίχιση λογότυπου",
      // "Survey title font"
      surveyTitle: "Γραμματοσειρά τίτλου έρευνας",
      // "Survey description font"
      surveyDescription: "Γραμματοσειρά περιγραφής έρευνας",
      // "Survey title font"
      headerTitle: "Γραμματοσειρά τίτλου έρευνας",
      // "Survey description font"
      headerDescription: "Γραμματοσειρά περιγραφής έρευνας",
      // "Content area width"
      inheritWidthFrom: "Πλάτος περιοχής περιεχομένου",
      // "Text width"
      textAreaWidth: "Πλάτος κειμένου",
      // "Background color"
      backgroundColorSwitch: "Χρώμα φόντου",
      // "Background image"
      backgroundImage: "Εικόνα φόντου",
      // "Opacity"
      backgroundImageOpacity: "Διαφάνεια",
      // "Overlap"
      overlapEnabled: "Επικάλυψη",
      // "Logo alignment"
      logoPositionX: "Στοίχιση λογότυπου",
      // "Survey title alignment"
      titlePositionX: "Στοίχιση τίτλου έρευνας",
      // "Survey description alignment"
      descriptionPositionX: "Στοίχιση περιγραφής έρευνας"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "αληθές",
    // "false"
    "false": "ψευδές",
    // "Local file"
    file: "Τοπικό αρχείο",
    // "Camera"
    camera: "Κάμερα",
    // "Local file or Camera"
    "file-camera": "Τοπικό αρχείο ή Κάμερα",
    // "Inherit"
    inherit: "Κληρονομήθηκε",
    // "Inherit"
    default: "Κληρονομήθηκε",
    // "Initial"
    initial: "Αρχικό",
    // "Random"
    random: "Τυχαίο",
    // "Collapsed"
    collapsed: "Συμπτυγμένο",
    // "Expanded"
    expanded: "Αναπτυγμένο",
    // "None"
    none: "Κανένα",
    // "Ascending"
    asc: "Αύξουσα",
    // "Descending"
    desc: "Φθίνουσα",
    // "Selected"
    selected: "Επιλεγμένο",
    // "Unselected"
    unselected: "Μη επιλεγμένο",
    // "decimal"
    decimal: "δεκαδικό",
    // "currency"
    currency: "νόμισμα",
    // "percent"
    percent: "ποσοστό",
    // "First panel is expanded"
    firstExpanded: "Το πρώτο πάνελ είναι αναπτυγμένο",
    // "Hide question numbers"
    off: "Απόκρυψη αριθμών ερωτήσεων",
    // "List"
    list: "Λίστα",
    // "Carousel"
    carousel: "Καρουζέλ",
    // "Tabs"
    tab: "Καρτέλες",
    // "Horizontal"
    horizontal: "Οριζόντιο",
    // "Vertical"
    vertical: "Κατακόρυφο",
    // "Top"
    top: "Πάνω",
    // "Bottom"
    bottom: "Κάτω",
    // "Top and bottom"
    topBottom: "Πάνω και κάτω",
    // "Left"
    left: "Αριστερά",
    // "Right"
    right: "Δεξιά",
    // "Center"
    center: "Κέντρο",
    // "Left and right"
    leftRight: "Αριστερά και Δεξιά",
    // "Middle"
    middle: "Κέντρο",
    // "color"
    color: "χρώμα",
    // "date"
    date: "ημερομηνία",
    // "datetime"
    datetime: "ημερομηνία και ώρα",
    // "datetime-local"
    "datetime-local": "ημερομηνία και ώρα τοπικά",
    // "email"
    email: "ηλεκτρονικό ταχυδρομείο",
    // "month"
    month: "μήνας",
    // "number"
    number: "αριθμός",
    // "password"
    password: "κωδικός πρόσβασης",
    // "range"
    range: "εύρος",
    // "tel"
    tel: "τηλέφωνο",
    // "text"
    text: "κείμενο",
    // "time"
    time: "ώρα",
    // "url"
    url: "διεύθυνση URL",
    // "week"
    week: "εβδομάδα",
    // "Hidden"
    hidden: "Κρυφό",
    // "Contain"
    contain: "Περιέχει",
    // "Cover"
    cover: "Κάλυψη",
    // "Fill"
    fill: "Γέμισμα",
    // "Next"
    next: "Επόμενο",
    // "Last"
    last: "Τελευταίο",
    // "Upon survey completion"
    onComplete: "Μετά την ολοκλήρωση της έρευνας",
    // "When question gets hidden"
    onHidden: "Όταν η ερώτηση κρυφτεί",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Όταν η ερώτηση ή το πάνελ/σελίδα της κρυφτούν",
    clearInvisibleValues: {
      // "Never"
      none: "Ποτέ"
    },
    clearIfInvisible: {
      // "Never"
      none: "Ποτέ"
    },
    // [Auto-translated] "Radio buttons"
    radio: "Κουμπιά επιλογής",
    inputType: {
      // "Color"
      color: "Χρώμα",
      // "Date"
      date: "Ημερομηνία",
      // "Date and Time"
      "datetime-local": "Ημερομηνία και Ώρα",
      // "Email"
      email: "Ηλεκτρονικό ταχυδρομείο",
      // "Month"
      month: "Μήνας",
      // "Number"
      number: "Αριθμός",
      // "Password"
      password: "Κωδικός πρόσβασης",
      // "Range"
      range: "Εύρος",
      // "Phone Number"
      tel: "Αριθμός τηλεφώνου",
      // "Text"
      text: "Κείμενο",
      // "Time"
      time: "Ώρα",
      // "URL"
      url: "Διεύθυνση URL",
      // "Week"
      week: "Εβδομάδα"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Μία τιμή",
      // [Auto-translated] "Range"
      range: "Έκταση"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Αυτο",
      // [Auto-translated] "Always"
      always: "Πάντα",
      // [Auto-translated] "Never"
      never: "Ποτέ"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Λάθος",
      // [Auto-translated] "Warning"
      warning: "Προειδοποίηση",
      // [Auto-translated] "Informational"
      info: "Ενημερωτικό"
    },
    cameraFacingMode: {
      // [Auto-translated] "Front"
      user: "Εμπρός",
      // [Auto-translated] "Rear"
      environment: "Πίσω"
    },
    acceptedCategories: {
      // [Auto-translated] "Images"
      image: "Εικόνες",
      // [Auto-translated] "Videos"
      video: "Βίντεο",
      // [Auto-translated] "Audio"
      audio: "Ήχου",
      // [Auto-translated] "Documents"
      document: "Έγγραφα",
      // [Auto-translated] "Archives"
      archive: "Αρχεία",
      // [Auto-translated] "Custom"
      custom: "Συνήθεια"
    },
    autocomplete: {
      // "Full Name"
      name: "Πλήρες Όνομα",
      // "Prefix"
      "honorific-prefix": "Πρόθεμα",
      // "First Name"
      "given-name": "Όνομα",
      // "Middle Name"
      "additional-name": "Μεσαίο Όνομα",
      // "Last Name"
      "family-name": "Επώνυμο",
      // "Suffix"
      "honorific-suffix": "Επίθημα",
      // "Nickname"
      nickname: "Παρατσούκλι",
      // "Job Title"
      "organization-title": "Τίτλος Εργασίας",
      // "User Name"
      username: "Όνομα χρήστη",
      // "New Password"
      "new-password": "Νέος Κωδικός Πρόσβασης",
      // "Current Password"
      "current-password": "Τρέχων Κωδικός Πρόσβασης",
      // "Organization Name"
      organization: "Όνομα Οργανισμού",
      // "Full Street Address"
      "street-address": "Πλήρης Διεύθυνση Οδού",
      // "Address Line 1"
      "address-line1": "Γραμμή Διεύθυνσης 1",
      // "Address Line 2"
      "address-line2": "Γραμμή Διεύθυνσης 2",
      // "Address Line 3"
      "address-line3": "Γραμμή Διεύθυνσης 3",
      // "Level 4 Address"
      "address-level4": "Διεύθυνση Επίπεδο 4",
      // "Level 3 Address"
      "address-level3": "Διεύθυνση Επίπεδο 3",
      // "Level 2 Address"
      "address-level2": "Διεύθυνση Επίπεδο 2",
      // "Level 1 Address"
      "address-level1": "Διεύθυνση Επίπεδο 1",
      // "Country Code"
      country: "Κωδικός Χώρας",
      // "Country Name"
      "country-name": "Όνομα Χώρας",
      // "Postal Code"
      "postal-code": "Ταχυδρομικός Κωδικός",
      // "Cardholder Name"
      "cc-name": "Όνομα Κατόχου Κάρτας",
      // "Cardholder First Name"
      "cc-given-name": "Όνομα Κατόχου Κάρτας",
      // "Cardholder Middle Name"
      "cc-additional-name": "Μεσαίο Όνομα Κατόχου Κάρτας",
      // "Cardholder Last Name"
      "cc-family-name": "Επώνυμο Κατόχου Κάρτας",
      // "Credit Card Number"
      "cc-number": "Αριθμός Πιστωτικής Κάρτας",
      // "Expiration Date"
      "cc-exp": "Ημερομηνία Λήξης",
      // "Expiration Month"
      "cc-exp-month": "Μήνας Λήξης",
      // "Expiration Year"
      "cc-exp-year": "Έτος Λήξης",
      // "Card Security Code"
      "cc-csc": "Κωδικός Ασφαλείας Κάρτας",
      // "Credit Card Type"
      "cc-type": "Τύπος Πιστωτικής Κάρτας",
      // "Transaction Currency"
      "transaction-currency": "Νόμισμα Συναλλαγής",
      // "Transaction Amount"
      "transaction-amount": "Ποσό Συναλλαγής",
      // "Preferred Language"
      language: "Προτιμώμενη Γλώσσα",
      // "Birthday"
      bday: "Ημερομηνία Γέννησης",
      // "Birthday Day"
      "bday-day": "Ημέρα Γέννησης",
      // "Birthday Month"
      "bday-month": "Μήνας Γέννησης",
      // "Birthday Year"
      "bday-year": "Έτος Γέννησης",
      // "Gender"
      sex: "Φύλο",
      // "Website URL"
      url: "Διεύθυνση Ιστοσελίδας",
      // "Profile Photo"
      photo: "Φωτογραφία Προφίλ",
      // "Telephone Number"
      tel: "Αριθμός Τηλεφώνου",
      // "Country Code for Phone"
      "tel-country-code": "Κωδικός Χώρας για Τηλέφωνο",
      // "National Telephone Number"
      "tel-national": "Εθνικός Αριθμός Τηλεφώνου",
      // "Area Code"
      "tel-area-code": "Κωδικός Περιοχής",
      // "Local Phone Number"
      "tel-local": "Τοπικός Αριθμός Τηλεφώνου",
      // "Local Phone Prefix"
      "tel-local-prefix": "Πρόθεμα Τοπικού Τηλεφώνου",
      // "Local Phone Suffix"
      "tel-local-suffix": "Επίθημα Τοπικού Τηλεφώνου",
      // "Phone Extension"
      "tel-extension": "Επέκταση Τηλεφώνου",
      // "Email Address"
      email: "Διεύθυνση Ηλεκτρονικού Ταχυδρομείου",
      // "Instant Messaging Protocol"
      impp: "Πρωτόκολλο Άμεσων Μηνυμάτων"
    },
    maskType: {
      // "None"
      none: "Κανένα",
      // "Pattern"
      pattern: "Μοτίβο",
      // "Numeric"
      numeric: "Αριθμητικό",
      // "Date and Time"
      datetime: "Ημερομηνία και Ώρα",
      // "Currency"
      currency: "Νόμισμα"
    },
    inputTextAlignment: {
      // "Auto"
      auto: "Αυτόματη",
      // "Left"
      left: "Αριστερά",
      // "Right"
      right: "Δεξιά"
    },
    // "All"
    all: "Όλα",
    // "Page"
    page: "Σελίδα",
    // "Survey"
    survey: "Έρευνα",
    // "When switching to the next page"
    onNextPage: "Όταν αλλάξετε στην επόμενη σελίδα",
    // "After an answer is changed"
    onValueChanged: "Μετά την αλλαγή μιας απάντησης",
    questionsOnPageMode: {
      // "Original structure"
      standard: "Αρχική δομή",
      // "Show all questions on one page"
      singlePage: "Εμφάνιση όλων των ερωτήσεων σε μία σελίδα",
      // "Show single question per page"
      questionPerPage: "Εμφάνιση μίας ερώτησης ανά σελίδα",
      // "Show single input field per page"
      inputPerPage: "Εμφάνιση μίας πεδίου εισαγωγής ανά σελίδα"
    },
    // "Show all questions"
    allQuestions: "Εμφάνιση όλων των ερωτήσεων",
    // "Show answered questions only"
    answeredQuestions: "Εμφάνιση μόνο των απαντημένων ερωτήσεων",
    // "Completed pages"
    pages: "Ολοκληρωμένες σελίδες",
    // "Answered questions"
    questions: "Απαντημένες ερωτήσεις",
    // "Answered required questions"
    requiredQuestions: "Απαντημένες υποχρεωτικές ερωτήσεις",
    // "Valid answers"
    correctQuestions: "Έγκυρες απαντήσεις",
    // "Completed pages (button UI)"
    buttons: "Ολοκληρωμένες σελίδες (κουμπιά UI)",
    // "Under the input field"
    underInput: "Κάτω από το πεδίο εισαγωγής",
    // "Under the question title"
    underTitle: "Κάτω από τον τίτλο της ερώτησης",
    // "On lost focus"
    onBlur: "Όταν χάσει την εστίαση",
    // "While typing"
    onTyping: "Κατά την πληκτρολόγηση",
    // "Under the row"
    underRow: "Κάτω από τη σειρά",
    // "Under the row, display one section only"
    underRowSingle: "Κάτω από τη σειρά, εμφάνιση μόνο μίας επέκτασης σειράς",
    // "Auto"
    auto: "Αυτόματο",
    timerInfoMode: {
      // "Both"
      combined: "Και τα δύο"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Με βάση τη διάταξη πίνακα"
    },
    panelsState: {
      // "Locked"
      default: "Κλειδωμένο",
      // "Collapse all"
      collapsed: "Σύμπτυξη όλων",
      // "Expand all"
      expanded: "Ανάπτυξη όλων",
      // "First expanded"
      firstExpanded: "Πρώτη ανάπτυξη"
    },
    widthMode: {
      // "Static"
      static: "Στατικό",
      // "Responsive"
      responsive: "Ανταποκρινόμενο"
    },
    contentMode: {
      // "Image"
      image: "Εικόνα",
      // "Video"
      video: "Βίντεο",
      // [Auto-translated] "YouTube"
      youtube: "Το YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "Κουμπιά",
      // "Dropdown"
      dropdown: "Αναπτυσσόμενο μενού",
      // [Auto-translated] "Segmented toggle"
      segmented: "Τμηματοποιημένη εναλλαγή",
      // [Auto-translated] "Radio buttons"
      radio: "Κουμπιά επιλογής",
      // [Auto-translated] "Checkbox"
      checkbox: "Πλαίσιο ελέγχου",
      // [Auto-translated] "Switch"
      switch: "Διακόπτης",
      // [Auto-translated] "Custom"
      custom: "Εθιμο"
    },
    rateColorMode: {
      // "Default"
      default: "Προεπιλογή",
      // "Scale"
      scale: "Κλίμακα"
    },
    scaleColorMode: {
      // "Monochrome"
      monochrome: "Μονοχρωματικό",
      // "Colored"
      colored: "Χρωματιστό"
    },
    autoGenerate: {
      // "Auto-generate"
      "true": "Αυτόματη δημιουργία",
      // "Manual"
      "false": "Χειροκίνητο"
    },
    rateType: {
      // "Labels"
      labels: "Ετικέτες",
      // "Stars"
      stars: "Αστέρια",
      // "Smileys"
      smileys: "Χαμογελαστά πρόσωπα"
    },
    state: {
      // "Locked"
      default: "Κλειδωμένο"
    },
    showQuestionNumbers: {
      // "Auto-numbering"
      default: "Αυτόματη αρίθμηση",
      // "Auto-numbering"
      on: "Αυτόματη αρίθμηση",
      // "Reset on each page"
      onPage: "Επαναφορά σε κάθε σελίδα",
      // "Reset on each panel"
      onpanel: "Επαναφορά σε κάθε πάνελ",
      // "Recursive numbering"
      recursive: "Αρίθμηση αναδρομική",
      // "No numbering"
      off: "Χωρίς αρίθμηση"
    },
    descriptionLocation: {
      // "Under the question title"
      underTitle: "Κάτω από τον τίτλο της ερώτησης",
      // "Under the input field"
      underInput: "Κάτω από το πεδίο εισαγωγής"
    },
    selectToRankAreasLayout: {
      // "Next to choices"
      horizontal: "Δίπλα στις επιλογές",
      // "Above choices"
      vertical: "Πάνω από τις επιλογές"
    },
    displayStyle: {
      // "Decimal"
      decimal: "Δεκαδικό",
      // "Currency"
      currency: "Νόμισμα",
      // "Percentage"
      percent: "Ποσοστό",
      // "Date"
      date: "Ημερομηνία"
    },
    totalDisplayStyle: {
      // "Decimal"
      decimal: "Δεκαδικό",
      // "Currency"
      currency: "Νόμισμα",
      // "Percentage"
      percent: "Ποσοστό",
      // "Date"
      date: "Ημερομηνία"
    },
    rowOrder: {
      // "Original"
      initial: "Αρχικό"
    },
    questionOrder: {
      // "Original"
      initial: "Αρχικό"
    },
    progressBarLocation: {
      // "Top"
      top: "Πάνω",
      // "Bottom"
      bottom: "Κάτω",
      // "Top and bottom"
      topbottom: "Πάνω και Κάτω",
      // "Above the header"
      aboveheader: "Πάνω από την κεφαλίδα",
      // "Below the header"
      belowheader: "Κάτω από την κεφαλίδα",
      // "Hidden"
      off: "Κρυφό"
    },
    // "Sum"
    sum: "Άθροισμα",
    // "Count"
    count: "Καταμέτρηση",
    // "Min"
    min: "Ελάχιστο",
    // "Max"
    max: "Μέγιστο",
    // "Avg"
    avg: "Μέσος όρος",
    searchMode: {
      // "Contains"
      contains: "Περιέχει",
      // "Starts with"
      startsWith: "Αρχίζει με"
    },
    backgroundImageFit: {
      // "Auto"
      auto: "Αυτόματο",
      // "Cover"
      cover: "Κάλυψη",
      // "Contain"
      contain: "Περιέχει",
      // "Stretch"
      fill: "Επέκταση",
      // "Tile"
      tile: "Πλακάκι"
    },
    backgroundImageAttachment: {
      // "Fixed"
      fixed: "Σταθερό",
      // "Scroll"
      scroll: "Κύλιση"
    },
    headerView: {
      // "Basic"
      basic: "Βασικό",
      // "Advanced"
      advanced: "Προηγμένο"
    },
    inheritWidthFrom: {
      // "Same as survey"
      survey: "Ίδιο με την έρευνα",
      // "Same as container"
      container: "Ίδιο με το κοντέινερ"
    },
    backgroundColorSwitch: {
      // "None"
      none: "Κανένα",
      // "Accent color"
      accentColor: "Χρώμα αντίθεσης",
      // "Custom"
      custom: "Προσαρμοσμένο"
    },
    colorPalette: {
      // "Light"
      light: "Ανοιχτό",
      // "Dark"
      dark: "Σκοτεινό"
    },
    isPanelless: {
      // "Default"
      "false": "Προεπιλογή",
      // "Without Panels"
      "true": "Χωρίς Πάνελ"
    },
    progressBarInheritWidthFrom: {
      // "Same as survey"
      survey: "Ίδιο με την έρευνα",
      // "Same as container"
      container: "Ίδιο με το κοντέινερ"
    }
  },
  // Regions of the "Regional Formats" category. Unlike survey languages, a region can be
  regionLocales: {
    // [Auto-translated] "Arabic"
    ar: "Αραβικά",
    // [Auto-translated] "Bulgarian"
    bg: "Βουλγαρικά",
    // [Auto-translated] "Catalan"
    ca: "Καταλανικά",
    // [Auto-translated] "Czech"
    cs: "Τσεχικά",
    // [Auto-translated] "Welsh"
    cy: "Ουαλικά",
    // [Auto-translated] "Danish"
    da: "Δανέζικα",
    // [Auto-translated] "German"
    de: "Γερμανικά",
    // [Auto-translated] "Greek"
    el: "Ελληνικά",
    // [Auto-translated] "English"
    en: "Αγγλικά",
    // [Auto-translated] "English (Australia)"
    "en-AU": "Αγγλικά (Αυστραλίας)",
    // [Auto-translated] "English (Canada)"
    "en-CA": "Αγγλικά (Καναδάς)",
    // [Auto-translated] "English (United Kingdom)"
    "en-GB": "Ελληνικά",
    // [Auto-translated] "English (Ireland)"
    "en-IE": "Αγγλικά (Ιρλανδία)",
    // [Auto-translated] "English (India)"
    "en-IN": "Αγγλικά (Ινδίας)",
    // [Auto-translated] "English (New Zealand)"
    "en-NZ": "Αγγλικά (Νέας Ζηλανδίας)",
    // [Auto-translated] "English (South Africa)"
    "en-ZA": "Αγγλικά (Νότια Αφρική)",
    // [Auto-translated] "Spanish"
    es: "Ισπανικά",
    // [Auto-translated] "Estonian"
    et: "Εσθονικά",
    // [Auto-translated] "Basque"
    eu: "Βασκικά",
    // [Auto-translated] "Persian"
    fa: "Περσικά",
    // [Auto-translated] "Finnish"
    fi: "Φινλανδικός",
    // [Auto-translated] "Filipino"
    fil: "Φιλιππινέζικα",
    // [Auto-translated] "French"
    fr: "γαλλική γλώσσα",
    // [Auto-translated] "French (Canada)"
    "fr-CA": "Γαλλικά (Καναδάς)",
    // [Auto-translated] "French (Switzerland)"
    "fr-CH": "Γαλλικά (Ελβετίας)",
    // [Auto-translated] "Hebrew"
    he: "Εβραϊκά",
    // [Auto-translated] "Hindi"
    hi: "Χίντι",
    // [Auto-translated] "Croatian"
    hr: "Κροατικά",
    // [Auto-translated] "Haitian Creole"
    ht: "Κρεολή της Αϊτής",
    // [Auto-translated] "Hungarian"
    hu: "Ουγγρικά",
    // [Auto-translated] "Indonesian"
    id: "Ινδονησιακά",
    // [Auto-translated] "Icelandic"
    is: "Ισλανδικά",
    // [Auto-translated] "Italian"
    it: "ιταλικός",
    // [Auto-translated] "Japanese"
    ja: "Ιαπωνικά",
    // [Auto-translated] "Georgian"
    ka: "Γεωργιανά",
    // [Auto-translated] "Kazakh"
    kk: "Καζακστάν",
    // [Auto-translated] "Korean"
    ko: "Κορεάτικα",
    // [Auto-translated] "Lithuanian"
    lt: "Λιθουανικά",
    // [Auto-translated] "Latvian"
    lv: "Λετονικά",
    // [Auto-translated] "Macedonian"
    mk: "Μακεδονικά",
    // [Auto-translated] "Burmese"
    mm: "Βιρμανικά",
    // [Auto-translated] "Malay"
    ms: "Μαλαϊκά",
    // [Auto-translated] "Dutch"
    nl: "Ολλανδικά",
    // [Auto-translated] "Dutch (Belgium)"
    "nl-BE": "Ολλανδικά (Βέλγιο)",
    // [Auto-translated] "Norwegian"
    no: "Νορβηγ",
    // [Auto-translated] "Polish"
    pl: "Πολωνικά",
    // [Auto-translated] "Portuguese"
    pt: "Πορτογαλικά",
    // [Auto-translated] "Portuguese (Brazil)"
    "pt-BR": "Πορτογαλικά (Βραζιλίας)",
    // [Auto-translated] "Romanian"
    ro: "Ρουμανικά",
    // [Auto-translated] "Russian"
    ru: "Ρωσικά",
    // [Auto-translated] "Slovak"
    sk: "Σλοβακικά",
    // [Auto-translated] "Slovenian"
    sl: "Σλοβενικά",
    // [Auto-translated] "Serbian"
    sr: "Σερβικά",
    // [Auto-translated] "Swedish"
    sv: "Σουηδικά",
    // [Auto-translated] "Swahili"
    sw: "Σουαχίλι",
    // [Auto-translated] "Telugu"
    tel: "Τελούγκου",
    // [Auto-translated] "Tajik"
    tg: "Τατζικιστάν",
    // [Auto-translated] "Thai"
    th: "Ταϊλανδικά",
    // [Auto-translated] "Turkish"
    tr: "Τούρκικος",
    // [Auto-translated] "Ukrainian"
    uk: "Ουκρανικά",
    // [Auto-translated] "Urdu"
    ur: "Ουρντού",
    // [Auto-translated] "Vietnamese"
    vi: "Βιετναμέζικα",
    // [Auto-translated] "Chinese"
    zh: "κινέζικα",
    // [Auto-translated] "Chinese (Simplified)"
    "zh-CN": "Κινέζικα (Απλοποιημένα)",
    // [Auto-translated] "Chinese (Traditional)"
    "zh-TW": "Κινέζικα (Παραδοσιακά)"
  },
  // Operators
  op: {
    // "Empty"
    empty: "Άδειο",
    // "Not empty"
    notempty: "Μη άδειο",
    // "Equals"
    equal: "Ισο με",
    // "Does not equal"
    notequal: "Δεν ισούται με",
    // "Contains"
    contains: "Περιέχει",
    // "Does not contain"
    notcontains: "Δεν περιέχει",
    // "Any of"
    anyof: "Οποιοδήποτε από",
    // [Auto-translated] "None of"
    noneof: "Κανένα από τα",
    // "All of"
    allof: "Όλα από",
    // "Greater than"
    greater: "Μεγαλύτερο από",
    // "Less than"
    less: "Μικρότερο από",
    // "Greater than or equal to"
    greaterorequal: "Μεγαλύτερο ή ίσο με",
    // "Less than or equal to"
    lessorequal: "Μικρότερο ή ίσο με",
    // "and"
    and: "και",
    // "or"
    or: "ή"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Επιλέξτε τη σελίδα για να την δοκιμάσετε",
    // "Show invisible elements"
    showInvisibleElements: "Εμφάνιση αόρατων στοιχείων",
    // "Hide invisible elements"
    hideInvisibleElements: "Απόκρυψη αόρατων στοιχείων",
    // "Previous"
    prevPage: "Προηγούμενη",
    // "Next"
    nextPage: "Επόμενη"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Αριθμός απαντήσεων",
    // "Email"
    emailvalidator: "Ηλεκτρονικό ταχυδρομείο",
    // "Expression"
    expressionvalidator: "Έκφραση",
    // "Number"
    numericvalidator: "Αριθμός",
    // "Regex"
    regexvalidator: "Κανονική έκφραση",
    // "Text"
    textvalidator: "Κείμενο"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Ολοκλήρωση έρευνας",
    // "Set answer"
    setvaluetrigger: "Ορισμός απάντησης",
    // "Copy answer"
    copyvaluetrigger: "Αντιγραφή απάντησης",
    // "Skip to question"
    skiptrigger: "Μετάβαση στην ερώτηση",
    // "Run expression"
    runexpressiontrigger: "Εκτέλεση έκφρασης",
    // "change visibility (deprecated)"
    visibletrigger: "Αλλαγή ορατότητας (παρωχημένο)"
  },
  peplaceholder: {
    regionalformat: {
      // [Auto-translated] "Same as survey language"
      locale: "Το ίδιο με τη γλώσσα της έρευνας"
    },
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "π.χ.: +1(999)-999-99-99"
    },
    datetimemask: {
      // "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "π.χ.: mm/dd/yyyy HH:MM:ss"
    },
    panelbase: {
      // "Ex.: 200px"
      questionTitleWidth: "π.χ.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "π.χ.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "π.χ.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Ένα ID πάνελ που δεν είναι ορατό στους συμμετέχοντες.",
      // "Type a panel subtitle."
      description: "Πληκτρολογήστε έναν υπότιτλο πάνελ.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Χρησιμοποιήστε το εικονίδιο μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που καθορίζει την ορατότητα του πάνελ.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Χρησιμοποιήστε το εικονίδιο μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που απενεργοποιεί τη λειτουργία μόνο για ανάγνωση για το πάνελ.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Χρησιμοποιήστε το εικονίδιο μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που αποτρέπει την υποβολή της έρευνας εκτός αν τουλάχιστον μία ερώτηση έχει απάντηση.",
      // "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Εφαρμόζεται σε όλες τις ερωτήσεις εντός αυτού του πάνελ. Όταν ρυθμιστεί σε \"Κρυφό\", κρύβει επίσης τις περιγραφές των ερωτήσεων. Αν θέλετε να παρακάμψετε αυτήν την ρύθμιση, ορίστε κανόνες στοίχισης τίτλων για κάθε μεμονωμένη ερώτηση. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο σελίδας (αν έχει ρυθμιστεί) ή σε επίπεδο έρευνας (\"Πάνω\" από προεπιλογή).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Ορίζει το σταθερό πλάτος για τους τίτλους των ερωτήσεων όταν είναι στοίχισμένοι αριστερά από τα κουτιά ερωτήσεων. Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Ορίζει την τοποθεσία ενός μηνύματος σφάλματος σε σχέση με όλες τις ερωτήσεις εντός του πάνελ. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο σελίδας (αν έχει ρυθμιστεί) ή σε επίπεδο έρευνας.",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Διατηρεί τη αρχική σειρά των ερωτήσεων ή τις τυχαία ανακατεύει. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο σελίδας (αν έχει ρυθμιστεί) ή σε επίπεδο έρευνας.",
      // "Repositions the panel to the end of a selected page."
      page: "Μετακινεί το πάνελ στο τέλος της επιλεγμένης σελίδας.",
      // "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Προσθέτει χώρο ή περιθώριο μεταξύ του περιεχομένου του πάνελ και της αριστερής πλευράς του κουτιού του πάνελ.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Αποεπιλέξτε για να εμφανίσετε το πάνελ σε μία γραμμή με την προηγούμενη ερώτηση ή πάνελ. Η ρύθμιση δεν ισχύει αν το πάνελ είναι το πρώτο στοιχείο στη φόρμα σας.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Επιλέξτε από: \"Αναπτυγμένο\" - το πάνελ εμφανίζεται πλήρως και μπορεί να συμπτυχθεί; \"Συμπτυγμένο\" - το πάνελ εμφανίζει μόνο τον τίτλο και την περιγραφή και μπορεί να αναπτυχθεί; \"Κλειδωμένο\" - το πάνελ εμφανίζεται πλήρως και δεν μπορεί να συμπτυχθεί.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Ορίζει το πλάτος του πάνελ σε σχέση με άλλα στοιχεία έρευνας στην ίδια γραμμή. Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
      // "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Αναθέτει αριθμούς στις ερωτήσεις που είναι ενσωματωμένες σε αυτό το πάνελ.",
      // "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Καθορίζει πόσες στήλες καλύπτει αυτό το πάνελ στη διάταξη πλέγματος.",
      // "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Αυτός ο πίνακας σας επιτρέπει να ρυθμίσετε κάθε στήλη πλέγματος εντός του πάνελ. Ορίζει αυτόματα το ποσοστό πλάτους για κάθε στήλη με βάση τον μέγιστο αριθμό στοιχείων σε μια σειρά. Για να προσαρμόσετε τη διάταξη πλέγματος, ρυθμίστε χειροκίνητα αυτές τις τιμές και ορίστε το πλάτος τίτλου για όλες τις ερωτήσεις σε κάθε στήλη."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Ένα ID πάνελ που δεν είναι ορατό στους συμμετέχοντες.",
      // "Type a panel subtitle."
      description: "Πληκτρολογήστε έναν υπότιτλο πάνελ.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Χρησιμοποιήστε το εικονίδιο μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που καθορίζει την ορατότητα του πάνελ.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Χρησιμοποιήστε το εικονίδιο μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που απενεργοποιεί τη λειτουργία μόνο για ανάγνωση για το πάνελ.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Χρησιμοποιήστε το εικονίδιο μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που αποτρέπει την υποβολή της έρευνας εκτός αν τουλάχιστον μία ερώτηση έχει απάντηση.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Εφαρμόζεται σε όλες τις ερωτήσεις εντός αυτού του πάνελ. Αν θέλετε να παρακάμψετε αυτήν την ρύθμιση, ορίστε κανόνες στοίχισης τίτλων για κάθε μεμονωμένη ερώτηση. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο σελίδας (αν έχει ρυθμιστεί) ή σε επίπεδο έρευνας (\"Πάνω\" από προεπιλογή).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Ορίζει το σταθερό πλάτος για τους τίτλους των ερωτήσεων όταν είναι στοίχισμένοι αριστερά από τα κουτιά ερωτήσεων. Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Ορίζει την τοποθεσία ενός μηνύματος σφάλματος σε σχέση με μια ερώτηση με μη έγκυρη είσοδο. Επιλέξτε ανάμεσα σε: \"Πάνω\" - το κείμενο σφάλματος τοποθετείται στην κορυφή του κουτιού ερώτησης; \"Κάτω\" - το κείμενο σφάλματος τοποθετείται στο κάτω μέρος του κουτιού ερώτησης. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο σελίδας (αν έχει ρυθμιστεί) ή σε επίπεδο έρευνας (\"Πάνω\" από προεπιλογή).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Ορίζει την τοποθεσία ενός μηνύματος σφάλματος σε σχέση με όλες τις ερωτήσεις εντός του πάνελ. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο σελίδας (αν έχει ρυθμιστεί) ή σε επίπεδο έρευνας.",
      // "Repositions the panel to the end of a selected page."
      page: "Μετακινεί το πάνελ στο τέλος μιας επιλεγμένης σελίδας.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Προσθέτει κενό διάστημα ή περιθώριο μεταξύ του περιεχομένου του πίνακα και του αριστερού περιγράμματος του πλαισίου του πίνακα.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Αποεπιλέξτε για να εμφανίσετε το πάνελ σε μία γραμμή με την προηγούμενη ερώτηση ή πάνελ. Η ρύθμιση δεν ισχύει αν το πάνελ είναι το πρώτο στοιχείο στη φόρμα σας.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Επιλέξτε από: \"Αναπτυγμένο\" - το πάνελ εμφανίζεται πλήρως και μπορεί να συμπτυχθεί; \"Συμπτυγμένο\" - το πάνελ εμφανίζει μόνο τον τίτλο και την περιγραφή και μπορεί να αναπτυχθεί; \"Κλειδωμένο\" - το πάνελ εμφανίζεται πλήρως και δεν μπορεί να συμπτυχθεί.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Ορίζει το πλάτος του πάνελ σε σχέση με άλλα στοιχεία έρευνας στην ίδια γραμμή. Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Πληκτρολογήστε ένα πρότυπο για τους τίτλους των δυναμικών πάνελ. Χρησιμοποιήστε {panelIndex} για τη γενική θέση του πάνελ και {visiblePanelIndex} για τη σειρά του μεταξύ των ορατών πάνελ. Εισαγάγετε αυτούς τους χώρους κράτησης στο μοτίβο για αυτόματη αρίθμηση.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Πληκτρολογήστε ένα πρότυπο για τους τίτλους των καρτελών. Χρησιμοποιήστε {panelIndex} για τη γενική θέση του πάνελ και {visiblePanelIndex} για τη σειρά του μεταξύ των ορατών πάνελ. Εισαγάγετε αυτούς τους χώρους κράτησης στο μοτίβο για αυτόματη αρίθμηση.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Κείμενο εφεδρείας για τους τίτλους των καρτελών που ισχύει όταν το μοτίβο τίτλου καρτέλας δεν παράγει έγκυρη τιμή.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Αυτή η ρύθμιση σας επιτρέπει να ελέγξετε την ορατότητα των μεμονωμένων πάνελ εντός του δυναμικού πάνελ. Χρησιμοποιήστε το χώρο κράτησης `{panel}` για να αναφέρετε το τρέχον πάνελ στην έκφρασή σας.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Αυτή η ρύθμιση κληρονομείται αυτόματα από όλες τις ερωτήσεις εντός αυτού του πάνελ. Αν θέλετε να παρακάμψετε αυτήν την ρύθμιση, ορίστε κανόνες στοίχισης τίτλων για κάθε μεμονωμένη ερώτηση. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο σελίδας (αν έχει ρυθμιστεί) ή σε επίπεδο έρευνας (\"Πάνω\" από προεπιλογή).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο σελίδας (αν έχει ρυθμιστεί) ή σε επίπεδο έρευνας (\"Κάτω από τον τίτλο του πάνελ\" από προεπιλογή).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Ορίζει τη θέση ενός νέου πάνελ. Από προεπιλογή, τα νέα πάνελ προστίθενται στο τέλος. Επιλέξτε \"Επόμενο\" για να προσθέσετε ένα νέο πάνελ μετά το τρέχον.",
      // "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Δημιουργεί αντίγραφο των απαντήσεων από το τελευταίο πάνελ και τις αναθέτει στο επόμενο προστιθέμενο δυναμικό πάνελ.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Αναφέρετε το όνομα της ερώτησης για να απαιτηθεί από τον χρήστη να παράσχει μοναδική απάντηση για αυτήν την ερώτηση σε κάθε πάνελ.",
      // "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Ενεργοποιεί μια προτροπή επιβεβαίωσης πριν από την κατάργηση ενός πίνακα.",
      // [Auto-translated] "Specify an expression that calculates the number of entries. This expression overrides the \"Initial number of entries\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum number of entries\" and \"Maximum number of entries\" settings. While this expression is set, respondents cannot add or remove entries manually."
      panelCountExpression: "Καθορίστε μια παράσταση που υπολογίζει τον αριθμό των καταχωρήσεων. Αυτή η έκφραση παρακάμπτει τη ρύθμιση \"Αρχικός αριθμός καταχωρήσεων\" και επαναξιολογείται κάθε φορά που αλλάζουν οι τιμές στις οποίες αναφέρεται. Το αποτέλεσμα περιορίζεται από τις ρυθμίσεις \"Ελάχιστος αριθμός καταχωρήσεων\" και \"Μέγιστος αριθμός καταχωρήσεων\". Ενώ έχει οριστεί αυτή η έκφραση, οι ερωτηθέντες δεν μπορούν να προσθέσουν ή να αφαιρέσουν καταχωρήσεις με μη αυτόματο τρόπο.",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "Αντιστοιχίζει αριθμούς σε ερωτήσεις που είναι ένθετες στον δυναμικό πίνακα."
    },
    matrixdynamic: {
      // [Auto-translated] "Specify an expression that calculates the number of rows. This expression overrides the \"Row count\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum row count\" and \"Maximum row count\" settings. While this expression is set, respondents cannot add or remove rows manually."
      rowCountExpression: "Καθορίστε μια παράσταση που υπολογίζει τον αριθμό των γραμμών. Αυτή η παράσταση παρακάμπτει τη ρύθμιση \"Πλήθος γραμμών\" και επαναξιολογείται κάθε φορά που αλλάζουν οι τιμές στις οποίες αναφέρεται. Το αποτέλεσμα περιορίζεται από τις ρυθμίσεις \"Ελάχιστος αριθμός γραμμών\" και \"Μέγιστος αριθμός γραμμών\". Ενώ έχει οριστεί αυτή η παράσταση, οι ερωτηθέντες δεν μπορούν να προσθέσουν ή να αφαιρέσουν σειρές με μη αυτόματο τρόπο.",
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Ενεργοποιεί ένα μήνυμα επιβεβαίωσης πριν από την κατάργηση μιας σειράς.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Επεκτείνει αυτόματα την ενότητα λεπτομερειών όταν προστίθεται μια νέα γραμμή στον πίνακα."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Δημιουργεί αντίγραφο των απαντήσεων από την τελευταία γραμμή και τις αναθέτει στη επόμενη προστιθέμενη δυναμική γραμμή.",
    // "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Αυτή η ρύθμιση σας επιτρέπει να αναθέσετε μια προεπιλεγμένη τιμή απάντησης με βάση μια έκφραση. Η έκφραση μπορεί να περιλαμβάνει βασικούς υπολογισμούς - `{q1_id} + {q2_id}`, λογικές εκφράσεις, όπως `{age} > 60`, και συναρτήσεις: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, κ.ά. Η τιμή που προσδιορίζεται από αυτήν την έκφραση χρησιμεύει ως η αρχική προεπιλεγμένη τιμή που μπορεί να αντικατασταθεί από την χειροκίνητη είσοδο του συμμετέχοντα.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που καθορίζει πότε θα επαναφερθεί η είσοδος του συμμετέχοντα στην τιμή που βασίζεται στην \"Προεπιλεγμένη τιμή έκφρασης\" ή \"Έκφραση καθορισμού τιμής\" ή στην \"Προεπιλεγμένη απάντηση\" (αν οποιοδήποτε από αυτά έχει ρυθμιστεί).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που καθορίζει πότε θα εκτελεστεί η \"Έκφραση καθορισμού τιμής\" και θα ανατεθεί δυναμικά η τιμή ως απάντηση.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Καθορίστε μια έκφραση που ορίζει την τιμή που θα οριστεί όταν πληρούνται οι συνθήκες στον κανόνα \"Set value if\". Η έκφραση μπορεί να περιλαμβάνει βασικούς υπολογισμούς - `{q1_id} + {q2_id}`, λογικές εκφράσεις, όπως `{age} > 60`, και συναρτήσεις: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, κ.ά. Η τιμή που προσδιορίζεται από αυτήν την έκφραση μπορεί να αντικατασταθεί από την χειροκίνητη είσοδο του συμμετέχοντα.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Ο δημιουργός έρευνας σας επιτρέπει να προσαρμόσετε χειροκίνητα τα πλάτη των στοιχείων της φόρμας για να ελέγξετε τη διάταξη. Αν αυτό δεν αποφέρει το επιθυμητό αποτέλεσμα, μπορείτε να ενεργοποιήσετε τη διάταξη πλέγματος, η οποία οργανώνει τα στοιχεία της φόρμας χρησιμοποιώντας ένα σύστημα βασισμένο σε στήλες. Για να ρυθμίσετε τις στήλες διάταξης, επιλέξτε μια σελίδα ή πάνελ και χρησιμοποιήστε τον πίνακα \"Ρυθμίσεις Ερώτησης\" → \"Στήλες πλέγματος\". Για να προσαρμόσετε πόσες στήλες καλύπτει μια ερώτηση, επιλέξτε την και ορίστε την επιθυμητή τιμή στο πεδίο \"Διάταξη\" → \"Εύρος στήλης\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Ένα ID ερώτησης που δεν είναι ορατό στους συμμετέχοντες.",
      // "Type a question subtitle."
      description: "Πληκτρολογήστε έναν υπότιτλο ερώτησης.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που καθορίζει την ορατότητα της ερώτησης.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που απενεργοποιεί τη λειτουργία μόνο για ανάγνωση για την ερώτηση.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που αποτρέπει την πρόοδο ή την υποβολή της έρευνας εκτός και αν η ερώτηση λάβει μια απάντηση.",
      // "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Αποεπιλέξτε για να εμφανίσετε την ερώτηση σε μία γραμμή με την προηγούμενη ερώτηση ή πάνελ. Η ρύθμιση δεν ισχύει αν η ερώτηση είναι το πρώτο στοιχείο στη φόρμα σας.",
      // "Repositions the question to the end of a selected page."
      page: "Μετακινεί την ερώτηση στο τέλος μιας επιλεγμένης σελίδας.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Επιλέξτε από: \"Αναπτυγμένο\" - το κουτί ερώτησης εμφανίζεται πλήρως και μπορεί να συμπτυχθεί; \"Συμπτυγμένο\" - το κουτί ερώτησης εμφανίζει μόνο τον τίτλο και την περιγραφή και μπορεί να αναπτυχθεί; \"Κλειδωμένο\" - το κουτί ερώτησης εμφανίζεται πλήρως και δεν μπορεί να συμπτυχθεί.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Αντιστοιχεί στους κανόνες στοίχισης τίτλων που ορίζονται σε πάνελ, σελίδα ή επίπεδο έρευνας. Όταν ρυθμιστεί σε \"Κρυφό\", κρύβει επίσης τις περιγραφές των ερωτήσεων. Η επιλογή \"Κληρονομία\" εφαρμόζει οποιεσδήποτε ρυθμίσεις ανώτερου επιπέδου (αν έχουν ρυθμιστεί) ή ρύθμιση σε επίπεδο έρευνας (\"Πάνω\" από προεπιλογή).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο έρευνας (\"Κάτω από τον τίτλο της ερώτησης\" από προεπιλογή).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Ορίζει την τοποθεσία του μηνύματος σφάλματος σε σχέση με την ερώτηση με μη έγκυρη είσοδο. Επιλέξτε μεταξύ: \"Πάνω\" - το κείμενο σφάλματος τοποθετείται στην κορυφή του κουτιού ερώτησης; \"Κάτω\" - το κείμενο σφάλματος τοποθετείται στο κάτω μέρος του κουτιού ερώτησης. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο έρευνας (\"Πάνω\" από προεπιλογή).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Προσθέτει χώρο ή περιθώριο μεταξύ του περιεχομένου της ερώτησης και της αριστερής πλευράς του κουτιού της ερώτησης.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Ορίζει το πλάτος της ερώτησης σε σχέση με τα άλλα στοιχεία έρευνας στην ίδια γραμμή. Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Επιλέξτε από: \"Όταν χαθεί η εστίαση\" - η τιμή ενημερώνεται όταν το πεδίο εισαγωγής χάσει την εστίαση; \"Κατά την πληκτρολόγηση\" - η τιμή ενημερώνεται σε πραγματικό χρόνο, καθώς οι χρήστες πληκτρολογούν. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο έρευνας (\"Όταν χαθεί η εστίαση\" από προεπιλογή).",
      // "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Μπορείτε να χρησιμοποιήσετε οποιοδήποτε web service ως πηγή δεδομένων για ερωτήσεις πολλαπλής επιλογής. Για να γεμίσετε τις τιμές επιλογών, εισάγετε τη διεύθυνση URL της υπηρεσίας που παρέχει τα δεδομένα.",
      // "A comparison operation used to filter the drop-down list."
      searchMode: "Μια λειτουργία σύγκρισης που χρησιμοποιείται για να φιλτράρει τη λίστα του αναπτυσσόμενου μενού.",
      // "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Τα μεγάλα κείμενα στις επιλογές θα δημιουργούν αυτόματα αλλαγές γραμμής για να προσαρμοστούν στο αναπτυσσόμενο μενού. Αποεπιλέξτε αν θέλετε τα κείμενα να κόβονται.",
      // "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Καθορίζει πόσες στήλες καλύπτει αυτή η ερώτηση στη διάταξη πλέγματος."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Χρησιμοποιήστε το εικονίδιο με το μαγικό ραβδί για να ορίσετε πότε η τιμή της ερώτησης θεωρείται έγκυρη.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Τα σφάλματα εμποδίζουν την πρόοδο μέχρι να επιλυθούν. Οι προειδοποιήσεις επισημαίνουν προβλήματα, αλλά επιτρέπουν τη συνέχιση. Οι ενημερωτικές σημειώσεις προσφέρουν πρόσθετο πλαίσιο ή ουδέτερη καθοδήγηση. Όταν χρησιμοποιείτε προειδοποιήσεις ή ενημερωτικές σημειώσεις, συνιστούμε να ενεργοποιήσετε την άμεση επικύρωση: \"Έρευνα\" → \"Επικύρωση\" → \"Εκτέλεση επικύρωσης\" → \"Μετά την αλλαγή μιας απάντησης\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Ορίζει το πλάτος της περιοχής υπογραφής και της τελικής εικόνας.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Ορίζει το ύψος της περιοχής υπογραφής και της τελικής εικόνας.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Επιλέξτε αν θέλετε η περιοχή υπογραφής να γεμίζει όλο τον διαθέσιμο χώρο μέσα στο κουτί της ερώτησης, διατηρώντας την προεπιλεγμένη αναλογία 3:2. Όταν οριστούν προσαρμοσμένες τιμές πλάτους και ύψους, η ρύθμιση θα διατηρήσει την αναλογία αυτών των διαστάσεων."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Καθορίζει το ύψος εμφάνισης των μεταφορτωμένων εικόνων στην προεπισκόπηση και το πραγματικό ύψος των εικόνων που λαμβάνονται με την κάμερα. Στη λειτουργία μεταφόρτωσης ενός αρχείου, το ύψος της οθόνης περιορίζεται από την περιοχή προεπισκόπησης. Στη λειτουργία μεταφόρτωσης πολλαπλών αρχείων, περιορίζεται από την περιοχή μικρογραφιών.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Καθορίζει το πλάτος εμφάνισης των μεταφορτωμένων εικόνων στην προεπισκόπηση και το πραγματικό πλάτος των εικόνων που λαμβάνονται με την κάμερα. Στη λειτουργία μεταφόρτωσης ενός αρχείου, το πλάτος της οθόνης περιορίζεται από την περιοχή προεπισκόπησης. Στη λειτουργία μεταφόρτωσης πολλαπλών αρχείων, περιορίζεται από την περιοχή μικρογραφιών.",
      // "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Εμφανίζει προεπισκοπήσεις μικρογραφιών για ανεβασμένα αρχεία όταν είναι δυνατόν. Αποεπιλέξτε αν θέλετε να εμφανίζονται τα εικονίδια αρχείων αντ' αυτού.",
      // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
      confirmDelete: "Ενεργοποιεί ένα μήνυμα που ζητά να επιβεβαιώσετε τη διαγραφή του αρχείου."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Η επιλογή \"Αυτόματα\" καθορίζει αυτόματα την κατάλληλη λειτουργία εμφάνισης - Εικόνα, Βίντεο ή YouTube - με βάση την URL που παρέχεται."
    },
    imagepicker: {
      // "Overrides the minimum and maximum height values."
      imageHeight: "Αντικαθιστά τις ελάχιστες και μέγιστες τιμές ύψους.",
      // "Overrides the minimum and maximum width values."
      imageWidth: "Αντικαθιστά τις ελάχιστες και μέγιστες τιμές πλάτους.",
      // "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Τιμή\" χρησιμεύει ως ID στοιχείου που χρησιμοποιείται σε κανόνες συνθήκης. \"Κείμενο\" εμφανίζεται στους συμμετέχοντες.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Επιλέξτε μεταξύ \"Εικόνα\" και \"Βίντεο\" για να ορίσετε τη λειτουργία περιεχομένου του επιλέκτη μέσου. Αν επιλέξετε \"Εικόνα\", βεβαιωθείτε ότι όλες οι επιλογές που παρέχετε είναι αρχεία εικόνας στους εξής τύπους: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Αν επιλέξετε \"Βίντεο\", βεβαιωθείτε ότι όλες οι επιλογές είναι άμεσες συνδέσεις σε αρχεία βίντεο στους εξής τύπους: MP4, MOV, WMV, FLV, AVI, MKV. Σημειώστε ότι οι σύνδεσμοι του YouTube δεν υποστηρίζονται για τις επιλογές βίντεο."
    },
    comment: {
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Ορίζει τον αριθμό των γραμμών που εμφανίζονται στο πεδίο εισαγωγής. Αν η εισαγωγή καταλαμβάνει περισσότερες γραμμές, θα εμφανιστεί η μπάρα κύλισης."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Επιλέξτε αν θέλετε να αποτρέψετε τους συμμετέχοντες από το να συμπληρώσουν την έρευνά σας.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Ορίζει την τοποθεσία της γραμμής προόδου. Η τιμή \"Αυτόματα\" εμφανίζει τη γραμμή προόδου πάνω ή κάτω από την κεφαλίδα της έρευνας."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Ένα ID στήλης που δεν είναι ορατό στους συμμετέχοντες.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Όταν ενεργοποιηθεί για μια στήλη, απαιτεί από τον συμμετέχοντα να παρέχει μια μοναδική απάντηση για κάθε ερώτηση σε αυτή τη στήλη.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Ορίζει τον αριθμό των γραμμών που εμφανίζονται στο πεδίο εισαγωγής. Αν η εισαγωγή καταλαμβάνει περισσότερες γραμμές, θα εμφανιστεί η μπάρα κύλισης.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που καθορίζει την ορατότητα της στήλης.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που απενεργοποιεί τη λειτουργία μόνο για ανάγνωση για τη στήλη.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που αποτρέπει την υποβολή της έρευνας εκτός και αν τουλάχιστον μία ερώτηση έχει απάντηση.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Όταν επιλεγεί, δημιουργεί μια ατομική στήλη για κάθε επιλογή.",
      // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Διατάσσει τις επιλογές επιλογής σε διάταξη πολλαπλών στηλών. Όταν οριστεί σε 0, οι επιλογές εμφανίζονται σε μία γραμμή. Όταν οριστεί σε -1, η πραγματική τιμή κληρονομείται από την ιδιότητα \"Αριθμός εισχωρημένων στηλών\" του γονικού πίνακα."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Ο χαμηλότερος αριθμός που μπορούν να επιλέξουν οι χρήστες.",
      // "The highest number that users can select."
      max: "Ο μεγαλύτερος αριθμός που μπορούν να επιλέξουν οι χρήστες.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Το διάστημα μεταξύ των επιλέξιμων τιμών κλίμακας. Για παράδειγμα, ένα βήμα 5 θα επιτρέψει στους χρήστες να επιλέξουν 0, 5, 10 κ.λπ.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Η ελάχιστη απόσταση μεταξύ των αντίχειρων του ρυθμιστικού που μπορεί να ορίσει ένας χρήστης.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Η μέγιστη απόσταση μεταξύ των αντίχειρων του ρυθμιστικού που μπορεί να ορίσει ένας χρήστης.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Καθορίζει πόσες ετικέτες κλίμακας θα δημιουργηθούν. Η τιμή -1 σημαίνει ότι ο αριθμός υπολογίζεται αυτόματα με βάση την τιμή Min και την τιμή Max.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Χρησιμοποιήστε το '{0}' ως σύμβολο κράτησης θέσης για την πραγματική τιμή.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Σας επιτρέπει να ορίσετε προσαρμοσμένες ετικέτες σε συγκεκριμένες τιμές και προαιρετικά να αντιστοιχίσετε αντίστοιχο κείμενο σε αυτές (π.χ. 0 = \"Κακή\", 100 = \"Εξαιρετική\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Χρησιμοποιήστε το '{0}' ως σύμβολο κράτησης θέσης για την πραγματική τιμή.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Επιτρέπει στους χρήστες να μετακινούν τον έ��αν αντίχειρα πέρα από τον άλλο.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Εμφανίζει ένα κουμπί που απαλείφει την επιλεγμένη τιμή ρυθμιστικού και την ορίζει ως απροσδιόριστη.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Ορίζει δυναμικά την ελάχιστη τιμή του ρυθμιστικού χρησιμοποιώντας μια έκφραση. Υποστηρίζει βασικούς υπολογισμούς (π.χ., '{q1_id} + {q2_id}'), λογική Boolean (π.χ., '{age} > 60') και συναρτήσεις όπως 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' και άλλα.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Ορίζει δυναμικά τη μέγιστη τιμή του ρυθμιστικού χρησιμοποιώντας μια έκφραση. Υποστηρίζει βασικούς υπολογισμούς (π.χ., '{q1_id} + {q2_id}'), λογική Boolean (π.χ., '{age} > 60') και συναρτήσεις όπως 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' και άλλα."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Κάνει αυτή την επιλογή αποκλειστική. Όταν επιλεγεί από έναν χρήστη, θα αποεπιλέξει αυτόματα όλες τις άλλες επιλογές στην ερώτηση.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Κάνει τα πλαίσια ελέγχου σε αυτήν τη στήλη αποκλειστικά. Όταν επιλεγεί από έναν χρήστη, θα καταργήσει αυτόματα την επιλογή όλων των άλλων πλαισίων ελέγχου στην ίδια σειρά."
    },
    // "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Επιλέξτε αν τα κεφαλαία και πεζά γράμματα στην κανονική έκφραση πρέπει να αντιμετωπίζονται ως ισοδύναμα.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Επιλέξτε από: \"Στατικό\" - ορίζει σταθερό πλάτος; \"Ανταποκρινόμενο\" - κάνει την έρευνα να καταλαμβάνει το πλήρες πλάτος της οθόνης; \"Αυτόματα\" - εφαρμόζει οποιοδήποτε από τα δύο, ανάλογα με τους τύπους ερωτήσεων που χρησιμοποιούνται.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Αναθέστε μια μοναδική τιμή cookie για την έρευνά σας. Το cookie θα οριστεί στον περιηγητή του συμμετέχοντα μετά την ολοκλήρωση της έρευνας για να αποτραπεί η επανυποβολή της ίδιας έρευνας.",
    // "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Επικολλήστε έναν σύνδεσμο εικόνας (χωρίς όρια μεγέθους) ή κάντε κλικ στο εικονίδιο του φακέλου για να περιηγηθείτε σε ένα αρχείο από τον υπολογιστή σας (έως 64KB).",
    // "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Ορίζει το πλάτος του λογότυπου σε μονάδες CSS (px, %, in, pt, κλπ).",
    // "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Ορίζει το ύψος του λογότυπου σε μονάδες CSS (px, %, in, pt, κλπ).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Επιλέξτε από: \"Κανένα\" - η εικόνα διατηρεί το αρχικό της μέγεθος; \"Περιέχει\" - η εικόνα προσαρμόζεται για να ταιριάζει διατηρώντας την αναλογία της; \"Κάλυψη\" - η εικόνα καλύπτει όλο το κουτί διατηρώντας την αναλογία της; \"Επέκταση\" - η εικόνα προσαρμόζεται για να γεμίσει το κουτί χωρίς να διατηρεί την αναλογία της.",
    // "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Επιλέξτε αν θέλετε η έρευνα να προχωρά αυτόματα στην επόμενη σελίδα μόλις ο συμμετέχων απαντήσει σε όλες τις ερωτήσεις στην τρέχουσα σελίδα. Αυτή η λειτουργία δεν εφαρμόζεται αν η τελευταία ερώτηση στη σελίδα είναι ανοιχτού τύπου ή επιτρέπει πολλές απαντήσεις.",
    // "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Επιλέξτε αν θέλετε η έρευνα να ολοκληρώνεται αυτόματα αφού ο συμμετέχων απαντήσει σε όλες τις ερωτήσεις.",
    // "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Ορίζει την ορατότητα των κουμπιών πλοήγησης στη σελίδα.",
    // "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Ορίζει την τοποθεσία των κουμπιών πλοήγησης στη σελίδα.",
    // "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Ενεργοποιεί τη σελίδα προεπισκόπησης με όλες τις ή μόνο τις απαντημένες ερωτήσεις.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Εφαρμόζεται σε όλες τις ερωτήσεις εντός της έρευνας. Αυτή η ρύθμιση μπορεί να παρακαμφθεί από τους κανόνες στοίχισης τίτλων σε χαμηλότερα επίπεδα: πάνελ, σελίδα ή ερώτηση. Μια ρύθμιση χαμηλότερου επιπέδου παρακάμπτει αυτές σε υψηλότερο επίπεδο.",
    // "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Ένα σύμβολο ή μια ακολουθία συμβόλων που υποδεικνύει ότι μια απάντηση είναι υποχρεωτική.",
    // "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Εισάγετε έναν αριθμό ή γράμμα με το οποίο θέλετε να ξεκινήσει η αρίθμηση.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Ορίζει την τοποθεσία ενός μηνύματος σφάλματος σε σχέση με την ερώτηση με μη έγκυρη είσοδο. Επιλέξτε μεταξύ: \"Πάνω\" - το κείμενο σφάλματος τοποθετείται στην κορυφή του κουτιού ερώτησης; \"Κάτω\" - το κείμενο σφάλματος τοποθετείται στο κάτω μέρος του κουτιού ερώτησης.",
    // "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Επιλέξτε αν θέλετε το πρώτο πεδίο εισαγωγής σε κάθε σελίδα να είναι έτοιμο για είσοδο κειμένου.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Διατηρεί την αρχική σειρά των ερωτήσεων ή τις τυχαία ανακατεύει. Η επίδραση αυτής της ρύθμισης είναι ορατή μόνο στην καρτέλα Προεπισκόπηση.",
    // "For text entry questions only."
    maxTextLength: "Μόνο για ερωτήσεις εισαγωγής κειμένου.",
    // "For question comments only."
    maxCommentLength: "Μόνο για σχόλια ερωτήσεων.",
    // "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Ορίζει τον αριθμό των γραμμών που εμφανίζονται στις περιοχές κειμένου για τα σχόλια της ερώτησης. Αν η είσοδος καταλαμβάνει περισσότερες γραμμές, θα εμφανιστεί η μπάρα κύλισης.",
    // "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Επιλέξτε αν θέλετε τα σχόλια των ερωτήσεων και τις ερωτήσεις με μακρύ κείμενο να αναπτύσσονται αυτόματα στο ύψος τους με βάση το μήκος του εισαγόμενου κειμένου.",
    // "For question comments and Long Text questions only."
    allowResizeComment: "Μόνο για σχόλια ερωτήσεων και ερωτήσεις με μακρύ κείμενο.",
    // "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Οι προσαρμοσμένες μεταβλητές χρησιμεύουν ως ενδιάμεσες ή βοηθητικές μεταβλητές που χρησιμοποιούνται σε υπολογισμούς φόρμας. Παίρνουν τις τιμές εισόδου του συμμετέχοντα ως πηγές τιμών. Κάθε προσαρμοσμένη μεταβλητή έχει ένα μοναδικό όνομα και μια έκφραση στην οποία βασίζεται.",
    // "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Επιλέξτε αν θέλετε η υπολογισμένη τιμή της έκφρασης να αποθηκευτεί μαζί με τα αποτελέσματα της έρευνας.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Ένας ενεργοποιητής είναι ένα γεγονός ή συνθήκη που βασίζεται σε μια έκφραση. Μόλις η έκφραση αξιολογηθεί σε \"αληθές\", ο ενεργοποιητής προκαλεί μια ενέργεια. Μια τέτοια ενέργεια μπορεί προαιρετικά να έχει μια στόχο ερώτηση την οποία επηρεάζει.",
    // "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Επιλέξτε αν θέλετε ή όχι να καθαρίζετε τις τιμές για ερωτήσεις που κρύβονται από λογική συνθήκης και πότε να το κάνετε.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Επιλέξτε από: \"Όταν χαθεί η εστίαση\" - η τιμή ενημερώνεται όταν το πεδίο εισαγωγής χάσει την εστίαση; \"Κατά την πληκτρολόγηση\" - η τιμή ενημερώνεται σε πραγματικό χρόνο, καθώς οι χρήστες πληκτρολογούν.",
    // "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Η αριστερή τιμή χρησιμεύει ως ID στήλης που χρησιμοποιείται σε κανόνες συνθήκης, η δεξιά τιμή εμφανίζεται στους συμμετέχοντες.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Η αριστερή τιμή χρησιμεύει ως ID σειράς που χρησιμοποιείται σε κανόνες συνθήκης, η δεξιά τιμή εμφανίζεται στους συμμετέχοντες.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Ορατό μόνο αν τουλάχιστον μία στήλη εμφανίζει συνολικές τιμές που έχουν οριστεί με τη \"Μέθοδο Συγκέντρωσης\" ή \"Έκφραση Συνολικής Τιμής\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Ορίζει την τοποθεσία του μηνύματος σφάλματος σε σχέση με ένα κελί με μη έγκυρη είσοδο. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση από την ιδιότητα \"Στοίχιση μηνύματος σφάλματος\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Ορίζει την τοποθεσία των μηνυμάτων σφάλματος για ερωτήσεις που είναι ενσωματωμένες σε τμήματα λεπτομερειών. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση από την ιδιότητα \"Στοίχιση μηνύματος σφάλματος\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Όταν η ιδιότητα \"Αποτροπή διπλών απαντήσεων\" είναι ενεργοποιημένη, ένας συμμετέχων που προσπαθεί να υποβάλει μια διπλότυπη καταχώρηση θα λάβει το παρακάτω μήνυμα σφάλματος.",
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "Όταν η ιδιότητα \"Αποτροπή διπλότυπων αποκρίσεων\" είναι ενεργοποιημένη για μια στήλη μήτρας, ένας ερωτώμενος που επιχειρεί να υποβάλει μια διπλότυπη καταχώρηση θα λάβει το ακόλουθο μήνυμα λάθους."
    },
    // "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Σας επιτρέπει να υπολογίσετε συνολικές τιμές με βάση μια έκφραση. Η έκφραση μπορεί να περιλαμβάνει βασικούς υπολογισμούς (`{q1_id} + {q2_id}`), λογικές εκφράσεις (`{age} > 60`) και συναρτήσεις ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, κλπ.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Αναφορά σε ID στήλης για να απαιτήσετε από τον χρήστη να παράσχει μια μοναδική απάντηση για κάθε ερώτηση μέσα στην καθορισμένη στήλη.",
    // "Type a subtitle."
    description: "Πληκτρολογήστε έναν υπότιτλο.",
    // "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Επιλέξτε μια γλώσσα για να ξεκινήσετε τη δημιουργία της έρευνάς σας. Για να προσθέσετε μια μετάφραση, μεταβείτε σε μια νέα γλώσσα και μεταφράστε το αρχικό κείμενο εδώ ή στην καρτέλα Μεταφράσεις.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Ορίζει την τοποθεσία ενός τμήματος λεπτομέρειας σε σχέση με μια σειρά. Επιλέξτε από: \"Κανένα\" - δεν προστίθεται καμία επέκταση; \"Κάτω από τη σειρά\" - μια επέκταση σειράς τοποθετείται κάτω από κάθε σειρά του πίνακα; \"Κάτω από τη σειρά, εμφάνιση μόνο μίας επέκτασης σειράς\" - η επέκταση εμφανίζεται μόνο κάτω από μία σειρά, οι υπόλοιπες επεκτάσεις σειρών είναι συμπτυγμένες.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Επιλέξτε από: \"Κανένα\" - η εικόνα διατηρεί το αρχικό της μέγεθος; \"Περιέχει\" - η εικόνα προσαρμόζεται για να ταιριάζει διατηρώντας την αναλογία της; \"Κάλυψη\" - η εικόνα καλύπτει όλο το κουτί διατηρώντας την αναλογία της; \"Επέκταση\" - η εικόνα προσαρμόζεται για να γεμίσει το κουτί χωρίς να διατηρεί την αναλογία της.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Η επιλογή \"Κληρονομία\" εφαρμόζει μια ρύθμιση σε επίπεδο έρευνας (\"Απενεργοποιημένο\" από προεπιλογή).",
    // "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Η επιλογή \"Κληρονομία\" εφαρμόζει μια ρύθμιση σε επίπεδο έρευνας (\"Ενεργοποιημένο\" από προεπιλογή).",
    // "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Ένα χρονικό διάστημα σε δευτερόλεπτα μετά το οποίο η έρευνα προχωρά αυτόματα στην σελίδα \"Ευχαριστούμε\". Όταν οριστεί σε 0, μετράει τον χρόνο που πέρασε στην έρευνα.",
    // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Ένα χρονικό διάστημα σε δευτερόλεπτα μετά το οποίο η έρευνα προχωρά αυτόματα στην επόμενη σελίδα. Κρύβει το κουμπί πλοήγησης \"Προηγούμενη\". Όταν οριστεί σε 0, μετράει τον χρόνο που πέρασε στην τρέχουσα σελίδα.",
    // "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Ενεργοποιήστε αυτήν την επιλογή για να ενεργοποιήσετε την επικύρωση όταν ένας χρήστης εστιάζει σε ένα άδειο πεδίο εισαγωγής και το αφήνει χωρίς να κάνει αλλαγές.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Ένα ID σελίδας που δεν είναι ορατό στους συμμετέχοντες.",
      // "Type a page subtitle."
      description: "Πληκτρολογήστε έναν υπότιτλο σελίδας.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Ένας τίτλος που εμφανίζεται σε ένα κουμπί πλοήγησης στη γραμμή προόδου ή στο περιεχόμενο (TOC). Αν αφήσετε αυτό το πεδίο κενό, το κουμπί πλοήγησης θα χρησιμοποιήσει τον τίτλο της σελίδας ή το όνομα της σελίδας. Για να ενεργοποιήσετε τη γραμμή προόδου ή το TOC, μεταβείτε στο \"Έρευνα\" → \"Πλοήγηση\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Ένα χρονικό διάστημα σε δευτερόλεπτα μετά το οποίο η έρευνα προχωρά αυτόματα στην επόμενη σελίδα. Κρύβει το κουμπί πλοήγησης \"Προηγούμενη\". Όταν οριστεί σε 0, μετράει τον χρόνο που πέρασε στην τρέχουσα σελίδα.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που καθορίζει την ορατότητα της σελίδας.",
      // "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που απενεργοποιεί τη λειτουργία μόνο για ανάγνωση για τη σελίδα.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που αποτρέπει την υποβολή της έρευνας εκτός και αν τουλάχιστον μία ερώτηση έχει απάντηση.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Εφαρμόζεται σε όλες τις ερωτήσεις εντός αυτής της σελίδας. Όταν ρυθμιστεί σε \"Κρυφό\", κρύβει επίσης τις περιγραφές των ερωτήσεων. Αν θέλετε να παρακάμψετε αυτήν την ρύθμιση, ορίστε κανόνες στοίχισης τίτλων για μεμονωμένες ερωτήσεις ή πάνελ. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο έρευνας (\"Πάνω\" από προεπιλογή).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Ορίζει σταθερό πλάτος για τους τίτλους των ερωτήσεων όταν είναι στοίχισμένοι αριστερά από τα κουτιά ερωτήσεων. Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Ορίζει την τοποθεσία ενός μηνύματος σφάλματος σε σχέση με την ερώτηση με μη έγκυρη είσοδο. Επιλέξτε μεταξύ: \"Πάνω\" - το κείμενο σφάλματος τοποθετείται στην κορυφή του κουτιού ερώτησης; \"Κάτω\" - το κείμενο σφάλματος τοποθετείται στο κάτω μέρος του κουτιού ερώτησης. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο έρευνας (\"Πάνω\" από προεπιλογή).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Διατηρεί την αρχική σειρά των ερωτήσεων ή τις τυχαία ανακατεύει. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο έρευνας (\"Αρχικό\" από προεπιλογή). Η επίδραση αυτής της ρύθμισης είναι ορατή μόνο στην καρτέλα Προεπισκόπηση.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Ορίζει την ορατότητα των κουμπιών πλοήγησης στη σελίδα. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο έρευνας, η οποία είναι \"Ορατή\" από προεπιλογή.",
      // "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Αυτός ο πίνακας σας επιτρέπει να ρυθμίσετε κάθε στήλη πλέγματος στη σελίδα. Ορίζει αυτόματα το ποσοστό πλάτους για κάθε στήλη με βάση τον μέγιστο αριθμό στοιχείων σε μια σειρά. Για να προσαρμόσετε τη διάταξη πλέγματος, ρυθμίστε χειροκίνητα αυτές τις τιμές και ορίστε το πλάτος τίτλου για όλες τις ερωτήσεις σε κάθε στήλη."
    },
    // "Sets the location of a timer on a page."
    timerLocation: "Ορίζει την τοποθεσία ενός χρονομετρητή στη σελίδα.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Επιλέξτε από: \"Κλειδωμένο\" - οι χρήστες δεν μπορούν να αναπτύξουν ή να συμπτύξουν τα πάνελ; \"Σύμπτυξη όλων\" - όλα τα πάνελ ξεκινούν σε κατάσταση συμπτυγμένων; \"Ανάπτυξη όλων\" - όλα τα πάνελ ξεκινούν σε κατάσταση αναπτυγμένων; \"Πρώτη ανάπτυξη\" - μόνο το πρώτο πάνελ είναι αρχικά αναπτυγμένο. Εφαρμόζεται αν η \"Λειτουργία εμφάνισης πάνελ\" είναι ρυθμισμένη σε \"Λίστα\" και έχει οριστεί η ιδιότητα \"Πρότυπο τίτλου πάνελ\".",
    // "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Εισάγετε ένα κοινό όνομα ιδιότητας εντός του πίνακα αντικειμένων που περιέχει τις διευθύνσεις URL των εικόνων ή βίντεο που θέλετε να εμφανίσετε στη λίστα επιλογών.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Η αριστερή τιμή χρησιμεύει ως ID στοιχείου που χρησιμοποιείται σε κανόνες συνθήκης, η δεξιά τιμή εμφανίζεται στους συμμετέχοντες.",
    // "Type a user-friendly title to display."
    title: "Πληκτρολογήστε έναν φιλικό προς το χρήστη τίτλο για εμφάνιση.",
    // "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Εξασφαλίζει ότι οι χρήστες δεν θα ολοκληρώσουν την έρευνα μέχρι να ανέβουν τα αρχεία.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Ένας αναγνωριστικός κωδικός σύνδεσης είναι ένα προσαρμοσμένο κλειδί που μπορείτε να αναθέσετε σε αρκετές ερωτήσεις για να τις συνδέσετε μεταξύ τους και να συγχρονίσετε τις τιμές τους. Αυτές οι τιμές θα συγχωνευτούν σε έναν πίνακα ή αντικείμενο και θα αποθηκευτούν στα αποτελέσματα της έρευνας χρησιμοποιώντας το κλειδί ως όνομα ιδιότητας.",
    // "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Μια τιμή που εμφανίζεται σε ερωτήσεις HTML και στους δυναμικούς τίτλους και περιγραφές των στοιχείων έρευνας όταν η τιμή της ερώτησης είναι κενή.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Σε τύπους ερωτήσεων μονής και πολλαπλής επιλογής, κάθε επιλογή έχει ένα ID και μια τιμή εμφάνισης. Όταν επιλεγεί, αυτή η ρύθμιση εμφανίζει μια τιμή εμφάνισης αντί για μια τιμή ID σε ερωτήσεις HTML και στους δυναμικούς τίτλους και περιγραφές των στοιχείων έρευνας.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Επιλέξτε αν θέλετε ή όχι να καθαρίσετε τις τιμές ερωτήσεων που κρύβονται από λογική συνθήκης και πότε να το κάνετε. Η επιλογή \"Κληρονομία\" εφαρμόζει τη ρύθμιση σε επίπεδο έρευνας (\"Μετά την ολοκλήρωση της έρευνας\" από προεπιλογή).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Επιλέξτε από: \"Όλα\" - αντιγράφει όλες τις επιλογές από την επιλεγμένη ερώτηση; \"Επιλεγμένα\" - αντιγράφει δυναμικά μόνο τις επιλεγμένες επιλογές; \"Μη επιλεγμένα\" - αντιγράφει δυναμικά μόνο τις μη επιλεγμένες επιλογές. Οι επιλογές \"Κανένα\" και \"Άλλο\" αντιγράφονται από προεπιλογή αν είναι ενεργοποιημένες στην ερώτηση προέλευσης.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Σε τύπους ερωτήσεων μονής και πολλαπλής επιλογής, κάθε επιλογή έχει ένα ID και μια τιμή εμφάνισης. Αυτή η ρύθμιση καθορίζει ποια στήλη πίνακα ή ερώτηση πάνελ θα παρέχει τα IDs.",
    // "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Σε τύπους ερωτήσεων μονής και πολλαπλής επιλογής, κάθε επιλογή έχει ένα ID και μια τιμή εμφάνισης. Αυτή η ρύθμιση καθορίζει ποια στήλη πίνακα ή ερώτηση πάνελ θα παρέχει τα κείμενα εμφάνισης.",
    // "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Επιλέξτε για να επιτρέψετε στους συμμετέχοντες να προσθέσουν τις δικές τους επιλογές αν η επιθυμητή επιλογή δεν είναι διαθέσιμη στο αναπτυσσόμενο μενού. Οι προσαρμοσμένες επιλογές θα αποθηκευτούν μόνο προσωρινά για τη διάρκεια της τρέχουσας συνεδρίας περιήγησης.",
    // "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Όταν επιλεγεί, οι χρήστες μπορούν να προσθέσουν επιπλέον είσοδο σε ένα ξεχωριστό πεδίο σχολίων.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Εμφανίζει κάθε ειδική επιλογή (\"Κανένα\", \"Άλλο\", \"Επιλογή Όλων\") σε νέα γραμμή, ακόμα και όταν χρησιμοποιείται διάταξη πολλών στηλών.",
    // "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Καθορίστε την τοποθεσία εντός του συνόλου δεδομένων της υπηρεσίας όπου βρίσκεται ο στόχος πίνακας αντικειμένων. Αφήστε το κενό αν η URL ήδη δείχνει στον πίνακα.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: "Εισάγετε ένα κοινό όνομα ιδιότητας εντός του πίνακα αντικειμένων του οποίου η τιμή θα αποθηκευτεί ως απάντηση στα αποτελέσματα της έρευνας."
    },
    // "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Εισάγετε ένα κοινό όνομα ιδιότητας εντός του πίνακα αντικειμένων που περιέχει τις τιμές που θέλετε να εμφανίσετε στη λίστα επιλογών.",
    // "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Επιλέξτε για να επιτρέψετε στην υπηρεσία να επιστρέψει μια κενή απάντηση ή πίνακα.",
    // "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Χρησιμοποιήστε το εικονίδιο του μαγικού ραβδιού για να ρυθμίσετε έναν κανόνα συνθήκης που καθορίζει την ορατότητα όλων των επιλογών.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Η αριστερή τιμή χρησιμεύει ως ID στοιχείου που χρησιμοποιείται σε κανόνες συνθήκης, η δεξιά τιμή εμφανίζεται στους συμμετέχοντες.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Αυτόματα\" επιλέγει μεταξύ των τρόπων \"Κουμπιά\" και \"Αναπτυσσόμενο μενού\" με βάση το διαθέσιμο πλάτος. Όταν το πλάτος είναι ανεπαρκές για την εμφάνιση κουμπιών, η ερώτηση εμφανίζει ένα αναπτυσσόμενο μενού."
    },
    // "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Σας επιτρέπει να συνδέσετε ερωτήσεις που παράγουν αποτελέσματα σε διαφορετικούς τύπους. Όταν αυτές οι ερωτήσεις συνδέονται μεταξύ τους χρησιμοποιώντας ένα αναγνωριστικό σύνδεσης, αυτή η κοινή ιδιότητα αποθηκεύει τις επιλεγμένες τιμές των ερωτήσεων.",
    // "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Επιλέξτε αν θέλετε να ενημερώνεται το περιεχόμενο του αναπτυσσόμενου μενού ώστε να ταιριάζει με το ερώτημα αναζήτησης που πληκτρολογεί ο χρήστης στο πεδίο εισαγωγής.",
    // "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Μια τιμή που αποθηκεύεται στα αποτελέσματα της έρευνας όταν οι συμμετέχοντες δίνουν θετική απάντηση.",
    // "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Μια τιμή που αποθηκεύεται στα αποτελέσματα της έρευνας όταν οι συμμετέχοντες δίνουν αρνητική απάντηση.",
    // "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Δεν συνιστάται να απενεργοποιήσετε αυτήν την επιλογή, καθώς παρακάμπτει την εικόνα προεπισκόπησης και καθιστά δύσκολο για έναν χρήστη να καταλάβει αν τα αρχεία έχουν ανέβει.",
    // "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Ενεργοποιήστε για να κατατάξετε μόνο τις επιλεγμένες επιλογές. Οι χρήστες θα σύρουν τα επιλεγμένα στοιχεία από τη λίστα επιλογών για να τα κατατάξουν στην περιοχή κατάταξης.",
    // "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Εισάγετε μια λίστα επιλογών που θα προταθούν στον συμμετέχοντα κατά την είσοδο.",
    // "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Η ρύθμιση αλλάζει μόνο το μέγεθος των πεδίων εισαγωγής και δεν επηρεάζει το πλάτος του κουτιού ερώτησης.",
    // "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Ορίζει σταθερό πλάτος για όλες τις ετικέτες στοιχείων. Δέχεται τιμές CSS (px, %, in, pt, κλπ).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Επιλέξτε πώς να στοιχίσετε την τιμή εισόδου εντός του πεδίου. Η προεπιλεγμένη ρύθμιση \"Αυτόματα\" στοιχίζει την τιμή εισόδου προς τα δεξιά αν εφαρμόζεται μάσκες νομισμάτων ή αριθμητικά και προς τα αριστερά αν όχι.",
    // "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Χρησιμεύει ως υποκατάστατο όταν η εικόνα δεν μπορεί να εμφανιστεί στη συσκευή του χρήστη και για σκοπούς προσβασιμότητας.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Ορίζει το χρώμα του επιλεγμένου emoji όταν ο τύπος εικονιδίου αξιολόγησης έχει οριστεί σε \"Χαμογελαστά πρόσωπα\". Επιλέξτε μεταξύ: \"Προεπιλογή\" - το επιλεγμένο emoji εμφανίζεται στο προεπιλεγμένο χρώμα έρευνας; \"Κλίμακα\" - το επιλεγμένο emoji κληρονομεί το χρώμα από την κλίμακα αξιολόγησης.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Ένα ID έκφρασης που δεν είναι ορατό στους συμμετέχοντες.",
      // "Type an expression subtitle."
      description: "Πληκτρολογήστε έναν υπότιτλο έκφρασης.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Μια έκφραση μπορεί να περιλαμβάνει βασικούς υπολογισμούς (`{q1_id} + {q2_id}`), συνθήκες (`{age} > 60`) και συναρτήσεις ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, κλπ.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Επιλέξτε για να αποθηκεύσετε την τιμή της επιλογής \"Άλλο\" ως ξεχωριστή ιδιότητα στα αποτελέσματα της έρευνας.",
    // "Use {0} as a placeholder for the actual value."
    format: "Χρησιμοποιήστε το {0} ως χώρος κράτησης για την πραγματική τιμή.",
    // [Auto-translated] "Select \"Custom\" to add your own file extensions on top of the predefined categories."
    acceptedCategories: "Επιλέξτε \"Προσαρμοσμένο\" για να προσθέσετε τις δικές σας επεκτάσεις αρχείων πάνω από τις προκαθορισμένες κατηγορίες.",
    // [Auto-translated] "Enter file extensions separated by commas (e.g., .csv, .xml)."
    acceptedTypes: "Εισαγάγετε επεκτάσεις αρχείων διαχωρισμένες με κόμματα (π.χ. .csv, .xml).",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Διατάσσει τις επιλογές επιλογής σε διάταξη πολλαπλών στηλών. Όταν οριστεί σε 0, οι επιλογές εμφανίζονται σε μία γραμμή. Ισχύει μόνο για στήλες με \"Τύπο εισαγωγής κελιού\" ρυθμισμένο σε Ομάδα Ραδιοκουμπιών ή Πεδίο Επιλογών.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Επιλέξτε τον τύπο δεδομένων που μπορεί να ανακτήσει ο περιηγητής του χρήστη. Αυτά τα δεδομένα προέρχονται είτε από προηγούμενες τιμές που εισήγαγε ο χρήστης είτε από προρυθμισμένες τιμές αν έχουν αποθηκευτεί από τον χρήστη για αυτόματη συμπλήρωση.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Ισχύει όταν ο τύπος πηγής αρχείου είναι \"Τοπικό αρχείο\" ή όταν η κάμερα δεν είναι διαθέσιμη.",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Ισχύει όταν ο τύπος πηγής αρχείου είναι \"Κάμερα\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Ισχύει όταν ο τύπος πηγής αρχείου είναι \"Τοπικό αρχείο ή κάμερα\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Διατάσσει τις επιλογές επιλογής σε διάταξη πολλαπλών στηλών. Όταν οριστεί σε 0, οι επιλογές εμφανίζονται σε μία γραμμή.",
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "Τακτοποιεί τα πλαίσια κειμένου σε διάταξη πολλών στηλών."
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Επιλέξτε αν θέλετε να αποθηκεύσετε την τιμή της ερώτησης με την εφαρμοσμένη μάσκα στα αποτελέσματα της έρευνας."
    },
    regionalformat: {
      // [Auto-translated] "A region whose formats apply to date-time, numeric, and currency input masks. If not specified, the survey language is used."
      locale: "Μια περιοχή της οποίας οι μορφές ισχύουν για μάσκες εισαγωγής ημερομηνίας-ώρας, αριθμητικών και νομισματικών μονάδων. Εάν δεν καθορίζεται, χρησιμοποιείται η γλώσσα της έρευνας.",
      // [Auto-translated] "Overrides the region's date format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with a leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with a leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year."
      datePattern: "Παρακάμπτει τη μορφή ημερομηνίας της περιοχής που χρησιμοποιείται στις μάσκες εισαγωγής. Το μοτίβο μπορεί να περιέχει διαχωριστικούς χαρακτήρες και τα ακόλουθα σύμβολα κράτησης θέσης: <br>'m' - Αριθμός μήνα.<br> 'mm' - Αριθμός μήνα, με μηδενικό στην αρχή για μονοψήφιες τιμές. <br>'d' - Ημέρα του μήνα. <br>'dd' - Ημέρα του μήνα, με μηδενικό στην αρχή για μονοψήφιες τιμές. <br>'yy' - Τα δύο τελευταία ψηφία του έτους. <br>'yyy' - Τετραψήφιο έτος.",
      // [Auto-translated] "Overrides the region's time format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with a leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with a leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in uppercase (AM/PM).<br>`tt` - 12-hour clock period in lowercase (am/pm)."
      timePattern: "Παρακάμπτει τη μορφή ώρας της περιοχής που χρησιμοποιείται στις μάσκες εισαγωγής. Το μοτίβο μπορεί να περιέχει διαχωριστικούς χαρακτήρες και τα ακόλουθα σύμβολα κράτησης θέσης: <br>'H' - Ώρες σε 24ωρη μορφή.<br> 'HH' - Ώρες σε 24ωρη μορφή, με μηδενικό στην αρχή για μονοψήφιες τιμές. <br>'h' - Ώρες σε 12ωρη μορφή. <br>'hh' - Ώρες σε 12ωρη μορφή, με μηδενικό στην αρχή για μονοψήφιες τιμές. <br>'MM' - Λεπτά. <br>'ss' - Δευτερόλεπτα. <br>'TT' - Περίοδος ρολογιού 12 ωρών με κεφαλαία (ΠΜ/ΜΜ). <br>'TT' - Περίοδος ρολογιού 12 ωρών με πεζά (ΠΜ/ΜΜ).",
      // [Auto-translated] "Overrides the symbol the region uses to separate the fractional part from the integer part of a displayed number in input masks."
      decimalSeparator: "Παρακάμπτει το σύμβολο που χρησιμοποιεί η περιοχή για να διαχωρίσει το κλασματικό μέρος από το ακέραιο μέρος ενός εμφανιζόμενου αριθμού στις μάσκες εισαγωγής.",
      // [Auto-translated] "Overrides the symbol the region uses to separate the digits of a large number into groups of three in input masks."
      thousandsSeparator: "Παρακάμπτει το σύμβολο που χρησιμοποιεί η περιοχή για να διαχωρίσει τα ψηφία ενός μεγάλου αριθμού σε ομάδες των τριών στις μάσκες εισαγωγής.",
      // [Auto-translated] "Overrides the region's currency symbol or code used in input masks."
      currencySymbol: "Παρακάμπτει το σύμβολο νομίσματος ή τον κωδικό της περιοχής που χρησιμοποιείται στις μάσκες εισαγωγής.",
      // [Auto-translated] "Overrides the region's currency pattern used in input masks. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "Παρακάμπτει το μοτίβο νομισματικής μονάδας της περιοχής που χρησιμοποιείται στις μάσκες εισαγωγής. Το μοτίβο μπορεί να περιέχει τα ακόλουθα σύμβολα κράτησης θέσης: <br>'@' - Σύμβολο ή κωδικός νομισματικής μονάδας.<br> '#' - Αριθμός. <br>'-' - Θέση του συμβόλου μείον σε αρνητικές τιμές (εάν παραλειφθεί, το σύμβολο μείον τοποθετείται στην αρχή)."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Το μοτίβο μπορεί να περιλαμβάνει κυριολεκτικές συμβολοσειρές και τους ακόλουθους χώρους κράτησης: `9` - για έναν αριθμό; `a` - για ένα γράμμα πεζό ή κεφαλαίο; `#` - για έναν αριθμό ή ένα γράμμα πεζό ή κεφαλαίο. Χρησιμοποιήστε την απόστροφο `\\` για να διαφύγετε ένα χαρακτήρα."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Το μοτίβο μπορεί να περιλαμβάνει χαρακτήρες διαχωρισμού και τους ακόλουθους χώρους κράτησης:<br>`m` - Αριθμός μήνα.<br>`mm` - Αριθμός μήνα, με το μηδέν μπροστά για μονοψήφιες τιμές.<br>`d` - Ημέρα του μήνα.<br>`dd` - Ημέρα του μήνα, με το μηδέν μπροστά για μονοψήφιες τιμές.<br>`yy` - Οι τελευταίοι δύο αριθμοί του έτους.<br>`yyyy` - Τετραψήφιο έτος.<br>`H` - Ώρες σε 24ωρη μορφή.<br>`HH` - Ώρες σε 24ωρη μορφή, με το μηδέν μπροστά για μονοψήφιες τιμές.<br>`h` - Ώρες σε 12ωρη μορφή.<br>`hh` - Ώρες σε 12ωρη μορφή, με το μηδέν μπροστά για μονοψήφιες τιμές.<br>`MM` - Λεπτά.<br>`ss` - Δευτερόλεπτα.<br>`TT` - Περίοδος 12ωρης ώρας με κεφαλαία (AM/PM).<br>`tt` - Περίοδος 12ωρης ώρας με μικρά γράμματα (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Ένα σύμβολο που χρησιμοποιείται για να χωρίσει το κλασματικό μέρος από το ακέραιο μέρος ενός αριθμού που εμφανίζεται.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Ένα σύμβολο που χρησιμοποιείται για να χωρίσει τα ψηφία ενός μεγάλου αριθμού σε ομάδες των τριών.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Περιορίζει πόσα ψηφία θα διατηρηθούν μετά την υποδιαστολή για έναν αριθμό που εμφανίζεται.",
      // [Auto-translated] "Displays trailing zeros in the fractional part up to the specified precision. For example, with a precision of 2, an input value of 1.2 is displayed as 1.20."
      showTrailingZeros: "Εμφανίζει μηδενικά στο κλασματικό τμήμα μέχρι την καθορισμένη ακρίβεια. Για παράδειγμα, με ακρίβεια 2, μια τιμή εισόδου 1.2 εμφανίζεται ως 1.20."
    },
    currencymask: {
      // [Auto-translated] "A currency symbol or code displayed with the value. The region's symbol is used by default. Clear this property to display no symbol."
      currencySymbol: "Ένα σύμβολο νομισματικής μονάδας ή ένας κωδικός που εμφανίζεται με την τιμή. Το σύμβολο της περιοχής χρησιμοποιείται από προεπιλογή. Καταργήστε αυτήν την ιδιότητα για να μην εμφανίζεται κανένα σύμβολο.",
      // [Auto-translated] "Specifies the positions of the number, currency symbol, and minus sign. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "Καθορίζει τις θέσεις του αριθμού, του συμβόλου νομίσματος και του συμβόλου μείον. Το μοτίβο μπορεί να περιέχει τα ακόλουθα σύμβολα κράτησης θέσης:<br>'@' - Σύμβολο ή κωδικός νομίσματος.<br> '#' - Αριθμός. <br>'-' - Θέση του συμβόλου μείον σε αρνητικές τιμές (εάν παραλειφθεί, το σύμβολο μείον τοποθετείται στην αρχή)."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Αυτή η ρύθμιση εφαρμόζεται μόνο σε ερωτήσεις εκτός από πάνελ.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Ορίζει ένα συμπληρωματικό χρώμα που επισημαίνει τα βασικά στοιχεία της έρευνας.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Ρυθμίζει τη διαφάνεια των πάνελ και των κουτιών ερωτήσεων σε σχέση με το φόντο της έρευνας.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Ρυθμίζει τη διαφάνεια των στοιχείων εισαγωγής σε σχέση με το φόντο της έρευνας.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Ορίζει την ακτίνα των γωνιών για όλα τα ορθογώνια στοιχεία. Ενεργοποιήστε τη Λειτουργία για Προχωρημένους αν θέλετε να ορίσετε μεμονωμένες τιμές ακτίνας για τα στοιχεία εισαγωγής ή τα πάνελ και τα κουτιά ερωτήσεων.",
      // [Auto-translated] "Sets the main background color of the survey."
      "--sjs2-color-utility-surface-survey": "Ορίζει το κύριο χρώμα φόντου της έρευνας."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Η επιλογή \"Ίδιο με το κοντέινερ\" προσαρμόζει αυτόματα το πλάτος της περιοχής περιεχομένου της κεφαλίδας ώστε να ταιριάζει στο στοιχείο HTML στο οποίο έχει τοποθετηθεί η έρευνα.",
      // "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Το πλάτος της περιοχής κεφαλίδας που περιέχει τον τίτλο και την περιγραφή της έρευνας, μετρημένο σε pixels.",
      // "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Όταν ενεργοποιηθεί, η κορυφή της έρευνας επικαλύπτει το κάτω μέρος της κεφαλίδας.",
      // "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Όταν οριστεί σε 0, το ύψος υπολογίζεται αυτόματα για να φιλοξενήσει το περιεχόμενο της κεφαλίδας."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Η επιλογή \"Ίδιο με το κοντέινερ\" προσαρμόζει αυτόματα το πλάτος της περιοχής της γραμμής προόδου ώστε να ταιριάζει στο στοιχείο HTML στο οποίο έχει τοποθετηθεί η έρευνα.",
    // "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Χρησιμοποιείται όταν η 'Διάταξη έρευνας' είναι ρυθμισμένη σε 'Ένα πεδίο εισαγωγής ανά σελίδα'. Σε αυτήν τη διάταξη, ο πίνακας χωρίζεται ώστε κάθε πεδίο εισαγωγής να εμφανίζεται σε ξεχωριστή σελίδα. Χρησιμοποιήστε τον χώρος κράτησης {rowIndex} για να εισάγετε την αυτόματη αρίθμηση, {rowTitle} ή {rowName} για να αναφέρετε τον τίτλο ή το ID της σειράς, και {row.columnid} για να συμπεριλάβετε την τιμή μιας συγκεκριμένης στήλης πίνακα."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "τίτλος",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Αφήστε το κενό, αν είναι το ίδιο με το 'Όνομα'"
    },
    // "Allow multiple selection"
    multiSelect: "Επιτρέψτε πολλαπλές επιλογές",
    // "Show image and video captions"
    showLabel: "Εμφάνιση ετικετών εικόνας και βίντεο",
    // "Swap the order of Yes and No"
    swapOrder: "Ανταλλαγή της σειράς Ναι και Όχι",
    // "Value"
    value: "Τιμή",
    // "Tab alignment"
    tabAlign: "Στοίχιση καρτελών",
    // "File source type"
    sourceType: "Τύπος πηγής αρχείου",
    // [Auto-translated] "Default camera"
    cameraFacingMode: "Προεπιλεγμένη κάμερα",
    // "Fit to container"
    fitToContainer: "Προσαρμογή στο κοντέινερ",
    // "Set value expression"
    setValueExpression: "Έκφραση καθορισμού τιμής",
    // "Description"
    description: "Περιγραφή", // Auto-generated string
    // "Logo fit"
    logoFit: "Προσαρμογή λογότυπου",
    // "Pages"
    pages: "Σελίδες", // Auto-generated string
    // "Questions"
    questions: "Ερωτήσεις", // Auto-generated string
    // "Triggers"
    triggers: "Ενεργοποιητές",
    // "Custom variables"
    calculatedValues: "Προσαρμοσμένες μεταβλητές",
    // "Survey id"
    surveyId: "ID έρευνας", // Auto-generated string
    // "Survey post id"
    surveyPostId: "ID ανάρτησης έρευνας", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "Εμφάνιση αποθήκευσης δεδομένων έρευνας", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Στοίχιση περιγραφής ερώτησης",
    // "Progress bar type"
    progressBarType: "Τύπος γραμμής προόδου", // Auto-generated string
    // "Show table of contents (TOC)"
    showTOC: "Εμφάνιση πίνακα περιεχομένων (TOC)",
    // "TOC alignment"
    tocLocation: "Στοίχιση TOC",
    // "Question title pattern"
    questionTitlePattern: "Πρότυπο τίτλου ερώτησης", // Auto-generated string
    // "Survey width mode"
    widthMode: "Λειτουργία πλάτους έρευνας",
    // "Show brand info"
    showBrandInfo: "Εμφάνιση πληροφοριών μάρκας", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Χρησιμοποιήστε τις τιμές εμφάνισης στα δυναμικά κείμενα",
    // "Visible if"
    visibleIf: "Ορατό αν", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Έκφραση προεπιλεγμένης τιμής",
    // "Required if"
    requiredIf: "Απαιτείται αν", // Auto-generated string
    // "Reset value if"
    resetValueIf: "Επαναφορά τιμής αν",
    // "Set value if"
    setValueIf: "Ορισμός τιμής αν",
    // "Validation rules"
    validators: "Κανόνες επικύρωσης",
    // "Bindings"
    bindings: "Συνδέσεις", // Auto-generated string
    // "Render as"
    renderAs: "Απόδοση ως", // Auto-generated string
    // "Attach original items"
    attachData: "Επισύναψη αρχικών στοιχείων", // Auto-generated string
    // "Choices"
    choices: "Επιλογές",
    // "Choices by url"
    choicesByUrl: "Επιλογές μέσω url", // Auto-generated string
    // "Currency"
    currency: "Νόμισμα", // Auto-generated string
    // "Cell hint"
    cellHint: "Υπόδειξη κελιού", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Μέγιστος αριθμός δεκαδικών ψηφίων", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Ελάχιστος αριθμός δεκαδικών ψηφίων", // Auto-generated string
    // "Columns"
    columns: "Στήλες", // Auto-generated string
    // "Detail elements"
    detailElements: "Στοιχεία λεπτομέρειας", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "Επιτρέψτε προσαρμοστικές ενέργειες", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Προεπιλεγμένη τιμή σειράς", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Αυτόματη ανάπτυξη λεπτομερειών νέας γραμμής",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Ενεργοποίηση φόρτωσης επιλογών με καθυστέρηση", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "Μέγεθος σελίδας φόρτωσης επιλογών με καθυστέρηση", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "Συστατικό πεδίου εισαγωγής", // Auto-generated string
    // "Item component"
    itemComponent: "Συστατικό στοιχείου", // Auto-generated string
    // "Min"
    min: "Ελάχιστο", // Auto-generated string
    // "Max"
    max: "Μέγιστο", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Έκφραση ελάχιστης τιμής", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Έκφραση μέγιστης τιμής", // Auto-generated string
    // "Step"
    step: "Βήμα", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Στοιχεία για αυτόματη πρόταση",
    // "Input field width (in characters)"
    inputSize: "Πλάτος πεδίου εισαγωγής (σε χαρακτήρες)",
    // "Item label width"
    itemTitleWidth: "Πλάτος ετικέτας στοιχείου",
    // "Input value alignment"
    inputTextAlignment: "Στοίχιση τιμής εισόδου",
    // "Elements"
    elements: "Στοιχεία", // Auto-generated string
    // "Content"
    content: "Περιεχόμενο", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Τίτλος πλοήγησης", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Περιγραφή πλοήγησης", // Auto-generated string
    // "Long tap"
    longTap: "Παράταση πατήματος", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Αυτόματη ανάπτυξη πεδίου εισαγωγής",
    // "Enable resize handle"
    allowResize: "Ενεργοποίηση χειριστηρίου αλλαγής μεγέθους",
    // "Accept carriage return"
    acceptCarriageReturn: "Αποδοχή επιστροφής καροτσιού", // Auto-generated string
    // "Display mode"
    displayMode: "Λειτουργία εμφάνισης",
    // "Rate type"
    rateType: "Τύπος αξιολόγησης", // Auto-generated string
    // "Label"
    label: "Ετικέτα", // Auto-generated string
    // "Content mode"
    contentMode: "Λειτουργία περιεχομένου",
    // "Image and thumbnail fit"
    imageFit: "Προσαρμογή εικόνας και μικρογραφίας",
    // "Alt text"
    altText: "Εναλλακτικό κείμενο",
    // "Height"
    height: "Ύψος", // Auto-generated string
    // "Height on smartphones"
    mobileHeight: "Ύψος σε κινητά τηλέφωνα",
    // "Pen color"
    penColor: "Χρώμα πένας", // Auto-generated string
    // "Background color"
    backgroundColor: "Χρώμα φόντου",
    // "Template elements"
    templateElements: "Στοιχεία προτύπου", // Auto-generated string
    // "Operator"
    operator: "Τελεστής", // Auto-generated string
    // "Is variable"
    isVariable: "Είναι μεταβλητή", // Auto-generated string
    // "Run expression"
    runExpression: "Εκτέλεση έκφρασης", // Auto-generated string
    // "Show caption"
    showCaption: "Εμφάνιση λεζάντας", // Auto-generated string
    // "Icon name"
    iconName: "Όνομα εικονιδίου", // Auto-generated string
    // "Icon size"
    iconSize: "Μέγεθος εικονιδίου", // Auto-generated string
    // "Precision"
    precision: "Ακρίβεια", // Auto-generated string
    // "Matrix drag handle area"
    matrixDragHandleArea: "Περιοχή χειριστηρίου μεταφοράς πίνακα", // Auto-generated string
    // "Background image"
    backgroundImage: "Εικόνα φόντου",
    // "Background image fit"
    backgroundImageFit: "Προσαρμογή εικόνας φόντου", // Auto-generated string
    // "Background image attachment"
    backgroundImageAttachment: "Συνημμένο εικόνας φόντου", // Auto-generated string
    // "Background opacity"
    backgroundOpacity: "Διαφάνεια φόντου", // Auto-generated string
    // "Allow selective ranking"
    selectToRankEnabled: "Επιτρέψτε την επιλεκτική κατάταξη",
    // "Ranking area alignment"
    selectToRankAreasLayout: "Στοίχιση περιοχής κατάταξης",
    // "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Κείμενο που εμφανίζεται αν έχουν επιλεγεί όλες οι επιλογές",
    // "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Κείμενο τοποθεσίας για την περιοχή κατάταξης",
    // "Allow camera access"
    allowCameraAccess: "Επιτρέψτε την πρόσβαση στην κάμερα", // Auto-generated string
    // "Rating icon color mode"
    scaleColorMode: "Χρωματική κλίμακα για το εικονίδιο αξιολόγησης",
    // "Smileys color scheme"
    rateColorMode: "Χρωματική κλίμακα χαμογελαστών προσώπων",
    // "Copy display value"
    copyDisplayValue: "Αντιγραφή τιμής εμφάνισης", // Auto-generated string
    // "Column span"
    effectiveColSpan: "Εύρος στήλης",
    // "Progress bar area width"
    progressBarInheritWidthFrom: "Πλάτος περιοχής γραμμής προόδου",
    // [Auto-translated] "Theme name"
    themeName: "Όνομα θέματος"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Λειτουργία για προχωρημένους",
    // "Page"
    pageTitle: "Σελίδα",
    // "Question box"
    questionTitle: "Κουτί ερώτησης",
    // "Input element"
    editorPanel: "Στοιχείο εισαγωγής",
    // "Lines"
    lines: "Γραμμές",
    // "Default"
    primaryDefaultColor: "Προεπιλογή",
    // "Hover"
    primaryDarkColor: "Επιλογή hover",
    // "Selected"
    primaryLightColor: "Επιλεγμένο",
    // "Corner radius"
    cornerRadius: "Ακτίνα γωνίας",
    // "Default background"
    backcolor: "Προεπιλεγμένο φόντο",
    // "Hover background"
    hovercolor: "Φόντο hover",
    // "Font color"
    fontColor: "Χρώμα γραμματοσειράς",
    // "Background color"
    backgroundColor: "Χρώμα φόντου",
    // "Default color"
    primaryForecolor: "Προεπιλεγμένο χρώμα",
    // "Disabled color"
    primaryForecolorLight: "Χρώμα ανενεργό",
    // "Darker"
    borderDefault: "Σκοτεινότερο",
    // "Lighter"
    borderLight: "Πιο ανοιχτό",
    // "Font family"
    fontFamily: "Οικογένεια γραμματοσειρών",
    // "Regular"
    fontWeightRegular: "Κανονικό",
    // "Heavy"
    fontWeightHeavy: "Βαρύ",
    // "Semi-bold"
    fontWeightSemiBold: "Ημι-έντονο",
    // "Bold"
    fontWeightBold: "Έντονο",
    // "Color"
    color: "Χρώμα",
    // "Placeholder color"
    placeholderColor: "Χρώμα κειμένου πλακίδας",
    // "Size"
    size: "Μέγεθος",
    // [Auto-translated] "Line height"
    lineHeight: "Ύψος γραμμής",
    // "Opacity"
    opacity: "Διαφάνεια",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // "Add Shadow Effect"
    boxShadowAddRule: "Προσθήκη εφέ σκιάς",
    // "Blur"
    boxShadowBlur: "Θολούρα",
    // "Spread"
    boxShadowSpread: "Απλωσιά",
    // "Drop"
    boxShadowDrop: "Πτώση",
    // "Inner"
    boxShadowInner: "Εσωτερικό",
    names: {
      // "Default"
      default: "Προεπιλογή",
      // "Contrast"
      contrast: "Αντίθεση",
      // "Borderless"
      borderless: "Χωρίς όρια",
      // "Flat"
      flat: "Επίπεδο",
      // "Plain"
      plain: "Απλό",
      // [Auto-translated] "Soft"
      soft: "Μαλακός",
      // [Auto-translated] "3D"
      threedimensional: "3Δ",
      // [Auto-translated] "Monochrome"
      monochrome: "Μονόχρωμος"
    },
    colors: {
      // "Teal"
      teal: "Τυρκουάζ",
      // "Blue"
      blue: "Μπλε",
      // "Purple"
      purple: "Μωβ",
      // "Orchid"
      orchid: "Ορχιδέα",
      // "Tulip"
      tulip: "Τουλίπα",
      // "Brown"
      brown: "Καφέ",
      // "Green"
      green: "Πράσινο",
      // "Gray"
      gray: "Γκρί"
    }
  },
  creatortheme: {
    // "Primary"
    "--sjs-primary-background-500": "Πρωτεύον",
    // "Secondary"
    "--sjs-secondary-background-500": "Δευτερεύον",
    // "UI elements"
    userInterfaceBaseUnit: "Στοιχεία UI",
    // "Font"
    fontScale: "Γραμματοσειρά",
    names: {

    }
  },
  preset: {
    names: {
      // [Auto-translated] "Basic"
      basic: "Βασικό",
      // [Auto-translated] "Advanced"
      advanced: "Προηγμένη",
      // [Auto-translated] "Expert"
      expert: "Εμπειρογνώμονας"
    },
    // [Auto-translated] "Preset applied"
    presetApplied: "Εφαρμόστηκε προεπιλογή"
  },
  // Results of survey-core/linter, shown in the JSON tab. A message key is composed as
  linter: {
    // [Auto-translated] "Line: {0}. "
    lineNumber: "Σειρά: {0}.", // {0} 1-based line number, prefixes an entry of the error list
    fixes: {
      "choices/dead-source": {
        // [Auto-translated] "Use the suggested name"
        setName: "Χρησιμοποιήστε το προτεινόμενο όνομα"
      },
      "choices/duplicate": {
        // [Auto-translated] "Remove the repeated item"
        removeItem: "Αφαιρέστε το επαναλαμβανόμενο στοιχείο"
      },
      "element/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "Χρησιμοποιήστε τον προτεινόμενο τύπο"
      },
      "expression/unknown-function": {
        // [Auto-translated] "Use the suggested function"
        renameFunction: "Χρησιμοποιήστε την προτεινόμενη λειτουργία"
      },
      "mask/mismatch": {
        // [Auto-translated] "Use the suggested mask"
        setMaskType: "Χρησιμοποιήστε την προτεινόμενη μάσκα"
      },
      "name/duplicate": {
        // [Auto-translated] "Give the element a free name"
        renameElement: "Δώστε στο στοιχείο ένα ελεύθερο όνομα"
      },
      "name/reserved": {
        // [Auto-translated] "Give the element a free name"
        renameElement: "Δώστε στο στοιχείο ένα ελεύθερο όνομα"
      },
      "property/dead": {
        // [Auto-translated] "Remove the property"
        removeKey: "Κατάργηση της ιδιοκτησίας"
      },
      "property/invalid-value": {
        // [Auto-translated] "Use the nearest allowed value"
        clampToRange: "Χρήση της πλησιέστερης επιτρεπόμενης τιμής",
        // [Auto-translated] "Remove the property"
        removeKey: "Κατάργηση της ιδιοκτησίας",
        // [Auto-translated] "Use the suggested value"
        useAllowedValue: "Χρήση της προτεινόμενης τιμής"
      },
      "property/not-an-array": {
        // [Auto-translated] "Turn the value into a list"
        wrapInArray: "Μετατροπή της τιμής σε λίστα"
      },
      "property/required": {
        // [Auto-translated] "Give the element a name"
        setName: "Δώστε ένα όνομα στο στοιχείο"
      },
      "property/unknown": {
        // [Auto-translated] "Remove the property"
        removeKey: "Κατάργηση της ιδιοκτησίας",
        // [Auto-translated] "Rename the property"
        renameKey: "Μετονομασία της ιδιοκτησίας"
      },
      "reference/unknown": {
        // [Auto-translated] "Use the suggested name"
        renameReference: "Χρησιμοποιήστε το προτεινόμενο όνομα",
        // [Auto-translated] "Use the suggested name"
        setKeyName: "Χρησιμοποιήστε το προτεινόμενο όνομα"
      },
      "trigger/unknown-target": {
        // [Auto-translated] "Use the suggested name"
        setName: "Χρησιμοποιήστε το προτεινόμενο όνομα"
      },
      "trigger/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "Χρησιμοποιήστε τον προτεινόμενο τύπο"
      },
      "validator/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "Χρησιμοποιήστε τον προτεινόμενο τύπο"
      }
    },
    messages: {
      "expression/syntax": {
        // [Auto-translated] "The expression \"{expression}\" cannot be parsed."
        unparsable: "Η έκφραση \"{έκφραση}\" δεν μπορεί να αναλυθεί."
      },
      "reference/unknown": {
        // [Auto-translated] "\"{name}\" is not found - no question, panel, page, calculated value, or variable with that name exists."
        notFound: "Το \"{name}\" δεν βρέθηκε - δεν υπάρχει ερώτηση, πίνακας, σελίδα, υπολογισμένη τιμή ή μεταβλητή με αυτό το όνομα.",
        // [Auto-translated] "\"{segment}\" is not found in {containerType} \"{root}\" (reference: {name})."
        inContainer: "Το \"{segment}\" δεν βρίσκεται στο {containerType} Το \"{root}\" (αναφορά: {name}).",
        // [Auto-translated] "\"{segment}\" is not found in the \"{scopePrefix}\" scope (reference: {name})."
        scopedUnknown: "Το \"{segment}\" δεν βρίσκεται στο πεδίο \"{scopePrefix}\" (αναφορά: {name}).",
        // [Auto-translated] "The keyName of \"{name}\" names \"{key}\" - \"{name}\" has no {keyNoun} with that name, so duplicate-key validation never runs."
        keyNameNotFound: "Το keyName του \"{name}\" ονομάζει \"{key}\" - Το \"{name}\" δεν έχει {keyNoun} με αυτό το όνομα, επομένως η επικύρωση διπλού κλειδιού δεν εκτελείται ποτέ.",
        // [Auto-translated] "\"{name}\" is not found."
        functionArgNotFound: "Το \"{name}\" δεν βρέθηκε."
      },
      "reference/self": {
        // [Auto-translated] "The {prop} of \"{name}\" references the element itself (reference: {reference})."
        selfReference: "Το {prop} του \"{name}\" αναφέρεται στο ίδιο το στοιχείο (αναφορά: {reference})."
      },
      "name/duplicate": {
        // [Auto-translated] "The name \"{name}\" is duplicated."
        elementNames: "Το όνομα \"{name}\" είναι διπλότυπο.",
        // [Auto-translated] "The calculated value name \"{name}\" is already used by another calculated value."
        calculatedValueNames: "Το όνομα της υπολογιζόμενης τιμής \"{name}\" χρησιμοποιείται ήδη από μια άλλη υπολογιζόμενη τιμή.",
        // [Auto-translated] "The calculated value \"{name}\" shares its name with another element, so one of them shadows the other."
        calculatedValueShadowsElement: "Η υπολογιζόμενη τιμή \"{name}\" μοιράζεται το όνομά της με ένα άλλο στοιχείο, επομένως το ένα από αυτά επισκιάζει το άλλο."
      },
      "name/shadowing": {
        // [Auto-translated] "The {nameKindText} \"{name}\" of this {ownerText} is also the built-in survey variable {{builtIn}} - the survey answers {{name}} first, so this one is unreachable in expressions."
        builtInVariable: "Το {nameKindText} \"{name}\" αυτού του {ownerText} είναι επίσης η ενσωματωμένη μεταβλητή έρευνας {{builtIn}} - η έρευνα απαντά πρώτα στο {{name}}, επομένως αυτή δεν είναι προσβάσιμη σε εκφράσεις.",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" is also the name of question \"{otherName}\" - both store their answer under the data key \"{valueName}\"."
        valueNameShadowsElement: "Το valueName \"{valueName}\" του \"{name}\" είναι επίσης το όνομα της ερώτησης \"{otherName}\" - και οι δύο αποθηκεύουν την απάντησή τους κάτω από το κλειδί δεδομένων \"{valueName}\".",
        // [Auto-translated] "The data key \"{dataName}\" is also the comment key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        commentKeyCollision: "Το κλειδί δεδομένων \"{dataName}\" είναι επίσης το κλειδί σχολίου του \"{base}\" (το κλειδί δεδομένων του συν το \"{επίθημα}\") - η μία εγγραφή αντικαθιστά σιωπηλά την άλλη.",
        // [Auto-translated] "The data key \"{dataName}\" is also the totals key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        totalKeyCollision: "Το κλειδί δεδομένων \"{dataName}\" είναι επίσης το κλειδί συνόλων του \"{base}\" (το κλειδί δεδομένων του συν το \"{suffix}\") - η μία εγγραφή αντικαθιστά σιωπηλά την άλλη.",
        // [Auto-translated] "The {trigger} trigger sets the variable \"{name}\", which is also the data key of question \"{questionName}\" - the variable answers {{name}} from then on, not the question."
        variableShadowsQuestion: "Ο κανόνας ετικέτας {trigger} ορίζει τη μεταβλητή \"{name}\", η οποία είναι επίσης το κλειδί δεδομένων της ερώτησης \"{questionName}\" - η μεταβλητή απαντά {{name}} από εκεί και πέρα, όχι η ερώτηση."
      },
      "name/reserved": {
        // [Auto-translated] "The name \"{name}\" is reserved - a member of Object.prototype."
        questionName: "Το όνομα \"{name}\" είναι δεσμευμένο - μέλος του Object.prototype.",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" is reserved - a member of Object.prototype."
        valueName: "Το valueName \"{valueName}\" του \"{name}\" είναι δεσμευμένο - μέλος του Object.prototype.",
        // [Auto-translated] "The column \"{name}\" of \"{matrixName}\" is reserved - a member of Object.prototype."
        columnName: "Η στήλη \"{name}\" του \"{matrixName}\" είναι δεσμευμένη - μέλος του Object.prototype.",
        // [Auto-translated] "The item \"{name}\" of \"{questionName}\" is reserved - a member of Object.prototype."
        itemName: "Το στοιχείο \"{name}\" του \"{questionName}\" είναι δεσμευμένο - μέλος του Object.prototype.",
        // [Auto-translated] "The row \"{rowValue}\" of \"{name}\" is reserved - a member of Object.prototype."
        rowValue: "Η σειρά \"{rowValue}\" του \"{name}\" είναι δεσμευμένη - μέλος του Object.prototype.",
        // [Auto-translated] "The calculated value \"{name}\" is reserved - a member of Object.prototype."
        calculatedValueName: "Η υπολογισμένη τιμή \"{name}\" είναι δεσμευμένη - μέλος του Object.prototype."
      },
      "element/unknown-type": {
        // [Auto-translated] "\"{name}\" has an unknown type \"{type}\"."
        unknownType: "Το \"{name}\" έχει άγνωστο τύπο \"{type}\".",
        // [Auto-translated] "\"{name}\" has no type - an element without a type is dropped."
        missingType: "Το \"{name}\" δεν έχει τύπο - ένα στοιχείο χωρίς τύπο απορρίπτεται."
      },
      "property/unknown": {
        // [Auto-translated] "\"{key}\" is not a property of {ownerText} ({className})."
        unknownProperty: "Το \"{key}\" δεν είναι ιδιότητα του {ownerText} ({className})."
      },
      "property/dead": {
        // [Auto-translated] "\"{key}\" of {ownerText} is not serializable - it takes effect on load, and is dropped from the JSON whenever the survey is saved again."
        notSerializable: "Το \"{key}\" του {ownerText} δεν είναι σειριοποιήσιμο - τίθεται σε ισχύ κατά τη φόρτωση και απορρίπτεται από το JSON κάθε φορά που η έρευνα αποθηκεύεται ξανά.",
        // [Auto-translated] "\"{key}\" and \"{aliasKey}\" of {ownerText} are two names of one property - the run time applies them in the order the JSON writes them, so \"{winner}\" wins."
        aliasDuplicate: "Τα \"{key}\" και \"{aliasKey}\" του {ownerText} είναι δύο ονόματα μιας ιδιότητας - ο χρόνος εκτέλεσης τα εφαρμόζει με τη σειρά που τα γράφει το JSON, οπότε το \"{winner}\" κερδίζει.",
        // [Auto-translated] "\"{key}\" is set on \"{name}\", but inputType \"{inputType}\" has no bounds - the run time ignores it."
        inertMinMax: "Το \"{key}\" έχει οριστεί στο \"{name}\", αλλά το inputType \"{inputType}\" δεν έχει όρια - ο χρόνος εκτέλεσης το αγνοεί."
      },
      "property/invalid-value": {
        // [Auto-translated] "The {key} of {ownerText} is {valueText} - not one of the allowed values ({allowedText})."
        notInChoices: "Το {key} του {ownerText} είναι {valueText} - δεν είναι μία από τις επιτρεπόμενες τιμές ({allowedText}).",
        // [Auto-translated] "The {key} of {ownerText} is {value}, outside its allowed range {rangeText}."
        outOfRange: "Το {key} του {ownerText} είναι {value}, εκτός του επιτρεπόμενου εύρους {rangeText}.",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" contains a \".\" - expressions read {{valueName}} as a path into \"{rootKey}\", so the data key itself can never be addressed."
        valueNameDotted: "Το valueName \"{valueName}\" του \"{name}\" περιέχει ένα \".\" - οι εκφράσεις διαβάζουν το {{valueName}} ως διαδρομή στο \"{rootKey}\", επομένως το ίδιο το κλειδί δεδομένων δεν μπορεί ποτέ να αντιμετωπιστεί."
      },
      "property/required": {
        // [Auto-translated] "{ownerText} has no \"{key}\" - the property is required for a {className}."
        missing: "Το {ownerText} δεν έχει \"{key}\" - η ιδιότητα απαιτείται για ένα {className}.",
        // [Auto-translated] "The name of the {className} is {valueText}, not a string - the survey cannot load it."
        notAString: "Το όνομα του {className} είναι {valueText}, όχι συμβολοσειρά - η έρευνα δεν μπορεί να το φορτώσει."
      },
      "property/not-an-array": {
        // [Auto-translated] "The \"{key}\" of {ownerText} is not an array - the property holds a list, and the run time wraps the value into a one-item array."
        notAnArray: "Το \"{key}\" του {ownerText} δεν είναι πίνακας - η ιδιότητα περιέχει μια λίστα και ο χρόνος εκτέλεσης αναδιπλώνει την τιμή σε έναν πίνακα ενός στοιχείου."
      },
      "variable/collision": {
        // [Auto-translated] "The variable definition declares \"{variable}\", which is also the data key of question \"{name}\" - setting the variable deletes the answer stored under that key, and {{name}} answers the host value from then on."
        questionShadowed: "Ο ορισμός της μεταβλητής δηλώνει \"{variable}\", το οποίο είναι επίσης το κλειδί δεδομένων της ερώτησης \"{name}\" - η ρύθμιση της μεταβλητής διαγράφει την απάντηση που είναι αποθηκευμένη κάτω από αυτό το κλειδί και το {{name}} απαντά στην τιμή κεντρικού υπολογιστή από εκεί και πέρα.",
        // [Auto-translated] "The variable definition declares \"{variable}\", which is also the name of calculated value \"{name}\" - both write the same slot, and whichever runs last wins."
        calculatedValueShadowed: "Ο ορισμός της μεταβλητής δηλώνει \"{variable}\", που είναι επίσης το όνομα της υπολογιζόμενης τιμής \"{name}\" - και οι δύο γράφουν την ίδια υποδοχή και όποιος τρέξει τελευταίος κερδίζει."
      },
      "variable/preset": {
        // [Auto-translated] "variablePresets.definition is not a survey JSON object, so no variable is declared and no preset value can be checked."
        definitionNotAnObject: "variablePresets.definition δεν είναι αντικείμενο JSON έρευνας, επομένως δεν δηλώνεται καμία μεταβλητή και δεν μπορεί να ελεγχθεί καμία προκαθορισμένη τιμή.",
        // [Auto-translated] "variablePresets.presets is not an array, so no preset is declared."
        presetsNotAnArray: "variablePresets.presets δεν είναι πίνακας, επομένως δεν δηλώνεται καμία προεπιλογή.",
        // [Auto-translated] "Preset #{index} is not an object."
        presetNotAnObject: "Η προεπιλογή #{index} δεν είναι αντικείμενο.",
        // [Auto-translated] "Preset #{index} has no name, so nothing can reference it."
        presetNameMissing: "Η προεπιλογή #{index} δεν έχει όνομα, επομένως τίποτα δεν μπορεί να την αναφέρει.",
        // [Auto-translated] "Preset \"{preset}\" carries no variables object, so it sets nothing."
        presetVariablesNotAnObject: "Η προεπιλογή \"{preset}\" δεν φέρει αντικείμενο μεταβλητών, επομένως δεν ορίζει τίποτα.",
        // [Auto-translated] "Preset \"{preset}\" is declared twice - a lookup by that name answers with the first one."
        duplicateName: "Η προεπιλογή \"{preset}\" δηλώνεται δύο φορές - μια αναζήτηση με αυτό το όνομα απαντά με το πρώτο.",
        // [Auto-translated] "Preset \"{preset}\" sets \"{variable}\", which the variable definition does not declare."
        unknownVariable: "Το προκαθορισμένο \"{preset}\" ορίζει το \"{variable}\", το οποίο δεν δηλώνει ο ορισμός της μεταβλητής.",
        // [Auto-translated] "Preset \"{preset}\" sets \"{variable}\" to a value the variable definition rejects: {errors}"
        invalidValue: "Η προεπιλογή \"{preset}\" ορίζει το \"{variable}\" σε μια τιμή που απορρίπτει ο ορισμός της μεταβλητής: {errors}"
      },
      "expression/unknown-function": {
        // [Auto-translated] "The function \"{functionName}\" is not registered."
        notRegistered: "Η συνάρτηση \"{functionName}\" δεν έχει καταχωρηθεί."
      },
      "cycle/calculated-value": {
        // [Auto-translated] "The calculated value \"{names}\" references itself in its own expression."
        self: "Η υπολογιζόμενη τιμή \"{names}\" αναφέρεται στη δική της έκφραση.",
        // [Auto-translated] "Calculated values {names} depend on each other."
        loop: "Οι υπολογισμένες τιμές {names} εξαρτώνται η μία από την άλλη."
      },
      "cycle/trigger": {
        // [Auto-translated] "The trigger reacts to the value it sets itself (\"{setToName}\")."
        self: "Το έναυσμα αντιδρά στην τιμή που ορίζει το ίδιο (\"{setToName}\").",
        // [Auto-translated] "Triggers form a loop through the values they set: {setRoots}."
        loop: "Τα εναύσματα σχηματίζουν έναν βρόχο μέσω των τιμών που ορίζουν: {setRoots}."
      },
      "cycle/value-write": {
        // [Auto-translated] "The {label} reads the value it writes itself - it runs only when another value changes, so it never runs at all."
        self: "Η {label} διαβάζει την τιμή που γράφει μόνη της - εκτελείται μόνο όταν αλλάζει μια άλλη τιμή, επομένως δεν εκτελείται ποτέ.",
        // [Auto-translated] "Values are written in a loop: {chain}. Each write reruns the expressions that read it, so the final values depend on the order the questions are answered in."
        loop: "Οι τιμές γράφονται σε βρόχο: {chain}. Κάθε εγγραφή εκτελεί ξανά τις εκφράσεις που τη διαβάζουν, επομένως οι τελικές τιμές εξαρτώνται από τη σειρά με την οποία απαντώνται οι ερωτήσεις."
      },
      "expression/unknown-choice": {
        // [Auto-translated] "The condition compares \"{name}\" to {values} - not among its choices. Available: {available}."
        notAmongChoices: "Η συνθήκη συγκρίνει το \"{name}\" με το {values} - δεν είναι μεταξύ των επιλογών της. Διαθέσιμο: {διαθέσιμο}.",
        // [Auto-translated] "The condition compares \"{name}\" to {values} - no choice value contains it. Available: {available}."
        noChoiceContains: "Η συνθήκη συγκρίνει το \"{name}\" με το {values} - καμία τιμή επιλογής δεν το περιέχει. Διαθέσιμο: {available}."
      },
      "expression/type-mismatch": {
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" ({questionType}) has no value to compare."
        "no-value": "Η συνθήκη εφαρμόζει το \"{operator}\" στο \"{name}\": Το \"{recordName}\" ({questionType}) δεν έχει τιμή για σύγκριση.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds {valueShapeText} - ordering and arithmetic operators do not apply to it."
        "non-scalar": "Η συνθήκη εφαρμόζει το \"{operator}\" στο \"{name}\": Το \"{recordName}\" διατηρεί το {valueShapeText} - οι τελεστές ταξινόμησης και αριθμητικής δεν ισχύουν για αυτό.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - ordering operators do not apply to it."
        "boolean-ordering": "Η συνθήκη εφαρμόζει το \"{operator}\" στο \"{name}\": Το \"{recordName}\" είναι μια δυαδική ερώτηση - οι τελεστές ταξινόμησης δεν ισχύουν για αυτό.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a text question - its value is a string, so numeric comparison relies on implicit conversion."
        "text-ordering": "Η συνθήκη εφαρμόζει το \"{operator}\" στο \"{name}\": Το \"{recordName}\" είναι μια ερώτηση κειμένου - η τιμή του είναι μια συμβολοσειρά, επομένως η αριθμητική σύγκριση βασίζεται στην έμμεση μετατροπή.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds a date string - comparing it to the number {constValue} cannot hold."
        "date-vs-number": "Η συνθήκη εφαρμόζει το \"{operator}\" στο \"{name}\": Το \"{recordName}\" περιέχει μια συμβολοσειρά ημερομηνίας - συγκρίνοντάς την με τον αριθμό που δεν μπορεί να κρατήσει το {constValue}.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is numeric - comparing it to the string \"{constValue}\" cannot hold."
        "number-vs-string": "Η συνθήκη ισχύει για το \"{operator}\" στο \"{name}\": Το \"{recordName}\" είναι αριθμητικό - η σύγκρισή του με τη συμβολοσειρά \"{constValue}\" δεν μπορεί να διατηρηθεί.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds an array of selected values, so \"=\" compares the whole array."
        "array-vs-scalar": "Η συνθήκη εφαρμόζει το \"{operator}\" στο \"{name}\": Το \"{recordName}\" περιέχει έναν πίνακα επιλεγμένων τιμών, οπότε το \"=\" συγκρίνει ολόκληρο τον πίνακα.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - comparing it to {constValue} cannot hold."
        "boolean-vs-const": "Η συνθήκη εφαρμόζει το \"{operator}\" στο \"{name}\": Το \"{recordName}\" είναι μια δυαδική ερώτηση - η σύγκριση με το {constValue} δεν μπορεί να ισχύει."
      },
      "expression/contradiction": {
        // [Auto-translated] "The {prop} \"{expression}\" is always false, so \"{name}\" is never shown."
        alwaysFalse: "Το {prop} \"{expression}\" είναι πάντα ψευδές, επομένως το \"{name}\" δεν εμφανίζεται ποτέ.",
        // [Auto-translated] "The {prop} \"{expression}\" never holds, because {facts}."
        alwaysFalseViaConstants: "Το {prop} \"{έκφραση}\" δεν ισχύει ποτέ, επειδή {γεγονότα}.",
        // [Auto-translated] "The {prop} \"{expression}\" never holds - no allowed value satisfies it: {facts}."
        outOfRange: "Το {prop} \"{expression}\" δεν ισχύει ποτέ - καμία επιτρεπόμενη τιμή δεν το ικανοποιεί: {facts}.",
        // [Auto-translated] "The {prop} \"{expression}\" contradicts itself: {facts}."
        unsatisfiable: "Το {prop} \"{έκφραση}\" αντιφάσκει με τον εαυτό του: {γεγονότα}."
      },
      "expression/meaningless-condition": {
        // [Auto-translated] "The {prop} \"{expression}\" is always true, so it decides nothing."
        alwaysTrue: "Το {prop} \"{expression}\" είναι πάντα αληθές, οπότε δεν αποφασίζει τίποτα.",
        // [Auto-translated] "The {prop} \"{expression}\" is arithmetic, not a comparison, so it never gives a yes or no."
        notABoolean: "Το {prop} \"{έκφραση}\" είναι αριθμητική, όχι σύγκριση, επομένως δεν δίνει ποτέ ναι ή όχι.",
        // [Auto-translated] "Part of the {prop} \"{expression}\" has a result that is known upfront."
        meaninglessFragment: "Μέρος του {prop} \"{expression}\" έχει ένα αποτέλεσμα που είναι γνωστό εκ των προτέρων.",
        // [Auto-translated] "The {prop} \"{expression}\" always holds, because {facts} - it decides nothing."
        alwaysTrueViaConstants: "Το {prop} \"{expression}\" ισχύει πάντα, επειδή {facts} - δεν αποφασίζει τίποτα."
      },
      "value/not-a-choice": {
        // [Auto-translated] "The default value of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultValue: "Η προεπιλεγμένη τιμή του \"{name}\" είναι {valuesText}, την οποία δεν μπορεί ποτέ να κρατήσει. Επιτρέπεται: {availableText}.",
        // [Auto-translated] "The correct answer of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        correctAnswer: "Η σωστή απάντηση του \"{name}\" είναι {valuesText}, την οποία δεν μπορεί ποτέ να κρατήσει. Επιτρέπεται: {availableText}.",
        // [Auto-translated] "The trigger sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        triggerSetValue: "Το έναυσμα ορίζει το \"{name}\" σε {valuesText}, το οποίο δεν μπορεί ποτέ να κρατήσει. Επιτρέπεται: {availableText}.",
        // [Auto-translated] "The default row value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultRowValue: "Η προεπιλεγμένη τιμή γραμμής ορίζει το \"{name}\" σε {valuesText}, το οποίο δεν μπορεί ποτέ να διατηρήσει. Επιτρέπεται: {availableText}.",
        // [Auto-translated] "The default panel value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultPanelValue: "Η προεπιλεγμένη τιμή του πίνακα ορίζει το \"{name}\" σε {valuesText}, το οποίο δεν μπορεί ποτέ να κρατήσει. Επιτρέπεται: {availableText}.",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such row. Available: {availableText}."
        unknownRowKey: "Το {prop} του \"{name}\" ονομάζει \"{key}\" - δεν υπάρχει τέτοια σειρά. Διαθέσιμο: {availableText}.",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such column. Available: {availableText}."
        unknownColumnKey: "Το {prop} του \"{name}\" ονομάζει \"{key}\" - δεν υπάρχει τέτοια στήλη. Διαθέσιμο: {availableText}.",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such template question. Available: {availableText}."
        unknownQuestionKey: "Το {prop} του \"{name}\" ονομάζει \"{key}\" - δεν υπάρχει τέτοια ερώτηση προτύπου. Διαθέσιμο: {availableText}.",
        // [Auto-translated] "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but \"{fromName}\" holds {sourceShapeText} and \"{setToName}\" holds {targetShapeText}."
        copyValueShape: "Η σκανδάλη copyvalue αντιγράφει το \"{fromName}\" στο \"{setToName}\", αλλά το \"{fromName}\" διατηρεί το {sourceShapeText} και το \"{setToName}\" το {targetShapeText}.",
        // [Auto-translated] "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but no value of \"{fromName}\" is among the values \"{setToName}\" can hold. Allowed: {availableText}."
        copyValueNoOverlap: "Το έναυσμα copyvalue αντιγράφει το \"{fromName}\" στο \"{setToName}\", αλλά καμία τιμή του \"{fromName}\" δεν είναι μεταξύ των τιμών που μπορεί να περιέχει το \"{setToName}\". Επιτρέπεται: {availableText}."
      },
      "choices/dead-source": {
        // [Auto-translated] "\"{name}\" copies its choices from \"{source}\", but no question with that name exists."
        missing: "Το \"{name}\" αντιγράφει τις επιλογές του από το \"{source}\", αλλά δεν υπάρχει καμία ερώτηση με αυτό το όνομα.",
        // [Auto-translated] "\"{name}\" copies its choices from itself."
        self: "Το \"{name}\" αντιγράφει τις επιλογές του από τον εαυτό του.",
        // [Auto-translated] "\"{name}\" copies its choices from \"{source}\" ({sourceType}), which provides neither choices nor an array of values."
        "not-a-source": "Το \"{name}\" αντιγράφει τις επιλογές του από το \"{source}\" ({sourceType}), το οποίο δεν παρέχει ούτε επιλογές ούτε πίνακα τιμών.",
        // [Auto-translated] "\"{name}\" reads {prop} \"{field}\" from \"{source}\", but {sourceType} \"{source}\" has no such {fieldNoun}."
        "missing-field": "Το \"{name}\" διαβάζει {prop} \"{field}\" από το \"{source}\", αλλά το {sourceType} \"{source}\" δεν έχει τέτοιο {fieldNoun}."
      },
      "choices/duplicate": {
        // [Auto-translated] "Another item of the {prop} of \"{name}\" already has the value {valueText} - the run time keeps both items."
        duplicateValue: "Ένα άλλο στοιχείο του {prop} του \"{name}\" έχει ήδη την τιμή {valueText} - ο χρόνος εκτέλεσης διατηρεί και τα δύο στοιχεία.",
        // [Auto-translated] "The choices of \"{name}\" contain {valueText} while {toggleProp} is on - it collides with the built-in {specialItemText} item."
        specialItemCollision: "Οι επιλογές του \"{name}\" περιέχουν {valueText} ενώ το {toggleProp} είναι ενεργοποιημένο - συγκρούεται με το ενσωματωμένο στοιχείο {specialItemText}."
      },
      "trigger/unknown-target": {
        // [Auto-translated] "The {trigger} trigger targets page \"{name}\", which does not exist."
        pageNotFound: "Ο κανόνας ετικέτας {trigger} στοχεύει τη σελίδα \"{name}\", η οποία δεν υπάρχει.",
        // [Auto-translated] "The {trigger} trigger targets \"{name}\", but {containerType} \"{root}\" has no {segmentNoun} \"{segment}\"."
        segmentNotFound: "Ο κανόνας ετικέτας {trigger} στοχεύει το \"{name}\", αλλά το {containerType} \"{root}\" δεν έχει {segmentNoun} \"{segment}\".",
        // [Auto-translated] "The {trigger} trigger {verb} \"{name}\", but no {kindText} with that name exists."
        rootNotFound: "Το {trigger} ενεργοποιεί {verb} \"{name}\", αλλά δεν υπάρχει {kindText} με αυτό το όνομα."
      },
      "trigger/unknown-type": {
        // [Auto-translated] "The trigger type \"{type}\" is not known."
        unknownType: "Ο τύπος ενεργοποίησης \"{type}\" δεν είναι γνωστός.",
        // [Auto-translated] "The trigger has no type."
        noType: "Η σκανδάλη δεν έχει τύπο."
      },
      "validator/unknown-type": {
        // [Auto-translated] "The validator type \"{type}\" of \"{name}\" is not known."
        unknownType: "Ο τύπος επικύρωσης \"{type}\" του \"{name}\" δεν είναι γνωστός.",
        // [Auto-translated] "A validator of \"{name}\" has no type."
        noType: "Ένας επικυρωτής του \"{name}\" δεν έχει τύπο."
      },
      "validator/dead": {
        // [Auto-translated] "The {validatorType} validator of \"{name}\" {effectText}: {causeText} ({questionType})."
        wrongValueShape: "Ο επικυρωτής {validatorType} του \"{name}\" {effectText}: {causeText} ({questionType}).",
        // [Auto-translated] "The {validatorType} validator of \"{name}\" requires at least {min} and at most {max} - no answer satisfies it."
        minAboveMax: "Ο επικυρωτής {validatorType} του \"{name}\" απαιτεί τουλάχιστον {min} και το πολύ {max} - καμία απάντηση δεν το ικανοποιεί.",
        // [Auto-translated] "The answercount validator of \"{name}\" requires at least {minCount} answers, above the {selectable} choices that can be selected together."
        minCountAboveChoices: "Ο επικυρωτής καταμέτρησης απαντήσεων του \"{name}\" απαιτεί τουλάχιστον {minCount} απαντήσεις, πάνω από τις {επιλέξιμες} επιλογές που μπορούν να επιλεγούν μαζί.",
        // [Auto-translated] "The regex validator of \"{name}\" has a pattern the engine rejects: {error}."
        invalidRegex: "Ο επικυρωτής regex του \"{name}\" έχει ένα μοτίβο που απορρίπτει ο κινητήρας: {error}.",
        // [Auto-translated] "The expression validator of \"{name}\" has no expression, so it always passes."
        emptyExpression: "Ο επικυρωτής έκφρασης του \"{name}\" δεν έχει έκφραση, επομένως περνά πάντα."
      },
      "element/count-contradiction": {
        // [Auto-translated] "The {minProp} of \"{name}\" is {min}, above its {maxProp} of {max} - the run time silently adjusts one of them."
        minAboveMax: "Το {minProp} του \"{name}\" είναι {min}, πάνω από το {maxProp} του {max} - ο χρόνος εκτέλεσης προσαρμόζει σιωπηλά ένα από αυτά.",
        // [Auto-translated] "The {countProp} of \"{name}\" is {count}, {direction} its {boundProp} of {bound} - the run time clamps it."
        countOutOfBounds: "Το {countProp} του \"{name}\" είναι {count}, {direction} το {boundProp} του {bound} - ο χρόνος εκτέλεσης το σφίγγει.",
        // [Auto-translated] "The {stepProp} of \"{name}\" is {step}, but the range it steps through ({minProp}..{maxProp}) spans only {range} - the run time clamps it."
        stepAboveRange: "Το {stepProp} του \"{name}\" είναι {step}, αλλά το εύρος από το οποίο περνά ({minProp}.. {maxProp}) εκτείνεται μόνο στο {range} - ο χρόνος εκτέλεσης το περιορίζει.",
        // [Auto-translated] "The minSelectedChoices of \"{name}\" is {min}, above the {selectable} choices that can be selected together - the question can never be answered."
        minAboveChoicesCount: "Το minSelectedChoices του \"{name}\" είναι {min}, πάνω από τις {επιλέξιμες} επιλογές που μπορούν να επιλεγούν μαζί - η ερώτηση δεν μπορεί ποτέ να απαντηθεί."
      },
      "element/never-visible": {
        // [Auto-translated] "\"{name}\" can never become visible: its visibleIf reads {reads}, which {deadClause}, so the condition never holds."
        dependsOnDeadValue: "Το \"{name}\" δεν μπορεί ποτέ να γίνει ορατό: είναι ορατόΑν διαβάζει {reads}, το οποίο {deadClause}, οπότε η συνθήκη δεν ισχύει ποτέ."
      },
      "mask/mismatch": {
        // [Auto-translated] "The maskType \"{maskType}\" of \"{name}\" is not a known mask - the run time falls back to no mask at all."
        unknownMaskType: "Το maskType \"{maskType}\" του \"{name}\" δεν είναι γνωστή μάσκα - ο χρόνος εκτέλεσης πέφτει στο να μην υπάρχει καθόλου μάσκα.",
        // [Auto-translated] "The maskSettings of \"{name}\" set \"{key}\", which is not a property of the \"{maskType}\" mask - the run time drops it silently."
        unknownSettingsKey: "Οι maskSettings του \"{name}\" ορίζουν το \"{key}\", το οποίο δεν είναι ιδιότητα της μάσκας \"{maskType}\" - ο χρόνος εκτέλεσης το ρίχνει σιωπηλά.",
        // [Auto-translated] "The maskSettings of \"{name}\" are set without a maskType - the run time keeps only \"saveMaskedValue\" and drops the rest."
        settingsWithoutMask: "Οι maskSettings του \"{name}\" ορίζονται χωρίς maskType - ο χρόνος εκτέλεσης διατηρεί μόνο το \"saveMaskedValue\" και απορρίπτει τα υπόλοιπα.",
        // [Auto-translated] "The {maskType} mask of \"{name}\" applies to no input: inputType \"{inputType}\" is masked only for text and tel."
        maskInertForInputType: "Η μάσκα {maskType} του \"{name}\" δεν ισχύει για καμία είσοδο: inputType Το \"{inputType}\" καλύπτεται μόνο για κείμενο και τηλ.",
        // [Auto-translated] "The datetime mask of \"{name}\" sets min/max without a pattern - the bounds apply to the pattern's date parts, so without one they do nothing."
        minMaxWithoutPattern: "Η μάσκα ημερομηνίας/ώρας του \"{name}\" ορίζει min/max χωρίς μοτίβο - τα όρια ισχύουν για τα τμήματα ημερομηνίας του μοτίβου, οπότε χωρίς ένα δεν κάνουν τίποτα.",
        // [Auto-translated] "The {maskType} mask of \"{name}\" allows at least {min} and at most {max} - no value satisfies it."
        minAboveMax: "Η μάσκα {maskType} του \"{name}\" επιτρέπει τουλάχιστον {min} και το πολύ {max} - καμία τιμή δεν την ικανοποιεί."
      },
      "page/empty": {
        // [Auto-translated] "The dynamic panel \"{name}\" has an empty template - its panels have nothing to render."
        emptyTemplate: "Ο δυναμικός πίνακας \"{name}\" έχει ένα κενό πρότυπο - οι πίνακές του δεν έχουν τίποτα να αποδώσουν.",
        // [Auto-translated] "The {kindText} \"{name}\" has no elements."
        noElements: "Το {kindText} \"{name}\" δεν έχει στοιχεία.",
        // [Auto-translated] "The {kindText} \"{name}\" has no elements that can ever render - every element is hidden, guarded by a condition that never holds, or empty."
        noRenderableElements: "Το {kindText} \"{name}\" δεν έχει στοιχεία που μπορούν ποτέ να αποδοθούν - κάθε στοιχείο είναι κρυμμένο, φυλάσσεται από μια συνθήκη που δεν ισχύει ποτέ ή είναι κενό.",
        // [Auto-translated] "The detail elements of \"{name}\" are never shown: its detailPanelMode is \"none\", which is the default."
        detailElementsHidden: "Τα στοιχεία λεπτομέρειας του \"{name}\" δεν εμφανίζονται ποτέ: το detailPanelMode του είναι \"none\", το οποίο είναι η προεπιλογή."
      }
    },
    // Clauses appended to a base message, in this order
    suffixes: {
      // [Auto-translated] "Position: {0}."
      atPosition: "Θέση: {0}.", // {0} character offset
      // [Auto-translated] "It was built from the legacy name, operator and value properties of the trigger."
      fromLegacyTrigger: "Δημιουργήθηκε από το παλαιού τύπου όνομα, τον τελεστή και τις ιδιότητες τιμής του εναύσματος.",
      // [Auto-translated] "Inside: {0}."
      inScope: "Μέσα: {0}.", // {0} name of the namespace
      // [Auto-translated] "Did you mean \"{0}\"?"
      didYouMean: "Εννοούσες «{0}»;",
      // [Auto-translated] "If it is a custom component, pass its definition to the linter to enable full analysis."
      customComponentHint: "Εάν πρόκειται για προσαρμοσμένο στοιχείο, περάστε τον ορισμό του στο linter για να ενεργοποιήσετε την πλήρη ανάλυση.",
      // [Auto-translated] "Register the function before linting, or list it in the linter options."
      registerFunctionHint: "Καταχωρίστε τη συνάρτηση πριν από το linting ή καταχωρίστε την στις επιλογές linter.",
      // [Auto-translated] "A misspelled type is silently dropped at run time, and a custom trigger is not covered by the target and cycle checks."
      triggerTypeDroppedHint: "Ένας τύπος με ορθογραφικά λάθη απορρίπτεται σιωπηλά κατά το χρόνο εκτέλεσης και ένα προσαρμοσμένο έναυσμα δεν καλύπτεται από τους ελέγχους προορισμού και κύκλου.",
      // [Auto-translated] "If it is a variable set at run time, list it in the linter options."
      knownVariablesHint: "Εάν πρόκειται για μεταβλητή που έχει οριστεί κατά το χρόνο εκτέλεσης, καταχωρίστε την στις επιλογές linter.",
      // [Auto-translated] "The loop may be unreachable if the trigger conditions never hold together - verify the expressions."
      loopMayBeUnreachable: "Ο βρόχος ενδέχεται να μην είναι προσβάσιμος εάν οι συνθήκες ενεργοποίησης δεν διατηρούνται ποτέ μαζί - επαληθεύστε τις εκφράσεις.",
      // [Auto-translated] "A defaultValueExpression applies only until its question is answered."
      defaultValueExpressionNote: "Μια προεπιλεγμένη παράσταση τιμής ισχύει μόνο μέχρι να απαντηθεί η ερώτησή της.",
      // [Auto-translated] "In expression: {0}"
      inExpression: "Στην έκφραση: {0}", // {0} the expression the defect was found in
      // [Auto-translated] "Referenced in bindings."
      inBindings: "Αναφέρεται σε βιβλιοδεσίες.",
      // [Auto-translated] "Referenced in the choicesByUrl {0}."
      inChoicesByUrl: "Αναφέρεται στην {0} choicesByUrl.", // {0} the url or the path property
      // [Auto-translated] "Referenced in the \"{0}\" text."
      inText: "Αναφέρεται στο κείμενο \"{0}\".", // {0} the localizable property the text belongs to
      // [Auto-translated] "{0}() reads that name from every entry of {1} \"{2}\"."
      functionArgInContainer: "{0} Το () διαβάζει αυτό το όνομα σε κάθε καταχώριση του {1} \"{2}\".",
      // [Auto-translated] "The {0}() argument names no question, panel or page."
      functionArgStandalone: "Το όρισμα {0}() δεν ονομάζει καμία ερώτηση, πίνακα ή σελίδα.",
      // [Auto-translated] "The deserializer drops a key it does not know."
      deserializerDropsKey: "Ο αποσειριοποιητής ρίχνει ένα κλειδί που δεν γνωρίζει.",
      // [Auto-translated] "The deserializer drops a validator it cannot resolve, so nothing validates."
      validatorDroppedHint: "Ο αποσειριοποιητής ρίχνει έναν επικυρωτή που δεν μπορεί να επιλύσει, επομένως τίποτα δεν επικυρώνεται.",
      // [Auto-translated] "The inputType is \"{0}\"."
      validatorInputType: "Ο τύπος εισόδου είναι \"{0}\".",
      // [Auto-translated] "It is the data key of \"{0}\"."
      dataKeyOwner: "Είναι το κλειδί δεδομένων του \"{0}\"." // {0} the element that answers under it
    },
    // The facts a contradiction rests on. {ref} is a reference as an expression writes it,
    facts: {
      // [Auto-translated] ", "
      separator: ",",
      // [Auto-translated] " and "
      and: "και",
      // [Auto-translated] "{ref} is always {value}"
      constant: "Το {ref} είναι πάντα {value}",
      // [Auto-translated] "{ref} is {bounds}"
      range: "Το {ref} είναι {όρια}",
      // [Auto-translated] "at least {0}"
      atLeast: "τουλάχιστον {0}",
      // [Auto-translated] "at most {0}"
      atMost: "το πολύ {0}",
      conflict: {
        // [Auto-translated] "{ref} cannot be both {values}"
        equalValues: "Το {ref} δεν μπορεί να είναι και τα δύο {τιμές}",
        // [Auto-translated] "{ref} cannot be {value} and not be it"
        equalAndNotEqual: "Το {ref} δεν μπορεί να είναι {value} και να μην είναι",
        // [Auto-translated] "{ref} cannot be empty and be {value}"
        emptyAndValue: "Το {ref} δεν μπορεί να είναι κενό και να είναι {value}",
        // [Auto-translated] "{ref} cannot be empty and not empty"
        emptyAndNotEmpty: "Το {ref} δεν μπορεί να είναι κενό και να μην είναι κενό",
        // [Auto-translated] "{ref} cannot be above {min} and below {max}"
        impossibleBounds: "Το {ref} δεν μπορεί να είναι πάνω από {min} και κάτω από {max}",
        // [Auto-translated] "{ref} is asked to be one of no value at all"
        emptySet: "Το {ref} ζητείται να είναι ένα χωρίς καμία αξία"
      }
    },
    // Scope hints of reference/unknown. {0} is the expression variable the hint is about.
    hints: {
      // [Auto-translated] "\"{0}.\" references are only available inside a matrix cell or a matrix detail panel."
      rowScopePrefix: "Οι αναφορές \"{0}.\" είναι διαθέσιμες μόνο μέσα σε ένα κελί μήτρας ή σε ένα πλαίσιο λεπτομερειών μήτρας.",
      // [Auto-translated] "\"{0}\" is only available inside a matrix cell or a matrix detail panel."
      rowScopeStandalone: "Το \"{0}\" είναι διαθέσιμο μόνο μέσα σε ένα κελί μήτρας ή σε ένα πλαίσιο λεπτομερειών μήτρας.",
      // [Auto-translated] "\"{0}.\" references are only available inside a dynamic panel or a panel container."
      panelScopePrefix: "Οι αναφορές \"{0}.\" είναι διαθέσιμες μόνο μέσα σε ένα δυναμικό πλαίσιο ή ένα κοντέινερ πίνακα.",
      // [Auto-translated] "\"{0}.\" references are only available inside a dynamic panel."
      panelSiblingPrefix: "Οι αναφορές \"{0}.\" είναι διαθέσιμες μόνο μέσα σε ένα δυναμικό πλαίσιο.",
      // [Auto-translated] "\"{0}\" is only available inside a dynamic panel."
      panelStandalone: "Το \"{0}\" είναι διαθέσιμο μόνο μέσα σε ένα δυναμικό πάνελ.",
      // [Auto-translated] "\"{0}\" is only available inside choice, row and column conditions."
      itemScope: "Το \"{0}\" είναι διαθέσιμο μόνο μέσα σε συνθήκες επιλογής, γραμμής και στήλης.",
      // [Auto-translated] "\"{0}.\" references are only available inside a composite question."
      compositeScopePrefix: "Οι αναφορές \"{0}.\" είναι διαθέσιμες μόνο μέσα σε μια σύνθετη ερώτηση.",
      // [Auto-translated] "\"{0}\" is a column of this matrix - reference it with the row prefix."
      matrixColumn: "Το \"{0}\" είναι μια στήλη αυτού του πίνακα - αναφέρετέ το με το πρόθεμα σειράς.",
      // [Auto-translated] "\"{0}\" is a question of this dynamic panel - reference it with the panel prefix."
      panelQuestion: "Το \"{0}\" είναι μια ερώτηση αυτού του δυναμικού πίνακα - ανατρέξτε σε αυτό με το πρόθεμα του πίνακα."
    },
    // Prose the linter reports as a "suggestion" instead of an identifier
    suggestions: {
      // [Auto-translated] "Set inputType: \"number\" on \"{0}\" if it collects numbers."
      setNumberInputType: "Ορίστε inputType: \"number\" στο \"{0}\" εάν συλλέγει αριθμούς.",
      // [Auto-translated] "Use \"contains\" or \"anyof\" for multi-select values."
      useContainsOrAnyof: "Χρησιμοποιήστε το \"contains\" ή το \"anyof\" για τιμές πολλαπλής επιλογής."
    },
    // Terms the linter splices into a message as a raw code identifier
    terms: {
      containerKind: {
        // [Auto-translated] "page"
        page: "σελίδα",
        // [Auto-translated] "panel"
        panel: "πάνελ"
      },
      // which of the three name properties shadows a built-in variable
      nameKind: {
        // [Auto-translated] "name"
        name: "Όνομα",
        // [Auto-translated] "valueName"
        valueName: "valueName",
        // [Auto-translated] "name"
        calculatedValue: "Όνομα"
      },
      // the owner of a shadowed name, when the finding carries no element type
      nameOwner: {
        // [Auto-translated] "calculated value"
        calculatedValue: "υπολογιζόμενη τιμή",
        // [Auto-translated] "element"
        default: "στοιχείο"
      },
      // the owner of a property, when the JSON gives it no name of its own
      owner: {
        // [Auto-translated] "the survey"
        survey: "Η έρευνα",
        // [Auto-translated] "the {0}"
        className: "Το {0}"
      },
      specialItem: {
        // [Auto-translated] "Other"
        other: "Άλλα",
        // [Auto-translated] "None"
        none: "Κανένας",
        // [Auto-translated] "Refuse to answer"
        refuse: "Αρνηθείτε να απαντήσετε",
        // [Auto-translated] "Don't know"
        dontknow: "Δεν γνωρίζω"
      },
      deadValidatorEffect: {
        // [Auto-translated] "never fires"
        neverFires: "Δεν πυροβολεί ποτέ",
        // [Auto-translated] "rejects every answer"
        rejectsEveryAnswer: "απορρίπτει κάθε απάντηση",
        // [Auto-translated] "cannot validate"
        default: "δεν είναι δυνατή η επικύρωση"
      },
      // what the answer's shape does to the validator
      deadValidatorCause: {
        // [Auto-translated] "the question holds no answer to validate"
        noAnswer: "Η ερώτηση δεν έχει απάντηση για επικύρωση",
        // [Auto-translated] "a length is read off a text value, and this answer has none"
        textLength: "Ένα μήκος διαβάζεται από μια τιμή κειμένου και αυτή η απάντηση δεν έχει καμία",
        // [Auto-translated] "the answer is not a number and never can be"
        notANumber: "Η απάντηση δεν είναι ένας αριθμός και ποτέ δεν μπορεί να είναι",
        // [Auto-translated] "a number never matches an e-mail address"
        numberVsEmail: "Ένας αριθμός δεν ταιριάζει ποτέ με μια διεύθυνση e-mail",
        // [Auto-translated] "the answer is not a list of values"
        notAList: "Η απάντηση δεν είναι μια λίστα αξιών",
        // [Auto-translated] "the answer is not a value it can check"
        default: "Η απάντηση δεν είναι μια τιμή που μπορεί να ελέγξει"
      },
      valueShape: {
        // [Auto-translated] "an array"
        array: "μια συστοιχία",
        // [Auto-translated] "an object"
        object: "ένα αντικείμενο"
      },
      // the shapes the two ends of a copyvalue trigger hold
      copyShape: {
        // [Auto-translated] "an array of selected values"
        array: "έναν πίνακα επιλεγμένων τιμών",
        // [Auto-translated] "a single value"
        scalar: "μία μόνο τιμή",
        // [Auto-translated] "a value"
        default: "μια τιμή"
      },
      // whether a row/panel count falls below its minimum or above its maximum
      countDirection: {
        // [Auto-translated] "below"
        below: "παρακάτω",
        // [Auto-translated] "above"
        above: "παραπάνω"
      },
      // the verb of element/never-visible, by the number of questions the condition reads
      deadValueClause: {
        // [Auto-translated] "is never visible and never receives a value"
        one: "δεν είναι ποτέ ορατό και δεν λαμβάνει ποτέ τιμή",
        // [Auto-translated] "are never visible and never receive a value"
        many: "δεν είναι ποτέ ορατά και δεν λαμβάνουν ποτέ τιμή"
      },
      targetKind: {
        // [Auto-translated] "question"
        question: "Ερώτηση",
        // [Auto-translated] "question or variable"
        questionvalue: "ερώτηση ή μεταβλητή",
        // [Auto-translated] "page"
        page: "σελίδα"
      },
      triggerVerb: {
        // [Auto-translated] "reads"
        fromName: "διαβάζει",
        // [Auto-translated] "navigates to"
        gotoName: "πλοηγείται σε",
        // [Auto-translated] "sets"
        default: "Σετ"
      },
      // no "operator" table on purpose: an operator stays the identifier the JSON spells,
      sourceField: {
        // [Auto-translated] "template question"
        paneldynamic: "Ερώτηση προτύπου",
        // [Auto-translated] "column"
        default: "στήλη"
      },
      // the noun for the container level an unknown trigger-target segment belongs to
      segmentNoun: {
        // [Auto-translated] "template question"
        paneldynamic: "Ερώτηση προτύπου",
        // [Auto-translated] "column"
        matrixdynamic: "στήλη",
        // [Auto-translated] "item"
        multipletext: "Είδος",
        // [Auto-translated] "row"
        matrix: "Σειρά",
        // [Auto-translated] "row"
        matrixdropdownRow: "Σειρά",
        // [Auto-translated] "column"
        matrixdropdownColumn: "στήλη",
        // [Auto-translated] "field"
        default: "Πεδίο"
      }
    }
  },
  // Localized default JSON for new questions (see settings.toolbox.defaultJSON)
  defaultJson: {
    choices: [
      {
        value: "item1",
        // "Item 1"
        text: "Στοιχείο 1"
      },
      {
        value: "item2",
        // "Item 2"
        text: "Στοιχείο 2"
      },
      {
        value: "item3",
        // "Item 3"
        text: "Στοιχείο 3"
      }
    ],
    columns: [
      {
        value: "column1",
        // "Column 1"
        text: "Στήλη 1"
      },
      {
        value: "column2",
        // "Column 2"
        text: "Στήλη 2"
      },
      {
        value: "column3",
        // "Column 3"
        text: "Στήλη 3"
      }
    ],
    rows: [
      {
        value: "row1",
        // "Row 1"
        text: "Γραμμή 1"
      },
      {
        value: "row2",
        // "Row 2"
        text: "Γραμμή 2"
      }
    ],
    matrixColumns: [
      {
        name: "column1",
        // "Column 1"
        title: "Στήλη 1"
      },
      {
        name: "column2",
        // "Column 2"
        title: "Στήλη 2"
      },
      {
        name: "column3",
        // "Column 3"
        title: "Στήλη 3"
      }
    ]
  }
};

setupLocale({ localeCode: "el", strings: grStrings });