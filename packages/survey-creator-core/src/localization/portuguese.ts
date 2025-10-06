import { setupLocale } from "survey-creator-core";

export var portugueseTranslation = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Editar",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Veja e aprenda a criar questionários",
    // [Auto-translated] "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Por favor arraste uma pergunta aqui.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Crie uma regra para configurar o fluxo do questionário.",
    // "Copy"
    copy: "Copiar",
    // "Duplicate"
    duplicate: "Duplicar",
    // "Add to toolbox"
    addToToolbox: "Adicionar às ferramentas",
    // "Delete Panel"
    deletePanel: "Remover Painel",
    // "Delete Question"
    deleteQuestion: "Remover Pergunta",
    // "Convert to"
    convertTo: "Converter para",
    // "Drag element"
    drag: "Arrastar elemento"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Testar questionário",
    // "Themes"
    theme: "Temas",
    // "Translations"
    translation: "Tradução",
    // "Designer"
    designer: "Designer de Questionário",
    // "JSON Editor"
    json: "Editor de JSON",
    // "Logic"
    logic: "Lógica"
  },
  // Question types
  qt: {
    // "Default"
    default: "Pré-definido",
    // "Checkboxes"
    checkbox: "Caixas de Verificação",
    // "Long Text"
    comment: "Comentário",
    // "Image Picker"
    imagepicker: "Selecionador de imagem",
    // "Ranking"
    ranking: "Classificação",
    // "Image"
    image: "Imagem",
    // "Dropdown"
    dropdown: "Lista",
    // "Multi-Select Dropdown"
    tagbox: "Tags",
    // "File Upload"
    file: "Arquivo",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matriz (opção única)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matriz (múltiplas opções)",
    // "Dynamic Matrix"
    matrixdynamic: "Matriz (linhas dinâmicas)",
    // "Multiple Textboxes"
    multipletext: "Texto múltiplo",
    // "Panel"
    panel: "Painel",
    // "Dynamic Panel"
    paneldynamic: "Painel (painéis dinâmicos)",
    // "Radio Button Group"
    radiogroup: "Grupo de rádio",
    // "Rating Scale"
    rating: "Avaliação",
    // [Auto-translated] "Slider"
    slider: "Controle deslizante",
    // "Single-Line Input"
    text: "Texto único",
    // "Yes/No (Boolean)"
    boolean: "Boleano",
    // "Expression (read-only)"
    expression: "Expressão",
    // "Signature"
    signaturepad: "Caixa de Assinatura",
    // "Button Group"
    buttongroup: "Grupo de Botões"
  },
  toolboxCategories: {
    // "General"
    general: "Geral",
    // "Choice Questions"
    choice: "Questões de Escolha",
    // "Text Input Questions"
    text: "Questões de Texto",
    // "Containers"
    containers: "Áreas",
    // "Matrix Questions"
    matrix: "Questões em Matriz",
    // "Misc"
    misc: "Diversos"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Pré-definido ({0})",
    // "Survey"
    survey: "Pesquisa",
    // "Settings"
    settings: "Configurações da Pesquisa",
    // "Open settings"
    settingsTooltip: "Configurações",
    // "Survey Settings"
    surveySettings: "Configurações de Questionários",
    // "Survey settings"
    surveySettingsTooltip: "Configurações do questionário",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Configurações do tema",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Configurações do tema",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Configurações do criador",
    // "Show Panel"
    showPanel: "Mostrar Painel",
    // "Hide Panel"
    hidePanel: "Esconder Painel",
    // "Select previous"
    prevSelected: "Selecionar anterior",
    // "Select next"
    nextSelected: "Selecionar próximo",
    // [Auto-translated] "Focus previous"
    prevFocus: "Foco anterior",
    // [Auto-translated] "Focus next"
    nextFocus: "Foco a seguir",
    // "Survey"
    surveyTypeName: "Questionário",
    // "Page"
    pageTypeName: "Página",
    // "Panel"
    panelTypeName: "Painel",
    // "Question"
    questionTypeName: "Questão",
    // "Column"
    columnTypeName: "Coluna",
    // "Add New Page"
    addNewPage: "Adicionar Nova Página",
    // "Scroll to the Right"
    moveRight: "Mover para direita",
    // "Scroll to the Left"
    moveLeft: "Mover para esquerda",
    // "Delete Page"
    deletePage: "Remover Página",
    // "Edit Page"
    editPage: "Editar Página",
    // "Edit"
    edit: "Editar",
    // "page"
    newPageName: "página",
    // "question"
    newQuestionName: "pergunta",
    // "panel"
    newPanelName: "painel",
    // "text"
    newTextItemName: "texto",
    // "Default"
    defaultV2Theme: "Pré-definifido",
    // "Modern"
    modernTheme: "Moderno",
    // "Default (legacy)"
    defaultTheme: "Pré-definido (antigo)",
    // "Preview Survey Again"
    testSurveyAgain: "Testar questionário novamente",
    // "Survey width: "
    testSurveyWidth: "Tamanho do questionário: ",
    // "You had to navigate to"
    navigateToMsg: "Tem que navegar para",
    // "Save Survey"
    saveSurvey: "Salvar Questionário",
    // "Save Survey"
    saveSurveyTooltip: "Gravar Questionário",
    // [Auto-translated] "Save Theme"
    saveTheme: "Salvar tema",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Salvar tema",
    // "Hide errors"
    jsonHideErrors: "Esconder erros",
    // "Show errors"
    jsonShowErrors: "Mostrar erros",
    // "Undo"
    undo: "Desfazer",
    // "Redo"
    redo: "Refazer",
    // "Undo last change"
    undoTooltip: "Desfazer última alteração",
    // "Redo the change"
    redoTooltip: "Refazer a alteração",
    // [Auto-translated] "Expand"
    expandTooltip: "Expandir",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Colapso",
    // "Expand All"
    expandAllTooltip: "Expandir tudo",
    // "Collapse All"
    collapseAllTooltip: "Recolher tudo",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Ampliar",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Zoom para 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Diminuir o zoom",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Bloquear estado de expansão/recolhimento para perguntas",
    // "Show more"
    showMoreChoices: "Mostrar mais",
    // "Show less"
    showLessChoices: "Mostrar menos",
    // "Copy"
    copy: "Copiar",
    // "Cut"
    cut: "Cortar",
    // "Paste"
    paste: "Colar",
    // "Copy selection to clipboard"
    copyTooltip: "Copiar seleção para a área de transferência",
    // "Cut selection to clipboard"
    cutTooltip: "Cortar seleção para a área de transferência",
    // "Paste from clipboard"
    pasteTooltip: "Colar da área de transferência",
    // "Options"
    options: "Opções",
    // "Generate Valid JSON"
    generateValidJSON: "Gerar JSON válido",
    // "Generate Readable JSON"
    generateReadableJSON: "Gerar JSON legível",
    // "Toolbox"
    toolbox: "Ferramentas",
    // "Properties"
    "property-grid": "Propriedades",
    // [Auto-translated] "Search"
    toolboxSearch: "Procurar",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Digite para pesquisar...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Nenhum resultado encontrado",
    // "Type to search..."
    propertyGridFilteredTextPlaceholder: "Escreva para pesquisar...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Nenhum resultado encontrado",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Comece a configurar seu formulário",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Clique em qualquer ícone de categoria para explorar as configurações do questionário. Configurações adicionais ficarão disponíveis quando você adicionar um elemento de levantamento topográfico à superfície de design.",
    // "Please correct JSON."
    correctJSON: "Por favor corrija o JSON.",
    // "Survey Results "
    surveyResults: "Resultado da pesquisa: ",
    // "As Table"
    surveyResultsTable: "Como Tabela",
    // "As JSON"
    surveyResultsJson: "Como JSON",
    // "Question Title"
    resultsTitle: "Título da Pergunta",
    // "Question Name"
    resultsName: "Nome da Pergunta",
    // "Answer Value"
    resultsValue: "Valor da Resposta",
    // "Display Value"
    resultsDisplayValue: "Mostrar Valor",
    // "Modified"
    modified: "Modificado",
    // "Saving"
    saving: "A gravar",
    // "Saved"
    saved: "Gravado",
    // "Error"
    propertyEditorError: "Erro",
    // "Error! Editor content is not saved."
    saveError: "Erro! Conteúdo do editor não foi salvo.",
    // "Language Settings"
    translationPropertyGridTitle: "Configurações de Idioma",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Configurações do tema",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Adicionar idioma",
    // "Languages"
    translationLanguages: "Idiomas",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Tem certeza de que deseja excluir todas as cadeias de caracteres para este idioma?",
    // "Select language to translate"
    translationAddLanguage: "Selecione o idioma para traduzir",
    // "All Strings"
    translationShowAllStrings: "Mostrar todos os textos",
    // "Used Strings Only"
    translationShowUsedStringsOnly: "Apenas textos utilizados",
    // "All Pages"
    translationShowAllPages: "Mostrar todas páginas",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Nenhum texto para traduzir. Por favor, altere o filtro.",
    // "Export to CSV"
    translationExportToSCVButton: "Exportar para CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Importar de CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Tradução automática de todos",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Traduzir do: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Cadeias de caracteres não traduzidas",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Combinar {0} com o idioma pré-definido",
    // "Translation..."
    translationPlaceHolder: "Tradução...",
    // [Auto-translated] "Source: "
    translationSource: "Fonte: ",
    // [Auto-translated] "Target: "
    translationTarget: "Alvo: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Os links do YouTube não são suportados.",
    // [Auto-translated] "Export"
    themeExportButton: "Exportação",
    // [Auto-translated] "Import"
    themeImportButton: "Importação",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Exportação",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Importação",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Copiar para área de transferência",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Redefinir as configurações do tema para o padrão",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Você realmente quer redefinir o tema? Todas as suas personalizações serão perdidas.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Sim, redefinir o tema",
    // "Bold"
    bold: "Negrito",
    // "Italic"
    italic: "Itálico",
    // "Underline"
    underline: "Sublinhado",
    // "Add Question"
    addNewQuestion: "Adicionar Questão",
    // "Select page..."
    selectPage: "Selecionar página...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "As opções são copiadas de",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "As opções são carregadas a partir de um serviço Web.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Ir para configurações",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Pré-visualização das opções de escolha carregadas",
    // "HTML content will be here."
    htmlPlaceHolder: "O conteúdo HTML ficará aqui.",
    // "Drop a question from the toolbox here."
    panelPlaceHolder: "Arraste uma questão da caixa de ferramentas aqui.",
    // "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "O questionário está vazio. Arraste um elemento da caixa de ferramentas ou clique no botão abaixo.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "A página está vazia. Arraste um elemento da caixa de ferramentas ou clique no botão abaixo.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Arraste e solte uma imagem aqui ou clique no botão abaixo e escolha uma imagem para carregar",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Clique no botão \"Adicionar pergunta\" abaixo para começar a criar seu formulário.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Seu formulário está vazio",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Seu formulário está vazio",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Arraste um elemento da caixa de ferramentas ou clique no botão abaixo.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Arraste um elemento da caixa de ferramentas ou clique no botão abaixo.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Sem visualização",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Sem visualização",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "A pesquisa não contém nenhum elemento visível.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "A pesquisa não contém nenhum elemento visível.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Sem strings para traduzir",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Sem strings para traduzir",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Adicione elementos ao seu formulário ou altere o filtro de strings na barra de ferramentas.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Adicione elementos ao seu formulário ou altere o filtro de strings na barra de ferramentas.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Clique no botão \"Adicionar pergunta\" abaixo para adicionar um novo elemento à página.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Clique no botão \"Adicionar pergunta\" abaixo para adicionar um novo elemento ao painel.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Clique no botão abaixo e escolha uma imagem para carregar",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Escolha a imagem",
    // "Add {0}"
    addNewTypeQuestion: "Adicionar {0}", // {0} is localizable question type
    // "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Item ",
    // [Auto-translated] "Select a file"
    selectFile: "Selecione um arquivo",
    // [Auto-translated] "Remove the file"
    removeFile: "Remover o arquivo",
    lg: {
      // "Add New Rule"
      addNewItem: "Adicionar nova regra",
      // "Create a rule to customize the flow of the survey."
      empty_tab: "Crie uma regra para personalizar o fluxo do questionário.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Sem regras lógicas",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Sem regras lógicas",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Crie uma regra para personalizar o fluxo da pesquisa.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Crie uma regra para personalizar o fluxo da pesquisa.",
      // "Show/hide page"
      page_visibilityName: "Mostrar (esconder) página",
      // "Enable/disable page"
      page_enableName: "Ativar (desativar) página",
      // [Auto-translated] "Make page required"
      page_requireName: "Tornar a página obrigatória",
      // "Show/hide panel"
      panel_visibilityName: "Mostrar (esconder) painel",
      // "Enable/disable panel"
      panel_enableName: "Ativar (desativar) painel",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Tornar o painel necessário",
      // "Show/hide question"
      question_visibilityName: "Mostrar (esconder) questão",
      // "Enable/disable question"
      question_enableName: "Ativar (desativar) questão",
      // "Make question required"
      question_requireName: "Tornar a pergunta obrigatória",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Redefinir o valor da pergunta",
      // [Auto-translated] "Set question value"
      question_setValueName: "Definir o valor da pergunta",
      // "Show/hide column"
      column_visibilityName: "Mostrar (esconder) coluna",
      // "Enable/disable column"
      column_enableName: "Ativar (desativar) coluna",
      // "Make column required"
      column_requireName: "Tornar a coluna obrigatória",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Redefinir o valor da coluna",
      // [Auto-translated] "Set column value"
      column_setValueName: "Definir valor de coluna",
      // "Complete survey"
      trigger_completeName: "Completar questionário",
      // "Set answer"
      trigger_setvalueName: "Definir resposta",
      // "Copy answer"
      trigger_copyvalueName: "Copiar resposta",
      // "Skip to question"
      trigger_skipName: "Pular para a pergunta",
      // "Run expression"
      trigger_runExpressionName: "Executar expressão",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Definir marcação de página de \"Questionário Completo\"",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Torne a página visível quando a expressão lógica estiver ativa. Caso contrário, mantenha-o invisível.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Torne o painel visível quando a expressão lógica estiver ativa. Caso contrário, mantenha-o invisível.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Faça com que o painel e todos os elementos dentro dele sejam ativos quando a expressão lógica estiver ativa. Caso contrário, mantenha-o invisível.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Torne a pergunta visível quando a expressão lógica estiver ativa. Caso contrário, mantenha-a invisível.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Ative a pergunta quando a expressão lógica estiver ativa. Caso contrário, mantenha-a invisível.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "A pergunta torna-se obrigatória quando a expressão lógica estiver ativa.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Quando a expressão lógica estiver ativa, a pesquisa será concluída e o utilizador verá a 'Página de Agradecimento'.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Quando os valores da pergunta, que são usados na expressão lógica, são alterados e a expressão lógica fica ativa, então o valor é definido para a pergunta seleccionada.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Quando os valores das perguntas, que são usados na expressão lógica, são alterados e a expressão lógica fica ativa, então o valor de uma pergunta seleccionada é copiado para outra pergunta seleccionada.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Quando a expressão lógica volta a ser ativa, então o questionário salta para / focaliza a pergunta seleccionada.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Quando a expressão lógica volta a ser ativaa, a expressão personalizada é executada. Opcionalmente, pode definir o resultado desta expressão para a pergunta seleccionada",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Se a expressão lógica estiver ativa, então o texto padrão para a 'Página de agradecimento' é alterado para a dada.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Quando a expressão: '{0}' volta a ficar ativa", // {0} - the expression
      // "New rule"
      itemEmptyExpressionText: "Nova regra",
      // "make page {0} visible"
      page_visibilityText: "tornar a página {0} visível", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "tornar painel {0} visível", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "tornar painel {0} ativa", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "torna questão {0} visível", // {0} question name
      // "make question {0} enable"
      question_enableText: "tornar questão {0} ativa", // {0} question name
      // "make question {0} required"
      question_requireText: "tornar questão {0} obrigatória", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "redefinir valor da pergunta: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "atribuir valor: {1} à pergunta: {0}", // {0} question name and {1} setValueExpression
      // "make column {0} of question {1} visible"
      column_visibilityText: "tornar coluna {0} da questão {1} visível", // {0} column name, {1} question name
      // "make column {0} of question {1} enable"
      column_enableText: "tornar coluna {0} da questão {1} ativa", // {0} column name, {1} question name
      // "make column {0} of question {1} required"
      column_requireText: "torna coluna {0} da questão {1} obrigatória", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Redefinir o valor da célula para a coluna: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Atribuir valor de célula: {1} à coluna: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Uma expressão cujo resultado será atribuído à pergunta de destino.",
      // "survey becomes completed"
      trigger_completeText: "o questionário fica completo",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "Colocar em questão: {0} valor {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "valor claro da pergunta: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Copiar a questão: {0} valor da questão {1}", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "pular para a questão do questionário {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "executar expressão: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " e colocar seu resultado em questão: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "mostrar texto costumizado para a 'página de agradecimento'.",
      // "All Questions"
      showAllQuestions: "Todas as Questões",
      // "All Action Types"
      showAllActionTypes: "Todos os Tipos de Questões",
      // "Condition(s)"
      conditions: "Condição(ões)",
      // "Action(s)"
      actions: "Ação(ões)",
      // "Define condition(s)"
      expressionEditorTitle: "Definir condição(ões)",
      // "Define action(s)"
      actionsEditorTitle: "Definir ação(ões)",
      // "Delete Action"
      deleteAction: "Eliminar Ação",
      // "Add Action"
      addNewAction: "Adicionar Ação",
      // "Select action..."
      selectedActionCaption: "Selecionar Ação...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "A expressão lógica está vazia ou é inválida. Por favor corrija.",
      // "Please add at least one action."
      noActionError: "Por favor, adicione pelo menos uma ação.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Por favor, corrija os problemas nas sua(s) ação(ões).",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "As regras lógicas estão incompletas",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Você não concluiu algumas das regras lógicas. Se você sair da guia agora, as alterações serão perdidas. Você ainda deseja sair da guia sem concluir as alterações?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Sim",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Não, quero completar as regras"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Nome do painel",
      // [Auto-translated] "Panel title"
      title: "Título do painel",
      // [Auto-translated] "Panel description"
      description: "Descrição do painel",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Tornar o painel visível se",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Tornar o painel obrigatório se",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Ordem das perguntas no painel",
      // [Auto-translated] "Move the panel to page"
      page: "Mover o painel para a página",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Exibir o painel em uma nova linha",
      // [Auto-translated] "Panel collapse state"
      state: "Estado de recolhimento do painel",
      // [Auto-translated] "Inline panel width"
      width: "Largura do painel embutido",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Largura mínima do painel",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Largura máxima do painel",
      // [Auto-translated] "Number this panel"
      showNumber: "Numerar este painel"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Largura efetiva, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Largura do título da pergunta, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Nome do painel",
      // [Auto-translated] "Panel title"
      title: "Título do painel",
      // [Auto-translated] "Panel description"
      description: "Descrição do painel",
      // [Auto-translated] "Entry display mode"
      displayMode: "Modo de exibição de entrada",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Tornar o painel visível se",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Tornar o painel obrigatório se",
      // [Auto-translated] "Move the panel to page"
      page: "Mover o painel para a página",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Exibir o painel em uma nova linha",
      // [Auto-translated] "Panel collapse state"
      state: "Estado de recolhimento do painel",
      // [Auto-translated] "Inline panel width"
      width: "Largura do painel embutido",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Largura mínima do painel",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Largura máxima do painel",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Confirmar remoção de entrada",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Padrão de descrição de entrada",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Padrão de título de entrada",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Texto vazio do painel",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Padrão de título de guia",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Espaço reservado para título da guia",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Tornar uma entrada individual visível se",
      // [Auto-translated] "Number the panel"
      showNumber: "Numerar o painel",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Alinhamento do título do painel",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Alinhamento da descrição do painel",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Alinhamento do título da pergunta",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Largura do título da pergunta",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Alinhamento da mensagem de erro",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Novo local de entrada",
      // [Auto-translated] "Show the progress bar"
      showRangeInProgress: "Mostrar a barra de progresso",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Evite respostas duplicadas na seguinte pergunta"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Nome da pergunta",
      // [Auto-translated] "Question title"
      title: "Título da pergunta",
      // [Auto-translated] "Question description"
      description: "Descrição da pergunta",
      // [Auto-translated] "Show the title and description"
      showTitle: "Mostrar o título e a descrição",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Torne a pergunta visível se",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Faça a pergunta obrigatória se",
      // [Auto-translated] "Move the question to page"
      page: "Mover a pergunta para a página",
      // [Auto-translated] "Question box collapse state"
      state: "Estado de recolhimento da caixa de pergunta",
      // [Auto-translated] "Number this question"
      showNumber: "Numere esta pergunta",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Alinhamento do título da pergunta",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Alinhamento da descrição da pergunta",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Alinhamento da mensagem de erro",
      // [Auto-translated] "Increase the inner indent"
      indent: "Aumentar o recuo interno",
      // [Auto-translated] "Inline question width"
      width: "Largura da pergunta embutida",
      // [Auto-translated] "Minimum question width"
      minWidth: "Largura mínima da pergunta",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Largura máxima da pergunta",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Atualizar valor do campo de entrada"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Largura da área de assinatura",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Altura da área de assinatura",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Dimensionar automaticamente a área de assinatura",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Mostrar um espaço reservado na área de assinatura",
      // [Auto-translated] "Placeholder text"
      placeholder: "Texto de espaço reservado",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Texto de espaço reservado no modo somente leitura ou de visualização",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Mostrar o botão Limpar na área de assinatura",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Largura mínima do curso",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Largura máxima do curso",
      // [Auto-translated] "Stroke color"
      penColor: "Cor do traçado"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Altura do campo de entrada (em linhas)"
    },
    // "Question numbering"
    showQuestionNumbers: "Mostrar número das perguntas",
    // "Question indexing type"
    questionStartIndex: "Index das perguntas (1, 2 or 'A', 'a')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Nome da expressão",
      // [Auto-translated] "Expression title"
      title: "Título da expressão",
      // [Auto-translated] "Expression description"
      description: "Descrição da expressão",
      // [Auto-translated] "Expression"
      expression: "Expressão"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Expressão"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Expressão"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Título da pesquisa",
      // [Auto-translated] "Survey description"
      description: "Descrição da pesquisa",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Tornar a pesquisa somente leitura"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Nome da página",
      // [Auto-translated] "Page title"
      title: "Título da página",
      // [Auto-translated] "Page description"
      description: "Descrição da página",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Tornar a página visível se",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Tornar a página obrigatória se",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Limite de tempo para completar a página",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Ordem das perguntas na página"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Nome da coluna",
      // [Auto-translated] "Column title"
      title: "Título da coluna",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Impedir respostas duplicadas",
      // [Auto-translated] "Column width"
      width: "Largura da coluna",
      // [Auto-translated] "Minimum column width"
      minWidth: "Largura mínima da coluna",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Altura do campo de entrada (em linhas)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Tornar a coluna visível se",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Tornar a coluna obrigatória se",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Cada opção em uma coluna separada"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Limpar outros na mesma linha"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Nome",
      // [Auto-translated] "Title"
      title: "Título"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Salvar valor mascarado nos resultados da pesquisa"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Padrão de valor"
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
      thousandsSeparator: "Separador de milhares",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Separador decimal",
      // [Auto-translated] "Value precision"
      precision: "Precisão de valor",
      // [Auto-translated] "Minimum value"
      min: "Valor mínimo",
      // [Auto-translated] "Maximum value"
      max: "Valor máximo"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Prefixo da moeda",
      // [Auto-translated] "Currency suffix"
      suffix: "Sufixo de moeda"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Limpar outros quando selecionado",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Exigir que o usuário insira um comentário",
    // "Display area height"
    imageHeight: "Altura da imagem",
    // "Display area width"
    imageWidth: "Largura da imagem",
    // "Join identifier"
    valueName: "Nome do valor",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Valor de exibição padrão para textos dinâmicos",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Alinhamento de rótulos",
    // "Input field width (in characters)"
    size: "Tamanho de entrada (em caracteres)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Alinhamento da mensagem de erro da célula",
    // [Auto-translated] "Enabled"
    enabled: "Habilitado",
    // [Auto-translated] "Disabled"
    disabled: "Desactivado",
    // [Auto-translated] "Inherit"
    inherit: "Herdar",
    // "Apply"
    apply: "Aplicar",
    // "OK"
    ok: "OK",
    // "Save"
    save: "Guardar",
    // "Clear"
    clear: "Limpar",
    // "Save"
    saveTooltip: "Guardar",
    // "Cancel"
    cancel: "Cancelar",
    // "Set"
    set: "Definir",
    // "Reset"
    reset: "Limpar",
    // "Change"
    change: "Modificar",
    // "Refresh"
    refresh: "Recarregar",
    // "Close"
    close: "Fechar",
    // "Delete"
    delete: "Apagar",
    // "Add"
    add: "Adicionar",
    // "Add New"
    addNew: "Adicionar Novo",
    // "Click to add an item..."
    addItem: "Clique para adicionar o item...",
    // "Click to remove the item..."
    removeItem: "Clique para remover o item...",
    // "Drag the item"
    dragItem: "Arraste o item",
    // "Other"
    addOther: "Outro",
    // "Select All"
    addSelectAll: "Selecionar Todos",
    // "None"
    addNone: "Nenhum",
    // "Remove All"
    removeAll: "Remover Todos",
    // "Edit"
    edit: "Editar",
    // "Return without saving"
    back: "Retornar sem guardar",
    // "Return without saving"
    backTooltip: "Sair sem guardar",
    // "Save and return"
    saveAndBack: "Sair e retornar",
    // "Save and return"
    saveAndBackTooltip: "Guardar e retornar",
    // "Done"
    doneEditing: "Terminar",
    // "Edit Choices"
    editChoices: "Editar Opções",
    // "Show Choices"
    showChoices: "Mostrar Opções",
    // "Move"
    move: "Mover",
    // "<empty>"
    empty: "<vazio>",
    // "Value is empty"
    emptyValue: "Valor vazio",
    // "Manual Entry"
    fastEntry: "Entrada Rápida",
    // "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Valor '{0}' não é o único",
    // "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Limite o número de itens de {0} a {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Por favor, insira pelo menos {0} itens",
    // "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Pode definir dados no seguinte formato:\nvalor1|texto\nvalor2",
    // "Form Entry"
    formEntry: "Entrada com formulário",
    // "Test the service"
    testService: "Testar o serviço",
    // "Please select the element"
    itemSelectorEmpty: "Selecione o elemento",
    // "Please select the action"
    conditionActionEmpty: "Selecione a ação",
    // "Select a question..."
    conditionSelectQuestion: "Selecionar pergunta...",
    // "Select a page..."
    conditionSelectPage: "Selecione a página...",
    // "Select a panel..."
    conditionSelectPanel: "Selecione o painel...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Por favor, entre/selecione o valor",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Pressione ctrl+space para autocompletar",
    // "Current row"
    aceEditorRowTitle: "Linha atual",
    // "Current panel"
    aceEditorPanelTitle: "Painel atual",
    // "For more details please check the documentation"
    showMore: "Para mais detalhes, por favor visite a documentação",
    // "Available questions"
    assistantTitle: "Perguntas disponíveis:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Deve haver ao menos uma coluna ou linha",
    // "Review before submit"
    showPreviewBeforeComplete: "Visualize as respostas antes de submeter o questionário",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Habilitado por uma condição",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Repor",
    // "Please enter a value"
    propertyIsEmpty: "Por favor informe um valor na propriedade",
    // "Please enter a unique value"
    propertyIsNoUnique: "Insira um valor exclusivo.",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Insira um nome único",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Não use palavras reservadas: \"item\", \"escolha\", \"painel\", \"linha\".",
    // "You don't have any items yet"
    listIsEmpty: "Nenhum item foi adicionado ainda",
    // "You don't have any choices yet"
    "listIsEmpty@choices": "Nenhuma opção foi adicionada ainda",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Você ainda não tem nenhuma coluna",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Você ainda não tem colunas de layout",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Você ainda não tem nenhuma linha",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Você ainda não tem nenhuma regra de validação",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Você ainda não tem nenhuma variável personalizada",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Você ainda não tem nenhum gatilho",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Você ainda não tem nenhum link",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Você ainda não tem páginas",
    // "Add new choice"
    "addNew@choices": "Adicionar uma opção",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Adicionar nova coluna",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Adicionar nova linha",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Adicionar nova regra",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Adicionar nova variável",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Adicionar novo gatilho",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Adicionar novo URL",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Adicionar nova página",
    // "Expression is empty"
    expressionIsEmpty: "Expressão está vazia",
    // "Value"
    value: "Valor",
    // "Text"
    text: "Texto",
    // "Row ID"
    rowid: "ID da Linha",
    // "Image or video file URL"
    imageLink: "Link da Imagem",
    // "Edit column: {0}"
    columnEdit: "Editar coluna: {0}",
    // "Edit item: {0}"
    itemEdit: "Editar item: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Caminho",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL do serviço Web",
      // "Get value to store from the following property"
      valueName: "Obtenha valores do seguinte campo JSON"
    },
    // "Get value to display from the following property"
    titleName: "Nome do título",
    // "Get file URLs from the following property"
    imageLinkName: "Obtenha URLs de imagem do seguinte campo JSON",
    // "Accept empty response"
    allowEmptyResponse: "Permitir resposta vazia",
    // "Title"
    titlePlaceholder: "Título",
    // "Survey Title"
    surveyTitlePlaceholder: "Título do Questionário",
    // "Page {num}"
    pageTitlePlaceholder: "Página {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Página inicial",
    // "Description"
    descriptionPlaceholder: "Descrição",
    // "Description"
    surveyDescriptionPlaceholder: "Descrição",
    // "Description"
    pageDescriptionPlaceholder: "Descrição",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Opções de encapsulamento",
    // "Enable the \"Other\" option"
    showOtherItem: "Tem item 'outros'",
    // "Rename the \"Other\" option"
    otherText: "Texto do item 'outros'",
    // "Enable the \"None\" option"
    showNoneItem: "Permitir a opção Nenhum",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Ative a opção \"Recusar-se a responder\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Ative a opção \"Não sei\"",
    // "Rename the \"None\" option"
    noneText: "texto de opção Nenhum",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Permitir a opção Selecionar tudo",
    // "Rename the \"Select All\" option"
    selectAllText: "texto de opção Selecionar Todos",
    // "Minimum value for auto-generated items"
    choicesMin: "Valor mínimo para itens gerados automaticamente",
    // "Maximum value for auto-generated items"
    choicesMax: "Valor máximo para itens gerados automaticamente",
    // "Step value for auto-generated items"
    choicesStep: "Etapa para itens gerados automaticamente",
    // "Name"
    name: "Nome",
    // "Title"
    title: "Título",
    // "Cell input type"
    cellType: "Tipo de célula",
    // "Column count"
    colCount: "Contagem de células",
    // "Choice order"
    choicesOrder: "Selecione a ordem das alternativas",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Permitir escolhas personalizadas",
    // "Visible"
    visible: "É visível?",
    // "Required"
    isRequired: "É obrigatório?",
    // [Auto-translated] "Mark as required"
    markRequired: "Marcar conforme necessário",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Remover a marca necessária",
    // "Require an answer in each row"
    eachRowRequired: "Exigir resposta para todas as linhas",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Impedir respostas duplicadas em linhas",
    // "Error message for required questions"
    requiredErrorText: "\"Obrigatório\" mensagem de erro",
    // "Display the question on a new line"
    startWithNewLine: "Começa com uma nova linha?",
    // "Rows"
    rows: "Contagem de linhas",
    // "Columns"
    cols: "Colunas",
    // "Placeholder text within input field"
    placeholder: "Texto de referência",
    // "Show preview area"
    showPreview: "Mostra pré-visualização de imagem?",
    // "Store file content in JSON result as text"
    storeDataAsText: "Gravar conteúdo de arquivo no resultado JSON como texto",
    // "Maximum file size (in bytes)"
    maxSize: "Tamanho máximo de arquivo em bytes",
    // "Row count"
    rowCount: "Contagem de linhas",
    // "Columns layout"
    columnLayout: "Layout das colunas",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Localização do botão de adicionar linha",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Transpor linhas para colunas",
    // "\"Add Row\" button text"
    addRowText: "Texto do botão para adicionar linhas",
    // "\"Remove Row\" button text"
    removeRowText: "Texto do botão para remover linhas",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Padrão de título do campo de entrada",
    // "Minimum rating value"
    rateMin: "Valor mínimo do valor",
    // "Maximum rating value"
    rateMax: "Valor máximo do valor",
    // "Step value"
    rateStep: "Etapa de taxa",
    // "Minimum value label"
    minRateDescription: "Descrição de qualificação mínima",
    // "Maximum value label"
    maxRateDescription: "Descrição de qualificação máxima",
    // "Input type"
    inputType: "Tipo de entrada",
    // "Option placeholder"
    optionsCaption: "Título de opção",
    // "Default Answer"
    defaultValue: "Valor pré-definido",
    // "Default texts"
    cellsDefaultRow: "Texto pré-definido das células",
    // "Edit survey settings"
    surveyEditorTitle: "Editar configurações da pesquisa",
    // "Edit: {0}"
    qEditorTitle: "Editar pergunta: {0}",
    // "Maximum character limit"
    maxLength: "Tamanho máximo",
    // "Build"
    buildExpression: "Construir",
    // "Edit"
    editExpression: "Editar",
    // "and"
    and: "e",
    // "or"
    or: "ou",
    // "Remove"
    remove: "Remover",
    // "Add Condition"
    addCondition: "Adicionar Condição",
    // "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Selecione uma pergunta para começar a configurar as condições.",
    // "If"
    if: "Se",
    // "then"
    then: "em seguida",
    // "Target question"
    setToName: "Questão alvo",
    // "Question to copy answer from"
    fromName: "Questão para copiar a resposta de",
    // "Question to skip to"
    gotoName: "Questão para pular para",
    // "Rule is incorrect"
    ruleIsNotSet: "Regra está incorreta",
    // "Add to the survey results"
    includeIntoResult: "Incluir nos resultados da pesquisa",
    // "Make the title and description visible"
    showTitle: "Mostrar/ocultar título",
    // "Expand/collapse title"
    expandCollapseTitle: "Expandir/contrair título",
    // "Select a survey language"
    locale: "Idioma pré-definido",
    // "Select device type"
    simulator: "Selecione o tipo de dispositivo",
    // "Switch to landscape orientation"
    landscapeOrientation: "Alternar para orientação paisagem",
    // "Switch to portrait orientation"
    portraitOrientation: "Altrar para orientação de moldura",
    // "Clear hidden question values"
    clearInvisibleValues: "Limpar valores invisíveis",
    // "Limit to one response"
    cookieName: "Nome do cookie (para desativar rode a pesquisa duas vezes localmente)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Enviar resultado da pesquisa na página seguinte",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Armazenar 'outros' valores em um campo separado",
    // "Show page titles"
    showPageTitles: "Mostrar título da página",
    // "Show page numbers"
    showPageNumbers: "Mostrar número da página",
    // "\"Previous Page\" button text"
    pagePrevText: "Texto para botão de página anterior",
    // "\"Next Page\" button text"
    pageNextText: "Texto para botão de página seguinte",
    // "\"Complete Survey\" button text"
    completeText: "Texto para botão de completar",
    // "\"Review Answers\" button text"
    previewText: "Pré-visualizar o texto do botão Responder",
    // "\"Edit Answer\" button text"
    editText: "Editar o texto do botão Responder Answer button text",
    // "\"Start Survey\" button text"
    startSurveyText: "Texto para botão de começar",
    // "Show navigation buttons"
    showNavigationButtons: "Mostrar botões de navegação (navegação default)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Alinhamento dos botões de navegação",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Mostrar botão de voltar (usuário pode retornar para página anterior)",
    // "First page is a start page"
    firstPageIsStartPage: "Primeira página da pesquisa é a página de início.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Mostrar a página de conclusão no final (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Ao responder todas as perguntas, ir automaticamente para a próxima página",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Preencha o questionário automaticamente",
    // "Show the progress bar"
    showProgressBar: "Mostrar barra de progresso",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Alinhamento da barra de progresso",
    // "Question title alignment"
    questionTitleLocation: "Localização do título da pergunta",
    // "Question title width"
    questionTitleWidth: "Largura do título da pergunta",
    // "Required symbol(s)"
    requiredMark: "Símbolo(s) para perguntas obrigatórias",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Template do título da pergunta, default é: '{no}. {obrigatório} {título}'",
    // "Error message alignment"
    questionErrorLocation: "Localização do erro da pergunta",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Focar automaticamente na primeira pergunta ao trocar de página",
    // "Question order"
    questionOrder: "Ordenar elementos na página",
    // "Time limit to complete the survey"
    timeLimit: "Tempo máximo para finalizar pesquisa",
    // "Time limit to complete one page"
    timeLimitPerPage: "Tempo máximo para finalizar página da pesquisa",
    // [Auto-translated] "Use a timer"
    showTimer: "Use um cronômetro",
    // "Timer alignment"
    timerLocation: "Mostrar o painel de cronômetro",
    // "Timer mode"
    timerInfoMode: "Mostrar painel de modo de cronômetro",
    // "Panel display mode"
    renderMode: "Modo de renderização",
    // "Enable entry addition"
    allowAddPanel: "Permitir adicionar painel",
    // "Enable entry removal"
    allowRemovePanel: "Permitir remover painel",
    // "\"Add Entry\" button text"
    addPanelText: "Texto de adicionar painel",
    // "\"Remove Entry\" button text"
    removePanelText: "Texto de remover painel",
    // "Show all elements on one page"
    isSinglePage: "Mostrar todos elementos em uma página",
    // "HTML markup"
    html: "HTML markup",
    // "Answer"
    setValue: "Responder",
    // "Storage format"
    dataFormat: "Formato de imagem",
    // "Enable row addition"
    allowAddRows: "Permitir adicionar linhas",
    // "Enable row removal"
    allowRemoveRows: "Permitir remover linhas",
    // "Enable row reordering"
    allowRowReorder: "Permitir arrastar e soltar linha",
    // "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Não se aplica se especificar a largura ou altura exata da imagem.",
    // "Minimum display area width"
    minImageWidth: "Largura mínima da imagem",
    // "Maximum display area width"
    maxImageWidth: "Largura máxima da imagem",
    // "Minimum display area height"
    minImageHeight: "Altura mínima da imagem",
    // "Maximum display area height"
    maxImageHeight: "Altura máxima da imagem",
    // "Minimum value"
    minValue: "Valor mínimo",
    // "Maximum value"
    maxValue: "Valor máximo.",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Diferencia maiúsculas de minúsculas",
    // "Minimum length (in characters)"
    minLength: "Comprimento mínimo (em caracteres)",
    // "Allow digits"
    allowDigits: "Permitir dígitos",
    // "Minimum count"
    minCount: "Contagem mínima",
    // "Maximum count"
    maxCount: "Contagem máxima",
    // "Regular expression"
    regex: "Expressão regular",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Mensagem de validação",
      // [Auto-translated] "Validation expression"
      expression: "Expressão de validação",
      // [Auto-translated] "Notification type"
      notificationType: "Tipo de notificação",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Comprimento máximo (em caracteres)"
    },
    // "Total row header"
    totalText: "Texto total da linha",
    // "Aggregation method"
    totalType: "Tipo total",
    // "Total value expression"
    totalExpression: "Expressão total",
    // "Total value display format"
    totalDisplayStyle: "Total value display style",
    // "Currency"
    totalCurrency: "Moeda",
    // "Formatted string"
    totalFormat: "String formatada",
    // "Survey logo"
    logo: "Logo (URL ou string codificada em base64)",
    // "Survey layout"
    questionsOnPageMode: "Estrutura de questionário",
    // "Restrict answer length"
    maxTextLength: "Tamanho máximo da resposta (em caracteres)",
    // "Restrict comment length"
    maxCommentLength: "Tamanho máximo do comentário (em caracteres)",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Altura da área de comentário (em linhas)",
    // "Auto-expand text areas"
    autoGrowComment: "Expanda automaticamente a área de comentários, se necessário",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Permitir que os usuários redimensionem áreas de texto",
    // "Update input field values"
    textUpdateMode: "Atualizar valor da pergunta de texto",
    // [Auto-translated] "Input mask type"
    maskType: "Tipo de máscara de entrada",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "Defina o foco na primeira resposta inválida",
    // "Run validation"
    checkErrorsMode: "Executar validação",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Validar campos vazios em caso de perda de foco",
    // "Redirect to an external link after submission"
    navigateToUrl: "Navegar para URL",
    // "Dynamic external link"
    navigateToUrlOnCondition: "URL Dinamico",
    // "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Marcação para mostrar se o utilizador já preencheu este questionário",
    // "\"Thank You\" page markup"
    completedHtml: "Marcação de página completa do questionário",
    // "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Marcação de página completa de questionário dinâmico",
    // "Markup to show while survey model is loading"
    loadingHtml: "Marcação para mostrar enquanto o modelo de questionário está carregando",
    // "Comment area text"
    commentText: "Texto da área de comentários",
    // "Autocomplete type"
    autocomplete: "Tipo de preenchimento automático",
    // "Label for \"True\""
    labelTrue: "\"Verdadeiro\" rótulo",
    // "Label for \"False\""
    labelFalse: "\"Falso\" rótulo",
    // "Show the Clear button"
    allowClear: "Mostrar o botão Limpar",
    // [Auto-translated] "Search Mode"
    searchMode: "Modo de pesquisa",
    // "Display format"
    displayStyle: "Estilo de exibição de valor",
    // "Formatted string"
    format: "String formatada",
    // "Maximum fractional digits"
    maximumFractionDigits: "Máximo de dígitos fracionários",
    // "Minimum fractional digits"
    minimumFractionDigits: "Mínimo de dígitos fracionários",
    // "Display grouping separators"
    useGrouping: "Display grouping separators",
    // "Enable multiple file upload"
    allowMultiple: "Permitir vários arquivos",
    // "Preview uploaded images"
    allowImagesPreview: "Pré-visualizar imagens",
    // "Accepted file types"
    acceptedTypes: "Tipos de arquivo aceites",
    // "Wait for upload to complete"
    waitForUpload: "Aguarde a conclusão do upload",
    // "Confirm file deletion"
    needConfirmRemoveFile: "Confirme a eliminação do ficheiro",
    // "Row details alignment"
    detailPanelMode: "Localização do painel de detalhes",
    // "Minimum row count"
    minRowCount: "Contagem mínima de linhas",
    // "Maximum row count"
    maxRowCount: "Contagem máxima de linhas",
    // "Confirm row removal"
    confirmDelete: "Confirme a eliminação da linha",
    // "Confirmation message"
    confirmDeleteText: "Mensagem de confirmação",
    // "Initial number of entries"
    panelCount: "Contagem inicial do painel",
    // "Minimum number of entries"
    minPanelCount: "Contagem mínima de painéis",
    // "Maximum number of entries"
    maxPanelCount: "Contagem máxima de painéis",
    // "Initial entry state"
    panelsState: "Estado de expansão do painel interno",
    // "\"Previous Entry\" button text"
    prevPanelText: "Dica de ferramenta do botão do painel anterior",
    // "\"Next Entry\" button text"
    nextPanelText: "Dica de ferramenta do botão do painel seguinte",
    // "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Remover localização do botão do painel",
    // "Hide the question if it has no rows"
    hideIfRowsEmpty: "Oculte a pergunta se não houver linhas",
    // "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Ocultar colunas se não houver linhas",
    // "Custom rating values"
    rateValues: "Valores de taxa personalizados",
    // [Auto-translated] "Rating count"
    rateCount: "Contagem de classificação",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Configuração de classificação",
    slider: {
      // [Auto-translated] "Min value"
      min: "Valor mínimo",
      // [Auto-translated] "Max value"
      max: "Valor máximo",
      // [Auto-translated] "Step value"
      step: "Valor da etapa",
      // [Auto-translated] "Show scale labels"
      showLabels: "Mostrar rótulos de escala",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Mostrar dicas de ferramentas",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Permitir o cruzamento do polegar",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Número de rótulos gerados automaticamente",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Expressão de valor mínimo",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Expressão de valor máximo",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Configuração de rótulos de escala",
      // [Auto-translated] "Slider type"
      sliderType: "Tipo de controle deslizante",
      // [Auto-translated] "Min range length"
      minRangeLength: "Comprimento mínimo da faixa",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Comprimento máximo da faixa",
      // [Auto-translated] "Custom labels"
      customLabels: "Rótulos personalizados",
      // [Auto-translated] "Label format"
      labelFormat: "Formato do rótulo",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Formato da dica de ferramenta"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Altura da imagem",
      // [Auto-translated] "Image width"
      imageWidth: "Largura da imagem"
    },
    // "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Oculte a pergunta se ela não contiver opções",
    // "Minimum width"
    minWidth: "Largura mínima (em valores aceitos pelo CSS)",
    // "Maximum width"
    maxWidth: "Largura máxima (em valores aceitos pelo CSS)",
    // "Width"
    width: "Largura (em valores aceitos pelo CSS)",
    // "Show column headers"
    showHeader: "Mostrar cabeçalhos de coluna",
    // "Show horizontal scrollbar"
    horizontalScroll: "Mostrar barra de scroll horizontal",
    // "Minimum column width"
    columnMinWidth: "Largura mínima da coluna (em valores aceitos pelo CSS)",
    // "Row header width"
    rowTitleWidth: "Largura do cabeçalho da linha (em valores aceitos por CSS)",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"Verdadeiro\" valor",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"Falso\" valor",
    // "\"Value is below minimum\" error message"
    minErrorText: "\"O valor está abaixo do mínimo\" mensagem de erro",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"O valor excede o máximo\" mensagem de erro",
    // "\"Empty comment\" error message"
    otherErrorText: "\"Comentário vazio\" mensagem de erro",
    // "Error message for duplicate responses"
    keyDuplicationError: "\"Valor de chave não exclusivo\" mensagem de erro",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Opções mínimas para selecionar",
    // "Maximum choices to select"
    maxSelectedChoices: "Máximo de escolhas selecionadas",
    // "Logo width"
    logoWidth: "Largura do logotipo (em valores aceitos pelo CSS)",
    // "Logo height"
    logoHeight: "Altura do logotipo (em valores aceitos pelo CSS)",
    // "Read-only"
    readOnly: "Apenas para leitura",
    // "Disable the read-only mode if"
    enableIf: "Editável se",
    // "\"No rows\" message"
    noRowsText: "\"Sem linhas\" mensagem",
    // "Separate special choices"
    separateSpecialChoices: "Escolhas especiais separadas (Nenhuma, Outra, Selecionar Tudo)",
    // "Copy choices from the following question"
    choicesFromQuestion: "Copie as opções da seguinte pergunta",
    // "Which choice options to copy"
    choicesFromQuestionMode: "Quais as opções pretendem copiar?",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Use valores da seguinte coluna de matriz ou pergunta de painel como IDs de escolha",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Use valores da seguinte coluna de matriz ou pergunta de painel como textos de escolha",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Exibir títulos de página na barra de progresso",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Exibir números de página na barra de progresso",
    // "Add a comment box"
    showCommentArea: "Mostrar a área de comentários",
    // "Placeholder text for the comment box"
    commentPlaceholder: "Espaço reservado para área de comentários",
    // "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Exibir descrições de taxa como valores extremos",
    // "Row order"
    rowOrder: "Ordem das linhas",
    // "Column layout"
    columnsLayout: "Disposição da coluna",
    // "Nested column count"
    columnColCount: "Contagem de colunas aninhadas",
    // "Correct Answer"
    correctAnswer: "Resposta correta",
    // "Default Values"
    defaultPanelValue: "Valores pré-definidos",
    // "Cell Texts"
    cells: "Textos de Célula",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Selecione um arquivo ou cole um link de arquivo...",
    // "Prevent duplicate responses in the following column"
    keyName: "Coluna chave",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Torne a opção visível se",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Torne a opção selecionável se"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Tornar a linha visível se",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Tornar a linha editável se"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Texto alternativo"
    },
    // "Logo alignment"
    logoPosition: "Posição do logo",
    // "Add logo..."
    addLogo: "Adicionar logo...",
    // "Change logo..."
    changeLogo: "Alterae logo...",
    logoPositions: {
      // "Remove logo"
      none: "Remover logo",
      // "Left"
      left: "Esquerda",
      // "Right"
      right: "Direita",
      // "On the top"
      top: "No cabeçalho",
      // "In the bottom"
      bottom: "No rodapé"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Modo de visualização",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Ativar layout de grade",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Colunas de grade",
    // [Auto-translated] "Mask settings"
    maskSettings: "Configurações de máscara",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Detalhes da linha Alinhamento da mensagem de erro",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Layout do painel"
      },
      // "General"
      general: "Geral",
      // "Options"
      fileOptions: "Opções",
      // "HTML Editor"
      html: "Editor Html",
      // "Columns"
      columns: "Colunas",
      // "Rows"
      rows: "Linhas",
      // "Choice Options"
      choices: "Opções",
      // "Items"
      items: "Itens",
      // "Visible If"
      visibleIf: "Visível se",
      // "Editable If"
      enableIf: "Habilitar se",
      // "Required If"
      requiredIf: "Obrigatório se",
      // "Rating Values"
      rateValues: "Valores de qualificação",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Configurações do controle deslizante",
      // "Choices from a Web Service"
      choicesByUrl: "Opções com origem na Web",
      // "Default Choices"
      matrixChoices: "Opções padrão",
      // "Text Inputs"
      multipleTextItems: "Entradas de texto",
      // "Numbering"
      numbering: "Numeração",
      // "Validators"
      validators: "Validadores",
      // "Navigation"
      navigation: "Navegação",
      // "Question Settings"
      question: "Pergunta",
      // "Pages"
      pages: "Páginas",
      // "Quiz Mode"
      timer: "Cronômetro/Quiz",
      // "Calculated Values"
      calculatedValues: "Valores Calculados",
      // "Triggers"
      triggers: "Triggers",
      // "Title template"
      templateTitle: "Título do template",
      // "Totals"
      totals: "Totais",
      // "Conditions"
      logic: "Lógica",
      // [Auto-translated] "Input Mask Settings"
      mask: "Configurações da máscara de entrada",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Layout do painel",
        // [Auto-translated] "Layout"
        question: "Layout",
        // [Auto-translated] "Layout"
        base: "Layout"
      },
      // "Data"
      data: "Data",
      // "Validation"
      validation: "Validação",
      // "Individual Cell Texts"
      cells: "Texto de Células",
      // "\"Thank You\" Page"
      showOnCompleted: "Questionário Completo",
      // "Logo in the Survey Header"
      logo: "Logo no Título de Questionário",
      // "Slider"
      slider: "Slider",
      // "Expression"
      expression: "Expressão",
      // [Auto-translated] "Question Settings"
      questionSettings: "Configurações da pergunta",
      // "Header"
      header: "Cabeçalho",
      // "Background"
      background: "Fundo",
      // "Appearance"
      appearance: "Aparência",
      // [Auto-translated] "Accent colors"
      accentColors: "Cores de destaque",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Fundo da superfície",
      // [Auto-translated] "Scaling"
      scaling: "Escala",
      // "Others"
      others: "Outros"
    },
    // "Edit property '{0}'"
    editProperty: "Editar propriedade '{0}'",
    // "Items"
    items: "Itens",
    // "Make choices visible if"
    choicesVisibleIf: "Escolhas estão visiveis se",
    // "Make choices selectable if"
    choicesEnableIf: "Escolhas são selecionáveis se",
    // "Make columns visible if"
    columnsEnableIf: "Colunas estão visiveis se",
    // "Make rows visible if"
    rowsEnableIf: "Linhas estão visiveis se",
    // "Increase the inner indent"
    innerIndent: "Adicionar recuos internos",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Usar respostas da última entrada como padrão",
    // "Please enter a value."
    enterNewValue: "Por favor, informe o valor.",
    // "There are no questions in the survey."
    noquestions: "Não há nenhuma pergunta na pesquisa.",
    // "Please create a trigger"
    createtrigger: "Por favor, crie uma condição",
    // "Press enter button to edit"
    titleKeyboardAdornerTip: "Pressione o botão enter para editar",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Pressione o botão enter para editar o item, pressione o botão delete para excluir o item, pressione alt mais a seta para cima ou a seta para baixo para mover o item",
    // "On "
    triggerOn: "Ligado ",
    // "Make pages visible"
    triggerMakePagesVisible: "Tornar páginas visíveis:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Tornar perguntas visíves:",
    // "Complete the survey if successful."
    triggerCompleteText: "Completar a pesquisa se obtiver êxito.",
    // "The trigger is not set"
    triggerNotSet: "A condição não está definida",
    // "Run if"
    triggerRunIf: "Executar se",
    // "Change value of: "
    triggerSetToName: "Mudar o valor de: ",
    // "Copy value from: "
    triggerFromName: "Copiar valor de: ",
    // "Run this Expression"
    triggerRunExpression: "Rodar essa expressão:",
    // "to: "
    triggerSetValue: "para: ",
    // "Go to the question"
    triggerGotoName: "Ir para a questão",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Não colocar a variável no resultado da pesquisa.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Introdução uma expressão valida",
    // "Type expression here..."
    emptyExpressionPlaceHolder: "Escreva a expressão aqui...",
    // "No file chosen"
    noFile: "Nenhum ficheiro selecionado",
    // "Clear hidden question values"
    clearIfInvisible: "Limpe o valor se a questão for escondida",
    // "Store values in the following property"
    valuePropertyName: "Nome da propriedade do valor",
    // "Enable search-as-you-type"
    searchEnabled: "Ativar pesquisa",
    // "Hide selected items"
    hideSelectedItems: "Escolher os itens selecionados",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Recolher o menu suspenso após a seleção",
    // "Vertical alignment within cells"
    verticalAlign: "Alinhamento vertical",
    // "Alternate row colors"
    alternateRows: "Linhas alternativas",
    // "Make columns visible if"
    columnsVisibleIf: "Colunas estão visíveis se",
    // "Make rows visible if"
    rowsVisibleIf: "As linhas são visíveis se",
    // "Placeholder text for the comment box"
    otherPlaceholder: "Espaço reservado para área de comentários",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Texto de espaço reservado para arquivo local",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Texto de espaço reservado para câmera",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Texto de espaço reservado para arquivo local ou câmera",
    // [Auto-translated] "Rating icon"
    rateType: "Ícone de classificação",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Ex.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Ex.: categorias.ficção",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Ex.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Ex.: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Ex.: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Ex.: 50%",
    // "auto"
    imageHeight_placeholder: "auto",
    // "auto"
    imageWidth_placeholder: "auto",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Ex.: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Tema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Aparência da pergunta",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Plano de fundo e raio do canto",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Plano de fundo e raio do canto",
      // [Auto-translated] "Accent color"
      primaryColor: "Cor de destaque",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Opacidade do painel e da caixa de perguntas",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Opacidade do elemento de entrada",
      // [Auto-translated] "Survey font size"
      fontSize: "Tamanho da fonte da pesquisa",
      // [Auto-translated] "Survey scale factor"
      scale: "Fator de escala da pesquisa",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Raio de canto",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Modo avançado",
      // [Auto-translated] "Title font"
      pageTitle: "Fonte do título",
      // [Auto-translated] "Description font"
      pageDescription: "Fonte da descrição",
      // [Auto-translated] "Title font"
      questionTitle: "Fonte do título",
      // [Auto-translated] "Description font"
      questionDescription: "Fonte da descrição",
      // [Auto-translated] "Font"
      editorFont: "Fonte",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Opacidade", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Família de fontes de levantamento topográfico",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Cor de fundo",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Cores de fundo de destaque",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Cores de destaque em primeiro plano",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Cores da mensagem de erro",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Efeitos de sombra",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Efeitos de sombra",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Cores"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Vista",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Alinhamento do logotipo",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Fonte do título do questionário",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Fonte da descrição da pesquisa",
      // [Auto-translated] "Survey title font"
      headerTitle: "Fonte do título do questionário",
      // [Auto-translated] "Survey description font"
      headerDescription: "Fonte da descrição da pesquisa",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Largura da área de conteúdo",
      // [Auto-translated] "Text width"
      textAreaWidth: "Largura do texto",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Cor de fundo",
      // [Auto-translated] "Background image"
      backgroundImage: "Imagem de fundo",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Opacidade",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Sobrepor",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Alinhamento do logotipo",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Alinhamento do título da pesquisa",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Alinhamento da descrição da pesquisa"
    }
  },
  // Property values
  pv: {
    // "true"
    "true": "verdadeiro",
    // "false"
    "false": "falso",
    // [Auto-translated] "Local file"
    file: "Arquivo local",
    // [Auto-translated] "Camera"
    camera: "Câmera",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Arquivo local ou câmera",
    // "Inherit"
    inherit: "herdar",
    // "Visible"
    show: "mostrar",
    // "Hidden"
    hide: "ocultar",
    // "Inherit"
    default: "padrão",
    // "Initial"
    initial: "inicial",
    // "Random"
    random: "aleatório",
    // "Collapsed"
    collapsed: "colapsado",
    // "Expanded"
    expanded: "expandido",
    // "None"
    none: "nenhum",
    // "Ascending"
    asc: "ascendente",
    // "Descending"
    desc: "descendente",
    // "Indeterminate"
    indeterminate: "indeterminado",
    // [Auto-translated] "Selected"
    selected: "Selecionado",
    // [Auto-translated] "Unselected"
    unselected: "Desmarcado",
    // "decimal"
    decimal: "decimal",
    // "currency"
    currency: "moeda",
    // "percent"
    percent: "percentagem",
    // "First panel is expanded"
    firstExpanded: "primeiro expandido",
    // "Hide question numbers"
    off: "desligado",
    // "List"
    list: "lista",
    // [Auto-translated] "Carousel"
    carousel: "Carrossel",
    // [Auto-translated] "Tabs"
    tab: "Guias",
    // "Panel navigator + Progress bar at the top"
    progressTop: "progresso superior",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "progresso inferior",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "progresso superior inferior",
    // "Horizontal"
    horizontal: "horizontal",
    // "Vertical"
    vertical: "vertical",
    // "Top"
    top: "superior",
    // "Bottom"
    bottom: "inferior",
    // "Top and bottom"
    topBottom: "superior and bottom",
    // "Both"
    both: "Ambos",
    // "Left"
    left: "esquerda",
    // "Right"
    right: "direita",
    // [Auto-translated] "Center"
    center: "Centro",
    // [Auto-translated] "Left and right"
    leftRight: "Esquerda e direita",
    // [Auto-translated] "Middle"
    middle: "Meio",
    // "color"
    color: "cor",
    // "date"
    date: "data",
    // "datetime"
    datetime: "data hora",
    // "datetime-local"
    "datetime-local": "data hora-local",
    // "email"
    email: "e-mail",
    // "month"
    month: "mês",
    // "number"
    number: "número",
    // "password"
    password: "password",
    // "range"
    range: "intervalo",
    // "tel"
    tel: "tel",
    // "text"
    text: "texto",
    // "time"
    time: "tempo",
    // "url"
    url: "url",
    // "week"
    week: "semana",
    // "Hidden"
    hidden: "oculto",
    // "Editable"
    edit: "editar",
    // "Read-only"
    display: "mostrar",
    // [Auto-translated] "Contain"
    contain: "Conter",
    // [Auto-translated] "Cover"
    cover: "Cobrir",
    // [Auto-translated] "Fill"
    fill: "Encher",
    // [Auto-translated] "Next"
    next: "Próximo",
    // [Auto-translated] "Last"
    last: "Último",
    // "Upon survey completion"
    onComplete: "ao completar",
    // "When question gets hidden"
    onHidden: "ao ocultar",
    // "When question or its panel/page gets hidden"
    onHiddenContainer: "Quando a pergunta ou seu painel/página fica oculto",
    clearInvisibleValues: {
      // "Never"
      none: "Nunca"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Nunca"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Botões",
    inputType: {
      // [Auto-translated] "Color"
      color: "Cor",
      // [Auto-translated] "Date"
      date: "Data",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Data e Hora",
      // [Auto-translated] "Email"
      email: "Email",
      // [Auto-translated] "Month"
      month: "Mês",
      // [Auto-translated] "Number"
      number: "Número",
      // [Auto-translated] "Password"
      password: "Senha",
      // [Auto-translated] "Range"
      range: "Gama",
      // [Auto-translated] "Phone Number"
      tel: "Número de telefone",
      // [Auto-translated] "Text"
      text: "Texto",
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
      always: "Sempre",
      // [Auto-translated] "Never"
      never: "Nunca"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Erro",
      // [Auto-translated] "Warning"
      warning: "Aviso",
      // [Auto-translated] "Informational note"
      info: "Nota informativa"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Nome completo",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Prefixo",
      // [Auto-translated] "First Name"
      "given-name": "Nome próprio",
      // [Auto-translated] "Middle Name"
      "additional-name": "Nome do meio",
      // [Auto-translated] "Last Name"
      "family-name": "Apelido",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Sufixo",
      // [Auto-translated] "Nickname"
      nickname: "Apelido",
      // [Auto-translated] "Job Title"
      "organization-title": "Cargo",
      // [Auto-translated] "User Name"
      username: "Nome de usuário",
      // [Auto-translated] "New Password"
      "new-password": "Nova senha",
      // [Auto-translated] "Current Password"
      "current-password": "Senha atual",
      // [Auto-translated] "Organization Name"
      organization: "Nome da organização",
      // [Auto-translated] "Full Street Address"
      "street-address": "Endereço completo",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Linha de endereço 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Linha de endereço 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Linha de endereço 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Endereço de nível 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Endereço de Nível 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Endereço de Nível 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Endereço de Nível 1",
      // [Auto-translated] "Country Code"
      country: "Código do país",
      // [Auto-translated] "Country Name"
      "country-name": "Nome do país",
      // [Auto-translated] "Postal Code"
      "postal-code": "Código postal",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Nome do titular do cartão",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Nome do titular do cartão",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Nome do meio do titular do cartão",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Sobrenome do titular do cartão",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Número do cartão de crédito",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Data de validade",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Mês de Expiração",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Ano de validade",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Código de segurança do cartão",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Tipo de cartão de crédito",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Moeda da transação",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Valor da transação",
      // [Auto-translated] "Preferred Language"
      language: "Idioma preferido",
      // [Auto-translated] "Birthday"
      bday: "Aniversário",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Dia de aniversário",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Mês de aniversário",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Ano de aniversário",
      // [Auto-translated] "Gender"
      sex: "Gênero",
      // [Auto-translated] "Website URL"
      url: "URL do site",
      // [Auto-translated] "Profile Photo"
      photo: "Foto do perfil",
      // [Auto-translated] "Telephone Number"
      tel: "Número telefônico",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Código do país para telefone",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Número de telefone nacional",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Código de área",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Número de telefone local",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Prefixo de telefone local",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Sufixo de telefone local",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Ramal telefônico",
      // [Auto-translated] "Email Address"
      email: "Endereço eletrônico",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protocolo de mensagens instantâneas"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Nenhum",
      // [Auto-translated] "Pattern"
      pattern: "Padrão",
      // [Auto-translated] "Numeric"
      numeric: "Numérico",
      // [Auto-translated] "Date and Time"
      datetime: "Data e hora",
      // [Auto-translated] "Currency"
      currency: "Moeda"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Automático",
      // [Auto-translated] "Left"
      left: "Esquerda",
      // [Auto-translated] "Right"
      right: "Certo"
    },
    // "All"
    all: "todos",
    // "Page"
    page: "página",
    // "Survey"
    survey: "pesquisa",
    // "When switching to the next page"
    onNextPage: "na página seguinte",
    // "After an answer is changed"
    onValueChanged: "ao mudar valor",
    // "Before an answer is changed"
    onValueChanging: "Antes de uma resposta ser alterada",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Estrutura original",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Mostrar todas as perguntas em uma página",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Mostrar uma única pergunta por página",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Mostrar campo de entrada único por página"
    },
    // "No preview"
    noPreview: "Sem pré-visualização",
    // "Show all questions"
    showAllQuestions: "Mostrar todas as questões",
    // "Show answered questions only"
    showAnsweredQuestions: "Mostrar apenas perguntas respondidas",
    // [Auto-translated] "Show all questions"
    allQuestions: "Mostrar todas as perguntas",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Mostrar apenas perguntas respondidas",
    // "Completed pages"
    pages: "Páginas completas",
    // "Answered questions"
    questions: "Questões respondidas",
    // "Answered required questions"
    requiredQuestions: "Perguntas obrigatórias respondidas",
    // "Valid answers"
    correctQuestions: "Respostas válidas",
    // "Completed pages (button UI)"
    buttons: "Páginas concluídas (interface do botão)",
    // "Under the input field"
    underInput: "Sob a entrada",
    // "Under the question title"
    underTitle: "Sob o título",
    // "On lost focus"
    onBlur: "Em desfoque",
    // "While typing"
    onTyping: "Enquanto digita",
    // "Under the row"
    underRow: "Sob a linha",
    // "Under the row, display one section only"
    underRowSingle: "Sob a linha, apenas um painel é visível",
    // "Auto"
    auto: "Automático",
    showNavigationButtons: {
      // "Hidden"
      none: "Escondido"
    },
    timerInfoMode: {
      // "Both"
      combined: "Ambos"
    },
    addRowButtonLocation: {
      // "Based on matrix layout"
      default: "Depende do layout da matriz"
    },
    panelsState: {
      // "Locked"
      default: "Os utilizadores não podem expandir ou recolher painéis",
      // "Collapse all"
      collapsed: "Todos os painéis estão recolhidos",
      // "Expand all"
      expanded: "Todos os painéis estão espandidos",
      // [Auto-translated] "First expanded"
      firstExpanded: "Primeiro expandido"
    },
    widthMode: {
      // "Static"
      static: "Estático",
      // "Responsive"
      responsive: "Responsivo"
    },
    contentMode: {
      // "Image"
      image: "Imagem",
      // "Video"
      video: "Video",
      // "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // "Buttons"
      buttons: "Botões",
      // "Dropdown"
      dropdown: "Suspenso"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Inadimplência",
      // [Auto-translated] "Scale"
      scale: "Escala"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monocromático",
      // [Auto-translated] "Colored"
      colored: "Colorido"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Geração automática",
      // [Auto-translated] "Manual"
      "false": "Manual"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Rótulos",
      // [Auto-translated] "Stars"
      stars: "Estrelas",
      // [Auto-translated] "Smileys"
      smileys: "Smileys"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Trancado"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Numeração automática",
      // [Auto-translated] "Auto-numbering"
      on: "Numeração automática",
      // [Auto-translated] "Reset on each page"
      onPage: "Redefinir em cada página",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Redefinir em cada painel",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Redefinir em cada painel",
      // [Auto-translated] "Recursive numbering"
      recursive: "Numeração recursiva",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Continue na pesquisa",
      // [Auto-translated] "No numbering"
      off: "Sem numeração"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Sob o título da pergunta",
      // [Auto-translated] "Under the input field"
      underInput: "No campo de entrada"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Ao lado das opções",
      // [Auto-translated] "Above choices"
      vertical: "Acima das escolhas"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Moeda",
      // [Auto-translated] "Percentage"
      percent: "Porcentagem",
      // [Auto-translated] "Date"
      date: "Data"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Decimal",
      // [Auto-translated] "Currency"
      currency: "Moeda",
      // [Auto-translated] "Percentage"
      percent: "Porcentagem",
      // [Auto-translated] "Date"
      date: "Data"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Original"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Original"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Início",
      // [Auto-translated] "Bottom"
      bottom: "Fundo",
      // [Auto-translated] "Top and bottom"
      topbottom: "Superior e inferior",
      // [Auto-translated] "Above the header"
      aboveheader: "Acima do cabeçalho",
      // [Auto-translated] "Below the header"
      belowheader: "Abaixo do cabeçalho",
      // [Auto-translated] "Hidden"
      off: "Escondido"
    },
    // [Auto-translated] "Sum"
    sum: "Soma",
    // [Auto-translated] "Count"
    count: "Contar",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Contém",
      // [Auto-translated] "Starts with"
      startsWith: "Começa com"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Automático",
      // [Auto-translated] "Cover"
      cover: "Cobrir",
      // [Auto-translated] "Contain"
      contain: "Conter",
      // [Auto-translated] "Stretch"
      fill: "Esticar",
      // [Auto-translated] "Tile"
      tile: "Telha"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Fixo",
      // [Auto-translated] "Scroll"
      scroll: "Rolar"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Básico",
      // [Auto-translated] "Advanced"
      advanced: "Avançado"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "O mesmo que pesquisa",
      // [Auto-translated] "Same as container"
      container: "Mesmos que o recipiente"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Nenhum",
      // [Auto-translated] "Accent color"
      accentColor: "Cor de destaque",
      // [Auto-translated] "Custom"
      custom: "Costume"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Luz",
      // [Auto-translated] "Dark"
      dark: "Escuro"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Inadimplência",
      // [Auto-translated] "Without Panels"
      "true": "Sem Painéis"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "O mesmo que pesquisa",
      // [Auto-translated] "Same as container"
      container: "Igual ao contêiner"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "está vazio",
    // "Not empty"
    notempty: "não está vazio",
    // "Equals"
    equal: "é igual",
    // "Does not equal"
    notequal: "não é igual",
    // "Contains"
    contains: "contém",
    // "Does not contain"
    notcontains: "não contém",
    // "Any of"
    anyof: "Nenhum de",
    // "All of"
    allof: "Todos de",
    // "Greater than"
    greater: "maior",
    // "Less than"
    less: "menor",
    // "Greater than or equal to"
    greaterorequal: "maior ou igual",
    // "Less than or equal to"
    lessorequal: "menor ou igual",
    // "and"
    and: "e",
    // "or"
    or: "ou"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Usar versão Angular",
    // "Use jQuery version"
    jquery: "Usar versão jQuery",
    // "Use Knockout version"
    knockout: "Usar versão Knockout",
    // "Use React version"
    react: "Usar versão React",
    // "Use Vue version"
    vue: "Usar versão Vue",
    // "For bootstrap framework"
    bootstrap: "Para framework bootstrap",
    // "Modern theme"
    modern: "Tema moderno",
    // "Default theme"
    default: "Tema pré-definido",
    // "Orange theme"
    orange: "Tema laranja",
    // "Darkblue theme"
    darkblue: "Tema azul escuro",
    // "Darkrose theme"
    darkrose: "Tema rosa escuro",
    // "Stone theme"
    stone: "Tema pedra",
    // "Winter theme"
    winter: "Tema inverno",
    // "Winter-Stone theme"
    winterstone: "Tema inverno-pedra",
    // "Show survey on a page"
    showOnPage: "Mostrar pesquisa em uma página",
    // "Show survey in a window"
    showInWindow: "Mostrar pesquisa em uma janela",
    // "Load Survey JSON from server"
    loadFromServer: "Carregar JSON da pesquisa de um servidor",
    // "Scripts and styles"
    titleScript: "Scripts e estilos",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Selecione a página para testar:",
    // "Show invisible elements"
    showInvisibleElements: "Mostrar elementos invisíveis",
    // "Hide invisible elements"
    hideInvisibleElements: "Esconder elementos invisíveis",
    // [Auto-translated] "Previous"
    prevPage: "Anterior",
    // [Auto-translated] "Next"
    nextPage: "Próximo"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "contador de respostas",
    // "Email"
    emailvalidator: "e-mail",
    // "Expression"
    expressionvalidator: "expressão",
    // "Number"
    numericvalidator: "numérico",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "texto"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "completar pesquisa",
    // "Set answer"
    setvaluetrigger: "definir valor",
    // "Copy answer"
    copyvaluetrigger: "copiar valor",
    // "Skip to question"
    skiptrigger: "Saltar para questão",
    // "Run expression"
    runexpressiontrigger: "rodar expressão",
    // "change visibility (deprecated)"
    visibletrigger: "alterar visibilidade"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Ex.: dd/mm/aaaa HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Ex.: $",
      // "Ex.: USD"
      suffix: "Ex.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Ex.: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Ex.: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Ex.: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Um ID de painel que não está visível para os respondentes.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Digite uma legenda do painel.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determine a visibilidade do painel.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilite o modo somente leitura para o painel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Aplica-se a todas as perguntas deste painel. Quando definido como \"Oculto\", ele também oculta as descrições das perguntas. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas individuais. A opção \"Herdar\" aplica a configuração de nível de página (se definido) ou de pesquisa (\"Superior\" por padrão). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Define largura consistente para títulos de perguntas quando eles estão alinhados à esquerda de suas caixas de perguntas. Aceita valores CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Define o local de uma mensagem de erro em relação a todas as perguntas no painel. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Mantém a ordem original das perguntas ou as randomiza. A opção \"Herdar\" aplica a configuração de nível de página (se definido) ou de pesquisa.",
      // "Repositions the panel to the end of a selected page."
      page: "Reposiciona o painel no final de uma página selecionada.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Adiciona espaço ou margem entre o conteúdo do painel e a borda esquerda da caixa do painel.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Desmarque para exibir o painel em uma linha com a pergunta ou painel anterior. A configuração não se aplica se o painel for o primeiro elemento do formulário.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Escolha entre: \"Expandido\" - o painel é exibido na íntegra e pode ser recolhido; \"Recolhido\" - o painel exibe apenas o título e a descrição e pode ser expandido; \"Bloqueado\" - o painel é exibido na íntegra e não pode ser recolhido.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Define a largura do painel proporcionalmente a outros elementos de levantamento topográfico na mesma linha. Aceita valores CSS (px, %, in, pt, etc.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Atribui números a perguntas aninhadas neste painel.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Especifica quantas colunas esse painel abrange dentro do layout da grade.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Esta tabela permite configurar cada coluna de grade dentro do painel. Ele define automaticamente a porcentagem de largura para cada coluna com base no número máximo de elementos em uma linha. Para personalizar o layout da grade, ajuste manualmente esses valores e defina a largura do título para todas as perguntas em cada coluna."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Um ID de painel que não está visível para os respondentes.",
      // "Type a panel subtitle."
      description: "Digite uma legenda do painel.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determine a visibilidade do painel.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilite o modo somente leitura para o painel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Aplica-se a todas as perguntas deste painel. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas individuais. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Define a largura consistente para os títulos das perguntas quando elas estão alinhadas à esquerda de suas caixas de perguntas. Aceita valores CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Define o local de uma mensagem de erro em relação a uma pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Define o local de uma mensagem de erro em relação a todas as perguntas no painel. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa.",
      // "Repositions the panel to the end of a selected page."
      page: "Reposiciona o painel no final de uma página selecionada.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Adiciona espaço ou margem entre o conteúdo do painel e a borda esquerda da caixa do painel.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Desmarque para exibir o painel em uma linha com a pergunta ou painel anterior. A configuração não se aplica se o painel for o primeiro elemento do formulário.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Escolha entre: \"Expandido\" - o painel é exibido na íntegra e pode ser recolhido; \"Recolhido\" - o painel exibe apenas o título e a descrição e pode ser expandido; \"Bloqueado\" - o painel é exibido na íntegra e não pode ser recolhido.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Define a largura do painel proporcionalmente a outros elementos de pesquisa na mesma linha. Aceita valores CSS (px, %, in, pt, etc.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Digite um modelo para títulos de painel dinâmico. Use {panelIndex} para a posição geral do painel e {visiblePanelIndex} para sua ordem entre os painéis visíveis. Insira esses espaços reservados no padrão para adicionar numeração automática.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Digite um modelo para títulos de guias. Use {panelIndex} para a posição geral de um painel e {visiblePanelIndex} para sua ordem entre os painéis visíveis. Insira esses espaços reservados no padrão para adicionar numeração automática.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Um texto de fallback para títulos de guia que se aplica quando o padrão de título de guia não produz um valor significativo.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Essa configuração permite controlar a visibilidade de painéis individuais dentro do painel dinâmico. Use o espaço reservado '{panel}' para fazer referência ao painel atual em sua expressão.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Essa configuração é herdada automaticamente por todas as perguntas dentro deste painel. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas individuais. A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Superior\" por padrão).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "A opção \"Herdar\" aplica a configuração de nível de página (se definida) ou de nível de pesquisa (\"Sob o título do painel\" por padrão).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Define a posição de um painel recém-adicionado. Por padrão, novos painéis são adicionados ao final. Selecione \"Next\" para inserir um novo painel após o atual.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Duplica as respostas da última entrada e as atribui à próxima entrada adicionada.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Faça referência a um nome de pergunta para exigir que um usuário forneça uma resposta exclusiva para essa pergunta em cada painel.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Aciona um prompt de confirmação antes de remover uma entrada."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Aciona um prompt de confirmação antes de remover uma linha.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Expande automaticamente a seção de detalhes quando uma nova linha é adicionada à matriz."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Duplica as respostas da última linha e as atribui à próxima linha dinâmica adicionada.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Essa configuração permite atribuir um valor de resposta padrão com base em uma expressão. A expressão pode incluir cálculos básicos - '{q1_id} + {q2_id}', expressões booleanas, como '{age} > 60', e funções: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. O valor determinado por essa expressão serve como o valor padrão inicial que pode ser substituído pela entrada manual de um respondente.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina quando a entrada de um respondente é redefinida para o valor com base no valor \"Expressão de valor padrão\" ou \"Definir expressão de valor\" ou no valor \"Resposta padrão\" (se um dos dois estiver definido).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Use o ícone de varinha mágica para definir uma regra condicional que determine quando executar a expressão \"Definir valor\" e atribuir dinamicamente o valor resultante como resposta.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Especifique uma expressão que defina o valor a ser definido quando as condições na regra \"Definir valor se\" forem atendidas. A expressão pode incluir cálculos básicos - '{q1_id} + {q2_id}', expressões booleanas, como '{age} > 60', e funções: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc. O valor determinado por essa expressão pode ser substituído pela entrada manual de um respondente.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "O Survey Creator permite ajustar manualmente as larguras embutidas dos elementos do formulário para controlar o layout. Se isso não produzir o resultado desejado, você poderá habilitar o layout da grade, que estrutura os elementos do formulário usando um sistema baseado em colunas. Para configurar colunas de layout, selecione uma página ou painel e use a tabela \"Configurações da pergunta\" → \"Colunas da grade\". Para ajustar quantas colunas uma pergunta abrange, selecione-a e defina o valor desejado no campo \"Layout\" → \"Extensão de coluna\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Um ID de pergunta que não é visível para os respondentes.",
      // "Type a question subtitle."
      description: "Digite um subtítulo de pergunta.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade da pergunta.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilita o modo somente leitura para a pergunta.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o avanço ou o envio da pesquisa, a menos que a pergunta receba uma resposta.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Desmarque para exibir a pergunta em uma linha com a pergunta ou painel anterior. A configuração não se aplica se a pergunta for o primeiro elemento do formulário.",
      // "Repositions the question to the end of a selected page."
      page: "Reposiciona a pergunta no final de uma página selecionada.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Escolha entre: \"Expandido\" - a caixa de perguntas é exibida na íntegra e pode ser recolhida; \"Recolhido\" - a caixa de perguntas exibe apenas o título e a descrição e pode ser expandida; \"Bloqueado\" - a caixa de perguntas é exibida na íntegra e não pode ser recolhida.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Substitui as regras de alinhamento de título definidas em um painel, página ou nível de pesquisa. A opção \"Herdar\" aplica quaisquer configurações de nível superior (se definidas) ou configurações de nível de pesquisa (\"Superior\" por padrão).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Sob o título da pergunta\" por padrão).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Define o local de uma mensagem de erro em relação à pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Superior\" por padrão).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Adiciona espaço ou margem entre o conteúdo da pergunta e a borda esquerda da caixa de perguntas.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Define a largura da pergunta proporcionalmente a outros elementos do questionário na mesma linha. Aceita valores CSS (px, %, in, pt, etc.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Escolha entre: \"Em foco perdido\" - o valor é atualizado quando o campo de entrada perde o foco; \"Ao digitar\" - o valor é atualizado em tempo real, à medida que os usuários digitam. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Em foco perdido\" por padrão).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Você pode usar qualquer serviço Web como uma fonte de dados para perguntas de múltipla escolha. Para preencher valores de escolha, insira a URL do serviço que fornece os dados.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Uma operação de comparação usada para filtrar a lista suspensa.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Textos longos nas opções de escolha gerarão automaticamente quebras de linha para caber no menu suspenso. Desmarque se quiser que os textos sejam recortados.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Especifica quantas colunas essa pergunta abrange dentro do layout da grade."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Use o ícone de varinha mágica para definir quando o valor da pergunta é considerado válido.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Os erros bloqueiam o progresso até serem resolvidos. Os avisos destacam os problemas, mas permitem continuar. As notas informativas oferecem contexto adicional ou orientação neutra. Ao usar avisos ou notas informativas, recomendamos ativar a validação imediata: \"Pesquisa\" → \"Validação\" → \"Executar validação\" → \"Depois que uma resposta for alterada\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Define a largura da área de assinatura exibida e a imagem resultante.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Define a altura da área de assinatura exibida e a imagem resultante.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Selecione se deseja que a área de assinatura preencha todo o espaço disponível na caixa de pergunta, mantendo a proporção padrão de 3:2. Quando os valores personalizados de largura e altura são definidos, a configuração manterá a proporção dessas dimensões."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Especifica a altura de exibição das imagens carregadas na visualização e a altura real das imagens tiradas com a câmera. No modo de upload de arquivo único, a altura da tela é limitada pela área de visualização; No modo de upload de vários arquivos, ele é limitado pela área de miniaturas.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Especifica a largura de exibição das imagens carregadas na visualização e a largura real das imagens tiradas com a câmera. No modo de upload de arquivo único, a largura da tela é limitada pela área de visualização; No modo de upload de vários arquivos, ele é limitado pela área de miniaturas.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Exibe visualizações em miniatura para arquivos carregados quando possível. Desmarque se quiser mostrar ícones de arquivo."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "A opção \"Auto\" determina automaticamente o modo adequado para exibição - Imagem, Vídeo ou YouTube - com base no URL de origem fornecido."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Substitui os valores de altura mínima e máxima.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Substitui os valores de largura mínima e máxima.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Valor\" serve como uma ID de item usada em regras condicionais; \"Texto\" é exibido para os entrevistados.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Escolha entre \"Imagem\" e \"Vídeo\" para definir o modo de conteúdo do seletor de mídia. Se \"Imagem\" estiver selecionado, certifique-se de que todas as opções fornecidas são arquivos de imagem nos seguintes formatos: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Da mesma forma, se \"Vídeo\" estiver selecionado, certifique-se de que todas as opções sejam links diretos para arquivos de vídeo nos seguintes formatos: MP4, MOV, WMV, FLV, AVI, MKV. Observe que os links do YouTube não são compatíveis com as opções de vídeo."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Essa configuração apenas redimensiona o campo de entrada e não afeta a largura da caixa de pergunta. Para limitar o comprimento de entrada aceito, vá para \"Validação\" → \"Limite máximo de caracteres\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Define o número de linhas exibidas no campo de entrada. Se a entrada ocupar mais linhas, a barra de rolagem aparecerá."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Selecione se deseja impedir que os respondentes preencham seu questionário.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Define a localização da barra de progresso. O valor \"Auto\" exibe a barra de progresso acima ou abaixo do cabeçalho da pesquisa."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Um ID de coluna que não está visível para os respondentes.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Quando habilitado para uma coluna, um respondente é obrigado a fornecer uma resposta exclusiva para cada pergunta dentro desta coluna.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Define o número de linhas exibidas no campo de entrada. Se a entrada ocupar mais linhas, a barra de rolagem aparecerá.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade da coluna.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilita o modo somente leitura para a coluna.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Quando selecionada, cria uma coluna individual para cada opção de escolha.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Organiza as opções de escolha em um layout de várias colunas. Quando definido como 0, as opções são exibidas em uma única linha. Quando definido como -1, o valor real é herdado da propriedade \"Contagem de colunas aninhadas\" da matriz pai."
    },
    slider: {
      // "The lowest number that users can select."
      min: "O número mais baixo que os usuários podem selecionar.",
      // "The highest number that users can select."
      max: "O número mais alto que os usuários podem selecionar.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "O intervalo entre os valores de escala selecionáveis. Por exemplo, uma etapa de 5 permitirá que os usuários selecionem 0, 5, 10 etc.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "A distância mínima entre os polegares do controle deslizante que um usuário pode definir.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "A distância máxima entre os polegares do controle deslizante que um usuário pode definir.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Especifica quantos rótulos de escala devem ser gerados. Um valor de -1 significa que o número é calculado automaticamente com base no valor mínimo e no valor máximo.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Use '{0}' como um espaço reservado para o valor real.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Permite definir rótulos personalizados em valores específicos e, opcionalmente, atribuir texto correspondente a eles (por exemplo, 0 = \"Ruim\", 100 = \"Excelente\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Use '{0}' como um espaço reservado para o valor real.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Permite que os usuários movam um polegar sobre o outro.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Exibe um botão que limpa o valor do controle deslizante selecionado e o define como indefinido.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Define o valor mínimo do controle deslizante dinamicamente usando uma expressão. Suporta cálculos básicos (por exemplo, '{q1_id} + {q2_id}'), lógica booleana (por exemplo, '{age} > 60') e funções como 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' e muito mais.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Define o valor máximo do controle deslizante dinamicamente usando uma expressão. Suporta cálculos básicos (por exemplo, '{q1_id} + {q2_id}'), lógica booleana (por exemplo, '{age} > 60') e funções como 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' e muito mais."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Torna esta escolha exclusiva. Quando selecionado por um usuário, ele desmarcará automaticamente todas as outras opções na pergunta.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Torna as caixas de seleção nesta coluna exclusivas. Quando selecionado por um usuário, ele desmarcará automaticamente todas as outras caixas de seleção na mesma linha."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Selecione se letras maiúsculas e minúsculas na expressão regular devem ser tratadas como equivalentes.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Escolha entre: \"Estático\" - define uma largura fixa; \"Responsivo\" - faz com que a pesquisa ocupe toda a largura da tela; \"Auto\" - aplica-se a qualquer um dos dois, dependendo dos tipos de pergunta usados.",
    // "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Os cookies impedem que os usuários preencham a mesma pesquisa duas vezes.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Cole um link de imagem (sem limites de tamanho) ou clique no ícone de pasta para procurar um arquivo do seu computador (até 64 KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Define a largura de um logotipo em unidades CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Define a altura do logotipo em unidades CSS (px, %, in, pt, etc.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Escolha entre: \"Nenhum\" - a imagem mantém seu tamanho original; \"Conter\" - a imagem é redimensionada para se ajustar, mantendo sua proporção; \"Capa\" - a imagem preenche toda a caixa, mantendo sua proporção; \"Preencher\" - a imagem é esticada para preencher a caixa sem manter sua proporção.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Selecione se deseja que o questionário avance automaticamente para a próxima página depois que o respondente responder a todas as perguntas na página atual. Esse recurso não se aplicará se a última pergunta da página for aberta ou permitir várias respostas.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Selecione se você deseja que o questionário seja concluído automaticamente depois que um respondente responder a todas as perguntas.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Define a visibilidade dos botões de navegação em uma página.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Define a localização dos botões de navegação em uma página.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Habilite a página de visualização apenas com todas as perguntas ou com as respostas respondidas.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Aplica-se a todas as perguntas do questionário. Essa configuração pode ser substituída por regras de alinhamento de título em níveis inferiores: painel, página ou pergunta. Uma configuração de nível inferior substituirá as de nível superior.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Um símbolo ou uma sequência de símbolos indicando que uma resposta é necessária.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Introduza um número ou letra com o qual pretende iniciar a numeração.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Define o local de uma mensagem de erro em relação à pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Selecione se deseja que o primeiro campo de entrada em cada página esteja pronto para entrada de texto.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Mantém a ordem original das perguntas ou as randomiza. O efeito dessa configuração só é visível na guia Visualização.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Apenas para perguntas de entrada de texto.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Apenas para comentários de perguntas.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Define o número de linhas exibidas nas áreas de texto para comentários de perguntas. Se a entrada ocupar mais linhas, a barra de rolagem será exibida.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Selecione se você deseja que os comentários de perguntas e as perguntas de texto longo aumentem automaticamente em altura com base no comprimento do texto inserido.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Apenas para comentários de perguntas e perguntas de texto longo.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "As variáveis personalizadas servem como variáveis intermediárias ou auxiliares usadas em cálculos de formulário. Eles tomam as entradas dos respondentes como valores de origem. Cada variável personalizada tem um nome exclusivo e uma expressão na qual se baseia.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Selecione se deseja que o valor calculado da expressão seja salvo junto com os resultados do questionário.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Um gatilho é um evento ou condição baseado em uma expressão. Uma vez que a expressão é avaliada como \"verdadeira\", um gatilho desencadeia uma ação. Tal ação pode, opcionalmente, ter uma questão-alvo que afeta.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Escolha se deseja ou não limpar valores para perguntas ocultas pela lógica condicional e quando fazê-lo.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Escolha entre: \"Em foco perdido\" - o valor é atualizado quando o campo de entrada perde o foco; \"Ao digitar\" - o valor é atualizado em tempo real, à medida que os usuários digitam.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "O valor esquerdo serve como um ID de coluna usado em regras condicionais, o valor direito é exibido aos respondentes.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "O valor esquerdo serve como um ID de linha usado em regras condicionais, o valor direito é exibido aos respondentes.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Aceita valores CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Aceita valores CSS (px, %, in, pt, etc.).",
    // "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Visível apenas quando pelo menos uma coluna tiver tipo total ou expressão total.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Define o local de uma mensagem de erro em relação a uma célula com entrada inválida. A opção \"Herdar\" aplica a configuração da propriedade \"Alinhamento da mensagem de erro\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Define o local das mensagens de erro para perguntas aninhadas em seções de detalhes. A opção \"Herdar\" aplica a configuração da propriedade \"Alinhamento da mensagem de erro\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Quando a propriedade \"Impedir respostas duplicadas\" está habilitada, um respondente tentando enviar uma entrada duplicada receberá a seguinte mensagem de erro.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Permite calcular valores totais com base em uma expressão. A expressão pode incluir cálculos básicos ('{q1_id} + {q2_id}'), expressões booleanas ('{age} > 60') e funções ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Se a coluna especifica contiver valores idênticos, o questionário lançará o \"Valor de chave não exclusivo\" erro.",
    // "Type a subtitle."
    description: "Digite uma legenda.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Escolha um idioma para começar a criar seu questionário. Para adicionar uma tradução, alterne para um novo idioma e traduza o texto original aqui ou na guia Traduções.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Define o local de uma seção de detalhes em relação a uma linha. Escolha entre: \"Nenhum\" - nenhuma expansão é adicionada; \"Sob a linha\" - uma expansão de linha é colocada sob cada linha da matriz; \"Sob a linha, exibir apenas uma expansão de linha\" - uma expansão é exibida em uma única linha apenas, as expansões de linha restantes são recolhidas.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Escolha entre: \"Nenhum\" - a imagem mantém seu tamanho original; \"Conter\" - a imagem é redimensionada para se ajustar, mantendo sua proporção; \"Capa\" - a imagem preenche toda a caixa, mantendo sua proporção; \"Preencher\" - a imagem é esticada para preencher a caixa sem manter sua proporção.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Aumenta gradualmente a altura do campo de entrada à medida que os dados são inseridos. Substitui a configuração \"Altura do campo de entrada (em linhas)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "A opção \"Herdar\" aplica uma configuração de nível de pesquisa (\"Ativado\" por padrão).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Um intervalo de tempo em segundos após o qual a pesquisa avança automaticamente para a página \"Obrigado\". Quando definido como 0, conta o tempo gasto na pesquisa.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Um intervalo de tempo em segundos após o qual a pesquisa avança automaticamente para a próxima página. Oculta o botão de navegação \"Anterior\". Quando definido como 0, conta o tempo gasto na página atual.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Ative essa opção para disparar a validação quando um usuário se concentrar em um campo de entrada vazio e deixá-lo sem fazer alterações.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Um código de página que não é visível para os respondentes.",
      // "Type a page subtitle."
      description: "Digite um subtítulo de página.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Uma legenda exibida em um botão de navegação na barra de progresso ou sumário. Se você deixar esse campo vazio, o botão de navegação usará o título ou o nome da página. Para ativar a barra de progresso ou sumário, vá para \"Pesquisa\" → \"Navegação\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Um intervalo de tempo em segundos após o qual o questionário avança automaticamente para a próxima página.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade da página.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Use o ícone de varinha mágica para definir uma regra condicional que desabilita o modo somente leitura da página.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Use o ícone de varinha mágica para definir uma regra condicional que impeça o envio de questionários, a menos que pelo menos uma pergunta aninhada tenha uma resposta.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Aplica-se a todas as perguntas dentro desta página. Se você quiser substituir essa configuração, defina regras de alinhamento de título para perguntas ou painéis individuais. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Superior\" por padrão).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Define largura consistente para títulos de perguntas quando eles estão alinhados à esquerda de suas caixas de perguntas. Aceita valores CSS (px, %, in, pt, etc.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Define o local de uma mensagem de erro em relação à pergunta com entrada inválida. Escolha entre: \"Top\" - um texto de erro é colocado na parte superior da caixa de perguntas; \"Inferior\" - um texto de erro é colocado na parte inferior da caixa de perguntas. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Superior\" por padrão).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Mantém a ordem original das perguntas ou as randomiza. A opção \"Herdar\" aplica a configuração de nível de pesquisa (\"Original\" por padrão). O efeito dessa configuração só é visível na guia Visualização.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Define a visibilidade dos botões de navegação na página. A opção \"Herdar\" aplica a configuração de nível de pesquisa, que tem como padrão \"Visível\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Esta tabela permite configurar cada coluna de grade na página. Ele define automaticamente a porcentagem de largura para cada coluna com base no número máximo de elementos em uma linha. Para personalizar o layout da grade, ajuste manualmente esses valores e defina a largura do título para todas as perguntas em cada coluna."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Define a localização de um cronômetro em uma página.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Escolha entre: \"Bloqueado\" - os usuários não podem expandir ou recolher painéis; \"Recolher tudo\" - todos os painéis começam em estado colapsado; \"Expandir tudo\" - todos os painéis começam em um estado expandido; \"Primeiro expandido\" - apenas o primeiro painel é inicialmente expandido.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Insira um nome de propriedade compartilhada na matriz de objetos que contém as URLs de arquivo de imagem ou vídeo que você deseja exibir na lista de opções.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "O valor esquerdo serve como um ID de item usado em regras condicionais, o valor direito é exibido aos respondentes.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Digite um título amigável para exibir.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Garante que os usuários não concluam a pesquisa até que os arquivos sejam carregados.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Aceita valores CSS (px, %, in, pt, etc.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Aceita valores CSS (px, %, in, pt, etc.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Aceita valores CSS (px, %, in, pt, etc.).",
    // "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Se você não definir esta propriedade, a resposta será armazenada em um campo especificado pela propriedade Nome.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Um valor exibido em perguntas HTML e nos títulos dinâmicos e descrições de elementos de pesquisa quando o valor da pergunta está vazio.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Nos tipos de pergunta de seleção única e múltipla, cada opção de opção tem um ID e um valor de exibição. Quando selecionada, essa configuração mostra um valor de exibição em vez de um valor de ID em perguntas HTML e títulos dinâmicos e descrições de elementos de pesquisa.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Escolha se deseja ou não limpar valores de pergunta ocultos pela lógica condicional e quando fazê-lo. A opção \"Herdar\" aplica a configuração no nível do questionário (\"Após a conclusão do questionário\" por padrão).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Escolha entre: \"Todos\" - copia todas as opções de escolha da pergunta selecionada; \"Selecionado\" - copia dinamicamente apenas as opções de escolha selecionadas; \"Não selecionado\" - copia dinamicamente apenas as opções de escolha não selecionadas. As opções \"Nenhum\" e \"Outros\" são copiadas por padrão se ativadas na pergunta de origem.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Nos tipos de pergunta de seleção única e múltipla, cada opção de escolha tem um ID e um valor de exibição. Essa configuração especifica qual pergunta de matriz, coluna ou painel deve fornecer as IDs.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Nos tipos de pergunta de seleção única e múltipla, cada opção de escolha tem um ID e um valor de exibição. Essa configuração especifica qual coluna de matriz ou pergunta de painel deve fornecer os textos de exibição.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Selecione para permitir que os respondentes adicionem suas próprias opções se a opção desejada não estiver disponível na lista suspensa. As opções personalizadas serão armazenadas apenas temporariamente durante a sessão atual do navegador.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Quando selecionada, os usuários podem incluir entrada adicional em uma caixa de comentário separada.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Exibe cada opção de opção especial (\"Nenhuma\", \"Outra\", \"Selecionar Tudo\") em uma nova linha, mesmo ao usar um layout de várias colunas.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Especifique o local dentro do conjunto de dados de serviço onde a matriz de objetos de destino está localizada. Deixe em branco se a URL já apontar para a matriz.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: "Nome"
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Insira um nome de propriedade uniforme dentro da matriz de objetos que contém os valores que você deseja exibir na lista de opções.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Selecione esta opção para permitir que o serviço retorne uma resposta ou matriz vazia.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Use o ícone de varinha mágica para definir uma regra condicional que determina a visibilidade de todas as opções de escolha.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "O valor esquerdo serve como um ID de item usado em regras condicionais, o valor direito é exibido aos respondentes.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Auto\" seleciona entre os modos \"Botões\" e \"Dropdown\" com base na largura disponível. Quando a largura é insuficiente para exibir botões, a pergunta exibe uma lista suspensa."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Permite conectar perguntas que produzem resultados em diferentes formatos. Quando essas perguntas são vinculadas usando um identificador de junção, essa propriedade compartilhada armazena valores de pergunta selecionados.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Selecione se deseja atualizar o conteúdo do menu suspenso para corresponder à consulta de pesquisa que um usuário está digitando no campo de entrada.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Um valor a guardar nos resultados do inquérito quando os inquiridos dão uma resposta positiva.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Um valor a guardar nos resultados do inquérito quando os inquiridos dão uma resposta negativa.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Não é recomendável desabilitar essa opção, pois ela substitui a imagem de visualização e torna difícil para o usuário entender se os arquivos foram carregados.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Aciona um prompt pedindo para confirmar a exclusão do arquivo.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Habilite para classificar apenas as opções selecionadas. Os usuários arrastarão os itens selecionados da lista de opções para ordená-los dentro da área de classificação.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Insira uma lista de opções que serão sugeridas ao respondente durante a entrada.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "A configuração redimensiona apenas os campos de entrada e não afeta a largura da caixa de pergunta.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Define a largura consistente para todos os rótulos de item. Aceita valores CSS (px, %, in, pt, etc.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Selecione como alinhar o valor de entrada dentro do campo. A configuração padrão \"Auto\" alinha o valor de entrada à direita se o mascaramento de moeda ou numérico for aplicado e à esquerda se não.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Serve como um substituto quando a imagem não pode ser exibida no dispositivo de um usuário e para fins de acessibilidade.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Define a cor do emoji selecionado quando o tipo de ícone Classificação é definido como \"Smileys\". Escolha entre: \"Padrão\" - o emoji selecionado aparece na cor padrão do questionário; \"Escala\" - o emoji selecionado herda a cor da escala de classificação.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Um ID de expressão que não está visível para os respondentes.",
      // "Type an expression subtitle."
      description: "Digite um subtítulo de expressão.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Uma expressão pode incluir cálculos básicos ('{q1_id} + {q2_id}'), condições ('{age} > 60') e funções ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', etc.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Selecione para armazenar o valor da opção \"Outro\" como uma propriedade separada nos resultados da pesquisa.",
    // "Use {0} as a placeholder for the actual value."
    format: "Utilizar {0} como um espaço reservado para o valor real.",
    // "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Consulte o [aceitar](https://www.w3schools.com/tags/att_input_accept.asp) descrição do atributo para mais informações.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Aplicável apenas aos tipos de célula Grupo de Rádio e Caixa de Seleção.",
    // "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Consulte o [autocompleto](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) descrição do atributo para mais informações.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Aplica-se quando \"Tipo de origem\" é \"Arquivos locais\" ou quando a câmera não está disponível",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Aplica-se quando \"Tipo de origem\" é \"Câmera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Aplica-se quando \"Tipo de origem\" é \"Arquivos locais ou câmera\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Organiza as opções de escolha em um layout de várias colunas. Quando definido como 0, as opções são exibidas em uma única linha.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Selecione se deseja armazenar o valor da pergunta com uma máscara aplicada nos resultados do questionário."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "O padrão pode conter literais de cadeia de caracteres e os seguintes espaços reservados: '9' - para um dígito; «a» - para uma letra maiúscula ou minúscula; '#' - para um dígito ou uma letra maiúscula ou minúscula. Use barra invertida '\\' para escapar de um personagem."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "O padrão pode conter caracteres separadores e os seguintes espaços reservados:<br>'m' - Número do mês.<br>'mm' - Número do mês, com zero à esquerda para valores de um dígito. <br>'d' - Dia do mês. <br>'dd' - Dia do mês, com zero à esquerda para valores de um dígito. <br>'yy' - Os dois últimos dígitos do ano. <br>'yyyy' - Ano de quatro dígitos. <br>'H' - Horas em formato de 24 horas. <br>'HH' - Horas em formato de 24 horas, com zero à esquerda para valores de um dígito. <br>'h' - Horas em formato de 12 horas. <br>'hh' - Horas em formato de 12 horas, com zero à esquerda para valores de um dígito. <br>'MM' - Minutos. <br>'ss' - Segundos. <br>'TT' - Relógio de 12 horas em caixa alta (AM/PM). <br>'tt' - Relógio de 12 horas em minúsculas (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Um símbolo usado para separar a parte fracionária da parte inteira de um número exibido.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Um símbolo usado para separar os dígitos de um grande número em grupos de três.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Limita quantos dígitos devem ser retidos após o ponto decimal de um número exibido."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Um ou vários símbolos a serem exibidos antes do valor.",
      // "One or several symbols to be displayed after the value."
      suffix: "Um ou vários símbolos a serem exibidos após o valor."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Essa configuração se aplica somente a perguntas fora de um painel.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Define uma cor suplementar que destaca os principais elementos de levantamento topográfico.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Ajusta a transparência dos painéis e caixas de perguntas em relação ao plano de fundo da pesquisa.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Ajusta a transparência dos elementos de entrada em relação ao plano de fundo do questionário.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Define o raio do canto para todos os elementos retangulares. Ative o Modo Avançado se quiser definir valores de raio de canto individuais para elementos de entrada ou painéis e caixas de perguntas.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Define a cor de fundo principal da pesquisa."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "A opção \"Igual ao contêiner\" ajusta automaticamente a largura da área de conteúdo do cabeçalho para caber no elemento HTML em que a pesquisa é colocada.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "A largura da área do cabeçalho que contém o título e a descrição da pesquisa, medida em pixels.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Quando ativado, a parte superior da pesquisa se sobrepõe à parte inferior do cabeçalho.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Quando definido como 0, a altura é calculada automaticamente para acomodar o conteúdo do cabeçalho."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "A opção \"Igual ao contêiner\" ajusta automaticamente a largura da área da barra de progresso para caber no elemento HTML em que a pesquisa é colocada.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Usado quando o 'Layout da pesquisa' está definido como 'Campo de entrada único por página'. Nesse layout, a matriz é dividida para que cada campo de entrada apareça em uma página separada. Use o espaço reservado {rowIndex} para inserir numeração automática, {rowTitle} ou {rowName} para fazer referência ao título ou ID da linha e {row.columnid} para incluir o valor de uma coluna de matriz específica."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "título",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Deixar vazio se for o mesmo que 'Nome'"
    },
    // "Allow multiple selection"
    multiSelect: "Permitir escolha múltipla",
    // "Show image and video captions"
    showLabel: "Mostrar legenda das imagens",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Troque a ordem de Sim e Não",
    // "Value"
    value: "Valor",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Alinhamento de tabulação",
    // [Auto-translated] "File source type"
    sourceType: "Tipo de fonte do arquivo",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Ajuste ao contêiner",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Definir expressão de valor",
    // "Description"
    description: "Descrição", // Auto-generated string
    // "Logo fit"
    logoFit: "Ajustar o logo",
    // "Pages"
    pages: "páginas", // Auto-generated string
    // "Questions"
    questions: "questões", // Auto-generated string
    // "Triggers"
    triggers: "Condições",
    // "Custom variables"
    calculatedValues: "Valores calculados",
    // "Survey id"
    surveyId: "Identificação do questionário", // Auto-generated string
    // "Survey post id"
    surveyPostId: "Identificação da publicação do questionário", // Auto-generated string
    // "Survey show data saving"
    surveyShowDataSaving: "Mostrar economia de dados do questionário", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Descrição da localização do questionário",
    // "Progress bar type"
    progressBarType: "Tipo de barra de progresso", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Mostrar índice (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Alinhamento do sumário",
    // "Question title pattern"
    questionTitlePattern: "Padrão de título da pergunta", // Auto-generated string
    // "Survey width mode"
    widthMode: "Modo de largura",
    // "Show brand info"
    showBrandInfo: "Mostrar informações da marca", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Usar valores de exibição em textos dinâmicos",
    // "Visible if"
    visibleIf: "Visível se", // Auto-generated string
    // "Default value expression"
    defaultValueExpression: "Valor de expressão pré-definida",
    // "Required if"
    requiredIf: "Obrigatório se", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Redefinir valor se",
    // [Auto-translated] "Set value if"
    setValueIf: "Defina o valor se",
    // "Validation rules"
    validators: "Validadores",
    // "Bindings"
    bindings: "ligações", // Auto-generated string
    // "Render as"
    renderAs: "renderizar como", // Auto-generated string
    // "Attach original items"
    attachOriginalItems: "anexar itens originais", // Auto-generated string
    // "Choices"
    choices: "Opções",
    // "Choices by url"
    choicesByUrl: "Opções com origem na Web", // Auto-generated string
    // "Currency"
    currency: "Moeda", // Auto-generated string
    // "Cell hint"
    cellHint: "Dica de célula", // Auto-generated string
    // "Total maximum fraction digits"
    totalMaximumFractionDigits: "Total Máximo de Dígitos da Fração", // Auto-generated string
    // "Total minimum fraction digits"
    totalMinimumFractionDigits: "Total Mínimo de Dígitos da Fração", // Auto-generated string
    // "Columns"
    columns: "Colunas", // Auto-generated string
    // "Detail elements"
    detailElements: "Detalhes elementos", // Auto-generated string
    // "Allow adaptive actions"
    allowAdaptiveActions: "Permitir ações adaptativas", // Auto-generated string
    // "Default row value"
    defaultRowValue: "valor default da linha", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Expandir automaticamente os detalhes da nova linha",
    // "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Escolha carga lenta habilitada", // Auto-generated string
    // "Choices lazy load page size"
    choicesLazyLoadPageSize: "Escolha carga lenta tamanho de página", // Auto-generated string
    // "Input field component"
    inputFieldComponent: "Componente de campo de entrada", // Auto-generated string
    // "Item component"
    itemComponent: "Componente de item", // Auto-generated string
    // "Min"
    min: "min", // Auto-generated string
    // "Max"
    max: "max", // Auto-generated string
    // "Min value expression"
    minValueExpression: "Expressão valor mínimo", // Auto-generated string
    // "Max value expression"
    maxValueExpression: "Expressão valor máximo", // Auto-generated string
    // "Step"
    step: "passo", // Auto-generated string
    // "Items for auto-suggest"
    dataList: "Lista",
    // "Input field width (in characters)"
    inputSize: "Tamanho do item",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Largura do rótulo do item",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Alinhamento de valor de entrada",
    // "Elements"
    elements: "elementos", // Auto-generated string
    // "Content"
    content: "conteúdo", // Auto-generated string
    // "Navigation title"
    navigationTitle: "Título de navegação", // Auto-generated string
    // "Navigation description"
    navigationDescription: "Descrição de navegação", // Auto-generated string
    // "Long tap"
    longTap: "Toque longo", // Auto-generated string
    // "Expand input field dynamically"
    autoGrow: "Crescimento automático",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Ativar alça de redimensionamento",
    // "Accept carriage return"
    acceptCarriageReturn: "aceitar devolução de conteúdo", // Auto-generated string
    // "Display mode"
    displayMode: "Modo de exibição",
    // [Auto-translated] "Rate type"
    rateType: "Tipo de tarifa", // Auto-generated string
    // "Label"
    label: "Rótulo", // Auto-generated string
    // "Content mode"
    contentMode: "Modo de conteúdo",
    // "Image and thumbnail fit"
    imageFit: "Ajustar imagem",
    // "Alt text"
    altText: "Texto alternativo",
    // "Height"
    height: "altura", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Altura em smartphones",
    // "Pen color"
    penColor: "Cor de caneta", // Auto-generated string
    // "Background color"
    backgroundColor: "Cor de fundo",
    // "Template elements"
    templateElements: "Modelo de elementos", // Auto-generated string
    // "Operator"
    operator: "operador", // Auto-generated string
    // "Is variable"
    isVariable: "É vairável", // Auto-generated string
    // "Run expression"
    runExpression: "Expressão de execução", // Auto-generated string
    // "Show caption"
    showCaption: "Mostrar descrição", // Auto-generated string
    // "Icon name"
    iconName: "Nome do ícone", // Auto-generated string
    // "Icon size"
    iconSize: "Tamanho do ícone", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Precisão", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Área da alça de arraste da matriz", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Imagem de fundo",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Ajuste de imagem de plano de fundo", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Anexo de imagem de plano de fundo", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Opacidade de fundo", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Permitir classificação seletiva",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Alinhamento da área de classificação",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Texto para mostrar se todas as opções estão selecionadas",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Texto de espaço reservado para a área de classificação",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Permitir acesso à câmera", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Modo de cor do ícone de classificação",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Esquema de cores dos Smileys",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Copiar valor de exibição", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Extensão da coluna",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Largura da área da barra de progresso",
    // [Auto-translated] "Theme name"
    themeName: "Nome do tema"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Modo avançado",
    // "Page"
    pageTitle: "Fonte do título da página",
    // "Question box"
    questionTitle: "Fonte do título da pergunta",
    // "Input element"
    editorPanel: "Elemento de entrada",
    // [Auto-translated] "Lines"
    lines: "Linhas",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Inadimplência",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Pairar",
    // [Auto-translated] "Selected"
    primaryLightColor: "Selecionado",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Cor de fundo",
    // "Corner radius"
    cornerRadius: "Raio de canto",
    // [Auto-translated] "Default background"
    backcolor: "Plano de fundo padrão",
    // [Auto-translated] "Hover background"
    hovercolor: "Plano de fundo do mouse",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Decoração de borda",
    // [Auto-translated] "Font color"
    fontColor: "Cor da fonte",
    // [Auto-translated] "Background color"
    backgroundColor: "Cor de fundo",
    // [Auto-translated] "Default color"
    primaryForecolor: "Cor padrão",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Cor desativada",
    // [Auto-translated] "Font"
    font: "Fonte",
    // [Auto-translated] "Darker"
    borderDefault: "Escuro",
    // [Auto-translated] "Lighter"
    borderLight: "Isqueiro",
    // [Auto-translated] "Font family"
    fontFamily: "Família de fontes",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Regular",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Pesado",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Semi-negrito",
    // [Auto-translated] "Bold"
    fontWeightBold: "Ousado",
    // [Auto-translated] "Color"
    color: "Cor",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Cor do espaço reservado",
    // [Auto-translated] "Size"
    size: "Tamanho",
    // [Auto-translated] "Opacity"
    opacity: "Opacidade",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Adicionar efeito de sombra",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Borrão",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Espalhar",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Deixar cair",
    // [Auto-translated] "Inner"
    boxShadowInner: "Interno",
    names: {
      // [Auto-translated] "Default"
      default: "Inadimplência",
      // [Auto-translated] "Sharp"
      sharp: "Afiado",
      // [Auto-translated] "Borderless"
      borderless: "Sem fronteiras",
      // [Auto-translated] "Flat"
      flat: "Plano",
      // [Auto-translated] "Plain"
      plain: "Planície",
      // [Auto-translated] "Double Border"
      doubleborder: "Borda Dupla",
      // [Auto-translated] "Layered"
      layered: "Camadas",
      // [Auto-translated] "Solid"
      solid: "Sólido",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Contraste"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Azul-petróleo",
      // [Auto-translated] "Blue"
      blue: "Azul",
      // [Auto-translated] "Purple"
      purple: "Roxo",
      // [Auto-translated] "Orchid"
      orchid: "Orquídea",
      // [Auto-translated] "Tulip"
      tulip: "Tulipa",
      // [Auto-translated] "Brown"
      brown: "Marrom",
      // [Auto-translated] "Green"
      green: "Verde",
      // [Auto-translated] "Gray"
      gray: "Cinza"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Fundo da superfície",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Primário",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Secundário",
    // [Auto-translated] "Surface"
    surfaceScale: "Superfície",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elementos da interface do usuário",
    // [Auto-translated] "Font"
    fontScale: "Fonte",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Criador de pesquisas 2020",
      // [Auto-translated] "Light"
      "default-light": "Luz",
      // [Auto-translated] "Dark"
      "default-dark": "Escuro",
      // [Auto-translated] "Contrast"
      "default-contrast": "Contraste"
    }
  }
};

setupLocale({ localeCode: "pt", strings: portugueseTranslation });