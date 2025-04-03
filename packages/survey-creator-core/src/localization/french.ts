import { setupLocale } from "survey-creator-core";

var frenchTranslation = {
  // survey templates
  survey: {
    edit: "Éditer",
    externalHelpLink: "Regardez et apprenez à créer des sondages",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Déposer votre question ici.",
    addLogicItem: "Créez une règle pour personnaliser le déroulement du sondage.",
    copy: "Copier",
    duplicate: "Dupliquer",
    addToToolbox: "Ajouter à la boîte à outils",
    deletePanel: "Supprimer le panneau",
    deleteQuestion: "Supprimer la question",
    convertTo: "Convertir en",
    drag: "Élément Drag",
  },
  // Creator tabs
  tabs: {
    preview: "Tester le sondage",
    theme: "Thèmes",
    translation: "Traduction",
    designer: "Éditeur de sondage",
    json: "Éditeur JSON",
    logic: "Condition"
  },
  // Question types
  qt: {
    default: "Par défaut",
    checkbox: "Cases à cocher",
    comment: "Commentaire",
    imagepicker: "Choix d'image",
    ranking: "Classement",
    image: "Image",
    dropdown: "Liste déroulante",
    tagbox: "Liste déroulante (choix multiples)",
    file: "Fichier",
    html: "Code HTML",
    matrix: "Matrice (choix unique)",
    matrixdropdown: "Matrice (choix multiples)",
    matrixdynamic: "Matrice (lignes dynamiques)",
    multipletext: "Champ multilignes",
    panel: "Section",
    paneldynamic: "Section (dynamique)",
    radiogroup: "Choix unique (radio)",
    rating: "Évaluation",
    text: "Champ de saisie",
    boolean: "Vrai/Faux (Booléen)",
    expression: "Titre (lecture seule)",
    signaturepad: "Signature",
    buttongroup: "Groupe de boutons"
  },
  toolboxCategories: {
    general: "Général",
    choice: "Questions à choix",
    text: "Questions de saisie libre",
    containers: "Conteneurs",
    matrix: "Questions matricielles",
    misc: "Divers"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Valeur par défaut ({0})",
    survey: "Sondage",
    settings: "Configuration du sondage",
    settingsTooltip: "Ouvrir paramètres",
    surveySettings: "Paramètres du sondage",
    surveySettingsTooltip: "Paramètres de l’enquête",
    themeSettings: "Paramètres du thème",
    themeSettingsTooltip: "Paramètres du thème",
    creatorSettingTitle: "Paramètres du créateur",
    showPanel: "Afficher le panneau",
    hidePanel: "Masquer le panneau",
    prevSelected: "Sélectionnez précédent",
    nextSelected: "Sélectionnez Suivant",
    prevFocus: "Mise au point précédente",
    nextFocus: "Focus suivant",
    surveyTypeName: "Sondage",
    pageTypeName: "Page",
    panelTypeName: "Panneau",
    questionTypeName: "Question",
    columnTypeName: "Colonne",
    addNewPage: "Ajouter une page",
    moveRight: "Défiler à droite",
    moveLeft: "Défiler à gauche",
    deletePage: "Supprimer une page",
    editPage: "Éditer une page",
    edit: "Éditer",
    newPageName: "page",
    newQuestionName: "question",
    newPanelName: "panneau",
    newTextItemName: "texte",
    defaultV2Theme: "Défaut",
    modernTheme: "Moderne",
    defaultTheme: "Valeur par défaut (héritée)",
    testSurveyAgain: "Tester à nouveau le sondage",
    testSurveyWidth: "Largeur du sondage : ",
    navigateToMsg: "Vous deviez naviguer vers",
    saveSurvey: "Sauvegarder le sondage",
    saveSurveyTooltip: "Enregistrer le sondage",
    saveTheme: "Enregistrer le thème",
    saveThemeTooltip: "Enregistrer le thème",
    jsonHideErrors: "Masquer les erreurs",
    jsonShowErrors: "Afficher les erreurs",
    undo: "Annuler",
    redo: "Rétablir",
    undoTooltip: "Annuler la dernière modification",
    redoTooltip: "Rétablir la modification",
    expandTooltip: "Développer",
    collapseTooltip: "Effondrement",
    expandAllTooltip: "Tout afficher",
    collapseAllTooltip: "Réduire tout",
    zoomInTooltip: "Zoom avant",
    zoom100Tooltip: "Zoom à 100%",
    zoomOutTooltip: "Zoom arrière",
    lockQuestionsTooltip: "Verrouiller l’état d’expansion/réduction pour les questions",
    showMoreChoices: "Afficher plus",
    showLessChoices: "Afficher moins",
    copy: "Copier",
    cut: "Couper",
    paste: "Coller",
    copyTooltip: "Copier la sélection dans le presse-papiers",
    cutTooltip: "Couper la sélection dans le presse-papiers",
    pasteTooltip: "Coller à partir du presse-papiers",
    options: "Options",
    generateValidJSON: "Générer un JSON valide",
    generateReadableJSON: "Générer un JSON lisible",
    toolbox: "Boîte à outils",
    "property-grid": "Propriétés",
    toolboxFilteredTextPlaceholder: "Tapez pour rechercher...",
    toolboxNoResultsFound: "Aucun résultat trouvé",
    propertyGridFilteredTextPlaceholder: "Tapez pour rechercher...",
    propertyGridNoResultsFound: "Aucun résultat trouvé",
    propertyGridPlaceholderTitle: "Commencez à configurer votre formulaire",
    propertyGridPlaceholderDescription: "Cliquez sur n’importe quelle icône de catégorie pour explorer les paramètres de l’enquête. Des paramètres supplémentaires seront disponibles une fois que vous aurez ajouté un élément de topographie à l’aire de conception.",
    correctJSON: "Merci de corriger le JSON",
    surveyResults: "Résultat du sondage : ",
    surveyResultsTable: "Format tableau",
    surveyResultsJson: "Format JSON",
    resultsTitle: "Titre de la question",
    resultsName: "Nom de la question",
    resultsValue: "Valeur de la réponse",
    resultsDisplayValue: "Valeur affichée",
    modified: "Modifié",
    saving: "Sauvegarde en cours",
    saved: "Sauvegardé",
    propertyEditorError: "Erreur",
    saveError: "Erreur! Le contenu de l'éditeur n'a pas été sauvegardé.",
    translationPropertyGridTitle: "Paramètres de langue",
    themePropertyGridTitle: "Paramètres du thème",
    addLanguageTooltip: "Ajouter une langue",
    translationLanguages: "Traduction",
    translationDeleteLanguage: "Êtes-vous certain de vouloir supprimer toutes les chaînes pour cette langue ?",
    translationAddLanguage: "Choisir langue à traduire",
    translationShowAllStrings: "Afficher tous les termes",
    translationShowUsedStringsOnly: "Termes utilisés uniquement",
    translationShowAllPages: "Afficher toutes les pages",
    translationNoStrings: "Aucun terme à traduire. Veuillez modifier le filtre.",
    translationExportToSCVButton: "Exporter en CSV",
    translationImportFromSCVButton: "Importer d'un CSV",
    translateUsigAI: "Traduire automatiquement tout",
    translateUsigAIFrom: "Traduction: ",
    translationDialogTitle: "Chaînes non traduites",
    translationMergeLocaleWithDefault: "Fusionner {0} avec langue par défaut",
    translationPlaceHolder: "Traduction...",
    translationSource: "Source: ",
    translationTarget: "Cible: ",
    translationYouTubeNotSupported: "Les liens YouTube ne sont pas pris en charge.",
    themeExportButton: "Exportation",
    themeImportButton: "Importation",
    surveyJsonExportButton: "Exportation",
    surveyJsonImportButton: "Importation",
    surveyJsonCopyButton: "Copier dans le Presse-papiers",
    themeResetButton: "Réinitialiser les paramètres de thème par défaut",
    themeResetConfirmation: "Voulez-vous vraiment réinitialiser le thème ? Toutes vos personnalisations seront perdues.",
    themeResetConfirmationOk: "Oui, réinitialisez le thème",
    bold: "Gras",
    italic: "Italique",
    underline: "Souligné",
    addNewQuestion: "Ajouter Question",
    selectPage: "Sélectionner une page...",
    carryForwardChoicesCopied: "Les choix sont copiés à partir de",
    choicesLoadedFromWebText: "Les choix sont chargés à partir d’un service Web.",
    choicesLoadedFromWebLinkText: "Accédez aux paramètres",
    choicesLoadedFromWebPreviewTitle: "Aperçu des options de choix chargées",
    htmlPlaceHolder: "Le contenu HTML se trouvera ici.",
    panelPlaceHolder: "Déposez une question de la boîte à outils ici.",
    surveyPlaceHolder: "Le sondage est vide. Faites glisser un élément de la boîte à outils ou cliquez sur le bouton ci-dessous.",
    pagePlaceHolder: "La page est vide. Faites glisser un élément de la boîte à outils ou cliquez sur le bouton ci-dessous.",
    imagePlaceHolder: "Glissez et déposez une image ici ou cliquez sur le bouton ci-dessous pour choisir une image à télécharger",
    surveyPlaceHolderMobile: "Cliquez sur le bouton « Ajouter une question » ci-dessous pour commencer à créer votre formulaire.",
    surveyPlaceholderTitle: "Votre formulaire est vide",
    surveyPlaceholderTitleMobile: "Votre formulaire est vide",
    surveyPlaceholderDescription: "Faites glisser un élément depuis la boîte à outils ou cliquez sur le bouton ci-dessous.",
    surveyPlaceholderDescriptionMobile: "Faites glisser un élément depuis la boîte à outils ou cliquez sur le bouton ci-dessous.",
    previewPlaceholderTitle: "Pas d’aperçu",
    previewPlaceholderTitleMobile: "Pas d’aperçu",
    previewPlaceholderDescription: "L’enquête ne contient aucun élément visible.",
    previewPlaceholderDescriptionMobile: "L’enquête ne contient aucun élément visible.",
    translationsPlaceholderTitle: "Pas de chaînes à traduire",
    translationsPlaceholderTitleMobile: "Pas de chaînes à traduire",
    translationsPlaceholderDescription: "Ajoutez des éléments à votre formulaire ou modifiez le filtre de chaînes dans la barre d’outils.",
    translationsPlaceholderDescriptionMobile: "Ajoutez des éléments à votre formulaire ou modifiez le filtre de chaînes dans la barre d’outils.",
    pagePlaceHolderMobile: "Cliquez sur le bouton « Ajouter une question » ci-dessous pour ajouter un nouvel élément à la page.",
    panelPlaceHolderMobile: "Cliquez sur le bouton « Ajouter une question » ci-dessous pour ajouter un nouvel élément au panneau.",
    imagePlaceHolderMobile: "Cliquez sur le bouton ci-dessous et choisissez une image à télécharger",
    imageChooseImage: "Choisir une image",
    addNewTypeQuestion: "Ajouter {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Article ",
    selectFile: "Sélectionner un fichier",
    removeFile: "Supprimer le fichier",
    lg: {
      addNewItem: "Ajouter une nouvelle règle",
      empty_tab: "Créez une règle pour personnaliser le déroulement du sondage.",
      logicPlaceholderTitle: "Pas de règles logiques",
      logicPlaceholderTitleMobile: "Pas de règles logiques",
      logicPlaceholderDescription: "Créez une règle pour personnaliser le flux de l’enquête.",
      logicPlaceholderDescriptionMobile: "Créez une règle pour personnaliser le flux de l’enquête.",
      page_visibilityName: "Afficher/masquer la page",
      page_enableName: "Activer (désactiver) la page",
      page_requireName: "Rendre la page obligatoire",
      panel_visibilityName: "Afficher/masquer le panneau",
      panel_enableName: "Activer/désactiver le panneau",
      panel_requireName: "Rendre la page obligatoire",
      question_visibilityName: "Afficher/masquer la question",
      question_enableName: "Activer/désactiver la question",
      question_requireName: "Rendre la question obligatoire",
      question_resetValueName: "Réinitialiser la valeur de la question",
      question_setValueName: "Définir la valeur de la question",
      column_visibilityName: "Afficher/masquer la colonne",
      column_enableName: "Activer/désactiver la colonne",
      column_requireName: "Rendre la colonne obligatoire",
      column_resetValueName: "Réinitialiser la valeur de la colonne",
      column_setValueName: "Définition de la valeur de colonne",
      trigger_completeName: "Terminer le sondage",
      trigger_setvalueName: "Définir la valeur de la question",
      trigger_copyvalueName: "Copier la valeur de la question",
      trigger_skipName: "Passer à la question",
      trigger_runExpressionName: "Exécuter une expression personnalisée",
      completedHtmlOnConditionName: "Personnaliser le texte de la page de remerciements",
      page_visibilityDescription: "Rendre la page visible lorsque la condition renvoie 'vrai'. Sinon, la rendre invisible.",
      panel_visibilityDescription: "Rendre le panneau visible lorsque la condition renvoie 'vrai'. Sinon, le rendre invisible.",
      panel_enableDescription: "Activer le panneau et tous les éléments qu'il contient lorsque la condition renvoie 'vrai'. Sinon, le laisser désactivé.",
      question_visibilityDescription: "Render la question visible lorsque la condition renvoie 'vrai'. Sinon, la rendre invisible.",
      question_enableDescription: "Activer la question lorsque la condition renvoie 'vrai'. Sinon, la laisser désactivée.",
      question_requireDescription: "La question devient requise lorsque la condition renvoie 'vrai'.",
      trigger_completeDescription: "Lorsque la condition renvoie 'vrai', l'enquête est alors terminée et un utilisateur voit la page de remerciements.",
      trigger_setvalueDescription: "Lorsque les valeurs des questions utilisées dans la condition sont modifiées et que la condition renvoie 'vrai', la valeur est définie à la question sélectionnée.",
      trigger_copyvalueDescription: "Lorsque les valeurs de question, qui sont utilisées dans la condition, sont modifiées et que la condition renvoie 'vrai', la valeur d'une question sélectionnée est copiée dans une autre question sélectionnée.",
      trigger_skipDescription: "Lorsque la condition renvoie 'vrai', l'enquête passe à la question sélectionnée.",
      trigger_runExpressionDescription: "Lorsque la condition renvoie 'vrai', alors la condition personnalisée est exécutée. Vous pouvez éventuellement définir ce résultat de condition dans la question sélectionnée.",
      completedHtmlOnConditionDescription: "Si la condition renvoie 'vrai', le texte par défaut de la page de remerciements est remplacé par celui que vous avez défini.",
      itemExpressionText: "Lorsque la condition: '{0}' renvoie 'vrai':", //{0} - the expression
      itemEmptyExpressionText: "Nouvelle règle",
      page_visibilityText: "Rendre la page {0} visible", //{0} page name
      panel_visibilityText: "Rendre le panneau {0} visible", //{0} panel name
      panel_enableText: "Activer le panneau {0}", //{0} panel name
      question_visibilityText: "Rendre la question {0} visible", //{0} question name
      question_enableText: "Activer la question {0}", //{0} question name
      question_requireText: "Rendre la question {0} obligatoire", //{0} question name
      question_resetValueText: "Réinitialisez la valeur pour la question : {0}", //{0} question name.
      question_setValueText: "Attribuer une valeur : {1} à la question : {0}",
      column_visibilityText: "Rendre visible les {0} de la colonne de questions {1}", //{0} column name, {1} question name
      column_enableText: "Activer la {0} de la colonne de questions {1}", //{0} column name, {1} question name
      column_requireText: "rendre obligatoire la colonne {0} de la question {1}", //{0} column name, {1} question name
      column_resetValueText: "Réinitialiser la valeur de la cellule pour la colonne : {0}", //{0} column name
      column_setValueText: "Affecter la valeur de la cellule : {1} à la colonne : {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Expression dont le résultat sera affecté à la question cible.",
      trigger_completeText: "Le sondage se termine.",
      trigger_setvalueText: "Définir dans la question: {0} valeur {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Valeur de la question claire : {0}", //{0} question name
      trigger_copyvalueText: "Copier dans la question: {0} valeur de la question {1}", //{0} and {1} question names
      trigger_skipText: "Dans le sondage, passez à la question {0}", //{0} question name
      trigger_runExpressionText1: "Exécuter l'expression: '{0}'", //{0} the expression
      trigger_runExpressionText2: " et définissez son résultat dans la question: {0}", //{0} question name
      completedHtmlOnConditionText: "Afficher un texte personnalisé pour la page de remerciements.",
      showAllQuestions: "Toutes les questions",
      showAllActionTypes: "Tous les types d’action",
      conditions: "Condition(s)",
      actions: "Action(s)",
      expressionEditorTitle: "Définissez le(s) condition(s)",
      actionsEditorTitle: "Définissez le(s) action(s)",
      deleteAction: "Supprimer l'action",
      addNewAction: "Ajouter une nouvelle action",
      selectedActionCaption: "Sélectionnez une action à ajouter …",
      expressionInvalid: "La condition est vide ou non valide. Merci de corriger.",
      noActionError: "Veuillez ajouter au moins une action.",
      actionInvalid: "Veuillez corriger les problèmes dans vos actions.",
      uncompletedRule_title: "Les règles logiques sont incomplètes",
      uncompletedRule_text: "Vous n’avez pas terminé certaines des règles logiques. Si vous quittez l’onglet maintenant, les modifications seront perdues. Voulez-vous toujours quitter sans sauvegarder ?",
      uncompletedRule_apply: "Oui",
      uncompletedRule_cancel: "Non, je veux compléter les règles"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Nom du panneau",
      title: "Titre du panneau",
      description: "Description du panneau",
      visibleIf: "Rendre le panneau visible si",
      requiredIf: "Rendez le panneau requis si",
      questionOrder: "Ordre des questions au sein du panel",
      page: "Page parent",
      startWithNewLine: "Afficher le panneau sur une nouvelle ligne",
      state: "État de réduction du panneau",
      width: "Largeur du panneau en ligne",
      minWidth: "Largeur minimale du panneau",
      maxWidth: "Largeur maximale du panneau",
      showNumber: "Numéroter ce panneau"
    },
    panellayoutcolumn: {
      effectiveWidth: "Largeur utile, %",
      questionTitleWidth: "Largeur du titre de la question, px"
    },
    paneldynamic: {
      name: "Nom du panneau",
      title: "Titre du panneau",
      description: "Description du panneau",
      visibleIf: "Rendre le panneau visible si",
      requiredIf: "Rendez le panneau requis si",
      page: "Déplacer le panneau vers la page",
      startWithNewLine: "Afficher le panneau sur une nouvelle ligne",
      state: "État de réduction du panneau",
      width: "Largeur du panneau en ligne",
      minWidth: "Largeur minimale du panneau",
      maxWidth: "Largeur maximale du panneau",
      confirmDelete: "Confirmer la suppression de la section",
      templateDescription: "Modèle de description du panneau",
      templateTitle: "Modèle de titre de panneau",
      noEntriesText: "Texte du panneau vide",
      templateTabTitle: "Modèle de titre de tabulation",
      tabTitlePlaceholder: "Espace réservé au titre de l’onglet",
      templateVisibleIf: "Rendre un panneau individuel visible si :",
      showNumber: "Numérotez le panneau",
      titleLocation: "Alignement du titre du panneau",
      descriptionLocation: "Alignement de la description du panneau",
      templateQuestionTitleLocation: "Alignement du titre de la question",
      templateQuestionTitleWidth: "Largeur du titre de la question",
      templateErrorLocation: "Alignement des messages d’erreur",
      newPanelPosition: "Nouvel emplacement du panneau",
      showRangeInProgress: "Afficher la barre de progression",
      keyName: "Éviter les réponses en double à la question suivante"
    },
    question: {
      name: "Nom de la question",
      title: "Titre de la question",
      description: "Description de la question",
      visibleIf: "Rendez la question visible si",
      requiredIf: "Faites en sorte que la question soit obligatoire si",
      page: "Page parent",
      state: "État de réduction de la zone de question",
      showNumber: "Numéroter cette question",
      titleLocation: "Alignement du titre de la question",
      descriptionLocation: "Alignement de la description de la question",
      errorLocation: "Alignement des messages d’erreur",
      indent: "Augmenter le retrait intérieur",
      width: "Largeur de la question en ligne",
      minWidth: "Largeur minimale de la question",
      maxWidth: "Largeur maximale de la question",
      textUpdateMode: "Mettre à jour la valeur du champ de saisie"
    },
    signaturepad: {
      signatureWidth: "Largeur de la zone de signature",
      signatureHeight: "Hauteur de la zone de signature",
      signatureAutoScaleEnabled: "Mise à l’échelle automatique de la zone de signature",
      showPlaceholder: "Afficher l’espace réservé",
      placeholder: "Texte d’espace réservé",
      placeholderReadOnly: "Texte d’espace réservé en lecture seule ou en mode d’aperçu",
      allowClear: "Afficher le bouton Effacer dans la zone de signature",
      penMinWidth: "Largeur minimale du stylo",
      penMaxWidth: "Largeur maximale du stylo",
      penColor: "Couleur du trait"
    },
    comment: {
      rows: "Hauteur du champ de saisie (en lignes)"
    },
    showQuestionNumbers: "Afficher les numéros de questions",
    questionStartIndex: "Index de départ de la question (1, 2 ou 'A', 'a')",
    expression: {
      name: "Nom de l’expression",
      title: "Titre de l’expression",
      description: "Description de l’expression",
      expression: "Expression"
    },
    trigger: {
      expression: "Expression"
    },
    calculatedvalue: {
      expression: "Expression"
    },
    // survey templates
    survey: {
      title: "Titre du questionnaire",
      description: "Description de l’enquête",
      readOnly: "Rendre l’enquête en lecture seule"
    },
    page: {
      name: "Nom de la page",
      title: "Titre",
      description: "Description de la page",
      visibleIf: "Rendre la page visible si",
      requiredIf: "Rendez la page obligatoire si",
      timeLimit: "Limite de temps pour terminer la page (en secondes)",
      questionOrder: "Ordre des questions sur la page"
    },
    matrixdropdowncolumn: {
      name: "Nom de la colonne",
      title: "Titre de la colonne",
      isUnique: "Éviter les réponses en double",
      width: "Largeur de la colonne",
      minWidth: "Largeur minimale de la colonne",
      rows: "Hauteur du champ de saisie (en lignes)",
      visibleIf: "Rendre la colonne visible si",
      requiredIf: "Rendez la colonne obligatoire si",
      showInMultipleColumns: "Chaque option dans une colonne distincte"
    },
    multipletextitem: {
      name: "Nom",
      title: "Titre"
    },
    masksettings: {
      saveMaskedValue: "Enregistrer la valeur masquée dans les résultats de l’enquête"
    },
    patternmask: {
      pattern: "Modèle de valeur"
    },
    datetimemask: {
      min: "Valeur minimale",
      max: "Valeur maximale"
    },
    numericmask: {
      allowNegativeValues: "Autoriser les valeurs négatives",
      thousandsSeparator: "Séparateur de milliers",
      decimalSeparator: "Séparateur décimal",
      precision: "Précision de la valeur",
      min: "Valeur minimale",
      max: "Valeur maximale"
    },
    currencymask: {
      prefix: "Préfixe de devise",
      suffix: "Suffixe de devise"
    },
    imageHeight: "Hauteur de l'image",
    imageWidth: "Largeur de l'image",
    valueName: "Variable de stockage",
    defaultDisplayValue: "Valeur d’affichage par défaut pour les textes dynamiques",
    rateDescriptionLocation: "Alignement des étiquettes",
    size: "Largeur du champ de saisie (en caractères)",
    cellErrorLocation: "Alignement des messages d’erreur de cellule",
    enabled: "Activé",
    disabled: "Handicapé",
    inherit: "Hériter",
    apply: "Appliquer",
    ok: "Ok",
    save: "Enregistrer",
    clear: "Effacer",
    saveTooltip: "Sauvegarder",
    cancel: "Annuler",
    set: "Définir",
    reset: "Réinitialiser",
    change: "Changer",
    refresh: "Rafraîchir",
    close: "Fermer",
    delete: "Supprimer",
    add: "Ajouter",
    addNew: "Ajouter un nouvel élément",
    addItem: "Cliquez pour ajouter un item...",
    removeItem: "Cliquez pour supprimer l’élément...",
    dragItem: "Faire glisser l’élément",
    addOther: "Autre",
    addSelectAll: "Tout sélectionner",
    addNone: "Aucun",
    removeAll: "Tout supprimer",
    edit: "Éditer",
    back: "Quitter sans sauvegarder",
    backTooltip: "Quitter sans sauvegarder",
    saveAndBack: "Sauvegarder et quitter",
    saveAndBackTooltip: "Sauvegarder et quitter",
    doneEditing: "Terminé",
    editChoices: "Editer les choix",
    showChoices: "Afficher les choix",
    move: "Déplacer",
    empty: "<vide>",
    emptyValue: "La valeur est vide",
    fastEntry: "Ajout rapide",
    fastEntryNonUniqueError: "La valeur '{0}' n’est pas unique",
    fastEntryChoicesCountError: "Veuillez limiter le nombre d'éléments de {0} à {1}",
    fastEntryChoicesMinCountError: "Veuillez saisir au moins {0} éléments",
    fastEntryPlaceholder: "Vous pouvez définir les données au format suivant :\nvaleur1|texte\nvaleur2",
    formEntry: "Ajout via formulaire",
    testService: "Tester le service",
    itemSelectorEmpty: "Veuillez sélectionner l’élément",
    conditionActionEmpty: "Veuillez sélectionner l’action",
    conditionSelectQuestion: "Sélectionner une question...",
    conditionSelectPage: "Sélectionner une page...",
    conditionSelectPanel: "Sélectionner un panneau...",
    conditionValueQuestionTitle: "Sélectionner ou saisir la valeur",
    aceEditorHelp: "Appuyer sur Ctrl + espace pour obtenir une aide pour la saisie d'expression",
    aceEditorRowTitle: "Ligne actuelle",
    aceEditorPanelTitle: "Panneau actuel",
    showMore: "Pour plus d'informations, veuillez vous référer à la documentation",
    assistantTitle: "Questions disponibles :",
    cellsEmptyRowsColumns: "Ajoutez au minimum une ligne ou une colonne",
    showPreviewBeforeComplete: "Prévisualiser les réponses avant d'envoyer le sondage",
    overridingPropertyPrefix: "Défini par ",
    resetToDefaultCaption: "Réinitialisation",
    propertyIsEmpty: "Veuillez entrer une valeur",
    propertyIsNoUnique: "Veuillez saisir une valeur unique",
    propertyNameIsNotUnique: "Veuillez saisir une variable unique",
    propertyNameIsIncorrect: "N’utilisez pas de mots réservés : « item », « choice », « panel », « row ».",
    listIsEmpty: "Ajouter un nouvel élément",
    "listIsEmpty@choices": "Aucun choix n’a encore été ajouté",
    "listIsEmpty@columns": "Vous n’avez pas encore de colonnes",
    "listIsEmpty@gridLayoutColumns": "Vous n’avez pas encore de colonnes de mise en page",
    "listIsEmpty@rows": "Vous n’avez pas encore de lignes",
    "listIsEmpty@validators": "Vous n’avez pas encore de règles de validation",
    "listIsEmpty@calculatedValues": "Vous n’avez pas encore de variables personnalisées",
    "listIsEmpty@triggers": "Vous n’avez pas encore de déclencheurs",
    "listIsEmpty@navigateToUrlOnCondition": "Vous n’avez pas encore de liens",
    "listIsEmpty@pages": "Vous n’avez pas encore de pages",
    "addNew@choices": "Ajouter un choix",
    "addNew@columns": "Ajouter une nouvelle colonne",
    "addNew@rows": "Ajouter une nouvelle ligne",
    "addNew@validators": "Ajouter une nouvelle règle",
    "addNew@calculatedValues": "Ajouter une nouvelle variable",
    "addNew@triggers": "Ajouter un nouveau déclencheur",
    "addNew@navigateToUrlOnCondition": "Ajouter une nouvelle URL",
    "addNew@pages": "Ajouter une nouvelle page",
    expressionIsEmpty: "La condition est vide",
    value: "Valeur",
    text: "Texte",
    rowid: "ID Ligne",
    imageLink: "URL de l'image",
    columnEdit: "Éditer la colonne: {0}",
    itemEdit: "Éditer l'item: {0}",
    url: "URL",
    path: "Chemin",
    choicesbyurl: {
      url: "URL du service Web",
      valueName: "Obtenir des valeurs à partir du champ JSON suivant"
    },
    titleName: "Obtenir le texte à afficher à partir du champ JSON suivant",
    imageLinkName: "Obtenir les URL d’image à partir du champ JSON suivant",
    allowEmptyResponse: "Autoriser les réponses vides",
    titlePlaceholder: "Titre de la page",
    surveyTitlePlaceholder: "Saisissez le titre du sondage",
    pageTitlePlaceholder: "Saisissez le titre de la page",
    startPageTitlePlaceholder: "Page d’accueil",
    descriptionPlaceholder: "Entrez une description",
    surveyDescriptionPlaceholder: "Entrez une description pour l'enquête",
    pageDescriptionPlaceholder: "Entrez une description pour la page",
    textWrapEnabled: "Choix d’enveloppes",
    showOtherItem: "Contient choix \"Autre\"",
    otherText: "Texte du choix \"Autre\"",
    showNoneItem: "Contient un choix \"Aucun\"",
    showRefuseItem: "Autoriser l’option Refuser de répondre",
    showDontKnowItem: "Autoriser l’option Ne sait pas",
    noneText: "Texte du choix \"Aucun\"",
    showSelectAllItem: "Contient un choix \"Tout sélectionner\"",
    selectAllText: "Texte du choix \"Tout sélectionner\"",
    choicesMin: "Valeur minimum pour les choix générés automatiquement",
    choicesMax: "Valeur maximum pour les choix générés automatiquement",
    choicesStep: "Écart entre les choix générés automatiquement",
    name: "Variable de stockage",
    title: "Intitulé de la question",
    cellType: "Type de cellule",
    colCount: "Nombre de colonnes",
    choicesOrder: "Sélectionner l'ordre des choix",
    allowCustomChoices: "Autoriser les choix personnalisés",
    visible: "Est visible ?",
    isRequired: "Est obligatoire ?",
    markRequired: "Marquer au besoin",
    removeRequiredMark: "Supprimer la marque requise",
    eachRowRequired: "Réponse obligatoire pour toutes les lignes",
    eachRowUnique: "Éviter les réponses dupliquées dans les lignes",
    requiredErrorText: "Message d'erreur lorsque obligatoire",
    startWithNewLine: "Afficher la question sur une nouvelle ligne",
    rows: "Lignes",
    cols: "Colonnes",
    placeholder: "Placeholder (texte indicatif)",
    showPreview: "Afficher les informations du fichier",
    storeDataAsText: "Stocker le contenu du fichier dans le résultat JSON sous forme de texte",
    maxSize: "Taille maximum du fichier en octets",
    rowCount: "Nombre de lignes",
    columnLayout: "Inverser les lignes et les colonnes",
    addRowButtonLocation: "Emplacement bouton \"Ajouter une ligne\"",
    transposeData: "Transposer des lignes en colonnes",
    addRowText: "Texte bouton \"Ajouter une ligne\"",
    removeRowText: "Texte bouton \"Supprimer une ligne\"",
    rateMin: "Note minimum",
    rateMax: "Note maximum",
    rateStep: "Intervalle des notes",
    minRateDescription: "Description note minimum",
    maxRateDescription: "Description note maximum",
    inputType: "Type de champ",
    optionsCaption: "Texte par défaut",
    defaultValue: "Valeur par défaut",
    cellsDefaultRow: "Texte de cellule par défaut",
    surveyEditorTitle: "Éditer les paramètres du sondage",
    qEditorTitle: "Éditer la question: {0}",
    maxLength: "Longueur maximum",
    buildExpression: "Construire",
    editExpression: "Editer",
    and: "et",
    or: "ou",
    remove: "Enlever",
    addCondition: "Ajouter une condition",
    emptyLogicPopupMessage: "Sélectionnez une question pour commencer à configurer les conditions.",
    if: "Si",
    then: "alors",
    setToName: "Question ciblée",
    fromName: "Copier les réponses de la question :",
    gotoName: "Passer à la question :",
    ruleIsNotSet: "La règle est incorrecte",
    includeIntoResult: "Inclure dans les résultats du sondage",
    showTitle: "Afficher/masquer le titre",
    expandCollapseTitle: "Développer/réduire le titre",
    locale: "Langue par défaut",
    simulator: "Choisir l'appareil",
    landscapeOrientation: "Paysage",
    portraitOrientation: "Passer en orientation portrait",
    clearInvisibleValues: "Effacer les valeurs invisibles",
    cookieName: "Nom du cookie (pour empêcher de compléter 2 fois le sondage localement)",
    partialSendEnabled: "Envoyer les résultats au changement de page",
    storeOthersAsComment: "Sauvegarder la valeur \"Autres\" dans un champ séparé",
    showPageTitles: "Afficher les titres de pages",
    showPageNumbers: "Afficher les numéros de pages",
    pagePrevText: "Texte bouton page précédente",
    pageNextText: "Texte bouton page suivante",
    completeText: "Texte bouton terminer",
    previewText: "Aperçu du texte du bouton Réponses",
    editText: "Modifier le texte du bouton de réponse",
    startSurveyText: "Texte bouton commencer",
    showNavigationButtons: "Afficher les boutons de navigation (navigation par défaut)",
    navigationButtonsLocation: "Alignement des boutons de navigation",
    showPrevButton: "Afficher le bouton précédent (l'utilisateur pourra retourner sur la page précédente)",
    firstPageIsStartPage: "La première page du sondage est une page de démarrage.",
    showCompletePage: "Afficher la page de fin une fois le sondage terminé",
    autoAdvanceEnabled: "Aller à la page suivante automatiquement pour toutes les questions",
    autoAdvanceAllowComplete: "Répondez automatiquement à l’enquête",
    showProgressBar: "Afficher la barre de progression",
    progressBarLocation: "Alignement de la barre de progression",
    questionTitleLocation: "Emplacement du titre de la question",
    questionTitleWidth: "Largeur du titre de la question",
    requiredMark: "Symbole(s) des questions obligatoires",
    questionTitleTemplate: "Emplacement du symbole obligatoire'",
    questionErrorLocation: "Emplacement de l'erreur",
    autoFocusFirstQuestion: "Focus sur la première question au changement de page",
    questionOrder: "Ordre des éléments sur la page",
    timeLimit: "Temps maximum pour terminer le sondage",
    timeLimitPerPage: "Temps maximum pour terminer une page",
    showTimer: "Utiliser une minuterie",
    timerLocation: "Afficher le panneau chronomètre",
    timerInfoMode: "Mode d'affichage du panneau chronomètre",
    renderMode: "Mode de rendu",
    allowAddPanel: "Autoriser l'ajout de sections",
    allowRemovePanel: "Autoriser la suppression de sections",
    addPanelText: "Ajouter le texte du bouton de la section",
    removePanelText: "Supprimer la section texte",
    isSinglePage: "Afficher tous les éléments sur une seule page",
    html: "Balisage HTML",
    setValue: "Réponse",
    dataFormat: "Format de l’image",
    allowAddRows: "Autoriser l’ajout de lignes",
    allowRemoveRows: "Autoriser la suppression de lignes",
    allowRowReorder: "Autoriser le glisser-déposer de lignes",
    responsiveImageSizeHelp: "Ne s’applique pas si vous spécifiez la largeur ou la hauteur exacte de l’image.",
    minImageWidth: "Largeur minimale de l’image",
    maxImageWidth: "Largeur maximale de l’image",
    minImageHeight: "Hauteur minimale de l’image",
    maxImageHeight: "Hauteur maximale de l’image",
    minValue: "Valeur minimum",
    maxValue: "Valeur maximum",
    caseInsensitive: "Insensible à la casse",
    minLength: "Longueur minimum",
    allowDigits: "Autoriser les chiffres",
    minCount: "Nombre minimum",
    maxCount: "Nombre maximum",
    regex: "Expression régulière (RegEx)",
    surveyvalidator: {
      text: "Message d'erreur",
      expression: "Condition à respecter"
    },
    totalText: "Texte pour le total",
    totalType: "Type de total",
    totalExpression: "Calcul total",
    totalDisplayStyle: "Format d'affichage",
    totalCurrency: "Monnaie",
    totalFormat: "Format du total",
    logo: "Logo (URL ou chaîne codée en base64)",
    questionsOnPageMode: "Structure du sondage",
    maxTextLength: "Longueur maximale de réponse (en caractères)",
    maxCommentLength: "Longueur maximale des commentaires (en caractères)",
    commentAreaRows: "Hauteur de la zone de commentaires (en lignes)",
    autoGrowComment: "Développer automatiquement la zone de commentaires si nécessaire",
    allowResizeComment: "Autoriser les utilisateurs à redimensionner les zones de texte",
    textUpdateMode: "Mettre à jour la valeur de la question textuelle",
    maskType: "Type de masque de saisie",
    autoFocusFirstError: "Renvoyer vers la première question ayant une erreur",
    checkErrorsMode: "Exécuter la validation",
    validateVisitedEmptyFields: "Valider les champs vides en cas de perte de focus",
    navigateToUrl: "Accédez à l'URL",
    navigateToUrlOnCondition: "URL dynamique",
    completedBeforeHtml: "Message (HTML) à afficher si l’utilisateur a déjà rempli cette enquête",
    completedHtml: "Page de fin (format HTML)",
    completedHtmlOnCondition: "Page de fin conditionnées (format HTML)",
    loadingHtml: "Message (HTML) à afficher pendant le chargement du sondage",
    commentText: "Texte de la zone de commentaires",
    autocomplete: "Type de saisie semi-automatique",
    labelTrue: "Texte du bouton « Vrai »",
    labelFalse: "Texte du bouton « Faux »",
    allowClear: "Afficher le bouton Effacer",
    searchMode: "Mode de recherche",
    displayStyle: "Style d’affichage de la valeur",
    format: "Chaîne de caractères formatée",
    maximumFractionDigits: "Nombre maximal de décimales",
    minimumFractionDigits: "Nombre minimum de décimales",
    useGrouping: "Afficher les séparateurs de groupes",
    allowMultiple: "Autoriser plusieurs fichiers",
    allowImagesPreview: "Afficher la prévisualisation des images",
    acceptedTypes: "Types de fichiers acceptés",
    waitForUpload: "Attendez la fin du téléchargement",
    needConfirmRemoveFile: "Confirmer la suppression du fichier",
    detailPanelMode: "Emplacement du panneau de détails",
    minRowCount: "Nombre minimal de lignes",
    maxRowCount: "Nombre maximal de lignes",
    confirmDelete: "Confirmer la suppression de lignes",
    confirmDeleteText: "Message de confirmation",
    panelCount: "Nombre initial de sections",
    minPanelCount: "Nombre minimal de sections",
    maxPanelCount: "Nombre maximal de sections",
    panelsState: "Déploiement de la section",
    prevPanelText: "Info-bulle du bouton Section précédente",
    nextPanelText: "Info-bulle du bouton Section suivante",
    removePanelButtonLocation: "Emplacement du bouton Supprimer la Section",
    hideIfRowsEmpty: "Masquer la question s’il n’y a pas de lignes",
    hideColumnsIfEmpty: "Masquer les colonnes s’il n’y a pas de lignes",
    rateValues: "Valeurs des notes personnalisées",
    rateCount: "Nombre notes sur le barème",
    autoGenerate: "Comment définir les valeurs possibles ?",
    hideIfChoicesEmpty: "Masquer la question si elle ne contient pas de choix",
    minWidth: "Largeur minimale (en valeurs acceptées par CSS)",
    maxWidth: "Largeur maximale (en valeurs acceptées par CSS)",
    width: "Largeur (en valeurs acceptées par CSS)",
    showHeader: "Afficher les en-têtes de colonne",
    horizontalScroll: "Afficher la barre de défilement horizontale",
    columnMinWidth: "Largeur minimale de colonne (en valeurs acceptées par CSS)",
    rowTitleWidth: "Largeur de l’en-tête de ligne (en valeurs acceptées par CSS)",
    valueTrue: "Valeur à sauvegarder pour « Vrai »",
    valueFalse: "Valeur à sauvegarder pour « Faux »",
    minErrorText: "Message d’erreur « La valeur est inférieure au minimum »",
    maxErrorText: "Message d’erreur « La valeur dépasse le maximum »",
    otherErrorText: "Message d’erreur « Commentaire vide »",
    keyDuplicationError: "Message d’erreur « Valeur de clé non unique »",
    minSelectedChoices: "Nombre minimum de choix sélectionnables",
    maxSelectedChoices: "Nombre maximal de choix sélectionnables",
    logoWidth: "Largeur du logo (en valeurs acceptées par CSS)",
    logoHeight: "Hauteur du logo (en valeurs acceptées par CSS)",
    readOnly: "Lecture seule",
    enableIf: "Modifiable si",
    noRowsText: "Message « Aucune ligne »",
    separateSpecialChoices: "Afficher séparément les choix spéciaux (Aucun, Autre, Sélectionner tout)",
    choicesFromQuestion: "Copier les choix à partir de la question",
    choicesFromQuestionMode: "Quels choix copier ?",
    choiceValuesFromQuestion: "Utilisez les valeurs de la question de la matrice, de la colonne ou du panneau suivant comme ID de choix",
    choiceTextsFromQuestion: "Utilisez les valeurs de la question matricielle, de la colonne ou du panneau suivant comme textes de choix",
    progressBarShowPageTitles: "Afficher les titres des pages dans la barre de progression",
    progressBarShowPageNumbers: "Afficher les numéros de page dans la barre de progression",
    showCommentArea: "Afficher la zone de commentaire",
    commentPlaceholder: "Espace réservé pour la zone de commentaires",
    displayRateDescriptionsAsExtremeItems: "Afficher la description des notes sur les valeurs des extrémités",
    rowOrder: "Ordre des lignes",
    columnsLayout: "Disposition des colonnes",
    columnColCount: "Nombre de colonnes imbriquées",
    correctAnswer: "Réponse correcte",
    defaultPanelValue: "Valeurs par défaut",
    cells: "Texte des cellules",
    fileInputPlaceholder: "Sélectionnez un fichier ou collez un lien de fichier...",
    keyName: "Colonne clé",
    itemvalue: {
      visibleIf: "Rendre l’option visible si",
      enableIf: "Rendez l’option sélectionnable si"
    },
    "itemvalue@rows": {
      visibleIf: "Rendre la ligne visible si",
      enableIf: "Rendez la ligne modifiable si"
    },
    imageitemvalue: {
      text: "Texte de remplacement"
    },
    logoPosition: "Position du logo",
    addLogo: "Ajouter un logo...",
    changeLogo: "Changer le logo...",
    logoPositions: {
      none: "Retirer le logo",
      left: "Gauche",
      right: "Droite",
      top: "Au dessus",
      bottom: "En dessous"
    },
    previewMode: "Mode de prévisualisation",
    gridLayoutEnabled: "Activer la disposition en grille",
    gridLayoutColumns: "Colonnes de disposition de grille",
    maskSettings: "Paramètres du masque",
    detailErrorLocation: "Alignement du message d’erreur d’extension de ligne",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Disposition du panneau"
      },
      general: "Général",
      fileOptions: "Options",
      html: "Éditeur HTML",
      columns: "Colonnes",
      rows: "Lignes",
      choices: "Choix",
      items: "Éléments",
      visibleIf: "Visible si",
      enableIf: "Activé si",
      requiredIf: "Obligatoire si",
      rateValues: "Barème",
      choicesByUrl: "Choix depuis API web",
      matrixChoices: "Choix par défaut",
      multipleTextItems: "Champs de saisie multiples",
      numbering: "Numérotation",
      validators: "Validateurs",
      navigation: "Navigation",
      question: "Question",
      pages: "Pages",
      timer: "Chronomètre/Quiz",
      calculatedValues: "Valeurs calculées",
      triggers: "Déclencheurs",
      templateTitle: "Titre du modèle",
      totals: "Totaux",
      logic: "Conditions",
      mask: "Paramètres du masque de saisie",
      layout: {
        panel: "Disposition",
        question: "Disposition",
        base: "Disposition"
      },
      data: "Données",
      validation: "Validateurs",
      cells: "Cellules",
      showOnCompleted: "Sondage terminé",
      logo: "Logo dans le titre du sondage",
      slider: "Curseur",
      expression: "Condition",
      questionSettings: "Paramètres de la question",
      header: "En-tête",
      background: "Arrière-plan",
      appearance: "Apparence",
      accentColors: "Couleurs d’accentuation",
      surfaceBackground: "Arrière-plan de surface",
      scaling: "Détartrage",
      others: "Autres"
    },
    editProperty: "Éditer la propriété \"{0}\"",
    items: "[ Éléments: {0} ]",
    choicesVisibleIf: "Les choix sont visibles si",
    choicesEnableIf: "Les choix sont sélectionnables si",
    columnsEnableIf: "Les colonnes sont visibles si",
    rowsEnableIf: "Les lignes sont visibles si",
    innerIndent: "Ajouter des tabulations internes",
    copyDefaultValueFromLastEntry: "Utiliser les réponses de la dernière entrée par défaut",
    enterNewValue: "Veuillez saisir la valeur.",
    noquestions: "Il n'y a aucune question dans le sondage.",
    createtrigger: "Veuillez créer un déclencheur",
    titleKeyboardAdornerTip: "Appuyez sur le bouton Entrée pour modifier",
    keyboardAdornerTip: "Appuyez sur le bouton Entrée pour modifier l’élément, appuyez sur le bouton Supprimer pour supprimer l’élément, appuyez sur alt plus flèche vers le haut ou flèche vers le bas pour déplacer l’élément",
    triggerOn: "Quand ",
    triggerMakePagesVisible: "Rendre les pages visibles :",
    triggerMakeQuestionsVisible: "Rendre les questions visibles :",
    triggerCompleteText: "Terminer le sondage si la condition est remplie.",
    triggerNotSet: "Le déclencheur n'est pas défini",
    triggerRunIf: "Exécuter si",
    triggerSetToName: "Changer la valeur de : ",
    triggerFromName: "Copier la valeur de : ",
    triggerRunExpression: "Exécuter cette expression :",
    triggerSetValue: "à : ",
    triggerGotoName: "Aller à la question :",
    triggerIsVariable: "Ne pas enregistrer le résultat dans les résultats du sondage.",
    triggerRunExpressionEmpty: "Veuillez entrer une condition valide",
    emptyExpressionPlaceHolder: "Saisir la condition ici...",
    noFile: "Aucun fichier sélectionné",
    clearIfInvisible: "Effacer la valeur si la question devient masquée",
    valuePropertyName: "Propriété du nom de la valeur",
    searchEnabled: "Activer la recherche",
    hideSelectedItems: "Masquer les éléments sélectionnés",
    closeOnSelect: "Fermer la liste déroulante après la sélection",
    verticalAlign: "Alignement vertical",
    alternateRows: "Lignes alternatives",
    columnsVisibleIf: "Les colonnes sont visibles si",
    rowsVisibleIf: "Les lignes sont visibles si",
    otherPlaceholder: "Espace réservé pour la zone de commentaires",
    filePlaceholder: "Texte de l’espace réservé au fichier",
    photoPlaceholder: "Texte de l’espace réservé à la photo",
    fileOrPhotoPlaceholder: "Texte de l’espace réservé au fichier ou à la photo",
    rateType: "Type de notation",
    url_placeholder: "Ex. : https://api.example.com/books",
    path_placeholder: "Ex. : categories.fiction",
    questionStartIndex_placeholder: "Ex. : a)",
    width_placeholder: "Ex. : 6po",
    minWidth_placeholder: "Ex. : 600px",
    maxWidth_placeholder: "Ex. : 50 %",
    imageHeight_placeholder: "auto",
    imageWidth_placeholder: "auto",
    itemTitleWidth_placeholder: "Ex. : 100px",
    theme: {
      themeName: "Thème",
      isPanelless: "Apparence de la question",
      editorPanel: "Arrière-plan et rayon d’angle",
      questionPanel: "Arrière-plan et rayon d’angle",
      primaryColor: "Couleur d’accentuation",
      panelBackgroundTransparency: "Opacité de l’arrière-plan du panneau",
      questionBackgroundTransparency: "Opacité de l’arrière-plan de la question",
      fontSize: "Taille de la police",
      scale: "Écaille",
      cornerRadius: "Rayon d’angle",
      advancedMode: "Mode avancé",
      pageTitle: "Police de titre",
      pageDescription: "Police de description",
      questionTitle: "Police de titre",
      questionDescription: "Police de description",
      editorFont: "Police",
      backgroundOpacity: "Opacité",
      "--sjs-font-family": "Famille de polices",
      "--sjs-general-backcolor-dim": "Couleur de fond",
      "--sjs-primary-backcolor": "Fond d’accent",
      "--sjs-primary-forecolor": "Premier plan accentué",
      "--sjs-special-red": "Messages d’erreur",
      "--sjs-shadow-small": "Effets d’ombre",
      "--sjs-shadow-inner": "Effets d’ombre",
      "--sjs-border-default": "Couleurs"
    },
    "header@header": {
      headerView: "Vue",
      logoPosition: "Position du logo",
      surveyTitle: "Police de titre de l’enquête",
      surveyDescription: "Police de description de l’enquête",
      headerTitle: "Police de titre de l’enquête",
      headerDescription: "Police de description de l’enquête",
      inheritWidthFrom: "Largeur de la zone de contenu",
      textAreaWidth: "Largeur du texte",
      backgroundColorSwitch: "Couleur de fond",
      backgroundImage: "Image d’arrière-plan",
      backgroundImageOpacity: "Opacité",
      overlapEnabled: "Chevauchement",
      logoPositionX: "Position du logo",
      titlePositionX: "Position du titre",
      descriptionPositionX: "Description du poste"
    }
  },
  // Property values
  pv: {
    "true": "vrai",
    "false": "faux",
    file: "Fichiers locaux",
    camera: "Caméra",
    "file-camera": "Fichiers locaux ou caméra",
    inherit: "Hérité",
    show: "Afficher",
    hide: "Masquer",
    default: "Par défaut",
    initial: "Initial",
    random: "Aléatoire",
    collapsed: "Réduite",
    expanded: "Déployée",
    none: "Aucun",
    asc: "Ascendant",
    desc: "Descendant",
    indeterminate: "Indeterminé",
    selected: "Sélectionné",
    unselected: "Non sélectionné",
    decimal: "Décimal",
    currency: "Devise",
    percent: "Pour cent",
    firstExpanded: "Déployer la première section",
    off: "Désactiver",
    list: "liste",
    carousel: "Carrousel",
    tab: "Onglets",
    progressTop: "Barre de progression en haut",
    progressBottom: "Barre de progression en bas",
    progressTopBottom: "Barre de progression en haut et en bas",
    horizontal: "Horizontal",
    vertical: "Vertical",
    top: "Haut",
    bottom: "Bas",
    topBottom: "Haut et bas",
    both: "Les deux",
    left: "Gauche",
    right: "Droite",
    center: "Centre",
    leftRight: "Gauche et droite",
    middle: "Milieu",
    color: "Couleur",
    date: "Date",
    datetime: "Date et heure",
    "datetime-local": "dateheure-local",
    email: "Email",
    month: "Mois",
    number: "Nombre",
    password: "Mot de passe",
    range: "Curseur",
    tel: "Numéro de téléphone",
    text: "texte",
    time: "Heure",
    url: "URL",
    week: "Semaine",
    hidden: "Masqué",
    edit: "Éditer",
    display: "Affichage",
    contain: "Contenir",
    cover: "Couvrir",
    fill: "Remplir",
    next: "Prochain",
    last: "Dernier",
    onComplete: "Quand terminé",
    onHidden: "Quand masqué",
    onHiddenContainer: "Lorsque la question ou sa section/page devient masquée",
    clearInvisibleValues: {
      none: "Jamais"
    },
    clearIfInvisible: {
      none: "Jamais"
    },
    inputType: {
      color: "Couleur",
      date: "Date",
      "datetime-local": "Date et heure",
      email: "Messagerie électronique",
      month: "Mois",
      number: "Nombre",
      password: "Mot de passe",
      range: "Curseur",
      tel: "Numéro de téléphone",
      text: "Texte",
      time: "Heure",
      url: "URL",
      week: "Semaine"
    },
    autocomplete: {
      name: "Nom complet",
      "honorific-prefix": "Préfixe",
      "given-name": "Prénom",
      "additional-name": "Deuxième prénom",
      "family-name": "Nom",
      "honorific-suffix": "Suffixe",
      nickname: "Surnom",
      "organization-title": "Titre du poste",
      username: "Nom d’utilisateur",
      "new-password": "Nouveau mot de passe",
      "current-password": "Mot de passe actuel",
      organization: "Nom de l’organisation",
      "street-address": "Adresse complète",
      "address-line1": "Ligne d’adresse 1",
      "address-line2": "Ligne d’adresse 2",
      "address-line3": "Ligne d’adresse 3",
      "address-level4": "Adresse de niveau 4",
      "address-level3": "Adresse de niveau 3",
      "address-level2": "Adresse de niveau 2",
      "address-level1": "Adresse de niveau 1",
      country: "Code du pays",
      "country-name": "Nom du pays",
      "postal-code": "Code postal",
      "cc-name": "Nom du titulaire de la carte",
      "cc-given-name": "Prénom du titulaire de la carte",
      "cc-additional-name": "Deuxième prénom du titulaire de la carte",
      "cc-family-name": "Nom de famille du titulaire de la carte",
      "cc-number": "Numéro de carte de crédit",
      "cc-exp": "Échéance",
      "cc-exp-month": "Mois d’expiration",
      "cc-exp-year": "Année d’expiration",
      "cc-csc": "Code de sécurité de la carte",
      "cc-type": "Type de carte de crédit",
      "transaction-currency": "Devise de transaction",
      "transaction-amount": "Montant de la transaction",
      language: "Langue préférée",
      bday: "Anniversaire",
      "bday-day": "Jour d’anniversaire",
      "bday-month": "Mois de l’anniversaire",
      "bday-year": "Année d’anniversaire",
      sex: "Genre",
      url: "URL du site Web",
      photo: "Photo de profil",
      tel: "Numéro de téléphone",
      "tel-country-code": "Indicatif du pays pour le téléphone",
      "tel-national": "Numéro de téléphone national",
      "tel-area-code": "Indicatif",
      "tel-local": "Numéro de téléphone local",
      "tel-local-prefix": "Préfixe de téléphone local",
      "tel-local-suffix": "Suffixe de téléphone local",
      "tel-extension": "Extension téléphonique",
      email: "Adresse courriel",
      impp: "Protocole de messagerie instantanée"
    },
    maskType: {
      none: "Aucun",
      pattern: "Modèle",
      numeric: "Numérique",
      datetime: "Date et heure",
      currency: "Monnaie"
    },
    inputTextAlignment: {
      auto: "Auto",
      left: "Gauche",
      right: "Droite"
    },
    all: "Tous",
    page: "Page",
    survey: "Sondage",
    onNextPage: "Lors du passage à la page suivante",
    onValueChanged: "Après la modification d’une réponse",
    onValueChanging: "Avant qu’une réponse ne soit modifiée",
    questionsOnPageMode: {
      standard: "Structure d’origine",
      singlePage: "Afficher toutes les questions sur une seule page",
      questionPerPage: "Afficher une seule question par page"
    },
    noPreview: "Pas d’aperçu",
    showAllQuestions: "Afficher toutes les questions",
    showAnsweredQuestions: "Afficher uniquement les questions complétées",
    allQuestions: "Afficher toutes les questions",
    answeredQuestions: "Afficher uniquement les questions répondues",
    pages: "Pages complétées",
    questions: "Questions complétées",
    requiredQuestions: "Questions obligatoires complétées",
    correctQuestions: "Réponses valides",
    buttons: "Pages terminées (bouton UI)",
    underInput: "Sous le champ",
    underTitle: "Sous le titre",
    onBlur: "En quittant le champ",
    onTyping: "Pendant la saisie",
    underRow: "Sous la ligne",
    underRowSingle: "Sous la ligne, une seule section est visible",
    auto: "Auto",
    showNavigationButtons: {
      none: "Masqué"
    },
    timerInfoMode: {
      combined: "Les deux"
    },
    addRowButtonLocation: {
      default: "Dépend de la disposition de la matrice"
    },
    panelsState: {
      default: "Les utilisateurs ne peuvent pas déployer ou réduire les sections",
      collapsed: "Toutes les sections sont réduites",
      expanded: "Toutes les sections sont déployées",
      firstExpanded: "D’abord élargi"
    },
    widthMode: {
      static: "Statique",
      responsive: "Adaptative"
    },
    contentMode: {
      image: "Image",
      video: "Vidéo",
      youtube: "Youtube"
    },
    displayMode: {
      buttons: "Boutons",
      dropdown: "Liste déroulante"
    },
    rateColorMode: {
      default: "Par défaut",
      scale: "Écaille"
    },
    scaleColorMode: {
      monochrome: "Monochrome",
      colored: "Coloré"
    },
    autoGenerate: {
      "true": "Générer",
      "false": "Saisie manuelle"
    },
    rateType: {
      labels: "Labels",
      stars: "Étoiles",
      smileys: "Smileys"
    },
    state: {
      default: "Verrouillé"
    },
    showQuestionNumbers: {
      default: "Numérotation automatique",
      on: "Numérotation automatique",
      onPage: "Réinitialisation sur chaque page",
      onpanel: "Réinitialisation sur chaque panneau",
      onPanel: "Réinitialisation sur chaque panneau",
      recursive: "Numérotation récursive",
      onSurvey: "Continuez tout au long de l’enquête",
      off: "Pas de numérotation"
    },
    descriptionLocation: {
      underTitle: "Sous le titre de la question",
      underInput: "Sous le champ de saisie"
    },
    selectToRankAreasLayout: {
      horizontal: "À côté des choix",
      vertical: "Choix ci-dessus"
    },
    displayStyle: {
      decimal: "Décimal",
      currency: "Monnaie",
      percent: "Pourcentage",
      date: "Date"
    },
    totalDisplayStyle: {
      decimal: "Décimal",
      currency: "Monnaie",
      percent: "Pourcentage",
      date: "Date"
    },
    rowOrder: {
      initial: "Langue source"
    },
    questionOrder: {
      initial: "Langue source"
    },
    progressBarLocation: {
      top: "Retour au début",
      bottom: "Fond",
      topbottom: "Haut et bas",
      aboveheader: "Au-dessus de l’en-tête",
      belowheader: "Sous l’en-tête",
      off: "Caché"
    },
    sum: "Somme",
    count: "Compter",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Contient",
      startsWith: "Commence par"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Couvrir",
      contain: "Contenir",
      fill: "Étirer",
      tile: "Carreau"
    },
    backgroundImageAttachment: {
      fixed: "Fixe",
      scroll: "Faire défiler"
    },
    headerView: {
      basic: "Basique",
      advanced: "Avancé"
    },
    inheritWidthFrom: {
      survey: "Identique à l’enquête",
      container: "Adapter au conteneur"
    },
    backgroundColorSwitch: {
      none: "Aucun",
      accentColor: "Couleur d’accentuation",
      custom: "Coutume"
    },
    colorPalette: {
      light: "Lumière",
      dark: "Sombre"
    },
    isPanelless: {
      "false": "Faire défaut",
      "true": "Sans panneaux"
    },
    progressBarInheritWidthFrom: {
      survey: "Identique à l’enquête",
      container: "Identique au conteneur"
    }
  },
  // Operators
  op: {
    empty: "Est vide",
    notempty: "N'est pas vide",
    equal: "Égal",
    notequal: "N'est pas égal",
    contains: "Contient",
    notcontains: "Ne contient pas",
    anyof: "N'importe quel de",
    allof: "Tous parmi",
    greater: "Supérieur",
    less: "Inférieur",
    greaterorequal: "Supérieur ou égal",
    lessorequal: "Inférieur ou égal",
    and: "Et",
    or: "Ou"
  },
  // Embed window
  ew: {
    angular: "Utiliser la version Angular",
    jquery: "Utiliser la version jQuery",
    knockout: "Utiliser la version Knockout",
    react: "Utiliser la version React",
    vue: "Utiliser la version Vue",
    bootstrap: "Pour le framework Bootstrap",
    modern: "Thème Moderne",
    default: "Thème par défaut",
    orange: "Thème Orange",
    darkblue: "Thème Bleu foncé",
    darkrose: "Thème Rose foncé",
    stone: "Thème Pierre",
    winter: "Thème Hiver",
    winterstone: "Thème Winter-Stone",
    showOnPage: "Afficher le sondage dans une page",
    showInWindow: "Afficher le sondage dans une fenêtre",
    loadFromServer: "Charger le JSON du sondage depuis un serveur",
    titleScript: "Scripts et styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Sélectionner une page pour la tester",
    showInvisibleElements: "Afficher les éléments invisibles",
    hideInvisibleElements: "Masquer les éléments invisibles"
  },
  validators: {
    answercountvalidator: "Total de réponses",
    emailvalidator: "Email",
    expressionvalidator: "Condition",
    numericvalidator: "Numérique",
    regexvalidator: "Expression régulière (RegEx)",
    textvalidator: "Texte"
  },
  triggers: {
    completetrigger: "Terminer le sondage",
    setvaluetrigger: "Définir la valeur",
    copyvaluetrigger: "Copier la valeur",
    skiptrigger: "Sauter à la question",
    runexpressiontrigger: "Exécuter une expression",
    visibletrigger: "Modifier la visibilité"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Ex. : +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Ex. : mm/jj/aaaa"
    },
    currencymask: {
      prefix: "Ex. : $",
      suffix: "Ex. : USD"
    },
    panelbase: {
      questionTitleWidth: "Ex. : 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Ex. : 30 %",
      questionTitleWidth: "Ex. : 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Un ID de panel qui n’est pas visible par les personnes interrogées.",
      description: "Saisissez un sous-titre de panneau.",
      visibleIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui détermine la visibilité du panneau.",
      enableIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule du panneau.",
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse.",
      questionTitleLocation: "S’applique à toutes les questions de ce panneau. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour les questions individuelles. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut).",
      questionTitleWidth: "Définit une largeur cohérente pour les titres de questions lorsqu’ils sont alignés à gauche de leurs zones de questions. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      questionErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à toutes les questions du panneau. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête.",
      questionOrder: "Conserve l’ordre d’origine des questions ou les rend aléatoires. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête.",
      page: "Repositionne le panneau à la fin d’une page sélectionnée.",
      innerIndent: "Ajoute un espace ou une marge entre le contenu du panneau et le bord gauche de la zone du panneau.",
      startWithNewLine: "Désélectionnez cette option pour afficher le panneau sur une seule ligne avec la question ou le panneau précédent. Ce paramètre ne s’applique pas si le panneau est le premier élément de votre formulaire.",
      state: "Choisissez parmi : « Développé » - le panneau s’affiche en entier et peut être réduit ; « Réduit » - le panneau n’affiche que le titre et la description et peut être développé ; « Verrouillé » - le panneau est affiché en entier et ne peut pas être réduit.",
      width: "Définit la largeur du panneau par rapport aux autres éléments de topographie de la même ligne. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      showQuestionNumbers: "Attribue des numéros aux questions imbriquées dans ce panneau.",
      effectiveColSpan: "Spécifie le nombre de colonnes de ce panneau dans la disposition de la grille.",
      gridLayoutColumns: "Ce tableau vous permet de configurer chaque colonne de la grille dans le panneau. Il définit automatiquement le pourcentage de largeur de chaque colonne en fonction du nombre maximal d’éléments dans une rangée. Pour personnaliser la disposition de la grille, ajustez manuellement ces valeurs et définissez la largeur du titre pour toutes les questions de chaque colonne."
    },
    paneldynamic: {
      name: "Un ID de panel qui n’est pas visible par les personnes interrogées.",
      description: "Saisissez un sous-titre de panneau.",
      visibleIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui détermine la visibilité du panneau.",
      enableIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule du panneau.",
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse.",
      templateQuestionTitleLocation: "S’applique à toutes les questions de ce panneau. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour les questions individuelles. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut).",
      templateQuestionTitleWidth: "Définit une largeur cohérente pour les titres de questions lorsqu’ils sont alignés à gauche de leurs zones de question. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      templateErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à une question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut).",
      errorLocation: "Définit l’emplacement d’un message d’erreur par rapport à toutes les questions du panneau. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête.",
      page: "Repositionne le panneau à la fin d’une page sélectionnée.",
      innerIndent: "Ajoute un espace ou une marge entre le contenu du panneau et le bord gauche de la zone du panneau.",
      startWithNewLine: "Désélectionnez cette option pour afficher le panneau sur une seule ligne avec la question ou le panneau précédent. Ce paramètre ne s’applique pas si le panneau est le premier élément de votre formulaire.",
      state: "Choisissez parmi : « Développé » - le panneau s’affiche en entier et peut être réduit ; « Réduit » - le panneau n’affiche que le titre et la description et peut être développé ; « Verrouillé » - le panneau est affiché en entier et ne peut pas être réduit.",
      width: "Définit la largeur du panneau par rapport aux autres éléments de topographie de la même ligne. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      templateTitle: "Saisissez un modèle pour les titres de panneau dynamiques. Utilisez {panelIndex} pour la position générale du panneau et {visiblePanelIndex} pour son ordre parmi les panneaux visibles. Insérez ces espaces réservés dans le motif pour ajouter une numérotation automatique.",
      templateTabTitle: "Saisissez un modèle pour les titres d’onglets. Utilisez {panelIndex} pour la position générale d’un panneau et {visiblePanelIndex} pour son ordre parmi les panneaux visibles. Insérez ces espaces réservés dans le motif pour ajouter une numérotation automatique.",
      tabTitlePlaceholder: "Texte de secours pour les titres d’onglet qui s’applique lorsque le modèle de titre d’onglet ne produit pas de valeur significative.",
      templateVisibleIf: "Ce paramètre vous permet de contrôler la visibilité des panneaux individuels dans le panneau dynamique. Utilisez l’espace réservé '{panel}' pour référencer le panneau actuel dans votre expression.",
      titleLocation: "Ce paramètre est automatiquement hérité par toutes les questions de ce panneau. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour les questions individuelles. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut).",
      descriptionLocation: "L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Sous le titre du panneau » par défaut).",
      newPanelPosition: "Définit la position d’un panneau nouvellement ajouté. Par défaut, de nouveaux panneaux sont ajoutés à la fin. Sélectionnez « Suivant » pour insérer un nouveau panneau après le panneau actuel.",
      copyDefaultValueFromLastEntry: "Duplique les réponses du dernier panneau et les attribue au panneau dynamique suivant.",
      keyName: "Faites référence à un nom de question pour demander à un utilisateur de fournir une réponse unique à cette question dans chaque panneau."
    },
    copyDefaultValueFromLastEntry: "Duplique les réponses de la dernière ligne et les attribue à la ligne dynamique suivante ajoutée.",
    defaultValueExpression: "Ce paramètre vous permet d’attribuer une valeur de réponse par défaut en fonction d’une expression. L’expression peut inclure des calculs de base - '{q1_id} + {q2_id}', des expressions booléennes, telles que '{age} > 60', et des fonctions : 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. La valeur déterminée par cette expression sert de valeur par défaut initiale qui peut être remplacée par la saisie manuelle d’une personne interrogée.",
    resetValueIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine le moment où l’entrée d’une personne interrogée est réinitialisée à la valeur basée sur l’expression de valeur par défaut ou l’expression de valeur définie ou à la valeur de la réponse par défaut (si l’une ou l’autre est définie).",
    setValueIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine quand exécuter l’expression « Définir la valeur » et attribuer dynamiquement la valeur résultante en tant que réponse.",
    setValueExpression: "Spécifiez une expression qui définit la valeur à définir lorsque les conditions de la règle « Définir la valeur si » sont remplies. L’expression peut inclure des calculs de base - '{q1_id} + {q2_id}', des expressions booléennes, telles que '{age} > 60', et des fonctions : 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. La valeur déterminée par cette expression peut être remplacée par la saisie manuelle d’un répondant.",
    gridLayoutEnabled: "Survey Creator vous permet d’ajuster manuellement les largeurs en ligne des éléments de formulaire pour contrôler la mise en page. Si cela ne produit pas le résultat souhaité, vous pouvez activer la disposition en grille, qui structure les éléments de formulaire à l’aide d’un système basé sur des colonnes. Pour configurer les colonnes de mise en page, sélectionnez une page ou un panneau et utilisez le tableau « Paramètres des questions » → « Colonnes de la grille ». Pour ajuster le nombre de colonnes d’une question, sélectionnez-la et définissez la valeur souhaitée dans le champ « Mise en page » → « Étendue de colonnes ».",
    question: {
      name: "ID de question qui n’est pas visible par les personnes interrogées.",
      description: "Saisissez un sous-titre de question.",
      visibleIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine la visibilité de la question.",
      enableIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule pour la question.",
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’avancement ou la soumission de l’enquête à moins que la question n’ait reçu une réponse.",
      startWithNewLine: "Désélectionnez cette option pour afficher la question sur une seule ligne avec la question ou le panneau précédent. Ce paramètre ne s’applique pas si la question est le premier élément de votre formulaire.",
      page: "Repositionne la question à la fin d’une page sélectionnée.",
      state: "Choisissez parmi : « Développé » - la boîte de questions s’affiche en entier et peut être réduite ; « Réduit » - la boîte de question n’affiche que le titre et la description et peut être développée ; « Verrouillé » - la boîte de questions s’affiche en entier et ne peut pas être réduite.",
      titleLocation: "Remplace les règles d’alignement des titres définies au niveau d’un panneau, d’une page ou d’une enquête. L’option « Hériter » applique tous les paramètres de niveau supérieur (s’ils sont définis) ou tous les paramètres de niveau d’enquête (« Top » par défaut).",
      descriptionLocation: "L’option « Hériter » applique le paramètre au niveau de l’enquête (« Sous le titre de la question » par défaut).",
      errorLocation: "Définit l’emplacement d’un message d’erreur par rapport à la question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Top » par défaut).",
      indent: "Ajoute un espace ou une marge entre le contenu de la question et la bordure gauche de la zone de question.",
      width: "Définit la largeur de la question par rapport aux autres éléments de l’enquête sur la même ligne. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      surveyvalidator: {
        expression: "Utilisez l’icône de la baguette magique pour définir une règle de validation pour la question."
      },
      textUpdateMode: "Choisissez parmi : « En cas de perte de focus » - la valeur est mise à jour lorsque le champ de saisie perd le focus ; « Pendant la saisie » - la valeur est mise à jour en temps réel, au fur et à mesure que les utilisateurs tapent. L’option « Hériter » applique le paramètre au niveau de l’enquête (« En cas de perte de focus » par défaut).",
      url: "Vous pouvez utiliser n’importe quel service Web comme source de données pour les questions à choix multiples. Pour renseigner les valeurs de choix, entrez l’URL du service fournissant les données.",
      searchMode: "Opération de comparaison permettant de filtrer la liste déroulante.",
      textWrapEnabled: "Les longs textes dans les options de choix généreront automatiquement des sauts de ligne pour s’adapter au menu déroulant. Désélectionnez cette option si vous souhaitez que les textes soient coupés.",
      effectiveColSpan: "Spécifie le nombre de colonnes que cette question couvre dans la disposition de la grille."
    },
    signaturepad: {
      signatureWidth: "Définit la largeur de la zone de signature affichée et l’image résultante.",
      signatureHeight: "Définit la hauteur de la zone de signature affichée et de l’image résultante.",
      signatureAutoScaleEnabled: "Sélectionnez cette option si vous souhaitez que la zone de signature occupe tout l’espace disponible dans la zone de question tout en conservant le format d’image 3 :2 par défaut. Lorsque des valeurs de largeur et de hauteur personnalisées sont définies, le paramètre conserve les proportions de ces dimensions."
    },
    file: {
      imageHeight: "Ajuste la hauteur de l’image dans les résultats de l’enquête.",
      imageWidth: "Ajuste la largeur de l’image dans les résultats de l’enquête.",
      allowImagesPreview: "Affiche des aperçus miniatures pour les fichiers téléchargés lorsque cela est possible. Désélectionnez si vous souhaitez afficher les icônes de fichier à la place."
    },
    image: {
      contentMode: "L’option « Auto » détermine automatiquement le mode d’affichage approprié - Image, Vidéo ou YouTube - en fonction de l’URL source fournie."
    },
    imagepicker: {
      imageHeight: "Remplace les valeurs de hauteur minimale et maximale.",
      imageWidth: "Remplace les valeurs de largeur minimale et maximale.",
      choices: "« Valeur » sert d’ID d’élément utilisé dans les règles conditionnelles ; La mention « Texte » s’affiche pour les personnes interrogées.",
      contentMode: "Choisissez entre « Image » et « Vidéo » pour définir le mode de contenu du sélecteur de médias. Si « Image » est sélectionné, assurez-vous que toutes les options fournies sont des fichiers image dans les formats suivants : JPEG, GIF, PNG, APNG, SVG, BMP, ICO. De même, si « Vidéo » est sélectionné, assurez-vous que toutes les options sont des liens directs vers des fichiers vidéo dans les formats suivants : MP4, MOV, WMV, FLV, AVI, MKV. Veuillez noter que les liens YouTube ne sont pas pris en charge pour les options vidéo."
    },
    text: {
      size: "Ce paramètre ne redimensionne que le champ de saisie et n’affecte pas la largeur de la zone de question. Pour limiter la longueur d’entrée acceptée, reportez-vous à <b>Validation → Limite maximale de caractères</b>."
    },
    comment: {
      rows: "Définit le nombre de lignes affichées dans le champ de saisie. Si l’entrée occupe plus de lignes, la barre de défilement apparaîtra."
    },
    // survey templates
    survey: {
      readOnly: "Sélectionnez cette option si vous souhaitez empêcher les personnes interrogées de remplir votre sondage.",
      progressBarLocation: "Définit l’emplacement de la barre de progression. La valeur « Auto » affiche la barre de progression au-dessus ou en dessous de l’en-tête de l’enquête."
    },
    matrixdropdowncolumn: {
      name: "ID de colonne qui n’est pas visible par les personnes interrogées.",
      isUnique: "Lorsque cette option est activée pour une colonne, une personne interrogée doit fournir une réponse unique pour chaque question de cette colonne.",
      rows: "Définit le nombre de lignes affichées dans le champ de saisie. Si l’entrée occupe plus de lignes, la barre de défilement apparaîtra.",
      visibleIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui détermine la visibilité des colonnes.",
      enableIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule de la colonne.",
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse.",
      showInMultipleColumns: "Lorsque cette option est sélectionnée, une colonne individuelle est créée pour chaque option de choix.",
      colCount: "Organise les options de choix dans une mise en page à plusieurs colonnes. Lorsqu’elle est définie sur 0, les options sont affichées sur une seule ligne. Lorsqu’elle est définie sur -1, la valeur réelle est héritée de la propriété « Nombre de colonnes imbriquées » de la matrice parente."
    },
    caseInsensitive: "Indiquez si les lettres majuscules et minuscules de l’expression régulière doivent être traitées comme équivalentes.",
    widthMode: "Choisissez parmi : « Statique » - définit une largeur fixe ; « Responsive » - permet à l’enquête d’occuper toute la largeur de l’écran ; « Auto » - s’applique à l’un ou l’autre des deux en fonction des types de questions utilisés.",
    cookieName: "Les cookies empêchent les utilisateurs de remplir deux fois le même sondage.",
    logo: "Collez un lien d’image (aucune limite de taille) ou cliquez sur l’icône de dossier pour parcourir un fichier à partir de votre ordinateur (jusqu’à 64 Ko).",
    logoWidth: "Définit la largeur d’un logo en unités CSS (px, %, in, pt, etc.).",
    logoHeight: "Définit une hauteur de logo en unités CSS (px, %, in, pt, etc.).",
    logoFit: "Choisissez parmi : « Aucun » - l’image conserve sa taille d’origine ; « Contenir » - l’image est redimensionnée pour s’adapter tout en conservant son rapport hauteur/largeur ; « Couverture » - l’image remplit toute la boîte tout en conservant son rapport hauteur/largeur ; « Remplir » - l’image est étirée pour remplir la boîte sans conserver son rapport hauteur/largeur.",
    autoAdvanceEnabled: "Indiquez si vous souhaitez que le sondage passe automatiquement à la page suivante une fois qu’une personne interrogée a répondu à toutes les questions de la page actuelle. Cette fonctionnalité ne s’applique pas si la dernière question de la page est ouverte ou permet plusieurs réponses.",
    autoAdvanceAllowComplete: "Sélectionnez cette option si vous souhaitez que l’enquête se termine automatiquement une fois qu’une personne interrogée a répondu à toutes les questions.",
    showNavigationButtons: "Définit la visibilité et l’emplacement des boutons de navigation sur une page.",
    navigationButtonsLocation: "Définit l’emplacement des boutons de navigation sur une page.",
    showPreviewBeforeComplete: "Activez la page d’aperçu avec toutes les questions ou les questions auxquelles on a répondu uniquement.",
    questionTitleLocation: "S’applique à toutes les questions de l’enquête. Ce paramètre peut être remplacé par des règles d’alignement des titres aux niveaux inférieurs : panneau, page ou question. Un paramètre de niveau inférieur remplacera ceux d’un niveau supérieur.",
    requiredMark: "Symbole ou séquence de symboles indiquant qu’une réponse est requise.",
    questionStartIndex: "Entrez un chiffre ou une lettre avec laquelle vous souhaitez commencer la numérotation.",
    questionErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à la question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question.",
    autoFocusFirstQuestion: "Sélectionnez cette option si vous souhaitez que le premier champ de saisie de chaque page soit prêt pour la saisie de texte.",
    questionOrder: "Conserve l’ordre d’origine des questions ou les rend aléatoires. L’effet de ce paramètre n’est visible que dans l’onglet Aperçu.",
    maxTextLength: "Pour les questions de saisie de texte uniquement.",
    maxCommentLength: "Pour les commentaires sur les questions seulement.",
    commentAreaRows: "Définit le nombre de lignes affichées dans les zones de texte pour les commentaires de question. Si l’entrée occupe plus de lignes, la barre de défilement apparaît.",
    autoGrowComment: "Indiquez si vous souhaitez que les commentaires de question et les questions de texte long augmentent automatiquement en hauteur en fonction de la longueur du texte saisi.",
    allowResizeComment: "Pour les questions, les commentaires et les questions de texte long uniquement.",
    calculatedValues: "Les variables personnalisées servent de variables intermédiaires ou auxiliaires utilisées dans les calculs de formulaire. Ils prennent les données des répondants comme valeurs sources. Chaque variable personnalisée a un nom unique et une expression sur laquelle elle est basée.",
    includeIntoResult: "Sélectionnez cette option si vous souhaitez que la valeur calculée de l’expression soit enregistrée avec les résultats de l’enquête.",
    triggers: "Un déclencheur est un événement ou une condition qui est basé sur une expression. Une fois que l’expression est évaluée à « true », un déclencheur déclenche une action. Une telle action peut éventuellement avoir une question cible qu’elle affecte.",
    clearInvisibleValues: "Choisissez d’effacer ou non les valeurs pour les questions masquées par la logique conditionnelle et quand le faire.",
    textUpdateMode: "Choisissez parmi : « En cas de perte de focus » - la valeur est mise à jour lorsque le champ de saisie perd le focus ; « Pendant la saisie » - la valeur est mise à jour en temps réel, au fur et à mesure que les utilisateurs tapent.",
    columns: "La valeur de gauche sert d’ID de colonne utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées.",
    rows: "La valeur de gauche sert d’ID de ligne utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées.",
    columnMinWidth: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    rowTitleWidth: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    totalText: "Visible uniquement lorsqu’au moins une colonne a un type Total ou une expression Total.",
    cellErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à une cellule dont l’entrée n’est pas valide. L’option « Hériter » applique le paramètre de la propriété « Alignement du message d’erreur ».",
    detailErrorLocation: "Définit l’emplacement des messages d’erreur pour les questions imbriquées dans les sections de détails. L’option « Hériter » applique le paramètre de la propriété « Alignement du message d’erreur ».",
    keyDuplicationError: "Lorsque la propriété « Empêcher les réponses en double » est activée, un répondant qui tente de soumettre une entrée en double recevra le message d’erreur suivant.",
    totalExpression: "Permet de calculer des valeurs totales en fonction d’une expression. L’expression peut inclure des calculs de base ('{q1_id} + {q2_id}'), des expressions booléennes ('{age} > 60') et des fonctions ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    confirmDelete: "Déclenche une invite vous demandant de confirmer la suppression de ligne.",
    keyName: "Si la colonne spécifiée contient des valeurs identiques, le sondage renvoie l’erreur « Valeur de clé non unique ».",
    description: "Saisissez un sous-titre.",
    locale: "Choisissez une langue pour commencer à créer votre sondage. Pour ajouter une traduction, passez à une nouvelle langue et traduisez le texte original ici ou dans l’onglet Traductions.",
    detailPanelMode: "Définit l’emplacement d’une section de détails par rapport à une ligne. Choisissez parmi : « Aucun » - aucune extension n’est ajoutée ; « Sous la ligne » - un développement de ligne est placé sous chaque ligne de la matrice ; « Sous la ligne, afficher un seul développement de ligne » - un développement est affiché sous une seule ligne, les développements de ligne restants sont réduits.",
    imageFit: "Choisissez parmi : « Aucun » - l’image conserve sa taille d’origine ; « Contenir » - l’image est redimensionnée pour s’adapter tout en conservant son rapport hauteur/largeur ; « Couverture » - l’image remplit toute la boîte tout en conservant son rapport hauteur/largeur ; « Remplir » - l’image est étirée pour remplir la boîte sans conserver son rapport hauteur/largeur.",
    autoGrow: "Augmente progressivement la hauteur du champ de saisie au fur et à mesure de la saisie des données. Remplace le paramètre « Hauteur du champ de saisie (en lignes) ».",
    allowResize: "La poignée de redimensionnement (ou poignée) apparaît dans le coin et peut être déplacée pour modifier la taille du champ de saisie.",
    timeLimit: "Intervalle de temps en secondes après lequel l’enquête passe automatiquement à la page de remerciement.",
    timeLimitPerPage: "Intervalle de temps en secondes après lequel l’enquête passe automatiquement à la page suivante.",
    validateVisitedEmptyFields: "Activez cette option pour déclencher la validation lorsqu’un utilisateur se concentre sur un champ de saisie vide, puis le quitte sans apporter de modifications.",
    page: {
      name: "Un ID de page qui n’est pas visible par les personnes interrogées.",
      description: "Tapez un sous-titre de page.",
      navigationTitle: "Une légende affichée sur un bouton de navigation dans la barre de progression ou la table des matières (TOC). Si vous laissez ce champ vide, le bouton de navigation utilisera le titre ou le nom de la page. Pour activer la barre de progression ou la table des matières, allez dans « Sondage » → « Navigation ».",
      timeLimit: "Intervalle de temps en secondes après lequel l’enquête passe automatiquement à la page suivante.",
      visibleIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine la visibilité de la page.",
      enableIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule de la page.",
      requiredIf: "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse.",
      questionTitleLocation: "S’applique à toutes les questions de cette page. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour des questions ou des panneaux individuels. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Top » par défaut).",
      questionTitleWidth: "Définit une largeur cohérente pour les titres de questions lorsqu’ils sont alignés à gauche de leurs zones de questions. Accepte les valeurs CSS (px, %, in, pt, etc.).",
      questionErrorLocation: "Définit l’emplacement d’un message d’erreur par rapport à la question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Top » par défaut).",
      questionOrder: "Conserve l’ordre d’origine des questions ou les rend aléatoires. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Original » par défaut). L’effet de ce paramètre n’est visible que dans l’onglet Aperçu.",
      showNavigationButtons: "Définit la visibilité des boutons de navigation sur la page. L’option « Hériter » applique le paramètre au niveau de l’enquête, qui est par défaut « Visible ».",
      gridLayoutColumns: "Ce tableau vous permet de configurer chaque colonne de la grille de la page. Il définit automatiquement le pourcentage de largeur de chaque colonne en fonction du nombre maximal d’éléments dans une rangée. Pour personnaliser la disposition de la grille, ajustez manuellement ces valeurs et définissez la largeur du titre pour toutes les questions de chaque colonne."
    },
    timerLocation: "Définit l’emplacement d’un minuteur sur une page.",
    panelsState: "Choisissez parmi : « Verrouillé » - les utilisateurs ne peuvent pas développer ou réduire les panneaux ; « Réduire tout » - tous les panneaux commencent dans un état réduit ; « Développer tout » - tous les panneaux commencent dans un état développé ; « Premier développé » - seul le premier panneau est initialement développé.",
    imageLinkName: "Entrez un nom de propriété partagée dans le tableau d’objets qui contient les URL de fichier image ou vidéo que vous souhaitez afficher dans la liste de choix.",
    choices: "La valeur de gauche sert d’ID d’élément utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées.",
    title: "Saisissez un titre convivial à afficher.",
    waitForUpload: "Garantit que les utilisateurs ne répondront pas à l’enquête tant que les fichiers n’auront pas été téléchargés.",
    minWidth: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    maxWidth: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    width: "Accepte les valeurs CSS (px, %, in, pt, etc.).",
    valueName: "Si vous ne définissez pas cette propriété, la réponse sera stockée dans un champ spécifié par la propriété Variable de stockage.",
    defaultDisplayValue: "Valeur affichée dans les questions HTML et dans les titres et descriptions dynamiques des éléments de l’enquête lorsque la valeur de la question est vide.",
    useDisplayValuesInDynamicTexts: "Dans les types de questions à sélection unique et multiple, chaque option de choix a un ID et une valeur d’affichage. Lorsqu’il est sélectionné, ce paramètre affiche une valeur d’affichage au lieu d’une valeur d’ID dans les questions HTML et les titres et descriptions dynamiques des éléments d’enquête.",
    clearIfInvisible: "Choisissez d’effacer ou non les valeurs de question masquées par la logique conditionnelle et quand le faire. L’option « Hériter » applique le paramètre au niveau de l’enquête (« À la fin de l’enquête » par défaut).",
    choicesFromQuestionMode: "Choisissez parmi : « Tous » - copie toutes les options de choix de la question sélectionnée ; « Sélectionné » - copie dynamiquement uniquement les options de choix sélectionnées ; « Non sélectionné » - copie dynamiquement uniquement les options de choix non sélectionnées. Les options « Aucun » et « Autre » sont copiées par défaut si elles sont activées dans la question source.",
    choiceValuesFromQuestion: "Dans les types de questions à sélection unique et à sélection multiple, chaque option de choix a un ID et une valeur d’affichage. Ce paramètre spécifie la question de matrice, de colonne ou de panneau qui doit fournir les ID.",
    choiceTextsFromQuestion: "Dans les types de questions à sélection unique et à sélection multiple, chaque option de choix a un ID et une valeur d’affichage. Ce paramètre spécifie la question de matrice, de colonne ou de panneau qui doit fournir les textes d’affichage.",
    allowCustomChoices: "Sélectionnez cette option pour permettre aux personnes interrogées d’ajouter leurs propres choix si l’option souhaitée n’est pas disponible dans la liste déroulante. Les choix personnalisés ne seront stockés que temporairement pour la durée de la session de navigation en cours.",
    showOtherItem: "Lorsque cette option est sélectionnée, les utilisateurs peuvent inclure des entrées supplémentaires dans une zone de commentaire distincte.",
    separateSpecialChoices: "Affiche chaque option de choix spécial (« Aucun », « Autre », « Tout sélectionner ») sur une nouvelle ligne, même en cas d’utilisation d’une mise en page à plusieurs colonnes.",
    path: "Spécifiez l’emplacement dans le jeu de données de service où se trouve le tableau cible d’objets. Laissez vide si l’URL pointe déjà vers le tableau.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Entrez un nom de propriété uniforme dans le tableau d’objets qui contient les valeurs que vous souhaitez afficher dans la liste de choix.",
    allowEmptyResponse: "Sélectionnez cette option pour permettre au service de renvoyer une réponse ou un tableau vide.",
    choicesVisibleIf: "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine la visibilité de toutes les options de choix.",
    rateValues: "La valeur de gauche sert d’ID d’élément utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées.",
    rating: {
      displayMode: "« Auto » sélectionne entre les modes « Boutons » et « Menu déroulant » en fonction de la largeur disponible. Lorsque la largeur est insuffisante pour afficher les boutons, la question affiche une liste déroulante."
    },
    valuePropertyName: "Vous permet de connecter des questions qui produisent des résultats dans différents formats. Lorsque ces questions sont liées entre elles à l’aide d’un identificateur de jointure, cette propriété partagée stocke les valeurs de question sélectionnées.",
    searchEnabled: "Sélectionnez cette option si vous souhaitez mettre à jour le contenu du menu déroulant pour qu’il corresponde à la requête de recherche qu’un utilisateur saisit dans le champ de saisie.",
    valueTrue: "Une valeur à enregistrer dans les résultats de l’enquête lorsque les répondants donnent une réponse positive.",
    valueFalse: "Une valeur à enregistrer dans les résultats de l’enquête lorsque les personnes interrogées donnent une réponse négative.",
    showPreview: "Il n’est pas recommandé de désactiver cette option, car elle remplace l’image d’aperçu et rend difficile pour l’utilisateur de savoir si les fichiers ont été téléchargés.",
    needConfirmRemoveFile: "Déclenche une invite vous demandant de confirmer la suppression du fichier.",
    selectToRankEnabled: "Activez cette option pour classer uniquement les choix sélectionnés. Les utilisateurs feront glisser les éléments sélectionnés de la liste de choix pour les classer dans la zone de classement.",
    dataList: "Entrez une liste de choix qui seront suggérés au répondant lors de la saisie.",
    inputSize: "Le paramètre ne redimensionne que les champs de saisie et n’affecte pas la largeur de la zone de question.",
    itemTitleWidth: "Définit une largeur cohérente pour toutes les étiquettes d’article. Accepte les valeurs CSS (px, %, in, pt, etc.).",
    inputTextAlignment: "Sélectionnez le mode d’alignement de la valeur d’entrée dans le champ. Le paramètre par défaut « Auto » aligne la valeur d’entrée à droite si le masquage monétaire ou numérique est appliqué et à gauche si ce n’est pas le cas.",
    altText: "Sert de substitut lorsque l’image ne peut pas être affichée sur l’appareil d’un utilisateur et à des fins d’accessibilité.",
    rateColorMode: "Définit la couleur de l’emoji sélectionné lorsque le type d’icône d’évaluation est défini sur « Smileys ». Choisissez entre : « Par défaut » - l’emoji sélectionné apparaît dans la couleur par défaut de l’enquête ; « Échelle » - l’emoji sélectionné hérite de la couleur de l’échelle d’évaluation.",
    expression: {
      name: "ID d’expression qui n’est pas visible par les personnes interrogées.",
      description: "Saisissez un sous-titre d’expression.",
      expression: "Une expression peut inclure des calculs de base ('{q1_id} + {q2_id}'), des conditions ('{age} > 60') et des fonctions ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
    },
    storeOthersAsComment: "Sélectionnez cette option pour stocker la valeur de l’option « Autre » en tant que propriété distincte dans les résultats de l’enquête.",
    format: "Utilisez {0} comme espace réservé pour la valeur réelle.",
    acceptedTypes: "Reportez-vous à la description de l’attribut [accept](https://www.w3schools.com/tags/att_input_accept.asp) pour plus d’informations.",
    columnColCount: "Applicable uniquement aux types de cellules Choix unique (radio) et Cases à cocher.",
    autocomplete: "Reportez-vous à la description de l’attribut [saisie semi-automatique](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/saisie semi-automatique) pour plus d’informations.",
    filePlaceholder: "S’applique lorsque le « Type de source » est « Fichiers locaux » ou lorsque l’appareil photo n’est pas disponible",
    photoPlaceholder: "S’applique lorsque le « Type de source » est « Appareil photo ».",
    fileOrPhotoPlaceholder: "S’applique lorsque le « Type de source » est « Fichiers locaux ou appareil photo ».",
    colCount: "Organise les options de choix dans une disposition à plusieurs colonnes. Lorsqu’elle est définie sur 0, les options sont affichées sur une seule ligne.",
    masksettings: {
      saveMaskedValue: "Sélectionnez cette option si vous souhaitez stocker la valeur de la question à l’aide d’un masque appliqué dans les résultats de l’enquête."
    },
    patternmask: {
      pattern: "Le modèle peut contenir des littéraux de chaîne et les espaces réservés suivants : '9' - pour un chiffre ; 'a' - pour une lettre majuscule ou minuscule ; '#' - pour un chiffre ou une lettre majuscule ou minuscule. Utilisez la barre oblique inverse '\\' pour échapper un caractère."
    },
    datetimemask: {
      pattern: "Le modèle peut contenir des caractères de séparation et les espaces réservés suivants :<br>'m' - Numéro du mois.<br>'mm' - Numéro du mois, avec zéro non significatif pour les valeurs à un chiffre. <br>'d' - Jour du mois. <br>'dd' - Jour du mois, avec zéro non significatif pour les valeurs à un chiffre. <br>'yy' - Les deux derniers chiffres de l’année. <br>'yyyy' - Année à quatre chiffres. <br>'H' - Heures au format 24 heures. <br>'HH' - Heures au format 24 heures, avec zéro non significatif pour les valeurs à un chiffre. <br>'h' - Heures au format 12 heures. <br>'hh' - Heures au format 12 heures, avec zéro non significatif pour les valeurs à un chiffre. <br>'MM' - Procès-verbaux. <br>'ss' - Secondes. <br>'TT' - Période d’horloge de 12 heures en majuscules (AM/PM). <br>'tt' - Période d’horloge de 12 heures en minuscules (AM/PM)."
    },
    numericmask: {
      decimalSeparator: "Symbole utilisé pour séparer la partie fractionnaire de la partie entière d’un nombre affiché.",
      thousandsSeparator: "Symbole utilisé pour séparer les chiffres d’un grand nombre en groupes de trois.",
      precision: "Limite le nombre de chiffres à conserver après la virgule décimale pour un nombre affiché."
    },
    currencymask: {
      prefix: "Un ou plusieurs symboles à afficher avant la valeur.",
      suffix: "Un ou plusieurs symboles à afficher après la valeur."
    },
    theme: {
      isPanelless: "Ce paramètre s’applique uniquement aux questions en dehors d’un panneau.",
      primaryColor: "Définit une couleur supplémentaire qui met en évidence les éléments clés de l’enquête.",
      panelBackgroundTransparency: "Ajuste la transparence des panneaux et des zones de question par rapport à l’arrière-plan de l’enquête.",
      questionBackgroundTransparency: "Ajuste la transparence des éléments d’entrée par rapport à l’arrière-plan de l’enquête.",
      cornerRadius: "Définit le rayon d’angle de tous les éléments rectangulaires. Activez le mode avancé si vous souhaitez définir des valeurs de rayon d’angle individuelles pour les éléments de saisie ou les panneaux et les zones de question.",
      "--sjs-general-backcolor-dim": "Définit la couleur d’arrière-plan principale de l’enquête."
    },
    header: {
      inheritWidthFrom: "L’option « Identique au conteneur » ajuste automatiquement la largeur de la zone de contenu de l’en-tête pour s’adapter à l’élément HTML dans lequel l’enquête est placée.",
      textAreaWidth: "Largeur de la zone d’en-tête contenant le titre et la description de l’enquête, mesurée en pixels.",
      overlapEnabled: "Lorsque cette option est activée, la partie supérieure de l’enquête se superpose au bas de l’en-tête.",
      mobileHeight: "Lorsqu’elle est définie sur 0, la hauteur est calculée automatiquement pour s’adapter au contenu de l’en-tête."
    },
    progressBarInheritWidthFrom: "L’option « Identique au conteneur » ajuste automatiquement la largeur de la zone de la barre de progression pour s’adapter à l’élément HTML dans lequel l’enquête est placée."
  },
  // Properties
  p: {
    title: {
      name: "Titre",
      title: "Laissez vide, si même texte que \"Variable de stockage\""
    },
    multiSelect: "Autoriser la sélection multiple",
    showLabel: "Afficher les légendes des images",
    swapOrder: "Permuter l’ordre de Oui et Non",
    value: "Valeur",
    tabAlign: "Alignement des tabulations",
    sourceType: "Type de source",
    fitToContainer: "S’adapte au conteneur",
    setValueExpression: "Définir l’expression de valeur",
    description: "Description",
    logoFit: "Ajustement du logo",
    pages: "Pages",
    questions: "Questions",
    triggers: "Déclencheurs",
    calculatedValues: "Valeurs calculées",
    surveyId: "ID du sondage",
    surveyPostId: "ID de publication du sondage",
    surveyShowDataSaving: "Le sondage montre l'enregistrement des données",
    questionDescriptionLocation: "Emplacement de la description de la question",
    progressBarType: "Type de barre de progression",
    showTOC: "Afficher le menu de navigation",
    tocLocation: "Emplacement du menu de navigation",
    questionTitlePattern: "Modèle de titre de question",
    widthMode: "Largeur du sondage",
    showBrandInfo: "Afficher les informations sur la marque",
    useDisplayValuesInDynamicTexts: "Utiliser des valeurs d’affichage dans des textes dynamiques",
    visibleIf: "Visible si ",
    defaultValueExpression: "Expression de valeur par défaut",
    requiredIf: "Obligatoire si",
    resetValueIf: "Réinitialiser la valeur si",
    setValueIf: "Définir la valeur si",
    validators: "Validateurs",
    bindings: "Liaisons",
    renderAs: "Rendre en tant que",
    attachOriginalItems: "Joindre des documents originaux",
    choices: "Choix",
    choicesByUrl: "Définir les choix par API",
    currency: "Devise",
    cellHint: "Indication de cellule",
    totalMaximumFractionDigits: "Total de décimales maximale",
    totalMinimumFractionDigits: "Total de décimales minimales",
    columns: "Colonnes",
    detailElements: "Détails de l'élément",
    allowAdaptiveActions: "Autoriser les actions adaptatives",
    defaultRowValue: "Valeur de ligne par défaut",
    detailPanelShowOnAdding: "Affichage des détails de la section lors de l’ajout",
    choicesLazyLoadEnabled: "Choix de chargement paresseux activé",
    choicesLazyLoadPageSize: "Choix de taille de page de chargement paresseux",
    inputFieldComponent: "Composant du champ de saisie",
    itemComponent: "Composant de l'élément",
    min: "Min",
    max: "Max",
    minValueExpression: "Expression de valeur minimale",
    maxValueExpression: "Expression de valeur maximale",
    step: "Intervalle",
    dataList: "Liste de données",
    inputSize: "Nombre maximum de caractères",
    itemTitleWidth: "Largeur de l’étiquette de l’article (en px)",
    inputTextAlignment: "Alignement des valeurs d’entrée",
    elements: "Éléments",
    content: "Contenu",
    navigationTitle: "Titre de la navigation",
    navigationDescription: "Description de la navigation",
    longTap: "Appuyez longuement",
    autoGrow: "Agrandissement automatique",
    allowResize: "Autoriser le redimensionnement",
    acceptCarriageReturn: "Accepter le retour à la ligne",
    displayMode: "Mode d’affichage",
    rateType: "Type de notation",
    label: "Intitulé",
    contentMode: "Mode de contenu",
    imageFit: "Ajustement de l’image",
    altText: "Texte de remplacement",
    height: "Hauteur",
    mobileHeight: "Hauteur sur les smartphones",
    penColor: "Couleur du stylo",
    backgroundColor: "Couleur d’arrière-plan",
    templateElements: "Modèle des éléments",
    operator: "Opérateur",
    isVariable: "Est variable",
    runExpression: "Exécuter l’expression",
    showCaption: "Afficher la légende",
    iconName: "Nom de l’icône",
    iconSize: "Taille de l’icône",
    precision: "Précision",
    matrixDragHandleArea: "Zone de poignée de déplacement de la matrice",
    backgroundImage: "Image d’arrière-plan",
    backgroundImageFit: "Ajustement de l’image d’arrière-plan",
    backgroundImageAttachment: "Pièce jointe de l’image d’arrière-plan",
    backgroundOpacity: "Opacité de l’arrière-plan",
    selectToRankEnabled: "Sélectionner pour classer activé",
    selectToRankAreasLayout: "Sélectionner pour classer la disposition des zones",
    selectToRankEmptyRankedAreaText: "Texte pour indiquer si toutes les options sont sélectionnées",
    selectToRankEmptyUnrankedAreaText: "Texte d’espace réservé pour la zone de classement",
    allowCameraAccess: "Autoriser l’accès à la caméra",
    scaleColorMode: "Mode de couleur de mise à l’échelle",
    rateColorMode: "Évaluer le mode de couleur",
    copyDisplayValue: "Copier la valeur d’affichage",
    effectiveColSpan: "Portée de poteau",
    progressBarInheritWidthFrom: "Largeur de la zone de la barre de progression"
  },
  theme: {
    advancedMode: "Mode avancé",
    pageTitle: "Police du titre de la page",
    questionTitle: "Police du titre de la question",
    editorPanel: "Champs de réponse",
    lines: "Lignes",
    primaryDefaultColor: "Faire défaut",
    primaryDarkColor: "Au survol",
    primaryLightColor: "Sélectionné",
    backgroundDimColor: "Couleur d’arrière-plan",
    cornerRadius: "Rayon d’angle",
    backcolor: "Arrière-plan par défaut",
    hovercolor: "Arrière-plan du survol",
    borderDecoration: "Décoration de bordure",
    fontColor: "Couleur de la police",
    backgroundColor: "Couleur de fond",
    primaryForecolor: "Couleur par défaut",
    primaryForecolorLight: "Couleur Désactivée",
    font: "Police",
    borderDefault: "Sombre",
    borderLight: "Clair",
    fontFamily: "Famille de polices",
    fontWeightRegular: "Régulier",
    fontWeightHeavy: "Lourd",
    fontWeightSemiBold: "Semi-gras",
    fontWeightBold: "Audacieux",
    color: "Couleur",
    placeholderColor: "Couleur de l’espace réservé",
    size: "Taille",
    opacity: "Opacité",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Ajouter un effet d’ombre",
    boxShadowBlur: "Flou",
    boxShadowSpread: "Propagation",
    boxShadowDrop: "Extérieur",
    boxShadowInner: "Intérieur",
    names: {
      default: "Par défaut",
      sharp: "Tranchant",
      borderless: "Sans bord",
      flat: "Plat",
      plain: "Plaine",
      doubleborder: "Double bordure",
      layered: "Superposé",
      solid: "Solide",
      threedimensional: "3D",
      contrast: "Contraste"
    },
    colors: {
      teal: "Bleu Sarcelle",
      blue: "Bleu",
      purple: "Pourpre",
      orchid: "Orchidée",
      tulip: "Tulipe",
      brown: "Marron",
      green: "Vert",
      gray: "Gris"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Arrière-plan de surface",
    "--sjs-primary-background-500": "Primaire",
    "--sjs-secondary-background-500": "Secondaire",
    surfaceScale: "Surface",
    userInterfaceBaseUnit: "Interface utilisateur",
    fontScale: "Police",
    names: {
      sc2020: "Créateur d’enquête 2020",
      "default-light": "Lumière",
      "default-dark": "Sombre",
      "default-contrast": "Contraste"
    }
  }
};

