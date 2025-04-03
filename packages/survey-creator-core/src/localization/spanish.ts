import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Encuesta de prueba",
    theme: "Temas",
    translation: "Traducción",
    designer: "Diseñador de la encuesta",
    json: "Editor de JSON",
    logic: "Lógica de la encuesta"
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
  toolboxCategories: {
    general: "general",
    choice: "Preguntas de selección",
    text: "Preguntas entrada de texto",
    containers: "Contenedores",
    matrix: "Preguntas matriz",
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Predeterminado ({0})",
    survey: "Encuesta",
    settings: "Configuración de la encuesta",
    settingsTooltip: "Configuración de encuesta abierta",
    surveySettings: "Opciones encuesta",
    surveySettingsTooltip: "Configuración de la encuesta",
    themeSettings: "Configuración del tema",
    themeSettingsTooltip: "Configuración del tema",
    creatorSettingTitle: "Configuración del creador",
    showPanel: "Mostrar panel",
    hidePanel: "Ocultar panel",
    prevSelected: "Seleccionar anterior",
    nextSelected: "Seleccionar siguiente",
    prevFocus: "Enfoque anterior",
    nextFocus: "Enfoque siguiente",
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
    defaultV2Theme: "Predeterminado",
    modernTheme: "Moderno",
    defaultTheme: "Incumplimiento (heredado)",
    testSurveyAgain: "Encuesta de prueba de nuevo",
    testSurveyWidth: "Ancho de la encuesta:",
    navigateToMsg: "Tuviste que navegar a:",
    saveSurvey: "Guardar la encuesta",
    saveSurveyTooltip: "Guardar la encuesta",
    saveTheme: "Guardar tema",
    saveThemeTooltip: "Guardar tema",
    jsonHideErrors: "Ocultar errores",
    jsonShowErrors: "Mostrar errores",
    undo: "Deshacer",
    redo: "Rehacer",
    undoTooltip: "Deshacer el último cambio",
    redoTooltip: "Rehacer el cambio",
    expandTooltip: "Expandir",
    collapseTooltip: "Colapso",
    expandAllTooltip: "Expandir todo",
    collapseAllTooltip: "Contraer todo",
    zoomInTooltip: "Acercar",
    zoom100Tooltip: "Zoom al 100%",
    zoomOutTooltip: "Alejar",
    lockQuestionsTooltip: "Bloquear el estado de expansión/contracción de las preguntas",
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
    toolboxFilteredTextPlaceholder: "Escriba para buscar...",
    toolboxNoResultsFound: "No se han encontrado resultados",
    propertyGridFilteredTextPlaceholder: "Escribe para buscar...",
    propertyGridNoResultsFound: "No se han encontrado resultados",
    propertyGridPlaceholderTitle: "Empieza a configurar tu formulario",
    propertyGridPlaceholderDescription: "Haga clic en cualquier icono de categoría para explorar la configuración de la encuesta. Los ajustes adicionales estarán disponibles una vez que agregue un elemento de topografía a la superficie de diseño.",
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
    addLanguageTooltip: "Agregar idioma",
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
    translateUsigAIFrom: "Traducir de: ",
    translationDialogTitle: "Cadenas sin traducir",
    translationMergeLocaleWithDefault: "Merge {0} con lugar predeterminado",
    translationPlaceHolder: "Traducción...",
    translationSource: "Fuente: ",
    translationTarget: "Blanco: ",
    translationYouTubeNotSupported: "Los enlaces de YouTube no son compatibles.",
    themeExportButton: "Exportar",
    themeImportButton: "Importación",
    surveyJsonExportButton: "Exportar",
    surveyJsonImportButton: "Importación",
    surveyJsonCopyButton: "Copiar en el portapapeles",
    themeResetButton: "Restablecer la configuración predeterminada del tema",
    themeResetConfirmation: "¿Realmente quieres resetear el tema? Todas tus personalizaciones se perderán.",
    themeResetConfirmationOk: "Sí, restablece el tema",
    bold: "Negrita",
    italic: "Itálica",
    underline: "Subrayar",
    addNewQuestion: "Añadir pregunta",
    selectPage: "Seleccionar página ...",
    carryForwardChoicesCopied: "Las opciones se copian de",
    choicesLoadedFromWebText: "Las opciones se cargan desde un servicio web.",
    choicesLoadedFromWebLinkText: "Ir a la configuración",
    choicesLoadedFromWebPreviewTitle: "Vista previa de las opciones de elección cargadas",
    htmlPlaceHolder: "Contenido HTML irá aquí.",
    panelPlaceHolder: "Arrastra aquí una pregunta desde la caja de herramientas.",
    surveyPlaceHolder: "La encuesta está vacía. Arrastra una pregunta desde la caja de herramientas o haz click en el botón de abajo.",
    pagePlaceHolder: "La página está vacía. Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo.",
    imagePlaceHolder: "Arrastre y suelte una imagen aquí o haga clic en el botón de abajo y elija una imagen para cargar",
    surveyPlaceHolderMobile: "Haga clic en el botón \"Agregar pregunta\" a continuación para comenzar a crear su formulario.",
    surveyPlaceholderTitle: "Tu formulario está vacío",
    surveyPlaceholderTitleMobile: "Tu formulario está vacío",
    surveyPlaceholderDescription: "Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo.",
    surveyPlaceholderDescriptionMobile: "Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo.",
    previewPlaceholderTitle: "Sin vista previa",
    previewPlaceholderTitleMobile: "Sin vista previa",
    previewPlaceholderDescription: "La encuesta no contiene ningún elemento visible.",
    previewPlaceholderDescriptionMobile: "La encuesta no contiene ningún elemento visible.",
    translationsPlaceholderTitle: "Sin ataduras para traducir",
    translationsPlaceholderTitleMobile: "Sin ataduras para traducir",
    translationsPlaceholderDescription: "Agregue elementos a su formulario o cambie el filtro de cadenas en la barra de herramientas.",
    translationsPlaceholderDescriptionMobile: "Agregue elementos a su formulario o cambie el filtro de cadenas en la barra de herramientas.",
    pagePlaceHolderMobile: "Haga clic en el botón \"Agregar pregunta\" a continuación para agregar un nuevo elemento a la página.",
    panelPlaceHolderMobile: "Haga clic en el botón \"Agregar pregunta\" a continuación para agregar un nuevo elemento al panel.",
    imagePlaceHolderMobile: "Haga clic en el botón de abajo y elija una imagen para cargar",
    imageChooseImage: "Elegir imagen",
    addNewTypeQuestion: "Añadir {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGOTIPO]",
    choices_Item: "Artículo ",
    selectFile: "Seleccionar un archivo",
    removeFile: "Eliminar el archivo",
    lg: {
      addNewItem: "Añadir nueva regla",
      empty_tab: "Crea una regla para personalizar el flujo de la encuesta.",
      logicPlaceholderTitle: "Sin reglas lógicas",
      logicPlaceholderTitleMobile: "Sin reglas lógicas",
      logicPlaceholderDescription: "Cree una regla para personalizar el flujo de la encuesta.",
      logicPlaceholderDescriptionMobile: "Cree una regla para personalizar el flujo de la encuesta.",
      page_visibilityName: "Visibilidad de la pagina",
      page_enableName: "Habilitar (deshabilitar) página",
      page_requireName: "Hacer que la página sea obligatoria",
      panel_visibilityName: "Visibilidad del panel",
      panel_enableName: "Panel habilitar / deshabilitar",
      panel_requireName: "Hacer que la página sea obligatoria",
      question_visibilityName: "Pregunta visibilidad",
      question_enableName: "Pregunta habilitar / deshabilitar",
      question_requireName: "Pregunta opcional requerida",
      question_resetValueName: "Restablecer valor de pregunta",
      question_setValueName: "Establecer el valor de la pregunta",
      column_visibilityName: "Mostrar (ocultar) columna",
      column_enableName: "Habilitar (deshabilitar) columna",
      column_requireName: "Hacer columna requerida",
      column_resetValueName: "Restablecer valor de columna",
      column_setValueName: "Establecer el valor de la columna",
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
      question_resetValueText: "Restablecer valor para la pregunta: {0}", //{0} question name.
      question_setValueText: "Asignar valor: {1} a la pregunta: {0}",
      column_visibilityText: "hacer la columna {0} de la pregunta {1} visible", //{0} column name, {1} question name
      column_enableText: "hacer la columna {0} de la pregunta {1} activa", //{0} column name, {1} question name
      column_requireText: "hacer la columna {0} de la pregunta {1} requerida", //{0} column name, {1} question name
      column_resetValueText: "Restablecer el valor de celda de la columna: {0}", //{0} column name
      column_setValueText: "Asignar valor de celda: {1} a columna: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Una expresión cuyo resultado se asignará a la pregunta de destino.",
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
      uncompletedRule_cancel: "No, quiero completar las reglas"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Nombre del panel",
      title: "Título de la viñeta",
      description: "Descripción del panel",
      visibleIf: "Haga que el panel sea visible si",
      requiredIf: "Haga que el panel sea obligatorio si",
      questionOrder: "Orden de las preguntas dentro del panel",
      page: "Página padre",
      startWithNewLine: "Mostrar el panel en una nueva línea",
      state: "Estado de contracción del panel",
      width: "Ancho del panel en línea",
      minWidth: "Anchura mínima del panel",
      maxWidth: "Anchura máxima del panel",
      showNumber: "Numerar este panel"
    },
    panellayoutcolumn: {
      effectiveWidth: "Anchura efectiva, %",
      questionTitleWidth: "Ancho del título de la pregunta, px"
    },
    paneldynamic: {
      name: "Nombre del panel",
      title: "Título de la viñeta",
      description: "Descripción del panel",
      visibleIf: "Haga que el panel sea visible si",
      requiredIf: "Haga que el panel sea obligatorio si",
      page: "Mover el panel a la página",
      startWithNewLine: "Mostrar el panel en una nueva línea",
      state: "Estado de contracción del panel",
      width: "Ancho del panel en línea",
      minWidth: "Anchura mínima del panel",
      maxWidth: "Anchura máxima del panel",
      confirmDelete: "Confirmar borrado de panel",
      templateDescription: "Patrón de descripción del panel",
      templateTitle: "Patrón de título de panel",
      noEntriesText: "Texto de panel vacío",
      templateTabTitle: "Patrón de título de tabulación",
      tabTitlePlaceholder: "Marcador de posición del título de la pestaña",
      templateVisibleIf: "Hacer visible un panel individual si",
      showNumber: "Numerar el panel",
      titleLocation: "Alineación del título del panel",
      descriptionLocation: "Alineación de la descripción del panel",
      templateQuestionTitleLocation: "Alineación del título de la pregunta",
      templateQuestionTitleWidth: "Ancho del título de la pregunta",
      templateErrorLocation: "Alineación de mensajes de error",
      newPanelPosition: "Nueva ubicación del panel",
      showRangeInProgress: "Mostrar la barra de progreso",
      keyName: "Evitar respuestas duplicadas en la siguiente pregunta"
    },
    question: {
      name: "Nombre de la pregunta",
      title: "Título de la pregunta",
      description: "Descripción de la pregunta",
      visibleIf: "Haz que la pregunta sea visible si",
      requiredIf: "Haga que la pregunta sea obligatoria si:",
      page: "Página padre",
      state: "Estado de contracción del cuadro de pregunta",
      showNumber: "Numerar esta pregunta",
      titleLocation: "Alineación del título de la pregunta",
      descriptionLocation: "Alineación de la descripción de la pregunta",
      errorLocation: "Alineación de mensajes de error",
      indent: "Aumentar la sangría interior",
      width: "Ancho de la pregunta en línea",
      minWidth: "Ancho mínimo de la pregunta",
      maxWidth: "Ancho máximo de la pregunta",
      textUpdateMode: "Actualizar el valor del campo de entrada"
    },
    signaturepad: {
      signatureWidth: "Ancho del área de firma",
      signatureHeight: "Altura del área de firma",
      signatureAutoScaleEnabled: "Escalado automático del área de firma",
      showPlaceholder: "Mostrar el marcador de posición",
      placeholder: "Texto de marcador de posición",
      placeholderReadOnly: "Texto de marcador de posición en modo de solo lectura o vista previa",
      allowClear: "Mostrar el botón Borrar dentro del área de firma",
      penMinWidth: "Ancho mínimo del lápiz",
      penMaxWidth: "Ancho máximo del lápiz",
      penColor: "Color del trazo"
    },
    comment: {
      rows: "Altura del campo de entrada (en líneas)"
    },
    showQuestionNumbers: "Mostrar números de pregunta",
    questionStartIndex: "Índice de inicio de la pregunta (1, 2 o 'A', 'A')",
    expression: {
      name: "Nombre de la expresión",
      title: "Título de la expresión",
      description: "Descripción de la expresión",
      expression: "Expresión"
    },
    trigger: {
      expression: "Expresión"
    },
    calculatedvalue: {
      expression: "Expresión"
    },
    // survey templates
    survey: {
      title: "Título",
      description: "Descripción de la encuesta",
      readOnly: "Hacer que la encuesta sea de solo lectura"
    },
    page: {
      name: "Nombre de la página",
      title: "Título",
      description: "Descripción de la página",
      visibleIf: "Hacer que la página sea visible si",
      requiredIf: "Haga que la página sea obligatoria si",
      timeLimit: "Tiempo límite para finalizar la página (en segundos)",
      questionOrder: "Orden de las preguntas en la página"
    },
    matrixdropdowncolumn: {
      name: "Nombre de la columna",
      title: "Título de la columna",
      isUnique: "Evitar respuestas duplicadas",
      width: "Anchura de columna",
      minWidth: "Anchura mínima de columna",
      rows: "Altura del campo de entrada (en líneas)",
      visibleIf: "Haga que la columna sea visible si",
      requiredIf: "Haga que la columna sea obligatoria si",
      showInMultipleColumns: "Cada opción en una columna separada"
    },
    multipletextitem: {
      name: "Nombre",
      title: "Título"
    },
    masksettings: {
      saveMaskedValue: "Guardar el valor enmascarado en los resultados de la encuesta"
    },
    patternmask: {
      pattern: "Patrón de valores"
    },
    datetimemask: {
      min: "Valor mínimo",
      max: "Valor máximo"
    },
    numericmask: {
      allowNegativeValues: "Permitir valores negativos",
      thousandsSeparator: "Separador de millares",
      decimalSeparator: "Separador decimal",
      precision: "Precisión de valor",
      min: "Valor mínimo",
      max: "Valor máximo"
    },
    currencymask: {
      prefix: "Prefijo de moneda",
      suffix: "Sufijo de moneda"
    },
    imageHeight: "Altura de imagen",
    imageWidth: "Ancho de la imagen",
    valueName: "Nombre de valor",
    defaultDisplayValue: "Valor de visualización predeterminado para textos dinámicos",
    rateDescriptionLocation: "Alineación de etiquetas",
    size: "Tamaño de entrada (en caracteres)",
    cellErrorLocation: "Alineación de mensajes de error de celda",
    enabled: "Habilitado",
    disabled: "Deshabilitado",
    inherit: "Heredar",
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
    "listIsEmpty@columns": "Todavía no tienes ninguna columna",
    "listIsEmpty@gridLayoutColumns": "Todavía no tiene columnas de diseño",
    "listIsEmpty@rows": "Todavía no tienes ninguna fila",
    "listIsEmpty@validators": "Todavía no tiene ninguna regla de validación",
    "listIsEmpty@calculatedValues": "Todavía no tiene ninguna variable personalizada",
    "listIsEmpty@triggers": "Todavía no tienes ningún desencadenante",
    "listIsEmpty@navigateToUrlOnCondition": "Todavía no tienes ningún enlace",
    "listIsEmpty@pages": "Todavía no tienes ninguna página",
    "addNew@choices": "Añade una opción",
    "addNew@columns": "Agregar nueva columna",
    "addNew@rows": "Agregar nueva fila",
    "addNew@validators": "Agregar nueva regla",
    "addNew@calculatedValues": "Adición de una nueva variable",
    "addNew@triggers": "Agregar nuevo disparador",
    "addNew@navigateToUrlOnCondition": "Agregar nueva URL",
    "addNew@pages": "Agregar nueva página",
    expressionIsEmpty: "La expresión está vacía",
    value: "Valor",
    text: "Texto",
    rowid: "ID de fila",
    imageLink: "Enlace de imágen",
    columnEdit: "Editar columna: {0}",
    itemEdit: "Editar artículo: {0}",
    url: "URL",
    path: "Camino",
    choicesbyurl: {
      url: "URL del servicio web",
      valueName: "Obtener valores del siguiente campo JSON"
    },
    titleName: "Nombre del título",
    imageLinkName: "Obtener URLs de imagen desde el siguiente campo JSON",
    allowEmptyResponse: "Permitir respuestas vacías",
    titlePlaceholder: "Título de entrada aquí",
    surveyTitlePlaceholder: "Título de la encuesta de entrada aquí",
    pageTitlePlaceholder: "Título de la página de entrada aquí",
    startPageTitlePlaceholder: "Página de inicio",
    descriptionPlaceholder: "Ingrese una descripción",
    surveyDescriptionPlaceholder: "Ingrese una descripción de la encuesta",
    pageDescriptionPlaceholder: "Ingrese una descripción de la página",
    textWrapEnabled: "Opciones de envoltura",
    showOtherItem: "Tiene opción 'Otro'",
    otherText: "Cambiar texto 'Otro'",
    showNoneItem: "Tiene opcion 'Ninguno'",
    showRefuseItem: "Permitir la opción Negarse a responder",
    showDontKnowItem: "Permitir la opción No sé",
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
    allowCustomChoices: "Permitir opciones personalizadas",
    visible: "¿Es visible?",
    isRequired: "¿Se requiere?",
    markRequired: "Marcar según sea necesario",
    removeRequiredMark: "Quitar la marca requerida",
    eachRowRequired: "Requerir respuesta para todas las filas",
    eachRowUnique: "Evitar respuestas duplicadas en filas",
    requiredErrorText: "Texto de error requerido",
    startWithNewLine: "¿Empieza con la nueva línea?",
    rows: "Número de filas",
    cols: "Recuento de columnas",
    placeholder: "Placeholder de entrada",
    showPreview: "Mostrar área de vista previa",
    storeDataAsText: "Tienda el contenido del archivo en el resultado de JSON como texto",
    maxSize: "Tamaño máximo de archivo en bytes",
    rowCount: "Número de filas",
    columnLayout: "Diseño de columnas",
    addRowButtonLocation: "Añadir la ubicación del botón de la fila",
    transposeData: "Transponer filas a columnas",
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
    clearInvisibleValues: "Claros valores invisibles",
    cookieName: "Nombre de la cookie (para deshabilitar la encuesta de ejecución dos veces localmente)",
    partialSendEnabled: "Enviar resultados de encuestas en la página Siguiente",
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
    navigationButtonsLocation: "Alineación de los botones de navegación",
    showPrevButton: "Mostrar botón anterior (el usuario puede volver a la página anterior)",
    firstPageIsStartPage: "La primera página en la encuesta es una página iniciada",
    showCompletePage: "Mostrar la página completa al final (HTML finalizado)",
    autoAdvanceEnabled: "Al responder todas las preguntas, vaya a la página siguiente automáticamente",
    autoAdvanceAllowComplete: "Completar la encuesta automáticamente",
    showProgressBar: "Mostrar barra de progreso",
    progressBarLocation: "Alineación de la barra de progreso",
    questionTitleLocation: "Ubicación del título de la pregunta",
    questionTitleWidth: "Ancho del título de la pregunta",
    requiredMark: "La pregunta requerida (s) símbolo (s)",
    questionTitleTemplate: "Plantilla de título de la pregunta, el valor predeterminado es: '{no}.{requiere} {título} '",
    questionErrorLocation: "Ubicación de error de la pregunta",
    autoFocusFirstQuestion: "Enfoca la primera pregunta al cambiar la página",
    questionOrder: "Orden de elementos en la página",
    timeLimit: "Tiempo máximo para terminar la encuesta",
    timeLimitPerPage: "Tiempo máximo para terminar una página en la encuesta",
    showTimer: "Usar un temporizador",
    timerLocation: "Mostrar panel de temporizador",
    timerInfoMode: "Mostrar modo de panel del temporizador",
    renderMode: "Modo de renderizado",
    allowAddPanel: "Permitir agregar un panel",
    allowRemovePanel: "Permitir eliminar el panel",
    addPanelText: "Añadiendo texto del panel",
    removePanelText: "Eliminar texto del panel",
    isSinglePage: "Mostrar todos los elementos en una página",
    html: "Html",
    setValue: "Respuesta",
    dataFormat: "Formato imagen",
    allowAddRows: "Permitir añadir filas",
    allowRemoveRows: "Permitir eliminar filas",
    allowRowReorder: "Permitor drag and drop de filas",
    responsiveImageSizeHelp: "No aplica si especificas el ancho o alto exacto de la imagen.",
    minImageWidth: "Ancho de imagen mínimo",
    maxImageWidth: "Ancho de imagen máximo",
    minImageHeight: "Alto de imagen mínimo",
    maxImageHeight: "Alto de imagen máximo",
    minValue: "Valor mínimo",
    maxValue: "Valor máximo",
    caseInsensitive: "No distingue entre mayúsculas y minúscu",
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
    maxCommentLength: "Longitud máxima de comentario (en caracteres)",
    commentAreaRows: "Altura del área de comentarios (en líneas)",
    autoGrowComment: "Auto-expand de comentario si es necesario",
    allowResizeComment: "Permitir a los usuarios cambiar el tamaño de las áreas de texto",
    textUpdateMode: "Actualizar valor del texto de la pregunta",
    maskType: "Tipo de máscara de entrada",
    autoFocusFirstError: "Fijar foco en la primera respuesta no válida",
    checkErrorsMode: "Ejecutar validación",
    validateVisitedEmptyFields: "Validar campos vacíos en caso de pérdida de foco",
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
    searchMode: "Modo de búsqueda",
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
    panelCount: "Número incial de panel",
    minPanelCount: "Número mínimo de paneles",
    maxPanelCount: "Número máximo de paneles",
    panelsState: "Estado de expansión del panel interno",
    prevPanelText: "Tooltip del botón de panel previo",
    nextPanelText: "Tooltip del botón de siguiente panel",
    removePanelButtonLocation: "Localización del botón eliminar panel",
    hideIfRowsEmpty: "Ocultar pregunta si no hay más filas",
    hideColumnsIfEmpty: "Ocultar columnas si no hay filas",
    rateValues: "Valores de tarifa personalizados",
    rateCount: "Recuento de tarifas",
    autoGenerate: "¿Cómo especificar valores de tasa?",
    hideIfChoicesEmpty: "Ocultar la pregunta si no contiene opciones",
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
    logoWidth: "Ancho de Logo (en valores aceptados CSS)",
    logoHeight: "Alto de Logo (en valores aceptados CSS)",
    readOnly: "Sólo-lectura",
    enableIf: "Editable si",
    noRowsText: "Mensaje \"Sin filas\"",
    separateSpecialChoices: "Opciones de separación especiales (None, Other, Select All)",
    choicesFromQuestion: "Copiar opciones de la siguiente pregunta",
    choicesFromQuestionMode: "Qué opciones a copiar?",
    choiceValuesFromQuestion: "Utilice los valores de la siguiente columna de matriz o pregunta de panel como ID de opción",
    choiceTextsFromQuestion: "Utilice los valores de la siguiente columna de matriz o pregunta de panel como textos de elección",
    progressBarShowPageTitles: "Mostrar los títulos de las páginas en la barra de progreso",
    progressBarShowPageNumbers: "Mostrar números de página en la barra de progreso",
    showCommentArea: "Mostrar el área de comentarios",
    commentPlaceholder: "Marcador de posición del área de comentarios",
    displayRateDescriptionsAsExtremeItems: "Mostrar descripciones de velocidad como valores extremos",
    rowOrder: "Orden de filas",
    columnsLayout: "Disposición de columnas",
    columnColCount: "Número de columnas anidadas",
    correctAnswer: "Respuesta correcta",
    defaultPanelValue: "Valores por defecto",
    cells: "Textos de celda",
    fileInputPlaceholder: "Seleccione un archivo o pegue un enlace de archivo...",
    keyName: "Columna clave",
    itemvalue: {
      visibleIf: "Haga que la opción sea visible si",
      enableIf: "Haga que la opción sea seleccionable si"
    },
    "itemvalue@rows": {
      visibleIf: "Haga que la fila sea visible si",
      enableIf: "Hacer que la fila sea editable si"
    },
    imageitemvalue: {
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
    previewMode: "Modo de vista previa",
    gridLayoutEnabled: "Habilitar el diseño de cuadrícula",
    gridLayoutColumns: "Columnas de diseño de cuadrícula",
    maskSettings: "Ajustes de la máscara",
    detailErrorLocation: "Alineación de mensajes de error de expansión de filas",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Diseño de paneles"
      },
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
      mask: "Configuración de la máscara de entrada",
      layout: {
        panel: "Diseño",
        question: "Diseño",
        base: "Diseño"
      },
      data: "Datos",
      validation: "Validación",
      cells: "Células",
      showOnCompleted: "Mostrar en completado",
      logo: "Logo en el título de la encuesta",
      slider: "Slider",
      expression: "Expresión",
      questionSettings: "Configuración de la pregunta",
      header: "Encabezado",
      background: "Fondo",
      appearance: "Apariencia",
      accentColors: "Colores de acento",
      surfaceBackground: "Fondo de superficie",
      scaling: "Escalada",
      others: "Otras"
    },
    editProperty: "Editar propiedad '{0}'",
    items: "[Artículos: {0}]",
    choicesVisibleIf: "Opciones son visibles si",
    choicesEnableIf: "Opciones son seleccionables si",
    columnsEnableIf: "Columnas son visibles si",
    rowsEnableIf: "Filas son visibles si",
    innerIndent: "Añadir indents internos",
    copyDefaultValueFromLastEntry: "Usar las respuestas de la última entrada como predeterminadas",
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
    verticalAlign: "Alineación vertical",
    alternateRows: "Alternar filas",
    columnsVisibleIf: "Columnas son visibles si",
    rowsVisibleIf: "Filas son visibes si",
    otherPlaceholder: "Marcador de posición del área de comentarios",
    filePlaceholder: "Texto del marcador de posición del archivo",
    photoPlaceholder: "Texto del marcador de posición de la foto",
    fileOrPhotoPlaceholder: "Texto de marcador de posición de archivo o foto",
    rateType: "Tipo de tarifa",
    url_placeholder: "Ej.: https://api.example.com/books",
    path_placeholder: "Ej.: categories.fiction",
    questionStartIndex_placeholder: "Ej.: a)",
    width_placeholder: "Ej.: 6 pulgadas",
    minWidth_placeholder: "Ej.: 600px",
    maxWidth_placeholder: "Ej.: 50%",
    imageHeight_placeholder: "Automático",
    imageWidth_placeholder: "Automático",
    itemTitleWidth_placeholder: "Ej.: 100px",
    theme: {
      themeName: "Tema",
      isPanelless: "Apariencia de la pregunta",
      editorPanel: "Fondo y radio de vértice",
      questionPanel: "Fondo y radio de vértice",
      primaryColor: "Color de acento",
      panelBackgroundTransparency: "Opacidad del fondo del panel",
      questionBackgroundTransparency: "Opacidad del fondo de la pregunta",
      fontSize: "Tamaño de fuente",
      scale: "Escama",
      cornerRadius: "Radio de esquina",
      advancedMode: "Modo avanzado",
      pageTitle: "Fuente del título",
      pageDescription: "Fuente descriptiva",
      questionTitle: "Fuente del título",
      questionDescription: "Fuente descriptiva",
      editorFont: "Fuente",
      backgroundOpacity: "Opacidad",
      "--sjs-font-family": "Familia tipográfica",
      "--sjs-general-backcolor-dim": "Color de fondo",
      "--sjs-primary-backcolor": "Fondo de acento",
      "--sjs-primary-forecolor": "Acento en primer plano",
      "--sjs-special-red": "Mensajes de error",
      "--sjs-shadow-small": "Efectos de sombra",
      "--sjs-shadow-inner": "Efectos de sombra",
      "--sjs-border-default": "Colores"
    },
    "header@header": {
      headerView: "Vista",
      logoPosition: "Posición del logotipo",
      surveyTitle: "Fuente del título de la encuesta",
      surveyDescription: "Fuente de descripción de la encuesta",
      headerTitle: "Fuente del título de la encuesta",
      headerDescription: "Fuente de descripción de la encuesta",
      inheritWidthFrom: "Ancho del área de contenido",
      textAreaWidth: "Ancho del texto",
      backgroundColorSwitch: "Color de fondo",
      backgroundImage: "Imagen de fondo",
      backgroundImageOpacity: "Opacidad",
      overlapEnabled: "Solapar",
      logoPositionX: "Posición del logotipo",
      titlePositionX: "Posición en el título",
      descriptionPositionX: "Descripción posición"
    }
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
    selected: "Seleccionado",
    unselected: "Sin seleccionar",
    decimal: "decimal",
    currency: "divisa",
    percent: "porcentaje",
    firstExpanded: "Primer Expandido",
    off: "no mostrar",
    list: "lista",
    carousel: "Carrusel",
    tab: "Pestañas",
    progressTop: "Progreso superior",
    progressBottom: "Progreso inferior",
    progressTopBottom: "Progreso inferior/superior",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "arriba",
    bottom: "abajo",
    topBottom: "arriba y abajo",
    both: "ambas",
    left: "izquierda",
    right: "Derecha",
    center: "Centro",
    leftRight: "Izquierda y derecha",
    middle: "Medio",
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
    edit: "editar",
    display: "mostrar",
    contain: "Contener",
    cover: "Cubrir",
    fill: "Llenar",
    next: "Próximo",
    last: "Último",
    onComplete: "Al completarse",
    onHidden: "Al ocultarse",
    onHiddenContainer: "Cuando la pregunta o su panel/página se oculta",
    clearInvisibleValues: {
      none: "Nunca"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "Nombre completo",
      "honorific-prefix": "Prefijo",
      "given-name": "Nombre",
      "additional-name": "Segundo nombre",
      "family-name": "Apellido",
      "honorific-suffix": "Sufijo",
      nickname: "Apodo",
      "organization-title": "Título del trabajo",
      username: "Nombre de usuario",
      "new-password": "Nueva contraseña",
      "current-password": "Contraseña actual",
      organization: "Nombre de la organización",
      "street-address": "Dirección completa",
      "address-line1": "Línea de dirección 1",
      "address-line2": "Línea de dirección 2",
      "address-line3": "Línea de dirección 3",
      "address-level4": "Dirección de nivel 4",
      "address-level3": "Dirección de nivel 3",
      "address-level2": "Dirección de nivel 2",
      "address-level1": "Dirección de nivel 1",
      country: "Código de país",
      "country-name": "Nombre del país",
      "postal-code": "Código postal",
      "cc-name": "Nombre del titular de la tarjeta",
      "cc-given-name": "Nombre del titular de la tarjeta",
      "cc-additional-name": "Segundo nombre del titular de la tarjeta",
      "cc-family-name": "Apellido del titular de la tarjeta",
      "cc-number": "Número de tarjeta de crédito",
      "cc-exp": "Fecha de caducidad",
      "cc-exp-month": "Mes de vencimiento",
      "cc-exp-year": "Año de vencimiento",
      "cc-csc": "Código de seguridad de la tarjeta",
      "cc-type": "Tipo de tarjeta de crédito",
      "transaction-currency": "Moneda de la transacción",
      "transaction-amount": "Monto de la transacción",
      language: "Idioma preferido",
      bday: "Cumpleaños",
      "bday-day": "Día de cumpleaños",
      "bday-month": "Mes de cumpleaños",
      "bday-year": "Año de cumpleaños",
      sex: "Género",
      url: "URL del sitio web",
      photo: "Foto de perfil",
      tel: "Número de teléfono",
      "tel-country-code": "Código de país para el teléfono",
      "tel-national": "Número de teléfono nacional",
      "tel-area-code": "Código de área",
      "tel-local": "Número de teléfono local",
      "tel-local-prefix": "Prefijo de teléfono local",
      "tel-local-suffix": "Sufijo de teléfono local",
      "tel-extension": "Extensión de teléfono",
      email: "Dirección de correo electrónico",
      impp: "Protocolo de mensajería instantánea"
    },
    maskType: {
      none: "Ninguno",
      pattern: "Patrón",
      numeric: "Numérico",
      datetime: "Fecha y hora",
      currency: "Divisa"
    },
    inputTextAlignment: {
      auto: "Automático",
      left: "Izquierda",
      right: "Derecha"
    },
    all: "todas",
    page: "página",
    survey: "encuesta",
    onNextPage: "Al cambiar página",
    onValueChanged: "Al cambiar valor",
    onValueChanging: "Antes de que una pregunta sea cambiada",
    questionsOnPageMode: {
      standard: "Estructura original",
      singlePage: "Mostrar todas las preguntas en una sola página",
      questionPerPage: "Mostrar una sola pregunta por página"
    },
    noPreview: "sin vista previa",
    showAllQuestions: "Mostrar vista previa con todas las preguntas",
    showAnsweredQuestions: "Mostrar vista previa con preguntas contestadas",
    allQuestions: "Mostrar todas las preguntas",
    answeredQuestions: "Mostrar solo las preguntas respondidas",
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
    auto: "Automático",
    showNavigationButtons: {
      none: "Oculto"
    },
    timerInfoMode: {
      combined: "Ambos"
    },
    addRowButtonLocation: {
      default: "Depende de la disposición de la matriz"
    },
    panelsState: {
      default: "Usuarios no pueden expandir o colapsar paneles",
      collapsed: "Todos los paneles colapsados",
      expanded: "Todos los paneles expandidos",
      firstExpanded: "Primera expansión"
    },
    widthMode: {
      static: "Estático",
      responsive: "Sensible"
    },
    contentMode: {
      image: "Imagen",
      video: "Vídeo",
      youtube: "YouTube (en inglés)"
    },
    displayMode: {
      buttons: "Botomes",
      dropdown: "Menú desplegable"
    },
    rateColorMode: {
      default: "Predeterminado",
      scale: "Escama"
    },
    scaleColorMode: {
      monochrome: "Monocromo",
      colored: "Coloreado"
    },
    autoGenerate: {
      "true": "Generar",
      "false": "Entrar manualmente"
    },
    rateType: {
      labels: "Etiquetas",
      stars: "Estrellas",
      smileys: "Emoticonos"
    },
    state: {
      default: "Cerrado con llave"
    },
    showQuestionNumbers: {
      default: "Numeración automática",
      on: "Numeración automática",
      onPage: "Restablecer en cada página",
      onpanel: "Restablecer en cada panel",
      onPanel: "Restablecer en cada panel",
      recursive: "Numeración recursiva",
      onSurvey: "Continuar a través de la encuesta",
      off: "Sin numeración"
    },
    descriptionLocation: {
      underTitle: "Bajo el título de la pregunta",
      underInput: "En el campo de entrada"
    },
    selectToRankAreasLayout: {
      horizontal: "Junto a las opciones",
      vertical: "Opciones anteriores"
    },
    displayStyle: {
      decimal: "Decimal",
      currency: "Divisa",
      percent: "Porcentaje",
      date: "Fecha"
    },
    totalDisplayStyle: {
      decimal: "Decimal",
      currency: "Divisa",
      percent: "Porcentaje",
      date: "Fecha"
    },
    rowOrder: {
      initial: "Texto original en"
    },
    questionOrder: {
      initial: "Texto original en"
    },
    progressBarLocation: {
      top: "Arriba",
      bottom: "Fondo",
      topbottom: "Arriba y abajo",
      aboveheader: "Encima del encabezado",
      belowheader: "Debajo del encabezado",
      off: "Escondido"
    },
    sum: "Suma",
    count: "Contar",
    min: "Min",
    max: "Máximo",
    avg: "Avg",
    searchMode: {
      contains: "Contiene",
      startsWith: "Comienza con"
    },
    backgroundImageFit: {
      auto: "Automático",
      cover: "Cubrir",
      contain: "Contener",
      fill: "Elasticidad",
      tile: "Teja"
    },
    backgroundImageAttachment: {
      fixed: "Fijo",
      scroll: "Pergamino"
    },
    headerView: {
      basic: "Básico",
      advanced: "Avanzado"
    },
    inheritWidthFrom: {
      survey: "Igual que la encuesta",
      container: "Ajuste al contenedor"
    },
    backgroundColorSwitch: {
      none: "Ninguno",
      accentColor: "Color de acento",
      custom: "Costumbre"
    },
    colorPalette: {
      light: "Luz",
      dark: "Oscuro"
    },
    isPanelless: {
      "false": "Predeterminado",
      "true": "Sin paneles"
    },
    progressBarInheritWidthFrom: {
      survey: "Igual que la encuesta",
      container: "Igual que el contenedor"
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
  peplaceholder: {
    patternmask: {
      pattern: "Ej.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Ej.: mm/dd/aaaa"
    },
    currencymask: {
      prefix: "Ej.: $",
      suffix: "Ej.: USD"
    },
    panelbase: {
      questionTitleWidth: "Ej.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Ej.: 30%",
      questionTitleWidth: "Ej.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Un ID de panel que no es visible para los encuestados.",
      description: "Escriba un subtítulo de panel.",
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad del panel.",
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que desactive el modo de solo lectura para el panel.",
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta.",
      questionTitleLocation: "Se aplica a todas las preguntas de este panel. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas individuales. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada).",
      questionTitleWidth: "Establece un ancho coherente para los títulos de las preguntas cuando están alineados a la izquierda de sus cuadros de preguntas. Acepta valores CSS (px, %, in, pt, etc.).",
      questionErrorLocation: "Establece la ubicación de un mensaje de error en relación con todas las preguntas del panel. La opción \"Heredar\" aplica la configuración a nivel de página (si se establece) o a nivel de encuesta.",
      questionOrder: "Mantiene el orden original de las preguntas o las aleatoriza. La opción \"Heredar\" aplica la configuración a nivel de página (si se establece) o a nivel de encuesta.",
      page: "Cambia la posición del panel al final de una página seleccionada.",
      innerIndent: "Añade espacio o margen entre el contenido del panel y el borde izquierdo del cuadro del panel.",
      startWithNewLine: "Anule la selección para mostrar el panel en una línea con la pregunta o el panel anterior. La configuración no se aplica si el panel es el primer elemento del formulario.",
      state: "Elija entre: \"Expandido\": el panel se muestra en su totalidad y se puede contraer; \"Contraído\": el panel muestra solo el título y la descripción y se puede expandir; \"Bloqueado\": el panel se muestra en su totalidad y no se puede contraer.",
      width: "Define la anchura del panel en proporción a otros elementos topográficos de la misma línea. Acepta valores CSS (px, %, in, pt, etc.).",
      showQuestionNumbers: "Asigna números a las preguntas anidadas dentro de este panel.",
      effectiveColSpan: "Especifica el número de columnas que abarca este panel dentro del diseño de cuadrícula.",
      gridLayoutColumns: "Esta tabla le permite configurar cada columna de cuadrícula dentro del panel. Establece automáticamente el porcentaje de ancho para cada columna en función del número máximo de elementos en una fila. Para personalizar el diseño de la cuadrícula, ajuste manualmente estos valores y defina el ancho del título para todas las preguntas de cada columna."
    },
    paneldynamic: {
      name: "Un ID de panel que no es visible para los encuestados.",
      description: "Escriba un subtítulo de panel.",
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad del panel.",
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que desactive el modo de solo lectura para el panel.",
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta.",
      templateQuestionTitleLocation: "Se aplica a todas las preguntas de este panel. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas individuales. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada).",
      templateQuestionTitleWidth: "Establece un ancho coherente para los títulos de las preguntas cuando están alineados a la izquierda de sus cuadros de pregunta. Acepta valores CSS (px, %, in, pt, etc.).",
      templateErrorLocation: "Establece la ubicación de un mensaje de error en relación con una pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada).",
      errorLocation: "Establece la ubicación de un mensaje de error en relación con todas las preguntas del panel. La opción \"Heredar\" aplica la configuración a nivel de página (si se establece) o a nivel de encuesta.",
      page: "Cambia la posición del panel al final de una página seleccionada.",
      innerIndent: "Añade espacio o margen entre el contenido del panel y el borde izquierdo del cuadro del panel.",
      startWithNewLine: "Anule la selección para mostrar el panel en una línea con la pregunta o el panel anterior. La configuración no se aplica si el panel es el primer elemento del formulario.",
      state: "Elija entre: \"Expandido\": el panel se muestra en su totalidad y se puede contraer; \"Contraído\": el panel muestra solo el título y la descripción y se puede expandir; \"Bloqueado\": el panel se muestra en su totalidad y no se puede contraer.",
      width: "Define la anchura del panel en proporción a otros elementos topográficos de la misma línea. Acepta valores CSS (px, %, in, pt, etc.).",
      templateTitle: "Escriba una plantilla para los títulos de los paneles dinámicos. Utilice {panelIndex} para la posición general del panel y {visiblePanelIndex} para su orden entre los paneles visibles. Inserte estos marcadores de posición en el patrón para agregar numeración automática.",
      templateTabTitle: "Escriba una plantilla para los títulos de las pestañas. Utilice {panelIndex} para la posición general de un panel y {visiblePanelIndex} para su orden entre los paneles visibles. Inserte estos marcadores de posición en el patrón para agregar numeración automática.",
      tabTitlePlaceholder: "Texto de reserva para los títulos de tabulación que se aplica cuando el patrón de título de tabulación no genera un valor significativo.",
      templateVisibleIf: "Esta configuración le permite controlar la visibilidad de paneles individuales dentro del panel dinámico. Utilice el marcador de posición '{panel}' para hacer referencia al panel actual en la expresión.",
      titleLocation: "Esta configuración es heredada automáticamente por todas las preguntas dentro de este panel. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas individuales. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada).",
      descriptionLocation: "La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Debajo del título del panel\" de forma predeterminada).",
      newPanelPosition: "Define la posición de un panel recién añadido. De forma predeterminada, los nuevos paneles se agregan al final. Seleccione \"Siguiente\" para insertar un nuevo panel después del actual.",
      copyDefaultValueFromLastEntry: "Duplica las respuestas del último panel y las asigna al siguiente panel dinámico agregado.",
      keyName: "Haga referencia a un nombre de pregunta para requerir que un usuario proporcione una respuesta única para esta pregunta en cada panel."
    },
    copyDefaultValueFromLastEntry: "Duplica las respuestas de la última fila y las asigna a la siguiente fila dinámica agregada.",
    defaultValueExpression: "Esta configuración le permite asignar un valor de respuesta predeterminado basado en una expresión. La expresión puede incluir cálculos básicos: '{q1_id} + {q2_id}', expresiones booleanas, como '{edad} > 60', y funciones: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. El valor determinado por esta expresión sirve como el valor predeterminado inicial que puede ser anulado por la entrada manual de un encuestado.",
    resetValueIf: "Usa el ícono de la varita mágica para establecer una regla condicional que determine cuándo la entrada de un encuestado se restablece al valor basado en la \"Expresión de valor predeterminado\" o \"Expresión de valor establecido\" o al valor de \"Respuesta predeterminada\" (si cualquiera de los dos está establecido).",
    setValueIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine cuándo ejecutar la \"Expresión de valor establecido\" y asigne dinámicamente el valor resultante como respuesta.",
    setValueExpression: "Especifique una expresión que defina el valor que se establecerá cuando se cumplan las condiciones de la regla \"Establecer valor si\". La expresión puede incluir cálculos básicos: '{q1_id} + {q2_id}', expresiones booleanas, como '{edad} > 60', y funciones: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. El valor determinado por esta expresión puede ser anulado por la entrada manual de un encuestado.",
    gridLayoutEnabled: "Survey Creator le permite ajustar manualmente los anchos en línea de los elementos del formulario para controlar el diseño. Si esto no produce el resultado deseado, puede habilitar el diseño de cuadrícula, que estructura elementos mediante un sistema basado en columnas. Para configurar las columnas de diseño, seleccione una página o un panel y utilice la tabla \"Configuración de preguntas\" → \"Columnas de cuadrícula\". Para ajustar el número de columnas que abarca una pregunta, selecciónela y establezca el valor deseado en el campo \"Diseño\" → \"Intervalo de columnas\".",
    question: {
      name: "Un identificador de pregunta que no es visible para los encuestados.",
      description: "Escribe un subtítulo para la pregunta.",
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la pregunta.",
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura para la pregunta.",
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida que la encuesta avance o se envíe a menos que la pregunta reciba una respuesta.",
      startWithNewLine: "Anule la selección para mostrar la pregunta en una línea con la pregunta o el panel anterior. La configuración no se aplica si la pregunta es el primer elemento del formulario.",
      page: "Cambia la posición de la pregunta al final de una página seleccionada.",
      state: "Elija entre: \"Expandido\": el cuadro de pregunta se muestra en su totalidad y se puede contraer; \"Contraído\": el cuadro de pregunta muestra solo el título y la descripción y se puede expandir; \"Bloqueado\": el cuadro de pregunta se muestra en su totalidad y no se puede contraer.",
      titleLocation: "Anula las reglas de alineación de títulos definidas en un panel, página o encuesta. La opción \"Heredar\" aplica cualquier configuración de nivel superior (si está establecida) o configuración de nivel de encuesta (\"Superior\" de forma predeterminada).",
      descriptionLocation: "La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Bajo el título de la pregunta\" de forma predeterminada).",
      errorLocation: "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Superior\" de forma predeterminada).",
      indent: "Agrega espacio o margen entre el contenido de la pregunta y el borde izquierdo del cuadro de pregunta.",
      width: "Establece el ancho de la pregunta en proporción a otros elementos de la encuesta en la misma línea. Acepta valores CSS (px, %, in, pt, etc.).",
      surveyvalidator: {
        expression: "Utilice el icono de la varita mágica para establecer una regla de validación para la pregunta."
      },
      textUpdateMode: "Elija entre: \"Al perder el foco\": el valor se actualiza cuando el campo de entrada pierde el foco; \"Mientras escribes\": el valor se actualiza en tiempo real, a medida que los usuarios escriben. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Al perder el foco\" de forma predeterminada).",
      url: "Puede utilizar cualquier servicio web como fuente de datos para preguntas de opción múltiple. Para rellenar los valores de opción, introduzca la dirección URL del servicio que proporciona los datos.",
      searchMode: "Operación de comparación que se utiliza para filtrar la lista desplegable.",
      textWrapEnabled: "Los textos largos en las opciones de elección generarán automáticamente saltos de línea para que se ajusten al menú desplegable. Anule la selección si desea que los textos se recorten.",
      effectiveColSpan: "Especifica el número de columnas que abarca esta pregunta dentro del diseño de cuadrícula."
    },
    signaturepad: {
      signatureWidth: "Define la anchura del área de firma mostrada y de la imagen resultante.",
      signatureHeight: "Define la altura del área de firma mostrada y de la imagen resultante.",
      signatureAutoScaleEnabled: "Seleccione esta opción si desea que el área de firma ocupe todo el espacio disponible dentro del cuadro de pregunta manteniendo la relación de aspecto predeterminada de 3:2. Cuando se establecen valores de anchura y altura personalizados, la configuración mantendrá la relación de aspecto de estas dimensiones."
    },
    file: {
      imageHeight: "Ajusta la altura de la imagen en los resultados de la encuesta.",
      imageWidth: "Ajusta el ancho de la imagen en los resultados de la encuesta.",
      allowImagesPreview: "Muestra vistas previas en miniatura de los archivos cargados cuando es posible. Anule la selección si desea mostrar los iconos de archivo en su lugar."
    },
    image: {
      contentMode: "La opción \"Auto\" determina automáticamente el modo adecuado para la visualización (Imagen, Video o YouTube) en función de la URL de origen proporcionada."
    },
    imagepicker: {
      imageHeight: "Anula los valores de altura mínima y máxima.",
      imageWidth: "Anula los valores de anchura mínima y máxima.",
      choices: "\"Valor\" sirve como un identificador de elemento que se usa en las reglas condicionales; \"Texto\" se muestra a los encuestados.",
      contentMode: "Elija entre \"Imagen\" y \"Video\" para configurar el modo de contenido del selector de medios. Si se selecciona \"Imagen\", asegúrese de que todas las opciones proporcionadas sean archivos de imagen en los siguientes formatos: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Del mismo modo, si se selecciona \"Vídeo\", asegúrese de que todas las opciones sean enlaces directos a archivos de vídeo en los siguientes formatos: MP4, MOV, WMV, FLV, AVI, MKV. Tenga en cuenta que los enlaces de YouTube no son compatibles con las opciones de video."
    },
    text: {
      size: "Esta configuración solo cambia el tamaño del campo de entrada y no afecta al ancho del cuadro de pregunta. Para limitar la longitud de entrada aceptada, vaya a <b>Validación → Límite máximo de caracteres</b>."
    },
    comment: {
      rows: "Establece el número de líneas mostradas en el campo de entrada. Si la entrada ocupa más líneas, aparecerá la barra de desplazamiento."
    },
    // survey templates
    survey: {
      readOnly: "Seleccione si desea evitar que los encuestados completen su encuesta.",
      progressBarLocation: "Establece la ubicación de la barra de progreso. El valor \"Auto\" muestra la barra de progreso por encima o por debajo del encabezado de la encuesta."
    },
    matrixdropdowncolumn: {
      name: "Un identificador de columna que no es visible para los encuestados.",
      isUnique: "Cuando se habilita para una columna, se requiere que un encuestado proporcione una respuesta única para cada pregunta dentro de esta columna.",
      rows: "Establece el número de líneas mostradas en el campo de entrada. Si la entrada ocupa más líneas, aparecerá la barra de desplazamiento.",
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la columna.",
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura para la columna.",
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta.",
      showInMultipleColumns: "Cuando se selecciona, crea una columna individual para cada opción de opción.",
      colCount: "Organiza las opciones de elección en un diseño de varias columnas. Cuando se establece en 0, las opciones se muestran en una sola línea. Cuando se establece en -1, el valor real se hereda de la propiedad \"Recuento de columnas anidadas\" de la matriz principal."
    },
    caseInsensitive: "Seleccione si las letras mayúsculas y minúsculas de la expresión regular deben tratarse como equivalentes.",
    widthMode: "Elija entre: \"Estático\": establece un ancho fijo; \"Responsivo\": hace que la encuesta ocupe todo el ancho de la pantalla; \"Auto\": aplica cualquiera de los dos dependiendo de los tipos de preguntas utilizados.",
    cookieName: "Las cookies impiden que los usuarios completen la misma encuesta dos veces.",
    logo: "Pegue un enlace de imagen (sin límites de tamaño) o haga clic en el icono de la carpeta para buscar un archivo desde su computadora (hasta 64 KB).",
    logoWidth: "Establece el ancho del logotipo en unidades CSS (px, %, in, pt, etc.).",
    logoHeight: "Establece la altura del logotipo en unidades CSS (px, %, in, pt, etc.).",
    logoFit: "Elija entre: \"Ninguno\": la imagen mantiene su tamaño original; \"Contener\": se cambia el tamaño de la imagen para que se ajuste manteniendo su relación de aspecto; \"Portada\": la imagen llena toda la caja manteniendo su relación de aspecto; \"Relleno\": la imagen se estira para llenar el cuadro sin mantener su relación de aspecto.",
    autoAdvanceEnabled: "Seleccione si desea que la encuesta avance automáticamente a la página siguiente una vez que un encuestado haya respondido todas las preguntas en la página actual. Esta función no se aplicará si la última pregunta de la página es abierta o permite varias respuestas.",
    autoAdvanceAllowComplete: "Seleccione si desea que la encuesta se complete automáticamente después de que un encuestado responda todas las preguntas.",
    showNavigationButtons: "Establece la visibilidad y la ubicación de los botones de navegación en una página.",
    navigationButtonsLocation: "Establece la ubicación de los botones de navegación en una página.",
    showPreviewBeforeComplete: "Habilite la página de vista previa con todas las preguntas o solo las respondidas.",
    questionTitleLocation: "Se aplica a todas las preguntas de la encuesta. Esta configuración se puede anular mediante reglas de alineación de títulos en niveles inferiores: panel, página o pregunta. Una configuración de nivel inferior anulará las de un nivel superior.",
    requiredMark: "Un símbolo o una secuencia de símbolos que indican que se requiere una respuesta.",
    questionStartIndex: "Introduzca un número o una letra con la que desee empezar a numerar.",
    questionErrorLocation: "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta.",
    autoFocusFirstQuestion: "Seleccione si desea que el primer campo de entrada de cada página esté listo para la entrada de texto.",
    questionOrder: "Mantiene el orden original de las preguntas o las aleatoriza. El efecto de esta configuración solo es visible en la pestaña Vista previa.",
    maxTextLength: "Solo para preguntas de entrada de texto.",
    maxCommentLength: "Solo para comentarios de preguntas.",
    commentAreaRows: "Establece el número de líneas mostradas en las áreas de texto para los comentarios de las preguntas. Si la entrada ocupa más líneas, aparece la barra de desplazamiento.",
    autoGrowComment: "Seleccione si desea que los comentarios de las preguntas y las preguntas de texto largo aumenten automáticamente en altura en función de la longitud del texto introducido.",
    allowResizeComment: "Solo para comentarios de preguntas y preguntas de texto largo.",
    calculatedValues: "Las variables personalizadas sirven como variables intermedias o auxiliares que se utilizan en los cálculos de formularios. Toman las entradas de los encuestados como valores de origen. Cada variable personalizada tiene un nombre único y una expresión en la que se basa.",
    includeIntoResult: "Seleccione si desea que el valor calculado de la expresión se guarde junto con los resultados de la encuesta.",
    triggers: "Un desencadenador es un evento o condición que se basa en una expresión. Una vez que la expresión se evalúa como \"verdadera\", un desencadenador desencadena una acción. Opcionalmente, una acción de este tipo puede tener una pregunta de destino a la que afecta.",
    clearInvisibleValues: "Elija si desea o no borrar los valores de las preguntas ocultas por la lógica condicional y cuándo hacerlo.",
    textUpdateMode: "Elija entre: \"Al perder el foco\": el valor se actualiza cuando el campo de entrada pierde el foco; \"Mientras escribes\": el valor se actualiza en tiempo real, a medida que los usuarios escriben.",
    columns: "El valor de la izquierda sirve como identificador de columna que se usa en las reglas condicionales, el valor de la derecha se muestra a los encuestados.",
    rows: "El valor de la izquierda sirve como un ID de fila que se usa en las reglas condicionales, el valor de la derecha se muestra a los encuestados.",
    columnMinWidth: "Acepta valores CSS (px, %, in, pt, etc.).",
    rowTitleWidth: "Acepta valores CSS (px, %, in, pt, etc.).",
    totalText: "Visible sólo cuando al menos una columna tiene el tipo Total o la expresión Total.",
    cellErrorLocation: "Establece la ubicación de un mensaje de error en relación con una celda con entrada no válida. La opción \"Heredar\" aplica la configuración de la propiedad \"Alineación de mensajes de error\".",
    detailErrorLocation: "Establece la ubicación de los mensajes de error para las preguntas anidadas en secciones de detalle. La opción \"Heredar\" aplica la configuración de la propiedad \"Alineación de mensajes de error\".",
    keyDuplicationError: "Cuando la propiedad \"Evitar respuestas duplicadas\" está habilitada, un encuestado que intente enviar una entrada duplicada recibirá el siguiente mensaje de error.",
    totalExpression: "Permite calcular los valores totales en función de una expresión. La expresión puede incluir cálculos básicos ('{q1_id} + {q2_id}'), expresiones booleanas ('{edad} > 60') y funciones ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    confirmDelete: "Activa un mensaje en el que se le pide que confirme la eliminación de filas.",
    keyName: "Si la columna especificada contiene valores idénticos, la encuesta arroja el error \"Valor de clave no única\".",
    description: "Escribe un subtítulo.",
    locale: "Elige un idioma para comenzar a crear tu encuesta. Para agregar una traducción, cambie a un nuevo idioma y traduzca el texto original aquí o en la pestaña Traducciones.",
    detailPanelMode: "Establece la ubicación de una sección de detalles en relación con una fila. Elija entre: \"Ninguno\": no se agrega ninguna expansión; \"Debajo de la fila\": se coloca una expansión de fila debajo de cada fila de la matriz; \"Debajo de la fila, mostrar solo una expansión de fila\": una expansión se muestra solo debajo de una sola fila, las expansiones de fila restantes se contraen.",
    imageFit: "Elija entre: \"Ninguno\": la imagen mantiene su tamaño original; \"Contener\": se cambia el tamaño de la imagen para que se ajuste manteniendo su relación de aspecto; \"Portada\": la imagen llena toda la caja manteniendo su relación de aspecto; \"Relleno\": la imagen se estira para llenar el cuadro sin mantener su relación de aspecto.",
    autoGrow: "Aumenta gradualmente la altura del campo de entrada a medida que se introducen los datos. Anula el ajuste \"Altura del campo de entrada (en líneas)\".",
    allowResize: "El controlador de cambio de tamaño (o pinzamiento) aparece en la esquina y se puede arrastrar para modificar el tamaño del campo de entrada.",
    timeLimit: "Un intervalo de tiempo en segundos después del cual la encuesta avanza automáticamente a la página de agradecimiento.",
    timeLimitPerPage: "Un intervalo de tiempo en segundos después del cual la encuesta avanza automáticamente a la página siguiente.",
    validateVisitedEmptyFields: "Habilite esta opción para desencadenar la validación cuando un usuario se centre en un campo de entrada vacío y, a continuación, lo abandone sin realizar ningún cambio.",
    page: {
      name: "Un ID de página que no es visible para los encuestados.",
      description: "Escribe un subtítulo de página.",
      navigationTitle: "Un título que se muestra en un botón de navegación en la barra de progreso o en la tabla de contenido (TDC). Si dejas este campo vacío, el botón de navegación utilizará el título o el nombre de la página. Para habilitar la barra de progreso o la tabla de contenido, vaya a \"Encuesta\" → \"Navegación\".",
      timeLimit: "Un intervalo de tiempo en segundos después del cual la encuesta avanza automáticamente a la página siguiente.",
      visibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la página.",
      enableIf: "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura de la página.",
      requiredIf: "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta.",
      questionTitleLocation: "Se aplica a todas las preguntas de esta página. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas o paneles individuales. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Superior\" de forma predeterminada).",
      questionTitleWidth: "Establece un ancho coherente para los títulos de las preguntas cuando están alineados a la izquierda de sus cuadros de preguntas. Acepta valores CSS (px, %, in, pt, etc.).",
      questionErrorLocation: "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Superior\" de forma predeterminada).",
      questionOrder: "Mantiene el orden original de las preguntas o las aleatoriza. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Original\" de forma predeterminada). El efecto de esta configuración solo es visible en la pestaña Vista previa.",
      showNavigationButtons: "Establece la visibilidad de los botones de navegación en la página. La opción \"Heredar\" aplica la configuración de nivel de encuesta, que por defecto es \"Visible\".",
      gridLayoutColumns: "Esta tabla le permite configurar cada columna de cuadrícula en la página. Establece automáticamente el porcentaje de ancho para cada columna en función del número máximo de elementos en una fila. Para personalizar el diseño de la cuadrícula, ajuste manualmente estos valores y defina el ancho del título para todas las preguntas de cada columna."
    },
    timerLocation: "Establece la ubicación de un temporizador en una página.",
    panelsState: "Elija entre: \"Bloqueado\": los usuarios no pueden expandir ni contraer paneles; \"Contraer todo\": todos los paneles comienzan en un estado contraído; \"Expandir todo\": todos los paneles comienzan en un estado expandido; \"Primero expandido\": solo el primer panel se expande inicialmente.",
    imageLinkName: "Introduzca un nombre de propiedad compartida dentro de la matriz de objetos que contiene las direcciones URL de los archivos de imagen o vídeo que desea mostrar en la lista de opciones.",
    choices: "El valor de la izquierda sirve como un identificador de elemento utilizado en las reglas condicionales, el valor de la derecha se muestra a los encuestados.",
    title: "Escriba un título fácil de usar para mostrar.",
    waitForUpload: "Garantiza que los usuarios no completen la encuesta hasta que se carguen los archivos.",
    minWidth: "Acepta valores CSS (px, %, in, pt, etc.).",
    maxWidth: "Acepta valores CSS (px, %, in, pt, etc.).",
    width: "Acepta valores CSS (px, %, in, pt, etc.).",
    valueName: "Si no establece esta propiedad, la respuesta se almacenará en un campo especificado por la propiedad Name.",
    defaultDisplayValue: "Un valor que se muestra en las preguntas HTML y en los títulos dinámicos y las descripciones de los elementos de la encuesta cuando el valor de la pregunta está vacío.",
    useDisplayValuesInDynamicTexts: "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Cuando se selecciona, esta configuración muestra un valor de visualización en lugar de un valor de ID en las preguntas HTML y en los títulos dinámicos y las descripciones de los elementos de la encuesta.",
    clearIfInvisible: "Elija si desea o no borrar los valores de las preguntas ocultos por la lógica condicional y cuándo hacerlo. La opción \"Heredar\" aplica la configuración de nivel de encuesta (\"Al finalizar la encuesta\" de forma predeterminada).",
    choicesFromQuestionMode: "Elija entre: \"Todas\": copia todas las opciones de elección de la pregunta seleccionada; \"Seleccionado\": copia dinámicamente solo las opciones de elección seleccionadas; \"No seleccionado\": copia dinámicamente solo las opciones de elección no seleccionadas. Las opciones \"Ninguno\" y \"Otro\" se copian de forma predeterminada si están habilitadas en la pregunta de origen.",
    choiceValuesFromQuestion: "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Esta configuración especifica qué columna de matriz o pregunta de panel debe proporcionar los identificadores.",
    choiceTextsFromQuestion: "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Esta configuración especifica qué columna de matriz o pregunta de panel debe proporcionar los textos de visualización.",
    allowCustomChoices: "Seleccione esta opción para permitir que los encuestados agreguen sus propias opciones si la opción deseada no está disponible en el menú desplegable. Las opciones personalizadas solo se almacenarán temporalmente durante la sesión actual del navegador.",
    showOtherItem: "Cuando se selecciona, los usuarios pueden incluir entradas adicionales en un cuadro de comentarios independiente.",
    separateSpecialChoices: "Muestra cada opción de opción especial (\"Ninguno\", \"Otro\", \"Seleccionar todo\") en una nueva línea, incluso cuando se utiliza un diseño de varias columnas.",
    path: "Especifique la ubicación dentro del dataset de servicio donde se encuentra la matriz de objetos de destino. Déjelo en vacío si la dirección URL ya apunta a la matriz.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Escriba un nombre de propiedad uniforme dentro de la matriz de objetos que contiene los valores que desea mostrar en la lista de opciones.",
    allowEmptyResponse: "Seleccione esta opción para permitir que el servicio devuelva una respuesta o matriz vacía.",
    choicesVisibleIf: "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de todas las opciones de elección.",
    rateValues: "El valor de la izquierda sirve como un identificador de elemento utilizado en las reglas condicionales, el valor de la derecha se muestra a los encuestados.",
    rating: {
      displayMode: "\"Auto\" selecciona entre los modos \"Botones\" y \"Desplegable\" en función del ancho disponible. Cuando el ancho es insuficiente para mostrar los botones, la pregunta muestra un menú desplegable."
    },
    valuePropertyName: "Permite conectar preguntas que producen resultados en diferentes formatos. Cuando estas preguntas se vinculan entre sí mediante un identificador de combinación, esta propiedad compartida almacena los valores de pregunta seleccionados.",
    searchEnabled: "Seleccione si desea actualizar el contenido del menú desplegable para que coincida con la consulta de búsqueda que un usuario está escribiendo en el campo de entrada.",
    valueTrue: "Un valor que se debe guardar en los resultados de la encuesta cuando los encuestados dan una respuesta positiva.",
    valueFalse: "Un valor que se debe guardar en los resultados de la encuesta cuando los encuestados dan una respuesta negativa.",
    showPreview: "No se recomienda deshabilitar esta opción, ya que anula la imagen de vista previa y dificulta que un usuario comprenda si los archivos se han cargado.",
    needConfirmRemoveFile: "Activa un mensaje que le pide que confirme la eliminación del archivo.",
    selectToRankEnabled: "Habilite esta opción para clasificar solo las opciones seleccionadas. Los usuarios arrastrarán los elementos seleccionados de la lista de opciones para ordenarlos dentro del área de clasificación.",
    dataList: "Ingrese una lista de opciones que se sugerirán al encuestado durante la entrada.",
    inputSize: "La configuración solo cambia el tamaño de los campos de entrada y no afecta al ancho del cuadro de pregunta.",
    itemTitleWidth: "Establece un ancho coherente para todas las etiquetas de los elementos. Acepta valores CSS (px, %, in, pt, etc.).",
    inputTextAlignment: "Seleccione cómo alinear el valor de entrada dentro del campo. La configuración predeterminada \"Auto\" alinea el valor de entrada a la derecha si se aplica el enmascaramiento numérico o de moneda y a la izquierda si no se aplica.",
    altText: "Sirve como sustituto cuando la imagen no se puede mostrar en el dispositivo de un usuario y por motivos de accesibilidad.",
    rateColorMode: "Define el color del emoji seleccionado cuando el tipo de icono de clasificación se establece en \"Emoticonos\". Elija entre: \"Predeterminado\": el emoji seleccionado aparece en el color predeterminado de la encuesta; \"Escala\": el emoji seleccionado hereda el color de la escala de calificación.",
    expression: {
      name: "Un identificador de expresión que no es visible para los encuestados.",
      description: "Escriba un subtítulo de expresión.",
      expression: "Una expresión puede incluir cálculos básicos ('{q1_id} + {q2_id}'), condiciones ('{edad} > 60') y funciones ('iif()', 'hoy()', 'edad()', 'min()', 'max()', 'avg()', etc.)."
    },
    storeOthersAsComment: "Seleccione esta opción para almacenar el valor de la opción \"Otro\" como una propiedad independiente en los resultados de la encuesta.",
    format: "Utilice {0} como marcador de posición para el valor real.",
    acceptedTypes: "Consulte la descripción del atributo [accept](https://www.w3schools.com/tags/att_input_accept.asp) para obtener más información.",
    columnColCount: "Aplicable solo a los tipos de celda Radiogroup y Checkbox.",
    autocomplete: "Consulte la descripción del atributo [autocompletar](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) para obtener más información.",
    filePlaceholder: "Se aplica cuando \"Tipo de fuente\" es \"Archivos locales\" o cuando la cámara no está disponible",
    photoPlaceholder: "Se aplica cuando \"Tipo de fuente\" es \"Cámara\".",
    fileOrPhotoPlaceholder: "Se aplica cuando \"Tipo de fuente\" es \"Archivos locales o cámara\".",
    colCount: "Organiza las opciones de elección en un diseño de varias columnas. Cuando se establece en 0, las opciones se muestran en una sola línea.",
    masksettings: {
      saveMaskedValue: "Seleccione si desea almacenar el valor de la pregunta con una máscara aplicada en los resultados de la encuesta."
    },
    patternmask: {
      pattern: "El patrón puede contener literales de cadena y los siguientes marcadores de posición: '9': para un dígito; 'a' - para una letra mayúscula o minúscula; '#' - para un dígito o una letra mayúscula o minúscula. Use la barra invertida '\\' para escapar de un carácter."
    },
    datetimemask: {
      pattern: "El patrón puede contener caracteres separadores y los siguientes marcadores de posición:<br>'m' - Número de mes.<br>'mm': número de mes, con cero a la izquierda para valores de un solo dígito. <br>'d' - Día del mes. <br>'dd': día del mes, con cero a la izquierda para valores de un solo dígito. <br>'yy': los dos últimos dígitos del año. <br>'yyyy' - Año de cuatro dígitos. <br>'H' - Horas en formato de 24 horas. <br>'HH': horas en formato de 24 horas, con cero a la izquierda para valores de un solo dígito. <br>'h' - Horas en formato de 12 horas. <br>'hh': horas en formato de 12 horas, con cero a la izquierda para valores de un solo dígito. <br>'MM' - Actas. <br>'ss' - Segundos. <br>'TT': período de reloj de 12 horas en mayúsculas (AM/PM). <br>'tt' - Período de reloj de 12 horas en minúsculas (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Símbolo utilizado para separar la parte fraccionaria de la parte entera de un número mostrado.",
      thousandsSeparator: "Símbolo que se utiliza para separar los dígitos de un número grande en grupos de tres.",
      precision: "Limita el número de dígitos que se conservan después del punto decimal de un número mostrado."
    },
    currencymask: {
      prefix: "Uno o varios símbolos que se mostrarán antes del valor.",
      suffix: "Uno o varios símbolos que se mostrarán después del valor."
    },
    theme: {
      isPanelless: "Esta configuración solo se aplica a las preguntas fuera de un panel.",
      primaryColor: "Establece un color complementario que resalta los elementos clave de la encuesta.",
      panelBackgroundTransparency: "Ajusta la transparencia de los paneles y cuadros de preguntas en relación con el fondo de la encuesta.",
      questionBackgroundTransparency: "Ajusta la transparencia de los elementos de entrada en relación con el fondo de la encuesta.",
      cornerRadius: "Define el radio de vértice de todos los elementos rectangulares. Active el modo avanzado si desea establecer valores de radio de vértice individuales para elementos de entrada o paneles y cuadros de preguntas.",
      "--sjs-general-backcolor-dim": "Establece el color de fondo principal de la encuesta."
    },
    header: {
      inheritWidthFrom: "La opción \"Igual que el contenedor\" ajusta automáticamente el ancho del área de contenido del encabezado para que quepa en el elemento HTML en el que se coloca la encuesta.",
      textAreaWidth: "El ancho del área de encabezado que contiene el título y la descripción de la encuesta, medido en píxeles.",
      overlapEnabled: "Cuando se habilita, la parte superior de la encuesta se superpone a la parte inferior del encabezado.",
      mobileHeight: "Cuando se establece en 0, la altura se calcula automáticamente para acomodar el contenido del encabezado."
    },
    progressBarInheritWidthFrom: "La opción \"Igual que el contenedor\" ajusta automáticamente el ancho del área de la barra de progreso para que quepa en el elemento HTML en el que se coloca la encuesta."
  },
  // Properties
  p: {
    title: {
      name: "título",
      title: "Dejarlo vacío, si es lo mismo que 'Name'"
    },
    multiSelect: "Permitir múltiple selección",
    showLabel: "Mostrar leyenda de imagen",
    swapOrder: "Cambiar el orden de Sí y No",
    value: "Valor",
    tabAlign: "Alineación de tabulaciones",
    sourceType: "Tipo de origen",
    fitToContainer: "Ajuste al contenedor",
    setValueExpression: "Establecer expresión de valor",
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
    defaultValueExpression: "Expresión de valor predeterminada",
    requiredIf: "Requerido si",
    resetValueIf: "Restablecer valor si",
    setValueIf: "Establezca el valor si",
    validators: "Validadores",
    bindings: "Enlaces",
    renderAs: "Renderizar como",
    attachOriginalItems: "Adjuntar elementos originales",
    choices: "opciones",
    choicesByUrl: "opciones por URL",
    currency: "divisa",
    cellHint: "Sugerencia de celda",
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
    inputSize: "artículos",
    itemTitleWidth: "Ancho de la etiqueta del elemento (en px)",
    inputTextAlignment: "Alineación de valores de entrada",
    elements: "Elementos",
    content: "Contenido",
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
    mobileHeight: "Altura en smartphones",
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
    selectToRankEmptyRankedAreaText: "Texto para mostrar si todas las opciones están seleccionadas",
    selectToRankEmptyUnrankedAreaText: "Texto de marcador de posición para el área de clasificación",
    allowCameraAccess: "Permitir el acceso a la cámara",
    scaleColorMode: "Modo de color de escala",
    rateColorMode: "Modo de color de tasa",
    copyDisplayValue: "Copiar valor de visualización",
    effectiveColSpan: "Tramo de columna",
    progressBarInheritWidthFrom: "Ancho del área de la barra de progreso"
  },
  theme: {
    advancedMode: "Modo avanzado",
    pageTitle: "Fuente del título de la página",
    questionTitle: "Fuente del título de la pregunta",
    editorPanel: "Elemento de entrada",
    lines: "Lineas",
    primaryDefaultColor: "Predeterminado",
    primaryDarkColor: "Cernerse",
    primaryLightColor: "Seleccionado",
    backgroundDimColor: "Color de fondo",
    cornerRadius: "Radio de esquina",
    backcolor: "Fondo predeterminado",
    hovercolor: "Pasar el cursor de fondo",
    borderDecoration: "Decoración de bordes",
    fontColor: "Color de la fuente",
    backgroundColor: "Color de fondo",
    primaryForecolor: "Color predeterminado",
    primaryForecolorLight: "Color deshabilitado",
    font: "Fuente",
    borderDefault: "Oscuro",
    borderLight: "Encendedor",
    fontFamily: "Familia tipográfica",
    fontWeightRegular: "Regular",
    fontWeightHeavy: "Pesado",
    fontWeightSemiBold: "Semi-negrita",
    fontWeightBold: "Audaz",
    color: "Color",
    placeholderColor: "Color del marcador de posición",
    size: "Tamaño",
    opacity: "Opacidad",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Agregar efecto de sombra",
    boxShadowBlur: "Desdibujar",
    boxShadowSpread: "Propagación",
    boxShadowDrop: "Soltar",
    boxShadowInner: "Interior",
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
      green: "Verde",
      gray: "Gris"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Fondo de superficie",
    "--sjs-primary-background-500": "Primario",
    "--sjs-secondary-background-500": "Secundario",
    surfaceScale: "Superficie",
    userInterfaceBaseUnit: "Interfaz de usuario",
    fontScale: "Fuente",
    names: {
      sc2020: "Creador de encuestas 2020",
      "default-light": "Luz",
      "default-dark": "Oscuro",
      "default-contrast": "Contraste"
    }
  }
};

