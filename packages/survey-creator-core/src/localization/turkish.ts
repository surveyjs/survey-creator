import { setupLocale } from "survey-creator-core";

export var turkishStrings = {
  // survey templates
  survey: {
    edit: "Düzenle",
    externalHelpLink: "Nasıl anket oluşturulur izle",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Lütfen araç kutusundan bir soru sürükleyin.",
    addLogicItem: "Anket akışını özelleştirmek için bir kural oluşturun.",
    copy: "Kopyala",
    duplicate: "Yinelenen",
    addToToolbox: "Araç kutusuna ekle",
    deletePanel: "Paneli Sil",
    deleteQuestion: "Soruyu Sil",
    convertTo: "Çevir",
    drag: "Nesne sürükleyin",
  },
  // Creator tabs
  tabs: {
    preview: "Anketi Test Et",
    theme: "Temalar",
    translation: "Çeviri",
    designer: "Anket Tasarımı",
    json: "JSON Editor",
    logic: "Mantıksal Anket"
  },
  // Question types
  qt: {
    default: "Varsayılan",
    checkbox: "Onay Kutusu",
    comment: "Yorum",
    imagepicker: "Resim seçici",
    ranking: "Sıralama",
    image: "Resim",
    dropdown: "Seçim Kıutusu",
    tagbox: "Çoklu Seçim Açılır Menüsü",
    file: "Dosya",
    html: "Html",
    matrix: "Matrix (tek seçim)",
    matrixdropdown: "Matrix (çoklu seçim)",
    matrixdynamic: "Matrix (dinamik satır)",
    multipletext: "Çoklu Yazı",
    panel: "Panel",
    paneldynamic: "Panel (dinamik panel)",
    radiogroup: "Seçim Grubu",
    rating: "Değerlendirme",
    text: "Tek Girdi",
    boolean: "Mantıksal İfade",
    expression: "İfade (düzenlenemez)",
    signaturepad: "İmza Defteri",
    buttongroup: "Düğme Grubu"
  },
  toolboxCategories: {
    general: "Genel",
    choice: "Seçim Soruları",
    text: "Metin Girişi Soruları",
    containers: "Konteyner",
    matrix: "Matris Soruları",
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Varyayılan ({0})",
    survey: "Anket",
    settings: "Anket Ayarları",
    settingsTooltip: "Anket ayarlarını aç",
    surveySettings: "Anket Ayarları",
    surveySettingsTooltip: "Anket ayarları",
    themeSettings: "Tema Ayarları",
    themeSettingsTooltip: "Tema ayarları",
    creatorSettingTitle: "İçerik Oluşturucu Ayarları",
    showPanel: "Paneli Göster",
    hidePanel: "Paneli Gizle",
    prevSelected: "Öncekini seç",
    nextSelected: "İleri'yi seçin",
    prevFocus: "Öncesine odaklan",
    nextFocus: "Sonrakine odaklan",
    surveyTypeName: "Anket",
    pageTypeName: "Sayfa",
    panelTypeName: "Panel",
    questionTypeName: "Soru",
    columnTypeName: "Sütun",
    addNewPage: "Yeni Sayfa Ekle",
    moveRight: "Sağa sürükle",
    moveLeft: "Sola sürükle",
    deletePage: "Sayfayı Sil",
    editPage: "Sayfayı Düzenle",
    edit: "Düzenle",
    newPageName: "Sayfa",
    newQuestionName: "Soru",
    newPanelName: "Panel",
    newTextItemName: "Yazı",
    defaultV2Theme: "Temerrüt",
    modernTheme: "Modern",
    defaultTheme: "Varsayılan (eski)",
    testSurveyAgain: "Anketi Tekrar Test Et",
    testSurveyWidth: "Anket genişliği: ",
    navigateToMsg: "Şuraya git:",
    saveSurvey: "Anketi Kaydet",
    saveSurveyTooltip: "Anketi Kaydet",
    saveTheme: "Temayı Kaydet",
    saveThemeTooltip: "Temayı Kaydet",
    jsonHideErrors: "Hataları gizleme",
    jsonShowErrors: "Hataları göster",
    undo: "Geri",
    redo: "İleri",
    undoTooltip: "Son değişikliği geri al",
    redoTooltip: "Son değişikliği ileri al",
    expandTooltip: "Genişletmek",
    collapseTooltip: "Çökmek",
    expandAllTooltip: "Tümünü Genişlet",
    collapseAllTooltip: "Tümünü Daralt",
    zoomInTooltip: "Yakınlaştırma",
    zoom100Tooltip: "%100 yakınlaştırma",
    zoomOutTooltip: "Uzaklaştırma",
    lockQuestionsTooltip: "Sorular için genişletme/daraltma durumunu kilitle",
    showMoreChoices: "Daha fazlasını göster",
    showLessChoices: "Daha az göster",
    copy: "Kopya etmek",
    cut: "Kesmek",
    paste: "Yapıştırmak",
    copyTooltip: "Seçimi panoya kopyala",
    cutTooltip: "Seçimi panoya kes",
    pasteTooltip: "Panodan yapıştır",
    options: "Seçenekler",
    generateValidJSON: "JSON Oluştur",
    generateReadableJSON: "Okunabilir JSON oluştur",
    toolbox: "Araç Kutusu",
    "property-grid": "Özellikler",
    toolboxFilteredTextPlaceholder: "Aramak için yazın...",
    toolboxNoResultsFound: "Sonuç bulunamadı",
    propertyGridFilteredTextPlaceholder: "Aramak için yazın...",
    propertyGridNoResultsFound: "Sonuç bulunamadı",
    propertyGridPlaceholderTitle: "Formunuzu yapılandırmaya başlayın",
    propertyGridPlaceholderDescription: "Anket ayarlarını keşfetmek için herhangi bir kategori simgesini tıklayın. Tasarım yüzeyine bir anket öğesi eklediğinizde ek ayarlar kullanılabilir hale gelir.",
    correctJSON: "JSON nesnesini doğrular.",
    surveyResults: "Anket Sonucu: ",
    surveyResultsTable: "Tablo olarak",
    surveyResultsJson: "JSON olarak",
    resultsTitle: "Soru başlığı",
    resultsName: "Soru adı",
    resultsValue: "Cevap değeri",
    resultsDisplayValue: "Görünen değer",
    modified: "Düzenlendi",
    saving: "Kaydediliyor",
    saved: "Kaydedildi",
    propertyEditorError: "Hata",
    saveError: "Hata! Editor içerisi kaydedilmedi.",
    translationPropertyGridTitle: "Dil Ayarları",
    themePropertyGridTitle: "Tema Ayarları",
    addLanguageTooltip: "Dil Ekle",
    translationLanguages: "Diller",
    translationDeleteLanguage: "Bu dil için tüm dizeleri silmek istediğinizden emin misiniz?",
    translationAddLanguage: "Çeviri için dil seçiniz",
    translationShowAllStrings: "Tüm yazıları göster",
    translationShowUsedStringsOnly: "Yalnızca Kullanılan Dizeler",
    translationShowAllPages: "Tüm sayfaları göster",
    translationNoStrings: "Çevrilecek yazı yok. Lütfen, filtreyi değiştirin.",
    translationExportToSCVButton: "CSV dışa çıkart",
    translationImportFromSCVButton: "CSV içe aktar",
    translateUsigAI: "Tümünü Otomatik Çevir",
    translateUsigAIFrom: "Çeviri kaynağı: ",
    translationDialogTitle: "Çevrilmemiş dizeler",
    translationMergeLocaleWithDefault: "{0} varsayılan çeviri ile sıkıştır",
    translationPlaceHolder: "Çeviri...",
    translationSource: "Kaynak: ",
    translationTarget: "Hedef: ",
    translationYouTubeNotSupported: "YouTube bağlantıları desteklenmemektedir.",
    themeExportButton: "Ihracat",
    themeImportButton: "Ithalat",
    surveyJsonExportButton: "Ihracat",
    surveyJsonImportButton: "Ithalat",
    surveyJsonCopyButton: "Panoya kopyala",
    themeResetButton: "Tema ayarlarını varsayılana sıfırla",
    themeResetConfirmation: "Temayı gerçekten sıfırlamak istiyor musunuz? Tüm özelleştirmeleriniz kaybolacak.",
    themeResetConfirmationOk: "Evet, temayı sıfırlayın",
    bold: "Kalın",
    italic: "Italik",
    underline: "Alt Çizgi",
    addNewQuestion: "Soru Ekle",
    selectPage: "Sayfa seç...",
    carryForwardChoicesCopied: "Seçenekler şuradan kopyalanır:",
    choicesLoadedFromWebText: "Seçimler bir web hizmetinden yüklenir.",
    choicesLoadedFromWebLinkText: "Ayarlara git",
    choicesLoadedFromWebPreviewTitle: "Yüklenen seçim seçeneklerinin önizlemesi",
    htmlPlaceHolder: "HTML içeriği burada olacak.",
    panelPlaceHolder: "Araç kutusundan buraya bir soru bırakın.",
    surveyPlaceHolder: "Anket boş. Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklatın.",
    pagePlaceHolder: "Sayfa boş. Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklatın.",
    imagePlaceHolder: "Bir resmi buraya sürükleyip bırakın veya aşağıdaki düğmeyi tıklayın ve yüklemek için bir resim seçin",
    surveyPlaceHolderMobile: "Formunuzu oluşturmaya başlamak için aşağıdaki \"Soru Ekle\" butonuna tıklayın.",
    surveyPlaceholderTitle: "Formunuz boş",
    surveyPlaceholderTitleMobile: "Formunuz boş",
    surveyPlaceholderDescription: "Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklayın.",
    surveyPlaceholderDescriptionMobile: "Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklayın.",
    previewPlaceholderTitle: "Önizleme yok",
    previewPlaceholderTitleMobile: "Önizleme yok",
    previewPlaceholderDescription: "Anket herhangi bir görünür unsur içermiyor.",
    previewPlaceholderDescriptionMobile: "Anket herhangi bir görünür unsur içermiyor.",
    translationsPlaceholderTitle: "Çevrilecek dize yok",
    translationsPlaceholderTitleMobile: "Çevrilecek dize yok",
    translationsPlaceholderDescription: "Formunuza öğeler ekleyin veya araç çubuğundaki dizeler filtresini değiştirin.",
    translationsPlaceholderDescriptionMobile: "Formunuza öğeler ekleyin veya araç çubuğundaki dizeler filtresini değiştirin.",
    pagePlaceHolderMobile: "Sayfaya yeni bir öğe eklemek için aşağıdaki \"Soru Ekle\" düğmesini tıklayın.",
    panelPlaceHolderMobile: "Panele yeni bir öğe eklemek için aşağıdaki \"Soru Ekle\" düğmesini tıklayın.",
    imagePlaceHolderMobile: "Aşağıdaki düğmeyi tıklayın ve yüklemek için bir resim seçin",
    imageChooseImage: "Resim Seç",
    addNewTypeQuestion: "{0} ekle", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Madde ",
    selectFile: "Bir dosya seçin",
    removeFile: "Dosyayı kaldır",
    lg: {
      addNewItem: "Yeni Kural Ekle",
      empty_tab: "Anketin akışını özelleştirmek için bir kural oluşturun.",
      logicPlaceholderTitle: "Mantıksal kural yok",
      logicPlaceholderTitleMobile: "Mantıksal kural yok",
      logicPlaceholderDescription: "Anketin akışını özelleştirmek için bir kural oluşturun.",
      logicPlaceholderDescriptionMobile: "Anketin akışını özelleştirmek için bir kural oluşturun.",
      page_visibilityName: "Sayfa görünürse",
      page_enableName: "Sayfayı etkinleştir (devre dışı bırak)",
      page_requireName: "Sayfayı gerekli hale getirme",
      panel_visibilityName: "Panel görünürse",
      panel_enableName: "Panel aktif/pasif ise",
      panel_requireName: "Sayfayı gerekli hale getirme",
      question_visibilityName: "Soru görüürse",
      question_enableName: "Soru aktif/pasifse",
      question_requireName: "Soru isteğe bağlı zorunluysa",
      question_resetValueName: "Soru değerini sıfırla",
      question_setValueName: "Soru değerini ayarla",
      column_visibilityName: "Göster (gizle) sütunu",
      column_enableName: "Etkinleştir (devre dışı bırak) sütunu",
      column_requireName: "Sütunu gerekli kıl",
      column_resetValueName: "Sütun değerini sıfırla",
      column_setValueName: "Sütun değerini ayarla",
      trigger_completeName: "Anketi tamamla",
      trigger_setvalueName: "Soru değerini güncelle",
      trigger_copyvalueName: "Soru değerini kopyala",
      trigger_skipName: "Soruyu atla",
      trigger_runExpressionName: "Varsayılan ifadeyi çalıştır",
      completedHtmlOnConditionName: "Varyalın 'Teşekkür sayfası' yazısı",
      page_visibilityDescription: "Mantıksal sorgu geçerli olduğu zaman sayfayı görünür yap. Aksi takdirde gizle.",
      panel_visibilityDescription: "Mantıksal sorgu geçerli olduğu zaman paneli görünür yap. Aksi takdirde gizle.",
      panel_enableDescription: "Panel oluştur ve tüm nesneleri panelin içine al. Mantıksal sorgu geçerli olduğunda paneli aktif et. Aksi takdirde tümünü pasifleştir.",
      question_visibilityDescription: "Mantıksal sorgu geçerli olduğunda soruyu görünür yap. Aksi takdirde gizle.",
      question_enableDescription: "Mantıksal sorgu geçerli olduğunda soruyu aktif yap. Aksi takdirde pasifleştir.",
      question_requireDescription: "Mantıksal sorgu geçerli olduğunda soruyu zorunlu olarak düzenle.",
      trigger_completeDescription: "Mantıksal sorgu geçerli olduğunda anketi tamamla ve son kullanıya 'Teşekkür sayfası'nı göster.",
      trigger_setvalueDescription: "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, değer seçilen soruya ayarlansın.",
      trigger_copyvalueDescription: "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, seçilen bir sorunun değeri seçilen başka bir soruya kopyalansın.",
      trigger_skipDescription: "Mantıksal ifade geçerli olduğunda anket seçilen soruya atlasın / odaklansın.",
      trigger_runExpressionDescription: "Mantksal ifade geçerli olduğunda ve özel ifade gereçli olur. İsteğe bağlı olarak bu ifade sonucunu seçilen soruya ayarlayabilirsiniz.",
      completedHtmlOnConditionDescription: "Eğer mantıksa ifade geçerli olursa, varsayılan ''Teşekkürler sayfası' yazısı girilen ile dğeiştirilsin.",
      itemExpressionText: "Mantıksal ifade: '{0}' geçerli olsun:", //{0} - the expression
      itemEmptyExpressionText: "Yeni kural",
      page_visibilityText: "{0} sayfayı görünür yap", //{0} page name
      panel_visibilityText: "{0} paneli görünür yap", //{0} panel name
      panel_enableText: "{0} panel aktif olur", //{0} panel name
      question_visibilityText: "{0} soruyu görünür yap", //{0} question name
      question_enableText: "{0} soruyu aktif yap", //{0} question name
      question_requireText: "{0} cevabı zorunlu yap", //{0} question name
      question_resetValueText: "Soru için sıfırlama değeri: {0}", //{0} question name.
      question_setValueText: "Değer atayın: Soruya {1}: {0}",
      column_visibilityText: "Soru {1} sütununu {0} görünür hale getirme", //{0} column name, {1} question name
      column_enableText: "Sütunun {0} soru {1} etkinleştirin", //{0} column name, {1} question name
      column_requireText: "Sütun {0} soru {1} gerekli hale getirmek", //{0} column name, {1} question name
      column_resetValueText: "Sütun için hücre değerini sıfırla: {0}", //{0} column name
      column_setValueText: "Hücre değeri atayın: Sütuna {1}: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Sonucu hedef soruya atanacak bir ifade.",
      trigger_completeText: "Anket tamamlandı",
      trigger_setvalueText: "Sorunun içine: {0} değer {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "net soru değeri: {0}", //{0} question name
      trigger_copyvalueText: "Sorusundan {1}, {0} değerini, soruya kopyala", //{0} and {1} question names
      trigger_skipText: "Soruya geç {0}", //{0} question name
      trigger_runExpressionText1: "Mantıksal ifadeyi çalıştır: '{0}'", //{0} the expression
      trigger_runExpressionText2: " ve sonuç değerini soruya ekle: {0}", //{0} question name
      completedHtmlOnConditionText: "Özel 'Teşekkürler sayfasını' göster.",
      showAllQuestions: "Tüm Sorular",
      showAllActionTypes: "Tüm Eylem Türleri",
      conditions: "Koşul(lar)",
      actions: "Olay(lar)",
      expressionEditorTitle: "Koşul(ları) tanımla",
      actionsEditorTitle: "Olay(ları) tanımla",
      deleteAction: "Olayı Sil",
      addNewAction: "Yeni olay ekle",
      selectedActionCaption: "Eklemek için bir olay seçin...",
      expressionInvalid: "Mantıksal ifade boş veya geçersiz. Lütfen düzenleyin.",
      noActionError: "Lütfen, En az bir olay seçiniz.",
      actionInvalid: "Lütfen, Olay(lar)daki sorunları gideriniz.",
      uncompletedRule_title: "Mantıksal kurallar eksik",
      uncompletedRule_text: "Bazı mantıksal kuralları tamamlamadınız. Sekmeyi şimdi bırakırsanız, değişiklikler kaybolur. Yine de değişiklikleri tamamlamadan sekmeden çıkmak istiyor musunuz?",
      uncompletedRule_apply: "Evet",
      uncompletedRule_cancel: "Hayır, kuralları tamamlamak istiyorum"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Panel adı",
      title: "Panel başlığı",
      description: "Panel açıklaması",
      visibleIf: "Aşağıdaki durumlarda paneli görünür hale getirin",
      requiredIf: "Aşağıdaki durumlarda paneli gerekli hale getirin",
      questionOrder: "Panel içinde soru sırası",
      page: "Ana sayfa",
      startWithNewLine: "Paneli yeni bir satırda görüntüleme",
      state: "Panel çökme durumu",
      width: "Satır içi panel genişliği",
      minWidth: "Minimum panel genişliği",
      maxWidth: "Maksimum panel genişliği",
      showNumber: "Bu paneli numaralandırın"
    },
    panellayoutcolumn: {
      effectiveWidth: "Etkili genişlik, %",
      questionTitleWidth: "Soru başlığı genişliği, px"
    },
    paneldynamic: {
      name: "Panel adı",
      title: "Panel başlığı",
      description: "Panel açıklaması",
      visibleIf: "Aşağıdaki durumlarda paneli görünür hale getirin",
      requiredIf: "Aşağıdaki durumlarda paneli gerekli hale getirin",
      page: "Paneli sayfaya taşıma",
      startWithNewLine: "Paneli yeni bir satırda görüntüleme",
      state: "Panel çökme durumu",
      width: "Satır içi panel genişliği",
      minWidth: "Minimum panel genişliği",
      maxWidth: "Maksimum panel genişliği",
      confirmDelete: "Panel silme işlemini onaylama",
      templateDescription: "Panel açıklama deseni",
      templateTitle: "Panel başlığı deseni",
      noEntriesText: "Boş panel metni",
      templateTabTitle: "Sekme başlığı deseni",
      tabTitlePlaceholder: "Sekme başlığı yer tutucusu",
      templateVisibleIf: "Aşağıdaki durumlarda tek bir paneli görünür hale getirme",
      showNumber: "Paneli numaralandırma",
      titleLocation: "Panel başlığı hizalaması",
      descriptionLocation: "Panel açıklaması hizalaması",
      templateQuestionTitleLocation: "Soru başlığı hizalaması",
      templateQuestionTitleWidth: "Soru başlığı genişliği",
      templateErrorLocation: "Hata iletisi hizalaması",
      newPanelPosition: "Yeni panel konumu",
      showRangeInProgress: "İlerleme çubuğunu gösterme",
      keyName: "Aşağıdaki soruda yinelenen yanıtları önleyin"
    },
    question: {
      name: "Soru adı",
      title: "Soru başlığı",
      description: "Soru açıklaması",
      visibleIf: "Aşağıdaki durumlarda soruyu görünür hale getirin",
      requiredIf: "Aşağıdaki durumlarda soruyu gerekli hale getirin",
      page: "Ana sayfa",
      state: "Soru kutusu daraltma durumu",
      showNumber: "Bu soruyu numaralandırın",
      titleLocation: "Soru başlığı hizalaması",
      descriptionLocation: "Soru açıklaması hizalaması",
      errorLocation: "Hata iletisi hizalaması",
      indent: "İç girintiyi artırma",
      width: "Satır içi soru genişliği",
      minWidth: "Minimum soru genişliği",
      maxWidth: "Maksimum soru genişliği",
      textUpdateMode: "Giriş alanı değerini güncelleştirme"
    },
    signaturepad: {
      signatureWidth: "İmza alanı genişliği",
      signatureHeight: "İmza alanı yüksekliği",
      signatureAutoScaleEnabled: "İmza alanını otomatik ölçeklendirme",
      showPlaceholder: "Yer tutucuyu gösterme",
      placeholder: "Yer tutucu metin",
      placeholderReadOnly: "Salt okunur veya önizleme modunda yer tutucu metin",
      allowClear: "İmza alanı içinde Temizle düğmesini gösterme",
      penMinWidth: "Minimum kalem genişliği",
      penMaxWidth: "Maksimum kalem genişliği",
      penColor: "Kontur rengi"
    },
    comment: {
      rows: "Giriş alanı yüksekliği (satırlarda)"
    },
    showQuestionNumbers: "Soru numarasını göster",
    questionStartIndex: "Soru indeksi (1, 2 veya 'A', 'a' gibi)",
    expression: {
      name: "İfade adı",
      title: "İfade başlığı",
      description: "İfade açıklaması",
      expression: "İfade"
    },
    trigger: {
      expression: "İfade"
    },
    calculatedvalue: {
      expression: "İfade"
    },
    // survey templates
    survey: {
      title: "Başlık",
      description: "Anket açıklaması",
      readOnly: "Anketi salt okunur hale getirin"
    },
    page: {
      name: "Sayfa adı",
      title: "Başlık",
      description: "Sayfa açıklaması",
      visibleIf: "Aşağıdaki durumlarda sayfayı görünür hale getirin",
      requiredIf: "Aşağıdaki durumlarda sayfayı gerekli hale getirin",
      timeLimit: "Sayfayı bitirmek için zaman sınırı (saniye cinsinden)",
      questionOrder: "Sayfadaki soru sırası"
    },
    matrixdropdowncolumn: {
      name: "Sütun adı",
      title: "Sütun başlığı",
      isUnique: "Yinelenen yanıtları önleyin",
      width: "Sütun genişliği",
      minWidth: "Minimum sütun genişliği",
      rows: "Giriş alanı yüksekliği (satırlarda)",
      visibleIf: "Aşağıdaki durumlarda sütunu görünür hale getirin",
      requiredIf: "Aşağıdaki durumlarda sütunu gerekli yap",
      showInMultipleColumns: "Her seçenek ayrı bir sütunda"
    },
    multipletextitem: {
      name: "Ad",
      title: "Başlık"
    },
    masksettings: {
      saveMaskedValue: "Anket sonuçlarında maskelenmiş değeri kaydetme"
    },
    patternmask: {
      pattern: "Değer örüntüsü"
    },
    datetimemask: {
      min: "Minimum değer",
      max: "Maksimum değer"
    },
    numericmask: {
      allowNegativeValues: "Negatif değerlere izin ver",
      thousandsSeparator: "Binlik ayırıcı",
      decimalSeparator: "Ondalık ayırıcı",
      precision: "Değer hassasiyeti",
      min: "Minimum değer",
      max: "Maksimum değer"
    },
    currencymask: {
      prefix: "Para birimi öneki",
      suffix: "Para birimi son eki"
    },
    imageHeight: "Resim yüksekliği",
    imageWidth: "Resim genişliği",
    valueName: "Değer adı",
    defaultDisplayValue: "Dinamik metinler için varsayılan görüntüleme değeri",
    rateDescriptionLocation: "Etiket hizalama",
    size: "Giriş alanı boyutu (karakter cinsinden)",
    cellErrorLocation: "Hücre hata iletisi hizalaması",
    enabled: "Etkin",
    disabled: "Sakat",
    inherit: "Devralır",
    apply: "Uygula",
    ok: "TAMAM",
    save: "Kaydet",
    clear: "Berrak",
    saveTooltip: "Kurtarmak",
    cancel: "İptal",
    set: "Ayarlamak",
    reset: "Sıfırla",
    change: "Değiştirmek",
    refresh: "Yenile",
    close: "Kapatmak",
    delete: "Sil",
    add: "Ekle",
    addNew: "Yeni Ekle",
    addItem: "Yeni nesne ekleme için tıklayınız...",
    removeItem: "Öğeyi kaldırmak için tıklayın...",
    dragItem: "Öğeyi sürükleyin",
    addOther: "Diğer",
    addSelectAll: "Tümünü Seç",
    addNone: "Hiçbiri",
    removeAll: "Tümünü Sil",
    edit: "Düzenle",
    back: "Kaydetmeden çık",
    backTooltip: "Kaydetmeden geri dönün",
    saveAndBack: "Kaydet ve çık",
    saveAndBackTooltip: "Kaydet ve geri dön",
    doneEditing: "Yapılmış",
    editChoices: "Seçenekleri düzenle",
    showChoices: "Seçenekleri göster",
    move: "Hareket",
    empty: "<boş>",
    emptyValue: "Değer boş",
    fastEntry: "Hızlı Giriş",
    fastEntryNonUniqueError: "'{0}' değeri benzersiz değil",
    fastEntryChoicesCountError: "Lütfen öğe sayısını {0}'den {1}'ye sınırlayın",
    fastEntryChoicesMinCountError: "Lütfen en az {0} ürün girin",
    fastEntryPlaceholder: "Verileri aşağıdaki biçimde ayarlayabilirsiniz:\ndeğer1|metin\ndeğer2",
    formEntry: "Form Girişi",
    testService: "Servisi test et",
    itemSelectorEmpty: "Lütfen nesneyi seçiniz",
    conditionActionEmpty: "Lütfen olayı seçiniz",
    conditionSelectQuestion: "Soruyu seç...",
    conditionSelectPage: "Sayfayı seç...",
    conditionSelectPanel: "Paneli seç...",
    conditionValueQuestionTitle: "Lütfen değer/seçenek giriniz",
    aceEditorHelp: "Mantıksal ifade kopyası için ctrl+space tuşlarına basınız",
    aceEditorRowTitle: "Geçerli satır",
    aceEditorPanelTitle: "Geçerli panel",
    showMore: "Daha fazla bilgi için dokümantasyonu inceleyiniz",
    assistantTitle: "Erişilebilir sorular:",
    cellsEmptyRowsColumns: "En az bir kolon veya satır olmalı",
    showPreviewBeforeComplete: "Tamamlanmadan önce önizlemeyi göster",
    overridingPropertyPrefix: "Ayarlayan ",
    resetToDefaultCaption: "Sıfırlama",
    propertyIsEmpty: "Lütfen değer giriniz",
    propertyIsNoUnique: "Lütfen benzersiz bir değer girin",
    propertyNameIsNotUnique: "Lütfen benzersiz bir isim giriniz",
    propertyNameIsIncorrect: "Ayrılmış kelimeler kullanmayın: \"öğe\", \"seçim\", \"panel\", \"satır\".",
    listIsEmpty: "Yeni eleman ekle",
    "listIsEmpty@choices": "Henüz seçenek eklenmedi",
    "listIsEmpty@columns": "Henüz sütununuz yok",
    "listIsEmpty@gridLayoutColumns": "Henüz düzen sütunlarına sahip değilsiniz",
    "listIsEmpty@rows": "Henüz satırınız yok",
    "listIsEmpty@validators": "Henüz herhangi bir doğrulama kuralınız yok",
    "listIsEmpty@calculatedValues": "Henüz özelleştirilebilen değişkeniniz yok",
    "listIsEmpty@triggers": "Henüz herhangi bir tetikleyiciniz yok",
    "listIsEmpty@navigateToUrlOnCondition": "Henüz bağlantınız yok",
    "listIsEmpty@pages": "Henüz hiç sayfanız yok",
    "addNew@choices": "Bir seçenek ekleyin",
    "addNew@columns": "Yeni sütun ekle",
    "addNew@rows": "Yeni satır ekle",
    "addNew@validators": "Yeni kural ekle",
    "addNew@calculatedValues": "Yeni değişken ekle",
    "addNew@triggers": "Yeni tetikleyici ekle",
    "addNew@navigateToUrlOnCondition": "Yeni URL ekle",
    "addNew@pages": "Yeni sayfa ekle",
    expressionIsEmpty: "Mantıksal ifade boş",
    value: "Değer",
    text: "Yazı",
    rowid: "Satır ID",
    imageLink: "Resim linki",
    columnEdit: "Kolonu düzenle: {0}",
    itemEdit: "Eleman düzenle: {0}",
    url: "URL",
    path: "Yol",
    choicesbyurl: {
      url: "Web hizmetinin URL'si",
      valueName: "Aşağıdaki JSON alanından değerler alın"
    },
    titleName: "Başlık adı",
    imageLinkName: "Aşağıdaki JSON alanından resim URL'leri alın",
    allowEmptyResponse: "Boş cevaba izin ver",
    titlePlaceholder: "Başlık",
    surveyTitlePlaceholder: "Anket başlığı",
    pageTitlePlaceholder: "Sayfa başlığı",
    startPageTitlePlaceholder: "Başlangıç Sayfası",
    descriptionPlaceholder: "Bir açıklama giriniz",
    surveyDescriptionPlaceholder: "Anket açıklaması giriniz",
    pageDescriptionPlaceholder: "Sayfa açıklaması giriniz",
    textWrapEnabled: "Sarma seçenekleri",
    showOtherItem: "Başka bir öğeye sahip",
    otherText: "Diğer eleman metni",
    showNoneItem: "Hiçbir elemana sahip değil",
    showRefuseItem: "Yanıtlamayı Reddet seçeneğine izin ver",
    showDontKnowItem: "Bilmiyorum seçeneğine izin ver",
    noneText: "Hiçbir eleman metni",
    showSelectAllItem: "Tüm elemanlar seçildi",
    selectAllText: "Tüm elemanların yazısını seç",
    choicesMin: "Otomatik oluşturulan öğeler için minimum değer",
    choicesMax: "Otomatik oluşturulan öğeler için maksimum değer",
    choicesStep: "Otomatik oluşturulan öğeler arasındaki fark",
    name: "isim",
    title: "Başlık",
    cellType: "Hücre tipi",
    colCount: "Kolon sayısı",
    choicesOrder: "Seçenek sırasını seç",
    allowCustomChoices: "Özel seçimlere izin ver",
    visible: "Görünür?",
    isRequired: "Zorunlu?",
    markRequired: "Gerektiği gibi işaretleyin",
    removeRequiredMark: "Gerekli işareti kaldırın",
    eachRowRequired: "Tüm satırlar zorunlu",
    eachRowUnique: "Satırlarda yinelenen yanıtları önleme",
    requiredErrorText: "Zorunlu hata yazısı",
    startWithNewLine: "Yeni satırla başla?",
    rows: "Satır sayısı",
    cols: "Kolon sayısı",
    placeholder: "Giriş varsayılan içeriği",
    showPreview: "Resim önizleme gösteriliyor mu?",
    storeDataAsText: "Dosya içeriğini JSON sonucunda metin olarak depola",
    maxSize: "Bayt cinsinden maksimum dosya boyutu",
    rowCount: "Satır sayısı",
    columnLayout: "Kolon yerleşimi",
    addRowButtonLocation: "Satır butonu konumu ekle",
    transposeData: "Satırları sütunlara dönüştürme",
    addRowText: "Satır butonu yazısı ekle",
    removeRowText: "Satır butonu yazısını kaldır",
    rateMin: "Minimum oran",
    rateMax: "Maksimum oran",
    rateStep: "Oylama adımı",
    minRateDescription: "Minimum oran açıklaması",
    maxRateDescription: "Maksimum oran açıklaması",
    inputType: "Girdi tipi",
    optionsCaption: "Seçenekler başlığı",
    defaultValue: "Varsayılan değer",
    cellsDefaultRow: "Varsayılan hücre yazısı",
    surveyEditorTitle: "Anket ayarlarını düzenle",
    qEditorTitle: "Düzenle: {0}",
    maxLength: "Maksimum uzunluk",
    buildExpression: "Kur",
    editExpression: "Düzenle",
    and: "ve",
    or: "veya",
    remove: "Kaldır",
    addCondition: "Koşul ekle",
    emptyLogicPopupMessage: "Koşulları yapılandırmaya başlamak için bir soru seçin.",
    if: "Eğer",
    then: "sonra",
    setToName: "Hedef soru",
    fromName: "Cevabın kopyalanacağı soru",
    gotoName: "Atlanacak soru",
    ruleIsNotSet: "Kural yanlış",
    includeIntoResult: "Anket sonuçlarına dahil etme",
    showTitle: "Başlığı göster/gizle",
    expandCollapseTitle: "Başlığı genişletme/daraltma",
    locale: "Varsayılan dil",
    simulator: "Cihaz seçin",
    landscapeOrientation: "Yatay",
    portraitOrientation: "Dikey yöne geçme",
    clearInvisibleValues: "Görünmez değerleri sil",
    cookieName: "Çerez adı (anketi yerel olarak iki kez devre dışı bırakmak için)",
    partialSendEnabled: "Bir sonraki sayfada anket sonuçlarını gönder",
    storeOthersAsComment: "'Diğerleri' değerini ayrı alanda depolayın",
    showPageTitles: "Sayfa başlıklarını göster",
    showPageNumbers: "Sayfa numaralarını göster",
    pagePrevText: "Önceki sayfa butonu metni",
    pageNextText: "Yeni sayfa butonu metni",
    completeText: "Tamamla butonu metni",
    previewText: "Önizleme düğmesi metni",
    editText: "Düğme metnini düzenle",
    startSurveyText: "Başla butonu yazısı",
    showNavigationButtons: "Gezinme butonlarını göster (varsayılan gezinme)",
    navigationButtonsLocation: "Gezinme düğmeleri hizalaması",
    showPrevButton: "Önceki butonu göster (kullanıcı önceki sayfaya dönebilir)",
    firstPageIsStartPage: "Anketteki ilk sayfa bir başlangıç sayfasıdır.",
    showCompletePage: "Tamamlanan sayfayı en sonunda göster (HTML)",
    autoAdvanceEnabled: "Tüm soruları cevaplarken otomatik olarak sonraki sayfaya git",
    autoAdvanceAllowComplete: "Anketi otomatik olarak tamamlama",
    showProgressBar: "İlerleme çubuğunu göster",
    progressBarLocation: "İlerleme çubuğu hizalaması",
    questionTitleLocation: "Soru başlığı konumu",
    questionTitleWidth: "Soru başlığı genişliği",
    requiredMark: "Zorunlu soru sembolü",
    questionTitleTemplate: "Soru başlığı şablonu, varsayılan değer: '{no}. {require} {title}'",
    questionErrorLocation: "Soru hatası konumu",
    autoFocusFirstQuestion: "İlk soruyu sayfayı değiştirmeye odakla",
    questionOrder: "Sayfadaki öğelerin sırası",
    timeLimit: "Anketi bitirmek için maksimum süre",
    timeLimitPerPage: "Ankette bir sayfayı bitirmek için maksimum süre",
    showTimer: "Bir zamanlayıcı kullanın",
    timerLocation: "Zamanlayıcı panelini göster",
    timerInfoMode: "Zamanlayıcı paneli modunu göster",
    renderMode: "İşleme modu",
    allowAddPanel: "Panel eklemeye izin ver",
    allowRemovePanel: "Panel silmeye izin ver",
    addPanelText: "Panel ekleme metni",
    removePanelText: "Panel silme metni",
    isSinglePage: "Tüm öğeleri tek bir sayfada göster",
    html: "Html",
    setValue: "Cevap",
    dataFormat: "Görüntü formatı",
    allowAddRows: "Satır eklemeye izin ver",
    allowRemoveRows: "Satırların kaldırılmasına izin ver",
    allowRowReorder: "Satır sürükleyip bırakmaya izin ver",
    responsiveImageSizeHelp: "Tam görüntü genişliğini veya yüksekliğini belirtirseniz uygulanmaz.",
    minImageWidth: "Minimum görüntü genişliği",
    maxImageWidth: "Maksimum görüntü genişliği",
    minImageHeight: "Minimum görüntü yüksekliği",
    maxImageHeight: "Maksimum görüntü yüksekliği",
    minValue: "Minimum değer",
    maxValue: "Maksimum değer",
    caseInsensitive: "Büyük/küçük harfe duyarlı değil",
    minLength: "Minimum uzunluk",
    allowDigits: "Rakamlara izin ver",
    minCount: "Minimum miktar",
    maxCount: "Maksimum miktar",
    regex: "Düzenli ifade",
    surveyvalidator: {
      text: "Hata mesajı",
      expression: "Doğrulama ifadesi"
    },
    totalText: "Toplam metni",
    totalType: "Toplam tipi",
    totalExpression: "Toplam mantıksal ifade",
    totalDisplayStyle: "Toplam görünüm",
    totalCurrency: "Toplam para birimi",
    totalFormat: "Toplam format",
    logo: "Logo (URL veya base64 kodlu dize)",
    questionsOnPageMode: "Anket yapısı",
    maxTextLength: "Maksimum metin uzunluğu",
    maxCommentLength: "Maksimum diğerleri uzunluğu",
    commentAreaRows: "Yorum alanı yüksekliği (satırlar halinde)",
    autoGrowComment: "Gerekirse yorum alanını otomatik olarak genişletin",
    allowResizeComment: "Kullanıcıların metin alanlarını yeniden boyutlandırmasına izin verme",
    textUpdateMode: "Metin sorusu değerini güncelleme",
    maskType: "Giriş maskesi türü",
    autoFocusFirstError: "İlk hataya odaklan",
    checkErrorsMode: "Çalıştırma doğrulaması",
    validateVisitedEmptyFields: "Kayıp odakta boş alanları doğrulayın",
    navigateToUrl: "URL'ye gidin",
    navigateToUrlOnCondition: "Dinamik URL",
    completedBeforeHtml: "Kullanıcının bu anketi zaten doldurup doldurmadığını göstermek için işaretleme",
    completedHtml: "Anket Sayfa işaretlemesini tamamla",
    completedHtmlOnCondition: "Dinamik Anket Sayfa işaretlemesini tamamla",
    loadingHtml: "Anket modeli yüklenirken gösterilecek işaretleme",
    commentText: "Yorum alanı metni",
    autocomplete: "Otomatik tamamlama türü",
    labelTrue: "\"Doğru\" etiketi",
    labelFalse: "\"Yanlış\" etiketi",
    allowClear: "Seçeneklerin başlığını göster",
    searchMode: "Arama Modu",
    displayStyle: "Değer görüntüleme stili",
    format: "Biçimlendirilmiş dize",
    maximumFractionDigits: "Maksimum kesirli basamaklar",
    minimumFractionDigits: "Minimum kesirli basamaklar",
    useGrouping: "Ekran gruplandırma ayırıcıları",
    allowMultiple: "Birden çok dosyaya izin ver",
    allowImagesPreview: "Önizleme görüntüleri",
    acceptedTypes: "Kabul edilen dosya türleri",
    waitForUpload: "Yüklemenin tamamlanmasını bekleyin",
    needConfirmRemoveFile: "Dosya silme işlemini onaylama",
    detailPanelMode: "Ayrıntı paneli konumu",
    minRowCount: "Minimum satır sayısı",
    maxRowCount: "Maksimum satır sayısı",
    confirmDelete: "Satır silme işlemini onaylama",
    confirmDeleteText: "Onay mesajı",
    panelCount: "İlk panel sayısı",
    minPanelCount: "Minimum panel sayısı",
    maxPanelCount: "Maksimum panel sayısı",
    panelsState: "İç panel genişletme durumu",
    prevPanelText: "Önceki Panel düğmesi araç ipucu",
    nextPanelText: "Sonraki Panel düğmesi araç ipucu",
    removePanelButtonLocation: "Panel düğmesinin konumunu kaldır",
    hideIfRowsEmpty: "Satır yoksa soruyu gizleme",
    hideColumnsIfEmpty: "Satır yoksa sütunları gizleme",
    rateValues: "Özel fiyat değerleri",
    rateCount: "Oran sayısı",
    autoGenerate: "Fiyat değerleri nasıl belirlenir?",
    hideIfChoicesEmpty: "Seçenek içermiyorsa soruyu gizleme",
    minWidth: "Minimum genişlik (CSS tarafından kabul edilen değerlerde)",
    maxWidth: "Maksimum genişlik (CSS tarafından kabul edilen değerlerde)",
    width: "Genişlik (CSS tarafından kabul edilen değerlerde)",
    showHeader: "Sütun başlıklarını göster",
    horizontalScroll: "Yatay kaydırma çubuğunu göster",
    columnMinWidth: "Minimum sütun genişliği (CSS tarafından kabul edilen değerlerde)",
    rowTitleWidth: "Satır başlığı genişliği (CSS tarafından kabul edilen değerlerde)",
    valueTrue: "\"Doğru\" değer",
    valueFalse: "\"False\" değeri",
    minErrorText: "\"Değer minimumun altında\" hata iletisi",
    maxErrorText: "\"Değer maksimumu aşıyor\" hata iletisi",
    otherErrorText: "\"Boş yorum\" hata iletisi",
    keyDuplicationError: "\"Benzersiz olmayan anahtar değeri\" hata iletisi",
    minSelectedChoices: "Seçilen minimum seçenekler",
    maxSelectedChoices: "Seçilen maksimum seçenek sayısı",
    logoWidth: "Logo genişlik",
    logoHeight: "Logo uzunluk",
    readOnly: "Salt okunur",
    enableIf: "Şu durumlarda düzenlenebilir",
    noRowsText: "\"Satır yok\" iletisi",
    separateSpecialChoices: "Ayrı özel seçenekler (Yok, Diğer, Tümünü Seç)",
    choicesFromQuestion: "Aşağıdaki sorudan seçenekleri kopyalama",
    choicesFromQuestionMode: "Hangi seçenekleri kopyalamalıyım?",
    choiceValuesFromQuestion: "Aşağıdaki matris sütunundaki veya panel sorusundaki değerleri seçim kimlikleri olarak kullanın",
    choiceTextsFromQuestion: "Aşağıdaki matris sütununda veya panel sorusunda yer alan değerleri seçim metinleri olarak kullanın",
    progressBarShowPageTitles: "Sayfa başlıklarını ilerleme çubuğunda görüntüleme",
    progressBarShowPageNumbers: "İlerleme çubuğunda sayfa numaralarını görüntüleme",
    showCommentArea: "Yorumu var",
    commentPlaceholder: "Yorum alanı yer tutucusu",
    displayRateDescriptionsAsExtremeItems: "Hız açıklamalarını aşırı değerler olarak görüntüleme",
    rowOrder: "Satır sırası",
    columnsLayout: "Sütun düzeni",
    columnColCount: "İç içe geçmiş sütun sayısı",
    correctAnswer: "Doğru Cevap",
    defaultPanelValue: "Varsayılan Değerler",
    cells: "Hücre Metinleri",
    fileInputPlaceholder: "Bir dosya seçin veya bir dosya bağlantısı yapıştırın...",
    keyName: "Anahtar sütunu",
    itemvalue: {
      visibleIf: "Aşağıdaki durumlarda seçeneği görünür hale getirin",
      enableIf: "Aşağıdaki durumlarda seçeneği seçilebilir hale getirin"
    },
    "itemvalue@rows": {
      visibleIf: "Aşağıdaki durumlarda satırı görünür hale getirin",
      enableIf: "Aşağıdaki durumlarda satırı düzenlenebilir hale getirin"
    },
    imageitemvalue: {
      text: "Alternatif metin"
    },
    logoPosition: "Logo pozisyonu",
    addLogo: "Logo ekle...",
    changeLogo: "Logoyu değiştir...",
    logoPositions: {
      none: "Logoyu kaldır",
      left: "Sol",
      right: "Sağ",
      top: "Üstte",
      bottom: "Altta"
    },
    previewMode: "Önizleme modu",
    gridLayoutEnabled: "Izgara düzenini etkinleştirin",
    gridLayoutColumns: "Izgara düzeni sütunları",
    maskSettings: "Maske ayarları",
    detailErrorLocation: "Satır genişletme hata iletisi hizalaması",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Panel Düzeni"
      },
      general: "Genel",
      fileOptions: "Seçenekler",
      html: "Html Editor",
      columns: "Kolonlar",
      rows: "Satırlar",
      choices: "Seçenekler",
      items: "Elemanlar",
      visibleIf: "Göster eğer",
      enableIf: "Pasifleştir Eğer",
      requiredIf: "Zorunlu Eğer",
      rateValues: "Oran değerleri",
      choicesByUrl: "Webten seçenekler",
      matrixChoices: "Varsayılan seçenekler",
      multipleTextItems: "Yazı girdileri",
      numbering: "Rakamlama",
      validators: "Doğrulayıcılar",
      navigation: "Gezinme",
      question: "Soru",
      pages: "Sayfalar",
      timer: "Zamanlayıcı / Sınav",
      calculatedValues: "Hesaplanan Değerler",
      triggers: "Tetikleyiciler",
      templateTitle: "Şablon başlığı",
      totals: "Toplamlar",
      logic: "Mantık",
      mask: "Giriş Maskesi Ayarları",
      layout: {
        panel: "Düzen",
        question: "Düzen",
        base: "Düzen"
      },
      data: "Veri",
      validation: "Doğrulayıcı",
      cells: "Hücreler",
      showOnCompleted: "Tamamlandı Göster",
      logo: "Anket Başlığında Logo",
      slider: "Kaydırıcı",
      expression: "İfade",
      questionSettings: "Soru Ayarları",
      header: "Üstbilgi",
      background: "Arka plan",
      appearance: "Görünüş",
      accentColors: "Vurgu renkleri",
      surfaceBackground: "Yüzey Arka Planı",
      scaling: "Ölçekleme",
      others: "Diğer"
    },
    editProperty: "Özelliği düzenle '{0}'",
    items: "[ Elemanlar: {0} ]",
    choicesVisibleIf: "Seçenekler şu durumlarda görünür:",
    choicesEnableIf: "Seçenekler şu durumlarda seçilebilir:",
    columnsEnableIf: "Sütunlar şu durumlarda görünür:",
    rowsEnableIf: "Satırlar şu durumlarda görünür:",
    innerIndent: "İç girintiler ekleme",
    copyDefaultValueFromLastEntry: "Varsayılan olarak son girişteki yanıtları kullan",
    enterNewValue: "Lütfen, değer girin.",
    noquestions: "Ankette herhangi bir soru yok.",
    createtrigger: "Lütfen bir tetikleyici oluşturun",
    titleKeyboardAdornerTip: "Düzenlemek için enter düğmesine basın",
    keyboardAdornerTip: "Öğeyi düzenlemek için enter butonuna basın, öğeyi silmek için sil butonuna basın, öğeyi taşımak için kontrol artı ok yukarı veya ok tuşuna basın",
    triggerOn: "Açık ",
    triggerMakePagesVisible: "Sayfaları görünür yap:",
    triggerMakeQuestionsVisible: "Elemanları görünür yap:",
    triggerCompleteText: "Başarılı olursa anketi tamamlayın.",
    triggerNotSet: "Tetikleyici ayarlanmadı",
    triggerRunIf: "Çalıştır eğer",
    triggerSetToName: "Değerini şuradan değiştir: ",
    triggerFromName: "Değerini şuradan kopyala: ",
    triggerRunExpression: "Mantıksal ifadeyi çalıştır:",
    triggerSetValue: "şuraya: ",
    triggerGotoName: "Soruya git:",
    triggerIsVariable: "Değişkeni anket sonucuna koymayın.",
    triggerRunExpressionEmpty: "Lütfen geçerli bir ifade girin",
    emptyExpressionPlaceHolder: "İfadeyi buraya yazın...",
    noFile: "Hiçbir dosya seçilmedi",
    clearIfInvisible: "Soru gizlenirse değeri temizleyin",
    valuePropertyName: "Değer özelliği adı",
    searchEnabled: "Aramayı etkinleştir",
    hideSelectedItems: "Seçili öğeleri gizle",
    closeOnSelect: "Seçimden sonra açılır menüyü kapatın",
    verticalAlign: "Dikey hizalama",
    alternateRows: "Alternatif satırlar",
    columnsVisibleIf: "Sütunlar şu durumlarda görünür:",
    rowsVisibleIf: "Satırlar şu durumlarda görünür:",
    otherPlaceholder: "Yorum alanı yer tutucusu",
    filePlaceholder: "Dosya yer tutucu metni",
    photoPlaceholder: "Fotoğraf yer tutucu metni",
    fileOrPhotoPlaceholder: "Dosya veya fotoğraf yer tutucu metni",
    rateType: "Fiyat türü",
    url_placeholder: "Ör.: https://api.example.com/books",
    path_placeholder: "Ör.: kategoriler.kurgu",
    questionStartIndex_placeholder: "Örn.: a)",
    width_placeholder: "Ör.: 6 inç",
    minWidth_placeholder: "Ör.: 600 piksel",
    maxWidth_placeholder: "Ör.: %50",
    imageHeight_placeholder: "Otomatik",
    imageWidth_placeholder: "Otomatik",
    itemTitleWidth_placeholder: "Ör.: 100 piksel",
    theme: {
      themeName: "Tema",
      isPanelless: "Soru görünümü",
      editorPanel: "Arka plan ve köşe yarıçapı",
      questionPanel: "Arka plan ve köşe yarıçapı",
      primaryColor: "Vurgu rengi",
      panelBackgroundTransparency: "Panel arka plan opaklığı",
      questionBackgroundTransparency: "Soru arka plan opaklığı",
      fontSize: "Yazı boyutu",
      scale: "Ölçeklemek",
      cornerRadius: "Köşe yarıçapı",
      advancedMode: "Gelişmiş mod",
      pageTitle: "Başlık yazı tipi",
      pageDescription: "Açıklama yazı tipi",
      questionTitle: "Başlık yazı tipi",
      questionDescription: "Açıklama yazı tipi",
      editorFont: "Yazı tipi",
      backgroundOpacity: "Opak -lık",
      "--sjs-font-family": "Yazı tipi ailesi",
      "--sjs-general-backcolor-dim": "Arka plan rengi",
      "--sjs-primary-backcolor": "Vurgu arka planı",
      "--sjs-primary-forecolor": "Vurgu ön planı",
      "--sjs-special-red": "Hata mesajları",
      "--sjs-shadow-small": "Gölge efektleri",
      "--sjs-shadow-inner": "Gölge efektleri",
      "--sjs-border-default": "Renk"
    },
    "header@header": {
      headerView: "Görünüm",
      logoPosition: "Logo konumu",
      surveyTitle: "Anket başlığı yazı tipi",
      surveyDescription: "Anket açıklaması yazı tipi",
      headerTitle: "Anket başlığı yazı tipi",
      headerDescription: "Anket açıklaması yazı tipi",
      inheritWidthFrom: "İçerik alanı genişliği",
      textAreaWidth: "Metin genişliği",
      backgroundColorSwitch: "Arka plan rengi",
      backgroundImage: "Arka plan resmi",
      backgroundImageOpacity: "Opak -lık",
      overlapEnabled: "Örtüş",
      logoPositionX: "Logo konumu",
      titlePositionX: "Unvan pozisyonu",
      descriptionPositionX: "Açıklama konumu"
    }
  },
  // Property values
  pv: {
    "true": "doğru",
    "false": "yanlış",
    file: "Yerel dosyalar",
    camera: "Kamera",
    "file-camera": "Yerel dosyalar veya kamera",
    inherit: "Başlangıç",
    show: "Göster",
    hide: "Gizle",
    default: "Varsayılan",
    initial: "Başlangıç",
    random: "Rastgele",
    collapsed: "Kapalı",
    expanded: "Genişletilmiş",
    none: "Yok",
    asc: "Artan",
    desc: "Azalan",
    indeterminate: "Belirsiz",
    selected: "Seçilmiş",
    unselected: "Seçili",
    decimal: "On -da -lık",
    currency: "para birimi",
    percent: "yüzde",
    firstExpanded: "firstExpanded",
    off: "Kapalı",
    list: "Liste",
    carousel: "Atlıkarınca",
    tab: "Sekmeler",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "Yatay",
    vertical: "Dikey",
    top: "Üst",
    bottom: "Alt",
    topBottom: "Üst ve alt",
    both: "Her ikiside",
    left: "Sol",
    right: "Sağ",
    center: "Orta",
    leftRight: "Sol ve sağ",
    middle: "Orta",
    color: "Renk",
    date: "tarih",
    datetime: "datetime",
    "datetime-local": "datetime-yerel",
    email: "E-posta",
    month: "ay",
    number: "sayı",
    password: "parola",
    range: "aralık",
    tel: "telefon",
    text: "Metin",
    time: "Saat",
    url: "URL",
    week: "hafta",
    hidden: "Gizli",
    edit: "Düzenle",
    display: "Görüntüle",
    contain: "Kapsamak",
    cover: "Örtmek",
    fill: "Doldurmak",
    next: "Önümüzdeki",
    last: "Son",
    onComplete: "Tamamlandığında",
    onHidden: "Gizlendiğinde",
    onHiddenContainer: "Soru veya paneli/sayfası gizlendiğinde",
    clearInvisibleValues: {
      none: "Hiç"
    },
    clearIfInvisible: {
      none: "Hiç"
    },
    inputType: {
      color: "Renk",
      date: "Tarih",
      "datetime-local": "Tarih ve Saat",
      email: "E-posta",
      month: "Ay",
      number: "Sayı",
      password: "Parola",
      range: "Aralık",
      tel: "Telefon numarası",
      text: "Metin",
      time: "Saat",
      url: "URL",
      week: "Hafta"
    },
    autocomplete: {
      name: "Adınız ve Soyadınız",
      "honorific-prefix": "Önek",
      "given-name": "Ad",
      "additional-name": "İkinci İsim",
      "family-name": "Soyadı",
      "honorific-suffix": "Sonek",
      nickname: "Lakap",
      "organization-title": "İş Ünvanı",
      username: "Kullanıcı Adı",
      "new-password": "Yeni Şifre",
      "current-password": "Mevcut Şifre",
      organization: "Kuruluş Adı",
      "street-address": "Açık Adres",
      "address-line1": "Adres Satırı 1",
      "address-line2": "Adres Satırı 2",
      "address-line3": "Adres Satırı 3",
      "address-level4": "Seviye 4 Adres",
      "address-level3": "Seviye 3 Adres",
      "address-level2": "Seviye 2 Adres",
      "address-level1": "Seviye 1 Adres",
      country: "Ülke Kodu",
      "country-name": "Ülke Adı",
      "postal-code": "Posta Kodu",
      "cc-name": "Kart Sahibinin Adı",
      "cc-given-name": "Kart Sahibinin Adı",
      "cc-additional-name": "Kart Sahibinin İkinci Adı",
      "cc-family-name": "Kart Sahibinin Soyadı",
      "cc-number": "Kredi Kartı Numarası",
      "cc-exp": "Son kullanma tarihi",
      "cc-exp-month": "Son kullanma ayı",
      "cc-exp-year": "Son kullanma yılı",
      "cc-csc": "Kart Güvenlik Kodu",
      "cc-type": "Kredi Kartı Türü",
      "transaction-currency": "İşlem Para Birimi",
      "transaction-amount": "İşlem Tutarı",
      language: "Tercih Edilen Dil",
      bday: "Doğum günü",
      "bday-day": "Doğum Günü",
      "bday-month": "Doğum Günü Ayı",
      "bday-year": "Doğum Günü Yılı",
      sex: "Cinsiyet",
      url: "Web Sitesi URL'si",
      photo: "Profil Fotoğrafı",
      tel: "Telefon numarası",
      "tel-country-code": "Telefon için Ülke Kodu",
      "tel-national": "Ulusal Telefon Numarası",
      "tel-area-code": "Alan kodu",
      "tel-local": "Yerel Telefon Numarası",
      "tel-local-prefix": "Yerel Telefon Öneki",
      "tel-local-suffix": "Yerel Telefon Soneki",
      "tel-extension": "Telefon Uzantısı",
      email: "E-posta Adresi",
      impp: "Anlık Mesajlaşma Protokolü"
    },
    maskType: {
      none: "Hiç kimse",
      pattern: "Desen",
      numeric: "Sayısal",
      datetime: "Tarih ve Saat",
      currency: "Para birimi"
    },
    inputTextAlignment: {
      auto: "Otomatik",
      left: "Sol",
      right: "Sağ"
    },
    all: "Tümü",
    page: "Sayfa",
    survey: "Anket",
    onNextPage: "Sonraki sayfada",
    onValueChanged: "Değer değiştiğinde",
    onValueChanging: "Bir yanıt değiştirilmeden önce",
    questionsOnPageMode: {
      standard: "Orijinal yapı",
      singlePage: "Tüm soruları tek bir sayfada göster",
      questionPerPage: "Sayfa başına tek bir soru göster"
    },
    noPreview: "Önizleme yok",
    showAllQuestions: "Tüm soruları göster",
    showAnsweredQuestions: "Cevaplanan soruları göster",
    allQuestions: "Tüm soruları göster",
    answeredQuestions: "Yalnızca yanıtlanmış soruları göster",
    pages: "Tamamlanan sayfalar",
    questions: "Sorular",
    requiredQuestions: "Gerekli sorular",
    correctQuestions: "Doğru sorular",
    buttons: "Butonlar",
    underInput: "Giriş altında",
    underTitle: "Başlık altında",
    onBlur: "Bulanıklaştırmada",
    onTyping: "Yazarken",
    underRow: "Satırın altında",
    underRowSingle: "Satırın altında yalnızca bir panel görünür",
    auto: "Otomatik",
    showNavigationButtons: {
      none: "Gizli"
    },
    timerInfoMode: {
      combined: "Her ikisi"
    },
    addRowButtonLocation: {
      default: "Matris düzenine bağlıdır"
    },
    panelsState: {
      default: "Kullanıcılar panelleri genişletemez veya daraltamaz",
      collapsed: "Tüm paneller daraltıldı",
      expanded: "Tüm paneller genişletildi",
      firstExpanded: "İlk genişletildi"
    },
    widthMode: {
      static: "Duruk",
      responsive: "Duyarlı"
    },
    contentMode: {
      image: "Resim",
      video: "Video",
      youtube: "Videolar"
    },
    displayMode: {
      buttons: "Düğme",
      dropdown: "Açılır menü"
    },
    rateColorMode: {
      default: "Temerrüt",
      scale: "Ölçeklemek"
    },
    scaleColorMode: {
      monochrome: "Monokrom",
      colored: "Renkli"
    },
    autoGenerate: {
      "true": "Oluşturmak",
      "false": "Manuel olarak girme"
    },
    rateType: {
      labels: "Etiket",
      stars: "Yıldız",
      smileys: "Suratlar"
    },
    state: {
      default: "Kilitli"
    },
    showQuestionNumbers: {
      default: "Otomatik numaralandırma",
      on: "Otomatik numaralandırma",
      onPage: "Her sayfada sıfırla",
      onpanel: "Her panelde sıfırla",
      onPanel: "Her panelde sıfırla",
      recursive: "Özyinelemeli numaralandırma",
      onSurvey: "Ankete devam edin",
      off: "Numaralandırma yok"
    },
    descriptionLocation: {
      underTitle: "Soru başlığı altında",
      underInput: "Giriş alanının altında"
    },
    selectToRankAreasLayout: {
      horizontal: "Seçeneklerin yanında",
      vertical: "Yukarıdaki seçenekler"
    },
    displayStyle: {
      decimal: "On -da -lık",
      currency: "Para birimi",
      percent: "Yüzde",
      date: "Tarih"
    },
    totalDisplayStyle: {
      decimal: "On -da -lık",
      currency: "Para birimi",
      percent: "Yüzde",
      date: "Tarih"
    },
    rowOrder: {
      initial: "Özgün"
    },
    questionOrder: {
      initial: "Özgün"
    },
    progressBarLocation: {
      top: "Sayfanın Üstü",
      bottom: "Dip",
      topbottom: "Üst ve alt",
      aboveheader: "Başlığın üstünde",
      belowheader: "Başlığın altında",
      off: "Gizli"
    },
    sum: "Toplam",
    count: "Saymak",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Içerir",
      startsWith: "İle başlar"
    },
    backgroundImageFit: {
      auto: "Otomatik",
      cover: "Örtmek",
      contain: "Kapsamak",
      fill: "Uzatmak",
      tile: "Kiremit"
    },
    backgroundImageAttachment: {
      fixed: "Sabit",
      scroll: "Tomar"
    },
    headerView: {
      basic: "Temel",
      advanced: "İleri"
    },
    inheritWidthFrom: {
      survey: "Anketle aynı",
      container: "Konteynere sığdır"
    },
    backgroundColorSwitch: {
      none: "Hiç kimse",
      accentColor: "Vurgu rengi",
      custom: "Töre"
    },
    colorPalette: {
      light: "Işık",
      dark: "Koyu"
    },
    isPanelless: {
      "false": "Temerrüt",
      "true": "Panelsiz"
    },
    progressBarInheritWidthFrom: {
      survey: "Anketle aynı",
      container: "Konteyner ile aynı"
    }
  },
  // Operators
  op: {
    empty: "boş",
    notempty: "boş değil",
    equal: "eşittir",
    notequal: "eşit değildir",
    contains: "içerir",
    notcontains: "içermez",
    anyof: "herhangi biri",
    allof: "tümü",
    greater: "büyüktür",
    less: "küçüktür",
    greaterorequal: "büyük eşittir",
    lessorequal: "küçük eşittir",
    and: "ve",
    or: "veya"
  },
  // Embed window
  ew: {
    angular: "Angular versiyonu kullan",
    jquery: "Jquery versiyonu kullan",
    knockout: "Knockout versiyonu kullan",
    react: "React versiyonu kullan",
    vue: "Vue versiyonu kullan",
    bootstrap: "Bootstrap",
    modern: "Modern tema",
    default: "Varsayılan tema",
    orange: "Turuncu tema",
    darkblue: "Lacivert tema",
    darkrose: "Darkrose teması",
    stone: "Taş teması",
    winter: "Kış teması",
    winterstone: "Kış-Taş teması",
    showOnPage: "Bir sayfada anket göster",
    showInWindow: "Anketi bir pencerede göster",
    loadFromServer: "Anket JSON'u sunucudan yükle",
    titleScript: "Scriptler ve stiller",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Test edilecek sayfayı seçin:",
    showInvisibleElements: "Görünmez öğeleri göster",
    hideInvisibleElements: "Görünmez öğeleri gizleme"
  },
  validators: {
    answercountvalidator: "cevap sayısı",
    emailvalidator: "e-mail",
    expressionvalidator: "ifade",
    numericvalidator: "numerik",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "anketi tamamla",
    setvaluetrigger: "değeri ayarla",
    copyvaluetrigger: "değeri kopyala",
    skiptrigger: "soruyu atla",
    runexpressiontrigger: "mantıksal ifadeyi çalıştır",
    visibletrigger: "görünürlüğü değiştir (kullanımdan kaldırıldı)"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Ör.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Ör.: aa/gg/yyyy"
    },
    currencymask: {
      prefix: "Ör.: $",
      suffix: "Ör.: USD"
    },
    panelbase: {
      questionTitleWidth: "Ör.: 200 piksel"
    },
    panellayoutcolumn: {
      effectiveWidth: "Ör.: %30",
      questionTitleWidth: "Ör.: 200 piksel"
    }
  },
  pehelp: {
    panel: {
      name: "Yanıtlayanlar tarafından görülemeyen bir panel kimliği.",
      description: "Bir panel altyazısı yazın.",
      visibleIf: "Panel görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      enableIf: "Panelin salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      requiredIf: "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      questionTitleLocation: "Bu paneldeki tüm sorular için geçerlidir. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular.",
      questionTitleWidth: "Soru kutularının soluna hizalandıklarında soru başlıkları için tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      questionErrorLocation: "Paneldeki tüm sorularla ilgili olarak bir hata mesajının konumunu ayarlar. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını uygular.",
      questionOrder: "Soruların orijinal sırasını korur veya rastgele hale getirir. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını uygular.",
      page: "Paneli seçili sayfanın sonuna yeniden konumlandırır.",
      innerIndent: "Panel içeriği ile panel kutusunun sol kenarlığı arasına boşluk veya kenar boşluğu ekler.",
      startWithNewLine: "Panelin önceki soru veya panelle aynı satırda görüntülenmesi için seçimi kaldırın. Panel formunuzdaki ilk öğeyse bu ayar uygulanmaz.",
      state: "Şunlar arasından seçim yapın: \"Genişletilmiş\" - panel tam olarak görüntülenir ve daraltılabilir; \"Daraltılmış\" - panel yalnızca başlığı ve açıklamayı görüntüler ve genişletilebilir; \"Kilitli\" - panel tam olarak görüntülenir ve daraltılamaz.",
      width: "Panelin genişliğini aynı satırdaki diğer anket öğeleriyle orantılı olarak ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      showQuestionNumbers: "Bu panelde iç içe yerleştirilmiş sorulara numaralar atar.",
      effectiveColSpan: "Bu panelin ızgara mizanpajı içinde kaç sütuna yayılacağını belirtir.",
      gridLayoutColumns: "Bu tablo, panel içindeki her bir ızgara sütununu yapılandırmanıza olanak tanır. Bir satırdaki maksimum öğe sayısına bağlı olarak her sütun için genişlik yüzdesini otomatik olarak ayarlar. Tablo düzenini özelleştirmek için bu değerleri manuel olarak ayarlayın ve her sütundaki tüm sorular için başlık genişliğini tanımlayın."
    },
    paneldynamic: {
      name: "Yanıtlayanlar tarafından görülemeyen bir panel kimliği.",
      description: "Bir panel altyazısı yazın.",
      visibleIf: "Panel görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      enableIf: "Panelin salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      requiredIf: "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      templateQuestionTitleLocation: "Bu paneldeki tüm sorular için geçerlidir. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular.",
      templateQuestionTitleWidth: "Soru başlıkları soru kutularının soluna hizalandığında tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      templateErrorLocation: "Geçersiz girişi olan bir soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular.",
      errorLocation: "Paneldeki tüm sorularla ilgili olarak bir hata mesajının konumunu ayarlar. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını uygular.",
      page: "Paneli seçili sayfanın sonuna yeniden konumlandırır.",
      innerIndent: "Panel içeriği ile panel kutusunun sol kenarlığı arasına boşluk veya kenar boşluğu ekler.",
      startWithNewLine: "Panelin önceki soru veya panelle aynı satırda görüntülenmesi için seçimi kaldırın. Panel formunuzdaki ilk öğeyse bu ayar uygulanmaz.",
      state: "Şunlar arasından seçim yapın: \"Genişletilmiş\" - panel tam olarak görüntülenir ve daraltılabilir; \"Daraltılmış\" - panel yalnızca başlığı ve açıklamayı görüntüler ve genişletilebilir; \"Kilitli\" - panel tam olarak görüntülenir ve daraltılamaz.",
      width: "Panelin genişliğini aynı satırdaki diğer anket öğeleriyle orantılı olarak ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      templateTitle: "Dinamik panel başlıkları için bir şablon yazın. Panelin genel konumu için {panelIndex} ve görünür paneller arasındaki sırası için {visiblePanelIndex} kullanın. Otomatik numaralandırma eklemek için bu yer tutucuları desene ekleyin.",
      templateTabTitle: "Sekme başlıkları için bir şablon yazın. Panelin genel konumu için {panelIndex} ve görünür paneller arasındaki sırası için {visiblePanelIndex} kullanın. Otomatik numaralandırma eklemek için bu yer tutucuları desene ekleyin.",
      tabTitlePlaceholder: "Sekme başlığı deseni anlamlı bir değer üretmediğinde geçerli olan sekme başlıkları için bir geri dönüş metni.",
      templateVisibleIf: "Bu ayar, dinamik panel içindeki tek tek panellerin görünürlüğünü kontrol etmenizi sağlar. İfadenizdeki geçerli panele başvurmak için '{panel}' yer tutucusunu kullanın.",
      titleLocation: "Bu ayar, bu paneldeki tüm sorular tarafından otomatik olarak devralınır. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular.",
      descriptionLocation: "\"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Panel başlığı altında\") uygular.",
      newPanelPosition: "Yeni eklenen panelin konumunu tanımlar. Varsayılan olarak, sonuna yeni paneller eklenir. Geçerli panelden sonra yeni bir panel eklemek için \"İleri\" yi seçin.",
      copyDefaultValueFromLastEntry: "Son paneldeki yanıtları çoğaltır ve bir sonraki eklenen dinamik panele atar.",
      keyName: "Kullanıcının her panelde bu soruya benzersiz bir yanıt vermesini zorunlu kılmak için bir soru adına başvurun."
    },
    copyDefaultValueFromLastEntry: "Son satırdaki yanıtları çoğaltır ve bunları bir sonraki eklenen dinamik satıra atar.",
    defaultValueExpression: "Bu ayar, bir ifadeye göre varsayılan bir yanıt değeri atamanıza olanak tanır. İfade temel hesaplamaları içerebilir - '{q1_id} + {q2_id}', '{age} > 60' gibi Boole ifadeleri ve işlevler: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb. Bu ifade tarafından belirlenen değer, yanıtlayanın manuel girişi tarafından geçersiz kılınabilecek ilk varsayılan değer olarak işlev görür.",
    resetValueIf: "Yanıtlayanın girişinin ne zaman \"Varsayılan değer ifadesi\" veya \"Değer ifadesi ayarla\" ya da \"Varsayılan yanıt\" değerine (ayarlanmışsa) dayalı değere ne zaman sıfırlanacağını belirleyen bir koşullu kural ayarlamak için sihirli değnek simgesini kullanın.",
    setValueIf: "\"Değer ayarla ifadesinin\" ne zaman çalıştırılacağını belirleyen koşullu bir kural belirlemek ve elde edilen değeri yanıt olarak dinamik olarak atamak için sihirli değnek simgesini kullanın.",
    setValueExpression: "\"Şu durumda değer ayarla\" kuralındaki koşullar karşılandığında ayarlanacak değeri tanımlayan bir ifade belirtin. İfade temel hesaplamaları içerebilir - '{q1_id} + {q2_id}', '{age} > 60' gibi Boole ifadeleri ve işlevler: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb. Bu ifade tarafından belirlenen değer, yanıtlayanın manuel girişi tarafından geçersiz kılınabilir.",
    gridLayoutEnabled: "Anket Oluşturucu, düzeni kontrol etmek için form öğelerinin satır içi genişliklerini manuel olarak ayarlamanıza olanak tanır. Bu istenen sonucu vermezse, sütun tabanlı bir sistem kullanarak öğeleri oluşturan yapıların ızgara düzenini etkinleştirebilirsiniz. Düzen sütunlarını yapılandırmak için bir sayfa veya panel seçin ve \"Soru Ayarları\" → \"Izgara sütunları\" tablosunu kullanın. Bir sorunun kaç sütuna yayılacağını ayarlamak için soruyu seçin ve \"Düzen\" → \"Sütun aralığı\" alanında istediğiniz değeri ayarlayın.",
    question: {
      name: "Yanıtlayanlar tarafından görülemeyen bir soru kimliği.",
      description: "Bir soru alt başlığı yazın.",
      visibleIf: "Soru görünürlüğünü belirleyen koşullu bir kural belirlemek için sihirli değnek simgesini kullanın.",
      enableIf: "Soru için salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      requiredIf: "Soru yanıt almadıkça anketin ilerlemesini veya gönderilmesini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      startWithNewLine: "Soruyu, önceki soru veya panelle birlikte tek satırda görüntülemek için seçimi kaldırın. Soru formunuzdaki ilk öğeyse bu ayar geçerli değildir.",
      page: "Soruyu seçili sayfanın sonuna konumlandırır.",
      state: "Şunlar arasından seçim yapın: \"Genişletilmiş\" - soru kutusu tam olarak görüntülenir ve daraltılabilir; \"Daraltılmış\" - soru kutusu yalnızca başlığı ve açıklamayı görüntüler ve genişletilebilir; \"Kilitli\" - soru kutusu tam olarak görüntülenir ve daraltılamaz.",
      titleLocation: "Panel, sayfa veya anket düzeyinde tanımlanan başlık hizalama kurallarını geçersiz kılar. \"Devral\" seçeneği, tüm üst düzey ayarları (ayarlanmışsa) veya anket düzeyindeki ayarları (varsayılan olarak \"Üst\") uygular.",
      descriptionLocation: "\"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Soru başlığının altında\").",
      errorLocation: "Geçersiz girişi olan soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Üst\").",
      indent: "Soru içeriği ile soru kutusunun sol kenarlığı arasına boşluk veya kenar boşluğu ekler.",
      width: "Sorunun genişliğini, aynı satırdaki diğer anket öğeleriyle orantılı olarak ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      surveyvalidator: {
        expression: "Soru için bir doğrulama kuralı ayarlamak için sihirli değnek simgesini kullanın."
      },
      textUpdateMode: "Şunlar arasından seçim yapın: \"Odak kaybolduğunda\" - giriş alanı odağı kaybettiğinde değer güncellenir; \"Yazarken\" - değer, kullanıcılar yazarken gerçek zamanlı olarak güncellenir. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Odak kaybolduğunda\").",
      url: "Çoktan seçmeli sorular için herhangi bir web hizmetini veri kaynağı olarak kullanabilirsiniz. Seçim değerlerini doldurmak için, verileri sağlayan hizmetin URL'sini girin.",
      searchMode: "Açılan listeyi filtrelemek için kullanılan bir karşılaştırma işlemi.",
      textWrapEnabled: "Seçim seçeneklerindeki uzun metinler, açılır menüye sığacak şekilde otomatik olarak satır sonları oluşturur. Metinlerin kırpılmasını istiyorsanız seçimi kaldırın.",
      effectiveColSpan: "Bu sorunun ızgara düzeni içinde kaç sütuna yayılacağını belirtir."
    },
    signaturepad: {
      signatureWidth: "Görüntülenen imza alanının ve elde edilen görüntünün genişliğini ayarlar.",
      signatureHeight: "Görüntülenen imza alanının ve elde edilen görüntünün yüksekliğini ayarlar.",
      signatureAutoScaleEnabled: "İmza alanının, varsayılan 3:2 en boy oranını korurken soru kutusundaki tüm kullanılabilir alanı doldurmasını isteyip istemediğinizi seçin. Özel genişlik ve yükseklik değerleri ayarlandığında, ayar bu boyutların en boy oranını korur."
    },
    file: {
      imageHeight: "Anket sonuçlarındaki görüntünün yüksekliğini ayarlar.",
      imageWidth: "Anket sonuçlarındaki görüntünün genişliğini ayarlar.",
      allowImagesPreview: "Mümkün olduğunda karşıya yüklenen dosyalar için küçük resim önizlemelerini görüntüler. Bunun yerine dosya simgelerini göstermek istiyorsanız seçimi kaldırın."
    },
    image: {
      contentMode: "\"Otomatik\" seçeneği, sağlanan kaynak URL'ye göre görüntüleme için uygun modu (Resim, Video veya YouTube) otomatik olarak belirler."
    },
    imagepicker: {
      imageHeight: "Minimum ve maksimum yükseklik değerlerini geçersiz kılar.",
      imageWidth: "Minimum ve maksimum genişlik değerlerini geçersiz kılar.",
      choices: "\"Değer\", koşullu kurallarda kullanılan bir öğe kimliği görevi görür; Yanıtlayanlara \"Metin\" gösterilir.",
      contentMode: "Medya seçicinin içerik modunu ayarlamak için \"Görüntü\" ve \"Video\" arasında seçim yapın. \"Resim\" seçilirse, sağlanan tüm seçeneklerin şu biçimlerdeki resim dosyaları olduğundan emin olun: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Benzer şekilde, \"Video\" seçilirse, tüm seçeneklerin aşağıdaki formatlardaki video dosyalarına doğrudan bağlantılar olduğundan emin olun: MP4, MOV, WMV, FLV, AVI, MKV. Video seçenekleri için YouTube bağlantılarının desteklenmediğini lütfen unutmayın."
    },
    text: {
      size: "Bu ayar yalnızca giriş alanını yeniden boyutlandırır ve soru kutusunun genişliğini etkilemez. Kabul edilen giriş uzunluğunu sınırlamak için <b>Doğrulama → Maksimum karakter sınırı'na</b> gidin."
    },
    comment: {
      rows: "Giriş alanında görüntülenen satırların sayısını ayarlar. Giriş daha fazla satır alırsa, kaydırma çubuğu görünecektir."
    },
    // survey templates
    survey: {
      readOnly: "Yanıtlayanların anketinizi doldurmasını engellemek isteyip istemediğinizi seçin.",
      progressBarLocation: "İlerleme çubuğunun konumunu ayarlar. \"Otomatik\" değeri, anket başlığının üstünde veya altında ilerleme çubuğunu görüntüler."
    },
    matrixdropdowncolumn: {
      name: "Yanıtlayanlar tarafından görülemeyen bir sütun kimliği.",
      isUnique: "Bir sütun için etkinleştirildiğinde, yanıtlayanın bu sütundaki her soru için benzersiz bir yanıt vermesi gerekir.",
      rows: "Giriş alanında görüntülenen satırların sayısını ayarlar. Giriş daha fazla satır alırsa, kaydırma çubuğu görünecektir.",
      visibleIf: "Sütun görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      enableIf: "Sütunun salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      requiredIf: "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      showInMultipleColumns: "Seçildiğinde, her seçim seçeneği için ayrı bir sütun oluşturur.",
      colCount: "Seçim seçeneklerini çok sütunlu bir düzende düzenler. 0 olarak ayarlandığında, seçenekler tek bir satırda görüntülenir. -1 olarak ayarlandığında, gerçek değer üst matrisin \"İç içe sütun sayısı\" özelliğinden devralınır."
    },
    caseInsensitive: "Normal ifadedeki büyük ve küçük harflerin eşdeğer olarak kabul edilmesi gerekip gerekmediğini seçin.",
    widthMode: "Şunlar arasından seçim yapın: \"Statik\" - sabit bir genişlik ayarlar; \"Duyarlı\" - anketin ekranın tüm genişliğini kaplamasını sağlar; \"Otomatik\" - kullanılan soru türlerine bağlı olarak ikisinden birini uygular.",
    cookieName: "Çerezler, kullanıcıların aynı anketi iki kez doldurmasını engeller.",
    logo: "Bilgisayarınızdan bir dosyaya (64 KB'a kadar) göz atmak için bir resim bağlantısı yapıştırın (boyut sınırı yok) veya klasör simgesini tıklayın.",
    logoWidth: "CSS birimlerinde bir logo genişliği ayarlar (px, %, in, pt, vb.).",
    logoHeight: "CSS birimlerinde (px, %, in, pt, vb.) bir logo yüksekliği ayarlar.",
    logoFit: "Şunlar arasından seçim yapın: \"Yok\" - görüntü orijinal boyutunu korur; \"İçer\" - görüntü, en boy oranı korunurken sığacak şekilde yeniden boyutlandırılır; \"Kapak\" - görüntü, en boy oranını korurken tüm kutuyu doldurur; \"Doldur\" - görüntü, en boy oranını korumadan kutuyu dolduracak şekilde uzatılır.",
    autoAdvanceEnabled: "Yanıtlayan geçerli sayfadaki tüm soruları yanıtladıktan sonra anketin otomatik olarak sonraki sayfaya ilerlemesini isteyip istemediğinizi seçin. Bu özellik, sayfadaki son soru açık uçluysa veya birden fazla yanıta izin veriyorsa uygulanmaz.",
    autoAdvanceAllowComplete: "Yanıtlayan tüm soruları yanıtladıktan sonra anketin otomatik olarak tamamlanmasını isteyip istemediğinizi seçin.",
    showNavigationButtons: "Sayfadaki gezinme düğmelerinin görünürlüğünü ve konumunu ayarlar.",
    navigationButtonsLocation: "Sayfadaki gezinme düğmelerinin konumunu ayarlar.",
    showPreviewBeforeComplete: "Önizleme sayfasını tüm sorularla veya yalnızca yanıtlanmış sorularla etkinleştirin.",
    questionTitleLocation: "Anketteki tüm sorular için geçerlidir. Bu ayar, panel, sayfa veya soru gibi daha düşük düzeylerdeki başlık hizalama kuralları tarafından geçersiz kılınabilir. Daha düşük düzeydeki bir ayar, daha yüksek düzeydeki ayarları geçersiz kılar.",
    requiredMark: "Bir yanıtın gerekli olduğunu gösteren bir sembol veya sembol dizisi.",
    questionStartIndex: "Numaralandırmaya başlamak istediğiniz sayıyı veya harfi girin.",
    questionErrorLocation: "Geçersiz girişi olan soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir.",
    autoFocusFirstQuestion: "Her sayfadaki ilk giriş alanının metin girişi için hazır olmasını istiyorsanız seçin.",
    questionOrder: "Soruların orijinal sırasını korur veya rastgele hale getirir. Bu ayarın etkisi yalnızca Önizleme sekmesinde görünür.",
    maxTextLength: "Yalnızca metin girişi soruları için.",
    maxCommentLength: "Yalnızca soru yorumları içindir.",
    commentAreaRows: "Soru yorumları için metin alanlarında görüntülenen satır sayısını ayarlar. Giriş daha fazla satır kaplıyorsa, kaydırma çubuğu görünür.",
    autoGrowComment: "Soru yorumlarının ve Uzun Metin sorularının yüksekliğinin girilen metin uzunluğuna göre otomatik olarak büyümesini istiyorsanız seçin.",
    allowResizeComment: "Yalnızca soru yorumları ve Uzun Metin soruları için.",
    calculatedValues: "Özelleştirilebilir değişkenler, form hesaplamalarında kullanılan ara veya yardımcı değişkenler olarak işlev görür. Yanıtlayan girdilerini kaynak değerler olarak alırlar. Her özelleştirilebilen değişkenin benzersiz bir adı ve temel aldığı bir ifadesi vardır.",
    includeIntoResult: "İfadenin hesaplanan değerinin anket sonuçlarıyla birlikte kaydedilmesini isteyip istemediğinizi seçin.",
    triggers: "Tetikleyici, bir ifadeyi temel alan bir olay veya koşuldur. İfade \"true\" olarak değerlendirildikten sonra, bir tetikleyici bir eylemi başlatır. Böyle bir eylemin isteğe bağlı olarak etkilediği bir hedef sorusu olabilir.",
    clearInvisibleValues: "Koşullu mantık tarafından gizlenen sorular için değerlerin temizlenip temizlenmeyeceğini ve bunun ne zaman yapılacağını seçin.",
    textUpdateMode: "Şunlar arasından seçim yapın: \"Odak kaybolduğunda\" - giriş alanı odağı kaybettiğinde değer güncellenir; \"Yazarken\" - değer, kullanıcılar yazarken gerçek zamanlı olarak güncellenir.",
    columns: "Soldaki değer, koşullu kurallarda kullanılan bir sütun kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir.",
    rows: "Soldaki değer, koşullu kurallarda kullanılan bir satır kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir.",
    columnMinWidth: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    rowTitleWidth: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    totalText: "Yalnızca en az bir sütunda Toplam türü veya Toplam ifadesi olduğunda görünür.",
    cellErrorLocation: "Geçersiz girişi olan bir hücreyle ilgili olarak bir hata iletisinin konumunu ayarlar. \"Devral\" seçeneği, ayarı \"Hata iletisi hizalaması\" özelliğinden uygular.",
    detailErrorLocation: "Ayrıntı bölümlerinde iç içe geçmiş sorular için hata mesajlarının konumunu ayarlar. \"Devral\" seçeneği, \"Hata mesajı hizalaması\" özelliğindeki ayarı uygular.",
    keyDuplicationError: "\"Yinelenen yanıtları engelle\" özelliği etkinleştirildiğinde, yinelenen bir girdi göndermeye çalışan yanıtlayan aşağıdaki hata iletisini alır.",
    totalExpression: "Bir ifadeye dayalı olarak toplam değerleri hesaplamanıza olanak tanır. İfade, temel hesaplamaları ('{q1_id} + {q2_id}'), Boole ifadelerini ('{age} > 60') ve işlevleri ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb.) içerebilir.",
    confirmDelete: "Satır silme işlemini onaylamanızı isteyen bir istemi tetikler.",
    keyName: "Belirtilen sütun aynı değerleri içeriyorsa, anket \"Benzersiz olmayan anahtar değeri\" hatasını atar.",
    description: "Bir altyazı yazın.",
    locale: "Anketinizi oluşturmaya başlamak için bir dil seçin. Çeviri eklemek için yeni bir dile geçin ve orijinal metni buradan veya Çeviriler sekmesinden çevirin.",
    detailPanelMode: "Ayrıntılar bölümünün bir satıra göre konumunu ayarlar. Şunlar arasından seçim yapın: \"Yok\" - genişletme eklenmez; \"Satırın altında\" - matrisin her satırının altına bir satır genişletmesi yerleştirilir; \"Satırın altında, yalnızca bir satır genişletmesi görüntüle\" - yalnızca tek bir satırın altında bir genişletme görüntülenir, kalan satır genişletmeleri daraltılır.",
    imageFit: "Şunlar arasından seçim yapın: \"Yok\" - görüntü orijinal boyutunu korur; \"İçer\" - görüntü, en boy oranı korunurken sığacak şekilde yeniden boyutlandırılır; \"Kapak\" - görüntü, en boy oranını korurken tüm kutuyu doldurur; \"Doldur\" - görüntü, en boy oranını korumadan kutuyu dolduracak şekilde uzatılır.",
    autoGrow: "Veriler girilirken giriş alanının yüksekliğini kademeli olarak artırır. \"Giriş alanı yüksekliği (satırlarda)\" ayarını geçersiz kılar.",
    allowResize: "Yeniden boyutlandırma tutamacı (veya tutamak) köşede görünür ve giriş alanının boyutunu değiştirmek için sürüklenebilir.",
    timeLimit: "Anketin otomatik olarak Teşekkür Ederiz sayfasına ilerlediği saniye cinsinden bir zaman aralığı.",
    timeLimitPerPage: "Anketin otomatik olarak bir sonraki sayfaya ilerlediği saniye cinsinden bir zaman aralığı.",
    validateVisitedEmptyFields: "Bir kullanıcı boş bir giriş alanına odaklandığında ve ardından herhangi bir değişiklik yapmadan bu alandan ayrıldığında doğrulamayı tetiklemek için bu seçeneği etkinleştirin.",
    page: {
      name: "Yanıtlayanlar tarafından görülemeyen bir sayfa kimliği.",
      description: "Bir sayfa alt başlığı yazın.",
      navigationTitle: "İlerleme çubuğundaki veya içindekiler tablosundaki (TOC) bir gezinti düğmesinde görüntülenen resim yazısı. Bu alanı boş bırakırsanız, gezinme düğmesi sayfa başlığını veya sayfa adını kullanır. İlerleme çubuğunu veya İçindekiler'i etkinleştirmek için \"Anket\" → \"Gezinme\"ye gidin.",
      timeLimit: "Anketin otomatik olarak bir sonraki sayfaya ilerlediği saniye cinsinden bir zaman aralığı.",
      visibleIf: "Sayfa görünürlüğünü belirleyen koşullu bir kural belirlemek için sihirli değnek simgesini kullanın.",
      enableIf: "Sayfanın salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      requiredIf: "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
      questionTitleLocation: "Bu sayfadaki tüm sorular için geçerlidir. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular veya paneller için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Üst\").",
      questionTitleWidth: "Soru kutularının soluna hizalandıklarında soru başlıkları için tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
      questionErrorLocation: "Geçersiz girişi olan soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Üst\").",
      questionOrder: "Soruların orijinal sırasını korur veya rastgele hale getirir. \"Devral\" seçeneği, anket düzeyindeki ayarı (varsayılan olarak \"Orijinal\") uygular. Bu ayarın etkisi yalnızca Önizleme sekmesinde görünür.",
      showNavigationButtons: "Sayfadaki gezinme düğmelerinin görünürlüğünü ayarlar. \"Devral\" seçeneği, varsayılan olarak \"Görünür\" olan anket düzeyi ayarını uygular.",
      gridLayoutColumns: "Bu tablo, sayfadaki her bir ızgara sütununu yapılandırmanıza olanak tanır. Bir satırdaki maksimum öğe sayısına bağlı olarak her sütun için genişlik yüzdesini otomatik olarak ayarlar. Tablo düzenini özelleştirmek için bu değerleri manuel olarak ayarlayın ve her sütundaki tüm sorular için başlık genişliğini tanımlayın."
    },
    timerLocation: "Sayfadaki bir zamanlayıcının konumunu ayarlar.",
    panelsState: "Şunlar arasından seçim yapın: \"Kilitli\" - kullanıcılar panelleri genişletemez veya daraltamaz; \"Tümünü daralt\" - tüm paneller daraltılmış durumda başlar; \"Tümünü genişlet\" - tüm paneller genişletilmiş bir durumda başlar; \"İlk genişletildi\" - başlangıçta yalnızca ilk panel genişletilir.",
    imageLinkName: "Seçim listesinde görüntülemek istediğiniz görüntü veya video dosyası URL'lerini içeren nesne dizisi içinde paylaşılan bir özellik adı girin.",
    choices: "Soldaki değer, koşullu kurallarda kullanılan bir öğe kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir.",
    title: "Görüntülemek için kullanıcı dostu bir başlık yazın.",
    waitForUpload: "Dosyalar yüklenene kadar kullanıcıların anketi tamamlamamasını sağlar.",
    minWidth: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    maxWidth: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    width: "CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    valueName: "Bu özelliği ayarlamazsanız, yanıt Name özelliği tarafından belirtilen bir alanda depolanır.",
    defaultDisplayValue: "HTML sorularında ve anket öğelerinin dinamik başlıklarında ve açıklamalarında, soru değeri boş olduğunda görüntülenen bir değer.",
    useDisplayValuesInDynamicTexts: "Tekli ve çoktan seçimli soru tiplerinde, her seçim seçeneğinin bir kimliği ve görünen değeri vardır. Seçildiğinde, bu ayar HTML sorularında ve anket öğelerinin dinamik başlıklarında ve açıklamalarında kimlik değeri yerine bir görünen değer gösterir.",
    clearIfInvisible: "Koşullu mantık tarafından gizlenen soru değerlerinin temizlenip temizlenmeyeceğini ve ne zaman yapılacağını seçin. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Anket tamamlandıktan sonra\").",
    choicesFromQuestionMode: "Şunlar arasından seçim yapın: \"Tümü\" - seçilen sorudaki tüm seçim seçeneklerini kopyalar; \"Seçili\" - yalnızca seçilen seçim seçeneklerini dinamik olarak kopyalar; \"Seçilmemiş\" - yalnızca seçilmemiş seçim seçeneklerini dinamik olarak kopyalar. \"Yok\" ve \"Diğer\" seçenekleri, kaynak soruda etkinleştirilmişse varsayılan olarak kopyalanır.",
    choiceValuesFromQuestion: "Tekli ve çok seçimli soru tiplerinde, her seçim seçeneğinin bir kimliği ve görünen değeri vardır. Bu ayar, kimlikleri hangi matris, sütun veya panel sorusunun sağlaması gerektiğini belirtir.",
    choiceTextsFromQuestion: "Tekli ve çok seçimli soru tiplerinde, her seçim seçeneğinin bir kimliği ve görünen değeri vardır. Bu ayar, hangi matris sütun veya panel sorusunun görüntü metinlerini sağlaması gerektiğini belirtir.",
    allowCustomChoices: "İstenen seçenek açılır menüde mevcut değilse, yanıtlayanların kendi seçimlerini eklemesine izin vermek için bunu seçin. Özel seçimler yalnızca geçerli tarayıcı oturumu süresince geçici olarak saklanacaktır.",
    showOtherItem: "Seçildiğinde, kullanıcılar ayrı bir yorum kutusuna ek girdi ekleyebilir.",
    separateSpecialChoices: "Her özel seçim seçeneğini (\"Yok\", \"Diğer\", \"Tümünü Seç\") çok sütunlu bir düzen kullanırken bile yeni bir satırda görüntüler.",
    path: "Hizmet veri kümesinde, hedef nesne dizisinin bulunduğu konumu belirtin. URL zaten diziye işaret ediyorsa boş bırakın.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Seçim listesinde görüntülemek istediğiniz değerleri içeren nesneler dizisi içinde tekdüzen bir özellik adı girin.",
    allowEmptyResponse: "Hizmetin boş bir yanıt veya dizi döndürmesine izin vermek için seçin.",
    choicesVisibleIf: "Tüm seçim seçeneklerinin görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın.",
    rateValues: "Soldaki değer, koşullu kurallarda kullanılan bir öğe kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir.",
    rating: {
      displayMode: "\"Otomatik\", mevcut genişliğe göre \"Düğmeler\" ve \"Açılır Menü\" modları arasında seçim yapar. Genişlik düğmeleri görüntülemek için yetersiz olduğunda, soru bir açılır menü görüntüler."
    },
    valuePropertyName: "Farklı formatlarda sonuç üreten soruları bağlamanıza olanak tanır. Bu tür sorular bir birleştirme tanımlayıcısı kullanılarak birbirine bağlandığında, bu paylaşılan özellik seçilen soru değerlerini depolar.",
    searchEnabled: "Açılır menü içeriğini, kullanıcının giriş alanına yazdığı arama sorgusuyla eşleşecek şekilde güncelleştirmek istiyorsanız seçin.",
    valueTrue: "Yanıtlayanlar olumlu yanıt verdiğinde anket sonuçlarına kaydedilecek bir değer.",
    valueFalse: "Yanıtlayanlar olumsuz yanıt verdiğinde anket sonuçlarına kaydedilecek bir değer.",
    showPreview: "Önizleme görüntüsünü geçersiz kıldığından ve kullanıcının dosyaların yüklenip yüklenmediğini anlamasını zorlaştırdığından bu seçeneğin devre dışı bırakılması önerilmez.",
    needConfirmRemoveFile: "Dosya silme işlemini onaylamanızı isteyen bir istemi tetikler.",
    selectToRankEnabled: "Yalnızca seçilen seçenekleri sıralamak için etkinleştirin. Kullanıcılar, sıralama alanı içinde sıralamak için seçim listesinden seçilen öğeleri sürükleyecektir.",
    dataList: "Giriş sırasında yanıtlayana önerilecek seçeneklerin bir listesini girin.",
    inputSize: "Bu ayar yalnızca giriş alanlarını yeniden boyutlandırır ve soru kutusunun genişliğini etkilemez.",
    itemTitleWidth: "Tüm öğe etiketleri için tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder.",
    inputTextAlignment: "Alan içinde giriş değerinin nasıl hizalanacağını seçin. Varsayılan ayar olan \"Otomatik\", para birimi veya sayısal maskeleme uygulanmışsa giriş değerini sağa, uygulanmıyorsa sola hizalar.",
    altText: "Görüntü, kullanıcının cihazında görüntülenemediğinde ve erişilebilirlik amacıyla yedek olarak görev yapar.",
    rateColorMode: "Derecelendirme simgesi türü \"Suratlar\" olarak ayarlandığında seçilen emojinin rengini tanımlar. Şunlar arasından seçim yapın: \"Varsayılan\" - seçilen emoji varsayılan anket renginde görünür; \"Ölçek\" - seçilen emoji, derecelendirme ölçeğinden rengi devralır.",
    expression: {
      name: "Yanıtlayanlar tarafından görülemeyen bir ifade kimliği.",
      description: "Bir ifade alt başlığı yazın.",
      expression: "Bir ifade, temel hesaplamaları ('{q1_id} + {q2_id}'), koşulları ('{age} > 60') ve işlevleri ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb.) içerebilir."
    },
    storeOthersAsComment: "\"Diğer\" seçenek değerini anket sonuçlarında ayrı bir özellik olarak saklamak için seçin.",
    format: "{0} gerçek değer için yer tutucu olarak kullanın.",
    acceptedTypes: "Daha fazla bilgi için [accept](https://www.w3schools.com/tags/att_input_accept.asp) özelliğinin açıklamasına bakın.",
    columnColCount: "Yalnızca Radiogroup ve Checkbox hücre tipleri için geçerlidir.",
    autocomplete: "Daha fazla bilgi için [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) özellik açıklamasına bakın.",
    filePlaceholder: "\"Kaynak türü\" \"Yerel dosyalar\" olduğunda veya fotoğraf makinesi kullanılamadığında geçerlidir",
    photoPlaceholder: "\"Kaynak türü\" \"Kamera\" olduğunda geçerlidir.",
    fileOrPhotoPlaceholder: "\"Kaynak türü\" \"Yerel dosyalar veya kamera\" olduğunda geçerlidir.",
    colCount: "Seçim seçeneklerini çok sütunlu bir düzende düzenler. 0 olarak ayarlandığında, seçenekler tek bir satırda görüntülenir.",
    masksettings: {
      saveMaskedValue: "Soru değerini, anket sonuçlarında uygulanan bir maske ile saklamak istiyorsanız seçin."
    },
    patternmask: {
      pattern: "Desen, dize değişmez değerlerini ve aşağıdaki yer tutucuları içerebilir: '9' - bir rakam için; 'a' - büyük veya küçük harf için; '#' - bir rakam veya büyük veya küçük harf için. Bir karakterden kaçmak için ters eğik çizgi '\\' kullanın."
    },
    datetimemask: {
      pattern: "Desen, ayırıcı karakterler ve aşağıdaki yer tutucuları içerebilir:<br>'m' - Ay numarası.<br>'mm' - Tek basamaklı değerler için başında sıfır olan ay numarası. <br>'d' - Ayın günü. <br>'dd' - Tek basamaklı değerler için başında sıfır olan ayın günü. <br>'yy' - Yılın son iki basamağı. <br>'yyyy' - Dört basamaklı yıl. <br>'H' - 24 saat biçimindeki saatler. <br>'SS' - 24 saat biçiminde, tek basamaklı değerler için başında sıfır olan saatler. <br>'h' - 12 saat biçimindeki saatler. <br>'ss' - 12 saat biçiminde, tek basamaklı değerler için başında sıfır olan saatler. <br>'MM' - Dakika. <br>'ss' - Saniye. <br>'TT' - büyük harfle 12 saatlik zaman dilimi (/PM). <br>'tt' - küçük harfle 12 saatlik zaman dilimi (/pm)."
    },
    numericmask: {
      decimalSeparator: "Görüntülenen bir sayının kesirli kısmını tamsayı kısmından ayırmak için kullanılan bir sembol.",
      thousandsSeparator: "Büyük bir sayının rakamlarını üçlü gruplara ayırmak için kullanılan bir sembol.",
      precision: "Görüntülenen bir sayı için ondalık virgülden sonra kaç basamak tutulacağını sınırlar."
    },
    currencymask: {
      prefix: "Değerden önce görüntülenecek bir veya birkaç sembol.",
      suffix: "Değerden sonra görüntülenecek bir veya birkaç sembol."
    },
    theme: {
      isPanelless: "Bu ayar yalnızca panelin dışındaki sorular için geçerlidir.",
      primaryColor: "Önemli anket öğelerini vurgulayan ek bir renk ayarlar.",
      panelBackgroundTransparency: "Anketlerin ve soru kutularının saydamlığını anket arka planına göre ayarlar.",
      questionBackgroundTransparency: "Giriş öğelerinin saydamlığını anket arka planına göre ayarlar.",
      cornerRadius: "Tüm dikdörtgen elemanlar için köşe yarıçapını ayarlar. Giriş öğeleri veya paneller ve soru kutuları için ayrı köşe yarıçapı değerleri ayarlamak istiyorsanız Gelişmiş Modu etkinleştirin.",
      "--sjs-general-backcolor-dim": "Anketin ana arka plan rengini ayarlar."
    },
    header: {
      inheritWidthFrom: "\"Kapsayıcı ile aynı\" seçeneği, başlık içerik alanı genişliğini anketin yerleştirildiği HTML öğesine sığacak şekilde otomatik olarak ayarlar.",
      textAreaWidth: "Anket başlığını ve açıklamasını içeren üstbilgi alanının piksel cinsinden genişliği.",
      overlapEnabled: "Etkinleştirildiğinde, anketin üst kısmı başlığın alt kısmıyla kaplanır.",
      mobileHeight: "0 olarak ayarlandığında, üstbilginin içeriğine uyum sağlamak için yükseklik otomatik olarak hesaplanır."
    },
    progressBarInheritWidthFrom: "\"Kapsayıcı ile aynı\" seçeneği, ilerleme çubuğu alan genişliğini anketin yerleştirildiği HTML öğesine sığacak şekilde otomatik olarak ayarlar."
  },
  // Properties
  p: {
    title: {
      name: "başlık",
      title: "'Ad' ile aynıysa boş bırakın"
    },
    multiSelect: "Çoklu Seçim",
    showLabel: "Başlığı göster",
    swapOrder: "Evet ve Hayır sırasını değiştirin",
    value: "Değer",
    tabAlign: "Sekme hizalaması",
    sourceType: "Kaynak türü",
    fitToContainer: "Konteynere sığdır",
    setValueExpression: "Değer ifadesini ayarla",
    description: "Açıklama",
    logoFit: "Logo uyumu",
    pages: "Sayfa",
    questions: "Soru",
    triggers: "tetikleyiciler",
    calculatedValues: "Hesaplanan değerler",
    surveyId: "Anket kimliği",
    surveyPostId: "Anket gönderisi kimliği",
    surveyShowDataSaving: "Anket gösterisi veri tasarrufu",
    questionDescriptionLocation: "Soru açıklaması konumu",
    progressBarType: "İlerleme çubuğu türü",
    showTOC: "İçindekiler'i göster",
    tocLocation: "İçindekiler konumu",
    questionTitlePattern: "Soru başlığı kalıbı",
    widthMode: "Genişlik modu",
    showBrandInfo: "Marka bilgilerini göster",
    useDisplayValuesInDynamicTexts: "Başlıkta görünen değeri kullan",
    visibleIf: "Görünür eğer",
    defaultValueExpression: "Varsayılan değer ifadesi",
    requiredIf: "Eğer gerekli mi?",
    resetValueIf: "Sıfırlama değeri",
    setValueIf: "Değeri ayarla",
    validators: "Doğrulayıcılar",
    bindings: "Bağlama",
    renderAs: "Farklı işle",
    attachOriginalItems: "Orijinal öğeleri ekleme",
    choices: "Seçenekler",
    choicesByUrl: "URL'e göre seçimler",
    currency: "Para birimi",
    cellHint: "Hücre ipucu",
    totalMaximumFractionDigits: "Toplam maksimum kesir basamakları",
    totalMinimumFractionDigits: "Toplam minimum kesir basamakları",
    columns: "Sütunlar",
    detailElements: "Ayrıntı öğeleri",
    allowAdaptiveActions: "Uyarlamalı eylemlere izin ver",
    defaultRowValue: "Varsayılan satır değeri",
    detailPanelShowOnAdding: "Ekleme sırasında ayrıntı paneli gösterisi",
    choicesLazyLoadEnabled: "Tembel yükün etkin olduğu seçenekler",
    choicesLazyLoadPageSize: "Seçenekler tembel yükleme sayfası boyutu",
    inputFieldComponent: "Giriş alanı bileşeni",
    itemComponent: "Öğe bileşeni",
    min: "Min",
    max: "Max",
    minValueExpression: "Minimum değer ifadesi",
    maxValueExpression: "Maksimum değer ifadesi",
    step: "Adım",
    dataList: "Veri listesi",
    inputSize: "Öğe boyutu",
    itemTitleWidth: "Öğe etiketi genişliği (piksel cinsinden)",
    inputTextAlignment: "Giriş değeri hizalaması",
    elements: "Öğe",
    content: "İçerik",
    navigationTitle: "Gezinme başlığı",
    navigationDescription: "Navigasyon açıklaması",
    longTap: "Uzun musluk",
    autoGrow: "Otomatik büyüme",
    allowResize: "Yeniden boyutlandırmaya izin ver",
    acceptCarriageReturn: "Satır başı iadesini kabul et",
    displayMode: "Ekran modu",
    rateType: "Fiyat türü",
    label: "Başlık",
    contentMode: "İçerik modu",
    imageFit: "Görsel'u uyumlandır",
    altText: "Alternatif metin",
    height: "Yükseklik",
    mobileHeight: "Akıllı telefonlarda yükseklik",
    penColor: "Kalem rengi",
    backgroundColor: "Arka plan rengi",
    templateElements: "Şablon öğeleri",
    operator: "Operatör",
    isVariable: "Değişkendir",
    runExpression: "İfadeyi çalıştır",
    showCaption: "Altyazıyı göster",
    iconName: "Simge adı",
    iconSize: "Simge boyutu",
    precision: "Kesinlik",
    matrixDragHandleArea: "Matris sürükleme kolu alanı",
    backgroundImage: "Arka plan resmi",
    backgroundImageFit: "Arka plan resmi sığdırma",
    backgroundImageAttachment: "Arka plan resmi eki",
    backgroundOpacity: "Arka plan opaklığı",
    selectToRankEnabled: "Etkin sıralamak için seç",
    selectToRankAreasLayout: "Sıralamak için alan düzenini seçin",
    selectToRankEmptyRankedAreaText: "Tüm seçeneklerin seçili olup olmadığını gösteren metin",
    selectToRankEmptyUnrankedAreaText: "Derecelendirme alanı için yer tutucu metin",
    allowCameraAccess: "Kamera erişimine izin ver",
    scaleColorMode: "Renk modunu ölçekle",
    rateColorMode: "Renk modunu ayarla",
    copyDisplayValue: "Görüntüleme değerini kopyala",
    effectiveColSpan: "Sütun aralığı",
    progressBarInheritWidthFrom: "İlerleme çubuğu alanı genişliği"
  },
  theme: {
    advancedMode: "Gelişmiş mod",
    pageTitle: "Sayfa başlığı yazı tipi",
    questionTitle: "Soru başlığı yazı tipi",
    editorPanel: "Giriş öğesi",
    lines: "Satır",
    primaryDefaultColor: "Temerrüt",
    primaryDarkColor: "Hover",
    primaryLightColor: "Seçilmiş",
    backgroundDimColor: "Arka plan rengi",
    cornerRadius: "Köşe yarıçapı",
    backcolor: "Varsayılan arka plan",
    hovercolor: "Arka planın üzerine gelin",
    borderDecoration: "Bordür dekorasyonu",
    fontColor: "Yazı tipi rengi",
    backgroundColor: "Arka plan rengi",
    primaryForecolor: "Varsayılan renk",
    primaryForecolorLight: "Devre dışı bırakılmış renk",
    font: "Yazı tipi",
    borderDefault: "Koyu",
    borderLight: "Çakmak",
    fontFamily: "Yazı tipi ailesi",
    fontWeightRegular: "Düzenli",
    fontWeightHeavy: "Ağır",
    fontWeightSemiBold: "Yarı kalın",
    fontWeightBold: "Kalın",
    color: "Renk",
    placeholderColor: "Yer tutucu rengi",
    size: "Boyut",
    opacity: "Opak -lık",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Gölge Efekti Ekle",
    boxShadowBlur: "Bulanıklaştır",
    boxShadowSpread: "Yaymak",
    boxShadowDrop: "Damla",
    boxShadowInner: "İç",
    names: {
      default: "Temerrüt",
      sharp: "Keskin",
      borderless: "Kenarlıksız",
      flat: "Düz",
      plain: "Düz",
      doubleborder: "Çift Kenarlık",
      layered: "Katmanlı",
      solid: "Katı",
      threedimensional: ".3D",
      contrast: "Karşıtlık"
    },
    colors: {
      teal: "Çamurcun",
      blue: "Mavi",
      purple: "Mor",
      orchid: "Orkide",
      tulip: "Lale",
      brown: "Kahverengi",
      green: "Yeşil",
      gray: "Gri"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Yüzey arka planı",
    "--sjs-primary-background-500": "Birincil",
    "--sjs-secondary-background-500": "İkincil",
    surfaceScale: "Yüzey",
    userInterfaceBaseUnit: "Kullanıcı arayüzü",
    fontScale: "Yazı tipi",
    names: {
      sc2020: "Anket Oluşturucu 2020",
      "default-light": "Işık",
      "default-dark": "Koyu",
      "default-contrast": "Karşıtlık"
    }
  }
};

