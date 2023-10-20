import { editorLocalization } from "survey-creator-core";

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
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Survei",
    settings: "Pengaturan Survei",
    settingsTooltip: "Buka pengaturan",
    surveySettings: "Pengaturan Survei",
    surveySettingsTooltip: "Buka pengaturan survei",
    themeSettings: "Pengaturan Tema",
    themeSettingsTooltip: "Buka pengaturan tema",
    showPanel: "Tampilkan Panel",
    hidePanel: "Sembunyikan Panel",
    prevSelected: "Pilih sebelumnya",
    nextSelected: "Pilih selanjutnya",
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
    testSurvey: "Coba Survei",
    themeSurvey: "Tema",
    defaultV2Theme: "Default",
    modernTheme: "Modern",
    defaultTheme: "Default (warisan)",
    testSurveyAgain: "Coba Survei Lagi",
    testSurveyWidth: "Lebar survei: ",
    navigateToMsg: "Anda harus menavigasi ke",
    logic: "Logika",
    embedSurvey: "Embed Survei",
    translation: "Terjemahan",
    saveSurvey: "Simpan Survei",
    saveSurveyTooltip: "Simpan Survei",
    designer: "Rancangan Survei",
    jsonEditor: "Pengubah JSON",
    jsonHideErrors: "Menyembunyikan kesalahan",
    jsonShowErrors: "Tampilkan kesalahan",
    undo: "Urungkan",
    redo: "Ulangi",
    undoTooltip: "Mengurungkan perubahan terakhir",
    redoTooltip: "Mengulangi perubahan",
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
    propertyGridFilteredTextPlaceholder: "Ketik untuk mencari...",
    toolboxGeneralCategory: "Umum",
    toolboxChoiceCategory: "Pertanyaan Pilihan",
    toolboxTextCategory: "Pertanyaan Input Teks",
    toolboxContainersCategory: "Wadah",
    toolboxMatrixCategory: "Pertanyaan Matriks",
    toolboxMiscCategory: "Misc",
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
    translationDialogTitle: "String yang tidak diterjemahkan",
    translationMergeLocaleWithDefault: "Gabungkan {0} dengan default locale",
    translationPlaceHolder: "Terjemahan...",
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
    htmlPlaceHolder: "Konten HTML akan ada di sini.",
    panelPlaceHolder: "Jatuhkan pertanyaan dari kotak alat di sini.",
    surveyPlaceHolder: "Survei kosong. Seret elemen dari kotak alat atau klik tombol di bawah.",
    imagePlaceHolder: "Seret dan lepas gambar di sini atau klik tombol di bawah ini dan pilih gambar untuk diunggah",
    imageChooseImage: "Pilih Gambar",
    addNewTypeQuestion: "Tambahkan {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "Auto",
    choices_Item: "Benda ",
    lg: {
      addNewItem: "Tambahkan Aturan Baru",
      empty_tab: "Buat aturan untuk menyesuaikan alur survei.",
      page_visibilityName: "Tampilkan (sembunyikan) halaman",
      page_enableName: "Aktifkan (nonaktifkan) halaman",
      panel_visibilityName: "Tampilkan (sembunyikan) panel",
      panel_enableName: "Aktifkan (nonaktifkan) panel",
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
      question_resetValueText: "reset nilai untuk pertanyaan: {0}",
      question_setValueText: "Tetapkan nilai: {1} pertanyaan: {0}",
      column_visibilityText: "Membuat kolom {0} pertanyaan {1} terlihat", //{0} column name, {1} question name
      column_enableText: "Buat kolom {0} pertanyaan {1} aktifkan", //{0} column name, {1} question name
      column_requireText: "membuat kolom {0} pertanyaan {1} diperlukan", //{0} column name, {1} question name
      column_resetValueText: "Setel ulang nilai sel untuk kolom: {0}",
      column_setValueText: "Menetapkan nilai sel: {1} ke kolom: {0}",
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
      uncompletedRule_cancel: "Tidak, saya ingin menyelesaikan aturan",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
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
    expressionHelp: "Silahkan masukan sebuah ekspresi. Anda dapat menggunakan kurung kurawal untuk mendapatkan akses pada nilai pertanyaan: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
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
    "addNew@choices": "Menambahkan pilihan",
    expressionIsEmpty: "Ekspresi kosong",
    value: "Nilai",
    text: "Teks",
    rowid: "ID baris",
    imageLink: "Link Gambar",
    columnEdit: "Ubah kolom: {0}",
    itemEdit: "Ubah item: {0}",
    url: "URL",
    path: "Path",
    valueName: "Nama nilai",
    choicesbyurl: {
      valueName: "Dapatkan nilai dari bidang JSON berikut"
    },
    titleName: "Nama judul",
    imageLinkName: "Dapatkan URL gambar dari bidang JSON berikut",
    allowEmptyResponse: "Izinkan respons kosong",
    titlePlaceholder: "Titel",
    surveyTitlePlaceholder: "Judul Survei",
    pageTitlePlaceholder: "Halaman {num}",
    descriptionPlaceholder: "Deskripsi",
    surveyDescriptionPlaceholder: "Deskripsi",
    pageDescriptionPlaceholder: "Deskripsi",
    showOtherItem: "Memiliki item lain",
    otherText: "Teks item lain",
    showNoneItem: "Perbolehkan opsi Tidak Ada",
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
    visible: "Terlihat?",
    isRequired: "Wajib?",
    markRequired: "Tandai sesuai kebutuhan",
    removeRequiredMark: "Hapus tanda yang diperlukan",
    isAllRowRequired: "Memerlukan jawaban untuk semua baris",
    requiredErrorText: "Pesan kesalahan \"Wajib\"",
    startWithNewLine: "Mulai dengan baris baru?",
    rows: "Jumlah baris",
    cols: "Kolom",
    placeholder: "Masukkan placeholder",
    showPreview: "Tunjukkan tinjauan gambar?",
    storeDataAsText: "Simpan konten berkas dalam hasil JSON sebagai teks",
    maxSize: "Ukuran maksimum berkas dalam byte",
    imageHeight: "Tinggi gambar",
    imageWidth: "Lebar gambar",
    rowCount: "Jumlah baris",
    columnLayout: "Tata letak kolom",
    addRowLocation: "Tambah lokasi tombol baris",
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
    mode: "Mode (ubah/baca saja)",
    clearInvisibleValues: "Bersihkan nilai tak terlihat",
    cookieName: "Nama cookie (untuk menonaktifkan menjalankan survei dua kali secara lokal)",
    sendResultOnPageNext: "Kirim hasil survei pada halaman selanjutnya",
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
    showPrevButton: "Tampilkan tombol sebelumnya (pengguna mungkin kembali ke halaman sebelumnya)",
    firstPageIsStarted: "Halaman pertama pada survei adalah halaman yang telah dimulai.",
    showCompletedPage: "Tampilkan keseluruhan halaman di akhir (completedHtml)",
    goNextPageAutomatic: "Setelah menjawa seluruh pertanyaan, pergi ke halaman berikutnya secara otomatis",
    showProgressBar: "Tampilkan progress bar",
    questionTitleLocation: "Lokasi judul pertanyaan",
    requiredText: "Simbil pertanyaan wajib",
    questionStartIndex: "Indeks mulai pertanyaan (1, 2 atau 'A', 'a')",
    showQuestionNumbers: "Tampilkan nomor pertanyaan",
    questionTitleTemplate: "Template Judul Pertanyaan, default adalah: '{no}. {require} {title}'",
    questionErrorLocation: "Lokasi Pertanyaan Error",
    focusFirstQuestionAutomatic: "Fokus ke pertanyaan pertama saat pergantian halaman",
    questionsOrder: "Urutakan elemen pada halaan",
    maxTimeToFinish: "Waktu maksimum untuk menyelesaikan survei",
    maxTimeToFinishPage: "Waktu maksimum untuk menyelesaikan suatu halaman",
    image: {
      imageHeight: "Tinggi gambar (dalam nilai yang diterima CSS)",
      imageWidth: "Lebar gambar (dalam nilai yang diterima CSS)"
    },
    // survey templates
    survey: {
      title: "Titel"
    },
    page: {
      title: "Titel",
      maxTimeToFinish: "Batas waktu untuk menyelesaikan halaman (dalam detik)"
    },
    question: {
      page: "Halaman induk"
    },
    showTimerPanel: "Tampilkan panel pengatur waktu",
    showTimerPanelMode: "Tampilkan mode panel pengatur waktu",
    renderMode: "Mode render",
    allowAddPanel: "Bolehkan penambahan panel",
    allowRemovePanel: "Bolehkan penghapusan panel",
    noEntriesText: "Teks entri kosong",
    panelAddText: "Teks tambah panel",
    panelRemoveText: "Teks hapus panel",
    isSinglePage: "Tampilkan seluruh elemen pada halaman",
    html: "Html",
    expression: "Ekspresi",
    setValue: "Menjawab",
    dataFormat: "Format gambar",
    allowAddRows: "Perbolehkan menambahkan baris",
    allowRemoveRows: "Perbolehkan menghapus baris",
    allowRowsDragAndDrop: "Perbolehkan baris seret dan lepas",
    responsiveImageSizeHelp: "Tidak berlaku jika Anda menentukan lebar atau tinggi gambar yang tepat.",
    minImageWidth: "Lebar gambar minimum",
    maxImageWidth: "Lebar gambar maksimum",
    minImageHeight: "Tinggi gambar minimum",
    maxImageHeight: "Tinggi gambar maksimum",
    minValue: "Nilai minimum",
    maxValue: "Nilai maksimum",
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
    maxOthersLength: "Panjang komentar maksimum (dalam karakter)",
    autoGrowComment: "Perluas area komentar secara otomatis jika perlu",
    allowResizeComment: "Mengizinkan pengguna mengubah ukuran area teks",
    textUpdateMode: "Memperbarui nilai pertanyaan teks",
    focusOnFirstError: "Mengatur fokus pada jawaban pertama yang tidak valid",
    checkErrorsMode: "Jalankan validasi",
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
    paneldynamic: {
      confirmDelete: "Konfirmasi penghapusan panel"
    },
    panelCount: "Jumlah panel awal",
    minPanelCount: "Jumlah panel minimum",
    maxPanelCount: "Jumlah panel maksimum",
    panelsState: "Status perluasan panel dalam",
    templateDescription: "Template deskripsi",
    templateTitle: "Templat judul",
    panelPrevText: "Tooltip tombol Panel sebelumnya",
    panelNextText: "Tooltip tombol Panel Berikutnya",
    showRangeInProgress: "Perlihatkan bilah kemajuan",
    templateTitleLocation: "Lokasi judul pertanyaan",
    panelRemoveButtonLocation: "Hapus lokasi tombol Panel",
    hideIfRowsEmpty: "Menyembunyikan pertanyaan jika tidak ada baris",
    hideColumnsIfEmpty: "Menyembunyikan kolom jika tidak ada baris",
    rateValues: "Nilai tarif kustom",
    rateCount: "Jumlah tarif",
    autoGenerate: "Bagaimana cara menentukan nilai tarif?",
    hideIfChoicesEmpty: "Sembunyikan pertanyaan jika tidak berisi pilihan",
    hideNumber: "Sembunyikan nomor pertanyaan",
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
    showClearButton: "Tampilkan tombol Hapus",
    showNumber: "Tampilkan nomor panel",
    logoWidth: "Lebar logo (dalam nilai yang diterima CSS)",
    logoHeight: "Tinggi logo (dalam nilai yang diterima CSS)",
    readOnly: "Baca-saja",
    enableIf: "Dapat diedit jika",
    emptyRowsText: "Pesan \"Tidak ada baris\"",
    size: "Ukuran bidang input (dalam karakter)",
    separateSpecialChoices: "Pisahkan pilihan khusus (Tidak Ada, Lainnya, Pilih Semua)",
    choicesFromQuestion: "Salin pilihan dari pertanyaan berikut",
    choicesFromQuestionMode: "Pilihan mana yang harus disalin?",
    showCommentArea: "Tampilkan area komentar",
    commentPlaceholder: "Tempat penampung area komentar",
    displayRateDescriptionsAsExtremeItems: "Menampilkan deskripsi tingkat sebagai nilai ekstrem",
    rowsOrder: "Urutan baris",
    columnsLayout: "Tata letak kolom",
    columnColCount: "Jumlah kolom bertumpuk",
    state: "Panel memperluas status",
    correctAnswer: "Jawaban yang Benar",
    defaultPanelValue: "Nilai Default",
    cells: "Teks Sel",
    keyName: "Kolom kunci",
    itemvalue: {
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
    tabs: {
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
      layout: "Tata letak",
      data: "Data",
      validation: "Validasi",
      cells: "Teks Sel",
      showOnCompleted: "Survei Selesai",
      logo: "Logo dalam Judul Survei",
      slider: "Slider",
      expression: "Ekspresi",
      others: "Lain"
    },
    editProperty: "Ubah properti '{0}'",
    items: "[ Barang: {0} ]",
    choicesVisibleIf: "Pilihan terlihat jika",
    choicesEnableIf: "Pilihan dapat dipilih jika",
    columnsEnableIf: "Kolom terlihat jika",
    rowsEnableIf: "Baris terlihat jika",
    indent: "Menambahkan inden",
    panel: {
      indent: "Menambahkan inden luar"
    },
    innerIndent: "Menambahkan inden dalam",
    defaultValueFromLastRow: "Mengambil nilai default dari baris terakhir",
    defaultValueFromLastPanel: "Mengambil nilai default dari panel terakhir",
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
    signatureWidth: "Lebar tanda tangan",
    signatureHeight: "Tinggi tanda tangan",
    verticalAlign: "Perataan vertikal",
    alternateRows: "Baris alternatif",
    columnsVisibleIf: "Kolom terlihat jika",
    rowsVisibleIf: "Baris terlihat jika",
    otherPlaceholder: "Tempat penampung area komentar",
    filePlaceholder: "Teks tempat penampung file",
    photoPlaceholder: "Teks placeholder foto",
    fileOrPhotoPlaceholder: "Teks placeholder file atau foto",
    rateType: "Jenis tarif"
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
    decimal: "desimal",
    currency: "mata uang",
    percent: "persen",
    firstExpanded: "perluasanPertama",
    off: "mati",
    onpanel: "Mulai di setiap panel",
    onPanel: "pada Panel",
    onSurvey: "pada Survei",
    list: "daftar",
    progressTop: "progress atas",
    progressBottom: "progress bawah",
    progressTopBottom: "progress atas bawah",
    tab: "Tab",
    horizontal: "horizontal",
    vertical: "vertikal",
    top: "atas",
    bottom: "bawah",
    topBottom: "atas dan bawah",
    both: "Keduanya",
    left: "kiri",
    right: "Kanan",
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
    on: "nyala",
    onPage: "pada halaman",
    edit: "ubah",
    display: "tampilan",
    onComplete: "saat selesai",
    onHidden: "saat tersembunyi",
    onHiddenContainer: "Ketika pertanyaan atau panel/halamannya disembunyikan",
    clearInvisibleValues: {
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
    all: "semua",
    page: "halaman",
    survey: "survei",
    onNextPage: "pada halaman selanjutnya",
    onValueChanged: "saat nilai berubah",
    onValueChanging: "Sebelum jawaban diubah",
    standard: "Struktur asli",
    singlePage: "Semua pertanyaan pada satu halaman",
    questionPerPage: "Setiap pertanyaan pada halaman individual",
    noPreview: "Tidak ada pratinjau",
    showAllQuestions: "Tampilkan semua pertanyaan",
    showAnsweredQuestions: "Tampilkan pertanyaan yang sudah terjawab saja",
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
    showNavigationButtons: {
      none: "Sembunyi"
    },
    showProgressBar: {
      off: "Sembunyi"
    },
    showTimerPanel: {
      none: "Sembunyi"
    },
    showTimerPanelMode: {
      all: "Keduanya"
    },
    detailPanelMode: {
      none: "Sembunyi"
    },
    addRowLocation: {
      default: "Tergantung pada tata letak matriks"
    },
    panelsState: {
      default: "Pengguna tidak dapat memperluas atau menciutkan panel",
      collapsed: "Semua panel diciutkan",
      expanded: "Semua panel diperluas"
    },
    widthMode: {
      auto: "Auto",
      static: "Statis",
      responsive: "Responsif"
    },
    imageFit: {
      none: "Tidak",
      contain: "Mengandung",
      cover: "Menutupi",
      fill: "Isi"
    },
    contentMode: {
      auto: "Auto",
      image: "Citra",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Tombol",
      dropdown: "Tarik-turun"
    },
    rateColorMode: {
      default: "Default"
    },
    autoGenerate: {
      "true": "Menghasilkan",
      "false": "Masukkan secara manual"
    },
    rateType: {
      labels: "Label",
      stars: "Bintang",
      smileys: "Smiley"
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
  pehelp: {
    cookieName: "Cookie mencegah pengguna mengisi survei yang sama dua kali.",
    size: "Mengubah ukuran area yang terlihat dari bidang input. Silakan gunakan pengaturan <b>Validasi → Panjang maksimum</b> untuk membatasi panjang input.",
    format: "Gunakan {0} sebagai placeholder untuk nilai aktual.",
    totalText: "Hanya terlihat bila setidaknya satu kolom memiliki Tipe total atau Ekspresi total.",
    acceptedTypes: "Lihat deskripsi atribut [accept](https://www.w3schools.com/tags/att_input_accept.asp) untuk informasi selengkapnya.",
    columnColCount: "Hanya berlaku untuk jenis sel Radiogroup dan Checkbox.",
    autocomplete: "Lihat deskripsi atribut [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) untuk informasi selengkapnya.",
    valueName: "Jika Anda tidak mengatur properti ini, jawabannya akan disimpan dalam bidang yang ditentukan oleh properti Name.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Jika kolom yang ditentukan berisi nilai yang identik, survei akan memunculkan kesalahan \"Nilai kunci tidak unik\".",
    filePlaceholder: "Berlaku ketika \"Jenis sumber\" adalah \"File lokal\" atau ketika kamera tidak tersedia",
    photoPlaceholder: "Berlaku ketika \"Jenis sumber\" adalah \"Kamera\".",
    fileOrPhotoPlaceholder: "Berlaku ketika \"Jenis sumber\" adalah \"File atau kamera lokal\"."
  },
  // Properties
  p: {
    title: {
      name: "judul",
      title: "Biarkan kosong, jika sama dengan 'Nama'"
    },
    multiSelect: "Perbolehkan beberapa pilihan",
    showLabel: "Tampilkan keterangan gambar",
    value: "Nilai",
    tabAlign: "Perataan tab",
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
    titleLocation: "lokasi judul",
    descriptionLocation: "Deskripsi lokasi",
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
    isUnique: "Unik",
    showInMultipleColumns: "Perlihatkan dalam beberapa kolom",
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
    itemSize: "ukuranBarang",
    elements: "Elemen",
    content: "Puas",
    navigationButtonsVisibility: "visibilitas tombol navigasi",
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
    allowCameraAccess: "Izinkan akses kamera",
    scaleColorMode: "Mode skala warna",
    rateColorMode: "Mode warna tingkat",
    templateTabTitle: "Judul tab templat",
    templateVisibleIf: "Template terlihat jika",
    copyDisplayValue: "Salin nilai tampilan"
  },
  theme: {
    "--background": "Warna latar belakang",
    "--background-dim-light": "Latar belakang warna cahaya redup",
    "--primary-foreground": "Warna latar depan primer",
    "--foreground": "Warna latar depan",
    "--base-unit": "Unit dasar",
    groupGeneral: "Umum",
    groupAdvanced: "Maju",
    groupHeader: "Header",
    groupBackground: "Latar",
    groupAppearance: "Rupa",
    themeName: "Tema",
    themeMode: "Penampilan pertanyaan",
    themeModePanels: "Default",
    themeModeLightweight: "Tanpa Panel",
    themePaletteLight: "Ringan",
    themePaletteDark: "Gelap",
    primaryColor: "Warna aksen",
    primaryDefaultColor: "Default",
    primaryDarkColor: "Hover",
    primaryLightColor: "Dipilih",
    coverTitleForecolor: "Warna depan judul",
    coverDescriptionForecolor: "Deskripsi forecolor",
    coverOverlapEnabled: "Tumpang tindih",
    backgroundDimColor: "Warna latar belakang",
    backgroundImage: "Gambar latar belakang",
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Menutupi",
    backgroundImageFitContain: "Mengandung",
    backgroundImageFitFill: "Merentangkan",
    backgroundImageFitTile: "Ubin",
    backgroundOpacity: "Opacity",
    backgroundImageAttachmentFixed: "Tetap",
    backgroundImageAttachmentScroll: "Gulir",
    panelBackgroundTransparency: "Opasitas latar belakang panel",
    questionBackgroundTransparency: "Opasitas latar belakang pertanyaan",
    questionPanel: "Latar belakang panel dan radius sudut",
    questionTitle: "Font judul pertanyaan",
    questionDescription: "Font deskripsi pertanyaan",
    editorPanel: "Elemen input",
    editorFont: "Font elemen input",
    backcolor: "Latar belakang default",
    hovercolor: "Arahkan kursor ke latar belakang",
    borderDecoration: "Dekorasi perbatasan",
    accentBackground: "Latar belakang aksen",
    accentForeground: "Latar depan aksen",
    primaryForecolor: "Warna default",
    primaryForecolorLight: "Warna dinonaktifkan",
    linesColors: "Warna garis minor",
    borderDefault: "Gelap",
    borderLight: "Ringan",
    fontFamily: "Keluarga font",
    fontSize: "Ukuran font",
    color: "Warna",
    placeholderColor: "Warna tempat penampung",
    size: "Tingginya",
    fontWeightRegular: "Biasa",
    fontWeightHeavy: "Berat",
    fontWeightSemiBold: "Semi-tebal",
    fontWeightBold: "Berani",
    scale: "Sisik",
    cornerRadius: "Radius sudut",
    surveyTitle: "Font judul survei",
    pageTitle: "Font judul halaman",
    pageDescription: "Font deskripsi halaman",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Tambahkan Efek Bayangan",
    opacity: "Opacity",
    boxShadowBlur: "Kabur",
    boxShadowSpread: "Penyebaran",
    boxShadowDrop: "Menjatuhkan",
    boxShadowInner: "Batin",
    questionShadow: "Efek bayangan",
    editorShadow: "Efek bayangan elemen input",
    headerView: "Melihat",
    headerViewBasic: "Dasar",
    headerViewAdvanced: "Maju",
    coverInheritWidthFrom: "Lebar area konten",
    coverInheritWidthFromSurvey: "Sama seperti survei",
    coverInheritWidthFromContainer: "Sesuai dengan kontainer",
    coverTextAreaWidth: "Lebar teks",
    coverBackgroundColorSwitch: "Warna latar belakang",
    coverBackgroundColorNone: "Tidak",
    coverBackgroundColorAccentColor: "Warna aksen",
    coverBackgroundColorCustom: "Adat",
    horizontalAlignmentLeft: "Kiri",
    horizontalAlignmentCenter: "Pusat",
    horizontalAlignmentRight: "Kanan",
    verticalAlignmentTop: "Puncak",
    verticalAlignmentMiddle: "Tengah",
    verticalAlignmentBottom: "Dasar",
    logoPosition: "Posisi Logo",
    coverTitlePosition: "Posisi Judul",
    coverDescriptionPosition: "Deskripsi Posisi",
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
      green: "Hijau"
    }
  }
};

editorLocalization.locales["id"] = indonesianStrings;

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
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
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
// pe.isAllRowRequired: "Require answer for all rows" => "Memerlukan jawaban untuk semua baris"
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
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Batas waktu untuk menyelesaikan halaman (dalam detik)"
// question.page: "Parent page" => "Halaman induk"
// pe.noEntriesText: "Empty entries text" => "Teks entri kosong"
// pe.setValue: "Answer" => "Menjawab"
// pe.dataFormat: "Image format" => "Format gambar"
// pe.allowAddRows: "Allow adding rows" => "Perbolehkan menambahkan baris"
// pe.allowRemoveRows: "Allow removing rows" => "Perbolehkan menghapus baris"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Perbolehkan baris seret dan lepas"
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
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Panjang komentar maksimum (dalam karakter)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Perluas area komentar secara otomatis jika perlu"
// pe.allowResizeComment: "Allow users to resize text areas" => "Mengizinkan pengguna mengubah ukuran area teks"
// pe.textUpdateMode: "Update text question value" => "Memperbarui nilai pertanyaan teks"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Mengatur fokus pada jawaban pertama yang tidak valid"
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
// pe.panelPrevText: "Previous Panel button tooltip" => "Tooltip tombol Panel sebelumnya"
// pe.panelNextText: "Next Panel button tooltip" => "Tooltip tombol Panel Berikutnya"
// pe.showRangeInProgress: "Show progress bar" => "Perlihatkan bilah kemajuan"
// pe.templateTitleLocation: "Question title location" => "Lokasi judul pertanyaan"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Hapus lokasi tombol Panel"
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
// pe.showClearButton: "Show the Clear button" => "Tampilkan tombol Hapus"
// pe.showNumber: "Show panel number" => "Tampilkan nomor panel"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Lebar logo (dalam nilai yang diterima CSS)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Tinggi logo (dalam nilai yang diterima CSS)"
// pe.readOnly: "Read-only" => "Baca-saja"
// pe.enableIf: "Editable if" => "Dapat diedit jika"
// pe.emptyRowsText: "\"No rows\" message" => "Pesan \"Tidak ada baris\""
// pe.size: "Input field size (in characters)" => "Ukuran bidang input (dalam karakter)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Pisahkan pilihan khusus (Tidak Ada, Lainnya, Pilih Semua)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Salin pilihan dari pertanyaan berikut"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Pilihan mana yang harus disalin?"
// pe.showCommentArea: "Show the comment area" => "Tampilkan area komentar"
// pe.commentPlaceholder: "Comment area placeholder" => "Tempat penampung area komentar"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Menampilkan deskripsi tingkat sebagai nilai ekstrem"
// pe.rowsOrder: "Row order" => "Urutan baris"
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
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Mengambil nilai default dari baris terakhir"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Mengambil nilai default dari panel terakhir"
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
// addRowLocation.default: "Depends on matrix layout" => "Tergantung pada tata letak matriks"
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
// theme.groupGeneral: "General" => "Umum"
// theme.groupAdvanced: "Advanced" => "Maju"
// theme.themeName: "Theme" => "Tema"
// theme.themeMode: "Question appearance" => "Penampilan pertanyaan"
// theme.themeModePanels: "Default" => "Default"
// theme.themeModeLightweight: "Without Panels" => "Tanpa Panel"
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
// theme.surveyTitle: "Survey title font" => "Font judul survei"
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
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// names.sharp: "Sharp" => "Tajam"
// names.borderless: "Borderless" => "Tanpa batas"
// names.flat: "Flat" => "Rata"
// names.doubleborder: "Double Border" => "Batas Ganda"
// names.layered: "Layered" => "Berlapis"
// names.solid: "Solid" => "Keras"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Apakah Anda yakin ingin menghapus semua string untuk bahasa ini?"
// ed.themeResetButton: "Reset theme settings to default" => "Setel ulang pengaturan tema ke default"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// theme.placeholderColor: "Placeholder color" => "Warna tempat penampung"
// ed.themeSettings: "Theme Settings" => "Pengaturan Tema"
// ed.themeSettingsTooltip: "Open theme settings" => "Buka pengaturan tema"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.resetToDefaultCaption: "Reset" => "Reset"
// pv.file: "Local files" => "File lokal"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "File atau kamera lokal"
// ed.translateUsigAI: "Auto-translate All" => "Terjemahkan otomatis Semua"
// ed.translationDialogTitle: "Untranslated strings" => "String yang tidak diterjemahkan"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Harap masukkan setidaknya {0} item"
// lg.question_resetValueName: "Reset question value" => "Mereset nilai pertanyaan"
// lg.column_resetValue: "Reset column value" => "Mereset nilai kolom"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.markRequired: "Mark as required" => "Tandai sesuai kebutuhan"
// pe.removeRequiredMark: "Remove the required mark" => "Hapus tanda yang diperlukan"
// p.resetValueIf: "Reset value if" => "Reset nilai jika"
// lg.question_setValueName: "Set question value" => "Tetapkan nilai pertanyaan"
// lg.column_resetValueName: "Reset column value" => "Mereset nilai kolom"
// lg.column_setValueName: "Set column value" => "Mengatur nilai kolom"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Ekspresi yang hasilnya akan ditetapkan ke pertanyaan target."
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// survey.title: "Title" => "Titel"
// page.title: "Title" => "Titel"
// p.setValueIf: "Set value if" => "Tetapkan nilai jika"
// theme.groupHeader: "Header" => "Header"
// theme.coverTitleForecolor: "Title forecolor" => "Warna depan judul"
// theme.coverOverlapEnabled: "Overlap" => "Tumpang tindih"
// theme.backgroundImageFitFill: "Stretch" => "Merentangkan"
// theme.backgroundImageFitTile: "Tile" => "Ubin"
// theme.headerView: "View" => "Melihat"
// theme.headerViewBasic: "Basic" => "Dasar"
// theme.headerViewAdvanced: "Advanced" => "Maju"
// theme.coverInheritWidthFrom: "Content area width" => "Lebar area konten"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Sama seperti survei"
// theme.coverInheritWidthFromPage: "Fit to page" => "Paskan dengan halaman"
// theme.coverTextAreaWidth: "Text width" => "Lebar teks"
// theme.coverBackgroundColorSwitch: "Background color" => "Warna latar belakang"
// theme.coverBackgroundColorNone: "None" => "Tidak"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Warna aksen"
// theme.coverBackgroundColorCustom: "Custom" => "Adat"
// theme.horizontalAlignmentLeft: "Left" => "Kiri"
// theme.horizontalAlignmentCenter: "Center" => "Pusat"
// theme.horizontalAlignmentRight: "Right" => "Kanan"
// theme.verticalAlignmentTop: "Top" => "Puncak"
// theme.verticalAlignmentMiddle: "Middle" => "Tengah"
// theme.verticalAlignmentBottom: "Bottom" => "Dasar"
// theme.logoPosition: "Logo Position" => "Posisi Logo"
// theme.coverTitlePosition: "Title Position" => "Posisi Judul"
// theme.coverDescriptionPosition: "Description Position" => "Deskripsi Posisi"
// lg.question_resetValueText: "reset value for question: {0}" => "reset nilai untuk pertanyaan: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Tetapkan nilai: {1} pertanyaan: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Setel ulang nilai sel untuk kolom: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Menetapkan nilai sel: {1} ke kolom: {0}"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// ed.surveyJsonExportButton: "Export" => "Ekspor"
// ed.surveyJsonImportButton: "Import" => "Mengimpor"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Salin ke papan klip"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// pe.filePlaceholder: "File placeholder text" => "Teks tempat penampung file"
// pe.photoPlaceholder: "Photo placeholder text" => "Teks placeholder foto"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Teks placeholder file atau foto"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Berlaku ketika \"Jenis sumber\" adalah \"File lokal\" atau ketika kamera tidak tersedia"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Berlaku ketika \"Jenis sumber\" adalah \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Berlaku ketika \"Jenis sumber\" adalah \"File atau kamera lokal\"."
// theme.groupBackground: "Background" => "Latar"
// theme.groupAppearance: "Appearance" => "Rupa"
// theme.coverDescriptionForecolor: "Description forecolor" => "Deskripsi forecolor"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Apakah Anda benar-benar ingin mengatur ulang tema? Semua penyesuaian Anda akan hilang."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Ya, atur ulang tema"
// lg.expressionSetup: "" => ""
// lg.actionsSetup: "" => ""
// theme.groupBackground: "Background" => "Latar"
// theme.groupAppearance: "Appearance" => "Rupa"
// theme.coverDescriptionForecolor: "Description forecolor" => "Deskripsi forecolor"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Sesuai dengan kontainer"