setupLocale({ localeCode: "es", strings: spanishTranslation });

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
// pe.noRowsText: "\"No rows\" message" => "Mensaje \"Sin filas\""
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
// theme.groupAdvanced: "Advanced" => "Avanzado"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Apariencia de la pregunta"
// theme.isPanellessPanels: "Default" => "Predeterminado"
// theme.isPanellessLightweight: "Without Panels" => "Sin paneles"
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
// theme.surveyTitleFont: "Survey title font" => "Fuente del título de la encuesta"
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
// names.sharp: "Sharp" => "Afilado"
// names.borderless: "Borderless" => "Sin bordes"
// names.flat: "Flat" => "Plano"
// names.doubleborder: "Double Border" => "Doble Borde"
// names.layered: "Layered" => "Capas"
// names.solid: "Solid" => "Sólido"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "¿Está seguro de que desea eliminar todas las cadenas de este idioma?"
// ed.themeResetButton: "Reset theme settings to default" => "Restablecer la configuración predeterminada del tema"
// theme.placeholderColor: "Placeholder color" => "Color del marcador de posición"
// ed.themeSettings: "Theme Settings" => "Configuración del tema"
// ed.themeSettingsTooltip: "Open theme settings" => "Abrir la configuración del tema"
// pe.resetToDefaultCaption: "Reset" => "Restablecimiento"
// pv.file: "Local files" => "Archivos locales"
// pv.camera: "Camera" => "Cámara"
// pv.file-camera: "Local files or camera" => "Archivos locales o cámara"
// ed.translateUsigAI: "Auto-translate All" => "Traducir automáticamente todo"
// ed.translationDialogTitle: "Untranslated strings" => "Cadenas sin traducir"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Introduce al menos {0} artículos"
// lg.question_resetValueName: "Reset question value" => "Restablecer valor de pregunta"
// lg.column_resetValue: "Reset column value" => "Restablecer el valor de la columna"
// pe.markRequired: "Mark as required" => "Marcar según sea necesario"
// pe.removeRequiredMark: "Remove the required mark" => "Quitar la marca requerida"
// p.resetValueIf: "Reset value if" => "Restablecer valor si"
// lg.question_setValueName: "Set question value" => "Establecer el valor de la pregunta"
// lg.column_resetValueName: "Reset column value" => "Restablecer valor de columna"
// lg.column_setValueName: "Set column value" => "Establecer el valor de la columna"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Una expresión cuyo resultado se asignará a la pregunta de destino."
// survey.title: "Title" => "Título"
// page.title: "Title" => "Título"
// p.setValueIf: "Set value if" => "Establezca el valor si"
// theme.header: "Header" => "Encabezado"
// theme.backgroundImageFitFill: "Stretch" => "Elasticidad"
// theme.backgroundImageFitTile: "Tile" => "Teja"
// theme.headerView: "View" => "Vista"
// theme.headerViewBasic: "Basic" => "Básico"
// theme.headerViewAdvanced: "Advanced" => "Avanzado"
// theme.headerInheritWidthFrom: "Content area width" => "Ancho del área de contenido"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Igual que la encuesta"
// theme.headerInheritWidthFromPage: "Fit to page" => "Ajustar a la página"
// theme.headerTextAreaWidth: "Text width" => "Ancho del texto"
// theme.headerBackgroundColorSwitch: "Background color" => "Color de fondo"
// theme.headerBackgroundColorNone: "None" => "Ninguno"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Color de acento"
// theme.headerBackgroundColorCustom: "Custom" => "Costumbre"
// theme.horizontalAlignmentLeft: "Left" => "Izquierda"
// theme.horizontalAlignmentCenter: "Center" => "Centro"
// theme.horizontalAlignmentRight: "Right" => "Derecha"
// theme.verticalAlignmentTop: "Top" => "Arriba"
// theme.verticalAlignmentMiddle: "Middle" => "Medio"
// theme.verticalAlignmentBottom: "Bottom" => "Fondo"
// theme.logoPosition: "Logo Position" => "Posición del logotipo"
// theme.headerTitlePosition: "Title Position" => "Posición del título"
// lg.question_resetValueText: "reset value for question: {0}" => "Restablecer valor para la pregunta: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Asignar valor: {1} a la pregunta: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Restablecer el valor de celda de la columna: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Asignar valor de celda: {1} a columna: {0}"
// ed.surveyJsonExportButton: "Export" => "Exportar"
// ed.surveyJsonImportButton: "Import" => "Importación"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Copiar en el portapapeles"
// pe.filePlaceholder: "File placeholder text" => "Texto del marcador de posición del archivo"
// pe.photoPlaceholder: "Photo placeholder text" => "Texto del marcador de posición de la foto"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Texto de marcador de posición de archivo o foto"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Se aplica cuando \"Tipo de fuente\" es \"Archivos locales\" o cuando la cámara no está disponible"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Se aplica cuando \"Tipo de fuente\" es \"Cámara\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Se aplica cuando \"Tipo de fuente\" es \"Archivos locales o cámara\"."
// theme.background: "Background" => "Fondo"
// theme.appearance: "Appearance" => "Apariencia"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "¿Realmente quieres resetear el tema? Todas tus personalizaciones se perderán."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Sí, restablece el tema"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Ajuste al contenedor"
// signaturepad.showPlaceholder: "Show the placeholder" => "Mostrar el marcador de posición"
// signaturepad.placeholder: "Placeholder text" => "Texto de marcador de posición"
// theme.surveyDescriptionFont: "Survey description font" => "Fuente de descripción de la encuesta"
// ed.prevFocus: "Focus previous" => "Enfoque anterior"
// ed.nextFocus: "Focus next" => "Enfoque siguiente"
// ed.saveTheme: "Save Theme" => "Guardar tema"
// ed.saveThemeTooltip: "Save Theme" => "Guardar tema"
// lg.page_requireName: "Make page required" => "Hacer que la página sea obligatoria"
// lg.panel_requireName: "Make page required" => "Hacer que la página sea obligatoria"
// signaturepad.signatureWidth: "Signature area width" => "Ancho del área de firma"
// signaturepad.signatureHeight: "Signature area height" => "Altura del área de firma"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Escalado automático del área de firma"
// signaturepad.penMinWidth: "Minimum pen width" => "Ancho mínimo del lápiz"
// signaturepad.penMaxWidth: "Maximum pen width" => "Ancho máximo del lápiz"
// theme.headerDescriptionPosition: "Description position" => "Descripción posición"
// ed.propertyGridNoResultsFound: "No results found" => "No se han encontrado resultados"
// pv.leftRight: "Left and right" => "Izquierda y derecha"
// p.sourceType: "Source type" => "Tipo de origen"
// p.fitToContainer: "Fit to container" => "Ajuste al contenedor"
// p.setValueExpression: "Set value expression" => "Establecer expresión de valor"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Las opciones se cargan desde un servicio web."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Ir a la configuración"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Vista previa de las opciones de elección cargadas"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Evitar respuestas duplicadas en filas"
// theme.advancedMode: "Advanced mode" => "Modo avanzado"
// theme.backgroundCornerRadius: "Background and corner radius" => "Fondo y radio de vértice"
// theme.colorsTitle: "Colors" => "Colores"
// theme.font: "Font" => "Fuente"
// theme.lines: "Lines" => "Lineas"
// theme.titleFont: "Title font" => "Fuente del título"
// theme.descriptionFont: "Description font" => "Fuente descriptiva"
// theme.shadow: "Shadow effects" => "Efectos de sombra"
// ed.translateUsigAIFrom: "Translate from: " => "Traducir de: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Permitir la opción Negarse a responder"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Permitir la opción No sé"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Permitir la opción Negarse a responder"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Permitir la opción No sé"
// pv.contain: "Contain" => "Contener"
// pv.cover: "Cover" => "Cubrir"
// pv.fill: "Fill" => "Llenar"

