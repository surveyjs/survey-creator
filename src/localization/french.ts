import {editorLocalization} from "../editorLocalization"

var frenchTranslation = {
  survey: {
      dropQuestion: "Déposer votre question ici.",
      copy: "Copier",
      addToToolbox: "Ajouter à la boîte à outils",
      deleteQuestion: "Supprimer la question"
  },
  //questionTypes
  qt: {
      checkbox: "Cases à cocher",
      comment: "Commentaire",
      dropdown: "Liste déroulante",
      file: "Fichier",
      html: "Html",
      matrix: "Matice (choix unique)",
      matrixdropdown: "Matrice (choix multiples)",
      matrixdynamic: "Matrice (Lignes dynamiques)",
      multipletext: "champ multilignes",
      radiogroup: "Boutons radio",
      rating: "Evaluation",
      text: "Champ simple"
  },
  //Strings in Editor
  ed: {
      addNewPage: "Ajouter une page",
      newPageName: "page",
      newQuestionName: "question",
      testSurvey: "Tester le questionnaire",
      testSurveyAgain: "Tester à nouveau le questionnaire",
      testSurveyWidth: "Largeur du questionnaire: ",
      embedSurvey: "Intégrer le questionnaire",
      saveSurvey: "Sauvegarder le questionnaire",
      designer: "Designer de questionnaire",
      jsonEditor: "Editer JSON",
      undo: "Annuler",
      redo: "Rétablir",
      options: "Options",
      generateValidJSON: "Générer un JSON valide",
      generateReadableJSON: "Générer un JSON lisible",
      toolbox: "Boite à outils",
      delSelObject: "Supprimer l'objet sélectionné",
      correctJSON: "SVP corriger le json",
      surveyResults: "Résultat du questionnaire: "
  },
  //Property Editors
  pe: {
      apply: "Appliquer",
      ok: "OK",
      cancel: "Annuler",
      reset: "Réinitialiser",
      close: "Fermer",
      delete: "Supprimer",
      addNew: "Ajouter un nouveau",
      removeAll: "Tout supprimer",
      edit: "Editer",
      empty: "<vide>",
      fastEntry: "Ajout rapide",
      formEntry: "Ajout via formulaire",
      testService: "Tester le service",
      expressionHelp: "Veuillez entrer une expression booléenne. Elle doit retourner Vrai(true) pour garder la question/page visible. Par exemple: {question1} = 'valeur1' or ({question2} = 3 and {question3} < 5)",

      propertyIsEmpty: "Veuillez entrer une valeur pour la propriété",
      value: "Valeur",
      text: "Texte",
      required: "Requis ?",
      columnEdit: "Editer la colonne: {0}",
      
      hasOther: "Has other item",
      name: "Nom",
      title: "Titre",
      cellType: "Type de cellule",
      colCount: "Nombre de colonnes",
      choicesOrder: "Sélectionner l'ordre des choix",
      visible: "Est visible ?",
      isRequired: "Est requis ?",
      startWithNewLine: "Commencer avec une nouvelle ligne ?",
      rows: "Nombre de lignes",
      placeHolder: "PlaceHolder (indice dans le champs)",
      showPreview: "L'aperçu d'image est-il affiché ?",
      storeDataAsText: "Stocker le contenu du fichier dans le résultat JSON sous forme de texte",
      maxSize: "Taille maximum du fichier en octets",
      imageHeight: "Hauteur de l'image",
      imageWidth: "Largeur de l'image",
      rowCount: "Nombre de lignes", 
      addRowText: "Add row button text", 
      removeRowText: "Remove row button text",
      minRateDescription: "Description note minimum", 
      maxRateDescription: "Description note maximum",
      inputType: "Type de champ",
      optionsCaption: "PlaceHolder Option",

      qEditorTitle: "Editer la question: {0}",
      tabs: {
          general: "Général",
          fileOptions: "Options",
          html: "Editeur Html",
          columns: "Colonnes",
          rows: "Lignes",
          choices: "Choix",
          visibleIf: "Visible Si",
          rateValues: "Valeur des notes",
          choicesByUrl: "Choix depuis api web",
          matrixChoices: "Choix par defaut",
          multipleTextItems: "Text Inputs"
      },

      editProperty: "Editer la propriété '{0}'",
      items: "[ Elements: {0} ]",

      enterNewValue: "Veuillez saisir la valeur.",
      noquestions: "Il n'y a aucune question dans le questionnaire.",
      createtrigger: "Veuillez créer un déclencheur",
      triggerOn: "On ",
      triggerMakePagesVisible: "Rendre les pages visibles:",
      triggerMakeQuestionsVisible: "Rendre les questions visibles:",
      triggerCompleteText: "Complete the survey if succeed.",
      triggerNotSet: "Le déclencheur n'est pas défini",
      triggerRunIf: "Exécuster si",
      triggerSetToName: "Changer la valeur de: ",
      triggerSetValue: "à: ",
      triggerIsVariable: "Ne placez pas la variable dans le résultat du questionnaire.",
      verbChangeType: "Changer le type ",
      verbChangePage: "Changer de page "
  },
  //Operators
  op: {
      empty: "est vide",
      notempty: "n'est pas vide",
      equal: "égal",
      notequal: "n'est pas égal",
      contains: "contient",
      notcontains: "ne contient pas",
      greater: "supérieur",
      less: "plus petit",
      greaterorequal: "supérieur ou égal",
      lessorequal: "plus petit ou égal"
  },
  //Embed window
  ew: {
      angular: "Utiliser la version Angular",
      jquery: "Utiliser la version jQuery",
      knockout: "Utiliser la version Knockout",
      react: "Utiliser la version React",
      vue: "Utiliser la version Vue",
      bootstrap: "Pour Bootstrap framework",
      standard: "Pas de bootstrap",
      showOnPage: "Afficher le questionnaire dans une page",
      showInWindow: "Afficher le questionnaire dans une fenêtre",
      loadFromServer: "Charger le JSON du questionnaire depuisun serveur",
      titleScript: "Scripts et styles",
      titleHtml: "HTML",
      titleJavaScript: "JavaScript"
  },
  //Properties
  p: {
      name: "nom",
      title: { name: "titre", title: "Laissez vide, si meme texte que le 'Nom'" },
      survey_title: { name: "titre", title: "Il sera affiché sur chaque page." },
      page_title: { name: "titre", title: "Titre de la page" }
  }
}

editorLocalization.locales["fr"] = frenchTranslation;