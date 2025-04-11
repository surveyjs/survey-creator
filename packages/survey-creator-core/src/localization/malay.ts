import { setupLocale } from "survey-creator-core";

export var msStrings = {
  // survey templates
  survey: {
    edit: "Edit",
    externalHelpLink: "Tonton dan belajar cara mencipta tinjauan",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Sila letakkan soalan di sini daripada Kotak Alat",
    addLogicItem: "Cipta peraturan untuk menyesuaikan aliran tinjauan.",
    copy: "Salin",
    duplicate: "Pendua",
    addToToolbox: "Tambahkan kepada kotak alat",
    deletePanel: "Padamkan Panel",
    deleteQuestion: "Padamkan Soalan",
    convertTo: "Tukar kepada",
    drag: "Seret unsur",
  },
  // Creator tabs
  tabs: {
    preview: "Uji Tinjauan",
    theme: "Tema",
    translation: "Terjemahan",
    designer: "Pereka Bentuk Tinjauan",
    json: "Editor JSON",
    logic: "Logik Tinjauan"
  },
  // Question types
  qt: {
    default: "Lalai",
    checkbox: "Kotak semak",
    comment: "Komen",
    imagepicker: "Pemilih imej",
    ranking: "Kedudukan",
    image: "Imej",
    dropdown: "Juntai bawah",
    tagbox: "Juntai Bawah Berbilang Pilihan",
    file: "Fail",
    html: "HTML",
    matrix: "Matriks (pilihan tunggal)",
    matrixdropdown: "Matriks (pilihan berbilang)",
    matrixdynamic: "Matriks (baris dinamik)",
    multipletext: "Teks Berbilang",
    panel: "Panel",
    paneldynamic: "Panel (panel dinamik)",
    radiogroup: "Kumpulan radio",
    rating: "Penarafan",
    text: "Input Tunggal",
    boolean: "Yes/No (Boolean)",
    expression: "Ekspresi (baca sahaja)",
    signaturepad: "Pad tandatangan",
    buttongroup: "Kumpulan Butang"
  },
  toolboxCategories: {
    general: "Umum",
    choice: "Soalan Pilihan",
    text: "Soalan Input Teks",
    containers: "Bekas",
    matrix: "Soalan Matriks",
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Lalai ({0})",
    survey: "Tinjauan",
    settings: "Tetapan Tinjauan",
    settingsTooltip: "Buka tetapan tinjauan",
    surveySettings: "Seting Tinjauan",
    surveySettingsTooltip: "Seting tinjauan",
    themeSettings: "Seting Tema",
    themeSettingsTooltip: "Seting tema",
    creatorSettingTitle: "Tetapan Pencipta",
    showPanel: "Tunjukkan Panel",
    hidePanel: "Sembunyikan Panel",
    prevSelected: "Pilih sebelumnya",
    nextSelected: "Pilih seterusnya",
    prevFocus: "Fokus sebelum ini",
    nextFocus: "Fokus seterusnya",
    surveyTypeName: "Kaji selidik",
    pageTypeName: "Laman",
    panelTypeName: "Panel",
    questionTypeName: "Soalan",
    columnTypeName: "Lajur",
    addNewPage: "Tambahkan Halaman Baharu",
    moveRight: "Tatal ke Kanan",
    moveLeft: "Tatal ke Kiri",
    deletePage: "Padamkan Halaman",
    editPage: "Edit Halaman",
    edit: "Edit",
    newPageName: "halaman",
    newQuestionName: "soalan",
    newPanelName: "panel",
    newTextItemName: "teks",
    defaultV2Theme: "Lalai",
    modernTheme: "Moden",
    defaultTheme: "Lalai (warisan)",
    testSurveyAgain: "Uji Tinjauan Semula",
    testSurveyWidth: "Lebar tinjauan: ",
    navigateToMsg: "Anda perlu navigasi ke:",
    saveSurvey: "Simpan Tinjauan",
    saveSurveyTooltip: "Simpan Tinjauan",
    saveTheme: "Simpan Tema",
    saveThemeTooltip: "Simpan Tema",
    jsonHideErrors: "Sembunyikan ralat",
    jsonShowErrors: "Tunjukkan ralat",
    undo: "Buat Asal",
    redo: "Buat Semula",
    undoTooltip: "Buat asal perubahan terakhir",
    redoTooltip: "Buat semula perubahan",
    expandTooltip: "Mengembangkan",
    collapseTooltip: "Runtuh",
    expandAllTooltip: "Kembangkan Semua",
    collapseAllTooltip: "Runtuhkan Semua",
    zoomInTooltip: "Zum Masuk",
    zoom100Tooltip: "Zum kepada 100%",
    zoomOutTooltip: "Zum Keluar",
    lockQuestionsTooltip: "Kunci keadaan kembangkan/runtuhkan untuk soalan",
    showMoreChoices: "Tunjuk lebih banyak",
    showLessChoices: "Tunjukkan kurang",
    copy: "Salin",
    cut: "Potong",
    paste: "Tampal",
    copyTooltip: "Salin pilihan kepada papan klip",
    cutTooltip: "Potong pilihan kepada papan klip",
    pasteTooltip: "Tampal daripada papan klip",
    options: "Pilihan",
    generateValidJSON: "Jana JSON yang Sah",
    generateReadableJSON: "Jana JSON yang Boleh Dibaca",
    toolbox: "Kotak Alat",
    "property-grid": "Ciri",
    toolboxFilteredTextPlaceholder: "Taip untuk mencari...",
    toolboxNoResultsFound: "Tiada keputusan ditemui",
    propertyGridFilteredTextPlaceholder: "Taip untuk mencari...",
    propertyGridNoResultsFound: "Tiada keputusan ditemui",
    propertyGridPlaceholderTitle: "Mula mengkonfigurasi borang anda",
    propertyGridPlaceholderDescription: "Klik mana-mana ikon kategori untuk meneroka tetapan tinjauan. Seting tambahan akan tersedia sebaik sahaja anda menambah elemen tinjauan pada permukaan reka bentuk.",
    correctJSON: "Pilih JSON yang betul.",
    surveyResults: "Keputusan Tinjauan: ",
    surveyResultsTable: "Sebagai Jadual",
    surveyResultsJson: "Sebagai JSON",
    resultsTitle: "Tajuk Soalan",
    resultsName: "Nama Soalan",
    resultsValue: "Nilai Jawapan",
    resultsDisplayValue: "Nilai Paparan",
    modified: "Diubah suai",
    saving: "Menyimpan",
    saved: "Disimpan",
    propertyEditorError: "Ralat:",
    saveError: "Ralat! Kandungan editor tidak disimpan.",
    translationPropertyGridTitle: "Seting Bahasa",
    themePropertyGridTitle: "Seting Tema",
    addLanguageTooltip: "Tambah Bahasa",
    translationLanguages: "Bahasa-bahasa",
    translationDeleteLanguage: "Adakah anda pasti ingin memadam semua rentetan untuk bahasa ini?",
    translationAddLanguage: "Pilihan bahasa untuk diterjemah",
    translationShowAllStrings: "Tunjukkan semua rentetan",
    translationShowUsedStringsOnly: "Rentetan yang Digunakan Sahaja",
    translationShowAllPages: "Tunjukkan semua halaman",
    translationNoStrings: "Tiada rentetan untuk diterjemah. Sila ubah penapis.",
    translationExportToSCVButton: "Eksport kepada CSV",
    translationImportFromSCVButton: "Import daripada CSV",
    translateUsigAI: "Terjemahkan Secara automatik Semua",
    translateUsigAIFrom: "Terjemah daripada: ",
    translationDialogTitle: "Rentetan tidak diterjemahkan",
    translationMergeLocaleWithDefault: "Gabung {0} dengan tempatan lalai",
    translationPlaceHolder: "Penterjemahan...",
    translationSource: "Sumber: ",
    translationTarget: "Sasaran: ",
    translationYouTubeNotSupported: "Pautan YouTube tidak disokong.",
    themeExportButton: "Eksport",
    themeImportButton: "Import",
    surveyJsonExportButton: "Eksport",
    surveyJsonImportButton: "Import",
    surveyJsonCopyButton: "Salin ke papan keratan",
    themeResetButton: "Mengeset semula seting tema kepada lalai",
    themeResetConfirmation: "Adakah anda benar-benar mahu menetapkan semula tema? Semua penyesuaian anda akan hilang.",
    themeResetConfirmationOk: "Ya, tetapkan semula tema",
    bold: "Tebal",
    italic: "Condong",
    underline: "Garis bawah",
    addNewQuestion: "Tambahkan soalan",
    selectPage: "Pilih halaman...",
    carryForwardChoicesCopied: "Pilihan disalin daripada",
    choicesLoadedFromWebText: "Pilihan dimuatkan dari perkhidmatan web.",
    choicesLoadedFromWebLinkText: "Pergi ke seting",
    choicesLoadedFromWebPreviewTitle: "Pratonton pilihan pilihan yang dimuatkan",
    htmlPlaceHolder: "Kandungan HTML akan berada di sini.",
    panelPlaceHolder: "Lepaskan soalan dari kotak alat di sini.",
    surveyPlaceHolder: "Tinjauan itu kosong. Seret elemen dari kotak alat atau klik butang di bawah.",
    pagePlaceHolder: "Halaman kosong. Seret elemen dari kotak alat atau klik butang di bawah.",
    imagePlaceHolder: "Seret dan lepaskan imej di sini atau klik butang di bawah dan pilih imej untuk dimuat naik",
    surveyPlaceHolderMobile: "Klik butang \"Tambah Soalan\" di bawah untuk mula membuat borang anda.",
    surveyPlaceholderTitle: "Borang anda kosong",
    surveyPlaceholderTitleMobile: "Borang anda kosong",
    surveyPlaceholderDescription: "Seret elemen daripada kotak alat atau klik butang di bawah.",
    surveyPlaceholderDescriptionMobile: "Seret elemen daripada kotak alat atau klik butang di bawah.",
    previewPlaceholderTitle: "Tiada pratonton",
    previewPlaceholderTitleMobile: "Tiada pratonton",
    previewPlaceholderDescription: "Tinjauan tidak mengandungi sebarang elemen yang boleh dilihat.",
    previewPlaceholderDescriptionMobile: "Tinjauan tidak mengandungi sebarang elemen yang boleh dilihat.",
    translationsPlaceholderTitle: "Tiada tali untuk diterjemahkan",
    translationsPlaceholderTitleMobile: "Tiada tali untuk diterjemahkan",
    translationsPlaceholderDescription: "Tambah elemen pada borang anda atau tukar penapis rentetan dalam bar alat.",
    translationsPlaceholderDescriptionMobile: "Tambah elemen pada borang anda atau tukar penapis rentetan dalam bar alat.",
    pagePlaceHolderMobile: "Klik butang \"Tambah Soalan\" di bawah untuk menambah elemen baru ke halaman.",
    panelPlaceHolderMobile: "Klik butang \"Tambah Soalan\" di bawah untuk menambah elemen baru ke panel.",
    imagePlaceHolderMobile: "Klik butang di bawah dan pilih imej untuk dimuat naik",
    imageChooseImage: "Pilih Imej",
    addNewTypeQuestion: "Tambah {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Perkara ",
    selectFile: "Pilih fail",
    removeFile: "Mengalih keluar fail",
    lg: {
      addNewItem: "Tambah peraturan baru",
      empty_tab: "Cipta peraturan untuk menyesuaikan aliran tinjauan.",
      logicPlaceholderTitle: "Tiada peraturan logik",
      logicPlaceholderTitleMobile: "Tiada peraturan logik",
      logicPlaceholderDescription: "Buat peraturan untuk menyesuaikan aliran tinjauan.",
      logicPlaceholderDescriptionMobile: "Buat peraturan untuk menyesuaikan aliran tinjauan.",
      page_visibilityName: "Kebolehlihatan halaman",
      page_enableName: "Halaman Dayakan (nyahdayakan)",
      page_requireName: "Buat halaman diperlukan",
      panel_visibilityName: "Kebolehlihatan panel",
      panel_enableName: "Dayakan/Lumpuhkan panel",
      panel_requireName: "Buat halaman diperlukan",
      question_visibilityName: "Kebolehlihatan soalan",
      question_enableName: "Dayakan/Lumpuhkan soalan",
      question_requireName: "Pilihan soalan diperlukan",
      question_resetValueName: "Mengeset semula nilai soalan",
      question_setValueName: "Mengesetkan nilai soalan",
      column_visibilityName: "Tunjukkan lajur (sembunyikan)",
      column_enableName: "Mendayakan (nyahdayakan) lajur",
      column_requireName: "Jadikan lajur diperlukan",
      column_resetValueName: "Mengeset semula nilai lajur",
      column_setValueName: "Mengesetkan nilai lajur",
      trigger_completeName: "Lengkapkan tinjauan",
      trigger_setvalueName: "Tetapkan nilai soalan",
      trigger_copyvalueName: "Salin nilai soalan",
      trigger_skipName: "Langkau kepada soalan",
      trigger_runExpressionName: "Jalankan ekspresi tersuai",
      completedHtmlOnConditionName: "Teks 'Halaman terima kasih' tersuai",
      page_visibilityDescription: "Jadikan halaman boleh dilihat apabila ekspresi logik mengembalikan nilai benar. Jika tidak, biarkan tersembunyi.",
      panel_visibilityDescription: "Jadikan panel boleh dilihat apabila ekspresi logik mengembalikan nilai benar. Jika tidak, biarkan tersembunyi.",
      panel_enableDescription: "Jadikan panel dan semua elemen dalamnya didayakan apabila ekspresi logik mengembalikan nilai benar. Jika tidak, biarkan lumpuh.",
      question_visibilityDescription: "Jadikan soalan boleh dilihat apabila ekspresi logik mengembalikan nilai benar. Jika tidak, biarkan tersembunyi.",
      question_enableDescription: "Jadikan soalan didayakan apabila ekspresi logik mengembalikan nilai benar. Jika tidak, biarkan lumpuh.",
      question_requireDescription: "Soalan diperlukan apabila ekspresi logik mengembalikan nilai benar.",
      trigger_completeDescription: "Apabila ekspresi logik mengembalikan nilai benar, maka tinjauan akan lengkap dan pengguna akhir akan melihat 'Halaman terima kasih'.",
      trigger_setvalueDescription: "Apabila nilai soalan, yang digunakan dalam ekspresi logik, berubah dan ekspresi logik mengembalikan nilai benar, maka nilai ditetapkan kepada soalan yang dipilih.",
      trigger_copyvalueDescription: "Apabila nilai soalan, yang digunakan dalam ekspresi logik, berubah dan ekspresi logik mengembalikan nilai benar, maka nilai salah satu soalan yang dipilih akan disalin kepada satu lagi soalan yang dipilih.",
      trigger_skipDescription: "Apabila ekspresi logik mengembalikan nilai benar, maka tinjauan melangkau kepada / fokus pada soalan yang dipilih.",
      trigger_runExpressionDescription: "Apabila ekspresi mengembalikan nilai benar, maka ekspresi tersuai akan dilaksanakan. Anda boleh menetapkan keputusan ekspresi ini kepada soalan yang dipilih secara pilihan",
      completedHtmlOnConditionDescription: "Apabila ekspresi logik mengembalikan nilai benar, maka teks lalai untuk 'Halaman terima kasih' berubah kepada teks yang diberikan.",
      itemExpressionText: "Apabila ekspresi: '{0}' mengembalikan nilai benar:", //{0} - the expression
      itemEmptyExpressionText: "Peraturan baru",
      page_visibilityText: "Jadikan halaman {0} boleh dilihat", //{0} page name
      panel_visibilityText: "Jadikan panel {0} boleh dilihat", //{0} panel name
      panel_enableText: "Jadikan panel {0} didayakan", //{0} panel name
      question_visibilityText: "Jadikan soalan {0} boleh dilihat", //{0} question name
      question_enableText: "Jadikan soalan {0} didayakan", //{0} question name
      question_requireText: "Jadikan soalan {0} diperlukan", //{0} question name
      question_resetValueText: "Tetapkan semula nilai untuk soalan: {0}", //{0} question name.
      question_setValueText: "Berikan nilai: {1} kepada soalan: {0}",
      column_visibilityText: "menjadikan {0} lajur soalan {1} kelihatan", //{0} column name, {1} question name
      column_enableText: "menjadikan lajur {0} soalan {1} mendayakan", //{0} column name, {1} question name
      column_requireText: "menjadikan lajur {0} soalan {1} diperlukan", //{0} column name, {1} question name
      column_resetValueText: "Set semula nilai sel untuk lajur: {0}", //{0} column name
      column_setValueText: "Peruntukkan nilai sel: {1} kepada lajur: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Ungkapan yang hasilnya akan diberikan kepada soalan sasaran.",
      trigger_completeText: "Tinjauan dilengkapkan",
      trigger_setvalueText: "Tetapkan kepada soalan: {0} nilai {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "nilai soalan yang jelas: {0}", //{0} question name
      trigger_copyvalueText: "Salin kepada soalan: {0} nilai daripada soalan {1}", //{0} and {1} question names
      trigger_skipText: "Tinjauan melangkau ke soalan {0}", //{0} question name
      trigger_runExpressionText1: "Jalankan ekspresi: '{0}'", //{0} the expression
      trigger_runExpressionText2: " dan tetapkan keputusannya kepada soalan: {0}", //{0} question name
      completedHtmlOnConditionText: "Tunjukkan teks tersuai untuk 'Halaman terima kasih'.",
      showAllQuestions: "Semua Soalan",
      showAllActionTypes: "Semua Jenis Tindakan",
      conditions: "Syarat",
      actions: "Tindakan",
      expressionEditorTitle: "Takrifkan syarat",
      actionsEditorTitle: "Takrifkan tindakan",
      deleteAction: "Padamkan tindakan",
      addNewAction: "Tambahkan tindakan baharu",
      selectedActionCaption: "Pilih tindakan untuk ditambahkan...",
      expressionInvalid: "Ekspresi logik kosong atau tidak sah. Sila betulkannya.",
      noActionError: "Sila tambahkan sekurang-kurangnya satu tindakan.",
      actionInvalid: "Sila baiki masalah dalam tindakan anda.",
      uncompletedRule_title: "Peraturan logik tidak lengkap",
      uncompletedRule_text: "Anda belum menyelesaikan beberapa peraturan logik. Jika anda meninggalkan tab sekarang, perubahan akan hilang. Adakah anda masih mahu meninggalkan tab tanpa melengkapkan perubahan?",
      uncompletedRule_apply: "Ya",
      uncompletedRule_cancel: "Tidak, saya mahu melengkapkan peraturan"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Nama panel",
      title: "Tajuk panel",
      description: "Penerangan panel",
      visibleIf: "Jadikan panel kelihatan jika",
      requiredIf: "Buat panel diperlukan jika",
      questionOrder: "Tertib soalan dalam panel",
      page: "Halaman induk",
      startWithNewLine: "Paparkan panel pada baris baru",
      state: "Keadaan panel runtuh",
      width: "Lebar panel sebaris",
      minWidth: "Lebar panel minimum",
      maxWidth: "Lebar panel maksimum",
      showNumber: "Nombor panel ini"
    },
    panellayoutcolumn: {
      effectiveWidth: "Lebar berkesan,%",
      questionTitleWidth: "Lebar tajuk soalan, px"
    },
    paneldynamic: {
      name: "Nama panel",
      title: "Tajuk panel",
      description: "Penerangan panel",
      visibleIf: "Jadikan panel kelihatan jika",
      requiredIf: "Buat panel diperlukan jika",
      page: "Mengalihkan panel ke halaman",
      startWithNewLine: "Paparkan panel pada baris baru",
      state: "Keadaan panel runtuh",
      width: "Lebar panel sebaris",
      minWidth: "Lebar panel minimum",
      maxWidth: "Lebar panel maksimum",
      confirmDelete: "Sahkan penghapusan panel",
      templateDescription: "Corak perihalan panel",
      templateTitle: "Corak tajuk panel",
      noEntriesText: "Teks panel kosong",
      templateTabTitle: "Corak tajuk tab",
      tabTitlePlaceholder: "Ruang letak tajuk tab",
      templateVisibleIf: "Jadikan panel individu kelihatan jika",
      showNumber: "Nombor panel",
      titleLocation: "Penjajaran tajuk panel",
      descriptionLocation: "Penjajaran perihalan panel",
      templateQuestionTitleLocation: "Penjajaran tajuk soalan",
      templateQuestionTitleWidth: "Lebar tajuk soalan",
      templateErrorLocation: "Penjajaran mesej ralat",
      newPanelPosition: "Lokasi panel baru",
      showRangeInProgress: "Tunjukkan bar kemajuan",
      keyName: "Mencegah jawapan pendua dalam soalan berikut"
    },
    question: {
      name: "Nama soalan",
      title: "Tajuk soalan",
      description: "Penerangan soalan",
      visibleIf: "Jadikan soalan kelihatan jika",
      requiredIf: "Jadikan soalan diperlukan jika",
      page: "Halaman induk",
      state: "Keadaan kotak soalan runtuh",
      showNumber: "Nombor soalan ini",
      titleLocation: "Penjajaran tajuk soalan",
      descriptionLocation: "Penjajaran perihalan soalan",
      errorLocation: "Penjajaran mesej ralat",
      indent: "Meningkatkan inden dalaman",
      width: "Lebar soalan sebaris",
      minWidth: "Lebar soalan minimum",
      maxWidth: "Lebar soalan maksimum",
      textUpdateMode: "Mengemas kini nilai medan input"
    },
    signaturepad: {
      signatureWidth: "Lebar kawasan tandatangan",
      signatureHeight: "Ketinggian kawasan tandatangan",
      signatureAutoScaleEnabled: "Menskalakan kawasan tandatangan secara automatik",
      showPlaceholder: "Menunjukkan ruang letak",
      placeholder: "Teks ruang letak",
      placeholderReadOnly: "Teks ruang letak dalam mod baca sahaja atau pratonton",
      allowClear: "Tunjukkan butang Kosongkan dalam kawasan tandatangan",
      penMinWidth: "Lebar pen minimum",
      penMaxWidth: "Lebar pen maksimum",
      penColor: "Warna strok"
    },
    comment: {
      rows: "Ketinggian medan input (dalam garisan)"
    },
    showQuestionNumbers: "Tunjukkan nombor soalan",
    questionStartIndex: "Indeks mula soalan (1, 2 atau 'A', 'a')",
    expression: {
      name: "Nama ungkapan",
      title: "Tajuk ungkapan",
      description: "Perihalan ungkapan",
      expression: "Ungkapan"
    },
    trigger: {
      expression: "Ungkapan"
    },
    calculatedvalue: {
      expression: "Ungkapan"
    },
    // survey templates
    survey: {
      title: "Tajuk",
      description: "Penerangan tinjauan",
      readOnly: "Jadikan tinjauan baca sahaja"
    },
    page: {
      name: "Nama halaman",
      title: "Tajuk",
      description: "Perihalan halaman",
      visibleIf: "Jadikan halaman kelihatan jika",
      requiredIf: "Jadikan halaman diperlukan jika",
      timeLimit: "Had masa untuk menyelesaikan halaman (dalam beberapa saat)",
      questionOrder: "Tertib soalan pada halaman"
    },
    matrixdropdowncolumn: {
      name: "Nama lajur",
      title: "Tajuk lajur",
      isUnique: "Elakkan tindak balas pendua",
      width: "Lebar lajur",
      minWidth: "Lebar lajur minimum",
      rows: "Ketinggian medan input (dalam garisan)",
      visibleIf: "Jadikan lajur kelihatan jika",
      requiredIf: "Jadikan lajur diperlukan jika",
      showInMultipleColumns: "Setiap opsyen dalam lajur berasingan"
    },
    multipletextitem: {
      name: "Nama",
      title: "Tajuk"
    },
    masksettings: {
      saveMaskedValue: "Simpan nilai bertopeng dalam hasil tinjauan"
    },
    patternmask: {
      pattern: "Corak nilai"
    },
    datetimemask: {
      min: "Nilai minimum",
      max: "Nilai maksimum"
    },
    numericmask: {
      allowNegativeValues: "Benarkan nilai negatif",
      thousandsSeparator: "Pemisah beribu-ribu",
      decimalSeparator: "Pemisah perpuluhan",
      precision: "Ketepatan nilai",
      min: "Nilai minimum",
      max: "Nilai maksimum"
    },
    currencymask: {
      prefix: "Awalan mata wang",
      suffix: "Akhiran mata wang"
    },
    imageHeight: "Tinggi imej",
    imageWidth: "Lebar imej",
    valueName: "Nama nilai",
    defaultDisplayValue: "Nilai paparan lalai untuk teks dinamik",
    rateDescriptionLocation: "Penjajaran label",
    size: "Lebar medan input (dalam aksara)",
    cellErrorLocation: "Penjajaran mesej ralat sel",
    enabled: "Didayakan",
    disabled: "Kurang upaya",
    inherit: "Mewarisi",
    apply: "Guna",
    ok: "OK",
    save: "Simpan",
    clear: "Jelas",
    saveTooltip: "Simpan",
    cancel: "Batal",
    set: "Set",
    reset: "Tetap Semula",
    change: "Menukar",
    refresh: "Segar semula",
    close: "Tutup",
    delete: "Padam",
    add: "Tambahkan",
    addNew: "Tambah Baharu",
    addItem: "Klik untuk menambahkan item...",
    removeItem: "Klik untuk mengalih keluar item...",
    dragItem: "Seret item",
    addOther: "Lain-lain",
    addSelectAll: "Pilih Semua",
    addNone: "Tiada",
    removeAll: "Alih Keluar Semua",
    edit: "Edit",
    back: "Kembali tanpa menyimpan",
    backTooltip: "Kembali tanpa menyimpan",
    saveAndBack: "Simpan dan kembali",
    saveAndBackTooltip: "Simpan dan kembali",
    doneEditing: "Dilakukan",
    editChoices: "Edit Pilihan",
    showChoices: "Tunjukkan Pilihan",
    move: "Alih",
    empty: "<empty>",
    emptyValue: "Nilai kosong",
    fastEntry: "Entri Pantas",
    fastEntryNonUniqueError: "Nilai '{0}' tidak unik",
    fastEntryChoicesCountError: "Sila hadkan bilangan item dari {0} hingga {1}",
    fastEntryChoicesMinCountError: "Sila masukkan sekurang-kurangnya {0} item",
    fastEntryPlaceholder: "Anda boleh mengesetkan data dalam format berikut:\nvalue1|text\nnilai2",
    formEntry: "Entri Borang",
    testService: "Uji perkhidmatan",
    itemSelectorEmpty: "Sila pilih elemen",
    conditionActionEmpty: "Sila pilih tindakan",
    conditionSelectQuestion: "Pilih soalan...",
    conditionSelectPage: "Pilih halaman...",
    conditionSelectPanel: "Pilih panel...",
    conditionValueQuestionTitle: "Sila masukkan/pilih nilai",
    aceEditorHelp: "Tekan ctrl+space untuk mendapatkan petunjuk lengkapan ekspresi",
    aceEditorRowTitle: "Baris semasa",
    aceEditorPanelTitle: "Panel semasa",
    showMore: "Untuk butiran lanjut, sila semak dokumentasi",
    assistantTitle: "Soalan tersedia:",
    cellsEmptyRowsColumns: "Terdapat sekurang-kurangnya satu lajur atau baris",
    showPreviewBeforeComplete: "Pratonton jawapan sebelum menyerahkan tinjauan",
    overridingPropertyPrefix: "Ditetapkan mengikut ",
    resetToDefaultCaption: "Set semula",
    propertyIsEmpty: "Sila masukkan nilai",
    propertyIsNoUnique: "Sila masukkan nilai unik",
    propertyNameIsNotUnique: "Sila masukkan nama unik",
    propertyNameIsIncorrect: "Jangan gunakan perkataan terpelihara: \"item\", \"pilihan\", \"panel\", \"baris\".",
    listIsEmpty: "Tambahkan item baharu",
    "listIsEmpty@choices": "Tiada pilihan telah ditambah lagi",
    "listIsEmpty@columns": "Anda belum mempunyai sebarang lajur",
    "listIsEmpty@gridLayoutColumns": "Anda belum mempunyai lajur reka letak lagi",
    "listIsEmpty@rows": "Anda belum mempunyai sebarang baris",
    "listIsEmpty@validators": "Anda belum mempunyai sebarang peraturan pengesahihan",
    "listIsEmpty@calculatedValues": "Anda belum mempunyai sebarang pemboleh ubah tersuai",
    "listIsEmpty@triggers": "Anda belum mempunyai sebarang pencetus",
    "listIsEmpty@navigateToUrlOnCondition": "Anda belum mempunyai pautan",
    "listIsEmpty@pages": "Anda belum mempunyai sebarang halaman lagi",
    "addNew@choices": "Tambah pilihan",
    "addNew@columns": "Menambah lajur baru",
    "addNew@rows": "Menambah baris baru",
    "addNew@validators": "Tambah peraturan baru",
    "addNew@calculatedValues": "Menambah pemboleh ubah baru",
    "addNew@triggers": "Tambah pencetus baharu",
    "addNew@navigateToUrlOnCondition": "Tambah URL baru",
    "addNew@pages": "Tambah halaman baru",
    expressionIsEmpty: "Ekspresi kosong",
    value: "Nilai",
    text: "Teks",
    rowid: "ID Baris",
    imageLink: "Pautan Imej",
    columnEdit: "Edit lajur: {0}",
    itemEdit: "Edit item: {0}",
    url: "URL",
    path: "Laluan",
    choicesbyurl: {
      url: "URL perkhidmatan web",
      valueName: "Mendapatkan nilai daripada medan JSON berikut"
    },
    titleName: "Nama tajuk",
    imageLinkName: "Dapatkan URL imej daripada medan JSON berikut",
    allowEmptyResponse: "Benarkan respons kosong",
    titlePlaceholder: "Tajuk input di sini",
    surveyTitlePlaceholder: "Tajuk tinjauan input di sini",
    pageTitlePlaceholder: "Tajuk halaman input di sini",
    startPageTitlePlaceholder: "Halaman Permulaan",
    descriptionPlaceholder: "Masukkan perihalan",
    surveyDescriptionPlaceholder: "Masukkan perihalan tinjauan",
    pageDescriptionPlaceholder: "Masukkan perihalan halaman",
    textWrapEnabled: "Pilihan balut",
    showOtherItem: "Ada item lain",
    otherText: "Teks item lain",
    showNoneItem: "Tiada item",
    showRefuseItem: "Benarkan pilihan Enggan Menjawab",
    showDontKnowItem: "Benarkan pilihan Jangan Tahu",
    noneText: "Tiada teks item",
    showSelectAllItem: "Telah pilih semua item",
    selectAllText: "Pilih semua teks item",
    choicesMin: "Nilai minimum untuk item auto dijana",
    choicesMax: "Nilai maksimum untuk item auto dijana",
    choicesStep: "Perbezaan antara item auto dijana",
    name: "Nama",
    title: "Tajuk",
    cellType: "Jenis sel",
    colCount: "Kiraan lajur",
    choicesOrder: "Pilih susunan pilihan",
    allowCustomChoices: "Benarkan pilihan tersuai",
    visible: "Boleh dilihat?",
    isRequired: "Diperlukan?",
    markRequired: "Tandakan mengikut keperluan",
    removeRequiredMark: "Mengalih keluar tanda yang diperlukan",
    eachRowRequired: "Perlukan jawapan untuk semua baris",
    eachRowUnique: "Mengelakkan respons pendua dalam baris",
    requiredErrorText: "Teks ralat diperlukan",
    startWithNewLine: "Mulakan dengan baris baharu?",
    rows: "Kiraan baris",
    cols: "Kiraan lajur",
    placeholder: "Ruang letak input",
    showPreview: "Tunjukkan kawasan pratonton",
    storeDataAsText: "Simpan kandungan fail dalam keputusan JSON sebagai teks",
    maxSize: "Maksimum saiz fail dalam bait",
    rowCount: "Kiraan baris",
    columnLayout: "Tataletak lajur",
    addRowButtonLocation: "Tambahkan lokasi butang baris",
    transposeData: "Mengubah urutan baris kepada lajur",
    addRowText: "Tambahkan teks butang baris",
    removeRowText: "Alih keluar teks butang baris",
    rateMin: "Kadar minimum",
    rateMax: "Kadar maksimum",
    rateStep: "Langkah kadar",
    minRateDescription: "Perihalan kadar minimum",
    maxRateDescription: "Perihalan kadar maksimum",
    inputType: "Jenis input",
    optionsCaption: "Kapsyen pilihan",
    defaultValue: "Nilai lalai",
    cellsDefaultRow: "Teks sel lalai",
    surveyEditorTitle: "Edit tetapan tinjauan",
    qEditorTitle: "Edit: {0}",
    maxLength: "Panjang maksimum",
    buildExpression: "Bina",
    editExpression: "Edit",
    and: "Dan",
    or: "Atau",
    remove: "Alih keluar",
    addCondition: "Tambahkan syarat",
    emptyLogicPopupMessage: "Pilih soalan untuk mula mengkonfigurasi syarat.",
    if: "Jika",
    then: "Kemudian",
    setToName: "Soalan sasaran",
    fromName: "Soalan untuk menyalin jawapan daripada",
    gotoName: "Soalan untuk melangkau ke",
    ruleIsNotSet: "Peraturan tidak betul",
    includeIntoResult: "Dimasukkan ke dalam hasil tinjauan",
    showTitle: "Tunjukkan/sembunyikan tajuk",
    expandCollapseTitle: "Kembangkan/runtuhkan tajuk",
    locale: "Bahasa lalai",
    simulator: "Pilih peranti",
    landscapeOrientation: "Landskap",
    portraitOrientation: "Bertukar kepada orientasi potret",
    clearInvisibleValues: "Kosongkan nilai tersembunyi",
    cookieName: "Nama kuki (untuk melumpuhkan perlaksanaan tinjauan dua kali secara setempat)",
    partialSendEnabled: "Hantar keputusan tinjauan pada halaman seterusnya",
    storeOthersAsComment: "Simpan nilai 'lain-lain' dalam medan berasingan",
    showPageTitles: "Tunjukkan tajuk halaman",
    showPageNumbers: "Tunjukkan nombor halaman",
    pagePrevText: "Teks butang halaman sebelumnya",
    pageNextText: "Teks butang halaman seterusnya",
    completeText: "Teks butang lengkapkan",
    previewText: "Teks butang pratonton",
    editText: "Edit teks butang",
    startSurveyText: "Teks butang mulakan",
    showNavigationButtons: "Tunjukkan butang navigasi (navigasi lalai)",
    navigationButtonsLocation: "Penjajaran butang navigasi",
    showPrevButton: "Tunjukkan butang sebelumnya (pengguna boleh kembali ke halaman seterusnya)",
    firstPageIsStartPage: "Halaman pertama dalam tinjauan ialah halaman permulaan.",
    showCompletePage: "Tunjukkan halaman lengkap pada hujung (HTML dilengkapkan)",
    autoAdvanceEnabled: "Selepas menjawab semua soalan, pergi ke halaman seterusnya secara automatik",
    autoAdvanceAllowComplete: "Lengkapkan tinjauan secara automatik",
    showProgressBar: "Tunjukkan bar perkembangan",
    progressBarLocation: "Penjajaran bar kemajuan",
    questionTitleLocation: "Lokasi tajuk soalan",
    questionTitleWidth: "Lebar tajuk soalan",
    requiredMark: "Soalan memerlukan simbol",
    questionTitleTemplate: "Templat tajuk soalan, lalai ialah: '{tidak}. {perlukan} {tajuk}'",
    questionErrorLocation: "Lokasi ralat soalan",
    autoFocusFirstQuestion: "Fokus soalan pertama pada perubahan halaman",
    questionOrder: "Susunan elemen pada halaman",
    timeLimit: "Masa maksimum untuk menyelesaikan tinjauan",
    timeLimitPerPage: "Masa maksimum untuk menyelesaikan halaman dalam tinjauan",
    showTimer: "Gunakan pemasa",
    timerLocation: "Tunjukkan panel pemasa",
    timerInfoMode: "Tunjukkan mod panel pemasa",
    renderMode: "Mod penyampaian",
    allowAddPanel: "Benarkan menambahkan panel",
    allowRemovePanel: "Benarkan alih keluar panel",
    addPanelText: "Menambahkan teks panel",
    removePanelText: "Mengalih keluar teks panel",
    isSinglePage: "Tunjukkan semua elemen pada satu halaman",
    html: "HTML",
    setValue: "Jawapan",
    dataFormat: "Format imej",
    allowAddRows: "Benarkan menambah baris",
    allowRemoveRows: "Benarkan mengalih keluar baris",
    allowRowReorder: "Benarkan seret dan lepas baris",
    responsiveImageSizeHelp: "Tidak terpakai jika anda menentukan lebar atau ketinggian imej yang tepat.",
    minImageWidth: "Lebar imej minimum",
    maxImageWidth: "Lebar imej maksimum",
    minImageHeight: "Ketinggian imej minimum",
    maxImageHeight: "Ketinggian imej maksimum",
    minValue: "Nilai minimum",
    maxValue: "Nilai maksimum",
    caseInsensitive: "Tidak sensitif huruf besar",
    minLength: "Panjang minimum",
    allowDigits: "Benarkan digit",
    minCount: "Bilangan minimum",
    maxCount: "Bilangan maksimum",
    regex: "Ekspresi biasa",
    surveyvalidator: {
      text: "Mesej ralat",
      expression: "Ungkapan pengesahihan"
    },
    totalText: "Jumlah teks",
    totalType: "Jumlah jenis",
    totalExpression: "Jumlah ekspresi",
    totalDisplayStyle: "Jumlah gaya paparan",
    totalCurrency: "Jumlah mata wang",
    totalFormat: "Jumlah format",
    logo: "Logo (URL atau rentetan berkod asas64)",
    questionsOnPageMode: "Struktur tinjauan",
    maxTextLength: "Panjang jawapan maksimum (dalam aksara)",
    maxCommentLength: "Panjang komen maksimum (dalam aksara)",
    commentAreaRows: "Komen ketinggian kawasan (dalam garisan)",
    autoGrowComment: "Kembangkan kawasan komen secara automatik jika perlu",
    allowResizeComment: "Benarkan pengguna mensaiz semula kawasan teks",
    textUpdateMode: "Mengemas kini nilai soalan teks",
    maskType: "Input jenis topeng",
    autoFocusFirstError: "Mengesetkan fokus pada jawapan tidak sah yang pertama",
    checkErrorsMode: "Jalankan pengesahihan",
    validateVisitedEmptyFields: "Sahkan medan kosong pada fokus yang hilang",
    navigateToUrl: "Navigasi ke URL",
    navigateToUrlOnCondition: "URL dinamik",
    completedBeforeHtml: "Penanda untuk menunjukkan sama ada pengguna telah mengisi tinjauan ini",
    completedHtml: "Tinjauan Penanda halaman lengkap",
    completedHtmlOnCondition: "Tinjauan Dinamik Lengkapkan penanda halaman",
    loadingHtml: "Penanda untuk ditunjukkan semasa model tinjauan sedang dimuatkan",
    commentText: "Teks kawasan komen",
    autocomplete: "Jenis autolengkap",
    labelTrue: "Label \"Benar\"",
    labelFalse: "Label \"Palsu\"",
    allowClear: "Tunjukkan kapsyen pilihan",
    searchMode: "Mod Carian",
    displayStyle: "Gaya paparan nilai",
    format: "Rentetan yang diformatkan",
    maximumFractionDigits: "Nombor pecahan maksimum",
    minimumFractionDigits: "Digit pecahan minimum",
    useGrouping: "Paparkan pemisah perkumpulan",
    allowMultiple: "Benarkan berbilang fail",
    allowImagesPreview: "Pratonton imej",
    acceptedTypes: "Jenis fail yang diterima",
    waitForUpload: "Tunggu muat naik selesai",
    needConfirmRemoveFile: "Sahkan penghapusan fail",
    detailPanelMode: "Lokasi panel terperinci",
    minRowCount: "Kiraan baris minimum",
    maxRowCount: "Kiraan baris maksimum",
    confirmDelete: "Sahkan pemadaman baris",
    confirmDeleteText: "Mesej pengesahan",
    panelCount: "Kiraan panel awal",
    minPanelCount: "Kiraan panel minimum",
    maxPanelCount: "Kiraan panel maksimum",
    panelsState: "Panel dalaman mengembangkan keadaan",
    prevPanelText: "Petua alat butang Panel Sebelumnya",
    nextPanelText: "Petua alat butang Panel Seterusnya",
    removePanelButtonLocation: "Alih keluar lokasi butang Panel",
    hideIfRowsEmpty: "Sembunyikan soalan jika tiada baris",
    hideColumnsIfEmpty: "Menyembunyikan lajur jika tiada baris",
    rateValues: "Nilai kadar tersuai",
    rateCount: "Kiraan kadar",
    autoGenerate: "Bagaimana untuk menentukan nilai kadar?",
    hideIfChoicesEmpty: "Sembunyikan soalan jika ia tidak mengandungi pilihan",
    minWidth: "Lebar minimum (dalam nilai diterima CSS)",
    maxWidth: "Lebar maksimum (dalam nilai diterima CSS)",
    width: "Lebar (dalam nilai diterima CSS)",
    showHeader: "Tunjukkan pengepala lajur",
    horizontalScroll: "Menunjukkan bar skrol mendatar",
    columnMinWidth: "Lebar lajur minimum (dalam nilai diterima CSS)",
    rowTitleWidth: "Lebar pengepala baris (dalam nilai diterima CSS)",
    valueTrue: "Nilai \"Benar\"",
    valueFalse: "Nilai \"Palsu\"",
    minErrorText: "Mesej ralat \"Nilai adalah di bawah minimum\"",
    maxErrorText: "Mesej ralat \"Nilai melebihi maksimum\"",
    otherErrorText: "Mesej ralat \"komen kosong\"",
    keyDuplicationError: "Mesej ralat \"Nilai kunci bukan unik\"",
    minSelectedChoices: "Pilihan minimum yang dipilih",
    maxSelectedChoices: "Pilihan maksimum yang dipilih",
    logoWidth: "Lebar logo (dalam nilai diterima CSS)",
    logoHeight: "Ketinggian logo (dalam nilai diterima CSS)",
    readOnly: "Baca sahaja",
    enableIf: "Boleh diedit jika",
    noRowsText: "Mesej \"Tiada baris\"",
    separateSpecialChoices: "Pilihan khas berasingan (Tiada, Lain-lain, Pilih Semua)",
    choicesFromQuestion: "Salin pilihan daripada soalan berikut",
    choicesFromQuestionMode: "Pilihan mana yang hendak disalin?",
    choiceValuesFromQuestion: "Gunakan nilai daripada lajur matriks atau soalan panel berikut sebagai ID pilihan",
    choiceTextsFromQuestion: "Gunakan nilai daripada lajur matriks atau soalan panel berikut sebagai teks pilihan",
    progressBarShowPageTitles: "Paparkan tajuk halaman dalam bar kemajuan",
    progressBarShowPageNumbers: "Paparkan nombor halaman dalam bar kemajuan",
    showCommentArea: "Tunjukkan kawasan komen",
    commentPlaceholder: "Ruang letak komen",
    displayRateDescriptionsAsExtremeItems: "Memaparkan perihalan kadar sebagai nilai melampau",
    rowOrder: "Tertib baris",
    columnsLayout: "Tataletak lajur",
    columnColCount: "Kiraan lajur tersarang",
    correctAnswer: "Jawapan yang betul",
    defaultPanelValue: "Nilai Lalai",
    cells: "Teks sel",
    fileInputPlaceholder: "Pilih fail atau tampal pautan fail...",
    keyName: "Lajur utama",
    itemvalue: {
      visibleIf: "Jadikan opsyen kelihatan jika",
      enableIf: "Jadikan opsyen boleh dipilih jika"
    },
    "itemvalue@rows": {
      visibleIf: "Jadikan baris kelihatan jika",
      enableIf: "Jadikan baris boleh diedit jika"
    },
    imageitemvalue: {
      text: "Teks alt"
    },
    logoPosition: "Kedudukan logo",
    addLogo: "Tambahkan logo...",
    changeLogo: "Ubah logo...",
    logoPositions: {
      none: "Alih keluar logo",
      left: "Kiri",
      right: "Kanan",
      top: "Di atas",
      bottom: "Di bawah"
    },
    previewMode: "Mod pratonton",
    gridLayoutEnabled: "Dayakan reka letak grid",
    gridLayoutColumns: "Lajur susun atur grid",
    maskSettings: "Tetapan topeng",
    detailErrorLocation: "Penjajaran mesej ralat pengembangan baris",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Tataletak Panel"
      },
      general: "Umum",
      fileOptions: "Pilihan",
      html: "Editor HTML",
      columns: "Lajur",
      rows: "Baris",
      choices: "Pilihan",
      items: "Item",
      visibleIf: "Boleh Dilihat Jika",
      enableIf: "Dayakan Jika",
      requiredIf: "Diperlukan Jika",
      rateValues: "Nilai Kadar",
      choicesByUrl: "Pilihan daripada Web",
      matrixChoices: "Pilihan Lalai",
      multipleTextItems: "Input Teks",
      numbering: "Nombor",
      validators: "Pengesah",
      navigation: "Navigasi",
      question: "Soalan",
      pages: "Halaman",
      timer: "Pemasa/Kuiz",
      calculatedValues: "Nilai Dikira",
      triggers: "Pencetus",
      templateTitle: "Tajuk templat",
      totals: "Jumlah",
      logic: "Logik",
      mask: "Seting Topeng Input",
      layout: {
        panel: "Susun atur",
        question: "Susun atur",
        base: "Susun atur"
      },
      data: "Data",
      validation: "Pengesahan",
      cells: "Sel",
      showOnCompleted: "Tunjukkan pada Dilengkapkan",
      logo: "Logo dalam Tajuk Tinjauan",
      slider: "Penggelongsor",
      expression: "Ungkapan",
      questionSettings: "Seting Soalan",
      header: "Pengepala",
      background: "Latar belakang",
      appearance: "Penampilan",
      accentColors: "Warna aksen",
      surfaceBackground: "Latar Belakang Permukaan",
      scaling: "Penskalaan",
      others: "Lain-lain"
    },
    editProperty: "Edit ciri '{0}'",
    items: "[ Item: {0} ]",
    choicesVisibleIf: "Pilihan boleh dilihat jika",
    choicesEnableIf: "Pilihan boleh dipilih jika",
    columnsEnableIf: "Lajur kelihatan jika",
    rowsEnableIf: "Baris boleh dilihat jika",
    innerIndent: "Menambah inden dalaman",
    copyDefaultValueFromLastEntry: "Gunakan jawapan daripada entri terakhir sebagai lalai",
    enterNewValue: "Sila masukkan nilai.",
    noquestions: "Tiada soalan lain dalam tinjauan.",
    createtrigger: "Sila cipta pencetus",
    titleKeyboardAdornerTip: "Tekan butang enter untuk mengedit",
    keyboardAdornerTip: "Tekan butang enter untuk mengedit item, tekan butang padam untuk memadamkan item, tekan butang alt dan anak panah ke atas atau ke bawah untuk menggerakkan item",
    triggerOn: "Hidup ",
    triggerMakePagesVisible: "Jadikan halaman boleh dilihat:",
    triggerMakeQuestionsVisible: "Buat elemen boleh dilihat:",
    triggerCompleteText: "Lengkapkan tinjauan jika berjaya.",
    triggerNotSet: "Pencetus tidak ditetapkan",
    triggerRunIf: "Jalankan jika",
    triggerSetToName: "Ubah nilai: ",
    triggerFromName: "Salin nilai daripada: ",
    triggerRunExpression: "Jalankan Ekspresi ini:",
    triggerSetValue: "kepada: ",
    triggerGotoName: "Pergi kepada soalan:",
    triggerIsVariable: "Jangan letakkan pemboleh ubah dalam keputusan tinjauan.",
    triggerRunExpressionEmpty: "Sila masukkan ekspresi yang sah",
    emptyExpressionPlaceHolder: "Taip ungkapan di sini...",
    noFile: "Tiada fail dipilih",
    clearIfInvisible: "Kosongkan nilai jika soalan menjadi tersembunyi",
    valuePropertyName: "Nama sifat nilai",
    searchEnabled: "Dayakan carian",
    hideSelectedItems: "Menyembunyikan item terpilih",
    closeOnSelect: "Menutup juntai bawah selepas pemilihan",
    verticalAlign: "Penjajaran menegak",
    alternateRows: "Baris alternatif",
    columnsVisibleIf: "Lajur kelihatan jika",
    rowsVisibleIf: "Baris boleh dilihat jika",
    otherPlaceholder: "Ruang letak komen",
    filePlaceholder: "Teks ruang letak fail",
    photoPlaceholder: "Teks ruang letak foto",
    fileOrPhotoPlaceholder: "Teks ruang letak fail atau foto",
    rateType: "Jenis kadar",
    url_placeholder: "Ex.: https://api.example.com/books",
    path_placeholder: "Ex.: categories.fiction",
    questionStartIndex_placeholder: "Ex.: a)",
    width_placeholder: "Ex.: 6in",
    minWidth_placeholder: "Ex.: 600px",
    maxWidth_placeholder: "Ex.: 50%",
    imageHeight_placeholder: "Auto",
    imageWidth_placeholder: "Auto",
    itemTitleWidth_placeholder: "Cth.: 100px",
    theme: {
      themeName: "Tema",
      isPanelless: "Penampilan soalan",
      editorPanel: "Latar belakang dan jejari sudut",
      questionPanel: "Latar belakang dan jejari sudut",
      primaryColor: "Warna aksen",
      panelBackgroundTransparency: "Kelegapan latar belakang panel",
      questionBackgroundTransparency: "Kelegapan latar belakang soalan",
      fontSize: "Saiz fon",
      scale: "Skala",
      cornerRadius: "Jejari penjuru",
      advancedMode: "Mod lanjutan",
      pageTitle: "Fon tajuk",
      pageDescription: "Fon perihalan",
      questionTitle: "Fon tajuk",
      questionDescription: "Fon perihalan",
      editorFont: "Fon",
      backgroundOpacity: "Kelegapan",
      "--sjs-font-family": "Keluarga fon",
      "--sjs-general-backcolor-dim": "Warna latar belakang",
      "--sjs-primary-backcolor": "Latar belakang aksen",
      "--sjs-primary-forecolor": "Aksen latar depan",
      "--sjs-special-red": "Mesej ralat",
      "--sjs-shadow-small": "Kesan bayang",
      "--sjs-shadow-inner": "Kesan bayang",
      "--sjs-border-default": "Warna"
    },
    "header@header": {
      headerView: "Lihat",
      logoPosition: "Kedudukan logo",
      surveyTitle: "Fon tajuk tinjauan",
      surveyDescription: "Fon perihalan tinjauan",
      headerTitle: "Fon tajuk tinjauan",
      headerDescription: "Fon perihalan tinjauan",
      inheritWidthFrom: "Lebar kawasan kandungan",
      textAreaWidth: "Lebar teks",
      backgroundColorSwitch: "Warna latar belakang",
      backgroundImage: "Imej latar belakang",
      backgroundImageOpacity: "Kelegapan",
      overlapEnabled: "Bertindih",
      logoPositionX: "Kedudukan logo",
      titlePositionX: "Kedudukan tajuk",
      descriptionPositionX: "Kedudukan perihalan"
    }
  },
  // Property values
  pv: {
    "true": "Benar",
    "false": "Palsu",
    file: "Fail tempatan",
    camera: "Kamera",
    "file-camera": "Fail atau kamera tempatan",
    inherit: "warisi",
    show: "tunjukkan",
    hide: "sembunyikan",
    default: "lalai",
    initial: "awal",
    random: "rawak",
    collapsed: "kuncup",
    expanded: "kembang",
    none: "tiada",
    asc: "tertib menaik",
    desc: "menurun",
    indeterminate: "tidak tentu",
    selected: "Dipilih",
    unselected: "Tidak dipilih",
    decimal: "Perpuluhan",
    currency: "Mata wang",
    percent: "Peratus",
    firstExpanded: "Pertama dikembangkan",
    off: "mati",
    list: "senarai",
    carousel: "Carousel",
    tab: "Tab",
    progressTop: "Perkembangan atas",
    progressBottom: "Perkembangan bawah",
    progressTopBottom: "Perkembangan atas bawah",
    horizontal: "mendatar",
    vertical: "menegak",
    top: "atas",
    bottom: "bawah",
    topBottom: "atas dan bawah",
    both: "kedua-duanya",
    left: "baki",
    right: "Kanan",
    center: "Pusat",
    leftRight: "Kiri dan kanan",
    middle: "Tengah",
    color: "Warna",
    date: "Tarikh",
    datetime: "masa tarikh",
    "datetime-local": "tarikh-tempatan",
    email: "E-mel",
    month: "Bulan",
    number: "Nombor",
    password: "Kata laluan",
    range: "Pelbagai",
    tel: "Tel",
    text: "Teks",
    time: "Masa",
    url: "Url",
    week: "Minggu",
    hidden: "tersembunyi",
    edit: "edit",
    display: "paparan",
    contain: "Mengandungi",
    cover: "Perlindungan",
    fill: "Mengisi",
    next: "Seterusnya",
    last: "Terakhir",
    onComplete: "Pada selesai",
    onHidden: "Pada tersembunyi",
    onHiddenContainer: "Apabila soalan atau panel/halamannya menjadi tersembunyi",
    clearInvisibleValues: {
      none: "Tidak pernah"
    },
    clearIfInvisible: {
      none: "Tidak pernah"
    },
    inputType: {
      color: "Warna",
      date: "Tarikh",
      "datetime-local": "Tarikh dan Masa",
      email: "E-mel",
      month: "Bulan",
      number: "Nombor",
      password: "Kata laluan",
      range: "Pelbagai",
      tel: "Nombor Telefon",
      text: "Teks",
      time: "Masa",
      url: "URL",
      week: "Minggu"
    },
    autocomplete: {
      name: "Nama Penuh",
      "honorific-prefix": "Awalan",
      "given-name": "Nama Pertama",
      "additional-name": "Nama Tengah",
      "family-name": "Nama keluarga",
      "honorific-suffix": "Akhiran",
      nickname: "Nama samaran",
      "organization-title": "Tajuk pekerjaan",
      username: "Nama pengguna",
      "new-password": "Kata Laluan Baru",
      "current-password": "Kata Laluan Semasa",
      organization: "Nama Organisasi",
      "street-address": "Alamat Jalan Penuh",
      "address-line1": "Baris Alamat 1",
      "address-line2": "Baris Alamat 2",
      "address-line3": "Baris Alamat 3",
      "address-level4": "Alamat Tahap 4",
      "address-level3": "Alamat Tahap 3",
      "address-level2": "Alamat Tahap 2",
      "address-level1": "Alamat Tahap 1",
      country: "Kod Negara",
      "country-name": "Nama Negara",
      "postal-code": "Poskod",
      "cc-name": "Nama Pemegang Kad",
      "cc-given-name": "Nama Pertama Pemegang Kad",
      "cc-additional-name": "Nama Tengah Pemegang Kad",
      "cc-family-name": "Nama Keluarga Pemegang Kad",
      "cc-number": "Nombor Kad Kredit",
      "cc-exp": "Tarikh Tamat Tempoh",
      "cc-exp-month": "Bulan Tamat Tempoh",
      "cc-exp-year": "Tahun tamat tempoh",
      "cc-csc": "Kod Keselamatan Kad",
      "cc-type": "Jenis Kad Kredit",
      "transaction-currency": "Mata Wang Transaksi",
      "transaction-amount": "Jumlah Transaksi",
      language: "Bahasa Pilihan",
      bday: "Birthday",
      "bday-day": "Hari Lahir",
      "bday-month": "Bulan Hari Lahir",
      "bday-year": "Tahun Hari Lahir",
      sex: "Jantina",
      url: "URL laman web",
      photo: "Gambar Profil",
      tel: "Nombor telefon",
      "tel-country-code": "Kod Negara untuk Telefon",
      "tel-national": "Nombor Telefon Kebangsaan",
      "tel-area-code": "Kod Kawasan",
      "tel-local": "Nombor Telefon Tempatan",
      "tel-local-prefix": "Awalan Telefon Tempatan",
      "tel-local-suffix": "Akhiran Telefon Tempatan",
      "tel-extension": "Sambungan Telefon",
      email: "Alamat Emel",
      impp: "Protokol Pemesejan Segera"
    },
    maskType: {
      none: "Tiada",
      pattern: "Corak",
      numeric: "Angka",
      datetime: "Tarikh dan Masa",
      currency: "Mata wang"
    },
    inputTextAlignment: {
      auto: "Auto",
      left: "Kiri",
      right: "Kanan"
    },
    all: "semua",
    page: "halaman",
    survey: "tinjauan",
    onNextPage: "Pada halaman berikutnya",
    onValueChanged: "Pada nilai berubah",
    onValueChanging: "Sebelum jawapan diubah",
    questionsOnPageMode: {
      standard: "Struktur asal",
      singlePage: "Tunjukkan semua soalan pada satu halaman",
      questionPerPage: "Menunjukkan soalan tunggal bagi setiap halaman"
    },
    noPreview: "tiada pratonton",
    showAllQuestions: "tunjukkan pratonton dengan semua soalan",
    showAnsweredQuestions: "tunjukkan pratonton dengan soalan dijawab",
    allQuestions: "Tunjukkan semua soalan",
    answeredQuestions: "Tunjukkan soalan yang dijawab sahaja",
    pages: "halaman",
    questions: "soalan",
    requiredQuestions: "soalan diperlukan",
    correctQuestions: "soalan betul",
    buttons: "butang",
    underInput: "input di bawah",
    underTitle: "tajuk di bawah",
    onBlur: "Pada kabur",
    onTyping: "Semasa menaip",
    underRow: "Di bawah baris",
    underRowSingle: "Di bawah baris, hanya satu panel boleh dilihat",
    auto: "Auto",
    showNavigationButtons: {
      none: "Tersembunyi"
    },
    timerInfoMode: {
      combined: "Kedua-duanya"
    },
    addRowButtonLocation: {
      default: "Bergantung pada tataletak matriks"
    },
    panelsState: {
      default: "Pengguna tidak boleh mengembangkan atau meruntuhkan panel",
      collapsed: "Semua panel runtuh",
      expanded: "Semua panel diperluaskan",
      firstExpanded: "Mula-mula diperluaskan"
    },
    widthMode: {
      static: "Statik",
      responsive: "Responsif"
    },
    contentMode: {
      image: "Imej",
      video: "Video",
      youtube: "Youtube"
    },
    displayMode: {
      buttons: "Butang",
      dropdown: "Dropdown"
    },
    rateColorMode: {
      default: "Lalai",
      scale: "Skala"
    },
    scaleColorMode: {
      monochrome: "Monokrom",
      colored: "Berwarna"
    },
    autoGenerate: {
      "true": "Menjana",
      "false": "Masukkan secara manual"
    },
    rateType: {
      labels: "Label",
      stars: "Bintang",
      smileys: "Smileys"
    },
    state: {
      default: "Dikunci"
    },
    showQuestionNumbers: {
      default: "Penomboran automatik",
      on: "Penomboran automatik",
      onPage: "Mengeset semula pada setiap halaman",
      onpanel: "Set semula pada setiap panel",
      onPanel: "Set semula pada setiap panel",
      recursive: "Penomboran rekursif",
      onSurvey: "Teruskan merentasi tinjauan",
      off: "Tiada penomboran"
    },
    descriptionLocation: {
      underTitle: "Di bawah tajuk soalan",
      underInput: "Di bawah medan input"
    },
    selectToRankAreasLayout: {
      horizontal: "Di sebelah pilihan",
      vertical: "Pilihan di atas"
    },
    displayStyle: {
      decimal: "Perpuluhan",
      currency: "Mata wang",
      percent: "Peratusan",
      date: "Tarikh"
    },
    totalDisplayStyle: {
      decimal: "Perpuluhan",
      currency: "Mata wang",
      percent: "Peratusan",
      date: "Tarikh"
    },
    rowOrder: {
      initial: "Asal"
    },
    questionOrder: {
      initial: "Asal"
    },
    progressBarLocation: {
      top: "Atas",
      bottom: "Bawah",
      topbottom: "Atas dan bawah",
      aboveheader: "Di atas pengepala",
      belowheader: "Di bawah pengepala",
      off: "Tersembunyi"
    },
    sum: "Jumlah",
    count: "Kiraan",
    min: "Min",
    max: "Max",
    avg: "Pur",
    searchMode: {
      contains: "Mengandungi",
      startsWith: "Bermula dengan"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Perlindungan",
      contain: "Mengandungi",
      fill: "Regangan",
      tile: "Jubin"
    },
    backgroundImageAttachment: {
      fixed: "Tetap",
      scroll: "Tatal"
    },
    headerView: {
      basic: "Asas",
      advanced: "Lanjutan"
    },
    inheritWidthFrom: {
      survey: "Sama seperti tinjauan",
      container: "Muat ke bekas"
    },
    backgroundColorSwitch: {
      none: "Tiada",
      accentColor: "Warna aksen",
      custom: "Tersuai"
    },
    colorPalette: {
      light: "Cahaya",
      dark: "Gelap"
    },
    isPanelless: {
      "false": "Lalai",
      "true": "Tanpa Panel"
    },
    progressBarInheritWidthFrom: {
      survey: "Sama seperti tinjauan",
      container: "Sama seperti bekas"
    }
  },
  // Operators
  op: {
    empty: "kosong",
    notempty: "tidak kosong",
    equal: "sama dengan",
    notequal: "tidak sama dengan",
    contains: "mengandungi",
    notcontains: "tidak mengandungi",
    anyof: "sebarang",
    allof: "semua",
    greater: "lebih besar",
    less: "kurang",
    greaterorequal: "lebih besar atau sama dengan",
    lessorequal: "kurang atau sama dengan",
    and: "Dan",
    or: "Atau"
  },
  // Embed window
  ew: {
    angular: "Guna versi Angular",
    jquery: "Guna versi jQuery",
    knockout: "Guna versi Knockout",
    react: "Guna versi React",
    vue: "Guna versi Vue",
    bootstrap: "Untuk kerangka kerja butstrap",
    modern: "Tema moden",
    default: "Tema lalai",
    orange: "Tema oren",
    darkblue: "Tema biru gelap",
    darkrose: "Tema mawar gelap",
    stone: "Tema batu",
    winter: "Tema musim sejuk",
    winterstone: "Tema batu-musim sejuk",
    showOnPage: "Tunjukkan tinjauan pada halaman",
    showInWindow: "Tunjukkan tinjauan pada tetingkap",
    loadFromServer: "Muatkan Tinjauan JSON daripada pelayan",
    titleScript: "Skrip dan gaya",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Pilih halaman untuk mengujinya:",
    showInvisibleElements: "Pilih elemen tersembunyi",
    hideInvisibleElements: "Sembunyikan unsur tidak kelihatan"
  },
  validators: {
    answercountvalidator: "kiraan jawapan",
    emailvalidator: "e-mel",
    expressionvalidator: "ekspresi",
    numericvalidator: "numerik",
    regexvalidator: "regex",
    textvalidator: "teks"
  },
  triggers: {
    completetrigger: "lengkapkan tinjauan",
    setvaluetrigger: "tetapkan nilai",
    copyvaluetrigger: "salin nilai",
    skiptrigger: "langkau kepada soalan",
    runexpressiontrigger: "jalankan ekspresi",
    visibletrigger: "ubah kebolehlihatan (tidak digunakan lagi)"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Ex.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Ex.: mm/dd/yyyy"
    },
    currencymask: {
      prefix: "Ex.: $",
      suffix: "Ex.: USD"
    },
    panelbase: {
      questionTitleWidth: "Ex.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Cth.: 30%",
      questionTitleWidth: "Cth.: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "ID panel yang tidak kelihatan kepada responden.",
      description: "Taipkan sari kata panel.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan panel.",
      enableIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang melumpuhkan mod baca sahaja untuk panel.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang penyerahan tinjauan melainkan sekurang-kurangnya satu soalan tersarang mempunyai jawapan.",
      questionTitleLocation: "Digunakan untuk semua soalan dalam panel ini. Jika anda ingin mengubah seting ini, takrifkan peraturan penjajaran tajuk untuk soalan individu. Pilihan \"Warisan\" menggunakan peringkat halaman (jika ditetapkan) atau tetapan peringkat tinjauan (\"Atas\" secara lalai).",
      questionTitleWidth: "Menetapkan lebar yang konsisten untuk tajuk soalan apabila ia dijajarkan di sebelah kiri kotak soalan mereka. Menerima nilai CSS (px, %, dalam, pt, dll.).",
      questionErrorLocation: "Mengesetkan lokasi mesej ralat berhubung dengan semua soalan dalam panel. Opsyen \"Warisan\" menggunakan aras halaman (jika set) atau seting aras tinjauan.",
      questionOrder: "Mengekalkan susunan soalan asal atau rawak mereka. Opsyen \"Warisan\" menggunakan aras halaman (jika set) atau seting aras tinjauan.",
      page: "Meletakkan semula panel di hujung halaman yang dipilih.",
      innerIndent: "Menambah ruang atau jidar antara kandungan panel dan sempadan kiri kotak panel.",
      startWithNewLine: "Nyahpilih untuk memaparkan panel dalam satu baris dengan soalan atau panel sebelumnya. Seting tidak digunakan jika panel ialah elemen pertama dalam borang anda.",
      state: "Pilih daripada: \"Diperluaskan\" - panel dipaparkan sepenuhnya dan boleh runtuh; \"Runtuh\" - panel hanya memaparkan tajuk dan keterangan dan boleh diperluaskan; \"Dikunci\" - panel dipaparkan sepenuhnya dan tidak boleh runtuh.",
      width: "Mengesetkan lebar panel mengikut kadar unsur tinjauan lain dalam baris yang sama. Menerima nilai CSS (px, %, dalam, pt, dll.).",
      showQuestionNumbers: "Memberikan nombor kepada soalan yang bersarang dalam panel ini.",
      effectiveColSpan: "Menentukan bilangan lajur panel ini merangkumi dalam tataletak grid.",
      gridLayoutColumns: "Jadual ini membolehkan anda mengkonfigurasi setiap lajur grid dalam panel. Ia secara automatik menetapkan peratusan lebar untuk setiap lajur berdasarkan bilangan maksimum elemen dalam baris. Untuk menyesuaikan tataletak grid, laraskan nilai ini secara manual dan takrifkan lebar tajuk untuk semua soalan dalam setiap lajur."
    },
    paneldynamic: {
      name: "ID panel yang tidak kelihatan kepada responden.",
      description: "Taipkan sari kata panel.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan panel.",
      enableIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang melumpuhkan mod baca sahaja untuk panel.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang penyerahan tinjauan melainkan sekurang-kurangnya satu soalan tersarang mempunyai jawapan.",
      templateQuestionTitleLocation: "Digunakan untuk semua soalan dalam panel ini. Jika anda ingin mengubah seting ini, takrifkan peraturan penjajaran tajuk untuk soalan individu. Pilihan \"Warisan\" menggunakan peringkat halaman (jika ditetapkan) atau tetapan peringkat tinjauan (\"Atas\" secara lalai).",
      templateQuestionTitleWidth: "Menetapkan lebar yang konsisten untuk tajuk soalan apabila ia diselaraskan ke sebelah kiri kotak soalan mereka. Menerima nilai CSS (px, %, dalam, pt, dll.).",
      templateErrorLocation: "Mengesetkan lokasi mesej ralat berhubung dengan soalan dengan input tidak sah. Pilih antara: \"Atas\" - teks ralat diletakkan di bahagian atas kotak soalan; \"Bawah\" - teks ralat diletakkan di bahagian bawah kotak soalan. Pilihan \"Warisan\" menggunakan peringkat halaman (jika ditetapkan) atau tetapan peringkat tinjauan (\"Atas\" secara lalai).",
      errorLocation: "Mengesetkan lokasi mesej ralat berhubung dengan semua soalan dalam panel. Opsyen \"Warisan\" menggunakan aras halaman (jika set) atau seting aras tinjauan.",
      page: "Meletakkan semula panel di hujung halaman yang dipilih.",
      innerIndent: "Menambah ruang atau jidar antara kandungan panel dan sempadan kiri kotak panel.",
      startWithNewLine: "Nyahpilih untuk memaparkan panel dalam satu baris dengan soalan atau panel sebelumnya. Seting tidak digunakan jika panel ialah elemen pertama dalam borang anda.",
      state: "Pilih daripada: \"Diperluaskan\" - panel dipaparkan sepenuhnya dan boleh runtuh; \"Runtuh\" - panel hanya memaparkan tajuk dan keterangan dan boleh diperluaskan; \"Dikunci\" - panel dipaparkan sepenuhnya dan tidak boleh runtuh.",
      width: "Mengesetkan lebar panel mengikut kadar unsur tinjauan lain dalam baris yang sama. Menerima nilai CSS (px, %, dalam, pt, dll.).",
      templateTitle: "Taipkan templat untuk tajuk panel dinamik. Gunakan {panelIndex} untuk kedudukan umum panel dan {visiblePanelIndex} untuk pesanannya di kalangan panel yang kelihatan. Masukkan ruang letak ini ke dalam corak untuk menambah penomboran automatik.",
      templateTabTitle: "Taipkan templat untuk tajuk tab. Gunakan {panelIndex} untuk kedudukan umum panel dan {visiblePanelIndex} untuk pesanannya di kalangan panel yang boleh dilihat. Masukkan ruang letak ini ke dalam corak untuk menambah penomboran automatik.",
      tabTitlePlaceholder: "Teks sandaran untuk tajuk tab yang digunakan apabila corak tajuk tab tidak menghasilkan nilai yang bermakna.",
      templateVisibleIf: "Tetapan ini membolehkan anda mengawal penglihatan panel individu dalam panel dinamik. Gunakan ruang letak '{panel}' untuk merujuk panel semasa dalam ungkapan anda.",
      titleLocation: "Tetapan ini diwarisi secara automatik oleh semua soalan dalam panel ini. Jika anda ingin mengubah seting ini, takrifkan peraturan penjajaran tajuk untuk soalan individu. Pilihan \"Warisan\" menggunakan peringkat halaman (jika ditetapkan) atau tetapan peringkat tinjauan (\"Atas\" secara lalai).",
      descriptionLocation: "Opsyen \"Warisan\" menggunakan aras halaman (jika ditetapkan) atau seting aras tinjauan (\"Di bawah tajuk panel\" secara lalai).",
      newPanelPosition: "Mentakrifkan kedudukan panel yang baru ditambah. Secara lalai, panel baru ditambahkan ke hujungnya. Pilih \"Seterusnya\" untuk memasukkan panel baru selepas yang semasa.",
      copyDefaultValueFromLastEntry: "Pendua jawapan daripada panel terakhir dan memberikannya kepada panel dinamik tambahan seterusnya.",
      keyName: "Rujukan nama soalan untuk memerlukan pengguna memberikan jawapan yang unik untuk soalan ini dalam setiap panel."
    },
    copyDefaultValueFromLastEntry: "Pendua jawapan dari baris terakhir dan menguntukkannya ke baris dinamik tambahan seterusnya.",
    defaultValueExpression: "Seting ini membolehkan anda memperuntukkan nilai jawapan lalai berdasarkan ungkapan. Ungkapan ini boleh termasuk pengiraan asas - '{q1_id} + {q2_id}', ungkapan Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'hari ini()', 'umur()', 'min()', 'max()', 'avg()', dsb. Nilai yang ditentukan oleh ungkapan ini berfungsi sebagai nilai lalai awal yang boleh diubah oleh input manual responden.",
    resetValueIf: "Gunakan ikon tongkat ajaib untuk mengesetkan peraturan bersyarat yang menentukan masa input responden ditetapkan semula kepada nilai berdasarkan \"Ungkapan nilai lalai\" atau \"Setkan ungkapan nilai\" atau kepada nilai \"Jawapan lalai\" (jika sama ada ditetapkan).",
    setValueIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan masa untuk menjalankan \"Tetapkan ungkapan nilai\" dan secara dinamik memperuntukkan nilai yang terhasil sebagai respons.",
    setValueExpression: "Tentukan ungkapan yang mentakrifkan nilai yang akan disetkan apabila syarat dalam peraturan \"Set nilai jika\" dipenuhi. Ungkapan ini boleh termasuk pengiraan asas - '{q1_id} + {q2_id}', ungkapan Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'hari ini()', 'umur()', 'min()', 'max()', 'avg()', dsb. Nilai yang ditentukan oleh ungkapan ini boleh diubah oleh input manual responden.",
    gridLayoutEnabled: "Pencipta Tinjauan membolehkan anda melaraskan lebar sebaris elemen borang secara manual untuk mengawal reka letak. Jika ini tidak menghasilkan hasil yang diingini, anda boleh mendayakan reka letak grid, yang menstrukturkan elemen membentuk menggunakan sistem berasaskan lajur. Untuk mengkonfigurasi lajur reka letak, pilih halaman atau panel dan gunakan jadual \"Tetapan Soalan\" → \"Lajur Grid\". Untuk melaraskan bilangan lajur rentang soalan, pilihnya dan tetapkan nilai yang dikehendaki dalam medan \"Reka Letak\" → \"Rentang lajur\".",
    question: {
      name: "ID soalan yang tidak dapat dilihat oleh responden.",
      description: "Taipkan sari kata soalan.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan soalan.",
      enableIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang melumpuhkan mod baca sahaja untuk soalan itu.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang tinjauan memajukan atau menyerahkan melainkan soalan itu mendapat jawapan.",
      startWithNewLine: "Nyahpilih untuk memaparkan soalan dalam satu baris dengan soalan atau panel sebelumnya. Seting tidak digunakan jika soalan ialah unsur pertama dalam borang anda.",
      page: "Letakkan semula soalan ke hujung halaman yang dipilih.",
      state: "Pilih daripada: \"Diperluaskan\" - kotak soalan dipaparkan sepenuhnya dan boleh runtuh; \"Runtuh\" - kotak soalan hanya memaparkan tajuk dan keterangan dan boleh diperluaskan; \"Dikunci\" - kotak soalan dipaparkan sepenuhnya dan tidak boleh runtuh.",
      titleLocation: "Mengatasi peraturan penjajaran tajuk yang ditakrifkan pada panel, halaman atau tahap tinjauan. Opsyen \"Warisan\" menggunakan sebarang seting aras lebih tinggi (jika ditetapkan) atau seting aras tinjauan (\"Atas\" secara lalai).",
      descriptionLocation: "Opsyen \"Warisan\" menggunakan seting aras tinjauan (\"Di bawah tajuk soalan\" secara lalai).",
      errorLocation: "Mengesetkan lokasi mesej ralat berhubung dengan soalan dengan input tidak sah. Pilih antara: \"Atas\" - teks ralat diletakkan di bahagian atas kotak soalan; \"Bawah\" - teks ralat diletakkan di bahagian bawah kotak soalan. Pilihan \"Warisan\" menggunakan tetapan peringkat tinjauan (\"Atas\" secara lalai).",
      indent: "Menambah ruang atau jidar antara kandungan soalan dan sempadan kiri kotak soalan.",
      width: "Menetapkan lebar soalan mengikut kadar unsur tinjauan lain dalam baris yang sama. Menerima nilai CSS (px, %, dalam, pt, dll.).",
      surveyvalidator: {
        expression: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan pengesahan untuk soalan itu."
      },
      textUpdateMode: "Pilih daripada: \"Pada fokus yang hilang\" - nilai dikemas kini apabila medan input kehilangan fokus; \"Semasa menaip\" - nilai dikemas kini dalam masa nyata, semasa pengguna menaip. Pilihan \"Warisan\" menggunakan seting peringkat tinjauan (\"Pada fokus yang hilang\" secara lalai).",
      url: "Anda boleh menggunakan mana-mana perkhidmatan web sebagai sumber data untuk soalan pelbagai pilihan. Untuk mengisi nilai pilihan, masukkan URL perkhidmatan yang menyediakan data.",
      searchMode: "Operasi perbandingan yang digunakan untuk menapis senarai juntai bawah.",
      textWrapEnabled: "Teks panjang dalam pilihan pilihan akan menjana pemisah baris secara automatik agar muat dalam menu lungsur. Nyahpilih jika anda mahu teks klip.",
      effectiveColSpan: "Menentukan bilangan lajur soalan ini merangkumi dalam reka letak grid."
    },
    signaturepad: {
      signatureWidth: "Mengesetkan lebar kawasan tandatangan yang dipaparkan dan imej yang terhasil.",
      signatureHeight: "Mengesetkan ketinggian kawasan tandatangan yang dipaparkan dan imej yang terhasil.",
      signatureAutoScaleEnabled: "Pilih jika anda inginkan kawasan tandatangan mengisi semua ruang yang tersedia dalam kotak soalan sambil mengekalkan nisbah aspek 3:2 lalai. Apabila nilai lebar dan ketinggian tersuai ditetapkan, seting akan mengekalkan nisbah aspek dimensi ini."
    },
    file: {
      imageHeight: "Melaraskan ketinggian imej dalam hasil tinjauan.",
      imageWidth: "Melaraskan lebar imej dalam hasil tinjauan.",
      allowImagesPreview: "Memaparkan pratonton lakaran kecil untuk fail yang dimuat naik apabila boleh. Nyahpilih jika anda mahu menunjukkan ikon fail."
    },
    image: {
      contentMode: "Pilihan \"Auto\" secara automatik menentukan mod yang sesuai untuk paparan - Imej, Video atau YouTube - berdasarkan URL sumber yang disediakan."
    },
    imagepicker: {
      imageHeight: "Mengatasi nilai ketinggian minimum dan maksimum.",
      imageWidth: "Mengatasi nilai lebar minimum dan maksimum.",
      choices: "\"Nilai\" berfungsi sebagai ID item yang digunakan dalam peraturan bersyarat; \"Teks\" dipaparkan kepada responden.",
      contentMode: "Pilih antara \"Imej\" dan \"Video\" untuk menetapkan mod kandungan pemilih media. Jika \"Imej\" dipilih, pastikan semua pilihan yang disediakan adalah fail imej dalam format berikut: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Begitu juga, jika \"Video\" dipilih, pastikan semua pilihan adalah pautan langsung ke fail video dalam format berikut: MP4, MOV, WMV, FLV, AVI, MKV. Sila ambil perhatian bahawa pautan YouTube tidak disokong untuk pilihan video."
    },
    text: {
      size: "Seting ini hanya mengubah saiz medan input dan tidak mempengaruhi lebar kotak soalan. Untuk mengehadkan panjang input yang diterima, pergi ke <b>Pengesahihan → Had aksara maksimum</b>."
    },
    comment: {
      rows: "Mengesetkan bilangan baris yang dipaparkan dalam medan input. Jika input mengambil lebih banyak baris, bar skrol akan muncul."
    },
    // survey templates
    survey: {
      readOnly: "Pilih jika anda mahu menghalang responden daripada mengisi tinjauan anda.",
      progressBarLocation: "Menetapkan lokasi bar kemajuan. Nilai \"Auto\" memaparkan bar kemajuan di atas atau di bawah pengepala tinjauan."
    },
    matrixdropdowncolumn: {
      name: "ID lajur yang tidak kelihatan kepada responden.",
      isUnique: "Apabila didayakan untuk lajur, responden dikehendaki memberikan respons unik untuk setiap soalan dalam lajur ini.",
      rows: "Mengesetkan bilangan baris yang dipaparkan dalam medan input. Jika input mengambil lebih banyak baris, bar skrol akan muncul.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk mengesetkan peraturan bersyarat yang menentukan keterlihatan lajur.",
      enableIf: "Gunakan ikon tongkat ajaib untuk mengesetkan peraturan bersyarat yang menyahdayakan mod baca sahaja untuk lajur.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang penyerahan tinjauan melainkan sekurang-kurangnya satu soalan tersarang mempunyai jawapan.",
      showInMultipleColumns: "Apabila dipilih, cipta lajur individu untuk setiap opsyen pilihan.",
      colCount: "Mengatur pilihan pilihan dalam susun atur berbilang lajur. Apabila ditetapkan kepada 0, pilihan dipaparkan dalam satu baris. Apabila ditetapkan kepada -1, nilai sebenar diwarisi daripada sifat \"Kiraan lajur bersarang\" bagi matriks induk."
    },
    caseInsensitive: "Pilih jika huruf besar dan huruf kecil dalam ungkapan biasa mesti dianggap sebagai setara.",
    widthMode: "Pilih daripada: \"Statik\" - menetapkan lebar tetap; \"Responsif\" - membuat tinjauan menduduki lebar penuh skrin; \"Auto\" - terpakai salah satu daripada kedua-duanya bergantung kepada jenis soalan yang digunakan.",
    cookieName: "Kuki menghalang pengguna daripada mengisi tinjauan yang sama dua kali.",
    logo: "Tampal pautan imej (tiada had saiz) atau klik ikon folder untuk menyemak lalu fail daripada komputer anda (sehingga 64KB).",
    logoWidth: "Menetapkan lebar logo dalam unit CSS (px, %, in, pt, dll.).",
    logoHeight: "Menetapkan ketinggian logo dalam unit CSS (px, %, in, pt, dll.).",
    logoFit: "Pilih daripada: \"Tiada\" - imej mengekalkan saiz asalnya; \"Mengandungi\" - imej diubah saiznya agar sesuai sambil mengekalkan nisbah aspeknya; \"Cover\" - imej mengisi keseluruhan kotak sambil mengekalkan nisbah aspeknya; \"Isian\" - imej diregangkan untuk mengisi kotak tanpa mengekalkan nisbah aspeknya.",
    autoAdvanceEnabled: "Pilih jika anda mahu tinjauan maju secara automatik ke halaman seterusnya sebaik sahaja responden telah menjawab semua soalan pada halaman semasa. Ciri ini tidak akan digunakan jika soalan terakhir pada halaman adalah terbuka atau membenarkan berbilang jawapan.",
    autoAdvanceAllowComplete: "Pilih jika anda mahu tinjauan selesai secara automatik selepas responden menjawab semua soalan.",
    showNavigationButtons: "Mengesetkan kebolehlihatan dan lokasi butang navigasi pada halaman.",
    navigationButtonsLocation: "Menetapkan lokasi butang navigasi pada halaman.",
    showPreviewBeforeComplete: "Dayakan halaman pratonton dengan semua atau menjawab soalan sahaja.",
    questionTitleLocation: "Digunakan untuk semua soalan dalam tinjauan. Tetapan ini boleh diubah oleh peraturan penjajaran tajuk pada tahap yang lebih rendah: panel, halaman atau soalan. Tetapan peringkat rendah akan mengatasi mereka yang berada pada tahap yang lebih tinggi.",
    requiredMark: "Simbol atau urutan simbol yang menunjukkan bahawa jawapan diperlukan.",
    questionStartIndex: "Masukkan nombor atau huruf yang anda ingin mulakan penomboran.",
    questionErrorLocation: "Mengesetkan lokasi mesej ralat berhubung dengan soalan dengan input tidak sah. Pilih antara: \"Atas\" - teks ralat diletakkan di bahagian atas kotak soalan; \"Bawah\" - teks ralat diletakkan di bahagian bawah kotak soalan.",
    autoFocusFirstQuestion: "Pilih jika anda inginkan medan input pertama pada setiap halaman sedia untuk entri teks.",
    questionOrder: "Mengekalkan susunan soalan asal atau rawak mereka. Kesan seting ini hanya kelihatan dalam tab Pratonton.",
    maxTextLength: "Untuk soalan entri teks sahaja.",
    maxCommentLength: "Untuk komen soalan sahaja.",
    commentAreaRows: "Menetapkan bilangan baris yang dipaparkan dalam kawasan teks untuk ulasan soalan. Jika input mengambil lebih banyak baris, bar skrol muncul.",
    autoGrowComment: "Pilih jika anda inginkan komen soalan dan soalan Teks Panjang untuk mengembangkan ketinggian automatik berdasarkan panjang teks yang dimasukkan.",
    allowResizeComment: "Untuk komen soalan dan soalan Teks Panjang sahaja.",
    calculatedValues: "Pemboleh ubah tersuai berfungsi sebagai pemboleh ubah perantaraan atau tambahan yang digunakan dalam pengiraan borang. Mereka mengambil input responden sebagai nilai sumber. Setiap pemboleh ubah tersuai mempunyai nama unik dan ungkapan yang berdasarkannya.",
    includeIntoResult: "Pilih jika anda ingin nilai terhitung ungkapan disimpan bersama-sama dengan hasil tinjauan.",
    triggers: "Pencetus ialah peristiwa atau keadaan yang berdasarkan ungkapan. Sebaik sahaja ungkapan dinilai kepada \"benar\", pencetus akan mematikan tindakan. Tindakan sedemikian secara pilihan boleh mempunyai soalan sasaran yang mempengaruhinya.",
    clearInvisibleValues: "Pilih sama ada atau tidak untuk mengosongkan nilai untuk soalan yang tersembunyi oleh logik bersyarat dan bila untuk melakukannya.",
    textUpdateMode: "Pilih daripada: \"Pada fokus yang hilang\" - nilai dikemas kini apabila medan input kehilangan fokus; \"Semasa menaip\" - nilai dikemas kini dalam masa nyata, semasa pengguna menaip.",
    columns: "Nilai kiri berfungsi sebagai ID lajur yang digunakan dalam peraturan bersyarat, nilai kanan dipaparkan kepada responden.",
    rows: "Nilai kiri berfungsi sebagai ID baris yang digunakan dalam peraturan bersyarat, nilai kanan dipaparkan kepada responden.",
    columnMinWidth: "Menerima nilai CSS (px, %, dalam, pt, dll.).",
    rowTitleWidth: "Menerima nilai CSS (px, %, dalam, pt, dll.).",
    totalText: "Boleh dilihat hanya apabila sekurang-kurangnya satu lajur mempunyai jenis Jumlah atau ungkapan Jumlah.",
    cellErrorLocation: "Mengesetkan lokasi mesej ralat berhubung dengan sel dengan input tidak sah. Opsyen \"Warisan\" menggunakan seting daripada sifat \"Penjajaran mesej ralat\".",
    detailErrorLocation: "Menetapkan lokasi mesej ralat untuk soalan yang bersarang dalam bahagian terperinci. Pilihan \"Mewarisi\" menggunakan tetapan daripada sifat \"Penjajaran mesej ralat\".",
    keyDuplicationError: "Apabila sifat \"Mencegah respons pendua\" didayakan, responden yang cuba menyerahkan entri pendua akan menerima mesej ralat berikut.",
    totalExpression: "Membolehkan anda mengira jumlah nilai berdasarkan ungkapan. Ungkapan ini boleh termasuk pengiraan asas ('{q1_id} + {q2_id}'), Ungkapan Boolean ('{age} > 60') dan fungsi ('iif()', 'hari ini()', 'umur()', 'min()', 'max()', 'avg()', dll.).",
    confirmDelete: "Mencetuskan gesaan yang meminta untuk mengesahkan pemadaman baris.",
    keyName: "Jika lajur yang ditentukan mengandungi nilai yang sama, tinjauan akan membuang ralat \"Nilai kunci bukan unik\".",
    description: "Taipkan sari kata.",
    locale: "Pilih bahasa untuk mula mencipta tinjauan anda. Untuk menambah terjemahan, tukar kepada bahasa baru dan terjemahkan teks asal di sini atau dalam tab Terjemahan.",
    detailPanelMode: "Mengesetkan lokasi seksyen butiran berhubung dengan baris. Pilih daripada: \"Tiada\" - tiada pengembangan ditambah; \"Di bawah baris\" - pengembangan baris diletakkan di bawah setiap baris matriks; \"Di bawah baris, paparkan pengembangan satu baris sahaja\" - pengembangan dipaparkan di bawah satu baris sahaja, pengembangan baris yang tinggal runtuh.",
    imageFit: "Pilih daripada: \"Tiada\" - imej mengekalkan saiz asalnya; \"Mengandungi\" - imej diubah saiznya agar sesuai sambil mengekalkan nisbah aspeknya; \"Cover\" - imej mengisi keseluruhan kotak sambil mengekalkan nisbah aspeknya; \"Isian\" - imej diregangkan untuk mengisi kotak tanpa mengekalkan nisbah aspeknya.",
    autoGrow: "Secara beransur-ansur meningkatkan ketinggian medan input apabila data dimasukkan. Membatalkan seting \"Ketinggian medan input (dalam garisan)\".",
    allowResize: "Pemegang saiz semula (atau cengkaman) muncul di sudut dan boleh diseret untuk mengubah saiz medan input.",
    timeLimit: "Selang masa dalam beberapa saat selepas itu tinjauan secara automatik maju ke halaman Terima Kasih.",
    timeLimitPerPage: "Selang masa dalam beberapa saat selepas itu tinjauan secara automatik maju ke halaman seterusnya.",
    validateVisitedEmptyFields: "Dayakan pilihan ini untuk mencetuskan pengesahan apabila pengguna memfokuskan pada medan input kosong dan kemudian meninggalkannya tanpa membuat sebarang perubahan.",
    page: {
      name: "ID halaman yang tidak dapat dilihat oleh responden.",
      description: "Taipkan sari kata halaman.",
      navigationTitle: "Kapsyen yang dipaparkan pada butang navigasi dalam bar kemajuan atau jadual kandungan (TOC). Jika anda membiarkan medan ini kosong, butang navigasi akan menggunakan tajuk halaman atau nama halaman. Untuk mendayakan bar kemajuan atau TOC, pergi ke \"Tinjauan\" → \"Navigasi\".",
      timeLimit: "Selang masa dalam beberapa saat selepas itu tinjauan secara automatik maju ke halaman seterusnya.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan halaman.",
      enableIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menyahdayakan mod baca sahaja untuk halaman.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang penyerahan tinjauan melainkan sekurang-kurangnya satu soalan tersarang mempunyai jawapan.",
      questionTitleLocation: "Digunakan untuk semua soalan dalam halaman ini. Jika anda ingin mengubah seting ini, takrifkan peraturan penjajaran tajuk untuk soalan atau panel individu. Pilihan \"Warisan\" menggunakan tetapan peringkat tinjauan (\"Atas\" secara lalai).",
      questionTitleWidth: "Menetapkan lebar yang konsisten untuk tajuk soalan apabila ia dijajarkan di sebelah kiri kotak soalan mereka. Menerima nilai CSS (px, %, dalam, pt, dll.).",
      questionErrorLocation: "Mengesetkan lokasi mesej ralat berhubung dengan soalan dengan input tidak sah. Pilih antara: \"Atas\" - teks ralat diletakkan di bahagian atas kotak soalan; \"Bawah\" - teks ralat diletakkan di bahagian bawah kotak soalan. Pilihan \"Warisan\" menggunakan tetapan peringkat tinjauan (\"Atas\" secara lalai).",
      questionOrder: "Mengekalkan susunan soalan asal atau rawak mereka. Pilihan \"Warisan\" menggunakan seting peringkat tinjauan (\"Asal\" secara lalai). Kesan seting ini hanya kelihatan dalam tab Pratonton.",
      showNavigationButtons: "Mengesetkan keterlihatan butang navigasi pada halaman. Opsyen \"Warisan\" menggunakan seting aras tinjauan, yang lalai kepada \"Boleh Dilihat\".",
      gridLayoutColumns: "Jadual ini membolehkan anda mengkonfigurasi setiap lajur grid pada halaman. Ia secara automatik menetapkan peratusan lebar untuk setiap lajur berdasarkan bilangan maksimum elemen dalam baris. Untuk menyesuaikan tataletak grid, laraskan nilai ini secara manual dan takrifkan lebar tajuk untuk semua soalan dalam setiap lajur."
    },
    timerLocation: "Menetapkan lokasi pemasa pada halaman.",
    panelsState: "Pilih daripada: \"Dikunci\" - pengguna tidak boleh mengembangkan atau meruntuhkan panel; \"Runtuhkan semua\" - semua panel bermula dalam keadaan runtuh; \"Kembangkan semua\" - semua panel bermula dalam keadaan yang diperluaskan; \"Pertama diperluaskan\" - hanya panel pertama yang pada mulanya diperluaskan.",
    imageLinkName: "Masukkan nama sifat dikongsi dalam tatasusunan objek yang mengandungi URL fail imej atau video yang anda ingin paparkan dalam senarai pilihan.",
    choices: "Nilai kiri berfungsi sebagai ID item yang digunakan dalam peraturan bersyarat, nilai yang betul dipaparkan kepada responden.",
    title: "Taipkan tajuk mesra pengguna untuk dipaparkan.",
    waitForUpload: "Memastikan pengguna tidak akan melengkapkan tinjauan sehingga fail dimuat naik.",
    minWidth: "Menerima nilai CSS (px, %, dalam, pt, dll.).",
    maxWidth: "Menerima nilai CSS (px, %, dalam, pt, dll.).",
    width: "Menerima nilai CSS (px, %, dalam, pt, dll.).",
    valueName: "Jika anda tidak menetapkan sifat ini, jawapannya akan disimpan dalam medan yang ditentukan oleh sifat Nama.",
    defaultDisplayValue: "Nilai yang dipaparkan dalam soalan HTML dan dalam tajuk dinamik dan perihalan elemen tinjauan apabila nilai soalan kosong.",
    useDisplayValuesInDynamicTexts: "Dalam jenis soalan pilihan tunggal dan berbilang pilihan, setiap pilihan pilihan mempunyai ID dan nilai paparan. Apabila dipilih, seting ini menunjukkan nilai paparan dan bukannya nilai ID dalam soalan HTML dan tajuk dinamik serta perihalan unsur tinjauan.",
    clearIfInvisible: "Pilih sama ada untuk mengosongkan nilai soalan yang tersembunyi oleh logik bersyarat dan bila untuk melakukannya. Pilihan \"Warisan\" menggunakan tetapan peringkat tinjauan (\"Setelah selesai tinjauan\" secara lalai).",
    choicesFromQuestionMode: "Pilih daripada: \"Semua\" - menyalin semua pilihan pilihan daripada soalan yang dipilih; \"Dipilih\" - secara dinamik hanya menyalin pilihan pilihan yang dipilih; \"Tidak dipilih\" - secara dinamik menyalin hanya pilihan pilihan yang tidak dipilih. Pilihan \"Tiada\" dan \"Lain-lain\" disalin secara lalai jika didayakan dalam soalan sumber.",
    choiceValuesFromQuestion: "Dalam jenis soalan pilihan tunggal dan berbilang pilihan, setiap pilihan pilihan mempunyai ID dan nilai paparan. Seting ini menentukan lajur matriks atau soalan panel yang harus menyediakan ID.",
    choiceTextsFromQuestion: "Dalam jenis soalan pilihan tunggal dan berbilang pilihan, setiap pilihan pilihan mempunyai ID dan nilai paparan. Seting ini menentukan lajur matriks atau soalan panel yang harus menyediakan teks paparan.",
    allowCustomChoices: "Pilih untuk membenarkan responden menambah pilihan mereka sendiri jika pilihan yang dikehendaki tidak tersedia dalam menu lungsur. Pilihan tersuai hanya akan disimpan buat sementara waktu sepanjang sesi penyemak imbas semasa.",
    showOtherItem: "Apabila dipilih, pengguna boleh memasukkan input tambahan dalam kotak komen berasingan.",
    separateSpecialChoices: "Memaparkan setiap pilihan pilihan khas (\"Tiada\", \"Lain\", \"Pilih Semua\") pada baris baru, walaupun menggunakan tataletak berbilang lajur.",
    path: "Tentukan lokasi dalam set data perkhidmatan yang lokasi tatasusunan sasaran objek. Biarkan kosong jika URL telah menuding ke tatasusunan.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Masukkan nama sifat seragam dalam tatasusunan objek yang mengandungi nilai yang anda ingin paparkan dalam senarai pilihan.",
    allowEmptyResponse: "Pilih untuk membenarkan perkhidmatan mengembalikan respons atau tatasusunan kosong.",
    choicesVisibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan semua pilihan pilihan.",
    rateValues: "Nilai kiri berfungsi sebagai ID item yang digunakan dalam peraturan bersyarat, nilai yang betul dipaparkan kepada responden.",
    rating: {
      displayMode: "\"Auto\" memilih antara mod \"Butang\" dan \"Dropdown\" berdasarkan lebar yang tersedia. Apabila lebar tidak mencukupi untuk memaparkan butang, soalan memaparkan menu lungsur."
    },
    valuePropertyName: "Membolehkan anda menyambungkan soalan yang menghasilkan hasil dalam format yang berbeza. Apabila soalan tersebut dipautkan bersama menggunakan pengecam cantuman, sifat kongsi ini menyimpan nilai soalan terpilih.",
    searchEnabled: "Pilih jika anda ingin mengemas kini kandungan menu juntai bawah agar sepadan dengan pertanyaan carian yang pengguna menaip dalam medan input.",
    valueTrue: "Nilai untuk menyimpan hasil tinjauan apabila responden memberikan jawapan yang positif.",
    valueFalse: "Nilai untuk menyimpan hasil tinjauan apabila responden memberikan jawapan negatif.",
    showPreview: "Ia tidak disyorkan untuk menyahdayakan pilihan ini kerana ia mengubah imej Pratonton dan menyukarkan pengguna untuk memahami sama ada fail telah dimuat naik.",
    needConfirmRemoveFile: "Mencetuskan gesaan yang meminta untuk mengesahkan penghapusan fail.",
    selectToRankEnabled: "Membolehkan untuk menilai pilihan yang dipilih sahaja. Pengguna akan menyeret item terpilih dari senarai pilihan untuk memesannya dalam kawasan kedudukan.",
    dataList: "Masukkan senarai pilihan yang akan dicadangkan kepada responden semasa input.",
    inputSize: "Seting hanya mengubah saiz medan input dan tidak mempengaruhi lebar kotak soalan.",
    itemTitleWidth: "Menetapkan lebar yang konsisten untuk semua label item. Menerima nilai CSS (px, %, in, pt, dll.).",
    inputTextAlignment: "Pilih cara untuk menjajarkan nilai input dalam medan. Seting lalai \"Auto\" menjajarkan nilai input ke kanan jika mata wang atau topeng angka digunakan dan ke kiri jika tidak.",
    altText: "Berfungsi sebagai pengganti apabila imej tidak boleh dipaparkan pada peranti pengguna dan untuk tujuan kebolehcapaian.",
    rateColorMode: "Mentakrifkan warna emoji yang dipilih apabila jenis ikon Penarafan ditetapkan kepada \"Smileys\". Pilih antara: \"Lalai\" - emoji yang dipilih muncul dalam warna tinjauan lalai; \"Skala\" - emoji yang dipilih mewarisi warna dari skala penarafan.",
    expression: {
      name: "ID ungkapan yang tidak kelihatan kepada responden.",
      description: "Taipkan sari kata ungkapan.",
      expression: "Ungkapan boleh termasuk pengiraan asas ('{q1_id} + {q2_id}'), syarat ('{age} > 60'), dan fungsi ('iif()', 'hari ini()', 'umur()', 'min()', 'max()', 'pur()', dll.)."
    },
    storeOthersAsComment: "Pilih untuk menyimpan nilai pilihan \"Lain-lain\" sebagai harta berasingan dalam hasil tinjauan.",
    format: "Gunakan {0} sebagai ruang letak untuk nilai sebenar.",
    acceptedTypes: "Rujuk perihalan atribut [terima](https://www.w3schools.com/tags/att_input_accept.asp) untuk maklumat lanjut.",
    columnColCount: "Hanya digunakan untuk jenis sel Kumpulan Radio dan Kotak Semak.",
    autocomplete: "Rujuk perihalan atribut [autolengkap](https://developer.mozilla.org/en-US/docs/Web/HTML/Atribut/autolengkap) untuk maklumat lanjut.",
    filePlaceholder: "Digunakan apabila \"Jenis sumber\" ialah \"Fail tempatan\" atau apabila kamera tidak tersedia",
    photoPlaceholder: "Digunakan apabila \"Jenis sumber\" ialah \"Kamera\".",
    fileOrPhotoPlaceholder: "Digunakan apabila \"Jenis sumber\" ialah \"Fail atau kamera tempatan\".",
    colCount: "Mengatur pilihan pilihan dalam susun atur berbilang lajur. Apabila ditetapkan kepada 0, pilihan dipaparkan dalam satu baris.",
    masksettings: {
      saveMaskedValue: "Pilih jika anda ingin menyimpan nilai soalan dengan topeng yang digunakan dalam hasil tinjauan."
    },
    patternmask: {
      pattern: "Corak boleh mengandungi literal rentetan dan ruang letak berikut: '9' - untuk digit; 'a' - untuk huruf besar atau kecil; '#' - untuk digit atau huruf besar atau huruf kecil. Gunakan tindak balas '\\' untuk melarikan diri daripada watak."
    },
    datetimemask: {
      pattern: "Corak boleh mengandungi aksara pemisah dan ruang letak berikut:<br>'m' - Nombor bulan.<br>'mm' - Nombor bulan, dengan sifar awalan untuk nilai satu digit. <br>'d' - Hari dalam bulan. <br>'dd' - Hari dalam bulan, dengan sifar utama untuk nilai satu digit. <br>'yy' - Dua digit terakhir tahun ini. <br>'yyyy' - Tahun empat angka. <br>'H' - Jam dalam format 24 jam. <br>'HH' - Jam dalam format 24 jam, dengan sifar utama untuk nilai satu digit. <br>'h' - Jam dalam format 12 jam. <br>'hh' - Jam dalam format 12 jam, dengan sifar utama untuk nilai satu digit. <br>'MM' - Minit. <br>'ss' - Saat. <br>'TT' - Tempoh jam 12 jam dalam kes atas (AM / PM). <br>'TT' - Tempoh jam 12 jam dalam kes yang lebih rendah (AM / PM)."
    },
    numericmask: {
      decimalSeparator: "Simbol yang digunakan untuk memisahkan bahagian pecahan daripada bahagian integer bagi nombor yang dipaparkan.",
      thousandsSeparator: "Simbol yang digunakan untuk memisahkan digit nombor besar ke dalam kumpulan tiga.",
      precision: "Hadkan bilangan digit untuk dikekalkan selepas titik perpuluhan bagi nombor yang dipaparkan."
    },
    currencymask: {
      prefix: "Satu atau beberapa simbol yang akan dipaparkan sebelum nilai.",
      suffix: "Satu atau beberapa simbol yang akan dipaparkan selepas nilai."
    },
    theme: {
      isPanelless: "Tetapan ini hanya digunakan pada soalan di luar panel.",
      primaryColor: "Menetapkan warna tambahan yang menyerlahkan elemen tinjauan utama.",
      panelBackgroundTransparency: "Melaraskan ketelusan panel dan kotak soalan berbanding dengan latar belakang tinjauan.",
      questionBackgroundTransparency: "Melaraskan ketelusan elemen input berbanding dengan latar belakang tinjauan.",
      cornerRadius: "Menetapkan jejari sudut untuk semua elemen segi empat tepat. Dayakan Mod Lanjutan jika anda ingin menetapkan nilai jejari sudut individu untuk elemen input atau panel dan kotak soalan.",
      "--sjs-general-backcolor-dim": "Menetapkan warna latar belakang utama tinjauan."
    },
    header: {
      inheritWidthFrom: "Pilihan \"Sama seperti bekas\" melaraskan secara automatik lebar kawasan kandungan pengepala agar sesuai dengan elemen HTML tempat tinjauan diletakkan.",
      textAreaWidth: "Lebar kawasan pengepala yang mengandungi tajuk dan perihalan tinjauan, diukur dalam piksel.",
      overlapEnabled: "Apabila didayakan, bahagian atas tinjauan menindih bahagian bawah pengepala.",
      mobileHeight: "Apabila ditetapkan kepada 0, ketinggian dikira secara automatik untuk menampung kandungan pengepala."
    },
    progressBarInheritWidthFrom: "Pilihan \"Sama seperti bekas\" melaraskan lebar kawasan bar kemajuan secara automatik agar sesuai dengan elemen HTML yang diletakkan dalam tinjauan."
  },
  // Properties
  p: {
    title: {
      name: "tajuk",
      title: "Biarkan kosong, jika sama seperti 'Nama'"
    },
    multiSelect: "Pilih berbilang",
    showLabel: "Tunjukkan label",
    swapOrder: "Tukar pesanan Ya dan Tidak",
    value: "Nilai",
    tabAlign: "Penjajaran tab",
    sourceType: "Jenis sumber",
    fitToContainer: "Muat ke bekas",
    setValueExpression: "Mengesetkan ungkapan nilai",
    description: "perihalan",
    logoFit: "Muat logo",
    pages: "halaman",
    questions: "Soalan",
    triggers: "pencetus",
    calculatedValues: "Nilai dikira",
    surveyId: "Id tinjauan",
    surveyPostId: "Id siaran tinjauan",
    surveyShowDataSaving: "Tinjauan menunjukkan penjimatan data",
    questionDescriptionLocation: "Lokasi perihalan soalan",
    progressBarType: "Jenis bar perkembangan",
    showTOC: "Tunjukkan TOC",
    tocLocation: "Lokasi Toc",
    questionTitlePattern: "Corak tajuk soalan",
    widthMode: "Mod lebar",
    showBrandInfo: "Tunjukkan maklumat jenama",
    useDisplayValuesInDynamicTexts: "Guna nilai paparan dalam tajuk",
    visibleIf: "Boleh dilihat jika",
    defaultValueExpression: "Ekspresi nilai lalai",
    requiredIf: "Diperlukan jika",
    resetValueIf: "Mengeset semula nilai jika",
    setValueIf: "Setkan nilai jika",
    validators: "Pengesah",
    bindings: "ikatan",
    renderAs: "Render sebagai",
    attachOriginalItems: "Lampirkan item asal",
    choices: "pilihan",
    choicesByUrl: "Pilihan melalui URL",
    currency: "mata wang",
    cellHint: "Petunjuk sel",
    totalMaximumFractionDigits: "Jumlah digit pecahan maksimum",
    totalMinimumFractionDigits: "Jumlah digit pecahan minimum",
    columns: "lajur",
    detailElements: "Unsur terperinci",
    allowAdaptiveActions: "Benarkan tindakan penyesuaian",
    defaultRowValue: "Nilai baris lalai",
    detailPanelShowOnAdding: "Butiran panel tunjukkan pada penambahan",
    choicesLazyLoadEnabled: "Pilihan beban malas didayakan",
    choicesLazyLoadPageSize: "Pilihan malas memuatkan saiz halaman",
    inputFieldComponent: "Komponen medan input",
    itemComponent: "Komponen item",
    min: "min",
    max: "maks",
    minValueExpression: "Ekspresi nilai min",
    maxValueExpression: "Ekspresi nilai maks",
    step: "langkah",
    dataList: "Senarai data",
    inputSize: "Saiz item",
    itemTitleWidth: "Lebar label item (dalam piksel)",
    inputTextAlignment: "Penjajaran nilai input",
    elements: "Unsur",
    content: "Kandungan",
    navigationTitle: "Tajuk navigasi",
    navigationDescription: "Perihalan navigasi",
    longTap: "Ketuk panjang",
    autoGrow: "Auto besarkan",
    allowResize: "Benarkan pensaizan semula",
    acceptCarriageReturn: "Terima pulangan pengangkutan",
    displayMode: "Mod paparan",
    rateType: "Jenis kadar",
    label: "label",
    contentMode: "Mod kandungan",
    imageFit: "Muat imej",
    altText: "Teks alt",
    height: "tinggi",
    mobileHeight: "Ketinggian pada telefon pintar",
    penColor: "Warna pen",
    backgroundColor: "Warna latar belakang",
    templateElements: "Unsur templat",
    operator: "Pengendali",
    isVariable: "Adakah pembolehubah",
    runExpression: "Jalankan ungkapan",
    showCaption: "Tunjukkan kapsyen",
    iconName: "Nama ikon",
    iconSize: "Saiz ikon",
    precision: "Ketepatan",
    matrixDragHandleArea: "Kawasan pemegang seretan matriks",
    backgroundImage: "Imej latar belakang",
    backgroundImageFit: "Kesesuaian imej latar belakang",
    backgroundImageAttachment: "Lampiran imej latar belakang",
    backgroundOpacity: "Kelegapan latar belakang",
    selectToRankEnabled: "Pilih untuk mendayakan kedudukan",
    selectToRankAreasLayout: "Pilih untuk menentukan tataletak kawasan",
    selectToRankEmptyRankedAreaText: "Teks untuk ditunjukkan jika semua opsyen dipilih",
    selectToRankEmptyUnrankedAreaText: "Teks ruang letak untuk kawasan penarafan",
    allowCameraAccess: "Benarkan capaian kamera",
    scaleColorMode: "Mod warna skala",
    rateColorMode: "Mod warna kadar",
    copyDisplayValue: "Nilai paparan salin",
    effectiveColSpan: "Rentang lajur",
    progressBarInheritWidthFrom: "Lebar kawasan bar kemajuan"
  },
  theme: {
    advancedMode: "Mod lanjutan",
    pageTitle: "Fon tajuk halaman",
    questionTitle: "Fon tajuk soalan",
    editorPanel: "Unsur input",
    lines: "Garisan",
    primaryDefaultColor: "Lalai",
    primaryDarkColor: "Hover",
    primaryLightColor: "Dipilih",
    backgroundDimColor: "Warna latar belakang",
    cornerRadius: "Jejari penjuru",
    backcolor: "Latar belakang lalai",
    hovercolor: "Latarbelakang penuding",
    borderDecoration: "Hiasan sempadan",
    fontColor: "Warna fon",
    backgroundColor: "Warna latar belakang",
    primaryForecolor: "Warna lalai",
    primaryForecolorLight: "Warna dinyahdayakan",
    font: "Fon",
    borderDefault: "Gelap",
    borderLight: "Lebih ringan",
    fontFamily: "Keluarga fon",
    fontWeightRegular: "Tetap",
    fontWeightHeavy: "Berat",
    fontWeightSemiBold: "Separa berani",
    fontWeightBold: "Berani",
    color: "Warna",
    placeholderColor: "Warna ruang letak",
    size: "Saiz",
    opacity: "Kelegapan",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Menambah Kesan Bayang",
    boxShadowBlur: "Kabur",
    boxShadowSpread: "Penyebaran",
    boxShadowDrop: "Singgah",
    boxShadowInner: "Dalaman",
    names: {
      default: "Lalai",
      sharp: "Tajam",
      borderless: "Tanpa sempadan",
      flat: "Rata",
      plain: "Biasa",
      doubleborder: "Sempadan Berkembar",
      layered: "Berlapis",
      solid: "Pepejal",
      threedimensional: ".3D",
      contrast: "Sebaliknya"
    },
    colors: {
      teal: "Teal",
      blue: "Blue",
      purple: "Ungu",
      orchid: "Orchid",
      tulip: "Tulip",
      brown: "Brown",
      green: "Hijau",
      gray: "Kelabu"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Latar belakang permukaan",
    "--sjs-primary-background-500": "Utama",
    "--sjs-secondary-background-500": "Menengah",
    surfaceScale: "Permukaansurface",
    userInterfaceBaseUnit: "Antara muka pengguna",
    fontScale: "Fon",
    names: {
      sc2020: "Pencipta Tinjauan 2020",
      "default-light": "Cahaya",
      "default-dark": "Gelap",
      "default-contrast": "Sebaliknya"
    }
  }
};

