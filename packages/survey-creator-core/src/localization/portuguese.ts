import { editorLocalization } from "survey-creator-core";

var portugueseTranslation = {
  // survey templates
  survey: {
    edit: "Editar",
    externalHelpLink: "Veja e aprenda a criar questionários",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Por favor arraste uma pergunta aqui.",
    addLogicItem: "Crie uma regra para configurar o fluxo do questionário.",
    copy: "Copiar",
    duplicate: "Duplicar",
    addToToolbox: "Adicionar às ferramentas",
    deletePanel: "Remover Painel",
    deleteQuestion: "Remover Pergunta",
    convertTo: "Converter para",
    drag: "Arrastar elemento",
  },
  // Question types
  qt: {
    default: "Pré-definido",
    checkbox: "Caixas de Verificação",
    comment: "Comentário",
    imagepicker: "Selecionador de imagem",
    ranking: "Classificação",
    image: "Imagem",
    dropdown: "Lista",
    tagbox: "Tags",
    file: "Arquivo",
    html: "Html",
    matrix: "Matriz (opção única)",
    matrixdropdown: "Matriz (múltiplas opções)",
    matrixdynamic: "Matriz (linhas dinâmicas)",
    multipletext: "Texto múltiplo",
    panel: "Painel",
    paneldynamic: "Painel (painéis dinâmicos)",
    radiogroup: "Grupo de rádio",
    rating: "Avaliação",
    text: "Texto único",
    boolean: "Boleano",
    expression: "Expressão",
    signaturepad: "Caixa de Assinatura",
    buttongroup: "Grupo de Botões"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Pré-definido ({0})",
    survey: "Pesquisa",
    settings: "Configurações da Pesquisa",
    settingsTooltip: "Configurações",
    surveySettings: "Configurações de Questionários",
    surveySettingsTooltip: "Configurações",
    showPanel: "Mostrar Painel",
    hidePanel: "Esconder Painel",
    prevSelected: "Selecionar anterior",
    nextSelected: "Selecionar próximo",
    surveyTypeName: "Questionário",
    pageTypeName: "Página",
    panelTypeName: "Painel",
    questionTypeName: "Questão",
    columnTypeName: "Coluna",
    addNewPage: "Adicionar Nova Página",
    moveRight: "Mover para direita",
    moveLeft: "Mover para esquerda",
    deletePage: "Remover Página",
    editPage: "Editar Página",
    edit: "Editar",
    newPageName: "página",
    newQuestionName: "pergunta",
    newPanelName: "painel",
    newTextItemName: "texto",
    testSurvey: "Testar questionário",
    themeSurvey: "Temas",
    defaultV2Theme: "Pré-definifido",
    modernTheme: "Moderno",
    defaultTheme: "Pré-definido (antigo)",
    testSurveyAgain: "Testar questionário novamente",
    testSurveyWidth: "Tamanho do questionário: ",
    navigateToMsg: "Tem que navegar para",
    logic: "Lógica",
    embedSurvey: "Incorporar Questionário",
    translation: "Tradução",
    saveSurvey: "Salvar Questionário",
    saveSurveyTooltip: "Gravar Questionário",
    designer: "Designer de Questionário",
    jsonEditor: "Editor de JSON",
    jsonHideErrors: "Esconder erros",
    jsonShowErrors: "Mostrar erros",
    undo: "Desfazer",
    redo: "Refazer",
    undoTooltip: "Desfazer última alteração",
    redoTooltip: "Refazer a alteração",
    showMoreChoices: "Mostrar mais",
    showLessChoices: "Mostrar menos",
    copy: "Copiar",
    cut: "Cortar",
    paste: "Colar",
    copyTooltip: "Copiar seleção para a área de transferência",
    cutTooltip: "Cortar seleção para a área de transferência",
    pasteTooltip: "Colar da área de transferência",
    options: "Opções",
    generateValidJSON: "Gerar JSON válido",
    generateReadableJSON: "Gerar JSON legível",
    toolbox: "Ferramentas",
    "property-grid": "Propriedades",
    propertyGridFilteredTextPlaceholder: "Escreva para pesquisar...",
    toolboxGeneralCategory: "Geral",
    toolboxChoiceCategory: "Questões de Escolha",
    toolboxTextCategory: "Questões de Texto",
    toolboxContainersCategory: "Áreas",
    toolboxMatrixCategory: "Questões em Matriz",
    toolboxMiscCategory: "Diversos",
    correctJSON: "Por favor corrija o JSON.",
    surveyResults: "Resultado da pesquisa: ",
    surveyResultsTable: "Como Tabela",
    surveyResultsJson: "Como JSON",
    resultsTitle: "Título da Pergunta",
    resultsName: "Nome da Pergunta",
    resultsValue: "Valor da Resposta",
    resultsDisplayValue: "Mostrar Valor",
    modified: "Modificado",
    saving: "A gravar",
    saved: "Gravado",
    propertyEditorError: "Erro",
    saveError: "Erro! Conteúdo do editor não foi salvo.",
    translationPropertyGridTitle: "Configurações de Idioma",
    themePropertyGridTitle: "Configurações do tema",
    translationLanguages: "Idiomas",
    translationDeleteLanguage: "Tem certeza de que deseja excluir todas as cadeias de caracteres para este idioma?",
    translationAddLanguage: "Selecione o idioma para traduzir",
    translationShowAllStrings: "Mostrar todos os textos",
    translationShowUsedStringsOnly: "Apenas textos utilizados",
    translationShowAllPages: "Mostrar todas páginas",
    translationNoStrings: "Nenhum texto para traduzir. Por favor, altere o filtro.",
    translationExportToSCVButton: "Exportar para CSV",
    translationImportFromSCVButton: "Importar de CSV",
    translationMergeLocaleWithDefault: "Combinar {0} com o idioma pré-definido",
    translationPlaceHolder: "Tradução...",
    themeExportButton: "Exportação",
    themeImportButton: "Importação",
    themeResetButton: "Redefinir as configurações do tema para o padrão",
    bold: "Negrito",
    italic: "Itálico",
    underline: "Sublinhado",
    addNewQuestion: "Adicionar Questão",
    selectPage: "Selecionar página...",
    carryForwardChoicesCopied: "As opções são copiadas de",
    htmlPlaceHolder: "O conteúdo HTML ficará aqui.",
    panelPlaceHolder: "Arraste uma questão da caixa de ferramentas aqui.",
    surveyPlaceHolder: "O questionário está vazio. Arraste um elemento da caixa de ferramentas ou clique no botão abaixo.",
    imagePlaceHolder: "Arraste e solte uma imagem aqui ou clique no botão abaixo e escolha uma imagem para carregar",
    imageChooseImage: "Escolha a imagem",
    addNewTypeQuestion: "Adicionar {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "auto",
    choices_Item: "Item ",
    lg: {
      addNewItem: "Adicionar nova regra",
      empty_tab: "Crie uma regra para personalizar o fluxo do questionário.",
      page_visibilityName: "Mostrar (esconder) página",
      page_enableName: "Ativar (desativar) página",
      panel_visibilityName: "Mostrar (esconder) painel",
      panel_enableName: "Ativar (desativar) painel",
      question_visibilityName: "Mostrar (esconder) questão",
      question_enableName: "Ativar (desativar) questão",
      question_requireName: "Tornar a pergunta obrigatória",
      column_visibilityName: "Mostrar (esconder) coluna",
      column_enableName: "Ativar (desativar) coluna",
      column_requireName: "Tornar a coluna obrigatória",
      trigger_completeName: "Completar questionário",
      trigger_setvalueName: "Definir resposta",
      trigger_copyvalueName: "Copiar resposta",
      trigger_skipName: "Pular para a pergunta",
      trigger_runExpressionName: "Executar expressão",
      completedHtmlOnConditionName: "Definir marcação de página de \"Questionário Completo\"",
      page_visibilityDescription: "Torne a página visível quando a expressão lógica estiver ativa. Caso contrário, mantenha-o invisível.",
      panel_visibilityDescription: "Torne o painel visível quando a expressão lógica estiver ativa. Caso contrário, mantenha-o invisível.",
      panel_enableDescription: "Faça com que o painel e todos os elementos dentro dele sejam ativos quando a expressão lógica estiver ativa. Caso contrário, mantenha-o invisível.",
      question_visibilityDescription: "Torne a pergunta visível quando a expressão lógica estiver ativa. Caso contrário, mantenha-a invisível.",
      question_enableDescription: "Ative a pergunta quando a expressão lógica estiver ativa. Caso contrário, mantenha-a invisível.",
      question_requireDescription: "A pergunta torna-se obrigatória quando a expressão lógica estiver ativa.",
      trigger_completeDescription: "Quando a expressão lógica estiver ativa, a pesquisa será concluída e o utilizador verá a 'Página de Agradecimento'.",
      trigger_setvalueDescription: "Quando os valores da pergunta, que são usados na expressão lógica, são alterados e a expressão lógica fica ativa, então o valor é definido para a pergunta seleccionada.",
      trigger_copyvalueDescription: "Quando os valores das perguntas, que são usados na expressão lógica, são alterados e a expressão lógica fica ativa, então o valor de uma pergunta seleccionada é copiado para outra pergunta seleccionada.",
      trigger_skipDescription: "Quando a expressão lógica volta a ser ativa, então o questionário salta para / focaliza a pergunta seleccionada.",
      trigger_runExpressionDescription: "Quando a expressão lógica volta a ser ativaa, a expressão personalizada é executada. Opcionalmente, pode definir o resultado desta expressão para a pergunta seleccionada",
      completedHtmlOnConditionDescription: "Se a expressão lógica estiver ativa, então o texto padrão para a 'Página de agradecimento' é alterado para a dada.",
      itemExpressionText: "Quando a expressão: '{0}' volta a ficar ativa", //{0} - the expression
      itemEmptyExpressionText: "Nova regra",
      page_visibilityText: "tornar a página {0} visível", //{0} page name
      panel_visibilityText: "tornar painel {0} visível", //{0} panel name
      panel_enableText: "tornar painel {0} ativa", //{0} panel name
      question_visibilityText: "torna questão {0} visível", //{0} question name
      question_enableText: "tornar questão {0} ativa", //{0} question name
      question_requireText: "tornar questão {0} obrigatória", //{0} question name
      column_visibilityText: "tornar coluna {0} da questão {1} visível", //{0} column name, {1} question name
      column_enableText: "tornar coluna {0} da questão {1} ativa", //{0} column name, {1} question name
      column_requireText: "torna coluna {0} da questão {1} obrigatória", //{0} column name, {1} question name
      trigger_completeText: "o questionário fica completo",
      trigger_setvalueText: "Colocar em questão: {0} valor {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "valor claro da pergunta: {0}", //{0} question name
      trigger_copyvalueText: "Copiar a questão: {0} valor da questão {1}", //{0} and {1} question names
      trigger_skipText: "pular para a questão do questionário {0}", //{0} question name
      trigger_runExpressionText1: "executar expressão: '{0}'", //{0} the expression
      trigger_runExpressionText2: " e colocar seu resultado em questão: {0}", //{0} question name
      completedHtmlOnConditionText: "mostrar texto costumizado para a 'página de agradecimento'.",
      showAllQuestions: "Todas as Questões",
      showAllActionTypes: "Todos os Tipos de Questões",
      conditions: "Condição(ões)",
      actions: "Ação(ões)",
      expressionEditorTitle: "Definir condição(ões)",
      actionsEditorTitle: "Definir ação(ões)",
      deleteAction: "Eliminar Ação",
      addNewAction: "Adicionar Ação",
      selectedActionCaption: "Selecionar Ação...",
      expressionInvalid: "A expressão lógica está vazia ou é inválida. Por favor corrija.",
      noActionError: "Por favor, adicione pelo menos uma ação.",
      actionInvalid: "Por favor, corrija os problemas nas sua(s) ação(ões).",
      uncompletedRule_title: "As regras lógicas estão incompletas",
      uncompletedRule_text: "Você não concluiu algumas das regras lógicas. Se você sair da guia agora, as alterações serão perdidas. Você ainda deseja sair da guia sem concluir as alterações?",
      uncompletedRule_apply: "Sim",
      uncompletedRule_cancel: "Não, quero completar as regras",
      expressionSetup: "configuração de expressão",
      actionsSetup: "configuração de ação"
    }
  },
  // Property Editors
  pe: {
    apply: "Aplicar",
    ok: "OK",
    save: "Guardar",
    clear: "Limpar",
    saveTooltip: "Guardar",
    cancel: "Cancelar",
    set: "Definir",
    reset: "Limpar",
    change: "Modificar",
    refresh: "Recarregar",
    close: "Fechar",
    delete: "Apagar",
    add: "Adicionar",
    addNew: "Adicionar Novo",
    addItem: "Clique para adicionar o item...",
    removeItem: "Clique para remover o item...",
    dragItem: "Arraste o item",
    addOther: "Outro",
    addSelectAll: "Selecionar Todos",
    addNone: "Nenhum",
    removeAll: "Remover Todos",
    edit: "Editar",
    back: "Retornar sem guardar",
    backTooltip: "Sair sem guardar",
    saveAndBack: "Sair e retornar",
    saveAndBackTooltip: "Guardar e retornar",
    doneEditing: "Terminar",
    editChoices: "Editar Opções",
    showChoices: "Mostrar Opções",
    move: "Mover",
    empty: "<vazio>",
    emptyValue: "Valor vazio",
    fastEntry: "Entrada Rápida",
    fastEntryNonUniqueError: "Valor '{0}' não é o único",
    fastEntryChoicesCountError: "Limite o número de itens de {0} a {1}",
    fastEntryPlaceholder: "Pode definir dados no seguinte formato:\nvalor1|texto\nvalor2",
    formEntry: "Entrada com formulário",
    testService: "Testar o serviço",
    itemSelectorEmpty: "Selecione o elemento",
    conditionActionEmpty: "Selecione a ação",
    conditionSelectQuestion: "Selecionar pergunta...",
    conditionSelectPage: "Selecione a página...",
    conditionSelectPanel: "Selecione o painel...",
    conditionValueQuestionTitle: "Por favor, entre/selecione o valor",
    expressionHelp: "Por favor informe uma expressão boleana. Ela deve retornar verdadeiro para manter a pergunta/página visível. Por exemplo: {´pergunta1} = 'valor1' or ({pergunta2} = 3 and {pergunta3} < 5)",
    aceEditorHelp: "Pressione ctrl+space para autocompletar",
    aceEditorRowTitle: "Linha atual",
    aceEditorPanelTitle: "Painel atual",
    showMore: "Para mais detalhes, por favor visite a documentação",
    assistantTitle: "Perguntas disponíveis:",
    cellsEmptyRowsColumns: "Deve haver ao menos uma coluna ou linha",
    showPreviewBeforeComplete: "Visualize as respostas antes de submeter o questionário",
    overridingPropertyPrefix: "Definido por ",
    propertyIsEmpty: "Por favor informe um valor na propriedade",
    propertyIsNoUnique: "Insira um valor exclusivo.",
    propertyNameIsNotUnique: "Insira um nome único",
    propertyNameIsIncorrect: "Não use palavras reservadas: \"item\", \"escolha\", \"painel\", \"linha\".",
    listIsEmpty: "Nenhum item foi adicionado ainda",
    "listIsEmpty@choices": "Nenhuma opção foi adicionada ainda",
    "addNew@choices": "Adicionar uma opção",
    expressionIsEmpty: "Expressão está vazia",
    value: "Valor",
    text: "Texto",
    rowid: "ID da Linha",
    imageLink: "Link da Imagem",
    columnEdit: "Editar coluna: {0}",
    itemEdit: "Editar item: {0}",
    url: "URL",
    path: "Caminho",
    valueName: "Nome do valor",
    choicesbyurl: {
      valueName: "Obtenha valores do seguinte campo JSON"
    },
    titleName: "Nome do título",
    imageLinkName: "Obtenha URLs de imagem do seguinte campo JSON",
    allowEmptyResponse: "Permitir resposta vazia",
    titlePlaceholder: "Título",
    surveyTitlePlaceholder: "Título do Questionário",
    pageTitlePlaceholder: "Página {num}",
    descriptionPlaceholder: "Descrição",
    surveyDescriptionPlaceholder: "Descrição",
    pageDescriptionPlaceholder: "Descrição",
    showOtherItem: "Tem item 'outros'",
    otherText: "Texto do item 'outros'",
    showNoneItem: "Permitir a opção Nenhum",
    noneText: "texto de opção Nenhum",
    showSelectAllItem: "Permitir a opção Selecionar tudo",
    selectAllText: "texto de opção Selecionar Todos",
    choicesMin: "Valor mínimo para itens gerados automaticamente",
    choicesMax: "Valor máximo para itens gerados automaticamente",
    choicesStep: "Etapa para itens gerados automaticamente",
    name: "Nome",
    title: "Título",
    cellType: "Tipo de célula",
    colCount: "Contagem de células",
    choicesOrder: "Selecione a ordem das alternativas",
    visible: "É visível?",
    isRequired: "É obrigatório?",
    isAllRowRequired: "Exigir resposta para todas as linhas",
    requiredErrorText: "\"Obrigatório\" mensagem de erro",
    startWithNewLine: "Começa com uma nova linha?",
    rows: "Contagem de linhas",
    cols: "Colunas",
    placeholder: "Texto de referência",
    showPreview: "Mostra pré-visualização de imagem?",
    storeDataAsText: "Gravar conteúdo de arquivo no resultado JSON como texto",
    maxSize: "Tamanho máximo de arquivo em bytes",
    imageHeight: "Altura da imagem",
    imageWidth: "Largura da imagem",
    rowCount: "Contagem de linhas",
    columnLayout: "Layout das colunas",
    addRowLocation: "Localização do botão de adicionar linha",
    addRowText: "Texto do botão para adicionar linhas",
    removeRowText: "Texto do botão para remover linhas",
    rateMin: "Valor mínimo do valor",
    rateMax: "Valor máximo do valor",
    rateStep: "Etapa de taxa",
    minRateDescription: "Descrição de qualificação mínima",
    maxRateDescription: "Descrição de qualificação máxima",
    inputType: "Tipo de entrada",
    optionsCaption: "Título de opção",
    defaultValue: "Valor pré-definido",
    cellsDefaultRow: "Texto pré-definido das células",
    surveyEditorTitle: "Editar configurações da pesquisa",
    qEditorTitle: "Editar pergunta: {0}",
    maxLength: "Tamanho máximo",
    buildExpression: "Construir",
    editExpression: "Editar",
    and: "e",
    or: "ou",
    remove: "Remover",
    addCondition: "Adicionar Condição",
    emptyLogicPopupMessage: "Selecione uma pergunta para começar a configurar as condições.",
    if: "Se",
    then: "em seguida",
    setToName: "Questão alvo",
    fromName: "Questão para copiar a resposta de",
    gotoName: "Questão para pular para",
    ruleIsNotSet: "Regra está incorreta",
    includeIntoResult: "Incluir nos resultados da pesquisa",
    showTitle: "Mostrar/ocultar título",
    expandCollapseTitle: "Expandir/contrair título",
    locale: "Idioma pré-definido",
    simulator: "Selecione o tipo de dispositivo",
    landscapeOrientation: "Alternar para orientação paisagem",
    portraitOrientation: "Altrar para orientação de moldura",
    mode: "Modo (editável/somente leitura)",
    clearInvisibleValues: "Limpar valores invisíveis",
    cookieName: "Nome do cookie (para desativar rode a pesquisa duas vezes localmente)",
    sendResultOnPageNext: "Enviar resultado da pesquisa na página seguinte",
    storeOthersAsComment: "Armazenar 'outros' valores em um campo separado",
    showPageTitles: "Mostrar título da página",
    showPageNumbers: "Mostrar número da página",
    pagePrevText: "Texto para botão de página anterior",
    pageNextText: "Texto para botão de página seguinte",
    completeText: "Texto para botão de completar",
    previewText: "Pré-visualizar o texto do botão Responder",
    editText: "Editar o texto do botão Responder Answer button text",
    startSurveyText: "Texto para botão de começar",
    showNavigationButtons: "Mostrar botões de navegação (navegação default)",
    showPrevButton: "Mostrar botão de voltar (usuário pode retornar para página anterior)",
    firstPageIsStarted: "Primeira página da pesquisa é a página de início.",
    showCompletedPage: "Mostrar a página de conclusão no final (completedHtml)",
    goNextPageAutomatic: "Ao responder todas as perguntas, ir automaticamente para a próxima página",
    showProgressBar: "Mostrar barra de progresso",
    questionTitleLocation: "Localização do título da pergunta",
    requiredText: "Símbolo(s) para perguntas obrigatórias",
    questionStartIndex: "Index das perguntas (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Mostrar número das perguntas",
    questionTitleTemplate: "Template do título da pergunta, default é: '{no}. {obrigatório} {título}'",
    questionErrorLocation: "Localização do erro da pergunta",
    focusFirstQuestionAutomatic: "Focar automaticamente na primeira pergunta ao trocar de página",
    questionsOrder: "Ordenar elementos na página",
    maxTimeToFinish: "Tempo máximo para finalizar pesquisa",
    maxTimeToFinishPage: "Tempo máximo para finalizar página da pesquisa",
    image: {
      imageHeight: "Altura da imagem (em valores aceitos por CSS)",
      imageWidth: "Largura da imagem (em valores aceitos por CSS)"
    },
    page: {
      maxTimeToFinish: "Tempo limite para finalizar esta página (em segundos)"
    },
    question: {
      page: "Página principal"
    },
    showTimerPanel: "Mostrar o painel de cronômetro",
    showTimerPanelMode: "Mostrar painel de modo de cronômetro",
    renderMode: "Modo de renderização",
    allowAddPanel: "Permitir adicionar painel",
    allowRemovePanel: "Permitir remover painel",
    noEntriesText: "Entradas de texto vazias",
    panelAddText: "Texto de adicionar painel",
    panelRemoveText: "Texto de remover painel",
    isSinglePage: "Mostrar todos elementos em uma página",
    html: "HTML markup",
    expression: "Expressão",
    setValue: "Responder",
    dataFormat: "Formato de imagem",
    allowAddRows: "Permitir adicionar linhas",
    allowRemoveRows: "Permitir remover linhas",
    allowRowsDragAndDrop: "Permitir arrastar e soltar linha",
    responsiveImageSizeHelp: "Não se aplica se especificar a largura ou altura exata da imagem.",
    minImageWidth: "Largura mínima da imagem",
    maxImageWidth: "Largura máxima da imagem",
    minImageHeight: "Altura mínima da imagem",
    maxImageHeight: "Altura máxima da imagem",
    minValue: "Valor mínimo",
    maxValue: "Valor máximo.",
    minLength: "Comprimento mínimo (em caracteres)",
    allowDigits: "Permitir dígitos",
    minCount: "Contagem mínima",
    maxCount: "Contagem máxima",
    regex: "Expressão regular",
    surveyvalidator: {
      text: "Mensagem de erro",
      expression: "Expressão de validação"
    },
    totalText: "Texto total da linha",
    totalType: "Tipo total",
    totalExpression: "Expressão total",
    totalDisplayStyle: "Total value display style",
    totalCurrency: "Moeda",
    totalFormat: "String formatada",
    logo: "Logo (URL ou string codificada em base64)",
    questionsOnPageMode: "Estrutura de questionário",
    maxTextLength: "Tamanho máximo da resposta (em caracteres)",
    maxOthersLength: "Tamanho máximo do comentário (em caracteres)",
    autoGrowComment: "Expanda automaticamente a área de comentários, se necessário",
    allowResizeComment: "Permitir que os usuários redimensionem áreas de texto",
    textUpdateMode: "Atualizar valor da pergunta de texto",
    focusOnFirstError: "Defina o foco na primeira resposta inválida",
    checkErrorsMode: "Executar validação",
    navigateToUrl: "Navegar para URL",
    navigateToUrlOnCondition: "URL Dinamico",
    completedBeforeHtml: "Marcação para mostrar se o utilizador já preencheu este questionário",
    completedHtml: "Marcação de página completa do questionário",
    completedHtmlOnCondition: "Marcação de página completa de questionário dinâmico",
    loadingHtml: "Marcação para mostrar enquanto o modelo de questionário está carregando",
    commentText: "Texto da área de comentários",
    autocomplete: "Tipo de preenchimento automático",
    labelTrue: "\"Verdadeiro\" rótulo",
    labelFalse: "\"Falso\" rótulo",
    allowClear: "Mostrar o botão Limpar",
    displayStyle: "Estilo de exibição de valor",
    format: "String formatada",
    maximumFractionDigits: "Máximo de dígitos fracionários",
    minimumFractionDigits: "Mínimo de dígitos fracionários",
    useGrouping: "Display grouping separators",
    allowMultiple: "Permitir vários arquivos",
    allowImagesPreview: "Pré-visualizar imagens",
    acceptedTypes: "Tipos de arquivo aceites",
    waitForUpload: "Aguarde a conclusão do upload",
    needConfirmRemoveFile: "Confirme a eliminação do ficheiro",
    detailPanelMode: "Localização do painel de detalhes",
    minRowCount: "Contagem mínima de linhas",
    maxRowCount: "Contagem máxima de linhas",
    confirmDelete: "Confirme a eliminação da linha",
    confirmDeleteText: "Mensagem de confirmação",
    paneldynamic: {
      confirmDelete: "Confirme a eliminação do painel"
    },
    panelCount: "Contagem inicial do painel",
    minPanelCount: "Contagem mínima de painéis",
    maxPanelCount: "Contagem máxima de painéis",
    panelsState: "Estado de expansão do painel interno",
    templateDescription: "Modelo de descrição",
    templateTitle: "Modelo de título",
    panelPrevText: "Dica de ferramenta do botão do painel anterior",
    panelNextText: "Dica de ferramenta do botão do painel seguinte",
    showRangeInProgress: "MOstrar barra de progresso",
    templateTitleLocation: "Localização do título da pergunta",
    panelRemoveButtonLocation: "Remover localização do botão do painel",
    hideIfRowsEmpty: "Oculte a pergunta se não houver linhas",
    hideColumnsIfEmpty: "Ocultar colunas se não houver linhas",
    rateValues: "Valores de taxa personalizados",
    rateCount: "Contagem de taxas",
    autoGenerate: "Como especificar valores de taxa?",
    hideIfChoicesEmpty: "Oculte a pergunta se ela não contiver opções",
    hideNumber: "Ocultar número de questão",
    minWidth: "Largura mínima (em valores aceitos pelo CSS)",
    maxWidth: "Largura máxima (em valores aceitos pelo CSS)",
    width: "Largura (em valores aceitos pelo CSS)",
    showHeader: "Mostrar cabeçalhos de coluna",
    horizontalScroll: "Mostrar barra de scroll horizontal",
    columnMinWidth: "Largura mínima da coluna (em valores aceitos pelo CSS)",
    rowTitleWidth: "Largura do cabeçalho da linha (em valores aceitos por CSS)",
    valueTrue: "\"Verdadeiro\" valor",
    valueFalse: "\"Falso\" valor",
    minErrorText: "\"O valor está abaixo do mínimo\" mensagem de erro",
    maxErrorText: "\"O valor excede o máximo\" mensagem de erro",
    otherErrorText: "\"Comentário vazio\" mensagem de erro",
    keyDuplicationError: "\"Valor de chave não exclusivo\" mensagem de erro",
    minSelectedChoices: "Mínimo de opções selecionadas",
    maxSelectedChoices: "Máximo de escolhas selecionadas",
    showClearButton: "Mostrar o botão Limpar",
    showNumber: "Mostrar número do painel",
    logoWidth: "Largura do logotipo (em valores aceitos pelo CSS)",
    logoHeight: "Altura do logotipo (em valores aceitos pelo CSS)",
    readOnly: "Apenas para leitura",
    enableIf: "Editável se",
    emptyRowsText: "\"Sem linhas\" mensagem",
    size: "Tamanho de entrada (em caracteres)",
    separateSpecialChoices: "Escolhas especiais separadas (Nenhuma, Outra, Selecionar Tudo)",
    choicesFromQuestion: "Copie as opções da seguinte pergunta",
    choicesFromQuestionMode: "Quais as opções pretendem copiar?",
    showCommentArea: "Mostrar a área de comentários",
    commentPlaceholder: "Espaço reservado para área de comentários",
    displayRateDescriptionsAsExtremeItems: "Exibir descrições de taxa como valores extremos",
    rowsOrder: "Ordem das linhas",
    columnsLayout: "Disposição da coluna",
    columnColCount: "Contagem de colunas aninhadas",
    state: "Estado de expansão do painel",
    correctAnswer: "Resposta correta",
    defaultPanelValue: "Valores pré-definidos",
    cells: "Textos de Célula",
    keyName: "Coluna chave",
    itemvalue: {
      text: "Texto alternativo"
    },
    logoPosition: "Posição do logo",
    addLogo: "Adicionar logo...",
    changeLogo: "Alterae logo...",
    logoPositions: {
      none: "Remover logo",
      left: "Esquerda",
      right: "Direita",
      top: "No cabeçalho",
      bottom: "No rodapé"
    },
    tabs: {
      general: "Geral",
      fileOptions: "Opções",
      html: "Editor Html",
      columns: "Colunas",
      rows: "Linhas",
      choices: "Opções",
      items: "Itens",
      visibleIf: "Visível se",
      enableIf: "Habilitar se",
      requiredIf: "Obrigatório se",
      rateValues: "Valores de qualificação",
      choicesByUrl: "Opções com origem na Web",
      matrixChoices: "Opções padrão",
      multipleTextItems: "Entradas de texto",
      numbering: "Numeração",
      validators: "Validadores",
      navigation: "Navegação",
      question: "Pergunta",
      pages: "Páginas",
      timer: "Cronômetro/Quiz",
      calculatedValues: "Valores Calculados",
      triggers: "Triggers",
      templateTitle: "Título do template",
      totals: "Totais",
      logic: "Lógica",
      layout: "Disposição",
      data: "Data",
      validation: "Validação",
      cells: "Texto de Células",
      showOnCompleted: "Questionário Completo",
      logo: "Logo no Título de Questionário",
      slider: "Slider",
      expression: "Expressão",
      others: "Outros"
    },
    editProperty: "Editar propriedade '{0}'",
    items: "Itens",
    choicesVisibleIf: "Escolhas estão visiveis se",
    choicesEnableIf: "Escolhas são selecionáveis se",
    columnsEnableIf: "Colunas estão visiveis se",
    rowsEnableIf: "Linhas estão visiveis se",
    indent: "Adicionar recuos",
    panel: {
      indent: "Adicionar recuos externos"
    },
    innerIndent: "Adicionar recuos internos",
    defaultValueFromLastRow: "Utilizar os valores padrão da última linha",
    defaultValueFromLastPanel: "Utilizar os valores padrão do último painel",
    enterNewValue: "Por favor, informe o valor.",
    noquestions: "Não há nenhuma pergunta na pesquisa.",
    createtrigger: "Por favor, crie uma condição",
    titleKeyboardAdornerTip: "Pressione o botão enter para editar",
    keyboardAdornerTip: "Pressione o botão enter para editar o item, pressione o botão delete para excluir o item, pressione alt mais a seta para cima ou a seta para baixo para mover o item",
    triggerOn: "Ligado ",
    triggerMakePagesVisible: "Tornar páginas visíveis:",
    triggerMakeQuestionsVisible: "Tornar perguntas visíves:",
    triggerCompleteText: "Completar a pesquisa se obtiver êxito.",
    triggerNotSet: "A condição não está definida",
    triggerRunIf: "Executar se",
    triggerSetToName: "Mudar o valor de: ",
    triggerFromName: "Copiar valor de: ",
    triggerRunExpression: "Rodar essa expressão:",
    triggerSetValue: "para: ",
    triggerGotoName: "Ir para a questão",
    triggerIsVariable: "Não colocar a variável no resultado da pesquisa.",
    triggerRunExpressionEmpty: "Introdução uma expressão valida",
    emptyExpressionPlaceHolder: "Escreva a expressão aqui...",
    noFile: "Nenhum ficheiro selecionado",
    clearIfInvisible: "Limpe o valor se a questão for escondida",
    valuePropertyName: "Nome da propriedade do valor",
    searchEnabled: "Ativar pesquisa",
    hideSelectedItems: "Escolher os itens selecionados",
    closeOnSelect: "Fechar a lista suspensa após a seleção",
    signatureWidth: "Largura da assinatura",
    signatureHeight: "Altura da assinatura",
    verticalAlign: "Alinhamento vertical",
    alternateRows: "Linhas alternativas",
    columnsVisibleIf: "Colunas estão visíveis se",
    rowsVisibleIf: "As linhas são visíveis se",
    otherPlaceholder: "Espaço reservado para área de comentários",
    rateType: "Tipo de tarifa"
  },
  // Property values
  pv: {
    "true": "verdadeiro",
    "false": "falso",
    inherit: "herdar",
    show: "mostrar",
    hide: "ocultar",
    default: "padrão",
    initial: "inicial",
    random: "aleatório",
    collapsed: "colapsado",
    expanded: "expandido",
    none: "nenhum",
    asc: "ascendente",
    desc: "descendente",
    indeterminate: "indeterminado",
    decimal: "decimal",
    currency: "moeda",
    percent: "percentagem",
    firstExpanded: "primeiro expandido",
    off: "desligado",
    onpanel: "Iniciar em cada painel",
    onPanel: "no painel",
    onSurvey: "na pesquisa",
    list: "lista",
    progressTop: "progresso superior",
    progressBottom: "progresso inferior",
    progressTopBottom: "progresso superior inferior",
    tab: "Guias",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "superior",
    bottom: "inferior",
    topBottom: "superior and bottom",
    both: "Ambos",
    left: "esquerda",
    right: "direita",
    color: "cor",
    date: "data",
    datetime: "data hora",
    "datetime-local": "data hora-local",
    email: "e-mail",
    month: "mês",
    number: "número",
    password: "password",
    range: "intervalo",
    tel: "tel",
    text: "texto",
    time: "tempo",
    url: "url",
    week: "semana",
    hidden: "oculto",
    on: "ligado",
    onPage: "na página",
    edit: "editar",
    display: "mostrar",
    onComplete: "ao completar",
    onHidden: "ao ocultar",
    onHiddenContainer: "Quando a pergunta ou seu painel/página fica oculto",
    clearInvisibleValues: {
      none: "Nunca"
    },
    inputType: {
      color: "Cor",
      date: "Data",
      "datetime-local": "Data e Hora",
      email: "Email",
      month: "Mês",
      number: "Número",
      password: "Senha",
      range: "Gama",
      tel: "Número de telefone",
      text: "Texto",
      time: "Hora",
      url: "URL",
      week: "Semana"
    },
    all: "todos",
    page: "página",
    survey: "pesquisa",
    onNextPage: "na página seguinte",
    onValueChanged: "ao mudar valor",
    onValueChanging: "Antes de uma resposta ser alterada",
    standard: "Estrutura original",
    singlePage: "Todas as perguntas em uma única página",
    questionPerPage: "Cada pergunta em uma página individual",
    noPreview: "Sem pré-visualização",
    showAllQuestions: "Mostrar todas as questões",
    showAnsweredQuestions: "Mostrar apenas perguntas respondidas",
    pages: "Páginas completas",
    questions: "Questões respondidas",
    requiredQuestions: "Perguntas obrigatórias respondidas",
    correctQuestions: "Respostas válidas",
    buttons: "Páginas concluídas (interface do botão)",
    underInput: "Sob a entrada",
    underTitle: "Sob o título",
    onBlur: "Em desfoque",
    onTyping: "Enquanto digita",
    underRow: "Sob a linha",
    underRowSingle: "Sob a linha, apenas um painel é visível",
    showNavigationButtons: {
      none: "Escondido"
    },
    showProgressBar: {
      off: "Escondido"
    },
    showTimerPanel: {
      none: "Escondido"
    },
    showTimerPanelMode: {
      all: "Ambos"
    },
    detailPanelMode: {
      none: "Escondido"
    },
    addRowLocation: {
      default: "Depende do layout da matriz"
    },
    panelsState: {
      default: "Os utilizadores não podem expandir ou recolher painéis",
      collapsed: "Todos os painéis estão recolhidos",
      expanded: "Todos os painéis estão espandidos"
    },
    widthMode: {
      auto: "Auto",
      static: "Estático",
      responsive: "Responsivo"
    },
    imageFit: {
      none: "Nenhum",
      contain: "Conter",
      cover: "Cobrir",
      fill: "Preencher"
    },
    contentMode: {
      auto: "Auto",
      image: "Imagem",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Botões",
      dropdown: "Suspenso"
    },
    rateColorMode: {
      default: "Inadimplência"
    },
    autoGenerate: {
      "true": "Gerar",
      "false": "Digite manualmente"
    },
    rateType: {
      labels: "Rótulos",
      stars: "Estrelas",
      smileys: "Smileys"
    }
  },
  // Operators
  op: {
    empty: "está vazio",
    notempty: "não está vazio",
    equal: "é igual",
    notequal: "não é igual",
    contains: "contém",
    notcontains: "não contém",
    anyof: "Nenhum de",
    allof: "Todos de",
    greater: "maior",
    less: "menor",
    greaterorequal: "maior ou igual",
    lessorequal: "menor ou igual",
    and: "e",
    or: "ou"
  },
  // Embed window
  ew: {
    angular: "Usar versão Angular",
    jquery: "Usar versão jQuery",
    knockout: "Usar versão Knockout",
    react: "Usar versão React",
    vue: "Usar versão Vue",
    bootstrap: "Para framework bootstrap",
    modern: "Tema moderno",
    default: "Tema pré-definido",
    orange: "Tema laranja",
    darkblue: "Tema azul escuro",
    darkrose: "Tema rosa escuro",
    stone: "Tema pedra",
    winter: "Tema inverno",
    winterstone: "Tema inverno-pedra",
    showOnPage: "Mostrar pesquisa em uma página",
    showInWindow: "Mostrar pesquisa em uma janela",
    loadFromServer: "Carregar JSON da pesquisa de um servidor",
    titleScript: "Scripts e estilos",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Selecione a página para testar:",
    showInvisibleElements: "Mostrar elementos invisíveis",
    hideInvisibleElements: "Esconder elementos invisíveis"
  },
  validators: {
    answercountvalidator: "contador de respostas",
    emailvalidator: "e-mail",
    expressionvalidator: "expressão",
    numericvalidator: "numérico",
    regexvalidator: "regex",
    textvalidator: "texto"
  },
  triggers: {
    completetrigger: "completar pesquisa",
    setvaluetrigger: "definir valor",
    copyvaluetrigger: "copiar valor",
    skiptrigger: "Saltar para questão",
    runexpressiontrigger: "rodar expressão",
    visibletrigger: "alterar visibilidade"
  },
  pehelp: {
    cookieName: "Os cookies impedem que os usuários preencham a mesma pesquisa duas vezes.",
    size: "Redimensiona a área visível do campo de entrada. Use a configuração <b>Validação → Comprimento máximo</b> para limitar o comprimento de entrada.",
    format: "Utilizar {0} como um espaço reservado para o valor real.",
    totalText: "Visível apenas quando pelo menos uma coluna tiver tipo total ou expressão total.",
    acceptedTypes: "Consulte o [aceitar](https://www.w3schools.com/tags/att_input_accept.asp) descrição do atributo para mais informações.",
    columnColCount: "Aplicável apenas aos tipos de célula Grupo de Rádio e Caixa de Seleção.",
    autocomplete: "Consulte o [autocompleto](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) descrição do atributo para mais informações.",
    valueName: "Se você não definir esta propriedade, a resposta será armazenada em um campo especificado pela propriedade Nome.",
    choicesbyurl: {
      valueName: "Nome"
    },
    keyName: "Se a coluna especifica contiver valores idênticos, o questionário lançará o \"Valor de chave não exclusivo\" erro."
  },
  // Properties
  p: {
    title: {
      name: "título",
      title: "Deixar vazio se for o mesmo que 'Nome'"
    },
    multiSelect: "Permitir escolha múltipla",
    showLabel: "Mostrar legenda das imagens",
    value: "Valor",
    tabAlign: "Alinhamento de tabulação",
    description: "Descrição",
    logoFit: "Ajustar o logo",
    pages: "páginas",
    questions: "questões",
    triggers: "Condições",
    calculatedValues: "Valores calculados",
    surveyId: "Identificação do questionário",
    surveyPostId: "Identificação da publicação do questionário",
    surveyShowDataSaving: "Mostrar economia de dados do questionário",
    questionDescriptionLocation: "Descrição da localização do questionário",
    progressBarType: "Tipo de barra de progresso",
    showTOC: "Mostrar sumário",
    tocLocation: "Localização do sumário",
    questionTitlePattern: "Padrão de título da pergunta",
    widthMode: "Modo de largura",
    showBrandInfo: "Mostrar informações da marca",
    useDisplayValuesInDynamicTexts: "Usar valores de exibição em textos dinâmicos",
    visibleIf: "Visível se",
    titleLocation: "Localização do título",
    descriptionLocation: "Descrição de localização",
    defaultValueExpression: "Valor de expressão pré-definida",
    requiredIf: "Obrigatório se",
    validators: "Validadores",
    bindings: "ligações",
    renderAs: "renderizar como",
    attachOriginalItems: "anexar itens originais",
    choices: "Opções",
    choicesByUrl: "Opções com origem na Web",
    currency: "Moeda",
    cellHint: "Dica de célula",
    isUnique: "É único",
    showInMultipleColumns: "Mostrar em múltiplas colunas",
    totalMaximumFractionDigits: "Total Máximo de Dígitos da Fração",
    totalMinimumFractionDigits: "Total Mínimo de Dígitos da Fração",
    columns: "Colunas",
    detailElements: "Detalhes elementos",
    allowAdaptiveActions: "Permitir ações adaptativas",
    defaultRowValue: "valor default da linha",
    detailPanelShowOnAdding: "Mostrar ao adicionar painel de detalhes",
    choicesLazyLoadEnabled: "Escolha carga lenta habilitada",
    choicesLazyLoadPageSize: "Escolha carga lenta tamanho de página",
    inputFieldComponent: "Componente de campo de entrada",
    itemComponent: "Componente de item",
    min: "min",
    max: "max",
    minValueExpression: "Expressão valor mínimo",
    maxValueExpression: "Expressão valor máximo",
    step: "passo",
    dataList: "Lista",
    itemSize: "Tamanho do item",
    elements: "elementos",
    content: "conteúdo",
    navigationButtonsVisibility: "Visibilidade dos botões de navegação",
    navigationTitle: "Título de navegação",
    navigationDescription: "Descrição de navegação",
    longTap: "Toque longo",
    autoGrow: "Crescimento automático",
    allowResize: "Permitir redimensionamento",
    acceptCarriageReturn: "aceitar devolução de conteúdo",
    displayMode: "Modo de exibição",
    rateType: "Tipo de tarifa",
    label: "Rótulo",
    contentMode: "Modo de conteúdo",
    imageFit: "Ajustar imagem",
    altText: "Texto alternativo",
    height: "altura",
    penColor: "Cor de caneta",
    backgroundColor: "Cor de fundo",
    templateElements: "Modelo de elementos",
    operator: "operador",
    isVariable: "É vairável",
    runExpression: "Expressão de execução",
    showCaption: "Mostrar descrição",
    iconName: "Nome do ícone",
    iconSize: "Tamanho do ícone",
    precision: "Precisão",
    matrixDragHandleArea: "Área da alça de arraste da matriz",
    backgroundImage: "Imagem de fundo",
    backgroundImageFit: "Ajuste de imagem de plano de fundo",
    backgroundImageAttachment: "Anexo de imagem de plano de fundo",
    backgroundOpacity: "Opacidade de fundo",
    selectToRankEnabled: "Selecione para classificar ativado",
    selectToRankAreasLayout: "Selecione para classificar o layout das áreas",
    allowCameraAccess: "Permitir acesso à câmera",
    scaleColorMode: "Modo de cor de escala",
    rateColorMode: "Classifique o modo de cores",
    templateTabTitle: "Título da guia Modelo",
    templateVisibleIf: "Modelo visível se",
    copyDisplayValue: "Copiar valor de exibição"
  },
  theme: {
    "--background": "Cor de fundo",
    "--background-dim-light": "Fundo cor fraca da luz",
    "--primary-foreground": "Cor primária de primeiro plano",
    "--foreground": "Cor de primeiro plano",
    "--base-unit": "Unidade base",
    groupGeneral: "Geral",
    groupAdvanced: "Avançado",
    themeName: "Tema",
    themeMode: "Aparência da pergunta",
    themeModePanels: "Inadimplência",
    themeModeLightweight: "Sem Painéis",
    themePaletteLight: "Luz",
    themePaletteDark: "Escuro",
    primaryColor: "Cor de destaque",
    primaryDefaultColor: "Inadimplência",
    primaryDarkColor: "Pairar",
    primaryLightColor: "Selecionado",
    backgroundDimColor: "Cor de fundo",
    backgroundImage: "Imagem de fundo",
    backgroundImageFitAuto: "Automático",
    backgroundImageFitCover: "Cobrir",
    backgroundImageFitContain: "Conter",
    backgroundOpacity: "Opacidade",
    backgroundImageAttachmentFixed: "Fixo",
    backgroundImageAttachmentScroll: "Rolar",
    panelBackgroundTransparency: "Opacidade do plano de fundo do painel",
    questionBackgroundTransparency: "Opacidade de fundo da pergunta",
    questionPanel: "Fundo do painel e raio de canto",
    questionTitle: "Fonte do título da pergunta",
    questionDescription: "Fonte da descrição da pergunta",
    editorPanel: "Elemento de entrada",
    editorFont: "Fonte do elemento de entrada",
    backcolor: "Plano de fundo padrão",
    hovercolor: "Plano de fundo do mouse",
    borderDecoration: "Decoração de borda",
    accentBackground: "Fundo de destaque",
    accentForeground: "Destaque em primeiro plano",
    primaryForecolor: "Cor padrão",
    primaryForecolorLight: "Cor desativada",
    linesColors: "Cores de linha secundárias",
    borderDefault: "Escuro",
    borderLight: "Isqueiro",
    fontFamily: "Família de fontes",
    fontSize: "Tamanho da fonte",
    color: "Cor",
    placeholderColor: "Cor do espaço reservado",
    size: "Tamanho",
    fontWeightRegular: "Regular",
    fontWeightHeavy: "Pesado",
    fontWeightSemiBold: "Semi-negrito",
    fontWeightBold: "Ousado",
    scale: "Escala",
    cornerRadius: "Raio de canto",
    surveyTitle: "Fonte do título do questionário",
    pageTitle: "Fonte do título da página",
    pageDescription: "Fonte da descrição da página",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Adicionar efeito de sombra",
    opacity: "Opacidade",
    boxShadowBlur: "Borrão",
    boxShadowSpread: "Espalhar",
    boxShadowDrop: "Deixar cair",
    boxShadowInner: "Interno",
    questionShadow: "Efeitos de sombra",
    editorShadow: "Efeitos de sombra do elemento de entrada",
    names: {
      default: "Inadimplência",
      sharp: "Afiado",
      borderless: "Sem fronteiras",
      flat: "Plano",
      plain: "Planície",
      doubleborder: "Borda Dupla",
      layered: "Camadas",
      solid: "Sólido",
      threedimensional: ".3D",
      contrast: "Contraste"
    },
    colors: {
      teal: "Azul-petróleo",
      blue: "Azul",
      purple: "Roxo",
      orchid: "Orquídea",
      tulip: "Tulipa",
      brown: "Marrom",
      green: "Verde"
    }
  }
};

