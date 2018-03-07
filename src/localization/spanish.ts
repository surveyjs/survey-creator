import { editorLocalization } from "../editorLocalization";

var spanishTranslation = {
  // strings for survey templates
  survey: {
    edit: "Editar",
    dropQuestion:
      "Por favor coloque una pregunta aquí de la caja de herramientas en la izquierda.",
    copy: "Copiar",
    addToToolbox: "Añadir a la caja de herramientas",
    deletePanel: "Eliminar Panel",
    deleteQuestion: "Borrar Pregunta",
    convertTo: "Convertir a"
  },
  //questionTypes
  qt: {
    checkbox: "Checkbox",
    comment: "Comentario",
    dropdown: "Dropdown",
    file: "Archivo",
    html: "Html",
    matrix: "Matriz (elección única)",
    matrixdropdown: "Matriz (elección múltiple)",
    matrixdynamic: "Matriz (filas dinámicas)",
    multipletext: "Texto múltiple",
    panel: "Panel",
    paneldynamic: "Panel (paneles dinámicos)",
    radiogroup: "Grupo de radio",
    rating: "Rating",
    text: "Entrada sencilla",
    boolean: "Booleano",
    expression: "Expresión"
  },
  //Strings in Editor
  ed: {
    survey: "Encuesta",
    editSurvey: "Editar Encuesta",
    addNewPage: "Añadir Nueva Página",
    deletePage: "Borrar Página",
    editPage: "Editar Página",
    newPageName: "página",
    newQuestionName: "pregunta",
    newPanelName: "panel",
    testSurvey: "Probar Encuesta",
    testSurveyAgain: "Probar Encuesta Otra Vez",
    testSurveyWidth: "Ancho de Encuesta: ",
    embedSurvey: "Empotrar Encuesta",
    saveSurvey: "Guardar Encuesta",
    designer: "Diseñador de Encuesta",
    jsonEditor: "Editor de JSON",
    undo: "Deshacer",
    redo: "Rehacer",
    options: "Opciones",
    generateValidJSON: "Generar JSON válido",
    generateReadableJSON: "Generar JSON legible",
    toolbox: "Caja de herramientas",
    delSelObject: "Borrar objeto seleccionado",
    editSelObject: "Editar objeto seleccionado",
    correctJSON: "Por favor corrija JSON.",
    surveyResults: "Resultado de Encuesta: ",
    modified: "Modificado",
    saving: "Salvando",
    saved: "Salvado"
  },
  //Property Editors
  pe: {
    apply: "Aplicar",
    ok: "OK",
    cancel: "Cancelar",
    reset: "Restaurar",
    close: "Cerrar",
    delete: "Borrar",
    addNew: "Añadir nuevo",
    addItem: "Click para añadir articulo...",
    removeAll: "Quitar todos",
    edit: "Editar",
    move: "Mover",
    empty: "<vacío>",
    fastEntry: "Entrada rápida",
    formEntry: "Entrar en forma",
    testService: "Pruebe el servicio",
    conditionSelectQuestion: "Seleccionar pregunta...",
    conditionButtonAdd: "Añadir",
    conditionButtonReplace: "Reemplazar",
    conditionHelp:
      "Por favor proporcione una expresión booleana. Debería regresar verdadero para mantener la pregunta/página visible. Por ejemplo: {pregunta1} = 'valor1' or ({pregunta2} * {pregunta4}  > 20 and {pregunta3} < 5)",
    expressionHelp:
      "Por favor proporcione una expresión. Puede hacer uso de llaves para tener acceso a los valores de la pregunta: '{pregunta1} + {pregunta2}', '({precio}*{cantidad}) * (100 - {descuento})'",
    aceEditorHelp:
      "Presione ctrl+espacio para obtener un indicio de completado de expresión",
    aceEditorRowTitle: "Fila actual",
    aceEditorPanelTitle: "Panel actual",
    showMore: "Por favor use la documentación para más detalles",
    assistantTitle: "Preguntas disponibles:",
    propertyIsEmpty: "Por favor proporcione un valor",
    value: "Valor",
    text: "Texto",
    required: "Requerido?",
    columnEdit: "Editar columna: {0}",
    itemEdit: "Editar artículo: {0}",
    url: "URL",
    path: "trayecto",
    valueName: "Nombre del valor",
    titleName: "Título",
    hasOther: "Tiene otro artículo",
    otherText: "Texto de otro artículo",
    name: "Nombre",
    title: "Título",
    cellType: "Tipo de celda",
    colCount: "Conteo de columnas",
    choicesOrder: "Orden de selección de elecciones",
    visible: "Es visible?",
    isRequired: "Es requerido?",
    startWithNewLine: "Es inicio con nueva línea?",
    rows: "Conteo de filas",
    placeHolder: "Marcador de entrada",
    showPreview: "Se muestra avance de imagen?",
    storeDataAsText:
      "Guardar contenido de archivo en resultado JSON como texto",
    maxSize: "Tamaño máximo de archivo en bytes",
    imageHeight: "Altura de imagen",
    imageWidth: "Ancho de imagen",
    rowCount: "Conteo de filas",
    addRowText: "Añadir texto de boton de fila",
    removeRowText: "Quitar texto de boton de fila",
    minRateDescription: "Descripción de la tasa mínima",
    maxRateDescription: "Descripción de la tarifa máxima",
    inputType: "Tipo de entrada",
    optionsCaption: "Leyenda de opciones",
    defaultValue: "Valor de defecto",

    surveyEditorTitle: "Editar ajustes de encuesta",
    qEditorTitle: "Editar: {0}",

    //survey
    showTitle: "Mostrar/esconder título",
    locale: "Lenguaje de defecto",
    mode: "Modo (editar/solo lectura)",
    clearInvisibleValues: "Borrar valores invisibles",
    cookieName:
      "Nombre de Cookie (para deshabilitar corra encuesta dos veces localmente)",
    sendResultOnPageNext: "Mandar resultados de encuesta en página siguiente",
    storeOthersAsComment: "Guardar valor 'otros' en campo separado",
    showPageTitles: "Mostrar títulos de página",
    showPageNumbers: "Mostrar números de página",
    pagePrevText: "Texto de botón de página previa",
    pageNextText: "Texto de botón de página próxima",
    completeText: "Texto de botón de completado",
    startSurveyText: "Texto de botón de inicio",
    showNavigationButtons:
      "Mostrar botones de navigación (navegación de defecto)",
    showPrevButton:
      "Mostrar botón previo (el usuario puede regresar en página previa)",
    firstPageIsStarted:
      "La primera página en la encuesta es una página iniciada.",
    showCompletedPage: "Mostrar la página completada al final (completedHtml)",
    goNextPageAutomatic:
      "Al contestar todas las preguntas, ir a la próxima página automáticamente",
    showProgressBar: "Mostrar barra de progreso",
    questionTitleLocation: "Localización de título de pregunta",
    requiredText: "La pregunta requiere de símbolo(s)",
    questionStartIndex: "Índice de inicio de pregunta (1, 2 o 'A', 'a')",
    showQuestionNumbers: "Mostrar números de preguntas",
    questionTitleTemplate:
      "Plantilla de título de pregunta, defecto es: '{no}. {require} {title}'",
    questionErrorLocation: "Localización de error de pregunta",
    focusFirstQuestionAutomatic:
      "Foco en primera pregunta al cambiar la página",
    questionsOrder: "Órden de elementos en la página",
    maxTimeToFinish: "Tiempo máximo para finalizar la encuesta",
    maxTimeToFinishPage:
      "Tiempo máximo para finalizar una página en la encuesta",
    showTimerPanel: "Mostrar panel de temporizador",
    showTimerPanelMode: "Modo de muestra de panel de temporizador",
    renderMode: "Modo de interpretador",
    allowAddPanel: "Permitir adición de un panel",
    allowRemovePanel: "Permitir remoción del panel",
    panelAddText: "Añadiendo texto de panel",
    panelRemoveText: "Quitando texto de panel",
    isSinglePage: "Mostrar todos los elementos en una página",

    tabs: {
      general: "General",
      fileOptions: "Opciones",
      html: "Editor Html",
      columns: "Columnas",
      rows: "Filas",
      choices: "Opciones",
      visibleIf: "Visible Si",
      enableIf: "Habilitar Si",
      rateValues: "Valores de tasa",
      choicesByUrl: "Opciones de la Web",
      matrixChoices: "Opciones de defecto",
      multipleTextItems: "Entradas de texto",
      validators: "Validadores",
      navigation: "Navegación",
      question: "Pregunta",
      completedHtml: "Html Completado",
      loadingHtml: "Cargando Html",
      timer: "Temporizador/Quiz",
      triggers: "Disparadores",
      templateTitle: "Título de plantilla"
    },
    editProperty: "Editar propiedad '{0}'",
    items: "[ Items: {0} ]",

    enterNewValue: "Por favor, proporcione el valor.",
    noquestions: "No hay ni una pregunta en la encuesta.",
    createtrigger: "Por favor cree un disparador",
    triggerOn: "En ",
    triggerMakePagesVisible: "Hacer páginas visibles:",
    triggerMakeQuestionsVisible: "Hacer elementos visibles:",
    triggerCompleteText: "Complete la encuesta en caso de éxito.",
    triggerNotSet: "El disparador no está configurado",
    triggerRunIf: "Correr si",
    triggerSetToName: "Cambiar valor de: ",
    triggerSetValue: "a: ",
    triggerIsVariable: "No poner la variable en el resultado de la encuesta."
  },
  //Property values
  pv: {
    true: "verdadero",
    false: "falso",

    ar: "العربية",
    ca: "català",
    cz: "čeština",
    da: "dansk",
    de: "deutsch",
    en: "english",
    es: "español",
    fa: "فارْسِى",
    fi: "suomalainen",
    fr: "français",
    gr: "ελληνικά",
    he: "עברית",
    hu: "magyar",
    it: "italiano",
    is: "íslenska",
    ka: "ქართული",
    lv: "latviešu",
    nl: "hollandsk",
    no: "norsk",
    pl: "polski",
    pt: "português",
    ro: "română",
    ru: "русский",
    sv: "svenska",
    tr: "türkçe",
    "zh-cn": "简体中文"
  },
  //Operators
  op: {
    empty: "es vacío",
    notempty: "no es vacío",
    equal: "igual a",
    notequal: "no igual a",
    contains: "contiene",
    notcontains: "no contiene",
    greater: "mayor",
    less: "menor",
    greaterorequal: "mayor o igual a",
    lessorequal: "menor or igual a"
  },
  //Embed window
  ew: {
    angular: "Use versión Angular",
    jquery: "Use versión jQuery",
    knockout: "Use versión Knockout",
    react: "Use versión React",
    vue: "Use versión Vue",
    bootstrap: "Para entorno bootstrap",
    standard: "No bootstrap",
    showOnPage: "Mostrar encuesta en una página",
    showInWindow: "Mostrar encuesta en una ventana",
    loadFromServer: "Cargar JSON de encuesta del servidor",
    titleScript: "Scripts y estilos",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Test Survey
  ts: {
    selectPage: "Seleccione la página para probarla:"
  },
  validators: {
    answercountvalidator: "cuenta de respuestas",
    emailvalidator: "e-mail",
    numericvalidator: "numerico",
    regexvalidator: "regex",
    textvalidator: "texto"
  },
  triggers: {
    completetrigger: "encuesta completa",
    setvaluetrigger: "valor ajustado",
    visibletrigger: "cambio de visibilidad"
  },
  //Properties
  p: {
    name: "nombre",
    title: {
      name: "título",
      title: "Dejarlo vacío, si es igual que 'Nombre'"
    },
    page_title: { name: "título", title: "Título de página" }
  }
};

editorLocalization.locales["es"] = spanishTranslation;