setupLocale({ localeCode: "ms", strings: msStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.tagbox: "Multi-Select Dropdown" => "Juntai Bawah Berbilang Pilihan"
// qt.buttongroup: "Button Group" => "Kumpulan Butang"
// ed.surveySettings: "Survey Settings" => "Seting Tinjauan"
// ed.surveySettingsTooltip: "Open survey settings" => "Buka seting tinjauan"
// ed.prevSelected: "Select previous" => "Pilih sebelumnya"
// ed.nextSelected: "Select next" => "Pilih seterusnya"
// ed.surveyTypeName: "Survey" => "Kaji selidik"
// ed.pageTypeName: "Page" => "Laman"
// ed.panelTypeName: "Panel" => "Panel"
// ed.questionTypeName: "Question" => "Soalan"
// ed.columnTypeName: "Column" => "Lajur"
// ed.themeSurvey: "Themes" => "Tema"
// ed.defaultV2Theme: "Default" => "Lalai"
// ed.modernTheme: "Modern" => "Moden"
// ed.defaultTheme: "Default (legacy)" => "Lalai (warisan)"
// ed.jsonHideErrors: "Hide errors" => "Sembunyikan ralat"
// ed.jsonShowErrors: "Show errors" => "Tunjukkan ralat"
// ed.showMoreChoices: "Show more" => "Tunjuk lebih banyak"
// ed.showLessChoices: "Show less" => "Tunjukkan kurang"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Taip untuk mencari..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Soalan Pilihan"
// ed.toolboxTextCategory: "Text Input Questions" => "Soalan Input Teks"
// ed.toolboxContainersCategory: "Containers" => "Bekas"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Soalan Matriks"
// ed.toolboxMiscCategory: "Misc" => "Misc"
// ed.translationPropertyGridTitle: "Language Settings" => "Seting Bahasa"
// ed.themePropertyGridTitle: "Theme Settings" => "Seting Tema"
// ed.translationLanguages: "Languages" => "Bahasa-bahasa"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Rentetan yang Digunakan Sahaja"
// ed.translationPlaceHolder: "Translation..." => "Penterjemahan..."
// ed.themeExportButton: "Export" => "Eksport"
// ed.themeImportButton: "Import" => "Import"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Pilihan disalin daripada"
// ed.htmlPlaceHolder: "HTML content will be here." => "Kandungan HTML akan berada di sini."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Lepaskan soalan dari kotak alat di sini."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Tinjauan itu kosong. Seret elemen dari kotak alat atau klik butang di bawah."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Seret dan lepaskan imej di sini atau klik butang di bawah dan pilih imej untuk dimuat naik"
// ed.imageChooseImage: "Choose Image" => "Pilih Imej"
// ed.addNewTypeQuestion: "Add {0}" => "Tambah {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "Auto"
// ed.choices_Item: "Item " => "Perkara "
// lg.addNewItem: "Add New Rule" => "Tambah peraturan baru"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Cipta peraturan untuk menyesuaikan aliran tinjauan."
// lg.page_enableName: "Enable (disable) page" => "Halaman Dayakan (nyahdayakan)"
// lg.column_visibilityName: "Show (hide) column" => "Tunjukkan lajur (sembunyikan)"
// lg.column_enableName: "Enable (disable) column" => "Mendayakan (nyahdayakan) lajur"
// lg.column_requireName: "Make column required" => "Jadikan lajur diperlukan"
// lg.itemEmptyExpressionText: "New rule" => "Peraturan baru"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "menjadikan {0} lajur soalan {1} kelihatan"
// lg.column_enableText: "make column {0} of question {1} enable" => "menjadikan lajur {0} soalan {1} mendayakan"
// lg.column_requireText: "make column {0} of question {1} required" => "menjadikan lajur {0} soalan {1} diperlukan"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "nilai soalan yang jelas: {0}"
// lg.showAllQuestions: "All Questions" => "Semua Soalan"
// lg.showAllActionTypes: "All Action Types" => "Semua Jenis Tindakan"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Peraturan logik tidak lengkap"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Anda belum menyelesaikan beberapa peraturan logik. Jika anda meninggalkan tab sekarang, perubahan akan hilang. Adakah anda masih mahu meninggalkan tab tanpa melengkapkan perubahan?"
// lg.uncompletedRule_apply: "Yes" => "Ya"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Tidak, saya mahu melengkapkan peraturan"
// pe.clear: "Clear" => "Jelas"
// pe.set: "Set" => "Set"
// pe.change: "Change" => "Menukar"
// pe.close: "Close" => "Tutup"
// pe.removeItem: "Click to remove the item..." => "Klik untuk mengalih keluar item..."
// pe.dragItem: "Drag the item" => "Seret item"
// pe.doneEditing: "Done" => "Dilakukan"
// pe.emptyValue: "Value is empty" => "Nilai kosong"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Nilai '{0}' tidak unik"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Sila hadkan bilangan item dari {0} hingga {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Anda boleh mengesetkan data dalam format berikut:\nvalue1|text\nnilai2"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Pratonton jawapan sebelum menyerahkan tinjauan"
// pe.overridingPropertyPrefix: "Set by " => "Ditetapkan mengikut "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Jangan gunakan perkataan terpelihara: \"item\", \"pilihan\", \"panel\", \"baris\"."
// pe.listIsEmpty@choices: "No choices have been added yet" => "Tiada pilihan telah ditambah lagi"
// pe.addNew@choices: "Add a choice" => "Tambah pilihan"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Mendapatkan nilai daripada medan JSON berikut"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Dapatkan URL imej daripada medan JSON berikut"
// pe.and: "and" => "Dan"
// pe.or: "or" => "Atau"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Pilih soalan untuk mula mengkonfigurasi syarat."
// pe.if: "If" => "Jika"
// pe.then: "then" => "Kemudian"
// pe.setToName: "Target question" => "Soalan sasaran"
// pe.fromName: "Question to copy answer from" => "Soalan untuk menyalin jawapan daripada"
// pe.gotoName: "Question to skip to" => "Soalan untuk melangkau ke"
// pe.ruleIsNotSet: "Rule is incorrect" => "Peraturan tidak betul"
// pe.includeIntoResult: "Include into survey results" => "Dimasukkan ke dalam hasil tinjauan"
// pe.portraitOrientation: "Switch to portrait orientation" => "Bertukar kepada orientasi potret"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Ketinggian imej (dalam nilai diterima CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Lebar imej (dalam nilai diterima CSS)"
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Had masa untuk menyelesaikan halaman (dalam beberapa saat)"
// question.page: "Parent page" => "Halaman induk"
// pe.noEntriesText: "Empty entries text" => "Kosongkan teks entri"
// pe.setValue: "Answer" => "Jawapan"
// pe.dataFormat: "Image format" => "Format imej"
// pe.allowAddRows: "Allow adding rows" => "Benarkan menambah baris"
// pe.allowRemoveRows: "Allow removing rows" => "Benarkan mengalih keluar baris"
// pe.allowRowReorder: "Allow row drag and drop" => "Benarkan seret dan lepas baris"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Tidak terpakai jika anda menentukan lebar atau ketinggian imej yang tepat."
// pe.minImageWidth: "Minimum image width" => "Lebar imej minimum"
// pe.maxImageWidth: "Maximum image width" => "Lebar imej maksimum"
// pe.minImageHeight: "Minimum image height" => "Ketinggian imej minimum"
// pe.maxImageHeight: "Maximum image height" => "Ketinggian imej maksimum"
// surveyvalidator.text: "Error message" => "Mesej ralat"
// surveyvalidator.expression: "Validation expression" => "Ungkapan pengesahihan"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (URL atau rentetan berkod asas64)"
// pe.questionsOnPageMode: "Survey structure" => "Struktur tinjauan"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Panjang jawapan maksimum (dalam aksara)"
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Panjang komen maksimum (dalam aksara)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Kembangkan kawasan komen secara automatik jika perlu"
// pe.allowResizeComment: "Allow users to resize text areas" => "Benarkan pengguna mensaiz semula kawasan teks"
// pe.textUpdateMode: "Update text question value" => "Mengemas kini nilai soalan teks"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Mengesetkan fokus pada jawapan tidak sah yang pertama"
// pe.checkErrorsMode: "Run validation" => "Jalankan pengesahihan"
// pe.navigateToUrl: "Navigate to URL" => "Navigasi ke URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "URL dinamik"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Penanda untuk menunjukkan sama ada pengguna telah mengisi tinjauan ini"
// pe.completedHtml: "Survey Complete page markup" => "Tinjauan Penanda halaman lengkap"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Tinjauan Dinamik Lengkapkan penanda halaman"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Penanda untuk ditunjukkan semasa model tinjauan sedang dimuatkan"
// pe.commentText: "Comment area text" => "Teks kawasan komen"
// pe.autocomplete: "Autocomplete type" => "Jenis autolengkap"
// pe.labelTrue: "\"True\" label" => "Label \"Benar\""
// pe.labelFalse: "\"False\" label" => "Label \"Palsu\""
// pe.displayStyle: "Value display style" => "Gaya paparan nilai"
// pe.format: "Formatted string" => "Rentetan yang diformatkan"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Nombor pecahan maksimum"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Digit pecahan minimum"
// pe.useGrouping: "Display grouping separators" => "Paparkan pemisah perkumpulan"
// pe.allowMultiple: "Allow multiple files" => "Benarkan berbilang fail"
// pe.allowImagesPreview: "Preview images" => "Pratonton imej"
// pe.acceptedTypes: "Accepted file types" => "Jenis fail yang diterima"
// pe.waitForUpload: "Wait for the upload to complete" => "Tunggu muat naik selesai"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Sahkan penghapusan fail"
// pe.detailPanelMode: "Detail panel location" => "Lokasi panel terperinci"
// pe.minRowCount: "Minimum row count" => "Kiraan baris minimum"
// pe.maxRowCount: "Maximum row count" => "Kiraan baris maksimum"
// pe.confirmDelete: "Confirm row deletion" => "Sahkan pemadaman baris"
// pe.confirmDeleteText: "Confirmation message" => "Mesej pengesahan"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Sahkan penghapusan panel"
// pe.panelCount: "Initial panel count" => "Kiraan panel awal"
// pe.minPanelCount: "Minimum panel count" => "Kiraan panel minimum"
// pe.maxPanelCount: "Maximum panel count" => "Kiraan panel maksimum"
// pe.panelsState: "Inner panel expand state" => "Panel dalaman mengembangkan keadaan"
// pe.templateDescription: "Description template" => "Templat perihalan"
// pe.templateTitle: "Title template" => "Templat tajuk"
// pe.prevPanelText: "Previous Panel button tooltip" => "Petua alat butang Panel Sebelumnya"
// pe.nextPanelText: "Next Panel button tooltip" => "Petua alat butang Panel Seterusnya"
// pe.showRangeInProgress: "Show progress bar" => "Tunjukkan bar kemajuan"
// pe.templateQuestionTitleLocation: "Question title location" => "Lokasi tajuk soalan"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Alih keluar lokasi butang Panel"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Sembunyikan soalan jika tiada baris"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Menyembunyikan lajur jika tiada baris"
// pe.rateValues: "Custom rate values" => "Nilai kadar tersuai"
// pe.rateCount: "Rate count" => "Kiraan kadar"
// pe.autoGenerate: "How to specify rate values?" => "Bagaimana untuk menentukan nilai kadar?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Sembunyikan soalan jika ia tidak mengandungi pilihan"
// pe.hideNumber: "Hide question number" => "Sembunyikan nombor soalan"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Lebar minimum (dalam nilai diterima CSS)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Lebar maksimum (dalam nilai diterima CSS)"
// pe.width: "Width (in CSS-accepted values)" => "Lebar (dalam nilai diterima CSS)"
// pe.showHeader: "Show column headers" => "Tunjukkan pengepala lajur"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Menunjukkan bar skrol mendatar"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Lebar lajur minimum (dalam nilai diterima CSS)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Lebar pengepala baris (dalam nilai diterima CSS)"
// pe.valueTrue: "\"True\" value" => "Nilai \"Benar\""
// pe.valueFalse: "\"False\" value" => "Nilai \"Palsu\""
// pe.minErrorText: "\"Value is below minimum\" error message" => "Mesej ralat \"Nilai adalah di bawah minimum\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Mesej ralat \"Nilai melebihi maksimum\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Mesej ralat \"komen kosong\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Mesej ralat \"Nilai kunci bukan unik\""
// pe.minSelectedChoices: "Minimum selected choices" => "Pilihan minimum yang dipilih"
// pe.maxSelectedChoices: "Maximum selected choices" => "Pilihan maksimum yang dipilih"
// pe.allowClear: "Show the Clear button" => "Tunjukkan butang Kosongkan"
// pe.showNumber: "Show panel number" => "Tunjukkan nombor panel"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Lebar logo (dalam nilai diterima CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Ketinggian logo (dalam nilai diterima CSS)"
// pe.readOnly: "Read-only" => "Baca sahaja"
// pe.enableIf: "Editable if" => "Boleh diedit jika"
// pe.noRowsText: "\"No rows\" message" => "Mesej \"Tiada baris\""
// pe.size: "Input field size (in characters)" => "Saiz medan input (dalam aksara)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Pilihan khas berasingan (Tiada, Lain-lain, Pilih Semua)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Salin pilihan daripada soalan berikut"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Pilihan mana yang hendak disalin?"
// pe.showCommentArea: "Show the comment area" => "Tunjukkan kawasan komen"
// pe.commentPlaceholder: "Comment area placeholder" => "Ruang letak komen"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Memaparkan perihalan kadar sebagai nilai melampau"
// pe.rowOrder: "Row order" => "Tertib baris"
// pe.columnsLayout: "Column layout" => "Tataletak lajur"
// pe.columnColCount: "Nested column count" => "Kiraan lajur tersarang"
// pe.state: "Panel expand state" => "Panel kembangkan negeri"
// pe.correctAnswer: "Correct Answer" => "Jawapan yang betul"
// pe.defaultPanelValue: "Default Values" => "Nilai Lalai"
// pe.cells: "Cell Texts" => "Teks sel"
// pe.keyName: "Key column" => "Lajur utama"
// itemvalue.text: "Alt text" => "Teks alt"
// tabs.expression: "Expression" => "Ungkapan"
// pe.choicesVisibleIf: "Choices are visible if" => "Pilihan boleh dilihat jika"
// pe.choicesEnableIf: "Choices are selectable if" => "Pilihan boleh dipilih jika"
// pe.columnsEnableIf: "Columns are visible if" => "Lajur kelihatan jika"
// pe.rowsEnableIf: "Rows are visible if" => "Baris boleh dilihat jika"
// pe.indent: "Add indents" => "Menambah inden"
// panel.indent: "Add outer indents" => "Menambah inden luaran"
// pe.innerIndent: "Add inner indents" => "Menambah inden dalaman"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Taip ungkapan di sini..."
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Kosongkan nilai jika soalan menjadi tersembunyi"
// pe.valuePropertyName: "Value property name" => "Nama sifat nilai"
// pe.searchEnabled: "Enable search" => "Dayakan carian"
// pe.hideSelectedItems: "Hide selected items" => "Menyembunyikan item terpilih"
// pe.closeOnSelect: "Close the dropdown after selection" => "Menutup juntai bawah selepas pemilihan"
// pe.signatureWidth: "Signature width" => "Lebar tandatangan"
// pe.signatureHeight: "Signature height" => "Ketinggian tandatangan"
// pe.verticalAlign: "Vertical alignment" => "Penjajaran menegak"
// pe.alternateRows: "Alternate rows" => "Baris alternatif"
// pe.columnsVisibleIf: "Columns are visible if" => "Lajur kelihatan jika"
// pe.rowsVisibleIf: "Rows are visible if" => "Baris boleh dilihat jika"
// pe.otherPlaceholder: "Comment area placeholder" => "Ruang letak komen"
// pe.rateType: "Rate type" => "Jenis kadar"
// pv.true: "true" => "Benar"
// pv.false: "false" => "Palsu"
// pv.decimal: "decimal" => "Perpuluhan"
// pv.currency: "currency" => "Mata wang"
// pv.percent: "percent" => "Peratus"
// pv.onpanel: "Start on each panel" => "Mulakan pada setiap panel"
// pv.tab: "Tabs" => "Tab"
// pv.right: "Right" => "Kanan"
// pv.color: "color" => "Warna"
// pv.date: "date" => "Tarikh"
// pv.datetime: "datetime" => "masa tarikh"
// pv.datetime-local: "datetime-local" => "tarikh-tempatan"
// pv.email: "email" => "E-mel"
// pv.month: "month" => "Bulan"
// pv.number: "number" => "Nombor"
// pv.password: "password" => "Kata laluan"
// pv.range: "range" => "Pelbagai"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "Teks"
// pv.time: "time" => "Masa"
// pv.url: "url" => "Url"
// pv.week: "week" => "Minggu"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Apabila soalan atau panel/halamannya menjadi tersembunyi"
// clearInvisibleValues.none: "Never" => "Tidak pernah"
// inputType.color: "Color" => "Warna"
// inputType.date: "Date" => "Tarikh"
// inputType.datetime-local: "Date and Time" => "Tarikh dan Masa"
// inputType.email: "Email" => "E-mel"
// inputType.month: "Month" => "Bulan"
// inputType.number: "Number" => "Nombor"
// inputType.password: "Password" => "Kata laluan"
// inputType.range: "Range" => "Pelbagai"
// inputType.tel: "Phone Number" => "Nombor Telefon"
// inputType.text: "Text" => "Teks"
// inputType.time: "Time" => "Masa"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Minggu"
// pv.onValueChanging: "Before an answer is changed" => "Sebelum jawapan diubah"
// pv.onBlur: "On blur" => "Pada kabur"
// pv.onTyping: "While typing" => "Semasa menaip"
// pv.underRow: "Under the row" => "Di bawah baris"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Di bawah baris, hanya satu panel boleh dilihat"
// showNavigationButtons.none: "Hidden" => "Tersembunyi"
// showProgressBar.off: "Hidden" => "Tersembunyi"
// showTimerPanel.none: "Hidden" => "Tersembunyi"
// showTimerPanelMode.all: "Both" => "Kedua-duanya"
// detailPanelMode.none: "Hidden" => "Tersembunyi"
// addRowButtonLocation.default: "Depends on matrix layout" => "Bergantung pada tataletak matriks"
// panelsState.default: "Users cannot expand or collapse panels" => "Pengguna tidak boleh mengembangkan atau meruntuhkan panel"
// panelsState.collapsed: "All panels are collapsed" => "Semua panel runtuh"
// panelsState.expanded: "All panels are expanded" => "Semua panel diperluaskan"
// widthMode.auto: "Auto" => "Auto"
// widthMode.static: "Static" => "Statik"
// widthMode.responsive: "Responsive" => "Responsif"
// imageFit.none: "None" => "Tiada"
// imageFit.contain: "Contain" => "Mengandungi"
// imageFit.cover: "Cover" => "Perlindungan"
// imageFit.fill: "Fill" => "Mengisi"
// contentMode.auto: "Auto" => "Auto"
// contentMode.image: "Image" => "Imej"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "Youtube"
// displayMode.auto: "Auto" => "Auto"
// displayMode.buttons: "Buttons" => "Butang"
// displayMode.dropdown: "Dropdown" => "Dropdown"
// rateColorMode.default: "Default" => "Lalai"
// autoGenerate.true: "Generate" => "Menjana"
// autoGenerate.false: "Enter manually" => "Masukkan secara manual"
// rateType.labels: "Labels" => "Label"
// rateType.stars: "Stars" => "Bintang"
// rateType.smileys: "Smileys" => "Smileys"
// op.and: "and" => "Dan"
// op.or: "or" => "Atau"
// ts.hideInvisibleElements: "Hide invisible elements" => "Sembunyikan unsur tidak kelihatan"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Kuki menghalang pengguna daripada mengisi tinjauan yang sama dua kali."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Mensaiz semula kawasan medan input yang kelihatan. Sila gunakan <b>Pengesahan →</b> Tetapan panjang maksimum untuk mengehadkan panjang input."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Gunakan {0} sebagai ruang letak untuk nilai sebenar."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Boleh dilihat hanya apabila sekurang-kurangnya satu lajur mempunyai jenis Jumlah atau ungkapan Jumlah."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Rujuk perihalan atribut [terima](https://www.w3schools.com/tags/att_input_accept.asp) untuk maklumat lanjut."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Hanya digunakan untuk jenis sel Kumpulan Radio dan Kotak Semak."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Rujuk perihalan atribut [autolengkap](https://developer.mozilla.org/en-US/docs/Web/HTML/Atribut/autolengkap) untuk maklumat lanjut."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Jika anda tidak menetapkan sifat ini, jawapannya akan disimpan dalam medan yang ditentukan oleh sifat Nama."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Jika lajur yang ditentukan mengandungi nilai yang sama, tinjauan akan membuang ralat \"Nilai kunci bukan unik\"."
// p.value: "Value" => "Nilai"
// p.tabAlign: "Tab alignment" => "Penjajaran tab"
// p.questions: "Questions" => "Soalan"
// p.surveyId: "Survey id" => "Id tinjauan"
// p.surveyPostId: "Survey post id" => "Id siaran tinjauan"
// p.surveyShowDataSaving: "Survey show data saving" => "Tinjauan menunjukkan penjimatan data"
// p.showTOC: "Show TOC" => "Tunjukkan TOC"
// p.tocLocation: "Toc location" => "Lokasi Toc"
// p.showBrandInfo: "Show brand info" => "Tunjukkan maklumat jenama"
// p.renderAs: "Render as" => "Render sebagai"
// p.attachOriginalItems: "Attach original items" => "Lampirkan item asal"
// p.cellHint: "Cell hint" => "Petunjuk sel"
// p.isUnique: "Is unique" => "Unik"
// p.showInMultipleColumns: "Show in multiple columns" => "Tunjukkan dalam berbilang lajur"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Jumlah digit pecahan maksimum"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Jumlah digit pecahan minimum"
// p.detailElements: "Detail elements" => "Unsur terperinci"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Benarkan tindakan penyesuaian"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Pilihan beban malas didayakan"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Pilihan malas memuatkan saiz halaman"
// p.inputFieldComponent: "Input field component" => "Komponen medan input"
// p.itemComponent: "Item component" => "Komponen item"
// p.elements: "Elements" => "Unsur"
// p.content: "Content" => "Kandungan"
// p.longTap: "Long tap" => "Ketuk panjang"
// p.allowResize: "Allow resizing" => "Benarkan pensaizan semula"
// p.acceptCarriageReturn: "Accept carriage return" => "Terima pulangan pengangkutan"
// p.displayMode: "Display mode" => "Mod paparan"
// p.rateType: "Rate type" => "Jenis kadar"
// p.altText: "Alt text" => "Teks alt"
// p.templateElements: "Template elements" => "Unsur templat"
// p.operator: "Operator" => "Pengendali"
// p.isVariable: "Is variable" => "Adakah pembolehubah"
// p.runExpression: "Run expression" => "Jalankan ungkapan"
// p.precision: "Precision" => "Ketepatan"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Kawasan pemegang seretan matriks"
// p.backgroundImage: "Background image" => "Imej latar belakang"
// p.backgroundImageFit: "Background image fit" => "Kesesuaian imej latar belakang"
// p.backgroundImageAttachment: "Background image attachment" => "Lampiran imej latar belakang"
// p.backgroundOpacity: "Background opacity" => "Kelegapan latar belakang"
// p.selectToRankEnabled: "Select to rank enabled" => "Pilih untuk mendayakan kedudukan"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Pilih untuk menentukan tataletak kawasan"
// p.allowCameraAccess: "Allow camera access" => "Benarkan capaian kamera"
// p.scaleColorMode: "Scale color mode" => "Mod warna skala"
// p.rateColorMode: "Rate color mode" => "Mod warna kadar"
// p.templateTabTitle: "Template tab title" => "Tajuk tab templat"
// p.templateVisibleIf: "Template visible if" => "Templat boleh dilihat jika"
// p.copyDisplayValue: "Copy display value" => "Nilai paparan salin"
// theme.--background: "Background color" => "Warna latar belakang"
// theme.--background-dim-light: "Background dim light color" => "Warna cahaya malap latar belakang"
// theme.--primary-foreground: "Primary foreground color" => "Warna latar depan utama"
// theme.--foreground: "Foreground color" => "Warna latar depan"
// theme.--base-unit: "Base unit" => "Unit asas"
// theme.groupAdvanced: "Advanced" => "Lanjutan"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Penampilan soalan"
// theme.isPanellessPanels: "Default" => "Lalai"
// theme.isPanellessLightweight: "Without Panels" => "Tanpa Panel"
// theme.themePaletteLight: "Light" => "Cahaya"
// theme.themePaletteDark: "Dark" => "Gelap"
// theme.primaryColor: "Accent color" => "Warna aksen"
// theme.primaryDefaultColor: "Default" => "Lalai"
// theme.primaryDarkColor: "Hover" => "Hover"
// theme.primaryLightColor: "Selected" => "Dipilih"
// theme.backgroundDimColor: "Background color" => "Warna latar belakang"
// theme.backgroundImage: "Background image" => "Imej latar belakang"
// theme.backgroundImageFitAuto: "Auto" => "Auto"
// theme.backgroundImageFitCover: "Cover" => "Perlindungan"
// theme.backgroundImageFitContain: "Contain" => "Mengandungi"
// theme.backgroundOpacity: "Opacity" => "Kelegapan"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Tetap"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Tatal"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Kelegapan latar belakang panel"
// theme.questionBackgroundTransparency: "Question background opacity" => "Kelegapan latar belakang soalan"
// theme.questionPanel: "Panel background and corner radius" => "Latar belakang panel dan jejari sudut"
// theme.questionTitle: "Question title font" => "Fon tajuk soalan"
// theme.questionDescription: "Question description font" => "Fon perihalan soalan"
// theme.editorPanel: "Input element" => "Unsur input"
// theme.editorFont: "Input element font" => "Fon unsur input"
// theme.backcolor: "Default background" => "Latar belakang lalai"
// theme.hovercolor: "Hover background" => "Latarbelakang penuding"
// theme.borderDecoration: "Border decoration" => "Hiasan sempadan"
// theme.accentBackground: "Accent background" => "Latar belakang aksen"
// theme.accentForeground: "Accent foreground" => "Aksen latar depan"
// theme.primaryForecolor: "Default color" => "Warna lalai"
// theme.primaryForecolorLight: "Disabled color" => "Warna dinyahdayakan"
// theme.linesColors: "Minor line colors" => "Warna garis kecil"
// theme.borderDefault: "Darker" => "Gelap"
// theme.borderLight: "Lighter" => "Lebih ringan"
// theme.fontFamily: "Font family" => "Keluarga fon"
// theme.fontSize: "Font size" => "Saiz fon"
// theme.color: "Color" => "Warna"
// theme.size: "Size" => "Saiz"
// theme.fontWeightRegular: "Regular" => "Tetap"
// theme.fontWeightHeavy: "Heavy" => "Berat"
// theme.fontWeightSemiBold: "Semi-bold" => "Separa berani"
// theme.fontWeightBold: "Bold" => "Berani"
// theme.scale: "Scale" => "Skala"
// theme.cornerRadius: "Corner radius" => "Jejari penjuru"
// theme.surveyTitleFont: "Survey title font" => "Fon tajuk tinjauan"
// theme.pageTitle: "Page title font" => "Fon tajuk halaman"
// theme.pageDescription: "Page description font" => "Fon perihalan halaman"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Menambah Kesan Bayang"
// theme.opacity: "Opacity" => "Kelegapan"
// theme.boxShadowBlur: "Blur" => "Kabur"
// theme.boxShadowSpread: "Spread" => "Penyebaran"
// theme.boxShadowDrop: "Drop" => "Singgah"
// theme.boxShadowInner: "Inner" => "Dalaman"
// theme.questionShadow: "Shadow effects" => "Kesan bayang"
// theme.editorShadow: "Input element shadow effects" => "Kesan bayang unsur input"
// names.default: "Default" => "Lalai"
// names.contrast: "Contrast" => "Sebaliknya"
// names.plain: "Plain" => "Biasa"
// names.simple: "Simple" => "Mudah"
// names.blank: "Blank" => "Kosong"
// names.double: "Double" => "Double"
// names.bulk: "Bulk" => "Pukal"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Suka bermain"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Teal"
// colors.blue: "Blue" => "Blue"
// colors.purple: "Purple" => "Ungu"
// colors.orchid: "Orchid" => "Orchid"
// colors.tulip: "Tulip" => "Tulip"
// colors.brown: "Brown" => "Brown"
// colors.green: "Green" => "Hijau"
// names.sharp: "Sharp" => "Tajam"
// names.borderless: "Borderless" => "Tanpa sempadan"
// names.flat: "Flat" => "Rata"
// names.doubleborder: "Double Border" => "Sempadan Berkembar"
// names.layered: "Layered" => "Berlapis"
// names.solid: "Solid" => "Pepejal"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Adakah anda pasti ingin memadam semua rentetan untuk bahasa ini?"
// ed.themeResetButton: "Reset theme settings to default" => "Mengeset semula seting tema kepada lalai"
// theme.placeholderColor: "Placeholder color" => "Warna ruang letak"
// ed.themeSettings: "Theme Settings" => "Seting Tema"
// ed.themeSettingsTooltip: "Open theme settings" => "Buka seting tema"
// pe.resetToDefaultCaption: "Reset" => "Set semula"
// pv.file: "Local files" => "Fail tempatan"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Fail atau kamera tempatan"
// ed.translateUsigAI: "Auto-translate All" => "Terjemahkan Secara automatik Semua"
// ed.translationDialogTitle: "Untranslated strings" => "Rentetan tidak diterjemahkan"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Sila masukkan sekurang-kurangnya {0} item"
// lg.question_resetValueName: "Reset question value" => "Mengeset semula nilai soalan"
// lg.column_resetValue: "Reset column value" => "Mengeset semula nilai lajur"
// pe.markRequired: "Mark as required" => "Tandakan mengikut keperluan"
// pe.removeRequiredMark: "Remove the required mark" => "Mengalih keluar tanda yang diperlukan"
// p.resetValueIf: "Reset value if" => "Mengeset semula nilai jika"
// lg.question_setValueName: "Set question value" => "Mengesetkan nilai soalan"
// lg.column_resetValueName: "Reset column value" => "Mengeset semula nilai lajur"
// lg.column_setValueName: "Set column value" => "Mengesetkan nilai lajur"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Ungkapan yang hasilnya akan diberikan kepada soalan sasaran."
// survey.title: "Title" => "Tajuk"
// page.title: "Title" => "Tajuk"
// p.setValueIf: "Set value if" => "Setkan nilai jika"
// theme.header: "Header" => "Pengepala"
// theme.backgroundImageFitFill: "Stretch" => "Regangan"
// theme.backgroundImageFitTile: "Tile" => "Jubin"
// theme.headerView: "View" => "Lihat"
// theme.headerViewBasic: "Basic" => "Asas"
// theme.headerViewAdvanced: "Advanced" => "Lanjutan"
// theme.headerInheritWidthFrom: "Content area width" => "Lebar kawasan kandungan"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Sama seperti tinjauan"
// theme.headerInheritWidthFromPage: "Fit to page" => "Muat ke halaman"
// theme.headerTextAreaWidth: "Text width" => "Lebar teks"
// theme.headerBackgroundColorSwitch: "Background color" => "Warna latar belakang"
// theme.headerBackgroundColorNone: "None" => "Tiada"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Warna aksen"
// theme.headerBackgroundColorCustom: "Custom" => "Tersuai"
// theme.horizontalAlignmentLeft: "Left" => "Kiri"
// theme.horizontalAlignmentCenter: "Center" => "Pusat"
// theme.horizontalAlignmentRight: "Right" => "Kanan"
// theme.verticalAlignmentTop: "Top" => "Atas"
// theme.verticalAlignmentMiddle: "Middle" => "Tengah"
// theme.verticalAlignmentBottom: "Bottom" => "Bawah"
// lg.question_resetValueText: "reset value for question: {0}" => "Tetapkan semula nilai untuk soalan: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Berikan nilai: {1} kepada soalan: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Set semula nilai sel untuk lajur: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Peruntukkan nilai sel: {1} kepada lajur: {0}"
// ed.surveyJsonExportButton: "Export" => "Eksport"
// ed.surveyJsonImportButton: "Import" => "Import"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Salin ke papan keratan"
// pe.filePlaceholder: "File placeholder text" => "Teks ruang letak fail"
// pe.photoPlaceholder: "Photo placeholder text" => "Teks ruang letak foto"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Teks ruang letak fail atau foto"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Digunakan apabila \"Jenis sumber\" ialah \"Fail tempatan\" atau apabila kamera tidak tersedia"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Digunakan apabila \"Jenis sumber\" ialah \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Digunakan apabila \"Jenis sumber\" ialah \"Fail atau kamera tempatan\"."
// theme.background: "Background" => "Latar belakang"
// theme.appearance: "Appearance" => "Penampilan"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Adakah anda benar-benar mahu menetapkan semula tema? Semua penyesuaian anda akan hilang."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ya, tetapkan semula tema"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Muat ke bekas"
// signaturepad.showPlaceholder: "Show the placeholder" => "Menunjukkan ruang letak"
// signaturepad.placeholder: "Placeholder text" => "Teks ruang letak"
// theme.surveyDescriptionFont: "Survey description font" => "Fon perihalan tinjauan"
// ed.prevFocus: "Focus previous" => "Fokus sebelum ini"
// ed.nextFocus: "Focus next" => "Fokus seterusnya"
// ed.saveTheme: "Save Theme" => "Simpan Tema"
// ed.saveThemeTooltip: "Save Theme" => "Simpan Tema"
// lg.page_requireName: "Make page required" => "Buat halaman diperlukan"
// lg.panel_requireName: "Make page required" => "Buat halaman diperlukan"
// signaturepad.signatureWidth: "Signature area width" => "Lebar kawasan tandatangan"
// signaturepad.signatureHeight: "Signature area height" => "Ketinggian kawasan tandatangan"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Menskalakan kawasan tandatangan secara automatik"
// signaturepad.penMinWidth: "Minimum pen width" => "Lebar pen minimum"
// signaturepad.penMaxWidth: "Maximum pen width" => "Lebar pen maksimum"
// theme.logoPosition: "Logo position" => "Kedudukan logo"
// theme.headerTitlePosition: "Title position" => "Kedudukan tajuk"
// theme.headerDescriptionPosition: "Description position" => "Kedudukan perihalan"
// ed.propertyGridNoResultsFound: "No results found" => "Tiada keputusan ditemui"
// pv.leftRight: "Left and right" => "Kiri dan kanan"
// p.sourceType: "Source type" => "Jenis sumber"
// p.fitToContainer: "Fit to container" => "Muat ke bekas"
// p.setValueExpression: "Set value expression" => "Mengesetkan ungkapan nilai"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Pilihan dimuatkan dari perkhidmatan web."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Pergi ke seting"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Pratonton pilihan pilihan yang dimuatkan"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Mengelakkan respons pendua dalam baris"
// theme.advancedMode: "Advanced mode" => "Mod lanjutan"
// theme.backgroundCornerRadius: "Background and corner radius" => "Latar belakang dan jejari sudut"
// theme.colorsTitle: "Colors" => "Warna"
// theme.font: "Font" => "Fon"
// theme.lines: "Lines" => "Garisan"
// theme.titleFont: "Title font" => "Fon tajuk"
// theme.descriptionFont: "Description font" => "Fon perihalan"
// theme.shadow: "Shadow effects" => "Kesan bayang"
// ed.translateUsigAIFrom: "Translate from: " => "Terjemah daripada: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Benarkan pilihan Enggan Menjawab"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Benarkan pilihan Jangan Tahu"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Benarkan pilihan Enggan Menjawab"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Benarkan pilihan Jangan Tahu"
// pv.contain: "Contain" => "Mengandungi"
// pv.cover: "Cover" => "Perlindungan"
// pv.fill: "Fill" => "Mengisi"

// pe.transposeData: "Transpose rows to columns" => "Mengubah urutan baris kepada lajur"
// layout.panel: "Layout" => "Susun atur"
// layout.question: "Layout" => "Susun atur"
// layout.base: "Layout" => "Susun atur"
// panel.name: "Panel name" => "Nama panel"
// panel.title: "Panel title" => "Tajuk panel"
// panel.description: "Panel description" => "Penerangan panel"
// panel.visibleIf: "Make the panel visible if" => "Jadikan panel kelihatan jika"
// panel.requiredIf: "Make the panel required if" => "Buat panel diperlukan jika"
// panel.questionOrder: "Question order within the panel" => "Tertib soalan dalam panel"
// panel.startWithNewLine: "Display the panel on a new line" => "Paparkan panel pada baris baru"
// panel.state: "Panel collapse state" => "Keadaan panel runtuh"
// panel.width: "Inline panel width" => "Lebar panel sebaris"
// panel.minWidth: "Minimum panel width" => "Lebar panel minimum"
// panel.maxWidth: "Maximum panel width" => "Lebar panel maksimum"
// paneldynamic.name: "Panel name" => "Nama panel"
// paneldynamic.title: "Panel title" => "Tajuk panel"
// paneldynamic.description: "Panel description" => "Penerangan panel"
// paneldynamic.visibleIf: "Make the panel visible if" => "Jadikan panel kelihatan jika"
// paneldynamic.requiredIf: "Make the panel required if" => "Buat panel diperlukan jika"
// paneldynamic.page: "Move the panel to page" => "Mengalihkan panel ke halaman"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Paparkan panel pada baris baru"
// paneldynamic.state: "Panel collapse state" => "Keadaan panel runtuh"
// paneldynamic.width: "Inline panel width" => "Lebar panel sebaris"
// paneldynamic.minWidth: "Minimum panel width" => "Lebar panel minimum"
// paneldynamic.maxWidth: "Maximum panel width" => "Lebar panel maksimum"
// paneldynamic.templateDescription: "Panel description pattern" => "Corak perihalan panel"
// paneldynamic.templateTitle: "Panel title pattern" => "Corak tajuk panel"
// paneldynamic.noEntriesText: "Empty panel text" => "Teks panel kosong"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Corak tajuk tab"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Jadikan panel individu kelihatan jika"
// paneldynamic.hideNumber: "Hide the panel number" => "Sembunyikan nombor panel"
// paneldynamic.titleLocation: "Panel title alignment" => "Penjajaran tajuk panel"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Penjajaran perihalan panel"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Penjajaran tajuk soalan"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Penjajaran mesej ralat"
// paneldynamic.newPanelPosition: "New panel location" => "Lokasi panel baru"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Mencegah jawapan pendua dalam soalan berikut"
// question.name: "Question name" => "Nama soalan"
// question.title: "Question title" => "Tajuk soalan"
// question.description: "Question description" => "Penerangan soalan"
// question.visibleIf: "Make the question visible if" => "Jadikan soalan kelihatan jika"
// question.requiredIf: "Make the question required if" => "Jadikan soalan diperlukan jika"
// question.state: "Question box collapse state" => "Keadaan kotak soalan runtuh"
// question.hideNumber: "Hide the question number" => "Sembunyikan nombor soalan"
// question.titleLocation: "Question title alignment" => "Penjajaran tajuk soalan"
// question.descriptionLocation: "Question description alignment" => "Penjajaran perihalan soalan"
// question.errorLocation: "Error message alignment" => "Penjajaran mesej ralat"
// question.indent: "Increase the inner indent" => "Meningkatkan inden dalaman"
// question.width: "Inline question width" => "Lebar soalan sebaris"
// question.minWidth: "Minimum question width" => "Lebar soalan minimum"
// question.maxWidth: "Maximum question width" => "Lebar soalan maksimum"
// question.textUpdateMode: "Update input field value" => "Mengemas kini nilai medan input"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Tunjukkan butang Kosongkan dalam kawasan tandatangan"
// signaturepad.penColor: "Stroke color" => "Warna strok"
// comment.rows: "Input field height (in lines)" => "Ketinggian medan input (dalam garisan)"
// expression.name: "Expression name" => "Nama ungkapan"
// expression.title: "Expression title" => "Tajuk ungkapan"
// expression.description: "Expression description" => "Perihalan ungkapan"
// expression.expression: "Expression" => "Ungkapan"
// trigger.expression: "Expression" => "Ungkapan"
// calculatedvalue.expression: "Expression" => "Ungkapan"
// survey.description: "Survey description" => "Penerangan tinjauan"
// page.name: "Page name" => "Nama halaman"
// page.description: "Page description" => "Perihalan halaman"
// page.visibleIf: "Make the page visible if" => "Jadikan halaman kelihatan jika"
// page.requiredIf: "Make the page required if" => "Jadikan halaman diperlukan jika"
// page.questionOrder: "Question order on the page" => "Tertib soalan pada halaman"
// matrixdropdowncolumn.name: "Column name" => "Nama lajur"
// matrixdropdowncolumn.title: "Column title" => "Tajuk lajur"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Elakkan tindak balas pendua"
// matrixdropdowncolumn.width: "Column width" => "Lebar lajur"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Lebar lajur minimum"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Ketinggian medan input (dalam garisan)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Jadikan lajur kelihatan jika"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Jadikan lajur diperlukan jika"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Setiap opsyen dalam lajur berasingan"
// multipletextitem.name: "Name" => "Nama"
// multipletextitem.title: "Title" => "Tajuk"
// pe.rateDescriptionLocation: "Label alignment" => "Penjajaran label"
// pe.cellErrorLocation: "Cell error message alignment" => "Penjajaran mesej ralat sel"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Anda belum mempunyai sebarang lajur"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Anda belum mempunyai sebarang baris"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Anda belum mempunyai sebarang peraturan pengesahihan"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Anda belum mempunyai sebarang pemboleh ubah tersuai"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Anda belum mempunyai sebarang pencetus"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Anda belum mempunyai pautan"
// pe.addNew@columns: "Add new column" => "Menambah lajur baru"
// pe.addNew@rows: "Add new row" => "Menambah baris baru"
// pe.addNew@validators: "Add new rule" => "Tambah peraturan baru"
// pe.addNew@calculatedValues: "Add new variable" => "Menambah pemboleh ubah baru"
// pe.addNew@triggers: "Add new trigger" => "Tambah pencetus baharu"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Tambah URL baru"
// choicesbyurl.url: "Web service's URL" => "URL perkhidmatan web"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Paparkan tajuk halaman dalam bar kemajuan"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Paparkan nombor halaman dalam bar kemajuan"
// itemvalue.visibleIf: "Make the option visible if" => "Jadikan opsyen kelihatan jika"
// itemvalue.enableIf: "Make the option selectable if" => "Jadikan opsyen boleh dipilih jika"
// panel.layout: "Panel Layout" => "Tataletak Panel"
// tabs.questionSettings: "Question Settings" => "Seting Soalan"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Ex.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Ex.: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Ex.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Ex.: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Ex.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Ex.: 50%"
// pv.selected: "Selected" => "Dipilih"
// pv.unselected: "Unselected" => "Tidak dipilih"
// pv.center: "Center" => "Pusat"
// pv.middle: "Middle" => "Tengah"
// pv.next: "Next" => "Seterusnya"
// pv.last: "Last" => "Terakhir"
// clearIfInvisible.none: "Never" => "Tidak pernah"
// questionsOnPageMode.standard: "Original structure" => "Struktur asal"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Tunjukkan semua soalan pada satu halaman"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Menunjukkan soalan tunggal bagi setiap halaman"
// pv.auto: "Auto" => "Auto"
// panelsState.firstExpanded: "First expanded" => "Mula-mula diperluaskan"
// rateColorMode.scale: "Scale" => "Skala"
// scaleColorMode.monochrome: "Monochrome" => "Monokrom"
// scaleColorMode.colored: "Colored" => "Berwarna"
// state.default: "Locked" => "Dikunci"
// showQuestionNumbers.default: "Auto-numbering" => "Penomboran automatik"
// showQuestionNumbers.on: "Auto-numbering" => "Penomboran automatik"
// showQuestionNumbers.onPage: "Reset on each page" => "Mengeset semula pada setiap halaman"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Set semula pada setiap panel"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Set semula pada setiap panel"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Teruskan merentasi tinjauan"
// showQuestionNumbers.off: "No numbering" => "Tiada penomboran"
// descriptionLocation.underTitle: "Under the question title" => "Di bawah tajuk soalan"
// descriptionLocation.underInput: "Under the input field" => "Di bawah medan input"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Di sebelah pilihan"
// selectToRankAreasLayout.vertical: "Above choices" => "Pilihan di atas"
// displayStyle.decimal: "Decimal" => "Perpuluhan"
// displayStyle.currency: "Currency" => "Mata wang"
// displayStyle.percent: "Percentage" => "Peratusan"
// displayStyle.date: "Date" => "Tarikh"
// totalDisplayStyle.decimal: "Decimal" => "Perpuluhan"
// totalDisplayStyle.currency: "Currency" => "Mata wang"
// totalDisplayStyle.percent: "Percentage" => "Peratusan"
// totalDisplayStyle.date: "Date" => "Tarikh"
// rowOrder.initial: "Original" => "Asal"
// questionOrder.initial: "Original" => "Asal"
// showProgressBar.aboveheader: "Above the header" => "Di atas pengepala"
// showProgressBar.belowheader: "Below the header" => "Di bawah pengepala"
// pv.sum: "Sum" => "Jumlah"
// pv.count: "Count" => "Kiraan"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Pur"
// searchMode.contains: "Contains" => "Mengandungi"
// searchMode.startsWith: "Starts with" => "Bermula dengan"
// panel.name: "A panel ID that is not visible to respondents." => "ID panel yang tidak kelihatan kepada responden."
// panel.description: "Type a panel subtitle." => "Taipkan sari kata panel."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan panel."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang melumpuhkan mod baca sahaja untuk panel."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang penyerahan tinjauan melainkan sekurang-kurangnya satu soalan tersarang mempunyai jawapan."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Digunakan untuk semua soalan dalam panel ini. Jika anda ingin mengubah seting ini, takrifkan peraturan penjajaran tajuk untuk soalan individu. Pilihan \"Warisan\" menggunakan peringkat halaman (jika ditetapkan) atau tetapan peringkat tinjauan (\"Atas\" secara lalai)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Mengesetkan lokasi mesej ralat berhubung dengan semua soalan dalam panel. Opsyen \"Warisan\" menggunakan aras halaman (jika set) atau seting aras tinjauan."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Mengekalkan susunan soalan asal atau rawak mereka. Opsyen \"Warisan\" menggunakan aras halaman (jika set) atau seting aras tinjauan."
// panel.page: "Repositions the panel to the end of a selected page." => "Meletakkan semula panel di hujung halaman yang dipilih."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Menambah ruang atau jidar antara kandungan panel dan sempadan kiri kotak panel."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Nyahpilih untuk memaparkan panel dalam satu baris dengan soalan atau panel sebelumnya. Seting tidak digunakan jika panel ialah elemen pertama dalam borang anda."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Pilih daripada: \"Diperluaskan\" - panel dipaparkan sepenuhnya dan boleh runtuh; \"Runtuh\" - panel hanya memaparkan tajuk dan keterangan dan boleh diperluaskan; \"Dikunci\" - panel dipaparkan sepenuhnya dan tidak boleh runtuh."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Mengesetkan lebar panel mengikut kadar unsur tinjauan lain dalam baris yang sama. Menerima nilai CSS (px, %, dalam, pt, dll.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "ID panel yang tidak kelihatan kepada responden."
// paneldynamic.description: "Type a panel subtitle." => "Taipkan sari kata panel."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan panel."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang melumpuhkan mod baca sahaja untuk panel."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang penyerahan tinjauan melainkan sekurang-kurangnya satu soalan tersarang mempunyai jawapan."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Digunakan untuk semua soalan dalam panel ini. Jika anda ingin mengubah seting ini, takrifkan peraturan penjajaran tajuk untuk soalan individu. Pilihan \"Warisan\" menggunakan peringkat halaman (jika ditetapkan) atau tetapan peringkat tinjauan (\"Atas\" secara lalai)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Mengesetkan lokasi mesej ralat berhubung dengan soalan dengan input tidak sah. Pilih antara: \"Atas\" - teks ralat diletakkan di bahagian atas kotak soalan; \"Bawah\" - teks ralat diletakkan di bahagian bawah kotak soalan. Pilihan \"Warisan\" menggunakan peringkat halaman (jika ditetapkan) atau tetapan peringkat tinjauan (\"Atas\" secara lalai)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Mengesetkan lokasi mesej ralat berhubung dengan semua soalan dalam panel. Opsyen \"Warisan\" menggunakan aras halaman (jika set) atau seting aras tinjauan."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Meletakkan semula panel di hujung halaman yang dipilih."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Menambah ruang atau jidar antara kandungan panel dan sempadan kiri kotak panel."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Nyahpilih untuk memaparkan panel dalam satu baris dengan soalan atau panel sebelumnya. Seting tidak digunakan jika panel ialah elemen pertama dalam borang anda."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Pilih daripada: \"Diperluaskan\" - panel dipaparkan sepenuhnya dan boleh runtuh; \"Runtuh\" - panel hanya memaparkan tajuk dan keterangan dan boleh diperluaskan; \"Dikunci\" - panel dipaparkan sepenuhnya dan tidak boleh runtuh."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Mengesetkan lebar panel mengikut kadar unsur tinjauan lain dalam baris yang sama. Menerima nilai CSS (px, %, dalam, pt, dll.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Taipkan templat untuk tajuk panel dinamik. Gunakan {panelIndex} untuk kedudukan umum panel dan {visiblePanelIndex} untuk pesanannya di kalangan panel yang kelihatan. Masukkan ruang letak ini ke dalam corak untuk menambah penomboran automatik."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Taipkan templat untuk tajuk tab. Gunakan {panelIndex} untuk kedudukan umum panel dan {visiblePanelIndex} untuk pesanannya di kalangan panel yang boleh dilihat. Masukkan ruang letak ini ke dalam corak untuk menambah penomboran automatik."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Tetapan ini membolehkan anda mengawal penglihatan panel individu dalam panel dinamik. Gunakan ruang letak '{panel}' untuk merujuk panel semasa dalam ungkapan anda."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Tetapan ini diwarisi secara automatik oleh semua soalan dalam panel ini. Jika anda ingin mengubah seting ini, takrifkan peraturan penjajaran tajuk untuk soalan individu. Pilihan \"Warisan\" menggunakan peringkat halaman (jika ditetapkan) atau tetapan peringkat tinjauan (\"Atas\" secara lalai)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Opsyen \"Warisan\" menggunakan aras halaman (jika ditetapkan) atau seting aras tinjauan (\"Di bawah tajuk panel\" secara lalai)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Mentakrifkan kedudukan panel yang baru ditambah. Secara lalai, panel baru ditambahkan ke hujungnya. Pilih \"Seterusnya\" untuk memasukkan panel baru selepas yang semasa."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Pendua jawapan daripada panel terakhir dan memberikannya kepada panel dinamik tambahan seterusnya."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Rujukan nama soalan untuk memerlukan pengguna memberikan jawapan yang unik untuk soalan ini dalam setiap panel."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Seting ini membolehkan anda memperuntukkan nilai jawapan lalai berdasarkan ungkapan. Ungkapan ini boleh termasuk pengiraan asas - '{q1_id} + {q2_id}', ungkapan Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'hari ini()', 'umur()', 'min()', 'max()', 'avg()', dsb. Nilai yang ditentukan oleh ungkapan ini berfungsi sebagai nilai lalai awal yang boleh diubah oleh input manual responden."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Gunakan ikon tongkat ajaib untuk mengesetkan peraturan bersyarat yang menentukan masa input responden ditetapkan semula kepada nilai berdasarkan \"Ungkapan nilai lalai\" atau \"Setkan ungkapan nilai\" atau kepada nilai \"Jawapan lalai\" (jika sama ada ditetapkan)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan masa untuk menjalankan \"Tetapkan ungkapan nilai\" dan secara dinamik memperuntukkan nilai yang terhasil sebagai respons."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Tentukan ungkapan yang mentakrifkan nilai yang akan disetkan apabila syarat dalam peraturan \"Set nilai jika\" dipenuhi. Ungkapan ini boleh termasuk pengiraan asas - '{q1_id} + {q2_id}', ungkapan Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'hari ini()', 'umur()', 'min()', 'max()', 'avg()', dsb. Nilai yang ditentukan oleh ungkapan ini boleh diubah oleh input manual responden."
// question.name: "A question ID that is not visible to respondents." => "ID soalan yang tidak dapat dilihat oleh responden."
// question.description: "Type a question subtitle." => "Taipkan sari kata soalan."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan soalan."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang melumpuhkan mod baca sahaja untuk soalan itu."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang tinjauan memajukan atau menyerahkan melainkan soalan itu mendapat jawapan."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Nyahpilih untuk memaparkan soalan dalam satu baris dengan soalan atau panel sebelumnya. Seting tidak digunakan jika soalan ialah unsur pertama dalam borang anda."
// question.page: "Repositions the question to the end of a selected page." => "Letakkan semula soalan ke hujung halaman yang dipilih."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Pilih daripada: \"Diperluaskan\" - kotak soalan dipaparkan sepenuhnya dan boleh runtuh; \"Runtuh\" - kotak soalan hanya memaparkan tajuk dan keterangan dan boleh diperluaskan; \"Dikunci\" - kotak soalan dipaparkan sepenuhnya dan tidak boleh runtuh."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Mengatasi peraturan penjajaran tajuk yang ditakrifkan pada panel, halaman atau tahap tinjauan. Opsyen \"Warisan\" menggunakan sebarang seting aras lebih tinggi (jika ditetapkan) atau seting aras tinjauan (\"Atas\" secara lalai)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Opsyen \"Warisan\" menggunakan seting aras tinjauan (\"Di bawah tajuk soalan\" secara lalai)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Mengesetkan lokasi mesej ralat berhubung dengan soalan dengan input tidak sah. Pilih antara: \"Atas\" - teks ralat diletakkan di bahagian atas kotak soalan; \"Bawah\" - teks ralat diletakkan di bahagian bawah kotak soalan. Pilihan \"Warisan\" menggunakan tetapan peringkat tinjauan (\"Atas\" secara lalai)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Menambah ruang atau jidar antara kandungan soalan dan sempadan kiri kotak soalan."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Menetapkan lebar soalan mengikut kadar unsur tinjauan lain dalam baris yang sama. Menerima nilai CSS (px, %, dalam, pt, dll.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan pengesahan untuk soalan itu."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Pilih daripada: \"Pada fokus yang hilang\" - nilai dikemas kini apabila medan input kehilangan fokus; \"Semasa menaip\" - nilai dikemas kini dalam masa nyata, semasa pengguna menaip. Pilihan \"Warisan\" menggunakan seting peringkat tinjauan (\"Pada fokus yang hilang\" secara lalai)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Anda boleh menggunakan mana-mana perkhidmatan web sebagai sumber data untuk soalan pelbagai pilihan. Untuk mengisi nilai pilihan, masukkan URL perkhidmatan yang menyediakan data."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Operasi perbandingan yang digunakan untuk menapis senarai juntai bawah."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Mengesetkan lebar kawasan tandatangan yang dipaparkan dan imej yang terhasil."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Mengesetkan ketinggian kawasan tandatangan yang dipaparkan dan imej yang terhasil."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Pilih jika anda inginkan kawasan tandatangan mengisi semua ruang yang tersedia dalam kotak soalan sambil mengekalkan nisbah aspek 3:2 lalai. Apabila nilai lebar dan ketinggian tersuai ditetapkan, seting akan mengekalkan nisbah aspek dimensi ini."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Melaraskan ketinggian imej dalam hasil tinjauan."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Melaraskan lebar imej dalam hasil tinjauan."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Mengatasi nilai ketinggian minimum dan maksimum."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Mengatasi nilai lebar minimum dan maksimum."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Nilai\" berfungsi sebagai ID item yang digunakan dalam peraturan bersyarat; \"Teks\" dipaparkan kepada responden."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Seting ini hanya mengubah saiz medan input dan tidak mempengaruhi lebar kotak soalan. Untuk mengehadkan panjang input yang diterima, pergi ke <b>Pengesahihan → Had aksara maksimum</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Mengesetkan bilangan baris yang dipaparkan dalam medan input. Jika input mengambil lebih banyak baris, bar skrol akan muncul."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Pilih antara: \"Boleh diedit\" - membolehkan responden mengisi tinjauan anda; \"Baca sahaja\" - melumpuhkan penyuntingan borang."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "ID lajur yang tidak kelihatan kepada responden."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Apabila didayakan untuk lajur, responden dikehendaki memberikan respons unik untuk setiap soalan dalam lajur ini."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Mengesetkan bilangan baris yang dipaparkan dalam medan input. Jika input mengambil lebih banyak baris, bar skrol akan muncul."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Gunakan ikon tongkat ajaib untuk mengesetkan peraturan bersyarat yang menentukan keterlihatan lajur."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Gunakan ikon tongkat ajaib untuk mengesetkan peraturan bersyarat yang menyahdayakan mod baca sahaja untuk lajur."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang penyerahan tinjauan melainkan sekurang-kurangnya satu soalan tersarang mempunyai jawapan."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Apabila dipilih, cipta lajur individu untuk setiap opsyen pilihan."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Pilih daripada: \"Statik\" - menetapkan lebar tetap; \"Responsif\" - membuat tinjauan menduduki lebar penuh skrin; \"Auto\" - terpakai salah satu daripada kedua-duanya bergantung kepada jenis soalan yang digunakan."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Tampal pautan imej (tiada had saiz) atau klik ikon folder untuk menyemak lalu fail daripada komputer anda (sehingga 64KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Menetapkan lebar logo dalam unit CSS (px, %, in, pt, dll.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Menetapkan ketinggian logo dalam unit CSS (px, %, in, pt, dll.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Pilih daripada: \"Tiada\" - imej mengekalkan saiz asalnya; \"Mengandungi\" - imej diubah saiznya agar sesuai sambil mengekalkan nisbah aspeknya; \"Cover\" - imej mengisi keseluruhan kotak sambil mengekalkan nisbah aspeknya; \"Isian\" - imej diregangkan untuk mengisi kotak tanpa mengekalkan nisbah aspeknya."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Mengesetkan kebolehlihatan dan lokasi butang navigasi pada halaman."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Menetapkan kebolehlihatan dan lokasi bar kemajuan. Nilai \"Auto\" memaparkan bar kemajuan di atas atau di bawah pengepala tinjauan."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Dayakan halaman pratonton dengan semua atau menjawab soalan sahaja."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Digunakan untuk semua soalan dalam tinjauan. Tetapan ini boleh diubah oleh peraturan penjajaran tajuk pada tahap yang lebih rendah: panel, halaman atau soalan. Tetapan peringkat rendah akan mengatasi mereka yang berada pada tahap yang lebih tinggi."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Simbol atau urutan simbol yang menunjukkan bahawa jawapan diperlukan."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Masukkan nombor atau huruf yang anda ingin mulakan penomboran."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Mengesetkan lokasi mesej ralat berhubung dengan soalan dengan input tidak sah. Pilih antara: \"Atas\" - teks ralat diletakkan di bahagian atas kotak soalan; \"Bawah\" - teks ralat diletakkan di bahagian bawah kotak soalan."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Pilih jika anda inginkan medan input pertama pada setiap halaman sedia untuk entri teks."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Mengekalkan susunan soalan asal atau rawak mereka. Kesan seting ini hanya kelihatan dalam tab Pratonton."
// pehelp.maxTextLength: "For text entry questions only." => "Untuk soalan entri teks sahaja."
// pehelp.maxCommentLength: "For question comments only." => "Untuk komen soalan sahaja."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Pilih jika anda inginkan komen soalan dan soalan Teks Panjang untuk mengembangkan ketinggian automatik berdasarkan panjang teks yang dimasukkan."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Untuk komen soalan dan soalan Teks Panjang sahaja."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Pemboleh ubah tersuai berfungsi sebagai pemboleh ubah perantaraan atau tambahan yang digunakan dalam pengiraan borang. Mereka mengambil input responden sebagai nilai sumber. Setiap pemboleh ubah tersuai mempunyai nama unik dan ungkapan yang berdasarkannya."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Pilih jika anda ingin nilai terhitung ungkapan disimpan bersama-sama dengan hasil tinjauan."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Pencetus ialah peristiwa atau keadaan yang berdasarkan ungkapan. Sebaik sahaja ungkapan dinilai kepada \"benar\", pencetus akan mematikan tindakan. Tindakan sedemikian secara pilihan boleh mempunyai soalan sasaran yang mempengaruhinya."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Pilih sama ada atau tidak untuk mengosongkan nilai untuk soalan yang tersembunyi oleh logik bersyarat dan bila untuk melakukannya."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Pilih daripada: \"Pada fokus yang hilang\" - nilai dikemas kini apabila medan input kehilangan fokus; \"Semasa menaip\" - nilai dikemas kini dalam masa nyata, semasa pengguna menaip."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Nilai kiri berfungsi sebagai ID lajur yang digunakan dalam peraturan bersyarat, nilai kanan dipaparkan kepada responden."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Nilai kiri berfungsi sebagai ID baris yang digunakan dalam peraturan bersyarat, nilai kanan dipaparkan kepada responden."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, dalam, pt, dll.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, dalam, pt, dll.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Mengesetkan lokasi mesej ralat berhubung dengan sel dengan input tidak sah. Opsyen \"Warisan\" menggunakan seting daripada sifat \"Penjajaran mesej ralat\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Apabila sifat \"Mencegah respons pendua\" didayakan, responden yang cuba menyerahkan entri pendua akan menerima mesej ralat berikut."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Membolehkan anda mengira jumlah nilai berdasarkan ungkapan. Ungkapan ini boleh termasuk pengiraan asas ('{q1_id} + {q2_id}'), Ungkapan Boolean ('{age} > 60') dan fungsi ('iif()', 'hari ini()', 'umur()', 'min()', 'max()', 'avg()', dll.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Mencetuskan gesaan yang meminta untuk mengesahkan pemadaman baris."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Pendua jawapan dari baris terakhir dan menguntukkannya ke baris dinamik tambahan seterusnya."
// pehelp.description: "Type a subtitle." => "Taipkan sari kata."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Pilih bahasa untuk mula mencipta tinjauan anda. Untuk menambah terjemahan, tukar kepada bahasa baru dan terjemahkan teks asal di sini atau dalam tab Terjemahan."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Mengesetkan lokasi seksyen butiran berhubung dengan baris. Pilih daripada: \"Tiada\" - tiada pengembangan ditambah; \"Di bawah baris\" - pengembangan baris diletakkan di bawah setiap baris matriks; \"Di bawah baris, paparkan pengembangan satu baris sahaja\" - pengembangan dipaparkan di bawah satu baris sahaja, pengembangan baris yang tinggal runtuh."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Pilih daripada: \"Tiada\" - imej mengekalkan saiz asalnya; \"Mengandungi\" - imej diubah saiznya agar sesuai sambil mengekalkan nisbah aspeknya; \"Cover\" - imej mengisi keseluruhan kotak sambil mengekalkan nisbah aspeknya; \"Isian\" - imej diregangkan untuk mengisi kotak tanpa mengekalkan nisbah aspeknya."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Secara beransur-ansur meningkatkan ketinggian medan input apabila data dimasukkan. Membatalkan seting \"Ketinggian medan input (dalam garisan)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Pemegang saiz semula (atau cengkaman) muncul di sudut dan boleh diseret untuk mengubah saiz medan input."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Selang masa dalam beberapa saat selepas itu tinjauan secara automatik maju ke halaman Terima Kasih."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Selang masa dalam beberapa saat selepas itu tinjauan secara automatik maju ke halaman seterusnya."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Selang masa dalam beberapa saat selepas itu tinjauan secara automatik maju ke halaman seterusnya."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan halaman."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menyahdayakan mod baca sahaja untuk halaman."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menghalang penyerahan tinjauan melainkan sekurang-kurangnya satu soalan tersarang mempunyai jawapan."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Digunakan untuk semua soalan dalam halaman ini. Jika anda ingin mengubah seting ini, takrifkan peraturan penjajaran tajuk untuk soalan atau panel individu. Pilihan \"Warisan\" menggunakan tetapan peringkat tinjauan (\"Atas\" secara lalai)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Mengesetkan lokasi mesej ralat berhubung dengan soalan dengan input tidak sah. Pilih antara: \"Atas\" - teks ralat diletakkan di bahagian atas kotak soalan; \"Bawah\" - teks ralat diletakkan di bahagian bawah kotak soalan. Pilihan \"Warisan\" menggunakan tetapan peringkat tinjauan (\"Atas\" secara lalai)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Mengekalkan susunan soalan asal atau rawak mereka. Pilihan \"Warisan\" menggunakan seting peringkat tinjauan (\"Asal\" secara lalai). Kesan seting ini hanya kelihatan dalam tab Pratonton."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Mengesetkan keterlihatan butang navigasi pada halaman. Opsyen \"Warisan\" menggunakan seting aras tinjauan, yang lalai kepada \"Boleh Dilihat\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Pilih daripada: \"Dikunci\" - pengguna tidak boleh mengembangkan atau meruntuhkan panel; \"Runtuhkan semua\" - semua panel bermula dalam keadaan runtuh; \"Kembangkan semua\" - semua panel bermula dalam keadaan yang diperluaskan; \"Pertama diperluaskan\" - hanya panel pertama yang pada mulanya diperluaskan."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Masukkan nama sifat dikongsi dalam tatasusunan objek yang mengandungi URL fail imej atau video yang anda ingin paparkan dalam senarai pilihan."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Nilai kiri berfungsi sebagai ID item yang digunakan dalam peraturan bersyarat, nilai yang betul dipaparkan kepada responden."
// pehelp.title: "Type a user-friendly title to display." => "Taipkan tajuk mesra pengguna untuk dipaparkan."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Memastikan pengguna tidak akan melengkapkan tinjauan sehingga fail dimuat naik."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, dalam, pt, dll.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, dalam, pt, dll.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, dalam, pt, dll.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Dalam jenis soalan pilihan tunggal dan berbilang pilihan, setiap pilihan pilihan mempunyai ID dan nilai paparan. Apabila dipilih, seting ini menunjukkan nilai paparan dan bukannya nilai ID dalam soalan HTML dan tajuk dinamik serta perihalan unsur tinjauan."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Pilih sama ada untuk mengosongkan nilai soalan yang tersembunyi oleh logik bersyarat dan bila untuk melakukannya. Pilihan \"Warisan\" menggunakan tetapan peringkat tinjauan (\"Setelah selesai tinjauan\" secara lalai)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Pilih daripada: \"Semua\" - menyalin semua pilihan pilihan daripada soalan yang dipilih; \"Dipilih\" - secara dinamik hanya menyalin pilihan pilihan yang dipilih; \"Tidak dipilih\" - secara dinamik menyalin hanya pilihan pilihan yang tidak dipilih. Pilihan \"Tiada\" dan \"Lain-lain\" disalin secara lalai jika didayakan dalam soalan sumber."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Apabila dipilih, pengguna boleh memasukkan input tambahan dalam kotak komen berasingan."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Memaparkan setiap pilihan pilihan khas (\"Tiada\", \"Lain\", \"Pilih Semua\") pada baris baru, walaupun menggunakan tataletak berbilang lajur."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Tentukan lokasi dalam set data perkhidmatan yang lokasi tatasusunan sasaran objek. Biarkan kosong jika URL telah menuding ke tatasusunan."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Masukkan nama sifat seragam dalam tatasusunan objek yang mengandungi nilai yang anda ingin paparkan dalam senarai pilihan."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Pilih untuk membenarkan perkhidmatan mengembalikan respons atau tatasusunan kosong."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Gunakan ikon tongkat ajaib untuk menetapkan peraturan bersyarat yang menentukan keterlihatan semua pilihan pilihan."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Nilai kiri berfungsi sebagai ID item yang digunakan dalam peraturan bersyarat, nilai yang betul dipaparkan kepada responden."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" memilih antara mod \"Butang\" dan \"Dropdown\" berdasarkan lebar yang tersedia. Apabila lebar tidak mencukupi untuk memaparkan butang, soalan memaparkan menu lungsur."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Membolehkan anda menyambungkan soalan yang menghasilkan hasil dalam format yang berbeza. Apabila soalan tersebut dipautkan bersama menggunakan pengecam cantuman, sifat kongsi ini menyimpan nilai soalan terpilih."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Pilih jika anda ingin mengemas kini kandungan menu juntai bawah agar sepadan dengan pertanyaan carian yang pengguna menaip dalam medan input."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Nilai untuk menyimpan hasil tinjauan apabila responden memberikan jawapan yang positif."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Nilai untuk menyimpan hasil tinjauan apabila responden memberikan jawapan negatif."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Ia tidak disyorkan untuk menyahdayakan pilihan ini kerana ia mengubah imej Pratonton dan menyukarkan pengguna untuk memahami sama ada fail telah dimuat naik."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Mencetuskan gesaan yang meminta untuk mengesahkan penghapusan fail."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Membolehkan untuk menilai pilihan yang dipilih sahaja. Pengguna akan menyeret item terpilih dari senarai pilihan untuk memesannya dalam kawasan kedudukan."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Masukkan senarai pilihan yang akan dicadangkan kepada responden semasa input."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Seting hanya mengubah saiz medan input dan tidak mempengaruhi lebar kotak soalan."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Mengesetkan lebar yang konsisten untuk semua label item dalam piksel"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Pilihan \"Auto\" secara automatik menentukan mod yang sesuai untuk paparan - Imej, Video atau YouTube - berdasarkan URL sumber yang disediakan."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Berfungsi sebagai pengganti apabila imej tidak boleh dipaparkan pada peranti pengguna dan untuk tujuan kebolehcapaian."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Mentakrifkan warna emoji yang dipilih apabila jenis ikon Penarafan ditetapkan kepada \"Smileys\". Pilih antara: \"Lalai\" - emoji yang dipilih muncul dalam warna tinjauan lalai; \"Skala\" - emoji yang dipilih mewarisi warna dari skala penarafan."
// expression.name: "An expression ID that is not visible to respondents." => "ID ungkapan yang tidak kelihatan kepada responden."
// expression.description: "Type an expression subtitle." => "Taipkan sari kata ungkapan."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Ungkapan boleh termasuk pengiraan asas ('{q1_id} + {q2_id}'), syarat ('{age} > 60'), dan fungsi ('iif()', 'hari ini()', 'umur()', 'min()', 'max()', 'pur()', dll.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Pilih untuk menyimpan nilai pilihan \"Lain-lain\" sebagai harta berasingan dalam hasil tinjauan."
// p.swapOrder: "Swap the order of Yes and No" => "Tukar pesanan Ya dan Tidak"
// p.itemTitleWidth: "Item label width (in px)" => "Lebar label item (dalam piksel)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Teks untuk ditunjukkan jika semua opsyen dipilih"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Teks ruang letak untuk kawasan penarafan"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Lengkapkan tinjauan secara automatik"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Pilih jika anda mahu tinjauan selesai secara automatik selepas responden menjawab semua soalan."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Simpan nilai bertopeng dalam hasil tinjauan"
// patternmask.pattern: "Value pattern" => "Corak nilai"
// datetimemask.min: "Minimum value" => "Nilai minimum"
// datetimemask.max: "Maximum value" => "Nilai maksimum"
// numericmask.allowNegativeValues: "Allow negative values" => "Benarkan nilai negatif"
// numericmask.thousandsSeparator: "Thousands separator" => "Pemisah beribu-ribu"
// numericmask.decimalSeparator: "Decimal separator" => "Pemisah perpuluhan"
// numericmask.precision: "Value precision" => "Ketepatan nilai"
// numericmask.min: "Minimum value" => "Nilai minimum"
// numericmask.max: "Maximum value" => "Nilai maksimum"
// currencymask.prefix: "Currency prefix" => "Awalan mata wang"
// currencymask.suffix: "Currency suffix" => "Akhiran mata wang"
// pe.maskType: "Input mask type" => "Input jenis topeng"
// maskTypes.patternmask: "Pattern" => "Corak"
// maskTypes.numericmask: "Numeric" => "Angka"
// maskTypes.datetimemask: "Date and Time" => "Tarikh dan Masa"
// maskTypes.currencymask: "Currency" => "Mata wang"
// tabs.mask: "Input Mask Settings" => "Seting Topeng Input"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Ex.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Ex.: mm/dd/yyyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "Ex.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Ex.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Pilihan balut"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Teks panjang dalam pilihan pilihan akan menjana pemisah baris secara automatik agar muat dalam menu lungsur. Nyahpilih jika anda mahu teks klip."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Pilih jika anda ingin menyimpan nilai soalan dengan topeng yang digunakan dalam hasil tinjauan."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Corak boleh mengandungi literal rentetan dan ruang letak berikut: '9' - untuk digit; 'a' - untuk huruf besar atau kecil; '#' - untuk digit atau huruf besar atau huruf kecil. Gunakan tindak balas '\\' untuk melarikan diri daripada watak."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Corak boleh mengandungi aksara pemisah dan ruang letak berikut: 'm' - untuk nombor bulan; 'mm' - untuk nombor bulan, dengan sifar utama untuk nilai satu digit; 'd' - untuk hari dalam bulan; 'dd' - untuk hari dalam bulan, dengan sifar utama untuk nilai satu digit; 'yy' - untuk dua digit terakhir tahun ini; 'yyyy' - untuk tahun empat angka."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Simbol yang digunakan untuk memisahkan bahagian pecahan daripada bahagian integer bagi nombor yang dipaparkan."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Simbol yang digunakan untuk memisahkan digit nombor besar ke dalam kumpulan tiga."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Hadkan bilangan digit untuk dikekalkan selepas titik perpuluhan bagi nombor yang dipaparkan."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Satu atau beberapa simbol yang akan dipaparkan sebelum nilai."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Satu atau beberapa simbol yang akan dipaparkan selepas nilai."
// ed.translationSource: "Source: " => "Sumber: "
// ed.translationTarget: "Target: " => "Sasaran: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Halaman kosong. Seret elemen dari kotak alat atau klik butang di bawah."
// maskTypes.none: "None" => "Tiada"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Jadikan baris kelihatan jika"
// itemvalue@rows.enableIf: "Make the row editable if" => "Jadikan baris boleh diedit jika"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Teks ruang letak dalam mod baca sahaja atau pratonton"
// pe.textWrapEnabled: "Wrap choices" => "Pilihan balut"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Pilihan \"Auto\" secara automatik menentukan mod yang sesuai untuk paparan - Imej, Video atau YouTube - berdasarkan URL sumber yang disediakan."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Pilih antara \"Imej\" dan \"Video\" untuk menetapkan mod kandungan pemilih media. Jika \"Imej\" dipilih, pastikan semua pilihan yang disediakan adalah fail imej dalam format berikut: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Begitu juga, jika \"Video\" dipilih, pastikan semua pilihan adalah pautan langsung ke fail video dalam format berikut: MP4, MOV, WMV, FLV, AVI, MKV. Sila ambil perhatian bahawa pautan YouTube tidak disokong untuk pilihan video."
// ed.selectFile: "Select a file" => "Pilih fail"
// ed.removeFile: "Remove the file" => "Mengalih keluar fail"
// pe.searchMode: "Search Mode" => "Mod Carian"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Klik butang \"Tambah Soalan\" di bawah untuk mula membuat borang anda."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Klik butang \"Tambah Soalan\" di bawah untuk menambah elemen baru ke halaman."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Klik butang \"Tambah Soalan\" di bawah untuk menambah elemen baru ke panel."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Klik butang di bawah dan pilih imej untuk dimuat naik"
// coloralpha.opacity: "Opacity" => "Kelegapan"
// font.family: "Font family" => "Keluarga fon"
// font.color: "Color" => "Warna"
// font.placeholderColor: "Placeholder color" => "Warna ruang letak"
// font.size: "Size" => "Saiz"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Penampilan soalan"
// theme.editorPanel: "Background and corner radius" => "Latar belakang dan jejari sudut"
// theme.questionPanel: "Background and corner radius" => "Latar belakang dan jejari sudut"
// theme.primaryColor: "Accent color" => "Warna aksen"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Kelegapan latar belakang panel"
// theme.questionBackgroundTransparency: "Question background opacity" => "Kelegapan latar belakang soalan"
// theme.fontSize: "Font size" => "Saiz fon"
// theme.scale: "Scale" => "Skala"
// theme.cornerRadius: "Corner radius" => "Jejari penjuru"
// theme.pageTitle: "Title font" => "Fon tajuk"
// theme.pageDescription: "Description font" => "Fon perihalan"
// theme.questionTitle: "Title font" => "Fon tajuk"
// theme.questionDescription: "Description font" => "Fon perihalan"
// theme.editorFont: "Font" => "Fon"
// theme.backgroundOpacity: "Opacity" => "Kelegapan"
// theme.--sjs-font-family: "Font family" => "Keluarga fon"
// theme.--sjs-general-backcolor-dim: "Background color" => "Warna latar belakang"
// theme.--sjs-primary-backcolor: "Accent background" => "Latar belakang aksen"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Aksen latar depan"
// theme.--sjs-shadow-small: "Shadow effects" => "Kesan bayang"
// theme.--sjs-shadow-inner: "Shadow effects" => "Kesan bayang"
// theme.--sjs-border-default: "Colors" => "Warna"
// header@header.headerView: "View" => "Lihat"
// header@header.logoPosition: "Logo position" => "Kedudukan logo"
// header@header.surveyTitle: "Survey title font" => "Fon tajuk tinjauan"
// header@header.surveyDescription: "Survey description font" => "Fon perihalan tinjauan"
// header@header.headerTitle: "Survey title font" => "Fon tajuk tinjauan"
// header@header.headerDescription: "Survey description font" => "Fon perihalan tinjauan"
// header@header.inheritWidthFrom: "Content area width" => "Lebar kawasan kandungan"
// header@header.textAreaWidth: "Text width" => "Lebar teks"
// header@header.backgroundColorSwitch: "Background color" => "Warna latar belakang"
// header@header.backgroundImage: "Background image" => "Imej latar belakang"
// header@header.backgroundImageOpacity: "Opacity" => "Kelegapan"
// header@header.overlapEnabled: "Overlap" => "Bertindih"
// header@header.logoPositionX: "Logo position" => "Kedudukan logo"
// header@header.titlePositionX: "Title position" => "Kedudukan tajuk"
// header@header.descriptionPositionX: "Description position" => "Kedudukan perihalan"
// weight.400: "Regular" => "Tetap"
// weight.600: "Heavy" => "Berat"
// weight.700: "Semi-bold" => "Separa berani"
// weight.800: "Bold" => "Berani"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Perlindungan"
// backgroundImageFit.contain: "Contain" => "Mengandungi"
// backgroundImageFit.fill: "Stretch" => "Regangan"
// backgroundImageFit.tile: "Tile" => "Jubin"
// backgroundImageAttachment.fixed: "Fixed" => "Tetap"
// backgroundImageAttachment.scroll: "Scroll" => "Tatal"
// headerView.basic: "Basic" => "Asas"
// headerView.advanced: "Advanced" => "Lanjutan"
// inheritWidthFrom.survey: "Same as survey" => "Sama seperti tinjauan"
// inheritWidthFrom.container: "Fit to container" => "Muat ke bekas"
// backgroundColorSwitch.none: "None" => "Tiada"
// backgroundColorSwitch.accentColor: "Accent color" => "Warna aksen"
// backgroundColorSwitch.custom: "Custom" => "Tersuai"
// colorPalette.light: "Light" => "Cahaya"
// colorPalette.dark: "Dark" => "Gelap"
// isPanelless.false: "Default" => "Lalai"
// isPanelless.true: "Without Panels" => "Tanpa Panel"
// theme.cornerRadius: "Corner radius" => "Jejari penjuru"
// theme.fontFamily: "Font family" => "Keluarga fon"
// theme.fontWeightRegular: "Regular" => "Tetap"
// theme.fontWeightHeavy: "Heavy" => "Berat"
// theme.fontWeightSemiBold: "Semi-bold" => "Separa berani"
// theme.fontWeightBold: "Bold" => "Berani"
// theme.color: "Color" => "Warna"
// theme.placeholderColor: "Placeholder color" => "Warna ruang letak"
// theme.size: "Size" => "Saiz"
// theme.opacity: "Opacity" => "Kelegapan"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Taip untuk mencari..."
// ed.toolboxNoResultsFound: "No results found" => "Tiada keputusan ditemui"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Ruang letak tajuk tab"
// theme.--sjs-special-red: "Error messages" => "Mesej ralat"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Teks sandaran untuk tajuk tab yang digunakan apabila corak tajuk tab tidak menghasilkan nilai yang bermakna."
// theme.fontColor: "Font color" => "Warna fon"
// theme.backgroundColor: "Background color" => "Warna latar belakang"
// pe.questionTitleWidth: "Question title width" => "Lebar tajuk soalan"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Pilih fail atau tampal pautan fail..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Ex.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Menetapkan lebar yang konsisten untuk tajuk soalan apabila ia dijajarkan di sebelah kiri kotak soalan mereka. Menerima nilai CSS (px, %, dalam, pt, dll.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Menetapkan lebar yang konsisten untuk tajuk soalan apabila ia dijajarkan di sebelah kiri kotak soalan mereka. Menerima nilai CSS (px, %, dalam, pt, dll.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Komen ketinggian kawasan (dalam garisan)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Mengesetkan bilangan baris yang dipaparkan dalam kawasan teks untuk komen soalan. Dalam input mengambil lebih banyak baris, bar skrol muncul."
// pe.enabled: "Enabled" => "Didayakan"
// pe.disabled: "Disabled" => "Kurang upaya"
// pe.inherit: "Inherit" => "Mewarisi"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Sahkan medan kosong pada fokus yang hilang"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Cth.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Cth.: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Dayakan pilihan ini untuk mencetuskan pengesahan apabila pengguna memfokuskan pada medan input kosong dan kemudian meninggalkannya tanpa membuat sebarang perubahan."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Mengatur pilihan pilihan dalam susun atur berbilang lajur. Apabila ditetapkan kepada 0, pilihan dipaparkan dalam satu baris."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Tetapan ini hanya digunakan pada soalan di luar panel."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Menetapkan warna tambahan yang menyerlahkan elemen tinjauan utama."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Melaraskan ketelusan panel dan kotak soalan berbanding dengan latar belakang tinjauan."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Melaraskan ketelusan elemen input berbanding dengan latar belakang tinjauan."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Menetapkan jejari sudut untuk semua elemen segi empat tepat. Dayakan Mod Lanjutan jika anda ingin menetapkan nilai jejari sudut individu untuk elemen input atau panel dan kotak soalan."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Menetapkan warna latar belakang utama tinjauan."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Pilihan \"Sama seperti bekas\" melaraskan secara automatik lebar kawasan kandungan pengepala agar sesuai dengan elemen HTML tempat tinjauan diletakkan."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Lebar kawasan pengepala yang mengandungi tajuk dan perihalan tinjauan, diukur dalam piksel."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Menerima nilai %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Menerima nilai px."
// p.effectiveColSpan: "Column span" => "Rentang lajur"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Sama seperti tinjauan"
// progressBarInheritWidthFrom.container: "Same as container" => "Sama seperti bekas"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Memaparkan pratonton lakaran kecil untuk fail yang dimuat naik apabila boleh. Nyahpilih jika anda mahu menunjukkan ikon fail."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Pilihan \"Sama seperti bekas\" melaraskan lebar kawasan bar kemajuan secara automatik agar sesuai dengan elemen HTML yang diletakkan dalam tinjauan."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Lebar kawasan bar kemajuan"
// maskType.none: "None" => "Tiada"
// maskType.pattern: "Pattern" => "Corak"
// maskType.numeric: "Numeric" => "Angka"
// maskType.datetime: "Date and Time" => "Tarikh dan Masa"
// maskType.currency: "Currency" => "Mata wang"

// inputTextAlignment.auto: "Auto" => "Auto"
// inputTextAlignment.left: "Left" => "Kiri"
// inputTextAlignment.right: "Right" => "Kanan"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Pilih cara untuk menjajarkan nilai input dalam medan. Seting lalai \"Auto\" menjajarkan nilai input ke kanan jika mata wang atau topeng angka digunakan dan ke kiri jika tidak."
// p.inputTextAlignment: "Input value alignment" => "Penjajaran nilai input"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Tunjukkan bar kemajuan"
// paneldynamic.showProgressBar: "Show the progress bar" => "Tunjukkan bar kemajuan"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Penjajaran bar kemajuan"
// pv.carousel: "Carousel" => "Carousel"
// progressBarLocation.top: "Top" => "Atas"
// progressBarLocation.bottom: "Bottom" => "Bawah"
// progressBarLocation.topBottom: "Top and bottom" => "Atas dan bawah"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Mengatur pilihan pilihan dalam susun atur berbilang lajur. Apabila ditetapkan kepada 0, pilihan dipaparkan dalam satu baris. Apabila ditetapkan kepada -1, nilai sebenar diwarisi daripada sifat \"Kiraan lajur bersarang\" bagi matriks induk."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Pautan YouTube tidak disokong."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Mula mengkonfigurasi borang anda"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Klik mana-mana ikon kategori untuk meneroka tetapan tinjauan. Seting tambahan akan tersedia sebaik sahaja anda menambah elemen tinjauan pada permukaan reka bentuk."
// pe.caseInsensitive: "Case insensitive" => "Tidak sensitif huruf besar"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Pilih jika huruf besar dan huruf kecil dalam ungkapan biasa mesti dianggap sebagai setara."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Borang anda kosong"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Borang anda kosong"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Seret elemen daripada kotak alat atau klik butang di bawah."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Seret elemen daripada kotak alat atau klik butang di bawah."
// ed.previewPlaceholderTitle: "No preview" => "Tiada pratonton"
// ed.previewPlaceholderTitleMobile: "No preview" => "Tiada pratonton"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Tinjauan tidak mengandungi sebarang elemen yang boleh dilihat."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Tinjauan tidak mengandungi sebarang elemen yang boleh dilihat."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Tiada tali untuk diterjemahkan"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Tiada tali untuk diterjemahkan"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Tambah elemen pada borang anda atau tukar penapis rentetan dalam bar alat."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Tambah elemen pada borang anda atau tukar penapis rentetan dalam bar alat."
// lg.logicPlaceholderTitle: "No logical rules" => "Tiada peraturan logik"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Tiada peraturan logik"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Buat peraturan untuk menyesuaikan aliran tinjauan."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Buat peraturan untuk menyesuaikan aliran tinjauan."
// pe.showTimer: "Use a timer" => "Gunakan pemasa"
// theme.advancedMode: "Advanced mode" => "Mod lanjutan"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Menetapkan lokasi pemasa pada halaman."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Apabila ditetapkan kepada 0, ketinggian dikira secara automatik untuk menampung kandungan pengepala."
// p.mobileHeight: "Height on smartphones" => "Ketinggian pada telefon pintar"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Apabila didayakan, bahagian atas tinjauan menindih bahagian bawah pengepala."
// ed.creatorSettingTitle: "Creator Settings" => "Tetapan Pencipta"
// tabs.accentColors: "Accent colors" => "Warna aksen"
// tabs.scaling: "Scaling" => "Penskalaan"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Memberikan nombor kepada soalan yang bersarang dalam panel ini."
// creatortheme.--sjs-special-background: "Surface background" => "Latar belakang permukaan"
// creatortheme.--sjs-primary-background-500: "Primary" => "Utama"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Menengah"
// creatortheme.surfaceScale: "Surface" => "Permukaansurface"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Antara muka pengguna"
// creatortheme.fontScale: "Font" => "Fon"
// names.sc2020: "Survey Creator 2020" => "Pencipta Tinjauan 2020"
// names.default-light: "Light" => "Cahaya"
// names.default-dark: "Dark" => "Gelap"
// names.default-contrast: "Contrast" => "Sebaliknya"
// panel.showNumber: "Number this panel" => "Nombor panel ini"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Pilih jika anda mahu tinjauan maju secara automatik ke halaman seterusnya sebaik sahaja responden telah menjawab semua soalan pada halaman semasa. Ciri ini tidak akan digunakan jika soalan terakhir pada halaman adalah terbuka atau membenarkan berbilang jawapan."
// autocomplete.name: "Full Name" => "Nama Penuh"
// autocomplete.honorific-prefix: "Prefix" => "Awalan"
// autocomplete.given-name: "First Name" => "Nama Pertama"
// autocomplete.additional-name: "Middle Name" => "Nama Tengah"
// autocomplete.family-name: "Last Name" => "Nama keluarga"
// autocomplete.honorific-suffix: "Suffix" => "Akhiran"
// autocomplete.nickname: "Nickname" => "Nama samaran"
// autocomplete.organization-title: "Job Title" => "Tajuk pekerjaan"
// autocomplete.username: "User Name" => "Nama pengguna"
// autocomplete.new-password: "New Password" => "Kata Laluan Baru"
// autocomplete.current-password: "Current Password" => "Kata Laluan Semasa"
// autocomplete.organization: "Organization Name" => "Nama Organisasi"
// autocomplete.street-address: "Full Street Address" => "Alamat Jalan Penuh"
// autocomplete.address-line1: "Address Line 1" => "Baris Alamat 1"
// autocomplete.address-line2: "Address Line 2" => "Baris Alamat 2"
// autocomplete.address-line3: "Address Line 3" => "Baris Alamat 3"
// autocomplete.address-level4: "Level 4 Address" => "Alamat Tahap 4"
// autocomplete.address-level3: "Level 3 Address" => "Alamat Tahap 3"
// autocomplete.address-level2: "Level 2 Address" => "Alamat Tahap 2"
// autocomplete.address-level1: "Level 1 Address" => "Alamat Tahap 1"
// autocomplete.country: "Country Code" => "Kod Negara"
// autocomplete.country-name: "Country Name" => "Nama Negara"
// autocomplete.postal-code: "Postal Code" => "Poskod"
// autocomplete.cc-name: "Cardholder Name" => "Nama Pemegang Kad"
// autocomplete.cc-given-name: "Cardholder First Name" => "Nama Pertama Pemegang Kad"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Nama Tengah Pemegang Kad"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Nama Keluarga Pemegang Kad"
// autocomplete.cc-number: "Credit Card Number" => "Nombor Kad Kredit"
// autocomplete.cc-exp: "Expiration Date" => "Tarikh Tamat Tempoh"
// autocomplete.cc-exp-month: "Expiration Month" => "Bulan Tamat Tempoh"
// autocomplete.cc-exp-year: "Expiration Year" => "Tahun tamat tempoh"
// autocomplete.cc-csc: "Card Security Code" => "Kod Keselamatan Kad"
// autocomplete.cc-type: "Credit Card Type" => "Jenis Kad Kredit"
// autocomplete.transaction-currency: "Transaction Currency" => "Mata Wang Transaksi"
// autocomplete.transaction-amount: "Transaction Amount" => "Jumlah Transaksi"
// autocomplete.language: "Preferred Language" => "Bahasa Pilihan"
// autocomplete.bday: "Birthday" => "Birthday"
// autocomplete.bday-day: "Birthday Day" => "Hari Lahir"
// autocomplete.bday-month: "Birthday Month" => "Bulan Hari Lahir"
// autocomplete.bday-year: "Birthday Year" => "Tahun Hari Lahir"
// autocomplete.sex: "Gender" => "Jantina"
// autocomplete.url: "Website URL" => "URL laman web"
// autocomplete.photo: "Profile Photo" => "Gambar Profil"
// autocomplete.tel: "Telephone Number" => "Nombor telefon"
// autocomplete.tel-country-code: "Country Code for Phone" => "Kod Negara untuk Telefon"
// autocomplete.tel-national: "National Telephone Number" => "Nombor Telefon Kebangsaan"
// autocomplete.tel-area-code: "Area Code" => "Kod Kawasan"
// autocomplete.tel-local: "Local Phone Number" => "Nombor Telefon Tempatan"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Awalan Telefon Tempatan"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Akhiran Telefon Tempatan"
// autocomplete.tel-extension: "Phone Extension" => "Sambungan Telefon"
// autocomplete.email: "Email Address" => "Alamat Emel"
// autocomplete.impp: "Instant Messaging Protocol" => "Protokol Pemesejan Segera"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Kunci keadaan kembangkan/runtuhkan untuk soalan"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Anda belum mempunyai sebarang halaman lagi"
// pe.addNew@pages: "Add new page" => "Tambah halaman baru"
// ed.zoomInTooltip: "Zoom In" => "Zum Masuk"
// ed.zoomOutTooltip: "Zoom Out" => "Zum Keluar"
// tabs.surfaceBackground: "Surface Background" => "Latar Belakang Permukaan"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Gunakan jawapan daripada entri terakhir sebagai lalai"
// colors.gray: "Gray" => "Kelabu"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Penjajaran butang navigasi"
// pv.allQuestions: "Show all questions" => "Tunjukkan semua soalan"
// pv.answeredQuestions: "Show answered questions only" => "Tunjukkan soalan yang dijawab sahaja"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Menetapkan lokasi butang navigasi pada halaman."
// pe.size: "Input field width (in characters)" => "Lebar medan input (dalam aksara)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Gunakan nilai daripada lajur matriks atau soalan panel berikut sebagai ID pilihan"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Gunakan nilai daripada lajur matriks atau soalan panel berikut sebagai teks pilihan"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "Dalam jenis soalan pilihan tunggal dan berbilang pilihan, setiap pilihan pilihan mempunyai ID dan nilai paparan. Seting ini menentukan lajur matriks atau soalan panel yang harus menyediakan ID."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "Dalam jenis soalan pilihan tunggal dan berbilang pilihan, setiap pilihan pilihan mempunyai ID dan nilai paparan. Seting ini menentukan lajur matriks atau soalan panel yang harus menyediakan teks paparan."
// pe.progressBarLocation: "Progress bar alignment" => "Penjajaran bar kemajuan"
// progressBarLocation.topbottom: "Top and bottom" => "Atas dan bawah"
// progressBarLocation.aboveheader: "Above the header" => "Di atas pengepala"
// progressBarLocation.belowheader: "Below the header" => "Di bawah pengepala"
// progressBarLocation.off: "Hidden" => "Tersembunyi"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Menetapkan lokasi bar kemajuan. Nilai \"Auto\" memaparkan bar kemajuan di atas atau di bawah pengepala tinjauan."
// survey.readOnly: "Make the survey read-only" => "Jadikan tinjauan baca sahaja"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Pilih jika anda mahu menghalang responden daripada mengisi tinjauan anda."
// paneldynamic.showNumber: "Number the panel" => "Nombor panel"
// question.showNumber: "Number this question" => "Nombor soalan ini"
// pe.previewMode: "Preview mode" => "Mod pratonton"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Dayakan reka letak grid"
// pe.maskSettings: "Mask settings" => "Tetapan topeng"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Penjajaran mesej ralat pengembangan baris"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Menetapkan lokasi mesej ralat untuk soalan yang bersarang dalam bahagian terperinci. Pilihan \"Mewarisi\" menggunakan tetapan daripada sifat \"Penjajaran mesej ralat\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Lajur susun atur grid"
// pe.startPageTitlePlaceholder: "Start Page" => "Halaman Permulaan"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Lebar berkesan,%"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Lebar tajuk soalan, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Anda belum mempunyai lajur reka letak lagi"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Menentukan bilangan lajur panel ini merangkumi dalam tataletak grid."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Jadual ini membolehkan anda mengkonfigurasi setiap lajur grid dalam panel. Ia secara automatik menetapkan peratusan lebar untuk setiap lajur berdasarkan bilangan maksimum elemen dalam baris. Untuk menyesuaikan tataletak grid, laraskan nilai ini secara manual dan takrifkan lebar tajuk untuk semua soalan dalam setiap lajur."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Pencipta Tinjauan membolehkan anda melaraskan lebar sebaris elemen borang secara manual untuk mengawal reka letak. Jika ini tidak menghasilkan hasil yang diingini, anda boleh mendayakan reka letak grid, yang menstrukturkan elemen membentuk menggunakan sistem berasaskan lajur. Untuk mengkonfigurasi lajur reka letak, pilih halaman atau panel dan gunakan jadual \"Tetapan Soalan\" → \"Lajur Grid\". Untuk melaraskan bilangan lajur rentang soalan, pilihnya dan tetapkan nilai yang dikehendaki dalam medan \"Reka Letak\" → \"Rentang lajur\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Menentukan bilangan lajur soalan ini merangkumi dalam reka letak grid."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Jadual ini membolehkan anda mengkonfigurasi setiap lajur grid pada halaman. Ia secara automatik menetapkan peratusan lebar untuk setiap lajur berdasarkan bilangan maksimum elemen dalam baris. Untuk menyesuaikan tataletak grid, laraskan nilai ini secara manual dan takrifkan lebar tajuk untuk semua soalan dalam setiap lajur."

// ed.expandTooltip: "Expand" => "Mengembangkan"
// ed.collapseTooltip: "Collapse" => "Runtuh"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Cth.: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Menetapkan lebar yang konsisten untuk semua label item. Menerima nilai CSS (px, %, in, pt, dll.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zum kepada 100%"
// ed.addLanguageTooltip: "Add Language" => "Tambah Bahasa"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Menetapkan bilangan baris yang dipaparkan dalam kawasan teks untuk ulasan soalan. Jika input mengambil lebih banyak baris, bar skrol muncul."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Nilai paparan lalai untuk teks dinamik"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Nilai yang dipaparkan dalam soalan HTML dan dalam tajuk dinamik dan perihalan elemen tinjauan apabila nilai soalan kosong."
// showQuestionNumbers.recursive: "Recursive numbering" => "Penomboran rekursif"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Lebar tajuk soalan"
// pe.allowCustomChoices: "Allow custom choices" => "Benarkan pilihan tersuai"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Menetapkan lebar yang konsisten untuk tajuk soalan apabila ia diselaraskan ke sebelah kiri kotak soalan mereka. Menerima nilai CSS (px, %, dalam, pt, dll.)."
// page.name: "A page ID that is not visible to respondents." => "ID halaman yang tidak dapat dilihat oleh responden."
// page.description: "Type a page subtitle." => "Taipkan sari kata halaman."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Kapsyen yang dipaparkan pada butang navigasi dalam bar kemajuan atau jadual kandungan (TOC). Jika anda membiarkan medan ini kosong, butang navigasi akan menggunakan tajuk halaman atau nama halaman. Untuk mendayakan bar kemajuan atau TOC, pergi ke \"Tinjauan\" → \"Navigasi\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Pilih untuk membenarkan responden menambah pilihan mereka sendiri jika pilihan yang dikehendaki tidak tersedia dalam menu lungsur. Pilihan tersuai hanya akan disimpan buat sementara waktu sepanjang sesi penyemak imbas semasa."