setupLocale({ localeCode: "fr", strings: frenchTranslation });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.externalHelpLink: "Watch and learn how to create surveys" => "Regardez et apprenez à créer des sondages"
// survey.externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber" => "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "Créez une règle pour personnaliser le flux de l’enquête."
// survey.duplicate: "Duplicate" => "Dupliquer"
// survey.drag: "Drag element" => "Élément Drag"
// qt.ranking: "Ranking" => "Classement"
// qt.image: "Image" => "Image"
// qt.tagbox: "Multi-Select Dropdown" => "Liste déroulante à sélection multiple"
// qt.signaturepad: "Signature" => "Signature"
// qt.buttongroup: "Button Group" => "Groupe de boutons"
// ed.defaultLocale: "Default ({0})" => "Valeur par défaut ({0})"
// ed.settingsTooltip: "Open settings" => "Paramètres ouverts"
// ed.surveySettings: "Survey Settings" => "Paramètres de l’enquête"
// ed.surveySettingsTooltip: "Open survey settings" => "Paramètres d’enquête ouverts"
// ed.showPanel: "Show Panel" => "Afficher le panneau"
// ed.hidePanel: "Hide Panel" => "Masquer le panneau"
// ed.prevSelected: "Select previous" => "Sélectionnez précédent"
// ed.nextSelected: "Select next" => "Sélectionnez Suivant"
// ed.surveyTypeName: "Survey" => "Enquête"
// ed.pageTypeName: "Page" => "Page"
// ed.panelTypeName: "Panel" => "Panneau"
// ed.questionTypeName: "Question" => "Question"
// ed.columnTypeName: "Column" => "Colonne"
// ed.themeSurvey: "Themes" => "Thèmes"
// ed.defaultV2Theme: "Default" => "Faire défaut"
// ed.modernTheme: "Modern" => "Moderne"
// ed.defaultTheme: "Default (legacy)" => "Valeur par défaut (héritée)"
// ed.navigateToMsg: "You had to navigate to" => "Vous deviez naviguer vers"
// ed.logic: "Logic" => "Logique"
// ed.saveSurveyTooltip: "Save Survey" => "Enregistrer l’enquête"
// ed.jsonHideErrors: "Hide errors" => "Masquer les erreurs"
// ed.jsonShowErrors: "Show errors" => "Afficher les erreurs"
// ed.undoTooltip: "Undo last change" => "Annuler la dernière modification"
// ed.redoTooltip: "Redo the change" => "Rétablir la modification"
// ed.showMoreChoices: "Show more" => "Afficher plus"
// ed.showLessChoices: "Show less" => "Afficher moins"
// ed.copy: "Copy" => "Copier"
// ed.cut: "Cut" => "Couper"
// ed.paste: "Paste" => "Pâte"
// ed.copyTooltip: "Copy selection to clipboard" => "Copier la sélection dans le presse-papiers"
// ed.cutTooltip: "Cut selection to clipboard" => "Couper la sélection dans le presse-papiers"
// ed.pasteTooltip: "Paste from clipboard" => "Coller à partir du presse-papiers"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Tapez pour rechercher..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Questions de choix"
// ed.toolboxTextCategory: "Text Input Questions" => "Questions de saisie de texte"
// ed.toolboxContainersCategory: "Containers" => "Conteneurs"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Questions matricielles"
// ed.toolboxMiscCategory: "Misc" => "Divers"
// ed.propertyEditorError: "Error" => "Erreur"
// ed.translationPropertyGridTitle: "Language Settings" => "Paramètres de langue"
// ed.themePropertyGridTitle: "Theme Settings" => "Paramètres du thème"
// ed.translationLanguages: "Languages" => "Traduction"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Chaînes utilisées uniquement"
// ed.translationPlaceHolder: "Translation..." => "Traduction..."
// ed.themeExportButton: "Export" => "Exportation"
// ed.themeImportButton: "Import" => "Importation"
// ed.selectPage: "Select page..." => "Sélectionner une page..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Les choix sont copiés à partir de"
// ed.htmlPlaceHolder: "HTML content will be here." => "Le contenu HTML sera ici."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Déposez une question de la boîte à outils ici."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Faites glisser et déposez une image ici ou cliquez sur le bouton ci-dessous et choisissez une image à télécharger"
// ed.imageChooseImage: "Choose Image" => "Choisir une image"
// ed.addNewTypeQuestion: "Add {0}" => "Ajouter {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "auto"
// ed.choices_Item: "Item " => "Article "
// lg.addNewItem: "Add New Rule" => "Ajouter une nouvelle règle"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Créez une règle pour personnaliser le flux de l’enquête."
// lg.page_enableName: "Enable (disable) page" => "Activer (désactiver) la page"
// lg.column_visibilityName: "Show (hide) column" => "Afficher (masquer) la colonne"
// lg.column_enableName: "Enable (disable) column" => "Activer (désactiver) la colonne"
// lg.column_requireName: "Make column required" => "Rendre la colonne obligatoire"
// lg.itemEmptyExpressionText: "New rule" => "Nouvelle règle"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Rendre visible les {0} de la colonne de questions {1}"
// lg.column_enableText: "make column {0} of question {1} enable" => "Activer la {0} de la colonne de questions {1}"
// lg.column_requireText: "make column {0} of question {1} required" => "rendre obligatoire la colonne {0} de la question {1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Valeur de la question claire : {0}"
// lg.showAllQuestions: "All Questions" => "Toutes les questions"
// lg.showAllActionTypes: "All Action Types" => "Tous les types d’action"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Les règles logiques sont incomplètes"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Vous n’avez pas terminé certaines des règles logiques. Si vous quittez l’onglet maintenant, les modifications seront perdues. Voulez-vous toujours quitter l’onglet sans terminer les modifications?"
// lg.uncompletedRule_apply: "Yes" => "Oui"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Non, je veux compléter les règles"
// pe.clear: "Clear" => "Clair"
// pe.saveTooltip: "Save" => "Sauvegarder"
// pe.set: "Set" => "Poser"
// pe.change: "Change" => "Changement"
// pe.refresh: "Refresh" => "Rafraîchir"
// pe.add: "Add" => "Ajouter"
// pe.removeItem: "Click to remove the item..." => "Cliquez pour supprimer l’élément..."
// pe.dragItem: "Drag the item" => "Faire glisser l’élément"
// pe.doneEditing: "Done" => "Fait"
// pe.showChoices: "Show Choices" => "Afficher les choix"
// pe.emptyValue: "Value is empty" => "La valeur est vide"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "La valeur '{0}' n’est pas unique"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Veuillez limiter le nombre d’articles de {0} à {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Vous pouvez définir les données au format suivant :\nvaleur1|texte\nvaleur2"
// pe.itemSelectorEmpty: "Please select the element" => "Veuillez sélectionner l’élément"
// pe.conditionActionEmpty: "Please select the action" => "Veuillez sélectionner l’action"
// pe.conditionSelectPage: "Select page..." => "Sélectionner une page..."
// pe.conditionSelectPanel: "Select panel..." => "Sélectionner un panneau..."
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Prévisualiser les réponses avant de soumettre le sondage"
// pe.overridingPropertyPrefix: "Set by " => "Défini par "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Veuillez saisir une valeur unique"
// pe.propertyNameIsNotUnique: "Please enter a unique name" => "Veuillez saisir un nom unique"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "N’utilisez pas de mots réservés : « item », « choice », « panel », « row »."
// pe.listIsEmpty@choices: "No choices have been added yet" => "Aucun choix n’a encore été ajouté"
// pe.addNew@choices: "Add a choice" => "Ajouter un choix"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Obtenir des valeurs à partir du champ JSON suivant"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Obtenir les URL d’image à partir du champ JSON suivant"
// pe.allowEmptyResponse: "Allow empty response" => "Autoriser les réponses vides"
// pe.cols: "Columns" => "Colonnes"
// pe.and: "and" => "et"
// pe.or: "or" => "ou"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Sélectionnez une question pour commencer à configurer les conditions."
// pe.if: "If" => "Si"
// pe.then: "then" => "alors"
// pe.setToName: "Target question" => "Question cible"
// pe.fromName: "Question to copy answer from" => "Question à partir de laquelle copier la réponse"
// pe.gotoName: "Question to skip to" => "Question à passer à"
// pe.ruleIsNotSet: "Rule is incorrect" => "La règle est incorrecte"
// pe.includeIntoResult: "Include into survey results" => "Inclure dans les résultats de l’enquête"
// pe.expandCollapseTitle: "Expand/collapse title" => "Développer/réduire le titre"
// pe.portraitOrientation: "Switch to portrait orientation" => "Passer en orientation portrait"
// pe.previewText: "Preview Answers button text" => "Aperçu du texte du bouton Réponses"
// pe.editText: "Edit Answer button text" => "Modifier le texte du bouton de réponse"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Hauteur de l’image (en valeurs acceptées par CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Largeur de l’image (en valeurs acceptées par CSS)"
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Limite de temps pour terminer la page (en secondes)"
// question.page: "Parent page" => "Page parent"
// pe.noEntriesText: "Empty entries text" => "Texte des entrées vides"
// pe.html: "HTML markup" => "Balisage HTML"
// pe.setValue: "Answer" => "Répondre"
// pe.dataFormat: "Image format" => "Format de l’image"
// pe.allowAddRows: "Allow adding rows" => "Autoriser l’ajout de lignes"
// pe.allowRemoveRows: "Allow removing rows" => "Autoriser la suppression de lignes"
// pe.allowRowReorder: "Allow row drag and drop" => "Autoriser le glisser-déposer de lignes"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Ne s’applique pas si vous spécifiez la largeur ou la hauteur exacte de l’image."
// pe.minImageWidth: "Minimum image width" => "Largeur minimale de l’image"
// pe.maxImageWidth: "Maximum image width" => "Largeur maximale de l’image"
// pe.minImageHeight: "Minimum image height" => "Hauteur minimale de l’image"
// pe.maxImageHeight: "Maximum image height" => "Hauteur maximale de l’image"
// surveyvalidator.text: "Error message" => "Message d'erreur"
// surveyvalidator.expression: "Validation expression" => "Expression de validation"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (URL ou chaîne codée en base64)"
// pe.questionsOnPageMode: "Survey structure" => "Structure de l’enquête"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Longueur maximale de réponse (en caractères)"
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Longueur maximale des commentaires (en caractères)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Développer automatiquement la zone de commentaires si nécessaire"
// pe.allowResizeComment: "Allow users to resize text areas" => "Autoriser les utilisateurs à redimensionner les zones de texte"
// pe.textUpdateMode: "Update text question value" => "Mettre à jour la valeur de la question textuelle"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Concentrez-vous sur la première réponse non valide"
// pe.checkErrorsMode: "Run validation" => "Exécuter la validation"
// pe.navigateToUrl: "Navigate to URL" => "Accédez à URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "URL dynamique"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Balisage pour indiquer si l’utilisateur a déjà rempli cette enquête"
// pe.completedHtml: "Survey Complete page markup" => "Balisage de page Enquête terminée"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Balisage de page Dynamic Survey Complete"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Balisage à afficher pendant le chargement du modèle d’enquête"
// pe.commentText: "Comment area text" => "Texte de la zone de commentaires"
// pe.autocomplete: "Autocomplete type" => "Type de saisie semi-automatique"
// pe.labelTrue: "\"True\" label" => "Étiquette « vraie »"
// pe.labelFalse: "\"False\" label" => "Étiquette « Faux »"
// pe.allowClear: "Show the Clear button" => "Afficher le bouton Effacer"
// pe.displayStyle: "Value display style" => "Style d’affichage de la valeur"
// pe.format: "Formatted string" => "Chaîne mise en forme"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Nombre maximal de chiffres fractionnaires"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Nombre minimum de fractions"
// pe.useGrouping: "Display grouping separators" => "Séparateurs de groupes d’affichage"
// pe.allowMultiple: "Allow multiple files" => "Autoriser plusieurs fichiers"
// pe.allowImagesPreview: "Preview images" => "Prévisualiser les images"
// pe.acceptedTypes: "Accepted file types" => "Types de fichiers acceptés"
// pe.waitForUpload: "Wait for the upload to complete" => "Attendez la fin du téléchargement"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Confirmer la suppression du fichier"
// pe.detailPanelMode: "Detail panel location" => "Emplacement du panneau de détails"
// pe.minRowCount: "Minimum row count" => "Nombre minimal de lignes"
// pe.maxRowCount: "Maximum row count" => "Nombre maximal de lignes"
// pe.confirmDelete: "Confirm row deletion" => "Confirmer la suppression de lignes"
// pe.confirmDeleteText: "Confirmation message" => "Message de confirmation"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Confirmer la suppression du panneau"
// pe.panelCount: "Initial panel count" => "Nombre initial de panels"
// pe.minPanelCount: "Minimum panel count" => "Nombre minimal de panneaux"
// pe.maxPanelCount: "Maximum panel count" => "Nombre maximal de panneaux"
// pe.panelsState: "Inner panel expand state" => "État d’expansion du panneau intérieur"
// pe.templateDescription: "Description template" => "Modèle de description"
// pe.templateTitle: "Title template" => "Modèle de titre"
// pe.prevPanelText: "Previous Panel button tooltip" => "Info-bulle précédente du bouton Panneau"
// pe.nextPanelText: "Next Panel button tooltip" => "Info-bulle du bouton Panneau suivant"
// pe.showRangeInProgress: "Show progress bar" => "Afficher la barre de progression"
// pe.templateQuestionTitleLocation: "Question title location" => "Emplacement du titre de la question"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Supprimer l’emplacement du bouton Panneau"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Masquer la question s’il n’y a pas de lignes"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Masquer les colonnes s’il n’y a pas de lignes"
// pe.rateValues: "Custom rate values" => "Valeurs de taux personnalisées"
// pe.rateCount: "Rate count" => "Nombre de taux"
// pe.autoGenerate: "How to specify rate values?" => "Comment spécifier les valeurs de taux?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Masquer la question si elle ne contient pas de choix"
// pe.hideNumber: "Hide question number" => "Masquer le numéro de la question"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Largeur minimale (en valeurs acceptées par CSS)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Largeur maximale (en valeurs acceptées par CSS)"
// pe.width: "Width (in CSS-accepted values)" => "Largeur (en valeurs acceptées par CSS)"
// pe.showHeader: "Show column headers" => "Afficher les en-têtes de colonne"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Afficher la barre de défilement horizontale"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Largeur minimale de colonne (en valeurs acceptées par CSS)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Largeur de l’en-tête de ligne (en valeurs acceptées par CSS)"
// pe.valueTrue: "\"True\" value" => "Valeur « vraie »"
// pe.valueFalse: "\"False\" value" => "Valeur « False »"
// pe.minErrorText: "\"Value is below minimum\" error message" => "Message d’erreur « La valeur est inférieure au minimum »"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Message d’erreur « La valeur dépasse le maximum »"
// pe.otherErrorText: "\"Empty comment\" error message" => "Message d’erreur « Commentaire vide »"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Message d’erreur « Valeur de clé non unique »"
// pe.minSelectedChoices: "Minimum selected choices" => "Choix minimum sélectionnés"
// pe.maxSelectedChoices: "Maximum selected choices" => "Nombre maximal de choix sélectionnés"
// pe.showNumber: "Show panel number" => "Afficher le numéro du panneau"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Largeur du logo (en valeurs acceptées par CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Hauteur du logo (en valeurs acceptées par CSS)"
// pe.readOnly: "Read-only" => "Lecture seule"
// pe.enableIf: "Editable if" => "Modifiable si"
// pe.noRowsText: "\"No rows\" message" => "Message « Aucune ligne »"
// pe.size: "Input field size (in characters)" => "Taille du champ d’entrée (en caractères)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Choix spéciaux distincts (Aucun, Autre, Sélectionner tout)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Choix de copie de la question suivante"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Quels choix copier ?"
// pe.showCommentArea: "Show the comment area" => "Afficher la zone de commentaires"
// pe.commentPlaceholder: "Comment area placeholder" => "Espace réservé pour la zone de commentaires"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Afficher les descriptions de taux sous forme de valeurs extrêmes"
// pe.rowOrder: "Row order" => "Ordre des lignes"
// pe.columnsLayout: "Column layout" => "Disposition des colonnes"
// pe.columnColCount: "Nested column count" => "Nombre de colonnes imbriquées"
// pe.state: "Panel expand state" => "État de développement du panneau"
// pe.correctAnswer: "Correct Answer" => "Réponse correcte"
// pe.defaultPanelValue: "Default Values" => "Valeurs par défaut"
// pe.cells: "Cell Texts" => "Textes cellulaires"
// pe.keyName: "Key column" => "Colonne clé"
// itemvalue.text: "Alt text" => "Texte de remplacement"
// tabs.items: "Items" => "Articles"
// tabs.numbering: "Numbering" => "Numérotation"
// tabs.pages: "Pages" => "Pages"
// tabs.showOnCompleted: "Survey Complete" => "Sondage terminé"
// tabs.slider: "Slider" => "Glisseur"
// tabs.expression: "Expression" => "Expression"
// pe.choicesVisibleIf: "Choices are visible if" => "Les choix sont visibles si"
// pe.choicesEnableIf: "Choices are selectable if" => "Les choix sont sélectionnables si"
// pe.columnsEnableIf: "Columns are visible if" => "Les colonnes sont visibles si"
// pe.rowsEnableIf: "Rows are visible if" => "Les lignes sont visibles si"
// pe.indent: "Add indents" => "Ajouter des retraits"
// panel.indent: "Add outer indents" => "Ajouter des retraits externes"
// pe.innerIndent: "Add inner indents" => "Ajouter des retraits internes"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "Appuyez sur le bouton Entrée pour modifier"
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "Appuyez sur le bouton Entrée pour modifier l’élément, appuyez sur le bouton Supprimer pour supprimer l’élément, appuyez sur alt plus flèche vers le haut ou flèche vers le bas pour déplacer l’élément"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Tapez expression ici..."
// pe.noFile: "No file choosen" => "Aucun fichier choisi"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Effacer la valeur si la question devient masquée"
// pe.valuePropertyName: "Value property name" => "Nom de la propriété Value"
// pe.searchEnabled: "Enable search" => "Activer la recherche"
// pe.hideSelectedItems: "Hide selected items" => "Masquer les éléments sélectionnés"
// pe.closeOnSelect: "Close the dropdown after selection" => "Fermer la liste déroulante après la sélection"
// pe.signatureWidth: "Signature width" => "Largeur de la signature"
// pe.signatureHeight: "Signature height" => "Hauteur de signature"
// pe.verticalAlign: "Vertical alignment" => "Alignement vertical"
// pe.alternateRows: "Alternate rows" => "Lignes alternées"
// pe.columnsVisibleIf: "Columns are visible if" => "Les colonnes sont visibles si"
// pe.rowsVisibleIf: "Rows are visible if" => "Les lignes sont visibles si"
// pe.otherPlaceholder: "Comment area placeholder" => "Espace réservé pour la zone de commentaires"
// pe.rateType: "Rate type" => "Type de tarif"
// pv.true: "true" => "vrai"
// pv.false: "false" => "faux"
// pv.decimal: "decimal" => "décimal"
// pv.currency: "currency" => "monnaie"
// pv.percent: "percent" => "pour cent"
// pv.onpanel: "Start on each panel" => "Commencez sur chaque panneau"
// pv.tab: "Tabs" => "Onglets"
// pv.horizontal: "Horizontal" => "Horizontal"
// pv.vertical: "Vertical" => "Vertical"
// pv.right: "Right" => "Droite"
// pv.color: "color" => "Couleur"
// pv.date: "date" => "date"
// pv.datetime: "datetime" => "dateheure"
// pv.datetime-local: "datetime-local" => "dateheure-local"
// pv.email: "email" => "Messagerie électronique"
// pv.month: "month" => "mois"
// pv.number: "number" => "nombre"
// pv.password: "password" => "mot de passe"
// pv.range: "range" => "gamme"
// pv.tel: "tel" => "Tél"
// pv.time: "time" => "Heure"
// pv.url: "url" => "URL"
// pv.week: "week" => "semaine"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Lorsque la question ou son panneau/page devient masqué"
// clearInvisibleValues.none: "Never" => "Jamais"
// inputType.color: "Color" => "Couleur"
// inputType.date: "Date" => "Date"
// inputType.datetime-local: "Date and Time" => "Date et heure"
// inputType.email: "Email" => "Messagerie électronique"
// inputType.month: "Month" => "Mois"
// inputType.number: "Number" => "Nombre"
// inputType.password: "Password" => "Mot de passe"
// inputType.range: "Range" => "Gamme"
// inputType.tel: "Phone Number" => "Numéro de téléphone"
// inputType.time: "Time" => "Heure"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Semaine"
// pv.onNextPage: "When switching to the next page" => "Lors du passage à la page suivante"
// pv.onValueChanged: "After an answer is changed" => "Après la modification d’une réponse"
// pv.onValueChanging: "Before an answer is changed" => "Avant qu’une réponse ne soit modifiée"
// pv.standard: "Original structure" => "Structure originale"
// pv.singlePage: "All questions on a single page" => "Toutes les questions sur une seule page"
// pv.questionPerPage: "Each question on an individual page" => "Chaque question sur une page individuelle"
// pv.noPreview: "No preview" => "Pas d’aperçu"
// pv.showAllQuestions: "Show all questions" => "Afficher toutes les questions"
// pv.showAnsweredQuestions: "Show answered questions only" => "Afficher uniquement les réponses aux questions"
// pv.pages: "Completed pages" => "Pages complétées"
// pv.questions: "Answered questions" => "Questions répondues"
// pv.requiredQuestions: "Answered required questions" => "Réponses aux questions requises"
// pv.correctQuestions: "Valid answers" => "Réponses valides"
// pv.buttons: "Completed pages (button UI)" => "Pages terminées (bouton UI)"
// pv.underInput: "Under the input" => "Sous l’entrée"
// pv.underTitle: "Under the title" => "Sous le titre"
// pv.onBlur: "On blur" => "Sur le flou"
// pv.onTyping: "While typing" => "Pendant la saisie"
// pv.underRow: "Under the row" => "Sous la rangée"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Sous la ligne, un seul panneau est visible"
// showNavigationButtons.none: "Hidden" => "Caché"
// showProgressBar.off: "Hidden" => "Caché"
// showTimerPanel.none: "Hidden" => "Caché"
// showTimerPanelMode.all: "Both" => "Les deux"
// detailPanelMode.none: "Hidden" => "Caché"
// addRowButtonLocation.default: "Depends on matrix layout" => "Dépend de la disposition de la matrice"
// panelsState.default: "Users cannot expand or collapse panels" => "Les utilisateurs ne peuvent pas agrandir ou réduire les panneaux"
// panelsState.collapsed: "All panels are collapsed" => "Tous les panneaux sont réduits"
// panelsState.expanded: "All panels are expanded" => "Tous les panneaux sont agrandis"
// widthMode.auto: "Auto" => "Auto"
// widthMode.static: "Static" => "Statique"
// widthMode.responsive: "Responsive" => "Sensible"
// imageFit.none: "None" => "Aucun"
// imageFit.contain: "Contain" => "Contenir"
// imageFit.cover: "Cover" => "Couvrir"
// imageFit.fill: "Fill" => "Remplir"
// contentMode.auto: "Auto" => "Auto"
// contentMode.image: "Image" => "Image"
// contentMode.video: "Video" => "Vidéo"
// contentMode.youtube: "YouTube" => "Youtube"
// displayMode.auto: "Auto" => "Auto"
// displayMode.buttons: "Buttons" => "Boutons"
// displayMode.dropdown: "Dropdown" => "Liste déroulante"
// rateColorMode.default: "Default" => "Faire défaut"
// autoGenerate.true: "Generate" => "Générer"
// autoGenerate.false: "Enter manually" => "Saisie manuelle"
// rateType.labels: "Labels" => "Étiquettes"
// rateType.stars: "Stars" => "Étoiles"
// rateType.smileys: "Smileys" => "Smileys"
// op.and: "and" => "et"
// op.or: "or" => "ou"
// ew.modern: "Modern theme" => "Thème moderne"
// ew.default: "Default theme" => "Thème par défaut"
// ew.orange: "Orange theme" => "Thème orange"
// ew.darkblue: "Darkblue theme" => "Thème bleu foncé"
// ew.darkrose: "Darkrose theme" => "Thème Darkrose"
// ew.stone: "Stone theme" => "Thème de la pierre"
// ew.winter: "Winter theme" => "Thème d’hiver"
// ew.winterstone: "Winter-Stone theme" => "Thème Winter-Stone"
// ts.hideInvisibleElements: "Hide invisible elements" => "Masquer les éléments invisibles"
// validators.expressionvalidator: "Expression" => "Expression"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Les cookies empêchent les utilisateurs de remplir deux fois la même enquête."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Redimensionne la zone visible du champ de saisie. Veuillez utiliser le paramètre <b>Validation → Longueur maximale</b> pour limiter la longueur d’entrée."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Utilisez {0} comme espace réservé pour la valeur réelle."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Visible uniquement lorsqu’au moins une colonne a un type Total ou une expression Total."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Reportez-vous à la description de l’attribut [accept](https://www.w3schools.com/tags/att_input_accept.asp) pour plus d’informations."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Applicable uniquement aux types de cellules Radiogroup et Checkbox."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Reportez-vous à la description de l’attribut [saisie semi-automatique](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/saisie semi-automatique) pour plus d’informations."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Si vous ne définissez pas cette propriété, la réponse sera stockée dans un champ spécifié par la propriété Name."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Si la colonne spécifiée contient des valeurs identiques, l’enquête renvoie l’erreur « Valeur de clé non unique »."
// p.multiSelect: "Allow multiple selection" => "Autoriser la sélection multiple"
// p.showLabel: "Show image captions" => "Afficher les légendes des images"
// p.value: "Value" => "Valeur"
// p.tabAlign: "Tab alignment" => "Alignement des tabulations"
// p.logoFit: "Logo fit" => "Ajustement du logo"
// p.pages: "Pages" => "Pages"
// p.questions: "Questions" => "Questionne"
// p.calculatedValues: "Calculated values" => "Valeurs calculées"
// p.surveyId: "Survey id" => "ID de l’enquête"
// p.surveyPostId: "Survey post id" => "ID de l’article de l’enquête"
// p.surveyShowDataSaving: "Survey show data saving" => "L’enquête montre l’économie de données"
// p.questionDescriptionLocation: "Question description location" => "Description de la question emplacement"
// p.progressBarType: "Progress bar type" => "Type de barre de progression"
// p.showTOC: "Show TOC" => "Afficher la table des matières"
// p.tocLocation: "Toc location" => "Emplacement de Toc"
// p.questionTitlePattern: "Question title pattern" => "Modèle de titre de question"
// p.widthMode: "Width mode" => "Mode largeur"
// p.showBrandInfo: "Show brand info" => "Afficher les informations sur la marque"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Utiliser des valeurs d’affichage dans des textes dynamiques"
// p.descriptionLocation: "Description location" => "Description de l’emplacement"
// p.defaultValueExpression: "Default value expression" => "Expression de valeur par défaut"
// p.requiredIf: "Required if" => "Obligatoire si"
// p.bindings: "Bindings" => "Liaisons"
// p.renderAs: "Render as" => "Rendu en tant que"
// p.attachOriginalItems: "Attach original items" => "Joindre des éléments originaux"
// p.cellHint: "Cell hint" => "Indice de cellule"
// p.isUnique: "Is unique" => "Est unique"
// p.showInMultipleColumns: "Show in multiple columns" => "Afficher en plusieurs colonnes"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Total des chiffres de fraction maximale"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Nombre total de fractions minimales"
// p.detailElements: "Detail elements" => "Éléments de détail"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Autoriser les actions adaptatives"
// p.defaultRowValue: "Default row value" => "Valeur de ligne par défaut"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Affichage du panneau de détail lors de l’ajout"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Choix de chargement paresseux activé"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Choix de taille de page de chargement paresseux"
// p.inputFieldComponent: "Input field component" => "Composant de champ d’entrée"
// p.itemComponent: "Item component" => "Composant d’article"
// p.min: "Min" => "Min"
// p.max: "Max" => "Max"
// p.minValueExpression: "Min value expression" => "Expression de valeur min"
// p.maxValueExpression: "Max value expression" => "Expression de valeur maximale"
// p.step: "Step" => "Pas"
// p.dataList: "Data list" => "Liste de données"
// p.elements: "Elements" => "Éléments"
// p.content: "Content" => "Contenu"
// p.navigationTitle: "Navigation title" => "Titre de navigation"
// p.navigationDescription: "Navigation description" => "Description de la navigation"
// p.longTap: "Long tap" => "Appuyez longuement"
// p.autoGrow: "Auto grow" => "Croissance automatique"
// p.allowResize: "Allow resizing" => "Autoriser le redimensionnement"
// p.acceptCarriageReturn: "Accept carriage return" => "Accepter le retour chariot"
// p.displayMode: "Display mode" => "Mode d’affichage"
// p.rateType: "Rate type" => "Type de tarif"
// p.contentMode: "Content mode" => "Mode de contenu"
// p.imageFit: "Image fit" => "Ajustement de l’image"
// p.altText: "Alt text" => "Texte de remplacement"
// p.height: "Height" => "Hauteur"
// p.penColor: "Pen color" => "Couleur du stylo"
// p.backgroundColor: "Background color" => "Couleur d’arrière-plan"
// p.templateElements: "Template elements" => "Éléments de modèle"
// p.operator: "Operator" => "Opérateur"
// p.isVariable: "Is variable" => "Est variable"
// p.runExpression: "Run expression" => "Exécuter l’expression"
// p.showCaption: "Show caption" => "Afficher la légende"
// p.iconName: "Icon name" => "Nom de l’icône"
// p.iconSize: "Icon size" => "Taille de l’icône"
// p.precision: "Precision" => "Précision"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Zone de poignée de glissement matriciel"
// p.backgroundImage: "Background image" => "Image d’arrière-plan"
// p.backgroundImageFit: "Background image fit" => "Ajustement de l’image d’arrière-plan"
// p.backgroundImageAttachment: "Background image attachment" => "Pièce jointe à l’image d’arrière-plan"
// p.backgroundOpacity: "Background opacity" => "Opacité de l’arrière-plan"
// p.selectToRankEnabled: "Select to rank enabled" => "Sélectionner pour classer activé"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Sélectionner pour classer la disposition des zones"
// p.allowCameraAccess: "Allow camera access" => "Autoriser l’accès à la caméra"
// p.scaleColorMode: "Scale color mode" => "Mode de couleur de mise à l’échelle"
// p.rateColorMode: "Rate color mode" => "Évaluer le mode de couleur"
// p.templateTabTitle: "Template tab title" => "Titre de l’onglet Modèle"
// p.templateVisibleIf: "Template visible if" => "Modèle visible si"
// p.copyDisplayValue: "Copy display value" => "Copier la valeur d’affichage"
// theme.--background: "Background color" => "Couleur d’arrière-plan"
// theme.--background-dim-light: "Background dim light color" => "Couleur de lumière faible d’arrière-plan"
// theme.--primary-foreground: "Primary foreground color" => "Couleur de premier plan primaire"
// theme.--foreground: "Foreground color" => "Couleur de premier plan"
// theme.--base-unit: "Base unit" => "Unité de base"
// theme.groupAdvanced: "Advanced" => "Avancé"
// theme.themeName: "Theme" => "Thème"
// theme.isPanellessss: "Question appearance" => "Apparence de la question"
// theme.isPanellessPanels: "Default" => "Faire défaut"
// theme.isPanellessLightweight: "Without Panels" => "Sans panneaux"
// theme.themePaletteLight: "Light" => "Lumière"
// theme.themePaletteDark: "Dark" => "Sombre"
// theme.primaryColor: "Accent color" => "Couleur d’accentuation"
// theme.primaryDefaultColor: "Default" => "Faire défaut"
// theme.primaryDarkColor: "Hover" => "Flotter"
// theme.primaryLightColor: "Selected" => "Sélectionné"
// theme.backgroundDimColor: "Background color" => "Couleur d’arrière-plan"
// theme.backgroundImage: "Background image" => "Image d’arrière-plan"
// theme.backgroundImageFitAuto: "Auto" => "Auto"
// theme.backgroundImageFitCover: "Cover" => "Couvrir"
// theme.backgroundImageFitContain: "Contain" => "Contenir"
// theme.backgroundOpacity: "Opacity" => "Opacité"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Fixe"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Faire défiler"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacité de l’arrière-plan du panneau"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opacité de l’arrière-plan de la question"
// theme.questionPanel: "Panel background and corner radius" => "Arrière-plan du panneau et rayon d’angle"
// theme.questionTitle: "Question title font" => "Police du titre de la question"
// theme.questionDescription: "Question description font" => "Police de description de la question"
// theme.editorPanel: "Input element" => "Elément d’entrée"
// theme.editorFont: "Input element font" => "Police de l’élément d’entrée"
// theme.backcolor: "Default background" => "Arrière-plan par défaut"
// theme.hovercolor: "Hover background" => "Arrière-plan du survol"
// theme.borderDecoration: "Border decoration" => "Décoration de bordure"
// theme.accentBackground: "Accent background" => "Arrière-plan d’accent"
// theme.accentForeground: "Accent foreground" => "Accent au premier plan"
// theme.primaryForecolor: "Default color" => "Couleur par défaut"
// theme.primaryForecolorLight: "Disabled color" => "Couleur désactivée"
// theme.linesColors: "Minor line colors" => "Couleurs de trait mineures"
// theme.borderDefault: "Darker" => "Sombre"
// theme.borderLight: "Lighter" => "Briquet"
// theme.fontFamily: "Font family" => "Famille de polices"
// theme.fontSize: "Font size" => "Taille de police"
// theme.color: "Color" => "Couleur"
// theme.size: "Size" => "Taille"
// theme.fontWeightRegular: "Regular" => "Régulier"
// theme.fontWeightHeavy: "Heavy" => "Lourd"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-gras"
// theme.fontWeightBold: "Bold" => "Audacieux"
// theme.scale: "Scale" => "Écaille"
// theme.cornerRadius: "Corner radius" => "Rayon d’angle"
// theme.surveyTitleFont: "Survey title font" => "Police du titre de l’enquête"
// theme.pageTitle: "Page title font" => "Police du titre de la page"
// theme.pageDescription: "Page description font" => "Police de description de page"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Ajouter un effet d’ombre"
// theme.opacity: "Opacity" => "Opacité"
// theme.boxShadowBlur: "Blur" => "Brouiller"
// theme.boxShadowSpread: "Spread" => "Propagation"
// theme.boxShadowDrop: "Drop" => "Goutte"
// theme.boxShadowInner: "Inner" => "Intérieur"
// theme.questionShadow: "Shadow effects" => "Effets d’ombre"
// theme.editorShadow: "Input element shadow effects" => "Effets d’ombre de l’élément d’entrée"
// names.default: "Default" => "Faire défaut"
// names.contrast: "Contrast" => "Contraste"
// names.plain: "Plain" => "Plaine"
// names.simple: "Simple" => "Simple"
// names.blank: "Blank" => "Blanc"
// names.double: "Double" => "Double"
// names.bulk: "Bulk" => "Vrac"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Enjoué"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Sarcelle"
// colors.blue: "Blue" => "Bleu"
// colors.purple: "Purple" => "Pourpre"
// colors.orchid: "Orchid" => "Orchidée"
// colors.tulip: "Tulip" => "Tulipe"
// colors.brown: "Brown" => "Marron"
// colors.green: "Green" => "Vert"
// names.sharp: "Sharp" => "Tranchant"
// names.borderless: "Borderless" => "Borderless"
// names.flat: "Flat" => "Plat"
// names.doubleborder: "Double Border" => "Double bordure"
// names.layered: "Layered" => "Couches"
// names.solid: "Solid" => "Solide"
// names.threedimensional: "3D" => ".3D"

// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Êtes-vous certain de vouloir supprimer toutes les chaînes pour cette langue ?"
// ed.themeResetButton: "Reset theme settings to default" => "Réinitialiser les paramètres de thème par défaut"
// theme.placeholderColor: "Placeholder color" => "Couleur de l’espace réservé"
// ed.themeSettings: "Theme Settings" => "Paramètres du thème"
// ed.themeSettingsTooltip: "Open theme settings" => "Ouvrir les paramètres du thème"
// pe.resetToDefaultCaption: "Reset" => "Réinitialisation"
// pv.file: "Local files" => "Fichiers locaux"
// pv.camera: "Camera" => "Caméra"
// pv.file-camera: "Local files or camera" => "Fichiers locaux ou caméra"
// ed.translateUsigAI: "Auto-translate All" => "Traduire automatiquement tout"
// ed.translationDialogTitle: "Untranslated strings" => "Chaînes non traduites"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Veuillez saisir au moins {0} éléments"
// lg.question_resetValueName: "Reset question value" => "Réinitialiser la valeur de la question"
// lg.column_resetValue: "Reset column value" => "Réinitialiser la valeur de la colonne"
// pe.markRequired: "Mark as required" => "Marquer au besoin"
// pe.removeRequiredMark: "Remove the required mark" => "Supprimer la marque requise"
// p.resetValueIf: "Reset value if" => "Réinitialiser la valeur si"
// lg.question_setValueName: "Set question value" => "Définir la valeur de la question"
// lg.column_resetValueName: "Reset column value" => "Réinitialiser la valeur de la colonne"
// lg.column_setValueName: "Set column value" => "Définition de la valeur de colonne"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Expression dont le résultat sera affecté à la question cible."
// p.setValueIf: "Set value if" => "Définir la valeur si"
// theme.header: "Header" => "En-tête"
// theme.backgroundImageFitFill: "Stretch" => "Étirer"
// theme.backgroundImageFitTile: "Tile" => "Carreau"
// theme.headerView: "View" => "Vue"
// theme.headerViewBasic: "Basic" => "Basique"
// theme.headerViewAdvanced: "Advanced" => "Avancé"
// theme.headerInheritWidthFrom: "Content area width" => "Largeur de la zone de contenu"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Identique à l’enquête"
// theme.headerInheritWidthFromPage: "Fit to page" => "Ajuster à la page"
// theme.headerTextAreaWidth: "Text width" => "Largeur du texte"
// theme.headerBackgroundColorSwitch: "Background color" => "Couleur d’arrière-plan"
// theme.headerBackgroundColorNone: "None" => "Aucun"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Couleur d’accentuation"
// theme.headerBackgroundColorCustom: "Custom" => "Coutume"
// theme.horizontalAlignmentLeft: "Left" => "Gauche"
// theme.horizontalAlignmentCenter: "Center" => "Centre"
// theme.horizontalAlignmentRight: "Right" => "Droite"
// theme.verticalAlignmentTop: "Top" => "Retour au début"
// theme.verticalAlignmentMiddle: "Middle" => "Milieu"
// theme.verticalAlignmentBottom: "Bottom" => "Fond"
// theme.headerTitlePosition: "Title Position" => "Position du titre"
// theme.headerDescriptionPosition: "Description Position" => "Description du poste"
// lg.question_resetValueText: "reset value for question: {0}" => "Réinitialisez la valeur pour la question : {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Attribuer une valeur : {1} à la question : {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Réinitialiser la valeur de la cellule pour la colonne : {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Affecter la valeur de la cellule : {1} à la colonne : {0}"
// ed.surveyJsonExportButton: "Export" => "Exportation"
// ed.surveyJsonImportButton: "Import" => "Importation"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Copier dans le Presse-papiers"
// pe.filePlaceholder: "File placeholder text" => "Texte de l’espace réservé au fichier"
// pe.photoPlaceholder: "Photo placeholder text" => "Texte de l’espace réservé à la photo"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Texte de l’espace réservé au fichier ou à la photo"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "S’applique lorsque le « Type de source » est « Fichiers locaux » ou lorsque l’appareil photo n’est pas disponible"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "S’applique lorsque le «Type de source» est «Appareil photo»."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "S’applique lorsque le «Type de source» est «Fichiers locaux ou appareil photo»."
// theme.background: "Background" => "Arrière-plan"
// theme.appearance: "Appearance" => "Apparence"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Voulez-vous vraiment réinitialiser le thème ? Toutes vos personnalisations seront perdues."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Oui, réinitialisez le thème"
// theme.headerInheritWidthFromContainer: "Fit to container" => "S’adapte au conteneur"
// signaturepad.showPlaceholder: "Show the placeholder" => "Afficher l’espace réservé"
// signaturepad.placeholder: "Placeholder text" => "Texte d’espace réservé"
// theme.surveyDescriptionFont: "Survey description font" => "Police de description de l’enquête"

