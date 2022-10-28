import { editorLocalization } from "survey-creator-core";

export var turkishStrings = {
  //survey templates
  survey: {
    edit: "Düzenle",
    externalHelpLink: "Nasıl anket oluşturulur izle",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Lütfen araç kutusundan bir soru sürükleyin.",
    addLogicItem: "Anket akışını özelleştirmek için bir kural oluşturun.",
    copy: "Kopyala",
    addToToolbox: "Araç kutusuna ekle",
    deletePanel: "Paneli Sil",
    deleteQuestion: "Soruyu Sil",
    convertTo: "Çevir",
    drag: "Nesne sürükleyin",
  },
  //questionTypes
  qt: {
    default: "Varsayılan",
    checkbox: "Onay Kutusu",
    comment: "Yorum",
    imagepicker: "Resim seçici",
    image: "Resim",
    dropdown: "Seçim Kıutusu",
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
    flowpanel: "Akış Paneli",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Varyayılan ({0})",
    survey: "Anket",
    settings: "Anket Ayarları",
    settingsTooltip: "Anket ayarlarını aç",
    //opjectPropertiesHeader: "Gelişmiş",
    //showObjectProperties: "Nesne Özelliklerini Göster",
    //hideObjectProperties: "Nesne Özelliklerini Gizle",
    showPanel: "Paneli Göster",
    hidePanel: "Paneli Gizle",
    //editSurvey: "Anketi Düzenle",
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
    testSurveyAgain: "Anketi Tekrar Test Et",
    testSurveyWidth: "Anket genişliği: ",
    navigateToMsg: "Şuraya git:",
    logic: "Mantıksal Anket",
    embedSurvey: "Gömülü Anket",
    translation: "Çeviri",
    saveSurvey: "Anketi Kaydet",
    saveSurveyTooltip: "Anketi Kaydet",
    designer: "Anket Tasarımı",
    jsonEditor: "JSON Editor",
    undo: "Geri",
    redo: "İleri",
    undoTooltip: "Son değişikliği geri al",
    redoTooltip: "Son değişikliği ileri al",
    options: "Seçenekler",
    generateValidJSON: "JSON Oluştur",
    generateReadableJSON: "Okunabilir JSON oluştur",
    toolbox: "Araç Kutusu",
    "property-grid": "Özellikler",
    toolboxGeneralCategory: "Genel",
    //delSelObject: "Seçili nesneyi sil",
    //editSelObject: "Seçili nesneyi düzenle",
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
    saveError: "Hata! Editor içerisi kaydedilmedi.",
    translationAddLanguage: "Çeviri için dil seçiniz",
    translationShowAllStrings: "Tüm yazıları göster",
    translationShowAllPages: "Tüm sayfaları göster",
    translationNoStrings: "Çevrilecek yazı yok. Lütfen, filtreyi değiştirin.",
    translationExportToSCVButton: "CSV dışa çıkart",
    translationImportFromSCVButton: "CSV içe aktar",
    translationMergeLocaleWithDefault: "{0} varsayılan çeviri ile sıkıştır",
    bold: "Kalın",
    italic: "Italik",
    underline: "Alt Çizgi",
    addNewQuestion: "Soru Ekle",
    //completedHtmlOnConditionItemText: "Göster Eğer:",
    lg: {
      //Logic tab strings
      page_visibilityName: "Sayfa görünürse",
      panel_visibilityName: "Panel görünürse",
      panel_enableName: "Panel aktif/pasif ise",
      question_visibilityName: "Soru görüürse",
      question_enableName: "Soru aktif/pasifse",
      question_requireName: "Soru isteğe bağlı zorunluysa",
      trigger_completeName: "Anketi tamamla",
      trigger_setvalueName: "Soru değerini güncelle",
      trigger_copyvalueName: "Soru değerini kopyala",
      trigger_skipName: "Soruyu atla",
      trigger_runExpressionName: "Varsayılan ifadeyi çalıştır",
      completedHtmlOnConditionName: "Varyalın 'Teşekkür sayfası' yazısı",

      page_visibilityDescription:
        "Mantıksal sorgu geçerli olduğu zaman sayfayı görünür yap. Aksi takdirde gizle.",
      panel_visibilityDescription:
        "Mantıksal sorgu geçerli olduğu zaman paneli görünür yap. Aksi takdirde gizle.",
      panel_enableDescription:
        "Panel oluştur ve tüm nesneleri panelin içine al. Mantıksal sorgu geçerli olduğunda paneli aktif et. Aksi takdirde tümünü pasifleştir.",
      question_visibilityDescription:
        "Mantıksal sorgu geçerli olduğunda soruyu görünür yap. Aksi takdirde gizle.",
      question_enableDescription:
        "Mantıksal sorgu geçerli olduğunda soruyu aktif yap. Aksi takdirde pasifleştir.",
      question_requireDescription:
        "Mantıksal sorgu geçerli olduğunda soruyu zorunlu olarak düzenle.",
      trigger_completeDescription:
        "Mantıksal sorgu geçerli olduğunda anketi tamamla ve son kullanıya 'Teşekkür sayfası'nı göster.",
      trigger_setvalueDescription:
        "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, değer seçilen soruya ayarlansın.",
      trigger_copyvalueDescription:
        "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, seçilen bir sorunun değeri seçilen başka bir soruya kopyalansın.",
      trigger_skipDescription:
        "Mantıksal ifade geçerli olduğunda anket seçilen soruya atlasın / odaklansın.",
      trigger_runExpressionDescription:
        "Mantksal ifade geçerli olduğunda ve özel ifade gereçli olur. İsteğe bağlı olarak bu ifade sonucunu seçilen soruya ayarlayabilirsiniz.",
      completedHtmlOnConditionDescription:
        "Eğer mantıksa ifade geçerli olursa, varsayılan ''Teşekkürler sayfası' yazısı girilen ile dğeiştirilsin.",

      itemExpressionText: "Mantıksal ifade: '{0}' geçerli olsun:", //{0} - the expression
      page_visibilityText: "{0} sayfayı görünür yap", //{0} page name
      panel_visibilityText: "{0} paneli görünür yap", //{0} panel name
      panel_enableText: "{0} panel aktif olur", //{0} panel name
      question_visibilityText: "{0} soruyu görünür yap", //{0} question name
      question_enableText: "{0} soruyu aktif yap", //{0} question name
      question_requireText: "{0} cevabı zorunlu yap", //{0} question name
      trigger_completeText: "Anket tamamlandı",
      trigger_setvalueText: "Sorunun içine: {0} değer {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Sorusundan {1}, {0} değerini, soruya kopyala", //{0} and {1} question names
      trigger_skipText: "Soruya geç {0}", //{0} question name
      trigger_runExpressionText1: "Mantıksal ifadeyi çalıştır: '{0}'", //{0} the expression
      trigger_runExpressionText2: " ve sonuç değerini soruya ekle: {0}", //{0} question name
      completedHtmlOnConditionText: "Özel 'Teşekkürler sayfasını' göster.",

      conditions: "Koşul(lar)",
      actions: "Olay(lar)",
      expressionEditorTitle: "Koşul(ları) tanımla",
      actionsEditorTitle: "Olay(ları) tanımla",

      deleteAction: "Olayı Sil",
      addNewAction: "Yeni olay ekle",
      selectedActionCaption: "Eklemek için bir olay seçin...",

      expressionInvalid:
        "Mantıksal ifade boş veya geçersiz. Lütfen düzenleyin.",
      noActionError: "Lütfen, En az bir olay seçiniz.",
      actionInvalid: "Lütfen, Olay(lar)daki sorunları gideriniz.",
      expressionSetup: "",
      actionsSetup: "",
    },
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Required?"
  // },
  //Property Editors
  pe: {
    apply: "Uygula",
    ok: "TAMAM",
    save: "Kaydet",
    cancel: "İptal",
    reset: "Sıfırla",
    refresh: "Yenile",
    // close: "Close",
    delete: "Sil",
    add: "Ekle",
    addNew: "Yeni Ekle",
    addItem: "Yeni nesne ekleme için tıklayınız...",
    addOther: "Diğer",
    addSelectAll: "Tümünü Seç",
    addNone: "Hiçbiri",
    removeAll: "Tümünü Sil",
    edit: "Düzenle",
    back: "Kaydetmeden çık",
    saveAndBack: "Kaydet ve çık",
    // itemValueEdit: "Visible If",
    editChoices: "Seçenekleri düzenle",
    showChoices: "Seçenekleri göster",
    move: "Hareket",
    empty: "<boş>",
    // notEmpty: "<edit value>",
    fastEntry: "Hızlı Giriş",
    formEntry: "Form Girişi",
    testService: "Servisi test et",
    itemSelectorEmpty: "Lütfen nesneyi seçiniz",
    conditionActionEmpty: "Lütfen olayı seçiniz",
    conditionSelectQuestion: "Soruyu seç...",
    conditionSelectPage: "Sayfayı seç...",
    conditionSelectPanel: "Paneli seç...",
    conditionValueQuestionTitle: "Lütfen değer/seçenek giriniz",
    // conditionHelp:
    //   "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Lütfen mantıksal ifade giriniz. Soru değerlerine erişmek için süslü parantez kullanabilirsiniz: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Mantıksal ifade kopyası için ctrl+space tuşlarına basınız",
    aceEditorRowTitle: "Geçerli satır",
    aceEditorPanelTitle: "Geçerli panel",
    showMore: "Daha fazla bilgi için dokümantasyonu inceleyiniz",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Erişilebilir sorular:",
    cellsEmptyRowsColumns: "En az bir kolon veya satır olmalı",

    propertyIsEmpty: "Lütfen değer giriniz",
    propertyNameIsNotUnique: "Lütfen benzersiz bir isim giriniz",
    listIsEmpty: "Yeni eleman ekle",
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
    titleName: "Başlık adı",
    titlePlaceholder: "Başlık",
    surveyTitlePlaceholder: "Anket başlığı",
    pageTitlePlaceholder: "Sayfa başlığı",
    descriptionPlaceholder: "Bir açıklama giriniz",
    surveyDescriptionPlaceholder: "Anket açıklaması giriniz",
    pageDescriptionPlaceholder: "Sayfa açıklaması giriniz",

    showCommentArea: "Yorumu var",
    showOtherItem: "Başka bir öğeye sahip",
    otherText: "Diğer eleman metni",
    showClearButton: "Temizleme butonunu göster",
    allowEmptyResponse: "Boş cevaba izin ver",
    showNoneItem: "Hiçbir elemana sahip değil",
    noneText: "Hiçbir eleman metni",
    showSelectAllItem: "Tüm elemanlar seçildi",
    selectAllText: "Tüm elemanların yazısını seç",
    choicesMin: "Otomatik oluşturulan öğeler için minimum değer",
    choicesMax: "Otomatik oluşturulan öğeler için maksimum değer",
    choicesStep: "Otomatik oluşturulan öğeler arasındaki fark",
    showOptionsCaption: "Seçeneklerin başlığını göster",
    name: "isim",
    title: "Başlık",
    cellType: "Hücre tipi",
    colCount: "Kolon sayısı",
    choicesOrder: "Seçenek sırasını seç",
    visible: "Görünür?",
    isRequired: "Zorunlu?",
    defaultValueExpression: "Varsayılan değer tanımı",
    isAllRowRequired: "Tüm satırlar zorunlu",
    requiredErrorText: "Zorunlu hata yazısı",
    startWithNewLine: "Yeni satırla başla?",
    rows: "Satır sayısı",
    cols: "Kolon sayısı",
    placeholder: "Giriş varsayılan içeriği",
    showPreview: "Resim önizleme gösteriliyor mu?",
    showPreviewBeforeComplete: "Tamamlanmadan önce önizlemeyi göster",
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
    and: "Ve",
    or: "Veya",
    remove: "Kaldır",
    addCondition: "Koşul ekle",

    //survey
    showTitle: "Başlığı göster/gizle",
    locale: "Varsayılan dil",
    simulator: "Cihaz seçin",
    landscapeOrientation: "Yatay",
    mode: "Mod (düzenlebilir/düzenlenemez)",
    clearInvisibleValues: "Görünmez değerleri sil",
    cookieName:
      "Çerez adı (anketi yerel olarak iki kez devre dışı bırakmak için)",
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
    goNextPageAutomatic:
      "Tüm soruları cevaplarken otomatik olarak sonraki sayfaya git",
    focusOnFirstError: "İlk hataya odaklan",
    showProgressBar: "İlerleme çubuğunu göster",
    questionTitleLocation: "Soru başlığı konumu",
    questionTitlePattern: "Soru başlığı kalıbı",
    requiredText: "Zorunlu soru sembolü",
    questionStartIndex: "Soru indeksi (1, 2 veya 'A', 'a' gibi)",
    showQuestionNumbers: "Soru numarasını göster",
    questionTitleTemplate:
      "Soru başlığı şablonu, varsayılan değer: '{no}. {require} {title}'",
    questionErrorLocation: "Soru hatası konumu",
    focusFirstQuestionAutomatic: "İlk soruyu sayfayı değiştirmeye odakla",
    questionsOrder: "Sayfadaki öğelerin sırası",
    maxTextLength: "Maksimum metin uzunluğu",
    maxOthersLength: "Maksimum diğerleri uzunluğu",
    maxTimeToFinish: "Anketi bitirmek için maksimum süre",
    maxTimeToFinishPage: "Ankette bir sayfayı bitirmek için maksimum süre",
    showTimerPanel: "Zamanlayıcı panelini göster",
    showTimerPanelMode: "Zamanlayıcı paneli modunu göster",
    renderMode: "İşleme modu",
    allowAddPanel: "Panel eklemeye izin ver",
    allowRemovePanel: "Panel silmeye izin ver",
    panelAddText: "Panel ekleme metni",
    panelRemoveText: "Panel silme metni",
    isSinglePage: "Tüm öğeleri tek bir sayfada göster",
    html: "Html",
    expression: "Mantıksal İfade",

    minValue: "Minimum değer",
    maxValue: "Maksimum değer",
    minLength: "Minimum uzunluk",
    allowDigits: "Rakamlara izin ver",
    minCount: "Minimum miktar",
    maxCount: "Maksimum miktar",
    regex: "Düzenli ifade",

    totalText: "Toplam metni",
    totalType: "Toplam tipi",
    totalExpression: "Toplam mantıksal ifade",
    totalDisplayStyle: "Toplam görünüm",
    totalCurrency: "Toplam para birimi",
    totalFormat: "Toplam format",

    // Header  adorner
    logoPosition: "Logo pozisyonu",
    addLogo: "Logo ekle...",
    changeLogo: "Logoyu değiştir...",
    logoWidth: "Logo genişlik",
    logoHeight: "Logo uzunluk",
    logoFit: "Logo uygunluğu",
    logoPositions: {
      none: "Logoyu kaldır",
      left: "Sol",
      right: "Sağ",
      top: "Üstte",
      bottom: "Altta",
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
      completedHtml: "Tamamlanmış HTML",
      completedHtmlOnCondition: "Koşulda HTML tamamlandı",
      loadingHtml: "Bekleme HTMLi",
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
      others: "Diğer",
    },
    editProperty: "Özelliği düzenle '{0}'",
    items: "[ Elemanlar: {0} ]",

    enterNewValue: "Lütfen, değer girin.",
    noquestions: "Ankette herhangi bir soru yok.",
    createtrigger: "Lütfen bir tetikleyici oluşturun",
    keyboardAdornerTip:
      "Öğeyi düzenlemek için enter butonuna basın, öğeyi silmek için sil butonuna basın, öğeyi taşımak için kontrol artı ok yukarı veya ok tuşuna basın",
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
  },
  //Property values
  pv: {
    true: "Doğru",
    false: "Yanlış",
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
    decimal: "Ondalık",
    currency: "Para birimi",
    percent: "Yüzde",
    firstExpanded: "firstExpanded",
    off: "Kapalı",
    onPanel: "Panelde",
    onSurvey: "Ankette",
    list: "Liste",
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
    color: "Renk",
    date: "Tarih",
    datetime: "Saat ile birlikte tarih",
    "datetime-local": "datetime-local",
    email: "Email",
    month: "Ay",
    number: "Sayı",
    password: "Şifre",
    range: "Aralık",
    tel: "Telefon",
    text: "Yazı",
    time: "Zaman",
    url: "Url",
    week: "Hafta",
    hidden: "Gizli",
    on: "Açık",
    onPage: "Sayfada",
    edit: "Düzenle",
    display: "Görüntüle",
    onComplete: "Tamamlandığında",
    onHidden: "Gizlendiğinde",
    all: "Tümü",
    page: "Sayfa",
    survey: "Anket",
    onNextPage: "Sonraki sayfada",
    onValueChanged: "Değer değiştiğinde",
    singlePage: "Tek sayfa",
    standard: "Standart",
    questionPerPage: "Sayfa başına soru",
    noPreview: "Önizleme yok",
    showAllQuestions: "Tüm soruları göster",
    showAnsweredQuestions: "Cevaplanan soruları göster",
    questions: "Sorular",
    requiredQuestions: "Gerekli sorular",
    correctQuestions: "Doğru sorular",
    buttons: "Butonlar",
    underInput: "Giriş altında",
    underTitle: "Başlık altında",
    image: "Görsel",
    contain: "İçer",
    cover: "Kapsa",
    fill: "Doldur"
  },
  //Operators
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
  },
  //Embed window
  ew: {
    angular: "Angular versiyonu kullan",
    jquery: "Jquery versiyonu kullan",
    knockout: "Knockout versiyonu kullan",
    react: "React versiyonu kullan",
    vue: "Vue versiyonu kullan",
    bootstrap: "Bootstrap",
    standard: "Bootstrapsız",
    showOnPage: "Bir sayfada anket göster",
    showInWindow: "Anketi bir pencerede göster",
    loadFromServer: "Anket JSON'u sunucudan yükle",
    titleScript: "Scriptler ve stiller",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Preview (Survey)
  ts: {
    selectPage: "Test edilecek sayfayı seçin:",
    showInvisibleElements: "Görünmez öğeleri göster",
  },
  validators: {
    answercountvalidator: "cevap sayısı",
    emailvalidator: "e-mail",
    expressionvalidator: "ifade",
    numericvalidator: "numerik",
    regexvalidator: "regex",
    textvalidator: "text",
  },
  triggers: {
    completetrigger: "anketi tamamla",
    setvaluetrigger: "değeri ayarla",
    copyvaluetrigger: "değeri kopyala",
    skiptrigger: "soruyu atla",
    runexpressiontrigger: "mantıksal ifadeyi çalıştır",
    visibletrigger: "görünürlüğü değiştir (kullanımdan kaldırıldı)",
  },
  //Properties
  p: {
    name: "adı",
    title: {
      name: "başlık",
      title: "'Ad' ile aynıysa boş bırakın",
    },

    navigationButtonsVisibility: "Navigasyon butonları görünürlüğü",
    questionsOrder: "Soru sırası",
    maxTimeToFinish: "Bitirmek için maksimum zaman",

    visible: "Görünür",
    visibleIf: "Görünür eğer",
    questionTitleLocation: "Soru başlığı konumu",
    questionDescriptionLocation: "Soru açıklaması konumu",
    description: "Açıklama",
    state: "Durum",
    isRequired: "Gerekli mi?",
    requiredIf: "Eğer gerekli mi?",
    indent: "Paragraf",
    requiredErrorText: "Gerekli hatası yazısı",
    startWithNewLine: "Yeni satırla başla",
    innerIndent: "İç paragraf",
    page: "Sayfa",

    width: "Genişlik",

    commentText: "Yorum yazısı",
    valueName: "Değer adı",
    enableIf: "Etkin eğer",
    defaultValue: "Varsayılan değer",
    correctAnswer: "Doğru cevap",
    readOnly: "Sadece okunur",
    validators: "Doğrulayıcılar",
    titleLocation: "Başlık konumu",
    descriptionLocation: "Açıklama konumu",
    minWidth: "Minimum genişlik",
    maxWidth: "Maksimum genişlik",
    useDisplayValuesInDynamicTexts: "Başlıkta görünen değeri kullan",

    showCommentArea: "Yorum var mı?",
    showOtherItem: "Diğerleri var mı?",
    choices: "Seçenekler",
    choicesOrder: "Seçenek sırası",
    choicesByUrl: "URL'e göre seçimler",
    otherText: "Diğer yazı",
    otherErrorText: "Diğer yazı hatası yazısı",
    storeOthersAsComment: "Diğerlerini yorum olarak depola",

    label: "Başlık",
    labelTrue: "Doğru başlık",
    labelFalse: "Yanlış başlık",
    showTitle: "Başlığı göster",
    valueTrue: "Doğru değeri",
    valueFalse: "Yanlış değeri",

    multiSelect: "Çoklu Seçim",
    contentMode: "İçerik modu",
    imageFit: "Görsel'u uyumlandır",
    showLabel: "Başlığı göster",

    cols: "Sütunlar",
    rows: "Satırlar",
    placeholder: "Yer tutucu",

    optionsCaption: "Seçenek başlığı",

    expression: "Tanım",
    format: "format",
    displayStyle: "Görünüm biçimi",
    currency: "Para birimi",
    useGrouping: "Gruplamayı kullan",

    showPreview: "Önizlemeyi göster",
    allowMultiple: "Çokluya izin ver",
    imageHeight: "Görsel uzunluğu",
    imageWidth: "Görsel genişliği",
    storeDataAsText: "Verileri yazı olarak depola",
    maxSize: "Maksimum büyüklük",

    html: "html",

    columns: "Sütunlar",
    cells: "Hücreler",
    isAllRowRequired: "Tüm satırlar gerekli mi?",

    horizontalScroll: "Yatay kaydırma",
    cellType: "Hücre tipi",
    columnsLayout: "Sütün düzeni",
    columnColCount: "Sütün Sayısı",
    columnMinWidth: "Minimum sütün genişliği",

    rowCount: "Satır sayısı",
    minRowCount: "Minimum satır sayısı",
    maxRowCount: "Maksimum satır sayısı",
    keyName: "Anahtar adı",
    keyDuplicationError: "Anahtar çoğaltma hatası",
    confirmDelete: "Silmeyi onayla",
    confirmDeleteText: "Silmeyi onaylama yazısı",
    addRowLocation: "Satır ekleme konumu",
    addRowText: "Satır ekleme yazısı",
    removeRowText: "Satır yazısını kaldır",

    items: "Öğeler",
    itemSize: "Öğe boyutu",
    colCount: "Sütun sayısı",

    templateTitle: "Şablon başlığı",
    templateDescription: "Şablon açıklaması",
    allowAddPanel: "Panel eklemeye izin ver",
    allowRemovePanel: "Panel kaldırmaya izin ver",
    panelCount: "Panel sayısı",
    minPanelCount: "Minimum panel sayısı",
    maxPanelCount: "Maksimum panel sayısı",
    panelsState: "Panellerin durumu",
    panelAddText: "Panel ekleme yazısı",
    panelRemoveText: "Panel kaldırma yazısı",
    panelPrevText: "Önceki panel yazısı",
    panelNextText: "Sonraki panel yazısı",
    showQuestionNumbers: "Soru sayısını göster",
    textUpdateMode: "Metin güncelleme modu",
    showRangeInProgress: "İlerleme durumunu göster",
    renderMode: "Render modu",
    templateTitleLocation: "Şablon başlık konumu",

    rateValues: "Oran değerleri",
    rateMin: "Minimum oran",
    rateMax: "Maksimum oran",
    rateStep: "rateStep",
    minRateDescription: "Minimum oran açıklaması",
    maxRateDescription: "Maksimum oran açıklaması",

    inputType: "Giriş tipi",
    size: "Büyüklük",

    locale: "lokal",
    focusFirstQuestionAutomatic: "Otomatik ilk soruya odakla",
    completedHtml: "Tamamlanmış html",
    completedBeforeHtml: "Tamamlanmadan önceki html",
    loadingHtml: "Html yükleniyor",
    triggers: "tetikleyiciler",
    cookieName: "cookie adı",
    sendResultOnPageNext: "Sonuçları sonraki sayfaya gönder",
    showNavigationButtons: "Navigasyon butonlarını göster",
    showPrevButton: "Önceki butonunu göster",
    showPageTitles: "Sayfa başlığını göster",
    navigateToUrl: "URL'ye git",
    navigateToUrlOnCondition: "Koşullu olarak url'ye gidin",
    completedHtmlOnCondition: "Koşullu html tamamlandı",
    showCompletedPage: "Tamamlanmış sayfayı göster",
    showPageNumbers: "Sayfa numarasını göster",
    questionErrorLocation: "Soru hatası konumu",
    showProgressBar: "İlerleme çubuğunu göster",
    progressBarType: "İlerleme çubuğu türü",
    questionsOnPageMode: "Sayfa modundaki sorular",
    mode: "Mod",
    goNextPageAutomatic: "Bir sonraki sayfaya otomatik geç",
    checkErrorsMode: "Hataları kontrol et modu",
    clearInvisibleValues: "Görünmeyen değerleri temizle",
    startSurveyText: "Anket yazısını başlat",
    pagePrevText: "Önceki sayfa yazısı",
    pageNextText: "Sonraki sayfa yazısı",
    completeText: "Yazıyı tamamla",
    requiredText: "Gerekli yazı",
    questionStartIndex: "Soru başlangıç indeksi",
    questionTitleTemplate: "Soru başlığı şablonu",
    firstPageIsStarted: "İlk sayfa başladı",
    isSinglePage: "Tek sayfa mı?",
    maxTimeToFinishPage: "Bitirme sayfası için maksimum zaman",
    showTimerPanel: "Zamanlama panelini göster",
    showTimerPanelMode: "Zamanlama panel modunu göster",

    defaultPanelValue: "Varsayılan panel değeri",
    defaultRowValue: "Varsayılan satır değeri",
    showNoneItem: "hasNone",
    noneText: "noneText",

    text: "yazı",
  },
};

editorLocalization.locales["tr"] = turkishStrings;
