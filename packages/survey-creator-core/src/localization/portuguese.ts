import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Testar questionário",
    theme: "Temas",
    translation: "Tradução",
    designer: "Designer de Questionário",
    json: "Editor de JSON",
    logic: "Lógica"
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
  toolboxCategories: {
    general: "Geral",
    choice: "Questões de Escolha",
    text: "Questões de Texto",
    containers: "Áreas",
    matrix: "Questões em Matriz",
    misc: "Diversos"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Pré-definido ({0})",
    survey: "Pesquisa",
    settings: "Configurações da Pesquisa",
    settingsTooltip: "Configurações",
    surveySettings: "Configurações de Questionários",
    surveySettingsTooltip: "Configurações do questionário",
    themeSettings: "Configurações do tema",
    themeSettingsTooltip: "Configurações do tema",
    creatorSettingTitle: "Configurações do criador",
    showPanel: "Mostrar Painel",
    hidePanel: "Esconder Painel",
    prevSelected: "Selecionar anterior",
    nextSelected: "Selecionar próximo",
    prevFocus: "Foco anterior",
    nextFocus: "Foco a seguir",
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
    defaultV2Theme: "Pré-definifido",
    modernTheme: "Moderno",
    defaultTheme: "Pré-definido (antigo)",
    testSurveyAgain: "Testar questionário novamente",
    testSurveyWidth: "Tamanho do questionário: ",
    navigateToMsg: "Tem que navegar para",
    saveSurvey: "Salvar Questionário",
    saveSurveyTooltip: "Gravar Questionário",
    saveTheme: "Salvar tema",
    saveThemeTooltip: "Salvar tema",
    jsonHideErrors: "Esconder erros",
    jsonShowErrors: "Mostrar erros",
    undo: "Desfazer",
    redo: "Refazer",
    undoTooltip: "Desfazer última alteração",
    redoTooltip: "Refazer a alteração",
    expandTooltip: "Expandir",
    collapseTooltip: "Colapso",
    expandAllTooltip: "Expandir tudo",
    collapseAllTooltip: "Recolher tudo",
    zoomInTooltip: "Ampliar",
    zoom100Tooltip: "Zoom para 100%",
    zoomOutTooltip: "Diminuir o zoom",
    lockQuestionsTooltip: "Bloquear estado de expansão/recolhimento para perguntas",
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
    toolboxFilteredTextPlaceholder: "Digite para pesquisar...",
    toolboxNoResultsFound: "Nenhum resultado encontrado",
    propertyGridFilteredTextPlaceholder: "Escreva para pesquisar...",
    propertyGridNoResultsFound: "Nenhum resultado encontrado",
    propertyGridPlaceholderTitle: "Comece a configurar seu formulário",
    propertyGridPlaceholderDescription: "Clique em qualquer ícone de categoria para explorar as configurações do questionário. Configurações adicionais ficarão disponíveis quando você adicionar um elemento de levantamento topográfico à superfície de design.",
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
    addLanguageTooltip: "Adicionar idioma",
    translationLanguages: "Idiomas",
    translationDeleteLanguage: "Tem certeza de que deseja excluir todas as cadeias de caracteres para este idioma?",
    translationAddLanguage: "Selecione o idioma para traduzir",
    translationShowAllStrings: "Mostrar todos os textos",
    translationShowUsedStringsOnly: "Apenas textos utilizados",
    translationShowAllPages: "Mostrar todas páginas",
    translationNoStrings: "Nenhum texto para traduzir. Por favor, altere o filtro.",
    translationExportToSCVButton: "Exportar para CSV",
    translationImportFromSCVButton: "Importar de CSV",
    translateUsigAI: "Tradução automática de todos",
    translateUsigAIFrom: "Traduzir do: ",
    translationDialogTitle: "Cadeias de caracteres não traduzidas",
    translationMergeLocaleWithDefault: "Combinar {0} com o idioma pré-definido",
    translationPlaceHolder: "Tradução...",
    translationSource: "Fonte: ",
    translationTarget: "Alvo: ",
    translationYouTubeNotSupported: "Os links do YouTube não são suportados.",
    themeExportButton: "Exportação",
    themeImportButton: "Importação",
    surveyJsonExportButton: "Exportação",
    surveyJsonImportButton: "Importação",
    surveyJsonCopyButton: "Copiar para área de transferência",
    themeResetButton: "Redefinir as configurações do tema para o padrão",
    themeResetConfirmation: "Você realmente quer redefinir o tema? Todas as suas personalizações serão perdidas.",
    themeResetConfirmationOk: "Sim, redefinir o tema",
    bold: "Negrito",
    italic: "Itálico",
    underline: "Sublinhado",
    addNewQuestion: "Adicionar Questão",
    selectPage: "Selecionar página...",
    carryForwardChoicesCopied: "As opções são copiadas de",
    choicesLoadedFromWebText: "As opções são carregadas a partir de um serviço Web.",
    choicesLoadedFromWebLinkText: "Ir para configurações",
    choicesLoadedFromWebPreviewTitle: "Pré-visualização das opções de escolha carregadas",
    htmlPlaceHolder: "O conteúdo HTML ficará aqui.",
    panelPlaceHolder: "Arraste uma questão da caixa de ferramentas aqui.",
    surveyPlaceHolder: "O questionário está vazio. Arraste um elemento da caixa de ferramentas ou clique no botão abaixo.",
    pagePlaceHolder: "A página está vazia. Arraste um elemento da caixa de ferramentas ou clique no botão abaixo.",
    imagePlaceHolder: "Arraste e solte uma imagem aqui ou clique no botão abaixo e escolha uma imagem para carregar",
    surveyPlaceHolderMobile: "Clique no botão \"Adicionar pergunta\" abaixo para começar a criar seu formulário.",
    surveyPlaceholderTitle: "Seu formulário está vazio",
    surveyPlaceholderTitleMobile: "Seu formulário está vazio",
    surveyPlaceholderDescription: "Arraste um elemento da caixa de ferramentas ou clique no botão abaixo.",
    surveyPlaceholderDescriptionMobile: "Arraste um elemento da caixa de ferramentas ou clique no botão abaixo.",
    previewPlaceholderTitle: "Sem visualização",
    previewPlaceholderTitleMobile: "Sem visualização",
    previewPlaceholderDescription: "A pesquisa não contém nenhum elemento visível.",
    previewPlaceholderDescriptionMobile: "A pesquisa não contém nenhum elemento visível.",
    translationsPlaceholderTitle: "Sem strings para traduzir",
    translationsPlaceholderTitleMobile: "Sem strings para traduzir",
    translationsPlaceholderDescription: "Adicione elementos ao seu formulário ou altere o filtro de strings na barra de ferramentas.",
    translationsPlaceholderDescriptionMobile: "Adicione elementos ao seu formulário ou altere o filtro de strings na barra de ferramentas.",
    pagePlaceHolderMobile: "Clique no botão \"Adicionar pergunta\" abaixo para adicionar um novo elemento à página.",
    panelPlaceHolderMobile: "Clique no botão \"Adicionar pergunta\" abaixo para adicionar um novo elemento ao painel.",
    imagePlaceHolderMobile: "Clique no botão abaixo e escolha uma imagem para carregar",
    imageChooseImage: "Escolha a imagem",
    addNewTypeQuestion: "Adicionar {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Item ",
    selectFile: "Selecione um arquivo",
    removeFile: "Remover o arquivo",
    lg: {
      addNewItem: "Adicionar nova regra",
      empty_tab: "Crie uma regra para personalizar o fluxo do questionário.",
      logicPlaceholderTitle: "Sem regras lógicas",
      logicPlaceholderTitleMobile: "Sem regras lógicas",
      logicPlaceholderDescription: "Crie uma regra para personalizar o fluxo da pesquisa.",
      logicPlaceholderDescriptionMobile: "Crie uma regra para personalizar o fluxo da pesquisa.",
      page_visibilityName: "Mostrar (esconder) página",
      page_enableName: "Ativar (desativar) página",
      page_requireName: "Tornar a página obrigatória",
      panel_visibilityName: "Mostrar (esconder) painel",
      panel_enableName: "Ativar (desativar) painel",
      panel_requireName: "Tornar a página obrigatória",
      question_visibilityName: "Mostrar (esconder) questão",
      question_enableName: "Ativar (desativar) questão",
      question_requireName: "Tornar a pergunta obrigatória",
      question_resetValueName: "Redefinir o valor da pergunta",
      question_setValueName: "Definir o valor da pergunta",
      column_visibilityName: "Mostrar (esconder) coluna",
      column_enableName: "Ativar (desativar) coluna",
      column_requireName: "Tornar a coluna obrigatória",
      column_resetValueName: "Redefinir o valor da coluna",
      column_setValueName: "Definir valor de coluna",
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
      question_resetValueText: "redefinir valor da pergunta: {0}", //{0} question name.
      question_setValueText: "atribuir valor: {1} à pergunta: {0}",
      column_visibilityText: "tornar coluna {0} da questão {1} visível", //{0} column name, {1} question name
      column_enableText: "tornar coluna {0} da questão {1} ativa", //{0} column name, {1} question name
      column_requireText: "torna coluna {0} da questão {1} obrigatória", //{0} column name, {1} question name
      column_resetValueText: "Redefinir o valor da célula para a coluna: {0}", //{0} column name
      column_setValueText: "Atribuir valor de célula: {1} à coluna: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Uma expressão cujo resultado será atribuído à pergunta de destino.",
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
      uncompletedRule_cancel: "Não, quero completar as regras"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Nome do painel",
      title: "Título do painel",
      description: "Descrição do painel",
      visibleIf: "Tornar o painel visível se",
      requiredIf: "Tornar o painel obrigatório se",
      questionOrder: "Ordem das perguntas no painel",
      page: "Página principal",
      startWithNewLine: "Exibir o painel em uma nova linha",
      state: "Estado de recolhimento do painel",
      width: "Largura do painel embutido",
      minWidth: "Largura mínima do painel",
      maxWidth: "Largura máxima do painel",
      showNumber: "Numerar este painel"
    },
    panellayoutcolumn: {
      effectiveWidth: "Largura efetiva, %",
      questionTitleWidth: "Largura do título da pergunta, px"
    },
    paneldynamic: {
      name: "Nome do painel",
      title: "Título do painel",
      description: "Descrição do painel",
      visibleIf: "Tornar o painel visível se",
      requiredIf: "Tornar o painel obrigatório se",
      page: "Mover o painel para a página",
      startWithNewLine: "Exibir o painel em uma nova linha",
      state: "Estado de recolhimento do painel",
      width: "Largura do painel embutido",
      minWidth: "Largura mínima do painel",
      maxWidth: "Largura máxima do painel",
      confirmDelete: "Confirme a eliminação do painel",
      templateDescription: "Padrão de descrição do painel",
      templateTitle: "Padrão de título do painel",
      noEntriesText: "Texto vazio do painel",
      templateTabTitle: "Padrão de título de guia",
      tabTitlePlaceholder: "Espaço reservado para título da guia",
      templateVisibleIf: "Tornar um painel individual visível se",
      showNumber: "Numerar o painel",
      titleLocation: "Alinhamento do título do painel",
      descriptionLocation: "Alinhamento da descrição do painel",
      templateQuestionTitleLocation: "Alinhamento do título da pergunta",
      templateQuestionTitleWidth: "Largura do título da pergunta",
      templateErrorLocation: "Alinhamento da mensagem de erro",
      newPanelPosition: "Nova localização do painel",
      showRangeInProgress: "Mostrar a barra de progresso",
      keyName: "Evite respostas duplicadas na seguinte pergunta"
    },
    question: {
      name: "Nome da pergunta",
      title: "Título da pergunta",
      description: "Descrição da pergunta",
      visibleIf: "Torne a pergunta visível se",
      requiredIf: "Faça a pergunta obrigatória se",
      page: "Página principal",
      state: "Estado de recolhimento da caixa de pergunta",
      showNumber: "Numere esta pergunta",
      titleLocation: "Alinhamento do título da pergunta",
      descriptionLocation: "Alinhamento da descrição da pergunta",
      errorLocation: "Alinhamento da mensagem de erro",
      indent: "Aumentar o recuo interno",
      width: "Largura da pergunta embutida",
      minWidth: "Largura mínima da pergunta",
      maxWidth: "Largura máxima da pergunta",
      textUpdateMode: "Atualizar valor do campo de entrada"
    },
    signaturepad: {
      signatureWidth: "Largura da área de assinatura",
      signatureHeight: "Altura da área de assinatura",
      signatureAutoScaleEnabled: "Dimensionar automaticamente a área de assinatura",
      showPlaceholder: "Mostrar o espaço reservado",
      placeholder: "Texto de espaço reservado",
      placeholderReadOnly: "Texto de espaço reservado no modo somente leitura ou de visualização",
      allowClear: "Mostrar o botão Limpar na área de assinatura",
      penMinWidth: "Largura mínima da caneta",
      penMaxWidth: "Largura máxima da caneta",
      penColor: "Cor do traçado"
    },
    comment: {
      rows: "Altura do campo de entrada (em linhas)"
    },
    showQuestionNumbers: "Mostrar número das perguntas",
    questionStartIndex: "Index das perguntas (1, 2 or 'A', 'a')",
    expression: {
      name: "Nome da expressão",
      title: "Título da expressão",
      description: "Descrição da expressão",
      expression: "Expressão"
    },
    trigger: {
      expression: "Expressão"
    },
    calculatedvalue: {
      expression: "Expressão"
    },
    // survey templates
    survey: {
      title: "Título",
      description: "Descrição da pesquisa",
      readOnly: "Tornar a pesquisa somente leitura"
    },
    page: {
      name: "Nome da página",
      title: "Título",
      description: "Descrição da página",
      visibleIf: "Tornar a página visível se",
      requiredIf: "Tornar a página obrigatória se",
      timeLimit: "Tempo limite para finalizar esta página (em segundos)",
      questionOrder: "Ordem das perguntas na página"
    },
    matrixdropdowncolumn: {
      name: "Nome da coluna",
      title: "Título da coluna",
      isUnique: "Impedir respostas duplicadas",
      width: "Largura da coluna",
      minWidth: "Largura mínima da coluna",
      rows: "Altura do campo de entrada (em linhas)",
      visibleIf: "Tornar a coluna visível se",
      requiredIf: "Tornar a coluna obrigatória se",
      showInMultipleColumns: "Cada opção em uma coluna separada"
    },
    multipletextitem: {
      name: "Nome",
      title: "Título"
    },
    masksettings: {
      saveMaskedValue: "Salvar valor mascarado nos resultados da pesquisa"
    },
    patternmask: {
      pattern: "Padrão de valor"
    },
    datetimemask: {
      min: "Valor mínimo",
      max: "Valor máximo"
    },
    numericmask: {
      allowNegativeValues: "Permitir valores negativos",
      thousandsSeparator: "Separador de milhares",
      decimalSeparator: "Separador decimal",
      precision: "Precisão de valor",
      min: "Valor mínimo",
      max: "Valor máximo"
    },
    currencymask: {
      prefix: "Prefixo da moeda",
      suffix: "Sufixo de moeda"
    },
    imageHeight: "Altura da imagem",
    imageWidth: "Largura da imagem",
    valueName: "Nome do valor",
    defaultDisplayValue: "Valor de exibição padrão para textos dinâmicos",
    rateDescriptionLocation: "Alinhamento de rótulos",
    size: "Tamanho de entrada (em caracteres)",
    cellErrorLocation: "Alinhamento da mensagem de erro da célula",
    enabled: "Habilitado",
    disabled: "Desactivado",
    inherit: "Herdar",
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
    fastEntryChoicesMinCountError: "Por favor, insira pelo menos {0} itens",
    fastEntryPlaceholder: "Pode definir dados no seguinte formato:\nvalor1|texto\nvalor2",
    formEntry: "Entrada com formulário",
    testService: "Testar o serviço",
    itemSelectorEmpty: "Selecione o elemento",
    conditionActionEmpty: "Selecione a ação",
    conditionSelectQuestion: "Selecionar pergunta...",
    conditionSelectPage: "Selecione a página...",
    conditionSelectPanel: "Selecione o painel...",
    conditionValueQuestionTitle: "Por favor, entre/selecione o valor",
    aceEditorHelp: "Pressione ctrl+space para autocompletar",
    aceEditorRowTitle: "Linha atual",
    aceEditorPanelTitle: "Painel atual",
    showMore: "Para mais detalhes, por favor visite a documentação",
    assistantTitle: "Perguntas disponíveis:",
    cellsEmptyRowsColumns: "Deve haver ao menos uma coluna ou linha",
    showPreviewBeforeComplete: "Visualize as respostas antes de submeter o questionário",
    overridingPropertyPrefix: "Definido por ",
    resetToDefaultCaption: "Repor",
    propertyIsEmpty: "Por favor informe um valor na propriedade",
    propertyIsNoUnique: "Insira um valor exclusivo.",
    propertyNameIsNotUnique: "Insira um nome único",
    propertyNameIsIncorrect: "Não use palavras reservadas: \"item\", \"escolha\", \"painel\", \"linha\".",
    listIsEmpty: "Nenhum item foi adicionado ainda",
    "listIsEmpty@choices": "Nenhuma opção foi adicionada ainda",
    "listIsEmpty@columns": "Você ainda não tem nenhuma coluna",
    "listIsEmpty@gridLayoutColumns": "Você ainda não tem colunas de layout",
    "listIsEmpty@rows": "Você ainda não tem nenhuma linha",
    "listIsEmpty@validators": "Você ainda não tem nenhuma regra de validação",
    "listIsEmpty@calculatedValues": "Você ainda não tem nenhuma variável personalizada",
    "listIsEmpty@triggers": "Você ainda não tem nenhum gatilho",
    "listIsEmpty@navigateToUrlOnCondition": "Você ainda não tem nenhum link",
    "listIsEmpty@pages": "Você ainda não tem páginas",
    "addNew@choices": "Adicionar uma opção",
    "addNew@columns": "Adicionar nova coluna",
    "addNew@rows": "Adicionar nova linha",
    "addNew@validators": "Adicionar nova regra",
    "addNew@calculatedValues": "Adicionar nova variável",
    "addNew@triggers": "Adicionar novo gatilho",
    "addNew@navigateToUrlOnCondition": "Adicionar novo URL",
    "addNew@pages": "Adicionar nova página",
    expressionIsEmpty: "Expressão está vazia",
    value: "Valor",
    text: "Texto",
    rowid: "ID da Linha",
    imageLink: "Link da Imagem",
    columnEdit: "Editar coluna: {0}",
    itemEdit: "Editar item: {0}",
    url: "URL",
    path: "Caminho",
    choicesbyurl: {
      url: "URL do serviço Web",
      valueName: "Obtenha valores do seguinte campo JSON"
    },
    titleName: "Nome do título",
    imageLinkName: "Obtenha URLs de imagem do seguinte campo JSON",
    allowEmptyResponse: "Permitir resposta vazia",
    titlePlaceholder: "Título",
    surveyTitlePlaceholder: "Título do Questionário",
    pageTitlePlaceholder: "Página {num}",
    startPageTitlePlaceholder: "Página inicial",
    descriptionPlaceholder: "Descrição",
    surveyDescriptionPlaceholder: "Descrição",
    pageDescriptionPlaceholder: "Descrição",
    textWrapEnabled: "Opções de encapsulamento",
    showOtherItem: "Tem item 'outros'",
    otherText: "Texto do item 'outros'",
    showNoneItem: "Permitir a opção Nenhum",
    showRefuseItem: "Permitir a opção Recusar resposta",
    showDontKnowItem: "Permitir a opção Não Sei",
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
    allowCustomChoices: "Permitir escolhas personalizadas",
    visible: "É visível?",
    isRequired: "É obrigatório?",
    markRequired: "Marcar conforme necessário",
    removeRequiredMark: "Remover a marca necessária",
    eachRowRequired: "Exigir resposta para todas as linhas",
    eachRowUnique: "Impedir respostas duplicadas em linhas",
    requiredErrorText: "\"Obrigatório\" mensagem de erro",
    startWithNewLine: "Começa com uma nova linha?",
    rows: "Contagem de linhas",
    cols: "Colunas",
    placeholder: "Texto de referência",
    showPreview: "Mostra pré-visualização de imagem?",
    storeDataAsText: "Gravar conteúdo de arquivo no resultado JSON como texto",
    maxSize: "Tamanho máximo de arquivo em bytes",
    rowCount: "Contagem de linhas",
    columnLayout: "Layout das colunas",
    addRowButtonLocation: "Localização do botão de adicionar linha",
    transposeData: "Transpor linhas para colunas",
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
    clearInvisibleValues: "Limpar valores invisíveis",
    cookieName: "Nome do cookie (para desativar rode a pesquisa duas vezes localmente)",
    partialSendEnabled: "Enviar resultado da pesquisa na página seguinte",
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
    navigationButtonsLocation: "Alinhamento dos botões de navegação",
    showPrevButton: "Mostrar botão de voltar (usuário pode retornar para página anterior)",
    firstPageIsStartPage: "Primeira página da pesquisa é a página de início.",
    showCompletePage: "Mostrar a página de conclusão no final (completedHtml)",
    autoAdvanceEnabled: "Ao responder todas as perguntas, ir automaticamente para a próxima página",
    autoAdvanceAllowComplete: "Preencha o questionário automaticamente",
    showProgressBar: "Mostrar barra de progresso",
    progressBarLocation: "Alinhamento da barra de progresso",
    questionTitleLocation: "Localização do título da pergunta",
    questionTitleWidth: "Largura do título da pergunta",
    requiredMark: "Símbolo(s) para perguntas obrigatórias",
    questionTitleTemplate: "Template do título da pergunta, default é: '{no}. {obrigatório} {título}'",
    questionErrorLocation: "Localização do erro da pergunta",
    autoFocusFirstQuestion: "Focar automaticamente na primeira pergunta ao trocar de página",
    questionOrder: "Ordenar elementos na página",
    timeLimit: "Tempo máximo para finalizar pesquisa",
    timeLimitPerPage: "Tempo máximo para finalizar página da pesquisa",
    showTimer: "Use um cronômetro",
    timerLocation: "Mostrar o painel de cronômetro",
    timerInfoMode: "Mostrar painel de modo de cronômetro",
    renderMode: "Modo de renderização",
    allowAddPanel: "Permitir adicionar painel",
    allowRemovePanel: "Permitir remover painel",
    addPanelText: "Texto de adicionar painel",
    removePanelText: "Texto de remover painel",
    isSinglePage: "Mostrar todos elementos em uma página",
    html: "HTML markup",
    setValue: "Responder",
    dataFormat: "Formato de imagem",
    allowAddRows: "Permitir adicionar linhas",
    allowRemoveRows: "Permitir remover linhas",
    allowRowReorder: "Permitir arrastar e soltar linha",
    responsiveImageSizeHelp: "Não se aplica se especificar a largura ou altura exata da imagem.",
    minImageWidth: "Largura mínima da imagem",
    maxImageWidth: "Largura máxima da imagem",
    minImageHeight: "Altura mínima da imagem",
    maxImageHeight: "Altura máxima da imagem",
    minValue: "Valor mínimo",
    maxValue: "Valor máximo.",
    caseInsensitive: "Diferencia maiúsculas de minúsculas",
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
    maxCommentLength: "Tamanho máximo do comentário (em caracteres)",
    commentAreaRows: "Altura da área de comentário (em linhas)",
    autoGrowComment: "Expanda automaticamente a área de comentários, se necessário",
    allowResizeComment: "Permitir que os usuários redimensionem áreas de texto",
    textUpdateMode: "Atualizar valor da pergunta de texto",
    maskType: "Tipo de máscara de entrada",
    autoFocusFirstError: "Defina o foco na primeira resposta inválida",
    checkErrorsMode: "Executar validação",
    validateVisitedEmptyFields: "Validar campos vazios em caso de perda de foco",
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
    searchMode: "Modo de pesquisa",
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
    panelCount: "Contagem inicial do painel",
    minPanelCount: "Contagem mínima de painéis",
    maxPanelCount: "Contagem máxima de painéis",
    panelsState: "Estado de expansão do painel interno",
    prevPanelText: "Dica de ferramenta do botão do painel anterior",
    nextPanelText: "Dica de ferramenta do botão do painel seguinte",
    removePanelButtonLocation: "Remover localização do botão do painel",
    hideIfRowsEmpty: "Oculte a pergunta se não houver linhas",
    hideColumnsIfEmpty: "Ocultar colunas se não houver linhas",
    rateValues: "Valores de taxa personalizados",
    rateCount: "Contagem de taxas",
    autoGenerate: "Como especificar valores de taxa?",
    hideIfChoicesEmpty: "Oculte a pergunta se ela não contiver opções",
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
    logoWidth: "Largura do logotipo (em valores aceitos pelo CSS)",
    logoHeight: "Altura do logotipo (em valores aceitos pelo CSS)",
    readOnly: "Apenas para leitura",
    enableIf: "Editável se",
    noRowsText: "\"Sem linhas\" mensagem",
    separateSpecialChoices: "Escolhas especiais separadas (Nenhuma, Outra, Selecionar Tudo)",
    choicesFromQuestion: "Copie as opções da seguinte pergunta",
    choicesFromQuestionMode: "Quais as opções pretendem copiar?",
    choiceValuesFromQuestion: "Use valores da seguinte coluna de matriz ou pergunta de painel como IDs de escolha",
    choiceTextsFromQuestion: "Use valores da seguinte coluna de matriz ou pergunta de painel como textos de escolha",
    progressBarShowPageTitles: "Exibir títulos de página na barra de progresso",
    progressBarShowPageNumbers: "Exibir números de página na barra de progresso",
    showCommentArea: "Mostrar a área de comentários",
    commentPlaceholder: "Espaço reservado para área de comentários",
    displayRateDescriptionsAsExtremeItems: "Exibir descrições de taxa como valores extremos",
    rowOrder: "Ordem das linhas",
    columnsLayout: "Disposição da coluna",
    columnColCount: "Contagem de colunas aninhadas",
    correctAnswer: "Resposta correta",
    defaultPanelValue: "Valores pré-definidos",
    cells: "Textos de Célula",
    fileInputPlaceholder: "Selecione um arquivo ou cole um link de arquivo...",
    keyName: "Coluna chave",
    itemvalue: {
      visibleIf: "Torne a opção visível se",
      enableIf: "Torne a opção selecionável se"
    },
    "itemvalue@rows": {
      visibleIf: "Tornar a linha visível se",
      enableIf: "Tornar a linha editável se"
    },
    imageitemvalue: {
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
    previewMode: "Modo de visualização",
    gridLayoutEnabled: "Ativar o layout da grade",
    gridLayoutColumns: "Colunas de layout de grade",
    maskSettings: "Configurações de máscara",
    detailErrorLocation: "Alinhamento da mensagem de erro de expansão de linha",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Layout do painel"
      },
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
      mask: "Configurações da máscara de entrada",
      layout: {
        panel: "Layout",
        question: "Layout",
        base: "Layout"
      },
      data: "Data",
      validation: "Validação",
      cells: "Texto de Células",
      showOnCompleted: "Questionário Completo",
      logo: "Logo no Título de Questionário",
      slider: "Slider",
      expression: "Expressão",
      questionSettings: "Configurações da pergunta",
      header: "Cabeçalho",
      background: "Fundo",
      appearance: "Aparência",
      accentColors: "Cores de destaque",
      surfaceBackground: "Fundo da superfície",
      scaling: "Escala",
      others: "Outros"
    },
    editProperty: "Editar propriedade '{0}'",
    items: "Itens",
    choicesVisibleIf: "Escolhas estão visiveis se",
    choicesEnableIf: "Escolhas são selecionáveis se",
    columnsEnableIf: "Colunas estão visiveis se",
    rowsEnableIf: "Linhas estão visiveis se",
    innerIndent: "Adicionar recuos internos",
    copyDefaultValueFromLastEntry: "Usar respostas da última entrada como padrão",
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
    verticalAlign: "Alinhamento vertical",
    alternateRows: "Linhas alternativas",
    columnsVisibleIf: "Colunas estão visíveis se",
    rowsVisibleIf: "As linhas são visíveis se",
    otherPlaceholder: "Espaço reservado para área de comentários",
    filePlaceholder: "Texto do espaço reservado para arquivo",
    photoPlaceholder: "Texto do espaço reservado para foto",
    fileOrPhotoPlaceholder: "Texto de espaço reservado para arquivo ou foto",
    rateType: "Tipo de tarifa",
    url_placeholder: "Ex.: https://api.example.com/books",
    path_placeholder: "Ex.: categorias.ficção",
    questionStartIndex_placeholder: "Ex.: a)",
    width_placeholder: "Ex.: 6in",
    minWidth_placeholder: "Ex.: 600px",
    maxWidth_placeholder: "Ex.: 50%",
    imageHeight_placeholder: "auto",
    imageWidth_placeholder: "auto",
    itemTitleWidth_placeholder: "Ex.: 100px",
    theme: {
      themeName: "Tema",
      isPanelless: "Aparência da pergunta",
      editorPanel: "Fundo e raio de canto",
      questionPanel: "Fundo e raio de canto",
      primaryColor: "Cor de destaque",
      panelBackgroundTransparency: "Opacidade do plano de fundo do painel",
      questionBackgroundTransparency: "Opacidade de fundo da pergunta",
      fontSize: "Tamanho da fonte",
      scale: "Escala",
      cornerRadius: "Raio de canto",
      advancedMode: "Modo avançado",
      pageTitle: "Fonte do título",
      pageDescription: "Fonte de descrição",
      questionTitle: "Fonte do título",
      questionDescription: "Fonte de descrição",
      editorFont: "Fonte",
      backgroundOpacity: "Opacidade",
      "--sjs-font-family": "Família de fontes",
      "--sjs-general-backcolor-dim": "Cor de fundo",
      "--sjs-primary-backcolor": "Fundo de destaque",
      "--sjs-primary-forecolor": "Destaque em primeiro plano",
      "--sjs-special-red": "Mensagens de erro",
      "--sjs-shadow-small": "Efeitos de sombra",
      "--sjs-shadow-inner": "Efeitos de sombra",
      "--sjs-border-default": "Cores"
    },
    "header@header": {
      headerView: "Vista",
      logoPosition: "Posição do logotipo",
      surveyTitle: "Fonte do título do questionário",
      surveyDescription: "Fonte da descrição da pesquisa",
      headerTitle: "Fonte do título do questionário",
      headerDescription: "Fonte da descrição da pesquisa",
      inheritWidthFrom: "Largura da área de conteúdo",
      textAreaWidth: "Largura do texto",
      backgroundColorSwitch: "Cor de fundo",
      backgroundImage: "Imagem de fundo",
      backgroundImageOpacity: "Opacidade",
      overlapEnabled: "Sobrepor",
      logoPositionX: "Posição do logotipo",
      titlePositionX: "Posição do título",
      descriptionPositionX: "Descrição da posição"
    }
  },
  // Property values
  pv: {
    "true": "verdadeiro",
    "false": "falso",
    file: "Arquivos locais",
    camera: "Câmera",
    "file-camera": "Arquivos locais ou câmera",
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
    selected: "Selecionado",
    unselected: "Desmarcado",
    decimal: "decimal",
    currency: "moeda",
    percent: "percentagem",
    firstExpanded: "primeiro expandido",
    off: "desligado",
    list: "lista",
    carousel: "Carrossel",
    tab: "Guias",
    progressTop: "progresso superior",
    progressBottom: "progresso inferior",
    progressTopBottom: "progresso superior inferior",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "superior",
    bottom: "inferior",
    topBottom: "superior and bottom",
    both: "Ambos",
    left: "esquerda",
    right: "direita",
    center: "Centro",
    leftRight: "Esquerda e direita",
    middle: "Meio",
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
    edit: "editar",
    display: "mostrar",
    contain: "Conter",
    cover: "Cobrir",
    fill: "Encher",
    next: "Próximo",
    last: "Último",
    onComplete: "ao completar",
    onHidden: "ao ocultar",
    onHiddenContainer: "Quando a pergunta ou seu painel/página fica oculto",
    clearInvisibleValues: {
      none: "Nunca"
    },
    clearIfInvisible: {
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
    autocomplete: {
      name: "Nome completo",
      "honorific-prefix": "Prefixo",
      "given-name": "Nome próprio",
      "additional-name": "Nome do meio",
      "family-name": "Apelido",
      "honorific-suffix": "Sufixo",
      nickname: "Apelido",
      "organization-title": "Cargo",
      username: "Nome de usuário",
      "new-password": "Nova senha",
      "current-password": "Senha atual",
      organization: "Nome da organização",
      "street-address": "Endereço completo",
      "address-line1": "Linha de endereço 1",
      "address-line2": "Linha de endereço 2",
      "address-line3": "Linha de endereço 3",
      "address-level4": "Endereço de nível 4",
      "address-level3": "Endereço de Nível 3",
      "address-level2": "Endereço de Nível 2",
      "address-level1": "Endereço de Nível 1",
      country: "Código do país",
      "country-name": "Nome do país",
      "postal-code": "Código postal",
      "cc-name": "Nome do titular do cartão",
      "cc-given-name": "Nome do titular do cartão",
      "cc-additional-name": "Nome do meio do titular do cartão",
      "cc-family-name": "Sobrenome do titular do cartão",
      "cc-number": "Número do cartão de crédito",
      "cc-exp": "Data de validade",
      "cc-exp-month": "Mês de Expiração",
      "cc-exp-year": "Ano de validade",
      "cc-csc": "Código de segurança do cartão",
      "cc-type": "Tipo de cartão de crédito",
      "transaction-currency": "Moeda da transação",
      "transaction-amount": "Valor da transação",
      language: "Idioma preferido",
      bday: "Aniversário",
      "bday-day": "Dia de aniversário",
      "bday-month": "Mês de aniversário",
      "bday-year": "Ano de aniversário",
      sex: "Gênero",
      url: "URL do site",
      photo: "Foto do perfil",
      tel: "Número telefônico",
      "tel-country-code": "Código do país para telefone",
      "tel-national": "Número de telefone nacional",
      "tel-area-code": "Código de área",
      "tel-local": "Número de telefone local",
      "tel-local-prefix": "Prefixo de telefone local",
      "tel-local-suffix": "Sufixo de telefone local",
      "tel-extension": "Ramal telefônico",
      email: "Endereço eletrônico",
      impp: "Protocolo de mensagens instantâneas"
    },
    maskType: {
      none: "Nenhum",
      pattern: "Padrão",
      numeric: "Numérico",
      datetime: "Data e hora",
      currency: "Moeda"
    },
    inputTextAlignment: {
      auto: "Automático",
      left: "Esquerda",
      right: "Certo"
    },
    all: "todos",
    page: "página",
    survey: "pesquisa",
    onNextPage: "na página seguinte",
    onValueChanged: "ao mudar valor",
    onValueChanging: "Antes de uma resposta ser alterada",
    questionsOnPageMode: {
      standard: "Estrutura original",
      singlePage: "Mostrar todas as perguntas em uma página",
      questionPerPage: "Mostrar uma única pergunta por página"
    },
    noPreview: "Sem pré-visualização",
    showAllQuestions: "Mostrar todas as questões",
    showAnsweredQuestions: "Mostrar apenas perguntas respondidas",
    allQuestions: "Mostrar todas as perguntas",
    answeredQuestions: "Mostrar apenas perguntas respondidas",
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
    auto: "Automático",
    showNavigationButtons: {
      none: "Escondido"
    },
    timerInfoMode: {
      combined: "Ambos"
    },
    addRowButtonLocation: {
      default: "Depende do layout da matriz"
    },
    panelsState: {
      default: "Os utilizadores não podem expandir ou recolher painéis",
      collapsed: "Todos os painéis estão recolhidos",
      expanded: "Todos os painéis estão espandidos",
      firstExpanded: "Primeiro expandido"
    },
    widthMode: {
      static: "Estático",
      responsive: "Responsivo"
    },
    contentMode: {
      image: "Imagem",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Botões",
      dropdown: "Suspenso"
    },
    rateColorMode: {
      default: "Inadimplência",
      scale: "Escala"
    },
    scaleColorMode: {
      monochrome: "Monocromático",
      colored: "Colorido"
    },
    autoGenerate: {
      "true": "Gerar",
      "false": "Digite manualmente"
    },
    rateType: {
      labels: "Rótulos",
      stars: "Estrelas",
      smileys: "Smileys"
    },
    state: {
      default: "Trancado"
    },
    showQuestionNumbers: {
      default: "Numeração automática",
      on: "Numeração automática",
      onPage: "Redefinir em cada página",
      onpanel: "Redefinir em cada painel",
      onPanel: "Redefinir em cada painel",
      recursive: "Numeração recursiva",
      onSurvey: "Continue na pesquisa",
      off: "Sem numeração"
    },
    descriptionLocation: {
      underTitle: "Sob o título da pergunta",
      underInput: "No campo de entrada"
    },
    selectToRankAreasLayout: {
      horizontal: "Ao lado das opções",
      vertical: "Acima das escolhas"
    },
    displayStyle: {
      decimal: "Decimal",
      currency: "Moeda",
      percent: "Porcentagem",
      date: "Data"
    },
    totalDisplayStyle: {
      decimal: "Decimal",
      currency: "Moeda",
      percent: "Porcentagem",
      date: "Data"
    },
    rowOrder: {
      initial: "Original"
    },
    questionOrder: {
      initial: "Original"
    },
    progressBarLocation: {
      top: "Início",
      bottom: "Fundo",
      topbottom: "Superior e inferior",
      aboveheader: "Acima do cabeçalho",
      belowheader: "Abaixo do cabeçalho",
      off: "Escondido"
    },
    sum: "Soma",
    count: "Contar",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Contém",
      startsWith: "Começa com"
    },
    backgroundImageFit: {
      auto: "Automático",
      cover: "Cobrir",
      contain: "Conter",
      fill: "Esticar",
      tile: "Telha"
    },
    backgroundImageAttachment: {
      fixed: "Fixo",
      scroll: "Rolar"
    },
    headerView: {
      basic: "Básico",
      advanced: "Avançado"
    },
    inheritWidthFrom: {
      survey: "O mesmo que pesquisa",
      container: "Ajuste ao contêiner"
    },
    backgroundColorSwitch: {
      none: "Nenhum",
      accentColor: "Cor de destaque",
      custom: "Costume"
    },
    colorPalette: {
      light: "Luz",
      dark: "Escuro"
    },
    isPanelless: {
      "false": "Inadimplência",
      "true": "Sem Painéis"
    },
    progressBarInheritWidthFrom: {
      survey: "O mesmo que pesquisa",
      container: "Igual ao contêiner"
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
  peplaceholder: {
    patternmask: {
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Ex.: dd/mm/aaaa"
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
      name: "Um ID de painel que não está visível para os respondentes.",
      description: "Digite uma legenda do painel.",
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determine a visibilidade do painel.",
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilite o modo somente leitura para o painel.",
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta.",
      questionTitleLocation: "Aplica-se a todas as perguntas deste painel. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas individuais. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão).",
      questionTitleWidth: "Define largura consistente para títulos de perguntas quando eles estão alinhados à esquerda de suas caixas de perguntas. Aceita valores CSS (px, %, in, pt, etc.).",
      questionErrorLocation: "Define o local de uma mensagem de erro em relação a todas as perguntas no painel. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa.",
      questionOrder: "Mantém a ordem original das perguntas ou as randomiza. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa.",
      page: "Reposiciona o painel no final de uma página selecionada.",
      innerIndent: "Adiciona espaço ou margem entre o conteúdo do painel e a borda esquerda da caixa do painel.",
      startWithNewLine: "Desmarque para exibir o painel em uma linha com a pergunta ou painel anterior. A configuração não se aplica se o painel for o primeiro elemento do formulário.",
      state: "Escolha entre: \"Expandido\" - o painel é exibido na íntegra e pode ser recolhido; \"Recolhido\" - o painel exibe apenas o título e a descrição e pode ser expandido; \"Bloqueado\" - o painel é exibido na íntegra e não pode ser recolhido.",
      width: "Define a largura do painel proporcionalmente a outros elementos de pesquisa na mesma linha. Aceita valores CSS (px, %, in, pt, etc.).",
      showQuestionNumbers: "Atribui números a perguntas aninhadas neste painel.",
      effectiveColSpan: "Especifica quantas colunas esse painel abrange dentro do layout da grade.",
      gridLayoutColumns: "Esta tabela permite configurar cada coluna de grade dentro do painel. Ele define automaticamente a porcentagem de largura para cada coluna com base no número máximo de elementos em uma linha. Para personalizar o layout da grade, ajuste manualmente esses valores e defina a largura do título para todas as perguntas em cada coluna."
    },
    paneldynamic: {
      name: "Um ID de painel que não está visível para os respondentes.",
      description: "Digite uma legenda do painel.",
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determine a visibilidade do painel.",
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilite o modo somente leitura para o painel.",
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta.",
      templateQuestionTitleLocation: "Aplica-se a todas as perguntas deste painel. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas individuais. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão).",
      templateQuestionTitleWidth: "Define a largura consistente para os títulos das perguntas quando elas estão alinhadas à esquerda de suas caixas de perguntas. Aceita valores CSS (px, %, in, pt, etc.).",
      templateErrorLocation: "Define o local de uma mensagem de erro em relação a uma pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão).",
      errorLocation: "Define o local de uma mensagem de erro em relação a todas as perguntas no painel. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa.",
      page: "Reposiciona o painel no final de uma página selecionada.",
      innerIndent: "Adiciona espaço ou margem entre o conteúdo do painel e a borda esquerda da caixa do painel.",
      startWithNewLine: "Desmarque para exibir o painel em uma linha com a pergunta ou painel anterior. A configuração não se aplica se o painel for o primeiro elemento do formulário.",
      state: "Escolha entre: \"Expandido\" - o painel é exibido na íntegra e pode ser recolhido; \"Recolhido\" - o painel exibe apenas o título e a descrição e pode ser expandido; \"Bloqueado\" - o painel é exibido na íntegra e não pode ser recolhido.",
      width: "Define a largura do painel proporcionalmente a outros elementos de pesquisa na mesma linha. Aceita valores CSS (px, %, in, pt, etc.).",
      templateTitle: "Digite um modelo para títulos de painel dinâmico. Use {panelIndex} para a posição geral do painel e {visiblePanelIndex} para sua ordem entre os painéis visíveis. Insira esses espaços reservados no padrão para adicionar numeração automática.",
      templateTabTitle: "Digite um modelo para títulos de guias. Use {panelIndex} para a posição geral de um painel e {visiblePanelIndex} para sua ordem entre os painéis visíveis. Insira esses espaços reservados no padrão para adicionar numeração automática.",
      tabTitlePlaceholder: "Um texto de fallback para títulos de guia que se aplica quando o padrão de título de guia não produz um valor significativo.",
      templateVisibleIf: "Essa configuração permite controlar a visibilidade de painéis individuais dentro do painel dinâmico. Use o espaço reservado '{panel}' para fazer referência ao painel atual em sua expressão.",
      titleLocation: "Essa configuração é herdada automaticamente por todas as perguntas dentro deste painel. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas individuais. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão).",
      descriptionLocation: "A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Sob o título do painel\" por padrão).",
      newPanelPosition: "Define a posição de um painel recém-adicionado. Por padrão, novos painéis são adicionados ao final. Selecione \"Next\" para inserir um novo painel após o atual.",
      copyDefaultValueFromLastEntry: "Duplica as respostas do último painel e as atribui ao próximo painel dinâmico adicionado.",
      keyName: "Faça referência a um nome de pergunta para exigir que um usuário forneça uma resposta exclusiva para essa pergunta em cada painel."
    },
    copyDefaultValueFromLastEntry: "Duplica as respostas da última linha e as atribui à próxima linha dinâmica adicionada.",
    defaultValueExpression: "Essa configuração permite atribuir um valor de resposta padrão com base em uma expressão. A expressão pode incluir cálculos básicos - '{q1_id} + {q2_id}', expressões booleanas, como '{age} > 60', e funções: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. O valor determinado por essa expressão serve como o valor padrão inicial que pode ser substituído pela entrada manual de um respondente.",
    resetValueIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina quando a entrada de um respondente é redefinida para o valor com base no valor \"Expressão de valor padrão\" ou \"Definir expressão de valor\" ou no valor \"Resposta padrão\" (se um dos dois estiver definido).",
    setValueIf: "Use o ícone de varinha mágica para definir uma regra condicional que determine quando executar a expressão \"Definir valor\" e atribuir dinamicamente o valor resultante como resposta.",
    setValueExpression: "Especifique uma expressão que defina o valor a ser definido quando as condições na regra \"Definir valor se\" forem atendidas. A expressão pode incluir cálculos básicos - '{q1_id} + {q2_id}', expressões booleanas, como '{age} > 60', e funções: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. O valor determinado por essa expressão pode ser substituído pela entrada manual de um respondente.",
    gridLayoutEnabled: "O Survey Creator permite ajustar manualmente as larguras embutidas dos elementos do formulário para controlar o layout. Se isso não produzir o resultado desejado, você poderá habilitar o layout da grade, que estrutura os elementos do formulário usando um sistema baseado em colunas. Para configurar colunas de layout, selecione uma página ou painel e use a tabela \"Configurações da pergunta\" → \"Colunas da grade\". Para ajustar quantas colunas uma pergunta abrange, selecione-a e defina o valor desejado no campo \"Layout\" → \"Extensão de coluna\".",
    question: {
      name: "Um ID de pergunta que não é visível para os respondentes.",
      description: "Digite um subtítulo de pergunta.",
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade da pergunta.",
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilita o modo somente leitura para a pergunta.",
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o avanço ou o envio da pesquisa, a menos que a pergunta receba uma resposta.",
      startWithNewLine: "Desmarque para exibir a pergunta em uma linha com a pergunta ou painel anterior. A configuração não se aplica se a pergunta for o primeiro elemento do formulário.",
      page: "Reposiciona a pergunta no final de uma página selecionada.",
      state: "Escolha entre: \"Expandido\" - a caixa de perguntas é exibida na íntegra e pode ser recolhida; \"Recolhido\" - a caixa de perguntas exibe apenas o título e a descrição e pode ser expandida; \"Bloqueado\" - a caixa de perguntas é exibida na íntegra e não pode ser recolhida.",
      titleLocation: "Substitui as regras de alinhamento de título definidas em um painel, página ou nível de pesquisa. A opção \"Herdar\" aplica quaisquer configurações de nível superior (se definidas) ou configurações de nível de pesquisa (\"Superior\" por padrão).",
      descriptionLocation: "A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Sob o título da pergunta\" por padrão).",
      errorLocation: "Define o local de uma mensagem de erro em relação à pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Superior\" por padrão).",
      indent: "Adiciona espaço ou margem entre o conteúdo da pergunta e a borda esquerda da caixa de perguntas.",
      width: "Define a largura da pergunta proporcionalmente a outros elementos do questionário na mesma linha. Aceita valores CSS (px, %, in, pt, etc.).",
      surveyvalidator: {
        expression: "Use o ícone de varinha mágica para definir uma regra de validação para a pergunta."
      },
      textUpdateMode: "Escolha entre: \"Em foco perdido\" - o valor é atualizado quando o campo de entrada perde o foco; \"Ao digitar\" - o valor é atualizado em tempo real, à medida que os usuários digitam. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Em foco perdido\" por padrão).",
      url: "Você pode usar qualquer serviço Web como uma fonte de dados para perguntas de múltipla escolha. Para preencher valores de escolha, insira a URL do serviço que fornece os dados.",
      searchMode: "Uma operação de comparação usada para filtrar a lista suspensa.",
      textWrapEnabled: "Textos longos nas opções de escolha gerarão automaticamente quebras de linha para caber no menu suspenso. Desmarque se quiser que os textos sejam recortados.",
      effectiveColSpan: "Especifica quantas colunas essa pergunta abrange dentro do layout da grade."
    },
    signaturepad: {
      signatureWidth: "Define a largura da área de assinatura exibida e a imagem resultante.",
      signatureHeight: "Define a altura da área de assinatura exibida e a imagem resultante.",
      signatureAutoScaleEnabled: "Selecione se deseja que a área de assinatura preencha todo o espaço disponível na caixa de pergunta, mantendo a proporção padrão de 3:2. Quando os valores personalizados de largura e altura são definidos, a configuração manterá a proporção dessas dimensões."
    },
    file: {
      imageHeight: "Ajusta a altura da imagem nos resultados da pesquisa.",
      imageWidth: "Ajusta a largura da imagem nos resultados da pesquisa.",
      allowImagesPreview: "Exibe visualizações em miniatura para arquivos carregados quando possível. Desmarque se quiser mostrar ícones de arquivo."
    },
    image: {
      contentMode: "A opção \"Auto\" determina automaticamente o modo adequado para exibição - Imagem, Vídeo ou YouTube - com base no URL de origem fornecido."
    },
    imagepicker: {
      imageHeight: "Substitui os valores de altura mínima e máxima.",
      imageWidth: "Substitui os valores de largura mínima e máxima.",
      choices: "\"Valor\" serve como um ID de item usado em regras condicionais; \"Texto\" é exibido aos respondentes.",
      contentMode: "Escolha entre \"Imagem\" e \"Vídeo\" para definir o modo de conteúdo do seletor de mídia. Se \"Imagem\" estiver selecionado, certifique-se de que todas as opções fornecidas são arquivos de imagem nos seguintes formatos: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Da mesma forma, se \"Vídeo\" estiver selecionado, certifique-se de que todas as opções sejam links diretos para arquivos de vídeo nos seguintes formatos: MP4, MOV, WMV, FLV, AVI, MKV. Observe que os links do YouTube não são compatíveis com as opções de vídeo."
    },
    text: {
      size: "Essa configuração redimensiona apenas o campo de entrada e não afeta a largura da caixa de pergunta. Para limitar o comprimento de entrada aceito, vá para <b>Validação → Limite máximo de caracteres</b>."
    },
    comment: {
      rows: "Define o número de linhas exibidas no campo de entrada. Se a entrada ocupar mais linhas, a barra de rolagem aparecerá."
    },
    // survey templates
    survey: {
      readOnly: "Selecione se deseja impedir que os respondentes preencham seu questionário.",
      progressBarLocation: "Define a localização da barra de progresso. O valor \"Auto\" exibe a barra de progresso acima ou abaixo do cabeçalho da pesquisa."
    },
    matrixdropdowncolumn: {
      name: "Um ID de coluna que não está visível para os respondentes.",
      isUnique: "Quando habilitado para uma coluna, um respondente é obrigado a fornecer uma resposta exclusiva para cada pergunta dentro desta coluna.",
      rows: "Define o número de linhas exibidas no campo de entrada. Se a entrada ocupar mais linhas, a barra de rolagem aparecerá.",
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade da coluna.",
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilita o modo somente leitura para a coluna.",
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta.",
      showInMultipleColumns: "Quando selecionada, cria uma coluna individual para cada opção de escolha.",
      colCount: "Organiza as opções de escolha em um layout de várias colunas. Quando definido como 0, as opções são exibidas em uma única linha. Quando definido como -1, o valor real é herdado da propriedade \"Contagem de colunas aninhadas\" da matriz pai."
    },
    caseInsensitive: "Selecione se letras maiúsculas e minúsculas na expressão regular devem ser tratadas como equivalentes.",
    widthMode: "Escolha entre: \"Estático\" - define uma largura fixa; \"Responsivo\" - faz com que a pesquisa ocupe toda a largura da tela; \"Auto\" - aplica-se a qualquer um dos dois, dependendo dos tipos de pergunta usados.",
    cookieName: "Os cookies impedem que os usuários preencham a mesma pesquisa duas vezes.",
    logo: "Cole um link de imagem (sem limites de tamanho) ou clique no ícone de pasta para procurar um arquivo do seu computador (até 64 KB).",
    logoWidth: "Define a largura de um logotipo em unidades CSS (px, %, in, pt, etc.).",
    logoHeight: "Define a altura do logotipo em unidades CSS (px, %, in, pt, etc.).",
    logoFit: "Escolha entre: \"Nenhum\" - a imagem mantém seu tamanho original; \"Conter\" - a imagem é redimensionada para se ajustar, mantendo sua proporção; \"Capa\" - a imagem preenche toda a caixa, mantendo sua proporção; \"Preencher\" - a imagem é esticada para preencher a caixa sem manter sua proporção.",
    autoAdvanceEnabled: "Selecione se deseja que o questionário avance automaticamente para a próxima página depois que o respondente responder a todas as perguntas na página atual. Esse recurso não se aplicará se a última pergunta da página for aberta ou permitir várias respostas.",
    autoAdvanceAllowComplete: "Selecione se você deseja que o questionário seja concluído automaticamente depois que um respondente responder a todas as perguntas.",
    showNavigationButtons: "Define a visibilidade e a localização dos botões de navegação em uma página.",
    navigationButtonsLocation: "Define a localização dos botões de navegação em uma página.",
    showPreviewBeforeComplete: "Habilite a página de visualização apenas com todas as perguntas ou com as respostas respondidas.",
    questionTitleLocation: "Aplica-se a todas as perguntas do questionário. Essa configuração pode ser substituída por regras de alinhamento de título em níveis inferiores: painel, página ou pergunta. Uma configuração de nível inferior substituirá as de nível superior.",
    requiredMark: "Um símbolo ou uma sequência de símbolos indicando que uma resposta é necessária.",
    questionStartIndex: "Introduza um número ou letra com o qual pretende iniciar a numeração.",
    questionErrorLocation: "Define o local de uma mensagem de erro em relação à pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas.",
    autoFocusFirstQuestion: "Selecione se deseja que o primeiro campo de entrada em cada página esteja pronto para entrada de texto.",
    questionOrder: "Mantém a ordem original das perguntas ou as randomiza. O efeito dessa configuração só é visível na guia Visualização.",
    maxTextLength: "Apenas para perguntas de entrada de texto.",
    maxCommentLength: "Apenas para comentários de perguntas.",
    commentAreaRows: "Define o número de linhas exibidas nas áreas de texto para comentários de perguntas. Se a entrada ocupar mais linhas, a barra de rolagem será exibida.",
    autoGrowComment: "Selecione se você deseja que os comentários de perguntas e as perguntas de texto longo aumentem automaticamente em altura com base no comprimento do texto inserido.",
    allowResizeComment: "Apenas para comentários de perguntas e perguntas de texto longo.",
    calculatedValues: "As variáveis personalizadas servem como variáveis intermediárias ou auxiliares usadas em cálculos de formulário. Eles tomam as entradas dos respondentes como valores de origem. Cada variável personalizada tem um nome exclusivo e uma expressão na qual se baseia.",
    includeIntoResult: "Selecione se deseja que o valor calculado da expressão seja salvo junto com os resultados do questionário.",
    triggers: "Um gatilho é um evento ou condição baseado em uma expressão. Uma vez que a expressão é avaliada como \"verdadeira\", um gatilho desencadeia uma ação. Tal ação pode, opcionalmente, ter uma questão-alvo que afeta.",
    clearInvisibleValues: "Escolha se deseja ou não limpar valores para perguntas ocultas pela lógica condicional e quando fazê-lo.",
    textUpdateMode: "Escolha entre: \"Em foco perdido\" - o valor é atualizado quando o campo de entrada perde o foco; \"Ao digitar\" - o valor é atualizado em tempo real, à medida que os usuários digitam.",
    columns: "O valor esquerdo serve como um ID de coluna usado em regras condicionais, o valor direito é exibido aos respondentes.",
    rows: "O valor esquerdo serve como um ID de linha usado em regras condicionais, o valor direito é exibido aos respondentes.",
    columnMinWidth: "Aceita valores CSS (px, %, in, pt, etc.).",
    rowTitleWidth: "Aceita valores CSS (px, %, in, pt, etc.).",
    totalText: "Visível apenas quando pelo menos uma coluna tiver tipo total ou expressão total.",
    cellErrorLocation: "Define o local de uma mensagem de erro em relação a uma célula com entrada inválida. A opção \"Herdar\" aplica a configuração da propriedade \"Alinhamento da mensagem de erro\".",
    detailErrorLocation: "Define o local das mensagens de erro para perguntas aninhadas em seções de detalhes. A opção \"Herdar\" aplica a configuração da propriedade \"Alinhamento da mensagem de erro\".",
    keyDuplicationError: "Quando a propriedade \"Impedir respostas duplicadas\" está habilitada, um respondente tentando enviar uma entrada duplicada receberá a seguinte mensagem de erro.",
    totalExpression: "Permite calcular valores totais com base em uma expressão. A expressão pode incluir cálculos básicos ('{q1_id} + {q2_id}'), expressões booleanas ('{age} > 60') e funções ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    confirmDelete: "Aciona um prompt pedindo para confirmar a exclusão da linha.",
    keyName: "Se a coluna especifica contiver valores idênticos, o questionário lançará o \"Valor de chave não exclusivo\" erro.",
    description: "Digite uma legenda.",
    locale: "Escolha um idioma para começar a criar seu questionário. Para adicionar uma tradução, alterne para um novo idioma e traduza o texto original aqui ou na guia Traduções.",
    detailPanelMode: "Define o local de uma seção de detalhes em relação a uma linha. Escolha entre: \"Nenhum\" - nenhuma expansão é adicionada; \"Sob a linha\" - uma expansão de linha é colocada sob cada linha da matriz; \"Sob a linha, exibir apenas uma expansão de linha\" - uma expansão é exibida em uma única linha apenas, as expansões de linha restantes são recolhidas.",
    imageFit: "Escolha entre: \"Nenhum\" - a imagem mantém seu tamanho original; \"Conter\" - a imagem é redimensionada para se ajustar, mantendo sua proporção; \"Capa\" - a imagem preenche toda a caixa, mantendo sua proporção; \"Preencher\" - a imagem é esticada para preencher a caixa sem manter sua proporção.",
    autoGrow: "Aumenta gradualmente a altura do campo de entrada à medida que os dados são inseridos. Substitui a configuração \"Altura do campo de entrada (em linhas)\".",
    allowResize: "A alça de redimensionamento (ou pega) aparece no canto e pode ser arrastada para alterar o tamanho do campo de entrada.",
    timeLimit: "Um intervalo de tempo em segundos após o qual o questionário avança automaticamente para a página Obrigado.",
    timeLimitPerPage: "Um intervalo de tempo em segundos após o qual o questionário avança automaticamente para a próxima página.",
    validateVisitedEmptyFields: "Ative essa opção para disparar a validação quando um usuário se concentrar em um campo de entrada vazio e deixá-lo sem fazer alterações.",
    page: {
      name: "Um código de página que não é visível para os respondentes.",
      description: "Digite um subtítulo de página.",
      navigationTitle: "Uma legenda exibida em um botão de navegação na barra de progresso ou sumário. Se você deixar esse campo vazio, o botão de navegação usará o título ou o nome da página. Para ativar a barra de progresso ou sumário, vá para \"Pesquisa\" → \"Navegação\".",
      timeLimit: "Um intervalo de tempo em segundos após o qual o questionário avança automaticamente para a próxima página.",
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade da página.",
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilita o modo somente leitura da página.",
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta.",
      questionTitleLocation: "Aplica-se a todas as perguntas dentro desta página. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas ou painéis individuais. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Superior\" por padrão).",
      questionTitleWidth: "Define largura consistente para títulos de perguntas quando eles estão alinhados à esquerda de suas caixas de perguntas. Aceita valores CSS (px, %, in, pt, etc.).",
      questionErrorLocation: "Define o local de uma mensagem de erro em relação à pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Superior\" por padrão).",
      questionOrder: "Mantém a ordem original das perguntas ou as randomiza. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Original\" por padrão). O efeito dessa configuração só é visível na guia Visualização.",
      showNavigationButtons: "Define a visibilidade dos botões de navegação na página. A opção \"Herdar\" aplica a configuração de nível de pesquisa, que tem como padrão \"Visível\".",
      gridLayoutColumns: "Esta tabela permite configurar cada coluna de grade na página. Ele define automaticamente a porcentagem de largura para cada coluna com base no número máximo de elementos em uma linha. Para personalizar o layout da grade, ajuste manualmente esses valores e defina a largura do título para todas as perguntas em cada coluna."
    },
    timerLocation: "Define a localização de um cronômetro em uma página.",
    panelsState: "Escolha entre: \"Bloqueado\" - os usuários não podem expandir ou recolher painéis; \"Recolher tudo\" - todos os painéis começam em estado colapsado; \"Expandir tudo\" - todos os painéis começam em um estado expandido; \"Primeiro expandido\" - apenas o primeiro painel é inicialmente expandido.",
    imageLinkName: "Insira um nome de propriedade compartilhada na matriz de objetos que contém as URLs de arquivo de imagem ou vídeo que você deseja exibir na lista de opções.",
    choices: "O valor esquerdo serve como um ID de item usado em regras condicionais, o valor direito é exibido aos respondentes.",
    title: "Digite um título amigável para exibir.",
    waitForUpload: "Garante que os usuários não concluam a pesquisa até que os arquivos sejam carregados.",
    minWidth: "Aceita valores CSS (px, %, in, pt, etc.).",
    maxWidth: "Aceita valores CSS (px, %, in, pt, etc.).",
    width: "Aceita valores CSS (px, %, in, pt, etc.).",
    valueName: "Se você não definir esta propriedade, a resposta será armazenada em um campo especificado pela propriedade Nome.",
    defaultDisplayValue: "Um valor exibido em perguntas HTML e nos títulos dinâmicos e descrições de elementos de pesquisa quando o valor da pergunta está vazio.",
    useDisplayValuesInDynamicTexts: "Nos tipos de pergunta de seleção única e múltipla, cada opção de opção tem um ID e um valor de exibição. Quando selecionada, essa configuração mostra um valor de exibição em vez de um valor de ID em perguntas HTML e títulos dinâmicos e descrições de elementos de pesquisa.",
    clearIfInvisible: "Escolha se deseja ou não limpar valores de pergunta ocultos pela lógica condicional e quando fazê-lo. A opção \"Herdar\" aplica a configuração no nível do questionário (\"Após a conclusão do questionário\" por padrão).",
    choicesFromQuestionMode: "Escolha entre: \"Todos\" - copia todas as opções de escolha da pergunta selecionada; \"Selecionado\" - copia dinamicamente apenas as opções de escolha selecionadas; \"Não selecionado\" - copia dinamicamente apenas as opções de escolha não selecionadas. As opções \"Nenhum\" e \"Outros\" são copiadas por padrão se ativadas na pergunta de origem.",
    choiceValuesFromQuestion: "Nos tipos de pergunta de seleção única e múltipla, cada opção de escolha tem um ID e um valor de exibição. Essa configuração especifica qual pergunta de matriz, coluna ou painel deve fornecer as IDs.",
    choiceTextsFromQuestion: "Nos tipos de pergunta de seleção única e múltipla, cada opção de escolha tem um ID e um valor de exibição. Essa configuração especifica qual coluna de matriz ou pergunta de painel deve fornecer os textos de exibição.",
    allowCustomChoices: "Selecione para permitir que os respondentes adicionem suas próprias opções se a opção desejada não estiver disponível na lista suspensa. As opções personalizadas serão armazenadas apenas temporariamente durante a sessão atual do navegador.",
    showOtherItem: "Quando selecionada, os usuários podem incluir entrada adicional em uma caixa de comentário separada.",
    separateSpecialChoices: "Exibe cada opção de opção especial (\"Nenhuma\", \"Outra\", \"Selecionar Tudo\") em uma nova linha, mesmo ao usar um layout de várias colunas.",
    path: "Especifique o local dentro do conjunto de dados de serviço onde a matriz de objetos de destino está localizada. Deixe em branco se a URL já apontar para a matriz.",
    choicesbyurl: {
      valueName: "Nome"
    },
    titleName: "Insira um nome de propriedade uniforme dentro da matriz de objetos que contém os valores que você deseja exibir na lista de opções.",
    allowEmptyResponse: "Selecione esta opção para permitir que o serviço retorne uma resposta ou matriz vazia.",
    choicesVisibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade de todas as opções de escolha.",
    rateValues: "O valor esquerdo serve como um ID de item usado em regras condicionais, o valor direito é exibido aos respondentes.",
    rating: {
      displayMode: "\"Auto\" seleciona entre os modos \"Botões\" e \"Dropdown\" com base na largura disponível. Quando a largura é insuficiente para exibir botões, a pergunta exibe uma lista suspensa."
    },
    valuePropertyName: "Permite conectar perguntas que produzem resultados em diferentes formatos. Quando essas perguntas são vinculadas usando um identificador de junção, essa propriedade compartilhada armazena valores de pergunta selecionados.",
    searchEnabled: "Selecione se deseja atualizar o conteúdo do menu suspenso para corresponder à consulta de pesquisa que um usuário está digitando no campo de entrada.",
    valueTrue: "Um valor a guardar nos resultados do inquérito quando os inquiridos dão uma resposta positiva.",
    valueFalse: "Um valor a guardar nos resultados do inquérito quando os inquiridos dão uma resposta negativa.",
    showPreview: "Não é recomendável desativar essa opção, pois ela substitui a imagem de visualização e torna difícil para um usuário entender se os arquivos foram carregados.",
    needConfirmRemoveFile: "Aciona um prompt pedindo para confirmar a exclusão do arquivo.",
    selectToRankEnabled: "Habilite para classificar apenas as opções selecionadas. Os usuários arrastarão os itens selecionados da lista de opções para ordená-los dentro da área de classificação.",
    dataList: "Insira uma lista de opções que serão sugeridas ao respondente durante a entrada.",
    inputSize: "A configuração redimensiona apenas os campos de entrada e não afeta a largura da caixa de pergunta.",
    itemTitleWidth: "Define a largura consistente para todos os rótulos de item. Aceita valores CSS (px, %, in, pt, etc.).",
    inputTextAlignment: "Selecione como alinhar o valor de entrada dentro do campo. A configuração padrão \"Auto\" alinha o valor de entrada à direita se o mascaramento de moeda ou numérico for aplicado e à esquerda se não.",
    altText: "Serve como um substituto quando a imagem não pode ser exibida no dispositivo de um usuário e para fins de acessibilidade.",
    rateColorMode: "Define a cor do emoji selecionado quando o tipo de ícone Classificação é definido como \"Smileys\". Escolha entre: \"Padrão\" - o emoji selecionado aparece na cor padrão do questionário; \"Escala\" - o emoji selecionado herda a cor da escala de classificação.",
    expression: {
      name: "Um ID de expressão que não está visível para os respondentes.",
      description: "Digite um subtítulo de expressão.",
      expression: "Uma expressão pode incluir cálculos básicos ('{q1_id} + {q2_id}'), condições ('{age} > 60') e funções ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
    },
    storeOthersAsComment: "Selecione para armazenar o valor da opção \"Outro\" como uma propriedade separada nos resultados da pesquisa.",
    format: "Utilizar {0} como um espaço reservado para o valor real.",
    acceptedTypes: "Consulte o [aceitar](https://www.w3schools.com/tags/att_input_accept.asp) descrição do atributo para mais informações.",
    columnColCount: "Aplicável apenas aos tipos de célula Grupo de Rádio e Caixa de Seleção.",
    autocomplete: "Consulte o [autocompleto](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) descrição do atributo para mais informações.",
    filePlaceholder: "Aplica-se quando \"Tipo de origem\" é \"Arquivos locais\" ou quando a câmera não está disponível",
    photoPlaceholder: "Aplica-se quando \"Tipo de origem\" é \"Câmera\".",
    fileOrPhotoPlaceholder: "Aplica-se quando \"Tipo de origem\" é \"Arquivos locais ou câmera\".",
    colCount: "Organiza as opções de escolha em um layout de várias colunas. Quando definido como 0, as opções são exibidas em uma única linha.",
    masksettings: {
      saveMaskedValue: "Selecione se deseja armazenar o valor da pergunta com uma máscara aplicada nos resultados do questionário."
    },
    patternmask: {
      pattern: "O padrão pode conter literais de cadeia de caracteres e os seguintes espaços reservados: '9' - para um dígito; «a» - para uma letra maiúscula ou minúscula; '#' - para um dígito ou uma letra maiúscula ou minúscula. Use barra invertida '\\' para escapar de um personagem."
    },
    datetimemask: {
      pattern: "O padrão pode conter caracteres separadores e os seguintes espaços reservados:<br>'m' - Número do mês.<br>'mm' - Número do mês, com zero à esquerda para valores de um dígito. <br>'d' - Dia do mês. <br>'dd' - Dia do mês, com zero à esquerda para valores de um dígito. <br>'yy' - Os dois últimos dígitos do ano. <br>'yyyy' - Ano de quatro dígitos. <br>'H' - Horas em formato de 24 horas. <br>'HH' - Horas em formato de 24 horas, com zero à esquerda para valores de um dígito. <br>'h' - Horas em formato de 12 horas. <br>'hh' - Horas em formato de 12 horas, com zero à esquerda para valores de um dígito. <br>'MM' - Minutos. <br>'ss' - Segundos. <br>'TT' - Relógio de 12 horas em caixa alta (AM/PM). <br>'tt' - Relógio de 12 horas em minúsculas (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Um símbolo usado para separar a parte fracionária da parte inteira de um número exibido.",
      thousandsSeparator: "Um símbolo usado para separar os dígitos de um grande número em grupos de três.",
      precision: "Limita quantos dígitos devem ser retidos após o ponto decimal de um número exibido."
    },
    currencymask: {
      prefix: "Um ou vários símbolos a serem exibidos antes do valor.",
      suffix: "Um ou vários símbolos a serem exibidos após o valor."
    },
    theme: {
      isPanelless: "Essa configuração se aplica somente a perguntas fora de um painel.",
      primaryColor: "Define uma cor suplementar que destaca os principais elementos de levantamento topográfico.",
      panelBackgroundTransparency: "Ajusta a transparência dos painéis e caixas de perguntas em relação ao plano de fundo da pesquisa.",
      questionBackgroundTransparency: "Ajusta a transparência dos elementos de entrada em relação ao plano de fundo do questionário.",
      cornerRadius: "Define o raio do canto para todos os elementos retangulares. Ative o Modo Avançado se quiser definir valores de raio de canto individuais para elementos de entrada ou painéis e caixas de perguntas.",
      "--sjs-general-backcolor-dim": "Define a cor de fundo principal da pesquisa."
    },
    header: {
      inheritWidthFrom: "A opção \"Igual ao contêiner\" ajusta automaticamente a largura da área de conteúdo do cabeçalho para caber no elemento HTML em que a pesquisa é colocada.",
      textAreaWidth: "A largura da área do cabeçalho que contém o título e a descrição da pesquisa, medida em pixels.",
      overlapEnabled: "Quando ativado, a parte superior da pesquisa se sobrepõe à parte inferior do cabeçalho.",
      mobileHeight: "Quando definido como 0, a altura é calculada automaticamente para acomodar o conteúdo do cabeçalho."
    },
    progressBarInheritWidthFrom: "A opção \"Igual ao contêiner\" ajusta automaticamente a largura da área da barra de progresso para caber no elemento HTML em que a pesquisa é colocada."
  },
  // Properties
  p: {
    title: {
      name: "título",
      title: "Deixar vazio se for o mesmo que 'Nome'"
    },
    multiSelect: "Permitir escolha múltipla",
    showLabel: "Mostrar legenda das imagens",
    swapOrder: "Troque a ordem de Sim e Não",
    value: "Valor",
    tabAlign: "Alinhamento de tabulação",
    sourceType: "Tipo de origem",
    fitToContainer: "Ajuste ao contêiner",
    setValueExpression: "Definir expressão de valor",
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
    defaultValueExpression: "Valor de expressão pré-definida",
    requiredIf: "Obrigatório se",
    resetValueIf: "Redefinir valor se",
    setValueIf: "Defina o valor se",
    validators: "Validadores",
    bindings: "ligações",
    renderAs: "renderizar como",
    attachOriginalItems: "anexar itens originais",
    choices: "Opções",
    choicesByUrl: "Opções com origem na Web",
    currency: "Moeda",
    cellHint: "Dica de célula",
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
    inputSize: "Tamanho do item",
    itemTitleWidth: "Largura da etiqueta do item (em px)",
    inputTextAlignment: "Alinhamento de valor de entrada",
    elements: "elementos",
    content: "conteúdo",
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
    mobileHeight: "Altura em smartphones",
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
    selectToRankEmptyRankedAreaText: "Texto para mostrar se todas as opções estão selecionadas",
    selectToRankEmptyUnrankedAreaText: "Texto de espaço reservado para a área de classificação",
    allowCameraAccess: "Permitir acesso à câmera",
    scaleColorMode: "Modo de cor de escala",
    rateColorMode: "Classifique o modo de cores",
    copyDisplayValue: "Copiar valor de exibição",
    effectiveColSpan: "Extensão da coluna",
    progressBarInheritWidthFrom: "Largura da área da barra de progresso"
  },
  theme: {
    advancedMode: "Modo avançado",
    pageTitle: "Fonte do título da página",
    questionTitle: "Fonte do título da pergunta",
    editorPanel: "Elemento de entrada",
    lines: "Linhas",
    primaryDefaultColor: "Inadimplência",
    primaryDarkColor: "Pairar",
    primaryLightColor: "Selecionado",
    backgroundDimColor: "Cor de fundo",
    cornerRadius: "Raio de canto",
    backcolor: "Plano de fundo padrão",
    hovercolor: "Plano de fundo do mouse",
    borderDecoration: "Decoração de borda",
    fontColor: "Cor da fonte",
    backgroundColor: "Cor de fundo",
    primaryForecolor: "Cor padrão",
    primaryForecolorLight: "Cor desativada",
    font: "Fonte",
    borderDefault: "Escuro",
    borderLight: "Isqueiro",
    fontFamily: "Família de fontes",
    fontWeightRegular: "Regular",
    fontWeightHeavy: "Pesado",
    fontWeightSemiBold: "Semi-negrito",
    fontWeightBold: "Ousado",
    color: "Cor",
    placeholderColor: "Cor do espaço reservado",
    size: "Tamanho",
    opacity: "Opacidade",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Adicionar efeito de sombra",
    boxShadowBlur: "Borrão",
    boxShadowSpread: "Espalhar",
    boxShadowDrop: "Deixar cair",
    boxShadowInner: "Interno",
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
      green: "Verde",
      gray: "Cinza"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Fundo da superfície",
    "--sjs-primary-background-500": "Primário",
    "--sjs-secondary-background-500": "Secundário",
    surfaceScale: "Superfície",
    userInterfaceBaseUnit: "Interface de usuário",
    fontScale: "Fonte",
    names: {
      sc2020: "Criador de pesquisas 2020",
      "default-light": "Luz",
      "default-dark": "Escuro",
      "default-contrast": "Contraste"
    }
  }
};

setupLocale({ localeCode: "pt", strings: portugueseTranslation });

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
// theme.groupAdvanced: "Advanced" => "Avançado"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Aparência da pergunta"
// theme.isPanellessPanels: "Default" => "Inadimplência"
// theme.isPanellessLightweight: "Without Panels" => "Sem Painéis"
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
// theme.surveyTitleFont: "Survey title font" => "Fonte do título do questionário"
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
// ed.themeSettings: "Theme Settings" => "Configurações do tema"
// ed.themeSettingsTooltip: "Open theme settings" => "Abrir configurações de tema"
// pe.resetToDefaultCaption: "Reset" => "Repor"
// pv.file: "Local files" => "Arquivos locais"
// pv.camera: "Camera" => "Câmera"
// pv.file-camera: "Local files or camera" => "Arquivos locais ou câmera"
// ed.translateUsigAI: "Auto-translate All" => "Tradução automática de todos"
// ed.translationDialogTitle: "Untranslated strings" => "Cadeias de caracteres não traduzidas"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Por favor, insira pelo menos {0} itens"
// lg.question_resetValueName: "Reset question value" => "Redefinir o valor da pergunta"
// lg.column_resetValue: "Reset column value" => "Redefinir o valor da coluna"
// pe.markRequired: "Mark as required" => "Marcar conforme necessário"
// pe.removeRequiredMark: "Remove the required mark" => "Remover a marca necessária"
// p.resetValueIf: "Reset value if" => "Redefinir valor se"
// lg.question_setValueName: "Set question value" => "Definir o valor da pergunta"
// lg.column_resetValueName: "Reset column value" => "Redefinir o valor da coluna"
// lg.column_setValueName: "Set column value" => "Definir valor de coluna"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Uma expressão cujo resultado será atribuído à pergunta de destino."
// survey.title: "Title" => "Título"
// page.title: "Title" => "Título"
// p.setValueIf: "Set value if" => "Defina o valor se"
// theme.header: "Header" => "Cabeçalho"
// theme.backgroundImageFitFill: "Stretch" => "Esticar"
// theme.backgroundImageFitTile: "Tile" => "Telha"
// theme.headerView: "View" => "Vista"
// theme.headerViewBasic: "Basic" => "Básico"
// theme.headerViewAdvanced: "Advanced" => "Avançado"
// theme.headerInheritWidthFrom: "Content area width" => "Largura da área de conteúdo"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "O mesmo que pesquisa"
// theme.headerInheritWidthFromPage: "Fit to page" => "Ajustar à página"
// theme.headerTextAreaWidth: "Text width" => "Largura do texto"
// theme.headerBackgroundColorSwitch: "Background color" => "Cor de fundo"
// theme.headerBackgroundColorNone: "None" => "Nenhum"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Cor de destaque"
// theme.headerBackgroundColorCustom: "Custom" => "Costume"
// theme.horizontalAlignmentLeft: "Left" => "Esquerda"
// theme.horizontalAlignmentCenter: "Center" => "Centro"
// theme.horizontalAlignmentRight: "Right" => "Direita"
// theme.verticalAlignmentTop: "Top" => "Início"
// theme.verticalAlignmentMiddle: "Middle" => "Meio"
// theme.verticalAlignmentBottom: "Bottom" => "Fundo"
// theme.logoPosition: "Logo Position" => "Posição do logotipo"
// lg.question_resetValueText: "reset value for question: {0}" => "redefinir valor da pergunta: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "atribuir valor: {1} à pergunta: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Redefinir o valor da célula para a coluna: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Atribuir valor de célula: {1} à coluna: {0}"
// ed.surveyJsonExportButton: "Export" => "Exportação"
// ed.surveyJsonImportButton: "Import" => "Importação"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Copiar para área de transferência"
// pe.filePlaceholder: "File placeholder text" => "Texto do espaço reservado para arquivo"
// pe.photoPlaceholder: "Photo placeholder text" => "Texto do espaço reservado para foto"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Texto de espaço reservado para arquivo ou foto"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Aplica-se quando \"Tipo de origem\" é \"Arquivos locais\" ou quando a câmera não está disponível"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Aplica-se quando \"Tipo de origem\" é \"Câmera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Aplica-se quando \"Tipo de origem\" é \"Arquivos locais ou câmera\"."
// theme.background: "Background" => "Fundo"
// theme.appearance: "Appearance" => "Aparência"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Você realmente quer redefinir o tema? Todas as suas personalizações serão perdidas."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Sim, redefinir o tema"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Ajuste ao contêiner"
// signaturepad.showPlaceholder: "Show the placeholder" => "Mostrar o espaço reservado"
// signaturepad.placeholder: "Placeholder text" => "Texto de espaço reservado"
// theme.surveyDescriptionFont: "Survey description font" => "Fonte da descrição da pesquisa"

// ed.prevFocus: "Focus previous" => "Foco anterior"
// ed.nextFocus: "Focus next" => "Foco a seguir"
// ed.saveTheme: "Save Theme" => "Salvar tema"
// ed.saveThemeTooltip: "Save Theme" => "Salvar tema"
// lg.page_requireName: "Make page required" => "Tornar a página obrigatória"
// lg.panel_requireName: "Make page required" => "Tornar a página obrigatória"
// signaturepad.signatureWidth: "Signature area width" => "Largura da área de assinatura"
// signaturepad.signatureHeight: "Signature area height" => "Altura da área de assinatura"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Dimensionar automaticamente a área de assinatura"
// signaturepad.penMinWidth: "Minimum pen width" => "Largura mínima da caneta"
// signaturepad.penMaxWidth: "Maximum pen width" => "Largura máxima da caneta"
// theme.headerTitlePosition: "Title position" => "Posição do título"
// theme.headerDescriptionPosition: "Description position" => "Descrição da posição"
// ed.propertyGridNoResultsFound: "No results found" => "Nenhum resultado encontrado"
// pv.leftRight: "Left and right" => "Esquerda e direita"
// p.sourceType: "Source type" => "Tipo de origem"
// p.fitToContainer: "Fit to container" => "Ajuste ao contêiner"
// p.setValueExpression: "Set value expression" => "Definir expressão de valor"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "As opções são carregadas a partir de um serviço Web."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Ir para configurações"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Pré-visualização das opções de escolha carregadas"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Impedir respostas duplicadas em linhas"
// theme.advancedMode: "Advanced mode" => "Modo avançado"
// theme.backgroundCornerRadius: "Background and corner radius" => "Fundo e raio de canto"
// theme.colorsTitle: "Colors" => "Cores"
// theme.font: "Font" => "Fonte"
// theme.lines: "Lines" => "Linhas"
// theme.titleFont: "Title font" => "Fonte do título"
// theme.descriptionFont: "Description font" => "Fonte de descrição"
// theme.shadow: "Shadow effects" => "Efeitos de sombra"
// ed.translateUsigAIFrom: "Translate from: " => "Traduzir do: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Permitir a opção Recusar resposta"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Permitir a opção Não Sei"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Permitir a opção Recusar resposta"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Permitir a opção Não Sei"
// pv.contain: "Contain" => "Conter"
// pv.cover: "Cover" => "Cobrir"
// pv.fill: "Fill" => "Encher"

// pe.transposeData: "Transpose rows to columns" => "Transpor linhas para colunas"
// layout.panel: "Layout" => "Layout"
// layout.question: "Layout" => "Layout"
// layout.base: "Layout" => "Layout"
// panel.name: "Panel name" => "Nome do painel"
// panel.title: "Panel title" => "Título do painel"
// panel.description: "Panel description" => "Descrição do painel"
// panel.visibleIf: "Make the panel visible if" => "Tornar o painel visível se"
// panel.requiredIf: "Make the panel required if" => "Tornar o painel obrigatório se"
// panel.questionOrder: "Question order within the panel" => "Ordem das perguntas no painel"
// panel.startWithNewLine: "Display the panel on a new line" => "Exibir o painel em uma nova linha"
// panel.state: "Panel collapse state" => "Estado de recolhimento do painel"
// panel.width: "Inline panel width" => "Largura do painel embutido"
// panel.minWidth: "Minimum panel width" => "Largura mínima do painel"
// panel.maxWidth: "Maximum panel width" => "Largura máxima do painel"
// paneldynamic.name: "Panel name" => "Nome do painel"
// paneldynamic.title: "Panel title" => "Título do painel"
// paneldynamic.description: "Panel description" => "Descrição do painel"
// paneldynamic.visibleIf: "Make the panel visible if" => "Tornar o painel visível se"
// paneldynamic.requiredIf: "Make the panel required if" => "Tornar o painel obrigatório se"
// paneldynamic.page: "Move the panel to page" => "Mover o painel para a página"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Exibir o painel em uma nova linha"
// paneldynamic.state: "Panel collapse state" => "Estado de recolhimento do painel"
// paneldynamic.width: "Inline panel width" => "Largura do painel embutido"
// paneldynamic.minWidth: "Minimum panel width" => "Largura mínima do painel"
// paneldynamic.maxWidth: "Maximum panel width" => "Largura máxima do painel"
// paneldynamic.templateDescription: "Panel description pattern" => "Padrão de descrição do painel"
// paneldynamic.templateTitle: "Panel title pattern" => "Padrão de título do painel"
// paneldynamic.noEntriesText: "Empty panel text" => "Texto vazio do painel"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Padrão de título de guia"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Tornar um painel individual visível se"
// paneldynamic.hideNumber: "Hide the panel number" => "Ocultar o número do painel"
// paneldynamic.titleLocation: "Panel title alignment" => "Alinhamento do título do painel"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Alinhamento da descrição do painel"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Alinhamento do título da pergunta"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Alinhamento da mensagem de erro"
// paneldynamic.newPanelPosition: "New panel location" => "Nova localização do painel"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Evite respostas duplicadas na seguinte pergunta"
// question.name: "Question name" => "Nome da pergunta"
// question.title: "Question title" => "Título da pergunta"
// question.description: "Question description" => "Descrição da pergunta"
// question.visibleIf: "Make the question visible if" => "Torne a pergunta visível se"
// question.requiredIf: "Make the question required if" => "Faça a pergunta obrigatória se"
// question.state: "Question box collapse state" => "Estado de recolhimento da caixa de pergunta"
// question.hideNumber: "Hide the question number" => "Ocultar o número da pergunta"
// question.titleLocation: "Question title alignment" => "Alinhamento do título da pergunta"
// question.descriptionLocation: "Question description alignment" => "Alinhamento da descrição da pergunta"
// question.errorLocation: "Error message alignment" => "Alinhamento da mensagem de erro"
// question.indent: "Increase the inner indent" => "Aumentar o recuo interno"
// question.width: "Inline question width" => "Largura da pergunta embutida"
// question.minWidth: "Minimum question width" => "Largura mínima da pergunta"
// question.maxWidth: "Maximum question width" => "Largura máxima da pergunta"
// question.textUpdateMode: "Update input field value" => "Atualizar valor do campo de entrada"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Mostrar o botão Limpar na área de assinatura"
// signaturepad.penColor: "Stroke color" => "Cor do traçado"
// comment.rows: "Input field height (in lines)" => "Altura do campo de entrada (em linhas)"
// expression.name: "Expression name" => "Nome da expressão"
// expression.title: "Expression title" => "Título da expressão"
// expression.description: "Expression description" => "Descrição da expressão"
// expression.expression: "Expression" => "Expressão"
// trigger.expression: "Expression" => "Expressão"
// calculatedvalue.expression: "Expression" => "Expressão"
// survey.description: "Survey description" => "Descrição da pesquisa"
// page.name: "Page name" => "Nome da página"
// page.description: "Page description" => "Descrição da página"
// page.visibleIf: "Make the page visible if" => "Tornar a página visível se"
// page.requiredIf: "Make the page required if" => "Tornar a página obrigatória se"
// page.questionOrder: "Question order on the page" => "Ordem das perguntas na página"
// matrixdropdowncolumn.name: "Column name" => "Nome da coluna"
// matrixdropdowncolumn.title: "Column title" => "Título da coluna"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Impedir respostas duplicadas"
// matrixdropdowncolumn.width: "Column width" => "Largura da coluna"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Largura mínima da coluna"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Altura do campo de entrada (em linhas)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Tornar a coluna visível se"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Tornar a coluna obrigatória se"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Cada opção em uma coluna separada"
// multipletextitem.name: "Name" => "Nome"
// multipletextitem.title: "Title" => "Título"
// pe.rateDescriptionLocation: "Label alignment" => "Alinhamento de rótulos"
// pe.cellErrorLocation: "Cell error message alignment" => "Alinhamento da mensagem de erro da célula"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Você ainda não tem nenhuma coluna"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Você ainda não tem nenhuma linha"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Você ainda não tem nenhuma regra de validação"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Você ainda não tem nenhuma variável personalizada"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Você ainda não tem nenhum gatilho"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Você ainda não tem nenhum link"
// pe.addNew@columns: "Add new column" => "Adicionar nova coluna"
// pe.addNew@rows: "Add new row" => "Adicionar nova linha"
// pe.addNew@validators: "Add new rule" => "Adicionar nova regra"
// pe.addNew@calculatedValues: "Add new variable" => "Adicionar nova variável"
// pe.addNew@triggers: "Add new trigger" => "Adicionar novo gatilho"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Adicionar novo URL"
// choicesbyurl.url: "Web service's URL" => "URL do serviço Web"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Exibir títulos de página na barra de progresso"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Exibir números de página na barra de progresso"
// itemvalue.visibleIf: "Make the option visible if" => "Torne a opção visível se"
// itemvalue.enableIf: "Make the option selectable if" => "Torne a opção selecionável se"
// panel.layout: "Panel Layout" => "Layout do painel"
// tabs.questionSettings: "Question Settings" => "Configurações da pergunta"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Ex.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Ex.: categorias.ficção"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Ex.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Ex.: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Ex.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Ex.: 50%"
// pv.selected: "Selected" => "Selecionado"
// pv.unselected: "Unselected" => "Desmarcado"
// pv.center: "Center" => "Centro"
// pv.middle: "Middle" => "Meio"
// pv.next: "Next" => "Próximo"
// pv.last: "Last" => "Último"
// clearIfInvisible.none: "Never" => "Nunca"
// questionsOnPageMode.standard: "Original structure" => "Estrutura original"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Mostrar todas as perguntas em uma página"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Mostrar uma única pergunta por página"
// pv.auto: "Auto" => "Automático"
// panelsState.firstExpanded: "First expanded" => "Primeiro expandido"
// rateColorMode.scale: "Scale" => "Escala"
// scaleColorMode.monochrome: "Monochrome" => "Monocromático"
// scaleColorMode.colored: "Colored" => "Colorido"
// state.default: "Locked" => "Trancado"
// showQuestionNumbers.default: "Auto-numbering" => "Numeração automática"
// showQuestionNumbers.on: "Auto-numbering" => "Numeração automática"
// showQuestionNumbers.onPage: "Reset on each page" => "Redefinir em cada página"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Redefinir em cada painel"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Redefinir em cada painel"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Continue na pesquisa"
// showQuestionNumbers.off: "No numbering" => "Sem numeração"
// descriptionLocation.underTitle: "Under the question title" => "Sob o título da pergunta"
// descriptionLocation.underInput: "Under the input field" => "No campo de entrada"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Ao lado das opções"
// selectToRankAreasLayout.vertical: "Above choices" => "Acima das escolhas"
// displayStyle.decimal: "Decimal" => "Decimal"
// displayStyle.currency: "Currency" => "Moeda"
// displayStyle.percent: "Percentage" => "Porcentagem"
// displayStyle.date: "Date" => "Data"
// totalDisplayStyle.decimal: "Decimal" => "Decimal"
// totalDisplayStyle.currency: "Currency" => "Moeda"
// totalDisplayStyle.percent: "Percentage" => "Porcentagem"
// totalDisplayStyle.date: "Date" => "Data"
// rowOrder.initial: "Original" => "Original"
// questionOrder.initial: "Original" => "Original"
// showProgressBar.aboveheader: "Above the header" => "Acima do cabeçalho"
// showProgressBar.belowheader: "Below the header" => "Abaixo do cabeçalho"
// pv.sum: "Sum" => "Soma"
// pv.count: "Count" => "Contar"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Contém"
// searchMode.startsWith: "Starts with" => "Começa com"
// panel.name: "A panel ID that is not visible to respondents." => "Um ID de painel que não está visível para os respondentes."
// panel.description: "Type a panel subtitle." => "Digite uma legenda do painel."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Use o ícone de varinha mágica para definir uma regra condicional que determine a visibilidade do painel."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Use o ícone de varinha mágica para definir uma regra condicional que desabilite o modo somente leitura para o painel."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Aplica-se a todas as perguntas deste painel. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas individuais. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Define o local de uma mensagem de erro em relação a todas as perguntas no painel. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Mantém a ordem original das perguntas ou as randomiza. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa."
// panel.page: "Repositions the panel to the end of a selected page." => "Reposiciona o painel no final de uma página selecionada."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Adiciona espaço ou margem entre o conteúdo do painel e a borda esquerda da caixa do painel."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Desmarque para exibir o painel em uma linha com a pergunta ou painel anterior. A configuração não se aplica se o painel for o primeiro elemento do formulário."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Escolha entre: \"Expandido\" - o painel é exibido na íntegra e pode ser recolhido; \"Recolhido\" - o painel exibe apenas o título e a descrição e pode ser expandido; \"Bloqueado\" - o painel é exibido na íntegra e não pode ser recolhido."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Define a largura do painel proporcionalmente a outros elementos de pesquisa na mesma linha. Aceita valores CSS (px, %, in, pt, etc.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Um ID de painel que não está visível para os respondentes."
// paneldynamic.description: "Type a panel subtitle." => "Digite uma legenda do painel."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Use o ícone de varinha mágica para definir uma regra condicional que determine a visibilidade do painel."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Use o ícone de varinha mágica para definir uma regra condicional que desabilite o modo somente leitura para o painel."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Aplica-se a todas as perguntas deste painel. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas individuais. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Define o local de uma mensagem de erro em relação a uma pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Define o local de uma mensagem de erro em relação a todas as perguntas no painel. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Reposiciona o painel no final de uma página selecionada."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Adiciona espaço ou margem entre o conteúdo do painel e a borda esquerda da caixa do painel."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Desmarque para exibir o painel em uma linha com a pergunta ou painel anterior. A configuração não se aplica se o painel for o primeiro elemento do formulário."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Escolha entre: \"Expandido\" - o painel é exibido na íntegra e pode ser recolhido; \"Recolhido\" - o painel exibe apenas o título e a descrição e pode ser expandido; \"Bloqueado\" - o painel é exibido na íntegra e não pode ser recolhido."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Define a largura do painel proporcionalmente a outros elementos de pesquisa na mesma linha. Aceita valores CSS (px, %, in, pt, etc.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Digite um modelo para títulos de painel dinâmico. Use {panelIndex} para a posição geral do painel e {visiblePanelIndex} para sua ordem entre os painéis visíveis. Insira esses espaços reservados no padrão para adicionar numeração automática."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Digite um modelo para títulos de guias. Use {panelIndex} para a posição geral de um painel e {visiblePanelIndex} para sua ordem entre os painéis visíveis. Insira esses espaços reservados no padrão para adicionar numeração automática."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Essa configuração permite controlar a visibilidade de painéis individuais dentro do painel dinâmico. Use o espaço reservado '{panel}' para fazer referência ao painel atual em sua expressão."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Essa configuração é herdada automaticamente por todas as perguntas dentro deste painel. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas individuais. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Sob o título do painel\" por padrão)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Define a posição de um painel recém-adicionado. Por padrão, novos painéis são adicionados ao final. Selecione \"Next\" para inserir um novo painel após o atual."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplica as respostas do último painel e as atribui ao próximo painel dinâmico adicionado."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Faça referência a um nome de pergunta para exigir que um usuário forneça uma resposta exclusiva para essa pergunta em cada painel."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Essa configuração permite atribuir um valor de resposta padrão com base em uma expressão. A expressão pode incluir cálculos básicos - '{q1_id} + {q2_id}', expressões booleanas, como '{age} > 60', e funções: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. O valor determinado por essa expressão serve como o valor padrão inicial que pode ser substituído pela entrada manual de um respondente."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Use o ícone de varinha mágica para definir uma regra condicional que determina quando a entrada de um respondente é redefinida para o valor com base no valor \"Expressão de valor padrão\" ou \"Definir expressão de valor\" ou no valor \"Resposta padrão\" (se um dos dois estiver definido)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Use o ícone de varinha mágica para definir uma regra condicional que determine quando executar a expressão \"Definir valor\" e atribuir dinamicamente o valor resultante como resposta."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Especifique uma expressão que defina o valor a ser definido quando as condições na regra \"Definir valor se\" forem atendidas. A expressão pode incluir cálculos básicos - '{q1_id} + {q2_id}', expressões booleanas, como '{age} > 60', e funções: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. O valor determinado por essa expressão pode ser substituído pela entrada manual de um respondente."
// question.name: "A question ID that is not visible to respondents." => "Um ID de pergunta que não é visível para os respondentes."
// question.description: "Type a question subtitle." => "Digite um subtítulo de pergunta."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade da pergunta."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Use o ícone de varinha mágica para definir uma regra condicional que desabilita o modo somente leitura para a pergunta."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Use o ícone de varinha mágica para definir uma regra condicional que impeça o avanço ou o envio da pesquisa, a menos que a pergunta receba uma resposta."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Desmarque para exibir a pergunta em uma linha com a pergunta ou painel anterior. A configuração não se aplica se a pergunta for o primeiro elemento do formulário."
// question.page: "Repositions the question to the end of a selected page." => "Reposiciona a pergunta no final de uma página selecionada."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Escolha entre: \"Expandido\" - a caixa de perguntas é exibida na íntegra e pode ser recolhida; \"Recolhido\" - a caixa de perguntas exibe apenas o título e a descrição e pode ser expandida; \"Bloqueado\" - a caixa de perguntas é exibida na íntegra e não pode ser recolhida."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Substitui as regras de alinhamento de título definidas em um painel, página ou nível de pesquisa. A opção \"Herdar\" aplica quaisquer configurações de nível superior (se definidas) ou configurações de nível de pesquisa (\"Superior\" por padrão)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Sob o título da pergunta\" por padrão)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Define o local de uma mensagem de erro em relação à pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Superior\" por padrão)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Adiciona espaço ou margem entre o conteúdo da pergunta e a borda esquerda da caixa de perguntas."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Define a largura da pergunta proporcionalmente a outros elementos do questionário na mesma linha. Aceita valores CSS (px, %, in, pt, etc.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Use o ícone de varinha mágica para definir uma regra de validação para a pergunta."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Escolha entre: \"Em foco perdido\" - o valor é atualizado quando o campo de entrada perde o foco; \"Ao digitar\" - o valor é atualizado em tempo real, à medida que os usuários digitam. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Em foco perdido\" por padrão)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Você pode usar qualquer serviço Web como uma fonte de dados para perguntas de múltipla escolha. Para preencher valores de escolha, insira a URL do serviço que fornece os dados."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Uma operação de comparação usada para filtrar a lista suspensa."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Define a largura da área de assinatura exibida e a imagem resultante."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Define a altura da área de assinatura exibida e a imagem resultante."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Selecione se deseja que a área de assinatura preencha todo o espaço disponível na caixa de pergunta, mantendo a proporção padrão de 3:2. Quando os valores personalizados de largura e altura são definidos, a configuração manterá a proporção dessas dimensões."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Ajusta a altura da imagem nos resultados da pesquisa."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Ajusta a largura da imagem nos resultados da pesquisa."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Substitui os valores de altura mínima e máxima."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Substitui os valores de largura mínima e máxima."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Valor\" serve como um ID de item usado em regras condicionais; \"Texto\" é exibido aos respondentes."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Essa configuração redimensiona apenas o campo de entrada e não afeta a largura da caixa de pergunta. Para limitar o comprimento de entrada aceito, vá para <b>Validação → Limite máximo de caracteres</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Define o número de linhas exibidas no campo de entrada. Se a entrada ocupar mais linhas, a barra de rolagem aparecerá."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Escolha entre: \"Editável\" - permite que os respondentes preencham seu questionário; \"Somente leitura\" - desabilita a edição de formulários."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Um ID de coluna que não está visível para os respondentes."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Quando habilitado para uma coluna, um respondente é obrigado a fornecer uma resposta exclusiva para cada pergunta dentro desta coluna."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Define o número de linhas exibidas no campo de entrada. Se a entrada ocupar mais linhas, a barra de rolagem aparecerá."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade da coluna."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Use o ícone de varinha mágica para definir uma regra condicional que desabilita o modo somente leitura para a coluna."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Quando selecionada, cria uma coluna individual para cada opção de escolha."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Escolha entre: \"Estático\" - define uma largura fixa; \"Responsivo\" - faz com que a pesquisa ocupe toda a largura da tela; \"Auto\" - aplica-se a qualquer um dos dois, dependendo dos tipos de pergunta usados."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Cole um link de imagem (sem limites de tamanho) ou clique no ícone de pasta para procurar um arquivo do seu computador (até 64 KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Define a largura de um logotipo em unidades CSS (px, %, in, pt, etc.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Define a altura do logotipo em unidades CSS (px, %, in, pt, etc.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Escolha entre: \"Nenhum\" - a imagem mantém seu tamanho original; \"Conter\" - a imagem é redimensionada para se ajustar, mantendo sua proporção; \"Capa\" - a imagem preenche toda a caixa, mantendo sua proporção; \"Preencher\" - a imagem é esticada para preencher a caixa sem manter sua proporção."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Define a visibilidade e a localização dos botões de navegação em uma página."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Define a visibilidade e o local de uma barra de progresso. O valor \"Auto\" exibe a barra de progresso acima ou abaixo do cabeçalho do questionário."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Habilite a página de visualização apenas com todas as perguntas ou com as respostas respondidas."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Aplica-se a todas as perguntas do questionário. Essa configuração pode ser substituída por regras de alinhamento de título em níveis inferiores: painel, página ou pergunta. Uma configuração de nível inferior substituirá as de nível superior."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Um símbolo ou uma sequência de símbolos indicando que uma resposta é necessária."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Introduza um número ou letra com o qual pretende iniciar a numeração."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Define o local de uma mensagem de erro em relação à pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Selecione se deseja que o primeiro campo de entrada em cada página esteja pronto para entrada de texto."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Mantém a ordem original das perguntas ou as randomiza. O efeito dessa configuração só é visível na guia Visualização."
// pehelp.maxTextLength: "For text entry questions only." => "Apenas para perguntas de entrada de texto."
// pehelp.maxCommentLength: "For question comments only." => "Apenas para comentários de perguntas."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Selecione se você deseja que os comentários de perguntas e as perguntas de texto longo aumentem automaticamente em altura com base no comprimento do texto inserido."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Apenas para comentários de perguntas e perguntas de texto longo."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "As variáveis personalizadas servem como variáveis intermediárias ou auxiliares usadas em cálculos de formulário. Eles tomam as entradas dos respondentes como valores de origem. Cada variável personalizada tem um nome exclusivo e uma expressão na qual se baseia."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Selecione se deseja que o valor calculado da expressão seja salvo junto com os resultados do questionário."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Um gatilho é um evento ou condição baseado em uma expressão. Uma vez que a expressão é avaliada como \"verdadeira\", um gatilho desencadeia uma ação. Tal ação pode, opcionalmente, ter uma questão-alvo que afeta."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Escolha se deseja ou não limpar valores para perguntas ocultas pela lógica condicional e quando fazê-lo."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Escolha entre: \"Em foco perdido\" - o valor é atualizado quando o campo de entrada perde o foco; \"Ao digitar\" - o valor é atualizado em tempo real, à medida que os usuários digitam."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "O valor esquerdo serve como um ID de coluna usado em regras condicionais, o valor direito é exibido aos respondentes."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "O valor esquerdo serve como um ID de linha usado em regras condicionais, o valor direito é exibido aos respondentes."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Aceita valores CSS (px, %, in, pt, etc.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Aceita valores CSS (px, %, in, pt, etc.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Define o local de uma mensagem de erro em relação a uma célula com entrada inválida. A opção \"Herdar\" aplica a configuração da propriedade \"Alinhamento da mensagem de erro\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Quando a propriedade \"Impedir respostas duplicadas\" está habilitada, um respondente tentando enviar uma entrada duplicada receberá a seguinte mensagem de erro."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Permite calcular valores totais com base em uma expressão. A expressão pode incluir cálculos básicos ('{q1_id} + {q2_id}'), expressões booleanas ('{age} > 60') e funções ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Aciona um prompt pedindo para confirmar a exclusão da linha."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Duplica as respostas da última linha e as atribui à próxima linha dinâmica adicionada."
// pehelp.description: "Type a subtitle." => "Digite uma legenda."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Escolha um idioma para começar a criar seu questionário. Para adicionar uma tradução, alterne para um novo idioma e traduza o texto original aqui ou na guia Traduções."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Define o local de uma seção de detalhes em relação a uma linha. Escolha entre: \"Nenhum\" - nenhuma expansão é adicionada; \"Sob a linha\" - uma expansão de linha é colocada sob cada linha da matriz; \"Sob a linha, exibir apenas uma expansão de linha\" - uma expansão é exibida em uma única linha apenas, as expansões de linha restantes são recolhidas."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Escolha entre: \"Nenhum\" - a imagem mantém seu tamanho original; \"Conter\" - a imagem é redimensionada para se ajustar, mantendo sua proporção; \"Capa\" - a imagem preenche toda a caixa, mantendo sua proporção; \"Preencher\" - a imagem é esticada para preencher a caixa sem manter sua proporção."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Aumenta gradualmente a altura do campo de entrada à medida que os dados são inseridos. Substitui a configuração \"Altura do campo de entrada (em linhas)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "A alça de redimensionamento (ou pega) aparece no canto e pode ser arrastada para alterar o tamanho do campo de entrada."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Um intervalo de tempo em segundos após o qual o questionário avança automaticamente para a página Obrigado."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Um intervalo de tempo em segundos após o qual o questionário avança automaticamente para a próxima página."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Um intervalo de tempo em segundos após o qual o questionário avança automaticamente para a próxima página."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade da página."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Use o ícone de varinha mágica para definir uma regra condicional que desabilita o modo somente leitura da página."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Aplica-se a todas as perguntas dentro desta página. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas ou painéis individuais. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Superior\" por padrão)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Define o local de uma mensagem de erro em relação à pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Superior\" por padrão)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Mantém a ordem original das perguntas ou as randomiza. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Original\" por padrão). O efeito dessa configuração só é visível na guia Visualização."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Define a visibilidade dos botões de navegação na página. A opção \"Herdar\" aplica a configuração de nível de pesquisa, que tem como padrão \"Visível\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Escolha entre: \"Bloqueado\" - os usuários não podem expandir ou recolher painéis; \"Recolher tudo\" - todos os painéis começam em estado colapsado; \"Expandir tudo\" - todos os painéis começam em um estado expandido; \"Primeiro expandido\" - apenas o primeiro painel é inicialmente expandido."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Insira um nome de propriedade compartilhada na matriz de objetos que contém as URLs de arquivo de imagem ou vídeo que você deseja exibir na lista de opções."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "O valor esquerdo serve como um ID de item usado em regras condicionais, o valor direito é exibido aos respondentes."
// pehelp.title: "Type a user-friendly title to display." => "Digite um título amigável para exibir."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Garante que os usuários não concluam a pesquisa até que os arquivos sejam carregados."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Aceita valores CSS (px, %, in, pt, etc.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Aceita valores CSS (px, %, in, pt, etc.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Aceita valores CSS (px, %, in, pt, etc.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Nos tipos de pergunta de seleção única e múltipla, cada opção de opção tem um ID e um valor de exibição. Quando selecionada, essa configuração mostra um valor de exibição em vez de um valor de ID em perguntas HTML e títulos dinâmicos e descrições de elementos de pesquisa."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Escolha se deseja ou não limpar valores de pergunta ocultos pela lógica condicional e quando fazê-lo. A opção \"Herdar\" aplica a configuração no nível do questionário (\"Após a conclusão do questionário\" por padrão)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Escolha entre: \"Todos\" - copia todas as opções de escolha da pergunta selecionada; \"Selecionado\" - copia dinamicamente apenas as opções de escolha selecionadas; \"Não selecionado\" - copia dinamicamente apenas as opções de escolha não selecionadas. As opções \"Nenhum\" e \"Outros\" são copiadas por padrão se ativadas na pergunta de origem."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Quando selecionada, os usuários podem incluir entrada adicional em uma caixa de comentário separada."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Exibe cada opção de opção especial (\"Nenhuma\", \"Outra\", \"Selecionar Tudo\") em uma nova linha, mesmo ao usar um layout de várias colunas."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Especifique o local dentro do conjunto de dados de serviço onde a matriz de objetos de destino está localizada. Deixe em branco se a URL já apontar para a matriz."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Insira um nome de propriedade uniforme dentro da matriz de objetos que contém os valores que você deseja exibir na lista de opções."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Selecione esta opção para permitir que o serviço retorne uma resposta ou matriz vazia."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade de todas as opções de escolha."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "O valor esquerdo serve como um ID de item usado em regras condicionais, o valor direito é exibido aos respondentes."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" seleciona entre os modos \"Botões\" e \"Dropdown\" com base na largura disponível. Quando a largura é insuficiente para exibir botões, a pergunta exibe uma lista suspensa."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Permite conectar perguntas que produzem resultados em diferentes formatos. Quando essas perguntas são vinculadas usando um identificador de junção, essa propriedade compartilhada armazena valores de pergunta selecionados."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Selecione se deseja atualizar o conteúdo do menu suspenso para corresponder à consulta de pesquisa que um usuário está digitando no campo de entrada."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Um valor a guardar nos resultados do inquérito quando os inquiridos dão uma resposta positiva."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Um valor a guardar nos resultados do inquérito quando os inquiridos dão uma resposta negativa."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Não é recomendável desativar essa opção, pois ela substitui a imagem de visualização e torna difícil para um usuário entender se os arquivos foram carregados."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Aciona um prompt pedindo para confirmar a exclusão do arquivo."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Habilite para classificar apenas as opções selecionadas. Os usuários arrastarão os itens selecionados da lista de opções para ordená-los dentro da área de classificação."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Insira uma lista de opções que serão sugeridas ao respondente durante a entrada."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "A configuração redimensiona apenas os campos de entrada e não afeta a largura da caixa de pergunta."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Define largura consistente para todos os rótulos de item em pixels"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "A opção \"Auto\" determina automaticamente o modo adequado para exibição - Imagem, Vídeo ou YouTube - com base no URL de origem fornecido."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Serve como um substituto quando a imagem não pode ser exibida no dispositivo de um usuário e para fins de acessibilidade."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Define a cor do emoji selecionado quando o tipo de ícone Classificação é definido como \"Smileys\". Escolha entre: \"Padrão\" - o emoji selecionado aparece na cor padrão do questionário; \"Escala\" - o emoji selecionado herda a cor da escala de classificação."
// expression.name: "An expression ID that is not visible to respondents." => "Um ID de expressão que não está visível para os respondentes."
// expression.description: "Type an expression subtitle." => "Digite um subtítulo de expressão."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Uma expressão pode incluir cálculos básicos ('{q1_id} + {q2_id}'), condições ('{age} > 60') e funções ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Selecione para armazenar o valor da opção \"Outro\" como uma propriedade separada nos resultados da pesquisa."
// p.swapOrder: "Swap the order of Yes and No" => "Troque a ordem de Sim e Não"
// p.itemTitleWidth: "Item label width (in px)" => "Largura da etiqueta do item (em px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Texto para mostrar se todas as opções estão selecionadas"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Texto de espaço reservado para a área de classificação"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Preencha o questionário automaticamente"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Selecione se você deseja que o questionário seja concluído automaticamente depois que um respondente responder a todas as perguntas."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Salvar valor mascarado nos resultados da pesquisa"
// patternmask.pattern: "Value pattern" => "Padrão de valor"
// datetimemask.min: "Minimum value" => "Valor mínimo"
// datetimemask.max: "Maximum value" => "Valor máximo"
// numericmask.allowNegativeValues: "Allow negative values" => "Permitir valores negativos"
// numericmask.thousandsSeparator: "Thousands separator" => "Separador de milhares"
// numericmask.decimalSeparator: "Decimal separator" => "Separador decimal"
// numericmask.precision: "Value precision" => "Precisão de valor"
// numericmask.min: "Minimum value" => "Valor mínimo"
// numericmask.max: "Maximum value" => "Valor máximo"
// currencymask.prefix: "Currency prefix" => "Prefixo da moeda"
// currencymask.suffix: "Currency suffix" => "Sufixo de moeda"
// pe.maskType: "Input mask type" => "Tipo de máscara de entrada"
// maskTypes.patternmask: "Pattern" => "Padrão"
// maskTypes.numericmask: "Numeric" => "Numérico"
// maskTypes.datetimemask: "Date and Time" => "Data e Hora"
// maskTypes.currencymask: "Currency" => "Moeda"
// tabs.mask: "Input Mask Settings" => "Configurações da máscara de entrada"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Ex.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Ex.: dd/mm/aaaa"
// pe.currencyprefix_placeholder: "Ex.: $" => "Ex.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Ex.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Opções de encapsulamento"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Textos longos nas opções de escolha gerarão automaticamente quebras de linha para caber no menu suspenso. Desmarque se quiser que os textos sejam recortados."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Selecione se deseja armazenar o valor da pergunta com uma máscara aplicada nos resultados do questionário."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "O padrão pode conter literais de cadeia de caracteres e os seguintes espaços reservados: '9' - para um dígito; «a» - para uma letra maiúscula ou minúscula; '#' - para um dígito ou uma letra maiúscula ou minúscula. Use barra invertida '\\' para escapar de um personagem."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "O padrão pode conter caracteres separadores e os seguintes espaços reservados: 'm' - para o número do mês; 'mm' - para o número do mês, com zero à esquerda para valores de um dígito; 'd' - para o dia do mês; 'dd' - para o dia do mês, com zero à esquerda para valores de um dígito; 'yy' - para os dois últimos dígitos do ano; 'yyyy' - por um ano de quatro dígitos."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Um símbolo usado para separar a parte fracionária da parte inteira de um número exibido."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Um símbolo usado para separar os dígitos de um grande número em grupos de três."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Limita quantos dígitos devem ser retidos após o ponto decimal de um número exibido."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Um ou vários símbolos a serem exibidos antes do valor."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Um ou vários símbolos a serem exibidos após o valor."
// ed.translationSource: "Source: " => "Fonte: "
// ed.translationTarget: "Target: " => "Alvo: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "A página está vazia. Arraste um elemento da caixa de ferramentas ou clique no botão abaixo."
// maskTypes.none: "None" => "Nenhum"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Tornar a linha visível se"
// itemvalue@rows.enableIf: "Make the row editable if" => "Tornar a linha editável se"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Texto de espaço reservado no modo somente leitura ou de visualização"
// pe.textWrapEnabled: "Wrap choices" => "Opções de encapsulamento"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "A opção \"Auto\" determina automaticamente o modo adequado para exibição - Imagem, Vídeo ou YouTube - com base no URL de origem fornecido."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Escolha entre \"Imagem\" e \"Vídeo\" para definir o modo de conteúdo do seletor de mídia. Se \"Imagem\" estiver selecionado, certifique-se de que todas as opções fornecidas são arquivos de imagem nos seguintes formatos: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Da mesma forma, se \"Vídeo\" estiver selecionado, certifique-se de que todas as opções sejam links diretos para arquivos de vídeo nos seguintes formatos: MP4, MOV, WMV, FLV, AVI, MKV. Observe que os links do YouTube não são compatíveis com as opções de vídeo."
// ed.selectFile: "Select a file" => "Selecione um arquivo"
// ed.removeFile: "Remove the file" => "Remover o arquivo"
// pe.searchMode: "Search Mode" => "Modo de pesquisa"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Clique no botão \"Adicionar pergunta\" abaixo para começar a criar seu formulário."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Clique no botão \"Adicionar pergunta\" abaixo para adicionar um novo elemento à página."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Clique no botão \"Adicionar pergunta\" abaixo para adicionar um novo elemento ao painel."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Clique no botão abaixo e escolha uma imagem para carregar"
// coloralpha.opacity: "Opacity" => "Opacidade"
// font.family: "Font family" => "Família de fontes"
// font.color: "Color" => "Cor"
// font.placeholderColor: "Placeholder color" => "Cor do espaço reservado"
// font.size: "Size" => "Tamanho"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Aparência da pergunta"
// theme.editorPanel: "Background and corner radius" => "Fundo e raio de canto"
// theme.questionPanel: "Background and corner radius" => "Fundo e raio de canto"
// theme.primaryColor: "Accent color" => "Cor de destaque"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opacidade do plano de fundo do painel"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opacidade de fundo da pergunta"
// theme.fontSize: "Font size" => "Tamanho da fonte"
// theme.scale: "Scale" => "Escala"
// theme.cornerRadius: "Corner radius" => "Raio de canto"
// theme.pageTitle: "Title font" => "Fonte do título"
// theme.pageDescription: "Description font" => "Fonte de descrição"
// theme.questionTitle: "Title font" => "Fonte do título"
// theme.questionDescription: "Description font" => "Fonte de descrição"
// theme.editorFont: "Font" => "Fonte"
// theme.backgroundOpacity: "Opacity" => "Opacidade"
// theme.--sjs-font-family: "Font family" => "Família de fontes"
// theme.--sjs-general-backcolor-dim: "Background color" => "Cor de fundo"
// theme.--sjs-primary-backcolor: "Accent background" => "Fundo de destaque"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Destaque em primeiro plano"
// theme.--sjs-shadow-small: "Shadow effects" => "Efeitos de sombra"
// theme.--sjs-shadow-inner: "Shadow effects" => "Efeitos de sombra"
// theme.--sjs-border-default: "Colors" => "Cores"
// header@header.headerView: "View" => "Vista"
// header@header.logoPosition: "Logo position" => "Posição do logotipo"
// header@header.surveyTitle: "Survey title font" => "Fonte do título do questionário"
// header@header.surveyDescription: "Survey description font" => "Fonte da descrição da pesquisa"
// header@header.headerTitle: "Survey title font" => "Fonte do título do questionário"
// header@header.headerDescription: "Survey description font" => "Fonte da descrição da pesquisa"
// header@header.inheritWidthFrom: "Content area width" => "Largura da área de conteúdo"
// header@header.textAreaWidth: "Text width" => "Largura do texto"
// header@header.backgroundColorSwitch: "Background color" => "Cor de fundo"
// header@header.backgroundImage: "Background image" => "Imagem de fundo"
// header@header.backgroundImageOpacity: "Opacity" => "Opacidade"
// header@header.overlapEnabled: "Overlap" => "Sobrepor"
// header@header.logoPositionX: "Logo position" => "Posição do logotipo"
// header@header.titlePositionX: "Title position" => "Posição do título"
// header@header.descriptionPositionX: "Description position" => "Descrição da posição"
// weight.400: "Regular" => "Regular"
// weight.600: "Heavy" => "Pesado"
// weight.700: "Semi-bold" => "Semi-negrito"
// weight.800: "Bold" => "Ousado"
// backgroundImageFit.auto: "Auto" => "Automático"
// backgroundImageFit.cover: "Cover" => "Cobrir"
// backgroundImageFit.contain: "Contain" => "Conter"
// backgroundImageFit.fill: "Stretch" => "Esticar"
// backgroundImageFit.tile: "Tile" => "Telha"
// backgroundImageAttachment.fixed: "Fixed" => "Fixo"
// backgroundImageAttachment.scroll: "Scroll" => "Rolar"
// headerView.basic: "Basic" => "Básico"
// headerView.advanced: "Advanced" => "Avançado"
// inheritWidthFrom.survey: "Same as survey" => "O mesmo que pesquisa"
// inheritWidthFrom.container: "Fit to container" => "Ajuste ao contêiner"
// backgroundColorSwitch.none: "None" => "Nenhum"
// backgroundColorSwitch.accentColor: "Accent color" => "Cor de destaque"
// backgroundColorSwitch.custom: "Custom" => "Costume"
// colorPalette.light: "Light" => "Luz"
// colorPalette.dark: "Dark" => "Escuro"
// isPanelless.false: "Default" => "Inadimplência"
// isPanelless.true: "Without Panels" => "Sem Painéis"
// theme.cornerRadius: "Corner radius" => "Raio de canto"
// theme.fontFamily: "Font family" => "Família de fontes"
// theme.fontWeightRegular: "Regular" => "Regular"
// theme.fontWeightHeavy: "Heavy" => "Pesado"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-negrito"
// theme.fontWeightBold: "Bold" => "Ousado"
// theme.color: "Color" => "Cor"
// theme.placeholderColor: "Placeholder color" => "Cor do espaço reservado"
// theme.size: "Size" => "Tamanho"
// theme.opacity: "Opacity" => "Opacidade"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Digite para pesquisar..."
// ed.toolboxNoResultsFound: "No results found" => "Nenhum resultado encontrado"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Espaço reservado para título da guia"
// theme.--sjs-special-red: "Error messages" => "Mensagens de erro"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Um texto de fallback para títulos de guia que se aplica quando o padrão de título de guia não produz um valor significativo."
// theme.fontColor: "Font color" => "Cor da fonte"
// theme.backgroundColor: "Background color" => "Cor de fundo"
// pe.questionTitleWidth: "Question title width" => "Largura do título da pergunta"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Selecione um arquivo ou cole um link de arquivo..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Ex.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Define largura consistente para títulos de perguntas quando eles estão alinhados à esquerda de suas caixas de perguntas. Aceita valores CSS (px, %, in, pt, etc.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Define largura consistente para títulos de perguntas quando eles estão alinhados à esquerda de suas caixas de perguntas. Aceita valores CSS (px, %, in, pt, etc.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Altura da área de comentário (em linhas)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Define o número de linhas exibidas em áreas de texto para comentários de perguntas. Na entrada ocupa mais linhas, a barra de rolagem aparece."
// pe.enabled: "Enabled" => "Habilitado"
// pe.disabled: "Disabled" => "Desactivado"
// pe.inherit: "Inherit" => "Herdar"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Validar campos vazios em caso de perda de foco"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Ex.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Ex.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Ative essa opção para disparar a validação quando um usuário se concentrar em um campo de entrada vazio e deixá-lo sem fazer alterações."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Organiza as opções de escolha em um layout de várias colunas. Quando definido como 0, as opções são exibidas em uma única linha."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Essa configuração se aplica somente a perguntas fora de um painel."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Define uma cor suplementar que destaca os principais elementos de levantamento topográfico."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Ajusta a transparência dos painéis e caixas de perguntas em relação ao plano de fundo da pesquisa."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Ajusta a transparência dos elementos de entrada em relação ao plano de fundo do questionário."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Define o raio do canto para todos os elementos retangulares. Ative o Modo Avançado se quiser definir valores de raio de canto individuais para elementos de entrada ou painéis e caixas de perguntas."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Define a cor de fundo principal da pesquisa."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "A opção \"Igual ao contêiner\" ajusta automaticamente a largura da área de conteúdo do cabeçalho para caber no elemento HTML em que a pesquisa é colocada."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "A largura da área do cabeçalho que contém o título e a descrição da pesquisa, medida em pixels."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Aceita valores %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Aceita valores px."
// p.effectiveColSpan: "Column span" => "Extensão da coluna"
// progressBarInheritWidthFrom.survey: "Same as survey" => "O mesmo que pesquisa"
// progressBarInheritWidthFrom.container: "Same as container" => "Igual ao contêiner"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Exibe visualizações em miniatura para arquivos carregados quando possível. Desmarque se quiser mostrar ícones de arquivo."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "A opção \"Igual ao contêiner\" ajusta automaticamente a largura da área da barra de progresso para caber no elemento HTML em que a pesquisa é colocada."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Largura da área da barra de progresso"
// maskType.none: "None" => "Nenhum"
// maskType.pattern: "Pattern" => "Padrão"
// maskType.numeric: "Numeric" => "Numérico"
// maskType.datetime: "Date and Time" => "Data e hora"
// maskType.currency: "Currency" => "Moeda"

// inputTextAlignment.auto: "Auto" => "Automático"
// inputTextAlignment.left: "Left" => "Esquerda"
// inputTextAlignment.right: "Right" => "Certo"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Selecione como alinhar o valor de entrada dentro do campo. A configuração padrão \"Auto\" alinha o valor de entrada à direita se o mascaramento de moeda ou numérico for aplicado e à esquerda se não."
// p.inputTextAlignment: "Input value alignment" => "Alinhamento de valor de entrada"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Mostrar a barra de progresso"
// paneldynamic.showProgressBar: "Show the progress bar" => "Mostrar a barra de progresso"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Alinhamento da barra de progresso"
// pv.carousel: "Carousel" => "Carrossel"
// progressBarLocation.top: "Top" => "Início"
// progressBarLocation.bottom: "Bottom" => "Fundo"
// progressBarLocation.topBottom: "Top and bottom" => "Superior e inferior"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Organiza as opções de escolha em um layout de várias colunas. Quando definido como 0, as opções são exibidas em uma única linha. Quando definido como -1, o valor real é herdado da propriedade \"Contagem de colunas aninhadas\" da matriz pai."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Os links do YouTube não são suportados."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Comece a configurar seu formulário"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Clique em qualquer ícone de categoria para explorar as configurações do questionário. Configurações adicionais ficarão disponíveis quando você adicionar um elemento de levantamento topográfico à superfície de design."
// pe.caseInsensitive: "Case insensitive" => "Diferencia maiúsculas de minúsculas"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Selecione se letras maiúsculas e minúsculas na expressão regular devem ser tratadas como equivalentes."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Seu formulário está vazio"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Seu formulário está vazio"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Arraste um elemento da caixa de ferramentas ou clique no botão abaixo."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Arraste um elemento da caixa de ferramentas ou clique no botão abaixo."
// ed.previewPlaceholderTitle: "No preview" => "Sem visualização"
// ed.previewPlaceholderTitleMobile: "No preview" => "Sem visualização"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "A pesquisa não contém nenhum elemento visível."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "A pesquisa não contém nenhum elemento visível."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Sem strings para traduzir"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Sem strings para traduzir"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Adicione elementos ao seu formulário ou altere o filtro de strings na barra de ferramentas."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Adicione elementos ao seu formulário ou altere o filtro de strings na barra de ferramentas."
// lg.logicPlaceholderTitle: "No logical rules" => "Sem regras lógicas"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Sem regras lógicas"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Crie uma regra para personalizar o fluxo da pesquisa."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Crie uma regra para personalizar o fluxo da pesquisa."
// pe.showTimer: "Use a timer" => "Use um cronômetro"
// theme.advancedMode: "Advanced mode" => "Modo avançado"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Define a localização de um cronômetro em uma página."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Quando definido como 0, a altura é calculada automaticamente para acomodar o conteúdo do cabeçalho."
// p.mobileHeight: "Height on smartphones" => "Altura em smartphones"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Quando ativado, a parte superior da pesquisa se sobrepõe à parte inferior do cabeçalho."
// ed.creatorSettingTitle: "Creator Settings" => "Configurações do criador"
// tabs.accentColors: "Accent colors" => "Cores de destaque"
// tabs.scaling: "Scaling" => "Escala"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Atribui números a perguntas aninhadas neste painel."
// creatortheme.--sjs-special-background: "Surface background" => "Fundo da superfície"
// creatortheme.--sjs-primary-background-500: "Primary" => "Primário"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Secundário"
// creatortheme.surfaceScale: "Surface" => "Superfície"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Interface de usuário"
// creatortheme.fontScale: "Font" => "Fonte"
// names.sc2020: "Survey Creator 2020" => "Criador de pesquisas 2020"
// names.default-light: "Light" => "Luz"
// names.default-dark: "Dark" => "Escuro"
// names.default-contrast: "Contrast" => "Contraste"
// panel.showNumber: "Number this panel" => "Numerar este painel"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Selecione se deseja que o questionário avance automaticamente para a próxima página depois que o respondente responder a todas as perguntas na página atual. Esse recurso não se aplicará se a última pergunta da página for aberta ou permitir várias respostas."
// autocomplete.name: "Full Name" => "Nome completo"
// autocomplete.honorific-prefix: "Prefix" => "Prefixo"
// autocomplete.given-name: "First Name" => "Nome próprio"
// autocomplete.additional-name: "Middle Name" => "Nome do meio"
// autocomplete.family-name: "Last Name" => "Apelido"
// autocomplete.honorific-suffix: "Suffix" => "Sufixo"
// autocomplete.nickname: "Nickname" => "Apelido"
// autocomplete.organization-title: "Job Title" => "Cargo"
// autocomplete.username: "User Name" => "Nome de usuário"
// autocomplete.new-password: "New Password" => "Nova senha"
// autocomplete.current-password: "Current Password" => "Senha atual"
// autocomplete.organization: "Organization Name" => "Nome da organização"
// autocomplete.street-address: "Full Street Address" => "Endereço completo"
// autocomplete.address-line1: "Address Line 1" => "Linha de endereço 1"
// autocomplete.address-line2: "Address Line 2" => "Linha de endereço 2"
// autocomplete.address-line3: "Address Line 3" => "Linha de endereço 3"
// autocomplete.address-level4: "Level 4 Address" => "Endereço de nível 4"
// autocomplete.address-level3: "Level 3 Address" => "Endereço de Nível 3"
// autocomplete.address-level2: "Level 2 Address" => "Endereço de Nível 2"
// autocomplete.address-level1: "Level 1 Address" => "Endereço de Nível 1"
// autocomplete.country: "Country Code" => "Código do país"
// autocomplete.country-name: "Country Name" => "Nome do país"
// autocomplete.postal-code: "Postal Code" => "Código postal"
// autocomplete.cc-name: "Cardholder Name" => "Nome do titular do cartão"
// autocomplete.cc-given-name: "Cardholder First Name" => "Nome do titular do cartão"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Nome do meio do titular do cartão"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Sobrenome do titular do cartão"
// autocomplete.cc-number: "Credit Card Number" => "Número do cartão de crédito"
// autocomplete.cc-exp: "Expiration Date" => "Data de validade"
// autocomplete.cc-exp-month: "Expiration Month" => "Mês de Expiração"
// autocomplete.cc-exp-year: "Expiration Year" => "Ano de validade"
// autocomplete.cc-csc: "Card Security Code" => "Código de segurança do cartão"
// autocomplete.cc-type: "Credit Card Type" => "Tipo de cartão de crédito"
// autocomplete.transaction-currency: "Transaction Currency" => "Moeda da transação"
// autocomplete.transaction-amount: "Transaction Amount" => "Valor da transação"
// autocomplete.language: "Preferred Language" => "Idioma preferido"
// autocomplete.bday: "Birthday" => "Aniversário"
// autocomplete.bday-day: "Birthday Day" => "Dia de aniversário"
// autocomplete.bday-month: "Birthday Month" => "Mês de aniversário"
// autocomplete.bday-year: "Birthday Year" => "Ano de aniversário"
// autocomplete.sex: "Gender" => "Gênero"
// autocomplete.url: "Website URL" => "URL do site"
// autocomplete.photo: "Profile Photo" => "Foto do perfil"
// autocomplete.tel: "Telephone Number" => "Número telefônico"
// autocomplete.tel-country-code: "Country Code for Phone" => "Código do país para telefone"
// autocomplete.tel-national: "National Telephone Number" => "Número de telefone nacional"
// autocomplete.tel-area-code: "Area Code" => "Código de área"
// autocomplete.tel-local: "Local Phone Number" => "Número de telefone local"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Prefixo de telefone local"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Sufixo de telefone local"
// autocomplete.tel-extension: "Phone Extension" => "Ramal telefônico"
// autocomplete.email: "Email Address" => "Endereço eletrônico"
// autocomplete.impp: "Instant Messaging Protocol" => "Protocolo de mensagens instantâneas"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Bloquear estado de expansão/recolhimento para perguntas"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Você ainda não tem páginas"
// pe.addNew@pages: "Add new page" => "Adicionar nova página"
// ed.zoomInTooltip: "Zoom In" => "Ampliar"
// ed.zoomOutTooltip: "Zoom Out" => "Diminuir o zoom"
// tabs.surfaceBackground: "Surface Background" => "Fundo da superfície"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Usar respostas da última entrada como padrão"
// colors.gray: "Gray" => "Cinza"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Alinhamento dos botões de navegação"
// pv.allQuestions: "Show all questions" => "Mostrar todas as perguntas"
// pv.answeredQuestions: "Show answered questions only" => "Mostrar apenas perguntas respondidas"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Define a localização dos botões de navegação em uma página."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Use valores da seguinte coluna de matriz ou pergunta de painel como IDs de escolha"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Use valores da seguinte coluna de matriz ou pergunta de painel como textos de escolha"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "Nos tipos de pergunta de seleção única e múltipla, cada opção de escolha tem um ID e um valor de exibição. Essa configuração especifica qual pergunta de matriz, coluna ou painel deve fornecer as IDs."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "Nos tipos de pergunta de seleção única e múltipla, cada opção de escolha tem um ID e um valor de exibição. Essa configuração especifica qual coluna de matriz ou pergunta de painel deve fornecer os textos de exibição."
// pe.progressBarLocation: "Progress bar alignment" => "Alinhamento da barra de progresso"
// progressBarLocation.topbottom: "Top and bottom" => "Superior e inferior"
// progressBarLocation.aboveheader: "Above the header" => "Acima do cabeçalho"
// progressBarLocation.belowheader: "Below the header" => "Abaixo do cabeçalho"
// progressBarLocation.off: "Hidden" => "Escondido"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Define a localização da barra de progresso. O valor \"Auto\" exibe a barra de progresso acima ou abaixo do cabeçalho da pesquisa."
// survey.readOnly: "Make the survey read-only" => "Tornar a pesquisa somente leitura"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Selecione se deseja impedir que os respondentes preencham seu questionário."
// paneldynamic.showNumber: "Number the panel" => "Numerar o painel"
// question.showNumber: "Number this question" => "Numere esta pergunta"
// pe.previewMode: "Preview mode" => "Modo de visualização"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Ativar o layout da grade"
// pe.maskSettings: "Mask settings" => "Configurações de máscara"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Alinhamento da mensagem de erro de expansão de linha"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Define o local das mensagens de erro para perguntas aninhadas em seções de detalhes. A opção \"Herdar\" aplica a configuração da propriedade \"Alinhamento da mensagem de erro\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Colunas de layout de grade"
// pe.startPageTitlePlaceholder: "Start Page" => "Página inicial"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Largura efetiva, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Largura do título da pergunta, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Você ainda não tem colunas de layout"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Especifica quantas colunas esse painel abrange dentro do layout da grade."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Esta tabela permite configurar cada coluna de grade dentro do painel. Ele define automaticamente a porcentagem de largura para cada coluna com base no número máximo de elementos em uma linha. Para personalizar o layout da grade, ajuste manualmente esses valores e defina a largura do título para todas as perguntas em cada coluna."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "O Survey Creator permite ajustar manualmente as larguras embutidas dos elementos do formulário para controlar o layout. Se isso não produzir o resultado desejado, você poderá habilitar o layout da grade, que estrutura os elementos do formulário usando um sistema baseado em colunas. Para configurar colunas de layout, selecione uma página ou painel e use a tabela \"Configurações da pergunta\" → \"Colunas da grade\". Para ajustar quantas colunas uma pergunta abrange, selecione-a e defina o valor desejado no campo \"Layout\" → \"Extensão de coluna\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Especifica quantas colunas essa pergunta abrange dentro do layout da grade."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Esta tabela permite configurar cada coluna de grade na página. Ele define automaticamente a porcentagem de largura para cada coluna com base no número máximo de elementos em uma linha. Para personalizar o layout da grade, ajuste manualmente esses valores e defina a largura do título para todas as perguntas em cada coluna."

// ed.expandTooltip: "Expand" => "Expandir"
// ed.collapseTooltip: "Collapse" => "Colapso"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Ex.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Define a largura consistente para todos os rótulos de item. Aceita valores CSS (px, %, in, pt, etc.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zoom para 100%"
// ed.addLanguageTooltip: "Add Language" => "Adicionar idioma"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Define o número de linhas exibidas nas áreas de texto para comentários de perguntas. Se a entrada ocupar mais linhas, a barra de rolagem será exibida."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Valor de exibição padrão para textos dinâmicos"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Um valor exibido em perguntas HTML e nos títulos dinâmicos e descrições de elementos de pesquisa quando o valor da pergunta está vazio."
// showQuestionNumbers.recursive: "Recursive numbering" => "Numeração recursiva"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Largura do título da pergunta"
// pe.allowCustomChoices: "Allow custom choices" => "Permitir escolhas personalizadas"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Define a largura consistente para os títulos das perguntas quando elas estão alinhadas à esquerda de suas caixas de perguntas. Aceita valores CSS (px, %, in, pt, etc.)."
// page.name: "A page ID that is not visible to respondents." => "Um código de página que não é visível para os respondentes."
// page.description: "Type a page subtitle." => "Digite um subtítulo de página."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Uma legenda exibida em um botão de navegação na barra de progresso ou sumário. Se você deixar esse campo vazio, o botão de navegação usará o título ou o nome da página. Para ativar a barra de progresso ou sumário, vá para \"Pesquisa\" → \"Navegação\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Selecione para permitir que os respondentes adicionem suas próprias opções se a opção desejada não estiver disponível na lista suspensa. As opções personalizadas serão armazenadas apenas temporariamente durante a sessão atual do navegador."