// ed.prevFocus: "Focus previous" => "Mise au point précédente"
// ed.nextFocus: "Focus next" => "Focus suivant"
// ed.saveTheme: "Save Theme" => "Enregistrer le thème"
// ed.saveThemeTooltip: "Save Theme" => "Enregistrer le thème"
// lg.page_requireName: "Make page required" => "Rendre la page obligatoire"
// lg.panel_requireName: "Make page required" => "Rendre la page obligatoire"
// signaturepad.signatureWidth: "Signature area width" => "Largeur de la zone de signature"
// signaturepad.signatureHeight: "Signature area height" => "Hauteur de la zone de signature"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Mise à l’échelle automatique de la zone de signature"
// signaturepad.penMinWidth: "Minimum pen width" => "Largeur minimale du stylo"
// signaturepad.penMaxWidth: "Maximum pen width" => "Largeur maximale du stylo"
// theme.logoPosition: "Logo position" => "Position du logo"
// ed.propertyGridNoResultsFound: "No results found" => "Aucun résultat trouvé"
// pv.leftRight: "Left and right" => "Gauche et droite"
// p.sourceType: "Source type" => "Type de source"
// p.fitToContainer: "Fit to container" => "S’adapte au conteneur"
// p.setValueExpression: "Set value expression" => "Définir l’expression de valeur"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Les choix sont chargés à partir d’un service Web."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Accédez aux paramètres"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Aperçu des options de choix chargées"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Éviter les réponses dupliquées dans les lignes"
// theme.advancedMode: "Advanced mode" => "Mode avancé"
// theme.backgroundCornerRadius: "Background and corner radius" => "Arrière-plan et rayon d’angle"
// theme.colorsTitle: "Colors" => "Couleurs"
// theme.font: "Font" => "Police"
// theme.lines: "Lines" => "Lignes"
// theme.titleFont: "Title font" => "Police du titre"
// theme.descriptionFont: "Description font" => "Police de description"
// theme.shadow: "Shadow effects" => "Effets d’ombre"
// ed.translateUsigAIFrom: "Translate from: " => "Traduction: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Autoriser l’option Refuser de répondre"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Autoriser l’option Ne sait pas"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Autoriser l’option Refuser de répondre"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Autoriser l’option Ne sait pas"
// pv.contain: "Contain" => "Contenir"
// pv.cover: "Cover" => "Couvrir"
// pv.fill: "Fill" => "Remplir"

