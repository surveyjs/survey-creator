import { setupLocale } from "survey-creator-core";

export var spanishTranslation = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Editar",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Mira y aprende a crear encuestas",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "¡Arrastra un tipo de pregunta para empezar a diseñar tu encuesta!",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Cree una regla para personalizar el flujo de la encuesta",
    // "Copy"
    copy: "Copiar",
    // "Duplicate"
    duplicate: "Duplicar",
    // "Add to toolbox"
    addToToolbox: "Añadir a la caja de herramientas",
    // "Delete Panel"
    deletePanel: "Eliminar panel",
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
    preview: "Encuesta de prueba",
    // "Themes"
    theme: "Temas",
    // "Translations"
    translation: "Traducción",
    // "Designer"
    designer: "Diseñador de la encuesta",
    // "JSON Editor"
    json: "Editor de JSON",
    // "Logic"
    logic: "Lógica de la encuesta"
  },
  // Question types
  qt: {
    // "Default"
    default: "Defecto",
    // "Checkboxes"
    checkbox: "Caja",
    // "Long Text"
    comment: "Comentario",
    // "Image Picker"
    imagepicker: "Selector de imágenes",
    // "Ranking"
    ranking: "Ranking",
    // "Image"
    image: "Imagen",
    // "Dropdown"
    dropdown: "Desplegable",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Menú desplegable de selección múltiple",
    // "File Upload"
    file: "Archivo",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matriz (selección única)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matriz (opción múltiple)",
    // "Dynamic Matrix"
    matrixdynamic: "Matriz (filas dinámicas)",
    // "Multiple Textboxes"
    multipletext: "Múltiples textos",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (paneles dinámicos)",
    // "Radio Button Group"
    radiogroup: "Grupo de radio",
    // "Rating Scale"
    rating: "Clasificación",
    // [Auto-translated] "Slider"
    slider: "Slider",
    // "Single-Line Input"
    text: "Entrada única",
    // "Yes/No (Boolean)"
    boolean: "Booleano",
    // "Expression (read-only)"
    expression: "Expresión (solo lectura)",
    // "Signature"
    signaturepad: "Almohadilla de firma",
    // [Auto-translated] "Button Group"
    buttongroup: "Grupo de botones"
  },
  toolboxCategories: {
    // "General"
    general: "general",
    // "Choice Questions"
    choice: "Preguntas de selección",
    // "Text Input Questions"
    text: "Preguntas entrada de texto",
    // "Containers"
    containers: "Contenedores",
    // "Matrix Questions"
    matrix: "Preguntas matriz",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Predeterminado ({0})",
    // "Survey"
    survey: "Encuesta",
    // "Settings"
    settings: "Configuración de la encuesta",
    // "Open settings"
    settingsTooltip: "Configuración de encuesta abierta",
    // "Survey Settings"
    surveySettings: "Opciones encuesta",
    // "Survey settings"
    surveySettingsTooltip: "Configuración de la encuesta",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Configuración del tema",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Configuración del tema",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Configuración del creador",
    // "Show Panel"
    showPanel: "Mostrar panel",
    // "Hide Panel"
    hidePanel: "Ocultar panel",
    // "Select previous"
    prevSelected: "Seleccionar anterior",
    // "Select next"
    nextSelected: "Seleccionar siguiente",
    // [Auto-translated] "Focus previous"
    prevFocus: "Enfoque anterior",
    // [Auto-translated] "Focus next"
    nextFocus: "Enfoque siguiente",
    // "Survey"
    surveyTypeName: "Encuesta",
    // "Page"
    pageTypeName: "Página",
    // "Panel"
    panelTypeName: "Panel",
    // "Question"
    questionTypeName: "Pregunta",
    // "Column"
    columnTypeName: "Columna",
    // "Add New Page"
    addNewPage: "Añadir nueva página",
    // "Scroll to the Right"
    moveRight: "Desplácese a la derecha",
    // "Scroll to the Left"
    moveLeft: "Desplácese a la izquierda",
    // "Delete Page"
    deletePage: "Eliminar página",
    // "Edit Page"
    editPage: "Editar página",
    // "Edit"
    edit: "Editar",
    // "page"
    newPageName: "Página",
    // "question"
    newQuestionName: "Pregunta",
    // "panel"
    newPanelName: "Panel",
    // "text"
    newTextItemName: "Texto",
    // [Auto-translated] "Default"
    defaultV2Theme: "Predeterminado",
    // [Auto-translated] "Modern"
    modernTheme: "Moderno",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Incumplimiento (heredado)",
    // "Preview Survey Again"
    testSurveyAgain: "Encuesta de prueba de nuevo",
    // "Survey width: "
    testSurveyWidth: "Ancho de la encuesta:",
    // "You had to navigate to"
    navigateToMsg: "Tuviste que navegar a:",
    // "Save Survey"
    saveSurvey: "Guardar la encuesta",
    // "Save Survey"
    saveSurveyTooltip: "Guardar la encuesta",
    // [Auto-translated] "Save Theme"
    saveTheme: "Guardar tema",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Guardar tema",
    // "Hide errors"
    jsonHideErrors: "Ocultar errores",
    // "Show errors"
    jsonShowErrors: "Mostrar errores",
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
    lockQuestionsTooltip: "Bloquear el estado de expansión/contracción de las preguntas",
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
    options: "Opciones",
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
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Escribe para buscar...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "No se han encontrado resultados",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Empieza a configurar tu formulario",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Haga clic en cualquier icono de categoría para explorar la configuración de la encuesta. Los ajustes adicionales estarán disponibles una vez que agregue un elemento de topografía a la superficie de diseño.",
    // "Please correct JSON."
    correctJSON: "Por favor, corrija JSON",
    // "Survey Results "
    surveyResults: "Resultado de la encuesta:",
    // "As Table"
    surveyResultsTable: "Como Tabla",
    // "As JSON"
    surveyResultsJson: "Como JSON",
    // "Question Title"
    resultsTitle: "Título de la pregunta",
    // "Question Name"
    resultsName: "Nombre de la pregunta",
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
    translationPropertyGridTitle: "Opciones de lenguaje",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Configuración del tema",
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
    translationShowAllPages: "Mostrar todas las páginas",
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
    translationMergeLocaleWithDefault: "Merge {0} con lugar predeterminado",
    // "Translation..."
    translationPlaceHolder: "Traducción...",
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
    themeResetButton: "Restablecer la configuración predeterminada del tema",
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
    addNewQuestion: "Añadir pregunta",
    // "Select page..."
    selectPage: "Seleccionar página ...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Las opciones se copian de",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Las opciones se cargan desde un servicio web.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Ir a la configuración",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Vista previa de las opciones de elección cargadas",
    // "HTML content will be here."
    htmlPlaceHolder: "Contenido HTML irá aquí.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Arrastra aquí una pregunta desde la caja de herramientas.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "La encuesta está vacía. Arrastra una pregunta desde la caja de herramientas o haz click en el botón de abajo.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "La página está vacía. Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Arrastre y suelte una imagen aquí o haga clic en el botón de abajo y elija una imagen para cargar",
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
    previewPlaceholderTitle: "Sin vista previa",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Sin vista previa",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "La encuesta no contiene ningún elemento visible.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "La encuesta no contiene ningún elemento visible.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Sin ataduras para traducir",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Sin ataduras para traducir",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Agregue elementos a su formulario o cambie el filtro de cadenas en la barra de herramientas.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Agregue elementos a su formulario o cambie el filtro de cadenas en la barra de herramientas.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Haga clic en el botón \"Agregar pregunta\" a continuación para agregar un nuevo elemento a la página.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Haga clic en el botón \"Agregar pregunta\" a continuación para agregar un nuevo elemento al panel.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Haga clic en el botón de abajo y elija una imagen para cargar",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Elegir imagen",
    // "Add {0}"
    addNewTypeQuestion: "Añadir {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGOTIPO]",
    // [Auto-translated] "Item "
    choices_Item: "Artículo ",
    // [Auto-translated] "Select a file"
    selectFile: "Seleccionar un archivo",
    // [Auto-translated] "Remove the file"
    removeFile: "Eliminar el archivo",
    lg: {
      // "Add New Rule"
      addNewItem: "Añadir nueva regla",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Crea una regla para personalizar el flujo de la encuesta.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Sin reglas lógicas",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Sin reglas lógicas",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Cree una regla para personalizar el flujo de la encuesta.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Cree una regla para personalizar el flujo de la encuesta.",
      // "Show/hide page"
      page_visibilityName: "Visibilidad de la pagina",
      // "Enable/disable page"
      page_enableName: "Habilitar (deshabilitar) página",
      // [Auto-translated] "Make page required"
      page_requireName: "Hacer que la página sea obligatoria",
      // "Show/hide panel"
      panel_visibilityName: "Visibilidad del panel",
      // "Enable/disable panel"
      panel_enableName: "Panel habilitar / deshabilitar",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Hacer que el panel sea obligatorio",
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
      trigger_completeName: "Encuesta completa",
      // "Set answer"
      trigger_setvalueName: "Establecer valor de la pregunta",
      // "Copy answer"
      trigger_copyvalueName: "Copiar valor de la pregunta",
      // "Skip to question"
      trigger_skipName: "Saltar a la pregunta",
      // "Run expression"
      trigger_runExpressionName: "Ejecutar la expresión personalizada",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Texto personalizado 'Página de agradecimiento'",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Haga que la página sea visible cuando la expresión lógica vuelva verdadera. De lo contrario, manténgalo invisible",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Haga que el panel sea visible cuando la expresión lógica vuelva verdadera. De lo contrario, manténgalo invisible",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Haga el panel, y todos los elementos dentro de él, habiliten cuando la expresión lógica devuelve verdadero. De lo contrario, manténgalos deshabilitados",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Haz que la pregunta sea visible cuando la expresión lógica se devuelve 'verdadero'. De lo contrario, se mantiene invisible",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Haz que la pregunta se habilite cuando la expresión lógica devuelve 'verdadero'. De lo contrario, se mantiene deshabilitado",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "La pregunta se requiere cuando la expresión lógica devuelve 'verdadero'",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Cuando la expresión lógica devuelve 'verdadero', la encuesta se completa y el usuario final ve la 'página de agradecimiento'",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Cuando se cambian los valores de las preguntas, que se usan en la expresión lógica, se cambian y la expresión lógica devuelve 'verdadero', entonces el valor se establece en la pregunta seleccionada",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Cuando se cambian los valores de las preguntas, que se usan en la expresión lógica, se cambian y la expresión lógica devuelve 'verdadero', entonces el valor de una pregunta seleccionada se copia a otra pregunta seleccionada",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Cuando la expresión lógica devuelve 'verdadero', la encuesta salta a la pregunta seleccionada",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Cuando la expresión lógica devuelve 'verdadero', entonces se realiza la expresión personalizada. Es posible que opcionalmente establezca este resultado de expresión en la pregunta seleccionada",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Si la expresión lógica devuelve 'verdadero', entonces el texto predeterminado para la 'página de agradecimiento' se cambia por el texto dado",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Cuando la expresión: '{0}' devuelve VERDADERO:", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Nueva regla",
      // "make page {0} visible"
      page_visibilityText: "Hacer la página {0} Visible", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "Hacer panel {0} visible", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "Hacer panel {0} habilitar", // {0} panel name
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
      setValueExpressionPlaceholder: "Una expresión cuyo resultado se asignará a la pregunta de destino.",
      // "survey becomes completed"
      trigger_completeText: "La encuesta se completa",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "En cuestión: {0} valor {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Valor de pregunta claro: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Copiar en cuestión: {0} valor de la pregunta {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Encuesta salta a la pregunta {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Expresión de ejecución: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: "y establecer su resultado en cuestión: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Mostrar texto personalizado para la 'gracias página'",
      // "All Questions"
      showAllQuestions: "Todas las preguntas",
      // "All Action Types"
      showAllActionTypes: "Todos los tipos de acción",
      // "Condition(s)"
      conditions: "Condición(es)",
      // "Action(s)"
      actions: "Comportamiento",
      // "Define condition(s)"
      expressionEditorTitle: "Definir la(s) condición(es)",
      // "Define action(s)"
      actionsEditorTitle: "Definir la(s) acción(es)",
      // "Delete Action"
      deleteAction: "Eliminar acción",
      // "Add Action"
      addNewAction: "Añadir nueva acción",
      // "Select action..."
      selectedActionCaption: "Seleccione una acción para agregar ...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "La expresión lógica está vacía o inválida. Por favor corríjalo",
      // "Please add at least one action."
      noActionError: "Por favor, agregue al menos una acción",
      // "Please fix issues in your action(s)."
      actionInvalid: "Por favor, solucione problemas en su(s) acción(es)",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Las reglas lógicas están incompletas",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "No ha completado algunas de las reglas lógicas. Si deja la pestaña ahora, los cambios se perderán. ¿Aún desea salir de la pestaña sin completar los cambios?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Sí",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "No, quiero completar las reglas"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Nombre del panel",
      // [Auto-translated] "Panel title"
      title: "Título de la viñeta",
      // [Auto-translated] "Panel description"
      description: "Descripción del panel",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Haga que el panel sea visible si",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Haga que el panel sea obligatorio si",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Orden de las preguntas dentro del panel",
      // [Auto-translated] "Move the panel to page"
      page: "Mover el panel a la página",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Mostrar el panel en una nueva línea",
      // [Auto-translated] "Panel collapse state"
      state: "Estado de contracción del panel",
      // [Auto-translated] "Inline panel width"
      width: "Ancho del panel en línea",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Anchura mínima del panel",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Anchura máxima del panel",
      // [Auto-translated] "Number this panel"
      showNumber: "Numerar este panel"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Anchura efectiva, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Ancho del título de la pregunta, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Nombre del panel",
      // [Auto-translated] "Panel title"
      title: "Título de la viñeta",
      // [Auto-translated] "Panel description"
      description: "Descripción del panel",
      // [Auto-translated] "Entry display mode"
      displayMode: "Modo de visualización de entrada",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Haga que el panel sea visible si",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Haga que el panel sea obligatorio si",
      // [Auto-translated] "Move the panel to page"
      page: "Mover el panel a la página",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Mostrar el panel en una nueva línea",
      // [Auto-translated] "Panel collapse state"
      state: "Estado de contracción del panel",
      // [Auto-translated] "Inline panel width"
      width: "Ancho del panel en línea",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Anchura mínima del panel",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Anchura máxima del panel",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Confirmar la eliminación de la entrada",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Patrón de descripción de la entrada",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Patrón de título de entrada",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Texto de panel vacío",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Patrón de título de tabulación",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Marcador de posición del título de la pestaña",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Haga visible una entrada individual si",
      // [Auto-translated] "Number the panel"
      showNumber: "Numerar el panel",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Alineación del título del panel",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Alineación de la descripción del panel",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Alineación del título de la pregunta",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Ancho del título de la pregunta",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Alineación de mensajes de error",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Nueva ubicación de entrada",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Evitar respuestas duplicadas en la siguiente pregunta"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Nombre de la pregunta",
      // [Auto-translated] "Question title"
      title: "Título de la pregunta",
      // [Auto-translated] "Question description"
      description: "Descripción de la pregunta",
      // [Auto-translated] "Show the title and description"
      showTitle: "Mostrar el título y la descripción",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Haz que la pregunta sea visible si",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Haga que la pregunta sea obligatoria si:",
      // [Auto-translated] "Move the question to page"
      page: "Mover la pregunta a la página",
      // [Auto-translated] "Question box collapse state"
      state: "Estado de contracción del cuadro de pregunta",
      // [Auto-translated] "Number this question"
      showNumber: "Numerar esta pregunta",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Alineación del título de la pregunta",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Alineación de la descripción de la pregunta",
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
      signatureAutoScaleEnabled: "Escalado automático del área de firma",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Mostrar un marcador de posición dentro del área de firma",
      // [Auto-translated] "Placeholder text"
      placeholder: "Texto de marcador de posición",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Texto de marcador de posición en modo de solo lectura o vista previa",
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
      name: "Nombre de la expresión",
      // [Auto-translated] "Expression title"
      title: "Título de la expresión",
      // [Auto-translated] "Expression description"
      description: "Descripción de la expresión",
      // [Auto-translated] "Expression"
      expression: "Expresión"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Expresión"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Expresión"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Título de la encuesta",
      // [Auto-translated] "Survey description"
      description: "Descripción de la encuesta",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Hacer que la encuesta sea de solo lectura"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Nombre de la página",
      // [Auto-translated] "Page title"
      title: "Título de la página",
      // [Auto-translated] "Page description"
      description: "Descripción de la página",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Hacer que la página sea visible si",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Haga que la página sea obligatoria si",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Límite de tiempo para completar la página",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Orden de las preguntas en la página"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Nombre de la columna",
      // [Auto-translated] "Column title"
      title: "Título de la columna",
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
      requiredIf: "Haga que la columna sea obligatoria si",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Cada opción en una columna separada"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Borrar otros en la misma fila"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Nombre",
      // [Auto-translated] "Title"
      title: "Título"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Guardar el valor enmascarado en los resultados de la encuesta"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Patrón de valores"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Valor mínimo",
      // [Auto-translated] "Maximum value"
      max: "Valor máximo"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Permitir valores negativos",
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
    showValue: "Mostrar texto y valor",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Requerir al usuario que introduzca un comentario",
    // "Display area height"
    imageHeight: "Altura de imagen",
    // "Display area width"
    imageWidth: "Ancho de la imagen",
    // "Join identifier"
    valueName: "Nombre de valor",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Valor de visualización predeterminado para textos dinámicos",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Alineación de etiquetas",
    // "Input field width (in characters)"
    size: "Tamaño de entrada (en caracteres)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Alineación de mensajes de error de celda",
    // [Auto-translated] "Enabled"
    enabled: "Habilitado",
    // [Auto-translated] "Disabled"
    disabled: "Deshabilitado",
    // [Auto-translated] "Inherit"
    inherit: "Heredar",
    // "Apply"
    apply: "Solicitar",
    // "OK"
    ok: "ok",
    // "Save"
    save: "Guardar",
    // "Clear"
    clear: "Limpiar",
    // "Save"
    saveTooltip: "Guardar",
    // "Cancel"
    cancel: "Cancelar",
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
    addNew: "Añadir nuevo",
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
    back: "Volver sin guardar",
    // "Return without saving"
    backTooltip: "Volver sin guardar",
    // "Save and return"
    saveAndBack: "Guardar y volver",
    // "Save and return"
    saveAndBackTooltip: "Guardar y volver",
    // "Done"
    doneEditing: "Hecho",
    // "Edit Choices"
    editChoices: "Editar opciones",
    // "Show Choices"
    showChoices: "Mostrar opciones",
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
    fastEntryPlaceholder: "Puedes introducir datos en el siguiente formato:\nvalue1|text\nvalue2",
    // "Form Entry"
    formEntry: "Entrada de forma",
    // "Test the service"
    testService: "Probar el servicio",
    // "Please select the element"
    itemSelectorEmpty: "Por favor seleccione el elemento",
    // "Please select the action"
    conditionActionEmpty: "Por favor seleccione la acción",
    // "Select a question..."
    conditionSelectQuestion: "Seleccionar pregunta ...",
    // "Select a page..."
    conditionSelectPage: "Seleccionar página ...",
    // "Select a panel..."
    conditionSelectPanel: "Seleccionar panel ...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Por favor ingrese / seleccione el valor",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Presione CTRL + ESPACIO para obtener sugerencia de completar la expresión",
    // "Current row"
    aceEditorRowTitle: "Fila actual",
    // "Current panel"
    aceEditorPanelTitle: "Panel actual",
    // "For more details please check the documentation"
    showMore: "Para más detalles, por favor revise la documentación",
    // "Available questions"
    assistantTitle: "Preguntas disponibles:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Debe haber al menos una columna o fila",
    // "Review before submit"
    showPreviewBeforeComplete: "Previsualizar respuestas entes de enviar la encuesta",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Habilitado por una condición",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Restablecimiento",
    // "Please enter a value"
    propertyIsEmpty: "Porfavor introduzca un valor",
    // "Please enter a unique value"
    propertyIsNoUnique: "Por favor ingrese un valor único",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Por favor ingrese un nombre único",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "No utilice palabras reservadas: \"elemento\", \"elección\", \"panel\", \"fila\".",
    // "You don't have any items yet"
    listIsEmpty: "Añadir un nuevo artículo",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "No se han añadido opciones todavía",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Todavía no tienes ninguna columna",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Todavía no tiene columnas de diseño",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Todavía no tienes ninguna fila",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Todavía no tiene ninguna regla de validación",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Todavía no tiene ninguna variable personalizada",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Todavía no tienes ningún desencadenante",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Todavía no tienes ningún enlace",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Todavía no tienes ninguna página",
    // "Add new choice"
    "addNew@choices": "Añade una opción",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Agregar nueva columna",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Agregar nueva fila",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Agregar nueva regla",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Adición de una nueva variable",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Agregar nuevo disparador",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Agregar nueva URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Agregar nueva página",
    // "Expression is empty"
    expressionIsEmpty: "La expresión está vacía",
    // "Value"
    value: "Valor",
    // "Text"
    text: "Texto",
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
      valueName: "Obtenga el valor para almacenar de la siguiente propiedad"
    },
    // "Get value to display from the following property"
    titleName: "Nombre del título",
    // "Get file URLs from the following property"
    imageLinkName: "Obtener URLs de imagen desde el siguiente campo JSON",
    // "Accept empty response"
    allowEmptyResponse: "Permitir respuestas vacías",
    // "Title"
    titlePlaceholder: "Título de entrada aquí",
    // "Survey Title"
    surveyTitlePlaceholder: "Título de la encuesta de entrada aquí",
    // "Page {num}"
    pageTitlePlaceholder: "Título de la página de entrada aquí",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Página de inicio",
    // "Description"
    descriptionPlaceholder: "Ingrese una descripción",
    // "Description"
    surveyDescriptionPlaceholder: "Ingrese una descripción de la encuesta",
    // "Description"
    pageDescriptionPlaceholder: "Ingrese una descripción de la página",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Opciones de envoltura",
    // "Enable the \"Other\" option"
    showOtherItem: "Tiene opción 'Otro'",
    // "Rename the \"Other\" option"
    otherText: "Cambiar texto 'Otro'",
    // "Enable the \"None\" option"
    showNoneItem: "Tiene opcion 'Ninguno'",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Habilite la opción \"Negarse a responder\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Habilite la opción \"No sé\"",
    // "Rename the \"None\" option"
    noneText: "Cambiar texto 'Ninguno'",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Tiene opción 'Selecionar todo'",
    // "Rename the \"Select All\" option"
    selectAllText: "Cambiar texto de 'Seleccionar todo'",
    // "Minimum value for auto-generated items"
    choicesMin: "Valor mínimo para artículos generados automáticos",
    // "Maximum value for auto-generated items"
    choicesMax: "Valor máximo para artículos generados automáticos",
    // "Step value for auto-generated items"
    choicesStep: "La diferencia entre los artículos generados automáticos",
    // "Name"
    name: "Nombre",
    // "Title"
    title: "Título",
    // "Cell input type"
    cellType: "Tipo de célula",
    // "Column count"
    colCount: "Recuento de columnas",
    // "Choice order"
    choicesOrder: "Seleccione el orden de las opciones",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Permitir opciones personalizadas",
    // "Visible"
    visible: "¿Es visible?",
    // "Required"
    isRequired: "¿Se requiere?",
    // [Auto-translated] "Mark as required"
    markRequired: "Marcar según sea necesario",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Quitar la marca requerida",
    // "Require an answer in each row"
    eachRowRequired: "Requerir respuesta para todas las filas",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Evitar respuestas duplicadas en filas",
    // "Error message for required questions"
    requiredErrorText: "Texto de error requerido",
    // "Display the question on a new line"
    startWithNewLine: "¿Empieza con la nueva línea?",
    // "Rows"
    rows: "Número de filas",
    // "Columns"
    cols: "Recuento de columnas",
    // "Placeholder text within input field"
    placeholder: "Placeholder de entrada",
    // "Show preview area"
    showPreview: "Mostrar área de vista previa",
    // "Store file content in JSON result as text"
    storeDataAsText: "Tienda el contenido del archivo en el resultado de JSON como texto",
    // "Maximum file size (in bytes)"
    maxSize: "Tamaño máximo de archivo en bytes",
    // "Row count"
    rowCount: "Número de filas",
    // "Columns layout"
    columnLayout: "Diseño de columnas",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Añadir la ubicación del botón de la fila",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transponer filas a columnas",
    // "\"Add Row\" button text"
    addRowText: "Añadir texto de botón de fila",
    // "\"Remove Row\" button text"
    removeRowText: "Eliminar el texto del botón de fila",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Patrón de título de campo de entrada",
    // "Minimum rating value"
    rateMin: "Valor mínimo",
    // "Maximum rating value"
    rateMax: "Valor máximo",
    // "Step value"
    rateStep: "Rango de los valores",
    // "Minimum value label"
    minRateDescription: "Descripción del valor mínimo",
    // "Maximum value label"
    maxRateDescription: "Descripción del valor máximo",
    // "Input type"
    inputType: "Tipo de entrada",
    // "Default Answer"
    defaultValue: "Valor por defecto",
    // "Default texts"
    cellsDefaultRow: "Textos de celdas predeterminados",
    // "Edit survey settings"
    surveyEditorTitle: "Editar configuración de encuesta",
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
    addCondition: "Añadir condición",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Selecciona una pegunta para epezar a configurar condiciones.",
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
    includeIntoResult: "Incluir en los resultados de la encuesta",
    // "Make the title and description visible"
    showTitle: "Mostrar / Ocultar Título",
    // "Expand/collapse title"
    expandCollapseTitle: "Expandir / Contraer título",
    // "Select a survey language"
    locale: "Idioma predeterminado",
    // "Select device type"
    simulator: "Elige dispositivo",
    // "Switch to landscape orientation"
    landscapeOrientation: "Orientación horizontal ",
    // "Switch to portrait orientation"
    portraitOrientation: "Cambiar a orientatión retrato",
    // "Clear hidden question values"
    clearInvisibleValues: "Claros valores invisibles",
    // "Limit to one response"
    cookieName: "Nombre de la cookie (para deshabilitar la encuesta de ejecución dos veces localmente)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Enviar resultados de encuestas en la página Siguiente",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Almacenar 'Otros' valor en campo separado",
    // "Show page titles"
    showPageTitles: "Mostrar descripción de la página",
    // "Show page numbers"
    showPageNumbers: "Mostrar números de página",
    // "\"Previous Page\" button text"
    pagePrevText: "Página de texto del botón anterior",
    // "\"Next Page\" button text"
    pageNextText: "Página Siguiente botón de texto",
    // "\"Complete Survey\" button text"
    completeText: "Texto completo del botón",
    // "\"Review Answers\" button text"
    previewText: "Vista previa del botón del botón",
    // "\"Edit Answer\" button text"
    editText: "Editar botón de texto",
    // "\"Start Survey\" button text"
    startSurveyText: "Texto de inicio de la encuesta",
    // "Show navigation buttons"
    showNavigationButtons: "Mostrar botones de navegación (navegación predeterminada)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Alineación de los botones de navegación",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Mostrar botón anterior (el usuario puede volver a la página anterior)",
    // "First page is a start page"
    firstPageIsStartPage: "La primera página en la encuesta es una página iniciada",
    // "Show the \"Thank You\" page"
    showCompletePage: "Mostrar la página completa al final (HTML finalizado)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Al responder todas las preguntas, vaya a la página siguiente automáticamente",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Completar la encuesta automáticamente",
    // "Show the progress bar"
    showProgressBar: "Mostrar barra de progreso",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Alineación de la barra de progreso",
    // "Question title alignment"
    questionTitleLocation: "Ubicación del título de la pregunta",
    // "Question title width"
    questionTitleWidth: "Ancho del título de la pregunta",
    // "Required symbol(s)"
    requiredMark: "La pregunta requerida (s) símbolo (s)",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Plantilla de título de la pregunta, el valor predeterminado es: '{no}.{requiere} {título} '",
    // "Error message alignment"
    questionErrorLocation: "Ubicación de error de la pregunta",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Enfoca la primera pregunta al cambiar la página",
    // "Question order"
    questionOrder: "Orden de elementos en la página",
    // "Time limit to complete the survey"
    timeLimit: "Tiempo máximo para terminar la encuesta",
    // "Time limit to complete one page"
    timeLimitPerPage: "Tiempo máximo para terminar una página en la encuesta",
    // [Auto-translated] "Use a timer"
    showTimer: "Usar un temporizador",
    // "Timer alignment"
    timerLocation: "Mostrar panel de temporizador",
    // "Timer mode"
    timerInfoMode: "Mostrar modo de panel del temporizador",
    // "Panel display mode"
    renderMode: "Modo de renderizado",
    // "Enable entry addition"
    allowAddPanel: "Permitir agregar un panel",
    // "Enable entry removal"
    allowRemovePanel: "Permitir eliminar el panel",
    // "\"Add Entry\" button text"
    addPanelText: "Añadiendo texto del panel",
    // "\"Remove Entry\" button text"
    removePanelText: "Eliminar texto del panel",
    // "Show all elements on one page"
    isSinglePage: "Mostrar todos los elementos en una página",
    // "HTML markup"
    html: "Html",
    // "Answer"
    setValue: "Respuesta",
    // "Storage format"
    dataFormat: "Formato imagen",
    // "Enable row addition"
    allowAddRows: "Permitir añadir filas",
    // "Enable row removal"
    allowRemoveRows: "Permitir eliminar filas",
    // "Enable row reordering"
    allowRowReorder: "Permitor drag and drop de filas",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "No aplica si especificas el ancho o alto exacto de la imagen.",
    // "Minimum display area width"
    minImageWidth: "Ancho de imagen mínimo",
    // "Maximum display area width"
    maxImageWidth: "Ancho de imagen máximo",
    // "Minimum display area height"
    minImageHeight: "Alto de imagen mínimo",
    // "Maximum display area height"
    maxImageHeight: "Alto de imagen máximo",
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
    regex: "Expresión regular",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Mensaje de validación",
      // [Auto-translated] "Validation expression"
      expression: "Expresión de validación",
      // [Auto-translated] "Notification type"
      notificationType: "Tipo de notificación",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Longitud máxima (en caracteres)"
    },
    // "Total row header"
    totalText: "Texto total",
    // "Aggregation method"
    totalType: "Tipo total",
    // "Total value expression"
    totalExpression: "Expresión total",
    // "Total value display format"
    totalDisplayStyle: "Estilo de visualización total",
    // "Currency"
    totalCurrency: "Moneda total",
    // "Formatted string"
    totalFormat: "Formato total",
    // "Survey logo"
    logo: "Logo (URL o cadene codificada en base64)",
    // "Survey layout"
    questionsOnPageMode: "Estructura de la encuesta",
    // "Restrict answer length"
    maxTextLength: "Longitud máxima de la respuesta (en caracteres)",
    // "Restrict comment length"
    maxCommentLength: "Longitud máxima de comentario (en caracteres)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Altura del área de comentarios (en líneas)",
    // "Auto-expand text areas"
    autoGrowComment: "Auto-expand de comentario si es necesario",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Permitir a los usuarios cambiar el tamaño de las áreas de texto",
    // "Update input field values"
    textUpdateMode: "Actualizar valor del texto de la pregunta",
    // [Auto-translated] "Input mask type"
    maskType: "Tipo de máscara de entrada",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Fijar foco en la primera respuesta no válida",
    // "Run validation"
    checkErrorsMode: "Ejecutar validación",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Validar campos vacíos en caso de pérdida de foco",
    // "Redirect to an external link after submission"
    navigateToUrl: "Navegar a URL",
    // "Dynamic external link"
    navigateToUrlOnCondition: "URL dinámica",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Markup para mostrar si el usuario ya completó la encuesta",
    // "\"Thank You\" page markup"
    completedHtml: "Markup de página de encuesta completada",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Markup de página de encuesta dinámica completada",
    // "Markup to show while survey model is loading"
    loadingHtml: "Markup para mostrar mienstras que la encuesta se está cargando",
    // "Comment area text"
    commentText: "Area de texto de comentario",
    // "Autocomplete type"
    autocomplete: "Tipo autocompletado",
    // "Label for \"True\""
    labelTrue: "Etiqueta \"Verdadero\"",
    // "Label for \"False\""
    labelFalse: "Etiqueta \"Falso\"",
    // "Show the Clear button"
    allowClear: "Mostrar el botón limpiar",
    // [Auto-translated] "Search Mode"
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
    allowImagesPreview: "Previsualizar imágenes",
    // "Accepted file types"
    acceptedTypes: "Tipos de fichero aceptados",
    // "Wait for upload to complete"
    waitForUpload: "Espera a que se complete la carga",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Confirmar borrado de fichero",
    // "Row details alignment"
    detailPanelMode: "Localización del panel de detalle",
    // "Minimum row count"
    minRowCount: "Mínimo número de filas",
    // "Maximum row count"
    maxRowCount: "Máximo número de filas",
    // "Confirm row removal"
    confirmDelete: "Confirmar borrado de fila",
    // "Confirmation message"
    confirmDeleteText: "Mensaje de confirmación",
    // "Initial number of entries"
    panelCount: "Número incial de panel",
    // "Minimum number of entries"
    minPanelCount: "Número mínimo de paneles",
    // "Maximum number of entries"
    maxPanelCount: "Número máximo de paneles",
    // "Initial entry state"
    panelsState: "Estado de expansión del panel interno",
    // "\"Previous Entry\" button text"
    prevPanelText: "Tooltip del botón de panel previo",
    // "\"Next Entry\" button text"
    nextPanelText: "Tooltip del botón de siguiente panel",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Localización del botón eliminar panel",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Ocultar pregunta si no hay más filas",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Ocultar columnas si no hay filas",
    // [Auto-translated] "Custom rating values"
    rateValues: "Valores de clasificación personalizados",
    // [Auto-translated] "Rating count"
    rateCount: "Recuento de calificaciones",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Configuración de clasificación",
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
      minValueExpression: "Expresión de valor mínimo",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Expresión de valor máximo",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Configuración de etiquetas de escala",
      // [Auto-translated] "Slider type"
      sliderType: "Tipo de control deslizante",
      // [Auto-translated] "Min range length"
      minRangeLength: "Longitud mínima del rango",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Longitud máxima de rango",
      // [Auto-translated] "Custom labels"
      customLabels: "Etiquetas personalizadas",
      // [Auto-translated] "Label format"
      labelFormat: "Formato de etiqueta",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Formato de información sobre herramientas"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Altura de la imagen",
      // [Auto-translated] "Image width"
      imageWidth: "Ancho de la imagen"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Ocultar la pregunta si no contiene opciones",
    // "Minimum width"
    minWidth: "Anchura mímima (en valores aceptados CSS)",
    // "Maximum width"
    maxWidth: "Anchura máxima (en valores aceptados CSS)",
    // "Width"
    width: "Ancho (en valores aceptados CSS)",
    // "Show column headers"
    showHeader: "Mostrar cabeceras de columna",
    // "Show horizontal scrollbar"
    horizontalScroll: "Mostrar scrollbar horizontal",
    // "Minimum column width"
    columnMinWidth: "Anchura mímima de columna (en valores aceptados CSS)",
    // "Row header width"
    rowTitleWidth: "Anchura de cabecera de fila (en valores aceptados CSS)",
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
    minSelectedChoices: "Opciones mínimas para seleccionar",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Máximo de opciones para seleccionar",
    // "Logo width"
    logoWidth: "Ancho de Logo (en valores aceptados CSS)",
    // "Logo height"
    logoHeight: "Alto de Logo (en valores aceptados CSS)",
    // "Read-only"
    readOnly: "Sólo-lectura",
    // "Disable the read-only mode if"
    enableIf: "Editable si",
    // "\"No rows\" message"
    noRowsText: "Mensaje \"Sin filas\"",
    // "Separate special choices"
    separateSpecialChoices: "Opciones de separación especiales (None, Other, Select All)",
    // "Copy choices from the following question"
    choicesFromQuestion: "Copiar opciones de la siguiente pregunta",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Qué opciones a copiar?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Utilice los valores de la siguiente columna de matriz o pregunta de panel como ID de opción",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Utilice los valores de la siguiente columna de matriz o pregunta de panel como textos de elección",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Mostrar los títulos de las páginas en la barra de progreso",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Mostrar números de página en la barra de progreso",
    // "Add a comment box"
    showCommentArea: "Mostrar el área de comentarios",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Texto de marcador de posición para el cuadro de comentarios",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Mostrar las etiquetas como valores extremos",
    // "Row order"
    rowOrder: "Orden de filas",
    // "Column layout"
    columnsLayout: "Disposición de columnas",
    // "Nested column count"
    columnColCount: "Número de columnas anidadas",
    // "Correct Answer"
    correctAnswer: "Respuesta correcta",
    // "Default Values"
    defaultPanelValue: "Valores por defecto",
    // "Cell Texts"
    cells: "Textos de celda",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Seleccione un archivo o pegue un enlace de archivo...",
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
      text: "Texto alternativo"
    },
    // "Logo alignment"
    logoPosition: "Posición del logotipo",
    // "Add logo..."
    addLogo: "Añadir logo ...",
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
    previewMode: "Modo de vista previa",
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
        // [Auto-translated] "Panel Layout"
        layout: "Diseño de paneles"
      },
      // "General"
      general: "General",
      // "Options"
      fileOptions: "Opciones",
      // "HTML Editor"
      html: "Editor HTML",
      // "Columns"
      columns: "Columnas",
      // "Rows"
      rows: "Filas",
      // "Choice Options"
      choices: "Opciones",
      // "Items"
      items: "Artículos",
      // "Visible If"
      visibleIf: "Visible si",
      // "Editable If"
      enableIf: "Habilitar si",
      // "Required If"
      requiredIf: "Requerido si",
      // "Rating Values"
      rateValues: "Valores de la tasa",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Configuración del control deslizante",
      // "Choices from a Web Service"
      choicesByUrl: "Opciones de la web",
      // "Default Choices"
      matrixChoices: "Opciones predeterminadas",
      // "Text Inputs"
      multipleTextItems: "Entradas de texto",
      // "Numbering"
      numbering: "Numeración",
      // "Validators"
      validators: "Validadores",
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
      triggers: "Disparadores",
      // "Title template"
      templateTitle: "Título de la plantilla",
      // "Totals"
      totals: "Totales",
      // "Conditions"
      logic: "Lógica",
      // [Auto-translated] "Input Mask Settings"
      mask: "Configuración de la máscara de entrada",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Diseño de panel",
        // [Auto-translated] "Layout"
        question: "Diseño",
        // [Auto-translated] "Layout"
        base: "Diseño"
      },
      // "Data"
      data: "Datos",
      // "Validation"
      validation: "Validación",
      // "Individual Cell Texts"
      cells: "Células",
      // "\"Thank You\" Page"
      showOnCompleted: "Mostrar en completado",
      // "Logo in the Survey Header"
      logo: "Logo en el título de la encuesta",
      // "Slider"
      slider: "Slider",
      // "Expression"
      expression: "Expresión",
      // [Auto-translated] "Question Settings"
      questionSettings: "Configuración de la pregunta",
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
    choicesVisibleIf: "Opciones son visibles si",
    // "Make choices selectable if"
    choicesEnableIf: "Opciones son seleccionables si",
    // "Make columns visible if"
    columnsEnableIf: "Columnas son visibles si",
    // "Make rows visible if"
    rowsEnableIf: "Filas son visibles si",
    // "Increase the inner indent"
    innerIndent: "Añadir indents internos",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Usar las respuestas de la última entrada como predeterminadas",
    // "Please enter a value."
    enterNewValue: "Por favor, ingrese el valor",
    // "There are no questions in the survey."
    noquestions: "No hay ninguna pregunta en la encuesta",
    // "Please create a trigger"
    createtrigger: "Por favor crea un gatillo",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Presione el botón Entrar para editar",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Presione el botón Entrar para editar el elemento, presione el botón Eliminar para eliminar el elemento, presione ALT Plus Flecha hacia arriba o hacia abajo para mover el elemento",
    // "On "
    triggerOn: "En",
    // "Make pages visible"
    triggerMakePagesVisible: "Hacer visibles las páginas:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Hacer elementos visibles:",
    // "Complete the survey if successful."
    triggerCompleteText: "Completa la encuesta si tiene éxito",
    // "The trigger is not set"
    triggerNotSet: "El gatillo no se establece",
    // "Run if"
    triggerRunIf: "Correr si",
    // "Change value of: "
    triggerSetToName: "Cambio de valor de:",
    // "Copy value from: "
    triggerFromName: "Copie el valor de:",
    // "Run this Expression"
    triggerRunExpression: "Ejecute esta expresión:",
    // "to: "
    triggerSetValue: "a:",
    // "Go to the question"
    triggerGotoName: "Ir a la pregunta:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "No coloque la variable en el resultado de la encuesta",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Por favor ingrese una expresión válida",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Escribir expresión aquí...",
    // "No file chosen"
    noFile: "Ningún archivo elegido",
    // "Clear hidden question values"
    clearIfInvisible: "Limpiar el valor si la pregunta se oculta",
    // "Store values in the following property"
    valuePropertyName: "Valor del nombre de propiedad",
    // "Enable search-as-you-type"
    searchEnabled: "Habilitar búsqueda",
    // "Hide selected items"
    hideSelectedItems: "Ocultar elementos seleccionados",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Contraer el menú desplegable al seleccionarlo",
    // "Vertical alignment within cells"
    verticalAlign: "Alineación vertical",
    // "Alternate row colors"
    alternateRows: "Alternar filas",
    // "Make columns visible if"
    columnsVisibleIf: "Columnas son visibles si",
    // "Make rows visible if"
    rowsVisibleIf: "Filas son visibes si",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Texto de marcador de posición para el cuadro de comentarios",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Texto de marcador de posición para archivo local",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Texto de marcador de posición para la cámara",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Texto de marcador de posición para archivo local o cámara",
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
    imageHeight_placeholder: "Automático",
    // "auto"
    imageWidth_placeholder: "Automático",
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
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Opacidad del panel y del cuadro de preguntas",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Opacidad del elemento de entrada",
      // [Auto-translated] "Survey font size"
      fontSize: "Tamaño de fuente de la encuesta",
      // [Auto-translated] "Survey scale factor"
      scale: "Factor de escala de la encuesta",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Radio de esquina",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Modo avanzado",
      // [Auto-translated] "Title font"
      pageTitle: "Fuente del título",
      // [Auto-translated] "Description font"
      pageDescription: "Descripción fuente",
      // [Auto-translated] "Title font"
      questionTitle: "Fuente del título",
      // [Auto-translated] "Description font"
      questionDescription: "Descripción fuente",
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
      surveyTitle: "Fuente del título de la encuesta",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Fuente de descripción de la encuesta",
      // [Auto-translated] "Survey title font"
      headerTitle: "Fuente del título de la encuesta",
      // [Auto-translated] "Survey description font"
      headerDescription: "Fuente de descripción de la encuesta",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Ancho del área de contenido",
      // [Auto-translated] "Text width"
      textAreaWidth: "Ancho del texto",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Color de fondo",
      // [Auto-translated] "Background image"
      backgroundImage: "Imagen de fondo",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Opacidad",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Solapar",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Alineación del logotipo",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Alineación del título de la encuesta",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Alineación de la descripción de la encuesta"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "verdadero",
    // [Auto-translated] "false"
    "false": "falso",
    // [Auto-translated] "Local file"
    file: "Archivo local",
    // [Auto-translated] "Camera"
    camera: "Cámara",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Archivo local o cámara",
    // "Inherit"
    inherit: "heredar",
    // "Visible"
    show: "mostrar",
    // "Hidden"
    hide: "esconder",
    // "Inherit"
    default: "defecto",
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
    // "First panel is expanded"
    firstExpanded: "Primer Expandido",
    // "Hide question numbers"
    off: "no mostrar",
    // "List"
    list: "lista",
    // [Auto-translated] "Carousel"
    carousel: "Carrusel",
    // [Auto-translated] "Tabs"
    tab: "Pestañas",
    // "Panel navigator + Progress bar at the top"
    progressTop: "Progreso superior",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "Progreso inferior",
    // "Panel navigator + Progress bar at the top and bottom"
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
    text: "texto",
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
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Cuando la pregunta o su panel/página se oculta",
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
      text: "Mensaje de texto",
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
      auto: "Automático",
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
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Nombre completo",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Prefijo",
      // [Auto-translated] "First Name"
      "given-name": "Nombre",
      // [Auto-translated] "Middle Name"
      "additional-name": "Segundo nombre",
      // [Auto-translated] "Last Name"
      "family-name": "Apellido",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Sufijo",
      // [Auto-translated] "Nickname"
      nickname: "Apodo",
      // [Auto-translated] "Job Title"
      "organization-title": "Título del trabajo",
      // [Auto-translated] "User Name"
      username: "Nombre de usuario",
      // [Auto-translated] "New Password"
      "new-password": "Nueva contraseña",
      // [Auto-translated] "Current Password"
      "current-password": "Contraseña actual",
      // [Auto-translated] "Organization Name"
      organization: "Nombre de la organización",
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
      "country-name": "Nombre del país",
      // [Auto-translated] "Postal Code"
      "postal-code": "Código postal",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Nombre del titular de la tarjeta",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Nombre del titular de la tarjeta",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Segundo nombre del titular de la tarjeta",
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
      auto: "Automático",
      // [Auto-translated] "Left"
      left: "Izquierda",
      // [Auto-translated] "Right"
      right: "Derecha"
    },
    // "All"
    all: "todas",
    // "Page"
    page: "página",
    // "Survey"
    survey: "encuesta",
    // "When switching to the next page"
    onNextPage: "Al cambiar página",
    // "After an answer is changed"
    onValueChanged: "Al cambiar valor",
    // "Before an answer is changed"
    onValueChanging: "Antes de que una pregunta sea cambiada",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Estructura original",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Mostrar todas las preguntas en una sola página",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Mostrar una sola pregunta por página",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Mostrar un solo campo de entrada por página"
    },
    // "No preview"
    noPreview: "sin vista previa",
    // "Show all questions"
    showAllQuestions: "Mostrar vista previa con todas las preguntas",
    // "Show answered questions only"
    showAnsweredQuestions: "Mostrar vista previa con preguntas contestadas",
    // [Auto-translated] "Show all questions"
    allQuestions: "Mostrar todas las preguntas",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Mostrar solo las preguntas respondidas",
    // "Completed pages"
    pages: "páginas",
    // "Answered questions"
    questions: "preguntas",
    // "Answered required questions"
    requiredQuestions: "preguntas requeridas",
    // "Valid answers"
    correctQuestions: "preguntas correctas",
    // "Completed pages (button UI)"
    buttons: "botones",
    // "Under the input field"
    underInput: "debajo de la respuesta",
    // "Under the question title"
    underTitle: "debajo del título",
    // [Auto-translated] "On lost focus"
    onBlur: "Sobre el enfoque perdido",
    // "While typing"
    onTyping: "Mientras se escribe",
    // "Under the row"
    underRow: "Debajo de la fila",
    // "Under the row, display one section only"
    underRowSingle: "Debajo de la fila, sólo un panel es visible",
    // "Auto"
    auto: "Automático",
    showNavigationButtons: {
      // "Hidden"
      none: "Oculto"
    },
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
      default: "Usuarios no pueden expandir o colapsar paneles",
      // "Collapse all"
      collapsed: "Todos los paneles colapsados",
      // "Expand all"
      expanded: "Todos los paneles expandidos",
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
      image: "Imagen",
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
      default: "Predeterminado",
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
      "true": "Generación automática",
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
      default: "Numeración automática",
      // [Auto-translated] "Auto-numbering"
      on: "Numeración automática",
      // [Auto-translated] "Reset on each page"
      onPage: "Restablecer en cada página",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Restablecer en cada panel",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Restablecer en cada panel",
      // [Auto-translated] "Recursive numbering"
      recursive: "Numeración recursiva",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Continuar a través de la encuesta",
      // [Auto-translated] "No numbering"
      off: "Sin numeración"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Bajo el título de la pregunta",
      // [Auto-translated] "Under the input field"
      underInput: "En el campo de entrada"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Junto a las opciones",
      // [Auto-translated] "Above choices"
      vertical: "Opciones anteriores"
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
      initial: "Texto original en"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Texto original en"
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
      auto: "Automático",
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
      survey: "Igual que la encuesta",
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
      "false": "Predeterminado",
      // [Auto-translated] "Without Panels"
      "true": "Sin paneles"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Igual que la encuesta",
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
    modern: "Tema moderno",
    // "Default theme"
    default: "Tema predeterminado",
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
    showOnPage: "Mostrar encuesta en una página",
    // "Show survey in a window"
    showInWindow: "Mostrar encuesta en una ventana",
    // "Load Survey JSON from server"
    loadFromServer: "Encuesta de carga JSON del servidor",
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
    selectPage: "Seleccione la página para probarlo:",
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
    expressionvalidator: "expresión",
    // "Number"
    numericvalidator: "numérica",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "texto"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "encuesta completa",
    // "Set answer"
    setvaluetrigger: "valor ajustado",
    // "Copy answer"
    copyvaluetrigger: "Valor de copia",
    // "Skip to question"
    skiptrigger: "Saltar a la pregunta",
    // "Run expression"
    runexpressiontrigger: "expresión de ejecución",
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
      name: "Un ID de panel que no es visible para los encuestados.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Escriba un subtítulo de panel.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad del panel.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que desactive el modo de solo lectura para el panel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Se aplica a todas las preguntas dentro de este panel. Cuando se establece en \"Oculto\", también oculta las descripciones de las preguntas. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas individuales. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Establece un ancho coherente para los títulos de las preguntas cuando están alineados a la izquierda de sus cuadros de preguntas. Acepta valores CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Establece la ubicación de un mensaje de error en relación con todas las preguntas del panel. La opción \"Heredar\" aplica la configuración a nivel de página (si se establece) o a nivel de encuesta.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Mantiene el orden original de las preguntas o las aleatoriza. La opción \"Heredar\" aplica la configuración de nivel de página (si está establecida) o de nivel de encuesta.",
      // "Repositions the panel to the end of a selected page."
      page: "Cambia la posición del panel al final de una página seleccionada.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Añade espacio o margen entre el contenido del panel y el borde izquierdo del cuadro del panel.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Anule la selección para mostrar el panel en una línea con la pregunta o el panel anterior. La configuración no se aplica si el panel es el primer elemento del formulario.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Elija entre: \"Expandido\": el panel se muestra en su totalidad y se puede contraer; \"Contraído\": el panel muestra solo el título y la descripción y se puede expandir; \"Bloqueado\": el panel se muestra en su totalidad y no se puede contraer.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Establece la anchura del panel en proporción a otros elementos de topografía de la misma línea. Acepta valores CSS (px, %, in, pt, etc.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Asigna números a las preguntas anidadas dentro de este panel.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Especifica el número de columnas que abarca este panel dentro del diseño de cuadrícula.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Esta tabla le permite configurar cada columna de cuadrícula dentro del panel. Establece automáticamente el porcentaje de ancho para cada columna en función del número máximo de elementos en una fila. Para personalizar el diseño de la cuadrícula, ajuste manualmente estos valores y defina el ancho del título para todas las preguntas de cada columna."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Un ID de panel que no es visible para los encuestados.",
      // "Type a panel subtitle."
      description: "Escriba un subtítulo de panel.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad del panel.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que desactive el modo de solo lectura para el panel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Se aplica a todas las preguntas de este panel. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas individuales. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Establece un ancho coherente para los títulos de las preguntas cuando están alineados a la izquierda de sus cuadros de pregunta. Acepta valores CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Establece la ubicación de un mensaje de error en relación con una pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Establece la ubicación de un mensaje de error en relación con todas las preguntas del panel. La opción \"Heredar\" aplica la configuración a nivel de página (si se establece) o a nivel de encuesta.",
      // "Repositions the panel to the end of a selected page."
      page: "Cambia la posición del panel al final de una página seleccionada.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Añade espacio o margen entre el contenido del panel y el borde izquierdo del cuadro del panel.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Anule la selección para mostrar el panel en una línea con la pregunta o el panel anterior. La configuración no se aplica si el panel es el primer elemento del formulario.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Elija entre: \"Expandido\": el panel se muestra en su totalidad y se puede contraer; \"Contraído\": el panel muestra solo el título y la descripción y se puede expandir; \"Bloqueado\": el panel se muestra en su totalidad y no se puede contraer.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Define la anchura del panel en proporción a otros elementos topográficos de la misma línea. Acepta valores CSS (px, %, in, pt, etc.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Escriba una plantilla para los títulos de los paneles dinámicos. Utilice {panelIndex} para la posición general del panel y {visiblePanelIndex} para su orden entre los paneles visibles. Inserte estos marcadores de posición en el patrón para agregar numeración automática.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Escriba una plantilla para los títulos de las pestañas. Utilice {panelIndex} para la posición general de un panel y {visiblePanelIndex} para su orden entre los paneles visibles. Inserte estos marcadores de posición en el patrón para agregar numeración automática.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Texto de reserva para los títulos de tabulación que se aplica cuando el patrón de título de tabulación no genera un valor significativo.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Esta configuración le permite controlar la visibilidad de paneles individuales dentro del panel dinámico. Utilice el marcador de posición '{panel}' para hacer referencia al panel actual en la expresión.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Esta configuración es heredada automáticamente por todas las preguntas dentro de este panel. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas individuales. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Debajo del título del panel\" de forma predeterminada).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Define la posición de un panel recién añadido. De forma predeterminada, los nuevos paneles se agregan al final. Seleccione \"Siguiente\" para insertar un nuevo panel después del actual.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplica las respuestas de la última entrada y las asigna a la siguiente entrada agregada.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Haga referencia a un nombre de pregunta para requerir que un usuario proporcione una respuesta única para esta pregunta en cada panel.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Activa un mensaje de confirmación antes de eliminar una entrada."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Desencadena un mensaje de confirmación antes de quitar una fila.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Expande automáticamente la sección de detalles cuando se agrega una nueva fila a la matriz."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplica las respuestas de la última fila y las asigna a la siguiente fila dinámica agregada.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Esta configuración le permite asignar un valor de respuesta predeterminado basado en una expresión. La expresión puede incluir cálculos básicos: '{q1_id} + {q2_id}', expresiones booleanas, como '{edad} > 60', y funciones: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. El valor determinado por esta expresión sirve como el valor predeterminado inicial que puede ser anulado por la entrada manual de un encuestado.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Usa el ícono de la varita mágica para establecer una regla condicional que determine cuándo la entrada de un encuestado se restablece al valor basado en la \"Expresión de valor predeterminado\" o \"Expresión de valor establecido\" o al valor de \"Respuesta predeterminada\" (si cualquiera de los dos está establecido).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine cuándo ejecutar la \"Expresión de valor establecido\" y asigne dinámicamente el valor resultante como respuesta.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Especifique una expresión que defina el valor que se establecerá cuando se cumplan las condiciones de la regla \"Establecer valor si\". La expresión puede incluir cálculos básicos: '{q1_id} + {q2_id}', expresiones booleanas, como '{edad} > 60', y funciones: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. El valor determinado por esta expresión puede ser anulado por la entrada manual de un encuestado.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Survey Creator le permite ajustar manualmente los anchos en línea de los elementos del formulario para controlar el diseño. Si esto no produce el resultado deseado, puede habilitar el diseño de cuadrícula, que estructura elementos mediante un sistema basado en columnas. Para configurar las columnas de diseño, seleccione una página o un panel y utilice la tabla \"Configuración de preguntas\" → \"Columnas de cuadrícula\". Para ajustar el número de columnas que abarca una pregunta, selecciónela y establezca el valor deseado en el campo \"Diseño\" → \"Intervalo de columnas\".",
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
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida que la encuesta avance o se envíe a menos que la pregunta reciba una respuesta.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Anule la selección para mostrar la pregunta en una línea con la pregunta o el panel anterior. La configuración no se aplica si la pregunta es el primer elemento del formulario.",
      // "Repositions the question to the end of a selected page."
      page: "Cambia la posición de la pregunta al final de una página seleccionada.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Elija entre: \"Expandido\": el cuadro de pregunta se muestra en su totalidad y se puede contraer; \"Contraído\": el cuadro de pregunta muestra solo el título y la descripción y se puede expandir; \"Bloqueado\": el cuadro de pregunta se muestra en su totalidad y no se puede contraer.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Anula las reglas de alineación de títulos definidas en un panel, página o encuesta. La opción \"Heredar\" aplica cualquier configuración de nivel superior (si está establecida) o configuración de nivel de encuesta (\"Superior\" de forma predeterminada).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Bajo el título de la pregunta\" de forma predeterminada).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Superior\" de forma predeterminada).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Agrega espacio o margen entre el contenido de la pregunta y el borde izquierdo del cuadro de pregunta.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Establece el ancho de la pregunta en proporción a otros elementos de la encuesta en la misma línea. Acepta valores CSS (px, %, in, pt, etc.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Elija entre: \"Al perder el foco\": el valor se actualiza cuando el campo de entrada pierde el foco; \"Mientras escribes\": el valor se actualiza en tiempo real, a medida que los usuarios escriben. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Al perder el foco\" de forma predeterminada).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Puede utilizar cualquier servicio web como fuente de datos para preguntas de opción múltiple. Para rellenar los valores de opción, introduzca la dirección URL del servicio que proporciona los datos.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Operación de comparación que se utiliza para filtrar la lista desplegable.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Los textos largos en las opciones de elección generarán automáticamente saltos de línea para que se ajusten al menú desplegable. Anule la selección si desea que los textos se recorten.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Especifica el número de columnas que abarca esta pregunta dentro del diseño de cuadrícula."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Utilice el icono de la varita mágica para definir cuándo se considera válido el valor de la pregunta.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Los errores bloquean el progreso hasta que se resuelven. Las advertencias resaltan los problemas, pero permiten continuar. Las notas informativas ofrecen contexto adicional u orientación neutral. Cuando utilice advertencias o notas informativas, se recomienda habilitar la validación inmediata: \"Encuesta\" → \"Validación\" → \"Ejecutar validación\" → \"Después de que haya cambiado una respuesta\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Define la anchura del área de firma mostrada y de la imagen resultante.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Define la altura del área de firma mostrada y de la imagen resultante.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Seleccione esta opción si desea que el área de firma ocupe todo el espacio disponible dentro del cuadro de pregunta manteniendo la relación de aspecto predeterminada de 3:2. Cuando se establecen valores de anchura y altura personalizados, la configuración mantendrá la relación de aspecto de estas dimensiones."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Especifica la altura de visualización de las imágenes cargadas en la vista previa y la altura real de las imágenes tomadas con la cámara. En el modo de carga de un solo archivo, la altura de la pantalla está limitada por el área de vista previa; En el modo de carga de archivos múltiples, está limitado por el área de miniaturas.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Especifica la anchura de visualización de las imágenes cargadas en la vista previa y la anchura real de las imágenes tomadas con la cámara. En el modo de carga de un solo archivo, el ancho de la pantalla está limitado por el área de vista previa; En el modo de carga de archivos múltiples, está limitado por el área de miniaturas.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Muestra vistas previas en miniatura de los archivos cargados cuando es posible. Anule la selección si desea mostrar los iconos de archivo en su lugar."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "La opción \"Auto\" determina automáticamente el modo adecuado para la visualización (Imagen, Video o YouTube) en función de la URL de origen proporcionada."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Anula los valores de altura mínima y máxima.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Anula los valores de anchura mínima y máxima.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Valor\" sirve como identificador de elemento utilizado en reglas condicionales; \"Texto\" se muestra a los encuestados.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Elija entre \"Imagen\" y \"Video\" para configurar el modo de contenido del selector de medios. Si se selecciona \"Imagen\", asegúrese de que todas las opciones proporcionadas sean archivos de imagen en los siguientes formatos: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Del mismo modo, si se selecciona \"Vídeo\", asegúrese de que todas las opciones sean enlaces directos a archivos de vídeo en los siguientes formatos: MP4, MOV, WMV, FLV, AVI, MKV. Tenga en cuenta que los enlaces de YouTube no son compatibles con las opciones de video."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Esta configuración solo cambia el tamaño del campo de entrada y no afecta el ancho del cuadro de preguntas. Para limitar la longitud de entrada aceptada, vaya a \"Validación\" → \"Límite máximo de caracteres\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Establece el número de líneas mostradas en el campo de entrada. Si la entrada ocupa más líneas, aparecerá la barra de desplazamiento."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Seleccione si desea evitar que los encuestados completen su encuesta.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Establece la ubicación de la barra de progreso. El valor \"Auto\" muestra la barra de progreso por encima o por debajo del encabezado de la encuesta."
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
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Cuando se selecciona, crea una columna individual para cada opción de opción.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Organiza las opciones de elección en un diseño de varias columnas. Cuando se establece en 0, las opciones se muestran en una sola línea. Cuando se establece en -1, el valor real se hereda de la propiedad \"Recuento de columnas anidadas\" de la matriz primaria."
    },
    slider: {
      // "The lowest number that users can select."
      min: "El número más bajo que los usuarios pueden seleccionar.",
      // "The highest number that users can select."
      max: "El número más alto que los usuarios pueden seleccionar.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "El intervalo entre los valores de escala seleccionables. Por ejemplo, un paso de 5 permitirá a los usuarios seleccionar 0, 5, 10, etc.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "La distancia mínima entre los pulgares del control deslizante que un usuario puede establecer.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "La distancia máxima entre los pulgares del control deslizante que un usuario puede establecer.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Especifica el número de etiquetas de escala que se van a generar. Un valor de -1 significa que el número se calcula automáticamente en función del valor mínimo y el valor máximo.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Utilice '{0}' como marcador de posición para el valor real.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Le permite definir etiquetas personalizadas en valores específicos y, opcionalmente, asignarles el texto correspondiente (por ejemplo, 0 = \"Pobre\", 100 = \"Excelente\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Utilice '{0}' como marcador de posición para el valor real.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Permite a los usuarios mover un pulgar más allá del otro.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Muestra un botón que borra el valor del control deslizante seleccionado y lo establece en indefinido.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Define el valor mínimo del control deslizante de forma dinámica mediante una expresión. Admite cálculos básicos (por ejemplo, '{q1_id} + {q2_id}'), lógica booleana (por ejemplo, '{edad} > 60') y funciones como 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' y más.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Define el valor máximo del control deslizante de forma dinámica mediante una expresión. Admite cálculos básicos (por ejemplo, '{q1_id} + {q2_id}'), lógica booleana (por ejemplo, '{edad} > 60') y funciones como 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' y más."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Hace que esta elección sea exclusiva. Cuando un usuario lo selecciona, anulará automáticamente la selección de todas las demás opciones de la pregunta.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Hace que las casillas de verificación de esta columna sean exclusivas. Cuando un usuario lo selecciona, anulará automáticamente la selección de todas las demás casillas de verificación en la misma fila."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Seleccione si las letras mayúsculas y minúsculas de la expresión regular deben tratarse como equivalentes.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Elija entre: \"Estático\": establece un ancho fijo; \"Responsivo\": hace que la encuesta ocupe todo el ancho de la pantalla; \"Auto\": aplica cualquiera de los dos dependiendo de los tipos de preguntas utilizados.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Asigne un valor de cookie único para su encuesta. La cookie se establecerá en el navegador del encuestado al completar la encuesta para evitar envíos repetitivos de encuestas.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Pegue un enlace de imagen (sin límites de tamaño) o haga clic en el icono de la carpeta para buscar un archivo desde su computadora (hasta 64 KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Establece el ancho del logotipo en unidades CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Establece la altura del logotipo en unidades CSS (px, %, in, pt, etc.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Elija entre: \"Ninguno\": la imagen mantiene su tamaño original; \"Contener\": se cambia el tamaño de la imagen para que se ajuste manteniendo su relación de aspecto; \"Portada\": la imagen llena toda la caja manteniendo su relación de aspecto; \"Relleno\": la imagen se estira para llenar el cuadro sin mantener su relación de aspecto.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Seleccione si desea que la encuesta avance automáticamente a la página siguiente una vez que un encuestado haya respondido todas las preguntas en la página actual. Esta función no se aplicará si la última pregunta de la página es abierta o permite varias respuestas.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Seleccione si desea que la encuesta se complete automáticamente después de que un encuestado responda todas las preguntas.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Establece la visibilidad de los botones de navegación de una página.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Establece la ubicación de los botones de navegación en una página.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Habilite la página de vista previa con todas las preguntas o solo las respondidas.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Se aplica a todas las preguntas de la encuesta. Esta configuración se puede anular mediante reglas de alineación de títulos en niveles inferiores: panel, página o pregunta. Una configuración de nivel inferior anulará las de un nivel superior.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Un símbolo o una secuencia de símbolos que indican que se requiere una respuesta.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Introduzca un número o una letra con la que desee empezar a numerar.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Seleccione si desea que el primer campo de entrada de cada página esté listo para la entrada de texto.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Mantiene el orden original de las preguntas o las aleatoriza. El efecto de esta configuración solo es visible en la pestaña Vista previa.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Solo para preguntas de entrada de texto.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Solo para comentarios de preguntas.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Establece el número de líneas mostradas en las áreas de texto para los comentarios de las preguntas. Si la entrada ocupa más líneas, aparece la barra de desplazamiento.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Seleccione si desea que los comentarios de las preguntas y las preguntas de texto largo aumenten automáticamente en altura en función de la longitud del texto introducido.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Solo para comentarios de preguntas y preguntas de texto largo.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Las variables personalizadas sirven como variables intermedias o auxiliares que se utilizan en los cálculos de formularios. Toman las entradas de los encuestados como valores de origen. Cada variable personalizada tiene un nombre único y una expresión en la que se basa.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Seleccione si desea que el valor calculado de la expresión se guarde junto con los resultados de la encuesta.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Un desencadenador es un evento o condición que se basa en una expresión. Una vez que la expresión se evalúa como \"verdadera\", un desencadenador desencadena una acción. Opcionalmente, una acción de este tipo puede tener una pregunta de destino a la que afecta.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Elija si desea o no borrar los valores de las preguntas ocultas por la lógica condicional y cuándo hacerlo.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Elija entre: \"Al perder el foco\": el valor se actualiza cuando el campo de entrada pierde el foco; \"Mientras escribes\": el valor se actualiza en tiempo real, a medida que los usuarios escriben.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "El valor de la izquierda sirve como identificador de columna que se usa en las reglas condicionales, el valor de la derecha se muestra a los encuestados.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "El valor de la izquierda sirve como un ID de fila que se usa en las reglas condicionales, el valor de la derecha se muestra a los encuestados.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Acepta valores CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Acepta valores CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Visible solo si al menos una columna muestra los valores totales establecidos con \"Método de agregación\" o \"Expresión de valor total\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Establece la ubicación de un mensaje de error en relación con una celda con entrada no válida. La opción \"Heredar\" aplica la configuración de la propiedad \"Alineación de mensajes de error\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Establece la ubicación de los mensajes de error para las preguntas anidadas en secciones de detalle. La opción \"Heredar\" aplica la configuración de la propiedad \"Alineación de mensajes de error\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Cuando la propiedad \"Evitar respuestas duplicadas\" está habilitada, un encuestado que intente enviar una entrada duplicada recibirá el siguiente mensaje de error.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Permite calcular los valores totales en función de una expresión. La expresión puede incluir cálculos básicos ('{q1_id} + {q2_id}'), expresiones booleanas ('{edad} > 60') y funciones ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Si la columna especificada contiene valores idénticos, la encuesta arroja el error \"Valor de clave no única\".",
    // "Type a subtitle."
    description: "Escribe un subtítulo.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Elige un idioma para comenzar a crear tu encuesta. Para agregar una traducción, cambie a un nuevo idioma y traduzca el texto original aquí o en la pestaña Traducciones.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Establece la ubicación de una sección de detalles en relación con una fila. Elija entre: \"Ninguno\": no se agrega ninguna expansión; \"Debajo de la fila\": se coloca una expansión de fila debajo de cada fila de la matriz; \"Debajo de la fila, mostrar solo una expansión de fila\": una expansión se muestra solo debajo de una sola fila, las expansiones de fila restantes se contraen.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Elija entre: \"Ninguno\": la imagen mantiene su tamaño original; \"Contener\": se cambia el tamaño de la imagen para que se ajuste manteniendo su relación de aspecto; \"Portada\": la imagen llena toda la caja manteniendo su relación de aspecto; \"Relleno\": la imagen se estira para llenar el cuadro sin mantener su relación de aspecto.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Aumenta gradualmente la altura del campo de entrada a medida que se introducen los datos. Anula el ajuste \"Altura del campo de entrada (en líneas)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "La opción \"Heredar\" aplica una configuración a nivel de encuesta (\"Habilitado\" de forma predeterminada).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Un intervalo de tiempo en segundos después del cual la encuesta avanza automáticamente a la página \"Gracias\". Cuando se establece en 0, cuenta el tiempo dedicado a la encuesta.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Intervalo de tiempo en segundos después del cual la encuesta avanza automáticamente a la página siguiente. Oculta el botón de navegación \"Anterior\". Cuando se establece en 0, cuenta el tiempo dedicado a la página actual.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Habilite esta opción para desencadenar la validación cuando un usuario se centre en un campo de entrada vacío y, a continuación, lo abandone sin realizar ningún cambio.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Un ID de página que no es visible para los encuestados.",
      // "Type a page subtitle."
      description: "Escribe un subtítulo de página.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Un título que se muestra en un botón de navegación en la barra de progreso o en la tabla de contenido (TDC). Si dejas este campo vacío, el botón de navegación utilizará el título o el nombre de la página. Para habilitar la barra de progreso o la tabla de contenido, vaya a \"Encuesta\" → \"Navegación\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Un intervalo de tiempo en segundos después del cual la encuesta avanza automáticamente a la página siguiente.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la página.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura de la página.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Se aplica a todas las preguntas de esta página. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas o paneles individuales. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Superior\" de forma predeterminada).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Establece un ancho coherente para los títulos de las preguntas cuando están alineados a la izquierda de sus cuadros de preguntas. Acepta valores CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Superior\" de forma predeterminada).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Mantiene el orden original de las preguntas o las aleatoriza. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Original\" de forma predeterminada). El efecto de esta configuración solo es visible en la pestaña Vista previa.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Establece la visibilidad de los botones de navegación en la página. La opción \"Heredar\" aplica la configuración de nivel de encuesta, que por defecto es \"Visible\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Esta tabla le permite configurar cada columna de cuadrícula en la página. Establece automáticamente el porcentaje de ancho para cada columna en función del número máximo de elementos en una fila. Para personalizar el diseño de la cuadrícula, ajuste manualmente estos valores y defina el ancho del título para todas las preguntas de cada columna."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Establece la ubicación de un temporizador en una página.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Elija entre: \"Bloqueado\": los usuarios no pueden expandir ni contraer paneles; \"Contraer todo\": todos los paneles comienzan en un estado contraído; \"Expandir todo\": todos los paneles comienzan en un estado expandido; \"Primero expandido\": solo el primer panel se expande inicialmente.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Introduzca un nombre de propiedad compartida dentro de la matriz de objetos que contiene las direcciones URL de los archivos de imagen o vídeo que desea mostrar en la lista de opciones.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "El valor de la izquierda sirve como un identificador de elemento utilizado en las reglas condicionales, el valor de la derecha se muestra a los encuestados.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Escriba un título fácil de usar para mostrar.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Garantiza que los usuarios no completen la encuesta hasta que se carguen los archivos.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Acepta valores CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Acepta valores CSS (px, %, in, pt, etc.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Acepta valores CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Un identificador de combinación es una clave personalizada que puede asignar a varias preguntas para vincularlas y sincronizar sus valores. Estos valores se combinarán en una sola matriz u objeto y se almacenarán en los resultados de la encuesta utilizando la clave como nombre de propiedad.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Un valor que se muestra en las preguntas HTML y en los títulos dinámicos y las descripciones de los elementos de la encuesta cuando el valor de la pregunta está vacío.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Cuando se selecciona, esta configuración muestra un valor de visualización en lugar de un valor de ID en las preguntas HTML y en los títulos dinámicos y las descripciones de los elementos de la encuesta.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Elija si desea o no borrar los valores de las preguntas ocultos por la lógica condicional y cuándo hacerlo. La opción \"Heredar\" aplica la configuración de nivel de encuesta (\"Al finalizar la encuesta\" de forma predeterminada).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Elija entre: \"Todas\": copia todas las opciones de elección de la pregunta seleccionada; \"Seleccionado\": copia dinámicamente solo las opciones de elección seleccionadas; \"No seleccionado\": copia dinámicamente solo las opciones de elección no seleccionadas. Las opciones \"Ninguno\" y \"Otro\" se copian de forma predeterminada si están habilitadas en la pregunta de origen.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Esta configuración especifica qué columna de matriz o pregunta de panel debe proporcionar los identificadores.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Esta configuración especifica qué columna de matriz o pregunta de panel debe proporcionar los textos de visualización.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Seleccione esta opción para permitir que los encuestados agreguen sus propias opciones si la opción deseada no está disponible en el menú desplegable. Las opciones personalizadas solo se almacenarán temporalmente durante la sesión actual del navegador.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Cuando se selecciona, los usuarios pueden incluir entradas adicionales en un cuadro de comentarios independiente.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Muestra cada opción de opción especial (\"Ninguno\", \"Otro\", \"Seleccionar todo\") en una nueva línea, incluso cuando se utiliza un diseño de varias columnas.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Especifique la ubicación dentro del dataset de servicio donde se encuentra la matriz de objetos de destino. Déjelo en vacío si la dirección URL ya apunta a la matriz.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Escriba un nombre de propiedad uniforme dentro de la matriz de objetos que contiene los valores que desea mostrar en la lista de opciones.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Seleccione esta opción para permitir que el servicio devuelva una respuesta o matriz vacía.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de todas las opciones de elección.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "El valor de la izquierda sirve como un identificador de elemento utilizado en las reglas condicionales, el valor de la derecha se muestra a los encuestados.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" selecciona entre los modos \"Botones\" y \"Desplegable\" en función del ancho disponible. Cuando el ancho es insuficiente para mostrar los botones, la pregunta muestra un menú desplegable."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Permite conectar preguntas que producen resultados en diferentes formatos. Cuando estas preguntas se vinculan entre sí mediante un identificador de combinación, esta propiedad compartida almacena los valores de pregunta seleccionados.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Seleccione si desea actualizar el contenido del menú desplegable para que coincida con la consulta de búsqueda que un usuario está escribiendo en el campo de entrada.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Un valor que se debe guardar en los resultados de la encuesta cuando los encuestados dan una respuesta positiva.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Un valor que se debe guardar en los resultados de la encuesta cuando los encuestados dan una respuesta negativa.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "No se recomienda deshabilitar esta opción, ya que invalida la imagen de vista previa y dificulta que un usuario comprenda si los archivos se han cargado.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Activa un mensaje que le pide que confirme la eliminación del archivo.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Habilite esta opción para clasificar solo las opciones seleccionadas. Los usuarios arrastrarán los elementos seleccionados de la lista de opciones para ordenarlos dentro del área de clasificación.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Ingrese una lista de opciones que se sugerirán al encuestado durante la entrada.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "La configuración solo cambia el tamaño de los campos de entrada y no afecta al ancho del cuadro de pregunta.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Establece un ancho consistente para todas las etiquetas de artículos. Acepta valores CSS (px, %, in, pt, etc.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Seleccione cómo alinear el valor de entrada dentro del campo. La configuración predeterminada \"Auto\" alinea el valor de entrada a la derecha si se aplica el enmascaramiento numérico o de moneda y a la izquierda si no se aplica.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Sirve como sustituto cuando la imagen no se puede mostrar en el dispositivo de un usuario y por motivos de accesibilidad.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Define el color del emoji seleccionado cuando el tipo de icono de clasificación se establece en \"Emoticonos\". Elija entre: \"Predeterminado\": el emoji seleccionado aparece en el color predeterminado de la encuesta; \"Escala\": el emoji seleccionado hereda el color de la escala de calificación.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Un identificador de expresión que no es visible para los encuestados.",
      // "Type an expression subtitle."
      description: "Escriba un subtítulo de expresión.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Una expresión puede incluir cálculos básicos ('{q1_id} + {q2_id}'), condiciones ('{edad} > 60') y funciones ('iif()', 'hoy()', 'edad()', 'min()', 'max()', 'avg()', etc.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Seleccione esta opción para almacenar el valor de la opción \"Otro\" como una propiedad independiente en los resultados de la encuesta.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Utilice {0} como marcador de posición para el valor real.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Consulte la descripción del atributo [accept](https://www.w3schools.com/tags/att_input_accept.asp) para obtener más información.",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Organiza las opciones de elección en un diseño de varias columnas. Cuando se establece en 0, las opciones se muestran en una sola línea. Se aplica solo a las columnas con \"Tipo de entrada de celda\" establecido en Grupo de botones de opción o Casillas de verificación.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Seleccione el tipo de datos que puede recuperar el explorador del usuario. Estos datos se obtienen de valores anteriores ingresados por el usuario o de valores preconfigurados si el usuario ha guardado alguno para completarlos automáticamente.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Se aplica cuando \"Tipo de fuente\" es \"Archivos locales\" o cuando la cámara no está disponible",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Se aplica cuando \"Tipo de fuente\" es \"Cámara\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Se aplica cuando \"Tipo de fuente\" es \"Archivos locales o cámara\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Organiza las opciones de elección en un diseño de varias columnas. Cuando se establece en 0, las opciones se muestran en una sola línea.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Seleccione si desea almacenar el valor de la pregunta con una máscara aplicada en los resultados de la encuesta."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "El patrón puede contener literales de cadena y los siguientes marcadores de posición: '9': para un dígito; 'a' - para una letra mayúscula o minúscula; '#' - para un dígito o una letra mayúscula o minúscula. Use la barra invertida '\\' para escapar de un carácter."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "El patrón puede contener caracteres separadores y los siguientes marcadores de posición:<br>'m' - Número de mes.<br>'mm': número de mes, con cero a la izquierda para valores de un solo dígito. <br>'d' - Día del mes. <br>'dd': día del mes, con cero a la izquierda para valores de un solo dígito. <br>'yy': los dos últimos dígitos del año. <br>'yyyy' - Año de cuatro dígitos. <br>'H' - Horas en formato de 24 horas. <br>'HH': horas en formato de 24 horas, con cero a la izquierda para valores de un solo dígito. <br>'h' - Horas en formato de 12 horas. <br>'hh': horas en formato de 12 horas, con cero a la izquierda para valores de un solo dígito. <br>'MM' - Actas. <br>'ss' - Segundos. <br>'TT': período de reloj de 12 horas en mayúsculas (AM/PM). <br>'tt' - Período de reloj de 12 horas en minúsculas (am/pm)."
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
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Esta configuración solo se aplica a las preguntas fuera de un panel.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Establece un color complementario que resalta los elementos clave de la encuesta.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Ajusta la transparencia de los paneles y cuadros de preguntas en relación con el fondo de la encuesta.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Ajusta la transparencia de los elementos de entrada en relación con el fondo de la encuesta.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Define el radio de vértice de todos los elementos rectangulares. Active el modo avanzado si desea establecer valores de radio de vértice individuales para elementos de entrada o paneles y cuadros de preguntas.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Establece el color de fondo principal de la encuesta."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "La opción \"Igual que el contenedor\" ajusta automáticamente el ancho del área de contenido del encabezado para que quepa en el elemento HTML en el que se coloca la encuesta.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "El ancho del área de encabezado que contiene el título y la descripción de la encuesta, medido en píxeles.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Cuando se habilita, la parte superior de la encuesta se superpone a la parte inferior del encabezado.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Cuando se establece en 0, la altura se calcula automáticamente para acomodar el contenido del encabezado."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "La opción \"Igual que el contenedor\" ajusta automáticamente el ancho del área de la barra de progreso para que quepa en el elemento HTML en el que se coloca la encuesta.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Se utiliza cuando el 'Diseño de encuesta' se establece en 'Campo de entrada único por página'. En este diseño, la matriz se divide para que cada campo de entrada aparezca en una página separada. Use el marcador de posición {rowIndex} para insertar la numeración automática, {rowTitle} o {rowName} para hacer referencia al título o identificador de la fila y {row.columnid} para incluir el valor de una columna de matriz específica."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "título",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Dejarlo vacío, si es lo mismo que 'Name'"
    },
    // "Allow multiple selection"
    multiSelect: "Permitir múltiple selección",
    // "Show image and video captions"
    showLabel: "Mostrar leyenda de imagen",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Cambiar el orden de Sí y No",
    // "Value"
    value: "Valor",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Alineación de tabulaciones",
    // [Auto-translated] "File source type"
    sourceType: "Tipo de origen de archivo",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Ajuste al contenedor",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Establecer expresión de valor",
    // "Description"
    description: "Descripción", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Ajuste del logotipo",
    // [Auto-translated] "Pages"
    pages: "Páginas", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Preguntas", // Auto-generated string
    // "Triggers"
    triggers: "disparadores",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Variables personalizadas",
    // [Auto-translated] "Survey id"
    surveyId: "ID de la encuesta", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "ID de publicación de la encuesta", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "La encuesta muestra el ahorro de datos", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "Alineación de la descripción de la pregunta",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Tipo de barra de progreso", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Mostrar tabla de contenido (TDC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Alineación de la tabla de contenido",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Patrón de título de pregunta", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Modo de ancho de topografía",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Mostrar información de la marca", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Usar valores de visualización en textos dinámicos",
    // "Visible if"
    visibleIf: "visible si", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Expresión de valor predeterminada",
    // "Required if"
    requiredIf: "Requerido si", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Restablecer valor si",
    // [Auto-translated] "Set value if"
    setValueIf: "Establezca el valor si",
    // "Validation rules"
    validators: "Validadores",
    // [Auto-translated] "Bindings"
    bindings: "Enlaces", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Renderizar como", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "Adjuntar elementos originales", // Auto-generated string
    // "Choices"
    choices: "opciones",
    // "Choices by url"
    choicesByUrl: "opciones por URL", // Auto-generated string
    // "Currency"
    currency: "divisa", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Sugerencia de celda", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Total máximo de fracción de dígitos", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Total de dígitos de fracción mínima", // Auto-generated string
    // "Columns"
    columns: "columnas", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Elementos de detalle", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Permitir acciones adaptables", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Valor por defecto Fila", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Expandir automáticamente los detalles de las nuevas filas",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Opciones de carga diferida habilitadas", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Opciones de tamaño de página de carga diferida", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Componente de campo de entrada", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Componente de elemento", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Máximo", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Expresión de valor mínimo", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Expresión de valor máximo", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Paso", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Elementos para sugerir automáticamente",
    // "Input field width (in characters)"
    inputSize: "artículos",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Ancho de la etiqueta del artículo",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Alineación de valores de entrada",
    // [Auto-translated] "Elements"
    elements: "Elementos", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Contenido", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Título de navegación", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Descripción de navegación", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Toque largo", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Expandir el campo de entrada dinámicamente",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Habilitar el identificador de cambio de tamaño",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Aceptar devolución de transporte", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Modo de visualización",
    // [Auto-translated] "Rate type"
    rateType: "Tipo de tarifa", // Auto-generated string
    // "Label"
    label: "etiqueta", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "Modo de contenido",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "Ajuste de imagen y miniatura",
    // [Auto-translated] "Alt text"
    altText: "Texto alternativo",
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
    runExpression: "Ejecutar expresión", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Mostrar pie de foto", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Nombre del icono", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Tamaño del icono", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Precisión", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Área del controlador de arrastre de matriz", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Imagen de fondo",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Ajuste de imagen de fondo", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Datos adjuntos de imagen de fondo", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Opacidad de fondo", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Permitir clasificación selectiva",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Alineación del área de clasificación",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Texto para mostrar si todas las opciones están seleccionadas",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Texto de marcador de posición para el área de clasificación",
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
    themeName: "Nombre del tema"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Modo avanzado",
    // "Page"
    pageTitle: "Fuente del título de la página",
    // "Question box"
    questionTitle: "Fuente del título de la pregunta",
    // "Input element"
    editorPanel: "Elemento de entrada",
    // [Auto-translated] "Lines"
    lines: "Lineas",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Predeterminado",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Cernerse",
    // [Auto-translated] "Selected"
    primaryLightColor: "Seleccionado",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Color de fondo",
    // "Corner radius"
    cornerRadius: "Radio de esquina",
    // [Auto-translated] "Default background"
    backcolor: "Fondo predeterminado",
    // [Auto-translated] "Hover background"
    hovercolor: "Pasar el cursor de fondo",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Decoración de bordes",
    // [Auto-translated] "Font color"
    fontColor: "Color de la fuente",
    // [Auto-translated] "Background color"
    backgroundColor: "Color de fondo",
    // [Auto-translated] "Default color"
    primaryForecolor: "Color predeterminado",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Color deshabilitado",
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
      default: "Predeterminado",
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
      sc2020: "Creador de encuestas 2020",
      // [Auto-translated] "Light"
      "default-light": "Luz",
      // [Auto-translated] "Dark"
      "default-dark": "Oscuro",
      // [Auto-translated] "Contrast"
      "default-contrast": "Contraste"
    }
  }
};

setupLocale({ localeCode: "es", strings: spanishTranslation });