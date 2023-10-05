import { editorLocalization } from "survey-creator-core";

var spanishTranslation = {
  // survey templates
  survey: {
    edit: "Editar",
    externalHelpLink: "Mira y aprende a crear encuestas",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "¡Arrastra un tipo de pregunta para empezar a diseñar tu encuesta!",
    addLogicItem: "Cree una regla para personalizar el flujo de la encuesta",
    copy: "Copiar",
    duplicate: "Duplicar",
    addToToolbox: "Añadir a la caja de herramientas",
    deletePanel: "Eliminar panel",
    deleteQuestion: "Eliminar pregunta",
    convertTo: "Convertir a",
    drag: "Elemento de arrastre",
  },
  // Question types
  qt: {
    default: "Defecto",
    checkbox: "Caja",
    comment: "Comentario",
    imagepicker: "Selector de imágenes",
    ranking: "Ranking",
    image: "Imagen",
    dropdown: "Desplegable",
    tagbox: "Menú desplegable de selección múltiple",
    file: "Archivo",
    html: "Html",
    matrix: "Matriz (selección única)",
    matrixdropdown: "Matriz (opción múltiple)",
    matrixdynamic: "Matriz (filas dinámicas)",
    multipletext: "Múltiples textos",
    panel: "Panel",
    paneldynamic: "Panel (paneles dinámicos)",
    radiogroup: "Grupo de radio",
    rating: "Clasificación",
    text: "Entrada única",
    boolean: "Booleano",
    expression: "Expresión (solo lectura)",
    signaturepad: "Almohadilla de firma",
    buttongroup: "Grupo de botones"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Predeterminado ({0})",
    survey: "Encuesta",
    settings: "Configuración de la encuesta",
    settingsTooltip: "Configuración de encuesta abierta",
    surveySettings: "Opciones encuesta",
    surveySettingsTooltip: "Abrir opciones encuesta",
    themeSettings: "Configuración del tema",
    themeSettingsTooltip: "Abrir la configuración del tema",
    showPanel: "Mostrar panel",
    hidePanel: "Ocultar panel",
    prevSelected: "Seleccionar anterior",
    nextSelected: "Seleccionar siguiente",
    surveyTypeName: "Encuesta",
    pageTypeName: "Página",
    panelTypeName: "Panel",
    questionTypeName: "Pregunta",
    columnTypeName: "Columna",
    addNewPage: "Añadir nueva página",
    moveRight: "Desplácese a la derecha",
    moveLeft: "Desplácese a la izquierda",
    deletePage: "Eliminar página",
    editPage: "Editar página",
    edit: "Editar",
    newPageName: "Página",
    newQuestionName: "Pregunta",
    newPanelName: "Panel",
    newTextItemName: "Texto",
    testSurvey: "Encuesta de prueba",
    themeSurvey: "Temas",
    defaultV2Theme: "Predeterminado",
    modernTheme: "Moderno",
    defaultTheme: "Incumplimiento (heredado)",
    testSurveyAgain: "Encuesta de prueba de nuevo",
    testSurveyWidth: "Ancho de la encuesta:",
    navigateToMsg: "Tuviste que navegar a:",
    logic: "Lógica de la encuesta",
    embedSurvey: "Incrustar la encuesta",
    translation: "Traducción",
    saveSurvey: "Guardar la encuesta",
    saveSurveyTooltip: "Guardar la encuesta",
    designer: "Diseñador de la encuesta",
    jsonEditor: "Editor de JSON",
    jsonHideErrors: "Ocultar errores",
    jsonShowErrors: "Mostrar errores",
    undo: "Deshacer",
    redo: "Rehacer",
    undoTooltip: "Deshacer el último cambio",
    redoTooltip: "Rehacer el cambio",
    showMoreChoices: "Mostrar más",
    showLessChoices: "Mostrar menos",
    copy: "Copiar",
    cut: "Cortar",
    paste: "Pegar",
    copyTooltip: "Copia selección al portapapeles",
    cutTooltip: "Corta la selección al portapapeles",
    pasteTooltip: "Pega de portapapeles",
    options: "Opciones",
    generateValidJSON: "Generar un JSON válido",
    generateReadableJSON: "Generar JSON legible",
    toolbox: "Caja de herramientas",
    "property-grid": "Propiedades",
    propertyGridFilteredTextPlaceholder: "Escribe para buscar...",
    toolboxGeneralCategory: "general",
    toolboxChoiceCategory: "Preguntas de selección",
    toolboxTextCategory: "Preguntas entrada de texto",
    toolboxContainersCategory: "Contenedores",
    toolboxMatrixCategory: "Preguntas matriz",
    toolboxMiscCategory: "Misc",
    correctJSON: "Por favor, corrija JSON",
    surveyResults: "Resultado de la encuesta:",
    surveyResultsTable: "Como Tabla",
    surveyResultsJson: "Como JSON",
    resultsTitle: "Título de la pregunta",
    resultsName: "Nombre de la pregunta",
    resultsValue: "Valor de respuesta",
    resultsDisplayValue: "Valor de visualización",
    modified: "Modificada",
    saving: "Guardando",
    saved: "Guardado",
    propertyEditorError: "error:",
    saveError: "¡Error!El contenido del editor no se ha guardado",
    translationPropertyGridTitle: "Opciones de lenguaje",
    themePropertyGridTitle: "Configuración del tema",
    translationLanguages: "Lenguajes",
    translationDeleteLanguage: "¿Está seguro de que desea eliminar todas las cadenas de este idioma?",
    translationAddLanguage: "Seleccione el idioma para traducir",
    translationShowAllStrings: "Mostrar todos los textos",
    translationShowUsedStringsOnly: "Sólo textos utilizados",
    translationShowAllPages: "Mostrar todas las páginas",
    translationNoStrings: "Sin cuerdas para traducir. Por favor, cambie el filtro",
    translationExportToSCVButton: "Exportar a CSV",
    translationImportFromSCVButton: "Importación de CSV",
    translateUsigAI: "Traducir automáticamente todo",
    translationDialogTitle: "Cadenas sin traducir",
    translationMergeLocaleWithDefault: "Merge {0} con lugar predeterminado",
    translationPlaceHolder: "Traducción...",
    themeExportButton: "Exportar",
    themeImportButton: "Importación",
    themeResetButton: "Restablecer la configuración predeterminada del tema",
    bold: "Negrita",
    italic: "Itálica",
    underline: "Subrayar",
    addNewQuestion: "Añadir pregunta",
    selectPage: "Seleccionar página ...",
    carryForwardChoicesCopied: "Las opciones se copian de",
    htmlPlaceHolder: "Contenido HTML irá aquí.",
    panelPlaceHolder: "Arrastra aquí una pregunta desde la caja de herramientas.",
    surveyPlaceHolder: "La encuesta está vacía. Arrastra una pregunta desde la caja de herramientas o haz click en el botón de abajo.",
    imagePlaceHolder: "Arrastre y suelte una imagen aquí o haga clic en el botón de abajo y elija una imagen para cargar",
    imageChooseImage: "Elegir imagen",
    addNewTypeQuestion: "Añadir {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGOTIPO]",
    auto: "Automático",
    choices_Item: "Artículo ",
    lg: {
      addNewItem: "Añadir nueva regla",
      empty_tab: "Crea una regla para personalizar el flujo de la encuesta.",
      page_visibilityName: "Visibilidad de la pagina",
      page_enableName: "Habilitar (deshabilitar) página",
      panel_visibilityName: "Visibilidad del panel",
      panel_enableName: "Panel habilitar / deshabilitar",
      question_visibilityName: "Pregunta visibilidad",
      question_enableName: "Pregunta habilitar / deshabilitar",
      question_requireName: "Pregunta opcional requerida",
      question_resetValueName: "Restablecer valor de pregunta",
      column_visibilityName: "Mostrar (ocultar) columna",
      column_enableName: "Habilitar (deshabilitar) columna",
      column_requireName: "Hacer columna requerida",
      column_resetValue: "Restablecer el valor de la columna",
      trigger_completeName: "Encuesta completa",
      trigger_setvalueName: "Establecer valor de la pregunta",
      trigger_copyvalueName: "Copiar valor de la pregunta",
      trigger_skipName: "Saltar a la pregunta",
      trigger_runExpressionName: "Ejecutar la expresión personalizada",
      completedHtmlOnConditionName: "Texto personalizado 'Página de agradecimiento'",
      page_visibilityDescription: "Haga que la página sea visible cuando la expresión lógica vuelva verdadera. De lo contrario, manténgalo invisible",
      panel_visibilityDescription: "Haga que el panel sea visible cuando la expresión lógica vuelva verdadera. De lo contrario, manténgalo invisible",
      panel_enableDescription: "Haga el panel, y todos los elementos dentro de él, habiliten cuando la expresión lógica devuelve verdadero. De lo contrario, manténgalos deshabilitados",
      question_visibilityDescription: "Haz que la pregunta sea visible cuando la expresión lógica se devuelve 'verdadero'. De lo contrario, se mantiene invisible",
      question_enableDescription: "Haz que la pregunta se habilite cuando la expresión lógica devuelve 'verdadero'. De lo contrario, se mantiene deshabilitado",
      question_requireDescription: "La pregunta se requiere cuando la expresión lógica devuelve 'verdadero'",
      trigger_completeDescription: "Cuando la expresión lógica devuelve 'verdadero', la encuesta se completa y el usuario final ve la 'página de agradecimiento'",
      trigger_setvalueDescription: "Cuando se cambian los valores de las preguntas, que se usan en la expresión lógica, se cambian y la expresión lógica devuelve 'verdadero', entonces el valor se establece en la pregunta seleccionada",
      trigger_copyvalueDescription: "Cuando se cambian los valores de las preguntas, que se usan en la expresión lógica, se cambian y la expresión lógica devuelve 'verdadero', entonces el valor de una pregunta seleccionada se copia a otra pregunta seleccionada",
      trigger_skipDescription: "Cuando la expresión lógica devuelve 'verdadero', la encuesta salta a la pregunta seleccionada",
      trigger_runExpressionDescription: "Cuando la expresión lógica devuelve 'verdadero', entonces se realiza la expresión personalizada. Es posible que opcionalmente establezca este resultado de expresión en la pregunta seleccionada",
      completedHtmlOnConditionDescription: "Si la expresión lógica devuelve 'verdadero', entonces el texto predeterminado para la 'página de agradecimiento' se cambia por el texto dado",
      itemExpressionText: "Cuando la expresión: '{0}' devuelve VERDADERO:", //{0} - the expression
      itemEmptyExpressionText: "Nueva regla",
      page_visibilityText: "Hacer la página {0} Visible", //{0} page name
      panel_visibilityText: "Hacer panel {0} visible", //{0} panel name
      panel_enableText: "Hacer panel {0} habilitar", //{0} panel name
      question_visibilityText: "Hacer Pregunta {0} Visible", //{0} question name
      question_enableText: "Hacer Pregunta {0} Habilitar", //{0} question name
      question_requireText: "Hacer la pregunta {0} requerida", //{0} question name
      column_visibilityText: "hacer la columna {0} de la pregunta {1} visible", //{0} column name, {1} question name
      column_enableText: "hacer la columna {0} de la pregunta {1} activa", //{0} column name, {1} question name
      column_requireText: "hacer la columna {0} de la pregunta {1} requerida", //{0} column name, {1} question name
      trigger_completeText: "La encuesta se completa",
      trigger_setvalueText: "En cuestión: {0} valor {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Valor de pregunta claro: {0}", //{0} question name
      trigger_copyvalueText: "Copiar en cuestión: {0} valor de la pregunta {1}", //{0} and {1} question names
      trigger_skipText: "Encuesta salta a la pregunta {0}", //{0} question name
      trigger_runExpressionText1: "Expresión de ejecución: '{0}'", //{0} the expression
      trigger_runExpressionText2: "y establecer su resultado en cuestión: {0}", //{0} question name
      completedHtmlOnConditionText: "Mostrar texto personalizado para la 'gracias página'",
      showAllQuestions: "Todas las preguntas",
      showAllActionTypes: "Todos los tipos de acción",
      conditions: "Condición(es)",
      actions: "Comportamiento",
      expressionEditorTitle: "Definir la(s) condición(es)",
      actionsEditorTitle: "Definir la(s) acción(es)",
      deleteAction: "Eliminar acción",
      addNewAction: "Añadir nueva acción",
      selectedActionCaption: "Seleccione una acción para agregar ...",
      expressionInvalid: "La expresión lógica está vacía o inválida. Por favor corríjalo",
      noActionError: "Por favor, agregue al menos una acción",
      actionInvalid: "Por favor, solucione problemas en su(s) acción(es)",
      uncompletedRule_title: "Las reglas lógicas están incompletas",
      uncompletedRule_text: "No ha completado algunas de las reglas lógicas. Si deja la pestaña ahora, los cambios se perderán. ¿Aún desea salir de la pestaña sin completar los cambios?",
      uncompletedRule_apply: "Sí",
      uncompletedRule_cancel: "No, quiero completar las reglas",
      // expressionSetup: "",
      actionsSetup: " "
    }
  },
  // Property Editors
  pe: {
    apply: "Solicitar",
    ok: "ok",
    save: "Guardar",
    clear: "Limpiar",
    saveTooltip: "Guardar",
    cancel: "Cancelar",
    set: "Poner",
    reset: "Reiniciar",
    change: "Cambiar",
    refresh: "Actualizar",
    close: "Cerrar",
    delete: "Borrar",
    add: "Agregar",
    addNew: "Añadir nuevo",
    addItem: "Haga clic para agregar un artículo ...",
    removeItem: "Haga click para eliminar el elemento...",
    dragItem: "Arrastra el elemento",
    addOther: "Otra",
    addSelectAll: "Seleccionar todo",
    addNone: "Ninguna",
    removeAll: "Eliminar todo",
    edit: "Editar",
    back: "Volver sin guardar",
    backTooltip: "Volver sin guardar",
    saveAndBack: "Guardar y volver",
    saveAndBackTooltip: "Guardar y volver",
    doneEditing: "Hecho",
    editChoices: "Editar opciones",
    showChoices: "Mostrar opciones",
    move: "Moverse",
    empty: "<vaciar>",
    emptyValue: "El valor está vacío",
    fastEntry: "Entrada rápida",
    fastEntryNonUniqueError: "Valor '{0}' no es único",
    fastEntryChoicesCountError: "Por favor, limita el númeror de elementos de {0} a {1}",
    fastEntryChoicesMinCountError: "Introduce al menos {0} artículos",
    fastEntryPlaceholder: "Puedes introducir datos en el siguiente formato:\nvalue1|text\nvalue2",
    formEntry: "Entrada de forma",
    testService: "Probar el servicio",
    itemSelectorEmpty: "Por favor seleccione el elemento",
    conditionActionEmpty: "Por favor seleccione la acción",
    conditionSelectQuestion: "Seleccionar pregunta ...",
    conditionSelectPage: "Seleccionar página ...",
    conditionSelectPanel: "Seleccionar panel ...",
    conditionValueQuestionTitle: "Por favor ingrese / seleccione el valor",
    expressionHelp: "Puede usar soportes rizados para obtener acceso a los valores de la pregunta: {pregunta1} + {pregunta2}, ({precio} * {cantidad}) * (100 - {descuento}).Puede usar funciones como: IIF (), hoy (), edad (), min (), max (), cuenta (), AVG () y otros",
    aceEditorHelp: "Presione CTRL + ESPACIO para obtener sugerencia de completar la expresión",
    aceEditorRowTitle: "Fila actual",
    aceEditorPanelTitle: "Panel actual",
    showMore: "Para más detalles, por favor revise la documentación",
    assistantTitle: "Preguntas disponibles:",
    cellsEmptyRowsColumns: "Debe haber al menos una columna o fila",
    showPreviewBeforeComplete: "Previsualizar respuestas entes de enviar la encuesta",
    overridingPropertyPrefix: "Establecido por ",
    resetToDefaultCaption: "Restablecimiento",
    propertyIsEmpty: "Porfavor introduzca un valor",
    propertyIsNoUnique: "Por favor ingrese un valor único",
    propertyNameIsNotUnique: "Por favor ingrese un nombre único",
    propertyNameIsIncorrect: "No utilice palabras reservadas: \"elemento\", \"elección\", \"panel\", \"fila\".",
    listIsEmpty: "Añadir un nuevo artículo",
    "listIsEmpty@choices": "No se han añadido opciones todavía",
    "addNew@choices": "Añade una opción",
    expressionIsEmpty: "La expresión está vacía",
    value: "Valor",
    text: "Texto",
    rowid: "ID de fila",
    imageLink: "Enlace de imágen",
    columnEdit: "Editar columna: {0}",
    itemEdit: "Editar artículo: {0}",
    url: "URL",
    path: "Camino",
    valueName: "Nombre de valor",
    choicesbyurl: {
      valueName: "Obtener valores del siguiente campo JSON"
    },
    titleName: "Nombre del título",
    imageLinkName: "Obtener URLs de imagen desde el siguiente campo JSON",
    allowEmptyResponse: "Permitir respuestas vacías",
    titlePlaceholder: "Título de entrada aquí",
    surveyTitlePlaceholder: "Título de la encuesta de entrada aquí",
    pageTitlePlaceholder: "Título de la página de entrada aquí",
    descriptionPlaceholder: "Ingrese una descripción",
    surveyDescriptionPlaceholder: "Ingrese una descripción de la encuesta",
    pageDescriptionPlaceholder: "Ingrese una descripción de la página",
    showOtherItem: "Tiene opción 'Otro'",
    otherText: "Cambiar texto 'Otro'",
    showNoneItem: "Tiene opcion 'Ninguno'",
    noneText: "Cambiar texto 'Ninguno'",
    showSelectAllItem: "Tiene opción 'Selecionar todo'",
    selectAllText: "Cambiar texto de 'Seleccionar todo'",
    choicesMin: "Valor mínimo para artículos generados automáticos",
    choicesMax: "Valor máximo para artículos generados automáticos",
    choicesStep: "La diferencia entre los artículos generados automáticos",
    name: "Nombre",
    title: "Título",
    cellType: "Tipo de célula",
    colCount: "Recuento de columnas",
    choicesOrder: "Seleccione el orden de las opciones",
    visible: "¿Es visible?",
    isRequired: "¿Se requiere?",
    markRequired: "Marcar según sea necesario",
    removeRequiredMark: "Quitar la marca requerida",
    isAllRowRequired: "Requerir respuesta para todas las filas",
    requiredErrorText: "Texto de error requerido",
    startWithNewLine: "¿Empieza con la nueva línea?",
    rows: "Número de filas",
    cols: "Recuento de columnas",
    placeholder: "Placeholder de entrada",
    showPreview: "Mostrar área de vista previa",
    storeDataAsText: "Tienda el contenido del archivo en el resultado de JSON como texto",
    maxSize: "Tamaño máximo de archivo en bytes",
    imageHeight: "Altura de imagen",
    imageWidth: "Ancho de la imagen",
    rowCount: "Número de filas",
    columnLayout: "Diseño de columnas",
    addRowLocation: "Añadir la ubicación del botón de la fila",
    addRowText: "Añadir texto de botón de fila",
    removeRowText: "Eliminar el texto del botón de fila",
    rateMin: "Valor mínimo",
    rateMax: "Valor máximo",
    rateStep: "Rango de los valores",
    minRateDescription: "Descripción del valor mínimo",
    maxRateDescription: "Descripción del valor máximo",
    inputType: "Tipo de entrada",
    optionsCaption: "Cambie texto de 'Seleccione'",
    defaultValue: "Valor por defecto",
    cellsDefaultRow: "Textos de celdas predeterminados",
    surveyEditorTitle: "Editar configuración de encuesta",
    qEditorTitle: "Editar: {0}",
    maxLength: "Longitud máxima",
    buildExpression: "Construir",
    editExpression: "Editar",
    and: "y",
    or: "o",
    remove: "Eliminar",
    addCondition: "Añadir condición",
    emptyLogicPopupMessage: "Selecciona una pegunta para epezar a configurar condiciones.",
    if: "Si",
    then: "entonces",
    setToName: "Pregunta target",
    fromName: "Pregunta desde la que copiar su respuesta",
    gotoName: "Pregunta a la que saltar",
    ruleIsNotSet: "La regla no es correcta",
    includeIntoResult: "Incluir en los resultados de la encuesta",
    showTitle: "Mostrar / Ocultar Título",
    expandCollapseTitle: "Expandir / Contraer título",
    locale: "Idioma predeterminado",
    simulator: "Elige dispositivo",
    landscapeOrientation: "Orientación horizontal ",
    portraitOrientation: "Cambiar a orientatión retrato",
    mode: "Modo (editar / leer solamente)",
    clearInvisibleValues: "Claros valores invisibles",
    cookieName: "Nombre de la cookie (para deshabilitar la encuesta de ejecución dos veces localmente)",
    sendResultOnPageNext: "Enviar resultados de encuestas en la página Siguiente",
    storeOthersAsComment: "Almacenar 'Otros' valor en campo separado",
    showPageTitles: "Mostrar descripción de la página",
    showPageNumbers: "Mostrar números de página",
    pagePrevText: "Página de texto del botón anterior",
    pageNextText: "Página Siguiente botón de texto",
    completeText: "Texto completo del botón",
    previewText: "Vista previa del botón del botón",
    editText: "Editar botón de texto",
    startSurveyText: "Texto de inicio de la encuesta",
    showNavigationButtons: "Mostrar botones de navegación (navegación predeterminada)",
    showPrevButton: "Mostrar botón anterior (el usuario puede volver a la página anterior)",
    firstPageIsStarted: "La primera página en la encuesta es una página iniciada",
    showCompletedPage: "Mostrar la página completa al final (HTML finalizado)",
    goNextPageAutomatic: "Al responder todas las preguntas, vaya a la página siguiente automáticamente",
    showProgressBar: "Mostrar barra de progreso",
    questionTitleLocation: "Ubicación del título de la pregunta",
    requiredText: "La pregunta requerida (s) símbolo (s)",
    questionStartIndex: "Índice de inicio de la pregunta (1, 2 o 'A', 'A')",
    showQuestionNumbers: "Mostrar números de pregunta",
    questionTitleTemplate: "Plantilla de título de la pregunta, el valor predeterminado es: '{no}.{requiere} {título} '",
    questionErrorLocation: "Ubicación de error de la pregunta",
    focusFirstQuestionAutomatic: "Enfoca la primera pregunta al cambiar la página",
    questionsOrder: "Orden de elementos en la página",
    maxTimeToFinish: "Tiempo máximo para terminar la encuesta",
    maxTimeToFinishPage: "Tiempo máximo para terminar una página en la encuesta",
    image: {
      imageHeight: "Altura de la imagen (en valores aceptados por CSS)",
      imageWidth: "Ancho de imagen (en valores aceptados por CSS)"
    },
    page: {
      maxTimeToFinish: "Tiempo límite para finalizar la página (en segundos)"
    },
    question: {
      page: "Página padre"
    },
    showTimerPanel: "Mostrar panel de temporizador",
    showTimerPanelMode: "Mostrar modo de panel del temporizador",
    renderMode: "Modo de renderizado",
    allowAddPanel: "Permitir agregar un panel",
    allowRemovePanel: "Permitir eliminar el panel",
    noEntriesText: "Texto de entradas vacías",
    panelAddText: "Añadiendo texto del panel",
    panelRemoveText: "Eliminar texto del panel",
    isSinglePage: "Mostrar todos los elementos en una página",
    html: "Html",
    expression: "Expresión",
    setValue: "Respuesta",
    dataFormat: "Formato imagen",
    allowAddRows: "Permitir añadir filas",
    allowRemoveRows: "Permitir eliminar filas",
    allowRowsDragAndDrop: "Permitor drag and drop de filas",
    responsiveImageSizeHelp: "No aplica si especificas el ancho o alto exacto de la imagen.",
    minImageWidth: "Ancho de imagen mínimo",
    maxImageWidth: "Ancho de imagen máximo",
    minImageHeight: "Alto de imagen mínimo",
    maxImageHeight: "Alto de imagen máximo",
    minValue: "Valor mínimo",
    maxValue: "Valor máximo",
    minLength: "Longitud mínima",
    allowDigits: "Permitir dígitos",
    minCount: "Cantidad mínima",
    maxCount: "Cantidad máxima",
    regex: "Expresión regular",
    surveyvalidator: {
      text: "Mensaje de error",
      expression: "Validación de expresión"
    },
    totalText: "Texto total",
    totalType: "Tipo total",
    totalExpression: "Expresión total",
    totalDisplayStyle: "Estilo de visualización total",
    totalCurrency: "Moneda total",
    totalFormat: "Formato total",
    logo: "Logo (URL o cadene codificada en base64)",
    questionsOnPageMode: "Estructura de la encuesta",
    maxTextLength: "Longitud máxima de la respuesta (en caracteres)",
    maxOthersLength: "Longitud máxima de comentario (en caracteres)",
    autoGrowComment: "Auto-expand de comentario si es necesario",
    allowResizeComment: "Permitir a los usuarios cambiar el tamaño de las áreas de texto",
    textUpdateMode: "Actualizar valor del texto de la pregunta",
    focusOnFirstError: "Fijar foco en la primera respuesta no válida",
    checkErrorsMode: "Ejecutar validación",
    navigateToUrl: "Navegar a URL",
    navigateToUrlOnCondition: "URL dinámica",
    completedBeforeHtml: "Markup para mostrar si el usuario ya completó la encuesta",
    completedHtml: "Markup de página de encuesta completada",
    completedHtmlOnCondition: "Markup de página de encuesta dinámica completada",
    loadingHtml: "Markup para mostrar mienstras que la encuesta se está cargando",
    commentText: "Area de texto de comentario",
    autocomplete: "Tipo autocompletado",
    labelTrue: "Etiqueta \"Verdadero\"",
    labelFalse: "Etiqueta \"Falso\"",
    allowClear: "Mostrar el botón limpiar",
    displayStyle: "Estilo de visualización del valor",
    format: "Cadena formateada",
    maximumFractionDigits: "Número máximo de dígitos de fracción",
    minimumFractionDigits: "Número mínimo de dígitos de fracción",
    useGrouping: "Mostrar seperadores de agrupación",
    allowMultiple: "Permitir múltiples ficheros",
    allowImagesPreview: "Previsualizar imágenes",
    acceptedTypes: "Tipos de fichero aceptados",
    waitForUpload: "Espera a que se complete la carga",
    needConfirmRemoveFile: "Confirmar borrado de fichero",
    detailPanelMode: "Localización del panel de detalle",
    minRowCount: "Mínimo número de filas",
    maxRowCount: "Máximo número de filas",
    confirmDelete: "Confirmar borrado de fila",
    confirmDeleteText: "Mensaje de confirmación",
    paneldynamic: {
      confirmDelete: "Confirmar borrado de panel"
    },
    panelCount: "Número incial de panel",
    minPanelCount: "Número mínimo de paneles",
    maxPanelCount: "Número máximo de paneles",
    panelsState: "Estado de expansión del panel interno",
    templateDescription: "Descripción de plantilla",
    templateTitle: "Título de plantilla",
    panelPrevText: "Tooltip del botón de panel previo",
    panelNextText: "Tooltip del botón de siguiente panel",
    showRangeInProgress: "Mostrar barra de progreso",
    templateTitleLocation: "Localización del título de pregunta",
    panelRemoveButtonLocation: "Localización del botón eliminar panel",
    hideIfRowsEmpty: "Ocultar pregunta si no hay más filas",
    hideColumnsIfEmpty: "Ocultar columnas si no hay filas",
    rateValues: "Valores de tarifa personalizados",
    rateCount: "Recuento de tarifas",
    autoGenerate: "¿Cómo especificar valores de tasa?",
    hideIfChoicesEmpty: "Ocultar la pregunta si no contiene opciones",
    hideNumber: "Ocultar número de pregunta",
    minWidth: "Anchura mímima (en valores aceptados CSS)",
    maxWidth: "Anchura máxima (en valores aceptados CSS)",
    width: "Ancho (en valores aceptados CSS)",
    showHeader: "Mostrar cabeceras de columna",
    horizontalScroll: "Mostrar scrollbar horizontal",
    columnMinWidth: "Anchura mímima de columna (en valores aceptados CSS)",
    rowTitleWidth: "Anchura de cabecera de fila (en valores aceptados CSS)",
    valueTrue: "Valor \"verdadero\"",
    valueFalse: "Valor \"falso\"",
    minErrorText: "Mensaje de error \"El valor está por debajo del mínimo\"",
    maxErrorText: "Mensaje de error \"El valor supera el máximo\"",
    otherErrorText: "Mensaje de error \"Comentario vacío\"",
    keyDuplicationError: "Mensaje de error \"Valor de clave no único\"",
    minSelectedChoices: "Opciones mínimas seleccionadas",
    maxSelectedChoices: "Número máximo de opciones seleccionadas",
    showClearButton: "Mostrar el botón Limpiar",
    showNumber: "Mostrar el número de panel",
    logoWidth: "Ancho de Logo (en valores aceptados CSS)",
    logoHeight: "Alto de Logo (en valores aceptados CSS)",
    readOnly: "Sólo-lectura",
    enableIf: "Editable si",
    emptyRowsText: "Mensaje \"Sin filas\"",
    size: "Tamaño de entrada (en caracteres)",
    separateSpecialChoices: "Opciones de separación especiales (None, Other, Select All)",
    choicesFromQuestion: "Copiar opciones de la siguiente pregunta",
    choicesFromQuestionMode: "Qué opciones a copiar?",
    showCommentArea: "Mostrar el área de comentarios",
    commentPlaceholder: "Marcador de posición del área de comentarios",
    displayRateDescriptionsAsExtremeItems: "Mostrar descripciones de velocidad como valores extremos",
    rowsOrder: "Orden de filas",
    columnsLayout: "Disposición de columnas",
    columnColCount: "Número de columnas anidadas",
    state: "Estado de expansión del panel",
    correctAnswer: "Respuesta correcta",
    defaultPanelValue: "Valores por defecto",
    cells: "Textos de celda",
    keyName: "Columna clave",
    itemvalue: {
      text: "Texto alternativo"
    },
    logoPosition: "Posición del logotipo",
    addLogo: "Añadir logo ...",
    changeLogo: "Cambiar logo ...",
    logoPositions: {
      none: "Eliminar logo",
      left: "Izquierda",
      right: "Derecha",
      top: "En la parte superior",
      bottom: "En la parte inferior"
    },
    tabs: {
      general: "General",
      fileOptions: "Opciones",
      html: "Editor HTML",
      columns: "Columnas",
      rows: "Filas",
      choices: "Opciones",
      items: "Artículos",
      visibleIf: "Visible si",
      enableIf: "Habilitar si",
      requiredIf: "Requerido si",
      rateValues: "Valores de la tasa",
      choicesByUrl: "Opciones de la web",
      matrixChoices: "Opciones predeterminadas",
      multipleTextItems: "Entradas de texto",
      numbering: "Numeración",
      validators: "Validadores",
      navigation: "Navegación",
      question: "Pregunta",
      pages: "Páginas",
      timer: "Horas / cuestionario",
      calculatedValues: "Valores calculados",
      triggers: "Disparadores",
      templateTitle: "Título de la plantilla",
      totals: "Totales",
      logic: "Lógica",
      layout: "Diseño",
      data: "Datos",
      validation: "Validación",
      cells: "Células",
      showOnCompleted: "Mostrar en completado",
      logo: "Logo en el título de la encuesta",
      slider: "Slider",
      expression: "Expresión",
      others: "Otras"
    },
    editProperty: "Editar propiedad '{0}'",
    items: "[Artículos: {0}]",
    choicesVisibleIf: "Opciones son visibles si",
    choicesEnableIf: "Opciones son seleccionables si",
    columnsEnableIf: "Columnas son visibles si",
    rowsEnableIf: "Filas son visibles si",
    indent: "Añadir indents",
    panel: {
      indent: "Añadir indents externos"
    },
    innerIndent: "Añadir indents internos",
    defaultValueFromLastRow: "Tomar valores por defecto de la última fila",
    defaultValueFromLastPanel: "Tomar valores por defecto del último panel",
    enterNewValue: "Por favor, ingrese el valor",
    noquestions: "No hay ninguna pregunta en la encuesta",
    createtrigger: "Por favor crea un gatillo",
    titleKeyboardAdornerTip: "Presione el botón Entrar para editar",
    keyboardAdornerTip: "Presione el botón Entrar para editar el elemento, presione el botón Eliminar para eliminar el elemento, presione ALT Plus Flecha hacia arriba o hacia abajo para mover el elemento",
    triggerOn: "En",
    triggerMakePagesVisible: "Hacer visibles las páginas:",
    triggerMakeQuestionsVisible: "Hacer elementos visibles:",
    triggerCompleteText: "Completa la encuesta si tiene éxito",
    triggerNotSet: "El gatillo no se establece",
    triggerRunIf: "Correr si",
    triggerSetToName: "Cambio de valor de:",
    triggerFromName: "Copie el valor de:",
    triggerRunExpression: "Ejecute esta expresión:",
    triggerSetValue: "a:",
    triggerGotoName: "Ir a la pregunta:",
    triggerIsVariable: "No coloque la variable en el resultado de la encuesta",
    triggerRunExpressionEmpty: "Por favor ingrese una expresión válida",
    emptyExpressionPlaceHolder: "Escribir expresión aquí...",
    noFile: "Ningún archivo elegido",
    clearIfInvisible: "Limpiar el valor si la pregunta se oculta",
    valuePropertyName: "Valor del nombre de propiedad",
    searchEnabled: "Habilitar búsqueda",
    hideSelectedItems: "Ocultar elementos seleccionados",
    closeOnSelect: "Cierre el menú desplegable después de la selección",
    signatureWidth: "Ancho de firma",
    signatureHeight: "Alto de firma",
    verticalAlign: "Alineación vertical",
    alternateRows: "Alternar filas",
    columnsVisibleIf: "Columnas son visibles si",
    rowsVisibleIf: "Filas son visibes si",
    otherPlaceholder: "Marcador de posición del área de comentarios",
    rateType: "Tipo de tarifa"
  },
  // Property values
  pv: {
    "true": "verdadero",
    "false": "falso",
    file: "Archivos locales",
    camera: "Cámara",
    "file-camera": "Archivos locales o cámara",
    inherit: "heredar",
    show: "mostrar",
    hide: "esconder",
    default: "defecto",
    initial: "inicial",
    random: "aleatoria",
    collapsed: "colapsada",
    expanded: "expandida",
    none: "ninguna",
    asc: "ascendente",
    desc: "descendiendo",
    indeterminate: "indeterminada",
    decimal: "decimal",
    currency: "divisa",
    percent: "porcentaje",
    firstExpanded: "Primer Expandido",
    off: "no mostrar",
    onpanel: "Comenzar en cada panel",
    onPanel: "en Panel",
    onSurvey: "en Encuesta",
    list: "lista",
    progressTop: "Progreso superior",
    progressBottom: "Progreso inferior",
    progressTopBottom: "Progreso inferior/superior",
    tab: "Pestañas",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "arriba",
    bottom: "abajo",
    topBottom: "arriba y abajo",
    both: "ambas",
    left: "izquierda",
    right: "Derecha",
    color: "Color",
    date: "fecha",
    datetime: "fecha hora",
    "datetime-local": "fecha hora-local",
    email: "Correo electrónico",
    month: "mes",
    number: "número",
    password: "contraseña",
    range: "rango",
    tel: "Tel",
    text: "texto",
    time: "hora",
    url: "URL",
    week: "semana",
    hidden: "oculta",
    on: "mostrar",
    onPage: "en la página",
    edit: "editar",
    display: "mostrar",
    onComplete: "Al completarse",
    onHidden: "Al ocultarse",
    onHiddenContainer: "Cuando la pregunta o su panel/página se oculta",
    clearInvisibleValues: {
      none: "Nunca"
    },
    inputType: {
      color: "Color",
      date: "Fecha",
      "datetime-local": "Fecha y hora",
      email: "Correo electrónico",
      month: "Mes",
      number: "Número",
      password: "Contraseña",
      range: "Gama",
      tel: "Número de teléfono",
      text: "Mensaje de texto",
      time: "Hora",
      url: "URL",
      week: "Semana"
    },
    all: "todas",
    page: "página",
    survey: "encuesta",
    onNextPage: "Al cambiar página",
    onValueChanged: "Al cambiar valor",
    onValueChanging: "Antes de que una pregunta sea cambiada",
    standard: "estándar",
    singlePage: "única página",
    questionPerPage: "Pregunta por página",
    noPreview: "sin vista previa",
    showAllQuestions: "Mostrar vista previa con todas las preguntas",
    showAnsweredQuestions: "Mostrar vista previa con preguntas contestadas",
    pages: "páginas",
    questions: "preguntas",
    requiredQuestions: "preguntas requeridas",
    correctQuestions: "preguntas correctas",
    buttons: "botones",
    underInput: "debajo de la respuesta",
    underTitle: "debajo del título",
    onBlur: "En desenfoque",
    onTyping: "Mientras se escribe",
    underRow: "Debajo de la fila",
    underRowSingle: "Debajo de la fila, sólo un panel es visible",
    showNavigationButtons: {
      none: "Oculto"
    },
    showProgressBar: {
      off: "Oculto"
    },
    showTimerPanel: {
      none: "Oculto"
    },
    showTimerPanelMode: {
      all: "Ambos"
    },
    detailPanelMode: {
      none: "Oculto"
    },
    addRowLocation: {
      default: "Depende de la disposición de la matriz"
    },
    panelsState: {
      default: "Usuarios no pueden expandir o colapsar paneles",
      collapsed: "Todos los paneles colapsados",
      expanded: "Todos los paneles expandidos"
    },
    widthMode: {
      auto: "Automático",
      static: "Estático",
      responsive: "Sensible"
    },
    imageFit: {
      none: "Ninguno",
      contain: "Contiene",
      cover: "Cubrir",
      fill: "Llenar"
    },
    contentMode: {
      auto: "Automático",
      image: "Imagen",
      video: "Vídeo",
      youtube: "YouTube (en inglés)"
    },
    displayMode: {
      auto: "Automático",
      buttons: "Botomes",
      dropdown: "Menú desplegable"
    },
    rateColorMode: {
      default: "Predeterminado"
    },
    autoGenerate: {
      "true": "Generar",
      "false": "Entrar manualmente"
    },
    rateType: {
      labels: "Etiquetas",
      stars: "Estrellas",
      smileys: "Emoticonos"
    }
  },
  // Operators
  op: {
    empty: "esta vacio",
    notempty: "no está vacío",
    equal: "es igual a",
    notequal: "no es igual a",
    contains: "contiene",
    notcontains: "no contiene",
    anyof: "cualquiera de",
    allof: "todo",
    greater: "mayor que",
    less: "menos",
    greaterorequal: "Mayor o igual",
    lessorequal: "Menos o iguales",
    and: "y",
    or: "o"
  },
  // Embed window
  ew: {
    angular: "Usar la versión angular",
    jquery: "Usa la versión jQuery",
    knockout: "Usa la versión Knockout",
    react: "Use la versión de reacción",
    vue: "Usa la versión VUE",
    bootstrap: "Para marco de bootstrap",
    modern: "Tema moderno",
    default: "Tema predeterminado",
    orange: "Tema naranja",
    darkblue: "Tema DarkBlue",
    darkrose: "Tema de Darkrose",
    stone: "Tema de piedra",
    winter: "Tema de invierno",
    winterstone: "Tema de piedra de invierno",
    showOnPage: "Mostrar encuesta en una página",
    showInWindow: "Mostrar encuesta en una ventana",
    loadFromServer: "Encuesta de carga JSON del servidor",
    titleScript: "Scripts y estilos",
    titleHtml: "Html",
    titleJavaScript: "Javascript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Seleccione la página para probarlo:",
    showInvisibleElements: "Mostrar elementos invisibles",
    hideInvisibleElements: "Ocultar elementos invisibles"
  },
  validators: {
    answercountvalidator: "Cantidad de respuestas",
    emailvalidator: "Email",
    expressionvalidator: "expresión",
    numericvalidator: "numérica",
    regexvalidator: "regex",
    textvalidator: "texto"
  },
  triggers: {
    completetrigger: "encuesta completa",
    setvaluetrigger: "valor ajustado",
    copyvaluetrigger: "Valor de copia",
    skiptrigger: "Saltar a la pregunta",
    runexpressiontrigger: "expresión de ejecución",
    visibletrigger: "Cambiar visibilidad"
  },
  pehelp: {
    cookieName: "Las cookies impiden que los usuarios completen la misma encuesta dos veces.",
    size: "Cambia el tamaño del área visible del campo de entrada. Utilice el ajuste <b>Validación → Longitud máxima</b> para limitar la longitud de entrada.",
    format: "Utilice {0} como marcador de posición para el valor real.",
    totalText: "Visible sólo cuando al menos una columna tiene el tipo Total o la expresión Total.",
    acceptedTypes: "Consulte la descripción del atributo [accept](https://www.w3schools.com/tags/att_input_accept.asp) para obtener más información.",
    columnColCount: "Aplicable solo a los tipos de celda Radiogroup y Checkbox.",
    autocomplete: "Consulte la descripción del atributo [autocompletar](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) para obtener más información.",
    valueName: "Si no establece esta propiedad, la respuesta se almacenará en un campo especificado por la propiedad Name.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Si la columna especificada contiene valores idénticos, la encuesta arroja el error \"Valor de clave no única\"."
  },
  // Properties
  p: {
    title: {
      name: "título",
      title: "Dejarlo vacío, si es lo mismo que 'Name'"
    },
    multiSelect: "Permitir múltiple selección",
    showLabel: "Mostrar leyenda de imagen",
    value: "Valor",
    tabAlign: "Alineación de tabulaciones",
    description: "Descripción",
    logoFit: "Ajuste del logotipo",
    pages: "Páginas",
    questions: "Preguntas",
    triggers: "disparadores",
    calculatedValues: "Valores calculados",
    surveyId: "ID de la encuesta",
    surveyPostId: "ID de publicación de la encuesta",
    surveyShowDataSaving: "La encuesta muestra el ahorro de datos",
    questionDescriptionLocation: "Ubicación de la descripción de la pregunta",
    progressBarType: "Tipo de barra de progreso",
    showTOC: "Mostrar TDC",
    tocLocation: "Ubicación de Toc",
    questionTitlePattern: "Patrón de título de pregunta",
    widthMode: "Modo de anchura",
    showBrandInfo: "Mostrar información de la marca",
    useDisplayValuesInDynamicTexts: "Usar valores de visualización en textos dinámicos",
    visibleIf: "visible si",
    titleLocation: "Localización del título",
    descriptionLocation: "Descripción ubicación",
    defaultValueExpression: "Expresión de valor predeterminada",
    requiredIf: "Requerido si",
    resetValueIf: "Restablecer valor si",
    validators: "Validadores",
    bindings: "Enlaces",
    renderAs: "Renderizar como",
    attachOriginalItems: "Adjuntar elementos originales",
    choices: "opciones",
    choicesByUrl: "opciones por URL",
    currency: "divisa",
    cellHint: "Sugerencia de celda",
    isUnique: "Es único",
    showInMultipleColumns: "Mostrar en varias columnas",
    totalMaximumFractionDigits: "Total máximo de fracción de dígitos",
    totalMinimumFractionDigits: "Total de dígitos de fracción mínima",
    columns: "columnas",
    detailElements: "Elementos de detalle",
    allowAdaptiveActions: "Permitir acciones adaptables",
    defaultRowValue: "Valor por defecto Fila",
    detailPanelShowOnAdding: "Panel de detalles mostrar sobre la adición",
    choicesLazyLoadEnabled: "Opciones de carga diferida habilitadas",
    choicesLazyLoadPageSize: "Opciones de tamaño de página de carga diferida",
    inputFieldComponent: "Componente de campo de entrada",
    itemComponent: "Componente de elemento",
    min: "Min",
    max: "Máximo",
    minValueExpression: "Expresión de valor mínimo",
    maxValueExpression: "Expresión de valor máximo",
    step: "Paso",
    dataList: "Lista de datos",
    itemSize: "artículos",
    elements: "Elementos",
    content: "Contenido",
    navigationButtonsVisibility: "Navegación botones visibilidad",
    navigationTitle: "Título de navegación",
    navigationDescription: "Descripción de navegación",
    longTap: "Toque largo",
    autoGrow: "Cultivo automático",
    allowResize: "Permitir cambiar el tamaño",
    acceptCarriageReturn: "Aceptar devolución de transporte",
    displayMode: "Modo de visualización",
    rateType: "Tipo de tarifa",
    label: "etiqueta",
    contentMode: "Modo de contenido",
    imageFit: "Ajuste de imagen",
    altText: "Texto alternativo",
    height: "Altura",
    penColor: "Color de la pluma",
    backgroundColor: "Color de fondo",
    templateElements: "Elementos de plantilla",
    operator: "Operador",
    isVariable: "Es variable",
    runExpression: "Ejecutar expresión",
    showCaption: "Mostrar pie de foto",
    iconName: "Nombre del icono",
    iconSize: "Tamaño del icono",
    precision: "Precisión",
    matrixDragHandleArea: "Área del controlador de arrastre de matriz",
    backgroundImage: "Imagen de fondo",
    backgroundImageFit: "Ajuste de imagen de fondo",
    backgroundImageAttachment: "Datos adjuntos de imagen de fondo",
    backgroundOpacity: "Opacidad de fondo",
    selectToRankEnabled: "Seleccione para clasificar habilitado",
    selectToRankAreasLayout: "Seleccione para clasificar el diseño de áreas",
    allowCameraAccess: "Permitir el acceso a la cámara",
    scaleColorMode: "Modo de color de escala",
    rateColorMode: "Modo de color de tasa",
    templateTabTitle: "Título de la pestaña Plantilla",
    templateVisibleIf: "Plantilla visible si",
    copyDisplayValue: "Copiar valor de visualización"
  },
  theme: {
    "--background": "Color de fondo",
    "--background-dim-light": "Color de luz tenue del fondo",
    "--primary-foreground": "Color primario de primer plano",
    "--foreground": "Color de primer plano",
    "--base-unit": "Unidad base",
    groupGeneral: "General",
    groupAdvanced: "Avanzado",
    themeName: "Tema",
    themeMode: "Apariencia de la pregunta",
    themeModePanels: "Predeterminado",
    themeModeLightweight: "Sin paneles",
    themePaletteLight: "Luz",
    themePaletteDark: "Oscuro",
    primaryColor: "Color de énfasis",
    primaryDefaultColor: "Predeterminado",
    primaryDarkColor: "Cernerse",
    primaryLightColor: "Seleccionado",
    backgroundDimColor: "Color de fondo",
    backgroundImage: "Imagen de fondo",
    backgroundImageFitAuto: "Automático",
    backgroundImageFitCover: "Cubrir",
    backgroundImageFitContain: "Contener",
    backgroundOpacity: "Opacidad",
    backgroundImageAttachmentFixed: "Fijo",
    backgroundImageAttachmentScroll: "Pergamino",
    panelBackgroundTransparency: "Opacidad del fondo del panel",
    questionBackgroundTransparency: "Opacidad de fondo de la pregunta",
    questionPanel: "Fondo del panel y radio de esquina",
    questionTitle: "Fuente del título de la pregunta",
    questionDescription: "Fuente de descripción de la pregunta",
    editorPanel: "Elemento de entrada",
    editorFont: "Fuente del elemento de entrada",
    backcolor: "Fondo predeterminado",
    hovercolor: "Pasar el cursor de fondo",
    borderDecoration: "Decoración de bordes",
    accentBackground: "Fondo de acento",
    accentForeground: "Primer plano de acento",
    primaryForecolor: "Color predeterminado",
    primaryForecolorLight: "Color deshabilitado",
    linesColors: "Colores de línea menores",
    borderDefault: "Oscuro",
    borderLight: "Encendedor",
    fontFamily: "Familia de fuentes",
    fontSize: "Tamaño de fuente",
    color: "Color",
    placeholderColor: "Color del marcador de posición",
    size: "Tamaño",
    fontWeightRegular: "Regular",
    fontWeightHeavy: "Pesado",
    fontWeightSemiBold: "Semi-negrita",
    fontWeightBold: "Audaz",
    scale: "Escama",
    cornerRadius: "Radio de esquina",
    surveyTitle: "Fuente del título de la encuesta",
    pageTitle: "Fuente del título de la página",
    pageDescription: "Fuente de descripción de la página",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Agregar efecto de sombra",
    opacity: "Opacidad",
    boxShadowBlur: "Desdibujar",
    boxShadowSpread: "Propagación",
    boxShadowDrop: "Soltar",
    boxShadowInner: "Interior",
    questionShadow: "Efectos de sombra",
    editorShadow: "Efectos de sombra del elemento de entrada",
    names: {
      default: "Predeterminado",
      sharp: "Afilado",
      borderless: "Sin bordes",
      flat: "Plano",
      plain: "Llanura",
      doubleborder: "Doble Borde",
      layered: "Capas",
      solid: "Sólido",
      threedimensional: ".3D",
      contrast: "Contraste"
    },
    colors: {
      teal: "Cerceta",
      blue: "Azul",
      purple: "Morado",
      orchid: "Orquídea",
      tulip: "Tulipán",
      brown: "Marrón",
      green: "Verde"
    }
  }
};

