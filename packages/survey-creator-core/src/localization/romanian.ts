import { setupLocale } from "survey-creator-core";

export const roStrings = {
  // survey templates
  survey: {
    edit: "Editează",
    externalHelpLink: "Vizionați și învățați cum să creați chestionare",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Vă rugăm să lăsați o întrebare aici din cutia de instrumente.",
    addLogicItem: "Creați o regulă pentru a personaliza fluxul chestionarului.",
    copy: "Copiază",
    duplicate: "Duplică",
    addToToolbox: "Adaugă în cutia de instrumente",
    deletePanel: "Șterge panoul",
    deleteQuestion: "Șterge întrebarea",
    convertTo: "Convertiți în",
    drag: "Trage elementul",
  },
  // Creator tabs
  tabs: {
    preview: "Previzualizare",
    theme: "Teme",
    translation: "Traduceri",
    designer: "Designer",
    json: "Editor JSON",
    logic: "Logică"
  },
  // Question types
  qt: {
    default: "Implicit",
    checkbox: "Casete de selectare",
    comment: "Text lung",
    imagepicker: "Selector de imagini",
    ranking: "Clasament",
    image: "Imagine",
    dropdown: "Dropdown",
    tagbox: "Dropdown Multi-Select",
    file: "Încărcare fișier",
    html: "HTML",
    matrix: "Matrice cu selecție unică",
    matrixdropdown: "Matrice cu selecție multiplă",
    matrixdynamic: "Matrice dinamică",
    multipletext: "Casete de text multiple",
    panel: "Panou",
    paneldynamic: "Panou dinamic",
    radiogroup: "Grup de butoane radio",
    rating: "Scală de evaluare",
    text: "Intrare pe un singur rând",
    boolean: "Da/Nu (Boolean)",
    expression: "Expresie (doar citire)",
    signaturepad: "Pad de semnătură",
    buttongroup: "Grup de butoane"
  },
  toolboxCategories: {
    general: "General",
    choice: "Întrebări de alegere",
    text: "Întrebări cu răspuns text",
    containers: "Containere",
    matrix: "Întrebări matrice",
    misc: "Diverse"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Implicit ({0})",
    survey: "Chestionar",
    settings: "Setări",
    settingsTooltip: "Deschideți setările",
    surveySettings: "Setările chestionarului",
    surveySettingsTooltip: "Setările chestionarului",
    themeSettings: "Setările temei",
    themeSettingsTooltip: "Setările temei",
    creatorSettingTitle: "Setările creatorului",
    showPanel: "Afișează panoul",
    hidePanel: "Ascunde panoul",
    prevSelected: "Selectează precedentul",
    nextSelected: "Selectează următorul",
    prevFocus: "Focalizează pe precedentul",
    nextFocus: "Focalizează pe următorul",
    surveyTypeName: "Chestionar",
    pageTypeName: "Pagină",
    panelTypeName: "Panou",
    questionTypeName: "Întrebare",
    columnTypeName: "Coloană",
    addNewPage: "Adaugă pagină nouă",
    moveRight: "Derulează spre dreapta",
    moveLeft: "Derulează spre stânga",
    deletePage: "Șterge pagina",
    editPage: "Editează pagina",
    edit: "Editează",
    newPageName: "pagină",
    newQuestionName: "întrebare",
    newPanelName: "panou",
    newTextItemName: "text",
    defaultV2Theme: "Implicit",
    modernTheme: "Modern",
    defaultTheme: "Implicit (legacy)",
    testSurveyAgain: "Previzualizați chestionarul din nou",
    testSurveyWidth: "Lățimea chestionarului: ",
    navigateToMsg: "A trebuit să navighezi la",
    saveSurvey: "Salvează chestionarul",
    saveSurveyTooltip: "Salvează chestionarul",
    saveTheme: "Salvează tema",
    saveThemeTooltip: "Salvează tema",
    jsonHideErrors: "Ascunde erorile",
    jsonShowErrors: "Afișează erorile",
    undo: "Anulează",
    redo: "Refă",
    undoTooltip: "Anulează ultima modificare",
    redoTooltip: "Refă modificarea",
    expandTooltip: "Expanda",
    collapseTooltip: "Colaps",
    expandAllTooltip: "Extindeți tot",
    collapseAllTooltip: "Restrângeți tot",
    zoomInTooltip: "Măriți",
    zoom100Tooltip: "Măriți la 100%",
    zoomOutTooltip: "Micșorare",
    lockQuestionsTooltip: "Blocați starea de extindere/restrângere pentru întrebări",
    showMoreChoices: "Afișează mai multe",
    showLessChoices: "Afișează mai puține",
    copy: "Copiază",
    cut: "Taie",
    paste: "Lipește",
    copyTooltip: "Copiază selecția în clipboard",
    cutTooltip: "Taie selecția în clipboard",
    pasteTooltip: "Lipește din clipboard",
    options: "Opțiuni",
    generateValidJSON: "Generează JSON valid",
    generateReadableJSON: "Generează JSON lizibil",
    toolbox: "Cutia de instrumente",
    "property-grid": "Proprietăți",
    toolboxFilteredTextPlaceholder: "Tastați pentru a căuta...",
    toolboxNoResultsFound: "Nu au fost găsite rezultate",
    propertyGridFilteredTextPlaceholder: "Tastați pentru a căuta...",
    propertyGridNoResultsFound: "Nu au fost găsite rezultate",
    propertyGridPlaceholderTitle: "Începeți să configurați formularul",
    propertyGridPlaceholderDescription: "Faceți clic pe orice pictogramă de categorie pentru a explora setările sondajului. Setările suplimentare vor deveni disponibile odată ce adăugați un element de chestionar la suprafața de proiectare.",
    correctJSON: "Vă rugăm să corectați JSON.",
    surveyResults: "Rezultatele chestionarului ",
    surveyResultsTable: "Ca tabel",
    surveyResultsJson: "Ca JSON",
    resultsTitle: "Titlul întrebării",
    resultsName: "Numele întrebării",
    resultsValue: "Valoarea răspunsului",
    resultsDisplayValue: "Valoare afișată",
    modified: "Modificat",
    saving: "Se salvează",
    saved: "Salvat",
    propertyEditorError: "Eroare",
    saveError: "Eroare! Conținutul editorului nu este salvat.",
    translationPropertyGridTitle: "Setări de limbă",
    themePropertyGridTitle: "Setări de temă",
    addLanguageTooltip: "Adăugați limbă",
    translationLanguages: "Limbi",
    translationDeleteLanguage: "Sigur doriți să ștergeți toate șirurile pentru această limbă?",
    translationAddLanguage: "Selectați limba pentru traducere",
    translationShowAllStrings: "Toate șirurile",
    translationShowUsedStringsOnly: "Doar șirurile folosite",
    translationShowAllPages: "Toate paginile",
    translationNoStrings: "Nu există șiruri de tradus. Vă rugăm să schimbați filtrul.",
    translationExportToSCVButton: "Exportă în CSV",
    translationImportFromSCVButton: "Importă din CSV",
    translateUsigAI: "Traducere automată a tuturor",
    translateUsigAIFrom: "Traducere din: ",
    translationDialogTitle: "Șiruri netraduse",
    translationMergeLocaleWithDefault: "Fuzionați {0} cu locația implicită",
    translationPlaceHolder: "Traducere...",
    translationSource: "Sursă: ",
    translationTarget: "Țintă: ",
    translationYouTubeNotSupported: "Linkurile YouTube nu sunt acceptate.",
    themeExportButton: "Exportă",
    themeImportButton: "Importă",
    surveyJsonExportButton: "Exportă",
    surveyJsonImportButton: "Importă",
    surveyJsonCopyButton: "Copiază în clipboard",
    themeResetButton: "Resetează setările temei la implicit",
    themeResetConfirmation: "Sigur doriți să resetați tema? Toate personalizările dvs. vor fi pierdute.",
    themeResetConfirmationOk: "Da, resetează tema",
    bold: "Îngroșat",
    italic: "Italic",
    underline: "Subliniat",
    addNewQuestion: "Adaugă întrebare",
    selectPage: "Selectează pagina...",
    carryForwardChoicesCopied: "Opțiunile sunt copiate de la",
    choicesLoadedFromWebText: "Opțiunile sunt încărcate de la un serviciu web.",
    choicesLoadedFromWebLinkText: "Mergeți la setări",
    choicesLoadedFromWebPreviewTitle: "Previzualizare opțiuni încărcate",
    htmlPlaceHolder: "Conținutul HTML va fi aici.",
    panelPlaceHolder: "Lăsați o întrebare din cutia de instrumente aici.",
    surveyPlaceHolder: "Chestionarul este gol. Trageți un element din cutia de instrumente sau faceți clic pe butonul de mai jos.",
    pagePlaceHolder: "Pagina este goală. Trageți un element din cutia de instrumente sau faceți clic pe butonul de mai jos.",
    imagePlaceHolder: "Trageți și lăsați o imagine aici sau faceți clic pe butonul de mai jos și alegeți o imagine de încărcat",
    surveyPlaceHolderMobile: "Faceți clic pe butonul \"Adaugă întrebare\" de mai jos pentru a începe crearea formularului.",
    surveyPlaceholderTitle: "Formularul tău este gol",
    surveyPlaceholderTitleMobile: "Formularul tău este gol",
    surveyPlaceholderDescription: "Trageți un element din caseta de instrumente sau faceți clic pe butonul de mai jos.",
    surveyPlaceholderDescriptionMobile: "Trageți un element din caseta de instrumente sau faceți clic pe butonul de mai jos.",
    previewPlaceholderTitle: "Fără previzualizare",
    previewPlaceholderTitleMobile: "Fără previzualizare",
    previewPlaceholderDescription: "Sondajul nu conține elemente vizibile.",
    previewPlaceholderDescriptionMobile: "Sondajul nu conține elemente vizibile.",
    translationsPlaceholderTitle: "Fără șiruri de tradus",
    translationsPlaceholderTitleMobile: "Fără șiruri de tradus",
    translationsPlaceholderDescription: "Adăugați elemente la formular sau modificați filtrul șiruri din bara de instrumente.",
    translationsPlaceholderDescriptionMobile: "Adăugați elemente la formular sau modificați filtrul șiruri din bara de instrumente.",
    pagePlaceHolderMobile: "Faceți clic pe butonul \"Adaugă întrebare\" de mai jos pentru a adăuga un nou element pe pagină.",
    panelPlaceHolderMobile: "Faceți clic pe butonul \"Adaugă întrebare\" de mai jos pentru a adăuga un nou element în panou.",
    imagePlaceHolderMobile: "Faceți clic pe butonul de mai jos și alegeți o imagine de încărcat",
    imageChooseImage: "Alegeți imaginea",
    addNewTypeQuestion: "Adăugați {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Element ",
    selectFile: "Selectați un fișier",
    removeFile: "Eliminați fișierul",
    lg: {
      addNewItem: "Adăugați regulă nouă",
      empty_tab: "Creați o regulă pentru a personaliza fluxul chestionarului.",
      logicPlaceholderTitle: "Fără reguli logice",
      logicPlaceholderTitleMobile: "Fără reguli logice",
      logicPlaceholderDescription: "Creați o regulă pentru a personaliza fluxul sondajului.",
      logicPlaceholderDescriptionMobile: "Creați o regulă pentru a personaliza fluxul sondajului.",
      page_visibilityName: "Afișează/ascunde pagina",
      page_enableName: "Activează/dezactivează pagina",
      page_requireName: "Fă pagina obligatorie",
      panel_visibilityName: "Afișează/ascunde panoul",
      panel_enableName: "Activează/dezactivează panoul",
      panel_requireName: "Fă panoul obligatoriu",
      question_visibilityName: "Afișează/ascunde întrebarea",
      question_enableName: "Activează/dezactivează întrebarea",
      question_requireName: "Fă întrebarea obligatorie",
      question_resetValueName: "Resetează valoarea întrebării",
      question_setValueName: "Setează valoarea întrebării",
      column_visibilityName: "Afișează/ascunde coloana",
      column_enableName: "Activează/dezactivează coloana",
      column_requireName: "Fă coloana obligatorie",
      column_resetValueName: "Resetează valoarea coloanei",
      column_setValueName: "Setează valoarea coloanei",
      trigger_completeName: "Finalizează chestionarul",
      trigger_setvalueName: "Setează răspunsul",
      trigger_copyvalueName: "Copiază răspunsul",
      trigger_skipName: "Sari la întrebare",
      trigger_runExpressionName: "Execută expresia",
      completedHtmlOnConditionName: "Setează marcajul paginii de „Mulțumire”",
      page_visibilityDescription: "Faceți pagina vizibilă atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți pagina invizibilă.",
      panel_visibilityDescription: "Faceți pagina vizibilă atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți panoul invizibil.",
      panel_enableDescription: "Faceți panoul și toate elementele din interiorul său activate atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți-le dezactivate.",
      question_visibilityDescription: "Faceți întrebarea vizibilă atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți întrebarea invizibilă.",
      question_enableDescription: "Faceți întrebarea activată atunci când expresia logică evaluează la adevărat. În caz contrar, mențineți întrebarea dezactivată.",
      question_requireDescription: "Întrebarea devine obligatorie atunci când expresia logică evaluează la adevărat.",
      trigger_completeDescription: "Când expresia logică evaluează la adevărat, chestionarul se încheie, iar respondentul vede pagina de „Mulțumire”.",
      trigger_setvalueDescription: "Când valorile întrebărilor utilizate în expresia logică se schimbă și expresia evaluează la adevărat, valoarea specificată este atribuită întrebării selectate.",
      trigger_copyvalueDescription: "Când valorile întrebărilor utilizate în expresia logică se schimbă și expresia evaluează la adevărat, valoarea întrebării selectate este copiată în altă întrebare.",
      trigger_skipDescription: "Când expresia logică evaluează la adevărat, chestionarul se concentrează/sare la întrebarea selectată.",
      trigger_runExpressionDescription: "Când expresia logică evaluează la adevărat, chestionarul evaluează o altă expresie. Opțional, rezultatul ultimei expresii poate fi atribuit ca valoare întrebării selectate",
      completedHtmlOnConditionDescription: "Dacă expresia logică evaluează la adevărat, pagina de „Mulțumire” afișează conținutul specificat.",
      itemExpressionText: "Când expresia: '{0}' returnează adevărat", //{0} - the expression
      itemEmptyExpressionText: "Regulă nouă",
      page_visibilityText: "face pagina {0} vizibilă", //{0} page name
      panel_visibilityText: "face panoul {0} vizibil", //{0} panel name
      panel_enableText: "face panoul {0} activ", //{0} panel name
      question_visibilityText: "face întrebarea {0} vizibilă", //{0} question name
      question_enableText: "face întrebarea {0} activă", //{0} question name
      question_requireText: "face întrebarea {0} obligatorie", //{0} question name
      question_resetValueText: "resetează valoarea pentru întrebarea: {0}", //{0} question name.
      question_setValueText: "atribuiți valoarea: {1} întrebării: {0}",
      column_visibilityText: "face coloana {0} a întrebării {1} vizibilă", //{0} column name, {1} question name
      column_enableText: "face coloana {0} a întrebării {1} activă", //{0} column name, {1} question name
      column_requireText: "face coloana {0} a întrebării {1} obligatorie", //{0} column name, {1} question name
      column_resetValueText: "resetează valoarea celulei pentru coloana: {0}", //{0} column name
      column_setValueText: "atribuiți valoarea celulei: {1} coloanei: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: "O expresie al cărei rezultat va fi atribuit întrebării țintă.",
      trigger_completeText: "chestionarul devine completat",
      trigger_setvalueText: "setați în întrebarea: {0} valoarea {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "ștergeți valoarea întrebării: {0}", //{0} question name
      trigger_copyvalueText: "copiați în întrebarea: {0} valoarea din întrebarea {1}", //{0} and {1} question names
      trigger_skipText: "chestionarul sare la întrebarea {0}", //{0} question name
      trigger_runExpressionText1: "execută expresia: '{0}'", //{0} the expression
      trigger_runExpressionText2: " și setați rezultatul acesteia în întrebarea: {0}", //{0} question name
      completedHtmlOnConditionText: "afișați text personalizat pentru pagina de „Mulțumire”.",
      showAllQuestions: "Toate întrebările",
      showAllActionTypes: "Toate tipurile de acțiuni",
      conditions: "Condiție(i)",
      actions: "Acțiune(i)",
      expressionEditorTitle: "Definește condiție(i)",
      actionsEditorTitle: "Definește acțiune(i)",
      deleteAction: "Șterge acțiunea",
      addNewAction: "Adaugă acțiune",
      selectedActionCaption: "Selectează acțiunea...",
      expressionInvalid: "Expresia logică este goală sau invalidă. Vă rugăm să o corectați.",
      noActionError: "Vă rugăm să adăugați cel puțin o acțiune.",
      actionInvalid: "Vă rugăm să remediați problemele în acțiunile dvs.",
      uncompletedRule_title: "Regulile logice sunt incomplete",
      uncompletedRule_text: "Nu ați completat unele dintre regulile logice. Dacă părăsiți fila acum, modificările vor fi pierdute. Doriți să părăsiți fila fără a completa modificările?",
      uncompletedRule_apply: "Da",
      uncompletedRule_cancel: "Nu, vreau să completez regulile"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Numele panoului",
      title: "Titlul panoului",
      description: "Descrierea panoului",
      visibleIf: "Fă panoul vizibil dacă",
      requiredIf: "Fă panoul obligatoriu dacă",
      questionOrder: "Ordinea întrebărilor în panou",
      page: "Mută panoul la pagina",
      startWithNewLine: "Afișează panoul pe un rând nou",
      state: "Starea de colaps a panoului",
      width: "Lățimea panoului inline",
      minWidth: "Lățimea minimă a panoului",
      maxWidth: "Lățimea maximă a panoului",
      showNumber: "Numerotați acest panou"
    },
    panellayoutcolumn: {
      effectiveWidth: "Lățimea efectivă, %",
      questionTitleWidth: "Lățimea titlului întrebării, px"
    },
    paneldynamic: {
      name: "Numele panoului",
      title: "Titlul panoului",
      description: "Descrierea panoului",
      visibleIf: "Fă panoul vizibil dacă",
      requiredIf: "Fă panoul obligatoriu dacă",
      page: "Mută panoul la pagina",
      startWithNewLine: "Afișează panoul pe un rând nou",
      state: "Starea de colaps a panoului",
      width: "Lățimea panoului inline",
      minWidth: "Lățimea minimă a panoului",
      maxWidth: "Lățimea maximă a panoului",
      confirmDelete: "Confirmă ștergerea panoului",
      templateDescription: "Model de descriere a panoului",
      templateTitle: "Model de titlu a panoului",
      noEntriesText: "Text panou gol",
      templateTabTitle: "Model de titlu a filei",
      tabTitlePlaceholder: "Locaș pentru titlul filei",
      templateVisibleIf: "Fă un panou individual vizibil dacă",
      showNumber: "Numerotați panoul",
      titleLocation: "Alinierea titlului panoului",
      descriptionLocation: "Alinierea descrierii panoului",
      templateQuestionTitleLocation: "Alinierea titlului întrebării",
      templateQuestionTitleWidth: "Lățimea titlului întrebării",
      templateErrorLocation: "Alinierea mesajului de eroare",
      newPanelPosition: "Locația noului panou",
      showRangeInProgress: "Afișați bara de progres",
      keyName: "Prevenirea răspunsurilor duplicate în următoarea întrebare"
    },
    question: {
      name: "Numele întrebării",
      title: "Titlul întrebării",
      description: "Descrierea întrebării",
      visibleIf: "Fă întrebarea vizibilă dacă",
      requiredIf: "Fă întrebarea obligatorie dacă",
      page: "Mută întrebarea la pagina",
      state: "Starea de colaps a casetei întrebării",
      showNumber: "Numerotați această întrebare",
      titleLocation: "Alinierea titlului întrebării",
      descriptionLocation: "Alinierea descrierii întrebării",
      errorLocation: "Alinierea mesajului de eroare",
      indent: "Crește indentarea internă",
      width: "Lățimea întrebării inline",
      minWidth: "Lățimea minimă a întrebării",
      maxWidth: "Lățimea maximă a întrebării",
      textUpdateMode: "Actualizează valoarea câmpului de intrare"
    },
    signaturepad: {
      signatureWidth: "Lățimea zonei de semnătură",
      signatureHeight: "Înălțimea zonei de semnătură",
      signatureAutoScaleEnabled: "Auto-scalare zona de semnătură",
      showPlaceholder: "Afișează un locaș în zona de semnătură",
      placeholder: "Text locaș",
      placeholderReadOnly: "Text locaș în modul doar citire sau previzualizare",
      allowClear: "Afișează butonul de ștergere în zona de semnătură",
      penMinWidth: "Lățimea minimă a creionului",
      penMaxWidth: "Lățimea maximă a creionului",
      penColor: "Culoarea creionului"
    },
    comment: {
      rows: "Înălțimea câmpului de intrare (în linii)"
    },
    showQuestionNumbers: "Numerotarea întrebărilor",
    questionStartIndex: "Tipul de indexare a întrebărilor",
    expression: {
      name: "Numele expresiei",
      title: "Titlul expresiei",
      description: "Descrierea expresiei",
      expression: "Expresie"
    },
    trigger: {
      expression: "Expresie"
    },
    calculatedvalue: {
      expression: "Expresie"
    },
    // survey templates
    survey: {
      title: "Titlul chestionarului",
      description: "Descrierea chestionarului",
      readOnly: "Faceți chestionarul doar în citire"
    },
    page: {
      name: "Numele paginii",
      title: "Titlul paginii",
      description: "Descrierea paginii",
      visibleIf: "Fă pagina vizibilă dacă",
      requiredIf: "Fă pagina obligatorie dacă",
      timeLimit: "Limită de timp pentru finalizarea paginii",
      questionOrder: "Ordinea întrebărilor pe pagină"
    },
    matrixdropdowncolumn: {
      name: "Numele coloanei",
      title: "Titlul coloanei",
      isUnique: "Prevenirea răspunsurilor duplicate",
      width: "Lățimea coloanei",
      minWidth: "Lățimea minimă a coloanei",
      rows: "Înălțimea câmpului de intrare (în linii)",
      visibleIf: "Fă coloana vizibilă dacă",
      requiredIf: "Fă coloana obligatorie dacă",
      showInMultipleColumns: "Fiecare opțiune într-o coloană separată"
    },
    multipletextitem: {
      name: "Nume",
      title: "Titlu"
    },
    masksettings: {
      saveMaskedValue: "Salvați valoarea mascată în rezultatele chestionarului"
    },
    patternmask: {
      pattern: "Model de valoare"
    },
    datetimemask: {
      min: "Valoarea minimă",
      max: "Valoarea maximă"
    },
    numericmask: {
      allowNegativeValues: "Permiteți valori negative",
      thousandsSeparator: "Separator de mii",
      decimalSeparator: "Separator zecimal",
      precision: "Precizia valorii",
      min: "Valoarea minimă",
      max: "Valoarea maximă"
    },
    currencymask: {
      prefix: "Prefix valutar",
      suffix: "Sufix valutar"
    },
    imageHeight: "Înălțimea zonei de afișare",
    imageWidth: "Lățimea zonei de afișare",
    valueName: "Identificator de îmbinare",
    defaultDisplayValue: "Valoarea de afișare implicită pentru textele dinamice",
    rateDescriptionLocation: "Alinierea etichetei",
    size: "Lățimea câmpului de intrare (în caractere)",
    cellErrorLocation: "Alinierea mesajului de eroare al celulei",
    enabled: "Activat",
    disabled: "Dezactivat",
    inherit: "Moștenit",
    apply: "Aplică",
    ok: "OK",
    save: "Salvează",
    clear: "Șterge",
    saveTooltip: "Salvează",
    cancel: "Anulează",
    set: "Setează",
    reset: "Resetează",
    change: "Schimbă",
    refresh: "Reîmprospătează",
    close: "Închide",
    delete: "Șterge",
    add: "Adaugă",
    addNew: "Adaugă nou",
    addItem: "Faceți clic pentru a adăuga un element...",
    removeItem: "Faceți clic pentru a elimina elementul...",
    dragItem: "Trageți elementul",
    addOther: "Altul",
    addSelectAll: "Selectează tot",
    addNone: "Niciunul",
    removeAll: "Eliminați tot",
    edit: "Editează",
    back: "Întoarceți-vă fără a salva",
    backTooltip: "Întoarceți-vă fără a salva",
    saveAndBack: "Salvează și întoarce-te",
    saveAndBackTooltip: "Salvează și întoarce-te",
    doneEditing: "Gata",
    editChoices: "Editează alegerile",
    showChoices: "Afișează alegerile",
    move: "Mută",
    empty: "<gol>",
    emptyValue: "Valoarea este goală",
    fastEntry: "Intrare manuală",
    fastEntryNonUniqueError: "Valoarea '{0}' nu este unică",
    fastEntryChoicesCountError: "Vă rugăm să limitați numărul de elemente de la {0} la {1}",
    fastEntryChoicesMinCountError: "Vă rugăm să introduceți cel puțin {0} elemente",
    fastEntryPlaceholder: "Introduceți lista opțiunilor de alegere și ID-urile acestora în următorul format:\n\nid|opțiune\n\nUn ID de opțiune de alegere nu este vizibil pentru respondenți și poate fi utilizat în regulile condiționale.",
    formEntry: "Intrare în formular",
    testService: "Testează serviciul",
    itemSelectorEmpty: "Vă rugăm să selectați elementul",
    conditionActionEmpty: "Vă rugăm să selectați acțiunea",
    conditionSelectQuestion: "Selectează o întrebare...",
    conditionSelectPage: "Selectează o pagină...",
    conditionSelectPanel: "Selectează un panou...",
    conditionValueQuestionTitle: "Vă rugăm să introduceți/selectați valoarea",
    aceEditorHelp: "Apăsați ctrl+spațiu pentru a obține sugestii de completare a expresiei",
    aceEditorRowTitle: "Rândul curent",
    aceEditorPanelTitle: "Panoul curent",
    showMore: "Pentru mai multe detalii, vă rugăm să consultați documentația",
    assistantTitle: "Întrebări disponibile",
    cellsEmptyRowsColumns: "Trebuie să existe cel puțin o coloană sau un rând",
    showPreviewBeforeComplete: "Revizuire înainte de a trimite",
    overridingPropertyPrefix: "Activat de o condiție",
    resetToDefaultCaption: "Resetează",
    propertyIsEmpty: "Vă rugăm să introduceți o valoare",
    propertyIsNoUnique: "Vă rugăm să introduceți o valoare unică",
    propertyNameIsNotUnique: "Vă rugăm să introduceți un nume unic",
    propertyNameIsIncorrect: "Nu folosiți cuvinte rezervate: \"item\", \"choice\", \"panel\", \"row\".",
    listIsEmpty: "Nu aveți încă niciun element",
    "listIsEmpty@choices": "Nu aveți încă nicio alegere",
    "listIsEmpty@columns": "Nu aveți încă nicio coloană",
    "listIsEmpty@gridLayoutColumns": "Nu aveți încă coloane de aspect",
    "listIsEmpty@rows": "Nu aveți încă niciun rând",
    "listIsEmpty@validators": "Nu aveți încă nicio regulă de validare",
    "listIsEmpty@calculatedValues": "Nu aveți încă nicio variabilă personalizată",
    "listIsEmpty@triggers": "Nu aveți încă niciun declanșator",
    "listIsEmpty@navigateToUrlOnCondition": "Nu aveți încă niciun link",
    "listIsEmpty@pages": "Nu aveți încă nicio pagină",
    "addNew@choices": "Adăugați o alegere nouă",
    "addNew@columns": "Adăugați o coloană nouă",
    "addNew@rows": "Adăugați un rând nou",
    "addNew@validators": "Adăugați o regulă nouă",
    "addNew@calculatedValues": "Adăugați o variabilă nouă",
    "addNew@triggers": "Adăugați un declanșator nou",
    "addNew@navigateToUrlOnCondition": "Adăugați un URL nou",
    "addNew@pages": "Adaugă o pagină nouă",
    expressionIsEmpty: "Expresia este goală",
    value: "Valoare",
    text: "Text",
    rowid: "ID rând",
    imageLink: "URL fișier imagine sau video",
    columnEdit: "Editează coloana: {0}",
    itemEdit: "Editează elementul: {0}",
    url: "URL",
    path: "Calea către date",
    choicesbyurl: {
      url: "URL serviciu web",
      valueName: "Obțineți valoarea de stocat din următoarea proprietate"
    },
    titleName: "Obțineți valoarea de afișat din următoarea proprietate",
    imageLinkName: "Obțineți URL-urile fișierelor din următoarea proprietate",
    allowEmptyResponse: "Acceptă răspuns gol",
    titlePlaceholder: "Titlu",
    surveyTitlePlaceholder: "Titlul chestionarului",
    pageTitlePlaceholder: "Pagina {num}",
    startPageTitlePlaceholder: "Pagina de pornire",
    descriptionPlaceholder: "Descriere",
    surveyDescriptionPlaceholder: "Descriere",
    pageDescriptionPlaceholder: "Descriere",
    textWrapEnabled: "Înfășurați alegerile",
    showOtherItem: "Activează opțiunea „Altul”",
    otherText: "Redenumește opțiunea „Altul”",
    showNoneItem: "Activează opțiunea „Niciunul”",
    showRefuseItem: "Activează opțiunea „Refuz să răspund”",
    showDontKnowItem: "Activează opțiunea „Nu știu”",
    noneText: "Redenumește opțiunea „Niciunul”",
    showSelectAllItem: "Activează opțiunea „Selectează tot”",
    selectAllText: "Redenumește opțiunea „Selectează tot”",
    choicesMin: "Valoarea minimă pentru elementele auto-generate",
    choicesMax: "Valoarea maximă pentru elementele auto-generate",
    choicesStep: "Valoarea pasului pentru elementele auto-generate",
    name: "Nume",
    title: "Titlu",
    cellType: "Tip intrare celulă",
    colCount: "Număr de coloane",
    choicesOrder: "Ordinea alegerilor",
    allowCustomChoices: "Permiteți opțiuni personalizate",
    visible: "Vizibil",
    isRequired: "Obligatoriu",
    markRequired: "Marchează ca obligatoriu",
    removeRequiredMark: "Elimină marcajul obligatoriu",
    eachRowRequired: "Necesită un răspuns în fiecare rând",
    eachRowUnique: "Prevenirea răspunsurilor duplicate în rânduri",
    requiredErrorText: "Mesaj de eroare pentru întrebările obligatorii",
    startWithNewLine: "Afișează întrebarea pe un rând nou",
    rows: "Rânduri",
    cols: "Coloane",
    placeholder: "Text locaș în câmpul de intrare",
    showPreview: "Afișează zona de previzualizare",
    storeDataAsText: "Stocați conținutul fișierului în rezultatul JSON ca text",
    maxSize: "Dimensiunea maximă a fișierului (în octeți)",
    rowCount: "Număr de rânduri",
    columnLayout: "Aspect coloane",
    addRowButtonLocation: "Alinierea butonului „Adaugă rând”",
    transposeData: "Transpune rândurile în coloane",
    addRowText: "Textul butonului „Adaugă rând”",
    removeRowText: "Textul butonului „Elimină rând”",
    rateMin: "Valoarea minimă a evaluării",
    rateMax: "Valoarea maximă a evaluării",
    rateStep: "Valoarea pasului",
    minRateDescription: "Etichetă valoare minimă",
    maxRateDescription: "Etichetă valoare maximă",
    inputType: "Tip intrare",
    optionsCaption: "Locaș opțiune",
    defaultValue: "Răspuns implicit",
    cellsDefaultRow: "Texte implicite",
    surveyEditorTitle: "Editează setările chestionarului",
    qEditorTitle: "Editează: {0}",
    maxLength: "Limită maximă de caractere",
    buildExpression: "Construiește",
    editExpression: "Editează",
    and: "și",
    or: "sau",
    remove: "Elimină",
    addCondition: "Adaugă condiție",
    emptyLogicPopupMessage: "Selectați o întrebare pentru a începe configurarea condițiilor.",
    if: "Dacă",
    then: "atunci",
    setToName: "Întrebarea țintă",
    fromName: "Întrebarea de unde se copiază răspunsul",
    gotoName: "Întrebarea la care săriți",
    ruleIsNotSet: "Regula este incorectă",
    includeIntoResult: "Adăugați la rezultatele chestionarului",
    showTitle: "Faceți titlul și descrierea vizibile",
    expandCollapseTitle: "Extinde/colapsează titlul",
    locale: "Selectați o limbă pentru chestionar",
    simulator: "Selectați tipul de dispozitiv",
    landscapeOrientation: "Comutați la orientarea peisaj",
    portraitOrientation: "Comutați la orientarea portret",
    clearInvisibleValues: "Ștergeți valorile întrebărilor ascunse",
    cookieName: "Limitează la un singur răspuns",
    partialSendEnabled: "Auto-salvați progresul chestionarului la schimbarea paginii",
    storeOthersAsComment: "Salvați valoarea opțiunii „Altul” ca proprietate separată",
    showPageTitles: "Afișați titlurile paginilor",
    showPageNumbers: "Afișați numerele paginilor",
    pagePrevText: "Textul butonului „Pagina anterioară”",
    pageNextText: "Textul butonului „Pagina următoare”",
    completeText: "Textul butonului „Completează chestionarul”",
    previewText: "Textul butonului „Revizuiește răspunsurile”",
    editText: "Textul butonului „Editează răspunsul”",
    startSurveyText: "Textul butonului „Începe chestionarul”",
    showNavigationButtons: "Afișați/ascundeți butoanele de navigare",
    navigationButtonsLocation: "Alinierea butoanelor de navigare",
    showPrevButton: "Afișați butonul „Pagina anterioară”",
    firstPageIsStartPage: "Prima pagină este o pagină de început",
    showCompletePage: "Afișați pagina de „Mulțumire”",
    autoAdvanceEnabled: "Trecerea automată la pagina următoare",
    autoAdvanceAllowComplete: "Finalizați chestionarul automat",
    showProgressBar: "Alinierea barei de progres",
    progressBarLocation: "Alinierea barei de progres",
    questionTitleLocation: "Alinierea titlului întrebării",
    questionTitleWidth: "Lățimea titlului întrebării",
    requiredMark: "Simbol(uri) obligatoriu(e)",
    questionTitleTemplate: "Șablon titlu întrebare, implicit este: '{no}. {require} {title}'",
    questionErrorLocation: "Alinierea mesajului de eroare",
    autoFocusFirstQuestion: "Focalizați pe prima întrebare la o pagină nouă",
    questionOrder: "Ordinea întrebărilor",
    timeLimit: "Limită de timp pentru finalizarea chestionarului",
    timeLimitPerPage: "Limită de timp pentru finalizarea unei pagini",
    showTimer: "Utilizarea unui cronometru",
    timerLocation: "Alinierea timerului",
    timerInfoMode: "Modul timerului",
    renderMode: "Modul de afișare a panoului",
    allowAddPanel: "Permite adăugarea panoului",
    allowRemovePanel: "Permite eliminarea panoului",
    addPanelText: "Textul butonului „Adaugă panou”",
    removePanelText: "Textul butonului „Elimină panou”",
    isSinglePage: "Afișează toate elementele pe o singură pagină",
    html: "Marcaj HTML",
    setValue: "Răspuns",
    dataFormat: "Format de stocare",
    allowAddRows: "Permite adăugarea rândului",
    allowRemoveRows: "Permite eliminarea rândului",
    allowRowReorder: "Permite reordonarea rândurilor",
    responsiveImageSizeHelp: "Nu se aplică dacă specificați lățimea sau înălțimea exactă a zonei de afișare.",
    minImageWidth: "Lățimea minimă a zonei de afișare",
    maxImageWidth: "Lățimea maximă a zonei de afișare",
    minImageHeight: "Înălțimea minimă a zonei de afișare",
    maxImageHeight: "Înălțimea maximă a zonei de afișare",
    minValue: "Valoarea minimă",
    maxValue: "Valoarea maximă",
    caseInsensitive: "Insensibil la majuscule și minuscule",
    minLength: "Lungimea minimă (în caractere)",
    allowDigits: "Permiteți cifre",
    minCount: "Numărul minim",
    maxCount: "Numărul maxim",
    regex: "Expresie regulată",
    surveyvalidator: {
      text: "Mesaj de eroare",
      expression: "Expresie de validare"
    },
    totalText: "Antet rând total",
    totalType: "Metoda de agregare",
    totalExpression: "Expresie valoare totală",
    totalDisplayStyle: "Format de afișare a valorii totale",
    totalCurrency: "Monedă",
    totalFormat: "Șir formatat",
    logo: "Logo-ul chestionarului",
    questionsOnPageMode: "Aspectul chestionarului",
    maxTextLength: "Restricționează lungimea răspunsului",
    maxCommentLength: "Restricționează lungimea comentariului",
    commentAreaRows: "Înălțimea zonei de comentarii (în linii)",
    autoGrowComment: "Auto-extindere a zonelor de text",
    allowResizeComment: "Permite utilizatorilor să redimensioneze zonele de text",
    textUpdateMode: "Actualizează valorile câmpurilor de intrare",
    maskType: "Tip mască de intrare",
    autoFocusFirstError: "Focalizați pe primul răspuns invalid",
    checkErrorsMode: "Rulați validarea",
    validateVisitedEmptyFields: "Validarea câmpurilor goale pentru focalizarea pierdută",
    navigateToUrl: "Redirecționare către un link extern după trimitere",
    navigateToUrlOnCondition: "Link extern dinamic",
    completedBeforeHtml: "Marcaj de afișat dacă utilizatorul a completat deja acest chestionar",
    completedHtml: "Marcaj pagina de „Mulțumire”",
    completedHtmlOnCondition: "Marcaj dinamic pentru pagina de „Mulțumire”",
    loadingHtml: "Marcaj de afișat în timp ce modelul chestionarului se încarcă",
    commentText: "Text zona de comentarii",
    autocomplete: "Tip autocompletare",
    labelTrue: "Etichetă pentru „Adevărat”",
    labelFalse: "Etichetă pentru „Fals”",
    allowClear: "Afișează butonul de ștergere",
    searchMode: "Modul de căutare",
    displayStyle: "Format de afișare",
    format: "Șir formatat",
    maximumFractionDigits: "Numărul maxim de cifre fracționare",
    minimumFractionDigits: "Numărul minim de cifre fracționare",
    useGrouping: "Afișează separatori de grupare",
    allowMultiple: "Permite încărcarea multiplă de fișiere",
    allowImagesPreview: "Previzualizează imaginile încărcate",
    acceptedTypes: "Tipuri de fișiere acceptate",
    waitForUpload: "Așteptați finalizarea încărcării",
    needConfirmRemoveFile: "Confirmați ștergerea fișierului",
    detailPanelMode: "Alinierea extinderii rândului",
    minRowCount: "Număr minim de rânduri",
    maxRowCount: "Număr maxim de rânduri",
    confirmDelete: "Confirmați ștergerea rândului",
    confirmDeleteText: "Mesaj de confirmare",
    panelCount: "Număr inițial de panouri",
    minPanelCount: "Număr minim de panouri",
    maxPanelCount: "Număr maxim de panouri",
    panelsState: "Starea de colaps a panoului intern",
    prevPanelText: "Textul butonului „Panoul anterior”",
    nextPanelText: "Textul butonului „Panoul următor”",
    removePanelButtonLocation: "Alinierea butonului „Elimină panou”",
    hideIfRowsEmpty: "Ascunde întrebarea dacă nu are rânduri",
    hideColumnsIfEmpty: "Ascunde coloanele dacă nu sunt rânduri",
    rateValues: "Valori personalizate de evaluare",
    rateCount: "Număr de evaluări",
    autoGenerate: "Configurare evaluare",
    hideIfChoicesEmpty: "Ascunde întrebarea dacă nu are alegeri",
    minWidth: "Lățime minimă",
    maxWidth: "Lățime maximă",
    width: "Lățime",
    showHeader: "Afișează anteturile coloanelor",
    horizontalScroll: "Afișează bara de derulare orizontală",
    columnMinWidth: "Lățimea minimă a coloanei",
    rowTitleWidth: "Lățimea antetului rândului",
    valueTrue: "Valoare de stocat când se selectează „Adevărat”",
    valueFalse: "Valoare de stocat când se selectează „Fals”",
    minErrorText: "Mesaj de eroare pentru „Valoarea este sub minim”",
    maxErrorText: "Mesaj de eroare pentru „Valoarea depășește maximul”",
    otherErrorText: "Mesaj de eroare pentru „Comentariu gol”",
    keyDuplicationError: "Mesaj de eroare pentru răspunsuri duplicate",
    minSelectedChoices: "Alegere minimă pentru selectare",
    maxSelectedChoices: "Alegere maximă pentru selectare",
    logoWidth: "Lățimea logo-ului",
    logoHeight: "Înălțimea logo-ului",
    readOnly: "Doar citire",
    enableIf: "Dezactivează modul doar citire dacă",
    noRowsText: "Mesaj „Nu sunt rânduri”",
    separateSpecialChoices: "Separă alegerile speciale",
    choicesFromQuestion: "Copiază alegerile din următoarea întrebare",
    choicesFromQuestionMode: "Care opțiuni de alegere să fie copiate",
    choiceValuesFromQuestion: "Utilizați valorile din următoarea coloană de matrice sau întrebare de panou ca ID-uri de alegere",
    choiceTextsFromQuestion: "Utilizați valorile din următoarea coloană de matrice sau întrebare de panou ca texte de alegere",
    progressBarShowPageTitles: "Afișează titlurile paginilor în bara de progres",
    progressBarShowPageNumbers: "Afișează numerele paginilor în bara de progres",
    showCommentArea: "Adaugă o casetă de comentarii",
    commentPlaceholder: "Text locaș pentru caseta de comentarii",
    displayRateDescriptionsAsExtremeItems: "Afișați etichetele ca valori extreme",
    rowOrder: "Ordinea rândurilor",
    columnsLayout: "Aspect coloane",
    columnColCount: "Număr coloane imbricate",
    correctAnswer: "Răspuns corect",
    defaultPanelValue: "Valori implicite",
    cells: "Texte celulă",
    fileInputPlaceholder: "Selectați un fișier sau introduceți un link către fișier...",
    keyName: "Prevenirea răspunsurilor duplicate în următoarea coloană",
    itemvalue: {
      visibleIf: "Fă opțiunea vizibilă dacă",
      enableIf: "Fă opțiunea selectabilă dacă"
    },
    "itemvalue@rows": {
      visibleIf: "Fă rândul vizibil dacă",
      enableIf: "Fă rândul editabil dacă"
    },
    imageitemvalue: {
      text: "Text alternativ"
    },
    logoPosition: "Alinierea logo-ului",
    addLogo: "Adăugați logo...",
    changeLogo: "Schimbați logo...",
    logoPositions: {
      none: "Eliminați logo-ul",
      left: "Stânga",
      right: "Dreapta",
      top: "Deasupra",
      bottom: "Dedesubt"
    },
    previewMode: "Modul de previzualizare",
    gridLayoutEnabled: "Activarea aspectului grilei",
    gridLayoutColumns: "Coloane de aspect grilă",
    maskSettings: "Setările măștii",
    detailErrorLocation: "Alinierea mesajelor de eroare de extindere a rândurilor",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Aspect panou"
      },
      general: "General",
      fileOptions: "Opțiuni",
      html: "Editor HTML",
      columns: "Coloane",
      rows: "Rânduri",
      choices: "Opțiuni de alegere",
      items: "Elemente",
      visibleIf: "Vizibil dacă",
      enableIf: "Editabil dacă",
      requiredIf: "Obligatoriu dacă",
      rateValues: "Valori evaluare",
      choicesByUrl: "Alegeri dintr-un serviciu web",
      matrixChoices: "Alegeri implicite",
      multipleTextItems: "Câmpuri de text",
      numbering: "Numerotare",
      validators: "Validatori",
      navigation: "Navigare",
      question: "Setări întrebare",
      pages: "Pagini",
      timer: "Modul chestionar",
      calculatedValues: "Valori calculate",
      triggers: "Declanșatori",
      templateTitle: "Șablon titlu",
      totals: "Totaluri",
      logic: "Condiții",
      mask: "Setări mască de intrare",
      layout: {
        panel: "Aspect panou",
        question: "Aspect",
        base: "Aspect"
      },
      data: "Date",
      validation: "Validare",
      cells: "Texte celulă individuale",
      showOnCompleted: "Pagina de „Mulțumire”",
      logo: "Logo-ul în antetul chestionarului",
      slider: "Slider",
      expression: "Expresie",
      questionSettings: "Setări întrebare",
      header: "Antet",
      background: "Fundal",
      appearance: "Aspect",
      accentColors: "Culori de accent",
      surfaceBackground: "Fundal de suprafață",
      scaling: "Scalare",
      others: "Altele"
    },
    editProperty: "Editează proprietatea '{0}'",
    items: "Elemente",
    choicesVisibleIf: "Fă alegerile vizibile dacă",
    choicesEnableIf: "Fă alegerile selectabile dacă",
    columnsEnableIf: "Fă coloanele vizibile dacă",
    rowsEnableIf: "Fă rândurile vizibile dacă",
    innerIndent: "Crește indentarea internă",
    copyDefaultValueFromLastEntry: "Utilizați răspunsurile de la ultima intrare ca implicit",
    enterNewValue: "Vă rugăm să introduceți o valoare.",
    noquestions: "Nu există întrebări în chestionar.",
    createtrigger: "Vă rugăm să creați un declanșator",
    titleKeyboardAdornerTip: "Apăsați butonul Enter pentru a edita",
    keyboardAdornerTip: "Apăsați butonul Enter pentru a edita elementul, apăsați butonul Ștergere pentru a șterge elementul, apăsați Alt + săgeată în sus sau în jos pentru a muta elementul",
    triggerOn: "Pe ",
    triggerMakePagesVisible: "Fă paginile vizibile",
    triggerMakeQuestionsVisible: "Fă elementele vizibile",
    triggerCompleteText: "Completează chestionarul dacă este de succes.",
    triggerNotSet: "Declanșatorul nu este setat",
    triggerRunIf: "Execută dacă",
    triggerSetToName: "Schimbă valoarea pentru: ",
    triggerFromName: "Copiază valoarea de la: ",
    triggerRunExpression: "Execută această expresie",
    triggerSetValue: "la: ",
    triggerGotoName: "Sari la întrebarea",
    triggerIsVariable: "Nu adăuga variabila în rezultatul chestionarului.",
    triggerRunExpressionEmpty: "Vă rugăm să introduceți o expresie validă",
    emptyExpressionPlaceHolder: "Tastați expresia aici...",
    noFile: "Niciun fișier ales",
    clearIfInvisible: "Ștergeți valorile întrebărilor ascunse",
    valuePropertyName: "Stocați valorile în următoarea proprietate",
    searchEnabled: "Activează căutarea în timp real",
    hideSelectedItems: "Ascunde elementele selectate",
    closeOnSelect: "Colapsează lista derulantă la selecție",
    verticalAlign: "Aliniere verticală în celule",
    alternateRows: "Culori alternante ale rândurilor",
    columnsVisibleIf: "Fă coloanele vizibile dacă",
    rowsVisibleIf: "Fă rândurile vizibile dacă",
    otherPlaceholder: "Text locaș pentru caseta de comentarii",
    filePlaceholder: "Text locaș pentru fișier local",
    photoPlaceholder: "Text locaș pentru cameră",
    fileOrPhotoPlaceholder: "Text locaș pentru fișier local sau cameră",
    rateType: "Pictogramă de evaluare",
    url_placeholder: "Ex.: https://api.example.com/cărți",
    path_placeholder: "Ex.: categorii.ficțiune",
    questionStartIndex_placeholder: "Ex.: a)",
    width_placeholder: "Ex.: 6in",
    minWidth_placeholder: "Ex.: 600px",
    maxWidth_placeholder: "Ex.: 50%",
    imageHeight_placeholder: "auto",
    imageWidth_placeholder: "auto",
    itemTitleWidth_placeholder: "Ex.: 100px",
    theme: {
      themeName: "Temă",
      isPanelless: "Aspect întrebări",
      editorPanel: "Fundal și rază de colț",
      questionPanel: "Fundal și rază de colț",
      primaryColor: "Culoare accent",
      panelBackgroundTransparency: "Opacitatea panoului și a casetei de întrebări",
      questionBackgroundTransparency: "Opacitatea elementelor de intrare",
      fontSize: "Dimensiunea fontului chestionarului",
      scale: "Factor de scalare chestionar",
      cornerRadius: "Raza colțului",
      advancedMode: "Mod avansat",
      pageTitle: "Font titlu",
      pageDescription: "Font descriere",
      questionTitle: "Font titlu",
      questionDescription: "Font descriere",
      editorFont: "Font",
      backgroundOpacity: "Opacitate",
      "--sjs-font-family": "Familia fontului chestionarului",
      "--sjs-general-backcolor-dim": "Culoarea fundalului",
      "--sjs-primary-backcolor": "Culorile fundalului accent",
      "--sjs-primary-forecolor": "Culorile primului plan accent",
      "--sjs-special-red": "Culorile mesajului de eroare",
      "--sjs-shadow-small": "Efecte de umbră",
      "--sjs-shadow-inner": "Efecte de umbră",
      "--sjs-border-default": "Culori"
    },
    "header@header": {
      headerView: "Vizualizare",
      logoPosition: "Alinierea logo-ului",
      surveyTitle: "Font titlu chestionar",
      surveyDescription: "Font descriere chestionar",
      headerTitle: "Font titlu chestionar",
      headerDescription: "Font descriere chestionar",
      inheritWidthFrom: "Lățimea zonei de conținut",
      textAreaWidth: "Lățimea textului",
      backgroundColorSwitch: "Culoarea fundalului",
      backgroundImage: "Imagine fundal",
      backgroundImageOpacity: "Opacitate",
      overlapEnabled: "Suprapunere",
      logoPositionX: "Alinierea logo-ului",
      titlePositionX: "Alinierea titlului chestionarului",
      descriptionPositionX: "Alinierea descrierii chestionarului"
    }
  },
  // Property values
  pv: {
    "true": "adevărat",
    "false": "fals",
    file: "Fișier local",
    camera: "Cameră",
    "file-camera": "Fișier local sau cameră",
    inherit: "Moștenit",
    show: "Vizibil",
    hide: "Ascuns",
    default: "Moștenit",
    initial: "Inițial",
    random: "Aleatoriu",
    collapsed: "Colapsat",
    expanded: "Extins",
    none: "Niciunul",
    asc: "Ascendent",
    desc: "Descendent",
    indeterminate: "Nedeterminat",
    selected: "Selectat",
    unselected: "Neselectat",
    decimal: "zecimal",
    currency: "valută",
    percent: "procent",
    firstExpanded: "Primul panou este extins",
    off: "Ascunde numerele întrebărilor",
    list: "Listă",
    carousel: "Carusel",
    tab: "File",
    progressTop: "Navigator panou + bară de progres în partea de sus",
    progressBottom: "Navigator panou + bară de progres în partea de jos",
    progressTopBottom: "Navigator panou + bară de progres în partea de sus și de jos",
    horizontal: "Orizontal",
    vertical: "Vertical",
    top: "Deasupra",
    bottom: "Dedesubt",
    topBottom: "Deasupra și dedesubt",
    both: "Ambele",
    left: "Stânga",
    right: "Dreapta",
    center: "Centru",
    leftRight: "Stânga și dreapta",
    middle: "Mijloc",
    color: "culoare",
    date: "dată",
    datetime: "data și ora",
    "datetime-local": "data și ora locală",
    email: "email",
    month: "lună",
    number: "număr",
    password: "parolă",
    range: "interval",
    tel: "număr de telefon",
    text: "text",
    time: "ora",
    url: "URL",
    week: "săptămână",
    hidden: "Ascuns",
    edit: "Editabil",
    display: "Doar citire",
    contain: "Conține",
    cover: "Acoperă",
    fill: "Umple",
    next: "Următor",
    last: "Ultim",
    onComplete: "La finalizarea chestionarului",
    onHidden: "Când întrebarea este ascunsă",
    onHiddenContainer: "Când întrebarea sau panoul/pagina este ascuns(ă)",
    clearInvisibleValues: {
      none: "Niciodată"
    },
    clearIfInvisible: {
      none: "Niciodată"
    },
    inputType: {
      color: "Culoare",
      date: "Dată",
      "datetime-local": "Dată și oră",
      email: "Email",
      month: "Lună",
      number: "Număr",
      password: "Parolă",
      range: "Interval",
      tel: "Număr de telefon",
      text: "Text",
      time: "Ora",
      url: "URL",
      week: "Săptămână"
    },
    autocomplete: {
      name: "Nume complet",
      "honorific-prefix": "Prefix",
      "given-name": "Prenume",
      "additional-name": "Al doilea nume",
      "family-name": "Nume de familie",
      "honorific-suffix": "Sufix",
      nickname: "Poreclă",
      "organization-title": "Titlul postului",
      username: "Nume de utilizator",
      "new-password": "Parolă nouă",
      "current-password": "Parolă curentă",
      organization: "Numele organizației",
      "street-address": "Adresa stradală completă",
      "address-line1": "Linia de adresă 1",
      "address-line2": "Linia de adresă 2",
      "address-line3": "Linia de adresă 3",
      "address-level4": "Adresa de nivel 4",
      "address-level3": "Nivel 3 Adresă",
      "address-level2": "Nivel 2 Adresă",
      "address-level1": "Adresa de nivel 1",
      country: "Codul țării",
      "country-name": "Numele țării",
      "postal-code": "Cod poștal",
      "cc-name": "Numele titularului cardului",
      "cc-given-name": "Prenumele titularului cardului",
      "cc-additional-name": "Al doilea prenume al deținătorului cardului",
      "cc-family-name": "Numele de familie al titularului cardului",
      "cc-number": "Numărul cardului de credit",
      "cc-exp": "Data de expirare",
      "cc-exp-month": "Luna de expirare",
      "cc-exp-year": "Anul de expirare",
      "cc-csc": "Codul de securitate al cardului",
      "cc-type": "Tip card de credit",
      "transaction-currency": "Moneda tranzacției",
      "transaction-amount": "Suma tranzacției",
      language: "Limba preferată",
      bday: "Aniversare",
      "bday-day": "Ziua zilei de naștere",
      "bday-month": "Luna zilei de naștere",
      "bday-year": "Anul zilei de naștere",
      sex: "Gen",
      url: "Adresa URL a site-ului web",
      photo: "Fotografie de profil",
      tel: "Număr telefonic",
      "tel-country-code": "Codul de țară pentru telefon",
      "tel-national": "Număr de telefon național",
      "tel-area-code": "Prefix",
      "tel-local": "Număr de telefon local",
      "tel-local-prefix": "Prefix telefon local",
      "tel-local-suffix": "Sufixul telefonului local",
      "tel-extension": "Extensie de telefon",
      email: "Adresa de e-mail",
      impp: "Protocol de mesagerie instantanee"
    },
    maskType: {
      none: "Niciunul",
      pattern: "Model",
      numeric: "Numerică",
      datetime: "Data și ora",
      currency: "Valută"
    },
    inputTextAlignment: {
      auto: "Automobil",
      left: "Stânga",
      right: "Dreapta"
    },
    all: "Toate",
    page: "Pagină",
    survey: "Chestionar",
    onNextPage: "La trecerea la pagina următoare",
    onValueChanged: "După modificarea unui răspuns",
    onValueChanging: "Înainte de modificarea unui răspuns",
    questionsOnPageMode: {
      standard: "Structură originală",
      singlePage: "Afișați toate întrebările pe o singură pagină",
      questionPerPage: "Afișați o singură întrebare pe pagină"
    },
    noPreview: "Fără previzualizare",
    showAllQuestions: "Afișați toate întrebările",
    showAnsweredQuestions: "Afișați doar întrebările la care s-a răspuns",
    allQuestions: "Afișează toate întrebările",
    answeredQuestions: "Afișați numai întrebările la care au răspuns",
    pages: "Pagini completate",
    questions: "Întrebări cu răspuns",
    requiredQuestions: "Întrebări obligatorii cu răspuns",
    correctQuestions: "Răspunsuri valide",
    buttons: "Pagini completate (interfață buton)",
    underInput: "Sub câmpul de intrare",
    underTitle: "Sub titlul întrebării",
    onBlur: "La pierderea focalizării",
    onTyping: "În timp ce se tastează",
    underRow: "Sub rând",
    underRowSingle: "Sub rând, afișați doar o singură extindere de rând",
    auto: "Auto",
    showNavigationButtons: {
      none: "Ascuns"
    },
    timerInfoMode: {
      combined: "Ambele"
    },
    addRowButtonLocation: {
      default: "Pe baza aspectului matricei"
    },
    panelsState: {
      default: "Blocat",
      collapsed: "Colapsați toate",
      expanded: "Extindeți toate",
      firstExpanded: "Primul extins"
    },
    widthMode: {
      static: "Static",
      responsive: "Responsive"
    },
    contentMode: {
      image: "Imagine",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Butoane",
      dropdown: "Dropdown"
    },
    rateColorMode: {
      default: "Implicit",
      scale: "Scară"
    },
    scaleColorMode: {
      monochrome: "Monocrom",
      colored: "Colorat"
    },
    autoGenerate: {
      "true": "Auto-generat",
      "false": "Manual"
    },
    rateType: {
      labels: "Etichete",
      stars: "Stele",
      smileys: "Emoji"
    },
    state: {
      default: "Blocat"
    },
    showQuestionNumbers: {
      default: "Auto-numerotare",
      on: "Auto-numerotare",
      onPage: "Resetare pe fiecare pagină",
      onpanel: "Resetare pe fiecare panou",
      onPanel: "Resetare pe fiecare panou",
      recursive: "Numerotare recursivă",
      onSurvey: "Continuă pe tot chestionarul",
      off: "Fără numerotare"
    },
    descriptionLocation: {
      underTitle: "Sub titlul întrebării",
      underInput: "Sub câmpul de intrare"
    },
    selectToRankAreasLayout: {
      horizontal: "Lângă alegeri",
      vertical: "Deasupra alegerilor"
    },
    displayStyle: {
      decimal: "Zecimal",
      currency: "Valută",
      percent: "Procent",
      date: "Dată"
    },
    totalDisplayStyle: {
      decimal: "Zecimal",
      currency: "Valută",
      percent: "Procent",
      date: "Dată"
    },
    rowOrder: {
      initial: "Original"
    },
    questionOrder: {
      initial: "Original"
    },
    progressBarLocation: {
      top: "Culme",
      bottom: "Fund",
      topbottom: "Sus și jos",
      aboveheader: "Deasupra antetului",
      belowheader: "Sub antet",
      off: "Ascuns"
    },
    sum: "Sumă",
    count: "Numără",
    min: "Min",
    max: "Max",
    avg: "Medie",
    searchMode: {
      contains: "Conține",
      startsWith: "Începe cu"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Acoperă",
      contain: "Conține",
      fill: "Umple",
      tile: "Placă"
    },
    backgroundImageAttachment: {
      fixed: "Fix",
      scroll: "Derulare"
    },
    headerView: {
      basic: "De bază",
      advanced: "Avansat"
    },
    inheritWidthFrom: {
      survey: "La fel ca chestionarul",
      container: "La fel ca containerul"
    },
    backgroundColorSwitch: {
      none: "Niciunul",
      accentColor: "Culoare accent",
      custom: "Personalizat"
    },
    colorPalette: {
      light: "Deschis",
      dark: "Întunecat"
    },
    isPanelless: {
      "false": "Implicit",
      "true": "Fără panouri"
    },
    progressBarInheritWidthFrom: {
      survey: "La fel ca sondajul",
      container: "La fel ca containerul"
    }
  },
  // Operators
  op: {
    empty: "Gol",
    notempty: "Nu este gol",
    equal: "Egal cu",
    notequal: "Nu este egal cu",
    contains: "Conține",
    notcontains: "Nu conține",
    anyof: "Oricare dintre",
    allof: "Toate dintre",
    greater: "Mai mare decât",
    less: "Mai mic decât",
    greaterorequal: "Mai mare sau egal cu",
    lessorequal: "Mai mic sau egal cu",
    and: "și",
    or: "sau"
  },
  // Embed window
  ew: {
    angular: "Utilizați versiunea Angular",
    jquery: "Utilizați versiunea jQuery",
    knockout: "Utilizați versiunea Knockout",
    react: "Utilizați versiunea React",
    vue: "Utilizați versiunea Vue",
    bootstrap: "Pentru cadrul bootstrap",
    modern: "Tema modernă",
    default: "Tema implicită",
    orange: "Tema portocalie",
    darkblue: "Tema albastru închis",
    darkrose: "Tema trandafir închis",
    stone: "Tema piatră",
    winter: "Tema iarnă",
    winterstone: "Tema iarnă-piatră",
    showOnPage: "Afișați chestionarul pe o pagină",
    showInWindow: "Afișați chestionarul într-o fereastră",
    loadFromServer: "Încărcați JSON-ul chestionarului de pe server",
    titleScript: "Scripturi și stiluri",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Selectați pagina pentru a o testa",
    showInvisibleElements: "Afișează elementele invizibile",
    hideInvisibleElements: "Ascunde elementele invizibile"
  },
  validators: {
    answercountvalidator: "Număr de răspunsuri",
    emailvalidator: "Email",
    expressionvalidator: "Expresie",
    numericvalidator: "Număr",
    regexvalidator: "Expresie regulată",
    textvalidator: "Text"
  },
  triggers: {
    completetrigger: "Completează chestionarul",
    setvaluetrigger: "Setează răspunsul",
    copyvaluetrigger: "Copiază răspunsul",
    skiptrigger: "Sari la întrebare",
    runexpressiontrigger: "Execută expresia",
    visibletrigger: "schimbare vizibilitate (depreciat)"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Ex.: mm/dd/yyyy HH:MM:ss"
    },
    currencymask: {
      prefix: "Ex.: $",
      suffix: "Ex.: USD"
    },
    panelbase: {
      questionTitleWidth: "Ex.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Ex.: 30%",
      questionTitleWidth: "Ex.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Un ID al panoului care nu este vizibil pentru respondenți.",
      description: "Introduceți un subtitlu pentru panou.",
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea panoului.",
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru panou.",
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică trimiterea chestionarului dacă cel puțin o întrebare inclusă nu are un răspuns.",
      questionTitleLocation: "Se aplică tuturor întrebărilor din acest panou. Dacă doriți să înlocuiți această setare, definiți reguli de aliniere a titlului pentru întrebările individuale. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      questionTitleWidth: "Setează lățimea titlurilor întrebărilor atunci când sunt aliniate la stânga casetelor de întrebări. Acceptă valori CSS (px, %, in, pt etc.).",
      questionErrorLocation: "Setează locația unui mesaj de eroare în raport cu toate întrebările din panou. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar.",
      questionOrder: "Păstrează ordinea originală a întrebărilor sau le randomizează. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar.",
      page: "Repoziționează panoul la sfârșitul unei pagini selectate.",
      innerIndent: "Adaugă spațiu sau margine între conținutul panoului și marginea stângă a casetei panoului.",
      startWithNewLine: "Deselectați pentru a afișa panoul pe un rând cu întrebarea sau panoul anterior. Setarea nu se aplică dacă panoul este primul element din formular.",
      state: "Alegeți dintre: „Extins” - panoul este afișat complet și poate fi colapsat; „Colapsat” - panoul afișează doar titlul și descrierea și poate fi extins; „Blocat” - panoul este afișat complet și nu poate fi colapsat.",
      width: "Setează lățimea panoului în proporție cu alte elemente ale chestionarului de pe același rând. Acceptă valori CSS (px, %, in, pt etc.).",
      showQuestionNumbers: "Atribuie numere întrebărilor imbricate în acest panou.",
      effectiveColSpan: "Specifică câte coloane se întinde acest panou în aspectul grilei.",
      gridLayoutColumns: "Acest tabel vă permite să configurați fiecare coloană de grilă din panou. Setează automat procentul de lățime pentru fiecare coloană pe baza numărului maxim de elemente dintr-un rând. Pentru a particulariza aspectul grilei, ajustați manual aceste valori și definiți lățimea titlului pentru toate întrebările din fiecare coloană."
    },
    paneldynamic: {
      name: "Un ID al panoului care nu este vizibil pentru respondenți.",
      description: "Introduceți un subtitlu pentru panou.",
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea panoului.",
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru panou.",
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică trimiterea chestionarului dacă cel puțin o întrebare inclusă nu are un răspuns.",
      templateQuestionTitleLocation: "Se aplică tuturor întrebărilor din acest panou. Dacă doriți să înlocuiți această setare, definiți reguli de aliniere a titlului pentru întrebările individuale. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      templateQuestionTitleWidth: "Setează lățimea consecventă pentru titlurile întrebărilor atunci când sunt aliniate la stânga casetelor de întrebări. Acceptă valori CSS (px, %, in, pt etc.).",
      templateErrorLocation: "Setează locația unui mesaj de eroare în raport cu o întrebare cu intrare invalidă. Alegeți dintre: „Sus” - un text de eroare este plasat în partea de sus a casetei întrebării; „Jos” - un text de eroare este plasat în partea de jos a casetei întrebării. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      errorLocation: "Setează locația unui mesaj de eroare în raport cu toate întrebările din panou. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar.",
      page: "Repoziționează panoul la sfârșitul unei pagini selectate.",
      innerIndent: "Adaugă spațiu sau margine între conținutul panoului și marginea stângă a casetei panoului.",
      startWithNewLine: "Deselectați pentru a afișa panoul pe un rând cu întrebarea sau panoul anterior. Setarea nu se aplică dacă panoul este primul element din formular.",
      state: "Alegeți dintre: „Extins” - panoul este afișat complet și poate fi colapsat; „Colapsat” - panoul afișează doar titlul și descrierea și poate fi extins; „Blocat” - panoul este afișat complet și nu poate fi colapsat.",
      width: "Setează lățimea panoului în proporție cu alte elemente ale chestionarului de pe același rând. Acceptă valori CSS (px, %, in, pt etc.).",
      templateTitle: "Introduceți un șablon pentru titlurile panourilor dinamice. Utilizați {panelIndex} pentru poziția generală a panoului și {visiblePanelIndex} pentru ordinea acestuia printre panourile vizibile. Introduceți aceste substituenți în model pentru a adăuga numerotare automată.",
      templateTabTitle: "Introduceți un șablon pentru titlurile filelor. Utilizați {panelIndex} pentru poziția generală a unui panou și {visiblePanelIndex} pentru ordinea acestuia printre panourile vizibile. Introduceți aceste substituenți în model pentru a adăuga numerotare automată.",
      tabTitlePlaceholder: "Un text fallback pentru titlurile filelor care se aplică atunci când șablonul titlului filei nu produce o valoare semnificativă.",
      templateVisibleIf: "Această setare vă permite să controlați vizibilitatea panourilor individuale din panoul dinamic. Utilizați substituentul `{panel}` pentru a face referire la panoul curent în expresia dvs.",
      titleLocation: "Această setare este moștenită automat de toate întrebările din acest panou. Dacă doriți să înlocuiți această setare, definiți reguli de aliniere a titlului pentru întrebările individuale. Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      descriptionLocation: "Opțiunea „Moștenește” aplică setarea de la nivel de pagină (dacă este setată) sau setarea de la nivel de chestionar („Sub titlul panoului” implicit).",
      newPanelPosition: "Definește poziția unui panou nou adăugat. În mod implicit, panourile noi sunt adăugate la sfârșit. Selectați „Următor” pentru a introduce un nou panou după cel curent.",
      copyDefaultValueFromLastEntry: "Duplică răspunsurile din ultimul panou și le atribuie următorului panou dinamic adăugat.",
      keyName: "Faceți referire la un nume de întrebare pentru a solicita unui utilizator să furnizeze un răspuns unic pentru această întrebare în fiecare panou."
    },
    copyDefaultValueFromLastEntry: "Duplică răspunsurile din ultimul rând și le atribuie următorului rând dinamic adăugat.",
    defaultValueExpression: "Această setare vă permite să atribuiți o valoare implicită a răspunsului pe baza unei expresii. Expresia poate include calcule de bază - `{q1_id} + {q2_id}`, expresii booleene, cum ar fi `{age} > 60`, și funcții: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. Valoarea determinată de această expresie servește ca valoare implicită inițială care poate fi suprascrisă de o intrare manuală a respondentului.",
    resetValueIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină când o intrare a respondentului este resetată la valoarea pe baza „Expresiei valorii implicite” sau „Expresiei de setare a valorii” sau la valoarea „Răspuns implicit” (dacă oricare este setată).",
    setValueIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină când să rulați „Expresia de setare a valorii” și să atribuiți dinamic valoarea rezultată ca răspuns.",
    setValueExpression: "Specificați o expresie care definește valoarea ce trebuie setată atunci când condițiile din regula „Setați valoarea dacă” sunt îndeplinite. Expresia poate include calcule de bază - `{q1_id} + {q2_id}`, expresii booleene, cum ar fi `{age} > 60`, și funcții: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. Valoarea determinată de această expresie poate fi suprascrisă de o intrare manuală a respondentului.",
    gridLayoutEnabled: "Survey Creator vă permite să ajustați manual lățimile în linie ale elementelor de formular pentru a controla aspectul. Dacă acest lucru nu produce rezultatul dorit, puteți activa aspectul grilei, care structuri formează elemente folosind un sistem bazat pe coloane. Pentru a configura coloanele de aspect, selectați o pagină sau un panou și utilizați tabelul \"Setări întrebări\" → \"Coloane grilă\". Pentru a ajusta câte coloane se întinde pe o întrebare, selectați-o și setați valoarea dorită în câmpul \"Aspect\" → \"Spania coloanelor\".",
    question: {
      name: "Un ID al întrebării care nu este vizibil pentru respondenți.",
      description: "Introduceți un subtitlu pentru întrebare.",
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea întrebării.",
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru întrebare.",
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică avansarea sau trimiterea chestionarului dacă întrebarea nu a primit un răspuns.",
      startWithNewLine: "Deselectați pentru a afișa întrebarea pe un rând cu întrebarea sau panoul anterior. Setarea nu se aplică dacă întrebarea este primul element din formular.",
      page: "Repoziționează întrebarea la sfârșitul unei pagini selectate.",
      state: "Alegeți dintre: „Extins” - caseta întrebării este afișată complet și poate fi colapsată; „Colapsat” - caseta întrebării afișează doar titlul și descrierea și poate fi extinsă; „Blocat” - caseta întrebării este afișată complet și nu poate fi colapsată.",
      titleLocation: "Înlocuiește regulile de aliniere a titlului definite la nivel de panou, pagină sau chestionar. Opțiunea „Moștenește” aplică orice setare de nivel superior (dacă este setată) sau setarea de la nivel de chestionar („Sus” implicit).",
      descriptionLocation: "Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Sub titlul întrebării” implicit).",
      errorLocation: "Setează locația unui mesaj de eroare în raport cu întrebarea cu intrare invalidă. Alegeți dintre: „Sus” - un text de eroare este plasat în partea de sus a casetei întrebării; „Jos” - un text de eroare este plasat în partea de jos a casetei întrebării. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Sus” implicit).",
      indent: "Adaugă spațiu sau margine între conținutul întrebării și marginea stângă a casetei întrebării.",
      width: "Setează lățimea întrebării în proporție cu alte elemente ale chestionarului de pe același rând. Acceptă valori CSS (px, %, in, pt etc.).",
      surveyvalidator: {
        expression: "Utilizați pictograma bagheta magică pentru a seta o regulă de validare pentru întrebare."
      },
      textUpdateMode: "Alegeți dintre: „La pierderea focalizării” - valoarea este actualizată când câmpul de intrare pierde focalizarea; „În timp ce se tastează” - valoarea este actualizată în timp real, pe măsură ce utilizatorii tastează. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („La pierderea focalizării” implicit).",
      url: "Puteți utiliza orice serviciu web ca sursă de date pentru întrebările cu multiple opțiuni de alegere. Pentru a popula valorile opțiunilor, introduceți URL-ul serviciului care furnizează datele.",
      searchMode: "O operație de comparație utilizată pentru a filtra lista derulantă.",
      textWrapEnabled: "Textele lungi din opțiunile de alegere vor genera automat întreruperi de linie pentru a se încadra în meniul derulant. Deselectați dacă doriți ca textele să fie tăiate.",
      effectiveColSpan: "Specifică câte coloane se întinde această întrebare în aspectul grilei."
    },
    signaturepad: {
      signatureWidth: "Setează lățimea zonei de semnătură afișate și a imaginii rezultate.",
      signatureHeight: "Setează înălțimea zonei de semnătură afișate și a imaginii rezultate.",
      signatureAutoScaleEnabled: "Selectați dacă doriți ca zona de semnătură să umple tot spațiul disponibil din caseta întrebării menținând aspectul implicit 3:2. Când sunt setate valori de lățime și înălțime personalizate, setarea va menține aspectul acestor dimensiuni."
    },
    file: {
      imageHeight: "Reglează înălțimea imaginii în rezultatele chestionarului.",
      imageWidth: "Reglează lățimea imaginii în rezultatele chestionarului.",
      allowImagesPreview: "Afișează previzualizări în miniatură pentru fișierele încărcate atunci când este posibil. Deselectați dacă doriți să afișați pictogramele fișierelor."
    },
    image: {
      contentMode: "Opțiunea „Auto” determină automat modul potrivit pentru afișare - Imagine, Video sau YouTube - pe baza URL-ului sursă furnizat."
    },
    imagepicker: {
      imageHeight: "Înlocuiește valorile minime și maxime de înălțime.",
      imageWidth: "Înlocuiește valorile minime și maxime de lățime.",
      choices: "\"Valoare\" servește ca un ID al elementului utilizat în regulile condiționale; „Text” este afișat respondenților.",
      contentMode: "Alegeți între „Imagine” și „Video” pentru a seta modul de conținut al selectorului media. Dacă este selectată „Imagine”, asigurați-vă că toate opțiunile furnizate sunt fișiere de imagine în următoarele formate: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. În mod similar, dacă este selectat „Video”, asigurați-vă că toate opțiunile sunt linkuri directe către fișiere video în următoarele formate: MP4, MOV, WMV, FLV, AVI, MKV. Vă rugăm să rețineți că linkurile YouTube nu sunt acceptate pentru opțiunile video."
    },
    text: {
      size: "Această setare redimensionează doar câmpul de intrare și nu afectează lățimea casetei întrebării. Pentru a limita lungimea acceptată a intrării, accesați <b>Validare → Limită maximă de caractere</b>."
    },
    comment: {
      rows: "Setează numărul de linii afișate în câmpul de intrare. Dacă intrarea ocupă mai multe linii, va apărea bara de derulare."
    },
    // survey templates
    survey: {
      readOnly: "Selectați dacă doriți să împiedicați respondenții să completeze chestionarul.",
      progressBarLocation: "Setează locația barei de progres. Valoarea \"Auto\" afișează bara de progres deasupra sau dedesubtul antetului sondajului."
    },
    matrixdropdowncolumn: {
      name: "Un ID al coloanei care nu este vizibil pentru respondenți.",
      isUnique: "Când este activată pentru o coloană, un respondent este obligat să furnizeze un răspuns unic pentru fiecare întrebare din această coloană.",
      rows: "Setează numărul de linii afișate în câmpul de intrare. Dacă intrarea ocupă mai multe linii, va apărea bara de derulare.",
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea coloanei.",
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru coloană.",
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică trimiterea chestionarului dacă cel puțin o întrebare inclusă nu are un răspuns.",
      showInMultipleColumns: "Când este selectat, creează o coloană individuală pentru fiecare opțiune de alegere.",
      colCount: "Aranjează opțiunile de alegere într-un aspect cu mai multe coloane. Când este setat la 0, opțiunile sunt afișate într-o singură linie. Când este setată la -1, valoarea reală este moștenită de la proprietatea \"Număr de coloane imbricate\" a matricei părinte."
    },
    caseInsensitive: "Selectați dacă literele mari și mici din expresia regulată trebuie tratate ca echivalente.",
    widthMode: "Alegeți dintre: „Static” - setează o lățime fixă; „Responsive” - face ca chestionarul să ocupe întreaga lățime a ecranului; „Auto” - aplică una dintre cele două în funcție de tipurile de întrebări utilizate.",
    cookieName: "Atribuiți o valoare unică cookie-ului pentru chestionarul dvs. Cookie-ul va fi setat în browserul unui respondent la finalizarea chestionarului pentru a preveni trimiterea repetată a chestionarului.",
    logo: "Introduceți un link către o imagine (fără limită de dimensiune) sau faceți clic pe pictograma folder pentru a naviga un fișier de pe computerul dvs. (până la 64KB).",
    logoWidth: "Setează o lățime a logo-ului în unități CSS (px, %, in, pt etc.).",
    logoHeight: "Setează o înălțime a logo-ului în unități CSS (px, %, in, pt etc.).",
    logoFit: "Alegeți dintre: „Niciunul” - imaginea își menține dimensiunea originală; „Conține” - imaginea este redimensionată pentru a se potrivi păstrând aspectul său; „Acoperă” - imaginea umple întreaga casetă păstrând aspectul său; „Umple” - imaginea este întinsă pentru a umple caseta fără a păstra aspectul său.",
    autoAdvanceEnabled: "Selectați dacă doriți ca chestionarul să avanseze automat la pagina următoare după ce un respondent a răspuns la toate întrebările de pe pagina curentă. Această funcție nu se va aplica dacă ultima întrebare de pe pagină este deschisă sau permite răspunsuri multiple.",
    autoAdvanceAllowComplete: "Selectați dacă doriți ca chestionarul să se completeze automat după ce un respondent răspunde la toate întrebările.",
    showNavigationButtons: "Setează vizibilitatea și locația butoanelor de navigare pe o pagină.",
    navigationButtonsLocation: "Setează locația butoanelor de navigare dintr-o pagină.",
    showPreviewBeforeComplete: "Activează pagina de previzualizare cu toate sau doar întrebările la care s-a răspuns.",
    questionTitleLocation: "Se aplică tuturor întrebărilor din chestionar. Această setare poate fi înlocuită de regulile de aliniere a titlului la niveluri inferioare: panou, pagină sau întrebare. O setare de nivel inferior va înlocui setările de nivel superior.",
    requiredMark: "Un simbol sau o secvență de simboluri care indică faptul că este necesar un răspuns.",
    questionStartIndex: "Introduceți un număr sau o literă cu care doriți să începeți numerotarea.",
    questionErrorLocation: "Setează locația unui mesaj de eroare în raport cu întrebarea cu intrare invalidă. Alegeți dintre: „Sus” - un text de eroare este plasat în partea de sus a casetei întrebării; „Jos” - un text de eroare este plasat în partea de jos a casetei întrebării.",
    autoFocusFirstQuestion: "Selectați dacă doriți ca primul câmp de intrare de pe fiecare pagină să fie pregătit pentru introducerea textului.",
    questionOrder: "Păstrează ordinea originală a întrebărilor sau le randomizează. Efectul acestei setări este vizibil doar în fila Previzualizare.",
    maxTextLength: "Doar pentru întrebările de introducere a textului.",
    maxCommentLength: "Doar pentru comentariile întrebărilor.",
    commentAreaRows: "Setează numărul de linii afișate în zonele de text pentru comentariile la întrebări. Dacă intrarea ocupă mai multe linii, apare bara de derulare.",
    autoGrowComment: "Selectați dacă doriți ca comentariile întrebărilor și întrebările de Text lung să se extindă automat în funcție de lungimea textului introdus.",
    allowResizeComment: "Doar pentru comentariile întrebărilor și întrebările de Text lung.",
    calculatedValues: "Variabilele personalizate servesc drept variabile intermediare sau auxiliareutilizate în calculele formularului. Acestea iau intrările respondenților ca valori sursă. Fiecare variabilă personalizată are un nume unic și o expresie pe care se bazează.",
    includeIntoResult: "Selectați dacă doriți ca valoarea calculată a expresiei să fie salvată împreună cu rezultatele chestionarului.",
    triggers: "Un declanșator este un eveniment sau o condiție bazată pe o expresie. Odată ce expresia este evaluată ca „adevărată”, declanșatorul declanșează o acțiune. O astfel de acțiune poate avea opțional o întrebare țintă pe care o afectează.",
    clearInvisibleValues: "Alegeți dacă doriți sau nu să ștergeți valorile întrebărilor ascunse prin logica condițională și când să o faceți.",
    textUpdateMode: "Alegeți dintre: „La pierderea focalizării” - valoarea este actualizată când câmpul de intrare pierde focalizarea; „În timp ce se tastează” - valoarea este actualizată în timp real, pe măsură ce utilizatorii tastează.",
    columns: "Valoarea din stânga servește ca ID al coloanei utilizat în regulile condiționale, valoarea din dreapta este afișată respondenților.",
    rows: "Valoarea din stânga servește ca ID al rândului utilizat în regulile condiționale, valoarea din dreapta este afișată respondenților.",
    columnMinWidth: "Acceptă valori CSS (px, %, in, pt etc.).",
    rowTitleWidth: "Acceptă valori CSS (px, %, in, pt etc.).",
    totalText: "Vizibil numai dacă cel puțin o coloană afișează valorile totale setate cu „Metoda de agregare” sau „Expresia valorii totale”.",
    cellErrorLocation: "Setează locația unui mesaj de eroare în raport cu o celulă cu intrare invalidă. Opțiunea „Moștenește” aplică setarea din proprietatea „Alinierea mesajului de eroare”.",
    detailErrorLocation: "Setează locația mesajelor de eroare pentru întrebările imbricate în secțiunile de detaliu. Opțiunea \"Moștenire\" aplică setarea din proprietatea \"Alinierea mesajului de eroare\".",
    keyDuplicationError: "Când proprietatea „Împiedică răspunsurile duplicate” este activată, un respondent care încearcă să trimită o intrare duplicat va primi următorul mesaj de eroare.",
    totalExpression: "Vă permite să calculați valorile totale pe baza unei expresii. Expresia poate include calcule de bază (`{q1_id} + {q2_id}`), expresii booleene (`{age} > 60`) și funcții (`iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.).",
    confirmDelete: "Declanșează un prompt care solicită confirmarea ștergerii rândului.",
    keyName: "Faceți referire la un ID al coloanei pentru a solicita unui utilizator să furnizeze un răspuns unic pentru fiecare întrebare din coloana specificată.",
    description: "Introduceți un subtitlu.",
    locale: "Alegeți o limbă pentru a începe să creați chestionarul. Pentru a adăuga o traducere, comutați la o limbă nouă și traduceți textul original aici sau în fila Traduceri.",
    detailPanelMode: "Setează locația unei secțiuni de detalii în raport cu un rând. Alegeți dintre: „Niciunul” - nu se adaugă nicio extindere; „Sub rând” - o extindere a rândului este plasată sub fiecare rând al matricei; „Sub rând, afișați doar o singură extindere de rând” - o extindere este afișată sub un singur rând, celelalte extinderi de rând fiind colapsate.",
    imageFit: "Alegeți dintre: „Niciunul” - imaginea își menține dimensiunea originală; „Conține” - imaginea este redimensionată pentru a se potrivi păstrând aspectul său; „Acoperă” - imaginea umple întreaga casetă păstrând aspectul său; „Umple” - imaginea este întinsă pentru a umple caseta fără a păstra aspectul său.",
    autoGrow: "Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Dezactivat” implicit).",
    allowResize: "Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Activat” implicit).",
    timeLimit: "Un interval de timp în secunde după care chestionarul avansează automat la pagina „Mulțumim”.",
    timeLimitPerPage: "Un interval de timp în secunde după care chestionarul avansează automat la pagina următoare. Ascunde butonul de navigare „Anterior”.",
    validateVisitedEmptyFields: "Activați această opțiune pentru a declanșa validarea atunci când un utilizator se concentrează pe un câmp de introducere gol și apoi îl lasă fără a efectua modificări.",
    page: {
      name: "Un cod de pagină care nu este vizibil pentru respondenți.",
      description: "Tastați o subtitrare a paginii.",
      navigationTitle: "O legendă afișată pe un buton de navigare din bara de progres sau din cuprinsul (TOC). Dacă lăsați acest câmp gol, butonul de navigare va folosi titlul paginii sau numele paginii. Pentru a activa bara de progres sau TOC, accesați \"Sondaj\" → \"Navigare\".",
      timeLimit: "Un interval de timp în secunde după care chestionarul avansează automat la pagina următoare. Ascunde butonul de navigare „Anterior”.",
      visibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea paginii.",
      enableIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care dezactivează modul doar citire pentru pagină.",
      requiredIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care împiedică trimiterea chestionarului dacă cel puțin o întrebare inclusă nu are un răspuns.",
      questionTitleLocation: "Se aplică tuturor întrebărilor din această pagină. Dacă doriți să înlocuiți această setare, definiți reguli de aliniere a titlului pentru întrebările individuale sau panouri. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Sus” implicit).",
      questionTitleWidth: "Setează lățimea titlurilor întrebărilor atunci când sunt aliniate la stânga casetelor de întrebări. Acceptă valori CSS (px, %, in, pt etc.).",
      questionErrorLocation: "Setează locația unui mesaj de eroare în raport cu întrebarea cu intrare invalidă. Alegeți dintre: „Sus” - un text de eroare este plasat în partea de sus a casetei întrebării; „Jos” - un text de eroare este plasat în partea de jos a casetei întrebării. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar.",
      questionOrder: "Păstrează ordinea originală a întrebărilor sau le randomizează. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („Original” implicit). Efectul acestei setări este vizibil doar în fila Previzualizare.",
      showNavigationButtons: "Setează vizibilitatea butoanelor de navigare pe pagină. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar, care implicit este „Vizibilă”.",
      gridLayoutColumns: "Acest tabel vă permite să configurați fiecare coloană de grilă din pagină. Setează automat procentul de lățime pentru fiecare coloană pe baza numărului maxim de elemente dintr-un rând. Pentru a particulariza aspectul grilei, ajustați manual aceste valori și definiți lățimea titlului pentru toate întrebările din fiecare coloană."
    },
    timerLocation: "Setează locația unui cronometru pe o pagină.",
    panelsState: "Alegeți dintre: „Blocat” - utilizatorii nu pot extinde sau colapsa panouri; „Colapsați toate” - toate panourile încep într-o stare colapsată; „Extindeți toate” - toate panourile încep într-o stare extinsă; „Primul extins” - doar primul panou este extins inițial. Se aplică dacă „Modul de afișare a panoului” este setat la „Listă” și proprietatea „Șablon titlu panou” este specificată.",
    imageLinkName: "Introduceți un nume de proprietate comun în cadrul array-ului de obiecte care conține URL-urile fișierelor imagine sau video pe care doriți să le afișați în lista de opțiuni.",
    choices: "Valoarea din stânga servește ca un ID al elementului utilizat în regulile condiționale, valoarea din dreapta este afișată respondenților.",
    title: "Introduceți un titlu prietenos pentru utilizator care să fie afișat.",
    waitForUpload: "Asigură că utilizatorii nu vor putea finaliza chestionarul până când fișierele nu sunt încărcate.",
    minWidth: "Acceptă valori CSS (px, %, in, pt etc.).",
    maxWidth: "Acceptă valori CSS (px, %, in, pt etc.).",
    width: "Acceptă valori CSS (px, %, in, pt etc.).",
    valueName: "Un identificator comun este o cheie personalizată pe care o puteți atribui mai multor întrebări pentru a le lega împreună și a sincroniza valorile acestora. Aceste valori vor fi îmbinate într-un singur array sau obiect și stocate în rezultatele chestionarului folosind cheia ca nume de proprietate.",
    defaultDisplayValue: "O valoare afișată în întrebările HTML și în titlurile și descrierile dinamice ale elementelor chestionarului atunci când valoarea întrebării este goală.",
    useDisplayValuesInDynamicTexts: "În tipurile de întrebări de selecție unică și multiplă, fiecare opțiune de alegere are un ID și o valoare de afișare. Când este selectată, această setare afișează o valoare de afișare în loc de o valoare ID în întrebările HTML și în titlurile și descrierile dinamice ale elementelor chestionarului.",
    clearIfInvisible: "Alegeți dacă doriți sau nu să ștergeți valorile întrebărilor ascunse prin logica condițională și când să o faceți. Opțiunea „Moștenește” aplică setarea de la nivel de chestionar („La finalizarea chestionarului” implicit).",
    choicesFromQuestionMode: "Alegeți dintre: „Toate” - copiază toate opțiunile de alegere din întrebarea selectată; „Selectate” - copiază dinamic doar opțiunile de alegere selectate; „Neselectate” - copiază dinamic doar opțiunile de alegere neselectate. Opțiunile „Niciuna” și „Altele” sunt copiate implicit dacă sunt activate în întrebarea sursă.",
    choiceValuesFromQuestion: "În tipurile de întrebări cu selecție unică și multiplă, fiecare opțiune de alegere are un ID și o valoare afișată. Această setare specifică ce coloană de matrice sau întrebare de panou ar trebui să furnizeze ID-urile.",
    choiceTextsFromQuestion: "În tipurile de întrebări cu selecție unică și multiplă, fiecare opțiune de alegere are un ID și o valoare afișată. Această setare specifică ce coloană de matrice sau întrebare de panou ar trebui să furnizeze textele afișate.",
    allowCustomChoices: "Selectați pentru a permite respondenților să-și adauge propriile opțiuni dacă opțiunea dorită nu este disponibilă în meniul drop-down. Opțiunile personalizate vor fi stocate doar temporar pe durata sesiunii curente a browserului.",
    showOtherItem: "Când este selectat, utilizatorii pot include intrare suplimentară într-o casetă de comentarii separată.",
    separateSpecialChoices: "Afișează fiecare opțiune de alegere specială („Niciuna”, „Altele”, „Selectează toate”) pe un rând nou, chiar și atunci când utilizați un layout pe mai multe coloane.",
    path: "Specificați locația din cadrul setului de date al serviciului unde se află array-ul de obiecte țintă. Lăsați gol dacă URL-ul indică deja către array.",
    choicesbyurl: {
      valueName: "Introduceți un nume de proprietate uniform în cadrul array-ului de obiecte a cărui valoare va fi stocată ca răspuns în rezultatele chestionarului."
    },
    titleName: "Introduceți un nume de proprietate uniform în cadrul array-ului de obiecte care conține valorile pe care doriți să le afișați în lista de opțiuni.",
    allowEmptyResponse: "Selectați pentru a permite serviciului să returneze un răspuns sau un array gol.",
    choicesVisibleIf: "Utilizați pictograma bagheta magică pentru a seta o regulă condițională care determină vizibilitatea tuturor opțiunilor de alegere.",
    rateValues: "Valoarea din stânga servește ca un ID al elementului utilizat în regulile condiționale, valoarea din dreapta este afișată respondenților.",
    rating: {
      displayMode: "\"Auto\" selectează între modurile „Butoane” și „Dropdown” pe baza lățimii disponibile. Când lățimea este insuficientă pentru a afișa butoanele, întrebarea afișează un meniu derulant."
    },
    valuePropertyName: "Vă permite să conectați întrebările care produc rezultate în diferite formate. Când astfel de întrebări sunt legate împreună folosind un identificator comun, această proprietate partajată stochează valorile întrebărilor selectate.",
    searchEnabled: "Selectați dacă doriți să actualizați conținutul meniului derulant pentru a se potrivi cu interogarea de căutare pe care un utilizator o tastează în câmpul de intrare.",
    valueTrue: "O valoare de salvat în rezultatele chestionarului atunci când respondenții oferă un răspuns pozitiv.",
    valueFalse: "O valoare de salvat în rezultatele chestionarului atunci când respondenții oferă un răspuns negativ.",
    showPreview: "Nu este recomandat să dezactivați această opțiune, deoarece suprascrie Previzualizarea imaginii și face dificilă pentru utilizator înțelegerea dacă fișierele au fost încărcate.",
    needConfirmRemoveFile: "Declanșează un prompt care solicită confirmarea ștergerii fișierului.",
    selectToRankEnabled: "Activați pentru a clasifica doar opțiunile selectate. Utilizatorii vor trage elementele selectate din lista de opțiuni pentru a le ordona în zona de clasificare.",
    dataList: "Introduceți o listă de opțiuni care vor fi sugerate respondentului în timpul introducerii.",
    inputSize: "Setarea redimensionează doar câmpurile de intrare și nu afectează lățimea casetei întrebării.",
    itemTitleWidth: "Setează lățimea consecventă pentru toate etichetele articolelor. Acceptă valori CSS (px, %, in, pt etc.).",
    inputTextAlignment: "Selectați modul de aliniere a valorii de intrare în câmp. Setarea implicită \"Auto\" aliniază valoarea de intrare la dreapta dacă se aplică mascare monedară sau numerică și la stânga dacă nu.",
    altText: "Servește ca un substitut atunci când imaginea nu poate fi afișată pe dispozitivul utilizatorului și pentru scopuri de accesibilitate.",
    rateColorMode: "Definește culoarea emoji-ului selectat când tipul pictogramei de evaluare este setat la „Smileys”. Alegeți dintre: „Implicit” - emoji-ul selectat apare în culoarea implicită a chestionarului; „Scală” - emoji-ul selectat moștenește culoarea de la scala de evaluare.",
    expression: {
      name: "Un ID al expresiei care nu este vizibil pentru respondenți.",
      description: "Introduceți un subtitlu pentru expresie.",
      expression: "O expresie poate include calcule de bază (`{q1_id} + {q2_id}`), condiții (`{age} > 60`) și funcții ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    },
    storeOthersAsComment: "Selectați pentru a stoca valoarea opțiunii „Altele” ca o proprietate separată în rezultatele chestionarului.",
    format: "Utilizați {0} ca substituent pentru valoarea actuală.",
    acceptedTypes: "Consultați descrierea atributului [accept](https://www.w3schools.com/tags/att_input_accept.asp) pentru mai multe informații.",
    columnColCount: "Se aplică doar dacă „Tip de intrare a celulei” este setat la Grup de butoane radio sau Casete de selectare.",
    autocomplete: "Selectați tipul de date pe care browserul utilizatorului îl poate recupera. Aceste date sunt sursă fie din valorile introduse anterior de utilizator, fie din valorile preconfigurate dacă există valori salvate de utilizator pentru completare automată.",
    filePlaceholder: "Se aplică atunci când „Tip sursă fișier” este „Fișier local” sau când camera nu este disponibilă",
    photoPlaceholder: "Se aplică atunci când „Tip sursă fișier” este „Cameră”.",
    fileOrPhotoPlaceholder: "Se aplică atunci când „Tip sursă fișier” este „Fișier local sau cameră”.",
    colCount: "Aranjează opțiunile de alegere într-un layout pe mai multe coloane. Când este setat la 0, opțiunile sunt afișate pe un singur rând.",
    masksettings: {
      saveMaskedValue: "Selectați dacă doriți să stocați valoarea întrebării cu o mască aplicată în rezultatele chestionarului."
    },
    patternmask: {
      pattern: "Modelul poate conține litere de șir și următorii substituenți: `9` - pentru o cifră; `a` - pentru o literă mare sau mică; `#` - pentru o cifră sau o literă mare sau mică. Utilizați backslash `\\` pentru a scăpa un caracter."
    },
    datetimemask: {
      pattern: "Modelul poate conține caractere de separator și următorii substituenți:<br>`m` - Număr lună.<br>`mm` - Număr lună, cu zero la început pentru valori de o cifră.<br>`d` - Ziua lunii.<br>`dd` - Ziua lunii, cu zero la început pentru valori de o cifră.<br>`yy` - Ultimele două cifre ale anului.<br>`yyyy` - An de patru cifre.<br>`H` - Ore în format 24 de ore.<br>`HH` - Ore în format 24 de ore, cu zero la început pentru valori de o cifră.<br>`h` - Ore în format 12 de ore.<br>` `hh` - Ore în format de 12 ore, cu zero înainte pentru valorile cu o singură cifră.<br>`MM` - Minute.<br>`ss` - Secunde.<br>`TT` - Perioada de ceas de 12 ore cu litere mari (AM/PM).<br>`tt` - perioada ceasului de 12 ore cu litere mici (am/pm)"
    },
    numericmask: {
      decimalSeparator: "Un simbol folosit pentru a separa partea fracționară de partea întreagă a unui număr afișat.",
      thousandsSeparator: "Un simbol folosit pentru a separa cifrele unui număr mare în grupuri de câte trei.",
      precision: "Limitează câte cifre să fie reținute după punctul zecimal pentru un număr afișat."
    },
    currencymask: {
      prefix: "Unul sau mai multe simboluri care să fie afișate înaintea valorii.",
      suffix: "Unul sau mai multe simboluri care să fie afișate după valoare."
    },
    theme: {
      isPanelless: "Această setare se aplică doar întrebărilor din afara unui panou.",
      primaryColor: "Setează o culoare suplimentară care evidențiază elementele cheie ale chestionarului.",
      panelBackgroundTransparency: "Ajustează transparența panourilor și casetelor de întrebări în raport cu fundalul chestionarului.",
      questionBackgroundTransparency: "Ajustează transparența elementelor de intrare în raport cu fundalul chestionarului.",
      cornerRadius: "Setează raza colțurilor pentru toate elementele dreptunghiulare. Activați modul avansat dacă doriți să setați valori individuale pentru raza colțurilor pentru elementele de intrare sau panourile și casetele de întrebări.",
      "--sjs-general-backcolor-dim": "Setează culoarea principală a fundalului chestionarului."
    },
    header: {
      inheritWidthFrom: "Opțiunea \"La fel ca și containerul\" ajustează automat lățimea zonei de conținut a antetului pentru a se potrivi în elementul HTML în care este plasat chestionarul.",
      textAreaWidth: "Lățimea zonei de antet care conține titlul și descrierea chestionarului, măsurată în pixeli.",
      overlapEnabled: "Când este activată, partea de sus a chestionarului se suprapune cu partea de jos a antetului.",
      mobileHeight: "Când este setată la 0, înălțimea este calculată automat pentru a găzdui conținutul antetului."
    },
    progressBarInheritWidthFrom: "Opțiunea \"La fel ca containerul\" ajustează automat lățimea zonei barei de progres pentru a se potrivi cu elementul HTML în care este plasat sondajul."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "Lăsați gol, dacă este la fel ca 'Nume'"
    },
    multiSelect: "Permite selecția multiplă",
    showLabel: "Arată subtitlurile pentru imagini și videoclipuri",
    swapOrder: "Schimbă ordinea dintre Da și Nu",
    value: "Valoare",
    tabAlign: "Alinierea tabului",
    sourceType: "Tipul sursei de fișier",
    fitToContainer: "Potrivește în container",
    setValueExpression: "Setează expresia valorii",
    description: "Descriere",
    logoFit: "Potrivirea logo-ului",
    pages: "Pagini",
    questions: "Întrebări",
    triggers: "Declanșatori",
    calculatedValues: "Variabile personalizate",
    surveyId: "ID-ul chestionarului",
    surveyPostId: "ID-ul postării chestionarului",
    surveyShowDataSaving: "Afișează salvarea datelor chestionarului",
    questionDescriptionLocation: "Alinierea descrierii întrebării",
    progressBarType: "Tipul barei de progres",
    showTOC: "Arată tabelul de conținut (TOC)",
    tocLocation: "Alinierea TOC",
    questionTitlePattern: "Modelul titlului întrebării",
    widthMode: "Modul de lățime al chestionarului",
    showBrandInfo: "Arată informații despre marcă",
    useDisplayValuesInDynamicTexts: "Utilizați valorile afișate în textele dinamice",
    visibleIf: "Vizibil dacă",
    defaultValueExpression: "Expresia valorii implicite",
    requiredIf: "Necesar dacă",
    resetValueIf: "Resetați valoarea dacă",
    setValueIf: "Setează valoarea dacă",
    validators: "Reguli de validare",
    bindings: "Legături",
    renderAs: "Renderizare ca",
    attachOriginalItems: "Atașați elementele originale",
    choices: "Opțiuni",
    choicesByUrl: "Opțiuni de la URL",
    currency: "Valută",
    cellHint: "Sugestie celulă",
    totalMaximumFractionDigits: "Numărul maxim de zecimale totale",
    totalMinimumFractionDigits: "Numărul minim de zecimale totale",
    columns: "Coloane",
    detailElements: "Elemente detaliate",
    allowAdaptiveActions: "Permite acțiuni adaptive",
    defaultRowValue: "Valoarea implicită a rândului",
    detailPanelShowOnAdding: "Afișează panoul detaliat la adăugare",
    choicesLazyLoadEnabled: "Încărcare întârziată activată pentru opțiuni",
    choicesLazyLoadPageSize: "Dimensiunea paginii pentru încărcarea întârziată a opțiunilor",
    inputFieldComponent: "Componenta câmpului de intrare",
    itemComponent: "Componentă element",
    min: "Min",
    max: "Max",
    minValueExpression: "Expresia valorii minime",
    maxValueExpression: "Expresia valorii maxime",
    step: "Pas",
    dataList: "Elemente pentru sugestii automate",
    inputSize: "Lățimea câmpului de intrare (în caractere)",
    itemTitleWidth: "Lățimea etichetei elementului (în px)",
    inputTextAlignment: "Alinierea valorilor de intrare",
    elements: "Elemente",
    content: "Conținut",
    navigationTitle: "Titlul navigării",
    navigationDescription: "Descrierea navigării",
    longTap: "Apăsare lungă",
    autoGrow: "Extinderea dinamică a câmpului de intrare",
    allowResize: "Permite redimensionarea",
    acceptCarriageReturn: "Acceptă întoarcerea la linie",
    displayMode: "Mod de afișare",
    rateType: "Tip de evaluare",
    label: "Etichetă",
    contentMode: "Mod de conținut",
    imageFit: "Potrivirea imaginii și miniaturilor",
    altText: "Text alternativ",
    height: "Înălțime",
    mobileHeight: "Înălțimea pe smartphone-uri",
    penColor: "Culoarea stiloului",
    backgroundColor: "Culoarea fundalului",
    templateElements: "Elemente template",
    operator: "Operator",
    isVariable: "Este variabil",
    runExpression: "Rulează expresia",
    showCaption: "Arată subtitlul",
    iconName: "Nume pictogramă",
    iconSize: "Dimensiunea pictogramei",
    precision: "Precizie",
    matrixDragHandleArea: "Zona de manipulare a matricei",
    backgroundImage: "Imagine de fundal",
    backgroundImageFit: "Potrivirea imaginii de fundal",
    backgroundImageAttachment: "Atașament imagine de fundal",
    backgroundOpacity: "Opacitatea fundalului",
    selectToRankEnabled: "Permite clasificarea selectivă",
    selectToRankAreasLayout: "Alinierea zonei de clasificare",
    selectToRankEmptyRankedAreaText: "Text de afișat dacă toate opțiunile sunt selectate",
    selectToRankEmptyUnrankedAreaText: "Textul substitut pentru zona de clasificare",
    allowCameraAccess: "Permite accesul la cameră",
    scaleColorMode: "Modul de culoare al pictogramei de evaluare",
    rateColorMode: "Schema de culori a pictogramelor Smileys",
    copyDisplayValue: "Copiază valoarea afișată",
    effectiveColSpan: "Span de coloană eficient",
    progressBarInheritWidthFrom: "Lățimea zonei barei de progres"
  },
  theme: {
    advancedMode: "Mod avansat",
    pageTitle: "Pagină",
    questionTitle: "Caseta de întrebare",
    editorPanel: "Element de intrare",
    lines: "Linii",
    primaryDefaultColor: "Implicit",
    primaryDarkColor: "Hover",
    primaryLightColor: "Selectat",
    backgroundDimColor: "Culoarea fundalului",
    cornerRadius: "Raza colțului",
    backcolor: "Fundal implicit",
    hovercolor: "Fundal la trecere",
    borderDecoration: "Decorarea bordurii",
    fontColor: "Culoarea fontului",
    backgroundColor: "Culoarea fundalului",
    primaryForecolor: "Culoare implicită",
    primaryForecolorLight: "Culoare dezactivată",
    font: "Font",
    borderDefault: "Mai întunecat",
    borderLight: "Mai deschis",
    fontFamily: "Familia de fonturi",
    fontWeightRegular: "Regular",
    fontWeightHeavy: "Heavy",
    fontWeightSemiBold: "Semi-bold",
    fontWeightBold: "Bold",
    color: "Culoare",
    placeholderColor: "Culoarea textului substitut",
    size: "Dimensiune",
    opacity: "Opacitate",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Adăugați efect de umbră",
    boxShadowBlur: "Blur",
    boxShadowSpread: "Întindere",
    boxShadowDrop: "Drop",
    boxShadowInner: "Interior",
    names: {
      default: "Implicit",
      sharp: "Sharp",
      borderless: "Fără bordură",
      flat: "Flat",
      plain: "Simplu",
      doubleborder: "Bordură dublă",
      layered: "Stratificat",
      solid: "Solid",
      threedimensional: "3D",
      contrast: "Contrast"
    },
    colors: {
      teal: "Teal",
      blue: "Albastru",
      purple: "Violet",
      orchid: "Orhidee",
      tulip: "Lalea",
      brown: "Maro",
      green: "Verde",
      gray: "Gri"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Fundal de suprafață",
    "--sjs-primary-background-500": "Primar",
    "--sjs-secondary-background-500": "Secundar",
    surfaceScale: "Suprafață",
    userInterfaceBaseUnit: "Interfață cu utilizatorul",
    fontScale: "Font",
    names: {
      sc2020: "Creator de sondaje 2020",
      "default-light": "Lumină",
      "default-dark": "Întunecat",
      "default-contrast": "Contrast"
    }
  }
};