// pe.transposeData: "Transpose rows to columns" => "Transponer filas a columnas"
// layout.panel: "Layout" => "Diseño"
// layout.question: "Layout" => "Diseño"
// layout.base: "Layout" => "Diseño"
// panel.name: "Panel name" => "Nombre del panel"
// panel.title: "Panel title" => "Título de la viñeta"
// panel.description: "Panel description" => "Descripción del panel"
// panel.visibleIf: "Make the panel visible if" => "Haga que el panel sea visible si"
// panel.requiredIf: "Make the panel required if" => "Haga que el panel sea obligatorio si"
// panel.questionOrder: "Question order within the panel" => "Orden de las preguntas dentro del panel"
// panel.startWithNewLine: "Display the panel on a new line" => "Mostrar el panel en una nueva línea"
// panel.state: "Panel collapse state" => "Estado de contracción del panel"
// panel.width: "Inline panel width" => "Ancho del panel en línea"
// panel.minWidth: "Minimum panel width" => "Anchura mínima del panel"
// panel.maxWidth: "Maximum panel width" => "Anchura máxima del panel"
// paneldynamic.name: "Panel name" => "Nombre del panel"
// paneldynamic.title: "Panel title" => "Título de la viñeta"
// paneldynamic.description: "Panel description" => "Descripción del panel"
// paneldynamic.visibleIf: "Make the panel visible if" => "Haga que el panel sea visible si"
// paneldynamic.requiredIf: "Make the panel required if" => "Haga que el panel sea obligatorio si"
// paneldynamic.page: "Move the panel to page" => "Mover el panel a la página"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Mostrar el panel en una nueva línea"
// paneldynamic.state: "Panel collapse state" => "Estado de contracción del panel"
// paneldynamic.width: "Inline panel width" => "Ancho del panel en línea"
// paneldynamic.minWidth: "Minimum panel width" => "Anchura mínima del panel"
// paneldynamic.maxWidth: "Maximum panel width" => "Anchura máxima del panel"
// paneldynamic.templateDescription: "Panel description pattern" => "Patrón de descripción del panel"
// paneldynamic.templateTitle: "Panel title pattern" => "Patrón de título de panel"
// paneldynamic.noEntriesText: "Empty panel text" => "Texto de panel vacío"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Patrón de título de tabulación"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Hacer visible un panel individual si"
// paneldynamic.hideNumber: "Hide the panel number" => "Ocultar el número de panel"
// paneldynamic.titleLocation: "Panel title alignment" => "Alineación del título del panel"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Alineación de la descripción del panel"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Alineación del título de la pregunta"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Alineación de mensajes de error"
// paneldynamic.newPanelPosition: "New panel location" => "Nueva ubicación del panel"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Evitar respuestas duplicadas en la siguiente pregunta"
// question.name: "Question name" => "Nombre de la pregunta"
// question.title: "Question title" => "Título de la pregunta"
// question.description: "Question description" => "Descripción de la pregunta"
// question.visibleIf: "Make the question visible if" => "Haz que la pregunta sea visible si"
// question.requiredIf: "Make the question required if" => "Haga que la pregunta sea obligatoria si:"
// question.state: "Question box collapse state" => "Estado de contracción del cuadro de pregunta"
// question.hideNumber: "Hide the question number" => "Ocultar el número de pregunta"
// question.titleLocation: "Question title alignment" => "Alineación del título de la pregunta"
// question.descriptionLocation: "Question description alignment" => "Alineación de la descripción de la pregunta"
// question.errorLocation: "Error message alignment" => "Alineación de mensajes de error"
// question.indent: "Increase the inner indent" => "Aumentar la sangría interior"
// question.width: "Inline question width" => "Ancho de la pregunta en línea"
// question.minWidth: "Minimum question width" => "Ancho mínimo de la pregunta"
// question.maxWidth: "Maximum question width" => "Ancho máximo de la pregunta"
// question.textUpdateMode: "Update input field value" => "Actualizar el valor del campo de entrada"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Mostrar el botón Borrar dentro del área de firma"
// signaturepad.penColor: "Stroke color" => "Color del trazo"
// comment.rows: "Input field height (in lines)" => "Altura del campo de entrada (en líneas)"
// expression.name: "Expression name" => "Nombre de la expresión"
// expression.title: "Expression title" => "Título de la expresión"
// expression.description: "Expression description" => "Descripción de la expresión"
// expression.expression: "Expression" => "Expresión"
// trigger.expression: "Expression" => "Expresión"
// calculatedvalue.expression: "Expression" => "Expresión"
// survey.description: "Survey description" => "Descripción de la encuesta"
// page.name: "Page name" => "Nombre de la página"
// page.description: "Page description" => "Descripción de la página"
// page.visibleIf: "Make the page visible if" => "Hacer que la página sea visible si"
// page.requiredIf: "Make the page required if" => "Haga que la página sea obligatoria si"
// page.questionOrder: "Question order on the page" => "Orden de las preguntas en la página"
// matrixdropdowncolumn.name: "Column name" => "Nombre de la columna"
// matrixdropdowncolumn.title: "Column title" => "Título de la columna"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Evitar respuestas duplicadas"
// matrixdropdowncolumn.width: "Column width" => "Anchura de columna"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Anchura mínima de columna"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Altura del campo de entrada (en líneas)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Haga que la columna sea visible si"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Haga que la columna sea obligatoria si"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Cada opción en una columna separada"
// multipletextitem.name: "Name" => "Nombre"
// multipletextitem.title: "Title" => "Título"
// pe.rateDescriptionLocation: "Label alignment" => "Alineación de etiquetas"
// pe.cellErrorLocation: "Cell error message alignment" => "Alineación de mensajes de error de celda"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Todavía no tienes ninguna columna"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Todavía no tienes ninguna fila"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Todavía no tiene ninguna regla de validación"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Todavía no tiene ninguna variable personalizada"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Todavía no tienes ningún desencadenante"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Todavía no tienes ningún enlace"
// pe.addNew@columns: "Add new column" => "Agregar nueva columna"
// pe.addNew@rows: "Add new row" => "Agregar nueva fila"
// pe.addNew@validators: "Add new rule" => "Agregar nueva regla"
// pe.addNew@calculatedValues: "Add new variable" => "Adición de una nueva variable"
// pe.addNew@triggers: "Add new trigger" => "Agregar nuevo disparador"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Agregar nueva URL"
// choicesbyurl.url: "Web service's URL" => "URL del servicio web"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Mostrar los títulos de las páginas en la barra de progreso"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Mostrar números de página en la barra de progreso"
// itemvalue.visibleIf: "Make the option visible if" => "Haga que la opción sea visible si"
// itemvalue.enableIf: "Make the option selectable if" => "Haga que la opción sea seleccionable si"
// panel.layout: "Panel Layout" => "Diseño de paneles"
// tabs.questionSettings: "Question Settings" => "Configuración de la pregunta"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Ej.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Ej.: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Ej.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Ej.: 6 pulgadas"
// pe.minWidth_placeholder: "Ex.: 600px" => "Ej.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Ej.: 50%"
// pv.selected: "Selected" => "Seleccionado"
// pv.unselected: "Unselected" => "Sin seleccionar"
// pv.center: "Center" => "Centro"
// pv.middle: "Middle" => "Medio"
// pv.next: "Next" => "Próximo"
// pv.last: "Last" => "Último"
// clearIfInvisible.none: "Never" => "Nunca"
// questionsOnPageMode.standard: "Original structure" => "Estructura original"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Mostrar todas las preguntas en una sola página"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Mostrar una sola pregunta por página"
// pv.auto: "Auto" => "Automático"
// panelsState.firstExpanded: "First expanded" => "Primera expansión"
// rateColorMode.scale: "Scale" => "Escama"
// scaleColorMode.monochrome: "Monochrome" => "Monocromo"
// scaleColorMode.colored: "Colored" => "Coloreado"
// state.default: "Locked" => "Cerrado con llave"
// showQuestionNumbers.default: "Auto-numbering" => "Numeración automática"
// showQuestionNumbers.on: "Auto-numbering" => "Numeración automática"
// showQuestionNumbers.onPage: "Reset on each page" => "Restablecer en cada página"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Restablecer en cada panel"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Restablecer en cada panel"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Continuar a través de la encuesta"
// showQuestionNumbers.off: "No numbering" => "Sin numeración"
// descriptionLocation.underTitle: "Under the question title" => "Bajo el título de la pregunta"
// descriptionLocation.underInput: "Under the input field" => "En el campo de entrada"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Junto a las opciones"
// selectToRankAreasLayout.vertical: "Above choices" => "Opciones anteriores"
// displayStyle.decimal: "Decimal" => "Decimal"
// displayStyle.currency: "Currency" => "Divisa"
// displayStyle.percent: "Percentage" => "Porcentaje"
// displayStyle.date: "Date" => "Fecha"
// totalDisplayStyle.decimal: "Decimal" => "Decimal"
// totalDisplayStyle.currency: "Currency" => "Divisa"
// totalDisplayStyle.percent: "Percentage" => "Porcentaje"
// totalDisplayStyle.date: "Date" => "Fecha"
// rowOrder.initial: "Original" => "Texto original en"
// questionOrder.initial: "Original" => "Texto original en"
// showProgressBar.aboveheader: "Above the header" => "Encima del encabezado"
// showProgressBar.belowheader: "Below the header" => "Debajo del encabezado"
// pv.sum: "Sum" => "Suma"
// pv.count: "Count" => "Contar"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Máximo"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Contiene"
// searchMode.startsWith: "Starts with" => "Comienza con"
// panel.name: "A panel ID that is not visible to respondents." => "Un ID de panel que no es visible para los encuestados."
// panel.description: "Type a panel subtitle." => "Escriba un subtítulo de panel."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad del panel."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Utilice el icono de la varita mágica para establecer una regla condicional que desactive el modo de solo lectura para el panel."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Se aplica a todas las preguntas de este panel. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas individuales. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Establece la ubicación de un mensaje de error en relación con todas las preguntas del panel. La opción \"Heredar\" aplica la configuración a nivel de página (si se establece) o a nivel de encuesta."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Mantiene el orden original de las preguntas o las aleatoriza. La opción \"Heredar\" aplica la configuración a nivel de página (si se establece) o a nivel de encuesta."
// panel.page: "Repositions the panel to the end of a selected page." => "Cambia la posición del panel al final de una página seleccionada."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Añade espacio o margen entre el contenido del panel y el borde izquierdo del cuadro del panel."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Anule la selección para mostrar el panel en una línea con la pregunta o el panel anterior. La configuración no se aplica si el panel es el primer elemento del formulario."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Elija entre: \"Expandido\": el panel se muestra en su totalidad y se puede contraer; \"Contraído\": el panel muestra solo el título y la descripción y se puede expandir; \"Bloqueado\": el panel se muestra en su totalidad y no se puede contraer."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Define la anchura del panel en proporción a otros elementos topográficos de la misma línea. Acepta valores CSS (px, %, in, pt, etc.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Un ID de panel que no es visible para los encuestados."
// paneldynamic.description: "Type a panel subtitle." => "Escriba un subtítulo de panel."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad del panel."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Utilice el icono de la varita mágica para establecer una regla condicional que desactive el modo de solo lectura para el panel."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Se aplica a todas las preguntas de este panel. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas individuales. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Establece la ubicación de un mensaje de error en relación con una pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Establece la ubicación de un mensaje de error en relación con todas las preguntas del panel. La opción \"Heredar\" aplica la configuración a nivel de página (si se establece) o a nivel de encuesta."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Cambia la posición del panel al final de una página seleccionada."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Añade espacio o margen entre el contenido del panel y el borde izquierdo del cuadro del panel."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Anule la selección para mostrar el panel en una línea con la pregunta o el panel anterior. La configuración no se aplica si el panel es el primer elemento del formulario."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Elija entre: \"Expandido\": el panel se muestra en su totalidad y se puede contraer; \"Contraído\": el panel muestra solo el título y la descripción y se puede expandir; \"Bloqueado\": el panel se muestra en su totalidad y no se puede contraer."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Define la anchura del panel en proporción a otros elementos topográficos de la misma línea. Acepta valores CSS (px, %, in, pt, etc.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Escriba una plantilla para los títulos de los paneles dinámicos. Utilice {panelIndex} para la posición general del panel y {visiblePanelIndex} para su orden entre los paneles visibles. Inserte estos marcadores de posición en el patrón para agregar numeración automática."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Escriba una plantilla para los títulos de las pestañas. Utilice {panelIndex} para la posición general de un panel y {visiblePanelIndex} para su orden entre los paneles visibles. Inserte estos marcadores de posición en el patrón para agregar numeración automática."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Esta configuración le permite controlar la visibilidad de paneles individuales dentro del panel dinámico. Utilice el marcador de posición '{panel}' para hacer referencia al panel actual en la expresión."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Esta configuración es heredada automáticamente por todas las preguntas dentro de este panel. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas individuales. La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Superior\" de forma predeterminada)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "La opción \"Heredar\" aplica la configuración a nivel de página (si está establecida) o a nivel de encuesta (\"Debajo del título del panel\" de forma predeterminada)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Define la posición de un panel recién añadido. De forma predeterminada, los nuevos paneles se agregan al final. Seleccione \"Siguiente\" para insertar un nuevo panel después del actual."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplica las respuestas del último panel y las asigna al siguiente panel dinámico agregado."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Haga referencia a un nombre de pregunta para requerir que un usuario proporcione una respuesta única para esta pregunta en cada panel."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Esta configuración le permite asignar un valor de respuesta predeterminado basado en una expresión. La expresión puede incluir cálculos básicos: '{q1_id} + {q2_id}', expresiones booleanas, como '{edad} > 60', y funciones: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. El valor determinado por esta expresión sirve como el valor predeterminado inicial que puede ser anulado por la entrada manual de un encuestado."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Usa el ícono de la varita mágica para establecer una regla condicional que determine cuándo la entrada de un encuestado se restablece al valor basado en la \"Expresión de valor predeterminado\" o \"Expresión de valor establecido\" o al valor de \"Respuesta predeterminada\" (si cualquiera de los dos está establecido)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Utilice el icono de la varita mágica para establecer una regla condicional que determine cuándo ejecutar la \"Expresión de valor establecido\" y asigne dinámicamente el valor resultante como respuesta."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Especifique una expresión que defina el valor que se establecerá cuando se cumplan las condiciones de la regla \"Establecer valor si\". La expresión puede incluir cálculos básicos: '{q1_id} + {q2_id}', expresiones booleanas, como '{edad} > 60', y funciones: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. El valor determinado por esta expresión puede ser anulado por la entrada manual de un encuestado."
// question.name: "A question ID that is not visible to respondents." => "Un identificador de pregunta que no es visible para los encuestados."
// question.description: "Type a question subtitle." => "Escribe un subtítulo para la pregunta."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la pregunta."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura para la pregunta."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Utilice el icono de la varita mágica para establecer una regla condicional que impida que la encuesta avance o se envíe a menos que la pregunta reciba una respuesta."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Anule la selección para mostrar la pregunta en una línea con la pregunta o el panel anterior. La configuración no se aplica si la pregunta es el primer elemento del formulario."
// question.page: "Repositions the question to the end of a selected page." => "Cambia la posición de la pregunta al final de una página seleccionada."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Elija entre: \"Expandido\": el cuadro de pregunta se muestra en su totalidad y se puede contraer; \"Contraído\": el cuadro de pregunta muestra solo el título y la descripción y se puede expandir; \"Bloqueado\": el cuadro de pregunta se muestra en su totalidad y no se puede contraer."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Anula las reglas de alineación de títulos definidas en un panel, página o encuesta. La opción \"Heredar\" aplica cualquier configuración de nivel superior (si está establecida) o configuración de nivel de encuesta (\"Superior\" de forma predeterminada)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Bajo el título de la pregunta\" de forma predeterminada)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Superior\" de forma predeterminada)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Agrega espacio o margen entre el contenido de la pregunta y el borde izquierdo del cuadro de pregunta."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Establece el ancho de la pregunta en proporción a otros elementos de la encuesta en la misma línea. Acepta valores CSS (px, %, in, pt, etc.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Utilice el icono de la varita mágica para establecer una regla de validación para la pregunta."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Elija entre: \"Al perder el foco\": el valor se actualiza cuando el campo de entrada pierde el foco; \"Mientras escribes\": el valor se actualiza en tiempo real, a medida que los usuarios escriben. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Al perder el foco\" de forma predeterminada)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Puede utilizar cualquier servicio web como fuente de datos para preguntas de opción múltiple. Para rellenar los valores de opción, introduzca la dirección URL del servicio que proporciona los datos."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Operación de comparación que se utiliza para filtrar la lista desplegable."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Define la anchura del área de firma mostrada y de la imagen resultante."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Define la altura del área de firma mostrada y de la imagen resultante."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Seleccione esta opción si desea que el área de firma ocupe todo el espacio disponible dentro del cuadro de pregunta manteniendo la relación de aspecto predeterminada de 3:2. Cuando se establecen valores de anchura y altura personalizados, la configuración mantendrá la relación de aspecto de estas dimensiones."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Ajusta la altura de la imagen en los resultados de la encuesta."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Ajusta el ancho de la imagen en los resultados de la encuesta."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Anula los valores de altura mínima y máxima."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Anula los valores de anchura mínima y máxima."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Valor\" sirve como un identificador de elemento que se usa en las reglas condicionales; \"Texto\" se muestra a los encuestados."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Esta configuración solo cambia el tamaño del campo de entrada y no afecta al ancho del cuadro de pregunta. Para limitar la longitud de entrada aceptada, vaya a <b>Validación → Límite máximo de caracteres</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Establece el número de líneas mostradas en el campo de entrada. Si la entrada ocupa más líneas, aparecerá la barra de desplazamiento."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Elija entre: \"Editable\": permite a los encuestados completar su encuesta; \"Solo lectura\": deshabilita la edición de formularios."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Un identificador de columna que no es visible para los encuestados."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Cuando se habilita para una columna, se requiere que un encuestado proporcione una respuesta única para cada pregunta dentro de esta columna."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Establece el número de líneas mostradas en el campo de entrada. Si la entrada ocupa más líneas, aparecerá la barra de desplazamiento."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la columna."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura para la columna."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Cuando se selecciona, crea una columna individual para cada opción de opción."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Elija entre: \"Estático\": establece un ancho fijo; \"Responsivo\": hace que la encuesta ocupe todo el ancho de la pantalla; \"Auto\": aplica cualquiera de los dos dependiendo de los tipos de preguntas utilizados."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Pegue un enlace de imagen (sin límites de tamaño) o haga clic en el icono de la carpeta para buscar un archivo desde su computadora (hasta 64 KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Establece el ancho del logotipo en unidades CSS (px, %, in, pt, etc.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Establece la altura del logotipo en unidades CSS (px, %, in, pt, etc.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Elija entre: \"Ninguno\": la imagen mantiene su tamaño original; \"Contener\": se cambia el tamaño de la imagen para que se ajuste manteniendo su relación de aspecto; \"Portada\": la imagen llena toda la caja manteniendo su relación de aspecto; \"Relleno\": la imagen se estira para llenar el cuadro sin mantener su relación de aspecto."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Establece la visibilidad y la ubicación de los botones de navegación en una página."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Establece la visibilidad y la ubicación de una barra de progreso. El valor \"Auto\" muestra la barra de progreso por encima o por debajo del encabezado de la encuesta."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Habilite la página de vista previa con todas las preguntas o solo las respondidas."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Se aplica a todas las preguntas de la encuesta. Esta configuración se puede anular mediante reglas de alineación de títulos en niveles inferiores: panel, página o pregunta. Una configuración de nivel inferior anulará las de un nivel superior."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Un símbolo o una secuencia de símbolos que indican que se requiere una respuesta."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Introduzca un número o una letra con la que desee empezar a numerar."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Seleccione si desea que el primer campo de entrada de cada página esté listo para la entrada de texto."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Mantiene el orden original de las preguntas o las aleatoriza. El efecto de esta configuración solo es visible en la pestaña Vista previa."
// pehelp.maxTextLength: "For text entry questions only." => "Solo para preguntas de entrada de texto."
// pehelp.maxCommentLength: "For question comments only." => "Solo para comentarios de preguntas."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Seleccione si desea que los comentarios de las preguntas y las preguntas de texto largo aumenten automáticamente en altura en función de la longitud del texto introducido."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Solo para comentarios de preguntas y preguntas de texto largo."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Las variables personalizadas sirven como variables intermedias o auxiliares que se utilizan en los cálculos de formularios. Toman las entradas de los encuestados como valores de origen. Cada variable personalizada tiene un nombre único y una expresión en la que se basa."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Seleccione si desea que el valor calculado de la expresión se guarde junto con los resultados de la encuesta."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Un desencadenador es un evento o condición que se basa en una expresión. Una vez que la expresión se evalúa como \"verdadera\", un desencadenador desencadena una acción. Opcionalmente, una acción de este tipo puede tener una pregunta de destino a la que afecta."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Elija si desea o no borrar los valores de las preguntas ocultas por la lógica condicional y cuándo hacerlo."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Elija entre: \"Al perder el foco\": el valor se actualiza cuando el campo de entrada pierde el foco; \"Mientras escribes\": el valor se actualiza en tiempo real, a medida que los usuarios escriben."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "El valor de la izquierda sirve como identificador de columna que se usa en las reglas condicionales, el valor de la derecha se muestra a los encuestados."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "El valor de la izquierda sirve como un ID de fila que se usa en las reglas condicionales, el valor de la derecha se muestra a los encuestados."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Acepta valores CSS (px, %, in, pt, etc.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Acepta valores CSS (px, %, in, pt, etc.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Establece la ubicación de un mensaje de error en relación con una celda con entrada no válida. La opción \"Heredar\" aplica la configuración de la propiedad \"Alineación de mensajes de error\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Cuando la propiedad \"Evitar respuestas duplicadas\" está habilitada, un encuestado que intente enviar una entrada duplicada recibirá el siguiente mensaje de error."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Permite calcular los valores totales en función de una expresión. La expresión puede incluir cálculos básicos ('{q1_id} + {q2_id}'), expresiones booleanas ('{edad} > 60') y funciones ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Activa un mensaje en el que se le pide que confirme la eliminación de filas."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Duplica las respuestas de la última fila y las asigna a la siguiente fila dinámica agregada."
// pehelp.description: "Type a subtitle." => "Escribe un subtítulo."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Elige un idioma para comenzar a crear tu encuesta. Para agregar una traducción, cambie a un nuevo idioma y traduzca el texto original aquí o en la pestaña Traducciones."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Establece la ubicación de una sección de detalles en relación con una fila. Elija entre: \"Ninguno\": no se agrega ninguna expansión; \"Debajo de la fila\": se coloca una expansión de fila debajo de cada fila de la matriz; \"Debajo de la fila, mostrar solo una expansión de fila\": una expansión se muestra solo debajo de una sola fila, las expansiones de fila restantes se contraen."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Elija entre: \"Ninguno\": la imagen mantiene su tamaño original; \"Contener\": se cambia el tamaño de la imagen para que se ajuste manteniendo su relación de aspecto; \"Portada\": la imagen llena toda la caja manteniendo su relación de aspecto; \"Relleno\": la imagen se estira para llenar el cuadro sin mantener su relación de aspecto."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Aumenta gradualmente la altura del campo de entrada a medida que se introducen los datos. Anula el ajuste \"Altura del campo de entrada (en líneas)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "El controlador de cambio de tamaño (o pinzamiento) aparece en la esquina y se puede arrastrar para modificar el tamaño del campo de entrada."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Un intervalo de tiempo en segundos después del cual la encuesta avanza automáticamente a la página de agradecimiento."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Un intervalo de tiempo en segundos después del cual la encuesta avanza automáticamente a la página siguiente."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Un intervalo de tiempo en segundos después del cual la encuesta avanza automáticamente a la página siguiente."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de la página."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Utilice el icono de la varita mágica para establecer una regla condicional que deshabilite el modo de solo lectura de la página."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Utilice el icono de la varita mágica para establecer una regla condicional que impida el envío de encuestas a menos que al menos una pregunta anidada tenga una respuesta."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Se aplica a todas las preguntas de esta página. Si desea anular esta configuración, defina reglas de alineación de títulos para preguntas o paneles individuales. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Superior\" de forma predeterminada)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Establece la ubicación de un mensaje de error en relación con la pregunta con entrada no válida. Elija entre: \"Arriba\": se coloca un texto de error en la parte superior del cuadro de pregunta; \"Abajo\": se coloca un texto de error en la parte inferior del cuadro de pregunta. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Superior\" de forma predeterminada)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Mantiene el orden original de las preguntas o las aleatoriza. La opción \"Heredar\" aplica la configuración a nivel de encuesta (\"Original\" de forma predeterminada). El efecto de esta configuración solo es visible en la pestaña Vista previa."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Establece la visibilidad de los botones de navegación en la página. La opción \"Heredar\" aplica la configuración de nivel de encuesta, que por defecto es \"Visible\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Elija entre: \"Bloqueado\": los usuarios no pueden expandir ni contraer paneles; \"Contraer todo\": todos los paneles comienzan en un estado contraído; \"Expandir todo\": todos los paneles comienzan en un estado expandido; \"Primero expandido\": solo el primer panel se expande inicialmente."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Introduzca un nombre de propiedad compartida dentro de la matriz de objetos que contiene las direcciones URL de los archivos de imagen o vídeo que desea mostrar en la lista de opciones."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "El valor de la izquierda sirve como un identificador de elemento utilizado en las reglas condicionales, el valor de la derecha se muestra a los encuestados."
// pehelp.title: "Type a user-friendly title to display." => "Escriba un título fácil de usar para mostrar."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Garantiza que los usuarios no completen la encuesta hasta que se carguen los archivos."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Acepta valores CSS (px, %, in, pt, etc.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Acepta valores CSS (px, %, in, pt, etc.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Acepta valores CSS (px, %, in, pt, etc.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Cuando se selecciona, esta configuración muestra un valor de visualización en lugar de un valor de ID en las preguntas HTML y en los títulos dinámicos y las descripciones de los elementos de la encuesta."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Elija si desea o no borrar los valores de las preguntas ocultos por la lógica condicional y cuándo hacerlo. La opción \"Heredar\" aplica la configuración de nivel de encuesta (\"Al finalizar la encuesta\" de forma predeterminada)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Elija entre: \"Todas\": copia todas las opciones de elección de la pregunta seleccionada; \"Seleccionado\": copia dinámicamente solo las opciones de elección seleccionadas; \"No seleccionado\": copia dinámicamente solo las opciones de elección no seleccionadas. Las opciones \"Ninguno\" y \"Otro\" se copian de forma predeterminada si están habilitadas en la pregunta de origen."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Cuando se selecciona, los usuarios pueden incluir entradas adicionales en un cuadro de comentarios independiente."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Muestra cada opción de opción especial (\"Ninguno\", \"Otro\", \"Seleccionar todo\") en una nueva línea, incluso cuando se utiliza un diseño de varias columnas."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Especifique la ubicación dentro del dataset de servicio donde se encuentra la matriz de objetos de destino. Déjelo en vacío si la dirección URL ya apunta a la matriz."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Escriba un nombre de propiedad uniforme dentro de la matriz de objetos que contiene los valores que desea mostrar en la lista de opciones."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Seleccione esta opción para permitir que el servicio devuelva una respuesta o matriz vacía."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Utilice el icono de la varita mágica para establecer una regla condicional que determine la visibilidad de todas las opciones de elección."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "El valor de la izquierda sirve como un identificador de elemento utilizado en las reglas condicionales, el valor de la derecha se muestra a los encuestados."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" selecciona entre los modos \"Botones\" y \"Desplegable\" en función del ancho disponible. Cuando el ancho es insuficiente para mostrar los botones, la pregunta muestra un menú desplegable."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Permite conectar preguntas que producen resultados en diferentes formatos. Cuando estas preguntas se vinculan entre sí mediante un identificador de combinación, esta propiedad compartida almacena los valores de pregunta seleccionados."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Seleccione si desea actualizar el contenido del menú desplegable para que coincida con la consulta de búsqueda que un usuario está escribiendo en el campo de entrada."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Un valor que se debe guardar en los resultados de la encuesta cuando los encuestados dan una respuesta positiva."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Un valor que se debe guardar en los resultados de la encuesta cuando los encuestados dan una respuesta negativa."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "No se recomienda deshabilitar esta opción, ya que anula la imagen de vista previa y dificulta que un usuario comprenda si los archivos se han cargado."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Activa un mensaje que le pide que confirme la eliminación del archivo."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Habilite esta opción para clasificar solo las opciones seleccionadas. Los usuarios arrastrarán los elementos seleccionados de la lista de opciones para ordenarlos dentro del área de clasificación."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Ingrese una lista de opciones que se sugerirán al encuestado durante la entrada."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "La configuración solo cambia el tamaño de los campos de entrada y no afecta al ancho del cuadro de pregunta."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Establece un ancho coherente para todas las etiquetas de elementos en píxeles"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "La opción \"Auto\" determina automáticamente el modo adecuado para la visualización (Imagen, Video o YouTube) en función de la URL de origen proporcionada."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Sirve como sustituto cuando la imagen no se puede mostrar en el dispositivo de un usuario y por motivos de accesibilidad."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Define el color del emoji seleccionado cuando el tipo de icono de clasificación se establece en \"Emoticonos\". Elija entre: \"Predeterminado\": el emoji seleccionado aparece en el color predeterminado de la encuesta; \"Escala\": el emoji seleccionado hereda el color de la escala de calificación."
// expression.name: "An expression ID that is not visible to respondents." => "Un identificador de expresión que no es visible para los encuestados."
// expression.description: "Type an expression subtitle." => "Escriba un subtítulo de expresión."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Una expresión puede incluir cálculos básicos ('{q1_id} + {q2_id}'), condiciones ('{edad} > 60') y funciones ('iif()', 'hoy()', 'edad()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Seleccione esta opción para almacenar el valor de la opción \"Otro\" como una propiedad independiente en los resultados de la encuesta."
// p.swapOrder: "Swap the order of Yes and No" => "Cambiar el orden de Sí y No"
// p.itemTitleWidth: "Item label width (in px)" => "Ancho de la etiqueta del elemento (en px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Texto para mostrar si todas las opciones están seleccionadas"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Texto de marcador de posición para el área de clasificación"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Completar la encuesta automáticamente"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Seleccione si desea que la encuesta se complete automáticamente después de que un encuestado responda todas las preguntas."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Guardar el valor enmascarado en los resultados de la encuesta"
// patternmask.pattern: "Value pattern" => "Patrón de valores"
// datetimemask.min: "Minimum value" => "Valor mínimo"
// datetimemask.max: "Maximum value" => "Valor máximo"
// numericmask.allowNegativeValues: "Allow negative values" => "Permitir valores negativos"
// numericmask.thousandsSeparator: "Thousands separator" => "Separador de millares"
// numericmask.decimalSeparator: "Decimal separator" => "Separador decimal"
// numericmask.precision: "Value precision" => "Precisión de valor"
// numericmask.min: "Minimum value" => "Valor mínimo"
// numericmask.max: "Maximum value" => "Valor máximo"
// currencymask.prefix: "Currency prefix" => "Prefijo de moneda"
// currencymask.suffix: "Currency suffix" => "Sufijo de moneda"
// pe.maskType: "Input mask type" => "Tipo de máscara de entrada"
// maskTypes.patternmask: "Pattern" => "Patrón"
// maskTypes.numericmask: "Numeric" => "Numérico"
// maskTypes.datetimemask: "Date and Time" => "Fecha y hora"
// maskTypes.currencymask: "Currency" => "Divisa"
// tabs.mask: "Input Mask Settings" => "Configuración de la máscara de entrada"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Ej.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Ej.: dd/mm/aaaa"
// pe.currencyprefix_placeholder: "Ex.: $" => "Ej.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Ej.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Opciones de envoltura"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Los textos largos en las opciones de elección generarán automáticamente saltos de línea para que se ajusten al menú desplegable. Anule la selección si desea que los textos se recorten."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Seleccione si desea almacenar el valor de la pregunta con una máscara aplicada en los resultados de la encuesta."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "El patrón puede contener literales de cadena y los siguientes marcadores de posición: '9': para un dígito; 'a' - para una letra mayúscula o minúscula; '#' - para un dígito o una letra mayúscula o minúscula. Use la barra invertida '\\' para escapar de un carácter."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "El patrón puede contener caracteres separadores y los siguientes marcadores de posición: 'm' - para el número de mes; 'mm' - para el número del mes, con cero a la izquierda para los valores de un solo dígito; 'd' - para el día del mes; 'dd': para el día del mes, con cero a la izquierda para valores de un solo dígito; 'yy' - para los dos últimos dígitos del año; 'yyyy' - para un año de cuatro dígitos."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Símbolo utilizado para separar la parte fraccionaria de la parte entera de un número mostrado."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Símbolo que se utiliza para separar los dígitos de un número grande en grupos de tres."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Limita el número de dígitos que se conservan después del punto decimal de un número mostrado."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Uno o varios símbolos que se mostrarán antes del valor."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Uno o varios símbolos que se mostrarán después del valor."
// ed.translationSource: "Source: " => "Fuente: "
// ed.translationTarget: "Target: " => "Blanco: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "La página está vacía. Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo."
// maskTypes.none: "None" => "Ninguno"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Haga que la fila sea visible si"
// itemvalue@rows.enableIf: "Make the row editable if" => "Hacer que la fila sea editable si"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Texto de marcador de posición en modo de solo lectura o vista previa"
// pe.textWrapEnabled: "Wrap choices" => "Opciones de envoltura"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "La opción \"Auto\" determina automáticamente el modo adecuado para la visualización (Imagen, Video o YouTube) en función de la URL de origen proporcionada."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Elija entre \"Imagen\" y \"Video\" para configurar el modo de contenido del selector de medios. Si se selecciona \"Imagen\", asegúrese de que todas las opciones proporcionadas sean archivos de imagen en los siguientes formatos: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Del mismo modo, si se selecciona \"Vídeo\", asegúrese de que todas las opciones sean enlaces directos a archivos de vídeo en los siguientes formatos: MP4, MOV, WMV, FLV, AVI, MKV. Tenga en cuenta que los enlaces de YouTube no son compatibles con las opciones de video."
// ed.selectFile: "Select a file" => "Seleccionar un archivo"
// ed.removeFile: "Remove the file" => "Eliminar el archivo"
// pe.searchMode: "Search Mode" => "Modo de búsqueda"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Haga clic en el botón \"Agregar pregunta\" a continuación para comenzar a crear su formulario."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Haga clic en el botón \"Agregar pregunta\" a continuación para agregar un nuevo elemento a la página."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Haga clic en el botón \"Agregar pregunta\" a continuación para agregar un nuevo elemento al panel."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Haga clic en el botón de abajo y elija una imagen para cargar"
// coloralpha.opacity: "Opacity" => "Opacidad"
// font.family: "Font family" => "Familia tipográfica"
// font.color: "Color" => "Color"
// font.placeholderColor: "Placeholder color" => "Color del marcador de posición"
// font.size: "Size" => "Tamaño"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Apariencia de la pregunta"
// theme.editorPanel: "Background and corner radius" => "Fondo y radio de vértice"
// theme.questionPanel: "Background and corner radius" => "Fondo y radio de vértice"
// theme.primaryColor: "Accent color" => "Color de acento"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacidad del fondo del panel"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opacidad del fondo de la pregunta"
// theme.fontSize: "Font size" => "Tamaño de fuente"
// theme.scale: "Scale" => "Escama"
// theme.cornerRadius: "Corner radius" => "Radio de esquina"
// theme.pageTitle: "Title font" => "Fuente del título"
// theme.pageDescription: "Description font" => "Fuente descriptiva"
// theme.questionTitle: "Title font" => "Fuente del título"
// theme.questionDescription: "Description font" => "Fuente descriptiva"
// theme.editorFont: "Font" => "Fuente"
// theme.backgroundOpacity: "Opacity" => "Opacidad"
// theme.--sjs-font-family: "Font family" => "Familia tipográfica"
// theme.--sjs-general-backcolor-dim: "Background color" => "Color de fondo"
// theme.--sjs-primary-backcolor: "Accent background" => "Fondo de acento"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Acento en primer plano"
// theme.--sjs-shadow-small: "Shadow effects" => "Efectos de sombra"
// theme.--sjs-shadow-inner: "Shadow effects" => "Efectos de sombra"
// theme.--sjs-border-default: "Colors" => "Colores"
// header@header.headerView: "View" => "Vista"
// header@header.logoPosition: "Logo position" => "Posición del logotipo"
// header@header.surveyTitle: "Survey title font" => "Fuente del título de la encuesta"
// header@header.surveyDescription: "Survey description font" => "Fuente de descripción de la encuesta"
// header@header.headerTitle: "Survey title font" => "Fuente del título de la encuesta"
// header@header.headerDescription: "Survey description font" => "Fuente de descripción de la encuesta"
// header@header.inheritWidthFrom: "Content area width" => "Ancho del área de contenido"
// header@header.textAreaWidth: "Text width" => "Ancho del texto"
// header@header.backgroundColorSwitch: "Background color" => "Color de fondo"
// header@header.backgroundImage: "Background image" => "Imagen de fondo"
// header@header.backgroundImageOpacity: "Opacity" => "Opacidad"
// header@header.overlapEnabled: "Overlap" => "Solapar"
// header@header.logoPositionX: "Logo position" => "Posición del logotipo"
// header@header.titlePositionX: "Title position" => "Posición en el título"
// header@header.descriptionPositionX: "Description position" => "Descripción posición"
// weight.400: "Regular" => "Regular"
// weight.600: "Heavy" => "Pesado"
// weight.700: "Semi-bold" => "Semi-negrita"
// weight.800: "Bold" => "Audaz"
// backgroundImageFit.auto: "Auto" => "Automático"
// backgroundImageFit.cover: "Cover" => "Cubrir"
// backgroundImageFit.contain: "Contain" => "Contener"
// backgroundImageFit.fill: "Stretch" => "Elasticidad"
// backgroundImageFit.tile: "Tile" => "Teja"
// backgroundImageAttachment.fixed: "Fixed" => "Fijo"
// backgroundImageAttachment.scroll: "Scroll" => "Pergamino"
// headerView.basic: "Basic" => "Básico"
// headerView.advanced: "Advanced" => "Avanzado"
// inheritWidthFrom.survey: "Same as survey" => "Igual que la encuesta"
// inheritWidthFrom.container: "Fit to container" => "Ajuste al contenedor"
// backgroundColorSwitch.none: "None" => "Ninguno"
// backgroundColorSwitch.accentColor: "Accent color" => "Color de acento"
// backgroundColorSwitch.custom: "Custom" => "Costumbre"
// colorPalette.light: "Light" => "Luz"
// colorPalette.dark: "Dark" => "Oscuro"
// isPanelless.false: "Default" => "Predeterminado"
// isPanelless.true: "Without Panels" => "Sin paneles"
// theme.cornerRadius: "Corner radius" => "Radio de esquina"
// theme.fontFamily: "Font family" => "Familia tipográfica"
// theme.fontWeightRegular: "Regular" => "Regular"
// theme.fontWeightHeavy: "Heavy" => "Pesado"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-negrita"
// theme.fontWeightBold: "Bold" => "Audaz"
// theme.color: "Color" => "Color"
// theme.placeholderColor: "Placeholder color" => "Color del marcador de posición"
// theme.size: "Size" => "Tamaño"
// theme.opacity: "Opacity" => "Opacidad"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Escriba para buscar..."
// ed.toolboxNoResultsFound: "No results found" => "No se han encontrado resultados"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Marcador de posición del título de la pestaña"
// theme.--sjs-special-red: "Error messages" => "Mensajes de error"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Texto de reserva para los títulos de tabulación que se aplica cuando el patrón de título de tabulación no genera un valor significativo."
// theme.fontColor: "Font color" => "Color de la fuente"
// theme.backgroundColor: "Background color" => "Color de fondo"
// pe.questionTitleWidth: "Question title width" => "Ancho del título de la pregunta"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Seleccione un archivo o pegue un enlace de archivo..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Ej.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Establece un ancho coherente para los títulos de las preguntas cuando están alineados a la izquierda de sus cuadros de preguntas. Acepta valores CSS (px, %, in, pt, etc.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Establece un ancho coherente para los títulos de las preguntas cuando están alineados a la izquierda de sus cuadros de preguntas. Acepta valores CSS (px, %, in, pt, etc.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Altura del área de comentarios (en líneas)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Establece el número de líneas mostradas en las áreas de texto para los comentarios de las preguntas. En la entrada ocupa más líneas, aparece la barra de desplazamiento."
// pe.enabled: "Enabled" => "Habilitado"
// pe.disabled: "Disabled" => "Deshabilitado"
// pe.inherit: "Inherit" => "Heredar"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Validar campos vacíos en caso de pérdida de foco"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Ej.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Ej.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Habilite esta opción para desencadenar la validación cuando un usuario se centre en un campo de entrada vacío y, a continuación, lo abandone sin realizar ningún cambio."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Organiza las opciones de elección en un diseño de varias columnas. Cuando se establece en 0, las opciones se muestran en una sola línea."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Esta configuración solo se aplica a las preguntas fuera de un panel."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Establece un color complementario que resalta los elementos clave de la encuesta."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Ajusta la transparencia de los paneles y cuadros de preguntas en relación con el fondo de la encuesta."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Ajusta la transparencia de los elementos de entrada en relación con el fondo de la encuesta."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Define el radio de vértice de todos los elementos rectangulares. Active el modo avanzado si desea establecer valores de radio de vértice individuales para elementos de entrada o paneles y cuadros de preguntas."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Establece el color de fondo principal de la encuesta."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "La opción \"Igual que el contenedor\" ajusta automáticamente el ancho del área de contenido del encabezado para que quepa en el elemento HTML en el que se coloca la encuesta."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "El ancho del área de encabezado que contiene el título y la descripción de la encuesta, medido en píxeles."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Acepta valores %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Acepta valores px."
// p.effectiveColSpan: "Column span" => "Tramo de columna"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Igual que la encuesta"
// progressBarInheritWidthFrom.container: "Same as container" => "Igual que el contenedor"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Muestra vistas previas en miniatura de los archivos cargados cuando es posible. Anule la selección si desea mostrar los iconos de archivo en su lugar."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "La opción \"Igual que el contenedor\" ajusta automáticamente el ancho del área de la barra de progreso para que quepa en el elemento HTML en el que se coloca la encuesta."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Ancho del área de la barra de progreso"
// maskType.none: "None" => "Ninguno"
// maskType.pattern: "Pattern" => "Patrón"
// maskType.numeric: "Numeric" => "Numérico"
// maskType.datetime: "Date and Time" => "Fecha y hora"
// maskType.currency: "Currency" => "Divisa"