setupLocale({ localeCode: "tr", strings: turkishStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.duplicate: "Duplicate" => "Yinelenen"
// qt.ranking: "Ranking" => "Sıralama"
// qt.tagbox: "Multi-Select Dropdown" => "Çoklu Seçim Açılır Menüsü"
// qt.buttongroup: "Button Group" => "Düğme Grubu"
// ed.surveySettings: "Survey Settings" => "Anket Ayarları"
// ed.surveySettingsTooltip: "Open survey settings" => "Anket ayarlarını açma"
// ed.prevSelected: "Select previous" => "Öncekini seç"
// ed.nextSelected: "Select next" => "İleri'yi seçin"
// ed.surveyTypeName: "Survey" => "Anket"
// ed.pageTypeName: "Page" => "Sayfa"
// ed.panelTypeName: "Panel" => "Panel"
// ed.questionTypeName: "Question" => "Soru"
// ed.columnTypeName: "Column" => "Sütun"
// ed.themeSurvey: "Themes" => "Temalar"
// ed.defaultV2Theme: "Default" => "Temerrüt"
// ed.modernTheme: "Modern" => "Modern"
// ed.defaultTheme: "Default (legacy)" => "Varsayılan (eski)"
// ed.jsonHideErrors: "Hide errors" => "Hataları gizleme"
// ed.jsonShowErrors: "Show errors" => "Hataları göster"
// ed.showMoreChoices: "Show more" => "Daha fazlasını göster"
// ed.showLessChoices: "Show less" => "Daha az göster"
// ed.copy: "Copy" => "Kopya etmek"
// ed.cut: "Cut" => "Kesmek"
// ed.paste: "Paste" => "Yapıştırmak"
// ed.copyTooltip: "Copy selection to clipboard" => "Seçimi panoya kopyala"
// ed.cutTooltip: "Cut selection to clipboard" => "Seçimi panoya kes"
// ed.pasteTooltip: "Paste from clipboard" => "Panodan yapıştır"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Aramak için yazın..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Seçim Soruları"
// ed.toolboxTextCategory: "Text Input Questions" => "Metin Girişi Soruları"
// ed.toolboxContainersCategory: "Containers" => "Konteyner"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Matris Soruları"
// ed.toolboxMiscCategory: "Misc" => "Misc"
// ed.propertyEditorError: "Error" => "Hata"
// ed.translationPropertyGridTitle: "Language Settings" => "Dil Ayarları"
// ed.themePropertyGridTitle: "Theme Settings" => "Tema Ayarları"
// ed.translationLanguages: "Languages" => "Diller"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Yalnızca Kullanılan Dizeler"
// ed.translationPlaceHolder: "Translation..." => "Çeviri..."
// ed.themeExportButton: "Export" => "Ihracat"
// ed.themeImportButton: "Import" => "Ithalat"
// ed.selectPage: "Select page..." => "Sayfa seç..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Seçenekler şuradan kopyalanır:"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML içeriği burada olacak."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Araç kutusundan buraya bir soru bırakın."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Anket boş. Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklatın."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Bir resmi buraya sürükleyip bırakın veya aşağıdaki düğmeyi tıklayın ve yüklemek için bir resim seçin"
// ed.imageChooseImage: "Choose Image" => "Resim Seç"
// ed.addNewTypeQuestion: "Add {0}" => "{0} ekle"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "Otomatik"
// ed.choices_Item: "Item " => "Madde "
// lg.addNewItem: "Add New Rule" => "Yeni Kural Ekle"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Anketin akışını özelleştirmek için bir kural oluşturun."
// lg.page_enableName: "Enable (disable) page" => "Sayfayı etkinleştir (devre dışı bırak)"
// lg.column_visibilityName: "Show (hide) column" => "Göster (gizle) sütunu"
// lg.column_enableName: "Enable (disable) column" => "Etkinleştir (devre dışı bırak) sütunu"
// lg.column_requireName: "Make column required" => "Sütunu gerekli kıl"
// lg.itemEmptyExpressionText: "New rule" => "Yeni kural"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Soru {1} sütununu {0} görünür hale getirme"
// lg.column_enableText: "make column {0} of question {1} enable" => "Sütunun {0} soru {1} etkinleştirin"
// lg.column_requireText: "make column {0} of question {1} required" => "Sütun {0} soru {1} gerekli hale getirmek"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "net soru değeri: {0}"
// lg.showAllQuestions: "All Questions" => "Tüm Sorular"
// lg.showAllActionTypes: "All Action Types" => "Tüm Eylem Türleri"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Mantıksal kurallar eksik"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Bazı mantıksal kuralları tamamlamadınız. Sekmeyi şimdi bırakırsanız, değişiklikler kaybolur. Yine de değişiklikleri tamamlamadan sekmeden çıkmak istiyor musunuz?"
// lg.uncompletedRule_apply: "Yes" => "Evet"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Hayır, kuralları tamamlamak istiyorum"
// pe.clear: "Clear" => "Berrak"
// pe.saveTooltip: "Save" => "Kurtarmak"
// pe.set: "Set" => "Ayarlamak"
// pe.change: "Change" => "Değiştirmek"
// pe.close: "Close" => "Kapatmak"
// pe.removeItem: "Click to remove the item..." => "Öğeyi kaldırmak için tıklayın..."
// pe.dragItem: "Drag the item" => "Öğeyi sürükleyin"
// pe.backTooltip: "Return without saving" => "Kaydetmeden geri dönün"
// pe.saveAndBackTooltip: "Save and return" => "Kaydet ve geri dön"
// pe.doneEditing: "Done" => "Yapılmış"
// pe.emptyValue: "Value is empty" => "Değer boş"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "'{0}' değeri benzersiz değil"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Lütfen öğe sayısını {0}'den {1}'ye sınırlayın"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Verileri aşağıdaki biçimde ayarlayabilirsiniz:\ndeğer1|metin\ndeğer2"
// pe.overridingPropertyPrefix: "Set by " => "Ayarlayan "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Lütfen benzersiz bir değer girin"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Ayrılmış kelimeler kullanmayın: \"öğe\", \"seçim\", \"panel\", \"satır\"."
// pe.listIsEmpty@choices: "No choices have been added yet" => "Henüz seçenek eklenmedi"
// pe.addNew@choices: "Add a choice" => "Bir seçenek ekleyin"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Aşağıdaki JSON alanından değerler alın"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Aşağıdaki JSON alanından resim URL'leri alın"
// pe.and: "and" => "ve"
// pe.or: "or" => "veya"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Koşulları yapılandırmaya başlamak için bir soru seçin."
// pe.if: "If" => "Eğer"
// pe.then: "then" => "sonra"
// pe.setToName: "Target question" => "Hedef soru"
// pe.fromName: "Question to copy answer from" => "Cevabın kopyalanacağı soru"
// pe.gotoName: "Question to skip to" => "Atlanacak soru"
// pe.ruleIsNotSet: "Rule is incorrect" => "Kural yanlış"
// pe.includeIntoResult: "Include into survey results" => "Anket sonuçlarına dahil etme"
// pe.expandCollapseTitle: "Expand/collapse title" => "Başlığı genişletme/daraltma"
// pe.portraitOrientation: "Switch to portrait orientation" => "Dikey yöne geçme"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Görüntü yüksekliği (CSS tarafından kabul edilen değerlerde)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Resim genişliği (CSS tarafından kabul edilen değerlerde)"
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Sayfayı bitirmek için zaman sınırı (saniye cinsinden)"
// question.page: "Parent page" => "Ana sayfa"
// pe.noEntriesText: "Empty entries text" => "Boş giriş metni"
// pe.setValue: "Answer" => "Cevap"
// pe.dataFormat: "Image format" => "Görüntü formatı"
// pe.allowAddRows: "Allow adding rows" => "Satır eklemeye izin ver"
// pe.allowRemoveRows: "Allow removing rows" => "Satırların kaldırılmasına izin ver"
// pe.allowRowReorder: "Allow row drag and drop" => "Satır sürükleyip bırakmaya izin ver"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Tam görüntü genişliğini veya yüksekliğini belirtirseniz uygulanmaz."
// pe.minImageWidth: "Minimum image width" => "Minimum görüntü genişliği"
// pe.maxImageWidth: "Maximum image width" => "Maksimum görüntü genişliği"
// pe.minImageHeight: "Minimum image height" => "Minimum görüntü yüksekliği"
// pe.maxImageHeight: "Maximum image height" => "Maksimum görüntü yüksekliği"
// surveyvalidator.text: "Error message" => "Hata mesajı"
// surveyvalidator.expression: "Validation expression" => "Doğrulama ifadesi"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (URL veya base64 kodlu dize)"
// pe.questionsOnPageMode: "Survey structure" => "Anket yapısı"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Gerekirse yorum alanını otomatik olarak genişletin"
// pe.allowResizeComment: "Allow users to resize text areas" => "Kullanıcıların metin alanlarını yeniden boyutlandırmasına izin verme"
// pe.textUpdateMode: "Update text question value" => "Metin sorusu değerini güncelleme"
// pe.checkErrorsMode: "Run validation" => "Çalıştırma doğrulaması"
// pe.navigateToUrl: "Navigate to URL" => "URL'ye gidin"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dinamik URL"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Kullanıcının bu anketi zaten doldurup doldurmadığını göstermek için işaretleme"
// pe.completedHtml: "Survey Complete page markup" => "Anket Sayfa işaretlemesini tamamla"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Dinamik Anket Sayfa işaretlemesini tamamla"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Anket modeli yüklenirken gösterilecek işaretleme"
// pe.commentText: "Comment area text" => "Yorum alanı metni"
// pe.autocomplete: "Autocomplete type" => "Otomatik tamamlama türü"
// pe.labelTrue: "\"True\" label" => "\"Doğru\" etiketi"
// pe.labelFalse: "\"False\" label" => "\"Yanlış\" etiketi"
// pe.displayStyle: "Value display style" => "Değer görüntüleme stili"
// pe.format: "Formatted string" => "Biçimlendirilmiş dize"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Maksimum kesirli basamaklar"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Minimum kesirli basamaklar"
// pe.useGrouping: "Display grouping separators" => "Ekran gruplandırma ayırıcıları"
// pe.allowMultiple: "Allow multiple files" => "Birden çok dosyaya izin ver"
// pe.allowImagesPreview: "Preview images" => "Önizleme görüntüleri"
// pe.acceptedTypes: "Accepted file types" => "Kabul edilen dosya türleri"
// pe.waitForUpload: "Wait for the upload to complete" => "Yüklemenin tamamlanmasını bekleyin"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Dosya silme işlemini onaylama"
// pe.detailPanelMode: "Detail panel location" => "Ayrıntı paneli konumu"
// pe.minRowCount: "Minimum row count" => "Minimum satır sayısı"
// pe.maxRowCount: "Maximum row count" => "Maksimum satır sayısı"
// pe.confirmDelete: "Confirm row deletion" => "Satır silme işlemini onaylama"
// pe.confirmDeleteText: "Confirmation message" => "Onay mesajı"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Panel silme işlemini onaylama"
// pe.panelCount: "Initial panel count" => "İlk panel sayısı"
// pe.minPanelCount: "Minimum panel count" => "Minimum panel sayısı"
// pe.maxPanelCount: "Maximum panel count" => "Maksimum panel sayısı"
// pe.panelsState: "Inner panel expand state" => "İç panel genişletme durumu"
// pe.templateDescription: "Description template" => "Açıklama şablonu"
// pe.templateTitle: "Title template" => "Başlık şablonu"
// pe.prevPanelText: "Previous Panel button tooltip" => "Önceki Panel düğmesi araç ipucu"
// pe.nextPanelText: "Next Panel button tooltip" => "Sonraki Panel düğmesi araç ipucu"
// pe.showRangeInProgress: "Show progress bar" => "İlerleme çubuğunu göster"
// pe.templateQuestionTitleLocation: "Question title location" => "Soru başlığı konumu"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Panel düğmesinin konumunu kaldır"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Satır yoksa soruyu gizleme"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Satır yoksa sütunları gizleme"
// pe.rateValues: "Custom rate values" => "Özel fiyat değerleri"
// pe.rateCount: "Rate count" => "Oran sayısı"
// pe.autoGenerate: "How to specify rate values?" => "Fiyat değerleri nasıl belirlenir?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Seçenek içermiyorsa soruyu gizleme"
// pe.hideNumber: "Hide question number" => "Soru numarasını gizle"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minimum genişlik (CSS tarafından kabul edilen değerlerde)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maksimum genişlik (CSS tarafından kabul edilen değerlerde)"
// pe.width: "Width (in CSS-accepted values)" => "Genişlik (CSS tarafından kabul edilen değerlerde)"
// pe.showHeader: "Show column headers" => "Sütun başlıklarını göster"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Yatay kaydırma çubuğunu göster"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Minimum sütun genişliği (CSS tarafından kabul edilen değerlerde)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Satır başlığı genişliği (CSS tarafından kabul edilen değerlerde)"
// pe.valueTrue: "\"True\" value" => "\"Doğru\" değer"
// pe.valueFalse: "\"False\" value" => "\"False\" değeri"
// pe.minErrorText: "\"Value is below minimum\" error message" => "\"Değer minimumun altında\" hata iletisi"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "\"Değer maksimumu aşıyor\" hata iletisi"
// pe.otherErrorText: "\"Empty comment\" error message" => "\"Boş yorum\" hata iletisi"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "\"Benzersiz olmayan anahtar değeri\" hata iletisi"
// pe.minSelectedChoices: "Minimum selected choices" => "Seçilen minimum seçenekler"
// pe.maxSelectedChoices: "Maximum selected choices" => "Seçilen maksimum seçenek sayısı"
// pe.showNumber: "Show panel number" => "Panel numarasını göster"
// pe.readOnly: "Read-only" => "Salt okunur"
// pe.enableIf: "Editable if" => "Şu durumlarda düzenlenebilir"
// pe.noRowsText: "\"No rows\" message" => "\"Satır yok\" iletisi"
// pe.size: "Input field size (in characters)" => "Giriş alanı boyutu (karakter cinsinden)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Ayrı özel seçenekler (Yok, Diğer, Tümünü Seç)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Aşağıdaki sorudan seçenekleri kopyalama"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Hangi seçenekleri kopyalamalıyım?"
// pe.commentPlaceholder: "Comment area placeholder" => "Yorum alanı yer tutucusu"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Hız açıklamalarını aşırı değerler olarak görüntüleme"
// pe.rowOrder: "Row order" => "Satır sırası"
// pe.columnsLayout: "Column layout" => "Sütun düzeni"
// pe.columnColCount: "Nested column count" => "İç içe geçmiş sütun sayısı"
// pe.state: "Panel expand state" => "Panel genişletme durumu"
// pe.correctAnswer: "Correct Answer" => "Doğru Cevap"
// pe.defaultPanelValue: "Default Values" => "Varsayılan Değerler"
// pe.cells: "Cell Texts" => "Hücre Metinleri"
// pe.keyName: "Key column" => "Anahtar sütunu"
// itemvalue.text: "Alt text" => "Alternatif metin"
// tabs.slider: "Slider" => "Kaydırıcı"
// tabs.expression: "Expression" => "İfade"
// pe.choicesVisibleIf: "Choices are visible if" => "Seçenekler şu durumlarda görünür:"
// pe.choicesEnableIf: "Choices are selectable if" => "Seçenekler şu durumlarda seçilebilir:"
// pe.columnsEnableIf: "Columns are visible if" => "Sütunlar şu durumlarda görünür:"
// pe.rowsEnableIf: "Rows are visible if" => "Satırlar şu durumlarda görünür:"
// pe.indent: "Add indents" => "Girinti ekleme"
// panel.indent: "Add outer indents" => "Dış girintiler ekleme"
// pe.innerIndent: "Add inner indents" => "İç girintiler ekleme"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "Düzenlemek için enter düğmesine basın"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "İfadeyi buraya yazın..."
// pe.noFile: "No file choosen" => "Hiçbir dosya seçilmedi"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Soru gizlenirse değeri temizleyin"
// pe.valuePropertyName: "Value property name" => "Değer özelliği adı"
// pe.searchEnabled: "Enable search" => "Aramayı etkinleştir"
// pe.hideSelectedItems: "Hide selected items" => "Seçili öğeleri gizle"
// pe.closeOnSelect: "Close the dropdown after selection" => "Seçimden sonra açılır menüyü kapatın"
// pe.signatureWidth: "Signature width" => "İmza genişliği"
// pe.signatureHeight: "Signature height" => "İmza yüksekliği"
// pe.verticalAlign: "Vertical alignment" => "Dikey hizalama"
// pe.alternateRows: "Alternate rows" => "Alternatif satırlar"
// pe.columnsVisibleIf: "Columns are visible if" => "Sütunlar şu durumlarda görünür:"
// pe.rowsVisibleIf: "Rows are visible if" => "Satırlar şu durumlarda görünür:"
// pe.otherPlaceholder: "Comment area placeholder" => "Yorum alanı yer tutucusu"
// pe.rateType: "Rate type" => "Fiyat türü"
// pv.true: "true" => "doğru"
// pv.false: "false" => "yanlış"
// pv.decimal: "decimal" => "On -da -lık"
// pv.currency: "currency" => "para birimi"
// pv.percent: "percent" => "yüzde"
// pv.onpanel: "Start on each panel" => "Her panelde başlayın"
// pv.tab: "Tabs" => "Sekmeler"
// pv.right: "Right" => "Sağ"
// pv.color: "color" => "Renk"
// pv.date: "date" => "tarih"
// pv.datetime: "datetime" => "datetime"
// pv.datetime-local: "datetime-local" => "datetime-yerel"
// pv.email: "email" => "E-posta"
// pv.month: "month" => "ay"
// pv.number: "number" => "sayı"
// pv.password: "password" => "parola"
// pv.range: "range" => "aralık"
// pv.tel: "tel" => "telefon"
// pv.text: "text" => "Metin"
// pv.time: "time" => "Saat"
// pv.url: "url" => "URL"
// pv.week: "week" => "hafta"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Soru veya paneli/sayfası gizlendiğinde"
// clearInvisibleValues.none: "Never" => "Hiç"
// inputType.color: "Color" => "Renk"
// inputType.date: "Date" => "Tarih"
// inputType.datetime-local: "Date and Time" => "Tarih ve Saat"
// inputType.email: "Email" => "E-posta"
// inputType.month: "Month" => "Ay"
// inputType.number: "Number" => "Sayı"
// inputType.password: "Password" => "Parola"
// inputType.range: "Range" => "Aralık"
// inputType.tel: "Phone Number" => "Telefon numarası"
// inputType.text: "Text" => "Metin"
// inputType.time: "Time" => "Saat"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Hafta"
// pv.onValueChanging: "Before an answer is changed" => "Bir yanıt değiştirilmeden önce"
// pv.pages: "Completed pages" => "Tamamlanan sayfalar"
// pv.onBlur: "On blur" => "Bulanıklaştırmada"
// pv.onTyping: "While typing" => "Yazarken"
// pv.underRow: "Under the row" => "Satırın altında"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Satırın altında yalnızca bir panel görünür"
// showNavigationButtons.none: "Hidden" => "Gizli"
// showProgressBar.off: "Hidden" => "Gizli"
// showTimerPanel.none: "Hidden" => "Gizli"
// showTimerPanelMode.all: "Both" => "Her ikisi"
// detailPanelMode.none: "Hidden" => "Gizli"
// addRowButtonLocation.default: "Depends on matrix layout" => "Matris düzenine bağlıdır"
// panelsState.default: "Users cannot expand or collapse panels" => "Kullanıcılar panelleri genişletemez veya daraltamaz"
// panelsState.collapsed: "All panels are collapsed" => "Tüm paneller daraltıldı"
// panelsState.expanded: "All panels are expanded" => "Tüm paneller genişletildi"
// widthMode.auto: "Auto" => "Otomatik"
// widthMode.static: "Static" => "Duruk"
// widthMode.responsive: "Responsive" => "Duyarlı"
// imageFit.none: "None" => "Hiç kimse"
// imageFit.contain: "Contain" => "Kapsamak"
// imageFit.cover: "Cover" => "Örtmek"
// imageFit.fill: "Fill" => "Doldurmak"
// contentMode.auto: "Auto" => "Otomatik"
// contentMode.image: "Image" => "Resim"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "Videolar"
// displayMode.auto: "Auto" => "Otomatik"
// displayMode.buttons: "Buttons" => "Düğme"
// displayMode.dropdown: "Dropdown" => "Açılır menü"
// rateColorMode.default: "Default" => "Temerrüt"
// autoGenerate.true: "Generate" => "Oluşturmak"
// autoGenerate.false: "Enter manually" => "Manuel olarak girme"
// rateType.labels: "Labels" => "Etiket"
// rateType.stars: "Stars" => "Yıldız"
// rateType.smileys: "Smileys" => "Suratlar"
// op.and: "and" => "ve"
// op.or: "or" => "veya"
// ew.modern: "Modern theme" => "Modern tema"
// ew.default: "Default theme" => "Varsayılan tema"
// ew.orange: "Orange theme" => "Turuncu tema"
// ew.darkblue: "Darkblue theme" => "Lacivert tema"
// ew.darkrose: "Darkrose theme" => "Darkrose teması"
// ew.stone: "Stone theme" => "Taş teması"
// ew.winter: "Winter theme" => "Kış teması"
// ew.winterstone: "Winter-Stone theme" => "Kış-Taş teması"
// ts.hideInvisibleElements: "Hide invisible elements" => "Görünmez öğeleri gizleme"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Çerezler, kullanıcıların aynı anketi iki kez doldurmasını engeller."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Giriş alanının görünür alanını yeniden boyutlandırır. Giriş uzunluğunu sınırlamak için lütfen <b>Doğrulama → Maksimum uzunluk</b> ayarını kullanın."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "{0} gerçek değer için yer tutucu olarak kullanın."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Yalnızca en az bir sütunda Toplam türü veya Toplam ifadesi olduğunda görünür."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Daha fazla bilgi için [accept](https://www.w3schools.com/tags/att_input_accept.asp) özelliğinin açıklamasına bakın."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Yalnızca Radiogroup ve Checkbox hücre tipleri için geçerlidir."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Daha fazla bilgi için [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) özellik açıklamasına bakın."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Bu özelliği ayarlamazsanız, yanıt Name özelliği tarafından belirtilen bir alanda depolanır."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Belirtilen sütun aynı değerleri içeriyorsa, anket \"Benzersiz olmayan anahtar değeri\" hatasını atar."
// p.value: "Value" => "Değer"
// p.tabAlign: "Tab alignment" => "Sekme hizalaması"
// p.logoFit: "Logo fit" => "Logo uyumu"
// p.pages: "Pages" => "Sayfa"
// p.questions: "Questions" => "Soru"
// p.calculatedValues: "Calculated values" => "Hesaplanan değerler"
// p.surveyId: "Survey id" => "Anket kimliği"
// p.surveyPostId: "Survey post id" => "Anket gönderisi kimliği"
// p.surveyShowDataSaving: "Survey show data saving" => "Anket gösterisi veri tasarrufu"
// p.showTOC: "Show TOC" => "İçindekiler'i göster"
// p.tocLocation: "Toc location" => "İçindekiler konumu"
// p.questionTitlePattern: "Question title pattern" => "Soru başlığı kalıbı"
// p.widthMode: "Width mode" => "Genişlik modu"
// p.showBrandInfo: "Show brand info" => "Marka bilgilerini göster"
// p.defaultValueExpression: "Default value expression" => "Varsayılan değer ifadesi"
// p.bindings: "Bindings" => "Bağlama"
// p.renderAs: "Render as" => "Farklı işle"
// p.attachOriginalItems: "Attach original items" => "Orijinal öğeleri ekleme"
// p.cellHint: "Cell hint" => "Hücre ipucu"
// p.isUnique: "Is unique" => "Benzersizdir"
// p.showInMultipleColumns: "Show in multiple columns" => "Birden çok sütunda göster"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Toplam maksimum kesir basamakları"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Toplam minimum kesir basamakları"
// p.detailElements: "Detail elements" => "Ayrıntı öğeleri"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Uyarlamalı eylemlere izin ver"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Ekleme sırasında ayrıntı paneli gösterisi"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Tembel yükün etkin olduğu seçenekler"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Seçenekler tembel yükleme sayfası boyutu"
// p.inputFieldComponent: "Input field component" => "Giriş alanı bileşeni"
// p.itemComponent: "Item component" => "Öğe bileşeni"
// p.min: "Min" => "Min"
// p.max: "Max" => "Max"
// p.minValueExpression: "Min value expression" => "Minimum değer ifadesi"
// p.maxValueExpression: "Max value expression" => "Maksimum değer ifadesi"
// p.step: "Step" => "Adım"
// p.dataList: "Data list" => "Veri listesi"
// p.elements: "Elements" => "Öğe"
// p.content: "Content" => "İçerik"
// p.navigationTitle: "Navigation title" => "Gezinme başlığı"
// p.navigationDescription: "Navigation description" => "Navigasyon açıklaması"
// p.longTap: "Long tap" => "Uzun musluk"
// p.autoGrow: "Auto grow" => "Otomatik büyüme"
// p.allowResize: "Allow resizing" => "Yeniden boyutlandırmaya izin ver"
// p.acceptCarriageReturn: "Accept carriage return" => "Satır başı iadesini kabul et"
// p.displayMode: "Display mode" => "Ekran modu"
// p.rateType: "Rate type" => "Fiyat türü"
// p.altText: "Alt text" => "Alternatif metin"
// p.height: "Height" => "Yükseklik"
// p.penColor: "Pen color" => "Kalem rengi"
// p.backgroundColor: "Background color" => "Arka plan rengi"
// p.templateElements: "Template elements" => "Şablon öğeleri"
// p.operator: "Operator" => "Operatör"
// p.isVariable: "Is variable" => "Değişkendir"
// p.runExpression: "Run expression" => "İfadeyi çalıştır"
// p.showCaption: "Show caption" => "Altyazıyı göster"
// p.iconName: "Icon name" => "Simge adı"
// p.iconSize: "Icon size" => "Simge boyutu"
// p.precision: "Precision" => "Kesinlik"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Matris sürükleme kolu alanı"
// p.backgroundImage: "Background image" => "Arka plan resmi"
// p.backgroundImageFit: "Background image fit" => "Arka plan resmi sığdırma"
// p.backgroundImageAttachment: "Background image attachment" => "Arka plan resmi eki"
// p.backgroundOpacity: "Background opacity" => "Arka plan opaklığı"
// p.selectToRankEnabled: "Select to rank enabled" => "Etkin sıralamak için seç"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Sıralamak için alan düzenini seçin"
// p.allowCameraAccess: "Allow camera access" => "Kamera erişimine izin ver"
// p.scaleColorMode: "Scale color mode" => "Renk modunu ölçekle"
// p.rateColorMode: "Rate color mode" => "Renk modunu ayarla"
// p.templateTabTitle: "Template tab title" => "Şablon sekmesi başlığı"
// p.templateVisibleIf: "Template visible if" => "Şablon şu durumlarda görülebilir:"
// p.copyDisplayValue: "Copy display value" => "Görüntüleme değerini kopyala"
// theme.--background: "Background color" => "Arka plan rengi"
// theme.--background-dim-light: "Background dim light color" => "Arka plan loş ışık rengi"
// theme.--primary-foreground: "Primary foreground color" => "Birincil ön plan rengi"
// theme.--foreground: "Foreground color" => "Ön plan rengi"
// theme.--base-unit: "Base unit" => "Temel ünite"
// theme.groupAdvanced: "Advanced" => "İleri"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Soru görünümü"
// theme.isPanellessPanels: "Default" => "Temerrüt"
// theme.isPanellessLightweight: "Without Panels" => "Panelsiz"
// theme.themePaletteLight: "Light" => "Işık"
// theme.themePaletteDark: "Dark" => "Koyu"
// theme.primaryColor: "Accent color" => "Vurgu rengi"
// theme.primaryDefaultColor: "Default" => "Temerrüt"
// theme.primaryDarkColor: "Hover" => "Hover"
// theme.primaryLightColor: "Selected" => "Seçilmiş"
// theme.backgroundDimColor: "Background color" => "Arka plan rengi"
// theme.backgroundImage: "Background image" => "Arka plan resmi"
// theme.backgroundImageFitAuto: "Auto" => "Otomatik"
// theme.backgroundImageFitCover: "Cover" => "Örtmek"
// theme.backgroundImageFitContain: "Contain" => "Kapsamak"
// theme.backgroundOpacity: "Opacity" => "Opak -lık"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Sabit"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Tomar"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Panel arka plan opaklığı"
// theme.questionBackgroundTransparency: "Question background opacity" => "Soru arka planı opaklığı"
// theme.questionPanel: "Panel background and corner radius" => "Panel arka planı ve köşe yarıçapı"
// theme.questionTitle: "Question title font" => "Soru başlığı yazı tipi"
// theme.questionDescription: "Question description font" => "Soru açıklaması yazı tipi"
// theme.editorPanel: "Input element" => "Giriş öğesi"
// theme.editorFont: "Input element font" => "Giriş öğesi yazı tipi"
// theme.backcolor: "Default background" => "Varsayılan arka plan"
// theme.hovercolor: "Hover background" => "Arka planın üzerine gelin"
// theme.borderDecoration: "Border decoration" => "Bordür dekorasyonu"
// theme.accentBackground: "Accent background" => "Aksan arka planı"
// theme.accentForeground: "Accent foreground" => "Vurgu ön planı"
// theme.primaryForecolor: "Default color" => "Varsayılan renk"
// theme.primaryForecolorLight: "Disabled color" => "Devre dışı bırakılmış renk"
// theme.linesColors: "Minor line colors" => "Küçük çizgi renkleri"
// theme.borderDefault: "Darker" => "Koyu"
// theme.borderLight: "Lighter" => "Çakmak"
// theme.fontFamily: "Font family" => "Font ailesi"
// theme.fontSize: "Font size" => "Yazı tipi boyutu"
// theme.color: "Color" => "Renk"
// theme.size: "Size" => "Boyut"
// theme.fontWeightRegular: "Regular" => "Düzenli"
// theme.fontWeightHeavy: "Heavy" => "Ağır"
// theme.fontWeightSemiBold: "Semi-bold" => "Yarı kalın"
// theme.fontWeightBold: "Bold" => "Kalın"
// theme.scale: "Scale" => "Ölçeklemek"
// theme.cornerRadius: "Corner radius" => "Köşe yarıçapı"
// theme.surveyTitleFont: "Survey title font" => "Anket başlığı yazı tipi"
// theme.pageTitle: "Page title font" => "Sayfa başlığı yazı tipi"
// theme.pageDescription: "Page description font" => "Sayfa açıklaması yazı tipi"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Gölge Efekti Ekle"
// theme.opacity: "Opacity" => "Opak -lık"
// theme.boxShadowBlur: "Blur" => "Bulanıklaştır"
// theme.boxShadowSpread: "Spread" => "Yaymak"
// theme.boxShadowDrop: "Drop" => "Damla"
// theme.boxShadowInner: "Inner" => "İç"
// theme.questionShadow: "Shadow effects" => "Gölge efektleri"
// theme.editorShadow: "Input element shadow effects" => "Giriş öğesi gölge efektleri"
// names.default: "Default" => "Temerrüt"
// names.contrast: "Contrast" => "Karşıtlık"
// names.plain: "Plain" => "Düz"
// names.simple: "Simple" => "Basit"
// names.blank: "Blank" => "Boş"
// names.double: "Double" => "Çift"
// names.bulk: "Bulk" => "Yığın"
// names.pseudo-3d: "Pseudo 3D" => "Sahte 3D"
// names.playful: "Playful" => "Oyunbaz"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Çamurcun"
// colors.blue: "Blue" => "Mavi"
// colors.purple: "Purple" => "Mor"
// colors.orchid: "Orchid" => "Orkide"
// colors.tulip: "Tulip" => "Lale"
// colors.brown: "Brown" => "Kahverengi"
// colors.green: "Green" => "Yeşil"
// names.sharp: "Sharp" => "Keskin"
// names.borderless: "Borderless" => "Kenarlıksız"
// names.flat: "Flat" => "Düz"
// names.doubleborder: "Double Border" => "Çift Kenarlık"
// names.layered: "Layered" => "Katmanlı"
// names.solid: "Solid" => "Katı"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Bu dil için tüm dizeleri silmek istediğinizden emin misiniz?"
// ed.themeResetButton: "Reset theme settings to default" => "Tema ayarlarını varsayılana sıfırla"
// theme.placeholderColor: "Placeholder color" => "Yer tutucu rengi"
// ed.themeSettings: "Theme Settings" => "Tema Ayarları"
// ed.themeSettingsTooltip: "Open theme settings" => "Tema ayarlarını açma"
// pe.resetToDefaultCaption: "Reset" => "Sıfırlama"
// pv.file: "Local files" => "Yerel dosyalar"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Yerel dosyalar veya kamera"
// ed.translateUsigAI: "Auto-translate All" => "Tümünü Otomatik Çevir"
// ed.translationDialogTitle: "Untranslated strings" => "Çevrilmemiş dizeler"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Lütfen en az {0} ürün girin"
// lg.question_resetValueName: "Reset question value" => "Soru değerini sıfırla"
// lg.column_resetValue: "Reset column value" => "Sütun değerini sıfırla"
// pe.markRequired: "Mark as required" => "Gerektiği gibi işaretleyin"
// pe.removeRequiredMark: "Remove the required mark" => "Gerekli işareti kaldırın"
// p.resetValueIf: "Reset value if" => "Sıfırlama değeri"
// lg.question_setValueName: "Set question value" => "Soru değerini ayarla"
// lg.column_resetValueName: "Reset column value" => "Sütun değerini sıfırla"
// lg.column_setValueName: "Set column value" => "Sütun değerini ayarla"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Sonucu hedef soruya atanacak bir ifade."
// survey.title: "Title" => "Başlık"
// page.title: "Title" => "Başlık"
// p.setValueIf: "Set value if" => "Değeri ayarla"
// theme.header: "Header" => "Üstbilgi"
// theme.backgroundImageFitFill: "Stretch" => "Uzatmak"
// theme.backgroundImageFitTile: "Tile" => "Kiremit"
// theme.headerView: "View" => "Görünüm"
// theme.headerViewBasic: "Basic" => "Temel"
// theme.headerViewAdvanced: "Advanced" => "İleri"
// theme.headerInheritWidthFrom: "Content area width" => "İçerik alanı genişliği"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Anketle aynı"
// theme.headerInheritWidthFromPage: "Fit to page" => "Sayfaya sığdır"
// theme.headerTextAreaWidth: "Text width" => "Metin genişliği"
// theme.headerBackgroundColorSwitch: "Background color" => "Arka plan rengi"
// theme.headerBackgroundColorNone: "None" => "Hiç kimse"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Vurgu rengi"
// theme.headerBackgroundColorCustom: "Custom" => "Töre"
// theme.horizontalAlignmentLeft: "Left" => "Sol"
// theme.horizontalAlignmentCenter: "Center" => "Orta"
// theme.horizontalAlignmentRight: "Right" => "Sağ"
// theme.verticalAlignmentTop: "Top" => "Sayfanın Üstü"
// theme.verticalAlignmentMiddle: "Middle" => "Orta"
// theme.verticalAlignmentBottom: "Bottom" => "Dip"
// lg.question_resetValueText: "reset value for question: {0}" => "Soru için sıfırlama değeri: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Değer atayın: Soruya {1}: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Sütun için hücre değerini sıfırla: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Hücre değeri atayın: Sütuna {1}: {0}"
// ed.surveyJsonExportButton: "Export" => "Ihracat"
// ed.surveyJsonImportButton: "Import" => "Ithalat"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Panoya kopyala"
// pe.filePlaceholder: "File placeholder text" => "Dosya yer tutucu metni"
// pe.photoPlaceholder: "Photo placeholder text" => "Fotoğraf yer tutucu metni"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Dosya veya fotoğraf yer tutucu metni"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "\"Kaynak türü\" \"Yerel dosyalar\" olduğunda veya fotoğraf makinesi kullanılamadığında geçerlidir"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "\"Kaynak türü\" \"Kamera\" olduğunda geçerlidir."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "\"Kaynak türü\" \"Yerel dosyalar veya kamera\" olduğunda geçerlidir."
// theme.background: "Background" => "Arka plan"
// theme.appearance: "Appearance" => "Görünüş"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Temayı gerçekten sıfırlamak istiyor musunuz? Tüm özelleştirmeleriniz kaybolacak."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Evet, temayı sıfırlayın"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Konteynere sığdır"
// signaturepad.showPlaceholder: "Show the placeholder" => "Yer tutucuyu gösterme"
// signaturepad.placeholder: "Placeholder text" => "Yer tutucu metin"
// theme.surveyDescriptionFont: "Survey description font" => "Anket açıklaması yazı tipi"
// ed.prevFocus: "Focus previous" => "Öncesine odaklan"
// ed.nextFocus: "Focus next" => "Sonrakine odaklan"
// ed.saveTheme: "Save Theme" => "Temayı Kaydet"
// ed.saveThemeTooltip: "Save Theme" => "Temayı Kaydet"
// lg.page_requireName: "Make page required" => "Sayfayı gerekli hale getirme"
// lg.panel_requireName: "Make page required" => "Sayfayı gerekli hale getirme"
// signaturepad.signatureWidth: "Signature area width" => "İmza alanı genişliği"
// signaturepad.signatureHeight: "Signature area height" => "İmza alanı yüksekliği"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "İmza alanını otomatik ölçeklendirme"
// signaturepad.penMinWidth: "Minimum pen width" => "Minimum kalem genişliği"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maksimum kalem genişliği"
// theme.logoPosition: "Logo position" => "Logo konumu"
// theme.headerTitlePosition: "Title position" => "Unvan pozisyonu"
// theme.headerDescriptionPosition: "Description position" => "Açıklama konumu"
// ed.propertyGridNoResultsFound: "No results found" => "Sonuç bulunamadı"
// pv.leftRight: "Left and right" => "Sol ve sağ"
// p.sourceType: "Source type" => "Kaynak türü"
// p.fitToContainer: "Fit to container" => "Konteynere sığdır"
// p.setValueExpression: "Set value expression" => "Değer ifadesini ayarla"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Seçimler bir web hizmetinden yüklenir."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Ayarlara git"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Yüklenen seçim seçeneklerinin önizlemesi"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Satırlarda yinelenen yanıtları önleme"
// theme.advancedMode: "Advanced mode" => "Gelişmiş mod"
// theme.backgroundCornerRadius: "Background and corner radius" => "Arka plan ve köşe yarıçapı"
// theme.colorsTitle: "Colors" => "Renk"
// theme.font: "Font" => "Yazı tipi"
// theme.lines: "Lines" => "Satır"
// theme.titleFont: "Title font" => "Başlık yazı tipi"
// theme.descriptionFont: "Description font" => "Açıklama yazı tipi"
// theme.shadow: "Shadow effects" => "Gölge efektleri"
// ed.translateUsigAIFrom: "Translate from: " => "Çeviri kaynağı: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Yanıtlamayı Reddet seçeneğine izin ver"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Bilmiyorum seçeneğine izin ver"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Yanıtlamayı Reddet seçeneğine izin ver"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Bilmiyorum seçeneğine izin ver"
// pv.contain: "Contain" => "Kapsamak"
// pv.cover: "Cover" => "Örtmek"
// pv.fill: "Fill" => "Doldurmak"

// pe.transposeData: "Transpose rows to columns" => "Satırları sütunlara dönüştürme"
// layout.panel: "Layout" => "Düzen"
// layout.question: "Layout" => "Düzen"
// layout.base: "Layout" => "Düzen"
// panel.name: "Panel name" => "Panel adı"
// panel.title: "Panel title" => "Panel başlığı"
// panel.description: "Panel description" => "Panel açıklaması"
// panel.visibleIf: "Make the panel visible if" => "Aşağıdaki durumlarda paneli görünür hale getirin"
// panel.requiredIf: "Make the panel required if" => "Aşağıdaki durumlarda paneli gerekli hale getirin"
// panel.questionOrder: "Question order within the panel" => "Panel içinde soru sırası"
// panel.startWithNewLine: "Display the panel on a new line" => "Paneli yeni bir satırda görüntüleme"
// panel.state: "Panel collapse state" => "Panel çökme durumu"
// panel.width: "Inline panel width" => "Satır içi panel genişliği"
// panel.minWidth: "Minimum panel width" => "Minimum panel genişliği"
// panel.maxWidth: "Maximum panel width" => "Maksimum panel genişliği"
// paneldynamic.name: "Panel name" => "Panel adı"
// paneldynamic.title: "Panel title" => "Panel başlığı"
// paneldynamic.description: "Panel description" => "Panel açıklaması"
// paneldynamic.visibleIf: "Make the panel visible if" => "Aşağıdaki durumlarda paneli görünür hale getirin"
// paneldynamic.requiredIf: "Make the panel required if" => "Aşağıdaki durumlarda paneli gerekli hale getirin"
// paneldynamic.page: "Move the panel to page" => "Paneli sayfaya taşıma"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Paneli yeni bir satırda görüntüleme"
// paneldynamic.state: "Panel collapse state" => "Panel çökme durumu"
// paneldynamic.width: "Inline panel width" => "Satır içi panel genişliği"
// paneldynamic.minWidth: "Minimum panel width" => "Minimum panel genişliği"
// paneldynamic.maxWidth: "Maximum panel width" => "Maksimum panel genişliği"
// paneldynamic.templateDescription: "Panel description pattern" => "Panel açıklama deseni"
// paneldynamic.templateTitle: "Panel title pattern" => "Panel başlığı deseni"
// paneldynamic.noEntriesText: "Empty panel text" => "Boş panel metni"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Sekme başlığı deseni"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Aşağıdaki durumlarda tek bir paneli görünür hale getirme"
// paneldynamic.hideNumber: "Hide the panel number" => "Panel numarasını gizleme"
// paneldynamic.titleLocation: "Panel title alignment" => "Panel başlığı hizalaması"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Panel açıklaması hizalaması"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Soru başlığı hizalaması"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Hata iletisi hizalaması"
// paneldynamic.newPanelPosition: "New panel location" => "Yeni panel konumu"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Aşağıdaki soruda yinelenen yanıtları önleyin"
// question.name: "Question name" => "Soru adı"
// question.title: "Question title" => "Soru başlığı"
// question.description: "Question description" => "Soru açıklaması"
// question.visibleIf: "Make the question visible if" => "Aşağıdaki durumlarda soruyu görünür hale getirin"
// question.requiredIf: "Make the question required if" => "Aşağıdaki durumlarda soruyu gerekli hale getirin"
// question.state: "Question box collapse state" => "Soru kutusu daraltma durumu"
// question.hideNumber: "Hide the question number" => "Soru numarasını gizleme"
// question.titleLocation: "Question title alignment" => "Soru başlığı hizalaması"
// question.descriptionLocation: "Question description alignment" => "Soru açıklaması hizalaması"
// question.errorLocation: "Error message alignment" => "Hata iletisi hizalaması"
// question.indent: "Increase the inner indent" => "İç girintiyi artırma"
// question.width: "Inline question width" => "Satır içi soru genişliği"
// question.minWidth: "Minimum question width" => "Minimum soru genişliği"
// question.maxWidth: "Maximum question width" => "Maksimum soru genişliği"
// question.textUpdateMode: "Update input field value" => "Giriş alanı değerini güncelleştirme"
// signaturepad.allowClear: "Show the Clear button within signature area" => "İmza alanı içinde Temizle düğmesini gösterme"
// signaturepad.penColor: "Stroke color" => "Kontur rengi"
// comment.rows: "Input field height (in lines)" => "Giriş alanı yüksekliği (satırlarda)"
// expression.name: "Expression name" => "İfade adı"
// expression.title: "Expression title" => "İfade başlığı"
// expression.description: "Expression description" => "İfade açıklaması"
// expression.expression: "Expression" => "İfade"
// trigger.expression: "Expression" => "İfade"
// calculatedvalue.expression: "Expression" => "İfade"
// survey.description: "Survey description" => "Anket açıklaması"
// page.name: "Page name" => "Sayfa adı"
// page.description: "Page description" => "Sayfa açıklaması"
// page.visibleIf: "Make the page visible if" => "Aşağıdaki durumlarda sayfayı görünür hale getirin"
// page.requiredIf: "Make the page required if" => "Aşağıdaki durumlarda sayfayı gerekli hale getirin"
// page.questionOrder: "Question order on the page" => "Sayfadaki soru sırası"
// matrixdropdowncolumn.name: "Column name" => "Sütun adı"
// matrixdropdowncolumn.title: "Column title" => "Sütun başlığı"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Yinelenen yanıtları önleyin"
// matrixdropdowncolumn.width: "Column width" => "Sütun genişliği"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minimum sütun genişliği"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Giriş alanı yüksekliği (satırlarda)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Aşağıdaki durumlarda sütunu görünür hale getirin"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Aşağıdaki durumlarda sütunu gerekli yap"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Her seçenek ayrı bir sütunda"
// multipletextitem.name: "Name" => "Ad"
// multipletextitem.title: "Title" => "Başlık"
// pe.rateDescriptionLocation: "Label alignment" => "Etiket hizalama"
// pe.cellErrorLocation: "Cell error message alignment" => "Hücre hata iletisi hizalaması"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Henüz sütununuz yok"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Henüz satırınız yok"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Henüz herhangi bir doğrulama kuralınız yok"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Henüz özelleştirilebilen değişkeniniz yok"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Henüz herhangi bir tetikleyiciniz yok"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Henüz bağlantınız yok"
// pe.addNew@columns: "Add new column" => "Yeni sütun ekle"
// pe.addNew@rows: "Add new row" => "Yeni satır ekle"
// pe.addNew@validators: "Add new rule" => "Yeni kural ekle"
// pe.addNew@calculatedValues: "Add new variable" => "Yeni değişken ekle"
// pe.addNew@triggers: "Add new trigger" => "Yeni tetikleyici ekle"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Yeni URL ekle"
// choicesbyurl.url: "Web service's URL" => "Web hizmetinin URL'si"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Sayfa başlıklarını ilerleme çubuğunda görüntüleme"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "İlerleme çubuğunda sayfa numaralarını görüntüleme"
// itemvalue.visibleIf: "Make the option visible if" => "Aşağıdaki durumlarda seçeneği görünür hale getirin"
// itemvalue.enableIf: "Make the option selectable if" => "Aşağıdaki durumlarda seçeneği seçilebilir hale getirin"
// panel.layout: "Panel Layout" => "Panel Düzeni"
// tabs.questionSettings: "Question Settings" => "Soru Ayarları"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Ör.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Ör.: kategoriler.kurgu"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Örn.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Ör.: 6 inç"
// pe.minWidth_placeholder: "Ex.: 600px" => "Ör.: 600 piksel"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Ör.: %50"
// pv.selected: "Selected" => "Seçilmiş"
// pv.unselected: "Unselected" => "Seçili"
// pv.center: "Center" => "Orta"
// pv.middle: "Middle" => "Orta"
// pv.next: "Next" => "Önümüzdeki"
// pv.last: "Last" => "Son"
// clearIfInvisible.none: "Never" => "Hiç"
// questionsOnPageMode.standard: "Original structure" => "Orijinal yapı"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Tüm soruları tek bir sayfada göster"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Sayfa başına tek bir soru göster"
// pv.auto: "Auto" => "Otomatik"
// panelsState.firstExpanded: "First expanded" => "İlk genişletildi"
// rateColorMode.scale: "Scale" => "Ölçeklemek"
// scaleColorMode.monochrome: "Monochrome" => "Monokrom"
// scaleColorMode.colored: "Colored" => "Renkli"
// state.default: "Locked" => "Kilitli"
// showQuestionNumbers.default: "Auto-numbering" => "Otomatik numaralandırma"
// showQuestionNumbers.on: "Auto-numbering" => "Otomatik numaralandırma"
// showQuestionNumbers.onPage: "Reset on each page" => "Her sayfada sıfırla"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Her panelde sıfırla"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Her panelde sıfırla"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Ankete devam edin"
// showQuestionNumbers.off: "No numbering" => "Numaralandırma yok"
// descriptionLocation.underTitle: "Under the question title" => "Soru başlığı altında"
// descriptionLocation.underInput: "Under the input field" => "Giriş alanının altında"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Seçeneklerin yanında"
// selectToRankAreasLayout.vertical: "Above choices" => "Yukarıdaki seçenekler"
// displayStyle.decimal: "Decimal" => "On -da -lık"
// displayStyle.currency: "Currency" => "Para birimi"
// displayStyle.percent: "Percentage" => "Yüzde"
// displayStyle.date: "Date" => "Tarih"
// totalDisplayStyle.decimal: "Decimal" => "On -da -lık"
// totalDisplayStyle.currency: "Currency" => "Para birimi"
// totalDisplayStyle.percent: "Percentage" => "Yüzde"
// totalDisplayStyle.date: "Date" => "Tarih"
// rowOrder.initial: "Original" => "Özgün"
// questionOrder.initial: "Original" => "Özgün"
// showProgressBar.aboveheader: "Above the header" => "Başlığın üstünde"
// showProgressBar.belowheader: "Below the header" => "Başlığın altında"
// pv.sum: "Sum" => "Toplam"
// pv.count: "Count" => "Saymak"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Içerir"
// searchMode.startsWith: "Starts with" => "İle başlar"
// panel.name: "A panel ID that is not visible to respondents." => "Yanıtlayanlar tarafından görülemeyen bir panel kimliği."
// panel.description: "Type a panel subtitle." => "Bir panel altyazısı yazın."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Panel görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Panelin salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Bu paneldeki tüm sorular için geçerlidir. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Paneldeki tüm sorularla ilgili olarak bir hata mesajının konumunu ayarlar. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını uygular."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Soruların orijinal sırasını korur veya rastgele hale getirir. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını uygular."
// panel.page: "Repositions the panel to the end of a selected page." => "Paneli seçili sayfanın sonuna yeniden konumlandırır."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Panel içeriği ile panel kutusunun sol kenarlığı arasına boşluk veya kenar boşluğu ekler."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Panelin önceki soru veya panelle aynı satırda görüntülenmesi için seçimi kaldırın. Panel formunuzdaki ilk öğeyse bu ayar uygulanmaz."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Şunlar arasından seçim yapın: \"Genişletilmiş\" - panel tam olarak görüntülenir ve daraltılabilir; \"Daraltılmış\" - panel yalnızca başlığı ve açıklamayı görüntüler ve genişletilebilir; \"Kilitli\" - panel tam olarak görüntülenir ve daraltılamaz."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Panelin genişliğini aynı satırdaki diğer anket öğeleriyle orantılı olarak ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Yanıtlayanlar tarafından görülemeyen bir panel kimliği."
// paneldynamic.description: "Type a panel subtitle." => "Bir panel altyazısı yazın."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Panel görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Panelin salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Bu paneldeki tüm sorular için geçerlidir. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Geçersiz girişi olan bir soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Paneldeki tüm sorularla ilgili olarak bir hata mesajının konumunu ayarlar. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını uygular."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Paneli seçili sayfanın sonuna yeniden konumlandırır."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Panel içeriği ile panel kutusunun sol kenarlığı arasına boşluk veya kenar boşluğu ekler."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Panelin önceki soru veya panelle aynı satırda görüntülenmesi için seçimi kaldırın. Panel formunuzdaki ilk öğeyse bu ayar uygulanmaz."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Şunlar arasından seçim yapın: \"Genişletilmiş\" - panel tam olarak görüntülenir ve daraltılabilir; \"Daraltılmış\" - panel yalnızca başlığı ve açıklamayı görüntüler ve genişletilebilir; \"Kilitli\" - panel tam olarak görüntülenir ve daraltılamaz."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Panelin genişliğini aynı satırdaki diğer anket öğeleriyle orantılı olarak ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Dinamik panel başlıkları için bir şablon yazın. Panelin genel konumu için {panelIndex} ve görünür paneller arasındaki sırası için {visiblePanelIndex} kullanın. Otomatik numaralandırma eklemek için bu yer tutucuları desene ekleyin."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Sekme başlıkları için bir şablon yazın. Panelin genel konumu için {panelIndex} ve görünür paneller arasındaki sırası için {visiblePanelIndex} kullanın. Otomatik numaralandırma eklemek için bu yer tutucuları desene ekleyin."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Bu ayar, dinamik panel içindeki tek tek panellerin görünürlüğünü kontrol etmenizi sağlar. İfadenizdeki geçerli panele başvurmak için '{panel}' yer tutucusunu kullanın."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Bu ayar, bu paneldeki tüm sorular tarafından otomatik olarak devralınır. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Üst\") uygular."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "\"Devral\" seçeneği, sayfa düzeyi (ayarlanmışsa) veya anket düzeyi ayarını (varsayılan olarak \"Panel başlığı altında\") uygular."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Yeni eklenen panelin konumunu tanımlar. Varsayılan olarak, sonuna yeni paneller eklenir. Geçerli panelden sonra yeni bir panel eklemek için \"İleri\" yi seçin."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Son paneldeki yanıtları çoğaltır ve bir sonraki eklenen dinamik panele atar."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Kullanıcının her panelde bu soruya benzersiz bir yanıt vermesini zorunlu kılmak için bir soru adına başvurun."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Bu ayar, bir ifadeye göre varsayılan bir yanıt değeri atamanıza olanak tanır. İfade temel hesaplamaları içerebilir - '{q1_id} + {q2_id}', '{age} > 60' gibi Boole ifadeleri ve işlevler: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb. Bu ifade tarafından belirlenen değer, yanıtlayanın manuel girişi tarafından geçersiz kılınabilecek ilk varsayılan değer olarak işlev görür."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Yanıtlayanın girişinin ne zaman \"Varsayılan değer ifadesi\" veya \"Değer ifadesi ayarla\" ya da \"Varsayılan yanıt\" değerine (ayarlanmışsa) dayalı değere ne zaman sıfırlanacağını belirleyen bir koşullu kural ayarlamak için sihirli değnek simgesini kullanın."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "\"Değer ayarla ifadesinin\" ne zaman çalıştırılacağını belirleyen koşullu bir kural belirlemek ve elde edilen değeri yanıt olarak dinamik olarak atamak için sihirli değnek simgesini kullanın."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "\"Şu durumda değer ayarla\" kuralındaki koşullar karşılandığında ayarlanacak değeri tanımlayan bir ifade belirtin. İfade temel hesaplamaları içerebilir - '{q1_id} + {q2_id}', '{age} > 60' gibi Boole ifadeleri ve işlevler: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb. Bu ifade tarafından belirlenen değer, yanıtlayanın manuel girişi tarafından geçersiz kılınabilir."
// question.name: "A question ID that is not visible to respondents." => "Yanıtlayanlar tarafından görülemeyen bir soru kimliği."
// question.description: "Type a question subtitle." => "Bir soru alt başlığı yazın."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Soru görünürlüğünü belirleyen koşullu bir kural belirlemek için sihirli değnek simgesini kullanın."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Soru için salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Soru yanıt almadıkça anketin ilerlemesini veya gönderilmesini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Soruyu, önceki soru veya panelle birlikte tek satırda görüntülemek için seçimi kaldırın. Soru formunuzdaki ilk öğeyse bu ayar geçerli değildir."
// question.page: "Repositions the question to the end of a selected page." => "Soruyu seçili sayfanın sonuna konumlandırır."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Şunlar arasından seçim yapın: \"Genişletilmiş\" - soru kutusu tam olarak görüntülenir ve daraltılabilir; \"Daraltılmış\" - soru kutusu yalnızca başlığı ve açıklamayı görüntüler ve genişletilebilir; \"Kilitli\" - soru kutusu tam olarak görüntülenir ve daraltılamaz."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Panel, sayfa veya anket düzeyinde tanımlanan başlık hizalama kurallarını geçersiz kılar. \"Devral\" seçeneği, tüm üst düzey ayarları (ayarlanmışsa) veya anket düzeyindeki ayarları (varsayılan olarak \"Üst\") uygular."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "\"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Soru başlığının altında\")."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Geçersiz girişi olan soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Üst\")."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Soru içeriği ile soru kutusunun sol kenarlığı arasına boşluk veya kenar boşluğu ekler."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Sorunun genişliğini, aynı satırdaki diğer anket öğeleriyle orantılı olarak ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Soru için bir doğrulama kuralı ayarlamak için sihirli değnek simgesini kullanın."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Şunlar arasından seçim yapın: \"Odak kaybolduğunda\" - giriş alanı odağı kaybettiğinde değer güncellenir; \"Yazarken\" - değer, kullanıcılar yazarken gerçek zamanlı olarak güncellenir. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Odak kaybolduğunda\")."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Çoktan seçmeli sorular için herhangi bir web hizmetini veri kaynağı olarak kullanabilirsiniz. Seçim değerlerini doldurmak için, verileri sağlayan hizmetin URL'sini girin."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Açılan listeyi filtrelemek için kullanılan bir karşılaştırma işlemi."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Görüntülenen imza alanının ve elde edilen görüntünün genişliğini ayarlar."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Görüntülenen imza alanının ve elde edilen görüntünün yüksekliğini ayarlar."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "İmza alanının, varsayılan 3:2 en boy oranını korurken soru kutusundaki tüm kullanılabilir alanı doldurmasını isteyip istemediğinizi seçin. Özel genişlik ve yükseklik değerleri ayarlandığında, ayar bu boyutların en boy oranını korur."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Anket sonuçlarındaki görüntünün yüksekliğini ayarlar."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Anket sonuçlarındaki görüntünün genişliğini ayarlar."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Minimum ve maksimum yükseklik değerlerini geçersiz kılar."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Minimum ve maksimum genişlik değerlerini geçersiz kılar."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Değer\", koşullu kurallarda kullanılan bir öğe kimliği görevi görür; Yanıtlayanlara \"Metin\" gösterilir."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Bu ayar yalnızca giriş alanını yeniden boyutlandırır ve soru kutusunun genişliğini etkilemez. Kabul edilen giriş uzunluğunu sınırlamak için <b>Doğrulama → Maksimum karakter sınırı'na</b> gidin."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Giriş alanında görüntülenen satırların sayısını ayarlar. Giriş daha fazla satır alırsa, kaydırma çubuğu görünecektir."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Şunlar arasından seçim yapın: \"Düzenlenebilir\" - yanıtlayanların anketinizi doldurmasını sağlar; \"Salt okunur\" - form düzenlemeyi devre dışı bırakır."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Yanıtlayanlar tarafından görülemeyen bir sütun kimliği."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Bir sütun için etkinleştirildiğinde, yanıtlayanın bu sütundaki her soru için benzersiz bir yanıt vermesi gerekir."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Giriş alanında görüntülenen satırların sayısını ayarlar. Giriş daha fazla satır alırsa, kaydırma çubuğu görünecektir."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Sütun görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Sütunun salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Seçildiğinde, her seçim seçeneği için ayrı bir sütun oluşturur."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Şunlar arasından seçim yapın: \"Statik\" - sabit bir genişlik ayarlar; \"Duyarlı\" - anketin ekranın tüm genişliğini kaplamasını sağlar; \"Otomatik\" - kullanılan soru türlerine bağlı olarak ikisinden birini uygular."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Bilgisayarınızdan bir dosyaya (64 KB'a kadar) göz atmak için bir resim bağlantısı yapıştırın (boyut sınırı yok) veya klasör simgesini tıklayın."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "CSS birimlerinde bir logo genişliği ayarlar (px, %, in, pt, vb.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "CSS birimlerinde (px, %, in, pt, vb.) bir logo yüksekliği ayarlar."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Şunlar arasından seçim yapın: \"Yok\" - görüntü orijinal boyutunu korur; \"İçer\" - görüntü, en boy oranı korunurken sığacak şekilde yeniden boyutlandırılır; \"Kapak\" - görüntü, en boy oranını korurken tüm kutuyu doldurur; \"Doldur\" - görüntü, en boy oranını korumadan kutuyu dolduracak şekilde uzatılır."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Sayfadaki gezinme düğmelerinin görünürlüğünü ve konumunu ayarlar."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "İlerleme çubuğunun görünürlüğünü ve konumunu ayarlar. \"Otomatik\" değeri, anket başlığının üstünde veya altında ilerleme çubuğunu görüntüler."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Önizleme sayfasını tüm sorularla veya yalnızca yanıtlanmış sorularla etkinleştirin."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Anketteki tüm sorular için geçerlidir. Bu ayar, panel, sayfa veya soru gibi daha düşük düzeylerdeki başlık hizalama kuralları tarafından geçersiz kılınabilir. Daha düşük düzeydeki bir ayar, daha yüksek düzeydeki ayarları geçersiz kılar."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Bir yanıtın gerekli olduğunu gösteren bir sembol veya sembol dizisi."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Numaralandırmaya başlamak istediğiniz sayıyı veya harfi girin."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Geçersiz girişi olan soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Her sayfadaki ilk giriş alanının metin girişi için hazır olmasını istiyorsanız seçin."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Soruların orijinal sırasını korur veya rastgele hale getirir. Bu ayarın etkisi yalnızca Önizleme sekmesinde görünür."
// pehelp.maxTextLength: "For text entry questions only." => "Yalnızca metin girişi soruları için."
// pehelp.maxCommentLength: "For question comments only." => "Yalnızca soru yorumları içindir."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Soru yorumlarının ve Uzun Metin sorularının yüksekliğinin girilen metin uzunluğuna göre otomatik olarak büyümesini istiyorsanız seçin."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Yalnızca soru yorumları ve Uzun Metin soruları için."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Özelleştirilebilir değişkenler, form hesaplamalarında kullanılan ara veya yardımcı değişkenler olarak işlev görür. Yanıtlayan girdilerini kaynak değerler olarak alırlar. Her özelleştirilebilen değişkenin benzersiz bir adı ve temel aldığı bir ifadesi vardır."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "İfadenin hesaplanan değerinin anket sonuçlarıyla birlikte kaydedilmesini isteyip istemediğinizi seçin."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Tetikleyici, bir ifadeyi temel alan bir olay veya koşuldur. İfade \"true\" olarak değerlendirildikten sonra, bir tetikleyici bir eylemi başlatır. Böyle bir eylemin isteğe bağlı olarak etkilediği bir hedef sorusu olabilir."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Koşullu mantık tarafından gizlenen sorular için değerlerin temizlenip temizlenmeyeceğini ve bunun ne zaman yapılacağını seçin."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Şunlar arasından seçim yapın: \"Odak kaybolduğunda\" - giriş alanı odağı kaybettiğinde değer güncellenir; \"Yazarken\" - değer, kullanıcılar yazarken gerçek zamanlı olarak güncellenir."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Soldaki değer, koşullu kurallarda kullanılan bir sütun kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Soldaki değer, koşullu kurallarda kullanılan bir satır kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Geçersiz girişi olan bir hücreyle ilgili olarak bir hata iletisinin konumunu ayarlar. \"Devral\" seçeneği, ayarı \"Hata iletisi hizalaması\" özelliğinden uygular."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "\"Yinelenen yanıtları engelle\" özelliği etkinleştirildiğinde, yinelenen bir girdi göndermeye çalışan yanıtlayan aşağıdaki hata iletisini alır."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Bir ifadeye dayalı olarak toplam değerleri hesaplamanıza olanak tanır. İfade, temel hesaplamaları ('{q1_id} + {q2_id}'), Boole ifadelerini ('{age} > 60') ve işlevleri ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb.) içerebilir."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Satır silme işlemini onaylamanızı isteyen bir istemi tetikler."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Son satırdaki yanıtları çoğaltır ve bunları bir sonraki eklenen dinamik satıra atar."
// pehelp.description: "Type a subtitle." => "Bir altyazı yazın."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Anketinizi oluşturmaya başlamak için bir dil seçin. Çeviri eklemek için yeni bir dile geçin ve orijinal metni buradan veya Çeviriler sekmesinden çevirin."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Ayrıntılar bölümünün bir satıra göre konumunu ayarlar. Şunlar arasından seçim yapın: \"Yok\" - genişletme eklenmez; \"Satırın altında\" - matrisin her satırının altına bir satır genişletmesi yerleştirilir; \"Satırın altında, yalnızca bir satır genişletmesi görüntüle\" - yalnızca tek bir satırın altında bir genişletme görüntülenir, kalan satır genişletmeleri daraltılır."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Şunlar arasından seçim yapın: \"Yok\" - görüntü orijinal boyutunu korur; \"İçer\" - görüntü, en boy oranı korunurken sığacak şekilde yeniden boyutlandırılır; \"Kapak\" - görüntü, en boy oranını korurken tüm kutuyu doldurur; \"Doldur\" - görüntü, en boy oranını korumadan kutuyu dolduracak şekilde uzatılır."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Veriler girilirken giriş alanının yüksekliğini kademeli olarak artırır. \"Giriş alanı yüksekliği (satırlarda)\" ayarını geçersiz kılar."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Yeniden boyutlandırma tutamacı (veya tutamak) köşede görünür ve giriş alanının boyutunu değiştirmek için sürüklenebilir."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Anketin otomatik olarak Teşekkür Ederiz sayfasına ilerlediği saniye cinsinden bir zaman aralığı."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Anketin otomatik olarak bir sonraki sayfaya ilerlediği saniye cinsinden bir zaman aralığı."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Anketin otomatik olarak bir sonraki sayfaya ilerlediği saniye cinsinden bir zaman aralığı."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Sayfa görünürlüğünü belirleyen koşullu bir kural belirlemek için sihirli değnek simgesini kullanın."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Sayfanın salt okunur modunu devre dışı bırakan koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "En az bir iç içe geçmiş sorunun yanıtı olmadığı sürece anket gönderimini engelleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Bu sayfadaki tüm sorular için geçerlidir. Bu ayarı geçersiz kılmak istiyorsanız, tek tek sorular veya paneller için başlık hizalama kuralları tanımlayın. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Üst\")."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Geçersiz girişi olan soruyla ilgili olarak bir hata mesajının konumunu ayarlar. Şunlar arasından seçim yapın: \"Üst\" - soru kutusunun en üstüne bir hata metni yerleştirilir; \"Alt\" - soru kutusunun altına bir hata metni yerleştirilir. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Üst\")."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Soruların orijinal sırasını korur veya rastgele hale getirir. \"Devral\" seçeneği, anket düzeyindeki ayarı (varsayılan olarak \"Orijinal\") uygular. Bu ayarın etkisi yalnızca Önizleme sekmesinde görünür."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Sayfadaki gezinme düğmelerinin görünürlüğünü ayarlar. \"Devral\" seçeneği, varsayılan olarak \"Görünür\" olan anket düzeyi ayarını uygular."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Şunlar arasından seçim yapın: \"Kilitli\" - kullanıcılar panelleri genişletemez veya daraltamaz; \"Tümünü daralt\" - tüm paneller daraltılmış durumda başlar; \"Tümünü genişlet\" - tüm paneller genişletilmiş bir durumda başlar; \"İlk genişletildi\" - başlangıçta yalnızca ilk panel genişletilir."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Seçim listesinde görüntülemek istediğiniz görüntü veya video dosyası URL'lerini içeren nesne dizisi içinde paylaşılan bir özellik adı girin."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Soldaki değer, koşullu kurallarda kullanılan bir öğe kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir."
// pehelp.title: "Type a user-friendly title to display." => "Görüntülemek için kullanıcı dostu bir başlık yazın."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Dosyalar yüklenene kadar kullanıcıların anketi tamamlamamasını sağlar."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Tekli ve çoktan seçimli soru tiplerinde, her seçim seçeneğinin bir kimliği ve görünen değeri vardır. Seçildiğinde, bu ayar HTML sorularında ve anket öğelerinin dinamik başlıklarında ve açıklamalarında kimlik değeri yerine bir görünen değer gösterir."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Koşullu mantık tarafından gizlenen soru değerlerinin temizlenip temizlenmeyeceğini ve ne zaman yapılacağını seçin. \"Devral\" seçeneği, anket düzeyindeki ayarı uygular (varsayılan olarak \"Anket tamamlandıktan sonra\")."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Şunlar arasından seçim yapın: \"Tümü\" - seçilen sorudaki tüm seçim seçeneklerini kopyalar; \"Seçili\" - yalnızca seçilen seçim seçeneklerini dinamik olarak kopyalar; \"Seçilmemiş\" - yalnızca seçilmemiş seçim seçeneklerini dinamik olarak kopyalar. \"Yok\" ve \"Diğer\" seçenekleri, kaynak soruda etkinleştirilmişse varsayılan olarak kopyalanır."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Seçildiğinde, kullanıcılar ayrı bir yorum kutusuna ek girdi ekleyebilir."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Her özel seçim seçeneğini (\"Yok\", \"Diğer\", \"Tümünü Seç\") çok sütunlu bir düzen kullanırken bile yeni bir satırda görüntüler."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Hizmet veri kümesinde, hedef nesne dizisinin bulunduğu konumu belirtin. URL zaten diziye işaret ediyorsa boş bırakın."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Seçim listesinde görüntülemek istediğiniz değerleri içeren nesneler dizisi içinde tekdüzen bir özellik adı girin."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Hizmetin boş bir yanıt veya dizi döndürmesine izin vermek için seçin."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Tüm seçim seçeneklerinin görünürlüğünü belirleyen koşullu bir kural ayarlamak için sihirli değnek simgesini kullanın."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Soldaki değer, koşullu kurallarda kullanılan bir öğe kimliği görevi görür, sağdaki değer yanıtlayanlara gösterilir."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Otomatik\", mevcut genişliğe göre \"Düğmeler\" ve \"Açılır Menü\" modları arasında seçim yapar. Genişlik düğmeleri görüntülemek için yetersiz olduğunda, soru bir açılır menü görüntüler."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Farklı formatlarda sonuç üreten soruları bağlamanıza olanak tanır. Bu tür sorular bir birleştirme tanımlayıcısı kullanılarak birbirine bağlandığında, bu paylaşılan özellik seçilen soru değerlerini depolar."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Açılır menü içeriğini, kullanıcının giriş alanına yazdığı arama sorgusuyla eşleşecek şekilde güncelleştirmek istiyorsanız seçin."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Yanıtlayanlar olumlu yanıt verdiğinde anket sonuçlarına kaydedilecek bir değer."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Yanıtlayanlar olumsuz yanıt verdiğinde anket sonuçlarına kaydedilecek bir değer."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Önizleme görüntüsünü geçersiz kıldığından ve kullanıcının dosyaların yüklenip yüklenmediğini anlamasını zorlaştırdığından bu seçeneğin devre dışı bırakılması önerilmez."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Dosya silme işlemini onaylamanızı isteyen bir istemi tetikler."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Yalnızca seçilen seçenekleri sıralamak için etkinleştirin. Kullanıcılar, sıralama alanı içinde sıralamak için seçim listesinden seçilen öğeleri sürükleyecektir."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Giriş sırasında yanıtlayana önerilecek seçeneklerin bir listesini girin."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Bu ayar yalnızca giriş alanlarını yeniden boyutlandırır ve soru kutusunun genişliğini etkilemez."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Piksel cinsinden tüm öğe etiketleri için tutarlı genişlik ayarlar"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "\"Otomatik\" seçeneği, sağlanan kaynak URL'ye göre görüntüleme için uygun modu (Resim, Video veya YouTube) otomatik olarak belirler."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Görüntü, kullanıcının cihazında görüntülenemediğinde ve erişilebilirlik amacıyla yedek olarak görev yapar."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Derecelendirme simgesi türü \"Suratlar\" olarak ayarlandığında seçilen emojinin rengini tanımlar. Şunlar arasından seçim yapın: \"Varsayılan\" - seçilen emoji varsayılan anket renginde görünür; \"Ölçek\" - seçilen emoji, derecelendirme ölçeğinden rengi devralır."
// expression.name: "An expression ID that is not visible to respondents." => "Yanıtlayanlar tarafından görülemeyen bir ifade kimliği."
// expression.description: "Type an expression subtitle." => "Bir ifade alt başlığı yazın."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Bir ifade, temel hesaplamaları ('{q1_id} + {q2_id}'), koşulları ('{age} > 60') ve işlevleri ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' vb.) içerebilir."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "\"Diğer\" seçenek değerini anket sonuçlarında ayrı bir özellik olarak saklamak için seçin."
// p.swapOrder: "Swap the order of Yes and No" => "Evet ve Hayır sırasını değiştirin"
// p.itemTitleWidth: "Item label width (in px)" => "Öğe etiketi genişliği (piksel cinsinden)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Tüm seçeneklerin seçili olup olmadığını gösteren metin"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Derecelendirme alanı için yer tutucu metin"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Anketi otomatik olarak tamamlama"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Yanıtlayan tüm soruları yanıtladıktan sonra anketin otomatik olarak tamamlanmasını isteyip istemediğinizi seçin."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Anket sonuçlarında maskelenmiş değeri kaydetme"
// patternmask.pattern: "Value pattern" => "Değer örüntüsü"
// datetimemask.min: "Minimum value" => "Minimum değer"
// datetimemask.max: "Maximum value" => "Maksimum değer"
// numericmask.allowNegativeValues: "Allow negative values" => "Negatif değerlere izin ver"
// numericmask.thousandsSeparator: "Thousands separator" => "Binlik ayırıcı"
// numericmask.decimalSeparator: "Decimal separator" => "Ondalık ayırıcı"
// numericmask.precision: "Value precision" => "Değer hassasiyeti"
// numericmask.min: "Minimum value" => "Minimum değer"
// numericmask.max: "Maximum value" => "Maksimum değer"
// currencymask.prefix: "Currency prefix" => "Para birimi öneki"
// currencymask.suffix: "Currency suffix" => "Para birimi son eki"
// pe.maskType: "Input mask type" => "Giriş maskesi türü"
// maskTypes.patternmask: "Pattern" => "Desen"
// maskTypes.numericmask: "Numeric" => "Sayısal"
// maskTypes.datetimemask: "Date and Time" => "Tarih ve Saat"
// maskTypes.currencymask: "Currency" => "Para birimi"
// tabs.mask: "Input Mask Settings" => "Giriş Maskesi Ayarları"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Ör.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Ör.: aa/gg/yyyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "Ör.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Ör.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Sarma seçenekleri"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Seçim seçeneklerindeki uzun metinler, açılır menüye sığacak şekilde otomatik olarak satır sonları oluşturur. Metinlerin kırpılmasını istiyorsanız seçimi kaldırın."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Soru değerini, anket sonuçlarında uygulanan bir maske ile saklamak istiyorsanız seçin."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Desen, dize değişmez değerlerini ve aşağıdaki yer tutucuları içerebilir: '9' - bir rakam için; 'a' - büyük veya küçük harf için; '#' - bir rakam veya büyük veya küçük harf için. Bir karakterden kaçmak için ters eğik çizgi '\\' kullanın."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Desen, ayırıcı karakterler ve aşağıdaki yer tutucuları içerebilir: 'm' - ay numarası için; 'mm' - ay numarası için, tek basamaklı değerler için başında sıfır var; 'd' - ayın günü için; 'dd' - ayın günü için, tek basamaklı değerler için başında sıfır var; 'yy' - yılın son iki hanesi için; 'yyyy' - dört basamaklı bir yıl için."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Görüntülenen bir sayının kesirli kısmını tamsayı kısmından ayırmak için kullanılan bir sembol."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Büyük bir sayının rakamlarını üçlü gruplara ayırmak için kullanılan bir sembol."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Görüntülenen bir sayı için ondalık virgülden sonra kaç basamak tutulacağını sınırlar."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Değerden önce görüntülenecek bir veya birkaç sembol."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Değerden sonra görüntülenecek bir veya birkaç sembol."
// ed.translationSource: "Source: " => "Kaynak: "
// ed.translationTarget: "Target: " => "Hedef: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Sayfa boş. Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklatın."
// maskTypes.none: "None" => "Hiç kimse"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Aşağıdaki durumlarda satırı görünür hale getirin"
// itemvalue@rows.enableIf: "Make the row editable if" => "Aşağıdaki durumlarda satırı düzenlenebilir hale getirin"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Salt okunur veya önizleme modunda yer tutucu metin"
// pe.textWrapEnabled: "Wrap choices" => "Sarma seçenekleri"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "\"Otomatik\" seçeneği, sağlanan kaynak URL'ye göre görüntüleme için uygun modu (Resim, Video veya YouTube) otomatik olarak belirler."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Medya seçicinin içerik modunu ayarlamak için \"Görüntü\" ve \"Video\" arasında seçim yapın. \"Resim\" seçilirse, sağlanan tüm seçeneklerin şu biçimlerdeki resim dosyaları olduğundan emin olun: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Benzer şekilde, \"Video\" seçilirse, tüm seçeneklerin aşağıdaki formatlardaki video dosyalarına doğrudan bağlantılar olduğundan emin olun: MP4, MOV, WMV, FLV, AVI, MKV. Video seçenekleri için YouTube bağlantılarının desteklenmediğini lütfen unutmayın."
// ed.selectFile: "Select a file" => "Bir dosya seçin"
// ed.removeFile: "Remove the file" => "Dosyayı kaldır"
// pe.searchMode: "Search Mode" => "Arama Modu"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Formunuzu oluşturmaya başlamak için aşağıdaki \"Soru Ekle\" butonuna tıklayın."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Sayfaya yeni bir öğe eklemek için aşağıdaki \"Soru Ekle\" düğmesini tıklayın."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Panele yeni bir öğe eklemek için aşağıdaki \"Soru Ekle\" düğmesini tıklayın."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Aşağıdaki düğmeyi tıklayın ve yüklemek için bir resim seçin"
// coloralpha.opacity: "Opacity" => "Opak -lık"
// font.family: "Font family" => "Yazı tipi ailesi"
// font.color: "Color" => "Renk"
// font.placeholderColor: "Placeholder color" => "Yer tutucu rengi"
// font.size: "Size" => "Boyut"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Soru görünümü"
// theme.editorPanel: "Background and corner radius" => "Arka plan ve köşe yarıçapı"
// theme.questionPanel: "Background and corner radius" => "Arka plan ve köşe yarıçapı"
// theme.primaryColor: "Accent color" => "Vurgu rengi"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Panel arka plan opaklığı"
// theme.questionBackgroundTransparency: "Question background opacity" => "Soru arka plan opaklığı"
// theme.fontSize: "Font size" => "Yazı boyutu"
// theme.scale: "Scale" => "Ölçeklemek"
// theme.cornerRadius: "Corner radius" => "Köşe yarıçapı"
// theme.pageTitle: "Title font" => "Başlık yazı tipi"
// theme.pageDescription: "Description font" => "Açıklama yazı tipi"
// theme.questionTitle: "Title font" => "Başlık yazı tipi"
// theme.questionDescription: "Description font" => "Açıklama yazı tipi"
// theme.editorFont: "Font" => "Yazı tipi"
// theme.backgroundOpacity: "Opacity" => "Opak -lık"
// theme.--sjs-font-family: "Font family" => "Yazı tipi ailesi"
// theme.--sjs-general-backcolor-dim: "Background color" => "Arka plan rengi"
// theme.--sjs-primary-backcolor: "Accent background" => "Vurgu arka planı"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Vurgu ön planı"
// theme.--sjs-shadow-small: "Shadow effects" => "Gölge efektleri"
// theme.--sjs-shadow-inner: "Shadow effects" => "Gölge efektleri"
// theme.--sjs-border-default: "Colors" => "Renk"
// header@header.headerView: "View" => "Görünüm"
// header@header.logoPosition: "Logo position" => "Logo konumu"
// header@header.surveyTitle: "Survey title font" => "Anket başlığı yazı tipi"
// header@header.surveyDescription: "Survey description font" => "Anket açıklaması yazı tipi"
// header@header.headerTitle: "Survey title font" => "Anket başlığı yazı tipi"
// header@header.headerDescription: "Survey description font" => "Anket açıklaması yazı tipi"
// header@header.inheritWidthFrom: "Content area width" => "İçerik alanı genişliği"
// header@header.textAreaWidth: "Text width" => "Metin genişliği"
// header@header.backgroundColorSwitch: "Background color" => "Arka plan rengi"
// header@header.backgroundImage: "Background image" => "Arka plan resmi"
// header@header.backgroundImageOpacity: "Opacity" => "Opak -lık"
// header@header.overlapEnabled: "Overlap" => "Örtüş"
// header@header.logoPositionX: "Logo position" => "Logo konumu"
// header@header.titlePositionX: "Title position" => "Unvan pozisyonu"
// header@header.descriptionPositionX: "Description position" => "Açıklama konumu"
// weight.400: "Regular" => "Düzenli"
// weight.600: "Heavy" => "Ağır"
// weight.700: "Semi-bold" => "Yarı kalın"
// weight.800: "Bold" => "Kalın"
// backgroundImageFit.auto: "Auto" => "Otomatik"
// backgroundImageFit.cover: "Cover" => "Örtmek"
// backgroundImageFit.contain: "Contain" => "Kapsamak"
// backgroundImageFit.fill: "Stretch" => "Uzatmak"
// backgroundImageFit.tile: "Tile" => "Kiremit"
// backgroundImageAttachment.fixed: "Fixed" => "Sabit"
// backgroundImageAttachment.scroll: "Scroll" => "Tomar"
// headerView.basic: "Basic" => "Temel"
// headerView.advanced: "Advanced" => "İleri"
// inheritWidthFrom.survey: "Same as survey" => "Anketle aynı"
// inheritWidthFrom.container: "Fit to container" => "Konteynere sığdır"
// backgroundColorSwitch.none: "None" => "Hiç kimse"
// backgroundColorSwitch.accentColor: "Accent color" => "Vurgu rengi"
// backgroundColorSwitch.custom: "Custom" => "Töre"
// colorPalette.light: "Light" => "Işık"
// colorPalette.dark: "Dark" => "Koyu"
// isPanelless.false: "Default" => "Temerrüt"
// isPanelless.true: "Without Panels" => "Panelsiz"
// theme.cornerRadius: "Corner radius" => "Köşe yarıçapı"
// theme.fontFamily: "Font family" => "Yazı tipi ailesi"
// theme.fontWeightRegular: "Regular" => "Düzenli"
// theme.fontWeightHeavy: "Heavy" => "Ağır"
// theme.fontWeightSemiBold: "Semi-bold" => "Yarı kalın"
// theme.fontWeightBold: "Bold" => "Kalın"
// theme.color: "Color" => "Renk"
// theme.placeholderColor: "Placeholder color" => "Yer tutucu rengi"
// theme.size: "Size" => "Boyut"
// theme.opacity: "Opacity" => "Opak -lık"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Aramak için yazın..."
// ed.toolboxNoResultsFound: "No results found" => "Sonuç bulunamadı"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Sekme başlığı yer tutucusu"
// theme.--sjs-special-red: "Error messages" => "Hata mesajları"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Sekme başlığı deseni anlamlı bir değer üretmediğinde geçerli olan sekme başlıkları için bir geri dönüş metni."
// theme.fontColor: "Font color" => "Yazı tipi rengi"
// theme.backgroundColor: "Background color" => "Arka plan rengi"
// pe.questionTitleWidth: "Question title width" => "Soru başlığı genişliği"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Bir dosya seçin veya bir dosya bağlantısı yapıştırın..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Ör.: 200 piksel"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Soru kutularının soluna hizalandıklarında soru başlıkları için tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Soru kutularının soluna hizalandıklarında soru başlıkları için tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// pe.commentAreaRows: "Comment area height (in lines)" => "Yorum alanı yüksekliği (satırlar halinde)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Soru yorumları için metin alanlarında görüntülenen satır sayısını ayarlar. Girişte daha fazla satır alır, kaydırma çubuğu görünür."
// pe.enabled: "Enabled" => "Etkin"
// pe.disabled: "Disabled" => "Sakat"
// pe.inherit: "Inherit" => "Devralır"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Kayıp odakta boş alanları doğrulayın"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Ör.: %30"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Ör.: 200 piksel"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Bir kullanıcı boş bir giriş alanına odaklandığında ve ardından herhangi bir değişiklik yapmadan bu alandan ayrıldığında doğrulamayı tetiklemek için bu seçeneği etkinleştirin."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Seçim seçeneklerini çok sütunlu bir düzende düzenler. 0 olarak ayarlandığında, seçenekler tek bir satırda görüntülenir."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Bu ayar yalnızca panelin dışındaki sorular için geçerlidir."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Önemli anket öğelerini vurgulayan ek bir renk ayarlar."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Anketlerin ve soru kutularının saydamlığını anket arka planına göre ayarlar."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Giriş öğelerinin saydamlığını anket arka planına göre ayarlar."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Tüm dikdörtgen elemanlar için köşe yarıçapını ayarlar. Giriş öğeleri veya paneller ve soru kutuları için ayrı köşe yarıçapı değerleri ayarlamak istiyorsanız Gelişmiş Modu etkinleştirin."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Anketin ana arka plan rengini ayarlar."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "\"Kapsayıcı ile aynı\" seçeneği, başlık içerik alanı genişliğini anketin yerleştirildiği HTML öğesine sığacak şekilde otomatik olarak ayarlar."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Anket başlığını ve açıklamasını içeren üstbilgi alanının piksel cinsinden genişliği."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "% değerlerini kabul eder."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Px değerlerini kabul eder."
// p.effectiveColSpan: "Column span" => "Sütun aralığı"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Anketle aynı"
// progressBarInheritWidthFrom.container: "Same as container" => "Konteyner ile aynı"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Mümkün olduğunda karşıya yüklenen dosyalar için küçük resim önizlemelerini görüntüler. Bunun yerine dosya simgelerini göstermek istiyorsanız seçimi kaldırın."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "\"Kapsayıcı ile aynı\" seçeneği, ilerleme çubuğu alan genişliğini anketin yerleştirildiği HTML öğesine sığacak şekilde otomatik olarak ayarlar."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "İlerleme çubuğu alanı genişliği"
// maskType.none: "None" => "Hiç kimse"
// maskType.pattern: "Pattern" => "Desen"
// maskType.numeric: "Numeric" => "Sayısal"
// maskType.datetime: "Date and Time" => "Tarih ve Saat"
// maskType.currency: "Currency" => "Para birimi"

// inputTextAlignment.auto: "Auto" => "Otomatik"
// inputTextAlignment.left: "Left" => "Sol"
// inputTextAlignment.right: "Right" => "Sağ"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Alan içinde giriş değerinin nasıl hizalanacağını seçin. Varsayılan ayar olan \"Otomatik\", para birimi veya sayısal maskeleme uygulanmışsa giriş değerini sağa, uygulanmıyorsa sola hizalar."
// p.inputTextAlignment: "Input value alignment" => "Giriş değeri hizalaması"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "İlerleme çubuğunu gösterme"
// paneldynamic.showProgressBar: "Show the progress bar" => "İlerleme çubuğunu gösterme"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "İlerleme çubuğu hizalaması"
// pv.carousel: "Carousel" => "Atlıkarınca"
// progressBarLocation.top: "Top" => "Sayfanın Üstü"
// progressBarLocation.bottom: "Bottom" => "Dip"
// progressBarLocation.topBottom: "Top and bottom" => "Üst ve alt"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Seçim seçeneklerini çok sütunlu bir düzende düzenler. 0 olarak ayarlandığında, seçenekler tek bir satırda görüntülenir. -1 olarak ayarlandığında, gerçek değer üst matrisin \"İç içe sütun sayısı\" özelliğinden devralınır."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube bağlantıları desteklenmemektedir."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Formunuzu yapılandırmaya başlayın"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Anket ayarlarını keşfetmek için herhangi bir kategori simgesini tıklayın. Tasarım yüzeyine bir anket öğesi eklediğinizde ek ayarlar kullanılabilir hale gelir."
// pe.caseInsensitive: "Case insensitive" => "Büyük/küçük harfe duyarlı değil"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Normal ifadedeki büyük ve küçük harflerin eşdeğer olarak kabul edilmesi gerekip gerekmediğini seçin."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Formunuz boş"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Formunuz boş"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklayın."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Araç kutusundan bir öğeyi sürükleyin veya aşağıdaki düğmeyi tıklayın."
// ed.previewPlaceholderTitle: "No preview" => "Önizleme yok"
// ed.previewPlaceholderTitleMobile: "No preview" => "Önizleme yok"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Anket herhangi bir görünür unsur içermiyor."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Anket herhangi bir görünür unsur içermiyor."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Çevrilecek dize yok"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Çevrilecek dize yok"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Formunuza öğeler ekleyin veya araç çubuğundaki dizeler filtresini değiştirin."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Formunuza öğeler ekleyin veya araç çubuğundaki dizeler filtresini değiştirin."
// lg.logicPlaceholderTitle: "No logical rules" => "Mantıksal kural yok"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Mantıksal kural yok"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Anketin akışını özelleştirmek için bir kural oluşturun."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Anketin akışını özelleştirmek için bir kural oluşturun."
// pe.showTimer: "Use a timer" => "Bir zamanlayıcı kullanın"
// theme.advancedMode: "Advanced mode" => "Gelişmiş mod"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Sayfadaki bir zamanlayıcının konumunu ayarlar."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "0 olarak ayarlandığında, üstbilginin içeriğine uyum sağlamak için yükseklik otomatik olarak hesaplanır."
// p.mobileHeight: "Height on smartphones" => "Akıllı telefonlarda yükseklik"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Etkinleştirildiğinde, anketin üst kısmı başlığın alt kısmıyla kaplanır."
// ed.creatorSettingTitle: "Creator Settings" => "İçerik Oluşturucu Ayarları"
// tabs.accentColors: "Accent colors" => "Vurgu renkleri"
// tabs.scaling: "Scaling" => "Ölçekleme"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Bu panelde iç içe yerleştirilmiş sorulara numaralar atar."
// creatortheme.--sjs-special-background: "Surface background" => "Yüzey arka planı"
// creatortheme.--sjs-primary-background-500: "Primary" => "Birincil"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "İkincil"
// creatortheme.surfaceScale: "Surface" => "Yüzey"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Kullanıcı arayüzü"
// creatortheme.fontScale: "Font" => "Yazı tipi"
// names.sc2020: "Survey Creator 2020" => "Anket Oluşturucu 2020"
// names.default-light: "Light" => "Işık"
// names.default-dark: "Dark" => "Koyu"
// names.default-contrast: "Contrast" => "Karşıtlık"
// panel.showNumber: "Number this panel" => "Bu paneli numaralandırın"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Yanıtlayan geçerli sayfadaki tüm soruları yanıtladıktan sonra anketin otomatik olarak sonraki sayfaya ilerlemesini isteyip istemediğinizi seçin. Bu özellik, sayfadaki son soru açık uçluysa veya birden fazla yanıta izin veriyorsa uygulanmaz."
// autocomplete.name: "Full Name" => "Adınız ve Soyadınız"
// autocomplete.honorific-prefix: "Prefix" => "Önek"
// autocomplete.given-name: "First Name" => "Ad"
// autocomplete.additional-name: "Middle Name" => "İkinci İsim"
// autocomplete.family-name: "Last Name" => "Soyadı"
// autocomplete.honorific-suffix: "Suffix" => "Sonek"
// autocomplete.nickname: "Nickname" => "Lakap"
// autocomplete.organization-title: "Job Title" => "İş Ünvanı"
// autocomplete.username: "User Name" => "Kullanıcı Adı"
// autocomplete.new-password: "New Password" => "Yeni Şifre"
// autocomplete.current-password: "Current Password" => "Mevcut Şifre"
// autocomplete.organization: "Organization Name" => "Kuruluş Adı"
// autocomplete.street-address: "Full Street Address" => "Açık Adres"
// autocomplete.address-line1: "Address Line 1" => "Adres Satırı 1"
// autocomplete.address-line2: "Address Line 2" => "Adres Satırı 2"
// autocomplete.address-line3: "Address Line 3" => "Adres Satırı 3"
// autocomplete.address-level4: "Level 4 Address" => "Seviye 4 Adres"
// autocomplete.address-level3: "Level 3 Address" => "Seviye 3 Adres"
// autocomplete.address-level2: "Level 2 Address" => "Seviye 2 Adres"
// autocomplete.address-level1: "Level 1 Address" => "Seviye 1 Adres"
// autocomplete.country: "Country Code" => "Ülke Kodu"
// autocomplete.country-name: "Country Name" => "Ülke Adı"
// autocomplete.postal-code: "Postal Code" => "Posta Kodu"
// autocomplete.cc-name: "Cardholder Name" => "Kart Sahibinin Adı"
// autocomplete.cc-given-name: "Cardholder First Name" => "Kart Sahibinin Adı"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Kart Sahibinin İkinci Adı"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Kart Sahibinin Soyadı"
// autocomplete.cc-number: "Credit Card Number" => "Kredi Kartı Numarası"
// autocomplete.cc-exp: "Expiration Date" => "Son kullanma tarihi"
// autocomplete.cc-exp-month: "Expiration Month" => "Son kullanma ayı"
// autocomplete.cc-exp-year: "Expiration Year" => "Son kullanma yılı"
// autocomplete.cc-csc: "Card Security Code" => "Kart Güvenlik Kodu"
// autocomplete.cc-type: "Credit Card Type" => "Kredi Kartı Türü"
// autocomplete.transaction-currency: "Transaction Currency" => "İşlem Para Birimi"
// autocomplete.transaction-amount: "Transaction Amount" => "İşlem Tutarı"
// autocomplete.language: "Preferred Language" => "Tercih Edilen Dil"
// autocomplete.bday: "Birthday" => "Doğum günü"
// autocomplete.bday-day: "Birthday Day" => "Doğum Günü"
// autocomplete.bday-month: "Birthday Month" => "Doğum Günü Ayı"
// autocomplete.bday-year: "Birthday Year" => "Doğum Günü Yılı"
// autocomplete.sex: "Gender" => "Cinsiyet"
// autocomplete.url: "Website URL" => "Web Sitesi URL'si"
// autocomplete.photo: "Profile Photo" => "Profil Fotoğrafı"
// autocomplete.tel: "Telephone Number" => "Telefon numarası"
// autocomplete.tel-country-code: "Country Code for Phone" => "Telefon için Ülke Kodu"
// autocomplete.tel-national: "National Telephone Number" => "Ulusal Telefon Numarası"
// autocomplete.tel-area-code: "Area Code" => "Alan kodu"
// autocomplete.tel-local: "Local Phone Number" => "Yerel Telefon Numarası"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Yerel Telefon Öneki"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Yerel Telefon Soneki"
// autocomplete.tel-extension: "Phone Extension" => "Telefon Uzantısı"
// autocomplete.email: "Email Address" => "E-posta Adresi"
// autocomplete.impp: "Instant Messaging Protocol" => "Anlık Mesajlaşma Protokolü"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Sorular için genişletme/daraltma durumunu kilitle"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Henüz hiç sayfanız yok"
// pe.addNew@pages: "Add new page" => "Yeni sayfa ekle"
// ed.zoomInTooltip: "Zoom In" => "Yakınlaştırma"
// ed.zoomOutTooltip: "Zoom Out" => "Uzaklaştırma"
// tabs.surfaceBackground: "Surface Background" => "Yüzey Arka Planı"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Varsayılan olarak son girişteki yanıtları kullan"
// colors.gray: "Gray" => "Gri"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Gezinme düğmeleri hizalaması"
// pv.allQuestions: "Show all questions" => "Tüm soruları göster"
// pv.answeredQuestions: "Show answered questions only" => "Yalnızca yanıtlanmış soruları göster"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Sayfadaki gezinme düğmelerinin konumunu ayarlar."
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Aşağıdaki matris sütunundaki veya panel sorusundaki değerleri seçim kimlikleri olarak kullanın"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Aşağıdaki matris sütununda veya panel sorusunda yer alan değerleri seçim metinleri olarak kullanın"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "Tekli ve çok seçimli soru tiplerinde, her seçim seçeneğinin bir kimliği ve görünen değeri vardır. Bu ayar, kimlikleri hangi matris, sütun veya panel sorusunun sağlaması gerektiğini belirtir."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "Tekli ve çok seçimli soru tiplerinde, her seçim seçeneğinin bir kimliği ve görünen değeri vardır. Bu ayar, hangi matris sütun veya panel sorusunun görüntü metinlerini sağlaması gerektiğini belirtir."
// pe.progressBarLocation: "Progress bar alignment" => "İlerleme çubuğu hizalaması"
// progressBarLocation.topbottom: "Top and bottom" => "Üst ve alt"
// progressBarLocation.aboveheader: "Above the header" => "Başlığın üstünde"
// progressBarLocation.belowheader: "Below the header" => "Başlığın altında"
// progressBarLocation.off: "Hidden" => "Gizli"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "İlerleme çubuğunun konumunu ayarlar. \"Otomatik\" değeri, anket başlığının üstünde veya altında ilerleme çubuğunu görüntüler."
// survey.readOnly: "Make the survey read-only" => "Anketi salt okunur hale getirin"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Yanıtlayanların anketinizi doldurmasını engellemek isteyip istemediğinizi seçin."
// paneldynamic.showNumber: "Number the panel" => "Paneli numaralandırma"
// question.showNumber: "Number this question" => "Bu soruyu numaralandırın"
// pe.previewMode: "Preview mode" => "Önizleme modu"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Izgara düzenini etkinleştirin"
// pe.maskSettings: "Mask settings" => "Maske ayarları"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Satır genişletme hata iletisi hizalaması"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Ayrıntı bölümlerinde iç içe geçmiş sorular için hata mesajlarının konumunu ayarlar. \"Devral\" seçeneği, \"Hata mesajı hizalaması\" özelliğindeki ayarı uygular."
// pe.gridLayoutColumns: "Grid layout columns" => "Izgara düzeni sütunları"
// pe.startPageTitlePlaceholder: "Start Page" => "Başlangıç Sayfası"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Etkili genişlik, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Soru başlığı genişliği, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Henüz düzen sütunlarına sahip değilsiniz"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Bu panelin ızgara mizanpajı içinde kaç sütuna yayılacağını belirtir."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Bu tablo, panel içindeki her bir ızgara sütununu yapılandırmanıza olanak tanır. Bir satırdaki maksimum öğe sayısına bağlı olarak her sütun için genişlik yüzdesini otomatik olarak ayarlar. Tablo düzenini özelleştirmek için bu değerleri manuel olarak ayarlayın ve her sütundaki tüm sorular için başlık genişliğini tanımlayın."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Anket Oluşturucu, düzeni kontrol etmek için form öğelerinin satır içi genişliklerini manuel olarak ayarlamanıza olanak tanır. Bu istenen sonucu vermezse, sütun tabanlı bir sistem kullanarak öğeleri oluşturan yapıların ızgara düzenini etkinleştirebilirsiniz. Düzen sütunlarını yapılandırmak için bir sayfa veya panel seçin ve \"Soru Ayarları\" → \"Izgara sütunları\" tablosunu kullanın. Bir sorunun kaç sütuna yayılacağını ayarlamak için soruyu seçin ve \"Düzen\" → \"Sütun aralığı\" alanında istediğiniz değeri ayarlayın."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Bu sorunun ızgara düzeni içinde kaç sütuna yayılacağını belirtir."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Bu tablo, sayfadaki her bir ızgara sütununu yapılandırmanıza olanak tanır. Bir satırdaki maksimum öğe sayısına bağlı olarak her sütun için genişlik yüzdesini otomatik olarak ayarlar. Tablo düzenini özelleştirmek için bu değerleri manuel olarak ayarlayın ve her sütundaki tüm sorular için başlık genişliğini tanımlayın."

// ed.expandTooltip: "Expand" => "Genişletmek"
// ed.collapseTooltip: "Collapse" => "Çökmek"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Ör.: 100 piksel"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Tüm öğe etiketleri için tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// ed.zoom100Tooltip: "Zoom to 100%" => "%100 yakınlaştırma"
// ed.addLanguageTooltip: "Add Language" => "Dil Ekle"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Soru yorumları için metin alanlarında görüntülenen satır sayısını ayarlar. Giriş daha fazla satır kaplıyorsa, kaydırma çubuğu görünür."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Dinamik metinler için varsayılan görüntüleme değeri"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "HTML sorularında ve anket öğelerinin dinamik başlıklarında ve açıklamalarında, soru değeri boş olduğunda görüntülenen bir değer."
// showQuestionNumbers.recursive: "Recursive numbering" => "Özyinelemeli numaralandırma"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Soru başlığı genişliği"
// pe.allowCustomChoices: "Allow custom choices" => "Özel seçimlere izin ver"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Soru başlıkları soru kutularının soluna hizalandığında tutarlı genişlik ayarlar. CSS değerlerini (px, %, in, pt, vb.) kabul eder."
// page.name: "A page ID that is not visible to respondents." => "Yanıtlayanlar tarafından görülemeyen bir sayfa kimliği."
// page.description: "Type a page subtitle." => "Bir sayfa alt başlığı yazın."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "İlerleme çubuğundaki veya içindekiler tablosundaki (TOC) bir gezinti düğmesinde görüntülenen resim yazısı. Bu alanı boş bırakırsanız, gezinme düğmesi sayfa başlığını veya sayfa adını kullanır. İlerleme çubuğunu veya İçindekiler'i etkinleştirmek için \"Anket\" → \"Gezinme\"ye gidin."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "İstenen seçenek açılır menüde mevcut değilse, yanıtlayanların kendi seçimlerini eklemesine izin vermek için bunu seçin. Özel seçimler yalnızca geçerli tarayıcı oturumu süresince geçici olarak saklanacaktır."