editorLocalization.locales["pt"] = portugueseTranslation;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber" => "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
// ed.themeSurvey: "Themes" => "Temas"
// ed.themePropertyGridTitle: "Theme Settings" => "Configurações do tema"
// ed.themeExportButton: "Export" => "Exportação"
// ed.themeImportButton: "Import" => "Importação"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "As opções são copiadas de"
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Arraste e solte uma imagem aqui ou clique no botão abaixo e escolha uma imagem para carregar"
// ed.imageChooseImage: "Choose Image" => "Escolha a imagem"
// ed.choices_Item: "Item " => "Item "
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "valor claro da pergunta: {0}"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "As regras lógicas estão incompletas"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Você não concluiu algumas das regras lógicas. Se você sair da guia agora, as alterações serão perdidas. Você ainda deseja sair da guia sem concluir as alterações?"
// lg.uncompletedRule_apply: "Yes" => "Sim"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Não, quero completar as regras"
// pe.overridingPropertyPrefix: "Set by " => "Definido por "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Não use palavras reservadas: \"item\", \"escolha\", \"painel\", \"linha\"."
// image.imageHeight: "Image height (in CSS-accepted values)" => "Altura da imagem (em valores aceitos por CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Largura da imagem (em valores aceitos por CSS)"
// pe.allowResizeComment: "Allow users to resize text areas" => "Permitir que os usuários redimensionem áreas de texto"
// pe.rateCount: "Rate count" => "Contagem de taxas"
// pe.autoGenerate: "How to specify rate values?" => "Como especificar valores de taxa?"
// pe.minSelectedChoices: "Minimum selected choices" => "Mínimo de opções selecionadas"
// pe.closeOnSelect: "Close the dropdown after selection" => "Fechar a lista suspensa após a seleção"
// pe.rateType: "Rate type" => "Tipo de tarifa"
// pv.tab: "Tabs" => "Guias"
// inputType.color: "Color" => "Cor"
// inputType.date: "Date" => "Data"
// inputType.datetime-local: "Date and Time" => "Data e Hora"
// inputType.email: "Email" => "Email"
// inputType.month: "Month" => "Mês"
// inputType.number: "Number" => "Número"
// inputType.password: "Password" => "Senha"
// inputType.range: "Range" => "Gama"
// inputType.tel: "Phone Number" => "Número de telefone"
// inputType.text: "Text" => "Texto"
// inputType.time: "Time" => "Hora"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Semana"
// rateColorMode.default: "Default" => "Inadimplência"
// autoGenerate.true: "Generate" => "Gerar"
// autoGenerate.false: "Enter manually" => "Digite manualmente"
// rateType.labels: "Labels" => "Rótulos"
// rateType.stars: "Stars" => "Estrelas"
// rateType.smileys: "Smileys" => "Smileys"
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Redimensiona a área visível do campo de entrada. Use a configuração <b>Validação → Comprimento máximo</b> para limitar o comprimento de entrada."
// p.tabAlign: "Tab alignment" => "Alinhamento de tabulação"
// p.showTOC: "Show TOC" => "Mostrar sumário"
// p.tocLocation: "Toc location" => "Localização do sumário"
// p.allowResize: "Allow resizing" => "Permitir redimensionamento"
// p.rateType: "Rate type" => "Tipo de tarifa"
// p.precision: "Precision" => "Precisão"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Área da alça de arraste da matriz"
// p.backgroundImage: "Background image" => "Imagem de fundo"
// p.backgroundImageFit: "Background image fit" => "Ajuste de imagem de plano de fundo"
// p.backgroundImageAttachment: "Background image attachment" => "Anexo de imagem de plano de fundo"
// p.backgroundOpacity: "Background opacity" => "Opacidade de fundo"
// p.selectToRankEnabled: "Select to rank enabled" => "Selecione para classificar ativado"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Selecione para classificar o layout das áreas"
// p.allowCameraAccess: "Allow camera access" => "Permitir acesso à câmera"
// p.scaleColorMode: "Scale color mode" => "Modo de cor de escala"
// p.rateColorMode: "Rate color mode" => "Classifique o modo de cores"
// p.templateTabTitle: "Template tab title" => "Título da guia Modelo"
// p.templateVisibleIf: "Template visible if" => "Modelo visível se"
// p.copyDisplayValue: "Copy display value" => "Copiar valor de exibição"
// theme.--background: "Background color" => "Cor de fundo"
// theme.--background-dim-light: "Background dim light color" => "Fundo cor fraca da luz"
// theme.--primary-foreground: "Primary foreground color" => "Cor primária de primeiro plano"
// theme.--foreground: "Foreground color" => "Cor de primeiro plano"
// theme.--base-unit: "Base unit" => "Unidade base"
// theme.groupGeneral: "General" => "Geral"
// theme.groupAdvanced: "Advanced" => "Avançado"
// theme.themeName: "Theme" => "Tema"
// theme.themeMode: "Question appearance" => "Aparência da pergunta"
// theme.themeModePanels: "Default" => "Inadimplência"
// theme.themeModeLightweight: "Without Panels" => "Sem Painéis"
// theme.themePaletteLight: "Light" => "Luz"
// theme.themePaletteDark: "Dark" => "Escuro"
// theme.primaryColor: "Accent color" => "Cor de destaque"
// theme.primaryDefaultColor: "Default" => "Inadimplência"
// theme.primaryDarkColor: "Hover" => "Pairar"
// theme.primaryLightColor: "Selected" => "Selecionado"
// theme.backgroundDimColor: "Background color" => "Cor de fundo"
// theme.backgroundImage: "Background image" => "Imagem de fundo"
// theme.backgroundImageFitAuto: "Auto" => "Automático"
// theme.backgroundImageFitCover: "Cover" => "Cobrir"
// theme.backgroundImageFitContain: "Contain" => "Conter"
// theme.backgroundOpacity: "Opacity" => "Opacidade"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Fixo"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Rolar"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacidade do plano de fundo do painel"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opacidade de fundo da pergunta"
// theme.questionPanel: "Panel background and corner radius" => "Fundo do painel e raio de canto"
// theme.questionTitle: "Question title font" => "Fonte do título da pergunta"
// theme.questionDescription: "Question description font" => "Fonte da descrição da pergunta"
// theme.editorPanel: "Input element" => "Elemento de entrada"
// theme.editorFont: "Input element font" => "Fonte do elemento de entrada"
// theme.backcolor: "Default background" => "Plano de fundo padrão"
// theme.hovercolor: "Hover background" => "Plano de fundo do mouse"
// theme.borderDecoration: "Border decoration" => "Decoração de borda"
// theme.accentBackground: "Accent background" => "Fundo de destaque"
// theme.accentForeground: "Accent foreground" => "Destaque em primeiro plano"
// theme.primaryForecolor: "Default color" => "Cor padrão"
// theme.primaryForecolorLight: "Disabled color" => "Cor desativada"
// theme.linesColors: "Minor line colors" => "Cores de linha secundárias"
// theme.borderDefault: "Darker" => "Escuro"
// theme.borderLight: "Lighter" => "Isqueiro"
// theme.fontFamily: "Font family" => "Família de fontes"
// theme.fontSize: "Font size" => "Tamanho da fonte"
// theme.color: "Color" => "Cor"
// theme.size: "Size" => "Tamanho"
// theme.fontWeightRegular: "Regular" => "Regular"
// theme.fontWeightHeavy: "Heavy" => "Pesado"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-negrito"
// theme.fontWeightBold: "Bold" => "Ousado"
// theme.scale: "Scale" => "Escala"
// theme.cornerRadius: "Corner radius" => "Raio de canto"
// theme.surveyTitle: "Survey title font" => "Fonte do título do questionário"
// theme.pageTitle: "Page title font" => "Fonte do título da página"
// theme.pageDescription: "Page description font" => "Fonte da descrição da página"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Adicionar efeito de sombra"
// theme.opacity: "Opacity" => "Opacidade"
// theme.boxShadowBlur: "Blur" => "Borrão"
// theme.boxShadowSpread: "Spread" => "Espalhar"
// theme.boxShadowDrop: "Drop" => "Deixar cair"
// theme.boxShadowInner: "Inner" => "Interno"
// theme.questionShadow: "Shadow effects" => "Efeitos de sombra"
// theme.editorShadow: "Input element shadow effects" => "Efeitos de sombra do elemento de entrada"
// names.default: "Default" => "Inadimplência"
// names.contrast: "Contrast" => "Contraste"
// names.plain: "Plain" => "Planície"
// names.simple: "Simple" => "Simples"
// names.blank: "Blank" => "Em branco"
// names.double: "Double" => "Dobrar"
// names.bulk: "Bulk" => "Granel"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Brincalhão"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Azul-petróleo"
// colors.blue: "Blue" => "Azul"
// colors.purple: "Purple" => "Roxo"
// colors.orchid: "Orchid" => "Orquídea"
// colors.tulip: "Tulip" => "Tulipa"
// colors.brown: "Brown" => "Marrom"
// colors.green: "Green" => "Verde"
// names.sharp: "Sharp" => "Afiado"
// names.borderless: "Borderless" => "Sem fronteiras"
// names.flat: "Flat" => "Plano"
// names.doubleborder: "Double Border" => "Borda Dupla"
// names.layered: "Layered" => "Camadas"
// names.solid: "Solid" => "Sólido"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Tem certeza de que deseja excluir todas as cadeias de caracteres para este idioma?"
// ed.themeResetButton: "Reset theme settings to default" => "Redefinir as configurações do tema para o padrão"
// theme.placeholderColor: "Placeholder color" => "Cor do espaço reservado"