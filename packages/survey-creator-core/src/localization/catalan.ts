import { setupLocale } from "survey-creator-core";

export var catalanTranslation = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Editar",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Mira y aprende a crear enquestes",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Arrossega un tipus de pregunta per començar a dissenyar la teva enquesta!",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Crea una regla per personalitzar el flux de l'enquesta",
    // "Copy"
    copy: "Copiar",
    // "Duplicate"
    duplicate: "Duplicar",
    // "Add to toolbox"
    addToToolbox: "Afegir a la caixa d'eines",
    // "Delete Panell"
    deletePanel: "Eliminar panell",
    // "Delete Question"
    deleteQuestion: "Eliminar pregunta",
    // "Convert to"
    convertTo: "Convertir a",
    // "Drag element"
    drag: "Elemento de arrastre"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Vista prèvia",
    // "Themes"
    theme: "Temas",
    // "Translations"
    translation: "Traducció",
    // "Designer"
    designer: "Dissenyador de la enquesta",
    // "JSON Editor"
    json: "Editor de JSON",
    // "Logic"
    logic: "Lògica de la enquesta"
  },
  // Question types
  qt: {
    // "Default"
    default: "Defecte",
    // "Checkboxes"
    checkbox: "Caselles",
    // "Long Text"
    comment: "Text llarg",
    // "Image Picker"
    imagepicker: "Selector de imatges",
    // "Ranking"
    ranking: "Ranking",
    // "Image"
    image: "Imatge",
    // "Dropdown"
    dropdown: "Desplegable",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Menú desplegable de selección múltiple",
    // "File Upload"
    file: "Fitxer",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matriu (selecció única)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matriu (opció múltiple)",
    // "Dynamic Matrix"
    matrixdynamic: "Matriu (files dinàmiques)",
    // "Multiple Textboxes"
    multipletext: "Múltiples textos",
    // "Panel"
    panel: "Panell",
    // "Dynamic Panell"
    paneldynamic: "Panell (panells dinámicos)",
    // "Radio Button Group"
    radiogroup: "Grup de botons d'opció",
    // "Rating Scale"
    rating: "Escala de valoració",
    // [Auto-translated] "Slider"
    slider: "Slider",
    // "Single-Line Input"
    text: "Entrada de línia única",
    // "Yes/No (Boolean)"
    boolean: "Sí/No (Booleà)",
    // "Expression (read-only)"
    expression: "Expressió (només lectura)",
    // "Signature"
    signaturepad: "Signatura",
    // [Auto-translated] "Button Group"
    buttongroup: "Grup de botons"
  },
  toolboxCategories: {
    // "General"
    general: "general",
    // "Choice Questions"
    choice: "Preguntes de selecció",
    // "Text Input Questions"
    text: "Preguntes d'entrada de text",
    // "Containers"
    containers: "Contenidors",
    // "Matrix Questions"
    matrix: "Preguntes matriu",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Per defecte ({0})",
    // "Survey"
    survey: "Enquesta",
    // "Settings"
    settings: "Configuració de la enquesta",
    // "Open settings"
    settingsTooltip: "Configuració de enquesta abierta",
    // "Survey Settings"
    surveySettings: "Opcions enquesta",
    // "Survey settings"
    surveySettingsTooltip: "Configuració de la enquesta",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Configuració del tema",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Configuració del tema",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Configuració del creador",
    // "Show Panell"
    showPanel: "Mostrar panell",
    // "Hide Panell"
    hidePanel: "Ocultar panell",
    // "Select previous"
    prevSelected: "Seleccionar anterior",
    // "Select next"
    nextSelected: "Seleccionar següent",
    // [Auto-translated] "Focus previous"
    prevFocus: "Enfoque anterior",
    // [Auto-translated] "Focus next"
    nextFocus: "Enfoque següent",
    // "Survey"
    surveyTypeName: "Enquesta",
    // "Page"
    pageTypeName: "Pàgina",
    // "Panell"
    panelTypeName: "Panell",
    // "Question"
    questionTypeName: "Pregunta",
    // "Column"
    columnTypeName: "Columna",
    // "Add New Page"
    addNewPage: "Afegir nova pàgina",
    // "Scroll to the Right"
    moveRight: "Desplácese a la derecha",
    // "Scroll to the Left"
    moveLeft: "Desplácese a la izquierda",
    // "Delete Page"
    deletePage: "Eliminar pàgina",
    // "Edit Page"
    editPage: "Editar pàgina",
    // "Edit"
    edit: "Editar",
    // "page"
    newPageName: "Pàgina",
    // "question"
    newQuestionName: "Pregunta",
    // "panell"
    newPanelName: "Panell",
    // "text"
    newTextItemName: "Text",
    // [Auto-translated] "Default"
    defaultV2Theme: "Per defecte",
    // [Auto-translated] "Modern"
    modernTheme: "Modern",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Incumplimiento (heretat)",
    // "Preview Survey Again"
    testSurveyAgain: "Enquesta de prueba de nou",
    // "Survey width: "
    testSurveyWidth: "Ancho de la enquesta:",
    // "You had to navigate to"
    navigateToMsg: "Tuviste que navegar a:",
    // "Save Survey"
    saveSurvey: "Desar la enquesta",
    // "Save Survey"
    saveSurveyTooltip: "Desar la enquesta",
    // [Auto-translated] "Save Theme"
    saveTheme: "Desar tema",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Desar tema",
    // "Hide errors"
    jsonHideErrors: "Ocultar errors",
    // "Show errors"
    jsonShowErrors: "Mostrar errors",
    // "Undo"
    undo: "Deshacer",
    // "Redo"
    redo: "Rehacer",
    // "Undo last change"
    undoTooltip: "Deshacer el último cambio",
    // "Redo the change"
    redoTooltip: "Rehacer el cambio",
    // [Auto-translated] "Expand"
    expandTooltip: "Expandir",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Colapso",
    // "Expand All"
    expandAllTooltip: "Expandir todo",
    // "Collapse All"
    collapseAllTooltip: "Contraer todo",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Acercar",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Zoom al 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Alejar",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Bloquear el estado de expansión/contracción de las preguntes",
    // "Show more"
    showMoreChoices: "Mostrar más",
    // "Show less"
    showLessChoices: "Mostrar menos",
    // "Copy"
    copy: "Copiar",
    // "Cut"
    cut: "Cortar",
    // "Paste"
    paste: "Pegar",
    // "Copy selection to clipboard"
    copyTooltip: "Copia selección al portapapeles",
    // "Cut selection to clipboard"
    cutTooltip: "Corta la selección al portapapeles",
    // "Paste from clipboard"
    pasteTooltip: "Pega de portapapeles",
    // "Options"
    options: "Opcions",
    // "Generate Valid JSON"
    generateValidJSON: "Generar un JSON válido",
    // "Generate Readable JSON"
    generateReadableJSON: "Generar JSON legible",
    // "Toolbox"
    toolbox: "Caja de herramientas",
    // "Properties"
    "property-grid": "Propiedades",
    // [Auto-translated] "Search"
    toolboxSearch: "Buscar",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Escriba para buscar...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "No se han encontrado resultados",
    // [Auto-translated] "No properties to display"
    propertyGridEmptySurveyText: "No hay propiedades que mostrar",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Escribe para buscar...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "No se han encontrado resultados",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Empieza a configurar tu formulario",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Haga clic en cualquier icono de categoría para explorar la configuració de la enquesta. Los ajustes adicionales estarán disponibles una vez que agregue un elemento de topografía a la superficie de diseño.",
    // "Please correct JSON."
    correctJSON: "Por favor, corrija JSON",
    // "Survey Results "
    surveyResults: "Resultado de la enquesta:",
    // "As Table"
    surveyResultsTable: "Como Tabla",
    // "As JSON"
    surveyResultsJson: "Como JSON",
    // "Question Title"
    resultsTitle: "Títol de la pregunta",
    // "Question Name"
    resultsName: "Nom de la pregunta",
    // "Answer Value"
    resultsValue: "Valor de respuesta",
    // "Display Value"
    resultsDisplayValue: "Valor de visualización",
    // "Modified"
    modified: "Modificada",
    // "Saving"
    saving: "Guardando",
    // "Saved"
    saved: "Guardado",
    // "Error"
    propertyEditorError: "error:",
    // "Error! Editor content is not saved."
    saveError: "¡Error!El contenido del editor no se ha guardado",
    // "Language Settings"
    translationPropertyGridTitle: "Opcions de lenguaje",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Configuració del tema",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Agregar idioma",
    // "Languages"
    translationLanguages: "Lenguajes",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "¿Está seguro de que desea eliminar todas las cadenas de este idioma?",
    // "Select language to translate"
    translationAddLanguage: "Seleccione el idioma para traducir",
    // "All Strings"
    translationShowAllStrings: "Mostrar todos los textos",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Sólo textos utilizados",
    // "All Pages"
    translationShowAllPages: "Mostrar todas las pàgines",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Sin cuerdas para traducir. Por favor, cambie el filtro",
    // "Export to CSV"
    translationExportToSCVButton: "Exportar a CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Importación de CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Traducir automáticamente todo",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Traducir de: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Cadenas sin traducir",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Merge {0} con lugar per defecte",
    // "Translation..."
    translationPlaceHolder: "Traducció...",
    // [Auto-translated] "Source: "
    translationSource: "Fuente: ",
    // [Auto-translated] "Target: "
    translationTarget: "Blanco: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Los enlaces de YouTube no son compatibles.",
    // [Auto-translated] "Export"
    themeExportButton: "Exportar",
    // [Auto-translated] "Import"
    themeImportButton: "Importación",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Exportar",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Importación",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Copiar en el portapapeles",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Restablecer la configuració per defecte del tema",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "¿Realmente quieres resetear el tema? Todas tus personalizaciones se perderán.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Sí, restablece el tema",
    // "Bold"
    bold: "Negrita",
    // "Italic"
    italic: "Itálica",
    // "Underline"
    underline: "Subrayar",
    // "Add Question"
    addNewQuestion: "Afegir pregunta",
    // "Select page..."
    selectPage: "Seleccionar pàgina ...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Las opcions se copian de",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Las opcions se cargan desde un servicio web.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Ir a la configuració",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Vista prèvia de las opcions de elección cargadas",
    // "HTML content will be here."
    htmlPlaceHolder: "Contenido HTML irá aquí.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Arrastra aquí una pregunta desde la caja de herramientas.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "La enquesta está vacía. Arrastra una pregunta desde la caja de herramientas o haz click en el botón de abajo.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "La pàgina está vacía. Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Arrastre y suelte una imagen aquí o haga clic en el botón de abajo y elija una imatge para cargar",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Haga clic en el botón \"Agregar pregunta\" a continuación para comenzar a crear su formulario.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Tu formulario está vacío",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Tu formulario está vacío",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Sin vista prèvia",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Sin vista prèvia",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "La enquesta no contiene ningún elemento visible.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "La enquesta no contiene ningún elemento visible.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Sin ataduras para traducir",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Sin ataduras para traducir",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Agregue elementos a su formulario o cambie el filtro de cadenas en la barra de herramientas.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Agregue elementos a su formulario o cambie el filtro de cadenas en la barra de herramientas.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Haga clic en el botón \"Agregar pregunta\" a continuación para agregar un nou elemento a la pàgina.",
    // "Click the \"Add Question\" button below to add a new element to the panell."
    panelPlaceHolderMobile: "Haga clic en el botón \"Agregar pregunta\" a continuación para agregar un nou elemento al panell.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Haga clic en el botón de abajo y elija una imatge para cargar",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Elegir imatge",
    // "Add {0}"
    addNewTypeQuestion: "Afegir {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGOTIPO]",
    // [Auto-translated] "Item "
    choices_Item: "Artículo ",
    // [Auto-translated] "Select a file"
    selectFile: "Seleccionar un fitxer",
    // [Auto-translated] "Remove the file"
    removeFile: "Eliminar el fitxer",
    lg: {
      // "Add New Rule"
      addNewItem: "Afegir nova regla",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Crea una regla para personalizar el flujo de la enquesta.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Sin regles lógicas",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Sin regles lógicas",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Cree una regla para personalizar el flujo de la enquesta.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Cree una regla para personalizar el flujo de la enquesta.",
      // "Show/hide page"
      page_visibilityName: "Visibilidad de la pagina",
      // "Enable/disable page"
      page_enableName: "Habilitar (deshabilitar) pàgina",
      // [Auto-translated] "Make page required"
      page_requireName: "Hacer que la pàgina sea obligatòria",
      // "Show/hide panell"
      panel_visibilityName: "Visibilidad del panell",
      // "Enable/disable panell"
      panel_enableName: "Panell habilitar / deshabilitar",
      // [Auto-translated] "Make panell required"
      panel_requireName: "Hacer que el panell sea obligatori",
      // "Show/hide question"
      question_visibilityName: "Pregunta visibilidad",
      // "Enable/disable question"
      question_enableName: "Pregunta habilitar / deshabilitar",
      // "Make question required"
      question_requireName: "Pregunta opcional requerida",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Restablecer valor de pregunta",
      // [Auto-translated] "Set question value"
      question_setValueName: "Establecer el valor de la pregunta",
      // "Show/hide column"
      column_visibilityName: "Mostrar (ocultar) columna",
      // "Enable/disable column"
      column_enableName: "Habilitar (deshabilitar) columna",
      // "Make column required"
      column_requireName: "Hacer columna requerida",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Restablecer valor de columna",
      // [Auto-translated] "Set column value"
      column_setValueName: "Establecer el valor de la columna",
      // "Complete survey"
      trigger_completeName: "Enquesta completa",
      // "Set answer"
      trigger_setvalueName: "Establecer valor de la pregunta",
      // "Copy answer"
      trigger_copyvalueName: "Copiar valor de la pregunta",
      // "Skip to question"
      trigger_skipName: "Saltar a la pregunta",
      // "Run expression"
      trigger_runExpressionName: "Ejecutar la expressió personalitzada",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Text personalitzat 'Pàgina de agradecimiento'",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Haga que la pàgina sea visible cuando la expressió lògica vuelva verdadera. De lo contrario, manténgalo invisible",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panell invisible."
      panel_visibilityDescription: "Haga que el panell sea visible cuando la expressió lògica vuelva verdadera. De lo contrario, manténgalo invisible",
      // "Make the panell and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Haga el panell, y todos los elementos dentro de él, habiliten cuando la expressió lògica devuelve verdadero. De lo contrario, manténgalos deshabilitados",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Haz que la pregunta sea visible cuando la expressió lògica se devuelve 'verdadero'. De lo contrario, se mantiene invisible",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Haz que la pregunta se habilite cuando la expressió lògica devuelve 'verdadero'. De lo contrario, se mantiene deshabilitat",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "La pregunta se requiere cuando la expressió lògica devuelve 'verdadero'",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Cuando la expressió lògica devuelve 'verdadero', la enquesta se completa y el usuario final ve la 'pàgina de agradecimiento'",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Cuando se cambian los valors de las preguntes, que se usan en la expresión lógica, se cambian y la expressió lògica devuelve 'verdadero', entonces el valor se establece en la pregunta seleccionada",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Cuando se cambian los valors de las preguntes, que se usan en la expresión lógica, se cambian y la expressió lògica devuelve 'verdadero', entonces el valor de una pregunta seleccionada se copia a otra pregunta seleccionada",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Cuando la expressió lògica devuelve 'verdadero', la enquesta salta a la pregunta seleccionada",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Cuando la expresión lògica devuelve 'verdadero', entonces se realiza la expresión personalitzada. Es posible que opcionalmente establezca este resultado de expressió en la pregunta seleccionada",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Si la expressió lògica devuelve 'verdadero', entonces el texto per defecte para la 'pàgina de agradecimiento' se cambia por el text dado",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Cuando la expressió: '{0}' devuelve VERDADERO:", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Nova regla",
      // "make page {0} visible"
      page_visibilityText: "Hacer la pàgina {0} Visible", // {0} page name
      // "make panell {0} visible"
      panel_visibilityText: "Hacer panell {0} visible", // {0} panel name
      // "make panell {0} enable"
      panel_enableText: "Hacer panell {0} habilitar", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "Hacer Pregunta {0} Visible", // {0} question name
      // "make question {0} enable"
      question_enableText: "Hacer Pregunta {0} Habilitar", // {0} question name
      // "make question {0} required"
      question_requireText: "Hacer la pregunta {0} requerida", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Restablecer valor para la pregunta: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Asignar valor: {1} a la pregunta: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "hacer la columna {0} de la pregunta {1} visible", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "hacer la columna {0} de la pregunta {1} activa", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "hacer la columna {0} de la pregunta {1} requerida", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Restablecer el valor de celda de la columna: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Asignar valor de celda: {1} a columna: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Una expressió cuyo resultado se asignará a la pregunta de destino.",
      // "survey becomes completed"
      trigger_completeText: "La enquesta se completa",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "En cuestión: {0} valor {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Valor de pregunta claro: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Copiar en cuestión: {0} valor de la pregunta {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Enquesta salta a la pregunta {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Expressió de ejecución: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: "y establecer su resultado en cuestión: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Mostrar text personalitzat para la 'gracias pàgina'",
      // "All Questions"
      showAllQuestions: "Todas las preguntes",
      // "All Action Types"
      showAllActionTypes: "Todos los tipos de acció",
      // "Condition(s)"
      conditions: "Condició(es)",
      // "Action(s)"
      actions: "Comportamiento",
      // "Define condition(s)"
      expressionEditorTitle: "Definir la(s) condició(es)",
      // "Define action(s)"
      actionsEditorTitle: "Definir la(s) acció(es)",
      // "Delete Action"
      deleteAction: "Eliminar acció",
      // "Add Action"
      addNewAction: "Afegir nova acció",
      // "Select action..."
      selectedActionCaption: "Seleccione una acció para agregar ...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "La expressió lògica está vacía o inválida. Por favor corríjalo",
      // "Please add at least one action."
      noActionError: "Por favor, agregue al menos una acció",
      // "Please fix issues in your action(s)."
      actionInvalid: "Por favor, solucione problemas en su(s) acció(es)",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Las regles lógicas están incompletas",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "No ha completado algunas de las regles lógicas. Si deja la pestaña ahora, los cambios se perderán. ¿Aún desea salir de la pestaña sin completar los cambios?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Sí",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "No, quiero completar las regles"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panell name"
      name: "Nom del panell",
      // [Auto-translated] "Panell title"
      title: "Títol de la viñeta",
      // [Auto-translated] "Panell description"
      description: "Descripció del panell",
      // [Auto-translated] "Make the panell visible if"
      visibleIf: "Haga que el panell sea visible si",
      // [Auto-translated] "Make the panell required if"
      requiredIf: "Haga que el panell sea obligatori si",
      // [Auto-translated] "Question order within the panell"
      questionOrder: "Orden de las preguntes dentro del panell",
      // [Auto-translated] "Move the panell to page"
      page: "Mover el panell a la pàgina",
      // [Auto-translated] "Display the panell on a new line"
      startWithNewLine: "Mostrar el panell en una nova línea",
      // [Auto-translated] "Panell collapse state"
      state: "Estado de contracción del panell",
      // [Auto-translated] "Inline panell width"
      width: "Ancho del panell en línea",
      // [Auto-translated] "Minimum panell width"
      minWidth: "Anchura mínima del panell",
      // [Auto-translated] "Maximum panell width"
      maxWidth: "Anchura máxima del panell",
      // [Auto-translated] "Number this panell"
      showNumber: "Numerar este panell"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Anchura efectiva, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Ancho del títol de la pregunta, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panell name"
      name: "Nom del panell",
      // [Auto-translated] "Panell title"
      title: "Títol de la viñeta",
      // [Auto-translated] "Panell description"
      description: "Descripció del panell",
      // [Auto-translated] "Entry display mode"
      displayMode: "Modo de visualización de entrada",
      // [Auto-translated] "Make the panell visible if"
      visibleIf: "Haga que el panell sea visible si",
      // [Auto-translated] "Make the panell required if"
      requiredIf: "Haga que el panell sea obligatori si",
      // [Auto-translated] "Move the panell to page"
      page: "Mover el panell a la pàgina",
      // [Auto-translated] "Display the panell on a new line"
      startWithNewLine: "Mostrar el panell en una nova línea",
      // [Auto-translated] "Panell collapse state"
      state: "Estado de contracción del panell",
      // [Auto-translated] "Inline panell width"
      width: "Ancho del panell en línea",
      // [Auto-translated] "Minimum panell width"
      minWidth: "Anchura mínima del panell",
      // [Auto-translated] "Maximum panell width"
      maxWidth: "Anchura máxima del panell",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Confirmar la eliminación de la entrada",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Patrón de descripció de la entrada",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Patrón de títol de entrada",
      // [Auto-translated] "Empty panell text"
      noEntriesText: "Text de panell vacío",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Patrón de títol de tabulación",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Marcador de posición del títol de la pestaña",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Haga visible una entrada individual si",
      // [Auto-translated] "Number the panell"
      showNumber: "Numerar el panell",
      // [Auto-translated] "Panell title alignment"
      titleLocation: "Alineación del títol del panell",
      // [Auto-translated] "Panell description alignment"
      descriptionLocation: "Alineación de la descripció del panell",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Alineación del títol de la pregunta",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Ancho del títol de la pregunta",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Alineación de mensajes de error",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Nova ubicación de entrada",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Evitar respuestas duplicadas en la següent pregunta"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Nom de la pregunta",
      // [Auto-translated] "Question title"
      title: "Títol de la pregunta",
      // [Auto-translated] "Question description"
      description: "Descripció de la pregunta",
      // [Auto-translated] "Show the title and description"
      showTitle: "Mostrar el títol y la descripció",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Haz que la pregunta sea visible si",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Haga que la pregunta sea obligatòria si:",
      // [Auto-translated] "Move the question to page"
      page: "Mover la pregunta a la pàgina",
      // [Auto-translated] "Question box collapse state"
      state: "Estado de contracción del cuadro de pregunta",
      // [Auto-translated] "Number this question"
      showNumber: "Numerar esta pregunta",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Alineación del títol de la pregunta",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Alineación de la descripció de la pregunta",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Alineación de mensajes de error",
      // [Auto-translated] "Increase the inner indent"
      indent: "Aumentar la sangría interior",
      // [Auto-translated] "Inline question width"
      width: "Ancho de la pregunta en línea",
      // [Auto-translated] "Minimum question width"
      minWidth: "Ancho mínimo de la pregunta",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Ancho máximo de la pregunta",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Actualizar el valor del campo de entrada"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Ancho del área de firma",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Altura del área de firma",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Escalado automàtic del área de firma",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Mostrar un marcador de posición dentro del área de firma",
      // [Auto-translated] "Placeholder text"
      placeholder: "Text de marcador de posición",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Text de marcador de posición en modo de solo lectura o vista prèvia",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Mostrar el botón Borrar dentro del área de firma",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Anchura mínima del trazo",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Anchura máxima del trazo",
      // [Auto-translated] "Stroke color"
      penColor: "Color del trazo"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Altura del campo de entrada (en líneas)"
    },
    // "Question numbering"
    showQuestionNumbers: "Mostrar números de pregunta",
    // "Question indexing type"
    questionStartIndex: "Índice de inicio de la pregunta (1, 2 o 'A', 'A')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Nom de la expressió",
      // [Auto-translated] "Expression title"
      title: "Títol de la expressió",
      // [Auto-translated] "Expression description"
      description: "Descripció de la expressió",
      // [Auto-translated] "Expression"
      expression: "Expressió"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Expressió"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Expressió"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Títol de la enquesta",
      // [Auto-translated] "Survey description"
      description: "Descripció de la enquesta",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Hacer que la enquesta sea de solo lectura"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Nom de la pàgina",
      // [Auto-translated] "Page title"
      title: "Títol de la pàgina",
      // [Auto-translated] "Page description"
      description: "Descripció de la pàgina",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Hacer que la pàgina sea visible si",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Haga que la pàgina sea obligatòria si",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Límite de tiempo para completar la pàgina",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Orden de las preguntes en la pàgina"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Nom de la columna",
      // [Auto-translated] "Column title"
      title: "Títol de la columna",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Evitar respuestas duplicadas",
      // [Auto-translated] "Column width"
      width: "Anchura de columna",
      // [Auto-translated] "Minimum column width"
      minWidth: "Anchura mínima de columna",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Altura del campo de entrada (en líneas)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Haga que la columna sea visible si",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Haga que la columna sea obligatòria si",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Cada opción en una columna separada"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Borrar otros en la misma fila"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Nom",
      // [Auto-translated] "Title"
      title: "Títol"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Desar el valor enmascarado en los resultados de la enquesta"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Patrón de valors"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Valor mínimo",
      // [Auto-translated] "Maximum value"
      max: "Valor máximo"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Permitir valors negativos",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Separador de millares",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Separador decimal",
      // [Auto-translated] "Value precision"
      precision: "Precisión de valor",
      // [Auto-translated] "Minimum value"
      min: "Valor mínimo",
      // [Auto-translated] "Maximum value"
      max: "Valor máximo"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Prefijo de moneda",
      // [Auto-translated] "Currency suffix"
      suffix: "Sufijo de moneda"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Borrar otros cuando se selecciona",
    // [Auto-translated] "Display both text and value"
    showValue: "Mostrar text y valor",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Requerir al usuario que introduzca un comentario",
    // "Display area height"
    imageHeight: "Altura de imatge",
    // "Display area width"
    imageWidth: "Ancho de la imatge",
    // "Join identifier"
    valueName: "Nom de valor",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Valor de visualización per defecte para textos dinámicos",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Alineación de etiquetas",
    // "Input field width (in characters)"
    size: "Tamaño de entrada (en caracteres)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Alineación de mensajes de error de celda",
    // [Auto-translated] "Enabled"
    enabled: "Habilitat",
    // [Auto-translated] "Disabled"
    disabled: "Deshabilitat",
    // "Apply"
    apply: "Solicitar",
    // "OK"
    ok: "ok",
    // "Save"
    save: "Desar",
    // "Clear"
    clear: "Limpiar",
    // "Save"
    saveTooltip: "Desar",
    // "Cancel"
    cancel: "Cancel·lar",
    // [Auto-translated] "Set"
    set: "Poner",
    // "Reset"
    reset: "Reiniciar",
    // "Change"
    change: "Cambiar",
    // "Refresh"
    refresh: "Actualizar",
    // "Close"
    close: "Cerrar",
    // "Delete"
    delete: "Borrar",
    // "Add"
    add: "Agregar",
    // "Add New"
    addNew: "Afegir nou",
    // "Click to add an item..."
    addItem: "Haga clic para agregar un artículo ...",
    // "Click to remove the item..."
    removeItem: "Haga click para eliminar el elemento...",
    // "Drag the item"
    dragItem: "Arrastra el elemento",
    // "Other"
    addOther: "Otra",
    // "Select All"
    addSelectAll: "Seleccionar todo",
    // "None"
    addNone: "Ninguna",
    // "Remove All"
    removeAll: "Eliminar todo",
    // "Edit"
    edit: "Editar",
    // "Return without saving"
    back: "Volver sin desar",
    // "Return without saving"
    backTooltip: "Volver sin desar",
    // "Save and return"
    saveAndBack: "Desar y volver",
    // "Save and return"
    saveAndBackTooltip: "Desar y volver",
    // "Done"
    doneEditing: "Hecho",
    // "Edit Choices"
    editChoices: "Editar opcions",
    // "Show Choices"
    showChoices: "Mostrar opcions",
    // "Move"
    move: "Moverse",
    // "<empty>"
    empty: "<vaciar>",
    // "Value is empty"
    emptyValue: "El valor está vacío",
    // "Manual Entry"
    fastEntry: "Entrada rápida",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Valor '{0}' no es único",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Por favor, limita el númeror de elementos de {0} a {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Introduce al menos {0} artículos",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Puedes introducir datos en el següent formato:\nvalue1|text\nvalue2",
    // "Form Entry"
    formEntry: "Entrada de forma",
    // "Test the service"
    testService: "Probar el servicio",
    // "Please select the element"
    itemSelectorEmpty: "Por favor seleccione el elemento",
    // "Please select the action"
    conditionActionEmpty: "Por favor seleccione la acció",
    // "Select a question..."
    conditionSelectQuestion: "Seleccionar pregunta ...",
    // "Select a page..."
    conditionSelectPage: "Seleccionar pàgina ...",
    // "Select a panell..."
    conditionSelectPanel: "Seleccionar panell ...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Por favor ingrese / seleccione el valor",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Presione CTRL + ESPACIO para obtener sugerencia de completar la expressió",
    // "Current row"
    aceEditorRowTitle: "Fila actual",
    // "Current panell"
    aceEditorPanelTitle: "Panell actual",
    // "For more details please check the documentation"
    showMore: "Para más detalles, por favor revise la documentación",
    // "Available questions"
    assistantTitle: "Preguntas disponibles:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Debe haber al menos una columna o fila",
    // "Review before submit"
    showPreviewBeforeComplete: "Previsualitzar respuestas entes de enviar la enquesta",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Habilitat por una condició",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Restablecimiento",
    // "Please enter a value"
    propertyIsEmpty: "Porfavor introduzca un valor",
    // "Please enter a unique value"
    propertyIsNoUnique: "Por favor ingrese un valor único",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Por favor ingrese un nom único",
    // "Do not use reserved words: \"item\", \"choice\", \"panell\", \"row\"."
    propertyNameIsIncorrect: "No utilice palabras reservadas: \"elemento\", \"elección\", \"panell\", \"fila\".",
    // "You don't have any items yet"
    listIsEmpty: "Afegir un nou artículo",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "No se han añadido opcions todavía",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Todavía no tienes ninguna columna",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Todavía no tiene columnes de diseño",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Todavía no tienes ninguna fila",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Todavía no tiene ninguna regla de validació",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Todavía no tiene ninguna variable personalitzada",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Todavía no tienes ningún desencadenante",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Todavía no tienes ningún enlace",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Todavía no tienes ninguna pàgina",
    // "Add new choice"
    "addNew@choices": "Añade una opción",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Agregar nova columna",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Agregar nova fila",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Agregar nova regla",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Adición de una nova variable",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Agregar nou disparador",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Agregar nova URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Agregar nova pàgina",
    // "Expression is empty"
    expressionIsEmpty: "La expressió está vacía",
    // "Value"
    value: "Valor",
    // "Text"
    text: "Text",
    // "Row ID"
    rowid: "ID de fila",
    // "Image or video file URL"
    imageLink: "Enlace de imágen",
    // "Edit column: {0}"
    columnEdit: "Editar columna: {0}",
    // "Edit item: {0}"
    itemEdit: "Editar artículo: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Camino",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL del servicio web",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Obtenga el valor para almacenar de la següent propiedad"
    },
    // "Get value to display from the following property"
    titleName: "Nom del títol",
    // "Get file URLs from the following property"
    imageLinkName: "Obtener URLs de imatge desde el següent campo JSON",
    // "Accept empty response"
    allowEmptyResponse: "Permitir respuestas vacías",
    // "Title"
    titlePlaceholder: "Títol de entrada aquí",
    // "Survey Title"
    surveyTitlePlaceholder: "Títol de la enquesta de entrada aquí",
    // "Page {num}"
    pageTitlePlaceholder: "Títol de la pàgina de entrada aquí",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Pàgina de inicio",
    // "Description"
    descriptionPlaceholder: "Ingrese una descripció",
    // "Description"
    surveyDescriptionPlaceholder: "Ingrese una descripció de la enquesta",
    // "Description"
    pageDescriptionPlaceholder: "Ingrese una descripció de la pàgina",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Opcions de envoltura",
    // "Enable the \"Other\" option"
    showOtherItem: "Tiene opción 'Otro'",
    // "Rename the \"Other\" option"
    otherText: "Cambiar text 'Otro'",
    // "Enable the \"None\" option"
    showNoneItem: "Tiene opcion 'Ninguno'",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Habilite la opción \"Negarse a responder\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Habilite la opción \"No sé\"",
    // "Rename the \"None\" option"
    noneText: "Cambiar text 'Ninguno'",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Tiene opción 'Selecionar todo'",
    // "Rename the \"Select All\" option"
    selectAllText: "Cambiar text de 'Seleccionar todo'",
    // "Minimum value for auto-generated items"
    choicesMin: "Valor mínimo para artículos generados automàtics",
    // "Maximum value for auto-generated items"
    choicesMax: "Valor máximo para artículos generados automàtics",
    // "Step value for auto-generated items"
    choicesStep: "La diferencia entre los artículos generados automàtics",
    // "Name"
    name: "Nom",
    // "Title"
    title: "Títol",
    // "Cell input type"
    cellType: "Tipo de célula",
    // "Column count"
    colCount: "Recuento de columnes",
    // "Choice order"
    choicesOrder: "Seleccione el orden de las opcions",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Permitir opcions personalitzades",
    // "Visible"
    visible: "¿Es visible?",
    // "Required"
    isRequired: "¿Se requiere?",
    // [Auto-translated] "Mark as required"
    markRequired: "Marcar según sea necesario",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Quitar la marca requerida",
    // "Require an answer in each row"
    eachRowRequired: "Requerir respuesta para todas las files",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Evitar respuestas duplicadas en files",
    // "Error message for required questions"
    requiredErrorText: "Text de error requerit",
    // "Display the question on a new line"
    startWithNewLine: "¿Empieza con la nova línea?",
    // "Rows"
    rows: "Número de files",
    // "Columns"
    cols: "Recuento de columnes",
    // "Placeholder text within input field"
    placeholder: "Placeholder de entrada",
    // "Show preview area"
    showPreview: "Mostrar área de vista prèvia",
    // "Store file content in JSON result as text"
    storeDataAsText: "Tienda el contenido del fitxer en el resultado de JSON como text",
    // "Maximum file size (in bytes)"
    maxSize: "Tamaño máximo de fitxer en bytes",
    // [Auto-translated] "Maximum number of files"
    maxFiles: "Número máximo de fitxers",
    // "Row count"
    rowCount: "Número de files",
    // "Columns layout"
    columnLayout: "Diseño de columnes",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Afegir la ubicación del botón de la fila",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponer files a columnes",
    // "\"Add Row\" button text"
    addRowText: "Afegir text de botón de fila",
    // "\"Remove Row\" button text"
    removeRowText: "Eliminar el text del botón de fila",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Patrón de títol de campo de entrada",
    // "Minimum rating value"
    rateMin: "Valor mínimo",
    // "Maximum rating value"
    rateMax: "Valor máximo",
    // "Step value"
    rateStep: "Rango de los valors",
    // "Minimum value label"
    minRateDescription: "Descripció del valor mínimo",
    // "Maximum value label"
    maxRateDescription: "Descripció del valor máximo",
    // "Input type"
    inputType: "Tipo de entrada",
    // "Default Answer"
    defaultValue: "Valor por defecte",
    // "Default texts"
    cellsDefaultRow: "Textos de celdas per defecte",
    // "Edit survey settings"
    surveyEditorTitle: "Editar configuració de enquesta",
    // "Edit: {0}"
    qEditorTitle: "Editar: {0}",
    // "Maximum character limit"
    maxLength: "Longitud máxima",
    // "Build"
    buildExpression: "Construir",
    // "Edit"
    editExpression: "Editar",
    // "and"
    and: "y",
    // "or"
    or: "o",
    // "Remove"
    remove: "Eliminar",
    // "Add Condition"
    addCondition: "Afegir condició",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Selecciona una pegunta para epezar a configurar condicions.",
    // "If"
    if: "Si",
    // "then"
    then: "entonces",
    // "Target question"
    setToName: "Pregunta target",
    // "Question to copy answer from"
    fromName: "Pregunta desde la que copiar su respuesta",
    // "Question to skip to"
    gotoName: "Pregunta a la que saltar",
    // "Rule is incorrect"
    ruleIsNotSet: "La regla no es correcta",
    // "Add to the survey results"
    includeIntoResult: "Incluir en los resultados de la enquesta",
    // "Make the title and description visible"
    showTitle: "Mostrar / Ocultar Títol",
    // "Expand/collapse title"
    expandCollapseTitle: "Expandir / Contraer títol",
    // "Select a survey language"
    locale: "Idioma per defecte",
    // "Select device type"
    simulator: "Elige dispositivo",
    // "Switch to landscape orientation"
    landscapeOrientation: "Orientación horizontal ",
    // "Switch to portrait orientation"
    portraitOrientation: "Cambiar a orientatión retrato",
    // "Clear hidden question values"
    clearInvisibleValues: "Claros valors invisibles",
    // "Limit to one response"
    cookieName: "Nom de la cookie (para deshabilitar la enquesta de ejecución dos veces localmente)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Enviar resultados de enquestes en la pàgina Següent",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Almacenar 'Otros' valor en campo separado",
    // "Show page titles"
    showPageTitles: "Mostrar descripció de la pàgina",
    // "Show page numbers"
    showPageNumbers: "Mostrar números de pàgina",
    // "\"Previous Page\" button text"
    pagePrevText: "Pàgina de text del botón anterior",
    // "\"Next Page\" button text"
    pageNextText: "Pàgina Següent botón de text",
    // "\"Complete Survey\" button text"
    completeText: "Text complet del botón",
    // "\"Review Answers\" button text"
    previewText: "Vista prèvia del botón del botón",
    // "\"Edit Answer\" button text"
    editText: "Editar botón de text",
    // "\"Start Survey\" button text"
    startSurveyText: "Text de inicio de la enquesta",
    // "Show navigation buttons"
    showNavigationButtons: "Mostrar botones de navegación (navegación per defecte)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Alineación de los botones de navegación",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Mostrar botón anterior (el usuario puede volver a la pàgina anterior)",
    // "First page is a start page"
    firstPageIsStartPage: "La primera página en la enquesta es una pàgina iniciada",
    // "Show the \"Thank You\" page"
    showCompletePage: "Mostrar la pàgina completa al final (HTML finalizado)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Al responder todas las preguntes, vaya a la pàgina següent automáticamente",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Completar la enquesta automáticamente",
    // "Show the progress bar"
    showProgressBar: "Mostrar barra de progreso",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Alineación de la barra de progreso",
    // "Question title alignment"
    questionTitleLocation: "Ubicación del títol de la pregunta",
    // "Question title width"
    questionTitleWidth: "Ancho del títol de la pregunta",
    // "Required symbol(s)"
    requiredMark: "La pregunta requerida (s) símbolo (s)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Plantilla de título de la pregunta, el valor per defecte es: '{no}.{requiere} {títol} '",
    // "Error message alignment"
    questionErrorLocation: "Ubicación de error de la pregunta",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Enfoca la primera pregunta al cambiar la pàgina",
    // "Question order"
    questionOrder: "Orden de elementos en la pàgina",
    // "Time limit to complete the survey"
    timeLimit: "Tiempo máximo para terminar la enquesta",
    // "Time limit to complete one page"
    timeLimitPerPage: "Tiempo máximo para terminar una pàgina en la enquesta",
    // [Auto-translated] "Use a timer"
    showTimer: "Usar un temporizador",
    // "Timer alignment"
    timerLocation: "Mostrar panell de temporizador",
    // "Timer mode"
    timerInfoMode: "Mostrar modo de panell del temporizador",
    // "Enable entry addition"
    allowAddPanel: "Permitir agregar un panell",
    // "Enable entry removal"
    allowRemovePanel: "Permitir eliminar el panell",
    // "\"Add Entry\" button text"
    addPanelText: "Añadiendo text del panell",
    // "\"Remove Entry\" button text"
    removePanelText: "Eliminar text del panell",
    // "Show all elements on one page"
    isSinglePage: "Mostrar todos los elementos en una pàgina",
    // "HTML markup"
    html: "Html",
    // "Answer"
    setValue: "Respuesta",
    // "Storage format"
    dataFormat: "Formato imatge",
    // "Enable row addition"
    allowAddRows: "Permitir afegir files",
    // "Enable row removal"
    allowRemoveRows: "Permitir eliminar files",
    // "Enable row reordering"
    allowRowReorder: "Permitor drag and drop de files",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "No aplica si especificas el ancho o alto exacto de la imatge.",
    // "Minimum display area width"
    minImageWidth: "Ancho de imatge mínimo",
    // "Maximum display area width"
    maxImageWidth: "Ancho de imatge máximo",
    // "Minimum display area height"
    minImageHeight: "Alto de imatge mínimo",
    // "Maximum display area height"
    maxImageHeight: "Alto de imatge máximo",
    // "Minimum value"
    minValue: "Valor mínimo",
    // "Maximum value"
    maxValue: "Valor máximo",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "No distingue entre mayúsculas y minúscu",
    // "Minimum length (in characters)"
    minLength: "Longitud mínima",
    // "Allow digits"
    allowDigits: "Permitir dígitos",
    // "Minimum count"
    minCount: "Cantidad mínima",
    // "Maximum count"
    maxCount: "Cantidad máxima",
    // "Regular expression"
    regex: "Expressió regular",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Mensaje de validació",
      // [Auto-translated] "Validation expression"
      expression: "Expressió de validació",
      // [Auto-translated] "Notification type"
      notificationType: "Tipo de notificación",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Longitud máxima (en caracteres)"
    },
    // "Total row header"
    totalText: "Text total",
    // "Aggregation method"
    totalType: "Tipo total",
    // "Total value expression"
    totalExpression: "Expressió total",
    // "Total value display format"
    totalDisplayStyle: "Estilo de visualización total",
    // "Currency"
    totalCurrency: "Moneda total",
    // "Formatted string"
    totalFormat: "Formato total",
    // "Survey logo"
    logo: "Logo (URL o cadene codificada en base64)",
    // "Survey layout"
    questionsOnPageMode: "Estructura de la enquesta",
    // "Restrict answer length"
    maxTextLength: "Longitud máxima de la respuesta (en caracteres)",
    // "Restrict comment length"
    maxCommentLength: "Longitud máxima de comentario (en caracteres)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Altura del área de comentarios (en líneas)",
    // "Auto-expand text areas"
    autoGrowComment: "Auto-expand de comentario si es necesario",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Permitir a los usuarios cambiar el tamaño de las áreas de text",
    // "Update input field values"
    textUpdateMode: "Actualizar valor del text de la pregunta",
    // [Auto-translated] "Input mask type"
    maskType: "Tipo de máscara de entrada",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Fijar foco en la primera respuesta no válida",
    // "Run validation"
    checkErrorsMode: "Ejecutar validació",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Validar campos vacíos en caso de pérdida de foco",
    // "Redirect to an external link after submission"
    navigateToUrl: "Navegar a URL",
    // "Dynamic external link"
    navigateToUrlOnCondition: "URL dinámica",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Markup para mostrar si el usuario ya completó la enquesta",
    // "\"Thank You\" page markup"
    completedHtml: "Markup de pàgina de enquesta completada",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Markup de pàgina de enquesta dinámica completada",
    // "Markup to show while survey model is loading"
    loadingHtml: "Markup para mostrar mienstras que la enquesta se está cargando",
    // "Comment area text"
    commentText: "Area de text de comentario",
    // "Autocomplete type"
    autocomplete: "Tipo autocompletado",
    // "Label for \"True\""
    labelTrue: "Etiqueta \"Verdadero\"",
    // "Label for \"False\""
    labelFalse: "Etiqueta \"Falso\"",
    // "Show the Clear button"
    allowClear: "Mostrar el botón limpiar",
    // [Auto-translated] "Search mode"
    searchMode: "Modo de búsqueda",
    // [Auto-translated] "Display format"
    displayStyle: "Formato de visualización",
    // "Formatted string"
    format: "Cadena formateada",
    // "Maximum fractional digits"
    maximumFractionDigits: "Número máximo de dígitos de fracción",
    // "Minimum fractional digits"
    minimumFractionDigits: "Número mínimo de dígitos de fracción",
    // "Display grouping separators"
    useGrouping: "Mostrar seperadores de agrupación",
    // "Enable multiple file upload"
    allowMultiple: "Permitir múltiples ficheros",
    // "Preview uploaded images"
    allowImagesPreview: "Previsualitzar imatges",
    // [Auto-translated] "Accepted file categories"
    acceptedCategories: "Categorías de fitxer aceptadas",
    // [Auto-translated] "Additional file extensions"
    acceptedTypes: "Extensiones de fitxer adicionales",
    // "Wait for upload to complete"
    waitForUpload: "Espera a que se complete la carga",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Confirmar borrado de fichero",
    // "Row details alignment"
    detailPanelMode: "Localización del panell de detalle",
    // "Minimum row count"
    minRowCount: "Mínimo número de files",
    // "Maximum row count"
    maxRowCount: "Máximo número de files",
    // "Confirm row removal"
    confirmDelete: "Confirmar borrado de fila",
    // "Confirmation message"
    confirmDeleteText: "Mensaje de confirmación",
    // "Initial number of entries"
    panelCount: "Número incial de panell",
    // "Minimum number of entries"
    minPanelCount: "Número mínimo de panells",
    // "Maximum number of entries"
    maxPanelCount: "Número máximo de panells",
    // "Initial entry state"
    panelsState: "Estado de expansión del panell interno",
    // "\"Previous Entry\" button text"
    prevPanelText: "Tooltip del botón de panell previo",
    // "\"Next Entry\" button text"
    nextPanelText: "Tooltip del botón de següent panell",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Localización del botón eliminar panell",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Ocultar pregunta si no hay más files",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Ocultar columnes si no hay files",
    // [Auto-translated] "Custom rating values"
    rateValues: "Valores de clasificación personalitzats",
    // [Auto-translated] "Rating count"
    rateCount: "Recuento de calificaciones",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Configuració de clasificación",
    slider: {
      // [Auto-translated] "Min value"
      min: "Valor mínimo",
      // [Auto-translated] "Max value"
      max: "Valor máximo",
      // [Auto-translated] "Step value"
      step: "Valor del paso",
      // [Auto-translated] "Show scale labels"
      showLabels: "Mostrar etiquetas de escala",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Mostrar información sobre herramientas",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Permitir el cruce de pulgares",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Número de etiquetas generadas automáticamente",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Expressió de valor mínimo",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Expressió de valor máximo",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Configuració de etiquetas de escala",
      // [Auto-translated] "Slider type"
      sliderType: "Tipo de control deslizante",
      // [Auto-translated] "Min range length"
      minRangeLength: "Longitud mínima del rango",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Longitud máxima de rango",
      // [Auto-translated] "Custom labels"
      customLabels: "Etiquetas personalitzades",
      // [Auto-translated] "Label format"
      labelFormat: "Formato de etiqueta",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Formato de información sobre herramientas"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Altura de la imatge",
      // [Auto-translated] "Image width"
      imageWidth: "Ancho de la imatge"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Ocultar la pregunta si no contiene opcions",
    // "Minimum width"
    minWidth: "Anchura mímima (en valors aceptados CSS)",
    // "Maximum width"
    maxWidth: "Anchura máxima (en valors aceptados CSS)",
    // "Width"
    width: "Ancho (en valors aceptados CSS)",
    // "Show column headers"
    showHeader: "Mostrar cabeceras de columna",
    // "Show horizontal scrollbar"
    horizontalScroll: "Mostrar scrollbar horizontal",
    // "Minimum column width"
    columnMinWidth: "Anchura mímima de columna (en valors aceptados CSS)",
    // "Row header width"
    rowTitleWidth: "Anchura de cabecera de fila (en valors aceptados CSS)",
    // "Value to store when \"True\" is selected"
    valueTrue: "Valor \"verdadero\"",
    // "Value to store when \"False\" is selected"
    valueFalse: "Valor \"falso\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "Mensaje de error \"El valor está por debajo del mínimo\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Mensaje de error \"El valor supera el máximo\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Mensaje de error \"Comentario vacío\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Mensaje de error \"Valor de clave no único\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Opcions mínimas para seleccionar",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Máximo de opcions para seleccionar",
    // "Logo width"
    logoWidth: "Ancho de Logo (en valors aceptados CSS)",
    // "Logo height"
    logoHeight: "Alto de Logo (en valors aceptados CSS)",
    // "Read-only"
    readOnly: "Sólo-lectura",
    // "Disable the read-only mode if"
    enableIf: "Editable si",
    // "\"No rows\" message"
    noRowsText: "Mensaje \"Sin files\"",
    // "Separate special choices"
    separateSpecialChoices: "Opcions de separación especiales (None, Other, Select All)",
    // "Copy choices from the following question"
    choicesFromQuestion: "Copiar opcions de la següent pregunta",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Qué opcions a copiar?",
    // [Auto-translated] "Use values from the following matrix column or panell question as choice IDs"
    choiceValuesFromQuestion: "Utilice los valors de la següent columna de matriz o pregunta de panell como ID de opción",
    // [Auto-translated] "Use values from the following matrix column or panell question as choice texts"
    choiceTextsFromQuestion: "Utilice los valors de la següent columna de matriz o pregunta de panell como textos de elección",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Mostrar los títols de las pàgines en la barra de progreso",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Mostrar números de pàgina en la barra de progreso",
    // "Add a comment box"
    showCommentArea: "Mostrar el área de comentarios",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Text de marcador de posición para el cuadro de comentarios",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Mostrar las etiquetas como valors extremos",
    // "Row order"
    rowOrder: "Orden de files",
    // "Column layout"
    columnsLayout: "Disposición de columnes",
    // "Nested column count"
    columnColCount: "Número de columnes anidadas",
    // "Correct Answer"
    correctAnswer: "Respuesta correcta",
    // "Default Values"
    defaultPanelValue: "Valores por defecte",
    // "Cell Texts"
    cells: "Textos de celda",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Seleccione un archivo o pegue un enlace de fitxer...",
    // "Prevent duplicate responses in the following column"
    keyName: "Columna clave",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Haga que la opción sea visible si",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Haga que la opción sea seleccionable si"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Haga que la fila sea visible si",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Hacer que la fila sea editable si"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Text alternativo"
    },
    // "Logo alignment"
    logoPosition: "Posición del logotipo",
    // "Add logo..."
    addLogo: "Afegir logo ...",
    // "Change logo..."
    changeLogo: "Cambiar logo ...",
    logoPositions: {
      // "Remove logo"
      none: "Eliminar logo",
      // "Left"
      left: "Izquierda",
      // "Right"
      right: "Derecha",
      // "On the top"
      top: "En la parte superior",
      // "In the bottom"
      bottom: "En la parte inferior"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Modo de vista prèvia",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Habilitar el diseño de cuadrícula",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Columnas de cuadrícula",
    // [Auto-translated] "Mask settings"
    maskSettings: "Ajustes de la máscara",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Alineación de mensajes de error de detalles de fila",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panell Layout"
        layout: "Diseño de panells"
      },
      // "General"
      general: "General",
      // "Options"
      fileOptions: "Opcions",
      // "HTML Editor"
      html: "Editor HTML",
      // "Columns"
      columns: "Columnas",
      // "Rows"
      rows: "Filas",
      // "Choice Options"
      choices: "Opcions",
      // "Items"
      items: "Artículos",
      // "Visible If"
      visibleIf: "Visible si",
      // "Editable If"
      enableIf: "Habilitar si",
      // "Required If"
      requiredIf: "Requerit si",
      // "Rating Values"
      rateValues: "Valores de la tasa",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Configuració del control deslizante",
      // "Choices from a Web Service"
      choicesByUrl: "Opcions de la web",
      // "Default Choices"
      matrixChoices: "Opcions per defecte",
      // "Text Inputs"
      multipleTextItems: "Entradas de text",
      // "Numbering"
      numbering: "Numeración",
      // "Validators"
      validators: "Validadors",
      // "Navigation"
      navigation: "Navegación",
      // "Question Settings"
      question: "Pregunta",
      // "Pages"
      pages: "Páginas",
      // "Quiz Mode"
      timer: "Horas / cuestionario",
      // "Calculated Values"
      calculatedValues: "Valores calculados",
      // "Triggers"
      triggers: "Disparadors",
      // "Title template"
      templateTitle: "Títol de la plantilla",
      // "Totals"
      totals: "Totales",
      // "Conditions"
      logic: "Lògica",
      // [Auto-translated] "Input Mask Settings"
      mask: "Configuració de la máscara de entrada",
      layout: {
        // [Auto-translated] "Panell Layout"
        panel: "Disseny de panell",
        // [Auto-translated] "Layout"
        question: "Diseño",
        // [Auto-translated] "Layout"
        base: "Diseño"
      },
      // "Data"
      data: "Datos",
      // "Validation"
      validation: "Validació",
      // "Individual Cell Texts"
      cells: "Células",
      // "\"Thank You\" Page"
      showOnCompleted: "Mostrar en completado",
      // "Logo in the Survey Header"
      logo: "Logo en el títol de la enquesta",
      // "Slider"
      slider: "Slider",
      // "Expression"
      expression: "Expressió",
      // [Auto-translated] "Question Settings"
      questionSettings: "Configuració de la pregunta",
      // "Header"
      header: "Encabezado",
      // "Background"
      background: "Fondo",
      // "Appearance"
      appearance: "Apariencia",
      // [Auto-translated] "Accent colors"
      accentColors: "Colores de acento",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Fondo de superficie",
      // [Auto-translated] "Scaling"
      scaling: "Escalada",
      // "Others"
      others: "Otras"
    },
    // "Edit property '{0}'"
    editProperty: "Editar propiedad '{0}'",
    // "Items"
    items: "[Artículos: {0}]",
    // "Make choices visible if"
    choicesVisibleIf: "Opcions son visibles si",
    // "Make choices selectable if"
    choicesEnableIf: "Opcions son seleccionables si",
    // "Make columns visible if"
    columnsEnableIf: "Columnas son visibles si",
    // "Make rows visible if"
    rowsEnableIf: "Filas son visibles si",
    // "Increase the inner indent"
    innerIndent: "Afegir indents internos",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Usar las respuestas de la última entrada como per defecte",
    // "Please enter a value."
    enterNewValue: "Por favor, ingrese el valor",
    // "There are no questions in the survey."
    noquestions: "No hay ninguna pregunta en la enquesta",
    // "Please create a trigger"
    createtrigger: "Por favor crea un gatillo",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Presione el botón Entrar para editar",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Presione el botón Entrar para editar el elemento, presione el botón Eliminar para eliminar el elemento, presione ALT Plus Flecha hacia arriba o hacia abajo para mover el elemento",
    // "On "
    triggerOn: "En",
    // "Make pages visible"
    triggerMakePagesVisible: "Hacer visibles las pàgines:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Hacer elementos visibles:",
    // "Complete the survey if successful."
    triggerCompleteText: "Completa la enquesta si tiene éxito",
    // "The trigger is not set"
    triggerNotSet: "El gatillo no se establece",
    // "Run if"
    triggerRunIf: "Correr si",
    // "Change value of: "
    triggerSetToName: "Cambio de valor de:",
    // "Copy value from: "
    triggerFromName: "Copie el valor de:",
    // "Run this Expression"
    triggerRunExpression: "Ejecute esta expressió:",
    // "to: "
    triggerSetValue: "a:",
    // "Go to the question"
    triggerGotoName: "Ir a la pregunta:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "No coloque la variable en el resultado de la enquesta",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Por favor ingrese una expressió válida",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Escribir expressió aquí...",
    // "No file chosen"
    noFile: "Ningún fitxer elegido",
    // "Clear hidden question values"
    clearIfInvisible: "Limpiar el valor si la pregunta se oculta",
    // "Store values in the following property"
    valuePropertyName: "Valor del nom de propiedad",
    // "Enable search-as-you-type"
    searchEnabled: "Habilitar búsqueda",
    // "Hide selected items"
    hideSelectedItems: "Ocultar elementos seleccionados",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Contraer el menú desplegable al seleccionarlo",
    // "Vertical alignment within cells"
    verticalAlign: "Alineación vertical",
    // "Alternate row colors"
    alternateRows: "Alternar files",
    // "Make columns visible if"
    columnsVisibleIf: "Columnas son visibles si",
    // "Make rows visible if"
    rowsVisibleIf: "Filas son visibes si",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Text de marcador de posición para el cuadro de comentarios",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Text de marcador de posición para fitxer local",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Text de marcador de posición para la cámara",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Text de marcador de posición para fitxer local o cámara",
    // [Auto-translated] "Rating icon"
    rateType: "Icono de calificación",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Ej.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Ej.: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Ej.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Ej.: 6 pulgadas",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Ej.: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Ej.: 50%",
    // "auto"
    imageHeight_placeholder: "Automàtic",
    // "auto"
    imageWidth_placeholder: "Automàtic",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Ej.: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Tema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Apariencia de la pregunta",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Fondo y radio de esquina",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Fondo y radio de esquina",
      // [Auto-translated] "Accent color"
      primaryColor: "Color de acento",
      // [Auto-translated] "Panell and question box opacity"
      panelBackgroundTransparency: "Opacidad del panell y del cuadro de preguntes",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Opacidad del elemento de entrada",
      // [Auto-translated] "Survey font size"
      fontSize: "Tamaño de fuente de la enquesta",
      // [Auto-translated] "Survey scale factor"
      scale: "Factor de escala de la enquesta",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Radio de esquina",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Modo avanzado",
      // [Auto-translated] "Title font"
      pageTitle: "Fuente del títol",
      // [Auto-translated] "Description font"
      pageDescription: "Descripció fuente",
      // [Auto-translated] "Title font"
      questionTitle: "Fuente del títol",
      // [Auto-translated] "Description font"
      questionDescription: "Descripció fuente",
      // [Auto-translated] "Font"
      editorFont: "Fuente",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Opacidad", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Familia de fuentes de topografía",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Color de fondo",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Colores de fondo de acento",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Colores de primer plano de acento",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Colores de los mensajes de error",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Efectos de sombra",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Efectos de sombra",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Colores"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Vista",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Alineación del logotipo",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Fuente del títol de la enquesta",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Fuente de descripció de la enquesta",
      // [Auto-translated] "Survey title font"
      headerTitle: "Fuente del títol de la enquesta",
      // [Auto-translated] "Survey description font"
      headerDescription: "Fuente de descripció de la enquesta",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Ancho del área de contenido",
      // [Auto-translated] "Text width"
      textAreaWidth: "Ancho del text",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Color de fondo",
      // [Auto-translated] "Background image"
      backgroundImage: "Imatge de fondo",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Opacidad",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Solapar",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Alineación del logotipo",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Alineación del títol de la enquesta",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Alineación de la descripció de la enquesta"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "verdadero",
    // [Auto-translated] "false"
    "false": "falso",
    // [Auto-translated] "Local file"
    file: "Fitxer local",
    // [Auto-translated] "Camera"
    camera: "Cámara",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Fitxer local o cámara",
    // "Visible"
    show: "mostrar",
    // "Hidden"
    hide: "esconder",
    // "Heredar"
    default: "defecte",
    // "Initial"
    initial: "inicial",
    // "Random"
    random: "aleatoria",
    // "Collapsed"
    collapsed: "colapsada",
    // "Expanded"
    expanded: "expandida",
    // "None"
    none: "ninguna",
    // "Ascending"
    asc: "ascendente",
    // "Descending"
    desc: "descendiendo",
    // "Indeterminate"
    indeterminate: "indeterminada",
    // [Auto-translated] "Selected"
    selected: "Seleccionado",
    // [Auto-translated] "Unselected"
    unselected: "Sin seleccionar",
    // "decimal"
    decimal: "decimal",
    // "currency"
    currency: "divisa",
    // "percent"
    percent: "porcentaje",
    // "First panell is expanded"
    firstExpanded: "Primer Expandido",
    // "Hide question numbers"
    off: "no mostrar",
    // "List"
    list: "lista",
    // [Auto-translated] "Carousel"
    carousel: "Carrusel",
    // [Auto-translated] "Tabs"
    tab: "Pestañas",
    // "Panell navigator + Progress bar at the top"
    progressTop: "Progreso superior",
    // "Panell navigator + Progress bar at the bottom"
    progressBottom: "Progreso inferior",
    // "Panell navigator + Progress bar at the top and bottom"
    progressTopBottom: "Progreso inferior/superior",
    // "Horizontal"
    horizontal: "horizontal",
    // "Vertical"
    vertical: "vertical",
    // "Top"
    top: "arriba",
    // "Bottom"
    bottom: "abajo",
    // "Top and bottom"
    topBottom: "arriba y abajo",
    // "Both"
    both: "ambas",
    // "Left"
    left: "izquierda",
    // "Right"
    right: "Derecha",
    // [Auto-translated] "Center"
    center: "Centro",
    // [Auto-translated] "Left and right"
    leftRight: "Izquierda y derecha",
    // [Auto-translated] "Middle"
    middle: "Medio",
    // [Auto-translated] "color"
    color: "Color",
    // "date"
    date: "fecha",
    // "datetime"
    datetime: "fecha hora",
    // "datetime-local"
    "datetime-local": "fecha hora-local",
    // [Auto-translated] "email"
    email: "Correo electrónico",
    // "month"
    month: "mes",
    // "number"
    number: "número",
    // [Auto-translated] "password"
    password: "contraseña",
    // "range"
    range: "rango",
    // [Auto-translated] "tel"
    tel: "Tel",
    // "text"
    text: "text",
    // "time"
    time: "hora",
    // [Auto-translated] "url"
    url: "URL",
    // "week"
    week: "semana",
    // "Hidden"
    hidden: "oculta",
    // "Editable"
    edit: "editar",
    // "Read-only"
    display: "mostrar",
    // [Auto-translated] "Contain"
    contain: "Contener",
    // [Auto-translated] "Cover"
    cover: "Cubrir",
    // [Auto-translated] "Fill"
    fill: "Llenar",
    // [Auto-translated] "Next"
    next: "Próximo",
    // [Auto-translated] "Last"
    last: "Último",
    // "Upon survey completion"
    onComplete: "Al completarse",
    // "When question gets hidden"
    onHidden: "Al ocultarse",
    // "When question or its panell/page gets hidden"
    onHiddenContainer: "Cuando la pregunta o su panell/pàgina se oculta",
    clearInvisibleValues: {
      // "Never"
      none: "Nunca"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Nunca"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Botones de radio",
    inputType: {
      // [Auto-translated] "Color"
      color: "Color",
      // [Auto-translated] "Date"
      date: "Fecha",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Fecha y hora",
      // [Auto-translated] "Email"
      email: "Correo electrónico",
      // [Auto-translated] "Month"
      month: "Mes",
      // [Auto-translated] "Number"
      number: "Número",
      // [Auto-translated] "Password"
      password: "Contraseña",
      // [Auto-translated] "Range"
      range: "Gama",
      // [Auto-translated] "Phone Number"
      tel: "Número de teléfono",
      // [Auto-translated] "Text"
      text: "Mensaje de text",
      // [Auto-translated] "Time"
      time: "Hora",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Semana"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Valor único",
      // [Auto-translated] "Range"
      range: "Gama"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Automàtic",
      // [Auto-translated] "Always"
      always: "Siempre",
      // [Auto-translated] "Never"
      never: "Nunca"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Error",
      // [Auto-translated] "Warning"
      warning: "Advertencia",
      // [Auto-translated] "Informational"
      info: "Informativo"
    },
    acceptedCategories: {
      // [Auto-translated] "Images"
      image: "Imágenes",
      // [Auto-translated] "Videos"
      video: "Videos",
      // [Auto-translated] "Audio"
      audio: "Audio",
      // [Auto-translated] "Documents"
      document: "Documentos",
      // [Auto-translated] "Archives"
      archive: "Fitxer",
      // [Auto-translated] "Custom"
      custom: "Costumbre"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Nom complet",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Prefijo",
      // [Auto-translated] "First Name"
      "given-name": "Nom",
      // [Auto-translated] "Middle Name"
      "additional-name": "Segundo nom",
      // [Auto-translated] "Last Name"
      "family-name": "Apellido",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Sufijo",
      // [Auto-translated] "Nickname"
      nickname: "Apodo",
      // [Auto-translated] "Job Title"
      "organization-title": "Títol del trabajo",
      // [Auto-translated] "User Name"
      username: "Nom de usuario",
      // [Auto-translated] "New Password"
      "new-password": "Nova contraseña",
      // [Auto-translated] "Current Password"
      "current-password": "Contraseña actual",
      // [Auto-translated] "Organization Name"
      organization: "Nom de la organización",
      // [Auto-translated] "Full Street Address"
      "street-address": "Dirección completa",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Línea de dirección 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Línea de dirección 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Línea de dirección 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Dirección de nivel 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Dirección de nivel 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Dirección de nivel 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Dirección de nivel 1",
      // [Auto-translated] "Country Code"
      country: "Código de país",
      // [Auto-translated] "Country Name"
      "country-name": "Nom del país",
      // [Auto-translated] "Postal Code"
      "postal-code": "Código postal",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Nom del titular de la tarjeta",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Nom del titular de la tarjeta",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Segundo nom del titular de la tarjeta",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Apellido del titular de la tarjeta",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Número de tarjeta de crédito",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Fecha de caducidad",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Mes de vencimiento",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Año de vencimiento",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Código de seguridad de la tarjeta",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Tipo de tarjeta de crédito",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Moneda de la transacción",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Monto de la transacción",
      // [Auto-translated] "Preferred Language"
      language: "Idioma preferido",
      // [Auto-translated] "Birthday"
      bday: "Cumpleaños",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Día de cumpleaños",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Mes de cumpleaños",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Año de cumpleaños",
      // [Auto-translated] "Gender"
      sex: "Género",
      // [Auto-translated] "Website URL"
      url: "URL del sitio web",
      // [Auto-translated] "Profile Photo"
      photo: "Foto de perfil",
      // [Auto-translated] "Telephone Number"
      tel: "Número de teléfono",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Código de país para el teléfono",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Número de teléfono nacional",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Código de área",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Número de teléfono local",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Prefijo de teléfono local",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Sufijo de teléfono local",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Extensión de teléfono",
      // [Auto-translated] "Email Address"
      email: "Dirección de correo electrónico",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protocolo de mensajería instantánea"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Ninguno",
      // [Auto-translated] "Pattern"
      pattern: "Patrón",
      // [Auto-translated] "Numeric"
      numeric: "Numérico",
      // [Auto-translated] "Date and Time"
      datetime: "Fecha y hora",
      // [Auto-translated] "Currency"
      currency: "Divisa"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Automàtic",
      // [Auto-translated] "Left"
      left: "Izquierda",
      // [Auto-translated] "Right"
      right: "Derecha"
    },
    // "All"
    all: "todas",
    // "Page"
    page: "pàgina",
    // "Survey"
    survey: "enquesta",
    // "When switching to the next page"
    onNextPage: "Al cambiar pàgina",
    // "After an answer is changed"
    onValueChanged: "Al cambiar valor",
    // "Before an answer is changed"
    onValueChanging: "Antes de que una pregunta sea cambiada",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Estructura original",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Mostrar todas las preguntes en una sola pàgina",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Mostrar una sola pregunta por pàgina",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Mostrar un solo campo de entrada por pàgina"
    },
    // "No preview"
    noPreview: "sin vista prèvia",
    // "Show all questions"
    showAllQuestions: "Mostrar vista prèvia con todas las preguntes",
    // "Show answered questions only"
    showAnsweredQuestions: "Mostrar vista prèvia con preguntes contestadas",
    // [Auto-translated] "Show all questions"
    allQuestions: "Mostrar todas las preguntes",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Mostrar solo las preguntes respondidas",
    // "Completed pages"
    pages: "pàgines",
    // "Answered questions"
    questions: "preguntes",
    // "Answered required questions"
    requiredQuestions: "preguntes requerides",
    // "Valid answers"
    correctQuestions: "preguntes correctas",
    // "Completed pages (button UI)"
    buttons: "botones",
    // "Under the input field"
    underInput: "debajo de la respuesta",
    // "Under the question title"
    underTitle: "debajo del títol",
    // [Auto-translated] "On lost focus"
    onBlur: "Sobre el enfoque perdido",
    // "While typing"
    onTyping: "Mientras se escribe",
    // "Under the row"
    underRow: "Debajo de la fila",
    // "Under the row, display one section only"
    underRowSingle: "Debajo de la fila, sólo un panell es visible",
    // "Auto"
    auto: "Automàtic",
    timerInfoMode: {
      // "Both"
      combined: "Ambos"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Depende de la disposición de la matriz"
    },
    panelsState: {
      // "Locked"
      default: "Usuarios no pueden expandir o colapsar panells",
      // "Collapse all"
      collapsed: "Todos los panells colapsados",
      // "Expand all"
      expanded: "Todos los panells expandidos",
      // [Auto-translated] "First expanded"
      firstExpanded: "Primera expansión"
    },
    widthMode: {
      // "Static"
      static: "Estático",
      // [Auto-translated] "Responsive"
      responsive: "Sensible"
    },
    contentMode: {
      // "Image"
      image: "Imatge",
      // [Auto-translated] "Video"
      video: "Vídeo",
      // [Auto-translated] "YouTube"
      youtube: "YouTube (en inglés)"
    },
    displayMode: {
      // "Buttons"
      buttons: "Botomes",
      // [Auto-translated] "Dropdown"
      dropdown: "Menú desplegable"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Per defecte",
      // [Auto-translated] "Scale"
      scale: "Escama"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monocromo",
      // [Auto-translated] "Colored"
      colored: "Coloreado"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Generación automàtica",
      // [Auto-translated] "Manual"
      "false": "Manual"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Etiquetas",
      // [Auto-translated] "Stars"
      stars: "Estrellas",
      // [Auto-translated] "Smileys"
      smileys: "Emoticonos"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Cerrado con llave"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Numeración automàtica",
      // [Auto-translated] "Auto-numbering"
      on: "Numeración automàtica",
      // [Auto-translated] "Reset on each page"
      onPage: "Restablecer en cada pàgina",
      // [Auto-translated] "Reset on each panell"
      onpanel: "Restablecer en cada panell",
      // [Auto-translated] "Reset on each panell"
      onPanel: "Restablecer en cada panell",
      // [Auto-translated] "Recursive numbering"
      recursive: "Numeración recursiva",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Continuar a través de la enquesta",
      // [Auto-translated] "No numbering"
      off: "Sin numeración"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Bajo el títol de la pregunta",
      // [Auto-translated] "Under the input field"
      underInput: "En el campo de entrada"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Junto a las opcions",
      // [Auto-translated] "Above choices"
      vertical: "Opcions anteriores"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Divisa",
      // [Auto-translated] "Percentage"
      percent: "Porcentaje",
      // [Auto-translated] "Date"
      date: "Fecha"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Divisa",
      // [Auto-translated] "Percentage"
      percent: "Porcentaje",
      // [Auto-translated] "Date"
      date: "Fecha"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Text original en"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Text original en"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Arriba",
      // [Auto-translated] "Bottom"
      bottom: "Fondo",
      // [Auto-translated] "Top and bottom"
      topbottom: "Arriba y abajo",
      // [Auto-translated] "Above the header"
      aboveheader: "Encima del encabezado",
      // [Auto-translated] "Below the header"
      belowheader: "Debajo del encabezado",
      // [Auto-translated] "Hidden"
      off: "Escondido"
    },
    // [Auto-translated] "Sum"
    sum: "Suma",
    // [Auto-translated] "Count"
    count: "Contar",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Máximo",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Contiene",
      // [Auto-translated] "Starts with"
      startsWith: "Comienza con"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Automàtic",
      // [Auto-translated] "Cover"
      cover: "Cubrir",
      // [Auto-translated] "Contain"
      contain: "Contener",
      // [Auto-translated] "Stretch"
      fill: "Elasticidad",
      // [Auto-translated] "Tile"
      tile: "Teja"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fijo",
      // [Auto-translated] "Scroll"
      scroll: "Pergamino"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Básico",
      // [Auto-translated] "Advanced"
      advanced: "Avanzado"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Igual que la enquesta",
      // [Auto-translated] "Same as container"
      container: "Igual que el contenedor"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Ninguno",
      // [Auto-translated] "Accent color"
      accentColor: "Color de acento",
      // [Auto-translated] "Custom"
      custom: "Costumbre"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Luz",
      // [Auto-translated] "Dark"
      dark: "Oscuro"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Per defecte",
      // [Auto-translated] "Without Panels"
      "true": "Sin panells"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Igual que la enquesta",
      // [Auto-translated] "Same as container"
      container: "Igual que el contenedor"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "esta vacio",
    // "Not empty"
    notempty: "no está vacío",
    // "Equals"
    equal: "es igual a",
    // "Does not equal"
    notequal: "no es igual a",
    // "Contains"
    contains: "contiene",
    // "Does not contain"
    notcontains: "no contiene",
    // "Any of"
    anyof: "cualquiera de",
    // [Auto-translated] "None of"
    noneof: "Ninguna de ellas",
    // "All of"
    allof: "todo",
    // "Greater than"
    greater: "mayor que",
    // "Less than"
    less: "menos",
    // "Greater than or equal to"
    greaterorequal: "Mayor o igual",
    // "Less than or equal to"
    lessorequal: "Menos o iguales",
    // [Auto-translated] "and"
    and: "y",
    // [Auto-translated] "or"
    or: "o"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Usar la versión angular",
    // "Use jQuery version"
    jquery: "Usa la versión jQuery",
    // "Use Knockout version"
    knockout: "Usa la versión Knockout",
    // "Use React version"
    react: "Use la versión de reacción",
    // "Use Vue version"
    vue: "Usa la versión VUE",
    // "For bootstrap framework"
    bootstrap: "Para marco de bootstrap",
    // "Modern theme"
    modern: "Tema modern",
    // "Default theme"
    default: "Tema per defecte",
    // "Orange theme"
    orange: "Tema naranja",
    // "Darkblue theme"
    darkblue: "Tema DarkBlue",
    // "Darkrose theme"
    darkrose: "Tema de Darkrose",
    // "Stone theme"
    stone: "Tema de piedra",
    // "Winter theme"
    winter: "Tema de invierno",
    // "Winter-Stone theme"
    winterstone: "Tema de piedra de invierno",
    // "Show survey on a page"
    showOnPage: "Mostrar enquesta en una pàgina",
    // "Show survey in a window"
    showInWindow: "Mostrar enquesta en una ventana",
    // "Load Survey JSON from server"
    loadFromServer: "Enquesta de carga JSON del servidor",
    // "Scripts and styles"
    titleScript: "Scripts y estilos",
    // "HTML"
    titleHtml: "Html",
    // "JavaScript"
    titleJavaScript: "Javascript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Seleccione la pàgina para probarlo:",
    // "Show invisible elements"
    showInvisibleElements: "Mostrar elementos invisibles",
    // "Hide invisible elements"
    hideInvisibleElements: "Ocultar elementos invisibles",
    // [Auto-translated] "Previous"
    prevPage: "Anterior",
    // [Auto-translated] "Next"
    nextPage: "Próximo"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "Cantidad de respuestas",
    // "Email"
    emailvalidator: "Email",
    // "Expression"
    expressionvalidator: "expressió",
    // "Number"
    numericvalidator: "numérica",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "text"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "enquesta completa",
    // "Set answer"
    setvaluetrigger: "valor ajustado",
    // "Copy answer"
    copyvaluetrigger: "Valor de copia",
    // "Skip to question"
    skiptrigger: "Saltar a la pregunta",
    // "Run expression"
    runexpressiontrigger: "expressió de ejecución",
    // "change visibility (deprecated)"
    visibletrigger: "Cambiar visibilidad"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Ej.: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Ej.: mm/dd/aaaa HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Ej.: $",
      // "Ex.: USD"
      suffix: "Ej.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Ej.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Ej.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Ej.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Un ID de panell que no es visible para los encuestados.",
      // [Auto-translated] "Type a panell subtitle."
      description: "Escriba un subtítulo de panell.",
      // "Use the magic wand icon to set a conditional rule that determines panell visibility."
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad del panell.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panell."
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que desactive el modo de solo lectura para el panell.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de enquestes a menos que al menos una pregunta anidada tenga una respuesta.",
      // [Auto-translated] "Applies to all questions within this panell. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Heredar\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Se aplica a todas las preguntes dentro de este panell. Cuando se establece en \"Oculto\", también oculta las descripcions de las preguntas. Si desea anular esta configuració, defina regles de alineación de títols para preguntes individuales. La opción \"Heredar\" aplica la configuració a nivel de pàgina (si está establecida) o a nivel de enquesta (\"Superior\" de forma per defecte). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Establece un ancho coherente para los títols de las preguntas cuando están alineados a la izquierda de sus cuadros de preguntes. Acepta valors CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to all questions within the panell. The \"Heredar\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Establece la ubicación de un mensaje de error en relación con todas las preguntes del panell. La opción \"Heredar\" aplica la configuració a nivel de pàgina (si se establece) o a nivel de enquesta.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Heredar\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Mantiene el orden original de las preguntes o las aleatoriza. La opción \"Heredar\" aplica la configuració de nivel de pàgina (si está establecida) o de nivel de enquesta.",
      // "Repositions the panell to the end of a selected page."
      page: "Cambia la posición del panell al final de una pàgina seleccionada.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panell box."
      innerIndent: "Añade espacio o margen entre el contenido del panel y el borde izquierdo del cuadro del panell.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panell is the first element in your form."
      startWithNewLine: "Anule la selección para mostrar el panel en una línea con la pregunta o el panel anterior. La configuració no se aplica si el panell es el primer elemento del formulario.",
      // "Choose from: \"Expanded\" - the panell is displayed in full and can be collapsed; \"Collapsed\" - the panell displays only the title and description and can be expanded; \"Locked\" - the panell is displayed in full and cannot be collapsed."
      state: "Elija entre: \"Expandido\": el panell se muestra en su totalidad y se puede contraer; \"Contraído\": el panell muestra solo el títol y la descripció y se puede expandir; \"Bloqueado\": el panell se muestra en su totalidad y no se puede contraer.",
      // [Auto-translated] "Sets the width of the panell in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Establece la anchura del panell en proporción a otros elementos de topografía de la misma línea. Acepta valors CSS (px, %, in, pt, etc.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panell."
      showQuestionNumbers: "Asigna números a las preguntes anidadas dentro de este panell.",
      // [Auto-translated] "Specifies how many columns this panell spans within the grid layout."
      effectiveColSpan: "Especifica el número de columnes que abarca este panell dentro del diseño de cuadrícula.",
      // [Auto-translated] "This table lets you configure each grid column within the panell. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Esta tabla le permite configurar cada columna de cuadrícula dentro del panell. Establece automáticamente el porcentaje de ancho para cada columna en función del número máximo de elementos en una fila. Para personalizar el diseño de la cuadrícula, ajuste manualmente estos valors y defina el ancho del títol para todas las preguntes de cada columna."
    },
    paneldynamic: {
      // "A panell ID that is not visible to respondents."
      name: "Un ID de panell que no es visible para los encuestados.",
      // "Type a panell subtitle."
      description: "Escriba un subtítulo de panell.",
      // "Use the magic wand icon to set a conditional rule that determines panell visibility."
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad del panell.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panell."
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que desactive el modo de solo lectura para el panell.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de enquestes a menos que al menos una pregunta anidada tenga una respuesta.",
      // "Applies to all questions within this dynamic panell. If you want to override this setting, define title alignment rules for individual questions. The \"Heredar\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Se aplica a todas las preguntas de este panell. Si desea anular esta configuració, defina regles de alineación de títols para preguntes individuales. La opción \"Heredar\" aplica la configuració a nivel de pàgina (si está establecida) o a nivel de enquesta (\"Superior\" de forma per defecte).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Establece un ancho coherente para los títols de las preguntes cuando están alineados a la izquierda de sus cuadros de pregunta. Acepta valors CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Heredar\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Establece la ubicación de un mensaje de error en relación con una pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un text de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un text de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuració a nivel de pàgina (si está establecida) o a nivel de enquesta (\"Superior\" de forma per defecte).",
      // "Sets the location of an error message in relation to all questions within the panell. The \"Heredar\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Establece la ubicación de un mensaje de error en relación con todas las preguntes del panell. La opción \"Heredar\" aplica la configuració a nivel de pàgina (si se establece) o a nivel de enquesta.",
      // "Repositions the panell to the end of a selected page."
      page: "Cambia la posición del panell al final de una pàgina seleccionada.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panell box."
      indent: "Añade espacio o margen entre el contenido del panel y el borde izquierdo del cuadro del panell.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panell is the first element in your form."
      startWithNewLine: "Anule la selección para mostrar el panel en una línea con la pregunta o el panel anterior. La configuració no se aplica si el panell es el primer elemento del formulario.",
      // "Choose from: \"Expanded\" - the panell is displayed in full and can be collapsed; \"Collapsed\" - the panell displays only the title and description and can be expanded; \"Locked\" - the panell is displayed in full and cannot be collapsed."
      state: "Elija entre: \"Expandido\": el panell se muestra en su totalidad y se puede contraer; \"Contraído\": el panell muestra solo el títol y la descripció y se puede expandir; \"Bloqueado\": el panell se muestra en su totalidad y no se puede contraer.",
      // "Sets the width of the panell in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Define la anchura del panell en proporción a otros elementos topográficos de la misma línea. Acepta valors CSS (px, %, in, pt, etc.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Escriba una plantilla para los títols de los paneles dinámicos. Utilice {panelIndex} para la posición general del panell y {visiblePanelIndex} para su orden entre los panells visibles. Inserte estos marcadores de posición en el patrón para agregar numeración automàtica.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Escriba una plantilla para los títols de las pestañas. Utilice {panelIndex} para la posición general de un panell y {visiblePanelIndex} para su orden entre los panells visibles. Inserte estos marcadores de posición en el patrón para agregar numeración automàtica.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Text de reserva para los títols de tabulación que se aplica cuando el patrón de títol de tabulación no genera un valor significativo.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panell}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Esta configuració le permite controlar la visibilidad de panells individuales dentro del panel dinámico. Utilice el marcador de posición '{panel}' para hacer referencia al panell actual en la expressió.",
      // "This setting is automatically inherited by all questions within this dynamic panell. If you want to override this setting, define title alignment rules for individual questions. The \"Heredar\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Esta configuración es heretada automáticamente por todas las preguntas dentro de este panell. Si desea anular esta configuració, defina regles de alineación de títols para preguntes individuales. La opción \"Heredar\" aplica la configuració a nivel de pàgina (si está establecida) o a nivel de enquesta (\"Superior\" de forma per defecte).",
      // "The \"Heredar\" option applies the page-level (if set) or survey-level setting (\"Under the panell title\" by default)."
      descriptionLocation: "La opción \"Heredar\" aplica la configuració a nivel de pàgina (si está establecida) o a nivel de enquesta (\"Debajo del títol del panell\" de forma per defecte).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Define la posición de un panell recién añadido. De forma per defecte, los nous panells se agregan al final. Seleccione \"Següent\" para insertar un nou panell después del actual.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplica las respuestas de la última entrada y las asigna a la següent entrada agregada.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Haga referencia a un nom de pregunta para requerir que un usuario proporcione una respuesta única para esta pregunta en cada panell.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Activa un mensaje de confirmación antes de eliminar una entrada.",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panell."
      showQuestionNumbers: "Asigna números a las preguntes anidadas dentro del panell dinámico."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Desencadena un mensaje de confirmación antes de quitar una fila.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Expande automáticamente la sección de detalles cuando se agrega una nova fila a la matriz."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplica las respuestas de la última fila y las asigna a la següent fila dinámica agregada.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Esta configuració le permite asignar un valor de respuesta predeterminado basado en una expresión. La expresión puede incluir cálculos básicos: '{q1_id} + {q2_id}', expressions booleanas, como '{edad} > 60', y funciones: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. El valor determinado por esta expressió sirve como el valor per defecte inicial que puede ser anulado por la entrada manual de un encuestado.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Usa el ícono de la varita mágica para establecer una regla condicional que determine cuándo la entrada de un encuestado se restablece al valor basado en la \"Expressió de valor per defecte\" o \"Expressió de valor establecido\" o al valor de \"Respuesta per defecte\" (si cualquiera de los dos está establecido).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine cuándo ejecutar la \"Expressió de valor establecido\" y asigne dinámicamente el valor resultante como respuesta.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Especifique una expressió que defina el valor que se establecerá cuando se cumplan las condicions de la regla \"Establecer valor si\". La expresión puede incluir cálculos básicos: '{q1_id} + {q2_id}', expressions booleanas, como '{edad} > 60', y funciones: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. El valor determinado por esta expressió puede ser anulado por la entrada manual de un encuestado.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panell and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator le permite ajustar manualmente los anchos en línea de los elementos del formulario para controlar el diseño. Si esto no produce el resultado deseado, puede habilitar el diseño de cuadrícula, que estructura elementos mediante un sistema basado en columnas. Para configurar las columnes de diseño, seleccione una pàgina o un panell y utilice la tabla \"Configuració de preguntes\" → \"Columnas de cuadrícula\". Para ajustar el número de columnes que abarca una pregunta, selecciónela y establezca el valor deseado en el campo \"Diseño\" → \"Intervalo de columnes\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Un identificador de pregunta que no es visible para los encuestados.",
      // "Type a question subtitle."
      description: "Escribe un subtítulo para la pregunta.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la pregunta.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura para la pregunta.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida que la enquesta avance o se envíe a menos que la pregunta reciba una respuesta.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panell. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Anule la selección para mostrar la pregunta en una línea con la pregunta o el panell anterior. La configuració no se aplica si la pregunta es el primer elemento del formulario.",
      // "Repositions the question to the end of a selected page."
      page: "Cambia la posición de la pregunta al final de una pàgina seleccionada.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Elija entre: \"Expandido\": el cuadro de pregunta se muestra en su totalidad y se puede contraer; \"Contraído\": el cuadro de pregunta muestra solo el títol y la descripció y se puede expandir; \"Bloqueado\": el cuadro de pregunta se muestra en su totalidad y no se puede contraer.",
      // "Overrides title alignment rules defined on a panell, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Heredar\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Anula las regles de alineación de títols definidas en un panell, pàgina o enquesta. La opción \"Heredar\" aplica cualquier configuración de nivel superior (si está establecida) o configuració de nivel de enquesta (\"Superior\" de forma per defecte).",
      // "The \"Heredar\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "La opción \"Heredar\" aplica la configuració a nivel de enquesta (\"Bajo el títol de la pregunta\" de forma per defecte).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Heredar\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un text de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un text de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuració a nivel de enquesta (\"Superior\" de forma per defecte).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Agrega espacio o margen entre el contenido de la pregunta y el borde izquierdo del cuadro de pregunta.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Establece el ancho de la pregunta en proporción a otros elementos de la enquesta en la misma línea. Acepta valors CSS (px, %, in, pt, etc.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Heredar\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Elija entre: \"Al perder el foco\": el valor se actualiza cuando el campo de entrada pierde el foco; \"Mientras escribes\": el valor se actualiza en tiempo real, a medida que los usuarios escriben. La opción \"Heredar\" aplica la configuració a nivel de enquesta (\"Al perder el foco\" de forma per defecte).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Puede utilizar cualquier servicio web como fuente de datos para preguntes de opción múltiple. Para rellenar los valors de opción, introduzca la dirección URL del servicio que proporciona los datos.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Operación de comparación que se utiliza para filtrar la lista desplegable.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Los textos largos en las opcions de elección generarán automáticamente saltos de línea para que se ajusten al menú desplegable. Anule la selección si desea que los textos se recorten.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Especifica el número de columnes que abarca esta pregunta dentro del diseño de cuadrícula."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Utilice el icono de la varita mágica para definir cuándo se considera válido el valor de la pregunta.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Los errors bloquean el progreso hasta que se resuelven. Las advertencias resaltan los problemas, pero permiten continuar. Las notas informativas ofrecen contexto adicional u orientación neutral. Cuando utilice advertencias o notas informativas, se recomienda habilitar la validació inmediata: \"Enquesta\" → \"Validació\" → \"Ejecutar validació\" → \"Después de que haya cambiado una respuesta\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Define la anchura del área de firma mostrada y de la imatge resultante.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Define la altura del área de firma mostrada y de la imatge resultante.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Seleccione esta opción si desea que el área de firma ocupe todo el espacio disponible dentro del cuadro de pregunta manteniendo la relación de aspecto per defecte de 3:2. Cuando se establecen valors de anchura y altura personalitzats, la configuració mantendrá la relación de aspecto de estas dimensiones."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Especifica la altura de visualización de las imágenes cargadas en la vista previa y la altura real de las imatges tomadas con la cámara. En el modo de carga de un solo fitxer, la altura de la pantalla está limitada por el área de vista prèvia; En el modo de carga de fitxers múltiples, está limitado por el área de miniaturas.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Especifica la anchura de visualización de las imágenes cargadas en la vista previa y la anchura real de las imatges tomadas con la cámara. En el modo de carga de un solo fitxer, el ancho de la pantalla está limitado por el área de vista prèvia; En el modo de carga de fitxers múltiples, está limitado por el área de miniaturas.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Muestra vistas previas en miniatura de los fitxers cargados cuando es posible. Anule la selección si desea mostrar los iconos de fitxer en su lugar."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "La opción \"Auto\" determina automáticamente el modo adecuado para la visualización (Imatge, Video o YouTube) en función de la URL de origen proporcionada."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Anula los valors de altura mínima y máxima.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Anula los valors de anchura mínima y máxima.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Valor\" sirve como identificador de elemento utilizado en regles condicionales; \"Text\" se muestra a los encuestados.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Elija entre \"Imatge\" y \"Video\" para configurar el modo de contenido del selector de medios. Si se selecciona \"Imatge\", asegúrese de que todas las opcions proporcionadas sean fitxers de imatge en los siguientes formatos: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Del mismo modo, si se selecciona \"Vídeo\", asegúrese de que todas las opciones sean enlaces directos a fitxers de vídeo en los siguientes formatos: MP4, MOV, WMV, FLV, AVI, MKV. Tenga en cuenta que los enlaces de YouTube no son compatibles con las opcions de video."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Esta configuració solo cambia el tamaño del campo de entrada y no afecta el ancho del cuadro de preguntes. Para limitar la longitud de entrada aceptada, vaya a \"Validació\" → \"Límite máximo de caracteres\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Establece el número de líneas mostradas en el campo de entrada. Si la entrada ocupa más líneas, aparecerá la barra de desplazamiento."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Seleccione si desea evitar que los encuestados completen su enquesta.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Establece la ubicación de la barra de progreso. El valor \"Auto\" muestra la barra de progreso por encima o por debajo del encabezado de la enquesta."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Un identificador de columna que no es visible para los encuestados.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Cuando se habilita para una columna, se requiere que un encuestado proporcione una respuesta única para cada pregunta dentro de esta columna.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Establece el número de líneas mostradas en el campo de entrada. Si la entrada ocupa más líneas, aparecerá la barra de desplazamiento.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la columna.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura para la columna.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de enquestes a menos que al menos una pregunta anidada tenga una respuesta.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Cuando se selecciona, crea una columna individual para cada opción de opción.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Organiza las opciones de elección en un diseño de varias columnes. Cuando se establece en 0, las opcions se muestran en una sola línea. Cuando se establece en -1, el valor real se hereda de la propiedad \"Recuento de columnas anidadas\" de la matriz primaria."
    },
    slider: {
      // "The lowest number that users can select."
      min: "El número más bajo que los usuarios pueden seleccionar.",
      // "The highest number that users can select."
      max: "El número más alto que los usuarios pueden seleccionar.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "El intervalo entre los valors de escala seleccionables. Por ejemplo, un paso de 5 permitirá a los usuarios seleccionar 0, 5, 10, etc.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "La distancia mínima entre los pulgares del control deslizante que un usuario puede establecer.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "La distancia máxima entre los pulgares del control deslizante que un usuario puede establecer.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Especifica el número de etiquetas de escala que se van a generar. Un valor de -1 significa que el número se calcula automáticamente en función del valor mínimo y el valor máximo.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Utilice '{0}' como marcador de posición para el valor real.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Le permite definir etiquetas personalitzades en valors específicos y, opcionalmente, asignarles el text correspondiente (por ejemplo, 0 = \"Pobre\", 100 = \"Excelente\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Utilice '{0}' como marcador de posición para el valor real.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Permite a los usuarios mover un pulgar más allá del otro.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Muestra un botón que borra el valor del control deslizante seleccionado y lo establece en indefinido.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Define el valor mínimo del control deslizante de forma dinámica mediante una expressió. Admite cálculos básicos (por ejemplo, '{q1_id} + {q2_id}'), lògica booleana (por ejemplo, '{edad} > 60') y funciones como 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' y más.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Define el valor máximo del control deslizante de forma dinámica mediante una expressió. Admite cálculos básicos (por ejemplo, '{q1_id} + {q2_id}'), lògica booleana (por ejemplo, '{edad} > 60') y funciones como 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' y más."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Hace que esta elección sea exclusiva. Cuando un usuario lo selecciona, anulará automáticamente la selección de todas las demás opcions de la pregunta.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Hace que las casillas de verificación de esta columna sean exclusivas. Cuando un usuario lo selecciona, anulará automáticamente la selección de todas las demás casillas de verificación en la misma fila."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Seleccione si las letras mayúsculas y minúsculas de la expressió regular deben tratarse como equivalentes.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Elija entre: \"Estático\": establece un ancho fijo; \"Responsivo\": hace que la enquesta ocupe todo el ancho de la pantalla; \"Auto\": aplica cualquiera de los dos dependiendo de los tipos de preguntes utilizados.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Asigne un valor de cookie único para su encuesta. La cookie se establecerá en el navegador del encuestado al completar la enquesta para evitar envíos repetitivos de enquestes.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Pegue un enlace de imatge (sin límites de tamaño) o haga clic en el icono de la carpeta para buscar un fitxer desde su computadora (hasta 64 KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Establece el ancho del logotipo en unidades CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Establece la altura del logotipo en unidades CSS (px, %, in, pt, etc.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Elija entre: \"Ninguno\": la imatge mantiene su tamaño original; \"Contener\": se cambia el tamaño de la imatge para que se ajuste manteniendo su relación de aspecto; \"Portada\": la imatge llena toda la caja manteniendo su relación de aspecto; \"Relleno\": la imatge se estira para llenar el cuadro sin mantener su relación de aspecto.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Seleccione si desea que la enquesta avance automáticamente a la página següent una vez que un encuestado haya respondido todas las preguntes en la página actual. Esta función no se aplicará si la última pregunta de la pàgina es abierta o permite varias respuestas.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Seleccione si desea que la enquesta se complete automáticamente después de que un encuestado responda todas las preguntes.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Establece la visibilidad de los botones de navegación de una pàgina.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Establece la ubicación de los botones de navegación en una pàgina.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Habilite la pàgina de vista prèvia con todas las preguntes o solo las respondidas.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panell, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Se aplica a todas las preguntes de la enquesta. Esta configuración se puede anular mediante regles de alineación de títols en niveles inferiores: panell, pàgina o pregunta. Una configuració de nivel inferior anulará las de un nivel superior.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Un símbolo o una secuencia de símbolos que indican que se requiere una respuesta.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Introduzca un número o una letra con la que desee empezar a numerar.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un text de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un text de error en la parte inferior del cuadro de pregunta.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Seleccione si desea que el primer campo de entrada de cada pàgina esté listo para la entrada de text.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Mantiene el orden original de las preguntes o las aleatoriza. El efecto de esta configuració solo es visible en la pestaña Vista prèvia.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Solo para preguntes de entrada de text.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Solo para comentarios de preguntes.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Establece el número de líneas mostradas en las áreas de text para los comentarios de las preguntes. Si la entrada ocupa más líneas, aparece la barra de desplazamiento.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Seleccione si desea que los comentarios de las preguntas y las preguntes de texto largo aumenten automáticamente en altura en función de la longitud del text introducido.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Solo para comentarios de preguntas y preguntes de text largo.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Las variables personalitzades sirven como variables intermedias o auxiliares que se utilizan en los cálculos de formularios. Toman las entradas de los encuestados como valors de origen. Cada variable personalitzada tiene un nom único y una expressió en la que se basa.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Seleccione si desea que el valor calculado de la expressió se guarde junto con los resultados de la enquesta.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Un desencadenador es un evento o condició que se basa en una expresión. Una vez que la expressió se evalúa como \"verdadera\", un desencadenador desencadena una acción. Opcionalmente, una acció de este tipo puede tener una pregunta de destino a la que afecta.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Elija si desea o no borrar los valors de las preguntes ocultas por la lògica condicional y cuándo hacerlo.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Elija entre: \"Al perder el foco\": el valor se actualiza cuando el campo de entrada pierde el foco; \"Mientras escribes\": el valor se actualiza en tiempo real, a medida que los usuarios escriben.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "El valor de la izquierda sirve como identificador de columna que se usa en las regles condicionales, el valor de la derecha se muestra a los encuestados.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "El valor de la izquierda sirve como un ID de fila que se usa en las regles condicionales, el valor de la derecha se muestra a los encuestados.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Acepta valors CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Acepta valors CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Visible solo si al menos una columna muestra los valors totales establecidos con \"Método de agregación\" o \"Expressió de valor total\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Heredar\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Establece la ubicación de un mensaje de error en relación con una celda con entrada no válida. La opción \"Heredar\" aplica la configuració de la propiedad \"Alineación de mensajes de error\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Heredar\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Establece la ubicación de los mensajes de error para las preguntes anidadas en secciones de detalle. La opción \"Heredar\" aplica la configuració de la propiedad \"Alineación de mensajes de error\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Cuando la propiedad \"Evitar respuestas duplicadas\" está habilitada, un encuestado que intente enviar una entrada duplicada recibirá el següent mensaje de error.",
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "Cuando la propiedad \"Evitar respuestas duplicadas\" está habilitada para una columna de matriz, un encuestado que intente enviar una entrada duplicada recibirá el següent mensaje de error."
    },
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Permite calcular los valors totales en función de una expresión. La expressió puede incluir cálculos básicos ('{q1_id} + {q2_id}'), expressions booleanas ('{edad} > 60') y funciones ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Si la columna especificada contiene valors idénticos, la enquesta arroja el error \"Valor de clave no única\".",
    // "Type a subtitle."
    description: "Escribe un subtítulo.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Elige un idioma para comenzar a crear tu enquesta. Para agregar una traducció, cambie a un nou idioma y traduzca el text original aquí o en la pestaña Traducciones.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Establece la ubicación de una sección de detalles en relación con una fila. Elija entre: \"Ninguno\": no se agrega ninguna expansión; \"Debajo de la fila\": se coloca una expansión de fila debajo de cada fila de la matriz; \"Debajo de la fila, mostrar solo una expansión de fila\": una expansión se muestra solo debajo de una sola fila, las expansiones de fila restantes se contraen.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Elija entre: \"Ninguno\": la imatge mantiene su tamaño original; \"Contener\": se cambia el tamaño de la imatge para que se ajuste manteniendo su relación de aspecto; \"Portada\": la imatge llena toda la caja manteniendo su relación de aspecto; \"Relleno\": la imatge se estira para llenar el cuadro sin mantener su relación de aspecto.",
    // "The \"Heredar\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Aumenta gradualmente la altura del campo de entrada a medida que se introducen los datos. Anula el ajuste \"Altura del campo de entrada (en líneas)\".",
    // [Auto-translated] "The \"Heredar\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "La opción \"Heredar\" aplica una configuració a nivel de enquesta (\"Habilitat\" de forma per defecte).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Un intervalo de tiempo en segundos después del cual la enquesta avanza automáticamente a la pàgina \"Gracias\". Cuando se establece en 0, cuenta el tiempo dedicado a la enquesta.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Intervalo de tiempo en segundos después del cual la enquesta avanza automáticamente a la pàgina següent. Oculta el botón de navegación \"Anterior\". Cuando se establece en 0, cuenta el tiempo dedicado a la pàgina actual.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Habilite esta opción para desencadenar la validació cuando un usuario se centre en un campo de entrada vacío y, a continuación, lo abandone sin realizar ningún cambio.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Un ID de pàgina que no es visible para los encuestados.",
      // "Type a page subtitle."
      description: "Escribe un subtítulo de pàgina.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Un título que se muestra en un botón de navegación en la barra de progreso o en la tabla de contenido (TDC). Si dejas este campo vacío, el botón de navegación utilizará el títol o el nom de la pàgina. Para habilitar la barra de progreso o la tabla de contenido, vaya a \"Enquesta\" → \"Navegación\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Un intervalo de tiempo en segundos después del cual la enquesta avanza automáticamente a la pàgina següent.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la pàgina.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura de la pàgina.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de enquestes a menos que al menos una pregunta anidada tenga una respuesta.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Heredar\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Se aplica a todas las preguntas de esta pàgina. Si desea anular esta configuració, defina regles de alineación de títols para preguntes o panells individuales. La opción \"Heredar\" aplica la configuració a nivel de enquesta (\"Superior\" de forma per defecte).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Establece un ancho coherente para los títols de las preguntas cuando están alineados a la izquierda de sus cuadros de preguntes. Acepta valors CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Heredar\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un text de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un text de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuració a nivel de enquesta (\"Superior\" de forma per defecte).",
      // "Keeps the original order of questions or randomizes them. The \"Heredar\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Mantiene el orden original de las preguntes o las aleatoriza. La opción \"Heredar\" aplica la configuració a nivel de enquesta (\"Original\" de forma per defecte). El efecto de esta configuració solo es visible en la pestaña Vista prèvia.",
      // "Sets the visibility of navigation buttons on the page. The \"Heredar\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Establece la visibilidad de los botones de navegación en la pàgina. La opción \"Heredar\" aplica la configuració de nivel de enquesta, que por defecte es \"Visible\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Esta tabla le permite configurar cada columna de cuadrícula en la pàgina. Establece automáticamente el porcentaje de ancho para cada columna en función del número máximo de elementos en una fila. Para personalizar el diseño de la cuadrícula, ajuste manualmente estos valors y defina el ancho del títol para todas las preguntes de cada columna."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Establece la ubicación de un temporizador en una pàgina.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Elija entre: \"Bloqueado\": los usuarios no pueden expandir ni contraer panells; \"Contraer todo\": todos los panells comienzan en un estado contraído; \"Expandir todo\": todos los panells comienzan en un estado expandido; \"Primero expandido\": solo el primer panell se expande inicialmente.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Introduzca un nom de propiedad compartida dentro de la matriz de objetos que contiene las direcciones URL de los fitxers de imatge o vídeo que desea mostrar en la lista de opcions.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "El valor de la izquierda sirve como un identificador de elemento utilizado en las regles condicionales, el valor de la derecha se muestra a los encuestados.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Escriba un títol fácil de usar para mostrar.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Garantiza que los usuarios no completen la enquesta hasta que se carguen los fitxers.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Acepta valors CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Acepta valors CSS (px, %, in, pt, etc.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Acepta valors CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Un identificador de combinación es una clave personalitzada que puede asignar a varias preguntes para vincularlas y sincronizar sus valores. Estos valors se combinarán en una sola matriz u objeto y se almacenarán en los resultados de la enquesta utilizando la clave como nom de propiedad.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Un valor que se muestra en las preguntes HTML y en los títols dinámicos y las descripcions de los elementos de la enquesta cuando el valor de la pregunta está vacío.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Cuando se selecciona, esta configuració muestra un valor de visualización en lugar de un valor de ID en las preguntes HTML y en los títols dinámicos y las descripcions de los elementos de la enquesta.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Heredar\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Elija si desea o no borrar los valors de las preguntes ocultos por la lògica condicional y cuándo hacerlo. La opción \"Heredar\" aplica la configuració de nivel de enquesta (\"Al finalizar la encuesta\" de forma per defecte).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Elija entre: \"Todas\": copia todas las opcions de elección de la pregunta seleccionada; \"Seleccionado\": copia dinámicamente solo las opcions de elección seleccionadas; \"No seleccionado\": copia dinámicamente solo las opciones de elección no seleccionadas. Las opcions \"Ninguno\" y \"Otro\" se copian de forma per defecte si están habilitadas en la pregunta de origen.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panell question should provide the IDs."
    choiceValuesFromQuestion: "En los tipos de preguntes de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Esta configuració especifica qué columna de matriz o pregunta de panell debe proporcionar los identificadores.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panell question should provide the display texts."
    choiceTextsFromQuestion: "En los tipos de preguntes de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Esta configuració especifica qué columna de matriz o pregunta de panell debe proporcionar los textos de visualización.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Seleccione esta opción para permitir que los encuestados agreguen sus propias opciones si la opción deseada no está disponible en el menú desplegable. Las opcions personalitzades solo se almacenarán temporalmente durante la sesión actual del navegador.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Cuando se selecciona, los usuarios pueden incluir entradas adicionales en un cuadro de comentarios independiente.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Muestra cada opción de opción especial (\"Ninguno\", \"Otro\", \"Seleccionar todo\") en una nova línea, incluso cuando se utiliza un diseño de varias columnes.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Especifique la ubicación dentro del dataset de servicio donde se encuentra la matriz de objetos de destino. Déjelo en vacío si la dirección URL ya apunta a la matriz.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Escriba un nom de propiedad uniforme dentro de la matriz de objetos que contiene los valors que desea mostrar en la lista de opcions.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Seleccione esta opción para permitir que el servicio devuelva una respuesta o matriz vacía.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de todas las opcions de elección.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "El valor de la izquierda sirve como un identificador de elemento utilizado en las regles condicionales, el valor de la derecha se muestra a los encuestados.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" selecciona entre los modos \"Botones\" y \"Desplegable\" en función del ancho disponible. Cuando el ancho es insuficiente para mostrar los botones, la pregunta muestra un menú desplegable."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Permite conectar preguntas que producen resultados en diferentes formatos. Cuando estas preguntes se vinculan entre sí mediante un identificador de combinación, esta propiedad compartida almacena los valors de pregunta seleccionados.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Seleccione si desea actualizar el contenido del menú desplegable para que coincida con la consulta de búsqueda que un usuario está escribiendo en el campo de entrada.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Un valor que se debe desar en los resultados de la enquesta cuando los encuestados dan una respuesta positiva.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Un valor que se debe desar en los resultados de la enquesta cuando los encuestados dan una respuesta negativa.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "No se recomienda deshabilitar esta opción, ya que invalida la imatge de vista prèvia y dificulta que un usuario comprenda si los fitxers se han cargado.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Activa un mensaje que le pide que confirme la eliminación del fitxer.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Habilite esta opción para clasificar solo las opciones seleccionadas. Los usuarios arrastrarán los elementos seleccionados de la lista de opcions para ordenarlos dentro del área de clasificación.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Ingrese una lista de opcions que se sugerirán al encuestado durante la entrada.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "La configuració solo cambia el tamaño de los campos de entrada y no afecta al ancho del cuadro de pregunta.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Establece un ancho consistente para todas las etiquetas de artículos. Acepta valors CSS (px, %, in, pt, etc.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Seleccione cómo alinear el valor de entrada dentro del campo. La configuració per defecte \"Auto\" alinea el valor de entrada a la derecha si se aplica el enmascaramiento numérico o de moneda y a la izquierda si no se aplica.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Sirve como sustituto cuando la imatge no se puede mostrar en el dispositivo de un usuario y por motivos de accesibilidad.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Define el color del emoji seleccionado cuando el tipo de icono de clasificación se establece en \"Emoticonos\". Elija entre: \"Per defecte\": el emoji seleccionado aparece en el color per defecte de la enquesta; \"Escala\": el emoji seleccionado hereda el color de la escala de calificación.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Un identificador de expressió que no es visible para los encuestados.",
      // "Type an expression subtitle."
      description: "Escriba un subtítulo de expressió.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Una expressió puede incluir cálculos básicos ('{q1_id} + {q2_id}'), condicions ('{edad} > 60') y funciones ('iif()', 'hoy()', 'edad()', 'min()', 'max()', 'avg()', etc.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Seleccione esta opción para almacenar el valor de la opción \"Otro\" como una propiedad independiente en los resultados de la enquesta.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Utilice {0} como marcador de posición para el valor real.",
    // [Auto-translated] "Select \"Custom\" to add your own file extensions on top of the predefined categories."
    acceptedCategories: "Selecciona \"Personalitzat\" para afegir tus propias extensiones de fitxer encima de las categorías predefinidas.",
    // [Auto-translated] "Enter file extensions separated by commas (e.g., .csv, .xml)."
    acceptedTypes: "Introduce extensiones de fitxer separadas por comas (por ejemplo, .csv, .xml).",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Organiza las opciones de elección en un diseño de varias columnas. Cuando se establece en 0, las opcions se muestran en una sola línea. Se aplica solo a las columnes con \"Tipo de entrada de celda\" establecido en Grupo de botones de opción o Casillas de verificación.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Seleccione el tipo de datos que puede recuperar el explorador del usuario. Estos datos se obtienen de valores anteriores ingresados por el usuario o de valors preconfigurados si el usuario ha guardado alguno para completarlos automáticamente.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Se aplica cuando \"Tipo de fuente\" es \"Archivos locales\" o cuando la cámara no está disponible",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Se aplica cuando \"Tipo de fuente\" es \"Cámara\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Se aplica cuando \"Tipo de fuente\" es \"Archivos locales o cámara\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Organiza las opciones de elección en un diseño de varias columnes. Cuando se establece en 0, las opcions se muestran en una sola línea.",
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "Organiza los cuadros de text en un diseño de varias columnes."
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Seleccione si desea almacenar el valor de la pregunta con una máscara aplicada en los resultados de la enquesta."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "El patrón puede contener literales de cadena y los siguientes marcadores de posición: '9': para un dígito; 'a' - para una letra mayúscula o minúscula; '#' - para un dígito o una letra mayúscula o minúscula. Use la barra invertida '\\' para escapar de un carácter."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "El patrón puede contener caracteres separadores y los siguientes marcadores de posición:<br>'m' - Número de mes.<br>'mm': número de mes, con cero a la izquierda para valores de un solo dígito. <br>'d' - Día del mes. <br>'dd': día del mes, con cero a la izquierda para valores de un solo dígito. <br>'yy': los dos últimos dígitos del año. <br>'yyyy' - Año de cuatro dígitos. <br>'H' - Horas en formato de 24 horas. <br>'HH': horas en formato de 24 horas, con cero a la izquierda para valores de un solo dígito. <br>'h' - Horas en formato de 12 horas. <br>'hh': horas en formato de 12 horas, con cero a la izquierda para valors de un solo dígito. <br>'MM' - Actas. <br>'ss' - Segundos. <br>'TT': período de reloj de 12 horas en mayúsculas (AM/PM). <br>'tt' - Período de reloj de 12 horas en minúsculas (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Símbolo utilizado para separar la parte fraccionaria de la parte entera de un número mostrado.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Símbolo que se utiliza para separar los dígitos de un número grande en grupos de tres.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Limita el número de dígitos que se conservan después del punto decimal de un número mostrado."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Uno o varios símbolos que se mostrarán antes del valor.",
      // "One or several symbols to be displayed after the value."
      suffix: "Uno o varios símbolos que se mostrarán después del valor."
    },
    theme: {
      // "This setting applies only to questions outside of a panell."
      isPanelless: "Esta configuració solo se aplica a las preguntes fuera de un panell.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Establece un color complementario que resalta los elementos clave de la enquesta.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Ajusta la transparencia de los panells y cuadros de preguntes en relación con el fondo de la enquesta.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Ajusta la transparencia de los elementos de entrada en relación con el fondo de la enquesta.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Define el radio de vértice de todos los elementos rectangulares. Active el modo avanzado si desea establecer valors de radio de vértice individuales para elementos de entrada o panells y cuadros de preguntes.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Establece el color de fondo principal de la enquesta."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "La opción \"Igual que el contenedor\" ajusta automáticamente el ancho del área de contenido del encabezado para que quepa en el elemento HTML en el que se coloca la enquesta.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "El ancho del área de encabezado que contiene el títol y la descripció de la enquesta, medido en píxeles.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Cuando se habilita, la parte superior de la enquesta se superpone a la parte inferior del encabezado.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Cuando se establece en 0, la altura se calcula automáticamente para acomodar el contenido del encabezado."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "La opción \"Igual que el contenedor\" ajusta automáticamente el ancho del área de la barra de progreso para que quepa en el elemento HTML en el que se coloca la enquesta.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Se utiliza cuando el 'Diseño de enquesta' se establece en 'Campo de entrada único por página'. En este diseño, la matriz se divide para que cada campo de entrada aparezca en una pàgina separada. Use el marcador de posición {rowIndex} para insertar la numeración automàtica, {rowTitle} o {rowName} para hacer referencia al títol o identificador de la fila y {row.columnid} para incluir el valor de una columna de matriz específica."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "títol",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Dejarlo vacío, si es lo mismo que 'Name'"
    },
    // "Allow multiple selection"
    multiSelect: "Permitir múltiple selección",
    // "Show image and video captions"
    showLabel: "Mostrar leyenda de imatge",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Cambiar el orden de Sí y No",
    // "Value"
    value: "Valor",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Alineación de tabulaciones",
    // [Auto-translated] "File source type"
    sourceType: "Tipo de origen de fitxer",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Ajuste al contenedor",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Establecer expressió de valor",
    // "Description"
    description: "Descripció", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Ajuste del logotipo",
    // [Auto-translated] "Pages"
    pages: "Páginas", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Preguntas", // Auto-generated string
    // "Triggers"
    triggers: "disparadors",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Variables personalitzades",
    // [Auto-translated] "Survey id"
    surveyId: "ID de la enquesta", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "ID de publicación de la enquesta", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "La enquesta muestra el ahorro de datos", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "Alineación de la descripció de la pregunta",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Tipo de barra de progreso", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Mostrar tabla de contenido (TDC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Alineación de la tabla de contenido",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Patrón de títol de pregunta", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Modo de ancho de topografía",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Mostrar información de la marca", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Usar valors de visualización en textos dinámicos",
    // "Visible if"
    visibleIf: "visible si", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Expressió de valor per defecte",
    // "Required if"
    requiredIf: "Requerit si", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Restablecer valor si",
    // [Auto-translated] "Set value if"
    setValueIf: "Establezca el valor si",
    // "Validation rules"
    validators: "Validadors",
    // [Auto-translated] "Bindings"
    bindings: "Enlaces", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Renderizar como", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "Adjuntar elementos originales", // Auto-generated string
    // "Choices"
    choices: "opcions",
    // "Choices by url"
    choicesByUrl: "opcions por URL", // Auto-generated string
    // "Currency"
    currency: "divisa", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Sugerencia de celda", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Total máximo de fracción de dígitos", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Total de dígitos de fracción mínima", // Auto-generated string
    // "Columns"
    columns: "columnes", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Elementos de detalle", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Permitir accions adaptables", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Valor por defecte Fila", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Expandir automáticamente los detalles de las noves files",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Opcions de carga diferida habilitadas", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Opcions de tamaño de pàgina de carga diferida", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Componente de campo de entrada", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Componente de elemento", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Máximo", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Expressió de valor mínimo", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Expressió de valor máximo", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Paso", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Elementos para sugerir automáticamente",
    // "Input field width (in characters)"
    inputSize: "artículos",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Ancho de la etiqueta del artículo",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Alineación de valors de entrada",
    // [Auto-translated] "Elements"
    elements: "Elementos", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Contenido", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Títol de navegación", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Descripció de navegación", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Toque largo", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Expandir el campo de entrada dinámicamente",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Habilitar el identificador de cambio de tamaño",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Acceptar devolución de transporte", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Modo de visualización",
    // [Auto-translated] "Rate type"
    rateType: "Tipo de tarifa", // Auto-generated string
    // "Label"
    label: "etiqueta", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "Modo de contenido",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "Ajuste de imatge y miniatura",
    // [Auto-translated] "Alt text"
    altText: "Text alternativo",
    // [Auto-translated] "Height"
    height: "Altura", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Altura en smartphones",
    // [Auto-translated] "Pen color"
    penColor: "Color de la pluma", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "Color de fondo",
    // [Auto-translated] "Template elements"
    templateElements: "Elementos de plantilla", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Operador", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Es variable", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "Ejecutar expressió", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Mostrar pie de foto", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Nom del icono", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Tamaño del icono", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Precisión", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Área del controlador de arrastre de matriz", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Imatge de fondo",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Ajuste de imatge de fondo", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Datos adjuntos de imatge de fondo", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Opacidad de fondo", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Permitir clasificación selectiva",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Alineación del área de clasificación",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Text para mostrar si todas las opcions están seleccionadas",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Text de marcador de posición para el área de clasificación",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Permitir el acceso a la cámara", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Modo de color del icono de clasificación",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Esquema de color de los emoticonos",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Copiar valor de visualización", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Tramo de columna",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Ancho del área de la barra de progreso",
    // [Auto-translated] "Theme name"
    themeName: "Nom del tema"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Modo avanzado",
    // "Page"
    pageTitle: "Fuente del títol de la pàgina",
    // "Question box"
    questionTitle: "Fuente del títol de la pregunta",
    // "Input element"
    editorPanel: "Elemento de entrada",
    // [Auto-translated] "Lines"
    lines: "Lineas",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Per defecte",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Cernerse",
    // [Auto-translated] "Selected"
    primaryLightColor: "Seleccionado",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Color de fondo",
    // "Corner radius"
    cornerRadius: "Radio de esquina",
    // [Auto-translated] "Default background"
    backcolor: "Fondo per defecte",
    // [Auto-translated] "Hover background"
    hovercolor: "Pasar el cursor de fondo",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Decoración de bordes",
    // [Auto-translated] "Font color"
    fontColor: "Color de la fuente",
    // [Auto-translated] "Background color"
    backgroundColor: "Color de fondo",
    // [Auto-translated] "Default color"
    primaryForecolor: "Color per defecte",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Color deshabilitat",
    // [Auto-translated] "Font"
    font: "Fuente",
    // [Auto-translated] "Darker"
    borderDefault: "Oscuro",
    // [Auto-translated] "Lighter"
    borderLight: "Encendedor",
    // [Auto-translated] "Font family"
    fontFamily: "Familia tipográfica",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Regular",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Pesado",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Semi-negrita",
    // [Auto-translated] "Bold"
    fontWeightBold: "Audaz",
    // [Auto-translated] "Color"
    color: "Color",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Color del marcador de posición",
    // [Auto-translated] "Size"
    size: "Tamaño",
    // [Auto-translated] "Opacity"
    opacity: "Opacidad",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Agregar efecto de sombra",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Desdibujar",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Propagación",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Soltar",
    // [Auto-translated] "Inner"
    boxShadowInner: "Interior",
    names: {
      // [Auto-translated] "Default"
      default: "Per defecte",
      // [Auto-translated] "Sharp"
      sharp: "Afilado",
      // [Auto-translated] "Borderless"
      borderless: "Sin bordes",
      // [Auto-translated] "Flat"
      flat: "Plano",
      // [Auto-translated] "Plain"
      plain: "Llanura",
      // [Auto-translated] "Double Border"
      doubleborder: "Doble Borde",
      // [Auto-translated] "Layered"
      layered: "Capas",
      // [Auto-translated] "Solid"
      solid: "Sólido",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Contraste"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Cerceta",
      // [Auto-translated] "Blue"
      blue: "Azul",
      // [Auto-translated] "Purple"
      purple: "Morado",
      // [Auto-translated] "Orchid"
      orchid: "Orquídea",
      // [Auto-translated] "Tulip"
      tulip: "Tulipán",
      // [Auto-translated] "Brown"
      brown: "Marrón",
      // [Auto-translated] "Green"
      green: "Verde",
      // [Auto-translated] "Gray"
      gray: "Gris"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Fondo de superficie",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primario",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Secundario",
    // [Auto-translated] "Surface"
    surfaceScale: "Superficie",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elementos de la interfaz de usuario",
    // [Auto-translated] "Font"
    fontScale: "Fuente",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Creador de enquestes 2020",
      // [Auto-translated] "Light"
      "default-light": "Luz",
      // [Auto-translated] "Dark"
      "default-dark": "Oscuro",
      // [Auto-translated] "Contrast"
      "default-contrast": "Contraste"
    }
  }
};

setupLocale({ localeCode: "ca", strings: catalanTranslation });