// pe.transposeData: "Transpose rows to columns" => "Transposer des lignes en colonnes"
// layout.panel: "Layout" => "Disposition"
// layout.question: "Layout" => "Disposition"
// layout.base: "Layout" => "Disposition"
// panel.name: "Panel name" => "Nom du panneau"
// panel.title: "Panel title" => "Titre du panneau"
// panel.description: "Panel description" => "Description du panneau"
// panel.visibleIf: "Make the panel visible if" => "Rendre le panneau visible si"
// panel.requiredIf: "Make the panel required if" => "Rendez le panneau requis si"
// panel.questionOrder: "Question order within the panel" => "Ordre des questions au sein du panel"
// panel.startWithNewLine: "Display the panel on a new line" => "Afficher le panneau sur une nouvelle ligne"
// panel.state: "Panel collapse state" => "État de réduction du panneau"
// panel.width: "Inline panel width" => "Largeur du panneau en ligne"
// panel.minWidth: "Minimum panel width" => "Largeur minimale du panneau"
// panel.maxWidth: "Maximum panel width" => "Largeur maximale du panneau"
// paneldynamic.name: "Panel name" => "Nom du panneau"
// paneldynamic.title: "Panel title" => "Titre du panneau"
// paneldynamic.description: "Panel description" => "Description du panneau"
// paneldynamic.visibleIf: "Make the panel visible if" => "Rendre le panneau visible si"
// paneldynamic.requiredIf: "Make the panel required if" => "Rendez le panneau requis si"
// paneldynamic.page: "Move the panel to page" => "Déplacer le panneau vers la page"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Afficher le panneau sur une nouvelle ligne"
// paneldynamic.state: "Panel collapse state" => "État de réduction du panneau"
// paneldynamic.width: "Inline panel width" => "Largeur du panneau en ligne"
// paneldynamic.minWidth: "Minimum panel width" => "Largeur minimale du panneau"
// paneldynamic.maxWidth: "Maximum panel width" => "Largeur maximale du panneau"
// paneldynamic.templateDescription: "Panel description pattern" => "Modèle de description du panneau"
// paneldynamic.templateTitle: "Panel title pattern" => "Modèle de titre de panneau"
// paneldynamic.noEntriesText: "Empty panel text" => "Texte du panneau vide"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Modèle de titre de tabulation"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Rendre un panneau individuel visible si :"
// paneldynamic.hideNumber: "Hide the panel number" => "Masquer le numéro du panneau"
// paneldynamic.titleLocation: "Panel title alignment" => "Alignement du titre du panneau"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Alignement de la description du panneau"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Alignement du titre de la question"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Alignement des messages d’erreur"
// paneldynamic.newPanelPosition: "New panel location" => "Nouvel emplacement du panneau"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Éviter les réponses en double à la question suivante"
// question.name: "Question name" => "Nom de la question"
// question.title: "Question title" => "Titre de la question"
// question.description: "Question description" => "Description de la question"
// question.visibleIf: "Make the question visible if" => "Rendez la question visible si"
// question.requiredIf: "Make the question required if" => "Faites en sorte que la question soit obligatoire si"
// question.state: "Question box collapse state" => "État de réduction de la zone de question"
// question.hideNumber: "Hide the question number" => "Masquer le numéro de la question"
// question.titleLocation: "Question title alignment" => "Alignement du titre de la question"
// question.descriptionLocation: "Question description alignment" => "Alignement de la description de la question"
// question.errorLocation: "Error message alignment" => "Alignement des messages d’erreur"
// question.indent: "Increase the inner indent" => "Augmenter le retrait intérieur"
// question.width: "Inline question width" => "Largeur de la question en ligne"
// question.minWidth: "Minimum question width" => "Largeur minimale de la question"
// question.maxWidth: "Maximum question width" => "Largeur maximale de la question"
// question.textUpdateMode: "Update input field value" => "Mettre à jour la valeur du champ de saisie"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Afficher le bouton Effacer dans la zone de signature"
// signaturepad.penColor: "Stroke color" => "Couleur du trait"
// comment.rows: "Input field height (in lines)" => "Hauteur du champ de saisie (en lignes)"
// expression.name: "Expression name" => "Nom de l’expression"
// expression.title: "Expression title" => "Titre de l’expression"
// expression.description: "Expression description" => "Description de l’expression"
// expression.expression: "Expression" => "Expression"
// trigger.expression: "Expression" => "Expression"
// calculatedvalue.expression: "Expression" => "Expression"
// survey.description: "Survey description" => "Description de l’enquête"
// page.name: "Page name" => "Nom de la page"
// page.description: "Page description" => "Description de la page"
// page.visibleIf: "Make the page visible if" => "Rendre la page visible si"
// page.requiredIf: "Make the page required if" => "Rendez la page obligatoire si"
// page.questionOrder: "Question order on the page" => "Ordre des questions sur la page"
// matrixdropdowncolumn.name: "Column name" => "Nom de la colonne"
// matrixdropdowncolumn.title: "Column title" => "Titre de la colonne"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Éviter les réponses en double"
// matrixdropdowncolumn.width: "Column width" => "Largeur de la colonne"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Largeur minimale de la colonne"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Hauteur du champ de saisie (en lignes)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Rendre la colonne visible si"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Rendez la colonne obligatoire si"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Chaque option dans une colonne distincte"
// multipletextitem.name: "Name" => "Nom"
// multipletextitem.title: "Title" => "Titre"
// pe.rateDescriptionLocation: "Label alignment" => "Alignement des étiquettes"
// pe.cellErrorLocation: "Cell error message alignment" => "Alignement des messages d’erreur de cellule"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Vous n’avez pas encore de colonnes"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Vous n’avez pas encore de lignes"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Vous n’avez pas encore de règles de validation"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Vous n’avez pas encore de variables personnalisées"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Vous n’avez pas encore de déclencheurs"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Vous n’avez pas encore de liens"
// pe.addNew@columns: "Add new column" => "Ajouter une nouvelle colonne"
// pe.addNew@rows: "Add new row" => "Ajouter une nouvelle ligne"
// pe.addNew@validators: "Add new rule" => "Ajouter une nouvelle règle"
// pe.addNew@calculatedValues: "Add new variable" => "Ajouter une nouvelle variable"
// pe.addNew@triggers: "Add new trigger" => "Ajouter un nouveau déclencheur"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Ajouter une nouvelle URL"
// choicesbyurl.url: "Web service's URL" => "URL du service Web"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Afficher les titres des pages dans la barre de progression"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Afficher les numéros de page dans la barre de progression"
// itemvalue.visibleIf: "Make the option visible if" => "Rendre l’option visible si"
// itemvalue.enableIf: "Make the option selectable if" => "Rendez l’option sélectionnable si"
// panel.layout: "Panel Layout" => "Disposition du panneau"
// tabs.questionSettings: "Question Settings" => "Paramètres de la question"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Ex. : https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Ex. : categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Ex. : a)"
// pe.width_placeholder: "Ex.: 6in" => "Ex. : 6po"
// pe.minWidth_placeholder: "Ex.: 600px" => "Ex. : 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Ex. : 50 %"
// pv.selected: "Selected" => "Sélectionné"
// pv.unselected: "Unselected" => "Non sélectionné"
// pv.center: "Center" => "Centre"
// pv.middle: "Middle" => "Milieu"
// pv.next: "Next" => "Prochain"
// pv.last: "Last" => "Dernier"
// clearIfInvisible.none: "Never" => "Jamais"
// questionsOnPageMode.standard: "Original structure" => "Structure d’origine"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Afficher toutes les questions sur une seule page"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Afficher une seule question par page"
// pv.auto: "Auto" => "Auto"
// panelsState.firstExpanded: "First expanded" => "D’abord élargi"
// rateColorMode.scale: "Scale" => "Écaille"
// scaleColorMode.monochrome: "Monochrome" => "Monochrome"
// scaleColorMode.colored: "Colored" => "Coloré"
// state.default: "Locked" => "Verrouillé"
// showQuestionNumbers.default: "Auto-numbering" => "Numérotation automatique"
// showQuestionNumbers.on: "Auto-numbering" => "Numérotation automatique"
// showQuestionNumbers.onPage: "Reset on each page" => "Réinitialisation sur chaque page"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Réinitialisation sur chaque panneau"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Réinitialisation sur chaque panneau"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Continuez tout au long de l’enquête"
// showQuestionNumbers.off: "No numbering" => "Pas de numérotation"
// descriptionLocation.underTitle: "Under the question title" => "Sous le titre de la question"
// descriptionLocation.underInput: "Under the input field" => "Sous le champ de saisie"
// selectToRankAreasLayout.horizontal: "Next to choices" => "À côté des choix"
// selectToRankAreasLayout.vertical: "Above choices" => "Choix ci-dessus"
// displayStyle.decimal: "Decimal" => "Décimal"
// displayStyle.currency: "Currency" => "Monnaie"
// displayStyle.percent: "Percentage" => "Pourcentage"
// displayStyle.date: "Date" => "Date"
// totalDisplayStyle.decimal: "Decimal" => "Décimal"
// totalDisplayStyle.currency: "Currency" => "Monnaie"
// totalDisplayStyle.percent: "Percentage" => "Pourcentage"
// totalDisplayStyle.date: "Date" => "Date"
// rowOrder.initial: "Original" => "Langue source"
// questionOrder.initial: "Original" => "Langue source"
// showProgressBar.aboveheader: "Above the header" => "Au-dessus de l’en-tête"
// showProgressBar.belowheader: "Below the header" => "Sous l’en-tête"
// pv.sum: "Sum" => "Somme"
// pv.count: "Count" => "Compter"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Contient"
// searchMode.startsWith: "Starts with" => "Commence par"
// panel.name: "A panel ID that is not visible to respondents." => "Un ID de panel qui n’est pas visible par les personnes interrogées."
// panel.description: "Type a panel subtitle." => "Saisissez un sous-titre de panneau."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui détermine la visibilité du panneau."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule du panneau."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "S’applique à toutes les questions de ce panneau. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour les questions individuelles. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Définit l’emplacement d’un message d’erreur par rapport à toutes les questions du panneau. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Conserve l’ordre d’origine des questions ou les rend aléatoires. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête."
// panel.page: "Repositions the panel to the end of a selected page." => "Repositionne le panneau à la fin d’une page sélectionnée."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Ajoute un espace ou une marge entre le contenu du panneau et le bord gauche de la zone du panneau."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Désélectionnez cette option pour afficher le panneau sur une seule ligne avec la question ou le panneau précédent. Ce paramètre ne s’applique pas si le panneau est le premier élément de votre formulaire."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Choisissez parmi : « Développé » - le panneau s’affiche en entier et peut être réduit ; « Réduit » - le panneau n’affiche que le titre et la description et peut être développé ; « Verrouillé » - le panneau est affiché en entier et ne peut pas être réduit."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Définit la largeur du panneau par rapport aux autres éléments de topographie de la même ligne. Accepte les valeurs CSS (px, %, in, pt, etc.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Un ID de panel qui n’est pas visible par les personnes interrogées."
// paneldynamic.description: "Type a panel subtitle." => "Saisissez un sous-titre de panneau."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui détermine la visibilité du panneau."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule du panneau."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "S’applique à toutes les questions de ce panneau. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour les questions individuelles. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Définit l’emplacement d’un message d’erreur par rapport à une question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Définit l’emplacement d’un message d’erreur par rapport à toutes les questions du panneau. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Repositionne le panneau à la fin d’une page sélectionnée."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Ajoute un espace ou une marge entre le contenu du panneau et le bord gauche de la zone du panneau."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Désélectionnez cette option pour afficher le panneau sur une seule ligne avec la question ou le panneau précédent. Ce paramètre ne s’applique pas si le panneau est le premier élément de votre formulaire."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Choisissez parmi : « Développé » - le panneau s’affiche en entier et peut être réduit ; « Réduit » - le panneau n’affiche que le titre et la description et peut être développé ; « Verrouillé » - le panneau est affiché en entier et ne peut pas être réduit."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Définit la largeur du panneau par rapport aux autres éléments de topographie de la même ligne. Accepte les valeurs CSS (px, %, in, pt, etc.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Saisissez un modèle pour les titres de panneau dynamiques. Utilisez {panelIndex} pour la position générale du panneau et {visiblePanelIndex} pour son ordre parmi les panneaux visibles. Insérez ces espaces réservés dans le motif pour ajouter une numérotation automatique."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Saisissez un modèle pour les titres d’onglets. Utilisez {panelIndex} pour la position générale d’un panneau et {visiblePanelIndex} pour son ordre parmi les panneaux visibles. Insérez ces espaces réservés dans le motif pour ajouter une numérotation automatique."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Ce paramètre vous permet de contrôler la visibilité des panneaux individuels dans le panneau dynamique. Utilisez l’espace réservé '{panel}' pour référencer le panneau actuel dans votre expression."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Ce paramètre est automatiquement hérité par toutes les questions de ce panneau. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour les questions individuelles. L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Haut » par défaut)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "L’option « Hériter » applique le paramètre au niveau de la page (s’il est défini) ou au niveau de l’enquête (« Sous le titre du panneau » par défaut)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Définit la position d’un panneau nouvellement ajouté. Par défaut, de nouveaux panneaux sont ajoutés à la fin. Sélectionnez « Suivant » pour insérer un nouveau panneau après le panneau actuel."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplique les réponses du dernier panneau et les attribue au panneau dynamique suivant."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Faites référence à un nom de question pour demander à un utilisateur de fournir une réponse unique à cette question dans chaque panneau."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Ce paramètre vous permet d’attribuer une valeur de réponse par défaut en fonction d’une expression. L’expression peut inclure des calculs de base - '{q1_id} + {q2_id}', des expressions booléennes, telles que '{age} > 60', et des fonctions : 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. La valeur déterminée par cette expression sert de valeur par défaut initiale qui peut être remplacée par la saisie manuelle d’une personne interrogée."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine le moment où l’entrée d’une personne interrogée est réinitialisée à la valeur basée sur l’expression de valeur par défaut ou l’expression de valeur définie ou à la valeur de la réponse par défaut (si l’une ou l’autre est définie)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine quand exécuter l’expression « Définir la valeur » et attribuer dynamiquement la valeur résultante en tant que réponse."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Spécifiez une expression qui définit la valeur à définir lorsque les conditions de la règle « Définir la valeur si » sont remplies. L’expression peut inclure des calculs de base - '{q1_id} + {q2_id}', des expressions booléennes, telles que '{age} > 60', et des fonctions : 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. La valeur déterminée par cette expression peut être remplacée par la saisie manuelle d’un répondant."
// question.name: "A question ID that is not visible to respondents." => "ID de question qui n’est pas visible par les personnes interrogées."
// question.description: "Type a question subtitle." => "Saisissez un sous-titre de question."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine la visibilité de la question."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule pour la question."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’avancement ou la soumission de l’enquête à moins que la question n’ait reçu une réponse."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Désélectionnez cette option pour afficher la question sur une seule ligne avec la question ou le panneau précédent. Ce paramètre ne s’applique pas si la question est le premier élément de votre formulaire."
// question.page: "Repositions the question to the end of a selected page." => "Repositionne la question à la fin d’une page sélectionnée."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Choisissez parmi : « Développé » - la boîte de questions s’affiche en entier et peut être réduite ; « Réduit » - la boîte de question n’affiche que le titre et la description et peut être développée ; « Verrouillé » - la boîte de questions s’affiche en entier et ne peut pas être réduite."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Remplace les règles d’alignement des titres définies au niveau d’un panneau, d’une page ou d’une enquête. L’option « Hériter » applique tous les paramètres de niveau supérieur (s’ils sont définis) ou tous les paramètres de niveau d’enquête (« Top » par défaut)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "L’option « Hériter » applique le paramètre au niveau de l’enquête (« Sous le titre de la question » par défaut)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Définit l’emplacement d’un message d’erreur par rapport à la question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Top » par défaut)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Ajoute un espace ou une marge entre le contenu de la question et la bordure gauche de la zone de question."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Définit la largeur de la question par rapport aux autres éléments de l’enquête sur la même ligne. Accepte les valeurs CSS (px, %, in, pt, etc.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Utilisez l’icône de la baguette magique pour définir une règle de validation pour la question."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Choisissez parmi : « En cas de perte de focus » - la valeur est mise à jour lorsque le champ de saisie perd le focus ; « Pendant la saisie » - la valeur est mise à jour en temps réel, au fur et à mesure que les utilisateurs tapent. L’option « Hériter » applique le paramètre au niveau de l’enquête (« En cas de perte de focus » par défaut)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Vous pouvez utiliser n’importe quel service Web comme source de données pour les questions à choix multiples. Pour renseigner les valeurs de choix, entrez l’URL du service fournissant les données."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Opération de comparaison permettant de filtrer la liste déroulante."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Définit la largeur de la zone de signature affichée et l’image résultante."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Définit la hauteur de la zone de signature affichée et de l’image résultante."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Sélectionnez cette option si vous souhaitez que la zone de signature occupe tout l’espace disponible dans la zone de question tout en conservant le format d’image 3 :2 par défaut. Lorsque des valeurs de largeur et de hauteur personnalisées sont définies, le paramètre conserve les proportions de ces dimensions."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Ajuste la hauteur de l’image dans les résultats de l’enquête."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Ajuste la largeur de l’image dans les résultats de l’enquête."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Remplace les valeurs de hauteur minimale et maximale."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Remplace les valeurs de largeur minimale et maximale."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "« Valeur » sert d’ID d’élément utilisé dans les règles conditionnelles ; La mention « Texte » s’affiche pour les personnes interrogées."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Ce paramètre ne redimensionne que le champ de saisie et n’affecte pas la largeur de la zone de question. Pour limiter la longueur d’entrée acceptée, reportez-vous à <b>Validation → Limite maximale de caractères</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Définit le nombre de lignes affichées dans le champ de saisie. Si l’entrée occupe plus de lignes, la barre de défilement apparaîtra."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Choisissez entre : « Modifiable » - permet aux personnes interrogées de remplir votre sondage ; « Lecture seule » - désactive l’édition de formulaire."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "ID de colonne qui n’est pas visible par les personnes interrogées."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Lorsque cette option est activée pour une colonne, une personne interrogée doit fournir une réponse unique pour chaque question de cette colonne."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Définit le nombre de lignes affichées dans le champ de saisie. Si l’entrée occupe plus de lignes, la barre de défilement apparaîtra."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui détermine la visibilité des colonnes."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule de la colonne."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Lorsque cette option est sélectionnée, une colonne individuelle est créée pour chaque option de choix."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Choisissez parmi : « Statique » - définit une largeur fixe ; « Responsive » - permet à l’enquête d’occuper toute la largeur de l’écran ; « Auto » - s’applique à l’un ou l’autre des deux en fonction des types de questions utilisés."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Collez un lien d’image (aucune limite de taille) ou cliquez sur l’icône de dossier pour parcourir un fichier à partir de votre ordinateur (jusqu’à 64 Ko)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Définit la largeur d’un logo en unités CSS (px, %, in, pt, etc.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Définit une hauteur de logo en unités CSS (px, %, in, pt, etc.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Choisissez parmi : « Aucun » - l’image conserve sa taille d’origine ; « Contenir » - l’image est redimensionnée pour s’adapter tout en conservant son rapport hauteur/largeur ; « Couverture » - l’image remplit toute la boîte tout en conservant son rapport hauteur/largeur ; « Remplir » - l’image est étirée pour remplir la boîte sans conserver son rapport hauteur/largeur."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Définit la visibilité et l’emplacement des boutons de navigation sur une page."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Définit la visibilité et l’emplacement d’une barre de progression. La valeur « Auto » affiche la barre de progression au-dessus ou au-dessous de l’en-tête de l’enquête."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Activez la page d’aperçu avec toutes les questions ou les questions auxquelles on a répondu uniquement."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "S’applique à toutes les questions de l’enquête. Ce paramètre peut être remplacé par des règles d’alignement des titres aux niveaux inférieurs : panneau, page ou question. Un paramètre de niveau inférieur remplacera ceux d’un niveau supérieur."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Symbole ou séquence de symboles indiquant qu’une réponse est requise."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Entrez un chiffre ou une lettre avec laquelle vous souhaitez commencer la numérotation."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Définit l’emplacement d’un message d’erreur par rapport à la question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Sélectionnez cette option si vous souhaitez que le premier champ de saisie de chaque page soit prêt pour la saisie de texte."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Conserve l’ordre d’origine des questions ou les rend aléatoires. L’effet de ce paramètre n’est visible que dans l’onglet Aperçu."
// pehelp.maxTextLength: "For text entry questions only." => "Pour les questions de saisie de texte uniquement."
// pehelp.maxCommentLength: "For question comments only." => "Pour les commentaires sur les questions seulement."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Indiquez si vous souhaitez que les commentaires de question et les questions de texte long augmentent automatiquement en hauteur en fonction de la longueur du texte saisi."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Pour les questions, les commentaires et les questions de texte long uniquement."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Les variables personnalisées servent de variables intermédiaires ou auxiliaires utilisées dans les calculs de formulaire. Ils prennent les données des répondants comme valeurs sources. Chaque variable personnalisée a un nom unique et une expression sur laquelle elle est basée."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Sélectionnez cette option si vous souhaitez que la valeur calculée de l’expression soit enregistrée avec les résultats de l’enquête."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Un déclencheur est un événement ou une condition qui est basé sur une expression. Une fois que l’expression est évaluée à « true », un déclencheur déclenche une action. Une telle action peut éventuellement avoir une question cible qu’elle affecte."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Choisissez d’effacer ou non les valeurs pour les questions masquées par la logique conditionnelle et quand le faire."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Choisissez parmi : « En cas de perte de focus » - la valeur est mise à jour lorsque le champ de saisie perd le focus ; « Pendant la saisie » - la valeur est mise à jour en temps réel, au fur et à mesure que les utilisateurs tapent."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "La valeur de gauche sert d’ID de colonne utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "La valeur de gauche sert d’ID de ligne utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepte les valeurs CSS (px, %, in, pt, etc.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepte les valeurs CSS (px, %, in, pt, etc.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Définit l’emplacement d’un message d’erreur par rapport à une cellule dont l’entrée n’est pas valide. L’option « Hériter » applique le paramètre de la propriété « Alignement du message d’erreur »."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Lorsque la propriété « Empêcher les réponses en double » est activée, un répondant qui tente de soumettre une entrée en double recevra le message d’erreur suivant."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Permet de calculer des valeurs totales en fonction d’une expression. L’expression peut inclure des calculs de base ('{q1_id} + {q2_id}'), des expressions booléennes ('{age} > 60') et des fonctions ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Déclenche une invite vous demandant de confirmer la suppression de ligne."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Duplique les réponses de la dernière ligne et les attribue à la ligne dynamique suivante ajoutée."
// pehelp.description: "Type a subtitle." => "Saisissez un sous-titre."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Choisissez une langue pour commencer à créer votre sondage. Pour ajouter une traduction, passez à une nouvelle langue et traduisez le texte original ici ou dans l’onglet Traductions."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Définit l’emplacement d’une section de détails par rapport à une ligne. Choisissez parmi : « Aucun » - aucune extension n’est ajoutée ; « Sous la ligne » - un développement de ligne est placé sous chaque ligne de la matrice ; « Sous la ligne, afficher un seul développement de ligne » - un développement est affiché sous une seule ligne, les développements de ligne restants sont réduits."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Choisissez parmi : « Aucun » - l’image conserve sa taille d’origine ; « Contenir » - l’image est redimensionnée pour s’adapter tout en conservant son rapport hauteur/largeur ; « Couverture » - l’image remplit toute la boîte tout en conservant son rapport hauteur/largeur ; « Remplir » - l’image est étirée pour remplir la boîte sans conserver son rapport hauteur/largeur."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Augmente progressivement la hauteur du champ de saisie au fur et à mesure de la saisie des données. Remplace le paramètre « Hauteur du champ de saisie (en lignes) »."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "La poignée de redimensionnement (ou poignée) apparaît dans le coin et peut être déplacée pour modifier la taille du champ de saisie."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Intervalle de temps en secondes après lequel l’enquête passe automatiquement à la page de remerciement."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Intervalle de temps en secondes après lequel l’enquête passe automatiquement à la page suivante."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Intervalle de temps en secondes après lequel l’enquête passe automatiquement à la page suivante."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine la visibilité de la page."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui désactive le mode lecture seule de la page."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilisez l’icône en forme de baguette magique pour définir une règle conditionnelle qui empêche l’envoi d’un sondage à moins qu’au moins une question imbriquée n’ait une réponse."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "S’applique à toutes les questions de cette page. Si vous souhaitez remplacer ce paramètre, définissez des règles d’alignement des titres pour des questions ou des panneaux individuels. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Top » par défaut)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Définit l’emplacement d’un message d’erreur par rapport à la question dont l’entrée n’est pas valide. Choisissez entre : « Haut » - un texte d’erreur est placé en haut de la zone de question ; « Bas » - un texte d’erreur est placé en bas de la zone de question. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Top » par défaut)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Conserve l’ordre d’origine des questions ou les rend aléatoires. L’option « Hériter » applique le paramètre au niveau de l’enquête (« Original » par défaut). L’effet de ce paramètre n’est visible que dans l’onglet Aperçu."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Définit la visibilité des boutons de navigation sur la page. L’option « Hériter » applique le paramètre au niveau de l’enquête, qui est par défaut « Visible »."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Choisissez parmi : « Verrouillé » - les utilisateurs ne peuvent pas développer ou réduire les panneaux ; « Réduire tout » - tous les panneaux commencent dans un état réduit ; « Développer tout » - tous les panneaux commencent dans un état développé ; « Premier développé » - seul le premier panneau est initialement développé."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Entrez un nom de propriété partagée dans le tableau d’objets qui contient les URL de fichier image ou vidéo que vous souhaitez afficher dans la liste de choix."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "La valeur de gauche sert d’ID d’élément utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées."
// pehelp.title: "Type a user-friendly title to display." => "Saisissez un titre convivial à afficher."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Garantit que les utilisateurs ne répondront pas à l’enquête tant que les fichiers n’auront pas été téléchargés."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepte les valeurs CSS (px, %, in, pt, etc.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepte les valeurs CSS (px, %, in, pt, etc.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Accepte les valeurs CSS (px, %, in, pt, etc.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Dans les types de questions à sélection unique et multiple, chaque option de choix a un ID et une valeur d’affichage. Lorsqu’il est sélectionné, ce paramètre affiche une valeur d’affichage au lieu d’une valeur d’ID dans les questions HTML et les titres et descriptions dynamiques des éléments d’enquête."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Choisissez d’effacer ou non les valeurs de question masquées par la logique conditionnelle et quand le faire. L’option « Hériter » applique le paramètre au niveau de l’enquête (« À la fin de l’enquête » par défaut)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Choisissez parmi : « Tous » - copie toutes les options de choix de la question sélectionnée ; « Sélectionné » - copie dynamiquement uniquement les options de choix sélectionnées ; « Non sélectionné » - copie dynamiquement uniquement les options de choix non sélectionnées. Les options « Aucun » et « Autre » sont copiées par défaut si elles sont activées dans la question source."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Lorsque cette option est sélectionnée, les utilisateurs peuvent inclure des entrées supplémentaires dans une zone de commentaire distincte."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Affiche chaque option de choix spécial (« Aucun », « Autre », « Tout sélectionner ») sur une nouvelle ligne, même en cas d’utilisation d’une mise en page à plusieurs colonnes."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Spécifiez l’emplacement dans le jeu de données de service où se trouve le tableau cible d’objets. Laissez vide si l’URL pointe déjà vers le tableau."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Entrez un nom de propriété uniforme dans le tableau d’objets qui contient les valeurs que vous souhaitez afficher dans la liste de choix."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Sélectionnez cette option pour permettre au service de renvoyer une réponse ou un tableau vide."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Utilisez l’icône de la baguette magique pour définir une règle conditionnelle qui détermine la visibilité de toutes les options de choix."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "La valeur de gauche sert d’ID d’élément utilisé dans les règles conditionnelles, la valeur de droite est affichée aux personnes interrogées."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "« Auto » sélectionne entre les modes « Boutons » et « Menu déroulant » en fonction de la largeur disponible. Lorsque la largeur est insuffisante pour afficher les boutons, la question affiche une liste déroulante."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Vous permet de connecter des questions qui produisent des résultats dans différents formats. Lorsque ces questions sont liées entre elles à l’aide d’un identificateur de jointure, cette propriété partagée stocke les valeurs de question sélectionnées."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Sélectionnez cette option si vous souhaitez mettre à jour le contenu du menu déroulant pour qu’il corresponde à la requête de recherche qu’un utilisateur saisit dans le champ de saisie."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Une valeur à enregistrer dans les résultats de l’enquête lorsque les répondants donnent une réponse positive."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Une valeur à enregistrer dans les résultats de l’enquête lorsque les personnes interrogées donnent une réponse négative."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Il n’est pas recommandé de désactiver cette option, car elle remplace l’image d’aperçu et rend difficile pour l’utilisateur de savoir si les fichiers ont été téléchargés."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Déclenche une invite vous demandant de confirmer la suppression du fichier."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Activez cette option pour classer uniquement les choix sélectionnés. Les utilisateurs feront glisser les éléments sélectionnés de la liste de choix pour les classer dans la zone de classement."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Entrez une liste de choix qui seront suggérés au répondant lors de la saisie."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Le paramètre ne redimensionne que les champs de saisie et n’affecte pas la largeur de la zone de question."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Définit une largeur cohérente pour toutes les étiquettes d’élément en pixels"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "L’option « Auto » détermine automatiquement le mode d’affichage approprié - Image, Vidéo ou YouTube - en fonction de l’URL source fournie."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Sert de substitut lorsque l’image ne peut pas être affichée sur l’appareil d’un utilisateur et à des fins d’accessibilité."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Définit la couleur de l’emoji sélectionné lorsque le type d’icône d’évaluation est défini sur « Smileys ». Choisissez entre : « Par défaut » - l’emoji sélectionné apparaît dans la couleur par défaut de l’enquête ; « Échelle » - l’emoji sélectionné hérite de la couleur de l’échelle d’évaluation."
// expression.name: "An expression ID that is not visible to respondents." => "ID d’expression qui n’est pas visible par les personnes interrogées."
// expression.description: "Type an expression subtitle." => "Saisissez un sous-titre d’expression."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Une expression peut inclure des calculs de base ('{q1_id} + {q2_id}'), des conditions ('{age} > 60') et des fonctions ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Sélectionnez cette option pour stocker la valeur de l’option « Autre » en tant que propriété distincte dans les résultats de l’enquête."
// p.swapOrder: "Swap the order of Yes and No" => "Permuter l’ordre de Oui et Non"
// p.itemTitleWidth: "Item label width (in px)" => "Largeur de l’étiquette de l’article (en px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Texte pour indiquer si toutes les options sont sélectionnées"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Texte d’espace réservé pour la zone de classement"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Répondez automatiquement à l’enquête"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Sélectionnez cette option si vous souhaitez que l’enquête se termine automatiquement une fois qu’une personne interrogée a répondu à toutes les questions."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Enregistrer la valeur masquée dans les résultats de l’enquête"
// patternmask.pattern: "Value pattern" => "Modèle de valeur"
// datetimemask.min: "Minimum value" => "Valeur minimale"
// datetimemask.max: "Maximum value" => "Valeur maximale"
// numericmask.allowNegativeValues: "Allow negative values" => "Autoriser les valeurs négatives"
// numericmask.thousandsSeparator: "Thousands separator" => "Séparateur de milliers"
// numericmask.decimalSeparator: "Decimal separator" => "Séparateur décimal"
// numericmask.precision: "Value precision" => "Précision de la valeur"
// numericmask.min: "Minimum value" => "Valeur minimale"
// numericmask.max: "Maximum value" => "Valeur maximale"
// currencymask.prefix: "Currency prefix" => "Préfixe de devise"
// currencymask.suffix: "Currency suffix" => "Suffixe de devise"
// pe.maskType: "Input mask type" => "Type de masque de saisie"
// maskTypes.patternmask: "Pattern" => "Modèle"
// maskTypes.numericmask: "Numeric" => "Numérique"
// maskTypes.datetimemask: "Date and Time" => "Date et heure"
// maskTypes.currencymask: "Currency" => "Monnaie"
// tabs.mask: "Input Mask Settings" => "Paramètres du masque de saisie"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Ex. : +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Ex. : mm/jj/aaaa"
// pe.currencyprefix_placeholder: "Ex.: $" => "Ex. : $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Ex. : USD"
// pv.textWrapEnabled: "Wrap choices" => "Choix d’enveloppes"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Les longs textes dans les options de choix généreront automatiquement des sauts de ligne pour s’adapter au menu déroulant. Désélectionnez cette option si vous souhaitez que les textes soient coupés."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Sélectionnez cette option si vous souhaitez stocker la valeur de la question à l’aide d’un masque appliqué dans les résultats de l’enquête."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Le modèle peut contenir des littéraux de chaîne et les espaces réservés suivants : '9' - pour un chiffre ; 'a' - pour une lettre majuscule ou minuscule ; '#' - pour un chiffre ou une lettre majuscule ou minuscule. Utilisez la barre oblique inverse '\\' pour échapper un caractère."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Le modèle peut contenir des caractères de séparation et les espaces réservés suivants : 'm' - pour le numéro du mois ; 'mm' - pour le numéro du mois, avec un zéro non significatif pour les valeurs à un chiffre ; 'd' - pour le jour du mois ; 'dd' - pour le jour du mois, avec zéro en tête pour les valeurs à un chiffre ; 'yy' - pour les deux derniers chiffres de l’année ; 'yyyy' - pour une année à quatre chiffres."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Symbole utilisé pour séparer la partie fractionnaire de la partie entière d’un nombre affiché."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Symbole utilisé pour séparer les chiffres d’un grand nombre en groupes de trois."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Limite le nombre de chiffres à conserver après la virgule décimale pour un nombre affiché."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Un ou plusieurs symboles à afficher avant la valeur."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Un ou plusieurs symboles à afficher après la valeur."
// ed.translationSource: "Source: " => "Source: "
// ed.translationTarget: "Target: " => "Cible: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "La page est vide. Faites glisser un élément de la boîte à outils ou cliquez sur le bouton ci-dessous."
// maskTypes.none: "None" => "Aucun"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Rendre la ligne visible si"
// itemvalue@rows.enableIf: "Make the row editable if" => "Rendez la ligne modifiable si"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Texte d’espace réservé en lecture seule ou en mode d’aperçu"
// pe.textWrapEnabled: "Wrap choices" => "Choix d’enveloppes"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "L’option «Auto» détermine automatiquement le mode d’affichage approprié - Image, Vidéo ou YouTube - en fonction de l’URL source fournie."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Choisissez entre «Image» et «Vidéo» pour définir le mode de contenu du sélecteur de médias. Si «Image» est sélectionné, assurez-vous que toutes les options fournies sont des fichiers image dans les formats suivants : JPEG, GIF, PNG, APNG, SVG, BMP, ICO. De même, si «Vidéo» est sélectionné, assurez-vous que toutes les options sont des liens directs vers des fichiers vidéo dans les formats suivants : MP4, MOV, WMV, FLV, AVI, MKV. Veuillez noter que les liens YouTube ne sont pas pris en charge pour les options vidéo."