// inputTextAlignment.auto: "Auto" => "Automático"
// inputTextAlignment.left: "Left" => "Izquierda"
// inputTextAlignment.right: "Right" => "Derecha"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Seleccione cómo alinear el valor de entrada dentro del campo. La configuración predeterminada \"Auto\" alinea el valor de entrada a la derecha si se aplica el enmascaramiento numérico o de moneda y a la izquierda si no se aplica."
// p.inputTextAlignment: "Input value alignment" => "Alineación de valores de entrada"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Mostrar la barra de progreso"
// paneldynamic.showProgressBar: "Show the progress bar" => "Mostrar la barra de progreso"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Alineación de la barra de progreso"
// pv.carousel: "Carousel" => "Carrusel"
// progressBarLocation.top: "Top" => "Arriba"
// progressBarLocation.bottom: "Bottom" => "Fondo"
// progressBarLocation.topBottom: "Top and bottom" => "Arriba y abajo"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Organiza las opciones de elección en un diseño de varias columnas. Cuando se establece en 0, las opciones se muestran en una sola línea. Cuando se establece en -1, el valor real se hereda de la propiedad \"Recuento de columnas anidadas\" de la matriz principal."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Los enlaces de YouTube no son compatibles."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Empieza a configurar tu formulario"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Haga clic en cualquier icono de categoría para explorar la configuración de la encuesta. Los ajustes adicionales estarán disponibles una vez que agregue un elemento de topografía a la superficie de diseño."
// pe.caseInsensitive: "Case insensitive" => "No distingue entre mayúsculas y minúscu"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Seleccione si las letras mayúsculas y minúsculas de la expresión regular deben tratarse como equivalentes."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Tu formulario está vacío"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Tu formulario está vacío"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Arrastre un elemento desde la caja de herramientas o haga clic en el botón de abajo."
// ed.previewPlaceholderTitle: "No preview" => "Sin vista previa"
// ed.previewPlaceholderTitleMobile: "No preview" => "Sin vista previa"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "La encuesta no contiene ningún elemento visible."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "La encuesta no contiene ningún elemento visible."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Sin ataduras para traducir"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Sin ataduras para traducir"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Agregue elementos a su formulario o cambie el filtro de cadenas en la barra de herramientas."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Agregue elementos a su formulario o cambie el filtro de cadenas en la barra de herramientas."
// lg.logicPlaceholderTitle: "No logical rules" => "Sin reglas lógicas"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Sin reglas lógicas"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Cree una regla para personalizar el flujo de la encuesta."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Cree una regla para personalizar el flujo de la encuesta."
// pe.showTimer: "Use a timer" => "Usar un temporizador"
// theme.advancedMode: "Advanced mode" => "Modo avanzado"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Establece la ubicación de un temporizador en una página."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Cuando se establece en 0, la altura se calcula automáticamente para acomodar el contenido del encabezado."
// p.mobileHeight: "Height on smartphones" => "Altura en smartphones"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Cuando se habilita, la parte superior de la encuesta se superpone a la parte inferior del encabezado."
// ed.creatorSettingTitle: "Creator Settings" => "Configuración del creador"
// tabs.accentColors: "Accent colors" => "Colores de acento"
// tabs.scaling: "Scaling" => "Escalada"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Asigna números a las preguntas anidadas dentro de este panel."
// creatortheme.--sjs-special-background: "Surface background" => "Fondo de superficie"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primario"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Secundario"
// creatortheme.surfaceScale: "Surface" => "Superficie"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Interfaz de usuario"
// creatortheme.fontScale: "Font" => "Fuente"
// names.sc2020: "Survey Creator 2020" => "Creador de encuestas 2020"
// names.default-light: "Light" => "Luz"
// names.default-dark: "Dark" => "Oscuro"
// names.default-contrast: "Contrast" => "Contraste"
// panel.showNumber: "Number this panel" => "Numerar este panel"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Seleccione si desea que la encuesta avance automáticamente a la página siguiente una vez que un encuestado haya respondido todas las preguntas en la página actual. Esta función no se aplicará si la última pregunta de la página es abierta o permite varias respuestas."
// autocomplete.name: "Full Name" => "Nombre completo"
// autocomplete.honorific-prefix: "Prefix" => "Prefijo"
// autocomplete.given-name: "First Name" => "Nombre"
// autocomplete.additional-name: "Middle Name" => "Segundo nombre"
// autocomplete.family-name: "Last Name" => "Apellido"
// autocomplete.honorific-suffix: "Suffix" => "Sufijo"
// autocomplete.nickname: "Nickname" => "Apodo"
// autocomplete.organization-title: "Job Title" => "Título del trabajo"
// autocomplete.username: "User Name" => "Nombre de usuario"
// autocomplete.new-password: "New Password" => "Nueva contraseña"
// autocomplete.current-password: "Current Password" => "Contraseña actual"
// autocomplete.organization: "Organization Name" => "Nombre de la organización"
// autocomplete.street-address: "Full Street Address" => "Dirección completa"
// autocomplete.address-line1: "Address Line 1" => "Línea de dirección 1"
// autocomplete.address-line2: "Address Line 2" => "Línea de dirección 2"
// autocomplete.address-line3: "Address Line 3" => "Línea de dirección 3"
// autocomplete.address-level4: "Level 4 Address" => "Dirección de nivel 4"
// autocomplete.address-level3: "Level 3 Address" => "Dirección de nivel 3"
// autocomplete.address-level2: "Level 2 Address" => "Dirección de nivel 2"
// autocomplete.address-level1: "Level 1 Address" => "Dirección de nivel 1"
// autocomplete.country: "Country Code" => "Código de país"
// autocomplete.country-name: "Country Name" => "Nombre del país"
// autocomplete.postal-code: "Postal Code" => "Código postal"
// autocomplete.cc-name: "Cardholder Name" => "Nombre del titular de la tarjeta"
// autocomplete.cc-given-name: "Cardholder First Name" => "Nombre del titular de la tarjeta"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Segundo nombre del titular de la tarjeta"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Apellido del titular de la tarjeta"
// autocomplete.cc-number: "Credit Card Number" => "Número de tarjeta de crédito"
// autocomplete.cc-exp: "Expiration Date" => "Fecha de caducidad"
// autocomplete.cc-exp-month: "Expiration Month" => "Mes de vencimiento"
// autocomplete.cc-exp-year: "Expiration Year" => "Año de vencimiento"
// autocomplete.cc-csc: "Card Security Code" => "Código de seguridad de la tarjeta"
// autocomplete.cc-type: "Credit Card Type" => "Tipo de tarjeta de crédito"
// autocomplete.transaction-currency: "Transaction Currency" => "Moneda de la transacción"
// autocomplete.transaction-amount: "Transaction Amount" => "Monto de la transacción"
// autocomplete.language: "Preferred Language" => "Idioma preferido"
// autocomplete.bday: "Birthday" => "Cumpleaños"
// autocomplete.bday-day: "Birthday Day" => "Día de cumpleaños"
// autocomplete.bday-month: "Birthday Month" => "Mes de cumpleaños"
// autocomplete.bday-year: "Birthday Year" => "Año de cumpleaños"
// autocomplete.sex: "Gender" => "Género"
// autocomplete.url: "Website URL" => "URL del sitio web"
// autocomplete.photo: "Profile Photo" => "Foto de perfil"
// autocomplete.tel: "Telephone Number" => "Número de teléfono"
// autocomplete.tel-country-code: "Country Code for Phone" => "Código de país para el teléfono"
// autocomplete.tel-national: "National Telephone Number" => "Número de teléfono nacional"
// autocomplete.tel-area-code: "Area Code" => "Código de área"
// autocomplete.tel-local: "Local Phone Number" => "Número de teléfono local"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Prefijo de teléfono local"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Sufijo de teléfono local"
// autocomplete.tel-extension: "Phone Extension" => "Extensión de teléfono"
// autocomplete.email: "Email Address" => "Dirección de correo electrónico"
// autocomplete.impp: "Instant Messaging Protocol" => "Protocolo de mensajería instantánea"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Bloquear el estado de expansión/contracción de las preguntas"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Todavía no tienes ninguna página"
// pe.addNew@pages: "Add new page" => "Agregar nueva página"
// ed.zoomInTooltip: "Zoom In" => "Acercar"
// ed.zoomOutTooltip: "Zoom Out" => "Alejar"
// tabs.surfaceBackground: "Surface Background" => "Fondo de superficie"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Usar las respuestas de la última entrada como predeterminadas"
// colors.gray: "Gray" => "Gris"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Alineación de los botones de navegación"
// pv.allQuestions: "Show all questions" => "Mostrar todas las preguntas"
// pv.answeredQuestions: "Show answered questions only" => "Mostrar solo las preguntas respondidas"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Establece la ubicación de los botones de navegación en una página."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Utilice los valores de la siguiente columna de matriz o pregunta de panel como ID de opción"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Utilice los valores de la siguiente columna de matriz o pregunta de panel como textos de elección"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Esta configuración especifica qué columna de matriz o pregunta de panel debe proporcionar los identificadores."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "En los tipos de preguntas de selección única y múltiple, cada opción de opción tiene un ID y un valor de visualización. Esta configuración especifica qué columna de matriz o pregunta de panel debe proporcionar los textos de visualización."
// pe.progressBarLocation: "Progress bar alignment" => "Alineación de la barra de progreso"
// progressBarLocation.topbottom: "Top and bottom" => "Arriba y abajo"
// progressBarLocation.aboveheader: "Above the header" => "Encima del encabezado"
// progressBarLocation.belowheader: "Below the header" => "Debajo del encabezado"
// progressBarLocation.off: "Hidden" => "Escondido"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Establece la ubicación de la barra de progreso. El valor \"Auto\" muestra la barra de progreso por encima o por debajo del encabezado de la encuesta."
// survey.readOnly: "Make the survey read-only" => "Hacer que la encuesta sea de solo lectura"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Seleccione si desea evitar que los encuestados completen su encuesta."
// paneldynamic.showNumber: "Number the panel" => "Numerar el panel"
// question.showNumber: "Number this question" => "Numerar esta pregunta"
// pe.previewMode: "Preview mode" => "Modo de vista previa"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Habilitar el diseño de cuadrícula"
// pe.maskSettings: "Mask settings" => "Ajustes de la máscara"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Alineación de mensajes de error de expansión de filas"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Establece la ubicación de los mensajes de error para las preguntas anidadas en secciones de detalle. La opción \"Heredar\" aplica la configuración de la propiedad \"Alineación de mensajes de error\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Columnas de diseño de cuadrícula"
// pe.startPageTitlePlaceholder: "Start Page" => "Página de inicio"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Anchura efectiva, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Ancho del título de la pregunta, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Todavía no tiene columnas de diseño"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Especifica el número de columnas que abarca este panel dentro del diseño de cuadrícula."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Esta tabla le permite configurar cada columna de cuadrícula dentro del panel. Establece automáticamente el porcentaje de ancho para cada columna en función del número máximo de elementos en una fila. Para personalizar el diseño de la cuadrícula, ajuste manualmente estos valores y defina el ancho del título para todas las preguntas de cada columna."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator le permite ajustar manualmente los anchos en línea de los elementos del formulario para controlar el diseño. Si esto no produce el resultado deseado, puede habilitar el diseño de cuadrícula, que estructura elementos mediante un sistema basado en columnas. Para configurar las columnas de diseño, seleccione una página o un panel y utilice la tabla \"Configuración de preguntas\" → \"Columnas de cuadrícula\". Para ajustar el número de columnas que abarca una pregunta, selecciónela y establezca el valor deseado en el campo \"Diseño\" → \"Intervalo de columnas\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Especifica el número de columnas que abarca esta pregunta dentro del diseño de cuadrícula."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Esta tabla le permite configurar cada columna de cuadrícula en la página. Establece automáticamente el porcentaje de ancho para cada columna en función del número máximo de elementos en una fila. Para personalizar el diseño de la cuadrícula, ajuste manualmente estos valores y defina el ancho del título para todas las preguntas de cada columna."

