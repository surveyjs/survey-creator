import { setupLocale } from "survey-creator-core";

export var frenchTranslation = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Éditer",
    // [Auto-translated] "Watch and learn how to create surveys"
    externalHelpLink: "Regardez et apprenez à créer des sondages",
    // [Auto-translated] "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Déposer votre question ici.",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "Créez une règle pour personnaliser le déroulement du sondage.",
    // "Copy"
    copy: "Copier",
    // [Auto-translated] "Duplicate"
    duplicate: "Dupliquer",
    // "Add to toolbox"
    addToToolbox: "Ajouter à la boîte à outils",
    // "Delete Panel"
    deletePanel: "Supprimer le panneau",
    // "Delete Question"
    deleteQuestion: "Supprimer la question",
    // "Convert to"
    convertTo: "Convertir en",
    // [Auto-translated] "Drag element"
    drag: "Élément Drag"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Tester le sondage",
    // "Themes"
    theme: "Thèmes",
    // "Translations"
    translation: "Traduction",
    // "Designer"
    designer: "Éditeur de sondage",
    // "JSON Editor"
    json: "Éditeur JSON",
    // "Logic"
    logic: "Condition"
  },
  // Question types
  qt: {
    // "Default"
    default: "Par défaut",
    // "Checkboxes"
    checkbox: "Cases à cocher",
    // "Long Text"
    comment: "Commentaire",
    // "Image Picker"
    imagepicker: "Choix d'image",
    // [Auto-translated] "Ranking"
    ranking: "Classement",
    // [Auto-translated] "Image"
    image: "Image",
    // "Dropdown"
    dropdown: "Liste déroulante",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Liste déroulante (choix multiples)",
    // "File Upload"
    file: "Fichier",
    // "HTML"
    html: "Code HTML",
    // "Single-Select Matrix"
    matrix: "Matrice (choix unique)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrice (choix multiples)",
    // "Dynamic Matrix"
    matrixdynamic: "Matrice (lignes dynamiques)",
    // "Multiple Textboxes"
    multipletext: "Champ multilignes",
    // "Panel"
    panel: "Section",
    // "Dynamic Panel"
    paneldynamic: "Section (dynamique)",
    // "Radio Button Group"
    radiogroup: "Choix unique (radio)",
    // "Rating Scale"
    rating: "Évaluation",
    // [Auto-translated] "Slider"
    slider: "Glisseur",
    // "Single-Line Input"
    text: "Champ de saisie",
    // "Yes/No (Boolean)"
    boolean: "Vrai/Faux (Booléen)",
    // "Expression (read-only)"
    expression: "Titre (lecture seule)",
    // [Auto-translated] "Signature"
    signaturepad: "Signature",
    // [Auto-translated] "Button Group"
    buttongroup: "Groupe de boutons"
  },
  toolboxCategories: {
    // "General"
    general: "Général",
    // "Choice Questions"
    choice: "Questions à choix",
    // "Text Input Questions"
    text: "Questions de saisie libre",
    // "Containers"
    containers: "Conteneurs",
    // "Matrix Questions"
    matrix: "Questions matricielles",
    // "Misc"
    misc: "Divers"
  },
  // Strings in SurveyJS Creator
  ed: {
    // [Auto-translated] "Default ({0})"
    defaultLocale: "Valeur par défaut ({0})",
    // "Survey"
    survey: "Sondage",
    // "Settings"
    settings: "Configuration du sondage",
    // [Auto-translated] "Open settings"
    settingsTooltip: "Ouvrir paramètres",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Paramètres du sondage",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Paramètres de l’enquête",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Paramètres du thème",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Paramètres du thème",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Paramètres du créateur",
    // [Auto-translated] "Show Panel"
    showPanel: "Afficher le panneau",
    // [Auto-translated] "Hide Panel"
    hidePanel: "Masquer le panneau",
    // [Auto-translated] "Select previous"
    prevSelected: "Sélectionnez précédent",
    // [Auto-translated] "Select next"
    nextSelected: "Sélectionnez Suivant",
    // [Auto-translated] "Focus previous"
    prevFocus: "Mise au point précédente",
    // [Auto-translated] "Focus next"
    nextFocus: "Focus suivant",
    // [Auto-translated] "Survey"
    surveyTypeName: "Sondage",
    // [Auto-translated] "Page"
    pageTypeName: "Page",
    // [Auto-translated] "Panel"
    panelTypeName: "Panneau",
    // [Auto-translated] "Question"
    questionTypeName: "Question",
    // [Auto-translated] "Column"
    columnTypeName: "Colonne",
    // "Add New Page"
    addNewPage: "Ajouter une page",
    // "Scroll to the Right"
    moveRight: "Défiler à droite",
    // "Scroll to the Left"
    moveLeft: "Défiler à gauche",
    // "Delete Page"
    deletePage: "Supprimer une page",
    // "Edit Page"
    editPage: "Éditer une page",
    // "Edit"
    edit: "Éditer",
    // "page"
    newPageName: "page",
    // "question"
    newQuestionName: "question",
    // "panel"
    newPanelName: "panneau",
    // "text"
    newTextItemName: "texte",
    // [Auto-translated] "Default"
    defaultV2Theme: "Défaut",
    // [Auto-translated] "Modern"
    modernTheme: "Moderne",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Valeur par défaut (héritée)",
    // "Preview Survey Again"
    testSurveyAgain: "Tester à nouveau le sondage",
    // "Survey width: "
    testSurveyWidth: "Largeur du sondage : ",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "Vous deviez naviguer vers",
    // "Save Survey"
    saveSurvey: "Sauvegarder le sondage",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "Enregistrer le sondage",
    // [Auto-translated] "Save Theme"
    saveTheme: "Enregistrer le thème",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Enregistrer le thème",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Masquer les erreurs",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Afficher les erreurs",
    // "Undo"
    undo: "Annuler",
    // "Redo"
    redo: "Rétablir",
    // [Auto-translated] "Undo last change"
    undoTooltip: "Annuler la dernière modification",
    // [Auto-translated] "Redo the change"
    redoTooltip: "Rétablir la modification",
    // [Auto-translated] "Expand"
    expandTooltip: "Développer",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Effondrement",
    // "Expand All"
    expandAllTooltip: "Tout afficher",
    // "Collapse All"
    collapseAllTooltip: "Réduire tout",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Zoom avant",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Zoom à 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Zoom arrière",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Verrouiller l’état d’expansion/réduction pour les questions",
    // [Auto-translated] "Show more"
    showMoreChoices: "Afficher plus",
    // [Auto-translated] "Show less"
    showLessChoices: "Afficher moins",
    // [Auto-translated] "Copy"
    copy: "Copier",
    // [Auto-translated] "Cut"
    cut: "Couper",
    // [Auto-translated] "Paste"
    paste: "Coller",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "Copier la sélection dans le presse-papiers",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "Couper la sélection dans le presse-papiers",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "Coller à partir du presse-papiers",
    // "Options"
    options: "Options",
    // "Generate Valid JSON"
    generateValidJSON: "Générer un JSON valide",
    // "Generate Readable JSON"
    generateReadableJSON: "Générer un JSON lisible",
    // "Toolbox"
    toolbox: "Boîte à outils",
    // "Properties"
    "property-grid": "Propriétés",
    // [Auto-translated] "Search"
    toolboxSearch: "Rechercher",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Tapez pour rechercher...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Aucun résultat trouvé",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Tapez pour rechercher...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Aucun résultat trouvé",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Commencez à configurer votre formulaire",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Cliquez sur n’importe quelle icône de catégorie pour explorer les paramètres de l’enquête. Des paramètres supplémentaires seront disponibles une fois que vous aurez ajouté un élément de topographie à l’aire de conception.",
    // "Please correct JSON."
    correctJSON: "Merci de corriger le JSON",
    // "Survey Results "
    surveyResults: "Résultat du sondage : ",
    // "As Table"
    surveyResultsTable: "Format tableau",
    // "As JSON"
    surveyResultsJson: "Format JSON",
    // "Question Title"
    resultsTitle: "Titre de la question",
    // "Question Name"
    resultsName: "Nom de la question",
    // "Answer Value"
    resultsValue: "Valeur de la réponse",
    // "Display Value"
    resultsDisplayValue: "Valeur affichée",
    // "Modified"
    modified: "Modifié",
    // "Saving"
    saving: "Sauvegarde en cours",
    // "Saved"
    saved: "Sauvegardé",
    // [Auto-translated] "Error"
    propertyEditorError: "Erreur",
    // "Error! Editor content is not saved."
    saveError: "Erreur! Le contenu de l'éditeur n'a pas été sauvegardé.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Paramètres de langue",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Paramètres du thème",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Ajouter une langue",
    // [Auto-translated] "Languages"
    translationLanguages: "Traduction",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Êtes-vous certain de vouloir supprimer toutes les chaînes pour cette langue ?",
    // "Select language to translate"
    translationAddLanguage: "Choisir langue à traduire",
    // "All Strings"
    translationShowAllStrings: "Afficher tous les termes",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Termes utilisés uniquement",
    // "All Pages"
    translationShowAllPages: "Afficher toutes les pages",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Aucun terme à traduire. Veuillez modifier le filtre.",
    // "Export to CSV"
    translationExportToSCVButton: "Exporter en CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Importer d'un CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Traduire automatiquement tout",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Traduction: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Chaînes non traduites",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Fusionner {0} avec langue par défaut",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Traduction...",
    // [Auto-translated] "Source: "
    translationSource: "Source: ",
    // [Auto-translated] "Target: "
    translationTarget: "Cible: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Les liens YouTube ne sont pas pris en charge.",
    // [Auto-translated] "Export"
    themeExportButton: "Exportation",
    // [Auto-translated] "Import"
    themeImportButton: "Importation",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Exportation",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Importation",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Copier dans le Presse-papiers",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Réinitialiser les paramètres de thème par défaut",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Voulez-vous vraiment réinitialiser le thème ? Toutes vos personnalisations seront perdues.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Oui, réinitialisez le thème",
    // "Bold"
    bold: "Gras",
    // "Italic"
    italic: "Italique",
    // "Underline"
    underline: "Souligné",
    // "Add Question"
    addNewQuestion: "Ajouter Question",
    // [Auto-translated] "Select page..."
    selectPage: "Sélectionner une page...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Les choix sont copiés à partir de",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Les choix sont chargés à partir d’un service Web.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Accédez aux paramètres",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Aperçu des options de choix chargées",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "Le contenu HTML se trouvera ici.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Déposez une question de la boîte à outils ici.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Le sondage est vide. Faites glisser un élément de la boîte à outils ou cliquez sur le bouton ci-dessous.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "La page est vide. Faites glisser un élément de la boîte à outils ou cliquez sur le bouton ci-dessous.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Glissez et déposez une image ici ou cliquez sur le bouton ci-dessous pour choisir une image à télécharger",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Cliquez sur le bouton « Ajouter une question » ci-dessous pour commencer à créer votre formulaire.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Votre formulaire est vide",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Votre formulaire est vide",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Faites glisser un élément depuis la boîte à outils ou cliquez sur le bouton ci-dessous.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Faites glisser un élément depuis la boîte à outils ou cliquez sur le bouton ci-dessous.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Pas d’aperçu",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Pas d’aperçu",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "L’enquête ne contient aucun élément visible.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "L’enquête ne contient aucun élément visible.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Pas de chaînes à traduire",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Pas de chaînes à traduire",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Ajoutez des éléments à votre formulaire ou modifiez le filtre de chaînes dans la barre d’outils.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Ajoutez des éléments à votre formulaire ou modifiez le filtre de chaînes dans la barre d’outils.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Cliquez sur le bouton « Ajouter une question » ci-dessous pour ajouter un nouvel élément à la page.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Cliquez sur le bouton « Ajouter une question » ci-dessous pour ajouter un nouvel élément au panneau.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Cliquez sur le bouton ci-dessous et choisissez une image à télécharger",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Choisir une image",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Ajouter {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Article ",
    // [Auto-translated] "Select a file"
    selectFile: "Sélectionner un fichier",
    // [Auto-translated] "Remove the file"
    removeFile: "Supprimer le fichier",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Ajouter une nouvelle règle",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Créez une règle pour personnaliser le déroulement du sondage.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Pas de règles logiques",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Pas de règles logiques",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Créez une règle pour personnaliser le flux de l’enquête.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Créez une règle pour personnaliser le flux de l’enquête.",
      // "Show/hide page"
      page_visibilityName: "Afficher/masquer la page",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "Activer/désactiver la page",
      // [Auto-translated] "Make page required"
      page_requireName: "Rendre la page obligatoire",
      // "Show/hide panel"
      panel_visibilityName: "Afficher/masquer le panneau",
      // "Enable/disable panel"
      panel_enableName: "Activer/désactiver le panneau",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Rendre le panneau requis",
      // "Show/hide question"
      question_visibilityName: "Afficher/masquer la question",
      // "Enable/disable question"
      question_enableName: "Activer/désactiver la question",
      // "Make question required"
      question_requireName: "Rendre la question obligatoire",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Réinitialiser la valeur de la question",
      // [Auto-translated] "Set question value"
      question_setValueName: "Définir la valeur de la question",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "Afficher/masquer la colonne",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "Activer/désactiver la colonne",
      // [Auto-translated] "Make column required"
      column_requireName: "Rendre la colonne obligatoire",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Réinitialiser la valeur de la colonne",
      // [Auto-translated] "Set column value"
      column_setValueName: "Définition de la valeur de colonne",
      // "Complete survey"
      trigger_completeName: "Terminer le sondage",
      // "Set answer"
      trigger_setvalueName: "Définir la valeur de la question",
      // "Copy answer"
      trigger_copyvalueName: "Copier la valeur de la question",
      // "Skip to question"
      trigger_skipName: "Passer à la question",
      // "Run expression"
      trigger_runExpressionName: "Exécuter une expression personnalisée",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Personnaliser le texte de la page de remerciements",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Rendre la page visible lorsque la condition renvoie 'vrai'. Sinon, la rendre invisible.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Rendre le panneau visible lorsque la condition renvoie 'vrai'. Sinon, le rendre invisible.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Activer le panneau et tous les éléments qu'il contient lorsque la condition renvoie 'vrai'. Sinon, le laisser désactivé.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Render la question visible lorsque la condition renvoie 'vrai'. Sinon, la rendre invisible.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Activer la question lorsque la condition renvoie 'vrai'. Sinon, la laisser désactivée.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "La question devient requise lorsque la condition renvoie 'vrai'.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Lorsque la condition renvoie 'vrai', l'enquête est alors terminée et un utilisateur voit la page de remerciements.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Lorsque les valeurs des questions utilisées dans la condition sont modifiées et que la condition renvoie 'vrai', la valeur est définie à la question sélectionnée.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Lorsque les valeurs de question, qui sont utilisées dans la condition, sont modifiées et que la condition renvoie 'vrai', la valeur d'une question sélectionnée est copiée dans une autre question sélectionnée.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Lorsque la condition renvoie 'vrai', l'enquête passe à la question sélectionnée.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Lorsque la condition renvoie 'vrai', alors la condition personnalisée est exécutée. Vous pouvez éventuellement définir ce résultat de condition dans la question sélectionnée.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Si la condition renvoie 'vrai', le texte par défaut de la page de remerciements est remplacé par celui que vous avez défini.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Lorsque la condition: '{0}' renvoie 'vrai':", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Nouvelle règle",
      // "make page {0} visible"
      page_visibilityText: "Rendre la page {0} visible", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Rendre le panneau {0} visible", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Activer le panneau {0}", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "Rendre la question {0} visible", // {0} question name
      // "make question {0} enable"
      question_enableText: "Activer la question {0}", // {0} question name
      // "make question {0} required"
      question_requireText: "Rendre la question {0} obligatoire", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Réinitialisez la valeur pour la question : {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Attribuer une valeur : {1} à la question : {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Rendre visible les {0} de la colonne de questions {1}", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Activer la {0} de la colonne de questions {1}", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "rendre obligatoire la colonne {0} de la question {1}", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Réinitialiser la valeur de la cellule pour la colonne : {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Affecter la valeur de la cellule : {1} à la colonne : {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Expression dont le résultat sera attribué à la question cible.",
      // "survey becomes completed"
      trigger_completeText: "Le sondage se termine.",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "Définir dans la question: {0} valeur {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Valeur de la question claire : {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Copier dans la question: {0} valeur de la question {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Dans le sondage, passez à la question {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Exécuter l'expression: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " et définissez son résultat dans la question: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Afficher un texte personnalisé pour la page de remerciements.",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Toutes les questions",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Tous les types d’action",
      // "Condition(s)"
      conditions: "Condition(s)",
      // "Action(s)"
      actions: "Action(s)",
      // "Define condition(s)"
      expressionEditorTitle: "Définissez le(s) condition(s)",
      // "Define action(s)"
      actionsEditorTitle: "Définissez le(s) action(s)",
      // "Delete Action"
      deleteAction: "Supprimer l'action",
      // "Add Action"
      addNewAction: "Ajouter une nouvelle action",
      // "Select action..."
      selectedActionCaption: "Sélectionnez une action à ajouter …",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "La condition est vide ou non valide. Merci de corriger.",
      // "Please add at least one action."
      noActionError: "Veuillez ajouter au moins une action.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Veuillez corriger les problèmes dans vos actions.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Les règles logiques sont incomplètes",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Vous n’avez pas terminé certaines des règles logiques. Si vous quittez l’onglet maintenant, les modifications seront perdues. Voulez-vous toujours quitter sans sauvegarder ?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Oui",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Non, je veux compléter les règles"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Nom du panneau",
      // [Auto-translated] "Panel title"
      title: "Titre du panneau",
      // [Auto-translated] "Panel description"
      description: "Description du panneau",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Rendre le panneau visible si",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Rendez le panneau requis si",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Ordre des questions au sein du panel",
      // [Auto-translated] "Move the panel to page"
      page: "Déplacer le panneau vers la page",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Afficher le panneau sur une nouvelle ligne",
      // [Auto-translated] "Panel collapse state"
      state: "État d’effondrement du panneau",
      // [Auto-translated] "Inline panel width"
      width: "Largeur du panneau en ligne",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Largeur minimale du panneau",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Largeur maximale du panneau",
      // [Auto-translated] "Number this panel"
      showNumber: "Numéroter ce panneau"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Largeur utile, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Largeur du titre de la question, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Nom du panneau",
      // [Auto-translated] "Panel title"
      title: "Titre du panneau",
      // [Auto-translated] "Panel description"
      description: "Description du panneau",
      // [Auto-translated] "Entry display mode"
      displayMode: "Mode d’affichage d’entrée de gamme",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Rendre le panneau visible si",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Rendez le panneau requis si",
      // [Auto-translated] "Move the panel to page"
      page: "Déplacer le panneau vers la page",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Afficher le panneau sur une nouvelle ligne",
      // [Auto-translated] "Panel collapse state"
      state: "État de réduction du panneau",
      // [Auto-translated] "Inline panel width"
      width: "Largeur du panneau en ligne",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Largeur minimale du panneau",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Largeur maximale du panneau",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Confirmer la suppression de l’entrée",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Modèle de description d’entrée",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Modèle de titre d’entrée",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Texte du panneau vide",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Modèle de titre de tabulation",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Espace réservé au titre de l’onglet",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Rendez visible une entrée individuelle si",
      // [Auto-translated] "Number the panel"
      showNumber: "Numérotez le panneau",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Alignement du titre du panneau",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Alignement de la description du panneau",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Alignement du titre de la question",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Largeur du titre de la question",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Alignement des messages d’erreur",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Nouveau lieu d’entrée",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Afficher la barre de progression",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Éviter les réponses en double à la question suivante"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Nom de la question",
      // [Auto-translated] "Question title"
      title: "Titre de la question",
      // [Auto-translated] "Question description"
      description: "Description de la question",
      // [Auto-translated] "Show the title and description"
      showTitle: "Afficher le titre et la description",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Rendez la question visible si",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Faites en sorte que la question soit obligatoire si",
      // [Auto-translated] "Move the question to page"
      page: "Déplacer la question vers la page",
      // [Auto-translated] "Question box collapse state"
      state: "État de réduction de la zone de question",
      // [Auto-translated] "Number this question"
      showNumber: "Numéroter cette question",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Alignement du titre de la question",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Alignement de la description de la question",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Alignement des messages d’erreur",
      // [Auto-translated] "Increase the inner indent"
      indent: "Augmenter l’empreinte intérieure",
      // [Auto-translated] "Inline question width"
      width: "Largeur de la question en ligne",
      // [Auto-translated] "Minimum question width"
      minWidth: "Largeur minimale de la question",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Largeur maximale de la question",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Mettre à jour la valeur du champ de saisie"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Largeur de la zone de signature",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Hauteur de la zone de signature",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Mise à l’échelle automatique de la zone de signature",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Afficher un espace réservé dans la zone de signature",
      // [Auto-translated] "Placeholder text"
      placeholder: "Texte d’espace réservé",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Texte d’espace réservé en lecture seule ou en mode d’aperçu",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Afficher le bouton Effacer dans la zone de signature",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Largeur de trait minimale",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Largeur de course maximale",
      // [Auto-translated] "Stroke color"
      penColor: "Couleur du trait"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Hauteur du champ de saisie (en lignes)"
    },
    // "Question numbering"
    showQuestionNumbers: "Afficher les numéros de questions",
    // "Question indexing type"
    questionStartIndex: "Index de départ de la question (1, 2 ou 'A', 'a')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Nom de l’expression",
      // [Auto-translated] "Expression title"
      title: "Titre de l’expression",
      // [Auto-translated] "Expression description"
      description: "Description de l’expression",
      // [Auto-translated] "Expression"
      expression: "Expression"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Expression"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Expression"
    },
    // survey templates
    survey: {
      // "Survey title"
      title: "Titre du questionnaire",
      // [Auto-translated] "Survey description"
      description: "Description de l’enquête",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Rendre l’enquête en lecture seule"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Nom de la page",
      // "Page title"
      title: "Titre",
      // [Auto-translated] "Page description"
      description: "Description de la page",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Rendre la page visible si",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Rendez la page obligatoire si",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Limite de temps pour compléter la page",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Ordre des questions sur la page"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Nom de la colonne",
      // [Auto-translated] "Column title"
      title: "Titre de la colonne",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Éviter les réponses en double",
      // [Auto-translated] "Column width"
      width: "Largeur de la colonne",
      // [Auto-translated] "Minimum column width"
      minWidth: "Largeur minimale de la colonne",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Hauteur du champ de saisie (en lignes)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Rendre la colonne visible si",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Rendez la colonne obligatoire si",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Chaque option dans une colonne distincte"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Effacer les autres personnes de la même rangée"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Nom",
      // [Auto-translated] "Title"
      title: "Titre"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Enregistrer la valeur masquée dans les résultats de l’enquête"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Modèle de valeur"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Valeur minimale",
      // [Auto-translated] "Maximum value"
      max: "Valeur maximale"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Autoriser les valeurs négatives",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Séparateur de milliers",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Séparateur décimal",
      // [Auto-translated] "Value precision"
      precision: "Précision de la valeur",
      // [Auto-translated] "Minimum value"
      min: "Valeur minimale",
      // [Auto-translated] "Maximum value"
      max: "Valeur maximale"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Préfixe de devise",
      // [Auto-translated] "Currency suffix"
      suffix: "Suffixe de devise"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Effacer les autres lorsque vous êtes sélectionné",
    // [Auto-translated] "Display both text and value"
    showValue: "Afficher à la fois le texte et la valeur",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Demander à l’utilisateur de saisir un commentaire",
    // "Display area height"
    imageHeight: "Hauteur de l'image",
    // "Display area width"
    imageWidth: "Largeur de l'image",
    // "Join identifier"
    valueName: "Variable de stockage",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Valeur d’affichage par défaut pour les textes dynamiques",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Alignement des étiquettes",
    // [Auto-translated] "Input field width (in characters)"
    size: "Largeur du champ de saisie (en caractères)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Alignement des messages d’erreur de cellule",
    // [Auto-translated] "Enabled"
    enabled: "Activé",
    // [Auto-translated] "Disabled"
    disabled: "Handicapé",
    // [Auto-translated] "Inherit"
    inherit: "Hériter",
    // "Apply"
    apply: "Appliquer",
    // "OK"
    ok: "Ok",
    // "Save"
    save: "Enregistrer",
    // [Auto-translated] "Clear"
    clear: "Effacer",
    // [Auto-translated] "Save"
    saveTooltip: "Sauvegarder",
    // "Cancel"
    cancel: "Annuler",
    // [Auto-translated] "Set"
    set: "Définir",
    // "Reset"
    reset: "Réinitialiser",
    // [Auto-translated] "Change"
    change: "Changer",
    // [Auto-translated] "Refresh"
    refresh: "Rafraîchir",
    // "Close"
    close: "Fermer",
    // "Delete"
    delete: "Supprimer",
    // [Auto-translated] "Add"
    add: "Ajouter",
    // "Add New"
    addNew: "Ajouter un nouvel élément",
    // "Click to add an item..."
    addItem: "Cliquez pour ajouter un item...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Cliquez pour supprimer l’élément...",
    // [Auto-translated] "Drag the item"
    dragItem: "Faire glisser l’élément",
    // "Other"
    addOther: "Autre",
    // "Select All"
    addSelectAll: "Tout sélectionner",
    // "None"
    addNone: "Aucun",
    // "Remove All"
    removeAll: "Tout supprimer",
    // "Edit"
    edit: "Éditer",
    // "Return without saving"
    back: "Quitter sans sauvegarder",
    // "Return without saving"
    backTooltip: "Quitter sans sauvegarder",
    // "Save and return"
    saveAndBack: "Sauvegarder et quitter",
    // "Save and return"
    saveAndBackTooltip: "Sauvegarder et quitter",
    // [Auto-translated] "Done"
    doneEditing: "Terminé",
    // "Edit Choices"
    editChoices: "Editer les choix",
    // [Auto-translated] "Show Choices"
    showChoices: "Afficher les choix",
    // "Move"
    move: "Déplacer",
    // "<empty>"
    empty: "<vide>",
    // [Auto-translated] "Value is empty"
    emptyValue: "La valeur est vide",
    // "Manual Entry"
    fastEntry: "Ajout rapide",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "La valeur '{0}' n’est pas unique",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Veuillez limiter le nombre d'éléments de {0} à {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Veuillez saisir au moins {0} éléments",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Entrez la liste des options de choix et leurs ID au format suivant :\n\nid|option\n\nL’ID d’une option de choix n’est pas visible par les personnes interrogées et peut être utilisé dans les règles conditionnelles.",
    // "Form Entry"
    formEntry: "Ajout via formulaire",
    // "Test the service"
    testService: "Tester le service",
    // [Auto-translated] "Please select the element"
    itemSelectorEmpty: "Veuillez sélectionner l’élément",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "Veuillez sélectionner l’action",
    // "Select a question..."
    conditionSelectQuestion: "Sélectionner une question...",
    // [Auto-translated] "Select a page..."
    conditionSelectPage: "Sélectionnez une page...",
    // [Auto-translated] "Select a panel..."
    conditionSelectPanel: "Sélectionnez un panneau...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Sélectionner ou saisir la valeur",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Appuyer sur Ctrl + espace pour obtenir une aide pour la saisie d'expression",
    // "Current row"
    aceEditorRowTitle: "Ligne actuelle",
    // "Current panel"
    aceEditorPanelTitle: "Panneau actuel",
    // "For more details please check the documentation"
    showMore: "Pour plus d'informations, veuillez vous référer à la documentation",
    // "Available questions"
    assistantTitle: "Questions disponibles :",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Ajoutez au minimum une ligne ou une colonne",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "Examiner avant de soumettre",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Activé par une condition",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Réinitialisation",
    // "Please enter a value"
    propertyIsEmpty: "Veuillez entrer une valeur",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "Veuillez saisir une valeur unique",
    // [Auto-translated] "Please enter a unique name"
    propertyNameIsNotUnique: "Veuillez saisir une variable unique",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "N’utilisez pas de mots réservés : « item », « choice », « panel », « row ».",
    // "You don't have any items yet"
    listIsEmpty: "Ajouter un nouvel élément",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "Vous n’avez pas encore le choix",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Vous n’avez pas encore de colonnes",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Vous n’avez pas encore de colonnes de mise en page",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Vous n’avez pas encore de lignes",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Vous n’avez pas encore de règles de validation",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Vous n’avez pas encore de variables personnalisées",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Vous n’avez pas encore de déclencheurs",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Vous n’avez pas encore de liens",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Vous n’avez pas encore de pages",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "Ajouter un nouveau choix",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Ajouter une nouvelle colonne",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Ajouter une nouvelle ligne",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Ajouter une nouvelle règle",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Ajouter une nouvelle variable",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Ajouter un nouveau déclencheur",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Ajouter une nouvelle URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Ajouter une nouvelle page",
    // "Expression is empty"
    expressionIsEmpty: "La condition est vide",
    // "Value"
    value: "Valeur",
    // "Text"
    text: "Texte",
    // "Row ID"
    rowid: "ID Ligne",
    // "Image or video file URL"
    imageLink: "URL de l'image",
    // "Edit column: {0}"
    columnEdit: "Éditer la colonne: {0}",
    // "Edit item: {0}"
    itemEdit: "Éditer l'item: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Chemin",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "Web service URL",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Obtenir la valeur à stocker à partir de la propriété suivante"
    },
    // "Get value to display from the following property"
    titleName: "Obtenir le texte à afficher à partir du champ JSON suivant",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "Obtenir les URL de fichier à partir de la propriété suivante",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "Accepter une réponse vide",
    // "Title"
    titlePlaceholder: "Titre de la page",
    // "Survey Title"
    surveyTitlePlaceholder: "Saisissez le titre du sondage",
    // "Page {num}"
    pageTitlePlaceholder: "Saisissez le titre de la page",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Page d’accueil",
    // "Description"
    descriptionPlaceholder: "Entrez une description",
    // "Description"
    surveyDescriptionPlaceholder: "Entrez une description pour l'enquête",
    // "Description"
    pageDescriptionPlaceholder: "Entrez une description pour la page",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Choix d’enveloppes",
    // "Enable the \"Other\" option"
    showOtherItem: "Contient choix \"Autre\"",
    // "Rename the \"Other\" option"
    otherText: "Texte du choix \"Autre\"",
    // "Enable the \"None\" option"
    showNoneItem: "Contient un choix \"Aucun\"",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Activez l’option « Refuser de répondre »",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Activez l’option « Ne sait pas »",
    // "Rename the \"None\" option"
    noneText: "Texte du choix \"Aucun\"",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Contient un choix \"Tout sélectionner\"",
    // "Rename the \"Select All\" option"
    selectAllText: "Texte du choix \"Tout sélectionner\"",
    // "Minimum value for auto-generated items"
    choicesMin: "Valeur minimum pour les choix générés automatiquement",
    // "Maximum value for auto-generated items"
    choicesMax: "Valeur maximum pour les choix générés automatiquement",
    // "Step value for auto-generated items"
    choicesStep: "Écart entre les choix générés automatiquement",
    // "Name"
    name: "Variable de stockage",
    // "Title"
    title: "Intitulé de la question",
    // "Cell input type"
    cellType: "Type de cellule",
    // "Column count"
    colCount: "Nombre de colonnes",
    // "Choice order"
    choicesOrder: "Sélectionner l'ordre des choix",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Autoriser les choix personnalisés",
    // "Visible"
    visible: "Est visible ?",
    // "Required"
    isRequired: "Est obligatoire ?",
    // [Auto-translated] "Mark as required"
    markRequired: "Marquer au besoin",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Supprimer la marque requise",
    // "Require an answer in each row"
    eachRowRequired: "Réponse obligatoire pour toutes les lignes",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Éviter les réponses dupliquées dans les lignes",
    // "Error message for required questions"
    requiredErrorText: "Message d'erreur lorsque obligatoire",
    // "Display the question on a new line"
    startWithNewLine: "Afficher la question sur une nouvelle ligne",
    // "Rows"
    rows: "Lignes",
    // [Auto-translated] "Columns"
    cols: "Colonnes",
    // "Placeholder text within input field"
    placeholder: "Placeholder (texte indicatif)",
    // "Show preview area"
    showPreview: "Afficher les informations du fichier",
    // "Store file content in JSON result as text"
    storeDataAsText: "Stocker le contenu du fichier dans le résultat JSON sous forme de texte",
    // "Maximum file size (in bytes)"
    maxSize: "Taille maximum du fichier en octets",
    // "Row count"
    rowCount: "Nombre de lignes",
    // "Columns layout"
    columnLayout: "Inverser les lignes et les colonnes",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Emplacement bouton \"Ajouter une ligne\"",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transposer des lignes en colonnes",
    // "\"Add Row\" button text"
    addRowText: "Texte bouton \"Ajouter une ligne\"",
    // "\"Remove Row\" button text"
    removeRowText: "Texte bouton \"Supprimer une ligne\"",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Modèle de titre du champ de saisie",
    // "Minimum rating value"
    rateMin: "Note minimum",
    // "Maximum rating value"
    rateMax: "Note maximum",
    // "Step value"
    rateStep: "Intervalle des notes",
    // "Minimum value label"
    minRateDescription: "Description note minimum",
    // "Maximum value label"
    maxRateDescription: "Description note maximum",
    // "Input type"
    inputType: "Type de champ",
    // "Option placeholder"
    optionsCaption: "Texte par défaut",
    // "Default Answer"
    defaultValue: "Valeur par défaut",
    // "Default texts"
    cellsDefaultRow: "Texte de cellule par défaut",
    // "Edit survey settings"
    surveyEditorTitle: "Éditer les paramètres du sondage",
    // "Edit: {0}"
    qEditorTitle: "Éditer la question: {0}",
    // "Maximum character limit"
    maxLength: "Longueur maximum",
    // "Build"
    buildExpression: "Construire",
    // "Edit"
    editExpression: "Editer",
    // [Auto-translated] "and"
    and: "et",
    // [Auto-translated] "or"
    or: "ou",
    // "Remove"
    remove: "Enlever",
    // "Add Condition"
    addCondition: "Ajouter une condition",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Sélectionnez une question pour commencer à configurer les conditions.",
    // [Auto-translated] "If"
    if: "Si",
    // [Auto-translated] "then"
    then: "alors",
    // [Auto-translated] "Target question"
    setToName: "Question ciblée",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Copier les réponses de la question :",
    // [Auto-translated] "Question to skip to"
    gotoName: "Passer à la question :",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "La règle est incorrecte",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "Ajouter aux résultats de l’enquête",
    // "Make the title and description visible"
    showTitle: "Afficher/masquer le titre",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "Développer/réduire le titre",
    // "Select a survey language"
    locale: "Langue par défaut",
    // "Select device type"
    simulator: "Choisir l'appareil",
    // "Switch to landscape orientation"
    landscapeOrientation: "Paysage",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Passer en orientation portrait",
    // "Clear hidden question values"
    clearInvisibleValues: "Effacer les valeurs invisibles",
    // "Limit to one response"
    cookieName: "Nom du cookie (pour empêcher de compléter 2 fois le sondage localement)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Envoyer les résultats au changement de page",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Sauvegarder la valeur \"Autres\" dans un champ séparé",
    // "Show page titles"
    showPageTitles: "Afficher les titres de pages",
    // "Show page numbers"
    showPageNumbers: "Afficher les numéros de pages",
    // "\"Previous Page\" button text"
    pagePrevText: "Texte bouton page précédente",
    // "\"Next Page\" button text"
    pageNextText: "Texte bouton page suivante",
    // "\"Complete Survey\" button text"
    completeText: "Texte bouton terminer",
    // [Auto-translated] "\"Review Answers\" button text"
    previewText: "Texte du bouton « Examiner les réponses »",
    // [Auto-translated] "\"Edit Answer\" button text"
    editText: "Texte du bouton « Modifier la réponse »",
    // "\"Start Survey\" button text"
    startSurveyText: "Texte bouton commencer",
    // "Show navigation buttons"
    showNavigationButtons: "Afficher les boutons de navigation (navigation par défaut)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Alignement des boutons de navigation",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Afficher le bouton précédent (l'utilisateur pourra retourner sur la page précédente)",
    // "First page is a start page"
    firstPageIsStartPage: "La première page du sondage est une page de démarrage.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Afficher la page de fin une fois le sondage terminé",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Aller à la page suivante automatiquement pour toutes les questions",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Répondez automatiquement à l’enquête",
    // "Show the progress bar"
    showProgressBar: "Afficher la barre de progression",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Alignement de la barre de progression",
    // "Question title alignment"
    questionTitleLocation: "Emplacement du titre de la question",
    // "Question title width"
    questionTitleWidth: "Largeur du titre de la question",
    // "Required symbol(s)"
    requiredMark: "Symbole(s) des questions obligatoires",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Emplacement du symbole obligatoire'",
    // "Error message alignment"
    questionErrorLocation: "Emplacement de l'erreur",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Focus sur la première question au changement de page",
    // "Question order"
    questionOrder: "Ordre des éléments sur la page",
    // "Time limit to complete the survey"
    timeLimit: "Temps maximum pour terminer le sondage",
    // "Time limit to complete one page"
    timeLimitPerPage: "Temps maximum pour terminer une page",
    // [Auto-translated] "Use a timer"
    showTimer: "Utiliser une minuterie",
    // "Timer alignment"
    timerLocation: "Afficher le panneau chronomètre",
    // "Timer mode"
    timerInfoMode: "Mode d'affichage du panneau chronomètre",
    // "Panel display mode"
    renderMode: "Mode de rendu",
    // "Enable entry addition"
    allowAddPanel: "Autoriser l'ajout de sections",
    // "Enable entry removal"
    allowRemovePanel: "Autoriser la suppression de sections",
    // "\"Add Entry\" button text"
    addPanelText: "Ajouter le texte du bouton de la section",
    // "\"Remove Entry\" button text"
    removePanelText: "Supprimer la section texte",
    // "Show all elements on one page"
    isSinglePage: "Afficher tous les éléments sur une seule page",
    // [Auto-translated] "HTML markup"
    html: "Balisage HTML",
    // [Auto-translated] "Answer"
    setValue: "Réponse",
    // [Auto-translated] "Storage format"
    dataFormat: "Format de stockage",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "Activer l’ajout de lignes",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "Activer la suppression des rangées",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "Activer la réorganisation des rangées",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Ne s’applique pas si vous spécifiez la largeur ou la hauteur exacte de la zone d’affichage.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "Largeur minimale de la zone d’affichage",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "Largeur maximale de la zone d’affichage",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "Hauteur minimale de la zone d’affichage",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "Hauteur maximale de la zone d’affichage",
    // "Minimum value"
    minValue: "Valeur minimum",
    // "Maximum value"
    maxValue: "Valeur maximum",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Insensible à la casse",
    // "Minimum length (in characters)"
    minLength: "Longueur minimum",
    // "Allow digits"
    allowDigits: "Autoriser les chiffres",
    // "Minimum count"
    minCount: "Nombre minimum",
    // "Maximum count"
    maxCount: "Nombre maximum",
    // "Regular expression"
    regex: "Expression régulière (RegEx)",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Message de validation",
      // [Auto-translated] "Validation expression"
      expression: "Condition à respecter",
      // [Auto-translated] "Notification type"
      notificationType: "Type de notification",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Longueur maximale (en caractères)"
    },
    // "Total row header"
    totalText: "Texte pour le total",
    // "Aggregation method"
    totalType: "Type de total",
    // "Total value expression"
    totalExpression: "Calcul total",
    // "Total value display format"
    totalDisplayStyle: "Format d'affichage",
    // "Currency"
    totalCurrency: "Monnaie",
    // "Formatted string"
    totalFormat: "Format du total",
    // [Auto-translated] "Survey logo"
    logo: "Logo de l’enquête",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "Mise en page de l’enquête",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "Restreindre la longueur des réponses",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "Limiter la longueur des commentaires",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Hauteur de la zone de commentaires (en lignes)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "Extension automatique des zones de texte",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Autoriser les utilisateurs à redimensionner les zones de texte",
    // "Update input field values"
    textUpdateMode: "Mettre à jour la valeur de la question textuelle",
    // [Auto-translated] "Input mask type"
    maskType: "Type de masque de saisie",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Renvoyer vers la première question ayant une erreur",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Exécuter la validation",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Valider les champs vides en cas de perte de focus",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "Rediriger vers un lien externe après la soumission",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "Lien externe dynamique",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Message (HTML) à afficher si l’utilisateur a déjà rempli cette enquête",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "Balisage de la page « Merci »",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Balisage dynamique de la page de remerciement",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Message (HTML) à afficher pendant le chargement du sondage",
    // [Auto-translated] "Comment area text"
    commentText: "Texte de la zone de commentaires",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Type de saisie semi-automatique",
    // "Label for \"True\""
    labelTrue: "Texte du bouton « Vrai »",
    // "Label for \"False\""
    labelFalse: "Texte du bouton « Faux »",
    // "Show the Clear button"
    allowClear: "Afficher le bouton Effacer",
    // [Auto-translated] "Search Mode"
    searchMode: "Mode de recherche",
    // [Auto-translated] "Display format"
    displayStyle: "Format d’affichage",
    // [Auto-translated] "Formatted string"
    format: "Chaîne de caractères formatée",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Nombre maximal de décimales",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Nombre minimum de décimales",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Afficher les séparateurs de groupes",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "Activer le téléchargement de plusieurs fichiers",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "Prévisualiser les images téléchargées",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Types de fichiers acceptés",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Attendez la fin du téléchargement",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Confirmer la suppression du fichier",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Alignement des détails de la ligne",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Nombre minimal de lignes",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Nombre maximal de lignes",
    // "Confirm row removal"
    confirmDelete: "Confirmer la suppression de lignes",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Message de confirmation",
    // [Auto-translated] "Initial number of entries"
    panelCount: "Nombre initial d’inscriptions",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "Nombre minimum d’inscriptions",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "Nombre maximum d’inscriptions",
    // [Auto-translated] "Initial entry state"
    panelsState: "État de la saisie initiale",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "Texte du bouton « Entrée précédente »",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "Texte du bouton « Entrée suivante »",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Alignement du bouton « Supprimer l’entrée »",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "Masquer la question si elle n’a pas de rangées",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Masquer les colonnes s’il n’y a pas de lignes",
    // [Auto-translated] "Custom rating values"
    rateValues: "Valeurs d’évaluation personnalisées",
    // [Auto-translated] "Rating count"
    rateCount: "Nombre d’évaluations",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Configuration de la cote",
    slider: {
      // [Auto-translated] "Min value"
      min: "Valeur minimale",
      // [Auto-translated] "Max value"
      max: "Valeur maximale",
      // [Auto-translated] "Step value"
      step: "Valeur de l’étape",
      // [Auto-translated] "Show scale labels"
      showLabels: "Afficher les étiquettes d’échelle",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Afficher les infobulles",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Autoriser le croisement des pouces",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Nombre d’étiquettes générées automatiquement",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Expression de la valeur min",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Expression de la valeur maximale",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Configuration des étiquettes d’échelle",
      // [Auto-translated] "Slider type"
      sliderType: "Type de curseur",
      // [Auto-translated] "Min range length"
      minRangeLength: "Longueur minimale de la plage",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Longueur maximale de la portée",
      // [Auto-translated] "Custom labels"
      customLabels: "Étiquettes personnalisées",
      // [Auto-translated] "Label format"
      labelFormat: "Format de l’étiquette",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Format de l’infobulle"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Hauteur de l’image",
      // [Auto-translated] "Image width"
      imageWidth: "Largeur de l’image"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Masquer la question s’il n’a pas le choix",
    // "Minimum width"
    minWidth: "Largeur minimale (en valeurs acceptées par CSS)",
    // "Maximum width"
    maxWidth: "Largeur maximale (en valeurs acceptées par CSS)",
    // "Width"
    width: "Largeur (en valeurs acceptées par CSS)",
    // [Auto-translated] "Show column headers"
    showHeader: "Afficher les en-têtes de colonne",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Afficher la barre de défilement horizontale",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Largeur minimale de la colonne",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Largeur de l’en-tête de ligne",
    // "Value to store when \"True\" is selected"
    valueTrue: "Valeur à sauvegarder pour « Vrai »",
    // "Value to store when \"False\" is selected"
    valueFalse: "Valeur à sauvegarder pour « Faux »",
    // "\"Value is below minimum\" error message"
    minErrorText: "Message d’erreur « La valeur est inférieure au minimum »",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Message d’erreur « La valeur dépasse le maximum »",
    // "\"Empty comment\" error message"
    otherErrorText: "Message d’erreur « Commentaire vide »",
    // "Error message for duplicate responses"
    keyDuplicationError: "Message d’erreur « Valeur de clé non unique »",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Choix minimum à sélectionner",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Nombre maximum de choix à sélectionner",
    // [Auto-translated] "Logo width"
    logoWidth: "Largeur du logo",
    // [Auto-translated] "Logo height"
    logoHeight: "Hauteur du logo",
    // "Read-only"
    readOnly: "Lecture seule",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Désactivez le mode lecture seule si",
    // "\"No rows\" message"
    noRowsText: "Message « Aucune ligne »",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "Choix spéciaux séparés",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Copier les choix à partir de la question",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Quelles options de choix copier",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Utilisez les valeurs de la question de la matrice, de la colonne ou du panneau suivant comme ID de choix",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Utilisez les valeurs de la question matricielle, de la colonne ou du panneau suivant comme textes de choix",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Afficher les titres des pages dans la barre de progression",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Affichage des numéros de page dans la barre de progression",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "Ajouter une zone de commentaire",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Texte de remplacement pour la zone de commentaire",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Afficher les étiquettes sous forme de valeurs extrêmes",
    // [Auto-translated] "Row order"
    rowOrder: "Ordre des lignes",
    // [Auto-translated] "Column layout"
    columnsLayout: "Disposition des colonnes",
    // [Auto-translated] "Nested column count"
    columnColCount: "Nombre de colonnes imbriquées",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Réponse correcte",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Valeurs par défaut",
    // [Auto-translated] "Cell Texts"
    cells: "Texte des cellules",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Sélectionnez un fichier ou collez un lien de fichier...",
    // "Prevent duplicate responses in the following column"
    keyName: "Colonne clé",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Rendre l’option visible si",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Rendez l’option sélectionnable si"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Rendre la ligne visible si",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Rendez la ligne modifiable si"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Texte de remplacement"
    },
    // "Logo alignment"
    logoPosition: "Position du logo",
    // "Add logo..."
    addLogo: "Ajouter un logo...",
    // "Change logo..."
    changeLogo: "Changer le logo...",
    logoPositions: {
      // "Remove logo"
      none: "Retirer le logo",
      // "Left"
      left: "Gauche",
      // "Right"
      right: "Droite",
      // "On the top"
      top: "Au dessus",
      // "In the bottom"
      bottom: "En dessous"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Mode de prévisualisation",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Activer la disposition de la grille",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Colonnes de grille",
    // [Auto-translated] "Mask settings"
    maskSettings: "Paramètres du masque",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Alignement du message d’erreur Détails de la ligne",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Disposition du panneau"
      },
      // "General"
      general: "Général",
      // "Options"
      fileOptions: "Options",
      // "HTML Editor"
      html: "Éditeur HTML",
      // "Columns"
      columns: "Colonnes",
      // "Rows"
      rows: "Lignes",
      // "Choice Options"
      choices: "Choix",
      // [Auto-translated] "Items"
      items: "Éléments",
      // "Visible If"
      visibleIf: "Visible si",
      // "Editable If"
      enableIf: "Activé si",
      // "Required If"
      requiredIf: "Obligatoire si",
      // "Rating Values"
      rateValues: "Barème",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Paramètres du curseur",
      // "Choices from a Web Service"
      choicesByUrl: "Choix depuis API web",
      // "Default Choices"
      matrixChoices: "Choix par défaut",
      // "Text Inputs"
      multipleTextItems: "Champs de saisie multiples",
      // [Auto-translated] "Numbering"
      numbering: "Numérotation",
      // "Validators"
      validators: "Validateurs",
      // "Navigation"
      navigation: "Navigation",
      // "Question Settings"
      question: "Question",
      // [Auto-translated] "Pages"
      pages: "Pages",
      // "Quiz Mode"
      timer: "Chronomètre/Quiz",
      // "Calculated Values"
      calculatedValues: "Valeurs calculées",
      // "Triggers"
      triggers: "Déclencheurs",
      // "Title template"
      templateTitle: "Titre du modèle",
      // "Totals"
      totals: "Totaux",
      // "Conditions"
      logic: "Conditions",
      // [Auto-translated] "Input Mask Settings"
      mask: "Paramètres du masque de saisie",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Disposition des panneaux",
        // [Auto-translated] "Layout"
        question: "Disposition",
        // [Auto-translated] "Layout"
        base: "Disposition"
      },
      // "Data"
      data: "Données",
      // "Validation"
      validation: "Validateurs",
      // "Individual Cell Texts"
      cells: "Cellules",
      // [Auto-translated] "\"Thank You\" Page"
      showOnCompleted: "Page « Merci »",
      // "Logo in the Survey Header"
      logo: "Logo dans le titre du sondage",
      // [Auto-translated] "Slider"
      slider: "Curseur",
      // [Auto-translated] "Expression"
      expression: "Condition",
      // [Auto-translated] "Question Settings"
      questionSettings: "Paramètres de la question",
      // "Header"
      header: "En-tête",
      // "Background"
      background: "Arrière-plan",
      // "Appearance"
      appearance: "Apparence",
      // [Auto-translated] "Accent colors"
      accentColors: "Couleurs d’accentuation",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Arrière-plan de surface",
      // [Auto-translated] "Scaling"
      scaling: "Détartrage",
      // "Others"
      others: "Autres"
    },
    // "Edit property '{0}'"
    editProperty: "Éditer la propriété \"{0}\"",
    // "Items"
    items: "[ Éléments: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Rendez les choix visibles si",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Rendre les choix sélectionnables si",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "Rendre les colonnes visibles si",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "Rendre les lignes visibles si",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "Augmenter l’empreinte intérieure",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Utiliser les réponses de la dernière entrée par défaut",
    // "Please enter a value."
    enterNewValue: "Veuillez saisir la valeur.",
    // "There are no questions in the survey."
    noquestions: "Il n'y a aucune question dans le sondage.",
    // "Please create a trigger"
    createtrigger: "Veuillez créer un déclencheur",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "Appuyez sur le bouton Entrée pour modifier",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Appuyez sur le bouton Entrée pour modifier l’élément, appuyez sur le bouton Supprimer pour supprimer l’élément, appuyez sur alt plus flèche vers le haut ou flèche vers le bas pour déplacer l’élément",
    // "On "
    triggerOn: "Quand ",
    // "Make pages visible"
    triggerMakePagesVisible: "Rendre les pages visibles :",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Rendre les questions visibles :",
    // "Complete the survey if successful."
    triggerCompleteText: "Terminer le sondage si la condition est remplie.",
    // "The trigger is not set"
    triggerNotSet: "Le déclencheur n'est pas défini",
    // "Run if"
    triggerRunIf: "Exécuter si",
    // "Change value of: "
    triggerSetToName: "Changer la valeur de : ",
    // "Copy value from: "
    triggerFromName: "Copier la valeur de : ",
    // "Run this Expression"
    triggerRunExpression: "Exécuter cette expression :",
    // "to: "
    triggerSetValue: "à : ",
    // "Go to the question"
    triggerGotoName: "Aller à la question :",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Ne pas enregistrer le résultat dans les résultats du sondage.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Veuillez entrer une condition valide",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Saisir la condition ici...",
    // [Auto-translated] "No file chosen"
    noFile: "Aucun fichier choisi",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "Effacer les valeurs des questions cachées",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Stocker les valeurs dans la propriété suivante",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Activer la recherche au fur et à mesure de la saisie",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Masquer les éléments sélectionnés",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Réduire la liste déroulante lors de la sélection",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Alignement vertical à l’intérieur des cellules",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Couleurs de ligne alternées",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "Rendre les colonnes visibles si",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "Rendre les lignes visibles si",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Texte de remplacement pour la zone de commentaire",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Texte d’espace réservé pour le fichier local",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Texte de remplacement pour l’appareil photo",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Texte de remplacement pour le fichier local ou l’appareil photo",
    // [Auto-translated] "Rating icon"
    rateType: "Icône d’évaluation",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Ex. : https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Ex. : categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Ex. : a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Ex. : 6po",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Ex. : 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Ex. : 50 %",
    // "auto"
    imageHeight_placeholder: "auto",
    // "auto"
    imageWidth_placeholder: "auto",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Ex. : 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Thème",
      // [Auto-translated] "Question appearance"
      isPanelless: "Apparence de la question",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Arrière-plan et rayon d’angle",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Arrière-plan et rayon d’angle",
      // [Auto-translated] "Accent color"
      primaryColor: "Couleur d’accentuation",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Opacité du panneau et de la boîte de questions",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Opacité de l’élément d’entrée",
      // [Auto-translated] "Survey font size"
      fontSize: "Taille de la police de l’enquête",
      // [Auto-translated] "Survey scale factor"
      scale: "Facteur d’échelle d’enquête",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Rayon d’angle",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Mode avancé",
      // [Auto-translated] "Title font"
      pageTitle: "Police du titre",
      // [Auto-translated] "Description font"
      pageDescription: "Police de description",
      // [Auto-translated] "Title font"
      questionTitle: "Police du titre",
      // [Auto-translated] "Description font"
      questionDescription: "Police de description",
      // [Auto-translated] "Font"
      editorFont: "Police",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Opacité", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Famille de polices de topographie",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Couleur de fond",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Couleurs d’arrière-plan d’accentuation",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Accentuer les couleurs de premier plan",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Couleurs du message d’erreur",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Effets d’ombre",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Effets d’ombre",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Couleurs"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Vue",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Alignement du logo",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Police de titre de l’enquête",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Police de description de l’enquête",
      // [Auto-translated] "Survey title font"
      headerTitle: "Police de titre de l’enquête",
      // [Auto-translated] "Survey description font"
      headerDescription: "Police de description de l’enquête",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Largeur de la zone de contenu",
      // [Auto-translated] "Text width"
      textAreaWidth: "Largeur du texte",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Couleur de fond",
      // [Auto-translated] "Background image"
      backgroundImage: "Image d’arrière-plan",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Opacité",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Chevauchement",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Alignement du logo",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Alignement du titre de l’enquête",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Alignement de la description de l’enquête"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "vrai",
    // [Auto-translated] "false"
    "false": "faux",
    // [Auto-translated] "Local file"
    file: "Fichier local",
    // [Auto-translated] "Camera"
    camera: "Caméra",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Fichier local ou appareil photo",
    // "Inherit"
    inherit: "Hérité",
    // "Visible"
    show: "Afficher",
    // "Hidden"
    hide: "Masquer",
    // "Inherit"
    default: "Par défaut",
    // "Initial"
    initial: "Initial",
    // "Random"
    random: "Aléatoire",
    // "Collapsed"
    collapsed: "Réduite",
    // "Expanded"
    expanded: "Déployée",
    // "None"
    none: "Aucun",
    // "Ascending"
    asc: "Ascendant",
    // "Descending"
    desc: "Descendant",
    // "Indeterminate"
    indeterminate: "Indeterminé",
    // [Auto-translated] "Selected"
    selected: "Sélectionné",
    // [Auto-translated] "Unselected"
    unselected: "Non sélectionné",
    // [Auto-translated] "decimal"
    decimal: "Décimal",
    // [Auto-translated] "currency"
    currency: "Devise",
    // [Auto-translated] "percent"
    percent: "Pour cent",
    // "First panel is expanded"
    firstExpanded: "Déployer la première section",
    // "Hide question numbers"
    off: "Désactiver",
    // "List"
    list: "liste",
    // [Auto-translated] "Carousel"
    carousel: "Carrousel",
    // [Auto-translated] "Tabs"
    tab: "Onglets",
    // "Panel navigator + Progress bar at the top"
    progressTop: "Barre de progression en haut",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "Barre de progression en bas",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "Barre de progression en haut et en bas",
    // [Auto-translated] "Horizontal"
    horizontal: "Horizontal",
    // [Auto-translated] "Vertical"
    vertical: "Vertical",
    // "Top"
    top: "Haut",
    // "Bottom"
    bottom: "Bas",
    // "Top and bottom"
    topBottom: "Haut et bas",
    // "Both"
    both: "Les deux",
    // "Left"
    left: "Gauche",
    // [Auto-translated] "Right"
    right: "Droite",
    // [Auto-translated] "Center"
    center: "Centre",
    // [Auto-translated] "Left and right"
    leftRight: "Gauche et droite",
    // [Auto-translated] "Middle"
    middle: "Milieu",
    // [Auto-translated] "color"
    color: "Couleur",
    // [Auto-translated] "date"
    date: "Date",
    // [Auto-translated] "datetime"
    datetime: "Date et heure",
    // [Auto-translated] "datetime-local"
    "datetime-local": "dateheure-local",
    // [Auto-translated] "email"
    email: "Email",
    // [Auto-translated] "month"
    month: "Mois",
    // [Auto-translated] "number"
    number: "Nombre",
    // [Auto-translated] "password"
    password: "Mot de passe",
    // [Auto-translated] "range"
    range: "Curseur",
    // [Auto-translated] "tel"
    tel: "Numéro de téléphone",
    // "text"
    text: "texte",
    // [Auto-translated] "time"
    time: "Heure",
    // [Auto-translated] "url"
    url: "URL",
    // [Auto-translated] "week"
    week: "Semaine",
    // "Hidden"
    hidden: "Masqué",
    // "Editable"
    edit: "Éditer",
    // "Read-only"
    display: "Affichage",
    // [Auto-translated] "Contain"
    contain: "Contenir",
    // [Auto-translated] "Cover"
    cover: "Couvrir",
    // [Auto-translated] "Fill"
    fill: "Remplir",
    // [Auto-translated] "Next"
    next: "Prochain",
    // [Auto-translated] "Last"
    last: "Dernier",
    // "Upon survey completion"
    onComplete: "Quand terminé",
    // "When question gets hidden"
    onHidden: "Quand masqué",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "Quand la question ou son panneau/page est masqué",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Jamais"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Jamais"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Boutons radio",
    inputType: {
      // [Auto-translated] "Color"
      color: "Couleur",
      // [Auto-translated] "Date"
      date: "Date",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Date et heure",
      // [Auto-translated] "Email"
      email: "Messagerie électronique",
      // [Auto-translated] "Month"
      month: "Mois",
      // [Auto-translated] "Number"
      number: "Nombre",
      // [Auto-translated] "Password"
      password: "Mot de passe",
      // [Auto-translated] "Range"
      range: "Curseur",
      // [Auto-translated] "Phone Number"
      tel: "Numéro de téléphone",
      // "Text"
      text: "Texte",
      // [Auto-translated] "Time"
      time: "Heure",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Semaine"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Valeur unique",
      // [Auto-translated] "Range"
      range: "Gamme"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Always"
      always: "Toujours",
      // [Auto-translated] "Never"
      never: "Jamais"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Erreur",
      // [Auto-translated] "Warning"
      warning: "Avertissement",
      // [Auto-translated] "Informational"
      info: "Informationnel"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Nom complet",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Préfixe",
      // [Auto-translated] "First Name"
      "given-name": "Prénom",
      // [Auto-translated] "Middle Name"
      "additional-name": "Deuxième prénom",
      // [Auto-translated] "Last Name"
      "family-name": "Nom",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Suffixe",
      // [Auto-translated] "Nickname"
      nickname: "Surnom",
      // [Auto-translated] "Job Title"
      "organization-title": "Titre du poste",
      // [Auto-translated] "User Name"
      username: "Nom d’utilisateur",
      // [Auto-translated] "New Password"
      "new-password": "Nouveau mot de passe",
      // [Auto-translated] "Current Password"
      "current-password": "Mot de passe actuel",
      // [Auto-translated] "Organization Name"
      organization: "Nom de l’organisation",
      // [Auto-translated] "Full Street Address"
      "street-address": "Adresse complète",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Ligne d’adresse 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Ligne d’adresse 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Ligne d’adresse 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Adresse de niveau 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Adresse de niveau 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Adresse de niveau 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Adresse de niveau 1",
      // [Auto-translated] "Country Code"
      country: "Code du pays",
      // [Auto-translated] "Country Name"
      "country-name": "Nom du pays",
      // [Auto-translated] "Postal Code"
      "postal-code": "Code postal",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Nom du titulaire de la carte",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Prénom du titulaire de la carte",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Deuxième prénom du titulaire de la carte",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Nom de famille du titulaire de la carte",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Numéro de carte de crédit",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Échéance",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Mois d’expiration",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Année d’expiration",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Code de sécurité de la carte",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Type de carte de crédit",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Devise de transaction",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Montant de la transaction",
      // [Auto-translated] "Preferred Language"
      language: "Langue préférée",
      // [Auto-translated] "Birthday"
      bday: "Anniversaire",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Jour d’anniversaire",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Mois de l’anniversaire",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Année d’anniversaire",
      // [Auto-translated] "Gender"
      sex: "Genre",
      // [Auto-translated] "Website URL"
      url: "URL du site Web",
      // [Auto-translated] "Profile Photo"
      photo: "Photo de profil",
      // [Auto-translated] "Telephone Number"
      tel: "Numéro de téléphone",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Indicatif du pays pour le téléphone",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Numéro de téléphone national",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Indicatif",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Numéro de téléphone local",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Préfixe de téléphone local",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Suffixe de téléphone local",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Extension téléphonique",
      // [Auto-translated] "Email Address"
      email: "Adresse courriel",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protocole de messagerie instantanée"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Aucun",
      // [Auto-translated] "Pattern"
      pattern: "Modèle",
      // [Auto-translated] "Numeric"
      numeric: "Numérique",
      // [Auto-translated] "Date and Time"
      datetime: "Date et heure",
      // [Auto-translated] "Currency"
      currency: "Monnaie"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Left"
      left: "Gauche",
      // [Auto-translated] "Right"
      right: "Droite"
    },
    // "All"
    all: "Tous",
    // "Page"
    page: "Page",
    // "Survey"
    survey: "Sondage",
    // [Auto-translated] "When switching to the next page"
    onNextPage: "Lors du passage à la page suivante",
    // [Auto-translated] "After an answer is changed"
    onValueChanged: "Après la modification d’une réponse",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Avant qu’une réponse ne soit modifiée",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Structure d’origine",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Afficher toutes les questions sur une seule page",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Afficher une seule question par page",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Afficher un seul champ de saisie par page"
    },
    // [Auto-translated] "No preview"
    noPreview: "Pas d’aperçu",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "Afficher toutes les questions",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "Afficher uniquement les questions complétées",
    // [Auto-translated] "Show all questions"
    allQuestions: "Afficher toutes les questions",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Afficher uniquement les questions répondues",
    // [Auto-translated] "Completed pages"
    pages: "Pages complétées",
    // [Auto-translated] "Answered questions"
    questions: "Questions complétées",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Questions obligatoires complétées",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Réponses valides",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Pages terminées (bouton UI)",
    // [Auto-translated] "Under the input field"
    underInput: "Sous le champ de saisie",
    // [Auto-translated] "Under the question title"
    underTitle: "Sous le titre de la question",
    // [Auto-translated] "On lost focus"
    onBlur: "Sur la perte de concentration",
    // [Auto-translated] "While typing"
    onTyping: "Pendant la saisie",
    // [Auto-translated] "Under the row"
    underRow: "Sous la ligne",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "Sous la rangée, n’affichez qu’une seule section",
    // "Auto"
    auto: "Auto",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "Masqué"
    },
    timerInfoMode: {
      // "Both"
      combined: "Les deux"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "Basé sur la disposition matricielle"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Verrouillé",
      // [Auto-translated] "Collapse all"
      collapsed: "Réduire tout",
      // [Auto-translated] "Expand all"
      expanded: "Tout afficher",
      // [Auto-translated] "First expanded"
      firstExpanded: "D’abord élargi"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statique",
      // [Auto-translated] "Responsive"
      responsive: "Adaptative"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Image",
      // [Auto-translated] "Video"
      video: "Vidéo",
      // [Auto-translated] "YouTube"
      youtube: "Youtube"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Boutons",
      // [Auto-translated] "Dropdown"
      dropdown: "Liste déroulante"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Par défaut",
      // [Auto-translated] "Scale"
      scale: "Écaille"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monochrome",
      // [Auto-translated] "Colored"
      colored: "Coloré"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Génération automatique",
      // [Auto-translated] "Manual"
      "false": "Manuelle"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Labels",
      // [Auto-translated] "Stars"
      stars: "Étoiles",
      // [Auto-translated] "Smileys"
      smileys: "Smileys"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Verrouillé"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Numérotation automatique",
      // [Auto-translated] "Auto-numbering"
      on: "Numérotation automatique",
      // [Auto-translated] "Reset on each page"
      onPage: "Réinitialisation sur chaque page",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Réinitialisation sur chaque panneau",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Réinitialisation sur chaque panneau",
      // [Auto-translated] "Recursive numbering"
      recursive: "Numérotation récursive",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Continuez tout au long de l’enquête",
      // [Auto-translated] "No numbering"
      off: "Pas de numérotation"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Sous le titre de la question",
      // [Auto-translated] "Under the input field"
      underInput: "Sous le champ de saisie"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "À côté des choix",
      // [Auto-translated] "Above choices"
      vertical: "Choix ci-dessus"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Décimal",
      // [Auto-translated] "Currency"
      currency: "Monnaie",
      // [Auto-translated] "Percentage"
      percent: "Pourcentage",
      // [Auto-translated] "Date"
      date: "Date"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Décimal",
      // [Auto-translated] "Currency"
      currency: "Monnaie",
      // [Auto-translated] "Percentage"
      percent: "Pourcentage",
      // [Auto-translated] "Date"
      date: "Date"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Langue source"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Langue source"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Retour au début",
      // [Auto-translated] "Bottom"
      bottom: "Fond",
      // [Auto-translated] "Top and bottom"
      topbottom: "Haut et bas",
      // [Auto-translated] "Above the header"
      aboveheader: "Au-dessus de l’en-tête",
      // [Auto-translated] "Below the header"
      belowheader: "Sous l’en-tête",
      // [Auto-translated] "Hidden"
      off: "Caché"
    },
    // [Auto-translated] "Sum"
    sum: "Somme",
    // [Auto-translated] "Count"
    count: "Compter",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Contient",
      // [Auto-translated] "Starts with"
      startsWith: "Commence par"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Cover"
      cover: "Couvrir",
      // [Auto-translated] "Contain"
      contain: "Contenir",
      // [Auto-translated] "Stretch"
      fill: "Étirer",
      // [Auto-translated] "Tile"
      tile: "Carreau"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fixe",
      // [Auto-translated] "Scroll"
      scroll: "Faire défiler"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Basique",
      // [Auto-translated] "Advanced"
      advanced: "Avancé"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Identique à l’enquête",
      // [Auto-translated] "Same as container"
      container: "Identique au conteneur"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Aucun",
      // [Auto-translated] "Accent color"
      accentColor: "Couleur d’accentuation",
      // [Auto-translated] "Custom"
      custom: "Coutume"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Lumière",
      // [Auto-translated] "Dark"
      dark: "Sombre"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Faire défaut",
      // [Auto-translated] "Without Panels"
      "true": "Sans panneaux"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Identique à l’enquête",
      // [Auto-translated] "Same as container"
      container: "Identique au conteneur"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "Est vide",
    // "Not empty"
    notempty: "N'est pas vide",
    // "Equals"
    equal: "Égal",
    // "Does not equal"
    notequal: "N'est pas égal",
    // "Contains"
    contains: "Contient",
    // "Does not contain"
    notcontains: "Ne contient pas",
    // "Any of"
    anyof: "N'importe quel de",
    // "All of"
    allof: "Tous parmi",
    // "Greater than"
    greater: "Supérieur",
    // "Less than"
    less: "Inférieur",
    // "Greater than or equal to"
    greaterorequal: "Supérieur ou égal",
    // "Less than or equal to"
    lessorequal: "Inférieur ou égal",
    // [Auto-translated] "and"
    and: "Et",
    // [Auto-translated] "or"
    or: "Ou"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Utiliser la version Angular",
    // "Use jQuery version"
    jquery: "Utiliser la version jQuery",
    // "Use Knockout version"
    knockout: "Utiliser la version Knockout",
    // "Use React version"
    react: "Utiliser la version React",
    // "Use Vue version"
    vue: "Utiliser la version Vue",
    // "For bootstrap framework"
    bootstrap: "Pour le framework Bootstrap",
    // [Auto-translated] "Modern theme"
    modern: "Thème Moderne",
    // [Auto-translated] "Default theme"
    default: "Thème par défaut",
    // [Auto-translated] "Orange theme"
    orange: "Thème Orange",
    // [Auto-translated] "Darkblue theme"
    darkblue: "Thème Bleu foncé",
    // [Auto-translated] "Darkrose theme"
    darkrose: "Thème Rose foncé",
    // [Auto-translated] "Stone theme"
    stone: "Thème Pierre",
    // [Auto-translated] "Winter theme"
    winter: "Thème Hiver",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "Thème Winter-Stone",
    // "Show survey on a page"
    showOnPage: "Afficher le sondage dans une page",
    // "Show survey in a window"
    showInWindow: "Afficher le sondage dans une fenêtre",
    // "Load Survey JSON from server"
    loadFromServer: "Charger le JSON du sondage depuis un serveur",
    // "Scripts and styles"
    titleScript: "Scripts et styles",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Sélectionner une page pour la tester",
    // "Show invisible elements"
    showInvisibleElements: "Afficher les éléments invisibles",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Masquer les éléments invisibles",
    // [Auto-translated] "Previous"
    prevPage: "Précédent",
    // [Auto-translated] "Next"
    nextPage: "Prochain"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Total de réponses",
    // "Email"
    emailvalidator: "Email",
    // [Auto-translated] "Expression"
    expressionvalidator: "Condition",
    // "Number"
    numericvalidator: "Numérique",
    // "Regex"
    regexvalidator: "Expression régulière (RegEx)",
    // "Text"
    textvalidator: "Texte"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "Terminer le sondage",
    // "Set answer"
    setvaluetrigger: "Définir la valeur",
    // "Copy answer"
    copyvaluetrigger: "Copier la valeur",
    // "Skip to question"
    skiptrigger: "Sauter à la question",
    // "Run expression"
    runexpressiontrigger: "Exécuter une expression",
    // "change visibility (deprecated)"
    visibletrigger: "Modifier la visibilité"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Ex. : +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Ex. : mm/jj/aaaa HH :MM :ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Ex. : $",
      // "Ex.: USD"
      suffix: "Ex. : USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Ex. : 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Ex. : 30 %",
      // "Ex.: 200px"
      questionTitleWidth: "Ex. : 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Un ID de panel qui n’est pas visible par les personnes interrogées.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Tapez un sous-titre de panneau.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui détermine la visibilité du panneau.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule du panneau.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "S’applique à toutes les questions de ce panneau. Lorsqu’il est défini sur « Caché », il masque également les descriptions des questions. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour des questions individuelles. L’option « Hériter » applique le paramètre au niveau de la page (si défini) ou au niveau de l’enquête (« Haut » par défaut). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Définit une largeur cohérente pour les titres de questions lorsqu’ils sont alignés à gauche de leurs zones de questions. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à toutes les questions du panneau. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Conserve l’ordre original des questions ou les rend aléatoires. L’option « Hériter » applique le paramètre au niveau de la page (si défini) ou au niveau de l’enquête.",
      // "Repositions the panel to the end of a selected page."
      page: "Repositionne le panneau à la fin d’une page sélectionnée.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Ajoute un espace ou une marge entre le contenu du panneau et le bord gauche de la zone du panneau.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Désélectionnez cette option pour afficher le panneau sur une seule ligne avec la question ou le panneau précédent. Ce paramètre ne s’applique pas si le panneau est le premier élément de votre formulaire.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Choisissez parmi : « Développé » - le panneau s’affiche en entier et peut être réduit ; « Réduit » - le panneau n’affiche que le titre et la description et peut être développé ; « Verrouillé » - le panneau est affiché en entier et ne peut pas être réduit.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Définit la largeur du panneau proportionnellement aux autres éléments de l’enquête sur la même ligne. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Attribue des numéros aux questions imbriquées dans ce panneau.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Spécifie le nombre de colonnes de ce panneau dans la disposition de la grille.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ce tableau vous permet de configurer chaque colonne de la grille dans le panneau. Il définit automatiquement le pourcentage de largeur de chaque colonne en fonction du nombre maximal d’éléments dans une rangée. Pour personnaliser la disposition de la grille, ajustez manuellement ces valeurs et définissez la largeur du titre pour toutes les questions de chaque colonne."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Un ID de panel qui n’est pas visible par les personnes interrogées.",
      // "Type a panel subtitle."
      description: "Saisissez un sous-titre de panneau.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui détermine la visibilité du panneau.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule du panneau.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "S’applique à toutes les questions de ce panneau. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour les questions individuelles. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Définit une largeur cohérente pour les titres de questions lorsqu’ils sont alignés à gauche de leurs zones de question. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à une question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Définit l’emplacement d’un message d’erreur par rapport à toutes les questions du panneau. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête.",
      // "Repositions the panel to the end of a selected page."
      page: "Repositionne le panneau à la fin d’une page sélectionnée.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Ajoute un espace ou une marge entre le contenu du panneau et la bordure gauche de la zone de panneau.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Désélectionnez cette option pour afficher le panneau sur une seule ligne avec la question ou le panneau précédent. Ce paramètre ne s’applique pas si le panneau est le premier élément de votre formulaire.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Choisissez parmi : « Développé » - le panneau s’affiche en entier et peut être réduit ; « Réduit » - le panneau n’affiche que le titre et la description et peut être développé ; « Verrouillé » - le panneau est affiché en entier et ne peut pas être réduit.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Définit la largeur du panneau par rapport aux autres éléments de topographie de la même ligne. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Saisissez un modèle pour les titres de panneau dynamiques. Utilisez {panelIndex} pour la position générale du panneau et {visiblePanelIndex} pour son ordre parmi les panneaux visibles. Insérez ces espaces réservés dans le motif pour ajouter une numérotation automatique.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Saisissez un modèle pour les titres d’onglets. Utilisez {panelIndex} pour la position générale d’un panneau et {visiblePanelIndex} pour son ordre parmi les panneaux visibles. Insérez ces espaces réservés dans le motif pour ajouter une numérotation automatique.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Texte de secours pour les titres d’onglet qui s’applique lorsque le modèle de titre d’onglet ne produit pas de valeur significative.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Ce paramètre vous permet de contrôler la visibilité des panneaux individuels dans le panneau dynamique. Utilisez l’espace réservé '{panel}' pour référencer le panneau actuel dans votre expression.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Ce paramètre est automatiquement hérité par toutes les questions de ce panneau. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour les questions individuelles. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Sous le titre du panneau » par défaut).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Définit la position d’un panneau nouvellement ajouté. Par défaut, de nouveaux panneaux sont ajoutés à la fin. Sélectionnez « Suivant » pour insérer un nouveau panneau après le panneau actuel.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplique les réponses de la dernière entrée et les attribue à l’entrée suivante ajoutée.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Faites référence à un nom de question pour demander à un utilisateur de fournir une réponse unique à cette question dans chaque panneau.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Déclenche une invite de confirmation avant de supprimer une entrée."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Déclenche une invite de confirmation avant de supprimer une ligne.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Développe automatiquement la section de détail lorsqu’une nouvelle ligne est ajoutée à la matrice."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplique les réponses de la dernière ligne et les attribue à la ligne dynamique suivante ajoutée.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Ce paramètre vous permet d’attribuer une valeur de réponse par défaut en fonction d’une expression. L’expression peut inclure des calculs de base - '{q1_id} + {q2_id}', des expressions booléennes, telles que '{age} > 60', et des fonctions : 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. La valeur déterminée par cette expression sert de valeur par défaut initiale qui peut être remplacée par la saisie manuelle d’une personne interrogée.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine le moment où l’entrée d’une personne interrogée est réinitialisée à la valeur basée sur l’expression de valeur par défaut ou l’expression de valeur définie ou à la valeur de la réponse par défaut (si l’une ou l’autre est définie).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine quand exécuter l’expression « Définir la valeur » et attribuer dynamiquement la valeur résultante en tant que réponse.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Spécifiez une expression qui définit la valeur à définir lorsque les conditions de la règle « Définir la valeur si » sont remplies. L’expression peut inclure des calculs de base - '{q1_id} + {q2_id}', des expressions booléennes, telles que '{age} > 60', et des fonctions : 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. La valeur déterminée par cette expression peut être remplacée par la saisie manuelle d’un répondant.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator vous permet d’ajuster manuellement les largeurs en ligne des éléments de formulaire pour contrôler la mise en page. Si cela ne produit pas le résultat souhaité, vous pouvez activer la disposition en grille, qui structure les éléments de formulaire à l’aide d’un système basé sur des colonnes. Pour configurer les colonnes de mise en page, sélectionnez une page ou un panneau et utilisez le tableau « Paramètres des questions » → « Colonnes de la grille ». Pour ajuster le nombre de colonnes d’une question, sélectionnez-la et définissez la valeur souhaitée dans le champ « Mise en page » → « Étendue de colonnes ».",
    question: {
      // "A question ID that is not visible to respondents."
      name: "ID de question qui n’est pas visible par les personnes interrogées.",
      // "Type a question subtitle."
      description: "Saisissez un sous-titre de question.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine la visibilité de la question.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule pour la question.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’avancement ou la soumission de l’enquête à moins que la question n’ait reçu une réponse.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Désélectionnez cette option pour afficher la question sur une seule ligne avec la question ou le panneau précédent. Ce paramètre ne s’applique pas si la question est le premier élément de votre formulaire.",
      // "Repositions the question to the end of a selected page."
      page: "Repositionne la question à la fin d’une page sélectionnée.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Choisissez parmi : « Développé » - la boîte de questions s’affiche en entier et peut être réduite ; « Réduit » - la boîte de question n’affiche que le titre et la description et peut être développée ; « Verrouillé » - la boîte de questions s’affiche en entier et ne peut pas être réduite.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Remplace les règles d’alignement des titres définies au niveau d’un panneau, d’une page ou d’une enquête. L’option « Hériter » applique tous les paramètres de niveau supérieur (s’ils sont définis) ou tous les paramètres de niveau d’enquête (« Top » par défaut).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "L’option « Hériter » applique le paramètre au niveau de l’enquête (« Sous le titre de la question » par défaut).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Définit l’emplacement d’un message d’erreur par rapport à la question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Top » par défaut).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Ajoute un espace ou une marge entre le contenu de la question et la bordure gauche de la zone de question.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Définit la largeur de la question par rapport aux autres éléments de l’enquête sur la même ligne. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Choisissez parmi : « En cas de perte de focus » - la valeur est mise à jour lorsque le champ de saisie perd le focus ; « Pendant la saisie » - la valeur est mise à jour en temps réel, au fur et à mesure que les utilisateurs tapent. L’option « Hériter » applique le paramètre au niveau de l’enquête (« En cas de perte de focus » par défaut).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Vous pouvez utiliser n’importe quel service Web comme source de données pour les questions à choix multiples. Pour renseigner les valeurs de choix, entrez l’URL du service fournissant les données.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Opération de comparaison permettant de filtrer la liste déroulante.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Les longs textes dans les options de choix généreront automatiquement des sauts de ligne pour s’adapter au menu déroulant. Désélectionnez cette option si vous souhaitez que les textes soient coupés.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Spécifie le nombre de colonnes que cette question couvre dans la disposition de la grille."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Utilisez l’icône de la baguette magique pour définir quand la valeur de la question est considérée comme valide.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Les erreurs bloquent la progression jusqu’à ce qu’elles soient résolues. Les avertissements mettent en évidence les problèmes mais permettent de continuer. Les notes informatives offrent un contexte supplémentaire ou des indications neutres. Lorsque vous utilisez des avertissements ou des notes d’information, nous vous recommandons d’activer la validation immédiate : « Enquête » → « Validation » → « Exécuter la validation » → « Après qu’une réponse a changé »."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Définit la largeur de la zone de signature affichée et l’image résultante.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Définit la hauteur de la zone de signature affichée et de l’image résultante.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Sélectionnez cette option si vous souhaitez que la zone de signature occupe tout l’espace disponible dans la zone de question tout en conservant le format d’image 3 :2 par défaut. Lorsque des valeurs de largeur et de hauteur personnalisées sont définies, le paramètre conserve les proportions de ces dimensions."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Spécifie la hauteur d’affichage des images téléchargées dans l’aperçu et la hauteur réelle des images prises avec l’appareil photo. En mode de téléchargement d’un seul fichier, la hauteur d’affichage est limitée par la zone de prévisualisation ; En mode de téléchargement de plusieurs fichiers, il est limité par la zone des vignettes.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Spécifie la largeur d’affichage des images téléchargées dans l’aperçu et la largeur réelle des images prises avec l’appareil photo. En mode de téléchargement de fichier unique, la largeur d’affichage est limitée par la zone de prévisualisation ; En mode de téléchargement de plusieurs fichiers, il est limité par la zone des vignettes.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Affiche des aperçus miniatures pour les fichiers téléchargés lorsque cela est possible. Désélectionnez si vous souhaitez afficher les icônes de fichier à la place."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "L’option « Auto » détermine automatiquement le mode d’affichage approprié - Image, Vidéo ou YouTube - en fonction de l’URL source fournie."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Remplace les valeurs de hauteur minimale et maximale.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Remplace les valeurs de largeur minimale et maximale.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "« Valeur » sert d’ID d’élément utilisé dans les règles conditionnelles ; « Texte » s’affiche aux répondants.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Choisissez entre « Image » et « Vidéo » pour définir le mode de contenu du sélecteur de médias. Si « Image » est sélectionné, assurez-vous que toutes les options fournies sont des fichiers image dans les formats suivants : JPEG, GIF, PNG, APNG, SVG, BMP, ICO. De même, si « Vidéo » est sélectionné, assurez-vous que toutes les options sont des liens directs vers des fichiers vidéo dans les formats suivants : MP4, MOV, WMV, FLV, AVI, MKV. Veuillez noter que les liens YouTube ne sont pas pris en charge pour les options vidéo."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Ce paramètre redimensionne uniquement le champ de saisie et n’affecte pas la largeur de la zone de question. Pour limiter la longueur de saisie acceptée, allez dans « Validation » → « Limite maximale de caractères »."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Définit le nombre de lignes affichées dans le champ de saisie. Si l’entrée occupe plus de lignes, la barre de défilement apparaîtra."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Sélectionnez cette option si vous souhaitez empêcher les personnes interrogées de remplir votre sondage.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Définit l’emplacement de la barre de progression. La valeur « Auto » affiche la barre de progression au-dessus ou en dessous de l’en-tête de l’enquête."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "ID de colonne qui n’est pas visible par les personnes interrogées.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Lorsque cette option est activée pour une colonne, une personne interrogée doit fournir une réponse unique pour chaque question de cette colonne.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Définit le nombre de lignes affichées dans le champ de saisie. Si l’entrée occupe plus de lignes, la barre de défilement apparaîtra.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui détermine la visibilité des colonnes.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule de la colonne.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Lorsque cette option est sélectionnée, une colonne individuelle est créée pour chaque option de choix.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Organise les options de choix dans une mise en page à plusieurs colonnes. Lorsqu’elle est définie sur 0, les options sont affichées sur une seule ligne. Lorsqu’elle est définie sur -1, la valeur réelle est héritée de la propriété « Nombre de colonnes imbriquées » de la matrice parente."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Le nombre le plus bas que les utilisateurs peuvent sélectionner.",
      // "The highest number that users can select."
      max: "Le nombre le plus élevé que les utilisateurs peuvent sélectionner.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Intervalle entre les valeurs d’échelle sélectionnables. Par exemple, une étape de 5 permettra aux utilisateurs de sélectionner 0, 5, 10, etc.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Distance minimale entre les curseurs qu’un utilisateur peut définir.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Distance maximale entre les curseurs qu’un utilisateur peut définir.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Spécifie le nombre d’étiquettes d’échelle à générer. Une valeur de -1 signifie que le nombre est calculé automatiquement en fonction de la valeur minimale et de la valeur maximale.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Utilisez « {0} » comme espace réservé pour la valeur réelle.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Vous permet de définir des libellés personnalisés à des valeurs spécifiques et éventuellement de leur attribuer le texte correspondant (par exemple, 0 = « Médiocre », 100 = « Excellent »).",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Utilisez « {0} » comme espace réservé pour la valeur réelle.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Permet aux utilisateurs de passer d’un pouce sur l’autre.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Affiche un bouton qui efface la valeur du curseur sélectionnée et la définit sur undefined.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Définit la valeur minimale du curseur de manière dynamique à l’aide d’une expression. Prend en charge les calculs de base (par exemple, '{q1_id} + {q2_id}'), la logique booléenne (par exemple, '{age} > 60'), et des fonctions telles que 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Définit la valeur maximale du curseur de manière dynamique à l’aide d’une expression. Prend en charge les calculs de base (par exemple, '{q1_id} + {q2_id}'), la logique booléenne (par exemple, '{age} > 60'), et des fonctions telles que 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Rend ce choix exclusif. Lorsqu’il est sélectionné par un utilisateur, il désélectionne automatiquement toutes les autres options de la question.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Rend les cases à cocher de cette colonne exclusives. Lorsqu’il est sélectionné par un utilisateur, il décoche automatiquement toutes les autres cases de la même ligne."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Indiquez si les lettres majuscules et minuscules de l’expression régulière doivent être traitées comme équivalentes.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Choisissez parmi : « Statique » - définit une largeur fixe ; « Responsive » - permet à l’enquête d’occuper toute la largeur de l’écran ; « Auto » - s’applique à l’un ou l’autre des deux en fonction des types de questions utilisés.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Attribuez une valeur de cookie unique à votre sondage. Le cookie sera installé dans le navigateur d’un répondant à la fin de l’enquête afin d’éviter les soumissions répétitives d’enquêtes.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Collez un lien d’image (aucune limite de taille) ou cliquez sur l’icône de dossier pour parcourir un fichier à partir de votre ordinateur (jusqu’à 64 Ko).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Définit la largeur d’un logo en unités CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Définit une hauteur de logo en unités CSS (px, %, in, pt, etc.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Choisissez parmi : « Aucun » - l’image conserve sa taille d’origine ; « Contenir » - l’image est redimensionnée pour s’adapter tout en conservant son rapport hauteur/largeur ; « Couverture » - l’image remplit toute la boîte tout en conservant son rapport hauteur/largeur ; « Remplir » - l’image est étirée pour remplir la boîte sans conserver son rapport hauteur/largeur.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Indiquez si vous souhaitez que le sondage passe automatiquement à la page suivante une fois qu’une personne interrogée a répondu à toutes les questions de la page actuelle. Cette fonctionnalité ne s’applique pas si la dernière question de la page est ouverte ou permet plusieurs réponses.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Sélectionnez cette option si vous souhaitez que l’enquête se termine automatiquement une fois qu’une personne interrogée a répondu à toutes les questions.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Définit la visibilité des boutons de navigation sur une page.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Définit l’emplacement des boutons de navigation sur une page.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Activez la page d’aperçu avec toutes les questions ou les questions auxquelles on a répondu uniquement.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "S’applique à toutes les questions de l’enquête. Ce paramètre peut être remplacé par des règles d’alignement des titres aux niveaux inférieurs : panneau, page ou question. Un paramètre de niveau inférieur remplacera ceux d’un niveau supérieur.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Symbole ou séquence de symboles indiquant qu’une réponse est requise.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Entrez un chiffre ou une lettre avec laquelle vous souhaitez commencer la numérotation.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à la question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Sélectionnez cette option si vous souhaitez que le premier champ de saisie de chaque page soit prêt pour la saisie de texte.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Conserve l’ordre d’origine des questions ou les rend aléatoires. L’effet de ce paramètre n’est visible que dans l’onglet Aperçu.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Pour les questions de saisie de texte uniquement.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Pour les commentaires sur les questions seulement.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Définit le nombre de lignes affichées dans les zones de texte pour les commentaires de question. Si l’entrée occupe plus de lignes, la barre de défilement apparaît.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Indiquez si vous souhaitez que les commentaires de question et les questions de texte long augmentent automatiquement en hauteur en fonction de la longueur du texte saisi.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Pour les questions, les commentaires et les questions de texte long uniquement.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Les variables personnalisées servent de variables intermédiaires ou auxiliaires utilisées dans les calculs de formulaire. Ils prennent les données des répondants comme valeurs sources. Chaque variable personnalisée a un nom unique et une expression sur laquelle elle est basée.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Sélectionnez cette option si vous souhaitez que la valeur calculée de l’expression soit enregistrée avec les résultats de l’enquête.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Un déclencheur est un événement ou une condition qui est basé sur une expression. Une fois que l’expression est évaluée à « true », un déclencheur déclenche une action. Une telle action peut éventuellement avoir une question cible qu’elle affecte.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Choisissez d’effacer ou non les valeurs pour les questions masquées par la logique conditionnelle et quand le faire.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Choisissez parmi : « En cas de perte de focus » - la valeur est mise à jour lorsque le champ de saisie perd le focus ; « Pendant la saisie » - la valeur est mise à jour en temps réel, au fur et à mesure que les utilisateurs tapent.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "La valeur de gauche sert d’ID de colonne utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "La valeur de gauche sert d’ID de ligne utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Visible uniquement si au moins une colonne affiche des valeurs totales définies avec « Méthode d’agrégation » ou « Expression de la valeur totale ».",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à une cellule dont l’entrée n’est pas valide. L’option « Hériter » applique le paramètre de la propriété « Alignement du message d’erreur ».",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Définit l’emplacement des messages d’erreur pour les questions imbriquées dans les sections de détails. L’option « Hériter » applique le paramètre de la propriété « Alignement du message d’erreur ».",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Lorsque la propriété « Empêcher les réponses en double » est activée, un répondant qui tente de soumettre une entrée en double recevra le message d’erreur suivant.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Permet de calculer des valeurs totales en fonction d’une expression. L’expression peut inclure des calculs de base ('{q1_id} + {q2_id}'), des expressions booléennes ('{age} > 60') et des fonctions ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Si la colonne spécifiée contient des valeurs identiques, le sondage renvoie l’erreur « Valeur de clé non unique ».",
    // "Type a subtitle."
    description: "Saisissez un sous-titre.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Choisissez une langue pour commencer à créer votre sondage. Pour ajouter une traduction, passez à une nouvelle langue et traduisez le texte original ici ou dans l’onglet Traductions.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Définit l’emplacement d’une section de détails par rapport à une ligne. Choisissez parmi : « Aucun » - aucune extension n’est ajoutée ; « Sous la ligne » - un développement de ligne est placé sous chaque ligne de la matrice ; « Sous la ligne, afficher un seul développement de ligne » - un développement est affiché sous une seule ligne, les développements de ligne restants sont réduits.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Choisissez parmi : « Aucun » - l’image conserve sa taille d’origine ; « Contenir » - l’image est redimensionnée pour s’adapter tout en conservant son rapport hauteur/largeur ; « Couverture » - l’image remplit toute la boîte tout en conservant son rapport hauteur/largeur ; « Remplir » - l’image est étirée pour remplir la boîte sans conserver son rapport hauteur/largeur.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Augmente progressivement la hauteur du champ de saisie au fur et à mesure de la saisie des données. Remplace le paramètre « Hauteur du champ de saisie (en lignes) ».",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "L’option « Hériter » applique un paramètre au niveau de l’enquête (« Activé » par défaut).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Intervalle de temps en secondes après lequel l’enquête passe automatiquement à la page « Merci ». Lorsqu’il est défini sur 0, compte le temps passé sur l’enquête.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Intervalle de temps en secondes après lequel l’enquête passe automatiquement à la page suivante. Masque le bouton de navigation « Précédent ». Lorsqu’il est défini sur 0, compte le temps passé sur la page actuelle.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Activez cette option pour déclencher la validation lorsqu’un utilisateur se concentre sur un champ de saisie vide, puis le quitte sans apporter de modifications.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Un ID de page qui n’est pas visible par les personnes interrogées.",
      // "Type a page subtitle."
      description: "Tapez un sous-titre de page.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Une légende affichée sur un bouton de navigation dans la barre de progression ou la table des matières (TOC). Si vous laissez ce champ vide, le bouton de navigation utilisera le titre ou le nom de la page. Pour activer la barre de progression ou la table des matières, allez dans « Sondage » → « Navigation ».",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Intervalle de temps en secondes après lequel l’enquête passe automatiquement à la page suivante.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine la visibilité de la page.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule de la page.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "S’applique à toutes les questions de cette page. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour des questions ou des panneaux individuels. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Top » par défaut).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Définit une largeur cohérente pour les titres de questions lorsqu’ils sont alignés à gauche de leurs zones de questions. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à la question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Top » par défaut).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Conserve l’ordre d’origine des questions ou les rend aléatoires. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Original » par défaut). L’effet de ce paramètre n’est visible que dans l’onglet Aperçu.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Définit la visibilité des boutons de navigation sur la page. L’option « Hériter » applique le paramètre au niveau de l’enquête, qui est par défaut « Visible ».",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Ce tableau vous permet de configurer chaque colonne de la grille de la page. Il définit automatiquement le pourcentage de largeur de chaque colonne en fonction du nombre maximal d’éléments dans une rangée. Pour personnaliser la disposition de la grille, ajustez manuellement ces valeurs et définissez la largeur du titre pour toutes les questions de chaque colonne."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Définit l’emplacement d’un minuteur sur une page.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Choisissez parmi : « Verrouillé » - les utilisateurs ne peuvent pas développer ou réduire les panneaux ; « Réduire tout » - tous les panneaux commencent dans un état réduit ; « Développer tout » - tous les panneaux commencent dans un état développé ; « Premier développé » - seul le premier panneau est initialement développé.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Entrez un nom de propriété partagée dans le tableau d’objets qui contient les URL de fichier image ou vidéo que vous souhaitez afficher dans la liste de choix.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "La valeur de gauche sert d’ID d’élément utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Saisissez un titre convivial à afficher.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Garantit que les utilisateurs ne répondront pas à l’enquête tant que les fichiers n’auront pas été téléchargés.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Un identificateur de jointure est une clé personnalisée que vous pouvez attribuer à plusieurs questions pour les lier entre elles et synchroniser leurs valeurs. Ces valeurs seront fusionnées en un seul tableau ou objet et stockées dans les résultats de l’enquête à l’aide de la clé comme nom de propriété.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Valeur affichée dans les questions HTML et dans les titres et descriptions dynamiques des éléments de l’enquête lorsque la valeur de la question est vide.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Dans les types de questions à sélection unique et multiple, chaque option de choix a un ID et une valeur d’affichage. Lorsqu’il est sélectionné, ce paramètre affiche une valeur d’affichage au lieu d’une valeur d’ID dans les questions HTML et les titres et descriptions dynamiques des éléments d’enquête.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Choisissez d’effacer ou non les valeurs de question masquées par la logique conditionnelle et quand le faire. L’option « Hériter » applique le paramètre au niveau de l’enquête (« À la fin de l’enquête » par défaut).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Choisissez parmi : « Tous » - copie toutes les options de choix de la question sélectionnée ; « Sélectionné » - copie dynamiquement uniquement les options de choix sélectionnées ; « Non sélectionné » - copie dynamiquement uniquement les options de choix non sélectionnées. Les options « Aucun » et « Autre » sont copiées par défaut si elles sont activées dans la question source.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Dans les types de questions à sélection unique et à sélection multiple, chaque option de choix a un ID et une valeur d’affichage. Ce paramètre spécifie la question de matrice, de colonne ou de panneau qui doit fournir les ID.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Dans les types de questions à sélection unique et à sélection multiple, chaque option de choix a un ID et une valeur d’affichage. Ce paramètre spécifie la question de matrice, de colonne ou de panneau qui doit fournir les textes d’affichage.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Sélectionnez cette option pour permettre aux personnes interrogées d’ajouter leurs propres choix si l’option souhaitée n’est pas disponible dans la liste déroulante. Les choix personnalisés ne seront stockés que temporairement pour la durée de la session de navigation en cours.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Lorsque cette option est sélectionnée, les utilisateurs peuvent inclure des entrées supplémentaires dans une zone de commentaire distincte.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Affiche chaque option de choix spécial (« Aucun », « Autre », « Tout sélectionner ») sur une nouvelle ligne, même en cas d’utilisation d’une mise en page à plusieurs colonnes.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Spécifiez l’emplacement dans le jeu de données de service où se trouve le tableau cible d’objets. Laissez vide si l’URL pointe déjà vers le tableau.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Entrez un nom de propriété uniforme dans le tableau d’objets qui contient les valeurs que vous souhaitez afficher dans la liste de choix.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Sélectionnez cette option pour permettre au service de renvoyer une réponse ou un tableau vide.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine la visibilité de toutes les options de choix.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "La valeur de gauche sert d’ID d’élément utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "« Auto » sélectionne entre les modes « Boutons » et « Menu déroulant » en fonction de la largeur disponible. Lorsque la largeur est insuffisante pour afficher les boutons, la question affiche une liste déroulante."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Vous permet de connecter des questions qui produisent des résultats dans différents formats. Lorsque ces questions sont liées entre elles à l’aide d’un identificateur de jointure, cette propriété partagée stocke les valeurs de question sélectionnées.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Sélectionnez cette option si vous souhaitez mettre à jour le contenu du menu déroulant pour qu’il corresponde à la requête de recherche qu’un utilisateur saisit dans le champ de saisie.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Une valeur à enregistrer dans les résultats de l’enquête lorsque les répondants donnent une réponse positive.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Une valeur à enregistrer dans les résultats de l’enquête lorsque les personnes interrogées donnent une réponse négative.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Il n’est pas recommandé de désactiver cette option, car elle remplace l’image d’aperçu et empêche l’utilisateur de comprendre si les fichiers ont été téléchargés.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Déclenche une invite vous demandant de confirmer la suppression du fichier.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Activez cette option pour classer uniquement les choix sélectionnés. Les utilisateurs feront glisser les éléments sélectionnés de la liste de choix pour les classer dans la zone de classement.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Entrez une liste de choix qui seront suggérés au répondant lors de la saisie.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Le paramètre ne redimensionne que les champs de saisie et n’affecte pas la largeur de la zone de question.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Définit une largeur cohérente pour toutes les étiquettes d’article. Accepte les valeurs CSS (px, %, in, pt, etc.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Sélectionnez le mode d’alignement de la valeur d’entrée dans le champ. Le paramètre par défaut « Auto » aligne la valeur d’entrée à droite si le masquage monétaire ou numérique est appliqué et à gauche si ce n’est pas le cas.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Sert de substitut lorsque l’image ne peut pas être affichée sur l’appareil d’un utilisateur et à des fins d’accessibilité.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Définit la couleur de l’emoji sélectionné lorsque le type d’icône d’évaluation est défini sur « Smileys ». Choisissez entre : « Par défaut » - l’emoji sélectionné apparaît dans la couleur par défaut de l’enquête ; « Échelle » - l’emoji sélectionné hérite de la couleur de l’échelle d’évaluation.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "ID d’expression qui n’est pas visible par les personnes interrogées.",
      // "Type an expression subtitle."
      description: "Saisissez un sous-titre d’expression.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Une expression peut inclure des calculs de base ('{q1_id} + {q2_id}'), des conditions ('{age} > 60') et des fonctions ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Sélectionnez cette option pour stocker la valeur de l’option « Autre » en tant que propriété distincte dans les résultats de l’enquête.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Utilisez {0} comme espace réservé pour la valeur réelle.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Reportez-vous à la description de l’attribut [accept](https://www.w3schools.com/tags/att_input_accept.asp) pour plus d’informations.",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Organise les options de choix dans une mise en page à plusieurs colonnes. Lorsqu’elle est définie sur 0, les options sont affichées sur une seule ligne. S’applique uniquement aux colonnes dont l’option « Type d’entrée de cellule » est définie sur Groupe de boutons radio ou Cases à cocher.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Sélectionnez le type de données que le navigateur de l’utilisateur peut récupérer. Ces données proviennent soit des valeurs passées saisies par l’utilisateur, soit des valeurs préconfigurées, le cas échéant, qui ont été enregistrées par l’utilisateur pour l’autocomplétion.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "S’applique lorsque le « Type de source » est « Fichiers locaux » ou lorsque l’appareil photo n’est pas disponible",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "S’applique lorsque le « Type de source » est « Appareil photo ».",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "S’applique lorsque le « Type de source » est « Fichiers locaux ou appareil photo ».",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Organise les options de choix dans une disposition à plusieurs colonnes. Lorsqu’elle est définie sur 0, les options sont affichées sur une seule ligne.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Sélectionnez cette option si vous souhaitez stocker la valeur de la question à l’aide d’un masque appliqué dans les résultats de l’enquête."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Le modèle peut contenir des littéraux de chaîne et les espaces réservés suivants : '9' - pour un chiffre ; 'a' - pour une lettre majuscule ou minuscule ; '#' - pour un chiffre ou une lettre majuscule ou minuscule. Utilisez la barre oblique inverse '\\' pour échapper un caractère."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Le modèle peut contenir des caractères de séparation et les espaces réservés suivants :<br>'m' - Numéro du mois.<br>'mm' - Numéro du mois, avec zéro non significatif pour les valeurs à un chiffre. <br>'d' - Jour du mois. <br>'dd' - Jour du mois, avec zéro non significatif pour les valeurs à un chiffre. <br>'yy' - Les deux derniers chiffres de l’année. <br>'yyyy' - Année à quatre chiffres. <br>'H' - Heures au format 24 heures. <br>'HH' - Heures au format 24 heures, avec zéro non significatif pour les valeurs à un chiffre. <br>'h' - Heures au format 12 heures. <br>'hh' - Heures au format 12 heures, avec zéro non significatif pour les valeurs à un chiffre. <br>'MM' - Procès-verbaux. <br>'ss' - Secondes. <br>'TT' - Période d’horloge de 12 heures en majuscules (AM/PM). <br>'tt' - Période d’horloge de 12 heures en minuscules (AM/PM)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Symbole utilisé pour séparer la partie fractionnaire de la partie entière d’un nombre affiché.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Symbole utilisé pour séparer les chiffres d’un grand nombre en groupes de trois.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Limite le nombre de chiffres à conserver après la virgule décimale pour un nombre affiché."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Un ou plusieurs symboles à afficher avant la valeur.",
      // "One or several symbols to be displayed after the value."
      suffix: "Un ou plusieurs symboles à afficher après la valeur."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Ce paramètre s’applique uniquement aux questions en dehors d’un panneau.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Définit une couleur supplémentaire qui met en évidence les éléments clés de l’enquête.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Ajuste la transparence des panneaux et des zones de question par rapport à l’arrière-plan de l’enquête.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Ajuste la transparence des éléments d’entrée par rapport à l’arrière-plan de l’enquête.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Définit le rayon d’angle de tous les éléments rectangulaires. Activez le mode avancé si vous souhaitez définir des valeurs de rayon d’angle individuelles pour les éléments de saisie ou les panneaux et les zones de question.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Définit la couleur d’arrière-plan principale de l’enquête."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "L’option « Identique au conteneur » ajuste automatiquement la largeur de la zone de contenu de l’en-tête pour s’adapter à l’élément HTML dans lequel l’enquête est placée.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Largeur de la zone d’en-tête contenant le titre et la description de l’enquête, mesurée en pixels.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Lorsque cette option est activée, la partie supérieure de l’enquête se superpose au bas de l’en-tête.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Lorsqu’elle est définie sur 0, la hauteur est calculée automatiquement pour s’adapter au contenu de l’en-tête."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "L’option « Identique au conteneur » ajuste automatiquement la largeur de la zone de la barre de progression pour s’adapter à l’élément HTML dans lequel l’enquête est placée.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Utilisé lorsque la « mise en page de l’enquête » est définie sur « Champ de saisie unique par page ». Dans cette disposition, la matrice est divisée de sorte que chaque champ de saisie apparaisse sur une page distincte. Utilisez l’espace réservé {rowIndex} pour insérer la numérotation automatique, {rowTitle} ou {rowName} pour référencer le titre ou l’ID de la ligne, et {row.columnid} pour inclure la valeur d’une colonne de matrice spécifique."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "Titre",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Laissez vide, si même texte que \"Variable de stockage\""
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Autoriser la sélection multiple",
    // [Auto-translated] "Show image and video captions"
    showLabel: "Afficher les légendes des images et des vidéos",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Permuter l’ordre de Oui et Non",
    // [Auto-translated] "Value"
    value: "Valeur",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Alignement des tabulations",
    // [Auto-translated] "File source type"
    sourceType: "Type de source de fichier",
    // [Auto-translated] "Fit to container"
    fitToContainer: "S’adapte au conteneur",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Définir l’expression de valeur",
    // "Description"
    description: "Description", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Ajustement du logo",
    // [Auto-translated] "Pages"
    pages: "Pages", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Questions", // Auto-generated string
    // "Triggers"
    triggers: "Déclencheurs",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Variables personnalisées",
    // [Auto-translated] "Survey id"
    surveyId: "ID du sondage", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "ID de publication du sondage", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Le sondage montre l'enregistrement des données", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "Alignement de la description de la question",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Type de barre de progression", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Afficher la table des matières (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Alignement de la table des matières",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Modèle de titre de question", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Mode largeur du relevé",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Afficher les informations sur la marque", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Utiliser des valeurs d’affichage dans des textes dynamiques",
    // "Visible if"
    visibleIf: "Visible si ", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Expression de valeur par défaut",
    // [Auto-translated] "Required if"
    requiredIf: "Obligatoire si", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Réinitialiser la valeur si",
    // [Auto-translated] "Set value if"
    setValueIf: "Définir la valeur si",
    // "Validation rules"
    validators: "Validateurs",
    // [Auto-translated] "Bindings"
    bindings: "Liaisons", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Rendre en tant que", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "Joindre des documents originaux", // Auto-generated string
    // "Choices"
    choices: "Choix",
    // "Choices by url"
    choicesByUrl: "Définir les choix par API", // Auto-generated string
    // "Currency"
    currency: "Devise", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Indication de cellule", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Total de décimales maximale", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Total de décimales minimales", // Auto-generated string
    // "Columns"
    columns: "Colonnes", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Détails de l'élément", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Autoriser les actions adaptatives", // Auto-generated string
    // [Auto-translated] "Default row value"
    defaultRowValue: "Valeur de ligne par défaut", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Développer automatiquement les détails d’une nouvelle ligne",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Choix de chargement paresseux activé", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Choix de taille de page de chargement paresseux", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Composant du champ de saisie", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Composant de l'élément", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Max", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Expression de valeur minimale", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Expression de valeur maximale", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Intervalle", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Articles à suggérer automatiquement",
    // "Input field width (in characters)"
    inputSize: "Nombre maximum de caractères",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Largeur de l’étiquette de l’article",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Alignement des valeurs d’entrée",
    // [Auto-translated] "Elements"
    elements: "Éléments", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Contenu", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Titre de la navigation", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Description de la navigation", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Appuyez longuement", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Développer le champ de saisie de manière dynamique",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Activer la poignée de redimensionnement",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Accepter le retour à la ligne", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Mode d’affichage",
    // [Auto-translated] "Rate type"
    rateType: "Type de notation", // Auto-generated string
    // "Label"
    label: "Intitulé", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "Mode de contenu",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "Ajustement de l’image et de la vignette",
    // [Auto-translated] "Alt text"
    altText: "Texte de remplacement",
    // [Auto-translated] "Height"
    height: "Hauteur", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Hauteur sur les smartphones",
    // [Auto-translated] "Pen color"
    penColor: "Couleur du stylo", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "Couleur d’arrière-plan",
    // [Auto-translated] "Template elements"
    templateElements: "Modèle des éléments", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Opérateur", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Est variable", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "Exécuter l’expression", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Afficher la légende", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Nom de l’icône", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Taille de l’icône", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Précision", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Zone de poignée de déplacement de la matrice", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Image d’arrière-plan",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Ajustement de l’image d’arrière-plan", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Pièce jointe de l’image d’arrière-plan", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Opacité de l’arrière-plan", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Autoriser le classement sélectif",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Alignement de la zone de classement",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Texte pour indiquer si toutes les options sont sélectionnées",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Texte d’espace réservé pour la zone de classement",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Autoriser l’accès à la caméra", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Mode couleur de l’icône d’évaluation",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Palette de couleurs des smileys",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Copier la valeur d’affichage", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Portée de poteau",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Largeur de la zone de la barre de progression",
    // [Auto-translated] "Theme name"
    themeName: "Nom du thème"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Mode avancé",
    // "Page"
    pageTitle: "Police du titre de la page",
    // "Question box"
    questionTitle: "Police du titre de la question",
    // "Input element"
    editorPanel: "Champs de réponse",
    // [Auto-translated] "Lines"
    lines: "Lignes",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Faire défaut",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Au survol",
    // [Auto-translated] "Selected"
    primaryLightColor: "Sélectionné",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Couleur d’arrière-plan",
    // "Corner radius"
    cornerRadius: "Rayon d’angle",
    // [Auto-translated] "Default background"
    backcolor: "Arrière-plan par défaut",
    // [Auto-translated] "Hover background"
    hovercolor: "Arrière-plan du survol",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Décoration de bordure",
    // [Auto-translated] "Font color"
    fontColor: "Couleur de la police",
    // [Auto-translated] "Background color"
    backgroundColor: "Couleur de fond",
    // [Auto-translated] "Default color"
    primaryForecolor: "Couleur par défaut",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Couleur Désactivée",
    // [Auto-translated] "Font"
    font: "Police",
    // [Auto-translated] "Darker"
    borderDefault: "Sombre",
    // [Auto-translated] "Lighter"
    borderLight: "Clair",
    // [Auto-translated] "Font family"
    fontFamily: "Famille de polices",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Régulier",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Lourd",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Semi-gras",
    // [Auto-translated] "Bold"
    fontWeightBold: "Audacieux",
    // [Auto-translated] "Color"
    color: "Couleur",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Couleur de l’espace réservé",
    // [Auto-translated] "Size"
    size: "Taille",
    // [Auto-translated] "Opacity"
    opacity: "Opacité",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Ajouter un effet d’ombre",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Flou",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Propagation",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Extérieur",
    // [Auto-translated] "Inner"
    boxShadowInner: "Intérieur",
    names: {
      // [Auto-translated] "Default"
      default: "Par défaut",
      // [Auto-translated] "Sharp"
      sharp: "Tranchant",
      // [Auto-translated] "Borderless"
      borderless: "Sans bord",
      // [Auto-translated] "Flat"
      flat: "Plat",
      // [Auto-translated] "Plain"
      plain: "Plaine",
      // [Auto-translated] "Double Border"
      doubleborder: "Double bordure",
      // [Auto-translated] "Layered"
      layered: "Superposé",
      // [Auto-translated] "Solid"
      solid: "Solide",
      // [Auto-translated] "3D"
      threedimensional: "3D",
      // [Auto-translated] "Contrast"
      contrast: "Contraste"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Bleu Sarcelle",
      // [Auto-translated] "Blue"
      blue: "Bleu",
      // [Auto-translated] "Purple"
      purple: "Pourpre",
      // [Auto-translated] "Orchid"
      orchid: "Orchidée",
      // [Auto-translated] "Tulip"
      tulip: "Tulipe",
      // [Auto-translated] "Brown"
      brown: "Marron",
      // [Auto-translated] "Green"
      green: "Vert",
      // [Auto-translated] "Gray"
      gray: "Gris"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Arrière-plan de surface",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primaire",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Secondaire",
    // [Auto-translated] "Surface"
    surfaceScale: "Surface",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Éléments d’interface utilisateur",
    // [Auto-translated] "Font"
    fontScale: "Police",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Créateur d’enquête 2020",
      // [Auto-translated] "Light"
      "default-light": "Lumière",
      // [Auto-translated] "Dark"
      "default-dark": "Sombre",
      // [Auto-translated] "Contrast"
      "default-contrast": "Contraste"
    }
  }
};

setupLocale({ localeCode: "fr", strings: frenchTranslation });