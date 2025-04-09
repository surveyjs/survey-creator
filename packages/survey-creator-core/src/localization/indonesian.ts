import { setupLocale } from "survey-creator-core";

export var indonesianStrings = {
  // survey templates
  survey: {
    edit: "Ubah",
    externalHelpLink: "Tonton dan pelajari cara membuat survei",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Silahkan letakkan pertanyaan di sini dari Kotak Perkakas di sebelah kiri.",
    addLogicItem: "Buat aturan untuk menyesuaikan alur survei.",
    copy: "Salin",
    duplicate: "Duplikat",
    addToToolbox: "Tambahkan ke Kotak Perkakas",
    deletePanel: "Hapus Panel",
    deleteQuestion: "Hapus Pertanyaan",
    convertTo: "Mengubah ke",
    drag: "Tarik elemen",
  },
  // Creator tabs
  tabs: {
    preview: "Coba Survei",
    theme: "Tema",
    translation: "Terjemahan",
    designer: "Rancangan Survei",
    json: "Pengubah JSON",
    logic: "Logika"
  },
  // Question types
  qt: {
    default: "Default",
    checkbox: "Kotak Centang",
    comment: "Komentar",
    imagepicker: "Gambar",
    ranking: "Peringkat",
    image: "Citra",
    dropdown: "Kotak Kombo",
    tagbox: "Dropdown Multi-Pilih",
    file: "Berkas",
    html: "Html",
    matrix: "Matriks (pilihan tunggal)",
    matrixdropdown: "Matriks (pilihan ganda)",
    matrixdynamic: "Matriks (baris dinamis)",
    multipletext: "Teks Ganda",
    panel: "Panel",
    paneldynamic: "Panel (panel dinamis)",
    radiogroup: "Pilihan Ganda",
    rating: "Peringkat",
    text: "Input Tunggal",
    boolean: "Yes/No (Boolean)",
    expression: "Ekspresi (dibaca saja)",
    signaturepad: "Tanda tangan",
    buttongroup: "Grup Tombol"
  },
  toolboxCategories: {
    general: "Umum",
    choice: "Pertanyaan Pilihan",
    text: "Pertanyaan Input Teks",
    containers: "Wadah",
    matrix: "Pertanyaan Matriks",
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Survei",
    settings: "Pengaturan Survei",
    settingsTooltip: "Buka pengaturan",
    surveySettings: "Pengaturan Survei",
    surveySettingsTooltip: "Pengaturan survei",
    themeSettings: "Pengaturan Tema",
    themeSettingsTooltip: "Pengaturan tema",
    creatorSettingTitle: "Pengaturan Kreator",
    showPanel: "Tampilkan Panel",
    hidePanel: "Sembunyikan Panel",
    prevSelected: "Pilih sebelumnya",
    nextSelected: "Pilih selanjutnya",
    prevFocus: "Fokus sebelumnya",
    nextFocus: "Fokus berikutnya",
    surveyTypeName: "Survei",
    pageTypeName: "Halaman",
    panelTypeName: "Panel",
    questionTypeName: "Pertanyaan",
    columnTypeName: "Kolom",
    addNewPage: "Tambah Halaman Baru",
    moveRight: "Geser ke Kanan",
    moveLeft: "Geser ke Kiri",
    deletePage: "Hapus Halaman",
    editPage: "Ubah Halaman",
    edit: "Ubah",
    newPageName: "halaman",
    newQuestionName: "pertanyaan",
    newPanelName: "panel",
    newTextItemName: "Teks",
    defaultV2Theme: "Default",
    modernTheme: "Modern",
    defaultTheme: "Default (warisan)",
    testSurveyAgain: "Coba Survei Lagi",
    testSurveyWidth: "Lebar survei: ",
    navigateToMsg: "Anda harus menavigasi ke",
    saveSurvey: "Simpan Survei",
    saveSurveyTooltip: "Simpan Survei",
    saveTheme: "Simpan Tema",
    saveThemeTooltip: "Simpan Tema",
    jsonHideErrors: "Menyembunyikan kesalahan",
    jsonShowErrors: "Tampilkan kesalahan",
    undo: "Urungkan",
    redo: "Ulangi",
    undoTooltip: "Mengurungkan perubahan terakhir",
    redoTooltip: "Mengulangi perubahan",
    expandTooltip: "Memperluas",
    collapseTooltip: "Roboh",
    expandAllTooltip: "Perluas Semua",
    collapseAllTooltip: "Ciutkan Semua",
    zoomInTooltip: "Perbesar",
    zoom100Tooltip: "Perbesar hingga 100%",
    zoomOutTooltip: "Perkecil",
    lockQuestionsTooltip: "Kunci status perluasan/ciutkan untuk pertanyaan",
    showMoreChoices: "Tampilkan lebih banyak",
    showLessChoices: "Tampilkan lebih sedikit",
    copy: "Menyalin",
    cut: "Memotong",
    paste: "Pasta",
    copyTooltip: "Salin pilihan ke clipboard",
    cutTooltip: "Memotong pilihan ke clipboard",
    pasteTooltip: "Tempel dari papan klip",
    options: "Pilihan",
    generateValidJSON: "Hasilkan JSON yang Valid",
    generateReadableJSON: "Hasilkan JSON yang dapat dibaca",
    toolbox: "Kotak Perkakas",
    "property-grid": "Properti",
    toolboxFilteredTextPlaceholder: "Ketik untuk mencari...",
    toolboxNoResultsFound: "Tidak ada hasil yang ditemukan",
    propertyGridFilteredTextPlaceholder: "Ketik untuk mencari...",
    propertyGridNoResultsFound: "Tidak ada hasil yang ditemukan",
    propertyGridPlaceholderTitle: "Mulai mengonfigurasi formulir Anda",
    propertyGridPlaceholderDescription: "Klik ikon kategori apa pun untuk menjelajahi pengaturan survei. Pengaturan tambahan akan tersedia setelah Anda menambahkan elemen survei ke permukaan desain.",
    correctJSON: "Please correct JSON.",
    surveyResults: "Hasil survei: ",
    surveyResultsTable: "Sebagai tabel",
    surveyResultsJson: "Sebagai JSON",
    resultsTitle: "Judul Pertanyaan",
    resultsName: "Nama Pertanyaan",
    resultsValue: "Nilai Jawaban",
    resultsDisplayValue: "Tampilkan Nilai",
    modified: "Dimodifikasi",
    saving: "Menyimpan",
    saved: "Tersimpan",
    propertyEditorError: "Kesalahan",
    saveError: "Error! Konten editor tidak berhasil disimpan.",
    translationPropertyGridTitle: "Pengaturan Bahasa",
    themePropertyGridTitle: "Pengaturan Tema",
    addLanguageTooltip: "Tambahkan Bahasa",
    translationLanguages: "Bahasa",
    translationDeleteLanguage: "Apakah Anda yakin ingin menghapus semua string untuk bahasa ini?",
    translationAddLanguage: "Pilih bahasa untuk terjemahan",
    translationShowAllStrings: "Tampilkan seluruh string",
    translationShowUsedStringsOnly: "Hanya String yang Digunakan",
    translationShowAllPages: "Tampilkan seluruh halaman",
    translationNoStrings: "Tidak ada string diterjemahkan. Silahkan ganti penyaring.",
    translationExportToSCVButton: "Eksport ke CSV",
    translationImportFromSCVButton: "Import dari CSV",
    translateUsigAI: "Terjemahkan otomatis Semua",
    translateUsigAIFrom: "Terjemahkan dari: ",
    translationDialogTitle: "String yang tidak diterjemahkan",
    translationMergeLocaleWithDefault: "Gabungkan {0} dengan default locale",
    translationPlaceHolder: "Terjemahan...",
    translationSource: "Sumber: ",
    translationTarget: "Target: ",
    translationYouTubeNotSupported: "Tautan YouTube tidak didukung.",
    themeExportButton: "Ekspor",
    themeImportButton: "Mengimpor",
    surveyJsonExportButton: "Ekspor",
    surveyJsonImportButton: "Mengimpor",
    surveyJsonCopyButton: "Salin ke papan klip",
    themeResetButton: "Setel ulang pengaturan tema ke default",
    themeResetConfirmation: "Apakah Anda benar-benar ingin mengatur ulang tema? Semua penyesuaian Anda akan hilang.",
    themeResetConfirmationOk: "Ya, atur ulang tema",
    bold: "Tebal",
    italic: "Miring",
    underline: "Garis Bawah",
    addNewQuestion: "Tambah pertanyaan",
    selectPage: "Pilih halaman...",
    carryForwardChoicesCopied: "Pilihan disalin dari",
    choicesLoadedFromWebText: "Pilihan dimuat dari layanan web.",
    choicesLoadedFromWebLinkText: "Buka pengaturan",
    choicesLoadedFromWebPreviewTitle: "Pratinjau opsi pilihan yang dimuat",
    htmlPlaceHolder: "Konten HTML akan ada di sini.",
    panelPlaceHolder: "Jatuhkan pertanyaan dari kotak alat di sini.",
    surveyPlaceHolder: "Survei kosong. Seret elemen dari kotak alat atau klik tombol di bawah.",
    pagePlaceHolder: "Halaman kosong. Seret elemen dari kotak alat atau klik tombol di bawah.",
    imagePlaceHolder: "Seret dan lepas gambar di sini atau klik tombol di bawah ini dan pilih gambar untuk diunggah",
    surveyPlaceHolderMobile: "Klik tombol \"Tambahkan Pertanyaan\" di bawah ini untuk mulai membuat formulir Anda.",
    surveyPlaceholderTitle: "Formulir Anda kosong",
    surveyPlaceholderTitleMobile: "Formulir Anda kosong",
    surveyPlaceholderDescription: "Seret elemen dari kotak alat atau klik tombol di bawah ini.",
    surveyPlaceholderDescriptionMobile: "Seret elemen dari kotak alat atau klik tombol di bawah ini.",
    previewPlaceholderTitle: "Tidak ada pratinjau",
    previewPlaceholderTitleMobile: "Tidak ada pratinjau",
    previewPlaceholderDescription: "Survei tidak berisi elemen yang terlihat.",
    previewPlaceholderDescriptionMobile: "Survei tidak berisi elemen yang terlihat.",
    translationsPlaceholderTitle: "Tidak ada ikatan untuk diterjemahkan",
    translationsPlaceholderTitleMobile: "Tidak ada ikatan untuk diterjemahkan",
    translationsPlaceholderDescription: "Tambahkan elemen ke formulir Anda atau ubah filter string di toolbar.",
    translationsPlaceholderDescriptionMobile: "Tambahkan elemen ke formulir Anda atau ubah filter string di toolbar.",
    pagePlaceHolderMobile: "Klik tombol \"Tambahkan Pertanyaan\" di bawah ini untuk menambahkan elemen baru ke halaman.",
    panelPlaceHolderMobile: "Klik tombol \"Tambahkan Pertanyaan\" di bawah ini untuk menambahkan elemen baru ke panel.",
    imagePlaceHolderMobile: "Klik tombol di bawah ini dan pilih gambar untuk diunggah",
    imageChooseImage: "Pilih Gambar",
    addNewTypeQuestion: "Tambahkan {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Benda ",
    selectFile: "Pilih file",
    removeFile: "Menghapus file",
    lg: {
      addNewItem: "Tambahkan Aturan Baru",
      empty_tab: "Buat aturan untuk menyesuaikan alur survei.",
      logicPlaceholderTitle: "Tidak ada aturan logis",
      logicPlaceholderTitleMobile: "Tidak ada aturan logis",
      logicPlaceholderDescription: "Buat aturan untuk menyesuaikan alur survei.",
      logicPlaceholderDescriptionMobile: "Buat aturan untuk menyesuaikan alur survei.",
      page_visibilityName: "Tampilkan (sembunyikan) halaman",
      page_enableName: "Aktifkan (nonaktifkan) halaman",
      page_requireName: "Buat halaman diperlukan",
      panel_visibilityName: "Tampilkan (sembunyikan) panel",
      panel_enableName: "Aktifkan (nonaktifkan) panel",
      panel_requireName: "Buat halaman diperlukan",
      question_visibilityName: "Tampilkan (sembunyikan) pertanyaan",
      question_enableName: "Aktifkan (nonaktifkan) pertanyaan",
      question_requireName: "Buat pertanyaan diperlukan",
      question_resetValueName: "Mereset nilai pertanyaan",
      question_setValueName: "Tetapkan nilai pertanyaan",
      column_visibilityName: "Perlihatkan (sembunyikan) kolom",
      column_enableName: "Mengaktifkan (menonaktifkan) kolom",
      column_requireName: "Buat kolom diperlukan",
      column_resetValueName: "Mereset nilai kolom",
      column_setValueName: "Mengatur nilai kolom",
      trigger_completeName: "Survei lengkap",
      trigger_setvalueName: "Tetapkan jawaban",
      trigger_copyvalueName: "Salin jawaban",
      trigger_skipName: "Lanjut ke pertanyaan",
      trigger_runExpressionName: "Menjalankan ekspresi",
      completedHtmlOnConditionName: "Mengatur markup halaman \"Survei Selesai\"",
      page_visibilityDescription: "Membuat halaman terlihat saat ekspresi logika mengembalikan true. Jika tidak, jaga agar tidak terlihat.",
      panel_visibilityDescription: "Buat panel terlihat saat ekspresi logika mengembalikan true. Jika tidak, jaga agar tidak terlihat.",
      panel_enableDescription: "Buat panel, dan semua elemen di dalamnya, aktifkan saat ekspresi logika mengembalikan true. Jika tidak, biarkan mereka dinonaktifkan.",
      question_visibilityDescription: "Buat pertanyaan terlihat saat ekspresi logika mengembalikan true. Jika tidak, jaga agar tidak terlihat.",
      question_enableDescription: "Aktifkan pertanyaan saat ekspresi logika mengembalikan true. Jika tidak, tetap nonaktifkan.",
      question_requireDescription: "Pertanyaan menjadi diperlukan saat ekspresi logika mengembalikan true.",
      trigger_completeDescription: "Ketika ekspresi logika mengembalikan true maka survei menjadi selesai dan pengguna akhir melihat 'Halaman terima kasih'.",
      trigger_setvalueDescription: "Ketika nilai pertanyaan, yang digunakan dalam ekspresi logika, diubah dan ekspresi logika mengembalikan true, maka nilai diatur ke pertanyaan yang dipilih.",
      trigger_copyvalueDescription: "Ketika nilai pertanyaan, yang digunakan dalam ekspresi logika, diubah dan ekspresi logika mengembalikan true, maka nilai satu pertanyaan yang dipilih disalin ke pertanyaan lain yang dipilih.",
      trigger_skipDescription: "Ketika ekspresi logika mengembalikan true maka survei melompat ke / memfokuskan pertanyaan yang dipilih.",
      trigger_runExpressionDescription: "Ketika ekspresi logika mengembalikan true, maka ekspresi kustom dilakukan. Anda dapat secara opsional mengatur hasil ekspresi ini ke dalam pertanyaan yang dipilih",
      completedHtmlOnConditionDescription: "Jika ekspresi logika mengembalikan true, maka teks default untuk 'Halaman terima kasih' diubah ke yang diberikan.",
      itemExpressionText: "Ketika ekspresi: '{0}' mengembalikan true", //{0} - the expression
      itemEmptyExpressionText: "Aturan baru",
      page_visibilityText: "Membuat halaman {0} terlihat", //{0} page name
      panel_visibilityText: "Membuat panel {0} terlihat", //{0} panel name
      panel_enableText: "Membuat panel {0} mengaktifkan", //{0} panel name
      question_visibilityText: "Buat pertanyaan {0} terlihat", //{0} question name
      question_enableText: "Buat pertanyaan {0} aktifkan", //{0} question name
      question_requireText: "Buat pertanyaan {0} diperlukan", //{0} question name
      question_resetValueText: "reset nilai untuk pertanyaan: {0}", //{0} question name.
      question_setValueText: "Tetapkan nilai: {1} pertanyaan: {0}",
      column_visibilityText: "Membuat kolom {0} pertanyaan {1} terlihat", //{0} column name, {1} question name
      column_enableText: "Buat kolom {0} pertanyaan {1} aktifkan", //{0} column name, {1} question name
      column_requireText: "membuat kolom {0} pertanyaan {1} diperlukan", //{0} column name, {1} question name
      column_resetValueText: "Setel ulang nilai sel untuk kolom: {0}", //{0} column name
      column_setValueText: "Menetapkan nilai sel: {1} ke kolom: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Ekspresi yang hasilnya akan ditetapkan ke pertanyaan target.",
      trigger_completeText: "Survei menjadi selesai",
      trigger_setvalueText: "Pertanyaan: {0} nilai {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Nilai Pertanyaan yang Jelas: {0}", //{0} question name
      trigger_copyvalueText: "Salin ke pertanyaan: {0} nilai dari pertanyaan {1}", //{0} and {1} question names
      trigger_skipText: "Survei Lewati ke pertanyaan {0}", //{0} question name
      trigger_runExpressionText1: "menjalankan ekspresi: '{0}'", //{0} the expression
      trigger_runExpressionText2: " dan mempertanyakan hasilnya: {0}", //{0} question name
      completedHtmlOnConditionText: "tampilkan teks kustom untuk \"Halaman terima kasih\".",
      showAllQuestions: "Semua Pertanyaan",
      showAllActionTypes: "Semua Jenis Tindakan",
      conditions: "Ketentuan",
      actions: "Tindakan",
      expressionEditorTitle: "Tentukan kondisi",
      actionsEditorTitle: "Menentukan tindakan",
      deleteAction: "Hapus Tindakan",
      addNewAction: "Tambahkan Tindakan",
      selectedActionCaption: "Pilih tindakan...",
      expressionInvalid: "Ekspresi logika kosong atau tidak valid. Mohon koreksinya.",
      noActionError: "Tolong, tambahkan setidaknya satu tindakan.",
      actionInvalid: "Tolong, perbaiki masalah dalam tindakan Anda.",
      uncompletedRule_title: "Aturan logis tidak lengkap",
      uncompletedRule_text: "Anda belum menyelesaikan beberapa aturan logis. Jika Anda meninggalkan tab sekarang, perubahan akan hilang. Apakah Anda masih ingin meninggalkan tab tanpa menyelesaikan perubahan?",
      uncompletedRule_apply: "Ya",
      uncompletedRule_cancel: "Tidak, saya ingin menyelesaikan aturan"
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Nama panel",
      title: "Judul panel",
      description: "Deskripsi panel",
      visibleIf: "Buat panel terlihat jika",
      requiredIf: "Buat panel diperlukan jika",
      questionOrder: "Urutan pertanyaan dalam panel",
      page: "Halaman induk",
      startWithNewLine: "Menampilkan panel pada baris baru",
      state: "Status keruntuhan panel",
      width: "Lebar panel sejajar",
      minWidth: "Lebar panel minimum",
      maxWidth: "Lebar panel maksimum",
      showNumber: "Nomor panel ini"
    },
    panellayoutcolumn: {
      effectiveWidth: "Lebar efektif, %",
      questionTitleWidth: "Lebar judul pertanyaan, px"
    },
    paneldynamic: {
      name: "Nama panel",
      title: "Judul panel",
      description: "Deskripsi panel",
      visibleIf: "Buat panel terlihat jika",
      requiredIf: "Buat panel diperlukan jika",
      page: "Memindahkan panel ke halaman",
      startWithNewLine: "Menampilkan panel pada baris baru",
      state: "Status keruntuhan panel",
      width: "Lebar panel sejajar",
      minWidth: "Lebar panel minimum",
      maxWidth: "Lebar panel maksimum",
      confirmDelete: "Konfirmasi penghapusan panel",
      templateDescription: "Pola deskripsi panel",
      templateTitle: "Pola judul panel",
      noEntriesText: "Teks panel kosong",
      templateTabTitle: "Pola judul tab",
      tabTitlePlaceholder: "Tempat penampung judul tab",
      templateVisibleIf: "Membuat panel individual terlihat jika",
      showNumber: "Nomor panel",
      titleLocation: "Perataan judul panel",
      descriptionLocation: "Perataan deskripsi panel",
      templateQuestionTitleLocation: "Perataan judul pertanyaan",
      templateQuestionTitleWidth: "Lebar judul pertanyaan",
      templateErrorLocation: "Perataan pesan kesalahan",
      newPanelPosition: "Lokasi panel baru",
      showRangeInProgress: "Menampilkan bilah kemajuan",
      keyName: "Cegah respons duplikat dalam pertanyaan berikut"
    },
    question: {
      name: "Nama pertanyaan",
      title: "Judul pertanyaan",
      description: "Deskripsi pertanyaan",
      visibleIf: "Buat pertanyaan terlihat jika",
      requiredIf: "Buat pertanyaan diperlukan jika",
      page: "Halaman induk",
      state: "Status ciutkan kotak pertanyaan",
      showNumber: "Nomor pertanyaan ini",
      titleLocation: "Perataan judul pertanyaan",
      descriptionLocation: "Perataan deskripsi pertanyaan",
      errorLocation: "Perataan pesan kesalahan",
      indent: "Tingkatkan indentasi batin",
      width: "Lebar pertanyaan sebaris",
      minWidth: "Lebar pertanyaan minimum",
      maxWidth: "Lebar pertanyaan maksimum",
      textUpdateMode: "Perbarui nilai bidang input"
    },
    signaturepad: {
      signatureWidth: "Lebar area tanda tangan",
      signatureHeight: "Tinggi area tanda tangan",
      signatureAutoScaleEnabled: "Menskalakan area tanda tangan secara otomatis",
      showPlaceholder: "Memperlihatkan tempat penampung",
      placeholder: "Teks tempat penampung",
      placeholderReadOnly: "Teks tempat penampung dalam mode baca-saja atau pratinjau",
      allowClear: "Perlihatkan tombol Hapus di dalam area tanda tangan",
      penMinWidth: "Lebar pena minimum",
      penMaxWidth: "Lebar pena maksimum",
      penColor: "Warna goresan"
    },
    comment: {
      rows: "Tinggi bidang input (dalam baris)"
    },
    showQuestionNumbers: "Tampilkan nomor pertanyaan",
    questionStartIndex: "Indeks mulai pertanyaan (1, 2 atau 'A', 'a')",
    expression: {
      name: "Nama ekspresi",
      title: "Judul ekspresi",
      description: "Deskripsi ekspresi",
      expression: "Ekspresi"
    },
    trigger: {
      expression: "Ekspresi"
    },
    calculatedvalue: {
      expression: "Ekspresi"
    },
    // survey templates
    survey: {
      title: "Titel",
      description: "Deskripsi survei",
      readOnly: "Membuat survei hanya baca"
    },
    page: {
      name: "Nama halaman",
      title: "Titel",
      description: "Deskripsi halaman",
      visibleIf: "Membuat halaman terlihat jika",
      requiredIf: "Buat halaman diperlukan jika",
      timeLimit: "Batas waktu untuk menyelesaikan halaman (dalam detik)",
      questionOrder: "Urutan pertanyaan di halaman"
    },
    matrixdropdowncolumn: {
      name: "Nama kolom",
      title: "Judul kolom",
      isUnique: "Mencegah respons duplikat",
      width: "Lebar kolom",
      minWidth: "Lebar kolom minimum",
      rows: "Tinggi bidang input (dalam baris)",
      visibleIf: "Membuat kolom terlihat jika",
      requiredIf: "Buat kolom diperlukan jika",
      showInMultipleColumns: "Setiap opsi dalam kolom terpisah"
    },
    multipletextitem: {
      name: "Nama",
      title: "Titel"
    },
    masksettings: {
      saveMaskedValue: "Simpan nilai terselubung dalam hasil survei"
    },
    patternmask: {
      pattern: "Pola nilai"
    },
    datetimemask: {
      min: "Nilai minimum",
      max: "Nilai maksimum"
    },
    numericmask: {
      allowNegativeValues: "Izinkan nilai negatif",
      thousandsSeparator: "Pemisah ribuan",
      decimalSeparator: "Pemisah desimal",
      precision: "Presisi nilai",
      min: "Nilai minimum",
      max: "Nilai maksimum"
    },
    currencymask: {
      prefix: "Awalan mata uang",
      suffix: "Akhiran mata uang"
    },
    imageHeight: "Tinggi gambar",
    imageWidth: "Lebar gambar",
    valueName: "Nama nilai",
    defaultDisplayValue: "Nilai tampilan default untuk teks dinamis",
    rateDescriptionLocation: "Perataan label",
    size: "Lebar bidang input (dalam karakter)",
    cellErrorLocation: "Perataan pesan kesalahan sel",
    enabled: "Diaktifkan",
    disabled: "Cacat",
    inherit: "Mewarisi",
    apply: "Terapkan",
    ok: "OK",
    save: "Simpan",
    clear: "Jelas",
    saveTooltip: "Simpan",
    cancel: "Batal",
    set: "Mengeset",
    reset: "Reset",
    change: "Ubah",
    refresh: "Refresh",
    close: "Tutup",
    delete: "Hapus",
    add: "Tambah",
    addNew: "Tambahkan Baru",
    addItem: "Klik untuk menambahkan sebuah item...",
    removeItem: "Klik untuk menghapus item...",
    dragItem: "Seret item",
    addOther: "Lain",
    addSelectAll: "Pilih Semua",
    addNone: "Tidak",
    removeAll: "Hapus Semua",
    edit: "Ubah",
    back: "Pengembalian tanpa menabung",
    backTooltip: "Pengembalian tanpa menabung",
    saveAndBack: "Simpan dan kembalikan",
    saveAndBackTooltip: "Simpan dan kembalikan",
    doneEditing: "Selesai",
    editChoices: "Ubah Pilihan",
    showChoices: "Tampilkan Pilihan",
    move: "Pindah",
    empty: "<kosong>",
    emptyValue: "Nilai kosong",
    fastEntry: "Entri Cepat",
    fastEntryNonUniqueError: "Nilai '{0}' tidak unik",
    fastEntryChoicesCountError: "Harap batasi jumlah item dari {0} ke {1}",
    fastEntryChoicesMinCountError: "Harap masukkan setidaknya {0} item",
    fastEntryPlaceholder: "Anda dapat mengatur data dalam format berikut:\nvalue1|text\nnilai2",
    formEntry: "Entri Form",
    testService: "Coba layanan",
    itemSelectorEmpty: "Silakan pilih elemen",
    conditionActionEmpty: "Silakan pilih tindakan",
    conditionSelectQuestion: "Pilih pertanyaan...",
    conditionSelectPage: "Pilih halaman...",
    conditionSelectPanel: "Pilih panel...",
    conditionValueQuestionTitle: "Silahkan masukkan/pilih nilai",
    aceEditorHelp: "Tekan ctrl+spasi untuk mendapatkan petunjuk penyelesaian ekspresi",
    aceEditorRowTitle: "Baris saat ini",
    aceEditorPanelTitle: "Panel saat ini",
    showMore: "Untuk detil selanjutnya silahkan periksa dokumentasi",
    assistantTitle: "Pertanyaan tersedia:",
    cellsEmptyRowsColumns: "Harus ada setidaknya satu kolom atau baris",
    showPreviewBeforeComplete: "Melihat pratinjau jawaban sebelum mengirimkan survei",
    overridingPropertyPrefix: "Ditetapkan oleh ",
    resetToDefaultCaption: "Reset",
    propertyIsEmpty: "Silahkan masukkan nilai",
    propertyIsNoUnique: "Silakan masukkan nilai unik",
    propertyNameIsNotUnique: "Silakan masukkan nama yang unik",
    propertyNameIsIncorrect: "Jangan gunakan kata-kata khusus: \"item\", \"pilihan\", \"panel\", \"baris\".",
    listIsEmpty: "Belum ada item yang ditambahkan",
    "listIsEmpty@choices": "Belum ada pilihan yang ditambahkan",
    "listIsEmpty@columns": "Anda belum memiliki kolom apa pun",
    "listIsEmpty@gridLayoutColumns": "Anda belum memiliki kolom tata letak",
    "listIsEmpty@rows": "Anda belum memiliki baris",
    "listIsEmpty@validators": "Anda belum memiliki aturan validasi apa pun",
    "listIsEmpty@calculatedValues": "Anda belum memiliki variabel khusus",
    "listIsEmpty@triggers": "Anda belum memiliki pemicu apa pun",
    "listIsEmpty@navigateToUrlOnCondition": "Anda belum memiliki tautan apa pun",
    "listIsEmpty@pages": "Anda belum memiliki halaman apa pun",
    "addNew@choices": "Menambahkan pilihan",
    "addNew@columns": "Tambahkan kolom baru",
    "addNew@rows": "Menambahkan baris baru",
    "addNew@validators": "Tambahkan aturan baru",
    "addNew@calculatedValues": "Tambahkan variabel baru",
    "addNew@triggers": "Tambahkan pemicu baru",
    "addNew@navigateToUrlOnCondition": "Tambahkan URL baru",
    "addNew@pages": "Tambahkan halaman baru",
    expressionIsEmpty: "Ekspresi kosong",
    value: "Nilai",
    text: "Teks",
    rowid: "ID baris",
    imageLink: "Link Gambar",
    columnEdit: "Ubah kolom: {0}",
    itemEdit: "Ubah item: {0}",
    url: "URL",
    path: "Path",
    choicesbyurl: {
      url: "URL layanan web",
      valueName: "Dapatkan nilai dari bidang JSON berikut"
    },
    titleName: "Nama judul",
    imageLinkName: "Dapatkan URL gambar dari bidang JSON berikut",
    allowEmptyResponse: "Izinkan respons kosong",
    titlePlaceholder: "Titel",
    surveyTitlePlaceholder: "Judul Survei",
    pageTitlePlaceholder: "Halaman {num}",
    startPageTitlePlaceholder: "Halaman Awal",
    descriptionPlaceholder: "Deskripsi",
    surveyDescriptionPlaceholder: "Deskripsi",
    pageDescriptionPlaceholder: "Deskripsi",
    textWrapEnabled: "Pilihan bungkus",
    showOtherItem: "Memiliki item lain",
    otherText: "Teks item lain",
    showNoneItem: "Perbolehkan opsi Tidak Ada",
    showRefuseItem: "Perbolehkan opsi Tolak Jawab",
    showDontKnowItem: "Perbolehkan opsi Tidak Tahu",
    noneText: "Tidak ada teks opsi",
    showSelectAllItem: "Perbolehkan opsi Pilih Semua",
    selectAllText: "Pilih Semua teks opsi",
    choicesMin: "Nilai minimum untuk item yang dibuat secara otomatis",
    choicesMax: "Nilai maksimum untuk item yang dibuat secara otomatis",
    choicesStep: "Langkah untuk item yang dibuat secara otomatis",
    name: "Nama",
    title: "Judul",
    cellType: "Jenis sel",
    colCount: "Jumlah kolom",
    choicesOrder: "Tentukan urutan pilihan",
    allowCustomChoices: "Izinkan pilihan khusus",
    visible: "Terlihat?",
    isRequired: "Wajib?",
    markRequired: "Tandai sesuai kebutuhan",
    removeRequiredMark: "Hapus tanda yang diperlukan",
    eachRowRequired: "Memerlukan jawaban untuk semua baris",
    eachRowUnique: "Mencegah respons duplikat dalam baris",
    requiredErrorText: "Pesan kesalahan \"Wajib\"",
    startWithNewLine: "Mulai dengan baris baru?",
    rows: "Jumlah baris",
    cols: "Kolom",
    placeholder: "Masukkan placeholder",
    showPreview: "Tunjukkan tinjauan gambar?",
    storeDataAsText: "Simpan konten berkas dalam hasil JSON sebagai teks",
    maxSize: "Ukuran maksimum berkas dalam byte",
    rowCount: "Jumlah baris",
    columnLayout: "Tata letak kolom",
    addRowButtonLocation: "Tambah lokasi tombol baris",
    transposeData: "Mengubah urutan baris menjadi kolom",
    addRowText: "Teks tambah tombol baris",
    removeRowText: "Teks hapus tombol baris",
    rateMin: "Nilai tarif minimum",
    rateMax: "Nilai tarif maksimum",
    rateStep: "Langkah tingkat",
    minRateDescription: "Deskripsi nilai minimum",
    maxRateDescription: "Deskripsi nilai maksimum",
    inputType: "Jenis masukan",
    optionsCaption: "Keterangan pilihan",
    defaultValue: "Nilai standar",
    cellsDefaultRow: "Teks sel standar",
    surveyEditorTitle: "Ubah pengaturan survei",
    qEditorTitle: "Ubah: {0}",
    maxLength: "Panjang maksimum",
    buildExpression: "Membangun",
    editExpression: "Mengedit",
    and: "dan",
    or: "atau",
    remove: "Buka",
    addCondition: "Tambahkan Kondisi",
    emptyLogicPopupMessage: "Pilih pertanyaan untuk mulai mengonfigurasi kondisi.",
    if: "Kalau",
    then: "kemudian",
    setToName: "Pertanyaan target",
    fromName: "Pertanyaan untuk disalin jawabannya",
    gotoName: "Pertanyaan untuk dilewati",
    ruleIsNotSet: "Aturan salah",
    includeIntoResult: "Sertakan ke dalam hasil survei",
    showTitle: "Tampilkan/sembunyikan judul",
    expandCollapseTitle: "Perluas/ciutkan judul",
    locale: "Bahasa standar",
    simulator: "Pilih jenis perangkat",
    landscapeOrientation: "Beralih ke orientasi lanskap",
    portraitOrientation: "Beralih ke orientasi potret",
    clearInvisibleValues: "Bersihkan nilai tak terlihat",
    cookieName: "Nama cookie (untuk menonaktifkan menjalankan survei dua kali secara lokal)",
    partialSendEnabled: "Kirim hasil survei pada halaman selanjutnya",
    storeOthersAsComment: "Simpan nilai 'lainnya' pada bidang lainnya",
    showPageTitles: "Tampilkan judul halaman",
    showPageNumbers: "Tampilkan nomor halaman",
    pagePrevText: "Teks halaman tombol sebelumnya",
    pageNextText: "Teks halaman tombol selanjutnya",
    completeText: "Teks tombol selesai",
    previewText: "Teks tombol Pratinjau Jawaban",
    editText: "Teks tombol Edit Jawaban",
    startSurveyText: "Teks tombol mulai",
    showNavigationButtons: "Tampilkan tombol navigasi (navigasi standar)",
    navigationButtonsLocation: "Perataan tombol navigasi",
    showPrevButton: "Tampilkan tombol sebelumnya (pengguna mungkin kembali ke halaman sebelumnya)",
    firstPageIsStartPage: "Halaman pertama pada survei adalah halaman yang telah dimulai.",
    showCompletePage: "Tampilkan keseluruhan halaman di akhir (completedHtml)",
    autoAdvanceEnabled: "Setelah menjawa seluruh pertanyaan, pergi ke halaman berikutnya secara otomatis",
    autoAdvanceAllowComplete: "Selesaikan survei secara otomatis",
    showProgressBar: "Tampilkan progress bar",
    progressBarLocation: "Perataan bilah kemajuan",
    questionTitleLocation: "Lokasi judul pertanyaan",
    questionTitleWidth: "Lebar judul pertanyaan",
    requiredMark: "Simbil pertanyaan wajib",
    questionTitleTemplate: "Template Judul Pertanyaan, default adalah: '{no}. {require} {title}'",
    questionErrorLocation: "Lokasi Pertanyaan Error",
    autoFocusFirstQuestion: "Fokus ke pertanyaan pertama saat pergantian halaman",
    questionOrder: "Urutakan elemen pada halaan",
    timeLimit: "Waktu maksimum untuk menyelesaikan survei",
    timeLimitPerPage: "Waktu maksimum untuk menyelesaikan suatu halaman",
    showTimer: "Gunakan pengatur waktu",
    timerLocation: "Tampilkan panel pengatur waktu",
    timerInfoMode: "Tampilkan mode panel pengatur waktu",
    renderMode: "Mode render",
    allowAddPanel: "Bolehkan penambahan panel",
    allowRemovePanel: "Bolehkan penghapusan panel",
    addPanelText: "Teks tambah panel",
    removePanelText: "Teks hapus panel",
    isSinglePage: "Tampilkan seluruh elemen pada halaman",
    html: "Html",
    setValue: "Menjawab",
    dataFormat: "Format gambar",
    allowAddRows: "Perbolehkan menambahkan baris",
    allowRemoveRows: "Perbolehkan menghapus baris",
    allowRowReorder: "Perbolehkan baris seret dan lepas",
    responsiveImageSizeHelp: "Tidak berlaku jika Anda menentukan lebar atau tinggi gambar yang tepat.",
    minImageWidth: "Lebar gambar minimum",
    maxImageWidth: "Lebar gambar maksimum",
    minImageHeight: "Tinggi gambar minimum",
    maxImageHeight: "Tinggi gambar maksimum",
    minValue: "Nilai minimum",
    maxValue: "Nilai maksimum",
    caseInsensitive: "Tidak peka huruf besar/kecil",
    minLength: "Panjang minimum",
    allowDigits: "Bolehkan angka",
    minCount: "Hitungan minimum",
    maxCount: "Hitungan maksimum",
    regex: "Ekspresi reguler",
    surveyvalidator: {
      text: "Pesan kesalahan",
      expression: "Ekspresi validasi"
    },
    totalText: "Total teks",
    totalType: "Total jenis",
    totalExpression: "Total ekspresi",
    totalDisplayStyle: "Total gaya tampilan",
    totalCurrency: "Total mata uang",
    totalFormat: "Total format",
    logo: "Logo (URL atau string yang dikodekan base64)",
    questionsOnPageMode: "Struktur survei",
    maxTextLength: "Panjang jawaban maksimum (dalam karakter)",
    maxCommentLength: "Panjang komentar maksimum (dalam karakter)",
    commentAreaRows: "Tinggi area komentar (dalam baris)",
    autoGrowComment: "Perluas area komentar secara otomatis jika perlu",
    allowResizeComment: "Mengizinkan pengguna mengubah ukuran area teks",
    textUpdateMode: "Memperbarui nilai pertanyaan teks",
    maskType: "Jenis masker input",
    autoFocusFirstError: "Mengatur fokus pada jawaban pertama yang tidak valid",
    checkErrorsMode: "Jalankan validasi",
    validateVisitedEmptyFields: "Memvalidasi bidang kosong saat fokus hilang",
    navigateToUrl: "Arahkan ke URL",
    navigateToUrlOnCondition: "URL dinamis",
    completedBeforeHtml: "Markup untuk menunjukkan apakah pengguna sudah mengisi survei ini",
    completedHtml: "Markup halaman Survei Selesai",
    completedHtmlOnCondition: "Survei Dinamis Markup halaman lengkap",
    loadingHtml: "Markup untuk ditampilkan saat model survei dimuat",
    commentText: "Teks area komentar",
    autocomplete: "Tipe pelengkapan otomatis",
    labelTrue: "Label \"Benar\"",
    labelFalse: "Label \"Salah\"",
    allowClear: "Tampilkan tombol Hapus",
    searchMode: "Mode Pencarian",
    displayStyle: "Gaya tampilan nilai",
    format: "String yang diformat",
    maximumFractionDigits: "Digit pecahan maksimum",
    minimumFractionDigits: "Digit pecahan minimum",
    useGrouping: "Menampilkan pemisah pengelompokan",
    allowMultiple: "Izinkan beberapa file",
    allowImagesPreview: "Pratinjau gambar",
    acceptedTypes: "Jenis file yang diterima",
    waitForUpload: "Tunggu hingga upload selesai",
    needConfirmRemoveFile: "Konfirmasi penghapusan file",
    detailPanelMode: "Lokasi panel detail",
    minRowCount: "Jumlah baris minimum",
    maxRowCount: "Jumlah baris maksimum",
    confirmDelete: "Mengonfirmasi penghapusan baris",
    confirmDeleteText: "Pesan konfirmasi",
    panelCount: "Jumlah panel awal",
    minPanelCount: "Jumlah panel minimum",
    maxPanelCount: "Jumlah panel maksimum",
    panelsState: "Status perluasan panel dalam",
    prevPanelText: "Tooltip tombol Panel sebelumnya",
    nextPanelText: "Tooltip tombol Panel Berikutnya",
    removePanelButtonLocation: "Hapus lokasi tombol Panel",
    hideIfRowsEmpty: "Menyembunyikan pertanyaan jika tidak ada baris",
    hideColumnsIfEmpty: "Menyembunyikan kolom jika tidak ada baris",
    rateValues: "Nilai tarif kustom",
    rateCount: "Jumlah tarif",
    autoGenerate: "Bagaimana cara menentukan nilai tarif?",
    hideIfChoicesEmpty: "Sembunyikan pertanyaan jika tidak berisi pilihan",
    minWidth: "Lebar minimum (dalam nilai yang diterima CSS)",
    maxWidth: "Lebar maksimum (dalam nilai yang diterima CSS)",
    width: "Lebar (dalam nilai yang diterima CSS)",
    showHeader: "Perlihatkan header kolom",
    horizontalScroll: "Tampilkan scrollbar horizontal",
    columnMinWidth: "Lebar kolom minimum (dalam nilai yang diterima CSS)",
    rowTitleWidth: "Lebar header baris (dalam nilai yang diterima CSS)",
    valueTrue: "Nilai \"Benar\"",
    valueFalse: "Nilai \"False\"",
    minErrorText: "Pesan kesalahan \"Nilai di bawah minimum\"",
    maxErrorText: "Pesan kesalahan \"Nilai melebihi maksimum\"",
    otherErrorText: "Pesan kesalahan \"Komentar kosong\"",
    keyDuplicationError: "Pesan galat \"Nilai kunci tidak unik\"",
    minSelectedChoices: "Pilihan minimum yang dipilih",
    maxSelectedChoices: "Pilihan maksimum yang dipilih",
    logoWidth: "Lebar logo (dalam nilai yang diterima CSS)",
    logoHeight: "Tinggi logo (dalam nilai yang diterima CSS)",
    readOnly: "Baca-saja",
    enableIf: "Dapat diedit jika",
    noRowsText: "Pesan \"Tidak ada baris\"",
    separateSpecialChoices: "Pisahkan pilihan khusus (Tidak Ada, Lainnya, Pilih Semua)",
    choicesFromQuestion: "Salin pilihan dari pertanyaan berikut",
    choicesFromQuestionMode: "Pilihan mana yang harus disalin?",
    choiceValuesFromQuestion: "Gunakan nilai dari matriks, kolom atau pertanyaan panel berikut sebagai ID pilihan",
    choiceTextsFromQuestion: "Gunakan nilai dari kolom matriks atau pertanyaan panel berikut sebagai teks pilihan",
    progressBarShowPageTitles: "Menampilkan judul halaman di bilah kemajuan",
    progressBarShowPageNumbers: "Menampilkan nomor halaman di bilah kemajuan",
    showCommentArea: "Tampilkan area komentar",
    commentPlaceholder: "Tempat penampung area komentar",
    displayRateDescriptionsAsExtremeItems: "Menampilkan deskripsi tingkat sebagai nilai ekstrem",
    rowOrder: "Urutan baris",
    columnsLayout: "Tata letak kolom",
    columnColCount: "Jumlah kolom bertumpuk",
    correctAnswer: "Jawaban yang Benar",
    defaultPanelValue: "Nilai Default",
    cells: "Teks Sel",
    fileInputPlaceholder: "Pilih file atau tempel tautan file...",
    keyName: "Kolom kunci",
    itemvalue: {
      visibleIf: "Buat opsi terlihat jika",
      enableIf: "Buat opsi dapat dipilih jika"
    },
    "itemvalue@rows": {
      visibleIf: "Membuat baris terlihat jika",
      enableIf: "Membuat baris dapat diedit jika"
    },
    imageitemvalue: {
      text: "Teks alternatif"
    },
    logoPosition: "Posisi logo",
    addLogo: "Tambahkan logo...",
    changeLogo: "Ubah logo...",
    logoPositions: {
      none: "Hapus logo",
      left: "Kiri",
      right: "Kanan",
      top: "Di atas",
      bottom: "Di bagian bawah"
    },
    previewMode: "Mode pratinjau",
    gridLayoutEnabled: "Mengaktifkan tata letak kisi",
    gridLayoutColumns: "Kolom tata letak kisi",
    maskSettings: "Pengaturan topeng",
    detailErrorLocation: "Perataan pesan kesalahan perluasan baris",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Tata Letak Panel"
      },
      general: "Umum",
      fileOptions: "Pilihan berkas",
      html: "Editor Html",
      columns: "Kolom",
      rows: "Baris",
      choices: "Pilihan",
      items: "Barang",
      visibleIf: "Terlihat Jika",
      enableIf: "Memungkinkan Jika",
      requiredIf: "Wajib Jika",
      rateValues: "Nilai Tingkat",
      choicesByUrl: "Pilih dari Web",
      matrixChoices: "Pilihan Standar",
      multipleTextItems: "Masukan Teks",
      numbering: "Penomoran",
      validators: "Validator",
      navigation: "Navigasi",
      question: "Pertanyaan",
      pages: "Halaman",
      timer: "Pengatur Waktu/Kuis",
      calculatedValues: "Nilai terhitung",
      triggers: "Trigger",
      templateTitle: "Judul templat",
      totals: "Total",
      logic: "Logika",
      mask: "Pengaturan Masker Input",
      layout: {
        panel: "Tata letak",
        question: "Tata letak",
        base: "Tata letak"
      },
      data: "Data",
      validation: "Validasi",
      cells: "Teks Sel",
      showOnCompleted: "Survei Selesai",
      logo: "Logo dalam Judul Survei",
      slider: "Slider",
      expression: "Ekspresi",
      questionSettings: "Pengaturan Pertanyaan",
      header: "Header",
      background: "Latar",
      appearance: "Rupa",
      accentColors: "Warna aksen",
      surfaceBackground: "Latar Belakang Permukaan",
      scaling: "Scaling",
      others: "Lain"
    },
    editProperty: "Ubah properti '{0}'",
    items: "[ Barang: {0} ]",
    choicesVisibleIf: "Pilihan terlihat jika",
    choicesEnableIf: "Pilihan dapat dipilih jika",
    columnsEnableIf: "Kolom terlihat jika",
    rowsEnableIf: "Baris terlihat jika",
    innerIndent: "Menambahkan inden dalam",
    copyDefaultValueFromLastEntry: "Gunakan jawaban dari entri terakhir sebagai default",
    enterNewValue: "Silahkan masukkan nilai",
    noquestions: "Tidak ada pertanyaan dalam survei.",
    createtrigger: "Silahkan buat sebuah trigger",
    titleKeyboardAdornerTip: "Tekan tombol enter untuk mengedit",
    keyboardAdornerTip: "Tekan tombol enter untuk mengedit item, tekan tombol hapus untuk menghapus item, tekan alt plus panah ke atas atau panah ke bawah untuk memindahkan item",
    triggerOn: "On ",
    triggerMakePagesVisible: "Buat halaman terlihat:",
    triggerMakeQuestionsVisible: "Buat elemen terlihat:",
    triggerCompleteText: "Selesaikan survei jika sukses.",
    triggerNotSet: "Trigger belum diatur",
    triggerRunIf: "Berjalan jika",
    triggerSetToName: "Ubah nilai dari: ",
    triggerFromName: "Salin nilai dari: ",
    triggerRunExpression: "Jalankan ekspresi ini:",
    triggerSetValue: "ke: ",
    triggerGotoName: "Pergi ke pertanyaan",
    triggerIsVariable: "Jangan meletakkan variabel ke hasil survey.",
    triggerRunExpressionEmpty: "Silakan masukkan ekspresi yang valid",
    emptyExpressionPlaceHolder: "Ketik ekspresi di sini...",
    noFile: "Tidak ada file yang dipilih",
    clearIfInvisible: "Hapus nilai jika pertanyaan menjadi tersembunyi",
    valuePropertyName: "Nama properti nilai",
    searchEnabled: "Aktifkan pencarian",
    hideSelectedItems: "Menyembunyikan item yang dipilih",
    closeOnSelect: "Tutup menu turun bawah setelah pemilihan",
    verticalAlign: "Perataan vertikal",
    alternateRows: "Baris alternatif",
    columnsVisibleIf: "Kolom terlihat jika",
    rowsVisibleIf: "Baris terlihat jika",
    otherPlaceholder: "Tempat penampung area komentar",
    filePlaceholder: "Teks tempat penampung file",
    photoPlaceholder: "Teks placeholder foto",
    fileOrPhotoPlaceholder: "Teks placeholder file atau foto",
    rateType: "Jenis tarif",
    url_placeholder: "Mis.: https://api.example.com/books",
    path_placeholder: "Mis.: categories.fiction",
    questionStartIndex_placeholder: "Mis.: a)",
    width_placeholder: "Contoh: 6in",
    minWidth_placeholder: "Contoh: 600px",
    maxWidth_placeholder: "Contoh: 50%",
    imageHeight_placeholder: "Auto",
    imageWidth_placeholder: "Auto",
    itemTitleWidth_placeholder: "Contoh: 100px",
    theme: {
      themeName: "Tema",
      isPanelless: "Penampilan pertanyaan",
      editorPanel: "Latar belakang dan radius sudut",
      questionPanel: "Latar belakang dan radius sudut",
      primaryColor: "Warna aksen",
      panelBackgroundTransparency: "Opasitas latar belakang panel",
      questionBackgroundTransparency: "Opasitas latar belakang pertanyaan",
      fontSize: "Ukuran font",
      scale: "Sisik",
      cornerRadius: "Radius sudut",
      advancedMode: "Mode lanjutan",
      pageTitle: "Font judul",
      pageDescription: "Font deskripsi",
      questionTitle: "Font judul",
      questionDescription: "Font deskripsi",
      editorFont: "Font",
      backgroundOpacity: "Opacity",
      "--sjs-font-family": "Keluarga font",
      "--sjs-general-backcolor-dim": "Warna latar belakang",
      "--sjs-primary-backcolor": "Latar belakang aksen",
      "--sjs-primary-forecolor": "Latar depan aksen",
      "--sjs-special-red": "Pesan kesalahan",
      "--sjs-shadow-small": "Efek bayangan",
      "--sjs-shadow-inner": "Efek bayangan",
      "--sjs-border-default": "Warna"
    },
    "header@header": {
      headerView: "Melihat",
      logoPosition: "Posisi logo",
      surveyTitle: "Font judul survei",
      surveyDescription: "Font deskripsi survei",
      headerTitle: "Font judul survei",
      headerDescription: "Font deskripsi survei",
      inheritWidthFrom: "Lebar area konten",
      textAreaWidth: "Lebar teks",
      backgroundColorSwitch: "Warna latar belakang",
      backgroundImage: "Gambar latar belakang",
      backgroundImageOpacity: "Opacity",
      overlapEnabled: "Tumpang tindih",
      logoPositionX: "Posisi logo",
      titlePositionX: "Posisi judul",
      descriptionPositionX: "Deskripsi posisi"
    }
  },
  // Property values
  pv: {
    "true": "benar",
    "false": "palsu",
    file: "File lokal",
    camera: "Kamera",
    "file-camera": "File atau kamera lokal",
    inherit: "inherit",
    show: "tampilkan",
    hide: "sembunyikan",
    default: "standar",
    initial: "inisial",
    random: "acak",
    collapsed: "dilipat",
    expanded: "direntangkan",
    none: "tidak ada",
    asc: "naik",
    desc: "turun",
    indeterminate: "tidak tentu",
    selected: "Dipilih",
    unselected: "Tidak dipilih",
    decimal: "desimal",
    currency: "mata uang",
    percent: "persen",
    firstExpanded: "perluasanPertama",
    off: "mati",
    list: "daftar",
    carousel: "Korsel",
    tab: "Tab",
    progressTop: "progress atas",
    progressBottom: "progress bawah",
    progressTopBottom: "progress atas bawah",
    horizontal: "horizontal",
    vertical: "vertikal",
    top: "atas",
    bottom: "bawah",
    topBottom: "atas dan bawah",
    both: "Keduanya",
    left: "kiri",
    right: "Kanan",
    center: "Pusat",
    leftRight: "Kiri dan kanan",
    middle: "Tengah",
    color: "warna",
    date: "tanggal",
    datetime: "Waktu tanggal",
    "datetime-local": "datetime-lokal",
    email: "Email",
    month: "bulan",
    number: "angka",
    password: "kata sandi",
    range: "lingkup",
    tel: "Tel",
    text: "Teks",
    time: "Waktu",
    url: "URL",
    week: "minggu",
    hidden: "tersembunyi",
    edit: "ubah",
    display: "tampilan",
    contain: "Mengandung",
    cover: "Menutupi",
    fill: "Isi",
    next: "Depan",
    last: "Terakhir",
    onComplete: "saat selesai",
    onHidden: "saat tersembunyi",
    onHiddenContainer: "Ketika pertanyaan atau panel/halamannya disembunyikan",
    clearInvisibleValues: {
      none: "Tidak pernah"
    },
    clearIfInvisible: {
      none: "Tidak pernah"
    },
    inputType: {
      color: "Warna",
      date: "Tanggal",
      "datetime-local": "Tanggal dan Waktu",
      email: "Email",
      month: "Bulan",
      number: "Angka",
      password: "Kata sandi",
      range: "Lingkup",
      tel: "Nomor Telepon",
      text: "Teks",
      time: "Waktu",
      url: "URL",
      week: "Minggu"
    },
    autocomplete: {
      name: "Nama lengkap",
      "honorific-prefix": "Awalan",
      "given-name": "Nama depan",
      "additional-name": "Nama tengah",
      "family-name": "Nama Belakang",
      "honorific-suffix": "Akhiran",
      nickname: "Nickname",
      "organization-title": "Judul Pekerjaan",
      username: "Nama pengguna",
      "new-password": "Kata sandi baru",
      "current-password": "Kata Sandi Saat Ini",
      organization: "Nama Organisasi",
      "street-address": "Alamat Jalan Lengkap",
      "address-line1": "Baris Alamat 1",
      "address-line2": "Baris Alamat 2",
      "address-line3": "Baris Alamat 3",
      "address-level4": "Alamat Level 4",
      "address-level3": "Alamat Level 3",
      "address-level2": "Alamat Level 2",
      "address-level1": "Alamat Level 1",
      country: "Kode Negara",
      "country-name": "Nama Negara",
      "postal-code": "Kode Pos",
      "cc-name": "Nama Pemegang Kartu",
      "cc-given-name": "Nama Depan Pemegang Kartu",
      "cc-additional-name": "Nama Tengah Pemegang Kartu",
      "cc-family-name": "Nama Belakang Pemegang Kartu",
      "cc-number": "Nomor Kartu Kredit",
      "cc-exp": "Tanggal kedaluwarsa",
      "cc-exp-month": "Bulan Kedaluwarsa",
      "cc-exp-year": "Tahun Kedaluwarsa",
      "cc-csc": "Kode Keamanan Kartu",
      "cc-type": "Jenis Kartu Kredit",
      "transaction-currency": "Mata Uang Transaksi",
      "transaction-amount": "Jumlah Transaksi",
      language: "Bahasa Pilihan",
      bday: "Ulang tahun",
      "bday-day": "Hari Ulang Tahun",
      "bday-month": "Bulan Ulang Tahun",
      "bday-year": "Tahun Ulang Tahun",
      sex: "Jenis kelamin",
      url: "URL situs web",
      photo: "Foto Profil",
      tel: "Nomor Telepon",
      "tel-country-code": "Kode Negara untuk Telepon",
      "tel-national": "Nomor Telepon Nasional",
      "tel-area-code": "Kode Area",
      "tel-local": "Nomor Telepon Lokal",
      "tel-local-prefix": "Awalan Telepon Lokal",
      "tel-local-suffix": "Akhiran Telepon Lokal",
      "tel-extension": "Ekstensi Telepon",
      email: "Alamat Email",
      impp: "Protokol Pesan Instan"
    },
    maskType: {
      none: "Tidak",
      pattern: "Pola",
      numeric: "Numerik",
      datetime: "Tanggal dan Waktu",
      currency: "Mata uang"
    },
    inputTextAlignment: {
      auto: "Auto",
      left: "Kiri",
      right: "Kanan"
    },
    all: "semua",
    page: "halaman",
    survey: "survei",
    onNextPage: "pada halaman selanjutnya",
    onValueChanged: "saat nilai berubah",
    onValueChanging: "Sebelum jawaban diubah",
    questionsOnPageMode: {
      standard: "Struktur asli",
      singlePage: "Tampilkan semua pertanyaan di satu halaman",
      questionPerPage: "Tampilkan pertanyaan tunggal per halaman"
    },
    noPreview: "Tidak ada pratinjau",
    showAllQuestions: "Tampilkan semua pertanyaan",
    showAnsweredQuestions: "Tampilkan pertanyaan yang sudah terjawab saja",
    allQuestions: "Tampilkan semua pertanyaan",
    answeredQuestions: "Tampilkan pertanyaan yang dijawab saja",
    pages: "Halaman lengkap",
    questions: "Pertanyaan yang dijawab",
    requiredQuestions: "Menjawab pertanyaan yang diperlukan",
    correctQuestions: "Jawaban yang valid",
    buttons: "Halaman selesai (tombol UI)",
    underInput: "Di bawah input",
    underTitle: "Di bawah judul",
    onBlur: "Saat buram",
    onTyping: "Saat mengetik",
    underRow: "Di bawah baris",
    underRowSingle: "Di bawah baris, hanya satu panel yang terlihat",
    auto: "Auto",
    showNavigationButtons: {
      none: "Sembunyi"
    },
    timerInfoMode: {
      combined: "Keduanya"
    },
    addRowButtonLocation: {
      default: "Tergantung pada tata letak matriks"
    },
    panelsState: {
      default: "Pengguna tidak dapat memperluas atau menciutkan panel",
      collapsed: "Semua panel diciutkan",
      expanded: "Semua panel diperluas",
      firstExpanded: "Pertama diperluas"
    },
    widthMode: {
      static: "Statis",
      responsive: "Responsif"
    },
    contentMode: {
      image: "Citra",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Tombol",
      dropdown: "Tarik-turun"
    },
    rateColorMode: {
      default: "Default",
      scale: "Sisik"
    },
    scaleColorMode: {
      monochrome: "Monokrom",
      colored: "Berwarna"
    },
    autoGenerate: {
      "true": "Menghasilkan",
      "false": "Masukkan secara manual"
    },
    rateType: {
      labels: "Label",
      stars: "Bintang",
      smileys: "Smiley"
    },
    state: {
      default: "Terkunci"
    },
    showQuestionNumbers: {
      default: "Penomoran otomatis",
      on: "Penomoran otomatis",
      onPage: "Setel ulang di setiap halaman",
      onpanel: "Setel ulang pada setiap panel",
      onPanel: "Setel ulang pada setiap panel",
      recursive: "Penomoran rekursif",
      onSurvey: "Lanjutkan di seluruh survei",
      off: "Tanpa penomoran"
    },
    descriptionLocation: {
      underTitle: "Di bawah judul pertanyaan",
      underInput: "Di bawah bidang input"
    },
    selectToRankAreasLayout: {
      horizontal: "Di samping pilihan",
      vertical: "Pilihan di atas"
    },
    displayStyle: {
      decimal: "Desimal",
      currency: "Mata uang",
      percent: "Persentase",
      date: "Tanggal"
    },
    totalDisplayStyle: {
      decimal: "Desimal",
      currency: "Mata uang",
      percent: "Persentase",
      date: "Tanggal"
    },
    rowOrder: {
      initial: "Asli"
    },
    questionOrder: {
      initial: "Asli"
    },
    progressBarLocation: {
      top: "Puncak",
      bottom: "Dasar",
      topbottom: "Atas dan bawah",
      aboveheader: "Di atas header",
      belowheader: "Di bawah header",
      off: "Sembunyi"
    },
    sum: "Jumlah",
    count: "Hitung",
    min: "Min",
    max: "Maks",
    avg: "Avg",
    searchMode: {
      contains: "Berisi",
      startsWith: "Dimulai dengan"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Menutupi",
      contain: "Mengandung",
      fill: "Merentangkan",
      tile: "Ubin"
    },
    backgroundImageAttachment: {
      fixed: "Tetap",
      scroll: "Gulir"
    },
    headerView: {
      basic: "Dasar",
      advanced: "Maju"
    },
    inheritWidthFrom: {
      survey: "Sama seperti survei",
      container: "Sesuai dengan kontainer"
    },
    backgroundColorSwitch: {
      none: "Tidak",
      accentColor: "Warna aksen",
      custom: "Adat"
    },
    colorPalette: {
      light: "Ringan",
      dark: "Gelap"
    },
    isPanelless: {
      "false": "Default",
      "true": "Tanpa Panel"
    },
    progressBarInheritWidthFrom: {
      survey: "Sama seperti survei",
      container: "Sama seperti wadah"
    }
  },
  // Operators
  op: {
    empty: "kosong",
    notempty: "tidak kosong",
    equal: "sama dengan",
    notequal: "tidak sama dengan",
    contains: "mengandung",
    notcontains: "tidak mengandung",
    anyof: "Salah satu dari",
    allof: "Semua",
    greater: "lebih besar",
    less: "lebih kecil",
    greaterorequal: "lebih besar atau sama dengan",
    lessorequal: "lebih kecil atau sama dengan",
    and: "dan",
    or: "atau"
  },
  // Embed window
  ew: {
    angular: "Gunakan versi Angular",
    jquery: "Gunakan versi JQuery",
    knockout: "Gunakan versi Knockout",
    react: "Gunakan versi React",
    vue: "Gunakan versi Vue",
    bootstrap: "Untuk framework bootstrap",
    modern: "Tema modern",
    default: "Tema default",
    orange: "Tema oranye",
    darkblue: "Tema biru tua",
    darkrose: "Tema Darkrose",
    stone: "Tema batu",
    winter: "Tema musim dingin",
    winterstone: "Tema Winter-Stone",
    showOnPage: "Tampilkan survei pada sebuah halaman",
    showInWindow: "Tampilkan survei pada sebuah jendela",
    loadFromServer: "Muat survei JSON dari server",
    titleScript: "Skrip dan gaya",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Pilih halaman untuk dicoba:",
    showInvisibleElements: "Tampilkan elemen tak terlihat",
    hideInvisibleElements: "Sembunyikan elemen tak terlihat"
  },
  validators: {
    answercountvalidator: "jumlah jawaban",
    emailvalidator: "surel",
    expressionvalidator: "ekspresi",
    numericvalidator: "numerik",
    regexvalidator: "ekspresi reguler",
    textvalidator: "teks"
  },
  triggers: {
    completetrigger: "selesaikan survei",
    setvaluetrigger: "atur nilai",
    copyvaluetrigger: "salin nilai",
    skiptrigger: "Lanjut ke pertanyaan",
    runexpressiontrigger: "jalankan ekspresi",
    visibletrigger: "ubah visibilitas"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Contoh: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Contoh: mm/dd/yyyy"
    },
    currencymask: {
      prefix: "Contoh.: $",
      suffix: "Contoh: USD"
    },
    panelbase: {
      questionTitleWidth: "Contoh: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Contoh: 30%",
      questionTitleWidth: "Contoh: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "ID panel yang tidak terlihat oleh responden.",
      description: "Ketik subtitle panel.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas panel.",
      enableIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk panel.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban.",
      questionTitleLocation: "Berlaku untuk semua pertanyaan dalam panel ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default).",
      questionTitleWidth: "Mengatur lebar yang konsisten untuk judul pertanyaan bila disejajarkan di sebelah kiri kotak pertanyaan. Menerima nilai CSS (px, %, in, pt, dll.).",
      questionErrorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan semua pertanyaan dalam panel. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei.",
      questionOrder: "Menyimpan urutan pertanyaan asli atau mengacaknya. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei.",
      page: "Memposisikan ulang panel ke akhir halaman yang dipilih.",
      innerIndent: "Menambahkan spasi atau margin antara konten panel dan batas kiri kotak panel.",
      startWithNewLine: "Batalkan pilihan untuk menampilkan panel dalam satu baris dengan pertanyaan atau panel sebelumnya. Pengaturan tidak berlaku jika panel adalah elemen pertama dalam formulir Anda.",
      state: "Pilih dari: \"Diperluas\" - panel ditampilkan secara penuh dan dapat diciutkan; \"Collapsed\" - panel hanya menampilkan judul dan deskripsi dan dapat diperluas; \"Terkunci\" - panel ditampilkan secara penuh dan tidak dapat diciutkan.",
      width: "Mengatur lebar panel secara proporsional dengan elemen survei lainnya di baris yang sama. Menerima nilai CSS (px, %, in, pt, dll.).",
      showQuestionNumbers: "Menetapkan nomor untuk pertanyaan yang bersarang dalam panel ini.",
      effectiveColSpan: "Menentukan berapa banyak kolom panel ini dalam tata letak kisi.",
      gridLayoutColumns: "Tabel ini memungkinkan Anda mengonfigurasi setiap kolom kisi dalam panel. Ini secara otomatis mengatur persentase lebar untuk setiap kolom berdasarkan jumlah maksimum elemen dalam satu baris. Untuk menyesuaikan tata letak kisi, sesuaikan nilai ini secara manual dan tentukan lebar judul untuk semua pertanyaan di setiap kolom."
    },
    paneldynamic: {
      name: "ID panel yang tidak terlihat oleh responden.",
      description: "Ketik subtitle panel.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas panel.",
      enableIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk panel.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban.",
      templateQuestionTitleLocation: "Berlaku untuk semua pertanyaan dalam panel ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default).",
      templateQuestionTitleWidth: "Mengatur lebar yang konsisten untuk judul pertanyaan saat disejajarkan ke kiri kotak pertanyaan mereka. Menerima nilai CSS (px, %, in, pt, dll.).",
      templateErrorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default).",
      errorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan semua pertanyaan dalam panel. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei.",
      page: "Memposisikan ulang panel ke akhir halaman yang dipilih.",
      innerIndent: "Menambahkan spasi atau margin antara konten panel dan batas kiri kotak panel.",
      startWithNewLine: "Batalkan pilihan untuk menampilkan panel dalam satu baris dengan pertanyaan atau panel sebelumnya. Pengaturan tidak berlaku jika panel adalah elemen pertama dalam formulir Anda.",
      state: "Pilih dari: \"Diperluas\" - panel ditampilkan secara penuh dan dapat diciutkan; \"Collapsed\" - panel hanya menampilkan judul dan deskripsi dan dapat diperluas; \"Terkunci\" - panel ditampilkan secara penuh dan tidak dapat diciutkan.",
      width: "Mengatur lebar panel secara proporsional dengan elemen survei lainnya di baris yang sama. Menerima nilai CSS (px, %, in, pt, dll.).",
      templateTitle: "Ketik template untuk judul panel dinamis. Gunakan {panelIndex} untuk posisi umum panel dan {visiblePanelIndex} untuk urutannya di antara panel yang terlihat. Masukkan tempat penampung ini ke dalam pola untuk menambahkan penomoran otomatis.",
      templateTabTitle: "Ketik templat untuk judul tab. Gunakan {panelIndex} untuk posisi umum panel dan {visiblePanelIndex} untuk urutannya di antara panel yang terlihat. Masukkan tempat penampung ini ke dalam pola untuk menambahkan penomoran otomatis.",
      tabTitlePlaceholder: "Teks fallback untuk judul tab yang berlaku saat pola judul tab tidak menghasilkan nilai yang berarti.",
      templateVisibleIf: "Pengaturan ini memungkinkan Anda mengontrol visibilitas masing-masing panel dalam panel dinamis. Gunakan placeholder '{panel}' untuk mereferensikan panel saat ini dalam ekspresi Anda.",
      titleLocation: "Setelan ini secara otomatis diwarisi oleh semua pertanyaan dalam panel ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default).",
      descriptionLocation: "Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Di bawah judul panel\" secara default).",
      newPanelPosition: "Menentukan posisi panel yang baru ditambahkan. Secara default, panel baru ditambahkan ke akhir. Pilih \"Next\" untuk memasukkan panel baru setelah yang sekarang.",
      copyDefaultValueFromLastEntry: "Menduplikasi jawaban dari panel terakhir dan menetapkannya ke panel dinamis tambahan berikutnya.",
      keyName: "Rujuk nama pertanyaan untuk mengharuskan pengguna memberikan respons unik untuk pertanyaan ini di setiap panel."
    },
    copyDefaultValueFromLastEntry: "Menduplikasi jawaban dari baris terakhir dan menetapkannya ke baris dinamis berikutnya yang ditambahkan.",
    defaultValueExpression: "Pengaturan ini memungkinkan Anda menetapkan nilai jawaban default berdasarkan ekspresi. Ekspresi dapat mencakup perhitungan dasar - '{q1_id} + {q2_id}', ekspresi Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll. Nilai yang ditentukan oleh ekspresi ini berfungsi sebagai nilai default awal yang dapat ditimpa oleh input manual responden.",
    resetValueIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan kapan input responden diatur ulang ke nilai berdasarkan \"Ekspresi nilai default\" atau \"Atur ekspresi nilai\" atau ke nilai \"Jawaban default\" (jika salah satu diatur).",
    setValueIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan kapan harus menjalankan \"Atur ekspresi nilai\" dan secara dinamis menetapkan nilai yang dihasilkan sebagai respons.",
    setValueExpression: "Tentukan ekspresi yang menentukan nilai yang akan ditetapkan saat kondisi dalam aturan \"Tetapkan nilai jika\" terpenuhi. Ekspresi dapat mencakup perhitungan dasar - '{q1_id} + {q2_id}', ekspresi Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll. Nilai yang ditentukan oleh ekspresi ini dapat ditimpa oleh input manual responden.",
    gridLayoutEnabled: "Pembuat Survei memungkinkan Anda menyesuaikan lebar sebaris elemen formulir secara manual untuk mengontrol tata letak. Jika ini tidak menghasilkan hasil yang diinginkan, Anda dapat mengaktifkan tata letak kisi, yang menyusun elemen bentuk menggunakan sistem berbasis kolom. Untuk mengonfigurasi kolom tata letak, pilih halaman atau panel dan gunakan tabel \"Pengaturan Pertanyaan\" → \"Kolom kisi\". Untuk menyesuaikan berapa banyak kolom rentang pertanyaan, pilih dan atur nilai yang diinginkan di bidang \"Tata Letak\" → \"Rentang kolom\".",
    question: {
      name: "ID pertanyaan yang tidak terlihat oleh responden.",
      description: "Ketik subtitle pertanyaan.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas pertanyaan.",
      enableIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menonaktifkan mode baca-saja untuk pertanyaan.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah survei maju atau dikirim kecuali pertanyaan menerima jawaban.",
      startWithNewLine: "Batalkan pilihan untuk menampilkan pertanyaan dalam satu baris dengan pertanyaan atau panel sebelumnya. Pengaturan tidak berlaku jika pertanyaan adalah elemen pertama dalam formulir Anda.",
      page: "Memposisikan ulang pertanyaan ke akhir halaman yang dipilih.",
      state: "Pilih dari: \"Diperluas\" - kotak pertanyaan ditampilkan secara penuh dan dapat diciutkan; \"Diciutkan\" - kotak pertanyaan hanya menampilkan judul dan deskripsi dan dapat diperluas; \"Terkunci\" - kotak pertanyaan ditampilkan secara penuh dan tidak dapat diciutkan.",
      titleLocation: "Mengganti aturan penyelarasan judul yang ditentukan pada tingkat panel, halaman, atau survei. Opsi \"Warisi\" menerapkan pengaturan tingkat yang lebih tinggi (jika diatur) atau pengaturan tingkat survei (\"Atas\" secara default).",
      descriptionLocation: "Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Di bawah judul pertanyaan\" secara default).",
      errorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Teratas\" secara default).",
      indent: "Menambahkan spasi atau margin antara konten pertanyaan dan batas kiri kotak pertanyaan.",
      width: "Mengatur lebar pertanyaan secara proporsional dengan elemen survei lain di baris yang sama. Menerima nilai CSS (px, %, in, pt, dll.).",
      surveyvalidator: {
        expression: "Gunakan ikon tongkat ajaib untuk menetapkan aturan validasi untuk pertanyaan."
      },
      textUpdateMode: "Pilih dari: \"On lost focus\" - nilai diperbarui ketika bidang input kehilangan fokus; \"Saat mengetik\" - nilainya diperbarui secara real-time, saat pengguna mengetik. Opsi \"Warisi\" menerapkan pengaturan tingkat survei (\"Pada fokus yang hilang\" secara default).",
      url: "Anda dapat menggunakan layanan web apa pun sebagai sumber data untuk pertanyaan pilihan ganda. Untuk mengisi nilai pilihan, masukkan URL layanan yang menyediakan data.",
      searchMode: "Operasi perbandingan yang digunakan untuk memfilter daftar turun bawah.",
      textWrapEnabled: "Teks panjang dalam opsi pilihan akan secara otomatis menghasilkan jeda baris agar sesuai dengan menu tarik-turun. Batalkan pilihan jika Anda ingin teks dipotong.",
      effectiveColSpan: "Menentukan berapa banyak kolom yang mencakup pertanyaan ini dalam tata letak kisi."
    },
    signaturepad: {
      signatureWidth: "Mengatur lebar area tanda tangan yang ditampilkan dan gambar yang dihasilkan.",
      signatureHeight: "Mengatur ketinggian area tanda tangan yang ditampilkan dan gambar yang dihasilkan.",
      signatureAutoScaleEnabled: "Pilih apakah Anda ingin area tanda tangan mengisi semua ruang yang tersedia di dalam kotak pertanyaan sambil mempertahankan rasio aspek default 3:2. Saat nilai lebar dan tinggi kustom ditetapkan, pengaturan akan mempertahankan rasio aspek dimensi ini."
    },
    file: {
      imageHeight: "Menyesuaikan tinggi gambar dalam hasil survei.",
      imageWidth: "Menyesuaikan lebar gambar dalam hasil survei.",
      allowImagesPreview: "Menampilkan pratinjau thumbnail untuk file yang diunggah jika memungkinkan. Batalkan pilihan jika Anda ingin menampilkan ikon file sebagai gantinya."
    },
    image: {
      contentMode: "Opsi \"Otomatis\" secara otomatis menentukan mode yang sesuai untuk tampilan - Gambar, Video, atau YouTube - berdasarkan URL sumber yang disediakan."
    },
    imagepicker: {
      imageHeight: "Mengganti nilai tinggi minimum dan maksimum.",
      imageWidth: "Mengganti nilai lebar minimum dan maksimum.",
      choices: "\"Nilai\" berfungsi sebagai ID item yang digunakan dalam aturan bersyarat; \"Teks\" ditampilkan kepada responden.",
      contentMode: "Pilih antara \"Gambar\" dan \"Video\" untuk mengatur mode konten pemilih media. Jika \"Gambar\" dipilih, pastikan bahwa semua opsi yang disediakan adalah file gambar dalam format berikut: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Demikian pula, jika \"Video\" dipilih, pastikan bahwa semua opsi adalah tautan langsung ke file video dalam format berikut: MP4, MOV, WMV, FLV, AVI, MKV. Perhatikan bahwa tautan YouTube tidak didukung untuk opsi video."
    },
    text: {
      size: "Pengaturan ini hanya mengubah ukuran bidang input dan tidak memengaruhi lebar kotak pertanyaan. Untuk membatasi panjang input yang diterima, buka <b>Validasi → Batas karakter maksimum</b>."
    },
    comment: {
      rows: "Mengatur jumlah baris yang ditampilkan di bidang input. Jika input mengambil lebih banyak baris, bilah gulir akan muncul."
    },
    // survey templates
    survey: {
      readOnly: "Pilih jika Anda ingin mencegah responden mengisi survei Anda.",
      progressBarLocation: "Mengatur lokasi bilah progres. Nilai \"Otomatis\" menampilkan bilah kemajuan di atas atau di bawah header survei."
    },
    matrixdropdowncolumn: {
      name: "ID kolom yang tidak terlihat oleh responden.",
      isUnique: "Saat diaktifkan untuk kolom, responden diharuskan memberikan respons unik untuk setiap pertanyaan dalam kolom ini.",
      rows: "Mengatur jumlah baris yang ditampilkan di bidang input. Jika input mengambil lebih banyak baris, bilah gulir akan muncul.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan visibilitas kolom.",
      enableIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk kolom.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban.",
      showInMultipleColumns: "Saat dipilih, buat kolom individual untuk setiap opsi pilihan.",
      colCount: "Mengatur opsi pilihan dalam tata letak multi-kolom. Saat diatur ke 0, opsi ditampilkan dalam satu baris. Saat diatur ke -1, nilai aktual diwarisi dari properti \"Jumlah kolom berlapis\" dari matriks induk."
    },
    caseInsensitive: "Pilih apakah huruf besar dan kecil dalam ekspresi reguler harus diperlakukan sebagai setara.",
    widthMode: "Pilih dari: \"Statis\" - menetapkan lebar tetap; \"Responsif\" - membuat survei menempati lebar penuh layar; \"Otomatis\" - berlaku salah satu dari keduanya tergantung pada jenis pertanyaan yang digunakan.",
    cookieName: "Cookie mencegah pengguna mengisi survei yang sama dua kali.",
    logo: "Tempel tautan gambar (tanpa batas ukuran) atau klik ikon folder untuk menelusuri file dari komputer Anda (hingga 64 KB).",
    logoWidth: "Mengatur lebar logo dalam satuan CSS (px, %, in, pt, dll.).",
    logoHeight: "Mengatur tinggi logo dalam satuan CSS (px, %, in, pt, dll.).",
    logoFit: "Pilih dari: \"Tidak ada\" - gambar mempertahankan ukuran aslinya; \"Berisi\" - gambar diubah ukurannya agar pas dengan tetap mempertahankan rasio aspeknya; \"Cover\" - gambar mengisi seluruh kotak sambil mempertahankan rasio aspeknya; \"Isi\" - gambar direntangkan untuk mengisi kotak tanpa mempertahankan rasio aspeknya.",
    autoAdvanceEnabled: "Pilih apakah Anda ingin survei maju secara otomatis ke halaman berikutnya setelah responden menjawab semua pertanyaan di halaman saat ini. Fitur ini tidak akan berlaku jika pertanyaan terakhir di halaman bersifat terbuka atau mengizinkan banyak jawaban.",
    autoAdvanceAllowComplete: "Pilih apakah Anda ingin survei selesai secara otomatis setelah responden menjawab semua pertanyaan.",
    showNavigationButtons: "Mengatur visibilitas dan lokasi tombol navigasi pada halaman.",
    navigationButtonsLocation: "Mengatur lokasi tombol navigasi pada halaman.",
    showPreviewBeforeComplete: "Aktifkan halaman pratinjau hanya dengan semua atau pertanyaan yang dijawab.",
    questionTitleLocation: "Berlaku untuk semua pertanyaan dalam survei. Setelan ini dapat diganti dengan aturan penyelarasan judul di tingkat yang lebih rendah: panel, halaman, atau pertanyaan. Pengaturan tingkat yang lebih rendah akan menggantikan pengaturan tingkat yang lebih tinggi.",
    requiredMark: "Simbol atau urutan simbol yang menunjukkan bahwa jawaban diperlukan.",
    questionStartIndex: "Masukkan angka atau huruf yang ingin Anda gunakan untuk memulai penomoran.",
    questionErrorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan.",
    autoFocusFirstQuestion: "Pilih apakah Anda ingin bidang input pertama pada setiap halaman siap untuk entri teks.",
    questionOrder: "Menyimpan urutan pertanyaan asli atau mengacaknya. Efek pengaturan ini hanya terlihat di tab Pratinjau.",
    maxTextLength: "Hanya untuk pertanyaan entri teks.",
    maxCommentLength: "Hanya untuk komentar pertanyaan.",
    commentAreaRows: "Mengatur jumlah baris yang ditampilkan di area teks untuk komentar pertanyaan. Jika input memakan lebih banyak baris, bilah gulir akan muncul.",
    autoGrowComment: "Pilih apakah Anda ingin komentar pertanyaan dan pertanyaan Teks Panjang bertambah tinggi secara otomatis berdasarkan panjang teks yang dimasukkan.",
    allowResizeComment: "Hanya untuk komentar pertanyaan dan pertanyaan Teks Panjang.",
    calculatedValues: "Variabel kustom berfungsi sebagai variabel perantara atau tambahan yang digunakan dalam perhitungan formulir. Mereka mengambil input responden sebagai nilai sumber. Setiap variabel kustom memiliki nama unik dan ekspresi yang menjadi dasarnya.",
    includeIntoResult: "Pilih apakah Anda ingin nilai terhitung ekspresi disimpan bersama dengan hasil survei.",
    triggers: "Pemicu adalah peristiwa atau kondisi yang didasarkan pada ekspresi. Setelah ekspresi dievaluasi ke \"true\", pemicu memicu tindakan. Tindakan semacam itu secara opsional dapat memiliki pertanyaan target yang dipengaruhinya.",
    clearInvisibleValues: "Pilih apakah akan menghapus nilai untuk pertanyaan yang disembunyikan oleh logika kondisional atau tidak dan kapan melakukannya.",
    textUpdateMode: "Pilih dari: \"On lost focus\" - nilai diperbarui ketika bidang input kehilangan fokus; \"Saat mengetik\" - nilainya diperbarui secara real-time, saat pengguna mengetik.",
    columns: "Nilai kiri berfungsi sebagai ID kolom yang digunakan dalam aturan bersyarat, nilai kanan ditampilkan kepada responden.",
    rows: "Nilai kiri berfungsi sebagai ID baris yang digunakan dalam aturan bersyarat, nilai kanan ditampilkan kepada responden.",
    columnMinWidth: "Menerima nilai CSS (px, %, in, pt, dll.).",
    rowTitleWidth: "Menerima nilai CSS (px, %, in, pt, dll.).",
    totalText: "Hanya terlihat bila setidaknya satu kolom memiliki Tipe total atau Ekspresi total.",
    cellErrorLocation: "Mengatur lokasi pesan kesalahan dalam kaitannya dengan sel dengan input yang tidak valid. Opsi \"Warisi\" menerapkan pengaturan dari properti \"Perataan pesan kesalahan\".",
    detailErrorLocation: "Mengatur lokasi pesan kesalahan untuk pertanyaan yang bertumpuk di bagian detail. Opsi \"Wariskan\" menerapkan pengaturan dari properti \"Perataan pesan kesalahan\".",
    keyDuplicationError: "Ketika properti \"mencegah duplikat respons\" diaktifkan, responden mencoba untuk mengirimkan entri duplikat akan menerima pesan galat berikut.",
    totalExpression: "Memungkinkan Anda menghitung nilai total berdasarkan ekspresi. Ekspresi dapat mencakup perhitungan dasar ('{q1_id} + {q2_id}'), ekspresi Boolean ('{age} > 60') dan fungsi ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll.).",
    confirmDelete: "Memicu prompt yang meminta konfirmasi penghapusan baris.",
    keyName: "Jika kolom yang ditentukan berisi nilai yang identik, survei akan memunculkan kesalahan \"Nilai kunci tidak unik\".",
    description: "Ketik subtitle.",
    locale: "Pilih bahasa untuk mulai membuat survei. Untuk menambahkan terjemahan, beralihlah ke bahasa baru dan terjemahkan teks asli di sini atau di tab Terjemahan.",
    detailPanelMode: "Mengatur lokasi bagian detail dalam kaitannya dengan baris. Pilih dari: \"Tidak ada\" - tidak ada ekspansi yang ditambahkan; \"Di bawah baris\" - ekspansi baris ditempatkan di bawah setiap baris matriks; \"Di bawah baris, tampilkan satu baris ekspansi saja\" - ekspansi ditampilkan di bawah satu baris saja, ekspansi baris yang tersisa diciutkan.",
    imageFit: "Pilih dari: \"Tidak ada\" - gambar mempertahankan ukuran aslinya; \"Berisi\" - gambar diubah ukurannya agar pas dengan tetap mempertahankan rasio aspeknya; \"Cover\" - gambar mengisi seluruh kotak sambil mempertahankan rasio aspeknya; \"Isi\" - gambar direntangkan untuk mengisi kotak tanpa mempertahankan rasio aspeknya.",
    autoGrow: "Secara bertahap meningkatkan ketinggian bidang input saat data dimasukkan. Mengganti setelan \"Tinggi bidang input (dalam baris)\".",
    allowResize: "Gagang pengubah ukuran (atau pegangan) muncul di sudut dan dapat diseret untuk mengubah ukuran bidang input.",
    timeLimit: "Interval waktu dalam hitungan detik setelah survei maju secara otomatis ke halaman Terima Kasih.",
    timeLimitPerPage: "Interval waktu dalam hitungan detik setelah survei maju secara otomatis ke halaman berikutnya.",
    validateVisitedEmptyFields: "Aktifkan opsi ini untuk memicu validasi saat pengguna berfokus pada bidang input kosong dan kemudian meninggalkannya tanpa membuat perubahan apa pun.",
    page: {
      name: "ID halaman yang tidak terlihat oleh responden.",
      description: "Ketik subjudul halaman.",
      navigationTitle: "Keterangan yang ditampilkan pada tombol navigasi di bilah kemajuan atau daftar isi (TOC). Jika Anda membiarkan bidang ini kosong, tombol navigasi akan menggunakan judul halaman atau nama halaman. Untuk mengaktifkan bilah kemajuan atau TOC, buka \"Survei\" → \"Navigasi\".",
      timeLimit: "Interval waktu dalam hitungan detik setelah survei maju secara otomatis ke halaman berikutnya.",
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas halaman.",
      enableIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk halaman.",
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban.",
      questionTitleLocation: "Berlaku untuk semua pertanyaan dalam halaman ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan atau panel. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Teratas\" secara default).",
      questionTitleWidth: "Mengatur lebar yang konsisten untuk judul pertanyaan bila disejajarkan di sebelah kiri kotak pertanyaan. Menerima nilai CSS (px, %, in, pt, dll.).",
      questionErrorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Teratas\" secara default).",
      questionOrder: "Menyimpan urutan pertanyaan asli atau mengacaknya. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Asli\" secara default). Efek pengaturan ini hanya terlihat di tab Pratinjau.",
      showNavigationButtons: "Mengatur visibilitas tombol navigasi di halaman. Opsi \"Warisi\" menerapkan pengaturan tingkat survei, yang defaultnya adalah \"Terlihat\".",
      gridLayoutColumns: "Tabel ini memungkinkan Anda mengonfigurasi setiap kolom kisi pada halaman. Ini secara otomatis mengatur persentase lebar untuk setiap kolom berdasarkan jumlah maksimum elemen dalam satu baris. Untuk menyesuaikan tata letak kisi, sesuaikan nilai ini secara manual dan tentukan lebar judul untuk semua pertanyaan di setiap kolom."
    },
    timerLocation: "Mengatur lokasi pengatur waktu pada halaman.",
    panelsState: "Pilih dari: \"Terkunci\" - pengguna tidak dapat memperluas atau menciutkan panel; \"Runtuhkan semua\" - semua panel dimulai dalam keadaan diciutkan; \"Perluas semua\" - semua panel dimulai dalam keadaan diperluas; \"Pertama diperluas\" - hanya panel pertama yang awalnya diperluas.",
    imageLinkName: "Masukkan nama properti bersama dalam array objek yang berisi URL file gambar atau video yang ingin Anda tampilkan di daftar pilihan.",
    choices: "Nilai kiri berfungsi sebagai ID item yang digunakan dalam aturan bersyarat, nilai yang tepat ditampilkan kepada responden.",
    title: "Ketik judul yang mudah digunakan untuk ditampilkan.",
    waitForUpload: "Memastikan bahwa pengguna tidak akan menyelesaikan survei sampai file diunggah.",
    minWidth: "Menerima nilai CSS (px, %, in, pt, dll.).",
    maxWidth: "Menerima nilai CSS (px, %, in, pt, dll.).",
    width: "Menerima nilai CSS (px, %, in, pt, dll.).",
    valueName: "Jika Anda tidak mengatur properti ini, jawabannya akan disimpan dalam bidang yang ditentukan oleh properti Name.",
    defaultDisplayValue: "Nilai yang ditampilkan dalam pertanyaan HTML dan dalam judul dinamis dan deskripsi elemen survei saat nilai pertanyaan kosong.",
    useDisplayValuesInDynamicTexts: "Dalam tipe pertanyaan pilihan tunggal dan ganda, setiap opsi pilihan memiliki ID dan nilai tampilan. Saat dipilih, setelan ini akan menampilkan nilai tampilan, bukan nilai ID dalam pertanyaan HTML serta judul dinamis dan deskripsi elemen survei.",
    clearIfInvisible: "Pilih apakah akan menghapus nilai pertanyaan yang disembunyikan oleh logika kondisional atau tidak dan kapan melakukannya. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Setelah survei selesai\" secara default).",
    choicesFromQuestionMode: "Pilih dari: \"Semua\" - menyalin semua opsi pilihan dari pertanyaan yang dipilih; \"Dipilih\" - secara dinamis menyalin hanya opsi pilihan yang dipilih; \"Tidak dipilih\" - secara dinamis hanya menyalin opsi pilihan yang tidak dipilih. Opsi \"Tidak Ada\" dan \"Lainnya\" disalin secara default jika diaktifkan dalam pertanyaan sumber.",
    choiceValuesFromQuestion: "Dalam jenis pertanyaan pilihan tunggal dan pilihan ganda, setiap opsi pilihan memiliki ID dan nilai tampilan. Pengaturan ini menentukan kolom matriks atau pertanyaan panel mana yang harus memberikan ID.",
    choiceTextsFromQuestion: "Dalam jenis pertanyaan pilihan tunggal dan pilihan ganda, setiap opsi pilihan memiliki ID dan nilai tampilan. Pengaturan ini menentukan kolom matriks atau pertanyaan panel mana yang harus menyediakan teks tampilan.",
    allowCustomChoices: "Pilih untuk mengizinkan responden menambahkan pilihan mereka sendiri jika opsi yang diinginkan tidak tersedia di menu drop-down. Pilihan khusus hanya akan disimpan sementara selama sesi browser saat ini.",
    showOtherItem: "Saat dipilih, pengguna dapat menyertakan input tambahan di kotak komentar terpisah.",
    separateSpecialChoices: "Menampilkan setiap opsi pilihan khusus (\"Tidak Ada\", \"Lainnya\", \"Pilih Semua\") pada baris baru, bahkan saat menggunakan tata letak beberapa kolom.",
    path: "Tentukan lokasi dalam himpunan data layanan tempat array objek target berada. Biarkan kosong jika URL sudah menunjuk ke array.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Masukkan nama properti seragam dalam array objek yang berisi nilai yang ingin Anda tampilkan di daftar pilihan.",
    allowEmptyResponse: "Pilih untuk mengizinkan layanan mengembalikan respons atau array kosong.",
    choicesVisibleIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan visibilitas semua opsi pilihan.",
    rateValues: "Nilai kiri berfungsi sebagai ID item yang digunakan dalam aturan bersyarat, nilai yang tepat ditampilkan kepada responden.",
    rating: {
      displayMode: "\"Otomatis\" memilih antara mode \"Tombol\" dan \"Tarik-turun\" berdasarkan lebar yang tersedia. Ketika lebar tidak cukup untuk menampilkan tombol, pertanyaan menampilkan dropdown."
    },
    valuePropertyName: "Memungkinkan Anda menghubungkan pertanyaan yang menghasilkan hasil dalam berbagai format. Saat pertanyaan tersebut ditautkan bersama menggunakan ID gabungan, properti bersama ini akan menyimpan nilai pertanyaan yang dipilih.",
    searchEnabled: "Pilih apakah Anda ingin memperbarui konten menu drop-down agar sesuai dengan kueri pencarian yang diketik pengguna di bidang input.",
    valueTrue: "Nilai yang harus disimpan dalam hasil survei ketika responden memberikan jawaban positif.",
    valueFalse: "Nilai untuk disimpan dalam hasil survei ketika responden memberikan jawaban negatif.",
    showPreview: "Tidak disarankan untuk menonaktifkan opsi ini karena menimpa gambar Pratinjau dan menyulitkan pengguna untuk memahami apakah file telah diunggah.",
    needConfirmRemoveFile: "Memicu prompt yang meminta konfirmasi penghapusan file.",
    selectToRankEnabled: "Aktifkan untuk memberi peringkat hanya pada pilihan yang dipilih. Pengguna akan menyeret item yang dipilih dari daftar pilihan untuk memesannya di dalam area peringkat.",
    dataList: "Masukkan daftar pilihan yang akan disarankan kepada responden saat masukan.",
    inputSize: "Pengaturan hanya mengubah ukuran bidang input dan tidak memengaruhi lebar kotak pertanyaan.",
    itemTitleWidth: "Mengatur lebar yang konsisten untuk semua label item. Menerima nilai CSS (px, %, in, pt, dll.).",
    inputTextAlignment: "Pilih cara menyelaraskan nilai input dalam bidang. Pengaturan default \"Otomatis\" menyelaraskan nilai input ke kanan jika penyembunyian mata uang atau numerik diterapkan dan ke kiri jika tidak.",
    altText: "Berfungsi sebagai pengganti ketika gambar tidak dapat ditampilkan pada perangkat pengguna dan untuk tujuan aksesibilitas.",
    rateColorMode: "Menentukan warna emoji yang dipilih saat jenis ikon Peringkat diatur ke \"Smiley\". Pilih antara: \"Default\" - emoji yang dipilih muncul dalam warna survei default; \"Skala\" - emoji yang dipilih mewarisi warna dari skala peringkat.",
    expression: {
      name: "ID ekspresi yang tidak terlihat oleh responden.",
      description: "Ketikkan subjudul ekspresi.",
      expression: "Ekspresi dapat mencakup perhitungan dasar ('{q1_id} + {q2_id}'), kondisi ('{age} > 60'), dan fungsi ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll.)."
    },
    storeOthersAsComment: "Pilih untuk menyimpan nilai opsi \"Lainnya\" sebagai properti terpisah dalam hasil survei.",
    format: "Gunakan {0} sebagai placeholder untuk nilai aktual.",
    acceptedTypes: "Lihat deskripsi atribut [accept](https://www.w3schools.com/tags/att_input_accept.asp) untuk informasi selengkapnya.",
    columnColCount: "Hanya berlaku untuk jenis sel Radiogroup dan Checkbox.",
    autocomplete: "Lihat deskripsi atribut [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) untuk informasi selengkapnya.",
    filePlaceholder: "Berlaku ketika \"Jenis sumber\" adalah \"File lokal\" atau ketika kamera tidak tersedia",
    photoPlaceholder: "Berlaku ketika \"Jenis sumber\" adalah \"Kamera\".",
    fileOrPhotoPlaceholder: "Berlaku ketika \"Jenis sumber\" adalah \"File atau kamera lokal\".",
    colCount: "Mengatur opsi pilihan dalam tata letak multi-kolom. Saat diatur ke 0, opsi ditampilkan dalam satu baris.",
    masksettings: {
      saveMaskedValue: "Pilih apakah Anda ingin menyimpan nilai pertanyaan dengan masker yang diterapkan dalam hasil survei."
    },
    patternmask: {
      pattern: "Pola dapat berisi literal string dan placeholder berikut: '9' - untuk digit; 'a' - untuk huruf besar atau kecil; '#' - untuk digit atau huruf besar atau kecil. Gunakan garis miring terbalik '\\' untuk melarikan diri dari karakter."
    },
    datetimemask: {
      pattern: "Pola dapat berisi karakter pemisah dan placeholder berikut:<br>'m' - Nomor bulan.<br>'mm' - Angka bulan, dengan nol di depannya untuk nilai satu digit. <br>'d' - Hari dalam sebulan. <br>'dd' - Hari dalam sebulan, dengan nol di depan untuk nilai satu digit. <br>'yy' - Dua digit terakhir tahun ini. <br>'yyyy' - Tahun empat digit. <br>'H' - Jam dalam format 24 jam. <br>'HH' - Jam dalam format 24 jam, dengan nol di depannya untuk nilai satu digit. <br>'h' - Jam dalam format 12 jam. <br>'hh' - Jam dalam format 12 jam, dengan nol di depannya untuk nilai satu digit. <br>'MM' - Menit. <br>'ss' - Detik. <br>'TT' - Periode jam 12 jam dalam huruf besar (AM / PM). <br>'tt' - Periode jam 12 jam dalam huruf kecil (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Simbol yang digunakan untuk memisahkan bagian pecahan dari bagian bilangan bulat dari angka yang ditampilkan.",
      thousandsSeparator: "Simbol yang digunakan untuk memisahkan digit angka besar menjadi kelompok tiga.",
      precision: "Membatasi jumlah digit yang akan dipertahankan setelah koma desimal untuk angka yang ditampilkan."
    },
    currencymask: {
      prefix: "Satu atau beberapa simbol yang akan ditampilkan sebelum nilai.",
      suffix: "Satu atau beberapa simbol yang akan ditampilkan setelah nilai."
    },
    theme: {
      isPanelless: "Pengaturan ini hanya berlaku untuk pertanyaan di luar panel.",
      primaryColor: "Menetapkan warna tambahan yang menyoroti elemen survei utama.",
      panelBackgroundTransparency: "Menyesuaikan transparansi panel dan kotak pertanyaan relatif terhadap latar belakang survei.",
      questionBackgroundTransparency: "Menyesuaikan transparansi elemen input relatif terhadap latar belakang survei.",
      cornerRadius: "Mengatur jari-jari sudut untuk semua elemen persegi panjang. Aktifkan Mode Lanjutan jika Anda ingin mengatur nilai radius sudut individual untuk elemen input atau panel dan kotak pertanyaan.",
      "--sjs-general-backcolor-dim": "Mengatur warna latar belakang utama survei."
    },
    header: {
      inheritWidthFrom: "Opsi \"Sama seperti wadah\" secara otomatis menyesuaikan lebar area konten header agar sesuai dengan elemen HTML tempat survei ditempatkan.",
      textAreaWidth: "Lebar area header yang berisi judul dan deskripsi survei, diukur dalam piksel.",
      overlapEnabled: "Saat diaktifkan, bagian atas survei melapisi bagian bawah header.",
      mobileHeight: "Saat diatur ke 0, tinggi dihitung secara otomatis untuk mengakomodasi konten header."
    },
    progressBarInheritWidthFrom: "Opsi \"Sama seperti wadah\" secara otomatis menyesuaikan lebar area bilah kemajuan agar sesuai dengan elemen HTML tempat survei ditempatkan."
  },
  // Properties
  p: {
    title: {
      name: "judul",
      title: "Biarkan kosong, jika sama dengan 'Nama'"
    },
    multiSelect: "Perbolehkan beberapa pilihan",
    showLabel: "Tampilkan keterangan gambar",
    swapOrder: "Tukar urutan Ya dan Tidak",
    value: "Nilai",
    tabAlign: "Perataan tab",
    sourceType: "Jenis sumber",
    fitToContainer: "Sesuai dengan kontainer",
    setValueExpression: "Mengatur ekspresi nilai",
    description: "deskripsi",
    logoFit: "Kecocokan logo",
    pages: "Halaman",
    questions: "Pertanyaan",
    triggers: "Trigger",
    calculatedValues: "Nilai terhitung",
    surveyId: "ID survei",
    surveyPostId: "ID pos survei",
    surveyShowDataSaving: "Survei menunjukkan penghematan data",
    questionDescriptionLocation: "Lokasi deskripsi pertanyaan",
    progressBarType: "Jenis bilah kemajuan",
    showTOC: "Tampilkan TOC",
    tocLocation: "Lokasi Toc",
    questionTitlePattern: "Pola judul pertanyaan",
    widthMode: "Mode lebar",
    showBrandInfo: "Tampilkan info merek",
    useDisplayValuesInDynamicTexts: "Menggunakan nilai tampilan dalam teks dinamis",
    visibleIf: "terlihat jika",
    defaultValueExpression: "Ekspresi nilai default",
    requiredIf: "wajib jika",
    resetValueIf: "Reset nilai jika",
    setValueIf: "Tetapkan nilai jika",
    validators: "validator",
    bindings: "Binding",
    renderAs: "Render sebagai",
    attachOriginalItems: "Melampirkan item asli",
    choices: "pilihan",
    choicesByUrl: "pilihan dari URL",
    currency: "mata uang",
    cellHint: "Petunjuk sel",
    totalMaximumFractionDigits: "Total digit pecahan maksimum",
    totalMinimumFractionDigits: "Total digit pecahan minimum",
    columns: "kolom",
    detailElements: "Elemen detail",
    allowAdaptiveActions: "Izinkan tindakan adaptif",
    defaultRowValue: "nilai baris default",
    detailPanelShowOnAdding: "Panel detail menunjukkan pada menambahkan",
    choicesLazyLoadEnabled: "Pilihan lazy load diaktifkan",
    choicesLazyLoadPageSize: "Pilihan malas memuat ukuran halaman",
    inputFieldComponent: "Komponen bidang input",
    itemComponent: "Komponen item",
    min: "Min",
    max: "Maks",
    minValueExpression: "Ekspresi nilai min",
    maxValueExpression: "Ekspresi nilai maksimum",
    step: "Langkah",
    dataList: "Daftar data",
    inputSize: "ukuranBarang",
    itemTitleWidth: "Lebar label item (dalam px)",
    inputTextAlignment: "Penyelarasan nilai input",
    elements: "Elemen",
    content: "Puas",
    navigationTitle: "Judul navigasi",
    navigationDescription: "Deskripsi navigasi",
    longTap: "Ketuk lama",
    autoGrow: "Tumbuh otomatis",
    allowResize: "Izinkan pengubahan ukuran",
    acceptCarriageReturn: "Terima pengembalian kereta",
    displayMode: "Mode tampilan",
    rateType: "Jenis tarif",
    label: "label",
    contentMode: "Mode konten",
    imageFit: "Kecocokan gambar",
    altText: "Teks alternatif",
    height: "Tinggi",
    mobileHeight: "Tinggi di smartphone",
    penColor: "Warna pena",
    backgroundColor: "Warna latar belakang",
    templateElements: "Elemen template",
    operator: "Operator",
    isVariable: "Adalah variabel",
    runExpression: "Menjalankan ekspresi",
    showCaption: "Tampilkan caption",
    iconName: "Nama ikon",
    iconSize: "Ukuran ikon",
    precision: "Presisi",
    matrixDragHandleArea: "Area gagang seret matriks",
    backgroundImage: "Gambar latar belakang",
    backgroundImageFit: "Kecocokan gambar latar belakang",
    backgroundImageAttachment: "Lampiran gambar latar belakang",
    backgroundOpacity: "Opasitas latar belakang",
    selectToRankEnabled: "Pilih untuk peringkat diaktifkan",
    selectToRankAreasLayout: "Pilih untuk memberi peringkat tata letak area",
    selectToRankEmptyRankedAreaText: "Teks untuk memperlihatkan jika semua opsi dipilih",
    selectToRankEmptyUnrankedAreaText: "Teks tempat penampung untuk area peringkat",
    allowCameraAccess: "Izinkan akses kamera",
    scaleColorMode: "Mode skala warna",
    rateColorMode: "Mode warna tingkat",
    copyDisplayValue: "Salin nilai tampilan",
    effectiveColSpan: "Rentang kolom",
    progressBarInheritWidthFrom: "Lebar area bilah kemajuan"
  },
  theme: {
    advancedMode: "Mode lanjutan",
    pageTitle: "Font judul halaman",
    questionTitle: "Font judul pertanyaan",
    editorPanel: "Elemen input",
    lines: "Baris",
    primaryDefaultColor: "Default",
    primaryDarkColor: "Hover",
    primaryLightColor: "Dipilih",
    backgroundDimColor: "Warna latar belakang",
    cornerRadius: "Radius sudut",
    backcolor: "Latar belakang default",
    hovercolor: "Arahkan kursor ke latar belakang",
    borderDecoration: "Dekorasi perbatasan",
    fontColor: "Warna font",
    backgroundColor: "Warna latar belakang",
    primaryForecolor: "Warna default",
    primaryForecolorLight: "Warna dinonaktifkan",
    font: "Font",
    borderDefault: "Gelap",
    borderLight: "Ringan",
    fontFamily: "Keluarga font",
    fontWeightRegular: "Biasa",
    fontWeightHeavy: "Berat",
    fontWeightSemiBold: "Semi-tebal",
    fontWeightBold: "Berani",
    color: "Warna",
    placeholderColor: "Warna tempat penampung",
    size: "Tingginya",
    opacity: "Opacity",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Tambahkan Efek Bayangan",
    boxShadowBlur: "Kabur",
    boxShadowSpread: "Penyebaran",
    boxShadowDrop: "Menjatuhkan",
    boxShadowInner: "Batin",
    names: {
      default: "Default",
      sharp: "Tajam",
      borderless: "Tanpa batas",
      flat: "Rata",
      plain: "Polos",
      doubleborder: "Batas Ganda",
      layered: "Berlapis",
      solid: "Keras",
      threedimensional: ".3D",
      contrast: "Kontras"
    },
    colors: {
      teal: "Teal",
      blue: "Biru",
      purple: "Ungu",
      orchid: "Anggrek",
      tulip: "Tulip",
      brown: "Coklat",
      green: "Hijau",
      gray: "Abu-abu"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Latar belakang permukaan",
    "--sjs-primary-background-500": "Utama",
    "--sjs-secondary-background-500": "Sekunder",
    surfaceScale: "Permukaan",
    userInterfaceBaseUnit: "Antarmuka pengguna",
    fontScale: "Font",
    names: {
      sc2020: "Pembuat Survei 2020",
      "default-light": "Ringan",
      "default-dark": "Gelap",
      "default-contrast": "Kontras"
    }
  }
};