// ed.selectFile: "Select a file" => "Sélectionner un fichier"
// ed.removeFile: "Remove the file" => "Supprimer le fichier"
// pe.searchMode: "Search Mode" => "Mode de recherche"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Cliquez sur le bouton « Ajouter une question » ci-dessous pour commencer à créer votre formulaire."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Cliquez sur le bouton « Ajouter une question » ci-dessous pour ajouter un nouvel élément à la page."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Cliquez sur le bouton « Ajouter une question » ci-dessous pour ajouter un nouvel élément au panneau."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Cliquez sur le bouton ci-dessous et choisissez une image à télécharger"
// coloralpha.opacity: "Opacity" => "Opacité"
// font.family: "Font family" => "Famille de polices"
// font.color: "Color" => "Couleur"
// font.placeholderColor: "Placeholder color" => "Couleur de l’espace réservé"
// font.size: "Size" => "Taille"
// theme.themeName: "Theme" => "Thème"
// theme.isPanelless: "Question appearance" => "Apparence de la question"
// theme.editorPanel: "Background and corner radius" => "Arrière-plan et rayon d’angle"
// theme.questionPanel: "Background and corner radius" => "Arrière-plan et rayon d’angle"
// theme.primaryColor: "Accent color" => "Couleur d’accentuation"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacité de l’arrière-plan du panneau"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opacité de l’arrière-plan de la question"
// theme.fontSize: "Font size" => "Taille de la police"
// theme.scale: "Scale" => "Écaille"
// theme.cornerRadius: "Corner radius" => "Rayon d’angle"
// theme.pageTitle: "Title font" => "Police de titre"
// theme.pageDescription: "Description font" => "Police de description"
// theme.questionTitle: "Title font" => "Police de titre"
// theme.questionDescription: "Description font" => "Police de description"
// theme.editorFont: "Font" => "Police"
// theme.backgroundOpacity: "Opacity" => "Opacité"
// theme.--sjs-font-family: "Font family" => "Famille de polices"
// theme.--sjs-general-backcolor-dim: "Background color" => "Couleur de fond"
// theme.--sjs-primary-backcolor: "Accent background" => "Fond d’accent"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Premier plan accentué"
// theme.--sjs-shadow-small: "Shadow effects" => "Effets d’ombre"
// theme.--sjs-shadow-inner: "Shadow effects" => "Effets d’ombre"
// theme.--sjs-border-default: "Colors" => "Couleurs"
// header@header.headerView: "View" => "Vue"
// header@header.logoPosition: "Logo position" => "Position du logo"
// header@header.surveyTitle: "Survey title font" => "Police de titre de l’enquête"
// header@header.surveyDescription: "Survey description font" => "Police de description de l’enquête"
// header@header.headerTitle: "Survey title font" => "Police de titre de l’enquête"
// header@header.headerDescription: "Survey description font" => "Police de description de l’enquête"
// header@header.inheritWidthFrom: "Content area width" => "Largeur de la zone de contenu"
// header@header.textAreaWidth: "Text width" => "Largeur du texte"
// header@header.backgroundColorSwitch: "Background color" => "Couleur de fond"
// header@header.backgroundImage: "Background image" => "Image d’arrière-plan"
// header@header.backgroundImageOpacity: "Opacity" => "Opacité"
// header@header.overlapEnabled: "Overlap" => "Chevauchement"
// header@header.logoPositionX: "Logo position" => "Position du logo"
// header@header.titlePositionX: "Title position" => "Position du titre"
// header@header.descriptionPositionX: "Description position" => "Description du poste"
// weight.400: "Regular" => "Régulier"
// weight.600: "Heavy" => "Lourd"
// weight.700: "Semi-bold" => "Semi-gras"
// weight.800: "Bold" => "Audacieux"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Couvrir"
// backgroundImageFit.contain: "Contain" => "Contenir"
// backgroundImageFit.fill: "Stretch" => "Étirer"
// backgroundImageFit.tile: "Tile" => "Carreau"
// backgroundImageAttachment.fixed: "Fixed" => "Fixe"
// backgroundImageAttachment.scroll: "Scroll" => "Faire défiler"
// headerView.basic: "Basic" => "Basique"
// headerView.advanced: "Advanced" => "Avancé"
// inheritWidthFrom.survey: "Same as survey" => "Identique à l’enquête"
// inheritWidthFrom.container: "Fit to container" => "Adapter au conteneur"
// backgroundColorSwitch.none: "None" => "Aucun"
// backgroundColorSwitch.accentColor: "Accent color" => "Couleur d’accentuation"
// backgroundColorSwitch.custom: "Custom" => "Coutume"
// colorPalette.light: "Light" => "Lumière"
// colorPalette.dark: "Dark" => "Sombre"
// isPanelless.false: "Default" => "Faire défaut"
// isPanelless.true: "Without Panels" => "Sans panneaux"
// theme.cornerRadius: "Corner radius" => "Rayon d’angle"
// theme.fontFamily: "Font family" => "Famille de polices"
// theme.fontWeightRegular: "Regular" => "Régulier"
// theme.fontWeightHeavy: "Heavy" => "Lourd"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-gras"
// theme.fontWeightBold: "Bold" => "Audacieux"
// theme.color: "Color" => "Couleur"
// theme.placeholderColor: "Placeholder color" => "Couleur de l’espace réservé"
// theme.size: "Size" => "Taille"
// theme.opacity: "Opacity" => "Opacité"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Tapez pour rechercher..."
// ed.toolboxNoResultsFound: "No results found" => "Aucun résultat trouvé"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Espace réservé au titre de l’onglet"
// theme.--sjs-special-red: "Error messages" => "Messages d’erreur"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Texte de secours pour les titres d’onglet qui s’applique lorsque le modèle de titre d’onglet ne produit pas de valeur significative."
// theme.fontColor: "Font color" => "Couleur de la police"
// theme.backgroundColor: "Background color" => "Couleur de fond"
// pe.questionTitleWidth: "Question title width" => "Largeur du titre de la question"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Sélectionnez un fichier ou collez un lien de fichier..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Ex. : 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Définit une largeur cohérente pour les titres de questions lorsqu’ils sont alignés à gauche de leurs zones de questions. Accepte les valeurs CSS (px, %, in, pt, etc.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Définit une largeur cohérente pour les titres de questions lorsqu’ils sont alignés à gauche de leurs zones de questions. Accepte les valeurs CSS (px, %, in, pt, etc.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Hauteur de la zone de commentaires (en lignes)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Définit le nombre de lignes affichées dans les zones de texte pour les commentaires de question. Lorsque l’entrée occupe plus de lignes, la barre de défilement apparaît."
// pe.enabled: "Enabled" => "Activé"
// pe.disabled: "Disabled" => "Handicapé"
// pe.inherit: "Inherit" => "Hériter"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Valider les champs vides en cas de perte de focus"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Ex. : 30 %"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Ex.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Activez cette option pour déclencher la validation lorsqu’un utilisateur se concentre sur un champ de saisie vide, puis le quitte sans apporter de modifications."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Organise les options de choix dans une disposition à plusieurs colonnes. Lorsqu’elle est définie sur 0, les options sont affichées sur une seule ligne."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Ce paramètre s’applique uniquement aux questions en dehors d’un panneau."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Définit une couleur supplémentaire qui met en évidence les éléments clés de l’enquête."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Ajuste la transparence des panneaux et des zones de question par rapport à l’arrière-plan de l’enquête."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Ajuste la transparence des éléments d’entrée par rapport à l’arrière-plan de l’enquête."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Définit le rayon d’angle de tous les éléments rectangulaires. Activez le mode avancé si vous souhaitez définir des valeurs de rayon d’angle individuelles pour les éléments de saisie ou les panneaux et les zones de question."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Définit la couleur d’arrière-plan principale de l’enquête."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "L’option « Identique au conteneur » ajuste automatiquement la largeur de la zone de contenu de l’en-tête pour s’adapter à l’élément HTML dans lequel l’enquête est placée."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Largeur de la zone d’en-tête contenant le titre et la description de l’enquête, mesurée en pixels."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Accepte les valeurs %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Accepte les valeurs px."
// p.effectiveColSpan: "Column span" => "Portée de poteau"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Identique à l’enquête"
// progressBarInheritWidthFrom.container: "Same as container" => "Identique au conteneur"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Affiche des aperçus miniatures pour les fichiers téléchargés lorsque cela est possible. Désélectionnez si vous souhaitez afficher les icônes de fichier à la place."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "L’option « Identique au conteneur » ajuste automatiquement la largeur de la zone de la barre de progression pour s’adapter à l’élément HTML dans lequel l’enquête est placée."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Largeur de la zone de la barre de progression"
// maskType.none: "None" => "Aucun"
// maskType.pattern: "Pattern" => "Modèle"
// maskType.numeric: "Numeric" => "Numérique"
// maskType.datetime: "Date and Time" => "Date et heure"
// maskType.currency: "Currency" => "Monnaie"

