import { editorLocalization } from "survey-creator-core";

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
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Varyayılan ({0})",
    survey: "Anket",
    settings: "Anket Ayarları",
    settingsTooltip: "Anket ayarlarını aç",
    surveySettings: "Anket Ayarları",
    surveySettingsTooltip: "Anket ayarlarını açma",
    themeSettings: "Tema Ayarları",
    themeSettingsTooltip: "Tema ayarlarını açma",
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
    testSurvey: "Anketi Test Et",
    themeSurvey: "Temalar",
    defaultV2Theme: "Temerrüt",
    modernTheme: "Modern",
    defaultTheme: "Varsayılan (eski)",
    testSurveyAgain: "Anketi Tekrar Test Et",
    testSurveyWidth: "Anket genişliği: ",
    navigateToMsg: "Şuraya git:",
    logic: "Mantıksal Anket",
    embedSurvey: "Gömülü Anket",
    translation: "Çeviri",
    saveSurvey: "Anketi Kaydet",
    saveSurveyTooltip: "Anketi Kaydet",
    saveTheme: "Temayı Kaydet",
    saveThemeTooltip: "Temayı Kaydet",
    designer: "Anket Tasarımı",
    jsonEditor: "JSON Editor",
    jsonHideErrors: "Hataları gizleme",
    jsonShowErrors: "Hataları göster",
    undo: "Geri",
    redo: "İleri",
    undoTooltip: "Son değişikliği geri al",
    redoTooltip: "Son değişikliği ileri al",
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
    propertyGridFilteredTextPlaceholder: "Aramak için yazın...",
    propertyGridNoResultsFound: "Sonuç bulunamadı",
    toolboxGeneralCategory: "Genel",
    toolboxChoiceCategory: "Seçim Soruları",
    toolboxTextCategory: "Metin Girişi Soruları",
    toolboxContainersCategory: "Konteyner",
    toolboxMatrixCategory: "Matris Soruları",
    toolboxMiscCategory: "Misc",
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
    imagePlaceHolder: "Bir resmi buraya sürükleyip bırakın veya aşağıdaki düğmeyi tıklayın ve yüklemek için bir resim seçin",
    imageChooseImage: "Resim Seç",
    addNewTypeQuestion: "{0} ekle", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "Otomatik",
    choices_Item: "Madde ",
    lg: {
      addNewItem: "Yeni Kural Ekle",
      empty_tab: "Anketin akışını özelleştirmek için bir kural oluşturun.",
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
      question_resetValueText: "Soru için sıfırlama değeri: {0}",
      question_setValueText: "Değer atayın: Soruya {1}: {0}",
      column_visibilityText: "Soru {1} sütununu {0} görünür hale getirme", //{0} column name, {1} question name
      column_enableText: "Sütunun {0} soru {1} etkinleştirin", //{0} column name, {1} question name
      column_requireText: "Sütun {0} soru {1} gerekli hale getirmek", //{0} column name, {1} question name
      column_resetValueText: "Sütun için hücre değerini sıfırla: {0}",
      column_setValueText: "Hücre değeri atayın: Sütuna {1}: {0}",
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
    expressionHelp: "Lütfen mantıksal ifade giriniz. Soru değerlerine erişmek için süslü parantez kullanabilirsiniz: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
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
    "addNew@choices": "Bir seçenek ekleyin",
    expressionIsEmpty: "Mantıksal ifade boş",
    value: "Değer",
    text: "Yazı",
    rowid: "Satır ID",
    imageLink: "Resim linki",
    columnEdit: "Kolonu düzenle: {0}",
    itemEdit: "Eleman düzenle: {0}",
    url: "URL",
    path: "Yol",
    valueName: "Değer adı",
    choicesbyurl: {
      valueName: "Aşağıdaki JSON alanından değerler alın"
    },
    titleName: "Başlık adı",
    imageLinkName: "Aşağıdaki JSON alanından resim URL'leri alın",
    allowEmptyResponse: "Boş cevaba izin ver",
    titlePlaceholder: "Başlık",
    surveyTitlePlaceholder: "Anket başlığı",
    pageTitlePlaceholder: "Sayfa başlığı",
    descriptionPlaceholder: "Bir açıklama giriniz",
    surveyDescriptionPlaceholder: "Anket açıklaması giriniz",
    pageDescriptionPlaceholder: "Sayfa açıklaması giriniz",
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
    visible: "Görünür?",
    isRequired: "Zorunlu?",
    markRequired: "Gerektiği gibi işaretleyin",
    removeRequiredMark: "Gerekli işareti kaldırın",
    isAllRowRequired: "Tüm satırlar zorunlu",
    eachRowUnique: "Satırlarda yinelenen yanıtları önleme",
    requiredErrorText: "Zorunlu hata yazısı",
    startWithNewLine: "Yeni satırla başla?",
    rows: "Satır sayısı",
    cols: "Kolon sayısı",
    placeholder: "Giriş varsayılan içeriği",
    showPreview: "Resim önizleme gösteriliyor mu?",
    storeDataAsText: "Dosya içeriğini JSON sonucunda metin olarak depola",
    maxSize: "Bayt cinsinden maksimum dosya boyutu",
    imageHeight: "Resim yüksekliği",
    imageWidth: "Resim genişliği",
    rowCount: "Satır sayısı",
    columnLayout: "Kolon yerleşimi",
    addRowLocation: "Satır butonu konumu ekle",
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
    mode: "Mod (düzenlebilir/düzenlenemez)",
    clearInvisibleValues: "Görünmez değerleri sil",
    cookieName: "Çerez adı (anketi yerel olarak iki kez devre dışı bırakmak için)",
    sendResultOnPageNext: "Bir sonraki sayfada anket sonuçlarını gönder",
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
    showPrevButton: "Önceki butonu göster (kullanıcı önceki sayfaya dönebilir)",
    firstPageIsStarted: "Anketteki ilk sayfa bir başlangıç sayfasıdır.",
    showCompletedPage: "Tamamlanan sayfayı en sonunda göster (HTML)",
    goNextPageAutomatic: "Tüm soruları cevaplarken otomatik olarak sonraki sayfaya git",
    showProgressBar: "İlerleme çubuğunu göster",
    questionTitleLocation: "Soru başlığı konumu",
    requiredText: "Zorunlu soru sembolü",
    questionStartIndex: "Soru indeksi (1, 2 veya 'A', 'a' gibi)",
    showQuestionNumbers: "Soru numarasını göster",
    questionTitleTemplate: "Soru başlığı şablonu, varsayılan değer: '{no}. {require} {title}'",
    questionErrorLocation: "Soru hatası konumu",
    focusFirstQuestionAutomatic: "İlk soruyu sayfayı değiştirmeye odakla",
    questionsOrder: "Sayfadaki öğelerin sırası",
    maxTimeToFinish: "Anketi bitirmek için maksimum süre",
    maxTimeToFinishPage: "Ankette bir sayfayı bitirmek için maksimum süre",
    image: {
      imageHeight: "Görüntü yüksekliği (CSS tarafından kabul edilen değerlerde)",
      imageWidth: "Resim genişliği (CSS tarafından kabul edilen değerlerde)"
    },
    // survey templates
    survey: {
      title: "Başlık"
    },
    page: {
      title: "Başlık",
      maxTimeToFinish: "Sayfayı bitirmek için zaman sınırı (saniye cinsinden)"
    },
    question: {
      page: "Ana sayfa"
    },
    panel: {
      page: "Ana sayfa"
    },
    showTimerPanel: "Zamanlayıcı panelini göster",
    showTimerPanelMode: "Zamanlayıcı paneli modunu göster",
    renderMode: "İşleme modu",
    allowAddPanel: "Panel eklemeye izin ver",
    allowRemovePanel: "Panel silmeye izin ver",
    noEntriesText: "Boş giriş metni",
    panelAddText: "Panel ekleme metni",
    panelRemoveText: "Panel silme metni",
    isSinglePage: "Tüm öğeleri tek bir sayfada göster",
    html: "Html",
    expression: "Mantıksal İfade",
    setValue: "Cevap",
    dataFormat: "Görüntü formatı",
    allowAddRows: "Satır eklemeye izin ver",
    allowRemoveRows: "Satırların kaldırılmasına izin ver",
    allowRowsDragAndDrop: "Satır sürükleyip bırakmaya izin ver",
    responsiveImageSizeHelp: "Tam görüntü genişliğini veya yüksekliğini belirtirseniz uygulanmaz.",
    minImageWidth: "Minimum görüntü genişliği",
    maxImageWidth: "Maksimum görüntü genişliği",
    minImageHeight: "Minimum görüntü yüksekliği",
    maxImageHeight: "Maksimum görüntü yüksekliği",
    minValue: "Minimum değer",
    maxValue: "Maksimum değer",
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
    maxOthersLength: "Maksimum diğerleri uzunluğu",
    autoGrowComment: "Gerekirse yorum alanını otomatik olarak genişletin",
    allowResizeComment: "Kullanıcıların metin alanlarını yeniden boyutlandırmasına izin verme",
    textUpdateMode: "Metin sorusu değerini güncelleme",
    focusOnFirstError: "İlk hataya odaklan",
    checkErrorsMode: "Çalıştırma doğrulaması",
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
    paneldynamic: {
      confirmDelete: "Panel silme işlemini onaylama"
    },
    panelCount: "İlk panel sayısı",
    minPanelCount: "Minimum panel sayısı",
    maxPanelCount: "Maksimum panel sayısı",
    panelsState: "İç panel genişletme durumu",
    templateDescription: "Açıklama şablonu",
    templateTitle: "Başlık şablonu",
    panelPrevText: "Önceki Panel düğmesi araç ipucu",
    panelNextText: "Sonraki Panel düğmesi araç ipucu",
    showRangeInProgress: "İlerleme çubuğunu göster",
    templateTitleLocation: "Soru başlığı konumu",
    panelRemoveButtonLocation: "Panel düğmesinin konumunu kaldır",
    hideIfRowsEmpty: "Satır yoksa soruyu gizleme",
    hideColumnsIfEmpty: "Satır yoksa sütunları gizleme",
    rateValues: "Özel fiyat değerleri",
    rateCount: "Oran sayısı",
    autoGenerate: "Fiyat değerleri nasıl belirlenir?",
    hideIfChoicesEmpty: "Seçenek içermiyorsa soruyu gizleme",
    hideNumber: "Soru numarasını gizle",
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
    showClearButton: "Temizleme butonunu göster",
    showNumber: "Panel numarasını göster",
    logoWidth: "Logo genişlik",
    logoHeight: "Logo uzunluk",
    readOnly: "Salt okunur",
    enableIf: "Şu durumlarda düzenlenebilir",
    emptyRowsText: "\"Satır yok\" iletisi",
    size: "Giriş alanı boyutu (karakter cinsinden)",
    separateSpecialChoices: "Ayrı özel seçenekler (Yok, Diğer, Tümünü Seç)",
    choicesFromQuestion: "Aşağıdaki sorudan seçenekleri kopyalama",
    choicesFromQuestionMode: "Hangi seçenekleri kopyalamalıyım?",
    showCommentArea: "Yorumu var",
    commentPlaceholder: "Yorum alanı yer tutucusu",
    displayRateDescriptionsAsExtremeItems: "Hız açıklamalarını aşırı değerler olarak görüntüleme",
    rowsOrder: "Satır sırası",
    columnsLayout: "Sütun düzeni",
    columnColCount: "İç içe geçmiş sütun sayısı",
    state: "Panel genişletme durumu",
    correctAnswer: "Doğru Cevap",
    defaultPanelValue: "Varsayılan Değerler",
    cells: "Hücre Metinleri",
    keyName: "Anahtar sütunu",
    itemvalue: {
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
    tabs: {
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
      layout: "Şablon",
      data: "Veri",
      validation: "Doğrulayıcı",
      cells: "Hücreler",
      showOnCompleted: "Tamamlandı Göster",
      logo: "Anket Başlığında Logo",
      slider: "Kaydırıcı",
      expression: "İfade",
      others: "Diğer"
    },
    editProperty: "Özelliği düzenle '{0}'",
    items: "[ Elemanlar: {0} ]",
    choicesVisibleIf: "Seçenekler şu durumlarda görünür:",
    choicesEnableIf: "Seçenekler şu durumlarda seçilebilir:",
    columnsEnableIf: "Sütunlar şu durumlarda görünür:",
    rowsEnableIf: "Satırlar şu durumlarda görünür:",
    indent: "Girinti ekleme",
    panel: {
      indent: "Dış girintiler ekleme"
    },
    innerIndent: "İç girintiler ekleme",
    defaultValueFromLastRow: "Son satırdaki varsayılan değerleri alma",
    defaultValueFromLastPanel: "Son panelden varsayılan değerleri alma",
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
    signatureWidth: "İmza genişliği",
    signatureHeight: "İmza yüksekliği",
    verticalAlign: "Dikey hizalama",
    alternateRows: "Alternatif satırlar",
    columnsVisibleIf: "Sütunlar şu durumlarda görünür:",
    rowsVisibleIf: "Satırlar şu durumlarda görünür:",
    otherPlaceholder: "Yorum alanı yer tutucusu",
    signaturepad: {
      showPlaceholder: "Yer tutucuyu gösterme",
      placeholder: "Yer tutucu metin",
      signatureWidth: "İmza alanı genişliği",
      signatureHeight: "İmza alanı yüksekliği",
      signatureAutoScaleEnabled: "İmza alanını otomatik ölçeklendirme",
      penMinWidth: "Minimum kalem genişliği",
      penMaxWidth: "Maksimum kalem genişliği"
    },
    filePlaceholder: "Dosya yer tutucu metni",
    photoPlaceholder: "Fotoğraf yer tutucu metni",
    fileOrPhotoPlaceholder: "Dosya veya fotoğraf yer tutucu metni",
    rateType: "Fiyat türü"
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
    decimal: "On -da -lık",
    currency: "para birimi",
    percent: "yüzde",
    firstExpanded: "firstExpanded",
    off: "Kapalı",
    onpanel: "Her panelde başlayın",
    onPanel: "Panelde",
    onSurvey: "Ankette",
    list: "Liste",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "Sekmeler",
    horizontal: "Yatay",
    vertical: "Dikey",
    top: "Üst",
    bottom: "Alt",
    topBottom: "Üst ve alt",
    both: "Her ikiside",
    left: "Sol",
    right: "Sağ",
    leftRight: "Sol ve sağ",
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
    on: "Açık",
    onPage: "Sayfada",
    edit: "Düzenle",
    display: "Görüntüle",
    onComplete: "Tamamlandığında",
    onHidden: "Gizlendiğinde",
    onHiddenContainer: "Soru veya paneli/sayfası gizlendiğinde",
    contain: "Kapsamak",
    cover: "Örtmek",
    fill: "Doldurmak",
    clearInvisibleValues: {
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
    all: "Tümü",
    page: "Sayfa",
    survey: "Anket",
    onNextPage: "Sonraki sayfada",
    onValueChanged: "Değer değiştiğinde",
    onValueChanging: "Bir yanıt değiştirilmeden önce",
    standard: "Standart",
    singlePage: "Tek sayfa",
    questionPerPage: "Sayfa başına soru",
    noPreview: "Önizleme yok",
    showAllQuestions: "Tüm soruları göster",
    showAnsweredQuestions: "Cevaplanan soruları göster",
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
    showNavigationButtons: {
      none: "Gizli"
    },
    showProgressBar: {
      off: "Gizli"
    },
    showTimerPanel: {
      none: "Gizli"
    },
    showTimerPanelMode: {
      all: "Her ikisi"
    },
    detailPanelMode: {
      none: "Gizli"
    },
    addRowLocation: {
      default: "Matris düzenine bağlıdır"
    },
    panelsState: {
      default: "Kullanıcılar panelleri genişletemez veya daraltamaz",
      collapsed: "Tüm paneller daraltıldı",
      expanded: "Tüm paneller genişletildi"
    },
    widthMode: {
      auto: "Otomatik",
      static: "Duruk",
      responsive: "Duyarlı"
    },
    imageFit: {
      none: "Hiç kimse",
      contain: "Kapsamak",
      cover: "Örtmek",
      fill: "Doldurmak"
    },
    contentMode: {
      auto: "Otomatik",
      image: "Resim",
      video: "Video",
      youtube: "Videolar"
    },
    displayMode: {
      auto: "Otomatik",
      buttons: "Düğme",
      dropdown: "Açılır menü"
    },
    rateColorMode: {
      default: "Temerrüt"
    },
    autoGenerate: {
      "true": "Oluşturmak",
      "false": "Manuel olarak girme"
    },
    rateType: {
      labels: "Etiket",
      stars: "Yıldız",
      smileys: "Suratlar"
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
  pehelp: {
    cookieName: "Çerezler, kullanıcıların aynı anketi iki kez doldurmasını engeller.",
    size: "Giriş alanının görünür alanını yeniden boyutlandırır. Giriş uzunluğunu sınırlamak için lütfen <b>Doğrulama → Maksimum uzunluk</b> ayarını kullanın.",
    format: "{0} gerçek değer için yer tutucu olarak kullanın.",
    totalText: "Yalnızca en az bir sütunda Toplam türü veya Toplam ifadesi olduğunda görünür.",
    acceptedTypes: "Daha fazla bilgi için [accept](https://www.w3schools.com/tags/att_input_accept.asp) özelliğinin açıklamasına bakın.",
    columnColCount: "Yalnızca Radiogroup ve Checkbox hücre tipleri için geçerlidir.",
    autocomplete: "Daha fazla bilgi için [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) özellik açıklamasına bakın.",
    valueName: "Bu özelliği ayarlamazsanız, yanıt Name özelliği tarafından belirtilen bir alanda depolanır.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Belirtilen sütun aynı değerleri içeriyorsa, anket \"Benzersiz olmayan anahtar değeri\" hatasını atar.",
    filePlaceholder: "\"Kaynak türü\" \"Yerel dosyalar\" olduğunda veya fotoğraf makinesi kullanılamadığında geçerlidir",
    photoPlaceholder: "\"Kaynak türü\" \"Kamera\" olduğunda geçerlidir.",
    fileOrPhotoPlaceholder: "\"Kaynak türü\" \"Yerel dosyalar veya kamera\" olduğunda geçerlidir."
  },
  // Properties
  p: {
    title: {
      name: "başlık",
      title: "'Ad' ile aynıysa boş bırakın"
    },
    multiSelect: "Çoklu Seçim",
    showLabel: "Başlığı göster",
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
    titleLocation: "Başlık konumu",
    descriptionLocation: "Açıklama konumu",
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
    isUnique: "Benzersizdir",
    showInMultipleColumns: "Birden çok sütunda göster",
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
    itemSize: "Öğe boyutu",
    elements: "Öğe",
    content: "İçerik",
    navigationButtonsVisibility: "Navigasyon butonları görünürlüğü",
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
    allowCameraAccess: "Kamera erişimine izin ver",
    scaleColorMode: "Renk modunu ölçekle",
    rateColorMode: "Renk modunu ayarla",
    templateTabTitle: "Şablon sekmesi başlığı",
    templateVisibleIf: "Şablon şu durumlarda görülebilir:",
    copyDisplayValue: "Görüntüleme değerini kopyala"
  },
  theme: {
    "--background": "Arka plan rengi",
    "--background-dim-light": "Arka plan loş ışık rengi",
    "--primary-foreground": "Birincil ön plan rengi",
    "--foreground": "Ön plan rengi",
    "--base-unit": "Temel ünite",
    advancedMode: "Gelişmiş mod",
    groupGeneral: "Genel",
    groupHeader: "Üstbilgi",
    groupBackground: "Arka plan",
    groupAppearance: "Görünüş",
    themeName: "Tema",
    themeMode: "Soru görünümü",
    themeModePanels: "Temerrüt",
    themeModeLightweight: "Panelsiz",
    themePaletteLight: "Işık",
    themePaletteDark: "Koyu",
    primaryColor: "Vurgu rengi",
    primaryDefaultColor: "Temerrüt",
    primaryDarkColor: "Hover",
    primaryLightColor: "Seçilmiş",
    coverTitleForecolor: "Başlık ön rengi",
    coverDescriptionForecolor: "Açıklama ön renk",
    coverOverlapEnabled: "Örtüş",
    backgroundDimColor: "Arka plan rengi",
    backgroundImage: "Arka plan resmi",
    backgroundImageFitAuto: "Otomatik",
    backgroundImageFitCover: "Örtmek",
    backgroundImageFitContain: "Kapsamak",
    backgroundImageFitFill: "Uzatmak",
    backgroundImageFitTile: "Kiremit",
    backgroundOpacity: "Opak -lık",
    backgroundImageAttachmentFixed: "Sabit",
    backgroundImageAttachmentScroll: "Tomar",
    panelBackgroundTransparency: "Panel arka plan opaklığı",
    questionBackgroundTransparency: "Soru arka planı opaklığı",
    questionTitle: "Soru başlığı yazı tipi",
    editorPanel: "Giriş öğesi",
    backgroundCornerRadius: "Arka plan ve köşe yarıçapı",
    backcolor: "Varsayılan arka plan",
    hovercolor: "Arka planın üzerine gelin",
    borderDecoration: "Bordür dekorasyonu",
    accentBackground: "Aksan arka planı",
    accentForeground: "Vurgu ön planı",
    primaryForecolor: "Varsayılan renk",
    primaryForecolorLight: "Devre dışı bırakılmış renk",
    colorsTitle: "Renk",
    font: "Yazı tipi",
    lines: "Satır",
    borderDefault: "Koyu",
    borderLight: "Çakmak",
    fontFamily: "Font ailesi",
    fontSize: "Yazı tipi boyutu",
    color: "Renk",
    placeholderColor: "Yer tutucu rengi",
    size: "Boyut",
    fontWeightRegular: "Düzenli",
    fontWeightHeavy: "Ağır",
    fontWeightSemiBold: "Yarı kalın",
    fontWeightBold: "Kalın",
    scale: "Ölçeklemek",
    cornerRadius: "Köşe yarıçapı",
    surveyTitle: "Anket başlığı yazı tipi",
    surveyDescription: "Anket açıklaması yazı tipi",
    pageTitle: "Sayfa başlığı yazı tipi",
    titleFont: "Başlık yazı tipi",
    descriptionFont: "Açıklama yazı tipi",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Gölge Efekti Ekle",
    opacity: "Opak -lık",
    boxShadowBlur: "Bulanıklaştır",
    boxShadowSpread: "Yaymak",
    boxShadowDrop: "Damla",
    boxShadowInner: "İç",
    shadow: "Gölge efektleri",
    headerView: "Görünüm",
    headerViewBasic: "Temel",
    headerViewAdvanced: "İleri",
    coverInheritWidthFrom: "İçerik alanı genişliği",
    coverInheritWidthFromSurvey: "Anketle aynı",
    coverInheritWidthFromContainer: "Konteynere sığdır",
    coverTextAreaWidth: "Metin genişliği",
    coverBackgroundColorSwitch: "Arka plan rengi",
    coverBackgroundColorNone: "Hiç kimse",
    coverBackgroundColorAccentColor: "Vurgu rengi",
    coverBackgroundColorCustom: "Töre",
    horizontalAlignmentLeft: "Sol",
    horizontalAlignmentCenter: "Orta",
    horizontalAlignmentRight: "Sağ",
    verticalAlignmentTop: "Sayfanın Üstü",
    verticalAlignmentMiddle: "Orta",
    verticalAlignmentBottom: "Dip",
    logoPosition: "Logo konumu",
    coverTitlePosition: "Unvan pozisyonu",
    coverDescriptionPosition: "Açıklama konumu",
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
      green: "Yeşil"
    }
  }
};

editorLocalization.locales["tr"] = turkishStrings;

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
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Sayfayı bitirmek için zaman sınırı (saniye cinsinden)"
// question.page: "Parent page" => "Ana sayfa"
// pe.noEntriesText: "Empty entries text" => "Boş giriş metni"
// pe.setValue: "Answer" => "Cevap"
// pe.dataFormat: "Image format" => "Görüntü formatı"
// pe.allowAddRows: "Allow adding rows" => "Satır eklemeye izin ver"
// pe.allowRemoveRows: "Allow removing rows" => "Satırların kaldırılmasına izin ver"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Satır sürükleyip bırakmaya izin ver"
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
// pe.panelPrevText: "Previous Panel button tooltip" => "Önceki Panel düğmesi araç ipucu"
// pe.panelNextText: "Next Panel button tooltip" => "Sonraki Panel düğmesi araç ipucu"
// pe.showRangeInProgress: "Show progress bar" => "İlerleme çubuğunu göster"
// pe.templateTitleLocation: "Question title location" => "Soru başlığı konumu"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Panel düğmesinin konumunu kaldır"
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
// pe.emptyRowsText: "\"No rows\" message" => "\"Satır yok\" iletisi"
// pe.size: "Input field size (in characters)" => "Giriş alanı boyutu (karakter cinsinden)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Ayrı özel seçenekler (Yok, Diğer, Tümünü Seç)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Aşağıdaki sorudan seçenekleri kopyalama"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Hangi seçenekleri kopyalamalıyım?"
// pe.commentPlaceholder: "Comment area placeholder" => "Yorum alanı yer tutucusu"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Hız açıklamalarını aşırı değerler olarak görüntüleme"
// pe.rowsOrder: "Row order" => "Satır sırası"
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
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Son satırdaki varsayılan değerleri alma"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Son panelden varsayılan değerleri alma"
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
// addRowLocation.default: "Depends on matrix layout" => "Matris düzenine bağlıdır"
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
// theme.groupGeneral: "General" => "Genel"
// theme.groupAdvanced: "Advanced" => "İleri"
// theme.themeName: "Theme" => "Tema"
// theme.themeMode: "Question appearance" => "Soru görünümü"
// theme.themeModePanels: "Default" => "Temerrüt"
// theme.themeModeLightweight: "Without Panels" => "Panelsiz"
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
// theme.surveyTitle: "Survey title font" => "Anket başlığı yazı tipi"
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
// theme.groupHeader: "Header" => "Üstbilgi"
// theme.coverTitleForecolor: "Title forecolor" => "Başlık ön rengi"
// theme.coverOverlapEnabled: "Overlap" => "Örtüş"
// theme.backgroundImageFitFill: "Stretch" => "Uzatmak"
// theme.backgroundImageFitTile: "Tile" => "Kiremit"
// theme.headerView: "View" => "Görünüm"
// theme.headerViewBasic: "Basic" => "Temel"
// theme.headerViewAdvanced: "Advanced" => "İleri"
// theme.coverInheritWidthFrom: "Content area width" => "İçerik alanı genişliği"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Anketle aynı"
// theme.coverInheritWidthFromPage: "Fit to page" => "Sayfaya sığdır"
// theme.coverTextAreaWidth: "Text width" => "Metin genişliği"
// theme.coverBackgroundColorSwitch: "Background color" => "Arka plan rengi"
// theme.coverBackgroundColorNone: "None" => "Hiç kimse"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Vurgu rengi"
// theme.coverBackgroundColorCustom: "Custom" => "Töre"
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
// theme.groupBackground: "Background" => "Arka plan"
// theme.groupAppearance: "Appearance" => "Görünüş"
// theme.coverDescriptionForecolor: "Description forecolor" => "Açıklama ön renk"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Temayı gerçekten sıfırlamak istiyor musunuz? Tüm özelleştirmeleriniz kaybolacak."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Evet, temayı sıfırlayın"
// theme.groupBackground: "Background" => "Arka plan"
// theme.groupAppearance: "Appearance" => "Görünüş"
// theme.coverDescriptionForecolor: "Description forecolor" => "Açıklama ön renk"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Konteynere sığdır"
// signaturepad.showPlaceholder: "Show the placeholder" => "Yer tutucuyu gösterme"
// signaturepad.placeholder: "Placeholder text" => "Yer tutucu metin"
// theme.surveyDescription: "Survey description font" => "Anket açıklaması yazı tipi"
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
// theme.coverTitlePosition: "Title position" => "Unvan pozisyonu"
// theme.coverDescriptionPosition: "Description position" => "Açıklama konumu"
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
