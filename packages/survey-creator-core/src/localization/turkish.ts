import { setupLocale } from "survey-creator-core";

export var turkishStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Düzenle",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Nasıl anket oluşturulur izle",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Lütfen araç kutusundan bir soru sürükleyin.",
    // "Create a rule to customize the flow of the survey."
    addLogicItem: "Anket akışını özelleştirmek için bir kural oluşturun.",
    // "Copy"
    copy: "Kopyala",
    // [Auto-translated] "Duplicate"
    duplicate: "Yinelenen",
    // "Add to toolbox"
    addToToolbox: "Araç kutusuna ekle",
    // "Delete Panel"
    deletePanel: "Paneli Sil",
    // "Delete Question"
    deleteQuestion: "Soruyu Sil",
    // "Convert to"
    convertTo: "Çevir",
    // "Drag element"
    drag: "Nesne sürükleyin"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Anketi Test Et",
    // "Themes"
    theme: "Temalar",
    // "Translations"
    translation: "Çeviri",
    // "Designer"
    designer: "Anket Tasarımı",
    // "JSON Editor"
    json: "JSON Editor",
    // "Logic"
    logic: "Mantıksal Anket"
  },
  // Question types
  qt: {
    // "Default"
    default: "Varsayılan",
    // "Checkboxes"
    checkbox: "Onay Kutusu",
    // "Long Text"
    comment: "Yorum",
    // "Image Picker"
    imagepicker: "Resim seçici",
    // [Auto-translated] "Ranking"
    ranking: "Sıralama",
    // "Image"
    image: "Resim",
    // "Dropdown"
    dropdown: "Seçim Kıutusu",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Çoklu Seçim Açılır Menüsü",
    // "File Upload"
    file: "Dosya",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matrix (tek seçim)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matrix (çoklu seçim)",
    // "Dynamic Matrix"
    matrixdynamic: "Matrix (dinamik satır)",
    // "Multiple Textboxes"
    multipletext: "Çoklu Yazı",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (dinamik panel)",
    // "Radio Button Group"
    radiogroup: "Seçim Grubu",
    // "Rating Scale"
    rating: "Değerlendirme",
    // [Auto-translated] "Slider"
    slider: "Kaydırıcı",
    // "Single-Line Input"
    text: "Tek Girdi",
    // "Yes/No (Boolean)"
    boolean: "Mantıksal İfade",
    // "Expression (read-only)"
    expression: "İfade (düzenlenemez)",
    // "Signature"
    signaturepad: "İmza Defteri",
    // [Auto-translated] "Button Group"
    buttongroup: "Düğme Grubu"
  },
  toolboxCategories: {
    // "General"
    general: "Genel",
    // "Choice Questions"
    choice: "Seçim Soruları",
    // "Text Input Questions"
    text: "Metin Girişi Soruları",
    // "Containers"
    containers: "Konteyner",
    // "Matrix Questions"
    matrix: "Matris Soruları",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Varyayılan ({0})",
    // "Survey"
    survey: "Anket",
    // "Settings"
    settings: "Anket Ayarları",
    // "Open settings"
    settingsTooltip: "Anket ayarlarını aç",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Anket Ayarları",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Anket ayarları",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Tema Ayarları",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Tema ayarları",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "İçerik Oluşturucu Ayarları",
    // "Show Panel"
    showPanel: "Paneli Göster",
    // "Hide Panel"
    hidePanel: "Paneli Gizle",
    // [Auto-translated] "Select previous"
    prevSelected: "Öncekini seç",
    // [Auto-translated] "Select next"
    nextSelected: "İleri'yi seçin",
    // [Auto-translated] "Focus previous"
    prevFocus: "Öncesine odaklan",
    // [Auto-translated] "Focus next"
    nextFocus: "Sonrakine odaklan",
    // [Auto-translated] "Survey"
    surveyTypeName: "Anket",
    // [Auto-translated] "Page"
    pageTypeName: "Sayfa",
    // [Auto-translated] "Panel"
    panelTypeName: "Panel",
    // [Auto-translated] "Question"
    questionTypeName: "Soru",
    // [Auto-translated] "Column"
    columnTypeName: "Sütun",
    // "Add New Page"
    addNewPage: "Yeni Sayfa Ekle",
    // "Scroll to the Right"
    moveRight: "Sağa sürükle",
    // "Scroll to the Left"
    moveLeft: "Sola sürükle",
    // "Delete Page"
    deletePage: "Sayfayı Sil",
    // "Edit Page"
    editPage: "Sayfayı Düzenle",
    // "Edit"
    edit: "Düzenle",
    // "page"
    newPageName: "Sayfa",
    // "question"
    newQuestionName: "Soru",
    // "panel"
    newPanelName: "Panel",
    // "text"
    newTextItemName: "Yazı",
    // [Auto-translated] "Default"
    defaultV2Theme: "Temerrüt",
    // [Auto-translated] "Modern"
    modernTheme: "Modern",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Varsayılan (eski)",
    // "Preview Survey Again"
    testSurveyAgain: "Anketi Tekrar Test Et",
    // "Survey width: "
    testSurveyWidth: "Anket genişliği: ",
    // "You had to navigate to"
    navigateToMsg: "Şuraya git:",
    // "Save Survey"
    saveSurvey: "Anketi Kaydet",
    // "Save Survey"
    saveSurveyTooltip: "Anketi Kaydet",
    // [Auto-translated] "Save Theme"
    saveTheme: "Temayı Kaydet",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Temayı Kaydet",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Hataları gizleme",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Hataları göster",
    // "Undo"
    undo: "Geri",
    // "Redo"
    redo: "İleri",
    // "Undo last change"
    undoTooltip: "Son değişikliği geri al",
    // "Redo the change"
    redoTooltip: "Son değişikliği ileri al",
    // [Auto-translated] "Expand"
    expandTooltip: "Genişletmek",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Çökmek",
    // "Expand All"
    expandAllTooltip: "Tümünü Genişlet",
    // "Collapse All"
    collapseAllTooltip: "Tümünü Daralt",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Yakınlaştırma",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "%100 yakınlaştırma",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Uzaklaştırma",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Sorular için genişletme/daraltma durumunu kilitle",
    // [Auto-translated] "Show more"
    showMoreChoices: "Daha fazlasını göster",
    // [Auto-translated] "Show less"
    showLessChoices: "Daha az göster",
    // [Auto-translated] "Copy"
    copy: "Kopya etmek",
    // [Auto-translated] "Cut"
    cut: "Kesmek",
    // [Auto-translated] "Paste"
    paste: "Yapıştırmak",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "Seçimi panoya kopyala",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "Seçimi panoya kes",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "Panodan yapıştır",
    // "Options"
    options: "Seçenekler",
    // "Generate Valid JSON"
    generateValidJSON: "JSON Oluştur",
    // "Generate Readable JSON"
    generateReadableJSON: "Okunabilir JSON oluştur",
    // "Toolbox"
    toolbox: "Araç Kutusu",
    // "Properties"
    "property-grid": "Özellikler",
    // [Auto-translated] "Search"
    toolboxSearch: "Aramak",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Aramak için yazın...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Sonuç bulunamadı",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Aramak için yazın...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Sonuç bulunamadı",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Formunuzu yapılandırmaya başlayın",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Anket ayarlarını keşfetmek için herhangi bir kategori simgesini tıklayın. Tasarım yüzeyine bir anket öğesi eklediğinizde ek ayarlar kullanılabilir hale gelir.",
    // "Please correct JSON."
    correctJSON: "JSON nesnesini doğrular.",
    // "Survey Results "
    surveyResults: "Anket Sonucu: ",
    // "As Table"
    surveyResultsTable: "Tablo olarak",
    // "As JSON"
    surveyResultsJson: "JSON olarak",
    // "Question Title"
    resultsTitle: "Soru başlığı",
    // "Question Name"
    resultsName: "Soru adı",
    // "Answer Value"
    resultsValue: "Cevap değeri",
    // "Display Value"
    resultsDisplayValue: "Görünen değer",
    // "Modified"
    modified: "Düzenlendi",
    // "Saving"
    saving: "Kaydediliyor",
    // "Saved"
    saved: "Kaydedildi",
    // [Auto-translated] "Error"
    propertyEditorError: "Hata",
    // "Error! Editor content is not saved."
    saveError: "Hata! Editor içerisi kaydedilmedi.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Dil Ayarları",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Tema Ayarları",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Dil Ekle",
    // [Auto-translated] "Languages"
    translationLanguages: "Diller",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Bu dil için tüm dizeleri silmek istediğinizden emin misiniz?",
    // "Select language to translate"
    translationAddLanguage: "Çeviri için dil seçiniz",
    // "All Strings"
    translationShowAllStrings: "Tüm yazıları göster",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Yalnızca Kullanılan Dizeler",
    // "All Pages"
    translationShowAllPages: "Tüm sayfaları göster",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Çevrilecek yazı yok. Lütfen, filtreyi değiştirin.",
    // "Export to CSV"
    translationExportToSCVButton: "CSV dışa çıkart",
    // "Import from CSV"
    translationImportFromSCVButton: "CSV içe aktar",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Tümünü Otomatik Çevir",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Çeviri kaynağı: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "Çevrilmemiş dizeler",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "{0} varsayılan çeviri ile sıkıştır",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Çeviri...",
    // [Auto-translated] "Source: "
    translationSource: "Kaynak: ",
    // [Auto-translated] "Target: "
    translationTarget: "Hedef: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "YouTube bağlantıları desteklenmemektedir.",
    // [Auto-translated] "Export"
    themeExportButton: "Ihracat",
    // [Auto-translated] "Import"
    themeImportButton: "Ithalat",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Ihracat",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Ithalat",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Panoya kopyala",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Tema ayarlarını varsayılana sıfırla",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Temayı gerçekten sıfırlamak istiyor musunuz? Tüm özelleştirmeleriniz kaybolacak.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Evet, temayı sıfırlayın",
    // "Bold"
    bold: "Kalın",
    // "Italic"
    italic: "Italik",
    // "Underline"
    underline: "Alt Çizgi",
    // "Add Question"
    addNewQuestion: "Soru Ekle",
    // [Auto-translated] "Select page..."
    selectPage: "Sayfa seç...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Seçenekler şuradan kopyalanır:",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Seçimler bir web hizmetinden yüklenir.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Ayarlara git",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Yüklenen seçim seçeneklerinin önizlemesi",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "HTML içeriği burada olacak.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Araç kutusundan buraya bir soru bırakın.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Anket boş. Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklatın.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Sayfa boş. Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklatın.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Bir resmi buraya sürükleyip bırakın veya aşağıdaki düğmeyi tıklayın ve yüklemek için bir resim seçin",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Formunuzu oluşturmaya başlamak için aşağıdaki \"Soru Ekle\" butonuna tıklayın.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Formunuz boş",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Formunuz boş",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklayın.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklayın.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Önizleme yok",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Önizleme yok",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Anket herhangi bir görünür unsur içermiyor.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Anket herhangi bir görünür unsur içermiyor.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Çevrilecek dize yok",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Çevrilecek dize yok",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Formunuza öğeler ekleyin veya araç çubuğundaki dizeler filtresini değiştirin.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Formunuza öğeler ekleyin veya araç çubuğundaki dizeler filtresini değiştirin.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Sayfaya yeni bir öğe eklemek için aşağıdaki \"Soru Ekle\" düğmesini tıklayın.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Panele yeni bir öğe eklemek için aşağıdaki \"Soru Ekle\" düğmesini tıklayın.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Aşağıdaki düğmeyi tıklayın ve yüklemek için bir resim seçin",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Resim Seç",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "{0} ekle", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Madde ",
    // [Auto-translated] "Select a file"
    selectFile: "Bir dosya seçin",
    // [Auto-translated] "Remove the file"
    removeFile: "Dosyayı kaldır",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Yeni Kural Ekle",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Anketin akışını özelleştirmek için bir kural oluşturun.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Mantıksal kural yok",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Mantıksal kural yok",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Anketin akışını özelleştirmek için bir kural oluşturun.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Anketin akışını özelleştirmek için bir kural oluşturun.",
      // "Show/hide page"
      page_visibilityName: "Sayfa görünürse",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "Sayfayı etkinleştirme/devre dışı bırakma",
      // [Auto-translated] "Make page required"
      page_requireName: "Sayfayı gerekli hale getirme",
      // "Show/hide panel"
      panel_visibilityName: "Panel görünürse",
      // "Enable/disable panel"
      panel_enableName: "Panel aktif/pasif ise",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Paneli gerekli hale getirin",
      // "Show/hide question"
      question_visibilityName: "Soru görüürse",
      // "Enable/disable question"
      question_enableName: "Soru aktif/pasifse",
      // "Make question required"
      question_requireName: "Soru isteğe bağlı zorunluysa",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Soru değerini sıfırla",
      // [Auto-translated] "Set question value"
      question_setValueName: "Soru değerini ayarla",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "Sütunu göster/gizle",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "Sütunu etkinleştir/devre dışı bırak",
      // [Auto-translated] "Make column required"
      column_requireName: "Sütunu gerekli kıl",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Sütun değerini sıfırla",
      // [Auto-translated] "Set column value"
      column_setValueName: "Sütun değerini ayarla",
      // "Complete survey"
      trigger_completeName: "Anketi tamamla",
      // "Set answer"
      trigger_setvalueName: "Soru değerini güncelle",
      // "Copy answer"
      trigger_copyvalueName: "Soru değerini kopyala",
      // "Skip to question"
      trigger_skipName: "Soruyu atla",
      // "Run expression"
      trigger_runExpressionName: "Varsayılan ifadeyi çalıştır",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Varyalın 'Teşekkür sayfası' yazısı",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Mantıksal sorgu geçerli olduğu zaman sayfayı görünür yap. Aksi takdirde gizle.",
      // "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Mantıksal sorgu geçerli olduğu zaman paneli görünür yap. Aksi takdirde gizle.",
      // "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Panel oluştur ve tüm nesneleri panelin içine al. Mantıksal sorgu geçerli olduğunda paneli aktif et. Aksi takdirde tümünü pasifleştir.",
      // "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Mantıksal sorgu geçerli olduğunda soruyu görünür yap. Aksi takdirde gizle.",
      // "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Mantıksal sorgu geçerli olduğunda soruyu aktif yap. Aksi takdirde pasifleştir.",
      // "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Mantıksal sorgu geçerli olduğunda soruyu zorunlu olarak düzenle.",
      // "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Mantıksal sorgu geçerli olduğunda anketi tamamla ve son kullanıya 'Teşekkür sayfası'nı göster.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, değer seçilen soruya ayarlansın.",
      // "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, seçilen bir sorunun değeri seçilen başka bir soruya kopyalansın.",
      // "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Mantıksal ifade geçerli olduğunda anket seçilen soruya atlasın / odaklansın.",
      // "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Mantksal ifade geçerli olduğunda ve özel ifade gereçli olur. İsteğe bağlı olarak bu ifade sonucunu seçilen soruya ayarlayabilirsiniz.",
      // "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Eğer mantıksa ifade geçerli olursa, varsayılan ''Teşekkürler sayfası' yazısı girilen ile dğeiştirilsin.",
      // "When expression: '{0}' returns true"
      itemExpressionText: "Mantıksal ifade: '{0}' geçerli olsun:", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Yeni kural",
      // "make page {0} visible"
      page_visibilityText: "{0} sayfayı görünür yap", // {0} page name
      // "make panel {0} visible"
      panel_visibilityText: "{0} paneli görünür yap", // {0} panel name
      // "make panel {0} enable"
      panel_enableText: "{0} panel aktif olur", // {0} panel name
      // "make question {0} visible"
      question_visibilityText: "{0} soruyu görünür yap", // {0} question name
      // "make question {0} enable"
      question_enableText: "{0} soruyu aktif yap", // {0} question name
      // "make question {0} required"
      question_requireText: "{0} cevabı zorunlu yap", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "Soru için sıfırlama değeri: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Değer atayın: Soruya {1}: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Soru {1} sütununu {0} görünür hale getirme", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Sütunun {0} soru {1} etkinleştirin", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "Sütun {0} soru {1} gerekli hale getirmek", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Sütun için hücre değerini sıfırla: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Hücre değeri atayın: Sütuna {1}: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Sonucu hedef soruya atanacak bir ifade.",
      // "survey becomes completed"
      trigger_completeText: "Anket tamamlandı",
      // "set into question: {0} value {1}"
      trigger_setvalueText: "Sorunun içine: {0} değer {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "net soru değeri: {0}", // {0} question name
      // "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Sorusundan {1}, {0} değerini, soruya kopyala", // {0} and {1} question names
      // "survey skip to the question {0}"
      trigger_skipText: "Soruya geç {0}", // {0} question name
      // "run expression: '{0}'"
      trigger_runExpressionText1: "Mantıksal ifadeyi çalıştır: '{0}'", // {0} the expression
      // " and set its result into question: {0}"
      trigger_runExpressionText2: " ve sonuç değerini soruya ekle: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "Özel 'Teşekkürler sayfasını' göster.",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Tüm Sorular",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Tüm Eylem Türleri",
      // "Condition(s)"
      conditions: "Koşul(lar)",
      // "Action(s)"
      actions: "Olay(lar)",
      // "Define condition(s)"
      expressionEditorTitle: "Koşul(ları) tanımla",
      // "Define action(s)"
      actionsEditorTitle: "Olay(ları) tanımla",
      // "Delete Action"
      deleteAction: "Olayı Sil",
      // "Add Action"
      addNewAction: "Yeni olay ekle",
      // "Select action..."
      selectedActionCaption: "Eklemek için bir olay seçin...",
      // "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Mantıksal ifade boş veya geçersiz. Lütfen düzenleyin.",
      // "Please add at least one action."
      noActionError: "Lütfen, En az bir olay seçiniz.",
      // "Please fix issues in your action(s)."
      actionInvalid: "Lütfen, Olay(lar)daki sorunları gideriniz.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Mantıksal kurallar eksik",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Bazı mantıksal kuralları tamamlamadınız. Sekmeyi şimdi bırakırsanız, değişiklikler kaybolur. Yine de değişiklikleri tamamlamadan sekmeden çıkmak istiyor musunuz?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Evet",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Hayır, kuralları tamamlamak istiyorum"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Panel adı",
      // [Auto-translated] "Panel title"
      title: "Panel başlığı",
      // [Auto-translated] "Panel description"
      description: "Panel açıklaması",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Aşağıdaki durumlarda paneli görünür hale getirin",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Aşağıdaki durumlarda paneli gerekli hale getirin",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Panel içinde soru sırası",
      // [Auto-translated] "Move the panel to page"
      page: "Paneli sayfaya taşıma",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Paneli yeni bir satırda görüntüleme",
      // [Auto-translated] "Panel collapse state"
      state: "Panel çökme durumu",
      // [Auto-translated] "Inline panel width"
      width: "Satır içi panel genişliği",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimum panel genişliği",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maksimum panel genişliği",
      // [Auto-translated] "Number this panel"
      showNumber: "Bu paneli numaralandırın"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Etkili genişlik, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Soru başlığı genişliği, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Panel adı",
      // [Auto-translated] "Panel title"
      title: "Panel başlığı",
      // [Auto-translated] "Panel description"
      description: "Panel açıklaması",
      // [Auto-translated] "Entry display mode"
      displayMode: "Giriş görüntüleme modu",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Aşağıdaki durumlarda paneli görünür hale getirin",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Aşağıdaki durumlarda paneli gerekli hale getirin",
      // [Auto-translated] "Move the panel to page"
      page: "Paneli sayfaya taşıma",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Paneli yeni bir satırda görüntüleme",
      // [Auto-translated] "Panel collapse state"
      state: "Panel çökme durumu",
      // [Auto-translated] "Inline panel width"
      width: "Satır içi panel genişliği",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Minimum panel genişliği",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Maksimum panel genişliği",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Girişin kaldırılmasını onaylayın",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Giriş açıklama deseni",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Giriş başlığı deseni",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Boş panel metni",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Sekme başlığı deseni",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Sekme başlığı yer tutucusu",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Aşağıdaki durumlarda tek bir girişi görünür hale getirin",
      // [Auto-translated] "Number the panel"
      showNumber: "Paneli numaralandırma",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Panel başlığı hizalaması",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Panel açıklaması hizalaması",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Soru başlığı hizalaması",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Soru başlığı genişliği",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Hata iletisi hizalaması",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Yeni giriş konumu",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Aşağıdaki soruda yinelenen yanıtları önleyin"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Soru adı",
      // [Auto-translated] "Question title"
      title: "Soru başlığı",
      // [Auto-translated] "Question description"
      description: "Soru açıklaması",
      // [Auto-translated] "Show the title and description"
      showTitle: "Başlığı ve açıklamayı gösterme",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Aşağıdaki durumlarda soruyu görünür hale getirin",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Aşağıdaki durumlarda soruyu gerekli hale getirin",
      // [Auto-translated] "Move the question to page"
      page: "Soruyu sayfaya taşıma",
      // [Auto-translated] "Question box collapse state"
      state: "Soru kutusu daraltma durumu",
      // [Auto-translated] "Number this question"
      showNumber: "Bu soruyu numaralandırın",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Soru başlığı hizalaması",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Soru açıklaması hizalaması",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Hata iletisi hizalaması",
      // [Auto-translated] "Increase the inner indent"
      indent: "İç girintiyi artırma",
      // [Auto-translated] "Inline question width"
      width: "Satır içi soru genişliği",
      // [Auto-translated] "Minimum question width"
      minWidth: "Minimum soru genişliği",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Maksimum soru genişliği",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Giriş alanı değerini güncelleştirme"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "İmza alanı genişliği",
      // [Auto-translated] "Signature area height"
      signatureHeight: "İmza alanı yüksekliği",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "İmza alanını otomatik ölçeklendirme",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "İmza alanı içinde yer tutucu gösterme",
      // [Auto-translated] "Placeholder text"
      placeholder: "Yer tutucu metin",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Salt okunur veya önizleme modunda yer tutucu metin",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "İmza alanı içinde Temizle düğmesini gösterme",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Minimum kontur genişliği",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Maksimum strok genişliği",
      // [Auto-translated] "Stroke color"
      penColor: "Kontur rengi"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Giriş alanı yüksekliği (satırlarda)"
    },
    // "Question numbering"
    showQuestionNumbers: "Soru numarasını göster",
    // "Question indexing type"
    questionStartIndex: "Soru indeksi (1, 2 veya 'A', 'a' gibi)",
    expression: {
      // [Auto-translated] "Expression name"
      name: "İfade adı",
      // [Auto-translated] "Expression title"
      title: "İfade başlığı",
      // [Auto-translated] "Expression description"
      description: "İfade açıklaması",
      // [Auto-translated] "Expression"
      expression: "İfade"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "İfade"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "İfade"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Anket başlığı",
      // [Auto-translated] "Survey description"
      description: "Anket açıklaması",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Anketi salt okunur hale getirin"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Sayfa adı",
      // [Auto-translated] "Page title"
      title: "Sayfa başlığı",
      // [Auto-translated] "Page description"
      description: "Sayfa açıklaması",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Aşağıdaki durumlarda sayfayı görünür hale getirin",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Aşağıdaki durumlarda sayfayı gerekli hale getirin",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Sayfayı tamamlamak için zaman sınırı",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Sayfadaki soru sırası"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Sütun adı",
      // [Auto-translated] "Column title"
      title: "Sütun başlığı",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Yinelenen yanıtları önleyin",
      // [Auto-translated] "Column width"
      width: "Sütun genişliği",
      // [Auto-translated] "Minimum column width"
      minWidth: "Minimum sütun genişliği",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Giriş alanı yüksekliği (satırlarda)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Aşağıdaki durumlarda sütunu görünür hale getirin",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Aşağıdaki durumlarda sütunu gerekli yap",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Her seçenek ayrı bir sütunda"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Aynı satırdaki diğerlerini temizleme"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Ad",
      // [Auto-translated] "Title"
      title: "Başlık"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Anket sonuçlarında maskelenmiş değeri kaydetme"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Değer örüntüsü"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Minimum değer",
      // [Auto-translated] "Maximum value"
      max: "Maksimum değer"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Negatif değerlere izin ver",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Binlik ayırıcı",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Ondalık ayırıcı",
      // [Auto-translated] "Value precision"
      precision: "Değer hassasiyeti",
      // [Auto-translated] "Minimum value"
      min: "Minimum değer",
      // [Auto-translated] "Maximum value"
      max: "Maksimum değer"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Para birimi öneki",
      // [Auto-translated] "Currency suffix"
      suffix: "Para birimi son eki"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Seçildiğinde diğerlerini temizleme",
    // [Auto-translated] "Display both text and value"
    showValue: "Hem metni hem de değeri görüntüleyin",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Kullanıcının bir açıklama girmesini gerektir",
    // "Display area height"
    imageHeight: "Resim yüksekliği",
    // "Display area width"
    imageWidth: "Resim genişliği",
    // "Join identifier"
    valueName: "Değer adı",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Dinamik metinler için varsayılan görüntüleme değeri",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Etiket hizalama",
    // [Auto-translated] "Input field width (in characters)"
    size: "Giriş alanı genişliği (karakter olarak)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Hücre hata iletisi hizalaması",
    // [Auto-translated] "Enabled"
    enabled: "Etkin",
    // [Auto-translated] "Disabled"
    disabled: "Sakat",
    // [Auto-translated] "Inherit"
    inherit: "Devralır",
    // "Apply"
    apply: "Uygula",
    // "OK"
    ok: "TAMAM",
    // "Save"
    save: "Kaydet",
    // [Auto-translated] "Clear"
    clear: "Berrak",
    // [Auto-translated] "Save"
    saveTooltip: "Kurtarmak",
    // "Cancel"
    cancel: "İptal",
    // [Auto-translated] "Set"
    set: "Ayarlamak",
    // "Reset"
    reset: "Sıfırla",
    // [Auto-translated] "Change"
    change: "Değiştirmek",
    // "Refresh"
    refresh: "Yenile",
    // [Auto-translated] "Close"
    close: "Kapatmak",
    // "Delete"
    delete: "Sil",
    // "Add"
    add: "Ekle",
    // "Add New"
    addNew: "Yeni Ekle",
    // "Click to add an item..."
    addItem: "Yeni nesne ekleme için tıklayınız...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Öğeyi kaldırmak için tıklayın...",
    // [Auto-translated] "Drag the item"
    dragItem: "Öğeyi sürükleyin",
    // "Other"
    addOther: "Diğer",
    // "Select All"
    addSelectAll: "Tümünü Seç",
    // "None"
    addNone: "Hiçbiri",
    // "Remove All"
    removeAll: "Tümünü Sil",
    // "Edit"
    edit: "Düzenle",
    // "Return without saving"
    back: "Kaydetmeden çık",
    // [Auto-translated] "Return without saving"
    backTooltip: "Kaydetmeden geri dönün",
    // "Save and return"
    saveAndBack: "Kaydet ve çık",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "Kaydet ve geri dön",
    // [Auto-translated] "Done"
    doneEditing: "Yapılmış",
    // "Edit Choices"
    editChoices: "Seçenekleri düzenle",
    // "Show Choices"
    showChoices: "Seçenekleri göster",
    // "Move"
    move: "Hareket",
    // "<empty>"
    empty: "<boş>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Değer boş",
    // "Manual Entry"
    fastEntry: "Hızlı Giriş",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "'{0}' değeri benzersiz değil",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Lütfen öğe sayısını {0}'den {1}'ye sınırlayın",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Lütfen en az {0} ürün girin",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Seçim seçenekleri listesini ve kimliklerini aşağıdaki biçimde girin:\n\nkimlik|seçenek\n\nSeçim seçeneği kimliği yanıtlayanlar tarafından görülemez ve koşullu kurallarda kullanılabilir.",
    // "Form Entry"
    formEntry: "Form Girişi",
    // "Test the service"
    testService: "Servisi test et",
    // "Please select the element"
    itemSelectorEmpty: "Lütfen nesneyi seçiniz",
    // "Please select the action"
    conditionActionEmpty: "Lütfen olayı seçiniz",
    // "Select a question..."
    conditionSelectQuestion: "Soruyu seç...",
    // "Select a page..."
    conditionSelectPage: "Sayfayı seç...",
    // "Select a panel..."
    conditionSelectPanel: "Paneli seç...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Lütfen değer/seçenek giriniz",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Mantıksal ifade kopyası için ctrl+space tuşlarına basınız",
    // "Current row"
    aceEditorRowTitle: "Geçerli satır",
    // "Current panel"
    aceEditorPanelTitle: "Geçerli panel",
    // "For more details please check the documentation"
    showMore: "Daha fazla bilgi için dokümantasyonu inceleyiniz",
    // "Available questions"
    assistantTitle: "Erişilebilir sorular:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "En az bir kolon veya satır olmalı",
    // "Review before submit"
    showPreviewBeforeComplete: "Tamamlanmadan önce önizlemeyi göster",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Bir koşul tarafından etkinleştirildi",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Sıfırlama",
    // "Please enter a value"
    propertyIsEmpty: "Lütfen değer giriniz",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "Lütfen benzersiz bir değer girin",
    // "Please enter a unique name"
    propertyNameIsNotUnique: "Lütfen benzersiz bir isim giriniz",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Ayrılmış kelimeler kullanmayın: \"öğe\", \"seçim\", \"panel\", \"satır\".",
    // "You don't have any items yet"
    listIsEmpty: "Yeni eleman ekle",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "Henüz başka seçeneğiniz yok",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Henüz sütununuz yok",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Henüz düzen sütunlarına sahip değilsiniz",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Henüz satırınız yok",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Henüz herhangi bir doğrulama kuralınız yok",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Henüz özelleştirilebilen değişkeniniz yok",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Henüz herhangi bir tetikleyiciniz yok",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Henüz bağlantınız yok",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Henüz hiç sayfanız yok",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "Yeni seçim ekle",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Yeni sütun ekle",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Yeni satır ekle",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Yeni kural ekle",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Yeni değişken ekle",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Yeni tetikleyici ekle",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Yeni URL ekle",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Yeni sayfa ekle",
    // "Expression is empty"
    expressionIsEmpty: "Mantıksal ifade boş",
    // "Value"
    value: "Değer",
    // "Text"
    text: "Yazı",
    // "Row ID"
    rowid: "Satır ID",
    // "Image or video file URL"
    imageLink: "Resim linki",
    // "Edit column: {0}"
    columnEdit: "Kolonu düzenle: {0}",
    // "Edit item: {0}"
    itemEdit: "Eleman düzenle: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Yol",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "Web hizmeti URL'si",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Aşağıdaki özellikten depolanacak değeri alın"
    },
    // "Get value to display from the following property"
    titleName: "Başlık adı",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "Aşağıdaki özellikten dosya URL'lerini alın",
    // "Accept empty response"
    allowEmptyResponse: "Boş cevaba izin ver",
    // "Title"
    titlePlaceholder: "Başlık",
    // "Survey Title"
    surveyTitlePlaceholder: "Anket başlığı",
    // "Page {num}"
    pageTitlePlaceholder: "Sayfa başlığı",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Başlangıç Sayfası",
    // "Description"
    descriptionPlaceholder: "Bir açıklama giriniz",
    // "Description"
    surveyDescriptionPlaceholder: "Anket açıklaması giriniz",
    // "Description"
    pageDescriptionPlaceholder: "Sayfa açıklaması giriniz",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Sarma seçenekleri",
    // "Enable the \"Other\" option"
    showOtherItem: "Başka bir öğeye sahip",
    // "Rename the \"Other\" option"
    otherText: "Diğer eleman metni",
    // "Enable the \"None\" option"
    showNoneItem: "Hiçbir elemana sahip değil",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "\"Yanıtlamayı Reddet\" seçeneğini etkinleştirin",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "\"Bilmiyorum\" seçeneğini etkinleştirin",
    // "Rename the \"None\" option"
    noneText: "Hiçbir eleman metni",
    // "Enable the \"Select All\" option"
    showSelectAllItem: "Tüm elemanlar seçildi",
    // "Rename the \"Select All\" option"
    selectAllText: "Tüm elemanların yazısını seç",
    // "Minimum value for auto-generated items"
    choicesMin: "Otomatik oluşturulan öğeler için minimum değer",
    // "Maximum value for auto-generated items"
    choicesMax: "Otomatik oluşturulan öğeler için maksimum değer",
    // "Step value for auto-generated items"
    choicesStep: "Otomatik oluşturulan öğeler arasındaki fark",
    // "Name"
    name: "isim",
    // "Title"
    title: "Başlık",
    // "Cell input type"
    cellType: "Hücre tipi",
    // "Column count"
    colCount: "Kolon sayısı",
    // "Choice order"
    choicesOrder: "Seçenek sırasını seç",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Özel seçimlere izin ver",
    // "Visible"
    visible: "Görünür?",
    // "Required"
    isRequired: "Zorunlu?",
    // [Auto-translated] "Mark as required"
    markRequired: "Gerektiği gibi işaretleyin",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Gerekli işareti kaldırın",
    // "Require an answer in each row"
    eachRowRequired: "Tüm satırlar zorunlu",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Satırlarda yinelenen yanıtları önleme",
    // "Error message for required questions"
    requiredErrorText: "Zorunlu hata yazısı",
    // "Display the question on a new line"
    startWithNewLine: "Yeni satırla başla?",
    // "Rows"
    rows: "Satır sayısı",
    // "Columns"
    cols: "Kolon sayısı",
    // "Placeholder text within input field"
    placeholder: "Giriş varsayılan içeriği",
    // "Show preview area"
    showPreview: "Resim önizleme gösteriliyor mu?",
    // "Store file content in JSON result as text"
    storeDataAsText: "Dosya içeriğini JSON sonucunda metin olarak depola",
    // "Maximum file size (in bytes)"
    maxSize: "Bayt cinsinden maksimum dosya boyutu",
    // "Row count"
    rowCount: "Satır sayısı",
    // "Columns layout"
    columnLayout: "Kolon yerleşimi",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Satır butonu konumu ekle",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Satırları sütunlara dönüştürme",
    // "\"Add Row\" button text"
    addRowText: "Satır butonu yazısı ekle",
    // "\"Remove Row\" button text"
    removeRowText: "Satır butonu yazısını kaldır",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Giriş alanı başlık deseni",
    // "Minimum rating value"
    rateMin: "Minimum oran",
    // "Maximum rating value"
    rateMax: "Maksimum oran",
    // "Step value"
    rateStep: "Oylama adımı",
    // "Minimum value label"
    minRateDescription: "Minimum oran açıklaması",
    // "Maximum value label"
    maxRateDescription: "Maksimum oran açıklaması",
    // "Input type"
    inputType: "Girdi tipi",
    // "Default Answer"
    defaultValue: "Varsayılan değer",
    // "Default texts"
    cellsDefaultRow: "Varsayılan hücre yazısı",
    // "Edit survey settings"
    surveyEditorTitle: "Anket ayarlarını düzenle",
    // "Edit: {0}"
    qEditorTitle: "Düzenle: {0}",
    // "Maximum character limit"
    maxLength: "Maksimum uzunluk",
    // "Build"
    buildExpression: "Kur",
    // "Edit"
    editExpression: "Düzenle",
    // [Auto-translated] "and"
    and: "ve",
    // [Auto-translated] "or"
    or: "veya",
    // "Remove"
    remove: "Kaldır",
    // "Add Condition"
    addCondition: "Koşul ekle",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Koşulları yapılandırmaya başlamak için bir soru seçin.",
    // [Auto-translated] "If"
    if: "Eğer",
    // [Auto-translated] "then"
    then: "sonra",
    // [Auto-translated] "Target question"
    setToName: "Hedef soru",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Cevabın kopyalanacağı soru",
    // [Auto-translated] "Question to skip to"
    gotoName: "Atlanacak soru",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Kural yanlış",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "Anket sonuçlarına ekle",
    // "Make the title and description visible"
    showTitle: "Başlığı göster/gizle",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "Başlığı genişletme/daraltma",
    // "Select a survey language"
    locale: "Varsayılan dil",
    // "Select device type"
    simulator: "Cihaz seçin",
    // "Switch to landscape orientation"
    landscapeOrientation: "Yatay",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Dikey yöne geçme",
    // "Clear hidden question values"
    clearInvisibleValues: "Görünmez değerleri sil",
    // "Limit to one response"
    cookieName: "Çerez adı (anketi yerel olarak iki kez devre dışı bırakmak için)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Bir sonraki sayfada anket sonuçlarını gönder",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "'Diğerleri' değerini ayrı alanda depolayın",
    // "Show page titles"
    showPageTitles: "Sayfa başlıklarını göster",
    // "Show page numbers"
    showPageNumbers: "Sayfa numaralarını göster",
    // "\"Previous Page\" button text"
    pagePrevText: "Önceki sayfa butonu metni",
    // "\"Next Page\" button text"
    pageNextText: "Yeni sayfa butonu metni",
    // "\"Complete Survey\" button text"
    completeText: "Tamamla butonu metni",
    // "\"Review Answers\" button text"
    previewText: "Önizleme düğmesi metni",
    // "\"Edit Answer\" button text"
    editText: "Düğme metnini düzenle",
    // "\"Start Survey\" button text"
    startSurveyText: "Başla butonu yazısı",
    // "Show navigation buttons"
    showNavigationButtons: "Gezinme butonlarını göster (varsayılan gezinme)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Gezinme düğmeleri hizalaması",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Önceki butonu göster (kullanıcı önceki sayfaya dönebilir)",
    // "First page is a start page"
    firstPageIsStartPage: "Anketteki ilk sayfa bir başlangıç sayfasıdır.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Tamamlanan sayfayı en sonunda göster (HTML)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Tüm soruları cevaplarken otomatik olarak sonraki sayfaya git",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Anketi otomatik olarak tamamlama",
    // "Show the progress bar"
    showProgressBar: "İlerleme çubuğunu göster",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "İlerleme çubuğu hizalaması",
    // "Question title alignment"
    questionTitleLocation: "Soru başlığı konumu",
    // "Question title width"
    questionTitleWidth: "Soru başlığı genişliği",
    // "Required symbol(s)"
    requiredMark: "Zorunlu soru sembolü",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Soru başlığı şablonu, varsayılan değer: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Soru hatası konumu",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "İlk soruyu sayfayı değiştirmeye odakla",
    // "Question order"
    questionOrder: "Sayfadaki öğelerin sırası",
    // "Time limit to complete the survey"
    timeLimit: "Anketi bitirmek için maksimum süre",
    // "Time limit to complete one page"
    timeLimitPerPage: "Ankette bir sayfayı bitirmek için maksimum süre",
    // [Auto-translated] "Use a timer"
    showTimer: "Bir zamanlayıcı kullanın",
    // "Timer alignment"
    timerLocation: "Zamanlayıcı panelini göster",
    // "Timer mode"
    timerInfoMode: "Zamanlayıcı paneli modunu göster",
    // "Panel display mode"
    renderMode: "İşleme modu",
    // "Enable entry addition"
    allowAddPanel: "Panel eklemeye izin ver",
    // "Enable entry removal"
    allowRemovePanel: "Panel silmeye izin ver",
    // "\"Add Entry\" button text"
    addPanelText: "Panel ekleme metni",
    // "\"Remove Entry\" button text"
    removePanelText: "Panel silme metni",
    // "Show all elements on one page"
    isSinglePage: "Tüm öğeleri tek bir sayfada göster",
    // "HTML markup"
    html: "Html",
    // [Auto-translated] "Answer"
    setValue: "Cevap",
    // [Auto-translated] "Storage format"
    dataFormat: "Depolama biçimi",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "Satır eklemeyi etkinleştir",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "Satır kaldırmayı etkinleştir",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "Satır yeniden sıralamayı etkinleştir",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Tam görüntüleme alanı genişliğini veya yüksekliğini belirtirseniz uygulanmaz.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "Minimum ekran alanı genişliği",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "Maksimum ekran alanı genişliği",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "Minimum ekran alanı yüksekliği",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "Maksimum ekran alanı yüksekliği",
    // "Minimum value"
    minValue: "Minimum değer",
    // "Maximum value"
    maxValue: "Maksimum değer",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Büyük/küçük harfe duyarlı değil",
    // "Minimum length (in characters)"
    minLength: "Minimum uzunluk",
    // "Allow digits"
    allowDigits: "Rakamlara izin ver",
    // "Minimum count"
    minCount: "Minimum miktar",
    // "Maximum count"
    maxCount: "Maksimum miktar",
    // "Regular expression"
    regex: "Düzenli ifade",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Doğrulama iletisi",
      // [Auto-translated] "Validation expression"
      expression: "Doğrulama ifadesi",
      // [Auto-translated] "Notification type"
      notificationType: "Bildirim türü",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Maksimum uzunluk (karakter cinsinden)"
    },
    // "Total row header"
    totalText: "Toplam metni",
    // "Aggregation method"
    totalType: "Toplam tipi",
    // "Total value expression"
    totalExpression: "Toplam mantıksal ifade",
    // "Total value display format"
    totalDisplayStyle: "Toplam görünüm",
    // "Currency"
    totalCurrency: "Toplam para birimi",
    // "Formatted string"
    totalFormat: "Toplam format",
    // [Auto-translated] "Survey logo"
    logo: "Anket logosu",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "Anket düzeni",
    // "Restrict answer length"
    maxTextLength: "Maksimum metin uzunluğu",
    // "Restrict comment length"
    maxCommentLength: "Maksimum diğerleri uzunluğu",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Yorum alanı yüksekliği (satırlar halinde)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "Metin alanlarını otomatik genişletme",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Kullanıcıların metin alanlarını yeniden boyutlandırmasına izin verme",
    // "Update input field values"
    textUpdateMode: "Metin sorusu değerini güncelleme",
    // [Auto-translated] "Input mask type"
    maskType: "Giriş maskesi türü",
    // "Set focus on the first invalid answer"
    autoFocusFirstError: "İlk hataya odaklan",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Çalıştırma doğrulaması",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Kayıp odakta boş alanları doğrulayın",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "Gönderimden sonra harici bir bağlantıya yönlendirin",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "Dinamik dış bağlantı",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Kullanıcının bu anketi zaten doldurup doldurmadığını göstermek için işaretleme",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "\"Teşekkür Ederim\" sayfası işaretlemesi",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Dinamik \"Teşekkür Ederim\" sayfası işaretlemesi",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Anket modeli yüklenirken gösterilecek işaretleme",
    // [Auto-translated] "Comment area text"
    commentText: "Yorum alanı metni",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Otomatik tamamlama türü",
    // "Label for \"True\""
    labelTrue: "\"Doğru\" etiketi",
    // "Label for \"False\""
    labelFalse: "\"Yanlış\" etiketi",
    // "Show the Clear button"
    allowClear: "Seçeneklerin başlığını göster",
    // [Auto-translated] "Search Mode"
    searchMode: "Arama Modu",
    // [Auto-translated] "Display format"
    displayStyle: "Görüntü formatı",
    // [Auto-translated] "Formatted string"
    format: "Biçimlendirilmiş dize",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Maksimum kesirli basamaklar",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Minimum kesirli basamaklar",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Ekran gruplandırma ayırıcıları",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "Birden çok dosya yüklemeyi etkinleştir",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "Yüklenen resimleri önizleyin",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Kabul edilen dosya türleri",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Yüklemenin tamamlanmasını bekleyin",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Dosya silme işlemini onaylama",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Satır ayrıntıları hizalaması",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Minimum satır sayısı",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Maksimum satır sayısı",
    // "Confirm row removal"
    confirmDelete: "Satır silme işlemini onaylama",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Onay mesajı",
    // [Auto-translated] "Initial number of entries"
    panelCount: "İlk giriş sayısı",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "Minimum giriş sayısı",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "Maksimum giriş sayısı",
    // [Auto-translated] "Initial entry state"
    panelsState: "İlk giriş durumu",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "\"Önceki Giriş\" düğmesi metni",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "\"Sonraki Giriş\" düğmesi metni",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "\"Girişi Kaldır\" düğme hizalaması",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "Satırı yoksa soruyu gizleyin",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Satır yoksa sütunları gizleme",
    // [Auto-translated] "Custom rating values"
    rateValues: "Özel derecelendirme değerleri",
    // [Auto-translated] "Rating count"
    rateCount: "Derecelendirme sayısı",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Derecelendirme yapılandırması",
    slider: {
      // [Auto-translated] "Min value"
      min: "Minimum değer",
      // [Auto-translated] "Max value"
      max: "Maksimum değer",
      // [Auto-translated] "Step value"
      step: "Adım değeri",
      // [Auto-translated] "Show scale labels"
      showLabels: "Ölçek etiketlerini göster",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Araç ipuçlarını göster",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Başparmak geçişine izin ver",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Otomatik olarak oluşturulan etiketlerin sayısı",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Minimum değer ifadesi",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Maksimum değer ifadesi",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Ölçek etiketleri yapılandırması",
      // [Auto-translated] "Slider type"
      sliderType: "Kaydırıcı türü",
      // [Auto-translated] "Min range length"
      minRangeLength: "Minimum aralık uzunluğu",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Maksimum aralık uzunluğu",
      // [Auto-translated] "Custom labels"
      customLabels: "Özel etiketler",
      // [Auto-translated] "Label format"
      labelFormat: "Etiket biçimi",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Araç ipucu biçimi"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Görüntü yüksekliği",
      // [Auto-translated] "Image width"
      imageWidth: "Görüntü genişliği"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Seçeneği yoksa soruyu gizleyin",
    // "Minimum width"
    minWidth: "Minimum genişlik (CSS tarafından kabul edilen değerlerde)",
    // "Maximum width"
    maxWidth: "Maksimum genişlik (CSS tarafından kabul edilen değerlerde)",
    // "Width"
    width: "Genişlik (CSS tarafından kabul edilen değerlerde)",
    // [Auto-translated] "Show column headers"
    showHeader: "Sütun başlıklarını göster",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Yatay kaydırma çubuğunu göster",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Minimum sütun genişliği",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Satır üstbilgisi genişliği",
    // "Value to store when \"True\" is selected"
    valueTrue: "\"Doğru\" değer",
    // "Value to store when \"False\" is selected"
    valueFalse: "\"False\" değeri",
    // "\"Value is below minimum\" error message"
    minErrorText: "\"Değer minimumun altında\" hata iletisi",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "\"Değer maksimumu aşıyor\" hata iletisi",
    // "\"Empty comment\" error message"
    otherErrorText: "\"Boş yorum\" hata iletisi",
    // "Error message for duplicate responses"
    keyDuplicationError: "\"Benzersiz olmayan anahtar değeri\" hata iletisi",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Seçilecek minimum seçenekler",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Seçilecek maksimum seçenek",
    // "Logo width"
    logoWidth: "Logo genişlik",
    // "Logo height"
    logoHeight: "Logo uzunluk",
    // "Read-only"
    readOnly: "Salt okunur",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Aşağıdaki durumlarda salt okunur modunu devre dışı bırakın",
    // "\"No rows\" message"
    noRowsText: "\"Satır yok\" iletisi",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "Ayrı özel seçenekler",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Aşağıdaki sorudan seçenekleri kopyalama",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Hangi seçim seçeneklerinin kopyalanacağı",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Aşağıdaki matris sütunundaki veya panel sorusundaki değerleri seçim kimlikleri olarak kullanın",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Aşağıdaki matris sütununda veya panel sorusunda yer alan değerleri seçim metinleri olarak kullanın",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "İlerleme çubuğunda sayfa başlıklarını görüntüleme",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "İlerleme çubuğunda sayfa numaralarını görüntüleme",
    // "Add a comment box"
    showCommentArea: "Yorumu var",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Açıklama kutusu için yer tutucu metin",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Etiketleri uç değerler olarak gösterme",
    // [Auto-translated] "Row order"
    rowOrder: "Satır sırası",
    // [Auto-translated] "Column layout"
    columnsLayout: "Sütun düzeni",
    // [Auto-translated] "Nested column count"
    columnColCount: "İç içe geçmiş sütun sayısı",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Doğru Cevap",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Varsayılan Değerler",
    // [Auto-translated] "Cell Texts"
    cells: "Hücre Metinleri",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Bir dosya seçin veya bir dosya bağlantısı yapıştırın...",
    // "Prevent duplicate responses in the following column"
    keyName: "Anahtar sütunu",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Aşağıdaki durumlarda seçeneği görünür hale getirin",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Aşağıdaki durumlarda seçeneği seçilebilir hale getirin"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Aşağıdaki durumlarda satırı görünür hale getirin",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Aşağıdaki durumlarda satırı düzenlenebilir hale getirin"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Alternatif metin"
    },
    // "Logo alignment"
    logoPosition: "Logo pozisyonu",
    // "Add logo..."
    addLogo: "Logo ekle...",
    // "Change logo..."
    changeLogo: "Logoyu değiştir...",
    logoPositions: {
      // "Remove logo"
      none: "Logoyu kaldır",
      // "Left"
      left: "Sol",
      // "Right"
      right: "Sağ",
      // "On the top"
      top: "Üstte",
      // "In the bottom"
      bottom: "Altta"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Önizleme modu",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Izgara düzenini etkinleştir",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Izgara sütunları",
    // [Auto-translated] "Mask settings"
    maskSettings: "Maske ayarları",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Satır ayrıntıları hata iletisi hizalaması",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Panel Düzeni"
      },
      // "General"
      general: "Genel",
      // "Options"
      fileOptions: "Seçenekler",
      // "HTML Editor"
      html: "Html Editor",
      // "Columns"
      columns: "Kolonlar",
      // "Rows"
      rows: "Satırlar",
      // "Choice Options"
      choices: "Seçenekler",
      // "Items"
      items: "Elemanlar",
      // "Visible If"
      visibleIf: "Göster eğer",
      // "Editable If"
      enableIf: "Pasifleştir Eğer",
      // "Required If"
      requiredIf: "Zorunlu Eğer",
      // "Rating Values"
      rateValues: "Oran değerleri",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Kaydırıcı Ayarları",
      // "Choices from a Web Service"
      choicesByUrl: "Webten seçenekler",
      // "Default Choices"
      matrixChoices: "Varsayılan seçenekler",
      // "Text Inputs"
      multipleTextItems: "Yazı girdileri",
      // "Numbering"
      numbering: "Rakamlama",
      // "Validators"
      validators: "Doğrulayıcılar",
      // "Navigation"
      navigation: "Gezinme",
      // "Question Settings"
      question: "Soru",
      // "Pages"
      pages: "Sayfalar",
      // "Quiz Mode"
      timer: "Zamanlayıcı / Sınav",
      // "Calculated Values"
      calculatedValues: "Hesaplanan Değerler",
      // "Triggers"
      triggers: "Tetikleyiciler",
      // "Title template"
      templateTitle: "Şablon başlığı",
      // "Totals"
      totals: "Toplamlar",
      // "Conditions"
      logic: "Mantık",
      // [Auto-translated] "Input Mask Settings"
      mask: "Giriş Maskesi Ayarları",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Panel Düzeni",
        // [Auto-translated] "Layout"
        question: "Düzen",
        // [Auto-translated] "Layout"
        base: "Düzen"
      },
      // "Data"
      data: "Veri",
      // "Validation"
      validation: "Doğrulayıcı",
      // "Individual Cell Texts"
      cells: "Hücreler",
      // "\"Thank You\" Page"
      showOnCompleted: "Tamamlandı Göster",
      // "Logo in the Survey Header"
      logo: "Anket Başlığında Logo",
      // [Auto-translated] "Slider"
      slider: "Kaydırıcı",
      // [Auto-translated] "Expression"
      expression: "İfade",
      // [Auto-translated] "Question Settings"
      questionSettings: "Soru Ayarları",
      // "Header"
      header: "Üstbilgi",
      // "Background"
      background: "Arka plan",
      // "Appearance"
      appearance: "Görünüş",
      // [Auto-translated] "Accent colors"
      accentColors: "Vurgu renkleri",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Yüzey arka planı",
      // [Auto-translated] "Scaling"
      scaling: "Ölçekleme",
      // "Others"
      others: "Diğer"
    },
    // "Edit property '{0}'"
    editProperty: "Özelliği düzenle '{0}'",
    // "Items"
    items: "[ Elemanlar: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Aşağıdaki durumlarda seçimleri görünür hale getirin",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Aşağıdaki durumlarda seçimleri seçilebilir hale getirin",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "Aşağıdaki durumlarda sütunları görünür hale getirin",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "Aşağıdaki durumlarda satırları görünür hale getirin",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "İç girintiyi artırma",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Varsayılan olarak son girişteki yanıtları kullan",
    // "Please enter a value."
    enterNewValue: "Lütfen, değer girin.",
    // "There are no questions in the survey."
    noquestions: "Ankette herhangi bir soru yok.",
    // "Please create a trigger"
    createtrigger: "Lütfen bir tetikleyici oluşturun",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "Düzenlemek için enter düğmesine basın",
    // "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Öğeyi düzenlemek için enter butonuna basın, öğeyi silmek için sil butonuna basın, öğeyi taşımak için kontrol artı ok yukarı veya ok tuşuna basın",
    // "On "
    triggerOn: "Açık ",
    // "Make pages visible"
    triggerMakePagesVisible: "Sayfaları görünür yap:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Elemanları görünür yap:",
    // "Complete the survey if successful."
    triggerCompleteText: "Başarılı olursa anketi tamamlayın.",
    // "The trigger is not set"
    triggerNotSet: "Tetikleyici ayarlanmadı",
    // "Run if"
    triggerRunIf: "Çalıştır eğer",
    // "Change value of: "
    triggerSetToName: "Değerini şuradan değiştir: ",
    // "Copy value from: "
    triggerFromName: "Değerini şuradan kopyala: ",
    // "Run this Expression"
    triggerRunExpression: "Mantıksal ifadeyi çalıştır:",
    // "to: "
    triggerSetValue: "şuraya: ",
    // "Go to the question"
    triggerGotoName: "Soruya git:",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Değişkeni anket sonucuna koymayın.",
    // "Please enter a valid expression"
    triggerRunExpressionEmpty: "Lütfen geçerli bir ifade girin",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "İfadeyi buraya yazın...",
    // [Auto-translated] "No file chosen"
    noFile: "Hiçbir dosya seçilmedi",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "Gizli soru değerlerini temizleme",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Değerleri aşağıdaki özellikte saklayın",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Yazarken aramayı etkinleştirme",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Seçili öğeleri gizle",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Seçimden sonra açılır menüyü daralt",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Hücreler içinde dikey hizalama",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Alternatif satır renkleri",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "Aşağıdaki durumlarda sütunları görünür hale getirin",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "Aşağıdaki durumlarda satırları görünür hale getirin",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Açıklama kutusu için yer tutucu metin",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Yerel dosya için yer tutucu metin",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Kamera için yer tutucu metin",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Yerel dosya veya Kamera için yer tutucu metin",
    // [Auto-translated] "Rating icon"
    rateType: "Derecelendirme simgesi",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Ör.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Ör.: kategoriler.kurgu",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Örn.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Ör.: 6 inç",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Ör.: 600 piksel",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Ör.: %50",
    // "auto"
    imageHeight_placeholder: "Otomatik",
    // "auto"
    imageWidth_placeholder: "Otomatik",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Ör.: 100 piksel",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Tema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Soru görünümü",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Arka plan ve köşe yarıçapı",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Arka plan ve köşe yarıçapı",
      // [Auto-translated] "Accent color"
      primaryColor: "Vurgu rengi",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Panel ve soru kutusu opaklığı",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Giriş elemanı opaklığı",
      // [Auto-translated] "Survey font size"
      fontSize: "Anket yazı tipi boyutu",
      // [Auto-translated] "Survey scale factor"
      scale: "Anket ölçek faktörü",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Köşe yarıçapı",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Gelişmiş mod",
      // [Auto-translated] "Title font"
      pageTitle: "Başlık yazı tipi",
      // [Auto-translated] "Description font"
      pageDescription: "Açıklama yazı tipi",
      // [Auto-translated] "Title font"
      questionTitle: "Başlık yazı tipi",
      // [Auto-translated] "Description font"
      questionDescription: "Açıklama yazı tipi",
      // [Auto-translated] "Font"
      editorFont: "Yazı tipi",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Opak -lık", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Anket yazı tipi ailesi",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Arka plan rengi",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Vurgu arka plan renkleri",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Vurgu ön plan renkleri",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Hata mesajı renkleri",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Gölge efektleri",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Gölge efektleri",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Renk"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Görünüm",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Logo hizalama",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Anket başlığı yazı tipi",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Anket açıklaması yazı tipi",
      // [Auto-translated] "Survey title font"
      headerTitle: "Anket başlığı yazı tipi",
      // [Auto-translated] "Survey description font"
      headerDescription: "Anket açıklaması yazı tipi",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "İçerik alanı genişliği",
      // [Auto-translated] "Text width"
      textAreaWidth: "Metin genişliği",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Arka plan rengi",
      // [Auto-translated] "Background image"
      backgroundImage: "Arka plan resmi",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Opak -lık",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Örtüş",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Logo hizalama",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Anket başlığı hizalaması",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Anket açıklaması hizalaması"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "doğru",
    // [Auto-translated] "false"
    "false": "yanlış",
    // [Auto-translated] "Local file"
    file: "Yerel dosya",
    // [Auto-translated] "Camera"
    camera: "Kamera",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "Yerel dosya veya Kamera",
    // "Inherit"
    inherit: "Başlangıç",
    // "Visible"
    show: "Göster",
    // "Hidden"
    hide: "Gizle",
    // "Inherit"
    default: "Varsayılan",
    // "Initial"
    initial: "Başlangıç",
    // "Random"
    random: "Rastgele",
    // "Collapsed"
    collapsed: "Kapalı",
    // "Expanded"
    expanded: "Genişletilmiş",
    // "None"
    none: "Yok",
    // "Ascending"
    asc: "Artan",
    // "Descending"
    desc: "Azalan",
    // "Indeterminate"
    indeterminate: "Belirsiz",
    // [Auto-translated] "Selected"
    selected: "Seçilmiş",
    // [Auto-translated] "Unselected"
    unselected: "Seçili",
    // [Auto-translated] "decimal"
    decimal: "On -da -lık",
    // [Auto-translated] "currency"
    currency: "para birimi",
    // [Auto-translated] "percent"
    percent: "yüzde",
    // "First panel is expanded"
    firstExpanded: "firstExpanded",
    // "Hide question numbers"
    off: "Kapalı",
    // "List"
    list: "Liste",
    // [Auto-translated] "Carousel"
    carousel: "Atlıkarınca",
    // [Auto-translated] "Tabs"
    tab: "Sekmeler",
    // "Panel navigator + Progress bar at the top"
    progressTop: "progressTop",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "progressBottom",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "progressTopBottom",
    // "Horizontal"
    horizontal: "Yatay",
    // "Vertical"
    vertical: "Dikey",
    // "Top"
    top: "Üst",
    // "Bottom"
    bottom: "Alt",
    // "Top and bottom"
    topBottom: "Üst ve alt",
    // "Both"
    both: "Her ikiside",
    // "Left"
    left: "Sol",
    // [Auto-translated] "Right"
    right: "Sağ",
    // [Auto-translated] "Center"
    center: "Orta",
    // [Auto-translated] "Left and right"
    leftRight: "Sol ve sağ",
    // [Auto-translated] "Middle"
    middle: "Orta",
    // [Auto-translated] "color"
    color: "Renk",
    // [Auto-translated] "date"
    date: "tarih",
    // [Auto-translated] "datetime"
    datetime: "datetime",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-yerel",
    // [Auto-translated] "email"
    email: "E-posta",
    // [Auto-translated] "month"
    month: "ay",
    // [Auto-translated] "number"
    number: "sayı",
    // [Auto-translated] "password"
    password: "parola",
    // [Auto-translated] "range"
    range: "aralık",
    // [Auto-translated] "tel"
    tel: "telefon",
    // [Auto-translated] "text"
    text: "Metin",
    // [Auto-translated] "time"
    time: "Saat",
    // [Auto-translated] "url"
    url: "URL",
    // [Auto-translated] "week"
    week: "hafta",
    // "Hidden"
    hidden: "Gizli",
    // "Editable"
    edit: "Düzenle",
    // "Read-only"
    display: "Görüntüle",
    // [Auto-translated] "Contain"
    contain: "Kapsamak",
    // [Auto-translated] "Cover"
    cover: "Örtmek",
    // [Auto-translated] "Fill"
    fill: "Doldurmak",
    // [Auto-translated] "Next"
    next: "Önümüzdeki",
    // [Auto-translated] "Last"
    last: "Son",
    // "Upon survey completion"
    onComplete: "Tamamlandığında",
    // "When question gets hidden"
    onHidden: "Gizlendiğinde",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "Soru veya paneli/sayfası gizlendiğinde",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Hiç"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Hiç"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Radyo Düğmeleri",
    inputType: {
      // [Auto-translated] "Color"
      color: "Renk",
      // [Auto-translated] "Date"
      date: "Tarih",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Tarih ve Saat",
      // [Auto-translated] "Email"
      email: "E-posta",
      // [Auto-translated] "Month"
      month: "Ay",
      // [Auto-translated] "Number"
      number: "Sayı",
      // [Auto-translated] "Password"
      password: "Parola",
      // [Auto-translated] "Range"
      range: "Aralık",
      // [Auto-translated] "Phone Number"
      tel: "Telefon numarası",
      // [Auto-translated] "Text"
      text: "Metin",
      // [Auto-translated] "Time"
      time: "Saat",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Hafta"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Tek Değer",
      // [Auto-translated] "Range"
      range: "Aralık"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Otomatik",
      // [Auto-translated] "Always"
      always: "Her zaman",
      // [Auto-translated] "Never"
      never: "Hiç"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Hata",
      // [Auto-translated] "Warning"
      warning: "Uyarı",
      // [Auto-translated] "Informational"
      info: "Bilgi"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Adınız ve Soyadınız",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Önek",
      // [Auto-translated] "First Name"
      "given-name": "Ad",
      // [Auto-translated] "Middle Name"
      "additional-name": "İkinci İsim",
      // [Auto-translated] "Last Name"
      "family-name": "Soyadı",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Sonek",
      // [Auto-translated] "Nickname"
      nickname: "Lakap",
      // [Auto-translated] "Job Title"
      "organization-title": "İş Ünvanı",
      // [Auto-translated] "User Name"
      username: "Kullanıcı Adı",
      // [Auto-translated] "New Password"
      "new-password": "Yeni Şifre",
      // [Auto-translated] "Current Password"
      "current-password": "Mevcut Şifre",
      // [Auto-translated] "Organization Name"
      organization: "Kuruluş Adı",
      // [Auto-translated] "Full Street Address"
      "street-address": "Açık Adres",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Adres Satırı 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Adres Satırı 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Adres Satırı 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Seviye 4 Adres",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Seviye 3 Adres",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Seviye 2 Adres",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Seviye 1 Adres",
      // [Auto-translated] "Country Code"
      country: "Ülke Kodu",
      // [Auto-translated] "Country Name"
      "country-name": "Ülke Adı",
      // [Auto-translated] "Postal Code"
      "postal-code": "Posta Kodu",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Kart Sahibinin Adı",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Kart Sahibinin Adı",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Kart Sahibinin İkinci Adı",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Kart Sahibinin Soyadı",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Kredi Kartı Numarası",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Son kullanma tarihi",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Son kullanma ayı",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Son kullanma yılı",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Kart Güvenlik Kodu",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Kredi Kartı Türü",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "İşlem Para Birimi",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "İşlem Tutarı",
      // [Auto-translated] "Preferred Language"
      language: "Tercih Edilen Dil",
      // [Auto-translated] "Birthday"
      bday: "Doğum günü",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Doğum Günü",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Doğum Günü Ayı",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Doğum Günü Yılı",
      // [Auto-translated] "Gender"
      sex: "Cinsiyet",
      // [Auto-translated] "Website URL"
      url: "Web Sitesi URL'si",
      // [Auto-translated] "Profile Photo"
      photo: "Profil Fotoğrafı",
      // [Auto-translated] "Telephone Number"
      tel: "Telefon numarası",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Telefon için Ülke Kodu",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Ulusal Telefon Numarası",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Alan kodu",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Yerel Telefon Numarası",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Yerel Telefon Öneki",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Yerel Telefon Soneki",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Telefon Uzantısı",
      // [Auto-translated] "Email Address"
      email: "E-posta Adresi",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Anlık Mesajlaşma Protokolü"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Hiç kimse",
      // [Auto-translated] "Pattern"
      pattern: "Desen",
      // [Auto-translated] "Numeric"
      numeric: "Sayısal",
      // [Auto-translated] "Date and Time"
      datetime: "Tarih ve Saat",
      // [Auto-translated] "Currency"
      currency: "Para birimi"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Otomatik",
      // [Auto-translated] "Left"
      left: "Sol",
      // [Auto-translated] "Right"
      right: "Sağ"
    },
    // "All"
    all: "Tümü",
    // "Page"
    page: "Sayfa",
    // "Survey"
    survey: "Anket",
    // "When switching to the next page"
    onNextPage: "Sonraki sayfada",
    // "After an answer is changed"
    onValueChanged: "Değer değiştiğinde",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Bir yanıt değiştirilmeden önce",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Orijinal yapı",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Tüm soruları tek bir sayfada göster",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Sayfa başına tek bir soru göster",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Sayfa başına tek giriş alanı göster"
    },
    // "No preview"
    noPreview: "Önizleme yok",
    // "Show all questions"
    showAllQuestions: "Tüm soruları göster",
    // "Show answered questions only"
    showAnsweredQuestions: "Cevaplanan soruları göster",
    // [Auto-translated] "Show all questions"
    allQuestions: "Tüm soruları göster",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Yalnızca yanıtlanmış soruları göster",
    // [Auto-translated] "Completed pages"
    pages: "Tamamlanan sayfalar",
    // "Answered questions"
    questions: "Sorular",
    // "Answered required questions"
    requiredQuestions: "Gerekli sorular",
    // "Valid answers"
    correctQuestions: "Doğru sorular",
    // "Completed pages (button UI)"
    buttons: "Butonlar",
    // "Under the input field"
    underInput: "Giriş altında",
    // "Under the question title"
    underTitle: "Başlık altında",
    // [Auto-translated] "On lost focus"
    onBlur: "Odak kaybı üzerine",
    // [Auto-translated] "While typing"
    onTyping: "Yazarken",
    // [Auto-translated] "Under the row"
    underRow: "Satırın altında",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "Satırın altında yalnızca bir bölüm görüntüleyin",
    // "Auto"
    auto: "Otomatik",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "Gizli"
    },
    timerInfoMode: {
      // "Both"
      combined: "Her ikisi"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "Matris düzenine göre"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Kilitli",
      // [Auto-translated] "Collapse all"
      collapsed: "Tümünü daralt",
      // [Auto-translated] "Expand all"
      expanded: "Tümünü genişlet",
      // [Auto-translated] "First expanded"
      firstExpanded: "İlk genişletildi"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Duruk",
      // [Auto-translated] "Responsive"
      responsive: "Duyarlı"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Resim",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "Videolar"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Düğme",
      // [Auto-translated] "Dropdown"
      dropdown: "Açılır menü"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Temerrüt",
      // [Auto-translated] "Scale"
      scale: "Ölçeklemek"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monokrom",
      // [Auto-translated] "Colored"
      colored: "Renkli"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Otomatik oluştur",
      // [Auto-translated] "Manual"
      "false": "El ile"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Etiket",
      // [Auto-translated] "Stars"
      stars: "Yıldız",
      // [Auto-translated] "Smileys"
      smileys: "Suratlar"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Kilitli"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Otomatik numaralandırma",
      // [Auto-translated] "Auto-numbering"
      on: "Otomatik numaralandırma",
      // [Auto-translated] "Reset on each page"
      onPage: "Her sayfada sıfırla",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Her panelde sıfırla",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Her panelde sıfırla",
      // [Auto-translated] "Recursive numbering"
      recursive: "Özyinelemeli numaralandırma",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Ankete devam edin",
      // [Auto-translated] "No numbering"
      off: "Numaralandırma yok"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Soru başlığı altında",
      // [Auto-translated] "Under the input field"
      underInput: "Giriş alanının altında"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Seçeneklerin yanında",
      // [Auto-translated] "Above choices"
      vertical: "Yukarıdaki seçenekler"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "On -da -lık",
      // [Auto-translated] "Currency"
      currency: "Para birimi",
      // [Auto-translated] "Percentage"
      percent: "Yüzde",
      // [Auto-translated] "Date"
      date: "Tarih"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "On -da -lık",
      // [Auto-translated] "Currency"
      currency: "Para birimi",
      // [Auto-translated] "Percentage"
      percent: "Yüzde",
      // [Auto-translated] "Date"
      date: "Tarih"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Özgün"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Özgün"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Sayfanın Üstü",
      // [Auto-translated] "Bottom"
      bottom: "Dip",
      // [Auto-translated] "Top and bottom"
      topbottom: "Üst ve alt",
      // [Auto-translated] "Above the header"
      aboveheader: "Başlığın üstünde",
      // [Auto-translated] "Below the header"
      belowheader: "Başlığın altında",
      // [Auto-translated] "Hidden"
      off: "Gizli"
    },
    // [Auto-translated] "Sum"
    sum: "Toplam",
    // [Auto-translated] "Count"
    count: "Saymak",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Max",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Içerir",
      // [Auto-translated] "Starts with"
      startsWith: "İle başlar"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Otomatik",
      // [Auto-translated] "Cover"
      cover: "Örtmek",
      // [Auto-translated] "Contain"
      contain: "Kapsamak",
      // [Auto-translated] "Stretch"
      fill: "Uzatmak",
      // [Auto-translated] "Tile"
      tile: "Kiremit"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Sabit",
      // [Auto-translated] "Scroll"
      scroll: "Tomar"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Temel",
      // [Auto-translated] "Advanced"
      advanced: "İleri"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Anketle aynı",
      // [Auto-translated] "Same as container"
      container: "Konteyner ile aynı"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Hiç kimse",
      // [Auto-translated] "Accent color"
      accentColor: "Vurgu rengi",
      // [Auto-translated] "Custom"
      custom: "Töre"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Işık",
      // [Auto-translated] "Dark"
      dark: "Koyu"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Temerrüt",
      // [Auto-translated] "Without Panels"
      "true": "Panelsiz"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Anketle aynı",
      // [Auto-translated] "Same as container"
      container: "Konteyner ile aynı"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "boş",
    // "Not empty"
    notempty: "boş değil",
    // "Equals"
    equal: "eşittir",
    // "Does not equal"
    notequal: "eşit değildir",
    // "Contains"
    contains: "içerir",
    // "Does not contain"
    notcontains: "içermez",
    // "Any of"
    anyof: "herhangi biri",
    // "All of"
    allof: "tümü",
    // "Greater than"
    greater: "büyüktür",
    // "Less than"
    less: "küçüktür",
    // "Greater than or equal to"
    greaterorequal: "büyük eşittir",
    // "Less than or equal to"
    lessorequal: "küçük eşittir",
    // [Auto-translated] "and"
    and: "ve",
    // [Auto-translated] "or"
    or: "veya"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Angular versiyonu kullan",
    // "Use jQuery version"
    jquery: "Jquery versiyonu kullan",
    // "Use Knockout version"
    knockout: "Knockout versiyonu kullan",
    // "Use React version"
    react: "React versiyonu kullan",
    // "Use Vue version"
    vue: "Vue versiyonu kullan",
    // "For bootstrap framework"
    bootstrap: "Bootstrap",
    // [Auto-translated] "Modern theme"
    modern: "Modern tema",
    // [Auto-translated] "Default theme"
    default: "Varsayılan tema",
    // [Auto-translated] "Orange theme"
    orange: "Turuncu tema",
    // [Auto-translated] "Darkblue theme"
    darkblue: "Lacivert tema",
    // [Auto-translated] "Darkrose theme"
    darkrose: "Darkrose teması",
    // [Auto-translated] "Stone theme"
    stone: "Taş teması",
    // [Auto-translated] "Winter theme"
    winter: "Kış teması",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "Kış-Taş teması",
    // "Show survey on a page"
    showOnPage: "Bir sayfada anket göster",
    // "Show survey in a window"
    showInWindow: "Anketi bir pencerede göster",
    // "Load Survey JSON from server"
    loadFromServer: "Anket JSON'u sunucudan yükle",
    // "Scripts and styles"
    titleScript: "Scriptler ve stiller",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Test edilecek sayfayı seçin:",
    // "Show invisible elements"
    showInvisibleElements: "Görünmez öğeleri göster",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Görünmez öğeleri gizleme",
    // [Auto-translated] "Previous"
    prevPage: "Önceki",
    // [Auto-translated] "Next"
    nextPage: "Önümüzdeki"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "cevap sayısı",
    // "Email"
    emailvalidator: "e-mail",
    // "Expression"
    expressionvalidator: "ifade",
    // "Number"
    numericvalidator: "numerik",
    // "Regex"
    regexvalidator: "regex",
    // "Text"
    textvalidator: "text"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "anketi tamamla",
    // "Set answer"
    setvaluetrigger: "değeri ayarla",
    // "Copy answer"
    copyvaluetrigger: "değeri kopyala",
    // "Skip to question"
    skiptrigger: "soruyu atla",
    // "Run expression"
    runexpressiontrigger: "mantıksal ifadeyi çalıştır",
    // "change visibility (deprecated)"
    visibletrigger: "görünürlüğü değiştir (kullanımdan kaldırıldı)"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Ör.: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Ör.: aa/gg/yyyy HH:MM:ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Ör.: $",
      // "Ex.: USD"
      suffix: "Ör.: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Ör.: 200 piksel"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Ör.: %30",
      // "Ex.: 200px"
      questionTitleWidth: "Ör.: 200 piksel"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "Yanıtlayanlar tarafından görülemeyen bir panel kimliği.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Bir panel altyazısı yazın.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Panel görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Panelin salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Bu paneldeki tüm sorular için geçerlidir. \"Gizli\" olarak ayarlandığında, soru açıklamalarını da gizler. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular. ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Soru kutularının soluna hizalandıklarında soru başlıkları için tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Paneldeki tüm sorularla ilgili olarak bir hata mesajının konumunu ayarlar. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını uygular.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Soruların orijinal sırasını korur veya rastgele hale getirir. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını uygular.",
      // "Repositions the panel to the end of a selected page."
      page: "Paneli seçili sayfanın sonuna yeniden konumlandırır.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Panel içeriği ile panel kutusunun sol kenarlığı arasına boşluk veya kenar boşluğu ekler.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Panelin önceki soru veya panelle aynı satırda görüntülenmesi için seçimi kaldırın. Panel formunuzdaki ilk öğeyse bu ayar uygulanmaz.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Şunlar arasından seçim yapın: \"Genişletilmiş\" - panel tam olarak görüntülenir ve daraltılabilir; \"Daraltılmış\" - panel yalnızca başlığı ve açıklamayı görüntüler ve genişletilebilir; \"Kilitli\" - panel tam olarak görüntülenir ve daraltılamaz.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Panelin genişliğini, aynı satırdaki diğer anket öğeleriyle orantılı olarak ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Bu panelde iç içe yerleştirilmiş sorulara numaralar atar.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Bu panelin ızgara mizanpajı içinde kaç sütuna yayılacağını belirtir.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Bu tablo, panel içindeki her bir ızgara sütununu yapılandırmanıza olanak tanır. Bir satırdaki maksimum öğe sayısına bağlı olarak her sütun için genişlik yüzdesini otomatik olarak ayarlar. Tablo düzenini özelleştirmek için bu değerleri manuel olarak ayarlayın ve her sütundaki tüm sorular için başlık genişliğini tanımlayın."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "Yanıtlayanlar tarafından görülemeyen bir panel kimliği.",
      // "Type a panel subtitle."
      description: "Bir panel altyazısı yazın.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Panel görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Panelin salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Bu paneldeki tüm sorular için geçerlidir. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular.",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Soru başlıkları soru kutularının soluna hizalandığında tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Geçersiz girişi olan bir soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular.",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Paneldeki tüm sorularla ilgili olarak bir hata mesajının konumunu ayarlar. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını uygular.",
      // "Repositions the panel to the end of a selected page."
      page: "Paneli seçili sayfanın sonuna yeniden konumlandırır.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Panel içeriği ile panel kutusunun sol kenarlığı arasına boşluk veya kenar boşluğu ekler.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Panelin önceki soru veya panelle aynı satırda görüntülenmesi için seçimi kaldırın. Panel formunuzdaki ilk öğeyse bu ayar uygulanmaz.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Şunlar arasından seçim yapın: \"Genişletilmiş\" - panel tam olarak görüntülenir ve daraltılabilir; \"Daraltılmış\" - panel yalnızca başlığı ve açıklamayı görüntüler ve genişletilebilir; \"Kilitli\" - panel tam olarak görüntülenir ve daraltılamaz.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Panelin genişliğini aynı satırdaki diğer anket öğeleriyle orantılı olarak ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Dinamik panel başlıkları için bir şablon yazın. Panelin genel konumu için {panelIndex} ve görünür paneller arasındaki sırası için {visiblePanelIndex} kullanın. Otomatik numaralandırma eklemek için bu yer tutucuları desene ekleyin.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Sekme başlıkları için bir şablon yazın. Panelin genel konumu için {panelIndex} ve görünür paneller arasındaki sırası için {visiblePanelIndex} kullanın. Otomatik numaralandırma eklemek için bu yer tutucuları desene ekleyin.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Sekme başlığı deseni anlamlı bir değer üretmediğinde geçerli olan sekme başlıkları için bir geri dönüş metni.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Bu ayar, dinamik panel içindeki tek tek panellerin görünürlüğünü kontrol etmenizi sağlar. İfadenizdeki geçerli panele başvurmak için '{panel}' yer tutucusunu kullanın.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Bu ayar, bu paneldeki tüm sorular tarafından otomatik olarak devralınır. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular.",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "\"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Panel başlığı altında\") uygular.",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Yeni eklenen panelin konumunu tanımlar. Varsayılan olarak, sonuna yeni paneller eklenir. Geçerli panelden sonra yeni bir panel eklemek için \"İleri\" yi seçin.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Son girişteki yanıtları çoğaltır ve bunları bir sonraki eklenen girişe atar.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Kullanıcının her panelde bu soruya benzersiz bir yanıt vermesini zorunlu kılmak için bir soru adına başvurun.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Bir girişi kaldırmadan önce bir onay istemini tetikler."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Bir satırı kaldırmadan önce bir onay istemini tetikler.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Matrise yeni bir satır eklendiğinde ayrıntı bölümünü otomatik olarak genişletir."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Son satırdaki yanıtları çoğaltır ve bunları bir sonraki eklenen dinamik satıra atar.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Bu ayar, bir ifadeye göre varsayılan bir yanıt değeri atamanıza olanak tanır. İfade temel hesaplamaları içerebilir - '{q1_id} + {q2_id}', '{age} > 60' gibi Boole ifadeleri ve işlevler: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb. Bu ifade tarafından belirlenen değer, yanıtlayanın manuel girişi tarafından geçersiz kılınabilecek ilk varsayılan değer olarak işlev görür.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Yanıtlayanın girişinin ne zaman \"Varsayılan değer ifadesi\" veya \"Değer ifadesi ayarla\" ya da \"Varsayılan yanıt\" değerine (ayarlanmışsa) dayalı değere ne zaman sıfırlanacağını belirleyen bir koşullu kural ayarlamak için sihirli değnek simgesini kullanın.",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "\"Değer ayarla ifadesinin\" ne zaman çalıştırılacağını belirleyen koşullu bir kural belirlemek ve elde edilen değeri yanıt olarak dinamik olarak atamak için sihirli değnek simgesini kullanın.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "\"Şu durumda değer ayarla\" kuralındaki koşullar karşılandığında ayarlanacak değeri tanımlayan bir ifade belirtin. İfade temel hesaplamaları içerebilir - '{q1_id} + {q2_id}', '{age} > 60' gibi Boole ifadeleri ve işlevler: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb. Bu ifade tarafından belirlenen değer, yanıtlayanın manuel girişi tarafından geçersiz kılınabilir.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Anket Oluşturucu, düzeni kontrol etmek için form öğelerinin satır içi genişliklerini manuel olarak ayarlamanıza olanak tanır. Bu istenen sonucu vermezse, sütun tabanlı bir sistem kullanarak öğeleri oluşturan yapıların ızgara düzenini etkinleştirebilirsiniz. Düzen sütunlarını yapılandırmak için bir sayfa veya panel seçin ve \"Soru Ayarları\" → \"Izgara sütunları\" tablosunu kullanın. Bir sorunun kaç sütuna yayılacağını ayarlamak için soruyu seçin ve \"Düzen\" → \"Sütun aralığı\" alanında istediğiniz değeri ayarlayın.",
    question: {
      // "A question ID that is not visible to respondents."
      name: "Yanıtlayanlar tarafından görülemeyen bir soru kimliği.",
      // "Type a question subtitle."
      description: "Bir soru alt başlığı yazın.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Soru görünürlüğünü belirleyen koşullu bir kural belirlemek için sihirli değnek simgesini kullanın.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Soru için salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Soru yanıt almadıkça anketin ilerlemesini veya gönderilmesini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Soruyu, önceki soru veya panelle birlikte tek satırda görüntülemek için seçimi kaldırın. Soru formunuzdaki ilk öğeyse bu ayar geçerli değildir.",
      // "Repositions the question to the end of a selected page."
      page: "Soruyu seçili sayfanın sonuna konumlandırır.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Şunlar arasından seçim yapın: \"Genişletilmiş\" - soru kutusu tam olarak görüntülenir ve daraltılabilir; \"Daraltılmış\" - soru kutusu yalnızca başlığı ve açıklamayı görüntüler ve genişletilebilir; \"Kilitli\" - soru kutusu tam olarak görüntülenir ve daraltılamaz.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Panel, sayfa veya anket düzeyinde tanımlanan başlık hizalama kurallarını geçersiz kılar. \"Devral\" seçeneği, tüm üst düzey ayarları (ayarlanmışsa) veya anket düzeyindeki ayarları (varsayılan olarak \"Üst\") uygular.",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "\"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Soru başlığının altında\").",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Geçersiz girişi olan soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Üst\").",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Soru içeriği ile soru kutusunun sol kenarlığı arasına boşluk veya kenar boşluğu ekler.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Sorunun genişliğini, aynı satırdaki diğer anket öğeleriyle orantılı olarak ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Şunlar arasından seçim yapın: \"Odak kaybolduğunda\" - giriş alanı odağı kaybettiğinde değer güncellenir; \"Yazarken\" - değer, kullanıcılar yazarken gerçek zamanlı olarak güncellenir. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Odak kaybolduğunda\").",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Çoktan seçmeli sorular için herhangi bir web hizmetini veri kaynağı olarak kullanabilirsiniz. Seçim değerlerini doldurmak için, verileri sağlayan hizmetin URL'sini girin.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Açılan listeyi filtrelemek için kullanılan bir karşılaştırma işlemi.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Seçim seçeneklerindeki uzun metinler, açılır menüye sığacak şekilde otomatik olarak satır sonları oluşturur. Metinlerin kırpılmasını istiyorsanız seçimi kaldırın.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Bu sorunun ızgara düzeni içinde kaç sütuna yayılacağını belirtir."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Sorunun değerinin ne zaman geçerli kabul edileceğini tanımlamak için sihirli değnek simgesini kullanın.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Hatalar, çözülene kadar ilerlemeyi engeller. Uyarılar sorunları vurgular ancak devam etmesine izin verir. Bilgilendirici notlar ek bağlam veya tarafsız rehberlik sunar. Uyarıları veya bilgi notlarını kullanırken anında doğrulamayı etkinleştirmenizi öneririz: \"Anket\" → \"Doğrulama\" → \"Doğrulamayı çalıştır\" → \"Yanıt değiştikten sonra\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Görüntülenen imza alanının ve elde edilen görüntünün genişliğini ayarlar.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Görüntülenen imza alanının ve elde edilen görüntünün yüksekliğini ayarlar.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "İmza alanının, varsayılan 3:2 en boy oranını korurken soru kutusundaki tüm kullanılabilir alanı doldurmasını isteyip istemediğinizi seçin. Özel genişlik ve yükseklik değerleri ayarlandığında, ayar bu boyutların en boy oranını korur."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Önizlemede yüklenen görüntülerin görüntülenme yüksekliğini ve fotoğraf makinesiyle çekilen görüntülerin gerçek yüksekliğini belirtir. Tek dosya yükleme modunda, ekran yüksekliği önizleme alanıyla sınırlıdır; Çoklu dosya yükleme modunda, küçük resim alanı ile sınırlıdır.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Önizlemede yüklenen görüntülerin görüntülenme genişliğini ve fotoğraf makinesiyle çekilen görüntülerin gerçek genişliğini belirtir. Tek dosya yükleme modunda, görüntüleme genişliği önizleme alanıyla sınırlıdır; Çoklu dosya yükleme modunda, küçük resim alanı ile sınırlıdır.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Mümkün olduğunda karşıya yüklenen dosyalar için küçük resim önizlemelerini görüntüler. Bunun yerine dosya simgelerini göstermek istiyorsanız seçimi kaldırın."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "\"Otomatik\" seçeneği, sağlanan kaynak URL'ye göre görüntüleme için uygun modu (Resim, Video veya YouTube) otomatik olarak belirler."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Minimum ve maksimum yükseklik değerlerini geçersiz kılar.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Minimum ve maksimum genişlik değerlerini geçersiz kılar.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Değer\", koşullu kurallarda kullanılan bir öğe kimliği görevi görür; Yanıtlayanlara \"Metin\" görüntülenir.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Medya seçicinin içerik modunu ayarlamak için \"Görüntü\" ve \"Video\" arasında seçim yapın. \"Resim\" seçilirse, sağlanan tüm seçeneklerin şu biçimlerdeki resim dosyaları olduğundan emin olun: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Benzer şekilde, \"Video\" seçilirse, tüm seçeneklerin aşağıdaki formatlardaki video dosyalarına doğrudan bağlantılar olduğundan emin olun: MP4, MOV, WMV, FLV, AVI, MKV. Video seçenekleri için YouTube bağlantılarının desteklenmediğini lütfen unutmayın."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Bu ayar yalnızca giriş alanını yeniden boyutlandırır ve soru kutusunun genişliğini etkilemez. Kabul edilen giriş uzunluğunu sınırlamak için \"Doğrulama\" → \"Maksimum karakter sınırı\"na gidin."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Giriş alanında görüntülenen satırların sayısını ayarlar. Giriş daha fazla satır kaplarsa, kaydırma çubuğu görünecektir."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Yanıtlayanların anketinizi doldurmasını engellemek isteyip istemediğinizi seçin.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "İlerleme çubuğunun konumunu ayarlar. \"Otomatik\" değeri, anket başlığının üstünde veya altında ilerleme çubuğunu görüntüler."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "Yanıtlayanlar tarafından görülemeyen bir sütun kimliği.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Bir sütun için etkinleştirildiğinde, yanıtlayanın bu sütundaki her soru için benzersiz bir yanıt vermesi gerekir.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Giriş alanında görüntülenen satırların sayısını ayarlar. Giriş daha fazla satır alırsa, kaydırma çubuğu görünecektir.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Sütun görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Sütunun salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Seçildiğinde, her seçim seçeneği için ayrı bir sütun oluşturur.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Seçim seçeneklerini çok sütunlu bir düzende düzenler. 0 olarak ayarlandığında, seçenekler tek bir satırda görüntülenir. -1 olarak ayarlandığında, gerçek değer üst matrisin \"İç içe sütun sayısı\" özelliğinden devralınır."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Kullanıcıların seçebileceği en düşük sayı.",
      // "The highest number that users can select."
      max: "Kullanıcıların seçebileceği en yüksek sayı.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Seçilebilir ölçek değerleri arasındaki aralık. Örneğin, 5'lik bir adım, kullanıcıların 0, 5, 10 vb. seçmesine olanak tanır.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Bir kullanıcının ayarlayabileceği kaydırıcı başparmaklar arasındaki minimum mesafe.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Bir kullanıcının ayarlayabileceği kaydırıcı başparmakları arasındaki maksimum mesafe.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Kaç ölçek etiketinin oluşturulacağını belirtir. -1 değeri, sayının Minimum değer ve Maks değerine göre otomatik olarak hesaplandığı anlamına gelir.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Gerçek değer için yer tutucu olarak '{0}' kullanın.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Belirli değerlerde özel etiketler tanımlamanıza ve isteğe bağlı olarak bunlara karşılık gelen metni atamanıza olanak tanır (örneğin, 0 = \"Zayıf\", 100 = \"Mükemmel\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Gerçek değer için yer tutucu olarak '{0}' kullanın.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Kullanıcıların bir başparmağını diğerinin yanından geçirmesine izin verir.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Seçili kaydırıcı değerini temizleyen ve tanımsız olarak ayarlayan bir düğme görüntüler.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Bir ifade kullanarak kaydırıcının minimum değerini dinamik olarak tanımlar. Temel hesaplamaları (ör. '{q1_id} + {q2_id}'), Boole mantığını (ör. '{age} > 60') ve 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' ve daha fazlası gibi işlevleri destekler.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Bir ifade kullanarak kaydırıcının maksimum değerini dinamik olarak tanımlar. Temel hesaplamaları (ör. '{q1_id} + {q2_id}'), Boole mantığını (ör. '{age} > 60') ve 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' ve daha fazlası gibi işlevleri destekler."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Bu seçimi özel kılar. Bir kullanıcı tarafından seçildiğinde, sorudaki diğer tüm seçeneklerin seçimi otomatik olarak kaldırılır.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Bu sütundaki onay kutularını özel yapar. Bir kullanıcı tarafından seçildiğinde, aynı satırdaki diğer tüm onay kutularının seçimini otomatik olarak kaldırır."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Normal ifadedeki büyük ve küçük harflerin eşdeğer olarak kabul edilmesi gerekip gerekmediğini seçin.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Şunlar arasından seçim yapın: \"Statik\" - sabit bir genişlik ayarlar; \"Duyarlı\" - anketin ekranın tüm genişliğini kaplamasını sağlar; \"Otomatik\" - kullanılan soru türlerine bağlı olarak ikisinden birini uygular.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Anketiniz için benzersiz bir çerez değeri atayın. Çerez, anket gönderimlerinin tekrarlanmasını önlemek için anket tamamlandıktan sonra yanıtlayanın tarayıcısında ayarlanacaktır.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Bilgisayarınızdan bir dosyaya (64 KB'a kadar) göz atmak için bir resim bağlantısı yapıştırın (boyut sınırı yok) veya klasör simgesini tıklayın.",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "CSS birimlerinde bir logo genişliği ayarlar (px, %, in, pt, vb.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "CSS birimlerinde (px, %, in, pt, vb.) bir logo yüksekliği ayarlar.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Şunlar arasından seçim yapın: \"Yok\" - görüntü orijinal boyutunu korur; \"İçer\" - görüntü, en boy oranı korunurken sığacak şekilde yeniden boyutlandırılır; \"Kapak\" - görüntü, en boy oranını korurken tüm kutuyu doldurur; \"Doldur\" - görüntü, en boy oranını korumadan kutuyu dolduracak şekilde uzatılır.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Yanıtlayan geçerli sayfadaki tüm soruları yanıtladıktan sonra anketin otomatik olarak sonraki sayfaya ilerlemesini isteyip istemediğinizi seçin. Bu özellik, sayfadaki son soru açık uçluysa veya birden fazla yanıta izin veriyorsa uygulanmaz.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Yanıtlayan tüm soruları yanıtladıktan sonra anketin otomatik olarak tamamlanmasını isteyip istemediğinizi seçin.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Sayfadaki gezinme düğmelerinin görünürlüğünü ayarlar.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Sayfadaki gezinme düğmelerinin konumunu ayarlar.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Önizleme sayfasını tüm sorularla veya yalnızca yanıtlanmış sorularla etkinleştirin.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Anketteki tüm sorular için geçerlidir. Bu ayar, panel, sayfa veya soru gibi daha düşük düzeylerdeki başlık hizalama kuralları tarafından geçersiz kılınabilir. Daha düşük düzeydeki bir ayar, daha yüksek düzeydeki ayarları geçersiz kılar.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Bir yanıtın gerekli olduğunu gösteren bir sembol veya sembol dizisi.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Numaralandırmaya başlamak istediğiniz sayıyı veya harfi girin.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Geçersiz girişi olan soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Her sayfadaki ilk giriş alanının metin girişi için hazır olmasını istiyorsanız seçin.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Soruların orijinal sırasını korur veya rastgele hale getirir. Bu ayarın etkisi yalnızca Önizleme sekmesinde görünür.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Yalnızca metin girişi soruları için.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Yalnızca soru yorumları içindir.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Soru yorumları için metin alanlarında görüntülenen satır sayısını ayarlar. Giriş daha fazla satır kaplıyorsa, kaydırma çubuğu görünür.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Soru yorumlarının ve Uzun Metin sorularının yüksekliğinin girilen metin uzunluğuna göre otomatik olarak büyümesini istiyorsanız seçin.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Yalnızca soru yorumları ve Uzun Metin soruları için.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Özelleştirilebilir değişkenler, form hesaplamalarında kullanılan ara veya yardımcı değişkenler olarak işlev görür. Yanıtlayan girdilerini kaynak değerler olarak alırlar. Her özelleştirilebilen değişkenin benzersiz bir adı ve temel aldığı bir ifadesi vardır.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "İfadenin hesaplanan değerinin anket sonuçlarıyla birlikte kaydedilmesini isteyip istemediğinizi seçin.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Tetikleyici, bir ifadeyi temel alan bir olay veya koşuldur. İfade \"true\" olarak değerlendirildikten sonra, bir tetikleyici bir eylemi başlatır. Böyle bir eylemin isteğe bağlı olarak etkilediği bir hedef sorusu olabilir.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Koşullu mantık tarafından gizlenen sorular için değerlerin temizlenip temizlenmeyeceğini ve bunun ne zaman yapılacağını seçin.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Şunlar arasından seçim yapın: \"Odak kaybolduğunda\" - giriş alanı odağı kaybettiğinde değer güncellenir; \"Yazarken\" - değer, kullanıcılar yazarken gerçek zamanlı olarak güncellenir.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Soldaki değer, koşullu kurallarda kullanılan bir sütun kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Soldaki değer, koşullu kurallarda kullanılan bir satır kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Yalnızca en az bir sütunda \"Toplama yöntemi\" veya \"Toplam değer ifadesi\" ile ayarlanan toplam değerler görüntüleniyorsa görünür.",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Geçersiz girişi olan bir hücreyle ilgili olarak bir hata iletisinin konumunu ayarlar. \"Devral\" seçeneği, ayarı \"Hata iletisi hizalaması\" özelliğinden uygular.",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Ayrıntı bölümlerinde iç içe geçmiş sorular için hata mesajlarının konumunu ayarlar. \"Devral\" seçeneği, \"Hata mesajı hizalaması\" özelliğindeki ayarı uygular.",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "\"Yinelenen yanıtları engelle\" özelliği etkinleştirildiğinde, yinelenen bir girdi göndermeye çalışan yanıtlayan aşağıdaki hata iletisini alır.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Bir ifadeye dayalı olarak toplam değerleri hesaplamanıza olanak tanır. İfade, temel hesaplamaları ('{q1_id} + {q2_id}'), Boole ifadelerini ('{age} > 60') ve işlevleri ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb.) içerebilir.",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Belirtilen sütun aynı değerleri içeriyorsa, anket \"Benzersiz olmayan anahtar değeri\" hatasını atar.",
    // "Type a subtitle."
    description: "Bir altyazı yazın.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Anketinizi oluşturmaya başlamak için bir dil seçin. Çeviri eklemek için yeni bir dile geçin ve orijinal metni buradan veya Çeviriler sekmesinden çevirin.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Ayrıntılar bölümünün bir satıra göre konumunu ayarlar. Şunlar arasından seçim yapın: \"Yok\" - genişletme eklenmez; \"Satırın altında\" - matrisin her satırının altına bir satır genişletmesi yerleştirilir; \"Satırın altında, yalnızca bir satır genişletmesi görüntüle\" - yalnızca tek bir satırın altında bir genişletme görüntülenir, kalan satır genişletmeleri daraltılır.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Şunlar arasından seçim yapın: \"Yok\" - görüntü orijinal boyutunu korur; \"İçer\" - görüntü, en boy oranı korunurken sığacak şekilde yeniden boyutlandırılır; \"Kapak\" - görüntü, en boy oranını korurken tüm kutuyu doldurur; \"Doldur\" - görüntü, en boy oranını korumadan kutuyu dolduracak şekilde uzatılır.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Veriler girilirken giriş alanının yüksekliğini kademeli olarak artırır. \"Giriş alanı yüksekliği (satırlarda)\" ayarını geçersiz kılar.",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "\"Devral\" seçeneği, anket düzeyinde bir ayar uygular (varsayılan olarak \"Etkin\").",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Anketin otomatik olarak \"Teşekkür Ederiz\" sayfasına ilerlediği saniye cinsinden bir zaman aralığı. 0 olarak ayarlandığında, ankette harcanan süreyi sayar.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Anketin otomatik olarak bir sonraki sayfaya ilerlediği saniye cinsinden bir zaman aralığı. \"Önceki\" gezinme düğmesini gizler. 0 olarak ayarlandığında, geçerli sayfada geçirilen süreyi sayar.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Bir kullanıcı boş bir giriş alanına odaklandığında ve ardından herhangi bir değişiklik yapmadan bu alandan ayrıldığında doğrulamayı tetiklemek için bu seçeneği etkinleştirin.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "Yanıtlayanlar tarafından görülemeyen bir sayfa kimliği.",
      // "Type a page subtitle."
      description: "Bir sayfa alt başlığı yazın.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "İlerleme çubuğundaki veya içindekiler tablosundaki (TOC) bir gezinti düğmesinde görüntülenen resim yazısı. Bu alanı boş bırakırsanız, gezinme düğmesi sayfa başlığını veya sayfa adını kullanır. İlerleme çubuğunu veya İçindekiler'i etkinleştirmek için \"Anket\" → \"Gezinme\"ye gidin.",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Anketin otomatik olarak bir sonraki sayfaya ilerlediği saniye cinsinden bir zaman aralığı.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Sayfa görünürlüğünü belirleyen koşullu bir kural belirlemek için sihirli değnek simgesini kullanın.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Sayfanın salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Bu sayfadaki tüm sorular için geçerlidir. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular veya paneller için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Üst\").",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Soru kutularının soluna hizalandıklarında soru başlıkları için tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Geçersiz girişi olan soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Üst\").",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Soruların orijinal sırasını korur veya rastgele hale getirir. \"Devral\" seçeneği, anket düzeyindeki ayarı (varsayılan olarak \"Orijinal\") uygular. Bu ayarın etkisi yalnızca Önizleme sekmesinde görünür.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Sayfadaki gezinme düğmelerinin görünürlüğünü ayarlar. \"Devral\" seçeneği, varsayılan olarak \"Görünür\" olan anket düzeyi ayarını uygular.",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Bu tablo, sayfadaki her bir ızgara sütununu yapılandırmanıza olanak tanır. Bir satırdaki maksimum öğe sayısına bağlı olarak her sütun için genişlik yüzdesini otomatik olarak ayarlar. Tablo düzenini özelleştirmek için bu değerleri manuel olarak ayarlayın ve her sütundaki tüm sorular için başlık genişliğini tanımlayın."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Sayfadaki bir zamanlayıcının konumunu ayarlar.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Şunlar arasından seçim yapın: \"Kilitli\" - kullanıcılar panelleri genişletemez veya daraltamaz; \"Tümünü daralt\" - tüm paneller daraltılmış durumda başlar; \"Tümünü genişlet\" - tüm paneller genişletilmiş bir durumda başlar; \"İlk genişletildi\" - başlangıçta yalnızca ilk panel genişletilir.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Seçim listesinde görüntülemek istediğiniz görüntü veya video dosyası URL'lerini içeren nesne dizisi içinde paylaşılan bir özellik adı girin.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Soldaki değer, koşullu kurallarda kullanılan bir öğe kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Görüntülemek için kullanıcı dostu bir başlık yazın.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Dosyalar yüklenene kadar kullanıcıların anketi tamamlamamasını sağlar.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Birleştirme tanımlayıcısı, birkaç soruyu birbirine bağlamak ve değerlerini eşitlemek için atayabileceğiniz özel bir anahtardır. Bu değerler tek bir dizide veya nesnede birleştirilir ve özellik adı olarak anahtar kullanılarak anket sonuçlarında saklanır.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "HTML sorularında ve anket öğelerinin dinamik başlıklarında ve açıklamalarında, soru değeri boş olduğunda görüntülenen bir değer.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Tekli ve çoktan seçimli soru tiplerinde, her seçim seçeneğinin bir kimliği ve görünen değeri vardır. Seçildiğinde, bu ayar HTML sorularında ve anket öğelerinin dinamik başlıklarında ve açıklamalarında kimlik değeri yerine bir görünen değer gösterir.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Koşullu mantık tarafından gizlenen soru değerlerinin temizlenip temizlenmeyeceğini ve ne zaman yapılacağını seçin. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Anket tamamlandıktan sonra\").",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Şunlar arasından seçim yapın: \"Tümü\" - seçilen sorudaki tüm seçim seçeneklerini kopyalar; \"Seçili\" - yalnızca seçilen seçim seçeneklerini dinamik olarak kopyalar; \"Seçilmemiş\" - yalnızca seçilmemiş seçim seçeneklerini dinamik olarak kopyalar. \"Yok\" ve \"Diğer\" seçenekleri, kaynak soruda etkinleştirilmişse varsayılan olarak kopyalanır.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Tekli ve çok seçimli soru tiplerinde, her seçim seçeneğinin bir kimliği ve görünen değeri vardır. Bu ayar, kimlikleri hangi matris, sütun veya panel sorusunun sağlaması gerektiğini belirtir.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Tekli ve çok seçimli soru tiplerinde, her seçim seçeneğinin bir kimliği ve görünen değeri vardır. Bu ayar, hangi matris sütun veya panel sorusunun görüntü metinlerini sağlaması gerektiğini belirtir.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "İstenen seçenek açılır menüde mevcut değilse, yanıtlayanların kendi seçimlerini eklemesine izin vermek için bunu seçin. Özel seçimler yalnızca geçerli tarayıcı oturumu süresince geçici olarak saklanacaktır.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Seçildiğinde, kullanıcılar ayrı bir yorum kutusuna ek girdi ekleyebilir.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Her özel seçim seçeneğini (\"Yok\", \"Diğer\", \"Tümünü Seç\") çok sütunlu bir düzen kullanırken bile yeni bir satırda görüntüler.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Hizmet veri kümesinde, hedef nesne dizisinin bulunduğu konumu belirtin. URL zaten diziye işaret ediyorsa boş bırakın.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Seçim listesinde görüntülemek istediğiniz değerleri içeren nesneler dizisi içinde tekdüzen bir özellik adı girin.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Hizmetin boş bir yanıt veya dizi döndürmesine izin vermek için seçin.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Tüm seçim seçeneklerinin görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Soldaki değer, koşullu kurallarda kullanılan bir öğe kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Otomatik\", mevcut genişliğe göre \"Düğmeler\" ve \"Açılır Menü\" modları arasında seçim yapar. Genişlik düğmeleri görüntülemek için yetersiz olduğunda, soru bir açılır menü görüntüler."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Farklı formatlarda sonuç üreten soruları bağlamanıza olanak tanır. Bu tür sorular bir birleştirme tanımlayıcısı kullanılarak birbirine bağlandığında, bu paylaşılan özellik seçilen soru değerlerini depolar.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Açılır menü içeriğini, kullanıcının giriş alanına yazdığı arama sorgusuyla eşleşecek şekilde güncelleştirmek istiyorsanız seçin.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Yanıtlayanlar olumlu yanıt verdiğinde anket sonuçlarına kaydedilecek bir değer.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Yanıtlayanlar olumsuz yanıt verdiğinde anket sonuçlarına kaydedilecek bir değer.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Önizleme görüntüsünü geçersiz kıldığı ve kullanıcının dosyaların karşıya yüklenip yüklenmediğini anlamasını zorlaştırdığı için bu seçeneği devre dışı bırakmanız önerilmez.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Dosya silme işlemini onaylamanızı isteyen bir istemi tetikler.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Yalnızca seçilen seçenekleri sıralamak için etkinleştirin. Kullanıcılar, sıralama alanı içinde sıralamak için seçim listesinden seçilen öğeleri sürükleyecektir.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Giriş sırasında yanıtlayana önerilecek seçeneklerin bir listesini girin.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Bu ayar yalnızca giriş alanlarını yeniden boyutlandırır ve soru kutusunun genişliğini etkilemez.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Tüm öğe etiketleri için tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Alan içinde giriş değerinin nasıl hizalanacağını seçin. Varsayılan ayar olan \"Otomatik\", para birimi veya sayısal maskeleme uygulanmışsa giriş değerini sağa, uygulanmıyorsa sola hizalar.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Görüntü, kullanıcının cihazında görüntülenemediğinde ve erişilebilirlik amacıyla yedek olarak görev yapar.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Derecelendirme simgesi türü \"Suratlar\" olarak ayarlandığında seçilen emojinin rengini tanımlar. Şunlar arasından seçim yapın: \"Varsayılan\" - seçilen emoji varsayılan anket renginde görünür; \"Ölçek\" - seçilen emoji, derecelendirme ölçeğinden rengi devralır.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "Yanıtlayanlar tarafından görülemeyen bir ifade kimliği.",
      // "Type an expression subtitle."
      description: "Bir ifade alt başlığı yazın.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Bir ifade, temel hesaplamaları ('{q1_id} + {q2_id}'), koşulları ('{age} > 60') ve işlevleri ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb.) içerebilir."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "\"Diğer\" seçenek değerini anket sonuçlarında ayrı bir özellik olarak saklamak için seçin.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "{0} gerçek değer için yer tutucu olarak kullanın.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Daha fazla bilgi için [accept](https://www.w3schools.com/tags/att_input_accept.asp) özelliğinin açıklamasına bakın.",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Seçim seçeneklerini çok sütunlu bir düzende düzenler. 0 olarak ayarlandığında, seçenekler tek bir satırda görüntülenir. Yalnızca \"Hücre giriş türü\" Radyo Düğmesi Grubu veya Onay Kutuları olarak ayarlanmış sütunlar için geçerlidir.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Kullanıcının tarayıcısının alabileceği veri türünü seçin. Bu veriler, kullanıcı tarafından girilen geçmiş değerlerden veya varsa kullanıcı tarafından otomatik tamamlama için kaydedilmişse önceden yapılandırılmış değerlerden elde edilir.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "\"Kaynak türü\" \"Yerel dosyalar\" olduğunda veya fotoğraf makinesi kullanılamadığında geçerlidir",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "\"Kaynak türü\" \"Kamera\" olduğunda geçerlidir.",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "\"Kaynak türü\" \"Yerel dosyalar veya kamera\" olduğunda geçerlidir.",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Seçim seçeneklerini çok sütunlu bir düzende düzenler. 0 olarak ayarlandığında, seçenekler tek bir satırda görüntülenir.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Soru değerini, anket sonuçlarında uygulanan bir maske ile saklamak istiyorsanız seçin."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Desen, dize değişmez değerlerini ve aşağıdaki yer tutucuları içerebilir: '9' - bir rakam için; 'a' - büyük veya küçük harf için; '#' - bir rakam veya büyük veya küçük harf için. Bir karakterden kaçmak için ters eğik çizgi '\\' kullanın."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Desen, ayırıcı karakterler ve aşağıdaki yer tutucuları içerebilir:<br>'m' - Ay numarası.<br>'mm' - Tek basamaklı değerler için başında sıfır olan ay numarası. <br>'d' - Ayın günü. <br>'dd' - Tek basamaklı değerler için başında sıfır olan ayın günü. <br>'yy' - Yılın son iki basamağı. <br>'yyyy' - Dört basamaklı yıl. <br>'H' - 24 saat biçimindeki saatler. <br>'SS' - 24 saat biçiminde, tek basamaklı değerler için başında sıfır olan saatler. <br>'h' - 12 saat biçimindeki saatler. <br>'ss' - 12 saat biçiminde, tek basamaklı değerler için başında sıfır olan saatler. <br>'MM' - Dakika. <br>'ss' - Saniye. <br>'TT' - büyük harfle 12 saatlik zaman dilimi (/PM). <br>'tt' - küçük harfle 12 saatlik zaman dilimi (/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Görüntülenen bir sayının kesirli kısmını tamsayı kısmından ayırmak için kullanılan bir sembol.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Büyük bir sayının rakamlarını üçlü gruplara ayırmak için kullanılan bir sembol.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Görüntülenen bir sayı için ondalık virgülden sonra kaç basamak tutulacağını sınırlar."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Değerden önce görüntülenecek bir veya birkaç sembol.",
      // "One or several symbols to be displayed after the value."
      suffix: "Değerden sonra görüntülenecek bir veya birkaç sembol."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Bu ayar yalnızca panelin dışındaki sorular için geçerlidir.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Önemli anket öğelerini vurgulayan ek bir renk ayarlar.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Anketlerin ve soru kutularının saydamlığını anket arka planına göre ayarlar.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Giriş öğelerinin saydamlığını anket arka planına göre ayarlar.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Tüm dikdörtgen elemanlar için köşe yarıçapını ayarlar. Giriş öğeleri veya paneller ve soru kutuları için ayrı köşe yarıçapı değerleri ayarlamak istiyorsanız Gelişmiş Modu etkinleştirin.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Anketin ana arka plan rengini ayarlar."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "\"Kapsayıcı ile aynı\" seçeneği, başlık içerik alanı genişliğini anketin yerleştirildiği HTML öğesine sığacak şekilde otomatik olarak ayarlar.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Anket başlığını ve açıklamasını içeren üstbilgi alanının piksel cinsinden genişliği.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Etkinleştirildiğinde, anketin üst kısmı başlığın alt kısmıyla kaplanır.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "0 olarak ayarlandığında, üstbilginin içeriğine uyum sağlamak için yükseklik otomatik olarak hesaplanır."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "\"Kapsayıcı ile aynı\" seçeneği, ilerleme çubuğu alan genişliğini anketin yerleştirildiği HTML öğesine sığacak şekilde otomatik olarak ayarlar.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "'Anket düzeni' 'Sayfa başına tek giriş alanı' olarak ayarlandığında kullanılır. Bu düzende matris, her giriş alanı ayrı bir sayfada görünecek şekilde bölünür. Otomatik numaralandırma eklemek için {rowIndex} yer tutucusunu, satırın başlığına veya kimliğine başvurmak için {rowTitle} veya {rowName} ve belirli bir matris sütununun değerini eklemek için {row.columnid} yer tutucusunu kullanın."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "başlık",
      // "Leave it empty, if it is the same as 'Name'"
      title: "'Ad' ile aynıysa boş bırakın"
    },
    // "Allow multiple selection"
    multiSelect: "Çoklu Seçim",
    // "Show image and video captions"
    showLabel: "Başlığı göster",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Evet ve Hayır sırasını değiştirin",
    // [Auto-translated] "Value"
    value: "Değer",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Sekme hizalaması",
    // [Auto-translated] "File source type"
    sourceType: "Dosya kaynağı türü",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Konteynere sığdır",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Değer ifadesini ayarla",
    // "Description"
    description: "Açıklama", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Logo uyumu",
    // [Auto-translated] "Pages"
    pages: "Sayfa", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Soru", // Auto-generated string
    // "Triggers"
    triggers: "tetikleyiciler",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Özelleştirilebilen değişkenler",
    // [Auto-translated] "Survey id"
    surveyId: "Anket kimliği", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "Anket gönderisi kimliği", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Anket gösterisi veri tasarrufu", // Auto-generated string
    // "Question description alignment"
    questionDescriptionLocation: "Soru açıklaması konumu",
    // "Progress bar type"
    progressBarType: "İlerleme çubuğu türü", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "İçindekiler tablosunu göster (İçindekiler)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "İçindekiler hizalaması",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Soru başlığı kalıbı", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Anket genişliği modu",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Marka bilgilerini göster", // Auto-generated string
    // "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Başlıkta görünen değeri kullan",
    // "Visible if"
    visibleIf: "Görünür eğer", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Varsayılan değer ifadesi",
    // "Required if"
    requiredIf: "Eğer gerekli mi?", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Sıfırlama değeri",
    // [Auto-translated] "Set value if"
    setValueIf: "Değeri ayarla",
    // "Validation rules"
    validators: "Doğrulayıcılar",
    // [Auto-translated] "Bindings"
    bindings: "Bağlama", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Farklı işle", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "Orijinal öğeleri ekleme", // Auto-generated string
    // "Choices"
    choices: "Seçenekler",
    // "Choices by url"
    choicesByUrl: "URL'e göre seçimler", // Auto-generated string
    // "Currency"
    currency: "Para birimi", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Hücre ipucu", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Toplam maksimum kesir basamakları", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Toplam minimum kesir basamakları", // Auto-generated string
    // "Columns"
    columns: "Sütunlar", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Ayrıntı öğeleri", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Uyarlamalı eylemlere izin ver", // Auto-generated string
    // "Default row value"
    defaultRowValue: "Varsayılan satır değeri", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Yeni satır ayrıntılarını otomatik genişletme",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Tembel yükün etkin olduğu seçenekler", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Seçenekler tembel yükleme sayfası boyutu", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Giriş alanı bileşeni", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Öğe bileşeni", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Max", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Minimum değer ifadesi", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Maksimum değer ifadesi", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Adım", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Otomatik öneri için öğeler",
    // "Input field width (in characters)"
    inputSize: "Öğe boyutu",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Öğe etiketi genişliği",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Giriş değeri hizalaması",
    // [Auto-translated] "Elements"
    elements: "Öğe", // Auto-generated string
    // [Auto-translated] "Content"
    content: "İçerik", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Gezinme başlığı", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Navigasyon açıklaması", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Uzun musluk", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Giriş alanını dinamik olarak genişlet",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Yeniden boyutlandırma tutamacını etkinleştir",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Satır başı iadesini kabul et", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Ekran modu",
    // [Auto-translated] "Rate type"
    rateType: "Fiyat türü", // Auto-generated string
    // "Label"
    label: "Başlık", // Auto-generated string
    // "Content mode"
    contentMode: "İçerik modu",
    // "Image and thumbnail fit"
    imageFit: "Görsel'u uyumlandır",
    // [Auto-translated] "Alt text"
    altText: "Alternatif metin",
    // [Auto-translated] "Height"
    height: "Yükseklik", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Akıllı telefonlarda yükseklik",
    // [Auto-translated] "Pen color"
    penColor: "Kalem rengi", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "Arka plan rengi",
    // [Auto-translated] "Template elements"
    templateElements: "Şablon öğeleri", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Operatör", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Değişkendir", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "İfadeyi çalıştır", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Altyazıyı göster", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Simge adı", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Simge boyutu", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Kesinlik", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Matris sürükleme kolu alanı", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Arka plan resmi",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Arka plan resmi sığdırma", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Arka plan resmi eki", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Arka plan opaklığı", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Seçici sıralamaya izin ver",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Sıralama alanı hizalaması",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Tüm seçeneklerin seçili olup olmadığını gösteren metin",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Derecelendirme alanı için yer tutucu metin",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Kamera erişimine izin ver", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Derecelendirme simgesi renk modu",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Suratlar renk şeması",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Görüntüleme değerini kopyala", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Sütun aralığı",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "İlerleme çubuğu alanı genişliği",
    // [Auto-translated] "Theme name"
    themeName: "Tema adı"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Gelişmiş mod",
    // "Page"
    pageTitle: "Sayfa başlığı yazı tipi",
    // "Question box"
    questionTitle: "Soru başlığı yazı tipi",
    // "Input element"
    editorPanel: "Giriş öğesi",
    // [Auto-translated] "Lines"
    lines: "Satır",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Temerrüt",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Hover",
    // [Auto-translated] "Selected"
    primaryLightColor: "Seçilmiş",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Arka plan rengi",
    // "Corner radius"
    cornerRadius: "Köşe yarıçapı",
    // [Auto-translated] "Default background"
    backcolor: "Varsayılan arka plan",
    // [Auto-translated] "Hover background"
    hovercolor: "Arka planın üzerine gelin",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Bordür dekorasyonu",
    // [Auto-translated] "Font color"
    fontColor: "Yazı tipi rengi",
    // [Auto-translated] "Background color"
    backgroundColor: "Arka plan rengi",
    // [Auto-translated] "Default color"
    primaryForecolor: "Varsayılan renk",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Devre dışı bırakılmış renk",
    // [Auto-translated] "Font"
    font: "Yazı tipi",
    // [Auto-translated] "Darker"
    borderDefault: "Koyu",
    // [Auto-translated] "Lighter"
    borderLight: "Çakmak",
    // [Auto-translated] "Font family"
    fontFamily: "Yazı tipi ailesi",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Düzenli",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Ağır",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Yarı kalın",
    // [Auto-translated] "Bold"
    fontWeightBold: "Kalın",
    // [Auto-translated] "Color"
    color: "Renk",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Yer tutucu rengi",
    // [Auto-translated] "Size"
    size: "Boyut",
    // [Auto-translated] "Opacity"
    opacity: "Opak -lık",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Gölge Efekti Ekle",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Bulanıklaştır",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Yaymak",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Damla",
    // [Auto-translated] "Inner"
    boxShadowInner: "İç",
    names: {
      // [Auto-translated] "Default"
      default: "Temerrüt",
      // [Auto-translated] "Sharp"
      sharp: "Keskin",
      // [Auto-translated] "Borderless"
      borderless: "Kenarlıksız",
      // [Auto-translated] "Flat"
      flat: "Düz",
      // [Auto-translated] "Plain"
      plain: "Düz",
      // [Auto-translated] "Double Border"
      doubleborder: "Çift Kenarlık",
      // [Auto-translated] "Layered"
      layered: "Katmanlı",
      // [Auto-translated] "Solid"
      solid: "Katı",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Karşıtlık"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Çamurcun",
      // [Auto-translated] "Blue"
      blue: "Mavi",
      // [Auto-translated] "Purple"
      purple: "Mor",
      // [Auto-translated] "Orchid"
      orchid: "Orkide",
      // [Auto-translated] "Tulip"
      tulip: "Lale",
      // [Auto-translated] "Brown"
      brown: "Kahverengi",
      // [Auto-translated] "Green"
      green: "Yeşil",
      // [Auto-translated] "Gray"
      gray: "Gri"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Yüzey arka planı",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Birincil",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "İkincil",
    // [Auto-translated] "Surface"
    surfaceScale: "Yüzey",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Kullanıcı arayüzü öğeleri",
    // [Auto-translated] "Font"
    fontScale: "Yazı tipi",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Anket Oluşturucu 2020",
      // [Auto-translated] "Light"
      "default-light": "Işık",
      // [Auto-translated] "Dark"
      "default-dark": "Koyu",
      // [Auto-translated] "Contrast"
      "default-contrast": "Karşıtlık"
    }
  }
};

setupLocale({ localeCode: "tr", strings: turkishStrings });