// inputTextAlignment.auto: "Auto" => "Auto"
// inputTextAlignment.left: "Left" => "Gauche"
// inputTextAlignment.right: "Right" => "Droite"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Sélectionnez le mode d’alignement de la valeur d’entrée dans le champ. Le paramètre par défaut « Auto » aligne la valeur d’entrée à droite si le masquage monétaire ou numérique est appliqué et à gauche si ce n’est pas le cas."
// p.inputTextAlignment: "Input value alignment" => "Alignement des valeurs d’entrée"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Afficher la barre de progression"
// paneldynamic.showProgressBar: "Show the progress bar" => "Afficher la barre de progression"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Alignement de la barre de progression"
// pv.carousel: "Carousel" => "Carrousel"
// progressBarLocation.top: "Top" => "Retour au début"
// progressBarLocation.bottom: "Bottom" => "Fond"
// progressBarLocation.topBottom: "Top and bottom" => "Haut et bas"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Organise les options de choix dans une mise en page à plusieurs colonnes. Lorsqu’elle est définie sur 0, les options sont affichées sur une seule ligne. Lorsqu’elle est définie sur -1, la valeur réelle est héritée de la propriété « Nombre de colonnes imbriquées » de la matrice parente."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Les liens YouTube ne sont pas pris en charge."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Commencez à configurer votre formulaire"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Cliquez sur n’importe quelle icône de catégorie pour explorer les paramètres de l’enquête. Des paramètres supplémentaires seront disponibles une fois que vous aurez ajouté un élément de topographie à l’aire de conception."
// pe.caseInsensitive: "Case insensitive" => "Insensible à la casse"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Indiquez si les lettres majuscules et minuscules de l’expression régulière doivent être traitées comme équivalentes."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Votre formulaire est vide"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Votre formulaire est vide"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Faites glisser un élément depuis la boîte à outils ou cliquez sur le bouton ci-dessous."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Faites glisser un élément depuis la boîte à outils ou cliquez sur le bouton ci-dessous."
// ed.previewPlaceholderTitle: "No preview" => "Pas d’aperçu"
// ed.previewPlaceholderTitleMobile: "No preview" => "Pas d’aperçu"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "L’enquête ne contient aucun élément visible."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "L’enquête ne contient aucun élément visible."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Pas de chaînes à traduire"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Pas de chaînes à traduire"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Ajoutez des éléments à votre formulaire ou modifiez le filtre de chaînes dans la barre d’outils."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Ajoutez des éléments à votre formulaire ou modifiez le filtre de chaînes dans la barre d’outils."
// lg.logicPlaceholderTitle: "No logical rules" => "Pas de règles logiques"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Pas de règles logiques"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Créez une règle pour personnaliser le flux de l’enquête."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Créez une règle pour personnaliser le flux de l’enquête."
// pe.showTimer: "Use a timer" => "Utiliser une minuterie"
// theme.advancedMode: "Advanced mode" => "Mode avancé"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Définit l’emplacement d’un minuteur sur une page."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Lorsqu’elle est définie sur 0, la hauteur est calculée automatiquement pour s’adapter au contenu de l’en-tête."
// p.mobileHeight: "Height on smartphones" => "Hauteur sur les smartphones"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Lorsque cette option est activée, la partie supérieure de l’enquête se superpose au bas de l’en-tête."
// ed.creatorSettingTitle: "Creator Settings" => "Paramètres du créateur"
// tabs.accentColors: "Accent colors" => "Couleurs d’accentuation"
// tabs.scaling: "Scaling" => "Détartrage"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Attribue des numéros aux questions imbriquées dans ce panneau."
// creatortheme.--sjs-special-background: "Surface background" => "Arrière-plan de surface"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primaire"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Secondaire"
// creatortheme.surfaceScale: "Surface" => "Surface"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Interface utilisateur"
// creatortheme.fontScale: "Font" => "Police"
// names.sc2020: "Survey Creator 2020" => "Créateur d’enquête 2020"
// names.default-light: "Light" => "Lumière"
// names.default-dark: "Dark" => "Sombre"
// names.default-contrast: "Contrast" => "Contraste"
// panel.showNumber: "Number this panel" => "Numéroter ce panneau"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Indiquez si vous souhaitez que le sondage passe automatiquement à la page suivante une fois qu’une personne interrogée a répondu à toutes les questions de la page actuelle. Cette fonctionnalité ne s’applique pas si la dernière question de la page est ouverte ou permet plusieurs réponses."
// autocomplete.name: "Full Name" => "Nom complet"
// autocomplete.honorific-prefix: "Prefix" => "Préfixe"
// autocomplete.given-name: "First Name" => "Prénom"
// autocomplete.additional-name: "Middle Name" => "Deuxième prénom"
// autocomplete.family-name: "Last Name" => "Nom"
// autocomplete.honorific-suffix: "Suffix" => "Suffixe"
// autocomplete.nickname: "Nickname" => "Surnom"
// autocomplete.organization-title: "Job Title" => "Titre du poste"
// autocomplete.username: "User Name" => "Nom d’utilisateur"
// autocomplete.new-password: "New Password" => "Nouveau mot de passe"
// autocomplete.current-password: "Current Password" => "Mot de passe actuel"
// autocomplete.organization: "Organization Name" => "Nom de l’organisation"
// autocomplete.street-address: "Full Street Address" => "Adresse complète"
// autocomplete.address-line1: "Address Line 1" => "Ligne d’adresse 1"
// autocomplete.address-line2: "Address Line 2" => "Ligne d’adresse 2"
// autocomplete.address-line3: "Address Line 3" => "Ligne d’adresse 3"
// autocomplete.address-level4: "Level 4 Address" => "Adresse de niveau 4"
// autocomplete.address-level3: "Level 3 Address" => "Adresse de niveau 3"
// autocomplete.address-level2: "Level 2 Address" => "Adresse de niveau 2"
// autocomplete.address-level1: "Level 1 Address" => "Adresse de niveau 1"
// autocomplete.country: "Country Code" => "Code du pays"
// autocomplete.country-name: "Country Name" => "Nom du pays"
// autocomplete.postal-code: "Postal Code" => "Code postal"
// autocomplete.cc-name: "Cardholder Name" => "Nom du titulaire de la carte"
// autocomplete.cc-given-name: "Cardholder First Name" => "Prénom du titulaire de la carte"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Deuxième prénom du titulaire de la carte"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Nom de famille du titulaire de la carte"
// autocomplete.cc-number: "Credit Card Number" => "Numéro de carte de crédit"
// autocomplete.cc-exp: "Expiration Date" => "Échéance"
// autocomplete.cc-exp-month: "Expiration Month" => "Mois d’expiration"
// autocomplete.cc-exp-year: "Expiration Year" => "Année d’expiration"
// autocomplete.cc-csc: "Card Security Code" => "Code de sécurité de la carte"
// autocomplete.cc-type: "Credit Card Type" => "Type de carte de crédit"
// autocomplete.transaction-currency: "Transaction Currency" => "Devise de transaction"
// autocomplete.transaction-amount: "Transaction Amount" => "Montant de la transaction"
// autocomplete.language: "Preferred Language" => "Langue préférée"
// autocomplete.bday: "Birthday" => "Anniversaire"
// autocomplete.bday-day: "Birthday Day" => "Jour d’anniversaire"
// autocomplete.bday-month: "Birthday Month" => "Mois de l’anniversaire"
// autocomplete.bday-year: "Birthday Year" => "Année d’anniversaire"
// autocomplete.sex: "Gender" => "Genre"
// autocomplete.url: "Website URL" => "URL du site Web"
// autocomplete.photo: "Profile Photo" => "Photo de profil"
// autocomplete.tel: "Telephone Number" => "Numéro de téléphone"
// autocomplete.tel-country-code: "Country Code for Phone" => "Indicatif du pays pour le téléphone"
// autocomplete.tel-national: "National Telephone Number" => "Numéro de téléphone national"
// autocomplete.tel-area-code: "Area Code" => "Indicatif"
// autocomplete.tel-local: "Local Phone Number" => "Numéro de téléphone local"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Préfixe de téléphone local"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Suffixe de téléphone local"
// autocomplete.tel-extension: "Phone Extension" => "Extension téléphonique"
// autocomplete.email: "Email Address" => "Adresse courriel"
// autocomplete.impp: "Instant Messaging Protocol" => "Protocole de messagerie instantanée"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Verrouiller l’état d’expansion/réduction pour les questions"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Vous n’avez pas encore de pages"
// pe.addNew@pages: "Add new page" => "Ajouter une nouvelle page"
// ed.zoomInTooltip: "Zoom In" => "Zoom avant"
// ed.zoomOutTooltip: "Zoom Out" => "Zoom arrière"
// tabs.surfaceBackground: "Surface Background" => "Arrière-plan de surface"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Utiliser les réponses de la dernière entrée par défaut"
// colors.gray: "Gray" => "Gris"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Alignement des boutons de navigation"
// pv.allQuestions: "Show all questions" => "Afficher toutes les questions"
// pv.answeredQuestions: "Show answered questions only" => "Afficher uniquement les questions répondues"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Définit l’emplacement des boutons de navigation sur une page."
// pe.size: "Input field width (in characters)" => "Largeur du champ de saisie (en caractères)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Utilisez les valeurs de la question de la matrice, de la colonne ou du panneau suivant comme ID de choix"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Utilisez les valeurs de la question matricielle, de la colonne ou du panneau suivant comme textes de choix"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "Dans les types de questions à sélection unique et à sélection multiple, chaque option de choix a un ID et une valeur d’affichage. Ce paramètre spécifie la question de matrice, de colonne ou de panneau qui doit fournir les ID."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "Dans les types de questions à sélection unique et à sélection multiple, chaque option de choix a un ID et une valeur d’affichage. Ce paramètre spécifie la question de matrice, de colonne ou de panneau qui doit fournir les textes d’affichage."
// pe.progressBarLocation: "Progress bar alignment" => "Alignement de la barre de progression"
// progressBarLocation.topbottom: "Top and bottom" => "Haut et bas"
// progressBarLocation.aboveheader: "Above the header" => "Au-dessus de l’en-tête"
// progressBarLocation.belowheader: "Below the header" => "Sous l’en-tête"
// progressBarLocation.off: "Hidden" => "Caché"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Définit l’emplacement de la barre de progression. La valeur « Auto » affiche la barre de progression au-dessus ou en dessous de l’en-tête de l’enquête."
// survey.readOnly: "Make the survey read-only" => "Rendre l’enquête en lecture seule"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Sélectionnez cette option si vous souhaitez empêcher les personnes interrogées de remplir votre sondage."
// paneldynamic.showNumber: "Number the panel" => "Numérotez le panneau"
// question.showNumber: "Number this question" => "Numéroter cette question"
// pe.previewMode: "Preview mode" => "Mode de prévisualisation"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Activer la disposition en grille"
// pe.maskSettings: "Mask settings" => "Paramètres du masque"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Alignement du message d’erreur d’extension de ligne"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Définit l’emplacement des messages d’erreur pour les questions imbriquées dans les sections de détails. L’option «Hériter» applique le paramètre de la propriété «Alignement du message d’erreur»."
// pe.gridLayoutColumns: "Grid layout columns" => "Colonnes de disposition de grille"
// pe.startPageTitlePlaceholder: "Start Page" => "Page d’accueil"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Largeur utile, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Largeur du titre de la question, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Vous n’avez pas encore de colonnes de mise en page"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Spécifie le nombre de colonnes de ce panneau dans la disposition de la grille."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Ce tableau vous permet de configurer chaque colonne de la grille dans le panneau. Il définit automatiquement le pourcentage de largeur de chaque colonne en fonction du nombre maximal d’éléments dans une rangée. Pour personnaliser la disposition de la grille, ajustez manuellement ces valeurs et définissez la largeur du titre pour toutes les questions de chaque colonne."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator vous permet d’ajuster manuellement les largeurs en ligne des éléments de formulaire pour contrôler la mise en page. Si cela ne produit pas le résultat souhaité, vous pouvez activer la disposition en grille, qui structure les éléments de formulaire à l’aide d’un système basé sur des colonnes. Pour configurer les colonnes de mise en page, sélectionnez une page ou un panneau et utilisez le tableau « Paramètres des questions » → « Colonnes de la grille ». Pour ajuster le nombre de colonnes d’une question, sélectionnez-la et définissez la valeur souhaitée dans le champ « Mise en page » → « Étendue de colonnes »."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Spécifie le nombre de colonnes que cette question couvre dans la disposition de la grille."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Ce tableau vous permet de configurer chaque colonne de la grille de la page. Il définit automatiquement le pourcentage de largeur de chaque colonne en fonction du nombre maximal d’éléments dans une rangée. Pour personnaliser la disposition de la grille, ajustez manuellement ces valeurs et définissez la largeur du titre pour toutes les questions de chaque colonne."