editorLocalization.locales["es"] = spanishTranslation;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.tagbox: "Multi-Select Dropdown" => "Menú desplegable de selección múltiple"
// qt.buttongroup: "Button Group" => "Grupo de botones"
// ed.themeSurvey: "Themes" => "Temas"
// ed.defaultV2Theme: "Default" => "Predeterminado"
// ed.modernTheme: "Modern" => "Moderno"
// ed.defaultTheme: "Default (legacy)" => "Incumplimiento (heredado)"
// ed.toolboxMiscCategory: "Misc" => "Misc"
// ed.themePropertyGridTitle: "Theme Settings" => "Configuración del tema"
// ed.themeExportButton: "Export" => "Exportar"
// ed.themeImportButton: "Import" => "Importación"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Las opciones se copian de"
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Arrastre y suelte una imagen aquí o haga clic en el botón de abajo y elija una imagen para cargar"
// ed.imageChooseImage: "Choose Image" => "Elegir imagen"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGOTIPO]"
// ed.auto: "auto" => "Automático"
// ed.choices_Item: "Item " => "Artículo "
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Valor de pregunta claro: {0}"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Las reglas lógicas están incompletas"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "No ha completado algunas de las reglas lógicas. Si deja la pestaña ahora, los cambios se perderán. ¿Aún desea salir de la pestaña sin completar los cambios?"
// lg.uncompletedRule_apply: "Yes" => "Sí"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "No, quiero completar las reglas"
// lg.expressionSetup: "" => ""
// pe.set: "Set" => "Poner"
// pe.overridingPropertyPrefix: "Set by " => "Establecido por "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "No utilice palabras reservadas: \"elemento\", \"elección\", \"panel\", \"fila\"."
// image.imageHeight: "Image height (in CSS-accepted values)" => "Altura de la imagen (en valores aceptados por CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Ancho de imagen (en valores aceptados por CSS)"
// pe.allowResizeComment: "Allow users to resize text areas" => "Permitir a los usuarios cambiar el tamaño de las áreas de texto"
// pe.labelTrue: "\"True\" label" => "Etiqueta \"Verdadero\""
// pe.labelFalse: "\"False\" label" => "Etiqueta \"Falso\""
// pe.displayStyle: "Value display style" => "Estilo de visualización del valor"
// pe.rateValues: "Custom rate values" => "Valores de tarifa personalizados"
// pe.rateCount: "Rate count" => "Recuento de tarifas"
// pe.autoGenerate: "How to specify rate values?" => "¿Cómo especificar valores de tasa?"
// pe.valueTrue: "\"True\" value" => "Valor \"verdadero\""
// pe.valueFalse: "\"False\" value" => "Valor \"falso\""
// pe.minErrorText: "\"Value is below minimum\" error message" => "Mensaje de error \"El valor está por debajo del mínimo\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Mensaje de error \"El valor supera el máximo\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Mensaje de error \"Comentario vacío\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Mensaje de error \"Valor de clave no único\""
// pe.minSelectedChoices: "Minimum selected choices" => "Opciones mínimas seleccionadas"
// pe.maxSelectedChoices: "Maximum selected choices" => "Número máximo de opciones seleccionadas"
// pe.emptyRowsText: "\"No rows\" message" => "Mensaje \"Sin filas\""
// pe.commentPlaceholder: "Comment area placeholder" => "Marcador de posición del área de comentarios"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Mostrar descripciones de velocidad como valores extremos"
// itemvalue.text: "Alt text" => "Texto alternativo"
// pe.closeOnSelect: "Close the dropdown after selection" => "Cierre el menú desplegable después de la selección"
// pe.otherPlaceholder: "Comment area placeholder" => "Marcador de posición del área de comentarios"
// pe.rateType: "Rate type" => "Tipo de tarifa"
// pv.true: "true" => "verdadero"
// pv.false: "false" => "falso"
// pv.tab: "Tabs" => "Pestañas"
// pv.color: "color" => "Color"
// pv.email: "email" => "Correo electrónico"
// pv.password: "password" => "contraseña"
// pv.tel: "tel" => "Tel"
// pv.url: "url" => "URL"
// inputType.color: "Color" => "Color"
// inputType.date: "Date" => "Fecha"
// inputType.datetime-local: "Date and Time" => "Fecha y hora"
// inputType.email: "Email" => "Correo electrónico"
// inputType.month: "Month" => "Mes"
// inputType.number: "Number" => "Número"
// inputType.password: "Password" => "Contraseña"
// inputType.range: "Range" => "Gama"
// inputType.tel: "Phone Number" => "Número de teléfono"
// inputType.text: "Text" => "Mensaje de texto"
// inputType.time: "Time" => "Hora"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Semana"
// pv.onBlur: "On blur" => "En desenfoque"
// widthMode.auto: "Auto" => "Automático"
// widthMode.responsive: "Responsive" => "Sensible"
// imageFit.cover: "Cover" => "Cubrir"
// imageFit.fill: "Fill" => "Llenar"
// contentMode.auto: "Auto" => "Automático"
// contentMode.video: "Video" => "Vídeo"
// contentMode.youtube: "YouTube" => "YouTube (en inglés)"
// displayMode.auto: "Auto" => "Automático"
// displayMode.dropdown: "Dropdown" => "Menú desplegable"
// rateColorMode.default: "Default" => "Predeterminado"
// autoGenerate.true: "Generate" => "Generar"
// autoGenerate.false: "Enter manually" => "Entrar manualmente"
// rateType.labels: "Labels" => "Etiquetas"
// rateType.stars: "Stars" => "Estrellas"
// rateType.smileys: "Smileys" => "Emoticonos"
// op.and: "and" => "y"
// op.or: "or" => "o"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Las cookies impiden que los usuarios completen la misma encuesta dos veces."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Cambia el tamaño del área visible del campo de entrada. Utilice el ajuste <b>Validación → Longitud máxima</b> para limitar la longitud de entrada."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Utilice {0} como marcador de posición para el valor real."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Visible sólo cuando al menos una columna tiene el tipo Total o la expresión Total."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Consulte la descripción del atributo [accept](https://www.w3schools.com/tags/att_input_accept.asp) para obtener más información."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Aplicable solo a los tipos de celda Radiogroup y Checkbox."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Consulte la descripción del atributo [autocompletar](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) para obtener más información."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Si no establece esta propiedad, la respuesta se almacenará en un campo especificado por la propiedad Name."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Si la columna especificada contiene valores idénticos, la encuesta arroja el error \"Valor de clave no única\"."
// p.tabAlign: "Tab alignment" => "Alineación de tabulaciones"
// p.logoFit: "Logo fit" => "Ajuste del logotipo"
// p.pages: "Pages" => "Páginas"
// p.questions: "Questions" => "Preguntas"
// p.calculatedValues: "Calculated values" => "Valores calculados"
// p.surveyId: "Survey id" => "ID de la encuesta"
// p.surveyPostId: "Survey post id" => "ID de publicación de la encuesta"
// p.surveyShowDataSaving: "Survey show data saving" => "La encuesta muestra el ahorro de datos"
// p.questionDescriptionLocation: "Question description location" => "Ubicación de la descripción de la pregunta"
// p.progressBarType: "Progress bar type" => "Tipo de barra de progreso"
// p.showTOC: "Show TOC" => "Mostrar TDC"
// p.tocLocation: "Toc location" => "Ubicación de Toc"
// p.questionTitlePattern: "Question title pattern" => "Patrón de título de pregunta"
// p.widthMode: "Width mode" => "Modo de anchura"
// p.showBrandInfo: "Show brand info" => "Mostrar información de la marca"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Usar valores de visualización en textos dinámicos"
// p.descriptionLocation: "Description location" => "Descripción ubicación"
// p.defaultValueExpression: "Default value expression" => "Expresión de valor predeterminada"
// p.bindings: "Bindings" => "Enlaces"
// p.renderAs: "Render as" => "Renderizar como"
// p.attachOriginalItems: "Attach original items" => "Adjuntar elementos originales"
// p.cellHint: "Cell hint" => "Sugerencia de celda"
// p.isUnique: "Is unique" => "Es único"
// p.showInMultipleColumns: "Show in multiple columns" => "Mostrar en varias columnas"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Total máximo de fracción de dígitos"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Total de dígitos de fracción mínima"
// p.detailElements: "Detail elements" => "Elementos de detalle"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Permitir acciones adaptables"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Panel de detalles mostrar sobre la adición"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Opciones de carga diferida habilitadas"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Opciones de tamaño de página de carga diferida"
// p.inputFieldComponent: "Input field component" => "Componente de campo de entrada"
// p.itemComponent: "Item component" => "Componente de elemento"
// p.min: "Min" => "Min"
// p.max: "Max" => "Máximo"
// p.minValueExpression: "Min value expression" => "Expresión de valor mínimo"
// p.maxValueExpression: "Max value expression" => "Expresión de valor máximo"
// p.step: "Step" => "Paso"
// p.dataList: "Data list" => "Lista de datos"
// p.elements: "Elements" => "Elementos"
// p.content: "Content" => "Contenido"
// p.navigationTitle: "Navigation title" => "Título de navegación"
// p.navigationDescription: "Navigation description" => "Descripción de navegación"
// p.longTap: "Long tap" => "Toque largo"
// p.autoGrow: "Auto grow" => "Cultivo automático"
// p.allowResize: "Allow resizing" => "Permitir cambiar el tamaño"
// p.acceptCarriageReturn: "Accept carriage return" => "Aceptar devolución de transporte"
// p.displayMode: "Display mode" => "Modo de visualización"
// p.rateType: "Rate type" => "Tipo de tarifa"
// p.contentMode: "Content mode" => "Modo de contenido"
// p.imageFit: "Image fit" => "Ajuste de imagen"
// p.altText: "Alt text" => "Texto alternativo"
// p.height: "Height" => "Altura"
// p.penColor: "Pen color" => "Color de la pluma"
// p.backgroundColor: "Background color" => "Color de fondo"
// p.templateElements: "Template elements" => "Elementos de plantilla"
// p.operator: "Operator" => "Operador"
// p.isVariable: "Is variable" => "Es variable"
// p.runExpression: "Run expression" => "Ejecutar expresión"
// p.showCaption: "Show caption" => "Mostrar pie de foto"
// p.iconName: "Icon name" => "Nombre del icono"
// p.iconSize: "Icon size" => "Tamaño del icono"
// p.precision: "Precision" => "Precisión"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Área del controlador de arrastre de matriz"
// p.backgroundImage: "Background image" => "Imagen de fondo"
// p.backgroundImageFit: "Background image fit" => "Ajuste de imagen de fondo"
// p.backgroundImageAttachment: "Background image attachment" => "Datos adjuntos de imagen de fondo"
// p.backgroundOpacity: "Background opacity" => "Opacidad de fondo"
// p.selectToRankEnabled: "Select to rank enabled" => "Seleccione para clasificar habilitado"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Seleccione para clasificar el diseño de áreas"
// p.allowCameraAccess: "Allow camera access" => "Permitir el acceso a la cámara"
// p.scaleColorMode: "Scale color mode" => "Modo de color de escala"
// p.rateColorMode: "Rate color mode" => "Modo de color de tasa"
// p.templateTabTitle: "Template tab title" => "Título de la pestaña Plantilla"
// p.templateVisibleIf: "Template visible if" => "Plantilla visible si"
// p.copyDisplayValue: "Copy display value" => "Copiar valor de visualización"
// theme.--background: "Background color" => "Color de fondo"
// theme.--background-dim-light: "Background dim light color" => "Color de luz tenue del fondo"
// theme.--primary-foreground: "Primary foreground color" => "Color primario de primer plano"
// theme.--foreground: "Foreground color" => "Color de primer plano"
// theme.--base-unit: "Base unit" => "Unidad base"
// theme.groupGeneral: "General" => "General"
// theme.groupAdvanced: "Advanced" => "Avanzado"
// theme.themeName: "Theme" => "Tema"
// theme.themeMode: "Question appearance" => "Apariencia de la pregunta"
// theme.themeModePanels: "Default" => "Predeterminado"
// theme.themeModeLightweight: "Without Panels" => "Sin paneles"
// theme.themePaletteLight: "Light" => "Luz"
// theme.themePaletteDark: "Dark" => "Oscuro"
// theme.primaryColor: "Accent color" => "Color de énfasis"
// theme.primaryDefaultColor: "Default" => "Predeterminado"
// theme.primaryDarkColor: "Hover" => "Cernerse"
// theme.primaryLightColor: "Selected" => "Seleccionado"
// theme.backgroundDimColor: "Background color" => "Color de fondo"
// theme.backgroundImage: "Background image" => "Imagen de fondo"
// theme.backgroundImageFitAuto: "Auto" => "Automático"
// theme.backgroundImageFitCover: "Cover" => "Cubrir"
// theme.backgroundImageFitContain: "Contain" => "Contener"
// theme.backgroundOpacity: "Opacity" => "Opacidad"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Fijo"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Pergamino"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacidad del fondo del panel"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opacidad de fondo de la pregunta"
// theme.questionPanel: "Panel background and corner radius" => "Fondo del panel y radio de esquina"
// theme.questionTitle: "Question title font" => "Fuente del título de la pregunta"
// theme.questionDescription: "Question description font" => "Fuente de descripción de la pregunta"
// theme.editorPanel: "Input element" => "Elemento de entrada"
// theme.editorFont: "Input element font" => "Fuente del elemento de entrada"
// theme.backcolor: "Default background" => "Fondo predeterminado"
// theme.hovercolor: "Hover background" => "Pasar el cursor de fondo"
// theme.borderDecoration: "Border decoration" => "Decoración de bordes"
// theme.accentBackground: "Accent background" => "Fondo de acento"
// theme.accentForeground: "Accent foreground" => "Primer plano de acento"
// theme.primaryForecolor: "Default color" => "Color predeterminado"
// theme.primaryForecolorLight: "Disabled color" => "Color deshabilitado"
// theme.linesColors: "Minor line colors" => "Colores de línea menores"
// theme.borderDefault: "Darker" => "Oscuro"
// theme.borderLight: "Lighter" => "Encendedor"
// theme.fontFamily: "Font family" => "Familia de fuentes"
// theme.fontSize: "Font size" => "Tamaño de fuente"
// theme.color: "Color" => "Color"
// theme.size: "Size" => "Tamaño"
// theme.fontWeightRegular: "Regular" => "Regular"
// theme.fontWeightHeavy: "Heavy" => "Pesado"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-negrita"
// theme.fontWeightBold: "Bold" => "Audaz"
// theme.scale: "Scale" => "Escama"
// theme.cornerRadius: "Corner radius" => "Radio de esquina"
// theme.surveyTitle: "Survey title font" => "Fuente del título de la encuesta"
// theme.pageTitle: "Page title font" => "Fuente del título de la página"
// theme.pageDescription: "Page description font" => "Fuente de descripción de la página"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Agregar efecto de sombra"
// theme.opacity: "Opacity" => "Opacidad"
// theme.boxShadowBlur: "Blur" => "Desdibujar"
// theme.boxShadowSpread: "Spread" => "Propagación"
// theme.boxShadowDrop: "Drop" => "Soltar"
// theme.boxShadowInner: "Inner" => "Interior"
// theme.questionShadow: "Shadow effects" => "Efectos de sombra"
// theme.editorShadow: "Input element shadow effects" => "Efectos de sombra del elemento de entrada"
// names.default: "Default" => "Predeterminado"
// names.contrast: "Contrast" => "Contraste"
// names.plain: "Plain" => "Llanura"
// names.simple: "Simple" => "Sencillo"
// names.blank: "Blank" => "Espacio en blanco"
// names.double: "Double" => "Doble"
// names.bulk: "Bulk" => "Bulto"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Juguetón"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Cerceta"
// colors.blue: "Blue" => "Azul"
// colors.purple: "Purple" => "Morado"
// colors.orchid: "Orchid" => "Orquídea"
// colors.tulip: "Tulip" => "Tulipán"
// colors.brown: "Brown" => "Marrón"
// colors.green: "Green" => "Verde"
// lg.expressionSetup: "" => ""
// names.sharp: "Sharp" => "Afilado"
// names.borderless: "Borderless" => "Sin bordes"
// names.flat: "Flat" => "Plano"
// names.doubleborder: "Double Border" => "Doble Borde"
// names.layered: "Layered" => "Capas"
// names.solid: "Solid" => "Sólido"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "¿Está seguro de que desea eliminar todas las cadenas de este idioma?"
// ed.themeResetButton: "Reset theme settings to default" => "Restablecer la configuración predeterminada del tema"
// lg.expressionSetup: "" => ""
// theme.placeholderColor: "Placeholder color" => "Color del marcador de posición"
// ed.themeSettings: "Theme Settings" => "Configuración del tema"
// ed.themeSettingsTooltip: "Open theme settings" => "Abrir la configuración del tema"
// lg.expressionSetup: "" => ""
// pe.resetToDefaultCaption: "Reset" => "Restablecimiento"
// pv.file: "Local files" => "Archivos locales"
// pv.camera: "Camera" => "Cámara"
// pv.file-camera: "Local files or camera" => "Archivos locales o cámara"
// ed.translateUsigAI: "Auto-translate All" => "Traducir automáticamente todo"
// ed.translationDialogTitle: "Untranslated strings" => "Cadenas sin traducir"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Introduce al menos {0} artículos"
// lg.question_resetValueName: "Reset question value" => "Restablecer valor de pregunta"
// lg.column_resetValue: "Reset column value" => "Restablecer el valor de la columna"
// lg.expressionSetup: "" => ""
// pe.markRequired: "Mark as required" => "Marcar según sea necesario"
// pe.removeRequiredMark: "Remove the required mark" => "Quitar la marca requerida"
// p.resetValueIf: "Reset value if" => "Restablecer valor si"