// ed.expandTooltip: "Expand" => "Expandir"
// ed.collapseTooltip: "Collapse" => "Colapso"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Ej.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Establece un ancho coherente para todas las etiquetas de los elementos. Acepta valores CSS (px, %, in, pt, etc.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zoom al 100%"
// ed.addLanguageTooltip: "Add Language" => "Agregar idioma"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Establece el número de líneas mostradas en las áreas de texto para los comentarios de las preguntas. Si la entrada ocupa más líneas, aparece la barra de desplazamiento."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Valor de visualización predeterminado para textos dinámicos"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Un valor que se muestra en las preguntas HTML y en los títulos dinámicos y las descripciones de los elementos de la encuesta cuando el valor de la pregunta está vacío."
// showQuestionNumbers.recursive: "Recursive numbering" => "Numeración recursiva"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Ancho del título de la pregunta"
// pe.allowCustomChoices: "Allow custom choices" => "Permitir opciones personalizadas"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Establece un ancho coherente para los títulos de las preguntas cuando están alineados a la izquierda de sus cuadros de pregunta. Acepta valores CSS (px, %, in, pt, etc.)."
// page.name: "A page ID that is not visible to respondents." => "Un ID de página que no es visible para los encuestados."
// page.description: "Type a page subtitle." => "Escribe un subtítulo de página."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Un título que se muestra en un botón de navegación en la barra de progreso o en la tabla de contenido (TDC). Si dejas este campo vacío, el botón de navegación utilizará el título o el nombre de la página. Para habilitar la barra de progreso o la tabla de contenido, vaya a \"Encuesta\" → \"Navegación\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Seleccione esta opción para permitir que los encuestados agreguen sus propias opciones si la opción deseada no está disponible en el menú desplegable. Las opciones personalizadas solo se almacenarán temporalmente durante la sesión actual del navegador."