// ed.expandTooltip: "Expand" => "Développer"
// ed.collapseTooltip: "Collapse" => "Effondrement"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Ex.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Définit une largeur cohérente pour toutes les étiquettes d’article. Accepte les valeurs CSS (px, %, in, pt, etc.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zoom à 100%"
// ed.addLanguageTooltip: "Add Language" => "Ajouter une langue"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Définit le nombre de lignes affichées dans les zones de texte pour les commentaires de question. Si l’entrée occupe plus de lignes, la barre de défilement apparaît."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Valeur d’affichage par défaut pour les textes dynamiques"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Valeur affichée dans les questions HTML et dans les titres et descriptions dynamiques des éléments de l’enquête lorsque la valeur de la question est vide."
// showQuestionNumbers.recursive: "Recursive numbering" => "Numérotation récursive"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Largeur du titre de la question"
// pe.allowCustomChoices: "Allow custom choices" => "Autoriser les choix personnalisés"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Définit une largeur cohérente pour les titres de questions lorsqu’ils sont alignés à gauche de leurs zones de question. Accepte les valeurs CSS (px, %, in, pt, etc.)."
// page.name: "A page ID that is not visible to respondents." => "Un ID de page qui n’est pas visible par les personnes interrogées."
// page.description: "Type a page subtitle." => "Tapez un sous-titre de page."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Une légende affichée sur un bouton de navigation dans la barre de progression ou la table des matières (TOC). Si vous laissez ce champ vide, le bouton de navigation utilisera le titre ou le nom de la page. Pour activer la barre de progression ou la table des matières, allez dans Sondage → Navigation."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Sélectionnez cette option pour permettre aux personnes interrogées d’ajouter leurs propres choix si l’option souhaitée n’est pas disponible dans la liste déroulante. Les choix personnalisés ne seront stockés que temporairement pour la durée de la session de navigation en cours."