setupLocale({ localeCode: "ro", strings: roStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Validarea câmpurilor goale pentru focalizarea pierdută"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Activați această opțiune pentru a declanșa validarea atunci când un utilizator se concentrează pe un câmp de introducere gol și apoi îl lasă fără a efectua modificări."
// progressBarInheritWidthFrom.survey: "Same as survey" => "La fel ca sondajul"
// progressBarInheritWidthFrom.container: "Same as container" => "La fel ca containerul"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Afișează previzualizări în miniatură pentru fișierele încărcate atunci când este posibil. Deselectați dacă doriți să afișați pictogramele fișierelor."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Opțiunea \"La fel ca containerul\" ajustează automat lățimea zonei barei de progres pentru a se potrivi cu elementul HTML în care este plasat sondajul."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Lățimea zonei barei de progres"
// maskType.none: "None" => "Niciunul"
// maskType.pattern: "Pattern" => "Model"
// maskType.numeric: "Numeric" => "Numerică"
// maskType.datetime: "Date and Time" => "Data și ora"
// maskType.currency: "Currency" => "Valută"

// inputTextAlignment.auto: "Auto" => "Automobil"
// inputTextAlignment.left: "Left" => "Stânga"
// inputTextAlignment.right: "Right" => "Dreapta"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Selectați modul de aliniere a valorii de intrare în câmp. Setarea implicită \"Auto\" aliniază valoarea de intrare la dreapta dacă se aplică mascare monedară sau numerică și la stânga dacă nu."
// p.inputTextAlignment: "Input value alignment" => "Alinierea valorilor de intrare"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Afișați bara de progres"
// paneldynamic.showProgressBar: "Show the progress bar" => "Afișați bara de progres"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Alinierea barei de progres"
// pv.carousel: "Carousel" => "Carusel"
// progressBarLocation.top: "Top" => "Culme"
// progressBarLocation.bottom: "Bottom" => "Fund"
// progressBarLocation.topBottom: "Top and bottom" => "Sus și jos"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Aranjează opțiunile de alegere într-un aspect cu mai multe coloane. Când este setat la 0, opțiunile sunt afișate într-o singură linie. Când este setată la -1, valoarea reală este moștenită de la proprietatea \"Număr de coloane imbricate\" a matricei părinte."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Linkurile YouTube nu sunt acceptate."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Începeți să configurați formularul"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Faceți clic pe orice pictogramă de categorie pentru a explora setările sondajului. Setările suplimentare vor deveni disponibile odată ce adăugați un element de chestionar la suprafața de proiectare."
// pe.caseInsensitive: "Case insensitive" => "Insensibil la majuscule și minuscule"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Selectați dacă literele mari și mici din expresia regulată trebuie tratate ca echivalente."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Formularul tău este gol"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Formularul tău este gol"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Trageți un element din caseta de instrumente sau faceți clic pe butonul de mai jos."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Trageți un element din caseta de instrumente sau faceți clic pe butonul de mai jos."
// ed.previewPlaceholderTitle: "No preview" => "Fără previzualizare"
// ed.previewPlaceholderTitleMobile: "No preview" => "Fără previzualizare"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Sondajul nu conține elemente vizibile."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Sondajul nu conține elemente vizibile."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Fără șiruri de tradus"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Fără șiruri de tradus"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Adăugați elemente la formular sau modificați filtrul șiruri din bara de instrumente."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Adăugați elemente la formular sau modificați filtrul șiruri din bara de instrumente."
// lg.logicPlaceholderTitle: "No logical rules" => "Fără reguli logice"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Fără reguli logice"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Creați o regulă pentru a personaliza fluxul sondajului."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Creați o regulă pentru a personaliza fluxul sondajului."
// pe.showTimer: "Use a timer" => "Utilizarea unui cronometru"
// theme.advancedMode: "Advanced mode" => "Mod avansat"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Setează locația unui cronometru pe o pagină."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Când este setată la 0, înălțimea este calculată automat pentru a găzdui conținutul antetului."
// p.mobileHeight: "Height on smartphones" => "Înălțimea pe smartphone-uri"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Când este activată, partea de sus a chestionarului se suprapune cu partea de jos a antetului."
// ed.creatorSettingTitle: "Creator Settings" => "Setările creatorului"
// tabs.accentColors: "Accent colors" => "Culori de accent"
// tabs.scaling: "Scaling" => "Scalare"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Atribuie numere întrebărilor imbricate în acest panou."
// creatortheme.--sjs-special-background: "Surface background" => "Fundal de suprafață"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primar"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Secundar"
// creatortheme.surfaceScale: "Surface" => "Suprafață"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Interfață cu utilizatorul"
// creatortheme.fontScale: "Font" => "Font"
// names.sc2020: "Survey Creator 2020" => "Creator de sondaje 2020"
// names.default-light: "Light" => "Lumină"
// names.default-dark: "Dark" => "Întunecat"
// names.default-contrast: "Contrast" => "Contrast"
// panel.showNumber: "Number this panel" => "Numerotați acest panou"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Selectați dacă doriți ca chestionarul să avanseze automat la pagina următoare după ce un respondent a răspuns la toate întrebările de pe pagina curentă. Această funcție nu se va aplica dacă ultima întrebare de pe pagină este deschisă sau permite răspunsuri multiple."
// autocomplete.name: "Full Name" => "Nume complet"
// autocomplete.honorific-prefix: "Prefix" => "Prefix"
// autocomplete.given-name: "First Name" => "Prenume"
// autocomplete.additional-name: "Middle Name" => "Al doilea nume"
// autocomplete.family-name: "Last Name" => "Nume de familie"
// autocomplete.honorific-suffix: "Suffix" => "Sufix"
// autocomplete.nickname: "Nickname" => "Poreclă"
// autocomplete.organization-title: "Job Title" => "Titlul postului"
// autocomplete.username: "User Name" => "Nume de utilizator"
// autocomplete.new-password: "New Password" => "Parolă nouă"
// autocomplete.current-password: "Current Password" => "Parolă curentă"
// autocomplete.organization: "Organization Name" => "Numele organizației"
// autocomplete.street-address: "Full Street Address" => "Adresa stradală completă"
// autocomplete.address-line1: "Address Line 1" => "Linia de adresă 1"
// autocomplete.address-line2: "Address Line 2" => "Linia de adresă 2"
// autocomplete.address-line3: "Address Line 3" => "Linia de adresă 3"
// autocomplete.address-level4: "Level 4 Address" => "Adresa de nivel 4"
// autocomplete.address-level3: "Level 3 Address" => "Nivel 3 Adresă"
// autocomplete.address-level2: "Level 2 Address" => "Nivel 2 Adresă"
// autocomplete.address-level1: "Level 1 Address" => "Adresa de nivel 1"
// autocomplete.country: "Country Code" => "Codul țării"
// autocomplete.country-name: "Country Name" => "Numele țării"
// autocomplete.postal-code: "Postal Code" => "Cod poștal"
// autocomplete.cc-name: "Cardholder Name" => "Numele titularului cardului"
// autocomplete.cc-given-name: "Cardholder First Name" => "Prenumele titularului cardului"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Al doilea prenume al deținătorului cardului"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Numele de familie al titularului cardului"
// autocomplete.cc-number: "Credit Card Number" => "Numărul cardului de credit"
// autocomplete.cc-exp: "Expiration Date" => "Data de expirare"
// autocomplete.cc-exp-month: "Expiration Month" => "Luna de expirare"
// autocomplete.cc-exp-year: "Expiration Year" => "Anul de expirare"
// autocomplete.cc-csc: "Card Security Code" => "Codul de securitate al cardului"
// autocomplete.cc-type: "Credit Card Type" => "Tip card de credit"
// autocomplete.transaction-currency: "Transaction Currency" => "Moneda tranzacției"
// autocomplete.transaction-amount: "Transaction Amount" => "Suma tranzacției"
// autocomplete.language: "Preferred Language" => "Limba preferată"
// autocomplete.bday: "Birthday" => "Aniversare"
// autocomplete.bday-day: "Birthday Day" => "Ziua zilei de naștere"
// autocomplete.bday-month: "Birthday Month" => "Luna zilei de naștere"
// autocomplete.bday-year: "Birthday Year" => "Anul zilei de naștere"
// autocomplete.sex: "Gender" => "Gen"
// autocomplete.url: "Website URL" => "Adresa URL a site-ului web"
// autocomplete.photo: "Profile Photo" => "Fotografie de profil"
// autocomplete.tel: "Telephone Number" => "Număr telefonic"
// autocomplete.tel-country-code: "Country Code for Phone" => "Codul de țară pentru telefon"
// autocomplete.tel-national: "National Telephone Number" => "Număr de telefon național"
// autocomplete.tel-area-code: "Area Code" => "Prefix"
// autocomplete.tel-local: "Local Phone Number" => "Număr de telefon local"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Prefix telefon local"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Sufixul telefonului local"
// autocomplete.tel-extension: "Phone Extension" => "Extensie de telefon"
// autocomplete.email: "Email Address" => "Adresa de e-mail"
// autocomplete.impp: "Instant Messaging Protocol" => "Protocol de mesagerie instantanee"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Blocați starea de extindere/restrângere pentru întrebări"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Nu aveți încă nicio pagină"
// pe.addNew@pages: "Add new page" => "Adaugă o pagină nouă"
// ed.zoomInTooltip: "Zoom In" => "Măriți"
// ed.zoomOutTooltip: "Zoom Out" => "Micșorare"
// tabs.surfaceBackground: "Surface Background" => "Fundal de suprafață"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Utilizați răspunsurile de la ultima intrare ca implicit"
// colors.gray: "Gray" => "Gri"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Alinierea butoanelor de navigare"
// pv.allQuestions: "Show all questions" => "Afișează toate întrebările"
// pv.answeredQuestions: "Show answered questions only" => "Afișați numai întrebările la care au răspuns"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Setează locația butoanelor de navigare dintr-o pagină."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Utilizați valorile din următoarea coloană de matrice sau întrebare de panou ca ID-uri de alegere"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Utilizați valorile din următoarea coloană de matrice sau întrebare de panou ca texte de alegere"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "În tipurile de întrebări cu selecție unică și multiplă, fiecare opțiune de alegere are un ID și o valoare afișată. Această setare specifică ce coloană de matrice sau întrebare de panou ar trebui să furnizeze ID-urile."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "În tipurile de întrebări cu selecție unică și multiplă, fiecare opțiune de alegere are un ID și o valoare afișată. Această setare specifică ce coloană de matrice sau întrebare de panou ar trebui să furnizeze textele afișate."
// pe.progressBarLocation: "Progress bar alignment" => "Alinierea barei de progres"
// progressBarLocation.topbottom: "Top and bottom" => "Sus și jos"
// progressBarLocation.aboveheader: "Above the header" => "Deasupra antetului"
// progressBarLocation.belowheader: "Below the header" => "Sub antet"
// progressBarLocation.off: "Hidden" => "Ascuns"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Setează locația barei de progres. Valoarea \"Auto\" afișează bara de progres deasupra sau dedesubtul antetului sondajului."
// survey.readOnly: "Make the survey read-only" => "Faceți chestionarul doar în citire"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Selectați dacă doriți să împiedicați respondenții să completeze chestionarul."
// paneldynamic.showNumber: "Number the panel" => "Numerotați panoul"
// question.showNumber: "Number this question" => "Numerotați această întrebare"
// pe.previewMode: "Preview mode" => "Modul de previzualizare"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Activarea aspectului grilei"
// pe.maskSettings: "Mask settings" => "Setările măștii"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Alinierea mesajelor de eroare de extindere a rândurilor"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Setează locația mesajelor de eroare pentru întrebările imbricate în secțiunile de detaliu. Opțiunea \"Moștenire\" aplică setarea din proprietatea \"Alinierea mesajului de eroare\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Coloane de aspect grilă"
// pe.startPageTitlePlaceholder: "Start Page" => "Pagina de pornire"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Lățimea efectivă, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Lățimea titlului întrebării, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Nu aveți încă coloane de aspect"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Specifică câte coloane se întinde acest panou în aspectul grilei."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Acest tabel vă permite să configurați fiecare coloană de grilă din panou. Setează automat procentul de lățime pentru fiecare coloană pe baza numărului maxim de elemente dintr-un rând. Pentru a particulariza aspectul grilei, ajustați manual aceste valori și definiți lățimea titlului pentru toate întrebările din fiecare coloană."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator vă permite să ajustați manual lățimile în linie ale elementelor de formular pentru a controla aspectul. Dacă acest lucru nu produce rezultatul dorit, puteți activa aspectul grilei, care structuri formează elemente folosind un sistem bazat pe coloane. Pentru a configura coloanele de aspect, selectați o pagină sau un panou și utilizați tabelul \"Setări întrebări\" → \"Coloane grilă\". Pentru a ajusta câte coloane se întinde pe o întrebare, selectați-o și setați valoarea dorită în câmpul \"Aspect\" → \"Spania coloanelor\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Specifică câte coloane se întinde această întrebare în aspectul grilei."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Acest tabel vă permite să configurați fiecare coloană de grilă din pagină. Setează automat procentul de lățime pentru fiecare coloană pe baza numărului maxim de elemente dintr-un rând. Pentru a particulariza aspectul grilei, ajustați manual aceste valori și definiți lățimea titlului pentru toate întrebările din fiecare coloană."

// ed.expandTooltip: "Expand" => "Expanda"
// ed.collapseTooltip: "Collapse" => "Colaps"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Ex.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Setează lățimea consecventă pentru toate etichetele articolelor. Acceptă valori CSS (px, %, in, pt etc.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Măriți la 100%"
// ed.addLanguageTooltip: "Add Language" => "Adăugați limbă"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Setează numărul de linii afișate în zonele de text pentru comentariile la întrebări. Dacă intrarea ocupă mai multe linii, apare bara de derulare."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Valoarea de afișare implicită pentru textele dinamice"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "O valoare afișată în întrebările HTML și în titlurile și descrierile dinamice ale elementelor chestionarului atunci când valoarea întrebării este goală."
// showQuestionNumbers.recursive: "Recursive numbering" => "Numerotare recursivă"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Lățimea titlului întrebării"
// pe.allowCustomChoices: "Allow custom choices" => "Permiteți opțiuni personalizate"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Setează lățimea consecventă pentru titlurile întrebărilor atunci când sunt aliniate la stânga casetelor de întrebări. Acceptă valori CSS (px, %, in, pt etc.)."
// page.name: "A page ID that is not visible to respondents." => "Un cod de pagină care nu este vizibil pentru respondenți."
// page.description: "Type a page subtitle." => "Tastați o subtitrare a paginii."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "O legendă afișată pe un buton de navigare din bara de progres sau din cuprinsul (TOC). Dacă lăsați acest câmp gol, butonul de navigare va folosi titlul paginii sau numele paginii. Pentru a activa bara de progres sau TOC, accesați \"Sondaj\" → \"Navigare\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Selectați pentru a permite respondenților să-și adauge propriile opțiuni dacă opțiunea dorită nu este disponibilă în meniul drop-down. Opțiunile personalizate vor fi stocate doar temporar pe durata sesiunii curente a browserului."