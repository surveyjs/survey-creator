import { editorLocalization } from "survey-creator-core";

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
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Valeur par défaut ({0})",
    survey: "Sondage",
    settings: "Configuration du sondage",
    settingsTooltip: "Ouvrir paramètres",
    surveySettings: "Paramètres du sondage",
    surveySettingsTooltip: "Ouvrir paramètres du sondage",
    themeSettings: "Paramètres du thème",
    themeSettingsTooltip: "Ouvrir les paramètres du thème",
    showPanel: "Afficher le panneau",
    hidePanel: "Masquer le panneau",
    prevSelected: "Sélectionnez précédent",
    nextSelected: "Sélectionnez Suivant",
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
    testSurvey: "Tester le sondage",
    themeSurvey: "Thèmes",
    defaultV2Theme: "Défaut",
    modernTheme: "Moderne",
    defaultTheme: "Valeur par défaut (héritée)",
    testSurveyAgain: "Tester à nouveau le sondage",
    testSurveyWidth: "Largeur du sondage : ",
    navigateToMsg: "Vous deviez naviguer vers",
    logic: "Condition",
    embedSurvey: "Intégrer le sondage",
    translation: "Traduction",
    saveSurvey: "Sauvegarder le sondage",
    saveSurveyTooltip: "Enregistrer le sondage",
    designer: "Éditeur de sondage",
    jsonEditor: "Éditeur JSON",
    jsonHideErrors: "Masquer les erreurs",
    jsonShowErrors: "Afficher les erreurs",
    undo: "Annuler",
    redo: "Rétablir",
    undoTooltip: "Annuler la dernière modification",
    redoTooltip: "Rétablir la modification",
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
    propertyGridFilteredTextPlaceholder: "Tapez pour rechercher...",
    toolboxGeneralCategory: "Général",
    toolboxChoiceCategory: "Quesitons à choix",
    toolboxTextCategory: "Questions de saisie libre",
    toolboxContainersCategory: "Conteneurs",
    toolboxMatrixCategory: "Questions matricielles",
    toolboxMiscCategory: "Divers",
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
    translationDialogTitle: "Chaînes non traduites",
    translationMergeLocaleWithDefault: "Fusionner {0} avec langue par défaut",
    translationPlaceHolder: "Traduction...",
    themeExportButton: "Exportation",
    themeImportButton: "Importation",
    themeResetButton: "Réinitialiser les paramètres de thème par défaut",
    bold: "Gras",
    italic: "Italique",
    underline: "Souligné",
    addNewQuestion: "Ajouter Question",
    selectPage: "Sélectionner une page...",
    carryForwardChoicesCopied: "Les choix sont copiés à partir de",
    htmlPlaceHolder: "Le contenu HTML se trouvera ici.",
    panelPlaceHolder: "Déposez une question de la boîte à outils ici.",
    surveyPlaceHolder: "Le sondage est vide. Faites glisser un élément de la boîte à outils ou cliquez sur le bouton ci-dessous.",
    imagePlaceHolder: "Glissez et déposez une image ici ou cliquez sur le bouton ci-dessous pour choisir une image à télécharger",
    imageChooseImage: "Choisir une image",
    addNewTypeQuestion: "Ajouter {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "auto",
    choices_Item: "Article ",
    lg: {
      addNewItem: "Ajouter une nouvelle règle",
      empty_tab: "Créez une règle pour personnaliser le déroulement du sondage.",
      page_visibilityName: "Afficher/masquer la page",
      page_enableName: "Activer (désactiver) la page",
      panel_visibilityName: "Afficher/masquer le panneau",
      panel_enableName: "Activer/désactiver le panneau",
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
      question_resetValueText: "Réinitialisez la valeur pour la question : {0}",
      question_setValueText: "Attribuer une valeur : {1} à la question : {0}",
      column_visibilityText: "Rendre visible les {0} de la colonne de questions {1}", //{0} column name, {1} question name
      column_enableText: "Activer la {0} de la colonne de questions {1}", //{0} column name, {1} question name
      column_requireText: "rendre obligatoire la colonne {0} de la question {1}", //{0} column name, {1} question name
      column_resetValueText: "Réinitialiser la valeur de la cellule pour la colonne : {0}",
      column_setValueText: "Affecter la valeur de la cellule : {1} à la colonne : {0}",
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
      uncompletedRule_cancel: "Non, je veux compléter les règles",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
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
    expressionHelp: "Veuillez entrer une condition. Vous pouvez utiliser des accolades pour accéder aux valeurs des questions '{question1} + {question2}', '({prix}*{quantite}) * (100 - {remise})'",
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
    "addNew@choices": "Ajouter un choix",
    expressionIsEmpty: "La condition est vide",
    value: "Valeur",
    text: "Texte",
    rowid: "ID Ligne",
    imageLink: "URL de l'image",
    columnEdit: "Éditer la colonne: {0}",
    itemEdit: "Éditer l'item: {0}",
    url: "URL",
    path: "Chemin",
    valueName: "Variable de stockage",
    choicesbyurl: {
      valueName: "Obtenir des valeurs à partir du champ JSON suivant"
    },
    titleName: "Obtenir le texte à afficher à partir du champ JSON suivant",
    imageLinkName: "Obtenir les URL d’image à partir du champ JSON suivant",
    allowEmptyResponse: "Autoriser les réponses vides",
    titlePlaceholder: "Titre de la page",
    surveyTitlePlaceholder: "Saisissez le titre du sondage",
    pageTitlePlaceholder: "Saisissez le titre de la page",
    descriptionPlaceholder: "Entrez une description",
    surveyDescriptionPlaceholder: "Entrez une description pour l'enquête",
    pageDescriptionPlaceholder: "Entrez une description pour la page",
    showOtherItem: "Contient choix \"Autre\"",
    otherText: "Texte du choix \"Autre\"",
    showNoneItem: "Contient un choix \"Aucun\"",
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
    visible: "Est visible ?",
    isRequired: "Est obligatoire ?",
    markRequired: "Marquer au besoin",
    removeRequiredMark: "Supprimer la marque requise",
    isAllRowRequired: "Réponse obligatoire pour toutes les lignes",
    requiredErrorText: "Message d'erreur lorsque obligatoire",
    startWithNewLine: "Afficher la question sur une nouvelle ligne",
    rows: "Lignes",
    cols: "Colonnes",
    placeholder: "Placeholder (texte indicatif)",
    showPreview: "Afficher les informations du fichier",
    storeDataAsText: "Stocker le contenu du fichier dans le résultat JSON sous forme de texte",
    maxSize: "Taille maximum du fichier en octets",
    imageHeight: "Hauteur de l'image",
    imageWidth: "Largeur de l'image",
    rowCount: "Nombre de lignes",
    columnLayout: "Inverser les lignes et les colonnes",
    addRowLocation: "Emplacement bouton \"Ajouter une ligne\"",
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
    mode: "Mode (édition/lecture seule)",
    clearInvisibleValues: "Effacer les valeurs invisibles",
    cookieName: "Nom du cookie (pour empêcher de compléter 2 fois le sondage localement)",
    sendResultOnPageNext: "Envoyer les résultats au changement de page",
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
    showPrevButton: "Afficher le bouton précédent (l'utilisateur pourra retourner sur la page précédente)",
    firstPageIsStarted: "La première page du sondage est une page de démarrage.",
    showCompletedPage: "Afficher la page de fin une fois le sondage terminé",
    goNextPageAutomatic: "Aller à la page suivante automatiquement pour toutes les questions",
    showProgressBar: "Afficher la barre de progression",
    questionTitleLocation: "Emplacement du titre de la question",
    requiredText: "Symbole(s) des questions obligatoires",
    questionStartIndex: "Index de départ de la question (1, 2 ou 'A', 'a')",
    showQuestionNumbers: "Afficher les numéros de questions",
    questionTitleTemplate: "Emplacement du symbole obligatoire'",
    questionErrorLocation: "Emplacement de l'erreur",
    focusFirstQuestionAutomatic: "Focus sur la première question au changement de page",
    questionsOrder: "Ordre des éléments sur la page",
    maxTimeToFinish: "Temps maximum pour terminer le sondage",
    maxTimeToFinishPage: "Temps maximum pour terminer une page",
    image: {
      imageHeight: "Hauteur de l’image (en valeurs acceptées par CSS)",
      imageWidth: "Largeur de l’image (en valeurs acceptées par CSS)"
    },
    // survey templates
    survey: {
      title: "Titre du questionnaire"
    },
    page: {
      title: "Titre",
      maxTimeToFinish: "Limite de temps pour terminer la page (en secondes)"
    },
    question: {
      page: "Page parent"
    },
    showTimerPanel: "Afficher le panneau chronomètre",
    showTimerPanelMode: "Mode d'affichage du panneau chronomètre",
    renderMode: "Mode de rendu",
    allowAddPanel: "Autoriser l'ajout de sections",
    allowRemovePanel: "Autoriser la suppression de sections",
    noEntriesText: "Texte des entrées vides",
    panelAddText: "Ajouter le texte du bouton de la section",
    panelRemoveText: "Supprimer la section texte",
    isSinglePage: "Afficher tous les éléments sur une seule page",
    html: "Balisage HTML",
    expression: "Condition",
    setValue: "Réponse",
    dataFormat: "Format de l’image",
    allowAddRows: "Autoriser l’ajout de lignes",
    allowRemoveRows: "Autoriser la suppression de lignes",
    allowRowsDragAndDrop: "Autoriser le glisser-déposer de lignes",
    responsiveImageSizeHelp: "Ne s’applique pas si vous spécifiez la largeur ou la hauteur exacte de l’image.",
    minImageWidth: "Largeur minimale de l’image",
    maxImageWidth: "Largeur maximale de l’image",
    minImageHeight: "Hauteur minimale de l’image",
    maxImageHeight: "Hauteur maximale de l’image",
    minValue: "Valeur minimum",
    maxValue: "Valeur maximum",
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
    maxOthersLength: "Longueur maximale des commentaires (en caractères)",
    autoGrowComment: "Développer automatiquement la zone de commentaires si nécessaire",
    allowResizeComment: "Autoriser les utilisateurs à redimensionner les zones de texte",
    textUpdateMode: "Mettre à jour la valeur de la question textuelle",
    focusOnFirstError: "Renvoyer vers la première question ayant une erreur",
    checkErrorsMode: "Exécuter la validation",
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
    paneldynamic: {
      confirmDelete: "Confirmer la suppression de la section"
    },
    panelCount: "Nombre initial de sections",
    minPanelCount: "Nombre minimal de sections",
    maxPanelCount: "Nombre maximal de sections",
    panelsState: "Déploiement de la section",
    templateDescription: "Modèle de description",
    templateTitle: "Modèle de titre",
    panelPrevText: "Info-bulle du bouton Section précédente",
    panelNextText: "Info-bulle du bouton Section suivante",
    showRangeInProgress: "Afficher la barre de progression",
    templateTitleLocation: "Emplacement du titre de la question",
    panelRemoveButtonLocation: "Emplacement du bouton Supprimer la Section",
    hideIfRowsEmpty: "Masquer la question s’il n’y a pas de lignes",
    hideColumnsIfEmpty: "Masquer les colonnes s’il n’y a pas de lignes",
    rateValues: "Valeurs des notes personnalisées",
    rateCount: "Nombre notes sur le barème",
    autoGenerate: "Comment définir les valeurs possibles ?",
    hideIfChoicesEmpty: "Masquer la question si elle ne contient pas de choix",
    hideNumber: "Masquer le numéro de la question",
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
    showClearButton: "Afficher le bouton Effacer",
    showNumber: "Afficher le numéro de la section",
    logoWidth: "Largeur du logo (en valeurs acceptées par CSS)",
    logoHeight: "Hauteur du logo (en valeurs acceptées par CSS)",
    readOnly: "Lecture seule",
    enableIf: "Modifiable si",
    emptyRowsText: "Message « Aucune ligne »",
    size: "Taille du champ de saisie (en caractères)",
    separateSpecialChoices: "Afficher séparément les choix spéciaux (Aucun, Autre, Sélectionner tout)",
    choicesFromQuestion: "Copier les choix à partir de la question",
    choicesFromQuestionMode: "Quels choix copier ?",
    showCommentArea: "Afficher la zone de commentaire",
    commentPlaceholder: "Espace réservé pour la zone de commentaires",
    displayRateDescriptionsAsExtremeItems: "Afficher la description des notes sur les valeurs des extrémités",
    rowsOrder: "Ordre des lignes",
    columnsLayout: "Disposition des colonnes",
    columnColCount: "Nombre de colonnes imbriquées",
    state: "État de développement du panneau",
    correctAnswer: "Réponse correcte",
    defaultPanelValue: "Valeurs par défaut",
    cells: "Texte des cellules",
    keyName: "Colonne clé",
    itemvalue: {
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
    tabs: {
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
      layout: "Disposition",
      data: "Données",
      validation: "Validateurs",
      cells: "Cellules",
      showOnCompleted: "Sondage terminé",
      logo: "Logo dans le titre du sondage",
      slider: "Curseur",
      expression: "Condition",
      others: "Autres"
    },
    editProperty: "Éditer la propriété \"{0}\"",
    items: "[ Éléments: {0} ]",
    choicesVisibleIf: "Les choix sont visibles si",
    choicesEnableIf: "Les choix sont sélectionnables si",
    columnsEnableIf: "Les colonnes sont visibles si",
    rowsEnableIf: "Les lignes sont visibles si",
    indent: "Ajouter des tabulations",
    panel: {
      indent: "Ajouter des tabulations externes"
    },
    innerIndent: "Ajouter des tabulations internes",
    defaultValueFromLastRow: "Prendre les valeurs par défaut de la dernière ligne",
    defaultValueFromLastPanel: "Prendre les valeurs par défaut de la dernière section",
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
    signatureWidth: "Largeur de la signature",
    signatureHeight: "Hauteur de signature",
    verticalAlign: "Alignement vertical",
    alternateRows: "Lignes alternatives",
    columnsVisibleIf: "Les colonnes sont visibles si",
    rowsVisibleIf: "Les lignes sont visibles si",
    otherPlaceholder: "Espace réservé pour la zone de commentaires",
    rateType: "Type de notation"
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
    decimal: "Décimal",
    currency: "Devise",
    percent: "Pour cent",
    firstExpanded: "Déployer la première section",
    off: "Désactiver",
    onpanel: "Début de chaque section",
    onPanel: "Début de chaque section",
    onSurvey: "Continuer tout au long du sondage",
    list: "liste",
    progressTop: "Barre de progression en haut",
    progressBottom: "Barre de progression en bas",
    progressTopBottom: "Barre de progression en haut et en bas",
    tab: "Onglets",
    horizontal: "Horizontal",
    vertical: "Vertical",
    top: "Haut",
    bottom: "Bas",
    topBottom: "Haut et bas",
    both: "Les deux",
    left: "Gauche",
    right: "Droite",
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
    on: "Activé",
    onPage: "Page",
    edit: "Éditer",
    display: "Affichage",
    onComplete: "Quand terminé",
    onHidden: "Quand masqué",
    onHiddenContainer: "Lorsque la question ou sa section/page devient masquée",
    clearInvisibleValues: {
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
    all: "Tous",
    page: "Page",
    survey: "Sondage",
    onNextPage: "Lors du passage à la page suivante",
    onValueChanged: "Après la modification d’une réponse",
    onValueChanging: "Avant qu’une réponse ne soit modifiée",
    standard: "Structure originale",
    singlePage: "Toutes les questions sur une seule page",
    questionPerPage: "Chaque question sur une page individuelle",
    noPreview: "Pas d’aperçu",
    showAllQuestions: "Afficher toutes les questions",
    showAnsweredQuestions: "Afficher uniquement les questions complétées",
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
    showNavigationButtons: {
      none: "Masqué"
    },
    showProgressBar: {
      off: "Masqué"
    },
    showTimerPanel: {
      none: "Masqué"
    },
    showTimerPanelMode: {
      all: "Les deux"
    },
    detailPanelMode: {
      none: "Masqué"
    },
    addRowLocation: {
      default: "Dépend de la disposition de la matrice"
    },
    panelsState: {
      default: "Les utilisateurs ne peuvent pas déployer ou réduire les sections",
      collapsed: "Toutes les sections sont réduites",
      expanded: "Toutes les sections sont déployées"
    },
    widthMode: {
      auto: "Auto",
      static: "Statique",
      responsive: "Adaptative"
    },
    imageFit: {
      none: "Aucun",
      contain: "Ajuster",
      cover: "Remplir",
      fill: "Étirer"
    },
    contentMode: {
      auto: "Auto",
      image: "Image",
      video: "Vidéo",
      youtube: "Youtube"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Boutons",
      dropdown: "Liste déroulante"
    },
    rateColorMode: {
      default: "Par défaut"
    },
    autoGenerate: {
      "true": "Générer",
      "false": "Saisie manuelle"
    },
    rateType: {
      labels: "Labels",
      stars: "Étoiles",
      smileys: "Smileys"
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
  pehelp: {
    cookieName: "Les cookies empêchent les utilisateurs de remplir deux fois le même sondage.",
    size: "Redimensionne la zone visible du champ de saisie. Veuillez utiliser le paramètre <b>Validation → Longueur maximale</b> pour limiter la longueur d’entrée.",
    format: "Utilisez {0} comme espace réservé pour la valeur réelle.",
    totalText: "Visible uniquement lorsqu’au moins une colonne a un type Total ou une expression Total.",
    acceptedTypes: "Reportez-vous à la description de l’attribut [accept](https://www.w3schools.com/tags/att_input_accept.asp) pour plus d’informations.",
    columnColCount: "Applicable uniquement aux types de cellules Choix unique (radio) et Cases à cocher.",
    autocomplete: "Reportez-vous à la description de l’attribut [saisie semi-automatique](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/saisie semi-automatique) pour plus d’informations.",
    valueName: "Si vous ne définissez pas cette propriété, la réponse sera stockée dans un champ spécifié par la propriété Variable de stockage.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Si la colonne spécifiée contient des valeurs identiques, le sondage renvoie l’erreur « Valeur de clé non unique »."
  },
  // Properties
  p: {
    title: {
      name: "Titre",
      title: "Laissez vide, si même texte que \"Variable de stockage\""
    },
    multiSelect: "Autoriser la sélection multiple",
    showLabel: "Afficher les légendes des images",
    value: "Valeur",
    tabAlign: "Alignement des tabulations",
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
    titleLocation: "Emplacement du titre",
    descriptionLocation: "Description de l’emplacement",
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
    isUnique: "Est unique",
    showInMultipleColumns: "Afficher en plusieurs colonnes",
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
    itemSize: "Nombre maximum de caractères",
    elements: "Éléments",
    content: "Contenu",
    navigationButtonsVisibility: "Visibilité des boutons de navigation",
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
    allowCameraAccess: "Autoriser l’accès à la caméra",
    scaleColorMode: "Mode de couleur de mise à l’échelle",
    rateColorMode: "Évaluer le mode de couleur",
    templateTabTitle: "Titre de l’onglet Modèle",
    templateVisibleIf: "Modèle visible si",
    copyDisplayValue: "Copier la valeur d’affichage"
  },
  theme: {
    "--background": "Couleur d’arrière-plan",
    "--background-dim-light": "Couleur de lumière faible d’arrière-plan",
    "--primary-foreground": "Couleur de premier plan primaire",
    "--foreground": "Couleur de premier plan",
    "--base-unit": "Unité de base",
    groupGeneral: "Généralités",
    groupAdvanced: "Avancé",
    groupHeader: "En-tête",
    themeName: "Thème",
    themeMode: "Apparence de la question",
    themeModePanels: "Par défaut",
    themeModeLightweight: "Sans section",
    themePaletteLight: "Clair",
    themePaletteDark: "Sombre",
    primaryColor: "Couleur d’accentuation",
    primaryDefaultColor: "Faire défaut",
    primaryDarkColor: "Au survol",
    primaryLightColor: "Sélectionné",
    coverTitleForecolor: "Précouleur du titre",
    coverOverlapEnabled: "Chevauchement",
    backgroundDimColor: "Couleur d’arrière-plan",
    backgroundImage: "Image d’arrière-plan",
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Remplir",
    backgroundImageFitContain: "Ajuster",
    backgroundImageFitFill: "Étirer",
    backgroundImageFitTile: "Carreau",
    backgroundOpacity: "Opacité",
    backgroundImageAttachmentFixed: "Fixe",
    backgroundImageAttachmentScroll: "Défilable",
    panelBackgroundTransparency: "Opacité de l’arrière-plan des sections",
    questionBackgroundTransparency: "Opacité de l’arrière-plan des questions",
    questionPanel: "Arrière-plan des sections et rayon d’angle",
    questionTitle: "Police du titre de la question",
    questionDescription: "Police de la description de la question",
    editorPanel: "Champs de réponse",
    editorFont: "Police des champs de réponse",
    backcolor: "Arrière-plan par défaut",
    hovercolor: "Arrière-plan du survol",
    borderDecoration: "Décoration de bordure",
    accentBackground: "Accentuation de l'arrière plan",
    accentForeground: "Accentuation du premier plan",
    primaryForecolor: "Couleur par défaut",
    primaryForecolorLight: "Couleur Désactivée",
    linesColors: "Couleurs des lignes secondaires",
    borderDefault: "Sombre",
    borderLight: "Clair",
    fontFamily: "Famille de polices",
    fontSize: "Taille de police",
    color: "Couleur",
    placeholderColor: "Couleur de l’espace réservé",
    size: "Taille",
    fontWeightRegular: "Régulier",
    fontWeightHeavy: "Lourd",
    fontWeightSemiBold: "Semi-gras",
    fontWeightBold: "Gras",
    scale: "Échelle",
    cornerRadius: "Angle",
    surveyTitle: "Police du titre du sondage",
    pageTitle: "Police du titre de la page",
    pageDescription: "Police de la description de page",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Ajouter un effet d’ombre",
    opacity: "Opacité",
    boxShadowBlur: "Flou",
    boxShadowSpread: "Propagation",
    boxShadowDrop: "Extérieur",
    boxShadowInner: "Intérieur",
    questionShadow: "Effets d’ombre",
    editorShadow: "Effets d’ombre du champ de réponse",
    headerView: "Vue",
    headerViewBasic: "Basique",
    headerViewAdvanced: "Avancé",
    coverInheritWidthFrom: "Largeur de la zone de contenu",
    coverInheritWidthFromSurvey: "Identique à l’enquête",
    coverInheritWidthFromPage: "Ajuster à la page",
    coverTextAreaWidth: "Largeur du texte",
    coverBackgroundColorSwitch: "Couleur d’arrière-plan",
    coverBackgroundColorNone: "Aucun",
    coverBackgroundColorAccentColor: "Couleur d’accentuation",
    coverBackgroundColorCustom: "Coutume",
    horizontalAlignmentLeft: "Gauche",
    horizontalAlignmentCenter: "Centre",
    horizontalAlignmentRight: "Droite",
    verticalAlignmentTop: "Retour au début",
    verticalAlignmentMiddle: "Milieu",
    verticalAlignmentBottom: "Fond",
    logoPosition: "Logo Position",
    coverTitlePosition: "Position du titre",
    coverDescriptionPosition: "Description du poste",
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
      green: "Vert"
    }
  }
};

editorLocalization.locales["fr"] = frenchTranslation;

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
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
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
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Limite de temps pour terminer la page (en secondes)"
// question.page: "Parent page" => "Page parent"
// pe.noEntriesText: "Empty entries text" => "Texte des entrées vides"
// pe.html: "HTML markup" => "Balisage HTML"
// pe.setValue: "Answer" => "Répondre"
// pe.dataFormat: "Image format" => "Format de l’image"
// pe.allowAddRows: "Allow adding rows" => "Autoriser l’ajout de lignes"
// pe.allowRemoveRows: "Allow removing rows" => "Autoriser la suppression de lignes"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Autoriser le glisser-déposer de lignes"
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
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Longueur maximale des commentaires (en caractères)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Développer automatiquement la zone de commentaires si nécessaire"
// pe.allowResizeComment: "Allow users to resize text areas" => "Autoriser les utilisateurs à redimensionner les zones de texte"
// pe.textUpdateMode: "Update text question value" => "Mettre à jour la valeur de la question textuelle"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Concentrez-vous sur la première réponse non valide"
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
// pe.panelPrevText: "Previous Panel button tooltip" => "Info-bulle précédente du bouton Panneau"
// pe.panelNextText: "Next Panel button tooltip" => "Info-bulle du bouton Panneau suivant"
// pe.showRangeInProgress: "Show progress bar" => "Afficher la barre de progression"
// pe.templateTitleLocation: "Question title location" => "Emplacement du titre de la question"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Supprimer l’emplacement du bouton Panneau"
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
// pe.showClearButton: "Show the Clear button" => "Afficher le bouton Effacer"
// pe.showNumber: "Show panel number" => "Afficher le numéro du panneau"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Largeur du logo (en valeurs acceptées par CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Hauteur du logo (en valeurs acceptées par CSS)"
// pe.readOnly: "Read-only" => "Lecture seule"
// pe.enableIf: "Editable if" => "Modifiable si"
// pe.emptyRowsText: "\"No rows\" message" => "Message « Aucune ligne »"
// pe.size: "Input field size (in characters)" => "Taille du champ d’entrée (en caractères)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Choix spéciaux distincts (Aucun, Autre, Sélectionner tout)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Choix de copie de la question suivante"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Quels choix copier ?"
// pe.showCommentArea: "Show the comment area" => "Afficher la zone de commentaires"
// pe.commentPlaceholder: "Comment area placeholder" => "Espace réservé pour la zone de commentaires"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Afficher les descriptions de taux sous forme de valeurs extrêmes"
// pe.rowsOrder: "Row order" => "Ordre des lignes"
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
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Prendre les valeurs par défaut de la dernière ligne"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Prendre les valeurs par défaut du dernier panneau"
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
// pv.text: "text" => "SMS"
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
// inputType.text: "Text" => "SMS"
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
// addRowLocation.default: "Depends on matrix layout" => "Dépend de la disposition de la matrice"
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
// theme.groupGeneral: "General" => "Généralités"
// theme.groupAdvanced: "Advanced" => "Avancé"
// theme.themeName: "Theme" => "Thème"
// theme.themeMode: "Question appearance" => "Apparence de la question"
// theme.themeModePanels: "Default" => "Faire défaut"
// theme.themeModeLightweight: "Without Panels" => "Sans panneaux"
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
// theme.surveyTitle: "Survey title font" => "Police du titre de l’enquête"
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
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// names.sharp: "Sharp" => "Tranchant"
// names.borderless: "Borderless" => "Borderless"
// names.flat: "Flat" => "Plat"
// names.doubleborder: "Double Border" => "Double bordure"
// names.layered: "Layered" => "Couches"
// names.solid: "Solid" => "Solide"
// names.threedimensional: "3D" => ".3D"

// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Êtes-vous certain de vouloir supprimer toutes les chaînes pour cette langue ?"
// ed.themeResetButton: "Reset theme settings to default" => "Réinitialiser les paramètres de thème par défaut"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// theme.placeholderColor: "Placeholder color" => "Couleur de l’espace réservé"
// ed.themeSettings: "Theme Settings" => "Paramètres du thème"
// ed.themeSettingsTooltip: "Open theme settings" => "Ouvrir les paramètres du thème"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.resetToDefaultCaption: "Reset" => "Réinitialisation"
// pv.file: "Local files" => "Fichiers locaux"
// pv.camera: "Camera" => "Caméra"
// pv.file-camera: "Local files or camera" => "Fichiers locaux ou caméra"
// ed.translateUsigAI: "Auto-translate All" => "Traduire automatiquement tout"
// ed.translationDialogTitle: "Untranslated strings" => "Chaînes non traduites"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Veuillez saisir au moins {0} éléments"
// lg.question_resetValueName: "Reset question value" => "Réinitialiser la valeur de la question"
// lg.column_resetValue: "Reset column value" => "Réinitialiser la valeur de la colonne"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.markRequired: "Mark as required" => "Marquer au besoin"
// pe.removeRequiredMark: "Remove the required mark" => "Supprimer la marque requise"
// p.resetValueIf: "Reset value if" => "Réinitialiser la valeur si"
// lg.question_setValueName: "Set question value" => "Définir la valeur de la question"
// lg.column_resetValueName: "Reset column value" => "Réinitialiser la valeur de la colonne"
// lg.column_setValueName: "Set column value" => "Définition de la valeur de colonne"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Expression dont le résultat sera affecté à la question cible."
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// p.setValueIf: "Set value if" => "Définir la valeur si"
// theme.groupHeader: "Header" => "En-tête"
// theme.coverTitleForecolor: "Title forecolor" => "Précouleur du titre"
// theme.coverOverlapEnabled: "Overlap" => "Chevauchement"
// theme.backgroundImageFitFill: "Stretch" => "Étirer"
// theme.backgroundImageFitTile: "Tile" => "Carreau"
// theme.headerView: "View" => "Vue"
// theme.headerViewBasic: "Basic" => "Basique"
// theme.headerViewAdvanced: "Advanced" => "Avancé"
// theme.coverInheritWidthFrom: "Content area width" => "Largeur de la zone de contenu"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Identique à l’enquête"
// theme.coverInheritWidthFromPage: "Fit to page" => "Ajuster à la page"
// theme.coverTextAreaWidth: "Text width" => "Largeur du texte"
// theme.coverBackgroundColorSwitch: "Background color" => "Couleur d’arrière-plan"
// theme.coverBackgroundColorNone: "None" => "Aucun"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Couleur d’accentuation"
// theme.coverBackgroundColorCustom: "Custom" => "Coutume"
// theme.horizontalAlignmentLeft: "Left" => "Gauche"
// theme.horizontalAlignmentCenter: "Center" => "Centre"
// theme.horizontalAlignmentRight: "Right" => "Droite"
// theme.verticalAlignmentTop: "Top" => "Retour au début"
// theme.verticalAlignmentMiddle: "Middle" => "Milieu"
// theme.verticalAlignmentBottom: "Bottom" => "Fond"
// theme.logoPosition: "Logo Position" => "Logo Position"
// theme.coverTitlePosition: "Title Position" => "Position du titre"
// theme.coverDescriptionPosition: "Description Position" => "Description du poste"
// lg.question_resetValueText: "reset value for question: {0}" => "Réinitialisez la valeur pour la question : {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Attribuer une valeur : {1} à la question : {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Réinitialiser la valeur de la cellule pour la colonne : {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Affecter la valeur de la cellule : {1} à la colonne : {0}"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""