setupLocale({ localeCode: "id", strings: indonesianStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// survey.addLogicItem: "Create a rule to customize the flow of the survey." => "Buat aturan untuk menyesuaikan alur survei."
// survey.duplicate: "Duplicate" => "Duplikat"
// qt.ranking: "Ranking" => "Peringkat"
// qt.image: "Image" => "Citra"
// qt.tagbox: "Multi-Select Dropdown" => "Dropdown Multi-Pilih"
// qt.signaturepad: "Signature" => "Tanda tangan"
// qt.buttongroup: "Button Group" => "Grup Tombol"
// ed.settingsTooltip: "Open settings" => "Buka pengaturan"
// ed.surveySettings: "Survey Settings" => "Pengaturan Survei"
// ed.surveySettingsTooltip: "Open survey settings" => "Buka pengaturan survei"
// ed.showPanel: "Show Panel" => "Tampilkan Panel"
// ed.hidePanel: "Hide Panel" => "Sembunyikan Panel"
// ed.prevSelected: "Select previous" => "Pilih sebelumnya"
// ed.nextSelected: "Select next" => "Pilih selanjutnya"
// ed.surveyTypeName: "Survey" => "Survei"
// ed.pageTypeName: "Page" => "Halaman"
// ed.panelTypeName: "Panel" => "Panel"
// ed.questionTypeName: "Question" => "Pertanyaan"
// ed.columnTypeName: "Column" => "Kolom"
// ed.newTextItemName: "text" => "Teks"
// ed.themeSurvey: "Themes" => "Tema"
// ed.defaultV2Theme: "Default" => "Default"
// ed.modernTheme: "Modern" => "Modern"
// ed.defaultTheme: "Default (legacy)" => "Default (warisan)"
// ed.navigateToMsg: "You had to navigate to" => "Anda harus menavigasi ke"
// ed.logic: "Logic" => "Logika"
// ed.saveSurveyTooltip: "Save Survey" => "Simpan Survei"
// ed.jsonHideErrors: "Hide errors" => "Menyembunyikan kesalahan"
// ed.jsonShowErrors: "Show errors" => "Tampilkan kesalahan"
// ed.undoTooltip: "Undo last change" => "Mengurungkan perubahan terakhir"
// ed.redoTooltip: "Redo the change" => "Mengulangi perubahan"
// ed.showMoreChoices: "Show more" => "Tampilkan lebih banyak"
// ed.showLessChoices: "Show less" => "Tampilkan lebih sedikit"
// ed.copy: "Copy" => "Menyalin"
// ed.cut: "Cut" => "Memotong"
// ed.paste: "Paste" => "Pasta"
// ed.copyTooltip: "Copy selection to clipboard" => "Salin pilihan ke clipboard"
// ed.cutTooltip: "Cut selection to clipboard" => "Memotong pilihan ke clipboard"
// ed.pasteTooltip: "Paste from clipboard" => "Tempel dari papan klip"
// ed.property-grid: "Properties" => "Properti"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Ketik untuk mencari..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Pertanyaan Pilihan"
// ed.toolboxTextCategory: "Text Input Questions" => "Pertanyaan Input Teks"
// ed.toolboxContainersCategory: "Containers" => "Wadah"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Pertanyaan Matriks"
// ed.toolboxMiscCategory: "Misc" => "Misc"
// ed.propertyEditorError: "Error" => "Kesalahan"
// ed.translationPropertyGridTitle: "Language Settings" => "Pengaturan Bahasa"
// ed.themePropertyGridTitle: "Theme Settings" => "Pengaturan Tema"
// ed.translationLanguages: "Languages" => "Bahasa"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Hanya String yang Digunakan"
// ed.translationPlaceHolder: "Translation..." => "Terjemahan..."
// ed.themeExportButton: "Export" => "Ekspor"
// ed.themeImportButton: "Import" => "Mengimpor"
// ed.selectPage: "Select page..." => "Pilih halaman..."
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Pilihan disalin dari"
// ed.htmlPlaceHolder: "HTML content will be here." => "Konten HTML akan ada di sini."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Jatuhkan pertanyaan dari kotak alat di sini."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Survei kosong. Seret elemen dari kotak alat atau klik tombol di bawah."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Seret dan lepas gambar di sini atau klik tombol di bawah ini dan pilih gambar untuk diunggah"
// ed.imageChooseImage: "Choose Image" => "Pilih Gambar"
// ed.addNewTypeQuestion: "Add {0}" => "Tambahkan {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "Auto"
// ed.choices_Item: "Item " => "Benda "
// lg.addNewItem: "Add New Rule" => "Tambahkan Aturan Baru"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Buat aturan untuk menyesuaikan alur survei."
// lg.page_visibilityName: "Show (hide) page" => "Tampilkan (sembunyikan) halaman"
// lg.page_enableName: "Enable (disable) page" => "Aktifkan (nonaktifkan) halaman"
// lg.panel_visibilityName: "Show (hide) panel" => "Tampilkan (sembunyikan) panel"
// lg.panel_enableName: "Enable (disable) panel" => "Aktifkan (nonaktifkan) panel"
// lg.question_visibilityName: "Show (hide) question" => "Tampilkan (sembunyikan) pertanyaan"
// lg.question_enableName: "Enable (disable) question" => "Aktifkan (nonaktifkan) pertanyaan"
// lg.question_requireName: "Make question required" => "Buat pertanyaan diperlukan"
// lg.column_visibilityName: "Show (hide) column" => "Perlihatkan (sembunyikan) kolom"
// lg.column_enableName: "Enable (disable) column" => "Mengaktifkan (menonaktifkan) kolom"
// lg.column_requireName: "Make column required" => "Buat kolom diperlukan"
// lg.trigger_completeName: "Complete survey" => "Survei lengkap"
// lg.trigger_setvalueName: "Set answer" => "Tetapkan jawaban"
// lg.trigger_copyvalueName: "Copy answer" => "Salin jawaban"
// lg.trigger_skipName: "Skip to question" => "Lanjut ke pertanyaan"
// lg.trigger_runExpressionName: "Run expression" => "Menjalankan ekspresi"
// lg.completedHtmlOnConditionName: "Set \"Survey Complete\" page markup" => "Mengatur markup halaman \"Survei Selesai\""
// lg.page_visibilityDescription: "Make the page visible when the logic expression returns true. Otherwise keep it invisible." => "Membuat halaman terlihat saat ekspresi logika mengembalikan true. Jika tidak, jaga agar tidak terlihat."
// lg.panel_visibilityDescription: "Make the panel visible when the logic expression returns true. Otherwise keep it invisible." => "Buat panel terlihat saat ekspresi logika mengembalikan true. Jika tidak, jaga agar tidak terlihat."
// lg.panel_enableDescription: "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled." => "Buat panel, dan semua elemen di dalamnya, aktifkan saat ekspresi logika mengembalikan true. Jika tidak, biarkan mereka dinonaktifkan."
// lg.question_visibilityDescription: "Make the question visible when the logic expression returns true. Otherwise keep it invisible." => "Buat pertanyaan terlihat saat ekspresi logika mengembalikan true. Jika tidak, jaga agar tidak terlihat."
// lg.question_enableDescription: "Make the question enable when the logic expression returns true. Otherwise keep it disabled." => "Aktifkan pertanyaan saat ekspresi logika mengembalikan true. Jika tidak, tetap nonaktifkan."
// lg.question_requireDescription: "Question becomes required when the logic expression returns true." => "Pertanyaan menjadi diperlukan saat ekspresi logika mengembalikan true."
// lg.trigger_completeDescription: "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'." => "Ketika ekspresi logika mengembalikan true maka survei menjadi selesai dan pengguna akhir melihat 'Halaman terima kasih'."
// lg.trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question." => "Ketika nilai pertanyaan, yang digunakan dalam ekspresi logika, diubah dan ekspresi logika mengembalikan true, maka nilai diatur ke pertanyaan yang dipilih."
// lg.trigger_copyvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question." => "Ketika nilai pertanyaan, yang digunakan dalam ekspresi logika, diubah dan ekspresi logika mengembalikan true, maka nilai satu pertanyaan yang dipilih disalin ke pertanyaan lain yang dipilih."
// lg.trigger_skipDescription: "When the logic expression returns true then the survey skip to / focus the selected question." => "Ketika ekspresi logika mengembalikan true maka survei melompat ke / memfokuskan pertanyaan yang dipilih."
// lg.trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question" => "Ketika ekspresi logika mengembalikan true, maka ekspresi kustom dilakukan. Anda dapat secara opsional mengatur hasil ekspresi ini ke dalam pertanyaan yang dipilih"
// lg.completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one." => "Jika ekspresi logika mengembalikan true, maka teks default untuk 'Halaman terima kasih' diubah ke yang diberikan."
// lg.itemExpressionText: "When expression: '{0}' returns true" => "Ketika ekspresi: '{0}' mengembalikan true"
// lg.itemEmptyExpressionText: "New rule" => "Aturan baru"
// lg.page_visibilityText: "make page {0} visible" => "Membuat halaman {0} terlihat"
// lg.panel_visibilityText: "make panel {0} visible" => "Membuat panel {0} terlihat"
// lg.panel_enableText: "make panel {0} enable" => "Membuat panel {0} mengaktifkan"
// lg.question_visibilityText: "make question {0} visible" => "Buat pertanyaan {0} terlihat"
// lg.question_enableText: "make question {0} enable" => "Buat pertanyaan {0} aktifkan"
// lg.question_requireText: "make question {0} required" => "Buat pertanyaan {0} diperlukan"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Membuat kolom {0} pertanyaan {1} terlihat"
// lg.column_enableText: "make column {0} of question {1} enable" => "Buat kolom {0} pertanyaan {1} aktifkan"
// lg.column_requireText: "make column {0} of question {1} required" => "membuat kolom {0} pertanyaan {1} diperlukan"
// lg.trigger_completeText: "survey becomes completed" => "Survei menjadi selesai"
// lg.trigger_setvalueText: "set into question: {0} value {1}" => "Pertanyaan: {0} nilai {1}"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Nilai Pertanyaan yang Jelas: {0}"
// lg.trigger_copyvalueText: "copy into question: {0} value from question {1}" => "Salin ke pertanyaan: {0} nilai dari pertanyaan {1}"
// lg.trigger_skipText: "survey skip to the question {0}" => "Survei Lewati ke pertanyaan {0}"
// lg.trigger_runExpressionText1: "run expression: '{0}'" => "menjalankan ekspresi: '{0}'"
// lg.trigger_runExpressionText2: " and set its result into question: {0}" => " dan mempertanyakan hasilnya: {0}"
// lg.completedHtmlOnConditionText: "show custom text for the 'Thank you page'." => "tampilkan teks kustom untuk \"Halaman terima kasih\"."
// lg.showAllQuestions: "All Questions" => "Semua Pertanyaan"
// lg.showAllActionTypes: "All Action Types" => "Semua Jenis Tindakan"
// lg.conditions: "Condition(s)" => "Ketentuan"
// lg.actions: "Action(s)" => "Tindakan"
// lg.expressionEditorTitle: "Define condition(s)" => "Tentukan kondisi"
// lg.actionsEditorTitle: "Define action(s)" => "Menentukan tindakan"
// lg.deleteAction: "Delete Action" => "Hapus Tindakan"
// lg.addNewAction: "Add Action" => "Tambahkan Tindakan"
// lg.selectedActionCaption: "Select action..." => "Pilih tindakan..."
// lg.expressionInvalid: "The logic expression is empty or invalid. Please correct it." => "Ekspresi logika kosong atau tidak valid. Mohon koreksinya."
// lg.noActionError: "Please, add at least one action." => "Tolong, tambahkan setidaknya satu tindakan."
// lg.actionInvalid: "Please, fix problems in your action(s)." => "Tolong, perbaiki masalah dalam tindakan Anda."
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Aturan logis tidak lengkap"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Anda belum menyelesaikan beberapa aturan logis. Jika Anda meninggalkan tab sekarang, perubahan akan hilang. Apakah Anda masih ingin meninggalkan tab tanpa menyelesaikan perubahan?"
// lg.uncompletedRule_apply: "Yes" => "Ya"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Tidak, saya ingin menyelesaikan aturan"
// pe.save: "Save" => "Simpan"
// pe.clear: "Clear" => "Jelas"
// pe.saveTooltip: "Save" => "Simpan"
// pe.set: "Set" => "Mengeset"
// pe.change: "Change" => "Ubah"
// pe.refresh: "Refresh" => "Refresh"
// pe.add: "Add" => "Tambah"
// pe.removeItem: "Click to remove the item..." => "Klik untuk menghapus item..."
// pe.dragItem: "Drag the item" => "Seret item"
// pe.addOther: "Other" => "Lain"
// pe.addSelectAll: "Select All" => "Pilih Semua"
// pe.addNone: "None" => "Tidak"
// pe.back: "Return without saving" => "Pengembalian tanpa menabung"
// pe.backTooltip: "Return without saving" => "Pengembalian tanpa menabung"
// pe.saveAndBack: "Save and return" => "Simpan dan kembalikan"
// pe.saveAndBackTooltip: "Save and return" => "Simpan dan kembalikan"
// pe.doneEditing: "Done" => "Selesai"
// pe.showChoices: "Show Choices" => "Tampilkan Pilihan"
// pe.emptyValue: "Value is empty" => "Nilai kosong"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Nilai '{0}' tidak unik"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Harap batasi jumlah item dari {0} ke {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Anda dapat mengatur data dalam format berikut:\nvalue1|text\nnilai2"
// pe.itemSelectorEmpty: "Please select the element" => "Silakan pilih elemen"
// pe.conditionActionEmpty: "Please select the action" => "Silakan pilih tindakan"
// pe.conditionSelectPage: "Select page..." => "Pilih halaman..."
// pe.conditionSelectPanel: "Select panel..." => "Pilih panel..."
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Melihat pratinjau jawaban sebelum mengirimkan survei"
// pe.overridingPropertyPrefix: "Set by " => "Ditetapkan oleh "
// pe.propertyIsNoUnique: "Please enter a unique value" => "Silakan masukkan nilai unik"
// pe.propertyNameIsNotUnique: "Please enter a unique name" => "Silakan masukkan nama yang unik"
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Jangan gunakan kata-kata khusus: \"item\", \"pilihan\", \"panel\", \"baris\"."
// pe.listIsEmpty: "No items have been added yet" => "Belum ada item yang ditambahkan"
// pe.listIsEmpty@choices: "No choices have been added yet" => "Belum ada pilihan yang ditambahkan"
// pe.addNew@choices: "Add a choice" => "Menambahkan pilihan"
// pe.expressionIsEmpty: "Expression is empty" => "Ekspresi kosong"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Dapatkan nilai dari bidang JSON berikut"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Dapatkan URL gambar dari bidang JSON berikut"
// pe.allowEmptyResponse: "Allow empty response" => "Izinkan respons kosong"
// pe.titlePlaceholder: "Title" => "Titel"
// pe.surveyTitlePlaceholder: "Survey Title" => "Judul Survei"
// pe.pageTitlePlaceholder: "Page {num}" => "Halaman {num}"
// pe.descriptionPlaceholder: "Description" => "Deskripsi"
// pe.surveyDescriptionPlaceholder: "Description" => "Deskripsi"
// pe.pageDescriptionPlaceholder: "Description" => "Deskripsi"
// pe.showNoneItem: "Allow the None option" => "Perbolehkan opsi Tidak Ada"
// pe.noneText: "None option text" => "Tidak ada teks opsi"
// pe.showSelectAllItem: "Allow the Select All option" => "Perbolehkan opsi Pilih Semua"
// pe.selectAllText: "Select All option text" => "Pilih Semua teks opsi"
// pe.choicesMin: "Minimum value for auto-generated items" => "Nilai minimum untuk item yang dibuat secara otomatis"
// pe.choicesMax: "Maximum value for auto-generated items" => "Nilai maksimum untuk item yang dibuat secara otomatis"
// pe.choicesStep: "Step for auto-generated items" => "Langkah untuk item yang dibuat secara otomatis"
// pe.eachRowRequired: "Require answer for all rows" => "Memerlukan jawaban untuk semua baris"
// pe.requiredErrorText: "\"Required\" error message" => "Pesan kesalahan \"Wajib\""
// pe.cols: "Columns" => "Kolom"
// pe.rateMin: "Minimum rate value" => "Nilai tarif minimum"
// pe.rateMax: "Maximum rate value" => "Nilai tarif maksimum"
// pe.rateStep: "Rate step" => "Langkah tingkat"
// pe.buildExpression: "Build" => "Membangun"
// pe.editExpression: "Edit" => "Mengedit"
// pe.and: "and" => "dan"
// pe.or: "or" => "atau"
// pe.remove: "Remove" => "Buka"
// pe.addCondition: "Add Condition" => "Tambahkan Kondisi"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Pilih pertanyaan untuk mulai mengonfigurasi kondisi."
// pe.if: "If" => "Kalau"
// pe.then: "then" => "kemudian"
// pe.setToName: "Target question" => "Pertanyaan target"
// pe.fromName: "Question to copy answer from" => "Pertanyaan untuk disalin jawabannya"
// pe.gotoName: "Question to skip to" => "Pertanyaan untuk dilewati"
// pe.ruleIsNotSet: "Rule is incorrect" => "Aturan salah"
// pe.includeIntoResult: "Include into survey results" => "Sertakan ke dalam hasil survei"
// pe.expandCollapseTitle: "Expand/collapse title" => "Perluas/ciutkan judul"
// pe.simulator: "Select device type" => "Pilih jenis perangkat"
// pe.landscapeOrientation: "Switch to landscape orientation" => "Beralih ke orientasi lanskap"
// pe.portraitOrientation: "Switch to portrait orientation" => "Beralih ke orientasi potret"
// pe.previewText: "Preview Answers button text" => "Teks tombol Pratinjau Jawaban"
// pe.editText: "Edit Answer button text" => "Teks tombol Edit Jawaban"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Tinggi gambar (dalam nilai yang diterima CSS)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Lebar gambar (dalam nilai yang diterima CSS)"
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Batas waktu untuk menyelesaikan halaman (dalam detik)"
// question.page: "Parent page" => "Halaman induk"
// pe.noEntriesText: "Empty entries text" => "Teks entri kosong"
// pe.setValue: "Answer" => "Menjawab"
// pe.dataFormat: "Image format" => "Format gambar"
// pe.allowAddRows: "Allow adding rows" => "Perbolehkan menambahkan baris"
// pe.allowRemoveRows: "Allow removing rows" => "Perbolehkan menghapus baris"
// pe.allowRowReorder: "Allow row drag and drop" => "Perbolehkan baris seret dan lepas"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Tidak berlaku jika Anda menentukan lebar atau tinggi gambar yang tepat."
// pe.minImageWidth: "Minimum image width" => "Lebar gambar minimum"
// pe.maxImageWidth: "Maximum image width" => "Lebar gambar maksimum"
// pe.minImageHeight: "Minimum image height" => "Tinggi gambar minimum"
// pe.maxImageHeight: "Maximum image height" => "Tinggi gambar maksimum"
// surveyvalidator.text: "Error message" => "Pesan kesalahan"
// surveyvalidator.expression: "Validation expression" => "Ekspresi validasi"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (URL atau string yang dikodekan base64)"
// pe.questionsOnPageMode: "Survey structure" => "Struktur survei"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Panjang jawaban maksimum (dalam karakter)"
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Panjang komentar maksimum (dalam karakter)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Perluas area komentar secara otomatis jika perlu"
// pe.allowResizeComment: "Allow users to resize text areas" => "Mengizinkan pengguna mengubah ukuran area teks"
// pe.textUpdateMode: "Update text question value" => "Memperbarui nilai pertanyaan teks"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Mengatur fokus pada jawaban pertama yang tidak valid"
// pe.checkErrorsMode: "Run validation" => "Jalankan validasi"
// pe.navigateToUrl: "Navigate to URL" => "Arahkan ke URL"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "URL dinamis"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Markup untuk menunjukkan apakah pengguna sudah mengisi survei ini"
// pe.completedHtml: "Survey Complete page markup" => "Markup halaman Survei Selesai"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Survei Dinamis Markup halaman lengkap"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Markup untuk ditampilkan saat model survei dimuat"
// pe.commentText: "Comment area text" => "Teks area komentar"
// pe.autocomplete: "Autocomplete type" => "Tipe pelengkapan otomatis"
// pe.labelTrue: "\"True\" label" => "Label \"Benar\""
// pe.labelFalse: "\"False\" label" => "Label \"Salah\""
// pe.allowClear: "Show the Clear button" => "Tampilkan tombol Hapus"
// pe.displayStyle: "Value display style" => "Gaya tampilan nilai"
// pe.format: "Formatted string" => "String yang diformat"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Digit pecahan maksimum"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Digit pecahan minimum"
// pe.useGrouping: "Display grouping separators" => "Menampilkan pemisah pengelompokan"
// pe.allowMultiple: "Allow multiple files" => "Izinkan beberapa file"
// pe.allowImagesPreview: "Preview images" => "Pratinjau gambar"
// pe.acceptedTypes: "Accepted file types" => "Jenis file yang diterima"
// pe.waitForUpload: "Wait for the upload to complete" => "Tunggu hingga upload selesai"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Konfirmasi penghapusan file"
// pe.detailPanelMode: "Detail panel location" => "Lokasi panel detail"
// pe.minRowCount: "Minimum row count" => "Jumlah baris minimum"
// pe.maxRowCount: "Maximum row count" => "Jumlah baris maksimum"
// pe.confirmDelete: "Confirm row deletion" => "Mengonfirmasi penghapusan baris"
// pe.confirmDeleteText: "Confirmation message" => "Pesan konfirmasi"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Konfirmasi penghapusan panel"
// pe.panelCount: "Initial panel count" => "Jumlah panel awal"
// pe.minPanelCount: "Minimum panel count" => "Jumlah panel minimum"
// pe.maxPanelCount: "Maximum panel count" => "Jumlah panel maksimum"
// pe.panelsState: "Inner panel expand state" => "Status perluasan panel dalam"
// pe.templateDescription: "Description template" => "Template deskripsi"
// pe.templateTitle: "Title template" => "Templat judul"
// pe.prevPanelText: "Previous Panel button tooltip" => "Tooltip tombol Panel sebelumnya"
// pe.nextPanelText: "Next Panel button tooltip" => "Tooltip tombol Panel Berikutnya"
// pe.showRangeInProgress: "Show progress bar" => "Perlihatkan bilah kemajuan"
// pe.templateQuestionTitleLocation: "Question title location" => "Lokasi judul pertanyaan"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Hapus lokasi tombol Panel"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Menyembunyikan pertanyaan jika tidak ada baris"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Menyembunyikan kolom jika tidak ada baris"
// pe.rateValues: "Custom rate values" => "Nilai tarif kustom"
// pe.rateCount: "Rate count" => "Jumlah tarif"
// pe.autoGenerate: "How to specify rate values?" => "Bagaimana cara menentukan nilai tarif?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Sembunyikan pertanyaan jika tidak berisi pilihan"
// pe.hideNumber: "Hide question number" => "Sembunyikan nomor pertanyaan"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Lebar minimum (dalam nilai yang diterima CSS)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Lebar maksimum (dalam nilai yang diterima CSS)"
// pe.width: "Width (in CSS-accepted values)" => "Lebar (dalam nilai yang diterima CSS)"
// pe.showHeader: "Show column headers" => "Perlihatkan header kolom"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Tampilkan scrollbar horizontal"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Lebar kolom minimum (dalam nilai yang diterima CSS)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Lebar header baris (dalam nilai yang diterima CSS)"
// pe.valueTrue: "\"True\" value" => "Nilai \"Benar\""
// pe.valueFalse: "\"False\" value" => "Nilai \"False\""
// pe.minErrorText: "\"Value is below minimum\" error message" => "Pesan kesalahan \"Nilai di bawah minimum\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Pesan kesalahan \"Nilai melebihi maksimum\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Pesan kesalahan \"Komentar kosong\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Pesan galat \"Nilai kunci tidak unik\""
// pe.minSelectedChoices: "Minimum selected choices" => "Pilihan minimum yang dipilih"
// pe.maxSelectedChoices: "Maximum selected choices" => "Pilihan maksimum yang dipilih"
// pe.showNumber: "Show panel number" => "Tampilkan nomor panel"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Lebar logo (dalam nilai yang diterima CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Tinggi logo (dalam nilai yang diterima CSS)"
// pe.readOnly: "Read-only" => "Baca-saja"
// pe.enableIf: "Editable if" => "Dapat diedit jika"
// pe.noRowsText: "\"No rows\" message" => "Pesan \"Tidak ada baris\""
// pe.size: "Input field size (in characters)" => "Ukuran bidang input (dalam karakter)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Pisahkan pilihan khusus (Tidak Ada, Lainnya, Pilih Semua)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Salin pilihan dari pertanyaan berikut"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Pilihan mana yang harus disalin?"
// pe.showCommentArea: "Show the comment area" => "Tampilkan area komentar"
// pe.commentPlaceholder: "Comment area placeholder" => "Tempat penampung area komentar"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Menampilkan deskripsi tingkat sebagai nilai ekstrem"
// pe.rowOrder: "Row order" => "Urutan baris"
// pe.columnsLayout: "Column layout" => "Tata letak kolom"
// pe.columnColCount: "Nested column count" => "Jumlah kolom bertumpuk"
// pe.state: "Panel expand state" => "Panel memperluas status"
// pe.correctAnswer: "Correct Answer" => "Jawaban yang Benar"
// pe.defaultPanelValue: "Default Values" => "Nilai Default"
// pe.cells: "Cell Texts" => "Teks Sel"
// pe.keyName: "Key column" => "Kolom kunci"
// itemvalue.text: "Alt text" => "Teks alternatif"
// pe.logoPosition: "Logo position" => "Posisi logo"
// pe.addLogo: "Add logo..." => "Tambahkan logo..."
// pe.changeLogo: "Change logo..." => "Ubah logo..."
// logoPositions.none: "Remove logo" => "Hapus logo"
// logoPositions.left: "Left" => "Kiri"
// logoPositions.right: "Right" => "Kanan"
// logoPositions.top: "On the top" => "Di atas"
// logoPositions.bottom: "In the bottom" => "Di bagian bawah"
// tabs.numbering: "Numbering" => "Penomoran"
// tabs.pages: "Pages" => "Halaman"
// tabs.calculatedValues: "Calculated Values" => "Nilai terhitung"
// tabs.logic: "Logic" => "Logika"
// tabs.layout: "Layout" => "Tata letak"
// tabs.data: "Data" => "Data"
// tabs.validation: "Validation" => "Validasi"
// tabs.cells: "Cell Texts" => "Teks Sel"
// tabs.showOnCompleted: "Survey Complete" => "Survei Selesai"
// tabs.logo: "Logo in Survey Title" => "Logo dalam Judul Survei"
// tabs.slider: "Slider" => "Slider"
// tabs.expression: "Expression" => "Ekspresi"
// tabs.others: "Others" => "Lain"
// pe.choicesVisibleIf: "Choices are visible if" => "Pilihan terlihat jika"
// pe.choicesEnableIf: "Choices are selectable if" => "Pilihan dapat dipilih jika"
// pe.columnsEnableIf: "Columns are visible if" => "Kolom terlihat jika"
// pe.rowsEnableIf: "Rows are visible if" => "Baris terlihat jika"
// pe.indent: "Add indents" => "Menambahkan inden"
// panel.indent: "Add outer indents" => "Menambahkan inden luar"
// pe.innerIndent: "Add inner indents" => "Menambahkan inden dalam"
// pe.titleKeyboardAdornerTip: "Press enter button to edit" => "Tekan tombol enter untuk mengedit"
// pe.keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item" => "Tekan tombol enter untuk mengedit item, tekan tombol hapus untuk menghapus item, tekan alt plus panah ke atas atau panah ke bawah untuk memindahkan item"
// pe.triggerGotoName: "Go to the question" => "Pergi ke pertanyaan"
// pe.triggerRunExpressionEmpty: "Please enter a valid expression" => "Silakan masukkan ekspresi yang valid"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Ketik ekspresi di sini..."
// pe.noFile: "No file choosen" => "Tidak ada file yang dipilih"
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Hapus nilai jika pertanyaan menjadi tersembunyi"
// pe.valuePropertyName: "Value property name" => "Nama properti nilai"
// pe.searchEnabled: "Enable search" => "Aktifkan pencarian"
// pe.hideSelectedItems: "Hide selected items" => "Menyembunyikan item yang dipilih"
// pe.closeOnSelect: "Close the dropdown after selection" => "Tutup menu turun bawah setelah pemilihan"
// pe.signatureWidth: "Signature width" => "Lebar tanda tangan"
// pe.signatureHeight: "Signature height" => "Tinggi tanda tangan"
// pe.verticalAlign: "Vertical alignment" => "Perataan vertikal"
// pe.alternateRows: "Alternate rows" => "Baris alternatif"
// pe.columnsVisibleIf: "Columns are visible if" => "Kolom terlihat jika"
// pe.rowsVisibleIf: "Rows are visible if" => "Baris terlihat jika"
// pe.otherPlaceholder: "Comment area placeholder" => "Tempat penampung area komentar"
// pe.rateType: "Rate type" => "Jenis tarif"
// pv.true: "true" => "benar"
// pv.false: "false" => "palsu"
// pv.decimal: "decimal" => "desimal"
// pv.currency: "currency" => "mata uang"
// pv.percent: "percent" => "persen"
// pv.onpanel: "Start on each panel" => "Mulai di setiap panel"
// pv.tab: "Tabs" => "Tab"
// pv.both: "Both" => "Keduanya"
// pv.right: "Right" => "Kanan"
// pv.color: "color" => "warna"
// pv.date: "date" => "tanggal"
// pv.datetime: "datetime" => "Waktu tanggal"
// pv.datetime-local: "datetime-local" => "datetime-lokal"
// pv.email: "email" => "Email"
// pv.month: "month" => "bulan"
// pv.number: "number" => "angka"
// pv.password: "password" => "kata sandi"
// pv.range: "range" => "lingkup"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "Teks"
// pv.time: "time" => "Waktu"
// pv.url: "url" => "URL"
// pv.week: "week" => "minggu"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Ketika pertanyaan atau panel/halamannya disembunyikan"
// clearInvisibleValues.none: "Never" => "Tidak pernah"
// inputType.color: "Color" => "Warna"
// inputType.date: "Date" => "Tanggal"
// inputType.datetime-local: "Date and Time" => "Tanggal dan Waktu"
// inputType.email: "Email" => "Email"
// inputType.month: "Month" => "Bulan"
// inputType.number: "Number" => "Angka"
// inputType.password: "Password" => "Kata sandi"
// inputType.range: "Range" => "Lingkup"
// inputType.tel: "Phone Number" => "Nomor Telepon"
// inputType.text: "Text" => "Teks"
// inputType.time: "Time" => "Waktu"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Minggu"
// pv.onValueChanging: "Before an answer is changed" => "Sebelum jawaban diubah"
// pv.standard: "Original structure" => "Struktur asli"
// pv.singlePage: "All questions on a single page" => "Semua pertanyaan pada satu halaman"
// pv.questionPerPage: "Each question on an individual page" => "Setiap pertanyaan pada halaman individual"
// pv.noPreview: "No preview" => "Tidak ada pratinjau"
// pv.showAllQuestions: "Show all questions" => "Tampilkan semua pertanyaan"
// pv.showAnsweredQuestions: "Show answered questions only" => "Tampilkan pertanyaan yang sudah terjawab saja"
// pv.pages: "Completed pages" => "Halaman lengkap"
// pv.questions: "Answered questions" => "Pertanyaan yang dijawab"
// pv.requiredQuestions: "Answered required questions" => "Menjawab pertanyaan yang diperlukan"
// pv.correctQuestions: "Valid answers" => "Jawaban yang valid"
// pv.buttons: "Completed pages (button UI)" => "Halaman selesai (tombol UI)"
// pv.underInput: "Under the input" => "Di bawah input"
// pv.underTitle: "Under the title" => "Di bawah judul"
// pv.onBlur: "On blur" => "Saat buram"
// pv.onTyping: "While typing" => "Saat mengetik"
// pv.underRow: "Under the row" => "Di bawah baris"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Di bawah baris, hanya satu panel yang terlihat"
// showNavigationButtons.none: "Hidden" => "Sembunyi"
// showProgressBar.off: "Hidden" => "Sembunyi"
// showTimerPanel.none: "Hidden" => "Sembunyi"
// showTimerPanelMode.all: "Both" => "Keduanya"
// detailPanelMode.none: "Hidden" => "Sembunyi"
// addRowButtonLocation.default: "Depends on matrix layout" => "Tergantung pada tata letak matriks"
// panelsState.default: "Users cannot expand or collapse panels" => "Pengguna tidak dapat memperluas atau menciutkan panel"
// panelsState.collapsed: "All panels are collapsed" => "Semua panel diciutkan"
// panelsState.expanded: "All panels are expanded" => "Semua panel diperluas"
// widthMode.auto: "Auto" => "Auto"
// widthMode.static: "Static" => "Statis"
// widthMode.responsive: "Responsive" => "Responsif"
// imageFit.none: "None" => "Tidak"
// imageFit.contain: "Contain" => "Mengandung"
// imageFit.cover: "Cover" => "Menutupi"
// imageFit.fill: "Fill" => "Isi"
// contentMode.auto: "Auto" => "Auto"
// contentMode.image: "Image" => "Citra"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "YouTube"
// displayMode.auto: "Auto" => "Auto"
// displayMode.buttons: "Buttons" => "Tombol"
// displayMode.dropdown: "Dropdown" => "Tarik-turun"
// rateColorMode.default: "Default" => "Default"
// autoGenerate.true: "Generate" => "Menghasilkan"
// autoGenerate.false: "Enter manually" => "Masukkan secara manual"
// rateType.labels: "Labels" => "Label"
// rateType.stars: "Stars" => "Bintang"
// rateType.smileys: "Smileys" => "Smiley"
// op.anyof: "Any of" => "Salah satu dari"
// op.allof: "All of" => "Semua"
// op.and: "and" => "dan"
// op.or: "or" => "atau"
// ew.modern: "Modern theme" => "Tema modern"
// ew.default: "Default theme" => "Tema default"
// ew.orange: "Orange theme" => "Tema oranye"
// ew.darkblue: "Darkblue theme" => "Tema biru tua"
// ew.darkrose: "Darkrose theme" => "Tema Darkrose"
// ew.stone: "Stone theme" => "Tema batu"
// ew.winter: "Winter theme" => "Tema musim dingin"
// ew.winterstone: "Winter-Stone theme" => "Tema Winter-Stone"
// ts.hideInvisibleElements: "Hide invisible elements" => "Sembunyikan elemen tak terlihat"
// triggers.skiptrigger: "Skip to question" => "Lanjut ke pertanyaan"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Cookie mencegah pengguna mengisi survei yang sama dua kali."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Mengubah ukuran area yang terlihat dari bidang input. Silakan gunakan pengaturan <b>Validasi → Panjang maksimum</b> untuk membatasi panjang input."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Gunakan {0} sebagai placeholder untuk nilai aktual."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Hanya terlihat bila setidaknya satu kolom memiliki Tipe total atau Ekspresi total."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Lihat deskripsi atribut [accept](https://www.w3schools.com/tags/att_input_accept.asp) untuk informasi selengkapnya."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Hanya berlaku untuk jenis sel Radiogroup dan Checkbox."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Lihat deskripsi atribut [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) untuk informasi selengkapnya."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Jika Anda tidak mengatur properti ini, jawabannya akan disimpan dalam bidang yang ditentukan oleh properti Name."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Jika kolom yang ditentukan berisi nilai yang identik, survei akan memunculkan kesalahan \"Nilai kunci tidak unik\"."
// p.multiSelect: "Allow multiple selection" => "Perbolehkan beberapa pilihan"
// p.showLabel: "Show image captions" => "Tampilkan keterangan gambar"
// p.value: "Value" => "Nilai"
// p.tabAlign: "Tab alignment" => "Perataan tab"
// p.logoFit: "Logo fit" => "Kecocokan logo"
// p.pages: "Pages" => "Halaman"
// p.questions: "Questions" => "Pertanyaan"
// p.calculatedValues: "Calculated values" => "Nilai terhitung"
// p.surveyId: "Survey id" => "ID survei"
// p.surveyPostId: "Survey post id" => "ID pos survei"
// p.surveyShowDataSaving: "Survey show data saving" => "Survei menunjukkan penghematan data"
// p.questionDescriptionLocation: "Question description location" => "Lokasi deskripsi pertanyaan"
// p.progressBarType: "Progress bar type" => "Jenis bilah kemajuan"
// p.showTOC: "Show TOC" => "Tampilkan TOC"
// p.tocLocation: "Toc location" => "Lokasi Toc"
// p.questionTitlePattern: "Question title pattern" => "Pola judul pertanyaan"
// p.widthMode: "Width mode" => "Mode lebar"
// p.showBrandInfo: "Show brand info" => "Tampilkan info merek"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Menggunakan nilai tampilan dalam teks dinamis"
// p.descriptionLocation: "Description location" => "Deskripsi lokasi"
// p.defaultValueExpression: "Default value expression" => "Ekspresi nilai default"
// p.bindings: "Bindings" => "Binding"
// p.renderAs: "Render as" => "Render sebagai"
// p.attachOriginalItems: "Attach original items" => "Melampirkan item asli"
// p.cellHint: "Cell hint" => "Petunjuk sel"
// p.isUnique: "Is unique" => "Unik"
// p.showInMultipleColumns: "Show in multiple columns" => "Perlihatkan dalam beberapa kolom"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Total digit pecahan maksimum"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Total digit pecahan minimum"
// p.detailElements: "Detail elements" => "Elemen detail"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Izinkan tindakan adaptif"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Panel detail menunjukkan pada menambahkan"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Pilihan lazy load diaktifkan"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Pilihan malas memuat ukuran halaman"
// p.inputFieldComponent: "Input field component" => "Komponen bidang input"
// p.itemComponent: "Item component" => "Komponen item"
// p.min: "Min" => "Min"
// p.max: "Max" => "Maks"
// p.minValueExpression: "Min value expression" => "Ekspresi nilai min"
// p.maxValueExpression: "Max value expression" => "Ekspresi nilai maksimum"
// p.step: "Step" => "Langkah"
// p.dataList: "Data list" => "Daftar data"
// p.elements: "Elements" => "Elemen"
// p.content: "Content" => "Puas"
// p.navigationTitle: "Navigation title" => "Judul navigasi"
// p.navigationDescription: "Navigation description" => "Deskripsi navigasi"
// p.longTap: "Long tap" => "Ketuk lama"
// p.autoGrow: "Auto grow" => "Tumbuh otomatis"
// p.allowResize: "Allow resizing" => "Izinkan pengubahan ukuran"
// p.acceptCarriageReturn: "Accept carriage return" => "Terima pengembalian kereta"
// p.displayMode: "Display mode" => "Mode tampilan"
// p.rateType: "Rate type" => "Jenis tarif"
// p.contentMode: "Content mode" => "Mode konten"
// p.imageFit: "Image fit" => "Kecocokan gambar"
// p.altText: "Alt text" => "Teks alternatif"
// p.height: "Height" => "Tinggi"
// p.penColor: "Pen color" => "Warna pena"
// p.backgroundColor: "Background color" => "Warna latar belakang"
// p.templateElements: "Template elements" => "Elemen template"
// p.operator: "Operator" => "Operator"
// p.isVariable: "Is variable" => "Adalah variabel"
// p.runExpression: "Run expression" => "Menjalankan ekspresi"
// p.showCaption: "Show caption" => "Tampilkan caption"
// p.iconName: "Icon name" => "Nama ikon"
// p.iconSize: "Icon size" => "Ukuran ikon"
// p.precision: "Precision" => "Presisi"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Area gagang seret matriks"
// p.backgroundImage: "Background image" => "Gambar latar belakang"
// p.backgroundImageFit: "Background image fit" => "Kecocokan gambar latar belakang"
// p.backgroundImageAttachment: "Background image attachment" => "Lampiran gambar latar belakang"
// p.backgroundOpacity: "Background opacity" => "Opasitas latar belakang"
// p.selectToRankEnabled: "Select to rank enabled" => "Pilih untuk peringkat diaktifkan"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Pilih untuk memberi peringkat tata letak area"
// p.allowCameraAccess: "Allow camera access" => "Izinkan akses kamera"
// p.scaleColorMode: "Scale color mode" => "Mode skala warna"
// p.rateColorMode: "Rate color mode" => "Mode warna tingkat"
// p.templateTabTitle: "Template tab title" => "Judul tab templat"
// p.templateVisibleIf: "Template visible if" => "Template terlihat jika"
// p.copyDisplayValue: "Copy display value" => "Salin nilai tampilan"
// theme.--background: "Background color" => "Warna latar belakang"
// theme.--background-dim-light: "Background dim light color" => "Latar belakang warna cahaya redup"
// theme.--primary-foreground: "Primary foreground color" => "Warna latar depan primer"
// theme.--foreground: "Foreground color" => "Warna latar depan"
// theme.--base-unit: "Base unit" => "Unit dasar"
// theme.groupAdvanced: "Advanced" => "Maju"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Penampilan pertanyaan"
// theme.isPanellessPanels: "Default" => "Default"
// theme.isPanellessLightweight: "Without Panels" => "Tanpa Panel"
// theme.themePaletteLight: "Light" => "Ringan"
// theme.themePaletteDark: "Dark" => "Gelap"
// theme.primaryColor: "Accent color" => "Warna aksen"
// theme.primaryDefaultColor: "Default" => "Default"
// theme.primaryDarkColor: "Hover" => "Hover"
// theme.primaryLightColor: "Selected" => "Dipilih"
// theme.backgroundDimColor: "Background color" => "Warna latar belakang"
// theme.backgroundImage: "Background image" => "Gambar latar belakang"
// theme.backgroundImageFitAuto: "Auto" => "Auto"
// theme.backgroundImageFitCover: "Cover" => "Menutupi"
// theme.backgroundImageFitContain: "Contain" => "Mengandung"
// theme.backgroundOpacity: "Opacity" => "Opacity"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Tetap"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Gulir"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opasitas latar belakang panel"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opasitas latar belakang pertanyaan"
// theme.questionPanel: "Panel background and corner radius" => "Latar belakang panel dan radius sudut"
// theme.questionTitle: "Question title font" => "Font judul pertanyaan"
// theme.questionDescription: "Question description font" => "Font deskripsi pertanyaan"
// theme.editorPanel: "Input element" => "Elemen input"
// theme.editorFont: "Input element font" => "Font elemen input"
// theme.backcolor: "Default background" => "Latar belakang default"
// theme.hovercolor: "Hover background" => "Arahkan kursor ke latar belakang"
// theme.borderDecoration: "Border decoration" => "Dekorasi perbatasan"
// theme.accentBackground: "Accent background" => "Latar belakang aksen"
// theme.accentForeground: "Accent foreground" => "Latar depan aksen"
// theme.primaryForecolor: "Default color" => "Warna default"
// theme.primaryForecolorLight: "Disabled color" => "Warna dinonaktifkan"
// theme.linesColors: "Minor line colors" => "Warna garis minor"
// theme.borderDefault: "Darker" => "Gelap"
// theme.borderLight: "Lighter" => "Ringan"
// theme.fontFamily: "Font family" => "Keluarga font"
// theme.fontSize: "Font size" => "Ukuran font"
// theme.color: "Color" => "Warna"
// theme.size: "Size" => "Tingginya"
// theme.fontWeightRegular: "Regular" => "Biasa"
// theme.fontWeightHeavy: "Heavy" => "Berat"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-tebal"
// theme.fontWeightBold: "Bold" => "Berani"
// theme.scale: "Scale" => "Sisik"
// theme.cornerRadius: "Corner radius" => "Radius sudut"
// theme.surveyTitleFont: "Survey title font" => "Font judul survei"
// theme.pageTitle: "Page title font" => "Font judul halaman"
// theme.pageDescription: "Page description font" => "Font deskripsi halaman"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Tambahkan Efek Bayangan"
// theme.opacity: "Opacity" => "Opacity"
// theme.boxShadowBlur: "Blur" => "Kabur"
// theme.boxShadowSpread: "Spread" => "Penyebaran"
// theme.boxShadowDrop: "Drop" => "Menjatuhkan"
// theme.boxShadowInner: "Inner" => "Batin"
// theme.questionShadow: "Shadow effects" => "Efek bayangan"
// theme.editorShadow: "Input element shadow effects" => "Efek bayangan elemen input"
// names.default: "Default" => "Default"
// names.contrast: "Contrast" => "Kontras"
// names.plain: "Plain" => "Polos"
// names.simple: "Simple" => "Sederhana"
// names.blank: "Blank" => "Kosong"
// names.double: "Double" => "Dobel"
// names.bulk: "Bulk" => "Massal"
// names.pseudo-3d: "Pseudo 3D" => "Semu 3D"
// names.playful: "Playful" => "Menyenangkan"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Teal"
// colors.blue: "Blue" => "Biru"
// colors.purple: "Purple" => "Ungu"
// colors.orchid: "Orchid" => "Anggrek"
// colors.tulip: "Tulip" => "Tulip"
// colors.brown: "Brown" => "Coklat"
// colors.green: "Green" => "Hijau"
// names.sharp: "Sharp" => "Tajam"
// names.borderless: "Borderless" => "Tanpa batas"
// names.flat: "Flat" => "Rata"
// names.doubleborder: "Double Border" => "Batas Ganda"
// names.layered: "Layered" => "Berlapis"
// names.solid: "Solid" => "Keras"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Apakah Anda yakin ingin menghapus semua string untuk bahasa ini?"
// ed.themeResetButton: "Reset theme settings to default" => "Setel ulang pengaturan tema ke default"
// theme.placeholderColor: "Placeholder color" => "Warna tempat penampung"
// ed.themeSettings: "Theme Settings" => "Pengaturan Tema"
// ed.themeSettingsTooltip: "Open theme settings" => "Buka pengaturan tema"
// pe.resetToDefaultCaption: "Reset" => "Reset"
// pv.file: "Local files" => "File lokal"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "File atau kamera lokal"
// ed.translateUsigAI: "Auto-translate All" => "Terjemahkan otomatis Semua"
// ed.translationDialogTitle: "Untranslated strings" => "String yang tidak diterjemahkan"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Harap masukkan setidaknya {0} item"
// lg.question_resetValueName: "Reset question value" => "Mereset nilai pertanyaan"
// lg.column_resetValue: "Reset column value" => "Mereset nilai kolom"
// pe.markRequired: "Mark as required" => "Tandai sesuai kebutuhan"
// pe.removeRequiredMark: "Remove the required mark" => "Hapus tanda yang diperlukan"
// p.resetValueIf: "Reset value if" => "Reset nilai jika"
// lg.question_setValueName: "Set question value" => "Tetapkan nilai pertanyaan"
// lg.column_resetValueName: "Reset column value" => "Mereset nilai kolom"
// lg.column_setValueName: "Set column value" => "Mengatur nilai kolom"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Ekspresi yang hasilnya akan ditetapkan ke pertanyaan target."
// survey.title: "Title" => "Titel"
// page.title: "Title" => "Titel"
// p.setValueIf: "Set value if" => "Tetapkan nilai jika"
// theme.header: "Header" => "Header"
// theme.backgroundImageFitFill: "Stretch" => "Merentangkan"
// theme.backgroundImageFitTile: "Tile" => "Ubin"
// theme.headerView: "View" => "Melihat"
// theme.headerViewBasic: "Basic" => "Dasar"
// theme.headerViewAdvanced: "Advanced" => "Maju"
// theme.headerInheritWidthFrom: "Content area width" => "Lebar area konten"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Sama seperti survei"
// theme.headerInheritWidthFromPage: "Fit to page" => "Paskan dengan halaman"
// theme.headerTextAreaWidth: "Text width" => "Lebar teks"
// theme.headerBackgroundColorSwitch: "Background color" => "Warna latar belakang"
// theme.headerBackgroundColorNone: "None" => "Tidak"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Warna aksen"
// theme.headerBackgroundColorCustom: "Custom" => "Adat"
// theme.horizontalAlignmentLeft: "Left" => "Kiri"
// theme.horizontalAlignmentCenter: "Center" => "Pusat"
// theme.horizontalAlignmentRight: "Right" => "Kanan"
// theme.verticalAlignmentTop: "Top" => "Puncak"
// theme.verticalAlignmentMiddle: "Middle" => "Tengah"
// theme.verticalAlignmentBottom: "Bottom" => "Dasar"
// lg.question_resetValueText: "reset value for question: {0}" => "reset nilai untuk pertanyaan: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Tetapkan nilai: {1} pertanyaan: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Setel ulang nilai sel untuk kolom: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Menetapkan nilai sel: {1} ke kolom: {0}"
// ed.surveyJsonExportButton: "Export" => "Ekspor"
// ed.surveyJsonImportButton: "Import" => "Mengimpor"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Salin ke papan klip"
// pe.filePlaceholder: "File placeholder text" => "Teks tempat penampung file"
// pe.photoPlaceholder: "Photo placeholder text" => "Teks placeholder foto"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Teks placeholder file atau foto"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Berlaku ketika \"Jenis sumber\" adalah \"File lokal\" atau ketika kamera tidak tersedia"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Berlaku ketika \"Jenis sumber\" adalah \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Berlaku ketika \"Jenis sumber\" adalah \"File atau kamera lokal\"."
// theme.background: "Background" => "Latar"
// theme.appearance: "Appearance" => "Rupa"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Apakah Anda benar-benar ingin mengatur ulang tema? Semua penyesuaian Anda akan hilang."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ya, atur ulang tema"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Sesuai dengan kontainer"
// signaturepad.showPlaceholder: "Show the placeholder" => "Memperlihatkan tempat penampung"
// signaturepad.placeholder: "Placeholder text" => "Teks tempat penampung"
// theme.surveyDescriptionFont: "Survey description font" => "Font deskripsi survei"
// ed.prevFocus: "Focus previous" => "Fokus sebelumnya"
// ed.nextFocus: "Focus next" => "Fokus berikutnya"
// ed.saveTheme: "Save Theme" => "Simpan Tema"
// ed.saveThemeTooltip: "Save Theme" => "Simpan Tema"
// lg.page_requireName: "Make page required" => "Buat halaman diperlukan"
// lg.panel_requireName: "Make page required" => "Buat halaman diperlukan"
// signaturepad.signatureWidth: "Signature area width" => "Lebar area tanda tangan"
// signaturepad.signatureHeight: "Signature area height" => "Tinggi area tanda tangan"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Menskalakan area tanda tangan secara otomatis"
// signaturepad.penMinWidth: "Minimum pen width" => "Lebar pena minimum"
// signaturepad.penMaxWidth: "Maximum pen width" => "Lebar pena maksimum"
// theme.logoPosition: "Logo position" => "Posisi logo"
// theme.headerTitlePosition: "Title position" => "Posisi judul"
// theme.headerDescriptionPosition: "Description position" => "Deskripsi posisi"
// ed.propertyGridNoResultsFound: "No results found" => "Tidak ada hasil yang ditemukan"
// pv.leftRight: "Left and right" => "Kiri dan kanan"
// p.sourceType: "Source type" => "Jenis sumber"
// p.fitToContainer: "Fit to container" => "Sesuai dengan kontainer"
// p.setValueExpression: "Set value expression" => "Mengatur ekspresi nilai"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Pilihan dimuat dari layanan web."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Buka pengaturan"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Pratinjau opsi pilihan yang dimuat"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Mencegah respons duplikat dalam baris"
// theme.advancedMode: "Advanced mode" => "Mode lanjutan"
// theme.backgroundCornerRadius: "Background and corner radius" => "Latar belakang dan radius sudut"
// theme.colorsTitle: "Colors" => "Warna"
// theme.font: "Font" => "Font"
// theme.lines: "Lines" => "Baris"
// theme.titleFont: "Title font" => "Font judul"
// theme.descriptionFont: "Description font" => "Font deskripsi"
// theme.shadow: "Shadow effects" => "Efek bayangan"
// ed.translateUsigAIFrom: "Translate from: " => "Terjemahkan dari: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Perbolehkan opsi Tolak Jawab"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Perbolehkan opsi Tidak Tahu"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Perbolehkan opsi Tolak Jawab"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Perbolehkan opsi Tidak Tahu"
// pv.contain: "Contain" => "Mengandung"
// pv.cover: "Cover" => "Menutupi"
// pv.fill: "Fill" => "Isi"

// pe.transposeData: "Transpose rows to columns" => "Mengubah urutan baris menjadi kolom"
// layout.panel: "Layout" => "Tata letak"
// layout.question: "Layout" => "Tata letak"
// layout.base: "Layout" => "Tata letak"
// panel.name: "Panel name" => "Nama panel"
// panel.title: "Panel title" => "Judul panel"
// panel.description: "Panel description" => "Deskripsi panel"
// panel.visibleIf: "Make the panel visible if" => "Buat panel terlihat jika"
// panel.requiredIf: "Make the panel required if" => "Buat panel diperlukan jika"
// panel.questionOrder: "Question order within the panel" => "Urutan pertanyaan dalam panel"
// panel.startWithNewLine: "Display the panel on a new line" => "Menampilkan panel pada baris baru"
// panel.state: "Panel collapse state" => "Status keruntuhan panel"
// panel.width: "Inline panel width" => "Lebar panel sejajar"
// panel.minWidth: "Minimum panel width" => "Lebar panel minimum"
// panel.maxWidth: "Maximum panel width" => "Lebar panel maksimum"
// paneldynamic.name: "Panel name" => "Nama panel"
// paneldynamic.title: "Panel title" => "Judul panel"
// paneldynamic.description: "Panel description" => "Deskripsi panel"
// paneldynamic.visibleIf: "Make the panel visible if" => "Buat panel terlihat jika"
// paneldynamic.requiredIf: "Make the panel required if" => "Buat panel diperlukan jika"
// paneldynamic.page: "Move the panel to page" => "Memindahkan panel ke halaman"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Menampilkan panel pada baris baru"
// paneldynamic.state: "Panel collapse state" => "Status keruntuhan panel"
// paneldynamic.width: "Inline panel width" => "Lebar panel sejajar"
// paneldynamic.minWidth: "Minimum panel width" => "Lebar panel minimum"
// paneldynamic.maxWidth: "Maximum panel width" => "Lebar panel maksimum"
// paneldynamic.templateDescription: "Panel description pattern" => "Pola deskripsi panel"
// paneldynamic.templateTitle: "Panel title pattern" => "Pola judul panel"
// paneldynamic.noEntriesText: "Empty panel text" => "Teks panel kosong"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Pola judul tab"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Membuat panel individual terlihat jika"
// paneldynamic.hideNumber: "Hide the panel number" => "Menyembunyikan nomor panel"
// paneldynamic.titleLocation: "Panel title alignment" => "Perataan judul panel"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Perataan deskripsi panel"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Perataan judul pertanyaan"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Perataan pesan kesalahan"
// paneldynamic.newPanelPosition: "New panel location" => "Lokasi panel baru"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Cegah respons duplikat dalam pertanyaan berikut"
// question.name: "Question name" => "Nama pertanyaan"
// question.title: "Question title" => "Judul pertanyaan"
// question.description: "Question description" => "Deskripsi pertanyaan"
// question.visibleIf: "Make the question visible if" => "Buat pertanyaan terlihat jika"
// question.requiredIf: "Make the question required if" => "Buat pertanyaan diperlukan jika"
// question.state: "Question box collapse state" => "Status ciutkan kotak pertanyaan"
// question.hideNumber: "Hide the question number" => "Menyembunyikan nomor pertanyaan"
// question.titleLocation: "Question title alignment" => "Perataan judul pertanyaan"
// question.descriptionLocation: "Question description alignment" => "Perataan deskripsi pertanyaan"
// question.errorLocation: "Error message alignment" => "Perataan pesan kesalahan"
// question.indent: "Increase the inner indent" => "Tingkatkan indentasi batin"
// question.width: "Inline question width" => "Lebar pertanyaan sebaris"
// question.minWidth: "Minimum question width" => "Lebar pertanyaan minimum"
// question.maxWidth: "Maximum question width" => "Lebar pertanyaan maksimum"
// question.textUpdateMode: "Update input field value" => "Perbarui nilai bidang input"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Perlihatkan tombol Hapus di dalam area tanda tangan"
// signaturepad.penColor: "Stroke color" => "Warna goresan"
// comment.rows: "Input field height (in lines)" => "Tinggi bidang input (dalam baris)"
// expression.name: "Expression name" => "Nama ekspresi"
// expression.title: "Expression title" => "Judul ekspresi"
// expression.description: "Expression description" => "Deskripsi ekspresi"
// expression.expression: "Expression" => "Ekspresi"
// trigger.expression: "Expression" => "Ekspresi"
// calculatedvalue.expression: "Expression" => "Ekspresi"
// survey.description: "Survey description" => "Deskripsi survei"
// page.name: "Page name" => "Nama halaman"
// page.description: "Page description" => "Deskripsi halaman"
// page.visibleIf: "Make the page visible if" => "Membuat halaman terlihat jika"
// page.requiredIf: "Make the page required if" => "Buat halaman diperlukan jika"
// page.questionOrder: "Question order on the page" => "Urutan pertanyaan di halaman"
// matrixdropdowncolumn.name: "Column name" => "Nama kolom"
// matrixdropdowncolumn.title: "Column title" => "Judul kolom"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Mencegah respons duplikat"
// matrixdropdowncolumn.width: "Column width" => "Lebar kolom"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Lebar kolom minimum"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Tinggi bidang input (dalam baris)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Membuat kolom terlihat jika"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Buat kolom diperlukan jika"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Setiap opsi dalam kolom terpisah"
// multipletextitem.name: "Name" => "Nama"
// multipletextitem.title: "Title" => "Titel"
// pe.rateDescriptionLocation: "Label alignment" => "Perataan label"
// pe.cellErrorLocation: "Cell error message alignment" => "Perataan pesan kesalahan sel"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Anda belum memiliki kolom apa pun"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Anda belum memiliki baris"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Anda belum memiliki aturan validasi apa pun"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Anda belum memiliki variabel khusus"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Anda belum memiliki pemicu apa pun"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Anda belum memiliki tautan apa pun"
// pe.addNew@columns: "Add new column" => "Tambahkan kolom baru"
// pe.addNew@rows: "Add new row" => "Menambahkan baris baru"
// pe.addNew@validators: "Add new rule" => "Tambahkan aturan baru"
// pe.addNew@calculatedValues: "Add new variable" => "Tambahkan variabel baru"
// pe.addNew@triggers: "Add new trigger" => "Tambahkan pemicu baru"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Tambahkan URL baru"
// choicesbyurl.url: "Web service's URL" => "URL layanan web"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Menampilkan judul halaman di bilah kemajuan"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Menampilkan nomor halaman di bilah kemajuan"
// itemvalue.visibleIf: "Make the option visible if" => "Buat opsi terlihat jika"
// itemvalue.enableIf: "Make the option selectable if" => "Buat opsi dapat dipilih jika"
// panel.layout: "Panel Layout" => "Tata Letak Panel"
// tabs.questionSettings: "Question Settings" => "Pengaturan Pertanyaan"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Mis.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Mis.: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Mis.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Contoh: 6in"
// pe.minWidth_placeholder: "Ex.: 600px" => "Contoh: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Contoh: 50%"
// pv.selected: "Selected" => "Dipilih"
// pv.unselected: "Unselected" => "Tidak dipilih"
// pv.center: "Center" => "Pusat"
// pv.middle: "Middle" => "Tengah"
// pv.next: "Next" => "Depan"
// pv.last: "Last" => "Terakhir"
// clearIfInvisible.none: "Never" => "Tidak pernah"
// questionsOnPageMode.standard: "Original structure" => "Struktur asli"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Tampilkan semua pertanyaan di satu halaman"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Tampilkan pertanyaan tunggal per halaman"
// pv.auto: "Auto" => "Auto"
// panelsState.firstExpanded: "First expanded" => "Pertama diperluas"
// rateColorMode.scale: "Scale" => "Sisik"
// scaleColorMode.monochrome: "Monochrome" => "Monokrom"
// scaleColorMode.colored: "Colored" => "Berwarna"
// state.default: "Locked" => "Terkunci"
// showQuestionNumbers.default: "Auto-numbering" => "Penomoran otomatis"
// showQuestionNumbers.on: "Auto-numbering" => "Penomoran otomatis"
// showQuestionNumbers.onPage: "Reset on each page" => "Setel ulang di setiap halaman"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Setel ulang pada setiap panel"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Setel ulang pada setiap panel"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Lanjutkan di seluruh survei"
// showQuestionNumbers.off: "No numbering" => "Tanpa penomoran"
// descriptionLocation.underTitle: "Under the question title" => "Di bawah judul pertanyaan"
// descriptionLocation.underInput: "Under the input field" => "Di bawah bidang input"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Di samping pilihan"
// selectToRankAreasLayout.vertical: "Above choices" => "Pilihan di atas"
// displayStyle.decimal: "Decimal" => "Desimal"
// displayStyle.currency: "Currency" => "Mata uang"
// displayStyle.percent: "Percentage" => "Persentase"
// displayStyle.date: "Date" => "Tanggal"
// totalDisplayStyle.decimal: "Decimal" => "Desimal"
// totalDisplayStyle.currency: "Currency" => "Mata uang"
// totalDisplayStyle.percent: "Percentage" => "Persentase"
// totalDisplayStyle.date: "Date" => "Tanggal"
// rowOrder.initial: "Original" => "Asli"
// questionOrder.initial: "Original" => "Asli"
// showProgressBar.aboveheader: "Above the header" => "Di atas header"
// showProgressBar.belowheader: "Below the header" => "Di bawah header"
// pv.sum: "Sum" => "Jumlah"
// pv.count: "Count" => "Hitung"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Maks"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Berisi"
// searchMode.startsWith: "Starts with" => "Dimulai dengan"
// panel.name: "A panel ID that is not visible to respondents." => "ID panel yang tidak terlihat oleh responden."
// panel.description: "Type a panel subtitle." => "Ketik subtitle panel."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas panel."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk panel."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Berlaku untuk semua pertanyaan dalam panel ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Mengatur lokasi pesan kesalahan sehubungan dengan semua pertanyaan dalam panel. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Menyimpan urutan pertanyaan asli atau mengacaknya. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei."
// panel.page: "Repositions the panel to the end of a selected page." => "Memposisikan ulang panel ke akhir halaman yang dipilih."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Menambahkan spasi atau margin antara konten panel dan batas kiri kotak panel."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Batalkan pilihan untuk menampilkan panel dalam satu baris dengan pertanyaan atau panel sebelumnya. Pengaturan tidak berlaku jika panel adalah elemen pertama dalam formulir Anda."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Pilih dari: \"Diperluas\" - panel ditampilkan secara penuh dan dapat diciutkan; \"Collapsed\" - panel hanya menampilkan judul dan deskripsi dan dapat diperluas; \"Terkunci\" - panel ditampilkan secara penuh dan tidak dapat diciutkan."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Mengatur lebar panel secara proporsional dengan elemen survei lainnya di baris yang sama. Menerima nilai CSS (px, %, in, pt, dll.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "ID panel yang tidak terlihat oleh responden."
// paneldynamic.description: "Type a panel subtitle." => "Ketik subtitle panel."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas panel."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk panel."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Berlaku untuk semua pertanyaan dalam panel ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Mengatur lokasi pesan kesalahan sehubungan dengan semua pertanyaan dalam panel. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Memposisikan ulang panel ke akhir halaman yang dipilih."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Menambahkan spasi atau margin antara konten panel dan batas kiri kotak panel."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Batalkan pilihan untuk menampilkan panel dalam satu baris dengan pertanyaan atau panel sebelumnya. Pengaturan tidak berlaku jika panel adalah elemen pertama dalam formulir Anda."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Pilih dari: \"Diperluas\" - panel ditampilkan secara penuh dan dapat diciutkan; \"Collapsed\" - panel hanya menampilkan judul dan deskripsi dan dapat diperluas; \"Terkunci\" - panel ditampilkan secara penuh dan tidak dapat diciutkan."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Mengatur lebar panel secara proporsional dengan elemen survei lainnya di baris yang sama. Menerima nilai CSS (px, %, in, pt, dll.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Ketik template untuk judul panel dinamis. Gunakan {panelIndex} untuk posisi umum panel dan {visiblePanelIndex} untuk urutannya di antara panel yang terlihat. Masukkan tempat penampung ini ke dalam pola untuk menambahkan penomoran otomatis."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Ketik templat untuk judul tab. Gunakan {panelIndex} untuk posisi umum panel dan {visiblePanelIndex} untuk urutannya di antara panel yang terlihat. Masukkan tempat penampung ini ke dalam pola untuk menambahkan penomoran otomatis."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Pengaturan ini memungkinkan Anda mengontrol visibilitas masing-masing panel dalam panel dinamis. Gunakan placeholder '{panel}' untuk mereferensikan panel saat ini dalam ekspresi Anda."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Setelan ini secara otomatis diwarisi oleh semua pertanyaan dalam panel ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Di bawah judul panel\" secara default)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Menentukan posisi panel yang baru ditambahkan. Secara default, panel baru ditambahkan ke akhir. Pilih \"Next\" untuk memasukkan panel baru setelah yang sekarang."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Menduplikasi jawaban dari panel terakhir dan menetapkannya ke panel dinamis tambahan berikutnya."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Rujuk nama pertanyaan untuk mengharuskan pengguna memberikan respons unik untuk pertanyaan ini di setiap panel."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Pengaturan ini memungkinkan Anda menetapkan nilai jawaban default berdasarkan ekspresi. Ekspresi dapat mencakup perhitungan dasar - '{q1_id} + {q2_id}', ekspresi Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll. Nilai yang ditentukan oleh ekspresi ini berfungsi sebagai nilai default awal yang dapat ditimpa oleh input manual responden."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan kapan input responden diatur ulang ke nilai berdasarkan \"Ekspresi nilai default\" atau \"Atur ekspresi nilai\" atau ke nilai \"Jawaban default\" (jika salah satu diatur)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan kapan harus menjalankan \"Atur ekspresi nilai\" dan secara dinamis menetapkan nilai yang dihasilkan sebagai respons."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Tentukan ekspresi yang menentukan nilai yang akan ditetapkan saat kondisi dalam aturan \"Tetapkan nilai jika\" terpenuhi. Ekspresi dapat mencakup perhitungan dasar - '{q1_id} + {q2_id}', ekspresi Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll. Nilai yang ditentukan oleh ekspresi ini dapat ditimpa oleh input manual responden."
// question.name: "A question ID that is not visible to respondents." => "ID pertanyaan yang tidak terlihat oleh responden."
// question.description: "Type a question subtitle." => "Ketik subtitle pertanyaan."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas pertanyaan."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menonaktifkan mode baca-saja untuk pertanyaan."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah survei maju atau dikirim kecuali pertanyaan menerima jawaban."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Batalkan pilihan untuk menampilkan pertanyaan dalam satu baris dengan pertanyaan atau panel sebelumnya. Pengaturan tidak berlaku jika pertanyaan adalah elemen pertama dalam formulir Anda."
// question.page: "Repositions the question to the end of a selected page." => "Memposisikan ulang pertanyaan ke akhir halaman yang dipilih."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Pilih dari: \"Diperluas\" - kotak pertanyaan ditampilkan secara penuh dan dapat diciutkan; \"Diciutkan\" - kotak pertanyaan hanya menampilkan judul dan deskripsi dan dapat diperluas; \"Terkunci\" - kotak pertanyaan ditampilkan secara penuh dan tidak dapat diciutkan."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Mengganti aturan penyelarasan judul yang ditentukan pada tingkat panel, halaman, atau survei. Opsi \"Warisi\" menerapkan pengaturan tingkat yang lebih tinggi (jika diatur) atau pengaturan tingkat survei (\"Atas\" secara default)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Di bawah judul pertanyaan\" secara default)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Teratas\" secara default)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Menambahkan spasi atau margin antara konten pertanyaan dan batas kiri kotak pertanyaan."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Mengatur lebar pertanyaan secara proporsional dengan elemen survei lain di baris yang sama. Menerima nilai CSS (px, %, in, pt, dll.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan validasi untuk pertanyaan."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Pilih dari: \"On lost focus\" - nilai diperbarui ketika bidang input kehilangan fokus; \"Saat mengetik\" - nilainya diperbarui secara real-time, saat pengguna mengetik. Opsi \"Warisi\" menerapkan pengaturan tingkat survei (\"Pada fokus yang hilang\" secara default)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Anda dapat menggunakan layanan web apa pun sebagai sumber data untuk pertanyaan pilihan ganda. Untuk mengisi nilai pilihan, masukkan URL layanan yang menyediakan data."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Operasi perbandingan yang digunakan untuk memfilter daftar turun bawah."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Mengatur lebar area tanda tangan yang ditampilkan dan gambar yang dihasilkan."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Mengatur ketinggian area tanda tangan yang ditampilkan dan gambar yang dihasilkan."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Pilih apakah Anda ingin area tanda tangan mengisi semua ruang yang tersedia di dalam kotak pertanyaan sambil mempertahankan rasio aspek default 3:2. Saat nilai lebar dan tinggi kustom ditetapkan, pengaturan akan mempertahankan rasio aspek dimensi ini."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Menyesuaikan tinggi gambar dalam hasil survei."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Menyesuaikan lebar gambar dalam hasil survei."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Mengganti nilai tinggi minimum dan maksimum."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Mengganti nilai lebar minimum dan maksimum."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Nilai\" berfungsi sebagai ID item yang digunakan dalam aturan bersyarat; \"Teks\" ditampilkan kepada responden."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Pengaturan ini hanya mengubah ukuran bidang input dan tidak memengaruhi lebar kotak pertanyaan. Untuk membatasi panjang input yang diterima, buka <b>Validasi → Batas karakter maksimum</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Mengatur jumlah baris yang ditampilkan di bidang input. Jika input mengambil lebih banyak baris, bilah gulir akan muncul."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Pilih antara: \"Dapat Diedit\" - memungkinkan responden mengisi survei Anda; \"Read-only\" - menonaktifkan pengeditan formulir."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "ID kolom yang tidak terlihat oleh responden."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Saat diaktifkan untuk kolom, responden diharuskan memberikan respons unik untuk setiap pertanyaan dalam kolom ini."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Mengatur jumlah baris yang ditampilkan di bidang input. Jika input mengambil lebih banyak baris, bilah gulir akan muncul."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan visibilitas kolom."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk kolom."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Saat dipilih, buat kolom individual untuk setiap opsi pilihan."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Pilih dari: \"Statis\" - menetapkan lebar tetap; \"Responsif\" - membuat survei menempati lebar penuh layar; \"Otomatis\" - berlaku salah satu dari keduanya tergantung pada jenis pertanyaan yang digunakan."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Tempel tautan gambar (tanpa batas ukuran) atau klik ikon folder untuk menelusuri file dari komputer Anda (hingga 64 KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Mengatur lebar logo dalam satuan CSS (px, %, in, pt, dll.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Mengatur tinggi logo dalam satuan CSS (px, %, in, pt, dll.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Pilih dari: \"Tidak ada\" - gambar mempertahankan ukuran aslinya; \"Berisi\" - gambar diubah ukurannya agar pas dengan tetap mempertahankan rasio aspeknya; \"Cover\" - gambar mengisi seluruh kotak sambil mempertahankan rasio aspeknya; \"Isi\" - gambar direntangkan untuk mengisi kotak tanpa mempertahankan rasio aspeknya."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Mengatur visibilitas dan lokasi tombol navigasi pada halaman."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Mengatur visibilitas dan lokasi bilah kemajuan. Nilai \"Otomatis\" menampilkan bilah kemajuan di atas atau di bawah header survei."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Aktifkan halaman pratinjau hanya dengan semua atau pertanyaan yang dijawab."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Berlaku untuk semua pertanyaan dalam survei. Setelan ini dapat diganti dengan aturan penyelarasan judul di tingkat yang lebih rendah: panel, halaman, atau pertanyaan. Pengaturan tingkat yang lebih rendah akan menggantikan pengaturan tingkat yang lebih tinggi."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Simbol atau urutan simbol yang menunjukkan bahwa jawaban diperlukan."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Masukkan angka atau huruf yang ingin Anda gunakan untuk memulai penomoran."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Pilih apakah Anda ingin bidang input pertama pada setiap halaman siap untuk entri teks."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Menyimpan urutan pertanyaan asli atau mengacaknya. Efek pengaturan ini hanya terlihat di tab Pratinjau."
// pehelp.maxTextLength: "For text entry questions only." => "Hanya untuk pertanyaan entri teks."
// pehelp.maxCommentLength: "For question comments only." => "Hanya untuk komentar pertanyaan."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Pilih apakah Anda ingin komentar pertanyaan dan pertanyaan Teks Panjang bertambah tinggi secara otomatis berdasarkan panjang teks yang dimasukkan."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Hanya untuk komentar pertanyaan dan pertanyaan Teks Panjang."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Variabel kustom berfungsi sebagai variabel perantara atau tambahan yang digunakan dalam perhitungan formulir. Mereka mengambil input responden sebagai nilai sumber. Setiap variabel kustom memiliki nama unik dan ekspresi yang menjadi dasarnya."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Pilih apakah Anda ingin nilai terhitung ekspresi disimpan bersama dengan hasil survei."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Pemicu adalah peristiwa atau kondisi yang didasarkan pada ekspresi. Setelah ekspresi dievaluasi ke \"true\", pemicu memicu tindakan. Tindakan semacam itu secara opsional dapat memiliki pertanyaan target yang dipengaruhinya."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Pilih apakah akan menghapus nilai untuk pertanyaan yang disembunyikan oleh logika kondisional atau tidak dan kapan melakukannya."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Pilih dari: \"On lost focus\" - nilai diperbarui ketika bidang input kehilangan fokus; \"Saat mengetik\" - nilainya diperbarui secara real-time, saat pengguna mengetik."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Nilai kiri berfungsi sebagai ID kolom yang digunakan dalam aturan bersyarat, nilai kanan ditampilkan kepada responden."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Nilai kiri berfungsi sebagai ID baris yang digunakan dalam aturan bersyarat, nilai kanan ditampilkan kepada responden."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, in, pt, dll.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, in, pt, dll.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Mengatur lokasi pesan kesalahan dalam kaitannya dengan sel dengan input yang tidak valid. Opsi \"Warisi\" menerapkan pengaturan dari properti \"Perataan pesan kesalahan\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Ketika properti \"mencegah duplikat respons\" diaktifkan, responden mencoba untuk mengirimkan entri duplikat akan menerima pesan galat berikut."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Memungkinkan Anda menghitung nilai total berdasarkan ekspresi. Ekspresi dapat mencakup perhitungan dasar ('{q1_id} + {q2_id}'), ekspresi Boolean ('{age} > 60') dan fungsi ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Memicu prompt yang meminta konfirmasi penghapusan baris."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Menduplikasi jawaban dari baris terakhir dan menetapkannya ke baris dinamis berikutnya yang ditambahkan."
// pehelp.description: "Type a subtitle." => "Ketik subtitle."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Pilih bahasa untuk mulai membuat survei. Untuk menambahkan terjemahan, beralihlah ke bahasa baru dan terjemahkan teks asli di sini atau di tab Terjemahan."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Mengatur lokasi bagian detail dalam kaitannya dengan baris. Pilih dari: \"Tidak ada\" - tidak ada ekspansi yang ditambahkan; \"Di bawah baris\" - ekspansi baris ditempatkan di bawah setiap baris matriks; \"Di bawah baris, tampilkan satu baris ekspansi saja\" - ekspansi ditampilkan di bawah satu baris saja, ekspansi baris yang tersisa diciutkan."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Pilih dari: \"Tidak ada\" - gambar mempertahankan ukuran aslinya; \"Berisi\" - gambar diubah ukurannya agar pas dengan tetap mempertahankan rasio aspeknya; \"Cover\" - gambar mengisi seluruh kotak sambil mempertahankan rasio aspeknya; \"Isi\" - gambar direntangkan untuk mengisi kotak tanpa mempertahankan rasio aspeknya."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Secara bertahap meningkatkan ketinggian bidang input saat data dimasukkan. Mengganti setelan \"Tinggi bidang input (dalam baris)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Gagang pengubah ukuran (atau pegangan) muncul di sudut dan dapat diseret untuk mengubah ukuran bidang input."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Interval waktu dalam hitungan detik setelah survei maju secara otomatis ke halaman Terima Kasih."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Interval waktu dalam hitungan detik setelah survei maju secara otomatis ke halaman berikutnya."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Interval waktu dalam hitungan detik setelah survei maju secara otomatis ke halaman berikutnya."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas halaman."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk halaman."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Berlaku untuk semua pertanyaan dalam halaman ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan atau panel. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Teratas\" secara default)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Teratas\" secara default)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Menyimpan urutan pertanyaan asli atau mengacaknya. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Asli\" secara default). Efek pengaturan ini hanya terlihat di tab Pratinjau."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Mengatur visibilitas tombol navigasi di halaman. Opsi \"Warisi\" menerapkan pengaturan tingkat survei, yang defaultnya adalah \"Terlihat\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Pilih dari: \"Terkunci\" - pengguna tidak dapat memperluas atau menciutkan panel; \"Runtuhkan semua\" - semua panel dimulai dalam keadaan diciutkan; \"Perluas semua\" - semua panel dimulai dalam keadaan diperluas; \"Pertama diperluas\" - hanya panel pertama yang awalnya diperluas."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Masukkan nama properti bersama dalam array objek yang berisi URL file gambar atau video yang ingin Anda tampilkan di daftar pilihan."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Nilai kiri berfungsi sebagai ID item yang digunakan dalam aturan bersyarat, nilai yang tepat ditampilkan kepada responden."
// pehelp.title: "Type a user-friendly title to display." => "Ketik judul yang mudah digunakan untuk ditampilkan."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Memastikan bahwa pengguna tidak akan menyelesaikan survei sampai file diunggah."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, in, pt, dll.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, in, pt, dll.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Menerima nilai CSS (px, %, in, pt, dll.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Dalam tipe pertanyaan pilihan tunggal dan ganda, setiap opsi pilihan memiliki ID dan nilai tampilan. Saat dipilih, setelan ini akan menampilkan nilai tampilan, bukan nilai ID dalam pertanyaan HTML serta judul dinamis dan deskripsi elemen survei."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Pilih apakah akan menghapus nilai pertanyaan yang disembunyikan oleh logika kondisional atau tidak dan kapan melakukannya. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Setelah survei selesai\" secara default)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Pilih dari: \"Semua\" - menyalin semua opsi pilihan dari pertanyaan yang dipilih; \"Dipilih\" - secara dinamis menyalin hanya opsi pilihan yang dipilih; \"Tidak dipilih\" - secara dinamis hanya menyalin opsi pilihan yang tidak dipilih. Opsi \"Tidak Ada\" dan \"Lainnya\" disalin secara default jika diaktifkan dalam pertanyaan sumber."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Saat dipilih, pengguna dapat menyertakan input tambahan di kotak komentar terpisah."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Menampilkan setiap opsi pilihan khusus (\"Tidak Ada\", \"Lainnya\", \"Pilih Semua\") pada baris baru, bahkan saat menggunakan tata letak beberapa kolom."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Tentukan lokasi dalam himpunan data layanan tempat array objek target berada. Biarkan kosong jika URL sudah menunjuk ke array."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Masukkan nama properti seragam dalam array objek yang berisi nilai yang ingin Anda tampilkan di daftar pilihan."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Pilih untuk mengizinkan layanan mengembalikan respons atau array kosong."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan visibilitas semua opsi pilihan."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Nilai kiri berfungsi sebagai ID item yang digunakan dalam aturan bersyarat, nilai yang tepat ditampilkan kepada responden."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Otomatis\" memilih antara mode \"Tombol\" dan \"Tarik-turun\" berdasarkan lebar yang tersedia. Ketika lebar tidak cukup untuk menampilkan tombol, pertanyaan menampilkan dropdown."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Memungkinkan Anda menghubungkan pertanyaan yang menghasilkan hasil dalam berbagai format. Saat pertanyaan tersebut ditautkan bersama menggunakan ID gabungan, properti bersama ini akan menyimpan nilai pertanyaan yang dipilih."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Pilih apakah Anda ingin memperbarui konten menu drop-down agar sesuai dengan kueri pencarian yang diketik pengguna di bidang input."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Nilai yang harus disimpan dalam hasil survei ketika responden memberikan jawaban positif."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Nilai untuk disimpan dalam hasil survei ketika responden memberikan jawaban negatif."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Tidak disarankan untuk menonaktifkan opsi ini karena menimpa gambar Pratinjau dan menyulitkan pengguna untuk memahami apakah file telah diunggah."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Memicu prompt yang meminta konfirmasi penghapusan file."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Aktifkan untuk memberi peringkat hanya pada pilihan yang dipilih. Pengguna akan menyeret item yang dipilih dari daftar pilihan untuk memesannya di dalam area peringkat."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Masukkan daftar pilihan yang akan disarankan kepada responden saat masukan."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Pengaturan hanya mengubah ukuran bidang input dan tidak memengaruhi lebar kotak pertanyaan."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Mengatur lebar yang konsisten untuk semua label item dalam piksel"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Opsi \"Otomatis\" secara otomatis menentukan mode yang sesuai untuk tampilan - Gambar, Video, atau YouTube - berdasarkan URL sumber yang disediakan."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Berfungsi sebagai pengganti ketika gambar tidak dapat ditampilkan pada perangkat pengguna dan untuk tujuan aksesibilitas."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Menentukan warna emoji yang dipilih saat jenis ikon Peringkat diatur ke \"Smiley\". Pilih antara: \"Default\" - emoji yang dipilih muncul dalam warna survei default; \"Skala\" - emoji yang dipilih mewarisi warna dari skala peringkat."
// expression.name: "An expression ID that is not visible to respondents." => "ID ekspresi yang tidak terlihat oleh responden."
// expression.description: "Type an expression subtitle." => "Ketikkan subjudul ekspresi."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Ekspresi dapat mencakup perhitungan dasar ('{q1_id} + {q2_id}'), kondisi ('{age} > 60'), dan fungsi ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Pilih untuk menyimpan nilai opsi \"Lainnya\" sebagai properti terpisah dalam hasil survei."
// p.swapOrder: "Swap the order of Yes and No" => "Tukar urutan Ya dan Tidak"
// p.itemTitleWidth: "Item label width (in px)" => "Lebar label item (dalam px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Teks untuk memperlihatkan jika semua opsi dipilih"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Teks tempat penampung untuk area peringkat"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Selesaikan survei secara otomatis"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Pilih apakah Anda ingin survei selesai secara otomatis setelah responden menjawab semua pertanyaan."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Simpan nilai terselubung dalam hasil survei"
// patternmask.pattern: "Value pattern" => "Pola nilai"
// datetimemask.min: "Minimum value" => "Nilai minimum"
// datetimemask.max: "Maximum value" => "Nilai maksimum"
// numericmask.allowNegativeValues: "Allow negative values" => "Izinkan nilai negatif"
// numericmask.thousandsSeparator: "Thousands separator" => "Pemisah ribuan"
// numericmask.decimalSeparator: "Decimal separator" => "Pemisah desimal"
// numericmask.precision: "Value precision" => "Presisi nilai"
// numericmask.min: "Minimum value" => "Nilai minimum"
// numericmask.max: "Maximum value" => "Nilai maksimum"
// currencymask.prefix: "Currency prefix" => "Awalan mata uang"
// currencymask.suffix: "Currency suffix" => "Akhiran mata uang"
// pe.maskType: "Input mask type" => "Jenis masker input"
// maskTypes.patternmask: "Pattern" => "Pola"
// maskTypes.numericmask: "Numeric" => "Numerik"
// maskTypes.datetimemask: "Date and Time" => "Tanggal dan Waktu"
// maskTypes.currencymask: "Currency" => "Mata uang"
// tabs.mask: "Input Mask Settings" => "Pengaturan Masker Input"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Contoh: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Contoh: mm/dd/yyyy"
// pe.currencyprefix_placeholder: "Ex.: $" => "Contoh.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Contoh: USD"
// pv.textWrapEnabled: "Wrap choices" => "Pilihan bungkus"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Teks panjang dalam opsi pilihan akan secara otomatis menghasilkan jeda baris agar sesuai dengan menu tarik-turun. Batalkan pilihan jika Anda ingin teks dipotong."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Pilih apakah Anda ingin menyimpan nilai pertanyaan dengan masker yang diterapkan dalam hasil survei."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Pola dapat berisi literal string dan placeholder berikut: '9' - untuk digit; 'a' - untuk huruf besar atau kecil; '#' - untuk digit atau huruf besar atau kecil. Gunakan garis miring terbalik '\\' untuk melarikan diri dari karakter."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Pola dapat berisi karakter pemisah dan placeholder berikut: 'm' - untuk nomor bulan; 'mm' - untuk angka bulan, dengan nol di depannya untuk nilai satu digit; 'd' - untuk hari dalam sebulan; 'dd' - untuk hari dalam sebulan, dengan nol di depan untuk nilai satu digit; 'yy' - untuk dua digit terakhir tahun ini; 'yyyy' - untuk tahun empat digit."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Simbol yang digunakan untuk memisahkan bagian pecahan dari bagian bilangan bulat dari angka yang ditampilkan."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Simbol yang digunakan untuk memisahkan digit angka besar menjadi kelompok tiga."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Membatasi jumlah digit yang akan dipertahankan setelah koma desimal untuk angka yang ditampilkan."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Satu atau beberapa simbol yang akan ditampilkan sebelum nilai."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Satu atau beberapa simbol yang akan ditampilkan setelah nilai."
// ed.translationSource: "Source: " => "Sumber: "
// ed.translationTarget: "Target: " => "Target: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Halaman kosong. Seret elemen dari kotak alat atau klik tombol di bawah."
// maskTypes.none: "None" => "Tidak"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Membuat baris terlihat jika"
// itemvalue@rows.enableIf: "Make the row editable if" => "Membuat baris dapat diedit jika"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Teks tempat penampung dalam mode baca-saja atau pratinjau"
// pe.textWrapEnabled: "Wrap choices" => "Pilihan bungkus"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Opsi \"Otomatis\" secara otomatis menentukan mode yang sesuai untuk tampilan - Gambar, Video, atau YouTube - berdasarkan URL sumber yang disediakan."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Pilih antara \"Gambar\" dan \"Video\" untuk mengatur mode konten pemilih media. Jika \"Gambar\" dipilih, pastikan bahwa semua opsi yang disediakan adalah file gambar dalam format berikut: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Demikian pula, jika \"Video\" dipilih, pastikan bahwa semua opsi adalah tautan langsung ke file video dalam format berikut: MP4, MOV, WMV, FLV, AVI, MKV. Perhatikan bahwa tautan YouTube tidak didukung untuk opsi video."
// ed.selectFile: "Select a file" => "Pilih file"
// ed.removeFile: "Remove the file" => "Menghapus file"
// pe.searchMode: "Search Mode" => "Mode Pencarian"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Klik tombol \"Tambahkan Pertanyaan\" di bawah ini untuk mulai membuat formulir Anda."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Klik tombol \"Tambahkan Pertanyaan\" di bawah ini untuk menambahkan elemen baru ke halaman."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Klik tombol \"Tambahkan Pertanyaan\" di bawah ini untuk menambahkan elemen baru ke panel."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Klik tombol di bawah ini dan pilih gambar untuk diunggah"
// coloralpha.opacity: "Opacity" => "Opacity"
// font.family: "Font family" => "Keluarga font"
// font.color: "Color" => "Warna"
// font.placeholderColor: "Placeholder color" => "Warna tempat penampung"
// font.size: "Size" => "Tingginya"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Penampilan pertanyaan"
// theme.editorPanel: "Background and corner radius" => "Latar belakang dan radius sudut"
// theme.questionPanel: "Background and corner radius" => "Latar belakang dan radius sudut"
// theme.primaryColor: "Accent color" => "Warna aksen"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Opasitas latar belakang panel"
// theme.questionBackgroundTransparency: "Question background opacity" => "Opasitas latar belakang pertanyaan"
// theme.fontSize: "Font size" => "Ukuran font"
// theme.scale: "Scale" => "Sisik"
// theme.cornerRadius: "Corner radius" => "Radius sudut"
// theme.pageTitle: "Title font" => "Font judul"
// theme.pageDescription: "Description font" => "Font deskripsi"
// theme.questionTitle: "Title font" => "Font judul"
// theme.questionDescription: "Description font" => "Font deskripsi"
// theme.editorFont: "Font" => "Font"
// theme.backgroundOpacity: "Opacity" => "Opacity"
// theme.--sjs-font-family: "Font family" => "Keluarga font"
// theme.--sjs-general-backcolor-dim: "Background color" => "Warna latar belakang"
// theme.--sjs-primary-backcolor: "Accent background" => "Latar belakang aksen"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Latar depan aksen"
// theme.--sjs-shadow-small: "Shadow effects" => "Efek bayangan"
// theme.--sjs-shadow-inner: "Shadow effects" => "Efek bayangan"
// theme.--sjs-border-default: "Colors" => "Warna"
// header@header.headerView: "View" => "Melihat"
// header@header.logoPosition: "Logo position" => "Posisi logo"
// header@header.surveyTitle: "Survey title font" => "Font judul survei"
// header@header.surveyDescription: "Survey description font" => "Font deskripsi survei"
// header@header.headerTitle: "Survey title font" => "Font judul survei"
// header@header.headerDescription: "Survey description font" => "Font deskripsi survei"
// header@header.inheritWidthFrom: "Content area width" => "Lebar area konten"
// header@header.textAreaWidth: "Text width" => "Lebar teks"
// header@header.backgroundColorSwitch: "Background color" => "Warna latar belakang"
// header@header.backgroundImage: "Background image" => "Gambar latar belakang"
// header@header.backgroundImageOpacity: "Opacity" => "Opacity"
// header@header.overlapEnabled: "Overlap" => "Tumpang tindih"
// header@header.logoPositionX: "Logo position" => "Posisi logo"
// header@header.titlePositionX: "Title position" => "Posisi judul"
// header@header.descriptionPositionX: "Description position" => "Deskripsi posisi"
// weight.400: "Regular" => "Biasa"
// weight.600: "Heavy" => "Berat"
// weight.700: "Semi-bold" => "Semi-tebal"
// weight.800: "Bold" => "Berani"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Menutupi"
// backgroundImageFit.contain: "Contain" => "Mengandung"
// backgroundImageFit.fill: "Stretch" => "Merentangkan"
// backgroundImageFit.tile: "Tile" => "Ubin"
// backgroundImageAttachment.fixed: "Fixed" => "Tetap"
// backgroundImageAttachment.scroll: "Scroll" => "Gulir"
// headerView.basic: "Basic" => "Dasar"
// headerView.advanced: "Advanced" => "Maju"
// inheritWidthFrom.survey: "Same as survey" => "Sama seperti survei"
// inheritWidthFrom.container: "Fit to container" => "Sesuai dengan kontainer"
// backgroundColorSwitch.none: "None" => "Tidak"
// backgroundColorSwitch.accentColor: "Accent color" => "Warna aksen"
// backgroundColorSwitch.custom: "Custom" => "Adat"
// colorPalette.light: "Light" => "Ringan"
// colorPalette.dark: "Dark" => "Gelap"
// isPanelless.false: "Default" => "Default"
// isPanelless.true: "Without Panels" => "Tanpa Panel"
// theme.cornerRadius: "Corner radius" => "Radius sudut"
// theme.fontFamily: "Font family" => "Keluarga font"
// theme.fontWeightRegular: "Regular" => "Biasa"
// theme.fontWeightHeavy: "Heavy" => "Berat"
// theme.fontWeightSemiBold: "Semi-bold" => "Semi-tebal"
// theme.fontWeightBold: "Bold" => "Berani"
// theme.color: "Color" => "Warna"
// theme.placeholderColor: "Placeholder color" => "Warna tempat penampung"
// theme.size: "Size" => "Tingginya"
// theme.opacity: "Opacity" => "Opacity"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Ketik untuk mencari..."
// ed.toolboxNoResultsFound: "No results found" => "Tidak ada hasil yang ditemukan"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Tempat penampung judul tab"
// theme.--sjs-special-red: "Error messages" => "Pesan kesalahan"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Teks fallback untuk judul tab yang berlaku saat pola judul tab tidak menghasilkan nilai yang berarti."
// theme.fontColor: "Font color" => "Warna font"
// theme.backgroundColor: "Background color" => "Warna latar belakang"
// pe.questionTitleWidth: "Question title width" => "Lebar judul pertanyaan"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Pilih file atau tempel tautan file..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Contoh: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Mengatur lebar yang konsisten untuk judul pertanyaan bila disejajarkan di sebelah kiri kotak pertanyaan. Menerima nilai CSS (px, %, in, pt, dll.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Mengatur lebar yang konsisten untuk judul pertanyaan bila disejajarkan di sebelah kiri kotak pertanyaan. Menerima nilai CSS (px, %, in, pt, dll.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Tinggi area komentar (dalam baris)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Mengatur jumlah baris yang ditampilkan di area teks untuk komentar pertanyaan. Dalam input mengambil lebih banyak baris, bilah gulir muncul."
// pe.enabled: "Enabled" => "Diaktifkan"
// pe.disabled: "Disabled" => "Cacat"
// pe.inherit: "Inherit" => "Mewarisi"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Memvalidasi bidang kosong saat fokus hilang"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Contoh: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Contoh: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Aktifkan opsi ini untuk memicu validasi saat pengguna berfokus pada bidang input kosong dan kemudian meninggalkannya tanpa membuat perubahan apa pun."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Mengatur opsi pilihan dalam tata letak multi-kolom. Saat diatur ke 0, opsi ditampilkan dalam satu baris."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Pengaturan ini hanya berlaku untuk pertanyaan di luar panel."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Menetapkan warna tambahan yang menyoroti elemen survei utama."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Menyesuaikan transparansi panel dan kotak pertanyaan relatif terhadap latar belakang survei."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Menyesuaikan transparansi elemen input relatif terhadap latar belakang survei."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Mengatur jari-jari sudut untuk semua elemen persegi panjang. Aktifkan Mode Lanjutan jika Anda ingin mengatur nilai radius sudut individual untuk elemen input atau panel dan kotak pertanyaan."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Mengatur warna latar belakang utama survei."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Opsi \"Sama seperti wadah\" secara otomatis menyesuaikan lebar area konten header agar sesuai dengan elemen HTML tempat survei ditempatkan."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Lebar area header yang berisi judul dan deskripsi survei, diukur dalam piksel."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Menerima nilai %"
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Menerima nilai px."
// p.effectiveColSpan: "Column span" => "Rentang kolom"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Sama seperti survei"
// progressBarInheritWidthFrom.container: "Same as container" => "Sama seperti wadah"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Menampilkan pratinjau thumbnail untuk file yang diunggah jika memungkinkan. Batalkan pilihan jika Anda ingin menampilkan ikon file sebagai gantinya."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Opsi \"Sama seperti wadah\" secara otomatis menyesuaikan lebar area bilah kemajuan agar sesuai dengan elemen HTML tempat survei ditempatkan."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Lebar area bilah kemajuan"
// maskType.none: "None" => "Tidak"
// maskType.pattern: "Pattern" => "Pola"
// maskType.numeric: "Numeric" => "Numerik"
// maskType.datetime: "Date and Time" => "Tanggal dan Waktu"
// maskType.currency: "Currency" => "Mata uang"

// inputTextAlignment.auto: "Auto" => "Auto"
// inputTextAlignment.left: "Left" => "Kiri"
// inputTextAlignment.right: "Right" => "Kanan"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Pilih cara menyelaraskan nilai input dalam bidang. Pengaturan default \"Otomatis\" menyelaraskan nilai input ke kanan jika penyembunyian mata uang atau numerik diterapkan dan ke kiri jika tidak."
// p.inputTextAlignment: "Input value alignment" => "Penyelarasan nilai input"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Menampilkan bilah kemajuan"
// paneldynamic.showProgressBar: "Show the progress bar" => "Menampilkan bilah kemajuan"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Perataan bilah kemajuan"
// pv.carousel: "Carousel" => "Korsel"
// progressBarLocation.top: "Top" => "Puncak"
// progressBarLocation.bottom: "Bottom" => "Dasar"
// progressBarLocation.topBottom: "Top and bottom" => "Atas dan bawah"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Mengatur opsi pilihan dalam tata letak multi-kolom. Saat diatur ke 0, opsi ditampilkan dalam satu baris. Saat diatur ke -1, nilai aktual diwarisi dari properti \"Jumlah kolom berlapis\" dari matriks induk."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "Tautan YouTube tidak didukung."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Mulai mengonfigurasi formulir Anda"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Klik ikon kategori apa pun untuk menjelajahi pengaturan survei. Pengaturan tambahan akan tersedia setelah Anda menambahkan elemen survei ke permukaan desain."
// pe.caseInsensitive: "Case insensitive" => "Tidak peka huruf besar/kecil"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Pilih apakah huruf besar dan kecil dalam ekspresi reguler harus diperlakukan sebagai setara."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Formulir Anda kosong"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Formulir Anda kosong"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Seret elemen dari kotak alat atau klik tombol di bawah ini."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Seret elemen dari kotak alat atau klik tombol di bawah ini."
// ed.previewPlaceholderTitle: "No preview" => "Tidak ada pratinjau"
// ed.previewPlaceholderTitleMobile: "No preview" => "Tidak ada pratinjau"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Survei tidak berisi elemen yang terlihat."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Survei tidak berisi elemen yang terlihat."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Tidak ada ikatan untuk diterjemahkan"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Tidak ada ikatan untuk diterjemahkan"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Tambahkan elemen ke formulir Anda atau ubah filter string di toolbar."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Tambahkan elemen ke formulir Anda atau ubah filter string di toolbar."
// lg.logicPlaceholderTitle: "No logical rules" => "Tidak ada aturan logis"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Tidak ada aturan logis"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Buat aturan untuk menyesuaikan alur survei."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Buat aturan untuk menyesuaikan alur survei."
// pe.showTimer: "Use a timer" => "Gunakan pengatur waktu"
// theme.advancedMode: "Advanced mode" => "Mode lanjutan"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Mengatur lokasi pengatur waktu pada halaman."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Saat diatur ke 0, tinggi dihitung secara otomatis untuk mengakomodasi konten header."
// p.mobileHeight: "Height on smartphones" => "Tinggi di smartphone"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Saat diaktifkan, bagian atas survei melapisi bagian bawah header."
// ed.creatorSettingTitle: "Creator Settings" => "Pengaturan Kreator"
// tabs.accentColors: "Accent colors" => "Warna aksen"
// tabs.scaling: "Scaling" => "Scaling"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Menetapkan nomor untuk pertanyaan yang bersarang dalam panel ini."
// creatortheme.--sjs-special-background: "Surface background" => "Latar belakang permukaan"
// creatortheme.--sjs-primary-background-500: "Primary" => "Utama"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Sekunder"
// creatortheme.surfaceScale: "Surface" => "Permukaan"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Antarmuka pengguna"
// creatortheme.fontScale: "Font" => "Font"
// names.sc2020: "Survey Creator 2020" => "Pembuat Survei 2020"
// names.default-light: "Light" => "Ringan"
// names.default-dark: "Dark" => "Gelap"
// names.default-contrast: "Contrast" => "Kontras"
// panel.showNumber: "Number this panel" => "Nomor panel ini"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Pilih apakah Anda ingin survei maju secara otomatis ke halaman berikutnya setelah responden menjawab semua pertanyaan di halaman saat ini. Fitur ini tidak akan berlaku jika pertanyaan terakhir di halaman bersifat terbuka atau mengizinkan banyak jawaban."
// autocomplete.name: "Full Name" => "Nama lengkap"
// autocomplete.honorific-prefix: "Prefix" => "Awalan"
// autocomplete.given-name: "First Name" => "Nama depan"
// autocomplete.additional-name: "Middle Name" => "Nama tengah"
// autocomplete.family-name: "Last Name" => "Nama Belakang"
// autocomplete.honorific-suffix: "Suffix" => "Akhiran"
// autocomplete.nickname: "Nickname" => "Nickname"
// autocomplete.organization-title: "Job Title" => "Judul Pekerjaan"
// autocomplete.username: "User Name" => "Nama pengguna"
// autocomplete.new-password: "New Password" => "Kata sandi baru"
// autocomplete.current-password: "Current Password" => "Kata Sandi Saat Ini"
// autocomplete.organization: "Organization Name" => "Nama Organisasi"
// autocomplete.street-address: "Full Street Address" => "Alamat Jalan Lengkap"
// autocomplete.address-line1: "Address Line 1" => "Baris Alamat 1"
// autocomplete.address-line2: "Address Line 2" => "Baris Alamat 2"
// autocomplete.address-line3: "Address Line 3" => "Baris Alamat 3"
// autocomplete.address-level4: "Level 4 Address" => "Alamat Level 4"
// autocomplete.address-level3: "Level 3 Address" => "Alamat Level 3"
// autocomplete.address-level2: "Level 2 Address" => "Alamat Level 2"
// autocomplete.address-level1: "Level 1 Address" => "Alamat Level 1"
// autocomplete.country: "Country Code" => "Kode Negara"
// autocomplete.country-name: "Country Name" => "Nama Negara"
// autocomplete.postal-code: "Postal Code" => "Kode Pos"
// autocomplete.cc-name: "Cardholder Name" => "Nama Pemegang Kartu"
// autocomplete.cc-given-name: "Cardholder First Name" => "Nama Depan Pemegang Kartu"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Nama Tengah Pemegang Kartu"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Nama Belakang Pemegang Kartu"
// autocomplete.cc-number: "Credit Card Number" => "Nomor Kartu Kredit"
// autocomplete.cc-exp: "Expiration Date" => "Tanggal kedaluwarsa"
// autocomplete.cc-exp-month: "Expiration Month" => "Bulan Kedaluwarsa"
// autocomplete.cc-exp-year: "Expiration Year" => "Tahun Kedaluwarsa"
// autocomplete.cc-csc: "Card Security Code" => "Kode Keamanan Kartu"
// autocomplete.cc-type: "Credit Card Type" => "Jenis Kartu Kredit"
// autocomplete.transaction-currency: "Transaction Currency" => "Mata Uang Transaksi"
// autocomplete.transaction-amount: "Transaction Amount" => "Jumlah Transaksi"
// autocomplete.language: "Preferred Language" => "Bahasa Pilihan"
// autocomplete.bday: "Birthday" => "Ulang tahun"
// autocomplete.bday-day: "Birthday Day" => "Hari Ulang Tahun"
// autocomplete.bday-month: "Birthday Month" => "Bulan Ulang Tahun"
// autocomplete.bday-year: "Birthday Year" => "Tahun Ulang Tahun"
// autocomplete.sex: "Gender" => "Jenis kelamin"
// autocomplete.url: "Website URL" => "URL situs web"
// autocomplete.photo: "Profile Photo" => "Foto Profil"
// autocomplete.tel: "Telephone Number" => "Nomor Telepon"
// autocomplete.tel-country-code: "Country Code for Phone" => "Kode Negara untuk Telepon"
// autocomplete.tel-national: "National Telephone Number" => "Nomor Telepon Nasional"
// autocomplete.tel-area-code: "Area Code" => "Kode Area"
// autocomplete.tel-local: "Local Phone Number" => "Nomor Telepon Lokal"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Awalan Telepon Lokal"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Akhiran Telepon Lokal"
// autocomplete.tel-extension: "Phone Extension" => "Ekstensi Telepon"
// autocomplete.email: "Email Address" => "Alamat Email"
// autocomplete.impp: "Instant Messaging Protocol" => "Protokol Pesan Instan"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Kunci status perluasan/ciutkan untuk pertanyaan"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Anda belum memiliki halaman apa pun"
// pe.addNew@pages: "Add new page" => "Tambahkan halaman baru"
// ed.zoomInTooltip: "Zoom In" => "Perbesar"
// ed.zoomOutTooltip: "Zoom Out" => "Perkecil"
// tabs.surfaceBackground: "Surface Background" => "Latar Belakang Permukaan"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Gunakan jawaban dari entri terakhir sebagai default"
// colors.gray: "Gray" => "Abu-abu"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Perataan tombol navigasi"
// pv.allQuestions: "Show all questions" => "Tampilkan semua pertanyaan"
// pv.answeredQuestions: "Show answered questions only" => "Tampilkan pertanyaan yang dijawab saja"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Mengatur lokasi tombol navigasi pada halaman."
// pe.size: "Input field width (in characters)" => "Lebar bidang input (dalam karakter)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Gunakan nilai dari matriks, kolom atau pertanyaan panel berikut sebagai ID pilihan"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Gunakan nilai dari kolom matriks atau pertanyaan panel berikut sebagai teks pilihan"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "Dalam jenis pertanyaan pilihan tunggal dan pilihan ganda, setiap opsi pilihan memiliki ID dan nilai tampilan. Pengaturan ini menentukan kolom matriks atau pertanyaan panel mana yang harus memberikan ID."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "Dalam jenis pertanyaan pilihan tunggal dan pilihan ganda, setiap opsi pilihan memiliki ID dan nilai tampilan. Pengaturan ini menentukan kolom matriks atau pertanyaan panel mana yang harus menyediakan teks tampilan."
// pe.progressBarLocation: "Progress bar alignment" => "Perataan bilah kemajuan"
// progressBarLocation.topbottom: "Top and bottom" => "Atas dan bawah"
// progressBarLocation.aboveheader: "Above the header" => "Di atas header"
// progressBarLocation.belowheader: "Below the header" => "Di bawah header"
// progressBarLocation.off: "Hidden" => "Sembunyi"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Mengatur lokasi bilah progres. Nilai \"Otomatis\" menampilkan bilah kemajuan di atas atau di bawah header survei."
// survey.readOnly: "Make the survey read-only" => "Membuat survei hanya baca"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Pilih jika Anda ingin mencegah responden mengisi survei Anda."
// paneldynamic.showNumber: "Number the panel" => "Nomor panel"
// question.showNumber: "Number this question" => "Nomor pertanyaan ini"
// pe.previewMode: "Preview mode" => "Mode pratinjau"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Mengaktifkan tata letak kisi"
// pe.maskSettings: "Mask settings" => "Pengaturan topeng"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Perataan pesan kesalahan perluasan baris"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Mengatur lokasi pesan kesalahan untuk pertanyaan yang bertumpuk di bagian detail. Opsi \"Wariskan\" menerapkan pengaturan dari properti \"Perataan pesan kesalahan\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Kolom tata letak kisi"
// pe.startPageTitlePlaceholder: "Start Page" => "Halaman Awal"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Lebar efektif, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Lebar judul pertanyaan, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Anda belum memiliki kolom tata letak"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Menentukan berapa banyak kolom panel ini dalam tata letak kisi."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Tabel ini memungkinkan Anda mengonfigurasi setiap kolom kisi dalam panel. Ini secara otomatis mengatur persentase lebar untuk setiap kolom berdasarkan jumlah maksimum elemen dalam satu baris. Untuk menyesuaikan tata letak kisi, sesuaikan nilai ini secara manual dan tentukan lebar judul untuk semua pertanyaan di setiap kolom."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Pembuat Survei memungkinkan Anda menyesuaikan lebar sebaris elemen formulir secara manual untuk mengontrol tata letak. Jika ini tidak menghasilkan hasil yang diinginkan, Anda dapat mengaktifkan tata letak kisi, yang menyusun elemen bentuk menggunakan sistem berbasis kolom. Untuk mengonfigurasi kolom tata letak, pilih halaman atau panel dan gunakan tabel \"Pengaturan Pertanyaan\" → \"Kolom kisi\". Untuk menyesuaikan berapa banyak kolom rentang pertanyaan, pilih dan atur nilai yang diinginkan di bidang \"Tata Letak\" → \"Rentang kolom\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Menentukan berapa banyak kolom yang mencakup pertanyaan ini dalam tata letak kisi."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Tabel ini memungkinkan Anda mengonfigurasi setiap kolom kisi pada halaman. Ini secara otomatis mengatur persentase lebar untuk setiap kolom berdasarkan jumlah maksimum elemen dalam satu baris. Untuk menyesuaikan tata letak kisi, sesuaikan nilai ini secara manual dan tentukan lebar judul untuk semua pertanyaan di setiap kolom."

// ed.expandTooltip: "Expand" => "Memperluas"
// ed.collapseTooltip: "Collapse" => "Roboh"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Contoh: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Mengatur lebar yang konsisten untuk semua label item. Menerima nilai CSS (px, %, in, pt, dll.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Perbesar hingga 100%"
// ed.addLanguageTooltip: "Add Language" => "Tambahkan Bahasa"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Mengatur jumlah baris yang ditampilkan di area teks untuk komentar pertanyaan. Jika input memakan lebih banyak baris, bilah gulir akan muncul."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Nilai tampilan default untuk teks dinamis"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Nilai yang ditampilkan dalam pertanyaan HTML dan dalam judul dinamis dan deskripsi elemen survei saat nilai pertanyaan kosong."
// showQuestionNumbers.recursive: "Recursive numbering" => "Penomoran rekursif"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Lebar judul pertanyaan"
// pe.allowCustomChoices: "Allow custom choices" => "Izinkan pilihan khusus"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Mengatur lebar yang konsisten untuk judul pertanyaan saat disejajarkan ke kiri kotak pertanyaan mereka. Menerima nilai CSS (px, %, in, pt, dll.)."
// page.name: "A page ID that is not visible to respondents." => "ID halaman yang tidak terlihat oleh responden."
// page.description: "Type a page subtitle." => "Ketik subjudul halaman."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Keterangan yang ditampilkan pada tombol navigasi di bilah kemajuan atau daftar isi (TOC). Jika Anda membiarkan bidang ini kosong, tombol navigasi akan menggunakan judul halaman atau nama halaman. Untuk mengaktifkan bilah kemajuan atau TOC, buka \"Survei\" → \"Navigasi\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Pilih untuk mengizinkan responden menambahkan pilihan mereka sendiri jika opsi yang diinginkan tidak tersedia di menu drop-down. Pilihan khusus hanya akan disimpan sementara selama sesi browser saat ini."